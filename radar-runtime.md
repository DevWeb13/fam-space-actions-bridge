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
  "generatedAt": "2026-11-08T02:28:56+01:00",
  "dataThrough": "2026-11-05",
  "from": "2026-10-09",
  "refresh": [
    {
      "url": "/articles/maison/dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage/",
      "title": "Déchets verts à Toulouse Métropole en 2027: collecte, broyage et compostage",
      "category": "maison",
      "publishedAt": "2026-10-15T19:13:56+02:00",
      "location": {
        "city": "Toulouse",
        "department": "Haute-Garonne",
        "region": "Occitanie"
      },
      "ageDays": 24,
      "rapidDrop": true,
      "peakStart": "2026-10-18",
      "peakEnd": "2026-10-20",
      "recentStart": "2026-11-03",
      "recentEnd": "2026-11-05",
      "peakImpressions": 83,
      "recentImpressions": 20,
      "score": 189,
      "signal": "uncertain",
      "basis": "Visibilité récente : 83 impressions sur trois jours, puis 20 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "collecte déchets verts toulouse",
        "calendrier collecte déchets verts toulouse métropole 2026",
        "calendrier ramassage déchets verts toulouse 2026",
        "collecte dechet vert toulouse",
        "enlèvement déchets verts gratuit toulouse"
      ]
    },
    {
      "url": "/articles/activites/biotropica-en-famille-a-val-de-reuil-animaux-tarifs-et-visite-par-temps-de-pluie/",
      "title": "Biotropica en famille à Val-de-Reuil: animaux, tarifs et visite par temps de pluie",
      "category": "activites",
      "publishedAt": "2026-10-20T12:10:23+02:00",
      "location": {
        "city": "Val-de-Reuil",
        "department": "Eure",
        "region": "Normandie"
      },
      "ageDays": 19,
      "rapidDrop": true,
      "peakStart": "2026-10-21",
      "peakEnd": "2026-10-23",
      "recentStart": "2026-11-03",
      "recentEnd": "2026-11-05",
      "peakImpressions": 55,
      "recentImpressions": 5,
      "score": 150,
      "signal": "uncertain",
      "basis": "Visibilité récente : 55 impressions sur trois jours, puis 5 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "biotropica tarifs",
        "animaux val de reuil",
        "biotropica tarif",
        "en famille",
        "plan biotropica"
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
      "ageDays": 13,
      "rapidDrop": true,
      "peakStart": "2026-10-30",
      "peakEnd": "2026-11-01",
      "recentStart": "2026-11-03",
      "recentEnd": "2026-11-05",
      "peakImpressions": 69,
      "recentImpressions": 20,
      "score": 147,
      "signal": "uncertain",
      "basis": "Visibilité récente : 69 impressions sur trois jours, puis 20 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "parc floral gratuit",
        "parc floral de la source gratuit"
      ]
    },
    {
      "url": "/articles/bons-plans/ski-a-aussois-en-famille-en-2026-2027-forfaits-et-budget/",
      "title": "Ski à Aussois en famille en 2026-2027: forfaits et budget",
      "category": "bons-plans",
      "publishedAt": "2026-10-21T08:22:10+02:00",
      "location": {
        "city": "Aussois",
        "department": "Savoie",
        "region": "Auvergne-Rhône-Alpes"
      },
      "ageDays": 18,
      "rapidDrop": true,
      "peakStart": "2026-10-23",
      "peakEnd": "2026-10-25",
      "recentStart": "2026-11-03",
      "recentEnd": "2026-11-05",
      "peakImpressions": 43,
      "recentImpressions": 1,
      "score": 126,
      "signal": "uncertain",
      "basis": "Visibilité récente : 43 impressions sur trois jours, puis 1 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "aussois 2027",
        "tarifs des forfaits de ski",
        "vacances en zone b"
      ]
    },
    {
      "url": "/articles/voyages/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi/",
      "title": "Rejoindre Orly en famille: métro 14, Orlyval ou taxi en 2026",
      "category": "voyages",
      "publishedAt": "2026-10-13T15:33:13.271Z",
      "location": {
        "city": "Orly",
        "department": "Val-de-Marne",
        "region": "Île-de-France"
      },
      "ageDays": 26,
      "rapidDrop": true,
      "peakStart": "2026-10-16",
      "peakEnd": "2026-10-18",
      "recentStart": "2026-11-03",
      "recentEnd": "2026-11-05",
      "peakImpressions": 43,
      "recentImpressions": 1,
      "score": 126,
      "signal": "uncertain",
      "basis": "Visibilité récente : 43 impressions sur trois jours, puis 1 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": []
    },
    {
      "url": "/articles/parentalite/laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit/",
      "title": "LAEP autour d'Annecy: trois lieux pour jouer avec son tout-petit",
      "category": "parentalite",
      "publishedAt": "2026-10-23T10:59:51+02:00",
      "location": {
        "city": "Annecy",
        "department": "Haute-Savoie",
        "region": "Auvergne-Rhône-Alpes"
      },
      "ageDays": 16,
      "rapidDrop": true,
      "peakStart": "2026-10-25",
      "peakEnd": "2026-10-27",
      "recentStart": "2026-11-03",
      "recentEnd": "2026-11-05",
      "peakImpressions": 40,
      "recentImpressions": 0,
      "score": 120,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 40 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "LAEP Annecy",
        "lieu accueil enfants parents Haute-Savoie",
        "LAEP Meythet Alby-sur-Chéran"
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
      "ageDays": 14,
      "rapidDrop": true,
      "peakStart": "2026-10-28",
      "peakEnd": "2026-10-30",
      "recentStart": "2026-11-03",
      "recentEnd": "2026-11-05",
      "peakImpressions": 41,
      "recentImpressions": 2,
      "score": 117,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 41 impressions sur trois jours, puis 2 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "château de La Rochefoucauld en famille",
        "visite château La Rochefoucauld enfants",
        "tarifs château de La Rochefoucauld 2026"
      ]
    },
    {
      "url": "/articles/maison/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager/",
      "title": "À Paris, où donner ou déposer meubles, jouets et électroménager ?",
      "category": "maison",
      "publishedAt": "2026-10-10T05:02:08+02:00",
      "location": {
        "city": "Paris",
        "department": "Paris",
        "region": "Île-de-France"
      },
      "ageDays": 29,
      "rapidDrop": true,
      "peakStart": "2026-10-12",
      "peakEnd": "2026-10-14",
      "recentStart": "2026-11-03",
      "recentEnd": "2026-11-05",
      "peakImpressions": 56,
      "recentImpressions": 18,
      "score": 114,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 56 impressions sur trois jours, puis 18 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "encombrants Paris collecte gratuite",
        "donner meubles jouets Paris",
        "recyclage électroménager Paris",
        "ressourcerie Paris"
      ]
    },
    {
      "url": "/articles/activites/parc-animalier-de-gramat-en-famille-animaux-duree-et-conseils-de-visite/",
      "title": "Parc animalier de Gramat en famille: animaux, durée et conseils de visite",
      "category": "activites",
      "publishedAt": "2026-10-27T08:27:57+01:00",
      "location": {
        "city": "Gramat",
        "department": "Lot",
        "region": "Occitanie"
      },
      "ageDays": 12,
      "rapidDrop": true,
      "peakStart": "2026-10-28",
      "peakEnd": "2026-10-30",
      "recentStart": "2026-11-03",
      "recentEnd": "2026-11-05",
      "peakImpressions": 36,
      "recentImpressions": 0,
      "score": 108,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 36 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "parc animalier de Gramat en famille",
        "visiter parc animalier Gramat avec enfants",
        "parc animalier Gramat horaires tarifs",
        "sortie famille Lot"
      ]
    },
    {
      "url": "/articles/parentalite/laep-a-rennes-ou-jouer-gratuitement-avec-son-enfant/",
      "title": "LAEP à Rennes: où jouer gratuitement avec son enfant?",
      "category": "parentalite",
      "publishedAt": "2026-10-20T16:09:21+02:00",
      "location": {
        "city": "Rennes",
        "department": "Ille-et-Vilaine",
        "region": "Bretagne"
      },
      "ageDays": 19,
      "rapidDrop": true,
      "peakStart": "2026-10-21",
      "peakEnd": "2026-10-23",
      "recentStart": "2026-11-03",
      "recentEnd": "2026-11-05",
      "peakImpressions": 38,
      "recentImpressions": 4,
      "score": 102,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 38 impressions sur trois jours, puis 4 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "LAEP Rennes",
        "lieu accueil enfants parents Rennes",
        "sorties gratuites tout-petits Rennes"
      ]
    },
    {
      "url": "/articles/parentalite/maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles/",
      "title": "Maison des Parents aux Pennes-Mirabeau: ateliers gratuits et accueil des familles",
      "category": "parentalite",
      "publishedAt": "2026-10-16T14:09:03+02:00",
      "location": {
        "city": "Les Pennes-Mirabeau",
        "department": "Bouches-du-Rhône",
        "region": "Provence-Alpes-Côte d’Azur"
      },
      "ageDays": 23,
      "rapidDrop": true,
      "peakStart": "2026-10-18",
      "peakEnd": "2026-10-20",
      "recentStart": "2026-11-03",
      "recentEnd": "2026-11-05",
      "peakImpressions": 50,
      "recentImpressions": 17,
      "score": 99,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 50 impressions sur trois jours, puis 17 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Maison des Parents Les Pennes-Mirabeau",
        "Maison Câlins accueil enfants parents",
        "ateliers parentalité gratuits Bouches-du-Rhône"
      ]
    },
    {
      "url": "/articles/cuisine/moulin-du-mont-ramus-a-bessan-choisir-son-huile-d-olive-en-famille/",
      "title": "Moulin du Mont Ramus à Bessan: choisir son huile d’olive en famille",
      "category": "cuisine",
      "publishedAt": "2026-10-24T23:14:34+02:00",
      "location": {
        "city": "Bessan",
        "department": "Hérault",
        "region": "Occitanie"
      },
      "ageDays": 15,
      "rapidDrop": true,
      "peakStart": "2026-10-25",
      "peakEnd": "2026-10-27",
      "recentStart": "2026-11-03",
      "recentEnd": "2026-11-05",
      "peakImpressions": 36,
      "recentImpressions": 4,
      "score": 96,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 36 impressions sur trois jours, puis 4 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Moulin du Mont Ramus",
        "huile d’olive en cuisine",
        "visite en famille en Hérault"
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
      "ageDays": 35,
      "rapidDrop": true,
      "peakStart": "2026-10-23",
      "peakEnd": "2026-10-25",
      "recentStart": "2026-11-03",
      "recentEnd": "2026-11-05",
      "peakImpressions": 35,
      "recentImpressions": 5,
      "score": 90,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 35 impressions sur trois jours, puis 5 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Grottes de Thouzon enfants",
        "Grottes de Thouzon famille"
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
      "ageDays": 15,
      "rapidDrop": true,
      "peakStart": "2026-10-25",
      "peakEnd": "2026-10-27",
      "recentStart": "2026-11-03",
      "recentEnd": "2026-11-05",
      "peakImpressions": 30,
      "recentImpressions": 1,
      "score": 87,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 30 impressions sur trois jours, puis 1 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "lac du Bouchet en famille",
        "tour du lac du Bouchet",
        "lac du Bouchet poussette",
        "baignade lac du Bouchet"
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
      "ageDays": 14,
      "rapidDrop": true,
      "peakStart": "2026-10-28",
      "peakEnd": "2026-10-30",
      "recentStart": "2026-11-03",
      "recentEnd": "2026-11-05",
      "peakImpressions": 28,
      "recentImpressions": 0,
      "score": 84,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 28 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "ludothèque du Choletais",
        "jeux en famille à Cholet",
        "emprunter des jeux"
      ]
    }
  ],
  "strongPages": [
    {
      "url": "/articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/",
      "title": "Foire de Grenoble 2026 en famille: jours gratuits, programme et tarifs",
      "category": "evenements",
      "recentImpressions": 1911,
      "recentClicks": 24,
      "recentPosition": 6.869,
      "retention": 2.186
    },
    {
      "url": "/articles/evenements/cirque-de-noel-2026-au-mans-horaires-tarifs-et-seance-a-choisir-avec-des-enfants/",
      "title": "Cirque de Noël 2026 au Mans: horaires, tarifs et séance à choisir avec des enfants",
      "category": "evenements",
      "recentImpressions": 213,
      "recentClicks": 11,
      "recentPosition": 6.746,
      "retention": 6.656
    },
    {
      "url": "/articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/",
      "title": "Noël 2026 à Chantilly: Le Noël oublié, billets et séances en famille",
      "category": "evenements",
      "recentImpressions": 95,
      "recentClicks": 5,
      "recentPosition": 6.842,
      "retention": 0.742
    },
    {
      "url": "/articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/",
      "title": "Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille",
      "category": "evenements",
      "recentImpressions": 151,
      "recentClicks": 4,
      "recentPosition": 8.225,
      "retention": 1.36
    },
    {
      "url": "/articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/",
      "title": "Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite",
      "category": "sorties",
      "recentImpressions": 312,
      "recentClicks": 3,
      "recentPosition": 9.702,
      "retention": 1.037
    },
    {
      "url": "/articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/",
      "title": "Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates",
      "category": "vie-pratique",
      "recentImpressions": 197,
      "recentClicks": 3,
      "recentPosition": 5.33,
      "retention": 1.858
    },
    {
      "url": "/articles/vie-pratique/cantine-au-college-dans-le-pas-de-calais-les-tarifs-2026-et-les-reductions-pour-les-boursiers/",
      "title": "Cantine au collège dans le Pas-de-Calais: les tarifs 2026 et les réductions pour les boursiers",
      "category": "vie-pratique",
      "recentImpressions": 145,
      "recentClicks": 3,
      "recentPosition": 5.117,
      "retention": 2.071
    },
    {
      "url": "/articles/maison/recycleries-autour-de-chartres-ou-donner-et-acheter-d-occasion/",
      "title": "Recycleries autour de Chartres: où donner et acheter d'occasion ?",
      "category": "maison",
      "recentImpressions": 116,
      "recentClicks": 3,
      "recentPosition": 9.086,
      "retention": 0.935
    },
    {
      "url": "/articles/bons-plans/centre-spatial-guyanais-a-kourou-3-experiences-gratuites-et-un-musee-en-famille/",
      "title": "Centre spatial guyanais à Kourou: 3 expériences gratuites et un musée en famille",
      "category": "bons-plans",
      "recentImpressions": 108,
      "recentClicks": 3,
      "recentPosition": 8.407,
      "retention": 0.771
    },
    {
      "url": "/articles/evenements/herofestival-marseille-2026-en-famille-billets-gratuite-enfants-et-conseils/",
      "title": "HeroFestival Marseille 2026 en famille: billets, gratuité enfants et conseils",
      "category": "evenements",
      "recentImpressions": 105,
      "recentClicks": 3,
      "recentPosition": 5.657,
      "retention": 2.763
    }
  ],
  "excluded": {
    "expired": 166,
    "cooling": 11
  },
  "warnings": [
    "GSC recherche web : 9632 lignes sur quatre semaines, réponses complètes (1848, 2292, 2745, 2747).",
    "Catalogue Radar : 970 articles et 191 entrées d'historique.",
    "Diagnostics par requêtes réalisés pour 5 articles.",
    "Diagnostics par requêtes : 5/5.",
    "Les baisses d'impressions ne prouvent ni désindexation ni perte de classement."
  ]
}

