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
title: "Ville de Noël d'Arras 2026 en famille : grande roue, patinoire et horaires"
subtitle: Quand venir, quelles activités prévoir avec les enfants et quel budget réserver aux attractions
summary: "Du 27 novembre au 27 décembre 2026, préparez une visite familiale de la Ville de Noël d'Arras : horaires, attractions, accès et dépenses à vérifier."
category: evenements
location:
  city: Arras
  department: Pas-de-Calais
  region: Hauts-de-France
keywords:
  - Ville de Noël Arras 2026
  - marché de Noël Arras enfants
  - grande roue patinoire Arras Noël
sources:
  - title: Ville d'Arras — Ville de Noël 2026
    url: https://www.arras.fr/ville-de-noel
  - title: Arras Pays d'Artois Tourisme — Ville de Noël 2026, dates et horaires
    url: https://www.arraspaysdartois.com/agenda/ville-de-noel/
  - title: Ville d'Arras — Lieux emblématiques et attractions de la Ville de Noël
    url: https://arras.fr/page/lieux-emblematiques
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires
  decision: Choisir le moment et la durée de visite adaptés à l'âge des enfants, savoir quelles attractions privilégier et distinguer la promenade gratuite des activités payantes, sans se tromper d'horaires.
  affiliationPotential: "Marché en accès libre : aucune billetterie partenaire pertinente pour l'entrée. Pour une nuit sur place, Mercure Arras Centre Gare vérifié sur Booking.com : chambres familiales et lit bébé gratuit sur demande, sans prix ni disponibilité garantis aux dates de Noël."
  gsc:
    retrievedAt: 2026-10-29T02:27:59+01:00
    dataThrough: 2026-10-26
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville d'Arras — Ville de Noël 2026 »; aucune page forte GSC n'est requise.
---

## Mission retenue

Préparer la **Ville de Noël d'Arras 2026**, événement de centre-ville sur la Grand'Place et les places voisines, pour une sortie avec enfants, plutôt qu'un guide générique des marchés de Noël.

## Pourquoi cette mission

L'événement est officiellement annoncé du **27 novembre au 27 décembre 2026** et suffisamment documenté avant son ouverture. Le meilleur refresh GSC, Futuroween, présente un signal « uncertain » : l'article complet, déjà actualisé, couvre les dates et les choix de billets ; sa baisse d'impressions à l'approche de la fin du 1er novembre ne justifie pas de le réécrire. L'expansion envisageable depuis la page forte sur les transports parisiens risque de répéter les guides existants sur les titres, Navigo Liberté+, Orly, CDG et les poussettes. Arras répond à une décision saisonnière locale distincte. Aucun article Arras Noël dans les 848 articles du catalogue ni dans l'historique Radar ; l'article Cité Nature à Arras traite d'une autre sortie. Les marchés de Noël de Lille et Reims concernent d'autres villes.

## Décision du lecteur

Savoir quand venir en journée ou en soirée, prévoir un parcours court avec enfants, identifier les attractions adaptées et leur coût réel, puis choisir un accès simple sans voiture ou une nuit sur place.

## Faits à traiter

- **27 novembre–27 décembre 2026**, dimanche à jeudi **12 h–21 h**, vendredi et samedi **12 h–22 h 30**, **24 décembre 12 h–17 h**, **25 décembre fermé** : recouper à la rédaction avec la page officielle actualisée.
- Grand'Place, chalets, illuminations et grande roue ; la Ville présente aussi patinoire, petit train et maison du Père Noël. **Ne pas reprendre les tarifs ni créneaux de 2025 comme ceux de 2026** : vérifier fonctionnement, âges, accessibilité, réservation et prix 2026 avant toute affirmation.
- Distinguer **accès libre à la Ville de Noël** et activités éventuellement payantes ; prévoir une option courte de jour pour les petits et une option illuminations en soirée.
- Vérifier itinéraire depuis la gare, stationnement et accès piéton, toilettes, poussette, change bébé, repas et solutions de repli météo ; ne rien promettre sans source.

## Sources de départ

- https://www.arras.fr/ville-de-noel
- https://www.arraspaysdartois.com/agenda/ville-de-noel/
- https://arras.fr/page/lieux-emblematiques

## Affiliation

