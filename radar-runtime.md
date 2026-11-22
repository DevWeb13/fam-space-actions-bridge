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
title: "Saint-Nicolas-de-Port 2026 en famille: horaires du défilé et de la procession"
subtitle: Le 5 décembre, village dès 14 h, chars à 16 h 30 et flambeaux à 20 h 30
summary: "Village et animations gratuites de 14 h à 19 h, défilé dès 16 h 30, spectacle à 17 h 45 et procession à 20 h 30: le programme confirmé et les conseils pour choisir avec les enfants."
category: evenements
location:
  city: Saint-Nicolas-de-Port
  department: Meurthe-et-Moselle
  region: Grand Est
image:
  src: /images/articles/2026/11/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille.webp
  alt: Procession aux flambeaux de la Saint-Nicolas dans la basilique de Saint-Nicolas-de-Port, photographiée en décembre 2007.
sources:
  - title: Ville de Saint-Nicolas-de-Port - Festivités de la Saint-Nicolas, 5 décembre 2026
    url: https://www.saintnicolasdeport.com/fr/ev/1263095/792846/festivites-de-la-saint-nicolas-1
  - title: Ville de Saint-Nicolas-de-Port - Programme et plan officiels 2026 (PDF)
    url: https://api.neopse.com/rest/site/files/download/2319394
  - title: Ville de Saint-Nicolas-de-Port - Village de la Saint-Nicolas
    url: https://www.saintnicolasdeport.com/fr/nw/1263056/3010347/village-de-la-saint-nicolas-recherche-de-producteurs-et-artisans-en-gastronomie
  - title: Ville de Saint-Nicolas-de-Port - Se déplacer
    url: https://saintnicolasdeport.com/fr/rb/1023453/se-deplacer-19
eventEndsAt: 2026-12-05
topic:
  key: evenements|saint-nicolas-de-port|saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille|2026
  keywords:
    - Saint-Nicolas-de-Port 5 décembre 2026 en famille
    - festivités Saint Nicolas de Port défilé 2026
    - village Saint Nicolas de Port procession aux flambeaux
slug: saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille
status: published
publishedAt: 2026-11-02T23:31:49.325Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Saint-Nicolas-de-Port
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(11)/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/index.md
  targetSha: 308adb46f79678747d76656574ba696a4212844e
  targetUrl: /articles/evenements/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/
  decision: Choisir entre village, défilé et procession le 5 décembre, avec les horaires, lieux et contraintes de retour réellement annoncés pour 2026.
  affiliationPotential: Conserver l'hébergement Booking.com déjà présent pour les familles venant de loin; aucune billetterie pour les festivités gratuites.
  gsc:
    retrievedAt: 2026-11-22T01:30:56+01:00
    dataThrough: 2026-11-19
    signal: needs_query_check
    basis: "Visibilité récente : 31 impressions sur trois jours, puis 9 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-11-10
    peakEnd: 2026-11-12
    recentStart: 2026-11-17
    recentEnd: 2026-11-19
    peakImpressions: 31
    recentImpressions: 9
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Saint-Nicolas-de-Port 5 décembre 2026 en famille
      - festivités Saint Nicolas de Port défilé 2026
      - village Saint Nicolas de Port procession aux flambeaux
---

