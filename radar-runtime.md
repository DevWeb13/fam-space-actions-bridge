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
title: "Noël des Alpes 2026 à Annecy en famille : marché, patinoire et illuminations"
subtitle: Du 26 novembre au 3 janvier, trois idées de sortie entre les quais du lac, les Jardins de l’Europe et la vieille ville
summary: Où aller à Noël des Alpes 2026-2027 à Annecy avec des enfants ? Marché gratuit, patinoire, Père Noël, illuminations et informations encore à confirmer.
category: evenements
location:
  city: Annecy
  department: Haute-Savoie
  region: Auvergne-Rhône-Alpes
keywords:
  - Noël des Alpes Annecy 2026
  - marché de Noël Annecy 2026
  - patinoire jardins de l'Europe Annecy
  - Père Noël Annecy ancienne Grenette
sources:
  - title: Office de tourisme du lac d’Annecy — Noël des Alpes, informations de la Ville
    url: https://www.lac-annecy.com/fete-et-manifestation/noel-des-alpes-annecy/
  - title: Office de tourisme du lac d’Annecy — Illuminations des bâtiments historiques
    url: https://www.lac-annecy.com/fete-et-manifestation/noel-des-alpes-illuminations-des-batiments-historiques-annecy/
  - title: Sibra — Espace d'information voyageurs près de la gare
    url: https://www.sibra.fr/espace-sibra/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations
  decision: "Choisir une sortie de Noël adaptée à l'âge des enfants, au temps disponible et au budget : marché et Père Noël, patinoire, ou illuminations en soirée ; savoir où aller et quelles informations vérifier avant de partir."
  affiliationPotential: "Marché en accès libre : pas de billet à vendre. Pour un week-end, Booking.com propose Le Pâquier - MyCosyApart, appartement de trois chambres en vieille ville près du lac : https://www.booking.com/hotel/fr/apartment-6-people-in-the-heart-of-annecy.fr.html ; vérifier capacité, dates et conditions à la rédaction."
  gsc:
    retrievedAt: 2026-10-29T02:27:59+01:00
    dataThrough: 2026-10-26
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Office de tourisme du lac d'Annecy — Noël des Alpes, informations mises à jour par la Ville »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-03
---

À Annecy, **Noël des Alpes se tient du jeudi 26 novembre 2026 au dimanche 3 janvier 2027 inclus**. Le marché de Noël s'étend des quais du lac aux Jardins de l'Europe, tandis que le Père Noël est annoncé place de l'Ancienne Grenette et que des bâtiments du centre seront illuminés. L'accès au marché est gratuit, mais cela ne signifie pas que la patinoire le soit. Pour choisir votre sortie en famille, le plus utile est de distinguer ces lieux et ce qui reste à confirmer dans le programme 2026-2027.

## Pour une balade gratuite : les chalets au bord du lac

Les chalets sont annoncés sur les **quais de Vicenza, de Bayreuth et Napoléon III, jusqu'aux Jardins de l'Europe**. C'est le choix le plus souple avec de jeunes enfants : vous pouvez regarder les décorations, prendre une collation et écourter la visite dès que le froid ou la fatigue se font sentir.

Le marché est en accès libre ; prévoyez seulement un budget pour les achats et la restauration. Les horaires d'ouverture précis des différents secteurs, y compris les 24, 25 et 31 décembre et le 1er janvier, ne sont pas encore détaillés sur la [fiche officielle de Noël des Alpes](https://www.lac-annecy.com/fete-et-manifestation/noel-des-alpes-annecy/). Vérifiez-les avant de partir, surtout pour une visite en soirée ou un jour férié.

## Pour patiner : direction les Jardins de l'Europe

La **patinoire et la zone festive** sont annoncées aux Jardins de l'Europe, près du lac. C'est la partie à privilégier si les enfants veulent faire autre chose que se promener parmi les chalets.

