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
title: "Noël 2026 à Chambéry en famille: marchés, parade et ateliers"
subtitle: Horaires des deux marchés, arrivée du Père Noël le 27 novembre et Fabrique de Noël le 12 décembre
summary: Du 27 novembre 2026 au 3 janvier 2027, Chambéry accueille un marché et un village de Noël. Une parade gratuite ouvre les festivités le 27 novembre; le 12 décembre, Rubanox propose un marché artisanal et des ateliers payants sur inscription. Les repères utiles avec des enfants.
category: evenements
location:
  city: Chambéry
  department: Savoie
  region: Auvergne-Rhône-Alpes
image:
  src: /images/articles/2026/11/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel.webp
  alt: Chalets et illuminations du marché de Noël de Chambéry photographiés au crépuscule en décembre 2024, et non l’édition 2026.
sources:
  - title: Ville de Chambéry - Marché et village de Noël 2026
    url: https://www.chambery.fr/actualite/1695/9-le-marche-de-noel-revient-a-chambery-du-27-novembre-au-3-janvier.htm
  - title: Ville de Chambéry - Noël 2026 et programmation
    url: https://www.chambery.fr/493-noel.htm
  - title: Ville de Chambéry - Parade et arrivée du Père Noël le 27 novembre
    url: https://www.chambery.fr/agenda/3905/316-noel-a-chambery-lancement-des-illuminations-de-noel-rendez-vous-avec-le-pere-noel-grande-parade-lumineuse-en-centre-ville.htm
  - title: Ville de Chambéry - Marché artisanal et Fabrique de Noël du 12 décembre
    url: https://www.chambery.fr/agenda/3638/316-marche-de-noel-artisanal-fabrique-de-noel.htm
  - title: Ville de Chambéry - Stationnement en centre-ville
    url: https://www.chambery.fr/390-je-viens-en-centre-ville-en-voiture.htm
  - title: Ville de Chambéry - Toilettes publiques
    url: https://www.chambery.fr/307-proprete-et-entretien-de-la-ville.htm
  - title: Kyriad Chambéry Centre - Curial - Chambres et services
    url: https://chambery-centre-curial.kyriad.com/fr-fr/
eventEndsAt: 2027-01-03
reviewAt: 2026-11-24
topic:
  key: evenements|chambery|noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel|2026
  keywords:
    - Noël Chambéry 2026 famille
    - marché de Noël Chambéry 2026 horaires
    - parade Père Noël Chambéry 27 novembre 2026
    - village de Noël Palais de Justice Chambéry
    - Fabrique de Noël Rubanox 12 décembre 2026
slug: noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel
status: published
publishedAt: 2026-11-01T09:37:48.682Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Chambéry
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(11)/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel/index.md
  targetSha: f57b4e33baed39e0756472c7b20f6cff5c1bab17
  targetUrl: /articles/evenements/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel/
  decision: Choisir le bon jour et le bon moyen de transport pour profiter des marchés et animations de Noël avec des enfants, sans se tromper sur les horaires spéciaux.
  affiliationPotential: Conserver l'hébergement Kyriad Chambéry Centre - Curial sur Booking.com et ses précautions de capacité familiale; aucune billetterie partenaire pertinente vérifiée.
  gsc:
    retrievedAt: 2026-11-16T02:33:37+01:00
    dataThrough: 2026-11-13
    signal: needs_query_check
    basis: "Visibilité récente : 35 impressions sur trois jours, puis 3 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-11-03
    peakEnd: 2026-11-05
    recentStart: 2026-11-11
    recentEnd: 2026-11-13
    peakImpressions: 35
    recentImpressions: 3
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Noël Chambéry 2026 famille
      - marché de Noël Chambéry 2026 horaires
      - parade Père Noël Chambéry 27 novembre 2026
      - village de Noël Palais de Justice Chambéry
      - Fabrique de Noël Rubanox 12 décembre 2026
---

## Mission retenue
Actualiser le guide Noël 2026 à Chambéry, du 27 novembre au 3 janvier, à partir du programme municipal détaillé désormais publié.

## Pourquoi cette mission
Le snapshot GSC signale 35 puis 3 impressions sur trois jours, sans diagnostic de classement. La justification indépendante est concrète: l'article donne actuellement des horaires ordinaires incomplets ou contradictoires avec le programme officiel 2026 et ne mentionne pas les bus gratuits pendant quatre week-ends, les animations familiales gratuites ni le train enchanté.

