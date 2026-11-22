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
title: "Marchés de Noël de Tours 2026 en famille: lieux, dates et budget"
subtitle: "Chalets municipaux, Village Gourmand, grande roue et patinoire roller: les informations utiles pour venir avec des enfants"
summary: À Tours, les marchés municipaux sont annoncés du 27 novembre au 27 décembre 2026 et le Village Gourmand du 20 novembre 2026 au 3 janvier 2027. Trois emplacements, horaires, tarifs et accès pour préparer une sortie en famille.
category: evenements
location:
  city: Tours
  department: Indre-et-Loire
  region: Centre-Val de Loire
image:
  src: /images/articles/2026/10/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand.webp
  alt: Vue de la place de la Résistance à Tours hors période du marché de Noël
sources:
  - title: Ville de Tours - Marchés de Noël 2026, dates et emplacements
    url: https://formulaires.services.tours.fr/animations-commerciales/candidature-au-marche-de-noel-tours/
  - title: Village Gourmand de Tours - Programme, horaires et tarifs 2026-2027
    url: https://levillagegourmand.fr/
  - title: Fil Bleu - Tramway ligne A et informations trafic
    url: https://www.filbleu.fr/horaires-et-trajets/toutes-les-lignes/ligne-a
eventEndsAt: 2027-01-03
reviewAt: 2026-11-18
topic:
  key: evenements|tours|marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand|2026
  keywords:
    - marché de Noël Tours 2026
    - Village Gourmand Tours 2026
    - grande roue Tours Noël 2026
    - patinoire roller Tours
    - Noël Tours en famille
slug: marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand
status: published
publishedAt: 2026-10-28T21:29:25.946Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Tours
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/index.md
  targetSha: 6a23278e1c9ee42f284b06aaea0af716fc3db5c7
  targetUrl: /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/
  decision: Choisir le bon marché et le bon créneau pour une sortie avec enfants, en connaissant les horaires désormais publiés, les animations datées et le budget réel.
  affiliationPotential: Conserver l'hébergement Booking.com existant à proximité de la gare, pertinent pour un séjour; aucune nouvelle offre à ajouter sans vérification.
  gsc:
    retrievedAt: 2026-11-22T01:30:56+01:00
    dataThrough: 2026-11-19
    signal: needs_query_check
    basis: "Visibilité récente : 25 impressions sur trois jours, puis 7 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-11-09
    peakEnd: 2026-11-11
    recentStart: 2026-11-17
    recentEnd: 2026-11-19
    peakImpressions: 25
    recentImpressions: 7
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - marché de Noël Tours 2026
      - Village Gourmand Tours 2026
      - grande roue Tours Noël 2026
      - patinoire roller Tours
      - Noël Tours en famille
---

## Mission retenue
Actualiser le guide des trois marchés de Noël de Tours 2026, en distinguant les deux marchés municipaux du Village Gourmand et ses attractions.

## Pourquoi cette mission
Le signal GSC de baisse reste non diagnostiqué et ne prouve pas une perte de classement. En revanche, l'article indique encore que les horaires visiteurs des marchés municipaux ne sont pas publiés, alors que l'office de tourisme annonce désormais des horaires. Le Village Gourmand a ouvert le 20 novembre et publie aussi un programme d'animations datées: une amélioration pratique indépendante est possible.

## Décision du lecteur
Savoir quel lieu visiter selon la date, l'heure et l'âge des enfants, quand voir une animation, et combien prévoir pour la grande roue ou la patinoire roller.

## Faits à traiter
Vérifier et intégrer les horaires des marchés municipaux publiés par l'office de tourisme (11 h-20 h dimanche à jeudi; 11 h-21 h vendredi et samedi), en distinguant bien leur période de celle du Village Gourmand. Vérifier les exceptions et éventuelles divergences sur le site de la Ville avant de les présenter comme définitives. Ajouter seulement les animations familiales datées et confirmées utiles au choix du jour, notamment le maquillage du 22 et du 29 novembre et la rencontre du Père Noël le 2 décembre à 15 h 30. Conserver les dates des trois lieux, les tarifs et réductions des attractions, la différence roller/glace, les conseils poussette et tram, les deux photos et leurs crédits, le logement partenaire et le lien vers Amboise. Ne pas transformer la baisse GSC en diagnostic SEO certain.

