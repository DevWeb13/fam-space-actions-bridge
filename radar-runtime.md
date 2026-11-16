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
title: "Traîneau flottant de Noël à Metz 2026: dates, horaires et embarquement"
subtitle: Une balade gratuite de vingt minutes sur l'eau, au départ du Moyen Pont
summary: Dates de circulation, horaires de 17 h à 21 h, accès au ponton et conditions à vérifier avec des enfants pour le traîneau flottant de Metz.
category: evenements
location:
  city: Metz
  department: Moselle
  region: Grand Est
image:
  src: /images/articles/2026/11/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille.webp
  alt: Temple Neuf de Metz vu depuis le Moyen Pont, avec les bras de la Moselle partiellement gelés en janvier 2009; vue illustrative hors animation de Noël 2026
sources:
  - title: Ville de Metz - Noël à Metz 2026, programme du 2 novembre
    url: https://metz.fr/actus/2026/261102_noel_a_metz_2026_magie_tradition_et_reverie.php
eventEndsAt: 2026-12-30
topic:
  key: evenements|metz|traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille|2026
  keywords:
    - traîneau flottant père Noël Metz 2026
    - bateau gratuit Noël Metz famille
slug: traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille
status: published
publishedAt: 2026-11-03T03:34:06.455Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Metz
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(11)/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille/index.md
  targetSha: a498f753944d043ab16a480946155b41a5acfae4
  targetUrl: /articles/evenements/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille/
  decision: Savoir exactement quels soirs le traîneau gratuit circule, éviter les jours de fermeture et préparer l'embarquement avec des enfants.
  affiliationPotential: Conserver le lien Booking.com existant vers Le Cocon Cathédrale pour les familles passant la nuit à Metz; la balade elle-même est gratuite.
  gsc:
    retrievedAt: 2026-11-16T02:33:37+01:00
    dataThrough: 2026-11-13
    signal: uncertain
    basis: "Visibilité récente : 47 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-05
    peakEnd: 2026-11-07
    recentStart: 2026-11-11
    recentEnd: 2026-11-13
    peakImpressions: 47
    recentImpressions: 0
    commonQueries: 0
    positionDelta: null
    impressionRatio: null
    focusQueries: []
---

## Mission retenue
Actualiser le guide du traîneau flottant du Père Noël 2026 à Metz, balade gratuite d'environ 20 minutes sur la Moselle.

## Pourquoi cette mission
Le snapshot GSC signale 47 impressions sur trois jours puis zéro, sans établir la cause. Surtout, la fiche événement de la Ville de Metz apporte des précisions décisives absentes ou contradictoires dans l'article: fermeture les 24 et 25 décembre et capacité du nouveau bateau. La correction évitera des déplacements inutiles avec des enfants.

## Décision du lecteur
Choisir une soirée où la balade fonctionne réellement, connaître le point de départ et anticiper l'attente et les contraintes familiales.

## Faits à traiter
- Selon la fiche agenda actuelle de la Ville: du 20 novembre au 13 décembre, vendredis, samedis et dimanches de 17 h à 21 h; du 16 au 30 décembre, tous les jours de 17 h à 21 h, SAUF les 24 et 25 décembre, explicitement fermés. Remplacer la formulation actuelle qui annonce tous les jours du 19 au 30 décembre sans exception. Attention: des fiches touristiques affichent encore une autre grille; signaler la divergence et privilégier la fiche de la Ville, avec vérification finale.
- Nouveau bateau électrique Le Messin de 120 places, confirmé par la Ville et la compagnie; trajet d'environ 20 minutes. Ne pas inventer fréquence des départs, réservation ou temps d'attente.
- Départ au ponton Moyen Pont, quai Paul-Vautrin; gratuité, accessibilité PMR. La compagnie et l'office de tourisme donnent le 03 74 47 00 29 pour les questions d'embarquement; ne pas affirmer sans preuve que les poussettes ou bébés sont admis dans des conditions particulières.
- Préserver la distinction avec le Sentier des Lanternes, les conseils de froid et d'attente, les informations bébé, les liens internes, l'image et son crédit/licence, et le lien Booking.com existant.

## Sources de départ
- Ville de Metz, fiche événement et calendrier détaillé: https://metz.fr/agenda/fiche-42716.php
- Compagnie des Bateaux de Metz, nouveau bateau de 120 places: https://www.la-compagnie-des-bateaux-de-metz.com/actualites/bateaux-de-noel
- Agence Inspire Metz, ponton et contact, horaires divergents à recouper: https://www.tourisme-metz.com/fr/details/838171277-animation-le-traineau-flottant-du-pere-noel

## Affiliation
Conserver naturellement Le Cocon Cathédrale sur Booking.com pour une nuit en famille. Aucune billetterie partenaire à ajouter pour une animation gratuite.

