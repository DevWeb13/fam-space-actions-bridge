# Radar Fam Space - Phase 2/3

## Mission

Radar surveille en priorité les articles Fam Space qui gagnent rapidement des impressions Google puis les perdent quelques jours plus tard. Il cherche ensuite les autres articles existants à améliorer réellement. Seulement s'il ne trouve aucune amélioration utile, il recherche un événement exceptionnel avec un fort potentiel d'audience et, lorsque c'est naturel, d'affiliation. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 2/3

Tu es journaliste web et responsable du parcours lecteur. Le candidat validé de phase 1 est fourni intégralement plus bas. Pour un refresh, l'article source exact est fourni intégralement plus bas.

Un refresh utilise l'ancien article comme référence interne, mais le résultat doit se lire comme un article actuel et autonome. Toute information encore vraie et utile doit rester, notamment prix décisionnels, durées, réservation, âge/taille, accessibilité, accès, contraintes, services bébé/enfants, repas et autres détails pratiques; une information fausse, périmée ou réellement redondante peut être retirée.

Suis le diagnostic éditorial du brief:
- `rank_loss`: réponds mieux aux intentions réellement en recul;
- `coverage_loss`: améliore la couverture utile sans présenter cela comme une perte de ranking;
- `uncertain`: applique uniquement la raison éditoriale indépendante vérifiée;
- `needs_query_check`: les recherches Google n'ont pas été diagnostiquées; applique uniquement la lacune éditoriale indépendante vérifiée, sans présenter la baisse d'impressions comme une perte de classement;
- opportunity: construis l'article autour de la décision choisie en phase 1. Le titre, le sous-titre et le résumé de phase 1 sont des formulations de travail: réévalue-les à partir de l'article final au lieu de reprendre mécaniquement la formulation de la décision.

Utilise des sources directement responsables. Les sources utilisées figurent dans `sources` et sont liées dans le corps lorsqu'elles ne concurrencent pas une offre partenaire. Aucun H1, tableau Markdown ou section Sources.

Sélectionne l'information au lieu de l'épuiser. Une information importante doit normalement apparaître une seule fois: l'introduction, les sections et la fin ne doivent pas redire la même chose. Une conclusion n'est pas obligatoire si elle ne fait que résumer. La structure doit découler du sujet et il n'existe aucun objectif de longueur; arrête-toi lorsque le sujet est traité complètement, sans remplissage.

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


Sélectionne seulement les liens internes réellement utiles et vérifie les routes avant usage. Lorsqu'une autre page Fam Space traite déjà correctement un sous-sujet, donne uniquement le contexte nécessaire puis renvoie vers cette page au lieu de refaire son contenu. Dans le texte public, oriente simplement le lecteur vers cette page sans commenter l'organisation éditoriale entre les articles. Le maillage doit prolonger la lecture et réduire les répétitions entre articles, pas seulement ajouter des liens.

Si du contenu temporaire est ajouté à un evergreen, utilise `reviewAt`; pour un événement pur, utilise `eventEndsAt`.

