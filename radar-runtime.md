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
title: "Saint-Nicolas 2026 à Épinal en famille : défilé, marché et horaires"
subtitle: Le 5 décembre pour les chars et le feu d'artifice, ou une visite plus tranquille du marché de Noël
summary: "À Épinal, le cortège de Saint-Nicolas est annoncé le samedi 5 décembre 2026, avec spectacle à 17 h 30, départ à 18 h et feu d'artifice vers 20 h. Le marché de Noël reste ouvert du 27 novembre au 1er janvier : comment choisir avec des enfants ?"
category: evenements
location:
  city: Épinal
  department: Vosges
  region: Grand Est
keywords:
  - Saint-Nicolas Épinal 2026
  - défilé Saint-Nicolas Épinal 5 décembre 2026
  - marché de Noël Épinal 2026
sources:
  - title: Épinal Tourisme - Cortège de Saint-Nicolas 2026
    url: https://www.tourisme-epinal.com/sejourner/agenda/cortege-de-saint-nicolas-6217331
  - title: Ville d'Épinal - Marché de Noël du 27 novembre 2026 au 1er janvier 2027
    url: https://www.epinal.fr/actualites/marche-de-noel-chalet-disponible-pour-les-commercants/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: saint-nicolas-2026-a-epinal-en-famille-defile-du-5-decembre-ou-marche-de-noel
  decision: Choisir entre la soirée du 5 décembre pour le cortège et le feu d'artifice, et une visite plus courte du marché à une autre date, en connaissant les horaires et contraintes avec des enfants.
  affiliationPotential: "Le cortège et le marché ne nécessitent pas de billet. Pour un week-end, Mercure Épinal Centre propose sur Expedia.fr une suite familiale de quatre personnes (un lit double et deux lits simples) : https://www.expedia.fr/Epinal-Hotel-Mercure-Epinal-Centre.h11641.Description-Hotel ; disponibilité et tarif à vérifier aux dates choisies."
  gsc:
    retrievedAt: 2026-11-01T04:25:25+01:00
    dataThrough: 2026-10-29
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Épinal Tourisme - Cortège de Saint-Nicolas 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-01
---

Pour les fêtes de Saint-Nicolas 2026 à Épinal, deux sorties assez différentes sont possibles. Le **samedi 5 décembre** concentre le grand défilé, les chars et le feu d'artifice : c'est la soirée à choisir pour vivre le cortège, mais elle suppose de rester dehors et de gérer la foule. Le **marché de Noël, du 27 novembre 2026 au 1er janvier 2027 inclus**, permet une promenade plus souple dans le centre historique, notamment avec de jeunes enfants.

## Samedi 5 décembre : trois rendez-vous en soirée

