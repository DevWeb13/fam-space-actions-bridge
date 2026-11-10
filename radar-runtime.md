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

Soumets le résultat via `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet. **Ne recopie aucun bloc `radar` et ne fournis aucune branche ni aucun SHA.** La plomberie mécanique conserve le diagnostic GSC, la cible, le slug et les champs protégés.

## Candidat validé de la phase précédente

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
  phase: 1
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

## Mission retenue
Actualiser le guide familial des Grottes de Thouzon au Thor, sans le transformer en nouvel article.

## Pourquoi cette mission
Le snapshot GSC signale une baisse de 35 à 5 impressions sur deux fenêtres de trois jours, sans cause démontrée. Lacune indépendante vérifiée: l'article annonce une ouverture jusqu'au 1er novembre 2026, alors que l'accueil du site exploitant indique le 31 octobre inclus; au 10 novembre, le site est fermé pour la saison. La page n'explicite pas non plus les tarifs par âge, pourtant publiés officiellement.

## Décision du lecteur
Éviter un déplacement inutile hors saison, choisir un créneau lors de la prochaine saison confirmée et estimer précisément le coût familial.

## Faits à traiter
- Signaler clairement la fermeture saisonnière actuelle. Le site officiel annonce du 1er avril au 31 octobre **2026**; ne pas extrapoler les dates 2027. Les pages officielles affichent des mentions contradictoires (1er novembre dans certains bandeaux): demander confirmation à l'exploitant pour toute date limite.
- Donner les tarifs publiés pour 2026: avril-juin et septembre-octobre: adultes 12 €, 12-17 ans 9,50 €, 3-11 ans 7 €, moins de 3 ans gratuit; juillet-août: respectivement 12,50 €, 10 €, 7,50 €, gratuit. Ne pas les présenter comme tarifs 2027.
- Préserver durée 45-50 min, température 13 °C, vêtement chaud, impossibilité poussette/fauteuil, portage, réservation facultative mais conseillée en août, arrivée 15 min avant réservation, parking, pique-nique, restauration, adresse, trois photos et crédits, et lien Booking.
- Conserver les horaires saisonniers seulement en les datant; éviter d'affirmer une ouverture actuelle.

## Sources de départ
- Exploitant, accueil et ouverture saisonnière: https://www.grottes-thouzon.com/
- Exploitant, tarifs et réductions: https://www.grottes-thouzon.com/tarifs/
- Office régional du tourisme, dates divergentes à ne pas arbitrer sans l'exploitant: https://provence-alpes-cotedazur.com/que-faire/detente-et-loisirs/toutes-les-activites-detente-et-loisirs/grottes-de-thouzon-le-thor-fr-4125149/

## Affiliation
Conserver naturellement la Villa aux Cyprès bleu au Thor sur Booking pour les familles en séjour; ne pas inventer d'offre de billets.

## Continuations internes
Ne pas créer de nouvel article: enrichir uniquement la page existante. Ne pas supprimer les informations pratiques et crédits d'images.

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
