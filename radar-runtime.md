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
  "generatedAt": "2026-11-15T10:29:35+01:00",
  "dataThrough": "2026-11-13",
  "from": "2026-10-17",
  "refresh": [
    {
      "url": "/articles/activites/le-pal-2027-en-famille-une-ou-deux-journees-entre-animaux-et-attractions/",
      "title": "Le PAL 2027 en famille: une ou deux journées entre animaux et attractions ?",
      "category": "activites",
      "publishedAt": "2026-11-05T13:02:56+01:00",
      "location": {
        "city": "Saint-Pourçain-sur-Besbre",
        "department": "Allier",
        "region": "Auvergne-Rhône-Alpes"
      },
      "ageDays": 10,
      "rapidDrop": true,
      "peakStart": "2026-11-06",
      "peakEnd": "2026-11-08",
      "recentStart": "2026-11-11",
      "recentEnd": "2026-11-13",
      "peakImpressions": 34,
      "recentImpressions": 10,
      "score": 72,
      "signal": "uncertain",
      "basis": "Visibilité récente : 34 impressions sur trois jours, puis 10 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0.083,
      "focusQueries": [
        "le pal ouverture 2027",
        "ouverture le pal 2027",
        "ouverture pal 2027",
        "date ouverture le pal 2027"
      ]
    },
    {
      "url": "/articles/activites/grottes-de-sare-en-famille-visite-tarifs-et-conseils-pratiques/",
      "title": "Grottes de Sare en famille: visite, tarifs et conseils pratiques",
      "category": "activites",
      "publishedAt": "2026-11-03T13:02:45+01:00",
      "location": {
        "city": "Sare",
        "department": "Pyrénées-Atlantiques",
        "region": "Nouvelle-Aquitaine"
      },
      "ageDays": 12,
      "rapidDrop": true,
      "peakStart": "2026-11-08",
      "peakEnd": "2026-11-10",
      "recentStart": "2026-11-11",
      "recentEnd": "2026-11-13",
      "peakImpressions": 23,
      "recentImpressions": 5,
      "score": 54,
      "signal": "uncertain",
      "basis": "Visibilité récente : 23 impressions sur trois jours, puis 5 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0.429,
      "focusQueries": [
        "les grottes de sare",
        "avis sur grottes de sare",
        "visite tarif grotte de sare",
        "billets pour grottes de sare",
        "grottes de sare avis"
      ]
    },
    {
      "url": "/articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/",
      "title": "Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations",
      "category": "evenements",
      "publishedAt": "2026-10-22T00:03:36+02:00",
      "location": {
        "city": "Rochefort-en-Terre",
        "department": "Morbihan",
        "region": "Bretagne"
      },
      "ageDays": 24,
      "rapidDrop": true,
      "peakStart": "2026-10-24",
      "peakEnd": "2026-10-26",
      "recentStart": "2026-11-11",
      "recentEnd": "2026-11-13",
      "peakImpressions": 173,
      "recentImpressions": 58,
      "score": 345,
      "signal": "coverage_loss",
      "basis": "Visibilité récente : 173 impressions sur trois jours, puis 58 sur les trois derniers jours consolidés; cause non établie. Baisse d'exposition sur les requêtes visibles (ratio 0.231), sans recul de classement comparable établi.",
      "commonQueries": 1,
      "positionDelta": 2,
      "impressionRatio": 0.231,
      "focusQueries": [
        "rochefort en terre noel 2026",
        "rochefort en terre noel",
        "illumination rochefort en terre 2026",
        "rochefort en terre a noel",
        "date marche de noel rochefort en terre"
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
      "ageDays": 24,
      "rapidDrop": true,
      "peakStart": "2026-10-28",
      "peakEnd": "2026-10-30",
      "recentStart": "2026-11-11",
      "recentEnd": "2026-11-13",
      "peakImpressions": 60,
      "recentImpressions": 9,
      "score": 188,
      "signal": "uncertain",
      "basis": "Visibilité récente : 60 impressions sur trois jours, puis 9 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 4,
      "focusQueries": [
        "monstrozoo",
        "monstrozoo 2026"
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
      "ageDays": 15,
      "rapidDrop": true,
      "peakStart": "2026-11-02",
      "peakEnd": "2026-11-04",
      "recentStart": "2026-11-11",
      "recentEnd": "2026-11-13",
      "peakImpressions": 63,
      "recentImpressions": 7,
      "score": 168,
      "signal": "uncertain",
      "basis": "Visibilité récente : 63 impressions sur trois jours, puis 7 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "illumination thabor rennes 2026",
        "les lumineales",
        "illumination thabor 2026",
        "ou"
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
      "ageDays": 20,
      "rapidDrop": true,
      "peakStart": "2026-10-26",
      "peakEnd": "2026-10-28",
      "recentStart": "2026-11-11",
      "recentEnd": "2026-11-13",
      "peakImpressions": 40,
      "recentImpressions": 4,
      "score": 143,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 40 impressions sur trois jours, puis 4 sur les trois derniers jours consolidés; cause non établie.",
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
      "url": "/articles/evenements/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille/",
      "title": "Traîneau flottant de Noël à Metz 2026: dates, horaires et embarquement",
      "category": "evenements",
      "publishedAt": "2026-11-03T03:34:06.455Z",
      "location": {
        "city": "Metz",
        "department": "Moselle",
        "region": "Grand Est"
      },
      "ageDays": 12,
      "rapidDrop": true,
      "peakStart": "2026-11-05",
      "peakEnd": "2026-11-07",
      "recentStart": "2026-11-11",
      "recentEnd": "2026-11-13",
      "peakImpressions": 47,
      "recentImpressions": 0,
      "score": 141,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 47 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "traîneau flottant père Noël Metz 2026",
        "bateau gratuit Noël Metz famille"
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
      "ageDays": 20,
      "rapidDrop": true,
      "peakStart": "2026-10-27",
      "peakEnd": "2026-10-29",
      "recentStart": "2026-11-11",
      "recentEnd": "2026-11-13",
      "peakImpressions": 37,
      "recentImpressions": 2,
      "score": 140,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 37 impressions sur trois jours, puis 2 sur les trois derniers jours consolidés; cause non établie.",
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
      "url": "/articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/",
      "title": "Noël 2026 à Toulon en famille: marché, patinoire et horaires",
      "category": "evenements",
      "publishedAt": "2026-10-31T10:28:17.323Z",
      "location": {
        "city": "Toulon",
        "department": "Var",
        "region": "Provence-Alpes-Côte d’Azur"
      },
      "ageDays": 15,
      "rapidDrop": true,
      "peakStart": "2026-11-01",
      "peakEnd": "2026-11-03",
      "recentStart": "2026-11-11",
      "recentEnd": "2026-11-13",
      "peakImpressions": 47,
      "recentImpressions": 2,
      "score": 135,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 47 impressions sur trois jours, puis 2 sur les trois derniers jours consolidés; cause non établie.",
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
      "url": "/articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/",
      "title": "Noël de Casse-Noisette 2026 à Pierrefonds: visites, dates et tarifs en famille",
      "category": "evenements",
      "publishedAt": "2026-10-27T07:35:50.368Z",
      "location": {
        "city": "Pierrefonds",
        "department": "Oise",
        "region": "Hauts-de-France"
      },
      "ageDays": 19,
      "rapidDrop": true,
      "peakStart": "2026-10-28",
      "peakEnd": "2026-10-30",
      "recentStart": "2026-11-11",
      "recentEnd": "2026-11-13",
      "peakImpressions": 42,
      "recentImpressions": 0,
      "score": 126,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 42 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Noël Casse-Noisette Pierrefonds 2026",
        "château de Pierrefonds Noël enfants",
        "visites féérie Pierrefonds",
        "Casse-Noisette aventure à jouer"
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
      "ageDays": 19,
      "rapidDrop": true,
      "peakStart": "2026-10-28",
      "peakEnd": "2026-10-30",
      "recentStart": "2026-11-11",
      "recentEnd": "2026-11-13",
      "peakImpressions": 43,
      "recentImpressions": 4,
      "score": 117,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 43 impressions sur trois jours, puis 4 sur les trois derniers jours consolidés; cause non établie.",
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
      "ageDays": 18,
      "rapidDrop": true,
      "peakStart": "2026-10-29",
      "peakEnd": "2026-10-31",
      "recentStart": "2026-11-11",
      "recentEnd": "2026-11-13",
      "peakImpressions": 41,
      "recentImpressions": 3,
      "score": 114,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 41 impressions sur trois jours, puis 3 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Bâtiment B Réunion Graffiti",
        "street art en famille",
        "Saint-Denis La Réunion"
      ]
    },
    {
      "url": "/articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/",
      "title": "Noël 2026 à Cannes en famille: marché du centre et Palm Beach",
      "category": "evenements",
      "publishedAt": "2026-10-31T22:36:58.730Z",
      "location": {
        "city": "Cannes",
        "department": "Alpes-Maritimes",
        "region": "Provence-Alpes-Côte d’Azur"
      },
      "ageDays": 15,
      "rapidDrop": true,
      "peakStart": "2026-11-03",
      "peakEnd": "2026-11-05",
      "recentStart": "2026-11-11",
      "recentEnd": "2026-11-13",
      "peakImpressions": 39,
      "recentImpressions": 1,
      "score": 114,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 39 impressions sur trois jours, puis 1 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Noël Cannes 2026 famille",
        "marché de Noël Cannes 2026",
        "Village de Noël Palm Beach Cannes"
      ]
    },
    {
      "url": "/articles/evenements/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel/",
      "title": "Noël 2026 à Chambéry en famille: marchés, parade et ateliers",
      "category": "evenements",
      "publishedAt": "2026-11-01T09:37:48.682Z",
      "location": {
        "city": "Chambéry",
        "department": "Savoie",
        "region": "Auvergne-Rhône-Alpes"
      },
      "ageDays": 14,
      "rapidDrop": true,
      "peakStart": "2026-11-03",
      "peakEnd": "2026-11-05",
      "recentStart": "2026-11-11",
      "recentEnd": "2026-11-13",
      "peakImpressions": 35,
      "recentImpressions": 3,
      "score": 96,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 35 impressions sur trois jours, puis 3 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Noël Chambéry 2026 famille",
        "marché de Noël Chambéry 2026 horaires",
        "parade Père Noël Chambéry 27 novembre 2026",
        "village de Noël Palais de Justice Chambéry",
        "Fabrique de Noël Rubanox 12 décembre 2026"
      ]
    },
    {
      "url": "/articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/",
      "title": "Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès",
      "category": "evenements",
      "publishedAt": "2026-10-19T19:48:02.057Z",
      "location": {
        "city": "Lyon",
        "department": "Rhône",
        "region": "Auvergne-Rhône-Alpes"
      },
      "ageDays": 27,
      "rapidDrop": true,
      "peakStart": "2026-10-20",
      "peakEnd": "2026-10-22",
      "recentStart": "2026-11-11",
      "recentEnd": "2026-11-13",
      "peakImpressions": 20,
      "recentImpressions": 0,
      "score": 95,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 20 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Fête des Lumières Lyon 2026 famille",
        "Fête des Lumières Lyon 2026 horaires enfants",
        "Fête des Lumières Lyon poussette parcours"
      ]
    }
  ],
  "strongPages": [
    {
      "url": "/articles/evenements/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/",
      "title": "Fête foraine de Dijon 2026: dates, horaires et budget avec les enfants",
      "category": "evenements",
      "recentImpressions": 1145,
      "recentClicks": 20,
      "recentPosition": 8.583,
      "retention": 0.627
    },
    {
      "url": "/articles/evenements/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales/",
      "title": "Fêtes de l’Ours 2027: quelle fête choisir en famille dans les Pyrénées-Orientales ?",
      "category": "evenements",
      "recentImpressions": 193,
      "recentClicks": 14,
      "recentPosition": 4.824,
      "retention": 1.451
    },
    {
      "url": "/articles/evenements/cirque-de-noel-2026-au-mans-horaires-tarifs-et-seance-a-choisir-avec-des-enfants/",
      "title": "Cirque de Noël 2026 au Mans: horaires, tarifs et séance à choisir avec des enfants",
      "category": "evenements",
      "recentImpressions": 195,
      "recentClicks": 11,
      "recentPosition": 6.867,
      "retention": 0.855
    },
    {
      "url": "/articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/",
      "title": "ALFest 2026 à Annecy en famille: horaires, jeux et braderie",
      "category": "evenements",
      "recentImpressions": 174,
      "recentClicks": 8,
      "recentPosition": 5.494,
      "retention": 4.579
    },
    {
      "url": "/articles/cuisine/ou-manger-des-fouees-en-famille-autour-de-saumur/",
      "title": "Où manger des fouées en famille autour de Saumur ?",
      "category": "cuisine",
      "recentImpressions": 186,
      "recentClicks": 5,
      "recentPosition": 11.167,
      "retention": 0.602
    },
    {
      "url": "/articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/",
      "title": "Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille",
      "category": "evenements",
      "recentImpressions": 138,
      "recentClicks": 5,
      "recentPosition": 8.435,
      "retention": 0.836
    },
    {
      "url": "/articles/vie-pratique/cantine-au-college-dans-le-pas-de-calais-les-tarifs-2026-et-les-reductions-pour-les-boursiers/",
      "title": "Cantine au collège dans le Pas-de-Calais: les tarifs 2026 et les réductions pour les boursiers",
      "category": "vie-pratique",
      "recentImpressions": 101,
      "recentClicks": 5,
      "recentPosition": 5.753,
      "retention": 0.697
    },
    {
      "url": "/articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/",
      "title": "Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite",
      "category": "sorties",
      "recentImpressions": 422,
      "recentClicks": 4,
      "recentPosition": 10.427,
      "retention": 1.353
    },
    {
      "url": "/articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/",
      "title": "Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël",
      "category": "evenements",
      "recentImpressions": 169,
      "recentClicks": 4,
      "recentPosition": 8.367,
      "retention": 0.944
    },
    {
      "url": "/articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/",
      "title": "Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates",
      "category": "vie-pratique",
      "recentImpressions": 151,
      "recentClicks": 4,
      "recentPosition": 6.093,
      "retention": 0.689
    }
  ],
  "excluded": {
    "expired": 182,
    "cooling": 60
  },
  "warnings": [
    "Diagnostics par requêtes : 5/5.",
    "Les baisses d'impressions ne prouvent ni désindexation ni perte de classement."
  ]
}

