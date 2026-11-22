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
title: "Semaine du Golfe 2027 en famille: où voir les bateaux ?"
subtitle: Quatre ports à découvrir, des voiliers traditionnels et les conseils pour organiser sa visite avec des enfants
summary: Du 3 au 9 mai 2027, la Semaine du Golfe anime le Morbihan. Découvrez où observer les bateaux, quel port choisir avec des enfants et comment préparer votre séjour.
slug: semaine-du-golfe-2027-en-famille-ou-voir-les-bateaux
status: published
publishedAt: 2026-11-05T09:02:11+01:00
updatedAt: null
eventEndsAt: 2027-05-09
category: evenements
readingTime: 5
location:
  city: ""
  department: Morbihan
  region: Bretagne
topic:
  key: evenements|morbihan|semaine-du-golfe-2027-en-famille-ou-voir-les-bateaux|2026
  keywords:
    - Semaine du Golfe 2027 en famille
    - où voir les bateaux Semaine du Golfe
    - Semaine du Golfe Morbihan enfants
image:
  src: /images/articles/2026/11/semaine-du-golfe-2027-en-famille-ou-voir-les-bateaux.webp
  alt: La yole Laïssa Ana participant à la Semaine du Golfe du Morbihan en mai 2007
sources:
  - title: "Semaine du Golfe: annonce officielle de l'édition 2027"
    url: https://www.semainedugolfe.com/news-j-365-le-compte-a-rebours-est-lance-1925-621-0-0.html
  - title: "Semaine du Golfe: programme général 2027"
    url: https://www.semainedugolfe.com/general-program-2376-0-0-0.html
  - title: "Semaine du Golfe: ports et communes participants"
    url: https://www.semainedugolfe.com/participating-towns-and-harbours-1786-0-0-0.html
  - title: "Tourisme Bretagne: la Semaine du Golfe"
    url: https://www.tourismebretagne.com/selon-mes-envies/culture-et-patrimoine-de-bretagne/les-grands-evenements/la-semaine-du-golfe/
  - title: "Semaine du Golfe: les 13 flottilles"
    url: https://www.semainedugolfe.com/flottilles-1650-0-0-0.html
affiliate:
  enabled: true
  type: travel
  destination: Morbihan
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(11)/semaine-du-golfe-2027-en-famille-ou-voir-les-bateaux/index.md
  targetSha: f0c970241b453b1ed3462c31f6a73cd17236375d
  targetUrl: /articles/evenements/semaine-du-golfe-2027-en-famille-ou-voir-les-bateaux/
  decision: Choisir un port et un jour pour voir réellement les bateaux avec des enfants, sans confondre programme 2025 et édition 2027.
  affiliationPotential: Conserver les deux hébergements Booking.com existants à Vannes et Arzon; aucune nouvelle offre nécessaire.
  gsc:
    retrievedAt: 2026-11-22T01:30:56+01:00
    dataThrough: 2026-11-19
    signal: needs_query_check
    basis: "Visibilité récente : 29 impressions sur trois jours, puis 7 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-11-07
    peakEnd: 2026-11-09
    recentStart: 2026-11-17
    recentEnd: 2026-11-19
    peakImpressions: 29
    recentImpressions: 7
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Semaine du Golfe 2027 en famille
      - où voir les bateaux Semaine du Golfe
      - Semaine du Golfe Morbihan enfants
---

