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
title: "Visiter le château de La Rochefoucauld en famille: parcours, tarifs et conseils"
subtitle: "Tours médiévales, galeries Renaissance et bibliothèques: les découvertes à partager avec les enfants"
summary: En Charente, le château de La Rochefoucauld mêle forteresse et demeure Renaissance. Que voir en famille, combien coûte la visite en 2026 et quelles précautions prendre ?
slug: visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils
status: published
publishedAt: 2026-10-25T22:58:31+01:00
updatedAt: null
category: activites
readingTime: 5
location:
  city: La Rochefoucauld-en-Angoumois
  department: Charente
  region: Nouvelle-Aquitaine
topic:
  key: activites|la-rochefoucauld-en-angoumois|visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils|2026
  keywords:
    - château de La Rochefoucauld en famille
    - visite château La Rochefoucauld enfants
    - tarifs château de La Rochefoucauld 2026
image:
  src: /images/articles/2026/10/visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils.webp
  alt: Façade du château de La Rochefoucauld, avec ses tours et ses fenêtres Renaissance.
sources:
  - title: Château de La Rochefoucauld - informations pratiques
    url: https://www.chateau-la-rochefoucauld.com/informations-pratiques/
  - title: Château de La Rochefoucauld - histoire de la famille
    url: https://www.chateau-la-rochefoucauld.com/histoire/
  - title: Château de La Rochefoucauld - architecture
    url: https://www.chateau-la-rochefoucauld.com/architecture/
  - title: Château de La Rochefoucauld - bibliothèques
    url: https://www.chateau-la-rochefoucauld.com/bibliotheques/
  - title: Château de La Rochefoucauld - archives
    url: https://www.chateau-la-rochefoucauld.com/bibliotheques/archives/
  - title: Charentes Tourisme - Château de La Rochefoucauld, fiche 2026
    url: https://www.infiniment-charentes.com/fiche-sit/chateau-de-la-rochefoucauld-5666092/
affiliate:
  enabled: true
  type: travel
  destination: La Rochefoucauld-en-Angoumois
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/activites/(2026)/(10)/visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils/index.md
  targetSha: 3110955a6ec1736ec20133bc46bd5eac977630d0
  targetUrl: /articles/activites/visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils/
  decision: Permettre aux familles de choisir une heure d'arrivée fiable et d'éviter un déplacement inutile, notamment en hiver, malgré les horaires contradictoires publiés par le château.
  affiliationPotential: Conserver les deux hébergements existants Booking et Abritel pour les familles qui prolongent la visite; aucune nouvelle offre nécessaire.
  gsc:
    retrievedAt: 2026-11-08T02:28:56+01:00
    dataThrough: 2026-11-05
    signal: needs_query_check
    basis: "Visibilité récente : 41 impressions sur trois jours, puis 2 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-28
    peakEnd: 2026-10-30
    recentStart: 2026-11-03
    recentEnd: 2026-11-05
    peakImpressions: 41
    recentImpressions: 2
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - château de La Rochefoucauld en famille
      - visite château La Rochefoucauld enfants
      - tarifs château de La Rochefoucauld 2026
---

## Mission retenue
Actualiser le guide familial du château de La Rochefoucauld-en-Angoumois, en priorité ses horaires et sa dernière admission.

## Pourquoi cette mission
Le snapshot GSC indique 41 impressions sur trois jours puis 2, sans diagnostic de cause. La vérification indépendante révèle une contradiction pratique: l'article annonce 10 h–19 h et dernière entrée 18 h, tandis que le haut de la page officielle affiche 10 h–18 h et dernière entrée 17 h. Les deux versions coexistent sur le même site officiel. Une famille arrivant après 17 h risque donc de ne pas pouvoir entrer.

## Décision du lecteur
Savoir à quelle heure arriver, quels jours éviter et comment confirmer l'ouverture avant de partir avec des enfants.

## Faits à traiter
Mettre en évidence l'horaire officiel contradictoire, sans inventer de confirmation; privilégier une arrivée avant 17 h tant que le château n'a pas clarifié. Recontrôler la fermeture du mardi, la période de fermeture hivernale et l'exception annoncée pour les dimanches, sans présenter ces informations contradictoires comme certaines. Conserver les tarifs 12 €/6 €/gratuit moins de 4 ans, la visite libre et les bibliothèques guidées, les escaliers, l'interdiction des poussettes, les coordonnées, les cinq images et crédits, les deux hébergements affiliés.

