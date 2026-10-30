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
title: "Noël à Chartres 2026 en famille : marché ou illuminations, quel soir venir ?"
subtitle: Choisir sa date entre les projections gratuites et le marché, sans multiplier les kilomètres avec les enfants
summary: Dates, horaires et parcours court pour combiner le marché de Noël et les illuminations de Chartres en famille en 2026.
category: evenements
location:
  city: Chartres
  department: Eure-et-Loir
  region: Centre-Val de Loire
keywords:
  - Noël Chartres 2026
  - Chartres en lumières fête Noël 2026
  - marché de Noël Chartres 2026
  - illuminations Chartres avec enfants
sources:
  - title: Ville de Chartres - Agenda des animations pour les enfants
    url: https://www.chartres.fr/vacances-a-chartres/enfants
  - title: Chartres en lumières - Présentation et horaires officiels 2026
    url: https://www.chartresenlumieres.com/fr/a-propos/quest-ce-que-chartres-en-lumieres
  - title: Les Vitrines de Chartres - Illuminations de Noël 2026
    url: https://www.vitrines-chartres.com/agenda/illuminations-de-noel-2026-371.html
  - title: Les Vitrines de Chartres - Marché de Noël 2026
    url: https://www.vitrines-chartres.com/agenda/marche-de-noel-de-chartres-2025-148.html
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir
  decision: Savoir quand venir pour voir les illuminations seules ou les associer au marché de Noël, et choisir un parcours réaliste avec des enfants.
  affiliationPotential: "Illuminations et marché gratuits : pas de billet à vendre. Hébergement familial à Chartres sur Booking.com vérifié pour les familles qui restent une nuit ; vérifier les couchages et la proximité gare/cathédrale avant de conseiller une offre précise."
  gsc:
    retrievedAt: 2026-10-30T01:28:25+01:00
    dataThrough: 2026-10-27
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Chartres - Agenda des animations pour les enfants »; aucune page forte GSC n'est requise.
---

## Mission retenue
Préparer une sortie de Noël à Chartres en distinguant le parcours lumineux gratuit du marché de Noël, dont les périodes ne coïncident pas entièrement.

## Pourquoi cette mission
Opportunité officielle à venir, utile pour choisir une date avant les réservations de décembre. Aucun article Chartres sur Noël ou les illuminations dans le catalogue ; les trois pages locales portent sur d'autres besoins. Le refresh Futuroween, pourtant premier signal GSC, est déjà complet et se termine le 1er novembre : la baisse paraît surtout saisonnière. Une expansion de la page forte sur les transports parisiens recouperait les guides existants sur Navigo Liberté+ et les poussettes.

## Décision du lecteur
Savoir si la famille peut venir avant l'ouverture du marché, quel soir combiner les deux et quelle partie des illuminations visiter sans faire le circuit entier.

## Faits à traiter
- Les Vitrines annoncent les décors de Noël du 27 novembre 2026 au 3 janvier 2027 ; la Ville présente « Chartres en lumières fête Noël » du 29 novembre au 3 janvier. Expliquer les deux annonces sans les confondre avec la saison générale d'avril à janvier.
- Marché du 4 au 24 décembre : dimanche-jeudi 12 h-19 h, vendredi 12 h-20 h, samedi 10 h-20 h, 24 décembre 10 h-16 h ; entrée gratuite. L'organisateur écrit par erreur « mercredi 24 décembre » : en 2026, c'est un jeudi. Son nouvel emplacement doit être confirmé avant d'être affirmé.
- Illuminations gratuites, généralement jusqu'à 23 h en période hivernale ; horaires à revérifier au calendrier du jour. Parcours intégral de 5 à 7 km : proposer une boucle courte autour de la cathédrale plutôt que de promettre de tout voir avec une poussette.
- Distinguer projections, chalets et éventuelles animations ponctuelles ; vérifier accès depuis la gare, pauses, froid et retour des enfants.

## Sources de départ
Ville de Chartres, organisateur Chartres en lumières et association organisatrice du marché Les Vitrines de Chartres (liens officiels ci-dessus).

## Affiliation
Aucune billetterie naturelle pour les deux activités gratuites. Pour un séjour avec nuitée, Booking.com propose des hôtels familiaux à Chartres, dont Campanile PRIME Chartres Centre Gare Cathédrale ; vérifier capacité et conditions avant recommandation.