## Décision du lecteur
Choisir quand venir, où aller et comment limiter les frais de transport, notamment avec des enfants et pendant les jours fériés.

## Faits à traiter
- Corriger les horaires des deux espaces d'après le programme officiel 2026: marché boulevard de la Colonne de 11 h à 21 h, village place du Palais de Justice du dimanche au mercredi de 11 h à 22 h et du jeudi au samedi de 11 h à 23 h. Exceptions: 24 décembre 18 h, 25 décembre 14 h-18 h, 31 décembre marché 18 h et village 20 h, 1er janvier 14 h-18 h, 3 janvier marché 19 h et village 21 h. Le 27 novembre, inauguration à 19 h.
- Ajouter la gratuité des bus Synchro les week-ends des 28-29 novembre, 5-6, 12-13 et 19-20 décembre; signaler aussi la gratuité du parking Ravet annoncée les samedis après-midi et dimanches concernés, sous réserve de vérification des conditions.
- Mentionner le train enchanté, les ateliers et spectacles familiaux gratuits les mercredis et samedis après-midi, sans inventer les horaires individuels ni promettre la gratuité de chaque attraction.
- Préserver intégralement les informations utiles déjà présentes: 37 chalets, Maison du Père Noël, sept chalets et Maison du Pain d'Épice, parade du 27 novembre, Fabrique de Noël de Rubanox le 12 décembre et ses ateliers payants, accès, poussettes, toilettes, cinq photographies avec crédits et licences.
- Ne pas attribuer la baisse GSC à un recul de position non démontré.

## Sources de départ
- Programme municipal détaillé 2026: https://www.chambery.fr/14-le-kiosque.htm?readFile=800
- Fiche officielle du marché: https://www.chambery.fr/agenda/3973/316-marche-de-noel-a-chambery.htm
- Mesures de transports et stationnement: https://www.chambery.fr/actualite/1705/9-la-ville-de-chambery-et-grand-chambery-deploient-un-plan-d-action-pour-soutenir-les-commercants.htm
- Programmation de Noël: https://www.chambery.fr/agenda/160/316-noel-a-chambery.htm

## Affiliation
Conserver le lien Booking.com du Kyriad Chambéry Centre - Curial et les précautions sur les chambres familiales; ne pas inventer d'offre de billets partenaire.

## Continuations internes
- Garder le renvoi vers le guide Fam Space du week-end à Chambéry pour les visites permanentes.
- Ne pas développer les Noëls de chaque quartier en articles distincts sans intérêt autonome.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(11)/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel/index.md

---
title: "Noël 2026 à Chambéry en famille: marchés, parade et ateliers"
subtitle: Horaires des deux marchés, arrivée du Père Noël le 27 novembre et Fabrique de Noël le 12 décembre
summary: Du 27 novembre 2026 au 3 janvier 2027, Chambéry accueille un marché et un village de Noël. Une parade gratuite ouvre les festivités le 27 novembre; le 12 décembre, Rubanox propose un marché artisanal et des ateliers payants sur inscription. Les repères utiles avec des enfants.
category: evenements
location:
  city: Chambéry
  department: Savoie
  region: Auvergne-Rhône-Alpes
image:
  src: "/images/articles/2026/11/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel.webp"
  alt: "Chalets et illuminations du marché de Noël de Chambéry photographiés au crépuscule en décembre 2024, et non l’édition 2026."
sources:
  - title: Ville de Chambéry - Marché et village de Noël 2026
    url: https://www.chambery.fr/actualite/1695/9-le-marche-de-noel-revient-a-chambery-du-27-novembre-au-3-janvier.htm
  - title: Ville de Chambéry - Noël 2026 et programmation
    url: https://www.chambery.fr/493-noel.htm
  - title: Ville de Chambéry - Parade et arrivée du Père Noël le 27 novembre
    url: https://www.chambery.fr/agenda/3905/316-noel-a-chambery-lancement-des-illuminations-de-noel-rendez-vous-avec-le-pere-noel-grande-parade-lumineuse-en-centre-ville.htm
  - title: Ville de Chambéry - Marché artisanal et Fabrique de Noël du 12 décembre
    url: https://www.chambery.fr/agenda/3638/316-marche-de-noel-artisanal-fabrique-de-noel.htm
  - title: Ville de Chambéry - Stationnement en centre-ville
    url: https://www.chambery.fr/390-je-viens-en-centre-ville-en-voiture.htm
  - title: Ville de Chambéry - Toilettes publiques
    url: https://www.chambery.fr/307-proprete-et-entretien-de-la-ville.htm
  - title: Kyriad Chambéry Centre - Curial - Chambres et services
    url: https://chambery-centre-curial.kyriad.com/fr-fr/
