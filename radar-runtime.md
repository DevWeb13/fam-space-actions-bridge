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
title: "Parc animalier de Gramat en famille: billets, animaux et conseils de visite"
subtitle: Quatre kilomètres de découverte dans le Lot, avec le bon billet selon le nombre de visites
summary: "Billets à l'unité ou pass annuel, nourrissages compris ou privés, parcours de 4 km, poussettes et horaires: les choix utiles pour visiter Gramat avec des enfants."
slug: parc-animalier-de-gramat-en-famille-animaux-duree-et-conseils-de-visite
status: published
publishedAt: 2026-10-27T08:27:57+01:00
updatedAt: 2026-11-08T19:34:02.838Z
category: activites
readingTime: 7
location:
  city: Gramat
  department: Lot
  region: Occitanie
topic:
  key: activites|gramat|parc-animalier-de-gramat-en-famille-animaux-duree-et-conseils-de-visite|2026
  keywords:
    - parc animalier de Gramat en famille
    - visiter parc animalier Gramat avec enfants
    - parc animalier Gramat horaires tarifs
    - sortie famille Lot
image:
  src: /images/articles/2026/10/parc-animalier-de-gramat-en-famille-animaux-duree-et-conseils-de-visite.webp
  alt: Meute de loups photographiée au parc animalier de Gramat, dans le Lot
sources:
  - title: Parc animalier de Gramat - Les observatoires
    url: https://www.gramat-parc-animalier.com/decouvrir-le-parc/notre-vision/les-observatoires/
  - title: Parc animalier de Gramat - Visiter en famille
    url: https://www.gramat-parc-animalier.com/preparer-sa-visite/visiter-en-famille/
  - title: Parc animalier de Gramat - FAQ
    url: https://www.gramat-parc-animalier.com/preparer-sa-visite/faq/
  - title: Parc animalier de Gramat - Accessibilité et handicap
    url: https://www.gramat-parc-animalier.com/preparer-sa-visite/accessibilite-handicap/
  - title: Parc animalier de Gramat - Services
    url: https://www.gramat-parc-animalier.com/preparer-sa-visite/services/
  - title: Parc animalier de Gramat - Agenda des animations
    url: https://www.gramat-parc-animalier.com/agenda/
  - title: Parc animalier de Gramat - Soigneur d’un jour
    url: https://www.gramat-parc-animalier.com/immersive-experience/soigneur-dun-jour/
  - title: Parc animalier de Gramat - Horaires et tarifs
    url: https://www.gramat-parc-animalier.com/preparer-sa-visite/horaires-et-tarifs/
  - title: Parc animalier de Gramat - Nourrissage à la carte
    url: https://www.gramat-parc-animalier.com/immersive-experience/nourrissage-a-la-carte/
  - title: Parc animalier de Gramat - Se restaurer
    url: https://www.gramat-parc-animalier.com/preparer-sa-visite/se-restaurer/
  - title: Parc animalier de Gramat - Venir au parc
    url: https://www.gramat-parc-animalier.com/preparer-sa-visite/venir-au-parc/
affiliate:
  enabled: true
  type: travel
  destination: Gramat
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/activites/(2026)/(10)/parc-animalier-de-gramat-en-famille-animaux-duree-et-conseils-de-visite/index.md
  targetSha: f6b8f54ad8be6f34be188a6b31a453dd5f211862
  targetUrl: /articles/activites/parc-animalier-de-gramat-en-famille-animaux-duree-et-conseils-de-visite/
  decision: Choisir entre une visite familiale classique en journée et les expériences hivernales annoncées, sans confondre horaires, billets ni activités incluses.
  affiliationPotential: Conserver les hébergements Booking.com et Abritel déjà intégrés; billets et expériences réservables directement auprès du parc, sans partenaire billetterie confirmé.
  gsc:
    retrievedAt: 2026-11-23T02:29:06+01:00
    dataThrough: 2026-11-20
    signal: uncertain
    basis: "Visibilité récente : 36 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-28
    peakEnd: 2026-10-30
    recentStart: 2026-11-18
    recentEnd: 2026-11-20
    peakImpressions: 36
    recentImpressions: 0
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - parc animalier gramat duree visite
      - combien de temps pour visiter le parc animalier de gramat
      - visiter gramat lot
      - avis sur parc animalier de gramat
