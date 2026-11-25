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
  "generatedAt": "2026-11-25T07:30:00+01:00",
  "dataThrough": "2026-11-23",
  "from": "2026-10-27",
  "refresh": [
    {
      "url": "/articles/parentalite/laep-a-toulouse-ou-jouer-gratuitement-avec-son-enfant-de-moins-de-6-ans/",
      "title": "LAEP à Toulouse: où jouer gratuitement avec son enfant de moins de 6 ans?",
      "category": "parentalite",
      "publishedAt": "2026-11-11T22:03:01+01:00",
      "location": {
        "city": "Toulouse",
        "department": "Haute-Garonne",
        "region": "Occitanie"
      },
      "ageDays": 14,
      "rapidDrop": true,
      "peakStart": "2026-11-17",
      "peakEnd": "2026-11-19",
      "recentStart": "2026-11-21",
      "recentEnd": "2026-11-23",
      "peakImpressions": 86,
      "recentImpressions": 3,
      "score": 249,
      "signal": "uncertain",
      "basis": "Visibilité récente : 86 impressions sur trois jours, puis 3 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "laep toulouse",
        "laep",
        "laep borderouge",
        "laep fourtanier",
        "espace enfant"
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
      "ageDays": 30,
      "rapidDrop": true,
      "peakStart": "2026-10-30",
      "peakEnd": "2026-11-01",
      "recentStart": "2026-11-21",
      "recentEnd": "2026-11-23",
      "peakImpressions": 69,
      "recentImpressions": 3,
      "score": 198,
      "signal": "uncertain",
      "basis": "Visibilité récente : 69 impressions sur trois jours, puis 3 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "parc floral gratuit",
        "parc floral de la source gratuit"
      ]
    },
    {
      "url": "/articles/cuisine/maison-du-cacao-a-pointe-noire-decouvrir-le-chocolat-en-famille/",
      "title": "Maison du Cacao à Pointe-Noire: découvrir le chocolat en famille",
      "category": "cuisine",
      "publishedAt": "2026-11-08T06:04:50+01:00",
      "location": {
        "city": "Pointe-Noire",
        "department": "Guadeloupe",
        "region": "Guadeloupe"
      },
      "ageDays": 17,
      "rapidDrop": true,
      "peakStart": "2026-11-16",
      "peakEnd": "2026-11-18",
      "recentStart": "2026-11-21",
      "recentEnd": "2026-11-23",
      "peakImpressions": 43,
      "recentImpressions": 10,
      "score": 99,
      "signal": "uncertain",
      "basis": "Visibilité récente : 43 impressions sur trois jours, puis 10 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0.308,
      "focusQueries": [
        "la maison du cacao",
        "maison du cacao en guadeloupe",
        "maison du cacao guadeloupe",
        "la maison du cacao guadeloupe",
        "maison cacao guadeloupe"
      ]
    },
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
      "ageDays": 25,
      "rapidDrop": true,
      "peakStart": "2026-11-01",
      "peakEnd": "2026-11-03",
      "recentStart": "2026-11-21",
      "recentEnd": "2026-11-23",
      "peakImpressions": 35,
      "recentImpressions": 4,
      "score": 93,
      "signal": "uncertain",
      "basis": "Visibilité récente : 35 impressions sur trois jours, puis 4 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
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
      "url": "/articles/activites/palais-ideal-du-facteur-cheval-en-famille-visite-et-conseils-a-hauterives/",
      "title": "Palais idéal du facteur Cheval en famille: visite et conseils à Hauterives",
      "category": "activites",
      "publishedAt": "2026-10-27T02:02:18+01:00",
      "location": {
        "city": "Hauterives",
        "department": "Drôme",
        "region": "Auvergne-Rhône-Alpes"
      },
      "ageDays": 29,
      "rapidDrop": true,
      "peakStart": "2026-10-28",
      "peakEnd": "2026-10-30",
      "recentStart": "2026-11-21",
      "recentEnd": "2026-11-23",
      "peakImpressions": 29,
      "recentImpressions": 0,
      "score": 87,
      "signal": "uncertain",
      "basis": "Visibilité récente : 29 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "conseils de réservation",
        "hauterive cheval",
        "palais du facteur cheval",
        "visiter le palais du facteur cheval"
      ]
    },
    {
      "url": "/articles/cuisine/ateliers-patisserie-en-essonne-ou-cuisiner-avec-ses-enfants/",
      "title": "Ateliers pâtisserie en Essonne: où cuisiner avec ses enfants?",
      "category": "cuisine",
      "publishedAt": "2026-11-12T10:04:02+01:00",
      "location": {
        "city": "",
        "department": "Essonne",
        "region": "Île-de-France"
      },
      "ageDays": 13,
      "rapidDrop": true,
      "peakStart": "2026-11-18",
      "peakEnd": "2026-11-20",
      "recentStart": "2026-11-21",
      "recentEnd": "2026-11-23",
      "peakImpressions": 30,
      "recentImpressions": 3,
      "score": 81,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 30 impressions sur trois jours, puis 3 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "atelier pâtisserie enfant Essonne",
        "atelier cuisine parent enfant Essonne",
        "pâtisserie famille Orsay Yerres"
      ]
    },
    {
      "url": "/articles/cuisine/ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet/",
      "title": "Ateliers de cuisine parent-enfant à Toulouse: chocolat, pâtisserie ou menu complet ?",
      "category": "cuisine",
      "publishedAt": "2026-11-01T12:00:47+01:00",
      "location": {
        "city": "Toulouse",
        "department": "Haute-Garonne",
        "region": "Occitanie"
      },
      "ageDays": 24,
      "rapidDrop": true,
      "peakStart": "2026-11-03",
      "peakEnd": "2026-11-05",
      "recentStart": "2026-11-21",
      "recentEnd": "2026-11-23",
      "peakImpressions": 34,
      "recentImpressions": 9,
      "score": 75,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 34 impressions sur trois jours, puis 9 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "atelier cuisine parent enfant Toulouse",
        "cours pâtisserie enfant Toulouse",
        "atelier chocolat en famille Toulouse"
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
      "ageDays": 28,
      "rapidDrop": true,
      "peakStart": "2026-10-29",
      "peakEnd": "2026-10-31",
      "recentStart": "2026-11-21",
      "recentEnd": "2026-11-23",
      "peakImpressions": 26,
      "recentImpressions": 1,
      "score": 75,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 26 impressions sur trois jours, puis 1 sur les trois derniers jours consolidés; cause non établie.",
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
      "url": "/articles/activites/parc-phoenix-a-nice-en-famille-serre-tropicale-animaux-et-jeux/",
      "title": "Parc Phoenix à Nice en famille: serre tropicale, animaux et jeux",
      "category": "activites",
      "publishedAt": "2026-11-15T00:25:33+01:00",
      "location": {
        "city": "Nice",
        "department": "Alpes-Maritimes",
        "region": "Provence-Alpes-Côte d’Azur"
      },
      "ageDays": 10,
      "rapidDrop": true,
      "peakStart": "2026-11-16",
      "peakEnd": "2026-11-18",
      "recentStart": "2026-11-21",
      "recentEnd": "2026-11-23",
      "peakImpressions": 22,
      "recentImpressions": 0,
      "score": 66,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 22 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Parc Phoenix en famille",
        "activité avec enfants à Nice",
        "serre tropicale Nice"
      ]
    },
    {
      "url": "/articles/parentalite/laep-a-colmar-ou-aller-gratuitement-avec-un-enfant-de-0-a-6-ans/",
      "title": "LAEP à Colmar: où aller gratuitement avec un enfant de 0 à 6 ans",
      "category": "parentalite",
      "publishedAt": "2026-08-15T16:36:50+02:00",
      "location": {
        "city": "Colmar",
        "department": "Haut-Rhin",
        "region": "Grand Est"
      },
      "ageDays": 102,
      "rapidDrop": true,
      "peakStart": "2026-11-10",
      "peakEnd": "2026-11-12",
      "recentStart": "2026-11-21",
      "recentEnd": "2026-11-23",
      "peakImpressions": 25,
      "recentImpressions": 8,
      "score": 51,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 25 impressions sur trois jours, puis 8 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "LAEP Colmar",
        "parent enfant Colmar gratuit"
      ]
    },
    {
      "url": "/articles/evenements/noel-2026-a-besancon-en-famille-contes-gratuits-marche-solidaire-ou-artisans/",
      "title": "Noël 2026 à Besançon en famille: contes, marché solidaire et artisans",
      "category": "evenements",
      "publishedAt": "2026-11-01T06:27:50.750Z",
      "location": {
        "city": "Besançon",
        "department": "Doubs",
        "region": "Bourgogne-Franche-Comté"
      },
      "ageDays": 24,
      "rapidDrop": true,
      "peakStart": "2026-11-03",
      "peakEnd": "2026-11-05",
      "recentStart": "2026-11-21",
      "recentEnd": "2026-11-23",
      "peakImpressions": 28,
      "recentImpressions": 7,
      "score": 63,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 28 impressions sur trois jours, puis 7 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Noël Besançon 2026 enfants",
        "contes gratuits Musée du Temps décembre 2026",
        "marché solidaire Noël Chamars 2026",
        "marché artisanal Besançon 5 6 décembre 2026"
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
      "ageDays": 21,
      "rapidDrop": true,
      "peakStart": "2026-11-09",
      "peakEnd": "2026-11-11",
      "recentStart": "2026-11-21",
      "recentEnd": "2026-11-23",
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
      "ageDays": 27,
      "rapidDrop": true,
      "peakStart": "2026-11-01",
      "peakEnd": "2026-11-03",
      "recentStart": "2026-11-21",
      "recentEnd": "2026-11-23",
      "peakImpressions": 22,
      "recentImpressions": 4,
      "score": 54,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 22 impressions sur trois jours, puis 4 sur les trois derniers jours consolidés; cause non établie.",
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
      "url": "/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/",
      "title": "Transports à Paris avec des enfants: quel titre choisir pour payer juste?",
      "category": "voyages",
      "publishedAt": "2026-08-29T00:00:45+02:00",
      "location": {
        "city": "Paris",
        "department": "Paris",
        "region": "Île-de-France"
      },
      "ageDays": 88,
      "rapidDrop": false,
      "peakStart": "2026-10-27",
      "peakEnd": "2026-11-02",
      "recentStart": "2026-11-17",
      "recentEnd": "2026-11-23",
      "peakImpressions": 2410,
      "recentImpressions": 1618,
      "score": 792,
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
      "ageDays": 40,
      "rapidDrop": false,
      "peakStart": "2026-10-27",
      "peakEnd": "2026-11-02",
      "recentStart": "2026-11-17",
      "recentEnd": "2026-11-23",
      "peakImpressions": 751,
      "recentImpressions": 474,
      "score": 277,
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
    }
  ],
  "strongPages": [
    {
      "url": "/articles/evenements/cirque-de-noel-2026-au-mans-horaires-tarifs-et-seance-a-choisir-avec-des-enfants/",
      "title": "Cirque de Noël 2026 au Mans: horaires, tarifs et séance à choisir avec des enfants",
      "category": "evenements",
      "recentImpressions": 373,
      "recentClicks": 20,
      "recentPosition": 6.952,
      "retention": 1.522
    },
    {
      "url": "/articles/evenements/gastronomades-2026-a-angouleme-en-famille-faut-il-prevoir-le-week-end/",
      "title": "Gastronomades 2026 à Angoulême en famille: programme, tarifs et conseils",
      "category": "evenements",
      "recentImpressions": 357,
      "recentClicks": 10,
      "recentPosition": 6.213,
      "retention": 1.231
    },
    {
      "url": "/articles/evenements/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales/",
      "title": "Fêtes de l’Ours 2027: quelle fête choisir en famille dans les Pyrénées-Orientales ?",
      "category": "evenements",
      "recentImpressions": 280,
      "recentClicks": 10,
      "recentPosition": 3.943,
      "retention": 0.697
    },
    {
      "url": "/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/",
      "title": "Transports à Paris avec des enfants: quel titre choisir pour payer juste?",
      "category": "voyages",
      "recentImpressions": 1618,
      "recentClicks": 8,
      "recentPosition": 8.321,
      "retention": 0.671
    },
    {
      "url": "/articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/",
      "title": "Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille",
      "category": "evenements",
      "recentImpressions": 474,
      "recentClicks": 7,
      "recentPosition": 7.58,
      "retention": 0.631
    },
    {
      "url": "/articles/maison/recycleries-autour-de-chartres-ou-donner-et-acheter-d-occasion/",
      "title": "Recycleries autour de Chartres: où donner et acheter d'occasion ?",
      "category": "maison",
      "recentImpressions": 103,
      "recentClicks": 7,
      "recentPosition": 9.913,
      "retention": 0.844
    },
    {
      "url": "/articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/",
      "title": "Noël à Trévarez 2026 en famille: dates, horaires et réservation",
      "category": "evenements",
      "recentImpressions": 1269,
      "recentClicks": 5,
      "recentPosition": 8.765,
      "retention": 5.93
    },
    {
      "url": "/articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/",
      "title": "Noël 2026 au château de Goulaine: dates, billets et conseils en famille",
      "category": "evenements",
      "recentImpressions": 264,
      "recentClicks": 5,
      "recentPosition": 7.36,
      "retention": 1.148
    },
    {
      "url": "/articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/",
      "title": "Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates",
      "category": "vie-pratique",
      "recentImpressions": 214,
      "recentClicks": 5,
      "recentPosition": 5.308,
      "retention": 0.955
    },
    {
      "url": "/articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/",
      "title": "Salon du Cheval de Paris 2026 en famille: ateliers, jumping et Nuit du Cheval",
      "category": "evenements",
      "recentImpressions": 124,
      "recentClicks": 5,
      "recentPosition": 7.629,
      "retention": 2.531
    }
  ],
  "excluded": {
    "expired": 198,
    "cooling": 76
  },
  "warnings": [
    "Diagnostics par requêtes : 5/5.",
    "Les baisses d'impressions ne prouvent ni désindexation ni perte de classement."
  ]
}

