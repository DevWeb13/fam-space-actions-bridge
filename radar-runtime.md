# Radar Fam Space - Phase 2/3

## Mission

Radar utilise Google Search Console et la recherche web pour choisir le travail éditorial qui apporte le plus de valeur à Fam Space: améliorer une page réellement perfectible, développer une intention proche d'une page forte, ou publier à temps une opportunité locale/saisonnière. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 2/3

Tu es journaliste web et responsable du parcours lecteur. Le candidat validé de phase 1 est fourni intégralement plus bas. Pour un refresh, l'article source exact est fourni intégralement plus bas.

Un refresh utilise l'ancien article comme référence interne, mais le résultat doit se lire comme un article actuel et autonome. Toute information encore vraie et utile doit rester, notamment prix décisionnels, durées, réservation, âge/taille, accessibilité, accès, contraintes, services bébé/enfants, repas et autres détails pratiques; une information fausse, périmée ou réellement redondante peut être retirée.

Suis le diagnostic éditorial du brief:
- `rank_loss`: réponds mieux aux intentions réellement en recul;
- `coverage_loss`: améliore la couverture utile sans présenter cela comme une perte de ranking;
- `uncertain`: applique uniquement la raison éditoriale indépendante vérifiée;
- opportunity: construis l'article autour de la décision choisie en phase 1. Le titre, le sous-titre et le résumé de phase 1 sont des formulations de travail: réévalue-les à partir de l'article final au lieu de reprendre mécaniquement la formulation de la décision.

Utilise des sources directement responsables. Les sources utilisées figurent dans `sources` et sont liées dans le corps lorsqu'elles ne concurrencent pas une offre partenaire. Aucun H1, tableau Markdown ou section Sources.

Sélectionne l'information au lieu de l'épuiser. Une information importante doit normalement apparaître une seule fois: l'introduction, les sections et la fin ne doivent pas redire la même chose. Une conclusion n'est pas obligatoire si elle ne fait que résumer. La structure doit découler du sujet et il n'existe aucun objectif de longueur; arrête-toi lorsque le sujet est traité complètement, sans remplissage.

Applique directement les règles partenaires ci-dessous.

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


Sélectionne seulement les liens internes réellement utiles et vérifie les routes avant usage. Lorsqu'une autre page Fam Space traite déjà correctement un sous-sujet, donne uniquement le contexte nécessaire puis renvoie vers cette page au lieu de refaire son contenu. Dans le texte public, oriente simplement le lecteur vers cette page sans commenter l'organisation éditoriale entre les articles. Le maillage doit prolonger la lecture et réduire les répétitions entre articles, pas seulement ajouter des liens.

Si du contenu temporaire est ajouté à un evergreen, utilise `reviewAt`; pour un événement pur, utilise `eventEndsAt`.

