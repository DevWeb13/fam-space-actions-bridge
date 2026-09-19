#!/usr/bin/env node

import { promises as fs } from "node:fs";
import path from "node:path";
import { execFile as execFileCallback } from "node:child_process";
import { promisify } from "node:util";

const execFile = promisify(execFileCallback);

const FEED_URL =
  process.env.PINTEREST_FEED_URL ?? "https://www.fam-space.fr/pinterest-v2.xml";
const GRAPH_VERSION = process.env.META_GRAPH_VERSION || "v26.0";
const DEFAULT_PAGE_ID = "1314472035081859";
const DEFAULT_MAX_NEW_PER_RUN = 20;

const stateFile = process.argv[2];
if (!stateFile) {
  console.error("Usage: node scripts/publish-facebook.mjs <facebook-state.json>");
  process.exit(2);
}

const famSpaceDir = path.resolve(process.env.FAM_SPACE_DIR ?? "../fam-space");
const legacyStateFile = path.resolve(
  process.env.LEGACY_SOCIAL_STATE_FILE ??
    path.join(path.dirname(stateFile), "social-state.json"),
);
const pageId = process.env.FACEBOOK_PAGE_ID || DEFAULT_PAGE_ID;
const accessToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN || "";
const dryRun = process.env.SOCIAL_DRY_RUN === "true";
const maxNewPerRun = Number(
  process.env.FACEBOOK_MAX_NEW_PER_RUN || DEFAULT_MAX_NEW_PER_RUN,
);

if (!Number.isInteger(maxNewPerRun) || maxNewPerRun < 1 || maxNewPerRun > 50) {
  throw new Error(`FACEBOOK_MAX_NEW_PER_RUN invalide: ${maxNewPerRun}`);
}

const decodeXml = (value) =>
  value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
      String.fromCodePoint(Number.parseInt(hex, 16)),
    )
    .replace(/&#([0-9]+);/g, (_, decimal) =>
      String.fromCodePoint(Number.parseInt(decimal, 10)),
    )
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

const getTagText = (block, tagName) => {
  const match = block.match(
    new RegExp(`<${tagName}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tagName}>`, "i"),
  );
  return match ? decodeXml(match[1].trim()) : "";
};

const getEnclosureUrl = (block) => {
  const tag = block.match(/<enclosure\b([^>]*)\/?\s*>/i)?.[1] ?? "";
  const url = tag.match(/\burl="([^"]+)"/i)?.[1] ?? "";
  return decodeXml(url);
};

const parseFeed = (xml) => {
  const entries = [];
  for (const match of xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)) {
    const block = match[1];
    entries.push({
      title: getTagText(block, "title"),
      description: getTagText(block, "description"),
      url: getTagText(block, "link") || getTagText(block, "guid"),
      imageUrl: getEnclosureUrl(block),
      pubDate: getTagText(block, "pubDate"),
    });
  }
  return entries;
};

const slugFromArticleUrl = (rawUrl) => {
  const url = new URL(rawUrl);
  const parts = url.pathname.split("/").filter(Boolean);
  const articleIndex = parts.indexOf("articles");
  if (articleIndex < 0 || !parts[articleIndex + 2]) {
    throw new Error(`URL article inattendue: ${rawUrl}`);
  }
  return parts[articleIndex + 2];
};

const loadState = async () => {
  const state = JSON.parse(await fs.readFile(stateFile, "utf8"));
  if (!state.activatedAt) {
    throw new Error("facebook-state.json: activatedAt manquant");
  }
  state.version = 3;
  state.posts ??= {};
  return state;
};

const saveState = async (state) => {
  await fs.writeFile(stateFile, `${JSON.stringify(state, null, 2)}\n`, "utf8");
};

