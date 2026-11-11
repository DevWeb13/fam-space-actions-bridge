# Radar Fam Space - actualisation GSC

## Mission

Radar surveille en priorité les articles Fam Space qui gagnent rapidement des impressions Google puis les perdent quelques jours plus tard. Il cherche ensuite les autres articles existants à améliorer réellement. Seulement s'il ne trouve aucune amélioration utile, il recherche un événement exceptionnel avec un fort potentiel d'audience et, lorsque c'est naturel, d'affiliation. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

## Snapshot GSC quotidien

Le cache compact est `radar-gsc-snapshot.json` sur `main` de `DevWeb13/fam-space-actions-bridge`. Il ne contient jamais les lignes GSC brutes.

Cette tâche est séparée de la sélection éditoriale. **S'il n'existe aucune branche Radar active et que le snapshot doit être renouvelé, actualise uniquement le snapshot puis termine le passage. Ne choisis pas de mission dans la même exécution.** Le passage horaire suivant effectuera la phase 1 avec le snapshot prêt.

Le snapshot est réutilisable lorsqu'il a `schemaVersion: 1`, a été généré le jour courant en Europe/Paris et que `dataThrough` n'a pas plus de sept jours de retard.

Lorsqu'un nouveau snapshot est nécessaire, utilise Windsor.ai avec le compte `sc-domain:fam-space.fr`, connector `searchconsole`, `include_fresh_data: false`. **Chaque appel `get_data` Search Analytics doit filtrer explicitement `search_type = web` avec `filters: [["search_type","eq","web"]]`.** Récupère 28 jours jusqu'à la dernière journée consolidée:

- une lecture `date, clicks, impressions` pour déterminer la fin réelle;
- quatre lectures consécutives de sept jours `date, page, clicks, impressions, position`;
- appelle `buildRadarShortlist(pageRows, catalog.articles, { now, siteRows, from, history: catalog.history })` pour identifier les cinq premiers candidats. Pour chacun, récupère les requêtes de sa page exacte sur les deux fenêtres `peakStart..peakEnd` et `recentStart..recentEnd`, avec `search_type = web` (dix appels de requêtes au maximum).
- regroupe les réponses par article : `queryPairs = [{ url, peakQueries, recentQueries }]`. Appelle ensuite **`buildRadarSnapshot(pageRows, catalog.articles, { now, siteRows, from, history: catalog.history, warnings }, queryPairs)`**, du module embarqué. Écris son résultat directement dans `radar-gsc-snapshot.json`, sans recopier les métriques manuellement.
- pour les autres articles, le diagnostic reste `needs_query_check` avec des mesures `null`. Si une lecture échoue, signale-le sans inventer de chiffres. Ne confonds jamais « pas de donnée » et zéro.

Utilise uniquement le module Radar embarqué pour présélectionner les candidats et construire le snapshot. La fonction `buildRadarSnapshot` centralise la mise en forme et le diagnostic par article. Une réponse Windsor est considérée complète lorsque `status: done`, que `data` est un tableau et que `total_rows` correspond à `data.length`, sans indicateur explicite de troncature. **Un nombre rond de lignes, notamment 1 500, n'est jamais à lui seul une preuve de plafonnement et ne doit pas arrêter Radar.** Découpe seulement la période si Windsor signale réellement une réponse incomplète/tronquée, si `total_rows` ne correspond pas au nombre de lignes reçues, ou si `unwrapRows` refuse la réponse, notamment à son seuil conservateur de 5 000 lignes par réponse. Un 429, un refus d'accès ou un plafond réellement non résolu termine le passage. Maximum 50 appels `get_data`. Les réponses brutes restent temporaires.

Le snapshot conserve seulement `generatedAt`, `dataThrough`, `from`, la shortlist `refresh` avec ses diagnostics compacts, `strongPages`, `excluded` et les avertissements utiles.

## Snapshot actuellement disponible