## Sources de départ
- Château de La Rochefoucauld, informations pratiques: https://www.chateau-la-rochefoucauld.com/informations-pratiques/
- Château de La Rochefoucauld, accueil: https://www.chateau-la-rochefoucauld.com/
- Charentes Tourisme, fiche du château: https://www.infiniment-charentes.com/fiche-sit/chateau-de-la-rochefoucauld-5666092/

## Affiliation
Conserver Booking et Abritel déjà présents; pas de nouvel ajout justifié.

## Continuations internes
Ne pas développer davantage la visite du Musée de la BD à Angoulême: conserver le lien vers son guide existant.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/activites/(2026)/(10)/visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils/index.md

---
title: "Visiter le château de La Rochefoucauld en famille: parcours, tarifs et conseils"
subtitle: "Tours médiévales, galeries Renaissance et bibliothèques: les découvertes à partager avec les enfants"
summary: En Charente, le château de La Rochefoucauld mêle forteresse et demeure Renaissance. Que voir en famille, combien coûte la visite en 2026 et quelles précautions prendre ?
slug: visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils
status: published
publishedAt: 2026-10-25T22:58:31+01:00
updatedAt: null
category: activites
readingTime: 5
location:
  city: La Rochefoucauld-en-Angoumois
  department: Charente
  region: Nouvelle-Aquitaine
topic:
  key: activites|la-rochefoucauld-en-angoumois|visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils|2026
  keywords:
    - château de La Rochefoucauld en famille
    - visite château La Rochefoucauld enfants
    - tarifs château de La Rochefoucauld 2026
image:
  src: "/images/articles/2026/10/visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils.webp"
  alt: "Façade du château de La Rochefoucauld, avec ses tours et ses fenêtres Renaissance."
sources:
  - title: Château de La Rochefoucauld - informations pratiques
    url: https://www.chateau-la-rochefoucauld.com/informations-pratiques/
  - title: Château de La Rochefoucauld - histoire de la famille
    url: https://www.chateau-la-rochefoucauld.com/histoire/
  - title: Château de La Rochefoucauld - architecture
    url: https://www.chateau-la-rochefoucauld.com/architecture/
  - title: Château de La Rochefoucauld - bibliothèques
    url: https://www.chateau-la-rochefoucauld.com/bibliotheques/
  - title: Château de La Rochefoucauld - archives
    url: https://www.chateau-la-rochefoucauld.com/bibliotheques/archives/
  - title: Charentes Tourisme - Château de La Rochefoucauld, fiche 2026
    url: https://www.infiniment-charentes.com/fiche-sit/chateau-de-la-rochefoucauld-5666092/
affiliate:
  enabled: true
  type: travel
  destination: La Rochefoucauld-en-Angoumois
