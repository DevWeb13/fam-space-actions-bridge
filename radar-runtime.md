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
  "generatedAt": "2026-10-10T03:52:00.000Z",
  "dataThrough": "2026-10-06",
  "from": "2026-09-09",
  "refresh": [
    {
      "url": "/articles/sorties/aquarium-reunion-fermeture-2026-visite-famille/",
      "title": "Aquarium de La Réunion fermé depuis le 17 août 2026: quand pourra-t-on revenir en famille ?",
      "category": "sorties",
      "location": {
        "city": "Saint-Gilles-les-Bains",
        "department": "La Réunion",
        "region": "La Réunion"
      },
      "publishedAt": "2026-07-22T11:57:00+02:00",
      "ageDays": 80,
      "peakStart": "2026-09-10",
      "peakEnd": "2026-09-16",
      "recentStart": "2026-09-30",
      "recentEnd": "2026-10-06",
      "peakImpressions": 233,
      "recentImpressions": 28,
      "score": 205,
      "signal": "uncertain",
      "basis": "Baisse non attribuable au classement; 0 requêtes comparables.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0.833,
      "focusQueries": [
        "aquarium de la réunion tarifs 2026 officiel",
        "aquarium de la réunion tarifs 2026",
        "aquarium de la réunion",
        "aquarium st gilles",
        "warum geschlossen"
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
      "ageDays": 28,
      "peakStart": "2026-09-14",
      "peakEnd": "2026-09-20",
      "recentStart": "2026-09-30",
      "recentEnd": "2026-10-06",
      "peakImpressions": 195,
      "recentImpressions": 6,
      "score": 176.4,
      "signal": "uncertain",
      "basis": "Baisse non attribuable au classement; 0 requêtes comparables.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "carte tatoo",
        "carte tattoo isère montant",
        "carte tattoo",
        "carte tattoo montant",
        "montant carte tatoo"
      ]
    },
    {
      "url": "/articles/parentalite/educonnect-pour-les-parents-activer-son-compte-et-retrouver-les-demarches-scolaires/",
      "title": "EduConnect pour les parents: activer son compte et retrouver les démarches scolaires",
      "category": "parentalite",
      "publishedAt": "2026-09-12T20:02:41+02:00",
      "ageDays": 28,
      "peakStart": "2026-09-15",
      "peakEnd": "2026-09-21",
      "recentStart": "2026-09-30",
      "recentEnd": "2026-10-06",
      "peakImpressions": 209,
      "recentImpressions": 41,
      "score": 156.8,
      "signal": "uncertain",
      "basis": "Diagnostic requêtes non collecté pour ce candidat; contrôle obligatoire avant refresh.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": []
    },
    {
      "url": "/articles/parentalite/petite-section-peut-on-alleger-les-apres-midis-a-l-ecole-maternelle/",
      "title": "Petite section: peut-on alléger les après-midis à l'école maternelle?",
      "category": "parentalite",
      "publishedAt": "2026-08-28T12:03:36+02:00",
      "ageDays": 43,
      "peakStart": "2026-09-15",
      "peakEnd": "2026-09-21",
      "recentStart": "2026-09-30",
      "recentEnd": "2026-10-06",
      "peakImpressions": 211,
      "recentImpressions": 57,
      "score": 154,
      "signal": "uncertain",
      "basis": "Diagnostic requêtes non collecté pour ce candidat; contrôle obligatoire avant refresh.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": []
    },
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
      "ageDays": 27,
      "peakStart": "2026-09-16",
      "peakEnd": "2026-09-22",
      "recentStart": "2026-09-30",
      "recentEnd": "2026-10-06",
      "peakImpressions": 182,
      "recentImpressions": 31,
      "score": 135.9,
      "signal": "uncertain",
      "basis": "Diagnostic requêtes non collecté pour ce candidat; contrôle obligatoire avant refresh.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": []
    },
    {
      "url": "/articles/bons-plans/carte-top-dep-art-comment-utiliser-les-45-et-les-4-sorties-offertes-dans-la-drome/",
      "title": "Carte Top Dép'Art: comment utiliser les 45 € et les 4 sorties offertes dans la Drôme",
      "category": "bons-plans",
      "location": {
        "city": "Valence",
        "department": "Drôme",
        "region": "Auvergne-Rhône-Alpes"
      },
      "publishedAt": "2026-09-04T18:01:50+02:00",
      "ageDays": 36,
      "peakStart": "2026-09-13",
      "peakEnd": "2026-09-19",
      "recentStart": "2026-09-30",
      "recentEnd": "2026-10-06",
      "peakImpressions": 118,
      "recentImpressions": 0,
      "score": 118,
      "signal": "uncertain",
      "basis": "Diagnostic requêtes non collecté pour ce candidat; contrôle obligatoire avant refresh.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": []
    },
    {
      "url": "/articles/parentalite/laep-a-grenoble-ou-aller-avec-un-enfant-de-moins-de-6-ans/",
      "title": "LAEP à Grenoble: où aller avec un enfant de moins de 6 ans?",
      "category": "parentalite",
      "location": {
        "city": "Grenoble",
        "department": "Isère",
        "region": "Auvergne-Rhône-Alpes"
      },
      "publishedAt": "2026-09-05T09:59:12+02:00",
      "ageDays": 35,
      "peakStart": "2026-09-14",
      "peakEnd": "2026-09-20",
      "recentStart": "2026-09-30",
      "recentEnd": "2026-10-06",
      "peakImpressions": 142,
      "recentImpressions": 31,
      "score": 111,
      "signal": "uncertain",
      "basis": "Diagnostic requêtes non collecté pour ce candidat; contrôle obligatoire avant refresh.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
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
      "ageDays": 36,
      "peakStart": "2026-09-14",
      "peakEnd": "2026-09-20",
      "recentStart": "2026-09-30",
      "recentEnd": "2026-10-06",
      "peakImpressions": 108,
      "recentImpressions": 1,
      "score": 107,
      "signal": "uncertain",
      "basis": "Diagnostic requêtes non collecté pour ce candidat; contrôle obligatoire avant refresh.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": []
    },
    {
      "url": "/articles/vie-pratique/demenagement-comment-changer-d-ecole-maternelle-ou-elementaire-sans-rater-une-etape/",
      "title": "Déménagement: comment changer d'école maternelle ou élémentaire sans rater une étape",
      "category": "vie-pratique",
      "publishedAt": "2026-09-03T08:02:20+02:00",
      "ageDays": 37,
      "peakStart": "2026-09-15",
      "peakEnd": "2026-09-21",
      "recentStart": "2026-09-30",
      "recentEnd": "2026-10-06",
      "peakImpressions": 112,
      "recentImpressions": 6,
      "score": 106,
      "signal": "uncertain",
      "basis": "Diagnostic requêtes non collecté pour ce candidat; contrôle obligatoire avant refresh.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
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
      "ageDays": 35,
      "peakStart": "2026-09-15",
      "peakEnd": "2026-09-21",
      "recentStart": "2026-09-30",
      "recentEnd": "2026-10-06",
      "peakImpressions": 141,
      "recentImpressions": 35,
      "score": 106,
      "signal": "uncertain",
      "basis": "Diagnostic requêtes non collecté pour ce candidat; contrôle obligatoire avant refresh.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": []
    },
    {
      "url": "/articles/vie-pratique/quel-ticket-twisto-choisir-a-caen-avec-des-enfants/",
      "title": "Quel ticket Twisto choisir à Caen avec des enfants?",
      "category": "vie-pratique",
      "location": {
        "city": "Caen",
        "department": "Calvados",
        "region": "Normandie"
      },
      "publishedAt": "2026-09-07T11:04:46+02:00",
      "ageDays": 33,
      "peakStart": "2026-09-13",
      "peakEnd": "2026-09-19",
      "recentStart": "2026-09-30",
      "recentEnd": "2026-10-06",
      "peakImpressions": 154,
      "recentImpressions": 49,
      "score": 105,
      "signal": "uncertain",
      "basis": "Diagnostic requêtes non collecté pour ce candidat; contrôle obligatoire avant refresh.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": []
    },
    {
      "url": "/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/",
      "title": "Transports à Paris avec des enfants: quel titre choisir pour payer juste?",
      "category": "voyages",
      "location": {
        "city": "Paris",
        "department": "Paris",
        "region": "Île-de-France"
      },
      "publishedAt": "2026-08-29T00:00:45+02:00",
      "ageDays": 42,
      "peakStart": "2026-09-18",
      "peakEnd": "2026-09-24",
      "recentStart": "2026-09-30",
      "recentEnd": "2026-10-06",
      "peakImpressions": 958,
      "recentImpressions": 858,
      "score": 100,
      "signal": "uncertain",
      "basis": "Diagnostic requêtes non collecté pour ce candidat; contrôle obligatoire avant refresh.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": []
    },
    {
      "url": "/articles/bons-plans/musees-gratuits-autour-de-rouen-lesquels-choisir-avec-des-enfants/",
      "title": "Musées gratuits autour de Rouen: lesquels choisir avec des enfants ?",
      "category": "bons-plans",
      "location": {
        "city": "Rouen",
        "department": "Seine-Maritime",
        "region": "Normandie"
      },
      "publishedAt": "2026-09-08T22:03:31+02:00",
      "ageDays": 32,
      "peakStart": "2026-09-14",
      "peakEnd": "2026-09-20",
      "recentStart": "2026-09-30",
      "recentEnd": "2026-10-06",
      "peakImpressions": 110,
      "recentImpressions": 12,
      "score": 98,
      "signal": "uncertain",
      "basis": "Diagnostic requêtes non collecté pour ce candidat; contrôle obligatoire avant refresh.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": []
    },
    {
      "url": "/articles/evenements/foire-de-la-barguillere-a-foix-samedi-ou-dimanche-avec-des-enfants/",
      "title": "Foire de la Barguillère à Foix: samedi ou dimanche avec des enfants ?",
      "category": "evenements",
      "location": {
        "city": "Foix",
        "department": "Ariège",
        "region": "Occitanie"
      },
      "publishedAt": "2026-09-10T00:02:43+02:00",
      "ageDays": 30,
      "peakStart": "2026-09-13",
      "peakEnd": "2026-09-19",
      "recentStart": "2026-09-30",
      "recentEnd": "2026-10-06",
      "peakImpressions": 262,
      "recentImpressions": 164,
      "score": 98,
      "signal": "uncertain",
      "basis": "Diagnostic requêtes non collecté pour ce candidat; contrôle obligatoire avant refresh.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
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
      "ageDays": 33,
      "peakStart": "2026-09-14",
      "peakEnd": "2026-09-20",
      "recentStart": "2026-09-30",
      "recentEnd": "2026-10-06",
      "peakImpressions": 165,
      "recentImpressions": 67,
      "score": 98,
      "signal": "uncertain",
      "basis": "Diagnostic requêtes non collecté pour ce candidat; contrôle obligatoire avant refresh.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": []
    }
  ],
  "strongPages": [
    {
      "url": "/articles/evenements/ci-t-as-la-trouille-2026-a-saint-jean-de-monts-que-faire-et-que-reserver/",
      "title": "Ci t’as la trouille 2026 à Saint-Jean-de-Monts: que faire et que réserver ?",
      "category": "evenements",
      "location": {
        "city": "Saint-Jean-de-Monts",
        "department": "Vendée",
        "region": "Pays de la Loire"
      },
      "recentImpressions": 51,
      "recentClicks": 6,
      "recentPosition": 5.157,
      "retention": 1.962
    },
    {
      "url": "/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/",
      "title": "Transports à Paris avec des enfants: quel titre choisir pour payer juste?",
      "category": "voyages",
      "location": {
        "city": "Paris",
        "department": "Paris",
        "region": "Île-de-France"
      },
      "recentImpressions": 858,
      "recentClicks": 3,
      "recentPosition": 8.671,
      "retention": 0.896
    },
    {
      "url": "/articles/bons-plans/carte-avantage-adulte-sncf-quand-est-elle-interessante-avec-des-enfants/",
      "title": "Carte Avantage Adulte SNCF: quand est-elle intéressante avec des enfants?",
      "category": "bons-plans",
      "recentImpressions": 204,
      "recentClicks": 3,
      "recentPosition": 8.549,
      "retention": 1.166
    },
    {
      "url": "/articles/evenements/foire-de-la-barguillere-a-foix-samedi-ou-dimanche-avec-des-enfants/",
      "title": "Foire de la Barguillère à Foix: samedi ou dimanche avec des enfants ?",
      "category": "evenements",
      "location": {
        "city": "Foix",
        "department": "Ariège",
        "region": "Occitanie"
      },
      "recentImpressions": 164,
      "recentClicks": 3,
      "recentPosition": 8.128,
      "retention": 0.626
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
      "recentImpressions": 344,
      "recentClicks": 2,
      "recentPosition": 7.756,
      "retention": 5.292
    },
    {
      "url": "/articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/",
      "title": "Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite",
      "category": "sorties",
      "location": {
        "city": "Paris",
        "department": "Paris",
        "region": "Île-de-France"
      },
      "recentImpressions": 129,
      "recentClicks": 2,
      "recentPosition": 7.388,
      "retention": 1.29
    },
    {
      "url": "/articles/evenements/quai-des-bulles-2026-a-saint-malo-en-famille-tarifs-programme-et-conseils/",
      "title": "Quai des Bulles 2026 à Saint-Malo en famille: tarifs, programme et conseils",
      "category": "evenements",
      "location": {
        "city": "Saint-Malo",
        "department": "Ille-et-Vilaine",
        "region": "Bretagne"
      },
      "recentImpressions": 76,
      "recentClicks": 2,
      "recentPosition": 6.421,
      "retention": 1.949
    },
    {
      "url": "/articles/maison/decheteries-de-caen-la-mer-qr-code-ou-plaque-obligatoires-depuis-septembre-2026/",
      "title": "Déchèteries de Caen la mer: QR code ou plaque obligatoires depuis septembre 2026",
      "category": "maison",
      "location": {
        "city": "Caen",
        "department": "Calvados",
        "region": "Normandie"
      },
      "recentImpressions": 65,
      "recentClicks": 1,
      "recentPosition": 8.708,
      "retention": 0.813
    },
    {
      "url": "/articles/sorties/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets/",
      "title": "Parc Spirou avec de jeunes enfants: regardez la taille avant d'acheter les billets",
      "category": "sorties",
      "location": {
        "city": "Monteux",
        "department": "Vaucluse",
        "region": "Provence-Alpes-Côte d’Azur"
      },
      "recentImpressions": 53,
      "recentClicks": 1,
      "recentPosition": 7.283,
      "retention": 0.589
    },
    {
      "url": "/articles/sorties/mucem-en-famille-billets-gratuites-et-conseils-pour-la-visite/",
      "title": "Mucem Marseille en famille: tarifs 2026, billets et gratuités",
      "category": "sorties",
      "location": {
        "city": "Marseille",
        "department": "Bouches-du-Rhône",
        "region": "Provence-Alpes-Côte d'Azur"
      },
      "recentImpressions": 51,
      "recentClicks": 1,
      "recentPosition": 9,
      "retention": 0.548
    }
  ],
  "excluded": {
    "expired": 73,
    "cooling": 7
  },
  "warnings": [
    "Recherche web uniquement. Les lignes absentes valent zéro dans les données retournées; certaines requêtes GSC sont masquées.",
    "Seuls les deux premiers refresh disposent du diagnostic de requêtes de cette collecte. Les autres ne doivent pas être sélectionnés sans diagnostic complémentaire.",
    "uncertain ne prouve ni désindexation ni perte de classement."
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
