# Radar Fam Space - Phase 3/3

## Mission

Radar surveille en priorité les articles Fam Space qui gagnent rapidement des impressions Google puis les perdent quelques jours plus tard. Il cherche ensuite les autres articles existants à améliorer réellement. Seulement s'il ne trouve aucune amélioration utile, il recherche un événement exceptionnel avec un fort potentiel d'audience et, lorsque c'est naturel, d'affiliation. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 3/3

Tu es secrétaire de rédaction et fact-checker final. Ta mission principale est l'anti-régression, pas de réécrire l'article une deuxième fois.

Pour un refresh, compare l'article source exact et le candidat de phase 2 fournis intégralement plus bas. Le candidat final doit rester autonome et actuel. Pour chaque information présente avant et absente après, décide explicitement: toujours vraie et utile -> restaure-la; périmée ou fausse -> laisse-la supprimée; réellement redondante ou sans valeur -> suppression acceptable.

Accorde une attention particulière aux prix décisionnels, durées, réservation, âge/taille, accessibilité, accès, contraintes, services bébé/enfants, repas et autres détails pratiques familiaux.

Ensuite:
- lis l'article du début à la fin comme un lecteur sur téléphone et vérifie que l'introduction, les sections et la fin ne répètent pas la même information; supprime les conseils évidents, paraphrases de sources, sections sans information nouvelle et toute conclusion qui ne ferait que résumer;
- vérifie que l'angle sert l'article sans devenir l'article entier: une micro-question utile ne doit pas être répétée pendant toute la page, et le titre final doit décrire le sujet plutôt que recopier mécaniquement la décision de phase 1;
- vérifie que les modifications répondent au diagnostic et à la décision de phase 1;
- revérifie les faits déterminants auprès des sources officielles. Une affirmation attribuée à une source doit respecter exactement son niveau de certitude: ne transforme jamais « peut constituer un frein » en « déconseille », ni une possibilité en obligation ou interdiction;
- contrôle que la logique d'affiliation de ces règles partenaires fournies dans ce runtime a bien été appliquée, que les offres retenues sont encore pertinentes et que leur intégration se lit naturellement; vérifie qu'aucun lien officiel du corps ne mène, même indirectement depuis une page informative, à l'achat ou à la réservation de la même prestation sur le site officiel; pour une sortie, une activité, une visite, un événement ou un voyage sans affiliation, vérifie qu'aucune piste normale n'a été oubliée;
- contrôle les liens internes et les routes. Garde ceux qui prolongent réellement la lecture et, lorsqu'une autre page Fam Space traite déjà correctement un sous-sujet, raccourcis le passage au contexte nécessaire puis oriente naturellement le lecteur vers elle;
- vérifie `reviewAt` / `eventEndsAt` lorsqu'un contenu temporaire existe;
- ne force ni longueur ni affiliation.

Pour une opportunity, revérifie doublons, chevauchement avec les pages proches, catégorie, territoire, sources, cycle de vie et utilité. Un angle distinct ne justifie pas de recopier les parties générales déjà couvertes ailleurs. Le slug technique reste géré mécaniquement.

Soumets le résultat final avec `action: advance`, uniquement les métadonnées éditoriales réellement corrigées, le corps complet et un bloc `radarReview`. Ne recopie pas les métadonnées inchangées: la plomberie les conserve et normalise la syntaxe avant traitement. Le bloc `radarReview` contient:
- `summary`: contrôles et corrections réellement effectués;
- `sources`: URLs factuelles revérifiées;
- pour un refresh, `regressionCheck`: résultat concret de la comparaison ancien/nouveau. Une seule correction factuelle vérifiée peut suffire.

**Ne recopie aucun autre champ Radar, aucune branche et aucun SHA.** Le workflow construit et contrôle d'abord l'article final avec le validateur réel. Il ne crée le commit de phase 3 que si ce précontrôle réussit, puis lance le processeur final.

