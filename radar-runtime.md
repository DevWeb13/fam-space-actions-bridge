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
  "generatedAt": "2026-11-22T01:30:56+01:00",
  "dataThrough": "2026-11-19",
  "from": "2026-10-23",
  "refresh": [
    {
      "url": "/articles/bons-plans/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/",
      "title": "Navigo Liberté+ en famille: tarifs enfants et choix du passe en 2026",
      "category": "bons-plans",
      "publishedAt": "2026-10-25T10:33:29.977Z",
      "location": {
        "city": "Paris",
        "department": "Paris",
        "region": "Île-de-France"
      },
      "ageDays": 28,
      "rapidDrop": true,
      "peakStart": "2026-10-27",
      "peakEnd": "2026-10-29",
      "recentStart": "2026-11-17",
      "recentEnd": "2026-11-19",
      "peakImpressions": 173,
      "recentImpressions": 44,
      "score": 387,
      "signal": "uncertain",
      "basis": "Visibilité récente : 173 impressions sur trois jours, puis 44 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "passe navigo enfant 6 ans",
        "navigo liberté + famille nombreuse",
        "tarif liberté plus 2026",
        "12 ans",
        "liberté + enfant"
      ]
    },
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
      "ageDays": 29,
      "rapidDrop": true,
      "peakStart": "2026-10-25",
      "peakEnd": "2026-10-27",
      "recentStart": "2026-11-17",
      "recentEnd": "2026-11-19",
      "peakImpressions": 76,
      "recentImpressions": 15,
      "score": 183,
      "signal": "uncertain",
      "basis": "Visibilité récente : 76 impressions sur trois jours, puis 15 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
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
      "url": "/articles/bons-plans/arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir/",
      "title": "Arles en famille à petit budget: quelles visites et quel pass choisir?",
      "category": "bons-plans",
      "publishedAt": "2026-10-25T09:51:23+01:00",
      "location": {
        "city": "Arles",
        "department": "Bouches-du-Rhône",
        "region": "Provence-Alpes-Côte d’Azur"
      },
      "ageDays": 28,
      "rapidDrop": true,
      "peakStart": "2026-10-27",
      "peakEnd": "2026-10-29",
      "recentStart": "2026-11-17",
      "recentEnd": "2026-11-19",
      "peakImpressions": 55,
      "recentImpressions": 0,
      "score": 165,
      "signal": "uncertain",
      "basis": "Visibilité récente : 55 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "pass visite arles",
        "pass liberté arles",
        "1",
        "arles pass avantage",
        "sortie en famille"
      ]
    },
    {
      "url": "/articles/maison/electromenager-en-panne-a-dijon-reparer-ou-acheter-reconditionne/",
      "title": "Électroménager en panne à Dijon: réparer ou acheter reconditionné",
      "category": "maison",
      "publishedAt": "2026-11-09T13:09:07+01:00",
      "location": {
        "city": "Dijon",
        "department": "Côte-d'Or",
        "region": "Bourgogne-Franche-Comté"
      },
      "ageDays": 13,
      "rapidDrop": true,
      "peakStart": "2026-11-11",
      "peakEnd": "2026-11-13",
      "recentStart": "2026-11-17",
      "recentEnd": "2026-11-19",
      "peakImpressions": 20,
      "recentImpressions": 1,
      "score": 57,
      "signal": "uncertain",
      "basis": "Visibilité récente : 20 impressions sur trois jours, puis 1 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "reparation four",
        "réparation d'équipements électriques bourgogne-franche-comté",
        "électroménager dijon"
      ]
    },
    {
      "url": "/articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/",
      "title": "Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël",
      "category": "evenements",
      "publishedAt": "2026-10-30T12:36:12.248Z",
      "location": {
        "city": "Angers",
        "department": "Maine-et-Loire",
        "region": "Pays de la Loire"
      },
      "ageDays": 23,
      "rapidDrop": true,
      "peakStart": "2026-11-01",
      "peakEnd": "2026-11-03",
      "recentStart": "2026-11-17",
      "recentEnd": "2026-11-19",
      "peakImpressions": 99,
      "recentImpressions": 21,
      "score": 269,
      "signal": "uncertain",
      "basis": "Visibilité récente : 99 impressions sur trois jours, puis 21 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0.122,
      "focusQueries": [
        "soleil d'hiver angers 2026",
        "soleil d hiver angers 2026",
        "soleil d'hiver angers",
        "soleils d'hiver angers",
        "angers soleil d'hiver"
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
      "ageDays": 27,
      "rapidDrop": true,
      "peakStart": "2026-10-26",
      "peakEnd": "2026-10-28",
      "recentStart": "2026-11-17",
      "recentEnd": "2026-11-19",
      "peakImpressions": 40,
      "recentImpressions": 3,
      "score": 146,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 40 impressions sur trois jours, puis 3 sur les trois derniers jours consolidés; cause non établie.",
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
      "url": "/articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/",
      "title": "Marchés de Noël de Tours 2026 en famille: lieux, dates et budget",
      "category": "evenements",
      "publishedAt": "2026-10-28T21:29:25.946Z",
      "location": {
        "city": "Tours",
        "department": "Indre-et-Loire",
        "region": "Centre-Val de Loire"
      },
      "ageDays": 25,
      "rapidDrop": true,
      "peakStart": "2026-11-09",
      "peakEnd": "2026-11-11",
      "recentStart": "2026-11-17",
      "recentEnd": "2026-11-19",
      "peakImpressions": 25,
      "recentImpressions": 7,
      "score": 89,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 25 impressions sur trois jours, puis 7 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "marché de Noël Tours 2026",
        "Village Gourmand Tours 2026",
        "grande roue Tours Noël 2026",
        "patinoire roller Tours",
        "Noël Tours en famille"
      ]
    },
    {
      "url": "/articles/evenements/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/",
      "title": "Saint-Nicolas-de-Port 2026 en famille: village, défilé et procession",
      "category": "evenements",
      "publishedAt": "2026-11-02T23:31:49.325Z",
      "location": {
        "city": "Saint-Nicolas-de-Port",
        "department": "Meurthe-et-Moselle",
        "region": "Grand Est"
      },
      "ageDays": 20,
      "rapidDrop": true,
      "peakStart": "2026-11-10",
      "peakEnd": "2026-11-12",
      "recentStart": "2026-11-17",
      "recentEnd": "2026-11-19",
      "peakImpressions": 31,
      "recentImpressions": 9,
      "score": 66,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 31 impressions sur trois jours, puis 9 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Saint-Nicolas-de-Port 5 décembre 2026 en famille",
        "festivités Saint Nicolas de Port défilé 2026",
        "village Saint Nicolas de Port procession aux flambeaux"
      ]
    },
    {
      "url": "/articles/evenements/semaine-du-golfe-2027-en-famille-ou-voir-les-bateaux/",
      "title": "Semaine du Golfe 2027 en famille: où voir les bateaux ?",
      "category": "evenements",
      "publishedAt": "2026-11-05T09:02:11+01:00",
      "location": {
        "city": "",
        "department": "Morbihan",
        "region": "Bretagne"
      },
      "ageDays": 17,
      "rapidDrop": true,
      "peakStart": "2026-11-07",
      "peakEnd": "2026-11-09",
      "recentStart": "2026-11-17",
      "recentEnd": "2026-11-19",
      "peakImpressions": 29,
      "recentImpressions": 7,
      "score": 66,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 29 impressions sur trois jours, puis 7 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Semaine du Golfe 2027 en famille",
        "où voir les bateaux Semaine du Golfe",
        "Semaine du Golfe Morbihan enfants"
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
      "ageDays": 24,
      "rapidDrop": true,
      "peakStart": "2026-11-01",
      "peakEnd": "2026-11-03",
      "recentStart": "2026-11-17",
      "recentEnd": "2026-11-19",
      "peakImpressions": 22,
      "recentImpressions": 1,
      "score": 63,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 22 impressions sur trois jours, puis 1 sur les trois derniers jours consolidés; cause non établie.",
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
      "ageDays": 18,
      "rapidDrop": true,
      "peakStart": "2026-11-09",
      "peakEnd": "2026-11-11",
      "recentStart": "2026-11-17",
      "recentEnd": "2026-11-19",
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
      "url": "/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/",
      "title": "Transports à Paris avec des enfants: quel titre choisir pour payer juste?",
      "category": "voyages",
      "publishedAt": "2026-08-29T00:00:45+02:00",
      "location": {
        "city": "Paris",
        "department": "Paris",
        "region": "Île-de-France"
      },
      "ageDays": 85,
      "rapidDrop": false,
      "peakStart": "2026-10-24",
      "peakEnd": "2026-10-30",
      "recentStart": "2026-11-13",
      "recentEnd": "2026-11-19",
      "peakImpressions": 3295,
      "recentImpressions": 1592,
      "score": 1703,
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
      "ageDays": 37,
      "rapidDrop": false,
      "peakStart": "2026-10-25",
      "peakEnd": "2026-10-31",
      "recentStart": "2026-11-13",
      "recentEnd": "2026-11-19",
      "peakImpressions": 833,
      "recentImpressions": 512,
      "score": 321,
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
      "url": "/articles/sorties/parc-bagatelle-en-famille-quelles-attractions-selon-la-taille-des-enfants/",
      "title": "Parc Bagatelle en famille: quelles attractions selon la taille des enfants?",
      "category": "sorties",
      "publishedAt": "2026-10-02T19:08:32+02:00",
      "location": {
        "city": "Merlimont",
        "department": "Pas-de-Calais",
        "region": "Hauts-de-France"
      },
      "ageDays": 51,
      "rapidDrop": false,
      "peakStart": "2026-10-25",
      "peakEnd": "2026-10-31",
      "recentStart": "2026-11-13",
      "recentEnd": "2026-11-19",
      "peakImpressions": 80,
      "recentImpressions": 5,
      "score": 75,
      "signal": "needs_query_check",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Parc Bagatelle en famille",
        "attractions Bagatelle taille enfant"
      ]
    },
    {
      "url": "/articles/activites/zoo-de-martinique-en-famille-tarifs-poussette-et-visite-de-l-habitation-latouche/",
      "title": "Zoo de Martinique en famille: tarifs, poussette et visite de l'Habitation Latouche",
      "category": "activites",
      "publishedAt": "2026-10-10T15:00:10+02:00",
      "location": {
        "city": "Le Carbet",
        "department": "Martinique",
        "region": "Martinique"
      },
      "ageDays": 43,
      "rapidDrop": false,
      "peakStart": "2026-10-24",
      "peakEnd": "2026-10-30",
      "recentStart": "2026-11-13",
      "recentEnd": "2026-11-19",
      "peakImpressions": 177,
      "recentImpressions": 111,
      "score": 66,
      "signal": "needs_query_check",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Zoo de Martinique en famille",
        "Zoo du Carbet avec enfants",
        "Habitation Latouche"
      ]
    }
  ],
  "strongPages": [
    {
      "url": "/articles/evenements/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales/",
      "title": "Fêtes de l’Ours 2027: quelle fête choisir en famille dans les Pyrénées-Orientales ?",
      "category": "evenements",
      "recentImpressions": 340,
      "recentClicks": 18,
      "recentPosition": 4.929,
      "retention": 1.018
    },
    {
      "url": "/articles/evenements/cirque-de-noel-2026-au-mans-horaires-tarifs-et-seance-a-choisir-avec-des-enfants/",
      "title": "Cirque de Noël 2026 au Mans: horaires, tarifs et séance à choisir avec des enfants",
      "category": "evenements",
      "recentImpressions": 303,
      "recentClicks": 17,
      "recentPosition": 7.234,
      "retention": 1.306
    },
    {
      "url": "/articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/",
      "title": "Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille",
      "category": "evenements",
      "recentImpressions": 443,
      "recentClicks": 10,
      "recentPosition": 7.925,
      "retention": 2.475
    },
    {
      "url": "/articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/",
      "title": "Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille",
      "category": "evenements",
      "recentImpressions": 512,
      "recentClicks": 9,
      "recentPosition": 7.787,
      "retention": 0.615
    },
    {
      "url": "/articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/",
      "title": "Festival BD Colomiers 2026 en famille: programme, tarifs et accès",
      "category": "evenements",
      "recentImpressions": 143,
      "recentClicks": 6,
      "recentPosition": 7.699,
      "retention": 2.75
    },
    {
      "url": "/articles/evenements/noel-2026-a-quimper-en-famille-village-concert-ou-ateliers-gratuits/",
      "title": "Noël 2026 à Quimper en famille: village, concert et animations gratuites",
      "category": "evenements",
      "recentImpressions": 89,
      "recentClicks": 6,
      "recentPosition": 6.27,
      "retention": 1.413
    },
    {
      "url": "/articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/",
      "title": "Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates",
      "category": "vie-pratique",
      "recentImpressions": 182,
      "recentClicks": 5,
      "recentPosition": 6.374,
      "retention": 0.813
    },
    {
      "url": "/articles/maison/recycleries-autour-de-chartres-ou-donner-et-acheter-d-occasion/",
      "title": "Recycleries autour de Chartres: où donner et acheter d'occasion ?",
      "category": "maison",
      "recentImpressions": 98,
      "recentClicks": 5,
      "recentPosition": 10.092,
      "retention": 0.76
    },
    {
      "url": "/articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/",
      "title": "Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite",
      "category": "sorties",
      "recentImpressions": 468,
      "recentClicks": 4,
      "recentPosition": 12.353,
      "retention": 1.185
    },
    {
      "url": "/articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/",
      "title": "Noël des Siècles 2026 à Champs-sur-Marne: billets, budget et horaires en famille",
      "category": "evenements",
      "recentImpressions": 63,
      "recentClicks": 4,
      "recentPosition": 5.54,
      "retention": 1.8
    }
  ],
  "excluded": {
    "expired": 193,
    "cooling": 83
  },
  "warnings": [
    "Diagnostics par requêtes : 5/5.",
    "Les baisses d'impressions ne prouvent ni désindexation ni perte de classement."
  ]
}