{
  "schemaVersion": 1,
  "generatedAt": "2026-11-10T01:34:08+01:00",
  "dataThrough": "2026-11-07",
  "from": "2026-10-11",
  "refresh": [
    {
      "url": "/articles/voyages/disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026/",
      "title": "Disneyland Paris en RER A avec des enfants: trajet et tarifs 2026",
      "category": "voyages",
      "publishedAt": "2026-10-31T04:29:30.562Z",
      "location": {
        "city": "Chessy",
        "department": "Seine-et-Marne",
        "region": "Île-de-France"
      },
      "ageDays": 10,
      "rapidDrop": true,
      "peakStart": "2026-11-01",
      "peakEnd": "2026-11-03",
      "recentStart": "2026-11-05",
      "recentEnd": "2026-11-07",
      "peakImpressions": 35,
      "recentImpressions": 1,
      "score": 102,
      "signal": "uncertain",
      "basis": "Visibilité récente : 35 impressions sur trois jours, puis 1 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "ticket rer a disneyland paris",
        "rer a disney",
        "rer disneyland paris tarif"
      ]
    },
    {
      "url": "/articles/activites/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre/",
      "title": "Grottes de Thouzon avec des enfants: préparer la visite sous terre",
      "category": "activites",
      "publishedAt": "2026-10-04T19:20:54+02:00",
      "location": {
        "city": "Le Thor",
        "department": "Vaucluse",
        "region": "Provence-Alpes-Côte d’Azur"
      },
      "ageDays": 37,
      "rapidDrop": true,
      "peakStart": "2026-10-23",
      "peakEnd": "2026-10-25",
      "recentStart": "2026-11-05",
      "recentEnd": "2026-11-07",
      "peakImpressions": 35,
      "recentImpressions": 5,
      "score": 90,
      "signal": "uncertain",
      "basis": "Visibilité récente : 35 impressions sur trois jours, puis 5 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0.2,
      "focusQueries": [
        "grottes de thouzon",
        "grotte de thouzon",
        "grotte de thouzon tarif",
        "les grottes de thouzon",
        "faut il réserver"
      ]
    },
    {
      "url": "/articles/parentalite/ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille/",
      "title": "Ludothèque du Choletais: jouer sur place et emprunter en famille",
      "category": "parentalite",
      "publishedAt": "2026-10-25T02:35:14+02:00",
      "location": {
        "city": "Cholet",
        "department": "Maine-et-Loire",
        "region": "Pays de la Loire"
      },
      "ageDays": 16,
      "rapidDrop": true,
      "peakStart": "2026-10-28",
      "peakEnd": "2026-10-30",
      "recentStart": "2026-11-05",
      "recentEnd": "2026-11-07",
      "peakImpressions": 28,
      "recentImpressions": 0,
      "score": 84,
      "signal": "uncertain",
      "basis": "Visibilité récente : 28 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "ludothèque",
        "horaire ludothèque cholet",
        "ludothèque du choletais",
        "horaires ludothèque cholet",
        "ludotheqie"
      ]
    },
    {
      "url": "/articles/vie-pratique/colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir/",
      "title": "Colmar avec des enfants quand il pleut: quel musée choisir ?",
      "category": "vie-pratique",
      "publishedAt": "2026-10-19T21:12:31+02:00",
      "location": {
        "city": "Colmar",
        "department": "Haut-Rhin",
        "region": "Grand Est"
      },
      "ageDays": 22,
      "rapidDrop": true,
      "peakStart": "2026-10-21",
      "peakEnd": "2026-10-23",
      "recentStart": "2026-11-05",
      "recentEnd": "2026-11-07",
      "peakImpressions": 40,
      "recentImpressions": 12,
      "score": 84,
      "signal": "uncertain",
      "basis": "Visibilité récente : 40 impressions sur trois jours, puis 12 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 1.25,
      "focusQueries": [
        "musée du jouet colmar tarif",
        "colmar enfant",
        "colmar sous la pluie",
        "que faire à colmar quand il pleut",
        "colmar enfants"
      ]
    },
    {
      "url": "/articles/activites/lac-du-bouchet-en-famille-tour-du-lac-baignade-et-activites/",
      "title": "Lac du Bouchet en famille: tour du lac, baignade et activités",
      "category": "activites",
      "publishedAt": "2026-10-24T14:58:55+02:00",
      "location": {
        "city": "Cayres",
        "department": "Haute-Loire",
        "region": "Auvergne-Rhône-Alpes"
      },
      "ageDays": 17,
      "rapidDrop": true,
      "peakStart": "2026-10-25",
      "peakEnd": "2026-10-27",
      "recentStart": "2026-11-05",
      "recentEnd": "2026-11-07",
      "peakImpressions": 30,
      "recentImpressions": 3,
      "score": 81,
      "signal": "uncertain",
      "basis": "Visibilité récente : 30 impressions sur trois jours, puis 3 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "lac du bouchet",
        "chalet lac du bouchet cayres",
        "tour du lac du bouchet"
      ]
    },
    {
      "url": "/articles/activites/palais-ideal-du-facteur-cheval-en-famille-visite-et-conseils-a-hauterives/",
      "title": "Palais idéal du facteur Cheval en famille: visite et conseils à Hauterives",
      "category": "activites",
      "publishedAt": "2026-10-27T02:02:18+01:00",
      "location": {
        "city": "Hauterives",
        "department": "Drôme",
        "region": "Auvergne-Rhône-Alpes"
      },
      "ageDays": 14,
      "rapidDrop": true,
      "peakStart": "2026-10-28",
      "peakEnd": "2026-10-30",
      "recentStart": "2026-11-05",
      "recentEnd": "2026-11-07",
      "peakImpressions": 29,
      "recentImpressions": 2,
      "score": 81,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 29 impressions sur trois jours, puis 2 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Palais idéal du facteur Cheval en famille",
        "visiter le Palais idéal avec des enfants",
        "Hauterives Drôme sortie famille"
      ]
    },
    {
      "url": "/articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/",
      "title": "Paris avec une poussette: métro, RER, bus ou tram, que choisir ?",
      "category": "voyages",
      "publishedAt": "2026-10-28T12:27:07.504Z",
      "location": {
        "city": "Paris",
        "department": "Paris",
        "region": "Île-de-France"
      },
      "ageDays": 13,
      "rapidDrop": true,
      "peakStart": "2026-10-29",
      "peakEnd": "2026-10-31",
      "recentStart": "2026-11-05",
      "recentEnd": "2026-11-07",
      "peakImpressions": 26,
      "recentImpressions": 0,
      "score": 78,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 26 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "métro Paris poussette ascenseur",
        "RER Paris avec poussette",
        "bus Paris poussette dépliée",
        "itinéraire accessible poussette Paris"
      ]
    },
    {
      "url": "/articles/voyages/banyuls-sur-mer-en-famille-aquarium-et-balade-hors-saison/",
      "title": "Banyuls-sur-Mer en famille: aquarium et balade hors saison",
      "category": "voyages",
      "publishedAt": "2026-10-21T18:13:04+02:00",
      "location": {
        "city": "Banyuls-sur-Mer",
        "department": "Pyrénées-Orientales",
        "region": "Occitanie"
      },
      "ageDays": 20,
      "rapidDrop": true,
      "peakStart": "2026-10-22",
      "peakEnd": "2026-10-24",
      "recentStart": "2026-11-05",
      "recentEnd": "2026-11-07",
      "peakImpressions": 25,
      "recentImpressions": 0,
      "score": 75,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 25 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Banyuls-sur-Mer en famille",
        "aquarium Biodiversarium",
        "Côte Vermeille hors saison"
      ]
    },
    {
      "url": "/articles/bons-plans/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites/",
      "title": "Pass Nantes en famille en 2026: tarifs, visites incluses et alternatives gratuites",
      "category": "bons-plans",
      "publishedAt": "2026-10-27T17:17:43+01:00",
      "location": {
        "city": "Nantes",
        "department": "Loire-Atlantique",
        "region": "Pays de la Loire"
      },
      "ageDays": 14,
      "rapidDrop": true,
      "peakStart": "2026-10-29",
      "peakEnd": "2026-10-31",
      "recentStart": "2026-11-05",
      "recentEnd": "2026-11-07",
      "peakImpressions": 24,
      "recentImpressions": 0,
      "score": 72,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 24 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Pass Nantes en famille 2026",
        "Pass Nantes tarifs famille",
        "Pass Nantes visites incluses",
        "visiter Nantes avec enfants pas cher"
      ]
    },
    {
      "url": "/articles/sorties/aquarium-de-lyon-en-famille-nouveautes-ocean-360-tarifs-et-visite/",
      "title": "Aquarium de Lyon en famille: nouveautés Océan 360°, tarifs et visite",
      "category": "sorties",
      "publishedAt": "2026-10-19T07:22:08+02:00",
      "location": {
        "city": "La Mulatière",
        "department": "Rhône",
        "region": "Auvergne-Rhône-Alpes"
      },
      "ageDays": 22,
      "rapidDrop": true,
      "peakStart": "2026-10-25",
      "peakEnd": "2026-10-27",
      "recentStart": "2026-11-05",
      "recentEnd": "2026-11-07",
      "peakImpressions": 34,
      "recentImpressions": 10,
      "score": 72,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 34 impressions sur trois jours, puis 10 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Aquarium de Lyon en famille",
        "Océan 360 tarifs Aquarium Lyon"
      ]
    },
    {
      "url": "/articles/vie-pratique/hautes-alpes-en-hiver-pneus-chaines-et-etat-des-routes-avant-de-partir/",
      "title": "Hautes-Alpes en hiver: pneus, chaînes et état des routes avant de partir",
      "category": "vie-pratique",
      "publishedAt": "2026-10-18T16:10:12+02:00",
      "location": {
        "city": "Gap",
        "department": "Hautes-Alpes",
        "region": "Provence-Alpes-Côte d’Azur"
      },
      "ageDays": 23,
      "rapidDrop": true,
      "peakStart": "2026-10-23",
      "peakEnd": "2026-10-25",
      "recentStart": "2026-11-05",
      "recentEnd": "2026-11-07",
      "peakImpressions": 36,
      "recentImpressions": 12,
      "score": 72,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 36 impressions sur trois jours, puis 12 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "équipements hiver Hautes-Alpes 2026 2027",
        "chaînes pneus neige Hautes-Alpes",
        "Info Route 05 conditions circulation",
        "routes Hautes-Alpes hiver enfants"
      ]
    },
    {
      "url": "/articles/parentalite/laep-a-bastia-et-en-balagne-deux-lieux-gratuits-pour-les-tout-petits/",
      "title": "LAEP à Bastia et en Balagne: deux lieux gratuits pour les tout-petits",
      "category": "parentalite",
      "publishedAt": "2026-10-11T22:22:18+02:00",
      "location": {
        "city": "Bastia",
        "department": "Haute-Corse",
        "region": "Corse"
      },
      "ageDays": 30,
      "rapidDrop": true,
      "peakStart": "2026-11-02",
      "peakEnd": "2026-11-04",
      "recentStart": "2026-11-05",
      "recentEnd": "2026-11-07",
      "peakImpressions": 27,
      "recentImpressions": 4,
      "score": 69,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 27 impressions sur trois jours, puis 4 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "LAEP Bastia",
        "LAEP Balagne",
        "lieu accueil enfants parents Haute-Corse",
        "A Casa Aperta",
        "A Casa Zitellina"
      ]
    },
    {
      "url": "/articles/voyages/belle-ile-en-mer-en-famille-sans-voiture-ferry-et-deplacements/",
      "title": "Belle-Île-en-Mer en famille sans voiture: ferry et déplacements",
      "category": "voyages",
      "publishedAt": "2026-10-23T23:04:55+02:00",
      "location": {
        "city": "Le Palais",
        "department": "Morbihan",
        "region": "Bretagne"
      },
      "ageDays": 18,
      "rapidDrop": true,
      "peakStart": "2026-10-25",
      "peakEnd": "2026-10-27",
      "recentStart": "2026-11-05",
      "recentEnd": "2026-11-07",
      "peakImpressions": 25,
      "recentImpressions": 2,
      "score": 69,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 25 impressions sur trois jours, puis 2 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Belle-Île-en-Mer en famille sans voiture",
        "ferry Quiberon Le Palais",
        "Belle-Île bus 2026",
        "visiter Belle-Île avec enfants"
      ]
    },
    {
      "url": "/articles/maison/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/",
      "title": "Meubles d'occasion en Meurthe-et-Moselle: où acheter, donner et réparer ?",
      "category": "maison",
      "publishedAt": "2026-10-29T00:59:22+01:00",
      "location": {
        "city": "",
        "department": "Meurthe-et-Moselle",
        "region": "Grand Est"
      },
      "ageDays": 12,
      "rapidDrop": true,
      "peakStart": "2026-10-30",
      "peakEnd": "2026-11-01",
      "recentStart": "2026-11-05",
      "recentEnd": "2026-11-07",
      "peakImpressions": 23,
      "recentImpressions": 1,
      "score": 66,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 23 impressions sur trois jours, puis 1 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "meubles occasion Meurthe-et-Moselle",
        "ressourcerie Nancy",
        "donner meubles 54",
        "Repair Café Lorraine"
      ]
    },
    {
      "url": "/articles/vie-pratique/ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison/",
      "title": "Ludothèques autour de Dinan: emprunter des jeux pour la maison",
      "category": "vie-pratique",
      "publishedAt": "2026-10-30T11:31:33+01:00",
      "location": {
        "city": "",
        "department": "Côtes-d'Armor",
        "region": "Bretagne"
      },
      "ageDays": 11,
      "rapidDrop": true,
      "peakStart": "2026-10-31",
      "peakEnd": "2026-11-02",
      "recentStart": "2026-11-05",
      "recentEnd": "2026-11-07",
      "peakImpressions": 22,
      "recentImpressions": 0,
      "score": 66,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 22 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "ludothèques Dinan",
        "emprunt de jeux",
        "ludothèque Plancoët",
        "ludothèque Plouër-sur-Rance",
        "ludothèque Lanvallay"
      ]
    }
  ],
  "strongPages": [
    {
      "url": "/articles/evenements/cirque-de-noel-2026-au-mans-horaires-tarifs-et-seance-a-choisir-avec-des-enfants/",
      "title": "Cirque de Noël 2026 au Mans: horaires, tarifs et séance à choisir avec des enfants",
      "category": "evenements",
      "recentImpressions": 228,
      "recentClicks": 13,
      "recentPosition": 6.421,
      "retention": 3.864
    },
    {
      "url": "/articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/",
      "title": "Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille",
      "category": "evenements",
      "recentImpressions": 176,
      "recentClicks": 7,
      "recentPosition": 8.102,
      "retention": 1.586
    },
    {
      "url": "/articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/",
      "title": "ALFest 2026 à Annecy en famille: horaires, jeux et braderie",
      "category": "evenements",
      "recentImpressions": 39,
      "recentClicks": 4,
      "recentPosition": 4.821,
      "retention": 1.219
    },
    {
      "url": "/articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/",
      "title": "Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates",
      "category": "vie-pratique",
      "recentImpressions": 224,
      "recentClicks": 3,
      "recentPosition": 5.312,
      "retention": 2.113
    },
    {
      "url": "/articles/vie-pratique/cantine-au-college-dans-le-pas-de-calais-les-tarifs-2026-et-les-reductions-pour-les-boursiers/",
      "title": "Cantine au collège dans le Pas-de-Calais: les tarifs 2026 et les réductions pour les boursiers",
      "category": "vie-pratique",
      "recentImpressions": 143,
      "recentClicks": 3,
      "recentPosition": 5.168,
      "retention": 2.043
    },
    {
      "url": "/articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/",
      "title": "Foire de Dijon 2026 avec les enfants: gratuités, ateliers et Ferme Côte-d'Or",
      "category": "evenements",
      "recentImpressions": 78,
      "recentClicks": 3,
      "recentPosition": 6.654,
      "retention": 2.053
    },
    {
      "url": "/articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/",
      "title": "Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël",
      "category": "evenements",
      "recentImpressions": 65,
      "recentClicks": 3,
      "recentPosition": 6.462,
      "retention": 0.657
    },
    {
      "url": "/articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/",
      "title": "Festival du Livre de Colmar 2026 en famille: dates, horaires et animations jeunesse",
      "category": "evenements",
      "recentImpressions": 55,
      "recentClicks": 3,
      "recentPosition": 7.145,
      "retention": 0.902
    },
    {
      "url": "/articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/",
      "title": "Noël à Pau 2026 en famille: marchés, village et illuminations",
      "category": "evenements",
      "recentImpressions": 44,
      "recentClicks": 3,
      "recentPosition": 6.5,
      "retention": 0.55
    },
    {
      "url": "/articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/",
      "title": "Créations & savoir-faire 2026 à Paris en famille: billets, ateliers et dates",
      "category": "evenements",
      "recentImpressions": 130,
      "recentClicks": 2,
      "recentPosition": 9.754,
      "retention": 0.58
    }
  ],
  "excluded": {
    "expired": 173,
    "cooling": 26
  },
  "warnings": [
    "Diagnostics par requêtes : 5/5.",
    "Les baisses d'impressions ne prouvent ni désindexation ni perte de classement."
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
const view = (sum, days = 7) => ({
  impressions: round(sum.impressions),
  clicks: round(sum.clicks),
  impressionsPerDay: round(sum.impressions / days),
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
    // Three days of growth followed by three consolidated days of decline
    // can be detected before a new page has two full GSC weeks.
    if (end - firstDay < 5) continue;
    const recent = windowSum(days, end - 6, end);
    const recent3 = windowSum(days, end - 2, end);
    let peak3 = empty(), peak3Start = firstDay;
    for (let first = firstDay; first + 2 < end - 2; first++) {
      const sum = windowSum(days, first, first + 2);
      if (sum.impressions > peak3.impressions) {
        peak3 = sum;
        peak3Start = first;
      }
    }
    let peak7 = empty(), peak7Start = firstDay;
    if (end - firstDay >= 13) {
      for (let first = firstDay; first + 6 < end - 6; first++) {
        const sum = windowSum(days, first, first + 6);
        if (sum.impressions > peak7.impressions) {
          peak7 = sum;
          peak7Start = first;
        }
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
    const firstVisible = [...days]
      .filter(([date, values]) => date >= firstDay && values.impressions > 0)
      .map(([date]) => date)
      .sort((a, b) => a - b)[0];
    const newlyVisible =
      ageDays <= 30 ||
      (firstVisible !== undefined && firstVisible > start && end - firstVisible <= 21);
    const rapidDrop =
      newlyVisible &&
      peak3.impressions >= 20 &&
      peak3.impressions - recent3.impressions >= 15 &&
      recent3.impressions <= peak3.impressions * 0.35;
    const weeklyDecline = end - firstDay >= 13
      ? Math.max(0, peak7.impressions - recent.impressions) *
        Math.min(1, peak7.impressions / 35) *
        Math.min(1, total.impressions / 50)
      : 0;
    const rapidScore = rapidDrop ? (peak3.impressions - recent3.impressions) * 3 : 0;
    const recentPosition = recent.impressions
      ? recent.positionSum / recent.impressions
      : null;
    const clickPotentialScore =
      end - firstDay >= 13 && recentPosition !== null && recentPosition <= 10
        ? Math.max(0, recent.impressions * 0.01 - recent.clicks) * 10
        : 0;
    const searchPotential =
      !rapidDrop && clickPotentialScore > weeklyDecline && clickPotentialScore > 0;
    const score =
      expired || cooling
        ? 0
        : Math.max(rapidScore, weeklyDecline, clickPotentialScore) +
          (reviewDue ? 35 : 0);
    // Recent pages must use available, non-overlapping three-day windows.
    const shortWindow = rapidDrop || end - firstDay < 13;
    const peak = shortWindow ? peak3 : peak7;
    const peakStart = shortWindow ? peak3Start : peak7Start;
    const peakDays = shortWindow ? 3 : 7;
    const comparedRecent = shortWindow ? recent3 : recent;
    const comparedRecentStart = shortWindow ? end - 2 : end - 6;
    const retention = peak.impressions
      ? comparedRecent.impressions / peak.impressions
      : 1;
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
      rapidDrop,
      peakStart: isoDay(peakStart),
      peakEnd: isoDay(peakStart + peakDays - 1),
      recentStart: isoDay(comparedRecentStart),
      recentEnd: isoDay(end),
      peak: view(peak, peakDays),
      recent: view(comparedRecent, peakDays),
      retention: round(retention),
      score: round(score),
      signal: searchPotential ? "search_potential" : "needs_query_check",
      basis: rapidDrop
        ? `Visibilité récente : ${round(peak3.impressions)} impressions sur trois jours, puis ${round(recent3.impressions)} sur les trois derniers jours consolidés; cause non établie.`
        : "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.",
      ...(searchPotential
        ? {
            basis: `Page visible avec ${round(recent.impressions)} impressions, ${round(recent.clicks)} clics et une position moyenne de ${round(recentPosition)} sur sept jours; intention de recherche à examiner.`,
            commonQueries: null,
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
      .sort((a, b) =>
        Number(b.rapidDrop && b.category !== "evenements") -
          Number(a.rapidDrop && a.category !== "evenements") ||
        Number(b.rapidDrop) - Number(a.rapidDrop) ||
        b.score - a.score ||
        a.url.localeCompare(b.url))
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
      .sort((a, b) => b.peak.impressions - a.peak.impressions),
    caveat:
      "coverage_loss désigne une baisse d'exposition observée, pas une preuve de désindexation. Les requêtes masquées et la saisonnalité limitent le diagnostic.",
  };
}
// The shortlist ranks pages; only per-page query rows can establish a diagnosis.
export function attachRadarQueryDiagnosis(item, peakResponse, recentResponse) {
  const diagnosis = diagnoseQueries(peakResponse, recentResponse);
  const signal =
    item.signal === "search_potential" && diagnosis.signal === "uncertain"
      ? "search_potential"
      : diagnosis.signal;
  const priority = (query) => {
    const lostImpressions = Math.max(0, query.peak.impressions - query.recent.impressions);
    const lostPositions =
      query.peak.position !== null && query.recent.position !== null
        ? Math.max(0, query.recent.position - query.peak.position)
        : 0;
    if (signal === "rank_loss")
      return query.peak.impressions >= 10 && query.recent.impressions >= 3
        ? lostPositions * Math.min(query.peak.impressions, query.recent.impressions)
        : 0;
    if (signal === "search_potential") return query.recent.impressions;
    return lostImpressions;
  };
  const relevantQueries = diagnosis.queries
    .filter((query) => signal !== "rank_loss" || priority(query) > 0)
    .sort((a, b) => priority(b) - priority(a) || b.peak.impressions - a.peak.impressions)
    .slice(0, 5)
    .map(({ query }) => query);
  const basis =
    item.basis + " " +
    (signal === "rank_loss"
      ? `Recul moyen de ${diagnosis.positionDelta} positions sur ${diagnosis.commonQueries} requête(s) comparable(s).`
      : signal === "coverage_loss"
        ? `Baisse d'exposition sur les requêtes visibles (ratio ${diagnosis.impressionRatio}), sans recul de classement comparable établi.`
        : signal === "search_potential"
          ? "Les requêtes visibles ne démontrent pas une perte de classement."
          : `Diagnostic sur ${diagnosis.commonQueries} requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.`);
  return {
    ...item,
    signal,
    basis,
    commonQueries: diagnosis.commonQueries,
    positionDelta: diagnosis.positionDelta,
    impressionRatio: diagnosis.impressionRatio,
    focusQueries: relevantQueries.length ? relevantQueries : item.focusQueries ?? [],
  };
}


/** Prepare one compact snapshot from one shortlist and per-page query responses. */
export function buildRadarSnapshot(pageRows, catalog, options = {}, queryPairs = []) {
  const shortlist = buildRadarShortlist(pageRows, catalog, options);
  const pairs = new Map(queryPairs.map((pair) => [canonicalPage(pair.url), pair]));
  const refresh = shortlist.refresh.map((candidate, index) => {
    const pair = index < 5 ? pairs.get(candidate.url) : undefined;
    const item = pair
      ? attachRadarQueryDiagnosis(candidate, pair.peakQueries, pair.recentQueries)
      : candidate;
    return {
      url: item.url,
      title: item.title,
      category: item.category,
      publishedAt: item.publishedAt,
      location: item.location,
      ageDays: item.ageDays,
      rapidDrop: item.rapidDrop,
      peakStart: item.peakStart,
      peakEnd: item.peakEnd,
      recentStart: item.recentStart,
      recentEnd: item.recentEnd,
      peakImpressions: item.peak.impressions,
      recentImpressions: item.recent.impressions,
      score: item.score,
      signal: item.signal,
      basis: item.basis,
      commonQueries: item.commonQueries ?? null,
      positionDelta: item.positionDelta ?? null,
      impressionRatio: item.impressionRatio ?? null,
      focusQueries: item.focusQueries ?? item.keywords.slice(0, 5),
    };
  });
  return {
    schemaVersion: 1,
    generatedAt: options.now ?? new Date().toISOString(),
    dataThrough: shortlist.dataThrough,
    from: shortlist.from,
    refresh,
    strongPages: shortlist.strongPages.map((item) => ({
      url: item.url,
      title: item.title,
      category: item.category,
      recentImpressions: item.recent.impressions,
      recentClicks: item.recent.clicks,
      recentPosition: item.recent.position,
      retention: item.retention,
    })),
    excluded: shortlist.excluded,
    warnings: [
      ...(options.warnings ?? []),
      `Diagnostics par requêtes : ${refresh.slice(0, 5).filter((item) => item.signal !== "needs_query_check" && item.commonQueries !== null).length}/${Math.min(5, refresh.length)}.`,
      "Les baisses d'impressions ne prouvent ni désindexation ni perte de classement.",
    ],
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
