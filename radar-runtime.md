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
title: "Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween"
subtitle: Cinq après-midi dès 4 ans et une enquête nocturne dès 10 ans le 31 octobre
summary: Au château de Pierrefonds, la Toussaint 2026 propose un atelier-visite à la lanterne les 20, 21, 24, 27 et 28 octobre, puis une enquête spirite le 31 octobre. Âges, horaires, billets et accès pour les familles.
category: evenements
location:
  city: Pierrefonds
  department: Oise
  region: Hauts-de-France
keywords:
  - Toussaint 2026 château de Pierrefonds famille
  - Raconte-moi le château à la lanterne Pierrefonds octobre 2026
  - Halloween Eugénie es-tu là Pierrefonds 31 octobre
  - atelier Pierrefonds enfants 4 ans 10 ans
sources:
  - title: Château de Pierrefonds — Raconte-moi le château à la lanterne
    url: https://www.chateau-pierrefonds.fr/agenda/raconte-moi-le-chateau-a-la-lanterne
    accessedAt: 2026-10-11
  - title: "Château de Pierrefonds — Halloween: Eugénie es-tu là?"
    url: https://www.chateau-pierrefonds.fr/agenda/halloween-eugenie-es-tu-la
    accessedAt: 2026-10-11
  - title: Château de Pierrefonds — Agenda des événements
    url: https://www.chateau-pierrefonds.fr/agenda
    accessedAt: 2026-10-11
  - title: Château de Pierrefonds — Informations pratiques
    url: https://www.chateau-pierrefonds.fr/visiter/informations-pratiques
    accessedAt: 2026-10-11
  - title: Château de Pierrefonds — Visiteurs en situation de handicap
    url: https://www.chateau-pierrefonds.fr/visiter/visiteurs-en-situation-de-handicap
    accessedAt: 2026-10-11
  - title: Commune de Pierrefonds — Transports
    url: https://www.mairie-pierrefonds.fr/vie-quotidienne/transports/
    accessedAt: 2026-10-11
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite
  decision: Choisir et réserver l'animation réellement adaptée à l'âge des enfants et au jour de visite, sans confondre billet d'atelier, billet de la soirée d'Halloween et entrée ordinaire au château.
  affiliationPotential: "Action principale: billetteries officielles des deux événements, accessibles depuis chacune des pages agenda du château; aucun billet partenaire spécifique équivalent vérifié, ne pas présenter un billet de visite ordinaire comme donnant accès aux animations. Séjour facultatif: Maison de charme avec vue sur château, 7 rue du Beaudon à Pierrefonds, maison entière de trois chambres avec cuisine à environ 500 m du château, vérifiée sur Booking.com (https://www.booking.com/hotel/fr/maison-de-charme-avec-vue-sur-chateau.fr.html); disponibilité et prix à vérifier pour les dates choisies."
  gsc:
    retrievedAt: 2026-10-11T05:37:00.000Z
    dataThrough: 2026-10-08
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Château de Pierrefonds — Raconte-moi le château à la lanterne »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-10-31
---

Pendant les vacances de la Toussaint 2026, le **château de Pierrefonds**, dans l'Oise, organise deux rendez-vous qui ne s'adressent pas aux mêmes enfants. Les **20, 21, 24, 27 et 28 octobre**, les familles fabriquent une lanterne avant de découvrir des salles habituellement fermées, **dès 4 ans**. Le **31 octobre**, l'enquête d'Halloween « Eugénie es-tu là? » propose une soirée spirite **dès 10 ans**. Chaque animation dispose de sa propre billetterie: ne réservez pas une simple entrée au château en pensant qu'elle donne accès à l'atelier ou à la soirée.

## À partir de 4 ans: fabriquer une lanterne et explorer le château

L'animation [« Raconte-moi le château à la lanterne »](https://www.chateau-pierrefonds.fr/agenda/raconte-moi-le-chateau-a-la-lanterne) commence par la fabrication d'une lanterne. La famille part ensuite, accompagnée, à la découverte de salles normalement fermées au public, d'escaliers cachés et de leurs histoires, à la lueur des lanternes.

Cinq séances sont annoncées, toutes à **14 h 30**: **mardi 20, mercredi 21, samedi 24, mardi 27 et mercredi 28 octobre 2026**. L'[agenda officiel](https://www.chateau-pierrefonds.fr/agenda) présente l'animation de **14 h 30 à 16 h 30**, soit un créneau de deux heures.

