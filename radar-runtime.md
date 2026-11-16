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
title: "Noël de Casse-Noisette 2026 à Pierrefonds: visites, dates et tarifs en famille"
subtitle: Décors en visite libre, conte dès 4 ans et aventure dès 7 ans au château
summary: Du 28 novembre 2026 au 3 janvier 2027, le château de Pierrefonds propose des décors de Casse-Noisette en visite libre et deux animations à dates fixes. Âges, séances, tarifs, réservation et accès avec les enfants.
category: evenements
location:
  city: Pierrefonds
  department: Oise
  region: Hauts-de-France
image:
  src: /images/articles/2026/10/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer.webp
  alt: Vue extérieure du château de Pierrefonds et de ses tours, photographié hors des animations de Noël
sources:
  - title: Château de Pierrefonds - Le Noël de Casse-Noisette
    url: https://www.chateau-pierrefonds.fr/agenda/le-noel-de-casse-noisette
  - title: Château de Pierrefonds - Les visites féérie
    url: https://www.chateau-pierrefonds.fr/agenda/le-noel-de-casse-noisette/les-visites-feerie
  - title: Château de Pierrefonds - Casse-Noisette, l'aventure à jouer
    url: https://www.chateau-pierrefonds.fr/agenda/le-noel-de-casse-noisette/casse-noisette-l-aventure-a-jouer
  - title: Château de Pierrefonds - Informations pratiques
    url: https://www.chateau-pierrefonds.fr/visiter/informations-pratiques
  - title: Château de Pierrefonds - Visiteurs en situation de handicap
    url: https://www.chateau-pierrefonds.fr/visiter/visiteurs-en-situation-de-handicap
  - title: Château de Pierrefonds - En famille
    url: https://www.chateau-pierrefonds.fr/visiter/en-famille
eventEndsAt: 2027-01-03
topic:
  key: evenements|pierrefonds|noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer|2026
  keywords:
    - Noël Casse-Noisette Pierrefonds 2026
    - château de Pierrefonds Noël enfants
    - visites féérie Pierrefonds
    - Casse-Noisette aventure à jouer
slug: noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer
status: published
publishedAt: 2026-10-27T07:35:50.368Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Pierrefonds
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/index.md
  targetSha: 2d82e97305a286b5ecb10c8c3a2cc6a17076001d
  targetUrl: /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/
  decision: Choisir sans erreur entre visite libre, visite féerie, spectacle de marionnettes et visite à jouer selon l'âge des enfants, les dates, le budget et les réservations.
  affiliationPotential: Conserver le gîte Abritel existant pour un séjour; les animations du château se réservent sur la billetterie officielle, sans offre partenaire équivalente vérifiée.
  gsc:
    retrievedAt: 2026-11-16T02:33:37+01:00
    dataThrough: 2026-11-13
    signal: needs_query_check
    basis: "Visibilité récente : 42 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-28
    peakEnd: 2026-10-30
    recentStart: 2026-11-11
    recentEnd: 2026-11-13
    peakImpressions: 42
    recentImpressions: 0
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Noël Casse-Noisette Pierrefonds 2026
      - château de Pierrefonds Noël enfants
      - visites féérie Pierrefonds
      - Casse-Noisette aventure à jouer
---

## Mission retenue
Actualiser le guide familial du Noël de Casse-Noisette 2026 au château de Pierrefonds, du 28 novembre 2026 au 3 janvier 2027.

## Pourquoi cette mission
Le snapshot GSC signale 42 impressions puis 0 sur deux fenêtres de trois jours, sans cause SEO établie. Une lacune éditoriale indépendante est confirmée par le programme officiel actuel: l'article ne présente que deux animations, alors que le château annonce désormais un troisième spectacle de marionnettes. La tranche d'âge de la visite féerie et l'état de sa billetterie ont également évolué.

## Décision du lecteur
Savoir quelle formule réserver pour des enfants de 3 à 8 ans ou plus, à quelle date et pour quel prix, sans confondre la visite libre et les trois animations.