const loadLegacyFacebookSlugs = async () => {
  try {
    const legacy = JSON.parse(await fs.readFile(legacyStateFile, "utf8"));
    const slugs = new Set();
    for (const [slug, networks] of Object.entries(legacy.articles ?? {})) {
      if (networks?.facebook?.id) slugs.add(slug);
    }
    return slugs;
  } catch {
    return new Set();
  }
};

const fetchFeed = async () => {
  const response = await fetch(FEED_URL, {
    headers: { "user-agent": "FamSpaceFacebookPublisher/2.0" },
    redirect: "follow",
  });
  if (!response.ok) {
    throw new Error(`Flux Pinterest indisponible: HTTP ${response.status}`);
  }
  return response.text();
};

const stripTracking = (rawUrl) => {
  const url = new URL(rawUrl);
  for (const key of [...url.searchParams.keys()]) {
    if (key.toLowerCase().startsWith("utm_")) url.searchParams.delete(key);
  }
  return url.href;
};

// Le flux Pinterest est l'unique source d'éligibilité sociale.
// La provenance sert seulement à retrouver le JPEG correspondant à la hero WebP
// déjà sélectionnée dans le flux.
const resolveFacebookImage = async (entry, slug) => {
  if (!entry.imageUrl) throw new Error("image absente du flux Pinterest");

  const provenancePath = path.join(
    famSpaceDir,
    "content-data",
    "article-images",
    `${slug}.json`,
  );
  const provenance = JSON.parse(await fs.readFile(provenancePath, "utf8"));

  const feedImagePath = new URL(entry.imageUrl).pathname;
  if (!provenance.output?.path || provenance.output.path !== feedImagePath) {
    throw new Error("la provenance ne correspond pas à la hero du flux Pinterest");
  }

  const jpeg = [provenance.download, provenance.original]
    .filter(Boolean)
    .find((candidate) => candidate?.mime === "image/jpeg" && candidate?.url);
  if (!jpeg) throw new Error("aucune source JPEG pour cette hero");

  const url = new URL(stripTracking(jpeg.url));
  if (url.protocol !== "https:") throw new Error("source JPEG non HTTPS");

  return { url: url.href };
};

const buildCaption = (entry) =>
  [entry.title, entry.description, `👉 Lire l’article sur Fam Space : ${entry.url}`]
    .filter(Boolean)
    .join("\n\n");

const validateEntry = async (entry, slug) => {
  if (!entry.title || !entry.description || !entry.url || !entry.imageUrl || !entry.pubDate) {
    throw new Error("entrée incomplète dans le flux Pinterest");
  }

  const articleUrl = new URL(entry.url);
  if (articleUrl.protocol !== "https:") throw new Error("URL article non HTTPS");

  const publishedMs = Date.parse(entry.pubDate);
  if (!Number.isFinite(publishedMs)) {
    throw new Error(`pubDate invalide dans le flux Pinterest: ${entry.pubDate}`);
  }

  const image = await resolveFacebookImage(entry, slug);
  return { image, publishedMs };
};

const parseJsonResponse = async (response) => {
  const text = await response.text();
  let data;
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { raw: text };
  }

  if (!response.ok || data.error) {
    const message = data?.error?.message ?? data?.message ?? text ?? response.statusText;
    throw new Error(`${response.status} ${message}`);
  }
  return data;
};

const publishFacebook = async (entry, image) => {
  const body = new URLSearchParams();
  body.set("url", image.url);
  body.set("caption", buildCaption(entry));
  body.set("published", "true");
  body.set("access_token", accessToken);

  const response = await fetch(
    `https://graph.facebook.com/${GRAPH_VERSION}/${pageId}/photos`,
    { method: "POST", body },
  );
  const data = await parseJsonResponse(response);
  const id = data.post_id ?? data.id;
  if (!id) throw new Error("publication Facebook sans identifiant de retour");
  return String(id);
};

