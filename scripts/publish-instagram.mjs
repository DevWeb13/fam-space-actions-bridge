#!/usr/bin/env node

import { promises as fs } from "node:fs";
import path from "node:path";

const FEED_URL =
  process.env.PINTEREST_FEED_URL ?? "https://www.fam-space.fr/pinterest-v2.xml";
const GRAPH_VERSION = "v26.0";
const DEFAULT_INSTAGRAM_USER_ID = "28082762261424741";
const famSpaceDir = path.resolve(process.env.FAM_SPACE_DIR ?? "../fam-space");
const dryRun = process.env.SOCIAL_DRY_RUN === "true";
const targetSlug = (process.env.INSTAGRAM_TARGET_SLUG ?? "").trim();
const instagramUserId =
  (process.env.INSTAGRAM_USER_ID ?? "").trim() || DEFAULT_INSTAGRAM_USER_ID;
const instagramAccessToken = (process.env.INSTAGRAM_ACCESS_TOKEN ?? "").trim();
const stateFile = process.argv[2];

if (!stateFile) {
  console.error("Usage: node scripts/publish-instagram.mjs <instagram-state.json>");
  process.exit(2);
}
if (!dryRun && !targetSlug) {
  throw new Error("Mode réel refusé: INSTAGRAM_TARGET_SLUG est obligatoire.");
}
if (!dryRun && !instagramAccessToken) {
  throw new Error("Mode réel refusé: INSTAGRAM_ACCESS_TOKEN est absent.");
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

const getEnclosure = (block) => {
  const match = block.match(/<enclosure\b([^>]*)\/?\s*>/i);
  if (!match) return null;
  const attributes = {};
  for (const attribute of match[1].matchAll(/([\w:-]+)="([^"]*)"/g)) {
    attributes[attribute[1]] = decodeXml(attribute[2]);
  }
  return attributes;
};

