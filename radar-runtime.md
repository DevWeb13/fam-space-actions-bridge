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

## Catalogue ciblé (doublons et publications récentes)

### Articles comparables et publications récentes

- /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | Grand Noël 2026 à Vaux-le-Vicomte en famille: billets, offre enfant et animations | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | Noël à Provins 2026: marché médiéval, animations et visites en famille | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | Noël 2026 à Paris La Défense en famille: marché, animations et patinoire | evenements | Puteaux, Hauts-de-Seine, Île-de-France
- /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | Festival MARMOE 2026 à Montreuil: spectacles, ateliers et sorties jusqu'au 29 novembre | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | Bédéciné 2026 à Illzach en famille: ateliers, spectacles et billets | evenements | Illzach, Haut-Rhin, Grand Est
- /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | Festival Playground 2026: spectacles de danse en famille, dates et tarifs | evenements | Bagnolet, Seine-Saint-Denis, Île-de-France
- /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | Noël à Bayeux 2026 en famille: marché et Galopades | evenements | Bayeux, Calvados, Normandie
- /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | Noël à Caen 2026 en famille: marché de Noël et visite illuminée | evenements | Caen, Calvados, Normandie
- /articles/voyages/bayeux-en-famille-1-ou-2-jours-et-quel-budget-prevoir/ | Bayeux en famille: 1 ou 2 jours et quel budget prévoir | voyages | Bayeux, Calvados, Normandie
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | Noël à Chenonceau 2026: décors, nocturnes et tarifs en famille | evenements | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | Noël au château d'Amboise 2026: visite, nocturnes et tarifs en famille | evenements | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/sorties/chateau-de-chenonceau-en-famille-billets-duree-et-conseils-avec-des-enfants/ | Château de Chenonceau en famille: billets, durée et conseils avec des enfants | sorties | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | Noël 2026 à Brest en famille: marché, projections et horaires | evenements | Brest, Finistère, Bretagne
- /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | MonstroZoo 2026-2027 à Beauval: parcours inclus, visite guidée et tarifs | evenements | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/beauval-a-la-toussaint-2026-billets-duree-de-visite-et-hebergement/ | Beauval à la Toussaint 2026: billets, durée de visite et hébergement | voyages | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/zooparc-de-beauval-en-famille-en-2026-un-ou-deux-jours-quel-hotel-et-quel-budget-prevoir/ | ZooParc de Beauval: billets, 1 ou 2 jours, hôtel et budget 2026 | voyages | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/sorties/festival-photo-la-gacilly-2026-en-famille/ | Festival Photo La Gacilly 2026: un parcours gratuit à hauteur d’enfant | sorties | La Gacilly, Morbihan, Bretagne
- /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | Odyssée Lumineuse 2026-2027 à Paris: billets, dates et visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/activites/jeux-nature-gratuits-au-parc-floral-de-paris-le-18-novembre-2026-quel-jeu-selon-l-age/ | Jeux nature gratuits au Parc floral de Paris le 18 novembre 2026 | activites | Paris, Paris, Île-de-France
- /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | Créations & savoir-faire 2026 à Paris en famille: billets, ateliers et dates | evenements | Paris, Paris, Île-de-France
- /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | Féeries de Noël 2026 à Paris: parcours lumineux, billets et patinoire en famille | evenements | Paris, Paris, Île-de-France
- /articles/cuisine/marche-d-amboise-composer-un-pique-nique-tourangeau-avec-des-enfants/ | Marché d'Amboise: composer un pique-nique tourangeau avec des enfants | cuisine | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/maison/maison-de-vacances-a-amboise-avec-des-enfants-7-criteres-pour-bien-choisir/ | Maison de vacances à Amboise avec des enfants: 7 critères pour bien choisir | maison | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël de Saint-Étienne 2026 en famille: dates, horaires et accès | evenements | Saint-Étienne, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/bons-plans/pass-4-musees-a-saint-etienne-est-il-interessant-pour-une-famille/ | Pass 4 musées à Saint-Étienne: est-il intéressant pour une famille? | bons-plans | Saint-Étienne, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires et accès | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/activites/visiter-le-stade-de-france-en-famille-coulisses-musee-et-conseils-pratiques/ | Visiter le Stade de France en famille: coulisses, musée et conseils pratiques | activites | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/evenements/chambly-kids-festival-2027-quatre-spectacles-pour-les-enfants-dates-et-ages/ | Chambly Kids Festival 2027: quatre spectacles pour les enfants, dates et âges | evenements | Chambly, Oise, Hauts-de-France
- /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | Festival Enfantillages 2026 à Valbonne: spectacles gratuits et cinéma en famille | evenements | Valbonne, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/festival-au-bonheur-des-momes-2026-en-famille/ | Au Bonheur des Mômes 2026: pass, spectacles et journée au Grand-Bornand | evenements | Le Grand-Bornand, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/rue-enfants-montcuq-2026-famille/ | La Rue des Enfants 2026 à Montcuq: deux jours d’arts de rue en famille | evenements | Montcuq-en-Quercy-Blanc, Lot, Occitanie
- /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | Luminéales du Thabor 2026 à Rennes: tarifs, horaires et visite en famille | evenements | Rennes, Ille-et-Vilaine, Bretagne
- /articles/activites/balade-a-velo-autour-de-rennes-quel-parcours-choisir-avec-des-enfants/ | Balade à vélo autour de Rennes: quel parcours choisir avec des enfants? | activites | Rennes, Ille-et-Vilaine, Bretagne
- /articles/vie-pratique/rennes-avec-des-enfants-les-transports-sont-gratuits-avant-12-ans-mais-pas-sans-carte/ | Rennes avec des enfants: transports gratuits avant 12 ans, comment ça marche? | vie-pratique | Rennes, Ille-et-Vilaine, Bretagne
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille/ | Traîneau flottant de Noël à Metz 2026: dates, horaires et embarquement | evenements | Metz, Moselle, Grand Est
- /articles/evenements/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants/ | Fontaines dansantes d'hiver à Metz 2026-2027: dates, horaires et conseils en famille | evenements | Metz, Moselle, Grand Est
- /articles/evenements/noel-a-metz-2026-en-famille-marches-et-sentier-des-lanternes/ | Noël à Metz 2026 en famille: marchés et Sentier des Lanternes | evenements | Metz, Moselle, Grand Est
- /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | Noël 2026 à Toulon en famille: marché, patinoire et horaires | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/vie-pratique/gare-de-toulon-avec-des-enfants-bagages-parking-et-correspondances/ | Gare de Toulon avec des enfants: bagages, parking et correspondances | vie-pratique | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/ | Festival de la Sainte-Barbe 2026 à Lens-Liévin: programme en famille du 4 au 6 décembre | evenements | Lens, Pas-de-Calais, Hauts-de-France
- /articles/sorties/toussaint-2026-au-louvre-lens-quelle-activite-choisir-selon-l-age/ | Toussaint 2026 au Louvre-Lens: quelle activité choisir selon l'âge? | sorties | Lens, Pas-de-Calais, Hauts-de-France
- /articles/maison/lens-lievin-jusqu-a-240-pour-recuperer-l-eau-de-pluie/ | Lens-Liévin: jusqu'à 240 € pour récupérer l'eau de pluie | maison | Lens, Pas-de-Calais, Hauts-de-France
- /articles/evenements/cerfs-volants-de-berck-2027-organiser-sa-visite-en-famille/ | Cerfs-volants de Berck 2027: organiser sa visite en famille | evenements | Berck-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/evenements/batiment-b-a-saint-denis-decouvrir-le-street-art-en-famille/ | Bâtiment B à Saint-Denis: découvrir le street art en famille | evenements | Saint-Denis, La Réunion, La Réunion
- /articles/voyages/dormir-a-saint-denis-pour-visiter-paris-avec-des-enfants-pleyel-ou-basilique/ | Dormir à Saint-Denis pour visiter Paris avec des enfants: Pleyel ou Basilique? | voyages | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | Monument jeu d'enfant 2026 à Saint-Denis: atelier Dagobert le 17 octobre | evenements | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/evenements/cirque-de-noel-2026-au-mans-horaires-tarifs-et-seance-a-choisir-avec-des-enfants/ | Cirque de Noël 2026 au Mans: horaires, tarifs et séance à choisir avec des enfants | evenements | Le Mans, Sarthe, Pays de la Loire
- /articles/voyages/le-mans-sans-voiture-avec-des-enfants-ou-dormir-et-comment-organiser-un-week-end/ | Le Mans sans voiture avec des enfants: où dormir et comment organiser un week-end | voyages | Le Mans, Sarthe, Pays de la Loire
- /articles/evenements/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales/ | Fêtes de l’Ours 2027: quelle fête choisir en famille dans les Pyrénées-Orientales ? | evenements | Pyrénées-Orientales, Occitanie
- /articles/parentalite/quel-laep-choisir-a-perpignan-selon-l-age-et-le-jour/ | Quel LAEP choisir à Perpignan selon l'âge et le jour ? | parentalite | Perpignan, Pyrénées-Orientales, Occitanie
- /articles/bons-plans/musee-de-tautavel-moins-cher-avec-lio-le-bon-plan-a-connaitre/ | Musée de Tautavel moins cher avec liO: le bon plan à connaître | bons-plans | Tautavel, Pyrénées-Orientales, Occitanie
- /articles/sorties/insectes-compagnie-perpignan-famille-2026/ | Insectes et compagnie à Perpignan: trois visites ludiques en famille en août | sorties | Perpignan, Pyrénées-Orientales, Occitanie
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/vie-pratique/cantine-au-college-dans-le-pas-de-calais-les-tarifs-2026-et-les-reductions-pour-les-boursiers/ | Cantine au collège dans le Pas-de-Calais: les tarifs 2026 et les réductions pour les boursiers | vie-pratique | Hénin-Beaumont, Pas-de-Calais, Hauts-de-France
- /articles/bons-plans/cantine-au-college-dans-l-herault-jusqu-a-3-60-d-aide-par-repas/ | Cantine au collège dans l'Hérault: jusqu'à 3,60 € d'aide par repas | bons-plans | Montpellier, Hérault, Occitanie
- /articles/vie-pratique/cantine-au-college-en-deux-sevres-comment-s-inscrire-en-ligne-pour-2026-2027/ | Cantine au collège en Deux-Sèvres: comment s'inscrire en ligne pour 2026-2027 | vie-pratique | Niort, Deux-Sèvres, Nouvelle-Aquitaine
- /articles/vie-pratique/cantine-au-college-en-essonne-obtenir-son-tarif-2026-2027-sans-refaire-la-mauvaise-demarche/ | Cantine au collège en Essonne: obtenir son tarif 2026-2027 sans refaire la mauvaise démarche | vie-pratique | Évry-Courcouronnes, Essonne, Île-de-France
- /articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/ | Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates | vie-pratique | Toulouse, Haute-Garonne, Occitanie
- /articles/maison/moustique-tigre-en-haute-garonne-proteger-la-maison-et-le-jardin/ | Moustique tigre en Haute-Garonne: protéger la maison et le jardin | maison | Toulouse, Haute-Garonne, Occitanie
- /articles/cuisine/ou-manger-des-fouees-en-famille-autour-de-saumur/ | Où manger des fouées en famille autour de Saumur ? | cuisine | Saumur, Maine-et-Loire, Pays de la Loire
- /articles/parentalite/laep-en-maine-et-loire-ou-aller-avec-son-bebe-et-comment-se-passe-l-accueil/ | LAEP en Maine-et-Loire: où aller avec son bébé et comment se passe l'accueil ? | parentalite | Maine-et-Loire, Pays de la Loire
- /articles/sorties/chasse-tresor-galerie-david-angers-2026/ | Chasse au trésor à Angers: les 4 à 6 ans enquêtent à la Galerie David | sorties | Angers, Maine-et-Loire, Pays de la Loire
- /articles/sorties/chateau-de-boutheon-avec-des-enfants-chateau-parc-ou-billet-couple/ | Château de Bouthéon avec des enfants: château, parc ou billet couplé? | sorties | Andrézieux-Bouthéon, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | Fêtes de Saint-Nicolas 2026 à Nancy en famille: défilé, villages et animations | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/evenements/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/ | Saint-Nicolas-de-Port 2026 en famille: village, défilé et procession | evenements | Saint-Nicolas-de-Port, Meurthe-et-Moselle, Grand Est
- /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | Ludothèques du Grand Nancy: où jouer en famille et emprunter des jeux | parentalite | Meurthe-et-Moselle, Grand Est
- /articles/evenements/saint-nicolas-2026-a-epinal-en-famille-defile-du-5-decembre-ou-marche-de-noel/ | Saint-Nicolas 2026 à Épinal: cortège du 5 décembre et marché de Noël en famille | evenements | Épinal, Vosges, Grand Est
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne
- /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | ALFest 2026 à Annecy en famille: horaires, jeux et braderie | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/court-circuit-2026-a-annecy-en-famille-spectacles-tarifs-et-conseils/ | Court Circuit 2026 à Annecy en famille: spectacles, tarifs et conseils | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/fete-du-lac-annecy-2026-en-famille/ | Fête du lac d’Annecy 2026: préparer la soirée avec des enfants | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/vie-pratique/bus-a-annecy-avec-des-enfants-quel-ticket-choisir-et-comment-eviter-les-galeres/ | Bus à Annecy avec des enfants: quel ticket choisir et comment éviter les galères | vie-pratique | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | Noël 2026 au château de Goulaine: dates, billets et conseils en famille | evenements | Haute-Goulaine, Loire-Atlantique, Pays de la Loire
- /articles/sorties/lascaux-iv-en-famille-decouvrir-les-peintures-et-choisir-sa-visite/ | Lascaux IV en famille: découvrir les peintures et choisir sa visite | sorties | Montignac-Lascaux, Dordogne, Nouvelle-Aquitaine
- /articles/vie-pratique/transport-scolaire-dans-les-pyrenees-atlantiques-txik-txak-ou-region-en-2026-2027/ | Transport scolaire dans les Pyrénées-Atlantiques: TXIK TXAK ou Région en 2026-2027? | vie-pratique | Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
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
- /articles/activites/lewarde-en-famille-decouvrir-la-mine-et-la-vie-des-mineurs/ | Lewarde en famille: découvrir la mine et la vie des mineurs | activites | Lewarde, Nord, Hauts-de-France
- /articles/vie-pratique/se-deplacer-sans-voiture-dans-la-meuse-en-famille-cars-fluo-tarifs-et-reservation/ | Se déplacer sans voiture dans la Meuse en famille: cars Fluo, tarifs et réservation | vie-pratique | Meuse, Grand Est
- /articles/parentalite/laep-a-toulouse-ou-jouer-gratuitement-avec-son-enfant-de-moins-de-6-ans/ | LAEP à Toulouse: où jouer gratuitement avec son enfant de moins de 6 ans? | parentalite | Toulouse, Haute-Garonne, Occitanie
- /articles/evenements/carnaval-de-guyane-2027-en-famille-preparer-ses-premieres-sorties/ | Carnaval de Guyane 2027 en famille: préparer ses premières sorties | evenements | Guyane
- /articles/evenements/mondo-clowns-2027-a-marmande-dates-tarifs-et-conseils-en-famille/ | Mondo'Clowns 2027 à Marmande: dates, tarifs et conseils en famille | evenements | Marmande, Lot-et-Garonne, Nouvelle-Aquitaine
- /articles/activites/cremieu-en-famille-balade-gratuite-dans-la-cite-medievale/ | Crémieu en famille: balade gratuite dans la cité médiévale | activites | Crémieu, Isère, Auvergne-Rhône-Alpes
- /articles/voyages/jardin-botanique-de-deshaies-trois-decouvertes-a-faire-en-famille/ | Jardin botanique de Deshaies: trois découvertes à faire en famille | voyages | Deshaies, Guadeloupe, Guadeloupe
- /articles/vie-pratique/bibliotheques-de-rouen-emprunter-gratuitement-outils-instruments-et-jeux/ | Bibliothèques de Rouen: emprunter gratuitement outils, instruments et jeux | vie-pratique | Rouen, Seine-Maritime, Normandie
- /articles/maison/materiaux-de-reemploi-dans-le-finistere-ou-acheter-a-brest-et-quimper/ | Matériaux de réemploi dans le Finistère: où acheter à Brest et Quimper ? | maison | Finistère, Bretagne
- /articles/sorties/cite-du-train-a-mulhouse-en-famille-que-voir-selon-l-age/ | Cité du Train à Mulhouse en famille: que voir selon l’âge ? | sorties | Mulhouse, Haut-Rhin, Grand Est
- /articles/bons-plans/propriano-en-famille-une-chasse-au-tresor-gratuite-pour-decouvrir-la-ville/ | Propriano en famille: une chasse au trésor gratuite pour découvrir la ville | bons-plans | Propriano, Corse-du-Sud, Corse

