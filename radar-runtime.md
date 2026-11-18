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
  "generatedAt": "2026-11-18T00:34:26+01:00",
  "dataThrough": "2026-11-15",
  "from": "2026-10-19",
  "refresh": [
    {
      "url": "/articles/parentalite/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes/",
      "title": "Maisons des 1000 premiers jours à Paris: deux adresses pour les parents et les bébés",
      "category": "parentalite",
      "publishedAt": "2026-11-09T06:06:02+01:00",
      "location": {
        "city": "Paris",
        "department": "Paris",
        "region": "Île-de-France"
      },
      "ageDays": 9,
      "rapidDrop": true,
      "peakStart": "2026-11-10",
      "peakEnd": "2026-11-12",
      "recentStart": "2026-11-13",
      "recentEnd": "2026-11-15",
      "peakImpressions": 64,
      "recentImpressions": 13,
      "score": 153,
      "signal": "coverage_loss",
      "basis": "Visibilité récente : 64 impressions sur trois jours, puis 13 sur les trois derniers jours consolidés; cause non établie. Baisse d'exposition sur les requêtes visibles (ratio 0.25), sans recul de classement comparable établi.",
      "commonQueries": 1,
      "positionDelta": 1,
      "impressionRatio": 0.25,
      "focusQueries": [
        "maison des 1000 premiers jours paris 20",
        "maison des 1000 premiers jours paris",
        "la maison des 1000 premiers jours paris",
        "maison des 1000 premiers jours paris 18"
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
      "ageDays": 23,
      "rapidDrop": true,
      "peakStart": "2026-10-26",
      "peakEnd": "2026-10-28",
      "recentStart": "2026-11-13",
      "recentEnd": "2026-11-15",
      "peakImpressions": 40,
      "recentImpressions": 6,
      "score": 137,
      "signal": "uncertain",
      "basis": "Visibilité récente : 40 impressions sur trois jours, puis 6 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "enfantillage valbonne 2026",
        "halloween 2026 valbonne"
      ]
    },
    {
      "url": "/articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/",
      "title": "Foire aux santons de Marseille 2026: dates, inauguration et visite en famille",
      "category": "evenements",
      "publishedAt": "2026-10-23T15:29:55.155Z",
      "location": {
        "city": "Marseille",
        "department": "Bouches-du-Rhône",
        "region": "Provence-Alpes-Côte d'Azur"
      },
      "ageDays": 26,
      "rapidDrop": true,
      "peakStart": "2026-10-24",
      "peakEnd": "2026-10-26",
      "recentStart": "2026-11-13",
      "recentEnd": "2026-11-15",
      "peakImpressions": 37,
      "recentImpressions": 10,
      "score": 81,
      "signal": "uncertain",
      "basis": "Visibilité récente : 37 impressions sur trois jours, puis 10 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "foire aux santons 2026",
        "calendrier foire aux santons 2026",
        "foire au santon 2026",
        "foires aux santons 2026"
      ]
    },
    {
      "url": "/articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/",
      "title": "Noël Gaulois 2026 au Parc Astérix: billets, glissades et spectacles en famille",
      "category": "evenements",
      "publishedAt": "2026-10-24T09:33:57.091Z",
      "location": {
        "city": "Plailly",
        "department": "Oise",
        "region": "Hauts-de-France"
      },
      "ageDays": 25,
      "rapidDrop": true,
      "peakStart": "2026-10-25",
      "peakEnd": "2026-10-27",
      "recentStart": "2026-11-13",
      "recentEnd": "2026-11-15",
      "peakImpressions": 24,
      "recentImpressions": 4,
      "score": 60,
      "signal": "uncertain",
      "basis": "Visibilité récente : 24 impressions sur trois jours, puis 4 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "focusQueries": [
        "noel gaulois 2026",
        "et le 1er janvier",
        "parc asterix decembre"
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
      "ageDays": 14,
      "rapidDrop": true,
      "peakStart": "2026-11-09",
      "peakEnd": "2026-11-11",
      "recentStart": "2026-11-13",
      "recentEnd": "2026-11-15",
      "peakImpressions": 20,
      "recentImpressions": 1,
      "score": 57,
      "signal": "uncertain",
      "basis": "Visibilité récente : 20 impressions sur trois jours, puis 1 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": []
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
      "ageDays": 20,
      "rapidDrop": true,
      "peakStart": "2026-11-01",
      "peakEnd": "2026-11-03",
      "recentStart": "2026-11-13",
      "recentEnd": "2026-11-15",
      "peakImpressions": 22,
      "recentImpressions": 7,
      "score": 45,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 22 impressions sur trois jours, puis 7 sur les trois derniers jours consolidés; cause non établie.",
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
      "url": "/articles/evenements/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/",
      "title": "Noël 2026 au château royal de Blois: décors, spectacles et tarifs en famille",
      "category": "evenements",
      "publishedAt": "2026-10-27T22:28:21.257Z",
      "location": {
        "city": "Blois",
        "department": "Loir-et-Cher",
        "region": "Centre-Val de Loire"
      },
      "ageDays": 22,
      "rapidDrop": true,
      "peakStart": "2026-10-28",
      "peakEnd": "2026-10-30",
      "recentStart": "2026-11-13",
      "recentEnd": "2026-11-15",
      "peakImpressions": 22,
      "recentImpressions": 7,
      "score": 45,
      "signal": "needs_query_check",
      "basis": "Visibilité récente : 22 impressions sur trois jours, puis 7 sur les trois derniers jours consolidés; cause non établie.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Noël château de Blois 2026",
        "Forêts Intérieures château royal de Blois",
        "Antonietta ou la forêt intérieure",
        "visite familiale Noël Blois tarifs"
      ]
    },
    {
      "url": "/articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/",
      "title": "Mini World Lyon: quel billet choisir en famille et combien de temps prévoir ?",
      "category": "bons-plans",
      "publishedAt": "2026-09-25T06:00:59+02:00",
      "location": {
        "city": "Vaulx-en-Velin",
        "department": "Rhône",
        "region": "Auvergne-Rhône-Alpes"
      },
      "ageDays": 54,
      "rapidDrop": false,
      "peakStart": "2026-10-19",
      "peakEnd": "2026-10-25",
      "recentStart": "2026-11-09",
      "recentEnd": "2026-11-15",
      "peakImpressions": 574,
      "recentImpressions": 197,
      "score": 377,
      "signal": "needs_query_check",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Mini World Lyon en famille",
        "Mini World Lyon tarifs"
      ]
    },
    {
      "url": "/articles/sorties/walibi-rhone-alpes-en-famille-quel-billet-choisir-selon-la-taille-des-enfants/",
      "title": "Walibi Rhône-Alpes en famille: attractions, tailles et billets en 2026",
      "category": "sorties",
      "publishedAt": "2026-09-22T11:00:15+02:00",
      "location": {
        "city": "Les Avenières Veyrins-Thuellin",
        "department": "Isère",
        "region": "Auvergne-Rhône-Alpes"
      },
      "ageDays": 57,
      "rapidDrop": false,
      "peakStart": "2026-10-24",
      "peakEnd": "2026-10-30",
      "recentStart": "2026-11-09",
      "recentEnd": "2026-11-15",
      "peakImpressions": 291,
      "recentImpressions": 43,
      "score": 248,
      "signal": "needs_query_check",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Walibi Rhône-Alpes en famille",
        "tarifs Walibi 2026"
      ]
    },
    {
      "url": "/articles/cuisine/ou-manger-des-fouees-en-famille-autour-de-saumur/",
      "title": "Où manger des fouées en famille autour de Saumur ?",
      "category": "cuisine",
      "publishedAt": "2026-10-11T18:36:52+02:00",
      "location": {
        "city": "Saumur",
        "department": "Maine-et-Loire",
        "region": "Pays de la Loire"
      },
      "ageDays": 38,
      "rapidDrop": false,
      "peakStart": "2026-10-23",
      "peakEnd": "2026-10-29",
      "recentStart": "2026-11-09",
      "recentEnd": "2026-11-15",
      "peakImpressions": 309,
      "recentImpressions": 181,
      "score": 128,
      "signal": "needs_query_check",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "fouées Saumur",
        "restaurant troglodytique Saumur",
        "fouées en famille",
        "restaurant famille Maine-et-Loire"
      ]
    },
    {
      "url": "/articles/sorties/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets/",
      "title": "Parc Spirou avec de jeunes enfants: regardez la taille avant d'acheter les billets",
      "category": "sorties",
      "publishedAt": "2026-09-03T04:04:27+02:00",
      "location": {
        "city": "Monteux",
        "department": "Vaucluse",
        "region": "Provence-Alpes-Côte d’Azur"
      },
      "ageDays": 76,
      "rapidDrop": false,
      "peakStart": "2026-10-22",
      "peakEnd": "2026-10-28",
      "recentStart": "2026-11-09",
      "recentEnd": "2026-11-15",
      "peakImpressions": 141,
      "recentImpressions": 17,
      "score": 124,
      "signal": "needs_query_check",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Parc Spirou enfants taille attractions",
        "Parc Spirou billets famille"
      ]
    },
    {
      "url": "/articles/maison/encombrants-a-bourges-quand-sortir-meubles-et-gros-objets/",
      "title": "Encombrants à Bourges: quand sortir meubles et gros objets",
      "category": "maison",
      "publishedAt": "2026-09-11T00:03:15+02:00",
      "location": {
        "city": "Bourges",
        "department": "Cher",
        "region": "Centre-Val de Loire"
      },
      "ageDays": 68,
      "rapidDrop": false,
      "peakStart": "2026-10-24",
      "peakEnd": "2026-10-30",
      "recentStart": "2026-11-09",
      "recentEnd": "2026-11-15",
      "peakImpressions": 149,
      "recentImpressions": 40,
      "score": 109,
      "signal": "needs_query_check",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "encombrants Bourges",
        "déchèterie Bourges"
      ]
    },
    {
      "url": "/articles/activites/la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite/",
      "title": "La Cité de la Mer à Cherbourg en famille: tarifs, visite et billets 2026",
      "category": "activites",
      "publishedAt": "2026-08-18T15:06:21+02:00",
      "location": {
        "city": "Cherbourg-en-Cotentin",
        "department": "Manche",
        "region": "Normandie"
      },
      "ageDays": 92,
      "rapidDrop": false,
      "peakStart": "2026-10-24",
      "peakEnd": "2026-10-30",
      "recentStart": "2026-11-09",
      "recentEnd": "2026-11-15",
      "peakImpressions": 109,
      "recentImpressions": 37,
      "score": 107,
      "signal": "needs_query_check",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Cité de la Mer Cherbourg famille",
        "activité famille Manche"
      ]
    },
    {
      "url": "/articles/sorties/reserve-africaine-de-sigean-combien-de-temps-prevoir-entre-safari-et-visite-a-pied/",
      "title": "Réserve Africaine de Sigean: combien de temps prévoir entre safari et visite à pied ?",
      "category": "sorties",
      "publishedAt": "2026-09-10T16:05:53+02:00",
      "location": {
        "city": "Sigean",
        "department": "Aude",
        "region": "Occitanie"
      },
      "ageDays": 69,
      "rapidDrop": false,
      "peakStart": "2026-10-23",
      "peakEnd": "2026-10-29",
      "recentStart": "2026-11-09",
      "recentEnd": "2026-11-15",
      "peakImpressions": 131,
      "recentImpressions": 31,
      "score": 100,
      "signal": "needs_query_check",
      "basis": "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "focusQueries": [
        "Réserve Africaine de Sigean avec enfants",
        "durée visite Réserve Africaine Sigean"
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
      "ageDays": 39,
      "rapidDrop": false,
      "peakStart": "2026-10-24",
      "peakEnd": "2026-10-30",
      "recentStart": "2026-11-09",
      "recentEnd": "2026-11-15",
      "peakImpressions": 177,
      "recentImpressions": 96,
      "score": 81,
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
      "url": "/articles/evenements/cirque-de-noel-2026-au-mans-horaires-tarifs-et-seance-a-choisir-avec-des-enfants/",
      "title": "Cirque de Noël 2026 au Mans: horaires, tarifs et séance à choisir avec des enfants",
      "category": "evenements",
      "recentImpressions": 219,
      "recentClicks": 11,
      "recentPosition": 7.283,
      "retention": 0.944
    },
    {
      "url": "/articles/evenements/noel-2026-a-quimper-en-famille-village-concert-ou-ateliers-gratuits/",
      "title": "Noël 2026 à Quimper en famille: village, concert et animations gratuites",
      "category": "evenements",
      "recentImpressions": 99,
      "recentClicks": 10,
      "recentPosition": 5.919,
      "retention": 99
    },
    {
      "url": "/articles/evenements/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales/",
      "title": "Fêtes de l’Ours 2027: quelle fête choisir en famille dans les Pyrénées-Orientales ?",
      "category": "evenements",
      "recentImpressions": 176,
      "recentClicks": 8,
      "recentPosition": 5.614,
      "retention": 1.023
    },
    {
      "url": "/articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/",
      "title": "Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille",
      "category": "evenements",
      "recentImpressions": 475,
      "recentClicks": 7,
      "recentPosition": 7.855,
      "retention": 0.54
    },
    {
      "url": "/articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/",
      "title": "Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille",
      "category": "evenements",
      "recentImpressions": 251,
      "recentClicks": 7,
      "recentPosition": 8.283,
      "retention": 1.402
    },
    {
      "url": "/articles/cuisine/ou-manger-des-fouees-en-famille-autour-de-saumur/",
      "title": "Où manger des fouées en famille autour de Saumur ?",
      "category": "cuisine",
      "recentImpressions": 181,
      "recentClicks": 5,
      "recentPosition": 12.309,
      "retention": 0.586
    },
    {
      "url": "/articles/vie-pratique/cantine-au-college-dans-le-pas-de-calais-les-tarifs-2026-et-les-reductions-pour-les-boursiers/",
      "title": "Cantine au collège dans le Pas-de-Calais: les tarifs 2026 et les réductions pour les boursiers",
      "category": "vie-pratique",
      "recentImpressions": 102,
      "recentClicks": 5,
      "recentPosition": 5.873,
      "retention": 0.703
    },
    {
      "url": "/articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/",
      "title": "Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite",
      "category": "sorties",
      "recentImpressions": 484,
      "recentClicks": 4,
      "recentPosition": 12.659,
      "retention": 1.551
    },
    {
      "url": "/articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/",
      "title": "Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël",
      "category": "evenements",
      "recentImpressions": 163,
      "recentClicks": 4,
      "recentPosition": 9.319,
      "retention": 0.849
    },
    {
      "url": "/articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/",
      "title": "Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates",
      "category": "vie-pratique",
      "recentImpressions": 156,
      "recentClicks": 4,
      "recentPosition": 6.981,
      "retention": 0.696
    }
  ],
  "excluded": {
    "expired": 187,
    "cooling": 75
  },
  "warnings": [
    "Diagnostics par requêtes : 5/5.",
    "Les baisses d'impressions ne prouvent ni désindexation ni perte de classement."
  ]
}

