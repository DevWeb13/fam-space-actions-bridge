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
  "generatedAt": "2026-11-07T02:32:02+01:00",
  "dataThrough": "2026-11-04",
  "from": "2026-10-08",
  "refresh": [
    {
      "url": "/articles/bons-plans/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/",
      "title": "Navigo Liberté+ en famille: tarifs enfants et choix du passe en 2026",
      "category": "bons-plans",
      "publishedAt": "2026-10-25T10:33:29.977Z",
      "ageDays": 13,
      "peakStart": "2026-10-27",
      "peakEnd": "2026-10-29",
      "recentStart": "2026-11-02",
      "recentEnd": "2026-11-04",
      "peakImpressions": 173,
      "recentImpressions": 51,
      "score": 366,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "basis": "Visibilité récente : 173 impressions sur trois jours, puis 51 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "location": {
        "city": "Paris",
        "department": "Paris",
        "region": "Île-de-France"
      },
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
      "ageDays": 14,
      "peakStart": "2026-10-25",
      "peakEnd": "2026-10-27",
      "recentStart": "2026-11-02",
      "recentEnd": "2026-11-04",
      "peakImpressions": 76,
      "recentImpressions": 1,
      "score": 225,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "basis": "Visibilité récente : 76 impressions sur trois jours, puis 1 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "location": {
        "city": "Ouistreham",
        "department": "Calvados",
        "region": "Normandie"
      },
      "focusQueries": [
        "durée traversée ouistreham portsmouth",
        "traversée ouistreham angleterre",
        "bateau ouistreham angleterre",
        "brittany ferries ouistreham",
        "car ferry ouistreham"
      ]
    },
    {
      "url": "/articles/bons-plans/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/",
      "title": "Château de Champs-sur-Marne en famille: gratuités, tarifs et dates à éviter",
      "category": "bons-plans",
      "publishedAt": "2026-10-18T20:18:29+02:00",
      "ageDays": 20,
      "peakStart": "2026-10-30",
      "peakEnd": "2026-11-01",
      "recentStart": "2026-11-02",
      "recentEnd": "2026-11-04",
      "peakImpressions": 79,
      "recentImpressions": 17,
      "score": 186,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0.25,
      "basis": "Visibilité récente : 79 impressions sur trois jours, puis 17 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "location": {
        "city": "Champs-sur-Marne",
        "department": "Seine-et-Marne",
        "region": "Île-de-France"
      },
      "focusQueries": [
        "chateau champs sur marne gratuit dimanche",
        "château champs-sur-marne gratuit dimanche"
      ]
    },
    {
      "url": "/articles/maison/dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage/",
      "title": "Déchets verts à Toulouse Métropole en 2027: collecte, broyage et compostage",
      "category": "maison",
      "publishedAt": "2026-10-15T19:13:56+02:00",
      "ageDays": 23,
      "peakStart": "2026-10-18",
      "peakEnd": "2026-10-20",
      "recentStart": "2026-11-02",
      "recentEnd": "2026-11-04",
      "peakImpressions": 83,
      "recentImpressions": 25,
      "score": 174,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "basis": "Visibilité récente : 83 impressions sur trois jours, puis 25 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "location": {
        "city": "Toulouse",
        "department": "Haute-Garonne",
        "region": "Occitanie"
      },
      "focusQueries": [
        "collecte déchets verts toulouse",
        "calendrier collecte déchets verts toulouse métropole 2026",
        "calendrier ramassage déchets verts toulouse 2026",
        "collecte dechet vert toulouse",
        "enlèvement déchets verts gratuit toulouse"
      ]
    },
    {
      "url": "/articles/sorties/chateau-fort-de-sedan-en-famille-parcours-tarifs-et-conseils-de-visite/",
      "title": "Château fort de Sedan en famille: parcours, tarifs et conseils de visite",
      "category": "sorties",
      "publishedAt": "2026-10-22T07:00:11+02:00",
      "ageDays": 16,
      "peakStart": "2026-10-23",
      "peakEnd": "2026-10-25",
      "recentStart": "2026-11-02",
      "recentEnd": "2026-11-04",
      "peakImpressions": 63,
      "recentImpressions": 6,
      "score": 171,
      "signal": "uncertain",
      "commonQueries": 0,
      "positionDelta": null,
      "impressionRatio": 0,
      "basis": "Visibilité récente : 63 impressions sur trois jours, puis 6 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante.",
      "location": {
        "city": "Sedan",
        "department": "Ardennes",
        "region": "Grand Est"
      },
      "focusQueries": [
        "château de sedan tarif",
        "château sedan tarif",
        "billets pour château fort de sedan",
        "chateau de sedan",
        "château fort de sedan"
      ]
    },
    {
      "url": "/articles/bons-plans/arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir/",
      "title": "Arles en famille à petit budget: quelles visites et quel pass choisir?",
      "category": "bons-plans",
      "publishedAt": "2026-10-25T09:51:23+01:00",
      "ageDays": 13,
      "peakStart": "2026-10-27",
      "peakEnd": "2026-10-29",
      "recentStart": "2026-11-02",
      "recentEnd": "2026-11-04",
      "peakImpressions": 55,
      "recentImpressions": 0,
      "score": 165,
      "signal": "needs_query_check",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Visibilité récente : 55 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie.",
      "location": {
        "city": "Arles",
        "department": "Bouches-du-Rhône",
        "region": "Provence-Alpes-Côte d’Azur"
      },
      "focusQueries": [
        "Arles en famille",
        "pass monuments Arles",
        "visites gratuites enfants Arles"
      ]
    },
    {
      "url": "/articles/activites/biotropica-en-famille-a-val-de-reuil-animaux-tarifs-et-visite-par-temps-de-pluie/",
      "title": "Biotropica en famille à Val-de-Reuil: animaux, tarifs et visite par temps de pluie",
      "category": "activites",
      "publishedAt": "2026-10-20T12:10:23+02:00",
      "ageDays": 18,
      "peakStart": "2026-10-21",
      "peakEnd": "2026-10-23",
      "recentStart": "2026-11-02",
      "recentEnd": "2026-11-04",
      "peakImpressions": 55,
      "recentImpressions": 7,
      "score": 144,
      "signal": "needs_query_check",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Visibilité récente : 55 impressions sur trois jours, puis 7 sur les trois derniers jours consolidés; cause non établie.",
      "location": {
        "city": "Val-de-Reuil",
        "department": "Eure",
        "region": "Normandie"
      },
      "focusQueries": [
        "Biotropica en famille",
        "Biotropica Val-de-Reuil tarifs",
        "parc animalier Eure"
      ]
    },
    {
      "url": "/articles/maison/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager/",
      "title": "À Paris, où donner ou déposer meubles, jouets et électroménager ?",
      "category": "maison",
      "publishedAt": "2026-10-10T05:02:08+02:00",
      "ageDays": 28,
      "peakStart": "2026-10-12",
      "peakEnd": "2026-10-14",
      "recentStart": "2026-11-02",
      "recentEnd": "2026-11-04",
      "peakImpressions": 56,
      "recentImpressions": 16,
      "score": 120,
      "signal": "needs_query_check",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Visibilité récente : 56 impressions sur trois jours, puis 16 sur les trois derniers jours consolidés; cause non établie.",
      "location": {
        "city": "Paris",
        "department": "Paris",
        "region": "Île-de-France"
      },
      "focusQueries": [
        "encombrants Paris collecte gratuite",
        "donner meubles jouets Paris",
        "recyclage électroménager Paris",
        "ressourcerie Paris"
      ]
    },
    {
      "url": "/articles/voyages/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi/",
      "title": "Rejoindre Orly en famille: métro 14, Orlyval ou taxi en 2026",
      "category": "voyages",
      "publishedAt": "2026-10-13T15:33:13.271Z",
      "ageDays": 25,
      "peakStart": "2026-10-16",
      "peakEnd": "2026-10-18",
      "recentStart": "2026-11-02",
      "recentEnd": "2026-11-04",
      "peakImpressions": 43,
      "recentImpressions": 3,
      "score": 120,
      "signal": "needs_query_check",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Visibilité récente : 43 impressions sur trois jours, puis 3 sur les trois derniers jours consolidés; cause non établie.",
      "location": {
        "city": "Orly",
        "department": "Val-de-Marne",
        "region": "Île-de-France"
      },
      "focusQueries": [
        "rejoindre aéroport Orly avec enfants",
        "métro 14 Orly prix famille 2026",
        "Orlyval RER B Antony enfants",
        "taxi Paris Orly forfait 2026 famille",
        "Orly poussette bagages transports"
      ]
    },
    {
      "url": "/articles/bons-plans/ski-a-aussois-en-famille-en-2026-2027-forfaits-et-budget/",
      "title": "Ski à Aussois en famille en 2026-2027: forfaits et budget",
      "category": "bons-plans",
      "publishedAt": "2026-10-21T08:22:10+02:00",
      "ageDays": 17,
      "peakStart": "2026-10-23",
      "peakEnd": "2026-10-25",
      "recentStart": "2026-11-02",
      "recentEnd": "2026-11-04",
      "peakImpressions": 43,
      "recentImpressions": 4,
      "score": 117,
      "signal": "needs_query_check",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Visibilité récente : 43 impressions sur trois jours, puis 4 sur les trois derniers jours consolidés; cause non établie.",
      "location": {
        "city": "Aussois",
        "department": "Savoie",
        "region": "Auvergne-Rhône-Alpes"
      },
      "focusQueries": [
        "ski Aussois famille 2026 2027",
        "forfait Aussois enfant",
        "Pass Famille Plus Aussois",
        "ski pas cher Savoie famille"
      ]
    },
    {
      "url": "/articles/parentalite/laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit/",
      "title": "LAEP autour d'Annecy: trois lieux pour jouer avec son tout-petit",
      "category": "parentalite",
      "publishedAt": "2026-10-23T10:59:51+02:00",
      "ageDays": 15,
      "peakStart": "2026-10-25",
      "peakEnd": "2026-10-27",
      "recentStart": "2026-11-02",
      "recentEnd": "2026-11-04",
      "peakImpressions": 40,
      "recentImpressions": 2,
      "score": 114,
      "signal": "needs_query_check",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Visibilité récente : 40 impressions sur trois jours, puis 2 sur les trois derniers jours consolidés; cause non établie.",
      "location": {
        "city": "Annecy",
        "department": "Haute-Savoie",
        "region": "Auvergne-Rhône-Alpes"
      },
      "focusQueries": [
        "LAEP Annecy",
        "lieu accueil enfants parents Haute-Savoie",
        "LAEP Meythet Alby-sur-Chéran"
      ]
    },
    {
      "url": "/articles/activites/parc-animalier-de-gramat-en-famille-animaux-duree-et-conseils-de-visite/",
      "title": "Parc animalier de Gramat en famille: animaux, durée et conseils de visite",
      "category": "activites",
      "publishedAt": "2026-10-27T08:27:57+01:00",
      "ageDays": 11,
      "peakStart": "2026-10-28",
      "peakEnd": "2026-10-30",
      "recentStart": "2026-11-02",
      "recentEnd": "2026-11-04",
      "peakImpressions": 36,
      "recentImpressions": 0,
      "score": 108,
      "signal": "needs_query_check",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Visibilité récente : 36 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie.",
      "location": {
        "city": "Gramat",
        "department": "Lot",
        "region": "Occitanie"
      },
      "focusQueries": [
        "parc animalier de Gramat en famille",
        "visiter parc animalier Gramat avec enfants",
        "parc animalier Gramat horaires tarifs",
        "sortie famille Lot"
      ]
    },
    {
      "url": "/articles/activites/visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils/",
      "title": "Visiter le château de La Rochefoucauld en famille: parcours, tarifs et conseils",
      "category": "activites",
      "publishedAt": "2026-10-25T22:58:31+01:00",
      "ageDays": 13,
      "peakStart": "2026-10-28",
      "peakEnd": "2026-10-30",
      "recentStart": "2026-11-02",
      "recentEnd": "2026-11-04",
      "peakImpressions": 41,
      "recentImpressions": 5,
      "score": 108,
      "signal": "needs_query_check",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Visibilité récente : 41 impressions sur trois jours, puis 5 sur les trois derniers jours consolidés; cause non établie.",
      "location": {
        "city": "La Rochefoucauld-en-Angoumois",
        "department": "Charente",
        "region": "Nouvelle-Aquitaine"
      },
      "focusQueries": [
        "château de La Rochefoucauld en famille",
        "visite château La Rochefoucauld enfants",
        "tarifs château de La Rochefoucauld 2026"
      ]
    },
    {
      "url": "/articles/parentalite/maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles/",
      "title": "Maison des Parents aux Pennes-Mirabeau: ateliers gratuits et accueil des familles",
      "category": "parentalite",
      "publishedAt": "2026-10-16T14:09:03+02:00",
      "ageDays": 22,
      "peakStart": "2026-10-18",
      "peakEnd": "2026-10-20",
      "recentStart": "2026-11-02",
      "recentEnd": "2026-11-04",
      "peakImpressions": 50,
      "recentImpressions": 16,
      "score": 102,
      "signal": "needs_query_check",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Visibilité récente : 50 impressions sur trois jours, puis 16 sur les trois derniers jours consolidés; cause non établie.",
      "location": {
        "city": "Les Pennes-Mirabeau",
        "department": "Bouches-du-Rhône",
        "region": "Provence-Alpes-Côte d’Azur"
      },
      "focusQueries": [
        "Maison des Parents Les Pennes-Mirabeau",
        "Maison Câlins accueil enfants parents",
        "ateliers parentalité gratuits Bouches-du-Rhône"
      ]
    },
    {
      "url": "/articles/parentalite/laep-a-rennes-ou-jouer-gratuitement-avec-son-enfant/",
      "title": "LAEP à Rennes: où jouer gratuitement avec son enfant?",
      "category": "parentalite",
      "publishedAt": "2026-10-20T16:09:21+02:00",
      "ageDays": 18,
      "peakStart": "2026-10-21",
      "peakEnd": "2026-10-23",
      "recentStart": "2026-11-02",
      "recentEnd": "2026-11-04",
      "peakImpressions": 38,
      "recentImpressions": 5,
      "score": 99,
      "signal": "needs_query_check",
      "commonQueries": null,
      "positionDelta": null,
      "impressionRatio": null,
      "basis": "Visibilité récente : 38 impressions sur trois jours, puis 5 sur les trois derniers jours consolidés; cause non établie.",
      "location": {
        "city": "Rennes",
        "department": "Ille-et-Vilaine",
        "region": "Bretagne"
      },
      "focusQueries": [
        "LAEP Rennes",
        "lieu accueil enfants parents Rennes",
        "sorties gratuites tout-petits Rennes"
      ]
    }
  ],
  "strongPages": [
    {
      "url": "/articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/",
      "title": "Foire de Grenoble 2026 en famille: jours gratuits, programme et tarifs",
      "category": "evenements",
      "recentImpressions": 1872,
      "recentClicks": 26,
      "recentPosition": 6.799,
      "retention": 2.379
    },
    {
      "url": "/articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/",
      "title": "Noël 2026 à Chantilly: Le Noël oublié, billets et séances en famille",
      "category": "evenements",
      "recentImpressions": 278,
      "recentClicks": 10,
      "recentPosition": 6.763,
      "retention": 1
    },
    {
      "url": "/articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/",
      "title": "Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël",
      "category": "evenements",
      "recentImpressions": 135,
      "recentClicks": 9,
      "recentPosition": 7.659,
      "retention": 1
    },
    {
      "url": "/articles/evenements/cirque-de-noel-2026-au-mans-horaires-tarifs-et-seance-a-choisir-avec-des-enfants/",
      "title": "Cirque de Noël 2026 au Mans: horaires, tarifs et séance à choisir avec des enfants",
      "category": "evenements",
      "recentImpressions": 181,
      "recentClicks": 8,
      "recentPosition": 6.608,
      "retention": 5.656
    },
    {
      "url": "/articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/",
      "title": "Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite",
      "category": "sorties",
      "recentImpressions": 298,
      "recentClicks": 4,
      "recentPosition": 9.836,
      "retention": 0.99
    },
    {
      "url": "/articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/",
      "title": "Noël de Casse-Noisette 2026 à Pierrefonds: visites, dates et tarifs en famille",
      "category": "evenements",
      "recentImpressions": 77,
      "recentClicks": 4,
      "recentPosition": 4.662,
      "retention": 1
    },
    {
      "url": "/articles/evenements/flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille/",
      "title": "Flottins d’Évian 2026: un village de Noël en bois flotté à découvrir en famille",
      "category": "evenements",
      "recentImpressions": 174,
      "recentClicks": 3,
      "recentPosition": 8.592,
      "retention": 1
    },
    {
      "url": "/articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/",
      "title": "Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates",
      "category": "vie-pratique",
      "recentImpressions": 148,
      "recentClicks": 3,
      "recentPosition": 5.446,
      "retention": 1.396
    },
    {
      "url": "/articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/",
      "title": "Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille",
      "category": "evenements",
      "recentImpressions": 142,
      "recentClicks": 3,
      "recentPosition": 8.641,
      "retention": 1.279
    },
    {
      "url": "/articles/vie-pratique/cantine-au-college-en-essonne-obtenir-son-tarif-2026-2027-sans-refaire-la-mauvaise-demarche/",
      "title": "Cantine au collège en Essonne: obtenir son tarif 2026-2027 sans refaire la mauvaise démarche",
      "category": "vie-pratique",
      "recentImpressions": 128,
      "recentClicks": 3,
      "recentPosition": 8.937,
      "retention": 4
    }
  ],
  "excluded": {
    "expired": 166,
    "cooling": 5
  },
  "warnings": [
    "GSC recherche web : 9488 lignes sur quatre semaines, réponses complètes (1802, 2231, 2693, 2762).",
    "Catalogue Radar : 970 articles et 185 entrées d'historique.",
    "Diagnostics par requêtes réalisés pour 5 articles.",
    "Les baisses d'impressions ne prouvent ni désindexation ni perte de position."
  ]
}

