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
title: "Tous en Sons ! 2026 à Marseille : quel spectacle choisir selon l'âge des enfants ?"
subtitle: "Concerts, ciné-concert et spectacles gratuits du 1er au 23 décembre : âges, tarifs et réservations"
summary: "Guide familial du festival Tous en Sons ! 2026 à Marseille : choisir une séance réellement tout public selon l'âge, le budget, la durée et le lieu, sans confondre avec les représentations scolaires."
category: evenements
location:
  city: Marseille
  department: Bouches-du-Rhône
  region: Provence-Alpes-Côte d'Azur
keywords:
  - Tous en Sons 2026 Marseille
  - festival musique jeune public Marseille décembre 2026
  - spectacles enfants Marseille décembre
  - concert famille Marseille Tous en Sons
sources:
  - title: Tous en Sons ! - programme officiel 2026 tout public
    url: https://tousensons.fr/programme-tous-en-sons-8-2026-tout-public/
  - title: Tous en Sons ! - Même Pas Peur !
    url: https://tousensons.fr/spectacle/meme-pas-peur/
  - title: Tous en Sons ! - En Apparence
    url: https://tousensons.fr/spectacle/en-apparence/
  - title: Tous en Sons ! - Le Rêve de Sam et autres courts
    url: https://tousensons.fr/spectacle/le-reve-de-sam-et-autres-courts/
  - title: Office de tourisme de Marseille - Tous en Sons ! 2026
    url: https://www.marseille-tourisme.com/vivez-marseille-blog/agenda/tous-en-sons-festival-de-creation-musique-jeunesse-marseille-1er-fr-6870942/
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: tous-en-sons-2026-a-marseille-quel-spectacle-choisir-selon-l-age-des-enfants
  decision: Choisir un spectacle tout public réellement adapté à l'âge des enfants et au budget, puis savoir où et comment réserver la bonne séance à Marseille.
  affiliationPotential: "Pas d'offre partenaire vérifiée pour les billets du festival : réservation auprès des salles ou de l'organisateur. Hébergement secondaire vérifié : Staycity Aparthotels Marseille Centre Vieux Port sur Booking.com, avec appartements équipés d'une cuisine, pour les familles venues plusieurs jours ; disponibilité et capacité à vérifier aux dates retenues."
  gsc:
    retrievedAt: 2026-10-31T02:28:22+01:00
    dataThrough: 2026-10-28
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Tous en Sons ! - programme officiel 2026 tout public »; aucune page forte GSC n'est requise.
---

## Mission retenue
Préparer un guide de choix des représentations **tout public à Marseille** du festival musical jeune public Tous en Sons !, 8e édition du 1er au 23 décembre 2026. Ne pas mélanger les spectacles marseillais avec ceux de Lourmarin, Pertuis, Venelles ou La Tour-d'Aigues.

## Pourquoi cette mission
Programme officiel 2026 dévoilé le 20 octobre, réservations déjà ouvertes pour plusieurs séances : sujet saisonnier documenté et actionnable maintenant, sans doublon direct parmi les 874 articles. Le meilleur refresh GSC, Futuroween, se termine le 1er novembre et son article couvre déjà les choix essentiels ; sa baisse d'impressions n'établit pas une perte de classement. Une expansion sur le planétarium de la Cité des sciences est possible mais moins urgente que les réservations du festival.

## Décision du lecteur
Trouver le spectacle adapté à l'âge de son enfant, distinguer entrée libre sur réservation et billet payant, puis sélectionner une date, un horaire et une salle réellement accessibles à sa famille.

## Faits à traiter
- Dès 3 ans : « Même Pas Peur ! » le 8 décembre à 18h30 à l'Hypérion, entrée libre **sur réservation** ; « Le Rêve de Sam et autres courts », ciné-concert de 41 min, le 23 décembre à 10h ou 14h30 au HangArt, entrée libre **sur réservation**.
- Dès 4 ans : « Cette nuit une chouette m'a dit… » le 17 décembre à 18h30 à la Cité de la Musique, 5 €.
- Dès 5 ans : « Le Bal des Gourmand·es » le 16 décembre à 15h au Mucem, 6/8 €, modalités de réservation encore en cours de finalisation au 31 octobre.
- Dès 7 ans : « En Apparence » le 12 décembre à 15h et 19h au Théâtre Massalia, 7/10 € ; dès 8 ans : « Le Carnaval des animaux » le 1er décembre à 19h à La Criée, 6/26 €, dernières places signalées par l'organisateur.
- Vérifier les âges, durées, tarifs par catégorie, réservations, horaires et adresses sur **chaque fiche officielle**, car la page globale mélange Marseille et d'autres communes et possède une programmation scolaire distincte. Ne pas promettre de places disponibles.

## Sources de départ
Programme et fiches des spectacles ci-dessus ; office de tourisme pour les lieux et dates.

## Affiliation
Billets du festival : aucun partenaire direct vérifié, ne pas remplacer la billetterie des salles par une offre non pertinente. Pour un séjour, proposer éventuellement l'appartement avec cuisine Staycity Aparthotels Marseille Centre Vieux Port sur Booking.com (https://www.booking.com/hotel/fr/staycity-aparthotels-centre-vieux-port.fr.html), sans garantir de disponibilité.

