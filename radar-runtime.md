# Radar Fam Space - Phase 3/3

## Mission

Radar utilise Google Search Console et la recherche web pour choisir le travail éditorial qui apporte le plus de valeur à Fam Space: améliorer une page réellement perfectible, développer une intention proche d'une page forte, ou publier à temps une opportunité locale/saisonnière. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

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

Soumets le résultat final avec `action: advance`, le frontmatter éditorial utile, le corps complet et un bloc `radarReview`:
- `summary`: contrôles et corrections réellement effectués;
- `sources`: URLs factuelles revérifiées;
- pour un refresh, `substantialChanges`: au moins deux changements substantiels;
- pour un refresh, `regressionCheck`: résultat concret de la comparaison ancien/nouveau.

**Ne recopie aucun autre champ Radar, aucune branche et aucun SHA.** Le workflow GitHub crée le commit de phase 3, retrouve le HEAD réel et lance directement le processeur final.

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
title: "Traîneau flottant de Noël à Metz 2026 : horaires et embarquement en famille"
subtitle: Vingt minutes gratuites sur l'eau pour voir les illuminations, avec un départ sous le Moyen Pont
summary: Jours de circulation, horaires de 17 h à 21 h, accès au ponton et précautions avec des enfants pour profiter du traîneau flottant de Metz.
category: evenements
location:
  city: Metz
  department: Moselle
  region: Grand Est
keywords:
  - traîneau flottant père Noël Metz 2026
  - bateau gratuit Noël Metz famille
sources:
  - title: Ville de Metz - Noël à Metz 2026, programme du 2 novembre
    url: https://metz.fr/actus/2026/261102_noel_a_metz_2026_magie_tradition_et_reverie.php
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille
  decision: Savoir si la famille peut profiter du bateau gratuit, à quel moment se présenter et si cette balade convient mieux qu'une promenade à pied, sans confondre les deux expériences.
  affiliationPotential: Activité principale gratuite, sans billetterie partenaire naturelle ; vérifier seulement un hébergement familial pertinent pour un séjour à Metz, sans dupliquer l'offre de l'article général.
  gsc:
    retrievedAt: 2026-11-03T01:32:28+01:00
    dataThrough: 2026-10-31
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Metz - Noël à Metz 2026, programme du 2 novembre »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-30
---

Le traîneau flottant du père Noël revient sur le plan d'eau de Metz du **20 novembre au 30 décembre 2026**. Cette embarcation électrique propose une **balade gratuite d'environ 20 minutes**, de nuit, pour regarder les illuminations, la cathédrale et le Temple Neuf depuis l'eau. Pour en profiter avec les enfants, le plus important est de choisir un jour de circulation et de repérer le ponton avant de venir.

## Quels jours et à quelle heure embarquer ?

