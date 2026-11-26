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
title: "Ateliers de cuisine parent-enfant à Toulouse: chocolat, pâtisserie ou menu complet ?"
subtitle: Deux ateliers, des cours à 70 ou 76 € le duo et des réservations à vérifier selon l'âge
summary: "À Toulouse, comparez les ateliers parent-enfant de L’atelier Gourmand et de L’atelier des Chefs: recettes, prix par duo, durée, âge, dates et inscription."
slug: ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet
status: published
publishedAt: 2026-11-01T12:00:47+01:00
updatedAt: 2026-11-11T05:36:32.296Z
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
  - title: L’atelier des Chefs - programme spécial Noël
    url: https://www.atelierdeschefs.fr/cours-de-cuisine/344124/parent-enfant-special-noel/
  - title: L’atelier des Chefs - Toulouse François Verdier, accès et contact
    url: https://www.atelierdeschefs.fr/ateliers/46/toulouse-francois-verdier/
affiliate:
  enabled: true
  type: travel
  destination: Toulouse
reviewAt: 2026-12-14
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/cuisine/(2026)/(11)/ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet/index.md
  targetSha: 5debdf1e3e3dd4b968e6a62d6104fb666cb64317
  targetUrl: /articles/cuisine/ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet/
  decision: Choisir un véritable cours en duo pour décembre selon l'âge accepté, le prix, le créneau et la possibilité de déguster sur place ou d'emporter les plats.
  affiliationPotential: Conserver l'hébergement Booking.com existant pour un séjour à Toulouse; aucune offre partenaire directe pour les deux ateliers identifiée.
  gsc:
    retrievedAt: 2026-11-26T07:29:00+01:00
    dataThrough: 2026-11-23
    signal: uncertain
    basis: "Visibilité récente : 34 impressions sur trois jours, puis 9 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-03
    peakEnd: 2026-11-05
    recentStart: 2026-11-21
    recentEnd: 2026-11-23
    peakImpressions: 34
    recentImpressions: 9
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - atelier cuisine enfant toulouse
      - atelier cuisine ecole clae toulouse
      - cours de cuisine enfant toulouse
      - cours patisserie toulouse
      - stage patisserie toulouse
---

## Mission retenue
Actualiser le comparatif des ateliers de cuisine parent-enfant à Toulouse.

## Pourquoi cette mission
Les quatre candidats rapidDrop précédents ont déjà été actualisés le 26 novembre sur master. Pour Toulouse, le signal GSC est uncertain; aucune perte de classement démontrée. Lacune indépendante vérifiée: les dates du 11, 22 et 25 novembre sont passées et le guide ne distingue pas les créneaux de Noël complets des alternatives réellement proposées, notamment un déjeuner à déguster sur place le 30 décembre, contrairement aux exemples actuels à emporter.

## Décision du lecteur
Choisir un cours selon l'âge, le coût du duo, le menu, les horaires et le mode de dégustation, puis vérifier son inscription.

## Faits à traiter
- Atelier Gourmand: programme adulte-enfant 70 € le binôme pour 2 h; repas 6-12 ans; macarons de Noël le 29 décembre de 14 h à 16 h, deux torchons. Retirer les dates passées de Tout choco mais conserver les recettes et les contenants demandés comme exemples de cette formule, sans promettre une séance future. Préserver accès, parking gratuit, arrêt Tissié et gare du TOEC; confirmer les âges selon le thème.
- Atelier des Chefs: remplacer l'exemple du 25 novembre par des séances futures. Fiches officielles du 13 décembre: spécial Noël 16 h 30-18 h affiché complet et autre créneau 18 h 30-20 h affichant une place au contrôle; même menu à emporter, 76 €/duo, 5-10 ans. Le 30 décembre, 12 h-13 h 30, déjeuner façon fast-food maison avec dégustation sur place, 76 €/duo, 5-10 ans, préinscription proposée. Ne pas garantir les disponibilités; distinguer préinscription et confirmation. Recontrôler les fiches en rédaction, ne pas annoncer un nombre de places durable.
- Conserver les deux images et crédits, les tarifs, durées, adresses, la distinction adulte + enfant, les précautions allergies et alcool selon les recettes effectivement retenues et les conseils de transport des plats. Signaler les éventuelles divergences d'âge sur les fiches. Adapter reviewAt aux dernières dates temporaires retenues.

