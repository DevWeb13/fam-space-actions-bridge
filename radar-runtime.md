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
title: "Toussaint 2026 à Vaux-le-Vicomte: deux animations à choisir selon l'âge"
subtitle: "Exploration à la lampe torche dès 8 ans ou Carnaval des Animaux pour les 4-6 ans: dates, billets et accès"
summary: "Du 18 au 31 octobre 2026, Vaux-le-Vicomte propose deux animations selon l'âge des enfants. Attention: le billet Carnaval à 8 € s'ajoute à l'entrée du domaine, contrairement à l'exploration à 23,50 €."
category: evenements
location:
  city: Maincy
  department: Seine-et-Marne
  region: Île-de-France
keywords:
  - Toussaint 2026 Vaux-le-Vicomte
  - exploration lampe torche Vaux-le-Vicomte enfants
  - Carnaval des Animaux Vaux-le-Vicomte billets
  - vacances Toussaint château Maincy famille
sources:
  - title: Château de Vaux-le-Vicomte — Programme Toussaint 2026
    url: https://vaux-le-vicomte.com/event/vos-vacances-de-la-toussaint-a-vaux-le-vicomte/
    accessedAt: 2026-10-11
  - title: Château de Vaux-le-Vicomte — Conseils de visite pendant les vacances
    url: https://vaux-le-vicomte.com/actualites/nos-conseils-de-visite-la-toussaint-en-famille-a-vaux-le-vicomte/
    accessedAt: 2026-10-11
  - title: Billetterie officielle — Exploration nocturne à la lampe torche
    url: https://billetterie-vaux-le-vicomte.recreatex.be/Exhibitions/Register?ID=bfe92f5d-5a77-f011-959c-8aa9bba9d9b4
    accessedAt: 2026-10-11
  - title: Billetterie officielle — Le Carnaval des Animaux
    url: https://billetterie-vaux-le-vicomte.recreatex.be/Exhibitions/Register?ID=199523b2-e900-f011-959c-8aa9bba9d9b4
    accessedAt: 2026-10-11
  - title: Château de Vaux-le-Vicomte — Informations pratiques
    url: https://vaux-le-vicomte.com/preparer-sa-visite-au-chateau-de-vaux-le-vicomte/informations-pratiques/
    accessedAt: 2026-10-11
  - title: Château de Vaux-le-Vicomte — Navettes saison 2026
    url: https://vaux-le-vicomte.com/wp-content/uploads/2026/04/Navettes-VF-2026.pdf
    accessedAt: 2026-10-11
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants
  decision: Identifier l'animation réellement adaptée à l'âge des enfants et aux dates du séjour, connaître le coût et ce que couvre le billet, puis réserver le bon créneau sans confondre les deux expériences.
  affiliationPotential: "Réservation principale sur la billetterie officielle Vaux-le-Vicomte: aucune offre partenaire exacte vérifiée pour les animations spéciales Toussaint; ne pas substituer un billet de visite ordinaire à l'animation. Pour une nuit sur place, ibis Styles Melun à Rubelles (Booking.com, https://www.booking.com/hotel/fr/ibis-styles-melun.fr.html): chambres familiales et suite avec lit double et lits jumeaux, parking; disponibilité et tarifs aux dates choisies à vérifier."
  gsc:
    retrievedAt: 2026-10-11T05:37:00.000Z
    dataThrough: 2026-10-08
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Château de Vaux-le-Vicomte — Les vacances de la Toussaint 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-10-31
---

Du **18 au 31 octobre 2026**, le château de Vaux-le-Vicomte, à Maincy en Seine-et-Marne, propose deux animations différentes pour les vacances de la Toussaint. **L'Exploration à la lampe torche** s'adresse aux enfants dès 8 ans, tandis que **le Carnaval des Animaux** est conçu pour les 4-6 ans.

Au-delà de l'âge, la différence importante se trouve dans le billet: **23,50 € par personne, visite du domaine comprise** pour l'exploration, contre **8 € par enfant, en plus du billet d'entrée au domaine** pour le Carnaval. Les deux activités nécessitent une réservation en ligne.

## Exploration à la lampe torche: dès 8 ans, en fin de journée

