#!/usr/bin/env node
// Export a single compact, Git-based catalogue for Radar. No GSC raw rows.
import { execFileSync } from "node:child_process";
import { readFile, readdir, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const [sitePath, outputPath] = process.argv.slice(2);
if (!sitePath || !outputPath) {
  throw new Error("Usage: export-radar-catalog.mjs <site-root> <output.json>");
}
const siteRoot = resolve(sitePath);
const compiled = (path) =>
  import(pathToFileURL(join(siteRoot, ".content-build", path)).href);

const [{ loadArticleCatalog }, { isPublicArticle }, { buildEditorialIndex }] =
  await Promise.all([
    compiled("scripts/lib/article-files.js"),
    compiled("src/lib/articles/catalog-core.js"),
    compiled("src/lib/articles/editorial-index.js"),
  ]);

const { documents, issues } = await loadArticleCatalog(siteRoot);
if (issues.length) {
  throw new Error(`Catalogue Radar: ${issues.length} article(s) invalide(s).`);
}
const published = documents
  .map(({ metadata }) => metadata)
  .filter((article) => isPublicArticle(article, new Date()));

const articles = buildEditorialIndex(published).map((article) => ({
  url: article.url,
  title: article.title,
  category: article.category,
  publishedAt: article.publishedAt,
  ...(article.location ? { location: article.location } : {}),
  ...(article.eventEndsAt ? { eventEndsAt: article.eventEndsAt } : {}),
  ...(article.reviewAt ? { reviewAt: article.reviewAt } : {}),
  ...(article.updatedAt ? { updatedAt: article.updatedAt } : {}),
  keywords: article.keywords,
  topic: article.topic,
  affiliateEnabled: article.affiliateEnabled,
}));

const historyDirectory = join(siteRoot, "content-data/radar-history");
const historyFiles = (await readdir(historyDirectory))
  .filter((file) => file.endsWith(".json"))
  .sort();
const groups = await Promise.all(
  historyFiles.map(async (file) =>
    JSON.parse(await readFile(join(historyDirectory, file), "utf8")),
  ),
);
const history = groups.flatMap((group) =>
  group.map(({ mode, url, publishedAt }) => ({ mode, url, publishedAt })),
);

const sourceSha = execFileSync(
  "git",
  [
    "-C", siteRoot, "log", "-1", "--format=%H", "HEAD", "--",
    "src/routes/articles", "content-data/radar-history",
  ],
  { encoding: "utf8" },
).trim();
if (!/^[a-f0-9]{40}$/.test(sourceSha) || !articles.length) {
  throw new Error("Source Git ou catalogue Radar vide.");
}

const catalog = { schemaVersion: 1, sourceSha, articles, history };
await writeFile(resolve(outputPath), JSON.stringify(catalog) + "\n", "utf8");
console.log(
  JSON.stringify({
    sourceSha,
    articles: articles.length,
    history: history.length,
  }),
);
