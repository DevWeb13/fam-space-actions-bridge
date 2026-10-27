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
title: "Noël 2026 à Villandry : décors, spectacle d'ombres et ateliers en famille"
subtitle: "Du 28 novembre au 3 janvier : quelle visite choisir selon l'âge, à quel prix ?"
summary: À Villandry, les décors de Noël se découvrent dans le château, tandis que le spectacle d'ombres La Plume bleue et une visite-atelier sont annoncés pour les enfants. Dates, âges, billets et budget familial.
category: evenements
location:
  city: Villandry
  department: Indre-et-Loire
  region: Centre-Val de Loire
keywords:
  - Noël Villandry 2026
  - spectacle La Plume bleue Villandry
  - Noël au Pays des Châteaux Villandry enfants
sources:
  - title: Château de Villandry - À Noël, la nature s'invite au château (programme 2026)
    url: https://www.chateauvillandry.fr/a-noel-la-nature-s-invite-au-chateau/
  - title: Château de Villandry - tarifs, horaires et accès 2026
    url: https://www.chateauvillandry.fr/informations-pratiques/tarifs-horaires-acces-modes-de-visite/
  - title: Le Haut des Lys - chambres familiales
    url: https://www.lehautdeslys.com/les-chambres
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-2026-a-villandry-spectacles-et-ateliers-a-choisir-selon-l-age
  decision: Choisir entre la visite des décors de Noël, le spectacle d'ombres adapté à l'âge des enfants et la visite-atelier dès 8 ans, puis estimer le coût sans confondre entrée et animations à réserver.
  affiliationPotential: Billet d'entrée Villandry vérifié sur Tiqets (option château + jardins à sélectionner; dates de Noël et animations spécifiques à confirmer). Chambre familiale pour quatre au Haut des Lys à Villandry vérifiée sur Booking.com, sans prix ni disponibilité confirmés.
  gsc:
    retrievedAt: 2026-10-27T02:25:59+01:00
    dataThrough: 2026-10-24
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Château de Villandry - Noël 2026 et animations familiales »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-03
---

Du **28 novembre 2026 au 3 janvier 2027**, Villandry fête Noël dans les pièces de son château : salle à manger, salon, chambres et cuisine accueillent des décors inspirés de la nature, avec un « potager magique » imaginé par les animaux de la forêt. Pour les enfants, deux animations sont également annoncées : un spectacle d'ombres du 21 au 23 décembre et une visite suivie d'un atelier créatif.

**Ne venez pas pour des jardins illuminés :** l'organisateur précise que les jardins ne sont ni décorés ni éclairés pour Noël. Les décors se trouvent à l'intérieur du château. Celui-ci est fermé, comme les jardins, le **25 décembre 2026**.

## Décors, spectacle ou atelier : que choisir selon l'âge ?

**Pour une visite sans horaire d'animation à respecter**, choisissez le parcours ordinaire du château et ses pièces décorées. Il convient à une famille qui veut voir l'ambiance de Noël à son rythme, sans attendre la publication des créneaux des animations. Prévoyez environ une heure pour l'intérieur ; les jardins peuvent prolonger la sortie, mais ils ne constituent pas le parcours décoré.

**De 1 à 5 ans**, le spectacle d'ombres chinoises *La Plume bleue*, de la compagnie Au creux de l'Oreille, propose une version de **25 minutes**. L'histoire part d'une plume bleue trouvée en hiver et conduit les enfants à la rencontre des habitants de la forêt et des jardins.

**De 6 à 10 ans**, une autre version du même spectacle dure **35 minutes**. Elle est suivie d'une initiation aux ombres chinoises **sur inscription** : si c'est surtout l'atelier qui vous intéresse, vérifiez bien la place disponible et pas seulement l'accès au spectacle.

Les deux versions sont annoncées les **21, 22 et 23 décembre 2026**. Au 27 octobre, le château n'avait encore publié ni horaires précis, ni tarifs, ni ouverture de la billetterie. Il serait donc prématuré de promettre une séance ou un prix.

**Dès 8 ans**, une visite spéciale explore les traditions de Noël en France, en Espagne et aux États-Unis, en lien avec l'histoire familiale des propriétaires de Villandry. Elle se termine par la fabrication de décorations sur le thème de la nature. Son calendrier et les modalités de réservation restent à annoncer : cette activité n'est pas à confondre avec la simple visite des salles décorées.

## Quel budget prévoir pour la visite de Noël ?

Pour accéder aux décors intérieurs, choisissez un billet **château et jardins**, et non un billet jardins seuls. Les tarifs officiels 2026 de la visite ordinaire sont de **14 € par adulte**, **8 € de 8 à 17 ans inclus** et **gratuit avant 8 ans**. Cela représente **44 € pour deux adultes et deux enfants de 8 à 17 ans**, ou **28 € si les deux enfants ont moins de 8 ans**.

Les jardins seuls coûtent 8,50 € par adulte et 5,50 € pour les 8-17 ans, mais cette formule ne donne pas accès aux décors situés dans le château. Les prix des spectacles et de la visite-atelier ne sont pas encore publiés : **n'ajoutez aucun montant supposé au budget** et vérifiez si un billet distinct ou un supplément sera demandé.

