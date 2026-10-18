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
  "generatedAt": "2026-10-17T09:26:43.000Z",
  "dataThrough": "2026-10-14",
  "from": "2026-09-17",
  "refresh": [
    {
      "url": "/articles/vie-pratique/cantine-au-college-en-essonne-obtenir-son-tarif-2026-2027-sans-refaire-la-mauvaise-demarche/",
      "title": "Cantine au collège en Essonne: obtenir son tarif 2026-2027 sans refaire la mauvaise démarche",
      "category": "vie-pratique",
      "location": {
        "city": "Évry-Courcouronnes",
        "department": "Essonne",
        "region": "Île-de-France"
      },
      "publishedAt": "2026-09-13T16:03:15+02:00",
      "ageDays": 34,
      "peakStart": "2026-09-17",
      "peakEnd": "2026-09-23",
      "recentStart": "2026-10-08",
      "recentEnd": "2026-10-14",
      "peakImpressions": 181,
      "recentImpressions": 25,
      "score": 156,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "basis": "Baisse non attribuable au classement; 0 requêtes comparables.",
      "focusQueries": [
        "coupon restauration scolaire collège essonne 2026 2027",
        "coupon restauration scolaire essonne",
        "coupon restauration essonne",
        "coupon restauration scolaire collège 2026 2027",
        "coupon restauration college essonne"
      ]
    },
    {
      "url": "/articles/bons-plans/carte-tattoo-isere-2026-2027-comment-obtenir-60-a-120-pour-les-activites-d-un-collegien/",
      "title": "Carte Tattoo Isère 2026-2027: comment obtenir 60 à 120 € pour les activités d'un collégien",
      "category": "bons-plans",
      "location": {
        "city": "Grenoble",
        "department": "Isère",
        "region": "Auvergne-Rhône-Alpes"
      },
      "publishedAt": "2026-09-12T18:04:35+02:00",
      "ageDays": 35,
      "peakStart": "2026-09-17",
      "peakEnd": "2026-09-23",
      "recentStart": "2026-10-08",
      "recentEnd": "2026-10-14",
      "peakImpressions": 141,
      "recentImpressions": 14,
      "score": 127,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "basis": "Baisse non attribuable au classement; 0 requêtes comparables.",
      "focusQueries": [
        "carte tattoo isère montant",
        "carte tattoo montant",
        "montant carte tatoo",
        "tattoo isere"
      ]
    },
    {
      "url": "/articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/",
      "title": "laep a nantes ou aller avec un enfant de moins de 6 ans",
      "category": "parentalite",
      "publishedAt": "2026-09-01T00:00:00+02:00",
      "ageDays": 46,
      "peakStart": "2026-10-01",
      "peakEnd": "2026-10-07",
      "recentStart": "2026-10-08",
      "recentEnd": "2026-10-14",
      "peakImpressions": 131,
      "recentImpressions": 27,
      "score": 104,
      "signal": "coverage_loss",
      "commonQueries": 1,
      "positionDelta": 0.931,
      "impressionRatio": 0.115,
      "basis": "Exposition en baisse avec classement comparable; ne prouve pas une désindexation.",
      "focusQueries": [
        "laep nantes",
        "laep",
        "centre d'accueil enfant",
        "laep autour de moi",
        "lieu accueil parent enfant"
      ]
    },
    {
      "url": "/articles/bons-plans/carte-avantage-adulte-sncf-quand-est-elle-interessante-avec-des-enfants/",
      "title": "Carte Avantage Adulte SNCF: quand est-elle intéressante avec des enfants?",
      "category": "bons-plans",
      "publishedAt": "2026-08-29T16:41:39+02:00",
      "ageDays": 49,
      "peakStart": "2026-09-28",
      "peakEnd": "2026-10-04",
      "recentStart": "2026-10-08",
      "recentEnd": "2026-10-14",
      "peakImpressions": 238,
      "recentImpressions": 137,
      "score": 101,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Diagnostic par requêtes non encore disponible pour cette page.",
      "focusQueries": []
    },
    {
      "url": "/articles/sorties/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/",
      "title": "Planète Préhistorique à Bordeaux avec des enfants: âge, durée et tarifs",
      "category": "sorties",
      "location": {
        "city": "Bordeaux",
        "department": "Gironde",
        "region": "Nouvelle-Aquitaine"
      },
      "publishedAt": "2026-09-27T14:41:35+02:00",
      "ageDays": 20,
      "peakStart": "2026-10-01",
      "peakEnd": "2026-10-07",
      "recentStart": "2026-10-08",
      "recentEnd": "2026-10-14",
      "peakImpressions": 149,
      "recentImpressions": 15,
      "score": 89.333,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Diagnostic par requêtes non encore disponible pour cette page.",
      "focusQueries": []
    },
    {
      "url": "/articles/parentalite/petite-section-peut-on-alleger-les-apres-midis-a-l-ecole-maternelle/",
      "title": "Petite section: peut-on alléger les après-midis à l'école maternelle?",
      "category": "parentalite",
      "publishedAt": "2026-08-01T00:00:00+02:00",
      "ageDays": 77,
      "peakStart": "2026-09-17",
      "peakEnd": "2026-09-23",
      "recentStart": "2026-10-08",
      "recentEnd": "2026-10-14",
      "peakImpressions": 196,
      "recentImpressions": 109,
      "score": 87,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Diagnostic par requêtes non encore disponible pour cette page.",
      "focusQueries": []
    },
    {
      "url": "/articles/cuisine/cueillir-pommes-et-poires-a-mezieres-lez-clery-ce-qu-il-faut-verifier-avant-de-partir/",
      "title": "Cueillir pommes et poires à Mézières-lez-Cléry: ce qu'il faut vérifier avant de partir",
      "category": "cuisine",
      "location": {
        "city": "Mézières-lez-Cléry",
        "department": "Loiret",
        "region": "Centre-Val de Loire"
      },
      "publishedAt": "2026-09-04T16:04:39+02:00",
      "ageDays": 43,
      "peakStart": "2026-09-17",
      "peakEnd": "2026-09-23",
      "recentStart": "2026-10-08",
      "recentEnd": "2026-10-14",
      "peakImpressions": 94,
      "recentImpressions": 10,
      "score": 84,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Diagnostic par requêtes non encore disponible pour cette page.",
      "focusQueries": []
    },
    {
      "url": "/articles/vie-pratique/demenagement-comment-changer-d-ecole-maternelle-ou-elementaire-sans-rater-une-etape/",
      "title": "Déménagement: comment changer d'école maternelle ou élémentaire sans rater une étape",
      "category": "vie-pratique",
      "publishedAt": "2026-09-03T08:02:20+02:00",
      "ageDays": 44,
      "peakStart": "2026-09-17",
      "peakEnd": "2026-09-23",
      "recentStart": "2026-10-08",
      "recentEnd": "2026-10-14",
      "peakImpressions": 95,
      "recentImpressions": 19,
      "score": 76,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Diagnostic par requêtes non encore disponible pour cette page.",
      "focusQueries": []
    },
    {
      "url": "/articles/vie-pratique/transports-scolaires-dans-le-val-d-oise-imagine-r-csb-ou-scol-r-en-2026-2027/",
      "title": "transports scolaires dans le val d oise imagine r csb ou scol r en 2026 2027",
      "category": "vie-pratique",
      "publishedAt": "2026-09-01T00:00:00+02:00",
      "ageDays": 46,
      "peakStart": "2026-09-23",
      "peakEnd": "2026-09-29",
      "recentStart": "2026-10-08",
      "recentEnd": "2026-10-14",
      "peakImpressions": 82,
      "recentImpressions": 8,
      "score": 74,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Diagnostic par requêtes non encore disponible pour cette page.",
      "focusQueries": []
    },
    {
      "url": "/articles/evenements/fete-de-la-chataigne-a-collobrieres-quel-dimanche-choisir-avec-des-enfants/",
      "title": "fete de la chataigne a collobrieres quel dimanche choisir avec des enfants",
      "category": "evenements",
      "publishedAt": "2026-09-01T00:00:00+02:00",
      "ageDays": 46,
      "peakStart": "2026-09-17",
      "peakEnd": "2026-09-23",
      "recentStart": "2026-10-08",
      "recentEnd": "2026-10-14",
      "peakImpressions": 96,
      "recentImpressions": 23,
      "score": 73,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Diagnostic par requêtes non encore disponible pour cette page.",
      "focusQueries": []
    },
    {
      "url": "/articles/vie-pratique/rennes-avec-des-enfants-les-transports-sont-gratuits-avant-12-ans-mais-pas-sans-carte/",
      "title": "Rennes avec des enfants: transports gratuits avant 12 ans, comment ça marche?",
      "category": "vie-pratique",
      "location": {
        "city": "Rennes",
        "department": "Ille-et-Vilaine",
        "region": "Bretagne"
      },
      "publishedAt": "2026-09-07T00:02:33+02:00",
      "ageDays": 40,
      "peakStart": "2026-09-17",
      "peakEnd": "2026-09-23",
      "recentStart": "2026-10-08",
      "recentEnd": "2026-10-14",
      "peakImpressions": 112,
      "recentImpressions": 43,
      "score": 69,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Diagnostic par requêtes non encore disponible pour cette page.",
      "focusQueries": []
    },
    {
      "url": "/articles/activites/la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite/",
      "title": "La Cité de la Mer à Cherbourg en famille: billets, tarifs et durée",
      "category": "activites",
      "location": {
        "city": "Cherbourg-en-Cotentin",
        "department": "Manche",
        "region": "Normandie"
      },
      "publishedAt": "2026-08-18T15:06:21+02:00",
      "ageDays": 60,
      "peakStart": "2026-09-17",
      "peakEnd": "2026-09-23",
      "recentStart": "2026-10-08",
      "recentEnd": "2026-10-14",
      "peakImpressions": 106,
      "recentImpressions": 41,
      "score": 65,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Diagnostic par requêtes non encore disponible pour cette page.",
      "focusQueries": []
    },
    {
      "url": "/articles/sorties/aquarium-reunion-fermeture-2026-visite-famille/",
      "title": "aquarium reunion fermeture 2026 visite famille",
      "category": "sorties",
      "publishedAt": "2026-07-01T00:00:00+02:00",
      "ageDays": 108,
      "peakStart": "2026-09-18",
      "peakEnd": "2026-09-24",
      "recentStart": "2026-10-08",
      "recentEnd": "2026-10-14",
      "peakImpressions": 99,
      "recentImpressions": 35,
      "score": 64,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Diagnostic par requêtes non encore disponible pour cette page.",
      "focusQueries": []
    },
    {
      "url": "/articles/sorties/musee-de-prehistoire-de-solutre-avec-des-enfants-musee-parc-et-roche/",
      "title": "musee de prehistoire de solutre avec des enfants musee parc et roche",
      "category": "sorties",
      "publishedAt": "2026-09-01T00:00:00+02:00",
      "ageDays": 46,
      "peakStart": "2026-09-20",
      "peakEnd": "2026-09-26",
      "recentStart": "2026-10-08",
      "recentEnd": "2026-10-14",
      "peakImpressions": 64,
      "recentImpressions": 0,
      "score": 64,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Diagnostic par requêtes non encore disponible pour cette page.",
      "focusQueries": []
    },
    {
      "url": "/articles/vie-pratique/tarification-solidaire-naolib-a-nantes-combien-paie-une-famille-et-comment-faire-la-demande/",
      "title": "Tarification solidaire Naolib à Nantes: combien paie une famille et comment faire la demande?",
      "category": "vie-pratique",
      "location": {
        "city": "Nantes",
        "department": "Loire-Atlantique",
        "region": "Pays de la Loire"
      },
      "publishedAt": "2026-09-05T04:00:05+02:00",
      "ageDays": 42,
      "peakStart": "2026-09-17",
      "peakEnd": "2026-09-23",
      "recentStart": "2026-10-08",
      "recentEnd": "2026-10-14",
      "peakImpressions": 79,
      "recentImpressions": 18,
      "score": 61,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Diagnostic par requêtes non encore disponible pour cette page.",
      "focusQueries": []
    }
  ],
  "strongPages": [
    {
      "url": "/articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/",
      "title": "halloween 2026 au chateau de chantilly quelle activite choisir avec des enfants",
      "category": "sorties",
      "recentImpressions": 212,
      "recentClicks": 12,
      "recentPosition": 5.934,
      "retention": 1
    },
    {
      "url": "/articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/",
      "title": "mondial de l auto 2026 a paris avec des enfants quel jour billet et creneau choisir",
      "category": "evenements",
      "recentImpressions": 539,
      "recentClicks": 7,
      "recentPosition": 7.69,
      "retention": 23.435
    },
    {
      "url": "/articles/evenements/foire-de-la-barguillere-a-foix-samedi-ou-dimanche-avec-des-enfants/",
      "title": "foire de la barguillere a foix samedi ou dimanche avec des enfants",
      "category": "evenements",
      "recentImpressions": 343,
      "recentClicks": 6,
      "recentPosition": 9.636,
      "retention": 2.091
    },
    {
      "url": "/articles/evenements/quai-des-bulles-2026-a-saint-malo-en-famille-tarifs-programme-et-conseils/",
      "title": "quai des bulles 2026 a saint malo en famille tarifs programme et conseils",
      "category": "evenements",
      "recentImpressions": 310,
      "recentClicks": 6,
      "recentPosition": 6.474,
      "retention": 3.333
    },
    {
      "url": "/articles/evenements/halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir/",
      "title": "Halloween au Château de Villersexel 2026 en famille: quelle expérience choisir?",
      "category": "evenements",
      "location": {
        "city": "Villersexel",
        "department": "Haute-Saône",
        "region": "Bourgogne-Franche-Comté"
      },
      "recentImpressions": 198,
      "recentClicks": 5,
      "recentPosition": 7.53,
      "retention": 0.607
    },
    {
      "url": "/articles/sorties/parc-en-folie-2026-a-rennes-billet-en-ligne-ou-sur-place-quelle-formule-choisir-en-famille/",
      "title": "parc en folie 2026 a rennes billet en ligne ou sur place quelle formule choisir en famille",
      "category": "sorties",
      "recentImpressions": 393,
      "recentClicks": 4,
      "recentPosition": 6.878,
      "retention": 1
    },
    {
      "url": "/articles/voyages/futuroween-2026-futuroscope-billet-programme-enfants/",
      "title": "Futuroween 2026 au Futuroscope: billet, programme et conseils avec des enfants",
      "category": "voyages",
      "location": {
        "city": "Chasseneuil-du-Poitou",
        "department": "Vienne",
        "region": "Nouvelle-Aquitaine"
      },
      "recentImpressions": 479,
      "recentClicks": 3,
      "recentPosition": 8.856,
      "retention": 1.251
    },
    {
      "url": "/articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/",
      "title": "lire en poche 2026 a gradignan avec des enfants organiser une journee sans perdre les ateliers",
      "category": "evenements",
      "recentImpressions": 87,
      "recentClicks": 3,
      "recentPosition": 8,
      "retention": 1.279
    },
    {
      "url": "/articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/",
      "title": "Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates",
      "category": "vie-pratique",
      "location": {
        "city": "Toulouse",
        "department": "Haute-Garonne",
        "region": "Occitanie"
      },
      "recentImpressions": 71,
      "recentClicks": 3,
      "recentPosition": 4.859,
      "retention": 0.555
    },
    {
      "url": "/articles/evenements/paris-games-week-2026-en-famille-billets-tarifs-et-conseils-pour-la-visite/",
      "title": "Paris Games Week 2026 en famille: billets, tarifs et conseils pour la visite",
      "category": "evenements",
      "recentImpressions": 45,
      "recentClicks": 3,
      "recentPosition": 5.467,
      "retention": 1.098
    }
  ],
  "excluded": {
    "expired": 0,
    "cooling": 5
  },
  "warnings": [
    "Recherche web uniquement. Quatre lectures de sept jours complètes (6666 lignes), aucune troncature.",
    "Catalogue GitHub: 695 articles. Les métadonnées détaillées sont reprises du snapshot précédent lorsqu'elles existent; les dates des autres pages sont estimées au début du mois du chemin.",
    "Historique des refresh récents vérifié pour 5 candidats; les compteurs globaux de refroidissement et d'expiration restent incomplets.",
    "Trois premiers candidats diagnostiqués par requêtes exactes. Les autres signaux sont incertains jusqu'au diagnostic détaillé.",
    "Les requêtes masquées par GSC limitent l'interprétation; une baisse d'impressions ne démontre pas une perte de classement."
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
