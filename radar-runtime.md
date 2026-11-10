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

Soumets le résultat final avec `action: advance`, le frontmatter éditorial utile, le corps complet et un bloc `radarReview`:
- `summary`: contrôles et corrections réellement effectués;
- `sources`: URLs factuelles revérifiées;
- pour un refresh, `regressionCheck`: résultat concret de la comparaison ancien/nouveau. Une seule correction factuelle vérifiée peut suffire.

**Ne recopie aucun autre champ Radar, aucune branche et aucun SHA.** Le workflow GitHub crée le commit de phase 3, retrouve le HEAD réel et lance directement le processeur final.

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
title: "Grottes de Thouzon avec des enfants: préparer la visite sous terre"
subtitle: "Fermées après le 31 octobre 2026: tarifs par âge et conseils pour préparer une prochaine visite"
summary: Les Grottes de Thouzon sont fermées pour la saison 2026. Retrouvez les derniers tarifs publiés, les conditions de réservation et les contraintes pour les familles.
slug: grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre
status: published
publishedAt: 2026-10-04T19:20:54+02:00
updatedAt: null
category: activites
readingTime: 5
location:
  city: Le Thor
  department: Vaucluse
  region: Provence-Alpes-Côte d’Azur
topic:
  key: activites|le-thor|grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre|2026
  keywords:
    - Grottes de Thouzon enfants
    - Grottes de Thouzon famille
image:
  src: /images/articles/2026/10/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre.webp
  alt: Intérieur des Grottes de Thouzon dans le Vaucluse
sources:
  - title: Grottes de Thouzon - informations pratiques 2026
    url: https://www.grottes-thouzon.com/
  - title: Grottes de Thouzon - tarifs et horaires
    url: https://www.grottes-thouzon.com/tarifs/
  - title: Ville du Thor - Les grottes de Thouzon
    url: https://www.ville-lethor.fr/les-grottes-de-thouzon/
affiliate:
  enabled: true
  type: travel
  destination: Thor
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/activites/(2026)/(10)/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre/index.md
  targetSha: 82836d46d19a2fb76cc3e2a6cce0daf55b76b7b3
  targetUrl: /articles/activites/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre/
  decision: Savoir si les Grottes de Thouzon sont visitables à la date envisagée et calculer le budget exact selon l'âge des enfants, sans partir pendant la fermeture saisonnière.
  affiliationPotential: Conserver l'hébergement Booking La Villa aux Cyprès bleu au Thor déjà présent; aucune billetterie partenaire vérifiée, renvoyer aux réservations officielles.
  gsc:
    retrievedAt: 2026-11-10T01:34:08+01:00
    dataThrough: 2026-11-07
    signal: uncertain
    basis: "Visibilité récente : 35 impressions sur trois jours, puis 5 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-23
    peakEnd: 2026-10-25
    recentStart: 2026-11-05
    recentEnd: 2026-11-07
    peakImpressions: 35
    recentImpressions: 5
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0.2
    focusQueries:
      - grottes de thouzon
      - grotte de thouzon
      - grotte de thouzon tarif
      - les grottes de thouzon
      - faut il réserver
---

