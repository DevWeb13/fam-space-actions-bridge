# Radar Fam Space - Phase 1/3

## Mission

Radar surveille en priorité les articles Fam Space qui gagnent rapidement des impressions Google puis les perdent quelques jours plus tard. Il cherche ensuite les autres articles existants à améliorer réellement. Seulement s'il ne trouve aucune amélioration utile, il recherche un événement exceptionnel avec un fort potentiel d'audience et, lorsque c'est naturel, d'affiliation. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 1/3

Tu es rédacteur en chef. Ta seule responsabilité est de choisir la meilleure mission du passage et de préparer un brief éditorial court. **Ne fais aucune plomberie Git et ne reconstruis aucune donnée GSC structurée.**

Le snapshot GSC du jour est déjà prêt lorsque cette phase commence. Utilise le catalogue compact et l'historique du bridge fournis dans ce runtime, puis utilise le contexte des travaux en cours fourni dans ce runtime. Contrôle seulement les articles nécessaires sur `master`, sans relire tout le catalogue fichier par fichier.

Examine **en premier** les articles `refresh`, en commençant par ceux marqués `rapidDrop: true`. Ils ont gagné des impressions, puis leur visibilité a fortement diminué en quelques jours. Les articles récents ne doivent pas être pénalisés par leur âge. Les autres pertes significatives viennent ensuite.

Lis l'article source complet, ses sources et les requêtes GSC lorsqu'elles ont été diagnostiquées :
- `rank_loss` : vérifier les intentions dont les positions ont réellement reculé ;
- `coverage_loss` : examiner les recherches dont l'exposition diminue ;
- `uncertain` ou `needs_query_check` : une chute d'impressions ne prouve pas la cause. Seule une lacune indépendante et vérifiée peut justifier une amélioration ;
- `search_potential` : vérifier que la réponse et le titre correspondent réellement à l'intention.

**Ne choisis pas un refresh pour changer une date ou forcer un `updatedAt`.** Identifie ce qui serait concrètement meilleur pour la famille, tout en conservant ce qui fonctionne déjà.

**Seulement si aucun article existant n'est réellement améliorable**, cherche un événement exceptionnel avec un fort potentiel d'intérêt et éventuellement d'affiliation. Vérifie ses sources officielles et recherche les doublons de sujet sur `master`, en complément des articles proches déjà listés, ainsi que les contenus Publication/Destination en cours. Ne multiplie pas les nouveaux articles sur de petits événements gratuits.

Applique directement les règles partenaires ci-dessous.

### Partenaires disponibles

- **Hébergement:** `booking.com`, `expedia.fr`, `agoda.com`; secours: `hotels.com`.
- **Location de vacances:** `abritel.fr`, `vrbo.com`.
- **Billets, attractions et visites:** `getyourguide.com`, `tiqets.com`, `klook.com`; secours: `wegotrip.com`, `kkday.com`.
- **City pass:** `gocity.com`, `tiqets.com`; secours: `getyourguide.com`, `klook.com`.
- **Location de voiture:** `kayak.fr`, `autoeurope.eu`, `economybookings.com`; secours: `localrent.com`, `qeeq.com`.
- **Location de vélo:** `bikesbooking.com`.
- **Transferts:** `welcomepickups.com`, `kiwitaxi.com`; secours: `gettransfer.com`, `intui.travel`.
- **Consigne à bagages:** `radicalstorage.com`.
- **Vols:** `kiwi.com`.

### Logique d'usage

Commence par l'action principale du lecteur lorsqu'elle peut être achetée ou réservée, puis examine les besoins secondaires utiles.

Pour une sortie, une activité, une visite, un événement, un voyage ou une destination localisée, vérifie aussi un hébergement pertinent à proximité. Il n'a pas besoin d'être indispensable à tous les lecteurs: il peut servir normalement aux familles qui transforment la sortie en week-end ou l'intègrent à un séjour. Pour une aide, une démarche, un service de parentalité ou un contenu sans logique de déplacement, n'ajoute pas d'hébergement sans raison propre au sujet.

Dans l'article, un lien partenaire doit se lire comme un conseil pratique. Adapte son emplacement, son éventuel titre de section et sa formulation au sujet; ne réutilise pas une formule fixe d'article en article et ne commente jamais le fait qu'il s'agit d'affiliation. Une ou deux offres précises valent mieux qu'une liste.

Une page partenaire sert à vérifier une offre, jamais à établir un fait éditorial.


Le brief doit rester court et contenir uniquement ce qui aidera la rédaction:

## Mission retenue
Le sujet et ce que c'est réellement.

## Pourquoi cette mission
Pourquoi elle mérite une amélioration maintenant, ou pourquoi aucun article existant n'était utilement améliorable avant de retenir cet événement.

## Décision du lecteur
Ce que la page doit permettre au lecteur de comprendre ou de choisir. Formule un résultat pour le lecteur, pas un titre ni un plan. Les consignes de maillage, d'anti-doublon ou d'organisation entre articles appartiennent à `Continuations internes`, pas à la décision.

## Faits à traiter
Les informations décisives à vérifier, actualiser ou ajouter, et les informations existantes importantes à préserver pour un refresh.

## Sources de départ
Les meilleures sources officielles ou directement responsables.

## Affiliation
Les pistes réellement vérifiées, ou l'absence d'affiliation naturelle.

## Continuations internes
Deux ou trois pistes seulement si elles sont réellement utiles. Indique quand une page existante doit prendre le relais sur un sous-sujet afin d'éviter de le redévelopper dans le nouvel article.

Ensuite, soumets cette décision via le format `action: start` fourni plus bas dans ce runtime. Le modèle ne renseigne jamais le nom de branche, le SHA, `targetPath`, le slug technique d'une opportunity ni les métriques GSC détaillées déjà présentes dans le snapshot.

## Catégories éditoriales autorisées

- sorties — Sorties: Des idées de sorties à partager en famille, près de chez vous.
- voyages — Voyages: Des conseils et inspirations pour voyager sereinement en famille.
- evenements — Événements: Les événements à découvrir et à préparer avec les enfants.
- activites — Activités: Des activités simples et enrichissantes pour tous les âges.
- vie-pratique — Vie pratique: Des repères concrets pour faciliter le quotidien des familles.
- maison — Maison: Des solutions pratiques pour une maison familiale agréable.
- cuisine — Cuisine: Des idées et conseils pour cuisiner simplement en famille.
- parentalite — Parentalité: Des ressources bienveillantes pour accompagner la vie de famille.
- bons-plans — Bons plans: Réductions, gratuités, pass et aides pratiques pour économiser en famille.

## Snapshot GSC préparé

