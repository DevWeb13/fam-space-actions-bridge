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
title: "Abracada BOUH 2026 à Montpellier: programme et tarifs au château de Flaugergues"
subtitle: Les 24 et 25 octobre, Halloween se fête en famille avec des ateliers, des jeux et une boum; deux pages officielles donnent des horaires différents.
summary: "Abracada BOUH 2026 à Montpellier: activités d'Halloween pour enfants, prix des billets, horaires contradictoires et réservation au château de Flaugergues."
category: evenements
location:
  city: Montpellier
  department: Hérault
  region: Occitanie
keywords:
  - Abracada BOUH Montpellier 2026
  - Halloween enfants château de Flaugergues
  - festival Abracadabra 24 25 octobre
  - tarif Abracada BOUH enfant accompagnant
sources:
  - title: Festival Abracada BOUH - Présentation officielle 2026
    url: https://festivalabracadabra.com/
  - title: Festival Abracada BOUH - Informations pratiques et horaires
    url: https://festivalabracadabra.com/informations-2/
  - title: Abracada BOUH - Billetterie officielle Weezevent
    url: https://my.weezevent.com/abracada-bouh
  - title: Montpellier Métropole - Abracada BOUH les 24 et 25 octobre 2026
    url: https://agenda.montpellier.fr/event/98537/abracada-bouh-festival
  - title: Montpellier Métropole - Coups de cœur à hauteur d'enfants, octobre 2026
    url: https://encommun.montpellier.fr/articles/2026-09-27-coups-de-coeur-hauteur-denfants-octobre-2026
  - title: Château de Flaugergues - Site officiel
    url: https://www.flaugergues.com/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille
  decision: Savoir si la fête correspond à l'âge des enfants, combien coûtent les billets pour toute la famille et comment réserver sans se tromper de jour ou d'horaire.
  affiliationPotential: Entrée via billetterie officielle Weezevent, sans partenaire pertinent confirmé pour ce festival. Hébergements familiaux à Montpellier sur Booking.com (https://www.booking.com/family/city/fr/montpellier.fr.html) pour les visiteurs qui prolongent la sortie en week-end.
  gsc:
    retrievedAt: 2026-10-13T05:39:08.168Z
    dataThrough: 2026-10-10
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Festival Abracada BOUH - Site officiel »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-10-25T23:59:00+01:00
---

Les **samedi 24 et dimanche 25 octobre 2026**, Abracada BOUH investit le **château de Flaugergues à Montpellier**. Pour cette édition automnale, le festival Abracadabra propose un Halloween familial inspiré du *Día de los Muertos* mexicain: des couleurs, des maquillages, des jeux et une fête à partager, plutôt qu'un parcours destiné à effrayer les enfants. Le billet inclut les animations annoncées, mais **deux pages de l'organisateur ne donnent pas les mêmes horaires ni les mêmes tranches d'âge**. Voici les repères à vérifier avant d'acheter.

## Des ateliers et des jeux, sans Halloween effrayant

Selon la [présentation officielle du festival](https://festivalabracadabra.com/) et la [billetterie Abracada BOUH](https://my.weezevent.com/abracada-bouh), le château et son parc accueillent un programme pensé pour faire participer les enfants: ateliers créatifs, maquillage artistique, chasse aux bonbons, jeux et défis, escalade, lectures, activités gourmandes et rencontres avec des créatures fantastiques.

L'inspiration vient du *Día de los Muertos*, une fête mexicaine où fleurs, couleurs et souvenirs occupent une grande place. Le festival en reprend l'ambiance joyeuse, avec des décors de squelettes fleuris et de personnages costumés. La journée se termine par une **grande boum familiale**. L'organisateur annonce que les activités sont **comprises dans le prix d'entrée**: il n'est donc pas nécessaire de chiffrer séparément chaque atelier présenté dans la billetterie.

Le programme détaillé n'est toutefois pas entièrement arrêté sur la [page d'informations de l'organisateur](https://festivalabracadabra.com/informations-2/). Il vaut mieux choisir cette sortie pour son ensemble d'animations que promettre aux enfants un atelier précis à une heure non publiée.

## Horaires et âges: une contradiction à connaître

Les deux journées sont annoncées les **24 et 25 octobre**, à la même adresse: **château de Flaugergues, 1744 avenue Albert-Einstein, 34000 Montpellier**.

La [billetterie Weezevent](https://my.weezevent.com/abracada-bouh) et l'[agenda de Montpellier](https://agenda.montpellier.fr/event/98537/abracada-bouh-festival) indiquent une ouverture **de 11h à 19h**, avec des activités conçues pour les **4-13 ans**. C'est également le public annoncé sur la page d'accueil du festival.

En revanche, la [page « Informations » du même organisateur](https://festivalabracadabra.com/informations-2/) affiche toujours **12h à 20h** et un public de **5-12 ans**. Elle situe même la boum entre 18h et 20h, alors que la communication municipale indique une fin de journée à 19h.

**Pour organiser la sortie, privilégiez les heures affichées au moment de réserver**, tout en demandant confirmation directement à l'organisateur si vous comptez venir dès l'ouverture, rester pour la boum ou accompagner un enfant de 4 ou de 13 ans. Ne prévoyez pas un retour à 20h en supposant que la fête se prolonge jusque-là.

## Quel budget prévoir pour toute la famille?

Le [tarif affiché sur Weezevent](https://my.weezevent.com/abracada-bouh) est de **20 € par enfant** et de **5 € par adulte accompagnant**, avec les animations incluses.

Pour une famille avec **deux enfants payants et deux adultes**, le total atteint donc **50 €** pour l'entrée. Avec un adulte et deux enfants, il est de **45 €**. À ce budget s'ajoutent éventuellement les achats auprès des points de restauration.

Le festival présente ses activités pour les 4-13 ans, mais les sources officielles consultées ne précisent pas clairement toutes les conditions tarifaires des enfants plus jeunes. **Ne présumez pas qu'un enfant de moins de 4 ans entre gratuitement**: vérifiez directement les conditions disponibles au moment de la réservation.

Les places étant limitées, la [réservation sur la billetterie officielle Abracada BOUH](https://my.weezevent.com/abracada-bouh) est préférable à une arrivée sans billet. Elle permet également de vérifier le tarif et la date retenus avant de payer.

## Accès, repas et séjour à Montpellier

Le [site de l'organisateur](https://festivalabracadabra.com/informations-2/) indique un accès en voiture et un **parking à proximité** du château, sans garantie de disponibilité d'une place. Il annonce aussi des food trucks pour se restaurer pendant la journée. Si vous venez avec une poussette ou avez besoin d'un accès adapté, vérifiez les conditions des zones occupées par le festival: l'accessibilité habituelle d'une partie du domaine ne garantit pas à elle seule celle de toutes les animations.

Les **billets Abracada BOUH sont distincts des visites et des autres activités du château de Flaugergues**. La [billetterie du château](https://www.flaugergues.com/) présente ses propres visites et jeux: une réservation pour une activité habituelle du domaine ne remplace pas l'entrée au festival.

Pour les familles venues d'une autre région qui souhaitent transformer la sortie en week-end, il est possible de [comparer les hébergements familiaux à Montpellier](https://www.booking.com/family/city/fr/montpellier.fr.html). Vérifiez surtout la distance réelle jusqu'au château et le trajet de retour avec les enfants plutôt que de choisir uniquement un logement dans le centre-ville.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/voyages/montpellier-ou-sete-sans-voiture-avec-des-enfants-ou-poser-ses-valises/ | Montpellier ou Sète sans voiture avec des enfants: où poser ses valises ? | voyages | Montpellier, Hérault, Occitanie
- /articles/bons-plans/city-card-montpellier-en-famille-quand-est-elle-vraiment-rentable/ | City Card Montpellier en famille: quand est-elle vraiment rentable? | bons-plans | Montpellier, Hérault, Occitanie
- /articles/evenements/coeur-de-ville-en-lumieres-2026-avec-des-enfants-comment-preparer-la-soiree-sans-voiture/ | Cœur de Ville en Lumières 2026 avec des enfants: comment préparer la soirée sans voiture? | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir/ | Halloween au Château de Villersexel 2026 en famille: quelle expérience choisir? | evenements | Villersexel, Haute-Saône, Bourgogne-Franche-Comté
- /articles/voyages/futuroween-2026-futuroscope-billet-programme-enfants/ | Futuroween 2026 au Futuroscope: billet, programme et conseils avec des enfants | voyages | Chasseneuil-du-Poitou, Vienne, Nouvelle-Aquitaine
- /articles/evenements/festival-du-cirque-du-val-d-oise-2026-en-famille-tarifs-horaires-et-conseils/ | Festival du Cirque du Val d'Oise 2026 en famille: tarifs, horaires et conseils | evenements | Domont, Val-d'Oise, Île-de-France
- /articles/evenements/quai-des-bulles-2026-a-saint-malo-en-famille-tarifs-programme-et-conseils/ | Quai des Bulles 2026 à Saint-Malo en famille: tarifs, programme et conseils | evenements | Saint-Malo, Ille-et-Vilaine, Bretagne
- /articles/parentalite/maisons-des-1000-jours-dans-l-herault-ou-trouver-un-accompagnement-gratuit/ | Maisons des 1000 jours dans l'Hérault: où trouver un accompagnement gratuit | parentalite | Montpellier, Hérault, Occitanie
- /articles/bons-plans/cantine-au-college-dans-l-herault-jusqu-a-3-60-d-aide-par-repas/ | Cantine au collège dans l'Hérault: jusqu'à 3,60 € d'aide par repas | bons-plans | Montpellier, Hérault, Occitanie
- /articles/activites/musee-parc-des-dinosaures-de-meze-en-famille-fossiles-visite-et-conseils/ | Musée-Parc des Dinosaures de Mèze en famille: fossiles, visite et conseils | activites | Mèze, Hérault, Occitanie
- /articles/sorties/grotte-des-demoiselles-avec-des-enfants-visite-guidee-contee-ou-lanterne/ | Grotte des Demoiselles avec des enfants: visite guidée, contée ou lanterne? | sorties | Saint-Bauzille-de-Putois, Hérault, Occitanie
- /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | Monument jeu d'enfant 2026 à Saint-Denis: atelier Dagobert le 17 octobre | evenements | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | Halloween 2026 au Safari de Peaugres: animations, tarifs et Festival Lumières Sauvages | evenements | Peaugres, Ardèche, Auvergne-Rhône-Alpes
- /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | Halloween 2026 au Parc Spirou: billets, nocturnes Naruto et maison hantée | evenements | Monteux, Vaucluse, Provence-Alpes-Côte d'Azur
- /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | Halloween 2026 au château de Couches: atelier citrouille et jeu Mystères & Sortilèges | evenements | Couches, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | Halloween 2026 à la Tour de l'Horloge de Guînes: visites, contes et nocturne | evenements | Guînes, Pas-de-Calais, Hauts-de-France
- /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | Famille en fête 2026 en Gironde: ateliers gratuits pour les 0-6 ans | evenements | Saint-Loubès, Gironde, Nouvelle-Aquitaine
- /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | Monument Jeu d'enfant 2026 à Azay-le-Rideau: animaux cachés et contes en famille | evenements | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | Nuit des Châteaux 2026 à Tanlay: visites aux bougies les 16 et 17 octobre | evenements | Tanlay, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | Monument jeu d’enfant à Aigues-Mortes: mini-sacre et escape game les 17 et 18 octobre 2026 | evenements | Aigues-Mortes, Gard, Occitanie

### Historique Radar lié

- opportunity | /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | 2026-10-12T08:10:30.674Z
- opportunity | /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | 2026-10-12T10:40:26.563Z
- opportunity | /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | 2026-10-12T14:00:32.202Z
- opportunity | /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | 2026-10-12T17:34:53.933Z
- opportunity | /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | 2026-10-13T05:01:12.150Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | 2026-10-10T17:38:43.806Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | 2026-10-11T16:33:21.125Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | 2026-10-13T09:50:29.435Z
- opportunity | /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | 2026-10-11T09:17:01.561Z
- opportunity | /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | 2026-10-11T11:27:54.175Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
