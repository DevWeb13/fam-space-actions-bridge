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
  "generatedAt": "2026-10-27T02:25:59+01:00",
  "dataThrough": "2026-10-24",
  "from": "2026-09-27",
  "refresh": [
    {
      "url": "/articles/voyages/futuroween-2026-futuroscope-billet-programme-enfants/",
      "title": "Futuroween 2026 au Futuroscope: billet, programme et conseils avec des enfants",
      "category": "voyages",
      "publishedAt": "2026-08-25",
      "ageDays": 63,
      "peakStart": "2026-10-11",
      "peakEnd": "2026-10-17",
      "recentStart": "2026-10-18",
      "recentEnd": "2026-10-24",
      "peakImpressions": 662,
      "recentImpressions": 376,
      "score": 286,
      "signal": "uncertain",
      "commonQueries": 3,
      "positionDelta": 0.13,
      "impressionRatio": 0.423,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Chasseneuil-du-Poitou",
        "department": "Vienne",
        "region": "Nouvelle-Aquitaine"
      },
      "focusQueries": [
        "futuroscope halloween 2026",
        "futuroween 2026",
        "halloween futuroscope 2026"
      ]
    },
    {
      "url": "/articles/bons-plans/carte-avantage-adulte-sncf-quand-est-elle-interessante-avec-des-enfants/",
      "title": "Carte Avantage Adulte SNCF: quand est-elle intéressante avec des enfants?",
      "category": "bons-plans",
      "publishedAt": "2026-08-29",
      "ageDays": 59,
      "peakStart": "2026-09-28",
      "peakEnd": "2026-10-04",
      "recentStart": "2026-10-18",
      "recentEnd": "2026-10-24",
      "peakImpressions": 238,
      "recentImpressions": 106,
      "score": 132,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "focusQueries": []
    },
    {
      "url": "/articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/",
      "title": "Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle",
      "category": "sorties",
      "publishedAt": "2026-10-08",
      "ageDays": 19,
      "peakStart": "2026-10-11",
      "peakEnd": "2026-10-17",
      "recentStart": "2026-10-18",
      "recentEnd": "2026-10-24",
      "peakImpressions": 232,
      "recentImpressions": 67,
      "score": 104.5,
      "signal": "coverage_loss",
      "commonQueries": 1,
      "positionDelta": 0.733,
      "impressionRatio": 0.068,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Chantilly",
        "department": "Oise",
        "region": "Hauts-de-France"
      },
      "focusQueries": [
        "chateau de chantilly halloween 2026",
        "chantilly halloween 2026",
        "château de chantilly halloween 2026"
      ]
    },
    {
      "url": "/articles/parentalite/petite-section-peut-on-alleger-les-apres-midis-a-l-ecole-maternelle/",
      "title": "Petite section: peut-on alléger les après-midis à l'école maternelle?",
      "category": "parentalite",
      "publishedAt": "2026-08-28",
      "ageDays": 60,
      "peakStart": "2026-10-08",
      "peakEnd": "2026-10-14",
      "recentStart": "2026-10-18",
      "recentEnd": "2026-10-24",
      "peakImpressions": 109,
      "recentImpressions": 30,
      "score": 79,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0.818,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "focusQueries": [
        "amenagement ecole maternelle",
        "formulaire aménagement temps scolaire petite section",
        "aménagement temps scolaire"
      ]
    },
    {
      "url": "/articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/",
      "title": "Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates",
      "category": "vie-pratique",
      "publishedAt": "2026-09-28",
      "ageDays": 29,
      "peakStart": "2026-09-29",
      "peakEnd": "2026-10-05",
      "recentStart": "2026-10-18",
      "recentEnd": "2026-10-24",
      "peakImpressions": 128,
      "recentImpressions": 56,
      "score": 69.6,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0.267,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Toulouse",
        "department": "Haute-Garonne",
        "region": "Occitanie"
      },
      "focusQueries": [
        "aide a la restauration scolaire haute garonne",
        "ars cantine haute garonne",
        "aide cantine scolaire toulouse"
      ]
    },
    {
      "url": "/articles/vie-pratique/parking-relais-a-strasbourg-en-famille-comment-choisir-son-p-r-et-son-forfait/",
      "title": "Parking-relais à Strasbourg en famille: comment choisir son P+R et son forfait",
      "category": "vie-pratique",
      "publishedAt": "2026-10-01",
      "ageDays": 26,
      "peakStart": "2026-10-04",
      "peakEnd": "2026-10-10",
      "recentStart": "2026-10-18",
      "recentEnd": "2026-10-24",
      "peakImpressions": 140,
      "recentImpressions": 64,
      "score": 65.867,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Strasbourg",
        "department": "Bas-Rhin",
        "region": "Grand Est"
      },
      "focusQueries": [
        "parking relais Strasbourg famille",
        "P+R Strasbourg tarif"
      ]
    },
    {
      "url": "/articles/voyages/train-de-la-rhune-avec-des-enfants-billets-duree-et-conseils-en-2026/",
      "title": "Train de la Rhune avec des enfants: billets, durée et conseils en 2026",
      "category": "voyages",
      "publishedAt": "2026-09-30",
      "ageDays": 27,
      "peakStart": "2026-10-03",
      "peakEnd": "2026-10-09",
      "recentStart": "2026-10-18",
      "recentEnd": "2026-10-24",
      "peakImpressions": 70,
      "recentImpressions": 0,
      "score": 63,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Sare",
        "department": "Pyrénées-Atlantiques",
        "region": "Nouvelle-Aquitaine"
      },
      "focusQueries": [
        "Train de la Rhune avec enfants",
        "Train de la Rhune tarifs 2026"
      ]
    },
    {
      "url": "/articles/voyages/week-end-a-etretat-en-famille-organiser-deux-jours-autour-des-falaises/",
      "title": "Week-end à Étretat en famille: organiser deux jours autour des falaises",
      "category": "voyages",
      "publishedAt": "2026-10-02",
      "ageDays": 25,
      "peakStart": "2026-10-03",
      "peakEnd": "2026-10-09",
      "recentStart": "2026-10-18",
      "recentEnd": "2026-10-24",
      "peakImpressions": 61,
      "recentImpressions": 2,
      "score": 49.167,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Étretat",
        "department": "Seine-Maritime",
        "region": "Normandie"
      },
      "focusQueries": [
        "week-end Étretat en famille",
        "Étretat avec enfants"
      ]
    },
    {
      "url": "/articles/parentalite/montchavin-les-coches-avec-un-bebe-garderie-horaires-et-sejour-d-hiver/",
      "title": "Montchavin-Les Coches avec un bébé: garderie, horaires et séjour d'hiver",
      "category": "parentalite",
      "publishedAt": "2026-09-26",
      "ageDays": 31,
      "peakStart": "2026-09-27",
      "peakEnd": "2026-10-03",
      "recentStart": "2026-10-18",
      "recentEnd": "2026-10-24",
      "peakImpressions": 65,
      "recentImpressions": 16,
      "score": 49,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Montchavin-Les Coches",
        "department": "Savoie",
        "region": "Auvergne-Rhône-Alpes"
      },
      "focusQueries": [
        "Montchavin Les Coches bébé",
        "garderie Montchavin Les Coches"
      ]
    },
    {
      "url": "/articles/parentalite/laep-en-seine-et-marne-ou-aller-et-comment-se-passe-une-premiere-visite/",
      "title": "LAEP en Seine-et-Marne: où aller et comment se passe une première visite?",
      "category": "parentalite",
      "publishedAt": "2026-10-01",
      "ageDays": 26,
      "peakStart": "2026-10-02",
      "peakEnd": "2026-10-08",
      "recentStart": "2026-10-18",
      "recentEnd": "2026-10-24",
      "peakImpressions": 70,
      "recentImpressions": 14,
      "score": 48.533,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Meaux",
        "department": "Seine-et-Marne",
        "region": "Île-de-France"
      },
      "focusQueries": [
        "LAEP Seine-et-Marne",
        "lieu accueil enfants parents Meaux"
      ]
    },
    {
      "url": "/articles/evenements/foire-d-automne-de-saint-jean-du-gard-2026-en-famille-animations-et-conseils/",
      "title": "Foire d'Automne de Saint-Jean-du-Gard 2026 en famille: animations et conseils",
      "category": "evenements",
      "publishedAt": "2026-09-25",
      "ageDays": 32,
      "peakStart": "2026-10-07",
      "peakEnd": "2026-10-13",
      "recentStart": "2026-10-18",
      "recentEnd": "2026-10-24",
      "peakImpressions": 84,
      "recentImpressions": 43,
      "score": 41,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Saint-Jean-du-Gard",
        "department": "Gard",
        "region": "Occitanie"
      },
      "focusQueries": [
        "Foire d'Automne Saint-Jean-du-Gard 2026",
        "Saint-Jean-du-Gard en famille"
      ]
    },
    {
      "url": "/articles/evenements/gastronomades-2026-a-angouleme-en-famille-faut-il-prevoir-le-week-end/",
      "title": "Gastronomades 2026 à Angoulême en famille: faut-il prévoir le week-end ?",
      "category": "evenements",
      "publishedAt": "2026-09-19",
      "ageDays": 38,
      "peakStart": "2026-10-06",
      "peakEnd": "2026-10-12",
      "recentStart": "2026-10-18",
      "recentEnd": "2026-10-24",
      "peakImpressions": 67,
      "recentImpressions": 26,
      "score": 41,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Angoulême",
        "department": "Charente",
        "region": "Nouvelle-Aquitaine"
      },
      "focusQueries": [
        "Gastronomades 2026 Angoulême",
        "Gastronomades en famille"
      ]
    },
    {
      "url": "/articles/vie-pratique/carte-okay-savoie-2026-2027-comment-obtenir-et-utiliser-les-80-du-collegien/",
      "title": "Carte OKAY Savoie 2026-2027: comment obtenir et utiliser les 80 € du collégien",
      "category": "vie-pratique",
      "publishedAt": "2026-09-02",
      "ageDays": 55,
      "peakStart": "2026-10-06",
      "peakEnd": "2026-10-12",
      "recentStart": "2026-10-18",
      "recentEnd": "2026-10-24",
      "peakImpressions": 131,
      "recentImpressions": 90,
      "score": 41,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Chambéry",
        "department": "Savoie",
        "region": "Auvergne-Rhône-Alpes"
      },
      "focusQueries": [
        "carte OKAY Savoie 2026-2027",
        "80 euros collégien Savoie"
      ]
    },
    {
      "url": "/articles/evenements/mois-givre-2026-a-belfort-en-famille-ce-qui-est-deja-annonce/",
      "title": "Mois Givré 2026 à Belfort en famille: ce qui est déjà annoncé",
      "category": "evenements",
      "publishedAt": "2026-09-29",
      "ageDays": 28,
      "peakStart": "2026-10-01",
      "peakEnd": "2026-10-07",
      "recentStart": "2026-10-18",
      "recentEnd": "2026-10-24",
      "peakImpressions": 48,
      "recentImpressions": 5,
      "score": 40.133,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Belfort",
        "department": "Territoire de Belfort",
        "region": "Bourgogne-Franche-Comté"
      },
      "focusQueries": [
        "Mois Givré Belfort 2026",
        "Belfort Noël famille"
      ]
    },
    {
      "url": "/articles/cuisine/food-tour-a-aix-en-provence-avec-des-enfants-lequel-choisir-en-2026/",
      "title": "Food tour à Aix-en-Provence avec des enfants: lequel choisir en 2026?",
      "category": "cuisine",
      "publishedAt": "2026-09-26",
      "ageDays": 31,
      "peakStart": "2026-09-27",
      "peakEnd": "2026-10-03",
      "recentStart": "2026-10-18",
      "recentEnd": "2026-10-24",
      "peakImpressions": 51,
      "recentImpressions": 11,
      "score": 40,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Aix-en-Provence",
        "department": "Bouches-du-Rhône",
        "region": "Provence-Alpes-Côte d’Azur"
      },
      "focusQueries": [
        "food tour Aix-en-Provence famille",
        "visite gourmande Aix enfants"
      ]
    }
  ],
  "strongPages": [
    {
      "url": "/articles/sorties/parc-en-folie-2026-a-rennes-billet-en-ligne-ou-sur-place-quelle-formule-choisir-en-famille/",
      "title": "Parc en Folie 2026 à Rennes: tarifs, espace 0-3 ans et infos pratiques en famille",
      "category": "sorties",
      "recentImpressions": 352,
      "recentClicks": 9,
      "recentPosition": 5.986,
      "retention": 0.896
    },
    {
      "url": "/articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/",
      "title": "Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween",
      "category": "evenements",
      "recentImpressions": 280,
      "recentClicks": 8,
      "recentPosition": 6.661,
      "retention": 2.393
    },
    {
      "url": "/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/",
      "title": "Transports à Paris avec des enfants: quel titre choisir pour payer juste?",
      "category": "voyages",
      "recentImpressions": 2235,
      "recentClicks": 7,
      "recentPosition": 8.845,
      "retention": 1.586
    },
    {
      "url": "/articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/",
      "title": "Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite",
      "category": "sorties",
      "recentImpressions": 283,
      "recentClicks": 4,
      "recentPosition": 7.898,
      "retention": 1.665
    },
    {
      "url": "/articles/maison/recycleries-autour-de-chartres-ou-donner-et-acheter-d-occasion/",
      "title": "Recycleries autour de Chartres: où donner et acheter d'occasion ?",
      "category": "maison",
      "recentImpressions": 114,
      "recentClicks": 4,
      "recentPosition": 8.36,
      "retention": 1.443
    },
    {
      "url": "/articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/",
      "title": "Mini World Lyon: tarifs, billets famille et durée de visite",
      "category": "bons-plans",
      "recentImpressions": 573,
      "recentClicks": 3,
      "recentPosition": 8.942,
      "retention": 2.716
    },
    {
      "url": "/articles/vie-pratique/cantine-au-college-dans-le-pas-de-calais-les-tarifs-2026-et-les-reductions-pour-les-boursiers/",
      "title": "Cantine au collège dans le Pas-de-Calais: les tarifs 2026 et les réductions pour les boursiers",
      "category": "vie-pratique",
      "recentImpressions": 63,
      "recentClicks": 3,
      "recentPosition": 5.317,
      "retention": 0.984
    },
    {
      "url": "/articles/cuisine/ou-manger-des-fouees-en-famille-autour-de-saumur/",
      "title": "Où manger des fouées en famille autour de Saumur ?",
      "category": "cuisine",
      "recentImpressions": 241,
      "recentClicks": 2,
      "recentPosition": 10.651,
      "retention": 1.535
    },
    {
      "url": "/articles/evenements/halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir/",
      "title": "Halloween 2026 au Château de Villersexel: parc gratuit, visites et âge minimum",
      "category": "evenements",
      "recentImpressions": 182,
      "recentClicks": 2,
      "recentPosition": 9.374,
      "retention": 0.558
    },
    {
      "url": "/articles/sorties/cosquer-mediterranee-avec-des-enfants-age-poussette-tarifs/",
      "title": "Cosquer Méditerranée avec des enfants: que peut-on visiter selon leur âge?",
      "category": "sorties",
      "recentImpressions": 75,
      "recentClicks": 2,
      "recentPosition": 6.6,
      "retention": 4.688
    }
  ],
  "excluded": {
    "expired": 111,
    "cooling": 6
  },
  "warnings": [
    "GSC recherche web : 7645 lignes sur quatre semaines, réponses complètes (1528, 1738, 1984, 2395).",
    "Catalogue Radar : 804 articles et 108 entrées d'historique ; exclusions selon les métadonnées disponibles.",
    "Diagnostics de requêtes effectués sur 5 candidats ; certaines requêtes peuvent être masquées par GSC.",
    "Les baisses d'impressions ne prouvent ni désindexation ni perte de position."
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
