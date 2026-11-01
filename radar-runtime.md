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
title: "Noël 2026 à Chambéry en famille : marché, village ou Fabrique de Noël ?"
subtitle: Choisir entre les chalets, les animations du Palais de Justice et les ateliers du 12 décembre
summary: "À Chambéry, comparez les deux espaces de Noël ouverts du 27 novembre au 3 janvier et le marché artisanal du 12 décembre : horaires, activités pour enfants, coûts et accès."
category: evenements
location:
  city: Chambéry
  department: Savoie
  region: Auvergne-Rhône-Alpes
keywords:
  - Noël Chambéry 2026 famille
  - marché de Noël Chambéry 2026 horaires
  - village de Noël Palais de Justice Chambéry
  - Fabrique de Noël Rubanox 12 décembre 2026
sources:
  - title: Ville de Chambéry — Marché et village de Noël 2026
    url: https://www.chambery.fr/actualite/1695/9-le-marche-de-noel-revient-a-chambery-du-27-novembre-au-3-janvier.htm
  - title: Ville de Chambéry — Marché artisanal et Fabrique de Noël du 12 décembre
    url: https://www.chambery.fr/agenda/3638/316-marche-de-noel-artisanal-fabrique-de-noel.htm
  - title: Ville de Chambéry — Programme de Noël 2026, encore en préparation
    url: https://www.chambery.fr/493-noel.htm
  - title: Ville de Chambéry — Stationnement en centre-ville
    url: https://www.chambery.fr/390-je-viens-en-centre-ville-en-voiture.htm
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel
  decision: "Choisir la sortie de Noël la plus adaptée à l'âge des enfants, au budget et à la date : chalets et Père Noël, village gourmand et concerts, ou ateliers créatifs le 12 décembre."
  affiliationPotential: "Kyriad Chambéry Centre - Curial : chambre familiale ou studio jusqu'à quatre personnes repérés sur Booking.com (https://www.booking.com/hotel/fr/kyriad-chambery-centre.fr.html), près du centre ; disponibilité, couchages et prix à vérifier aux dates retenues. Pas de billetterie partenaire naturelle pour les marchés."
  gsc:
    retrievedAt: 2026-11-01T04:25:25+01:00
    dataThrough: 2026-10-29
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Chambéry — Marché et village de Noël 2026 »; aucune page forte GSC n'est requise.
---

## Mission retenue
Comparer trois expériences de Noël à Chambéry, sans transformer la page en guide général de la ville.

## Pourquoi cette mission
Les dates et les deux lieux principaux sont publiés par la Ville, ainsi qu'un rendez-vous artisanal distinct le 12 décembre. Aucun article Noël à Chambéry ni mission concurrente locale n'apparaît dans le catalogue et l'historique fournis ; le guide de week-end existant traite les visites permanentes. Le refresh Futuroween concerne une saison terminée ; Lumigny est déjà complet et son signal GSC « uncertain » ne justifie pas de modification. Les expansions de la page forte « transports à Paris » croisent des articles existants sur les titres, Navigo Liberté et les trajets : priorité à cette occasion datée.

## Décision du lecteur
Aider une famille à choisir le bon lieu et le bon jour, en distinguant la promenade parmi les chalets, une pause avec animations et restauration, et une activité créative à réserver.

## Faits à traiter
- Marché boulevard de la Colonne / place des Éléphants : 37 chalets, Maison du Père Noël, du 27 novembre 2026 au 3 janvier 2027, 11 h–21 h tous les jours, jusqu'à 22 h vendredi et samedi.
- Village place du Palais de Justice–Robert Badinter : restauration, concerts, Maison du pain d'épices, mêmes dates, 11 h–21 h, jusqu'à 23 h vendredi et samedi.
- Fabrique de Noël à Rubanox, 235 avenue Alsace-Lorraine : samedi 12 décembre, 10 h–18 h, 50 artisans, entrée au marché libre, ateliers créatifs payants sur inscription. Vérifier âges, prix et modalités avant de les annoncer.
- Programme des parades et horaires du Père Noël non encore détaillés par la Ville : ne rien inventer. Vérifier accessibilité poussette, sanitaires, transport depuis la gare et parkings ; ne pas reprendre les gratuités de Noël 2025 comme si elles valaient pour 2026.
- Événement saisonnier jusqu'au 3 janvier 2027.

## Sources de départ
Les quatre pages municipales du frontmatter, en priorité les deux annonces datées de 2026.

## Affiliation
Pour une famille venue en week-end, examiner le Kyriad Chambéry Centre - Curial sur Booking.com, avec une capacité familiale affichée jusqu'à quatre personnes ; vérifier les conditions réelles avant de conseiller l'offre. Aucune réservation partenaire nécessaire pour les marchés eux-mêmes.

