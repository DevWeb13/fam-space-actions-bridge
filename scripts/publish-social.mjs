#!/usr/bin/env node

import { promises as fs } from "node:fs";
import path from "node:path";

const SITE_URL = "https://www.fam-space.fr";
const GRAPH_VERSION = "v26.0";
const PLATFORMS = ["facebook", "instagram", "threads"];

const stateFile = process.argv[2];
if (!stateFile) {
  console.error("Usage: node scripts/publish-social.mjs <social-state.json>");
  process.exit(2);
}

const famSpaceDir = path.resolve(process.env.FAM_SPACE_DIR ?? "../fam-space");
const facebookPageId = process.env.FACEBOOK_PAGE_ID ?? "1314472035081859";
const instagramUserId = process.env.INSTAGRAM_USER_ID ?? "28082762261424741";
const threadsUserId = process.env.THREADS_USER_ID ?? "28413878778293545";
const dryRun = process.env.SOCIAL_DRY_RUN === "true";

// Backfill is intentionally gradual even when Meta reports a large remaining
// quota. This avoids a burst of hundreds of posts while still clearing the
// history quickly through the hourly workflow.
const PER_RUN_LIMIT = {
  facebook: 20,
  instagram: 10,
  threads: 20,
};
const INSTAGRAM_QUOTA_RESERVE = 10;
const THREADS_QUOTA_RESERVE = 20;
const FACEBOOK_USAGE_STOP_PERCENT = 80;
const FACEBOOK_NO_HEADER_LIMIT = 10;

const tokens = {
  facebook: process.env.FACEBOOK_PAGE_ACCESS_TOKEN ?? "",
  instagram: process.env.INSTAGRAM_ACCESS_TOKEN ?? "",
  threads: process.env.THREADS_ACCESS_TOKEN ?? "",
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const normalizeWhitespace = (value) => value.replace(/\s+/g, " ").trim();

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
    markdown,
    title: getFrontmatterScalar(frontmatter, "title"),
    summary: getFrontmatterScalar(frontmatter, "summary"),
    slug: getFrontmatterScalar(frontmatter, "slug"),
    status: getFrontmatterScalar(frontmatter, "status"),
    publishedAt: getFrontmatterScalar(frontmatter, "publishedAt"),
    category: getFrontmatterScalar(frontmatter, "category"),
  };

  if (
    !article.title ||
    !article.slug ||
    !article.category ||
    !article.publishedAt
  ) {
    return null;
  }

  article.url = `${SITE_URL}/articles/${article.category}/${article.slug}/`;
  return article;
};

const walkIndexFiles = async (directory) => {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkIndexFiles(fullPath)));
    } else if (entry.isFile() && entry.name === "index.md") {
      files.push(fullPath);
    }
  }
  return files;
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
  try {
    const url = new URL(rawUrl);
    for (const key of [...url.searchParams.keys()]) {
      if (key.toLowerCase().startsWith("utm_")) url.searchParams.delete(key);
    }
    return url.href;
  } catch {
    return rawUrl;
  }
};

const unavailableImage = (reason) => ({
  available: false,
  reason,
  url: "",
  alt: "",
  credit: null,
});

const getSocialImage = async (article) => {
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
    return unavailableImage("provenance héros absente ou illisible");
  }

  if (provenance.role !== "hero") {
    return unavailableImage("provenance non marquée hero");
  }

  const license = provenance.license ?? "";
  if (!isAllowedMetaLicense(license)) {
    return unavailableImage(`licence non autorisée: ${license || "inconnue"}`);
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
      return unavailableImage("métadonnées d’attribution incomplètes");
    }

    credit = {
      creator: normalizeWhitespace(provenance.creator),
      sourceUrl: provenance.sourcePage,
      license: normalizeWhitespace(provenance.license),
      licenseUrl: provenance.licenseUrl,
    };
  }

  const candidates = [provenance.download, provenance.original].filter(Boolean);
  const jpeg = candidates.find(
    (candidate) => candidate?.mime === "image/jpeg" && candidate?.url,
  );
  if (!jpeg) {
    return unavailableImage("aucune source JPEG publique dans la provenance");
  }

  let jpegUrl;
  try {
    jpegUrl = new URL(stripTracking(jpeg.url));
  } catch {
    return unavailableImage("URL JPEG invalide");
  }
  if (jpegUrl.protocol !== "https:") {
    return unavailableImage("URL JPEG non HTTPS");
  }

  return {
    available: true,
    reason: "",
    url: jpegUrl.href,
    alt: article.title,
    credit,
  };
};