## Catalogue ciblé (doublons et publications récentes)

### Articles comparables et publications récentes

- /articles/activites/le-pal-2027-en-famille-une-ou-deux-journees-entre-animaux-et-attractions/ | Le PAL 2027 en famille: une ou deux journées entre animaux et attractions ? | activites | Saint-Pourçain-sur-Besbre, Allier, Auvergne-Rhône-Alpes
- /articles/activites/le-pal-ou-touroparc-en-famille-quel-parc-choisir-en-2026/ | Le PAL ou Touroparc en famille: quel parc choisir en 2026? | activites
- /articles/voyages/parc-asterix-en-famille-en-2026-une-ou-deux-journees-quel-hotel-et-quel-budget-prevoir/ | Parc Astérix en famille en 2026: une ou deux journées, quel hôtel et quel budget prévoir | voyages | Plailly, Oise, Hauts-de-France
- /articles/sorties/sortie-ferme-pedagogique-en-famille/ | Ferme pédagogique en famille: comment choisir une visite adaptée aux enfants | sorties
- /articles/activites/grottes-de-sare-en-famille-visite-tarifs-et-conseils-pratiques/ | Grottes de Sare en famille: visite, tarifs et conseils pratiques | activites | Sare, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/sorties/grottes-d-isturitz-et-d-oxocelhaya-avec-des-enfants-les-contraintes-a-connaitre-avant-la-visite/ | Grottes d'Isturitz et d'Oxocelhaya avec des enfants: les contraintes à connaître avant la visite | sorties | Saint-Martin-d'Arberoue, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/activites/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre/ | Grottes de Thouzon avec des enfants: préparer la visite sous terre | activites | Le Thor, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/activites/grottes-de-saulges-en-famille-margot-ou-rochefort-selon-l-age/ | Grottes de Saulges en famille: découvrir Margot, Rochefort et le musée | activites | Thorigné-en-Charnie, Mayenne, Pays de la Loire
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | Noël 2026 à Toulon en famille: marché, patinoire et horaires | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | MonstroZoo 2026-2027 à Beauval: parcours inclus, visite guidée et tarifs | evenements | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/beauval-a-la-toussaint-2026-billets-duree-de-visite-et-hebergement/ | Beauval à la Toussaint 2026: billets, durée de visite et hébergement | voyages | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/zooparc-de-beauval-en-famille-en-2026-un-ou-deux-jours-quel-hotel-et-quel-budget-prevoir/ | ZooParc de Beauval: billets, 1 ou 2 jours, hôtel et budget 2026 | voyages | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/sorties/festival-photo-la-gacilly-2026-en-famille/ | Festival Photo La Gacilly 2026: un parcours gratuit à hauteur d’enfant | sorties | La Gacilly, Morbihan, Bretagne
- /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | Luminéales du Thabor 2026 à Rennes: tarifs, horaires et visite en famille | evenements | Rennes, Ille-et-Vilaine, Bretagne
- /articles/activites/balade-a-velo-autour-de-rennes-quel-parcours-choisir-avec-des-enfants/ | Balade à vélo autour de Rennes: quel parcours choisir avec des enfants? | activites | Rennes, Ille-et-Vilaine, Bretagne
- /articles/vie-pratique/rennes-avec-des-enfants-les-transports-sont-gratuits-avant-12-ans-mais-pas-sans-carte/ | Rennes avec des enfants: transports gratuits avant 12 ans, comment ça marche? | vie-pratique | Rennes, Ille-et-Vilaine, Bretagne
- /articles/sorties/espace-des-sciences-a-rennes-avec-des-enfants-expositions-experiences-et-planetarium/ | Espace des sciences à Rennes avec des enfants: expositions, expériences et planétarium | sorties | Rennes, Ille-et-Vilaine, Bretagne
- /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | Festival Enfantillages 2026 à Valbonne: spectacles gratuits et cinéma en famille | evenements | Valbonne, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/festival-au-bonheur-des-momes-2026-en-famille/ | Au Bonheur des Mômes 2026: pass, spectacles et journée au Grand-Bornand | evenements | Le Grand-Bornand, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | Festival MARMOE 2026 à Montreuil: spectacles, ateliers et sorties jusqu'au 29 novembre | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/rue-enfants-montcuq-2026-famille/ | La Rue des Enfants 2026 à Montcuq: deux jours d’arts de rue en famille | evenements | Montcuq-en-Quercy-Blanc, Lot, Occitanie
- /articles/evenements/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille/ | Traîneau flottant de Noël à Metz 2026: dates, horaires et embarquement | evenements | Metz, Moselle, Grand Est
- /articles/evenements/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants/ | Fontaines dansantes d'hiver à Metz 2026-2027: dates, horaires et conseils en famille | evenements | Metz, Moselle, Grand Est
- /articles/evenements/noel-a-metz-2026-en-famille-marches-et-sentier-des-lanternes/ | Noël à Metz 2026 en famille: marchés et Sentier des Lanternes | evenements | Metz, Moselle, Grand Est
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | Festival Playground 2026: spectacles de danse en famille, dates et tarifs | evenements | Bagnolet, Seine-Saint-Denis, Île-de-France
- /articles/activites/visiter-le-stade-de-france-en-famille-coulisses-musee-et-conseils-pratiques/ | Visiter le Stade de France en famille: coulisses, musée et conseils pratiques | activites | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/evenements/chambly-kids-festival-2027-quatre-spectacles-pour-les-enfants-dates-et-ages/ | Chambly Kids Festival 2027: quatre spectacles pour les enfants, dates et âges | evenements | Chambly, Oise, Hauts-de-France
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires et accès | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/vie-pratique/gare-de-toulon-avec-des-enfants-bagages-parking-et-correspondances/ | Gare de Toulon avec des enfants: bagages, parking et correspondances | vie-pratique | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | Noël de Casse-Noisette 2026 à Pierrefonds: visites, dates et tarifs en famille | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | Noël 2026 à Chantilly: Le Noël oublié, billets et séances en famille | evenements | Chantilly, Oise, Hauts-de-France
- /articles/evenements/noel-2026-au-chateau-de-grignan-dates-tarifs-et-visite-en-famille/ | Noël 2026 au château de Grignan: dates, tarifs et visite en famille | evenements | Grignan, Drôme, Auvergne-Rhône-Alpes
- /articles/evenements/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/ | Festival de la Sainte-Barbe 2026 à Lens-Liévin: programme en famille du 4 au 6 décembre | evenements | Lens, Pas-de-Calais, Hauts-de-France
- /articles/sorties/toussaint-2026-au-louvre-lens-quelle-activite-choisir-selon-l-age/ | Toussaint 2026 au Louvre-Lens: quelle activité choisir selon l'âge? | sorties | Lens, Pas-de-Calais, Hauts-de-France
- /articles/maison/lens-lievin-jusqu-a-240-pour-recuperer-l-eau-de-pluie/ | Lens-Liévin: jusqu'à 240 € pour récupérer l'eau de pluie | maison | Lens, Pas-de-Calais, Hauts-de-France
- /articles/evenements/cerfs-volants-de-berck-2027-organiser-sa-visite-en-famille/ | Cerfs-volants de Berck 2027: organiser sa visite en famille | evenements | Berck-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/evenements/batiment-b-a-saint-denis-decouvrir-le-street-art-en-famille/ | Bâtiment B à Saint-Denis: découvrir le street art en famille | evenements | Saint-Denis, La Réunion, La Réunion
- /articles/voyages/dormir-a-saint-denis-pour-visiter-paris-avec-des-enfants-pleyel-ou-basilique/ | Dormir à Saint-Denis pour visiter Paris avec des enfants: Pleyel ou Basilique? | voyages | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | Monument jeu d'enfant 2026 à Saint-Denis: atelier Dagobert le 17 octobre | evenements | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | Noël 2026 à Cannes en famille: marché du centre et Palm Beach | evenements | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/ | Marché de Noël de Lille 2026 en famille: village, Grande Roue et infos pratiques | evenements | Lille, Nord, Hauts-de-France
- /articles/evenements/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel/ | Noël 2026 à Chambéry en famille: marchés, parade et ateliers | evenements | Chambéry, Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | Marché de Noël 100 % Côte-d’Or à Dijon 2026: horaires, spectacles et Père Noël | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/slava-s-snowshow-a-lyon-en-2026-quelle-seance-choisir-en-famille/ | Slava’s Snowshow à Lyon 2026: dates, tarifs et conseils en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/vie-pratique/location-de-voiture-a-lyon-avec-des-enfants-ce-qu-il-faut-verifier-avant-de-reserver/ | Location de voiture à Lyon avec des enfants: ce qu'il faut vérifier avant de réserver | vie-pratique | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/ | Fête foraine de Dijon 2026: dates, horaires et budget avec les enfants | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | Foire de Dijon 2026 avec les enfants: gratuités, ateliers et Ferme Côte-d'Or | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | Festival des Petits Explorateurs 2026 à Dijon: ateliers, horaires et tarifs | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales/ | Fêtes de l’Ours 2027: quelle fête choisir en famille dans les Pyrénées-Orientales ? | evenements | Pyrénées-Orientales, Occitanie
- /articles/parentalite/quel-laep-choisir-a-perpignan-selon-l-age-et-le-jour/ | Quel LAEP choisir à Perpignan selon l'âge et le jour ? | parentalite | Perpignan, Pyrénées-Orientales, Occitanie
- /articles/activites/parc-animalier-des-angles-en-famille-quel-circuit-choisir-et-comment-preparer-la-visite/ | Parc animalier des Angles en famille: quel circuit choisir et comment préparer la visite ? | activites | Les Angles, Pyrénées-Orientales, Occitanie
- /articles/bons-plans/musee-de-tautavel-moins-cher-avec-lio-le-bon-plan-a-connaitre/ | Musée de Tautavel moins cher avec liO: le bon plan à connaître | bons-plans | Tautavel, Pyrénées-Orientales, Occitanie
- /articles/evenements/cirque-de-noel-2026-au-mans-horaires-tarifs-et-seance-a-choisir-avec-des-enfants/ | Cirque de Noël 2026 au Mans: horaires, tarifs et séance à choisir avec des enfants | evenements | Le Mans, Sarthe, Pays de la Loire
- /articles/voyages/le-mans-sans-voiture-avec-des-enfants-ou-dormir-et-comment-organiser-un-week-end/ | Le Mans sans voiture avec des enfants: où dormir et comment organiser un week-end | voyages | Le Mans, Sarthe, Pays de la Loire
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | ALFest 2026 à Annecy en famille: horaires, jeux et braderie | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/court-circuit-2026-a-annecy-en-famille-spectacles-tarifs-et-conseils/ | Court Circuit 2026 à Annecy en famille: spectacles, tarifs et conseils | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/fete-du-lac-annecy-2026-en-famille/ | Fête du lac d’Annecy 2026: préparer la soirée avec des enfants | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/vie-pratique/bus-a-annecy-avec-des-enfants-quel-ticket-choisir-et-comment-eviter-les-galeres/ | Bus à Annecy avec des enfants: quel ticket choisir et comment éviter les galères | vie-pratique | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/cuisine/ou-manger-des-fouees-en-famille-autour-de-saumur/ | Où manger des fouées en famille autour de Saumur ? | cuisine | Saumur, Maine-et-Loire, Pays de la Loire
- /articles/parentalite/laep-en-maine-et-loire-ou-aller-avec-son-bebe-et-comment-se-passe-l-accueil/ | LAEP en Maine-et-Loire: où aller avec son bébé et comment se passe l'accueil ? | parentalite | Maine-et-Loire, Pays de la Loire
- /articles/sorties/chasse-tresor-galerie-david-angers-2026/ | Chasse au trésor à Angers: les 4 à 6 ans enquêtent à la Galerie David | sorties | Angers, Maine-et-Loire, Pays de la Loire
- /articles/sorties/chateau-de-boutheon-avec-des-enfants-chateau-parc-ou-billet-couple/ | Château de Bouthéon avec des enfants: château, parc ou billet couplé? | sorties | Andrézieux-Bouthéon, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | Noël à Caen 2026 en famille: marché de Noël et visite illuminée | evenements | Caen, Calvados, Normandie
- /articles/vie-pratique/cantine-au-college-dans-le-pas-de-calais-les-tarifs-2026-et-les-reductions-pour-les-boursiers/ | Cantine au collège dans le Pas-de-Calais: les tarifs 2026 et les réductions pour les boursiers | vie-pratique | Hénin-Beaumont, Pas-de-Calais, Hauts-de-France
- /articles/bons-plans/cantine-au-college-dans-l-herault-jusqu-a-3-60-d-aide-par-repas/ | Cantine au collège dans l'Hérault: jusqu'à 3,60 € d'aide par repas | bons-plans | Montpellier, Hérault, Occitanie
- /articles/vie-pratique/cantine-au-college-en-deux-sevres-comment-s-inscrire-en-ligne-pour-2026-2027/ | Cantine au collège en Deux-Sèvres: comment s'inscrire en ligne pour 2026-2027 | vie-pratique | Niort, Deux-Sèvres, Nouvelle-Aquitaine
- /articles/vie-pratique/cantine-au-college-en-essonne-obtenir-son-tarif-2026-2027-sans-refaire-la-mauvaise-demarche/ | Cantine au collège en Essonne: obtenir son tarif 2026-2027 sans refaire la mauvaise démarche | vie-pratique | Évry-Courcouronnes, Essonne, Île-de-France
- /articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/ | Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite | sorties | Paris, Paris, Île-de-France
- /articles/activites/stages-de-science-a-la-cite-des-sciences-pendant-la-toussaint-2026-lequel-choisir-selon-l-age/ | Stages de science à la Cité des sciences à la Toussaint 2026: durées, âges et tarifs | activites | Paris, Paris, Île-de-France
- /articles/evenements/rencontres-du-ciel-et-de-l-espace-2026-a-paris-que-choisir-avec-des-enfants/ | Rencontres du ciel et de l’espace 2026 à Paris: ateliers, âges et billets en famille | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | Vacances de la Toussaint 2026 à la Cité des sciences: les ateliers numériques gratuits avec des enfants | sorties | Paris, Paris, Île-de-France
- /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/maison/composteur-gratuit-a-angers-loire-metropole-qui-peut-le-demander/ | Composteur gratuit à Angers Loire Métropole: qui peut le demander? | maison | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | Monument Jeu d’Enfant au château d’Angers: dragons et ateliers le 17 octobre 2026 | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/vie-pratique/garde-d-enfants-sur-horaires-atypiques-a-angers-qui-peut-demander-l-aide-du-ccas/ | Garde d'enfants sur horaires atypiques à Angers: qui peut demander l'aide du CCAS? | vie-pratique | Angers, Maine-et-Loire, Pays de la Loire
- /articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/ | Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates | vie-pratique | Toulouse, Haute-Garonne, Occitanie
- /articles/maison/moustique-tigre-en-haute-garonne-proteger-la-maison-et-le-jardin/ | Moustique tigre en Haute-Garonne: protéger la maison et le jardin | maison | Toulouse, Haute-Garonne, Occitanie
- /articles/parentalite/parents-en-deux-sevres-ou-trouver-une-ecoute-et-un-accompagnement/ | Parents en Deux-Sèvres: où trouver une écoute et un accompagnement ? | parentalite | Deux-Sèvres, Nouvelle-Aquitaine
- /articles/maison/a-crest-amenager-sa-maison-avec-la-chignole/ | À Crest, aménager sa maison avec La Chignole | maison | Crest, Drôme, Auvergne-Rhône-Alpes
- /articles/voyages/valmorel-et-doucy-sans-ski-avec-des-enfants-luge-snowtubing-et-sejour-d-hiver/ | Valmorel et Doucy sans ski avec des enfants: luge, snowtubing et séjour d'hiver | voyages | Les Avanchers-Valmorel, Savoie, Auvergne-Rhône-Alpes
- /articles/activites/parc-phoenix-a-nice-en-famille-serre-tropicale-animaux-et-jeux/ | Parc Phoenix à Nice en famille: serre tropicale, animaux et jeux | activites | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-2026-au-puy-du-fou-en-famille-spectacles-et-visite-en-hiver/ | Noël 2026 au Puy du Fou en famille: spectacles et visite en hiver | evenements | Les Epesses, Vendée, Pays de la Loire
- /articles/vie-pratique/transport-scolaire-dans-l-eure-nomad-epn-ou-semo-quel-reseau-choisir/ | Transport scolaire dans l'Eure: NOMAD, EPN ou SEMO, quel réseau choisir ? | vie-pratique | Eure, Normandie
- /articles/activites/les-z-accroches-pres-de-nevers-quel-accrobranche-choisir-avec-des-enfants/ | Les Z'Accrochés près de Nevers: quel accrobranche choisir avec des enfants? | activites | Sauvigny-les-Bois, Nièvre, Bourgogne-Franche-Comté
- /articles/voyages/narbonne-en-famille-hors-saison-un-week-end-entre-romains-halles-et-canal/ | Narbonne en famille hors saison: un week-end entre Romains, Halles et canal | voyages | Narbonne, Aude, Occitanie
- /articles/cuisine/atelier-chocolat-a-colmar-avec-des-enfants-fabriquer-sa-tablette-chez-choco-story/ | Atelier chocolat à Colmar avec des enfants: fabriquer sa tablette chez Choco-Story | cuisine | Colmar, Haut-Rhin, Grand Est
- /articles/voyages/pont-d-espagne-en-hiver-avec-des-enfants-luge-raquettes-et-acces-depuis-cauterets/ | Pont d’Espagne en hiver avec des enfants: luge, raquettes et accès depuis Cauterets | voyages | Cauterets, Hautes-Pyrénées, Occitanie
- /articles/sorties/lascaux-iv-en-famille-decouvrir-les-peintures-et-choisir-sa-visite/ | Lascaux IV en famille: découvrir les peintures et choisir sa visite | sorties | Montignac-Lascaux, Dordogne, Nouvelle-Aquitaine
- /articles/vie-pratique/transport-scolaire-dans-les-pyrenees-atlantiques-txik-txak-ou-region-en-2026-2027/ | Transport scolaire dans les Pyrénées-Atlantiques: TXIK TXAK ou Région en 2026-2027? | vie-pratique | Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/bons-plans/le-mont-saint-michel-en-famille-a-petit-prix-en-automne-et-en-hiver/ | Le Mont-Saint-Michel en famille à petit prix en automne et en hiver | bons-plans | Le Mont-Saint-Michel, Manche, Normandie
- /articles/voyages/moret-sur-loing-en-famille-sans-voiture-une-journee-entre-remparts-et-riviere/ | Moret-sur-Loing en famille sans voiture: une journée entre remparts et rivière | voyages | Moret-sur-Loing, Seine-et-Marne, Île-de-France
- /articles/maison/maison-froide-dans-les-hautes-alpes-quels-travaux-envisager-avant-l-hiver/ | Maison froide dans les Hautes-Alpes: quels travaux envisager avant l'hiver? | maison | Hautes-Alpes, Provence-Alpes-Côte d’Azur
- /articles/parentalite/a-pamandzi-decouvrir-le-laep-avec-son-jeune-enfant/ | À Pamandzi, découvrir le LAEP avec son jeune enfant | parentalite | Pamandzi, Mayotte, Mayotte
- /articles/vie-pratique/chateauroux-sans-voiture-avec-des-enfants-bus-gratuits-et-transports-scolaires/ | Châteauroux sans voiture avec des enfants: bus gratuits et transports scolaires | vie-pratique | Châteauroux, Indre, Centre-Val de Loire
- /articles/parentalite/lieux-d-accueil-enfants-parents-dans-le-bas-rhin-ou-aller-avec-un-tout-petit/ | Lieux d'accueil enfants-parents dans le Bas-Rhin: où aller avec un tout-petit? | parentalite | Bas-Rhin, Grand Est
- /articles/cuisine/cuisiner-la-banane-en-martinique-du-ti-nain-au-gouter-familial/ | Cuisiner la banane en Martinique: du ti-nain au goûter familial | cuisine | Martinique
- /articles/cuisine/ateliers-de-cuisine-pour-enfants-a-montpellier-ou-aller-selon-leur-age/ | Ateliers de cuisine pour enfants à Montpellier: où aller selon leur âge? | cuisine | Montpellier, Hérault, Occitanie
- /articles/maison/composter-a-la-reunion-avec-ou-sans-jardin/ | Composter à La Réunion, avec ou sans jardin | maison | La Réunion
- /articles/maison/louer-une-maison-dans-les-landes-en-famille-ocean-lac-ou-foret/ | Louer une maison dans les Landes en famille: océan, lac ou forêt? | maison | Landes, Nouvelle-Aquitaine
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/activites/musee-de-la-ceramique-de-desvres-en-famille-visite-ateliers-et-tarifs/ | Musée de la Céramique de Desvres en famille: visite, ateliers et tarifs | activites | Desvres, Pas-de-Calais, Hauts-de-France
- /articles/vie-pratique/changer-de-gare-a-paris-avec-des-enfants-preparer-sa-correspondance/ | Changer de gare à Paris avec des enfants: préparer sa correspondance | vie-pratique | Paris, Paris, Île-de-France
- /articles/cuisine/ateliers-patisserie-en-essonne-ou-cuisiner-avec-ses-enfants/ | Ateliers pâtisserie en Essonne: où cuisiner avec ses enfants? | cuisine | Essonne, Île-de-France
- /articles/sorties/chateau-d-if-a-marseille-en-famille-bateau-visite-et-tarifs/ | Château d'If à Marseille en famille: bateau, visite et tarifs | sorties | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur

