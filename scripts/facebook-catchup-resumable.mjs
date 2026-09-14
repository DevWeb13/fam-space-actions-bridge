#!/usr/bin/env node

const nativeFetch = globalThis.fetch;

const isMetaPublishingLimit = (status, message) => {
  const normalized = String(message ?? "").toLowerCase();
  return (
    status === 429 ||
    normalized.includes("limitons le nombre de fois") ||
    normalized.includes("protéger la communauté contre le spam") ||
    normalized.includes("proteger la communaute contre le spam") ||
    normalized.includes("réessayer plus tard") ||
    normalized.includes("reessayer plus tard") ||
    normalized.includes("rate limit") ||
    normalized.includes("too many requests")
  );
};

globalThis.fetch = async (...args) => {
  const response = await nativeFetch(...args);
  const rawUrl =
    typeof args[0] === "string"
      ? args[0]
      : args[0] instanceof URL
        ? args[0].href
        : args[0]?.url || "";

  if (!rawUrl.includes("graph.facebook.com") || !rawUrl.includes("/photos") || response.ok) {
    return response;
  }

  let message = "";
  try {
    const data = await response.clone().json();
    message = data?.error?.message ?? data?.message ?? "";
  } catch {
    try {
      message = await response.clone().text();
    } catch {
      message = "";
    }
  }

  if (isMetaPublishingLimit(response.status, message)) {
    console.warn(
      "META LIMIT: Facebook limite temporairement les publications en masse. " +
        "Rattrapage interrompu proprement; les publications déjà réussies restent enregistrées. " +
        "Relancer plus tard avec catch_up_all=true pour reprendre uniquement les restantes.",
    );
    process.exit(0);
  }

  return response;
};

await import("./facebook-catchup-once.mjs");
