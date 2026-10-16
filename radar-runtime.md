# Radar Fam Space - Phase 3/3

## Mission

Radar utilise Google Search Console et la recherche web pour choisir le travail éditorial qui apporte le plus de valeur à Fam Space: améliorer une page réellement perfectible, développer une intention proche d'une page forte, ou publier à temps une opportunité locale/saisonnière. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

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
- pour un refresh, `substantialChanges`: au moins deux changements substantiels;
- pour un refresh, `regressionCheck`: résultat concret de la comparaison ancien/nouveau.

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
title: "Halloween 2026 au Château de Villersexel: parc gratuit, visites et âge minimum"
subtitle: Les 30 et 31 octobre, choisissez entre le Château des Oubliés et la Cave des Clowns Maudits, réservée aux 12 ans et plus
summary: "Halloween à Villersexel les 30 et 31 octobre 2026: parc gratuit, visite familiale à 5 €, cave horrifique dès 12 ans à 10 € et billets prioritaires facultatifs."
slug: halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir
status: published
publishedAt: 2026-09-27T20:24:24+02:00
updatedAt: 2026-09-28T03:20:37+02:00
eventEndsAt: 2026-10-31
category: evenements
readingTime: 4
location:
  city: Villersexel
  department: Haute-Saône
  region: Bourgogne-Franche-Comté
topic:
  key: evenements|villersexel|halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir|2026
  keywords:
    - Halloween Villersexel 2026
    - Château de Villersexel Halloween famille
image:
  src: /images/articles/2026/09/halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir.webp
  alt: Façade du Château de Villersexel
sources:
  - title: Château de Villersexel - Le Cirque des Squelettes, Halloween 2026
    url: https://www.villersexel.com/halloween2026.html
  - title: Haute-Saône Tourisme - Festival de l'horreur
    url: https://hautesaonetourisme.com/offres/festival-de-lhorreur-villersexel-fr-4913213/
  - title: Château de Villersexel - Visites du château
    url: https://www.villersexel.com/visites-chateau-villersexel.html
affiliate:
  enabled: true
  type: travel
  destination: Villersexel
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(09)/halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir/index.md
  targetSha: 861d00d625592568f8342fcc6495d15f89a35816
  targetUrl: /articles/evenements/halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir/
  decision: Choisir sans erreur entre le parc gratuit, la visite familiale et la cave réservée aux 12 ans et plus, puis décider si la réservation prioritaire est utile pour les soirées des 30 et 31 octobre.
  affiliationPotential: "Conserver, si toujours pertinent, le lien Booking.com existant vers l'Auberge de la Terrasse à Villersexel (chambres familiales et parking annoncés, sans disponibilité garantie aux dates concernées). Aucun partenaire billetterie équivalent aux parcours Halloween identifié: Billetto et les autres liens officiels d'achat restent dans les Sources, pas en concurrence dans le corps."
  gsc:
    retrievedAt: 2026-10-16T04:49:29.006Z
    dataThrough: 2026-10-13
    signal: coverage_loss
    basis: Exposition en baisse avec classement comparable; ne prouve pas une désindexation.
    peakStart: 2026-09-30
    peakEnd: 2026-10-06
    recentStart: 2026-10-07
    recentEnd: 2026-10-13
    peakImpressions: 326
    recentImpressions: 204
    commonQueries: 1
    positionDelta: 1.801
    impressionRatio: 0.246
    focusQueries:
      - chateau villersexel halloween
      - chateau de villersexel halloween
      - halloween chateau villersexel
      - en famille avec des enfants
---

Les **vendredi 30 et samedi 31 octobre 2026**, de **18 h à 23 h**, le Château de Villersexel (Haute-Saône) organise **« Le Cirque des Squelettes »**. On peut y venir pour l'ambiance du **parc gratuit**, visiter les salons du château en famille pour **5 €** ou choisir la **Cave des Clowns Maudits à 10 €**, un parcours d'horreur **strictement interdit aux moins de 12 ans**. Ces expériences sont indépendantes : il n'est pas nécessaire d'acheter un billet pour les sous-sols afin de profiter du château.

