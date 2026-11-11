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
title: "Ateliers de cuisine parent-enfant à Toulouse: chocolat, pâtisserie ou menu complet ?"
subtitle: Deux ateliers, des cours à 70 ou 76 € le duo et des réservations à vérifier selon l'âge
summary: "À Toulouse, comparez les ateliers parent-enfant de L’atelier Gourmand et de L’atelier des Chefs: recettes, prix par duo, durée, âge, dates et inscription."
slug: ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet
status: published
publishedAt: 2026-11-01T12:00:47+01:00
updatedAt: null
category: cuisine
readingTime: 4
location:
  city: Toulouse
  department: Haute-Garonne
  region: Occitanie
topic:
  key: cuisine|toulouse|ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet|2026
  keywords:
    - atelier cuisine parent enfant Toulouse
    - cours pâtisserie enfant Toulouse
    - atelier chocolat en famille Toulouse
image:
  src: /images/articles/2026/11/ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet.webp
  alt: Façade du Capitole de Toulouse et croix occitane sur la place; vue de la ville, sans représenter les ateliers culinaires.
sources:
  - title: L’atelier Gourmand Toulouse - programme adulte-enfant
    url: https://www.atelier-gourmand.fr/nos-ateliers/cours-cuisine-toulouse/programme/adulte/enfant-634
  - title: L’atelier Gourmand - macarons du 29 décembre 2026
    url: https://www.atelier-gourmand.fr/nos-ateliers/cours-cuisine-toulouse/programme/details/adulteenfant-1-inscription-par-binome-les-macarons-extraordinaires-sapin-et-bonhomme-de-neige-115416
  - title: L’atelier Gourmand - atelier Tout choco !
    url: https://www.atelier-gourmand.fr/nos-ateliers/cours-cuisine-toulouse/programme/details/adulteenfant-1-inscription-par-binome-tout-choco-71496
  - title: L’atelier Gourmand Toulouse - accès et contact
    url: https://www.atelier-gourmand.fr/nos-ateliers/cours-cuisine-toulouse/contact
  - title: L’atelier des Chefs - séance du 25 novembre 2026
    url: https://www.atelierdeschefs.fr/cours-de-cuisine/343738/parents-enfants-5-12-ans/
  - title: L’atelier des Chefs - séance du 13 décembre à 15 h
    url: https://www.atelierdeschefs.fr/cours-de-cuisine/344124/parent-enfant/
  - title: L’atelier des Chefs - séance du 13 décembre à 17 h 30
    url: https://www.atelierdeschefs.fr/cours-de-cuisine/344150/parent-enfant/
  - title: L’atelier des Chefs - Toulouse François Verdier, accès et contact
    url: https://www.atelierdeschefs.fr/ateliers/46/toulouse-francois-verdier/
affiliate:
  enabled: true
  type: travel
  destination: Toulouse
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/cuisine/(2026)/(11)/ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet/index.md
  targetSha: d92dbe68ceec6e85942d291fa5c0724276d049a6
  targetUrl: /articles/cuisine/ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet/
  decision: Choisir une séance parent-enfant réellement réservable à Toulouse selon l'âge, le thème, le budget et le fait de manger sur place ou d'emporter, sans confondre préinscription et place confirmée.
  affiliationPotential: Conserver l'hébergement familial Clément Ader sur Booking.com pour un séjour à Toulouse; aucun partenaire de billetterie confirmé pour les deux ateliers, garder leurs réservations directes.
  gsc:
    retrievedAt: 2026-11-11T02:29:19+01:00
    dataThrough: 2026-11-08
    signal: uncertain
    basis: "Visibilité récente : 34 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-03
    peakEnd: 2026-11-05
    recentStart: 2026-11-06
    recentEnd: 2026-11-08
    peakImpressions: 34
    recentImpressions: 0
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - atelier cuisine enfant toulouse
      - atelier cuisine ecole clae toulouse
      - cours de cuisine enfant toulouse
      - cours patisserie toulouse
      - stage patisserie toulouse
reviewAt: 2026-12-14
---

