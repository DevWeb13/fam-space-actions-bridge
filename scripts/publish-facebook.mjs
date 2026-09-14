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
const DEFAULT_MAX_PER_RUN = 10;
const DEFAULT_IMAGE_GRACE_HOURS = 24;

const stateFile = process.argv[2];
if (!stateFile) {
  console.error("Usage: node scripts/publish-facebook.mjs <facebook-state.json>");
  process.exit(2);
}

const famSpaceDir = path.resolve(process.env.FAM_SPACE_DIR ?? "../fam-space");
const pageId = process.env.FACEBOOK_PAGE_ID || DEFAULT_PAGE_ID;
const accessToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN || "";
const dryRun = process.env.SOCIAL_DRY_RUN === "true";
const maxPerRun = Number(process.env.FACEBOOK_MAX_PER_RUN || DEFAULT_MAX_PER_RUN);
const imageGraceHours = Number(
  process.env.FACEBOOK_IMAGE_GRACE_HOURS || DEFAULT_IMAGE_GRACE_HOURS,
);

if (!Number.isInteger(maxPerRun) || maxPerRun < 1 || maxPerRun > 25) {
  throw new Error(`FACEBOOK_MAX_PER_RUN invalide: ${maxPerRun}`);
}
if (!Number.isFinite(imageGraceHours) || imageGraceHours < 0 || imageGraceHours > 168) {
  throw new Error(`FACEBOOK_IMAGE_GRACE_HOURS invalide: ${imageGraceHours}`);
}

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
    category: getFrontmatterScalar(frontmatter, "category"),
  };

  if (!article.title || !article.slug || !article.category || !article.publishedAt) {
    return null;
  }

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

const prepareHeroImage = async (article) => {
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
    return { status: "unavailable", reason: "provenance héros absente ou illisible" };
  }

  if (provenance.role !== "hero") {
    return { status: "unavailable", reason: "provenance non marquée hero" };
  }

  if (provenance.provider !== "wikimedia-commons") {
    return {
      status: "unavailable",
      reason: `provider non autorisé pour la hero: ${provenance.provider || "inconnu"}`,
    };
  }

  const license = provenance.license || "";
  if (!isAllowedMetaLicense(license)) {
    return {
      status: "unavailable",
      reason: `licence hero non autorisée: ${license || "inconnue"}`,
    };
  }

  const needsAttribution =
    provenance.requiresAttribution === true || licenseRequiresAttribution(license);

  let credit = null;
  if (needsAttribution) {
    if (
      !provenance.creator ||
      !provenance.license ||
      !provenance.licenseUrl ||
      !provenance.sourcePage
    ) {
      return {
        status: "unavailable",
        reason: "métadonnées d’attribution hero incomplètes",
      };
    }

    credit = {
      creator: normalizeWhitespace(provenance.creator),
      license: normalizeWhitespace(provenance.license),
      licenseUrl: provenance.licenseUrl,
      sourceUrl: provenance.sourcePage,
    };
  }

  const candidates = [provenance.download, provenance.original].filter(Boolean);
  const jpeg = candidates.find(
    (candidate) => candidate?.mime === "image/jpeg" && candidate?.url,
  );

  if (!jpeg) {
    return { status: "unavailable", reason: "source JPEG héros pas encore disponible" };
  }

  let imageUrl;
  try {
    imageUrl = stripTracking(jpeg.url);
    const parsed = new URL(imageUrl);
    if (parsed.protocol !== "https:") {
      return { status: "unavailable", reason: "URL hero non HTTPS" };
    }
  } catch {
    return { status: "unavailable", reason: "URL hero invalide" };
  }

  return {
    status: "ready",
    mode: "hero",
    url: imageUrl,
    credit,
    license: normalizeWhitespace(license),
  };
};

const articleAgeHours = (publishedAt) => {
  const publishedMs = Date.parse(publishedAt);
  if (!Number.isFinite(publishedMs)) return Number.POSITIVE_INFINITY;
  return (Date.now() - publishedMs) / 3_600_000;
};

