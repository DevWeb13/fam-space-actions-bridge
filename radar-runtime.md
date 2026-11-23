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
title: "Aquarium de Touraine en famille: que voir avec les enfants ?"
subtitle: Poissons de Loire, espèces tropicales et monde marin à Lussault-sur-Loire
summary: Trois univers aquatiques à explorer près d'Amboise, avec des conseils par âge, les tarifs 2026 et les équipements utiles aux familles.
slug: aquarium-de-touraine-en-famille-que-voir-avec-les-enfants
status: published
publishedAt: 2026-11-04T17:00:39+01:00
updatedAt: null
category: activites
readingTime: 4
location:
  city: Lussault-sur-Loire
  department: Indre-et-Loire
  region: Centre-Val de Loire
topic:
  key: activites|lussault-sur-loire|aquarium-de-touraine-en-famille-que-voir-avec-les-enfants|2026
  keywords:
    - Aquarium de Touraine en famille
    - aquarium Lussault-sur-Loire enfants
    - sortie famille Amboise
image:
  src: /images/articles/2026/11/aquarium-de-touraine-en-famille-que-voir-avec-les-enfants.webp
  alt: Silure glane photographié dans un bassin du Grand Aquarium de Touraine à Lussault-sur-Loire
sources:
  - title: Aquarium de Touraine - Visiter avec des enfants
    url: https://www.aquariumdetouraine.com/ma-visite/visiter-laquarium-de-touraine-avec-des-enfants
  - title: Aquarium de Touraine - Toutes les offres
    url: https://www.aquariumdetouraine.com/informations-pratiques/tarifs-et-reservations/toutes-les-offres
  - title: Aquarium de Touraine - Site officiel et calendrier
    url: https://www.aquariumdetouraine.com/
affiliate:
  enabled: true
  type: travel
  destination: Lussault-sur-Loire
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/activites/(2026)/(11)/aquarium-de-touraine-en-famille-que-voir-avec-les-enfants/index.md
  targetSha: 556d2ad488f764226aded5799355c96a9a25d3fe
  targetUrl: /articles/activites/aquarium-de-touraine-en-famille-que-voir-avec-les-enfants/
  decision: Savoir quels jours visiter réellement l'Aquarium de Touraine avant les vacances de Noël et choisir une visite familiale adaptée, sans acheter un billet pour un jour fermé.
  affiliationPotential: Conserver les deux hébergements Booking.com déjà présents pour un séjour près d'Amboise; billetterie de l'aquarium à vérifier, sans inventer d'offre partenaire.
  gsc:
    retrievedAt: 2026-11-23T02:29:06+01:00
    dataThrough: 2026-11-20
    signal: uncertain
    basis: "Visibilité récente : 21 impressions sur trois jours, puis 6 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-06
    peakEnd: 2026-11-08
    recentStart: 2026-11-18
    recentEnd: 2026-11-20
    peakImpressions: 21
    recentImpressions: 6
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0.444
    focusQueries:
      - aquarium de touraine
      - aquarium de lussault
      - aquarium lussault sur loire
      - aquarium tours
      - grand aquarium de touraine
---

## Mission retenue
Actualiser l'article existant sur l'Aquarium de Touraine à Lussault-sur-Loire, en priorité son calendrier d'ouverture de fin 2026.

## Pourquoi cette mission
Le snapshot GSC montre 21 puis 6 impressions sur des fenêtres de trois jours, sans cause établie. Lacune indépendante vérifiée: l'article avertit seulement que l'aquarium n'est pas ouvert tous les jours, alors que l'organisateur a publié le 3 novembre une règle précise pour la période précédant les vacances de Noël.

## Décision du lecteur
Choisir une date où l'aquarium accueille effectivement les familles et prévoir le billet et la durée adaptés.

## Faits à traiter
- Jusqu'aux vacances de Noël, ouverture uniquement les mercredis, samedis et dimanches, selon l'annonce officielle du 3 novembre 2026; pendant les vacances de Noël, retour annoncé à une ouverture quotidienne. Vérifier les dates précises et exceptions au calendrier officiel avant d'énoncer un jour particulier comme garanti.
- Conserver l'horaire général de 10 h à 18 h sur les jours ouverts, sous réserve des éventuelles exceptions, et la fin de saison au 3 janvier 2027.
- Préserver les trois univers, la durée de visite de 1 h 30, les tarifs datés/non datés et pack Tribu, le jeu Mickey, l'accessibilité poussette, les équipements bébé, les photos, crédits, sources et les deux hébergements Booking.com.
- Ne pas reprendre comme programme 2026 les animations de Noël 2025 encore visibles dans les archives du site.