const buildCreditText = (credit, compact = false) => {
  if (!credit) return "";
  if (compact) {
    return `Photo: ${credit.creator} - ${credit.license} ${credit.licenseUrl}`;
  }
  return `Photo: ${credit.creator} - ${credit.license} - ${credit.licenseUrl} - ${credit.sourceUrl}`;
};

const buildFacebookPhotoCaption = (article, credit) =>
  [article.title, article.summary, article.url, buildCreditText(credit)]
    .filter(Boolean)
    .join("\n\n");

const buildFacebookLinkMessage = (article) =>
  [article.title, article.summary].filter(Boolean).join("\n\n");

const buildInstagramCaption = (article, credit) =>
  [article.title, article.summary, article.url, buildCreditText(credit)]
    .filter(Boolean)
    .join("\n\n");

const fitThreadsText = (parts) => {
  const clean = parts.filter(Boolean).map((part) => normalizeWhitespace(part));
  let text = clean.join("\n\n");
  if (text.length <= 500) return text;

  const url = clean.at(-1) ?? "";
  const title = clean[0] ?? "Fam Space";
  const reserved = url ? url.length + 2 : 0;
  const maxTitle = Math.max(40, 500 - reserved);
  const shortTitle =
    title.length > maxTitle
      ? `${title.slice(0, Math.max(1, maxTitle - 1)).trimEnd()}…`
      : title;
  text = [shortTitle, url].filter(Boolean).join("\n\n");
  return text.slice(0, 500);
};

const buildThreadsImageText = (article, credit) => {
  const full = [
    article.title,
    article.summary,
    article.url,
    buildCreditText(credit),
  ].filter(Boolean);
  const text = full.join("\n\n");
  if (text.length <= 500) return text;

  const compact = [
    article.title,
    article.url,
    buildCreditText(credit, true),
  ].filter(Boolean);
  const compactText = compact.join("\n\n");
  if (compactText.length <= 500) return compactText;

  return fitThreadsText([article.title, article.url]);
};

const buildThreadsTextOnly = (article) =>
  fitThreadsText([article.title, article.summary, article.url]);

const parseJsonResponse = async (response) => {
  const text = await response.text();
  let data;
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { raw: text };
  }

  if (!response.ok || data.error) {
    const message =
      data?.error?.message ?? data?.message ?? text ?? response.statusText;
    const error = new Error(`${response.status} ${message}`);
    error.response = data;
    throw error;
  }
  return data;
};

const getJson = async (url) => parseJsonResponse(await fetch(url));

const postForm = async (url, fields) => {
  const body = new URLSearchParams();
  for (const [key, value] of Object.entries(fields)) {
    if (value !== undefined && value !== null && value !== "") {
      body.set(key, String(value));
    }
  }
  const response = await fetch(url, { method: "POST", body });
  return parseJsonResponse(response);
};

const readQuotaWindow = async (platform) => {
  const url =
    platform === "threads"
      ? new URL("https://graph.threads.net/v1.0/me/threads_publishing_limit")
      : new URL(
          `https://graph.instagram.com/${GRAPH_VERSION}/${instagramUserId}/content_publishing_limit`,
        );
  url.searchParams.set("fields", "quota_usage,config");
  url.searchParams.set("access_token", tokens[platform]);
  const data = await getJson(url);
  const item = data?.data?.[0] ?? {};
  const usage = Number(item.quota_usage);
  const total = Number(item?.config?.quota_total);
  const duration = Number(item?.config?.quota_duration);
  if (!Number.isFinite(usage) || !Number.isFinite(total)) {
    throw new Error(`${platform}: réponse quota invalide`);
  }
  return { usage, total, duration };
};

const maxUsagePercent = (value) => {
  let max = null;
  const visit = (node) => {
    if (Array.isArray(node)) {
      for (const item of node) visit(item);
      return;
    }
    if (!node || typeof node !== "object") return;
    for (const [key, child] of Object.entries(node)) {
      if (["call_count", "total_cputime", "total_time"].includes(key)) {
        const numeric = Number(child);
        if (Number.isFinite(numeric)) max = Math.max(max ?? 0, numeric);
      } else {
        visit(child);
      }
    }
  };
  visit(value);
  return max;
};

