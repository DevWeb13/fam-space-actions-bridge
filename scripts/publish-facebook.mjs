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
const DEFAULT_MAX_NEW_PER_RUN = 20;
const DEFAULT_BACKFILL_MAX_PER_DAY = 5;
const DEFAULT_BACKFILL_MIN_INTERVAL_HOURS = 3;
const DEFAULT_IMAGE_GRACE_HOURS = 24;
const PARIS_TIME_ZONE = "Europe/Paris";

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
const backfillMaxPerDay = Number(
  process.env.FACEBOOK_BACKFILL_MAX_PER_DAY || DEFAULT_BACKFILL_MAX_PER_DAY,
);
const backfillMinIntervalHours = Number(
  process.env.FACEBOOK_BACKFILL_MIN_INTERVAL_HOURS ||
    DEFAULT_BACKFILL_MIN_INTERVAL_HOURS,
);
const imageGraceHours = Number(
  process.env.FACEBOOK_IMAGE_GRACE_HOURS || DEFAULT_IMAGE_GRACE_HOURS,
);

if (!Number.isInteger(maxNewPerRun) || maxNewPerRun < 1 || maxNewPerRun > 50) {
  throw new Error(`FACEBOOK_MAX_NEW_PER_RUN invalide: ${maxNewPerRun}`);
}
if (
  !Number.isInteger(backfillMaxPerDay) ||
  backfillMaxPerDay < 0 ||
  backfillMaxPerDay > 10
) {
  throw new Error(
    `FACEBOOK_BACKFILL_MAX_PER_DAY invalide: ${backfillMaxPerDay}`,
  );
}
if (
  !Number.isFinite(backfillMinIntervalHours) ||
  backfillMinIntervalHours < 0 ||
  backfillMinIntervalHours > 24
) {
  throw new Error(
    `FACEBOOK_BACKFILL_MIN_INTERVAL_HOURS invalide: ${backfillMinIntervalHours}`,
  );
}
if (!Number.isFinite(imageGraceHours) || imageGraceHours < 0 || imageGraceHours > 168) {
  throw new Error(`FACEBOOK_IMAGE_GRACE_HOURS invalide: ${imageGraceHours}`);
}

const normalizeWhitespace = (value) =>
  String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();

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

  if (!article.title || !article.slug || !article.category || !article.publishedAt) {
    return null;
  }

  article.url = `${SITE_URL}/articles/${article.category}/${article.slug}/`;
  return article;
};

const normalizeLicense = (license) =>
  normalizeWhitespace(license).toLowerCase().replace(/[–—]/g, "-");

