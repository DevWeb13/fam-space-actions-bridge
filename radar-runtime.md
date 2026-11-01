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
title: "Noël 2026 à Besançon en famille : contes, marché solidaire ou artisans ?"
subtitle: Trois sorties aux dates différentes, avec les réservations et les accès à connaître.
summary: "Contes gratuits dès 3 ans au Musée du Temps, marché solidaire près de Chamars ou artisans rue Mégevand : choisissez votre sortie de Noël 2026 à Besançon selon le jour et les enfants."
category: evenements
location:
  city: Besançon
  department: Doubs
  region: Bourgogne-Franche-Comté
keywords:
  - Noël Besançon 2026 enfants
  - contes gratuits Musée du Temps décembre 2026
  - marché solidaire Noël Chamars 2026
  - marché artisanal Besançon 5 6 décembre 2026
sources:
  - title: Musée du Temps — contes de Noël 2026
    url: https://www.mdt.besancon.fr/event/marche-de-noel/
  - title: Musée du Temps — consignes de visite, poussettes et table à langer
    url: https://www.mdt.besancon.fr/infos-pratiques/consignes-de-visite-pour-votre-confort/
  - title: Récidev — marché solidaire de Noël 2026
    url: https://marchesolidairedenoel.fr/
  - title: Office de tourisme du Grand Besançon — marché artisanal spécial Noël
    url: https://www.besancon-tourisme.com/fr/fiche-sit/F105241_marche-artisanal-edition-speciale-noel-besancon/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-2026-a-besancon-en-famille-contes-gratuits-marche-solidaire-ou-artisans
  decision: Choisir un rendez-vous de Noël réellement programmé à Besançon en 2026 selon l'âge des enfants, le jour disponible, le budget et la nécessité de réserver.
  affiliationPotential: Pour un séjour, suite 4 personnes du Best Western Hotel Fontaine Argent vérifiée sur Expedia.fr (23 avenue Fontaine-Argent) ; disponibilité et tarif aux dates de Noël à vérifier. Les trois sorties ne nécessitent pas de billetterie partenaire.
  gsc:
    retrievedAt: 2026-11-01T04:25:25+01:00
    dataThrough: 2026-10-29
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Musée du Temps de Besançon — contes gratuits 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-20
---

À Besançon, trois rendez-vous de Noël 2026 se distinguent : une heure de contes pour les enfants dès 3 ans, un marché solidaire ouvert pendant douze jours et un marché d'artisans concentré sur un week-end. Ils ne se visitent pas de la même façon : **les contes se réservent**, tandis que les marchés se prêtent davantage à une promenade et à la recherche de cadeaux.

## Quel rendez-vous choisir selon votre date ?

- **Samedi 28 novembre, 5, 12 ou 19 décembre, de 16 h à 17 h :** les contes du Musée du Temps, pour les enfants à partir de 3 ans. Animation gratuite, mais inscription obligatoire.
- **Samedi 5 et dimanche 6 décembre :** le marché artisanal de la cour du centre diocésain, au 20 rue Mégevand. Une trentaine d'artisans locaux et des concerts sont annoncés.
- **Du mercredi 9 au dimanche 20 décembre :** le marché solidaire de Noël organisé par Récidev, près de l'arrêt de tram Chamars, de 11 h à 19 h, sauf le lundi à partir de 14 h.

Le samedi 5 décembre permet de combiner le marché artisanal avec les contes, à condition d'avoir réservé ces derniers et de tenir compte du trajet entre les lieux. Le samedi 12 ou 19 décembre, ce sont les contes et le marché solidaire qui se recoupent.

## Contes au Musée du Temps : gratuit, mais à réserver

Dans la salle des partenaires du Musée du Temps, les bibliothécaires racontent des histoires de Noël, de lutins et de créatures magiques. La séance dure une heure. L'annonce précise **un adulte accompagnateur maximum par enfant** : une famille venant avec plusieurs adultes doit donc vérifier la composition de son groupe avant de réserver.