{
  "schemaVersion": 1,
  "generatedAt": "2026-11-23T02:29:06+01:00",
  "dataThrough": "2026-11-20",
  "from": "2026-10-24",
  "refresh": [
    {
      "url": "/articles/vie-pratique/ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee/",
      "title": "Ferry Ouistreham-Portsmouth en famille: préparer le départ et la traversée",
      "category": "vie-pratique",
      "publishedAt": "2026-10-24T16:19:35+02:00",
      "location": {
        "city": "Ouistreham",
        "department": "Calvados",
        "region": "Normandie"
      },
      "ageDays": 30,
      "rapidDrop": true,
      "peakStart": "2026-10-25",
      "peakEnd": "2026-10-27",
      "recentStart": "2026-11-18",
      "recentEnd": "2026-11-20",
      "peakImpressions": 76,
      "recentImpressions": 14,
      "score": 186,
      "signal": "uncertain",
      "basis": "Visibilité récente : 76 impressions sur trois jours, puis 14 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "durée traversée ouistreham portsmouth",
        "traversée ouistreham angleterre",
        "bateau ouistreham angleterre",
        "brittany ferries ouistreham",
        "car ferry ouistreham"
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
      "ageDays": 28,
      "rapidDrop": true,
      "peakStart": "2026-10-30",
      "peakEnd": "2026-11-01",
      "recentStart": "2026-11-18",
      "recentEnd": "2026-11-20",
      "peakImpressions": 69,
      "recentImpressions": 9,
      "score": 180,
      "signal": "uncertain",
      "basis": "Visibilité récente : 69 impressions sur trois jours, puis 9 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "parc floral gratuit",
        "parc floral de la source gratuit"
      ]
    },
    {
      "url": "/articles/activites/parc-animalier-de-gramat-en-famille-animaux-duree-et-conseils-de-visite/",
      "title": "Parc animalier de Gramat en famille: billets, animaux et conseils de visite",
      "category": "activites",
      "publishedAt": "2026-10-27T08:27:57+01:00",
      "location": {
        "city": "Gramat",
        "department": "Lot",
        "region": "Occitanie"
      },
      "ageDays": 27,
      "rapidDrop": true,
      "peakStart": "2026-10-28",
      "peakEnd": "2026-10-30",
      "recentStart": "2026-11-18",
      "recentEnd": "2026-11-20",
      "peakImpressions": 36,
      "recentImpressions": 0,
      "score": 108,
      "signal": "uncertain",
      "basis": "Visibilité récente : 36 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "parc animalier gramat duree visite",
        "combien de temps pour visiter le parc animalier de gramat",
        "visiter gramat lot",
        "avis sur parc animalier de gramat"
      ]
    },
    {
      "url": "/articles/activites/visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils/",
      "title": "Visiter le château de La Rochefoucauld en famille: parcours, tarifs et conseils",
      "category": "activites",
      "publishedAt": "2026-10-25T22:58:31+01:00",
      "location": {
        "city": "La Rochefoucauld-en-Angoumois",
        "department": "Charente",
        "region": "Nouvelle-Aquitaine"
      },
      "ageDays": 29,
      "rapidDrop": true,
      "peakStart": "2026-10-28",
      "peakEnd": "2026-10-30",
      "recentStart": "2026-11-18",
      "recentEnd": "2026-11-20",
      "peakImpressions": 41,
      "recentImpressions": 8,
      "score": 99,
      "signal": "uncertain",
      "basis": "Visibilité récente : 41 impressions sur trois jours, puis 8 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0.045,
      "focusQueries": [
        "billets pour château de la rochefoucauld",
        "tarif visite château de la rochefoucauld",
        "durée visite château la rochefoucauld",
        "château de la rochefoucauld visite horaires",
        "chateau de la rochefoucauld visites"
      ]
    },
    {
      "url": "/articles/activites/aquarium-de-touraine-en-famille-que-voir-avec-les-enfants/",
      "title": "Aquarium de Touraine en famille: que voir avec les enfants ?",
      "category": "activites",
      "publishedAt": "2026-11-04T17:00:39+01:00",
      "location": {
        "city": "Lussault-sur-Loire",
        "department": "Indre-et-Loire",
        "region": "Centre-Val de Loire"
      },
      "ageDays": 19,
      "rapidDrop": true,
      "peakStart": "2026-11-06",
      "peakEnd": "2026-11-08",
      "recentStart": "2026-11-18",
      "recentEnd": "2026-11-20",
      "peakImpressions": 21,
      "recentImpressions": 6,
      "score": 45,
      "signal": "uncertain",
      "basis": "Visibilité récente : 21 impressions sur trois jours, puis 6 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0.444,
      "focusQueries": [
        "aquarium de touraine",
        "aquarium de lussault",
        "aquarium lussault sur loire",
        "aquarium tours",
        "grand aquarium de touraine"
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
      "ageDays": 28,
      "rapidDrop": true,
      "peakStart": "2026-10-26",
      "peakEnd": "2026-10-28",
      "recentStart": "2026-11-18",
      "recentEnd": "2026-11-20",
      "peakImpressions": 40,
      "recentImpressions": 2,
      "score": 149,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 40 impressions sur trois jours, puis 2 sur les trois derniers jours consolidés; cause non établie.",
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
      "url": "/articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/",
      "title": "Noël à Caen 2026 en famille: marché de Noël et visite illuminée",
      "category": "evenements",
      "publishedAt": "2026-10-30T21:26:32.478Z",
      "location": {
        "city": "Caen",
        "department": "Calvados",
        "region": "Normandie"
      },
      "ageDays": 24,
      "rapidDrop": true,
      "peakStart": "2026-11-01",
      "peakEnd": "2026-11-03",
      "recentStart": "2026-11-18",
      "recentEnd": "2026-11-20",
      "peakImpressions": 25,
      "recentImpressions": 7,
      "score": 89,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 25 impressions sur trois jours, puis 7 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "marché de Noël Caen 2026",
        "Noël Caen en famille",
        "visite illuminations Caen décembre 2026"
      ]
    },
    {
      "url": "/articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/",
      "title": "Ville de Noël d’Arras 2026 en famille: horaires, attractions et budget",
      "category": "evenements",
      "publishedAt": "2026-10-29T20:30:32.907Z",
      "location": {
        "city": "Arras",
        "department": "Pas-de-Calais",
        "region": "Hauts-de-France"
      },
      "ageDays": 25,
      "rapidDrop": true,
      "peakStart": "2026-10-31",
      "peakEnd": "2026-11-02",
      "recentStart": "2026-11-18",
      "recentEnd": "2026-11-20",
      "peakImpressions": 37,
      "recentImpressions": 9,
      "score": 84,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 37 impressions sur trois jours, puis 9 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Ville de Noël Arras 2026",
        "marché de Noël Arras en famille",
        "grande roue patinoire Arras Noël"
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
      "ageDays": 19,
      "rapidDrop": true,
      "peakStart": "2026-11-09",
      "peakEnd": "2026-11-11",
      "recentStart": "2026-11-18",
      "recentEnd": "2026-11-20",
      "peakImpressions": 20,
      "recentImpressions": 0,
      "score": 60,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 20 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie.",
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
      "url": "/articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/",
      "title": "Marché de Noël 100 % Côte-d’Or à Dijon 2026: horaires, spectacles et Père Noël",
      "category": "evenements",
      "publishedAt": "2026-10-29T14:26:32.176Z",
      "location": {
        "city": "Dijon",
        "department": "Côte-d'Or",
        "region": "Bourgogne-Franche-Comté"
      },
      "ageDays": 25,
      "rapidDrop": true,
      "peakStart": "2026-11-01",
      "peakEnd": "2026-11-03",
      "recentStart": "2026-11-18",
      "recentEnd": "2026-11-20",
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
      "url": "/articles/evenements/foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans/",
      "title": "Foulée Blanche 2027 en famille: courses, âges, tarifs et programme à Autrans",
      "category": "evenements",
      "publishedAt": "2026-10-28T05:07:10+01:00",
      "location": {
        "city": "Autrans-Méaudre en Vercors",
        "department": "Isère",
        "region": "Auvergne-Rhône-Alpes"
      },
      "ageDays": 26,
      "rapidDrop": true,
      "peakStart": "2026-10-29",
      "peakEnd": "2026-10-31",
      "recentStart": "2026-11-18",
      "recentEnd": "2026-11-20",
      "peakImpressions": 27,
      "recentImpressions": 9,
      "score": 54,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 27 impressions sur trois jours, puis 9 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Foulée Blanche 2027 famille",
        "Foulée Blanche Autrans enfants",
        "ski de fond Vercors janvier 2027"
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
      "ageDays": 86,
      "rapidDrop": false,
      "peakStart": "2026-10-24",
      "peakEnd": "2026-10-30",
      "recentStart": "2026-11-14",
      "recentEnd": "2026-11-20",
      "peakImpressions": 3295,
      "recentImpressions": 1602,
      "score": 1693,
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
      "url": "/articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/",
      "title": "Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille",
      "category": "evenements",
      "publishedAt": "2026-10-16T17:46:42.359Z",
      "location": {
        "city": "Lumigny-Nesles-Ormeaux",
        "department": "Seine-et-Marne",
        "region": "Île-de-France"
      },
      "ageDays": 38,
      "rapidDrop": false,
      "peakStart": "2026-10-25",
      "peakEnd": "2026-10-31",
      "recentStart": "2026-11-14",
      "recentEnd": "2026-11-20",
      "peakImpressions": 833,
      "recentImpressions": 490,
      "score": 343,
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
      "url": "/articles/evenements/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales/",
      "title": "Fêtes de l’Ours 2027: quelle fête choisir en famille dans les Pyrénées-Orientales ?",
      "category": "evenements",
      "publishedAt": "2026-11-05T05:04:01+01:00",
      "location": {
        "city": "",
        "department": "Pyrénées-Orientales",
        "region": "Occitanie"
      },
      "ageDays": 18,
      "rapidDrop": false,
      "peakStart": "2026-11-07",
      "peakEnd": "2026-11-13",
      "recentStart": "2026-11-14",
      "recentEnd": "2026-11-20",
      "peakImpressions": 375,
      "recentImpressions": 298,
      "score": 77,
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
      "url": "/articles/sorties/parc-bagatelle-en-famille-quelles-attractions-selon-la-taille-des-enfants/",
      "title": "Parc Bagatelle en famille: quelles attractions selon la taille des enfants?",
      "category": "sorties",
      "publishedAt": "2026-10-02T19:08:32+02:00",
      "location": {
        "city": "Merlimont",
        "department": "Pas-de-Calais",
        "region": "Hauts-de-France"
      },
      "ageDays": 52,
      "rapidDrop": false,
      "peakStart": "2026-10-25",
      "peakEnd": "2026-10-31",
      "recentStart": "2026-11-14",
      "recentEnd": "2026-11-20",
      "peakImpressions": 80,
      "recentImpressions": 6,
      "score": 74,
      "signal": "needs_query_check",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Parc Bagatelle en famille",
        "attractions Bagatelle taille enfant"
      ]
    }
  ],
  "strongPages": [
    {
      "url": "/articles/evenements/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales/",
      "title": "Fêtes de l’Ours 2027: quelle fête choisir en famille dans les Pyrénées-Orientales ?",
      "category": "evenements",
      "recentImpressions": 298,
      "recentClicks": 17,
      "recentPosition": 4.329,
      "retention": 0.795
    },
    {
      "url": "/articles/evenements/cirque-de-noel-2026-au-mans-horaires-tarifs-et-seance-a-choisir-avec-des-enfants/",
      "title": "Cirque de Noël 2026 au Mans: horaires, tarifs et séance à choisir avec des enfants",
      "category": "evenements",
      "recentImpressions": 327,
      "recentClicks": 16,
      "recentPosition": 6.969,
      "retention": 1.409
    },
    {
      "url": "/articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/",
      "title": "Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille",
      "category": "evenements",
      "recentImpressions": 445,
      "recentClicks": 10,
      "recentPosition": 7.685,
      "retention": 2.486
    },
    {
      "url": "/articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/",
      "title": "Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille",
      "category": "evenements",
      "recentImpressions": 490,
      "recentClicks": 6,
      "recentPosition": 7.69,
      "retention": 0.588
    },
    {
      "url": "/articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/",
      "title": "Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates",
      "category": "vie-pratique",
      "recentImpressions": 194,
      "recentClicks": 6,
      "recentPosition": 6.17,
      "retention": 0.866
    },
    {
      "url": "/articles/maison/recycleries-autour-de-chartres-ou-donner-et-acheter-d-occasion/",
      "title": "Recycleries autour de Chartres: où donner et acheter d'occasion ?",
      "category": "maison",
      "recentImpressions": 107,
      "recentClicks": 5,
      "recentPosition": 10.037,
      "retention": 0.829
    },
    {
      "url": "/articles/evenements/noel-2026-a-quimper-en-famille-village-concert-ou-ateliers-gratuits/",
      "title": "Noël 2026 à Quimper en famille: village, concert et animations gratuites",
      "category": "evenements",
      "recentImpressions": 90,
      "recentClicks": 5,
      "recentPosition": 6.867,
      "retention": 1.216
    },
    {
      "url": "/articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/",
      "title": "Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite",
      "category": "sorties",
      "recentImpressions": 472,
      "recentClicks": 4,
      "recentPosition": 11.949,
      "retention": 1.118
    },
    {
      "url": "/articles/evenements/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants/",
      "title": "Fontaines dansantes d'hiver à Metz 2026-2027: dates, horaires et conseils en famille",
      "category": "evenements",
      "recentImpressions": 209,
      "recentClicks": 4,
      "recentPosition": 7.502,
      "retention": 2.679
    },
    {
      "url": "/articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/",
      "title": "Salon du Cheval de Paris 2026 en famille: ateliers, jumping et Nuit du Cheval",
      "category": "evenements",
      "recentImpressions": 73,
      "recentClicks": 4,
      "recentPosition": 7.986,
      "retention": 1.49
    }
  ],
  "excluded": {
    "expired": 198,
    "cooling": 83
  },
  "warnings": [
    "Diagnostics par requêtes : 5/5.",
    "Les baisses d'impressions ne prouvent ni désindexation ni perte de classement."
  ]
}

