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
title: "Marchés de Noël de Tours 2026 en famille: horaires, animations et budget"
subtitle: "Deux marchés municipaux et le Village Gourmand: choisir le bon jour avec les enfants"
summary: "Du 27 novembre au 27 décembre 2026, Tours accueille deux marchés municipaux, tandis que le Village Gourmand se prolonge jusqu'au 3 janvier 2027. Horaires, animations familiales, grande roue et patinoire roller: les repères pour organiser la visite."
category: evenements
location:
  city: Tours
  department: Indre-et-Loire
  region: Centre-Val de Loire
image:
  src: /images/articles/2026/10/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand.webp
  alt: Vue de la place de la Résistance à Tours hors période du marché de Noël
sources:
  - title: Ville de Tours - Marchés de Noël 2026, dates et emplacements
    url: https://formulaires.services.tours.fr/animations-commerciales/candidature-au-marche-de-noel-tours/
  - title: Office de tourisme de Tours - Noël à Tours, horaires des marchés
    url: https://www.tours-tourisme.fr/agenda/noel-a-tours-marche-de-noel/
  - title: Village Gourmand de Tours - Programme, horaires et tarifs 2026-2027
    url: https://levillagegourmand.fr/
  - title: Fil Bleu - Tramway ligne A et informations trafic
    url: https://www.filbleu.fr/horaires-et-trajets/toutes-les-lignes/ligne-a
eventEndsAt: 2027-01-03
reviewAt: 2026-11-26
topic:
  key: evenements|tours|marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand|2026
  keywords:
    - marché de Noël Tours 2026
    - Village Gourmand Tours 2026
    - grande roue Tours Noël 2026
    - patinoire roller Tours
    - Noël Tours en famille
slug: marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand
status: published
publishedAt: 2026-10-28T21:29:25.946Z
updatedAt: 2026-11-22T03:33:27.799Z
readingTime: 5
affiliate:
  enabled: true
  type: travel
  destination: Tours
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/index.md
  targetSha: d79d6e54db3e1ff4b4c7694d5ea2cc7d9ab7a123
  targetUrl: /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/
  decision: Choisir une date et un créneau réellement ouverts pour les marchés municipaux et le Village Gourmand, notamment les 24 et 25 décembre, sans confondre leurs horaires.
  affiliationPotential: Conserver l'hébergement Booking.com existant pour les familles en séjour; aucune nouvelle offre payante nécessaire.
  gsc:
    retrievedAt: 2026-11-22T01:30:56+01:00
    dataThrough: 2026-11-19
    signal: needs_query_check
    basis: "Visibilité récente : 25 impressions sur trois jours, puis 7 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-11-09
    peakEnd: 2026-11-11
    recentStart: 2026-11-17
    recentEnd: 2026-11-19
    peakImpressions: 25
    recentImpressions: 7
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - marché de Noël Tours 2026
      - Village Gourmand Tours 2026
      - grande roue Tours Noël 2026
      - patinoire roller Tours
      - Noël Tours en famille
---