<!-- article-image-credit -->
*Photo: [Broenberr](https://commons.wikimedia.org/wiki/File:Yole_de_Villefranche,_Semaine_du_Golfe_du_Morbihan.JPG) - [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Du **3 au 9 mai 2027**, le golfe du Morbihan accueillera la **14e Semaine du Golfe**, une grande fête maritime où des voiliers traditionnels et des bateaux de toutes tailles naviguent entre les îles et font escale dans les ports. Pour les enfants, c'est l'occasion de découvrir de près des gréements impressionnants et l'ambiance des quais en fête.

Mais attention: les bateaux ne restent pas tous au même endroit. Pour réussir sa sortie, il faut choisir entre **observer une flottille en navigation** et **profiter d'une escale à terre**, puis consulter le programme du jour.

## Voir les bateaux naviguer ou les découvrir à quai ?

<!-- article-image-body:01 -->

![Le Corbeau des mers à quai dans le port de Vannes lors de la Semaine du Golfe 2015](/images/articles/2026/11/semaine-du-golfe-2027-en-famille-ou-voir-les-bateaux-body-01.webp)

*Photo: [Fab5669](https://commons.wikimedia.org/wiki/File:Vannes,_semaine_du_golfe_2015_-_Corbeau_des_mers_(4).JPG) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Pour voir les voiles déployées, commencez par la [liste officielle des 13 flottilles](https://www.semainedugolfe.com/flottilles-1650-0-0-0.html). Chaque flottille porte une lettre et un pavillon distinctif, et rassemble des bateaux d'un même type: par exemple les petits voiles-avirons (A), les yoles (B), les anciens bateaux de travail (C) ou les grands voiliers classiques (J). Choisissez celle que les enfants aimeraient découvrir, puis consultez son programme 2027 lorsqu'il sera publié pour connaître ses escales et ses navigations.

Les flottilles circulent entre les ports selon les vents, les marées et les courants. Un beau point de vue ne garantit donc pas leur passage au moment de votre visite. **Avant de fixer un port et un jour**, croisez l'escale ou le parcours de la flottille choisie avec le [programme maritime officiel](https://www.semainedugolfe.com/general-program-2376-0-0-0.html). À ce jour, les programmes détaillés 2027 sont encore annoncés comme à venir: n'utilisez pas les horaires ou parcours de 2025 pour organiser la sortie.

Une escale convient souvent mieux aux familles avec de jeunes enfants. On peut observer les bateaux amarrés, se promener et profiter des animations à terre. [Tourisme Bretagne](https://www.tourismebretagne.com/selon-mes-envies/culture-et-patrimoine-de-bretagne/les-grands-evenements/la-semaine-du-golfe/) présente notamment les expositions, la musique et les ateliers qui accompagnent traditionnellement la manifestation. Leur présence et leurs horaires en 2027 restent à confirmer.

La grande parade, moment emblématique des éditions précédentes, peut attirer beaucoup de monde. Ne prévoyez pas son parcours ni son horaire sur la base d'une ancienne édition.

## Quatre ports à envisager avec des enfants

<!-- article-image-body:03 -->

![Vue du port de Saint-Goustan à Auray, ses quais et ses maisons en 2010](/images/articles/2026/11/semaine-du-golfe-2027-en-famille-ou-voir-les-bateaux-body-03.webp)

*Photo: [Myrabella](https://commons.wikimedia.org/wiki/File:Auray_port_de_Saint-Goustan.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

<!-- article-image-body:02 -->

![Vue de Port-Navalo à Arzon depuis les eaux du golfe du Morbihan en 2016](/images/articles/2026/11/semaine-du-golfe-2027-en-famille-ou-voir-les-bateaux-body-02.webp)

*Photo: [Fab5669](https://commons.wikimedia.org/wiki/File:Arzon_-_Port-Navalo_(03).jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

L'[organisateur présente les 19 ports et communes participants](https://www.semainedugolfe.com/participating-towns-and-harbours-1786-0-0-0.html). Parmi eux, quatre offrent des expériences différentes.

**Vannes: une journée entre bateaux et centre-ville.** Le port est proche du cœur historique. C'est une base intéressante pour alterner découverte maritime, promenade et pauses avec les enfants. Vérifiez toutefois les bateaux et animations prévus le jour choisi.

**Port-Navalo, à Arzon: des vues sur l'entrée du golfe.** À la pointe de la presqu'île de Rhuys, ce secteur est intéressant pour regarder vers le passage entre golfe et océan. Il faudra choisir le point d'observation selon le parcours officiel et les éventuelles restrictions d'accès.

**Port-Blanc, à Baden: face à l'Île-aux-Moines.** Ce port permet d'observer l'activité maritime et, si vous le souhaitez, d'envisager une traversée vers l'île. Avec des enfants, vérifiez les départs et les conditions de réservation avant de combiner les deux activités.

**Saint-Goustan, à Auray: un port ancien plein de caractère.** Quais, pont de pierre et maisons anciennes composent un joli décor pour une promenade. Les pavés et certaines pentes peuvent toutefois compliquer les déplacements en poussette.

Aucun de ces lieux ne garantit à lui seul le passage des flottilles à une heure précise. Le meilleur choix dépendra du programme maritime publié pour votre date.

## Organiser la visite selon l'âge des enfants

**Avec un bébé ou de jeunes enfants**, préférez une escale à terre et un parcours court, avec possibilité de vous éloigner de la foule. Les quais demandent une vigilance constante près de l'eau et des amarres. Renseignez-vous sur les accès en poussette et les éventuelles zones fermées.

**Avec des enfants plus grands**, l'observation d'une flottille en mouvement peut devenir le temps fort de la journée. Des jumelles peuvent être utiles lorsque les voiliers passent au large. Complétez éventuellement par une animation dans un port, sans multiplier les déplacements.

**Pour deux jours**, consacrez idéalement chaque journée à un secteur du golfe. Passer d'une rive à l'autre en voiture peut demander un détour important, surtout lors d'un événement fréquenté.

## Où dormir pour profiter de la fête sur deux jours ?

Un hébergement proche du secteur que vous souhaitez explorer simplifie les déplacements et les repas des enfants.

À Vannes, [l'Appart'City Confort Vannes](https://www.booking.com/hotel/fr/park-amp-suites-ela-c-gance-vannes.fr.html) propose des studios et appartements avec kitchenette. C'est une option à examiner pour profiter de Vannes et de ses environs.

Sur la presqu'île de Rhuys, [les Appartements La Cigale à Arzon](https://www.booking.com/hotel/fr/residence-miramar-la-cigale.fr.html), au port du Crouesty, permettent de séjourner près du secteur de Port-Navalo. Certains logements disposent de plusieurs chambres.

Vérifiez la capacité du logement, les conditions de réservation et les disponibilités pour vos dates entre le **3 et le 9 mai 2027**. Les tarifs ne sont pas garantis à ce stade.

## Traversées, accès et météo: ce qu'il faut prévoir

Le vent peut rendre l'attente fraîche sur les quais, même en mai. Prévoyez des vêtements coupe-vent et une solution de repli en cas de pluie ou de fatigue des enfants.

La circulation, les parkings et d'éventuelles navettes peuvent être adaptés autour des ports les plus fréquentés. Consultez les informations locales à l'approche de la fête plutôt que de reprendre les dispositions d'une ancienne édition.

Une traversée vers une île ou une sortie en mer est distincte de l'observation depuis la côte. Les horaires, tarifs, conditions d'embarquement et règles pour les jeunes enfants doivent être vérifiés auprès du transporteur. Aucune offre de traversée propre à l'édition 2027 n'est confirmée ici.

## Les huîtres et la conchyliculture à l'honneur en 2027

L'[annonce officielle de la 14e édition](https://www.semainedugolfe.com/news-j-365-le-compte-a-rebours-est-lance-1925-621-0-0.html) met à l'honneur les huîtres et la conchyliculture, c'est-à-dire l'élevage des coquillages. Dégustations, visites d'exploitations ostréicoles, présentations de bateaux de travail et rencontres sont évoquées. Une belle occasion de montrer aux enfants que le golfe est aussi un lieu de travail et de savoir-faire. Les lieux, horaires et modalités de participation restent à préciser.

## Quand consulter le programme 2027 ?

Au **22 novembre 2026**, le [programme général officiel](https://www.semainedugolfe.com/general-program-2376-0-0-0.html) annonce que les détails seront publiés ultérieurement. Les **dates du 3 au 9 mai 2027** sont confirmées, mais pas les horaires de passage des bateaux devant chaque port.

Lorsque les horaires 2027 seront disponibles, vérifiez aussi les animations du port choisi et les conditions d'accès. Une dernière consultation avant le départ évitera de manquer une escale modifiée.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(11)/semaine-du-golfe-2027-en-famille-ou-voir-les-bateaux/index.md

---
title: "Semaine du Golfe 2027 en famille: où voir les bateaux ?"
subtitle: Quatre ports à découvrir, des voiliers traditionnels et les conseils pour organiser sa visite avec des enfants
summary: Du 3 au 9 mai 2027, la Semaine du Golfe anime le Morbihan. Découvrez où observer les bateaux, quel port choisir avec des enfants et comment préparer votre séjour.
slug: semaine-du-golfe-2027-en-famille-ou-voir-les-bateaux
status: published
publishedAt: 2026-11-05T09:02:11+01:00
updatedAt: null
eventEndsAt: 2027-05-09
category: evenements
readingTime: 5
location:
  city: ""
  department: Morbihan
  region: Bretagne
topic:
  key: evenements|morbihan|semaine-du-golfe-2027-en-famille-ou-voir-les-bateaux|2026
  keywords:
    - Semaine du Golfe 2027 en famille
    - où voir les bateaux Semaine du Golfe
    - Semaine du Golfe Morbihan enfants
image:
  src: "/images/articles/2026/11/semaine-du-golfe-2027-en-famille-ou-voir-les-bateaux.webp"
  alt: "La yole Laïssa Ana participant à la Semaine du Golfe du Morbihan en mai 2007"
sources:
  - title: "Semaine du Golfe: annonce officielle de l'édition 2027"
    url: https://www.semainedugolfe.com/news-j-365-le-compte-a-rebours-est-lance-1925-621-0-0.html
  - title: "Semaine du Golfe: programme général 2027"
    url: https://www.semainedugolfe.com/general-program-2376-0-0-0.html
  - title: "Semaine du Golfe: ports et communes participants"
    url: https://www.semainedugolfe.com/participating-towns-and-harbours-1786-0-0-0.html
  - title: "Tourisme Bretagne: la Semaine du Golfe"
    url: https://www.tourismebretagne.com/selon-mes-envies/culture-et-patrimoine-de-bretagne/les-grands-evenements/la-semaine-du-golfe/
affiliate:
  enabled: true
  type: travel
  destination: Morbihan
---
<!-- article-image-credit -->
*Photo: [Broenberr](https://commons.wikimedia.org/wiki/File:Yole_de_Villefranche,_Semaine_du_Golfe_du_Morbihan.JPG) - [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Du **3 au 9 mai 2027**, le golfe du Morbihan accueillera la **14e Semaine du Golfe**, une grande fête maritime où des voiliers traditionnels et des bateaux de toutes tailles naviguent entre les îles et font escale dans les ports. Pour les enfants, c'est l'occasion de découvrir de près des gréements impressionnants et l'ambiance des quais en fête.

Mais attention: les bateaux ne restent pas tous au même endroit. Pour réussir sa sortie, il faut choisir entre **observer une flottille en navigation** et **profiter d'une escale à terre**, puis consulter le programme du jour.

## Voir les bateaux naviguer ou les découvrir à quai ?

<!-- article-image-body:01 -->

![Le Corbeau des mers à quai dans le port de Vannes lors de la Semaine du Golfe 2015](/images/articles/2026/11/semaine-du-golfe-2027-en-famille-ou-voir-les-bateaux-body-01.webp)

*Photo: [Fab5669](https://commons.wikimedia.org/wiki/File:Vannes,_semaine_du_golfe_2015_-_Corbeau_des_mers_(4).JPG) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Pour voir les voiles déployées, repérez le parcours des flottilles dans le programme maritime. Les mouvements des bateaux dépendent notamment des marées et des courants: un point de vue magnifique ne garantit pas leur passage au moment de votre visite.

Une escale convient souvent mieux aux familles avec de jeunes enfants. On peut observer les bateaux amarrés, se promener et profiter des animations à terre. [Tourisme Bretagne](https://www.tourismebretagne.com/selon-mes-envies/culture-et-patrimoine-de-bretagne/les-grands-evenements/la-semaine-du-golfe/) présente notamment les expositions, la musique et les ateliers qui accompagnent traditionnellement la manifestation. Leur présence et leurs horaires en 2027 restent à confirmer.

La grande parade, moment emblématique des éditions précédentes, peut attirer beaucoup de monde. Ne prévoyez pas son parcours ni son horaire sur la base d'une ancienne édition.

## Quatre ports à envisager avec des enfants

<!-- article-image-body:03 -->

![Vue du port de Saint-Goustan à Auray, ses quais et ses maisons en 2010](/images/articles/2026/11/semaine-du-golfe-2027-en-famille-ou-voir-les-bateaux-body-03.webp)

*Photo: [Myrabella](https://commons.wikimedia.org/wiki/File:Auray_port_de_Saint-Goustan.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

<!-- article-image-body:02 -->

![Vue de Port-Navalo à Arzon depuis les eaux du golfe du Morbihan en 2016](/images/articles/2026/11/semaine-du-golfe-2027-en-famille-ou-voir-les-bateaux-body-02.webp)

*Photo: [Fab5669](https://commons.wikimedia.org/wiki/File:Arzon_-_Port-Navalo_(03).jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

L'[organisateur présente les 19 ports et communes participants](https://www.semainedugolfe.com/participating-towns-and-harbours-1786-0-0-0.html). Parmi eux, quatre offrent des expériences différentes.

**Vannes: une journée entre bateaux et centre-ville.** Le port est proche du cœur historique. C'est une base intéressante pour alterner découverte maritime, promenade et pauses avec les enfants. Vérifiez toutefois les bateaux et animations prévus le jour choisi.

**Port-Navalo, à Arzon: des vues sur l'entrée du golfe.** À la pointe de la presqu'île de Rhuys, ce secteur est intéressant pour regarder vers le passage entre golfe et océan. Il faudra choisir le point d'observation selon le parcours officiel et les éventuelles restrictions d'accès.

**Port-Blanc, à Baden: face à l'Île-aux-Moines.** Ce port permet d'observer l'activité maritime et, si vous le souhaitez, d'envisager une traversée vers l'île. Avec des enfants, vérifiez les départs et les conditions de réservation avant de combiner les deux activités.

**Saint-Goustan, à Auray: un port ancien plein de caractère.** Quais, pont de pierre et maisons anciennes composent un joli décor pour une promenade. Les pavés et certaines pentes peuvent toutefois compliquer les déplacements en poussette.

Aucun de ces lieux ne garantit à lui seul le passage des flottilles à une heure précise. Le meilleur choix dépendra du programme maritime publié pour votre date.

## Organiser la visite selon l'âge des enfants

**Avec un bébé ou de jeunes enfants**, préférez une escale à terre et un parcours court, avec possibilité de vous éloigner de la foule. Les quais demandent une vigilance constante près de l'eau et des amarres. Renseignez-vous sur les accès en poussette et les éventuelles zones fermées.

**Avec des enfants plus grands**, l'observation d'une flottille en mouvement peut devenir le temps fort de la journée. Des jumelles peuvent être utiles lorsque les voiliers passent au large. Complétez éventuellement par une animation dans un port, sans multiplier les déplacements.

**Pour deux jours**, consacrez idéalement chaque journée à un secteur du golfe. Passer d'une rive à l'autre en voiture peut demander un détour important, surtout lors d'un événement fréquenté.

## Où dormir pour profiter de la fête sur deux jours ?

Un hébergement proche du secteur que vous souhaitez explorer simplifie les déplacements et les repas des enfants.

À Vannes, [l'Appart'City Confort Vannes](https://www.booking.com/hotel/fr/park-amp-suites-ela-c-gance-vannes.fr.html) propose des studios et appartements avec kitchenette. C'est une option à examiner pour profiter de Vannes et de ses environs.

Sur la presqu'île de Rhuys, [les Appartements La Cigale à Arzon](https://www.booking.com/hotel/fr/residence-miramar-la-cigale.fr.html), au port du Crouesty, permettent de séjourner près du secteur de Port-Navalo. Certains logements disposent de plusieurs chambres.

Vérifiez la capacité du logement, les conditions de réservation et les disponibilités pour vos dates entre le **3 et le 9 mai 2027**. Les tarifs ne sont pas garantis à ce stade.

## Traversées, accès et météo: ce qu'il faut prévoir

Le vent peut rendre l'attente fraîche sur les quais, même en mai. Prévoyez des vêtements coupe-vent et une solution de repli en cas de pluie ou de fatigue des enfants.

La circulation, les parkings et d'éventuelles navettes peuvent être adaptés autour des ports les plus fréquentés. Consultez les informations locales à l'approche de la fête plutôt que de reprendre les dispositions d'une ancienne édition.

Une traversée vers une île ou une sortie en mer est distincte de l'observation depuis la côte. Les horaires, tarifs, conditions d'embarquement et règles pour les jeunes enfants doivent être vérifiés auprès du transporteur. Aucune offre de traversée propre à l'édition 2027 n'est confirmée ici.

## Les huîtres et la conchyliculture à l'honneur en 2027

L'[annonce officielle de la 14e édition](https://www.semainedugolfe.com/news-j-365-le-compte-a-rebours-est-lance-1925-621-0-0.html) met à l'honneur les huîtres et la conchyliculture, c'est-à-dire l'élevage des coquillages. Dégustations, visites d'exploitations ostréicoles, présentations de bateaux de travail et rencontres sont évoquées. Une belle occasion de montrer aux enfants que le golfe est aussi un lieu de travail et de savoir-faire. Les lieux, horaires et modalités de participation restent à préciser.

## Quand consulter le programme 2027 ?

Au **5 novembre 2026**, le [programme général officiel](https://www.semainedugolfe.com/general-program-2376-0-0-0.html) annonce que les détails seront publiés ultérieurement. Les **dates du 3 au 9 mai 2027** sont confirmées, mais pas les horaires de passage des bateaux devant chaque port.

Avant de partir, vérifiez successivement le parcours des flottilles, les animations du port choisi et les conditions d'accès. Cela vous permettra de profiter des voiliers sans risquer d'arriver après leur départ.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/festival-photo-la-gacilly-2026-en-famille/ | Festival Photo La Gacilly 2026: un parcours gratuit à hauteur d’enfant | sorties | La Gacilly, Morbihan, Bretagne
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/activites/nuits-de-branfere-2026-preparer-une-sortie-en-famille-dans-le-morbihan/ | Nuits de Branféré 2026: préparer une sortie en famille dans le Morbihan | activites | Le Guerno, Morbihan, Bretagne
- /articles/maison/fsl-dans-le-morbihan-jusqu-a-1-200-pour-entrer-dans-un-logement/ | FSL dans le Morbihan: jusqu'à 1 200 € pour entrer dans un logement | maison | Vannes, Morbihan, Bretagne
- /articles/cuisine/pommes-de-normandie-du-panier-aux-repas-de-la-semaine/ | Pommes de Normandie: du panier aux repas de la semaine | cuisine | Normandie
- /articles/sorties/grottes-de-gargas-en-famille-voir-les-mains-prehistoriques-et-decouvrir-nestploria/ | Grottes de Gargas en famille: voir les mains préhistoriques et découvrir Nestploria | sorties | Aventignan, Hautes-Pyrénées, Occitanie
- /articles/evenements/festival-interceltique-lorient-2026-en-famille/ | Festival Interceltique de Lorient 2026: quels rendez-vous choisir avec des enfants ? | evenements | Lorient, Morbihan, Bretagne
- /articles/activites/aquarium-de-touraine-en-famille-que-voir-avec-les-enfants/ | Aquarium de Touraine en famille: que voir avec les enfants ? | activites | Lussault-sur-Loire, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/semaine-du-golfe-2027-en-famille-ou-voir-les-bateaux/ | Semaine du Golfe 2027 en famille: où voir les bateaux ? | evenements | Morbihan, Bretagne
- /articles/voyages/belle-ile-en-mer-en-famille-sans-voiture-ferry-et-deplacements/ | Belle-Île-en-Mer en famille sans voiture: ferry et déplacements | voyages | Le Palais, Morbihan, Bretagne
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne
- /articles/sorties/cite-de-la-voile-eric-tabarly-en-famille-quel-parcours-selon-l-age/ | Cité de la Voile Éric Tabarly en famille: quel parcours selon l'âge? | sorties | Lorient, Morbihan, Bretagne
- /articles/bons-plans/les-terres-de-natae-les-reductions-famille-a-connaitre-avant-de-reserver/ | Les Terres de Nataé: les réductions famille à connaître avant de réserver | bons-plans | Pont-Scorff, Morbihan, Bretagne
- /articles/parentalite/mode-de-garde-a-vannes-quand-contacter-le-relais-petite-enfance/ | Mode de garde à Vannes: quand contacter le Relais Petite Enfance ? | parentalite | Vannes, Morbihan, Bretagne
- /articles/cuisine/gouter-breton-aux-halles-des-lices-a-vannes-quoi-acheter-et-quand-venir/ | Goûter breton aux Halles des Lices à Vannes: quoi acheter et quand venir? | cuisine | Vannes, Morbihan, Bretagne
- /articles/evenements/festival-contes-et-rencontres-2027-en-lozere-quels-spectacles-voir-en-famille/ | Festival Contes et Rencontres 2027 en Lozère: quels spectacles voir en famille ? | evenements | Lozère, Occitanie
- /articles/evenements/lumieres-d-afrique-2026-2027-a-sigean-les-lanternes-en-famille/ | Lumières d’Afrique 2026-2027 à Sigean: les lanternes en famille | evenements | Sigean, Aude, Occitanie
- /articles/evenements/natur-armor-2027-a-paimpol-preparer-sa-visite-en-famille/ | Natur’Armor 2027 à Paimpol: préparer sa visite en famille | evenements | Paimpol, Côtes-d'Armor, Bretagne
- /articles/evenements/noel-a-brive-2026-en-famille-animations-dates-et-parcours/ | Noël à Brive 2026 en famille: animations, dates et parcours | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine
- /articles/evenements/musee-maurice-denis-en-famille-decouvrir-les-nabis-a-saint-germain-en-laye/ | Musée Maurice Denis en famille: découvrir les Nabis à Saint-Germain-en-Laye | evenements | Saint-Germain-en-Laye, Yvelines, Île-de-France
- /articles/evenements/carnaval-de-guadeloupe-2027-preparer-une-premiere-sortie-avec-ses-enfants/ | Carnaval de Guadeloupe 2027: préparer une première sortie avec ses enfants | evenements | Guadeloupe
- /articles/evenements/niepce-et-apres-une-exposition-photo-a-decouvrir-en-famille-a-chalon-sur-saone/ | Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône | evenements | Chalon-sur-Saône, Saône-et-Loire, Bourgogne-Franche-Comté

### Historique Radar lié

- refresh | /articles/voyages/belle-ile-en-mer-en-famille-sans-voiture-ferry-et-deplacements/ | 2026-11-11T14:37:08.889Z
- refresh | /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | 2026-11-15T12:33:21.761Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