---

## Mission retenue
Actualiser le guide familial du Parc animalier de Gramat à l'approche des vacances de Noël, en clarifiant les animations hivernales et leur réservation éventuelle.

## Pourquoi cette mission
Le snapshot GSC signale 36 impressions puis 0, sans cause SEO établie: ne pas attribuer cette baisse au contenu. Lacune indépendante: l'article détaille la visite classique, mais ne distingue pas les illuminations hivernales et la journée de Noël désormais annoncées sur le site du parc. Ces offres peuvent modifier le choix d'une famille en décembre.

## Décision du lecteur
Savoir si une sortie de jour suffit, si une animation de Noël ou une visite illuminée est adaptée à ses enfants, et quel billet ou créneau réserver.

## Faits à traiter
Vérifier sur les pages officielles les dates 2026-2027, horaires, âges, tarifs, conditions de réservation et éventuel billet distinct pour « Visions nocturnes » et la journée de Noël du 20 décembre. Si les modalités ne sont pas confirmées, le dire sans inventer. Bien séparer ces expériences de la visite libre (2 novembre-18 décembre, 13 h 30-17 h 30; vacances à partir du 19 décembre, 13 h-17 h 30; fermé le 25 décembre). Préserver le circuit de 4 km, les conseils poussette/PMR, les nourrissages, le budget billets/pass, les photos, crédits et deux hébergements existants. Ne pas transformer le guide en annonce d'événement.

## Sources de départ
- https://www.gramat-parc-animalier.com/
- https://www.gramat-parc-animalier.com/agenda/
- https://www.gramat-parc-animalier.com/preparer-sa-visite/horaires-et-tarifs/
- https://www.gramat-parc-animalier.com/experiences-immersives/

## Affiliation
Conserver les liens Booking.com et Abritel déjà présents; aucune offre de billetterie partenaire vérifiée pour ces animations.

## Continuations internes
- Vérifier si Fam Space couvre déjà spécifiquement les illuminations du parc avant de développer ce sous-sujet.
- Conserver le maillage vers le Gouffre de Padirac sans promettre son ouverture hivernale.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/activites/(2026)/(10)/parc-animalier-de-gramat-en-famille-animaux-duree-et-conseils-de-visite/index.md

---
title: "Parc animalier de Gramat en famille: billets, animaux et conseils de visite"
subtitle: Quatre kilomètres de découverte dans le Lot, avec le bon billet selon le nombre de visites
summary: "Billets à l'unité ou pass annuel, nourrissages compris ou privés, parcours de 4 km, poussettes et horaires: les choix utiles pour visiter Gramat avec des enfants."
slug: parc-animalier-de-gramat-en-famille-animaux-duree-et-conseils-de-visite
status: published
publishedAt: 2026-10-27T08:27:57+01:00
updatedAt: 2026-11-08T19:34:02.838Z
category: activites
readingTime: 7
location:
  city: Gramat
  department: Lot
  region: Occitanie
topic:
  key: activites|gramat|parc-animalier-de-gramat-en-famille-animaux-duree-et-conseils-de-visite|2026
  keywords:
    - parc animalier de Gramat en famille
    - visiter parc animalier Gramat avec enfants
    - parc animalier Gramat horaires tarifs
    - sortie famille Lot
image:
  src: /images/articles/2026/10/parc-animalier-de-gramat-en-famille-animaux-duree-et-conseils-de-visite.webp
  alt: Meute de loups photographiée au parc animalier de Gramat, dans le Lot
