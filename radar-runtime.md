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
title: "Grottes de Sare en famille: visite, tarifs et conseils pratiques"
subtitle: Une grotte en son et lumière au Pays basque, avec un parcours adapté à organiser à l'avance
summary: "Grottes de Sare avec des enfants: visite, tarifs 2026, accessibilité partielle, réservation, paiement et conseils avec un bébé."
slug: grottes-de-sare-en-famille-visite-tarifs-et-conseils-pratiques
status: published
publishedAt: 2026-11-03T13:02:45+01:00
updatedAt: null
category: activites
readingTime: 5
location:
  city: Sare
  department: Pyrénées-Atlantiques
  region: Nouvelle-Aquitaine
topic:
  key: activites|sare|grottes-de-sare-en-famille-visite-tarifs-et-conseils-pratiques|2026
  keywords:
    - grottes de Sare en famille
    - visite grottes de Sare enfants
    - tarifs grottes de Sare 2026
image:
  src: /images/articles/2026/11/grottes-de-sare-en-famille-visite-tarifs-et-conseils-pratiques.webp
  alt: Entrée des grottes de Sare au Pays basque
sources:
  - title: Grottes de Sare - présentation du site
    url: https://www.grottesdesare.fr/site.php
  - title: Grottes de Sare - horaires et tarifs 2026
    url: https://www.grottesdesare.fr/horaire_tarif.php
  - title: Grottes de Sare - réservation et recommandations
    url: https://reservation.grottesdesare.fr/visite-fr
  - title: Grottes de Sare - parc mégalithique
    url: https://www.grottesdesare.fr/parc.html
  - title: Grottes de Sare - accessibilité
    url: https://www.grottesdesare.fr/accessibilite.php
  - title: Grottes de Sare - accès et stationnement
    url: https://www.grottesdesare.fr/acces.php
  - title: Grottes de Sare - modalités de paiement
    url: https://www.grottesdesare.fr/paiement.php
affiliate:
  enabled: true
  type: travel
  destination: Sare
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/activites/(2026)/(11)/grottes-de-sare-en-famille-visite-tarifs-et-conseils-pratiques/index.md
  targetSha: 8d96aef3bdc54b690f69582460e7c7ebe0d95284
  targetUrl: /articles/activites/grottes-de-sare-en-famille-visite-tarifs-et-conseils-pratiques/
  decision: Permettre à une famille avec une personne en situation de handicap de connaître le parcours réellement accessible, le prix adapté et la démarche de réservation, et à toutes les familles de choisir leur mode d'achat sans mauvaise surprise.
  affiliationPotential: Conserver le lien Booking.com vers le VVF Pays Basque Sare La Rhune, sans ajouter de partenaire pour la billetterie officielle.
  gsc:
    retrievedAt: 2026-11-15T10:29:35+01:00
    dataThrough: 2026-11-13
    signal: uncertain
    basis: "Visibilité récente : 23 impressions sur trois jours, puis 5 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-08
    peakEnd: 2026-11-10
    recentStart: 2026-11-11
    recentEnd: 2026-11-13
    peakImpressions: 23
    recentImpressions: 5
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0.429
    focusQueries:
      - les grottes de sare
      - avis sur grottes de sare
      - visite tarif grotte de sare
      - billets pour grottes de sare
      - grottes de sare avis
reviewAt: 2027-01-04
---

