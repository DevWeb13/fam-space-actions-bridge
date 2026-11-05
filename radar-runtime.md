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
- pour les meilleurs refresh examinables, les requêtes de l'URL exacte sur `peakStart..peakEnd` et `recentStart..recentEnd`. Conserve `search_potential` lorsqu'il désigne une faible conversion d'impressions en clics, sauf si les requêtes prouvent un autre signal; complète son `basis` avec les observations pertinentes sans déduire un défaut éditorial des seules métriques.

Utilise la logique de le module Radar embarqué plus bas: `unwrapRows`, `buildRadarShortlist`, `diagnoseQueries` et `probableDuplicates`. Une réponse Windsor est considérée complète lorsque `status: done`, que `data` est un tableau et que `total_rows` correspond à `data.length`, sans indicateur explicite de troncature. **Un nombre rond de lignes, notamment 1 500, n'est jamais à lui seul une preuve de plafonnement et ne doit pas arrêter Radar.** Découpe seulement la période si Windsor signale réellement une réponse incomplète/tronquée, si `total_rows` ne correspond pas au nombre de lignes reçues, ou si `unwrapRows` refuse la réponse, notamment à son seuil conservateur de 5 000 lignes par réponse. Un 429, un refus d'accès ou un plafond réellement non résolu termine le passage. Maximum 50 appels `get_data`. Les réponses brutes restent temporaires.

Le snapshot conserve seulement `generatedAt`, `dataThrough`, `from`, la shortlist `refresh` avec ses diagnostics compacts, `strongPages`, `excluded` et les avertissements utiles.

## Snapshot actuellement disponible

