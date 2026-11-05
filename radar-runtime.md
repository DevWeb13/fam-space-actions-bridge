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
title: "Pokémon et biodiversité à Paris le 28 novembre 2026 : atelier dessin dès 10 ans"
subtitle: Un atelier gratuit pour relier les créatures Pokémon aux espèces réelles à la bibliothèque Gutenberg
summary: "Le 28 novembre 2026, la bibliothèque Gutenberg propose un atelier de dessin scientifique gratuit, sur réservation, pour les enfants dès 10 ans : découvrir les animaux et plantes qui inspirent les Pokémon."
category: activites
location:
  city: Paris
  department: Paris
  region: Île-de-France
keywords:
  - atelier Pokémon biodiversité Paris 28 novembre 2026
  - bibliothèque Gutenberg atelier dessin enfants
  - activité gratuite Paris dès 10 ans
sources:
  - title: Ville de Paris — Pokémon et Biodiversité
    url: https://www.paris.fr/evenements/pokemon-et-biodiversite-113313
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans
  decision: Savoir si l'atelier convient à son enfant de 10 ans ou plus, où et quand se présenter et comment réserver avant de se déplacer.
  affiliationPotential: Atelier gratuit sans billetterie commerciale. Pour une famille en séjour à Paris, Booking.com recense des hébergements familiaux dans le 15e arrondissement, dont Novotel Paris Centre Gare Montparnasse et YOOMA Urban Lodge Tour Eiffel ; vérifier localisation, capacité et disponibilité avant toute recommandation précise.
  gsc:
    retrievedAt: 2026-11-05T02:33:14+01:00
    dataThrough: 2026-11-02
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Paris — Pokémon et Biodiversité »; aucune page forte GSC n'est requise.
---

## Mission retenue
Atelier « Pokémon et Biodiversité », le samedi 28 novembre 2026 de 15 h à 16 h 30 à la bibliothèque Gutenberg, 8 rue de la Montagne d'Aulas, Paris 15e. Initiation au dessin naturaliste par points à l'encre de Chine, à partir des espèces animales et végétales ayant inspiré les Pokémon.

## Pourquoi cette mission
L'événement officiel est précis, daté et encore à venir. Aucune entrée Pokémon ou bibliothèque Gutenberg dans le catalogue compact ou l'historique Radar ; le MOBE d'Orléans traite la biodiversité sous une autre intention. Les baisses d'impressions des refresh prioritaires (Lumigny, transports parisiens, Grand Noël) n'établissent pas de défaut éditorial. L'expansion depuis une page forte n'offre pas ici de décision distincte mieux étayée que cet atelier concret.

## Décision du lecteur
Déterminer si l'atelier gratuit est adapté à l'âge de son enfant, réserver sa place et préparer le déplacement.

## Faits à traiter
Date, horaire 15 h–16 h 30, adresse, gratuité, âge minimum 10 ans et réservation obligatoire ; accessibilité indiquée pour plusieurs types de handicap sur la fiche officielle. Décrire le dessin à l'encre de Chine et la découverte des inspirations biologiques sans promettre un matériel offert ni une présence de personnages costumés. Vérifier les modalités de réservation auprès de la bibliothèque (01 45 54 69 76) ; ne pas inventer de places disponibles.

## Sources de départ
Ville de Paris, fiche officielle de l'événement : https://www.paris.fr/evenements/pokemon-et-biodiversite-113313 (mise à jour le 23 septembre 2026).

## Affiliation
Aucun achat nécessaire pour l'activité. Hébergement familial dans Paris 15e uniquement comme option secondaire pour un séjour, sans prix ni disponibilité présumés ; Booking.com présente notamment Novotel Paris Centre Gare Montparnasse et YOOMA Urban Lodge Tour Eiffel.