sources:
  - title: Parc animalier de Gramat - Les observatoires
    url: https://www.gramat-parc-animalier.com/decouvrir-le-parc/notre-vision/les-observatoires/
  - title: Parc animalier de Gramat - Visiter en famille
    url: https://www.gramat-parc-animalier.com/preparer-sa-visite/visiter-en-famille/
  - title: Parc animalier de Gramat - FAQ
    url: https://www.gramat-parc-animalier.com/preparer-sa-visite/faq/
  - title: Parc animalier de Gramat - Accessibilité et handicap
    url: https://www.gramat-parc-animalier.com/preparer-sa-visite/accessibilite-handicap/
  - title: Parc animalier de Gramat - Services
    url: https://www.gramat-parc-animalier.com/preparer-sa-visite/services/
  - title: Parc animalier de Gramat - Agenda des animations
    url: https://www.gramat-parc-animalier.com/agenda/
  - title: Parc animalier de Gramat - Soigneur d’un jour
    url: https://www.gramat-parc-animalier.com/immersive-experience/soigneur-dun-jour/
  - title: Parc animalier de Gramat - Horaires et tarifs
    url: https://www.gramat-parc-animalier.com/preparer-sa-visite/horaires-et-tarifs/
  - title: Parc animalier de Gramat - Nourrissage à la carte
    url: https://www.gramat-parc-animalier.com/immersive-experience/nourrissage-a-la-carte/
  - title: Parc animalier de Gramat - Se restaurer
    url: https://www.gramat-parc-animalier.com/preparer-sa-visite/se-restaurer/
  - title: Parc animalier de Gramat - Venir au parc
    url: https://www.gramat-parc-animalier.com/preparer-sa-visite/venir-au-parc/
affiliate:
  enabled: true
  type: travel
  destination: Gramat
---