Le prix est de **9 € par adulte** et **6 € par enfant de moins de 18 ans**. Une famille de deux adultes et deux enfants paie donc **30 €** pour cette activité. Attention: les enfants ne bénéficient pas ici de la gratuité ordinaire de la visite libre. La [page de l'atelier](https://www.chateau-pierrefonds.fr/agenda/raconte-moi-le-chateau-a-la-lanterne) mène directement à sa billetterie; vérifiez-y les places disponibles pour la date souhaitée.

C'est le choix le plus accessible aux jeunes enfants parmi ces deux rendez-vous. Il comporte toutefois une exploration du château à éclairage réduit, à prendre en compte pour un enfant peu à l'aise dans l'obscurité.

## Le 31 octobre: une enquête spirite pour les 10 ans et plus

Pour Halloween, [« Eugénie es-tu là? »](https://www.chateau-pierrefonds.fr/agenda/halloween-eugenie-es-tu-la) entraîne les participants dans une **enquête immersive autour du spiritisme au XIXe siècle**, inspirée notamment de l'intérêt de l'impératrice Eugénie pour ces pratiques. Les visiteurs suivent des indices dans une atmosphère de mystère et de tension.

Le spectacle a lieu **samedi 31 octobre 2026**, avec trois départs à **18 h 30, 20 h 30 et 22 h 30**. Le château l'annonce **à partir de 10 ans**, au **tarif unique de 13 € par participant**: pour quatre personnes remplissant la condition d'âge, comptez **52 €**. Aucune réduction enfant n'est indiquée pour cet événement.

La mise en scène et les horaires tardifs peuvent être difficiles pour un enfant sensible aux ambiances inquiétantes, même âgé de 10 ans. À l'inverse, cette enquête convient davantage à une famille recherchant une véritable soirée d'Halloween qu'un atelier manuel. La [fiche officielle de la soirée](https://www.chateau-pierrefonds.fr/agenda/halloween-eugenie-es-tu-la) renvoie à une billetterie propre à l'événement: choisissez soigneusement l'horaire au moment de l'achat. La durée exacte de la soirée n'y est pas indiquée; prévoyez le retour sans supposer une heure de fin.

## Billet d'animation ou visite libre: quelle différence?

Le [billet ordinaire du château](https://www.chateau-pierrefonds.fr/visiter/informations-pratiques) coûte **9 €**; les moins de 18 ans bénéficient normalement de la gratuité pour cette visite. Ces conditions **ne remplacent pas les tarifs propres aux animations**: 6 € pour un mineur inscrit à l'atelier lanterne, ou 13 € par personne pour l'enquête du 31 octobre. Aucune des fiches d'événement ne précise que l'entrée classique donne accès à sa séance.

En octobre, la visite ordinaire ouvre de **10 h à 17 h 30**, avec un dernier accès **une heure avant la fermeture**. Les séances d'Halloween commencent après cet horaire: elles relèvent donc bien d'un rendez-vous séparé. Pour éviter d'acheter le mauvais billet, partez de la fiche de l'animation qui vous intéresse, et vérifiez les disponibilités ainsi que les conditions affichées dans sa billetterie.

## Accès, poussettes et mobilité: préparer la sortie

Le château se trouve **rue Viollet-le-Duc, 60350 Pierrefonds**. Le [site officiel](https://www.chateau-pierrefonds.fr/visiter/informations-pratiques) indique un stationnement gratuit **rue Sabatier**, à environ **10 minutes du château**. L'accès depuis le village monte vers une esplanade: le château conseille de prévoir **environ 20 minutes à pied** pour la sente en pente douce depuis le village, selon votre point de départ.

Les **poussettes sont autorisées dans le parc mais interdites à l'intérieur du château**; un espace de stationnement se trouve dans la cour d'honneur. Avec un jeune enfant, un porte-bébé peut faciliter la visite des salles, notamment durant le parcours à la lanterne.

L'accessibilité est **partielle**: la [page dédiée du château](https://www.chateau-pierrefonds.fr/visiter/visiteurs-en-situation-de-handicap) précise que le premier étage n'est pas accessible aux personnes en fauteuil roulant. Deux places PMR et un dépose-minute sont proposés sur l'esplanade. Les parcours spéciaux des deux animations n'étant pas détaillés en matière d'accessibilité, contactez le monument au **03 44 42 72 72** avant de réserver si un membre de la famille a des difficultés de mobilité.

Sans voiture, Pierrefonds est desservie depuis le secteur de Compiègne. La [mairie renvoie au réseau Oise Mobilité](https://www.mairie-pierrefonds.fr/vie-quotidienne/transports/) pour les lignes et horaires: vérifiez impérativement les correspondances aux dates choisies, **surtout pour le retour après l'enquête nocturne**.

## Rester sur place pour Halloween

Pour éviter un trajet tardif après la soirée, [Maison de charme avec vue sur château à Pierrefonds](https://www.booking.com/hotel/fr/maison-de-charme-avec-vue-sur-chateau.fr.html), au **7 rue du Beaudon**, propose une **maison entière de trois chambres avec cuisine**, près du château. C'est une possibilité pour les familles qui prolongent la sortie en séjour; les tarifs et disponibilités pour le **31 octobre** sont à vérifier avant de réserver.

Si les enfants préfèrent une autre ambiance d'Halloween dans l'Oise, notre guide [Halloween 2026 au château de Chantilly](https://www.fam-space.fr/articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/) présente d'autres ateliers, spectacles et nocturnes, avec leurs propres conditions d'accès.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-au-musee-carnavalet-quelle-activite-choisir-selon-l-age/ | Vacances de la Toussaint 2026 au musée Carnavalet: activités en famille dès 4 ans | sorties | Paris, Paris, Île-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | Monument jeu d'enfant 2026 au château de Vincennes: quel atelier choisir ? | evenements | Vincennes, Val-de-Marne, Île-de-France
- /articles/sorties/toussaint-2026-au-louvre-lens-quelle-activite-choisir-selon-l-age/ | Toussaint 2026 au Louvre-Lens: quelle activité choisir selon l'âge? | sorties | Lens, Pas-de-Calais, Hauts-de-France
- /articles/cuisine/atelier-de-creme-chantilly-avec-des-enfants-a-partir-de-quel-age-et-comment-reserver/ | Atelier de crème Chantilly avec des enfants: à partir de quel âge et comment réserver | cuisine | Chantilly, Oise, Hauts-de-France
- /articles/activites/cite-du-chocolat-valrhona-a-la-toussaint-2026-quel-atelier-choisir-selon-l-age/ | Cité du Chocolat Valrhona à la Toussaint 2026: animations et ateliers avec des enfants | activites | Tain-l'Hermitage, Drôme, Auvergne-Rhône-Alpes
- /articles/voyages/peur-sur-le-parc-2026-en-famille-journee-nocturne-billets-et-hebergement/ | Peur sur le Parc 2026 en famille: journée, nocturne, billets et hébergement | voyages | Plailly, Oise, Hauts-de-France
- /articles/parentalite/ateliers-parents-malins-dans-l-oise-quels-rendez-vous-gratuits-choisir-avant-fin-2026/ | Ateliers Parents Malins dans l'Oise: quels rendez-vous gratuits choisir avant fin 2026 ? | parentalite | Plusieurs communes, Oise, Hauts-de-France
- /articles/bons-plans/pass-sports-citoyen-dans-l-oise-15-a-cumuler-avec-le-pass-sport-en-2026/ | Pass Sports Citoyen dans l'Oise: 15 € à cumuler avec le pass Sport en 2026 | bons-plans | Beauvais, Oise, Hauts-de-France
- /articles/maison/meubles-et-encombrants-a-compiegne-recyclerie-dechetterie-ou-collecte-a-domicile/ | Meubles et encombrants à Compiègne: recyclerie, déchetterie ou collecte à domicile? | maison | Compiègne, Oise, Hauts-de-France
- /articles/vie-pratique/location-de-voiture-a-beauvais-avec-des-enfants-les-verifications-utiles-avant-de-reserver/ | Location de voiture à Beauvais avec des enfants: les vérifications utiles avant de réserver | vie-pratique | Beauvais, Oise, Hauts-de-France
- /articles/voyages/parc-asterix-en-famille-en-2026-une-ou-deux-journees-quel-hotel-et-quel-budget-prevoir/ | Parc Astérix en famille en 2026: une ou deux journées, quel hôtel et quel budget prévoir | voyages | Plailly, Oise, Hauts-de-France
- /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | Nuit des Châteaux 2026 à Tanlay: visites aux bougies les 16 et 17 octobre | evenements | Tanlay, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | Monument jeu d’enfant à Aigues-Mortes: mini-sacre et escape game les 17 et 18 octobre 2026 | evenements | Aigues-Mortes, Gard, Occitanie
- /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | Festival Lumière 2026 avec des enfants: Chaplin, Laurel & Hardy et les bons billets | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | Monument Jeu d’Enfant au château d’Angers: dragons et ateliers le 17 octobre 2026 | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-au-chateau-de-grignan-dates-tarifs-et-visite-en-famille/ | Noël 2026 au château de Grignan: dates, tarifs et visite en famille | evenements | Grignan, Drôme, Auvergne-Rhône-Alpes
- /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | Día de los Muertos 2026 au Jardin d’Acclimatation: programme, billets et tailles | evenements | Paris, Paris, Île-de-France
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | Fête de la mer 2026 à Marseille avec des enfants: quelle escale choisir? | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/ | Marché de Noël de Lille 2026 en famille: village, Grande Roue et infos pratiques | evenements | Lille, Nord, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/activites/cite-du-chocolat-valrhona-a-la-toussaint-2026-quel-atelier-choisir-selon-l-age/ | 2026-10-05T14:27:51.219Z
- opportunity | /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | 2026-10-08T14:56:52.034Z
- opportunity | /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | 2026-10-10T15:40:28.185Z
- opportunity | /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | 2026-10-06T16:58:51.946Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- opportunity | /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | 2026-10-06T19:20:39.093Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | 2026-10-10T17:38:43.806Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | 2026-10-10T08:38:56.921Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | 2026-10-09T18:35:04.031Z
- opportunity | /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | 2026-10-11T09:17:01.561Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