En revanche, la fiche officielle ne précise pas encore le **prix d'entrée, la location des patins, les horaires des séances, l'âge minimal ou les éventuels équipements d'aide aux débutants** pour cette édition. Ne prévoyez donc pas un budget ou une séance à heure fixe sur la base des tarifs des années précédentes. Avec un tout-petit qui ne patine pas, la promenade autour du marché reste une solution sans réservation.

## Pour voir le Père Noël : place de l'Ancienne Grenette

La Ville annonce la présence du **Père Noël place de l'Ancienne Grenette**, dans le centre historique. C'est un arrêt à prévoir plutôt avant Noël, sans promettre une rencontre à n'importe quel moment : **les jours et heures de présence ne sont pas encore publiés** dans la fiche 2026.

Si cette rencontre est le but principal de la sortie, consultez le programme actualisé avant de vous déplacer. Les spectacles, concerts et déambulations sont également annoncés, mais leurs dates et leurs éventuelles conditions d'accès ne sont pas encore suffisamment détaillées pour organiser une journée autour d'un spectacle précis.

## Pour les illuminations : trois bâtiments du centre

Pour une sortie après la tombée de la nuit, trois installations lumineuses sont annoncées : le **Conservatoire**, la **tour de l'horloge de la porte Sainte-Claire** et l'**église Notre-Dame-de-Liesse**. L'accès est libre.

