#!/usr/bin/env node

import { promises as fs } from "node:fs";
import path from "node:path";

const SITE_URL = "https://www.fam-space.fr";
const GRAPH_VERSION = "v26.0";
const DEFAULT_FALLBACK_IMAGE =
  "https://raw.githubusercontent.com/DevWeb13/fam-space-actions-bridge/main/social-assets/fam-space-default.jpg";

const stateFile = process.argv[2];
if (!stateFile) {
  console.error("Usage: node scripts/publish-social.mjs <social-state.json>");
  process.exit(2);
}

const famSpaceDir = path.resolve(process.env.FAM_SPACE_DIR ?? "../fam-space");
const facebookPageId = process.env.FACEBOOK_PAGE_ID ?? "1314472035081859";
const instagramUserId = process.env.INSTAGRAM_USER_ID ?? "28082762261424741";
const threadsUserId = process.env.THREADS_USER_ID ?? "28413878778293545";
const fallbackImageUrl =
  process.env.SOCIAL_FALLBACK_IMAGE_URL ?? DEFAULT_FALLBACK_IMAGE;
const dryRun = process.env.SOCIAL_DRY_RUN === "true";

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

const isAllowedMetaLicense = (license) => {
  const normalized = normalizeWhitespace(license)
    .toLowerCase()
    .replace(/[–—]/g, "-");
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

const parseHeroCredit = (markdown) => {
  const match = markdown.match(
    /\*Photo:\s*\[([^\]]+)\]\(([^)]+)\)\s*-\s*\[([^\]]+)\]\(([^)]+)\)\s+via Wikimedia Commons(?:\s+\(([^)]+)\))?\.\*/i,
  );
  if (!match) return null;
  return {
    creator: normalizeWhitespace(match[1]),
    sourceUrl: match[2],
    license: normalizeWhitespace(match[3]),
    licenseUrl: match[4],
    transformation: match[5] ? normalizeWhitespace(match[5]) : "",
  };
};

const getSocialImage = async (article) => {
  const provenancePath = path.join(
    famSpaceDir,
    "content-data",
    "article-images",
    `${article.slug}.json`,
  );
  try {
    const provenance = JSON.parse(await fs.readFile(provenancePath, "utf8"));
    if (provenance.role !== "hero") throw new Error("not hero");
    if (!isAllowedMetaLicense(provenance.license ?? "")) {
      throw new Error("license not allowed");
    }

    const credit = parseHeroCredit(article.markdown);
    if (provenance.requiresAttribution === true && !credit) {
      throw new Error("missing attribution");
    }

    const candidates = [provenance.download, provenance.original].filter(Boolean);
    const jpeg = candidates.find(
      (candidate) => candidate?.mime === "image/jpeg" && candidate?.url,
    );
    if (!jpeg) throw new Error("no jpeg source");

    return {
      url: stripTracking(jpeg.url),
      alt: article.title,
      credit,
      kind: "hero",
    };
  } catch {
    return {
      url: fallbackImageUrl,
      alt: `Fam Space - ${article.title}`,
      credit: null,
      kind: "fallback",
    };
  }
};

const buildCreditText = (credit, compact = false) => {
  if (!credit) return "";
  if (compact) {
    return `Photo: ${credit.creator} - ${credit.license} ${credit.licenseUrl}`;
  }
  const transformation = credit.transformation
    ? ` (${credit.transformation})`
    : "";
  return `Photo: ${credit.creator} - ${credit.license} - ${credit.licenseUrl} - ${credit.sourceUrl}${transformation}`;
};

const buildFacebookCaption = (article, credit) =>
  [article.title, article.summary, article.url, buildCreditText(credit)]
    .filter(Boolean)
    .join("\n\n");

const buildInstagramCaption = (article, credit) =>
  [article.title, article.summary, article.url, buildCreditText(credit)]
    .filter(Boolean)
    .join("\n\n");