## Catalogue ciblé (doublons et publications récentes)

### Articles comparables et publications récentes

- /articles/bons-plans/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/ | Navigo Liberté+ en famille: tarifs enfants et choix du passe en 2026 | bons-plans | Paris, Paris, Île-de-France
- /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/ | Transports à Paris avec des enfants: quel titre choisir pour payer juste? | voyages | Paris, Paris, Île-de-France
- /articles/bons-plans/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/ | Château de Champs-sur-Marne en famille: gratuités, tarifs et dates à éviter | bons-plans | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | Noël Gaulois 2026 au Parc Astérix: billets, glissades et spectacles en famille | evenements | Plailly, Oise, Hauts-de-France
- /articles/vie-pratique/ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee/ | Ferry Ouistreham-Portsmouth en famille: préparer le départ et la traversée | vie-pratique | Ouistreham, Calvados, Normandie
- /articles/voyages/visiter-guedelon-avec-des-enfants-preparer-la-journee-en-2026/ | Visiter Guédelon avec des enfants: préparer la journée en 2026 | voyages | Treigny-Perreuse-Sainte-Colombe, Yonne, Bourgogne-Franche-Comté
- /articles/voyages/carte-europeenne-assurance-maladie-enfant-vacances/ | Carte européenne d’assurance maladie pour un enfant: que faut-il préparer avant le départ ? | voyages
- /articles/activites/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre/ | Grottes de Thouzon avec des enfants: préparer la visite sous terre | activites | Le Thor, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | Noël des Siècles 2026 à Champs-sur-Marne: billets, budget et horaires en famille | evenements | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir/ | Halloween 2026 au Château de Villersexel: parc gratuit, visites et âge minimum | evenements | Villersexel, Haute-Saône, Bourgogne-Franche-Comté
- /articles/evenements/fete-saint-louis-fontainebleau-2026-famille/ | Fête de la Saint-Louis 2026 à Fontainebleau: une journée gratuite en famille au Grand Canal | evenements | Fontainebleau, Seine-et-Marne, Île-de-France
- /articles/maison/dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage/ | Déchets verts à Toulouse Métropole en 2027: collecte, broyage et compostage | maison | Toulouse, Haute-Garonne, Occitanie
- /articles/bons-plans/pass-explorateurs-toulouse-en-famille-quand-est-il-vraiment-rentable/ | Pass Explorateurs Toulouse en famille: quand est-il vraiment rentable? | bons-plans | Toulouse, Haute-Garonne, Occitanie
- /articles/activites/accrocamp-toulouse-avec-des-enfants-quel-pass-choisir-selon-leur-taille/ | AccroCamp Toulouse avec des enfants: quel pass choisir selon leur taille? | activites | Toulouse, Haute-Garonne, Occitanie
- /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | Noël à Toulouse 2026 en famille: marchés, Père Noël et patinoire | evenements | Toulouse, Haute-Garonne, Occitanie
- /articles/sorties/chateau-fort-de-sedan-en-famille-parcours-tarifs-et-conseils-de-visite/ | Château fort de Sedan en famille: parcours, tarifs et conseils de visite | sorties | Sedan, Ardennes, Grand Est
- /articles/activites/visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils/ | Visiter le château de La Rochefoucauld en famille: parcours, tarifs et conseils | activites | La Rochefoucauld-en-Angoumois, Charente, Nouvelle-Aquitaine
- /articles/sorties/chateau-de-vincennes-en-famille-tarifs-parcours-et-conseils-de-visite/ | Château de Vincennes en famille: tarifs, parcours et conseils de visite | sorties | Vincennes, Val-de-Marne, Île-de-France
- /articles/parentalite/visiter-le-chateau-de-versailles-avec-un-bebe-poussette-billets-et-parcours/ | Visiter le château de Versailles avec un bébé: poussette, billets et parcours | parentalite | Versailles, Yvelines, Île-de-France
- /articles/bons-plans/arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir/ | Arles en famille à petit budget: quelles visites et quel pass choisir? | bons-plans | Arles, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/saint-remy-de-provence-en-famille-glanum-musees-et-entrees-gratuites/ | Saint-Rémy-de-Provence en famille: Glanum, musées et entrées gratuites | bons-plans | Saint-Rémy-de-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/albi-en-famille-a-petit-budget-deux-programmes-entre-patrimoine-et-musee/ | Albi en famille à petit budget: deux programmes entre patrimoine et musée | bons-plans | Albi, Tarn, Occitanie
- /articles/bons-plans/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites/ | Pass Nantes en famille en 2026: tarifs, visites incluses et alternatives gratuites | bons-plans | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/activites/biotropica-en-famille-a-val-de-reuil-animaux-tarifs-et-visite-par-temps-de-pluie/ | Biotropica en famille à Val-de-Reuil: animaux, tarifs et visite par temps de pluie | activites | Val-de-Reuil, Eure, Normandie
- /articles/activites/parc-animalier-de-gramat-en-famille-animaux-duree-et-conseils-de-visite/ | Parc animalier de Gramat en famille: animaux, durée et conseils de visite | activites | Gramat, Lot, Occitanie
- /articles/activites/parc-animalier-d-ecouves-en-famille-tarifs-horaires-et-conseils-pour-la-visite/ | Parc animalier d'Ecouves en famille: tarifs, horaires et conseils pour la visite | activites | Le Bouillon, Orne, Normandie
- /articles/sorties/mont-faron-en-famille-telepherique-parc-animalier-et-conseils-2026/ | Mont Faron en famille: téléphérique, parc animalier et conseils 2026 | sorties | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/maison/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager/ | À Paris, où donner ou déposer meubles, jouets et électroménager ? | maison | Paris, Paris, Île-de-France
- /articles/evenements/paris-plages-2026-en-famille/ | Paris Plages 2026: où se baigner et jouer avec des enfants | evenements | Paris, Paris, Île-de-France
- /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | Atelier Calder à Paris le 14 novembre 2026: fabriquer un mobile dès 5 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/paris-sport-vacances-automne-2026-demi-journee-gratuite-ou-stage-a-la-journee/ | Paris Sport Vacances automne 2026: demi-journée gratuite ou stage à la journée? | activites | Paris, Paris, Île-de-France
- /articles/voyages/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi/ | Rejoindre Orly en famille: métro 14, Orlyval ou taxi en 2026 | voyages | Orly, Val-de-Marne, Île-de-France
- /articles/voyages/rejoindre-l-aeroport-paris-cdg-en-famille-rer-b-bus-9517-ou-taxi/ | Aéroport CDG en famille: RER B, bus 9517 ou taxi en 2026? | voyages | Roissy-en-France, Val-d'Oise, Île-de-France
- /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/ | Paris avec une poussette: métro, RER, bus ou tram, que choisir ? | voyages | Paris, Paris, Île-de-France
- /articles/vie-pratique/consigne-a-bagages-a-paris-en-famille-gare-ou-depot-en-ville/ | Consigne à bagages à Paris en famille: gare ou dépôt en ville? | vie-pratique | Paris, Paris, Île-de-France
- /articles/bons-plans/ski-a-aussois-en-famille-en-2026-2027-forfaits-et-budget/ | Ski à Aussois en famille en 2026-2027: forfaits et budget | bons-plans | Aussois, Savoie, Auvergne-Rhône-Alpes
- /articles/bons-plans/nevers-en-famille-a-petit-budget-6-idees-gratuites-ou-presque/ | Nevers en famille à petit budget: 6 idées gratuites ou presque | bons-plans | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/cuisine/visiter-une-cooperative-de-beaufort-avec-des-enfants-a-val-cenis/ | Visiter une coopérative de Beaufort avec des enfants à Val Cenis | cuisine | Val Cenis, Savoie, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit/ | LAEP autour d'Annecy: trois lieux pour jouer avec son tout-petit | parentalite | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-a-rennes-ou-jouer-gratuitement-avec-son-enfant/ | LAEP à Rennes: où jouer gratuitement avec son enfant? | parentalite | Rennes, Ille-et-Vilaine, Bretagne
- /articles/maison/renovation-energetique-en-haute-savoie-jusqu-a-3-000-d-aide-departementale/ | Rénovation énergétique en Haute-Savoie: jusqu'à 3 000 € d'aide départementale | maison | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-dans-l-herault-jouer-avec-son-enfant-et-rencontrer-d-autres-parents/ | LAEP dans l'Hérault: jouer avec son enfant et rencontrer d'autres parents | parentalite | Hérault, Occitanie
- /articles/activites/parc-de-courzieu-en-famille-tarifs-horaires-et-conseils-pour-la-visite/ | Parc de Courzieu en famille: tarifs, horaires et conseils pour la visite | activites | Courzieu, Rhône, Auvergne-Rhône-Alpes
- /articles/parentalite/maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles/ | Maison des Parents aux Pennes-Mirabeau: ateliers gratuits et accueil des familles | parentalite | Les Pennes-Mirabeau, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/parentalite/l-ilot-des-familles-a-tarbes-quels-ateliers-pour-les-parents-d-enfants-de-0-a-6-ans/ | L'îlot des Familles à Tarbes: quels ateliers pour les parents d'enfants de 0 à 6 ans? | parentalite | Tarbes, Hautes-Pyrénées, Occitanie
- /articles/sorties/musee-calisson-aix-visite-enfants-2026/ | Musée du Calisson à Aix-en-Provence: une enquête gourmande pour les enfants en 2026 | sorties | Aix-en-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/parentalite/maison-des-parents-a-guingamp-quand-y-aller-et-quel-service-choisir/ | Maison des Parents à Guingamp: quand y aller et quel service choisir ? | parentalite | Guingamp, Côtes-d'Armor, Bretagne
- /articles/parentalite/la-maison-des-petits-pas-a-troyes-un-lieu-pour-souffler-avec-son-jeune-enfant/ | La Maison des Petits Pas à Troyes: un lieu pour souffler avec son jeune enfant | parentalite | Troyes, Aube, Grand Est
- /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | Foire de Grenoble 2026 en famille: jours gratuits, programme et tarifs | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/sorties/ete-oh-parcs-grenoble-2026-famille/ | L’Été Oh! Parcs Grenoble 2026: horaires et activités gratuites | sorties | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/cuisine/3-recettes-de-l-isere-faciles-a-preparer-en-famille/ | 3 recettes de l'Isère faciles à préparer en famille | cuisine | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | Noël 2026 à Chantilly: Le Noël oublié, billets et séances en famille | evenements | Chantilly, Oise, Hauts-de-France
- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/cuisine/atelier-de-creme-chantilly-avec-des-enfants-a-partir-de-quel-age-et-comment-reserver/ | Atelier de crème Chantilly avec des enfants: à partir de quel âge et comment réserver | cuisine | Chantilly, Oise, Hauts-de-France
- /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | Noël de Casse-Noisette 2026 à Pierrefonds: visites, dates et tarifs en famille | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/maison/composteur-gratuit-a-angers-loire-metropole-qui-peut-le-demander/ | Composteur gratuit à Angers Loire Métropole: qui peut le demander? | maison | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | Monument Jeu d’Enfant au château d’Angers: dragons et ateliers le 17 octobre 2026 | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/vie-pratique/garde-d-enfants-sur-horaires-atypiques-a-angers-qui-peut-demander-l-aide-du-ccas/ | Garde d'enfants sur horaires atypiques à Angers: qui peut demander l'aide du CCAS? | vie-pratique | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/cirque-de-noel-2026-au-mans-horaires-tarifs-et-seance-a-choisir-avec-des-enfants/ | Cirque de Noël 2026 au Mans: horaires, tarifs et séance à choisir avec des enfants | evenements | Le Mans, Sarthe, Pays de la Loire
- /articles/voyages/le-mans-sans-voiture-avec-des-enfants-ou-dormir-et-comment-organiser-un-week-end/ | Le Mans sans voiture avec des enfants: où dormir et comment organiser un week-end | voyages | Le Mans, Sarthe, Pays de la Loire
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires et accès | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/ | Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite | sorties | Paris, Paris, Île-de-France
- /articles/activites/stages-de-science-a-la-cite-des-sciences-pendant-la-toussaint-2026-lequel-choisir-selon-l-age/ | Stages de science à la Cité des sciences à la Toussaint 2026: durées, âges et tarifs | activites | Paris, Paris, Île-de-France
- /articles/evenements/rencontres-du-ciel-et-de-l-espace-2026-a-paris-que-choisir-avec-des-enfants/ | Rencontres du ciel et de l’espace 2026 à Paris: ateliers, âges et billets en famille | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | Vacances de la Toussaint 2026 à la Cité des sciences: les ateliers numériques gratuits avec des enfants | sorties | Paris, Paris, Île-de-France
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/noel-2026-au-chateau-de-grignan-dates-tarifs-et-visite-en-famille/ | Noël 2026 au château de Grignan: dates, tarifs et visite en famille | evenements | Grignan, Drôme, Auvergne-Rhône-Alpes
- /articles/evenements/flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille/ | Flottins d’Évian 2026: un village de Noël en bois flotté à découvrir en famille | evenements | Évian-les-Bains, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/voyages/evian-les-bains-en-famille-pendant-3-jours-lac-balades-et-activites-faciles/ | Évian-les-Bains en famille pendant 3 jours: lac, balades et activités faciles | voyages | Évian-les-Bains, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/cuisine/ferme-du-petit-mont-a-bellevaux-en-famille-quelle-formule-choisir/ | Ferme du Petit Mont à Bellevaux en famille: quelle formule choisir ? | cuisine | Bellevaux, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/ | Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates | vie-pratique | Toulouse, Haute-Garonne, Occitanie
- /articles/bons-plans/cantine-au-college-dans-l-herault-jusqu-a-3-60-d-aide-par-repas/ | Cantine au collège dans l'Hérault: jusqu'à 3,60 € d'aide par repas | bons-plans | Montpellier, Hérault, Occitanie
- /articles/maison/moustique-tigre-en-haute-garonne-proteger-la-maison-et-le-jardin/ | Moustique tigre en Haute-Garonne: protéger la maison et le jardin | maison | Toulouse, Haute-Garonne, Occitanie
- /articles/vie-pratique/cantine-au-college-en-deux-sevres-comment-s-inscrire-en-ligne-pour-2026-2027/ | Cantine au collège en Deux-Sèvres: comment s'inscrire en ligne pour 2026-2027 | vie-pratique | Niort, Deux-Sèvres, Nouvelle-Aquitaine
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | Noël à Caen 2026 en famille: marché de Noël et visite illuminée | evenements | Caen, Calvados, Normandie
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/vie-pratique/cantine-au-college-en-essonne-obtenir-son-tarif-2026-2027-sans-refaire-la-mauvaise-demarche/ | Cantine au collège en Essonne: obtenir son tarif 2026-2027 sans refaire la mauvaise démarche | vie-pratique | Évry-Courcouronnes, Essonne, Île-de-France
- /articles/vie-pratique/cantine-au-college-dans-le-pas-de-calais-les-tarifs-2026-et-les-reductions-pour-les-boursiers/ | Cantine au collège dans le Pas-de-Calais: les tarifs 2026 et les réductions pour les boursiers | vie-pratique | Hénin-Beaumont, Pas-de-Calais, Hauts-de-France
- /articles/sorties/petite-terre-en-famille-iguanes-balade-et-lagon/ | Petite-Terre en famille: iguanes, balade et lagon | sorties | La Désirade, Guadeloupe, Guadeloupe
- /articles/sorties/soiree-jeux-gratuite-a-paris-le-21-novembre-2026-jeux-video-et-jeux-de-societe-en-famille/ | Soirée jeux gratuite à Paris le 21 novembre 2026: jeux vidéo et jeux de société en famille | sorties | Paris, Paris, Île-de-France
- /articles/cuisine/mogettes-de-vendee-en-famille-quatre-repas-simples-et-les-bonnes-cuissons/ | Mogettes de Vendée en famille: quatre repas simples et les bonnes cuissons | cuisine | Vendée, Pays de la Loire
- /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | Contes gratuits à Paris le 14 novembre 2026: trois rendez-vous en famille | evenements | Paris, Paris, Île-de-France
- /articles/activites/le-pal-2027-en-famille-une-ou-deux-journees-entre-animaux-et-attractions/ | Le PAL 2027 en famille: une ou deux journées entre animaux et attractions ? | activites | Saint-Pourçain-sur-Besbre, Allier, Auvergne-Rhône-Alpes
- /articles/bons-plans/troyes-en-famille-a-petit-budget-musees-gratuites-et-balades-dans-le-centre/ | Troyes en famille à petit budget: musées, gratuités et balades dans le centre | bons-plans | Troyes, Aube, Grand Est
- /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | Atelier Pokémon et biodiversité à Paris le 28 novembre 2026: dessin dès 10 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/semaine-du-golfe-2027-en-famille-ou-voir-les-bateaux/ | Semaine du Golfe 2027 en famille: où voir les bateaux ? | evenements | Morbihan, Bretagne
- /articles/activites/atelier-omamori-gratuit-a-paris-le-21-novembre-2026-creer-une-amulette-japonaise-des-7-ans/ | Atelier omamori gratuit à Paris le 21 novembre 2026: créer une amulette dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales/ | Fêtes de l’Ours 2027: quelle fête choisir en famille dans les Pyrénées-Orientales ? | evenements | Pyrénées-Orientales, Occitanie
- /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | Atelier couture gratuit à Paris le 28 novembre 2026: dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/parentalite/musee-de-la-corse-a-corte-decouvrir-l-ile-en-famille-par-les-objets-du-quotidien/ | Musée de la Corse à Corte: découvrir l’île en famille par les objets du quotidien | parentalite | Corte, Haute-Corse, Corse
- /articles/evenements/cerfs-volants-de-berck-2027-organiser-sa-visite-en-famille/ | Cerfs-volants de Berck 2027: organiser sa visite en famille | evenements | Berck-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quelle-seance-choisir-en-famille/ | Contes gratuits à Paris le 14 novembre 2026: spectacles et scène ouverte en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans/ | Écoute, je danse ! à Paris le 5 décembre 2026: spectacle gratuit dès 6 mois | evenements | Paris, Paris, Île-de-France
- /articles/bons-plans/abbaye-de-saint-savin-en-famille-tarifs-gratuites-et-visite-avec-les-enfants/ | Abbaye de Saint-Savin en famille: tarifs, gratuités et visite avec les enfants | bons-plans | Saint-Savin, Vienne, Nouvelle-Aquitaine
- /articles/cuisine/halles-de-tours-en-famille-un-panier-d-automne-deux-repas-simples/ | Halles de Tours en famille: un panier d’automne, deux repas simples | cuisine | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/activites/atelier-laine-cardee-de-noel-a-paris-le-2-decembre-2026-creer-ses-decorations-des-7-ans/ | Atelier laine cardée de Noël à Paris le 2 décembre 2026: décorations dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/aquarium-de-touraine-en-famille-que-voir-avec-les-enfants/ | Aquarium de Touraine en famille: que voir avec les enfants ? | activites | Lussault-sur-Loire, Indre-et-Loire, Centre-Val de Loire
- /articles/activites/atelier-pop-up-gratuit-a-paris-le-21-novembre-2026-creer-un-livre-anime-en-famille/ | Atelier pop-up gratuit à Paris le 21 novembre 2026: créer en famille dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/visiter-le-museum-du-havre-avec-des-enfants-que-decouvrir/ | Visiter le Muséum du Havre avec des enfants: que découvrir ? | activites | Le Havre, Seine-Maritime, Normandie
- /articles/maison/materiautheques-en-bretagne-preparer-son-projet-et-acheter-les-bons-materiaux/ | Matériauthèques en Bretagne: préparer son projet et acheter les bons matériaux | maison | Bretagne
- /articles/activites/jeux-nature-gratuits-au-parc-floral-de-paris-le-18-novembre-2026-quel-jeu-selon-l-age/ | Jeux nature gratuits au Parc floral de Paris le 18 novembre 2026 | activites | Paris, Paris, Île-de-France
- /articles/sorties/visiter-l-abbaye-de-fontenay-avec-des-enfants-meme-en-hiver/ | Visiter l'abbaye de Fontenay avec des enfants, même en hiver | sorties | Marmagne, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/activites/atelier-scratch-gratuit-a-paris-le-7-novembre-2026-programmer-un-jeu-video-des-8-ans/ | Atelier Scratch gratuit à Paris le 7 novembre 2026: créer un jeu vidéo | activites | Paris, Paris, Île-de-France
- /articles/cuisine/ateliers-cuisine-et-patisserie-en-ardeche-avec-des-enfants-trois-adresses-selon-leur-age/ | Ateliers cuisine et pâtisserie en Ardèche avec des enfants: trois adresses selon leur âge | cuisine | Ardèche, Auvergne-Rhône-Alpes
- /articles/vie-pratique/train-mobigo-en-famille-quels-billets-choisir-et-comment-preparer-le-trajet/ | TRAIN Mobigo en famille: quels billets choisir et comment préparer le trajet | vie-pratique | Bourgogne-Franche-Comté
- /articles/activites/ateliers-textiles-au-musee-bourdelle-a-paris-styliste-ou-broderie-en-famille-en-2026/ | Ateliers textiles au musée Bourdelle à Paris: styliste ou broderie en famille | activites | Paris, Paris, Île-de-France

