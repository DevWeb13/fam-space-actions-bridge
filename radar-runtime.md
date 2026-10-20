# Radar Fam Space - actualisation GSC

## Mission

Radar utilise Google Search Console et la recherche web pour choisir le travail éditorial qui apporte le plus de valeur à Fam Space: améliorer une page réellement perfectible, développer une intention proche d'une page forte, ou publier à temps une opportunité locale/saisonnière. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

## Snapshot GSC quotidien

Le cache compact est `radar-gsc-snapshot.json` sur `main` de `DevWeb13/fam-space-actions-bridge`. Il ne contient jamais les lignes GSC brutes.

Cette tâche est séparée de la sélection éditoriale. **S'il n'existe aucune branche Radar active et que le snapshot doit être renouvelé, actualise uniquement le snapshot puis termine le passage. Ne choisis pas de mission dans la même exécution.** Le passage horaire suivant effectuera la phase 1 avec le snapshot prêt.

Le snapshot est réutilisable lorsqu'il a `schemaVersion: 1`, a été généré le jour courant en Europe/Paris et que `dataThrough` n'a pas plus de sept jours de retard.

Lorsqu'un nouveau snapshot est nécessaire, utilise Windsor.ai avec le compte `sc-domain:fam-space.fr`, connector `searchconsole`, `include_fresh_data: false`. **Chaque appel `get_data` Search Analytics doit filtrer explicitement `search_type = web` avec `filters: [["search_type","eq","web"]]`.** Récupère 28 jours jusqu'à la dernière journée consolidée:

- une lecture `date, clicks, impressions` pour déterminer la fin réelle;
- quatre lectures consécutives de sept jours `date, page, clicks, impressions, position`;
- pour les meilleurs refresh examinables, les requêtes de l'URL exacte sur `peakStart..peakEnd` et `recentStart..recentEnd`.

Utilise la logique de le module Radar embarqué plus bas: `unwrapRows`, `buildRadarShortlist`, `diagnoseQueries` et `probableDuplicates`. Une réponse Windsor est considérée complète lorsque `status: done`, que `data` est un tableau et que `total_rows` correspond à `data.length`, sans indicateur explicite de troncature. **Un nombre rond de lignes, notamment 1 500, n'est jamais à lui seul une preuve de plafonnement et ne doit pas arrêter Radar.** Découpe seulement la période si Windsor signale réellement une réponse incomplète/tronquée, si `total_rows` ne correspond pas au nombre de lignes reçues, ou si `unwrapRows` refuse la réponse, notamment à son seuil conservateur de 5 000 lignes par réponse. Un 429, un refus d'accès ou un plafond réellement non résolu termine le passage. Maximum 50 appels `get_data`. Les réponses brutes restent temporaires.

Le snapshot conserve seulement `generatedAt`, `dataThrough`, `from`, la shortlist `refresh` avec ses diagnostics compacts, `strongPages`, `excluded` et les avertissements utiles.

## Snapshot actuellement disponible

