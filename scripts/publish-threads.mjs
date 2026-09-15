#!/usr/bin/env node

import { promises as fs } from "node:fs";

const FEED_URL =
  process.env.PINTEREST_FEED_URL ?? "https://www.fam-space.fr/pinterest-v2.xml";
const DEFAULT_THREADS_USER_ID = "28413878778293545";
const mode = (process.env.THREADS_MODE ?? "dry-run").trim();
const targetSlug = (process.env.THREADS_TARGET_SLUG ?? "").trim();
const threadsUserId =
  (process.env.THREADS_USER_ID ?? "").trim() || DEFAULT_THREADS_USER_ID;
const threadsAccessToken = (process.env.THREADS_ACCESS_TOKEN ?? "").trim();
const stateFile = process.argv[2];

if (!stateFile) {
  console.error("Usage: node scripts/publish-threads.mjs <threads-state.json>");
  process.exit(2);
}
if (!["dry-run", "live-one", "live-all"].includes(mode)) {
  throw new Error(`Mode Threads inconnu: ${mode}`);
}
if (mode === "live-one" && !targetSlug) {
  throw new Error("THREADS_TARGET_SLUG est obligatoire en mode live-one.");
}
if (mode !== "dry-run" && !threadsAccessToken) {
  throw new Error("THREADS_ACCESS_TOKEN est absent.");
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const normalizeWhitespace = (value) => value.replace(/\s+/g, " ").trim();

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
    throw new Error("threads-state.json invalide: version 1 et posts{} requis");
  }
  return state;
};

const saveState = async (state) => {
  await fs.writeFile(stateFile, `${JSON.stringify(state, null, 2)}\n`, "utf8");
};

const fetchFeed = async () => {
  const response = await fetch(FEED_URL, {
    headers: { "user-agent": "FamSpaceThreadsPublisher/1.0" },
    redirect: "follow",
  });
  if (!response.ok) {
    throw new Error(`Flux Pinterest indisponible: HTTP ${response.status}`);
  }
  return response.text();
};

const fitThreadsText = (entry) => {
  const title = normalizeWhitespace(entry.title);
  const description = normalizeWhitespace(entry.description);
  const url = entry.url.trim();
  const full = [title, description, url].filter(Boolean).join("\n\n");
  if (full.length <= 500) return full;

  const reserved = url.length + 4;
  const maxBody = Math.max(1, 500 - reserved);
  const body = [title, description].filter(Boolean).join(" — ");
  const shortened =
    body.length > maxBody
      ? `${body.slice(0, Math.max(1, maxBody - 1)).trimEnd()}…`
      : body;
  return `${shortened}\n\n${url}`.slice(0, 500);
};

const validateEntry = (entry) => {
  if (!entry.title || !entry.description || !entry.url || !entry.imageUrl) {
    throw new Error("entrée incomplète dans le flux Pinterest");
  }
  const articleUrl = new URL(entry.url);
  const imageUrl = new URL(entry.imageUrl);
  if (articleUrl.protocol !== "https:" || imageUrl.protocol !== "https:") {
    throw new Error("URL article ou image non HTTPS");
  }
  const text = fitThreadsText(entry);
  if (text.length > 500) {
    throw new Error(`texte Threads trop long: ${text.length}/500`);
  }
  return { text, imageUrl: imageUrl.href };
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

const readThreadsQuota = async () => {
  const url = new URL("https://graph.threads.net/v1.0/me/threads_publishing_limit");
  url.searchParams.set("fields", "quota_usage,config");
  url.searchParams.set("access_token", threadsAccessToken);
  const data = await parseJsonResponse(await fetch(url));
  const item = data?.data?.[0] ?? {};
  const usage = Number(item.quota_usage);
  const total = Number(item?.config?.quota_total);
  if (!Number.isFinite(usage) || !Number.isFinite(total)) {
    throw new Error("Threads: réponse quota invalide");
  }
  return { usage, total, remaining: Math.max(0, total - usage) };
};

const publishThreads = async (entry, prepared) => {
  const created = await postForm(
    `https://graph.threads.net/v1.0/${threadsUserId}/threads`,
    {
      media_type: "IMAGE",
      image_url: prepared.imageUrl,
      text: prepared.text,
      alt_text: entry.title.slice(0, 1_000),
      access_token: threadsAccessToken,
    },
  );
  if (!created.id) throw new Error("Threads n'a pas renvoyé de creation_id");

  let lastError;
  for (let attempt = 1; attempt <= 5; attempt += 1) {
    try {
      const published = await postForm(
        `https://graph.threads.net/v1.0/${threadsUserId}/threads_publish`,
        { creation_id: created.id, access_token: threadsAccessToken },
      );
      if (!published.id) throw new Error("Threads n'a pas renvoyé de media id");
      return published.id;
    } catch (error) {
      lastError = error;
      if (attempt < 5) await sleep(2_000);
    }
  }
  throw lastError;
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
      validateEntry(entry);
      ready += 1;
      console.log(`[PRÊT] ${slug}`);
    } catch (error) {
      blocked += 1;
      console.error(`[BLOQUÉ] ${slug}: ${error.message}`);
    }
  }

  console.log("---");
  console.log(`Flux Pinterest: ${entriesBySlug.size}`);
  console.log(`Déjà publié Threads: ${alreadyPublished}`);
  console.log(`Prêts: ${ready}`);
  console.log(`Bloqués: ${blocked}`);
  console.log("Aucune publication effectuée.");
};

const publishOne = async (slug, entry, state) => {
  const prepared = validateEntry(entry);
  const mediaId = await publishThreads(entry, prepared);
  state.posts[slug] = {
    id: mediaId,
    at: new Date().toISOString(),
    mode: "image",
    source: "threads-publisher",
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
  const quota = await readThreadsQuota();
  if (quota.remaining < 1) {
    throw new Error(`Quota Threads épuisé: ${quota.usage}/${quota.total}`);
  }
  await publishOne(targetSlug, entry, state);
};

const runLiveAll = async (entriesBySlug, state) => {
  const pending = [...entriesBySlug.entries()].filter(([slug]) => !state.posts[slug]);
  if (pending.length === 0) {
    console.log("Threads est à jour: aucune publication en attente.");
    return;
  }

  const quota = await readThreadsQuota();
  const batch = pending.slice(0, quota.remaining);
  console.log(
    `Threads: ${pending.length} en attente, quota ${quota.usage}/${quota.total}, ` +
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