## Règles partenaires

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

## Candidat validé de la phase précédente

---
title: "Festival Enfantillages 2026 à Valbonne: dernières séances en famille"
subtitle: "Du 25 au 29 novembre: deux spectacles gratuits à réserver et trois films selon l'âge"
summary: "Les dernières sorties du festival Enfantillages à Valbonne: Ô le 25 novembre, Le Bal des questions qui dansent le 28 et trois films le 29. Âges, tarifs, réservations et accès."
category: evenements
location:
  city: Valbonne
  department: Alpes-Maritimes
  region: Provence-Alpes-Côte d'Azur
image:
  src: /images/articles/2026/10/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age.webp
  alt: Vue générale du village de Valbonne, où se déroule le festival Enfantillages, hors événement
sources:
  - title: Ville de Valbonne - Festival Enfantillages 2026
    url: https://www.ville-valbonne.fr/evenement/enfantillages-2/
  - title: Ville de Valbonne - Programme officiel Enfantillages 2026
    url: https://www.ville-valbonne.fr/wp-content/uploads/sites/6/2026/10/Programme-enfantillages-2026-4.pdf
  - title: Ville de Valbonne - Les cinémas
    url: https://www.ville-valbonne.fr/mes-loisirs/culture/les-equipements-culturels/les-cinemas/
  - title: Ville de Valbonne - Le Pré des Arts
    url: https://www.ville-valbonne.fr/mes-loisirs/culture/les-equipements-culturels/le-pre-des-arts/
  - title: Ville de Valbonne - Médiathèque Colette
    url: https://www.ville-valbonne.fr/point-d-interet/mediatheque-communautaire/
  - title: Ville de Valbonne - Parking de la Vignasse
    url: https://www.ville-valbonne.fr/point-d-interet/parking-de-la-vignasse-1/
eventEndsAt: 2026-11-29
reviewAt: 2026-11-10
topic:
  key: evenements|valbonne|festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age|2026
  keywords:
    - Festival Enfantillages Valbonne 2026
    - spectacles gratuits enfants Valbonne
    - cinéma jeune public Valbonne novembre 2026
    - Pré des Arts Enfantillages
slug: festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age
status: published
publishedAt: 2026-10-26T03:35:31.536Z
updatedAt: null
readingTime: 5
affiliate:
  enabled: true
  type: travel
  destination: Valbonne
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/index.md
  targetSha: a45ae106d303830a76640c3939250ab98ca08b9f
  targetUrl: /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/
  decision: Choisir une sortie encore accessible entre le 25 et le 29 novembre selon l'âge des enfants, distinguer les spectacles gratuits à réserver du cinéma payant et rejoindre le bon lieu.
  affiliationPotential: Conserver l'hébergement Booking.com déjà proposé pour les familles en séjour; aucune billetterie partenaire naturelle pour les spectacles gratuits municipaux.
  gsc:
    retrievedAt: 2026-11-23T02:29:06+01:00
    dataThrough: 2026-11-20
    signal: needs_query_check
    basis: "Visibilité récente : 40 impressions sur trois jours, puis 2 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-26
    peakEnd: 2026-10-28
    recentStart: 2026-11-18
    recentEnd: 2026-11-20
    peakImpressions: 40
    recentImpressions: 2
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Festival Enfantillages Valbonne 2026
      - spectacles gratuits enfants Valbonne
      - cinéma jeune public Valbonne novembre 2026
      - Pré des Arts Enfantillages
---

