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
title: "Colmar avec des enfants quand il pleut: quel musée choisir ?"
subtitle: "Jouets et enquête, chocolat ou beaux-arts: trois visites au centre-ville, avec les tarifs selon l'âge et les jours d'ouverture."
summary: "Musée du Jouet, Choco-Story ou Unterlinden: comparez les activités, les gratuités et les accès sans voiture pour organiser une journée pluvieuse à Colmar."
slug: colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir
status: published
publishedAt: 2026-10-19T21:12:31+02:00
updatedAt: null
category: vie-pratique
readingTime: 5
location:
  city: Colmar
  department: Haut-Rhin
  region: Grand Est
topic:
  key: vie-pratique|colmar|colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir|2026
  keywords:
    - Colmar en famille quand il pleut
    - musées Colmar enfants tarifs
image:
  src: /images/articles/2026/10/colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir.webp
  alt: Hall du Musée du Jouet de Colmar, photographié en 2024.
sources:
  - title: Musée du Jouet de Colmar - Informations pratiques
    url: https://museedujouet.colmar.fr/visites/informations-pratiques/
  - title: Musée du Jouet de Colmar - Collections
    url: https://museedujouet.colmar.fr/musee/collections/
  - title: Musée du Jouet de Colmar - Exposition et actualités
    url: https://museedujouet.colmar.fr/
  - title: Musée du Jouet de Colmar - Horaires de novembre
    url: https://museedujouet.colmar.fr/horaires-du-mois-de-novembre/
  - title: Choco-Story Colmar - Visites, tarifs, ateliers et horaires
    url: https://www.choco-story-colmar.fr/
  - title: Musée Unterlinden - Billets et tarifs
    url: https://www.musee-unterlinden.com/visites-et-activites/infos-2/informations-pratiques/
  - title: Musée Unterlinden - Muséojeux
    url: https://www.musee-unterlinden.com/visites-et-activites/parcours/enfant-famille/museojeux/
affiliate:
  enabled: true
  type: travel
  destination: Colmar
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/vie-pratique/(2026)/(10)/colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir/index.md
  targetSha: 88f43b90ca0f6e62b57bbf9a16a2851ca1c11c1c
  targetUrl: /articles/vie-pratique/colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir/
  decision: Choisir une visite intérieure adaptée à l'âge et au budget des enfants, en tenant compte des activités réellement proposées au Musée du Jouet et de l'accès sans voiture.
  affiliationPotential: Conserver le billet combiné Tiqets Choco-Story + Musée du Jouet, en vérifiant son intérêt selon l'âge, ainsi que l'hébergement Booking existant; ne pas ajouter de partenaire artificiel.
  gsc:
    retrievedAt: 2026-11-10T01:34:08+01:00
    dataThrough: 2026-11-07
    signal: uncertain
    basis: "Visibilité récente : 40 impressions sur trois jours, puis 12 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-21
    peakEnd: 2026-10-23
    recentStart: 2026-11-05
    recentEnd: 2026-11-07
    peakImpressions: 40
    recentImpressions: 12
    commonQueries: 0
    positionDelta: null
    impressionRatio: 1.25
    focusQueries:
      - musée du jouet colmar tarif
      - colmar enfant
      - colmar sous la pluie
      - que faire à colmar quand il pleut
      - colmar enfants
---

À Colmar, dans le Haut-Rhin, la pluie ne condamne pas la journée en famille. Trois musées du centre historique permettent de changer de programme sans quitter la ville: le Musée du Jouet pour observer des jeux de plusieurs générations et mener une enquête autour de jouets, Choco-Story pour découvrir le chocolat en le dégustant et Unterlinden pour explorer des œuvres en famille. Le choix dépend surtout des envies des enfants, de leur âge, des jours d'ouverture et du budget.

## Musée du Jouet: des collections et une enquête sur les jouets

<!-- article-image-body:01 -->

![Chevaux et voiturettes-jouets photographiés au musée du Jouet de Colmar en décembre 2008.](/images/articles/2026/10/colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir-body-01.webp)