## Catalogue ciblé (doublons et publications récentes)

### Articles comparables et publications récentes

- /articles/maison/dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage/ | Déchets verts à Toulouse Métropole en 2027: collecte, broyage et évacuation des gros volumes | maison | Toulouse, Haute-Garonne, Occitanie
- /articles/activites/accrocamp-toulouse-avec-des-enfants-quel-pass-choisir-selon-leur-taille/ | AccroCamp Toulouse avec des enfants: quel pass choisir selon leur taille? | activites | Toulouse, Haute-Garonne, Occitanie
- /articles/voyages/cite-de-l-espace-a-toulouse-en-famille-en-2026-une-journee-suffit-elle-et-ou-dormir/ | Cité de l'espace à Toulouse en famille en 2026: une journée suffit-elle et où dormir | voyages | Toulouse, Haute-Garonne, Occitanie
- /articles/bons-plans/pass-explorateurs-toulouse-en-famille-quand-est-il-vraiment-rentable/ | Pass Explorateurs Toulouse en famille: quand est-il vraiment rentable? | bons-plans | Toulouse, Haute-Garonne, Occitanie
- /articles/activites/biotropica-en-famille-a-val-de-reuil-animaux-tarifs-et-visite-par-temps-de-pluie/ | Biotropica en famille à Val-de-Reuil: animaux, tarifs et visite par temps de pluie | activites | Val-de-Reuil, Eure, Normandie
- /articles/activites/parc-animalier-de-gramat-en-famille-animaux-duree-et-conseils-de-visite/ | Parc animalier de Gramat en famille: billets, animaux et conseils de visite | activites | Gramat, Lot, Occitanie
- /articles/activites/parc-animalier-d-ecouves-en-famille-tarifs-horaires-et-conseils-pour-la-visite/ | Parc animalier d'Ecouves en famille: tarifs, horaires et conseils pour la visite | activites | Le Bouillon, Orne, Normandie
- /articles/sorties/mont-faron-en-famille-telepherique-parc-animalier-et-conseils-2026/ | Mont Faron en famille: téléphérique, parc animalier et conseils 2026 | sorties | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/parc-floral-d-orleans-gratuit-en-hiver-horaires-et-sortie-avec-les-enfants/ | Parc floral d’Orléans gratuit en hiver: horaires et sortie avec les enfants | bons-plans | Orléans, Loiret, Centre-Val de Loire
- /articles/maison/composteur-gratuit-a-orleans-metropole-comment-en-profiter-en-2026/ | Composteur gratuit à Orléans Métropole: comment en profiter en 2026 | maison | Orléans, Loiret, Centre-Val de Loire
- /articles/sorties/chasse-motifs-loire-orleans-famille-2026/ | Chasse aux motifs de Loire à Orléans: une balade gratuite pour les 6 à 12 ans | sorties | Orléans, Loiret, Centre-Val de Loire
- /articles/activites/mobe-d-orleans-en-famille-fossiles-jeux-et-biodiversite/ | MOBE d’Orléans en famille: fossiles, jeux et biodiversité | activites | Orléans, Loiret, Centre-Val de Loire
- /articles/bons-plans/ski-a-aussois-en-famille-en-2026-2027-forfaits-et-budget/ | Ski à Aussois en famille en 2026-2027: forfaits et budget | bons-plans | Aussois, Savoie, Auvergne-Rhône-Alpes
- /articles/bons-plans/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites/ | Pass Nantes en famille en 2026: tarifs, visites incluses et alternatives gratuites | bons-plans | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/bons-plans/nevers-en-famille-a-petit-budget-6-idees-gratuites-ou-presque/ | Nevers en famille à petit budget: 6 idées gratuites ou presque | bons-plans | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/cuisine/visiter-une-cooperative-de-beaufort-avec-des-enfants-a-val-cenis/ | Visiter une coopérative de Beaufort avec des enfants à Val Cenis | cuisine | Val Cenis, Savoie, Auvergne-Rhône-Alpes
- /articles/voyages/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi/ | Rejoindre Orly en famille: métro 14, Orlyval ou taxi en 2026 | voyages | Orly, Val-de-Marne, Île-de-France
- /articles/voyages/rejoindre-l-aeroport-paris-cdg-en-famille-rer-b-bus-9517-ou-taxi/ | Aéroport CDG en famille: RER B, bus 9517 ou taxi en 2026? | voyages | Roissy-en-France, Val-d'Oise, Île-de-France
- /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/ | Paris avec une poussette: métro, RER, bus ou tram, que choisir ? | voyages | Paris, Paris, Île-de-France
- /articles/vie-pratique/consigne-a-bagages-a-paris-en-famille-gare-ou-depot-en-ville/ | Consigne à bagages à Paris en famille: gare ou dépôt en ville? | vie-pratique | Paris, Paris, Île-de-France
- /articles/parentalite/laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit/ | LAEP autour d'Annecy: trois lieux pour jouer avec son tout-petit | parentalite | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/parentalite/lieux-d-accueil-enfants-parents-dans-le-cher-ou-aller-avec-son-tout-petit/ | Lieux d’accueil enfants-parents dans le Cher: où aller avec son tout-petit ? | parentalite | Cher, Centre-Val de Loire
- /articles/parentalite/laep-a-rennes-ou-jouer-gratuitement-avec-son-enfant/ | LAEP à Rennes: où jouer gratuitement avec son enfant? | parentalite | Rennes, Ille-et-Vilaine, Bretagne
- /articles/maison/renovation-energetique-en-haute-savoie-jusqu-a-3-000-d-aide-departementale/ | Rénovation énergétique en Haute-Savoie: jusqu'à 3 000 € d'aide départementale | maison | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/activites/visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils/ | Visiter le château de La Rochefoucauld en famille: parcours, tarifs et conseils | activites | La Rochefoucauld-en-Angoumois, Charente, Nouvelle-Aquitaine
- /articles/sorties/chateau-de-vincennes-en-famille-tarifs-parcours-et-conseils-de-visite/ | Château de Vincennes en famille: tarifs, parcours et conseils de visite | sorties | Vincennes, Val-de-Marne, Île-de-France
- /articles/sorties/chateau-fort-de-sedan-en-famille-parcours-tarifs-et-conseils-de-visite/ | Château fort de Sedan en famille: parcours, tarifs et conseils de visite | sorties | Sedan, Ardennes, Grand Est
- /articles/parentalite/visiter-le-chateau-de-versailles-avec-un-bebe-poussette-billets-et-parcours/ | Visiter le château de Versailles avec un bébé: poussette, billets et parcours | parentalite | Versailles, Yvelines, Île-de-France
- /articles/maison/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager/ | À Paris, où donner ou déposer meubles, jouets et électroménager ? | maison | Paris, Paris, Île-de-France
- /articles/evenements/paris-plages-2026-en-famille/ | Paris Plages 2026: où se baigner et jouer avec des enfants | evenements | Paris, Paris, Île-de-France
- /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | Atelier Calder à Paris le 14 novembre 2026: fabriquer un mobile dès 5 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/paris-sport-vacances-automne-2026-demi-journee-gratuite-ou-stage-a-la-journee/ | Paris Sport Vacances automne 2026: demi-journée gratuite ou stage à la journée? | activites | Paris, Paris, Île-de-France
- /articles/activites/parc-de-courzieu-en-famille-tarifs-horaires-et-conseils-pour-la-visite/ | Parc de Courzieu en famille: tarifs, horaires et conseils pour la visite | activites | Courzieu, Rhône, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-dans-l-herault-jouer-avec-son-enfant-et-rencontrer-d-autres-parents/ | LAEP dans l'Hérault: jouer avec son enfant et rencontrer d'autres parents | parentalite | Hérault, Occitanie
- /articles/parentalite/maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles/ | Maison des Parents aux Pennes-Mirabeau: ateliers gratuits et accueil des familles | parentalite | Les Pennes-Mirabeau, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/parentalite/l-ilot-des-familles-a-tarbes-quels-ateliers-pour-les-parents-d-enfants-de-0-a-6-ans/ | L'îlot des Familles à Tarbes: quels ateliers pour les parents d'enfants de 0 à 6 ans? | parentalite | Tarbes, Hautes-Pyrénées, Occitanie
- /articles/sorties/musee-calisson-aix-visite-enfants-2026/ | Musée du Calisson à Aix-en-Provence: une enquête gourmande pour les enfants en 2026 | sorties | Aix-en-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/parentalite/maison-des-parents-a-guingamp-quand-y-aller-et-quel-service-choisir/ | Maison des Parents à Guingamp: quand y aller et quel service choisir ? | parentalite | Guingamp, Côtes-d'Armor, Bretagne
- /articles/cuisine/moulin-du-mont-ramus-a-bessan-choisir-son-huile-d-olive-en-famille/ | Moulin du Mont Ramus à Bessan: choisir son huile d’olive en famille | cuisine | Bessan, Hérault, Occitanie
- /articles/cuisine/ateliers-cuisine-a-caen-avec-des-enfants-quelle-formule-choisir/ | Bien Dans Son Assiette à Caen: quel atelier cuisine choisir avec un enfant ? | cuisine | Caen, Calvados, Normandie
- /articles/cuisine/huile-de-noix-du-perigord-du-moulin-de-neuvic-a-la-cuisine-familiale/ | Huile de noix du Périgord: du moulin de Neuvic à la cuisine familiale | cuisine | Neuvic, Dordogne, Nouvelle-Aquitaine
- /articles/activites/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre/ | Grottes de Thouzon avec des enfants: préparer la visite sous terre | activites | Le Thor, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/voyages/visiter-guedelon-avec-des-enfants-preparer-la-journee-en-2026/ | Visiter Guédelon avec des enfants: préparer la journée en 2026 | voyages | Treigny-Perreuse-Sainte-Colombe, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne
- /articles/evenements/planete-ocean-a-paris-preparer-la-visite-en-famille/ | Planète Océan à Paris: préparer la visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/activites/lac-du-bouchet-en-famille-tour-du-lac-baignade-et-activites/ | Lac du Bouchet en famille: tour du lac, baignade et activités | activites | Cayres, Haute-Loire, Auvergne-Rhône-Alpes
- /articles/sorties/lac-de-madine-en-famille-baignade-gratuite-et-activites-a-nonsard/ | Lac de Madine en famille: baignade gratuite et activités à Nonsard | sorties | Nonsard-Lamarche, Meuse, Grand Est
- /articles/parentalite/premier-week-end-a-hossegor-avec-un-bebe-ou-dormir-et-quoi-prevoir/ | Hossegor avec un bébé: lac ou océan, quelles plages choisir ? | parentalite | Hossegor, Landes, Nouvelle-Aquitaine
- /articles/voyages/week-end-en-famille-au-lac-de-sidiailles-activites-baignade-et-budget/ | Week-end en famille au lac de Sidiailles: activités, baignade et budget | voyages | Sidiailles, Cher, Centre-Val de Loire
- /articles/parentalite/ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille/ | Ludothèque du Choletais: jouer sur place et emprunter en famille | parentalite | Cholet, Maine-et-Loire, Pays de la Loire
- /articles/vie-pratique/ludotheques-dans-le-gers-ou-jouer-et-emprunter-des-jeux-en-famille/ | Ludothèques dans le Gers: où jouer et emprunter des jeux en famille | vie-pratique | Auch, Gers, Occitanie
- /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | Ludothèques du Grand Nancy: où jouer en famille et emprunter des jeux | parentalite | Meurthe-et-Moselle, Grand Est
- /articles/vie-pratique/ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison/ | Ludothèques autour de Dinan: emprunter des jeux pour la maison | vie-pratique | Côtes-d'Armor, Bretagne
- /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | Foire de Grenoble 2026 en famille: jours gratuits, programme et tarifs | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/sorties/ete-oh-parcs-grenoble-2026-famille/ | L’Été Oh! Parcs Grenoble 2026: horaires et activités gratuites | sorties | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/cuisine/3-recettes-de-l-isere-faciles-a-preparer-en-famille/ | 3 recettes de l'Isère faciles à préparer en famille | cuisine | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/cirque-de-noel-2026-au-mans-horaires-tarifs-et-seance-a-choisir-avec-des-enfants/ | Cirque de Noël 2026 au Mans: horaires, tarifs et séance à choisir avec des enfants | evenements | Le Mans, Sarthe, Pays de la Loire
- /articles/voyages/le-mans-sans-voiture-avec-des-enfants-ou-dormir-et-comment-organiser-un-week-end/ | Le Mans sans voiture avec des enfants: où dormir et comment organiser un week-end | voyages | Le Mans, Sarthe, Pays de la Loire
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires et accès | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | Noël 2026 à Chantilly: Le Noël oublié, billets et séances en famille | evenements | Chantilly, Oise, Hauts-de-France
- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/cuisine/atelier-de-creme-chantilly-avec-des-enfants-a-partir-de-quel-age-et-comment-reserver/ | Atelier de crème Chantilly avec des enfants: à partir de quel âge et comment réserver | cuisine | Chantilly, Oise, Hauts-de-France
- /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | Noël de Casse-Noisette 2026 à Pierrefonds: visites, dates et tarifs en famille | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | Noël à Caen 2026 en famille: marché de Noël et visite illuminée | evenements | Caen, Calvados, Normandie
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/ | Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite | sorties | Paris, Paris, Île-de-France
- /articles/activites/stages-de-science-a-la-cite-des-sciences-pendant-la-toussaint-2026-lequel-choisir-selon-l-age/ | Stages de science à la Cité des sciences à la Toussaint 2026: durées, âges et tarifs | activites | Paris, Paris, Île-de-France
- /articles/evenements/rencontres-du-ciel-et-de-l-espace-2026-a-paris-que-choisir-avec-des-enfants/ | Rencontres du ciel et de l’espace 2026 à Paris: ateliers, âges et billets en famille | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | Vacances de la Toussaint 2026 à la Cité des sciences: les ateliers numériques gratuits avec des enfants | sorties | Paris, Paris, Île-de-France
- /articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/ | Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates | vie-pratique | Toulouse, Haute-Garonne, Occitanie
- /articles/bons-plans/cantine-au-college-dans-l-herault-jusqu-a-3-60-d-aide-par-repas/ | Cantine au collège dans l'Hérault: jusqu'à 3,60 € d'aide par repas | bons-plans | Montpellier, Hérault, Occitanie
- /articles/maison/moustique-tigre-en-haute-garonne-proteger-la-maison-et-le-jardin/ | Moustique tigre en Haute-Garonne: protéger la maison et le jardin | maison | Toulouse, Haute-Garonne, Occitanie
- /articles/vie-pratique/cantine-au-college-en-deux-sevres-comment-s-inscrire-en-ligne-pour-2026-2027/ | Cantine au collège en Deux-Sèvres: comment s'inscrire en ligne pour 2026-2027 | vie-pratique | Niort, Deux-Sèvres, Nouvelle-Aquitaine
- /articles/vie-pratique/cantine-au-college-dans-le-pas-de-calais-les-tarifs-2026-et-les-reductions-pour-les-boursiers/ | Cantine au collège dans le Pas-de-Calais: les tarifs 2026 et les réductions pour les boursiers | vie-pratique | Hénin-Beaumont, Pas-de-Calais, Hauts-de-France
- /articles/vie-pratique/cantine-au-college-en-essonne-obtenir-son-tarif-2026-2027-sans-refaire-la-mauvaise-demarche/ | Cantine au collège en Essonne: obtenir son tarif 2026-2027 sans refaire la mauvaise démarche | vie-pratique | Évry-Courcouronnes, Essonne, Île-de-France
- /articles/maison/recycleries-autour-de-chartres-ou-donner-et-acheter-d-occasion/ | Recycleries autour de Chartres: où donner et acheter d'occasion ? | maison | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/cuisine/apres-une-cueillette-en-eure-et-loir-5-recettes-faciles-a-faire-avec-les-enfants/ | Après une cueillette en Eure-et-Loir: 5 recettes faciles à faire avec les enfants | cuisine | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/maison/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/ | Meubles d'occasion en Meurthe-et-Moselle: où acheter, donner et réparer ? | maison | Meurthe-et-Moselle, Grand Est
- /articles/bons-plans/centre-spatial-guyanais-a-kourou-3-experiences-gratuites-et-un-musee-en-famille/ | Centre spatial guyanais à Kourou: 3 expériences gratuites et un musée en famille | bons-plans | Kourou, Guyane, Guyane
- /articles/activites/vakans-o-peyi-remire-montjoly-2026/ | Vakans o péyi à Rémire-Montjoly: un accueil de loisirs pour les 3 à 12 ans | activites | Rémire-Montjoly, Guyane, Guyane
- /articles/evenements/braderie-ete-toulon-2026-famille/ | Braderie d’été de Toulon 2026 en famille: animations gratuites et accès au centre-ville | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/troyes-en-famille-a-petit-budget-musees-gratuites-et-balades-dans-le-centre/ | Troyes en famille à petit budget: musées, gratuités et balades dans le centre | bons-plans | Troyes, Aube, Grand Est
- /articles/evenements/herofestival-marseille-2026-en-famille-billets-gratuite-enfants-et-conseils/ | HeroFestival Marseille 2026 en famille: billets, gratuité enfants et conseils | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | Fête de la mer 2026 à Marseille avec des enfants: quelle escale choisir? | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/sorties/mucem-en-famille-billets-gratuites-et-conseils-pour-la-visite/ | Mucem Marseille en famille: tarifs 2026, billets et gratuités | sorties | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | Foire aux santons de Marseille 2026: dates, inauguration et visite en famille | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/bons-plans/musees-a-la-reunion-en-famille-quel-pass-choisir-pour-economiser/ | Musées à La Réunion en famille: quel pass choisir pour économiser ? | bons-plans | La Réunion, La Réunion
- /articles/sorties/aeroscopia-en-famille-quels-avions-visiter-avec-les-enfants/ | Aeroscopia en famille: quels avions visiter avec les enfants? | sorties | Blagnac, Haute-Garonne, Occitanie
- /articles/cuisine/maison-du-cacao-a-pointe-noire-decouvrir-le-chocolat-en-famille/ | Maison du Cacao à Pointe-Noire: découvrir le chocolat en famille | cuisine | Pointe-Noire, Guadeloupe, Guadeloupe
- /articles/bons-plans/musees-de-niort-en-famille-le-donjon-et-bernard-d-agesci-a-petit-budget/ | Musées de Niort en famille: le Donjon et Bernard d’Agesci à petit budget | bons-plans | Niort, Deux-Sèvres, Nouvelle-Aquitaine
- /articles/maison/saison-des-pluies-a-mayotte-preparer-sa-maison-en-famille/ | Saison des pluies à Mayotte: préparer sa maison en famille | maison | Mayotte, Mayotte
- /articles/parentalite/rejouets-a-cerences-donner-completer-et-acheter-des-jouets-d-occasion/ | Rejouets à Cérences: donner, compléter et acheter des jouets d’occasion | parentalite | Cérences, Manche, Normandie
- /articles/activites/corderie-royale-de-rochefort-en-famille-visite-tarifs-et-ateliers/ | Corderie Royale de Rochefort en famille: visite, tarifs et ateliers | activites | Rochefort, Charente-Maritime, Nouvelle-Aquitaine
- /articles/cuisine/a-chiconi-decouvrir-la-cuisine-mahoraise-en-famille/ | À Chiconi, découvrir la cuisine mahoraise en famille | cuisine | Chiconi, Mayotte, Mayotte
- /articles/evenements/carnaval-de-limoux-2027-en-famille-dates-fecos-et-conseils-pratiques/ | Carnaval de Limoux 2027 en famille: dates, Fécos et conseils pratiques | evenements | Limoux, Aude, Occitanie
- /articles/voyages/la-vallee-des-saints-a-carnoet-visiter-les-geants-de-granit-en-famille/ | La Vallée des Saints à Carnoët: visiter les géants de granit en famille | voyages | Carnoët, Côtes-d'Armor, Bretagne
- /articles/maison/composter-en-martinique-demarrer-au-jardin-ou-en-residence/ | Composter en Martinique: démarrer au jardin ou en résidence | maison | Martinique
- /articles/vie-pratique/transports-gratuits-a-lille-comment-obtenir-le-titre-moins-de-18-ans/ | Transports gratuits à Lille: comment obtenir le titre moins de 18 ans ? | vie-pratique | Nord, Hauts-de-France
- /articles/bons-plans/pass-cantal-2026-2027-quels-cheques-utiliser-pour-les-activites-des-enfants/ | PASS CANTAL 2026-2027: quels chèques utiliser pour les activités des enfants ? | bons-plans | Cantal, Auvergne-Rhône-Alpes
- /articles/evenements/festi-di-natali-2026-a-bonifacio-le-marche-de-noel-en-famille/ | Festi di Natali 2026 à Bonifacio: le marché de Noël en famille | evenements | Bonifacio, Corse-du-Sud, Corse
- /articles/vie-pratique/bus-ou-voiture-a-la-reunion-organiser-ses-deplacements-en-famille/ | Bus ou voiture à La Réunion: organiser ses déplacements en famille | vie-pratique | La Réunion
- /articles/voyages/week-end-dans-l-auxois-en-famille-chateau-de-bussy-rabutin-et-semur-en-auxois/ | Week-end dans l'Auxois en famille: château de Bussy-Rabutin et Semur-en-Auxois | voyages | Côte-d'Or, Bourgogne-Franche-Comté
- /articles/activites/musee-de-l-air-et-de-l-espace-au-bourget-quel-parcours-en-famille/ | Musée de l’Air et de l’Espace au Bourget: quel parcours en famille? | activites | Le Bourget, Seine-Saint-Denis, Île-de-France
- /articles/sorties/paleospace-de-villers-sur-mer-en-famille-fossiles-planetarium-et-visites/ | Paléospace de Villers-sur-Mer en famille: fossiles, planétarium et visites | sorties | Villers-sur-Mer, Calvados, Normandie
- /articles/vie-pratique/transport-scolaire-en-ariege-gratuite-lio-inscription-et-aide-si-aucun-car-ne-dessert-votre-domicile/ | Transport scolaire en Ariège: gratuité liO, inscription et aide si aucun car ne dessert votre domicile | vie-pratique | Ariège, Occitanie
- /articles/evenements/festi-momes-2027-a-longueau-et-glisy-les-spectacles-en-famille/ | Festi’Mômes 2027 à Longueau et Glisy: les spectacles en famille | evenements | Somme, Hauts-de-France
- /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | Atelier bâton de pluie gratuit à Paris le 18 novembre 2026: dès 6 ans | activites | Paris, Paris, Île-de-France
- /articles/maison/logement-mal-isole-dans-le-vaucluse-comment-gagner-en-confort-ete-comme-hiver/ | Logement mal isolé dans le Vaucluse: comment gagner en confort été comme hiver ? | maison | Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | Lecture d'hiver gratuite à Paris le 12 décembre 2026: deux séances pour les 1-3 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/spectacle-de-noel-gratuit-a-paris-le-5-decembre-2026-p-tit-loup-et-la-magie-en-famille/ | Spectacle de Noël gratuit à Paris le 5 décembre 2026: Mon p'tit loup magique | evenements | Paris, Paris, Île-de-France
- /articles/voyages/musee-du-jouet-de-poissy-en-famille-visite-tarifs-et-exposition-sur-le-precinema/ | Musée du Jouet de Poissy en famille: visite, tarifs et exposition sur le précinéma | voyages | Poissy, Yvelines, Île-de-France
- /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | Bricolages de Noël gratuits à Paris le 19 décembre 2026: un atelier dès 4 ans | activites | Paris, Paris, Île-de-France
- /articles/maison/humidite-et-moisissures-en-hiver-dans-le-haut-rhin-que-faire-et-qui-contacter/ | Humidité et moisissures en hiver dans le Haut-Rhin: que faire et qui contacter ? | maison | Haut-Rhin, Grand Est
- /articles/voyages/saul-en-famille-preparer-un-sejour-au-coeur-de-la-foret-guyanaise/ | Saül en famille: préparer un séjour au cœur de la forêt guyanaise | voyages | Saül, Guyane, Guyane
- /articles/activites/atelier-deco-de-noel-gratuit-a-paris-le-28-novembre-2026-creer-en-recup-art-des-8-ans/ | Atelier déco de Noël gratuit à Paris le 28 novembre 2026: bricolage dès 8 ans | activites | Paris, Paris, Île-de-France

