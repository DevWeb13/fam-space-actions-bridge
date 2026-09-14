#!/usr/bin/env node

import { promises as fs } from "node:fs";
import path from "node:path";
import { execFile as execFileCallback } from "node:child_process";
import { promisify } from "node:util";

const execFile = promisify(execFileCallback);
const SITE_URL = "https://www.fam-space.fr";
const FALLBACK_IMAGE_URL = `${SITE_URL}/images/social/fam-space-default.png`;
const GRAPH_VERSION = process.env.META_GRAPH_VERSION || "v26.0";
const DEFAULT_PAGE_ID = "1314472035081859";
const PARIS_TIME_ZONE = "Europe/Paris";

const stateFile = process.argv[2];
if (!stateFile) {
  console.error("Usage: node scripts/facebook-catchup-once.mjs <facebook-state.json>");
  process.exit(2);
}

const famSpaceDir = path.resolve(process.env.FAM_SPACE_DIR ?? "../fam-space");
const legacyStateFile = path.resolve(
  process.env.LEGACY_SOCIAL_STATE_FILE ?? path.join(path.dirname(stateFile), "social-state.json"),
);
const pageId = process.env.FACEBOOK_PAGE_ID || DEFAULT_PAGE_ID;
const accessToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN || "";
const dryRun = process.env.SOCIAL_DRY_RUN === "true";

const normalizeWhitespace = (value) => String(value ?? "").replace(/\s+/g, " ").trim();

const cleanScalar = (raw) => {
  const value = raw.trim();
  if (value.startsWith('"') && value.endsWith('"')) {
    try {
      return JSON.parse(value);
    } catch {
      return value.slice(1, -1);
    }
  }
  if (value.startsWith("'") && value.endsWith("'")) {
    return value.slice(1, -1).replace(/''/g, "'");
  }
  return value;
};

const getFrontmatterScalar = (frontmatter, key) => {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, "m"));
  return match ? cleanScalar(match[1]) : "";
};

const parseArticle = (filePath, markdown) => {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const frontmatter = match[1];
  const article = {
    filePath,
    title: getFrontmatterScalar(frontmatter, "title"),
    summary: getFrontmatterScalar(frontmatter, "summary"),
    slug: getFrontmatterScalar(frontmatter, "slug"),
    status: getFrontmatterScalar(frontmatter, "status"),
    publishedAt: getFrontmatterScalar(frontmatter, "publishedAt"),
    eventEndsAt: getFrontmatterScalar(frontmatter, "eventEndsAt"),
    category: getFrontmatterScalar(frontmatter, "category"),
  };
  if (!article.title || !article.slug || !article.category || !article.publishedAt) return null;
  article.url = `${SITE_URL}/articles/${article.category}/${article.slug}/`;
  return article;
};

const normalizeLicense = (license) =>
  normalizeWhitespace(license).toLowerCase().replace(/[–—]/g, "-");

const isAllowedMetaLicense = (license) => {
  const normalized = normalizeLicense(license);
  if (
    normalized === "public domain" ||
    normalized === "public-domain" ||
    /^public domain mark(?: 1\.0)?$/.test(normalized) ||
    /^cc0(?: 1\.0(?: universal)?)?$/.test(normalized)
  ) {
    return true;
  }
  return /^cc by(?:-sa)?(?: [1-4](?:\.0)?)?$/.test(normalized);
};

const licenseRequiresAttribution = (license) =>
  /^cc by(?:-sa)?(?: [1-4](?:\.0)?)?$/.test(normalizeLicense(license));

const stripTracking = (rawUrl) => {
  const url = new URL(rawUrl);
  for (const key of [...url.searchParams.keys()]) {
    if (key.toLowerCase().startsWith("utm_")) url.searchParams.delete(key);
  }
  return url.href;
};

const buildCreditText = (credit) => {
  if (!credit) return "";
  return `Photo: ${credit.creator} - ${credit.license} - ${credit.licenseUrl} - ${credit.sourceUrl}`;
};