const readFacebookUsage = async () => {
  const url = new URL(
    `https://graph.facebook.com/${GRAPH_VERSION}/${facebookPageId}`,
  );
  url.searchParams.set("fields", "id,name");
  url.searchParams.set("access_token", tokens.facebook);
  const response = await fetch(url);
  const headers = [
    "x-business-use-case-usage",
    "x-page-usage",
    "x-app-usage",
  ];
  let usagePercent = null;
  for (const name of headers) {
    const raw = response.headers.get(name);
    if (!raw) continue;
    try {
      const parsed = JSON.parse(raw);
      const current = maxUsagePercent(parsed);
      if (current !== null) {
        usagePercent = Math.max(usagePercent ?? 0, current);
      }
    } catch {
      // Ignore malformed usage headers but still validate the API response.
    }
  }
  await parseJsonResponse(response);
  return usagePercent;
};

const buildLiveBudgets = async () => {
  const budgets = { facebook: 0, instagram: 0, threads: 0 };

  if (tokens.threads) {
    try {
      const quota = await readQuotaWindow("threads");
      const remaining = Math.max(
        0,
        quota.total - quota.usage - THREADS_QUOTA_RESERVE,
      );
      budgets.threads = Math.min(PER_RUN_LIMIT.threads, remaining);
      console.log(
        `Threads quota: ${quota.usage}/${quota.total} sur ${quota.duration || 86400}s; budget run=${budgets.threads}, réserve=${THREADS_QUOTA_RESERVE}.`,
      );
    } catch (error) {
      console.error(`Threads quota indisponible: ${error.message}; publication suspendue pour ce réseau.`);
    }
  }

  if (tokens.instagram) {
    try {
      const quota = await readQuotaWindow("instagram");
      const remaining = Math.max(
        0,
        quota.total - quota.usage - INSTAGRAM_QUOTA_RESERVE,
      );
      budgets.instagram = Math.min(PER_RUN_LIMIT.instagram, remaining);
      console.log(
        `Instagram quota: ${quota.usage}/${quota.total} sur ${quota.duration || 86400}s; budget run=${budgets.instagram}, réserve=${INSTAGRAM_QUOTA_RESERVE}.`,
      );
    } catch (error) {
      console.error(`Instagram quota indisponible: ${error.message}; publication suspendue pour ce réseau.`);
    }
  }

  if (tokens.facebook) {
    try {
      const usage = await readFacebookUsage();
      if (usage === null) {
        budgets.facebook = FACEBOOK_NO_HEADER_LIMIT;
        console.log(
          `Facebook: aucun compteur de quota exposé; budget prudent=${budgets.facebook}.`,
        );
      } else if (usage >= FACEBOOK_USAGE_STOP_PERCENT) {
        console.log(
          `Facebook usage=${usage}% >= ${FACEBOOK_USAGE_STOP_PERCENT}%; publication suspendue pour ce run.`,
        );
      } else {
        budgets.facebook = PER_RUN_LIMIT.facebook;
        console.log(
          `Facebook usage=${usage}%; budget run=${budgets.facebook}, arrêt automatique à ${FACEBOOK_USAGE_STOP_PERCENT}%.`,
        );
      }
    } catch (error) {
      console.error(`Facebook quota indisponible: ${error.message}; publication suspendue pour ce réseau.`);
    }
  }

  return budgets;
};

const waitForArticle = async (url) => {
  for (let attempt = 1; attempt <= 18; attempt += 1) {
    try {
      const response = await fetch(url, {
        method: "GET",
        redirect: "follow",
        headers: { "user-agent": "FamSpaceSocialPublisher/1.0" },
      });
      if (response.ok) return;
    } catch {
      // Retry while Vercel is converging.
    }
    if (attempt < 18) await sleep(10_000);
  }
  throw new Error(`article not reachable in production: ${url}`);
};