La [fiche officielle des illuminations](https://www.lac-annecy.com/fete-et-manifestation/noel-des-alpes-illuminations-des-batiments-historiques-annecy/) affiche pour l'instant la période du **26 novembre au 3 janvier, de 17 h à 23 h 45**, avec la mention explicite **« dates à confirmer »**. Ces horaires sont donc provisoires, pas une garantie de fonctionnement chaque soir. Avec de jeunes enfants, une courte boucle dans la vieille ville peut être plus agréable qu'une visite tardive de tous les sites.

## Venir avec une poussette et gérer les besoins des petits

Depuis la **gare d'Annecy**, rejoignez le centre-ville à pied, puis poursuivez vers les quais et les Jardins de l'Europe. La vieille ville comporte des secteurs pavés : une poussette maniable sera plus pratique, et un porte-bébé peut dépanner. Prévoyez des vêtements chauds, surtout pour une balade au bord du lac après la nuit tombée.

Pour les familles qui arrivent en bus ou se garent hors du centre, notre guide [Bus à Annecy avec des enfants : quel ticket choisir et comment éviter les galères](/articles/vie-pratique/bus-a-annecy-avec-des-enfants-quel-ticket-choisir-et-comment-eviter-les-galeres/) explique les titres Sibra et les parkings relais. L'[Espace Sibra](https://www.sibra.fr/espace-sibra/) se trouve rue de la Gare, près du pôle d'échanges.

Aucune information 2026 suffisamment précise n'a encore été publiée sur les **toilettes accessibles, les tables à langer, les espaces pour nourrir un bébé ou la possibilité de réchauffer un repas** sur le marché. Mieux vaut prévoir de quoi nourrir et changer les petits sans compter sur un équipement particulier. Pour une pause au chaud, repérez un café ou un restaurant avant la visite et vérifiez ses équipements.

## Et pour passer le week-end à Annecy ?

Pour une famille qui souhaite rester une nuit ou deux, [Le Pâquier – MyCosyApart sur Booking.com](https://www.booking.com/hotel/fr/apartment-6-people-in-the-heart-of-annecy.fr.html) propose un appartement de **trois chambres avec cuisine équipée**, en vieille ville, à proximité du lac. Attention avec une poussette ou des bagages : l'appartement est annoncé au **deuxième étage sans ascenseur**. Vérifiez le nombre de couchages adapté à votre famille, le tarif, la disponibilité et les conditions pour vos dates avant de réserver.

**À vérifier avant le 26 novembre :** horaires par zone et jours fériés, tarif et conditions de la patinoire, calendrier du Père Noël et confirmation des créneaux d'illuminations. Ces précisions peuvent changer le meilleur moment pour venir, mais pas l'emplacement des trois grandes options de sortie déjà annoncées.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/fete-du-lac-annecy-2026-en-famille/ | Fête du lac d’Annecy 2026: préparer la soirée avec des enfants | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/vie-pratique/bus-a-annecy-avec-des-enfants-quel-ticket-choisir-et-comment-eviter-les-galeres/ | Bus à Annecy avec des enfants: quel ticket choisir et comment éviter les galères | vie-pratique | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/court-circuit-2026-a-annecy-en-famille-spectacles-tarifs-et-conseils/ | Court Circuit 2026 à Annecy en famille: spectacles, tarifs et conseils | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | ALFest 2026 à Annecy en famille: horaires, jeux et braderie | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | Noël à Toulouse 2026 en famille: marchés, Père Noël et patinoire | evenements | Toulouse, Haute-Garonne, Occitanie
- /articles/parentalite/laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit/ | LAEP autour d'Annecy: trois lieux pour jouer avec son tout-petit | parentalite | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | Noël à Fontevraud 2026: patinoire, marché, dates et tarifs en famille | evenements | Fontevraud-l'Abbaye, Maine-et-Loire, Pays de la Loire
- /articles/maison/renovation-energetique-en-haute-savoie-jusqu-a-3-000-d-aide-departementale/ | Rénovation énergétique en Haute-Savoie: jusqu'à 3 000 € d'aide départementale | maison | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/cuisine/ferme-du-petit-mont-a-bellevaux-en-famille-quelle-formule-choisir/ | Ferme du Petit Mont à Bellevaux en famille: quelle formule choisir ? | cuisine | Bellevaux, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/activites/mer-de-glace-avec-des-enfants-faut-il-descendre-jusqu-a-la-grotte/ | Mer de Glace avec des enfants: faut-il descendre jusqu'à la grotte? | activites | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/voyages/evian-les-bains-en-famille-pendant-3-jours-lac-balades-et-activites-faciles/ | Évian-les-Bains en famille pendant 3 jours: lac, balades et activités faciles | voyages | Évian-les-Bains, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-au-bonheur-des-momes-2026-en-famille/ | Au Bonheur des Mômes 2026: pass, spectacles et journée au Grand-Bornand | evenements | Le Grand-Bornand, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/la-seine-musicale-en-famille-en-2027-quels-concerts-et-ateliers-selon-l-age/ | La Seine Musicale en famille en 2027: quels concerts et ateliers selon l'âge ? | evenements | Boulogne-Billancourt, Hauts-de-Seine, Île-de-France
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires et accès | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir/ | Festival des Jeux de Cannes 2027 en famille: billets, âges et visite | evenements | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans/ | Foulée Blanche 2027 en famille: courses, âges, tarifs et programme à Autrans | evenements | Autrans-Méaudre en Vercors, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/batiment-b-a-saint-denis-decouvrir-le-street-art-en-famille/ | Bâtiment B à Saint-Denis: découvrir le street art en famille | evenements | Saint-Denis, La Réunion, La Réunion
- /articles/evenements/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/ | Noël 2026 au château royal de Blois: décors, spectacles et tarifs en famille | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants/ | Marie-Antoinette à Fontainebleau 2026-2027: exposition, visites et tarifs en famille | evenements | Fontainebleau, Seine-et-Marne, Île-de-France
- /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | Féeries de Noël 2026 à Paris: parcours lumineux, billets et patinoire en famille | evenements | Paris, Paris, Île-de-France

### Historique Radar lié

- opportunity | /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | 2026-10-20T15:29:27.541Z
- opportunity | /articles/evenements/festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir/ | 2026-10-28T09:26:08.391Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- opportunity | /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | 2026-10-27T13:28:21.076Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- opportunity | /articles/evenements/marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants/ | 2026-10-27T18:27:41.322Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/ | 2026-10-27T22:28:21.356Z
- opportunity | /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | 2026-10-28T01:34:03.741Z
- opportunity | /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | 2026-10-24T23:34:36.270Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