## Catalogue ciblé (doublons et publications récentes)

### Articles comparables et publications récentes

- /articles/bons-plans/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/ | Navigo Liberté+ en famille: tarifs enfants et choix du passe en 2026 | bons-plans | Paris, Paris, Île-de-France
- /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/ | Transports à Paris avec des enfants: quel titre choisir pour payer juste? | voyages | Paris, Paris, Île-de-France
- /articles/bons-plans/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/ | Château de Champs-sur-Marne en famille: gratuités, tarifs et dates à éviter | bons-plans | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | Noël Gaulois 2026 au Parc Astérix: billets, spectacles et extras en famille | evenements | Plailly, Oise, Hauts-de-France
- /articles/vie-pratique/ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee/ | Ferry Ouistreham-Portsmouth en famille: préparer le départ et la traversée | vie-pratique | Ouistreham, Calvados, Normandie
- /articles/vie-pratique/aeroport-de-lille-avec-des-enfants-preparer-le-depart-jusqu-a-l-embarquement/ | Aéroport de Lille avec des enfants: préparer le départ jusqu’à l’embarquement | vie-pratique | Lesquin, Nord, Hauts-de-France
- /articles/vie-pratique/lyon-saint-exupery-avec-des-enfants-preparer-le-trajet-les-controles-et-l-attente/ | Lyon-Saint-Exupéry avec des enfants: préparer le trajet, les contrôles et l’attente | vie-pratique | Colombier-Saugnieu, Rhône, Auvergne-Rhône-Alpes
- /articles/voyages/visiter-guedelon-avec-des-enfants-preparer-la-journee-en-2026/ | Visiter Guédelon avec des enfants: préparer la journée en 2026 | voyages | Treigny-Perreuse-Sainte-Colombe, Yonne, Bourgogne-Franche-Comté
- /articles/bons-plans/arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir/ | Arles en famille à petit budget: quelles visites et quel pass choisir? | bons-plans | Arles, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/saint-remy-de-provence-en-famille-glanum-musees-et-entrees-gratuites/ | Saint-Rémy-de-Provence en famille: Glanum, musées et entrées gratuites | bons-plans | Saint-Rémy-de-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/albi-en-famille-a-petit-budget-deux-programmes-entre-patrimoine-et-musee/ | Albi en famille à petit budget: deux programmes entre patrimoine et musée | bons-plans | Albi, Tarn, Occitanie
- /articles/bons-plans/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites/ | Pass Nantes en famille en 2026: tarifs, visites incluses et alternatives gratuites | bons-plans | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/maison/electromenager-en-panne-a-dijon-reparer-ou-acheter-reconditionne/ | Électroménager en panne à Dijon: réparer ou acheter reconditionné | maison | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/maison/canape-matelas-ou-electromenager-a-dijon-donner-faire-enlever-ou-aller-en-dechetterie/ | Canapé, matelas ou électroménager à Dijon: donner, faire enlever ou aller en déchetterie ? | maison | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/maison/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/ | Meubles d'occasion en Meurthe-et-Moselle: où acheter, donner et réparer ? | maison | Meurthe-et-Moselle, Grand Est
- /articles/maison/reparer-ses-objets-dans-l-herault-repair-cafes-et-bonus-reparation/ | Réparer ses objets dans l’Hérault: Repair Cafés et bonus réparation | maison | Hérault, Occitanie
- /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | Soleils d'hiver 2026 à Angers en famille: horaires, manèges et Père Noël | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/vie-pratique/garde-d-enfants-sur-horaires-atypiques-a-angers-qui-peut-demander-l-aide-du-ccas/ | Garde d'enfants sur horaires atypiques à Angers: qui peut demander l'aide du CCAS? | vie-pratique | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires, Père Noël et animations | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | Festival Enfantillages 2026 à Valbonne: spectacles gratuits et cinéma en famille | evenements | Valbonne, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/festival-au-bonheur-des-momes-2026-en-famille/ | Au Bonheur des Mômes 2026: pass, spectacles et journée au Grand-Bornand | evenements | Le Grand-Bornand, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | Festival MARMOE 2026 à Montreuil: spectacles, ateliers et sorties jusqu'au 29 novembre | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/rue-enfants-montcuq-2026-famille/ | La Rue des Enfants 2026 à Montcuq: deux jours d’arts de rue en famille | evenements | Montcuq-en-Quercy-Blanc, Lot, Occitanie
- /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | Marchés de Noël de Tours 2026 en famille: horaires, animations et budget | evenements | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | Ville de Noël d’Arras 2026 en famille: horaires, attractions et budget | evenements | Arras, Pas-de-Calais, Hauts-de-France
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/ | Saint-Nicolas-de-Port 2026 en famille: horaires du défilé et de la procession | evenements | Saint-Nicolas-de-Port, Meurthe-et-Moselle, Grand Est
- /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | Fêtes de Saint-Nicolas 2026 à Nancy en famille: défilé, villages et animations | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | Saint-Nicolas 2026 à Carcassonne: campements médiévaux et marche aux flambeaux en famille | evenements | Carcassonne, Aude, Occitanie
- /articles/evenements/saint-nicolas-2026-a-epinal-en-famille-defile-du-5-decembre-ou-marche-de-noel/ | Saint-Nicolas 2026 à Épinal: cortège du 5 décembre et marché de Noël en famille | evenements | Épinal, Vosges, Grand Est
- /articles/evenements/semaine-du-golfe-2027-en-famille-ou-voir-les-bateaux/ | Semaine du Golfe 2027 en famille: où voir les bateaux ? | evenements | Morbihan, Bretagne
- /articles/sorties/festival-photo-la-gacilly-2026-en-famille/ | Festival Photo La Gacilly 2026: un parcours gratuit à hauteur d’enfant | sorties | La Gacilly, Morbihan, Bretagne
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/activites/nuits-de-branfere-2026-preparer-une-sortie-en-famille-dans-le-morbihan/ | Nuits de Branféré 2026: préparer une sortie en famille dans le Morbihan | activites | Le Guerno, Morbihan, Bretagne
- /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | Marché de Noël 100 % Côte-d’Or à Dijon 2026: horaires, spectacles et Père Noël | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | Festival des Petits Explorateurs 2026 à Dijon: ateliers, horaires et tarifs | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | Foire de Dijon 2026 avec les enfants: gratuités, ateliers et Ferme Côte-d'Or | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/vie-pratique/frais-scolaires-en-cote-d-or-quelles-aides-demander-au-departement/ | Frais scolaires en Côte-d'Or: quelles aides demander au Département? | vie-pratique | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans/ | Écoute, je danse ! à Paris le 5 décembre 2026: spectacle gratuit dès 6 mois | evenements | Paris, Paris, Île-de-France
- /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | Atelier couture gratuit à Paris le 28 novembre 2026: dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-laine-cardee-de-noel-a-paris-le-2-decembre-2026-creer-ses-decorations-des-7-ans/ | Atelier laine cardée de Noël à Paris le 2 décembre 2026: décorations dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | Atelier Pokémon et biodiversité à Paris le 28 novembre 2026: dessin dès 10 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/salon-du-chocolat-paris-2026-avec-des-enfants-quel-billet-choisir-et-quels-ateliers-reserver/ | Salon du Chocolat Paris 2026 avec des enfants: quel billet choisir et quels ateliers réserver | evenements | Paris, Paris, Île-de-France
- /articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/ | Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite | sorties | Paris, Paris, Île-de-France
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | Thoiry Lumières Sauvages 2026-2027: dates, billets et visite en famille | evenements | Thoiry, Yvelines, Île-de-France
- /articles/sorties/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/ | Planète Préhistorique à Bordeaux: dates, durée et tarifs en famille | sorties | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/sorties/parc-bagatelle-en-famille-quelles-attractions-selon-la-taille-des-enfants/ | Parc Bagatelle en famille: quelles attractions selon la taille des enfants? | sorties | Merlimont, Pas-de-Calais, Hauts-de-France
- /articles/sorties/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets/ | Parc Spirou en famille: attractions selon la taille et billets 2027 | sorties | Monteux, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/activites/festyland-avec-de-jeunes-enfants-quelles-attractions-selon-leur-taille/ | Festyland avec de jeunes enfants: quelles attractions selon leur taille? | activites | Carpiquet, Calvados, Normandie
- /articles/activites/accrocamp-toulouse-avec-des-enfants-quel-pass-choisir-selon-leur-taille/ | AccroCamp Toulouse avec des enfants: quel pass choisir selon leur taille? | activites | Toulouse, Haute-Garonne, Occitanie
- /articles/activites/zoo-de-martinique-en-famille-tarifs-poussette-et-visite-de-l-habitation-latouche/ | Zoo de Martinique en famille: tarifs, poussette et visite de l'Habitation Latouche | activites | Le Carbet, Martinique, Martinique
- /articles/activites/habitation-clement-en-famille-sculptures-jardin-et-maison-creole/ | Habitation Clément en famille: sculptures, jardin et maison créole | activites | Le François, Martinique, Martinique
- /articles/voyages/ou-loger-en-martinique-avec-des-enfants-sainte-luce-trois-ilets-ou-le-diamant/ | Où loger en Martinique avec des enfants: Sainte-Luce, Trois-Ilets ou Le Diamant? | voyages | Sainte-Luce, Martinique, Martinique
- /articles/activites/parc-zoo-du-reynou-avec-des-enfants-billet-date-poussette-ou-journee-complete/ | Parc Zoo du Reynou avec des enfants: billet daté, poussette ou journée complète? | activites | Le Vigen, Haute-Vienne, Nouvelle-Aquitaine
- /articles/evenements/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales/ | Fêtes de l’Ours 2027: quelle fête choisir en famille dans les Pyrénées-Orientales ? | evenements | Pyrénées-Orientales, Occitanie
- /articles/parentalite/quel-laep-choisir-a-perpignan-selon-l-age-et-le-jour/ | Quel LAEP choisir à Perpignan selon l'âge et le jour ? | parentalite | Perpignan, Pyrénées-Orientales, Occitanie
- /articles/activites/parc-animalier-des-angles-en-famille-quel-circuit-choisir-et-comment-preparer-la-visite/ | Parc animalier des Angles en famille: quel circuit choisir et comment préparer la visite ? | activites | Les Angles, Pyrénées-Orientales, Occitanie
- /articles/bons-plans/musee-de-tautavel-moins-cher-avec-lio-le-bon-plan-a-connaitre/ | Musée de Tautavel moins cher avec liO: le bon plan à connaître | bons-plans | Tautavel, Pyrénées-Orientales, Occitanie
- /articles/evenements/cirque-de-noel-2026-au-mans-horaires-tarifs-et-seance-a-choisir-avec-des-enfants/ | Cirque de Noël 2026 au Mans: horaires, tarifs et séance à choisir avec des enfants | evenements | Le Mans, Sarthe, Pays de la Loire
- /articles/voyages/le-mans-sans-voiture-avec-des-enfants-ou-dormir-et-comment-organiser-un-week-end/ | Le Mans sans voiture avec des enfants: où dormir et comment organiser un week-end | voyages | Le Mans, Sarthe, Pays de la Loire
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | Noël à Caen 2026 en famille: marché de Noël et visite illuminée | evenements | Caen, Calvados, Normandie
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | Festival BD Colomiers 2026 en famille: programme, tarifs et accès | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/evenements/festival-cite-en-jeux-2026-a-colomiers-quel-jour-choisir-avec-des-enfants/ | Festival Cité en Jeux 2026 à Colomiers: quel jour choisir avec des enfants | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/evenements/quai-des-bulles-2026-a-saint-malo-en-famille-tarifs-programme-et-conseils/ | Quai des Bulles 2026 à Saint-Malo en famille: tarifs, programme et conseils | evenements | Saint-Malo, Ille-et-Vilaine, Bretagne
- /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | Rétro Game Festival 2026 à Beauvais: programme, billets famille et animations enfants | evenements | Beauvais, Oise, Hauts-de-France
- /articles/evenements/noel-2026-a-quimper-en-famille-village-concert-ou-ateliers-gratuits/ | Noël 2026 à Quimper en famille: village, concert et animations gratuites | evenements | Quimper, Finistère, Bretagne
- /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | Noël 2026 à Paris La Défense en famille: marché, animations et patinoire | evenements | Puteaux, Hauts-de-Seine, Île-de-France
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne
- /articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/ | Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates | vie-pratique | Toulouse, Haute-Garonne, Occitanie
- /articles/bons-plans/cantine-au-college-dans-l-herault-jusqu-a-3-60-d-aide-par-repas/ | Cantine au collège dans l'Hérault: jusqu'à 3,60 € d'aide par repas | bons-plans | Montpellier, Hérault, Occitanie
- /articles/maison/moustique-tigre-en-haute-garonne-proteger-la-maison-et-le-jardin/ | Moustique tigre en Haute-Garonne: protéger la maison et le jardin | maison | Toulouse, Haute-Garonne, Occitanie
- /articles/vie-pratique/cantine-au-college-en-deux-sevres-comment-s-inscrire-en-ligne-pour-2026-2027/ | Cantine au collège en Deux-Sèvres: comment s'inscrire en ligne pour 2026-2027 | vie-pratique | Niort, Deux-Sèvres, Nouvelle-Aquitaine
- /articles/maison/recycleries-autour-de-chartres-ou-donner-et-acheter-d-occasion/ | Recycleries autour de Chartres: où donner et acheter d'occasion ? | maison | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/cuisine/apres-une-cueillette-en-eure-et-loir-5-recettes-faciles-a-faire-avec-les-enfants/ | Après une cueillette en Eure-et-Loir: 5 recettes faciles à faire avec les enfants | cuisine | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/activites/stages-de-science-a-la-cite-des-sciences-pendant-la-toussaint-2026-lequel-choisir-selon-l-age/ | Stages de science à la Cité des sciences à la Toussaint 2026: durées, âges et tarifs | activites | Paris, Paris, Île-de-France
- /articles/evenements/rencontres-du-ciel-et-de-l-espace-2026-a-paris-que-choisir-avec-des-enfants/ | Rencontres du ciel et de l’espace 2026 à Paris: ateliers, âges et billets en famille | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | Vacances de la Toussaint 2026 à la Cité des sciences: les ateliers numériques gratuits avec des enfants | sorties | Paris, Paris, Île-de-France
- /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | Noël des Siècles 2026 à Champs-sur-Marne: billets, budget et horaires en famille | evenements | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/la-legende-des-chevaliers-a-provins-en-famille-tarifs-horaires-et-conseils-2026/ | La Légende des Chevaliers à Provins en famille: tarifs, horaires et conseils 2026 | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | Noël 2026 au château de Goulaine: dates, billets et conseils en famille | evenements | Haute-Goulaine, Loire-Atlantique, Pays de la Loire
- /articles/vie-pratique/aides-caf-en-charente-maritime-financer-meubles-electromenager-et-ordinateur/ | Aides Caf en Charente-Maritime: financer meubles, électroménager et ordinateur | vie-pratique | Charente-Maritime, Nouvelle-Aquitaine
- /articles/parentalite/parents-d-ados-dans-l-yonne-contacter-la-maison-des-adolescents/ | Parents d’ados dans l’Yonne: contacter la Maison des adolescents | parentalite | Yonne, Bourgogne-Franche-Comté
- /articles/activites/parc-animalier-d-auvergne-en-famille-billets-animaux-et-conseils-de-visite/ | Parc animalier d'Auvergne en famille: billets, animaux et conseils de visite | activites | Ardes, Puy-de-Dôme, Auvergne-Rhône-Alpes
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
- /articles/sorties/chateau-de-sully-sur-loire-en-famille-visites-et-activites-pour-les-enfants/ | Château de Sully-sur-Loire en famille: visites et activités pour les enfants | sorties | Sully-sur-Loire, Loiret, Centre-Val de Loire
- /articles/bons-plans/passeport-des-musees-04-visiter-en-famille-a-prix-reduit/ | Passeport des musées 04: visiter en famille à prix réduit | bons-plans | Alpes-de-Haute-Provence, Provence-Alpes-Côte d’Azur
- /articles/parentalite/laep-dans-la-manche-ou-aller-avec-son-enfant-de-moins-de-6-ans/ | LAEP dans la Manche: où aller avec son enfant de moins de 6 ans ? | parentalite | Manche, Normandie
- /articles/parentalite/laep-en-martinique-jouer-avec-son-tout-petit-et-rencontrer-d-autres-parents/ | LAEP en Martinique: jouer avec son tout-petit et rencontrer d’autres parents | parentalite | Martinique
- /articles/cuisine/manger-local-dans-le-val-d-oise-paniers-fermes-et-repas-de-saison/ | Manger local dans le Val-d'Oise: paniers, fermes et repas de saison | cuisine | Val-d'Oise, Île-de-France
- /articles/maison/composteur-gratuit-dans-le-gers-comment-en-obtenir-un-et-bien-demarrer/ | Composteur gratuit dans le Gers: comment en obtenir un et bien démarrer ? | maison | Gers, Occitanie

