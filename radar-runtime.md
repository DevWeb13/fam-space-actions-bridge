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
title: "Ville de Noël d’Arras 2026 en famille: horaires, attractions et budget"
subtitle: Grande roue, patinoire, transports et conseils pour une visite avec les enfants
summary: "Du 27 novembre au 27 décembre 2026, préparez une visite de la Ville de Noël d’Arras en famille: horaires, attractions, dépenses à prévoir et accès au centre-ville."
category: evenements
location:
  city: Arras
  department: Pas-de-Calais
  region: Hauts-de-France
image:
  src: /images/articles/2026/10/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires.webp
  alt: Chalets du marché de Noël sur la Grand-Place d'Arras photographiés en décembre 2017
sources:
  - title: Ville d’Arras - Ville de Noël 2026
    url: https://www.arras.fr/ville-de-noel
  - title: Ville d’Arras - Inauguration de la Ville de Noël 2026
    url: https://arras.fr/ville-de-noel/evenement/inauguration-de-la-ville-de-noel
  - title: Arras Pays d’Artois Tourisme - Dates et horaires 2026
    url: https://www.arraspaysdartois.com/agenda/ville-de-noel/
  - title: Ville d’Arras - Lieux emblématiques
    url: https://arras.fr/page/lieux-emblematiques
  - title: Artis - Déviations du réseau pendant la Ville de Noël 2026
    url: https://plan.bus-artis.fr/fr/traffic-infos
  - title: Artis - Navettes gratuites Ma Citadine
    url: https://www.bus-artis.fr/bus/ma-citadine/
eventEndsAt: 2026-12-27T21:00:00+01:00
reviewAt: 2026-11-24
topic:
  key: evenements|arras|ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires|2026
  keywords:
    - Ville de Noël Arras 2026
    - marché de Noël Arras en famille
    - grande roue patinoire Arras Noël
slug: ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires
status: published
publishedAt: 2026-10-29T20:30:32.907Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Arras
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/index.md
  targetSha: 910144dfa46f7a53b356999ab24673981daff068
  targetUrl: /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/
  decision: Choisir entre la soirée d'inauguration du 27 novembre et une visite familiale ordinaire, puis prévoir une balade gratuite ou une attraction sans confondre programme et tarifs 2025 avec 2026.
  affiliationPotential: Conserver le Mercure Arras Centre Gare sur Booking.com pour les familles qui prolongent la visite; aucune billetterie partenaire confirmée pour les attractions.
  gsc:
    retrievedAt: 2026-11-23T02:29:06+01:00
    dataThrough: 2026-11-20
    signal: needs_query_check
    basis: "Visibilité récente : 37 impressions sur trois jours, puis 9 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-31
    peakEnd: 2026-11-02
    recentStart: 2026-11-18
    recentEnd: 2026-11-20
    peakImpressions: 37
    recentImpressions: 9
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Ville de Noël Arras 2026
      - marché de Noël Arras en famille
      - grande roue patinoire Arras Noël
---

