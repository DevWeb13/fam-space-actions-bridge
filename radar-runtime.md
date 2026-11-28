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
  "generatedAt": "2026-11-27T09:15:00+01:00",
  "dataThrough": "2026-11-25",
  "from": "2026-10-29",
  "refresh": [
    {
      "url": "/articles/activites/parc-phoenix-a-nice-en-famille-serre-tropicale-animaux-et-jeux/",
      "title": "Parc Phoenix à Nice en famille: serre tropicale, animaux et jeux",
      "category": "activites",
      "publishedAt": "2026-11-15T00:25:33+01:00",
      "location": {
        "city": "Nice",
        "department": "Alpes-Maritimes",
        "region": "Provence-Alpes-Côte d’Azur"
      },
      "ageDays": 12,
      "rapidDrop": true,
      "peakStart": "2026-11-16",
      "peakEnd": "2026-11-18",
      "recentStart": "2026-11-23",
      "recentEnd": "2026-11-25",
      "peakImpressions": 22,
      "recentImpressions": 0,
      "score": 66,
      "signal": "uncertain",
      "basis": "Visibilité récente : 22 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "avis sur parc phœnix",
        "nice phoenix",
        "oui",
        "parc phenix nice",
        "parc pheonix"
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
      "ageDays": 29,
      "rapidDrop": true,
      "peakStart": "2026-10-30",
      "peakEnd": "2026-11-01",
      "recentStart": "2026-11-23",
      "recentEnd": "2026-11-25",
      "peakImpressions": 23,
      "recentImpressions": 2,
      "score": 63,
      "signal": "uncertain",
      "basis": "Visibilité récente : 23 impressions sur trois jours, puis 2 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "achat vente meuble moselle",
        "emmaüs meuble",
        "magasin occasion meuble",
        "depot meubles occasion",
        "magasin de meuble de seconde main"
      ]
    },
    {
      "url": "/articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/",
      "title": "Atelier Pokémon et biodiversité à Paris le 28 novembre 2026: dessin dès 10 ans",
      "category": "activites",
      "publishedAt": "2026-11-05T10:32:54.370Z",
      "location": {
        "city": "Paris",
        "department": "Paris",
        "region": "Île-de-France"
      },
      "ageDays": 22,
      "rapidDrop": true,
      "peakStart": "2026-11-17",
      "peakEnd": "2026-11-19",
      "recentStart": "2026-11-23",
      "recentEnd": "2026-11-25",
      "peakImpressions": 23,
      "recentImpressions": 8,
      "score": 45,
      "signal": "uncertain",
      "basis": "Visibilité récente : 23 impressions sur trois jours, puis 8 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": []
    },
    {
      "url": "/articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/",
      "title": "Lumières de Laval 2026 en famille: balade gratuite, marchés, roue et croisière",
      "category": "evenements",
      "publishedAt": "2026-10-30T09:27:15.012Z",
      "location": {
        "city": "Laval",
        "department": "Mayenne",
        "region": "Pays de la Loire"
      },
      "ageDays": 28,
      "rapidDrop": true,
      "peakStart": "2026-11-01",
      "peakEnd": "2026-11-03",
      "recentStart": "2026-11-23",
      "recentEnd": "2026-11-25",
      "peakImpressions": 228,
      "recentImpressions": 14,
      "score": 677,
      "signal": "uncertain",
      "basis": "Visibilité récente : 228 impressions sur trois jours, puis 14 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "date illumination laval 2026",
        "illumination laval 2026",
        "illuminations laval 2026",
        "laval illumination 2026",
        "illumination de noel laval 2026"
      ]
    },
    {
      "url": "/articles/evenements/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants/",
      "title": "Fontaines dansantes d'hiver à Metz 2026-2027: dates, horaires et conseils en famille",
      "category": "evenements",
      "publishedAt": "2026-11-03T06:32:33.518Z",
      "location": {
        "city": "Metz",
        "department": "Moselle",
        "region": "Grand Est"
      },
      "ageDays": 24,
      "rapidDrop": true,
      "peakStart": "2026-11-20",
      "peakEnd": "2026-11-22",
      "recentStart": "2026-11-23",
      "recentEnd": "2026-11-25",
      "peakImpressions": 320,
      "recentImpressions": 112,
      "score": 624,
      "signal": "uncertain",
      "basis": "Visibilité récente : 320 impressions sur trois jours, puis 112 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 1 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 1,
      "positionDelta": -1.659,
      "impressionRatio": 0.846,
      "focusQueries": [
        "fontaine dansante metz 2026",
        "fontaines dansantes metz",
        "fontaines dansantes metz 2026",
        "combien de temps ça dure ?",
        "fontaine dansante metz horaires"
      ]
    },
    {
      "url": "/articles/evenements/flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille/",
      "title": "Flottins d’Évian 2026: un village de Noël en bois flotté à découvrir en famille",
      "category": "evenements",
      "publishedAt": "2026-10-30T00:37:19+01:00",
      "location": {
        "city": "Évian-les-Bains",
        "department": "Haute-Savoie",
        "region": "Auvergne-Rhône-Alpes"
      },
      "ageDays": 28,
      "rapidDrop": true,
      "peakStart": "2026-11-01",
      "peakEnd": "2026-11-03",
      "recentStart": "2026-11-23",
      "recentEnd": "2026-11-25",
      "peakImpressions": 155,
      "recentImpressions": 33,
      "score": 366,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 155 impressions sur trois jours, puis 33 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Flottins Évian 2026",
        "Fabuleux Village en famille",
        "Noël Haute-Savoie"
      ]
    },
    {
      "url": "/articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/",
      "title": "Marché de Noël 100 % Côte-d’Or à Dijon 2026: horaires, spectacles et Père Noël",
      "category": "evenements",
      "publishedAt": "2026-10-29T14:26:32.176Z",
      "location": {
        "city": "Dijon",
        "department": "Côte-d'Or",
        "region": "Bourgogne-Franche-Comté"
      },
      "ageDays": 29,
      "rapidDrop": true,
      "peakStart": "2026-11-01",
      "peakEnd": "2026-11-03",
      "recentStart": "2026-11-23",
      "recentEnd": "2026-11-25",
      "peakImpressions": 22,
      "recentImpressions": 2,
      "score": 60,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 22 impressions sur trois jours, puis 2 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "marché de Noël du Département Dijon 2026",
        "marché de Noël 100 % Côte-d'Or 12 13 décembre",
        "Jardins du Département Dijon Noël enfants",
        "spectacles ateliers gratuits Père Noël Dijon"
      ]
    },
    {
      "url": "/articles/evenements/ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans/",
      "title": "Écoute, je danse ! à Paris le 5 décembre 2026: spectacle gratuit dès 6 mois",
      "category": "evenements",
      "publishedAt": "2026-11-04T21:32:12.084Z",
      "location": {
        "city": "Paris",
        "department": "Paris",
        "region": "Île-de-France"
      },
      "ageDays": 23,
      "rapidDrop": true,
      "peakStart": "2026-11-09",
      "peakEnd": "2026-11-11",
      "recentStart": "2026-11-23",
      "recentEnd": "2026-11-25",
      "peakImpressions": 20,
      "recentImpressions": 1,
      "score": 57,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 20 impressions sur trois jours, puis 1 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Écoute je danse Paris décembre 2026",
        "spectacle gratuit bébé Paris 5 décembre",
        "bibliothèque Gutenberg spectacle 6 mois 3 ans"
      ]
    },
    {
      "url": "/articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/",
      "title": "Noël 2026 à Chantilly: Le Noël oublié, billets et séances en famille",
      "category": "evenements",
      "publishedAt": "2026-10-26T21:31:06.019Z",
      "location": {
        "city": "Chantilly",
        "department": "Oise",
        "region": "Hauts-de-France"
      },
      "ageDays": 32,
      "rapidDrop": false,
      "peakStart": "2026-10-29",
      "peakEnd": "2026-11-04",
      "recentStart": "2026-11-19",
      "recentEnd": "2026-11-25",
      "peakImpressions": 278,
      "recentImpressions": 36,
      "score": 242,
      "signal": "needs_query_check",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Noël château de Chantilly 2026",
        "Le Noël oublié spectacle équestre",
        "billet spectacle Noël Chantilly famille"
      ]
    },
    {
      "url": "/articles/bons-plans/carte-avantage-adulte-sncf-quand-est-elle-interessante-avec-des-enfants/",
      "title": "Carte Avantage Adulte SNCF: quand est-elle intéressante avec des enfants?",
      "category": "bons-plans",
      "publishedAt": "2026-08-29T16:41:39+02:00",
      "ageDays": 90,
      "rapidDrop": false,
      "peakStart": "2026-11-11",
      "peakEnd": "2026-11-17",
      "recentStart": "2026-11-19",
      "recentEnd": "2026-11-25",
      "peakImpressions": 572,
      "recentImpressions": 407,
      "score": 165,
      "signal": "needs_query_check",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Carte Avantage Adulte SNCF",
        "réduction train famille"
      ]
    },
    {
      "url": "/articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/",
      "title": "Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille",
      "category": "evenements",
      "publishedAt": "2026-10-16T17:46:42.359Z",
      "location": {
        "city": "Lumigny-Nesles-Ormeaux",
        "department": "Seine-et-Marne",
        "region": "Île-de-France"
      },
      "ageDays": 42,
      "rapidDrop": false,
      "peakStart": "2026-10-29",
      "peakEnd": "2026-11-04",
      "recentStart": "2026-11-19",
      "recentEnd": "2026-11-25",
      "peakImpressions": 600,
      "recentImpressions": 451,
      "score": 149,
      "signal": "needs_query_check",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Lumigny Safari de Lumières 2026 2027",
        "Safari de Lumières Lumigny tarifs famille",
        "Lumigny Safari de Lumières billet combiné"
      ]
    },
    {
      "url": "/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/",
      "title": "Transports à Paris avec des enfants: quel titre choisir pour payer juste?",
      "category": "voyages",
      "publishedAt": "2026-08-29T00:00:45+02:00",
      "location": {
        "city": "Paris",
        "department": "Paris",
        "region": "Île-de-France"
      },
      "ageDays": 90,
      "rapidDrop": false,
      "peakStart": "2026-10-29",
      "peakEnd": "2026-11-04",
      "recentStart": "2026-11-19",
      "recentEnd": "2026-11-25",
      "peakImpressions": 1599,
      "recentImpressions": 1470,
      "score": 129,
      "signal": "needs_query_check",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "transport Paris avec enfants",
        "Paris Visite ou Navigo famille"
      ]
    },
    {
      "url": "/articles/evenements/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales/",
      "title": "Fêtes de l’Ours 2027: quelle fête choisir en famille dans les Pyrénées-Orientales ?",
      "category": "evenements",
      "publishedAt": "2026-11-05T05:04:01+01:00",
      "location": {
        "city": "",
        "department": "Pyrénées-Orientales",
        "region": "Occitanie"
      },
      "ageDays": 22,
      "rapidDrop": false,
      "peakStart": "2026-11-10",
      "peakEnd": "2026-11-16",
      "recentStart": "2026-11-19",
      "recentEnd": "2026-11-25",
      "peakImpressions": 402,
      "recentImpressions": 284,
      "score": 118,
      "signal": "needs_query_check",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Fêtes de l’Ours 2027",
        "Fête de l’Ours Pyrénées-Orientales en famille",
        "Haut-Vallespir carnaval"
      ]
    },
    {
      "url": "/articles/bons-plans/parc-floral-d-orleans-gratuit-en-hiver-horaires-et-sortie-avec-les-enfants/",
      "title": "Parc floral d’Orléans gratuit en hiver: horaires et sortie avec les enfants",
      "category": "bons-plans",
      "publishedAt": "2026-10-26T22:02:51+01:00",
      "location": {
        "city": "Orléans",
        "department": "Loiret",
        "region": "Centre-Val de Loire"
      },
      "ageDays": 32,
      "rapidDrop": false,
      "peakStart": "2026-10-29",
      "peakEnd": "2026-11-04",
      "recentStart": "2026-11-19",
      "recentEnd": "2026-11-25",
      "peakImpressions": 117,
      "recentImpressions": 13,
      "score": 104,
      "signal": "needs_query_check",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Parc floral Orléans gratuit hiver 2026 2027",
        "Parc floral de La Source enfants",
        "sortie gratuite famille Loiret"
      ]
    },
    {
      "url": "/articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/",
      "title": "Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite",
      "category": "sorties",
      "publishedAt": "2026-08-23T10:46:58+02:00",
      "location": {
        "city": "Paris",
        "department": "Paris",
        "region": "Île-de-France"
      },
      "ageDays": 96,
      "rapidDrop": false,
      "peakStart": "2026-11-09",
      "peakEnd": "2026-11-15",
      "recentStart": "2026-11-19",
      "recentEnd": "2026-11-25",
      "peakImpressions": 484,
      "recentImpressions": 404,
      "score": 80,
      "signal": "needs_query_check",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Cité des sciences en famille",
        "Cité des enfants Paris"
      ]
    }
  ],
  "strongPages": [
    {
      "url": "/articles/evenements/cirque-de-noel-2026-au-mans-horaires-tarifs-et-seance-a-choisir-avec-des-enfants/",
      "title": "Cirque de Noël 2026 au Mans: horaires, tarifs et séance à choisir avec des enfants",
      "category": "evenements",
      "recentImpressions": 379,
      "recentClicks": 18,
      "recentPosition": 7.158,
      "retention": 1.349
    },
    {
      "url": "/articles/evenements/gastronomades-2026-a-angouleme-en-famille-faut-il-prevoir-le-week-end/",
      "title": "Gastronomades 2026 à Angoulême en famille: programme, tarifs et conseils",
      "category": "evenements",
      "recentImpressions": 584,
      "recentClicks": 16,
      "recentPosition": 5.993,
      "retention": 2.014
    },
    {
      "url": "/articles/evenements/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales/",
      "title": "Fêtes de l’Ours 2027: quelle fête choisir en famille dans les Pyrénées-Orientales ?",
      "category": "evenements",
      "recentImpressions": 284,
      "recentClicks": 11,
      "recentPosition": 3.641,
      "retention": 0.706
    },
    {
      "url": "/articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/",
      "title": "Noël 2026 au château de Goulaine: dates, billets et conseils en famille",
      "category": "evenements",
      "recentImpressions": 352,
      "recentClicks": 8,
      "recentPosition": 7.236,
      "retention": 1.53
    },
    {
      "url": "/articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/",
      "title": "Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille",
      "category": "evenements",
      "recentImpressions": 451,
      "recentClicks": 7,
      "recentPosition": 7.506,
      "retention": 0.752
    },
    {
      "url": "/articles/maison/dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage/",
      "title": "Déchets verts à Toulouse Métropole en 2027: collecte, broyage et évacuation des gros volumes",
      "category": "maison",
      "recentImpressions": 101,
      "recentClicks": 7,
      "recentPosition": 6.198,
      "retention": 0.935
    },
    {
      "url": "/articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/",
      "title": "Noël à Trévarez 2026 en famille: dates, horaires et réservation",
      "category": "evenements",
      "recentImpressions": 1371,
      "recentClicks": 6,
      "recentPosition": 8.699,
      "retention": 5.193
    },
    {
      "url": "/articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/",
      "title": "Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille",
      "category": "evenements",
      "recentImpressions": 439,
      "recentClicks": 6,
      "recentPosition": 6.923,
      "retention": 1.035
    },
    {
      "url": "/articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/",
      "title": "Salon du Cheval de Paris 2026 en famille: ateliers, jumping et Nuit du Cheval",
      "category": "evenements",
      "recentImpressions": 144,
      "recentClicks": 6,
      "recentPosition": 7.451,
      "retention": 2.939
    },
    {
      "url": "/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/",
      "title": "Transports à Paris avec des enfants: quel titre choisir pour payer juste?",
      "category": "voyages",
      "recentImpressions": 1470,
      "recentClicks": 5,
      "recentPosition": 8.401,
      "retention": 0.919
    }
  ],
  "excluded": {
    "expired": 198,
    "cooling": 71
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