## Catalogue ciblé (doublons et publications récentes)

### Articles comparables et publications récentes

- /articles/parentalite/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes/ | Maisons des 1000 premiers jours à Paris: deux adresses pour les parents et les bébés | parentalite | Paris, Paris, Île-de-France
- /articles/evenements/ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans/ | Écoute, je danse ! à Paris le 5 décembre 2026: spectacle gratuit dès 6 mois | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | Vacances de la Toussaint 2026 à la Cité des sciences: les ateliers numériques gratuits avec des enfants | sorties | Paris, Paris, Île-de-France
- /articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/ | Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite | sorties | Paris, Paris, Île-de-France
- /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | Festival Enfantillages 2026 à Valbonne: spectacles gratuits et cinéma en famille | evenements | Valbonne, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/festival-au-bonheur-des-momes-2026-en-famille/ | Au Bonheur des Mômes 2026: pass, spectacles et journée au Grand-Bornand | evenements | Le Grand-Bornand, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | Festival MARMOE 2026 à Montreuil: spectacles, ateliers et sorties jusqu'au 29 novembre | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/rue-enfants-montcuq-2026-famille/ | La Rue des Enfants 2026 à Montcuq: deux jours d’arts de rue en famille | evenements | Montcuq-en-Quercy-Blanc, Lot, Occitanie
- /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | Foire aux santons de Marseille 2026: horaires et visite en famille | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/herofestival-marseille-2026-en-famille-billets-gratuite-enfants-et-conseils/ | HeroFestival Marseille 2026 en famille: billets, gratuité enfants et conseils | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | Foire du livre de Brive 2026 en famille: dates, auteurs jeunesse et conseils de visite | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine
- /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | Fête de la mer 2026 à Marseille avec des enfants: quelle escale choisir? | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | Noël Gaulois 2026 au Parc Astérix: billets, spectacles et extras en famille | evenements | Plailly, Oise, Hauts-de-France
- /articles/voyages/parc-asterix-en-famille-en-2026-une-ou-deux-journees-quel-hotel-et-quel-budget-prevoir/ | Parc Astérix en famille en 2026: une ou deux journées, quel hôtel et quel budget prévoir | voyages | Plailly, Oise, Hauts-de-France
- /articles/voyages/peur-sur-le-parc-2026-en-famille-journee-nocturne-billets-et-hebergement/ | Peur sur le Parc 2026 en famille: journée, nocturne, billets et hébergement | voyages | Plailly, Oise, Hauts-de-France
- /articles/evenements/chambly-kids-festival-2027-quatre-spectacles-pour-les-enfants-dates-et-ages/ | Chambly Kids Festival 2027: quatre spectacles pour les enfants, dates et âges | evenements | Chambly, Oise, Hauts-de-France
- /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | Atelier couture gratuit à Paris le 28 novembre 2026: dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-laine-cardee-de-noel-a-paris-le-2-decembre-2026-creer-ses-decorations-des-7-ans/ | Atelier laine cardée de Noël à Paris le 2 décembre 2026: décorations dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | Atelier Pokémon et biodiversité à Paris le 28 novembre 2026: dessin dès 10 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | Marché de Noël 100 % Côte-d’Or à Dijon 2026: horaires, spectacles et Père Noël | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | Festival des Petits Explorateurs 2026 à Dijon: ateliers, horaires et tarifs | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | Foire de Dijon 2026 avec les enfants: gratuités, ateliers et Ferme Côte-d'Or | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/vie-pratique/frais-scolaires-en-cote-d-or-quelles-aides-demander-au-departement/ | Frais scolaires en Côte-d'Or: quelles aides demander au Département? | vie-pratique | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/ | Noël 2026 au château royal de Blois: décors, spectacles et tarifs en famille | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | Noël au château de Cheverny 2026: billets, mapping et animations en famille | evenements | Cheverny, Loir-et-Cher, Centre-Val de Loire
- /articles/sorties/chateau-de-chambord-en-famille-tarifs-2026-activites-et-conseils-de-visite/ | Château de Chambord en famille: tarifs 2026, activités et conseils de visite | sorties | Chambord, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | Noël à Chenonceau 2026: décors, nocturnes et tarifs en famille | evenements | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/ | Mini World Lyon: quel billet choisir en famille et combien de temps prévoir ? | bons-plans | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | Halloween 2026 à Mini World Lyon: la Chasse aux 31 Méchants en famille | evenements | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/sorties/chateau-de-kerjean-avec-des-enfants-combien-de-temps-prevoir-et-quel-billet-choisir/ | Château de Kerjean avec des enfants: combien de temps prévoir et quel billet choisir? | sorties | Saint-Vougay, Finistère, Bretagne
- /articles/voyages/paleosite-de-saint-cesaire-en-famille-combien-de-temps-prevoir-en-2026/ | Paléosite de Saint-Césaire en famille: combien de temps prévoir en 2026? | voyages | Saint-Césaire, Charente-Maritime, Nouvelle-Aquitaine
- /articles/sorties/walibi-rhone-alpes-en-famille-quel-billet-choisir-selon-la-taille-des-enfants/ | Walibi Rhône-Alpes en famille: attractions, tailles et billets en 2026 | sorties | Les Avenières Veyrins-Thuellin, Isère, Auvergne-Rhône-Alpes
- /articles/sorties/fraispertuis-city-en-famille-tarifs-2026-tailles-et-conseils-de-visite/ | Fraispertuis City en famille: tarifs 2026, tailles et conseils de visite | sorties | Jeanménil, Vosges, Grand Est
- /articles/activites/festyland-avec-de-jeunes-enfants-quelles-attractions-selon-leur-taille/ | Festyland avec de jeunes enfants: quelles attractions selon leur taille? | activites | Carpiquet, Calvados, Normandie
- /articles/sorties/parc-bagatelle-en-famille-quelles-attractions-selon-la-taille-des-enfants/ | Parc Bagatelle en famille: quelles attractions selon la taille des enfants? | sorties | Merlimont, Pas-de-Calais, Hauts-de-France
- /articles/cuisine/ou-manger-des-fouees-en-famille-autour-de-saumur/ | Où manger des fouées en famille autour de Saumur ? | cuisine | Saumur, Maine-et-Loire, Pays de la Loire
- /articles/parentalite/laep-en-maine-et-loire-ou-aller-avec-son-bebe-et-comment-se-passe-l-accueil/ | LAEP en Maine-et-Loire: où aller avec son bébé et comment se passe l'accueil ? | parentalite | Maine-et-Loire, Pays de la Loire
- /articles/sorties/chasse-tresor-galerie-david-angers-2026/ | Chasse au trésor à Angers: les 4 à 6 ans enquêtent à la Galerie David | sorties | Angers, Maine-et-Loire, Pays de la Loire
- /articles/sorties/chateau-de-boutheon-avec-des-enfants-chateau-parc-ou-billet-couple/ | Château de Bouthéon avec des enfants: château, parc ou billet couplé? | sorties | Andrézieux-Bouthéon, Loire, Auvergne-Rhône-Alpes
- /articles/sorties/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets/ | Parc Spirou avec de jeunes enfants: regardez la taille avant d'acheter les billets | sorties | Monteux, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | Halloween 2026 au Parc Spirou: billets, nocturnes Naruto et maison hantée | evenements | Monteux, Vaucluse, Provence-Alpes-Côte d'Azur
- /articles/maison/encombrants-a-bourges-quand-sortir-meubles-et-gros-objets/ | Encombrants à Bourges: quand sortir meubles et gros objets | maison | Bourges, Cher, Centre-Val de Loire
- /articles/voyages/bourges-en-famille-ou-dormir-pour-visiter-sans-voiture/ | Bourges en famille: où dormir pour visiter sans voiture | voyages | Bourges, Cher, Centre-Val de Loire
- /articles/vie-pratique/carte-famille-de-bourges-qui-peut-l-obtenir-et-a-quoi-sert-elle/ | Carte famille de Bourges: qui peut l'obtenir et à quoi sert-elle? | vie-pratique | Bourges, Cher, Centre-Val de Loire
- /articles/bons-plans/bourges-en-famille-a-petit-budget-musees-cathedrale-et-jardins/ | Bourges en famille à petit budget: musées, cathédrale et jardins | bons-plans | Bourges, Cher, Centre-Val de Loire
- /articles/activites/la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite/ | La Cité de la Mer à Cherbourg en famille: tarifs, visite et billets 2026 | activites | Cherbourg-en-Cotentin, Manche, Normandie
- /articles/vie-pratique/spot50-2026-2027-dans-la-manche-75-d-activites-pour-5/ | SPOT50 2026/2027 dans la Manche: 75 € d'activités pour 5 € | vie-pratique | Saint-Lô, Manche, Normandie
- /articles/parentalite/rejouets-a-cerences-donner-completer-et-acheter-des-jouets-d-occasion/ | Rejouets à Cérences: donner, compléter et acheter des jouets d’occasion | parentalite | Cérences, Manche, Normandie
- /articles/maison/renover-une-maison-dans-la-manche-dans-quel-ordre-demander-les-aides-en-2026/ | Rénover une maison dans la Manche: dans quel ordre demander les aides en 2026 ? | maison | Saint-Lô, Manche, Normandie
- /articles/sorties/reserve-africaine-de-sigean-combien-de-temps-prevoir-entre-safari-et-visite-a-pied/ | Réserve Africaine de Sigean: combien de temps prévoir entre safari et visite à pied ? | sorties | Sigean, Aude, Occitanie
- /articles/activites/micropolis-avec-de-jeunes-enfants-combien-de-temps-prevoir-et-quoi-emporter/ | Micropolis avec de jeunes enfants: combien de temps prévoir et quoi emporter? | activites | Saint-Léons, Aveyron, Occitanie
- /articles/activites/vallee-des-singes-a-romagne-combien-de-temps-prevoir-pour-la-visite/ | Vallée des Singes à Romagne: combien de temps prévoir pour la visite? | activites | Romagne, Vienne, Nouvelle-Aquitaine
- /articles/activites/zoo-de-martinique-en-famille-tarifs-poussette-et-visite-de-l-habitation-latouche/ | Zoo de Martinique en famille: tarifs, poussette et visite de l'Habitation Latouche | activites | Le Carbet, Martinique, Martinique
- /articles/activites/habitation-clement-en-famille-sculptures-jardin-et-maison-creole/ | Habitation Clément en famille: sculptures, jardin et maison créole | activites | Le François, Martinique, Martinique
- /articles/voyages/ou-loger-en-martinique-avec-des-enfants-sainte-luce-trois-ilets-ou-le-diamant/ | Où loger en Martinique avec des enfants: Sainte-Luce, Trois-Ilets ou Le Diamant? | voyages | Sainte-Luce, Martinique, Martinique
- /articles/activites/parc-zoo-du-reynou-avec-des-enfants-billet-date-poussette-ou-journee-complete/ | Parc Zoo du Reynou avec des enfants: billet daté, poussette ou journée complète? | activites | Le Vigen, Haute-Vienne, Nouvelle-Aquitaine
- /articles/evenements/cirque-de-noel-2026-au-mans-horaires-tarifs-et-seance-a-choisir-avec-des-enfants/ | Cirque de Noël 2026 au Mans: horaires, tarifs et séance à choisir avec des enfants | evenements | Le Mans, Sarthe, Pays de la Loire
- /articles/voyages/le-mans-sans-voiture-avec-des-enfants-ou-dormir-et-comment-organiser-un-week-end/ | Le Mans sans voiture avec des enfants: où dormir et comment organiser un week-end | voyages | Le Mans, Sarthe, Pays de la Loire
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires, Père Noël et animations | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-2026-a-quimper-en-famille-village-concert-ou-ateliers-gratuits/ | Noël 2026 à Quimper en famille: village, concert et animations gratuites | evenements | Quimper, Finistère, Bretagne
- /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | Noël 2026 à Paris La Défense en famille: marché, animations et patinoire | evenements | Puteaux, Hauts-de-Seine, Île-de-France
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales/ | Fêtes de l’Ours 2027: quelle fête choisir en famille dans les Pyrénées-Orientales ? | evenements | Pyrénées-Orientales, Occitanie
- /articles/parentalite/quel-laep-choisir-a-perpignan-selon-l-age-et-le-jour/ | Quel LAEP choisir à Perpignan selon l'âge et le jour ? | parentalite | Perpignan, Pyrénées-Orientales, Occitanie
- /articles/activites/parc-animalier-des-angles-en-famille-quel-circuit-choisir-et-comment-preparer-la-visite/ | Parc animalier des Angles en famille: quel circuit choisir et comment préparer la visite ? | activites | Les Angles, Pyrénées-Orientales, Occitanie
- /articles/bons-plans/musee-de-tautavel-moins-cher-avec-lio-le-bon-plan-a-connaitre/ | Musée de Tautavel moins cher avec liO: le bon plan à connaître | bons-plans | Tautavel, Pyrénées-Orientales, Occitanie
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | Thoiry Lumières Sauvages 2026-2027: dates, billets et visite en famille | evenements | Thoiry, Yvelines, Île-de-France
- /articles/sorties/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/ | Planète Préhistorique à Bordeaux: dates, durée et tarifs en famille | sorties | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | Noël à Caen 2026 en famille: marché de Noël et visite illuminée | evenements | Caen, Calvados, Normandie
- /articles/vie-pratique/cantine-au-college-dans-le-pas-de-calais-les-tarifs-2026-et-les-reductions-pour-les-boursiers/ | Cantine au collège dans le Pas-de-Calais: les tarifs 2026 et les réductions pour les boursiers | vie-pratique | Hénin-Beaumont, Pas-de-Calais, Hauts-de-France
- /articles/bons-plans/cantine-au-college-dans-l-herault-jusqu-a-3-60-d-aide-par-repas/ | Cantine au collège dans l'Hérault: jusqu'à 3,60 € d'aide par repas | bons-plans | Montpellier, Hérault, Occitanie
- /articles/vie-pratique/cantine-au-college-en-deux-sevres-comment-s-inscrire-en-ligne-pour-2026-2027/ | Cantine au collège en Deux-Sèvres: comment s'inscrire en ligne pour 2026-2027 | vie-pratique | Niort, Deux-Sèvres, Nouvelle-Aquitaine
- /articles/vie-pratique/cantine-au-college-en-essonne-obtenir-son-tarif-2026-2027-sans-refaire-la-mauvaise-demarche/ | Cantine au collège en Essonne: obtenir son tarif 2026-2027 sans refaire la mauvaise démarche | vie-pratique | Évry-Courcouronnes, Essonne, Île-de-France
- /articles/activites/stages-de-science-a-la-cite-des-sciences-pendant-la-toussaint-2026-lequel-choisir-selon-l-age/ | Stages de science à la Cité des sciences à la Toussaint 2026: durées, âges et tarifs | activites | Paris, Paris, Île-de-France
- /articles/evenements/rencontres-du-ciel-et-de-l-espace-2026-a-paris-que-choisir-avec-des-enfants/ | Rencontres du ciel et de l’espace 2026 à Paris: ateliers, âges et billets en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/maison/composteur-gratuit-a-angers-loire-metropole-qui-peut-le-demander/ | Composteur gratuit à Angers Loire Métropole: qui peut le demander? | maison | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | Monument Jeu d’Enfant au château d’Angers: dragons et ateliers le 17 octobre 2026 | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/vie-pratique/garde-d-enfants-sur-horaires-atypiques-a-angers-qui-peut-demander-l-aide-du-ccas/ | Garde d'enfants sur horaires atypiques à Angers: qui peut demander l'aide du CCAS? | vie-pratique | Angers, Maine-et-Loire, Pays de la Loire
- /articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/ | Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates | vie-pratique | Toulouse, Haute-Garonne, Occitanie
- /articles/maison/moustique-tigre-en-haute-garonne-proteger-la-maison-et-le-jardin/ | Moustique tigre en Haute-Garonne: protéger la maison et le jardin | maison | Toulouse, Haute-Garonne, Occitanie
- /articles/voyages/les-rousses-en-hiver-avec-des-enfants-ski-luge-et-sorties-sans-neige/ | Les Rousses en hiver avec des enfants: ski, luge et sorties sans neige | voyages | Jura, Bourgogne-Franche-Comté
- /articles/maison/meubles-d-occasion-en-ile-de-france-ou-acheter-et-comment-les-transporter/ | Meubles d’occasion en Île-de-France: où acheter et comment les transporter | maison | Île-de-France
- /articles/vie-pratique/montlouis-sur-loire-emprunter-jeux-liseuses-et-objets-a-la-mediatheque/ | Montlouis-sur-Loire: emprunter jeux, liseuses et objets à la médiathèque | vie-pratique | Montlouis-sur-Loire, Indre-et-Loire, Centre-Val de Loire
- /articles/bons-plans/langres-en-famille-deux-musees-gratuits-le-premier-dimanche-du-mois/ | Langres en famille: deux musées gratuits le premier dimanche du mois | bons-plans | Langres, Haute-Marne, Grand Est
- /articles/vie-pratique/aeroport-de-lille-avec-des-enfants-preparer-le-depart-jusqu-a-l-embarquement/ | Aéroport de Lille avec des enfants: préparer le départ jusqu’à l’embarquement | vie-pratique | Lesquin, Nord, Hauts-de-France
- /articles/evenements/musee-maurice-denis-en-famille-decouvrir-les-nabis-a-saint-germain-en-laye/ | Musée Maurice Denis en famille: découvrir les Nabis à Saint-Germain-en-Laye | evenements | Saint-Germain-en-Laye, Yvelines, Île-de-France
- /articles/cuisine/roquefort-en-famille-visiter-les-caves-et-le-cuisiner-avec-les-enfants/ | Roquefort en famille: visiter les caves et le cuisiner avec les enfants | cuisine | Roquefort-sur-Soulzon, Aveyron, Occitanie
- /articles/activites/un-dimanche-a-cacao-en-famille-marche-hmong-insectes-et-poterie/ | Un dimanche à Cacao en famille: marché hmong, insectes et poterie | activites | Roura, Guyane, Guyane
- /articles/sorties/chauvigny-en-famille-cite-medievale-et-deux-chasses-aux-tresors/ | Chauvigny en famille: cité médiévale et deux chasses aux trésors | sorties | Chauvigny, Vienne, Nouvelle-Aquitaine
- /articles/vie-pratique/ludotheque-ricochet-a-sainte-sigolene-jouer-et-emprunter-en-famille/ | Ludothèque Ricochet à Sainte-Sigolène: jouer et emprunter en famille | vie-pratique | Sainte-Sigolène, Haute-Loire, Auvergne-Rhône-Alpes
- /articles/activites/parc-du-moulin-a-tan-a-sens-une-sortie-nature-gratuite-en-famille/ | Parc du Moulin à Tan à Sens: une sortie nature gratuite en famille | activites | Sens, Yonne, Bourgogne-Franche-Comté
- /articles/cuisine/petit-epeautre-du-ventoux-quatre-idees-pour-le-cuisiner-en-famille/ | Petit épeautre du Ventoux: quatre idées pour le cuisiner en famille | cuisine | Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/carnaval-de-guadeloupe-2027-preparer-une-premiere-sortie-avec-ses-enfants/ | Carnaval de Guadeloupe 2027: préparer une première sortie avec ses enfants | evenements | Guadeloupe
- /articles/sorties/chateau-de-la-motte-tilly-en-famille-visite-jeu-de-piste-et-parc-gratuit/ | Château de La Motte-Tilly en famille: visite, jeu de piste et parc gratuit | sorties | La Motte-Tilly, Aube, Grand Est
- /articles/activites/nuits-de-branfere-2026-preparer-une-sortie-en-famille-dans-le-morbihan/ | Nuits de Branféré 2026: préparer une sortie en famille dans le Morbihan | activites | Le Guerno, Morbihan, Bretagne
- /articles/voyages/lac-du-der-en-famille-observer-les-grues-en-automne-et-en-hiver/ | Lac du Der en famille: observer les grues en automne et en hiver | voyages | Grand Est
- /articles/parentalite/laep-dans-le-tarn-ou-aller-avec-son-enfant/ | LAEP dans le Tarn: où aller avec son enfant ? | parentalite | Tarn, Occitanie
- /articles/cuisine/madeleines-de-saint-yrieix-une-recette-a-faire-avec-les-enfants/ | Madeleines de Saint-Yrieix: une recette à faire avec les enfants | cuisine | Saint-Yrieix-la-Perche, Haute-Vienne, Nouvelle-Aquitaine
- /articles/sorties/musee-de-la-musique-mecanique-aux-gets-une-sortie-en-famille-qui-s-ecoute/ | Musée de la Musique Mécanique aux Gets: une sortie en famille qui s'écoute | sorties | Les Gets, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/sorties/mariana-en-famille-du-musee-aux-vestiges-de-la-cite-antique/ | Mariana en famille: du musée aux vestiges de la cité antique | sorties | Lucciana, Haute-Corse, Corse
- /articles/vie-pratique/cabanes-des-1-000-premiers-jours-en-seine-saint-denis-ou-aller-avec-son-enfant/ | Cabanes des 1 000 premiers jours en Seine-Saint-Denis: où aller avec son enfant ? | vie-pratique | Seine-Saint-Denis, Île-de-France
- /articles/parentalite/lieux-d-accueil-enfants-parents-dans-le-var-ou-aller-avec-son-enfant/ | Lieux d'accueil enfants-parents dans le Var: où aller avec son enfant ? | parentalite | Var, Provence-Alpes-Côte d’Azur
- /articles/parentalite/cafes-parents-enfants-dans-le-finistere-deux-adresses-pour-jouer-et-faire-une-pause/ | Cafés parents-enfants dans le Finistère: deux adresses pour jouer et faire une pause | parentalite | Finistère, Bretagne
- /articles/evenements/niepce-et-apres-une-exposition-photo-a-decouvrir-en-famille-a-chalon-sur-saone/ | Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône | evenements | Chalon-sur-Saône, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/voyages/voie-verte-sud-ardennes-en-famille-quelle-balade-a-velo-choisir/ | Voie verte Sud-Ardennes en famille: quelle balade à vélo choisir ? | voyages | Ardennes, Grand Est
- /articles/cuisine/a-beaune-fabriquer-sa-moutarde-en-famille-et-l-utiliser-en-cuisine/ | À Beaune, fabriquer sa moutarde en famille et l’utiliser en cuisine | cuisine | Beaune, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/parentalite/parents-en-deux-sevres-ou-trouver-une-ecoute-et-un-accompagnement/ | Parents en Deux-Sèvres: où trouver une écoute et un accompagnement ? | parentalite | Deux-Sèvres, Nouvelle-Aquitaine
- /articles/maison/a-crest-amenager-sa-maison-avec-la-chignole/ | À Crest, aménager sa maison avec La Chignole | maison | Crest, Drôme, Auvergne-Rhône-Alpes