### Historique Radar lié

- opportunity | /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | 2026-11-01T01:35:08.448Z
- opportunity | /articles/evenements/noel-2026-a-quimper-en-famille-village-concert-ou-ateliers-gratuits/ | 2026-11-01T18:35:45.871Z
- refresh | /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | 2026-11-15T12:33:21.761Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | 2026-11-03T15:36:10.146Z
- refresh | /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | 2026-11-13T13:31:11.034Z
- opportunity | /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | 2026-10-30T21:26:32.584Z
- opportunity | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-10-30T18:26:56.039Z
- refresh | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-11-17T09:28:43.094Z
- opportunity | /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | 2026-10-26T18:32:56.730Z
- opportunity | /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | 2026-10-24T09:33:57.174Z
- refresh | /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | 2026-11-18T08:32:35.637Z
- refresh | /articles/sorties/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets/ | 2026-11-18T23:36:24.271Z
- refresh | /articles/bons-plans/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites/ | 2026-11-11T11:27:51.931Z
- refresh | /articles/sorties/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/ | 2026-10-22T18:35:19.372Z
- opportunity | /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | 2026-11-05T10:32:54.471Z
- opportunity | /articles/evenements/rencontres-du-ciel-et-de-l-espace-2026-a-paris-que-choisir-avec-des-enfants/ | 2026-11-04T05:34:42.508Z
- opportunity | /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | 2026-10-26T10:34:36.317Z
- opportunity | /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | 2026-10-27T00:35:14.931Z
- refresh | /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | 2026-11-17T06:29:57.590Z
- opportunity | /articles/evenements/saint-nicolas-2026-a-epinal-en-famille-defile-du-5-decembre-ou-marche-de-noel/ | 2026-11-01T21:31:28.158Z
- opportunity | /articles/evenements/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/ | 2026-11-02T23:31:49.432Z
- refresh | /articles/evenements/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/ | 2026-11-22T08:32:50.321Z
- opportunity | /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | 2026-10-30T12:36:12.349Z
- refresh | /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | 2026-11-21T23:34:21.270Z
- opportunity | /articles/activites/stages-de-science-a-la-cite-des-sciences-pendant-la-toussaint-2026-lequel-choisir-selon-l-age/ | 2026-10-04T05:39:23.036Z
- opportunity | /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | 2026-10-24T19:30:32.700Z
- refresh | /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | 2026-11-13T16:33:40.259Z
- refresh | /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/ | 2026-11-06T21:35:30.246Z
- opportunity | /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | 2026-10-05T11:24:52.310Z
- opportunity | /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | 2026-10-29T20:30:33.011Z