const buildThreadsText = (article, credit) => {
  const full = [article.title, article.url, buildCreditText(credit)]
    .filter(Boolean)
    .join("\n\n");
  if (full.length <= 500) return full;

  const compact = [article.title, article.url, buildCreditText(credit, true)]
    .filter(Boolean)
    .join("\n\n");
  if (compact.length <= 500) return compact;

  const roomForTitle = Math.max(40, 500 - article.url.length - 4);
  const title = article.title.slice(0, roomForTitle - 1).trimEnd() + "…";
  return `${title}\n\n${article.url}`.slice(0, 500);
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
    const message =
      data?.error?.message ?? data?.message ?? text ?? response.statusText;
    const error = new Error(`${response.status} ${message}`);
    error.response = data;
    throw error;
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
  const response = await fetch(url, { method: "POST", body });
  return parseJsonResponse(response);
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
  const data = await postForm(
    `https://graph.facebook.com/${GRAPH_VERSION}/${facebookPageId}/photos`,
    {
      url: image.url,
      caption: buildFacebookCaption(article, image.credit),
      published: "true",
      access_token: tokens.facebook,
    },
  );
  return data.post_id ?? data.id;
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
  return published.id;
};

const publishThreads = async (article, image) => {
  const created = await postForm(
    `https://graph.threads.net/v1.0/${threadsUserId}/threads`,
    {
      media_type: "IMAGE",
      image_url: image.url,
      text: buildThreadsText(article, image.credit),
      alt_text: image.alt.slice(0, 1_000),
      access_token: tokens.threads,
    },
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
      return published.id;
    } catch (error) {
      lastError = error;
      if (attempt < 5) await sleep(2_000 * attempt);
    }
  }
  throw lastError;
};

const ensureTokens = () => {
  if (dryRun) return;
  const missing = Object.entries(tokens)
    .filter(([, value]) => !value)
    .map(([name]) => name);
  if (missing.length > 0) {
    throw new Error(`missing access token(s): ${missing.join(", ")}`);
  }
};

const loadState = async () => {
  const raw = await fs.readFile(stateFile, "utf8");
  const state = JSON.parse(raw);
  state.articles ??= {};
  if (!state.startedAt) throw new Error("social state is missing startedAt");
  return state;
};

const saveState = async (state) => {
  await fs.writeFile(stateFile, `${JSON.stringify(state, null, 2)}\n`, "utf8");
};

const main = async () => {
  ensureTokens();
  const state = await loadState();
  const startedAtMs = Date.parse(state.startedAt);
  if (!Number.isFinite(startedAtMs)) {
    throw new Error("invalid startedAt in social state");
  }

  const articleRoot = path.join(famSpaceDir, "src", "routes", "articles");
  const files = await walkIndexFiles(articleRoot);
  const articles = [];
  for (const file of files) {
    const markdown = await fs.readFile(file, "utf8");
    const article = parseArticle(file, markdown);
    if (!article || article.status !== "published") continue;
    const publishedAtMs = Date.parse(article.publishedAt);
    if (!Number.isFinite(publishedAtMs) || publishedAtMs < startedAtMs) continue;
    articles.push(article);
  }
  articles.sort((a, b) => Date.parse(a.publishedAt) - Date.parse(b.publishedAt));

  let failures = 0;
  for (const article of articles) {
    const current = (state.articles[article.slug] ??= {});
    const pending = ["facebook", "instagram", "threads"].filter(
      (platform) => !current[platform],
    );
    if (pending.length === 0) continue;

    console.log(`Article: ${article.slug}`);
    try {
      if (!dryRun) await waitForArticle(article.url);
    } catch (error) {
      failures += pending.length;
      console.error(`  production: ${error.message}`);
      continue;
    }

    const image = await getSocialImage(article);
    console.log(`  image: ${image.kind}`);

    const publishers = {
      facebook: publishFacebook,
      instagram: publishInstagram,
      threads: publishThreads,
    };

    for (const platform of pending) {
      if (dryRun) {
        console.log(`  ${platform}: dry-run`);
        continue;
      }
      try {
        const id = await publishers[platform](article, image);
        current[platform] = {
          id: String(id),
          at: new Date().toISOString(),
        };
        await saveState(state);
        console.log(`  ${platform}: published (${id})`);
      } catch (error) {
        failures += 1;
        console.error(`  ${platform}: ${error.message}`);
      }
    }
  }

  if (dryRun) {
    console.log(`Dry-run complete: ${articles.length} eligible article(s).`);
    return;
  }

  await saveState(state);
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