### Historique Radar lié

- refresh | /articles/parentalite/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes/ | 2026-11-18T05:37:16.469Z
- opportunity | /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | 2026-10-29T14:26:32.277Z
- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- refresh | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-11-17T22:37:09.520Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- refresh | /articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/ | 2026-11-02T16:35:39.647Z
- refresh | /articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/ | 2026-11-18T11:35:44.875Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | 2026-10-10T08:38:56.921Z
- opportunity | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-10-24T12:31:27.784Z
- refresh | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-11-13T22:32:33.388Z
- opportunity | /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | 2026-11-01T01:35:08.448Z
- opportunity | /articles/evenements/noel-2026-a-quimper-en-famille-village-concert-ou-ateliers-gratuits/ | 2026-11-01T18:35:45.871Z
- refresh | /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | 2026-11-15T12:33:21.761Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | 2026-10-23T19:58:30.214Z
- refresh | /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | 2026-11-13T19:31:25.370Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/ | 2026-10-27T22:28:21.356Z
- opportunity | /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | 2026-10-30T21:26:32.584Z
- opportunity | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-10-30T18:26:56.039Z
- refresh | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-11-17T09:28:43.094Z
- opportunity | /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | 2026-10-24T09:33:57.174Z
- refresh | /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | 2026-11-18T08:32:35.637Z
- refresh | /articles/sorties/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/ | 2026-10-22T18:35:19.372Z
- opportunity | /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | 2026-11-05T10:32:54.471Z
- opportunity | /articles/evenements/rencontres-du-ciel-et-de-l-espace-2026-a-paris-que-choisir-avec-des-enfants/ | 2026-11-04T05:34:42.508Z
- refresh | /articles/sorties/reserve-africaine-de-sigean-combien-de-temps-prevoir-entre-safari-et-visite-a-pied/ | 2026-10-02T18:25:59.965Z
- opportunity | /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | 2026-10-30T12:36:12.349Z
- opportunity | /articles/activites/stages-de-science-a-la-cite-des-sciences-pendant-la-toussaint-2026-lequel-choisir-selon-l-age/ | 2026-10-04T05:39:23.036Z
- opportunity | /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | 2026-10-24T19:30:32.700Z
- refresh | /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | 2026-11-13T16:33:40.259Z
- opportunity | /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | 2026-10-05T11:24:52.310Z

