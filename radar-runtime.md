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
title: "Saint-Nicolas 2026 à Carcassonne : campements médiévaux et marche aux flambeaux en famille"
subtitle: Les 5 et 6 décembre, choisir entre une sortie dans les lices et le cortège du samedi soir
summary: Les 5 et 6 décembre 2026, Carcassonne fête la Saint-Nicolas dans les lices de la Cité. Les familles peuvent découvrir les campements médiévaux en journée ou rejoindre, le samedi à 18 h 30, la marche aux flambeaux au profit du Téléthon. Horaires, budget, départ et précautions avec les enfants.
category: evenements
location:
  city: Carcassonne
  department: Aude
  region: Occitanie
keywords:
  - Saint-Nicolas Carcassonne 2026
  - marche aux flambeaux Carcassonne 5 décembre
  - campements médiévaux Carcassonne enfants
sources:
  - title: Office de tourisme de Carcassonne — La Magie de Noël, Saint-Nicolas et marche aux flambeaux 2026
    url: https://www.tourisme-carcassonne.fr/temps-forts/la-magie-de-noel/
  - title: Grand Carcassonne Tourisme — La Magie de Noël et la Saint-Nicolas
    url: https://www.grand-carcassonne-tourisme.fr/temps-fort/la-magie-de-noel/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants
  decision: Choisir les campements médiévaux en journée le 5 ou le 6 décembre, ou la marche nocturne du samedi 5, en comprenant le déroulement, les précautions avec enfants et le coût réel des flambeaux.
  affiliationPotential: "Aucun billet partenaire spécifique à la marche ou aux campements confirmé. Pour les familles qui dorment sur place, Hotel du Pont Vieux près de la Cité propose une chambre familiale pour quatre sur Booking.com : https://www.booking.com/hotel/fr/du-pont-vieux.fr.html ; prix et disponibilité les 5-6 décembre non vérifiés."
  gsc:
    retrievedAt: 2026-10-26T01:34:33+01:00
    dataThrough: 2026-10-23
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Office de tourisme de Carcassonne — Saint-Nicolas, marche aux flambeaux et campements 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-06
---

Les **samedi 5 et dimanche 6 décembre 2026**, la Cité médiévale de Carcassonne célèbre la Saint-Nicolas avec des campements dans les lices, des artisans et des démonstrations. Le samedi soir, une marche aux flambeaux descend vers la Bastide Saint-Louis au profit du Téléthon. Pour une famille, le choix dépend surtout de l'âge des enfants : visite à son rythme en journée, ou cortège après la tombée de la nuit.

## Les campements : le choix le plus souple avec de jeunes enfants

Pendant les deux journées, des compagnies médiévales installent leurs tentes au pied des remparts. Le programme annoncé comprend des démonstrations de tir à l'arc et de combats, des jeux en bois, la découverte du travail du cuir et la création de blasons. Un marché médiéval d'une trentaine d'artisans est prévu, ainsi qu'un marché de créateurs et producteurs au jardin du Prado. Troubadours et animations de rue complètent l'ambiance.

C'est la formule la plus facile à adapter aux petits : on peut observer une démonstration, s'arrêter devant les échoppes et repartir sans attendre un départ collectif. Le **dimanche 6 décembre** convient particulièrement aux familles qui ne souhaitent pas prolonger la sortie en soirée. Les horaires détaillés des ateliers et les éventuelles conditions de participation ne sont toutefois pas encore précisés pour 2026 : ne prévoyez pas une activité précise à heure fixe sans vérifier le programme actualisé auprès de l'[office de tourisme de Carcassonne](https://www.tourisme-carcassonne.fr/temps-forts/la-magie-de-noel/).

## Samedi 5 décembre : quand rejoindre la marche aux flambeaux ?

Le cortège médiéval, accompagné de musique, est annoncé **samedi 5 décembre à 18 h 30**, avec un rassemblement à partir de **17 h 30**. Les flambeaux sont mis en vente dès **16 h 30**, au prix annoncé de **4 € l'unité**, au bénéfice du Téléthon. L'arrivée est prévue **place Carnot, vers 19 h 30 à 20 h**. Il faut donc compter environ une heure à une heure et demie de déambulation, sans inclure l'attente avant le départ.