### Historique Radar lié

- opportunity | /articles/evenements/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/ | 2026-10-25T17:34:53.718Z
- refresh | /articles/evenements/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/ | 2026-11-12T12:32:06.313Z
- opportunity | /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | 2026-10-21T16:31:41.000Z
- opportunity | /articles/evenements/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants/ | 2026-11-03T06:32:33.600Z
- refresh | /articles/activites/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre/ | 2026-11-10T09:32:01.095Z
- opportunity | /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | 2026-10-31T19:33:18.323Z
- opportunity | /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | 2026-10-29T14:26:32.277Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | 2026-10-22T15:49:20.816Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | 2026-10-13T09:50:29.435Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | 2026-10-10T08:38:56.921Z
- opportunity | /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | 2026-10-31T22:36:58.800Z
- opportunity | /articles/evenements/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel/ | 2026-11-01T09:37:48.790Z
- opportunity | /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | 2026-10-31T10:28:17.432Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | 2026-10-26T21:31:06.119Z
- refresh | /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | 2026-11-12T18:32:15.897Z
- opportunity | /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | 2026-10-30T21:26:32.584Z
- opportunity | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-10-30T18:26:56.039Z
- opportunity | /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | 2026-10-27T07:35:50.437Z
- opportunity | /articles/evenements/rencontres-du-ciel-et-de-l-espace-2026-a-paris-que-choisir-avec-des-enfants/ | 2026-11-04T05:34:42.508Z
- opportunity | /articles/evenements/slava-s-snowshow-a-lyon-en-2026-quelle-seance-choisir-en-famille/ | 2026-11-03T22:37:45.305Z
- opportunity | /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | 2026-10-30T12:36:12.349Z
- opportunity | /articles/activites/stages-de-science-a-la-cite-des-sciences-pendant-la-toussaint-2026-lequel-choisir-selon-l-age/ | 2026-10-04T05:39:23.036Z
- opportunity | /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | 2026-10-11T19:35:57.703Z
- opportunity | /articles/sorties/toussaint-2026-au-louvre-lens-quelle-activite-choisir-selon-l-age/ | 2026-10-07T19:13:00.627Z
- opportunity | /articles/evenements/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille/ | 2026-11-03T03:34:06.534Z
- opportunity | /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | 2026-10-05T11:24:52.310Z

