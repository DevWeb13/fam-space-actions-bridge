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
title: "Famille en fête 2026 en Gironde: ateliers gratuits pour les 0-6 ans"
subtitle: Du 19 au 24 octobre, les séances à choisir et les lieux à vérifier dans les Rives de la Laurence
summary: Famille en fête revient du 19 au 24 octobre 2026 dans les Rives de la Laurence, en Gironde. Découvrez les animations pour les 0-6 ans, les inscriptions, les listes d'attente et les changements d'adresse.
category: evenements
location:
  city: Saint-Loubès
  department: Gironde
  region: Nouvelle-Aquitaine
keywords:
  - Famille en fête 2026 Rives de la Laurence
  - ateliers gratuits 0-6 ans Gironde Toussaint
  - Famille en fête Saint-Loubès Sainte-Eulalie Yvrac
  - spectacles jeune enfant octobre 2026 Gironde
sources:
  - title: Rives de la Laurence — Famille en fête 2026, programme et inscriptions
    url: https://www.rivesdelalaurence.fr/retour-de-famille-en-fete-inscriptions-aux-ateliers-et-spectacles/
    accessedAt: 2026-10-12
  - title: Rives de la Laurence — Formulaire officiel d'inscription Famille en fête 2026
    url: https://docs.google.com/forms/d/e/1FAIpQLSelrayWhPjQ9bh9Tdn-l2Dbi3BKGZ36MbxKghZNoT0vI_evvQ/viewform?pli=1
    accessedAt: 2026-10-12
  - title: Rives de la Laurence — Conditions de réservation annoncées sur IntraMuros
    url: https://www.intramuros.org/montussan/actualites/994743
    accessedAt: 2026-10-12
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans
  decision: Trouver une animation effectivement accessible à l'âge de son enfant entre le 19 et le 24 octobre, dans la bonne commune et au bon horaire, puis savoir s'il faut réserver, rejoindre une liste d'attente ou simplement venir.
  affiliationPotential: "Toutes les animations du festival sont gratuites: inscription officielle via le formulaire de l'organisateur, sans billet partenaire. Hébergement secondaire facultatif pour des familles venues passer plusieurs jours autour de Bordeaux: Guest house arboré, logement entier avec cuisine à Saint-Loubès, annoncé pour quatre personnes et un bébé, avec lits bébé sur demande, sur Booking.com (https://www.booking.com/hotel/fr/guest-house-arbore.fr.html). Confirmer prix, configuration familiale et disponibilité aux dates choisies, sans suggérer qu'un séjour est nécessaire."
  gsc:
    retrievedAt: 2026-10-12T04:49:15.779Z
    dataThrough: 2026-10-09
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Rives de la Laurence — Famille en fête 2026, programme et inscriptions »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-10-24
---

Du **19 au 24 octobre 2026**, **Famille en fête** revient dans les six communes des **Rives de la Laurence**, en Gironde, avec des ateliers, spectacles et découvertes pour les enfants de **0 à 6 ans**. Cette 12e édition se déroule pendant les vacances de la Toussaint. Les propositions sont gratuites, mais certaines séances nécessitent une inscription et plusieurs sont déjà complètes.

Le festival est itinérant: les activités ne se déroulent pas toutes à Saint-Loubès. Le territoire comprend aussi Beychac-et-Caillau, Montussan, Sainte-Eulalie, Saint-Sulpice-et-Cameyrac et Yvrac. Voici les séances à repérer selon l'âge de l'enfant, les places annoncées et les adresses actualisées.

## Comment s'inscrire sans se tromper de séance?