## Sources de départ
- Aquarium de Touraine, annonce du 3 novembre 2026: https://www.aquariumdetouraine.com/laquarium/actualites/ouverture-les-mercredis-samedis-et-dimanches
- Aquarium de Touraine, calendrier et billetterie: https://www.aquariumdetouraine.com/
- Aquarium de Touraine, visite avec des enfants: https://www.aquariumdetouraine.com/ma-visite/en-famille

## Affiliation
Conserver les offres d'hébergement Booking.com existantes pour les familles qui prolongent leur visite près d'Amboise. Aucune billetterie affiliée supplémentaire vérifiée.

## Continuations internes
- Conserver le lien vers la destination Amboise pour prolonger le séjour.
- Éviter de développer le Parc Mini-Châteaux, dont la saison 2026 s'est terminée le 1er novembre.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/activites/(2026)/(11)/aquarium-de-touraine-en-famille-que-voir-avec-les-enfants/index.md

---
title: "Aquarium de Touraine en famille: que voir avec les enfants ?"
subtitle: Poissons de Loire, espèces tropicales et monde marin à Lussault-sur-Loire
summary: Trois univers aquatiques à explorer près d'Amboise, avec des conseils par âge, les tarifs 2026 et les équipements utiles aux familles.
slug: aquarium-de-touraine-en-famille-que-voir-avec-les-enfants
status: published
publishedAt: 2026-11-04T17:00:39+01:00
updatedAt: null
category: activites
readingTime: 4
location:
  city: Lussault-sur-Loire
  department: Indre-et-Loire
  region: Centre-Val de Loire
topic:
  key: activites|lussault-sur-loire|aquarium-de-touraine-en-famille-que-voir-avec-les-enfants|2026
  keywords:
    - Aquarium de Touraine en famille
    - aquarium Lussault-sur-Loire enfants
    - sortie famille Amboise
image:
  src: "/images/articles/2026/11/aquarium-de-touraine-en-famille-que-voir-avec-les-enfants.webp"
  alt: "Silure glane photographié dans un bassin du Grand Aquarium de Touraine à Lussault-sur-Loire"
sources:
  - title: Aquarium de Touraine - Visiter avec des enfants
    url: https://www.aquariumdetouraine.com/ma-visite/visiter-laquarium-de-touraine-avec-des-enfants
  - title: Aquarium de Touraine - Toutes les offres
    url: https://www.aquariumdetouraine.com/informations-pratiques/tarifs-et-reservations/toutes-les-offres
  - title: Aquarium de Touraine - Site officiel et calendrier
    url: https://www.aquariumdetouraine.com/
affiliate:
  enabled: true
  type: travel
  destination: Lussault-sur-Loire
