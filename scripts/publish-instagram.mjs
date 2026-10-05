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

  const width = Number(jpeg.width);
  const height = Number(jpeg.height);
  if (Number.isFinite(width) && Number.isFinite(height) && height > 0) {
    const ratio = width / height;
    if (ratio < 0.8 || ratio > 1.91) {
      throw new Error(
        `ratio JPEG non autorisé par Instagram: ${width}x${height} (${ratio.toFixed(3)})`,
      );
    }
  }

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

class InstagramApiError extends Error {
  constructor(status, message, data = {}) {
    super(`${status} ${message}`);
    this.name = "InstagramApiError";
    this.status = status;
    this.data = data;
  }
}

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
    throw new InstagramApiError(response.status, message, data);
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

const extractFamSpaceSlugFromCaption = (caption) => {
  if (!caption) return "";
  const urls =
    caption.match(/https?:\/\/(?:www\.)?fam-space\.fr\/articles\/[^\s<>"']+/gi) ?? [];
  for (const rawUrl of urls) {
    const cleaned = rawUrl.replace(/[),.;!?]+$/, "");
    try {
      return slugFromArticleUrl(cleaned);
    } catch {
      // Une autre URL Fam Space éventuelle dans la légende pourra être testée.
    }
  }
  return "";
};

const readInstagramMediaBySlug = async (targetSlugs) => {
  const wanted = targetSlugs instanceof Set ? targetSlugs : new Set(targetSlugs);
  const bySlug = new Map();
  if (wanted.size === 0) return bySlug;

  let next = new URL(
    `https://graph.instagram.com/${GRAPH_VERSION}/${instagramUserId}/media`,
  );
  next.searchParams.set("fields", "id,caption,timestamp,permalink");
  next.searchParams.set("limit", "100");
  next.searchParams.set("access_token", instagramAccessToken);

  const seenPages = new Set();
  while (next) {
    const pageUrl = next.href;
    if (seenPages.has(pageUrl)) {
      throw new Error("Instagram: pagination des médias en boucle");
    }
    seenPages.add(pageUrl);

    const data = await parseJsonResponse(await fetch(next));
    for (const media of data?.data ?? []) {
      const slug = extractFamSpaceSlugFromCaption(media.caption ?? "");
      if (!slug || !wanted.has(slug) || !media.id) continue;
      const list = bySlug.get(slug) ?? [];
      list.push({
        id: String(media.id),
        timestamp: media.timestamp ?? "",
        permalink: media.permalink ?? "",
      });
      bySlug.set(slug, list);
    }

    const nextUrl = data?.paging?.next;
    next = nextUrl ? new URL(nextUrl) : null;
  }

  return bySlug;
};

const sortRemoteMediaNewestFirst = (media) =>
  [...media].sort((a, b) => {
    const aTime = Date.parse(a.timestamp);
    const bTime = Date.parse(b.timestamp);
    if (Number.isFinite(aTime) && Number.isFinite(bTime)) return bTime - aTime;
    return 0;
  });

const reconcileInstagramState = async (entriesBySlug, state) => {
  const remoteBySlug = await readInstagramMediaBySlug(new Set(entriesBySlug.keys()));
  let repaired = 0;
  let duplicateSlugs = 0;

  for (const [slug, media] of remoteBySlug) {
    const sorted = sortRemoteMediaNewestFirst(media);
    const canonical = sorted[0];
    if (sorted.length > 1) {
      duplicateSlugs += 1;
      console.warn(
        `[DOUBLON DISTANT] ${slug}: ${sorted.map((item) => item.id).join(", ")}`,
      );
    }

    if (!state.posts[slug]) {
      state.posts[slug] = {
        id: canonical.id,
        at: canonical.timestamp || new Date().toISOString(),
        mode: "image",
        source: "instagram-reconciliation",
      };
      repaired += 1;
      console.log(`[RÉCONCILIÉ] ${slug} -> ${canonical.id}`);
    }
  }

  if (repaired > 0) await saveState(state);
  console.log(
    `Réconciliation Instagram: ${repaired} état(s) réparé(s), ${duplicateSlugs} slug(s) avec doublon distant.`,
  );
  return { repaired, duplicateSlugs };
};

const reconcilePublishedSlug = async (slug) => {
  try {
    const remoteBySlug = await readInstagramMediaBySlug(new Set([slug]));
    const remote = sortRemoteMediaNewestFirst(remoteBySlug.get(slug) ?? []);
    return remote[0] ?? null;
  } catch (error) {
    console.error(`[RÉCONCILIATION IMPOSSIBLE] ${slug}: ${error.message}`);
    return null;
  }
};

const isFatalBatchError = (error) => {
  const status = Number(error?.status);
  return (
    status === 403 ||
    status === 429 ||
    /application request limit reached/i.test(error?.message ?? "")
  );
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

const readInstagramContainerStatus = async (containerId) => {
  const url = new URL(`https://graph.instagram.com/${containerId}`);
  url.searchParams.set("fields", "status_code,status");
  url.searchParams.set("access_token", instagramAccessToken);
  return parseJsonResponse(await fetch(url));
};

const waitForInstagramContainer = async (containerId) => {
  const delays = [2_000, 3_000, 5_000, 8_000, 13_000, 21_000];
  for (let attempt = 0; attempt < delays.length; attempt += 1) {
    const data = await readInstagramContainerStatus(containerId);
    if (data.status_code === "FINISHED" || data.status_code === "PUBLISHED") {
      return data.status_code;
    }
    if (data.status_code === "ERROR" || data.status_code === "EXPIRED") {
      throw new Error(`container Instagram ${data.status_code}: ${data.status ?? ""}`);
    }
    await sleep(delays[attempt]);
  }
  throw new Error("timeout du container Instagram");
};

const publishInstagram = async (entry, image, slug) => {
  let creationId = "";

  try {
    const created = await postForm(
      `https://graph.instagram.com/${instagramUserId}/media`,
      {
        image_url: image.url,
        caption: buildCaption(entry),
        access_token: instagramAccessToken,
      },
    );
    if (!created.id) throw new Error("Instagram n'a pas renvoyé de creation_id");
    creationId = String(created.id);

    const containerStatus = await waitForInstagramContainer(creationId);
    if (containerStatus === "PUBLISHED") {
      const remote = await reconcilePublishedSlug(slug);
      if (remote) {
        return { id: remote.id, source: "instagram-reconciliation-after-publish" };
      }
    }

    const published = await postForm(
      `https://graph.instagram.com/${instagramUserId}/media_publish`,
      { creation_id: creationId, access_token: instagramAccessToken },
    );
    if (!published.id) throw new Error("Instagram n'a pas renvoyé de media id");
    return { id: String(published.id), source: "instagram-publisher" };
  } catch (error) {
    if (creationId) {
      try {
        const status = await readInstagramContainerStatus(creationId);
        console.error(
          `[CONTAINER] ${slug}: ${creationId} -> ${status.status_code ?? "inconnu"}`,
        );
      } catch (statusError) {
        console.error(
          `[CONTAINER INDISPONIBLE] ${slug}: ${creationId}: ${statusError.message}`,
        );
      }
    }

    const remote = await reconcilePublishedSlug(slug);
    if (remote) {
      console.warn(
        `[RÉCUPÉRÉ APRÈS ERREUR] ${slug}: publication distante ${remote.id} détectée malgré "${error.message}"`,
      );
      return { id: remote.id, source: "instagram-reconciliation-after-error" };
    }

    throw error;
  }
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

const publishOne = async (slug, entry, state, prepared) => {
  const result = await publishInstagram(entry, prepared.image, slug);
  state.posts[slug] = {
    id: result.id,
    at: new Date().toISOString(),
    mode: "image",
    source: result.source,
  };
  await saveState(state);
  console.log(`[PUBLIÉ] ${slug} -> ${result.id}`);
};

const runLiveOne = async (entriesBySlug, state) => {
  const entry = entriesBySlug.get(targetSlug);
  if (!entry) throw new Error(`Slug absent du flux Pinterest: ${targetSlug}`);
  if (state.posts[targetSlug]) {
    console.log(`[DÉJÀ PUBLIÉ] ${targetSlug}`);
    return;
  }

  const prepared = await validateEntry(entry, targetSlug);
  const quota = await readInstagramQuota();
  if (quota.remaining < 1) {
    throw new Error(`Quota Instagram épuisé: ${quota.usage}/${quota.total}`);
  }
  await publishOne(targetSlug, entry, state, prepared);
};

const runLiveAll = async (entriesBySlug, state) => {
  const pending = [...entriesBySlug.entries()].filter(([slug]) => !state.posts[slug]);
  if (pending.length === 0) {
    console.log("Instagram est à jour: aucune publication en attente.");
    return;
  }

  const ready = [];
  let blocked = 0;
  for (const [slug, entry] of pending) {
    try {
      const prepared = await validateEntry(entry, slug);
      ready.push({ slug, entry, prepared });
    } catch (error) {
      blocked += 1;
      console.error(`[BLOQUÉ] ${slug}: ${error.message}`);
    }
  }

  if (ready.length === 0) {
    console.log("---");
    console.log("Aucune publication Instagram à effectuer.");
    console.log(`Bloqués localement: ${blocked}`);
    return;
  }

  const quota = await readInstagramQuota();
  const batch = ready.slice(0, quota.remaining);
  console.log(
    `Instagram: ${ready.length} prête(s), ${blocked} bloquée(s), quota ${quota.usage}/${quota.total}, ` +
      `${batch.length} publication(s) prévue(s).`,
  );

  let published = 0;
  let failed = 0;
  let stopped = false;

  for (const { slug, entry, prepared } of batch) {
    try {
      await publishOne(slug, entry, state, prepared);
      published += 1;
    } catch (error) {
      failed += 1;
      console.error(`[ÉCHEC] ${slug}: ${error.message}`);
      if (isFatalBatchError(error)) {
        stopped = true;
        console.error(
          "Instagram: erreur de limite ou d'autorisation, arrêt immédiat du lot pour éviter toute duplication.",
        );
        break;
      }
    }
  }

  console.log("---");
  console.log(`Publiés ou réconciliés: ${published}`);
  console.log(`Échecs API: ${failed}`);
  console.log(`Bloqués localement: ${blocked}`);
  console.log(`Prêts restant à traiter: ${Math.max(0, ready.length - published)}`);
  if (stopped) console.log("Lot interrompu après erreur Meta fatale.");

  if (failed > 0) process.exitCode = 1;
};

const main = async () => {
  const [state, xml] = await Promise.all([loadState(), fetchFeed()]);
  const entries = parseFeed(xml);
  if (entries.length === 0) throw new Error("Flux Pinterest vide ou illisible");
  const entriesBySlug = uniqueFeedEntries(entries);

  if (mode !== "dry-run") {
    await reconcileInstagramState(entriesBySlug, state);
  }

  if (mode === "dry-run") await runDryRun(entriesBySlug, state);
  else if (mode === "live-one") await runLiveOne(entriesBySlug, state);
  else await runLiveAll(entriesBySlug, state);
};

main().catch((error) => {
  console.error(error.stack ?? error.message);
  process.exitCode = 1;
});
