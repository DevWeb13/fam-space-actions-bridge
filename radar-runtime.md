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
title: "MonstroZoo 2026-2027 à Beauval : enquête libre ou visite guidée en famille ?"
subtitle: "Du 17 octobre au 8 mars : carnet gratuit, mission accompagnée dès 6 ans et supplément à prévoir"
summary: MonstroZoo revient au ZooParc de Beauval jusqu'au 8 mars 2027. Comparez le parcours d'enquête inclus dans l'entrée et la visite guidée payante dès 6 ans.
category: evenements
location:
  city: Saint-Aignan
  department: Loir-et-Cher
  region: Centre-Val de Loire
keywords:
  - MonstroZoo Beauval 2026 2027
  - MonstroZoo visite guidée enfants
  - MonstroZoo carnet enquête gratuit
  - MonstroZoo tarifs durée réservation
sources:
  - title: ZooParc de Beauval - Découvrez MonstroZoo 2026-2027
    url: https://www.zoobeauval.com/spectacles-et-activites/decouvrir-monstrozoo
  - title: "ZooParc de Beauval - MonstroZoo : sur la piste des monstres, réservation et conditions"
    url: https://reservations.zoobeauval.com/visite-guidee-monstrozoo
  - title: ZooParc de Beauval - Tarifs des visites guidées
    url: https://www.zoobeauval.com/billetterie/activites
  - title: ZooParc de Beauval - Programme Toussaint et Halloween 2026
    url: https://actus.zoobeauval.com/toussaint-monstrozoo-beauval-2026/
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille
  decision: Permettre aux familles de choisir entre le jeu de piste gratuit inclus dans l'entrée du zoo et la visite guidée MonstroZoo payante, selon l'âge des enfants (dès 6 ans pour la visite), le budget, la durée de 1 h 30 et les places disponibles, sans confondre réservation de l'activité et billet d'accès au parc.
  affiliationPotential: L'entrée ordinaire du ZooParc est proposée sur Tiqets (https://www.tiqets.com/fr/activites-attractions-saint-aignan-c178194/billets-pour-zooparc-de-beauval-billet-d-entree-p974727/) et inclut le parcours MonstroZoo en autonomie; le supplément de visite guidée n'est pas inclus et aucune offre affiliée spécifique équivalente n'a été confirmée. Pour une famille restant sur place, Les Pagodes de Beauval sur Booking.com (https://www.booking.com/hotel/fr/les-pagodes-de-beauval-st-aignan.fr.html) proposent notamment des chambres familiales, sans disponibilité ni prix garantis.
  gsc:
    retrievedAt: 2026-10-22T08:53:00+02:00
    dataThrough: 2026-10-19
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « ZooParc de Beauval - Découvrez MonstroZoo 2026-2027 »; aucune page forte GSC n'est requise.
---

## Mission retenue
Publier un guide événementiel ciblé sur **MonstroZoo**, deuxième édition au ZooParc de Beauval **du 17 octobre 2026 au 8 mars 2027**. Six créatures fantastiques et leurs familles sont dispersées dans plusieurs territoires du parc. Les enfants suivent une enquête avec un carnet remis gratuitement, ou choisissent une mission guidée à effectif limité.

