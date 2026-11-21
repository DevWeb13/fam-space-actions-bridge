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
title: "Bibliothèques de Rouen: emprunter gratuitement outils, instruments et jeux"
subtitle: Six adresses pour bricoler, découvrir la musique ou jardiner en famille
summary: À Rouen, l'inscription aux bibliothèques est gratuite, même hors de la ville. Découvrez où emprunter des outils et des kits nature, et quels espaces visiter avec les enfants.
slug: bibliotheques-de-rouen-emprunter-gratuitement-outils-instruments-et-jeux
status: published
publishedAt: 2026-11-11T10:06:28+01:00
updatedAt: null
category: vie-pratique
readingTime: 3
location:
  city: Rouen
  department: Seine-Maritime
  region: Normandie
topic:
  key: vie-pratique|rouen|bibliotheques-de-rouen-emprunter-gratuitement-outils-instruments-et-jeux|2026
  keywords:
    - bibliothèques Rouen emprunt objets
    - bricothèque Rouen gratuite
    - bibliothèque Rouen enfants
image:
  src: /images/articles/2026/11/bibliotheques-de-rouen-emprunter-gratuitement-outils-instruments-et-jeux.webp
  alt: Façade de la bibliothèque Amélie Bosquet, rue des Capucins à Rouen
sources:
  - title: Bibliothèque Parment, inscription et bricothèque
    url: https://rouen.fr/adresse/bibliotheque-municipale-roger-parment
  - title: Bibliothèque de la Grand'Mare
    url: https://www.rouen.fr/fr/adresse/bibliotheque-municipale-de-la-grandmare
  - title: Bibliothèque Saint-Sever
    url: https://rouen.fr/fr/adresse/bibliotheque-municipale-saint-sever
  - title: Bibliothèque des Capucins
    url: https://rouen.fr/index.php/fr/adresse/bibliotheque-municipale-des-capucins
  - title: Bibliothèque Simone-de-Beauvoir
    url: https://rouen.fr/adresse/bibliotheque-municipale-simone-de-beauvoir
  - title: Bibliothèque du Châtelet
    url: https://rouen.fr/fr/adresse/bibliotheque-municipale-du-chatelet
  - title: Délibération municipale du 8 octobre 2026
    url: https://rouen.fr/fr/deliberation/2026-10-08/1-29
  - title: Délibération municipale du 12 février 2026 sur les nouveaux noms
    url: https://rouen.fr/fr/deliberation/2026-02-12/5-6
  - title: Catalogue Rouen Bibliothèques
    url: https://bibliotheques.rouen.fr/
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/vie-pratique/(2026)/(11)/bibliotheques-de-rouen-emprunter-gratuitement-outils-instruments-et-jeux/index.md
  targetSha: 11499ff0d2f9790ba68ca5eba159a20de1a7fc4f
  targetUrl: /articles/vie-pratique/bibliotheques-de-rouen-emprunter-gratuitement-outils-instruments-et-jeux/
  decision: Savoir quels objets et jeux une famille peut réellement emprunter à Rouen, gratuitement ou sous conditions, et où les récupérer.
  affiliationPotential: "Aucune affiliation naturelle : service public local de prêt."
  gsc:
    retrievedAt: 2026-11-21T15:27:19+01:00
    dataThrough: 2026-11-19
    signal: uncertain
    basis: "Visibilité récente : 27 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-13
    peakEnd: 2026-11-15
    recentStart: 2026-11-17
    recentEnd: 2026-11-19
    peakImpressions: 27
    recentImpressions: 0
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - ludobulle rouen
      - bibliothèque espace du palais rouen
---

