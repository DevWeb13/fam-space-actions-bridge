#!/usr/bin/env node

import { promises as fs } from "node:fs";
import path from "node:path";
import { execFileSync, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const TARGET_SLUG = "sortie-champignons-a-versigny-faut-il-reserver-avec-des-enfants";
const stateFile = process.argv[2];
if (!stateFile) process.exit(2);

const famSpaceDir = path.resolve(process.env.FAM_SPACE_DIR ?? "../fam-space");
const original = JSON.parse(await fs.readFile(stateFile, "utf8"));
const testState = structuredClone(original);
testState.posts ??= {};

const listed = execFileSync("git", ["-C", famSpaceDir, "ls-files", ":(glob)src/routes/articles/**/index.md"], { encoding: "utf8" });
for (const rel of listed.split("\n").filter(Boolean)) {
  const md = await fs.readFile(path.join(famSpaceDir, rel), "utf8");
  const m = md.match(/^slug:\s*["']?([^"'\r\n]+)["']?\s*$/m);
  if (!m) continue;
  const slug = m[1].trim();
  if (slug !== TARGET_SLUG && !testState.posts[slug]) {
    testState.posts[slug] = { id: "quota-test-skip", at: new Date(0).toISOString(), kind: "test-skip" };
  }
}

testState.backfill ??= {};
testState.backfill.dateParis = null;
testState.backfill.publishedToday = 0;
testState.backfill.lastPublishedAt = null;

const tmp = `${stateFile}.quota-test.tmp`;
await fs.writeFile(tmp, `${JSON.stringify(testState, null, 2)}\n`, "utf8");

const scriptPath = fileURLToPath(new URL("./publish-facebook.mjs", import.meta.url));
const run = spawnSync(process.execPath, [scriptPath, tmp], {
  stdio: "inherit",
  env: {
    ...process.env,
    FACEBOOK_BACKFILL_MAX_PER_DAY: "1",
    FACEBOOK_BACKFILL_MIN_INTERVAL_HOURS: "0",
    FACEBOOK_MAX_NEW_PER_RUN: "1",
    SOCIAL_DRY_RUN: "false",
  },
});

const after = JSON.parse(await fs.readFile(tmp, "utf8"));
if (after.posts?.[TARGET_SLUG]?.id && after.posts[TARGET_SLUG].id !== "quota-test-skip") {
  original.posts ??= {};
  original.posts[TARGET_SLUG] = after.posts[TARGET_SLUG];
  original.backfill ??= {};
  original.backfill.dateParis = after.backfill?.dateParis ?? original.backfill.dateParis ?? null;
  original.backfill.publishedToday = after.backfill?.publishedToday ?? original.backfill.publishedToday ?? 0;
  original.backfill.lastPublishedAt = after.backfill?.lastPublishedAt ?? original.backfill.lastPublishedAt ?? null;
  await fs.writeFile(stateFile, `${JSON.stringify(original, null, 2)}\n`, "utf8");
}

await fs.rm(tmp, { force: true });
process.exit(run.status ?? 1);
