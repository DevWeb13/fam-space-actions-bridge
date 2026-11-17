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
title: "Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël"
subtitle: Dates, rencontres avec le Père Noël, accès en tram et conseils pour les enfants place Victor-Hugo
summary: Du 20 novembre au 24 décembre 2026, le marché de Noël de Grenoble accueille gratuitement les familles place Victor-Hugo. Contes pour les 0-4 ans, ateliers créatifs, Lego et rencontres avec le Père Noël permettent de choisir sa date; fermeture à 17 h le 24 décembre.
category: evenements
location:
  city: Grenoble
  department: Isère
  region: Auvergne-Rhône-Alpes
image:
  src: /images/articles/2026/10/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel.webp
  alt: Place Victor-Hugo à Grenoble photographiée en avril 2026, sans marché de Noël
sources:
  - title: Grenoble Alpes Tourisme - Marché de Noël de Grenoble 2026 et programme des animations
    url: https://www.grenoble-tourisme.com/fr/decouvrir/evenements/agenda/detail/spectacles/marche-de-noel-de-grenoble-258480/
  - title: Grenoble Alpes Tourisme - Le Père Noël au marché de Noël de Grenoble
    url: https://www.grenoble-tourisme.com/fr/catalogue/detail/le-pere-noel-marche-de-noel-de-grenoble-6348212/
  - title: Ville de Grenoble - Convention du marché de Noël 2026, horaires et fermeture du 24 décembre
    url: https://www.grenoble.fr/uploads/AnnonceFichier/anf_fichier/95/97_947_Anx-1-conv_chalet-et-espace-nu-2.pdf
  - title: RockyPop Grenoble - Types de chambres et appartements
    url: https://www.rockypop.com/grenoble/dormir/
eventEndsAt: 2026-12-24
reviewAt: 2026-11-18
topic:
  key: evenements|grenoble|marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel|2026
  keywords:
    - marché de Noël Grenoble 2026
    - Père Noël Grenoble 2026
    - marché de Noël Grenoble horaires famille
slug: marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel
status: published
publishedAt: 2026-10-29T00:28:19.615Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Grenoble
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/index.md
  targetSha: 80f3048539fd2486dd27d9cfe6e638c2303d7259
  targetUrl: /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/
  decision: Choisir une date de visite adaptée à l'âge des enfants grâce au programme gratuit désormais publié, sans confondre horaires du marché, animations et présence du Père Noël.
  affiliationPotential: Conserver le conseil d'hébergement RockyPop Grenoble avec Booking.com, sans ajouter d'offre artificielle pour un marché gratuit.
  gsc:
    retrievedAt: 2026-11-17T04:29:30+01:00
    dataThrough: 2026-11-14
    signal: needs_query_check
    basis: "Visibilité récente : 26 impressions sur trois jours, puis 2 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-31
    peakEnd: 2026-11-02
    recentStart: 2026-11-12
    recentEnd: 2026-11-14
    peakImpressions: 26
    recentImpressions: 2
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - marché de Noël Grenoble 2026
      - Père Noël Grenoble 2026
      - marché de Noël Grenoble horaires famille
---

Le **marché de Noël de Grenoble** se tient **place Victor-Hugo du 20 novembre au 24 décembre 2026**. L'entrée est gratuite, tout comme les animations annoncées et les rencontres avec le Père Noël. Pour choisir une sortie adaptée aux enfants, le [programme de Grenoble Alpes Tourisme](https://www.grenoble-tourisme.com/fr/decouvrir/evenements/agenda/detail/spectacles/marche-de-noel-de-grenoble-258480/) permet désormais de repérer des contes selon l'âge, des ateliers créatifs et des moments festifs.

## Quelle date choisir avec des enfants ?

Voici quelques rendez-vous gratuits parmi le programme publié, au chalet animation sauf indication contraire :