## Catalogue ciblé (doublons et publications récentes)

### Articles comparables et publications récentes

- /articles/parentalite/laep-a-toulouse-ou-jouer-gratuitement-avec-son-enfant-de-moins-de-6-ans/ | LAEP à Toulouse: où jouer gratuitement avec son enfant de moins de 6 ans? | parentalite | Toulouse, Haute-Garonne, Occitanie
- /articles/parentalite/laep-dans-l-orne-ou-jouer-gratuitement-avec-son-tout-petit/ | LAEP dans l'Orne: où jouer gratuitement avec son tout-petit ? | parentalite | Orne, Normandie
- /articles/parentalite/laep-dans-le-tarn-ou-aller-avec-son-enfant/ | LAEP dans le Tarn: où aller avec son enfant ? | parentalite | Tarn, Occitanie
- /articles/parentalite/laep-a-rennes-ou-jouer-gratuitement-avec-son-enfant/ | LAEP à Rennes: où jouer gratuitement avec son enfant? | parentalite | Rennes, Ille-et-Vilaine, Bretagne
- /articles/bons-plans/parc-floral-d-orleans-gratuit-en-hiver-horaires-et-sortie-avec-les-enfants/ | Parc floral d’Orléans gratuit en hiver: horaires et sortie avec les enfants | bons-plans | Orléans, Loiret, Centre-Val de Loire
- /articles/maison/composteur-gratuit-a-orleans-metropole-comment-en-profiter-en-2026/ | Composteur gratuit à Orléans Métropole: comment en profiter en 2026 | maison | Orléans, Loiret, Centre-Val de Loire
- /articles/sorties/chasse-motifs-loire-orleans-famille-2026/ | Chasse aux motifs de Loire à Orléans: une balade gratuite pour les 6 à 12 ans | sorties | Orléans, Loiret, Centre-Val de Loire
- /articles/activites/mobe-d-orleans-en-famille-fossiles-jeux-et-biodiversite/ | MOBE d’Orléans en famille: fossiles, jeux et biodiversité | activites | Orléans, Loiret, Centre-Val de Loire
- /articles/cuisine/maison-du-cacao-a-pointe-noire-decouvrir-le-chocolat-en-famille/ | Maison du Cacao à Pointe-Noire: découvrir le chocolat en famille | cuisine | Pointe-Noire, Guadeloupe, Guadeloupe
- /articles/activites/a-pointe-noire-decouvrir-la-riviere-en-famille-avec-l-aquarando-d-acomat/ | À Pointe-Noire, découvrir la rivière en famille avec l’aquarando d’Acomat | activites | Pointe-Noire, Guadeloupe, Guadeloupe
- /articles/maison/saison-cyclonique-en-guadeloupe-comment-preparer-sa-maison-en-famille/ | Saison cyclonique en Guadeloupe: comment préparer sa maison en famille | maison | Basse-Terre, Guadeloupe, Guadeloupe
- /articles/cuisine/cuisiner-creole-avec-son-enfant-a-saint-francois/ | Cuisiner créole avec son enfant à Saint-François | cuisine | Saint-François, Guadeloupe, Guadeloupe
- /articles/voyages/disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026/ | Disneyland Paris en RER A avec des enfants: trajet et tarifs 2026 | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/voyages/halloween-2026-a-disneyland-paris-en-famille-billets-hotel-et-duree-du-sejour/ | Halloween 2026 à Disneyland Paris en famille: billets, hôtel et durée du séjour | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/voyages/disneyland-paris-en-famille-en-2026-combien-de-jours-quel-hotel-et-quel-budget-prevoir/ | Disneyland Paris en famille en 2026: combien de jours, quel hôtel et quel budget prévoir | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | Noël 2026 à Disneyland Paris: faut-il un billet 2 parcs pour voir Arendelle? | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/activites/palais-ideal-du-facteur-cheval-en-famille-visite-et-conseils-a-hauterives/ | Palais idéal du facteur Cheval en famille: visite et conseils à Hauterives | activites | Hauterives, Drôme, Auvergne-Rhône-Alpes
- /articles/vie-pratique/drome-sans-voiture-avec-des-enfants-train-cars-et-bus-pour-se-deplacer/ | Drôme sans voiture avec des enfants: train, cars et bus pour se déplacer | vie-pratique | Drôme, Auvergne-Rhône-Alpes
- /articles/parentalite/premier-week-end-a-avignon-avec-un-bebe-ou-dormir-et-quoi-prevoir/ | Avignon avec un bébé: poussette, Palais des Papes et où dormir | parentalite | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/avignonnais-palais-des-papes-et-pont-gratuits-le-week-end/ | Avignonnais: Palais des Papes et Pont gratuits le week-end | bons-plans | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/cuisine/ateliers-patisserie-en-essonne-ou-cuisiner-avec-ses-enfants/ | Ateliers pâtisserie en Essonne: où cuisiner avec ses enfants? | cuisine | Essonne, Île-de-France
- /articles/cuisine/atelier-cuisine-parent-enfant-a-nantes-gratuit-au-breil-ou-cours-prive/ | Ateliers cuisine parent-enfant à Nantes: où cuisiner ensemble? | cuisine | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/cuisine/ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet/ | Ateliers de cuisine parent-enfant à Toulouse: chocolat, pâtisserie ou menu complet ? | cuisine | Toulouse, Haute-Garonne, Occitanie
- /articles/cuisine/ateliers-de-cuisine-pour-enfants-a-montpellier-ou-aller-selon-leur-age/ | Ateliers de cuisine pour enfants à Montpellier: où aller selon leur âge? | cuisine | Montpellier, Hérault, Occitanie
- /articles/cuisine/ateliers-de-patisserie-parent-enfant-en-bretagne-quelle-formule-choisir/ | Ateliers de pâtisserie parent-enfant en Bretagne: quelle formule choisir? | cuisine | Bretagne
- /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/ | Paris avec une poussette: métro, RER, bus ou tram, que choisir ? | voyages | Paris, Paris, Île-de-France
- /articles/activites/atelier-des-lumieres-avec-un-enfant-quel-programme-choisir-et-peut-on-venir-avec-une-poussette/ | Atelier des Lumières avec un enfant: quel programme choisir et peut-on venir avec une poussette ? | activites | Paris, Paris, Île-de-France
- /articles/evenements/salon-du-chocolat-paris-2026-avec-des-enfants-quel-billet-choisir-et-quels-ateliers-reserver/ | Salon du Chocolat Paris 2026 avec des enfants: quel billet choisir et quels ateliers réserver | evenements | Paris, Paris, Île-de-France
- /articles/bons-plans/sainte-chapelle-et-conciergerie-en-famille-a-paris-quels-billets-choisir/ | Sainte-Chapelle et Conciergerie en famille à Paris: quels billets choisir ? | bons-plans | Paris, Paris, Île-de-France
- /articles/activites/parc-phoenix-a-nice-en-famille-serre-tropicale-animaux-et-jeux/ | Parc Phoenix à Nice en famille: serre tropicale, animaux et jeux | activites | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/activites/le-pal-ou-touroparc-en-famille-quel-parc-choisir-en-2026/ | Le PAL ou Touroparc en famille: quel parc choisir en 2026? | activites
- /articles/activites/parc-de-l-auxois-avec-des-enfants-comment-combiner-animaux-maneges-et-piscine/ | Parc de l'Auxois avec des enfants: comment combiner animaux, manèges et piscine | activites | Arnay-sous-Vitteaux, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/activites/parc-animalier-d-auvergne-en-famille-billets-animaux-et-conseils-de-visite/ | Parc animalier d'Auvergne en famille: billets, animaux et conseils de visite | activites | Ardes, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-a-colmar-ou-aller-gratuitement-avec-un-enfant-de-0-a-6-ans/ | LAEP à Colmar: où aller gratuitement avec un enfant de 0 à 6 ans | parentalite | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/repto-terra-expo-a-colmar-faut-il-y-aller-avec-des-enfants/ | Repto Terra Expo à Colmar: faut-il y aller avec des enfants? | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/vie-pratique/colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir/ | Colmar avec des enfants quand il pleut: quel musée choisir ? | vie-pratique | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | Festival du Livre de Colmar 2026 en famille: dates, horaires et animations jeunesse | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/noel-2026-a-besancon-en-famille-contes-gratuits-marche-solidaire-ou-artisans/ | Noël 2026 à Besançon en famille: contes, marché solidaire et artisans | evenements | Besançon, Doubs, Bourgogne-Franche-Comté
- /articles/sorties/vital-ete-besancon-2026-famille/ | Vital’Été Besançon 2026: inscription et activités gratuites | sorties | Besançon, Doubs, Bourgogne-Franche-Comté
- /articles/voyages/week-end-dans-le-doubs-en-famille-quel-budget-pour-3-grandes-sorties-en-2026/ | Week-end dans le Doubs en famille: quel budget pour 3 grandes sorties en 2026 | voyages | Besançon, Doubs, Bourgogne-Franche-Comté
- /articles/vie-pratique/bus-et-tram-a-besancon-en-famille-tarifs-et-gratuites-ginko-en-2026/ | Bus et tram à Besançon en famille: tarifs et gratuités Ginko en 2026 | vie-pratique | Besançon, Doubs, Bourgogne-Franche-Comté
- /articles/evenements/ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans/ | Écoute, je danse ! à Paris le 5 décembre 2026: spectacle gratuit dès 6 mois | evenements | Paris, Paris, Île-de-France
- /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | Atelier couture gratuit à Paris le 28 novembre 2026: dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-laine-cardee-de-noel-a-paris-le-2-decembre-2026-creer-ses-decorations-des-7-ans/ | Atelier laine cardée de Noël à Paris le 2 décembre 2026: décorations dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | Atelier Pokémon et biodiversité à Paris le 28 novembre 2026: dessin dès 10 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | Marché de Noël 100 % Côte-d’Or à Dijon 2026: horaires, spectacles et Père Noël | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | Festival des Petits Explorateurs 2026 à Dijon: ateliers, horaires et tarifs | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | Foire de Dijon 2026 avec les enfants: gratuités, ateliers et Ferme Côte-d'Or | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/vie-pratique/frais-scolaires-en-cote-d-or-quelles-aides-demander-au-departement/ | Frais scolaires en Côte-d'Or: quelles aides demander au Département? | vie-pratique | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/ | Transports à Paris avec des enfants: quel titre choisir pour payer juste? | voyages | Paris, Paris, Île-de-France
- /articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/ | Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite | sorties | Paris, Paris, Île-de-France
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | Thoiry Lumières Sauvages 2026-2027: dates, billets et visite en famille | evenements | Thoiry, Yvelines, Île-de-France
- /articles/sorties/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/ | Planète Préhistorique à Bordeaux: dates, durée et tarifs en famille | sorties | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/cirque-de-noel-2026-au-mans-horaires-tarifs-et-seance-a-choisir-avec-des-enfants/ | Cirque de Noël 2026 au Mans: horaires, tarifs et séance à choisir avec des enfants | evenements | Le Mans, Sarthe, Pays de la Loire
- /articles/voyages/le-mans-sans-voiture-avec-des-enfants-ou-dormir-et-comment-organiser-un-week-end/ | Le Mans sans voiture avec des enfants: où dormir et comment organiser un week-end | voyages | Le Mans, Sarthe, Pays de la Loire
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires, Père Noël et animations | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/gastronomades-2026-a-angouleme-en-famille-faut-il-prevoir-le-week-end/ | Gastronomades 2026 à Angoulême en famille: programme, tarifs et conseils | evenements | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/sorties/musee-de-la-bd-a-angouleme-en-famille-tarifs-horaires-et-conseils-de-visite/ | Musée de la BD à Angoulême en famille: tarifs, horaires et conseils de visite | sorties | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/voyages/ou-dormir-a-angouleme-avec-des-enfants-pour-visiter-la-ville-a-pied/ | Où dormir à Angoulême avec des enfants pour visiter la ville à pied | voyages | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/parentalite/decouvrir-la-bd-avec-ses-enfants-a-angouleme/ | Découvrir la BD avec ses enfants à Angoulême | parentalite | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/evenements/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales/ | Fêtes de l’Ours 2027: quelle fête choisir en famille dans les Pyrénées-Orientales ? | evenements | Pyrénées-Orientales, Occitanie
- /articles/parentalite/quel-laep-choisir-a-perpignan-selon-l-age-et-le-jour/ | Quel LAEP choisir à Perpignan selon l'âge et le jour ? | parentalite | Perpignan, Pyrénées-Orientales, Occitanie
- /articles/activites/parc-animalier-des-angles-en-famille-quel-circuit-choisir-et-comment-preparer-la-visite/ | Parc animalier des Angles en famille: quel circuit choisir et comment préparer la visite ? | activites | Les Angles, Pyrénées-Orientales, Occitanie
- /articles/bons-plans/musee-de-tautavel-moins-cher-avec-lio-le-bon-plan-a-connaitre/ | Musée de Tautavel moins cher avec liO: le bon plan à connaître | bons-plans | Tautavel, Pyrénées-Orientales, Occitanie
- /articles/maison/recycleries-autour-de-chartres-ou-donner-et-acheter-d-occasion/ | Recycleries autour de Chartres: où donner et acheter d'occasion ? | maison | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/cuisine/apres-une-cueillette-en-eure-et-loir-5-recettes-faciles-a-faire-avec-les-enfants/ | Après une cueillette en Eure-et-Loir: 5 recettes faciles à faire avec les enfants | cuisine | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/maison/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/ | Meubles d'occasion en Meurthe-et-Moselle: où acheter, donner et réparer ? | maison | Meurthe-et-Moselle, Grand Est
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/ | Noël à Trévarez 2026 en famille: dates, horaires et réservation | evenements | Saint-Goazec, Finistère, Bretagne
- /articles/evenements/train-de-noel-de-la-haute-somme-2026-en-famille-dates-tarifs-et-reservation/ | Train de Noël de la Haute Somme 2026 en famille: dates, tarifs et réservation | evenements | La Neuville-les-Bray, Somme, Hauts-de-France
- /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | Noël 2026 à Brest en famille: marché, projections et horaires | evenements | Brest, Finistère, Bretagne
- /articles/evenements/train-du-pere-noel-a-toucy-2026-horaires-tarifs-et-reservation/ | Train du Père Noël à Toucy 2026: horaires, tarifs et réservation | evenements | Toucy, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | Noël 2026 au château de Goulaine: dates, billets et conseils en famille | evenements | Haute-Goulaine, Loire-Atlantique, Pays de la Loire
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | Noël des Siècles 2026 à Champs-sur-Marne: billets, budget et horaires en famille | evenements | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/ | Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates | vie-pratique | Toulouse, Haute-Garonne, Occitanie
- /articles/bons-plans/cantine-au-college-dans-l-herault-jusqu-a-3-60-d-aide-par-repas/ | Cantine au collège dans l'Hérault: jusqu'à 3,60 € d'aide par repas | bons-plans | Montpellier, Hérault, Occitanie
- /articles/maison/moustique-tigre-en-haute-garonne-proteger-la-maison-et-le-jardin/ | Moustique tigre en Haute-Garonne: protéger la maison et le jardin | maison | Toulouse, Haute-Garonne, Occitanie
- /articles/vie-pratique/cantine-au-college-en-deux-sevres-comment-s-inscrire-en-ligne-pour-2026-2027/ | Cantine au collège en Deux-Sèvres: comment s'inscrire en ligne pour 2026-2027 | vie-pratique | Niort, Deux-Sèvres, Nouvelle-Aquitaine
- /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | Salon du Cheval de Paris 2026 en famille: ateliers, jumping et Nuit du Cheval | evenements | Paris, Paris, Île-de-France
- /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | Créations & savoir-faire 2026 à Paris en famille: billets, ateliers et dates | evenements | Paris, Paris, Île-de-France
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/sorties/le-sourou-a-roura-en-famille-une-journee-entre-pirogue-kayak-et-foret/ | Le Sourou à Roura en famille: une journée entre pirogue, kayak et forêt | sorties | Roura, Guyane, Guyane
- /articles/evenements/sculptures-sur-glace-et-neige-a-valloire-en-janvier-2027/ | Sculptures sur glace et neige à Valloire en janvier 2027 | evenements | Valloire, Savoie, Auvergne-Rhône-Alpes
- /articles/voyages/cherrueix-en-famille-decouvrir-le-char-a-voile-dans-la-baie-du-mont-saint-michel/ | Cherrueix en famille: découvrir le char à voile dans la baie du Mont-Saint-Michel | voyages | Cherrueix, Ille-et-Vilaine, Bretagne
- /articles/evenements/seraphine-louis-a-metz-decouvrir-l-exposition-avec-les-enfants/ | Séraphine Louis à Metz: découvrir l’exposition avec les enfants | evenements | Metz, Moselle, Grand Est
- /articles/voyages/cassis-en-famille-hors-saison-calanques-en-bateau-et-balades/ | Cassis en famille hors saison: calanques en bateau et balades | voyages | Cassis, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/cuisine/fougasse-d-aigues-mortes-recette-moelleuse-a-faire-en-famille/ | Fougasse d’Aigues-Mortes: recette moelleuse à faire en famille | cuisine | Aigues-Mortes, Gard, Occitanie
- /articles/parentalite/parents-et-jeunes-enfants-a-bergerac-trois-lieux-pour-jouer-et-echanger/ | Parents et jeunes enfants à Bergerac: trois lieux pour jouer et échanger | parentalite | Bergerac, Dordogne, Nouvelle-Aquitaine
- /articles/activites/musee-de-l-illusion-a-lyon-en-famille-que-voir-et-combien-coute-la-visite/ | Musée de l'Illusion à Lyon en famille: que voir et combien coûte la visite ? | activites | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/voyages/pres-de-saint-florent-decouvrir-la-corse-en-ulm-avec-un-ado/ | Près de Saint-Florent, découvrir la Corse en ULM avec un ado | voyages | Haute-Corse, Corse
- /articles/cuisine/ficelle-picarde-la-recette-familiale-des-crepes-gratinees-d-amiens/ | Ficelle picarde: la recette familiale des crêpes gratinées d'Amiens | cuisine | Amiens, Somme, Hauts-de-France
- /articles/sorties/forteresse-royale-de-chinon-en-famille-tours-histoire-et-jeux/ | Forteresse royale de Chinon en famille: tours, histoire et jeux | sorties | Chinon, Indre-et-Loire, Centre-Val de Loire
- /articles/vie-pratique/ludotheques-du-val-de-marne-ou-jouer-en-famille-et-emprunter-des-jeux/ | Ludothèques du Val-de-Marne: où jouer en famille et emprunter des jeux ? | vie-pratique | Val-de-Marne, Île-de-France
- /articles/parentalite/lieux-d-accueil-enfants-parents-en-vendee-ou-aller-avec-un-tout-petit/ | Lieux d'accueil enfants-parents en Vendée: où aller avec un tout-petit ? | parentalite | Vendée, Pays de la Loire
- /articles/cuisine/kig-ha-farz-en-famille-recette-et-organisation-d-un-repas-breton/ | Kig ha farz en famille: recette et organisation d'un repas breton | cuisine | Finistère, Bretagne
- /articles/bons-plans/bretagne-en-ter-avec-des-enfants-quels-billets-choisir-pour-payer-moins/ | Bretagne en TER avec des enfants: quels billets choisir pour payer moins? | bons-plans | Bretagne
- /articles/voyages/week-end-a-saint-antonin-noble-val-en-famille-village-gorges-et-canoe/ | Week-end à Saint-Antonin-Noble-Val en famille: village, gorges et canoë | voyages | Saint-Antonin-Noble-Val, Tarn-et-Garonne, Occitanie
- /articles/vie-pratique/aides-caf-en-charente-maritime-financer-meubles-electromenager-et-ordinateur/ | Aides Caf en Charente-Maritime: financer meubles, électroménager et ordinateur | vie-pratique | Charente-Maritime, Nouvelle-Aquitaine
- /articles/parentalite/parents-d-ados-dans-l-yonne-contacter-la-maison-des-adolescents/ | Parents d’ados dans l’Yonne: contacter la Maison des adolescents | parentalite | Yonne, Bourgogne-Franche-Comté
- /articles/cuisine/ravioles-du-dauphine-trois-repas-simples-en-famille/ | Ravioles du Dauphiné: trois repas simples en famille | cuisine | Auvergne-Rhône-Alpes
- /articles/cuisine/cuisiner-local-en-meurthe-et-moselle-producteurs-paniers-et-idees-de-repas/ | Cuisiner local en Meurthe-et-Moselle: producteurs, paniers et idées de repas | cuisine | Meurthe-et-Moselle, Grand Est
- /articles/maison/composteur-gratuit-a-laval-agglomeration-quelle-solution-pour-votre-logement/ | Composteur gratuit à Laval Agglomération: quelle solution pour votre logement ? | maison | Laval, Mayenne, Pays de la Loire
- /articles/vie-pratique/littoral-des-alpes-maritimes-en-famille-se-deplacer-sans-voiture/ | Littoral des Alpes-Maritimes en famille: se déplacer sans voiture | vie-pratique | Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/activites/ferme-des-chanteraines-en-famille-animaux-ateliers-et-balade-gratuite/ | Ferme des Chanteraines en famille: animaux, ateliers et balade gratuite | activites | Villeneuve-la-Garenne, Hauts-de-Seine, Île-de-France
- /articles/evenements/festival-contes-et-rencontres-2027-en-lozere-quels-spectacles-voir-en-famille/ | Festival Contes et Rencontres 2027 en Lozère: quels spectacles voir en famille ? | evenements | Lozère, Occitanie
- /articles/activites/musee-dobree-en-famille-a-nantes-jeux-et-parcours-selon-l-age/ | Musée Dobrée en famille à Nantes: jeux et parcours selon l’âge | activites | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/voyages/crozant-en-famille-un-week-end-dans-la-vallee-des-peintres/ | Crozant en famille: un week-end dans la Vallée des Peintres | voyages | Crozant, Creuse, Nouvelle-Aquitaine