Soumets le résultat via `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées, puis le corps complet. **Ne recopie pas les métadonnées inchangées, aucun bloc `radar`, aucune branche et aucun SHA.** La plomberie mécanique conserve le reste, normalise la syntaxe de la requête et préserve le diagnostic GSC, la cible, le slug et les champs protégés.

## Candidat validé de la phase précédente

---
title: Où manger des fouées en famille autour de Saumur ?
subtitle: "Menus enfants, prix, visites et horaires: quatre adresses pour découvrir les fouées autour de Saumur."
summary: Quatre restaurants de fouées autour de Saumur comparés pour leurs menus enfants, leurs horaires et les visites à faire en famille.
slug: ou-manger-des-fouees-en-famille-autour-de-saumur
status: published
publishedAt: 2026-10-11T18:36:52+02:00
updatedAt: null
category: cuisine
readingTime: 5
location:
  city: Saumur
  department: Maine-et-Loire
  region: Pays de la Loire
topic:
  key: cuisine|saumur|ou-manger-des-fouees-en-famille-autour-de-saumur|2026
  keywords:
    - fouées Saumur
    - restaurant troglodytique Saumur
    - fouées en famille
    - restaurant famille Maine-et-Loire
image:
  src: /images/articles/2026/10/ou-manger-des-fouees-en-famille-autour-de-saumur.webp
  alt: Fouées angevines fourrées aux rillettes
sources:
  - title: Les Caves de la Genevraie - accueil et horaires
    url: https://www.caves-genevraie.fr/
  - title: Les Caves de la Genevraie - menus
    url: https://www.caves-genevraie.fr/menu-restaurant-troglodytique-doue-la-fontaine
  - title: La Cave aux Moines - site et horaires
    url: https://www.cave-aux-moines.com/
  - title: La Cave aux Moines - carte du restaurant
    url: https://www.cave-aux-moines.com/menu
  - title: Les Cathédrales de la Saulaie - accueil et horaires
    url: https://lescathedralesdelasaulaie.com/
  - title: Les Cathédrales de la Saulaie - menus
    url: https://lescathedralesdelasaulaie.com/menu/
  - title: Les Nobles Fouées - carte
    url: https://www.les-nobles-fouees-restaurant-saumur.fr/la-carte-les-nobles-fouees-restaurant-saumur
  - title: Les Nobles Fouées - horaires
    url: https://www.les-nobles-fouees-restaurant-saumur.fr/cartes-les-nobles-foues-restaurant-saumur
  - title: La Cave aux Moines - visite de la champignonnière
    url: https://www.cave-aux-moines.com/cave-champignonniere
  - title: Hôtel Rocaminori - proximité des restaurants
    url: https://www.rocaminori-hotel.fr/
  - title: Hôtel Rocaminori - types de chambres
    url: https://www.rocaminori-hotel.fr/chambres-hotel-troglodyte-anjou
affiliate:
  enabled: true
  type: travel
  destination: Saumur
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/cuisine/(2026)/(10)/ou-manger-des-fouees-en-famille-autour-de-saumur/index.md
  targetSha: 1922fbdc25e129914dbf42c68de423e591270905
  targetUrl: /articles/cuisine/ou-manger-des-fouees-en-famille-autour-de-saumur/
  decision: Choisir un restaurant de fouées adapté au budget, à l'âge des enfants et au jour de visite, notamment pendant les vacances de Noël, sans confondre repas et visite de cave.
  affiliationPotential: Conserver le lien Booking.com vers Rocaminori Hôtel; vérifier sa pertinence familiale et ses conditions sans prétendre connaître les disponibilités.
  gsc:
    retrievedAt: 2026-11-18T00:34:26+01:00
    dataThrough: 2026-11-15
    signal: needs_query_check
    basis: Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.
    peakStart: 2026-10-23
    peakEnd: 2026-10-29
    recentStart: 2026-11-09
    recentEnd: 2026-11-15
    peakImpressions: 309
    recentImpressions: 181
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - fouées Saumur
      - restaurant troglodytique Saumur
      - fouées en famille
      - restaurant famille Maine-et-Loire
---

## Mission retenue
Actualiser le comparatif de quatre restaurants de fouées autour de Saumur pour les familles qui réservent un repas pendant l'hiver et les vacances de Noël.

## Pourquoi cette mission
L'article figure parmi les pertes d'impressions du snapshot (309 puis 181 sur sept jours), mais la cause SEO n'est pas établie. Lacune indépendante: le calendrier spécifique des vacances de Noël de la Cave aux Moines, pourtant publié par le restaurant, n'est pas expliqué; les familles risquent d'écarter à tort une adresse en semaine. Les tarifs actuels de deux restaurants ont été revérifiés sur leurs cartes officielles.

## Décision du lecteur
Comparer le coût réel d'un repas pour deux adultes et un ou deux enfants, savoir quels jours chaque adresse peut accueillir une famille et déterminer si la visite de galeries ou de champignonnière est comprise ou séparée.

## Faits à traiter
- Cave aux Moines: du 16 septembre au 14 juin, ouverture habituelle du vendredi soir au dimanche soir; pendant les vacances scolaires de Noël, midi et soir tous les jours sauf 24 au soir, 25, 31 et 1er janvier toute la journée. Vérifier les réservations et ne pas garantir de table. Carte actuelle: 26,50 € adulte, 11 € enfant jusqu'à 12 ans.
- Cathédrales de la Saulaie: menu 27,90 € en semaine, +4 € le week-end et jours fériés, enfant 14 € de 3 à 12 ans. Les pages officielles donnent des indications saisonnières parfois divergentes: inviter à confirmer le service précis plutôt que trancher sans preuve.
- Revérifier les deux autres adresses avant de toucher leurs prix ou horaires. Donner des exemples de budget familial seulement à partir de menus réellement comparables, en précisant boissons et limites d'âge.
- Préserver les quatre établissements, leurs particularités, l'avertissement végétarien de Genevraie, la distinction repas/visite, l'accessibilité non confirmée, les photographies, crédits, sources, liens internes et hébergement existant.

## Sources de départ
- https://www.cave-aux-moines.com/menu
- https://www.cave-aux-moines.com/
- https://lescathedralesdelasaulaie.com/menu/
- https://lescathedralesdelasaulaie.com/
- https://www.caves-genevraie.fr/menu-restaurant-troglodytique-doue-la-fontaine
- https://www.les-nobles-fouees-restaurant-saumur.fr/la-carte-les-nobles-fouees-restaurant-saumur

## Affiliation
Maintenir Rocaminori Hôtel via Booking.com si les caractéristiques des chambres restent pertinentes pour une famille; ne pas ajouter de lien de réservation officiel concurrent à une offre partenaire disponible.

## Continuations internes
- Conserver le lien existant vers l'hébergement et les sources officielles, sans transformer ce guide culinaire en guide général de Saumur.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/cuisine/(2026)/(10)/ou-manger-des-fouees-en-famille-autour-de-saumur/index.md

---
title: Où manger des fouées en famille autour de Saumur ?
subtitle: "Menus enfants, prix, visites et horaires: quatre adresses pour découvrir les fouées autour de Saumur."
summary: Quatre restaurants de fouées autour de Saumur comparés pour leurs menus enfants, leurs horaires et les visites à faire en famille.
slug: ou-manger-des-fouees-en-famille-autour-de-saumur
status: published
publishedAt: 2026-10-11T18:36:52+02:00
updatedAt: null
category: cuisine
readingTime: 5
location:
  city: Saumur
  department: Maine-et-Loire
  region: Pays de la Loire
topic:
  key: cuisine|saumur|ou-manger-des-fouees-en-famille-autour-de-saumur|2026
  keywords:
    - fouées Saumur
    - restaurant troglodytique Saumur
    - fouées en famille
    - restaurant famille Maine-et-Loire
image:
  src: "/images/articles/2026/10/ou-manger-des-fouees-en-famille-autour-de-saumur.webp"
  alt: "Fouées angevines fourrées aux rillettes"
sources:
  - title: Les Caves de la Genevraie - accueil et horaires
    url: https://www.caves-genevraie.fr/
  - title: Les Caves de la Genevraie - menus
    url: https://www.caves-genevraie.fr/menu-restaurant-troglodytique-doue-la-fontaine
  - title: La Cave aux Moines - site et horaires
    url: https://www.cave-aux-moines.com/
  - title: La Cave aux Moines - carte du restaurant
    url: https://www.cave-aux-moines.com/menu
  - title: Les Cathédrales de la Saulaie - accueil et horaires
    url: https://lescathedralesdelasaulaie.com/
  - title: Les Cathédrales de la Saulaie - menus
    url: https://lescathedralesdelasaulaie.com/menu/
  - title: Les Nobles Fouées - carte
    url: https://www.les-nobles-fouees-restaurant-saumur.fr/la-carte-les-nobles-fouees-restaurant-saumur
  - title: Les Nobles Fouées - horaires
    url: https://www.les-nobles-fouees-restaurant-saumur.fr/cartes-les-nobles-foues-restaurant-saumur
  - title: La Cave aux Moines - visite de la champignonnière
    url: https://www.cave-aux-moines.com/cave-champignonniere
  - title: Hôtel Rocaminori - proximité des restaurants
    url: https://www.rocaminori-hotel.fr/
  - title: Hôtel Rocaminori - types de chambres
    url: https://www.rocaminori-hotel.fr/chambres-hotel-troglodyte-anjou
affiliate:
  enabled: true
  type: travel
  destination: Saumur
---
<!-- article-image-credit -->
*Photo: [Romain Bréget](https://commons.wikimedia.org/wiki/File:Fou%C3%A9es_angevines_avec_rillettes.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Autour de Saumur, les fouées sont de petits pains cuits au feu de bois, servis chauds avec des garnitures comme les rillettes, les champignons, les mogettes ou le fromage. Plusieurs restaurants les proposent dans un décor troglodytique, mais les prix, les menus enfants et les visites possibles ne sont pas les mêmes.

Voici quatre adresses pour organiser un repas en famille: les Caves de la Genevraie à Louresse-Rochemenier, les Pieds Bleus à la Cave aux Moines à Gennes-Val-de-Loire, les Cathédrales de la Saulaie à Doué-en-Anjou et les Nobles Fouées à Saumur.

## Les Caves de la Genevraie: menu enfant à 10 € et galeries pendant le repas

À Rochemenier, à environ 5 km de Doué-en-Anjou, [Les Caves de la Genevraie](https://www.caves-genevraie.fr/) servent un menu unique de fouaces dans des caves troglodytiques.

Le [menu adulte](https://www.caves-genevraie.fr/menu-restaurant-troglodytique-doue-la-fontaine) est affiché à **27 €**. Il comprend notamment fouaces aux champignons, rillettes, mogettes et fromage, avec apéritif, vin et café. La visite du four et des galeries se fait pendant le repas.

Pour les enfants, le site annonce un **menu à 10 €**, boissons comprises. C'est le tarif enfant le plus bas des quatre adresses comparées ici.

Côté horaires, le restaurant indique une ouverture toute l'année **du vendredi soir au dimanche midi**. En semaine, il ouvre sur réservation à partir de 15 couverts. En juillet et août, l'ouverture devient quotidienne sauf le lundi.

Un point mérite d'être signalé si vous cherchez un repas réellement végétarien: le site décrit son "menu végétarien" avec des **rillettes de poisson**. Il faut donc demander une adaptation claire au moment de réserver plutôt que se fier uniquement à l'intitulé.

## La Cave aux Moines: fouées à volonté et champignonnière

À Chênehutte-Trèves-Cunault, la [Cave aux Moines](https://www.cave-aux-moines.com/) combine un restaurant, Les Pieds Bleus, et une ancienne cave champignonnière. Le site est annoncé comme de plain-pied et accueille aussi une visite consacrée au tuffeau, à la culture des champignons et aux galeries souterraines.

La [carte du restaurant](https://www.cave-aux-moines.com/menu) propose plusieurs menus adultes. Le premier, le **Menu de la Cave à 26,50 €**, comprend notamment une assiette de spécialités locales, des **fouées chaudes à volonté**, fromage, dessert et café. Les formules plus complètes montent à 29,50 € ou 32 €.

Le **menu enfant coûte 11 € jusqu'à 12 ans** et comprend fouées à volonté, garnitures, fromage, dessert et sirop à l'eau.

La [visite de la champignonnière](https://www.cave-aux-moines.com/cave-champignonniere) permet de découvrir les galeries et la culture des champignons. Elle se prépare séparément du repas: vérifiez ses horaires et ses conditions, sans supposer qu'elle est comprise dans le menu.

Du 16 septembre au 14 juin, le restaurant ouvre normalement **du vendredi soir au dimanche soir**, avec ouverture en semaine sur réservation. Du 15 juin au 15 septembre, il est ouvert midi et soir tous les jours sauf le lundi. Des horaires spécifiques sont annoncés pour les vacances de Noël et de Pâques.

## Les Cathédrales de la Saulaie: de grandes salles souterraines

<!-- article-image-body:01 -->

![Intérieur des Cathédrales de la Saulaie, espace troglodytique de Doué-la-Fontaine](/images/articles/2026/10/ou-manger-des-fouees-en-famille-autour-de-saumur-body-01.webp)

<!-- /article-image-body:01 -->

À Doué-en-Anjou, [Les Cathédrales de la Saulaie](https://lescathedralesdelasaulaie.com/) occupent de vastes salles creusées dans le falun. Le restaurant met en avant ses fouées cuites au feu de bois et un parcours historique son et lumière après les repas.

Le [menu Fouée Troglodythe](https://lescathedralesdelasaulaie.com/menu/) est affiché à **27,90 € en semaine**, ou **31,90 € le week-end et les jours fériés** (supplément de 4 €).

Le **menu enfant coûte 14 € pour les 3 à 12 ans**. Il comprend notamment boisson, fouées, rillettes, rillauds, pommes de terre et garnitures sucrées.

Pour les horaires, la page d'accueil annonce des services du mardi au samedi, midi et soir, ainsi que le dimanche midi. Le pied de page précise une ouverture saisonnière **du 1er avril au 22 décembre**, puis un fonctionnement plus restreint le reste de l'année. **Confirmez les jours et services proposés avant de partir**, surtout hors saison.

## Les Nobles Fouées: un repas de fouées dans Saumur

[Les Nobles Fouées](https://www.les-nobles-fouees-restaurant-saumur.fr/la-carte-les-nobles-fouees-restaurant-saumur) se trouvent au **23 rue Fouquet à Saumur**. C'est la seule des quatre adresses située directement dans la ville, ce qui peut simplifier un repas après une visite du centre ou du château.

La [carte](https://www.les-nobles-fouees-restaurant-saumur.fr/la-carte-les-nobles-fouees-restaurant-saumur) propose un **menu à 19,50 € hors week-end et jours fériés**, un **menu fouées à 22 €**, ainsi qu'un menu découverte et un menu végétarien à **26 €**. Les fouées sont servies à volonté, avec des garnitures qui varient selon la formule.

Le **menu Bambino est à 14,50 € pour les enfants jusqu'à 12 ans**. Il comprend boisson, fouées avec plusieurs garnitures, une petite pizza à base de fouée, mogettes, salade et dessert.

Les [horaires publiés](https://www.les-nobles-fouees-restaurant-saumur.fr/cartes-les-nobles-foues-restaurant-saumur) sont actuellement du **mercredi au samedi de 12 h à 15 h et de 19 h à 22 h**, puis le **dimanche de 12 h à 15 h**. Le restaurant conseille lui-même de vérifier les jours d'ouverture via son système de réservation ou par téléphone.

## Quelle adresse choisir avec des enfants ?

Pour un menu enfant économique, **les Caves de la Genevraie (10 €)** et **la Cave aux Moines (11 €)** sont les deux options les moins chères de cette sélection. Pour associer le repas à une sortie, la Cave aux Moines propose une champignonnière à visiter; à la Genevraie, on découvre le four et les galeries pendant le repas.

Si vous logez déjà à Saumur, **les Nobles Fouées** évitent de rejoindre une autre commune. **Les Cathédrales de la Saulaie** séduiront plutôt les familles attirées par les grandes salles souterraines et le parcours son et lumière proposé après le repas.

Dans tous les cas, mieux vaut réserver, surtout le week-end et pendant les vacances scolaires. Pour les poussettes, les chaises hautes ou les besoins d'accessibilité, demandez les précisions nécessaires directement au restaurant.

## Dormir à deux pas des Caves de la Genevraie

Pour prolonger le repas par un week-end dans le Saumurois, [le Rocaminori Hôtel à Louresse-Rochemenier](https://www.booking.com/hotel/fr/rocaminori.fr.html) est attenant aux Caves de la Genevraie. Il propose des chambres troglodytiques et des chambres triples. Vérifiez les couchages et les disponibilités adaptés à votre famille avant de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/parentalite/laep-en-maine-et-loire-ou-aller-avec-son-bebe-et-comment-se-passe-l-accueil/ | LAEP en Maine-et-Loire: où aller avec son bébé et comment se passe l'accueil ? | parentalite | Maine-et-Loire, Pays de la Loire
- /articles/sorties/chasse-tresor-galerie-david-angers-2026/ | Chasse au trésor à Angers: les 4 à 6 ans enquêtent à la Galerie David | sorties | Angers, Maine-et-Loire, Pays de la Loire
- /articles/sorties/chateau-de-boutheon-avec-des-enfants-chateau-parc-ou-billet-couple/ | Château de Bouthéon avec des enfants: château, parc ou billet couplé? | sorties | Andrézieux-Bouthéon, Loire, Auvergne-Rhône-Alpes
- /articles/bons-plans/incontournables71-comment-profiter-des-50-de-reductions-en-saone-et-loire/ | Incontournables71: comment profiter des 50 € de réductions en Saône-et-Loire | bons-plans | Mâcon, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/activites/escape-game-du-chateau-de-la-roche-en-famille-alerte-submersion-des-10-ans/ | Escape game du Château de la Roche en famille: Alerte Submersion dès 10 ans | activites | Saint-Priest-la-Roche, Loire, Auvergne-Rhône-Alpes
- /articles/voyages/charlieu-en-famille-abbaye-musees-et-balades-dans-la-loire/ | Charlieu en famille: abbaye, musées et balades dans la Loire | voyages | Charlieu, Loire, Auvergne-Rhône-Alpes
- /articles/maison/maison-de-vacances-a-amboise-avec-des-enfants-7-criteres-pour-bien-choisir/ | Maison de vacances à Amboise avec des enfants: 7 critères pour bien choisir | maison | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/voyages/le-puy-en-velay-avec-des-enfants-ou-dormir-pour-visiter-la-ville-a-pied/ | Le Puy-en-Velay avec des enfants: où dormir pour visiter la ville à pied | voyages | Le Puy-en-Velay, Haute-Loire, Auvergne-Rhône-Alpes
- /articles/cuisine/ou-manger-des-fouees-en-famille-autour-de-saumur/ | Où manger des fouées en famille autour de Saumur ? | cuisine | Saumur, Maine-et-Loire, Pays de la Loire
- /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | Noël à Fontevraud 2026: patinoire, marché, dates et tarifs en famille | evenements | Fontevraud-l'Abbaye, Maine-et-Loire, Pays de la Loire
- /articles/parentalite/ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille/ | Ludothèque du Choletais: jouer sur place et emprunter en famille | parentalite | Cholet, Maine-et-Loire, Pays de la Loire
- /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | Fête de l'Automne 2026 à Terra Botanica: animations et tarifs | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | Monument Jeu d’Enfant au château d’Angers: dragons et ateliers le 17 octobre 2026 | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/maison/composteur-gratuit-a-angers-loire-metropole-qui-peut-le-demander/ | Composteur gratuit à Angers Loire Métropole: qui peut le demander? | maison | Angers, Maine-et-Loire, Pays de la Loire
- /articles/vie-pratique/garde-d-enfants-sur-horaires-atypiques-a-angers-qui-peut-demander-l-aide-du-ccas/ | Garde d'enfants sur horaires atypiques à Angers: qui peut demander l'aide du CCAS? | vie-pratique | Angers, Maine-et-Loire, Pays de la Loire
- /articles/cuisine/roquefort-en-famille-visiter-les-caves-et-le-cuisiner-avec-les-enfants/ | Roquefort en famille: visiter les caves et le cuisiner avec les enfants | cuisine | Roquefort-sur-Soulzon, Aveyron, Occitanie
- /articles/cuisine/petit-epeautre-du-ventoux-quatre-idees-pour-le-cuisiner-en-famille/ | Petit épeautre du Ventoux: quatre idées pour le cuisiner en famille | cuisine | Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/cuisine/madeleines-de-saint-yrieix-une-recette-a-faire-avec-les-enfants/ | Madeleines de Saint-Yrieix: une recette à faire avec les enfants | cuisine | Saint-Yrieix-la-Perche, Haute-Vienne, Nouvelle-Aquitaine
- /articles/cuisine/a-beaune-fabriquer-sa-moutarde-en-famille-et-l-utiliser-en-cuisine/ | À Beaune, fabriquer sa moutarde en famille et l’utiliser en cuisine | cuisine | Beaune, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/cuisine/atelier-chocolat-a-colmar-avec-des-enfants-fabriquer-sa-tablette-chez-choco-story/ | Atelier chocolat à Colmar avec des enfants: fabriquer sa tablette chez Choco-Story | cuisine | Colmar, Haut-Rhin, Grand Est
- /articles/cuisine/cuisiner-la-banane-en-martinique-du-ti-nain-au-gouter-familial/ | Cuisiner la banane en Martinique: du ti-nain au goûter familial | cuisine | Martinique

### Historique Radar lié

- opportunity | /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | 2026-10-13T12:37:05.098Z
- refresh | /articles/parentalite/ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille/ | 2026-11-10T03:33:47.847Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | 2026-10-10T08:38:56.921Z
- opportunity | /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | 2026-10-28T01:34:03.741Z
- opportunity | /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | 2026-10-30T12:36:12.349Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