const selectCatchupImage = async (article) => {
  const provenancePath = path.join(
    famSpaceDir,
    "content-data",
    "article-images",
    `${article.slug}.json`,
  );

  let provenance;
  try {
    provenance = JSON.parse(await fs.readFile(provenancePath, "utf8"));
  } catch {
    return { mode: "fallback", url: FALLBACK_IMAGE_URL, credit: null, fallbackReason: "provenance héros absente ou illisible" };
  }

  if (provenance.role !== "hero") {
    return { mode: "fallback", url: FALLBACK_IMAGE_URL, credit: null, fallbackReason: "provenance non marquée hero" };
  }
  if (provenance.provider !== "wikimedia-commons") {
    return { mode: "fallback", url: FALLBACK_IMAGE_URL, credit: null, fallbackReason: `provider hero non autorisé: ${provenance.provider || "inconnu"}` };
  }

  const license = provenance.license || "";
  if (!isAllowedMetaLicense(license)) {
    return { mode: "fallback", url: FALLBACK_IMAGE_URL, credit: null, fallbackReason: `licence hero non autorisée: ${license || "inconnue"}` };
  }

  const needsAttribution = provenance.requiresAttribution === true || licenseRequiresAttribution(license);
  let credit = null;
  if (needsAttribution) {
    if (!provenance.creator || !provenance.license || !provenance.licenseUrl || !provenance.sourcePage) {
      return { mode: "fallback", url: FALLBACK_IMAGE_URL, credit: null, fallbackReason: "métadonnées d’attribution hero incomplètes" };
    }
    credit = {
      creator: normalizeWhitespace(provenance.creator),
      license: normalizeWhitespace(provenance.license),
      licenseUrl: provenance.licenseUrl,
      sourceUrl: provenance.sourcePage,
    };
  }

  const candidates = [provenance.download, provenance.original].filter(Boolean);
  const jpeg = candidates.find((candidate) => candidate?.mime === "image/jpeg" && candidate?.url);
  if (!jpeg) {
    return { mode: "fallback", url: FALLBACK_IMAGE_URL, credit: null, fallbackReason: "source JPEG héros indisponible" };
  }

  try {
    const imageUrl = stripTracking(jpeg.url);
    if (new URL(imageUrl).protocol !== "https:") throw new Error("non HTTPS");
    return { mode: "hero", url: imageUrl, credit, license: normalizeWhitespace(license) };
  } catch {
    return { mode: "fallback", url: FALLBACK_IMAGE_URL, credit: null, fallbackReason: "URL hero invalide" };
  }
};

const buildCaption = (article, credit) =>
  [
    article.title,
    article.summary,
    `👉 Lire l’article sur Fam Space : ${article.url}`,
    buildCreditText(credit),
  ]
    .filter(Boolean)
    .join("\n\n");

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

const publishFacebook = async (article, image) => {
  const body = new URLSearchParams();
  body.set("url", image.url);
  body.set("caption", buildCaption(article, image.credit));
  body.set("published", "true");
  body.set("access_token", accessToken);
  const response = await fetch(`https://graph.facebook.com/${GRAPH_VERSION}/${pageId}/photos`, {
    method: "POST",
    body,
  });
  const data = await parseJsonResponse(response);
  const id = data.post_id ?? data.id;
  if (!id) throw new Error("publication Facebook sans identifiant de retour");
  return String(id);
};

const waitForArticle = async (url) => {
  for (let attempt = 1; attempt <= 6; attempt += 1) {
    try {
      const response = await fetch(url, {
        method: "GET",
        redirect: "follow",
        headers: { "user-agent": "FamSpaceFacebookCatchup/1.0" },
      });
      if (response.ok) return;
    } catch {
      // Réessai court si la production est encore en convergence.
    }
    if (attempt < 6) await new Promise((resolve) => setTimeout(resolve, 5_000));
  }
  throw new Error(`article inaccessible en production: ${url}`);
};

const git = async (...args) => {
  const { stdout } = await execFile("git", ["-C", famSpaceDir, ...args], {
    maxBuffer: 10 * 1024 * 1024,
  });
  return stdout.trim();
};

const getParisDateString = (date = new Date()) => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: PARIS_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
};