## Catalogue ciblé (doublons et publications récentes)

### Articles comparables et publications récentes

- /articles/vie-pratique/ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee/ | Ferry Ouistreham-Portsmouth en famille: préparer le départ et la traversée | vie-pratique | Ouistreham, Calvados, Normandie
- /articles/vie-pratique/aeroport-de-lille-avec-des-enfants-preparer-le-depart-jusqu-a-l-embarquement/ | Aéroport de Lille avec des enfants: préparer le départ jusqu’à l’embarquement | vie-pratique | Lesquin, Nord, Hauts-de-France
- /articles/vie-pratique/lyon-saint-exupery-avec-des-enfants-preparer-le-trajet-les-controles-et-l-attente/ | Lyon-Saint-Exupéry avec des enfants: préparer le trajet, les contrôles et l’attente | vie-pratique | Colombier-Saugnieu, Rhône, Auvergne-Rhône-Alpes
- /articles/voyages/visiter-guedelon-avec-des-enfants-preparer-la-journee-en-2026/ | Visiter Guédelon avec des enfants: préparer la journée en 2026 | voyages | Treigny-Perreuse-Sainte-Colombe, Yonne, Bourgogne-Franche-Comté
- /articles/bons-plans/parc-floral-d-orleans-gratuit-en-hiver-horaires-et-sortie-avec-les-enfants/ | Parc floral d’Orléans gratuit en hiver: horaires et sortie avec les enfants | bons-plans | Orléans, Loiret, Centre-Val de Loire
- /articles/maison/composteur-gratuit-a-orleans-metropole-comment-en-profiter-en-2026/ | Composteur gratuit à Orléans Métropole: comment en profiter en 2026 | maison | Orléans, Loiret, Centre-Val de Loire
- /articles/sorties/chasse-motifs-loire-orleans-famille-2026/ | Chasse aux motifs de Loire à Orléans: une balade gratuite pour les 6 à 12 ans | sorties | Orléans, Loiret, Centre-Val de Loire
- /articles/activites/mobe-d-orleans-en-famille-fossiles-jeux-et-biodiversite/ | MOBE d’Orléans en famille: fossiles, jeux et biodiversité | activites | Orléans, Loiret, Centre-Val de Loire
- /articles/activites/parc-animalier-de-gramat-en-famille-animaux-duree-et-conseils-de-visite/ | Parc animalier de Gramat en famille: billets, animaux et conseils de visite | activites | Gramat, Lot, Occitanie
- /articles/activites/parc-animalier-d-auvergne-en-famille-billets-animaux-et-conseils-de-visite/ | Parc animalier d'Auvergne en famille: billets, animaux et conseils de visite | activites | Ardes, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/activites/parc-animalier-d-ecouves-en-famille-tarifs-horaires-et-conseils-pour-la-visite/ | Parc animalier d'Ecouves en famille: tarifs, horaires et conseils pour la visite | activites | Le Bouillon, Orne, Normandie
- /articles/activites/parc-de-courzieu-en-famille-tarifs-horaires-et-conseils-pour-la-visite/ | Parc de Courzieu en famille: tarifs, horaires et conseils pour la visite | activites | Courzieu, Rhône, Auvergne-Rhône-Alpes
- /articles/activites/visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils/ | Visiter le château de La Rochefoucauld en famille: parcours, tarifs et conseils | activites | La Rochefoucauld-en-Angoumois, Charente, Nouvelle-Aquitaine
- /articles/sorties/chateau-de-vincennes-en-famille-tarifs-parcours-et-conseils-de-visite/ | Château de Vincennes en famille: tarifs, parcours et conseils de visite | sorties | Vincennes, Val-de-Marne, Île-de-France
- /articles/sorties/chateau-fort-de-sedan-en-famille-parcours-tarifs-et-conseils-de-visite/ | Château fort de Sedan en famille: parcours, tarifs et conseils de visite | sorties | Sedan, Ardennes, Grand Est
- /articles/parentalite/visiter-le-chateau-de-versailles-avec-un-bebe-poussette-billets-et-parcours/ | Visiter le château de Versailles avec un bébé: poussette, billets et parcours | parentalite | Versailles, Yvelines, Île-de-France
- /articles/activites/aquarium-de-touraine-en-famille-que-voir-avec-les-enfants/ | Aquarium de Touraine en famille: que voir avec les enfants ? | activites | Lussault-sur-Loire, Indre-et-Loire, Centre-Val de Loire
- /articles/parentalite/aide-a-domicile-en-indre-et-loire-quel-soutien-pour-les-parents/ | Aide à domicile en Indre-et-Loire: quel soutien pour les parents ? | parentalite | Indre-et-Loire, Centre-Val de Loire
- /articles/sorties/chateau-de-sully-sur-loire-en-famille-visites-et-activites-pour-les-enfants/ | Château de Sully-sur-Loire en famille: visites et activités pour les enfants | sorties | Sully-sur-Loire, Loiret, Centre-Val de Loire
- /articles/cuisine/marche-d-amboise-composer-un-pique-nique-tourangeau-avec-des-enfants/ | Marché d'Amboise: composer un pique-nique tourangeau avec des enfants | cuisine | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | Festival Enfantillages 2026 à Valbonne: spectacles gratuits et cinéma en famille | evenements | Valbonne, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/festival-au-bonheur-des-momes-2026-en-famille/ | Au Bonheur des Mômes 2026: pass, spectacles et journée au Grand-Bornand | evenements | Le Grand-Bornand, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | Festival MARMOE 2026 à Montreuil: spectacles, ateliers et sorties jusqu'au 29 novembre | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/rue-enfants-montcuq-2026-famille/ | La Rue des Enfants 2026 à Montcuq: deux jours d’arts de rue en famille | evenements | Montcuq-en-Quercy-Blanc, Lot, Occitanie
- /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | Noël à Caen 2026 en famille: marché de Noël et visite illuminée | evenements | Caen, Calvados, Normandie
- /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | Noël à Bayeux 2026 en famille: marché et Galopades | evenements | Bayeux, Calvados, Normandie
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | Ville de Noël d’Arras 2026 en famille: horaires, attractions et budget | evenements | Arras, Pas-de-Calais, Hauts-de-France
- /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | Marchés de Noël de Tours 2026 en famille: horaires, animations et budget | evenements | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans/ | Écoute, je danse ! à Paris le 5 décembre 2026: spectacle gratuit dès 6 mois | evenements | Paris, Paris, Île-de-France
- /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | Atelier couture gratuit à Paris le 28 novembre 2026: dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-laine-cardee-de-noel-a-paris-le-2-decembre-2026-creer-ses-decorations-des-7-ans/ | Atelier laine cardée de Noël à Paris le 2 décembre 2026: décorations dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | Atelier Pokémon et biodiversité à Paris le 28 novembre 2026: dessin dès 10 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | Marché de Noël 100 % Côte-d’Or à Dijon 2026: horaires, spectacles et Père Noël | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | Festival des Petits Explorateurs 2026 à Dijon: ateliers, horaires et tarifs | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | Foire de Dijon 2026 avec les enfants: gratuités, ateliers et Ferme Côte-d'Or | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/vie-pratique/frais-scolaires-en-cote-d-or-quelles-aides-demander-au-departement/ | Frais scolaires en Côte-d'Or: quelles aides demander au Département? | vie-pratique | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans/ | Foulée Blanche 2027 en famille: courses, âges, tarifs et programme à Autrans | evenements | Autrans-Méaudre en Vercors, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | Foire de Grenoble 2026 en famille: jours gratuits, programme et tarifs | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/maison/maison-de-vacances-a-lans-en-vercors-en-famille-les-criteres-qui-changent-vraiment-le-sejour/ | Maison de vacances à Lans-en-Vercors en famille: les critères qui changent vraiment le séjour | maison | Lans-en-Vercors, Isère, Auvergne-Rhône-Alpes
- /articles/voyages/les-rousses-en-hiver-avec-des-enfants-ski-luge-et-sorties-sans-neige/ | Les Rousses en hiver avec des enfants: ski, luge et sorties sans neige | voyages | Jura, Bourgogne-Franche-Comté
- /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/ | Transports à Paris avec des enfants: quel titre choisir pour payer juste? | voyages | Paris, Paris, Île-de-France
- /articles/evenements/salon-du-chocolat-paris-2026-avec-des-enfants-quel-billet-choisir-et-quels-ateliers-reserver/ | Salon du Chocolat Paris 2026 avec des enfants: quel billet choisir et quels ateliers réserver | evenements | Paris, Paris, Île-de-France
- /articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/ | Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite | sorties | Paris, Paris, Île-de-France
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | Thoiry Lumières Sauvages 2026-2027: dates, billets et visite en famille | evenements | Thoiry, Yvelines, Île-de-France
- /articles/sorties/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/ | Planète Préhistorique à Bordeaux: dates, durée et tarifs en famille | sorties | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales/ | Fêtes de l’Ours 2027: quelle fête choisir en famille dans les Pyrénées-Orientales ? | evenements | Pyrénées-Orientales, Occitanie
- /articles/parentalite/quel-laep-choisir-a-perpignan-selon-l-age-et-le-jour/ | Quel LAEP choisir à Perpignan selon l'âge et le jour ? | parentalite | Perpignan, Pyrénées-Orientales, Occitanie
- /articles/activites/parc-animalier-des-angles-en-famille-quel-circuit-choisir-et-comment-preparer-la-visite/ | Parc animalier des Angles en famille: quel circuit choisir et comment préparer la visite ? | activites | Les Angles, Pyrénées-Orientales, Occitanie
- /articles/bons-plans/musee-de-tautavel-moins-cher-avec-lio-le-bon-plan-a-connaitre/ | Musée de Tautavel moins cher avec liO: le bon plan à connaître | bons-plans | Tautavel, Pyrénées-Orientales, Occitanie
- /articles/sorties/parc-bagatelle-en-famille-quelles-attractions-selon-la-taille-des-enfants/ | Parc Bagatelle en famille: quelles attractions selon la taille des enfants? | sorties | Merlimont, Pas-de-Calais, Hauts-de-France
- /articles/sorties/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets/ | Parc Spirou en famille: attractions selon la taille et billets 2027 | sorties | Monteux, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/activites/festyland-avec-de-jeunes-enfants-quelles-attractions-selon-leur-taille/ | Festyland avec de jeunes enfants: quelles attractions selon leur taille? | activites | Carpiquet, Calvados, Normandie
- /articles/activites/accrocamp-toulouse-avec-des-enfants-quel-pass-choisir-selon-leur-taille/ | AccroCamp Toulouse avec des enfants: quel pass choisir selon leur taille? | activites | Toulouse, Haute-Garonne, Occitanie
- /articles/evenements/cirque-de-noel-2026-au-mans-horaires-tarifs-et-seance-a-choisir-avec-des-enfants/ | Cirque de Noël 2026 au Mans: horaires, tarifs et séance à choisir avec des enfants | evenements | Le Mans, Sarthe, Pays de la Loire
- /articles/voyages/le-mans-sans-voiture-avec-des-enfants-ou-dormir-et-comment-organiser-un-week-end/ | Le Mans sans voiture avec des enfants: où dormir et comment organiser un week-end | voyages | Le Mans, Sarthe, Pays de la Loire
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires, Père Noël et animations | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/ | Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates | vie-pratique | Toulouse, Haute-Garonne, Occitanie
- /articles/bons-plans/cantine-au-college-dans-l-herault-jusqu-a-3-60-d-aide-par-repas/ | Cantine au collège dans l'Hérault: jusqu'à 3,60 € d'aide par repas | bons-plans | Montpellier, Hérault, Occitanie
- /articles/maison/moustique-tigre-en-haute-garonne-proteger-la-maison-et-le-jardin/ | Moustique tigre en Haute-Garonne: protéger la maison et le jardin | maison | Toulouse, Haute-Garonne, Occitanie
- /articles/vie-pratique/cantine-au-college-en-deux-sevres-comment-s-inscrire-en-ligne-pour-2026-2027/ | Cantine au collège en Deux-Sèvres: comment s'inscrire en ligne pour 2026-2027 | vie-pratique | Niort, Deux-Sèvres, Nouvelle-Aquitaine
- /articles/maison/recycleries-autour-de-chartres-ou-donner-et-acheter-d-occasion/ | Recycleries autour de Chartres: où donner et acheter d'occasion ? | maison | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/cuisine/apres-une-cueillette-en-eure-et-loir-5-recettes-faciles-a-faire-avec-les-enfants/ | Après une cueillette en Eure-et-Loir: 5 recettes faciles à faire avec les enfants | cuisine | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/maison/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/ | Meubles d'occasion en Meurthe-et-Moselle: où acheter, donner et réparer ? | maison | Meurthe-et-Moselle, Grand Est
- /articles/evenements/noel-2026-a-quimper-en-famille-village-concert-ou-ateliers-gratuits/ | Noël 2026 à Quimper en famille: village, concert et animations gratuites | evenements | Quimper, Finistère, Bretagne
- /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | Noël 2026 à Paris La Défense en famille: marché, animations et patinoire | evenements | Puteaux, Hauts-de-Seine, Île-de-France
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne
- /articles/activites/stages-de-science-a-la-cite-des-sciences-pendant-la-toussaint-2026-lequel-choisir-selon-l-age/ | Stages de science à la Cité des sciences à la Toussaint 2026: durées, âges et tarifs | activites | Paris, Paris, Île-de-France
- /articles/evenements/rencontres-du-ciel-et-de-l-espace-2026-a-paris-que-choisir-avec-des-enfants/ | Rencontres du ciel et de l’espace 2026 à Paris: ateliers, âges et billets en famille | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | Vacances de la Toussaint 2026 à la Cité des sciences: les ateliers numériques gratuits avec des enfants | sorties | Paris, Paris, Île-de-France
- /articles/evenements/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants/ | Fontaines dansantes d'hiver à Metz 2026-2027: dates, horaires et conseils en famille | evenements | Metz, Moselle, Grand Est
- /articles/evenements/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille/ | Traîneau flottant de Noël à Metz 2026: dates, horaires et embarquement | evenements | Metz, Moselle, Grand Est
- /articles/evenements/noel-a-metz-2026-en-famille-marches-et-sentier-des-lanternes/ | Noël à Metz 2026 en famille: marchés et Sentier des Lanternes | evenements | Metz, Moselle, Grand Est
- /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | Noël 2026 au château de Goulaine: dates, billets et conseils en famille | evenements | Haute-Goulaine, Loire-Atlantique, Pays de la Loire
- /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | Salon du Cheval de Paris 2026 en famille: ateliers, jumping et Nuit du Cheval | evenements | Paris, Paris, Île-de-France
- /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | Créations & savoir-faire 2026 à Paris en famille: billets, ateliers et dates | evenements | Paris, Paris, Île-de-France
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/sorties/forteresse-royale-de-chinon-en-famille-tours-histoire-et-jeux/ | Forteresse royale de Chinon en famille: tours, histoire et jeux | sorties | Chinon, Indre-et-Loire, Centre-Val de Loire
- /articles/vie-pratique/ludotheques-du-val-de-marne-ou-jouer-en-famille-et-emprunter-des-jeux/ | Ludothèques du Val-de-Marne: où jouer en famille et emprunter des jeux ? | vie-pratique | Val-de-Marne, Île-de-France
- /articles/parentalite/lieux-d-accueil-enfants-parents-en-vendee-ou-aller-avec-un-tout-petit/ | Lieux d'accueil enfants-parents en Vendée: où aller avec un tout-petit ? | parentalite | Vendée, Pays de la Loire
- /articles/cuisine/kig-ha-farz-en-famille-recette-et-organisation-d-un-repas-breton/ | Kig ha farz en famille: recette et organisation d'un repas breton | cuisine | Finistère, Bretagne
- /articles/bons-plans/bretagne-en-ter-avec-des-enfants-quels-billets-choisir-pour-payer-moins/ | Bretagne en TER avec des enfants: quels billets choisir pour payer moins? | bons-plans | Bretagne
- /articles/voyages/week-end-a-saint-antonin-noble-val-en-famille-village-gorges-et-canoe/ | Week-end à Saint-Antonin-Noble-Val en famille: village, gorges et canoë | voyages | Saint-Antonin-Noble-Val, Tarn-et-Garonne, Occitanie
- /articles/vie-pratique/aides-caf-en-charente-maritime-financer-meubles-electromenager-et-ordinateur/ | Aides Caf en Charente-Maritime: financer meubles, électroménager et ordinateur | vie-pratique | Charente-Maritime, Nouvelle-Aquitaine
- /articles/parentalite/parents-d-ados-dans-l-yonne-contacter-la-maison-des-adolescents/ | Parents d’ados dans l’Yonne: contacter la Maison des adolescents | parentalite | Yonne, Bourgogne-Franche-Comté
- /articles/cuisine/ravioles-du-dauphine-trois-repas-simples-en-famille/ | Ravioles du Dauphiné: trois repas simples en famille | cuisine | Auvergne-Rhône-Alpes
- /articles/parentalite/laep-dans-l-orne-ou-jouer-gratuitement-avec-son-tout-petit/ | LAEP dans l'Orne: où jouer gratuitement avec son tout-petit ? | parentalite | Orne, Normandie
- /articles/cuisine/cuisiner-local-en-meurthe-et-moselle-producteurs-paniers-et-idees-de-repas/ | Cuisiner local en Meurthe-et-Moselle: producteurs, paniers et idées de repas | cuisine | Meurthe-et-Moselle, Grand Est
- /articles/maison/composteur-gratuit-a-laval-agglomeration-quelle-solution-pour-votre-logement/ | Composteur gratuit à Laval Agglomération: quelle solution pour votre logement ? | maison | Laval, Mayenne, Pays de la Loire
- /articles/vie-pratique/littoral-des-alpes-maritimes-en-famille-se-deplacer-sans-voiture/ | Littoral des Alpes-Maritimes en famille: se déplacer sans voiture | vie-pratique | Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/activites/ferme-des-chanteraines-en-famille-animaux-ateliers-et-balade-gratuite/ | Ferme des Chanteraines en famille: animaux, ateliers et balade gratuite | activites | Villeneuve-la-Garenne, Hauts-de-Seine, Île-de-France
- /articles/evenements/festival-contes-et-rencontres-2027-en-lozere-quels-spectacles-voir-en-famille/ | Festival Contes et Rencontres 2027 en Lozère: quels spectacles voir en famille ? | evenements | Lozère, Occitanie
- /articles/activites/musee-dobree-en-famille-a-nantes-jeux-et-parcours-selon-l-age/ | Musée Dobrée en famille à Nantes: jeux et parcours selon l’âge | activites | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/voyages/crozant-en-famille-un-week-end-dans-la-vallee-des-peintres/ | Crozant en famille: un week-end dans la Vallée des Peintres | voyages | Crozant, Creuse, Nouvelle-Aquitaine
- /articles/vie-pratique/transaltitude-hiver-2026-2027-partir-a-la-neige-en-isere-sans-voiture/ | Transaltitude hiver 2026-2027: partir à la neige en Isère sans voiture | vie-pratique | Isère, Auvergne-Rhône-Alpes
- /articles/activites/ateliers-parfum-a-grasse-en-famille-lesquels-choisir-selon-l-age/ | Ateliers parfum à Grasse en famille: lesquels choisir selon l'âge ? | activites | Grasse, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/lumieres-d-afrique-2026-2027-a-sigean-les-lanternes-en-famille/ | Lumières d’Afrique 2026-2027 à Sigean: les lanternes en famille | evenements | Sigean, Aude, Occitanie
- /articles/evenements/natur-armor-2027-a-paimpol-preparer-sa-visite-en-famille/ | Natur’Armor 2027 à Paimpol: préparer sa visite en famille | evenements | Paimpol, Côtes-d'Armor, Bretagne
- /articles/voyages/saint-nazaire-en-famille-paquebots-sous-marin-et-balade-en-bord-de-mer/ | Saint-Nazaire en famille: paquebots, sous-marin et balade en bord de mer | voyages | Saint-Nazaire, Loire-Atlantique, Pays de la Loire
- /articles/voyages/pau-en-famille-un-week-end-entre-chateau-jardins-et-pyrenees/ | Pau en famille: un week-end entre château, jardins et Pyrénées | voyages | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/maison/renover-sa-maison-dans-l-aisne-en-2026-2027-les-demarches-et-les-aides/ | Rénover sa maison dans l’Aisne en 2026-2027: les démarches et les aides | maison | Aisne, Hauts-de-France
- /articles/vie-pratique/ordi-lot-2026-2027-prix-demarches-et-delais-pour-les-familles/ | Ordi'Lot 2026-2027: prix, démarches et délais pour les familles | vie-pratique | Lot, Occitanie
- /articles/sorties/la-cite-de-la-mer-a-cherbourg-en-famille-preparer-sa-journee/ | La Cité de la Mer à Cherbourg en famille: préparer sa journée | sorties | Cherbourg-en-Cotentin, Manche, Normandie
- /articles/evenements/noel-a-brive-2026-en-famille-animations-dates-et-parcours/ | Noël à Brive 2026 en famille: animations, dates et parcours | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine
- /articles/maison/poterie-a-dieulefit-en-famille-ateliers-et-savoir-faire/ | Poterie à Dieulefit en famille: ateliers et savoir-faire | maison | Dieulefit, Drôme, Auvergne-Rhône-Alpes
- /articles/bons-plans/n-gouja-en-famille-profiter-de-la-plage-a-petit-budget/ | N’Gouja en famille: profiter de la plage à petit budget | bons-plans | Kani-Kéli, Mayotte, Mayotte