## Continuations internes
Ne pas réécrire un guide général de transports parisiens : renvoyer à l'article Fam Space « Transports à Paris avec des enfants ». Ne pas transformer cet atelier ponctuel en guide général sur la biodiversité ni le confondre avec le MOBE d'Orléans.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/atelier-pop-up-gratuit-a-paris-le-21-novembre-2026-creer-un-livre-anime-en-famille/ | Atelier pop-up gratuit à Paris le 21 novembre 2026: créer en famille dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/cerfs-volants-a-paris-le-21-novembre-2026-spectacle-ou-atelier-des-2-ans/ | Cerfs-volants à Paris le 21 novembre 2026: spectacle et atelier dès 2 ans | evenements | Paris, Paris, Île-de-France
- /articles/activites/atelier-laine-cardee-de-noel-a-paris-le-2-decembre-2026-creer-ses-decorations-des-7-ans/ | Atelier laine cardée de Noël à Paris le 2 décembre 2026: décorations dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/planete-ocean-a-paris-preparer-la-visite-en-famille/ | Planète Océan à Paris: préparer la visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/paris-plages-2026-en-famille/ | Paris Plages 2026: où se baigner et jouer avec des enfants | evenements | Paris, Paris, Île-de-France
- /articles/activites/jeux-nature-gratuits-au-parc-floral-de-paris-le-18-novembre-2026-quel-jeu-selon-l-age/ | Jeux nature gratuits au Parc floral de Paris le 18 novembre 2026 | activites | Paris, Paris, Île-de-France
- /articles/evenements/fete-des-rues-aux-enfants-2026-a-paris-ou-aller-selon-l-arrondissement/ | Fête des rues aux enfants 2026 à Paris: où aller selon l'arrondissement? | evenements | Paris, Paris, Île-de-France
- /articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/ | Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite | sorties | Paris, Paris, Île-de-France
- /articles/activites/atelier-scratch-gratuit-a-paris-le-7-novembre-2026-programmer-un-jeu-video-des-8-ans/ | Atelier Scratch gratuit à Paris le 7 novembre 2026: créer un jeu vidéo | activites | Paris, Paris, Île-de-France
- /articles/evenements/rencontres-du-ciel-et-de-l-espace-2026-a-paris-que-choisir-avec-des-enfants/ | Rencontres du ciel et de l’espace 2026 à Paris: ateliers, âges et billets en famille | evenements | Paris, Paris, Île-de-France
- /articles/activites/ateliers-textiles-au-musee-bourdelle-a-paris-styliste-ou-broderie-en-famille-en-2026/ | Ateliers textiles au musée Bourdelle à Paris: styliste ou broderie en famille | activites | Paris, Paris, Île-de-France
- /articles/cuisine/ateliers-cuisine-parent-enfant-a-paris-lesquels-choisir-selon-l-age-et-le-budget/ | Ateliers cuisine parent-enfant à Paris: lesquels choisir selon l’âge et le budget ? | cuisine | Paris, Paris, Île-de-France
- /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/ | Paris avec une poussette: métro, RER, bus ou tram, que choisir ? | voyages | Paris, Paris, Île-de-France
- /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | Féeries de Noël 2026 à Paris: parcours lumineux, billets et patinoire en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | Odyssée Lumineuse 2026-2027 à Paris: billets, dates et visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/bons-plans/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/ | Navigo Liberté+ en famille: tarifs enfants et choix du passe en 2026 | bons-plans | Paris, Paris, Île-de-France
- /articles/sorties/l-aquarium-tropical-de-la-porte-doree-en-famille/ | L’Aquarium tropical de la Porte Dorée en famille | sorties | Paris, Paris, Île-de-France
- /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | Créations & savoir-faire 2026 à Paris en famille: billets, ateliers et dates | evenements | Paris, Paris, Île-de-France
- /articles/activites/aquarium-de-touraine-en-famille-que-voir-avec-les-enfants/ | Aquarium de Touraine en famille: que voir avec les enfants ? | activites | Lussault-sur-Loire, Indre-et-Loire, Centre-Val de Loire
- /articles/activites/visiter-le-museum-du-havre-avec-des-enfants-que-decouvrir/ | Visiter le Muséum du Havre avec des enfants: que découvrir ? | activites | Le Havre, Seine-Maritime, Normandie
- /articles/activites/l-aventure-michelin-en-famille-a-clermont-ferrand/ | L’Aventure Michelin en famille à Clermont-Ferrand | activites | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/activites/grottes-de-sare-en-famille-visite-tarifs-et-conseils-pratiques/ | Grottes de Sare en famille: visite, tarifs et conseils pratiques | activites | Sare, Pyrénées-Atlantiques, Nouvelle-Aquitaine

### Historique Radar lié

- opportunity | /articles/activites/atelier-laine-cardee-de-noel-a-paris-le-2-decembre-2026-creer-ses-decorations-des-7-ans/ | 2026-11-04T18:34:22.540Z
- opportunity | /articles/activites/atelier-pop-up-gratuit-a-paris-le-21-novembre-2026-creer-un-livre-anime-en-famille/ | 2026-11-04T15:34:37.269Z
- opportunity | /articles/activites/atelier-scratch-gratuit-a-paris-le-7-novembre-2026-programmer-un-jeu-video-des-8-ans/ | 2026-11-04T08:27:47.912Z
- opportunity | /articles/activites/ateliers-textiles-au-musee-bourdelle-a-paris-styliste-ou-broderie-en-famille-en-2026/ | 2026-11-04T01:30:49.478Z
- opportunity | /articles/evenements/cerfs-volants-a-paris-le-21-novembre-2026-spectacle-ou-atelier-des-2-ans/ | 2026-11-03T19:37:26.112Z
- opportunity | /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | 2026-10-23T06:21:12.326Z
- opportunity | /articles/evenements/fete-des-rues-aux-enfants-2026-a-paris-ou-aller-selon-l-arrondissement/ | 2026-10-03T14:16:09.016Z
- opportunity | /articles/activites/jeux-nature-gratuits-au-parc-floral-de-paris-le-18-novembre-2026-quel-jeu-selon-l-age/ | 2026-11-04T12:35:19.125Z
- opportunity | /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | 2026-10-27T13:28:21.076Z
- opportunity | /articles/bons-plans/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/ | 2026-10-25T10:33:30.080Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