### Historique Radar lié

- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- refresh | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-11-07T00:30:17.397Z
- opportunity | /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | 2026-10-29T14:26:32.277Z
- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- refresh | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-11-17T22:37:09.520Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- refresh | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-11-17T19:34:24.194Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- refresh | /articles/maison/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/ | 2026-11-12T01:28:37.978Z
- opportunity | /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | 2026-10-06T19:20:39.093Z
- opportunity | /articles/evenements/noel-2026-a-besancon-en-famille-contes-gratuits-marche-solidaire-ou-artisans/ | 2026-11-01T06:27:50.817Z
- opportunity | /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | 2026-10-30T06:28:26.726Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | 2026-11-03T15:36:10.146Z
- refresh | /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | 2026-11-13T13:31:11.034Z
- opportunity | /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | 2026-10-02T21:22:46.733Z
- opportunity | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-10-30T18:26:56.039Z
- refresh | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-11-17T09:28:43.094Z
- opportunity | /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | 2026-10-26T18:32:56.730Z
- opportunity | /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | 2026-10-09T14:37:47.734Z
- refresh | /articles/activites/palais-ideal-du-facteur-cheval-en-famille-visite-et-conseils-a-hauterives/ | 2026-11-10T15:36:17.613Z
- refresh | /articles/bons-plans/parc-floral-d-orleans-gratuit-en-hiver-horaires-et-sortie-avec-les-enfants/ | 2026-11-08T07:28:43.032Z
- opportunity | /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/ | 2026-10-28T12:27:07.569Z
- refresh | /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/ | 2026-11-10T21:35:54.089Z
- refresh | /articles/sorties/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/ | 2026-10-22T18:35:19.372Z
- opportunity | /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | 2026-11-05T10:32:54.471Z
- opportunity | /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | 2026-10-22T04:59:04.773Z
- refresh | /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | 2026-11-19T03:32:19.795Z
- opportunity | /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | 2026-10-24T19:30:32.700Z
- refresh | /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | 2026-11-13T16:33:40.259Z
- refresh | /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/ | 2026-11-06T21:35:30.246Z