### Historique Radar lié

- refresh | /articles/maison/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/ | 2026-11-12T01:28:37.978Z
- opportunity | /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | 2026-10-06T19:20:39.093Z
- opportunity | /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | 2026-11-01T01:35:08.448Z
- opportunity | /articles/evenements/noel-2026-a-quimper-en-famille-village-concert-ou-ateliers-gratuits/ | 2026-11-01T18:35:45.871Z
- refresh | /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | 2026-11-15T12:33:21.761Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | 2026-11-03T15:36:10.146Z
- refresh | /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | 2026-11-13T13:31:11.034Z
- opportunity | /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | 2026-10-30T15:36:05.374Z
- refresh | /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | 2026-11-14T12:29:40.480Z
- opportunity | /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | 2026-10-30T21:26:32.584Z
- opportunity | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-10-30T18:26:56.039Z
- refresh | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-11-17T09:28:43.094Z
- opportunity | /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | 2026-10-09T14:37:47.734Z
- refresh | /articles/activites/parc-animalier-de-gramat-en-famille-animaux-duree-et-conseils-de-visite/ | 2026-11-08T19:34:02.934Z
- refresh | /articles/bons-plans/parc-floral-d-orleans-gratuit-en-hiver-horaires-et-sortie-avec-les-enfants/ | 2026-11-08T07:28:43.032Z
- refresh | /articles/sorties/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets/ | 2026-11-18T23:36:24.271Z
- refresh | /articles/sorties/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/ | 2026-10-22T18:35:19.372Z
- opportunity | /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | 2026-11-05T10:32:54.471Z
- opportunity | /articles/evenements/rencontres-du-ciel-et-de-l-espace-2026-a-paris-que-choisir-avec-des-enfants/ | 2026-11-04T05:34:42.508Z
- opportunity | /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | 2026-10-22T04:59:04.773Z
- refresh | /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | 2026-11-19T03:32:19.795Z
- opportunity | /articles/activites/stages-de-science-a-la-cite-des-sciences-pendant-la-toussaint-2026-lequel-choisir-selon-l-age/ | 2026-10-04T05:39:23.036Z
- opportunity | /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | 2026-10-24T19:30:32.700Z
- refresh | /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | 2026-11-13T16:33:40.259Z
- opportunity | /articles/evenements/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille/ | 2026-11-03T03:34:06.534Z
- refresh | /articles/evenements/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille/ | 2026-11-16T08:38:53.929Z
- refresh | /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/ | 2026-11-06T21:35:30.246Z
- opportunity | /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | 2026-10-05T11:24:52.310Z
- opportunity | /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | 2026-10-29T20:30:33.011Z
- refresh | /articles/activites/visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils/ | 2026-11-08T22:29:18.327Z