<!-- article-image-credit -->
*Photo: [ktanaka](https://commons.wikimedia.org/wiki/File:Place_de_la_resistance,_tours_-_panoramio.jpg) - [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Tours, trois lieux permettent de profiter de Noël en famille, mais ils n'ouvrent pas tous aux mêmes dates. Les marchés municipaux du **boulevard Heurteloup** et de la **place de la Résistance** sont annoncés du **27 novembre au 27 décembre 2026**. Le **Village Gourmand**, place Anatole-France, accueille les visiteurs du **20 novembre 2026 au 3 janvier 2027**, avec restauration, grande roue et patinoire à rollers. Pour combiner les trois, choisissez une date entre le 27 novembre et le 27 décembre.

## Quel marché choisir, et à quelle heure ?

Pour découvrir les étals et les idées cadeaux, privilégiez les deux marchés municipaux. L'[office de tourisme de Tours](https://www.tours-tourisme.fr/agenda/noel-a-tours-marche-de-noel/) annonce une ouverture **de 11 h à 20 h du dimanche au jeudi**, et **de 11 h à 21 h les vendredis et samedis**. Attention: sa fiche mentionne un début au 20 novembre pour l'ensemble du marché de Noël, alors que la [Ville de Tours](https://formulaires.services.tours.fr/animations-commerciales/candidature-au-marche-de-noel-tours/) fixe au **27 novembre** le début des marchés municipaux boulevard Heurteloup et place de la Résistance. Retenez donc le 27 novembre pour ces deux emplacements.

**Pour les 24 et 25 décembre, ne vous fiez pas aux horaires habituels des chalets municipaux.** Le cahier des charges 2026 de la Ville, [accessible depuis son formulaire de candidature](https://formulaires.services.tours.fr/animations-commerciales/candidature-au-marche-de-noel-tours/), est repris par plusieurs agendas locaux avec une **fermeture à 18 h le jeudi 24 décembre** et une **ouverture de 15 h à 20 h le vendredi 25 décembre, facultative pour les exposants**. La fiche publique de l'office de tourisme ne détaille pas ces exceptions: ces créneaux restent donc à **reconfirmer auprès de la Ville ou des exposants** avant un déplacement spécialement prévu pour Noël. Le 25, certains chalets peuvent rester fermés même pendant le créneau annoncé.

Pour manger sur place ou profiter des attractions, choisissez le **Village Gourmand**, place Anatole-France, au bout de la rue Nationale. Il rassemble une trentaine de chalets de restauration, une grande roue et une **patinoire roller, sans glace**. L'accès au village est **gratuit**, mais les repas et attractions sont payants.

Du **20 au 26 novembre**, seul le Village Gourmand est annoncé ouvert parmi ces trois lieux. Du **28 décembre au 3 janvier**, il reste également le seul à poursuivre la saison.

## Animations à ne pas manquer avec les enfants

Le [programme de l'organisateur](https://levillagegourmand.fr/) permet de choisir une date en fonction des animations plutôt que de compter sur la présence quotidienne du Père Noël:

- **Dimanche 22 novembre:** musique et maquillage pour enfants.
- **Dimanche 29 novembre:** maquillage dès **13 h** au Village Gourmand, puis nouvelle séance dès **16 h** à la patinoire; musique également au programme.
- **Mercredi 2 décembre à 15 h 30:** rencontre annoncée avec le **Père Noël et sa lutine**.

Ces rendez-vous sont datés et peuvent évoluer: consultez le calendrier de l'organisateur le jour de votre visite.

## Grande roue et patinoire roller: combien prévoir ?

<!-- article-image-body:01 -->

![Vue nocturne sur Tours depuis une grande roue en décembre 2017](/images/articles/2026/10/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand-body-01.webp)

*Photo: [GrandCelinien](https://commons.wikimedia.org/wiki/File:Tours_-_Vue_grande_roue.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le tarif normal annoncé est de **5 € par personne et par attraction**. Pour quatre personnes, prévoyez **20 € pour la grande roue**, ou **40 € si les quatre font aussi la patinoire**, hors repas et transports.

Un tarif réduit de **4 €** est annoncé **le mercredi pour les moins de 12 ans** et **les jeudis et vendredis pour les étudiants**, dans les deux cas **hors vacances scolaires**. Le pass saisonnier « Gliss » pour la patinoire coûte **49 €**: il s'adresse surtout aux visiteurs réguliers.

L'âge minimum, les protections fournies et les conditions d'accompagnement des petits ne sont pas détaillés sur la page générale de l'organisateur. Demandez confirmation avant de promettre la patinoire à un jeune enfant. Une promenade entre les chalets reste possible sans acheter de billet.

## Horaires du Village Gourmand et des attractions

Le **Village Gourmand** ouvre normalement **de 12 h à 22 h**, jusqu'à **23 h les vendredis et samedis**. Les attractions ont leurs propres créneaux:

- **Lundi à jeudi:** 13 h-22 h.
- **Vendredi:** 13 h-23 h.
- **Samedi, dimanche et vacances scolaires:** 11 h-23 h.

Deux journées ont des horaires particuliers:

- **25 décembre:** village de **15 h à 21 h**, attractions de **15 h à 23 h**.
- **1er janvier:** village de **15 h à 22 h**, attractions de **15 h à 23 h**.

Ces horaires sont ceux du **Village Gourmand et de ses attractions**, et non des marchés municipaux. Vérifiez les éventuels ajustements sur le [site de l'organisateur](https://levillagegourmand.fr/).

## Tram, poussette et repas des plus petits

<!-- article-image-body:02 -->

![Rame du tramway de Tours sur la place Anatole-France en mai 2023](/images/articles/2026/10/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand-body-02.webp)

*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Rame_Tramway_Tours_Place_Anatole_France_-_Tours_(FR37)_-_2023-05-19_-_2.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Pour le Village Gourmand, prenez le **tram A jusqu'à Porte de Loire**. Depuis la gare de Tours, l'organisateur indique la direction **Vaucanson**. Les parkings **Anatole-France** et **Nationale** sont aussi signalés, sans garantie de disponibilité. Vérifiez les [horaires et perturbations de la ligne A sur Fil Bleu](https://www.filbleu.fr/horaires-et-trajets/toutes-les-lignes/ligne-a), surtout pour rentrer le soir.

La place Anatole-France se situe au bout de la rue Nationale. La place de la Résistance et le boulevard Heurteloup constituent deux étapes distinctes. Avec une poussette, prévoyez plus de temps aux heures d'affluence. Les informations disponibles ne confirment ni table à langer, ni micro-ondes en libre accès, ni prêt de poussette: emportez le nécessaire pour changer et nourrir un bébé. Demandez aussi les conditions d'accès à la grande roue avec un bébé ou une poussette avant de faire la queue.

## Prolonger les fêtes à Tours

Pour une famille arrivant en train, le [Nemea Appart Hotel Quai Victor Tours Centre sur Booking.com](https://www.booking.com/hotel/fr/nemea-appart-39-residence-le-quai-victor.html) est une option près de la gare. Certains logements disposent d'une kitchenette avec **micro-ondes**, pratique pour les repas d'un bébé. Vérifiez la **capacité du logement réservé**, les couchages, les conditions pour les enfants et les éventuels frais ou dépôt de garantie: tous les studios ne conviennent pas à quatre personnes.

Pour une excursion différente, notre guide de [Noël 2026 au château royal d'Amboise](/articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/) détaille les visites décorées, les tarifs et les nocturnes sur réservation.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/index.md

---
title: "Marchés de Noël de Tours 2026 en famille: horaires, animations et budget"
subtitle: "Deux marchés municipaux et le Village Gourmand: choisir le bon jour avec les enfants"
summary: "Du 27 novembre au 27 décembre 2026, Tours accueille deux marchés municipaux, tandis que le Village Gourmand se prolonge jusqu'au 3 janvier 2027. Horaires, animations familiales, grande roue et patinoire roller: les repères pour organiser la visite."
category: evenements
location:
  city: Tours
  department: Indre-et-Loire
  region: Centre-Val de Loire
image:
  src: /images/articles/2026/10/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand.webp
  alt: Vue de la place de la Résistance à Tours hors période du marché de Noël
sources:
  - title: Ville de Tours - Marchés de Noël 2026, dates et emplacements
    url: https://formulaires.services.tours.fr/animations-commerciales/candidature-au-marche-de-noel-tours/
  - title: Office de tourisme de Tours - Noël à Tours, horaires des marchés
    url: https://www.tours-tourisme.fr/agenda/noel-a-tours-marche-de-noel/
  - title: Village Gourmand de Tours - Programme, horaires et tarifs 2026-2027
    url: https://levillagegourmand.fr/
  - title: Fil Bleu - Tramway ligne A et informations trafic
    url: https://www.filbleu.fr/horaires-et-trajets/toutes-les-lignes/ligne-a
eventEndsAt: 2027-01-03
reviewAt: 2026-11-26
topic:
  key: evenements|tours|marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand|2026
  keywords:
    - marché de Noël Tours 2026
    - Village Gourmand Tours 2026
    - grande roue Tours Noël 2026
    - patinoire roller Tours
    - Noël Tours en famille
slug: marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand
status: published
publishedAt: 2026-10-28T21:29:25.946Z
updatedAt: 2026-11-22T03:33:27.799Z
readingTime: 5
affiliate:
  enabled: true
  type: travel
  destination: Tours
---

<!-- article-image-credit -->
*Photo: [ktanaka](https://commons.wikimedia.org/wiki/File:Place_de_la_resistance,_tours_-_panoramio.jpg) - [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Tours, trois lieux permettent de profiter de Noël en famille, mais ils n'ouvrent pas tous aux mêmes dates. Les marchés municipaux du **boulevard Heurteloup** et de la **place de la Résistance** sont annoncés du **27 novembre au 27 décembre 2026**. Le **Village Gourmand**, place Anatole-France, accueille les visiteurs du **20 novembre 2026 au 3 janvier 2027**, avec restauration, grande roue et patinoire à rollers. Pour combiner les trois, choisissez une date entre le 27 novembre et le 27 décembre.

## Quel marché choisir, et à quelle heure ?

Pour découvrir les étals et les idées cadeaux, privilégiez les deux marchés municipaux. L'[office de tourisme de Tours](https://www.tours-tourisme.fr/agenda/noel-a-tours-marche-de-noel/) annonce une ouverture **de 11 h à 20 h du dimanche au jeudi**, et **de 11 h à 21 h les vendredis et samedis**. Attention: sa fiche mentionne un début au 20 novembre pour l'ensemble du marché de Noël, alors que la [Ville de Tours](https://formulaires.services.tours.fr/animations-commerciales/candidature-au-marche-de-noel-tours/) fixe au **27 novembre** le début des marchés municipaux boulevard Heurteloup et place de la Résistance. Retenez donc le 27 novembre pour ces deux emplacements et vérifiez les éventuelles exceptions avant de partir.

Pour manger sur place ou profiter des attractions, choisissez le **Village Gourmand**, place Anatole-France, au bout de la rue Nationale. Il rassemble une trentaine de chalets de restauration, une grande roue et une **patinoire roller, sans glace**. L'accès au village est **gratuit**, mais les repas et attractions sont payants.

Du **20 au 26 novembre**, seul le Village Gourmand est annoncé ouvert parmi ces trois lieux. Du **28 décembre au 3 janvier**, il reste également le seul à poursuivre la saison.

## Animations à ne pas manquer avec les enfants

Le [programme de l'organisateur](https://levillagegourmand.fr/) permet de choisir une date en fonction des animations plutôt que de compter sur la présence quotidienne du Père Noël:

- **Dimanche 22 novembre:** musique et maquillage pour enfants.
- **Dimanche 29 novembre:** maquillage dès **13 h** au Village Gourmand, puis nouvelle séance dès **16 h** à la patinoire; musique également au programme.
- **Mercredi 2 décembre à 15 h 30:** rencontre annoncée avec le **Père Noël et sa lutine**.

Ces rendez-vous sont datés et peuvent évoluer: consultez le calendrier de l'organisateur le jour de votre visite.

## Grande roue et patinoire roller: combien prévoir ?

<!-- article-image-body:01 -->

![Vue nocturne sur Tours depuis une grande roue en décembre 2017](/images/articles/2026/10/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand-body-01.webp)

*Photo: [GrandCelinien](https://commons.wikimedia.org/wiki/File:Tours_-_Vue_grande_roue.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le tarif normal annoncé est de **5 € par personne et par attraction**. Pour quatre personnes, prévoyez **20 € pour la grande roue**, ou **40 € si les quatre font aussi la patinoire**, hors repas et transports.

Un tarif réduit de **4 €** est annoncé **le mercredi pour les moins de 12 ans** et **les jeudis et vendredis pour les étudiants**, dans les deux cas **hors vacances scolaires**. Le pass saisonnier « Gliss » pour la patinoire coûte **49 €**: il s'adresse surtout aux visiteurs réguliers.

L'âge minimum, les protections fournies et les conditions d'accompagnement des petits ne sont pas détaillés sur la page générale de l'organisateur. Demandez confirmation avant de promettre la patinoire à un jeune enfant. Une promenade entre les chalets reste possible sans acheter de billet.

## Horaires du Village Gourmand et des attractions

Le **Village Gourmand** ouvre normalement **de 12 h à 22 h**, jusqu'à **23 h les vendredis et samedis**. Les attractions ont leurs propres créneaux:

- **Lundi à jeudi:** 13 h-22 h.
- **Vendredi:** 13 h-23 h.
- **Samedi, dimanche et vacances scolaires:** 11 h-23 h.

Deux journées ont des horaires particuliers:

- **25 décembre:** village de **15 h à 21 h**, attractions de **15 h à 23 h**.
- **1er janvier:** village de **15 h à 22 h**, attractions de **15 h à 23 h**.

Ces horaires sont ceux du **Village Gourmand et de ses attractions**, et non des marchés municipaux. Vérifiez les éventuels ajustements sur le [site de l'organisateur](https://levillagegourmand.fr/).

## Tram, poussette et repas des plus petits

<!-- article-image-body:02 -->

![Rame du tramway de Tours sur la place Anatole-France en mai 2023](/images/articles/2026/10/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand-body-02.webp)

*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Rame_Tramway_Tours_Place_Anatole_France_-_Tours_(FR37)_-_2023-05-19_-_2.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Pour le Village Gourmand, prenez le **tram A jusqu'à Porte de Loire**. Depuis la gare de Tours, l'organisateur indique la direction **Vaucanson**. Les parkings **Anatole-France** et **Nationale** sont aussi signalés, sans garantie de disponibilité. Vérifiez les [horaires et perturbations de la ligne A sur Fil Bleu](https://www.filbleu.fr/horaires-et-trajets/toutes-les-lignes/ligne-a), surtout pour rentrer le soir.

La place Anatole-France se situe au bout de la rue Nationale. La place de la Résistance et le boulevard Heurteloup constituent deux étapes distinctes. Avec une poussette, prévoyez plus de temps aux heures d'affluence. Les informations disponibles ne confirment ni table à langer, ni micro-ondes en libre accès, ni prêt de poussette: emportez le nécessaire pour changer et nourrir un bébé. Demandez aussi les conditions d'accès à la grande roue avec un bébé ou une poussette avant de faire la queue.

## Prolonger les fêtes à Tours

Pour une famille arrivant en train, le [Nemea Appart Hotel Quai Victor Tours Centre sur Booking.com](https://www.booking.com/hotel/fr/nemea-appart-39-residence-le-quai-victor.html) est une option près de la gare. Certains logements disposent d'une kitchenette avec **micro-ondes**, pratique pour les repas d'un bébé. Vérifiez la **capacité du logement réservé**, les couchages, les conditions pour les enfants et les éventuels frais ou dépôt de garantie: tous les studios ne conviennent pas à quatre personnes.

Pour une excursion différente, notre guide de [Noël 2026 au château royal d'Amboise](/articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/) détaille les visites décorées, les tarifs et les nocturnes sur réservation.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | Ville de Noël d’Arras 2026 en famille: horaires, attractions et budget | evenements | Arras, Pas-de-Calais, Hauts-de-France
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/ | Marché de Noël de Lille 2026 en famille: village, Grande Roue et infos pratiques | evenements | Lille, Nord, Hauts-de-France
- /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | Noël 2026 à Toulon en famille: marché, patinoire et horaires | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/village-du-pere-noel-a-montbazon-2026-dates-activites-et-budget-en-famille/ | Village du Père Noël à Montbazon 2026: dates, activités et budget en famille | evenements | Montbazon, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | Noël 2026 à Paris La Défense en famille: marché, animations et patinoire | evenements | Puteaux, Hauts-de-Seine, Île-de-France
- /articles/cuisine/halles-de-tours-en-famille-un-panier-d-automne-deux-repas-simples/ | Halles de Tours en famille: un panier d’automne, deux repas simples | cuisine | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | Marchés de Noël de Tours 2026 en famille: horaires, animations et budget | evenements | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/vie-pratique/emprunter-des-jeux-a-tours-mirabeau-ou-la-maison-des-jeux/ | Emprunter des jeux à Tours: Mirabeau ou la Maison des Jeux? | vie-pratique | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/parentalite/laep-en-indre-et-loire-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP en Indre-et-Loire: où aller avec un enfant de moins de 6 ans | parentalite | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/vie-pratique/transport-scolaire-remi-en-indre-et-loire-que-faire-apres-la-date-limite-2026/ | Transport scolaire Rémi en Indre-et-Loire: que faire après la date limite 2026 | vie-pratique | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/vie-pratique/montlouis-sur-loire-emprunter-jeux-liseuses-et-objets-a-la-mediatheque/ | Montlouis-sur-Loire: emprunter jeux, liseuses et objets à la médiathèque | vie-pratique | Montlouis-sur-Loire, Indre-et-Loire, Centre-Val de Loire
- /articles/parentalite/aide-a-domicile-en-indre-et-loire-quel-soutien-pour-les-parents/ | Aide à domicile en Indre-et-Loire: quel soutien pour les parents ? | parentalite | Indre-et-Loire, Centre-Val de Loire
- /articles/activites/aquarium-de-touraine-en-famille-que-voir-avec-les-enfants/ | Aquarium de Touraine en famille: que voir avec les enfants ? | activites | Lussault-sur-Loire, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-2026-a-villandry-spectacles-et-ateliers-a-choisir-selon-l-age/ | Noël 2026 à Villandry: décors, spectacle d'ombres et ateliers en famille | evenements | Villandry, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | Noël à Chenonceau 2026: décors, nocturnes et tarifs en famille | evenements | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/festival-contes-et-rencontres-2027-en-lozere-quels-spectacles-voir-en-famille/ | Festival Contes et Rencontres 2027 en Lozère: quels spectacles voir en famille ? | evenements | Lozère, Occitanie
- /articles/evenements/lumieres-d-afrique-2026-2027-a-sigean-les-lanternes-en-famille/ | Lumières d’Afrique 2026-2027 à Sigean: les lanternes en famille | evenements | Sigean, Aude, Occitanie
- /articles/evenements/natur-armor-2027-a-paimpol-preparer-sa-visite-en-famille/ | Natur’Armor 2027 à Paimpol: préparer sa visite en famille | evenements | Paimpol, Côtes-d'Armor, Bretagne
- /articles/evenements/noel-a-brive-2026-en-famille-animations-dates-et-parcours/ | Noël à Brive 2026 en famille: animations, dates et parcours | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine

### Historique Radar lié

- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z
- opportunity | /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | 2026-10-28T21:29:26.054Z
- refresh | /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | 2026-11-22T03:33:27.882Z
- opportunity | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-10-24T12:31:27.784Z
- refresh | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-11-13T22:32:33.388Z
- opportunity | /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | 2026-11-01T01:35:08.448Z
- opportunity | /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | 2026-10-31T10:28:17.432Z
- refresh | /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | 2026-11-16T04:35:04.037Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