## Travaux éditoriaux en cours

### Publication en cours

- Branche: automation/publication-20261115-1358-sujet-exposition-niepce-et-apres-de-quelques-inventions-en-photographi
- HEAD: publication: phase 3 20261115-1358-sujet-exposition-niepce-et-apres-de-quelques-inventions-en-photographi

---
category: "evenements"
title: "Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône"
subtitle: "Couleur, relief et panoramas au musée Nicéphore Niépce, du 21 novembre 2026 au 31 janvier 2027"
summary: "À Chalon-sur-Saône, une exposition gratuite retrace les inventions qui ont transformé la photographie. Idées pour la découvrir avec les enfants et préparer la visite."
keywords:
  - "Niépce et après exposition"
  - "musée Nicéphore Niépce en famille"
  - "bicentenaire photographie Chalon-sur-Saône"
location:
  city: "Chalon-sur-Saône"
  department: "Saône-et-Loire"
  region: "Bourgogne-Franche-Comté"
eventEndsAt: "2027-01-31"
sources:
  - title: "Musée Nicéphore Niépce, exposition Niépce, et après ?"
    url: "https://www.museeniepce.com/"
  - title: "Office de tourisme du Grand Chalon, programme du bicentenaire"
    url: "https://www.achalon.com/carnet-du-grand-chalon/bicentenaire-de-la-photo-a-chalon/"
  - title: "Office de tourisme du Grand Chalon, visites guidées Zoom sur l'exposition temporaire"
    url: "https://www.achalon.com/offres/zoom-sur-lexposition-temporaire-chalon-sur-saone-fr-6863782/"
  - title: "Office de tourisme du Grand Chalon, atelier Dans le pano !"
    url: "https://www.achalon.com/offres/dans-le-pano-de-6-a-8-ans-chalon-sur-saone-fr-6861503/"
  - title: "Office de tourisme du Grand Chalon, atelier Photo-sculpteur !"
    url: "https://www.achalon.com/offres/photo-sculpteur-9-12-ans-chalon-sur-saone-fr-6861499/"