## Travaux éditoriaux en cours

### Publication en cours

- Branche: automation/publication-20261125-1157-se-deplacer-en-famille-en-haute-saone-cars-mobigo-bus-de-vesoul-et-voi
- HEAD: publication: phase 3 20261125-1157-se-deplacer-en-famille-en-haute-saone-cars-mobigo-bus-de-vesoul-et-voi

---
category: "vie-pratique"
title: "Se déplacer en famille en Haute-Saône sans voiture au quotidien"
subtitle: "Bus Moova, cars Mobigo et location ponctuelle pour les trajets difficiles"
summary: "Bus de Vesoul, cars régionaux, transport sur réservation et location ponctuelle: choisissez la solution adaptée à vos déplacements en Haute-Saône."
keywords:
  - "transport famille Haute-Saône"
  - "cars Mobigo Haute-Saône"
  - "bus Moova Vesoul"
  - "transport à la demande Haute-Saône"
location:
  department: "Haute-Saône"
  region: "Bourgogne-Franche-Comté"
sources:
  - title: "Ville de Vesoul: réseau Moova"
    url: "https://www.vesoul.fr/au-quotidien/vbus-transports-en-commun.html"
  - title: "Moova Mobilités"
    url: "https://www.moova-mobilites.fr/"
  - title: "Mobigo: horaires des cars de Haute-Saône"
    url: "https://www.viamobigo.fr/fr/car-mobigo/71/haute-saone-fiche-horaires/284"
  - title: "Mobigo: réseau régional et tarifs routiers"
    url: "https://www.viamobigo.fr/fr/reseau-regional-mobigo/71/"
  - title: "Mobigo: conditions du transport à la demande"
    url: "https://tad.viamobigo.fr/MOBIGO/fr-fr/Account/CGU"
  - title: "Région: transports scolaires de Haute-Saône"
    url: "https://www.bourgognefranchecomte.fr/transports-scolaires-de-la-haute-saone"
  - title: "Mobigo: tarif enfant en train"
    url: "https://www.viamobigo.fr/fr/titres-et-tarifs/7/Fare/tarif-train-mobigo-enfant/297"
  - title: "SNCF: gare de Vesoul"
    url: "https://www.ter.sncf.com/grand-est/se-deplacer/gares/Vesoul-87185009"
  - title: "Europcar: conditions de location à Vesoul"
    url: "https://www.europcar.fr/fr-fr/places/location-voiture-france/vesoul/vesoul-gare-meet-and-greet"
