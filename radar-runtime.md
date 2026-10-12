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
title: "Halloween 2026 à la Tour de l'Horloge de Guînes: visites, contes et nocturne"
subtitle: Du 18 octobre au 1er novembre, les dates, les tarifs famille et les animations à réserver
summary: "Musée hanté à Guînes du 18 octobre au 1er novembre 2026: visites libres, Soupe aux Contes, nocturne gratuite du 30 octobre et tarifs pour les familles."
category: evenements
location:
  city: Guînes
  department: Pas-de-Calais
  region: Hauts-de-France
keywords:
  - Halloween 2026 Guînes Tour de l'Horloge
  - musée hanté Guînes Toussaint 2026
  - Soupe aux Contes Guînes octobre 2026
  - nocturne gratuite Tour de l'Horloge 30 octobre
  - Tour de l'Horloge Guînes tarif famille
sources:
  - title: La Tour de l'Horloge — Le musée hanté, Halloween 2026
    url: https://www.tour-horloge-guines.com/actualites/musee-hante-halloween-2026
    accessedAt: 2026-10-12
  - title: La Tour de l'Horloge — Horaires, tarifs et accessibilité
    url: https://www.tour-horloge-guines.com/horaires-tarifs-pmr
    accessedAt: 2026-10-12
  - title: La Tour de l'Horloge — Présentation du musée
    url: https://www.tour-horloge-guines.com/
    accessedAt: 2026-10-12
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne
  decision: Choisir la formule adaptée à sa famille (visite libre, séance de contes ou nocturne gratuite), connaître le coût réel selon le nombre et l'âge des enfants et réserver uniquement lorsque c'est nécessaire, sans se déplacer un samedi où le musée est fermé.
  affiliationPotential: "Action principale: entrée au musée via l'exploitant; aucune billetterie partenaire vérifiée. Visite libre sans réservation, mais contes et nocturne sur inscription téléphonique au 03 21 19 59 00. Pour un séjour près de Calais, hébergement familial facultatif vérifié sur Booking.com: L'Échappée Verte à Guînes, maison entière avec deux chambres, cuisine et parking (https://www.booking.com/hotel/fr/petite-maison-2-chambres-a-20min-du-site-des-2-caps.fr.html); vérifier les dates et la capacité familiale avant toute proposition, sans prétendre que l'entrée au musée nécessite un séjour."
  gsc:
    retrievedAt: 2026-10-12T04:49:15.779Z
    dataThrough: 2026-10-09
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « La Tour de l'Horloge — Le musée hanté, Halloween 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-11-01
---

Du **18 octobre au 1er novembre 2026**, la **Tour de l'Horloge de Guînes**, dans le Pas-de-Calais, se transforme en **Musée Hanté** pour Halloween. Costumes, jeux anciens, drakkar et atelier de panier à bonbons attendent les familles pendant les vacances de la Toussaint.

Trois formules se distinguent: la visite du musée **sans réservation**, les séances de **Soupe aux Contes** sur inscription et une **nocturne gratuite le vendredi 30 octobre**, elle aussi sur réservation. Le bon choix dépend du jour, du budget et de l'envie des enfants.

## Visiter le Musée Hanté librement pendant les vacances