## Pourquoi cette mission
Le meilleur refresh GSC, la carte OKAY Savoie, affiche un recul d'impressions mais un signal **uncertain** ; sa dernière version traite déjà les dates de crédit, l'activation, les usages, le bonus CAF et la perte de carte. Aucune modification substantielle supplémentaire n'est démontrée. Une expansion des pages fortes consacrées aux transports parisiens recouperait des guides de tarifs et de trajets déjà publiés. MonstroZoo offre une **décision nouvelle et actuelle**, vérifiée directement auprès du ZooParc. Le catalogue de 739 articles ne présente aucun article MonstroZoo; trois articles Beauval existants couvrent surtout les billets généraux, la durée et l'hébergement. Les travaux Publication (mobilier d'occasion dans le Var) et Destinations (Vincennes, Haut-Rhin) ne se chevauchent pas.

## Décision du lecteur
Choisir **une enquête autonome comprise dans l'entrée**, adaptée aux enfants de différents âges, ou **une mission guidée de 1 h 30 dès 6 ans**, en comprenant les tarifs, l'obligation de réservation de l'activité et le fait que l'entrée du zoo est vendue séparément.

## Faits à traiter
Confirmer les six monstres nommés Bloop, Pyrak, Vrix, Grundo, Böm et Octavia; carnet d'enquête gratuit à récupérer à l'arrivée et indices, jeux et installations dans six territoires. Le parcours libre fait partie de la visite ordinaire; ne pas le présenter comme une entrée gratuite au zoo. Pour la visite guidée « Sur la piste des monstres », préciser **6 ans minimum**, **1 h 30**, **15 participants maximum**, **14 € à partir de 11 ans et 12 € de 6 à 10 ans**, **en plus du billet ZooParc**; les mineurs sont accompagnés d'un adulte. La réservation est obligatoire, mais possible le jour même sur place selon disponibilités; les conditions sont non remboursables. La fiche annonce un rendez-vous à **17 h 30 au Campement d'Alva, kiosque Grand Koudou près du Dôme Équatorial**, tous les jours pendant les vacances scolaires et les samedis hors vacances : revérifier la disponibilité à la date choisie. Mentionner la sensibilité éventuelle aux effets sonores et aux grandes silhouettes, sans prétendre que les personnages sont dangereux. Durant la Toussaint, distinguer les rencontres de mascottes et **le 31 octobre seulement** les bonbons proposés aux enfants déguisés en boutique, sans les promettre sur toute la saison. Le déroulement de nuit dépend des heures de fermeture réelles du zoo.

## Sources de départ
Pages officielles MonstroZoo, réservation de « Sur la piste des monstres », tarifs des activités et actualité du 14 octobre 2026 sur la Toussaint et Halloween. Priorité aux conditions actuelles de réservation pour arbitrer une formulation générale moins précise.

## Affiliation
Pour l'accès au zoo, **Tiqets propose bien le billet d'entrée ordinaire**, qui donne accès au parcours libre. Vérifier date, prix final et conditions du billet; **ne pas promettre** que la visite guidée est incluse. Aucun partenaire confirmé pour le supplément guidé. Pour un séjour de deux jours, les **Pagodes de Beauval** sur Booking.com proposent des chambres familiales à Saint-Aignan : disponibilité, capacité réelle et conditions de réservation à contrôler.

## Continuations internes
Renvoyer naturellement au guide Fam-Space [Beauval à la Toussaint 2026](/articles/voyages/beauval-a-la-toussaint-2026-billets-duree-de-visite-et-hebergement/) pour les billets généraux, la durée du séjour et l'organisation des vacances; ne pas reproduire ses explications. Le guide [ZooParc de Beauval : une ou deux journées, hôtel et budget](/articles/voyages/zooparc-de-beauval-en-famille-en-2026-un-ou-deux-jours-quel-hotel-et-quel-budget-prevoir/) couvre déjà les hôtels, transports, poussettes et budgets familiaux. Conserver ici les **conditions propres à MonstroZoo** et la comparaison des deux manières de participer.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/voyages/beauval-a-la-toussaint-2026-billets-duree-de-visite-et-hebergement/ | Beauval à la Toussaint 2026: billets, durée de visite et hébergement | voyages | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/zooparc-de-beauval-en-famille-en-2026-un-ou-deux-jours-quel-hotel-et-quel-budget-prevoir/ | ZooParc de Beauval: billets, 1 ou 2 jours, hôtel et budget 2026 | voyages | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/parentalite/chateau-de-chamerolles-en-famille-visite-libre-ou-guidee-en-2026/ | Château de Chamerolles en famille: visite libre ou guidée en 2026 ? | parentalite | Chilleurs-aux-Bois, Loiret, Centre-Val de Loire
- /articles/sorties/chateau-de-bonaguil-avec-des-enfants-visite-libre-ou-guidee/ | Château de Bonaguil avec des enfants: visite libre ou guidée ? | sorties | Fumel, Lot-et-Garonne, Nouvelle-Aquitaine
- /articles/sorties/tours-de-merle-en-famille-visite-libre-guidee-ou-theatralisee-en-2026/ | Tours de Merle en famille: visite libre, guidée ou théâtralisée en 2026 ? | sorties | Saint-Geniez-ô-Merle, Corrèze, Nouvelle-Aquitaine
- /articles/cuisine/maison-de-la-fourme-d-ambert-visite-libre-ou-guidee-avec-des-enfants/ | Maison de la Fourme d'Ambert: visite libre ou guidée avec des enfants? | cuisine | Ambert, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/ | Noël à Trévarez 2026 en famille: dates, horaires et réservation | evenements | Saint-Goazec, Finistère, Bretagne
- /articles/sorties/beauval-ou-nausicaa-en-famille-quelle-grande-sortie-choisir-en-2026/ | Beauval ou Nausicaá en famille: quelle grande sortie choisir en 2026? | sorties
- /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | bd BOUM 2026 à Blois en famille: ateliers, expositions et cinéma | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/center-parcs-les-hauts-de-bruyeres-en-famille-quel-cottage-choisir-apres-la-renovation/ | Center Parcs Les Hauts de Bruyères en famille: quel cottage choisir après la rénovation? | voyages | Chaumont-sur-Tharonne, Loir-et-Cher, Centre-Val de Loire
- /articles/vie-pratique/transport-scolaire-remi-41-que-faire-apres-la-rentree/ | Transport scolaire Rémi 41: que faire après la rentrée ? | vie-pratique | Romorantin-Lanthenay, Loir-et-Cher, Centre-Val de Loire
- /articles/activites/balade-en-bateau-a-saint-dye-sur-loire-journee-pique-nique-ou-crepuscule/ | Balade en bateau à Saint-Dyé-sur-Loire: journée, pique-nique ou crépuscule ? | activites | Saint-Dyé-sur-Loire, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/noel-a-chambord-2026-avec-des-enfants-quand-venir-et-que-prevoir/ | Noël à Chambord 2026 avec des enfants: quand venir et que prévoir | evenements | Chambord, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/blois-sans-voiture-en-2026-3-jours-pour-chambord-cheverny-et-le-centre-ville/ | Blois sans voiture en 2026: 3 jours pour Chambord, Cheverny et le centre-ville | voyages | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/sorties/chateau-de-chambord-en-famille-tarifs-2026-activites-et-conseils-de-visite/ | Château de Chambord en famille: tarifs 2026, activités et conseils de visite | sorties | Chambord, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | Luminescences 2026-2027 au zoo d'Amnéville: billets, tarifs et visite en famille | evenements | Amnéville, Moselle, Grand Est
- /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | Salon du Cheval de Paris 2026 en famille: animations, jumping et billets | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne
- /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | Foire de Dijon 2026 avec les enfants: gratuités, ateliers et Ferme Côte-d'Or | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | Foire de Grenoble 2026 en famille: jours gratuits, programme et tarifs | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | Equita Lyon 2026 avec des enfants: billets, Village Enfants et spectacles | evenements | Chassieu, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine

### Historique Radar lié

- opportunity | /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | 2026-10-18T19:49:09.191Z
- opportunity | /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | 2026-10-21T10:43:46.144Z
- opportunity | /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | 2026-10-21T16:31:41.000Z
- opportunity | /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | 2026-10-21T13:33:34.395Z
- opportunity | /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | 2026-10-22T09:37:18.560Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z
- opportunity | /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | 2026-10-22T04:59:04.773Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