## Faits à traiter
- Ajouter le spectacle de marionnettes « Casse-Noisette » les dimanches 6, 13, 20 et 27 décembre à 15 h 30, pour les 4-8 ans, 11 € adulte et 7,50 € enfant de 7 à 18 ans; vérifier le tarif applicable aux 4-6 ans avant toute simulation de budget.
- Corriger les visites « féerie de Noël »: le site officiel indique désormais 3-7 ans (et non « dès 4 ans »), un adulte accompagnateur par enfant, séances les 28 novembre, 5 et 19 décembre et 2 janvier à 14 h 30, et bouton « Acheter mon billet » actif sur la fiche; vérifier l'accès réel aux ventes avant de déclarer une réservation possible.
- Préserver les dates et tarifs de la visite libre et de la visite à jouer dès 7 ans, les fermetures, l'accès, les conseils poussette/portage/PMR, les quatre photographies et leurs crédits/licences, le lien Abritel et le maillage vers Compiègne. Ne pas déduire une cause de la baisse GSC.

## Sources de départ
- Programme officiel: https://www.chateau-pierrefonds.fr/agenda/le-noel-de-casse-noisette
- Marionnettes: https://www.chateau-pierrefonds.fr/agenda/le-noel-de-casse-noisette/spectacle-pour-enfants-de-marionnettes-casse-noisette
- Féerie: https://www.chateau-pierrefonds.fr/agenda/le-noel-de-casse-noisette/les-visites-feerie-de-noel-pour-les-enfants
- Visite à jouer: https://www.chateau-pierrefonds.fr/agenda/le-noel-de-casse-noisette/casse-noisette-la-visite-a-jouer-en-famille

## Affiliation
Garder l'hébergement Abritel existant, utile pour un week-end à Pierrefonds. Ne pas remplacer les billets officiels des animations par une offre non vérifiée.

## Continuations internes
- Conserver le lien vers le guide du château de Compiègne pour une seconde journée.
- Vérifier la billetterie officielle et les tarifs pour les moins de 7 ans avant de présenter un budget familial du spectacle de marionnettes.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/index.md

---
title: "Noël de Casse-Noisette 2026 à Pierrefonds: visites, dates et tarifs en famille"
subtitle: Décors en visite libre, conte dès 4 ans et aventure dès 7 ans au château
summary: Du 28 novembre 2026 au 3 janvier 2027, le château de Pierrefonds propose des décors de Casse-Noisette en visite libre et deux animations à dates fixes. Âges, séances, tarifs, réservation et accès avec les enfants.
category: evenements
location:
  city: Pierrefonds
  department: Oise
  region: Hauts-de-France
image:
  src: "/images/articles/2026/10/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer.webp"
  alt: "Vue extérieure du château de Pierrefonds et de ses tours, photographié hors des animations de Noël"
sources:
  - title: Château de Pierrefonds - Le Noël de Casse-Noisette
    url: https://www.chateau-pierrefonds.fr/agenda/le-noel-de-casse-noisette
  - title: Château de Pierrefonds - Les visites féérie
    url: https://www.chateau-pierrefonds.fr/agenda/le-noel-de-casse-noisette/les-visites-feerie
  - title: Château de Pierrefonds - Casse-Noisette, l'aventure à jouer
    url: https://www.chateau-pierrefonds.fr/agenda/le-noel-de-casse-noisette/casse-noisette-l-aventure-a-jouer
  - title: Château de Pierrefonds - Informations pratiques
    url: https://www.chateau-pierrefonds.fr/visiter/informations-pratiques
  - title: Château de Pierrefonds - Visiteurs en situation de handicap
    url: https://www.chateau-pierrefonds.fr/visiter/visiteurs-en-situation-de-handicap
  - title: Château de Pierrefonds - En famille
    url: https://www.chateau-pierrefonds.fr/visiter/en-famille
