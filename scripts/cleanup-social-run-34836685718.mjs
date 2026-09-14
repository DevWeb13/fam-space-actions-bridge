#!/usr/bin/env node

import { promises as fs } from "node:fs";

const GRAPH_VERSION = "v26.0";
const stateFile = process.argv[2] ?? "social-state.json";

const tokens = {
  facebook: process.env.FACEBOOK_PAGE_ACCESS_TOKEN ?? "",
  threads: process.env.THREADS_ACCESS_TOKEN ?? "",
};

// Only the image-less Facebook link posts and Threads text posts created by
// workflow run 34836685718. The image posts from the same run are deliberately
// excluded from this list.
const TARGETS = [
  {
    slug: "randonnee-famille-ete-parcours-enfants",
    facebook: "1314472035081859_122099533809477492",
    threads: "18094051928554221",
  },
  {
    slug: "choisir-baignade-famille-qualite-eau",
    facebook: "1314472035081859_122099533965477492",
    threads: "17987768076057392",
  },
  {
    slug: "nuits-des-etoiles-2026-en-famille",
    facebook: "1314472035081859_122099534121477492",
    threads: "17874972777632327",
  },
  {
    slug: "observer-biodiversite-famille-sciences-participatives",
    facebook: "1314472035081859_122099534571477492",
    threads: "18047673308607963",
  },
  {
    slug: "eclipse-solaire-12-aout-2026-en-famille",
    facebook: "1314472035081859_122099534805477492",
    threads: "18052445561802158",
  },
  {
    slug: "preparer-balade-velo-famille-enfants",
    facebook: "1314472035081859_122099534877477492",
    threads: "17941278252090282",
  },
  {
    slug: "tour-de-france-femmes-2026-en-famille",
    facebook: "1314472035081859_122099535471477492",
    threads: "18088938281213943",
  },
  {
    slug: "depart-vacances-17-19-juillet-2026-en-famille",
    facebook: "1314472035081859_122099535651477492",
    threads: "18182204884425521",
  },
  {
    slug: "calendrier-scolaire-2026-2027-en-famille",
    facebook: "1314472035081859_122099535831477492",
    threads: "17930083557407477",
  },
  {
    slug: "garder-logement-frais-forte-chaleur",
    facebook: "1314472035081859_122099535909477492",
    threads: "18002718287795012",
  },
  {
    slug: "voyage-a-nantes-2026-en-famille",
    facebook: "1314472035081859_122099536047477492",
    threads: "17924008122421802",
  },
  {
    slug: "partir-en-livre-2026-en-famille",
    facebook: "1314472035081859_122099536131477492",
    threads: "18009439943993139",
  },
  {
    slug: "paris-plages-2026-en-famille",
    facebook: "1314472035081859_122099536467477492",
    threads: "18022136438861095",
  },
  {
    slug: "jardins-ouverts-2026-ile-de-france-en-famille",
    facebook: "1314472035081859_122099536923477492",
    threads: "17891510133674844",
  },
  {
    slug: "ete-marseillais-2026-en-famille",
    facebook: "1314472035081859_122099537001477492",
    threads: "18102059755994529",
  },
  {
    slug: "festival-interceltique-lorient-2026-en-famille",
    facebook: "1314472035081859_122099537811477492",
    threads: "18113765332991187",
  },
];

const parseResponse = async (response) => {
  const text = await response.text();
  let data = {};
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { raw: text };
  }
  if (!response.ok || data.error) {
    const message = data?.error?.message ?? data?.message ?? text ?? response.statusText;
    const code = data?.error?.code ? ` code=${data.error.code}` : "";
    throw new Error(`${response.status}${code} ${message}`);
  }
  return data;
};

const deleteFacebook = async (postId) => {
  const url = new URL(`https://graph.facebook.com/${GRAPH_VERSION}/${postId}`);
  url.searchParams.set("access_token", tokens.facebook);
  const data = await parseResponse(await fetch(url, { method: "DELETE" }));
  if (data.success !== true) throw new Error(`réponse inattendue: ${JSON.stringify(data)}`);
};

const deleteThreads = async (postId) => {
  const url = new URL(`https://graph.threads.net/v1.0/${postId}`);
  url.searchParams.set("access_token", tokens.threads);
  const data = await parseResponse(await fetch(url, { method: "DELETE" }));
  if (data.success !== true) throw new Error(`réponse inattendue: ${JSON.stringify(data)}`);
};

const state = JSON.parse(await fs.readFile(stateFile, "utf8"));
state.articles ??= {};

const result = {
  facebook: { deleted: 0, failed: 0 },
  threads: { deleted: 0, failed: 0 },
};

for (const target of TARGETS) {
  const entry = state.articles[target.slug] ?? {};
  console.log(`Article: ${target.slug}`);

  if (!tokens.facebook) {
    result.facebook.failed += 1;
    console.error("  facebook: secret absent");
  } else {
    try {
      await deleteFacebook(target.facebook);
      result.facebook.deleted += 1;
      if (entry.facebook?.id === target.facebook) delete entry.facebook;
      console.log(`  facebook: supprimé (${target.facebook})`);
    } catch (error) {
      result.facebook.failed += 1;
      console.error(`  facebook: ÉCHEC (${target.facebook}) ${error.message}`);
    }
  }

  if (!tokens.threads) {
    result.threads.failed += 1;
    console.error("  threads: secret absent");
  } else {
    try {
      await deleteThreads(target.threads);
      result.threads.deleted += 1;
      if (entry.threads?.id === target.threads) delete entry.threads;
      console.log(`  threads: supprimé (${target.threads})`);
    } catch (error) {
      result.threads.failed += 1;
      console.error(`  threads: ÉCHEC (${target.threads}) ${error.message}`);
    }
  }

  if (Object.keys(entry).length === 0) {
    delete state.articles[target.slug];
  } else {
    state.articles[target.slug] = entry;
  }
}

await fs.writeFile(stateFile, `${JSON.stringify(state, null, 2)}\n`, "utf8");

console.log(
  `Résumé nettoyage: Facebook ${result.facebook.deleted}/${TARGETS.length} supprimés, Threads ${result.threads.deleted}/${TARGETS.length} supprimés.`,
);

if (result.facebook.failed > 0 || result.threads.failed > 0) {
  console.error(
    `Échecs: Facebook=${result.facebook.failed}, Threads=${result.threads.failed}. Les publications avec vraie image n'ont pas été ciblées.`,
  );
  process.exitCode = 1;
}
