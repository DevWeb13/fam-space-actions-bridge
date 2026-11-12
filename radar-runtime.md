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
title: Visiter la Cité du Volcan en famille à La Réunion
subtitle: Parcours, exposition Cavernes Volcan, cinéma et tarifs pour préparer la visite à Bourg-Murat
summary: Que comprend le billet de la Cité du Volcan? Exposition Cavernes Volcan, ludothèque, cinéma en supplément, réductions et pass musées pour les familles.
slug: visiter-la-cite-du-volcan-en-famille-a-la-reunion
status: published
publishedAt: 2026-10-23T23:45:04+02:00
updatedAt: null
category: voyages
readingTime: 5
publicationOrigin: region
location:
  city: Le Tampon
  department: La Réunion
  region: La Réunion
topic:
  key: voyages|le-tampon|visiter-la-cite-du-volcan-en-famille-a-la-reunion|2026
  keywords:
    - Cité du Volcan en famille
    - La Réunion avec des enfants
    - Bourg-Murat
image:
  src: /images/articles/2026/10/visiter-la-cite-du-volcan-en-famille-a-la-reunion.webp
  alt: Structure en verre et acier devant la façade de la Cité du Volcan à Bourg-Murat, La Réunion, en mars 2026
sources:
  - title: Cité du Volcan, présentation officielle
    url: https://museesreunion.fr/la-cite-du-volcan/
  - title: Cité du Volcan, Comité Réunionnais du Tourisme
    url: https://www.reunion.fr/offres/cite-du-volcan-la-la-plaine-des-cafres-le-tampon-fr-570267/
  - title: Horaires des musées régionaux
    url: https://museesreunion.fr/horaires/
  - title: Tarifs des musées régionaux
    url: https://museesreunion.fr/tarifs/
  - title: Exposition Cavernes Volcan
    url: https://museesreunion.fr/la-cite-du-volcan/cavernes-volcan/
  - title: Pass musées régionaux et billetterie
    url: https://museesreunion.fr/le-catalogue-des-spectacles/
  - title: Ludothèque de la Cité du Volcan
    url: https://museesreunion.fr/la-cite-du-volcan/la-ludotheque-de-la-cite-du-volcan/
  - title: Cinéma 3D/4D de la Cité du Volcan
    url: https://museesreunion.fr/cinema-4d/
  - title: Route du Volcan, Comité Réunionnais du Tourisme
    url: https://www.reunion.fr/organisez/vos-activites/le-tour-de-l-ile-de-la-reunion/route-du-volcan/
  - title: Hôtel L’Ecrin, hébergements et situation
    url: https://www.hotel-ecrin.re/
affiliate:
  enabled: true
  type: travel
  destination: Le Tampon
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/voyages/(2026)/(10)/visiter-la-cite-du-volcan-en-famille-a-la-reunion/index.md
  targetSha: a134c7e53625b25e15bee39debfeb29c5826ecfe
  targetUrl: /articles/voyages/visiter-la-cite-du-volcan-en-famille-a-la-reunion/
  decision: Choisir la visite et le billet adaptés aux âges, aux réductions disponibles et à un éventuel circuit de plusieurs musées réunionnais.
  affiliationPotential: Conserver l'hébergement Booking.com à Bourg-Murat déjà présent; ne pas ajouter d'offre artificielle.
  gsc:
    retrievedAt: 2026-11-12T03:33:45+01:00
    dataThrough: 2026-11-09
    signal: uncertain
    basis: "Visibilité récente : 22 impressions sur trois jours, puis 2 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-26
    peakEnd: 2026-10-28
    recentStart: 2026-11-07
    recentEnd: 2026-11-09
    peakImpressions: 22
    recentImpressions: 2
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - ferme à visiter
reviewAt: 2027-03-01
---

