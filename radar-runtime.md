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
title: "Automnales d'Harcourt 2026 en famille: jeux nature, visites et tarifs"
subtitle: "Les 17 et 18 octobre: choisir les animations avec des enfants et prévoir le budget"
summary: Pour les 20 ans des Automnales d'Harcourt, repérez les animations jeunes publics, les visites et les tarifs du week-end des 17 et 18 octobre 2026.
category: evenements
location:
  city: Harcourt
  department: Eure
  region: Normandie
keywords:
  - Automnales Harcourt 2026 enfants
  - Automnales Harcourt 17 18 octobre
  - fête des plantes Domaine Harcourt famille
sources:
  - title: Domaine d'Harcourt - Automnales 2026, programme et accès
    url: https://www.harcourt-normandie.fr/les-incontournables/les-automnales/
  - title: Domaine d'Harcourt - Francis Hallé et les animations enfants
    url: https://www.harcourt-normandie.fr/actualites/francis-halle-un-hommage-au-coeur-des-automnales-dharcourt/
  - title: Office de tourisme de Bernay - Automnales 2026, tarifs
    url: https://tourisme.bernaynormandie.fr/agenda/les-automnales-dharcourt/
  - title: Domaine d'Harcourt - Rendez-vous d'automne
    url: https://www.harcourt-normandie.fr/nos-rendez-vous/
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs
  decision: Décider si la fête des plantes des 17-18 octobre convient à l'âge des enfants, choisir le meilleur créneau familial et calculer le budget d'une visite sans réserver une expérience nocturne différente.
  affiliationPotential: Pas de billetterie partenaire identifiée pour les Automnales. Offre d'hébergement secondaire vérifiée sur Booking.com à Bernay et Brionne pour les familles qui en font un week-end; vérifier disponibilité et dates avant tout lien pertinent, ne pas forcer une nuit pour la seule visite.
  gsc:
    retrievedAt: 2026-10-16T04:49:29.006Z
    dataThrough: 2026-10-13
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Domaine d'Harcourt - Automnales 2026, programme et accès »; aucune page forte GSC n'est requise.
---

## Mission retenue
Préparer une vraie sortie familiale aux **Automnales du Domaine d'Harcourt**, 20e édition, les samedi 17 et dimanche 18 octobre 2026 de 10h à 18h. Ce salon de plantes en plein air n'est pas Arbora Lumina, parcours nocturne qui n'ouvre que le 13 novembre.

## Pourquoi cette mission
Une opportunité locale datée dès demain et documentée par l'organisateur: visites accessibles aux enfants, jeux libre-service, documentaire, sculpture et plus de 50 exposants. Aucun article Automnales dans le catalogue compact; seul Arbora Lumina traite le même lieu avec une expérience et des dates différentes. Le meilleur refresh GSC, la cantine en Essonne (182 à 29 impressions), et le suivant, Tattoo Isère (166 à 15), ont des signaux `uncertain` sans requête comparable et des articles existants déjà utiles et exacts sur leurs décisions principales. Une expansion depuis les pages fortes, notamment les transports parisiens ou Futuroween, empiéterait davantage sur les articles voisins déjà publiés. Les événements en cours Publication (musée de la Bière à Stenay) et Destinations (Vincennes, Haut-Rhin) n'empiètent pas sur cette fête.

## Décision du lecteur
Choisir une plage horaire adaptée à son enfant, savoir ce qu'il peut faire pendant que les adultes découvrent la fête des plantes, puis décider s'il faut acheter un billet en avance et combien prévoir.

## Faits à traiter
- Dates **17-18 octobre 2026**, **10h-18h**, Domaine d'Harcourt, 5 rue de la Gare. Prévoir `eventEndsAt: 2026-10-18` pour retirer la pertinence temporelle après le week-end.
- Jeux et animations pédagogiques **en libre-service 10h-18h** au point-info Médiation; visite «20 arbres pour les 20 ans» à **11h, 15h et 17h** samedi/dimanche, **45 min**, tous publics; film «Il était une forêt» **10h30, 14h, 16h**, **1h18**; sculpture en direct. Rencontre «Jurassic Plantes» le dimanche uniquement.
- Tarifs affichés par l'office de tourisme: **3,50 € base, 3 € réduit, 2,50 € enfant**. La page de l'organisateur évoque un tarif anniversaire exceptionnel sans montant: revérifier les catégories d'âge, gratuité moins de 6 ans, éventuels tarifs réellement affichés au moment de l'achat et préciser la divergence plutôt que la masquer.
- **Billetterie en ligne OU sur place**, à distinguer d'Arbora Lumina (en ligne uniquement). Vérifier si une réservation est requise pour une animation particulière; ne pas inventer de garantie de place.
- Parking, toilettes, pique-nique, restauration et portage gratuit des plants annoncés. Clarifier poussettes, accès PMR et retour de bus NOMAD 214 uniquement selon les données confirmées. Ne pas promettre la visite intérieure du château en travaux.

## Sources de départ
Pages de l'organisateur et office de tourisme répertoriées dans le frontmatter ci-dessus.

## Affiliation
Aucune billetterie partenaire pour l'événement. Des hébergements à **Bernay ou Brionne** existent sur Booking.com pour un week-end régional, mais aucune disponibilité aux dates du 17-18 octobre n'est établie. Réserver cette piste aux familles combinant plusieurs visites; ne pas concurrencer la billetterie officielle.

