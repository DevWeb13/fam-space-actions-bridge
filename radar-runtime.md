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
title: "Soleils d'hiver 2026 à Angers en famille: horaires, manèges et Père Noël"
subtitle: Marchés, village de Santa Claus, rencontres gratuites et horaires particuliers pour organiser sa sortie.
summary: "À Angers, Soleils d'hiver se déroule du 25 novembre 2026 au 3 janvier 2027. Marché de Noël jusqu'au 30 décembre, manèges payants, Père Noël place Sainte-Croix et illuminations: les dates et horaires pour les familles."
category: evenements
location:
  city: Angers
  department: Maine-et-Loire
  region: Pays de la Loire
image:
  src: /images/articles/2026/10/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus.webp
  alt: Chalets du marché de Noël d'une édition antérieure, place du Ralliement à Angers
sources:
  - title: Ville d'Angers - Marchés de Noël 2026 et horaires
    url: https://www.angers.fr/vivre-a-angers/culture/arts-de-la-rue-arts-du-cirque/soleils-d-hiver/les-marches-de-noel/index.html
  - title: Ville d'Angers - Manèges et horaires 2026
    url: https://www.angers.fr/vivre-a-angers/culture/arts-de-la-rue-arts-du-cirque/soleils-d-hiver/les-maneges/index.html
  - title: Ville d'Angers - Programme de Soleils d'hiver 2026
    url: https://www.angers.fr/vivre-a-angers/culture/arts-de-la-rue-arts-du-cirque/soleils-d-hiver/le-programme-de-soleils-d-hiver/index.html
  - title: Ville d'Angers - Rencontrez le Père Noël
    url: https://www.angers.fr/vivre-a-angers/culture/arts-de-la-rue-arts-du-cirque/soleils-d-hiver/rencontrez-le-pere-noel/index.html
  - title: Ville d'Angers - Dossier de presse du 16 novembre 2026
    url: https://presse.angers.fr/dossier/angers-fete-noel-soleils-dhiver-2026
  - title: Irigo - Ligne C du tramway
    url: https://www.irigo.fr/se-deplacer/lignes-et-horaires/ligne-tram-c
reviewAt: 2026-11-20
topic:
  key: evenements|angers|soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus|2026
  keywords:
    - Soleils d'hiver Angers 2026
    - marché de Noël Angers en famille
    - village Santa Claus Angers
    - maison du Père Noël place Sainte-Croix
slug: soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus
status: published
publishedAt: 2026-10-30T12:36:12.248Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Angers
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/index.md
  targetSha: af409f06637a170e46771255a97257ec6c2c2be5
  targetUrl: /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/
  decision: Choisir la bonne date et le bon lieu pour le marché, les manèges ou la rencontre avec le Père Noël, en connaissant les horaires et les dépenses à prévoir.
  affiliationPotential: Conserver l'hébergement familial à Angers déjà proposé; aucune billetterie partenaire vérifiée pour les animations municipales.
  gsc:
    retrievedAt: 2026-11-21T15:27:19+01:00
    dataThrough: 2026-11-19
    signal: needs_query_check
    basis: "Visibilité récente : 99 impressions sur trois jours, puis 21 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-11-01
    peakEnd: 2026-11-03
    recentStart: 2026-11-17
    recentEnd: 2026-11-19
    peakImpressions: 99
    recentImpressions: 21
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Soleils d'hiver Angers 2026
      - marché de Noël Angers en famille
      - village Santa Claus Angers
      - maison du Père Noël place Sainte-Croix
eventEndsAt: 2027-01-03
---

