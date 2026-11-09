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
title: "Centre spatial guyanais à Kourou: 3 expériences gratuites et un musée en famille"
subtitle: "Visite des installations, savanes, lancement ou Guyaspace: que choisir selon l'âge des enfants?"
summary: "À Kourou, trois expériences gratuites et un musée pour découvrir le spatial en famille: âges, tarifs, réservations et conseils pour organiser la visite."
slug: centre-spatial-guyanais-a-kourou-3-experiences-gratuites-et-un-musee-en-famille
status: published
publishedAt: 2026-10-12T21:37:05+02:00
updatedAt: null
category: bons-plans
readingTime: 5
location:
  city: Kourou
  department: Guyane
  region: Guyane
topic:
  key: bons-plans|kourou|centre-spatial-guyanais-a-kourou-3-experiences-gratuites-et-un-musee-en-famille|2026
  keywords:
    - Centre spatial guyanais visite famille
    - Kourou activités gratuites enfants
    - Guyaspace Expérience tarifs
image:
  src: /images/articles/2026/10/centre-spatial-guyanais-a-kourou-3-experiences-gratuites-et-un-musee-en-famille.webp
  alt: Entrée du Centre spatial guyanais à Kourou, avec une maquette de fusée Ariane et le panneau de bienvenue
sources:
  - title: Centre spatial guyanais - Visitez les installations
    url: https://visite.centrespatialguyanais.cnes.fr/fr/installations
  - title: Centre spatial guyanais - Découvrez les savanes
    url: https://visite.centrespatialguyanais.cnes.fr/fr/savanes
  - title: Centre spatial guyanais - Assistez à un lancement
    url: https://visite.centrespatialguyanais.cnes.fr/fr/lancement
  - title: Centre spatial guyanais - Guyaspace Expérience
    url: https://visite.centrespatialguyanais.cnes.fr/fr/guyaspace-experience