**Attention au lieu de rendez-vous : les deux offices de tourisme ne donnent pas exactement la même indication.** L'[office de Carcassonne](https://www.tourisme-carcassonne.fr/temps-forts/la-magie-de-noel/) mentionne la *place du Prado*, tandis que [Grand Carcassonne Tourisme](https://www.grand-carcassonne-tourisme.fr/temps-fort/la-magie-de-noel/) situe le départ au *parvis du pont-levis, devant la Porte Narbonnaise*. Ces points sont dans le secteur de la Cité, mais il vaut mieux confirmer le point de rassemblement définitif peu avant le 5 décembre plutôt que suivre un itinéraire supposé.

Grand Carcassonne évoque des **torches électriques pour les enfants** et un spectacle de feu avant le départ. En revanche, les modalités de distribution, le prix éventuel de ces torches et les consignes d'âge ou d'encadrement ne sont pas détaillés : demandez confirmation sur place. Ne confiez pas un flambeau enflammé à un enfant sur la seule foi de l'annonce générale.

## Quel budget prévoir ?

L'accès aux espaces de fête et la découverte des campements dans les lices s'inscrivent dans un événement annoncé en accès gratuit. En revanche, **gratuit ne signifie pas que tous les ateliers, achats et attractions le sont** : aucun tarif détaillé des ateliers médiévaux du week-end n'est confirmé à ce stade.

Pour la marche, deux flambeaux au tarif annoncé de 4 € représentent **8 €** ; quatre flambeaux au même tarif représenteraient **16 €**, mais ne présumez pas que les torches électriques destinées aux enfants suivent cette tarification. Ajoutez seulement ce que vous souhaitez dépenser au marché, pour un goûter ou pour d'autres activités. La marche ne doit pas être confondue avec une visite payante du château comtal.

## Froid, poussette et retour : les points à anticiper

Les lices et les abords de la Cité comportent des sols irréguliers. Une poussette peut être moins pratique dans la foule et sur les pavés ; pour un tout-petit, un porte-bébé peut faciliter les déplacements, si vous pouvez l'utiliser confortablement. Prévoyez vêtements chauds, chaussures stables et une solution pour les enfants fatigués. Le cortège rassemble de nombreux participants, et son arrivée **place Carnot se situe dans la Bastide**, non à la porte de la Cité.

Si vous avez laissé votre véhicule ou vos affaires près des remparts, anticipez donc le trajet de retour depuis la ville basse. Les organisateurs ne détaillent pas encore les modalités de retour, l'accessibilité du parcours complet ni les éventuelles adaptations pour les poussettes ou fauteuils : vérifiez ces points avant de vous engager dans la marche si votre famille en dépend.

## Prolonger la sortie jusqu'au dimanche

Pour les familles venant de loin, dormir près de la Cité permet de profiter des campements sans devoir reprendre la route après le cortège. L'[Hôtel du Pont Vieux à Carcassonne](https://www.booking.com/hotel/fr/du-pont-vieux.fr.html), rue Trivalle au pied de la Cité, propose notamment une chambre familiale pouvant accueillir quatre personnes. Vérifiez l'occupation exacte, les conditions et le prix aux **dates des 5 et 6 décembre** : aucune disponibilité n'est garantie ici.

Si vous voulez également visiter le château comtal ou organiser deux jours sur place, notre guide [Carcassonne en famille : 1 ou 2 jours, billets et budget à prévoir](/articles/voyages/carcassonne-en-famille-1-ou-2-jours-billets-et-budget-a-prevoir/) détaille les billets, le stationnement et les différentes façons de construire le séjour.