## Continuations internes
- Le guide « Chambéry en famille : un week-end entre éléphants et sciences » (/articles/voyages/chambery-en-famille-un-week-end-entre-elephants-et-sciences/) prend le relais pour les musées, la vieille ville et les idées de visite hors Noël.
- Le guide « Voyager en train avec des enfants » (/articles/voyages/voyager-train-enfants-ete-2026-conseils/) peut compléter les conseils de trajet si utile, sans répéter son contenu.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | Noël 2026 à Brest en famille: marché, projections et horaires | evenements | Brest, Finistère, Bretagne
- /articles/maison/emprunter-un-broyeur-a-grand-chambery-electrique-ou-thermique-que-choisir/ | Emprunter un broyeur à Grand Chambéry: électrique ou thermique, que choisir? | maison | Chambéry, Savoie, Auvergne-Rhône-Alpes
- /articles/voyages/chambery-en-famille-un-week-end-entre-elephants-et-sciences/ | Chambéry en famille: un week-end entre éléphants et sciences | voyages | Chambéry, Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | Noël 2026 à Toulon en famille: marché, patinoire et horaires | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/sorties/tresor-verney-chambery-enfants-2026/ | Le trésor du Verney à Chambéry: les séances 2026 sont terminées | sorties | Chambéry, Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | Noël à Caen 2026 en famille: marché de Noël et visite illuminée | evenements | Caen, Calvados, Normandie
- /articles/vie-pratique/carte-okay-savoie-2026-2027-comment-obtenir-et-utiliser-les-80-du-collegien/ | Carte OKAY Savoie 2026-2027: comment obtenir et utiliser les 80 € du collégien | vie-pratique | Chambéry, Savoie, Auvergne-Rhône-Alpes
- /articles/sorties/les-menuires-sans-ski-en-famille-luges-piscines-et-balades-en-hiver/ | Les Menuires sans ski en famille: luges, piscines et balades en hiver | sorties | Les Belleville, Savoie, Auvergne-Rhône-Alpes
- /articles/bons-plans/ski-a-aussois-en-famille-en-2026-2027-forfaits-et-budget/ | Ski à Aussois en famille en 2026-2027: forfaits et budget | bons-plans | Aussois, Savoie, Auvergne-Rhône-Alpes
- /articles/parentalite/montchavin-les-coches-avec-un-bebe-garderie-horaires-et-sejour-d-hiver/ | Montchavin-Les Coches avec un bébé: garderie, horaires et séjour d'hiver | parentalite | Montchavin-Les Coches, Savoie, Auvergne-Rhône-Alpes
- /articles/cuisine/visiter-une-cooperative-de-beaufort-avec-des-enfants-a-val-cenis/ | Visiter une coopérative de Beaufort avec des enfants à Val Cenis | cuisine | Val Cenis, Savoie, Auvergne-Rhône-Alpes
- /articles/activites/croisiere-a-chanaz-en-famille-tarifs-2026-duree-et-conseils/ | Croisière à Chanaz en famille: tarifs 2026, durée et conseils | activites | Chanaz, Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/grand-bivouac-2026-a-albertville-en-famille-preparer-sa-journee-au-festival/ | Grand Bivouac 2026 à Albertville en famille: préparer sa journée au festival | evenements | Albertville, Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/tous-en-sons-2026-a-marseille-quel-spectacle-choisir-selon-l-age-des-enfants/ | Tous en Sons ! 2026 à Marseille: spectacles enfants, âges et tarifs | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | Noël à Bayeux 2026 en famille: marché et Galopades | evenements | Bayeux, Calvados, Normandie
- /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | Lumières de Laval 2026 en famille: marchés, grande roue et croisière | evenements | Laval, Mayenne, Pays de la Loire
- /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | Festival des Petits Explorateurs 2026 à Dijon: ateliers, horaires et tarifs | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille/ | Flottins d’Évian 2026: un village de Noël en bois flotté à découvrir en famille | evenements | Évian-les-Bains, Haute-Savoie, Auvergne-Rhône-Alpes

### Historique Radar lié

- refresh | /articles/vie-pratique/carte-okay-savoie-2026-2027-comment-obtenir-et-utiliser-les-80-du-collegien/ | 2026-10-06T08:50:37.159Z
- opportunity | /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | 2026-10-30T03:27:02.483Z
- opportunity | /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | 2026-10-30T09:27:15.122Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | 2026-10-30T06:28:26.726Z
- opportunity | /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | 2026-10-31T10:28:17.432Z
- opportunity | /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | 2026-10-30T15:36:05.374Z
- opportunity | /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | 2026-10-30T21:26:32.584Z
- opportunity | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-10-30T18:26:56.039Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
