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
- contrôle que la logique d'affiliation de ces règles partenaires fournies dans ce runtime a bien été appliquée, que les offres retenues sont encore pertinentes et que leur intégration se lit naturellement; pour une sortie, une activité, une visite, un événement ou un voyage sans affiliation, vérifie qu'aucune piste normale n'a été oubliée;
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
title: "Halloween 2026 au château de Couches: citrouilles ou jeu géant?"
subtitle: Deux animations pour les familles du 21 octobre au 1er novembre, avec des budgets et des âges différents.
summary: "Atelier citrouille à 14 €, accompagnant à 6 €, ou jeu d'enquête dès 7 ans à 20 €: dates, choix et réservations pour Halloween au château de Couches."
category: evenements
location:
  city: Couches
  department: Saône-et-Loire
  region: Bourgogne-Franche-Comté
keywords:
  - Halloween château de Couches 2026
  - atelier citrouille château de Couches
  - Mystères et Sortilèges Couches
sources:
  - title: Château de Couches - Halloween et billetterie
    url: https://www.chateaudecouches.com/fr_FR/evenements/halloween
  - title: Destination Saône-et-Loire - Halloween au château de Couches
    url: https://www.destination-saone-et-loire.fr/fr/evenement/halloween-au-chateau-de-couches.html
  - title: Destination Saône-et-Loire - Jeu géant Mystères & Sortilèges
    url: https://www.destination-saone-et-loire.fr/fr/evenement/jeu-geant-mysteres-sortileges.html
  - title: Office de tourisme Creusot Montceau - Halloween au château
    url: https://www.creusotmontceautourisme.fr/offres/halloween-au-chateau-de-couches-couches-fr-5369734/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille
  decision: Choisir entre l'atelier citrouille et le jeu géant selon l'âge des enfants, les dates, les horaires, le budget et la réservation.
  affiliationPotential: Réservation de l'activité directement auprès du château; vérifier un hébergement familial proche pour un séjour, sans prétendre disposer d'un billet partenaire.
  gsc:
    retrievedAt: 2026-10-12T04:49:15.779Z
    dataThrough: 2026-10-09
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Château de Couches - Halloween »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-11-01
---

Du 21 octobre au 1er novembre 2026, le château de Couches, en Saône-et-Loire, accueille les familles pour Halloween. Deux expériences sont proposées: fabriquer sa lanterne-citrouille et repartir avec, ou résoudre une enquête collective le 31 octobre. Le bon choix dépend surtout de l'âge des enfants et de leur envie de bricoler ou de jouer en équipe.

## L'atelier citrouille: créer sa décoration et visiter le château

L'[atelier de sculpture de citrouille](https://www.chateaudecouches.com/fr_FR/evenements/halloween) permet à chaque participant de creuser sa jack-o'-lantern puis de l'emporter à la maison. Le château est décoré pour Halloween et le billet inclut une visite libre. Attention: les courges utilisées **ne sont pas comestibles**.

L'animation est annoncée du **21 octobre au 1er novembre 2026**. L'office de tourisme indique une ouverture de **10h à 12h et de 14h à 17h** sur cette période; il faut toutefois choisir le créneau précis proposé au moment de la réservation, plutôt que supposer qu'un atelier commence à n'importe quelle heure. Le créneau du matin présenté dans la billetterie comme « Groupes scolaires - Atelier Jack O Lantern » est réservé aux scolaires, œuvres sociales et centres de loisirs.