D'après le [programme officiel d'Halloween 2026](https://www.tour-horloge-guines.com/actualites/musee-hante-halloween-2026), les visites libres ont lieu **tous les jours sauf le samedi, de 14 h à 18 h**, du dimanche 18 octobre au dimanche 1er novembre. **Aucune réservation n'est demandée** pour cette formule.

Les enfants peuvent se costumer, monter dans un drakkar et découvrir les jeux anciens. Un atelier permet aussi de **fabriquer un panier à bonbons sous la surveillance des parents**. Les enfants doivent être accompagnés d'un adulte dans le musée.

La [visite habituelle de la Tour de l'Horloge](https://www.tour-horloge-guines.com/) dure environ **1 h 30**: c'est un bon repère pour organiser l'après-midi, sans promesse de durée exacte pendant les animations d'Halloween.

**Attention aux samedis 24 et 31 octobre**: le musée n'annonce pas de visites libres ces jours-là. Pour une sortie pendant le week-end, privilégiez le dimanche et vérifiez les informations de l'organisateur.

## Réserver la Soupe aux Contes: quatre dates, deux séances par jour

La **Soupe aux Contes** est annoncée les **lundis 19 et 26 octobre** et les **jeudis 22 et 29 octobre**, avec deux séances à **14 h et 16 h**.

**Réservation obligatoire par téléphone au 03 21 19 59 00.** Le programme officiel ne précise pas clairement si un supplément s'applique à cette animation ou si elle est comprise dans le billet du musée: demandez le tarif applicable et la disponibilité lors de l'appel, avant de vous déplacer.

## Vendredi 30 octobre: une nocturne gratuite, mais pas la visite entière

La **visite nocturne gratuite** du **vendredi 30 octobre** propose deux créneaux, à **18 h 30** et **19 h 30**. Au programme: lecture de conte et dégustation de soupe dans une ambiance d'Halloween.

L'offre est limitée à **la salle médiévale du rez-de-chaussée**: il ne s'agit **pas d'une visite gratuite de tout le musée**. Les places sont limitées et la réservation est obligatoire, au **03 21 19 59 00**. C'est la formule à privilégier pour profiter d'un moment gratuit en soirée, à condition d'avoir obtenu une place.

## Combien coûte la visite pour une famille?

La [grille officielle des tarifs 2026](https://www.tour-horloge-guines.com/horaires-tarifs-pmr) annonce:

- **7 € par adulte**.
- **5 € par enfant de 4 à 12 ans**.
- **Gratuit pour les moins de 4 ans**.
- **24 € le pack famille**, prévu pour **2 adultes et 2 à 4 enfants**.

Le pack mérite d'être comparé à la somme des billets individuels. Avec **2 adultes et 2 enfants payants**, les billets totalisent **24 €**: le pack coûte autant. Avec **3 enfants payants**, ils totalisent **29 €** et le pack économise **5 €**; avec **4 enfants payants**, la somme atteint **34 €**, soit **10 €** de plus que le pack.

Si votre famille comprend des enfants de moins de 4 ans, ou si vous venez surtout pour la Soupe aux Contes, vérifiez les conditions exactes par téléphone plutôt que de supposer que la formule familiale ou l'animation s'applique automatiquement.

## Adresse, stationnement et accessibilité

Le musée se situe **rue du Château, 62340 Guînes**. Les parkings signalés à proximité sont **place Foch** et **place des Tilleuls**. Deux places de stationnement réservées aux personnes en situation de handicap se trouvent **place Foch, à environ 50 m de l'entrée**.

La Tour de l'Horloge possède la marque **Tourisme & Handicap pour les handicaps moteur et mental** et présente [ses informations d'accessibilité](https://www.tour-horloge-guines.com/horaires-tarifs-pmr). Pour une poussette, un fauteuil ou un besoin d'accompagnement particulier, mieux vaut demander au musée quelles parties du parcours et quelles animations sont adaptées. Le téléphone d'accueil est le **03 21 19 59 00**.

## Profiter d'un séjour autour de Guînes

Si vous combinez Halloween avec d'autres sorties dans le Pas-de-Calais, [L'Échappée Verte à Guînes](https://www.booking.com/hotel/fr/petite-maison-2-chambres-a-20min-du-site-des-2-caps.fr.html) propose une maison entière avec **deux chambres, une cuisine et un parking**.

Un point important pour les familles: le propriétaire prévient que **les chambres sont à l'étage, accessibles par un escalier assez raide**, et l'établissement **ne fournit pas de lit bébé**. Ce logement est donc à évaluer avec prudence si vous voyagez avec de très jeunes enfants; vérifiez aussi la capacité, le prix et les disponibilités aux dates choisies.

Pour une autre journée de vacances dans le département, le [programme de la Toussaint 2026 au Louvre-Lens](/articles/sorties/toussaint-2026-au-louvre-lens-quelle-activite-choisir-selon-l-age/) aide à choisir une activité adaptée à l'âge des enfants.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/toussaint-2026-au-louvre-lens-quelle-activite-choisir-selon-l-age/ | Toussaint 2026 au Louvre-Lens: quelle activité choisir selon l'âge? | sorties | Lens, Pas-de-Calais, Hauts-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-au-musee-carnavalet-quelle-activite-choisir-selon-l-age/ | Vacances de la Toussaint 2026 au musée Carnavalet: activités en famille dès 4 ans | sorties | Paris, Paris, Île-de-France
- /articles/evenements/fete-des-rues-aux-enfants-2026-a-paris-ou-aller-selon-l-arrondissement/ | Fête des rues aux enfants 2026 à Paris: où aller selon l'arrondissement? | evenements | Paris, Paris, Île-de-France
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | Nuit des Châteaux 2026 à Tanlay: visites aux bougies les 16 et 17 octobre | evenements | Tanlay, Yonne, Bourgogne-Franche-Comté
- /articles/voyages/vulcania-a-la-toussaint-2026-1-ou-2-jours-billets-et-ou-dormir/ | Vulcania à la Toussaint 2026: 1 ou 2 jours, billets et où dormir | voyages | Saint-Ours-les-Roches, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/voyages/futuroween-2026-futuroscope-billet-programme-enfants/ | Futuroween 2026 au Futuroscope: billet, programme et conseils avec des enfants | voyages | Chasseneuil-du-Poitou, Vienne, Nouvelle-Aquitaine
- /articles/sorties/vacances-de-la-toussaint-2026-au-louvre-quelles-activites-choisir-avec-des-enfants/ | Vacances de la Toussaint 2026 au Louvre: le programme famille du 17 octobre au 1er novembre | sorties | Paris, Paris, Île-de-France
- /articles/sorties/parc-bagatelle-en-famille-quelles-attractions-selon-la-taille-des-enfants/ | Parc Bagatelle en famille: quelles attractions selon la taille des enfants? | sorties | Merlimont, Pas-de-Calais, Hauts-de-France
- /articles/bons-plans/nausicaa-a-8-pour-les-adultes-et-6-pour-les-enfants-qui-peut-profiter-des-dimanches-boulonnais/ | Nausicaá à 8 € pour les adultes et 6 € pour les enfants: qui peut profiter des Dimanches Boulonnais? | bons-plans | Boulogne-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/parentalite/creche-a-l-abordage-a-etaples-accueil-ponctuel-ou-regulier-que-choisir/ | Crèche À l'abordage à Étaples: accueil ponctuel ou régulier, que choisir ? | parentalite | Étaples-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/cuisine/ratte-du-touquet-eau-vapeur-ou-four-quelle-cuisson-choisir/ | Ratte du Touquet: eau, vapeur ou four, quelle cuisson choisir? | cuisine | Le Touquet-Paris-Plage, Pas-de-Calais, Hauts-de-France
- /articles/maison/lens-lievin-jusqu-a-240-pour-recuperer-l-eau-de-pluie/ | Lens-Liévin: jusqu'à 240 € pour récupérer l'eau de pluie | maison | Lens, Pas-de-Calais, Hauts-de-France
- /articles/vie-pratique/cantine-au-college-dans-le-pas-de-calais-les-tarifs-2026-et-les-reductions-pour-les-boursiers/ | Cantine au collège dans le Pas-de-Calais: les tarifs 2026 et les réductions pour les boursiers | vie-pratique | Hénin-Beaumont, Pas-de-Calais, Hauts-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | Monument Jeu d'enfant 2026 à Azay-le-Rideau: animaux cachés et contes en famille | evenements | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | Monument jeu d’enfant à Aigues-Mortes: mini-sacre et escape game les 17 et 18 octobre 2026 | evenements | Aigues-Mortes, Gard, Occitanie
- /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | Festival Lumière 2026 avec des enfants: Chaplin, Laurel & Hardy et les bons billets | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | Monument Jeu d’Enfant au château d’Angers: dragons et ateliers le 17 octobre 2026 | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | Monument jeu d'enfant 2026 au château de Vincennes: quel atelier choisir ? | evenements | Vincennes, Val-de-Marne, Île-de-France
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-au-chateau-de-grignan-dates-tarifs-et-visite-en-famille/ | Noël 2026 au château de Grignan: dates, tarifs et visite en famille | evenements | Grignan, Drôme, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | 2026-10-10T15:40:28.185Z
- opportunity | /articles/evenements/fete-des-rues-aux-enfants-2026-a-paris-ou-aller-selon-l-arrondissement/ | 2026-10-03T14:16:09.016Z
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