## Continuations internes
- Liens utiles, sans répéter la visite nocturne: [Arbora Lumina à Harcourt](/articles/evenements/arbora-lumina-a-harcourt-ce-qu-il-faut-prevoir-avec-des-enfants/) pour les familles qui souhaitent revenir dès le 13 novembre.
- Le thème automnal et les jeux nature doivent rester spécifiques aux Automnales; éviter une liste générale d'activités normandes ou une description générale du château déjà abordée dans l'article Arbora Lumina.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/arbora-lumina-a-harcourt-ce-qu-il-faut-prevoir-avec-des-enfants/ | Arbora Lumina à Harcourt: ce qu'il faut prévoir avec des enfants | evenements | Harcourt, Eure, Normandie
- /articles/evenements/fete-de-la-chataigne-a-collobrieres-quel-dimanche-choisir-avec-des-enfants/ | Fête de la Châtaigne à Collobrières: quel dimanche choisir avec des enfants? | evenements | Collobrières, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | Fête de la mer 2026 à Marseille avec des enfants: quelle escale choisir? | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/fete-des-rues-aux-enfants-2026-a-paris-ou-aller-selon-l-arrondissement/ | Fête des rues aux enfants 2026 à Paris: où aller selon l'arrondissement? | evenements | Paris, Paris, Île-de-France
- /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | Nuit des Châteaux 2026 à Tanlay: visites aux bougies les 16 et 17 octobre | evenements | Tanlay, Yonne, Bourgogne-Franche-Comté
- /articles/bons-plans/musee-fermat-en-famille-jeux-tarifs-et-visite-avec-des-enfants/ | Musée Fermat en famille: jeux, tarifs et visite avec des enfants | bons-plans | Beaumont-de-Lomagne, Tarn-et-Garonne, Occitanie
- /articles/evenements/fete-de-la-science-2026-en-famille/ | Fête de la science 2026: choisir une expérience adaptée à l’âge des enfants | evenements
- /articles/evenements/festival-cite-en-jeux-2026-a-colomiers-quel-jour-choisir-avec-des-enfants/ | Festival Cité en Jeux 2026 à Colomiers: quel jour choisir avec des enfants | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/voyages/lyons-la-foret-avec-des-enfants-journee-ou-week-end-dans-le-village-et-la-foret/ | Lyons-la-Forêt avec des enfants: journée ou week-end dans le village et la forêt? | voyages | Lyons-la-Forêt, Eure, Normandie
- /articles/sorties/giverny-en-famille-visiter-la-maison-de-monet-et-le-musee-des-impressionnismes/ | Giverny en famille: visiter la maison de Monet et le musée des impressionnismes | sorties | Giverny, Eure, Normandie
- /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | Toussaint 2026 au musée des Confluences: cinq rendez-vous pour les enfants | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/toussaint-2026-au-seaquarium-du-grau-du-roi-quel-jeu-choisir/ | Toussaint 2026 au Seaquarium: dates des jeux, âges et billets en famille | evenements | Le Grau-du-Roi, Gard, Occitanie
- /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/vacances-royales-2026-a-versailles-animations-napoleon-dates-et-billets-en-famille/ | Vacances royales 2026 à Versailles: animations Napoléon, dates et billets | evenements | Versailles, Yvelines, Île-de-France
- /articles/evenements/rouen-givree-2026-en-famille-marche-de-noel-et-refuge-givre/ | Rouen Givrée 2026 en famille: marché de Noël et Refuge Givré | evenements | Rouen, Seine-Maritime, Normandie
- /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | Au Creux de l'Oreille 2026 à Noirlac: spectacles et ateliers en famille du 17 au 22 octobre | evenements | Bruère-Allichamps, Cher, Centre-Val de Loire
- /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | Grands Zyeux P'tites Zoreilles 2026: spectacles gratuits avec les tout-petits autour de Béziers | evenements | Béziers, Hérault, Occitanie
- /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | Abracada BOUH 2026 à Montpellier: programme et tarifs au château de Flaugergues | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | Fête de l'Automne 2026 à Terra Botanica: animations et tarifs | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | Monument jeu d'enfant 2026 à Saint-Denis: atelier Dagobert le 17 octobre | evenements | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | Halloween 2026 au Safari de Peaugres: animations, tarifs et Festival Lumières Sauvages | evenements | Peaugres, Ardèche, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | 2026-10-13T20:41:25.500Z
- opportunity | /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | 2026-10-14T13:49:08.708Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- opportunity | /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | 2026-10-13T12:37:05.098Z
- refresh | /articles/evenements/fete-de-la-chataigne-a-collobrieres-quel-dimanche-choisir-avec-des-enfants/ | 2026-10-08T10:21:36.677Z
- opportunity | /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | 2026-10-06T16:58:51.946Z
- opportunity | /articles/evenements/fete-des-rues-aux-enfants-2026-a-paris-ou-aller-selon-l-arrondissement/ | 2026-10-03T14:16:09.016Z
- opportunity | /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | 2026-10-14T07:31:28.976Z
- opportunity | /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | 2026-10-13T05:01:12.150Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | 2026-10-13T09:50:29.435Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