---

En Haute-Saône, rejoindre un rendez-vous à Vesoul, rendre visite à des proches à Gray ou passer une journée dans un village ne demande pas toujours de posséder une voiture. Le département dispose de cars régionaux, de liaisons ferroviaires et de services sur réservation. Le bon choix dépend surtout du point de départ, de l'heure du retour et du nombre d'enfants qui voyagent.

## Dans l'agglomération de Vesoul: prendre Moova

Le réseau urbain de Vesoul porte désormais le nom de **Moova**, et non plus Vbus. Pour un trajet vers le centre-ville ou une commune de l'agglomération, commencez par consulter les horaires et les tarifs sur le [site Moova Mobilités](https://www.moova-mobilites.fr/). Les titres urbains ne doivent pas être confondus avec ceux des cars régionaux. Vérifiez notamment les conditions de gratuité ou de réduction selon l'âge de vos enfants avant d'acheter les billets.

Si votre commune ou votre quartier est mal desservi par les lignes régulières, le transport à la demande de Moova peut vous rapprocher du centre. Il relie des arrêts désignés au pôle multimodal ou à République, où vous pouvez poursuivre en bus.

La [Ville de Vesoul](https://www.vesoul.fr/au-quotidien/vbus-transports-en-commun.html) indique que la réservation est possible jusqu'à 30 jours à l'avance, et jusqu'à deux heures avant le départ par téléphone au **0 800 09 99 39**. Le site et l'application permettent également de réserver. Indiquez le nombre de voyageurs et vérifiez les conditions de transport de la poussette si vous en avez une.

## Entre communes: les cars régionaux Mobigo

Les cars Mobigo desservent notamment les axes Gy-Vesoul (601), Gray-Combeaufontaine-Vesoul (602) et Saint-Loup-Luxeuil-Vesoul-Besançon (605). Les [fiches horaires de Haute-Saône](https://www.viamobigo.fr/fr/car-mobigo/71/haute-saone-fiche-horaires/284) présentent les services réguliers applicables depuis le 2 novembre 2026, ainsi que les lignes nécessitant une réservation.

Pour un déplacement familial, repérez d'abord le dernier départ permettant de rentrer. Un car qui convient à l'aller ne garantit pas une correspondance au retour. Lisez les renvois des fiches horaires: certaines courses ne circulent qu'en période scolaire ou certains jours de la semaine.

La [brochure tarifaire des cars Mobigo](https://www.viamobigo.fr/fr/reseau-regional-mobigo/71/) permet de comparer les billets occasionnels et les formules pour les déplacements fréquents. Les tarifs ferroviaires sont différents: par exemple, le [tarif enfant TRAIN Mobigo](https://www.viamobigo.fr/fr/titres-et-tarifs/7/Fare/tarif-train-mobigo-enfant/297) est affiché à 2 € pour les enfants de 4 à moins de 12 ans, sur les trajets éligibles. Ne transposez pas automatiquement ce prix aux cars.

Pour les trajets domicile-école, consultez plutôt le [service régional des transports scolaires](https://www.bourgognefranchecomte.fr/transports-scolaires-de-la-haute-saone). La gratuité dépend de l'éligibilité de l'élève et nécessite une inscription.

## Un village peu desservi: réserver le transport à la demande

Les services régionaux sur réservation complètent les lignes régulières. Depuis le 2 novembre 2026, par exemple, les arrêts d'Amoncourt et de Chaux-lès-Port auparavant desservis par la ligne 606 sont reportés sur le transport à la demande 661 pour les voyageurs ordinaires.

Contrairement à un taxi, ce service collectif suit des conditions de desserte et des horaires définis. Consultez la fiche de la ligne concernée, puis réservez l'aller et le retour. La centrale Mobigo est joignable au **03 80 11 29 29**, du lundi au samedi de 7 h à 20 h, hors jours fériés. La réservation en ligne est également possible selon les [conditions du service régional](https://tad.viamobigo.fr/MOBIGO/fr-fr/Account/CGU). Respectez le délai propre à votre ligne.

Si aucun arrêt ne correspond à votre destination, envisagez une combinaison avec un proche qui peut vous récupérer à l'arrêt ou à la gare. Cela peut éviter de louer un véhicule pour toute la journée. Si votre déplacement est une sortie de loisirs, notre guide des [quatre jeux de piste gratuits en Haute-Saône](/articles/activites/quatre-jeux-de-piste-gratuits-en-haute-saone-lequel-choisir-en-famille/) précise les communes et les points de départ à rejoindre.

## Arriver en train à Vesoul

La gare se trouve place de la Gare. Elle permet de rejoindre les bus urbains et de poursuivre vers d'autres communes. La [fiche SNCF de Vesoul](https://www.ter.sncf.com/grand-est/se-deplacer/gares/Vesoul-87185009) signale encore un accueil provisoire à la suite de l'incendie du 14 septembre 2024: la vente des billets et l'accueil sont organisés dans un bungalow près de l'abri vélo. Vérifiez les conditions d'accès avant votre départ, notamment si vous avez besoin d'une assistance.

## Quand louer une voiture pour une journée ?

Une location ponctuelle devient intéressante lorsque plusieurs déplacements vers des villages doivent être enchaînés, ou lorsque les horaires de retour des transports publics ne conviennent pas. Pour ce besoin ponctuel, vous pouvez [comparer les voitures de location à Vesoul sur KAYAK](https://www.kayak.fr/location-voiture-Vesoul.49864.cars.ksp), en sélectionnant vos dates et le lieu de retrait. Les prix et les véhicules disponibles varient selon la période.

Pour quatre personnes avec des bagages, regardez les catégories compactes ou familiales en vérifiant la capacité réelle du coffre. Réservez les sièges enfants adaptés si vous ne transportez pas les vôtres et demandez confirmation de leur disponibilité.

Avant de payer, comparez le coût complet: location, kilomètres inclus, carburant, sièges, assurance et éventuels frais de restitution hors horaires. Vérifiez aussi le montant de la caution et les cartes bancaires acceptées. Le conducteur devra disposer des documents et du moyen de paiement exigés par le loueur.

Si vous arrivez en train, confirmez le lieu et l'heure de remise des clés: une agence référencée à la gare ne signifie pas nécessairement qu'un comptoir y est ouvert en permanence. Prévoyez une marge suffisante pour restituer le véhicule avant votre train de retour.


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
