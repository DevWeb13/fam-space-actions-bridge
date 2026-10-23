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
title: "Automne des gones 2026 à Lyon : ateliers et sorties gratuites en famille"
subtitle: "Du 24 octobre au 28 novembre : les séances par âge, bibliothèque et conditions d'accès"
summary: L'Automne des gones 2026 propose des ateliers, jeux et projections dans les bibliothèques de Lyon. Dates à venir, âges, adresses et inscriptions à vérifier.
category: evenements
location:
  city: Lyon
  department: Rhône
  region: Auvergne-Rhône-Alpes
keywords:
  - Automne des gones 2026 Lyon enfants
  - bibliothèques Lyon ateliers enfants octobre novembre 2026
  - Automne des gones ateliers gratuits inscription
sources:
  - title: Bibliothèque municipale de Lyon - Programme Automne des gones 2026
    url: https://www.bm-lyon.fr/programmes/lautomne-des-gones-2026
  - title: Ville de Lyon - L'Automne des gones
    url: https://www.lyon.fr/evenement/animation/lautomne-des-gones
  - title: Bibliothèque de Lyon - Tangram' la Bib
    url: https://www.bm-lyon.fr/agenda/tangram-la-bib
  - title: Bibliothèque de Lyon - Art autrement
    url: https://www.bm-lyon.fr/agenda/art-autrement
  - title: Bibliothèque de Lyon - Connecter les fils
    url: https://www.bm-lyon.fr/agenda/connecter-les-fils
  - title: Bibliothèque de Lyon - Champ de fleurs en peinturlures
    url: https://www.bm-lyon.fr/agenda/champ-de-fleurs-en-peinturlures
  - title: Bibliothèque de Lyon - Peinture rupestre à Gerland
    url: https://www.bm-lyon.fr/agenda/peinture-rupestre
  - title: Bibliothèque de Lyon - Peinture rupestre à Saint-Rambert
    url: https://www.bm-lyon.fr/agenda/peinture-rupestre-0
  - title: Bibliothèque de Lyon - Peinture rupestre à Part-Dieu
    url: https://www.bm-lyon.fr/agenda/peinture-rupestre-1
  - title: Bibliothèque de Lyon - La Petite séance à Croix-Rousse
    url: https://www.bm-lyon.fr/agenda/la-petite-seance-projection-surprise-aux-couleurs-de-lautomne-des-gones-1
  - title: Bibliothèque de Lyon - La Petite séance dans le 2e
    url: https://www.bm-lyon.fr/agenda/la-petite-seance-projection-surprise-aux-couleurs-de-lautomne-des-gones
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: automne-des-gones-2026-a-lyon-quels-ateliers-gratuits-choisir-avec-les-enfants
  decision: Permettre aux parents d'un enfant de 6 à 12 ans de choisir une activité artistique encore à venir entre le 24 octobre et le 28 novembre 2026, en distinguant âge, adresse, durée, accès libre et inscription obligatoire pour éviter un déplacement inutile.
  affiliationPotential: Les ateliers du réseau municipal sont gratuits et ne disposent d'aucune billetterie partenaire naturelle. Pour une famille qui prolonge la sortie en séjour à Lyon, Appart'City Classic Lyon Part Dieu Garibaldi est référencé sur Booking.com (https://www.booking.com/hotel/fr/appart-city-cap-affaires-lyon.html) avec des appartements équipés d'une kitchenette pouvant accueillir jusqu'à quatre personnes selon la catégorie ; vérifier capacité, prix et disponibilité pour les dates, sans présenter l'hébergement comme nécessaire aux habitants.
  gsc:
    retrievedAt: 2026-10-23T08:27:47+02:00
    dataThrough: 2026-10-20
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Bibliothèque municipale de Lyon - Programme officiel Automne des gones 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-11-28T23:59:59+01:00
---

Jusqu'au **28 novembre 2026**, **l'Automne des gones** transforme les bibliothèques municipales de **Lyon** en lieux de création : dessin, peinture, jeux, cinéma et découvertes artistiques. Le programme s'adresse principalement aux **6-12 ans**, mais chaque séance a ses propres limites d'âge. Beaucoup de rendez-vous sont **gratuits** ; en revanche, **entrée libre ne signifie pas place garantie**, et plusieurs ateliers nécessitent une inscription.

Pour choisir sans vous déplacer inutilement, voici des séances encore programmées **à partir du samedi 24 octobre**, avec leurs lieux et conditions d'accès.

## Pendant les vacances de la Toussaint : quoi faire sans réserver ?

**Samedi 24 octobre, de 14 h à 16 h — Tangram' la Bib, dès 7 ans.** À la **bibliothèque du 7e Guillotière**, **25 rue Béchevelin (69007)**, les enfants participent à une création collective inspirée des formes du tangram pour décorer les baies vitrées. C'est **gratuit et en accès libre, dans la limite des places disponibles**. Pas de réservation annoncée : [fiche de Tangram' la Bib](https://www.bm-lyon.fr/agenda/tangram-la-bib).

**Mercredi 28 octobre, de 17 h 30 à 19 h — projection surprise, dès 7 ans.** À la **bibliothèque du 2e**, **13 rue de Condé (69002)**, la séance de cinéma gratuite se déroule **en accès libre dans la limite des places disponibles**. Le film est révélé sur place ; l'indice donné par les bibliothécaires évoque un tableau inachevé dont les personnages prennent vie. [Détails de la projection](https://www.bm-lyon.fr/agenda/la-petite-seance-projection-surprise-aux-couleurs-de-lautomne-des-gones).

Attention à ne pas confondre avec la **projection du samedi 24 octobre, de 15 h à 16 h 30**, à la **bibliothèque du 4e Croix-Rousse**, **12 bis rue de Cuire (69004)** : celle-ci, pour les **7-12 ans**, est gratuite **mais sur inscription** auprès de la bibliothèque. Les conditions sont indiquées dans [sa fiche](https://www.bm-lyon.fr/agenda/la-petite-seance-projection-surprise-aux-couleurs-de-lautomne-des-gones-1).

Un rendez-vous peut être gratuit tout en étant déjà complet. C'est le cas de **« Art autrement »**, prévu **samedi 31 octobre de 15 h à 17 h** à la **médiathèque du Bachut** pour les **8-12 ans** : l'organisateur affiche **« événement complet » et « inscriptions terminées »**. Ne comptez donc pas sur cet atelier sans changement annoncé sur [sa fiche](https://www.bm-lyon.fr/agenda/art-autrement).

## En novembre : dessin collectif, peinture et ateliers sur inscription

**Mercredi 4 novembre, de 10 h à 12 h — Connecter les fils, 8-12 ans.** À la **bibliothèque du 3e Lacassagne**, **86 avenue Lacassagne (69003)**, les enfants explorent plusieurs techniques (pastel, aquarelle, peinture) puis relient leurs créations dans une fresque commune. L'atelier est **gratuit, sur inscription** : consultez [la fiche et son accès à l'inscription](https://www.bm-lyon.fr/agenda/connecter-les-fils) avant de prévoir le déplacement.

**Mercredi 4 novembre, de 15 h à 16 h 30 — Champ de fleurs en peinturlures, 6-10 ans.** À la **bibliothèque Part-Dieu**, espace jeunesse **niveau -1**, **30 boulevard Marius-Vivier-Merle (69003)**, une fresque collective est créée à la manière d'Hervé Tullet. L'atelier est **gratuit, en accès libre dans la limite des places** : [fiche de l'atelier](https://www.bm-lyon.fr/agenda/champ-de-fleurs-en-peinturlures).

**Mercredi 4 novembre, de 14 h 30 à 16 h 30 — Peinture rupestre, 7-12 ans.** À la **bibliothèque du 7e Gerland**, **34 rue Jacques-Monod (69007)**, les enfants essaient fusain et sanguine. L'atelier est **gratuit sur inscription** ; l'ouverture annoncée était le **21 octobre**, mais la présence d'un bouton d'inscription ne garantit pas qu'il reste des places : [fiche de Gerland](https://www.bm-lyon.fr/agenda/peinture-rupestre).

Cette activité est aussi annoncée **mercredi 18 novembre, de 15 h à 17 h**, à la **bibliothèque du 9e Saint-Rambert**, **3 place Schönberg (69009)**, pour les **7-12 ans**, avec **ouverture des inscriptions annoncée le 4 novembre**. Une autre séance est prévue **mercredi 25 novembre, de 15 h à 17 h**, à **Part-Dieu**, pour les **7-10 ans**, avec **inscriptions annoncées à partir du 11 novembre**. Les conditions sont propres à chaque lieu : [Saint-Rambert](https://www.bm-lyon.fr/agenda/peinture-rupestre-0) et [Part-Dieu](https://www.bm-lyon.fr/agenda/peinture-rupestre-1). Prévoyez des vêtements qui ne craignent pas les taches.

## Une visite libre, même sans atelier réservé

À **Part-Dieu**, l'exposition **« Plein les mirettes ! »**, annoncée **du 3 octobre au 28 novembre**, met en regard des œuvres contemporaines issues de deux artothèques. Elle peut compléter une sortie autour des arts visuels, sans dépendre d'un créneau d'atelier. Pour connaître ses conditions de visite et découvrir les autres dates du programme, consultez [l'agenda de l'Automne des gones](https://www.bm-lyon.fr/programmes/lautomne-des-gones-2026).

## Avant de partir : âge, inscription et accessibilité

Les bibliothèques participantes ne sont **pas toutes à la même adresse** : vérifiez le lieu exact, et pas seulement le titre de l'activité. Pour une séance sur inscription, consultez le statut actualisé sur sa fiche ou appelez la bibliothèque ; les places peuvent être épuisées et des annulations ou changements de programme restent possibles. Pour une activité en accès libre, la **jauge** peut aussi empêcher d'entrer si elle est atteinte.

Les fiches officielles indiquent les contacts et l'accessibilité propres à chaque bibliothèque. Si votre enfant ou un accompagnant a un besoin particulier, **contactez le lieu concerné** : le programme ne garantit pas une accessibilité identique pour toutes les animations.

Si vous cherchez une autre sortie culturelle lyonnaise pendant les vacances, notre guide de la [Toussaint 2026 au musée des Confluences](/articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/) présente des rendez-vous distincts, avec leurs âges et conditions.

## Si vous passez quelques jours à Lyon

Pour les familles qui viennent de l'extérieur et souhaitent dormir sur place, l'[Appart'City Classic Lyon Part Dieu Garibaldi sur Booking.com](https://www.booking.com/hotel/fr/appart-city-cap-affaires-lyon.fr.html) propose des hébergements avec **kitchenette**, dont certains appartements pouvant accueillir **jusqu'à quatre personnes**. La capacité dépend du logement choisi : renseignez **l'âge et le nombre d'enfants**, puis vérifiez le **prix total**, les disponibilités, les éventuelles garanties et les conditions d'annulation avant de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | Toussaint 2026 au musée des Confluences: cinq rendez-vous pour les enfants | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | Festival Lumière 2026: Laurel & Hardy en famille le 17 octobre à Lyon | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/vie-pratique/location-de-voiture-a-lyon-avec-des-enfants-ce-qu-il-faut-verifier-avant-de-reserver/ | Location de voiture à Lyon avec des enfants: ce qu'il faut vérifier avant de réserver | vie-pratique | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | Equita Lyon 2026 avec des enfants: billets, Village Enfants et spectacles | evenements | Chassieu, Rhône, Auvergne-Rhône-Alpes
- /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | Vacances de la Toussaint 2026 à la Cité des sciences: les ateliers numériques gratuits avec des enfants | sorties | Paris, Paris, Île-de-France
- /articles/bons-plans/mulhouse-trois-musees-gratuits-pour-une-journee-culturelle-avec-des-enfants/ | Mulhouse: trois musées gratuits pour une journée culturelle avec des enfants | bons-plans | Mulhouse, Haut-Rhin, Grand Est
- /articles/parentalite/maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles/ | Maison des Parents aux Pennes-Mirabeau: ateliers gratuits et accueil des familles | parentalite | Les Pennes-Mirabeau, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/parentalite/cafe-papote-a-lyon-4e-ou-echanger-gratuitement-avec-d-autres-parents/ | Café Papote à Lyon 4e: où échanger gratuitement avec d'autres parents | parentalite | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/maison/decheteries-mobiles-a-lyon-que-peut-on-deposer-et-quand-preferer-une-decheterie-fixe/ | Déchèteries mobiles à Lyon: que peut-on déposer et quand préférer une déchèterie fixe? | maison | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | Halloween 2026 à Mini World Lyon: la Chasse aux 31 Méchants en famille | evenements | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/sorties/aquarium-de-lyon-en-famille-nouveautes-ocean-360-tarifs-et-visite/ | Aquarium de Lyon en famille: nouveautés Océan 360°, tarifs et visite | sorties | La Mulatière, Rhône, Auvergne-Rhône-Alpes
- /articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/ | Mini World Lyon: tarifs, billets famille et durée de visite | bons-plans | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/cuisine/a-claveisolles-decouvrir-comment-le-lait-de-chevre-devient-fromage-avec-les-enfants/ | À Claveisolles, découvrir comment le lait de chèvre devient fromage avec les enfants | cuisine | Claveisolles, Rhône, Auvergne-Rhône-Alpes
- /articles/activites/parc-de-courzieu-en-famille-tarifs-horaires-et-conseils-pour-la-visite/ | Parc de Courzieu en famille: tarifs, horaires et conseils pour la visite | activites | Courzieu, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | Créations & savoir-faire 2026 à Paris en famille: billets, ateliers et dates | evenements | Paris, Paris, Île-de-France
- /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | MonstroZoo 2026-2027 à Beauval: parcours inclus, visite guidée et tarifs | evenements | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | Luminescences 2026-2027 au zoo d'Amnéville: billets, tarifs et visite en famille | evenements | Amnéville, Moselle, Grand Est
- /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | Salon du Cheval de Paris 2026 en famille: animations, jumping et billets | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne
- /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | Foire de Dijon 2026 avec les enfants: gratuités, ateliers et Ferme Côte-d'Or | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | Foire de Grenoble 2026 en famille: jours gratuits, programme et tarifs | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | 2026-10-23T06:21:12.326Z
- opportunity | /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | 2026-10-21T10:43:46.144Z
- opportunity | /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | 2026-10-10T15:40:28.185Z
- opportunity | /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | 2026-10-19T19:48:02.164Z
- opportunity | /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | 2026-10-21T16:31:41.000Z
- opportunity | /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | 2026-10-21T13:33:34.395Z
- opportunity | /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | 2026-10-22T12:58:21.691Z
- opportunity | /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | 2026-10-22T09:37:18.560Z
- opportunity | /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | 2026-10-22T15:49:20.816Z
- opportunity | /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | 2026-10-22T04:59:04.773Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