### Historique Radar lié

- opportunity | /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | 2026-11-05T16:36:05.180Z
- opportunity | /articles/activites/atelier-deco-de-noel-gratuit-a-paris-le-28-novembre-2026-creer-en-recup-art-des-8-ans/ | 2026-11-05T23:35:44.031Z
- opportunity | /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | 2026-11-06T12:30:50.449Z
- refresh | /articles/activites/biotropica-en-famille-a-val-de-reuil-animaux-tarifs-et-visite-par-temps-de-pluie/ | 2026-11-07T21:36:00.316Z
- opportunity | /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | 2026-11-06T03:27:40.597Z
- refresh | /articles/sorties/chateau-fort-de-sedan-en-famille-parcours-tarifs-et-conseils-de-visite/ | 2026-11-07T15:31:39.896Z
- refresh | /articles/maison/dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage/ | 2026-11-08T04:30:49.530Z
- opportunity | /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | 2026-10-06T16:58:51.946Z
- opportunity | /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | 2026-10-23T15:29:55.218Z
- opportunity | /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | 2026-10-21T13:33:34.395Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- refresh | /articles/parentalite/laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit/ | 2026-11-08T16:33:51.043Z
- opportunity | /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | 2026-11-06T09:33:42.136Z
- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | 2026-10-26T21:31:06.119Z
- opportunity | /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | 2026-10-30T21:26:32.584Z
- opportunity | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-10-30T18:26:56.039Z
- opportunity | /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | 2026-10-27T07:35:50.437Z
- refresh | /articles/activites/parc-animalier-de-gramat-en-famille-animaux-duree-et-conseils-de-visite/ | 2026-11-08T19:34:02.934Z
- refresh | /articles/bons-plans/parc-floral-d-orleans-gratuit-en-hiver-horaires-et-sortie-avec-les-enfants/ | 2026-11-08T07:28:43.032Z
- opportunity | /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/ | 2026-10-28T12:27:07.569Z
- opportunity | /articles/activites/paris-sport-vacances-automne-2026-demi-journee-gratuite-ou-stage-a-la-journee/ | 2026-10-03T20:20:25.508Z
- opportunity | /articles/voyages/rejoindre-l-aeroport-paris-cdg-en-famille-rer-b-bus-9517-ou-taxi/ | 2026-10-15T09:28:56.552Z
- opportunity | /articles/evenements/rencontres-du-ciel-et-de-l-espace-2026-a-paris-que-choisir-avec-des-enfants/ | 2026-11-04T05:34:42.508Z
- refresh | /articles/bons-plans/ski-a-aussois-en-famille-en-2026-2027-forfaits-et-budget/ | 2026-11-08T10:32:11.067Z
- opportunity | /articles/evenements/spectacle-de-noel-gratuit-a-paris-le-5-decembre-2026-p-tit-loup-et-la-magie-en-famille/ | 2026-11-06T06:35:41.183Z
- opportunity | /articles/activites/stages-de-science-a-la-cite-des-sciences-pendant-la-toussaint-2026-lequel-choisir-selon-l-age/ | 2026-10-04T05:39:23.036Z
- opportunity | /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | 2026-10-05T11:24:52.310Z

