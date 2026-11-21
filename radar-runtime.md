# Radar Fam Space - Phase 2/3

## Mission

Radar surveille en priorité les articles Fam Space qui gagnent rapidement des impressions Google puis les perdent quelques jours plus tard. Il cherche ensuite les autres articles existants à améliorer réellement. Seulement s'il ne trouve aucune amélioration utile, il recherche un événement exceptionnel avec un fort potentiel d'audience et, lorsque c'est naturel, d'affiliation. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 2/3

Tu es journaliste web et responsable du parcours lecteur. Le candidat validé de phase 1 est fourni intégralement plus bas. Pour un refresh, l'article source exact est fourni intégralement plus bas.

Un refresh utilise l'ancien article comme référence interne, mais le résultat doit se lire comme un article actuel et autonome. Toute information encore vraie et utile doit rester, notamment prix décisionnels, durées, réservation, âge/taille, accessibilité, accès, contraintes, services bébé/enfants, repas et autres détails pratiques; une information fausse, périmée ou réellement redondante peut être retirée.

Suis le diagnostic éditorial du brief:
- `rank_loss`: réponds mieux aux intentions réellement en recul;
- `coverage_loss`: améliore la couverture utile sans présenter cela comme une perte de ranking;
- `uncertain`: applique uniquement la raison éditoriale indépendante vérifiée;
- `needs_query_check`: les recherches Google n'ont pas été diagnostiquées; applique uniquement la lacune éditoriale indépendante vérifiée, sans présenter la baisse d'impressions comme une perte de classement;
- opportunity: construis l'article autour de la décision choisie en phase 1. Le titre, le sous-titre et le résumé de phase 1 sont des formulations de travail: réévalue-les à partir de l'article final au lieu de reprendre mécaniquement la formulation de la décision.

Utilise des sources directement responsables. Les sources utilisées figurent dans `sources` et sont liées dans le corps lorsqu'elles ne concurrencent pas une offre partenaire. Aucun H1, tableau Markdown ou section Sources.

Sélectionne l'information au lieu de l'épuiser. Une information importante doit normalement apparaître une seule fois: l'introduction, les sections et la fin ne doivent pas redire la même chose. Une conclusion n'est pas obligatoire si elle ne fait que résumer. La structure doit découler du sujet et il n'existe aucun objectif de longueur; arrête-toi lorsque le sujet est traité complètement, sans remplissage.

Applique directement les règles partenaires ci-dessous.

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


Sélectionne seulement les liens internes réellement utiles et vérifie les routes avant usage. Lorsqu'une autre page Fam Space traite déjà correctement un sous-sujet, donne uniquement le contexte nécessaire puis renvoie vers cette page au lieu de refaire son contenu. Dans le texte public, oriente simplement le lecteur vers cette page sans commenter l'organisation éditoriale entre les articles. Le maillage doit prolonger la lecture et réduire les répétitions entre articles, pas seulement ajouter des liens.

Si du contenu temporaire est ajouté à un evergreen, utilise `reviewAt`; pour un événement pur, utilise `eventEndsAt`.

Soumets le résultat via `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées, puis le corps complet. **Ne recopie pas les métadonnées inchangées, aucun bloc `radar`, aucune branche et aucun SHA.** La plomberie mécanique conserve le reste, normalise la syntaxe de la requête et préserve le diagnostic GSC, la cible, le slug et les champs protégés.

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
  phase: 1
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

## Mission retenue
Clarifier les conditions d'emprunt des objets, outils et jeux dans les bibliothèques de Rouen, sans transformer l'article en annuaire.

## Pourquoi cette mission
Le snapshot GSC montre 27 impressions au pic puis 0 sur les trois derniers jours, sans cause SEO établie. La lacune éditoriale est indépendante et vérifiable : l'article annonce l'emprunt gratuit d'outils, mais ne distingue pas la gratuité générale de la carte et les conditions tarifaires particulières de la bricothèque. La grille officielle 2025 sépare explicitement ces prêts et réserve la gratuité de l'outillage à certains publics. La délibération d'octobre 2026 annonce une nouvelle grille au 1er novembre : vérifier cette grille avant de formuler les règles actuelles. L'article mentionne des jeux vidéo sur place sans expliquer clairement quels jeux peuvent être empruntés.

## Décision du lecteur
Identifier le service adapté à l'âge des enfants et au type d'objet, connaître le coût réel et les conditions du prêt avant de se déplacer.

## Faits à traiter
- Vérifier dans la grille en vigueur depuis le 1er novembre 2026 les tarifs et exonérations du prêt d'outils de bricolage/jardinage, et corriger le titre, le résumé et les passages suggérant une gratuité universelle si nécessaire.
- Distinguer jeux, jeux vidéo, consoles, instruments, outils et activités sur place; vérifier les limites d'âge, la durée, la réservation et les retours dans l'établissement d'origine. Ne pas promettre un prêt non documenté.
- Préserver les six adresses, leurs noms anciens/nouveaux, l'inscription gratuite pour tous, les justificatifs, les règles d'accompagnement des moins de six ans et les dix impressions gratuites mensuelles.
- Ne pas attribuer la chute GSC à ces lacunes sans preuve.

## Sources de départ
- Ville de Rouen, délibération du 8 octobre 2026 et annexes tarifaires en vigueur au 1er novembre : https://rouen.fr/fr/deliberation/2026-10-08/1-29
- Ville de Rouen, grille tarifaire 2025 (pour comparaison historique, non comme tarif actuel) : https://rouen.fr/sites/default/files/download/2025/grille_tarifaire_bibliotheques_2025.pdf
- Ville de Rouen, bibliothèque Parment : https://rouen.fr/adresse/bibliotheque-municipale-roger-parment
- Ville de Rouen, bibliothèque du Châtelet : https://rouen.fr/fr/adresse/bibliotheque-municipale-du-chatelet
- Catalogue du réseau : https://bibliotheques.rouen.fr/

## Affiliation
Aucune offre partenaire naturelle pour ce service municipal.

## Continuations internes
- Conserver le lien vers la destination Rouen pour les autres sorties familiales, sans répéter son guide.

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
