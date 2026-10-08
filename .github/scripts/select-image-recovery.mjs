#!/usr/bin/env node
// Sélectionne uniquement un candidat image déjà préparé et encore attendu.
// Aucun commit ni signal GitHub n'est créé par ce rattrapage.
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const CANDIDATE = "content-candidates/article-images.json";
const WORKFLOW = "content-data/article-image-automation-workflow.md";
const BRANCH_PREFIX = "origin/automation/image-";
const SHA = /^[0-9a-f]{40}$/;
const BRANCH = /^automation\/image-[A-Za-z0-9._-]+$/;

function git(...args) {
  return execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
}
function maybeGit(...args) {
  try { return git(...args); } catch { return null; }
}
function jsonAt(ref, path) {
  const contents = maybeGit("show", `${ref}:${path}`);
  if (contents === null) return null;
  try { return JSON.parse(contents); } catch { return null; }
}
function sameLot(actual, expected) {
  if (!Array.isArray(actual) || !Array.isArray(expected) || actual.length !== expected.length || !actual.length) return false;
  const toKey = a => a && typeof a.slug === "string" && typeof a.articlePath === "string"
    ? `${a.slug}\u0000${a.articlePath}` : null;
  const left = actual.map(toKey).sort();
  const right = expected.map(toKey).sort();
  return !left.includes(null) && !right.includes(null) && JSON.stringify(left) === JSON.stringify(right);
}
function onlyCandidateDiff(base, head, status) {
  return maybeGit("diff", "--name-status", base, head) === `${status}\t${CANDIDATE}`;
}
function isAncestor(base, head) {
  try {
    execFileSync("git", ["merge-base", "--is-ancestor", base, head], { stdio: "ignore" });
    return true;
  } catch { return false; }
}
function validCandidate(ref, state, pending, masterWorkflowBlob) {
  const head = maybeGit("rev-parse", ref);
  if (!head || !SHA.test(head) || maybeGit("log", "-1", "--format=%s", head) !== "content: image candidate") return null;
  const data = jsonAt(head, CANDIDATE);
  if (!data || data.version !== 3 || !Array.isArray(data.articles)) return null;

  const branch = ref.replace(/^origin\//, "");
  if (!BRANCH.test(branch)) return null;

  if (state.phase === 2) {
    if (branch !== state.activeBranch || data.phase !== "body" || !sameLot(data.articles, state.articles)) return null;
    if (!SHA.test(state.phase1Head || "") || !isAncestor(state.phase1Head, head)) return null;
    if (!onlyCandidateDiff(state.phase1Head, head, "M")) return null;
  } else if (state.phase === 1) {
    if (data.phase !== "hero" || !sameLot(data.articles, pending.articles)) return null;
    const parent = maybeGit("rev-parse", `${head}^`);
    if (!parent || !SHA.test(parent) || !isAncestor(parent, "origin/master")) return null;
    if (!onlyCandidateDiff(parent, head, "A")) return null;
    if (maybeGit("rev-parse", `${parent}:${WORKFLOW}`) !== masterWorkflowBlob) return null;
    for (const article of data.articles) {
      if (!SHA.test(article.sourceSha || "") || maybeGit("rev-parse", `${parent}:${article.articlePath}`) !== article.sourceSha) return null;
    }
  } else return null;

  return { branch, head, timestamp: Number(maybeGit("log", "-1", "--format=%ct", head)) || 0 };
}

const state = JSON.parse(readFileSync("content-data/article-image-phase.json", "utf8"));
const pending = JSON.parse(readFileSync("content-data/article-image-pending.json", "utf8"));
const workflowBlob = git("rev-parse", `origin/master:${WORKFLOW}`);
const refs = git("for-each-ref", "--format=%(refname:short)", "refs/remotes/origin/automation/image-")
  .split("\n").filter(ref => ref.startsWith(BRANCH_PREFIX));
const eligible = refs.map(ref => validCandidate(ref, state, pending, workflowBlob)).filter(Boolean)
  .sort((a, b) => b.timestamp - a.timestamp || b.head.localeCompare(a.head));
if (eligible.length) {
  const chosen = eligible[0];
  console.error(`Rattrapage images: candidat ${chosen.branch} @ ${chosen.head}`);
  process.stdout.write(`${chosen.branch}|${chosen.head}`);
} else {
  console.error(`Rattrapage images: aucun candidat valide à reprendre (phase ${state.phase}).`);
}