- **Dimanche 22 novembre, de 14 h 30 à 17 h 30 :** atelier macramé pour créer des décorations de Noël.
- **Mercredi 25 novembre, de 15 h 30 à 16 h 15 :** conte musical *Le Rutabaga*, annoncé pour les **0-6 ans**.
- **Dimanche 29 novembre, de 15 h à 18 h :** fabrication d'une couronne en rotin, **à partir de 7 ans**.
- **Mercredi 2 décembre, de 15 h 30 à 17 h 30 :** conte *Le Conte chaud et doux des chaudoudoux*, **dès 3 ans**. Une autre séance est annoncée le **23 décembre** aux mêmes horaires.
- **Mercredis 9 et 16 décembre, de 15 h 30 à 17 h 30 :** contes et comptines du vivant pour les **0-4 ans**.
- **Dimanche 13 décembre, de 15 h à 18 h :** construction Lego sur le thème de Noël.
- **Samedi 19 décembre, de 14 h 30 à 17 h 30 :** déambulation poétique et burlesque pour toute la famille, dans les allées du marché.

Les animations sont annoncées **en accès libre**. Leur durée correspond au créneau publié, sans garantir qu'un atelier puisse accueillir chaque enfant à tout moment. Pour une visite avec un tout-petit, le conte du 25 novembre ou ceux des 9 et 16 décembre constituent des choix particulièrement adaptés. Le programme complet peut évoluer : consultez la [fiche officielle](https://www.grenoble-tourisme.com/fr/decouvrir/evenements/agenda/detail/spectacles/marche-de-noel-de-grenoble-258480/) avant de partir.

## Quand rencontrer le Père Noël ?