### Historique Radar lié

- opportunity | /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | 2026-10-27T13:28:21.076Z
- opportunity | /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | 2026-10-31T19:33:18.323Z
- refresh | /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | 2026-11-09T12:50:22.314Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T18:37:09.008Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | 2026-10-22T15:49:20.816Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | 2026-10-13T09:50:29.435Z
- opportunity | /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | 2026-10-30T06:28:26.726Z
- opportunity | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-10-24T12:31:27.784Z
- refresh | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-11-13T22:32:33.388Z
- opportunity | /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | 2026-11-01T01:35:08.448Z
- opportunity | /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | 2026-10-31T10:28:17.432Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | 2026-11-03T15:36:10.146Z
- refresh | /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | 2026-11-13T13:31:11.034Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | 2026-10-24T06:28:53.730Z
- opportunity | /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | 2026-10-30T15:36:05.374Z
- opportunity | /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | 2026-10-30T21:26:32.584Z
- opportunity | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-10-30T18:26:56.039Z
- opportunity | /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | 2026-10-24T03:31:56.628Z
- opportunity | /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | 2026-10-26T15:30:14.299Z
- refresh | /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | 2026-11-14T08:33:55.465Z
- opportunity | /articles/evenements/saint-nicolas-2026-a-epinal-en-famille-defile-du-5-decembre-ou-marche-de-noel/ | 2026-11-01T21:31:28.158Z
- opportunity | /articles/evenements/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/ | 2026-11-02T23:31:49.432Z
- opportunity | /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | 2026-10-15T05:30:56.094Z
- opportunity | /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | 2026-10-11T11:27:54.175Z
- opportunity | /articles/sorties/toussaint-2026-au-louvre-lens-quelle-activite-choisir-selon-l-age/ | 2026-10-07T19:13:00.627Z
- opportunity | /articles/evenements/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille/ | 2026-11-03T03:34:06.534Z