title: "Bibliothèques de Rouen: quels jeux, instruments et outils emprunter?"
subtitle: "Six bibliothèques pour jouer, bricoler et découvrir en famille"
summary: "La carte des bibliothèques de Rouen est gratuite pour tous. Jeux et instruments se prêtent sans frais, tandis que la bricothèque réserve la gratuité à certains publics: adresses et conditions."
readingTime: 4
sources:
  - title: Bibliothèque Parment, inscription et bricothèque
    url: https://rouen.fr/adresse/bibliotheque-municipale-roger-parment
  - title: Bibliothèque de la Grand'Mare
    url: https://www.rouen.fr/fr/adresse/bibliotheque-municipale-de-la-grandmare
  - title: Bibliothèque Saint-Sever
    url: https://rouen.fr/fr/adresse/bibliotheque-municipale-saint-sever
  - title: Bibliothèque des Capucins
    url: https://rouen.fr/index.php/fr/adresse/bibliotheque-municipale-des-capucins
  - title: Bibliothèque Simone-de-Beauvoir
    url: https://rouen.fr/adresse/bibliotheque-municipale-simone-de-beauvoir
  - title: Bibliothèque du Châtelet
    url: https://rouen.fr/fr/adresse/bibliotheque-municipale-du-chatelet
  - title: Délibération municipale du 8 octobre 2026 et annexes tarifaires
    url: https://rouen.fr/fr/deliberation/2026-10-08/1-29
  - title: Délibération municipale du 12 février 2026 sur les nouveaux noms
    url: https://rouen.fr/fr/deliberation/2026-02-12/5-6
  - title: Catalogue Rouen Bibliothèques
    url: https://bibliotheques.rouen.fr/
---

À Rouen, la carte des bibliothèques municipales est gratuite, même pour les familles qui n'habitent pas la ville. Elle permet d'emprunter des livres, mais aussi des jeux, des jeux vidéo et certains objets. **Attention toutefois aux outils de bricolage et de jardinage:** la bricothèque relève de conditions particulières. Voici comment choisir le bon établissement sans confondre prêt à domicile et activité sur place.

## Que peut-on emprunter gratuitement?