Le Père Noël est annoncé dans son chalet et en déambulation **les mercredis, samedis et dimanches de 14 h à 19 h**. Les enfants peuvent lui remettre leur lettre. La [fiche dédiée](https://www.grenoble-tourisme.com/fr/catalogue/detail/le-pere-noel-marche-de-noel-de-grenoble-6348212/) mentionne la période du **21 novembre au 23 décembre** : il ne faut pas supposer qu'il sera présent tous les jours.

**Le 24 décembre**, le programme général précise deux créneaux exceptionnels pour le Père Noël : **10 h à 12 h et 14 h à 16 h**. Le marché, lui, ferme à **17 h**. Ces horaires sont distincts de ceux des chalets et des animations.

Une promenade un autre jour reste possible pour découvrir les créations artisanales, les cadeaux et les spécialités gourmandes, sans rencontre garantie avec le Père Noël.

## Horaires du marché et budget

Les chalets sont habituellement ouverts :

- **Lundi, mardi, mercredi et dimanche : de 10 h à 20 h.**
- **Jeudi, vendredi et samedi : de 10 h à 21 h.**
- **24 décembre : fermeture de tous les espaces à 17 h.**

Grenoble Alpes Tourisme annonce également la **buvette et la petite restauration jusqu'à 22 h**, ainsi que la **restauration assise en salle jusqu'à minuit**, hors fermeture exceptionnelle du 24 décembre. L'entrée et les animations annoncées sont gratuites, mais les boissons, repas et achats sont payants. Il n'existe pas de prix unique pour les chalets.

## Accès place Victor-Hugo avec des enfants

<!-- article-image-body:01 -->

![Tramway de la ligne B à la station Victor Hugo à Grenoble en 2010](/images/articles/2026/10/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel-body-01.webp)

<!-- /article-image-body:01 -->

Le marché se trouve **place Victor-Hugo, 38000 Grenoble**, en centre-ville. Les **trams A, B et D** et plusieurs lignes de bus desservent le secteur. Venir en tram permet d'éviter la recherche de stationnement à proximité des chalets.

La visite se déroule dehors. Avec une poussette, les allées peuvent être moins faciles à parcourir lorsqu'elles sont fréquentées. Pour un bébé, prévoyez son repas ou son biberon : **aucun micro-ondes, espace de change ou service de chauffe-biberon n'est confirmé** dans les informations officielles consultées.

## Prolonger la sortie à Grenoble

Pour les familles qui passent la nuit sur place, le **RockyPop Grenoble Hotel**, rue de Strasbourg, propose des chambres communicantes pour quatre personnes et des hébergements familiaux. Vous pouvez [consulter le RockyPop sur Booking.com](https://www.booking.com/hotel/fr/rockypop-grenoble.html) et vérifier la configuration, les tarifs et les disponibilités pour vos dates et l'âge des enfants.

Pour organiser une visite de la Bastille, d'un musée ou choisir un parking-relais, consultez le [guide Grenoble en famille](/destinations/auvergne-rhone-alpes/isere/grenoble/).

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/index.md

---
title: "Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël"
subtitle: Dates, rencontres avec le Père Noël, accès en tram et conseils pour les enfants place Victor-Hugo
summary: Du 20 novembre au 24 décembre 2026, le marché de Noël de Grenoble est gratuit place Victor-Hugo. Le Père Noël est annoncé les mercredis et week-ends, de 14 h à 19 h, entre le 21 novembre et le 23 décembre. Le marché ferme à 17 h le 24 décembre.
category: evenements
location:
  city: Grenoble
  department: Isère
  region: Auvergne-Rhône-Alpes
image:
  src: "/images/articles/2026/10/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel.webp"
  alt: "Place Victor-Hugo à Grenoble photographiée en avril 2026, sans marché de Noël"
sources:
  - title: Grenoble Alpes Tourisme - Marché de Noël de Grenoble 2026
    url: https://www.grenoble-tourisme.com/fr/catalogue/detail/marche-de-noel-de-grenoble-258480/
  - title: Grenoble Alpes Tourisme - Le Père Noël au marché de Noël de Grenoble
    url: https://www.grenoble-tourisme.com/fr/catalogue/detail/le-pere-noel-marche-de-noel-de-grenoble-6348212/
  - title: Ville de Grenoble - Convention du marché de Noël 2026, horaires et fermeture du 24 décembre
    url: https://www.grenoble.fr/uploads/AnnonceFichier/anf_fichier/95/97_947_Anx-1-conv_chalet-et-espace-nu-2.pdf
  - title: RockyPop Grenoble - Types de chambres et appartements
    url: https://www.rockypop.com/grenoble/dormir/
eventEndsAt: 2026-12-24
reviewAt: 2026-11-18
topic:
  key: evenements|grenoble|marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel|2026
  keywords:
    - marché de Noël Grenoble 2026
    - Père Noël Grenoble 2026
    - marché de Noël Grenoble horaires famille
slug: marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel
status: published
publishedAt: 2026-10-29T00:28:19.615Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Grenoble
---

Le **marché de Noël de Grenoble** accueille les familles **place Victor-Hugo du 20 novembre au 24 décembre 2026**. L'entrée est gratuite: les chalets proposent des créations artisanales, des cadeaux et des spécialités gourmandes. Pour rencontrer le Père Noël, mieux vaut choisir un mercredi ou un week-end plutôt que de venir au hasard.

## Quand rencontrer le Père Noël ?

Le Père Noël est annoncé dans son chalet et en déambulation **les mercredis, samedis et dimanches de 14 h à 19 h**. Les enfants peuvent lui remettre leur lettre. La fiche de Grenoble Alpes Tourisme présente ces rencontres **du 21 novembre au 23 décembre 2026**, tandis que son encadré d'ouverture indique la période plus large du marché. Si vous venez spécialement pour lui, vérifiez les dates sur la fiche officielle avant de partir: **il n'est pas annoncé chaque jour**.

Pour simplement découvrir les stands, le marché ouvre aussi les autres jours de la semaine. Un jour sans rencontre annoncée peut convenir à une promenade plus souple, sans garantir une affluence moindre.

## Horaires du marché et budget

Les chalets ouvrent habituellement:

- **Lundi, mardi, mercredi et dimanche: 10 h à 20 h.**
- **Jeudi, vendredi et samedi: 10 h à 21 h.**
- **Jeudi 24 décembre: fermeture anticipée à 17 h**, selon la convention officielle 2026 publiée par la Ville de Grenoble.

L'entrée au marché et les rencontres annoncées avec le Père Noël sont **gratuites**. Boissons, restauration et achats aux chalets sont payants; aucun tarif unique ne s'applique. Le programme des autres animations reste indiqué comme « à venir » par Grenoble Alpes Tourisme: ne prévoyez pas un atelier ou un spectacle précis sans confirmation.

## Accès place Victor-Hugo avec des enfants

<!-- article-image-body:01 -->

![Tramway de la ligne B à la station Victor Hugo à Grenoble en 2010](/images/articles/2026/10/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel-body-01.webp)

<!-- /article-image-body:01 -->

Le marché est situé **place Victor-Hugo, 38000 Grenoble**, en centre-ville. Grenoble Alpes Tourisme indique les **trams A, B et D** et plusieurs lignes de bus pour rejoindre le secteur. Le tram évite d'avoir à chercher une place de stationnement près des chalets.

La visite se déroule dehors. Avec une poussette, les allées peuvent être moins faciles à parcourir lorsque le marché est fréquenté. Pour un bébé, prévoyez son repas ou son biberon: **aucun micro-ondes, espace de change ou service de chauffe-biberon n'est confirmé** par les informations officielles consultées. Il ne faut donc pas compter sur ces équipements sur place.

## Rester une nuit à Grenoble

Pour transformer la sortie en week-end, le **RockyPop Grenoble Hotel**, rue de Strasbourg, propose des chambres communicantes pour quatre personnes et des hébergements familiaux. Vous pouvez [voir les hébergements RockyPop sur Booking.com](https://www.booking.com/hotel/fr/rockypop-grenoble.html) et vérifier la configuration, les tarifs et les disponibilités selon vos dates et l'âge des enfants.

Pour compléter la journée avec la Bastille ou un musée, ou choisir un parking-relais, consultez le [guide Grenoble en famille](/destinations/auvergne-rhone-alpes/isere/grenoble/).

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | Noël 2026 à Brest en famille: marché, projections et horaires | evenements | Brest, Finistère, Bretagne
- /articles/evenements/noel-a-orleans-2026-en-famille-marches-horaires-et-maneges-apres-noel/ | Marché de Noël d’Orléans 2026 en famille: horaires, lieux et manèges | evenements | Orléans, Loiret, Centre-Val de Loire
- /articles/sorties/ete-oh-parcs-grenoble-2026-famille/ | L’Été Oh! Parcs Grenoble 2026: horaires et activités gratuites | sorties | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-montpellier-2026-en-famille-dates-fermetures-et-attractions/ | Marché de Noël de Montpellier 2026 en famille: horaires, jours fermés et manèges | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | Foire de Grenoble 2026 en famille: jours gratuits, programme et tarifs | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/bons-plans/carte-tattoo-isere-2026-2027-comment-obtenir-60-a-120-pour-les-activites-d-un-collegien/ | Carte Tattoo Isère 2026-2027: comment obtenir 60 à 120 € pour les activités d'un collégien | bons-plans | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-a-grenoble-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP à Grenoble: où aller avec un enfant de moins de 6 ans? | parentalite | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/cuisine/3-recettes-de-l-isere-faciles-a-preparer-en-famille/ | 3 recettes de l'Isère faciles à préparer en famille | cuisine | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/activites/cremieu-en-famille-balade-gratuite-dans-la-cite-medievale/ | Crémieu en famille: balade gratuite dans la cité médiévale | activites | Crémieu, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans/ | Foulée Blanche 2027 en famille: courses, âges, tarifs et programme à Autrans | evenements | Autrans-Méaudre en Vercors, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | Festival du Film pour Enfants 2026 en Isère: séances, ateliers et tarifs | evenements | Vizille, Isère, Auvergne-Rhône-Alpes
- /articles/voyages/chamrousse-en-famille-quel-secteur-choisir-pour-l-hiver-2026-2027/ | Chamrousse en famille: quel secteur choisir pour l'hiver 2026-2027? | voyages | Chamrousse, Isère, Auvergne-Rhône-Alpes
- /articles/sorties/walibi-rhone-alpes-en-famille-quel-billet-choisir-selon-la-taille-des-enfants/ | Walibi Rhône-Alpes en famille: attractions, tailles et billets en 2026 | sorties | Les Avenières Veyrins-Thuellin, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/carnaval-de-guadeloupe-2027-preparer-une-premiere-sortie-avec-ses-enfants/ | Carnaval de Guadeloupe 2027: préparer une première sortie avec ses enfants | evenements | Guadeloupe
- /articles/evenements/niepce-et-apres-une-exposition-photo-a-decouvrir-en-famille-a-chalon-sur-saone/ | Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône | evenements | Chalon-sur-Saône, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-puy-du-fou-en-famille-spectacles-et-visite-en-hiver/ | Noël 2026 au Puy du Fou en famille: spectacles et visite en hiver | evenements | Les Epesses, Vendée, Pays de la Loire
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | 2026-10-17T15:41:33.883Z
- opportunity | /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | 2026-10-21T13:33:34.395Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/marche-de-noel-de-montpellier-2026-en-famille-dates-fermetures-et-attractions/ | 2026-10-29T08:29:37.767Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | 2026-10-30T06:28:26.726Z
- opportunity | /articles/evenements/noel-a-orleans-2026-en-famille-marches-horaires-et-maneges-apres-noel/ | 2026-10-25T07:29:47.050Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