Les annonces de 2026 figurent déjà sur les pages des offices de tourisme, mais certaines rubriques générales affichent encore des informations de l'édition 2025. Pour ce week-end de Saint-Nicolas, retenez les dates et horaires explicitement annoncés pour **2026** et revérifiez les derniers détails pratiques avant le départ.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/voyages/carcassonne-en-famille-1-ou-2-jours-billets-et-budget-a-prevoir/ | Carcassonne en famille: 1 ou 2 jours, billets et budget à prévoir | voyages | Carcassonne, Aude, Occitanie
- /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | Fêtes de Saint-Nicolas 2026 à Nancy en famille: défilé, villages et animations | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/cuisine/dejeuner-aux-halles-de-troyes-avec-des-enfants-comment-ca-marche/ | Déjeuner aux Halles de Troyes avec des enfants: comment ça marche? | cuisine | Troyes, Aube, Grand Est
- /articles/cuisine/foire-aux-harengs-de-dieppe-2026-quoi-gouter-et-comment-preparer-la-journee/ | Foire aux Harengs de Dieppe 2026: quoi goûter et comment préparer la journée | cuisine | Dieppe, Seine-Maritime, Normandie
- /articles/evenements/marche-de-noel-du-mazet-saint-voy-preparer-le-week-end-des-28-et-29-novembre/ | Marché de Noël du Mazet-Saint-Voy: préparer le week-end des 28 et 29 novembre | evenements | Mazet-Saint-Voy, Haute-Loire, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges/ | Noël à Aix-en-Provence 2026 en famille: marchés, santons et manèges | evenements | Aix-en-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/festival-echo-mots-champsaur-2026/ | Festival L’Écho des mots 2026 dans le Champsaur: quatre jours de spectacles en famille | evenements | Saint-Jean-Saint-Nicolas, Hautes-Alpes, Provence-Alpes-Côte d'Azur
- /articles/evenements/marche-de-noel-de-cusset-2026-en-famille-quel-jour-choisir/ | Marché de Noël de Cusset 2026 en famille: quel jour choisir? | evenements | Cusset, Allier, Auvergne-Rhône-Alpes
- /articles/voyages/gouffre-geant-de-cabrespine-en-famille-quelle-visite-choisir-en-2026/ | Gouffre Géant de Cabrespine en famille: quelle visite choisir en 2026? | voyages | Cabrespine, Aude, Occitanie
- /articles/sorties/reserve-africaine-de-sigean-combien-de-temps-prevoir-entre-safari-et-visite-a-pied/ | Réserve Africaine de Sigean: combien de temps prévoir entre safari et visite à pied ? | sorties | Sigean, Aude, Occitanie
- /articles/sorties/petit-archeologue-puilaurens-famille-2026/ | Le petit archéologue à Puilaurens: un jeu de piste en famille | sorties | Puilaurens, Aude, Occitanie
- /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | Odyssée Lumineuse 2026-2027 à Paris: billets, dates et visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | Rétro Game Festival 2026 à Beauvais: programme, billets famille et animations enfants | evenements | Beauvais, Oise, Hauts-de-France
- /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | Festival Playground 2026: spectacles de danse en famille, dates et tarifs | evenements | Bagnolet, Seine-Saint-Denis, Île-de-France
- /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | Festival Enfantillages 2026 à Valbonne: spectacles gratuits et cinéma en famille | evenements | Valbonne, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | Festival MARMOE 2026 à Montreuil: spectacles, ateliers et tarifs en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/halloween-2026-au-zoo-de-la-fleche-entree-offerte-aux-enfants-deguises/ | Halloween 2026 au Zoo de La Flèche: tarifs, jeux et entrée offerte aux enfants déguisés | evenements | La Flèche, Sarthe, Pays de la Loire
- /articles/evenements/noel-au-pays-du-jouet-2026-a-moirans-en-montagne-preparer-sa-sortie-en-famille/ | Noël au Pays du Jouet 2026 à Moirans-en-Montagne: préparer sa sortie en famille | evenements | Moirans-en-Montagne, Jura, Bourgogne-Franche-Comté
- /articles/evenements/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/ | Fête foraine de Dijon 2026: dates, horaires et budget avec les enfants | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/village-du-pere-noel-a-montbazon-2026-dates-activites-et-budget-en-famille/ | Village du Père Noël à Montbazon 2026: dates, activités et budget en famille | evenements | Montbazon, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-a-orleans-2026-en-famille-marches-horaires-et-maneges-apres-noel/ | Marché de Noël d’Orléans 2026 en famille: horaires, lieux et manèges | evenements | Orléans, Loiret, Centre-Val de Loire
- /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | Noël à Nice 2026 en famille: village, spectacles et crèche | evenements | Nice, Alpes-Maritimes, Provence-Alpes-Côte d'Azur

### Historique Radar lié

- opportunity | /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | 2026-10-26T03:35:31.605Z
- opportunity | /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | 2026-10-25T23:35:17.860Z
- opportunity | /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | 2026-10-26T06:30:10.217Z
- opportunity | /articles/evenements/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/ | 2026-10-25T17:34:53.718Z
- opportunity | /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | 2026-10-19T16:47:56.278Z
- opportunity | /articles/evenements/halloween-2026-au-zoo-de-la-fleche-entree-offerte-aux-enfants-deguises/ | 2026-10-25T20:27:07.814Z
- opportunity | /articles/evenements/noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges/ | 2026-10-25T15:16:03.590Z
- opportunity | /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | 2026-10-25T04:31:33.540Z
- opportunity | /articles/evenements/noel-a-orleans-2026-en-famille-marches-horaires-et-maneges-apres-noel/ | 2026-10-25T07:29:47.050Z
- opportunity | /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | 2026-10-26T15:30:14.299Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