<!-- article-image-credit -->
*Photo: [Marc Ryckaert](https://commons.wikimedia.org/wiki/File:Arras_March%C3%A9_de_No%C3%ABl_R01.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

La **Ville de Noël d’Arras se déroule du 27 novembre au 27 décembre 2026**, sur la Grand’Place et dans le centre historique. La promenade parmi les chalets et les illuminations ne nécessite pas de billet d’entrée. En famille, les principales dépenses viennent des attractions éventuelles et des pauses gourmandes.

## Inauguration ou visite en journée: quel moment choisir?

**Vendredi 27 novembre 2026**, la Ville d’Arras annonce une **inauguration gratuite de 18 h à 21 h, place des Héros**, avec illuminations, animations et surprises. Le rendez-vous est annoncé **à 18 h**. Le détail des animations n’étant pas précisé, mieux vaut ne pas promettre un spectacle particulier. Retrouvez l’[annonce de l’inauguration par la Ville](https://arras.fr/ville-de-noel/evenement/inauguration-de-la-ville-de-noel).

Pour des enfants qui supportent mal la foule ou se couchent tôt, préférez une visite ordinaire en début d’après-midi. Pour vivre l'allumage festif et les animations inaugurales, choisissez le 27 novembre en soirée, en prévoyant des vêtements chauds et un trajet retour adapté.

## Dates et horaires de la Ville de Noël 2026

L’office de tourisme annonce les horaires suivants pour la période du marché:

- **Du dimanche au jeudi: 12 h à 21 h.**
- **Vendredi et samedi: 12 h à 22 h 30.**
- **Jeudi 24 décembre: 12 h à 17 h.**
- **Vendredi 25 décembre: fermé.**

Ces horaires généraux ne doivent pas être confondus avec le créneau spécifique de l'inauguration. Avec de jeunes enfants, une visite d’une à deux heures permet de parcourir quelques chalets sans trop les fatiguer. Pour les illuminations, privilégiez la fin d’après-midi.

## Grande roue, patinoire et Père Noël

<!-- article-image-body:01 -->

![Grande roue et manège sur la Grand-Place d'Arras pendant le marché de Noël 2025](/images/articles/2026/10/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires-body-01.webp)

*Photo: [Anthospace](https://commons.wikimedia.org/wiki/File:Arras,_Christmas_city_2025-Carousel,_Ferris_wheel_and_Lumi%C3%A8re_the_candelabra-_IDNSL.jpg) - [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

La Ville d’Arras cite parmi ses lieux emblématiques **la grande roue, la patinoire, le petit train touristique au départ de la gare et la maison du Père Noël, place d’Ipswich**. Le beffroi illuminé, le sapin et les chalets offrent aussi une promenade sans attraction payante.

Cette présentation générale ne constitue toutefois **pas une confirmation du fonctionnement de chacune de ces attractions en 2026**. Les photos de 2025 illustrent l'édition précédente. Les dates, les prix, les limites d'âge et les éventuelles réservations des attractions restent à vérifier sur le [site de la Ville de Noël](https://www.arras.fr/ville-de-noel). Pour la patinoire, renseignez-vous sur l'âge admis, l'accompagnement et les équipements disponibles avant de promettre une séance aux enfants.

## Quel budget prévoir avec les enfants?

<!-- article-image-body:02 -->

![Patinoire temporaire installée sur la Grand-Place d'Arras pour Noël 2025](/images/articles/2026/10/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires-body-02.webp)

*Photo: [Anthospace](https://commons.wikimedia.org/wiki/File:Arras,_city_of_Christmas_2025-_The_ice_rink_built_for_the_occasion-_IETF.jpg) - [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

**L’accès au marché et à l'inauguration est gratuit**, mais les attractions, les achats et les consommations peuvent être payants. Aucun tarif 2026 suffisamment vérifié ne permet ici de chiffrer un tour de grande roue ou une séance de patinage: n'utilisez pas les prix de 2025 pour préparer votre budget.

Pour une sortie économique, profitez des chalets et des lumières, puis ne prévoyez qu'une seule attraction payante si elle est effectivement proposée et convient à l'âge des enfants.

## Train, bus et stationnement: les accès à connaître

Depuis la **gare d’Arras**, vous pouvez rejoindre à pied les places du centre, notamment la **Grand’Place, 62000 Arras**.

Artis annonce des déviations **du 27 novembre au 27 décembre 2026**. Les lignes **9 et 10** ne desserviront notamment pas les arrêts Grand’Place, Cathédrale et Saint-Michel; des arrêts de report sont prévus, notamment à la Gare et à Gambetta. Sur la **Citadine 1**, les arrêts Les Places, Mairie d’Arras et Saint-Géry seront également perturbés. Consultez les [informations trafic Artis](https://plan.bus-artis.fr/fr/traffic-infos) avant votre départ.

Les [navettes Ma Citadine](https://www.bus-artis.fr/bus/ma-citadine/) sont normalement **gratuites et accessibles aux poussettes**. Leur service habituel est annoncé **du lundi au samedi, de 7 h à 20 h, hors jours fériés**. Ne supposez pas que ces horaires s’appliqueront à d’éventuelles navettes spéciales de Noël: le dispositif 2026 reste à vérifier. En particulier, l'inauguration se prolonge au-delà des horaires habituels de ces navettes.

En voiture, contrôlez les accès aux parkings et les restrictions de circulation avant de rejoindre le centre, surtout le week-end et le soir de l'inauguration.

## Poussette, bébé et météo

La visite se déroule dehors, sur plusieurs places et rues pavées. Une poussette peut aider avec un petit, mais les passages fréquentés ralentissent la circulation.

Pour le change et les repas de bébé, prévoyez votre nécessaire: **la présence d’une table à langer, d’un micro-ondes et de toilettes accessibles sur le parcours n’est pas confirmée** dans les informations 2026 consultées.

En cas de pluie, notre [guide de Cité Nature à Arras en famille](https://www.fam-space.fr/articles/sorties/cite-nature-a-arras-en-famille-quelles-expositions-choisir-cet-automne/) présente une sortie intérieure possible. Vérifiez ses jours et horaires d’ouverture avant de vous y rendre.

## Passer une nuit à Arras

Pour prolonger la visite, le [Mercure Arras Centre Gare sur Booking.com](https://www.booking.com/hotel/fr/mercure-atria-arras-centre.fr.html), face à la gare, dispose de **chambres familiales**. Des **lits bébé gratuits** sont proposés sur demande, sous réserve de disponibilité et selon la chambre retenue. Indiquez l’âge des enfants pour vérifier la configuration, le prix total et les conditions d’annulation. Aucune disponibilité n’est garantie pour les dates de Noël.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/index.md

---
title: "Ville de Noël d’Arras 2026 en famille: horaires, attractions et budget"
subtitle: Grande roue, patinoire, transports et conseils pour une visite avec les enfants
summary: "Du 27 novembre au 27 décembre 2026, préparez une visite de la Ville de Noël d’Arras en famille: horaires, attractions, dépenses à prévoir et accès au centre-ville."
category: evenements
location:
  city: Arras
  department: Pas-de-Calais
  region: Hauts-de-France
image:
  src: "/images/articles/2026/10/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires.webp"
  alt: "Chalets du marché de Noël sur la Grand-Place d'Arras photographiés en décembre 2017"
sources:
  - title: Ville d’Arras - Ville de Noël 2026
    url: https://www.arras.fr/ville-de-noel
  - title: Arras Pays d’Artois Tourisme - Dates et horaires 2026
    url: https://www.arraspaysdartois.com/agenda/ville-de-noel/
  - title: Ville d’Arras - Lieux emblématiques
    url: https://arras.fr/page/lieux-emblematiques
  - title: Artis - Déviations du réseau pendant la Ville de Noël 2026
    url: https://plan.bus-artis.fr/fr/traffic-infos
  - title: Artis - Navettes gratuites Ma Citadine
    url: https://www.bus-artis.fr/bus/ma-citadine/
eventEndsAt: 2026-12-27T21:00:00+01:00
reviewAt: 2026-11-24
topic:
  key: evenements|arras|ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires|2026
  keywords:
    - Ville de Noël Arras 2026
    - marché de Noël Arras en famille
    - grande roue patinoire Arras Noël
slug: ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires
status: published
publishedAt: 2026-10-29T20:30:32.907Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Arras
---
<!-- article-image-credit -->
*Photo: [Marc Ryckaert](https://commons.wikimedia.org/wiki/File:Arras_March%C3%A9_de_No%C3%ABl_R01.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

La **Ville de Noël d’Arras se déroule du 27 novembre au 27 décembre 2026**, sur la Grand’Place et dans le centre historique. La promenade parmi les chalets et les illuminations ne nécessite pas de billet d’entrée. En famille, les principales dépenses viennent des attractions éventuelles et des pauses gourmandes.

## Dates et horaires de la Ville de Noël 2026

L’office de tourisme annonce les horaires suivants:

- **Du dimanche au jeudi: 12 h à 21 h.**
- **Vendredi et samedi: 12 h à 22 h 30.**
- **Jeudi 24 décembre: 12 h à 17 h.**
- **Vendredi 25 décembre: fermé.**

Avec de jeunes enfants, une visite d’une à deux heures en début d’après-midi permet de parcourir quelques chalets sans attendre la soirée. Pour profiter des illuminations, arrivez plutôt en fin d’après-midi et adaptez la durée au rythme des enfants.

## Grande roue, patinoire et Père Noël

<!-- article-image-body:01 -->

![Grande roue et manège sur la Grand-Place d'Arras pendant le marché de Noël 2025](/images/articles/2026/10/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires-body-01.webp)

*Photo: [Anthospace](https://commons.wikimedia.org/wiki/File:Arras,_Christmas_city_2025-Carousel,_Ferris_wheel_and_Lumi%C3%A8re_the_candelabra-_IDNSL.jpg) - [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

La Ville d’Arras présente parmi ses lieux emblématiques **la grande roue, la patinoire, le petit train touristique au départ de la gare et la maison du Père Noël, place d’Ipswich**. Le beffroi illuminé, le sapin et les chalets composent aussi une promenade à part entière.

Cette présentation générale **ne confirme pas encore les horaires, les tarifs, les conditions d’âge ni les dates de fonctionnement de chaque attraction pour 2026**. Avant de prévoir une séance de patinage ou une rencontre avec le Père Noël, vérifiez le programme actualisé de la Ville d’Arras, indiqué dans les Sources. Pour la patinoire, renseignez-vous notamment sur l’âge admis, l’accompagnement et les équipements disponibles.

## Quel budget prévoir avec les enfants ?

<!-- article-image-body:02 -->

![Patinoire temporaire installée sur la Grand-Place d'Arras pour Noël 2025](/images/articles/2026/10/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires-body-02.webp)

*Photo: [Anthospace](https://commons.wikimedia.org/wiki/File:Arras,_city_of_Christmas_2025-_The_ice_rink_built_for_the_occasion-_IETF.jpg) - [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

**L’accès au marché est libre**, mais les attractions, les achats et les consommations peuvent être payants. Aucun tarif 2026 suffisamment vérifié n’est disponible ici pour chiffrer un tour de grande roue ou une séance de patinage.

Si vous souhaitez limiter les dépenses, privilégiez la balade gratuite et choisissez à l’avance l’activité payante qui intéresse vraiment les enfants.

## Train, bus et stationnement: les accès à connaître

Depuis la **gare d’Arras**, vous pouvez rejoindre à pied les places du centre, notamment la **Grand’Place, 62000 Arras**.

Artis annonce des déviations **du 27 novembre au 27 décembre 2026**. Les lignes **9 et 10** ne desserviront notamment pas les arrêts Grand’Place, Cathédrale et Saint-Michel; des arrêts de report sont prévus, notamment à la Gare et à Gambetta. Sur la **Citadine 1**, les arrêts Les Places, Mairie d’Arras et Saint-Géry seront également perturbés. Consultez les [informations trafic Artis](https://plan.bus-artis.fr/fr/traffic-infos) avant votre départ.

Les [navettes Ma Citadine](https://www.bus-artis.fr/bus/ma-citadine/) sont normalement **gratuites et accessibles aux poussettes**. Leur service habituel est annoncé **du lundi au samedi, de 7 h à 20 h, hors jours fériés**. Ne supposez pas que ces horaires s’appliqueront à d’éventuelles navettes spéciales de Noël: le dispositif 2026 reste à vérifier.

En voiture, contrôlez les accès aux parkings et les restrictions de circulation avant de rejoindre le centre, surtout le week-end.

## Poussette, bébé et météo

La visite se déroule dehors, sur plusieurs places et rues pavées. Une poussette peut aider avec un petit, mais les passages fréquentés ralentissent la circulation.

Pour le change et les repas de bébé, prévoyez votre nécessaire: **la présence d’une table à langer, d’un micro-ondes et de toilettes accessibles sur le parcours n’est pas confirmée** dans les informations 2026 consultées.

En cas de pluie, notre [guide de Cité Nature à Arras en famille](https://www.fam-space.fr/articles/sorties/cite-nature-a-arras-en-famille-quelles-expositions-choisir-cet-automne/) présente une sortie intérieure possible. Vérifiez ses jours et horaires d’ouverture avant de vous y rendre.

## Passer une nuit à Arras

Pour prolonger la visite, le [Mercure Arras Centre Gare sur Booking.com](https://www.booking.com/hotel/fr/mercure-atria-arras-centre.fr.html), face à la gare, dispose de **chambres familiales**. Des **lits bébé gratuits** sont proposés sur demande, sous réserve de disponibilité et selon la chambre retenue. Indiquez l’âge des enfants pour vérifier la configuration, le prix total et les conditions d’annulation. Aucune disponibilité n’est garantie pour les dates de Noël.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | Marchés de Noël de Tours 2026 en famille: horaires, animations et budget | evenements | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/ | Marché de Noël de Lille 2026 en famille: village, Grande Roue et infos pratiques | evenements | Lille, Nord, Hauts-de-France
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | Noël 2026 à Toulon en famille: marché, patinoire et horaires | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | Noël à Fontevraud 2026: patinoire, marché, dates et tarifs en famille | evenements | Fontevraud-l'Abbaye, Maine-et-Loire, Pays de la Loire
- /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | Ville de Noël d’Arras 2026 en famille: horaires, attractions et budget | evenements | Arras, Pas-de-Calais, Hauts-de-France
- /articles/sorties/cite-nature-a-arras-en-famille-quelles-expositions-choisir-cet-automne/ | Cité Nature à Arras en famille: quelles expositions choisir cet automne? | sorties | Arras, Pas-de-Calais, Hauts-de-France
- /articles/activites/musee-de-la-ceramique-de-desvres-en-famille-visite-ateliers-et-tarifs/ | Musée de la Céramique de Desvres en famille: visite, ateliers et tarifs | activites | Desvres, Pas-de-Calais, Hauts-de-France
- /articles/evenements/cerfs-volants-de-berck-2027-organiser-sa-visite-en-famille/ | Cerfs-volants de Berck 2027: organiser sa visite en famille | evenements | Berck-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/evenements/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/ | Festival de la Sainte-Barbe 2026 à Lens-Liévin: programme en famille du 4 au 6 décembre | evenements | Lens, Pas-de-Calais, Hauts-de-France
- /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | Toussaint 2026 à Nausicaá: ateliers en journée et nocturne d’Halloween | evenements | Boulogne-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/voyages/maison-du-marais-pres-de-saint-omer-bateau-et-expositions-en-famille/ | Maison du Marais près de Saint-Omer: bateau et expositions en famille | voyages | Saint-Martin-lez-Tatinghem, Pas-de-Calais, Hauts-de-France
- /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | Halloween 2026 à la Tour de l'Horloge de Guînes: visites, contes et nocturne | evenements | Guînes, Pas-de-Calais, Hauts-de-France
- /articles/sorties/toussaint-2026-au-louvre-lens-quelle-activite-choisir-selon-l-age/ | Toussaint 2026 au Louvre-Lens: quelle activité choisir selon l'âge? | sorties | Lens, Pas-de-Calais, Hauts-de-France
- /articles/sorties/parc-bagatelle-en-famille-quelles-attractions-selon-la-taille-des-enfants/ | Parc Bagatelle en famille: quelles attractions selon la taille des enfants? | sorties | Merlimont, Pas-de-Calais, Hauts-de-France
- /articles/evenements/festival-contes-et-rencontres-2027-en-lozere-quels-spectacles-voir-en-famille/ | Festival Contes et Rencontres 2027 en Lozère: quels spectacles voir en famille ? | evenements | Lozère, Occitanie
- /articles/evenements/lumieres-d-afrique-2026-2027-a-sigean-les-lanternes-en-famille/ | Lumières d’Afrique 2026-2027 à Sigean: les lanternes en famille | evenements | Sigean, Aude, Occitanie
- /articles/evenements/natur-armor-2027-a-paimpol-preparer-sa-visite-en-famille/ | Natur’Armor 2027 à Paimpol: préparer sa visite en famille | evenements | Paimpol, Côtes-d'Armor, Bretagne
- /articles/evenements/noel-a-brive-2026-en-famille-animations-dates-et-parcours/ | Noël à Brive 2026 en famille: animations, dates et parcours | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine

### Historique Radar lié

- opportunity | /articles/evenements/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/ | 2026-10-27T04:28:31.006Z
- refresh | /articles/evenements/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/ | 2026-11-16T19:27:53.506Z
- opportunity | /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | 2026-10-12T10:40:26.563Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- refresh | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-11-17T19:34:24.194Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z
- opportunity | /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | 2026-10-28T21:29:26.054Z
- refresh | /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | 2026-11-22T03:33:27.882Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