{
  "schemaVersion": 1,
  "generatedAt": "2026-11-04T03:31:09+01:00",
  "dataThrough": "2026-11-01",
  "from": "2026-10-05",
  "refresh": [
    {
      "url": "/articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/",
      "title": "Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille",
      "category": "evenements",
      "publishedAt": "2026-10-16T17:46:42.359Z",
      "ageDays": 19,
      "peakStart": "2026-10-17",
      "peakEnd": "2026-10-23",
      "recentStart": "2026-10-26",
      "recentEnd": "2026-11-01",
      "peakImpressions": 1318,
      "recentImpressions": 796,
      "score": 330.6,
      "signal": "uncertain",
      "commonQueries": 1,
      "positionDelta": -3.7,
      "impressionRatio": 0.085,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Lumigny-Nesles-Ormeaux",
        "department": "Seine-et-Marne",
        "region": "Île-de-France"
      },
      "focusQueries": [
        "Lumigny Safari de Lumières 2026 2027",
        "Safari de Lumières Lumigny tarifs famille",
        "Lumigny Safari de Lumières billet combiné"
      ]
    },
    {
      "url": "/articles/maison/dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage/",
      "title": "Déchets verts à Toulouse Métropole en 2027: collecte, broyage et compostage",
      "category": "maison",
      "publishedAt": "2026-10-15T19:13:56+02:00",
      "ageDays": 20,
      "peakStart": "2026-10-16",
      "peakEnd": "2026-10-22",
      "recentStart": "2026-10-26",
      "recentEnd": "2026-11-01",
      "peakImpressions": 112,
      "recentImpressions": 18,
      "score": 62.667,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Toulouse",
        "department": "Haute-Garonne",
        "region": "Occitanie"
      },
      "focusQueries": [
        "déchets verts Toulouse Métropole 2027",
        "collecte déchets végétaux Toulouse",
        "broyage gratuit Toulouse Métropole"
      ]
    },
    {
      "url": "/articles/vie-pratique/carte-okay-savoie-2026-2027-comment-obtenir-et-utiliser-les-80-du-collegien/",
      "title": "Carte OKAY Savoie 2026-2027: comment obtenir et utiliser les 80 € du collégien",
      "category": "vie-pratique",
      "publishedAt": "2026-09-02T02:00:51+02:00",
      "ageDays": 63,
      "peakStart": "2026-10-06",
      "peakEnd": "2026-10-12",
      "recentStart": "2026-10-26",
      "recentEnd": "2026-11-01",
      "peakImpressions": 131,
      "recentImpressions": 70,
      "score": 61,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
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
      "url": "/articles/vie-pratique/parking-relais-a-strasbourg-en-famille-comment-choisir-son-p-r-et-son-forfait/",
      "title": "Parking-relais à Strasbourg en famille: comment choisir son P+R et son forfait",
      "category": "vie-pratique",
      "publishedAt": "2026-10-01T04:01:15+02:00",
      "ageDays": 34,
      "peakStart": "2026-10-05",
      "peakEnd": "2026-10-11",
      "recentStart": "2026-10-26",
      "recentEnd": "2026-11-01",
      "peakImpressions": 115,
      "recentImpressions": 61,
      "score": 54,
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
        "parking relais Strasbourg famille",
        "P+R Strasbourg tarif"
      ]
    },
    {
      "url": "/articles/evenements/foire-d-automne-de-saint-jean-du-gard-2026-en-famille-animations-et-conseils/",
      "title": "Foire d'Automne de Saint-Jean-du-Gard 2026 en famille: animations et conseils",
      "category": "evenements",
      "publishedAt": "2026-09-25T14:04:39+02:00",
      "ageDays": 40,
      "peakStart": "2026-10-07",
      "peakEnd": "2026-10-13",
      "recentStart": "2026-10-26",
      "recentEnd": "2026-11-01",
      "peakImpressions": 84,
      "recentImpressions": 32,
      "score": 52,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
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
      "url": "/articles/parentalite/laep-en-seine-et-marne-ou-aller-et-comment-se-passe-une-premiere-visite/",
      "title": "LAEP en Seine-et-Marne: où aller et comment se passe une première visite?",
      "category": "parentalite",
      "publishedAt": "2026-10-01T13:02:39+02:00",
      "ageDays": 34,
      "peakStart": "2026-10-05",
      "peakEnd": "2026-10-11",
      "recentStart": "2026-10-26",
      "recentEnd": "2026-11-01",
      "peakImpressions": 61,
      "recentImpressions": 11,
      "score": 50,
      "signal": "needs_query_check",
      "commonQueries": null,
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
      "url": "/articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/",
      "title": "Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates",
      "category": "vie-pratique",
      "publishedAt": "2026-09-28T09:22:04+02:00",
      "ageDays": 37,
      "peakStart": "2026-10-12",
      "peakEnd": "2026-10-18",
      "recentStart": "2026-10-26",
      "recentEnd": "2026-11-01",
      "peakImpressions": 106,
      "recentImpressions": 58,
      "score": 48,
      "signal": "needs_query_check",
      "commonQueries": null,
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
      "url": "/articles/sorties/aeroscopia-a-blagnac-en-famille-tarifs-avions-et-conseils-de-visite/",
      "title": "Aeroscopia à Blagnac en famille: tarifs, avions et conseils de visite",
      "category": "sorties",
      "publishedAt": "2026-08-24T00:36:16+02:00",
      "ageDays": 72,
      "peakStart": "2026-10-19",
      "peakEnd": "2026-10-25",
      "recentStart": "2026-10-26",
      "recentEnd": "2026-11-01",
      "peakImpressions": 96,
      "recentImpressions": 49,
      "score": 47,
      "signal": "needs_query_check",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Blagnac",
        "department": "Haute-Garonne",
        "region": "Occitanie"
      },
      "focusQueries": [
        "Aeroscopia en famille",
        "musée avion Toulouse enfants"
      ]
    },
    {
      "url": "/articles/voyages/train-de-la-rhune-avec-des-enfants-billets-duree-et-conseils-en-2026/",
      "title": "Train de la Rhune avec des enfants: billets, durée et conseils en 2026",
      "category": "voyages",
      "publishedAt": "2026-09-30T20:04:26+02:00",
      "ageDays": 35,
      "peakStart": "2026-10-08",
      "peakEnd": "2026-10-14",
      "recentStart": "2026-10-26",
      "recentEnd": "2026-11-01",
      "peakImpressions": 51,
      "recentImpressions": 5,
      "score": 46,
      "signal": "needs_query_check",
      "commonQueries": null,
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
      "url": "/articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/",
      "title": "Noël à Pau 2026 en famille: marchés, village et illuminations",
      "category": "evenements",
      "publishedAt": "2026-10-19T11:02:20+02:00",
      "ageDays": 16,
      "peakStart": "2026-10-19",
      "peakEnd": "2026-10-25",
      "recentStart": "2026-10-26",
      "recentEnd": "2026-11-01",
      "peakImpressions": 80,
      "recentImpressions": 8,
      "score": 38.4,
      "signal": "needs_query_check",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Pau",
        "department": "Pyrénées-Atlantiques",
        "region": "Nouvelle-Aquitaine"
      },
      "focusQueries": [
        "Noël à Pau 2026 en famille",
        "marché de Noël Pau enfants"
      ]
    },
    {
      "url": "/articles/vie-pratique/transport-scolaire-en-ardeche-peut-on-utiliser-scolaire-le-week-end-et-pendant-les-vacances/",
      "title": "Transport scolaire en Ardèche: peut-on utiliser Scolaire+ le week-end et pendant les vacances?",
      "category": "vie-pratique",
      "publishedAt": "2026-10-01T17:05:05+02:00",
      "ageDays": 34,
      "peakStart": "2026-10-05",
      "peakEnd": "2026-10-11",
      "recentStart": "2026-10-26",
      "recentEnd": "2026-11-01",
      "peakImpressions": 43,
      "recentImpressions": 5,
      "score": 38,
      "signal": "needs_query_check",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Privas",
        "department": "Ardèche",
        "region": "Auvergne-Rhône-Alpes"
      },
      "focusQueries": [
        "transport scolaire Ardèche 2026 2027",
        "Scolaire+ Mobilité Région Ardèche"
      ]
    },
    {
      "url": "/articles/evenements/exploradome-en-famille-fabriq-expo-tarifs-et-conseils-de-visite/",
      "title": "Exploradôme en famille: Fabriq’Expo, tarifs et conseils de visite",
      "category": "evenements",
      "publishedAt": "2026-09-24T13:58:49+02:00",
      "ageDays": 41,
      "peakStart": "2026-10-16",
      "peakEnd": "2026-10-22",
      "recentStart": "2026-10-26",
      "recentEnd": "2026-11-01",
      "peakImpressions": 37,
      "recentImpressions": 0,
      "score": 37,
      "signal": "needs_query_check",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Vitry-sur-Seine",
        "department": "Val-de-Marne",
        "region": "Île-de-France"
      },
      "focusQueries": [
        "Exploradôme en famille",
        "Fabriq’Expo 2026",
        "musée sciences enfants Val-de-Marne"
      ]
    },
    {
      "url": "/articles/bons-plans/packs-sites-touristiques-ariege-2026/",
      "title": "Packs Ariège 2026: jusqu'à cinq sites au prix de trois",
      "category": "bons-plans",
      "publishedAt": "2026-07-27T10:55:26+02:00",
      "ageDays": 100,
      "peakStart": "2026-10-10",
      "peakEnd": "2026-10-16",
      "recentStart": "2026-10-26",
      "recentEnd": "2026-11-01",
      "peakImpressions": 1,
      "recentImpressions": 0,
      "score": 35.001,
      "signal": "needs_query_check",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Tarascon-sur-Ariège",
        "department": "Ariège",
        "region": "Occitanie"
      },
      "focusQueries": [
        "packs sites touristiques Ariège",
        "visites famille Ariège",
        "tarifs réduits Ariège 2026"
      ]
    },
    {
      "url": "/articles/activites/la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite/",
      "title": "La Cité de la Mer à Cherbourg en famille: tarifs, visite et billets 2026",
      "category": "activites",
      "publishedAt": "2026-08-18T15:06:21+02:00",
      "ageDays": 78,
      "peakStart": "2026-10-19",
      "peakEnd": "2026-10-25",
      "recentStart": "2026-10-26",
      "recentEnd": "2026-11-01",
      "peakImpressions": 85,
      "recentImpressions": 93,
      "score": 35,
      "signal": "needs_query_check",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Cherbourg-en-Cotentin",
        "department": "Manche",
        "region": "Normandie"
      },
      "focusQueries": [
        "Cité de la Mer Cherbourg famille",
        "activité famille Manche"
      ]
    },
    {
      "url": "/articles/evenements/rouen-givree-2026-en-famille-marche-de-noel-et-refuge-givre/",
      "title": "Rouen Givrée 2026 en famille: marché de Noël et Refuge Givré",
      "category": "evenements",
      "publishedAt": "2026-10-14T19:04:18+02:00",
      "ageDays": 21,
      "peakStart": "2026-10-15",
      "peakEnd": "2026-10-21",
      "recentStart": "2026-10-26",
      "recentEnd": "2026-11-01",
      "peakImpressions": 71,
      "recentImpressions": 22,
      "score": 34.3,
      "signal": "needs_query_check",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Baisse d'impressions observée; causalité et classement non établis.",
      "location": {
        "city": "Rouen",
        "department": "Seine-Maritime",
        "region": "Normandie"
      },
      "focusQueries": [
        "Rouen Givrée 2026",
        "marché de Noël Rouen 2026",
        "Refuge Givré Rouen",
        "Noël à Rouen en famille"
      ]
    }
  ],
  "strongPages": [
    {
      "url": "/articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/",
      "title": "Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille",
      "category": "evenements",
      "recentImpressions": 796,
      "recentClicks": 15,
      "recentPosition": 7.043,
      "retention": 0.604
    },
    {
      "url": "/articles/bons-plans/centre-spatial-guyanais-a-kourou-3-experiences-gratuites-et-un-musee-en-famille/",
      "title": "Centre spatial guyanais à Kourou: 3 expériences gratuites et un musée en famille",
      "category": "bons-plans",
      "recentImpressions": 166,
      "recentClicks": 7,
      "recentPosition": 9.181,
      "retention": 4.256
    },
    {
      "url": "/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/",
      "title": "Transports à Paris avec des enfants: quel titre choisir pour payer juste?",
      "category": "voyages",
      "recentImpressions": 2890,
      "recentClicks": 6,
      "recentPosition": 8.726,
      "retention": 1.2
    },
    {
      "url": "/articles/evenements/cirque-de-noel-2026-au-mans-horaires-tarifs-et-seance-a-choisir-avec-des-enfants/",
      "title": "Cirque de Noël 2026 au Mans: horaires, tarifs et séance à choisir avec des enfants",
      "category": "evenements",
      "recentImpressions": 75,
      "recentClicks": 5,
      "recentPosition": 6.507,
      "retention": 2.344
    },
    {
      "url": "/articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/",
      "title": "Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite",
      "category": "sorties",
      "recentImpressions": 294,
      "recentClicks": 4,
      "recentPosition": 8.772,
      "retention": 1.039
    },
    {
      "url": "/articles/sorties/cosquer-mediterranee-avec-des-enfants-age-poussette-tarifs/",
      "title": "Cosquer Méditerranée avec des enfants: que peut-on visiter selon leur âge?",
      "category": "sorties",
      "recentImpressions": 53,
      "recentClicks": 4,
      "recentPosition": 6.491,
      "retention": 0.707
    },
    {
      "url": "/articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/",
      "title": "Mini World Lyon: quel billet choisir en famille et combien de temps prévoir ?",
      "category": "bons-plans",
      "recentImpressions": 377,
      "recentClicks": 3,
      "recentPosition": 8.682,
      "retention": 0.657
    },
    {
      "url": "/articles/cuisine/ou-manger-des-fouees-en-famille-autour-de-saumur/",
      "title": "Où manger des fouées en famille autour de Saumur ?",
      "category": "cuisine",
      "recentImpressions": 283,
      "recentClicks": 3,
      "recentPosition": 10.375,
      "retention": 1.132
    },
    {
      "url": "/articles/maison/recycleries-autour-de-chartres-ou-donner-et-acheter-d-occasion/",
      "title": "Recycleries autour de Chartres: où donner et acheter d'occasion ?",
      "category": "maison",
      "recentImpressions": 129,
      "recentClicks": 2,
      "recentPosition": 7.721,
      "retention": 1.093
    },
    {
      "url": "/articles/maison/encombrants-a-bourges-quand-sortir-meubles-et-gros-objets/",
      "title": "Encombrants à Bourges: quand sortir meubles et gros objets",
      "category": "maison",
      "recentImpressions": 111,
      "recentClicks": 2,
      "recentPosition": 7.541,
      "retention": 1.088
    }
  ],
  "excluded": {
    "expired": 163,
    "cooling": 5
  },
  "warnings": [
    "GSC recherche web : 9069 lignes sur quatre semaines, réponses complètes (1736, 2054, 2466, 2813).",
    "Catalogue Radar : 935 articles et 166 entrées d'historique.",
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
    const declineScore =
      Math.max(0, peak.impressions - recent.impressions) *
      evidence *
      maturity;
    // An article can have search visibility without translating it into clicks.
    // This is only a reason to review its search intent, never proof of a defect.
    const recentPosition = recent.impressions
      ? recent.positionSum / recent.impressions
      : null;
    const clickPotentialScore =
      recentPosition !== null && recentPosition <= 10
        ? Math.max(0, recent.impressions * 0.01 - recent.clicks) *
          10 *
          maturity
        : 0;
    const searchPotential =
      clickPotentialScore > declineScore && clickPotentialScore > 0;
    const score =
      expired || cooling
        ? 0
        : Math.max(declineScore, clickPotentialScore) +
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
      signal: searchPotential ? "search_potential" : "needs_query_check",
      ...(searchPotential
        ? {
            basis: `Page visible avec ${round(recent.impressions)} impressions, ${round(recent.clicks)} clics et une position moyenne de ${round(recentPosition)} sur sept jours; intention de recherche à examiner.`,
            commonQueries: 0,
            positionDelta: null,
            impressionRatio: null,
            focusQueries: (Array.isArray(article.keywords)
              ? article.keywords
              : Array.isArray(article.topic?.keywords)
                ? article.topic.keywords
                : []
            ).slice(0, 5),
          }
        : {}),
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