affiliate:
  enabled: true
  type: travel
  destination: Kourou
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/bons-plans/(2026)/(10)/centre-spatial-guyanais-a-kourou-3-experiences-gratuites-et-un-musee-en-famille/index.md
  targetSha: e846d3abce3c59f1c249571e8eeb85317134fef8
  targetUrl: /articles/bons-plans/centre-spatial-guyanais-a-kourou-3-experiences-gratuites-et-un-musee-en-famille/
  decision: Choisir entre les visites gratuites du CSG et Guyaspace selon l'âge des enfants, puis savoir quelles animations sont réellement comprises dans le billet et à quelles conditions.
  affiliationPotential: Conserver l'hébergement Booking existant à Kourou pour les familles venant de loin; aucune billetterie partenaire vérifiée pour les visites du CSG.
  gsc:
    retrievedAt: 2026-11-09T06:27:46+01:00
    dataThrough: 2026-11-07
    signal: uncertain
    basis: "Visibilité récente : 87 impressions sur trois jours, puis 15 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-28
    peakEnd: 2026-10-30
    recentStart: 2026-11-05
    recentEnd: 2026-11-07
    peakImpressions: 87
    recentImpressions: 15
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0.3
    focusQueries:
      - billets pour guyaspace expérience (ex-musée de l'espace)
      - centre spatial guyanais visite
      - qual a taxa?
      - visite centre spatial kourou tarif
      - visiter centre spatial kourou
---

## Mission retenue
Actualiser le guide familial du Centre spatial guyanais à Kourou, surtout les activités réellement proposées à Guyaspace Expérience.

## Pourquoi cette mission
Le snapshot indique 87 puis 15 impressions sur deux fenêtres de trois jours, sans cause SEO établie. Lacune éditoriale indépendante vérifiée: l'article décrit le musée sans son exposition temporaire « Les As de la Jungle » (6-12 ans), incluse dans l'entrée, alors que le CSG la présente officiellement depuis le 29 janvier 2026. Le site officiel annonce également un nouveau film de planétarium depuis avril 2026, accessible à tous les publics, alors que l'article présente le planétarium uniquement comme destiné aux 5 ans et plus. Clarifier cette divergence sans supposer que toutes les séances ont les mêmes conditions.

## Décision du lecteur
Permettre à une famille avec des enfants de moins de 8 ans de déterminer si le musée, l'exposition et le planétarium conviennent à chaque âge, sans confondre accès au musée, séances et visite technique.

## Faits à traiter
Vérifier la présence actuelle et la durée de l'exposition « Les As de la Jungle », ses 6-12 ans et son inclusion dans le billet; distinguer les séances de planétarium et leurs limites d'âge, horaires et éventuelles réservations, à confirmer auprès du CSG. Conserver les quatre options, les trois gratuités, les seuils de 8 ans, réservations, durées, tarifs officiels (10 €, 6 €, gratuit moins de 3 ans), accessibilité, conseils pratiques, contacts, quatre images et crédits, ainsi que le lien Booking. Ne pas modifier le tarif des 10 ans et plus par déduction.

## Sources de départ
- https://visite.centrespatialguyanais.cnes.fr/guyaspace-experience
- https://visite.centrespatialguyanais.cnes.fr/fr/expo-as-de-la-jungle
- https://visite.centrespatialguyanais.cnes.fr/fr/nouveau-film-planetarium-gex
- https://visite.centrespatialguyanais.cnes.fr/fr/installations

## Affiliation
Hébergement Booking à Kourou déjà intégré, à préserver; ne pas transformer les réservations gratuites du CSG en offres commerciales.

## Continuations internes
- Garder le lien existant vers la destination Guyane pour les autres sorties.
- Limiter le développement de l'exposition à son intérêt pour le choix de visite; conserver le guide global plutôt que créer un doublon.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/bons-plans/(2026)/(10)/centre-spatial-guyanais-a-kourou-3-experiences-gratuites-et-un-musee-en-famille/index.md

---
title: "Centre spatial guyanais à Kourou: 3 expériences gratuites et un musée en famille"
subtitle: "Visite des installations, savanes, lancement ou Guyaspace: que choisir selon l'âge des enfants?"
summary: "À Kourou, trois expériences gratuites et un musée pour découvrir le spatial en famille: âges, tarifs, réservations et conseils pour organiser la visite."
slug: centre-spatial-guyanais-a-kourou-3-experiences-gratuites-et-un-musee-en-famille
status: published
publishedAt: 2026-10-12T21:37:05+02:00
updatedAt: null
category: bons-plans
readingTime: 5
location:
  city: Kourou
  department: Guyane
  region: Guyane
topic:
  key: bons-plans|kourou|centre-spatial-guyanais-a-kourou-3-experiences-gratuites-et-un-musee-en-famille|2026
  keywords:
    - Centre spatial guyanais visite famille
    - Kourou activités gratuites enfants
    - Guyaspace Expérience tarifs
image:
  src: "/images/articles/2026/10/centre-spatial-guyanais-a-kourou-3-experiences-gratuites-et-un-musee-en-famille.webp"
  alt: "Entrée du Centre spatial guyanais à Kourou, avec une maquette de fusée Ariane et le panneau de bienvenue"
sources:
  - title: Centre spatial guyanais - Visitez les installations
    url: https://visite.centrespatialguyanais.cnes.fr/fr/installations
  - title: Centre spatial guyanais - Découvrez les savanes
    url: https://visite.centrespatialguyanais.cnes.fr/fr/savanes
  - title: Centre spatial guyanais - Assistez à un lancement
    url: https://visite.centrespatialguyanais.cnes.fr/fr/lancement
  - title: Centre spatial guyanais - Guyaspace Expérience
    url: https://visite.centrespatialguyanais.cnes.fr/fr/guyaspace-experience
affiliate:
  enabled: true
  type: travel
  destination: Kourou
---

À Kourou, en Guyane, le Centre spatial guyanais (CSG) est le port spatial européen d'où décollent notamment les fusées Ariane 6 et Vega-C. On peut y visiter les installations, découvrir les savanes qui entourent la base ou assister à un lancement, si un décollage est programmé. Ces trois expériences sont gratuites, mais leurs conditions d'accès diffèrent. Le musée interactif Guyaspace Expérience constitue une quatrième possibilité, payante et ouverte même aux plus petits.

## Visiter les installations spatiales dès 8 ans

<!-- article-image-body:01 -->

![Salle de contrôle du centre de lancement numéro 3 au Centre spatial guyanais à Kourou](/images/articles/2026/10/centre-spatial-guyanais-a-kourou-3-experiences-gratuites-et-un-musee-en-famille-body-01.webp)

*Photo: [Camille Gévaudan](https://commons.wikimedia.org/wiki/File:Salle_de_contr%C3%B4le_CSG_Kourou.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

C'est la sortie à choisir pour comprendre les coulisses d'un lancement. Un parcours en bus conduit les visiteurs vers des zones techniques et des centres de contrôle, avec des arrêts qui varient selon les opérations en cours. La base reste en activité pendant les visites: certains secteurs peuvent donc être indisponibles.

La [visite des installations du CSG](https://visite.centrespatialguyanais.cnes.fr/fr/installations) est **gratuite, à partir de 8 ans** et dure environ **3 heures**. Elle est habituellement proposée **du lundi au samedi, avec des départs à 8h et 13h**. Il faut réserver **au moins 48 heures ouvrées à l'avance**. Les visites sont suspendues la veille, le jour et le lendemain d'un lancement.

Prévoyez une pièce d'identité, des chaussures plates et fermées, un pantalon long, de l'eau et une protection solaire. Les moins de 8 ans ne sont pas admis sur le circuit complet. Accompagnés d'un adulte, ils peuvent toutefois participer à une présentation de la salle de contrôle Jupiter 2: contactez le bureau des visites pour connaître les modalités. En cas de handicap ou de difficulté à se déplacer, ce bureau doit également confirmer si le parcours est possible ou peut être aménagé.

## Explorer les savanes avec un guide de l'ONF

<!-- article-image-body:02 -->

![Paysage de savane et de végétation au sein du Centre spatial guyanais](/images/articles/2026/10/centre-spatial-guyanais-a-kourou-3-experiences-gratuites-et-un-musee-en-famille-body-02.webp)

*Photo: [El fosilmaníaco](https://commons.wikimedia.org/wiki/File:CSG_Savanna.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

La base spatiale abrite aussi des espaces naturels préservés. Cette balade accompagnée par l'Office national des forêts permet de découvrir un autre visage du CSG, loin des installations de lancement.

La [sortie dans les savanes du CSG](https://visite.centrespatialguyanais.cnes.fr/fr/savanes) est **gratuite et ouverte à partir de 8 ans**. Elle dure environ **2 heures**, généralement **un samedi par mois**, avec deux départs matinaux à **6h15 et 7h15**. La réservation est obligatoire et s'ouvre environ un mois avant la sortie.

Pour la fin de **2026**, le calendrier officiel affiche les **31 octobre, 28 novembre et 19 décembre**. Vérifiez la date maintenue et les places disponibles avant de vous déplacer. Prévoyez des chaussures de marche fermées, de l'eau, des vêtements adaptés à la pluie, une protection contre les insectes et une pièce d'identité. Le terrain est accidenté et le circuit n'est actuellement pas adapté aux personnes à mobilité réduite; le bureau des visites peut renseigner les familles ayant des besoins particuliers.

## Observer un décollage depuis Carapa ou Ibis

<!-- article-image-body:03 -->

![Décollage d'une fusée Ariane 5 photographié depuis la montagne Carapa en 2010](/images/articles/2026/10/centre-spatial-guyanais-a-kourou-3-experiences-gratuites-et-un-musee-en-famille-body-03.webp)

*Photo: [Xorxar](https://commons.wikimedia.org/wiki/File:Ariane5-tir-2010-08.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

Assister au départ d'une fusée peut marquer un séjour à Kourou, mais **un lancement n'a lieu que selon le calendrier spatial**, qui peut être modifié jusqu'au dernier moment. Cette activité ne se réserve pas comme une visite classique de la base.

Le CSG propose [deux sites d'observation gratuits](https://visite.centrespatialguyanais.cnes.fr/fr/lancement):

- **Carapa**, en libre accès, sans âge minimum, ouvre normalement **2 heures avant le décollage**. Sa pente est forte et demande une bonne condition physique.
- **Ibis**, accessible **sur réservation uniquement**, accueille les visiteurs **à partir de 8 ans**. Le point de rendez-vous indiqué est le pôle culturel de Kourou.

Aucun des deux sites n'est accessible aux personnes à mobilité réduite. Pour une solution adaptée, demandez conseil au CSG. Suivez ses communications officielles avant de partir: un report du lancement peut bouleverser le programme.

## Guyaspace Expérience: le musée accessible aux plus jeunes

<!-- article-image-body:04 -->

![Musée de l'espace du Centre spatial guyanais à Kourou, photographié en 2022](/images/articles/2026/10/centre-spatial-guyanais-a-kourou-3-experiences-gratuites-et-un-musee-en-famille-body-04.webp)

*Photo: [Don-vip](https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_de_l%27espace_au_CSG.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:04 -->

Quand les enfants ont moins de 8 ans, ou qu'aucun créneau de visite gratuite ne convient, Guyaspace Expérience est une bonne alternative. L'ancien musée de l'espace propose aujourd'hui un parcours interactif avec des maquettes, des écrans et des objets à manipuler pour découvrir les missions spatiales et l'histoire de la base.

Le [musée Guyaspace Expérience](https://visite.centrespatialguyanais.cnes.fr/fr/guyaspace-experience) est **accessible sans restriction d'âge**, et il faut compter environ **2 heures**. Les tarifs officiels affichés sont de **10 € par adulte**, **6 € pour les enfants de moins de 10 ans** et **gratuit pour les moins de 3 ans**. Le planétarium, dont la séance est incluse dans l'entrée lorsqu'elle est programmée, est destiné aux **5 ans et plus**. Cette limite d'âge ne s'applique pas au reste du musée.

L'ouverture habituelle est **du lundi au samedi de 9h à 18h**, ainsi que **le premier dimanche du mois**, avec fermeture le lundi de la même semaine. Le musée est fermé les jours fériés. Consultez son planning et sa billetterie avant de partir, notamment si vous souhaitez assister au planétarium. Guyaspace Expérience est accessible aux personnes à mobilité réduite.

## Organiser une journée à Kourou en famille

Avec des enfants de **moins de 8 ans**, le musée est le choix le plus simple. Une observation de lancement à Carapa peut aussi convenir si un décollage est annoncé et si le terrain est adapté à votre famille.

À partir de **8 ans**, choisissez les installations pour le côté technique ou les savanes pour une sortie nature. Si vous obtenez une visite des installations à **8h**, le musée peut compléter l'après-midi, sous réserve de son ouverture. Après une sortie matinale dans les savanes, vous pouvez également envisager Guyaspace Expérience. Inutile, en revanche, de prévoir la visite des installations autour d'un jour de lancement: elle sera suspendue.

Pour préparer les visites guidées ou poser une question d'accessibilité, le bureau des visites du CSG est joignable au **+594 594 33 77 77** ou à **visites.csg@cnes.fr**.

## Dormir à Kourou pour profiter de plusieurs visites

Si vous venez d'une autre ville de Guyane ou souhaitez répartir les activités sur deux jours, une nuit sur place peut éviter plusieurs allers-retours. L'[Hotel Atlantis à Kourou](https://www.booking.com/hotel/gf/atlantis-hotel.fr.html) propose notamment une **suite familiale de deux chambres avec deux grands lits doubles**, ainsi que des chambres triples. Vérifiez la capacité, le tarif et les disponibilités selon vos dates et la composition de votre famille.

Pour prolonger votre séjour, retrouvez d'autres [idées de sorties et de voyages en Guyane sur Fam Space](https://www.fam-space.fr/destinations/guyane/).

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/vakans-o-peyi-remire-montjoly-2026/ | Vakans o péyi à Rémire-Montjoly: un accueil de loisirs pour les 3 à 12 ans | activites | Rémire-Montjoly, Guyane, Guyane
- /articles/evenements/braderie-ete-toulon-2026-famille/ | Braderie d’été de Toulon 2026 en famille: animations gratuites et accès au centre-ville | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/troyes-en-famille-a-petit-budget-musees-gratuites-et-balades-dans-le-centre/ | Troyes en famille à petit budget: musées, gratuités et balades dans le centre | bons-plans | Troyes, Aube, Grand Est
- /articles/bons-plans/albi-en-famille-a-petit-budget-deux-programmes-entre-patrimoine-et-musee/ | Albi en famille à petit budget: deux programmes entre patrimoine et musée | bons-plans | Albi, Tarn, Occitanie
- /articles/evenements/fete-de-la-science-2026-en-famille/ | Fête de la science 2026: choisir une expérience adaptée à l’âge des enfants | evenements
- /articles/sorties/mucem-en-famille-billets-gratuites-et-conseils-pour-la-visite/ | Mucem Marseille en famille: tarifs 2026, billets et gratuités | sorties | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/bons-plans/saint-remy-de-provence-en-famille-glanum-musees-et-entrees-gratuites/ | Saint-Rémy-de-Provence en famille: Glanum, musées et entrées gratuites | bons-plans | Saint-Rémy-de-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | Métamorphoses 2026 au quai Branly: séances gratuites et films par âge | evenements | Paris, Paris, Île-de-France
- /articles/bons-plans/centre-spatial-guyanais-a-kourou-3-experiences-gratuites-et-un-musee-en-famille/ | Centre spatial guyanais à Kourou: 3 expériences gratuites et un musée en famille | bons-plans | Kourou, Guyane, Guyane
- /articles/voyages/saul-en-famille-preparer-un-sejour-au-coeur-de-la-foret-guyanaise/ | Saül en famille: préparer un séjour au cœur de la forêt guyanaise | voyages | Saül, Guyane, Guyane
- /articles/sorties/theobroma-a-saint-laurent-du-maroni-decouvrir-le-cacao-en-famille/ | Theobroma à Saint-Laurent-du-Maroni: découvrir le cacao en famille | sorties | Saint-Laurent-du-Maroni, Guyane, Guyane
- /articles/bons-plans/reserve-tresor-a-roura-decouvrir-la-foret-en-famille-en-acces-libre/ | Réserve Trésor à Roura: découvrir la forêt en famille en accès libre | bons-plans | Roura, Guyane, Guyane
- /articles/parentalite/zoo-refuge-de-guyane-a-macouria-preparer-une-visite-en-famille/ | Zoo-refuge de Guyane à Macouria: préparer une visite en famille | parentalite | Macouria, Guyane, Guyane
- /articles/parentalite/aide-a-domicile-caf-en-guyane-qui-peut-la-demander-et-combien-reste-t-il-a-payer/ | Aide à domicile Caf en Guyane: qui peut la demander et combien reste-t-il à payer? | parentalite | Cayenne, Guyane, Guyane
- /articles/cuisine/couac-ou-cassave-lequel-choisir-pour-un-repas-familial-en-guyane/ | Couac ou cassave: lequel choisir pour un repas familial en Guyane? | cuisine | Cayenne, Guyane, Guyane
- /articles/activites/bouge-tes-vacances-remire-montjoly-2026/ | Bouge tes vacances 2026 à Rémire-Montjoly: le programme multisports pour les 6 à 13 ans | activites | Rémire-Montjoly, Guyane, Guyane
- /articles/sorties/maroni-parc-2026-saint-laurent-du-maroni-famille/ | Maroni Parc 2026 en Guyane: une sortie familiale gratuite jusqu’au 5 août | sorties | Saint-Laurent-du-Maroni, Guyane, Guyane
- /articles/bons-plans/musees-a-la-reunion-en-famille-quel-pass-choisir-pour-economiser/ | Musées à La Réunion en famille: quel pass choisir pour économiser ? | bons-plans | La Réunion, La Réunion
- /articles/bons-plans/musees-de-niort-en-famille-le-donjon-et-bernard-d-agesci-a-petit-budget/ | Musées de Niort en famille: le Donjon et Bernard d’Agesci à petit budget | bons-plans | Niort, Deux-Sèvres, Nouvelle-Aquitaine
- /articles/bons-plans/pass-cantal-2026-2027-quels-cheques-utiliser-pour-les-activites-des-enfants/ | PASS CANTAL 2026-2027: quels chèques utiliser pour les activités des enfants ? | bons-plans | Cantal, Auvergne-Rhône-Alpes
- /articles/bons-plans/abbaye-de-saint-savin-en-famille-tarifs-gratuites-et-visite-avec-les-enfants/ | Abbaye de Saint-Savin en famille: tarifs, gratuités et visite avec les enfants | bons-plans | Saint-Savin, Vienne, Nouvelle-Aquitaine
- /articles/bons-plans/chamonix-en-famille-sans-voiture-train-gratuit-et-bus-a-prix-reduit-avec-la-carte-d-hote/ | Chamonix en famille sans voiture: train gratuit et bus à prix réduit avec la carte d’hôte | bons-plans | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | 2026-10-18T04:19:39.869Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