## Travaux éditoriaux en cours

### Publication en cours

- Branche: automation/publication-20261122-1905-sujet-les-ludotheques-du-val-de-marne-pour-jouer-sur-place-et-parfois-
- HEAD: publication: phase 1 sujet-les-ludotheques-du-val-de-marne-pour-jouer-sur-place-et-parfois-

## Sujet retenu

**Sujet :** les ludothèques du Val-de-Marne, pour jouer sur place et parfois emprunter des jeux sans acheter.

**Titre de travail :** « Ludothèques du Val-de-Marne : où jouer en famille et emprunter des jeux ? »

**Angle :** guide comparatif et pratique des solutions de jeu accessibles aux familles dans plusieurs communes du 94, en distinguant jeu libre, prêt à domicile, ateliers, conditions d'inscription et âge des enfants. Une ludothèque est un espace proposant jeux et jouets sur place, parfois aussi en prêt ; elle ne fonctionne pas partout comme une médiathèque.

## Besoin du lecteur

Identifier une ludothèque adaptée à l'âge de ses enfants, savoir si elle accepte les non-résidents, si les jeux sont empruntables, ce qui est gratuit ou soumis à adhésion et comment organiser une visite. Aider aussi les parents à choisir entre sortie ludique, découverte de jeux avant achat et emprunt régulier.