Aucun billet partenaire pertinent vérifié pour le marché gratuit. Pour une famille qui reste dormir, **Mercure Arras Centre Gare** est effectivement proposé sur Booking.com, près de la gare et du centre, avec chambres familiales et lit bébé gratuit sur demande : https://www.booking.com/hotel/fr/mercure-atria-arras-centre.html . Vérifier dates, occupation et conditions avant de conseiller l'offre ; ne pas annoncer de disponibilité.

## Continuations internes

- Le guide **Cité Nature à Arras en famille** peut servir de solution intérieure distincte si la météo se dégrade, sans recopier ses expositions ni ses tarifs : /articles/sorties/cite-nature-a-arras-en-famille-quelles-expositions-choisir-cet-automne/
- Ne pas développer les marchés de Noël de Lille ou Reims dans cet article : les pages existantes traitent déjà ces villes.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/ | Marché de Noël de Lille 2026 en famille: village, Grande Roue et infos pratiques | evenements | Lille, Nord, Hauts-de-France
- /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | Marchés de Noël de Tours 2026 en famille: lieux, dates et budget | evenements | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | Noël à Fontevraud 2026: patinoire, marché, dates et tarifs en famille | evenements | Fontevraud-l'Abbaye, Maine-et-Loire, Pays de la Loire
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/sorties/cite-nature-a-arras-en-famille-quelles-expositions-choisir-cet-automne/ | Cité Nature à Arras en famille: quelles expositions choisir cet automne? | sorties | Arras, Pas-de-Calais, Hauts-de-France
- /articles/evenements/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/ | Festival de la Sainte-Barbe 2026 à Lens-Liévin: programme en famille du 4 au 6 décembre | evenements | Lens, Pas-de-Calais, Hauts-de-France
- /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | Toussaint 2026 à Nausicaá: ateliers en journée et nocturne d’Halloween | evenements | Boulogne-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/voyages/maison-du-marais-pres-de-saint-omer-bateau-et-expositions-en-famille/ | Maison du Marais près de Saint-Omer: bateau et expositions en famille | voyages | Saint-Martin-lez-Tatinghem, Pas-de-Calais, Hauts-de-France
- /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | Halloween 2026 à la Tour de l'Horloge de Guînes: visites, contes et nocturne | evenements | Guînes, Pas-de-Calais, Hauts-de-France
- /articles/sorties/toussaint-2026-au-louvre-lens-quelle-activite-choisir-selon-l-age/ | Toussaint 2026 au Louvre-Lens: quelle activité choisir selon l'âge? | sorties | Lens, Pas-de-Calais, Hauts-de-France
- /articles/sorties/parc-bagatelle-en-famille-quelles-attractions-selon-la-taille-des-enfants/ | Parc Bagatelle en famille: quelles attractions selon la taille des enfants? | sorties | Merlimont, Pas-de-Calais, Hauts-de-France
- /articles/bons-plans/nausicaa-a-8-pour-les-adultes-et-6-pour-les-enfants-qui-peut-profiter-des-dimanches-boulonnais/ | Nausicaá à 8 € pour les adultes et 6 € pour les enfants: qui peut profiter des Dimanches Boulonnais? | bons-plans | Boulogne-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/parentalite/creche-a-l-abordage-a-etaples-accueil-ponctuel-ou-regulier-que-choisir/ | Crèche À l'abordage à Étaples: accueil ponctuel ou régulier, que choisir ? | parentalite | Étaples-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/cuisine/ratte-du-touquet-eau-vapeur-ou-four-quelle-cuisson-choisir/ | Ratte du Touquet: eau, vapeur ou four, quelle cuisson choisir? | cuisine | Le Touquet-Paris-Plage, Pas-de-Calais, Hauts-de-France
- /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | Noël des Alpes 2026 à Annecy en famille: marché, patinoire et illuminations | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël de Saint-Étienne 2026 en famille: dates, horaires et accès | evenements | Saint-Étienne, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/la-seine-musicale-en-famille-en-2027-quels-concerts-et-ateliers-selon-l-age/ | La Seine Musicale en famille en 2027: quels concerts et ateliers selon l'âge ? | evenements | Boulogne-Billancourt, Hauts-de-Seine, Île-de-France
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires et accès | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur

### Historique Radar lié

- opportunity | /articles/evenements/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/ | 2026-10-27T04:28:31.006Z
- opportunity | /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | 2026-10-12T10:40:26.563Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z
- opportunity | /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T18:37:09.008Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | 2026-10-28T21:29:26.054Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