Selon l'[agenda d'Épinal Tourisme](https://www.tourisme-epinal.com/sejourner/agenda/cortege-de-saint-nicolas-6217331), le programme annoncé est le suivant :

- **17 h 30 :** spectacle « La légende de Saint-Nicolas », par les Compagnons d'Eleusis, devant le beffroi de la basilique Saint-Maurice.
- **18 h :** départ du cortège **place des Vieux-Moulins**, avec une soixantaine de chars et d'ensembles musicaux annoncés.
- **Vers 20 h :** disparition de Saint-Nicolas et **feu d'artifice au pont Sadi-Carnot**.

Ces horaires sont **signalés comme non garantis par l'office de tourisme**. Le parcours définitif et les mesures de circulation de l'édition 2026 doivent également être revérifiés avant de choisir un point d'observation. Les trois lieux cités correspondent à des moments différents : ne comptez pas voir le départ et le final depuis une seule place sans vous déplacer.

Avec des enfants qui souhaitent surtout voir passer les chars, mieux vaut choisir à l'avance un emplacement sur le parcours confirmé plutôt que de vouloir suivre tout le cortège. Pour un bébé ou un enfant sensible au bruit, anticipez les fanfares, la foule et les détonations du feu d'artifice. Une poussette peut devenir difficile à manœuvrer dans les zones très fréquentées ; aucun dispositif particulier pour les poussettes ou espace de change n'est confirmé dans le programme consulté.

## Le marché de Noël : une sortie plus courte, à une autre date

La [Ville d'Épinal](https://www.epinal.fr/actualites/marche-de-noel-chalet-disponible-pour-les-commercants/) confirme un marché de Noël **du vendredi 27 novembre 2026 au vendredi 1er janvier 2027 inclus**, dans le **centre historique**. Des **animations gratuites sont annoncées les week-ends**, sans programme détaillé permettant encore de promettre une activité précise à une date donnée.

C'est une option plus simple si vous voulez découvrir les chalets à votre rythme, faire une pause quand les enfants fatiguent ou éviter la longue soirée du 5 décembre. Prévoyez un budget pour les achats et les consommations éventuels, mais n'achetez pas de billet pour une animation dont la nécessité de réservation n'est pas annoncée. Les **horaires quotidiens des chalets** et les conditions particulières des 25 décembre et 1er janvier ne sont pas confirmés par la communication municipale consultée : vérifiez-les avant de partir, surtout si vous venez de loin.

## Accès et retour : ce qu'il faut vérifier

Le 5 décembre, privilégiez un trajet qui vous permette de rejoindre le centre **sans dépendre d'une rue ou d'un parking susceptible d'être fermé**. Les arrêtés de circulation, les éventuelles déviations de bus et les horaires de retour propres à **2026** ne sont pas encore établis dans les deux annonces officielles consultées. Ne reprenez pas automatiquement les restrictions ni les navettes d'une édition précédente.

Si vous venez en train, préparez le trajet entre la gare, votre lieu d'observation et le retour, surtout après le feu d'artifice. Avec un jeune enfant, prévoyez des vêtements chauds, une solution pour patienter et la possibilité de rentrer avant 20 h si la soirée devient trop longue. Pour une visite du marché à une autre date, consultez simplement les heures d'ouverture actualisées et les accès au centre.

## Dormir à Épinal pour profiter du week-end

Pour une famille qui souhaite rester la nuit après le cortège, le [Mercure Épinal Centre sur Expedia.fr](https://www.expedia.fr/Epinal-Hotel-Mercure-Epinal-Centre.h11641.Description-Hotel) propose notamment une **suite familiale pour quatre personnes**, avec **un lit double et deux lits simples**. L'établissement se trouve au **13 place Émile-Stein**, dans le centre-ville. Vérifiez les disponibilités, le tarif total et les conditions d'annulation pour les dates réellement choisies : aucune disponibilité particulière pour le 5 décembre n'est garantie ici.

Si vous hésitez entre plusieurs villes lorraines pour cette fête, notre guide des [Fêtes de Saint-Nicolas 2026 à Nancy en famille](https://www.fam-space.fr/articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/) détaille l'autre grand rendez-vous du 5 décembre, avec ses propres villages et animations.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | Noël 2026 à Brest en famille: marché, projections et horaires | evenements | Brest, Finistère, Bretagne
- /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël de Saint-Étienne 2026 en famille: dates, horaires et accès | evenements | Saint-Étienne, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | Fêtes de Saint-Nicolas 2026 à Nancy en famille: défilé, villages et animations | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | Saint-Nicolas 2026 à Carcassonne: campements médiévaux et marche aux flambeaux en famille | evenements | Carcassonne, Aude, Occitanie
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/mer-en-vue-a-epinal-en-famille-preparer-la-visite/ | Mer en vue ! à Épinal en famille: préparer la visite | evenements | Épinal, Vosges, Grand Est
- /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | Noël à Caen 2026 en famille: marché de Noël et visite illuminée | evenements | Caen, Calvados, Normandie
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/voyages/gerardmer-ou-la-bresse-ou-poser-ses-valises-avec-des-enfants-dans-les-vosges/ | Gérardmer ou La Bresse: où poser ses valises avec des enfants dans les Vosges? | voyages | Gérardmer, Vosges, Grand Est
- /articles/sorties/fraispertuis-city-en-famille-tarifs-2026-tailles-et-conseils-de-visite/ | Fraispertuis City en famille: tarifs 2026, tailles et conseils de visite | sorties | Jeanménil, Vosges, Grand Est
- /articles/evenements/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel/ | Noël 2026 à Chambéry en famille: marchés, parade et ateliers | evenements | Chambéry, Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/noel-2026-a-besancon-en-famille-contes-gratuits-marche-solidaire-ou-artisans/ | Noël 2026 à Besançon en famille: contes, marché solidaire et artisans | evenements | Besançon, Doubs, Bourgogne-Franche-Comté
- /articles/evenements/planete-ocean-a-paris-preparer-la-visite-en-famille/ | Planète Océan à Paris: préparer la visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | Noël 2026 à Paris La Défense en famille: marché, animations et patinoire | evenements | Puteaux, Hauts-de-Seine, Île-de-France
- /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | Noël 2026 à Cannes en famille: marché du centre et Palm Beach | evenements | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | Luminéales du Thabor 2026 à Rennes: tarifs, horaires et visite en famille | evenements | Rennes, Ille-et-Vilaine, Bretagne
- /articles/evenements/tous-en-sons-2026-a-marseille-quel-spectacle-choisir-selon-l-age-des-enfants/ | Tous en Sons ! 2026 à Marseille: spectacles enfants, âges et tarifs | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | Noël 2026 à Toulon en famille: marché, patinoire et horaires | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | Noël à Bayeux 2026 en famille: marché et Galopades | evenements | Bayeux, Calvados, Normandie
- /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | Lumières de Laval 2026 en famille: marchés, grande roue et croisière | evenements | Laval, Mayenne, Pays de la Loire

### Historique Radar lié

- opportunity | /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | 2026-10-19T16:47:56.278Z
- opportunity | /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | 2026-10-31T19:33:18.323Z
- opportunity | /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | 2026-10-30T09:27:15.122Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T18:37:09.008Z
- opportunity | /articles/evenements/noel-2026-a-besancon-en-famille-contes-gratuits-marche-solidaire-ou-artisans/ | 2026-11-01T06:27:50.817Z
- opportunity | /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | 2026-10-30T06:28:26.726Z
- opportunity | /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | 2026-10-31T22:36:58.800Z
- opportunity | /articles/evenements/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel/ | 2026-11-01T09:37:48.790Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