<!-- article-image-credit -->
*Photo: [Clémenceau Lauret](https://commons.wikimedia.org/wiki/File:La_Cit%C3%A9_du_Volcan.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Bourg-Murat, dans les hauteurs du Tampon, la [Cité du Volcan](https://museesreunion.fr/la-cite-du-volcan/) raconte comment La Réunion s’est construite et comment fonctionnent les volcans. Ce musée de la Plaine des Cafres associe maquettes, dispositifs interactifs et projections. Avec des enfants, comptez environ deux heures pour le parcours, davantage si vous profitez de la ludothèque ou d'une séance de cinéma. L'entrée comprend aussi l'exposition temporaire « Cavernes Volcan »; le cinéma 3D/4D, lui, est payant en supplément.

## Des volcans à hauteur d’enfant

<!-- article-image-body:01 -->

![Échantillon de basalte provenant de la coulée de lave de février 2026 du Piton de la Fournaise, illustration géologique](/images/articles/2026/10/visiter-la-cite-du-volcan-en-famille-a-la-reunion-body-01.webp)

*Photo: [Rémih](https://commons.wikimedia.org/wiki/File:Basalt_sample_February_2026_eruption_@_Piton_de_la_Fournaise_02.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le tunnel de lave multisensoriel et le film panoramique à 270° donnent une entrée très visuelle dans le sujet. Le parcours comprend aussi un espace consacré à l’observatoire volcanologique et une lithothèque, une collection de roches. Ces espaces sont présentés dans le [descriptif du Comité Réunionnais du Tourisme](https://www.reunion.fr/offres/cite-du-volcan-la-la-plaine-des-cafres-le-tampon-fr-570267/).

Pour donner un fil conducteur à la visite, proposez deux questions aux enfants: comment une île peut-elle naître dans l’océan? Que devient une coulée après l’éruption? Les maquettes aident à aborder l’histoire géologique de La Réunion, tandis que le musée explique aussi comment la vie s’installe sur les coulées sous-marines.

Avec les plus jeunes, laissez une roche, une image ou un dispositif guider la découverte. Les ambiances sonores et visuelles font partie du parcours: pour un enfant sensible à ces effets, avancez progressivement.

## Cavernes Volcan: une exposition comprise dans l'entrée

Présentée depuis le 14 septembre 2025, l'[exposition temporaire « Cavernes Volcan »](https://museesreunion.fr/la-cite-du-volcan/cavernes-volcan/) aborde l'histoire des explorations dans les Hauts de La Réunion et les découvertes archéologiques faites dans les cavernes du massif du Piton de la Fournaise. Récits d'expéditions, pierres gravées et objets issus des recherches complètent la visite géologique par une dimension humaine et historique. L'exposition est annoncée pour deux ans et reste présentée sur le site officiel consulté en novembre 2026; vérifiez son maintien avant de partir. **Elle est comprise dans le billet du musée**, sans supplément.

## Une pause à la ludothèque avec les plus petits

Le musée indique une [durée de visite d’environ deux heures](https://museesreunion.fr/horaires/). Avec une fratrie, la ludothèque permet de ménager une pause lorsque les envies divergent.

Elle comprend un coin mousse réservé aux moins de 3 ans, une structure de jeux avec toboggan et un espace de dînette. Des toilettes adaptées aux petits, une table à langer et une chaise haute complètent l’équipement.

**Un parent doit rester avec les enfants à la ludothèque.** À deux adultes, l’un peut y accompagner le plus jeune pendant que l’autre poursuit la visite avec les aînés. Avec un seul adulte, prévoyez une pause commune.

Les [horaires de la ludothèque](https://museesreunion.fr/la-cite-du-volcan/la-ludotheque-de-la-cite-du-volcan/) diffèrent de ceux du musée:

- du mardi au dimanche, de 10 h à 16 h 30.
- le lundi, de 13 h à 16 h 30.

## Cinéma: volcan en 4D ou dinosaures en 3D?

Deux films sont proposés en supplément, distincts du film panoramique du parcours:

- **Ti’Bul et le cristal d’Olivine**, une animation en **4D de 8 minutes**, imagine une exploration sous-marine puis à l’intérieur du Piton de la Fournaise. Elle prolonge le thème volcanique de la visite.
- **Planète préhistorique: Sur la Terre des dinosaures**, un documentaire d’animation en **3D de 20 minutes**, suit des dinosaures du Crétacé. Il répond davantage à une envie de préhistoire et demande de rester assis plus longtemps.

La [page officielle du cinéma](https://museesreunion.fr/cinema-4d/) annonce un supplément de **2 € par personne et par séance**. Elle interdit le 4D aux enfants « non accompagnés » de moins de 5 ans ou mesurant moins de 1,20 m, sans détailler les modalités pour un enfant accompagné.

**Pour un jeune enfant, faites confirmer l’admission avant d’acheter ce supplément**, au **02 62 59 00 26**. Profitez-en pour demander les horaires et réserver la séance auprès du musée. Consultez aussi les restrictions de santé publiées sur la page du cinéma.

## Horaires, tarifs réduits et pass musées

Selon les [horaires officiels du musée](https://museesreunion.fr/horaires/), la Cité du Volcan ouvre:

- le lundi, de 13 h à 17 h.
- du mardi au dimanche, de 9 h 30 à 17 h.

**La billetterie ferme à 16 h.** Une arrivée à cette heure laisse donc seulement une heure dans les salles.

Le musée est fermé les **1er janvier, 1er mai, 1er novembre et 25 décembre**. Les 24 et 31 décembre, il ferme à 13 h 30.

Les [tarifs officiels](https://museesreunion.fr/tarifs/) sont de **9 € au plein tarif**, **6 € au tarif réduit**, notamment pour les enfants de 4 à 12 ans, et gratuits pour les moins de 4 ans dans le cadre d'une visite grand public. Deux adultes au plein tarif et deux enfants de 4 à 12 ans paient ainsi **30 € hors cinéma**.

Le tarif réduit concerne également les étudiants, les personnes à mobilité réduite, les plus de 65 ans, les demandeurs d'emploi, les bénéficiaires du RSA et les groupes de dix personnes ou plus, selon les conditions officielles. Prévoyez un justificatif adapté. Les paiements acceptés comprennent **espèces, carte bancaire, chèques, Pass Loisirs, chèques-vacances et Pass Bien-Être**. **Tout visiteur mineur doit être accompagné d'une personne majeure.**

Si vous prévoyez d'autres musées durant votre séjour, la [billetterie des musées régionaux](https://museesreunion.fr/le-catalogue-des-spectacles/) propose des pass couvrant Kélonia, Stella Matutina, la Cité du Volcan et le MADOI, valables **six mois après l'achat**. Comparez le pass réellement proposé avec vos visites prévues et les réductions auxquelles vous avez droit, sans supposer qu'il est systématiquement plus économique. Pour choisir entre les formules, consultez aussi notre [guide des pass musées à La Réunion en famille](/articles/bons-plans/musees-a-la-reunion-en-famille-quel-pass-choisir-pour-economiser/).

## Venir à Bourg-Murat et prolonger l’étape

<!-- article-image-body:02 -->

![Route du Volcan traversant les paysages de la Plaine des Remparts vers le Piton de la Fournaise](/images/articles/2026/10/visiter-la-cite-du-volcan-en-famille-a-la-reunion-body-02.webp)

*Photo: [Mart.wain](https://commons.wikimedia.org/wiki/File:La_R%C3%A9union_-_Route_du_Volcan.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Le musée se trouve sur la **RN3, à Bourg-Murat**. Depuis Saint-Pierre, l’itinéraire passe par Le Tampon puis la Plaine des Cafres. Depuis Saint-Benoît, il traverse la Plaine des Palmistes. La [route du Volcan](https://www.reunion.fr/organisez/vos-activites/le-tour-de-l-ile-de-la-reunion/route-du-volcan/) commence à proximité de la Cité du Volcan et monte vers les paysages du Piton de la Fournaise.

Si cette route fait partie de votre séjour, une nuit à Bourg-Murat permet de répartir les découvertes: le musée un après-midi, puis les points de vue le lendemain, selon la météo et les conditions d’accès.

Dans le village, l’Hôtel L’Ecrin propose des chambres quadruples et un appartement pour cinq personnes avec kitchenette et coin repas, d’après la présentation de l’établissement. L’appartement peut être pratique pour préparer un repas au rythme des enfants. Pour organiser cette étape, [consultez les logements et les tarifs de l’Hôtel L’Ecrin sur Booking.com](https://www.booking.com/hotel/re/ha-tel-l-ecrin.fr.html), en indiquant vos dates et l’âge des enfants. Vérifiez la capacité de la formule proposée, le prix total et les conditions d’annulation avant de réserver.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/voyages/(2026)/(10)/visiter-la-cite-du-volcan-en-famille-a-la-reunion/index.md

---
title: Visiter la Cité du Volcan en famille à La Réunion
subtitle: Géologie, films et ludothèque pour une découverte au rythme des enfants à Bourg-Murat
summary: Que voir avec des enfants à la Cité du Volcan? Parcours, cinéma, ludothèque, horaires et budget pour préparer une visite en famille à Bourg-Murat.
slug: visiter-la-cite-du-volcan-en-famille-a-la-reunion
status: published
publishedAt: 2026-10-23T23:45:04+02:00
updatedAt: null
category: voyages
readingTime: 4
publicationOrigin: region
location:
  city: Le Tampon
  department: La Réunion
  region: La Réunion
topic:
  key: voyages|le-tampon|visiter-la-cite-du-volcan-en-famille-a-la-reunion|2026
  keywords:
    - Cité du Volcan en famille
    - La Réunion avec des enfants
    - Bourg-Murat
image:
  src: "/images/articles/2026/10/visiter-la-cite-du-volcan-en-famille-a-la-reunion.webp"
  alt: "Structure en verre et acier devant la façade de la Cité du Volcan à Bourg-Murat, La Réunion, en mars 2026"
sources:
  - title: Cité du Volcan, présentation officielle
    url: https://museesreunion.fr/la-cite-du-volcan/
  - title: Cité du Volcan, Comité Réunionnais du Tourisme
    url: https://www.reunion.fr/offres/cite-du-volcan-la-la-plaine-des-cafres-le-tampon-fr-570267/
  - title: Horaires des musées régionaux
    url: https://museesreunion.fr/horaires/
  - title: Tarifs des musées régionaux
    url: https://museesreunion.fr/tarifs/
  - title: Ludothèque de la Cité du Volcan
    url: https://museesreunion.fr/la-cite-du-volcan/la-ludotheque-de-la-cite-du-volcan/
  - title: Cinéma 3D/4D de la Cité du Volcan
    url: https://museesreunion.fr/cinema-4d/
  - title: Route du Volcan, Comité Réunionnais du Tourisme
    url: https://www.reunion.fr/organisez/vos-activites/le-tour-de-l-ile-de-la-reunion/route-du-volcan/
  - title: Hôtel L’Ecrin, hébergements et situation
    url: https://www.hotel-ecrin.re/
affiliate:
  enabled: true
  type: travel
  destination: Le Tampon
---
<!-- article-image-credit -->
*Photo: [Clémenceau Lauret](https://commons.wikimedia.org/wiki/File:La_Cit%C3%A9_du_Volcan.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Bourg-Murat, dans les hauteurs du Tampon, la [Cité du Volcan](https://museesreunion.fr/la-cite-du-volcan/) raconte comment La Réunion s’est construite et comment fonctionnent les volcans. Ce musée de la Plaine des Cafres associe maquettes, dispositifs interactifs et projections. En famille, on peut y chercher des réponses aux questions nées devant les paysages de l’île, en passant d’une découverte visuelle à des explications plus approfondies selon les âges.

## Des volcans à hauteur d’enfant

<!-- article-image-body:01 -->

![Échantillon de basalte provenant de la coulée de lave de février 2026 du Piton de la Fournaise, illustration géologique](/images/articles/2026/10/visiter-la-cite-du-volcan-en-famille-a-la-reunion-body-01.webp)

*Photo: [Rémih](https://commons.wikimedia.org/wiki/File:Basalt_sample_February_2026_eruption_@_Piton_de_la_Fournaise_02.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le tunnel de lave multisensoriel et le film panoramique à 270° donnent une entrée très visuelle dans le sujet. Le parcours comprend aussi un espace consacré à l’observatoire volcanologique et une lithothèque, une collection de roches. Ces espaces sont présentés dans le [descriptif du Comité Réunionnais du Tourisme](https://www.reunion.fr/offres/cite-du-volcan-la-la-plaine-des-cafres-le-tampon-fr-570267/).

Pour donner un fil conducteur à la visite, proposez deux questions aux enfants: comment une île peut-elle naître dans l’océan? Que devient une coulée après l’éruption? Les maquettes aident à aborder l’histoire géologique de La Réunion, tandis que le musée explique aussi comment la vie s’installe sur les coulées sous-marines.

Avec les plus jeunes, laissez une roche, une image ou un dispositif guider la découverte. Les ambiances sonores et visuelles font partie du parcours: pour un enfant sensible à ces effets, avancez progressivement.

## Une pause à la ludothèque avec les plus petits

Le musée indique une [durée de visite d’environ deux heures](https://museesreunion.fr/horaires/). Avec une fratrie, la ludothèque permet de ménager une pause lorsque les envies divergent.

Elle comprend un coin mousse réservé aux moins de 3 ans, une structure de jeux avec toboggan et un espace de dînette. Des toilettes adaptées aux petits, une table à langer et une chaise haute complètent l’équipement.

**Un parent doit rester avec les enfants à la ludothèque.** À deux adultes, l’un peut y accompagner le plus jeune pendant que l’autre poursuit la visite avec les aînés. Avec un seul adulte, prévoyez une pause commune.

Les [horaires de la ludothèque](https://museesreunion.fr/la-cite-du-volcan/la-ludotheque-de-la-cite-du-volcan/) diffèrent de ceux du musée:

- du mardi au dimanche, de 10 h à 16 h 30.
- le lundi, de 13 h à 16 h 30.

## Cinéma: volcan en 4D ou dinosaures en 3D?

Deux films sont proposés en supplément, distincts du film panoramique du parcours:

- **Ti’Bul et le cristal d’Olivine**, une animation en **4D de 8 minutes**, imagine une exploration sous-marine puis à l’intérieur du Piton de la Fournaise. Elle prolonge le thème volcanique de la visite.
- **Planète préhistorique: Sur la Terre des dinosaures**, un documentaire d’animation en **3D de 20 minutes**, suit des dinosaures du Crétacé. Il répond davantage à une envie de préhistoire et demande de rester assis plus longtemps.

La [page officielle du cinéma](https://museesreunion.fr/cinema-4d/) annonce un supplément de **2 € par personne et par séance**. Elle interdit le 4D aux enfants « non accompagnés » de moins de 5 ans ou mesurant moins de 1,20 m, sans détailler les modalités pour un enfant accompagné.

**Pour un jeune enfant, faites confirmer l’admission avant d’acheter ce supplément**, au **02 62 59 00 26**. Profitez-en pour demander les horaires et réserver la séance auprès du musée. Consultez aussi les restrictions de santé publiées sur la page du cinéma.

## Horaires et budget à prévoir

Selon les [horaires officiels du musée](https://museesreunion.fr/horaires/), la Cité du Volcan ouvre:

- le lundi, de 13 h à 17 h.
- du mardi au dimanche, de 9 h 30 à 17 h.

**La billetterie ferme à 16 h.** Une arrivée à cette heure laisse donc seulement une heure dans les salles.

Le musée est fermé les **1er janvier, 1er mai, 1er novembre et 25 décembre**. Les 24 et 31 décembre, il ferme à 13 h 30.

Les [tarifs publiés](https://museesreunion.fr/tarifs/) sont de **9 € au plein tarif**, **6 € pour les enfants de 4 à 12 ans** et gratuits pour les moins de 4 ans. Deux adultes au plein tarif et deux enfants de 4 à 12 ans paient ainsi **30 € hors cinéma**. D’autres réductions sont détaillées sur cette page, qui donne aussi accès à la billetterie en ligne.

## Venir à Bourg-Murat et prolonger l’étape

<!-- article-image-body:02 -->

![Route du Volcan traversant les paysages de la Plaine des Remparts vers le Piton de la Fournaise](/images/articles/2026/10/visiter-la-cite-du-volcan-en-famille-a-la-reunion-body-02.webp)

*Photo: [Mart.wain](https://commons.wikimedia.org/wiki/File:La_R%C3%A9union_-_Route_du_Volcan.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Le musée se trouve sur la **RN3, à Bourg-Murat**. Depuis Saint-Pierre, l’itinéraire passe par Le Tampon puis la Plaine des Cafres. Depuis Saint-Benoît, il traverse la Plaine des Palmistes. La [route du Volcan](https://www.reunion.fr/organisez/vos-activites/le-tour-de-l-ile-de-la-reunion/route-du-volcan/) commence à proximité de la Cité du Volcan et monte vers les paysages du Piton de la Fournaise.

Si cette route fait partie de votre séjour, une nuit à Bourg-Murat permet de répartir les découvertes: le musée un après-midi, puis les points de vue le lendemain, selon la météo et les conditions d’accès.

Dans le village, l’Hôtel L’Ecrin propose des chambres quadruples et un appartement pour cinq personnes avec kitchenette et coin repas, d’après la présentation de l’établissement. L’appartement peut être pratique pour préparer un repas au rythme des enfants. Pour organiser cette étape, [consultez les logements et les tarifs de l’Hôtel L’Ecrin sur Booking.com](https://www.booking.com/hotel/re/ha-tel-l-ecrin.fr.html), en indiquant vos dates et l’âge des enfants. Vérifiez la capacité de la formule proposée, le prix total et les conditions d’annulation avant de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/ | Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite | sorties | Paris, Paris, Île-de-France
- /articles/sorties/cite-des-climats-a-beaune-en-famille-tarifs-parcours-enfants-et-billets/ | Cité des Climats à Beaune en famille: tarifs, parcours enfants et billets | sorties | Beaune, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/voyages/perouges-avec-des-enfants-dormir-dans-la-cite-ou-pres-de-la-gare/ | Pérouges avec des enfants: dormir dans la cité ou près de la gare? | voyages | Pérouges, Ain, Auvergne-Rhône-Alpes
- /articles/bons-plans/musees-a-la-reunion-en-famille-quel-pass-choisir-pour-economiser/ | Musées à La Réunion en famille: quel pass choisir pour économiser ? | bons-plans | La Réunion, La Réunion
- /articles/activites/kayak-transparent-a-trou-d-eau-decouvrir-le-lagon-en-famille/ | Kayak transparent à Trou d’Eau: découvrir le lagon en famille | activites | Saint-Paul, La Réunion, La Réunion
- /articles/evenements/festival-cite-en-jeux-2026-a-colomiers-quel-jour-choisir-avec-des-enfants/ | Festival Cité en Jeux 2026 à Colomiers: quel jour choisir avec des enfants | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/voyages/ou-dormir-a-rocamadour-avec-des-enfants-cite-plateau-ou-campagne/ | Où dormir à Rocamadour avec des enfants: cité, plateau ou campagne? | voyages | Rocamadour, Lot, Occitanie
- /articles/evenements/batiment-b-a-saint-denis-decouvrir-le-street-art-en-famille/ | Bâtiment B à Saint-Denis: découvrir le street art en famille | evenements | Saint-Denis, La Réunion, La Réunion
- /articles/voyages/visiter-la-cite-du-volcan-en-famille-a-la-reunion/ | Visiter la Cité du Volcan en famille à La Réunion | voyages | Le Tampon, La Réunion, La Réunion
- /articles/parentalite/kaz-1000-jours-au-port-ateliers-gratuits-pour-les-futurs-et-jeunes-parents/ | Kaz’1000 jours au Port: ateliers gratuits pour les futurs et jeunes parents | parentalite | Le Port, La Réunion, La Réunion
- /articles/cuisine/maison-du-coco-a-saint-leu-faut-il-reserver-l-atelier-ou-visiter-seulement-le-domaine/ | Maison du Coco à Saint-Leu: faut-il réserver l'atelier ou visiter seulement le domaine? | cuisine | Saint-Leu, La Réunion, La Réunion
- /articles/maison/ameliorer-son-logement-a-la-reunion-qui-peut-demander-l-aide-departementale/ | Améliorer son logement à La Réunion: qui peut demander l'aide départementale? | maison | Saint-Denis, La Réunion, La Réunion
- /articles/sorties/aquarium-reunion-fermeture-2026-visite-famille/ | Aquarium de La Réunion fermé depuis le 17 août 2026: quand pourra-t-on revenir en famille ? | sorties | Saint-Gilles-les-Bains, La Réunion, La Réunion
- /articles/voyages/jardin-botanique-de-deshaies-trois-decouvertes-a-faire-en-famille/ | Jardin botanique de Deshaies: trois découvertes à faire en famille | voyages | Deshaies, Guadeloupe, Guadeloupe
- /articles/voyages/refuge-de-l-arche-en-famille-decouvrir-les-animaux-recueillis-et-preparer-sa-visite/ | Refuge de l’Arche en famille: découvrir les animaux recueillis et préparer sa visite | voyages | Château-Gontier-sur-Mayenne, Mayenne, Pays de la Loire
- /articles/voyages/la-vallee-des-saints-a-carnoet-visiter-les-geants-de-granit-en-famille/ | La Vallée des Saints à Carnoët: visiter les géants de granit en famille | voyages | Carnoët, Côtes-d'Armor, Bretagne
- /articles/voyages/week-end-dans-l-auxois-en-famille-chateau-de-bussy-rabutin-et-semur-en-auxois/ | Week-end dans l'Auxois en famille: château de Bussy-Rabutin et Semur-en-Auxois | voyages | Côte-d'Or, Bourgogne-Franche-Comté
- /articles/voyages/musee-du-jouet-de-poissy-en-famille-visite-tarifs-et-exposition-sur-le-precinema/ | Musée du Jouet de Poissy en famille: visite, tarifs et exposition sur le précinéma | voyages | Poissy, Yvelines, Île-de-France
- /articles/voyages/saul-en-famille-preparer-un-sejour-au-coeur-de-la-foret-guyanaise/ | Saül en famille: préparer un séjour au cœur de la forêt guyanaise | voyages | Saül, Guyane, Guyane
- /articles/voyages/la-parata-et-les-iles-sanguinaires-en-famille-balades-et-sortie-en-mer/ | La Parata et les îles Sanguinaires en famille: balades et sortie en mer | voyages | Ajaccio, Corse-du-Sud, Corse
- /articles/voyages/pont-de-gau-en-famille-en-automne-et-en-hiver-flamants-roses-et-marais/ | Pont de Gau en famille en automne et en hiver: flamants roses et marais | voyages | Saintes-Maries-de-la-Mer, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/voyages/domaine-de-chaalis-en-famille-que-visiter-pendant-les-travaux/ | Domaine de Chaalis en famille: que visiter pendant les travaux ? | voyages | Fontaine-Chaalis, Oise, Hauts-de-France

### Historique Radar lié

- Aucun historique lié.

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