---
<!-- article-image-credit -->
*Photo: [Thierry de Villepin](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_deLa_Rochefoucauld.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À La Rochefoucauld-en-Angoumois, en Charente, le château de La Rochefoucauld réunit des tours de forteresse, une cour Renaissance et des pièces meublées. Toujours lié à la famille dont il porte le nom, il se prête à une sortie où les enfants peuvent observer comment un château a changé au fil des siècles. La visite est surtout patrimoniale: quelques jeux d'observation suffisent à la rendre vivante, sans promettre d'animations spécialement conçues pour les plus jeunes.

## Ce qu'il faut regarder dans le château

<!-- article-image-body:02 -->

![Boudoir du château de La Rochefoucauld avec ses décors du XVIIe siècle.](/images/articles/2026/10/visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils-body-02.webp)

*Photo: [Franzrycou](https://commons.wikimedia.org/wiki/File:La_Rochefoucauld,_ch%C3%A2teau,_le_boudoir_d%C3%A9cor%C3%A9_17e_si%C3%A8cle_(2).jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

<!-- article-image-body:01 -->

![Cour intérieure et galeries à arcades Renaissance du château de La Rochefoucauld.](/images/articles/2026/10/visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils-body-01.webp)

*Photo: [Thierry de Villepin](https://commons.wikimedia.org/wiki/File:La_Rochefoucauld_Cour_int%C3%A9rieure.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

**Les tours et le donjon médiévaux.** Les premières fortifications remontent aux environs de 980 et le donjon carré au XIe siècle. Les tours ont évolué par la suite, notamment au XVe siècle. Devant les murs et les ouvertures, les enfants peuvent imaginer où se tenaient les gardes et comment on surveillait les alentours. L'[histoire de la famille La Rochefoucauld](https://www.chateau-la-rochefoucauld.com/histoire/) explique ces transformations.

**La cour Renaissance.** Au XVIe siècle, le château s'enrichit de galeries à arcades sur trois niveaux, inspirées de l'architecture italienne. Cherchez avec les enfants les formes répétées et les différences avec les tours médiévales. Sur une porte de la chapelle, les lettres « F » et « A » rappellent François de La Rochefoucauld et Anne de Polignac. La [présentation de l'architecture du château](https://www.chateau-la-rochefoucauld.com/architecture/) permet de repérer ces détails et le grand escalier Renaissance de 108 marches.

**Les pièces meublées.** Elles donnent un autre aperçu de la vie au château: salons, objets et décors permettent de parler du quotidien des habitants, au-delà de l'histoire des batailles. Selon les espaces ouverts le jour de votre venue, proposez aux enfants de choisir un objet qu'ils auraient aimé avoir chez eux ou de comparer une pièce ancienne à une pièce actuelle.

## Comment se déroule la visite ?

<!-- article-image-body:04 -->

![Salle des archives du château de La Rochefoucauld, avec ses documents anciens.](/images/articles/2026/10/visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils-body-04.webp)

*Photo: [Thierry de Villepin](https://commons.wikimedia.org/wiki/File:La_Rochefoucauld_-_Salle_des_archives.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:04 -->

<!-- article-image-body:03 -->

![Bibliothèque ancienne du château de La Rochefoucauld avec ses rayonnages de livres.](/images/articles/2026/10/visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils-body-03.webp)

*Photo: [Thierry de Villepin](https://commons.wikimedia.org/wiki/File:La_Rochefoucauld_-_la_biblioth%C3%A8que.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

Le billet comprend une **visite libre du château** et une **présentation guidée des bibliothèques et de la salle des archives**, d'après les [informations pratiques officielles](https://www.chateau-la-rochefoucauld.com/informations-pratiques/). Le guide n'accompagne donc pas nécessairement les visiteurs dans toutes les pièces.

Les [bibliothèques](https://www.chateau-la-rochefoucauld.com/bibliotheques/) conservent environ **18 000 volumes**, en grande partie anciens. Les reliures et les armoiries offrent des détails faciles à observer. La [salle des archives](https://www.chateau-la-rochefoucauld.com/bibliotheques/archives/), située au premier étage, rassemble plusieurs milliers de documents couvrant huit siècles. Les plus grands pourront découvrir comment lettres et actes permettent de reconstituer l'histoire.

Avec des enfants de maternelle, mieux vaut privilégier les tours, la cour et quelques pièces marquantes plutôt que chercher à tout expliquer. Les enfants d'âge élémentaire peuvent comparer Moyen Âge et Renaissance; les adolescents curieux d'histoire profiteront davantage de la partie guidée. Les horaires précis de cette présentation ne sont pas détaillés sur le site: renseignez-vous à l'accueil, surtout si vous arrivez tard.

## Horaires et tarifs en 2026

Le château annonce une ouverture **de 10 h à 19 h, tous les jours sauf le mardi**, avec une **dernière entrée à 18 h**. Les tarifs indiqués en tête de sa [page pratique](https://www.chateau-la-rochefoucauld.com/informations-pratiques/) concordent avec la [fiche touristique 2026 de Charentes Tourisme](https://www.infiniment-charentes.com/fiche-sit/chateau-de-la-rochefoucauld-5666092/):

- **Adulte: 12 €**.
- **Enfant de 4 à 12 ans: 6 €**.
- **Moins de 4 ans: gratuit**.

Pour deux adultes et deux enfants de 4 à 12 ans, le total est donc de **36 €** au tarif normal. Attention, une ancienne grille à 10 € et 5 € figure encore plus bas sur le site du château: les montants à 12 € et 6 € sont ceux confirmés par les informations tarifaires 2026. En cas de doute, contactez l'établissement avant de partir.

**Pour l'hiver, ne vous fiez pas au seul horaire hebdomadaire.** Le château mentionne une fermeture du 2 janvier au 14 février, tout en annonçant une ouverture le dimanche à partir de 14 h pendant cette période. La fiche de Charentes Tourisme indique pour sa part une fermeture du 1er janvier au 15 février, sans préciser cette exception dominicale. Ces indications se contredisent: une visite entre début janvier et la mi-février doit être confirmée directement auprès du château. Vérifiez également les éventuelles fermetures des jours fériés.

## Accès, poussettes et visite avec de jeunes enfants

<!-- article-image-body:05 -->

![Voûte de l'escalier de l'aile sud du château de La Rochefoucauld.](/images/articles/2026/10/visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils-body-05.webp)

*Photo: [MOSSOT](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_La_Rochefoucauld_-_Aile_Sud_-_Escalier_-_Vo%C3%BBte.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:05 -->

Le château demande de **laisser les poussettes à l'entrée**. Le grand escalier Renaissance compte 108 marches, mais cela ne veut pas dire que chaque visiteur doit les emprunter toutes. Les personnes à mobilité réduite et les familles avec un tout-petit ont intérêt à demander quels espaces sont accessibles et si un parcours partiel est possible. Aucune durée précise n'est annoncée pour une visite individuelle: gardez du temps pour la partie guidée.

Le château se trouve à **La Rochefoucauld-en-Angoumois (16110)**. La [fiche touristique](https://www.infiniment-charentes.com/fiche-sit/chateau-de-la-rochefoucauld-5666092/) signale des toilettes et des possibilités de stationnement à proximité.

Pour confirmer une ouverture, les modalités de visite ou les conditions d'accès, contactez le château au **05 45 63 52 71** ou à **amis-du-chateau@wanadoo.fr**, coordonnées figurant sur son site.

## Faire de la visite un week-end en Charente

Après le château, une promenade dans le centre de La Rochefoucauld-en-Angoumois prolonge facilement la sortie. Si vous restez une nuit, le [Logis de Fornel](https://www.booking.com/hotel/fr/logis-de-fornel.fr.html), en centre-ville à environ 500 mètres du château, propose notamment un studio familial pour quatre personnes. Pour davantage d'indépendance, ce [logement avec cuisine et jardin à La Rochefoucauld](https://www.abritel.fr/location-vacances/p2226572) accueille également jusqu'à quatre personnes, avec une chambre et un canapé-lit. Vérifiez la disponibilité, la configuration des couchages et les conditions de réservation pour vos dates.

Le lendemain, Angoulême offre une autre idée de sortie avec le [Musée de la BD à visiter en famille](https://www.fam-space.fr/articles/sorties/musee-de-la-bd-a-angouleme-en-famille-tarifs-horaires-et-conseils-de-visite/).

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/chateau-de-vincennes-en-famille-tarifs-parcours-et-conseils-de-visite/ | Château de Vincennes en famille: tarifs, parcours et conseils de visite | sorties | Vincennes, Val-de-Marne, Île-de-France
- /articles/sorties/chateau-fort-de-sedan-en-famille-parcours-tarifs-et-conseils-de-visite/ | Château fort de Sedan en famille: parcours, tarifs et conseils de visite | sorties | Sedan, Ardennes, Grand Est
- /articles/parentalite/visiter-le-chateau-de-versailles-avec-un-bebe-poussette-billets-et-parcours/ | Visiter le château de Versailles avec un bébé: poussette, billets et parcours | parentalite | Versailles, Yvelines, Île-de-France
- /articles/sorties/chateau-de-chambord-en-famille-tarifs-2026-activites-et-conseils-de-visite/ | Château de Chambord en famille: tarifs 2026, activités et conseils de visite | sorties | Chambord, Loir-et-Cher, Centre-Val de Loire
- /articles/activites/chateau-de-biron-avec-des-enfants-tarifs-et-conseils-pour-la-visite/ | Château de Biron avec des enfants: tarifs et conseils pour la visite | activites | Biron, Dordogne, Nouvelle-Aquitaine
- /articles/sorties/chateau-de-chenonceau-en-famille-billets-duree-et-conseils-avec-des-enfants/ | Château de Chenonceau en famille: billets, durée et conseils avec des enfants | sorties | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/sorties/chateau-du-haut-koenigsbourg-en-famille-tarifs-2026-et-conseils-de-visite/ | Château du Haut-Koenigsbourg en famille: tarifs 2026 et conseils de visite | sorties | Orschwiller, Bas-Rhin, Grand Est
- /articles/parentalite/chateau-de-chamerolles-en-famille-visite-libre-ou-guidee-en-2026/ | Château de Chamerolles en famille: visite libre ou guidée en 2026 ? | parentalite | Chilleurs-aux-Bois, Loiret, Centre-Val de Loire
- /articles/activites/visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils/ | Visiter le château de La Rochefoucauld en famille: parcours, tarifs et conseils | activites | La Rochefoucauld-en-Angoumois, Charente, Nouvelle-Aquitaine
- /articles/parentalite/decouvrir-la-bd-avec-ses-enfants-a-angouleme/ | Découvrir la BD avec ses enfants à Angoulême | parentalite | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/evenements/gastronomades-2026-a-angouleme-en-famille-faut-il-prevoir-le-week-end/ | Gastronomades 2026 à Angoulême en famille: faut-il prévoir le week-end ? | evenements | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/voyages/ou-dormir-a-angouleme-avec-des-enfants-pour-visiter-la-ville-a-pied/ | Où dormir à Angoulême avec des enfants pour visiter la ville à pied | voyages | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/sorties/musee-de-la-bd-a-angouleme-en-famille-tarifs-horaires-et-conseils-de-visite/ | Musée de la BD à Angoulême en famille: tarifs, horaires et conseils de visite | sorties | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/sorties/ete-actif-en-charente-2026-des-sorties-familiales-a-petit-prix-jusqu-au-29-aout/ | Été actif en Charente 2026: des sorties familiales à petit prix jusqu'au 29 août | sorties | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/activites/corderie-royale-de-rochefort-en-famille-visite-tarifs-et-ateliers/ | Corderie Royale de Rochefort en famille: visite, tarifs et ateliers | activites | Rochefort, Charente-Maritime, Nouvelle-Aquitaine
- /articles/activites/musee-de-l-air-et-de-l-espace-au-bourget-quel-parcours-en-famille/ | Musée de l’Air et de l’Espace au Bourget: quel parcours en famille? | activites | Le Bourget, Seine-Saint-Denis, Île-de-France
- /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | Atelier bâton de pluie gratuit à Paris le 18 novembre 2026: dès 6 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | Lecture d'hiver gratuite à Paris le 12 décembre 2026: deux séances pour les 1-3 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | Bricolages de Noël gratuits à Paris le 19 décembre 2026: un atelier dès 4 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-deco-de-noel-gratuit-a-paris-le-28-novembre-2026-creer-en-recup-art-des-8-ans/ | Atelier déco de Noël gratuit à Paris le 28 novembre 2026: bricolage dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | Atelier Calder à Paris le 14 novembre 2026: fabriquer un mobile dès 5 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/le-pal-2027-en-famille-une-ou-deux-journees-entre-animaux-et-attractions/ | Le PAL 2027 en famille: une ou deux journées entre animaux et attractions ? | activites | Saint-Pourçain-sur-Besbre, Allier, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | 2026-11-05T16:36:05.180Z
- opportunity | /articles/activites/atelier-deco-de-noel-gratuit-a-paris-le-28-novembre-2026-creer-en-recup-art-des-8-ans/ | 2026-11-05T23:35:44.031Z
- opportunity | /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | 2026-11-06T12:30:50.449Z
- opportunity | /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | 2026-11-06T03:27:40.597Z
- refresh | /articles/sorties/chateau-fort-de-sedan-en-famille-parcours-tarifs-et-conseils-de-visite/ | 2026-11-07T15:31:39.896Z
- opportunity | /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | 2026-11-06T09:33:42.136Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
