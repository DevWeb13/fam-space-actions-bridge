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

Utilise des sources directement responsables. Les faits utilisés sont liés naturellement dans le corps et présents dans `sources`. Aucun H1, tableau Markdown ou section Sources.

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
title: "Halloween 2026 au Safari de Peaugres: animations et Lumières Sauvages"
subtitle: Du 17 octobre au 1er novembre en Ardèche, choisir entre une journée au zoo et la visite lumineuse du soir.
summary: "Halloween 2026 au Wow Safari Peaugres: animations pour enfants, Festival Lumières Sauvages, tarifs et choix entre billet journée et billet soirée."
category: evenements
location:
  city: Peaugres
  department: Ardèche
  region: Auvergne-Rhône-Alpes
keywords:
  - Halloween 2026 Safari de Peaugres
  - Festival Lumières Sauvages 2026 Peaugres
  - Halloween Wow Safari Peaugres famille
  - billet festival Lumières Sauvages ou journée
sources:
  - title: Wow Safari Peaugres - Programme Halloween 2026
    url: https://www.safari-peaugres.com/actualites/halloween-wow-safari-peaugres/
  - title: Wow Safari Peaugres - Halloween en famille
    url: https://www.safari-peaugres.com/halloween-safari-peaugres/
  - title: Wow Safari Peaugres - Festival Lumières Sauvages 2026-2027
    url: https://www.safari-peaugres.com/peaugres-lumieres-sauvages/
  - title: Wow Safari Peaugres - Tarifs et formules
    url: https://www.safari-peaugres.com/tarifs/
  - title: Wow Safari Peaugres - Horaires selon la date
    url: https://www.safari-peaugres.com/calendrier-horaires-ouverture/
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages
  decision: Choisir entre visiter le safari et ses animations d'Halloween avant de voir les lanternes le soir, ou venir seulement au Festival Lumières Sauvages, en connaissant les tarifs, la durée et les contraintes pour les enfants.
  affiliationPotential: Le billet d'entrée Safari de Peaugres est référencé sur Tiqets, mais vérifier les conditions exactes de l'offre et l'inclusion du festival avant de proposer ce lien. Pour prolonger la soirée, Villa Bianca à Peaugres est référencée sur Booking.com, et le parc propose ses propres hébergements familiaux; vérifier la capacité et la disponibilité, sans confondre hébergement et accès au festival.
  gsc:
    retrievedAt: 2026-10-12T04:49:15.779Z
    dataThrough: 2026-10-09
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Wow Safari Peaugres - Programme Halloween 2026 »; aucune page forte GSC n'est requise.
---

## Mission retenue
Halloween du 17 octobre au 1er novembre 2026 au Wow Safari Peaugres, en Ardèche: animations sur les animaux nocturnes, nourrissages thématisés, Souterrains du Manoir et Festival Lumières Sauvages qui débute le 17 octobre. L'article est centré sur le choix entre la journée complète et le festival du soir.

## Pourquoi cette mission
Opportunité saisonnière imminente, documentée par l'organisateur, avec une vraie décision d'achat: billet journée avec festival inclus ou billet festival seul. Le meilleur refresh GSC (carte Tattoo Isère) est classé « uncertain », sans recul de classement démontré, et l'article existant répond déjà aux principales décisions. L'expansion d'une page forte comme Futuroween est moins prioritaire car le thème est déjà couvert. L'article Fam Space existant sur Peaugres traite les billets habituels, le safari voiture, la poussette et le pique-nique, mais pas ce programme Halloween ni le choix propre au parcours nocturne.

## Décision du lecteur
Savoir si sa famille profitera davantage des animaux et animations d'Halloween en journée avec les lumières à la nuit tombée, ou d'une visite lumineuse seule, et réserver la formule appropriée sans perdre du temps ni payer deux fois.

## Faits à traiter
- Halloween au parc du 17 octobre au 1er novembre 2026: animaux et citrouilles lors de certains nourrissages, Souterrains du Manoir, Serre aux 1000 cachettes, Cimetière des espèces disparues, petits déguisements et bonbons; les animations précises et leurs horaires varient.
- Festival Lumières Sauvages du 17 octobre 2026 au 28 mars 2027 selon sa page officielle détaillée (d'autres rubriques du site annoncent le 27 mars: faire prévaloir la page de l'événement et recontrôler); environ 3000 lanternes, 2,5 km et 1 h 30 de marche à la tombée de la nuit. Le safari voiture et l'observation des animaux ne se poursuivent pas de nuit.
- Billet journée Safari voiture + circuit à pied + Festival: adulte à partir de 11 ans 32,90 €, enfant de 3 à 10 ans 27,50 €, moins de 3 ans gratuit. Billet Festival seul: adulte 24,90 €, enfant 20,90 €. Contrôler les offres Futé, les packs, les horaires et les conditions du billet choisi; ne pas supposer une réservation obligatoire du Festival.
- Pour de jeunes enfants, anticiper la durée, les distances, la pénombre et le repas entre visite animalière et lumières; vérifier l'accessibilité selon la situation familiale. Fixer eventEndsAt au 1er novembre 2026 pour cette page Halloween, distinct de la saison hivernale du festival.

## Sources de départ
Les cinq pages officielles du safari mentionnées dans le frontmatter: programme Halloween, présentation de saison, Festival, tarifs et calendrier.

## Affiliation
Examiner d'abord l'entrée Safari vendue par Tiqets, sans présenter la fiche comme preuve d'un billet spécifique au Festival. Pour un séjour après les lumières, vérifier Villa Bianca sur Booking.com ou les hébergements immersifs du parc. Ne pas laisser une liste d'offres détourner l'article du choix de billet.