Envie de préparer un dessert ou un repas avec votre enfant sans organiser toute la cuisine à la maison ? À Toulouse, L’atelier Gourmand et L’atelier des Chefs proposent des cours à quatre mains. Pour choisir, regardez d'abord **l'âge admis, le thème et le statut de l'inscription**: une date affichée ne garantit pas qu'une réservation soit confirmée.

## L’atelier Gourmand: chocolat, macarons ou cuisine salée pendant 2 h

<!-- article-image-body:01 -->

![Coques de macarons photographiées pendant une préparation de pâtisserie, sans lien avec l’établissement toulousain.](/images/articles/2026/11/ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet-body-01.webp)

*Photo: [Hcallas](https://commons.wikimedia.org/wiki/File:French_Macaron.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

À Lardenne, le [programme adulte-enfant de L’atelier Gourmand](https://www.atelier-gourmand.fr/nos-ateliers/cours-cuisine-toulouse/programme/adulte/enfant-634) propose des cours de **2 h à 70 € par binôme**, soit un adulte et un enfant pour une inscription. Les thèmes comprennent « Tout choco ! », les macarons, les sushis et makis et la préparation d'un repas complet. « Mon délicieux repas » est annoncé pour les **6-12 ans**; pour les autres thèmes, confirmez l'âge admis auprès de l'atelier.

Une séance de [macarons de Noël est annoncée le mardi 29 décembre 2026 de 14 h à 16 h](https://www.atelier-gourmand.fr/nos-ateliers/cours-cuisine-toulouse/programme/details/adulteenfant-1-inscription-par-binome-les-macarons-extraordinaires-sapin-et-bonhomme-de-neige-115416), à **70 € le binôme**. La fiche présente un bouton « Réserver ce cours » et demande d'apporter **deux torchons**. Vérifiez le statut réel des places avant de payer.

Pour le chocolat, [« Tout choco ! »](https://www.atelier-gourmand.fr/nos-ateliers/cours-cuisine-toulouse/programme/details/adulteenfant-1-inscription-par-binome-tout-choco-71496) comprend notamment un coulant au chocolat, une tartelette au caramel et une confiserie maison. La fiche demande **deux ramequins et trois boîtes hermétiques**, dont deux de 0,5 litre, pour emporter les préparations. Consultez le programme pour les prochaines dates plutôt que de compter sur un créneau ancien.

**Accès:** 1 impasse de Lisieux, 31300 Toulouse. L'établissement indique un parking privé gratuit, l'arrêt de bus Tissié et la gare du TOEC sur sa [page de contact](https://www.atelier-gourmand.fr/nos-ateliers/cours-cuisine-toulouse/contact).

## L’atelier des Chefs: un menu en duo en 1 h 30

<!-- article-image-body:02 -->

![Mousse au chocolat maison préparée avec des blancs d’œufs en neige, illustration d’un dessert proposé dans les menus.](/images/articles/2026/11/ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet-body-02.webp)

*Photo: [Thesupermat](https://commons.wikimedia.org/wiki/File:Mousse_au_chocolat_-_Patisserie_-_005.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Au **5 rue Idrac**, près de François-Verdier, L’atelier des Chefs propose des séances de **1 h 30 à 76 € par duo**. Une réservation correspond à un adulte et un enfant. Trois séances permettent de comparer les formules:

- **Mercredi 25 novembre 2026, 15 h 30-17 h:** [saumon croustillant au sésame, carottes au gingembre, mousse au chocolat et lassi à la framboise](https://www.atelierdeschefs.fr/cours-de-cuisine/343738/parents-enfants-5-12-ans/). Préparations **à emporter**; la fiche affiche « Réserver ».
- **Dimanche 13 décembre 2026, 15 h-16 h 30:** [cari de volaille, riz parfumé, financiers au chocolat et lassi](https://www.atelierdeschefs.fr/cours-de-cuisine/344124/parent-enfant/). **Dégustation sur place**, mais la fiche propose « Se pré-inscrire »: ce n'est pas une place confirmée.
- **Dimanche 13 décembre 2026, 17 h 30-19 h:** [volaille au pain d'épice, cupcake chocolat blanc-framboise et chocolat chaud](https://www.atelierdeschefs.fr/cours-de-cuisine/344150/parent-enfant/). Préparations **à emporter**, avec préinscription également.

Les disponibilités évoluent: distinguez le bouton **« Réserver »**, la **préinscription** et l'**inscription sur liste d'attente**. Une indication de places sur une fiche ne dispense pas de vérifier l'étape finale de réservation.

Attention à l'âge: le titre du cours du 25 novembre indique **5-12 ans**, mais son descriptif mentionne **5 à 10 ans**. Pour un enfant de 11 ou 12 ans, demandez confirmation à l'équipe avant toute inscription.

**Accès:** 5 rue Idrac, 31000 Toulouse. La [fiche de l'établissement](https://www.atelierdeschefs.fr/ateliers/46/toulouse-francois-verdier/) fournit les transports et les coordonnées pour joindre l'équipe.

## Choisir selon le projet et les contraintes de l'enfant

Pour **préparer surtout des desserts**, L’atelier Gourmand offre plusieurs thèmes ciblés, notamment le chocolat et les macarons. Pour **cuisiner un repas et le manger ensemble**, choisissez un cours de L’atelier des Chefs explicitement annoncé avec « dégustation sur place ». Les deux adresses proposent aussi du salé: vérifiez le menu précis du jour.

Côté budget, comptez **70 € pour 2 h** à L’atelier Gourmand ou **76 € pour 1 h 30** à L’atelier des Chefs, selon les séances citées. Ces montants couvrent chacun **un adulte et un enfant**, et non deux billets individuels.

En cas d'allergie ou de restriction alimentaire, examinez les recettes puis contactez l'organisateur. Le cours du **25 novembre** chez L’atelier des Chefs mentionne notamment **sésame, amandes et amaretto**: demandez expressément si une préparation adaptée, notamment sans alcool, est possible pour l'enfant. Ne supposez pas qu'une adaptation est prévue. Pensez également aux contenants demandés pour les cours à emporter.

## Prolonger la sortie par un séjour à Toulouse

Pour les familles venant de plus loin, l'[Appart Hôtel Clément Ader sur Booking.com](https://www.booking.com/hotel/fr/privilege-appart-clement-ader.fr.html), au 23 rue Bayard, propose des appartements avec cuisine équipée et micro-ondes, dont des logements adaptés aux familles. Vérifiez la capacité et les disponibilités pour vos dates: l'adresse est dans le centre de Toulouse, et non juste à côté des deux ateliers.

Pour compléter le week-end, retrouvez d'autres idées de visites dans notre [guide de Toulouse en famille](https://www.fam-space.fr/destinations/occitanie/haute-garonne/toulouse/).

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/cuisine/(2026)/(11)/ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet/index.md

---
title: "Ateliers de cuisine parent-enfant à Toulouse: chocolat, pâtisserie ou menu complet ?"
subtitle: Deux adresses pour cuisiner à quatre mains, avec les prix, les âges et les séances à comparer
summary: À Toulouse, deux ateliers proposent de cuisiner en duo parent-enfant. Comparez les recettes, les tarifs, les âges, les durées et les modalités de réservation.
slug: ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet
status: published
publishedAt: 2026-11-01T12:00:47+01:00
updatedAt: null
category: cuisine
readingTime: 4
location:
  city: Toulouse
  department: Haute-Garonne
  region: Occitanie
topic:
  key: cuisine|toulouse|ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet|2026
  keywords:
    - atelier cuisine parent enfant Toulouse
    - cours pâtisserie enfant Toulouse
    - atelier chocolat en famille Toulouse
image:
  src: "/images/articles/2026/11/ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet.webp"
  alt: "Façade du Capitole de Toulouse et croix occitane sur la place; vue de la ville, sans représenter les ateliers culinaires."
sources:
  - title: L’atelier Gourmand Toulouse - programme adulte-enfant
    url: https://www.atelier-gourmand.fr/nos-ateliers/cours-cuisine-toulouse/programme/adulte/enfant-634
  - title: L’atelier Gourmand - atelier Tout choco !
    url: https://www.atelier-gourmand.fr/nos-ateliers/cours-cuisine-toulouse/programme/details/adulteenfant-1-inscription-par-binome-tout-choco-71496
  - title: L’atelier Gourmand Toulouse - accès et contact
    url: https://www.atelier-gourmand.fr/nos-ateliers/cours-cuisine-toulouse/contact
  - title: L’atelier des Chefs - séance parents-enfants du 25 novembre 2026
    url: https://www.atelierdeschefs.fr/cours-de-cuisine/343738/parents-enfants-5-12-ans/
  - title: L’atelier des Chefs - séance parent-enfant du 13 décembre 2026
    url: https://www.atelierdeschefs.fr/cours-de-cuisine/344124/parent-enfant/
  - title: L’atelier des Chefs - séance parent-enfant à emporter du 13 décembre 2026
    url: https://www.atelierdeschefs.fr/cours-de-cuisine/344150/parent-enfant/
  - title: L’atelier des Chefs - Toulouse François Verdier, accès et contact
    url: https://www.atelierdeschefs.fr/ateliers/46/toulouse-francois-verdier/
affiliate:
  enabled: true
  type: travel
  destination: Toulouse
---

Envie de préparer un dessert ou un repas avec votre enfant, sans avoir à tout organiser à la maison ? À Toulouse, L’atelier Gourmand et L’atelier des Chefs proposent des cours où un adulte et un enfant cuisinent ensemble. Les deux adresses se distinguent surtout par les recettes, la durée et la possibilité de déguster sur place ou d'emporter ses préparations.

## L’atelier Gourmand: chocolat, macarons ou cuisine salée pendant 2 h

<!-- article-image-body:01 -->

![Coques de macarons photographiées pendant une préparation de pâtisserie, sans lien avec l’établissement toulousain.](/images/articles/2026/11/ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet-body-01.webp)

*Photo: [Hcallas](https://commons.wikimedia.org/wiki/File:French_Macaron.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

À Lardenne, le [programme adulte-enfant de L’atelier Gourmand](https://www.atelier-gourmand.fr/nos-ateliers/cours-cuisine-toulouse/programme/adulte/enfant-634) propose des cours de **2 h à 70 € par binôme**. Une inscription comprend un adulte et un enfant.

Les amateurs de desserts peuvent choisir « Tout choco ! » ou « Les macarons ». Pour changer du sucré, d'autres séances portent sur les sushis et makis ou la préparation d'un repas complet. Le cours « Mon délicieux repas » est annoncé pour les **6-12 ans**; les âges acceptés pour les autres thèmes sont à confirmer auprès de l'atelier.

Le [cours « Tout choco ! » du mercredi 11 novembre 2026, de 14 h à 16 h](https://www.atelier-gourmand.fr/nos-ateliers/cours-cuisine-toulouse/programme/details/adulteenfant-1-inscription-par-binome-tout-choco-71496), prévoit notamment un coulant au chocolat, une tartelette au caramel et une confiserie maison. Il faut apporter **deux ramequins et trois boîtes hermétiques**, dont deux de 0,5 litre, pour transporter les réalisations. Une autre date est affichée le 22 novembre; consultez la fiche pour connaître les places restantes.

**Accès:** 1 impasse de Lisieux, 31300 Toulouse. L'établissement indique un parking privé gratuit, l'arrêt de bus Tissié et la gare du TOEC sur sa [page de contact](https://www.atelier-gourmand.fr/nos-ateliers/cours-cuisine-toulouse/contact).

## L’atelier des Chefs: un menu à quatre mains en 1 h 30

<!-- article-image-body:02 -->

![Mousse au chocolat maison préparée avec des blancs d’œufs en neige, illustration d’un dessert proposé dans les menus.](/images/articles/2026/11/ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet-body-02.webp)

*Photo: [Thesupermat](https://commons.wikimedia.org/wiki/File:Mousse_au_chocolat_-_Patisserie_-_005.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Au **5 rue Idrac**, près de François-Verdier, L’atelier des Chefs affiche des séances parent-enfant de **1 h 30 à 76 € par duo**. Selon le cours, les recettes sont à emporter ou à déguster sur place.

Deux séances illustrent cette différence:

- **Mercredi 25 novembre 2026, de 15 h 30 à 17 h:** [saumon croustillant au sésame, carottes au gingembre, mousse au chocolat et lassi à la framboise](https://www.atelierdeschefs.fr/cours-de-cuisine/343738/parents-enfants-5-12-ans/). Les préparations sont **à emporter**.
- **Dimanche 13 décembre 2026, de 15 h à 16 h 30:** [cari de volaille, riz parfumé, financiers au chocolat et lassi](https://www.atelierdeschefs.fr/cours-de-cuisine/344124/parent-enfant/). La **dégustation se fait sur place**. La fiche propose une préinscription, qui n'est pas une réservation confirmée.

Ne vous fiez pas uniquement au titre des cours pour l'âge: celui du 25 novembre annonce **5-12 ans**, tandis que son descriptif indique **5 à 10 ans**. Demandez confirmation pour un enfant de 11 ou 12 ans. Une [autre séance du 13 décembre, à 17 h 30](https://www.atelierdeschefs.fr/cours-de-cuisine/344150/parent-enfant/), prévoit cette fois des plats à emporter.

**Accès:** 5 rue Idrac, 31000 Toulouse. La [fiche de l'établissement](https://www.atelierdeschefs.fr/ateliers/46/toulouse-francois-verdier/) précise les transports et les coordonnées pour joindre l'équipe.

## Quel atelier choisir avec son enfant ?

Pour **préparer surtout des desserts**, L’atelier Gourmand propose des thèmes ciblés comme le chocolat et les macarons. Pour **cuisiner un menu puis le déguster ensemble**, choisissez une séance de L’atelier des Chefs explicitement annoncée « dégustation sur place ». Les deux écoles permettent aussi de préparer des recettes salées: c'est le programme du jour qui fera la différence.

Côté budget, comptez **70 € pour 2 h** à L’atelier Gourmand ou **76 € pour 1 h 30** à L’atelier des Chefs, selon les fiches consultées. Dans les deux cas, le tarif couvre **un adulte et un enfant**, pas deux inscriptions séparées.

Avant de réserver, vérifiez l'âge admis, les places disponibles et le matériel à apporter. En cas d'allergie ou de restriction alimentaire, consultez les recettes et contactez l'organisateur. La fiche du **25 novembre** chez L’atelier des Chefs mentionne notamment **sésame, amandes et amaretto** dans les préparations: demandez si une version adaptée à l'enfant, notamment sans alcool, est possible. La fiche ne le précise pas.

## Prolonger la sortie par un séjour à Toulouse

Pour les familles venant de plus loin, l'[Appart Hôtel Clément Ader sur Booking.com](https://www.booking.com/hotel/fr/privilege-appart-clement-ader.fr.html), au 23 rue Bayard, propose des appartements avec cuisine équipée et micro-ondes, dont des logements adaptés aux familles. Vérifiez la capacité et les disponibilités pour vos dates: l'adresse se situe dans le centre de Toulouse, et non juste à côté des deux ateliers.

Pour compléter le week-end, retrouvez d'autres idées de visites dans notre [guide de Toulouse en famille](https://www.fam-space.fr/destinations/occitanie/haute-garonne/toulouse/).

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/cuisine/atelier-cuisine-parent-enfant-a-nantes-gratuit-au-breil-ou-cours-prive/ | Ateliers cuisine parent-enfant à Nantes: où cuisiner ensemble? | cuisine | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/cuisine/ateliers-de-patisserie-parent-enfant-en-bretagne-quelle-formule-choisir/ | Ateliers de pâtisserie parent-enfant en Bretagne: quelle formule choisir? | cuisine | Bretagne
- /articles/cuisine/ateliers-cuisine-parent-enfant-a-paris-lesquels-choisir-selon-l-age-et-le-budget/ | Ateliers cuisine parent-enfant à Paris: lesquels choisir selon l’âge et le budget ? | cuisine | Paris, Paris, Île-de-France
- /articles/cuisine/ateliers-de-cuisine-pour-enfants-dans-le-tarn-quatre-adresses-a-comparer/ | Ateliers de cuisine pour enfants dans le Tarn: quatre adresses à comparer | cuisine | Albi, Tarn, Occitanie
- /articles/cuisine/ateliers-de-cuisine-en-famille-dans-le-loir-et-cher-chocolat-patisserie-ou-legumes/ | Ateliers de cuisine en famille dans le Loir-et-Cher: chocolat, pâtisserie ou légumes ? | cuisine | Loir-et-Cher, Centre-Val de Loire
- /articles/cuisine/ateliers-de-cuisine-parent-enfant-pres-de-strasbourg-ou-s-inscrire-selon-l-age/ | Ateliers de cuisine parent-enfant près de Strasbourg: où s'inscrire selon l'âge ? | cuisine | Bas-Rhin, Grand Est
- /articles/cuisine/ateliers-de-patisserie-en-gironde-en-duo-ou-enfant-seul/ | Ateliers de pâtisserie en Gironde: en duo ou enfant seul ? | cuisine | Gironde, Nouvelle-Aquitaine
- /articles/bons-plans/pass-explorateurs-toulouse-en-famille-quand-est-il-vraiment-rentable/ | Pass Explorateurs Toulouse en famille: quand est-il vraiment rentable? | bons-plans | Toulouse, Haute-Garonne, Occitanie
- /articles/cuisine/ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet/ | Ateliers de cuisine parent-enfant à Toulouse: chocolat, pâtisserie ou menu complet ? | cuisine | Toulouse, Haute-Garonne, Occitanie
- /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | Noël à Toulouse 2026 en famille: marchés, Père Noël et patinoire | evenements | Toulouse, Haute-Garonne, Occitanie
- /articles/maison/dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage/ | Déchets verts à Toulouse Métropole en 2027: collecte, broyage et évacuation des gros volumes | maison | Toulouse, Haute-Garonne, Occitanie
- /articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/ | Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates | vie-pratique | Toulouse, Haute-Garonne, Occitanie
- /articles/activites/accrocamp-toulouse-avec-des-enfants-quel-pass-choisir-selon-leur-taille/ | AccroCamp Toulouse avec des enfants: quel pass choisir selon leur taille? | activites | Toulouse, Haute-Garonne, Occitanie
- /articles/maison/moustique-tigre-en-haute-garonne-proteger-la-maison-et-le-jardin/ | Moustique tigre en Haute-Garonne: protéger la maison et le jardin | maison | Toulouse, Haute-Garonne, Occitanie
- /articles/sorties/aeroscopia-en-famille-quels-avions-visiter-avec-les-enfants/ | Aeroscopia en famille: quels avions visiter avec les enfants? | sorties | Blagnac, Haute-Garonne, Occitanie
- /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | Festival BD Colomiers 2026 en famille: programme, tarifs et accès | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/evenements/festival-cite-en-jeux-2026-a-colomiers-quel-jour-choisir-avec-des-enfants/ | Festival Cité en Jeux 2026 à Colomiers: quel jour choisir avec des enfants | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/voyages/saint-bertrand-de-comminges-avec-des-enfants-village-seul-ou-grande-boucle-a-pied/ | Saint-Bertrand-de-Comminges avec des enfants: village seul ou grande boucle à pied? | voyages | Saint-Bertrand-de-Comminges, Haute-Garonne, Occitanie
- /articles/cuisine/chartres-en-famille-quelles-specialites-gourmandes-gouter-et-ou-les-trouver/ | Chartres en famille: quelles spécialités gourmandes goûter et où les trouver ? | cuisine | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/cuisine/fete-de-la-truffe-2027-a-sarlat-en-famille-que-faire-et-que-gouter/ | Fête de la Truffe 2027 à Sarlat en famille: que faire et que goûter ? | cuisine | Sarlat-la-Canéda, Dordogne, Nouvelle-Aquitaine
- /articles/cuisine/maison-du-cacao-a-pointe-noire-decouvrir-le-chocolat-en-famille/ | Maison du Cacao à Pointe-Noire: découvrir le chocolat en famille | cuisine | Pointe-Noire, Guadeloupe, Guadeloupe
- /articles/cuisine/a-chiconi-decouvrir-la-cuisine-mahoraise-en-famille/ | À Chiconi, découvrir la cuisine mahoraise en famille | cuisine | Chiconi, Mayotte, Mayotte

### Historique Radar lié

- refresh | /articles/maison/dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage/ | 2026-11-08T04:30:49.530Z
- opportunity | /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | 2026-10-29T23:28:55.064Z
- opportunity | /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | 2026-10-24T23:34:36.270Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