// Keep this allowlist aligned with docs/social-image-policy.md.
// Third-party CC BY / CC BY-SA images are intentionally excluded because
// Fam Space cannot grant Meta broader transfer/sublicensing rights than it holds.
const isAllowedMetaLicense = (license) => {
  const normalized = normalizeLicense(license);
  return (
    normalized === "public domain" ||
    normalized === "public-domain" ||
    /^public domain mark(?: 1\.0)?$/.test(normalized) ||
    /^cc0(?: 1\.0(?: universal)?)?$/.test(normalized)
  );
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
  if (!state.activatedAt) {
    throw new Error("facebook-state.json: activatedAt manquant");
  }
  if (!state.backfillStartAt) {
    throw new Error("facebook-state.json: backfillStartAt manquant");
  }

  state.version = 3;
  state.posts ??= {};
  state.backfill ??= {
    dateParis: null,
    publishedToday: 0,
    lastPublishedAt: null,
  };
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

const discoverPublishedArticles = async () => {
  const output = await git(
    "ls-files",
    ":(glob)src/routes/articles/**/index.md",
  );
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

const isBackfillEventExpired = (eventEndsAt) => {
  if (!eventEndsAt) return false;
  if (/^\d{4}-\d{2}-\d{2}$/.test(eventEndsAt)) {
    return eventEndsAt < getParisDateString();
  }
  const endMs = Date.parse(eventEndsAt);
  return Number.isFinite(endMs) ? endMs < Date.now() : false;
};

const resetBackfillDailyCounterIfNeeded = (state) => {
  const today = getParisDateString();
  if (state.backfill.dateParis !== today) {
    state.backfill.dateParis = today;
    state.backfill.publishedToday = 0;
  }
};

const canPublishBackfillNow = (state) => {
  resetBackfillDailyCounterIfNeeded(state);

  if (state.backfill.publishedToday >= backfillMaxPerDay) {
    return { allowed: false, reason: "quota quotidien de rattrapage atteint" };
  }

  if (state.backfill.lastPublishedAt) {
    const lastMs = Date.parse(state.backfill.lastPublishedAt);
    if (Number.isFinite(lastMs)) {
      const elapsedHours = (Date.now() - lastMs) / 3_600_000;
      if (elapsedHours < backfillMinIntervalHours) {
        return {
          allowed: false,
          reason: `dernier rattrapage il y a ${elapsedHours.toFixed(1)} h`,
        };
      }
    }
  }

  return { allowed: true };
};

const recordPublishedPost = async (state, article, image, facebookId, productionSha, kind) => {
  state.posts[article.slug] = {
    id: facebookId,
    at: new Date().toISOString(),
    productionSha,
    mode: image.mode,
    kind,
    imageUrl: image.url,
    ...(image.fallbackReason ? { fallbackReason: image.fallbackReason } : {}),
  };

  if (kind === "backfill") {
    resetBackfillDailyCounterIfNeeded(state);
    state.backfill.publishedToday += 1;
    state.backfill.lastPublishedAt = state.posts[article.slug].at;
  }

  await saveState(state);
};

const main = async () => {
  if (!dryRun && !accessToken) {
    throw new Error("FACEBOOK_PAGE_ACCESS_TOKEN absent");
  }

  const state = await loadState();
  resetBackfillDailyCounterIfNeeded(state);

  const productionSha = await git("rev-parse", "HEAD");
  const legacyFacebookSlugs = await loadLegacyFacebookSlugs();
  const articles = await discoverPublishedArticles();

  const activatedMs = Date.parse(state.activatedAt);
  const backfillStartMs = Date.parse(state.backfillStartAt);
  if (!Number.isFinite(activatedMs) || !Number.isFinite(backfillStartMs)) {
    throw new Error("Dates d’activation/rattrapage Facebook invalides");
  }

  const nowMs = Date.now();
  const alreadyPosted = (slug) =>
    Boolean(state.posts[slug]) || legacyFacebookSlugs.has(slug);

  const newArticles = articles
    .filter(
      (article) =>
        article.publishedMs >= activatedMs &&
        article.publishedMs <= nowMs &&
        !alreadyPosted(article.slug),
    )
    .sort((a, b) => a.publishedMs - b.publishedMs);

  const expiredBackfill = [];
  const backfillArticles = articles
    .filter((article) => {
      if (
        article.publishedMs < backfillStartMs ||
        article.publishedMs >= activatedMs ||
        article.publishedMs > nowMs ||
        alreadyPosted(article.slug)
      ) {
        return false;
      }
      if (isBackfillEventExpired(article.eventEndsAt)) {
        expiredBackfill.push(article);
        return false;
      }
      return true;
    })
    .sort((a, b) => b.publishedMs - a.publishedMs);

  console.log(`Production: ${productionSha}`);
  console.log(`Activation Facebook: ${state.activatedAt}`);
  console.log(`Rattrapage depuis: ${state.backfillStartAt}`);
  console.log(`Déjà connus dans l’ancien état Facebook: ${legacyFacebookSlugs.size}`);
  console.log(`Nouveaux non publiés: ${newArticles.length}`);
  console.log(`Rattrapage non publié et encore pertinent: ${backfillArticles.length}`);
  console.log(`Événements expirés exclus du rattrapage: ${expiredBackfill.length}`);
  console.log(`Délai maximal avant fallback: ${imageGraceHours} h`);

  let newPublished = 0;
  let newPending = 0;
  let backfillPublished = 0;
  let backfillPending = 0;
  let heroReady = 0;
  let fallbackReady = 0;
  let failures = 0;

  for (const article of newArticles) {
    if (!dryRun && newPublished >= maxNewPerRun) break;

    const image = await selectFacebookImage(article);
    if (image.status === "pending") {
      newPending += 1;
      console.log(`PENDING new ${article.slug}: ${image.reason}`);
      continue;
    }

    if (image.mode === "fallback") {
      fallbackReady += 1;
      console.log(`READY new ${article.slug}: fallback Fam Space (${image.fallbackReason})`);
    } else {
      heroReady += 1;
      console.log(`READY new ${article.slug}: hero ${image.license}`);
    }

    if (dryRun) {
      newPublished += 1;
      if (newPublished >= maxNewPerRun) break;
      continue;
    }

    try {
      await waitForArticle(article.url);
      const facebookId = await publishFacebook(article, image);
      await recordPublishedPost(
        state,
        article,
        image,
        facebookId,
        productionSha,
        "new",
      );
      newPublished += 1;
      console.log(`PUBLISHED new ${article.slug}: ${facebookId} (${image.mode})`);
    } catch (error) {
      failures += 1;
      console.error(`FAILED new ${article.slug}: ${error.message}`);
    }
  }

  const backfillGate = canPublishBackfillNow(state);
  if (!backfillGate.allowed) {
    console.log(`BACKFILL PAUSED: ${backfillGate.reason}`);
  } else {
    for (const article of backfillArticles) {
      const image = await selectFacebookImage(article);
      if (image.status === "pending") {
        backfillPending += 1;
        console.log(`PENDING backfill ${article.slug}: ${image.reason}`);
        continue;
      }

      if (image.mode === "fallback") {
        fallbackReady += 1;
        console.log(
          `READY backfill ${article.slug}: fallback Fam Space (${image.fallbackReason})`,
        );
      } else {
        heroReady += 1;
        console.log(`READY backfill ${article.slug}: hero ${image.license}`);
      }

      if (dryRun) {
        backfillPublished = 1;
        break;
      }

      try {
        await waitForArticle(article.url);
        const facebookId = await publishFacebook(article, image);
        await recordPublishedPost(
          state,
          article,
          image,
          facebookId,
          productionSha,
          "backfill",
        );
        backfillPublished = 1;
        console.log(
          `PUBLISHED backfill ${article.slug}: ${facebookId} (${image.mode})`,
        );
        break;
      } catch (error) {
        failures += 1;
        console.error(`FAILED backfill ${article.slug}: ${error.message}`);
      }
    }
  }

  console.log(
    [
      `Facebook run: newPublished=${newPublished}`,
      `newPending=${newPending}`,
      `backfillPublished=${backfillPublished}`,
      `backfillPending=${backfillPending}`,
      `heroReady=${heroReady}`,
      `fallbackReady=${fallbackReady}`,
      `failures=${failures}`,
      `dryRun=${dryRun}.`,
    ].join(", "),
  );

  if (failures > 0) process.exitCode = 1;
};

main().catch((error) => {
  console.error(error.stack ?? error.message);
  process.exitCode = 1;
});