*Photo: [vincent desjardins](https://commons.wikimedia.org/wiki/File:Au_mus%C3%A9e_du_jouet_de_Colmar.jpg) - [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Au **40 rue Vauban**, le Musée du Jouet présente poupées, trains, automates et jouets anciens ou récents sur trois niveaux. L'exposition temporaire **« 4026 – Des jouets éternels ? »**, annoncée sur le [site du musée](https://museedujouet.colmar.fr/), invite à enquêter sur dix jouets retrouvés dans une capsule temporelle fictive. C'est un autre angle de découverte pour les enfants qui aiment observer et imaginer. Le musée confirme sa présentation en novembre 2026, mais ne précise pas sur cette page une date de fin à annoncer pour les mois suivants.

La visite libre des collections et de l'exposition ne doit pas être confondue avec les **visites guidées et ateliers ponctuels** de l'agenda, dont les âges, tarifs et modalités varient. Ce n'est pas non plus une grande salle de jeux où tout se manipule.

L'entrée coûte **6,50 € par adulte**, **5 € de 8 à 18 ans inclus** et reste **gratuite avant 8 ans**. Le « tarif famille » de 5 € par entrée payante ne s'applique qu'**à partir de cinq entrées payantes**, avec deux adultes au maximum, et non automatiquement à quatre personnes.

De janvier à novembre, les horaires habituels sont **10 h à 17 h**, le lundi et du mercredi au dimanche. Pendant les vacances scolaires françaises (toutes zones), en juillet, août et décembre, le musée annonce **10 h à 18 h tous les jours**. Il ferme les **1er janvier, 1er mai, 1er novembre et 25 décembre**; la billetterie ferme 30 minutes avant. **En novembre 2026**, le musée confirme l'ouverture de **10 h à 17 h sauf le mardi**, y compris le **11 novembre**. Vérifiez les [horaires officiels](https://museedujouet.colmar.fr/visites/informations-pratiques/) à la date de votre visite. Un ascenseur dessert les trois niveaux et des sanitaires adaptés sont disponibles.

**Sans voiture**, comptez environ **22 minutes à pied depuis la gare de Colmar** jusqu'au Musée du Jouet, selon le musée. Les lignes **A et B du réseau TRACE** desservent l'arrêt **Vauban**, et la navette cœur de ville propose un arrêt à la demande. Ce trajet concerne bien le Musée du Jouet: les deux autres établissements ne sont pas à la même adresse.

## Choco-Story: pour une visite gourmande

<!-- article-image-body:02 -->

![Réplique de la statue de la Liberté au musée du chocolat de Colmar, photographiée en 2023.](/images/articles/2026/10/colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir-body-02.webp)

*Photo: [Paqma](https://commons.wikimedia.org/wiki/File:Chocolmar.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

À deux pas de la collégiale Saint-Martin, **12 place de la Cathédrale**, Choco-Story Colmar raconte le parcours du cacao jusqu'au chocolat. La visite libre avec audioguide associe explications, films, démonstrations virtuelles et **dégustations comprises dans le billet**. Comptez **environ 1 h 30**.

Le billet coûte **15 € pour un adulte**, **13 € de 12 à 17 ans**, **9 € de 3 à 11 ans** et est **gratuit jusqu'à 2 ans inclus**. Pour fabriquer ses propres chocolats, l'atelier est une **activité distincte**, proposée **à partir de 7 ans**, à **45 € par personne**, visite comprise. Il ajoute environ 45 minutes; les places sont limitées. Vérifiez les tarifs et les créneaux sur le [site de Choco-Story Colmar](https://www.choco-story-colmar.fr/).

Le musée annonce une ouverture **tous les jours de 10 h à 18 h**, dernière entrée à **17 h**. Une fermeture annuelle intervient en janvier après les vacances scolaires: vérifiez les dates précises pour un séjour hivernal.

## Unterlinden: de l'art, mais aussi un parcours à jouer

<!-- article-image-body:03 -->

![Cloître de l'ancien couvent des Unterlinden, au musée Unterlinden de Colmar.](/images/articles/2026/10/colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir-body-03.webp)

*Photo: [Gzen92](https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_Unterlinden_-_couvent_des_Unterlinden_-_clo%C3%AEtre_(Colmar)_(5).jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

Le musée Unterlinden, **place Unterlinden**, réunit des œuvres du Moyen Âge à l'époque moderne et contemporaine dans un ensemble comprenant un ancien couvent. Il convient aux familles qui aiment observer et raconter devant des œuvres plutôt qu'à celles qui recherchent une activité très animée.

Pour rendre la visite plus vivante, demandez gratuitement à l'accueil le sac **[Muséojeux](https://www.musee-unterlinden.com/visites-et-activites/parcours/enfant-famille/museojeux/)**: il propose de mimer, dessiner, chanter et observer ensemble les collections.

Le tarif est de **14 € par adulte**, **9 € de 12 à 17 ans** et **gratuit pour les moins de 12 ans**. La formule famille à **36 €** couvre deux adultes et un à cinq jeunes de **12 à 17 ans**; avec des enfants plus jeunes, comparez avec les billets individuels gratuits.

Le musée ouvre **du mercredi au lundi, de 9 h à 18 h**, dernière entrée à **17 h 30**. Il ferme le **mardi**, les **1er janvier, 1er mai, 1er novembre et 25 décembre**; les **24 et 31 décembre**, fermeture à **16 h**. Les poussettes sont acceptées, un espace à langer est disponible et les salles sont accessibles aux personnes à mobilité réduite.

## Un musée ou deux: choisir selon l'âge et le prix

Avec des **enfants de moins de 8 ans**, le Musée du Jouet et Unterlinden offrent des gratuités intéressantes. Les enfants qui préfèrent les saveurs et la fabrication du chocolat apprécieront davantage Choco-Story, mais le budget est plus élevé. Avec des adolescents, choisissez surtout selon leur intérêt pour les jouets, la gourmandise ou l'art.

Les trois lieux sont **dans le centre de Colmar** et se rejoignent à pied, mais avec de jeunes enfants, une seule visite peut suffire. Deux visites sont possibles avec une pause. Si vous souhaitez associer **Choco-Story et le Musée du Jouet**, [le billet combiné sur Tiqets](https://www.tiqets.com/fr/choco-story-colmar-le-musee-du-jouet-de-colmar-b275960/) est annoncé **à partir de 20,42 €** pour l'offre présentée. Vérifiez le prix final par âge avant de réserver: des billets séparés peuvent être plus avantageux lorsque les enfants bénéficient de la gratuité au Musée du Jouet.

**Le mardi**, Unterlinden est fermé et le Musée du Jouet n'ouvre que pendant certaines périodes; Choco-Story annonce une ouverture quotidienne hors fermeture annuelle. Les horaires du jour doivent primer, particulièrement autour des jours fériés.

## Séjourner à Colmar avec des enfants

Pour un week-end à Colmar, [Le Bag Centre ville sur Booking.com](https://www.booking.com/hotel/fr/le-bag-centre-ville.fr.html) propose un appartement avec **trois chambres et six couchages**, une cuisine et un emplacement proche du centre historique. L'établissement indique une **caution remboursable de 500 €**, normalement débitée sur carte bancaire **14 jours avant l'arrivée** et restituée dans les **14 jours après le départ** si aucun dommage n'est constaté. Aucun lit bébé ni lit d'appoint n'est proposé. Vérifiez le tarif, la disponibilité et les conditions exactes à vos dates.

Retrouvez aussi [Colmar en famille](https://www.fam-space.fr/destinations/grand-est/haut-rhin/colmar/) pour prolonger la découverte.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/vie-pratique/(2026)/(10)/colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir/index.md

---
title: "Colmar avec des enfants quand il pleut: quel musée choisir ?"
subtitle: "Jouets, chocolat ou beaux-arts: trois visites au centre-ville, avec les vrais tarifs selon l'âge et les jours d'ouverture."
summary: "Musée du Jouet, Choco-Story ou Unterlinden: comparez les expériences, les gratuités pour les enfants et les horaires pour organiser une journée pluvieuse à Colmar."
slug: colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir
status: published
publishedAt: 2026-10-19T21:12:31+02:00
updatedAt: null
category: vie-pratique
readingTime: 5
location:
  city: Colmar
  department: Haut-Rhin
  region: Grand Est
topic:
  key: vie-pratique|colmar|colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir|2026
  keywords:
    - Colmar en famille quand il pleut
    - musées Colmar enfants tarifs
image:
  src: "/images/articles/2026/10/colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir.webp"
  alt: "Hall du Musée du Jouet de Colmar, photographié en 2024."
sources:
  - title: Musée du Jouet de Colmar - Informations pratiques
    url: https://museedujouet.colmar.fr/visites/informations-pratiques/
  - title: Musée du Jouet de Colmar - Collections
    url: https://museedujouet.colmar.fr/musee/collections/
  - title: Choco-Story Colmar - Visites, tarifs, ateliers et horaires
    url: https://www.choco-story-colmar.fr/
  - title: Musée Unterlinden - Billets et tarifs
    url: https://www.musee-unterlinden.com/visites-et-activites/infos-2/informations-pratiques/
  - title: Musée Unterlinden - Muséojeux
    url: https://www.musee-unterlinden.com/visites-et-activites/parcours/enfant-famille/museojeux/
affiliate:
  enabled: true
  type: travel
  destination: Colmar
---

À Colmar, dans le Haut-Rhin, la pluie ne condamne pas la journée en famille. Trois musées du centre historique permettent de changer de programme sans quitter la ville: le Musée du Jouet pour retrouver les jeux de plusieurs générations, Choco-Story pour découvrir le chocolat en le dégustant et le musée Unterlinden pour explorer des œuvres avec les enfants. Le bon choix dépend surtout de leur âge, du temps disponible et du prix réel des entrées.

## Musée du Jouet: pour les enfants curieux de jeux et d'objets

<!-- article-image-body:01 -->

![Chevaux et voiturettes-jouets photographiés au musée du Jouet de Colmar en décembre 2008.](/images/articles/2026/10/colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir-body-01.webp)

*Photo: [vincent desjardins](https://commons.wikimedia.org/wiki/File:Au_mus%C3%A9e_du_jouet_de_Colmar.jpg) - [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Au **40 rue Vauban**, le Musée du Jouet présente poupées, trains, automates et jouets anciens ou plus récents. Les collections occupent trois niveaux: c'est une sortie qui plaît autant aux enfants fascinés par les mécanismes qu'aux adultes qui reconnaissent les jeux de leur enfance. Ce n'est toutefois pas une grande salle de jeux où tout se manipule.

Côté budget, l'entrée coûte **6,50 € par adulte** et **5 € de 8 à 18 ans inclus**; elle est **gratuite avant 8 ans**. Attention au « tarif famille » à 5 €: il s'applique **à partir de cinq entrées payantes**, avec au maximum deux adultes, et non automatiquement à une famille de quatre.

De janvier à novembre, le musée ouvre normalement **de 10 h à 17 h**, le lundi et du mercredi au dimanche. Pendant les vacances scolaires françaises (toutes zones), en juillet, août et décembre, il ouvre **tous les jours de 10 h à 18 h**. Il ferme toutefois les **1er janvier, 1er mai, 1er novembre et 25 décembre**. La billetterie ferme 30 minutes avant le musée. Un ascenseur dessert les trois niveaux et des sanitaires adaptés sont disponibles.

## Choco-Story: pour une visite gourmande

<!-- article-image-body:02 -->

![Réplique de la statue de la Liberté au musée du chocolat de Colmar, photographiée en 2023.](/images/articles/2026/10/colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir-body-02.webp)

*Photo: [Paqma](https://commons.wikimedia.org/wiki/File:Chocolmar.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

À deux pas de la collégiale Saint-Martin, **12 place de la Cathédrale**, Choco-Story Colmar raconte le parcours du cacao jusqu'au chocolat. La visite libre, accompagnée d'un audioguide, associe explications, films, démonstrations virtuelles et **dégustations comprises dans le billet**. Comptez **environ 1 h 30**.

Le billet coûte **15 € pour un adulte**, **13 € de 12 à 17 ans**, **9 € de 3 à 11 ans** et est **gratuit jusqu'à 2 ans inclus**. Les enfants ne paient donc pas tous le même prix que dans les deux autres musées.

Fabriquer ses propres chocolats relève d'une **activité distincte**: l'atelier est proposé **à partir de 7 ans**, à **45 € par personne**, avec la visite incluse. Il ajoute environ 45 minutes à la sortie; les places sont limitées. Ne confondez pas cette formule avec le billet de visite ordinaire.

Le musée annonce une ouverture **tous les jours de 10 h à 18 h**, avec dernière entrée à **17 h**. Une **fermeture annuelle intervient en janvier après les vacances scolaires**: mieux vaut vérifier les dates exactes avant un séjour hivernal.

## Unterlinden: de l'art, mais aussi un parcours à jouer

<!-- article-image-body:03 -->

![Cloître de l'ancien couvent des Unterlinden, au musée Unterlinden de Colmar.](/images/articles/2026/10/colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir-body-03.webp)

*Photo: [Gzen92](https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_Unterlinden_-_couvent_des_Unterlinden_-_clo%C3%AEtre_(Colmar)_(5).jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

Le musée Unterlinden, place Unterlinden, réunit des œuvres du Moyen Âge à l'époque moderne et contemporaine dans un ensemble de bâtiments comprenant un ancien couvent. Il convient davantage aux familles qui aiment observer, raconter et discuter devant des œuvres qu'à celles qui recherchent une activité très animée.

Pour rendre la visite plus vivante, demandez gratuitement à l'accueil le sac **Muséojeux**: il propose des consignes pour mimer, dessiner, chanter ou observer les collections ensemble.

Le tarif est de **14 € par adulte**, **9 € de 12 à 17 ans** et **gratuit pour les moins de 12 ans**. La formule famille à **36 €** couvre deux adultes et un à cinq jeunes de **12 à 17 ans**; avec des enfants plus jeunes, mieux vaut comparer avec les billets individuels gratuits.

Le musée ouvre **du mercredi au lundi, de 9 h à 18 h**, avec dernière entrée à **17 h 30**. Il ferme le **mardi**, ainsi que les **1er janvier, 1er mai, 1er novembre et 25 décembre**; les **24 et 31 décembre**, il ferme plus tôt, à **16 h**. Les poussettes sont acceptées, un espace à langer est disponible et les salles sont accessibles aux personnes à mobilité réduite.

## Un musée ou deux: le choix le plus simple

Avec des **enfants de moins de 8 ans**, le Musée du Jouet et Unterlinden présentent un avantage budgétaire important grâce à leurs gratuités. Pour des enfants qui préfèrent goûter et découvrir une fabrication, Choco-Story offre une expérience différente, mais plus chère. Avec des adolescents, les trois visites sont possibles: choisissez plutôt selon leur intérêt pour les jouets, la gourmandise ou l'art.

Les trois lieux se trouvent **dans le centre de Colmar** et se rejoignent à pied. Avec de jeunes enfants, mieux vaut parfois choisir une seule visite et en profiter. Deux visites restent possibles en prévoyant une pause, mais les réductions des billets combinés ne compensent pas toujours les gratuités accordées aux plus jeunes.

Si vous souhaitez visiter **Choco-Story et le Musée du Jouet**, [leur billet combiné sur Tiqets](https://www.tiqets.com/fr/choco-story-colmar-le-musee-du-jouet-de-colmar-b275960/) est affiché **à partir de 20,42 €** pour l'offre présentée. Il faut vérifier le prix final pour chaque âge avant d'acheter: des billets séparés peuvent coûter moins cher pour les enfants de moins de 8 ans, gratuits au Musée du Jouet.

**Attention au mardi**: Unterlinden reste fermé, le Musée du Jouet n'ouvre ce jour-là que pendant les périodes spécifiées, tandis que Choco-Story annonce une ouverture quotidienne hors fermeture annuelle. Vérifiez les horaires du jour avant de partir, particulièrement autour des jours fériés.

## Séjourner à Colmar avec des enfants

Pour un week-end à Colmar, [Le Bag Centre ville sur Booking.com](https://www.booking.com/hotel/fr/le-bag-centre-ville.fr.html) propose un appartement avec **trois chambres et six couchages**, doté d'une cuisine, près du centre historique. Attention: l'établissement indique une **caution remboursable de 500 €**, normalement débitée sur carte bancaire **14 jours avant l'arrivée** et restituée dans les **14 jours après le départ** si aucun dommage n'est constaté. Aucun lit bébé ni lit d'appoint n'est proposé. Vérifiez le tarif, la disponibilité et les conditions exactes à vos dates.

Retrouvez aussi [Colmar en famille](https://www.fam-space.fr/destinations/grand-est/haut-rhin/colmar/) pour prolonger la découverte.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/repto-terra-expo-a-colmar-faut-il-y-aller-avec-des-enfants/ | Repto Terra Expo à Colmar: faut-il y aller avec des enfants? | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/voyages/marches-de-noel-de-colmar-avec-des-enfants-en-2026-1-ou-2-jours-et-ou-dormir/ | Marchés de Noël de Colmar avec des enfants en 2026: 1 ou 2 jours et où dormir | voyages | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/fanabriques-colmar-2026-famille/ | Fana'Briques 2026 à Colmar: un week-end LEGO en famille | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/bons-plans/musees-gratuits-autour-de-rouen-lesquels-choisir-avec-des-enfants/ | Musées gratuits autour de Rouen: lesquels choisir avec des enfants ? | bons-plans | Rouen, Seine-Maritime, Normandie
- /articles/parentalite/laep-a-colmar-ou-aller-gratuitement-avec-un-enfant-de-0-a-6-ans/ | LAEP à Colmar: où aller gratuitement avec un enfant de 0 à 6 ans | parentalite | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | Festival du Livre de Colmar 2026 en famille: dates, horaires et animations jeunesse | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/cuisine/anchois-de-collioure-quelle-visite-choisir-avec-des-enfants/ | Anchois de Collioure: quelle visite choisir avec des enfants? | cuisine | Collioure, Pyrénées-Orientales, Occitanie
- /articles/bons-plans/mulhouse-trois-musees-gratuits-pour-une-journee-culturelle-avec-des-enfants/ | Mulhouse: trois musées gratuits pour une journée culturelle avec des enfants | bons-plans | Mulhouse, Haut-Rhin, Grand Est
- /articles/vie-pratique/colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir/ | Colmar avec des enfants quand il pleut: quel musée choisir ? | vie-pratique | Colmar, Haut-Rhin, Grand Est
- /articles/maison/humidite-et-moisissures-en-hiver-dans-le-haut-rhin-que-faire-et-qui-contacter/ | Humidité et moisissures en hiver dans le Haut-Rhin: que faire et qui contacter ? | maison | Haut-Rhin, Grand Est
- /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | Bédéciné 2026 à Illzach en famille: ateliers, spectacles et billets | evenements | Illzach, Haut-Rhin, Grand Est
- /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | Marché de Noël de Mulhouse 2026 en famille: horaires, étoffe et animations | evenements | Mulhouse, Haut-Rhin, Grand Est
- /articles/activites/noel-2026-a-l-ecomusee-d-alsace-en-famille-quand-venir-et-que-prevoir/ | Noël 2026 à l'Écomusée d'Alsace en famille: quand venir et que prévoir? | activites | Ungersheim, Haut-Rhin, Grand Est
- /articles/voyages/mulhouse-sans-voiture-avec-des-enfants-comment-organiser-2-jours/ | Mulhouse sans voiture avec des enfants: comment organiser 2 jours | voyages | Mulhouse, Haut-Rhin, Grand Est
- /articles/sorties/parc-du-petit-prince-faut-il-prevoir-une-journee-entiere-avec-de-jeunes-enfants/ | Parc du Petit Prince: faut-il prévoir une journée entière avec de jeunes enfants? | sorties | Ungersheim, Haut-Rhin, Grand Est
- /articles/vie-pratique/fort-de-france-trois-ilets-en-famille-quelle-navette-prendre-sans-voiture/ | Fort-de-France - Trois-Îlets en famille: quelle navette prendre sans voiture ? | vie-pratique | Martinique, Martinique
- /articles/vie-pratique/lyon-saint-exupery-avec-des-enfants-preparer-le-trajet-les-controles-et-l-attente/ | Lyon-Saint-Exupéry avec des enfants: préparer le trajet, les contrôles et l’attente | vie-pratique | Colombier-Saugnieu, Rhône, Auvergne-Rhône-Alpes
- /articles/vie-pratique/drome-sans-voiture-avec-des-enfants-train-cars-et-bus-pour-se-deplacer/ | Drôme sans voiture avec des enfants: train, cars et bus pour se déplacer | vie-pratique | Drôme, Auvergne-Rhône-Alpes
- /articles/vie-pratique/transports-gratuits-a-lille-comment-obtenir-le-titre-moins-de-18-ans/ | Transports gratuits à Lille: comment obtenir le titre moins de 18 ans ? | vie-pratique | Nord, Hauts-de-France
- /articles/vie-pratique/bus-ou-voiture-a-la-reunion-organiser-ses-deplacements-en-famille/ | Bus ou voiture à La Réunion: organiser ses déplacements en famille | vie-pratique | La Réunion
- /articles/vie-pratique/transport-scolaire-en-ariege-gratuite-lio-inscription-et-aide-si-aucun-car-ne-dessert-votre-domicile/ | Transport scolaire en Ariège: gratuité liO, inscription et aide si aucun car ne dessert votre domicile | vie-pratique | Ariège, Occitanie
- /articles/vie-pratique/train-mobigo-en-famille-quels-billets-choisir-et-comment-preparer-le-trajet/ | TRAIN Mobigo en famille: quels billets choisir et comment préparer le trajet | vie-pratique | Bourgogne-Franche-Comté

### Historique Radar lié

- opportunity | /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | 2026-10-23T12:33:36.649Z
- opportunity | /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | 2026-10-20T08:52:25.825Z
- opportunity | /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | 2026-10-19T09:37:22.517Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
