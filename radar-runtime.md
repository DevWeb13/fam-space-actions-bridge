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
title: "Aquarium de Lyon en famille: nouveautés Océan 360°, tarifs et visite"
subtitle: À La Mulatière, bassins renouvelés, film immersif et billets à comparer selon l'âge et les réductions.
summary: "Billets Malin, packs famille, tarifs préférentiels, handicap et pass annuels: préparez votre visite de l'Aquarium de Lyon avec les enfants."
slug: aquarium-de-lyon-en-famille-nouveautes-ocean-360-tarifs-et-visite
status: published
publishedAt: 2026-10-19T07:22:08+02:00
updatedAt: null
category: sorties
readingTime: 5
location:
  city: La Mulatière
  department: Rhône
  region: Auvergne-Rhône-Alpes
topic:
  key: sorties|la-mulatiere|aquarium-de-lyon-en-famille-nouveautes-ocean-360-tarifs-et-visite|2026
  keywords:
    - Aquarium de Lyon en famille
    - Océan 360 tarifs Aquarium Lyon
image:
  src: /images/articles/2026/10/aquarium-de-lyon-en-famille-nouveautes-ocean-360-tarifs-et-visite.webp
  alt: Façade de l'Aquarium du Grand Lyon à La Mulatière, ornée d'une fresque marine, photographiée en 2010.
sources:
  - title: Aquarium de Lyon - Histoire
    url: https://www.aquariumlyon.fr/histoire/
  - title: Aquarium de Lyon - Les Lueurs marines
    url: https://www.aquariumlyon.fr/les-lueurs-marines/
  - title: Aquarium de Lyon - Océan 360°
    url: https://www.aquariumlyon.fr/ocean-360/
  - title: Aquarium de Lyon - Tarifs
    url: https://www.aquariumlyon.fr/tarifs/
  - title: Aquarium de Lyon - Horaires
    url: https://www.aquariumlyon.fr/horaires/
  - title: Aquarium de Lyon - Questions fréquentes
    url: https://www.aquariumlyon.fr/questions-frequentes/
  - title: Office de tourisme de Lyon - Aquarium de Lyon
    url: https://www.visiterlyon.com/qui-sommes-nous/venez-nous-voir/nos-autres-points-d-accueil/aquarium-de-lyon
  - title: Aquarium de Lyon - Itinéraire et accès
    url: https://www.aquariumlyon.fr/itineraire-acces/
  - title: Accor - Novotel Lyon Centre-Confluence Bord de Saône
    url: https://all.accor.com/hotel/7325/index.fr.shtml
affiliate:
  enabled: true
  type: travel
  destination: La Mulatière
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/sorties/(2026)/(10)/aquarium-de-lyon-en-famille-nouveautes-ocean-360-tarifs-et-visite/index.md
  targetSha: 426f65bb5a2abf6359091e227b6fce1841311cb3
  targetUrl: /articles/sorties/aquarium-de-lyon-en-famille-nouveautes-ocean-360-tarifs-et-visite/
  decision: Choisir le billet réellement le plus économique selon la composition familiale, les justificatifs de réduction et la fréquence des visites, sans confondre film immersif et bassins vivants.
  affiliationPotential: Conserver le billet Tiqets et l'hébergement Booking existants, sous réserve de leurs conditions; privilégier les tarifs officiels lorsqu'ils sont plus avantageux.
  gsc:
    retrievedAt: 2026-11-12T03:33:45+01:00
    dataThrough: 2026-11-09
    signal: uncertain
    basis: "Visibilité récente : 34 impressions sur trois jours, puis 11 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-25
    peakEnd: 2026-10-27
    recentStart: 2026-11-07
    recentEnd: 2026-11-09
    peakImpressions: 34
    recentImpressions: 11
    commonQueries: 0
    positionDelta: null
    impressionRatio: 1
    focusQueries:
      - ocean 360
      - aquarium tarif
      - prix aquarium lyon
---