## Travaux éditoriaux en cours

### Publication en cours

- Branche: automation/publication-20261108-2300-sujet-fete-de-la-truffe-de-sarlat-les-16-et-17-janvier-2027-dordogne
- HEAD: publication: phase 1 sujet-fete-de-la-truffe-de-sarlat-les-16-et-17-janvier-2027-dordogne

## Sujet retenu
**Sujet :** Fête de la Truffe de Sarlat, les 16 et 17 janvier 2027 (Dordogne).
**Titre de travail :** « Fête de la Truffe 2027 à Sarlat en famille : découvrir, goûter et cuisiner le diamant noir ».
**Angle :** construire une découverte gourmande accessible aux familles, en distinguant les animations à observer ensemble, les ateliers culinaires sur inscription et les achats au marché. Cette fête annuelle organisée à Sarlat autour de la truffe noire du Périgord rassemble producteurs, démonstrations de cavage, dégustations et activités culinaires. L'office de tourisme confirme les dates des 16 et 17 janvier 2027 ; le programme détaillé et les prix 2027 restent à contrôler lors de la rédaction.

## Besoin du lecteur
Comprendre ce qu'est une truffe noire et comment la fête permet de la découvrir avec des enfants ; choisir des activités selon l'âge et le budget, savoir ce qui relève du marché, des animations ou des stages de cuisine, préparer une journée ou un week-end à Sarlat, puis repartir avec des idées simples pour cuisiner une petite quantité de truffe sans dépenses excessives. Vérifier les modalités de réservation et les âges admis avant de présenter un atelier comme accessible aux enfants.

