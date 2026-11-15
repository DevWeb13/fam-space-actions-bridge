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
  "generatedAt": "2026-11-14T03:26:00+01:00",
  "dataThrough": "2026-11-10",
  "from": "2026-10-14",
  "refresh": [
    {
      "url": "/articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/",
      "title": "Grand Noël 2026 à Vaux-le-Vicomte en famille: billets, offre enfant et animations",
      "category": "evenements",
      "publishedAt": "2026-10-20T22:29:05.320Z",
      "location": {
        "city": "Maincy",
        "department": "Seine-et-Marne",
        "region": "Île-de-France"
      },
      "ageDays": 25,
      "rapidDrop": true,
      "peakStart": "2026-10-22",
      "peakEnd": "2026-10-24",
      "recentStart": "2026-11-08",
      "recentEnd": "2026-11-10",
      "peakImpressions": 235,
      "recentImpressions": 18,
      "score": 651,
      "signal": "uncertain",
      "basis": "Visibilité récente : 235 impressions sur trois jours, puis 18 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "vaux-le-vicomte noël tarif 2026",
        "vaux le vicomte noel 2026",
        "noel a vaux le vicomte 2026",
        "noel vaux le vicomte 2026",
        "vaux-le-vicomte noël 2026"
      ]
    },
    {
      "url": "/articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/",
      "title": "Festival MARMOE 2026 à Montreuil: spectacles, ateliers et tarifs en famille",
      "category": "evenements",
      "publishedAt": "2026-10-25T23:35:17.753Z",
      "location": {
        "city": "Montreuil",
        "department": "Seine-Saint-Denis",
        "region": "Île-de-France"
      },
      "ageDays": 20,
      "rapidDrop": true,
      "peakStart": "2026-10-28",
      "peakEnd": "2026-10-30",
      "recentStart": "2026-11-08",
      "recentEnd": "2026-11-10",
      "peakImpressions": 110,
      "recentImpressions": 2,
      "score": 359,
      "signal": "uncertain",
      "basis": "Visibilité récente : 110 impressions sur trois jours, puis 2 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "marmoe montreuil",
        "marmoe montreuil 2026",
        "marmoe",
        "festival marmoe 2026",
        "festival marmoe"
      ]
    },
    {
      "url": "/articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/",
      "title": "Noël à Bayeux 2026 en famille: marché et Galopades",
      "category": "evenements",
      "publishedAt": "2026-10-30T15:36:05.268Z",
      "location": {
        "city": "Bayeux",
        "department": "Calvados",
        "region": "Normandie"
      },
      "ageDays": 15,
      "rapidDrop": true,
      "peakStart": "2026-11-01",
      "peakEnd": "2026-11-03",
      "recentStart": "2026-11-08",
      "recentEnd": "2026-11-10",
      "peakImpressions": 84,
      "recentImpressions": 0,
      "score": 252,
      "signal": "uncertain",
      "basis": "Visibilité récente : 84 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "marche de noel bayeux 2026",
        "galopades bayeux 2026"
      ]
    },
    {
      "url": "/articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/",
      "title": "Noël à Chenonceau 2026: décors, nocturnes et tarifs en famille",
      "category": "evenements",
      "publishedAt": "2026-10-24T12:31:27.718Z",
      "location": {
        "city": "Chenonceaux",
        "department": "Indre-et-Loire",
        "region": "Centre-Val de Loire"
      },
      "ageDays": 21,
      "rapidDrop": true,
      "peakStart": "2026-10-26",
      "peakEnd": "2026-10-28",
      "recentStart": "2026-11-08",
      "recentEnd": "2026-11-10",
      "peakImpressions": 91,
      "recentImpressions": 13,
      "score": 234,
      "signal": "uncertain",
      "basis": "Visibilité récente : 91 impressions sur trois jours, puis 13 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "chateau de chenonceau noel 2026",
        "chateau chenonceau noel 2026",
        "chenonceau noël 2026",
        "horaires des nocturnes"
      ]
    },
    {
      "url": "/articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/",
      "title": "MonstroZoo 2026-2027 à Beauval: parcours inclus, visite guidée et tarifs",
      "category": "evenements",
      "publishedAt": "2026-10-22T15:49:20.710Z",
      "location": {
        "city": "Saint-Aignan",
        "department": "Loir-et-Cher",
        "region": "Centre-Val de Loire"
      },
      "ageDays": 23,
      "rapidDrop": true,
      "peakStart": "2026-10-28",
      "peakEnd": "2026-10-30",
      "recentStart": "2026-11-08",
      "recentEnd": "2026-11-10",
      "peakImpressions": 60,
      "recentImpressions": 12,
      "score": 179,
      "signal": "uncertain",
      "basis": "Visibilité récente : 60 impressions sur trois jours, puis 12 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 3.5,
      "focusQueries": [
        "monstrozoo",
        "monstrozo",
        "monstrozoo 2026"
      ]
    },
    {
      "url": "/articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/",
      "title": "Odyssée Lumineuse 2026-2027 à Paris: billets, dates et visite en famille",
      "category": "evenements",
      "publishedAt": "2026-10-26T15:30:14.193Z",
      "location": {
        "city": "Paris",
        "department": "Paris",
        "region": "Île-de-France"
      },
      "ageDays": 19,
      "rapidDrop": true,
      "peakStart": "2026-10-27",
      "peakEnd": "2026-10-29",
      "recentStart": "2026-11-08",
      "recentEnd": "2026-11-10",
      "peakImpressions": 69,
      "recentImpressions": 10,
      "score": 177,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 69 impressions sur trois jours, puis 10 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Odyssée Lumineuse Paris 2026 2027",
        "Parc Floral illuminations enfants",
        "billets Odyssée Lumineuse daté Open",
        "Odyssée Lumineuse jours fermeture"
      ]
    },
    {
      "url": "/articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/",
      "title": "Noël au château d'Amboise 2026: visite, nocturnes et tarifs en famille",
      "category": "evenements",
      "publishedAt": "2026-10-24T06:28:53.652Z",
      "location": {
        "city": "Amboise",
        "department": "Indre-et-Loire",
        "region": "Centre-Val de Loire"
      },
      "ageDays": 21,
      "rapidDrop": true,
      "peakStart": "2026-10-26",
      "peakEnd": "2026-10-28",
      "recentStart": "2026-11-08",
      "recentEnd": "2026-11-10",
      "peakImpressions": 54,
      "recentImpressions": 3,
      "score": 153,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 54 impressions sur trois jours, puis 3 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Noël château royal Amboise 2026",
        "Noël royal des animaux Amboise",
        "nocturne chandelles Amboise décembre 2026",
        "château Amboise Noël tarifs enfants"
      ]
    },
    {
      "url": "/articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/",
      "title": "Marché de Noël de Saint-Étienne 2026 en famille: dates, horaires et accès",
      "category": "evenements",
      "publishedAt": "2026-10-28T18:37:08.909Z",
      "location": {
        "city": "Saint-Étienne",
        "department": "Loire",
        "region": "Auvergne-Rhône-Alpes"
      },
      "ageDays": 17,
      "rapidDrop": true,
      "peakStart": "2026-10-31",
      "peakEnd": "2026-11-02",
      "recentStart": "2026-11-08",
      "recentEnd": "2026-11-10",
      "peakImpressions": 60,
      "recentImpressions": 12,
      "score": 144,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 60 impressions sur trois jours, puis 12 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "marché de Noël Saint-Étienne 2026",
        "marché de Noël Saint-Étienne horaires",
        "Noël à Sainté avec enfants"
      ]
    },
    {
      "url": "/articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/",
      "title": "Festival Playground 2026: spectacles de danse en famille, dates et tarifs",
      "category": "evenements",
      "publishedAt": "2026-10-26T06:30:10.109Z",
      "location": {
        "city": "Bagnolet",
        "department": "Seine-Saint-Denis",
        "region": "Île-de-France"
      },
      "ageDays": 19,
      "rapidDrop": true,
      "peakStart": "2026-10-27",
      "peakEnd": "2026-10-29",
      "recentStart": "2026-11-08",
      "recentEnd": "2026-11-10",
      "peakImpressions": 37,
      "recentImpressions": 1,
      "score": 143,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 37 impressions sur trois jours, puis 1 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "festival Playground 2026",
        "spectacles danse enfants Île-de-France",
        "Playground 2026 tarifs et dates",
        "danse bébé Romainville novembre 2026",
        "Little Villette A corpo libero"
      ]
    },
    {
      "url": "/articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/",
      "title": "Festival Enfantillages 2026 à Valbonne: spectacles gratuits et cinéma en famille",
      "category": "evenements",
      "publishedAt": "2026-10-26T03:35:31.536Z",
      "location": {
        "city": "Valbonne",
        "department": "Alpes-Maritimes",
        "region": "Provence-Alpes-Côte d'Azur"
      },
      "ageDays": 19,
      "rapidDrop": true,
      "peakStart": "2026-10-26",
      "peakEnd": "2026-10-28",
      "recentStart": "2026-11-08",
      "recentEnd": "2026-11-10",
      "peakImpressions": 40,
      "recentImpressions": 5,
      "score": 140,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 40 impressions sur trois jours, puis 5 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Festival Enfantillages Valbonne 2026",
        "spectacles gratuits enfants Valbonne",
        "cinéma jeune public Valbonne novembre 2026",
        "Pré des Arts Enfantillages"
      ]
    },
    {
      "url": "/articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/",
      "title": "Luminéales du Thabor 2026 à Rennes: tarifs, horaires et visite en famille",
      "category": "evenements",
      "publishedAt": "2026-10-31T19:33:18.221Z",
      "location": {
        "city": "Rennes",
        "department": "Ille-et-Vilaine",
        "region": "Bretagne"
      },
      "ageDays": 14,
      "rapidDrop": true,
      "peakStart": "2026-11-02",
      "peakEnd": "2026-11-04",
      "recentStart": "2026-11-08",
      "recentEnd": "2026-11-10",
      "peakImpressions": 63,
      "recentImpressions": 17,
      "score": 138,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 63 impressions sur trois jours, puis 17 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Luminéales du Thabor Rennes 2026",
        "Des Noëls dans le monde Rennes enfants",
        "Luminéales Thabor tarif famille",
        "parcours lumineux Thabor poussette"
      ]
    },
    {
      "url": "/articles/evenements/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille/",
      "title": "Traîneau flottant de Noël à Metz 2026: dates, horaires et embarquement",
      "category": "evenements",
      "publishedAt": "2026-11-03T03:34:06.455Z",
      "location": {
        "city": "Metz",
        "department": "Moselle",
        "region": "Grand Est"
      },
      "ageDays": 11,
      "rapidDrop": true,
      "peakStart": "2026-11-05",
      "peakEnd": "2026-11-07",
      "recentStart": "2026-11-08",
      "recentEnd": "2026-11-10",
      "peakImpressions": 47,
      "recentImpressions": 2,
      "score": 135,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 47 impressions sur trois jours, puis 2 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "traîneau flottant père Noël Metz 2026",
        "bateau gratuit Noël Metz famille"
      ]
    },
    {
      "url": "/articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/",
      "title": "Noël 2026 à Toulon en famille: marché, patinoire et horaires",
      "category": "evenements",
      "publishedAt": "2026-10-31T10:28:17.323Z",
      "location": {
        "city": "Toulon",
        "department": "Var",
        "region": "Provence-Alpes-Côte d’Azur"
      },
      "ageDays": 14,
      "rapidDrop": true,
      "peakStart": "2026-11-01",
      "peakEnd": "2026-11-03",
      "recentStart": "2026-11-08",
      "recentEnd": "2026-11-10",
      "peakImpressions": 47,
      "recentImpressions": 4,
      "score": 129,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 47 impressions sur trois jours, puis 4 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Noël Toulon 2026 famille",
        "marché de Noël Toulon place de la Liberté",
        "Village des Enfants Toulon place d'Armes",
        "patinoire Toulon Noël 2026"
      ]
    },
    {
      "url": "/articles/evenements/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/",
      "title": "Festival de la Sainte-Barbe 2026 à Lens-Liévin: programme en famille du 4 au 6 décembre",
      "category": "evenements",
      "publishedAt": "2026-10-27T04:28:30.904Z",
      "location": {
        "city": "Lens",
        "department": "Pas-de-Calais",
        "region": "Hauts-de-France"
      },
      "ageDays": 18,
      "rapidDrop": true,
      "peakStart": "2026-10-28",
      "peakEnd": "2026-10-30",
      "recentStart": "2026-11-08",
      "recentEnd": "2026-11-10",
      "peakImpressions": 43,
      "recentImpressions": 2,
      "score": 123,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 43 impressions sur trois jours, puis 2 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "festival Sainte-Barbe Lens 2026",
        "Sainte-Barbe Lens-Liévin en famille",
        "spectacle feu Lens 4 décembre 2026",
        "Sainte-Barbe Loos-en-Gohelle Oignies 5 décembre",
        "Louvre-Lens Sainte-Barbe 6 décembre enfants"
      ]
    },
    {
      "url": "/articles/evenements/batiment-b-a-saint-denis-decouvrir-le-street-art-en-famille/",
      "title": "Bâtiment B à Saint-Denis: découvrir le street art en famille",
      "category": "evenements",
      "publishedAt": "2026-10-28T00:11:04+01:00",
      "location": {
        "city": "Saint-Denis",
        "department": "La Réunion",
        "region": "La Réunion"
      },
      "ageDays": 17,
      "rapidDrop": true,
      "peakStart": "2026-10-29",
      "peakEnd": "2026-10-31",
      "recentStart": "2026-11-08",
      "recentEnd": "2026-11-10",
      "peakImpressions": 41,
      "recentImpressions": 1,
      "score": 120,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 41 impressions sur trois jours, puis 1 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Bâtiment B Réunion Graffiti",
        "street art en famille",
        "Saint-Denis La Réunion"
      ]
    }
  ],
  "strongPages": [
    {
      "url": "/articles/evenements/cirque-de-noel-2026-au-mans-horaires-tarifs-et-seance-a-choisir-avec-des-enfants/",
      "title": "Cirque de Noël 2026 au Mans: horaires, tarifs et séance à choisir avec des enfants",
      "category": "evenements",
      "recentImpressions": 213,
      "recentClicks": 10,
      "recentPosition": 6.286,
      "retention": 1.411
    },
    {
      "url": "/articles/evenements/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales/",
      "title": "Fêtes de l’Ours 2027: quelle fête choisir en famille dans les Pyrénées-Orientales ?",
      "category": "evenements",
      "recentImpressions": 133,
      "recentClicks": 9,
      "recentPosition": 3.526,
      "retention": 1.583
    },
    {
      "url": "/articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/",
      "title": "Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille",
      "category": "evenements",
      "recentImpressions": 144,
      "recentClicks": 6,
      "recentPosition": 7.757,
      "retention": 1.059
    },
    {
      "url": "/articles/vie-pratique/cantine-au-college-dans-le-pas-de-calais-les-tarifs-2026-et-les-reductions-pour-les-boursiers/",
      "title": "Cantine au collège dans le Pas-de-Calais: les tarifs 2026 et les réductions pour les boursiers",
      "category": "vie-pratique",
      "recentImpressions": 116,
      "recentClicks": 5,
      "recentPosition": 5.241,
      "retention": 0.967
    },
    {
      "url": "/articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/",
      "title": "Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates",
      "category": "vie-pratique",
      "recentImpressions": 197,
      "recentClicks": 4,
      "recentPosition": 5.223,
      "retention": 1.551
    },
    {
      "url": "/articles/cuisine/ou-manger-des-fouees-en-famille-autour-de-saumur/",
      "title": "Où manger des fouées en famille autour de Saumur ?",
      "category": "cuisine",
      "recentImpressions": 179,
      "recentClicks": 4,
      "recentPosition": 10.888,
      "retention": 0.579
    },
    {
      "url": "/articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/",
      "title": "Fêtes de Saint-Nicolas 2026 à Nancy en famille: défilé, villages et animations",
      "category": "evenements",
      "recentImpressions": 63,
      "recentClicks": 3,
      "recentPosition": 6.333,
      "retention": 0.525
    },
    {
      "url": "/articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/",
      "title": "Noël à Pau 2026 en famille: marchés, village et illuminations",
      "category": "evenements",
      "recentImpressions": 61,
      "recentClicks": 3,
      "recentPosition": 6.951,
      "retention": 0.763
    },
    {
      "url": "/articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/",
      "title": "ALFest 2026 à Annecy en famille: horaires, jeux et braderie",
      "category": "evenements",
      "recentImpressions": 57,
      "recentClicks": 3,
      "recentPosition": 6.035,
      "retention": 1.727
    },
    {
      "url": "/articles/evenements/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants/",
      "title": "Fontaines dansantes d'hiver à Metz 2026-2027: dates, horaires et conseils en famille",
      "category": "evenements",
      "recentImpressions": 35,
      "recentClicks": 3,
      "recentPosition": 5.143,
      "retention": 1.129
    }
  ],
  "excluded": {
    "expired": 178,
    "cooling": 53
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
