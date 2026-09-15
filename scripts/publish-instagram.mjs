#!/usr/bin/env node

import { promises as fs } from "node:fs";
import path from "node:path";

const FEED_URL =
  process.env.PINTEREST_FEED_URL ?? "https://www.fam-space.fr/pinterest-v2.xml";
const GRAPH_VERSION = "v26.0";
const DEFAULT_INSTAGRAM_USER_ID = "28082762261424741";
const famSpaceDir = path.resolve(process.env.FAM_SPACE_DIR ?? "../fam-space");
const mode = (process.env.INSTAGRAM_MODE ?? "dry-run").trim();
const targetSlug = (process.env.INSTAGRAM_TARGET_SLUG ?? "").trim();
const instagramUserId =
  (process.env.INSTAGRAM_USER_ID ?? "").trim() || DEFAULT_INSTAGRAM_USER_ID;
const instagramAccessToken = (process.env.INSTAGRAM_ACCESS_TOKEN ?? "").trim();
const stateFile = process.argv[2];

if (!stateFile) {
  console.error("Usage: node scripts/publish-instagram.mjs <instagram-state.json>");
  process.exit(2);
}
if (!["dry-run", "live-one", "live-all"].includes(mode)) {
  throw new Error(`Mode Instagram inconnu: ${mode}`);
}
if (mode === "live-one" && !targetSlug) {
  throw new Error("INSTAGRAM_TARGET_SLUG est obligatoire en mode live-one.");
}
if (mode !== "dry-run" && !instagramAccessToken) {
  throw new Error("INSTAGRAM_ACCESS_TOKEN est absent.");
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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
  if (Number(state.version) !== 1 || !state.posts || typeof state.posts !== "object") {
    throw new Error("instagram-state.json invalide: version 1 et posts{} requis");
  }
  return state;
};

const saveState = async (state) => {
  await fs.writeFile(stateFile, `${JSON.stringify(state, null, 2)}\n`, "utf8");
};