Vous pouvez [consulter le billet d'entrée de Villandry sur Tiqets](https://www.tiqets.com/fr/activites-attractions-villandry-c176282/billets-pour-chateau-de-villandry-p1008266/). Sélectionnez impérativement l'option qui inclut **le château**, puis vérifiez la date et les conditions proposées. Cette offre de visite classique ne confirme pas l'accès à *La Plume bleue* ni à la visite-atelier de Noël.

## Quand venir et comment organiser la sortie ?

Du 28 novembre au 3 janvier, hors fermeture du 25 décembre, les horaires d'hiver publiés pour le château sont de **9 h 30 à 17 h 30**, avec un **dernier billet château à 17 h**. Les jardins ferment également à 17 h 30 en décembre. Pour profiter des décors sans vous presser, évitez une arrivée juste avant la dernière entrée.

Avec un bébé, anticipez que **les poussettes ne sont pas autorisées dans le château** ; elles peuvent être déposées à l'entrée. Le [guide de Villandry en famille](https://www.fam-space.fr/articles/sorties/villandry-en-famille-jardins-seuls-ou-chateau-et-jardins/) détaille les trajets, les parkings, les services pour bébés, le pique-nique et l'accessibilité, sans avoir à refaire toute l'organisation ici.

Si vous souhaitez prolonger la sortie par une nuit sur place, [Le Haut des Lys à Villandry sur Booking.com](https://www.booking.com/hotel/fr/le-haut-des-lys-relais-du-silence.fr.html) constitue une piste pour une famille : l'établissement présente une formule de deux chambres communicantes avec un grand lit et deux lits simples. Vérifiez la configuration, le tarif et la disponibilité pour vos dates ; aucune chambre n'est garantie pendant les vacances de Noël.

Pour un séjour autour de plusieurs châteaux décorés, vous pouvez aussi regarder [Noël au château d'Amboise](https://www.fam-space.fr/articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/) ou [Noël à Chenonceau](https://www.fam-space.fr/articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/) : leurs programmes et conditions de visite sont différents de ceux de Villandry.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/villandry-en-famille-jardins-seuls-ou-chateau-et-jardins/ | Villandry en famille: jardins seuls ou château et jardins ? | sorties | Villandry, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | Noël au château d'Amboise 2026: visite, nocturnes et tarifs en famille | evenements | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | Noël à Chenonceau 2026: décors, nocturnes et tarifs en famille | evenements | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | Noël des Siècles 2026 à Champs-sur-Marne: billets, budget et horaires en famille | evenements | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne
- /articles/evenements/noel-a-chambord-2026-avec-des-enfants-quand-venir-et-que-prevoir/ | Noël à Chambord 2026 avec des enfants: quand venir et que prévoir | evenements | Chambord, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/noel-a-metz-2026-en-famille-marches-et-sentier-des-lanternes/ | Noël à Metz 2026 en famille: marchés et Sentier des Lanternes | evenements | Metz, Moselle, Grand Est
- /articles/vie-pratique/emprunter-des-jeux-a-tours-mirabeau-ou-la-maison-des-jeux/ | Emprunter des jeux à Tours: Mirabeau ou la Maison des Jeux? | vie-pratique | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/village-du-pere-noel-a-montbazon-2026-dates-activites-et-budget-en-famille/ | Village du Père Noël à Montbazon 2026: dates, activités et budget en famille | evenements | Montbazon, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | Monument Jeu d'enfant 2026 à Azay-le-Rideau: animaux cachés et contes en famille | evenements | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/voyages/azay-le-rideau-en-famille-une-journee-entre-chateau-et-troglodytes/ | Azay-le-Rideau en famille: une journée entre château et troglodytes | voyages | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/bons-plans/amboise-city-pass-2026-quand-devient-il-vraiment-rentable/ | Amboise City Pass 2026: quand devient-il vraiment rentable? | bons-plans | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/parentalite/laep-en-indre-et-loire-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP en Indre-et-Loire: où aller avec un enfant de moins de 6 ans | parentalite | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/cuisine/marche-d-amboise-composer-un-pique-nique-tourangeau-avec-des-enfants/ | Marché d'Amboise: composer un pique-nique tourangeau avec des enfants | cuisine | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/sorties/chateau-de-chenonceau-en-famille-billets-duree-et-conseils-avec-des-enfants/ | Château de Chenonceau en famille: billets, durée et conseils avec des enfants | sorties | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/maison/maison-de-vacances-a-amboise-avec-des-enfants-7-criteres-pour-bien-choisir/ | Maison de vacances à Amboise avec des enfants: 7 critères pour bien choisir | maison | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/vie-pratique/transport-scolaire-remi-en-indre-et-loire-que-faire-apres-la-date-limite-2026/ | Transport scolaire Rémi en Indre-et-Loire: que faire après la date limite 2026 | vie-pratique | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | Saint-Nicolas 2026 à Carcassonne: campements médiévaux et marche aux flambeaux en famille | evenements | Carcassonne, Aude, Occitanie
- /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | Noël 2026 à Chantilly: Le Noël oublié, billets et séances en famille | evenements | Chantilly, Oise, Hauts-de-France
- /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | Odyssée Lumineuse 2026-2027 à Paris: billets, dates et visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | Rétro Game Festival 2026 à Beauvais: programme, billets famille et animations enfants | evenements | Beauvais, Oise, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | 2026-10-11T16:33:21.125Z
- opportunity | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-10-24T12:31:27.784Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | 2026-10-26T21:31:06.119Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | 2026-10-24T06:28:53.730Z
- opportunity | /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | 2026-10-26T18:32:56.730Z
- opportunity | /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | 2026-10-26T15:30:14.299Z
- opportunity | /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | 2026-10-26T10:34:36.317Z
- opportunity | /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | 2026-10-27T00:35:14.931Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