Cape sur les épaules et lampe en main, les participants suivent un médiateur dans les salons du château plongés dans la pénombre. Le parcours mêle observation, anecdotes et énigmes autour de l'histoire de Vaux-le-Vicomte.

D'après le [programme officiel de la Toussaint](https://vaux-le-vicomte.com/event/vos-vacances-de-la-toussaint-a-vaux-le-vicomte/), les séances sont prévues les **18, 20, 21, 23, 25, 26, 27, 28 et 30 octobre**, à **17 h, 17 h 30 et 18 h 15**.

L'activité dure **1 heure**, se déroule en français et accueille au maximum **30 personnes par départ**. Elle est conseillée **à partir de 8 ans**. Il faut se présenter **15 minutes avant le créneau choisi** à l'entrée du château.

Le [billet officiel Exploration à la lampe torche](https://billetterie-vaux-le-vicomte.recreatex.be/Exhibitions/Register?ID=bfe92f5d-5a77-f011-959c-8aa9bba9d9b4) coûte **23,50 € par adulte ou enfant**. Il comprend également la visite libre du château en journée, entre 10 h et 16 h, et l'accès aux jardins. **N'achetez donc pas une deuxième entrée de jour pour ce même visiteur.** À titre d'exemple, un adulte et un enfant de 8 ans paient **47 €** pour les deux expériences incluses.

## Carnaval des Animaux: une chasse aux détails pour les 4-6 ans

Au cours du [Carnaval des Animaux](https://vaux-le-vicomte.com/actualites/nos-conseils-de-visite-la-toussaint-en-famille-a-vaux-le-vicomte/), une comédienne accompagne les enfants à travers le château. Vêtus d'une cape vénitienne, ils cherchent les animaux cachés dans les tableaux, les tapisseries et les sculptures.

Les séances ont lieu les **19, 22, 24, 29 et 31 octobre**, à **10 h 30 et 14 h 30**. La visite dure environ **1 h 15**, en français, et s'adresse aux enfants de **4 à 6 ans**. Le rendez-vous est fixé au vestibule du château, à environ **10 minutes à pied de l'entrée du domaine**.

La [billetterie officielle du Carnaval des Animaux](https://billetterie-vaux-le-vicomte.recreatex.be/Exhibitions/Register?ID=199523b2-e900-f011-959c-8aa9bba9d9b4) annonce **8 € par enfant**. Un adulte doit accompagner chaque enfant et sa participation à l'animation est gratuite, dans la limite d'un accompagnant par enfant.

**Attention au prix final:** le billet du Carnaval **ne comprend pas l'entrée au domaine**. Il faut ajouter pour chaque visiteur un billet « Château et jardin » ou « Jardin uniquement », y compris pour l'adulte accompagnateur. Aux [tarifs de visite de jour 2026](https://vaux-le-vicomte.com/preparer-sa-visite-au-chateau-de-vaux-le-vicomte/informations-pratiques/), l'entrée château et jardin coûte **18 € par adulte**, **14,50 € de 6 à 17 ans**, et est gratuite pour les **moins de 6 ans**. Vérifiez le total proposé au moment de réserver, et choisissez des créneaux distincts pour l'entrée et l'animation.

Par exemple, pour un adulte au plein tarif et un enfant de 5 ans, comptez **26 €** avec la visite château et jardin et l'animation (18 € + 8 €). Pour un enfant de 6 ans, le total passe à **40,50 €** (18 € + 14,50 € + 8 €), avant toute éventuelle option.

## Et si les enfants n'ont pas l'âge requis?

Le château propose d'autres expériences, sans les confondre avec ces deux animations à réserver. Dès **6 ans**, la **Forêt Sonore**, qui fait écouter des fables de La Fontaine parmi les arbres, et le parcours **Mystère du Masque de Fer** sont annoncés sans supplément au billet d'entrée. Le **Parcours sonore immersif** dans le château propose également une version jeunesse dès 6 ans.

La **location de costumes est offerte dès 3 ans du 17 octobre au 1er novembre**. Les **17 octobre et 1er novembre**, il n'y a pas de séance spéciale des deux animations présentées ci-dessus: le château propose ses activités permanentes.

Pour comparer avec une autre sortie de château pendant les vacances, notre article [Halloween 2026 au château de Chantilly](https://www.fam-space.fr/articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/) présente un programme différent, dans l'Oise.

## Réservation, poussette et accès: ce qui change l'organisation

Le château ouvre chaque jour à **10 h**, avec une **dernière entrée aux guichets à 17 h 30**. Les deux animations spéciales se réservent obligatoirement en ligne. La billetterie indique aussi qu'un retard sur la séance réservée peut entraîner la perte de l'animation sans remboursement.

**Les poussettes sont interdites à l'intérieur du château** sur ces visites, tout comme les parapluies. Les parcours comprennent des escaliers et des passages étroits; le château précise qu'ils **ne sont pas adaptés aux personnes en fauteuil roulant**. Le site présente plus largement les deux animations comme non accessibles aux personnes à mobilité réduite.

En voiture, Vaux-le-Vicomte dispose d'un **parking gratuit**. Sans voiture, rejoignez **Melun par la ligne R** au départ de Paris-Gare-de-Lyon, puis utilisez la navette du domaine sur réservation ou un taxi.

Point important pour la lampe torche: selon les [horaires officiels des navettes 2026](https://vaux-le-vicomte.com/wp-content/uploads/2026/04/Navettes-VF-2026.pdf), le **dernier retour vers la gare de Melun part de Vaux-le-Vicomte à 18 h 30**. La séance de 17 h 30 finit à cette heure-là et celle de 18 h 15 se termine plus tard: **ne comptez pas sur cette navette pour ces deux créneaux**. Même pour le départ de 17 h, prévoyez du temps pour rejoindre l'arrêt après la visite. Un retour en taxi ou un autre transport doit être organisé à l'avance pour les visites tardives.

## Rester dormir près de Vaux-le-Vicomte

Pour prolonger la visite sur un week-end, l'[ibis Styles Melun à Rubelles](https://www.booking.com/hotel/fr/ibis-styles-melun.fr.html) propose notamment une **suite avec un lit double et deux lits simples**, adaptée à quatre personnes, et un **parking gratuit**. Vérifiez la disponibilité, la configuration des couchages et le tarif aux dates choisies avant de réserver.

Si vous cherchez une seconde sortie en Seine-et-Marne plutôt qu'un autre programme au château, notre guide [Parrot World en famille](https://www.fam-space.fr/articles/activites/parrot-world-en-famille-tarifs-2026-duree-et-conseils-pour-la-visite/) détaille les billets et l'organisation de la visite.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/mon-premier-festival-2026-paris-film-age/ | Mon Premier Festival 2026 à Paris: quel film choisir selon l'âge? | evenements | Paris, Paris, Île-de-France
- /articles/activites/port-aux-cerises-a-draveil-quelle-activite-choisir-selon-l-age-des-enfants/ | Port aux Cerises à Draveil: quelle activité choisir selon l'âge des enfants? | activites | Draveil, Essonne, Île-de-France
- /articles/sorties/chateau-de-castelnaud-avec-des-enfants-est-ce-une-bonne-sortie-selon-leur-age/ | Château de Castelnaud avec des enfants: est-ce une bonne sortie selon leur âge? | sorties | Castelnaud-la-Chapelle, Dordogne, Nouvelle-Aquitaine
- /articles/sorties/toussaint-2026-au-louvre-lens-quelle-activite-choisir-selon-l-age/ | Toussaint 2026 au Louvre-Lens: quelle activité choisir selon l'âge? | sorties | Lens, Pas-de-Calais, Hauts-de-France
- /articles/cuisine/ferme-marine-de-cancale-avec-des-enfants-quelle-visite-choisir-a-la-toussaint-2026/ | Ferme Marine de Cancale avec des enfants: quelle visite choisir à la Toussaint 2026? | cuisine | Cancale, Ille-et-Vilaine, Bretagne
- /articles/evenements/fete-de-la-science-2026-en-famille/ | Fête de la science 2026: choisir une expérience adaptée à l’âge des enfants | evenements
- /articles/sorties/vacances-de-la-toussaint-2026-au-musee-carnavalet-quelle-activite-choisir-selon-l-age/ | Vacances de la Toussaint 2026 au musée Carnavalet: activités en famille dès 4 ans | sorties | Paris, Paris, Île-de-France
- /articles/vie-pratique/scol-r-ou-imagine-r-en-seine-et-marne-quel-titre-choisir-pour-la-rentree-2026/ | Scol'R ou imagine R en Seine-et-Marne: quel titre choisir pour la rentrée 2026? | vie-pratique | Melun, Seine-et-Marne, Île-de-France
- /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | Noël 2026 à Disneyland Paris: faut-il un billet 2 parcs pour voir Arendelle? | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/parentalite/laep-en-seine-et-marne-ou-aller-et-comment-se-passe-une-premiere-visite/ | LAEP en Seine-et-Marne: où aller et comment se passe une première visite? | parentalite | Meaux, Seine-et-Marne, Île-de-France
- /articles/cuisine/visiter-une-cave-d-affinage-de-brie-a-jouarre-ce-qu-il-faut-savoir-avec-des-enfants/ | Visiter une cave d'affinage de brie à Jouarre: ce qu'il faut savoir avec des enfants | cuisine | Jouarre, Seine-et-Marne, Île-de-France
- /articles/maison/couches-lavables-dans-le-nord-de-la-seine-et-marne-acheter-louer-ou-choisir-l-occasion/ | Couches lavables dans le nord de la Seine-et-Marne: acheter, louer ou choisir l'occasion? | maison | Monthyon, Seine-et-Marne, Île-de-France
- /articles/activites/parrot-world-en-famille-tarifs-2026-duree-et-conseils-pour-la-visite/ | Parrot World en famille: tarifs 2026, durée et conseils pour la visite | activites | Crécy-la-Chapelle, Seine-et-Marne, Île-de-France
- /articles/evenements/la-legende-des-chevaliers-a-provins-en-famille-tarifs-horaires-et-conseils-2026/ | La Légende des Chevaliers à Provins en famille: tarifs, horaires et conseils 2026 | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/voyages/halloween-2026-a-disneyland-paris-en-famille-billets-hotel-et-duree-du-sejour/ | Halloween 2026 à Disneyland Paris en famille: billets, hôtel et durée du séjour | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/voyages/disneyland-paris-en-famille-en-2026-combien-de-jours-quel-hotel-et-quel-budget-prevoir/ | Disneyland Paris en famille en 2026: combien de jours, quel hôtel et quel budget prévoir | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/evenements/fete-moisson-provins-2026-famille/ | Fête de la Moisson 2026 à Provins: chars de blé et traditions en famille | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/evenements/fete-saint-louis-fontainebleau-2026-famille/ | Fête de la Saint-Louis 2026 à Fontainebleau: une journée gratuite en famille au Grand Canal | evenements | Fontainebleau, Seine-et-Marne, Île-de-France
- /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | Nuit des Châteaux 2026 à Tanlay: visites aux bougies les 16 et 17 octobre | evenements | Tanlay, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | Monument jeu d’enfant à Aigues-Mortes: mini-sacre et escape game les 17 et 18 octobre 2026 | evenements | Aigues-Mortes, Gard, Occitanie
- /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | Festival Lumière 2026 avec des enfants: Chaplin, Laurel & Hardy et les bons billets | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | Monument Jeu d’Enfant au château d’Angers: dragons et ateliers le 17 octobre 2026 | evenements | Angers, Maine-et-Loire, Pays de la Loire

### Historique Radar lié

- opportunity | /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | 2026-10-10T15:40:28.185Z
- opportunity | /articles/evenements/mon-premier-festival-2026-paris-film-age/ | 2026-10-03T06:21:55.257Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | 2026-10-10T17:38:43.806Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | 2026-10-10T08:38:56.921Z
- opportunity | /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | 2026-10-02T21:22:46.733Z
- opportunity | /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | 2026-10-11T09:17:01.561Z
- opportunity | /articles/sorties/toussaint-2026-au-louvre-lens-quelle-activite-choisir-selon-l-age/ | 2026-10-07T19:13:00.627Z
- opportunity | /articles/sorties/vacances-de-la-toussaint-2026-au-musee-carnavalet-quelle-activite-choisir-selon-l-age/ | 2026-10-07T12:23:23.783Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