## Sources de départ
- Office de tourisme de Tours: https://www.tours-tourisme.fr/agenda/noel-a-tours-marche-de-noel/
- Organisateur Village Gourmand, horaires, tarifs et calendrier: https://levillagegourmand.fr/
- Ville de Tours, candidature et dates des marchés: https://formulaires.services.tours.fr/animations-commerciales/candidature-au-marche-de-noel-tours/

## Affiliation
Conserver l'offre Booking.com déjà intégrée et ses précautions sur la capacité et les frais; aucune autre affiliation naturelle vérifiée.

## Continuations internes
- Garder le lien existant vers Noël au château d'Amboise pour une excursion distincte.
- Éviter de dédoubler les informations pratiques du Village Gourmand dans un nouvel article.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/index.md

---
title: "Marchés de Noël de Tours 2026 en famille: lieux, dates et budget"
subtitle: "Chalets municipaux, Village Gourmand, grande roue et patinoire roller: les informations utiles pour venir avec des enfants"
summary: À Tours, les marchés municipaux sont annoncés du 27 novembre au 27 décembre 2026 et le Village Gourmand du 20 novembre 2026 au 3 janvier 2027. Trois emplacements, horaires, tarifs et accès pour préparer une sortie en famille.
category: evenements
location:
  city: Tours
  department: Indre-et-Loire
  region: Centre-Val de Loire
image:
  src: "/images/articles/2026/10/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand.webp"
  alt: "Vue de la place de la Résistance à Tours hors période du marché de Noël"
sources:
  - title: Ville de Tours - Marchés de Noël 2026, dates et emplacements
    url: https://formulaires.services.tours.fr/animations-commerciales/candidature-au-marche-de-noel-tours/
  - title: Village Gourmand de Tours - Programme, horaires et tarifs 2026-2027
    url: https://levillagegourmand.fr/
  - title: Fil Bleu - Tramway ligne A et informations trafic
    url: https://www.filbleu.fr/horaires-et-trajets/toutes-les-lignes/ligne-a
eventEndsAt: 2027-01-03
reviewAt: 2026-11-18
topic:
  key: evenements|tours|marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand|2026
  keywords:
    - marché de Noël Tours 2026
    - Village Gourmand Tours 2026
    - grande roue Tours Noël 2026
    - patinoire roller Tours
    - Noël Tours en famille