### Historique Radar lié

- opportunity | /articles/evenements/ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans/ | 2026-11-04T21:32:12.180Z
- refresh | /articles/vie-pratique/ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee/ | 2026-11-07T07:35:04.984Z
- opportunity | /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | 2026-10-21T13:33:34.395Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- refresh | /articles/evenements/halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir/ | 2026-10-16T10:34:46.747Z
- opportunity | /articles/activites/jeux-nature-gratuits-au-parc-floral-de-paris-le-18-novembre-2026-quel-jeu-selon-l-age/ | 2026-11-04T12:35:19.125Z
- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | 2026-10-10T08:38:56.921Z
- opportunity | /articles/bons-plans/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/ | 2026-10-25T10:33:30.080Z
- refresh | /articles/bons-plans/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/ | 2026-11-07T04:27:46.536Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | 2026-10-26T21:31:06.119Z
- opportunity | /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | 2026-10-30T21:26:32.584Z
- opportunity | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-10-30T18:26:56.039Z
- opportunity | /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | 2026-10-24T23:34:36.270Z
- opportunity | /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | 2026-10-27T07:35:50.437Z
- opportunity | /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | 2026-10-26T18:32:56.730Z
- opportunity | /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | 2026-10-24T09:33:57.174Z
- opportunity | /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/ | 2026-10-28T12:27:07.569Z
- opportunity | /articles/activites/paris-sport-vacances-automne-2026-demi-journee-gratuite-ou-stage-a-la-journee/ | 2026-10-03T20:20:25.508Z
- opportunity | /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | 2026-11-05T10:32:54.471Z
- opportunity | /articles/voyages/rejoindre-l-aeroport-paris-cdg-en-famille-rer-b-bus-9517-ou-taxi/ | 2026-10-15T09:28:56.552Z
- opportunity | /articles/evenements/rencontres-du-ciel-et-de-l-espace-2026-a-paris-que-choisir-avec-des-enfants/ | 2026-11-04T05:34:42.508Z
- opportunity | /articles/sorties/soiree-jeux-gratuite-a-paris-le-21-novembre-2026-jeux-video-et-jeux-de-societe-en-famille/ | 2026-11-05T19:28:08.723Z
- opportunity | /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | 2026-10-30T12:36:12.349Z
- opportunity | /articles/activites/stages-de-science-a-la-cite-des-sciences-pendant-la-toussaint-2026-lequel-choisir-selon-l-age/ | 2026-10-04T05:39:23.036Z
- opportunity | /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | 2026-10-11T19:35:57.703Z
- refresh | /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/ | 2026-11-06T21:35:30.246Z
- opportunity | /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | 2026-10-05T11:24:52.310Z

