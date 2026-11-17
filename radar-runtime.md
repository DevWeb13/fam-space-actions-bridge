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
title: "Noël 2026 à Cannes en famille: marché du centre et Palm Beach"
subtitle: "Deux rendez-vous distincts: dates, horaires, animations et accès avec des enfants"
summary: Du 27 novembre 2026 au 3 janvier 2027, Cannes accueille un marché de Noël au centre-ville et, dès le 3 décembre, un village au Palm Beach. Horaires, entrée, transports et points à vérifier en famille.
category: evenements
location:
  city: Cannes
  department: Alpes-Maritimes
  region: Provence-Alpes-Côte d’Azur
image:
  src: /images/articles/2026/10/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach.webp
  alt: Kiosque à musique des Allées de la Liberté à Cannes, emplacement du marché de Noël du centre, photographié hors période des fêtes
sources:
  - title: Ville de Cannes - Marché de Noël 2026, dates et emplacement
    url: https://www.cannes.com/fr/economie/commerce-et-artisanat/evenements-et-appels-a-candidatures.html
  - title: Ville de Cannes - Village de Noël du Palm Beach, horaires et entrée
    url: https://www.cannes.com/fr/agenda/annee-2026/decembre/village-de-noel-au-palm-beach.html
  - title: Palm Beach Cannes - Chalets et animations du Village de Noël
    url: https://palmbeach-cannes.com/fr/venues/christmas-village
  - title: Ville de Cannes - Aménagements des Allées de la Liberté
    url: https://www.cannes.com/fr/cadre-de-vie/travaux-en-cours/realisations/espace-vert-promenade/allees-de-la-liberte.html
  - title: Ville de Cannes - Transports et Palm Impérial
    url: https://www.cannes.com/fr/cadre-de-vie/transports/se-deplacer-dans-cannes/prendre-le-bus.html
eventEndsAt: 2027-01-03
topic:
  key: evenements|cannes|noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach|2026
  keywords:
    - Noël Cannes 2026 famille
    - marché de Noël Cannes 2026
    - Village de Noël Palm Beach Cannes
slug: noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach
status: published
publishedAt: 2026-10-31T22:36:58.730Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Cannes
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/index.md
  targetSha: e5734d63102b0aa84189f1f4b745d4961c17bda3
  targetUrl: /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/
  decision: Choisir entre le marché du centre et le Palm Beach selon l'âge des enfants, les dates, les animations réellement accessibles, le coût de la patinoire et le retour en transport.
  affiliationPotential: Conserver l'hébergement Booking.com Nemea Appart Hotel Cannes Palais et revérifier les conditions; pas de billetterie partenaire pertinente démontrée pour les animations municipales.
  gsc:
    retrievedAt: 2026-11-17T04:29:30+01:00
    dataThrough: 2026-11-14
    signal: uncertain
    basis: "Visibilité récente : 39 impressions sur trois jours, puis 5 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-03
    peakEnd: 2026-11-05
    recentStart: 2026-11-12
    recentEnd: 2026-11-14
    peakImpressions: 39
    recentImpressions: 5
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - marche de noel palm beach cannes
      - marché de noël cannes 2026
---

subtitle: "Marché, patinoire, ateliers et Palm Beach: choisir sa sortie selon les dates et l'âge des enfants"
summary: "À Cannes, le marché de Noël du centre ouvre du 27 novembre au 3 janvier avec 66 chalets et une patinoire à 5 €, gratuite le matin pour les 4-10 ans. Le Palm Beach accueille son village dès le 3 décembre, avec des jours de fermeture à connaître."
sources:
  - title: Office de tourisme de Cannes - Village de Noël 2026
    url: https://www.palaisdesfestivals.com/offres/village-de-noel-cannes-fr-5232825/
  - title: Office de tourisme de Cannes - Patinoire 2026
    url: https://www.cannes-france.com/offres/patinoire-cannes-fr-5232826/
  - title: Office de tourisme de Cannes - Programme Noël 2026
    url: https://www.palaisdesfestivals.com/offres/noel-a-cannes-cannes-fr-5259878/
  - title: Ville de Cannes - Village de Noël du Palm Beach
    url: https://www.cannes.com/fr/agenda/annee-2026/decembre/village-de-noel-au-palm-beach.html
  - title: Palm Beach Cannes - Village de Noël
    url: https://palmbeach-cannes.com/fr/venues/christmas-village
  - title: Ville de Cannes - Aménagements des Allées de la Liberté
    url: https://www.cannes.com/fr/cadre-de-vie/travaux-en-cours/realisations/espace-vert-promenade/allees-de-la-liberte.html
  - title: Ville de Cannes - Transports et Palm Impérial
    url: https://www.cannes.com/fr/cadre-de-vie/transports/se-deplacer-dans-cannes/prendre-le-bus.html