## Sources de départ
- https://www.atelier-gourmand.fr/nos-ateliers/cours-cuisine-toulouse/programme/adulte/enfant-634
- https://www.atelier-gourmand.fr/nos-ateliers/cours-cuisine-toulouse/programme/details/adulteenfant-1-inscription-par-binome-les-macarons-extraordinaires-sapin-et-bonhomme-de-neige-115416
- https://www.atelier-gourmand.fr/nos-ateliers/cours-cuisine-toulouse/programme/details/adulteenfant-1-inscription-par-binome-tout-choco-71496
- https://www.atelier-gourmand.fr/nos-ateliers/cours-cuisine-toulouse/contact
- https://www.atelierdeschefs.fr/cours-de-cuisine/344124/parent-enfant-special-noel/
- https://www.atelierdeschefs.fr/cours-de-cuisine/345120/parent-enfant-special-noel/
- https://www.atelierdeschefs.fr/cours-de-cuisine/344722/dejeuner-facon-fast-food-sain-5-10-ans/
- https://www.atelierdeschefs.fr/ateliers/46/toulouse-francois-verdier/

## Affiliation
Conserver https://www.booking.com/hotel/fr/privilege-appart-clement-ader.fr.html pour les familles en séjour. La fiche Booking renvoie actuellement un contrôle antibot; ne pas ajouter de nouvelles caractéristiques sans confirmation. Aucun billet direct des deux ateliers identifié chez les partenaires; ne pas substituer une activité sans rapport.

## Continuations internes
Conserver le guide de destination Toulouse déjà présent pour les autres activités du séjour.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/cuisine/(2026)/(11)/ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet/index.md

---
title: "Ateliers de cuisine parent-enfant à Toulouse: chocolat, pâtisserie ou menu complet ?"
subtitle: Deux ateliers, des cours à 70 ou 76 € le duo et des réservations à vérifier selon l'âge
summary: "À Toulouse, comparez les ateliers parent-enfant de L’atelier Gourmand et de L’atelier des Chefs: recettes, prix par duo, durée, âge, dates et inscription."
slug: ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet
status: published
publishedAt: 2026-11-01T12:00:47+01:00
updatedAt: 2026-11-11T05:36:32.296Z
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
  - title: L’atelier des Chefs - programme spécial Noël
    url: https://www.atelierdeschefs.fr/cours-de-cuisine/344124/parent-enfant-special-noel/
  - title: L’atelier des Chefs - Toulouse François Verdier, accès et contact
    url: https://www.atelierdeschefs.fr/ateliers/46/toulouse-francois-verdier/
affiliate:
  enabled: true
  type: travel
  destination: Toulouse
reviewAt: 2026-12-14
---

Envie de préparer un dessert ou un repas avec votre enfant sans organiser toute la cuisine à la maison ? À Toulouse, L’atelier Gourmand et L’atelier des Chefs proposent des cours à quatre mains. Comparez l'âge admis, les recettes, le prix et le statut de la réservation: une date affichée ne garantit pas une place.

## L’atelier Gourmand: chocolat, macarons ou cuisine salée pendant 2 h

<!-- article-image-body:01 -->

![Coques de macarons photographiées pendant une préparation de pâtisserie, sans lien avec l’établissement toulousain.](/images/articles/2026/11/ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet-body-01.webp)