## Le parc : gratuit, sans réservation et pour tous

Le parc extérieur, éclairé et décoré pour Halloween, accueille quelques exposants et des **food trucks**. Son accès est **gratuit et sans billet**. C'est le choix le plus simple avec de jeunes enfants ou pour les familles qui préfèrent profiter des décors et de l'ambiance sans entrer dans les parcours payants.

## Le Château des Oubliés : 5 € pour une visite familiale

<!-- article-image-body:01 -->

![Grand salon à l'intérieur du Château de Villersexel](/images/articles/2026/09/halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir-body-01.webp)

*Photo: [corinne potet](https://commons.wikimedia.org/wiki/File:Grand_salon,_Chateau_de_Villersexel_-_panoramio.jpg) - [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Au **rez-de-chaussée**, le **Château des Oubliés** propose une visite des salons historiques avec décors, histoires et petites surprises d'Halloween. L'organisateur la présente comme une **visite familiale, non conçue comme un parcours d'horreur**. Elle coûte **5 € par personne** et peut être choisie seule, sans passer par la cave. Les enfants sensibles à l'ambiance mystérieuse peuvent néanmoins préférer rester dans le parc.

## La Cave des Clowns Maudits : 10 €, à partir de 12 ans uniquement

Dans les sous-sols, la **Cave des Clowns Maudits** met en scène un parcours horrifique avec obscurité, comédiens et animations destinées à faire peur. L'entrée coûte **10 € par personne**.

**L'accès est strictement interdit aux moins de 12 ans**, même accompagnés. À partir de 12 ans, il faut encore tenir compte de la sensibilité de l'adolescent : l'organisateur avertit que l'expérience peut ne pas convenir aux personnes sensibles. Il ne s'agit pas d'une suite obligatoire du parcours familial.

## Réservation : facultative, mais prioritaire

La billetterie **Billetto est désormais ouverte** pour les deux parcours intérieurs. **Réserver n'est pas obligatoire** : il est également possible de se présenter directement sur place. En revanche, les personnes ayant réservé bénéficient d'un **accès prioritaire** à la visite choisie.

Chaque parcours fonctionne sous forme de **boucle à capacité limitée**. Sans réservation, l'attente peut être plus longue en cas d'affluence; avec un billet prioritaire, un court délai reste possible si la boucle est momentanément complète. **Pour faire les deux parcours, il faut deux billets distincts.** Le parc, lui, reste accessible sans billet.

Les **soirées dansantes de Godin Events** sont un autre événement et possèdent **leur propre billetterie**, indépendante de Billetto. L'accueil indiqué pour ces soirées commence à **21 h 30**, tandis que la partie dansante est annoncée **à partir de 23 h**, dans la Cuverie. Le 30 octobre, la soirée s'intitule « Ladies Night 100% Women »; le 31, « The Dark Castle ». Un billet de soirée ne donne pas accès aux parcours Halloween, et inversement.

## Horaires, déguisements et accès au château

L'organisateur annonce le parc et les parcours Halloween **de 18 h à 23 h**, les **30 et 31 octobre**. Une fiche de Haute-Saône Tourisme affiche encore **17 h** comme heure de début, mais précise que ses horaires ne sont pas garantis. Pour éviter une arrivée prématurée, retenez **18 h** selon le programme directement publié par le château et vérifiez toute évolution avant de partir.

Les **déguisements sont autorisés**. Pour des raisons de sécurité, les **masques couvrant entièrement le visage doivent être retirés** avant d'entrer dans les espaces intérieurs.

Le château se situe au **63, place de l'Hôtel-de-Ville, 70110 Villersexel**. Cette demeure du XIXe siècle est toujours habitée; les salons historiques sont ouverts à la visite lors de certaines occasions, dont ce parcours familial d'Halloween.

## Où dormir après une soirée à Villersexel ?

Si vous venez de loin avec des enfants et préférez éviter un retour tardif, **[l'Auberge de la Terrasse à Villersexel](https://www.booking.com/hotel/fr/auberge-de-la-terrasse.fr.html)** propose notamment des **chambres familiales** et un **parking gratuit**. Vérifiez les disponibilités réelles les 30 et 31 octobre ainsi que le prix correspondant aux âges des enfants avant de réserver : aucune chambre n'est garantie pour ces dates.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(09)/halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir/index.md

---
title: "Halloween au Château de Villersexel 2026 en famille: quelle expérience choisir?"
subtitle: "Parc gratuit, visite familiale ou parcours horrifique: trois ambiances très différentes les 30 et 31 octobre"
summary: "Parc gratuit, Château des Oubliés ou Cave des Clowns Maudits: les différences à connaître avant Halloween 2026 à Villersexel."
slug: halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir
status: published
publishedAt: 2026-09-27T20:24:24+02:00
updatedAt: 2026-09-28T03:20:37+02:00
eventEndsAt: 2026-10-31
category: evenements
readingTime: 4
location:
  city: Villersexel
  department: Haute-Saône
  region: Bourgogne-Franche-Comté
topic:
  key: evenements|villersexel|halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir|2026
  keywords:
    - Halloween Villersexel 2026
    - Château de Villersexel Halloween famille
image:
  src: "/images/articles/2026/09/halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir.webp"
  alt: "Façade du Château de Villersexel"
sources:
  - title: Château de Villersexel - Halloween 2026
    url: https://www.villersexel.com/halloween2026.html
  - title: Haute-Saône Tourisme - Festival de l'horreur
    url: https://hautesaonetourisme.com/offres/festival-de-lhorreur-villersexel-fr-4913213/
  - title: Château de Villersexel - Visites du château
    url: https://www.villersexel.com/visites-chateau-villersexel.html
affiliate:
  enabled: true
  type: travel
  destination: Villersexel
---
<!-- article-image-credit -->
*Photo: [Corinnepotet , retouched by A.BourgeoisP](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Villersexel_fa%C3%A7ade.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Les 30 et 31 octobre 2026, le Château de Villersexel, en Haute-Saône, transforme son domaine pour « Le Cirque des Squelettes ». L'événement ne propose pas une seule visite d'Halloween, mais trois expériences indépendantes: un parc extérieur gratuit, une visite familiale du château et un parcours d'horreur dans les sous-sols.

C'est la différence essentielle à comprendre avant de venir avec des enfants. Le [programme officiel du Château](https://www.villersexel.com/halloween2026.html) présente clairement le Château des Oubliés comme une expérience familiale, tandis que la Cave des Clowns Maudits est volontairement conçue pour faire peur.

## Le parc gratuit pour profiter de l'ambiance sans visite payante

Le parc extérieur est accessible gratuitement et sans billet. Des exposants, des food trucks et des décors d'Halloween sont annoncés autour du château mis en lumière.

Cette formule permet de venir simplement pour l'ambiance, de manger sur place ou de découvrir le décor sans engager toute la famille dans une visite intérieure. Elle est présentée comme tout public.

Le parc peut aussi servir de point de départ si certains membres de la famille veulent ensuite visiter le château tandis que d'autres préfèrent rester dehors.

## Le Château des Oubliés pour une visite familiale

<!-- article-image-body:01 -->

![Grand salon à l'intérieur du Château de Villersexel](/images/articles/2026/09/halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir-body-01.webp)

*Photo: [corinne potet](https://commons.wikimedia.org/wiki/File:Grand_salon,_Chateau_de_Villersexel_-_panoramio.jpg) - [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le Château des Oubliés coûte **5 € par personne**. Il se déroule dans les salons du château, avec des décors, des histoires et quelques surprises.

L'organisateur précise que cette visite est pensée pour les familles et qu'elle n'est pas conçue comme un parcours d'horreur. L'ambiance reste mystérieuse et liée à Halloween, mais l'objectif n'est pas de provoquer la peur comme dans la cave.

C'est donc l'option la plus adaptée si vous voulez entrer dans le château avec des enfants sans les emmener dans l'expérience horrifique.

Les deux visites intérieures étant indépendantes, il n'est pas nécessaire d'acheter la cave pour accéder au Château des Oubliés.

## La Cave des Clowns Maudits n'est pas une animation pour jeunes enfants

La Cave des Clowns Maudits coûte **10 € par personne**. Cette fois, le parcours se déroule dans l'obscurité des sous-sols, avec des comédiens et des animations horrifiques.

Le Château indique explicitement que l'expérience peut ne pas convenir aux jeunes enfants ou aux personnes sensibles. Les entrées sont régulées afin de conserver l'immersion et de limiter l'attente.

Il n'existe pas d'âge minimum chiffré annoncé. Pour une famille, il vaut donc mieux se baser sur la sensibilité réelle de l'enfant plutôt que considérer cette cave comme la suite automatique de la visite familiale.

## À quelle heure commence Halloween à Villersexel?

La page officielle du Château annonce une ouverture **à partir de 18 h** les vendredi 30 et samedi 31 octobre 2026.

Il existe toutefois une différence avec la fiche de [Haute-Saône Tourisme](https://hautesaonetourisme.com/offres/festival-de-lhorreur-villersexel-fr-4913213/), qui affiche actuellement un début à **17 h** les deux jours tout en précisant que ses horaires ne sont pas garantis. Le Château étant l'organisateur direct, retenez donc 18 h à ce stade et revérifiez sa page officielle avant le départ.

Une soirée dansante distincte est annoncée à partir de **23 h**. Elle possède sa propre organisation et sa propre billetterie: elle ne fait pas partie des visites d'Halloween.

## Faut-il réserver?

Le parc extérieur ne nécessite aucun billet. Pour le Château des Oubliés et la Cave des Clowns Maudits, la réservation est recommandée.

Au moment de la publication, la [billetterie Halloween du Château](https://www.villersexel.com/halloween2026.html) est annoncée comme « bientôt disponible ». Si vous visez la cave, réserver dès l'ouverture des ventes est particulièrement pertinent puisque les entrées y sont régulées.

## Peut-on venir déguisé?

Oui. Les déguisements sont les bienvenus.

Pour des raisons de sécurité, les masques qui couvrent entièrement le visage doivent toutefois être retirés avant d'entrer dans les espaces intérieurs. C'est une contrainte à prévoir si le déguisement d'un enfant repose principalement sur un masque intégral.

## Où se trouve le Château de Villersexel?

Le Château se trouve au **63, place de l'Hôtel-de-Ville, 70110 Villersexel**. Il s'agit d'une demeure du XIXe siècle toujours habitée, avec des salons historiques ouverts à la visite pendant sa saison habituelle. La [présentation des visites du domaine](https://www.villersexel.com/visites-chateau-villersexel.html) permet de voir le type d'espaces intérieurs que l'on retrouve dans le parcours.

## Dormir à Villersexel si vous venez de loin

Pour une famille qui préfère éviter de reprendre la route après une soirée d'Halloween, [l'Auberge de la Terrasse à Villersexel](https://www.booking.com/hotel/fr/auberge-de-la-terrasse.fr.html) propose des chambres familiales et un parking gratuit. Les tarifs et disponibilités varient selon la composition de la famille et la date: vérifiez les conditions au moment de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/chateau-de-boutheon-avec-des-enfants-chateau-parc-ou-billet-couple/ | Château de Bouthéon avec des enfants: château, parc ou billet couplé? | sorties | Andrézieux-Bouthéon, Loire, Auvergne-Rhône-Alpes
- /articles/sorties/gouffre-de-padirac-en-famille-tarifs-poussette-et-conseils-pour-la-visite/ | Gouffre de Padirac avec des enfants: à partir de quel âge et tarifs 2026 | sorties | Padirac, Lot, Occitanie
- /articles/bons-plans/la-roche-jagu-en-famille-a-l-automne-hiver-2026-parc-gratuit-tarifs-et-jours-d-ouverture/ | La Roche-Jagu en famille à l'automne-hiver 2026: parc gratuit, tarifs et jours d'ouverture | bons-plans | Ploëzal, Côtes-d'Armor, Bretagne
- /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | Halloween 2026 au château de Couches: atelier citrouille et jeu Mystères & Sortilèges | evenements | Couches, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/sorties/chateau-de-castelnaud-avec-des-enfants-est-ce-une-bonne-sortie-selon-leur-age/ | Château de Castelnaud avec des enfants: est-ce une bonne sortie selon leur âge? | sorties | Castelnaud-la-Chapelle, Dordogne, Nouvelle-Aquitaine
- /articles/bons-plans/parc-animalier-de-charleville-mezieres-une-sortie-gratuite-toute-l-annee/ | Parc animalier de Charleville-Mézières: une sortie gratuite toute l'année | bons-plans | Charleville-Mézières, Ardennes, Grand Est
- /articles/voyages/peur-sur-le-parc-2026-en-famille-journee-nocturne-billets-et-hebergement/ | Peur sur le Parc 2026 en famille: journée, nocturne, billets et hébergement | voyages | Plailly, Oise, Hauts-de-France
- /articles/evenements/halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir/ | Halloween au Château de Villersexel 2026 en famille: quelle expérience choisir? | evenements | Villersexel, Haute-Saône, Bourgogne-Franche-Comté
- /articles/voyages/week-end-aux-1000-etangs-avec-des-enfants-ou-se-poser-et-quoi-faire-sans-grosse-randonnee/ | Week-end aux 1000 Étangs avec des enfants: où se poser et quoi faire sans grosse randonnée | voyages | Mélisey, Haute-Saône, Bourgogne-Franche-Comté
- /articles/sorties/chapelle-de-ronchamp-en-famille-tarifs-2026-et-conseils-de-visite/ | Chapelle de Ronchamp en famille: tarifs 2026 et conseils de visite | sorties | Ronchamp, Haute-Saône, Bourgogne-Franche-Comté
- /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | Automnales d'Harcourt 2026: animations, visites et tarifs en famille | evenements | Harcourt, Eure, Normandie
- /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | Toussaint 2026 au musée des Confluences: cinq rendez-vous pour les enfants | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/toussaint-2026-au-seaquarium-du-grau-du-roi-quel-jeu-choisir/ | Toussaint 2026 au Seaquarium: dates des jeux, âges et billets en famille | evenements | Le Grau-du-Roi, Gard, Occitanie
- /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/vacances-royales-2026-a-versailles-animations-napoleon-dates-et-billets-en-famille/ | Vacances royales 2026 à Versailles: animations Napoléon, dates et billets | evenements | Versailles, Yvelines, Île-de-France
- /articles/evenements/rouen-givree-2026-en-famille-marche-de-noel-et-refuge-givre/ | Rouen Givrée 2026 en famille: marché de Noël et Refuge Givré | evenements | Rouen, Seine-Maritime, Normandie
- /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | Au Creux de l'Oreille 2026 à Noirlac: spectacles et ateliers en famille du 17 au 22 octobre | evenements | Bruère-Allichamps, Cher, Centre-Val de Loire
- /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | Grands Zyeux P'tites Zoreilles 2026: spectacles gratuits avec les tout-petits autour de Béziers | evenements | Béziers, Hérault, Occitanie
- /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | Abracada BOUH 2026 à Montpellier: programme et tarifs au château de Flaugergues | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | Fête de l'Automne 2026 à Terra Botanica: animations et tarifs | evenements | Angers, Maine-et-Loire, Pays de la Loire

### Historique Radar lié

- opportunity | /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | 2026-10-13T20:41:25.500Z
- opportunity | /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | 2026-10-14T13:49:08.708Z
- opportunity | /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | 2026-10-16T06:56:21.314Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- opportunity | /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | 2026-10-13T12:37:05.098Z
- opportunity | /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | 2026-10-14T07:31:28.976Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- opportunity | /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | 2026-10-12T14:00:32.202Z
- opportunity | /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | 2026-10-15T05:30:56.094Z
- opportunity | /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | 2026-10-15T17:42:32.693Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