---
<!-- article-image-credit -->
*Photo: [Mister No](https://commons.wikimedia.org/wiki/File:Kiosque_%C3%A0_musique_des_All%C3%A9es_de_la_Libert%C3%A9-Charles-de-Gaulle_%C3%A0_Cannes.jpg) - [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Pour Noël 2026, Cannes propose deux sorties différentes: le **Village de Noël des Allées de la Liberté**, près de la gare, avec ses chalets, sa patinoire et des animations pour enfants, et le **Village de Noël du Palm Beach**, face à la mer. Le premier ouvre le 27 novembre, le second le 3 décembre. Voici comment choisir sans confondre horaires, gratuité d'entrée et prix des activités.

## Le marché du centre: chalets, patinoire et Père Noël

Le marché municipal occupe les **Allées de la Liberté et le cours Félix-Faure du 27 novembre 2026 au 3 janvier 2027**. Ses **66 chalets** réunissent artisanat, cadeaux et gourmandises. L'accès au village est libre. L'inauguration est annoncée **vendredi 27 novembre à 19 h**.

Selon la [fiche de l'office de tourisme](https://www.palaisdesfestivals.com/offres/village-de-noel-cannes-fr-5232825/), les horaires du marché sont **11 h à 21 h du dimanche au jeudi** et **11 h à 22 h les vendredis et samedis**. Attention: le texte détaillé du programme mentionne aussi une ouverture à 10 h, contrairement à la grille horaire de la fiche. Pour une visite dès 10 h, vérifiez l'ouverture des chalets auprès de l'organisateur.

### Combien coûte la patinoire ?

La [patinoire officielle](https://www.cannes-france.com/offres/patinoire-cannes-fr-5232826/) de **360 m²** est annoncée de **10 h à 21 h du dimanche au jeudi**, et jusqu'à **22 h le vendredi et le samedi**. L'entrée coûte **5 €**, mais elle est **gratuite pour les enfants de 4 à 10 ans, chaque matin de 10 h à 13 h**. Les accompagnateurs restent payants. Par exemple, pour un enfant de 7 ans et un adulte qui patinent ensemble le matin, prévoyez 5 € d'entrée pour l'adulte, hors éventuels frais non précisés.

Pour les familles, le créneau matinal est donc le plus intéressant pour la glace, même si les chalets peuvent ouvrir plus tard. Ne confondez pas l'entrée libre au marché avec la gratuité de la patinoire.

### Quels jours venir pour les animations ?

La fabrique du Père Noël, près de la patinoire, annonce des ateliers **de 14 h 30 à 18 h 30** les **28 et 29 novembre**, les **2, 5, 9, 12, 13 et 16 décembre**, puis **tous les jours du 19 décembre au 3 janvier**. Des contes sont annoncés à **15 h 30 et 17 h 30** les jours d'ouverture de cette animation. Les modalités de participation et les éventuels tarifs des ateliers restent à vérifier.

Pour rencontrer le Père Noël, privilégiez **le 27 novembre de 17 h 30 à 20 h 30**, les **5, 6, 12 et 13 décembre de 14 h 30 à 18 h 30**, ou **du 19 au 24 décembre de 14 h 30 à 18 h 30**. La grande **parade lumineuse du mercredi 23 décembre** part de la rue Meynadier à **17 h 30** et rejoint les Allées de la Liberté; comptez environ **1 h 30** de déambulation. Les horaires et parcours proviennent du [programme officiel de Noël à Cannes](https://www.palaisdesfestivals.com/offres/noel-a-cannes-cannes-fr-5259878/).

Autre possibilité pour les familles du quartier: **place Roubaud à La Bocca**, des ateliers et animations sont annoncés **du 19 au 24 décembre**, notamment le matin de 10 h 30 à 12 h et l'après-midi de 14 h 30 à 18 h 30. Cela permet une sortie sans forcément rejoindre le centre-ville.

Les Allées réaménagées disposent d'une large promenade piétonne et de **toilettes publiques**. Une poussette y est envisageable, même si les chalets et la foule peuvent réduire la place disponible.

## Le Palm Beach: un village de Noël face à la mer

<!-- article-image-body:01 -->

![Vue panoramique de la pointe du Palm Beach et de la baie de Cannes en 2016, hors période de Noël](/images/articles/2026/10/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach-body-01.webp)

*Photo: [Bernard DUPONT from FRANCE](https://commons.wikimedia.org/wiki/File:Baie_de_Cannes_-_Flickr_-_berniedup.jpg) - [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le **Village de Noël du Palm Beach**, place Franklin-Roosevelt, ouvre du **3 décembre 2026 au 3 janvier 2027**. La [Ville de Cannes](https://www.cannes.com/fr/agenda/annee-2026/decembre/village-de-noel-au-palm-beach.html) distingue deux périodes:

- **Du 3 au 16 décembre:** 15 h à 22 h, fermé les **7, 8, 14 et 15 décembre**.
- **Du 17 décembre au 3 janvier:** 15 h à 22 h, tous les jours.

L'entrée est libre. L'organisateur présente des chalets d'artisanat, des spécialités gourmandes, des concerts, des spectacles et des activités pour enfants. Les âges, les créneaux et les tarifs de chaque animation ne sont pas tous détaillés: **l'entrée gratuite ne rend pas nécessairement les activités et consommations gratuites**.

En bord de mer, prévoyez une couche chaude pour le vent, surtout en fin de journée. Si vous venez avec un bébé ou une personne ayant des besoins d'accessibilité précis, vérifiez avant de partir les sanitaires, l'accès aux chalets et la présence éventuelle d'une table à langer: ces équipements ne sont pas confirmés dans la présentation générale.

## Quel village choisir avec des enfants ?

**Pour une sortie facile depuis la gare**, choisissez le marché du centre. **Pour patiner à moindre coût avec un enfant de 4 à 10 ans**, visez le matin, avant 13 h. **Pour les ateliers ou le Père Noël**, choisissez une date annoncée plutôt que de compter sur une présence quotidienne. **Pour une promenade au bord de la mer en fin d'après-midi**, le Palm Beach est une autre ambiance, mais attention aux quatre jours de fermeture de début décembre.

## Venir sans voiture et anticiper le retour

<!-- article-image-body:03 -->

![Bus de la ligne Palm Impérial en direction du Palm Beach au terminus quai Laubeuf à Cannes en 2024](/images/articles/2026/10/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach-body-03.webp)

*Photo: [Manchesterunited1234](https://commons.wikimedia.org/wiki/File:Unvi_Urbis_B9TL_n%C2%B0006_(Palm_Imp%C3%A9rial_-_Ligne_8)_-_(Quai_Laubeuf,_Boulevard_Jean_Hibert)_-_(Cannes,_FR06)_-_24-07-2024_2.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

<!-- article-image-body:02 -->

![Hall voyageurs modernisé de la gare SNCF de Cannes photographié en 2021](/images/articles/2026/10/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach-body-02.webp)

*Photo: [Horizon06](https://commons.wikimedia.org/wiki/File:20210701_093533_Gare_SNCF_de_Cannes.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Depuis la **gare SNCF de Cannes**, le marché du centre est accessible à pied en direction du Palais des Festivals. Pour le Palm Beach, le bus **Palm Impérial** relie le **quai Laubeuf** à la pointe de la Croisette: il **ne part pas directement de la gare**. La [Ville affiche](https://www.cannes.com/fr/cadre-de-vie/transports/se-deplacer-dans-cannes/prendre-le-bus.html) un billet aller-retour à **3,60 €** et un service de **9 h à 19 h**. Vérifiez les horaires et tarifs actualisés sur Palm Bus avant le départ: une fermeture du village à 22 h ne garantit pas de bus pour rentrer.

Les navettes gratuites de plage sont estivales, pas une solution hivernale confirmée. En cas de pluie ou de vent fort, vérifiez aussi le maintien des animations.

## Dormir près du marché pour prolonger la visite

Pour un week-end sans voiture, le [Nemea Appart Hotel Cannes Palais sur Booking.com](https://www.booking.com/hotel/fr/cannes-palais.fr.html), au centre de Cannes, propose notamment des logements avec kitchenette et, selon la catégorie, une chambre et un canapé-lit. Indiquez **le nombre et l'âge des enfants** avant de réserver: la présence d'un canapé-lit ne garantit pas une capacité de quatre personnes. La fiche consultée précédemment mentionnait une **caution remboursable de 300 €** et **aucun lit bébé ni lit d'appoint**; contrôlez ces conditions, la capacité exacte, les frais et la disponibilité à vos dates.

Pour une autre sortie de fêtes, découvrez notre [guide de Noël à Nice 2026 en famille](https://www.fam-space.fr/articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/). Pour un séjour plus long, notre [guide des îles de Lérins en famille](https://www.fam-space.fr/articles/voyages/iles-de-lerins-en-famille-quelle-ile-choisir-et-comment-organiser-la-traversee/) aide à préparer une excursion, sous réserve des traversées et de la météo hivernale.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/index.md

---
title: "Noël 2026 à Cannes en famille: marché du centre et Palm Beach"
subtitle: "Deux rendez-vous distincts: dates, horaires, animations et accès avec des enfants"
summary: Du 27 novembre 2026 au 3 janvier 2027, Cannes accueille un marché de Noël au centre-ville et, dès le 3 décembre, un village au Palm Beach. Horaires, entrée, transports et points à vérifier en famille.
category: evenements
location:
  city: Cannes
  department: Alpes-Maritimes
  region: Provence-Alpes-Côte d’Azur
image:
  src: "/images/articles/2026/10/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach.webp"
  alt: "Kiosque à musique des Allées de la Liberté à Cannes, emplacement du marché de Noël du centre, photographié hors période des fêtes"
sources:
  - title: Ville de Cannes - Marché de Noël 2026, dates et emplacement
    url: https://www.cannes.com/fr/economie/commerce-et-artisanat/evenements-et-appels-a-candidatures.html
  - title: Ville de Cannes - Village de Noël du Palm Beach, horaires et entrée
    url: https://www.cannes.com/fr/agenda/annee-2026/decembre/village-de-noel-au-palm-beach.html
  - title: Palm Beach Cannes - Chalets et animations du Village de Noël
    url: https://palmbeach-cannes.com/fr/venues/christmas-village
  - title: Ville de Cannes - Aménagements des Allées de la Liberté
    url: https://www.cannes.com/fr/cadre-de-vie/travaux-en-cours/realisations/espace-vert-promenade/allees-de-la-liberte.html
  - title: Ville de Cannes - Transports et Palm Impérial
    url: https://www.cannes.com/fr/cadre-de-vie/transports/se-deplacer-dans-cannes/prendre-le-bus.html
eventEndsAt: 2027-01-03
topic:
  key: evenements|cannes|noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach|2026
  keywords:
    - Noël Cannes 2026 famille
    - marché de Noël Cannes 2026
    - Village de Noël Palm Beach Cannes
slug: noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach
status: published
publishedAt: 2026-10-31T22:36:58.730Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Cannes
---
<!-- article-image-credit -->
*Photo: [Mister No](https://commons.wikimedia.org/wiki/File:Kiosque_%C3%A0_musique_des_all%C3%A9es_de_la_Libert%C3%A9-Charles-de-Gaulle_%C3%A0_Cannes.jpg) - [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Cannes, deux rendez-vous de Noël sont annoncés pour l'hiver 2026-2027: le marché municipal des Allées de la Liberté, près du Vieux-Port, et le Village de Noël du Palm Beach, au bout de la Croisette. **Le premier est plus facile à rejoindre depuis la gare; le second propose des chalets et des animations face à la mer.** Leurs dates et leurs horaires ne sont pas identiques.

## Le marché du centre: du 27 novembre au 3 janvier

La Ville annonce le **marché de Noël du vendredi 27 novembre 2026 au dimanche 3 janvier 2027**, sur les **Allées de la Liberté et le cours Félix-Faure**. Sa situation près du Palais des Festivals et de l'hôtel de ville convient à une promenade depuis la gare SNCF, sans voiture.

Les Allées ont été réaménagées avec une large promenade piétonne et des **toilettes publiques**. C'est un atout avec une poussette, même si les chalets temporaires et l'affluence peuvent modifier les passages habituels.

**Au 31 octobre 2026, les horaires quotidiens du marché, une éventuelle patinoire et les tarifs des attractions ne sont pas confirmés** sur la page municipale consultée. Aucune billetterie générale n'y est annoncée; cela ne garantit pas la gratuité des activités. Ne reprenez pas les animations de l'édition 2025 comme si elles étaient déjà programmées pour 2026.

## Le Palm Beach: du 3 décembre au 3 janvier

<!-- article-image-body:01 -->

![Vue panoramique de la pointe du Palm Beach et de la baie de Cannes en 2016, hors période de Noël](/images/articles/2026/10/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach-body-01.webp)

*Photo: [Bernard DUPONT from FRANCE](https://commons.wikimedia.org/wiki/File:Baie_de_Cannes_-_Flickr_-_berniedup.jpg) - [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le **Village de Noël du Palm Beach**, place Franklin-Roosevelt, ouvre du **jeudi 3 décembre 2026 au dimanche 3 janvier 2027**. La Ville publie deux périodes:

- **Du 3 au 16 décembre:** de 15 h à 22 h, sauf les lundis et mardis (7, 8, 14 et 15 décembre).
- **Du 17 décembre au 3 janvier:** de 15 h à 22 h, tous les jours.

**L'entrée est libre.** L'organisateur annonce des chalets d'artisanat, des spécialités gourmandes, des concerts, des spectacles et des activités pour enfants. Les créneaux, les âges et les tarifs propres à chaque animation ne sont pas détaillés dans sa présentation générale. L'accès gratuit au village ne signifie donc pas que toutes les activités ou consommations sont gratuites.

Pour une sortie avec de jeunes enfants, une visite en fin d'après-midi permet de profiter du village sans devoir attendre 22 h. Le site étant au bord de la mer, prévoyez des vêtements adaptés au vent.

## Lequel choisir avec des enfants ?

**Pour une sortie courte en train**, le marché du centre évite un trajet supplémentaire. **Pour les chalets et animations en bord de mer**, le Palm Beach convient davantage, à condition de choisir un jour d'ouverture. Les **7, 8, 14 et 15 décembre**, le Palm Beach est fermé: le marché du centre reste l'autre possibilité, sous réserve de ses horaires encore à publier.

Les Allées disposent de toilettes publiques identifiées. En revanche, les annonces du Palm Beach ne précisent pas l'accessibilité de chaque chalet, les sanitaires accessibles aux visiteurs ni l'existence d'une table à langer ou d'un espace bébé. Si ces équipements sont indispensables, renseignez-vous auprès de l'organisateur avant la visite.

## Venir sans voiture et prévoir le retour

<!-- article-image-body:03 -->

![Bus de la ligne Palm Impérial en direction du Palm Beach au terminus quai Laubeuf à Cannes en 2024](/images/articles/2026/10/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach-body-03.webp)

*Photo: [Manchesterunited1234](https://commons.wikimedia.org/wiki/File:Unvi_Urbis_B9TL_n%C2%B0006_(Palm_Imp%C3%A9rial_-_Ligne_8)_-_(Quai_Laubeuf,_Boulevard_Jean_Hibert)_-_(Cannes,_FR06)_-_24-07-2024_2.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

<!-- article-image-body:02 -->

![Hall voyageurs modernisé de la gare SNCF de Cannes photographié en 2021](/images/articles/2026/10/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach-body-02.webp)

*Photo: [Horizon06](https://commons.wikimedia.org/wiki/File:20210701_093533_Gare_SNCF_de_Cannes.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Depuis la **gare de Cannes**, rejoignez à pied le Palais des Festivals puis les Allées de la Liberté. Pour le Palm Beach, le bus **Palm Impérial** relie le quai Laubeuf à la pointe de la Croisette; il ne part pas directement de la gare. La Ville affiche un **billet aller-retour à 3,60 €** et un service de **9 h à 19 h**. Vérifiez les horaires actualisés sur Palm Bus: **une fermeture du village à 22 h ne signifie pas que le bus circule jusque-là**.

Les navettes gratuites de plage annoncées par la Ville sont estivales, et non une solution hivernale confirmée. Par temps de forte pluie ou de vent, vérifiez le maintien des animations avant le départ.

## Où dormir pour un week-end à Cannes ?

Pour prolonger la visite, le [Nemea Appart Hotel Cannes Palais sur Booking.com](https://www.booking.com/hotel/fr/cannes-palais.fr.html), dans Cannes centre, propose notamment des logements avec kitchenette; certaines catégories comprennent une chambre et un canapé-lit. **Ne supposez pas qu'un appartement accepte automatiquement quatre voyageurs:** renseignez le nombre et l'âge des enfants et contrôlez la capacité de l'offre précise. La fiche Booking.com consultée indique **une caution remboursable de 300 €** et **aucun lit bébé ou lit d'appoint disponible**; revérifiez les conditions avant de réserver, ainsi que les frais et le prix à vos dates.

Pour un séjour plus long sur la Côte d'Azur, notre [guide de Noël à Nice 2026 en famille](https://www.fam-space.fr/articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/) présente un autre programme de fêtes. Vous pouvez aussi préparer une excursion avec notre [guide des îles de Lérins en famille](https://www.fam-space.fr/articles/voyages/iles-de-lerins-en-famille-quelle-ile-choisir-et-comment-organiser-la-traversee/), en tenant compte des traversées et de la météo hivernales.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/ | Marché de Noël de Lille 2026 en famille: village, Grande Roue et infos pratiques | evenements | Lille, Nord, Hauts-de-France
- /articles/evenements/festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir/ | Festival des Jeux de Cannes 2027 en famille: billets, âges et visite | evenements | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/voyages/iles-de-lerins-en-famille-quelle-ile-choisir-et-comment-organiser-la-traversee/ | Îles de Lérins en famille: quelle île choisir et comment organiser la traversée ? | voyages | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | Noël à Nice 2026 en famille: village, spectacles et crèche | evenements | Nice, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | Noël à Bayeux 2026 en famille: marché et Galopades | evenements | Bayeux, Calvados, Normandie
- /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | Noël 2026 à Toulon en famille: marché, patinoire et horaires | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | Noël 2026 à Cannes en famille: marché du centre et Palm Beach | evenements | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/activites/parc-phoenix-a-nice-en-famille-serre-tropicale-animaux-et-jeux/ | Parc Phoenix à Nice en famille: serre tropicale, animaux et jeux | activites | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/fete-du-citron-2027-a-menton-en-famille-que-voir-et-combien-prevoir/ | Fête du Citron 2027 à Menton en famille: que voir et combien prévoir ? | evenements | Menton, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | Festival Enfantillages 2026 à Valbonne: spectacles gratuits et cinéma en famille | evenements | Valbonne, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/sorties/villa-ephrussi-de-rothschild-en-famille-que-voir-dans-la-villa-et-les-jardins/ | Villa Ephrussi de Rothschild en famille: que voir dans la villa et les jardins? | sorties | Saint-Jean-Cap-Ferrat, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/musee-national-du-sport-a-nice-en-famille-combien-coute-vraiment-la-visite/ | Musée National du Sport à Nice en famille: que voir et préparer la visite | bons-plans | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/parentalite/maison-des-1-000-premiers-jours-a-grasse-peut-on-venir-sans-rendez-vous/ | Maison des 1 000 premiers jours à Grasse: peut-on venir sans rendez-vous? | parentalite | Grasse, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/cuisine/atelier-de-cuisine-nicoise-a-nice-faut-il-reserver-avec-des-enfants/ | Atelier de cuisine niçoise à Nice: faut-il réserver avec des enfants? | cuisine | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/maison/renovation-energetique-dans-les-alpes-maritimes-jusqu-a-25-400-d-aide/ | Rénovation énergétique dans les Alpes-Maritimes: jusqu'à 25 400 € d'aide | maison | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/vie-pratique/location-de-voiture-a-nice-avec-des-enfants-ce-qu-il-faut-verifier-avant-de-reserver/ | Location de voiture à Nice avec des enfants: ce qu'il faut vérifier avant de réserver | vie-pratique | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/niepce-et-apres-une-exposition-photo-a-decouvrir-en-famille-a-chalon-sur-saone/ | Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône | evenements | Chalon-sur-Saône, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-puy-du-fou-en-famille-spectacles-et-visite-en-hiver/ | Noël 2026 au Puy du Fou en famille: spectacles et visite en hiver | evenements | Les Epesses, Vendée, Pays de la Loire
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | 2026-10-26T03:35:31.605Z
- opportunity | /articles/evenements/festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir/ | 2026-10-28T09:26:08.391Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | 2026-10-31T22:36:58.800Z
- opportunity | /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | 2026-10-31T10:28:17.432Z
- refresh | /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | 2026-11-16T04:35:04.037Z
- opportunity | /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | 2026-10-30T15:36:05.374Z
- refresh | /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | 2026-11-14T12:29:40.480Z
- opportunity | /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | 2026-10-25T04:31:33.540Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