const publishFacebook = async (article, image) => {
  if (image.available) {
    const data = await postForm(
      `https://graph.facebook.com/${GRAPH_VERSION}/${facebookPageId}/photos`,
      {
        url: image.url,
        caption: buildFacebookPhotoCaption(article, image.credit),
        published: "true",
        access_token: tokens.facebook,
      },
    );
    return { id: data.post_id ?? data.id, mode: "photo" };
  }

  const data = await postForm(
    `https://graph.facebook.com/${GRAPH_VERSION}/${facebookPageId}/feed`,
    {
      message: buildFacebookLinkMessage(article),
      link: article.url,
      access_token: tokens.facebook,
    },
  );
  return { id: data.id, mode: "link" };
};

const waitForInstagramContainer = async (containerId) => {
  for (let attempt = 1; attempt <= 20; attempt += 1) {
    const url = new URL(`https://graph.instagram.com/${containerId}`);
    url.searchParams.set("fields", "status_code,status");
    url.searchParams.set("access_token", tokens.instagram);
    const data = await parseJsonResponse(await fetch(url));
    if (data.status_code === "FINISHED") return;
    if (data.status_code === "ERROR" || data.status_code === "EXPIRED") {
      throw new Error(
        `Instagram container ${data.status_code}: ${data.status ?? ""}`,
      );
    }
    await sleep(2_000);
  }
  throw new Error("Instagram container processing timeout");
};

const publishInstagram = async (article, image) => {
  if (!image.available) return null;

  const created = await postForm(
    `https://graph.instagram.com/${instagramUserId}/media`,
    {
      image_url: image.url,
      caption: buildInstagramCaption(article, image.credit),
      access_token: tokens.instagram,
    },
  );
  await waitForInstagramContainer(created.id);
  const published = await postForm(
    `https://graph.instagram.com/${instagramUserId}/media_publish`,
    {
      creation_id: created.id,
      access_token: tokens.instagram,
    },
  );
  return { id: published.id, mode: "image" };
};

const publishThreads = async (article, image) => {
  const fields = image.available
    ? {
        media_type: "IMAGE",
        image_url: image.url,
        text: buildThreadsImageText(article, image.credit),
        alt_text: image.alt.slice(0, 1_000),
        access_token: tokens.threads,
      }
    : {
        media_type: "TEXT",
        text: buildThreadsTextOnly(article),
        access_token: tokens.threads,
      };

  const created = await postForm(
    `https://graph.threads.net/v1.0/${threadsUserId}/threads`,
    fields,
  );

  let lastError;
  for (let attempt = 1; attempt <= 5; attempt += 1) {
    try {
      const published = await postForm(
        `https://graph.threads.net/v1.0/${threadsUserId}/threads_publish`,
        {
          creation_id: created.id,
          access_token: tokens.threads,
        },
      );
      return {
        id: published.id,
        mode: image.available ? "image" : "text",
      };
    } catch (error) {
      lastError = error;
      if (attempt < 5) await sleep(2_000 * attempt);
    }
  }
  throw lastError;
};

const ensureRuntimeConfiguration = () => {
  if (dryRun) return;

  const configured = PLATFORMS.filter((platform) => Boolean(tokens[platform]));
  if (configured.length === 0) {
    throw new Error("no social access token configured");
  }

  const missing = PLATFORMS.filter((platform) => !tokens[platform]);
  if (missing.length > 0) {
    console.log(
      `Tokens absents: ${missing.join(", ")} — les autres réseaux continueront normalement.`,
    );
  }
};

const loadState = async () => {
  const raw = await fs.readFile(stateFile, "utf8");
  const state = JSON.parse(raw);
  state.version = Math.max(Number(state.version) || 1, 2);
  state.articles ??= {};
  delete state.startedAt;
  return state;
};

const saveState = async (state) => {
  await fs.writeFile(stateFile, `${JSON.stringify(state, null, 2)}\n`, "utf8");
};