---

À quoi ressemblaient les photos avant les écrans et les smartphones ? À Chalon-sur-Saône, en Saône-et-Loire, le musée Nicéphore Niépce propose de remonter le fil des inventions qui ont changé notre manière de fabriquer des images. Son exposition **« Niépce, et après ? De quelques inventions en photographie »**, présentée **du 21 novembre 2026 au 31 janvier 2027**, peut devenir une sortie familiale autour d'une question simple: comment est-on passé des premières photographies aux images en couleur, en relief ou panoramiques ?

L'exposition s'inscrit dans le bicentenaire de la photographie. Le [musée confirme ses dates et son inauguration le 20 novembre](https://www.museeniepce.com/). Il s'agit d'une exposition historique à regarder et à discuter, pas d'un atelier interactif permanent pour enfants.

## Ce que les enfants peuvent découvrir

Nicéphore Niépce, inventeur lié au territoire chalonnais, a ouvert la voie à la fixation durable d'une image grâce à la lumière. Mais les photographes ont ensuite cherché à aller plus loin: restituer les couleurs, donner une impression de profondeur et élargir le champ de vision. Ce sont les pistes explorées par l'exposition, à travers des inventions et des images issues de l'histoire photographique, comme le présente le [programme du bicentenaire du Grand Chalon](https://www.achalon.com/carnet-du-grand-chalon/bicentenaire-de-la-photo-a-chalon/).

**La couleur:** aujourd'hui, elle paraît évidente sur une photo. Pourtant, reproduire fidèlement les couleurs a demandé de nombreuses expérimentations. Devant les images, on peut demander aux enfants ce qui change entre une scène en noir et blanc et une scène en couleur, et ce que chacune laisse imaginer.

**Le relief:** certains procédés photographiques cherchent à donner une impression de trois dimensions. C'est l'occasion de parler de nos deux yeux, qui ne voient pas exactement la même image, et de la manière dont notre cerveau perçoit la profondeur.

**Le panorama:** comment montrer un paysage trop large pour une seule image ? Les enfants connaissent peut-être déjà le mode panorama d'un téléphone. Ils peuvent comparer cette fonction moderne aux anciennes recherches pour élargir le regard.

Ces trois fils conducteurs permettent de choisir quelques pièces marquantes plutôt que de vouloir tout expliquer. Avec de jeunes enfants, une visite courte et des questions ouvertes seront souvent plus intéressantes qu'un parcours exhaustif. Aucun âge minimum officiel n'est annoncé pour la visite libre.

## Visite libre ou rendez-vous accompagné ?

**La visite libre du musée est gratuite**, selon les informations pratiques publiées par l'[office de tourisme du Grand Chalon](https://www.achalon.com/carnet-du-grand-chalon/bicentenaire-de-la-photo-a-chalon/). Elle laisse la possibilité d'avancer au rythme des enfants.

Pour approfondir, deux visites guidées « Zoom sur... l'exposition temporaire » sont annoncées **le dimanche 13 décembre 2026 et le dimanche 17 janvier 2027, de 15h à 16h30**. Le [programme de ces visites](https://www.achalon.com/offres/zoom-sur-lexposition-temporaire-chalon-sur-saone-fr-6863782/) indique un tarif adulte à partir de 3,60 € et la gratuité pour les moins de 18 ans. Ces horaires et tarifs concernent les visites guidées, pas l'entrée libre au musée. Vérifiez les modalités de participation auprès de l'organisateur avant de venir.

Deux ateliers distincts sont aussi annoncés pendant les vacances de décembre: [« Photo-sculpteur ! » pour les 9-12 ans](https://www.achalon.com/offres/photo-sculpteur-9-12-ans-chalon-sur-saone-fr-6861499/) le 23 décembre et [« Dans le pano ! » pour les 6-8 ans](https://www.achalon.com/offres/dans-le-pano-de-6-a-8-ans-chalon-sur-saone-fr-6861503/) le 30 décembre, tous deux de 14h30 à 16h et annoncés gratuits. Ce sont des séances datées, à ne pas confondre avec des animations disponibles à toute heure dans l'exposition. Renseignez-vous sur les inscriptions et les places.

## Préparer la sortie au musée

Le musée Nicéphore Niépce se trouve **28 quai des Messageries, 71100 Chalon-sur-Saône**, près du centre historique et des quais de Saône. D'après les [informations de l'office de tourisme](https://www.achalon.com/carnet-du-grand-chalon/bicentenaire-de-la-photo-a-chalon/), il ouvre de **9h30 à 11h45 et de 14h à 17h45**, tous les jours sauf le mardi. Pour confirmer une ouverture particulière ou poser une question sur l'accueil des poussettes et l'accessibilité, contactez le musée au **03 85 48 41 98**.

La visite peut se prolonger à pied dans le centre ancien et sur les quais. Pour les enfants qui aiment prendre des photos, une petite mission suffit: choisir un détail architectural, essayer un cadrage très serré puis un cadrage large, et comparer les deux images. Cette activité personnelle ne fait pas partie des dispositifs annoncés par le musée.

Le bicentenaire propose également des rendez-vous ailleurs dans l'agglomération. Un studio photo gratuit est notamment annoncé au musée les **23 et 24 janvier 2027**, avec inscription à partir du 18 janvier: les conditions sont détaillées dans le [programme du Grand Chalon](https://www.achalon.com/carnet-du-grand-chalon/bicentenaire-de-la-photo-a-chalon/).

## Attention à ne pas confondre les deux grandes expositions

Le célèbre **« Point de vue du Gras »**, considéré comme la première photographie au monde, **n'est pas annoncé dans l'exposition de novembre 2026**. Son retour exceptionnel au musée est programmé **du 26 avril au 20 juin 2027**, dans le cadre d'une autre séquence du bicentenaire. Si votre objectif est précisément de voir cette œuvre de Niépce, choisissez les dates du printemps 2027 plutôt que celles de « Niépce, et après ? ». Le [calendrier officiel du bicentenaire](https://www.achalon.com/carnet-du-grand-chalon/bicentenaire-de-la-photo-a-chalon/) distingue bien ces deux rendez-vous.

## Passer un week-end à Chalon-sur-Saône

Pour les familles qui viennent de plus loin, une nuit sur place permet de profiter du musée puis de découvrir tranquillement le centre historique. Deux appartements proposés à la réservation peuvent convenir selon la taille du groupe: l'[Appartement Chalon centre, avec deux chambres pour quatre personnes](https://www.abritel.fr/location-vacances/p1661853), annoncé à environ trois minutes à pied du musée, ou l'[appartement du centre historique avec vue sur le cloître Saint-Vincent, pour six personnes](https://www.abritel.fr/location-vacances/p1864534), annoncé à environ cinq minutes à pied. Vérifiez les disponibilités, les conditions et les tarifs pour vos dates avant de réserver.


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
