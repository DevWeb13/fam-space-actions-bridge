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
title: "Grands Zyeux P'tites Zoreilles 2026: quelles séances gratuites choisir avec un tout-petit?"
subtitle: Du 17 au 31 octobre autour de Béziers, les spectacles et ateliers à repérer selon l'âge, la commune et la réservation
summary: "Grands Zyeux P'tites Zoreilles 2026: six rendez-vous gratuits à Sérignan, Sauvian, Coulobres et Béziers, avec les âges, horaires, lieux et inscriptions à vérifier."
category: evenements
location:
  city: Béziers
  department: Hérault
  region: Occitanie
keywords:
  - Grands Zyeux P'tites Zoreilles 2026
  - festival tout-petits Béziers octobre 2026
  - spectacles gratuits bébés médiathèques Béziers
sources:
  - title: Ville de Béziers - Grands Zyeux P'tites Zoreilles 2026
    url: https://www.ville-beziers.fr/a-la-une/une/grands-zyeux-ptites-zoreilles
  - title: Office de tourisme - 4 saisons et puis s'en vont à Sérignan
    url: https://www.beziers-mediterranee.com/fete-manifestation/spectacle-4-saisons-et-puis-sen-vont-festival-grands-zyeux-ptites-zoreilles-3/
  - title: Office de tourisme - T ki toi à Coulobres
    url: https://www.beziers-mediterranee.com/fete-manifestation/spectacle-t-ki-toi-festival-grands-zyeux-ptites-zoreilles-2/
  - title: Office de tourisme - Bébé lecteur à Sauvian
    url: https://www.beziers-mediterranee.com/fete-manifestation/bebe-lecteur-festival-grands-zyeux-ptites-zoreilles/
  - title: Office de tourisme - Détente musicale à Béziers
    url: https://www.beziers-mediterranee.com/fete-manifestation/atelier-seance-de-detente-musicale-festival-grands-zyeux-ptites-zoreilles/occ/2/
  - title: Office de tourisme - La bulle enchantée le 24 octobre à Béziers
    url: https://www.beziers-mediterranee.com/fete-manifestation/spectacle-la-bulle-enchantee-festival-grands-zyeux-ptites-zoreilles/
  - title: Office de tourisme - La bulle enchantée le 29 octobre à Béziers
    url: https://www.beziers-mediterranee.com/fete-manifestation/spectacle-la-bulle-enchantee-festival-grands-zyeux-ptites-zoreilles-4/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits
  decision: Trouver une animation gratuite adaptée à l'âge de son enfant entre le 17 et le 31 octobre, repérer la bonne médiathèque et savoir si une inscription est nécessaire avant de se déplacer.
  affiliationPotential: Spectacles et ateliers gratuits gérés par les médiathèques, sans billetterie ni offre de visite partenaire naturelle. Pour une famille de passage qui prolonge la sortie en séjour, l'ibis Styles Béziers Centre propose des chambres familiales sur Booking.com (https://www.booking.com/hotel/fr/beziers.fr.html); option secondaire à n'évoquer que si utile.
  gsc:
    retrievedAt: 2026-10-14T04:26:13.937Z
    dataThrough: 2026-10-11
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Béziers - Grands Zyeux P'tites Zoreilles 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-10-31
---