## Valeur éditoriale

- **Rungis :** ludothèque municipale au 8 bis rue Sainte-Geneviève ; environ 2 000 jeux ; accès et prêt gratuits pour les Rungissois, jusqu'à deux jeux pendant 28 jours selon les règles publiées. Ne pas étendre cette gratuité aux non-résidents sans vérification.
- **Bonneuil-sur-Marne :** ludothèque intégrée à la médiathèque Bernard-Ywanne depuis mars 2025 ; séances de jeu sur place sans réservation, avec créneaux spécifiques ; inscription gratuite pour les résidents et certains publics du territoire GPSEA, autres inscriptions annoncées à 20 €.
- **Fresnes :** ludothèque proposant jeu libre en fin d'après-midi, prêt de jeux avec carte et créneaux dédiés aux 0-3 ans accompagnés ; les ateliers peuvent être réservés aux adhérents.
- **Créteil :** médiathèques avec jeux et animations, à distinguer d'une ludothèque dédiée.
- **Comparaison utile :** accès sur place versus prêt, inscription versus entrée, conditions de résidence, autonomie des enfants, créneaux petite enfance et horaires modifiés pendant les vacances. Vérifier les informations juste avant publication : les calendriers changent.

Le sujet est durable, utile en automne-hiver et ne reprend ni les visites du MAC VAL ni les autres lieux déjà traités récemment. Les pages municipales donnent chacune leurs propres conditions : Fam Space peut réellement faciliter la comparaison sans recopier une seule page officielle.