<!-- article-image-credit -->
*Photo: [Harrieta171](https://commons.wikimedia.org/wiki/File:Sare_-_29.JPG) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Sare, au cœur du Pays basque, les familles peuvent explorer la grotte **Lezea** lors d'une visite guidée en son et lumière. Géologie, préhistoire et récits basques prennent vie sous terre, avant de prolonger la découverte dans un musée et un parc mégalithique. Avec des enfants, il faut surtout anticiper le créneau, les escaliers et, si nécessaire, l'organisation d'une visite adaptée.

## Que voit-on dans les grottes de Sare?

La visite débute par une présentation du site, puis le groupe suit un parcours éclairé dans la cavité. La narration et les jeux de lumière abordent la formation de la grotte, son occupation humaine, la mythologie et la culture basques.

Comptez **une heure de visite guidée, dont environ 45 minutes dans la grotte**. L'obscurité et les effets sonores peuvent impressionner les plus petits. La visite suit un rythme collectif, sans possibilité de s'arrêter ou de sortir librement. Le [site des Grottes de Sare décrit le parcours](https://www.grottesdesare.fr/site.php).

## Un musée et un parc mégalithique à découvrir

Le billet comprend également l'accès au musée du site et au parc mégalithique. Ce dernier présente des **reconstitutions** de monuments et de pratiques funéraires préhistoriques: il ne s'agit pas de vestiges originaux découverts sur place. C'est une bonne façon de donner des images concrètes aux explications entendues sous terre. Le [parc est présenté sur le site officiel](https://www.grottesdesare.fr/parc.html).

Attention à l'ordre de visite: **le musée et le parc ferment au départ de la dernière visite guidée**. Avec un billet pour le dernier créneau, découvrez-les donc avant la grotte. Le parc étant extérieur, prévoyez une tenue adaptée à la météo.

## Visiter avec un bébé ou de jeunes enfants

Il fait **environ 14 °C toute l'année** sous terre. Prévoyez un vêtement chaud et des chaussures confortables, même en été. Les poussettes, les animaux et les prises de photos ou vidéos ne sont pas autorisés dans la grotte. Un **porte-bébé** est conseillé pour les tout-petits.

Le parcours complet représente **900 mètres sur deux niveaux**, avec environ 40 marches à monter et 30 à descendre. Les enfants doivent pouvoir suivre le groupe pendant toute la visite.

## Accessibilité: quelle visite est possible en situation de handicap?

Pour une personne en fauteuil roulant ou à mobilité réduite, **seule une partie aménagée du niveau inférieur** de la grotte est accessible: l'étage supérieur ne l'est pas. Une passerelle facilite l'entrée et un membre de l'équipe doit accompagner la personne sur une partie du parcours. **Appelez impérativement au moins deux jours avant la visite au 05 59 54 21 88** pour convenir des possibilités d'accueil. Sans ce contact, la visite adaptée peut être reportée ou refusée selon les conditions du jour.

Quatre places de stationnement goudronnées sont prévues près de la billetterie. Le musée et le parc disposent de passerelles, mais une partie du parc est gravillonnée: mieux vaut être accompagné. Des toilettes de plain-pied sont disponibles près du bar, avec une clé à demander au personnel. Pour d'autres besoins ou des difficultés à suivre le rythme du groupe, demandez conseil avant de réserver. Consultez les [conditions d'accessibilité officielles](https://www.grottesdesare.fr/accessibilite.php).

Les **tarifs individuels adaptés 2026** sont de **6,50 € pour un adulte**, **4 € pour un enfant de 5 à 13 ans** et **5,50 € pour un adolescent ou étudiant**, avec justificatif lorsque demandé. **L'accompagnateur bénéficie de la gratuité**. Confirmez avec l'équipe le créneau et les conditions de réservation adaptés avant de payer.

## Tarifs 2026, horaires et achat des billets

Les tarifs individuels ordinaires 2026 sont de **10 € par adulte**, **6 € de 5 à 13 ans inclus**, **8,50 € de 14 à 17 ans**, **8,50 € pour les étudiants sur présentation de la carte**, et **gratuit pour les moins de 5 ans**. Les tout-petits doivent néanmoins être inclus dans la réservation. Le **pass famille à 32 €** est réservé à deux adultes accompagnés de trois enfants payants âgés de 5 à 13 ans. Les habitants de Sare bénéficient de la gratuité sur justificatif.

Pour la période **du 2 novembre 2026 au 3 janvier 2027**, les horaires d'ouverture annoncés sont de **14 h à 17 h du lundi au vendredi** et de **13 h à 17 h les week-ends et pendant les vacances scolaires**. Le site ferme les **24 et 25 décembre 2026** et le **1er janvier 2027**. Ces plages ne correspondent pas aux heures exactes de départ: choisissez un créneau disponible lors de la réservation.

**Réserver à l'avance reste la solution sûre**, car les visites ont une capacité limitée; le site indique une réservation indispensable. Un achat à l'accueil des grottes reste possible **uniquement s'il reste des places**, ainsi que dans certains bureaux de l'office de tourisme du Pays basque. Le paiement en ligne se fait **par carte bancaire uniquement**; sur place ou en office de tourisme, d'autres moyens sont proposés, notamment espèces, chèques, chèques-vacances ANCV papier et Eusko selon les modalités indiquées. Vérifiez les [moyens de paiement et points de vente](https://www.grottesdesare.fr/paiement.php).

Présentez-vous **20 minutes avant le départ**. Les billets achetés en ligne sont non modifiables et non remboursables. Consultez les [horaires et tarifs officiels](https://www.grottesdesare.fr/horaire_tarif.php), puis la [billetterie des Grottes de Sare](https://reservation.grottesdesare.fr/visite-fr) pour choisir le jour, la langue et l'horaire.

## Accès, stationnement et repas

Les grottes se situent à environ **20 km de Saint-Jean-de-Luz**, à l'écart du centre de Sare. **Trois parkings gratuits** sont disponibles. Des bus desservent le secteur depuis Saint-Jean-de-Luz et les communes voisines, notamment via le réseau Txik Txak: vérifiez les correspondances et horaires du jour, particulièrement hors saison. Retrouvez les indications sur la [page d'accès des Grottes de Sare](https://www.grottesdesare.fr/acces.php).

Des toilettes, des tables de pique-nique et un espace café sont annoncés sur place. La restauration rapide est surtout proposée en été: pour une visite hivernale, mieux vaut prévoir son repas autrement.

Pour profiter de la visite guidée, du musée et du parc sans courir, réservez **une demi-journée**. Si vous séjournez plusieurs jours dans le secteur, le [guide Fam Space du Train de la Rhune avec des enfants](https://www.fam-space.fr/articles/voyages/train-de-la-rhune-avec-des-enfants-billets-duree-et-conseils-en-2026/) donne une autre idée d'excursion, à organiser selon la saison d'ouverture du train.

## Dormir à Sare pour prolonger le séjour

Pour découvrir les villages et paysages basques sur plusieurs jours, le [VVF Pays Basque Sare La Rhune](https://www.booking.com/hotel/fr/vvf-villages-omordia.fr.html) dispose d'hébergements familiaux, d'un parking et de lits bébé gratuits sur demande, selon disponibilité. Il se trouve dans le village, à environ 6 km des grottes. Vérifiez les dates d'ouverture, la capacité du logement et les conditions de réservation avant de choisir votre séjour.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/activites/(2026)/(11)/grottes-de-sare-en-famille-visite-tarifs-et-conseils-pratiques/index.md

---
title: "Grottes de Sare en famille: visite, tarifs et conseils pratiques"
subtitle: Une visite souterraine en son et lumière, complétée par un musée et un parc mégalithique au Pays basque
summary: "Visiter les grottes de Sare avec des enfants: durée du parcours, tarifs 2026, horaires, réservation et précautions avec un bébé."
slug: grottes-de-sare-en-famille-visite-tarifs-et-conseils-pratiques
status: published
publishedAt: 2026-11-03T13:02:45+01:00
updatedAt: null
category: activites
readingTime: 4
location:
  city: Sare
  department: Pyrénées-Atlantiques
  region: Nouvelle-Aquitaine
topic:
  key: activites|sare|grottes-de-sare-en-famille-visite-tarifs-et-conseils-pratiques|2026
  keywords:
    - grottes de Sare en famille
    - visite grottes de Sare enfants
    - tarifs grottes de Sare 2026
image:
  src: "/images/articles/2026/11/grottes-de-sare-en-famille-visite-tarifs-et-conseils-pratiques.webp"
  alt: "Entrée des grottes de Sare au Pays basque"
sources:
  - title: Grottes de Sare - présentation du site
    url: https://www.grottesdesare.fr/site.php
  - title: Grottes de Sare - horaires et tarifs 2026
    url: https://www.grottesdesare.fr/horaire_tarif.php
  - title: Grottes de Sare - réservation et recommandations
    url: https://reservation.grottesdesare.fr/visite-fr
  - title: Grottes de Sare - parc mégalithique
    url: https://www.grottesdesare.fr/parc.html
  - title: Grottes de Sare - accessibilité
    url: https://www.grottesdesare.fr/accessibilite.php
  - title: Grottes de Sare - accès et stationnement
    url: https://www.grottesdesare.fr/acces.php
affiliate:
  enabled: true
  type: travel
  destination: Sare
---
<!-- article-image-credit -->
*Photo: [Harrieta171](https://commons.wikimedia.org/wiki/File:Sare_-_29.JPG) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Sare, au cœur du Pays basque, les familles peuvent explorer la grotte **Lezea** lors d'une visite guidée en son et lumière. Géologie, préhistoire et récits basques prennent vie sous terre, avant de prolonger la découverte dans un musée et un parc mégalithique. Une sortie originale avec des enfants, à condition de prévoir le bon créneau et de tenir compte des escaliers.

## Que voit-on dans les grottes de Sare?

La visite débute par une présentation du site, puis le groupe suit un parcours éclairé dans la cavité. La narration et les jeux de lumière abordent la formation de la grotte, son occupation humaine, la mythologie et la culture basques.

Comptez **une heure de visite guidée, dont environ 45 minutes dans la grotte**. L'obscurité et les effets sonores peuvent impressionner les plus petits. La visite suit un rythme collectif, sans possibilité de s'arrêter ou de sortir librement. Le [site des Grottes de Sare décrit le parcours](https://www.grottesdesare.fr/site.php).

## Un musée et un parc mégalithique à découvrir

Le billet comprend également l'accès au musée du site et au parc mégalithique. Ce dernier présente des **reconstitutions** de monuments et de pratiques funéraires préhistoriques: il ne s'agit pas de vestiges originaux découverts sur place. C'est une bonne façon de donner des images concrètes aux explications entendues sous terre. Le [parc est présenté sur le site officiel](https://www.grottesdesare.fr/parc.html).

Attention à l'ordre de visite: **le musée et le parc ferment au départ de la dernière visite guidée**. Avec un billet pour le dernier créneau, découvrez-les donc avant la grotte. Le parc étant extérieur, prévoyez une tenue adaptée à la météo.

## Visiter avec un bébé ou de jeunes enfants

Il fait **environ 14 °C toute l'année** sous terre. Prévoyez un vêtement chaud et des chaussures confortables, même en été. Les poussettes, les animaux et les prises de photos ou vidéos ne sont pas autorisés dans la grotte. Un **porte-bébé** est conseillé pour les tout-petits.

Le parcours complet représente **900 mètres sur deux niveaux**, avec environ 40 marches à monter et 30 à descendre. Les enfants doivent pouvoir suivre le groupe pendant toute la visite. Les personnes à mobilité réduite peuvent accéder à une partie aménagée du niveau inférieur, mais pas à l'étage supérieur. Un accueil spécifique doit être organisé avec l'équipe **au moins deux jours à l'avance** au 05 59 54 21 88. Consultez les [conditions d'accessibilité officielles](https://www.grottesdesare.fr/accessibilite.php).

## Tarifs 2026, horaires et réservation

La réservation préalable est indispensable, les places étant limitées. Présentez-vous **20 minutes avant le départ**. Les billets achetés en ligne sont non modifiables et non remboursables.

Pour la période **du 2 novembre 2026 au 3 janvier 2027**, les horaires d'ouverture annoncés sont de **14 h à 17 h du lundi au vendredi** et de **13 h à 17 h les week-ends et pendant les vacances scolaires**. Le site ferme les **24 et 25 décembre 2026** et le **1er janvier 2027**. Ces plages ne correspondent pas aux heures exactes de départ: choisissez un créneau disponible lors de la réservation.

Les tarifs individuels 2026 sont de **10 € par adulte**, **6 € de 5 à 13 ans inclus**, **8,50 € de 14 à 17 ans** et **gratuit pour les moins de 5 ans**. Les tout-petits doivent néanmoins être inclus dans la réservation. Le **pass famille à 32 €** est réservé à deux adultes accompagnés de trois enfants payants âgés de 5 à 13 ans. Les habitants de Sare bénéficient de la gratuité sur justificatif.

Vérifiez les informations actualisées sur la [page officielle des horaires et tarifs](https://www.grottesdesare.fr/horaire_tarif.php) et réservez sur la [billetterie des Grottes de Sare](https://reservation.grottesdesare.fr/visite-fr).

## Accès, stationnement et repas

Les grottes se situent à environ **20 km de Saint-Jean-de-Luz**, à l'écart du centre de Sare. **Trois parkings gratuits** sont disponibles. Des bus desservent le secteur depuis Saint-Jean-de-Luz et les communes voisines, notamment via le réseau Txik Txak: vérifiez les correspondances et horaires du jour, particulièrement hors saison. Retrouvez les indications sur la [page d'accès des Grottes de Sare](https://www.grottesdesare.fr/acces.php).

Des toilettes, des tables de pique-nique et un espace café sont annoncés sur place. La restauration rapide est surtout proposée en été: pour une visite hivernale, mieux vaut prévoir son repas autrement.

Pour profiter de la visite guidée, du musée et du parc sans courir, réservez **une demi-journée**. Si vous séjournez plusieurs jours dans le secteur, le [guide Fam Space du Train de la Rhune avec des enfants](https://www.fam-space.fr/articles/voyages/train-de-la-rhune-avec-des-enfants-billets-duree-et-conseils-en-2026/) donne une autre idée d'excursion, à organiser selon la saison d'ouverture du train.

## Dormir à Sare pour prolonger le séjour

Pour découvrir les villages et paysages basques sur plusieurs jours, le [VVF Pays Basque Sare La Rhune](https://www.booking.com/hotel/fr/vvf-villages-omordia.fr.html) dispose d'hébergements familiaux, d'un parking et de lits bébé gratuits sur demande, selon disponibilité. Il se trouve dans le village, à environ 6 km des grottes. Vérifiez les dates d'ouverture, la capacité du logement et les conditions de réservation avant de choisir votre séjour.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/grottes-d-isturitz-et-d-oxocelhaya-avec-des-enfants-les-contraintes-a-connaitre-avant-la-visite/ | Grottes d'Isturitz et d'Oxocelhaya avec des enfants: les contraintes à connaître avant la visite | sorties | Saint-Martin-d'Arberoue, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/activites/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre/ | Grottes de Thouzon avec des enfants: préparer la visite sous terre | activites | Le Thor, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/activites/grottes-de-saulges-en-famille-margot-ou-rochefort-selon-l-age/ | Grottes de Saulges en famille: découvrir Margot, Rochefort et le musée | activites | Thorigné-en-Charnie, Mayenne, Pays de la Loire
- /articles/sorties/grottes-d-arcy-sur-cure-avec-des-enfants-quelle-visite-choisir/ | Grottes d'Arcy-sur-Cure avec des enfants: quelle visite choisir? | sorties | Arcy-sur-Cure, Yonne, Bourgogne-Franche-Comté
- /articles/bons-plans/baume-les-messieurs-en-famille-le-passeport-grottes-abbaye-vaut-il-le-coup/ | Baume-les-Messieurs en famille: le passeport grottes + abbaye vaut-il le coup ? | bons-plans | Baume-les-Messieurs, Jura, Bourgogne-Franche-Comté
- /articles/sorties/grottes-de-gargas-en-famille-voir-les-mains-prehistoriques-et-decouvrir-nestploria/ | Grottes de Gargas en famille: voir les mains préhistoriques et découvrir Nestploria | sorties | Aventignan, Hautes-Pyrénées, Occitanie
- /articles/sorties/grottes-a-visiter-avec-des-enfants-padirac-orgnac-ou-choranche-laquelle-choisir/ | Grottes à visiter avec des enfants: Padirac, Orgnac ou Choranche, laquelle choisir? | sorties
- /articles/activites/grottes-de-sare-en-famille-visite-tarifs-et-conseils-pratiques/ | Grottes de Sare en famille: visite, tarifs et conseils pratiques | activites | Sare, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/voyages/train-de-la-rhune-avec-des-enfants-billets-duree-et-conseils-en-2026/ | Train de la Rhune avec des enfants: billets, durée et conseils en 2026 | voyages | Sare, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/vie-pratique/transport-scolaire-dans-les-pyrenees-atlantiques-txik-txak-ou-region-en-2026-2027/ | Transport scolaire dans les Pyrénées-Atlantiques: TXIK TXAK ou Région en 2026-2027? | vie-pratique | Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/maison/tissage-moutet-a-orthez-choisir-son-linge-de-table-en-famille/ | Tissage Moutet à Orthez: choisir son linge de table en famille | maison | Orthez, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/bons-plans/aquarium-cite-de-l-ocean-a-biarritz-quand-le-billet-combine-fait-vraiment-economiser/ | Aquarium + Cité de l'Océan à Biarritz: quand le billet combiné fait vraiment économiser | bons-plans | Biarritz, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/parentalite/pipa-a-pau-quand-venir-pour-parler-parentalite-et-trouver-le-bon-interlocuteur/ | PIPA à Pau: quand venir pour parler parentalité et trouver le bon interlocuteur? | parentalite | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/cuisine/escapade-gourmande-a-espelette-en-famille-piment-chocolat-et-marche/ | Escapade gourmande à Espelette en famille: piment, chocolat et marché | cuisine | Espelette, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/maison/recuperateur-d-eau-de-pluie-au-pays-basque-jusqu-a-1-500-d-aide/ | Récupérateur d'eau de pluie au Pays Basque: jusqu'à 1 500 € d'aide | maison | Bayonne, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/sorties/musee-bonnat-helleu-bayonne-famille-ete-2026/ | Musée Bonnat-Helleu à Bayonne: la visite sensorielle à faire en famille cet été 2026 | sorties | Bayonne, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/activites/parc-animalier-des-angles-en-famille-quel-circuit-choisir-et-comment-preparer-la-visite/ | Parc animalier des Angles en famille: quel circuit choisir et comment préparer la visite ? | activites | Les Angles, Pyrénées-Orientales, Occitanie
- /articles/activites/parc-phoenix-a-nice-en-famille-serre-tropicale-animaux-et-jeux/ | Parc Phoenix à Nice en famille: serre tropicale, animaux et jeux | activites | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/activites/les-z-accroches-pres-de-nevers-quel-accrobranche-choisir-avec-des-enfants/ | Les Z'Accrochés près de Nevers: quel accrobranche choisir avec des enfants? | activites | Sauvigny-les-Bois, Nièvre, Bourgogne-Franche-Comté
- /articles/activites/musee-de-la-ceramique-de-desvres-en-famille-visite-ateliers-et-tarifs/ | Musée de la Céramique de Desvres en famille: visite, ateliers et tarifs | activites | Desvres, Pas-de-Calais, Hauts-de-France
- /articles/activites/lewarde-en-famille-decouvrir-la-mine-et-la-vie-des-mineurs/ | Lewarde en famille: découvrir la mine et la vie des mineurs | activites | Lewarde, Nord, Hauts-de-France

### Historique Radar lié

- refresh | /articles/activites/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre/ | 2026-11-10T09:32:01.095Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
