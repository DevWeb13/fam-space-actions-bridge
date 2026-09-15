#!/usr/bin/env node

import { promises as fs } from "node:fs";
import path from "node:path";

const FEED_URL =
  process.env.PINTEREST_FEED_URL ?? "https://www.fam-space.fr/pinterest-v2.xml";
const famSpaceDir = path.resolve(process.env.FAM_SPACE_DIR ?? "../fam-space");
const dryRun = process.env.SOCIAL_DRY_RUN === "true";
const stateFile = process.argv[2];

if (!stateFile) {
  console.error("Usage: node scripts/publish-instagram.mjs <instagram-state.json>");
  process.exit(2);
}

// Safety barrier for phase 1: this publisher is intentionally incapable of
// making a real Instagram publication. Live API calls will only be added after
// the dry-run inventory has been reviewed and explicitly approved.
if (!dryRun) {
  throw new Error(
    "Instagram live publishing is disabled in this version. Set SOCIAL_DRY_RUN=true.",
  );
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
    const link = getTagText(block, "link") || getTagText(block, "guid");
    entries.push({
      title: getTagText(block, "title"),
      description: getTagText(block, "description"),
      url: link,
      guid: getTagText(block, "guid"),
      pubDate: getTagText(block, "pubDate"),
      imageUrl: enclosure?.url ?? "",
      imageType: enclosure?.type ?? "",
      imageBytes: Number(enclosure?.length ?? 0),
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
  const raw = await fs.readFile(stateFile, "utf8");
  const state = JSON.parse(raw);
  if (Number(state.version) !== 1 || !state.posts || typeof state.posts !== "object") {
    throw new Error("instagram-state.json invalide: version 1 et posts{} requis");
  }
  return state;
};

const fetchFeed = async () => {
  const response = await fetch(FEED_URL, {
    headers: { "user-agent": "FamSpaceInstagramDryRun/1.0" },
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
  if (jpegUrl.protocol !== "https:") {
    throw new Error("source JPEG non HTTPS");
  }

  return {
    url: jpegUrl.href,
    width: Number(jpeg.width ?? 0),
    height: Number(jpeg.height ?? 0),
    license: String(provenance.license ?? ""),
    sourcePage: String(provenance.sourcePage ?? ""),
  };
};

const retryDelayMs = (response, attempt) => {
  const retryAfter = response.headers.get("retry-after");
  if (retryAfter) {
    const seconds = Number(retryAfter);
    if (Number.isFinite(seconds) && seconds >= 0) {
      return Math.max(1_000, seconds * 1_000);
    }
    const date = Date.parse(retryAfter);
    if (Number.isFinite(date)) {
      return Math.max(1_000, date - Date.now());
    }
  }
  return 2_000 * 2 ** attempt;
};

const verifyRemoteJpeg = async (rawUrl) => {
  const headers = { "user-agent": "FamSpaceInstagramDryRun/1.0" };

  for (let attempt = 0; attempt < 4; attempt += 1) {
    let response = await fetch(rawUrl, {
      method: "HEAD",
      headers,
      redirect: "follow",
    });

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
      return;
    }

    const retryable =
      response.status === 429 ||
      response.status === 500 ||
      response.status === 502 ||
      response.status === 503 ||
      response.status === 504;
    if (!retryable || attempt === 3) {
      throw new Error(`JPEG public inaccessible: HTTP ${response.status}`);
    }

    const delay = retryDelayMs(response, attempt);
    console.log(
      `  Wikimedia HTTP ${response.status}; nouvelle tentative dans ${Math.ceil(delay / 1_000)}s.`,
    );
    await sleep(delay);
  }
};

const buildCaption = (entry) =>
  [entry.title, entry.description, `À lire sur Fam Space :\n${entry.url}`]
    .filter(Boolean)
    .join("\n\n");

const main = async () => {
  const [state, xml] = await Promise.all([loadState(), fetchFeed()]);
  const entries = parseFeed(xml);
  if (entries.length === 0) throw new Error("Flux Pinterest vide ou illisible");

  const seenSlugs = new Set();
  let alreadyPublished = 0;
  let candidates = 0;
  let ready = 0;
  let blocked = 0;
  let portraitThreeFour = 0;

  console.log(`Instagram dry-run - source: ${FEED_URL}`);
  console.log(`Entrées trouvées dans le flux Pinterest: ${entries.length}`);

  for (const entry of entries) {
    if (!entry.title || !entry.url || !entry.description) {
      blocked += 1;
      console.error("[BLOQUÉ] entrée RSS incomplète");
      continue;
    }

    let slug;
    try {
      slug = slugFromArticleUrl(entry.url);
    } catch (error) {
      blocked += 1;
      console.error(`[BLOQUÉ] ${error.message}`);
      continue;
    }

    if (seenSlugs.has(slug)) {
      blocked += 1;
      console.error(`[BLOQUÉ] ${slug}: doublon dans le flux Pinterest`);
      continue;
    }
    seenSlugs.add(slug);

    if (state.posts[slug]) {
      alreadyPublished += 1;
      console.log(`[DÉJÀ PUBLIÉ] ${slug} -> ${state.posts[slug].id ?? "id inconnu"}`);
      continue;
    }

    candidates += 1;
    try {
      const image = await resolveInstagramImage(entry, slug);

      // Avoid hammering Wikimedia with a burst of 40 HEAD requests. This is a
      // validation-only delay and has no effect on future publication cadence.
      await sleep(1_250);
      await verifyRemoteJpeg(image.url);

      const caption = buildCaption(entry);
      if (caption.length > 2_200) {
        throw new Error(`légende trop longue: ${caption.length}/2200`);
      }

      const ratio =
        image.width > 0 && image.height > 0 ? image.width / image.height : null;
      if (ratio !== null && ratio >= 0.74 && ratio <= 0.76) {
        portraitThreeFour += 1;
      }

      ready += 1;
      console.log(
        `[PRÊT] ${slug} | ${image.width || "?"}x${image.height || "?"}` +
          `${ratio === null ? "" : ` | ratio=${ratio.toFixed(3)}`}` +
          ` | ${image.license || "licence via flux"} | légende=${caption.length}`,
      );
    } catch (error) {
      blocked += 1;
      console.error(`[BLOQUÉ] ${slug}: ${error.message}`);
    }
  }

  console.log("---");
  console.log(`Flux Pinterest: ${entries.length}`);
  console.log(`Déjà publié Instagram: ${alreadyPublished}`);
  console.log(`Candidats Instagram: ${candidates}`);
  console.log(`Prêts pour une future publication: ${ready}`);
  console.log(`Sources JPEG au format portrait ~3:4: ${portraitThreeFour}`);
  console.log(`Bloqués: ${blocked}`);
  console.log("Aucune publication Instagram n'a été effectuée (dry-run uniquement).");

  if (blocked > 0) process.exitCode = 1;
};

main().catch((error) => {
  console.error(error.stack ?? error.message);
  process.exitCode = 1;
});