const waitForArticle = async (url) => {
  for (let attempt = 1; attempt <= 12; attempt += 1) {
    try {
      const response = await fetch(url, {
        method: "GET",
        redirect: "follow",
        headers: { "user-agent": "FamSpaceFacebookPublisher/2.0" },
      });
      if (response.ok) return;
    } catch {
      // Le déploiement peut encore être en convergence juste après la release.
    }
    if (attempt < 12) {
      await new Promise((resolve) => setTimeout(resolve, 10_000));
    }
  }
  throw new Error(`article inaccessible en production: ${url}`);
};

const git = async (...args) => {
  const { stdout } = await execFile("git", ["-C", famSpaceDir, ...args], {
    maxBuffer: 10 * 1024 * 1024,
  });
  return stdout.trim();
};

const uniqueFeedEntries = (entries) => {
  const bySlug = new Map();
  for (const entry of entries) {
    const slug = slugFromArticleUrl(entry.url);
    if (!bySlug.has(slug)) bySlug.set(slug, entry);
  }
  return bySlug;
};

const main = async () => {
  if (!dryRun && !accessToken) {
    throw new Error("FACEBOOK_PAGE_ACCESS_TOKEN absent");
  }

  const [state, xml, productionSha, legacyFacebookSlugs] = await Promise.all([
    loadState(),
    fetchFeed(),
    git("rev-parse", "HEAD"),
    loadLegacyFacebookSlugs(),
  ]);

  const entries = parseFeed(xml);
  if (entries.length === 0) throw new Error("Flux Pinterest vide ou illisible");

  const activatedMs = Date.parse(state.activatedAt);
  if (!Number.isFinite(activatedMs)) {
    throw new Error("facebook-state.json: activatedAt invalide");
  }

  const nowMs = Date.now();
  const entriesBySlug = uniqueFeedEntries(entries);
  const pending = [];

  for (const [slug, entry] of entriesBySlug) {
    if (state.posts[slug] || legacyFacebookSlugs.has(slug)) continue;

    try {
      const prepared = await validateEntry(entry, slug);
      if (prepared.publishedMs < activatedMs || prepared.publishedMs > nowMs) continue;
      pending.push({ slug, entry, ...prepared });
    } catch (error) {
      console.error(`[BLOQUÉ] ${slug}: ${error.message}`);
    }
  }

  pending.sort((a, b) => a.publishedMs - b.publishedMs);
  const batch = pending.slice(0, maxNewPerRun);

  console.log(`Production: ${productionSha}`);
  console.log(`Flux Pinterest: ${entriesBySlug.size}`);
  console.log(`Déjà connus dans l’ancien état Facebook: ${legacyFacebookSlugs.size}`);
  console.log(`Éligibles et non publiés depuis activation: ${pending.length}`);
  console.log(`Publication(s) prévue(s): ${batch.length}`);

  if (dryRun) {
    for (const item of batch) console.log(`[PRÊT] ${item.slug}`);
    console.log("Aucune publication effectuée.");
    return;
  }

  let published = 0;
  let failures = 0;

  for (const { slug, entry, image } of batch) {
    try {
      await waitForArticle(entry.url);
      const facebookId = await publishFacebook(entry, image);
      state.posts[slug] = {
        id: facebookId,
        at: new Date().toISOString(),
        productionSha,
        mode: "hero",
        kind: "feed",
        imageUrl: image.url,
        feedImageUrl: entry.imageUrl,
        feedPubDate: entry.pubDate,
        source: "pinterest-v2",
      };
      await saveState(state);
      published += 1;
      console.log(`[PUBLIÉ] ${slug} -> ${facebookId}`);
    } catch (error) {
      failures += 1;
      console.error(`[ÉCHEC] ${slug}: ${error.message}`);
    }
  }

  console.log("---");
  console.log(`Publiés: ${published}`);
  console.log(`Échecs: ${failures}`);
  console.log(`Restants après ce passage: ${pending.length - published}`);

  if (failures > 0) process.exitCode = 1;
};

main().catch((error) => {
  console.error(error.stack ?? error.message);
  process.exitCode = 1;
});
