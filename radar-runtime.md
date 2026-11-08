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

Soumets le résultat via `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet. **Ne recopie aucun bloc `radar` et ne fournis aucune branche ni aucun SHA.** La plomberie mécanique conserve le diagnostic GSC, la cible, le slug et les champs protégés.

## Candidat validé de la phase précédente

---
title: "Parc floral d’Orléans gratuit en hiver: horaires et sortie avec les enfants"
subtitle: Du 2 novembre 2026 au 18 mars 2027, profitez des jardins sans billet, mais sans les attractions habituelles
summary: "Le Parc floral de La Source est gratuit en hiver. Dates, horaires, jeux, animaux, accès et services fermés: l'essentiel pour une balade en famille à Orléans."
slug: parc-floral-d-orleans-gratuit-en-hiver-horaires-et-sortie-avec-les-enfants
status: published
publishedAt: 2026-10-26T22:02:51+01:00
updatedAt: null
category: bons-plans
readingTime: 4
location:
  city: Orléans
  department: Loiret
  region: Centre-Val de Loire
topic:
  key: bons-plans|orleans|parc-floral-d-orleans-gratuit-en-hiver-horaires-et-sortie-avec-les-enfants|2026
  keywords:
    - Parc floral Orléans gratuit hiver 2026 2027
    - Parc floral de La Source enfants
    - sortie gratuite famille Loiret
image:
  src: /images/articles/2026/10/parc-floral-d-orleans-gratuit-en-hiver-horaires-et-sortie-avec-les-enfants.webp
  alt: Bassin du Miroir et jardins du Parc floral de la Source à Orléans, photographiés hors hiver
sources:
  - title: Parc floral de La Source - Saison Hiver, annonce du 22 octobre 2026
    url: https://www.parcfloraldelasource.com/actualite/saison-hiver/
  - title: Parc floral de La Source - Informations pratiques et accès
    url: https://www.parcfloraldelasource.com/preparez-votre-visite/
  - title: Parc floral de La Source - Aires de jeux
    url: https://www.parcfloraldelasource.com/les-loisirs/activites-en-plein-air/
  - title: Parc floral de La Source - Les animaux de la ferme
    url: https://www.parcfloraldelasource.com/le-coin-des-animaux/animaux-de-ferme/
  - title: Parc floral de La Source - Accessibilité
    url: https://www.parcfloraldelasource.com/accessibilite/
  - title: Parc floral de La Source - Horaires et informations pratiques
    url: https://www.parcfloraldelasource.com/horaires-infos-pratiques/
  - title: Ville d’Orléans - Parc floral de La Source, les rendez-vous 2026
    url: https://www.orleans.fr/actualites/detail/parc-floral-de-la-source-les-rendez-vous-2026
affiliate:
  enabled: true
  type: travel
  destination: Orléans
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/bons-plans/(2026)/(10)/parc-floral-d-orleans-gratuit-en-hiver-horaires-et-sortie-avec-les-enfants/index.md
  targetSha: 1cc4eadff502312d77769145943b916ae96eb4e8
  targetUrl: /articles/bons-plans/parc-floral-d-orleans-gratuit-en-hiver-horaires-et-sortie-avec-les-enfants/
  decision: Préparer une promenade hivernale gratuite au Parc floral de La Source en sachant quelles règles s'appliquent aux enfants, aux jeux et aux équipements emportés.
  affiliationPotential: Conserver l'hébergement Abritel déjà présent pour les familles en séjour à Orléans; aucune nouvelle offre naturelle à ajouter.
  gsc:
    retrievedAt: 2026-11-08T02:28:56+01:00
    dataThrough: 2026-11-05
    signal: uncertain
    basis: "Visibilité récente : 69 impressions sur trois jours, puis 20 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-30
    peakEnd: 2026-11-01
    recentStart: 2026-11-03
    recentEnd: 2026-11-05
    peakImpressions: 69
    recentImpressions: 20
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - parc floral gratuit
      - parc floral de la source gratuit
---

## Mission retenue
Actualiser ponctuellement le guide de la promenade hivernale gratuite au Parc floral de La Source à Orléans, du 2 novembre 2026 au 18 mars 2027.

## Pourquoi cette mission
Le snapshot GSC signale 69 impressions sur trois jours puis 20, sans diagnostic de perte de classement. L'article est déjà exact sur les dates et fermetures; en revanche, il omet des règles concrètes du règlement intérieur officiel qui peuvent changer la préparation d'une sortie familiale.

## Décision du lecteur
Savoir si les enfants peuvent venir seuls et quels jeux ou moyens de déplacement sont autorisés, sans confondre promenade gratuite et attractions saisonnières.

## Faits à traiter
Le règlement officiel interdit l'accès aux moins de 16 ans non accompagnés d'un adulte. Il autorise tricycles, vélos, trottinettes, rollers, patins et draisiennes uniquement aux enfants de moins de 6 ans, sous surveillance; ballons, frisbees et boomerangs sont interdits. Vérifier la formulation exacte et préciser ces règles sans en faire une longue section. Conserver les dates et horaires d'hiver, les fermetures des attractions et services, l'incertitude sur les jeux et animaux, les conseils poussette, sanitaires, accès, les trois images et leurs crédits ainsi que l'hébergement existant.

## Sources de départ
- Parc floral, saison hiver du 22 octobre 2026 : https://www.parcfloraldelasource.com/actualite/saison-hiver/
- Règlement intérieur officiel : https://www.parcfloraldelasource.com/file/2025/07/25-DEP-Parc-Floral-Reglement-interieur-AR-PREF.pdf
- Informations pratiques : https://www.parcfloraldelasource.com/horaires-infos-pratiques/

## Affiliation
Conserver l'offre Abritel existante, adaptée aux familles qui séjournent à Orléans. Aucune affiliation supplémentaire nécessaire.

## Continuations internes
Conserver le lien existant vers le guide des maisons de vacances dans le Loiret. Ne pas dupliquer un guide général de séjour à Orléans.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/bons-plans/(2026)/(10)/parc-floral-d-orleans-gratuit-en-hiver-horaires-et-sortie-avec-les-enfants/index.md

---
title: "Parc floral d’Orléans gratuit en hiver: horaires et sortie avec les enfants"
subtitle: Du 2 novembre 2026 au 18 mars 2027, profitez des jardins sans billet, mais sans les attractions habituelles
summary: "Le Parc floral de La Source est gratuit en hiver. Dates, horaires, jeux, animaux, accès et services fermés: l'essentiel pour une balade en famille à Orléans."
slug: parc-floral-d-orleans-gratuit-en-hiver-horaires-et-sortie-avec-les-enfants
status: published
publishedAt: 2026-10-26T22:02:51+01:00
updatedAt: null
category: bons-plans
readingTime: 4
location:
  city: Orléans
  department: Loiret
  region: Centre-Val de Loire
topic:
  key: bons-plans|orleans|parc-floral-d-orleans-gratuit-en-hiver-horaires-et-sortie-avec-les-enfants|2026
  keywords:
    - Parc floral Orléans gratuit hiver 2026 2027
    - Parc floral de La Source enfants
    - sortie gratuite famille Loiret
image:
  src: "/images/articles/2026/10/parc-floral-d-orleans-gratuit-en-hiver-horaires-et-sortie-avec-les-enfants.webp"
  alt: "Bassin du Miroir et jardins du Parc floral de la Source à Orléans, photographiés hors hiver"
sources:
  - title: Parc floral de La Source - Saison Hiver, annonce du 22 octobre 2026
    url: https://www.parcfloraldelasource.com/actualite/saison-hiver/
  - title: Parc floral de La Source - Informations pratiques et accès
    url: https://www.parcfloraldelasource.com/preparez-votre-visite/
  - title: Parc floral de La Source - Aires de jeux
    url: https://www.parcfloraldelasource.com/les-loisirs/activites-en-plein-air/
  - title: Parc floral de La Source - Les animaux de la ferme
    url: https://www.parcfloraldelasource.com/le-coin-des-animaux/animaux-de-ferme/
  - title: Parc floral de La Source - Accessibilité
    url: https://www.parcfloraldelasource.com/accessibilite/
  - title: Parc floral de La Source - Horaires et informations pratiques
    url: https://www.parcfloraldelasource.com/horaires-infos-pratiques/
  - title: Ville d’Orléans - Parc floral de La Source, les rendez-vous 2026
    url: https://www.orleans.fr/actualites/detail/parc-floral-de-la-source-les-rendez-vous-2026
affiliate:
  enabled: true
  type: travel
  destination: Orléans
---
<!-- article-image-credit -->
*Photo: [ManuD](https://commons.wikimedia.org/wiki/File:Parc-floral-chateau.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Envie de sortir avec les enfants sans payer d'entrée cet hiver ? À Orléans, le **Parc floral de La Source** ouvre gratuitement ses **35 hectares de jardins** du **2 novembre 2026 au 18 mars 2027**. On y vient surtout pour marcher, découvrir les paysages de saison et prendre l'air. En revanche, plusieurs attractions et services sont fermés: mieux vaut le savoir avant de promettre une journée de jeux aux enfants.

## Gratuité et horaires: les dates à retenir

Selon l'[annonce officielle du parc publiée le 22 octobre 2026](https://www.parcfloraldelasource.com/actualite/saison-hiver/), l'accès est gratuit aux horaires suivants:

- **Du 2 novembre 2026 au 18 mars 2027:** de **12 h à 17 h**, dernière entrée à **16 h**.
- **Les 24 et 31 décembre 2026:** de **12 h à 16 h**, dernière entrée à **15 h**.
- **Les 25 décembre 2026 et 1er janvier 2027:** **fermé**.

Aucun billet n'est nécessaire pour cette promenade. Une [page plus ancienne de la Ville d'Orléans](https://www.orleans.fr/actualites/detail/parc-floral-de-la-source-les-rendez-vous-2026) évoque une gratuité dès le 1er novembre, mais la communication plus récente du parc, directement responsable de l'accueil, confirme le **2 novembre**.

## Que voir avec les enfants en hiver ?

<!-- article-image-body:01 -->

![Grand toboggan de l'aire de jeux du Parc floral de La Source, photographié en été, accès hivernal non garanti](/images/articles/2026/10/parc-floral-d-orleans-gratuit-en-hiver-horaires-et-sortie-avec-les-enfants-body-01.webp)

*Photo: [DC](https://commons.wikimedia.org/wiki/File:Parc_floral_de_La_Source_%E2%80%93_le_grand_toboggan.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le plaisir principal reste la balade dans les jardins, entre arbres, pelouses et paysages qui changent avec les saisons. Le parc est grand: avec de jeunes enfants, une petite boucle suffit pour profiter du lieu.

La partie haute abrite habituellement une **mini-ferme** et **quatre aires de jeux**. Sur sa [présentation des jeux](https://www.parcfloraldelasource.com/les-loisirs/activites-en-plein-air/), le parc décrit les Perroquets, avec toboggans et pont suspendu, les Balançoires, dont un siège parent-enfant annoncé dès 1 an, le Grand Toboggan et le Pyracorde, une structure de cordes à escalader.

La [mini-ferme](https://www.parcfloraldelasource.com/le-coin-des-animaux/animaux-de-ferme/) accueille habituellement chèvres, moutons, ânes, poneys, lapins et volailles. Des paons se déplacent aussi librement dans le parc.

**Attention:** ces pages décrivent les installations habituelles, mais l'annonce hivernale ne confirme ni l'accès à toutes les aires de jeux ni la visibilité des animaux chaque jour. Considérez-les comme un éventuel complément à la promenade, pas comme une activité garantie.

## Quelle promenade prévoir selon l'âge ?

<!-- article-image-body:02 -->

![Paysage brumeux du Parc floral de La Source à Orléans, photographié en juillet 2025](/images/articles/2026/10/parc-floral-d-orleans-gratuit-en-hiver-horaires-et-sortie-avec-les-enfants-body-02.webp)

*Photo: [KRaikkonen01](https://commons.wikimedia.org/wiki/File:Parc_Floral_Orl%C3%A9ans_Brume.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

**Avec un bébé ou un enfant de maternelle**, une sortie de **45 minutes à une heure** peut suffire. Restez près de l'entrée et rejoignez la mini-ferme seulement si le chemin est praticable et l'espace accessible.

**Avec des enfants plus grands**, prévoyez plutôt **une heure à une heure et demie** pour explorer davantage les jardins, en adaptant le parcours à la météo. Ces durées sont des suggestions, pas des circuits officiels.

La [page accessibilité du parc](https://www.parcfloraldelasource.com/accessibilite/) précise que **la majorité des allées est carrossable**, avec des bancs pour faire des pauses. Un cheminement signalé relie les parties haute et basse par le secteur de la mini-ferme et des jeux. Cela ne garantit pas que tous les sentiers conviennent à une poussette, surtout par temps humide.

## Qu'est-ce qui est fermé pendant l'hiver ?

Le parc annonce la fermeture de **la serre aux papillons, du minigolf, des rosalies, des boutiques et des points de restauration** pendant cette période. Il ne faut donc pas compter sur un snack ou un restaurant pour déjeuner ou goûter.

Prévoyez de l'eau, une collation et des chaussures adaptées aux allées humides. Le site dispose normalement de **sanitaires et d'espaces bébé**, décrits dans ses [informations pratiques](https://www.parcfloraldelasource.com/horaires-infos-pratiques/), mais leur accessibilité précise pendant la fermeture de certains bâtiments n'est pas confirmée. Demandez à l'accueil quels équipements restent ouverts.

## Adresse, tramway et stationnement

Le Parc floral de La Source se situe **avenue du Parc Floral, 45100 Orléans**, dans le quartier de La Source.

- **En tramway:** ligne **A**, arrêt **Parc Floral** (également indiqué « Université / Parc Floral » sur certaines informations).
- **En voiture:** accès notamment par l'A71, sortie Orléans-La Source. Le parc annonce de **grands parkings gratuits** à proximité.
- **En bus:** les indications de lignes varient selon les pages du parc. Vérifiez l'itinéraire actualisé auprès du réseau de transports avant de partir.

L'adresse et les accès figurent sur la [page officielle de préparation de visite](https://www.parcfloraldelasource.com/preparez-votre-visite/). Si votre déplacement dépend de l'ouverture des jeux, de la mini-ferme, d'un sanitaire adapté ou d'une entrée particulière, appelez le **02 38 49 30 00** avant de vous déplacer. Une fermeture exceptionnelle reste possible, notamment en cas de météo défavorable.

## Passer un week-end à Orléans

Pour les familles qui viennent de plus loin, la [maison cosy proche de CO'Met sur Abritel](https://www.abritel.fr/location-vacances/p2230008) peut servir de base pour un séjour à Orléans. Elle dispose de **trois chambres pour six personnes**, d'une cuisine et d'un jardin, près du tramway. Elle n'est pas à l'entrée du parc: vérifiez le trajet ainsi que les disponibilités à vos dates. Avant de réserver, notre [guide pour choisir une maison de vacances dans le Loiret](https://www.fam-space.fr/articles/maison/maison-de-vacances-dans-le-loiret-en-famille-les-criteres-a-verifier-avant-de-reserver/) aide à contrôler couchages, équipements et coût total.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/maison/composteur-gratuit-a-orleans-metropole-comment-en-profiter-en-2026/ | Composteur gratuit à Orléans Métropole: comment en profiter en 2026 | maison | Orléans, Loiret, Centre-Val de Loire
- /articles/sorties/chasse-motifs-loire-orleans-famille-2026/ | Chasse aux motifs de Loire à Orléans: une balade gratuite pour les 6 à 12 ans | sorties | Orléans, Loiret, Centre-Val de Loire
- /articles/activites/mobe-d-orleans-en-famille-fossiles-jeux-et-biodiversite/ | MOBE d’Orléans en famille: fossiles, jeux et biodiversité | activites | Orléans, Loiret, Centre-Val de Loire
- /articles/evenements/noel-a-orleans-2026-en-famille-marches-horaires-et-maneges-apres-noel/ | Marché de Noël d’Orléans 2026 en famille: horaires, lieux et manèges | evenements | Orléans, Loiret, Centre-Val de Loire
- /articles/maison/maison-de-vacances-dans-le-loiret-en-famille-les-criteres-a-verifier-avant-de-reserver/ | Maison de vacances dans le Loiret en famille: les critères à vérifier avant de réserver | maison | Orléans, Loiret, Centre-Val de Loire
- /articles/sorties/parc-des-oiseaux-en-famille-billets-horaires-et-visite-avec-des-enfants/ | Parc des Oiseaux en famille: billets, horaires et visite avec des enfants | sorties | Villars-les-Dombes, Ain, Auvergne-Rhône-Alpes
- /articles/bons-plans/la-roche-jagu-en-famille-a-l-automne-hiver-2026-parc-gratuit-tarifs-et-jours-d-ouverture/ | La Roche-Jagu en famille à l'automne-hiver 2026: parc gratuit, tarifs et jours d'ouverture | bons-plans | Ploëzal, Côtes-d'Armor, Bretagne
- /articles/parentalite/montchavin-les-coches-avec-un-bebe-garderie-horaires-et-sejour-d-hiver/ | Montchavin-Les Coches avec un bébé: garderie, horaires et séjour d'hiver | parentalite | Montchavin-Les Coches, Savoie, Auvergne-Rhône-Alpes
- /articles/bons-plans/parc-floral-d-orleans-gratuit-en-hiver-horaires-et-sortie-avec-les-enfants/ | Parc floral d’Orléans gratuit en hiver: horaires et sortie avec les enfants | bons-plans | Orléans, Loiret, Centre-Val de Loire
- /articles/maison/dechets-alimentaires-a-orleans-metropole-s-organiser-avec-ou-sans-jardin/ | Déchets alimentaires à Orléans Métropole: s’organiser avec ou sans jardin | maison | Loiret, Centre-Val de Loire
- /articles/parentalite/chateau-de-chamerolles-en-famille-visite-libre-ou-guidee-en-2026/ | Château de Chamerolles en famille: visite libre ou guidée en 2026 ? | parentalite | Chilleurs-aux-Bois, Loiret, Centre-Val de Loire
- /articles/cuisine/cueillir-pommes-et-poires-a-mezieres-lez-clery-ce-qu-il-faut-verifier-avant-de-partir/ | Cueillir pommes et poires à Mézières-lez-Cléry: ce qu'il faut vérifier avant de partir | cuisine | Mézières-lez-Cléry, Loiret, Centre-Val de Loire
- /articles/bons-plans/troyes-en-famille-a-petit-budget-musees-gratuites-et-balades-dans-le-centre/ | Troyes en famille à petit budget: musées, gratuités et balades dans le centre | bons-plans | Troyes, Aube, Grand Est
- /articles/bons-plans/abbaye-de-saint-savin-en-famille-tarifs-gratuites-et-visite-avec-les-enfants/ | Abbaye de Saint-Savin en famille: tarifs, gratuités et visite avec les enfants | bons-plans | Saint-Savin, Vienne, Nouvelle-Aquitaine
- /articles/bons-plans/albi-en-famille-a-petit-budget-deux-programmes-entre-patrimoine-et-musee/ | Albi en famille à petit budget: deux programmes entre patrimoine et musée | bons-plans | Albi, Tarn, Occitanie
- /articles/bons-plans/chamonix-en-famille-sans-voiture-train-gratuit-et-bus-a-prix-reduit-avec-la-carte-d-hote/ | Chamonix en famille sans voiture: train gratuit et bus à prix réduit avec la carte d’hôte | bons-plans | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/bons-plans/visiter-falaise-en-famille-a-petit-prix-quel-pass-choisir/ | Visiter Falaise en famille à petit prix: quel pass choisir ? | bons-plans | Falaise, Calvados, Normandie
- /articles/bons-plans/a-marie-galante-l-habitation-murat-se-decouvre-gratuitement-en-famille/ | À Marie-Galante, l’habitation Murat se découvre gratuitement en famille | bons-plans | Grand-Bourg, Guadeloupe, Guadeloupe
- /articles/bons-plans/fougeres-en-famille-a-petit-prix-chateau-coursive-et-balade-gratuite/ | Fougères en famille à petit prix: château, Coursive et balade gratuite | bons-plans | Fougères, Ille-et-Vilaine, Bretagne
- /articles/bons-plans/saint-remy-de-provence-en-famille-glanum-musees-et-entrees-gratuites/ | Saint-Rémy-de-Provence en famille: Glanum, musées et entrées gratuites | bons-plans | Saint-Rémy-de-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/chateau-de-chateaubriant-en-famille-une-sortie-a-petit-budget/ | Château de Châteaubriant en famille, une sortie à petit budget | bons-plans | Châteaubriant, Loire-Atlantique, Pays de la Loire
- /articles/bons-plans/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites/ | Pass Nantes en famille en 2026: tarifs, visites incluses et alternatives gratuites | bons-plans | Nantes, Loire-Atlantique, Pays de la Loire

### Historique Radar lié

- opportunity | /articles/evenements/noel-a-orleans-2026-en-famille-marches-horaires-et-maneges-apres-noel/ | 2026-10-25T07:29:47.050Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