<!-- article-image-credit -->
*Photo: [Antoine Taveneaux](https://commons.wikimedia.org/wiki/File:Procession-saint-nicolas4.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Le **samedi 5 décembre 2026**, Saint-Nicolas-de-Port, en Meurthe-et-Moselle, célèbre la Saint-Nicolas. La Ville confirme **le village de 14 h à 19 h**, **le défilé de chars à 16 h 30**, **l'allocution de saint Nicolas et le spectacle son et lumière à 17 h 45**, puis **la procession aux flambeaux à 20 h 30** dans la basilique. **L'entrée aux festivités est libre**; achats et consommations restent à prévoir séparément. Pour une sortie familiale, ces horaires permettent de choisir entre un après-midi avec de jeunes enfants et une soirée plus longue.

## Avec de jeunes enfants: village, contes et manèges l'après-midi

Le **Village de la Saint-Nicolas** s'installe **place des Droits de l'Homme de 14 h à 19 h**. Le [programme municipal 2026](https://api.neopse.com/rest/site/files/download/2319394) annonce près de 30 artisans et commerçants ainsi que des espaces pour goûter des produits locaux. Les consommations et achats sont payants; la Ville ne détaille pas les prix de chaque stand. Prévoyez une solution de repas de secours si nécessaire.

Pour les petits, **La cabane de jardin** (compagnie Toupine) accueille les enfants **de 6 mois à 6 ans, de 14 h à 17 h**, place de la République. **Le P'tit Manège fait main** est annoncé **de 14 h à 17 h, pour les 2 à 12 ans**, contre-allée Roland-Zambeau, avenue Jolain. Le **P'tit Ranch**, avec des chevaux à pédales ou à pousser pour les plus petits, se tient **de 14 h 30 à 16 h 30**, en bas de la rue Anatole-France. Le programme annonce l'entrée libre aux festivités, mais ne précise pas de tarif individuel pour ces manèges: vérifiez sur place.

Pour une pause au calme, deux séances du conte **« Des pas dans la neige »** sont prévues **à 14 h 30 et 15 h 30**, pendant 30 minutes, à la salle du Conseil de la mairie (4 bis place de la République). Les **« Racontines d'hiver »** sont annoncées **à 15 h et 16 h**, pendant 30 minutes, à la médiathèque (5 rue Bonnardel). Des ateliers créatifs et un stand de maquillage sont programmés **de 14 h à 17 h**, place de la République et place Camille-Croué-Friedman. Une borne photo gratuite fonctionne **de 14 h à 17 h** à la Maison de saint Nicolas.

## Pour voir les chars: le défilé commence à 16 h 30

<!-- article-image-body:01 -->

![Basilique Saint-Nicolas-de-Port illuminée de nuit, photographiée hors des festivités de 2026.](/images/articles/2026/11/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille-body-01.webp)

*Photo: [Antoine Taveneaux](https://commons.wikimedia.org/wiki/File:Basilique_Saint-Nicolas_de_Port_de_nuit_01.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le **défilé traditionnel de chars et de groupes musicaux débute à 16 h 30**. Selon le plan officiel, sa mise en place technique se fait rue George-Rémy; le cortège emprunte ensuite les rues Edmond-Prignet, Marie-Marvingt, des Mimosas et des Jonquilles, pour rejoindre **vers 17 h l'angle des rues des Jonquilles et Jolain**. Il arrive **vers 17 h 30 place des Droits de l'Homme**, avant de passer place de la République, rues Anatole-France et Laruelle, place Jean-Jaurès, puis rue Bonnardel. Ces heures de passage sont indicatives, contrairement à l'heure de départ annoncée.

Les familles qui souhaitent surtout voir les chars peuvent rejoindre un point du parcours à l'avance plutôt que de suivre tout le cortège avec une poussette. **À 17 h 45**, place de la République, saint Nicolas prononcera son allocution, recevra les clefs de la ville et un **spectacle son et lumière** est prévu. Des déambulations complètent l'après-midi, notamment **Koï** de 15 h à 15 h 45 place des Droits de l'Homme, puis de 16 h 15 à 17 h rue Anatole-France.

## La procession aux flambeaux: une sortie plus tardive

La **780e procession ancestrale aux flambeaux commence à 20 h 30 dans la basilique Saint-Nicolas**. Le programme précise une **ouverture des portes à 19 h 30**. Il s'agit d'un office et d'un cortège aux flambeaux avec présentation des trésors de la basilique, distincts du défilé de chars en ville. Pour les familles avec de jeunes enfants, il faut compter avec l'attente avant l'entrée, la foule et le retour après la cérémonie. Sa durée de fin n'est pas précisée dans le programme.

La Ville met à disposition le [flyer et le plan des animations](https://api.neopse.com/rest/site/files/download/2319394), utiles pour repérer la basilique, les places et les animations avant de partir. L'application « St Nicolas » est également signalée sur la [page officielle des festivités](https://www.saintnicolasdeport.com/fr/ev/1263095/792846/festivites-de-la-saint-nicolas-1).

## Poussette, froid, accès et retour

Le rassemblement attire de nombreux visiteurs. Un porte-bébé peut être plus pratique qu'une poussette au milieu du défilé, selon l'âge de l'enfant. Prévoyez des vêtements chauds, surtout pour la procession. Le plan municipal localise les animations, mais ne fournit pas de confirmation détaillée sur les toilettes, les tables à langer, l'accessibilité de chaque emplacement, les parkings disponibles ou toutes les rues fermées. Si l'un de ces points est indispensable, demandez confirmation à la Ville avant le déplacement.

Saint-Nicolas-de-Port est **distincte de Nancy**. La Ville mentionne les **bus SUB 23 et 24**: la 23 dessert notamment Nancy (Artem) et la 24 notamment Laneuveville. La gare ferroviaire la plus proche se situe à **Varangéville**. Vérifiez les horaires du **samedi 5 décembre**, les derniers retours et les déviations éventuelles, particulièrement si vous restez jusqu'à la procession. En voiture, consultez les consignes de stationnement actualisées plutôt que de supposer qu'une place proche du parcours sera accessible.

Les fêtes de Saint-Nicolas **à Nancy** ont leur propre programme: retrouvez les villages, illuminations et le défilé dans notre [guide des Fêtes de Saint-Nicolas 2026 à Nancy](https://www.fam-space.fr/articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/).

## Dormir à proximité après la soirée

Pour une famille venant de loin, dormir sur place peut éviter un retour tardif. La maison d'hôtes [Les Berges de l'Ô sur Booking.com](https://www.booking.com/hotel/fr/les-berges-de-l-a.fr.html), au **10 ruelle du Moulin**, annonce des chambres familiales et un parking privé gratuit. L'arrivée est indiquée **de 17 h à 21 h**: organisez l'enregistrement avant les animations qui vous intéressent et confirmez ces conditions avec l'établissement.

Les enfants y sont acceptés, mais **ceux de plus de 4 ans sont facturés au tarif adulte**. Un lit bébé est annoncé gratuit sur demande; les lits d'appoint sont payants et soumis à disponibilité. Indiquez les âges des enfants pour contrôler les couchages, les tarifs, les conditions d'annulation et la disponibilité pour la nuit **du 5 au 6 décembre 2026**.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(11)/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/index.md

---
title: "Saint-Nicolas-de-Port 2026 en famille: village, défilé et procession"
subtitle: Le 5 décembre, les horaires confirmés et les repères pour venir avec les enfants
summary: "Village gratuit de 14 h à 19 h, défilé de chars et procession aux flambeaux: les rendez-vous de la Saint-Nicolas 2026 à Saint-Nicolas-de-Port et les informations encore à confirmer."
category: evenements
location:
  city: Saint-Nicolas-de-Port
  department: Meurthe-et-Moselle
  region: Grand Est
image:
  src: "/images/articles/2026/11/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille.webp"
  alt: "Procession aux flambeaux de la Saint-Nicolas dans la basilique de Saint-Nicolas-de-Port, photographiée en décembre 2007."
sources:
  - title: Ville de Saint-Nicolas-de-Port - Festivités de la Saint-Nicolas, 5 décembre 2026
    url: https://www.saintnicolasdeport.com/fr/ev/1263095/792846/festivites-de-la-saint-nicolas-1
  - title: Ville de Saint-Nicolas-de-Port - Village de la Saint-Nicolas, 14 h à 19 h
    url: https://www.saintnicolasdeport.com/fr/nw/1263056/3010347/village-de-la-saint-nicolas-recherche-de-producteurs-et-artisans-en-gastronomie
  - title: Ville de Saint-Nicolas-de-Port - Se déplacer
    url: https://saintnicolasdeport.com/fr/rb/1023453/se-deplacer-19
eventEndsAt: 2026-12-05
topic:
  key: evenements|saint-nicolas-de-port|saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille|2026
  keywords:
    - Saint-Nicolas-de-Port 5 décembre 2026 en famille
    - festivités Saint Nicolas de Port défilé 2026
    - village Saint Nicolas de Port procession aux flambeaux
slug: saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille
status: published
publishedAt: 2026-11-02T23:31:49.325Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Saint-Nicolas-de-Port
---
<!-- article-image-credit -->
*Photo: [Antoine Taveneaux](https://commons.wikimedia.org/wiki/File:Procession-saint-nicolas4.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Le **samedi 5 décembre 2026**, Saint-Nicolas-de-Port, en Meurthe-et-Moselle, fête la Saint-Nicolas avec un village, des spectacles de rue, un défilé de chars et une procession aux flambeaux dans la basilique. **L'accès aux festivités est gratuit.** Pour une sortie avec de jeunes enfants, le village de l'après-midi est le rendez-vous dont les horaires sont déjà connus; le défilé et la procession demandent encore de vérifier le programme détaillé.

## Le village de 14 h à 19 h: le rendez-vous le plus facile à organiser

Le **Village de la Saint-Nicolas** se tiendra **place des Droits de l'Homme, de 14 h à 19 h**, le 5 décembre. La Ville annonce également des spectacles et des déambulations pendant les festivités, mais ne précise pas encore leurs horaires individuels.

Avec un bébé ou un enfant de maternelle, venir dans l'après-midi permet de profiter des stands sans devoir attendre les rendez-vous du soir. La Ville a lancé un appel à des producteurs et artisans pour proposer notamment de la petite restauration; **la liste définitive des stands n'est pas encore confirmée**. Prévoyez donc une autre solution pour le repas si nécessaire. L'accès est gratuit, mais les consommations et les achats auprès des exposants restent payants.

## Défilé de chars et procession aux flambeaux: deux moments distincts

<!-- article-image-body:01 -->

![Basilique Saint-Nicolas-de-Port illuminée de nuit, photographiée hors des festivités de 2026.](/images/articles/2026/11/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille-body-01.webp)

*Photo: [Antoine Taveneaux](https://commons.wikimedia.org/wiki/File:Basilique_Saint-Nicolas_de-Port_de_nuit_01.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le programme municipal annonce un **défilé de chars et de groupes musicaux**, ainsi que la **procession traditionnelle aux flambeaux dans la basilique**. Le premier est un spectacle de rue; la seconde est une cérémonie de tradition religieuse.

Si les enfants veulent surtout voir les chars, choisissez le défilé et repérez son parcours lorsqu'il sera publié. La procession peut intéresser les familles souhaitant découvrir cette tradition, en tenant compte de l'attente et d'un retour potentiellement tardif.

**Au 3 novembre 2026, la Ville n'indique pas encore l'heure précise ni le parcours du défilé, ni l'horaire de la procession.** La fiche municipale affiche 14 h pour le début général des festivités: ce n'est pas une heure de départ confirmée pour les chars. Ne reprenez pas les horaires d'une ancienne édition. L'organisateur propose aussi l'application « St Nicolas » pour préparer la visite.

## Poussette, foule et services sur place

La Ville présente la fête comme un événement qui rassemble de nombreux visiteurs. En cas de forte affluence, un porte-bébé peut être plus maniable qu'une poussette, selon l'âge de l'enfant. Pour les animations du soir, prévoyez des vêtements chauds et anticipez le trajet du retour.

**Les dispositifs propres au 5 décembre pour les rues fermées, le stationnement, les toilettes, les tables à langer et l'accessibilité des différents espaces ne sont pas encore détaillés.** Si ces services conditionnent votre sortie, vérifiez les dernières annonces municipales avant de partir.

## Venir à Saint-Nicolas-de-Port et repartir

Saint-Nicolas-de-Port est une commune distincte de Nancy. La Ville mentionne les **bus SUB lignes 23 et 24**: la ligne 23 relie notamment Saint-Nicolas-de-Port à Nancy (Artem), et la 24 dessert notamment Laneuveville. La gare ferroviaire la plus proche se trouve dans la commune voisine de **Varangéville**.

Ces dessertes habituelles ne garantissent pas un retour après la procession. Vérifiez les horaires du **samedi 5 décembre**, les derniers départs et les éventuelles déviations. En voiture, attendez les consignes de circulation et de stationnement propres à la fête avant de choisir un parking.

Pour les villages, les illuminations et le grand défilé **à Nancy**, notre [guide des Fêtes de Saint-Nicolas 2026 à Nancy](https://www.fam-space.fr/articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/) présente le programme de cette autre ville, sans confondre les deux événements.

## Dormir sur place pour prolonger la soirée

Pour une famille venant de loin, une nuit sur place peut éviter un retour tardif. La maison d'hôtes [Les Berges de l'Ô sur Booking.com](https://www.booking.com/hotel/fr/les-berges-de-l-a.fr.html), au **10 ruelle du Moulin**, propose des chambres familiales et un parking privé gratuit. L'arrivée est annoncée **de 17 h à 21 h**: il faut organiser l'enregistrement en fonction des festivités.

L'établissement accepte les enfants, mais **ceux de plus de 4 ans sont facturés au tarif adulte**. Un lit bébé est annoncé gratuit sur demande; les lits d'appoint sont payants et soumis à disponibilité. Renseignez l'âge de chaque enfant pour vérifier les couchages, le tarif, les conditions d'annulation et la disponibilité réelle pour la nuit du **5 au 6 décembre 2026**.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | Fêtes de Saint-Nicolas 2026 à Nancy en famille: défilé, villages et animations | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | Saint-Nicolas 2026 à Carcassonne: campements médiévaux et marche aux flambeaux en famille | evenements | Carcassonne, Aude, Occitanie
- /articles/evenements/saint-nicolas-2026-a-epinal-en-famille-defile-du-5-decembre-ou-marche-de-noel/ | Saint-Nicolas 2026 à Épinal: cortège du 5 décembre et marché de Noël en famille | evenements | Épinal, Vosges, Grand Est
- /articles/evenements/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel/ | Noël 2026 à Chambéry en famille: marchés, parade et ateliers | evenements | Chambéry, Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | Noël 2026 à Brest en famille: marché, projections et horaires | evenements | Brest, Finistère, Bretagne
- /articles/activites/port-aux-cerises-a-draveil-quelle-activite-choisir-selon-l-age-des-enfants/ | Port aux Cerises à Draveil: quelle activité choisir selon l'âge des enfants? | activites | Draveil, Essonne, Île-de-France
- /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël de Saint-Étienne 2026 en famille: trois places, horaires et accès | evenements | Saint-Étienne, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/ | Saint-Nicolas-de-Port 2026 en famille: village, défilé et procession | evenements | Saint-Nicolas-de-Port, Meurthe-et-Moselle, Grand Est
- /articles/cuisine/cuisiner-local-en-meurthe-et-moselle-producteurs-paniers-et-idees-de-repas/ | Cuisiner local en Meurthe-et-Moselle: producteurs, paniers et idées de repas | cuisine | Meurthe-et-Moselle, Grand Est
- /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | Ludothèques du Grand Nancy: où jouer en famille et emprunter des jeux | parentalite | Meurthe-et-Moselle, Grand Est
- /articles/maison/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/ | Meubles d'occasion en Meurthe-et-Moselle: où acheter, donner et réparer ? | maison | Meurthe-et-Moselle, Grand Est
- /articles/vie-pratique/se-deplacer-a-nancy-en-famille-gratuites-bus-et-parkings-relais/ | Se déplacer à Nancy en famille: gratuités, bus et parkings relais | vie-pratique | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/activites/patrimoine-en-partage-a-luneville-faut-il-inscrire-son-enfant-pour-toute-la-semaine/ | Patrimoine en partage à Lunéville: faut-il inscrire son enfant pour toute la semaine? | activites | Lunéville, Meurthe-et-Moselle, Grand Est
- /articles/evenements/nancy-jazz-pulsations-2026-en-famille-spectacles-enfants-tarifs-et-conseils/ | Nancy Jazz Pulsations 2026 en famille: spectacles enfants, tarifs et conseils | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/evenements/festival-contes-et-rencontres-2027-en-lozere-quels-spectacles-voir-en-famille/ | Festival Contes et Rencontres 2027 en Lozère: quels spectacles voir en famille ? | evenements | Lozère, Occitanie
- /articles/evenements/lumieres-d-afrique-2026-2027-a-sigean-les-lanternes-en-famille/ | Lumières d’Afrique 2026-2027 à Sigean: les lanternes en famille | evenements | Sigean, Aude, Occitanie
- /articles/evenements/natur-armor-2027-a-paimpol-preparer-sa-visite-en-famille/ | Natur’Armor 2027 à Paimpol: préparer sa visite en famille | evenements | Paimpol, Côtes-d'Armor, Bretagne
- /articles/evenements/noel-a-brive-2026-en-famille-animations-dates-et-parcours/ | Noël à Brive 2026 en famille: animations, dates et parcours | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine
- /articles/evenements/musee-maurice-denis-en-famille-decouvrir-les-nabis-a-saint-germain-en-laye/ | Musée Maurice Denis en famille: découvrir les Nabis à Saint-Germain-en-Laye | evenements | Saint-Germain-en-Laye, Yvelines, Île-de-France
- /articles/evenements/carnaval-de-guadeloupe-2027-preparer-une-premiere-sortie-avec-ses-enfants/ | Carnaval de Guadeloupe 2027: préparer une première sortie avec ses enfants | evenements | Guadeloupe
- /articles/evenements/niepce-et-apres-une-exposition-photo-a-decouvrir-en-famille-a-chalon-sur-saone/ | Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône | evenements | Chalon-sur-Saône, Saône-et-Loire, Bourgogne-Franche-Comté

### Historique Radar lié

- opportunity | /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | 2026-10-19T16:47:56.278Z
- refresh | /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | 2026-11-09T12:50:22.314Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T18:37:09.008Z
- refresh | /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | 2026-11-14T19:29:50.155Z
- refresh | /articles/maison/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/ | 2026-11-12T01:28:37.978Z
- opportunity | /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | 2026-10-30T06:28:26.726Z
- opportunity | /articles/evenements/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel/ | 2026-11-01T09:37:48.790Z
- refresh | /articles/evenements/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel/ | 2026-11-17T01:29:09.873Z
- opportunity | /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | 2026-10-27T00:35:14.931Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