## Affiliation

Action principale : utiliser des services municipaux gratuits ou peu coûteux, sans réservation commerciale chez les partenaires.

Recherches ciblées sur GetYourGuide, Tiqets et Klook pour les ludothèques et prêts de jeux du Val-de-Marne : **aucune prestation correspondante vérifiée**. Les city pass et les locations de vélos ou voitures ne répondent pas à ce besoin.

Recherche secondaire Abritel : une maison pour quatre personnes à Bonneuil-sur-Marne est bien référencée (https://www.abritel.fr/location-vacances/p2556358), mais elle n'a pas de justification naturelle pour un guide de ludothèques de proximité ; **ne pas l'intégrer**. Aucun hébergement ni lien d'affiliation retenu. Le sujet reste éditorialement pertinent sans monétisation artificielle.

## Sources de départ

- Ludothèque de Rungis, accueil et offre : https://multitheque.ville-rungis.fr/index.php
- Ludothèque de Rungis, accès et conditions de prêt : https://multitheque.ville-rungis.fr/ludotheque/venir
- Bonneuil-sur-Marne, médiathèque-ludothèque Bernard-Ywanne : https://www.ville-bonneuil.fr/90/loisirs-citoyennete/culture/mediatheque-ludotheque-bernard-ywanne.htm
- Fresnes, ludothèque municipale et créneaux : https://www.fresnes94.fr/vos-activites/culture/ludotheque/
- BnF, médiathèque de l'Abbaye-Nelson Mandela à Créteil : https://ccfr.bnf.fr/portailccfr/ark%3A/16871/0026950


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