## Continuations internes
- Ne pas transformer cette page en guide général de Chartres ni en catalogue d'hébergements.
- Aucun article Fam Space existant sur le même événement ; ne pas forcer un lien vers les autres pages Chartres sans utilité pour la sortie.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/lumieres-de-noel-a-montbeliard-2026-quel-jour-venir-avec-des-enfants/ | Lumières de Noël à Montbéliard 2026: quel jour venir avec des enfants? | evenements | Montbéliard, Doubs, Bourgogne-Franche-Comté
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/vie-pratique/accueil-periscolaire-a-chartres-forfait-ou-carte-occasionnelle-en-2026-2027/ | Accueil périscolaire à Chartres: forfait ou carte occasionnelle en 2026-2027 ? | vie-pratique | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/cuisine/apres-une-cueillette-en-eure-et-loir-5-recettes-faciles-a-faire-avec-les-enfants/ | Après une cueillette en Eure-et-Loir: 5 recettes faciles à faire avec les enfants | cuisine | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/maison/recycleries-autour-de-chartres-ou-donner-et-acheter-d-occasion/ | Recycleries autour de Chartres: où donner et acheter d'occasion ? | maison | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | Noël à Fontevraud 2026: patinoire, marché, dates et tarifs en famille | evenements | Fontevraud-l'Abbaye, Maine-et-Loire, Pays de la Loire
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/activites/chateau-de-maintenon-avec-de-jeunes-enfants-ce-qu-il-faut-prevoir/ | Château de Maintenon avec de jeunes enfants: ce qu'il faut prévoir | activites | Maintenon, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | Festival des Petits Explorateurs 2026 à Dijon: ateliers, horaires et tarifs | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille/ | Flottins d’Évian 2026: un village de Noël en bois flotté à découvrir en famille | evenements | Évian-les-Bains, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | Festival BD Colomiers 2026 en famille: programme, tarifs et accès | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | Ville de Noël d’Arras 2026 en famille: horaires, attractions et budget | evenements | Arras, Pas-de-Calais, Hauts-de-France
- /articles/evenements/noel-d-autrefois-2026-au-musee-de-plein-air-quel-jour-venir-en-famille/ | Noël d’autrefois 2026 à Villeneuve-d’Ascq: dates, ateliers et accès en famille | evenements | Villeneuve-d'Ascq, Nord, Hauts-de-France
- /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | Marché de Noël 100 % Côte-d’Or à Dijon 2026: horaires, spectacles et Père Noël | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/festival-du-cerf-volant-2027-a-chatelaillon-plage-le-guide-des-familles/ | Festival du cerf-volant 2027 à Châtelaillon-Plage: le guide des familles | evenements | Châtelaillon-Plage, Charente-Maritime, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Clermont-Ferrand 2026 en famille: horaires, animations et accès | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-montpellier-2026-en-famille-dates-fermetures-et-attractions/ | Marché de Noël de Montpellier 2026 en famille: horaires, jours fermés et manèges | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | Noël des Alpes 2026 à Annecy en famille: marché, patinoire et illuminations | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | Marchés de Noël de Tours 2026 en famille: lieux, dates et budget | evenements | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël de Saint-Étienne 2026 en famille: dates, horaires et accès | evenements | Saint-Étienne, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/la-seine-musicale-en-famille-en-2027-quels-concerts-et-ateliers-selon-l-age/ | La Seine Musicale en famille en 2027: quels concerts et ateliers selon l'âge ? | evenements | Boulogne-Billancourt, Hauts-de-Seine, Île-de-France

### Historique Radar lié

- opportunity | /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | 2026-10-29T23:28:55.064Z
- opportunity | /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | 2026-10-30T03:27:02.483Z
- opportunity | /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | 2026-10-29T14:26:32.277Z
- opportunity | /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/ | 2026-10-29T11:32:05.289Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/marche-de-noel-de-montpellier-2026-en-famille-dates-fermetures-et-attractions/ | 2026-10-29T08:29:37.767Z
- opportunity | /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T18:37:09.008Z
- opportunity | /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | 2026-10-28T21:29:26.054Z
- opportunity | /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | 2026-10-28T01:34:03.741Z
- opportunity | /articles/evenements/noel-d-autrefois-2026-au-musee-de-plein-air-quel-jour-venir-en-famille/ | 2026-10-29T17:29:29.382Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