## Travaux éditoriaux en cours

### Publication en cours

- Branche: automation/publication-20261107-1502-carnaval-de-limoux-2027-en-famille-comprendre-les-fecos-et-choisir-sa-
- HEAD: publication: phase 2 20261107-1502-carnaval-de-limoux-2027-en-famille-comprendre-les-fecos-et-choisir-sa-

---
category: "evenements"
title: "Carnaval de Limoux 2027 en famille: dates, Fécos et conseils pratiques"
subtitle: "Comment choisir un défilé de jour et profiter des traditions occitanes avec les enfants"
summary: "À Limoux, le carnaval anime la place de la République de janvier à mars 2027. Voici les dates, les traditions et les conseils pour une sortie en famille."
keywords:
  - "carnaval de Limoux 2027"
  - "carnaval de Limoux en famille"
  - "Fécos Limoux"
location:
  city: "Limoux"
  department: "Aude"
  region: "Occitanie"
eventEndsAt: "2027-03-14"
sources:
  - title: "Aude Tourisme - Carnaval 2027, les Meuniers (3 janvier)"
    url: "https://www.audetourisme.com/fr/fiche/limoux/carnaval-de-limoux-2027-les-meuniers_TFOFMALAR011V51BYW7/"
  - title: "Aude Tourisme - Les Pebradous et les Sieur d'Arques (30 janvier)"
    url: "https://www.audetourisme.com/fr/fiche/limoux/carnaval-de-limoux-2027-les-pebradous-et-les-sieur-d-arques_TFOFMALAR011V51BYXI/"
  - title: "Aude Tourisme - L'Aragou (31 janvier)"
    url: "https://www.audetourisme.com/fr/fiche/limoux/carnaval-de-limoux-2027-l-aragou_TFOFMALAR011V51BYXR/"
  - title: "Aude Tourisme - Les Pitchouns et les Tap's (6 février)"
    url: "https://www.audetourisme.com/fr/fiche/limoux/carnaval-de-limoux-2027-les-pitchouns-et-les-tap-s_TFOFMALAR011V51BYXT/"
  - title: "Aude Tourisme - Mardi gras, les Anciens (9 février)"
    url: "https://www.audetourisme.com/fr/fiche/limoux/carnaval-de-limoux-2027-sortie-du-mardi-gras-les-anciens_TFOFMALAR011V51BYY9/"
  - title: "Aude Tourisme - Le Pont Vieux (21 février)"
    url: "https://www.audetourisme.com/fr/fiche/limoux/carnaval-de-limoux-2027-le-pont-vieux_TFOFMALAR011V51BYZ4/"
  - title: "Aude Tourisme - Nuit de la Blanquette (14 mars)"
    url: "https://www.audetourisme.com/fr/fiche/limoux/carnaval-de-limoux-2027-nuit-de-la-blanquette-les-aissables_TFOFMALAR011V51BYZT/"