Le tarif est de **14 € par participant** et **6 € pour l'adulte accompagnant**. Un enfant doit être accompagné pendant l'atelier; le billet accompagnant donne également accès à la visite libre. Pour un enfant et un adulte, comptez donc **20 €**. Ces conditions figurent sur la [billetterie du château](https://www.chateaudecouches.com/fr_FR/evenements/halloween) et sur la [fiche de l'office de tourisme](https://www.creusotmontceautourisme.fr/offres/halloween-au-chateau-de-couches-couches-fr-5369734/).

## Le 31 octobre: une enquête pour les enfants dès 7 ans

Le samedi **31 octobre, de 16h à 18h**, le jeu géant **Mystères & Sortilèges** propose une aventure en équipe à travers huit ateliers thématiques. Les participants collectent des indices, résolvent des énigmes et suivent une chasse au trésor. Quatre animateurs costumés encadrent l'expérience; matériel, carte des lieux et feuille de route sont prévus.

Cette formule s'adresse aux enfants **dès 7 ans**, aux adolescents et aux adultes qui souhaitent participer à une enquête plutôt qu'à un atelier manuel. Le prix annoncé est de **20 € par personne**, soit **60 € pour deux adultes et un enfant**. Les costumes sont encouragés. Le programme est détaillé par le [château](https://www.chateaudecouches.com/fr_FR/evenements/halloween) et [Destination Saône-et-Loire](https://www.destination-saone-et-loire.fr/fr/evenement/jeu-geant-mysteres-sortileges.html).

## Quelle activité réserver selon votre famille?

Avec un jeune enfant qui aime les activités manuelles, l'atelier citrouille est le choix le plus simple: on crée un objet à rapporter chez soi et on peut découvrir les décors du château à son rythme. Le château ne précise pas d'âge minimum pour cet atelier; contactez l'équipe si votre enfant est très jeune ou a besoin d'aide pour manipuler les outils.

Avec des enfants d'au moins 7 ans qui aiment les énigmes, le jeu du 31 octobre offre une activité collective de deux heures. Le tarif s'applique à chaque participant: vérifiez le coût pour l'ensemble de la famille avant de réserver. Ne confondez pas non plus ce rendez-vous unique avec les ateliers citrouille proposés sur plusieurs jours.

## Réserver et préparer la visite

Les **deux animations sont sur réservation**. Consultez les créneaux encore disponibles sur la [page officielle Halloween du château de Couches](https://www.chateaudecouches.com/fr_FR/evenements/halloween); la présence d'un horaire dans le programme général ne garantit pas qu'il reste des places. Pour une question sur l'âge, les conditions d'accès ou l'organisation avec une poussette, contactez directement le château au **03 85 45 57 99**.

Le château se trouve sur la **D978, 71490 Couches**. Prévoyez des vêtements adaptés à la météo d'automne et, pour le jeu du 31 octobre, une tenue qui permette de circuler et de participer aux défis. Avant le départ, vérifiez les éventuelles consignes d'accès et la disponibilité réelle du créneau réservé.

## Prolonger la sortie en Saône-et-Loire

Pour les familles qui viennent de loin, Halloween au château peut être l'étape d'un séjour dans la région. Comparez les hébergements à Couches ou dans les environs en tenant compte du trajet jusqu'au château, surtout pour le jeu qui se termine à 18h. Sur [Booking.com](https://www.booking.com/searchresults.fr.html?ss=Couches%2C%20Sa%C3%B4ne-et-Loire%2C%20France), vérifiez la capacité familiale, les conditions d'annulation et les disponibilités à vos dates avant de choisir. La réservation de l'animation, elle, reste distincte et s'effectue auprès du château.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | Monument jeu d'enfant 2026 au château de Vincennes: quel atelier choisir ? | evenements | Vincennes, Val-de-Marne, Île-de-France
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir/ | Halloween au Château de Villersexel 2026 en famille: quelle expérience choisir? | evenements | Villersexel, Haute-Saône, Bourgogne-Franche-Comté
- /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | Monument Jeu d'enfant 2026 à Azay-le-Rideau: animaux cachés et contes en famille | evenements | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/sorties/halloween-2026-a-france-miniature-en-famille/ | Halloween 2026 à France Miniature avec des enfants: billets et visite | sorties | Élancourt, Yvelines, Île-de-France
- /articles/sorties/petit-archeologue-puilaurens-famille-2026/ | Le petit archéologue à Puilaurens: un jeu de piste en famille | sorties | Puilaurens, Aude, Occitanie
- /articles/evenements/halloween-a-avignon-une-visite-familiale-pour-decouvrir-l-archeologie-funeraire/ | Halloween à Avignon: un atelier familial pour découvrir l'archéologie funéraire | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/sorties/musee-de-prehistoire-de-solutre-avec-des-enfants-musee-parc-et-roche/ | Musée de préhistoire de Solutré avec des enfants: musée, parc et Roche | sorties | Solutré-Pouilly, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/bons-plans/incontournables71-comment-profiter-des-50-de-reductions-en-saone-et-loire/ | Incontournables71: comment profiter des 50 € de réductions en Saône-et-Loire | bons-plans | Mâcon, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/parentalite/premier-week-end-a-cluny-avec-un-bebe-ou-dormir-et-quoi-prevoir/ | Cluny avec un bébé: visiter l'abbaye en poussette et bien choisir son hébergement | parentalite | Cluny, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | Halloween 2026 à la Tour de l'Horloge de Guînes: visites, contes et nocturne | evenements | Guînes, Pas-de-Calais, Hauts-de-France
- /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | Famille en fête 2026 en Gironde: ateliers gratuits pour les 0-6 ans | evenements | Saint-Loubès, Gironde, Nouvelle-Aquitaine
- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | Nuit des Châteaux 2026 à Tanlay: visites aux bougies les 16 et 17 octobre | evenements | Tanlay, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | Monument jeu d’enfant à Aigues-Mortes: mini-sacre et escape game les 17 et 18 octobre 2026 | evenements | Aigues-Mortes, Gard, Occitanie
- /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | Festival Lumière 2026: Laurel & Hardy en famille le 17 octobre à Lyon | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | Monument Jeu d’Enfant au château d’Angers: dragons et ateliers le 17 octobre 2026 | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-au-chateau-de-grignan-dates-tarifs-et-visite-en-famille/ | Noël 2026 au château de Grignan: dates, tarifs et visite en famille | evenements | Grignan, Drôme, Auvergne-Rhône-Alpes
- /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | Día de los Muertos 2026 au Jardin d’Acclimatation: programme, billets et tailles | evenements | Paris, Paris, Île-de-France
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France

### Historique Radar lié

- opportunity | /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | 2026-10-08T14:56:52.034Z
- opportunity | /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | 2026-10-12T08:10:30.674Z
- opportunity | /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | 2026-10-10T15:40:28.185Z
- opportunity | /articles/sorties/halloween-2026-a-france-miniature-en-famille/ | 2026-10-08T18:25:52.752Z
- opportunity | /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | 2026-10-12T10:40:26.563Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- opportunity | /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | 2026-10-06T19:20:39.093Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | 2026-10-10T17:38:43.806Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | 2026-10-11T16:33:21.125Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | 2026-10-10T08:38:56.921Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