{
  "schemaVersion": 1,
  "generatedAt": "2026-10-19T04:30:00.000Z",
  "dataThrough": "2026-10-16",
  "from": "2026-09-19",
  "refresh": [
    {
      "url": "/articles/vie-pratique/carte-okay-savoie-2026-2027-comment-obtenir-et-utiliser-les-80-du-collegien/",
      "title": "Carte OKAY Savoie 2026-2027: comment obtenir et utiliser les 80 € du collégien",
      "category": "vie-pratique",
      "publishedAt": "2026-09-02T02:00:51+02:00",
      "ageDays": 47,
      "peakStart": "2026-09-19",
      "peakEnd": "2026-09-25",
      "recentStart": "2026-10-10",
      "recentEnd": "2026-10-16",
      "peakImpressions": 288,
      "recentImpressions": 97,
      "score": 191,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0.017,
      "basis": "Baisse non attribuable avec certitude au classement.",
      "location": {
        "city": "Chambéry",
        "department": "Savoie",
        "region": "Auvergne-Rhône-Alpes"
      },
      "focusQueries": [
        "carte okay savoie 2026",
        "okay savoie",
        "carte okay savoie",
        "okay savoie 2026",
        "carte okay savoie renouvellement"
      ]
    },
    {
      "url": "/articles/evenements/arbora-lumina-a-harcourt-ce-qu-il-faut-prevoir-avec-des-enfants/",
      "title": "Arbora Lumina 2026-2027 à Harcourt en famille: billets, tarifs et parcours",
      "category": "evenements",
      "publishedAt": "2026-09-15T19:00:19+02:00",
      "ageDays": 34,
      "peakStart": "2026-09-19",
      "peakEnd": "2026-09-25",
      "recentStart": "2026-10-10",
      "recentEnd": "2026-10-16",
      "peakImpressions": 142,
      "recentImpressions": 19,
      "score": 123,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0.024,
      "basis": "Baisse non attribuable avec certitude au classement.",
      "location": {
        "city": "Harcourt",
        "department": "Eure",
        "region": "Normandie"
      },
      "focusQueries": [
        "arbora lumina",
        "arbora lumina horaire",
        "arbora lumina harcourt tarif",
        "arbora lumina harcourt"
      ]
    },
    {
      "url": "/articles/bons-plans/carte-avantage-adulte-sncf-quand-est-elle-interessante-avec-des-enfants/",
      "title": "Carte Avantage Adulte SNCF: quand est-elle intéressante avec des enfants?",
      "category": "bons-plans",
      "publishedAt": "2026-08-29T16:41:39+02:00",
      "ageDays": 51,
      "peakStart": "2026-09-28",
      "peakEnd": "2026-10-04",
      "recentStart": "2026-10-10",
      "recentEnd": "2026-10-16",
      "peakImpressions": 238,
      "recentImpressions": 127,
      "score": 111,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Diagnostic par requêtes non encore disponible."
    },
    {
      "url": "/articles/sorties/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/",
      "title": "Planète Préhistorique à Bordeaux avec des enfants: âge, durée et tarifs",
      "category": "sorties",
      "publishedAt": "2026-09-27T14:41:35+02:00",
      "ageDays": 22,
      "peakStart": "2026-10-01",
      "peakEnd": "2026-10-07",
      "recentStart": "2026-10-10",
      "recentEnd": "2026-10-16",
      "peakImpressions": 149,
      "recentImpressions": 3,
      "score": 107.067,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Diagnostic par requêtes non encore disponible.",
      "location": {
        "city": "Bordeaux",
        "department": "Gironde",
        "region": "Nouvelle-Aquitaine"
      }
    },
    {
      "url": "/articles/bons-plans/carte-tattoo-isere-2026-2027-comment-obtenir-60-a-120-pour-les-activites-d-un-collegien/",
      "title": "Carte Tattoo Isère 2026-2027: comment obtenir 60 à 120 € pour les activités d'un collégien",
      "category": "bons-plans",
      "publishedAt": "2026-09-12T18:04:35+02:00",
      "ageDays": 37,
      "peakStart": "2026-09-19",
      "peakEnd": "2026-09-25",
      "recentStart": "2026-10-10",
      "recentEnd": "2026-10-16",
      "peakImpressions": 112,
      "recentImpressions": 11,
      "score": 101,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Diagnostic par requêtes non encore disponible.",
      "location": {
        "city": "Grenoble",
        "department": "Isère",
        "region": "Auvergne-Rhône-Alpes"
      }
    },
    {
      "url": "/articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/",
      "title": "LAEP à Nantes: où aller avec un enfant de moins de 6 ans?",
      "category": "parentalite",
      "publishedAt": "2026-09-30T11:04:48+02:00",
      "ageDays": 19,
      "peakStart": "2026-10-02",
      "peakEnd": "2026-10-08",
      "recentStart": "2026-10-10",
      "recentEnd": "2026-10-16",
      "peakImpressions": 144,
      "recentImpressions": 1,
      "score": 90.567,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Diagnostic par requêtes non encore disponible.",
      "location": {
        "city": "Nantes",
        "department": "Loire-Atlantique",
        "region": "Pays de la Loire"
      }
    },
    {
      "url": "/articles/evenements/halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir/",
      "title": "Halloween 2026 au Château de Villersexel: parc gratuit, visites et âge minimum",
      "category": "evenements",
      "publishedAt": "2026-09-27T20:24:24+02:00",
      "ageDays": 22,
      "peakStart": "2026-09-30",
      "peakEnd": "2026-10-06",
      "recentStart": "2026-10-10",
      "recentEnd": "2026-10-16",
      "peakImpressions": 326,
      "recentImpressions": 205,
      "score": 88.733,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Diagnostic par requêtes non encore disponible.",
      "location": {
        "city": "Villersexel",
        "department": "Haute-Saône",
        "region": "Bourgogne-Franche-Comté"
      }
    },
    {
      "url": "/articles/parentalite/petite-section-peut-on-alleger-les-apres-midis-a-l-ecole-maternelle/",
      "title": "Petite section: peut-on alléger les après-midis à l'école maternelle?",
      "category": "parentalite",
      "publishedAt": "2026-08-28T12:03:36+02:00",
      "ageDays": 52,
      "peakStart": "2026-09-19",
      "peakEnd": "2026-09-25",
      "recentStart": "2026-10-10",
      "recentEnd": "2026-10-16",
      "peakImpressions": 187,
      "recentImpressions": 102,
      "score": 85,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Diagnostic par requêtes non encore disponible."
    },
    {
      "url": "/articles/evenements/semaine-du-gout-2026-comment-trouver-une-activite-adaptee-aux-enfants/",
      "title": "semaine du gout 2026 comment trouver une activite adaptee aux enfants",
      "category": "evenements",
      "publishedAt": "2026-09-01T00:00:00Z",
      "ageDays": 48,
      "peakStart": "2026-09-19",
      "peakEnd": "2026-09-25",
      "recentStart": "2026-10-10",
      "recentEnd": "2026-10-16",
      "peakImpressions": 76,
      "recentImpressions": 1,
      "score": 75,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Diagnostic par requêtes non encore disponible."
    },
    {
      "url": "/articles/vie-pratique/cantine-au-college-en-essonne-obtenir-son-tarif-2026-2027-sans-refaire-la-mauvaise-demarche/",
      "title": "Cantine au collège en Essonne: obtenir son tarif 2026-2027 sans refaire la mauvaise démarche",
      "category": "vie-pratique",
      "publishedAt": "2026-09-13T16:03:15+02:00",
      "ageDays": 36,
      "peakStart": "2026-09-19",
      "peakEnd": "2026-09-25",
      "recentStart": "2026-10-10",
      "recentEnd": "2026-10-16",
      "peakImpressions": 102,
      "recentImpressions": 27,
      "score": 75,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Diagnostic par requêtes non encore disponible.",
      "location": {
        "city": "Évry-Courcouronnes",
        "department": "Essonne",
        "region": "Île-de-France"
      }
    },
    {
      "url": "/articles/vie-pratique/transports-scolaires-dans-le-val-d-oise-imagine-r-csb-ou-scol-r-en-2026-2027/",
      "title": "Transports scolaires dans le Val-d’Oise: Imagine R, CSB ou Scol’R en 2026-2027 ?",
      "category": "vie-pratique",
      "publishedAt": "2026-09-20T07:58:52+02:00",
      "ageDays": 29,
      "peakStart": "2026-09-23",
      "peakEnd": "2026-09-29",
      "recentStart": "2026-10-10",
      "recentEnd": "2026-10-16",
      "peakImpressions": 82,
      "recentImpressions": 8,
      "score": 71.533,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Diagnostic par requêtes non encore disponible."
    },
    {
      "url": "/articles/vie-pratique/parking-relais-a-strasbourg-en-famille-comment-choisir-son-p-r-et-son-forfait/",
      "title": "parking relais a strasbourg en famille comment choisir son p r et son forfait",
      "category": "vie-pratique",
      "publishedAt": "2026-10-01T00:00:00Z",
      "ageDays": 18,
      "peakStart": "2026-10-03",
      "peakEnd": "2026-10-09",
      "recentStart": "2026-10-10",
      "recentEnd": "2026-10-16",
      "peakImpressions": 137,
      "recentImpressions": 18,
      "score": 71.4,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Diagnostic par requêtes non encore disponible."
    },
    {
      "url": "/articles/sorties/musee-de-prehistoire-de-solutre-avec-des-enfants-musee-parc-et-roche/",
      "title": "Musée de préhistoire de Solutré avec des enfants: musée, parc et Roche",
      "category": "sorties",
      "publishedAt": "2026-09-16T05:58:46+02:00",
      "ageDays": 33,
      "peakStart": "2026-09-20",
      "peakEnd": "2026-09-26",
      "recentStart": "2026-10-10",
      "recentEnd": "2026-10-16",
      "peakImpressions": 64,
      "recentImpressions": 1,
      "score": 63,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Diagnostic par requêtes non encore disponible."
    },
    {
      "url": "/articles/cuisine/cueillir-pommes-et-poires-a-mezieres-lez-clery-ce-qu-il-faut-verifier-avant-de-partir/",
      "title": "Cueillir pommes et poires à Mézières-lez-Cléry: ce qu'il faut vérifier avant de partir",
      "category": "cuisine",
      "publishedAt": "2026-09-04T16:04:39+02:00",
      "ageDays": 45,
      "peakStart": "2026-09-19",
      "peakEnd": "2026-09-25",
      "recentStart": "2026-10-10",
      "recentEnd": "2026-10-16",
      "peakImpressions": 68,
      "recentImpressions": 8,
      "score": 60,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Diagnostic par requêtes non encore disponible.",
      "location": {
        "city": "Mézières-lez-Cléry",
        "department": "Loiret",
        "region": "Centre-Val de Loire"
      }
    },
    {
      "url": "/articles/parentalite/elections-des-parents-d-eleves-2026-dates-vote-et-role-des-representants/",
      "title": "Élections des parents d'élèves 2026: dates, vote et rôle des représentants",
      "category": "parentalite",
      "publishedAt": "2026-08-07T10:26:16+02:00",
      "ageDays": 73,
      "peakStart": "2026-09-22",
      "peakEnd": "2026-09-28",
      "recentStart": "2026-10-10",
      "recentEnd": "2026-10-16",
      "peakImpressions": 64,
      "recentImpressions": 5,
      "score": 59,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Diagnostic par requêtes non encore disponible."
    }
  ],
  "strongPages": [
    {
      "url": "/articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/",
      "title": "monument jeu d enfant 2026 au chateau d angers quelle animation dragon choisir",
      "category": "evenements",
      "recentImpressions": 54,
      "recentClicks": 6,
      "recentPosition": 5.259,
      "retention": 1
    },
    {
      "url": "/articles/evenements/festival-circa-2026-a-auch-avec-des-enfants-quoi-reserver-et-quel-budget-prevoir/",
      "title": "festival circa 2026 a auch avec des enfants quoi reserver et quel budget prevoir",
      "category": "evenements",
      "recentImpressions": 45,
      "recentClicks": 6,
      "recentPosition": 6.489,
      "retention": 1.324
    },
    {
      "url": "/articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/",
      "title": "mondial de l auto 2026 a paris avec des enfants quel jour billet et creneau choisir",
      "category": "evenements",
      "recentImpressions": 364,
      "recentClicks": 5,
      "recentPosition": 7.882,
      "retention": 1.793
    },
    {
      "url": "/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/",
      "title": "transports a paris avec des enfants quel titre choisir pour payer juste",
      "category": "voyages",
      "recentImpressions": 1292,
      "recentClicks": 4,
      "recentPosition": 8.674,
      "retention": 1.397
    },
    {
      "url": "/articles/sorties/parc-en-folie-2026-a-rennes-billet-en-ligne-ou-sur-place-quelle-formule-choisir-en-famille/",
      "title": "parc en folie 2026 a rennes billet en ligne ou sur place quelle formule choisir en famille",
      "category": "sorties",
      "recentImpressions": 358,
      "recentClicks": 4,
      "recentPosition": 6.676,
      "retention": 10.229
    },
    {
      "url": "/articles/evenements/foire-de-la-barguillere-a-foix-samedi-ou-dimanche-avec-des-enfants/",
      "title": "foire de la barguillere a foix samedi ou dimanche avec des enfants",
      "category": "evenements",
      "recentImpressions": 246,
      "recentClicks": 4,
      "recentPosition": 9.573,
      "retention": 1.139
    },
    {
      "url": "/articles/evenements/halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir/",
      "title": "Halloween 2026 au Château de Villersexel: parc gratuit, visites et âge minimum",
      "category": "evenements",
      "recentImpressions": 205,
      "recentClicks": 4,
      "recentPosition": 7.932,
      "retention": 0.629,
      "location": {
        "city": "Villersexel",
        "department": "Haute-Saône",
        "region": "Bourgogne-Franche-Comté"
      }
    },
    {
      "url": "/articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/",
      "title": "festival lumiere 2026 a lyon quelles seances choisir avec des enfants",
      "category": "evenements",
      "recentImpressions": 46,
      "recentClicks": 4,
      "recentPosition": 6.087,
      "retention": 1
    },
    {
      "url": "/articles/voyages/futuroween-2026-futuroscope-billet-programme-enfants/",
      "title": "futuroween 2026 futuroscope billet programme enfants",
      "category": "voyages",
      "recentImpressions": 641,
      "recentClicks": 3,
      "recentPosition": 8.98,
      "retention": 1.674
    },
    {
      "url": "/articles/evenements/quai-des-bulles-2026-a-saint-malo-en-famille-tarifs-programme-et-conseils/",
      "title": "quai des bulles 2026 a saint malo en famille tarifs programme et conseils",
      "category": "evenements",
      "recentImpressions": 168,
      "recentClicks": 3,
      "recentPosition": 6.315,
      "retention": 0.771
    }
  ],
  "excluded": {
    "expired": 0,
    "cooling": 0
  },
  "warnings": [
    "Recherche web uniquement, 4 périodes complètes de sept jours (6789 lignes), sans troncature.",
    "Catalogue GitHub de 708 articles; métadonnées exactes contrôlées pour 6 candidats et reprises depuis le snapshot précédent pour 15 autres; dates des autres estimées par le mois du chemin.",
    "Historique des refresh non entièrement relu; cooling=0 est un minimum connu et les exclusions sont incomplètes.",
    "2 diagnostics de requêtes détaillés; les autres signaux sont incertains.",
    "Les requêtes masquées et la saisonnalité limitent les diagnostics."
  ]
}