## Travaux éditoriaux en cours

### Publication en cours

- Branche: automation/publication-20261114-1403-sujet-transport-scolaire-dans-l-eure-pendant-l-annee-2026-2027-selon-l
- HEAD: publication: phase 3 20261114-1403-sujet-transport-scolaire-dans-l-eure-pendant-l-annee-2026-2027-selon-l

---
category: "vie-pratique"
title: "Transport scolaire dans l'Eure: NOMAD, EPN ou SEMO, quel réseau choisir ?"
subtitle: "Inscriptions 2026-2027, tarifs, cartes et démarches en cours d'année selon votre trajet"
summary: "Dans l'Eure, le transport scolaire dépend de plusieurs réseaux. Voici comment trouver le bon service, connaître les tarifs et régler un changement de situation."
keywords:
  - "transport scolaire Eure 2026-2027"
  - "NOMAD transport scolaire"
  - "EPN inscription transport scolaire"
  - "SEMO transport scolaire"
location:
  department: "Eure"
  region: "Normandie"
sources:
  - title: "NOMAD - Transport scolaire 2026-2027"
    url: "https://nomad.normandie.fr/le-transport-scolaire-0"
  - title: "NOMAD - Titres originaux et justificatifs provisoires"
    url: "https://nomad.normandie.fr/actualites/transport-scolaire-rappel-important-sur-les-titres-de-transport"
  - title: "Évreux Portes de Normandie - Inscription et tarifs 2026-2027"
    url: "https://www.evreuxportesdenormandie.fr/demarches/inscription-au-transport-scolaire/"
  - title: "Évreux Portes de Normandie - FAQ transport scolaire"
    url: "https://www.evreuxportesdenormandie.fr/les-services-et-equipements/transport-et-mobilite/transport-scolaire/foire-aux-questions/"
  - title: "Évreux Portes de Normandie - Horaires scolaires"
    url: "https://www.evreuxportesdenormandie.fr/les-services-et-equipements/transport-et-mobilite/transport-scolaire/horaires-du-transport-scolaire/"
  - title: "SEMO - Inscriptions scolaires 2026-2027"
    url: "https://www.semo-mobilite.com/news/inscriptions-scolaires-2026/"