*Photo: [Hcallas](https://commons.wikimedia.org/wiki/File:French_Macaron.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

À Lardenne, le [programme adulte-enfant de L’atelier Gourmand](https://www.atelier-gourmand.fr/nos-ateliers/cours-cuisine-toulouse/programme/adulte/enfant-634) propose des cours de **2 h à 70 € par binôme**, soit un adulte et un enfant. Les thèmes comprennent « Tout choco ! », les macarons, les sushis et makis et la préparation d'un repas complet. « Mon délicieux repas » est annoncé pour les **6-12 ans**; pour les autres thèmes, confirmez l'âge admis auprès de l'atelier.

Une séance de [macarons de Noël est annoncée le mardi 29 décembre 2026 de 14 h à 16 h](https://www.atelier-gourmand.fr/nos-ateliers/cours-cuisine-toulouse/programme/details/adulteenfant-1-inscription-par-binome-les-macarons-extraordinaires-sapin-et-bonhomme-de-neige-115416), à **70 € le binôme**. La fiche demande d'apporter **deux torchons**. Vérifiez les places au moment de réserver.

Pour le chocolat, [« Tout choco ! »](https://www.atelier-gourmand.fr/nos-ateliers/cours-cuisine-toulouse/programme/details/adulteenfant-1-inscription-par-binome-tout-choco-71496) comprend un coulant au chocolat, une tartelette au caramel et une confiserie maison. La fiche demande **deux ramequins et trois boîtes hermétiques**, dont deux de 0,5 litre, pour emporter les préparations. Le cours est annoncé le 11 et le 22 novembre 2026: consultez le programme pour les disponibilités à jour.

**Accès:** 1 impasse de Lisieux, 31300 Toulouse. L'établissement indique un parking privé gratuit, l'arrêt de bus Tissié et la gare du TOEC sur sa [page de contact](https://www.atelier-gourmand.fr/nos-ateliers/cours-cuisine-toulouse/contact).

## L’atelier des Chefs: un menu en duo en 1 h 30

<!-- article-image-body:02 -->

![Mousse au chocolat maison préparée avec des blancs d’œufs en neige, illustration d’un dessert proposé dans les menus.](/images/articles/2026/11/ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet-body-02.webp)

*Photo: [Thesupermat](https://commons.wikimedia.org/wiki/File:Mousse_au_chocolat_-_Patisserie_-_005.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Au **5 rue Idrac**, près de François-Verdier, L’atelier des Chefs propose des séances de **1 h 30 à 76 € par duo**. Une réservation correspond à un adulte et un enfant. Deux programmes permettent de comparer les recettes:

- **Mercredi 25 novembre 2026, 15 h 30-17 h:** [saumon croustillant au sésame, carottes au gingembre, mousse au chocolat et lassi à la framboise](https://www.atelierdeschefs.fr/cours-de-cuisine/343738/parents-enfants-5-12-ans/). Préparations **à emporter**.
- **Dimanche 13 décembre 2026:** la [fiche spéciale Noël](https://www.atelierdeschefs.fr/cours-de-cuisine/344124/parent-enfant-special-noel/) présente désormais **parmentier de canard et patates douces, bûche de Noël aux marrons et poire, chocolat chaud à la vanille**, **à emporter**. Les horaires et places varient selon le créneau: fiez-vous à la fiche au moment de réserver, plutôt qu'aux anciens programmes.

Attention à l'âge: le titre du cours du 25 novembre indique **5-12 ans**, mais son descriptif mentionne **5 à 10 ans**. Pour un enfant de 11 ou 12 ans, demandez confirmation à l'équipe. Les fiches distinguent réservation, préinscription et liste d'attente: seule la confirmation finale garantit la place.

**Accès:** 5 rue Idrac, 31000 Toulouse. La [fiche de l'établissement](https://www.atelierdeschefs.fr/ateliers/46/toulouse-francois-verdier/) fournit les transports et les coordonnées de l'équipe.

## Choisir selon le projet et les contraintes de l'enfant

Pour **préparer surtout des desserts**, L’atelier Gourmand offre plusieurs thèmes ciblés, notamment chocolat et macarons. Les deux adresses proposent aussi des recettes salées; vérifiez le menu du jour et si les préparations sont à emporter ou à déguster sur place. Ne supposez pas qu'un cours prévoit un repas sur place: les séances détaillées ici sont annoncées à emporter chez L’atelier des Chefs.

Côté budget, comptez **70 € pour 2 h** à L’atelier Gourmand ou **76 € pour 1 h 30** à L’atelier des Chefs, selon les séances citées. Chaque montant couvre **un adulte et un enfant**, pas deux billets individuels.

En cas d'allergie ou de restriction alimentaire, examinez les recettes puis contactez l'organisateur. Le cours du **25 novembre** chez L’atelier des Chefs mentionne notamment **sésame, amandes et amaretto**: demandez expressément si une préparation adaptée, notamment sans alcool, est possible pour l'enfant. Ne supposez pas qu'une adaptation est prévue. Pensez aussi aux contenants demandés pour les cours à emporter.

## Prolonger la sortie par un séjour à Toulouse

Pour les familles venant de plus loin, l'[Appart Hôtel Clément Ader sur Booking.com](https://www.booking.com/hotel/fr/privilege-appart-clement-ader.fr.html), au 23 rue Bayard, propose des appartements avec cuisine équipée et micro-ondes, dont des logements adaptés aux familles. Vérifiez la capacité et les disponibilités pour vos dates: l'adresse est dans le centre de Toulouse, et non juste à côté des deux ateliers.

Pour compléter le week-end, retrouvez d'autres idées de visites dans notre [guide de Toulouse en famille](https://www.fam-space.fr/destinations/occitanie/haute-garonne/toulouse/).

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/cuisine/ateliers-de-cuisine-pour-enfants-a-montpellier-ou-aller-selon-leur-age/ | Ateliers de cuisine pour enfants à Montpellier: où aller selon leur âge? | cuisine | Montpellier, Hérault, Occitanie
- /articles/cuisine/atelier-cuisine-parent-enfant-a-nantes-gratuit-au-breil-ou-cours-prive/ | Ateliers cuisine parent-enfant à Nantes: où cuisiner ensemble? | cuisine | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/cuisine/ateliers-de-patisserie-parent-enfant-en-bretagne-quelle-formule-choisir/ | Ateliers de pâtisserie parent-enfant en Bretagne: quelle formule choisir? | cuisine | Bretagne
- /articles/cuisine/ateliers-cuisine-parent-enfant-a-paris-lesquels-choisir-selon-l-age-et-le-budget/ | Ateliers cuisine parent-enfant à Paris: lesquels choisir selon l’âge et le budget ? | cuisine | Paris, Paris, Île-de-France
- /articles/cuisine/ateliers-de-cuisine-pour-enfants-dans-le-tarn-quatre-adresses-a-comparer/ | Ateliers de cuisine pour enfants dans le Tarn: quatre adresses à comparer | cuisine | Albi, Tarn, Occitanie
- /articles/cuisine/ateliers-de-cuisine-en-famille-dans-le-loir-et-cher-chocolat-patisserie-ou-legumes/ | Ateliers de cuisine en famille dans le Loir-et-Cher: chocolat, pâtisserie ou légumes ? | cuisine | Loir-et-Cher, Centre-Val de Loire
- /articles/cuisine/ateliers-patisserie-en-essonne-ou-cuisiner-avec-ses-enfants/ | Ateliers pâtisserie en Essonne: où cuisiner avec ses enfants? | cuisine | Essonne, Île-de-France
- /articles/cuisine/ateliers-de-cuisine-parent-enfant-pres-de-strasbourg-ou-s-inscrire-selon-l-age/ | Ateliers de cuisine parent-enfant près de Strasbourg: où s'inscrire selon l'âge ? | cuisine | Bas-Rhin, Grand Est
- /articles/bons-plans/halle-de-la-machine-et-envol-des-pionniers-quels-billets-choisir-en-famille/ | Halle de la Machine et Envol des Pionniers: quels billets choisir en famille ? | bons-plans | Toulouse, Haute-Garonne, Occitanie
- /articles/parentalite/laep-a-toulouse-ou-jouer-gratuitement-avec-son-enfant-de-moins-de-6-ans/ | LAEP à Toulouse: où jouer gratuitement avec son enfant de moins de 6 ans? | parentalite | Toulouse, Haute-Garonne, Occitanie
- /articles/cuisine/ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet/ | Ateliers de cuisine parent-enfant à Toulouse: chocolat, pâtisserie ou menu complet ? | cuisine | Toulouse, Haute-Garonne, Occitanie
- /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | Noël à Toulouse 2026 en famille: marchés, Père Noël et patinoire | evenements | Toulouse, Haute-Garonne, Occitanie
- /articles/maison/dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage/ | Déchets verts à Toulouse Métropole en 2027: collecte, broyage et évacuation des gros volumes | maison | Toulouse, Haute-Garonne, Occitanie
- /articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/ | Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates | vie-pratique | Toulouse, Haute-Garonne, Occitanie
- /articles/sorties/aeroscopia-en-famille-quels-avions-visiter-avec-les-enfants/ | Aeroscopia en famille: quels avions visiter avec les enfants? | sorties | Blagnac, Haute-Garonne, Occitanie
- /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | Festival BD Colomiers 2026 en famille: programme, tarifs et accès | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/activites/accrocamp-toulouse-avec-des-enfants-quel-pass-choisir-selon-leur-taille/ | AccroCamp Toulouse avec des enfants: quel pass choisir selon leur taille? | activites | Toulouse, Haute-Garonne, Occitanie
- /articles/evenements/festival-cite-en-jeux-2026-a-colomiers-quel-jour-choisir-avec-des-enfants/ | Festival Cité en Jeux 2026 à Colomiers: quel jour choisir avec des enfants | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/cuisine/fougasse-d-aigues-mortes-recette-moelleuse-a-faire-en-famille/ | Fougasse d’Aigues-Mortes: recette moelleuse à faire en famille | cuisine | Aigues-Mortes, Gard, Occitanie
- /articles/cuisine/ficelle-picarde-la-recette-familiale-des-crepes-gratinees-d-amiens/ | Ficelle picarde: la recette familiale des crêpes gratinées d'Amiens | cuisine | Amiens, Somme, Hauts-de-France
- /articles/cuisine/kig-ha-farz-en-famille-recette-et-organisation-d-un-repas-breton/ | Kig ha farz en famille: recette et organisation d'un repas breton | cuisine | Finistère, Bretagne
- /articles/cuisine/ravioles-du-dauphine-trois-repas-simples-en-famille/ | Ravioles du Dauphiné: trois repas simples en famille | cuisine | Auvergne-Rhône-Alpes

### Historique Radar lié

- refresh | /articles/cuisine/ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet/ | 2026-11-11T05:36:32.395Z
- refresh | /articles/maison/dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage/ | 2026-11-08T04:30:49.530Z
- opportunity | /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | 2026-10-29T23:28:55.064Z
- refresh | /articles/parentalite/laep-a-toulouse-ou-jouer-gratuitement-avec-son-enfant-de-moins-de-6-ans/ | 2026-11-25T09:33:23.157Z
- opportunity | /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | 2026-10-24T23:34:36.270Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