## Travaux éditoriaux en cours

### Destination en cours

- Branche: automation/destination-20261010-0720-vincennes
- HEAD: content: destination candidate Vincennes

---
result: enriched
kind: city
name: "Vincennes"
url: "/destinations/ile-de-france/val-de-marne/vincennes/"
intro:
  - "Vincennes est une base pratique pour visiter l'est parisien sans voiture : le château et le Parc floral se combinent à pied, tandis que le zoo de Paris mérite une sortie distincte."
sections:
  - title: "Une journée sur place : associer le château au Parc floral"
    paragraphs:
      - "Pour une journée mêlant découverte et temps de jeu, commencez par le château, puis rejoignez le Parc floral par l'esplanade du château. Comptez environ 1 h 30 à 2 h pour le monument avant de laisser les enfants profiter des aires de jeux du parc. Les pique-niques ne sont pas autorisés dans l'enceinte du château, mais le Parc floral dispose de tables de pique-nique, de points d'eau et de toilettes avec table à langer."
      - "Avec de jeunes enfants qui supportent mal les visites intérieures, faites plutôt du Parc floral la sortie principale : ses jeux et ses jardins évitent de construire la journée autour du donjon et de ses escaliers. L'accès au Parc floral est gratuit d'octobre à mars et payant d'avril à septembre ; le château est un site distinct avec son propre billet."
  - title: "Sur deux jours, garder le zoo pour une autre sortie"
    paragraphs:
      - "Le Parc zoologique de Paris se trouve du côté de la Porte Dorée, dans le 12e arrondissement, et non à côté du château ou à l'intérieur du Parc floral. Depuis le terminus Château de Vincennes du métro 1, le bus 46 permet de le rejoindre. Le zoo recommande au minimum deux heures de visite : avec le trajet et les pauses, mieux vaut lui réserver une seconde journée plutôt que de l'ajouter à la visite du château et du Parc floral."
      - "Pour un séjour d'une seule journée, choisissez donc entre le duo château et Parc floral, facile à enchaîner à pied, et une visite du zoo avec trajet dédié. Ce choix évite de traverser inutilement le bois avec des enfants fatigués."
  - title: "Métro ou RER avec une poussette : deux arrivées différentes"
    paragraphs:
      - "La ligne 1 arrive au pied du château, mais la station Château de Vincennes comporte de nombreuses marches entre les quais et la rue. La gare Vincennes du RER A est équipée d'un ascenseur et d'escalators ; elle se situe à environ dix minutes à pied du château. Avec une poussette lourde ou des difficultés à emprunter les escaliers, le RER A peut donc être plus pratique malgré la marche supplémentaire. Vérifiez l'état des équipements avant de partir."
