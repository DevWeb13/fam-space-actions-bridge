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
  - title: Ville de Metz - Le traîneau flottant du père Noël, calendrier détaillé
    url: https://metz.fr/agenda/fiche-42716.php
  - title: Compagnie des Bateaux de Metz - Les Bateaux de Noël 2026
    url: https://www.la-compagnie-des-bateaux-de-metz.com/actualites/bateaux-de-noel
  - title: Agence Inspire Metz - Traîneau flottant du Père Noël
    url: https://www.tourisme-metz.com/fr/details/838171277-animation-le-traineau-flottant-du-pere-noel
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
  phase: 2
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

Du **20 novembre au 30 décembre 2026**, le traîneau flottant du Père Noël revient à Metz pour une **balade gratuite d'environ 20 minutes** sur la Moselle. Mais il ne circule pas chaque soir: **les 24 et 25 décembre, l'animation est fermée**. Voici le calendrier à retenir pour éviter un déplacement inutile avec des enfants.

## Quels jours et à quelles heures embarquer ?

Selon la [fiche événement de la Ville de Metz](https://metz.fr/agenda/fiche-42716.php), le traîneau fonctionne **de 17 h à 21 h** aux dates suivantes:

- **Du 20 novembre au 13 décembre**: les vendredis, samedis et dimanches.
- **Du 16 au 30 décembre**: tous les jours, **sauf les jeudi 24 et vendredi 25 décembre**.

La fiche de l'[office de tourisme Inspire Metz](https://www.tourisme-metz.com/fr/details/838171277-animation-le-traineau-flottant-du-pere-noel) affiche encore un calendrier différent pour la seconde moitié de décembre, sans mentionner ces fermetures. Pour préparer votre soirée, privilégiez le calendrier détaillé de la Ville et vérifiez-le à nouveau avant de partir.

La plage de 17 h à 21 h correspond aux horaires de l'animation, **pas à une promesse de départ toutes les vingt minutes**. La fréquence des rotations et l'heure limite d'accès à la file ne sont pas précisées.

## Où se trouve le ponton et comment se déroule la balade ?

<!-- article-image-body:01 -->

![Moyen Pont à Metz photographié en février 2022, à proximité du lieu de départ annoncé](/images/articles/2026/11/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille-body-01.webp)

*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Moyen_Pont_-_Metz_(FR57)_-_2022-02-26_-_1.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

L'embarquement et le retour s'effectuent au **ponton du Moyen Pont, quai Paul-Vautrin**, en contrebas du pont. La promenade permet de voir les illuminations, le Temple Neuf, la cathédrale et le Sentier des Lanternes depuis l'eau.

La nouveauté 2026 est **Le Messin**, bateau électrique de **120 places**, annoncé par la [Ville de Metz](https://metz.fr/agenda/fiche-42716.php) et la [compagnie exploitante](https://www.la-compagnie-des-bateaux-de-metz.com/actualites/bateaux-de-noel). La balade est gratuite, mais les sources consultées ne précisent pas les modalités éventuelles de réservation ou de distribution des places. Ne confondez pas cette animation avec les Apéro Boats et repas de Noël payants proposés par la même compagnie.

## Avec une poussette, un bébé ou un fauteuil roulant

Le bateau est annoncé **accessible aux personnes à mobilité réduite**. Les modalités précises d'embarquement en fauteuil, avec une poussette ou avec un bébé ne sont toutefois pas détaillées. Pour vérifier une situation particulière, contactez l'organisateur au **03 74 47 00 29**, numéro communiqué par l'office de tourisme.

Prévoyez une tenue chaude pour les enfants et une marge pour l'attente au ponton: les vingt minutes correspondent à la navigation, pas au temps total de la sortie. Aucun espace de change ni dispositif pour réchauffer les repas de bébé n'est confirmé au point d'embarquement.

## Compléter la sortie avec le Sentier des Lanternes

Le traîneau permet de **regarder les illuminations depuis l'eau**; le **Sentier des Lanternes se visite à pied au square Boufflers**. Vous pouvez envisager les deux dans la même soirée, en tenant compte du froid, de l'attente et de la fatigue des plus petits.

Pour les marchés, les transports et les autres animations, consultez notre guide [Noël à Metz 2026 en famille: marchés et Sentier des Lanternes](https://www.fam-space.fr/articles/evenements/noel-a-metz-2026-en-famille-marches-et-sentier-des-lanternes/).

## Passer la nuit à Metz

Pour profiter des illuminations sans reprendre la route tard, **Le Cocon Cathédrale**, près de la cathédrale, propose un appartement avec cuisine équipée et micro-ondes, une chambre avec lit double et un canapé-lit. Les enfants sont acceptés; un lit bébé peut être demandé avec supplément selon les conditions. [Vérifiez les couchages, les tarifs et les disponibilités du Cocon Cathédrale sur Booking.com](https://www.booking.com/hotel/fr/le-cocon-cathedrale.en-gb.html) avant de réserver.

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