## Valeur éditoriale
- Le site officiel annonce un marché de truffes, des démonstrations de cavage avec chiens, des ateliers sensoriels pour apprendre à reconnaître et acheter la truffe et des stages culinaires en petit groupe. Comparer ces expériences plutôt que recopier le programme.
- Proposer un parcours familial concret (marché, découverte olfactive, démonstration, pause et dégustation) et distinguer ce qui est libre de ce qui nécessite inscription ou paiement, après vérification du programme 2027.
- Expliquer les différences entre truffe fraîche et produits aromatisés, les précautions d'achat, la saison et quelques usages culinaires familiaux simples ; ne pas inventer de prix au gramme ni de garanties de dégustation.
- L'office de tourisme et les résultats de recherche fournissent déjà une présentation de l'événement ; la valeur ajoutée sera le choix d'activités et la préparation pratique pour les familles, pas une annonce supplémentaire.
- Les dates sont à plus de 30 jours du 8 novembre 2026. Ne pas reprendre comme actuels les tarifs et horaires de l'édition 2026.

## Affiliation
- **Hébergement pour un week-end : Booking.com — FRANRÉAL, 4 Appartements Climatisés**, à Sarlat-la-Canéda : appartements avec kitchenette, plusieurs configurations annoncées pour quatre personnes. Offre précise vérifiée : https://www.booking.com/hotel/fr/franreal-appartements.html . Disponibilité et tarif pour les 16–17 janvier 2027 non vérifiés.
- **Autre hébergement possible : Expedia.fr — Résidence Odalys Domaine des Côteaux de Sarlat**, logements avec kitchenette, équipements familiaux et stationnement ; un peu à l'écart du centre, donc à présenter seulement comme solution pour prolonger le séjour : https://www.expedia.fr/Sarlat-La-Caneda-Hotel-Residence-Odalys-Les-Coteaux-De-Sarlat.h26551327.Description-Hotel . Disponibilité et prix aux dates de la fête non vérifiés.
- **Billets et stages de cuisine :** aucune offre équivalente et vérifiée identifiée chez GetYourGuide ou Tiqets pour cette fête ; renvoyer aux modalités officielles plutôt qu'inventer une billetterie partenaire. Une seule suggestion d'hébergement suffit dans l'article si elle s'intègre naturellement.