accommodation:
  title: "Où dormir selon les sorties prévues ?"
  paragraphs:
    - "Si votre programme privilégie le château, le Parc floral et le départ du bus 46 vers le zoo, cherchez un hébergement vers l'avenue de Paris et le terminus Château de Vincennes. Si vous prévoyez aussi plusieurs allers-retours vers le centre de Paris, la proximité de la gare Vincennes du RER A est un autre choix pratique. Avec une poussette, comparez surtout la distance réelle à pied jusqu'à la gare ou au métro plutôt que de réserver simplement un logement annoncé à Vincennes."
sources:
  - title: "Fam Space - Destination Vincennes et ses deux articles"
    url: "https://www.fam-space.fr/destinations/ile-de-france/val-de-marne/vincennes/"
    accessedAt: "2026-10-10"
  - title: "Fam Space - Château de Vincennes en famille"
    url: "https://www.fam-space.fr/articles/sorties/chateau-de-vincennes-en-famille-tarifs-parcours-et-conseils-de-visite/"
    accessedAt: "2026-10-10"
  - title: "Fam Space - Monument jeu d'enfant 2026 au château de Vincennes"
    url: "https://www.fam-space.fr/articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/"
    accessedAt: "2026-10-10"
  - title: "Ville de Paris - Parc floral de Paris"
    url: "https://www.paris.fr/lieux/parc-floral-de-paris-1"
    accessedAt: "2026-10-10"
  - title: "Château de Vincennes - Informations pratiques"
    url: "https://www.chateau-de-vincennes.fr/visiter/informations-pratiques"
    accessedAt: "2026-10-10"
  - title: "Château de Vincennes - Offre adaptée aux visiteurs en mobilité réduite"
    url: "https://www.chateau-de-vincennes.fr/visiter/visiteurs-en-situation-de-handicap/offre-adaptee-aux-visiteurs-en-mobilite-reduite"
    accessedAt: "2026-10-10"
  - title: "Parc zoologique de Paris - Tarifs, horaires et accès"
    url: "https://www.parczoologiquedeparis.fr/fr/tarifs-horaires-acces"
    accessedAt: "2026-10-10"
  - title: "Parc zoologique de Paris - Services et conseils de visite"
    url: "https://www.parczoologiquedeparis.fr/fr/services-conseils-de-visite"
    accessedAt: "2026-10-10"