Selon le [programme publié par la Ville de Metz le 2 novembre 2026](https://metz.fr/actus/2026/261102_noel_a_metz_2026_magie_tradition_et_reverie.php), les départs sont annoncés **de 17 h à 21 h** :

- **Du 20 novembre au 18 décembre** : les vendredis, samedis et dimanches, avec une ouverture supplémentaire annoncée le mercredi 16 décembre.
- **Du 19 au 30 décembre** : tous les jours, de 17 h à 21 h.

Attention à une coquille dans le programme municipal : il mentionne aussi « vendredi 17 décembre », alors que le **17 décembre 2026 est un jeudi**. Cette date supplémentaire n'est donc pas suffisamment claire pour garantir une sortie le jeudi 17. Vérifiez-la auprès de la Ville avant de vous déplacer spécialement ce soir-là.

La plage de 17 h à 21 h correspond aux horaires annoncés pour l'animation, **pas à un départ garanti toutes les vingt minutes**. La fréquence des rotations, la capacité du bateau et l'heure du dernier embarquement ne sont pas précisées.

## Où se trouve le départ et faut-il réserver ?

Le **départ et le retour se font au ponton en contrebas du Moyen Pont**, près du plan d'eau. Repérez cet accès avant la tombée de la nuit si vous venez avec une poussette ou de jeunes enfants.

La Ville confirme la gratuité, mais **ne précise pas encore si l'embarquement se fait librement, avec une file d'attente ou sur réservation**. Ne comptez donc pas sur une place assurée à une heure précise : vérifiez les modalités actualisées sur le programme municipal et prévoyez une marge pour attendre.

## Est-ce adapté aux jeunes enfants et aux poussettes ?

La Ville indique que l'embarcation est **accessible aux personnes à mobilité réduite (PMR)**. En revanche, elle ne détaille pas les conditions pour les poussettes, les bébés, les équipements de sécurité à bord ni les éventuelles limites d'âge. Si vous avez besoin d'embarquer avec une poussette ou un fauteuil, demandez confirmation des modalités pratiques avant de partir.

La balade elle-même dure environ vingt minutes, ce qui est court pour un enfant, mais l'attente au ponton peut allonger la sortie. Prévoyez des vêtements chauds, surtout près de l'eau en soirée. Les informations publiées ne confirment ni table à langer, ni micro-ondes, ni espace pour réchauffer un repas bébé au départ.

## Bateau ou Sentier des Lanternes : que choisir ?

Le traîneau flottant **reste sur l'eau** : on observe les lumières de la ville et le Sentier des Lanternes depuis l'embarcation. Le **Sentier des Lanternes**, lui, est une promenade **à pied** au square Boufflers, avec des installations lumineuses à découvrir de près. Ce ne sont ni le même parcours ni les mêmes conditions d'accès.

Avec un enfant qui fatigue vite à marcher, le bateau peut être une bonne option si l'attente est raisonnable. Si vous voulez voir les lanternes de près, choisissez plutôt la promenade à pied. Les deux peuvent se combiner lors d'une soirée, sans obligation de tout faire.

Pour les horaires des marchés, le Sentier des Lanternes, les parkings et les transports, consultez notre guide [Noël à Metz 2026 en famille : marchés et Sentier des Lanternes](https://www.fam-space.fr/articles/evenements/noel-a-metz-2026-en-famille-marches-et-sentier-des-lanternes/).

## Et si vous restez dormir à Metz ?

Pour éviter un retour tardif après les illuminations, **Le Cocon Cathédrale**, appartement situé près de la cathédrale, propose une cuisine avec micro-ondes et des espaces de couchage adaptés à certaines familles. Vous pouvez [consulter Le Cocon Cathédrale sur Booking.com](https://www.booking.com/hotel/fr/le-cocon-cathedrale.en-gb.html) et vérifier la capacité exacte, le prix et la disponibilité selon l'âge de vos enfants. Ce logement n'est pas nécessaire pour profiter du bateau gratuit : il peut surtout être utile si vous transformez la sortie en week-end.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/noel-a-metz-2026-en-famille-marches-et-sentier-des-lanternes/ | Noël à Metz 2026 en famille: marchés et Sentier des Lanternes | evenements | Metz, Moselle, Grand Est
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/train-du-pere-noel-a-toucy-2026-horaires-tarifs-et-reservation/ | Train du Père Noël à Toucy 2026: horaires, tarifs et réservation | evenements | Toucy, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/ | Noël à Trévarez 2026 en famille: dates, horaires et réservation | evenements | Saint-Goazec, Finistère, Bretagne
- /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | Marché de Noël 100 % Côte-d’Or à Dijon 2026: horaires, spectacles et Père Noël | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/activites/animation-estivale-metz-2026-enfants/ | Animation estivale Metz 2026: inscription et activités gratuites | activites | Metz, Moselle, Grand Est
- /articles/sorties/musee-cour-or-metz-ateliers-famille-ete-2026/ | Musée de La Cour d’Or à Metz en famille: prochains ateliers en septembre 2026 | sorties | Metz, Moselle, Grand Est
- /articles/activites/snowworld-amneville-en-famille-luge-bouees-ou-ski/ | SnowWorld Amnéville en famille: luge, bouées ou ski ? | activites | Amnéville, Moselle, Grand Est
- /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | Luminescences 2026-2027 au zoo d'Amnéville: billets, tarifs et visite en famille | evenements | Amnéville, Moselle, Grand Est
- /articles/voyages/dormir-au-parc-sainte-croix-avec-des-enfants-lodge-repas-et-acces-au-parc/ | Dormir au Parc Sainte-Croix avec des enfants: lodge, repas et accès au parc | voyages | Rhodes, Moselle, Grand Est
- /articles/sorties/chateau-de-sierck-en-famille-tarifs-2026-jeux-et-conseils-de-visite/ | Château de Sierck en famille: tarifs 2026, jeux et conseils de visite | sorties | Sierck-les-Bains, Moselle, Grand Est
- /articles/evenements/festival-du-livre-jeunesse-de-rouen-2026-quel-jour-et-quelles-activites-choisir-avec-les-enfants/ | Festival du livre jeunesse de Rouen 2026: dates, tarifs et activités en famille | evenements | Rouen, Seine-Maritime, Normandie
- /articles/evenements/saint-nicolas-2026-a-epinal-en-famille-defile-du-5-decembre-ou-marche-de-noel/ | Saint-Nicolas 2026 à Épinal: cortège du 5 décembre et marché de Noël en famille | evenements | Épinal, Vosges, Grand Est
- /articles/evenements/noel-2026-a-quimper-en-famille-village-concert-ou-ateliers-gratuits/ | Noël 2026 à Quimper en famille: village, concert et animations gratuites | evenements | Quimper, Finistère, Bretagne
- /articles/evenements/noel-2026-a-selestat-en-famille-marches-ou-parcours-du-sapin/ | Noël 2026 à Sélestat en famille: marchés, sapins et visites gratuites | evenements | Sélestat, Bas-Rhin, Grand Est
- /articles/evenements/cirque-de-noel-d-alsace-2026-a-eckbolsheim-quelle-seance-choisir-avec-des-enfants/ | Cirque de Noël d’Alsace 2026 à Eckbolsheim: dates, horaires et accès en famille | evenements | Eckbolsheim, Bas-Rhin, Grand Est
- /articles/evenements/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel/ | Noël 2026 à Chambéry en famille: marchés, parade et ateliers | evenements | Chambéry, Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/noel-2026-a-besancon-en-famille-contes-gratuits-marche-solidaire-ou-artisans/ | Noël 2026 à Besançon en famille: contes, marché solidaire et artisans | evenements | Besançon, Doubs, Bourgogne-Franche-Comté
- /articles/evenements/planete-ocean-a-paris-preparer-la-visite-en-famille/ | Planète Océan à Paris: préparer la visite en famille | evenements | Paris, Paris, Île-de-France

### Historique Radar lié

- opportunity | /articles/evenements/cirque-de-noel-d-alsace-2026-a-eckbolsheim-quelle-seance-choisir-avec-des-enfants/ | 2026-11-01T12:31:31.417Z
- opportunity | /articles/evenements/festival-du-livre-jeunesse-de-rouen-2026-quel-jour-et-quelles-activites-choisir-avec-les-enfants/ | 2026-11-02T00:36:18.455Z
- opportunity | /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | 2026-10-22T09:37:18.560Z
- opportunity | /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | 2026-10-29T14:26:32.277Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z
- opportunity | /articles/evenements/noel-2026-a-besancon-en-famille-contes-gratuits-marche-solidaire-ou-artisans/ | 2026-11-01T06:27:50.817Z
- opportunity | /articles/evenements/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel/ | 2026-11-01T09:37:48.790Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