<!-- article-image-credit -->
*Photo: [Olivier Cleynen](https://commons.wikimedia.org/wiki/File:Valbonne.jpg) - [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Le festival **Enfantillages 2026** se termine le **dimanche 29 novembre** à Valbonne. Pour les familles qui cherchent encore une sortie, il reste **deux spectacles gratuits sur réservation**, les **25 et 28 novembre**, et **trois séances de cinéma payantes le 29 novembre**. Les rendez-vous précédents sont rappelés plus bas pour éviter de confondre les dates.

## Mercredi 25 et samedi 28 novembre: deux spectacles gratuits

Les deux spectacles se tiennent au **Pré des Arts, 20 avenue Saint-Roch à Valbonne**. Ils sont gratuits pour les enfants et les adultes accompagnants, **sur réservation** auprès de la [billetterie municipale](https://billetterie.ville-valbonne.fr/). La Ville confirme les dates, mais pas les places encore disponibles.

- **Mercredi 25 novembre à 11 h: Ô**, dès **4 ans**, durée **45 minutes**. Marionnettes, bruitages et humour autour d'un lac disparu.
- **Samedi 28 novembre à 11 h: Le Bal des questions qui dansent**, dès **8 ans**, durée **45 minutes**. Un spectacle de danse et de théâtre autour des questions des enfants.

Pour un enfant de 4 à 7 ans, choisissez **Ô**; à partir de 8 ans, les deux spectacles correspondent à l'âge annoncé. Vérifiez la réservation avant de vous déplacer. La Ville prévoit aussi un accueil sur place le jour même **dans la limite des places disponibles**, sans garantie d'entrée. Si vous ne pouvez pas réserver en ligne, l'accueil de l'Hôtel de Ville reçoit le public du lundi au vendredi de **8 h 30 à 12 h 30** et de **13 h 30 à 17 h**.

## Dimanche 29 novembre: trois films au Pré des Arts

Le cinéma du **Pré des Arts** accueille les dernières séances proposées par l'association **Les Visiteurs du Soir**. Ce sont des **billets payants**, distincts de la réservation municipale des spectacles.

- **10 h: Dernier coup de chapeau pour Capelito**, dès **3 ans**, **40 minutes**.
- **11 h: Shaun le mouton: La Bêêête d'Halloween**, dès **6 ans**, **1 h 20**.
- **15 h: Muyi, la légende du village des femmes**, dès **7 ans**, **1 h 30**.

**Tarifs:** **3 € par personne le matin**. À **15 h**, comptez **4 € pour les enfants, les moins de 25 ans et les adhérents**, **5,50 € pour les plus de 65 ans**, et **6,50 € au plein tarif**. Pour deux adultes au plein tarif et deux enfants, cela représente **12 € le matin** ou **21 € à 15 h**, hors frais éventuels. Vérifiez les modalités d'achat auprès du cinéma et de l'organisateur; les places disponibles ne sont pas connues en temps réel.

## Accès et conseils pour venir avec des enfants

Le **Pré des Arts**, au **20 avenue Saint-Roch**, accueille toutes les séances encore programmées. La Ville indique que la salle est **accessible aux personnes à mobilité réduite**. Un **parking gratuit** se trouve à proximité; le **parking de la Vignasse**, à cette même adresse, comprend des places PMR. Prévoyez un peu de marge avant la séance, surtout avec de jeunes enfants.

Attention: la **médiathèque Colette** n'était concernée que par la représentation de *Nuage* du **18 novembre à 15 h 30**, au **1855 route des Dolines**, dans le secteur de Garbejaïre. **Aucune des séances restantes n'y a lieu.**

## Les rendez-vous précédents du festival

Pour retrouver le programme complet du **14 au 29 novembre 2026**, voici les propositions déjà passées au **23 novembre**:

- **Samedi 14 novembre à 11 h: Au Bord du Temps**, dès **8 ans**, **55 minutes**, au Pré des Arts. Trois clowns et un guitariste embarquaient le public dans une aventure.
- **Mercredi 18 novembre: Nuage**, dès **3 ans**, **35 minutes**, à **11 h au Pré des Arts** et à **15 h 30 à la médiathèque Colette**. Un récit musical et poétique autour de la pluie et des arcs-en-ciel.
- **Dimanche 15 novembre, cinéma:** à **10 h, Gruffalo de père en fils**, dès 3 ans, **53 minutes**; à **11 h, Le Merveilleux Hiver de Tom le chat**, dès 3 ans, **1 h 02**; à **15 h, Le Corset**, dès 7 ans, **1 h 30**, suivi d'un **atelier bruitage d'une heure**, limité à **12 participants**.
- **Dimanche 22 novembre, cinéma:** à **10 h, Un amour d'épouvantail**, dès 3 ans, **44 minutes**; à **11 h, Le Monde à l'envers**, dès 4 ans, **45 minutes**, suivi d'un **atelier ciné-philo de 45 minutes**; à **15 h, Le Mystère Lucy Lost**, dès 7 ans, **1 h 25**.
- **Samedi 21 novembre, journée des droits de l'enfant**, de **9 h 30 à 17 h** au Pré des Arts, pour les **0-12 ans**: lectures et jeux de mains à **10 h**, mini-théâtre de marionnettes à **11 h**, kamishibaï à **14 h**, histoires à **15 h**, visites guidées familiales du village à **10 h et 15 h**, ateliers et défi photo. Les modalités de réservation pouvaient varier selon l'animation.

Les horaires et les distinctions entre spectacles gratuits et cinéma payant sont détaillés dans le [programme officiel de la Ville](https://www.ville-valbonne.fr/evenement/enfantillages-2/) et sa [brochure du festival](https://www.ville-valbonne.fr/wp-content/uploads/sites/6/2026/10/Programme-enfantillages-2026-4.pdf).

## Dormir à Valbonne pour le week-end

Si vous venez de plus loin, l'[Hôtel Les Armoiries à Valbonne sur Booking.com](https://www.booking.com/hotel/fr/hotellesarmoiries.html), au cœur du village, propose notamment une **catégorie de chambre familiale**. Vérifiez les couchages, les conditions d'accueil des enfants, le trajet jusqu'au Pré des Arts et les conditions de réservation. Aucun prix ni aucune disponibilité ne sont garantis pour les dates du festival.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/index.md

---
title: "Festival Enfantillages 2026 à Valbonne: spectacles gratuits et cinéma en famille"
subtitle: "Du 14 au 29 novembre: les séances selon l'âge, les lieux à ne pas confondre et les tarifs"
summary: "Quatre spectacles gratuits sur réservation, neuf séances de cinéma et une journée pour les 0-12 ans: dates, âges, horaires et budget du festival Enfantillages 2026 à Valbonne."
category: evenements
location:
  city: Valbonne
  department: Alpes-Maritimes
  region: Provence-Alpes-Côte d'Azur
image:
  src: "/images/articles/2026/10/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age.webp"
  alt: "Vue générale du village de Valbonne, où se déroule le festival Enfantillages, hors événement"
sources:
  - title: Ville de Valbonne - Festival Enfantillages 2026
    url: https://www.ville-valbonne.fr/evenement/enfantillages-2/
  - title: Ville de Valbonne - Programme officiel Enfantillages 2026
    url: https://www.ville-valbonne.fr/wp-content/uploads/sites/6/2026/10/Programme-enfantillages-2026-4.pdf
  - title: Ville de Valbonne - Les cinémas
    url: https://www.ville-valbonne.fr/mes-loisirs/culture/les-equipements-culturels/les-cinemas/
  - title: Ville de Valbonne - Le Pré des Arts
    url: https://www.ville-valbonne.fr/mes-loisirs/culture/les-equipements-culturels/le-pre-des-arts/
  - title: Ville de Valbonne - Médiathèque Colette
    url: https://www.ville-valbonne.fr/point-d-interet/mediatheque-communautaire/
  - title: Ville de Valbonne - Parking de la Vignasse
    url: https://www.ville-valbonne.fr/point-d-interet/parking-de-la-vignasse-1/
eventEndsAt: 2026-11-29
reviewAt: 2026-11-10
topic:
  key: evenements|valbonne|festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age|2026
  keywords:
    - Festival Enfantillages Valbonne 2026
    - spectacles gratuits enfants Valbonne
    - cinéma jeune public Valbonne novembre 2026
    - Pré des Arts Enfantillages
slug: festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age
status: published
publishedAt: 2026-10-26T03:35:31.536Z
updatedAt: null
readingTime: 5
affiliate:
  enabled: true
  type: travel
  destination: Valbonne
---
<!-- article-image-credit -->
*Photo: [Olivier Cleynen](https://commons.wikimedia.org/wiki/File:Valbonne.jpg) - [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Du **14 au 29 novembre 2026**, le festival Enfantillages propose à Valbonne des spectacles, des films pour les enfants et une journée d'animations. **Les quatre spectacles publics sont gratuits pour les enfants et les adultes accompagnants, sur réservation**; les séances de cinéma sont payantes. Voici comment choisir selon l'âge, l'horaire et le lieu.

## Quatre spectacles gratuits, dès 3 ans

La réservation des spectacles a ouvert le **20 octobre** auprès de la billetterie municipale. Les âges sont ceux annoncés dans le programme; ils ne garantissent pas qu'il reste des places.

- **Dès 3 ans - Nuage**, mercredi **18 novembre**, **11 h au Pré des Arts** ou **15 h 30 à la médiathèque Colette**. Durée: **35 minutes**. Un spectacle de récit, musique et poésie autour de la pluie et des arcs-en-ciel. **Attention aux deux lieux différents selon l'horaire.**
- **Dès 4 ans - Ô**, mercredi **25 novembre à 11 h** au Pré des Arts. Durée: **45 minutes**. Marionnettes, bruitages et humour autour d'un lac qui a disparu.
- **Dès 8 ans - Au Bord du Temps**, samedi **14 novembre à 11 h** au Pré des Arts. Durée: **55 minutes**. Trois clowns et un guitariste construisent une aventure avec le public.
- **Dès 8 ans - Le Bal des questions qui dansent**, samedi **28 novembre à 11 h** au Pré des Arts. Durée: **45 minutes**. Danse et théâtre autour des questions que se posent les enfants.

**Nuage** est le spectacle public accessible dès le plus jeune âge. Les autres propositions commencent à 4 ou 8 ans: vérifiez l'âge indiqué avant de réserver.

## Cinéma: neuf séances et des tarifs différents le matin et l'après-midi

Les **dimanches 15, 22 et 29 novembre**, l'association **Les Visiteurs du Soir** programme les films au cinéma du **Pré des Arts**. Les réservations de cinéma relèvent de cet organisateur, et non de la billetterie des spectacles gratuits.

**Pour les plus jeunes:**

- **15 novembre à 10 h: Gruffalo de père en fils**, dès 3 ans, **53 minutes**; **à 11 h: Le Merveilleux Hiver de Tom le chat**, dès 3 ans, **1 h 02**.
- **22 novembre à 10 h: Un amour d'épouvantail**, dès 3 ans, **44 minutes**; **à 11 h: Le Monde à l'envers**, dès 4 ans, **45 minutes**, suivi d'un **atelier ciné-philo de 45 minutes**.
- **29 novembre à 10 h: Dernier coup de chapeau pour Capelito**, dès 3 ans, **40 minutes**; **à 11 h: Shaun le mouton: La Bêêête d'Halloween**, dès 6 ans, **1 h 20**.

**Dès 7 ans, à 15 h:**

- **15 novembre: Le Corset**, **1 h 30**, suivi d'un **atelier bruitage d'une heure**, dès 7 ans, limité à **12 participants**. Renseignez-vous sur l'inscription à cet atelier avant de compter sur une place.
- **22 novembre: Le Mystère Lucy Lost**, **1 h 25**.
- **29 novembre: Muyi, la légende du village des femmes**, **1 h 30**.

**Budget cinéma:** toutes les séances du matin coûtent **3 € par personne**. L'après-midi, le billet est à **4 € pour les enfants, les moins de 25 ans et les adhérents**, **5,50 € pour les plus de 65 ans** et **6,50 € au plein tarif**. Pour deux adultes au plein tarif et deux enfants, comptez **12 € le matin** ou **21 € l'après-midi**, hors éventuels frais et activités annexes.

## Samedi 21 novembre: des animations pour les 0-12 ans

De **9 h 30 à 17 h**, la **journée des droits de l'enfant** se déroule au Pré des Arts avec des activités pour les **0-12 ans**: une option pour les familles dont les enfants n'ont pas tous l'âge d'assister au même spectacle.

Le programme annonce des **lectures et jeux de mains à 10 h**, un **mini-théâtre de marionnettes à 11 h**, un **kamishibaï à 14 h** et des **histoires à 15 h**. Des **visites guidées familiales du village** sont prévues à **10 h et 15 h**, ainsi que des ateliers et un défi photo pendant la journée. Le programme ne précise pas une règle de réservation commune à toutes ces animations: demandez à la mairie les modalités de celle qui vous intéresse.

## Réserver et rejoindre le bon lieu

Pour les **spectacles gratuits**, la ville prévoit une réservation en ligne ou, pour les personnes ne pouvant pas utiliser Internet, à **l'accueil de l'Hôtel de Ville**, du lundi au vendredi de **8 h 30 à 12 h 30** et de **13 h 30 à 17 h**. Le jour même, un accueil au Pré des Arts est prévu **dans la limite des places disponibles**. La disponibilité des places en temps réel n'a pas pu être confirmée.

Le **Pré des Arts**, **20 avenue Saint-Roch à Valbonne**, accueille les spectacles sauf le créneau de Nuage indiqué ci-dessous, les films et la journée du 21 novembre. La ville indique que la salle est **accessible aux personnes à mobilité réduite**. Un **parking gratuit** se trouve à proximité; le **parking de la Vignasse**, au 20 avenue Saint-Roch, comprend des places PMR.

Pour **Nuage le 18 novembre à 15 h 30**, rendez-vous à la **médiathèque Colette, carrefour de Garbejaïre, dans le secteur des Bouillides**, et non au Pré des Arts. Vérifiez ce trajet séparément, notamment si vous venez avec une poussette ou avez besoin d'un accueil adapté.

## Prolonger la sortie par un séjour à Valbonne

Pour les familles venant de plus loin, l'[Hotel les Armoiries à Valbonne sur Booking.com](https://www.booking.com/hotel/fr/hotellesarmoiries.html), au cœur du village, présente notamment une **catégorie de chambre familiale**. Vérifiez la composition des couchages, l'accueil des enfants selon leur âge, le trajet vers le lieu de votre séance et les conditions de réservation: **aucun tarif ni aucune disponibilité ne sont garantis pour les dates du festival**.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/festival-au-bonheur-des-momes-2026-en-famille/ | Au Bonheur des Mômes 2026: pass, spectacles et journée au Grand-Bornand | evenements | Le Grand-Bornand, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | Festival MARMOE 2026 à Montreuil: spectacles, ateliers et sorties jusqu'au 29 novembre | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/rue-enfants-montcuq-2026-famille/ | La Rue des Enfants 2026 à Montcuq: deux jours d’arts de rue en famille | evenements | Montcuq-en-Quercy-Blanc, Lot, Occitanie
- /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | Métamorphoses 2026 au quai Branly: séances gratuites et films par âge | evenements | Paris, Paris, Île-de-France
- /articles/evenements/festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir/ | Festival des Jeux de Cannes 2027 en famille: billets, âges et visite | evenements | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | Noël à Nice 2026 en famille: village, spectacles et crèche | evenements | Nice, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/tous-en-sons-2026-a-marseille-quel-spectacle-choisir-selon-l-age-des-enfants/ | Tous en Sons ! 2026 à Marseille: spectacles enfants, âges et tarifs | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | Festival Enfantillages 2026 à Valbonne: spectacles gratuits et cinéma en famille | evenements | Valbonne, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/vie-pratique/littoral-des-alpes-maritimes-en-famille-se-deplacer-sans-voiture/ | Littoral des Alpes-Maritimes en famille: se déplacer sans voiture | vie-pratique | Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/activites/ateliers-parfum-a-grasse-en-famille-lesquels-choisir-selon-l-age/ | Ateliers parfum à Grasse en famille: lesquels choisir selon l'âge ? | activites | Grasse, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/activites/parc-phoenix-a-nice-en-famille-serre-tropicale-animaux-et-jeux/ | Parc Phoenix à Nice en famille: serre tropicale, animaux et jeux | activites | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/fete-du-citron-2027-a-menton-en-famille-que-voir-et-combien-prevoir/ | Fête du Citron 2027 à Menton en famille: que voir et combien prévoir ? | evenements | Menton, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | Noël 2026 à Cannes en famille: marché du centre et Palm Beach | evenements | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/voyages/iles-de-lerins-en-famille-quelle-ile-choisir-et-comment-organiser-la-traversee/ | Îles de Lérins en famille: quelle île choisir et comment organiser la traversée ? | voyages | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/sorties/villa-ephrussi-de-rothschild-en-famille-que-voir-dans-la-villa-et-les-jardins/ | Villa Ephrussi de Rothschild en famille: que voir dans la villa et les jardins? | sorties | Saint-Jean-Cap-Ferrat, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/musee-national-du-sport-a-nice-en-famille-combien-coute-vraiment-la-visite/ | Musée National du Sport à Nice en famille: que voir et préparer la visite | bons-plans | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/parentalite/maison-des-1-000-premiers-jours-a-grasse-peut-on-venir-sans-rendez-vous/ | Maison des 1 000 premiers jours à Grasse: peut-on venir sans rendez-vous? | parentalite | Grasse, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/festival-contes-et-rencontres-2027-en-lozere-quels-spectacles-voir-en-famille/ | Festival Contes et Rencontres 2027 en Lozère: quels spectacles voir en famille ? | evenements | Lozère, Occitanie
- /articles/evenements/lumieres-d-afrique-2026-2027-a-sigean-les-lanternes-en-famille/ | Lumières d’Afrique 2026-2027 à Sigean: les lanternes en famille | evenements | Sigean, Aude, Occitanie
- /articles/evenements/natur-armor-2027-a-paimpol-preparer-sa-visite-en-famille/ | Natur’Armor 2027 à Paimpol: préparer sa visite en famille | evenements | Paimpol, Côtes-d'Armor, Bretagne
- /articles/evenements/noel-a-brive-2026-en-famille-animations-dates-et-parcours/ | Noël à Brive 2026 en famille: animations, dates et parcours | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine

### Historique Radar lié

- opportunity | /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | 2026-10-26T03:35:31.605Z
- opportunity | /articles/evenements/festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir/ | 2026-10-28T09:26:08.391Z
- opportunity | /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | 2026-10-25T23:35:17.860Z
- refresh | /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | 2026-11-14T05:32:38.580Z
- refresh | /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | 2026-11-14T22:34:11.752Z
- opportunity | /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | 2026-10-18T04:19:39.869Z
- opportunity | /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | 2026-10-31T22:36:58.800Z
- refresh | /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | 2026-11-17T13:33:26.086Z
- opportunity | /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | 2026-10-25T04:31:33.540Z
- opportunity | /articles/evenements/tous-en-sons-2026-a-marseille-quel-spectacle-choisir-selon-l-age-des-enfants/ | 2026-10-31T13:29:50.851Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