## Module Radar embarqué

Le code ci-dessous est fourni directement pour les calculs Radar nécessaires à ce passage. Ne va pas le relire dans un autre fichier.

```javascript
// Pure JavaScript: usable in Node or a connector orchestration runtime.
const DAY = 86400000;
const dayNumber = (date) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date ?? ""))
    throw new Error("Date GSC invalide.");
  const value = Date.parse(`${date}T00:00:00Z`);
  if (
    !Number.isFinite(value) ||
    new Date(value).toISOString().slice(0, 10) !== date
  )
    throw new Error("Date GSC invalide.");
  return value / DAY;
};
const isoDay = (value) => new Date(value * DAY).toISOString().slice(0, 10);
const round = (value) => Math.round(value * 1000) / 1000;
export function unwrapRows(response) {
  const value = response?.structuredContent ?? response;
  if (response?.isError || (value.status && value.status !== "done"))
    throw new Error("GSC indisponible ou traitement incomplet.");
  const rows = Array.isArray(value) ? value : value.data;
  if (
    !Array.isArray(rows) ||
    value.truncated === true ||
    value.has_more === true ||
    (value.total_rows !== undefined && value.total_rows !== rows.length)
  )
    throw new Error("Réponse GSC absente ou tronquée.");
  // Conservative per-response threshold, not a claimed Windsor plan limit.
  // Concatenated arrays are allowed after each response has been checked.
  if (!Array.isArray(value) && rows.length >= 5000)
    throw new Error(
      "Réponse GSC potentiellement plafonnée; découper la période.",
    );
  if (rows.some((row) => row.search_type && row.search_type !== "web"))
    throw new Error(
      "Le périmètre Radar doit contenir seulement la recherche web.",
    );
  return rows;
}
export function canonicalPage(value) {
  // Some connector runtimes do not expose the URL global.
  if (typeof value !== "string") return undefined;
  const path = value.replace(/^https?:\/\/(?:www\.)?fam-space\.fr(?=\/)/i, "");
  if (!/^\/articles\/[^/?#]+\/[^/?#]+\/$/.test(path)) return undefined;
  if (path.split("/").some((part) => part === "." || part === ".."))
    return undefined;
  return path;
}
const metric = (row, name) => {
  const value = Number(row[name]);
  if (
    row[name] === null ||
    row[name] === undefined ||
    !Number.isFinite(value) ||
    value < 0
  )
    throw new Error(`Métrique GSC invalide: ${name}.`);
  return value;
};
function addMetric(target, row) {
  const impressions = metric(row, "impressions");
  target.impressions += impressions;
  target.clicks += metric(row, "clicks");
  target.positionSum += impressions ? metric(row, "position") * impressions : 0;
}
const empty = () => ({ impressions: 0, clicks: 0, positionSum: 0 });
const view = (sum) => ({
  impressions: round(sum.impressions),
  clicks: round(sum.clicks),
  impressionsPerDay: round(sum.impressions / 7),
  position: sum.impressions ? round(sum.positionSum / sum.impressions) : null,
});
function windowSum(days, start, end) {
  const result = empty();
  for (let date = start; date <= end; date++) {
    const row = days.get(date);
    if (row) for (const key of Object.keys(result)) result[key] += row[key];
  }
  return result;
}
export function buildRadarShortlist(
  response,
  catalog,
  {
    now = new Date().toISOString(),
    siteRows,
    from,
    limit = 15,
    history = [],
  } = {},
) {
  const rows = unwrapRows(response);
  const site = siteRows ? unwrapRows(siteRows) : rows;
  if (!site.length)
    throw new Error("GSC ne retourne aucune journée consolidée.");
  const siteDays = site.map((row) => dayNumber(row.date));
  const end = siteDays.reduce((max, date) => Math.max(max, date), -Infinity);
  const observedStart = siteDays.reduce(
    (min, date) => Math.min(min, date),
    Infinity,
  );
  const today = dayNumber(now.slice(0, 10));
  if (end > today || today - end > 7)
    throw new Error(
      "Données GSC trop anciennes ou datées dans le futur; aucun export historique de secours.",
    );
  // Never create comparison weeks before the first observed site day.
  const start = from ? Math.max(dayNumber(from), observedStart) : observedStart;
  if (!Number.isFinite(start) || end - start < 13)
    throw new Error("Au moins 14 jours GSC sont nécessaires.");
  const byPage = new Map();
  for (const row of rows) {
    const page = canonicalPage(row.page),
      date = dayNumber(row.date);
    if (!page || date < start || date > end) continue;
    if (!byPage.has(page)) byPage.set(page, new Map());
    const days = byPage.get(page);
    if (!days.has(date)) days.set(date, empty());
    addMetric(days.get(date), row);
  }
  const entries = [];
  for (const article of catalog) {
    const page = canonicalPage(article.url);
    if (
      !page ||
      article.status === "draft" ||
      Date.parse(article.publishedAt) > Date.parse(now)
    )
      continue;
    const days = byPage.get(page) ?? new Map();
    const publishedDay = dayNumber(article.publishedAt.slice(0, 10));
    const firstDay = Math.max(start, publishedDay);
    if (end - firstDay < 13) continue;
    const recent = windowSum(days, end - 6, end);
    let peak = empty(),
      peakStart = firstDay;
    // The reference week ends before the recent week: no overlapping comparison.
    for (let first = firstDay; first + 6 < end - 6; first++) {
      const sum = windowSum(days, first, first + 6);
      if (sum.impressions > peak.impressions) {
        peak = sum;
        peakStart = first;
      }
    }
    const total = windowSum(days, firstDay, end);
    const expired = Boolean(
      article.eventEndsAt && article.eventEndsAt < now.slice(0, 10),
    );
    const reviewDue = Boolean(
      article.reviewAt && article.reviewAt <= now.slice(0, 10),
    );
    const lastRefresh = history
      .filter((item) => item.url === page && item.mode === "refresh")
      .map((item) => item.publishedAt)
      .sort()
      .at(-1);
    const cooling = Boolean(
      lastRefresh && Date.parse(now) - Date.parse(lastRefresh) < 14 * DAY,
    );
    const ageDays = today - publishedDay;
    const retention = peak.impressions
      ? recent.impressions / peak.impressions
      : 1;
    const maturity = reviewDue ? 1 : Math.min(1, Math.max(0, ageDays) / 30);
    const evidence =
      Math.min(1, peak.impressions / 35) * Math.min(1, total.impressions / 50);
    const score =
      expired || cooling
        ? 0
        : Math.max(0, peak.impressions - recent.impressions) *
            evidence *
            maturity +
          (reviewDue ? 35 : 0);
    entries.push({
      url: page,
      title: article.title,
      category: article.category,
      location: article.location,
      keywords: article.keywords ?? article.topic?.keywords ?? [],
      publishedAt: article.publishedAt,
      eventEndsAt: article.eventEndsAt,
      reviewAt: article.reviewAt,
      expired,
      cooling,
      reviewDue,
      ageDays,
      peakStart: isoDay(peakStart),
      peakEnd: isoDay(peakStart + 6),
      recentStart: isoDay(end - 6),
      recentEnd: isoDay(end),
      peak: view(peak),
      recent: view(recent),
      retention: round(retention),
      score: round(score),
      signal: "needs_query_check",
    });
  }
  return {
    schemaVersion: 1,
    retrievedAt: now,
    dataThrough: isoDay(end),
    from: isoDay(start),
    caveat:
      "Les lignes absentes valent zéro dans les données retournées. GSC peut masquer des requêtes; les signaux ne prouvent ni désindexation ni causalité.",
    refresh: entries
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.url.localeCompare(b.url))
      .slice(0, limit),
    strongPages: entries
      .filter(
        (item) =>
          !item.expired &&
          item.recent.impressions >= 35 &&
          item.retention >= 0.5,
      )
      .sort(
        (a, b) =>
          b.recent.clicks - a.recent.clicks ||
          b.recent.impressions - a.recent.impressions ||
          a.url.localeCompare(b.url),
      )
      .slice(0, 10),
    excluded: {
      expired: entries.filter((item) => item.expired).length,
      cooling: entries.filter((item) => item.cooling).length,
    },
  };
}
export function diagnoseQueries(peakResponse, recentResponse) {
  const aggregate = (response) => {
    const result = new Map();
    for (const row of unwrapRows(response)) {
      if (typeof row.query !== "string")
        throw new Error("Requête GSC manquante.");
      if (!result.has(row.query)) result.set(row.query, empty());
      addMetric(result.get(row.query), row);
    }
    return result;
  };
  const peak = aggregate(peakResponse),
    recent = aggregate(recentResponse);
  const common = [...peak.keys()].filter(
    (query) =>
      peak.get(query).impressions >= 10 &&
      (recent.get(query)?.impressions ?? 0) >= 3,
  );
  let weight = 0,
    change = 0;
  for (const query of common) {
    const first = peak.get(query),
      last = recent.get(query);
    const w = Math.min(first.impressions, last.impressions);
    weight += w;
    change +=
      w *
      (last.positionSum / last.impressions -
        first.positionSum / first.impressions);
  }
  const delta = weight ? change / weight : null;
  const total = (values) =>
    [...values.values()].reduce((sum, item) => sum + item.impressions, 0);
  const ratio = total(peak) ? total(recent) / total(peak) : null;
  return {
    signal:
      delta !== null && delta >= 3
        ? "rank_loss"
        : delta !== null &&
            Math.abs(delta) <= 2 &&
            ratio !== null &&
            ratio <= 0.25
          ? "coverage_loss"
          : "uncertain",
    commonQueries: common.length,
    positionDelta: delta === null ? null : round(delta),
    impressionRatio: ratio === null ? null : round(ratio),
    queries: [...new Set([...peak.keys(), ...recent.keys()])]
      .map((query) => ({
        query,
        peak: view(peak.get(query) ?? empty()),
        recent: view(recent.get(query) ?? empty()),
      }))
      .sort((a, b) => b.peak.impressions - a.peak.impressions)
      .slice(0, 20),
    caveat:
      "coverage_loss désigne une baisse d'exposition observée, pas une preuve de désindexation. Les requêtes masquées et la saisonnalité limitent le diagnostic.",
  };
}
const STOP = new Set(
  "avec pour dans sans famille familles enfant enfants tarif tarifs duree conseil conseils visite visiter billet billets activite activites sortie sorties evenement evenements preparation pratique pratiques autour leur leurs aussi quoi comment quel quelle quelles quels quand faire partir 2026 2027".split(
    " ",
  ),
);
const words = (value) =>
  new Set(
    String(value)
      .replace(/œ/g, "oe")
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((word) => word.length >= 3 && !STOP.has(word)),
  );
export function probableDuplicates(subject, catalog, limit = 5) {
  const terms = words(
    [
      subject.title,
      ...(subject.keywords ?? subject.topic?.keywords ?? []),
    ].join(" "),
  );
  return catalog
    .filter(
      (article) => canonicalPage(article.url) !== canonicalPage(subject.url),
    )
    .map((article) => {
      const candidate = words(
        [
          article.title,
          ...(article.keywords ?? article.topic?.keywords ?? []),
        ].join(" "),
      );
      const shared = [...terms].filter((word) => candidate.has(word));
      const sameCity = Boolean(
        subject.location?.city &&
          subject.location.city === article.location?.city,
      );
      const sameDepartment = Boolean(
        subject.location?.department &&
          subject.location.department === article.location?.department,
      );
      return {
        url: article.url,
        title: article.title,
        location: article.location,
        sharedTerms: shared,
        score:
          shared.length / Math.max(1, new Set([...terms, ...candidate]).size) +
          (sameCity ? 0.2 : sameDepartment ? 0.1 : 0),
      };
    })
    .filter(
      (item) =>
        item.sharedTerms.length >= 2 ||
        (item.sharedTerms.length === 1 && item.sharedTerms[0].length >= 6),
    )
    .sort((a, b) => b.score - a.score || a.url.localeCompare(b.url))
    .slice(0, limit);
}
```

## Résultat attendu

Actualise uniquement radar-gsc-snapshot.json sur la branche main de DevWeb13/fam-space-actions-bridge avec le snapshot compact décrit ci-dessus, puis termine ce passage. Ne choisis aucune mission Radar dans la même exécution et ne modifie aucun autre fichier interne.