## Continuations internes
- L'article existant sur Noël à Metz prend le relais pour les marchés et le Sentier des Lanternes.
- Ne pas confondre le traîneau gratuit avec les Apéro Boats et repas de Noël payants de la compagnie.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(11)/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille/index.md

---
title: "Traîneau flottant de Noël à Metz 2026: dates, horaires et embarquement"
subtitle: Une balade gratuite de vingt minutes sur l'eau, au départ du Moyen Pont
summary: Dates de circulation, horaires de 17 h à 21 h, accès au ponton et conditions à vérifier avec des enfants pour le traîneau flottant de Metz.
category: evenements
location:
  city: Metz
  department: Moselle
  region: Grand Est
image:
  src: "/images/articles/2026/11/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille.webp"
  alt: "Temple Neuf de Metz vu depuis le Moyen Pont, avec les bras de la Moselle partiellement gelés en janvier 2009; vue illustrative hors animation de Noël 2026"
sources:
  - title: Ville de Metz - Noël à Metz 2026, programme du 2 novembre
    url: https://metz.fr/actus/2026/261102_noel_a_metz_2026_magie_tradition_et_reverie.php
eventEndsAt: 2026-12-30
topic:
  key: evenements|metz|traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille|2026
  keywords:
    - traîneau flottant père Noël Metz 2026
    - bateau gratuit Noël Metz famille
slug: traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille
status: published
publishedAt: 2026-11-03T03:34:06.455Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Metz
---

Du **20 novembre au 30 décembre 2026**, le traîneau flottant du père Noël propose à Metz une **balade gratuite d'environ 20 minutes** à bord d'une embarcation électrique. Depuis le plan d'eau, les familles découvrent les illuminations, la cathédrale, le Temple Neuf et le Sentier des Lanternes sous un autre angle. Voici les jours de circulation et les informations pratiques à connaître avant de venir avec des enfants.

## Dates et horaires du traîneau flottant

D'après le programme de la Ville de Metz publié le 2 novembre 2026, l'animation fonctionne **de 17 h à 21 h**:

- **Du 20 novembre au 18 décembre**: les vendredis, samedis et dimanches, ainsi que **le mercredi 16 et le jeudi 17 décembre**.
- **Du 19 au 30 décembre**: tous les jours.

Ces horaires décrivent la plage d'ouverture de l'animation, **pas un départ assuré toutes les vingt minutes**. La Ville ne précise pas la fréquence des rotations, la capacité de l'embarcation ni l'heure limite pour rejoindre la file.

## Où embarquer et faut-il réserver ?

<!-- article-image-body:01 -->

![Moyen Pont à Metz photographié en février 2022, à proximité du lieu de départ annoncé](/images/articles/2026/11/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille-body-01.webp)

*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Moyen_Pont_-_Metz_(FR57)_-_2022-02-26_-_1.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le départ et le retour ont lieu au **ponton en contrebas du Moyen Pont**, sur le plan d'eau de Metz. La balade est gratuite. En revanche, le programme municipal ne précise pas encore si les places sont attribuées directement sur place ou s'il faut réserver. Consultez les informations actualisées avant votre visite, surtout si vous avez peu de marge en soirée.

## Avec un bébé, une poussette ou un fauteuil roulant

La Ville annonce une embarcation **accessible aux personnes à mobilité réduite (PMR)**. Elle ne détaille toutefois pas les modalités d'embarquement des fauteuils, des poussettes et des bébés, ni les éventuelles restrictions d'âge. Pour un besoin précis, faites confirmer les conditions d'accueil avant le déplacement.

Les vingt minutes annoncées concernent le trajet sur l'eau: l'attente éventuelle au ponton peut prolonger la sortie. En décembre, habillez les enfants pour une activité extérieure en soirée. Aucun service de change ou de réchauffage des repas bébé n'est confirmé au ponton.

## Traîneau flottant ou Sentier des Lanternes ?

Le bateau permet **d'observer les illuminations depuis l'eau**, tandis que le **Sentier des Lanternes se parcourt à pied au square Boufflers** pour voir les installations de près. Ce sont deux expériences différentes, que l'on peut combiner si les horaires et la fatigue des enfants le permettent.