const fetchFeed = async () => {
  const response = await fetch(FEED_URL, {
    headers: { "user-agent": "FamSpaceInstagramPublisher/1.0" },
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

// Le flux Pinterest est la source de vérité de l'éligibilité sociale.
// La provenance n'est utilisée ici que pour retrouver le JPEG correspondant
// à la hero WebP présente dans le flux, car l'API Instagram attend un JPEG.
const resolveInstagramImage = async (entry, slug) => {
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
  [entry.title, entry.description, `À lire sur Fam Space :\n${entry.url}`]
    .filter(Boolean)
    .join("\n\n");

const validateEntry = async (entry, slug) => {
  if (!entry.title || !entry.description || !entry.url) {
    throw new Error("entrée incomplète dans le flux Pinterest");
  }
  const caption = buildCaption(entry);
  if (caption.length > 2_200) {
    throw new Error(`légende trop longue: ${caption.length}/2200`);
  }
  const image = await resolveInstagramImage(entry, slug);
  return { image, caption };
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

const postForm = async (url, fields) => {
  const body = new URLSearchParams();
  for (const [key, value] of Object.entries(fields)) {
    if (value !== undefined && value !== null && value !== "") {
      body.set(key, String(value));
    }
  }
  return parseJsonResponse(await fetch(url, { method: "POST", body }));
};

const readInstagramQuota = async () => {
  const url = new URL(
    `https://graph.instagram.com/${GRAPH_VERSION}/${instagramUserId}/content_publishing_limit`,
  );
  url.searchParams.set("fields", "quota_usage,config");
  url.searchParams.set("access_token", instagramAccessToken);
  const data = await parseJsonResponse(await fetch(url));
  const item = data?.data?.[0] ?? {};
  const usage = Number(item.quota_usage);
  const total = Number(item?.config?.quota_total);
  if (!Number.isFinite(usage) || !Number.isFinite(total)) {
    throw new Error("Instagram: réponse quota invalide");
  }
  return { usage, total, remaining: Math.max(0, total - usage) };
};

const waitForInstagramContainer = async (containerId) => {
  for (let attempt = 1; attempt <= 20; attempt += 1) {
    const url = new URL(`https://graph.instagram.com/${containerId}`);
    url.searchParams.set("fields", "status_code,status");
    url.searchParams.set("access_token", instagramAccessToken);
    const data = await parseJsonResponse(await fetch(url));
    if (data.status_code === "FINISHED") return;
    if (data.status_code === "ERROR" || data.status_code === "EXPIRED") {
      throw new Error(`container Instagram ${data.status_code}: ${data.status ?? ""}`);
    }
    await sleep(2_000);
  }
  throw new Error("timeout du container Instagram");
};

const publishInstagram = async (entry, image) => {
  const created = await postForm(`https://graph.instagram.com/${instagramUserId}/media`, {
    image_url: image.url,
    caption: buildCaption(entry),
    access_token: instagramAccessToken,
  });
  if (!created.id) throw new Error("Instagram n'a pas renvoyé de creation_id");

  await waitForInstagramContainer(created.id);

  const published = await postForm(
    `https://graph.instagram.com/${instagramUserId}/media_publish`,
    { creation_id: created.id, access_token: instagramAccessToken },
  );
  if (!published.id) throw new Error("Instagram n'a pas renvoyé de media id");
  return published.id;
};

const uniqueFeedEntries = (entries) => {
  const bySlug = new Map();
  for (const entry of entries) {
    const slug = slugFromArticleUrl(entry.url);
    if (!bySlug.has(slug)) bySlug.set(slug, entry);
  }
  return bySlug;
};

const runDryRun = async (entriesBySlug, state) => {
  let ready = 0;
  let blocked = 0;
  let alreadyPublished = 0;

  for (const [slug, entry] of entriesBySlug) {
    if (state.posts[slug]) {
      alreadyPublished += 1;
      continue;
    }
    try {
      await validateEntry(entry, slug);
      ready += 1;
      console.log(`[PRÊT] ${slug}`);
    } catch (error) {
      blocked += 1;
      console.error(`[BLOQUÉ] ${slug}: ${error.message}`);
    }
  }

  console.log("---");
  console.log(`Flux Pinterest: ${entriesBySlug.size}`);
  console.log(`Déjà publié Instagram: ${alreadyPublished}`);
  console.log(`Prêts: ${ready}`);
  console.log(`Bloqués: ${blocked}`);
  console.log("Aucune publication effectuée.");
};

const publishOne = async (slug, entry, state) => {
  const { image } = await validateEntry(entry, slug);
  const mediaId = await publishInstagram(entry, image);
  state.posts[slug] = {
    id: mediaId,
    at: new Date().toISOString(),
    mode: "image",
    source: "instagram-publisher",
  };
  await saveState(state);
  console.log(`[PUBLIÉ] ${slug} -> ${mediaId}`);
};

const runLiveOne = async (entriesBySlug, state) => {
  const entry = entriesBySlug.get(targetSlug);
  if (!entry) throw new Error(`Slug absent du flux Pinterest: ${targetSlug}`);
  if (state.posts[targetSlug]) {
    console.log(`[DÉJÀ PUBLIÉ] ${targetSlug}`);
    return;
  }
  const quota = await readInstagramQuota();
  if (quota.remaining < 1) throw new Error(`Quota Instagram épuisé: ${quota.usage}/${quota.total}`);
  await publishOne(targetSlug, entry, state);
};

const runLiveAll = async (entriesBySlug, state) => {
  const pending = [...entriesBySlug.entries()].filter(([slug]) => !state.posts[slug]);
  if (pending.length === 0) {
    console.log("Instagram est à jour: aucune publication en attente.");
    return;
  }

  const quota = await readInstagramQuota();
  const batch = pending.slice(0, quota.remaining);
  console.log(
    `Instagram: ${pending.length} en attente, quota ${quota.usage}/${quota.total}, ` +
      `${batch.length} publication(s) prévue(s).`,
  );

  let published = 0;
  let failed = 0;
  for (const [slug, entry] of batch) {
    try {
      await publishOne(slug, entry, state);
      published += 1;
    } catch (error) {
      failed += 1;
      console.error(`[ÉCHEC] ${slug}: ${error.message}`);
    }
  }

  console.log("---");
  console.log(`Publiés: ${published}`);
  console.log(`Échecs: ${failed}`);
  console.log(`Restants après ce passage: ${pending.length - published}`);
};

const main = async () => {
  const [state, xml] = await Promise.all([loadState(), fetchFeed()]);
  const entries = parseFeed(xml);
  if (entries.length === 0) throw new Error("Flux Pinterest vide ou illisible");
  const entriesBySlug = uniqueFeedEntries(entries);

  if (mode === "dry-run") await runDryRun(entriesBySlug, state);
  else if (mode === "live-one") await runLiveOne(entriesBySlug, state);
  else await runLiveAll(entriesBySlug, state);
};

main().catch((error) => {
  console.error(error.stack ?? error.message);
  process.exitCode = 1;
});
