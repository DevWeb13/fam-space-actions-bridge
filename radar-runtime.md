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
  "generatedAt": "2026-10-26T01:34:33+01:00",
  "dataThrough": "2026-10-23",
  "from": "2026-09-26",
  "refresh": [
    {
      "url": "/articles/voyages/futuroween-2026-futuroscope-billet-programme-enfants/",
      "title": "Futuroween 2026 au Futuroscope: billet, programme et conseils avec des enfants",
      "category": "voyages",
      "publishedAt": "2026-08-25",
      "ageDays": 62,
      "peakStart": "2026-10-10",
      "peakEnd": "2026-10-16",
      "recentStart": "2026-10-17",
      "recentEnd": "2026-10-23",
      "peakImpressions": 641,
      "recentImpressions": 426,
      "score": 215,
      "signal": "uncertain",
      "commonQueries": 3,
      "positionDelta": 0.453,
      "impressionRatio": 0.518,
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
      "ageDays": 58,
      "peakStart": "2026-09-28",
      "peakEnd": "2026-10-04",
      "recentStart": "2026-10-17",
      "recentEnd": "2026-10-23",
      "peakImpressions": 238,
      "recentImpressions": 103,
      "score": 135,
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
      "ageDays": 18,
      "peakStart": "2026-10-10",
      "peakEnd": "2026-10-16",
      "recentStart": "2026-10-17",
      "recentEnd": "2026-10-23",
      "peakImpressions": 229,
      "recentImpressions": 74,
      "score": 93,
      "signal": "coverage_loss",
      "commonQueries": 1,
      "positionDelta": 1.165,
      "impressionRatio": 0.105,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Chantilly",
        "department": "Oise",
        "region": "Hauts-de-France"
      },
      "focusQueries": [
        "chateau de chantilly halloween 2026",
        "chantilly halloween 2026",
        "chateau chantilly halloween 2026"
      ]
    },
    {
      "url": "/articles/parentalite/petite-section-peut-on-alleger-les-apres-midis-a-l-ecole-maternelle/",
      "title": "Petite section: peut-on alléger les après-midis à l'école maternelle?",
      "category": "parentalite",
      "publishedAt": "2026-08-28",
      "ageDays": 59,
      "peakStart": "2026-10-08",
      "peakEnd": "2026-10-14",
      "recentStart": "2026-10-17",
      "recentEnd": "2026-10-23",
      "peakImpressions": 109,
      "recentImpressions": 33,
      "score": 76,
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
      "url": "/articles/vie-pratique/parking-relais-a-strasbourg-en-famille-comment-choisir-son-p-r-et-son-forfait/",
      "title": "Parking-relais à Strasbourg en famille: comment choisir son P+R et son forfait",
      "category": "vie-pratique",
      "publishedAt": "2026-10-01",
      "ageDays": 25,
      "peakStart": "2026-10-04",
      "peakEnd": "2026-10-10",
      "recentStart": "2026-10-17",
      "recentEnd": "2026-10-23",
      "peakImpressions": 140,
      "recentImpressions": 63,
      "score": 64.167,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Strasbourg",
        "department": "Bas-Rhin",
        "region": "Grand Est"
      },
      "focusQueries": [
        "p+r strasbourg",
        "parking p+r strasbourg",
        "parking relais cts"
      ]
    },
    {
      "url": "/articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/",
      "title": "Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates",
      "category": "vie-pratique",
      "publishedAt": "2026-09-28",
      "ageDays": 28,
      "peakStart": "2026-09-29",
      "peakEnd": "2026-10-05",
      "recentStart": "2026-10-17",
      "recentEnd": "2026-10-23",
      "peakImpressions": 128,
      "recentImpressions": 62,
      "score": 61.6,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Toulouse",
        "department": "Haute-Garonne",
        "region": "Occitanie"
      },
      "focusQueries": [
        "aide restauration scolaire Haute-Garonne",
        "aide cantine collège Haute-Garonne",
        "ARS Haute-Garonne 2026-2027"
      ]
    },
    {
      "url": "/articles/sorties/parc-en-folie-2026-a-rennes-billet-en-ligne-ou-sur-place-quelle-formule-choisir-en-famille/",
      "title": "Parc en Folie 2026 à Rennes: tarifs, espace 0-3 ans et infos pratiques en famille",
      "category": "sorties",
      "publishedAt": "2026-10-07",
      "ageDays": 19,
      "peakStart": "2026-10-07",
      "peakEnd": "2026-10-13",
      "recentStart": "2026-10-17",
      "recentEnd": "2026-10-23",
      "peakImpressions": 393,
      "recentImpressions": 297,
      "score": 60.8,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Bruz",
        "department": "Ille-et-Vilaine",
        "region": "Bretagne"
      },
      "focusQueries": [
        "parc en folie rennes 2026",
        "parc en folie rennes 2026 date",
        "parc en folie tarif"
      ]
    },
    {
      "url": "/articles/voyages/train-de-la-rhune-avec-des-enfants-billets-duree-et-conseils-en-2026/",
      "title": "Train de la Rhune avec des enfants: billets, durée et conseils en 2026",
      "category": "voyages",
      "publishedAt": "2026-09-30",
      "ageDays": 26,
      "peakStart": "2026-10-03",
      "peakEnd": "2026-10-09",
      "recentStart": "2026-10-17",
      "recentEnd": "2026-10-23",
      "peakImpressions": 70,
      "recentImpressions": 0,
      "score": 60.667,
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
      "url": "/articles/parentalite/montchavin-les-coches-avec-un-bebe-garderie-horaires-et-sejour-d-hiver/",
      "title": "Montchavin-Les Coches avec un bébé: garderie, horaires et séjour d'hiver",
      "category": "parentalite",
      "publishedAt": "2026-09-26",
      "ageDays": 30,
      "peakStart": "2026-09-27",
      "peakEnd": "2026-10-03",
      "recentStart": "2026-10-17",
      "recentEnd": "2026-10-23",
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
      "url": "/articles/voyages/week-end-a-etretat-en-famille-organiser-deux-jours-autour-des-falaises/",
      "title": "Week-end à Étretat en famille: organiser deux jours autour des falaises",
      "category": "voyages",
      "publishedAt": "2026-10-02",
      "ageDays": 24,
      "peakStart": "2026-10-03",
      "peakEnd": "2026-10-09",
      "recentStart": "2026-10-17",
      "recentEnd": "2026-10-23",
      "peakImpressions": 61,
      "recentImpressions": 1,
      "score": 48,
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
      "url": "/articles/parentalite/laep-en-seine-et-marne-ou-aller-et-comment-se-passe-une-premiere-visite/",
      "title": "LAEP en Seine-et-Marne: où aller et comment se passe une première visite?",
      "category": "parentalite",
      "publishedAt": "2026-10-01",
      "ageDays": 25,
      "peakStart": "2026-10-02",
      "peakEnd": "2026-10-08",
      "recentStart": "2026-10-17",
      "recentEnd": "2026-10-23",
      "peakImpressions": 70,
      "recentImpressions": 14,
      "score": 46.667,
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
      "url": "/articles/vie-pratique/carte-okay-savoie-2026-2027-comment-obtenir-et-utiliser-les-80-du-collegien/",
      "title": "Carte OKAY Savoie 2026-2027: comment obtenir et utiliser les 80 € du collégien",
      "category": "vie-pratique",
      "publishedAt": "2026-09-02",
      "ageDays": 54,
      "peakStart": "2026-10-06",
      "peakEnd": "2026-10-12",
      "recentStart": "2026-10-17",
      "recentEnd": "2026-10-23",
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
        "carte okay savoie 2026",
        "okay savoie"
      ]
    },
    {
      "url": "/articles/cuisine/food-tour-a-aix-en-provence-avec-des-enfants-lequel-choisir-en-2026/",
      "title": "Food tour à Aix-en-Provence avec des enfants: lequel choisir en 2026?",
      "category": "cuisine",
      "publishedAt": "2026-09-26",
      "ageDays": 30,
      "peakStart": "2026-09-26",
      "peakEnd": "2026-10-02",
      "recentStart": "2026-10-17",
      "recentEnd": "2026-10-23",
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
    },
    {
      "url": "/articles/bons-plans/pass-sports-citoyen-dans-l-oise-15-a-cumuler-avec-le-pass-sport-en-2026/",
      "title": "Pass Sports Citoyen dans l'Oise: 15 € à cumuler avec le pass Sport en 2026",
      "category": "bons-plans",
      "publishedAt": "2026-09-30",
      "ageDays": 26,
      "peakStart": "2026-10-03",
      "peakEnd": "2026-10-09",
      "recentStart": "2026-10-17",
      "recentEnd": "2026-10-23",
      "peakImpressions": 46,
      "recentImpressions": 0,
      "score": 38.272,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Beauvais",
        "department": "Oise",
        "region": "Hauts-de-France"
      },
      "focusQueries": [
        "Pass Sports Citoyen Oise",
        "pass Sport 2026"
      ]
    },
    {
      "url": "/articles/evenements/mois-givre-2026-a-belfort-en-famille-ce-qui-est-deja-annonce/",
      "title": "Mois Givré 2026 à Belfort en famille: ce qui est déjà annoncé",
      "category": "evenements",
      "publishedAt": "2026-09-29",
      "ageDays": 27,
      "peakStart": "2026-10-01",
      "peakEnd": "2026-10-07",
      "recentStart": "2026-10-17",
      "recentEnd": "2026-10-23",
      "peakImpressions": 48,
      "recentImpressions": 7,
      "score": 36.9,
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
    }
  ],
  "strongPages": [
    {
      "url": "/articles/sorties/parc-en-folie-2026-a-rennes-billet-en-ligne-ou-sur-place-quelle-formule-choisir-en-famille/",
      "title": "Parc en Folie 2026 à Rennes: tarifs, espace 0-3 ans et infos pratiques en famille",
      "category": "sorties",
      "recentImpressions": 297,
      "recentClicks": 9,
      "recentPosition": 5.882,
      "retention": 0.756
    },
    {
      "url": "/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/",
      "title": "Transports à Paris avec des enfants: quel titre choisir pour payer juste?",
      "category": "voyages",
      "recentImpressions": 2276,
      "recentClicks": 8,
      "recentPosition": 8.803,
      "retention": 1.762
    },
    {
      "url": "/articles/maison/recycleries-autour-de-chartres-ou-donner-et-acheter-d-occasion/",
      "title": "Recycleries autour de Chartres: où donner et acheter d'occasion ?",
      "category": "maison",
      "recentImpressions": 114,
      "recentClicks": 5,
      "recentPosition": 8.632,
      "retention": 1.869
    },
    {
      "url": "/articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/",
      "title": "Mini World Lyon: tarifs, billets famille et durée de visite",
      "category": "bons-plans",
      "recentImpressions": 574,
      "recentClicks": 3,
      "recentPosition": 9.002,
      "retention": 3.437
    },
    {
      "url": "/articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/",
      "title": "Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite",
      "category": "sorties",
      "recentImpressions": 274,
      "recentClicks": 3,
      "recentPosition": 7.956,
      "retention": 1.723
    },
    {
      "url": "/articles/vie-pratique/cantine-au-college-dans-le-pas-de-calais-les-tarifs-2026-et-les-reductions-pour-les-boursiers/",
      "title": "Cantine au collège dans le Pas-de-Calais: les tarifs 2026 et les réductions pour les boursiers",
      "category": "vie-pratique",
      "recentImpressions": 56,
      "recentClicks": 3,
      "recentPosition": 5.268,
      "retention": 0.903
    },
    {
      "url": "/articles/sorties/cosquer-mediterranee-avec-des-enfants-age-poussette-tarifs/",
      "title": "Cosquer Méditerranée avec des enfants: que peut-on visiter selon leur âge?",
      "category": "sorties",
      "recentImpressions": 74,
      "recentClicks": 2,
      "recentPosition": 6.581,
      "retention": 8.222
    },
    {
      "url": "/articles/sorties/zoo-de-la-fleche-en-famille-tarifs-2026-duree-et-conseils-de-visite/",
      "title": "Zoo de La Flèche en famille: tarifs 2026, durée et conseils de visite",
      "category": "sorties",
      "recentImpressions": 57,
      "recentClicks": 2,
      "recentPosition": 8.614,
      "retention": 1
    },
    {
      "url": "/articles/voyages/prendre-l-avion-avec-un-bebe-poussette-siege-auto-et-bagages-a-verifier-avant-de-reserver/",
      "title": "Prendre l'avion avec un bébé: poussette, siège auto et bagages à vérifier avant de réserver",
      "category": "voyages",
      "recentImpressions": 53,
      "recentClicks": 2,
      "recentPosition": 9.453,
      "retention": 1.019
    },
    {
      "url": "/articles/maison/decheteries-de-caen-la-mer-qr-code-ou-plaque-obligatoires-depuis-septembre-2026/",
      "title": "Déchèteries de Caen la mer: QR code ou plaque obligatoires depuis septembre 2026",
      "category": "maison",
      "recentImpressions": 41,
      "recentClicks": 2,
      "recentPosition": 8.122,
      "retention": 0.631
    }
  ],
  "excluded": {
    "expired": 109,
    "cooling": 6
  },
  "warnings": [
    "GSC recherche web : 7485 lignes sur quatre semaines, réponses complètes (1500, 1715, 1940, 2330).",
    "Catalogue Radar : 795 articles et 104 entrées d'historique ; exclusions selon les métadonnées disponibles.",
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