## Sources de départ
- Office de tourisme de Sarlat, page officielle de la fête (dates 2027, animations, ateliers et cavage) : https://www.sarlat-tourisme.com/je-decouvre-sarlat-et-le-perigord/les-grands-evenements-de-sarlat-des-animations-toute-lannee/fete-de-la-truffe-a-sarlat-et-academie-culinaire-du-foie-gras/
- Office de tourisme de Sarlat, agenda des grands événements (confirmation 16–17 janvier 2027) : https://www.sarlat-tourisme.com/je-decouvre-sarlat-et-le-perigord/les-grands-evenements-de-sarlat-des-animations-toute-lannee/
- Dordogne Périgord Tourisme, marchés aux truffes 2026–2027 (différence entre marchés professionnels et marchés de détail, saison) : https://www.dordogne-perigord-tourisme.fr/preparer-son-sejour/agenda-des-animations/a-ne-pas-manquer/marches-aux-truffes/
- Dordogne Périgord Tourisme, fiche fête de Sarlat : attention, la page détaille encore l'édition 2026 ; utile uniquement comme historique, pas comme programme 2027 : https://www.dordogne-perigord-tourisme.fr/preparer-son-sejour/agenda-des-animations/a-ne-pas-manquer/fete-truffe-sarlat/


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