const parseFeed = (xml) => {
  const entries = [];
  for (const match of xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)) {
    const block = match[1];
    const enclosure = getEnclosure(block);
    entries.push({
      title: getTagText(block, "title"),
      description: getTagText(block, "description"),
      url: getTagText(block, "link") || getTagText(block, "guid"),
      imageUrl: enclosure?.url ?? "",
      imageType: enclosure?.type ?? "",
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

const loadLegacyState = async () => {
  const legacyPath = path.join(path.dirname(path.resolve(stateFile)), "social-state.json");
  try {
    return JSON.parse(await fs.readFile(legacyPath, "utf8"));
  } catch {
    return {};
  }
};

const fetchFeed = async () => {
  const response = await fetch(FEED_URL, {
    headers: { "user-agent": "FamSpaceInstagramPublisher/1.0 (https://www.fam-space.fr/)" },
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

const isInstagramAllowedLicense = (license) => {
  const normalized = String(license ?? "").trim().toLowerCase();
  if (!normalized) return false;
  if (/^cc0(?:\s*(?:1\.0|1\.0 universal))?$/.test(normalized)) return true;
  if (/^public[\s-]domain$/.test(normalized)) return true;
  if (/^public domain mark(?:\s*1\.0)?$/.test(normalized)) return true;
  return false;
};

const resolveInstagramImage = async (entry, slug) => {
  if (!entry.imageUrl) throw new Error("enclosure image absente du flux");
  if (entry.imageType !== "image/webp") {
    throw new Error(`type enclosure inattendu: ${entry.imageType || "absent"}`);
  }

  const provenancePath = path.join(
    famSpaceDir,
    "content-data",
    "article-images",
    `${slug}.json`,
  );
  let provenance;
  try {
    provenance = JSON.parse(await fs.readFile(provenancePath, "utf8"));
  } catch {
    throw new Error("provenance hero absente ou illisible dans production");
  }

  if (provenance.role !== "hero") {
    throw new Error(`provenance non hero: ${provenance.role ?? "absent"}`);
  }
  if (provenance.provider !== "wikimedia-commons") {
    throw new Error(`provider non pris en charge: ${provenance.provider ?? "absent"}`);
  }
  if (!isInstagramAllowedLicense(provenance.license)) {
    throw new Error(`licence Instagram temporairement non autorisée: ${provenance.license || "absente"}`);
  }

  const enclosurePath = new URL(entry.imageUrl).pathname;
  if (!provenance.output?.path || provenance.output.path !== enclosurePath) {
    throw new Error(
      `hero incohérente: feed=${enclosurePath} provenance=${provenance.output?.path ?? "absent"}`,
    );
  }

  const candidates = [provenance.download, provenance.original].filter(Boolean);
  const jpeg = candidates.find(
    (candidate) => candidate?.mime === "image/jpeg" && candidate?.url,
  );
  if (!jpeg) throw new Error("aucune source JPEG dans la provenance courante");

  const jpegUrl = new URL(stripTracking(jpeg.url));
  if (jpegUrl.protocol !== "https:") throw new Error("source JPEG non HTTPS");

  return {
    url: jpegUrl.href,
    width: Number(jpeg.width ?? 0),
    height: Number(jpeg.height ?? 0),
    license: String(provenance.license ?? ""),
  };
};

const retryDelayMs = (response, attempt) => {
  const retryAfter = response.headers.get("retry-after");
  if (retryAfter) {
    const seconds = Number(retryAfter);
    if (Number.isFinite(seconds) && seconds >= 0) return Math.max(2_000, seconds * 1_000);
    const date = Date.parse(retryAfter);
    if (Number.isFinite(date)) return Math.max(2_000, date - Date.now());
  }
  return 2_000 * 2 ** attempt;
};

const verifyRemoteJpeg = async (rawUrl) => {
  const headers = {
    "user-agent": "FamSpaceInstagramPublisher/1.0 (https://www.fam-space.fr/)",
  };
  for (let attempt = 0; attempt < 3; attempt += 1) {
    let response = await fetch(rawUrl, { method: "HEAD", headers, redirect: "follow" });
    if (response.status === 405 || response.status === 501) {
      response = await fetch(rawUrl, {
        headers: { ...headers, range: "bytes=0-0" },
        redirect: "follow",
      });
    }
    if (response.ok) {
      const contentType = response.headers.get("content-type") ?? "";
      if (contentType && !contentType.toLowerCase().includes("image/jpeg")) {
        throw new Error(`JPEG public renvoie ${contentType}`);
      }
      return { verified: true, deferred: false, status: response.status };
    }
    const retryable = [429, 500, 502, 503, 504].includes(response.status);
    if (!retryable) throw new Error(`JPEG public inaccessible: HTTP ${response.status}`);
    if (attempt === 2) return { verified: false, deferred: true, status: response.status };
    const delay = retryDelayMs(response, attempt);
    console.log(`  Source JPEG HTTP ${response.status}; retry dans ${Math.ceil(delay / 1000)}s.`);
    await sleep(delay);
  }
  return { verified: false, deferred: true, status: 0 };
};

const buildCaption = (entry) =>
  [entry.title, entry.description, `À lire sur Fam Space :\n${entry.url}`]
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
    const error = new Error(`${response.status} ${message}`);
    error.response = data;
    throw error;
  }
  return data;
};

const postForm = async (url, fields) => {
  const body = new URLSearchParams();
  for (const [key, value] of Object.entries(fields)) {
    if (value !== undefined && value !== null && value !== "") body.set(key, String(value));
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
  if (usage >= total) throw new Error(`Instagram: quota épuisé (${usage}/${total})`);
  console.log(`Instagram quota avant publication: ${usage}/${total}.`);
};

const waitForArticle = async (url) => {
  for (let attempt = 1; attempt <= 12; attempt += 1) {
    try {
      const response = await fetch(url, {
        method: "GET",
        redirect: "follow",
        headers: { "user-agent": "FamSpaceInstagramPublisher/1.0" },
      });
      if (response.ok) return;
    } catch {
      // Retry while production is converging.
    }
    if (attempt < 12) await sleep(10_000);
  }
  throw new Error(`article inaccessible en production: ${url}`);
};

const waitForInstagramContainer = async (containerId) => {
  for (let attempt = 1; attempt <= 20; attempt += 1) {
    const url = new URL(`https://graph.instagram.com/${containerId}`);
    url.searchParams.set("fields", "status_code,status");
    url.searchParams.set("access_token", instagramAccessToken);
    const data = await parseJsonResponse(await fetch(url));
    if (data.status_code === "FINISHED") return;
    if (data.status_code === "ERROR" || data.status_code === "EXPIRED") {
      throw new Error(`Instagram container ${data.status_code}: ${data.status ?? ""}`);
    }
    await sleep(2_000);
  }
  throw new Error("Instagram container processing timeout");
};

const publishInstagram = async (entry, image) => {
  const caption = buildCaption(entry);
  const created = await postForm(`https://graph.instagram.com/${instagramUserId}/media`, {
    image_url: image.url,
    caption,
    access_token: instagramAccessToken,
  });
  if (!created.id) throw new Error("Instagram: aucun creation_id renvoyé");
  console.log(`Container Instagram créé: ${created.id}.`);
  await waitForInstagramContainer(created.id);
  const published = await postForm(
    `https://graph.instagram.com/${instagramUserId}/media_publish`,
    { creation_id: created.id, access_token: instagramAccessToken },
  );
  if (!published.id) throw new Error("Instagram: aucun media id renvoyé après publication");
  return { id: published.id, mode: "image" };
};

const isAlreadyPublished = (state, legacyState, slug) =>
  Boolean(state.posts?.[slug] || legacyState?.[slug]?.instagram);

const validateEntry = async (entry, slug, requireRemote = false) => {
  if (!entry.title || !entry.url || !entry.description) {
    throw new Error("entrée RSS incomplète");
  }
  const image = await resolveInstagramImage(entry, slug);
  const remote = await verifyRemoteJpeg(image.url);
  if (requireRemote && !remote.verified) {
    throw new Error(`source JPEG non confirmée avant publication (HTTP ${remote.status})`);
  }
  const caption = buildCaption(entry);
  if (caption.length > 2_200) throw new Error(`légende trop longue: ${caption.length}/2200`);
  const ratio = image.width > 0 && image.height > 0 ? image.width / image.height : null;
  return { image, remote, caption, ratio };
};

const runDryRun = async (entries, state, legacyState) => {
  const seenSlugs = new Set();
  let alreadyPublished = 0;
  let candidates = 0;
  let ready = 0;
  let blocked = 0;
  let remoteChecksDeferred = 0;
  let legacyRatioOutliers = 0;

  console.log(`Instagram dry-run - source: ${FEED_URL}`);
  console.log(`Entrées trouvées dans le flux Pinterest: ${entries.length}`);

  for (const entry of entries) {
    let slug;
    try {
      slug = slugFromArticleUrl(entry.url);
      if (seenSlugs.has(slug)) throw new Error(`${slug}: doublon dans le flux Pinterest`);
      seenSlugs.add(slug);
      if (isAlreadyPublished(state, legacyState, slug)) {
        alreadyPublished += 1;
        console.log(`[DÉJÀ PUBLIÉ] ${slug}`);
        continue;
      }
      candidates += 1;
      await sleep(1_250);
      const check = await validateEntry(entry, slug, false);
      if (check.remote.deferred) remoteChecksDeferred += 1;
      const outsideLegacyRatio =
        check.ratio !== null && (check.ratio < 0.8 || check.ratio > 1.91);
      if (outsideLegacyRatio) legacyRatioOutliers += 1;
      ready += 1;
      console.log(
        `[PRÊT] ${slug} | ${check.image.width || "?"}x${check.image.height || "?"}` +
          `${check.ratio === null ? "" : ` | ratio=${check.ratio.toFixed(3)}`}` +
          `${outsideLegacyRatio ? " | ratio atypique (diagnostic)" : ""}` +
          `${check.remote.deferred ? ` | contrôle distant différé (HTTP ${check.remote.status})` : ""}` +
          ` | ${check.image.license} | légende=${check.caption.length}`,
      );
    } catch (error) {
      blocked += 1;
      console.error(`[BLOQUÉ] ${slug ?? "entrée inconnue"}: ${error.message}`);
    }
  }

  console.log("---");
  console.log(`Flux Pinterest: ${entries.length}`);
  console.log(`Déjà publié Instagram: ${alreadyPublished}`);
  console.log(`Candidats Instagram: ${candidates}`);
  console.log(`Prêts pour une future publication: ${ready}`);
  console.log(`Contrôles JPEG distants différés (429/5xx): ${remoteChecksDeferred}`);
  console.log(`Ratios hors ancienne plage 4:5–1.91:1 (diagnostic): ${legacyRatioOutliers}`);
  console.log(`Bloqués: ${blocked}`);
  console.log("Aucune publication Instagram n'a été effectuée (dry-run uniquement).");
  if (blocked > 0) process.exitCode = 1;
};

const runLiveOne = async (entries, state, legacyState) => {
  const entry = entries.find((item) => {
    try {
      return slugFromArticleUrl(item.url) === targetSlug;
    } catch {
      return false;
    }
  });
  if (!entry) throw new Error(`Slug absent du flux Instagram autorisé: ${targetSlug}`);
  if (isAlreadyPublished(state, legacyState, targetSlug)) {
    console.log(`[DÉJÀ PUBLIÉ] ${targetSlug}; aucune nouvelle publication.`);
    return;
  }

  console.log(`Instagram live-one: ${targetSlug}`);
  const check = await validateEntry(entry, targetSlug, true);
  console.log(
    `Validation OK: ${check.image.width || "?"}x${check.image.height || "?"}, ${check.image.license}, légende=${check.caption.length}.`,
  );
  await waitForArticle(entry.url);
  await readInstagramQuota();
  const published = await publishInstagram(entry, check.image);

  state.posts[targetSlug] = {
    id: published.id,
    at: new Date().toISOString(),
    mode: published.mode,
    source: "instagram-publisher",
  };
  await fs.writeFile(stateFile, `${JSON.stringify(state, null, 2)}\n`, "utf8");
  console.log(`[PUBLIÉ] ${targetSlug} -> ${published.id}`);
};

const main = async () => {
  const [state, legacyState, xml] = await Promise.all([
    loadState(),
    loadLegacyState(),
    fetchFeed(),
  ]);
  const entries = parseFeed(xml);
  if (entries.length === 0) throw new Error("Flux Pinterest vide ou illisible");
  if (dryRun) await runDryRun(entries, state, legacyState);
  else await runLiveOne(entries, state, legacyState);
};

main().catch((error) => {
  console.error(error.stack ?? error.message);
  process.exitCode = 1;
});