---

### Destination en cours

- Branche: automation/destination-20261013-0112-haut-rhin
- HEAD: content: destination Haut-Rhin enrichment candidate

---
result: enriched
kind: department
name: "Haut-Rhin"
url: "/destinations/grand-est/haut-rhin/"
intro:
  - "Colmar, Mulhouse et Ungersheim ne se visitent pas de la même manière en famille. Le choix de la base dépend des musées, des villages et de la possibilité de se déplacer sans voiture."
sections:
  - title: "Colmar pour les villages, Mulhouse pour les musées"
    paragraphs:
      - "Colmar convient à une journée dans le centre suivie d'une sortie vers Turckheim ou Munster, accessibles sur la ligne de train vers Metzeral. Pour Riquewihr, Kaysersberg ou Eguisheim, cette ligne ne suffit pas : il faut vérifier les bus ou prévoir une voiture."
      - "Mulhouse est une meilleure base pour les musées techniques : la Cité du Train et Electropolis sont desservis par le tram 3, et le Musée national de l'Automobile par le tram 1. Si ces visites sont prioritaires, dormir à Mulhouse évite de revenir chaque soir depuis Colmar."
  - title: "Deux parcs à Ungersheim : prévoir deux journées"
    paragraphs:
      - "Le Parc du Petit Prince et l'Écomusée d'Alsace sont proches, mais le premier recommande déjà cinq à sept heures de visite. Une famille qui souhaite découvrir les deux aura plus de temps pour profiter de chaque site en leur réservant une journée distincte."
      - "Sans voiture, le train rejoint Bollwiller, puis il faut prévoir une navette à la demande vers les sites. Le Parc du Petit Prince indique le service Filéa ; l'Écomusée annonce une navette Soléa ou trente minutes de marche. Réservez et vérifiez le retour avant d'acheter les billets."
  - title: "Ne pas confondre train et bus touristique"
    paragraphs:
      - "Le Kut'zig dessert en saison plusieurs villages viticoles depuis Colmar, mais ne circule pas toute l'année : sa saison 2026 s'est achevée le 11 octobre. Hors saison, la ligne ferroviaire vers Turckheim et Munster offre un autre choix de sortie, sous réserve des horaires du jour."