slug: marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand
status: published
publishedAt: 2026-10-28T21:29:25.946Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Tours
---
<!-- article-image-credit -->
*Photo: [ktanaka](https://commons.wikimedia.org/wiki/File:Place_de_la_resistance,_tours_-_panoramio.jpg) - [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Tours, les marchés de Noël se répartissent entre trois emplacements, avec des dates différentes. Les **chalets municipaux**, boulevard Heurteloup et place de la Résistance, sont annoncés **du 27 novembre au 27 décembre 2026**. Le **Village Gourmand**, place Anatole-France, ouvre **du 20 novembre 2026 au 3 janvier 2027** avec restauration, grande roue et patinoire à rollers. Entre le 27 novembre et le 27 décembre, vous pouvez combiner les lieux.

## Chalets municipaux ou Village Gourmand ?

Pour une promenade entre les étals, choisissez les **marchés municipaux**, boulevard Heurteloup et place de la Résistance. La Ville confirme ces emplacements et ces dates dans son appel à candidatures aux commerçants, mais ce document **ne donne pas encore d'horaires visiteurs définitifs** pour 2026. Évitez donc de prévoir une visite tardive à partir d'horaires d'une édition précédente.

Pour manger sur place ou profiter des attractions, allez au **Village Gourmand**, place Anatole-France, au bout de la rue Nationale. Une trentaine de chalets de restauration, une grande roue et une **patinoire roller (pas sur glace)** y sont annoncés. L'entrée dans le village est **gratuite**; les repas et les attractions sont payants.

Le Village Gourmand prévoit des animations à certaines dates: magie et musique le **20 novembre**, musique et maquillage pour les enfants le **22 novembre**, par exemple. Le Père Noël et les concerts ne sont pas des rendez-vous garantis chaque jour: consultez le programme selon votre date.

**Pour choisir le bon jour:** du 20 au 26 novembre, le Village Gourmand est le seul de ces trois emplacements annoncé ouvert; du 27 novembre au 27 décembre, les trois sont prévus; du 28 décembre au 3 janvier, seul le Village Gourmand se poursuit.

## Grande roue et patinoire roller: tarifs et âge des enfants

<!-- article-image-body:01 -->

![Vue nocturne sur Tours depuis une grande roue en décembre 2017](/images/articles/2026/10/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand-body-01.webp)

*Photo: [GrandCelinien](https://commons.wikimedia.org/wiki/File:Tours_-_Vue_grande_roue.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le tarif normal annoncé est de **5 € par personne pour chacune des deux attractions**. Pour quatre personnes, comptez **20 € pour la grande roue**, ou **40 € si les quatre font aussi la patinoire**, hors restauration et transports.

Un tarif réduit de **4 €** est annoncé **le mercredi pour les moins de 12 ans**, ainsi que **les jeudis et vendredis pour les étudiants**, dans les deux cas **hors vacances scolaires**. Le pass « Gliss » pour la patinoire coûte **49 €** pour la saison: il n'a d'intérêt que pour des visites répétées.

L'organisateur ne détaille pas sur sa page générale l'âge minimum pour la patinoire, les protections fournies ni l'accompagnement des petits. Renseignez-vous avant de compter sur cette activité avec un jeune enfant. Il est aussi possible de profiter des chalets sans payer d'attraction.

## Horaires du Village Gourmand et des attractions

Le **Village Gourmand** ouvre normalement **de 12 h à 22 h**, et **jusqu'à 23 h les vendredis et samedis**.

La **grande roue et la patinoire roller** suivent leurs propres horaires:
- **Lundi à jeudi:** 13 h-22 h.
- **Vendredi:** 13 h-23 h.
- **Samedi, dimanche et vacances scolaires:** 11 h-23 h.

L'organisateur annonce deux exceptions:
- **25 décembre:** village de **15 h à 21 h**; attractions de **15 h à 23 h**.
- **1er janvier:** village de **15 h à 22 h**; attractions de **15 h à 23 h**.

Ces horaires concernent le Village Gourmand, **pas les deux marchés municipaux**. Ils peuvent changer avant l'ouverture ou pendant la saison: consultez le programme actualisé de l'organisateur.

## Accès en tram, poussette et repas des petits

<!-- article-image-body:02 -->

![Rame du tramway de Tours sur la place Anatole-France en mai 2023](/images/articles/2026/10/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand-body-02.webp)

*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Rame_Tramway_Tours_Place_Anatole_France_-_Tours_(FR37)_-_2023-05-19_-_2.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Pour le Village Gourmand, prenez le **tram A jusqu'à Porte de Loire**. Depuis la gare de Tours, l'organisateur indique la direction **Vaucanson**. Les parkings **Anatole-France** et **Nationale** sont également signalés, sans garantie de places. Vérifiez les [horaires et perturbations de la ligne A sur Fil Bleu](https://www.filbleu.fr/horaires-et-trajets/toutes-les-lignes/ligne-a), surtout pour le retour en soirée.

La place Anatole-France se trouve au bout de la rue Nationale; la place de la Résistance et le boulevard Heurteloup sont deux autres étapes distinctes. Avec une poussette, l'affluence du soir peut ralentir les déplacements. Les informations publiées ne confirment ni table à langer, ni micro-ondes accessibles aux visiteurs, ni prêt de poussette: prévoyez de quoi changer et nourrir les plus petits. Avant de faire la queue pour la grande roue, demandez les conditions d'accès avec un bébé ou une poussette.

## Rester dormir à Tours pour les fêtes

Pour une famille arrivant en train, le [Nemea Appart Hotel Quai Victor Tours Centre sur Booking.com](https://www.booking.com/hotel/fr/nemea-appart-39-residence-le-quai-victor.html) est une option près de la gare. Des logements disposent d'une kitchenette avec **micro-ondes**, utile pour les repas d'un bébé. Vérifiez la **capacité réelle du logement choisi**, les couchages, les conditions pour les enfants et les éventuels frais ou dépôt de garantie avant de réserver: tous les studios ne conviennent pas à quatre personnes.

Si vous prolongez le séjour, notre guide de [Noël 2026 au château royal d'Amboise](/articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/) présente les visites décorées, les tarifs et les nocturnes sur réservation.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | Ville de Noël d’Arras 2026 en famille: horaires, attractions et budget | evenements | Arras, Pas-de-Calais, Hauts-de-France
- /articles/evenements/village-du-pere-noel-a-montbazon-2026-dates-activites-et-budget-en-famille/ | Village du Père Noël à Montbazon 2026: dates, activités et budget en famille | evenements | Montbazon, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/ | Marché de Noël de Lille 2026 en famille: village, Grande Roue et infos pratiques | evenements | Lille, Nord, Hauts-de-France
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | Noël à Toulouse 2026 en famille: marchés, Père Noël et patinoire | evenements | Toulouse, Haute-Garonne, Occitanie
- /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | Lumières de Laval 2026 en famille: balade gratuite, marchés, roue et croisière | evenements | Laval, Mayenne, Pays de la Loire
- /articles/cuisine/halles-de-tours-en-famille-un-panier-d-automne-deux-repas-simples/ | Halles de Tours en famille: un panier d’automne, deux repas simples | cuisine | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | Marchés de Noël de Tours 2026 en famille: lieux, dates et budget | evenements | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/vie-pratique/emprunter-des-jeux-a-tours-mirabeau-ou-la-maison-des-jeux/ | Emprunter des jeux à Tours: Mirabeau ou la Maison des Jeux? | vie-pratique | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/parentalite/laep-en-indre-et-loire-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP en Indre-et-Loire: où aller avec un enfant de moins de 6 ans | parentalite | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/vie-pratique/transport-scolaire-remi-en-indre-et-loire-que-faire-apres-la-date-limite-2026/ | Transport scolaire Rémi en Indre-et-Loire: que faire après la date limite 2026 | vie-pratique | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/vie-pratique/montlouis-sur-loire-emprunter-jeux-liseuses-et-objets-a-la-mediatheque/ | Montlouis-sur-Loire: emprunter jeux, liseuses et objets à la médiathèque | vie-pratique | Montlouis-sur-Loire, Indre-et-Loire, Centre-Val de Loire
- /articles/parentalite/aide-a-domicile-en-indre-et-loire-quel-soutien-pour-les-parents/ | Aide à domicile en Indre-et-Loire: quel soutien pour les parents ? | parentalite | Indre-et-Loire, Centre-Val de Loire
- /articles/activites/aquarium-de-touraine-en-famille-que-voir-avec-les-enfants/ | Aquarium de Touraine en famille: que voir avec les enfants ? | activites | Lussault-sur-Loire, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-2026-a-villandry-spectacles-et-ateliers-a-choisir-selon-l-age/ | Noël 2026 à Villandry: décors, spectacle d'ombres et ateliers en famille | evenements | Villandry, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | Noël à Chenonceau 2026: décors, nocturnes et tarifs en famille | evenements | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/festival-contes-et-rencontres-2027-en-lozere-quels-spectacles-voir-en-famille/ | Festival Contes et Rencontres 2027 en Lozère: quels spectacles voir en famille ? | evenements | Lozère, Occitanie
- /articles/evenements/lumieres-d-afrique-2026-2027-a-sigean-les-lanternes-en-famille/ | Lumières d’Afrique 2026-2027 à Sigean: les lanternes en famille | evenements | Sigean, Aude, Occitanie
- /articles/evenements/natur-armor-2027-a-paimpol-preparer-sa-visite-en-famille/ | Natur’Armor 2027 à Paimpol: préparer sa visite en famille | evenements | Paimpol, Côtes-d'Armor, Bretagne
- /articles/evenements/noel-a-brive-2026-en-famille-animations-dates-et-parcours/ | Noël à Brive 2026 en famille: animations, dates et parcours | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine

### Historique Radar lié

- opportunity | /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | 2026-10-30T09:27:15.122Z
- refresh | /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | 2026-11-13T07:36:29.975Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z
- opportunity | /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | 2026-10-28T21:29:26.054Z
- opportunity | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-10-24T12:31:27.784Z
- refresh | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-11-13T22:32:33.388Z
- opportunity | /articles/evenements/noel-2026-a-villandry-spectacles-et-ateliers-a-choisir-selon-l-age/ | 2026-10-27T10:35:41.254Z
- opportunity | /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | 2026-10-24T23:34:36.270Z
- opportunity | /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | 2026-10-29T20:30:33.011Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