<!-- article-image-credit -->
*Photo: [Julien 31](https://commons.wikimedia.org/wiki/File:Canis_lupus_meute_Gramat.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Gramat, dans le Lot, près de Rocamadour, le parc animalier invite les familles à découvrir la faune européenne au fil d’une promenade en plein air. Loups, ours et élans se découvrent le long d’un circuit de 4 km: mieux vaut envisager une petite randonnée ponctuée d’observations qu’une visite rapide de zoo. Pour le budget, le choix dépend surtout du nombre de visites prévues et de l’envie de réserver une expérience privée.

## Quel billet choisir: visite ponctuelle ou pass annuel ?

Les [tarifs officiels 2026](https://www.gramat-parc-animalier.com/preparer-sa-visite/horaires-et-tarifs/) distinguent la visite libre au guichet (**17 € par adulte, 11 € par enfant de 4 à 11 ans inclus**) et les billets achetés en ligne (**16 € et 10 €**). L’entrée est gratuite pour les moins de 4 ans. Le billet web de visite libre est non daté; vérifiez ses conditions au moment de l’achat.

Pour les familles qui habitent à proximité ou reviennent régulièrement, le **pass annuel nominatif** coûte **35 € par adulte et 25 € par enfant de 4 à 11 ans**. Il permet de visiter librement le parc pendant un an de date à date, avec accès aux animations de nourrissage des week-ends et vacances. Une photo d’identité est nécessaire pour établir la carte.

En comparant uniquement les entrées aux billets web, **trois visites** rendent le pass plus intéressant pour un adulte (35 € contre 48 €) comme pour un enfant payant (25 € contre 30 €). Pour une famille de deux adultes et deux enfants de 4 à 11 ans, trois visites coûteraient **156 € en billets web**, contre **120 € en pass annuels**, soit 36 € d’écart. Avec une ou deux visites, les billets ponctuels restent moins chers. Ces comparaisons ne tiennent pas compte d’éventuelles réductions particulières.

## Nourrissage public ou rencontre privée: quelle différence ?

Les animations publiques de nourrissage sont **comprises dans le billet**, notamment les week-ends et pendant les vacances. Elles varient selon la période et les animaux: consultez l’[agenda du parc](https://www.gramat-parc-animalier.com/agenda/) pour choisir votre jour plutôt que de promettre aux enfants un rendez-vous précis.

Le [nourrissage à la carte](https://www.gramat-parc-animalier.com/immersive-experience/nourrissage-a-la-carte/) est une autre formule: **45 € pour un groupe de 1 à 6 personnes**, pour environ **20 minutes** guidées par un soigneur. **Les entrées du parc ne sont pas incluses**: le parc indique qu’elles sont à réserver séparément **au tarif réduit**. La réservation s’effectue uniquement en ligne, **au moins 48 heures à l’avance**, sur les créneaux proposés à **15 h ou 16 h**. Il faut préciser l’animal souhaité en commentaire; loups, ours, rennes, renards polaires, ratons laveurs, porcs-épics ou genettes sont évoqués, sous réserve des disponibilités et conditions saisonnières.

À titre d’exemple, pour deux adultes et deux enfants payants, le nourrissage privé représente **45 € en plus des quatre entrées à tarif réduit**, et non un forfait familial d’accès au parc. Pour une expérience différente, [« Soigneur d’un jour »](https://www.gramat-parc-animalier.com/immersive-experience/soigneur-dun-jour/) est accessible dès 8 ans, se réserve exclusivement en ligne et occupe une matinée spécifique.

## Loups, ours, élans: que voit-on vraiment ?

Trois espaces méritent particulièrement qu’on prenne son temps. À la tanière des loups, une passerelle surélevée puis un espace vitré permettent d’observer les déplacements de la meute. L’observatoire des élans offre plusieurs angles de vue sur ces grands cervidés, tandis que la doline des ours dispose notamment d’une grotte vitrée. Ces aménagements sont décrits sur la page officielle des [observatoires du parc](https://www.gramat-parc-animalier.com/decouvrir-le-parc/notre-vision/les-observatoires/).

L’observation dépend des animaux: un loup peut rester à distance, un ours se reposer. Avec les enfants, prendre quelques minutes devant un enclos permet parfois de repérer un comportement qu’on aurait manqué en passant trop vite.

## À quel âge la sortie est-elle la plus intéressante ?

Avec un tout-petit, les petites chèvres et l’aire de jeux offrent des moments plus immédiats que l’attente devant un grand enclos. Le parc présente aussi des panneaux pédagogiques pour les enfants plus grands qui veulent comprendre les comportements des animaux, comme le détaille la rubrique [visiter en famille](https://www.gramat-parc-animalier.com/preparer-sa-visite/visiter-en-famille/).

## Quatre kilomètres à parcourir: quel rythme prévoir ?

Le [parcours annoncé](https://www.gramat-parc-animalier.com/preparer-sa-visite/faq/) mesure **4 km**, pour une durée moyenne d’environ **3 heures**. Cette moyenne est une bonne base, pas une obligation. Avec des enfants qui s’arrêtent longuement devant les animaux, une pause repas ou un bébé à changer, il est préférable de garder une marge. Prévoyez aussi de pouvoir écourter le circuit en cas de fatigue.

Une façon simple d’organiser la promenade consiste à choisir deux ou trois observations prioritaires, puis à laisser le reste de la visite se faire au rythme du groupe. Prévoyez des chaussures adaptées aux chemins, de l’eau et des vêtements en fonction de la météo. En période de pluie, certains espaces d’observation sont couverts, mais l’essentiel de la sortie reste dehors.

### Poussette, fauteuil roulant et bébé: les limites à connaître

Le parc annonce un parcours **adapté aux poussettes**, mais cela ne signifie pas que tous les chemins sont plats. Selon sa page [accessibilité](https://www.gramat-parc-animalier.com/preparer-sa-visite/accessibilite-handicap/), **80 % du parcours sont accessibles en fauteuil roulant**. Certaines portions, notamment vers la volière, les ours ou les chevaux de Przewalski, présentent des pentes plus marquées; les chemins peuvent aussi être creusés après de fortes pluies.

Pour une poussette chargée ou une personne ayant des difficultés de déplacement, mieux vaut donc se renseigner auprès de l’accueil sur les portions à privilégier, plutôt que de compter sur une accessibilité intégrale. Les familles disposent, selon la liste des [services du parc](https://www.gramat-parc-animalier.com/preparer-sa-visite/services/), d’un prêt de poussettes, d’un espace de change et d’une chaise haute pour bébé. Le site mentionne également des sanitaires, des zones de repos et un parking gratuit.

## Quelle saison choisir, notamment en automne ou en hiver ?

Le parc est ouvert toute l’année **sauf le 25 décembre**, mais l’amplitude horaire change fortement. Selon les [horaires officiels](https://www.gramat-parc-animalier.com/preparer-sa-visite/horaires-et-tarifs/) affichés pour 2026:

- **Du 31 août au 1er novembre 2026**: 10 h à 18 h 30.
- **Du 2 novembre au 18 décembre 2026**: 13 h 30 à 17 h 30.
- **Du 19 décembre 2026 au 3 janvier 2027**: 13 h à 17 h 30, avec fermeture le 25 décembre.

L’hiver n’est pas une saison sans animaux: le parc indique que la majorité restent visibles, notamment les rennes, les élans et les renards polaires; la marmotte, elle, hiberne. En revanche, une ouverture à 13 h 30 laisse moins de souplesse pour parcourir 4 km avec de jeunes enfants. Pour une sortie hivernale, il est judicieux d’arriver dès l’ouverture et de ne pas prévoir un long déjeuner au milieu du circuit. Les horaires des périodes suivantes sont à revérifier avant de partir.

## Manger sur place sans mauvaise surprise

Le [self du parc](https://www.gramat-parc-animalier.com/preparer-sa-visite/se-restaurer/) fonctionne du début des vacances de Pâques à la fin de celles de Toussaint: il ne faut donc pas compter dessus pour un déjeuner hivernal. La buvette ouvre tous les jours d’avril à octobre et pendant les vacances scolaires; en basse saison, elle annonce les mercredis, samedis et dimanches. Vérifiez les horaires avant de compter dessus.

Le pique-nique est autorisé à l’intérieur, dans un espace aménagé près des ours. C’est la solution la plus souple avec de jeunes enfants, particulièrement hors saison. Si vous voyagez avec un bébé, apportez son repas habituel: aucun service de réchauffage des petits pots n’est confirmé dans les informations consultées.

## Venir au parc

Le parc se trouve au **1681 avenue André-Malraux, 46500 Gramat**. La page [venir au parc](https://www.gramat-parc-animalier.com/preparer-sa-visite/venir-au-parc/) indique un parking gratuit, des bornes de recharge, une gare à Gramat et environ **40 minutes à pied depuis le centre-ville**. Les bus liO mentionnés pour desservir le parc sont **estivaux**: hors été, ne présumez pas d’une correspondance en transport en commun jusqu’à l’entrée.

## Prolonger la visite par une nuit à Gramat

Si vous prévoyez un week-end dans le nord du Lot, ces deux hébergements permettent de rejoindre facilement le parc:

- [La résidence Lagrange Vacances Les Ségalières sur Booking.com](https://www.booking.com/hotel/fr/les-segalieres.fr.html), face au parc animalier, propose des cottages familiaux avec kitchenette, terrasse et parking. Vérifiez les éventuels suppléments pour le linge.
- [Cette maison en pierre à Gramat sur Abritel](https://www.abritel.fr/location-vacances/p1582195a) accueille quatre personnes, avec deux chambres, une cuisine et un jardin, à environ trois minutes en voiture du parc. Un escalier raide et un cours d’eau signalés dans les avis demandent de la vigilance avec de jeunes enfants.

Vérifiez les conditions et la disponibilité selon vos dates. Pour une autre sortie dans le secteur, notre [guide du Gouffre de Padirac avec des enfants](https://www.fam-space.fr/articles/sorties/gouffre-de-padirac-en-famille-tarifs-poussette-et-conseils-pour-la-visite/) explique les contraintes d’accès; pensez à vérifier sa période d’ouverture.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/parc-animalier-d-auvergne-en-famille-billets-animaux-et-conseils-de-visite/ | Parc animalier d'Auvergne en famille: billets, animaux et conseils de visite | activites | Ardes, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/activites/parc-animalier-d-ecouves-en-famille-tarifs-horaires-et-conseils-pour-la-visite/ | Parc animalier d'Ecouves en famille: tarifs, horaires et conseils pour la visite | activites | Le Bouillon, Orne, Normandie
- /articles/activites/parc-de-courzieu-en-famille-tarifs-horaires-et-conseils-pour-la-visite/ | Parc de Courzieu en famille: tarifs, horaires et conseils pour la visite | activites | Courzieu, Rhône, Auvergne-Rhône-Alpes
- /articles/activites/biotropica-en-famille-a-val-de-reuil-animaux-tarifs-et-visite-par-temps-de-pluie/ | Biotropica en famille à Val-de-Reuil: animaux, tarifs et visite par temps de pluie | activites | Val-de-Reuil, Eure, Normandie
- /articles/sorties/mont-faron-en-famille-telepherique-parc-animalier-et-conseils-2026/ | Mont Faron en famille: téléphérique, parc animalier et conseils 2026 | sorties | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/activites/le-pal-ou-touroparc-en-famille-quel-parc-choisir-en-2026/ | Le PAL ou Touroparc en famille: quel parc choisir en 2026? | activites
- /articles/activites/parc-de-l-auxois-avec-des-enfants-comment-combiner-animaux-maneges-et-piscine/ | Parc de l'Auxois avec des enfants: comment combiner animaux, manèges et piscine | activites | Arnay-sous-Vitteaux, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/activites/parc-phoenix-a-nice-en-famille-serre-tropicale-animaux-et-jeux/ | Parc Phoenix à Nice en famille: serre tropicale, animaux et jeux | activites | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/activites/parc-animalier-de-gramat-en-famille-animaux-duree-et-conseils-de-visite/ | Parc animalier de Gramat en famille: billets, animaux et conseils de visite | activites | Gramat, Lot, Occitanie
- /articles/vie-pratique/ordi-lot-2026-2027-prix-demarches-et-delais-pour-les-familles/ | Ordi'Lot 2026-2027: prix, démarches et délais pour les familles | vie-pratique | Lot, Occitanie
- /articles/evenements/hop-hop-hop-festival-2026-en-famille-quel-jour-choisir/ | Hop Hop Hop Festival 2026 en famille: quel jour choisir? | evenements | Saint-Cirgues, Lot, Occitanie
- /articles/voyages/ou-dormir-a-rocamadour-avec-des-enfants-cite-plateau-ou-campagne/ | Où dormir à Rocamadour avec des enfants: cité, plateau ou campagne? | voyages | Rocamadour, Lot, Occitanie
- /articles/sorties/gouffre-de-padirac-en-famille-tarifs-poussette-et-conseils-pour-la-visite/ | Gouffre de Padirac avec des enfants: à partir de quel âge et tarifs 2026 | sorties | Padirac, Lot, Occitanie
- /articles/evenements/rue-enfants-montcuq-2026-famille/ | La Rue des Enfants 2026 à Montcuq: deux jours d’arts de rue en famille | evenements | Montcuq-en-Quercy-Blanc, Lot, Occitanie
- /articles/activites/musee-de-l-illusion-a-lyon-en-famille-que-voir-et-combien-coute-la-visite/ | Musée de l'Illusion à Lyon en famille: que voir et combien coûte la visite ? | activites | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/activites/ferme-des-chanteraines-en-famille-animaux-ateliers-et-balade-gratuite/ | Ferme des Chanteraines en famille: animaux, ateliers et balade gratuite | activites | Villeneuve-la-Garenne, Hauts-de-Seine, Île-de-France
- /articles/activites/musee-dobree-en-famille-a-nantes-jeux-et-parcours-selon-l-age/ | Musée Dobrée en famille à Nantes: jeux et parcours selon l’âge | activites | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/activites/ateliers-parfum-a-grasse-en-famille-lesquels-choisir-selon-l-age/ | Ateliers parfum à Grasse en famille: lesquels choisir selon l'âge ? | activites | Grasse, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/activites/un-dimanche-a-cacao-en-famille-marche-hmong-insectes-et-poterie/ | Un dimanche à Cacao en famille: marché hmong, insectes et poterie | activites | Roura, Guyane, Guyane
- /articles/activites/parc-du-moulin-a-tan-a-sens-une-sortie-nature-gratuite-en-famille/ | Parc du Moulin à Tan à Sens: une sortie nature gratuite en famille | activites | Sens, Yonne, Bourgogne-Franche-Comté
- /articles/activites/nuits-de-branfere-2026-preparer-une-sortie-en-famille-dans-le-morbihan/ | Nuits de Branféré 2026: préparer une sortie en famille dans le Morbihan | activites | Le Guerno, Morbihan, Bretagne
- /articles/activites/parc-animalier-des-angles-en-famille-quel-circuit-choisir-et-comment-preparer-la-visite/ | Parc animalier des Angles en famille: quel circuit choisir et comment préparer la visite ? | activites | Les Angles, Pyrénées-Orientales, Occitanie

### Historique Radar lié

- refresh | /articles/activites/biotropica-en-famille-a-val-de-reuil-animaux-tarifs-et-visite-par-temps-de-pluie/ | 2026-11-07T21:36:00.316Z
- refresh | /articles/activites/parc-animalier-de-gramat-en-famille-animaux-duree-et-conseils-de-visite/ | 2026-11-08T19:34:02.934Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