Soumets le résultat via `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet. **Ne recopie aucun bloc `radar` et ne fournis aucune branche ni aucun SHA.** La plomberie mécanique conserve le diagnostic GSC, la cible, le slug et les champs protégés.

## Candidat validé de la phase précédente

---
title: "Automne des gones 2026 à Lyon : quels ateliers gratuits choisir avec les enfants ?"
subtitle: Du 24 octobre au 28 novembre, choisir selon l'âge, la bibliothèque et les inscriptions
summary: "Automne des gones 2026 à Lyon : activités artistiques pour les 6-12 ans, exemples de dates et lieux, ateliers gratuits en accès libre ou sur inscription."
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
  - title: Bibliothèque municipale de Lyon - Programme officiel Automne des gones 2026
    url: https://www.bm-lyon.fr/programmes/lautomne-des-gones-2026
  - title: Ville de Lyon - Automne des gones 2026
    url: https://www.lyon.fr/evenement/animation/lautomne-des-gones
  - title: Bibliothèque de Lyon - Tangram' la Bib, 24 octobre
    url: https://www.bm-lyon.fr/agenda/tangram-la-bib
  - title: Bibliothèque de Lyon - Art autrement, 31 octobre
    url: https://www.bm-lyon.fr/agenda/art-autrement
  - title: Bibliothèque de Lyon - Connecter les fils, 4 novembre
    url: https://www.bm-lyon.fr/agenda/connecter-les-fils
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: automne-des-gones-2026-a-lyon-quels-ateliers-gratuits-choisir-avec-les-enfants
  decision: Permettre aux parents d'un enfant de 6 à 12 ans de choisir une activité artistique encore à venir entre le 24 octobre et le 28 novembre 2026, en distinguant âge, adresse, durée, accès libre et inscription obligatoire pour éviter un déplacement inutile.
  affiliationPotential: Les ateliers du réseau municipal sont gratuits et ne disposent d'aucune billetterie partenaire naturelle. Pour une famille qui prolonge la sortie en séjour à Lyon, Appart'City Classic Lyon Part Dieu Garibaldi est référencé sur Booking.com (https://www.booking.com/hotel/fr/appart-city-cap-affaires-lyon.html) avec des appartements équipés d'une kitchenette pouvant accueillir jusqu'à quatre personnes selon la catégorie ; vérifier capacité, prix et disponibilité pour les dates, sans présenter l'hébergement comme nécessaire aux habitants.
  gsc:
    retrievedAt: 2026-10-23T08:27:47+02:00
    dataThrough: 2026-10-20
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Bibliothèque municipale de Lyon - Programme officiel Automne des gones 2026 »; aucune page forte GSC n'est requise.
---

## Mission retenue
Publier une opportunité locale et saisonnière sur « L'Automne des gones 2026 », programmation d'arts visuels, ateliers, jeux, projections et créations dans les bibliothèques municipales de Lyon du 3 octobre au 28 novembre. Ne traiter que les séances encore à venir au moment de la rédaction.

## Pourquoi cette mission
Le meilleur refresh GSC en volume, Parc en Folie à Rennes, est déjà complet sur les tarifs, l'espace 0-3 ans, l'accès et l'hébergement ; la baisse d'impressions est classée « uncertain » et ne démontre aucune lacune. La Carte Avantage Adulte SNCF (autre refresh fort) explique déjà les 49 €, les réductions, la règle enfant en semaine et la rentabilité ; la source officielle confirme ces éléments. Une expansion de la page forte sur les transports parisiens se heurte à des pages déjà publiées sur Orly, CDG et les consignes. L'Automne des gones a un calendrier officiel riche, une décision familiale précise et aucun doublon dans le catalogue ni les travaux en cours.

## Décision du lecteur
Trouver une séance adaptée à l'âge de son enfant et à son agenda, savoir si elle est gratuite, libre ou sur inscription, et dans quelle bibliothèque se rendre.

## Faits à traiter
Le programme officiel court jusqu'au 28 novembre et vise principalement les 6-12 ans, mais les fiches individuelles fixent les âges réels. Exemples vérifiés : « Tangram' la Bib » le 24 octobre de 14 h à 16 h, bibliothèque du 7e Guillotière, dès 7 ans, gratuit en accès libre dans la limite des places ; « Art autrement » le 31 octobre de 15 h à 17 h, médiathèque du Bachut, 8-12 ans, gratuit sur inscription ; « Connecter les fils » le 4 novembre de 10 h à 12 h, bibliothèque du 3e Lacassagne, 8-12 ans, gratuit avec inscription annoncée à partir du 21 octobre. Vérifier disponibilités, reports et annulations au moment de rédiger, sans promettre de place. Distinguer l'exposition en accès libre et les ateliers à jauge ; ne pas affirmer que chaque événement du programme est libre d'accès.

## Sources de départ
Le programme de la Bibliothèque municipale de Lyon et les trois fiches officielles citées en frontmatter ; la page de la Ville de Lyon confirme dates, public et thématique.

## Affiliation
Pas de billet partenaire pertinent pour ces ateliers gratuits. Pour les visiteurs de passage seulement, vérifier l'appartement familial Appart'City Classic Lyon Part Dieu Garibaldi sur Booking.com et intégrer au besoin une suggestion discrète, sans inventer prix ni disponibilité.

## Continuations internes
Aucun article Fam Space n'est consacré à l'Automne des gones. Éviter de recopier la page existante sur la Toussaint au musée des Confluences : renvoyer vers elle uniquement pour les familles qui souhaitent une autre sortie culturelle à Lyon. Ne pas confondre avec la Fête des Lumières 2026 ni avec la Biennale d'art contemporain, qui n'est ici que le contexte artistique du programme.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | Toussaint 2026 au musée des Confluences: cinq rendez-vous pour les enfants | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | Festival Lumière 2026: Laurel & Hardy en famille le 17 octobre à Lyon | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/vie-pratique/location-de-voiture-a-lyon-avec-des-enfants-ce-qu-il-faut-verifier-avant-de-reserver/ | Location de voiture à Lyon avec des enfants: ce qu'il faut vérifier avant de réserver | vie-pratique | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | Vacances de la Toussaint 2026 à la Cité des sciences: les ateliers numériques gratuits avec des enfants | sorties | Paris, Paris, Île-de-France
- /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | Equita Lyon 2026 avec des enfants: billets, Village Enfants et spectacles | evenements | Chassieu, Rhône, Auvergne-Rhône-Alpes
- /articles/bons-plans/musees-gratuits-autour-de-rouen-lesquels-choisir-avec-des-enfants/ | Musées gratuits autour de Rouen: lesquels choisir avec des enfants ? | bons-plans | Rouen, Seine-Maritime, Normandie
- /articles/evenements/course-des-chateaux-d-ottrott-2026-quelles-epreuves-choisir-pour-les-enfants/ | Course des Châteaux d'Ottrott 2026: quelles épreuves choisir pour les enfants? | evenements | Ottrott, Bas-Rhin, Grand Est
- /articles/parentalite/cafe-papote-a-lyon-4e-ou-echanger-gratuitement-avec-d-autres-parents/ | Café Papote à Lyon 4e: où échanger gratuitement avec d'autres parents | parentalite | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/maison/decheteries-mobiles-a-lyon-que-peut-on-deposer-et-quand-preferer-une-decheterie-fixe/ | Déchèteries mobiles à Lyon: que peut-on déposer et quand préférer une déchèterie fixe? | maison | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | Halloween 2026 à Mini World Lyon: la Chasse aux 31 Méchants en famille | evenements | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/sorties/aquarium-de-lyon-en-famille-nouveautes-ocean-360-tarifs-et-visite/ | Aquarium de Lyon en famille: nouveautés Océan 360°, tarifs et visite | sorties | La Mulatière, Rhône, Auvergne-Rhône-Alpes
- /articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/ | Mini World Lyon: tarifs, billets famille et durée de visite | bons-plans | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/cuisine/a-claveisolles-decouvrir-comment-le-lait-de-chevre-devient-fromage-avec-les-enfants/ | À Claveisolles, découvrir comment le lait de chèvre devient fromage avec les enfants | cuisine | Claveisolles, Rhône, Auvergne-Rhône-Alpes
- /articles/activites/parc-de-courzieu-en-famille-tarifs-horaires-et-conseils-pour-la-visite/ | Parc de Courzieu en famille: tarifs, horaires et conseils pour la visite | activites | Courzieu, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | MonstroZoo 2026-2027 à Beauval: parcours inclus, visite guidée et tarifs | evenements | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | Luminescences 2026-2027 au zoo d'Amnéville: billets, tarifs et visite en famille | evenements | Amnéville, Moselle, Grand Est
- /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | Salon du Cheval de Paris 2026 en famille: animations, jumping et billets | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne
- /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | Foire de Dijon 2026 avec les enfants: gratuités, ateliers et Ferme Côte-d'Or | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | Foire de Grenoble 2026 en famille: jours gratuits, programme et tarifs | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine

### Historique Radar lié

- opportunity | /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | 2026-10-21T10:43:46.144Z
- opportunity | /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | 2026-10-10T15:40:28.185Z
- opportunity | /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | 2026-10-19T19:48:02.164Z
- opportunity | /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | 2026-10-21T16:31:41.000Z
- opportunity | /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | 2026-10-21T13:33:34.395Z
- opportunity | /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | 2026-10-22T12:58:21.691Z
- opportunity | /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | 2026-10-22T09:37:18.560Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z
- opportunity | /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | 2026-10-22T15:49:20.816Z
- opportunity | /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | 2026-10-22T04:59:04.773Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