<!-- article-image-credit -->
*Photo: [Frachet](https://commons.wikimedia.org/wiki/File:La_Mulati%C3%A8re_029.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À La Mulatière, au sud de Lyon, l'Aquarium de Lyon fait découvrir aux familles des milieux aquatiques du monde entier, des eaux douces aux récifs coralliens. Depuis l'ouverture d'une extension en décembre 2025, de nouveaux écosystèmes et une projection immersive enrichissent la sortie. Pour choisir le billet le plus intéressant, il faut aussi regarder les réductions sur justificatif, pas seulement les packs famille.

## Nouveaux bassins ou images projetées: que découvre-t-on ?

<!-- article-image-body:01 -->

![Bassin Méditerranée de l'Aquarium de Lyon, photographié en 2022 avant l'extension de 2025.](/images/articles/2026/10/aquarium-de-lyon-en-famille-nouveautes-ocean-360-tarifs-et-visite-body-01.webp)

*Photo: [CrlNvl](https://commons.wikimedia.org/wiki/File:AquariumLyon-BassinMediterran%C3%A9e-2022.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

L'extension de **1 400 m²** comprend « Les Lueurs marines », trois univers inspirés des profondeurs au large du Japon, des récifs de Bali et des forêts de kelps, ces grandes algues qui poussent notamment au large de la Bretagne. Les enfants passent ainsi d'un environnement sombre à des milieux très colorés, tout en observant des animaux aquatiques vivants.

« Océan 360° » est une expérience différente: un **film numérique de 15 minutes**, projeté sur les murs et le sol. À bord du sous-marin fictif Subaqua Explorer, les visiteurs découvrent les grandes profondeurs, des animaux marins représentés à grande échelle et la question des déchets sous-marins. Les cachalots ou tortues géantes apparaissant à l'écran ne vivent donc pas dans les bassins.

La fosse aux requins et les autres espaces de l'aquarium complètent le parcours. Avec de jeunes enfants, mieux vaut prendre le temps d'observer les bassins qui les captivent plutôt que d'essayer de s'attarder devant chaque espèce.

## Durée de visite et confort avec des enfants

Comptez **1 h 30 à 2 h** pour profiter du parcours. La dernière projection d'Océan 360° est annoncée à **17 h 45**; une arrivée tardive laisse peu de marge pour découvrir les salles.

L'établissement dispose d'ascenseurs, accueille les poussettes et propose des assises. Un porte-bébé peut être prêté en caisse selon disponibilité. En revanche, il n'a **ni vestiaire ni consigne**. Le pique-nique est interdit à l'intérieur; le snack ouvre les mercredis, samedis et dimanches hors vacances, et tous les jours pendant les vacances scolaires de la zone A. Pour une visite avec de jeunes enfants, ces détails sont plus utiles à anticiper qu'un programme minuté.

## Quel billet choisir selon votre famille ?

Si la date est fixée, le **billet Malin**, acheté en ligne à l'avance pour un autre jour que celui de l'achat, coûte **17 € au plein tarif**, **12,50 € de 5 à 10 ans** et **7 € de 3 à 4 ans**. Il n'est ni modifiable ni remboursable.

Le **billet Liberté**, valable pour une entrée dans une période de 180 jours, coûte **19,50 € au plein tarif**, **15 € de 5 à 10 ans** et **10 € de 3 à 4 ans**. L'entrée est gratuite pour les moins de 3 ans.

Pour **deux personnes au plein tarif et deux au tarif réduit**, les packs famille en ligne coûtent **56 € en Malin** ou **58 € en Liberté**. Leur composition est précise: avec un enfant de 3 ou 4 ans, ou une autre répartition des âges, comparez plutôt le total des billets individuels.

**Vous avez une carte ou un justificatif de réduction ?** L'[aquarium affiche des tarifs préférentiels](https://www.aquariumlyon.fr/tarifs/) de **16,50 € au plein tarif**, **12 € de 5 à 10 ans** et **8 € de 3 à 4 ans**. Ils concernent notamment les titulaires de la **Lyon City Card**, du **Pass éducation**, de la carte de loisirs ANCAV, des cartes seniors éligibles et les pompiers ou policiers, sur justificatif. L'avantage s'étend au détenteur **et à trois personnes maximum**. Il n'est pas systématiquement le moins cher: pour un enfant de 3 ou 4 ans, le billet Malin à 7 € est inférieur au tarif préférentiel à 8 €.

Pour les visiteurs en situation de handicap, le billet spécifique est de **12,50 € à partir de 11 ans** et **8 € de 5 à 10 ans**, en ligne ou en caisse. Les conditions des accompagnants et des groupes sont à confirmer auprès de l'établissement selon la situation. Le **pass annuel nominatif** coûte **38,50 € à partir de 11 ans**, **30 € de 5 à 10 ans** et **14 € de 3 à 4 ans**. Il donne accès à des visites illimitées pendant un an et à certains avantages en boutique et au snack: il peut être intéressant pour des visites répétées.

Les **étudiants post-bac** bénéficient également d'un billet à **16,50 € en caisse** avec justificatif. Les **chèques-vacances ANCV papier** sont acceptés en caisse, au snack et à la boutique. Les chèques bancaires et le Pass Région Jeunes ne le sont pas.

Attention aux enfants de **11 ans**: la grille ordinaire indique « plus de 11 ans » et « 5 à 10 ans », tandis que les billets handicap et les pass annuels indiquent « à partir de 11 ans ». Demandez confirmation du tarif ordinaire applicable avant de payer.

Pour une réservation avec davantage de souplesse, [Tiqets propose également un billet d'entrée pour l'Aquarium de Lyon](https://www.tiqets.com/fr/les-choses-a-faire-a-lyon-c66838/billets-pour-aquarium-de-lyon-p999488/). La fiche a indiqué une annulation ou reprogrammation jusqu'à **23 h 59 la veille de la visite**: revérifiez cette condition et le prix lors de l'achat. Les billets Malin, les packs et les tarifs préférentiels officiels peuvent être plus économiques.

## Horaires et accès à l'Aquarium de Lyon

L'adresse est **7 rue Stéphane Déchant, 69350 La Mulatière**. L'aquarium annonce une ouverture **tous les jours de 10 h 30 à 18 h 30**, sauf les **25 décembre et 1er janvier**, avec **dernière entrée à 17 h 30**. Vérifiez les informations actualisées avant de partir: certaines plateformes de vente affichent des horaires différents de ceux de l'exploitant.

Depuis Lyon, les bus **C10, 36 ou 63** desservent notamment l'arrêt *Bastero Aquarium*. Le tram **T1** permet de rejoindre l'arrêt *Musée des Confluences*, puis de traverser le pont vers l'aquarium. Un **parking gratuit** est également disponible pour les visiteurs. Pour les billets individuels, il est possible de payer sur place sans réservation préalable.

## Et pour un séjour de plusieurs jours à Lyon ?

La visite ne nécessite pas de passer la nuit à proximité. Si elle fait partie d'un week-end comprenant d'autres découvertes lyonnaises, le [Novotel Lyon Centre-Confluence Bord de Saône, proposé sur Booking.com](https://www.booking.com/hotel/fr/novotel-lyon-confluence.fr.html), dispose de catégories de chambres avec canapé-lit, dont certaines peuvent accueillir deux adultes et deux enfants. Vérifiez la capacité exacte, les dates et le tarif avant de réserver.

Pour compléter votre programme, retrouvez aussi [les idées de sorties dans le Rhône en famille](https://www.fam-space.fr/destinations/auvergne-rhone-alpes/rhone/).

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/sorties/(2026)/(10)/aquarium-de-lyon-en-famille-nouveautes-ocean-360-tarifs-et-visite/index.md

---
title: "Aquarium de Lyon en famille: nouveautés Océan 360°, tarifs et visite"
subtitle: À La Mulatière, des milieux marins renouvelés et un film immersif enrichissent la sortie depuis décembre 2025.
summary: Découvrez les nouveaux espaces de l'Aquarium de Lyon et comparez les billets pour préparer une visite en famille sans mauvaise surprise.
slug: aquarium-de-lyon-en-famille-nouveautes-ocean-360-tarifs-et-visite
status: published
publishedAt: 2026-10-19T07:22:08+02:00
updatedAt: null
category: sorties
readingTime: 4
location:
  city: La Mulatière
  department: Rhône
  region: Auvergne-Rhône-Alpes
topic:
  key: sorties|la-mulatiere|aquarium-de-lyon-en-famille-nouveautes-ocean-360-tarifs-et-visite|2026
  keywords:
    - Aquarium de Lyon en famille
    - Océan 360 tarifs Aquarium Lyon
image:
  src: "/images/articles/2026/10/aquarium-de-lyon-en-famille-nouveautes-ocean-360-tarifs-et-visite.webp"
  alt: "Façade de l'Aquarium du Grand Lyon à La Mulatière, ornée d'une fresque marine, photographiée en 2010."
sources:
  - title: Aquarium de Lyon - Histoire
    url: https://www.aquariumlyon.fr/histoire/
  - title: Aquarium de Lyon - Les Lueurs marines
    url: https://www.aquariumlyon.fr/les-lueurs-marines/
  - title: Aquarium de Lyon - Océan 360°
    url: https://www.aquariumlyon.fr/ocean-360/
  - title: Aquarium de Lyon - Tarifs
    url: https://www.aquariumlyon.fr/tarifs/
  - title: Aquarium de Lyon - Horaires
    url: https://www.aquariumlyon.fr/horaires/
  - title: Aquarium de Lyon - Questions fréquentes
    url: https://www.aquariumlyon.fr/questions-frequentes/
  - title: Office de tourisme de Lyon - Aquarium de Lyon
    url: https://www.visiterlyon.com/qui-sommes-nous/venez-nous-voir/nos-autres-points-d-accueil/aquarium-de-lyon
  - title: Aquarium de Lyon - Itinéraire et accès
    url: https://www.aquariumlyon.fr/itineraire-acces/
  - title: Accor - Novotel Lyon Centre-Confluence Bord de Saône
    url: https://all.accor.com/hotel/7325/index.fr.shtml
affiliate:
  enabled: true
  type: travel
  destination: La Mulatière
---
<!-- article-image-credit -->
*Photo: [Frachet](https://commons.wikimedia.org/wiki/File:La_Mulati%C3%A8re_029.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À La Mulatière, au sud de Lyon, l'Aquarium de Lyon fait découvrir aux familles des milieux aquatiques du monde entier, des eaux douces aux récifs coralliens. Depuis l'ouverture d'une extension en décembre 2025, de nouveaux écosystèmes et une projection immersive enrichissent la sortie. Voici ce que les enfants peuvent y voir et comment choisir les billets.

## Nouveaux bassins ou images projetées: que découvre-t-on ?

<!-- article-image-body:01 -->

![Bassin Méditerranée de l'Aquarium de Lyon, photographié en 2022 avant l'extension de 2025.](/images/articles/2026/10/aquarium-de-lyon-en-famille-nouveautes-ocean-360-tarifs-et-visite-body-01.webp)

*Photo: [CrlNvl](https://commons.wikimedia.org/wiki/File:AquariumLyon-BassinMediterran%C3%A9e-2022.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

L'extension de **1 400 m²** comprend « Les Lueurs marines », trois univers inspirés des profondeurs au large du Japon, des récifs de Bali et des forêts de kelps, ces grandes algues qui poussent notamment au large de la Bretagne. Les enfants passent ainsi d'un environnement sombre à des milieux très colorés, tout en observant des animaux aquatiques vivants.

« Océan 360° » est une expérience différente: un **film numérique de 15 minutes**, projeté sur les murs et le sol. À bord du sous-marin fictif Subaqua Explorer, les visiteurs découvrent les grandes profondeurs, des animaux marins représentés à grande échelle et la question des déchets sous-marins. Les cachalots ou tortues géantes apparaissant à l'écran ne vivent donc pas dans les bassins.

La fosse aux requins et les autres espaces de l'aquarium complètent le parcours. Avec de jeunes enfants, mieux vaut prendre le temps d'observer les bassins qui les captivent plutôt que d'essayer de s'attarder devant chaque espèce.

## Durée de visite et confort avec des enfants

Comptez **1 h 30 à 2 h** pour profiter du parcours. La dernière projection d'Océan 360° est annoncée à **17 h 45**; une arrivée tardive laisse peu de marge pour découvrir les salles.

L'établissement dispose d'ascenseurs, accueille les poussettes et propose des assises. En revanche, il n'a **ni vestiaire ni consigne**. Le pique-nique est interdit à l'intérieur; le snack ouvre certains jours et tous les jours pendant les vacances scolaires de la zone A. Pour une visite avec de jeunes enfants, ces détails sont plus utiles à anticiper qu'un programme minuté.

## Quels billets choisir pour la famille ?

Si la date de sortie est fixée, le **billet Malin** coûte **17 € au plein tarif**, **12,50 € de 5 à 10 ans** et **7 € de 3 à 4 ans**. Il faut l'acheter à l'avance, pour une date autre que le jour d'achat; il n'est ni modifiable ni remboursable.

Le **billet Liberté** permet une entrée dans une période de 180 jours. Il coûte **19,50 € au plein tarif**, **15 € de 5 à 10 ans** et **10 € de 3 à 4 ans**. L'entrée est gratuite pour les moins de 3 ans.

Pour **deux adultes et deux enfants au tarif réduit**, les packs famille en ligne sont affichés à **56 € en version Malin** et **58 € en version Liberté**. Comparez avec les billets individuels si votre groupe ne correspond pas exactement à cette composition. Attention aussi aux enfants de **11 ans**: les catégories de prix ordinaires affichées par l'aquarium mentionnent « plus de 11 ans » et « 5 à 10 ans », sans préciser clairement ce cas. Demandez confirmation avant de payer.

Pour une réservation avec davantage de souplesse, [Tiqets propose également un billet d'entrée pour l'Aquarium de Lyon](https://www.tiqets.com/fr/les-choses-a-faire-a-lyon-c66838/billets-pour-aquarium-de-lyon-p999488/). La fiche indique une annulation ou une reprogrammation possible jusqu'à **23 h 59 la veille de la visite**. Vérifiez le prix et les conditions affichés lors de la réservation: le billet Malin et le pack famille de l'exploitant peuvent être plus économiques.

## Horaires et accès à l'Aquarium de Lyon

L'adresse est **7 rue Stéphane Déchant, 69350 La Mulatière**. L'aquarium annonce une ouverture **tous les jours de 10 h 30 à 18 h 30**, sauf les **25 décembre et 1er janvier**, avec **dernière entrée à 17 h 30**. Vérifiez les informations actualisées avant de partir: certaines plateformes de vente affichent des horaires différents de ceux de l'exploitant.

Depuis Lyon, les bus **C10, 36 ou 63** desservent notamment l'arrêt *Bastero Aquarium*. Le tram **T1** permet de rejoindre l'arrêt *Musée des Confluences*, puis de traverser le pont vers l'aquarium. Un **parking gratuit** est également disponible pour les visiteurs. Pour les billets individuels, il est possible de payer sur place sans réservation préalable.

## Et pour un séjour de plusieurs jours à Lyon ?

La visite ne nécessite pas de passer la nuit à proximité. Si elle fait partie d'un week-end comprenant d'autres découvertes lyonnaises, le [Novotel Lyon Centre-Confluence Bord de Saône, proposé sur Booking.com](https://www.booking.com/hotel/fr/novotel-lyon-confluence.fr.html), dispose de catégories de chambres avec canapé-lit, dont certaines peuvent accueillir deux adultes et deux enfants. Vérifiez la capacité exacte, les dates et le tarif avant de réserver.

Pour compléter votre programme, retrouvez aussi [les idées de sorties dans le Rhône en famille](https://www.fam-space.fr/destinations/auvergne-rhone-alpes/rhone/).

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/bons-plans/aquarium-cite-de-l-ocean-a-biarritz-quand-le-billet-combine-fait-vraiment-economiser/ | Aquarium + Cité de l'Océan à Biarritz: quand le billet combiné fait vraiment économiser | bons-plans | Biarritz, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/sorties/ocearium-du-croisic-en-famille-animations-tarifs-et-visite/ | Océarium du Croisic en famille: animations, tarifs et visite | sorties | Le Croisic, Loire-Atlantique, Pays de la Loire
- /articles/sorties/l-aquarium-tropical-de-la-porte-doree-en-famille/ | L’Aquarium tropical de la Porte Dorée en famille | sorties | Paris, Paris, Île-de-France
- /articles/activites/aquarium-de-touraine-en-famille-que-voir-avec-les-enfants/ | Aquarium de Touraine en famille: que voir avec les enfants ? | activites | Lussault-sur-Loire, Indre-et-Loire, Centre-Val de Loire
- /articles/voyages/banyuls-sur-mer-en-famille-aquarium-et-balade-hors-saison/ | Banyuls-sur-Mer en famille: aquarium et balade hors saison | voyages | Banyuls-sur-Mer, Pyrénées-Orientales, Occitanie
- /articles/sorties/aquarium-de-vendee-en-famille-des-poissons-de-nos-cotes-aux-mers-tropicales/ | Aquarium de Vendée en famille: des poissons de nos côtes aux mers tropicales | sorties | Talmont-Saint-Hilaire, Vendée, Pays de la Loire
- /articles/sorties/aquarium-reunion-fermeture-2026-visite-famille/ | Aquarium de La Réunion fermé depuis le 17 août 2026: quand pourra-t-on revenir en famille ? | sorties | Saint-Gilles-les-Bains, La Réunion, La Réunion
- /articles/sorties/aquarium-de-lyon-en-famille-nouveautes-ocean-360-tarifs-et-visite/ | Aquarium de Lyon en famille: nouveautés Océan 360°, tarifs et visite | sorties | La Mulatière, Rhône, Auvergne-Rhône-Alpes
- /articles/vie-pratique/lyon-saint-exupery-avec-des-enfants-preparer-le-trajet-les-controles-et-l-attente/ | Lyon-Saint-Exupéry avec des enfants: préparer le trajet, les contrôles et l’attente | vie-pratique | Colombier-Saugnieu, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/slava-s-snowshow-a-lyon-en-2026-quelle-seance-choisir-en-famille/ | Slava’s Snowshow à Lyon 2026: dates, tarifs et conseils en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/voyages/week-end-dans-les-pierres-dorees-en-famille-oingt-jarnioux-et-balades/ | Week-end dans les Pierres Dorées en famille: Oingt, Jarnioux et balades | voyages | Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/automne-des-gones-2026-a-lyon-quels-ateliers-gratuits-choisir-avec-les-enfants/ | Automne des gones 2026 à Lyon: ateliers et sorties gratuites en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | Halloween 2026 à Mini World Lyon: la Chasse aux 31 Méchants en famille | evenements | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | Equita Lyon 2026 avec des enfants: billets, Village Enfants et spectacles | evenements | Chassieu, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | Toussaint 2026 au musée des Confluences: cinq rendez-vous pour les enfants | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | Festival Lumière 2026: Laurel & Hardy en famille le 17 octobre à Lyon | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/ | Mini World Lyon: quel billet choisir en famille et combien de temps prévoir ? | bons-plans | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/sorties/cite-du-train-a-mulhouse-en-famille-que-voir-selon-l-age/ | Cité du Train à Mulhouse en famille: que voir selon l’âge ? | sorties | Mulhouse, Haut-Rhin, Grand Est
- /articles/sorties/sentier-des-salines-de-montjoly-en-famille-mangrove-oiseaux-et-plage/ | Sentier des Salines de Montjoly en famille: mangrove, oiseaux et plage | sorties | Rémire-Montjoly, Guyane, Guyane
- /articles/sorties/aeroscopia-en-famille-quels-avions-visiter-avec-les-enfants/ | Aeroscopia en famille: quels avions visiter avec les enfants? | sorties | Blagnac, Haute-Garonne, Occitanie
- /articles/sorties/paleospace-de-villers-sur-mer-en-famille-fossiles-planetarium-et-visites/ | Paléospace de Villers-sur-Mer en famille: fossiles, planétarium et visites | sorties | Villers-sur-Mer, Calvados, Normandie

### Historique Radar lié

- opportunity | /articles/evenements/automne-des-gones-2026-a-lyon-quels-ateliers-gratuits-choisir-avec-les-enfants/ | 2026-10-23T09:31:27.871Z
- refresh | /articles/voyages/banyuls-sur-mer-en-famille-aquarium-et-balade-hors-saison/ | 2026-11-11T08:29:29.427Z
- opportunity | /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | 2026-10-21T10:43:46.144Z
- opportunity | /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | 2026-10-10T15:40:28.185Z
- opportunity | /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | 2026-10-19T19:48:02.164Z
- opportunity | /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | 2026-10-22T12:58:21.691Z
- refresh | /articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/ | 2026-11-02T16:35:39.647Z
- opportunity | /articles/evenements/slava-s-snowshow-a-lyon-en-2026-quelle-seance-choisir-en-famille/ | 2026-11-03T22:37:45.305Z
- opportunity | /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | 2026-10-15T17:42:32.693Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