---

À Limoux, dans l'Aude, le carnaval ne se résume pas à un seul grand défilé. De janvier à mars, des groupes costumés investissent régulièrement la place de la République, au rythme de la musique. Pour une famille, c'est l'occasion de découvrir une tradition occitane très différente des cortèges de chars habituels, sans payer de billet pour assister aux sorties publiques.

## Que vont voir les enfants ?

Les **Fécos** sont les bandes de carnavaliers qui se succèdent au fil des journées. Costumes, masques et musique donnent à chaque sortie son caractère. Dans leur sillage apparaissent les **Goudils**, d'autres personnages masqués, parfois drôles ou extravagants. L'intérêt est autant d'observer les détails des costumes que de suivre cette animation qui revient sur la place.

Le carnaval est souvent présenté localement comme « le plus long du monde »: mieux vaut comprendre cette formule comme une manière de souligner sa durée, et non comme un record officiellement homologué.

## À quelle heure venir avec des enfants ?

Les [fiches du programme 2027 publiées par Aude Tourisme](https://www.audetourisme.com/fr/fiche/limoux/carnaval-de-limoux-2027-les-meuniers_TFOFMALAR011V51BYW7/) annoncent habituellement trois passages les samedis et dimanches: **11 h, 16 h 30 et 22 h**.

**À 11 h**, on peut découvrir l'ambiance avant le déjeuner et repartir facilement si les plus jeunes fatiguent. C'est souvent le choix le plus simple pour une première visite.

**À 16 h 30**, la sortie s'intègre à une journée sur place, mais en plein hiver il faut prévoir des vêtements chauds et tenir compte de la tombée du jour.

**À 22 h**, l'atmosphère est plus tardive: ce créneau conviendra davantage aux adolescents ou aux enfants habitués aux soirées animées qu'aux tout-petits.

Ces horaires correspondent au fonctionnement habituel annoncé, pas à une garantie pour chaque rendez-vous: des journées particulières peuvent suivre un programme différent. Par exemple, la [fiche du Mardi gras du 9 février](https://www.audetourisme.com/fr/fiche/limoux/carnaval-de-limoux-2027-sortie-du-mardi-gras-les-anciens_TFOFMALAR011V51BYY9/) mentionne 11 h, **17 h** et 22 h.

## Quelques dates à retenir en 2027

Le calendrier permet de choisir une journée selon ses disponibilités plutôt que de chercher un unique « jour du carnaval ».

- **Dimanche 3 janvier**: les [Meuniers](https://www.audetourisme.com/fr/fiche/limoux/carnaval-de-limoux-2027-les-meuniers_TFOFMALAR011V51BYW7/), après l'arrivée annoncée du char le samedi 2 janvier à 19 h.
- **Samedi 30 janvier**: les [Pebradous et les Sieur d'Arques](https://www.audetourisme.com/fr/fiche/limoux/carnaval-de-limoux-2027-les-pebradous-et-les-sieur-d-arques_TFOFMALAR011V51BYXI/).
- **Dimanche 31 janvier**: [l'Aragou](https://www.audetourisme.com/fr/fiche/limoux/carnaval-de-limoux-2027-l-aragou_TFOFMALAR011V51BYXR/).
- **Samedi 6 février**: les [Pitchouns et les Tap's](https://www.audetourisme.com/fr/fiche/limoux/carnaval-de-limoux-2027-les-pitchouns-et-les-tap-s_TFOFMALAR011V51BYXT/). Le nom de cette sortie ne suffit toutefois pas à garantir une animation spécialement adaptée à tous les âges.
- **Dimanche 21 février**: [le Pont Vieux](https://www.audetourisme.com/fr/fiche/limoux/carnaval-de-limoux-2027-le-pont-vieux_TFOFMALAR011V51BYZ4/).
- **Dimanche 14 mars**: [la Nuit de la Blanquette et les Aïssables](https://www.audetourisme.com/fr/fiche/limoux/carnaval-de-limoux-2027-nuit-de-la-blanquette-les-aissables_TFOFMALAR011V51BYZT/), avec le jugement et l'incinération symbolique de Sa Majesté Carnaval pour clore les festivités.

Ces dates sont celles affichées par Aude Tourisme lors de la rédaction. Vérifiez la fiche de votre journée avant de prendre la route: le calendrier et les horaires peuvent évoluer.

## Préparer la sortie sans mauvaise surprise

**Le lieu et le prix.** Les sorties publiques référencées ont lieu **place de la République, 11300 Limoux**, et sont indiquées comme **gratuites** par Aude Tourisme. Cela ne signifie pas que tous les services ou animations annexes sont gratuits.

**Le bruit et la foule.** La musique fait partie intégrante de la fête. Pour un enfant sensible au bruit, des protections auditives adaptées et la possibilité de s'éloigner rapidement peuvent rendre la visite plus agréable. Évitez de vous installer au milieu d'un passage si vous souhaitez pouvoir partir sans difficulté.

**La poussette.** Aucune garantie d'accessibilité ou de cheminement réservé n'est confirmée dans les fiches consultées. Une poussette peut devenir encombrante lorsque les spectateurs se regroupent; avec un bébé, un porte-bébé peut être plus pratique selon vos habitudes. Pour un besoin d'accessibilité précis, demandez conseil à l'office de tourisme avant le départ.

**Le rythme de la journée.** Prévoyez une pause au chaud et un repas entre deux sorties plutôt que d'attendre plusieurs heures sur la place avec de jeunes enfants. En janvier et février, habillez-les pour rester dehors, même si la visite prévue est courte. Si la météo se dégrade, mieux vaut écourter la sortie que compter sur un repli couvert qui n'a pas été confirmé.

**L'arrivée.** Le rendez-vous est en centre-ville. Les fiches consultées ne garantissent ni parking dédié ni dispositif de circulation précis: vérifiez les conditions de stationnement et les éventuelles restrictions le jour choisi, surtout pour un passage fréquenté.

Pour confirmer le programme, les conditions d'accueil et l'accès, contactez l'[office de tourisme du Limouxin](https://www.limouxin-tourisme.fr/) au **04 68 31 11 82**, numéro indiqué sur les fiches d'Aude Tourisme.

## Et si l'on reste tout le week-end ?

Une nuit à Limoux peut éviter de reprendre la route après une longue journée et laisser le temps de découvrir la ville entre deux passages. Pour une famille, privilégiez un hébergement permettant de rentrer faire une pause plutôt que de chercher à suivre toutes les sorties. Les disponibilités et tarifs des logements varient selon les dates; les pistes d'hébergement seront examinées lors de l'étape dédiée à l'affiliation.


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
