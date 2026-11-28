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
  "generatedAt": "2026-11-28T07:56:00+01:00",
  "dataThrough": "2026-11-26",
  "from": "2026-10-30",
  "refresh": [
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
      "ageDays": 30,
      "rapidDrop": true,
      "peakStart": "2026-11-01",
      "peakEnd": "2026-11-03",
      "recentStart": "2026-11-24",
      "recentEnd": "2026-11-26",
      "peakImpressions": 22,
      "recentImpressions": 3,
      "score": 57,
      "signal": "uncertain",
      "basis": "Visibilité récente : 22 impressions sur trois jours, puis 3 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "dijon marche de noel 2026",
        "marché de noël dijon 2026",
        "dijon noel 2026",
        "place de la libération"
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
      "ageDays": 33,
      "rapidDrop": false,
      "peakStart": "2026-10-30",
      "peakEnd": "2026-11-05",
      "recentStart": "2026-11-20",
      "recentEnd": "2026-11-26",
      "peakImpressions": 247,
      "recentImpressions": 31,
      "score": 216,
      "signal": "uncertain",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0.018,
      "focusQueries": [
        "chateau de chantilly noel 2026",
        "spectacle noël chantilly 2026",
        "noel a chantilly 2026",
        "spectacle equestre chantilly noel 2026",
        "chantilly noel 2026"
      ]
    },
    {
      "url": "/articles/bons-plans/carte-avantage-adulte-sncf-quand-est-elle-interessante-avec-des-enfants/",
      "title": "Carte Avantage Adulte SNCF: quand est-elle intéressante avec des enfants?",
      "category": "bons-plans",
      "publishedAt": "2026-08-29T16:41:39+02:00",
      "ageDays": 91,
      "rapidDrop": false,
      "peakStart": "2026-11-11",
      "peakEnd": "2026-11-17",
      "recentStart": "2026-11-20",
      "recentEnd": "2026-11-26",
      "peakImpressions": 572,
      "recentImpressions": 409,
      "score": 163,
      "signal": "uncertain",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer. Diagnostic sur 1 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 1,
      "positionDelta": -7.425,
      "impressionRatio": 0.706,
      "focusQueries": [
        "carte avantage adulte",
        "carte sncf enfant famille",
        "accompagnant carte avantage",
        "carte avantage adulte accompagnant",
        "carte avantage famille"
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
      "ageDays": 91,
      "rapidDrop": false,
      "peakStart": "2026-11-13",
      "peakEnd": "2026-11-19",
      "recentStart": "2026-11-20",
      "recentEnd": "2026-11-26",
      "peakImpressions": 1592,
      "recentImpressions": 1478,
      "score": 117.8,
      "signal": "search_potential",
      "basis": "Page visible avec 1478 impressions, 3 clics et une position moyenne de 8.32 sur sept jours; intention de recherche à examiner. Les requêtes visibles ne démontrent pas une perte de classement.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0.719,
      "focusQueries": [
        "prix metro enfant paris",
        "metro paris enfant",
        "prix ticket metro paris enfant",
        "ticket metro paris enfant",
        "les enfants paient ils le metro a paris"
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
      "ageDays": 23,
      "rapidDrop": false,
      "peakStart": "2026-11-10",
      "peakEnd": "2026-11-16",
      "recentStart": "2026-11-20",
      "recentEnd": "2026-11-26",
      "peakImpressions": 402,
      "recentImpressions": 285,
      "score": 117,
      "signal": "uncertain",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer. Diagnostic sur 5 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 5,
      "positionDelta": 0.065,
      "impressionRatio": 0.678,
      "focusQueries": [
        "fete de l'ours 2027",
        "fête de l'ours 2027",
        "fête de l ours prats de mollo 2027",
        "fête de lours 2027",
        "fete de l ours"
      ]
    },
    {
      "url": "/articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/",
      "title": "Luminescences 2026-2027 au zoo d'Amnéville: billets, pass annuel et horaires",
      "category": "evenements",
      "publishedAt": "2026-10-22T09:37:18.454Z",
      "location": {
        "city": "Amnéville",
        "department": "Moselle",
        "region": "Grand Est"
      },
      "ageDays": 37,
      "rapidDrop": false,
      "peakStart": "2026-11-06",
      "peakEnd": "2026-11-12",
      "recentStart": "2026-11-20",
      "recentEnd": "2026-11-26",
      "peakImpressions": 205,
      "recentImpressions": 88,
      "score": 117,
      "signal": "needs_query_check",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Luminescences Amnéville 2026 2027",
        "festival lanternes zoo Amnéville enfants",
        "Luminescences Amnéville tarifs",
        "zoo Amnéville lanternes poussette"
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
      "ageDays": 97,
      "rapidDrop": false,
      "peakStart": "2026-11-09",
      "peakEnd": "2026-11-15",
      "recentStart": "2026-11-20",
      "recentEnd": "2026-11-26",
      "peakImpressions": 484,
      "recentImpressions": 393,
      "score": 91,
      "signal": "needs_query_check",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Cité des sciences en famille",
        "Cité des enfants Paris"
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
      "ageDays": 33,
      "rapidDrop": false,
      "peakStart": "2026-10-30",
      "peakEnd": "2026-11-05",
      "recentStart": "2026-11-20",
      "recentEnd": "2026-11-26",
      "peakImpressions": 102,
      "recentImpressions": 12,
      "score": 90,
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
      "url": "/articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/",
      "title": "Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille",
      "category": "evenements",
      "publishedAt": "2026-10-16T17:46:42.359Z",
      "location": {
        "city": "Lumigny-Nesles-Ormeaux",
        "department": "Seine-et-Marne",
        "region": "Île-de-France"
      },
      "ageDays": 43,
      "rapidDrop": false,
      "peakStart": "2026-10-30",
      "peakEnd": "2026-11-05",
      "recentStart": "2026-11-20",
      "recentEnd": "2026-11-26",
      "peakImpressions": 526,
      "recentImpressions": 446,
      "score": 80,
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
      "url": "/articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/",
      "title": "Fêtes de Saint-Nicolas 2026 à Nancy en famille: défilé, villages et animations",
      "category": "evenements",
      "publishedAt": "2026-10-19T16:47:56.167Z",
      "location": {
        "city": "Nancy",
        "department": "Meurthe-et-Moselle",
        "region": "Grand Est"
      },
      "ageDays": 40,
      "rapidDrop": false,
      "peakStart": "2026-11-08",
      "peakEnd": "2026-11-14",
      "recentStart": "2026-11-20",
      "recentEnd": "2026-11-26",
      "peakImpressions": 89,
      "recentImpressions": 25,
      "score": 64,
      "signal": "needs_query_check",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "fêtes Saint-Nicolas Nancy 2026 en famille",
        "grand défilé Saint-Nicolas Nancy 5 décembre 2026",
        "villages Saint-Nicolas Nancy enfants"
      ]
    },
    {
      "url": "/articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/",
      "title": "Noël à Trévarez 2026 en famille: dates, horaires et réservation",
      "category": "evenements",
      "publishedAt": "2026-09-24T05:57:30+02:00",
      "location": {
        "city": "Saint-Goazec",
        "department": "Finistère",
        "region": "Bretagne"
      },
      "ageDays": 65,
      "rapidDrop": false,
      "peakStart": "2026-11-13",
      "peakEnd": "2026-11-19",
      "recentStart": "2026-11-20",
      "recentEnd": "2026-11-26",
      "peakImpressions": 346,
      "recentImpressions": 1332,
      "score": 63.2,
      "signal": "search_potential",
      "basis": "Page visible avec 1332 impressions, 7 clics et une position moyenne de 8.697 sur sept jours; intention de recherche à examiner.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Noël à Trévarez 2026",
        "Trévarez en famille"
      ]
    },
    {
      "url": "/articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/",
      "title": "Noël à Pau 2026 en famille: marchés, village et illuminations",
      "category": "evenements",
      "publishedAt": "2026-10-19T11:02:20+02:00",
      "location": {
        "city": "Pau",
        "department": "Pyrénées-Atlantiques",
        "region": "Nouvelle-Aquitaine"
      },
      "ageDays": 40,
      "rapidDrop": false,
      "peakStart": "2026-11-10",
      "peakEnd": "2026-11-16",
      "recentStart": "2026-11-20",
      "recentEnd": "2026-11-26",
      "peakImpressions": 99,
      "recentImpressions": 37,
      "score": 62,
      "signal": "needs_query_check",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Noël à Pau 2026 en famille",
        "marché de Noël Pau enfants"
      ]
    },
    {
      "url": "/articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/",
      "title": "Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations",
      "category": "evenements",
      "publishedAt": "2026-10-20T00:30:38.892Z",
      "location": {
        "city": "Reims",
        "department": "Marne",
        "region": "Grand Est"
      },
      "ageDays": 39,
      "rapidDrop": false,
      "peakStart": "2026-11-13",
      "peakEnd": "2026-11-19",
      "recentStart": "2026-11-20",
      "recentEnd": "2026-11-26",
      "peakImpressions": 153,
      "recentImpressions": 92,
      "score": 61,
      "signal": "needs_query_check",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "marché de Noël Reims 2026 famille",
        "marché de Noël Reims enfants horaires",
        "marché de Noël Reims grande roue"
      ]
    },
    {
      "url": "/articles/vie-pratique/cantine-au-college-en-essonne-obtenir-son-tarif-2026-2027-sans-refaire-la-mauvaise-demarche/",
      "title": "Cantine au collège en Essonne: obtenir son tarif 2026-2027 sans refaire la mauvaise démarche",
      "category": "vie-pratique",
      "publishedAt": "2026-09-13T16:03:15+02:00",
      "location": {
        "city": "Évry-Courcouronnes",
        "department": "Essonne",
        "region": "Île-de-France"
      },
      "ageDays": 76,
      "rapidDrop": false,
      "peakStart": "2026-11-03",
      "peakEnd": "2026-11-09",
      "recentStart": "2026-11-20",
      "recentEnd": "2026-11-26",
      "peakImpressions": 187,
      "recentImpressions": 130,
      "score": 57,
      "signal": "needs_query_check",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "tarif cantine collège Essonne 2026-2027",
        "restauration scolaire Essonne"
      ]
    },
    {
      "url": "/articles/cuisine/fete-de-la-truffe-2027-a-sarlat-en-famille-que-faire-et-que-gouter/",
      "title": "Fête de la Truffe 2027 à Sarlat en famille: que faire et que goûter ?",
      "category": "cuisine",
      "publishedAt": "2026-11-09T02:03:08+01:00",
      "location": {
        "city": "Sarlat-la-Canéda",
        "department": "Dordogne",
        "region": "Nouvelle-Aquitaine"
      },
      "ageDays": 19,
      "rapidDrop": false,
      "peakStart": "2026-11-10",
      "peakEnd": "2026-11-16",
      "recentStart": "2026-11-20",
      "recentEnd": "2026-11-26",
      "peakImpressions": 127,
      "recentImpressions": 75,
      "score": 52,
      "signal": "needs_query_check",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Fête de la Truffe Sarlat 2027",
        "Sarlat en famille janvier",
        "truffe noire du Périgord"
      ]
    }
  ],
  "strongPages": [
    {
      "url": "/articles/evenements/gastronomades-2026-a-angouleme-en-famille-faut-il-prevoir-le-week-end/",
      "title": "Gastronomades 2026 à Angoulême en famille: programme, tarifs et conseils",
      "category": "evenements",
      "recentImpressions": 807,
      "recentClicks": 21,
      "recentPosition": 5.934,
      "retention": 2.783
    },
    {
      "url": "/articles/evenements/cirque-de-noel-2026-au-mans-horaires-tarifs-et-seance-a-choisir-avec-des-enfants/",
      "title": "Cirque de Noël 2026 au Mans: horaires, tarifs et séance à choisir avec des enfants",
      "category": "evenements",
      "recentImpressions": 402,
      "recentClicks": 16,
      "recentPosition": 7.321,
      "retention": 1.327
    },
    {
      "url": "/articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/",
      "title": "Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille",
      "category": "evenements",
      "recentImpressions": 446,
      "recentClicks": 11,
      "recentPosition": 7.538,
      "retention": 0.848
    },
    {
      "url": "/articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/",
      "title": "Noël 2026 au château de Goulaine: dates, billets et conseils en famille",
      "category": "evenements",
      "recentImpressions": 395,
      "recentClicks": 9,
      "recentPosition": 7.218,
      "retention": 1.717
    },
    {
      "url": "/articles/evenements/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales/",
      "title": "Fêtes de l’Ours 2027: quelle fête choisir en famille dans les Pyrénées-Orientales ?",
      "category": "evenements",
      "recentImpressions": 285,
      "recentClicks": 9,
      "recentPosition": 3.74,
      "retention": 0.709
    },
    {
      "url": "/articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/",
      "title": "Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille",
      "category": "evenements",
      "recentImpressions": 521,
      "recentClicks": 8,
      "recentPosition": 6.359,
      "retention": 1.176
    },
    {
      "url": "/articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/",
      "title": "Noël à Trévarez 2026 en famille: dates, horaires et réservation",
      "category": "evenements",
      "recentImpressions": 1332,
      "recentClicks": 7,
      "recentPosition": 8.697,
      "retention": 3.85
    },
    {
      "url": "/articles/maison/dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage/",
      "title": "Déchets verts à Toulouse Métropole en 2027: collecte, broyage et évacuation des gros volumes",
      "category": "maison",
      "recentImpressions": 100,
      "recentClicks": 7,
      "recentPosition": 6.27,
      "retention": 0.926
    },
    {
      "url": "/articles/evenements/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants/",
      "title": "Fontaines dansantes d'hiver à Metz 2026-2027: dates, horaires et conseils en famille",
      "category": "evenements",
      "recentImpressions": 495,
      "recentClicks": 5,
      "recentPosition": 8.345,
      "retention": 3.75
    },
    {
      "url": "/articles/maison/recycleries-autour-de-chartres-ou-donner-et-acheter-d-occasion/",
      "title": "Recycleries autour de Chartres: où donner et acheter d'occasion ?",
      "category": "maison",
      "recentImpressions": 116,
      "recentClicks": 5,
      "recentPosition": 10.397,
      "retention": 0.975
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

## Catalogue ciblé (doublons et publications récentes)

### Articles comparables et publications récentes

- /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | Marché de Noël 100 % Côte-d’Or à Dijon 2026: horaires, spectacles et Père Noël | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | Festival des Petits Explorateurs 2026 à Dijon: ateliers, horaires et tarifs | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | Foire de Dijon 2026 avec les enfants: gratuités, ateliers et Ferme Côte-d'Or | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/vie-pratique/frais-scolaires-en-cote-d-or-quelles-aides-demander-au-departement/ | Frais scolaires en Côte-d'Or: quelles aides demander au Département? | vie-pratique | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | Noël 2026 à Chantilly: Le Noël oublié, billets et séances en famille | evenements | Chantilly, Oise, Hauts-de-France
- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/cuisine/atelier-de-creme-chantilly-avec-des-enfants-a-partir-de-quel-age-et-comment-reserver/ | Atelier de crème Chantilly avec des enfants: à partir de quel âge et comment réserver | cuisine | Chantilly, Oise, Hauts-de-France
- /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | Noël de Casse-Noisette 2026 à Pierrefonds: visites, dates et tarifs en famille | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/bons-plans/carte-avantage-adulte-sncf-quand-est-elle-interessante-avec-des-enfants/ | Carte Avantage Adulte SNCF: quand est-elle intéressante avec des enfants? | bons-plans
- /articles/bons-plans/carte-familles-nombreuses-reductions-demarches/ | Carte Familles Nombreuses: réductions, conditions et demande en ligne | bons-plans
- /articles/voyages/sarlat-sans-voiture-avec-des-enfants-est-ce-realiste-pour-un-week-end/ | Sarlat sans voiture avec des enfants: est-ce réaliste pour un week-end? | voyages | Sarlat-la-Canéda, Dordogne, Nouvelle-Aquitaine
- /articles/voyages/train-de-la-rhune-avec-des-enfants-billets-duree-et-conseils-en-2026/ | Train de la Rhune avec des enfants: billets, durée et conseils en 2026 | voyages | Sare, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/ | Transports à Paris avec des enfants: quel titre choisir pour payer juste? | voyages | Paris, Paris, Île-de-France
- /articles/evenements/salon-du-chocolat-paris-2026-avec-des-enfants-quel-billet-choisir-et-quels-ateliers-reserver/ | Salon du Chocolat Paris 2026 avec des enfants: quel billet choisir et quels ateliers réserver | evenements | Paris, Paris, Île-de-France
- /articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/ | Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite | sorties | Paris, Paris, Île-de-France
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/evenements/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales/ | Fêtes de l’Ours 2027: quelle fête choisir en famille dans les Pyrénées-Orientales ? | evenements | Pyrénées-Orientales, Occitanie
- /articles/parentalite/quel-laep-choisir-a-perpignan-selon-l-age-et-le-jour/ | Quel LAEP choisir à Perpignan selon l'âge et le jour ? | parentalite | Perpignan, Pyrénées-Orientales, Occitanie
- /articles/activites/parc-animalier-des-angles-en-famille-quel-circuit-choisir-et-comment-preparer-la-visite/ | Parc animalier des Angles en famille: quel circuit choisir et comment préparer la visite ? | activites | Les Angles, Pyrénées-Orientales, Occitanie
- /articles/bons-plans/musee-de-tautavel-moins-cher-avec-lio-le-bon-plan-a-connaitre/ | Musée de Tautavel moins cher avec liO: le bon plan à connaître | bons-plans | Tautavel, Pyrénées-Orientales, Occitanie
- /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | Luminescences 2026-2027 au zoo d'Amnéville: billets, pass annuel et horaires | evenements | Amnéville, Moselle, Grand Est
- /articles/activites/snowworld-amneville-en-famille-luge-bouees-ou-ski/ | SnowWorld Amnéville en famille: luge, bouées ou ski ? | activites | Amnéville, Moselle, Grand Est
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-a-metz-2026-en-famille-marches-et-sentier-des-lanternes/ | Noël à Metz 2026 en famille: marchés et Sentier des Lanternes | evenements | Metz, Moselle, Grand Est
- /articles/activites/stages-de-science-a-la-cite-des-sciences-pendant-la-toussaint-2026-lequel-choisir-selon-l-age/ | Stages de science à la Cité des sciences à la Toussaint 2026: durées, âges et tarifs | activites | Paris, Paris, Île-de-France
- /articles/evenements/cite-immersive-des-fables-a-paris-decouvrir-la-fontaine-en-famille/ | Cité immersive des Fables à Paris: découvrir La Fontaine en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/rencontres-du-ciel-et-de-l-espace-2026-a-paris-que-choisir-avec-des-enfants/ | Rencontres du ciel et de l’espace 2026 à Paris: ateliers, âges et billets en famille | evenements | Paris, Paris, Île-de-France
- /articles/bons-plans/parc-floral-d-orleans-gratuit-en-hiver-horaires-et-sortie-avec-les-enfants/ | Parc floral d’Orléans gratuit en hiver: horaires et sortie avec les enfants | bons-plans | Orléans, Loiret, Centre-Val de Loire
- /articles/maison/composteur-gratuit-a-orleans-metropole-comment-en-profiter-en-2026/ | Composteur gratuit à Orléans Métropole: comment en profiter en 2026 | maison | Orléans, Loiret, Centre-Val de Loire
- /articles/sorties/chasse-motifs-loire-orleans-famille-2026/ | Chasse aux motifs de Loire à Orléans: une balade gratuite pour les 6 à 12 ans | sorties | Orléans, Loiret, Centre-Val de Loire
- /articles/activites/mobe-d-orleans-en-famille-fossiles-jeux-et-biodiversite/ | MOBE d’Orléans en famille: fossiles, jeux et biodiversité | activites | Orléans, Loiret, Centre-Val de Loire
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | Thoiry Lumières Sauvages 2026-2027: dates, billets et visite en famille | evenements | Thoiry, Yvelines, Île-de-France
- /articles/sorties/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/ | Planète Préhistorique à Bordeaux: dates, durée et tarifs en famille | sorties | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | Fêtes de Saint-Nicolas 2026 à Nancy en famille: défilé, villages et animations | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/evenements/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/ | Saint-Nicolas-de-Port 2026 en famille: horaires du défilé et de la procession | evenements | Saint-Nicolas-de-Port, Meurthe-et-Moselle, Grand Est
- /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | Ludothèques du Grand Nancy: où jouer en famille et emprunter des jeux | parentalite | Meurthe-et-Moselle, Grand Est
- /articles/evenements/saint-nicolas-2026-a-epinal-en-famille-defile-du-5-decembre-ou-marche-de-noel/ | Saint-Nicolas 2026 à Épinal: cortège du 5 décembre et marché de Noël en famille | evenements | Épinal, Vosges, Grand Est
- /articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/ | Noël à Trévarez 2026 en famille: dates, horaires et réservation | evenements | Saint-Goazec, Finistère, Bretagne
- /articles/evenements/train-de-noel-de-la-haute-somme-2026-en-famille-dates-tarifs-et-reservation/ | Train de Noël de la Haute Somme 2026 en famille: dates, tarifs et réservation | evenements | La Neuville-les-Bray, Somme, Hauts-de-France
- /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | Noël 2026 à Brest en famille: marché, projections et horaires | evenements | Brest, Finistère, Bretagne
- /articles/evenements/train-du-pere-noel-a-toucy-2026-horaires-tarifs-et-reservation/ | Train du Père Noël à Toucy 2026: horaires, tarifs et réservation | evenements | Toucy, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne
- /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | Noël à Caen 2026 en famille: marché de Noël et visite illuminée | evenements | Caen, Calvados, Normandie
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | Marchés de Noël de Tours 2026 en famille: horaires, animations et budget | evenements | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | Ville de Noël d’Arras 2026 en famille: horaires, attractions et budget | evenements | Arras, Pas-de-Calais, Hauts-de-France
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/vie-pratique/cantine-au-college-en-essonne-obtenir-son-tarif-2026-2027-sans-refaire-la-mauvaise-demarche/ | Cantine au collège en Essonne: obtenir son tarif 2026-2027 sans refaire la mauvaise démarche | vie-pratique | Évry-Courcouronnes, Essonne, Île-de-France
- /articles/bons-plans/cantine-au-college-dans-l-herault-jusqu-a-3-60-d-aide-par-repas/ | Cantine au collège dans l'Hérault: jusqu'à 3,60 € d'aide par repas | bons-plans | Montpellier, Hérault, Occitanie
- /articles/vie-pratique/cantine-au-college-en-deux-sevres-comment-s-inscrire-en-ligne-pour-2026-2027/ | Cantine au collège en Deux-Sèvres: comment s'inscrire en ligne pour 2026-2027 | vie-pratique | Niort, Deux-Sèvres, Nouvelle-Aquitaine
- /articles/vie-pratique/cantine-au-college-dans-le-pas-de-calais-les-tarifs-2026-et-les-reductions-pour-les-boursiers/ | Cantine au collège dans le Pas-de-Calais: les tarifs 2026 et les réductions pour les boursiers | vie-pratique | Hénin-Beaumont, Pas-de-Calais, Hauts-de-France
- /articles/cuisine/fete-de-la-truffe-2027-a-sarlat-en-famille-que-faire-et-que-gouter/ | Fête de la Truffe 2027 à Sarlat en famille: que faire et que goûter ? | cuisine | Sarlat-la-Canéda, Dordogne, Nouvelle-Aquitaine
- /articles/evenements/l-ours-et-la-louve-a-sarlat-faut-il-reserver-pour-ce-spectacle-gratuit-des-3-ans/ | L'Ours et la Louve à Sarlat: faut-il réserver pour ce spectacle gratuit dès 3 ans? | evenements | Sarlat-la-Canéda, Dordogne, Nouvelle-Aquitaine
- /articles/cuisine/huile-de-noix-du-perigord-du-moulin-de-neuvic-a-la-cuisine-familiale/ | Huile de noix du Périgord: du moulin de Neuvic à la cuisine familiale | cuisine | Neuvic, Dordogne, Nouvelle-Aquitaine
- /articles/evenements/gastronomades-2026-a-angouleme-en-famille-faut-il-prevoir-le-week-end/ | Gastronomades 2026 à Angoulême en famille: programme, tarifs et conseils | evenements | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/sorties/musee-de-la-bd-a-angouleme-en-famille-tarifs-horaires-et-conseils-de-visite/ | Musée de la BD à Angoulême en famille: tarifs, horaires et conseils de visite | sorties | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/voyages/ou-dormir-a-angouleme-avec-des-enfants-pour-visiter-la-ville-a-pied/ | Où dormir à Angoulême avec des enfants pour visiter la ville à pied | voyages | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/parentalite/decouvrir-la-bd-avec-ses-enfants-a-angouleme/ | Découvrir la BD avec ses enfants à Angoulême | parentalite | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/evenements/cirque-de-noel-2026-au-mans-horaires-tarifs-et-seance-a-choisir-avec-des-enfants/ | Cirque de Noël 2026 au Mans: horaires, tarifs et séance à choisir avec des enfants | evenements | Le Mans, Sarthe, Pays de la Loire
- /articles/voyages/le-mans-sans-voiture-avec-des-enfants-ou-dormir-et-comment-organiser-un-week-end/ | Le Mans sans voiture avec des enfants: où dormir et comment organiser un week-end | voyages | Le Mans, Sarthe, Pays de la Loire
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires, Père Noël et animations | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | Noël 2026 au château de Goulaine: dates, billets et conseils en famille | evenements | Haute-Goulaine, Loire-Atlantique, Pays de la Loire
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | Noël des Siècles 2026 à Champs-sur-Marne: billets, budget et horaires en famille | evenements | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/maison/dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage/ | Déchets verts à Toulouse Métropole en 2027: collecte, broyage et évacuation des gros volumes | maison | Toulouse, Haute-Garonne, Occitanie
- /articles/activites/accrocamp-toulouse-avec-des-enfants-quel-pass-choisir-selon-leur-taille/ | AccroCamp Toulouse avec des enfants: quel pass choisir selon leur taille? | activites | Toulouse, Haute-Garonne, Occitanie
- /articles/bons-plans/halle-de-la-machine-et-envol-des-pionniers-quels-billets-choisir-en-famille/ | Halle de la Machine et Envol des Pionniers: quels billets choisir en famille ? | bons-plans | Toulouse, Haute-Garonne, Occitanie
- /articles/voyages/cite-de-l-espace-a-toulouse-en-famille-en-2026-une-journee-suffit-elle-et-ou-dormir/ | Cité de l'espace à Toulouse en famille en 2026: une journée suffit-elle et où dormir | voyages | Toulouse, Haute-Garonne, Occitanie
- /articles/evenements/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants/ | Fontaines dansantes d'hiver à Metz 2026-2027: dates, horaires et conseils en famille | evenements | Metz, Moselle, Grand Est
- /articles/evenements/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille/ | Traîneau flottant de Noël à Metz 2026: dates, horaires et embarquement | evenements | Metz, Moselle, Grand Est
- /articles/maison/recycleries-autour-de-chartres-ou-donner-et-acheter-d-occasion/ | Recycleries autour de Chartres: où donner et acheter d'occasion ? | maison | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/cuisine/apres-une-cueillette-en-eure-et-loir-5-recettes-faciles-a-faire-avec-les-enfants/ | Après une cueillette en Eure-et-Loir: 5 recettes faciles à faire avec les enfants | cuisine | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/maison/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/ | Meubles d'occasion en Meurthe-et-Moselle: où acheter, donner et réparer ? | maison | Meurthe-et-Moselle, Grand Est
- /articles/sorties/illusion-nantes-en-famille-jouer-avec-les-trompe-l-oeil/ | Illusion Nantes en famille: jouer avec les trompe-l’œil | sorties | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/vie-pratique/transports-scolaires-optymo-dans-le-territoire-de-belfort-quelle-carte-choisir/ | Transports scolaires Optymo dans le Territoire de Belfort: quelle carte choisir ? | vie-pratique | Territoire de Belfort, Bourgogne-Franche-Comté
- /articles/activites/seaquarium-du-grau-du-roi-en-famille-decouvrir-la-vie-marine-hors-saison/ | Seaquarium du Grau-du-Roi en famille: découvrir la vie marine hors saison | activites | Le Grau-du-Roi, Gard, Occitanie
- /articles/vie-pratique/mediatheques-escales-dans-les-vosges-emprunter-des-livres-et-des-jeux-en-famille/ | Médiathèques Escales dans les Vosges: emprunter des livres et des jeux en famille | vie-pratique | Vosges, Grand Est
- /articles/voyages/alligator-bay-en-famille-decouvrir-les-reptiles-et-preparer-sa-visite/ | Alligator Bay en famille: découvrir les reptiles et préparer sa visite | voyages | Beauvoir, Manche, Normandie
- /articles/bons-plans/musee-des-beaux-arts-de-draguignan-en-famille-gratuites-et-ateliers/ | Musée des Beaux-Arts de Draguignan en famille: gratuités et ateliers | bons-plans | Draguignan, Var, Provence-Alpes-Côte d’Azur
- /articles/cuisine/pastis-landais-maison-la-recette-du-gouter-sans-alcool-ajoute/ | Pastis landais maison: la recette du goûter sans alcool ajouté | cuisine | Landes, Nouvelle-Aquitaine
- /articles/maison/composter-en-famille-dans-la-metropole-lilloise-avec-ou-sans-jardin/ | Composter en famille dans la métropole lilloise: avec ou sans jardin | maison | Nord, Hauts-de-France
- /articles/sorties/petit-cocotier-au-morne-rouge-decouvrir-la-vanille-en-famille/ | Petit Cocotier au Morne-Rouge: découvrir la vanille en famille | sorties | Le Morne-Rouge, Martinique, Martinique
- /articles/voyages/samoens-en-famille-cet-hiver-un-premier-sejour-a-la-neige-avec-ou-sans-ski/ | Samoëns en famille cet hiver: un premier séjour à la neige avec ou sans ski | voyages | Samoëns, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/voyages/honfleur-en-famille-hors-saison-que-faire-le-temps-d-un-week-end/ | Honfleur en famille hors saison: que faire le temps d'un week-end ? | voyages | Honfleur, Calvados, Normandie
- /articles/activites/accrobranche-au-maido-en-famille-preparer-sa-sortie-a-enler-pied-bois/ | Accrobranche au Maïdo en famille: préparer sa sortie à Enlèr Pied’Bois | activites | Saint-Paul, La Réunion, La Réunion
- /articles/bons-plans/pass-chateaux-du-loir-et-cher-quelles-economies-en-famille/ | Pass châteaux du Loir-et-Cher: quelles économies en famille ? | bons-plans | Loir-et-Cher, Centre-Val de Loire
- /articles/vie-pratique/se-deplacer-en-famille-en-haute-saone-sans-voiture-au-quotidien/ | Se déplacer en famille en Haute-Saône sans voiture au quotidien | vie-pratique | Haute-Saône, Bourgogne-Franche-Comté
- /articles/vie-pratique/metz-en-famille-sans-voiture-train-bus-et-bagages/ | Metz en famille sans voiture: train, bus et bagages | vie-pratique | Metz, Moselle, Grand Est
- /articles/voyages/musee-de-l-illusion-a-lille-une-visite-a-partager-en-famille/ | Musée de l’Illusion à Lille: une visite à partager en famille | voyages | Lille, Nord, Hauts-de-France
- /articles/bons-plans/bordeaux-citypass-en-famille-quel-pass-choisir-pour-economiser/ | Bordeaux CityPass en famille: quel pass choisir pour économiser ? | bons-plans | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/sorties/le-sourou-a-roura-en-famille-une-journee-entre-pirogue-kayak-et-foret/ | Le Sourou à Roura en famille: une journée entre pirogue, kayak et forêt | sorties | Roura, Guyane, Guyane
- /articles/evenements/sculptures-sur-glace-et-neige-a-valloire-en-janvier-2027/ | Sculptures sur glace et neige à Valloire en janvier 2027 | evenements | Valloire, Savoie, Auvergne-Rhône-Alpes
- /articles/bons-plans/sainte-chapelle-et-conciergerie-en-famille-a-paris-quels-billets-choisir/ | Sainte-Chapelle et Conciergerie en famille à Paris: quels billets choisir ? | bons-plans | Paris, Paris, Île-de-France
- /articles/activites/a-pointe-noire-decouvrir-la-riviere-en-famille-avec-l-aquarando-d-acomat/ | À Pointe-Noire, découvrir la rivière en famille avec l’aquarando d’Acomat | activites | Pointe-Noire, Guadeloupe, Guadeloupe
- /articles/vie-pratique/ludotheques-en-sarthe-ou-jouer-et-emprunter-des-jeux-avec-les-enfants/ | Ludothèques en Sarthe: où jouer et emprunter des jeux avec les enfants ? | vie-pratique | Sarthe, Pays de la Loire
- /articles/voyages/cherrueix-en-famille-decouvrir-le-char-a-voile-dans-la-baie-du-mont-saint-michel/ | Cherrueix en famille: découvrir le char à voile dans la baie du Mont-Saint-Michel | voyages | Cherrueix, Ille-et-Vilaine, Bretagne
- /articles/evenements/seraphine-louis-a-metz-decouvrir-l-exposition-avec-les-enfants/ | Séraphine Louis à Metz: découvrir l’exposition avec les enfants | evenements | Metz, Moselle, Grand Est
- /articles/voyages/cassis-en-famille-hors-saison-calanques-en-bateau-et-balades/ | Cassis en famille hors saison: calanques en bateau et balades | voyages | Cassis, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/cuisine/fougasse-d-aigues-mortes-recette-moelleuse-a-faire-en-famille/ | Fougasse d’Aigues-Mortes: recette moelleuse à faire en famille | cuisine | Aigues-Mortes, Gard, Occitanie
- /articles/parentalite/parents-et-jeunes-enfants-a-bergerac-trois-lieux-pour-jouer-et-echanger/ | Parents et jeunes enfants à Bergerac: trois lieux pour jouer et échanger | parentalite | Bergerac, Dordogne, Nouvelle-Aquitaine
- /articles/activites/musee-de-l-illusion-a-lyon-en-famille-que-voir-et-combien-coute-la-visite/ | Musée de l'Illusion à Lyon en famille: que voir et combien coûte la visite ? | activites | Lyon, Rhône, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | 2026-10-06T19:20:39.093Z
- opportunity | /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | 2026-10-30T06:28:26.726Z
- refresh | /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | 2026-11-15T12:33:21.761Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | 2026-10-26T21:31:06.119Z
- refresh | /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | 2026-11-12T18:32:15.897Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | 2026-11-03T15:36:10.146Z
- refresh | /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | 2026-11-13T13:31:11.034Z
- opportunity | /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | 2026-10-30T21:26:32.584Z
- refresh | /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | 2026-11-23T07:35:53.457Z
- opportunity | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-10-30T18:26:56.039Z
- refresh | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-11-17T09:28:43.094Z
- opportunity | /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | 2026-10-27T07:35:50.437Z
- refresh | /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | 2026-11-16T12:48:08.556Z
- opportunity | /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | 2026-10-26T18:32:56.730Z
- opportunity | /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | 2026-10-09T14:37:47.734Z
- refresh | /articles/bons-plans/parc-floral-d-orleans-gratuit-en-hiver-horaires-et-sortie-avec-les-enfants/ | 2026-11-08T07:28:43.032Z
- refresh | /articles/sorties/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/ | 2026-10-22T18:35:19.372Z
- opportunity | /articles/evenements/rencontres-du-ciel-et-de-l-espace-2026-a-paris-que-choisir-avec-des-enfants/ | 2026-11-04T05:34:42.508Z
- opportunity | /articles/evenements/saint-nicolas-2026-a-epinal-en-famille-defile-du-5-decembre-ou-marche-de-noel/ | 2026-11-01T21:31:28.158Z
- opportunity | /articles/evenements/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/ | 2026-11-02T23:31:49.432Z
- refresh | /articles/evenements/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/ | 2026-11-22T08:32:50.321Z
- refresh | /articles/activites/snowworld-amneville-en-famille-luge-bouees-ou-ski/ | 2026-11-09T17:37:32.610Z
- opportunity | /articles/activites/stages-de-science-a-la-cite-des-sciences-pendant-la-toussaint-2026-lequel-choisir-selon-l-age/ | 2026-10-04T05:39:23.036Z
- opportunity | /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | 2026-10-24T19:30:32.700Z
- refresh | /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | 2026-11-13T16:33:40.259Z
- opportunity | /articles/evenements/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille/ | 2026-11-03T03:34:06.534Z
- refresh | /articles/evenements/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille/ | 2026-11-16T08:38:53.929Z
- refresh | /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/ | 2026-11-06T21:35:30.246Z
- opportunity | /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | 2026-10-29T20:30:33.011Z
- refresh | /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | 2026-11-23T13:28:43.287Z

## Travaux éditoriaux en cours

### Publication en cours

- Branche: automation/publication-20261128-0758-composter-en-famille-au-pays-basque-quelle-solution-choisir-selon-son-
- HEAD: publication: phase 3 20261128-0758-composter-en-famille-au-pays-basque-quelle-solution-choisir-selon-son-

---
category: "maison"
title: "Composter en famille au Pays Basque: quelle solution choisir selon son logement ?"
subtitle: "Du composteur gratuit aux nouvelles bornes de collecte"
summary: "Maison ou appartement au Pays Basque, découvrez les équipements gratuits, le compostage partagé et les nouvelles solutions de tri alimentaire."
keywords:
  - "composteur gratuit Pays Basque"
  - "lombricomposteur"
  - "collecte déchets alimentaires"
location:
  department: "Pyrénées-Atlantiques"
  region: "Nouvelle-Aquitaine"
sources:
  - title: "Communauté Pays Basque: je composte mes biodéchets"
    url: "https://www.communaute-paysbasque.fr/dechets/je-composte-mes-biodechets"
  - title: "Communauté Pays Basque: aide au compostage"
    url: "https://www.communaute-paysbasque.fr/aides-et-financements/aide-et-financement/aide-au-compostage"
  - title: "Communauté Pays Basque: collecte des déchets alimentaires"
    url: "https://www.communaute-paysbasque.fr/dechets/la-collecte-des-dechets-alimentaires"
---

Au Pays Basque français, les épluchures du dîner peuvent devenir du compost plutôt que finir dans les ordures ménagères. La communauté d'agglomération et le syndicat de traitement des déchets Bil Ta Garbi accompagnent les habitants dans cette démarche. Le choix dépend surtout de la place disponible chez vous et du temps que vous souhaitez consacrer à l'entretien.

## Avec un jardin: produire son propre compost

Avant d'acheter un bac en magasin, consultez le dispositif d'[aide au compostage](https://www.communaute-paysbasque.fr/aides-et-financements/aide-et-financement/aide-au-compostage). Les particuliers peuvent demander un équipement gratuit toute l'année. Pour le modèle de jardin, il faut suivre au préalable la formation en ligne de Bil Ta Garbi.

Installez le composteur sur la terre, dans un endroit facilement accessible depuis la cuisine. Mélangez les épluchures et autres matières humides avec des feuilles mortes ou du carton brun non traité déchiré. Remuez régulièrement et surveillez l'humidité: un mélange détrempé manque souvent d'air. Réservez une petite provision de matières sèches à proximité du bac.

Le compost mûr, sombre et friable, pourra enrichir les plantations. Les enfants peuvent participer en apportant les épluchures ou en observant la transformation des matières, avec un lavage des mains après manipulation.

Pour arroser ces plantations en économisant l'eau potable, découvrez aussi les [conditions de l'aide aux récupérateurs d'eau de pluie au Pays Basque](https://www.fam-space.fr/articles/maison/recuperateur-d-eau-de-pluie-au-pays-basque-jusqu-a-1-500-d-aide/).

## En appartement: faut-il adopter des vers de compost ?

Le lombricomposteur est intéressant si vous souhaitez valoriser vos déchets chez vous sans disposer de jardin. Prévoyez une place tempérée, à l'abri du soleil direct. Le modèle proposé localement mesure environ 50 cm de diamètre pour 60 cm de hauteur.

Le kit comprend les vers nécessaires au démarrage et une initiation obligatoire d'environ une heure. Commencez par de petites quantités de déchets végétaux coupés en morceaux, ajoutez du carton et augmentez progressivement les apports. Évitez les restes carnés, les aliments gras et les excès d'agrumes. Une mauvaise odeur peut signaler un apport trop important ou un déséquilibre.

Si vous partez régulièrement en vacances ou manquez de place, une solution collective peut être plus pratique.

## Composter avec ses voisins

Un projet dans les espaces communs d'une résidence nécessite l'accord de la copropriété et des habitants prêts à participer à son entretien. Bil Ta Garbi peut accompagner le groupe dans la mise en place et la formation des référents. Il existe également des projets à l'échelle des quartiers.

Pour demander un équipement, accéder aux formations ou contacter les personnes chargées du compostage partagé, retrouvez les démarches sur la [page consacrée au compostage de la Communauté Pays Basque](https://www.communaute-paysbasque.fr/dechets/je-composte-mes-biodechets).

## Les nouvelles bornes alimentaires: qui peut les utiliser ?

La collecte séparée ne demande pas de fabriquer du compost chez soi. Les déchets sont acheminés vers une installation qui produit du compost pour l'agriculture. Ce service cible certaines résidences collectives, et non l'ensemble des habitants des communes suivantes.

Le calendrier annoncé par la collectivité, actualisé le 12 novembre 2026, prévoit:

- Depuis le 5 octobre 2026: Ciboure, Hendaye, Saint-Jean-de-Luz et Urrugne.
- Fin 2027: Anglet, Biarritz et Bidart.
- Début 2028: Bayonne, Boucau et Saint-Pierre-d'Irube.

Les ménages concernés sont prévenus par courrier. Les bénéficiaires du sud du territoire qui n'ont pas récupéré leur seau peuvent notamment le retirer dans une déchèterie de leur secteur. Un récipient personnel convient également.

Contrairement au lombricomposteur, les bornes acceptent aussi les restes de repas carnés et les petits os. Retirez les emballages et ne déposez ni liquides, ni coquillages, ni déchets de jardin. Un morceau de papier absorbant au fond du récipient facilite son entretien.

Avant de vous déplacer vers une borne marron, vérifiez votre éligibilité auprès du service déchets au 05 59 57 00 00 ou consultez les [consignes officielles de collecte des déchets alimentaires](https://www.communaute-paysbasque.fr/dechets/la-collecte-des-dechets-alimentaires). Si votre résidence n'est pas desservie, les dispositifs de compostage restent les solutions à privilégier.


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