const selectFacebookImage = async (article) => {
  const hero = await prepareHeroImage(article);
  if (hero.status === "ready") return hero;

  const ageHours = articleAgeHours(article.publishedAt);
  if (ageHours < imageGraceHours) {
    const remaining = Math.max(0, imageGraceHours - ageHours);
    return {
      status: "pending",
      reason: `${hero.reason}; fallback générique dans environ ${remaining.toFixed(1)} h`,
    };
  }

  return {
    status: "ready",
    mode: "fallback",
    url: FALLBACK_IMAGE_URL,
    credit: null,
    license: "Fam Space",
    fallbackReason: hero.reason,
  };
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
        headers: { "user-agent": "FamSpaceFacebookPublisher/1.0" },
      });
      if (response.ok) return;
    } catch {
      // Vercel peut encore être en convergence juste après la release.
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

const loadState = async () => {
  const state = JSON.parse(await fs.readFile(stateFile, "utf8"));
  if (!state.baselineProductionSha) {
    throw new Error("facebook-state.json: baselineProductionSha manquant");
  }
  state.version = 2;
  state.posts ??= {};
  delete state.skipped;
  return state;
};

const saveState = async (state) => {
  await fs.writeFile(stateFile, `${JSON.stringify(state, null, 2)}\n`, "utf8");
};

const discoverNewArticleFiles = async (baseline) => {
  try {
    await execFile("git", ["-C", famSpaceDir, "merge-base", "--is-ancestor", baseline, "HEAD"]);
  } catch {
    throw new Error(
      `baseline ${baseline} absente ou non ancêtre de la production actuelle; publication bloquée par sécurité`,
    );
  }

  const output = await git(
    "diff",
    "--name-only",
    "--diff-filter=A",
    `${baseline}..HEAD`,
    "--",
    "src/routes/articles/**/index.md",
  );

  return output ? output.split("\n").filter(Boolean) : [];
};

const main = async () => {
  if (!dryRun && !accessToken) {
    throw new Error("FACEBOOK_PAGE_ACCESS_TOKEN absent");
  }

  const state = await loadState();
  const productionSha = await git("rev-parse", "HEAD");
  const files = await discoverNewArticleFiles(state.baselineProductionSha);
  const articles = [];

  for (const relativePath of files) {
    const markdown = await fs.readFile(path.join(famSpaceDir, relativePath), "utf8");
    const article = parseArticle(relativePath, markdown);
    if (!article || article.status !== "published") continue;
    articles.push(article);
  }

  articles.sort((a, b) => {
    const aTime = Date.parse(a.publishedAt);
    const bTime = Date.parse(b.publishedAt);
    if (Number.isFinite(aTime) && Number.isFinite(bTime) && aTime !== bTime) {
      return aTime - bTime;
    }
    return a.slug.localeCompare(b.slug, "fr");
  });

  console.log(`Production: ${productionSha}`);
  console.log(`Baseline Facebook: ${state.baselineProductionSha}`);
  console.log(`Nouveaux articles depuis baseline: ${articles.length}`);
  console.log(`Délai maximal avant fallback: ${imageGraceHours} h`);

  let published = 0;
  let pending = 0;
  let heroReady = 0;
  let fallbackReady = 0;
  let failures = 0;

  for (const article of articles) {
    if (state.posts[article.slug]) continue;
    if (!dryRun && published >= maxPerRun) break;

    const image = await selectFacebookImage(article);

    if (image.status === "pending") {
      pending += 1;
      console.log(`PENDING ${article.slug}: ${image.reason}`);
      continue;
    }

    if (image.mode === "fallback") {
      fallbackReady += 1;
      console.log(`READY ${article.slug}: fallback Fam Space (${image.fallbackReason})`);
    } else {
      heroReady += 1;
      console.log(`READY ${article.slug}: hero ${image.license}`);
    }

    if (dryRun) continue;

    try {
      await waitForArticle(article.url);
      const facebookId = await publishFacebook(article, image);
      state.posts[article.slug] = {
        id: facebookId,
        at: new Date().toISOString(),
        productionSha,
        mode: image.mode,
        imageUrl: image.url,
        ...(image.fallbackReason ? { fallbackReason: image.fallbackReason } : {}),
      };
      await saveState(state);
      published += 1;
      console.log(`PUBLISHED ${article.slug}: ${facebookId} (${image.mode})`);
    } catch (error) {
      failures += 1;
      console.error(`FAILED ${article.slug}: ${error.message}`);
    }
  }

  console.log(
    `Facebook run: published=${published}, pending=${pending}, heroReady=${heroReady}, fallbackReady=${fallbackReady}, failures=${failures}, dryRun=${dryRun}.`,
  );

  if (failures > 0) process.exitCode = 1;
};

main().catch((error) => {
  console.error(error.stack ?? error.message);
  process.exitCode = 1;
});
