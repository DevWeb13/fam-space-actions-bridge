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
title: "Centre spatial guyanais à Kourou: 3 expériences gratuites et un musée en famille"
subtitle: "Installations, savanes, lancement ou Guyaspace: choisir selon l'âge des enfants et les animations proposées"
summary: "À Kourou, trois sorties gratuites et Guyaspace Expérience: âges minimums, tarifs, réservations, exposition et planétarium pour préparer une visite en famille."
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
  - title: Centre spatial guyanais - Exposition Les As de la Jungle
    url: https://visite.centrespatialguyanais.cnes.fr/fr/expo-as-de-la-jungle
  - title: Centre spatial guyanais - Nouveau film du planétarium
    url: https://visite.centrespatialguyanais.cnes.fr/fr/nouveau-film-planetarium-gex
affiliate:
  enabled: true
  type: travel
  destination: Kourou
radar:
  schemaVersion: 1
  phase: 2
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
reviewAt: 2027-01-15
---

À Kourou, en Guyane, le Centre spatial guyanais (CSG) est le port spatial européen d'où décollent notamment les fusées Ariane 6 et Vega-C. On peut y visiter les installations, découvrir les savanes qui entourent la base ou assister à un lancement, si un décollage est programmé. Ces trois expériences sont gratuites, mais leurs conditions d'accès diffèrent. Le musée interactif Guyaspace Expérience constitue une quatrième possibilité, payante et accessible même aux plus petits.

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

Pour la fin de **2026**, le calendrier officiel annonçait notamment les **28 novembre et 19 décembre**. Vérifiez la date maintenue et les places disponibles avant de vous déplacer. Prévoyez des chaussures de marche fermées, de l'eau, des vêtements adaptés à la pluie, une protection contre les insectes et une pièce d'identité. Le terrain est accidenté et le circuit n'est actuellement pas adapté aux personnes à mobilité réduite; le bureau des visites peut renseigner les familles ayant des besoins particuliers.

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

## Guyaspace Expérience: musée, exposition et planétarium

<!-- article-image-body:04 -->

![Musée de l'espace du Centre spatial guyanais à Kourou, photographié en 2022](/images/articles/2026/10/centre-spatial-guyanais-a-kourou-3-experiences-gratuites-et-un-musee-en-famille-body-04.webp)

*Photo: [Don-vip](https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_de_l%27espace_au_CSG.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:04 -->

Avec des enfants de moins de 8 ans, [Guyaspace Expérience](https://visite.centrespatialguyanais.cnes.fr/fr/guyaspace-experience) est le choix le plus simple. L'ancien musée de l'espace propose des maquettes, écrans interactifs et objets à manipuler pour découvrir les missions spatiales et l'histoire de la base. **L'accès au musée ne comporte aucune restriction d'âge**; comptez environ **2 heures**.

Les tarifs officiels affichés sont de **10 € par adulte**, **6 € pour les enfants de moins de 10 ans** et **gratuit pour les moins de 3 ans**. Pour un enfant de 10 ans ou plus, vérifiez le tarif applicable dans la billetterie: la présentation officielle ne précise pas ici sa catégorie tarifaire.

### L'exposition Les As de la Jungle: surtout pour les 6-12 ans

Le CSG présente depuis le **29 janvier 2026** une [exposition temporaire Les As de la Jungle](https://visite.centrespatialguyanais.cnes.fr/fr/expo-as-de-la-jungle), **incluse dans le billet d'entrée**. Destinée aux **6-12 ans**, elle propose une enquête interactive autour de la forêt tropicale, de sa biodiversité et de la recherche de Miguel le gorille. Elle est donc particulièrement intéressante pour un enfant de 6 ou 7 ans, même s'il ne peut pas visiter les installations techniques.

L'exposition figure encore sur la page officielle du musée, mais **aucune date de fin fiable n'y est indiquée**: confirmez sa présence au moment de votre visite. Son âge conseillé ne constitue pas une restriction d'accès à l'ensemble du musée.

### Le planétarium: vérifier la séance, pas seulement l'âge

La page pratique du musée annonce des séances de planétarium **à partir de 5 ans**, d'environ **45 minutes**, comprises dans le billet, avec des horaires indiqués **à 10h30, 14h et 16h15 pendant les vacances et les week-ends hors vacances**. Mais le CSG a également annoncé un [nouveau film de 30 minutes à partir du 1er avril 2026](https://visite.centrespatialguyanais.cnes.fr/fr/nouveau-film-planetarium-gex), présenté comme **accessible à tous les publics**.

Ces deux informations officielles ne permettent pas d'affirmer que toutes les projections acceptent les moins de 5 ans, ni que toutes durent 45 minutes. Pour un jeune enfant, vérifiez **le film réellement projeté, son âge d'accès, sa durée, l'horaire et les éventuelles modalités de réservation** auprès de l'accueil avant d'acheter vos billets. L'entrée au musée reste possible indépendamment d'une séance de planétarium.

L'ouverture habituelle du musée est **du lundi au samedi de 9h à 18h**, ainsi que **le premier dimanche du mois**, avec fermeture le lundi de la même semaine. Il ferme les jours fériés. La billetterie est accessible en ligne ou sur place, selon les disponibilités. Guyaspace Expérience est accessible aux personnes à mobilité réduite; pour d'autres besoins particuliers, contactez l'accueil. Un espace détente avec distributeurs de boissons et de friandises permet une pause sur place.

## Organiser une journée à Kourou en famille

Avec des enfants de **moins de 8 ans**, privilégiez Guyaspace Expérience. L'exposition s'adresse surtout aux 6-12 ans; pour un enfant plus jeune, le parcours interactif du musée reste accessible et le planétarium dépend de la séance choisie. Une observation de lancement à Carapa peut aussi convenir si un décollage est annoncé et si le terrain est adapté à votre famille.

À partir de **8 ans**, choisissez les installations pour le côté technique ou les savanes pour une sortie nature. Si vous obtenez une visite des installations à **8h**, le musée peut compléter l'après-midi, sous réserve de son ouverture. Après une sortie matinale dans les savanes, vous pouvez également envisager Guyaspace Expérience. Inutile, en revanche, de prévoir la visite des installations autour d'un jour de lancement: elle sera suspendue.

Pour préparer les visites guidées, confirmer une séance ou poser une question d'accessibilité, le bureau des visites du CSG est joignable au **+594 594 33 77 77** ou à **visites.csg@cnes.fr**.

## Dormir à Kourou pour profiter de plusieurs visites

Si vous venez d'une autre ville de Guyane ou souhaitez répartir les activités sur deux jours, une nuit sur place peut éviter plusieurs allers-retours. L'[Hotel Atlantis à Kourou](https://www.booking.com/hotel/gf/atlantis-hotel.fr.html) propose notamment une **suite familiale de deux chambres avec deux grands lits doubles**, ainsi que des chambres triples. Vérifiez la capacité, le tarif et les disponibilités selon vos dates et la composition de votre famille.

Pour prolonger votre séjour, retrouvez d'autres [idées de sorties et de voyages en Guyane sur Fam Space](https://www.fam-space.fr/destinations/guyane/).

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