<!-- article-image-credit -->
*Photo: [Selmoval](https://commons.wikimedia.org/wiki/File:Grottes_de_Thouzon_Vaucluse_1.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Au Thor, dans le Vaucluse, les Grottes de Thouzon se visitent avec un guide en **45 à 50 minutes**, dans une température constante de **13 °C**. C'est une sortie possible avec des enfants, mais pas avec une poussette.

**Attention à la date:** les grottes sont **fermées pour la saison depuis le 31 octobre 2026**, selon l'annonce d'ouverture de l'[exploitant](https://www.grottes-thouzon.com/). Certaines mentions officielles divergent sur le dernier jour d'ouverture; si vous envisagez une visite à la limite de la saison, téléphonez au **04 90 33 93 65** avant de vous déplacer. Les dates de réouverture en 2027 ne sont pas encore confirmées ici.

## À quoi ressemble la visite?

<!-- article-image-body:01 -->

![Stalactites tubulaires au plafond des Grottes de Thouzon](/images/articles/2026/10/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre-body-01.webp)

*Photo: [Paul66](https://commons.wikimedia.org/wiki/File:Macaroni_aan_planfond.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le parcours guidé suit le lit fossile d'une ancienne rivière souterraine, avec notamment de fines stalactites fistuleuses. La [Ville du Thor](https://www.ville-lethor.fr/les-grottes-de-thouzon/) rappelle que la grotte a été découverte en 1902.

La durée reste raisonnable pour une sortie familiale, mais un enfant doit pouvoir suivre un groupe pendant environ trois quarts d'heure. L'exploitant présente également un nouvel éclairage et un spectacle son et lumière.

## Comment habiller les enfants?

Sous terre, la température reste à **13 °C toute l'année**, y compris en juillet et août. Prévoyez un sweat ou une veste pour chacun et des chaussures confortables pour marcher. La fraîcheur peut être agréable lors des fortes chaleurs, mais le contraste avec l'extérieur est important.

## Peut-on entrer avec une poussette?

<!-- article-image-body:02 -->

![Entrée extérieure des Grottes de Thouzon au Thor](/images/articles/2026/10/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre-body-02.webp)

*Photo: [Paul66](https://commons.wikimedia.org/wiki/File:Entrance_Grottes_de_Thouzon.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

**Non.** La configuration de la grotte ne permet l'accès ni en poussette ni en fauteuil roulant. Pour un bébé ou un tout-petit, prévoyez un portage adapté et assurez-vous de pouvoir le maintenir pendant la visite.

Les animaux sont admis uniquement s'ils sont portés pendant toute la visite, selon les [conditions de l'exploitant](https://www.grottes-thouzon.com/).

## Quels étaient les tarifs familiaux en 2026?

Voici les **tarifs individuels publiés pour la saison 2026**, à ne pas considérer comme des prix garantis pour 2027.

- **Avril à juin et septembre à octobre:** adulte (18 ans et plus) 12 €; adolescent de 12 à 17 ans 9,50 €; enfant de 3 à 11 ans 7 €; moins de 3 ans gratuit.
- **Juillet et août:** adulte 12,50 €; adolescent de 12 à 17 ans 10 €; enfant de 3 à 11 ans 7,50 €; moins de 3 ans gratuit.

Par exemple, deux adultes et deux enfants de 6 et 8 ans payaient **38 € en basse saison** ou **40 € en juillet-août**. Une réduction de 1 € était annoncée pour les étudiants de moins de 25 ans, les personnes sans emploi et les personnes en situation de handicap, sur justificatif. Consultez la [grille officielle](https://www.grottes-thouzon.com/tarifs/) avant toute prochaine visite pour connaître les tarifs applicables.

## Réservation et horaires: que vérifier?

La réservation n'était **pas obligatoire en 2026**, des départs sans réservation étant proposés dans la journée. Elle était cependant conseillée, particulièrement en août, pour choisir un créneau. En cas de réservation en ligne, l'exploitant demandait d'arriver **au moins 15 minutes avant** l'heure choisie.

Les horaires affichés pour **2026** étaient les suivants: d'avril à juin et en septembre-octobre, ouverture de 10 h à 18 h; en juillet-août, de 9 h 45 à 19 h, avec des visites toutes les 15 minutes de 10 h à 18 h. Les pages de l'exploitant divergent sur le dernier départ en basse saison (17 h ou 17 h 15). Vérifiez directement les horaires et départs de la prochaine saison sur le [site officiel](https://www.grottes-thouzon.com/) plutôt que de vous fier à ces anciens créneaux.

## Parking, repas et adresse

Les grottes se trouvent au **2083 route d'Orange, 84250 Le Thor**. Le site dispose d'un parking gratuit ombragé, d'une aire de pique-nique, d'une boutique et d'une offre de restauration rapide. Ces services permettent de prévoir une pause avec les enfants avant ou après la visite; vérifiez leur disponibilité à la réouverture.

## Prolonger la sortie dans les Sorgues

La visite souterraine peut s'intégrer à une demi-journée avec une promenade au Thor ou dans le secteur des Sorgues, sans multiplier les activités pour les plus jeunes.

Pour les familles qui séjournent dans le secteur, [La Villa aux Cyprès bleu au Thor sur Booking.com](https://www.booking.com/hotel/fr/la-villa-aux-cypres-bleu.fr.html) présente quatre chambres, une cuisine équipée, une piscine extérieure et un parking sur place. Vérifiez les équipements et disponibilités aux dates de votre séjour.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/activites/(2026)/(10)/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre/index.md

---
title: "Grottes de Thouzon avec des enfants: préparer la visite sous terre"
subtitle: À 13 °C toute l'année, cette grotte du Thor se découvre en 45 à 50 minutes et sans poussette
summary: "Durée, température, poussette, réservation et services: les repères utiles pour visiter les Grottes de Thouzon en famille sans mauvaise surprise."
slug: grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre
status: published
publishedAt: 2026-10-04T19:20:54+02:00
updatedAt: null
category: activites
readingTime: 5
location:
  city: Le Thor
  department: Vaucluse
  region: Provence-Alpes-Côte d’Azur
topic:
  key: activites|le-thor|grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre|2026
  keywords:
    - Grottes de Thouzon enfants
    - Grottes de Thouzon famille
image:
  src: "/images/articles/2026/10/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre.webp"
  alt: "Intérieur des Grottes de Thouzon dans le Vaucluse"
sources:
  - title: Grottes de Thouzon - informations pratiques 2026
    url: https://www.grottes-thouzon.com/
  - title: Grottes de Thouzon - tarifs et horaires
    url: https://www.grottes-thouzon.com/tarifs/
  - title: Ville du Thor - Les grottes de Thouzon
    url: https://www.ville-lethor.fr/les-grottes-de-thouzon/
affiliate:
  enabled: true
  type: travel
  destination: Thor
---
<!-- article-image-credit -->
*Photo: [Selmoval](https://commons.wikimedia.org/wiki/File:Grottes_de_Thouzon_Vaucluse_1.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Au Thor, dans le Vaucluse, les Grottes de Thouzon permettent de parcourir avec un guide le lit fossile d'une ancienne rivière souterraine. La visite dure moins d'une heure, mais elle demande un peu d'anticipation avec des enfants: sous terre, il fait 13 °C toute l'année et la poussette ne peut pas entrer.

Le site est ouvert tous les jours du 1er avril au 1er novembre 2026 inclus. Son [site officiel](https://www.grottes-thouzon.com/) annonce aussi un nouvel éclairage et un spectacle son et lumière, ainsi qu'une boutique et un snack rénovés.

## À quoi ressemble la visite?

<!-- article-image-body:01 -->

![Stalactites tubulaires au plafond des Grottes de Thouzon](/images/articles/2026/10/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre-body-01.webp)

*Photo: [Paul66](https://commons.wikimedia.org/wiki/File:Macaroni_aan_planfond.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

La visite est guidée et dure environ **45 à 50 minutes**. Le parcours suit une cavité naturelle connue notamment pour ses stalactites fines dites fistuleuses, ainsi que d'autres concrétions. La [Ville du Thor](https://www.ville-lethor.fr/les-grottes-de-thouzon/) rappelle que la grotte a été découverte en 1902 et présente un intérêt géologique qui va bien au-delà d'un simple décor souterrain.

Pour une famille, la durée est assez courte pour constituer une activité à part entière sans occuper toute la journée. En revanche, il s'agit bien d'une visite guidée: mieux vaut en tenir compte si un jeune enfant supporte difficilement de rester avec un groupe pendant trois quarts d'heure.

## Prévoyez une couche chaude, même en plein été

La température dans la grotte reste à **13 °C toute l'année**. C'est probablement le point le plus facile à oublier lorsqu'il fait très chaud dehors.

Un sweat, un gilet ou une petite veste pour chaque enfant évite donc de subir la visite. Des chaussures adaptées à la marche sont également plus pratiques qu'une tenue pensée uniquement pour la chaleur extérieure.

Cette température constante peut aussi faire des Grottes de Thouzon une sortie intéressante lors d'une journée caniculaire, à condition de ne pas confondre fraîcheur et climatisation: le changement de température est net en entrant.

## Peut-on entrer avec une poussette?

<!-- article-image-body:02 -->

![Entrée extérieure des Grottes de Thouzon au Thor](/images/articles/2026/10/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre-body-02.webp)

*Photo: [Paul66](https://commons.wikimedia.org/wiki/File:Entrance_Grottes_de_Thouzon.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Non. Le site indique explicitement que **la configuration de la grotte ne permet pas l'accès en poussette ni en fauteuil roulant**.

Avec un bébé ou un tout-petit, il faut donc prévoir une solution de portage adaptée à l'enfant et au parent. C'est un point à décider avant d'arriver sur place, plutôt que devant l'entrée.

Les animaux sont acceptés pendant la visite à condition d'être portés pendant toute sa durée, selon les [modalités publiées par les Grottes de Thouzon](https://www.grottes-thouzon.com/).

## Faut-il réserver?

La réservation n'est **pas obligatoire**. Le site conserve des créneaux accessibles sans réservation pendant la journée. Elle est toutefois conseillée, particulièrement en août, et permet de choisir une heure précise.

Si vous réservez en ligne, il faut se présenter **au moins 15 minutes avant** l'heure sélectionnée. Pour une famille qui organise plusieurs activités dans la même journée, réserver peut donc sécuriser l'horaire; pour une journée plus souple, l'accès sans réservation reste possible sous réserve des départs disponibles.

En 2026, d'avril à juin puis en septembre et octobre, le site ouvre de 10 h à 18 h avec un dernier départ à 17 h 15. En juillet et août, il ouvre de 9 h 45 à 19 h et les visites partent toutes les 15 minutes de 10 h à 18 h. Vérifiez tout de même les horaires au moment de partir sur le [site officiel](https://www.grottes-thouzon.com/).

## Quel budget prévoir avec des enfants?

Les tarifs changent entre basse et haute saison. Plutôt que de mémoriser toute la grille, le repère familial le plus utile est que **l'entrée est gratuite pour les moins de 3 ans en 2026**. Les enfants de 3 à 11 ans, les adolescents et les adultes disposent ensuite de tarifs distincts.

La [page officielle des tarifs](https://www.grottes-thouzon.com/tarifs/) reste la bonne référence pour calculer le coût exact de la sortie selon la date et l'âge de chacun.

## Sur place, peut-on pique-niquer ou manger?

Le site dispose d'un parking gratuit ombragé, d'une aire de pique-nique, d'une boutique et d'un espace de restauration rapide. Cela permet de garder une organisation assez simple avec des enfants, notamment si la visite tombe autour de l'heure du déjeuner.

Les Grottes se trouvent au **2083 route d'Orange, 84250 Le Thor**. Une fois les 45 à 50 minutes sous terre terminées, il reste donc facile de poursuivre la journée dans le secteur plutôt que de construire tout le programme autour de la seule visite.

## Une activité à combiner avec Le Thor et les environs

Les Grottes de Thouzon sont une activité relativement courte. Elles se prêtent bien à une demi-journée complétée par une promenade au Thor ou dans le secteur des Sorgues.

L'intérêt avec des enfants est justement de ne pas surcharger le programme: une visite souterraine guidée, une pause repas puis une activité extérieure suffisent largement. En été, l'ordre peut aussi être choisi selon la chaleur, en profitant des 13 °C de la grotte au moment le plus chaud de la journée.

Pour un séjour dans le secteur des Sorgues, [La Villa aux Cyprès bleu au Thor sur Booking.com](https://www.booking.com/hotel/fr/la-villa-aux-cypres-bleu.fr.html) propose quatre chambres, une cuisine équipée, une piscine extérieure et un parking sur place.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/voyages/visiter-guedelon-avec-des-enfants-preparer-la-journee-en-2026/ | Visiter Guédelon avec des enfants: préparer la journée en 2026 | voyages | Treigny-Perreuse-Sainte-Colombe, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne
- /articles/evenements/planete-ocean-a-paris-preparer-la-visite-en-famille/ | Planète Océan à Paris: préparer la visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/sorties/chateau-des-enigmes-de-pons-en-famille-preparer-la-visite-en-2026/ | Château des Énigmes de Pons en famille: préparer la visite en 2026 | sorties | Pons, Charente-Maritime, Nouvelle-Aquitaine
- /articles/sorties/grottes-d-arcy-sur-cure-avec-des-enfants-quelle-visite-choisir/ | Grottes d'Arcy-sur-Cure avec des enfants: quelle visite choisir? | sorties | Arcy-sur-Cure, Yonne, Bourgogne-Franche-Comté
- /articles/bons-plans/loups-de-chabrieres-en-famille-quel-pass-choisir-en-2026/ | Loups de Chabrières en famille: préparer la visite en 2026 | bons-plans | Sainte-Feyre, Creuse, Nouvelle-Aquitaine
- /articles/evenements/fete-du-lac-annecy-2026-en-famille/ | Fête du lac d’Annecy 2026: préparer la soirée avec des enfants | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/coeur-de-ville-en-lumieres-2026-avec-des-enfants-comment-preparer-la-soiree-sans-voiture/ | Cœur de Ville en Lumières 2026 avec des enfants: comment préparer la soirée sans voiture? | evenements | Montpellier, Hérault, Occitanie
- /articles/activites/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre/ | Grottes de Thouzon avec des enfants: préparer la visite sous terre | activites | Le Thor, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/maison/logement-mal-isole-dans-le-vaucluse-comment-gagner-en-confort-ete-comme-hiver/ | Logement mal isolé dans le Vaucluse: comment gagner en confort été comme hiver ? | maison | Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires et accès | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/vie-pratique/veloroute-du-calavon-avec-des-enfants-quelle-balade-choisir/ | Véloroute du Calavon avec des enfants: quelle balade choisir ? | vie-pratique | Apt, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | Halloween 2026 au Parc Spirou: billets, nocturnes Naruto et maison hantée | evenements | Monteux, Vaucluse, Provence-Alpes-Côte d'Azur
- /articles/evenements/halloween-a-avignon-une-visite-familiale-pour-decouvrir-l-archeologie-funeraire/ | Halloween à Avignon: un atelier familial pour découvrir l'archéologie funéraire | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/voyages/orange-avec-des-enfants-ou-dormir-pour-tout-faire-a-pied/ | Orange avec des enfants: où dormir pour tout faire à pied | voyages | Orange, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/sorties/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets/ | Parc Spirou avec de jeunes enfants: regardez la taille avant d'acheter les billets | sorties | Monteux, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/avignonnais-palais-des-papes-et-pont-gratuits-le-week-end/ | Avignonnais: Palais des Papes et Pont gratuits le week-end | bons-plans | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/parentalite/premier-week-end-a-avignon-avec-un-bebe-ou-dormir-et-quoi-prevoir/ | Avignon avec un bébé: poussette, Palais des Papes et où dormir | parentalite | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/activites/corderie-royale-de-rochefort-en-famille-visite-tarifs-et-ateliers/ | Corderie Royale de Rochefort en famille: visite, tarifs et ateliers | activites | Rochefort, Charente-Maritime, Nouvelle-Aquitaine
- /articles/activites/musee-de-l-air-et-de-l-espace-au-bourget-quel-parcours-en-famille/ | Musée de l’Air et de l’Espace au Bourget: quel parcours en famille? | activites | Le Bourget, Seine-Saint-Denis, Île-de-France
- /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | Atelier bâton de pluie gratuit à Paris le 18 novembre 2026: dès 6 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | Lecture d'hiver gratuite à Paris le 12 décembre 2026: deux séances pour les 1-3 ans | activites | Paris, Paris, Île-de-France

### Historique Radar lié

- opportunity | /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | 2026-11-06T12:30:50.449Z
- opportunity | /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | 2026-10-12T17:34:53.933Z
- opportunity | /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | 2026-11-06T09:33:42.136Z
- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