Un spectacle pour un bébé de 6 mois, une première séance de lecture ou un atelier musical avec un enfant de 5 ans? Le festival **Grands Zyeux P'tites Zoreilles** revient du **17 au 31 octobre 2026** dans l'agglomération Béziers Méditerranée. Cette 14e édition propose des spectacles, marionnettes, lectures et ateliers **gratuits**, principalement pour les enfants de 6 mois à 6 ans. Attention toutefois: plusieurs rendez-vous nécessitent une inscription, et les animations se déroulent dans différentes communes, pas dans une salle unique. Le [programme annoncé par la Ville de Béziers](https://www.ville-beziers.fr/a-la-une/une/grands-zyeux-ptites-zoreilles) permet de retrouver l'ensemble du festival.

## Pour un bébé: un spectacle à Sérignan ou une lecture à Sauvian

**Samedi 17 octobre à 10h30, à Sérignan**, «4 saisons et puis s'en vont» associe marionnettes, musique et images autour du cycle des saisons. Ce spectacle est annoncé **dès 6 mois, sur inscription**, à la médiathèque Samuel Beckett, 146 avenue de la Plage. C'est une piste pour une première découverte du spectacle vivant avec un bébé: [voir la fiche et les coordonnées du lieu](https://www.beziers-mediterranee.com/fete-manifestation/spectacle-4-saisons-et-puis-sen-vont-festival-grands-zyeux-ptites-zoreilles-3/).

**Mercredi 21 octobre à 10h30, à Sauvian**, la séance «Bébé lecteur» propose un moment autour des histoires à la médiathèque Simone Veil, 17 avenue Paul Vidal. **L'inscription est demandée**, mais il existe une contradiction sur l'âge minimum: la [fiche de la séance](https://www.beziers-mediterranee.com/fete-manifestation/bebe-lecteur-festival-grands-zyeux-ptites-zoreilles/) indique à la fois «dès 1 an» et «dès 6 mois». Avec un enfant de moins d'un an, mieux vaut appeler la médiathèque avant de réserver ou de se déplacer.

## Pour les 3-6 ans: théâtre à Coulobres ou atelier musical à Béziers

**Mercredi 21 octobre à 10h30, à Coulobres**, «T ki toi?» met en scène la découverte d'un être inconnu pour parler de différences et de rencontres, avec musique et jeu. Le spectacle est prévu **à partir de 3 ans et sur inscription** à la médiathèque de Coulobres, 32 Grand'Rue. [La fiche de l'office de tourisme](https://www.beziers-mediterranee.com/fete-manifestation/spectacle-t-ki-toi-festival-grands-zyeux-ptites-zoreilles-2/) donne le lieu et les renseignements.

**Vendredi 23 octobre, à Béziers**, l'atelier de détente musicale avec Laurie Perrin convient à deux tranches d'âge distinctes, à la médiathèque André Malraux, place du 14 juillet:
- **De 5 mois à 2 ans:** séances à **10h et 11h**.
- **De 3 à 6 ans:** séances à **14h et 16h10**.

Cette formule fait davantage participer l'enfant par les gestes, les mouvements et les sons. Les créneaux étant précisément répartis par âge, choisissez celui de votre enfant et contactez la médiathèque pour connaître les modalités d'accès et les places restantes. [Détails de l'atelier musical](https://www.beziers-mediterranee.com/fete-manifestation/atelier-seance-de-detente-musicale-festival-grands-zyeux-ptites-zoreilles/occ/2/).

## «La bulle enchantée»: deux dates à Béziers, mais pas le même lieu

Le spectacle musical «La bulle enchantée», avec chansons et instruments insolites, est proposé deux fois à Béziers:
- **Samedi 24 octobre à 10h30:** médiathèque André Malraux, **place du 14 juillet**. [Fiche du 24 octobre](https://www.beziers-mediterranee.com/fete-manifestation/spectacle-la-bulle-enchantee-festival-grands-zyeux-ptites-zoreilles/).
- **Jeudi 29 octobre à 10h30:** maison de quartier Albert Camus, **esplanade Rosa Parks**. Cette séance est indiquée pour les **6 mois-5 ans, sur inscription**. [Fiche du 29 octobre](https://www.beziers-mediterranee.com/fete-manifestation/spectacle-la-bulle-enchantee-festival-grands-zyeux-ptites-zoreilles-4/).

Ne partez donc pas automatiquement à la médiathèque André Malraux pour la séance du 29. Pour celle du 24, demandez confirmation de l'âge conseillé et des conditions d'inscription, que sa fiche ne précise pas clairement.

## Comment réserver sans se tromper de médiathèque?

**La gratuité ne garantit pas une entrée sans réservation.** Avant de prévoir la sortie, vérifiez trois points: l'âge accepté pour **la séance choisie**, son **adresse exacte** et la **nécessité de s'inscrire**. Les fiches liées ci-dessus donnent les coordonnées des lieux; contactez directement la structure concernée pour réserver et demander s'il reste des places. Avec un bébé, profitez de cet échange pour vérifier la possibilité d'entrer avec une poussette et les conditions d'accueil, plutôt que de les supposer.

Pour les familles qui viennent de plus loin et souhaitent passer la nuit à Béziers, l'[ibis Styles Béziers Centre](https://www.booking.com/hotel/fr/beziers.fr.html) propose des chambres familiales. Vérifiez la configuration adaptée à vos enfants et les disponibilités pour votre date de visite. Le festival se tenant dans plusieurs communes, choisissez d'abord votre séance avant de décider où dormir.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | Abracada BOUH 2026 à Montpellier: programme et tarifs au château de Flaugergues | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/les-expressifs-2026-a-poitiers-trois-jours-de-spectacles-gratuits/ | Les Expressifs 2026 à Poitiers: trois jours de spectacles gratuits | evenements | Poitiers, Vienne, Nouvelle-Aquitaine
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/equidays-2026-en-famille-dans-le-calvados-villages-gratuits-parade-et-animations/ | Équidays 2026 en famille dans le Calvados: villages gratuits, parade et animations | evenements | Caen, Calvados, Normandie
- /articles/evenements/mon-premier-festival-2026-paris-film-age/ | Mon Premier Festival 2026 à Paris: quel film choisir selon l'âge? | evenements | Paris, Paris, Île-de-France
- /articles/evenements/festival-place-aux-momes-roscoff-2026-famille/ | Festival Place aux Mômes 2026 à Roscoff: quatre spectacles gratuits en famille en août | evenements | Roscoff, Finistère, Bretagne
- /articles/evenements/fete-de-la-science-2026-en-famille/ | Fête de la science 2026: choisir une expérience adaptée à l’âge des enfants | evenements
- /articles/evenements/rues-barrees-auxerre-2026-famille/ | Rues Barrées 2026 à Auxerre: 53 spectacles gratuits en famille | evenements | Auxerre, Yonne, Bourgogne-Franche-Comté
- /articles/activites/musee-parc-des-dinosaures-de-meze-en-famille-fossiles-visite-et-conseils/ | Musée-Parc des Dinosaures de Mèze en famille: fossiles, visite et conseils | activites | Mèze, Hérault, Occitanie
- /articles/evenements/coeur-de-ville-en-lumieres-2026-avec-des-enfants-comment-preparer-la-soiree-sans-voiture/ | Cœur de Ville en Lumières 2026 avec des enfants: comment préparer la soirée sans voiture? | evenements | Montpellier, Hérault, Occitanie
- /articles/voyages/montpellier-ou-sete-sans-voiture-avec-des-enfants-ou-poser-ses-valises/ | Montpellier ou Sète sans voiture avec des enfants: où poser ses valises ? | voyages | Montpellier, Hérault, Occitanie
- /articles/sorties/grotte-des-demoiselles-avec-des-enfants-visite-guidee-contee-ou-lanterne/ | Grotte des Demoiselles avec des enfants: visite guidée, contée ou lanterne? | sorties | Saint-Bauzille-de-Putois, Hérault, Occitanie
- /articles/bons-plans/city-card-montpellier-en-famille-quand-est-elle-vraiment-rentable/ | City Card Montpellier en famille: quand est-elle vraiment rentable? | bons-plans | Montpellier, Hérault, Occitanie
- /articles/parentalite/maisons-des-1000-jours-dans-l-herault-ou-trouver-un-accompagnement-gratuit/ | Maisons des 1000 jours dans l'Hérault: où trouver un accompagnement gratuit | parentalite | Montpellier, Hérault, Occitanie
- /articles/bons-plans/cantine-au-college-dans-l-herault-jusqu-a-3-60-d-aide-par-repas/ | Cantine au collège dans l'Hérault: jusqu'à 3,60 € d'aide par repas | bons-plans | Montpellier, Hérault, Occitanie
- /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | Fête de l'Automne 2026 à Terra Botanica: animations et tarifs | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | Monument jeu d'enfant 2026 à Saint-Denis: atelier Dagobert le 17 octobre | evenements | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | Halloween 2026 au Safari de Peaugres: animations, tarifs et Festival Lumières Sauvages | evenements | Peaugres, Ardèche, Auvergne-Rhône-Alpes
- /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | Halloween 2026 au Parc Spirou: billets, nocturnes Naruto et maison hantée | evenements | Monteux, Vaucluse, Provence-Alpes-Côte d'Azur
- /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | Halloween 2026 au château de Couches: atelier citrouille et jeu Mystères & Sortilèges | evenements | Couches, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | Halloween 2026 à la Tour de l'Horloge de Guînes: visites, contes et nocturne | evenements | Guînes, Pas-de-Calais, Hauts-de-France
- /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | Famille en fête 2026 en Gironde: ateliers gratuits pour les 0-6 ans | evenements | Saint-Loubès, Gironde, Nouvelle-Aquitaine

### Historique Radar lié

- opportunity | /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | 2026-10-13T20:41:25.500Z
- opportunity | /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | 2026-10-12T08:10:30.674Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- opportunity | /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | 2026-10-13T12:37:05.098Z
- opportunity | /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | 2026-10-12T10:40:26.563Z
- opportunity | /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | 2026-10-12T14:00:32.202Z
- opportunity | /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | 2026-10-12T17:34:53.933Z
- opportunity | /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | 2026-10-13T05:01:12.150Z
- opportunity | /articles/evenements/mon-premier-festival-2026-paris-film-age/ | 2026-10-03T06:21:55.257Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | 2026-10-13T09:50:29.435Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