## Travaux éditoriaux en cours

### Publication en cours

- Branche: automation/publication-20261118-1304-titre-de-travail-demarches-administratives-en-charente-ou-trouver-une-
- HEAD: publication: phase 3 20261118-1304-titre-de-travail-demarches-administratives-en-charente-ou-trouver-une-

---
category: "vie-pratique"
title: "France services en Charente: où obtenir de l'aide pour ses démarches administratives ?"
subtitle: "Guichets de proximité, bus itinérants et conseils pour préparer sa visite"
summary: "CAF, assurance maladie, papiers d'identité: découvrez comment trouver un accueil France services gratuit en Charente, y compris dans les communes rurales."
keywords:
  - "France services Charente"
  - "aide démarches administratives Charente"
  - "bus France services Charente"
location:
  department: "Charente"
  region: "Nouvelle-Aquitaine"
sources:
  - title: "Préfecture de la Charente - Maisons France services"
    url: "https://www.charente.gouv.fr/Actions-de-l-Etat/Amenagement-du-territoire-batiment-durable-accessibilite/Maisons-France-Services/Maisons-France-Services"
  - title: "France services - Trouver un accueil"
    url: "https://www.france-services.gouv.fr/recherche"
  - title: "France services - Démarches et services"
    url: "https://www.france-services.gouv.fr/demarches-et-services"
  - title: "France services - Bus d'accès aux droits Charente"
    url: "https://www.france-services.gouv.fr/le-reseau/bus-france-services-dacces-aux-droits-charente"
  - title: "France services - Questions fréquentes"
    url: "https://www.france-services.gouv.fr/notre-mission/questions-frequentes"
  - title: "Préfecture de la Charente - Carte nationale d'identité"
    url: "https://www.charente.gouv.fr/Demarches/Carte-nationale-d-identite"