## Continuations internes
- Pour une visite du Mucem en dehors du spectacle, renvoyer vers `/articles/sorties/mucem-en-famille-billets-gratuites-et-conseils-pour-la-visite/` au lieu de répéter tarifs et parcours du musée.
- Pour organiser plusieurs jours à Marseille, renvoyer vers `/articles/voyages/marseille-en-famille-pendant-3-jours-itineraire-simple-autour-du-vieux-port/`.
- Les fêtes et la Foire aux santons sont un autre programme : simple renvoi possible vers `/articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/`, sans développer ce sujet ici.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | Fête de la mer 2026 à Marseille avec des enfants: quelle escale choisir? | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/sorties/cosquer-mediterranee-avec-des-enfants-age-poussette-tarifs/ | Cosquer Méditerranée avec des enfants: que peut-on visiter selon leur âge? | sorties | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/activites/preau-des-accoules-a-marseille-faut-il-reserver-avant-de-venir-avec-des-enfants/ | Préau des Accoules à Marseille: faut-il réserver avant de venir avec des enfants? | activites | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/sorties/escale-borely-avec-des-enfants-du-david-au-bowl-a-pied/ | Escale Borély avec des enfants: du David au Bowl à pied | sorties | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/vie-pratique/consigne-a-marseille-saint-charles-avec-des-enfants-ou-laisser-valises-et-poussette/ | Consigne à Marseille Saint-Charles avec des enfants: où laisser valises et poussette? | vie-pratique | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/herofestival-marseille-2026-en-famille-billets-gratuite-enfants-et-conseils/ | HeroFestival Marseille 2026 en famille: billets, gratuité enfants et conseils | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/sorties/mucem-en-famille-billets-gratuites-et-conseils-pour-la-visite/ | Mucem Marseille en famille: tarifs 2026, billets et gratuités | sorties | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/maison/dechets-tri-mobile-a-marseille-quoi-apporter-sans-aller-a-la-decheterie/ | Déchets’tri mobile à Marseille: quoi apporter sans aller à la déchèterie? | maison | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | Foire aux santons de Marseille 2026: dates, inauguration et visite en famille | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/mucem-a-la-toussaint-2026-quelle-activite-en-ribambelle-choisir-selon-l-age/ | Mucem à la Toussaint 2026: le programme En Ribambelle avec des enfants | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/voyages/marseille-en-famille-pendant-3-jours-itineraire-simple-autour-du-vieux-port/ | Marseille en famille pendant 3 jours: itinéraire simple autour du Vieux-Port | voyages | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/ete-marseillais-2026-en-famille/ | Que faire avec les enfants pendant l’Été Marseillais 2026 ? | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/saint-remy-de-provence-en-famille-glanum-musees-et-entrees-gratuites/ | Saint-Rémy-de-Provence en famille: Glanum, musées et entrées gratuites | bons-plans | Saint-Rémy-de-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/sorties/carrieres-des-lumieres-avec-des-enfants-choisir-son-spectacle-et-preparer-la-visite/ | Carrières des Lumières avec des enfants: choisir son spectacle et préparer la visite | sorties | Les Baux-de-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges/ | Noël à Aix-en-Provence 2026 en famille: marchés, santons et manèges | evenements | Aix-en-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/bons-plans/arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir/ | Arles en famille à petit budget: quelles visites et quel pass choisir? | bons-plans | Arles, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/parentalite/maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles/ | Maison des Parents aux Pennes-Mirabeau: ateliers gratuits et accueil des familles | parentalite | Les Pennes-Mirabeau, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/cuisine/food-tour-a-aix-en-provence-avec-des-enfants-lequel-choisir-en-2026/ | Food tour à Aix-en-Provence avec des enfants: lequel choisir en 2026? | cuisine | Aix-en-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | Noël à Caen 2026 en famille: marché de Noël et visite illuminée | evenements | Caen, Calvados, Normandie
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | Noël à Bayeux 2026 en famille: marché et Galopades | evenements | Bayeux, Calvados, Normandie
- /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël | evenements | Angers, Maine-et-Loire, Pays de la Loire

### Historique Radar lié

- opportunity | /articles/sorties/cosquer-mediterranee-avec-des-enfants-age-poussette-tarifs/ | 2026-10-03T11:22:17.769Z
- opportunity | /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | 2026-10-06T16:58:51.946Z
- opportunity | /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | 2026-10-23T15:29:55.218Z
- opportunity | /articles/evenements/mucem-a-la-toussaint-2026-quelle-activite-en-ribambelle-choisir-selon-l-age/ | 2026-10-04T10:54:39.216Z
- opportunity | /articles/evenements/noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges/ | 2026-10-25T15:16:03.590Z
- opportunity | /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | 2026-10-30T15:36:05.374Z
- opportunity | /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | 2026-10-30T21:26:32.584Z
- opportunity | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-10-30T18:26:56.039Z
- opportunity | /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | 2026-10-30T12:36:12.349Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