accommodation:
  title: "Où se baser dans le Haut-Rhin ?"
  paragraphs:
    - "Choisissez Colmar pour le centre historique, les villages et la vallée de Munster ; choisissez Mulhouse pour les musées et une excursion vers Ungersheim via Bollwiller. Si le séjour combine plusieurs jours dans chaque secteur, deux hébergements peuvent éviter des allers-retours répétés avec les enfants."
sources:
  - title: "Fam Space - Haut-Rhin"
    url: "https://www.fam-space.fr/destinations/grand-est/haut-rhin/"
    accessedAt: "2026-10-13"
  - title: "Mulhouse Tourisme - Transports en commun"
    url: "https://www.tourisme-mulhouse.com/en/what-to-do-in-mulhouse/getting-around-mulhouse-by-public-transport/"
    accessedAt: "2026-10-13"
  - title: "Parc du Petit Prince - Informations pratiques"
    url: "https://parcdupetitprince.com/infos-pratiques"
    accessedAt: "2026-10-13"
  - title: "Écomusée d'Alsace - Accès"
    url: "https://www.ecomusee.alsace/preparez-votre-visite/acces/"
    accessedAt: "2026-10-13"
  - title: "Ville de Turckheim - Accès"
    url: "https://www.turckheim.fr/acces-et-plan/"
    accessedAt: "2026-10-13"
  - title: "Office de tourisme de Colmar - Kut'zig"
    url: "https://www.tourisme-colmar.com/fr/pratique/se-deplacer/kut-zig-le-bus-touristique-cabriolet"
    accessedAt: "2026-10-13"
---

### Phase 1 - refresh

Écris `radar-request.md` avec seulement la décision éditoriale:

```yaml
---
action: start
mode: refresh
targetUrl: "/articles/categorie/slug/"
decision: "Décision précise du lecteur à mieux servir"
affiliationPotential: "Offre existante à conserver, nouvelle action naturelle à vérifier, ou absence d'affiliation naturelle"
---

Brief éditorial court demandé par la phase 1.
```

Ne fournis ni branche, ni SHA, ni `targetPath`, ni `commonQueries`, ni `positionDelta`, ni `impressionRatio`, ni `focusQueries`. Le script les prend dans Git et dans le snapshot.

### Phase 1 - opportunity

Écris le minimum éditorial nécessaire au futur article:

```yaml
---
action: start
mode: opportunity
title: "Titre de travail"
subtitle: "Sous-titre utile"
summary: "Résumé"
category: sorties
location:
  city: "Ville"
  department: "Département"
  region: "Région"
keywords:
  - "mot-clé utile"
sources:
  - title: "Source officielle"
    url: "https://..."
gscSignal: strong_page
gscSourceUrl: "/articles/categorie/page-forte/"
decision: "Décision précise du lecteur"
affiliationPotential: "Piste commerciale réellement vérifiée ou absence naturelle"
---

Brief éditorial court demandé par la phase 1.
```

Le slug, la branche, le SHA et la provenance technique sont générés par le script. Pour `seasonal_opportunity`, utilise `gscSignal: seasonal_opportunity` et omets `gscSourceUrl`: la source officielle du frontmatter sert de preuve. Pour `strong_page`, `gscSourceUrl` reste obligatoire et doit correspondre à une page réellement présente dans `strongPages`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