Pour préparer le reste de la soirée - marchés de Noël, horaires du Sentier, accès et transports - retrouvez notre guide [Noël à Metz 2026 en famille: marchés et Sentier des Lanternes](https://www.fam-space.fr/articles/evenements/noel-a-metz-2026-en-famille-marches-et-sentier-des-lanternes/).

## Dormir à Metz après les illuminations

Pour une soirée prolongée ou un week-end, **Le Cocon Cathédrale**, près de la cathédrale, est un appartement avec cuisine équipée et micro-ondes, une chambre avec lit double et un canapé-lit. Les enfants sont acceptés; un lit bébé peut être demandé moyennant supplément selon les conditions de réservation. [Consultez Le Cocon Cathédrale sur Booking.com](https://www.booking.com/hotel/fr/le-cocon-cathedrale.en-gb.html) pour vérifier les couchages, le prix et les disponibilités correspondant à votre famille.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants/ | Fontaines dansantes d'hiver à Metz 2026-2027: dates, horaires et conseils en famille | evenements | Metz, Moselle, Grand Est
- /articles/evenements/noel-a-metz-2026-en-famille-marches-et-sentier-des-lanternes/ | Noël à Metz 2026 en famille: marchés et Sentier des Lanternes | evenements | Metz, Moselle, Grand Est
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | Noël 2026 au château de Goulaine: dates, billets et conseils en famille | evenements | Haute-Goulaine, Loire-Atlantique, Pays de la Loire
- /articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/ | Noël à Trévarez 2026 en famille: dates, horaires et réservation | evenements | Saint-Goazec, Finistère, Bretagne
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/village-du-pere-noel-a-montbazon-2026-dates-activites-et-budget-en-famille/ | Village du Père Noël à Montbazon 2026: dates, activités et budget en famille | evenements | Montbazon, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/train-du-pere-noel-a-toucy-2026-horaires-tarifs-et-reservation/ | Train du Père Noël à Toucy 2026: horaires, tarifs et réservation | evenements | Toucy, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille/ | Traîneau flottant de Noël à Metz 2026: dates, horaires et embarquement | evenements | Metz, Moselle, Grand Est
- /articles/activites/animation-estivale-metz-2026-enfants/ | Animation estivale Metz 2026: inscription et activités gratuites | activites | Metz, Moselle, Grand Est
- /articles/sorties/musee-cour-or-metz-ateliers-famille-ete-2026/ | Musée de La Cour d’Or à Metz en famille: prochains ateliers en septembre 2026 | sorties | Metz, Moselle, Grand Est
- /articles/activites/snowworld-amneville-en-famille-luge-bouees-ou-ski/ | SnowWorld Amnéville en famille: luge, bouées ou ski ? | activites | Amnéville, Moselle, Grand Est
- /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | Luminescences 2026-2027 au zoo d'Amnéville: billets, pass annuel et horaires | evenements | Amnéville, Moselle, Grand Est
- /articles/voyages/dormir-au-parc-sainte-croix-avec-des-enfants-lodge-repas-et-acces-au-parc/ | Dormir au Parc Sainte-Croix avec des enfants: lodge, repas et accès au parc | voyages | Rhodes, Moselle, Grand Est
- /articles/sorties/chateau-de-sierck-en-famille-tarifs-2026-jeux-et-conseils-de-visite/ | Château de Sierck en famille: tarifs 2026, jeux et conseils de visite | sorties | Sierck-les-Bains, Moselle, Grand Est
- /articles/evenements/niepce-et-apres-une-exposition-photo-a-decouvrir-en-famille-a-chalon-sur-saone/ | Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône | evenements | Chalon-sur-Saône, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-puy-du-fou-en-famille-spectacles-et-visite-en-hiver/ | Noël 2026 au Puy du Fou en famille: spectacles et visite en hiver | evenements | Les Epesses, Vendée, Pays de la Loire
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/carnaval-de-guyane-2027-en-famille-preparer-ses-premieres-sorties/ | Carnaval de Guyane 2027 en famille: préparer ses premières sorties | evenements | Guyane
- /articles/evenements/mondo-clowns-2027-a-marmande-dates-tarifs-et-conseils-en-famille/ | Mondo'Clowns 2027 à Marmande: dates, tarifs et conseils en famille | evenements | Marmande, Lot-et-Garonne, Nouvelle-Aquitaine
- /articles/evenements/chambly-kids-festival-2027-quatre-spectacles-pour-les-enfants-dates-et-ages/ | Chambly Kids Festival 2027: quatre spectacles pour les enfants, dates et âges | evenements | Chambly, Oise, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/evenements/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants/ | 2026-11-03T06:32:33.600Z
- opportunity | /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | 2026-10-22T09:37:18.560Z
- refresh | /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | 2026-11-13T10:29:37.013Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | 2026-11-03T15:36:10.146Z
- refresh | /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | 2026-11-13T13:31:11.034Z
- refresh | /articles/activites/snowworld-amneville-en-famille-luge-bouees-ou-ski/ | 2026-11-09T17:37:32.610Z
- opportunity | /articles/evenements/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille/ | 2026-11-03T03:34:06.534Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