<!-- article-image-credit -->
*Photo: [Géraldine Pasquier](https://commons.wikimedia.org/wiki/File:March%C3%A9_de_No%C3%ABl_d%27Angers_2015.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

**Soleils d'hiver revient à Angers du 25 novembre 2026 au 3 janvier 2027**, mais toutes les installations ne ferment pas le même jour. Pour une promenade entre les chalets, une sortie avec manèges ou une rencontre avec le Père Noël, voici les bons lieux et créneaux, d'après le [programme municipal 2026](https://www.angers.fr/vivre-a-angers/culture/arts-de-la-rue-arts-du-cirque/soleils-d-hiver/le-programme-de-soleils-d-hiver/index.html).

## Les chalets du marché: jusqu'au 30 décembre

<!-- article-image-body:01 -->

![Maison d'Adam au bord de la place Sainte-Croix à Angers, photographiée hors période de Noël](/images/articles/2026/10/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus-body-01.webp)

*Photo: [Nataloche](https://commons.wikimedia.org/wiki/File:Angers_place_Sainte-Croix-2015d.JPG) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le grand marché de Noël occupe **la place du Ralliement, la rue Lenepveu et la place du Pilori** du mercredi 25 novembre au mercredi 30 décembre. Près d'une centaine d'exposants proposent artisanat, produits régionaux, cadeaux et gourmandises. C'est le choix le plus simple pour une promenade libre avec des enfants.

Les chalets ouvrent **tous les jours de 11 h à 20 h**, jusqu'à **22 h le vendredi** et **23 h le samedi**. Attention aux exceptions: **24 décembre de 11 h à 17 h 30**, **25 décembre de 15 h à 20 h**. Ces horaires concernent les marchés, pas nécessairement toutes les animations de rue. Consultez les [horaires officiels des marchés](https://www.angers.fr/vivre-a-angers/culture/arts-de-la-rue-arts-du-cirque/soleils-d-hiver/les-marches-de-noel/index.html).

## Le village de Santa Claus et les manèges: jusqu'au 3 janvier

Au **jardin du Mail**, le village de Santa Claus réunit chalets gourmands, **Grande Roue** et **Sapin magique**. Deux autres attractions sont réparties dans le centre: **la Pomme place Lorraine** et **le Carrousel 1900 place du Ralliement**.

Les manèges sont **payants**. La Ville n'indique pas de prix par tour sur sa [page dédiée](https://www.angers.fr/vivre-a-angers/culture/arts-de-la-rue-arts-du-cirque/soleils-d-hiver/les-maneges/index.html): prévoyez un budget distinct pour les attractions, les boissons et les achats. Vérifiez sur place les éventuelles restrictions d'âge ou de taille avant de promettre un tour aux plus petits.

Les attractions sont annoncées **du 25 novembre au 3 janvier 2027**, de **11 h à 20 h**, avec nocturnes jusqu'à **22 h le vendredi** et **23 h le samedi** les week-ends précédant Noël. Les **24 et 25 décembre**, horaires particuliers: respectivement **11 h-17 h 30** et **15 h-20 h**. Le village du Mail suit également ces horaires annoncés par la Ville.

## Quand rencontrer le Père Noël?

La **maison du Père Noël, place Sainte-Croix**, accueille les familles **du 29 novembre au 24 décembre**, les **mercredis, samedis et dimanches de 15 h à 19 h**, et **le 24 décembre de 13 h à 17 h**. La rencontre est annoncée gratuite. Pour éviter une attente difficile avec un jeune enfant, privilégiez si possible un créneau moins fréquenté et prévoyez une marge avant la fermeture.

Autre rendez-vous: **l'arrivée du Père Noël le samedi 28 novembre, de 15 h à 15 h 45, au jardin du Mail**, annoncée gratuite. Le programme prévoit aussi Madame Noël, des ateliers et des animations de rue: leurs horaires varient selon les activités, à consulter dans l'[agenda municipal](https://www.angers.fr/vivre-a-angers/culture/arts-de-la-rue-arts-du-cirque/soleils-d-hiver/le-programme-de-soleils-d-hiver/index.html). Ne confondez pas l'horaire d'une animation avec l'ouverture quotidienne des chalets.

## Illuminations et promenade du soir

Les **illuminations sont annoncées du 25 novembre au 3 janvier, de 17 h 30 à 23 h**. Elles permettent de prolonger la promenade après la tombée de la nuit, même lorsque certains chalets ont fermé. Avec des enfants fatigués, un passage au marché en fin d'après-midi suivi des lumières peut être plus facile qu'une longue soirée.

## Venir en tramway et circuler avec bébé

<!-- article-image-body:02 -->

![Tramway de la ligne C rue de la Roë à Angers, à proximité de la place du Ralliement](/images/articles/2026/10/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus-body-02.webp)

*Photo: [Dacia 1410 Sport](https://commons.wikimedia.org/wiki/File:Perdu_le_fil.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

La [ligne C du tramway Irigo](https://www.irigo.fr/se-deplacer/lignes-et-horaires/ligne-tram-c) dessert **Ralliement** et **Foch-Maison Bleue**, pratiques pour rejoindre les installations du centre. Vérifiez les horaires et perturbations du jour, surtout pour le retour après les illuminations.

Avec une poussette, la foule peut compliquer les déplacements entre les places et le jardin du Mail. **Tables à langer, micro-ondes et espaces abrités sur les sites de Noël ne sont pas confirmés**: emportez le nécessaire pour les repas et le change. La Ville a évoqué un **espace de repos cognitif à l'Hôtel Godeline, rue Plantagenet**, mais ses conditions d'accès au public restent à vérifier auprès de l'organisateur avant de compter dessus.

## Rester une nuit à Angers

Pour une famille qui vient de plus loin, le [Novotel Angers Centre Gare](https://www.booking.com/hotel/fr/novotel-angers-centre-gare.fr.html) propose des chambres familiales et des lits bébé sur demande, selon les disponibilités. Vérifiez la capacité exacte, le tarif et les conditions pour vos dates avant de réserver.

Pour une autre sortie dans le Maine-et-Loire, découvrez également [Noël à Fontevraud 2026 en famille](/articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/), dont les animations suivent un calendrier différent.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/index.md

---
title: "Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël"
subtitle: Les lieux annoncés, ce qui reste à confirmer et les repères utiles avec des enfants.
summary: "Soleils d'hiver débute le 25 novembre 2026 à Angers. Marché artisanal, village Santa Claus et maison du Père Noël: les activités annoncées, les lieux connus et les horaires ou tarifs encore attendus."
category: evenements
location:
  city: Angers
  department: Maine-et-Loire
  region: Pays de la Loire
image:
  src: "/images/articles/2026/10/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus.webp"
  alt: "Chalets du marché de Noël d'une édition antérieure, place du Ralliement à Angers"
sources:
  - title: Ville d'Angers - Soleils d'hiver 2026, présentation et date de lancement
    url: https://www.angers.fr/vivre-a-angers/culture/arts-de-la-rue-arts-du-cirque/soleils-d-hiver/index.html
  - title: Ville d'Angers - Ambassadeurs Soleils d'hiver 2026, lieux prévus
    url: https://recrutement.angers.fr/emplois/postes-temporaires-fr/1947-ambassadeurs-soleils-dhiver-fr/
  - title: Irigo - Ligne C du tramway, arrêts du centre-ville
    url: https://www.irigo.fr/se-deplacer/lignes-et-horaires/ligne-tram-c
reviewAt: 2026-11-20
topic:
  key: evenements|angers|soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus|2026
  keywords:
    - Soleils d'hiver Angers 2026
    - marché de Noël Angers en famille
    - village Santa Claus Angers
    - maison du Père Noël place Sainte-Croix
slug: soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus
status: published
publishedAt: 2026-10-30T12:36:12.248Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Angers
---
<!-- article-image-credit -->
*Photo: [Géraldine Pasquier](https://commons.wikimedia.org/wiki/File:March%C3%A9_de_No%C3%ABl_d%27Angers_2015.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

**Soleils d'hiver commence à Angers le mercredi 25 novembre 2026.** Le rendez-vous réunit un marché de Noël, un village avec des manèges, des rencontres avec le Père Noël et Madame Noël, des ateliers et des animations de rue. Selon l'âge des enfants, ces activités ne demandent pas la même organisation.

Au **30 octobre 2026**, la Ville annonce encore son programme détaillé « à venir ». La date de lancement est confirmée, mais **les horaires des animations, leurs tarifs éventuels et leurs dates de fin ne sont pas encore publiés**.

## Marché, manèges ou rencontre avec le Père Noël ?

<!-- article-image-body:01 -->

![Maison d'Adam au bord de la place Sainte-Croix à Angers, photographiée hors période de Noël](/images/articles/2026/10/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus-body-01.webp)

*Photo: [Nataloche](https://commons.wikimedia.org/wiki/File:Angers_place_Sainte-Croix-2015d.JPG) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

**Pour les chalets et les cadeaux**, le marché de Noël rassemble en centre-ville une centaine de producteurs régionaux et d'artisans locaux, ainsi que des stands gourmands. Une promenade parmi les chalets permet de découvrir l'événement sans dépendre d'un créneau d'animation.

**Pour les manèges**, la Ville annonce le **Village de Santa Claus**, avec ses attractions et ses chalets. Le plan précis des installations, les limites d'âge ou de taille et les prix des tours restent à confirmer: les informations des éditions précédentes ne doivent pas servir à établir le budget 2026.

**Pour voir le Père Noël**, la **place Sainte-Croix** est le repère le plus concret: une annonce de recrutement de la Ville, datée du 9 octobre 2026, y prévoit l'installation de sa maison et la gestion d'une file d'attente. Les horaires de travail annoncés pour les agents ne constituent **pas** des horaires d'accueil du public. Les rencontres avec Madame Noël et les ateliers des lutins sont également annoncés, sans créneaux détaillés pour l'instant.

## Dates, réservations et budget

Si vous venez spécialement pour un atelier ou une rencontre, attendez les jours et heures du programme 2026 avant de fixer votre sortie. Pour les illuminations, privilégiez une visite après la tombée de la nuit en tenant compte de l'heure de retour des enfants.

La page municipale ne mentionne actuellement **aucun billet d'entrée général**, mais cela ne garantit pas la gratuité des manèges ou des ateliers. Aucune réservation spécifique n'est confirmée non plus. Prévoyez séparément le budget des attractions, des consommations et des achats aux chalets, puis vérifiez les conditions publiées avant le départ.

## Tramway, poussette et besoins des bébés

<!-- article-image-body:02 -->

![Tramway de la ligne C rue de la Roë à Angers, à proximité de la place du Ralliement](/images/articles/2026/10/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus-body-02.webp)

*Photo: [Dacia 1410 Sport](https://commons.wikimedia.org/wiki/File:Perdu_le_fil.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

La [ligne C du tramway Irigo](https://www.irigo.fr/se-deplacer/lignes-et-horaires/ligne-tram-c) dessert **Ralliement** et **Foch-Maison Bleue**, deux arrêts pratiques pour rejoindre le centre d'Angers. Consultez les horaires et les perturbations pour votre date, notamment si vous repartez en soirée.

Avec une poussette, la circulation entre les différents lieux peut être moins aisée lors des périodes d'affluence. **Micro-ondes, tables à langer et espaces abrités sur les sites de Noël ne sont pas confirmés**: prévoyez le nécessaire pour les repas et le change de bébé.

La Ville prévoit aussi un **espace de repos cognitif à l'Hôtel Godeline, rue Plantagenet**, selon son annonce de recrutement. Ses modalités d'accès au public ne sont pas encore précisées; ne comptez pas sur cet espace sans confirmation de l'organisateur.

## Passer un week-end à Angers

Près de la gare, le [Novotel Angers Centre Gare](https://www.booking.com/hotel/fr/novotel-angers-centre-gare.fr.html) propose des chambres familiales et des lits bébé sur demande, sous réserve de disponibilité. Vérifiez la capacité de la chambre selon l'âge de chaque enfant, le tarif et les dates proposées avant de réserver.

Pour prolonger les sorties de Noël dans le Maine-et-Loire, notre guide [Noël à Fontevraud 2026 en famille](/articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/) détaille d'autres animations, avec leurs propres dates et conditions.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/vie-pratique/garde-d-enfants-sur-horaires-atypiques-a-angers-qui-peut-demander-l-aide-du-ccas/ | Garde d'enfants sur horaires atypiques à Angers: qui peut demander l'aide du CCAS? | vie-pratique | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires, Père Noël et animations | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | Noël 2026 à Toulon en famille: marché, patinoire et horaires | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/maison/composteur-gratuit-a-angers-loire-metropole-qui-peut-le-demander/ | Composteur gratuit à Angers Loire Métropole: qui peut le demander? | maison | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | Monument Jeu d’Enfant au château d’Angers: dragons et ateliers le 17 octobre 2026 | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | Fête de l'Automne 2026 à Terra Botanica: animations et tarifs | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/sorties/chasse-tresor-galerie-david-angers-2026/ | Chasse au trésor à Angers: les 4 à 6 ans enquêtent à la Galerie David | sorties | Angers, Maine-et-Loire, Pays de la Loire
- /articles/parentalite/laep-en-maine-et-loire-ou-aller-avec-son-bebe-et-comment-se-passe-l-accueil/ | LAEP en Maine-et-Loire: où aller avec son bébé et comment se passe l'accueil ? | parentalite | Maine-et-Loire, Pays de la Loire
- /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | Noël à Fontevraud 2026: patinoire, marché, dates et tarifs en famille | evenements | Fontevraud-l'Abbaye, Maine-et-Loire, Pays de la Loire
- /articles/parentalite/ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille/ | Ludothèque du Choletais: jouer sur place et emprunter en famille | parentalite | Cholet, Maine-et-Loire, Pays de la Loire
- /articles/cuisine/ou-manger-des-fouees-en-famille-autour-de-saumur/ | Où manger des fouées en famille autour de Saumur ? | cuisine | Saumur, Maine-et-Loire, Pays de la Loire
- /articles/evenements/festival-contes-et-rencontres-2027-en-lozere-quels-spectacles-voir-en-famille/ | Festival Contes et Rencontres 2027 en Lozère: quels spectacles voir en famille ? | evenements | Lozère, Occitanie
- /articles/evenements/lumieres-d-afrique-2026-2027-a-sigean-les-lanternes-en-famille/ | Lumières d’Afrique 2026-2027 à Sigean: les lanternes en famille | evenements | Sigean, Aude, Occitanie
- /articles/evenements/natur-armor-2027-a-paimpol-preparer-sa-visite-en-famille/ | Natur’Armor 2027 à Paimpol: préparer sa visite en famille | evenements | Paimpol, Côtes-d'Armor, Bretagne
- /articles/evenements/noel-a-brive-2026-en-famille-animations-dates-et-parcours/ | Noël à Brive 2026 en famille: animations, dates et parcours | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine
- /articles/evenements/musee-maurice-denis-en-famille-decouvrir-les-nabis-a-saint-germain-en-laye/ | Musée Maurice Denis en famille: découvrir les Nabis à Saint-Germain-en-Laye | evenements | Saint-Germain-en-Laye, Yvelines, Île-de-France
- /articles/evenements/carnaval-de-guadeloupe-2027-preparer-une-premiere-sortie-avec-ses-enfants/ | Carnaval de Guadeloupe 2027: préparer une première sortie avec ses enfants | evenements | Guadeloupe
- /articles/evenements/niepce-et-apres-une-exposition-photo-a-decouvrir-en-famille-a-chalon-sur-saone/ | Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône | evenements | Chalon-sur-Saône, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-puy-du-fou-en-famille-spectacles-et-visite-en-hiver/ | Noël 2026 au Puy du Fou en famille: spectacles et visite en hiver | evenements | Les Epesses, Vendée, Pays de la Loire

### Historique Radar lié

- opportunity | /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | 2026-10-13T12:37:05.098Z
- refresh | /articles/parentalite/ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille/ | 2026-11-10T03:33:47.847Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- refresh | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-11-17T22:37:09.520Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- refresh | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-11-17T19:34:24.194Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | 2026-10-10T08:38:56.921Z
- opportunity | /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | 2026-10-31T10:28:17.432Z
- refresh | /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | 2026-11-16T04:35:04.037Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