La [page officielle de Famille en fête](https://www.rivesdelalaurence.fr/retour-de-famille-en-fete-inscriptions-aux-ateliers-et-spectacles/) donne accès au programme complet et au [formulaire d'inscription aux ateliers et spectacles](https://docs.google.com/forms/d/e/1FAIpQLSelrayWhPjQ9bh9Tdn-l2Dbi3BKGZ36MbxKghZNoT0vI_evvQ/viewform?pli=1).

Pour les rendez-vous qui demandent une réservation, **l'inscription préalable est obligatoire et aucune inscription sur place n'est prévue**, précise [l'organisateur](https://www.intramuros.org/montussan/actualites/994743). Dans le formulaire, indiquez le **nombre d'enfants et d'accompagnants pour chaque séance**, ainsi que des coordonnées pour recevoir une confirmation ou être informé d'un changement.

Attention à la distinction entre **liste d'attente** et inscription confirmée: si un atelier est complet, remplir la partie « liste d'attente » ne garantit pas de pouvoir y participer. Les situations ci-dessous sont celles affichées dans le formulaire consulté le **12 octobre 2026**; vérifiez-les à nouveau avant de partir.

## Mardi 20 et mercredi 21 octobre: histoires et ateliers pour les petits

Le **mardi 20 octobre**, à **Sainte-Eulalie**, deux ateliers affichent déjà complet, mais permettent de rejoindre une liste d'attente:

- **Drôle de poisson**, atelier artistique et sensoriel pour les enfants **jusqu'à 4 ans**, de **10 h à 11 h**.
- **À vos branches, prêts, modelez!**, atelier art et nature **jusqu'à 6 ans**, à **16 h**.

Une autre proposition pour les enfants **jusqu'à 4 ans**, **Raconte-moi une histoire**, est annoncée à **10 h 30** et **11 h 15**. **Le lieu a changé**: rendez-vous au **foyer François-et-Jean-Pierre-Chabry, impasse Max-Linder à Saint-Loubès**, et non à une ancienne adresse du programme.

Le **mercredi 21 octobre**, le spectacle **Gestes et comptines**, prévu à **10 h 30** à la **Maison des Arts de Sainte-Eulalie** pour les enfants **jusqu'à 3 ans**, est également **complet, avec liste d'attente possible**.

## Jeudi 22 octobre: éveil sensoriel, carton et magie

Plusieurs activités s'adressent aux moins de 3 ans, mais les modalités et lieux diffèrent:

- **Explore en fluo**, découverte sensorielle dans la pénombre, pour les **15 mois à 3 ans**, à **9 h**. **Nouvelle adresse: petit dojo, 1 chemin de Nice à Saint-Loubès**.
- **Médiation animale**, avec Amandine Roulin, jusqu'à **3 ans**, à **10 h 30**. **Nouvelle adresse: annexe du pôle mobilité, 1 chemin de Nice à Saint-Loubès**. Cette séance est **complète et le formulaire indique qu'aucune nouvelle inscription n'est possible**.
- **Tous en carton**, installation pédagogique pour les tout-petits jusqu'à **3 ans**, à **16 h 30** ou **17 h 30**, à Saint-Loubès.

Pour les enfants un peu plus grands ou une fratrie d'âges différents, **La cuisine en folie**, spectacle de magie à **Yvrac**, propose deux horaires, **17 h** et **18 h**, et accueille les enfants **de 6 mois à 6 ans**. Contrôlez les places et l'adresse exacte dans le programme avant le déplacement.

## Vendredi 23 et samedi 24 octobre: danse, lecture et spectacle de clôture

Le **vendredi 23 octobre**, la **séance de lecture à la médiathèque de Montussan**, à **10 h**, pour les enfants **jusqu'à 3 ans**, est annoncée **complète, avec liste d'attente**.

Deux autres rendez-vous figurent dans le formulaire:

- **Danse parent/enfant**, à **10 h 30** à **Saint-Loubès**, **à partir de 4 ans**.
- **Goûter santé**, animé par une diététicienne, à **16 h** à **Yvrac**, pour les **15 mois à 4 ans**.

Le **samedi 24 octobre**, la journée de clôture propose notamment **Raconte-moi une histoire** à **Beychac-et-Caillau**, à **10 h** et **15 h**, pour les enfants **jusqu'à 4 ans**. Le spectacle **Premier envol**, par la compagnie Naine Rouge, est annoncé **dès 9 mois**, avec des séances à **16 h** et **17 h**. Pour chacune, l'organisateur demande d'**arriver 15 minutes à l'avance**. Retrouvez le lieu précis dans le programme avant de vous déplacer.

## Préparer sa venue dans les bonnes communes

Ne vous fiez pas seulement au titre d'une activité: certaines se tiennent à **Saint-Loubès**, d'autres à **Sainte-Eulalie, Montussan, Yvrac ou Beychac-et-Caillau**. Le programme général couvre les six communes et comprend aussi des propositions avec ou sans inscription. Pour chaque sortie envisagée, croisez donc **l'âge autorisé, l'horaire, la commune et l'état de la réservation**.

En cas d'incertitude sur une séance complète, une adresse corrigée ou une confirmation, contactez directement les **Rives de la Laurence au 05 56 78 91 11**. L'organisateur communique aussi via l'adresse **accueil@rivesdelalaurence.fr**.

## Et si vous restez quelques jours près de Bordeaux?

Les activités étant réparties sur plusieurs communes, une famille venue de plus loin peut choisir de loger dans le secteur. À **Saint-Loubès**, [Guest house arboré](https://www.booking.com/hotel/fr/guest-house-arbore.fr.html) est une petite maison indépendante avec **une chambre, un canapé-lit et une cuisine**, annoncée pour **quatre personnes et un bébé**, avec **lits bébé sur demande, sous réserve de disponibilité**. Les prix et les nuits disponibles du 19 au 24 octobre sont à vérifier avant toute réservation.

Si vous recherchez plutôt un lieu régulier où jouer avec un jeune enfant en compagnie d'autres familles, notre guide des [lieux d'accueil enfants-parents (LAEP)](https://www.fam-space.fr/articles/parentalite/laep-enfants-parents-gratuit-sans-inscription/) explique leur fonctionnement et comment en trouver un près de chez vous.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | Vacances de la Toussaint 2026 à la Cité des sciences: les ateliers numériques gratuits avec des enfants | sorties | Paris, Paris, Île-de-France
- /articles/parentalite/bulles-girondines-a-villenave-d-ornon-un-espace-pour-les-parents-et-les-jeunes-enfants/ | Bulles Girondines à Villenave-d'Ornon: un espace pour les parents et les jeunes enfants | parentalite | Villenave-d'Ornon, Gironde, Nouvelle-Aquitaine
- /articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/ | Lire en Poche 2026 à Gradignan avec des enfants: organiser une journée sans perdre les ateliers | evenements | Gradignan, Gironde, Nouvelle-Aquitaine
- /articles/evenements/les-expressifs-2026-a-poitiers-trois-jours-de-spectacles-gratuits/ | Les Expressifs 2026 à Poitiers: trois jours de spectacles gratuits | evenements | Poitiers, Vienne, Nouvelle-Aquitaine
- /articles/sorties/vacances-de-la-toussaint-2026-au-musee-carnavalet-quelle-activite-choisir-selon-l-age/ | Vacances de la Toussaint 2026 au musée Carnavalet: activités en famille dès 4 ans | sorties | Paris, Paris, Île-de-France
- /articles/sorties/visites-famille-art-deco-bordeaux-2026/ | Art déco à Bordeaux: deux visites en famille au MusBA en 2026 | sorties | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/activites/ateliers-manga-saint-esprit-2026/ | Ateliers manga au Saint-Esprit en Martinique: trois mercredis pour les jeunes fans | activites | Le Saint-Esprit, Martinique, Martinique
- /articles/parentalite/l-ilot-des-familles-a-tarbes-quels-ateliers-pour-les-parents-d-enfants-de-0-a-6-ans/ | L'îlot des Familles à Tarbes: quels ateliers pour les parents d'enfants de 0 à 6 ans? | parentalite | Tarbes, Hautes-Pyrénées, Occitanie
- /articles/sorties/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/ | Planète Préhistorique à Bordeaux avec des enfants: âge, durée et tarifs | sorties | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/activites/anatomik-park-a-cap-sciences-a-partir-de-quel-age-et-combien-de-temps-prevoir/ | Anatomik Park à Cap Sciences: à partir de quel âge et combien de temps prévoir? | activites | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/voyages/dune-du-pilat-avec-une-poussette-ce-qu-il-faut-prevoir-avant-la-montee/ | Dune du Pilat avec une poussette: ce qu'il faut prévoir avant la montée | voyages | La Teste-de-Buch, Gironde, Nouvelle-Aquitaine
- /articles/sorties/cite-du-vin-a-bordeaux-en-famille-tarifs-duree-et-conseils-de-visite/ | Cité du Vin à Bordeaux en famille: tarifs, durée et conseils de visite | sorties | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | Monument Jeu d'enfant 2026 à Azay-le-Rideau: animaux cachés et contes en famille | evenements | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | Nuit des Châteaux 2026 à Tanlay: visites aux bougies les 16 et 17 octobre | evenements | Tanlay, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | Monument jeu d’enfant à Aigues-Mortes: mini-sacre et escape game les 17 et 18 octobre 2026 | evenements | Aigues-Mortes, Gard, Occitanie
- /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | Festival Lumière 2026 avec des enfants: Chaplin, Laurel & Hardy et les bons billets | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | Monument Jeu d’Enfant au château d’Angers: dragons et ateliers le 17 octobre 2026 | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | Monument jeu d'enfant 2026 au château de Vincennes: quel atelier choisir ? | evenements | Vincennes, Val-de-Marne, Île-de-France
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-au-chateau-de-grignan-dates-tarifs-et-visite-en-famille/ | Noël 2026 au château de Grignan: dates, tarifs et visite en famille | evenements | Grignan, Drôme, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | 2026-10-10T15:40:28.185Z
- refresh | /articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/ | 2026-10-06T12:23:52.449Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | 2026-10-10T17:38:43.806Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | 2026-10-11T16:33:21.125Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | 2026-10-10T08:38:56.921Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | 2026-10-09T18:35:04.031Z
- opportunity | /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | 2026-10-11T09:17:01.561Z
- opportunity | /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | 2026-10-09T14:37:47.734Z
- opportunity | /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | 2026-10-11T11:27:54.175Z
- opportunity | /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | 2026-10-11T19:35:57.703Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