const main = async () => {
  ensureRuntimeConfiguration();
  const state = await loadState();

  const articleRoot = path.join(famSpaceDir, "src", "routes", "articles");
  const files = await walkIndexFiles(articleRoot);
  const articles = [];
  for (const file of files) {
    const markdown = await fs.readFile(file, "utf8");
    const article = parseArticle(file, markdown);
    if (!article || article.status !== "published") continue;
    const publishedAtMs = Date.parse(article.publishedAt);
    if (!Number.isFinite(publishedAtMs)) continue;
    articles.push(article);
  }

  // Historical catch-up is oldest-first. Once the backlog is empty, the same
  // ordering naturally handles each newly published article.
  articles.sort((a, b) => {
    const byDate = Date.parse(a.publishedAt) - Date.parse(b.publishedAt);
    return byDate || a.slug.localeCompare(b.slug, "fr");
  });

  const budgets = dryRun
    ? { facebook: Infinity, instagram: Infinity, threads: Infinity }
    : await buildLiveBudgets();
  const publishedThisRun = { facebook: 0, instagram: 0, threads: 0 };

  console.log(
    `Historique éligible: ${articles.length} article(s), ordre=du plus ancien au plus récent.`,
  );

  let failures = 0;
  for (const article of articles) {
    if (
      !dryRun &&
      PLATFORMS.every(
        (platform) => !tokens[platform] || budgets[platform] <= 0,
      )
    ) {
      break;
    }

    const current = (state.articles[article.slug] ??= {});
    const unposted = PLATFORMS.filter((platform) => !current[platform]);
    const pending = dryRun
      ? unposted
      : unposted.filter(
          (platform) => Boolean(tokens[platform]) && budgets[platform] > 0,
        );
    if (pending.length === 0) continue;

    console.log(`Article: ${article.publishedAt} ${article.slug}`);
    try {
      if (!dryRun) await waitForArticle(article.url);
    } catch (error) {
      failures += pending.length;
      console.error(`  production: ${error.message}`);
      continue;
    }

    const image = await getSocialImage(article);
    console.log(
      image.available
        ? "  image: hero JPEG autorisée"
        : `  image: indisponible (${image.reason})`,
    );

    for (const platform of pending) {
      if (platform === "instagram" && !image.available) {
        console.log(
          `  instagram: non publié, sera réévalué plus tard (${image.reason})`,
        );
        continue;
      }

      if (dryRun) {
        const mode =
          platform === "facebook"
            ? image.available
              ? "photo"
              : "lien sans upload photo"
            : platform === "instagram"
              ? "image"
              : image.available
                ? "image"
                : "texte";
        console.log(`  ${platform}: dry-run (${mode})`);
        continue;
      }

      try {
        const result =
          platform === "facebook"
            ? await publishFacebook(article, image)
            : platform === "instagram"
              ? await publishInstagram(article, image)
              : await publishThreads(article, image);

        if (!result) continue;
        current[platform] = {
          id: String(result.id),
          at: new Date().toISOString(),
          mode: result.mode,
        };
        budgets[platform] = Math.max(0, budgets[platform] - 1);
        publishedThisRun[platform] += 1;
        await saveState(state);
        console.log(`  ${platform}: published ${result.mode} (${result.id})`);

        if (
          platform === "facebook" &&
          publishedThisRun.facebook % 5 === 0 &&
          budgets.facebook > 0
        ) {
          try {
            const usage = await readFacebookUsage();
            if (usage !== null && usage >= FACEBOOK_USAGE_STOP_PERCENT) {
              budgets.facebook = 0;
              console.log(
                `  facebook: usage=${usage}% — arrêt du rattrapage Facebook pour ce run.`,
              );
            }
          } catch (error) {
            budgets.facebook = 0;
            console.error(
              `  facebook: contrôle quota impossible (${error.message}) — arrêt prudent pour ce run.`,
            );
          }
        }
      } catch (error) {
        failures += 1;
        console.error(`  ${platform}: ${error.message}`);
      }
    }
  }

  if (dryRun) {
    console.log(`Dry-run complete: ${articles.length} article(s) historiques analysés.`);
    return;
  }

  await saveState(state);
  console.log(
    `Publié pendant ce run: facebook=${publishedThisRun.facebook}, instagram=${publishedThisRun.instagram}, threads=${publishedThisRun.threads}.`,
  );
  console.log(
    `Budgets restants: facebook=${budgets.facebook}, instagram=${budgets.instagram}, threads=${budgets.threads}.`,
  );

  if (failures > 0) {
    console.error(
      `${failures} social publication(s) failed and will be retried.`,
    );
    process.exitCode = 1;
  } else {
    console.log("Social publication complete.");
  }
};

main().catch((error) => {
  console.error(error.stack ?? error.message);
  process.exitCode = 1;
});