eventEndsAt: 2027-01-03
reviewAt: 2026-11-24
topic:
  key: evenements|chambery|noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel|2026
  keywords:
    - Noël Chambéry 2026 famille
    - marché de Noël Chambéry 2026 horaires
    - parade Père Noël Chambéry 27 novembre 2026
    - village de Noël Palais de Justice Chambéry
    - Fabrique de Noël Rubanox 12 décembre 2026
slug: noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel
status: published
publishedAt: 2026-11-01T09:37:48.682Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Chambéry
---
<!-- article-image-credit -->
*Photo: [Florian Pépellin](https://commons.wikimedia.org/wiki/File:March%C3%A9_de_No%C3%ABl_de_Chamb%C3%A9ry_(d%C3%A9cembre_2024).JPG) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Du **27 novembre 2026 au 3 janvier 2027**, Chambéry accueille deux espaces de Noël en centre-ville: un marché de 37 chalets boulevard de la Colonne et un village gourmand place du Palais de Justice. Pour voir la parade et l'arrivée du Père Noël, retenez le **vendredi 27 novembre**. Les familles qui préfèrent les créations artisanales ont aussi rendez-vous le **samedi 12 décembre** à Rubanox.

## Le marché boulevard de la Colonne: chalets et Maison du Père Noël

<!-- article-image-body:01 -->

![Boulevard de la Colonne à Chambéry au printemps 2017, vue de l’emplacement du marché sans chalets de Noël.](/images/articles/2026/11/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel-body-01.webp)

*Photo: [Florian Pépellin](https://commons.wikimedia.org/wiki/File:Boulevard_de_la_Colonne_de_Chamb%C3%A9ry_(avril_2017).JPG) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Entre la place du Centenaire et la place des Éléphants, **37 chalets en bois** présentent notamment des produits locaux et des savoir-faire alpins. La Ville annonce une **Maison du Père Noël** et un espace consacré aux enfants.

**Horaires:** tous les jours de **11 h à 21 h**, jusqu'à **22 h les vendredis et samedis**, du 27 novembre au 3 janvier. Les créneaux de rencontre avec le Père Noël dans sa maison ne sont pas encore précisés: sa présence annoncée ne garantit pas une rencontre à l'heure de votre visite.

Aucune billetterie n'est annoncée pour parcourir les chalets. Les dépenses dépendent des achats et des consommations; leurs prix ne sont pas publiés dans le programme municipal.

## Le village du Palais de Justice: restauration et animations

<!-- article-image-body:02 -->

![Place du Palais de Justice et façade du tribunal de Chambéry, avant l’installation du village de Noël.](/images/articles/2026/11/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel-body-02.webp)

*Photo: [Patrick](https://commons.wikimedia.org/wiki/File:Chamb%C3%A9ry_(Savoie)_-_Place_du_Palais_de_Justice_-_Palais_de_Justice.jpg) - [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Sur la **place du Palais de Justice-Robert Badinter**, le village réunit **sept chalets**, un chapiteau dédié à la restauration et aux animations, des concerts et une **Maison du pain d'épices**. C'est l'espace à privilégier pour une pause gourmande ou une sortie en début de soirée.

**Horaires:** du 27 novembre au 3 janvier, tous les jours de **11 h à 21 h**, jusqu'à **23 h les vendredis et samedis**. Le marché du boulevard ferme une heure plus tôt ces deux soirs.

La programmation détaillée des concerts et des autres animations reste à paraître. Les deux espaces sont dans le centre-ville et peuvent se visiter au cours d'une même promenade.

## Vendredi 27 novembre: la parade et l'arrivée du Père Noël

<!-- article-image-body:03 -->

![Façade de l’Hôtel de Ville de Chambéry, point annoncé pour l’arrivée du Père Noël le 27 novembre 2026.](/images/articles/2026/11/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel-body-03.webp)

*Photo: [Original uploader was Florian Pépellin at fr.wikipedia](https://commons.wikimedia.org/wiki/File:H%C3%B4tel_de_Ville_Chamb%C3%A9ry.jpg) - [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

La Ville a publié le déroulé de l'ouverture des festivités, **en accès libre**:

- **17 h:** rendez-vous dans la partie piétonne du faubourg Montmélian, près du gymnase Jules-Ferry, pour le lancement des illuminations.
- **Vers 17 h 15:** départ de la grande parade à travers le centre-ville.
- **18 h:** arrivée annoncée du Père Noël depuis le clocher de l'Hôtel de Ville, place de l'Hôtel de Ville.
- **Vers 18 h 45:** final de la parade place du Palais de Justice-Robert Badinter; inauguration du marché annoncée **à partir de 19 h environ**.

Avec de jeunes enfants, mieux vaut choisir un point du parcours plutôt que tenter de suivre tout le cortège. Ces horaires concernent **le 27 novembre**, pas les rencontres habituelles à la Maison du Père Noël, dont les créneaux restent à préciser.

## Samedi 12 décembre: marché artisanal et Fabrique de Noël à Rubanox

<!-- article-image-body:04 -->

![Bâtiment principal de l’ancienne usine Rubanox à Chambéry photographié en 2016, lieu du marché artisanal.](/images/articles/2026/11/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel-body-04.webp)

*Photo: [Florian Pépellin](https://commons.wikimedia.org/wiki/File:Ancienne_usine_Rubanox_de_Chamb%C3%A9ry_(1).JPG) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:04 -->

De **10 h à 18 h**, le collectif Wom'Bat réunit environ **50 artistes et artisans** à **Rubanox, 235 avenue Alsace-Lorraine**. Une buvette et des foodtrucks sont annoncés.

La **Fabrique de Noël** propose des ateliers de macramé, poterie, marqueterie, aquarelle et décoration. **L'entrée au marché est libre; les ateliers sont payants et sur inscription.** Leurs tarifs, âges minimums et horaires individuels ne figurent pas dans la fiche municipale consultée. Confirmez ces éléments auprès de l'organisateur avant de compter sur une place pour votre enfant.

Rubanox se trouve hors des deux places du centre: prévoyez-le comme une étape distincte, surtout avec une poussette.

## Accès, poussettes et pauses avec un bébé

<!-- article-image-body:05 -->

![Façade rénovée de la gare de Chambéry-Challes-les-Eaux en 2019, point d’arrivée pour rejoindre le centre à pied.](/images/articles/2026/11/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel-body-05.webp)

*Photo: [Baptiste Barbier-Kezel](https://commons.wikimedia.org/wiki/File:Gare_de_Chamb%C3%A9ry-Challes-les-Eaux.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:05 -->

Le centre-ville est en grande partie piéton. Les pavés de la vieille ville peuvent être irréguliers; l'affluence du 27 novembre peut également compliquer les déplacements en poussette. L'accessibilité précise du chapiteau et des ateliers de Rubanox n'est pas confirmée par les annonces consultées.

Depuis la gare de **Chambéry-Challes-les-Eaux**, le centre est accessible à pied en une quinzaine de minutes à titre indicatif, davantage avec des enfants ou des bagages. Des bus desservent également le centre.

En voiture, la Ville indique que les parkings **du Château et de la Falaise sont gratuits le samedi de 14 h à 19 h**. Cette gratuité ne s'applique pas à tous les parkings ni à toutes les heures: consultez les [conditions de stationnement de Chambéry](https://www.chambery.fr/390-je-viens-en-centre-ville-en-voiture.htm) pour votre visite.

La Ville recense **18 toilettes publiques** sur une [carte consultable en ligne](https://www.chambery.fr/307-proprete-et-entretien-de-la-ville.htm). En revanche, les annonces de Noël ne confirment pas de table à langer ni d'espace bébé dédié dans les installations temporaires.

## Dormir à Chambéry si la sortie devient un week-end

Le **Kyriad Chambéry Centre - Curial**, au **371 rue de la République**, annonce des **chambres familiales jusqu'à quatre personnes** et une **kitchenette dans chaque chambre**. Pour vérifier les couchages, les disponibilités et le tarif total à vos dates, [consultez le Kyriad Chambéry Centre - Curial sur Booking.com](https://www.booking.com/hotel/fr/kyriad-chambery-centre.fr.html) en indiquant l'âge des enfants. Toutes les catégories de chambres n'accueillent pas quatre personnes.

Pour ajouter des visites à votre séjour sans les confondre avec les festivités temporaires, notre guide [Chambéry en famille: un week-end entre éléphants et sciences](/articles/voyages/chambery-en-famille-un-week-end-entre-elephants-et-sciences/) détaille la vieille ville, Eurêka et le Musée Savoisien.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | Marché de Noël 100 % Côte-d’Or à Dijon 2026: horaires, spectacles et Père Noël | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/maison/emprunter-un-broyeur-a-grand-chambery-electrique-ou-thermique-que-choisir/ | Emprunter un broyeur à Grand Chambéry: électrique ou thermique, que choisir? | maison | Chambéry, Savoie, Auvergne-Rhône-Alpes
- /articles/voyages/chambery-en-famille-un-week-end-entre-elephants-et-sciences/ | Chambéry en famille: un week-end entre éléphants et sciences | voyages | Chambéry, Savoie, Auvergne-Rhône-Alpes
- /articles/sorties/tresor-verney-chambery-enfants-2026/ | Le trésor du Verney à Chambéry: les séances 2026 sont terminées | sorties | Chambéry, Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel/ | Noël 2026 à Chambéry en famille: marchés, parade et ateliers | evenements | Chambéry, Savoie, Auvergne-Rhône-Alpes
- /articles/vie-pratique/carte-okay-savoie-2026-2027-comment-obtenir-et-utiliser-les-80-du-collegien/ | Carte OKAY Savoie 2026-2027: comment obtenir et utiliser les 80 € du collégien | vie-pratique | Chambéry, Savoie, Auvergne-Rhône-Alpes
- /articles/voyages/valmorel-et-doucy-sans-ski-avec-des-enfants-luge-snowtubing-et-sejour-d-hiver/ | Valmorel et Doucy sans ski avec des enfants: luge, snowtubing et séjour d'hiver | voyages | Les Avanchers-Valmorel, Savoie, Auvergne-Rhône-Alpes
- /articles/sorties/les-menuires-sans-ski-en-famille-luges-piscines-et-balades-en-hiver/ | Les Menuires sans ski en famille: luges, piscines et balades en hiver | sorties | Les Belleville, Savoie, Auvergne-Rhône-Alpes
- /articles/bons-plans/ski-a-aussois-en-famille-en-2026-2027-forfaits-et-budget/ | Ski à Aussois en famille en 2026-2027: forfaits et budget | bons-plans | Aussois, Savoie, Auvergne-Rhône-Alpes
- /articles/parentalite/montchavin-les-coches-avec-un-bebe-garderie-horaires-et-sejour-d-hiver/ | Montchavin-Les Coches avec un bébé: garderie, horaires et séjour d'hiver | parentalite | Montchavin-Les Coches, Savoie, Auvergne-Rhône-Alpes
- /articles/cuisine/visiter-une-cooperative-de-beaufort-avec-des-enfants-a-val-cenis/ | Visiter une coopérative de Beaufort avec des enfants à Val Cenis | cuisine | Val Cenis, Savoie, Auvergne-Rhône-Alpes
- /articles/activites/croisiere-a-chanaz-en-famille-tarifs-2026-duree-et-conseils/ | Croisière à Chanaz en famille: tarifs 2026, durée et conseils | activites | Chanaz, Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/grand-bivouac-2026-a-albertville-en-famille-preparer-sa-journee-au-festival/ | Grand Bivouac 2026 à Albertville en famille: préparer sa journée au festival | evenements | Albertville, Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/niepce-et-apres-une-exposition-photo-a-decouvrir-en-famille-a-chalon-sur-saone/ | Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône | evenements | Chalon-sur-Saône, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-puy-du-fou-en-famille-spectacles-et-visite-en-hiver/ | Noël 2026 au Puy du Fou en famille: spectacles et visite en hiver | evenements | Les Epesses, Vendée, Pays de la Loire
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/carnaval-de-guyane-2027-en-famille-preparer-ses-premieres-sorties/ | Carnaval de Guyane 2027 en famille: préparer ses premières sorties | evenements | Guyane

### Historique Radar lié

- refresh | /articles/vie-pratique/carte-okay-savoie-2026-2027-comment-obtenir-et-utiliser-les-80-du-collegien/ | 2026-10-06T08:50:37.159Z
- opportunity | /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | 2026-10-29T14:26:32.277Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel/ | 2026-11-01T09:37:48.790Z
- refresh | /articles/bons-plans/ski-a-aussois-en-famille-en-2026-2027-forfaits-et-budget/ | 2026-11-08T10:32:11.067Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