## Continuations internes
- Pour les billets hors Halloween, le safari voiture, la poussette et le pique-nique, renvoyer à [Safari de Peaugres avec enfants](/articles/sorties/safari-de-peaugres-avec-enfants-quel-billet-choisir-et-comment-organiser-la-journee/) au lieu de répéter ses explications.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/safari-de-peaugres-avec-enfants-quel-billet-choisir-et-comment-organiser-la-journee/ | Safari de Peaugres avec enfants: quel billet choisir et comment organiser la journée | sorties | Peaugres, Ardèche, Auvergne-Rhône-Alpes
- /articles/activites/wow-safari-thoiry-en-famille-tarifs-duree-et-conseils-pour-organiser-la-visite/ | Wow Safari Thoiry en famille: tarifs 2026, billets et durée | activites | Thoiry, Yvelines, Île-de-France
- /articles/evenements/grand-bivouac-2026-a-albertville-en-famille-preparer-sa-journee-au-festival/ | Grand Bivouac 2026 à Albertville en famille: préparer sa journée au festival | evenements | Albertville, Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/equidays-2026-en-famille-dans-le-calvados-villages-gratuits-parade-et-animations/ | Équidays 2026 en famille dans le Calvados: villages gratuits, parade et animations | evenements | Caen, Calvados, Normandie
- /articles/voyages/peur-sur-le-parc-2026-en-famille-journee-nocturne-billets-et-hebergement/ | Peur sur le Parc 2026 en famille: journée, nocturne, billets et hébergement | voyages | Plailly, Oise, Hauts-de-France
- /articles/activites/cite-du-chocolat-valrhona-a-la-toussaint-2026-quel-atelier-choisir-selon-l-age/ | Cité du Chocolat Valrhona à la Toussaint 2026: animations et ateliers avec des enfants | activites | Tain-l'Hermitage, Drôme, Auvergne-Rhône-Alpes
- /articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/ | Lire en Poche 2026 à Gradignan avec des enfants: organiser une journée sans perdre les ateliers | evenements | Gradignan, Gironde, Nouvelle-Aquitaine
- /articles/evenements/partir-en-livre-2026-en-famille/ | Partir en Livre 2026: trouver une animation jeunesse avant le 19 juillet | evenements
- /articles/vie-pratique/transport-scolaire-en-ardeche-peut-on-utiliser-scolaire-le-week-end-et-pendant-les-vacances/ | Transport scolaire en Ardèche: peut-on utiliser Scolaire+ le week-end et pendant les vacances? | vie-pratique | Privas, Ardèche, Auvergne-Rhône-Alpes
- /articles/activites/canoe-en-ardeche-avec-des-enfants-6-ou-12-km-quel-parcours-choisir/ | Canoë en Ardèche avec des enfants: 6 ou 12 km, quel parcours choisir ? | activites | Vallon-Pont-d'Arc, Ardèche, Auvergne-Rhône-Alpes
- /articles/evenements/castagnade-de-joyeuse-2026-avec-des-enfants-venir-samedi-ou-dimanche/ | Castagnade de Joyeuse 2026 avec des enfants: venir samedi ou dimanche? | evenements | Joyeuse, Ardèche, Auvergne-Rhône-Alpes
- /articles/voyages/dormir-a-tournon-sur-rhone-pour-prendre-le-train-de-l-ardeche-quel-secteur-choisir/ | Dormir à Tournon-sur-Rhône pour prendre le Train de l'Ardèche: quel secteur choisir? | voyages | Tournon-sur-Rhône, Ardèche, Auvergne-Rhône-Alpes
- /articles/bons-plans/train-de-l-ardeche-en-famille-les-bons-plans-pour-payer-moins-cher-en-2026/ | Train de l'Ardèche en famille: les bons plans pour payer moins cher en 2026 | bons-plans | Saint-Jean-de-Muzols, Ardèche, Auvergne-Rhône-Alpes
- /articles/voyages/week-end-a-vallon-pont-d-arc-en-famille-quel-budget-prevoir/ | Week-end à Vallon-Pont-d'Arc en famille: quel budget prévoir? | voyages | Vallon-Pont-d'Arc, Ardèche, Auvergne-Rhône-Alpes
- /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | Halloween 2026 à la Tour de l'Horloge de Guînes: visites, contes et nocturne | evenements | Guînes, Pas-de-Calais, Hauts-de-France
- /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | Famille en fête 2026 en Gironde: ateliers gratuits pour les 0-6 ans | evenements | Saint-Loubès, Gironde, Nouvelle-Aquitaine
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | Monument Jeu d'enfant 2026 à Azay-le-Rideau: animaux cachés et contes en famille | evenements | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | Nuit des Châteaux 2026 à Tanlay: visites aux bougies les 16 et 17 octobre | evenements | Tanlay, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | Monument jeu d’enfant à Aigues-Mortes: mini-sacre et escape game les 17 et 18 octobre 2026 | evenements | Aigues-Mortes, Gard, Occitanie
- /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | Festival Lumière 2026: Laurel & Hardy en famille le 17 octobre à Lyon | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/activites/cite-du-chocolat-valrhona-a-la-toussaint-2026-quel-atelier-choisir-selon-l-age/ | 2026-10-05T14:27:51.219Z
- opportunity | /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | 2026-10-12T08:10:30.674Z
- opportunity | /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | 2026-10-10T15:40:28.185Z
- opportunity | /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | 2026-10-12T10:40:26.563Z
- refresh | /articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/ | 2026-10-06T12:23:52.449Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | 2026-10-10T17:38:43.806Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | 2026-10-11T16:33:21.125Z
- opportunity | /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | 2026-10-11T09:17:01.561Z
- opportunity | /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | 2026-10-11T11:27:54.175Z
- opportunity | /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | 2026-10-11T19:35:57.703Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