Selon la [grille tarifaire adoptée en octobre 2026](https://rouen.fr/fr/deliberation/2026-10-08/1-29), la carte individuelle gratuite couvre les livres, revues, CD, DVD, jeux, jeux vidéo et objets comme les boîtes à histoires, liseuses, instruments de musique ou ustensiles de cuisine, **hors outillage et outils de jardinage**. La durée prévue pour ces prêts est d'un mois, renouvelable une fois. La présence d'une catégorie dans le règlement ne signifie pas que chaque bibliothèque possède tous ces objets.

Pour les outils de la bricothèque, la gratuité est réservée, sur justificatif, aux étudiants, aux moins de 26 ans, aux familles nombreuses, aux demandeurs d'emploi et aux bénéficiaires des minima sociaux (RSA, ASPA, AAH). Depuis le 1er novembre 2026, les établissements et associations rouennaises peuvent aussi en bénéficier. La grille ne précise pas de tarif alternatif pour les autres particuliers: **ne présumez donc pas que le prêt d'outils est gratuit pour tous** et demandez confirmation à Parment avant de vous déplacer. La durée indiquée pour la bricothèque est également d'un mois, renouvelable une fois.

## Six bibliothèques selon vos envies

**Bricoler: Parment, au centre-ville.** Au premier étage de l'Espace du Palais, 8 allée Eugène-Delacroix, la [bibliothèque Parment](https://rouen.fr/adresse/bibliotheque-municipale-roger-parment) abrite la bricothèque. Demandez quels outils sont disponibles et vérifiez votre éligibilité avant le prêt. Métro Palais de Justice - Gisèle Halimi.

**Emprunter un instrument ou observer les oiseaux: Madeleine Riffaud (ancienne Grand'Mare).** Au centre André-Malraux, rue François-Couperin, cette [bibliothèque](https://www.rouen.fr/fr/adresse/bibliotheque-municipale-de-la-grandmare) propose des instruments de musique et des kits ornithologiques. Le prêt d'instruments est réservé aux adultes. T2, arrêt Couperin.

**Écouter, apprendre et jouer sur place: Aretha Franklin (ancienne Saint-Sever).** Au premier étage du centre commercial Saint-Sever, 65 avenue de Bretagne, la [bibliothèque](https://rouen.fr/fr/adresse/bibliotheque-municipale-saint-sever) propose partitions, méthodes musicales, MusicLab et espace de jeux vidéo. L'espace de jeux vidéo est une activité sur place: pour emprunter un jeu précis, consultez le catalogue. Métro Saint-Sever.

**Jardiner et échanger: Amélie Bosquet (ancienne Capucins).** Au 21 rue des Capucins, la [bibliothèque](https://rouen.fr/index.php/fr/adresse/bibliotheque-municipale-des-capucins) accueille une grainothèque, une bouturothèque et des bacs de jardinage. On y échange graines et plantes; il ne s'agit pas d'un prêt d'outillage.

**Venir avec un tout-petit: Simone-de-Beauvoir.** Au pôle culturel Grammont, rue Henri-II-de-Plantagenêt, cette [bibliothèque](https://rouen.fr/adresse/bibliotheque-municipale-simone-de-beauvoir) dispose d'une marmothèque pour les 0 à 6 ans accompagnés et de kits ornithologiques.

**Explorer le numérique: Émilie du Châtelet (ancienne Châtelet).** Place du Châtelet, la [bibliothèque](https://rouen.fr/fr/adresse/bibliotheque-municipale-du-chatelet) propose des jeux vidéo et le ChaMaLab, espace de fabrication. Les consoles sont réservées aux adultes: leur présence ne signifie pas qu'elles sont prêtées à domicile.

Les quatre changements de noms ont été décidés en février 2026 pour application au 1er mars. Les anciens noms peuvent encore figurer sur les fiches municipales. [Consulter la délibération](https://rouen.fr/fr/deliberation/2026-02-12/5-6).

## Inscription, réservation et retour: les précautions utiles

La carte est valable un an. Pour l'obtenir, prévoyez une pièce d'identité (ou le livret de famille pour un enfant), un justificatif de domicile de moins de six mois ou une attestation sur l'honneur, et une autorisation parentale pour les moins de 16 ans. Une préinscription est possible sur le [portail Rouen Bibliothèques](https://bibliotheques.rouen.fr/).

Avant d'emprunter un jeu, un instrument ou un kit, vérifiez sa disponibilité et les éventuelles limites d'âge auprès de la bibliothèque. La durée générale d'un mois renouvelable ne garantit ni qu'un exemplaire soit disponible ni qu'une réservation soit possible. **Les objets doivent être rapportés dans leur bibliothèque d'origine**, contrairement aux documents pouvant circuler dans le réseau.

Les enfants de moins de six ans doivent être accompagnés d'un adulte ou d'un frère ou d'une sœur d'au moins 11 ans. Les parents restent responsables de leurs enfants. Depuis le 1er novembre 2026, chaque usager inscrit bénéficie aussi d'un maximum de dix impressions ou photocopies gratuites par mois, conformément à la [délibération municipale](https://rouen.fr/fr/deliberation/2026-10-08/1-29).

Vérifiez les horaires avant votre visite, notamment pendant les vacances scolaires. Pour prolonger la sortie, retrouvez d'autres idées dans notre [guide de Rouen en famille](https://www.fam-space.fr/destinations/normandie/seine-maritime/rouen/).

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/vie-pratique/(2026)/(11)/bibliotheques-de-rouen-emprunter-gratuitement-outils-instruments-et-jeux/index.md

---
title: "Bibliothèques de Rouen: emprunter gratuitement outils, instruments et jeux"
subtitle: Six adresses pour bricoler, découvrir la musique ou jardiner en famille
summary: À Rouen, l'inscription aux bibliothèques est gratuite, même hors de la ville. Découvrez où emprunter des outils et des kits nature, et quels espaces visiter avec les enfants.
slug: bibliotheques-de-rouen-emprunter-gratuitement-outils-instruments-et-jeux
status: published
publishedAt: 2026-11-11T10:06:28+01:00
updatedAt: null
category: vie-pratique
readingTime: 3
location:
  city: Rouen
  department: Seine-Maritime
  region: Normandie
topic:
  key: vie-pratique|rouen|bibliotheques-de-rouen-emprunter-gratuitement-outils-instruments-et-jeux|2026
  keywords:
    - bibliothèques Rouen emprunt objets
    - bricothèque Rouen gratuite
    - bibliothèque Rouen enfants
image:
  src: "/images/articles/2026/11/bibliotheques-de-rouen-emprunter-gratuitement-outils-instruments-et-jeux.webp"
  alt: "Façade de la bibliothèque Amélie Bosquet, rue des Capucins à Rouen"
sources:
  - title: Bibliothèque Parment, inscription et bricothèque
    url: https://rouen.fr/adresse/bibliotheque-municipale-roger-parment
  - title: Bibliothèque de la Grand'Mare
    url: https://www.rouen.fr/fr/adresse/bibliotheque-municipale-de-la-grandmare
  - title: Bibliothèque Saint-Sever
    url: https://rouen.fr/fr/adresse/bibliotheque-municipale-saint-sever
  - title: Bibliothèque des Capucins
    url: https://rouen.fr/index.php/fr/adresse/bibliotheque-municipale-des-capucins
  - title: Bibliothèque Simone-de-Beauvoir
    url: https://rouen.fr/adresse/bibliotheque-municipale-simone-de-beauvoir
  - title: Bibliothèque du Châtelet
    url: https://rouen.fr/fr/adresse/bibliotheque-municipale-du-chatelet
  - title: Délibération municipale du 8 octobre 2026
    url: https://rouen.fr/fr/deliberation/2026-10-08/1-29
  - title: Délibération municipale du 12 février 2026 sur les nouveaux noms
    url: https://rouen.fr/fr/deliberation/2026-02-12/5-6
  - title: Catalogue Rouen Bibliothèques
    url: https://bibliotheques.rouen.fr/
---

À Rouen, les bibliothèques municipales ne prêtent pas seulement des livres. Certaines proposent aussi des outils de bricolage, des instruments de musique ou des kits pour observer les oiseaux. D'autres accueillent les enfants dans des espaces de jeux, de lecture et de découverte. L'inscription est gratuite, même pour les familles qui n'habitent pas Rouen.

## Où aller selon l'activité ?

**Pour bricoler: Parment, en centre-ville.** Au premier étage de l'Espace du Palais, 8 allée Eugène-Delacroix, la [bibliothèque Parment](https://rouen.fr/adresse/bibliotheque-municipale-roger-parment) dispose d'une bricothèque. Vous pouvez vous renseigner sur les outils disponibles pour un petit travail ponctuel et leurs conditions de prêt. Accès par le métro Palais de Justice - Gisèle Halimi.

**Pour la musique et l'observation des oiseaux: Madeleine Riffaud (ancienne Grand'Mare).** Au centre André-Malraux, rue François-Couperin, cette [bibliothèque](https://www.rouen.fr/fr/adresse/bibliotheque-municipale-de-la-grandmare) propose des instruments de musique et des kits ornithologiques. Les instruments sont réservés aux emprunteurs adultes. Accès par le T2, arrêt Couperin.

**Pour découvrir la musique: Aretha Franklin (ancienne Saint-Sever).** Au premier étage du centre commercial Saint-Sever, 65 avenue de Bretagne, la [bibliothèque](https://rouen.fr/fr/adresse/bibliotheque-municipale-saint-sever) propose des partitions, des méthodes d'apprentissage, un MusicLab et un espace de jeux vidéo. Accès par le métro Saint-Sever.

**Pour jardiner: Amélie Bosquet (ancienne Capucins).** Au 21 rue des Capucins, la [bibliothèque](https://rouen.fr/index.php/fr/adresse/bibliotheque-municipale-des-capucins) possède une grainothèque, une bouturothèque et des bacs de jardinage. Il s'agit d'échanges de graines et de plantes et d'activités de découverte, pas d'un prêt d'outils.

**Pour les tout-petits: Simone-de-Beauvoir.** Au pôle culturel Grammont, rue Henri-II-de-Plantagenêt, cette [bibliothèque](https://rouen.fr/adresse/bibliotheque-municipale-simone-de-beauvoir) dispose d'une marmothèque pour les enfants de 0 à 6 ans accompagnés et de kits ornithologiques.

**Pour créer et explorer le numérique: Émilie du Châtelet (ancienne Châtelet).** Place du Châtelet, la [bibliothèque](https://rouen.fr/fr/adresse/bibliotheque-municipale-du-chatelet) propose des jeux vidéo et un espace de fabrication, le ChaMaLab. Les consoles de jeux vidéo sont réservées aux adultes.

Les quatre nouveaux noms, adoptés par le conseil municipal en février 2026 pour une application au 1er mars, peuvent encore coexister avec les anciens sur certaines fiches de la Ville. [Voir la délibération](https://rouen.fr/fr/deliberation/2026-02-12/5-6).

## Comment obtenir sa carte gratuite ?

L'inscription au réseau municipal est gratuite pour tous, y compris les personnes qui résident hors de Rouen, et valable un an. Pour vous inscrire, prévoyez:

- une pièce d'identité ou un livret de famille pour un enfant;
- un justificatif de domicile de moins de six mois ou une attestation sur l'honneur;
- une autorisation parentale pour les moins de 16 ans.

Vous pouvez effectuer une préinscription sur le [portail Rouen Bibliothèques](https://bibliotheques.rouen.fr/). Pour les objets, demandez à l'établissement les conditions spécifiques, notamment l'âge autorisé, la durée et le nombre d'emprunts.

## Avant d'emprunter un outil ou un instrument

Les livres et autres documents peuvent circuler entre les bibliothèques du réseau, mais **les objets doivent être rendus dans leur bibliothèque d'origine**. Consultez le [catalogue](https://bibliotheques.rouen.fr/) ou contactez l'établissement avant le déplacement: la présence d'un équipement dans les collections ne garantit pas sa disponibilité immédiate ni sa réservation.

Vérifiez aussi les horaires de la bibliothèque choisie, notamment pendant les vacances scolaires.

## Les règles modifiées en novembre 2026

La [délibération du 8 octobre 2026](https://rouen.fr/fr/deliberation/2026-10-08/1-29) précise que les enfants de moins de six ans doivent être accompagnés d'un adulte ou d'un frère ou d'une sœur d'au moins 11 ans. Les parents restent responsables de leurs enfants.

Depuis le 1er novembre 2026, chaque usager inscrit peut bénéficier de dix impressions ou photocopies gratuites par mois. L'emprunt à la bricothèque a également été ouvert aux associations et structures rouennaises. L'inscription au réseau reste gratuite.

Si vous prévoyez une journée entière sur place, notre [guide de Rouen en famille](https://www.fam-space.fr/destinations/normandie/seine-maritime/rouen/) propose d'autres idées de visites.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/rouen-sur-mer-2026-en-famille/ | Rouen sur Mer 2026: jeux, ateliers et plage urbaine sur les quais | sorties | Rouen, Seine-Maritime, Normandie
- /articles/bons-plans/musees-gratuits-autour-de-rouen-lesquels-choisir-avec-des-enfants/ | Musées gratuits autour de Rouen: lesquels choisir avec des enfants ? | bons-plans | Rouen, Seine-Maritime, Normandie
- /articles/vie-pratique/bibliotheques-de-la-marne-en-famille-livres-jeux-et-services-numeriques/ | Bibliothèques de la Marne en famille: livres, jeux et services numériques | vie-pratique | Marne, Grand Est
- /articles/vie-pratique/emprunter-des-jeux-a-tours-mirabeau-ou-la-maison-des-jeux/ | Emprunter des jeux à Tours: Mirabeau ou la Maison des Jeux? | vie-pratique | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/sorties/soiree-jeux-gratuite-a-paris-le-21-novembre-2026-jeux-video-et-jeux-de-societe-en-famille/ | Soirée jeux gratuite à Paris le 21 novembre 2026: jeux vidéo et jeux de société en famille | sorties | Paris, Paris, Île-de-France
- /articles/vie-pratique/montlouis-sur-loire-emprunter-jeux-liseuses-et-objets-a-la-mediatheque/ | Montlouis-sur-Loire: emprunter jeux, liseuses et objets à la médiathèque | vie-pratique | Montlouis-sur-Loire, Indre-et-Loire, Centre-Val de Loire
- /articles/vie-pratique/ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison/ | Ludothèques autour de Dinan: emprunter des jeux pour la maison | vie-pratique | Côtes-d'Armor, Bretagne
- /articles/bons-plans/a-marie-galante-l-habitation-murat-se-decouvre-gratuitement-en-famille/ | À Marie-Galante, l’habitation Murat se découvre gratuitement en famille | bons-plans | Grand-Bourg, Guadeloupe, Guadeloupe
- /articles/vie-pratique/bibliotheques-de-rouen-emprunter-gratuitement-outils-instruments-et-jeux/ | Bibliothèques de Rouen: emprunter gratuitement outils, instruments et jeux | vie-pratique | Rouen, Seine-Maritime, Normandie
- /articles/evenements/festival-du-livre-jeunesse-de-rouen-2026-quel-jour-et-quelles-activites-choisir-avec-les-enfants/ | Festival du livre jeunesse de Rouen 2026: dates, tarifs et activités en famille | evenements | Rouen, Seine-Maritime, Normandie
- /articles/evenements/rouen-givree-2026-en-famille-marche-de-noel-et-refuge-givre/ | Rouen Givrée 2026 en famille: marché de Noël et Refuge Givré | evenements | Rouen, Seine-Maritime, Normandie
- /articles/parentalite/ludobulle-a-rouen-peut-on-venir-sans-inscription-avec-un-enfant-de-moins-de-4-ans/ | Ludobulle à Rouen: peut-on venir sans inscription avec un enfant de moins de 4 ans? | parentalite | Rouen, Seine-Maritime, Normandie
- /articles/activites/visiter-le-museum-du-havre-avec-des-enfants-que-decouvrir/ | Visiter le Muséum du Havre avec des enfants: que découvrir ? | activites | Le Havre, Seine-Maritime, Normandie
- /articles/voyages/week-end-a-etretat-en-famille-organiser-deux-jours-autour-des-falaises/ | Week-end à Étretat en famille: organiser deux jours autour des falaises | voyages | Étretat, Seine-Maritime, Normandie
- /articles/sorties/parc-de-cleres-avec-des-enfants-le-pass-famille-vaut-il-le-coup/ | Parc de Clères avec des enfants: le pass famille vaut-il le coup? | sorties | Clères, Seine-Maritime, Normandie
- /articles/cuisine/foire-aux-harengs-de-dieppe-2026-quoi-gouter-et-comment-preparer-la-journee/ | Foire aux Harengs de Dieppe 2026: quoi goûter et comment préparer la journée | cuisine | Dieppe, Seine-Maritime, Normandie
- /articles/vie-pratique/transaltitude-hiver-2026-2027-partir-a-la-neige-en-isere-sans-voiture/ | Transaltitude hiver 2026-2027: partir à la neige en Isère sans voiture | vie-pratique | Isère, Auvergne-Rhône-Alpes
- /articles/vie-pratique/ordi-lot-2026-2027-prix-demarches-et-delais-pour-les-familles/ | Ordi'Lot 2026-2027: prix, démarches et délais pour les familles | vie-pratique | Lot, Occitanie
- /articles/vie-pratique/france-services-en-charente-ou-obtenir-de-l-aide-pour-ses-demarches-administratives/ | France services en Charente: où obtenir de l'aide pour ses démarches administratives ? | vie-pratique | Charente, Nouvelle-Aquitaine
- /articles/vie-pratique/aeroport-de-lille-avec-des-enfants-preparer-le-depart-jusqu-a-l-embarquement/ | Aéroport de Lille avec des enfants: préparer le départ jusqu’à l’embarquement | vie-pratique | Lesquin, Nord, Hauts-de-France
- /articles/vie-pratique/ludotheque-ricochet-a-sainte-sigolene-jouer-et-emprunter-en-famille/ | Ludothèque Ricochet à Sainte-Sigolène: jouer et emprunter en famille | vie-pratique | Sainte-Sigolène, Haute-Loire, Auvergne-Rhône-Alpes
- /articles/vie-pratique/cabanes-des-1-000-premiers-jours-en-seine-saint-denis-ou-aller-avec-son-enfant/ | Cabanes des 1 000 premiers jours en Seine-Saint-Denis: où aller avec son enfant ? | vie-pratique | Seine-Saint-Denis, Île-de-France

### Historique Radar lié

- opportunity | /articles/evenements/festival-du-livre-jeunesse-de-rouen-2026-quel-jour-et-quelles-activites-choisir-avec-les-enfants/ | 2026-11-02T00:36:18.455Z
- refresh | /articles/vie-pratique/ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison/ | 2026-11-11T22:30:20.462Z
- opportunity | /articles/sorties/soiree-jeux-gratuite-a-paris-le-21-novembre-2026-jeux-video-et-jeux-de-societe-en-famille/ | 2026-11-05T19:28:08.723Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
