#!/usr/bin/env node
import { execFileSync } from "node:child_process";

const BRIDGE = process.env.GITHUB_REPOSITORY || "DevWeb13/fam-space-actions-bridge";
const SITE = "DevWeb13/fam-space-qwik";
const MARKER = "<!-- fam-space-images-monitor -->";
const TITLE = "[Surveillance] Images Fam Space bloquées";
const now = Date.now();

function api(path, ...args) {
  // Le Bridge est public, le site est privé: utiliser le bon jeton pour chaque API.
  const token = path.startsWith(`repos/${SITE}/`)
    ? process.env.FAM_SPACE_TOKEN
    : process.env.GH_TOKEN;
  if (!token) throw new Error("Jeton GitHub manquant pour la surveillance Images.");
  const result = execFileSync("gh", ["api", path, ...args], {
    encoding: "utf8",
    maxBuffer: 5 * 1024 * 1024,
    env: { ...process.env, GH_TOKEN: token },
  });
  return JSON.parse(result);
}

function ageHours(date) {
  const timestamp = Date.parse(date);
  if (!Number.isFinite(timestamp)) throw new Error(`Date invalide: ${date}`);
  return (now - timestamp) / 3_600_000;
}

const stateResponse = api(
  `repos/${SITE}/contents/content-data/article-image-phase.json?ref=automation/attente-images`,
);
const state = JSON.parse(Buffer.from(stateResponse.content, "base64").toString("utf8"));
const recentRuns = api(
  `repos/${BRIDGE}/actions/workflows/fam-space-images.yml/runs?per_page=10`,
).workflow_runs ?? [];
const latest = recentRuns[0];
const queuedRuns = api(
  `repos/${BRIDGE}/actions/workflows/fam-space-images.yml/runs?status=queued&per_page=100`,
).workflow_runs ?? [];
const anomalies = [];

const staleQueued = queuedRuns.filter((run) => ageHours(run.created_at) > 2);
if (staleQueued.length) {
  const oldest = staleQueued.reduce((a, b) =>
    Date.parse(a.created_at) < Date.parse(b.created_at) ? a : b);
  anomalies.push(
    `${staleQueued.length} exécution(s) Images en file depuis plus de 2 h, ` +
    `dont ${oldest.html_url} (${Math.floor(ageHours(oldest.created_at))} h).`,
  );
}

if (latest && latest.status !== "completed" && latest.status !== "queued" &&
    ageHours(latest.created_at) > 2) {
  anomalies.push(`Exécution GitHub en attente depuis plus de 2 h: ${latest.html_url}`);
}
if (latest && latest.status === "completed" &&
    ["failure", "timed_out", "action_required", "cancelled"].includes(latest.conclusion)) {
  anomalies.push(`Dernière exécution sans succès: ${latest.html_url} (${latest.conclusion})`);
}

if (state.phase === 2) {
  const commits = api(
    `repos/${SITE}/commits?sha=automation/attente-images&path=content-data/article-image-phase.json&per_page=1`,
  );
  if (commits.length !== 1) throw new Error("Dernière transition Images introuvable.");
  const elapsed = ageHours(commits[0].commit.committer.date);
  if (elapsed > 4) {
    anomalies.push(
      `Phase BODY bloquée depuis ${Math.floor(elapsed)} h sur ${state.activeBranch || "branche inconnue"}.`,
    );
  }
} else if (state.phase === 1) {
  const pendingResponse = api(
    `repos/${SITE}/contents/content-data/article-image-pending.json?ref=automation/attente-images`,
  );
  const pending = JSON.parse(Buffer.from(pendingResponse.content, "base64").toString("utf8"));
  if (pending.articles?.length && (!latest || ageHours(latest.created_at) > 6)) {
    anomalies.push(
      `${pending.articles.length} article(s) en attente, aucune demande Images récente depuis plus de 6 h.`,
    );
  }
} else {
  throw new Error(`Phase Images inconnue: ${state.phase}`);
}

const openIssues = api(`repos/${BRIDGE}/issues?state=open&per_page=100`);
const existing = openIssues.find((issue) => issue.title === TITLE && !issue.pull_request);

if (anomalies.length) {
  const details = [
    MARKER,
    "Blocage Images détecté par la surveillance automatique.",
    "",
    ...anomalies.map((reason) => `- ${reason}`),
    "",
    `État: phase ${state.phase}, branche active ${state.activeBranch || "aucune"}.`,
    "Vérifier la file GitHub Actions et le passage HERO/BODY avant toute relance.",
    "Cette issue sera fermée automatiquement dès que les symptômes contrôlés disparaîtront.",
  ].join("\n");
  if (!existing) {
    const issue = api(`repos/${BRIDGE}/issues`,
      "--method", "POST",
      "-f", `title=${TITLE}`,
      "-f", `body=${details}`,
      "-f", "assignees[]=DevWeb13",
    );
    console.error(`Alerte créée: ${issue.html_url}\n${anomalies.join("\n")}`);
    process.exitCode = 1; // Provoque aussi la notification GitHub Actions à la première détection.
  } else {
    console.log(`Blocage toujours présent, alerte existante: ${existing.html_url}`);
    console.log(anomalies.join("\n"));
  }
} else if (existing) {
  api(`repos/${BRIDGE}/issues/${existing.number}`, "--method", "PATCH", "-f", "state=closed");
  console.log(`Images débloquées. Alerte #${existing.number} fermée.`);
} else {
  console.log(`Images OK: phase ${state.phase}, aucune anomalie.`);
}