---

Un dossier CAF à compléter, un compte Ameli inaccessible ou une demande de carte grise qui bloque ? En Charente, les accueils France services permettent de rencontrer gratuitement un conseiller pour avancer dans ses démarches administratives, sans devoir tout résoudre seul sur Internet. Le réseau comprend aussi des bus qui se déplacent dans les communes rurales.

## Où trouver un accueil France services en Charente ?

Au 1er septembre 2026, la [préfecture de la Charente recensait 38 structures labellisées, dont deux bus itinérants](https://www.charente.gouv.fr/Actions-de-l-Etat/Amenagement-du-territoire-batiment-durable-accessibilite/Maisons-France-Services/Maisons-France-Services). Ce chiffre décrit le réseau à cette date et peut évoluer.

Pour trouver le lieu le plus pratique, saisissez votre commune ou votre code postal dans l'[annuaire officiel France services](https://www.france-services.gouv.fr/recherche). Les fiches donnent l'adresse, les coordonnées et les horaires. Vous pouvez choisir un accueil en dehors de votre commune de résidence.

Le bon choix n'est pas forcément le guichet le plus proche: si vous devez faire une démarche particulière, appelez d'abord pour vérifier qu'un conseiller pourra vous accompagner et connaître les documents nécessaires.

## Quelles démarches peut-on faire avec un conseiller ?

Les conseillers aident à comprendre un courrier, à créer ou utiliser un compte en ligne, à remplir une demande et à transmettre des pièces. Ils peuvent aussi vous orienter vers le bon organisme ou prendre contact avec un interlocuteur partenaire si le dossier est complexe.

Pour une famille, cela peut notamment concerner:

- **CAF:** simulation d'aide au logement, demande de prime d'activité, déclaration de ressources, changement de situation ou démarches après une naissance.
- **Assurance maladie:** utilisation du compte Ameli et démarches relatives aux remboursements de soins.
- **France Titres:** accompagnement pour certaines démarches liées aux permis de conduire, cartes grises et papiers d'identité.
- **Impôts et emploi:** aide pour accéder à son espace fiscal ou aux services en ligne de France Travail.
- **Autres besoins:** retraite, chèque énergie, rénovation du logement ou orientation vers un point-justice.

La [liste officielle des démarches accompagnées](https://www.france-services.gouv.fr/demarches-et-services) détaille les possibilités auprès des douze partenaires nationaux.

Attention: **être accompagné ne signifie pas obtenir automatiquement une aide ou un document**. La CAF, l'Assurance maladie, France Titres ou l'administration concernée restent responsables des décisions sur les dossiers. Pour une carte d'identité ou un passeport, l'aide à la pré-demande ne remplace pas le dépôt du dossier dans un lieu équipé d'un dispositif de recueil. La [préfecture précise les modalités en Charente](https://www.charente.gouv.fr/Demarches/Carte-nationale-d-identite).

## Des bus pour les habitants des communes rurales

Le [bus France services d'accès aux droits de Charente](https://www.france-services.gouv.fr/le-reseau/bus-france-services-dacces-aux-droits-charente) annonce des passages à Nersac, Brillac, Alloue, Brigueuil, Touvérac, Condéon et Vouzan. Les lieux indiqués comprennent notamment des places de village, des parkings de mairie et, à Touvérac, le parking d'Intermarché.

Ces permanences évitent à certains habitants de rejoindre Angoulême ou une autre ville pour une première aide administrative. Les circuits et horaires pouvant changer, vérifiez le passage prévu avant de vous déplacer, surtout si vous venez avec des enfants.

Pour ce bus, la fiche officielle indique le **05 16 09 50 60** et l'adresse **bus-departement-charente@france-services.gouv.fr**. Le département compte également un second bus: utilisez l'annuaire pour repérer les permanences correspondant à votre secteur.

## Gratuit, avec ou sans rendez-vous ?

L'[accompagnement par un conseiller France services est gratuit](https://www.france-services.gouv.fr/notre-mission/questions-frequentes). Il ne faut donc pas payer un intermédiaire pour accéder à cette aide.

L'accueil général est proposé sans rendez-vous, mais certaines démarches plus longues ou permanences particulières peuvent nécessiter de convenir d'un créneau. Un appel préalable permet d'éviter un trajet inutile. Les frais éventuellement liés à la démarche elle-même, comme un timbre fiscal, sont distincts de l'accompagnement gratuit.

## Comment préparer sa visite ?

Commencez par identifier précisément ce qui bloque: courrier incompris, pièce manquante, mot de passe perdu ou demande à déposer. En fonction du dossier, le conseiller pourra vous demander une pièce d'identité, un numéro d'allocataire ou de sécurité sociale, un courrier reçu, des justificatifs de revenus ou de domicile.

Prenez les documents utiles et, si possible, votre téléphone pour recevoir les codes de connexion. Ne communiquez jamais votre mot de passe par message à un prétendu conseiller. Si vous ne savez pas quoi apporter, téléphonez à l'accueil avant de partir: les pièces varient selon l'organisme et la démarche.

Même sans ordinateur personnel, un accueil France services peut mettre à disposition du matériel pour effectuer des démarches en ligne, numériser ou imprimer des documents nécessaires. L'objectif est de vous aider à faire avancer le dossier et à comprendre la suite, pas simplement de vous renvoyer vers un site Internet.


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