eventEndsAt: 2027-01-03
topic:
  key: evenements|pierrefonds|noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer|2026
  keywords:
    - Noël Casse-Noisette Pierrefonds 2026
    - château de Pierrefonds Noël enfants
    - visites féérie Pierrefonds
    - Casse-Noisette aventure à jouer
slug: noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer
status: published
publishedAt: 2026-10-27T07:35:50.368Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Pierrefonds
---
<!-- article-image-credit -->
*Photo: [Jean-Pol GRANDMONT](https://commons.wikimedia.org/wiki/File:0_Ch%C3%A2teau_de_Pierrefonds_(1).JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Du **28 novembre 2026 au 3 janvier 2027**, le château de Pierrefonds, dans l'Oise, accueille le Noël de Casse-Noisette. Les décors se découvrent avec le billet d'entrée habituel. Deux animations à dates fixes s'y ajoutent: une visite contée dès 4 ans et un parcours de jeux sensoriels dès 7 ans. Pour une famille de deux adultes payants et deux enfants, les tarifs annoncés vont de **18 € à 37 €** selon la formule et l'âge des enfants.

## Découvrir les décors avec une entrée classique

<!-- article-image-body:01 -->

![Cheminée du salon de réception du château de Pierrefonds, hors décorations de Noël](/images/articles/2026/10/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer-body-01.webp)

*Photo: [Fab5669](https://commons.wikimedia.org/wiki/File:Pierrefonds_-_ch%C3%A2teau,_int%C3%A9rieurs_(01).jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Les salles du château se parent de décors inspirés du conte de Casse-Noisette. La **visite libre** permet de les voir à son rythme, sans réserver l'une des deux animations accompagnées. C'est la formule la plus souple avec de jeunes enfants.

Les décors sont **sans supplément au droit d'entrée**: **9 € par adulte**, gratuit pour les **moins de 18 ans**. Soit **18 € pour deux adultes payants et deux enfants mineurs**, hors autres gratuités éventuelles. L'entrée ordinaire est également gratuite le premier dimanche de décembre et de janvier, sous les conditions habituelles du monument; cela ne donne pas automatiquement accès à une animation.

## Les visites « féérie »: un conte dès 4 ans

Cette visite contée et théâtralisée suit Cassandre, devenue fée du royaume de la Fée Dragée. Lectures, tableaux et musiques du ballet de Tchaïkovski accompagnent l'histoire. Elle s'adresse aux enfants **à partir de 4 ans** qui aiment écouter un récit en groupe.

Les séances commencent à **14 h 30**, les samedis **28 novembre, 5 et 19 décembre 2026**, puis **2 janvier 2027**. Tarifs: **9 € par adulte et 6 € par enfant de moins de 18 ans**, soit **30 € pour deux adultes et deux enfants**.

## « L'aventure à jouer »: des défis dès 7 ans

Dans les salles du donjon, les participants suivent Clara et le Prince Casse-Noisette à travers des **devinettes olfactives, jeux d'écoute et défis d'observation**. Cette visite guidée privilégie la participation plutôt que le récit seul.

Elle est annoncée **dès 7 ans**, à **14 h 30** les **21, 23, 26, 28 et 30 décembre 2026**. Tarifs: **11 € par adulte et 7,50 € pour les 7-18 ans**, soit **37 € pour deux adultes et deux enfants de 7 à 17 ans**.

**Réservation:** au **27 octobre 2026**, les deux fiches officielles indiquent encore une billetterie en ligne à venir. Il ne faut donc pas considérer les séances comme déjà réservables. Vérifiez l'ouverture des ventes et les places disponibles avant de fixer votre déplacement. Aucun billet partenaire équivalent à ces animations propres au château n'a été confirmé.

## Horaires et fermetures pendant les fêtes

Le programme de Noël court jusqu'au **3 janvier 2027**, mais le château est **fermé les 25 décembre et 1er janvier**. Ses horaires habituels d'hiver sont de **10 h à 17 h 30**, avec **dernier accès à 16 h 30**; le parc ferme **45 minutes avant le monument**.

Les visites animées ne sont proposées qu'aux dates mentionnées ci-dessus. Un billet ordinaire acheté pour un autre jour permet de voir les décors, pas de participer à la « féérie » ou à « l'aventure à jouer ». Les budgets indiqués n'incluent ni transport ni repas; les gratuités du billet ordinaire ne sont pas automatiquement applicables aux animations.

## Poussette, accessibilité et repas

<!-- article-image-body:03 -->

![Grand escalier intérieur de l'aile des invités au château de Pierrefonds](/images/articles/2026/10/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer-body-03.webp)

*Photo: [GO69](https://commons.wikimedia.org/wiki/File:Pierrefonds_(60)_Ch%C3%A2teau_-_Int%C3%A9rieur_-_Grand_escalier_de_l%27aile_des_invit%C3%A9s_-_04.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

<!-- article-image-body:02 -->

![Cour d'honneur et galerie du château de Pierrefonds, sans les décors de Noël](/images/articles/2026/10/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer-body-02.webp)

*Photo: [Jean-Pol GRANDMONT](https://commons.wikimedia.org/wiki/File:0_Ch%C3%A2teau_de_Pierrefonds_-_Galerie_et_grand-corps_de_logis_de_la_cour_d%27honneur_(1).JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Les **poussettes sont admises dans le parc, mais pas à l'intérieur du château**. Un espace de dépôt est prévu dans la cour d'honneur: avec un bébé, prévoyez le portage pendant la visite. Les cours pavées et les escaliers peuvent ralentir les déplacements. Des **sièges-cannes** sont disponibles et des **consignes** se trouvent à l'accueil.

Pour les visiteurs à mobilité réduite, le château dispose de **deux places PMR** et d'un **dépose-minute sur l'esplanade**. Plusieurs espaces du rez-de-chaussée sont accessibles, mais **le premier étage ne l'est pas en fauteuil roulant**. Le parcours précis des animations de Noël n'étant pas détaillé sur ce point, contactez le monument avant de réserver si l'accessibilité des salles est déterminante.

Pour déjeuner ou prendre un goûter, des restaurants et snacks se trouvent dans le village. Si vous choisissez une animation à 14 h 30, organisez la pause autour de cet horaire.

## Accès au château et séjour à proximité

Le château se situe **rue Viollet-le-Duc, 60350 Pierrefonds**. Le **stationnement rue Sabatier est gratuit**, à environ **dix minutes à pied** selon le monument. Sans voiture, l'accès passe notamment par la **gare de Compiègne**, puis un bus: vérifiez les horaires de l'aller et du retour à la date choisie. En hiver, prévoyez aussi le froid pendant les trajets extérieurs.

Pour les familles qui prolongent la sortie sur un week-end, ce [gîte de trois chambres pour six personnes à Pierrefonds sur Abritel](https://www.abritel.fr/location-vacances/p1964558) possède une cuisine et deux salles de bain. Il est annoncé à environ **3,2 km du château**, et non au pied de l'entrée. Comparez le prix total, les conditions et les disponibilités pour vos dates: aucun tarif de séjour pendant les fêtes n'est confirmé ici.

Une autre visite patrimoniale peut compléter le séjour: notre [guide du château de Compiègne en famille](/articles/sorties/chateau-de-compiegne-en-famille-que-visiter-et-comment-organiser-la-journee/) détaille les espaces et leurs horaires pour organiser une journée distincte.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | Noël 2026 à Chantilly: Le Noël oublié, billets et séances en famille | evenements | Chantilly, Oise, Hauts-de-France
- /articles/evenements/noel-2026-au-chateau-de-grignan-dates-tarifs-et-visite-en-famille/ | Noël 2026 au château de Grignan: dates, tarifs et visite en famille | evenements | Grignan, Drôme, Auvergne-Rhône-Alpes
- /articles/evenements/noel-au-chateau-de-valencay-ce-qu-il-faut-savoir-avant-d-y-aller/ | Noël au Château de Valençay: ce qu'il faut savoir avant d'y aller | evenements | Valençay, Indre, Centre-Val de Loire
- /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | Noël 2026 au château de Goulaine: dates, billets et conseils en famille | evenements | Haute-Goulaine, Loire-Atlantique, Pays de la Loire
- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/sorties/chateau-de-compiegne-en-famille-que-visiter-et-comment-organiser-la-journee/ | Château de Compiègne en famille: que visiter et comment organiser la journée? | sorties | Compiègne, Oise, Hauts-de-France
- /articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/ | Noël à Trévarez 2026 en famille: dates, horaires et réservation | evenements | Saint-Goazec, Finistère, Bretagne
- /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | Noël de Casse-Noisette 2026 à Pierrefonds: visites, dates et tarifs en famille | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/chambly-kids-festival-2027-quatre-spectacles-pour-les-enfants-dates-et-ages/ | Chambly Kids Festival 2027: quatre spectacles pour les enfants, dates et âges | evenements | Chambly, Oise, Hauts-de-France
- /articles/voyages/domaine-de-chaalis-en-famille-que-visiter-pendant-les-travaux/ | Domaine de Chaalis en famille: que visiter pendant les travaux ? | voyages | Fontaine-Chaalis, Oise, Hauts-de-France
- /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | Rétro Game Festival 2026 à Beauvais: programme, billets famille et animations enfants | evenements | Beauvais, Oise, Hauts-de-France
- /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | Noël Gaulois 2026 au Parc Astérix: billets, glissades et spectacles en famille | evenements | Plailly, Oise, Hauts-de-France
- /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | Halloween 2026 à la Mer de Sable: spectacles, frissons et billets en famille | evenements | Ermenonville, Oise, Hauts-de-France
- /articles/bons-plans/pass-sports-citoyen-dans-l-oise-15-a-cumuler-avec-le-pass-sport-en-2026/ | Pass Sports Citoyen dans l'Oise: 15 € à cumuler avec le pass Sport en 2026 | bons-plans | Beauvais, Oise, Hauts-de-France
- /articles/parentalite/ateliers-parents-malins-dans-l-oise-quels-rendez-vous-gratuits-choisir-avant-fin-2026/ | Ateliers Parents Malins dans l'Oise: quels rendez-vous gratuits choisir avant fin 2026 ? | parentalite | Plusieurs communes, Oise, Hauts-de-France
- /articles/cuisine/atelier-de-creme-chantilly-avec-des-enfants-a-partir-de-quel-age-et-comment-reserver/ | Atelier de crème Chantilly avec des enfants: à partir de quel âge et comment réserver | cuisine | Chantilly, Oise, Hauts-de-France
- /articles/maison/meubles-et-encombrants-a-compiegne-recyclerie-dechetterie-ou-collecte-a-domicile/ | Meubles et encombrants à Compiègne: recyclerie, déchetterie ou collecte à domicile? | maison | Compiègne, Oise, Hauts-de-France
- /articles/evenements/niepce-et-apres-une-exposition-photo-a-decouvrir-en-famille-a-chalon-sur-saone/ | Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône | evenements | Chalon-sur-Saône, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-puy-du-fou-en-famille-spectacles-et-visite-en-hiver/ | Noël 2026 au Puy du Fou en famille: spectacles et visite en hiver | evenements | Les Epesses, Vendée, Pays de la Loire
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | 2026-10-18T12:12:00.071Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | 2026-10-26T21:31:06.119Z
- refresh | /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | 2026-11-12T18:32:15.897Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | 2026-11-03T15:36:10.146Z
- refresh | /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | 2026-11-13T13:31:11.034Z
- opportunity | /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | 2026-10-27T07:35:50.437Z
- opportunity | /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | 2026-10-24T09:33:57.174Z
- opportunity | /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | 2026-10-26T10:34:36.317Z
- opportunity | /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | 2026-10-11T19:35:57.703Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