const isExpiredEvent = (eventEndsAt) => {
  if (!eventEndsAt) return false;
  if (/^\d{4}-\d{2}-\d{2}$/.test(eventEndsAt)) return eventEndsAt < getParisDateString();
  const endMs = Date.parse(eventEndsAt);
  return Number.isFinite(endMs) ? endMs < Date.now() : false;
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

const discoverPublishedArticles = async () => {
  const output = await git("ls-files", ":(glob)src/routes/articles/**/index.md");
  const files = output ? output.split("\n").filter(Boolean) : [];
  const articles = [];
  for (const relativePath of files) {
    const markdown = await fs.readFile(path.join(famSpaceDir, relativePath), "utf8");
    const article = parseArticle(relativePath, markdown);
    if (!article || article.status !== "published") continue;
    const publishedMs = Date.parse(article.publishedAt);
    if (!Number.isFinite(publishedMs)) continue;
    article.publishedMs = publishedMs;
    articles.push(article);
  }
  return articles;
};

const saveState = async (state) => {
  await fs.writeFile(stateFile, `${JSON.stringify(state, null, 2)}\n`, "utf8");
};

const main = async () => {
  if (!dryRun && !accessToken) throw new Error("FACEBOOK_PAGE_ACCESS_TOKEN absent");

  const state = JSON.parse(await fs.readFile(stateFile, "utf8"));
  state.posts ??= {};
  if (!state.backfillStartAt) throw new Error("facebook-state.json: backfillStartAt manquant");

  const backfillStartMs = Date.parse(state.backfillStartAt);
  if (!Number.isFinite(backfillStartMs)) throw new Error("facebook-state.json: backfillStartAt invalide");

  const productionSha = await git("rev-parse", "HEAD");
  const legacyFacebookSlugs = await loadLegacyFacebookSlugs();
  const articles = await discoverPublishedArticles();
  const nowMs = Date.now();
  const alreadyPosted = (slug) => Boolean(state.posts[slug]) || legacyFacebookSlugs.has(slug);
  const expired = [];

  const catchup = articles
    .filter((article) => {
      if (article.publishedMs < backfillStartMs || article.publishedMs > nowMs || alreadyPosted(article.slug)) {
        return false;
      }
      if (isExpiredEvent(article.eventEndsAt)) {
        expired.push(article);
        return false;
      }
      return true;
    })
    .sort((a, b) => a.publishedMs - b.publishedMs);

  console.log(`Rattrapage unique depuis: ${state.backfillStartAt}`);
  console.log(`Déjà connus ancien état Facebook: ${legacyFacebookSlugs.size}`);
  console.log(`Déjà enregistrés nouvel état Facebook: ${Object.keys(state.posts).length}`);
  console.log(`À publier maintenant: ${catchup.length}`);
  console.log(`Événements expirés exclus: ${expired.length}`);

  let published = 0;
  let hero = 0;
  let fallback = 0;
  let failures = 0;

  for (const article of catchup) {
    const image = await selectCatchupImage(article);
    if (image.mode === "hero") hero += 1;
    else fallback += 1;

    if (dryRun) {
      console.log(`READY ${article.slug}: ${image.mode}`);
      continue;
    }

    try {
      await waitForArticle(article.url);
      const facebookId = await publishFacebook(article, image);
      state.posts[article.slug] = {
        id: facebookId,
        at: new Date().toISOString(),
        productionSha,
        mode: image.mode,
        kind: "backfill",
        imageUrl: image.url,
        ...(image.fallbackReason ? { fallbackReason: image.fallbackReason } : {}),
      };
      await saveState(state);
      published += 1;
      console.log(`PUBLISHED ${published}/${catchup.length} ${article.slug}: ${facebookId} (${image.mode})`);
      await new Promise((resolve) => setTimeout(resolve, 250));
    } catch (error) {
      failures += 1;
      console.error(`FAILED ${article.slug}: ${error.message}`);
    }
  }

  console.log(`Facebook catch-up: published=${published}, hero=${hero}, fallback=${fallback}, failures=${failures}, dryRun=${dryRun}.`);
  if (failures > 0) process.exitCode = 1;
};

main().catch((error) => {
  console.error(error.stack ?? error.message);
  process.exitCode = 1;
});