---
<!-- article-image-credit -->
*Photo: [Bernard DUPONT from FRANCE](https://commons.wikimedia.org/wiki/File:European_Catfish_(Silurus_glanis)_(13532617795).jpg) - [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Lussault-sur-Loire, près d'Amboise, l'Aquarium de Touraine invite les familles à passer des poissons de la Loire aux eaux tropicales, puis aux océans. Cette sortie en intérieur permet aux jeunes enfants de s'émerveiller devant les bassins et aux plus grands de découvrir des animaux vivant dans des milieux très différents. Comptez environ 1 h 30 de visite, à adapter à leur rythme.

## Trois univers aquatiques à explorer

<!-- article-image-body:01 -->

![Goujons photographiés dans un bassin de l'Aquarium de Touraine](/images/articles/2026/11/aquarium-de-touraine-en-famille-que-voir-avec-les-enfants-body-01.webp)

*Photo: [Bernard DUPONT from FRANCE](https://commons.wikimedia.org/wiki/File:Gudgeons_(Gobio_gobio)_(13533313875).jpg) - [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

**Les eaux douces de la Loire** permettent de découvrir les poissons du fleuve et leurs particularités. C'est une bonne occasion de reconnaître des espèces locales et de comparer leurs formes et leurs déplacements.

**Les eaux tropicales** changent le décor avec des poissons aux couleurs, silhouettes et comportements variés. Les enfants peuvent observer ce qui distingue ces animaux de ceux de la Loire.

**Les eaux marines** prolongent le parcours vers les océans. Plutôt que de s'arrêter devant chaque bassin, laissez les enfants choisir les animaux qu'ils souhaitent observer plus longtemps.

L'aquarium indique une durée de visite d'environ **1 h 30**, avec un parcours entièrement intérieur.

## Des découvertes adaptées aux enfants

<!-- article-image-body:02 -->

![Discus rouge photographié dans un aquarium tropical à Lussault-sur-Loire](/images/articles/2026/11/aquarium-de-touraine-en-famille-que-voir-avec-les-enfants-body-02.webp)

*Photo: [Bernard DUPONT from FRANCE](https://commons.wikimedia.org/wiki/File:Discus_(Symphysodon_aequifasciatus)_red_hybrid_(13533123013).jpg) - [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Pour les tout-petits, la plupart des bassins sont suffisamment bas pour permettre une observation facile. Les enfants de 4 à 6 ans peuvent s'amuser à retrouver des couleurs ou à comparer les façons de nager. Avec les plus grands, on peut s'intéresser aux différences entre les trois milieux aquatiques.

L'audioguide gratuit **Aquabalade** est accessible grâce aux QR codes présents sur le parcours, sans application à installer. Un téléphone suffit pour écouter les explications choisies.

L'aquarium annonce également pour 2026 un **jeu de piste Mickey**, destiné aux enfants de plus de 6 ans, avec un support vendu 1,50 €. Vérifiez sa disponibilité le jour de la visite.

## Poussette, biberons et repas: les équipements utiles

Le parcours est **de plain-pied, sans escalier**, et accessible avec une poussette. Un micro-ondes près de l'accueil permet de réchauffer les biberons et les repas de bébé. Des espaces de change sont disponibles dans les toilettes hommes et femmes.

Le parking est gratuit pendant les horaires d'ouverture. Une aire de pique-nique se trouve à l'extérieur, sur le parking: par temps froid ou pluvieux, prévoyez une autre solution pour déjeuner.

## Tarifs 2026: quel billet choisir ?

Le **billet daté** coûte 16 € à partir de 13 ans et 12 € pour les enfants de 3 à 12 ans inclus. L'entrée est gratuite pour les moins de 3 ans.

Le **billet non daté** coûte 17,50 € par adulte et 13 € par enfant. Il permet de choisir un jour de visite, mais uniquement parmi les dates d'ouverture de la saison.

Pour une famille de **deux adultes et trois enfants de 3 à 12 ans**, le **pack Tribu daté à 65 €** est plus avantageux que cinq billets datés séparés, qui coûteraient 68 €. Le pack Tribu non daté est annoncé à 70 €. Ces packs sont proposés en ligne. Des tarifs famille nombreuse existent également sous conditions.

Les billets sont annoncés comme non échangeables, non modifiables et non remboursables. Vérifiez les conditions avant l'achat.

Le billet combiné avec le **Parc Mini-Châteaux** ne convient pas à une visite de ce parc après le 1er novembre 2026, date de fin de validité indiquée pour sa saison 2026.

## Dates et horaires: peut-on venir cet hiver ?

La saison annoncée s'étend du **7 février 2026 au 3 janvier 2027**. Les horaires affichés sont de **10 h à 18 h les jours d'ouverture**. Attention, l'aquarium n'est pas nécessairement ouvert tous les jours de cette période, notamment en automne et en hiver. Consultez le calendrier officiel avant de partir.

L'adresse est **lieu-dit Les Hauts Bœufs, 37400 Lussault-sur-Loire**, à proximité d'Amboise.

## Prolonger la sortie autour d'Amboise

Si vous souhaitez visiter la région sur deux jours, le [Clos Lussault à Lussault-sur-Loire](https://www.booking.com/hotel/fr/clos-lussault-troglogite.fr.html) propose des maisons de vacances avec cuisine équipée et plusieurs chambres, pratiques pour les repas en famille. Le [Novotel Amboise](https://www.booking.com/hotel/fr/amboise.fr.html) constitue une autre option, avec des chambres familiales, un restaurant et une aire de jeux. Vérifiez la capacité du logement choisi et les disponibilités pour vos dates.

Pour compléter votre séjour, découvrez aussi notre [guide d'Amboise en famille](https://www.fam-space.fr/destinations/centre-val-de-loire/indre-et-loire/amboise/).

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/parentalite/aide-a-domicile-en-indre-et-loire-quel-soutien-pour-les-parents/ | Aide à domicile en Indre-et-Loire: quel soutien pour les parents ? | parentalite | Indre-et-Loire, Centre-Val de Loire
- /articles/sorties/chateau-de-sully-sur-loire-en-famille-visites-et-activites-pour-les-enfants/ | Château de Sully-sur-Loire en famille: visites et activités pour les enfants | sorties | Sully-sur-Loire, Loiret, Centre-Val de Loire
- /articles/cuisine/marche-d-amboise-composer-un-pique-nique-tourangeau-avec-des-enfants/ | Marché d'Amboise: composer un pique-nique tourangeau avec des enfants | cuisine | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/maison/maison-de-vacances-a-amboise-avec-des-enfants-7-criteres-pour-bien-choisir/ | Maison de vacances à Amboise avec des enfants: 7 critères pour bien choisir | maison | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/vie-pratique/transport-scolaire-remi-en-indre-et-loire-que-faire-apres-la-date-limite-2026/ | Transport scolaire Rémi en Indre-et-Loire: que faire après la date limite 2026 | vie-pratique | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/vie-pratique/montlouis-sur-loire-emprunter-jeux-liseuses-et-objets-a-la-mediatheque/ | Montlouis-sur-Loire: emprunter jeux, liseuses et objets à la médiathèque | vie-pratique | Montlouis-sur-Loire, Indre-et-Loire, Centre-Val de Loire
- /articles/activites/cite-de-la-langue-francaise-en-famille-quelle-visite-choisir-en-2026/ | Cité internationale de la langue française en famille: que voir avec les enfants? | activites | Villers-Cotterêts, Aisne, Hauts-de-France
- /articles/sorties/villa-ephrussi-de-rothschild-en-famille-que-voir-dans-la-villa-et-les-jardins/ | Villa Ephrussi de Rothschild en famille: que voir dans la villa et les jardins? | sorties | Saint-Jean-Cap-Ferrat, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/activites/aquarium-de-touraine-en-famille-que-voir-avec-les-enfants/ | Aquarium de Touraine en famille: que voir avec les enfants ? | activites | Lussault-sur-Loire, Indre-et-Loire, Centre-Val de Loire
- /articles/sorties/forteresse-royale-de-chinon-en-famille-tours-histoire-et-jeux/ | Forteresse royale de Chinon en famille: tours, histoire et jeux | sorties | Chinon, Indre-et-Loire, Centre-Val de Loire
- /articles/cuisine/halles-de-tours-en-famille-un-panier-d-automne-deux-repas-simples/ | Halles de Tours en famille: un panier d’automne, deux repas simples | cuisine | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | Marchés de Noël de Tours 2026 en famille: horaires, animations et budget | evenements | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-2026-a-villandry-spectacles-et-ateliers-a-choisir-selon-l-age/ | Noël 2026 à Villandry: décors, spectacle d'ombres et ateliers en famille | evenements | Villandry, Indre-et-Loire, Centre-Val de Loire
- /articles/vie-pratique/emprunter-des-jeux-a-tours-mirabeau-ou-la-maison-des-jeux/ | Emprunter des jeux à Tours: Mirabeau ou la Maison des Jeux? | vie-pratique | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/village-du-pere-noel-a-montbazon-2026-dates-activites-et-budget-en-famille/ | Village du Père Noël à Montbazon 2026: dates, activités et budget en famille | evenements | Montbazon, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | Noël à Chenonceau 2026: décors, nocturnes et tarifs en famille | evenements | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | Noël au château d'Amboise 2026: animations, nocturnes et tarifs en famille | evenements | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | Monument Jeu d'enfant 2026 à Azay-le-Rideau: animaux cachés et contes en famille | evenements | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/activites/parc-animalier-d-auvergne-en-famille-billets-animaux-et-conseils-de-visite/ | Parc animalier d'Auvergne en famille: billets, animaux et conseils de visite | activites | Ardes, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/activites/ferme-des-chanteraines-en-famille-animaux-ateliers-et-balade-gratuite/ | Ferme des Chanteraines en famille: animaux, ateliers et balade gratuite | activites | Villeneuve-la-Garenne, Hauts-de-Seine, Île-de-France
- /articles/activites/musee-dobree-en-famille-a-nantes-jeux-et-parcours-selon-l-age/ | Musée Dobrée en famille à Nantes: jeux et parcours selon l’âge | activites | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/activites/ateliers-parfum-a-grasse-en-famille-lesquels-choisir-selon-l-age/ | Ateliers parfum à Grasse en famille: lesquels choisir selon l'âge ? | activites | Grasse, Alpes-Maritimes, Provence-Alpes-Côte d’Azur

### Historique Radar lié

- opportunity | /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | 2026-10-28T21:29:26.054Z
- refresh | /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | 2026-11-22T03:33:27.882Z
- refresh | /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | 2026-11-23T00:35:31.900Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | 2026-10-11T16:33:21.125Z
- opportunity | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-10-24T12:31:27.784Z
- refresh | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-11-13T22:32:33.388Z
- opportunity | /articles/evenements/noel-2026-a-villandry-spectacles-et-ateliers-a-choisir-selon-l-age/ | 2026-10-27T10:35:41.254Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | 2026-10-24T06:28:53.730Z
- refresh | /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | 2026-11-14T15:26:52.936Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