L'inscription s'effectue sur [le portail des bibliothèques municipales](https://bibliotheques.besancon.fr/) ou au **03 81 87 81 40**. La gratuité concerne cette animation ; elle ne signifie pas que toutes les visites du musée sont gratuites. Consultez [l'annonce du Musée du Temps](https://www.mdt.besancon.fr/event/marche-de-noel/) pour les éventuelles mises à jour.

Pour les familles avec un bébé, le musée autorise les poussettes, dispose de rampes et d'ascenseurs sur son parcours et annonce une table à langer près des sanitaires du rez-de-chaussée. Les porte-bébés dorsaux ne sont pas admis. Ces [consignes générales du musée](https://www.mdt.besancon.fr/infos-pratiques/consignes-de-visite-pour-votre-confort/) ne précisent toutefois pas la configuration de la salle des contes : demandez confirmation si vous avez besoin d'y garder une poussette ou d'un accès adapté.

## Marché solidaire : des cadeaux qui soutiennent des associations

Le [marché solidaire de Noël de Récidev](https://marchesolidairedenoel.fr/) se tient du 9 au 20 décembre 2026, près de Chamars. Il met à l'honneur les achats solidaires et les associations plutôt que les attractions payantes. C'est un choix intéressant pour regarder des objets et discuter avec les exposants, sans devoir organiser la sortie autour d'un spectacle à heure fixe.

Le site de l'organisateur est encore en cours de mise à jour pour l'édition 2026 : **ne considérez pas les animations, menus ou stands des années précédentes comme confirmés**. Le prix des achats et de la restauration dépendra des exposants. L'accès aux sanitaires, les équipements bébé et les conditions précises de circulation en poussette ne sont pas encore détaillés pour cette édition.

## Marché artisanal rue Mégevand : le week-end du 5 et 6 décembre

Dans la cour du centre diocésain, au **20 rue Mégevand**, l'édition spéciale Noël réunit **30 artisans locaux** selon l'[office de tourisme du Grand Besançon](https://www.besancon-tourisme.com/fr/fiche-sit/F105241_marche-artisanal-edition-speciale-noel-besancon/). Deux concerts sont annoncés : **Mo'Blues le samedi 5 décembre** et **Lost In Jazz le dimanche 6 décembre**. Un quiz, une roue des cadeaux, un brasseur et un food-truck figurent aussi au programme.

C'est le rendez-vous à privilégier pour des cadeaux fabriqués localement, avec une pause musicale possible. En revanche, les **horaires précis, le tarif d'entrée éventuel et les horaires des concerts** ne sont pas indiqués sur la fiche officielle consultée. L'accès poussette et les sanitaires du site ne sont pas non plus documentés pour ce marché. Vérifiez ces points auprès de l'organisateur avant de partir avec de jeunes enfants.

## Se déplacer avec des enfants

Le marché solidaire est desservi par l'**arrêt de tram Chamars**. Les contes ont lieu au Musée du Temps, dans le centre historique ; le marché artisanal est rue Mégevand. En décembre, prévoyez des vêtements chauds pour les parties en extérieur et un programme suffisamment court pour les plus petits.

**Bon plan le samedi :** les transports Ginko sont gratuits pour tous, y compris les bus et les trams. Pour les autres jours, les titres adaptés à une famille, les parkings relais et les règles pour les poussettes sont détaillés dans notre guide [Bus et tram à Besançon en famille : tarifs et gratuités Ginko en 2026](/articles/vie-pratique/bus-et-tram-a-besancon-en-famille-tarifs-et-gratuites-ginko-en-2026/).

## Et pour passer la nuit à Besançon ?

Si vous venez de plus loin, le [Best Western Hotel Fontaine Argent sur Expedia.fr](https://www.expedia.fr/Besancon-Hotel-Hotel-Fontaine-Argent.h41704156.Description-Hotel) propose notamment une **suite annoncée pour quatre personnes**, avec un grand lit et un canapé-lit. Attention à bien sélectionner cette catégorie : d'autres chambres de l'hôtel sont limitées à deux ou trois personnes. Vérifiez le tarif réel, les disponibilités aux dates de décembre, le couchage des enfants, le parking payant et les conditions d'annulation avant de réserver.

Pour compléter un séjour par des visites hors des marchés de Noël, notre guide [Week-end dans le Doubs en famille : quel budget pour trois grandes sorties ?](/articles/voyages/week-end-dans-le-doubs-en-famille-quel-budget-pour-3-grandes-sorties-en-2026/) compare notamment la Citadelle, Dino-Zoo et le Gouffre de Poudrey.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/vital-ete-besancon-2026-famille/ | Vital’Été Besançon 2026: inscription et activités gratuites | sorties | Besançon, Doubs, Bourgogne-Franche-Comté
- /articles/voyages/week-end-dans-le-doubs-en-famille-quel-budget-pour-3-grandes-sorties-en-2026/ | Week-end dans le Doubs en famille: quel budget pour 3 grandes sorties en 2026 | voyages | Besançon, Doubs, Bourgogne-Franche-Comté
- /articles/vie-pratique/bus-et-tram-a-besancon-en-famille-tarifs-et-gratuites-ginko-en-2026/ | Bus et tram à Besançon en famille: tarifs et gratuités Ginko en 2026 | vie-pratique | Besançon, Doubs, Bourgogne-Franche-Comté
- /articles/evenements/lumieres-de-noel-a-montbeliard-2026-quel-jour-venir-avec-des-enfants/ | Lumières de Noël à Montbéliard 2026: quel jour venir avec des enfants? | evenements | Montbéliard, Doubs, Bourgogne-Franche-Comté
- /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | Noël à Caen 2026 en famille: marché de Noël et visite illuminée | evenements | Caen, Calvados, Normandie
- /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | Marché de Noël 100 % Côte-d’Or à Dijon 2026: horaires, spectacles et Père Noël | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | Noël 2026 à Brest en famille: marché, projections et horaires | evenements | Brest, Finistère, Bretagne
- /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | Noël à Nice 2026 en famille: village, spectacles et crèche | evenements | Nice, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/voyages/la-saline-royale-d-arc-et-senans-avec-des-enfants-sel-images-et-jardins/ | La Saline royale d’Arc-et-Senans avec des enfants: sel, images et jardins | voyages | Arc-et-Senans, Doubs, Bourgogne-Franche-Comté
- /articles/activites/gouffre-de-poudrey-avec-des-enfants-250-marches-et-7-c-est-ce-une-bonne-idee/ | Gouffre de Poudrey avec des enfants: 250 marches et 7 °C, est-ce une bonne idée? | activites | Étalans, Doubs, Bourgogne-Franche-Comté
- /articles/sorties/visite-famille-beurnier-rossel-montbeliard-2026/ | Musée Beurnier-Rossel à Montbéliard: retour sur la visite gratuite du 2 août 2026 | sorties | Montbéliard, Doubs, Bourgogne-Franche-Comté
- /articles/evenements/tous-en-sons-2026-a-marseille-quel-spectacle-choisir-selon-l-age-des-enfants/ | Tous en Sons ! 2026 à Marseille: spectacles enfants, âges et tarifs | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | Noël 2026 à Toulon en famille: marché, patinoire et horaires | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | Noël à Bayeux 2026 en famille: marché et Galopades | evenements | Bayeux, Calvados, Normandie
- /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | Lumières de Laval 2026 en famille: marchés, grande roue et croisière | evenements | Laval, Mayenne, Pays de la Loire
- /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | Festival des Petits Explorateurs 2026 à Dijon: ateliers, horaires et tarifs | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille/ | Flottins d’Évian 2026: un village de Noël en bois flotté à découvrir en famille | evenements | Évian-les-Bains, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | Festival BD Colomiers 2026 en famille: programme, tarifs et accès | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | Ville de Noël d’Arras 2026 en famille: horaires, attractions et budget | evenements | Arras, Pas-de-Calais, Hauts-de-France
- /articles/evenements/noel-d-autrefois-2026-au-musee-de-plein-air-quel-jour-venir-en-famille/ | Noël d’autrefois 2026 à Villeneuve-d’Ascq: dates, ateliers et accès en famille | evenements | Villeneuve-d'Ascq, Nord, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | 2026-10-29T23:28:55.064Z
- opportunity | /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | 2026-10-30T03:27:02.483Z
- opportunity | /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | 2026-10-30T09:27:15.122Z
- opportunity | /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | 2026-10-29T14:26:32.277Z
- opportunity | /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | 2026-10-30T06:28:26.726Z
- opportunity | /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | 2026-10-31T10:28:17.432Z
- opportunity | /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | 2026-10-30T15:36:05.374Z
- opportunity | /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | 2026-10-30T21:26:32.584Z
- opportunity | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-10-30T18:26:56.039Z
- opportunity | /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | 2026-10-25T04:31:33.540Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