---

Dans l'Eure, un enfant peut prendre un car scolaire sans dépendre du même organisme que son voisin. La Région Normandie gère des trajets NOMAD, tandis que plusieurs agglomérations organisent leurs propres transports. Pour une famille qui inscrit un enfant en cours d'année ou qui déménage, le premier réflexe est donc de **vérifier la ligne et l'établissement desservis**, avant de choisir un abonnement.

## Quel organisme contacter pour le trajet de votre enfant ?

**NOMAD, réseau régional.** Il prend en charge les élèves sur les services routiers ou ferroviaires relevant de la Région. Son [espace transport scolaire](https://nomad.normandie.fr/le-transport-scolaire-0) regroupe inscriptions, règlement, tarifs, aide à la consultation des horaires et contacts.

**Évreux Portes de Normandie (EPN).** Pour les circuits scolaires de cette agglomération, la démarche passe généralement par le portail citoyen SPI. La [page d'inscription EPN](https://www.evreuxportesdenormandie.fr/demarches/inscription-au-transport-scolaire/) permet de rechercher un itinéraire et de connaître le service compétent. Attention aux exceptions: certains trajets depuis Tourneville, Saint-Germain-des-Angles ou Normanville vers les lycées d'Évreux, ainsi que les circuits vers l'Immaculée de Damville, relèvent de NOMAD.

**SEMO, réseau de l'Agglomération Seine-Eure.** Autour de Louviers et Val-de-Reuil, ce réseau propose des abonnements scolaires et des lignes spécifiques. Les [modalités SEMO 2026-2027](https://www.semo-mobilite.com/news/inscriptions-scolaires-2026/) renvoient vers sa boutique et les horaires scolaires.

D'autres collectivités interviennent également, notamment **Seine Normandie Agglomération (SNA)**. Une commune située dans son périmètre peut nécessiter une inscription auprès de SNA même lorsque l'enfant emprunte une ligne EPN. La [FAQ EPN](https://www.evreuxportesdenormandie.fr/les-services-et-equipements/transport-et-mobilite/transport-scolaire/foire-aux-questions/) détaille cette procédure. Ne choisissez donc pas NOMAD uniquement parce que le trajet sort de votre commune, ni EPN uniquement parce que l'établissement se trouve à Évreux.

## Combien coûte le transport scolaire en 2026-2027 ?

Les tarifs suivants sont ceux publiés par chaque organisme pour cette année scolaire. Ils ne sont pas interchangeables.

### NOMAD: 72 €, 144 € ou une formule étendue

Le [Pass Scolaire NOMAD](https://nomad.normandie.fr/le-transport-scolaire-0) coûte **72 € par an** pour les internes et les élèves du primaire transportés en car; **144 €** pour les demi-pensionnaires transportés en car et les élèves transportés en train. Une formule NOMAD+ à **204 €**, soumise à conditions, élargit les déplacements sur le réseau régional. La Région indique une majoration de **20 €** pour les inscriptions après le 16 juillet 2026.

### EPN: tarif selon le domicile et le niveau scolaire

Pour les familles résidant dans le périmètre EPN, les [tarifs 2026-2027](https://www.evreuxportesdenormandie.fr/demarches/inscription-au-transport-scolaire/) sont de **59,20 €** en maternelle et élémentaire, **118,40 €** au collège et au lycée, et **86,80 €** pour les internes. Pour les élèves domiciliés hors EPN utilisant ses lignes, les montants affichés sont respectivement **72 €**, **144 €** et **72 €**. Un tarif social peut s'appliquer sur justificatifs.

Les inscriptions restent possibles après le 2 août 2026, mais EPN prévoit une **majoration de 25 € par dossier**, avec des règles particulières pour les changements de situation.

### SEMO: choisir selon les déplacements nécessaires

SEMO distingue notamment **Mouv'Récré** pour les élèves de maternelle et de primaire, jusqu'à trois allers-retours par jour scolaire, **Mouv'Ado** pour les collégiens et lycéens, un aller-retour par jour scolaire, et **Mouv'Jeune -26 ans**, pour des déplacements illimités sur le réseau, y compris pendant les vacances. Les tarifs dépendent de la formule choisie: consultez la [billetterie et les conditions SEMO](https://www.semo-mobilite.com/news/inscriptions-scolaires-2026/) avant paiement. Une majoration de **20 €** s'applique aux inscriptions après le 31 août 2026, sauf motif légitime tel qu'un déménagement ou un changement de situation.

## Inscrire un enfant en novembre ou après un déménagement

Une inscription en cours d'année n'est pas forcément refusée, mais elle peut entraîner une majoration et nécessite parfois un justificatif.

Chez **EPN**, les parents créent ou retrouvent leur compte SPI, effectuent la préinscription puis enregistrent la demande **« EN BROUILLON »**. Ils contactent ensuite le service scolaire avec un document attestant le changement de situation ou le motif de l'inscription tardive. De septembre à décembre, **le tarif annuel complet reste dû**; à partir de janvier, EPN applique un prorata des mois non entamés. Ces indications figurent dans la [FAQ officielle, rubrique « Inscription en cours d'année »](https://www.evreuxportesdenormandie.fr/les-services-et-equipements/transport-et-mobilite/transport-scolaire/foire-aux-questions/).

Chez **SEMO**, un déménagement ou un changement de situation intervenu après la date limite peut justifier une exemption de la majoration. Contactez le réseau avec les pièces utiles avant de régler.

Chez **NOMAD**, la période ordinaire d'inscription est terminée. Pour un nouveau besoin, consultez l'espace scolaire et demandez au service régional quelles démarches et quels justificatifs correspondent au trajet. Ne présumez pas qu'une exception accordée par EPN ou SEMO s'applique aussi à NOMAD.

## Garde alternée: un trajet, parfois deux dossiers

Si l'enfant utilise des lignes EPN depuis deux domiciles, chaque parent peut devoir constituer un dossier SPI. Dans les cas décrits par la [FAQ EPN, rubrique « Garde alternée »](https://www.evreuxportesdenormandie.fr/les-services-et-equipements/transport-et-mobilite/transport-scolaire/foire-aux-questions/), un parent paie et l'autre conserve sa demande en brouillon avant de contacter le service; l'exonération de la seconde demande dépend de sa validation. Si les trajets relèvent de deux réseaux différents, les démarches et paiements peuvent être séparés. Faites préciser le montage avant de souscrire deux abonnements.

## Carte perdue, titre provisoire: ce qu'il faut présenter

Sur **NOMAD**, l'enfant doit présenter son **titre original valide** à chaque montée et valider sa carte Atoumod. Une photo de la carte sur téléphone ou une photocopie ne remplace pas le titre. En revanche, **le justificatif provisoire d'inscription**, pendant sa période de validité, peut être imprimé ou présenté sur téléphone. NOMAD indique **10 €** pour le duplicata d'une carte Atoumod existante. Les différences entre titre original et provisoire sont expliquées dans son [rappel officiel sur les titres scolaires](https://nomad.normandie.fr/actualites/transport-scolaire-rappel-important-sur-les-titres-de-transport).

Chez **EPN**, les élèves de primaire utilisent une **carte SPI**, et les collégiens et lycéens une **carte Atoumod**. En cas de perte, la demande de duplicata s'effectue depuis le compte SPI: **5,25 €** pour une carte SPI et **10 €** pour une Atoumod, selon la [FAQ EPN](https://www.evreuxportesdenormandie.fr/les-services-et-equipements/transport-et-mobilite/transport-scolaire/foire-aux-questions/). Une carte qui ne fonctionne plus doit d'abord être signalée au service.

## Retrouver les horaires et réagir à une perturbation

Pour **EPN**, les [fiches horaires 2026-2027](https://www.evreuxportesdenormandie.fr/les-services-et-equipements/transport-et-mobilite/transport-scolaire/horaires-du-transport-scolaire/) sont classées par établissements et lignes. Le service demande aux élèves d'être présents à l'arrêt au moins cinq minutes avant le passage annoncé. En cas d'aléas, EPN renvoie vers l'application Transurbain et peut envoyer des informations par SMS ou courriel.

Pour **SEMO**, le site propose les fiches des lignes scolaires ainsi que des alertes trafic et des abonnements aux notifications. Pour **NOMAD**, consultez les horaires et les informations trafic depuis le [site régional](https://nomad.normandie.fr/le-transport-scolaire-0).

Pour signaler un incident sur une ligne EPN, indiquez au service le nom de l'enfant, le numéro de ligne, l'arrêt, l'établissement, la date et une description précise. En cas de changement durable de domicile ou d'établissement, signalez-le au gestionnaire de la ligne avant de supposer que l'ancienne carte couvre le nouveau trajet.

## Où demander de l'aide ?

**NOMAD:** 02 22 55 00 10, ou nomad-car@normandie.fr, selon les [coordonnées régionales](https://nomad.normandie.fr/le-transport-scolaire-0).

**EPN:** 02 32 31 31 78, ou transportscolaire@epn-agglo.fr, selon la [page officielle des démarches](https://www.evreuxportesdenormandie.fr/demarches/inscription-au-transport-scolaire/).

**SEMO:** agence au 2 A/B boulevard de Crosne à Louviers, téléphone 02 32 40 44 44, selon les [coordonnées du réseau](https://www.semo-mobilite.com/news/inscriptions-scolaires-2026/).

Avant de payer, gardez sous la main la commune de résidence, l'établissement, le point d'arrêt envisagé et le nom de la ligne. Ce sont ces éléments qui permettront au bon service de vous répondre sans vous renvoyer vers un autre guichet.


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
