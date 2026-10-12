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
title: "Halloween 2026 au Parc Spirou: nocturnes Naruto, réservation et maison hantée"
subtitle: À Monteux, quelles dates et animations choisir avec des enfants pendant la Toussaint?
summary: Du 3 octobre au 11 novembre 2026, le Parc Spirou propose Halloween, quatre soirées Naruto et le Cirque Carnage. Réservation des billets non datés, dates et choix selon l'âge.
category: evenements
location:
  city: Monteux
  department: Vaucluse
  region: Provence-Alpes-Côte d'Azur
keywords:
  - Halloween Parc Spirou 2026
  - réservation Halloween Parc Spirou billet non daté
  - nocturnes Naruto Parc Spirou octobre 2026
  - Cirque Carnage Parc Spirou âge
sources:
  - title: Parc Spirou - Halloween 2026
    url: https://www.parc-spirou.com/halloween/
  - title: Parc Spirou - Réservation Halloween 2026
    url: https://www.parc-spirou.com/reservation-halloween/
  - title: Parc Spirou - Nocturnes Naruto
    url: https://www.parc-spirou.com/nocturnes-halloween/
  - title: Parc Spirou - Maison hantée Cirque Carnage
    url: https://www.parc-spirou.com/maison-hantee-cirque-carnage/
  - title: Parc Spirou - Calendrier 2026
    url: https://www.parc-spirou.com/calendrier/
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee
  decision: Choisir une date et un billet qui donnent réellement accès au parc, distinguer les animations accessibles selon l'âge et identifier les suppléments avant de payer.
  affiliationPotential: "Tiqets référence les billets d'entrée du Parc Spirou, sans preuve d'un billet spécial Halloween: vérifier dates, conditions et obligation de réservation du parc. Hébergement pertinent à Monteux référencé sur Booking.com; le Wave Village du parc propose aussi un séjour thématisé. Ne pas confondre nuitée et réservation du billet."
  gsc:
    retrievedAt: 2026-10-12T04:49:15.779Z
    dataThrough: 2026-10-09
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Parc Spirou - Halloween 2026 »; aucune page forte GSC n'est requise.
---

## Mission retenue
Halloween 2026 au Parc Spirou Provence à Monteux: programmation saisonnière du 3 octobre au 11 novembre, quatre nocturnes Naruto et maison hantée Cirque Carnage. La page doit guider la réservation pour les visites de la Toussaint, pas refaire un guide général du parc.

## Pourquoi cette mission
La fenêtre du 17 octobre au 1er novembre arrive immédiatement et comporte une démarche préalable peu évidente. Le meilleur refresh GSC (carte Tattoo Isère) est classé « uncertain » sans preuve de perte de position, et son article répond déjà aux questions principales. L'expansion d'une page forte (notamment Futuroween) est moins urgente et déjà bien couverte. Le guide Fam Space sur le Parc Spirou traite les tailles, billets habituels et accès mais pas les différences de programmation Halloween en détail: cette nouvelle décision est distincte.

## Décision du lecteur
Savoir quel jour venir, s'il faut réserver une date avant de se déplacer, quelles animations conviennent à ses enfants et ce qui coûte plus cher que l'entrée.

## Faits à traiter
- Halloween annoncé du 3 octobre au 11 novembre, mais le parc n'ouvre pas chaque jour: contrôler le calendrier officiel; nocturnes Naruto les 17, 24, 30 et 31 octobre jusqu'à 21h, avec horaires de spectacle évolutifs et éventuelle annulation météo.
- Entre le 17 octobre et le 1er novembre inclus, réserver une date est obligatoire avec billet non daté, y compris revendeur/CSE, ou invitation; attendre deux heures après achat d'un billet non daté. Le billet réservé remplace l'ancien et n'est pas échangeable. Pas de réservation additionnelle pour billet déjà daté, pass saison/gold ou séjour Wave Village; clarifier les cas particuliers depuis la page officielle.
- Cirque Carnage du 23 octobre au 1er novembre, déconseillé aux moins de 12 ans, supplément non compris dans l'entrée, créneau à réserver lorsque la billetterie ouvre. Maquillage également annoncé hors billet.
- Mascottes, décors et animations plus accessibles aux jeunes enfants, en distinguant l'ambiance familiale générale et les expériences effrayantes. Vérifier conditions exactes, tarifs et disponibilité au moment de la rédaction.
- Vérifier les prix pertinents du billet et le calendrier plutôt que déduire que toutes les journées Halloween proposent la même chose.

## Sources de départ
Pages officielles du Parc Spirou présentes dans l'en-tête: programme, réservation, nocturnes, maison hantée et calendrier.

## Affiliation
Billets Parc Spirou effectivement référencés sur Tiqets, à vérifier pour la date retenue, sans présenter comme acquis un accès particulier aux nocturnes ou un billet Halloween. Pour un séjour après la nocturne, comparer une option familiale à Monteux sur Booking.com ou le Wave Village présenté par le parc, en contrôlant les disponibilités réelles. Aucune page partenaire ne prouve les faits éditoriaux.

## Continuations internes
- Renvoyer au guide Fam Space [Parc Spirou avec de jeunes enfants](/articles/sorties/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets/) pour les seuils de taille, les poussettes, l'accès et les billets habituels, sans recopier ces sous-sujets.
- Si le lecteur prolonge son séjour, une courte ouverture vers la [destination Avignon](/destinations/provence-alpes-cote-d-azur/vaucluse/avignon/) peut suffire; ne pas développer un second itinéraire.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets/ | Parc Spirou avec de jeunes enfants: regardez la taille avant d'acheter les billets | sorties | Monteux, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/halloween-a-avignon-une-visite-familiale-pour-decouvrir-l-archeologie-funeraire/ | Halloween à Avignon: un atelier familial pour découvrir l'archéologie funéraire | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/festival-du-cirque-du-val-d-oise-2026-en-famille-tarifs-horaires-et-conseils/ | Festival du Cirque du Val d'Oise 2026 en famille: tarifs, horaires et conseils | evenements | Domont, Val-d'Oise, Île-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-comment-choisir-une-visite-adaptee-a-l-age-des-enfants/ | Monument jeu d'enfant 2026: comment choisir une visite adaptée à l'âge des enfants | evenements
- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/activites/parc-zoo-du-reynou-avec-des-enfants-billet-date-poussette-ou-journee-complete/ | Parc Zoo du Reynou avec des enfants: billet daté, poussette ou journée complète? | activites | Le Vigen, Haute-Vienne, Nouvelle-Aquitaine
- /articles/sorties/toussaint-2026-au-louvre-lens-quelle-activite-choisir-selon-l-age/ | Toussaint 2026 au Louvre-Lens: quelle activité choisir selon l'âge? | sorties | Lens, Pas-de-Calais, Hauts-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | Monument Jeu d’Enfant au château d’Angers: dragons et ateliers le 17 octobre 2026 | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/activites/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre/ | Grottes de Thouzon avec des enfants: préparer la visite sous terre | activites | Le Thor, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/voyages/orange-avec-des-enfants-ou-dormir-pour-tout-faire-a-pied/ | Orange avec des enfants: où dormir pour tout faire à pied | voyages | Orange, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/avignonnais-palais-des-papes-et-pont-gratuits-le-week-end/ | Avignonnais: Palais des Papes et Pont gratuits le week-end | bons-plans | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/parentalite/premier-week-end-a-avignon-avec-un-bebe-ou-dormir-et-quoi-prevoir/ | Avignon avec un bébé: poussette, Palais des Papes et où dormir | parentalite | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/sorties/palais-roure-avignon-famille-2026/ | Palais du Roure à Avignon en famille: retour sur les rendez-vous gratuits d'août 2026 | sorties | Avignon, Vaucluse, Provence-Alpes-Côte d'Azur
- /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | Halloween 2026 à la Tour de l'Horloge de Guînes: visites, contes et nocturne | evenements | Guînes, Pas-de-Calais, Hauts-de-France
- /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | Famille en fête 2026 en Gironde: ateliers gratuits pour les 0-6 ans | evenements | Saint-Loubès, Gironde, Nouvelle-Aquitaine
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | Monument Jeu d'enfant 2026 à Azay-le-Rideau: animaux cachés et contes en famille | evenements | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | Nuit des Châteaux 2026 à Tanlay: visites aux bougies les 16 et 17 octobre | evenements | Tanlay, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | Monument jeu d’enfant à Aigues-Mortes: mini-sacre et escape game les 17 et 18 octobre 2026 | evenements | Aigues-Mortes, Gard, Occitanie
- /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | Festival Lumière 2026: Laurel & Hardy en famille le 17 octobre à Lyon | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | Monument jeu d'enfant 2026 au château de Vincennes: quel atelier choisir ? | evenements | Vincennes, Val-de-Marne, Île-de-France

### Historique Radar lié

- opportunity | /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | 2026-10-12T08:10:30.674Z
- opportunity | /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | 2026-10-10T15:40:28.185Z
- opportunity | /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | 2026-10-12T10:40:26.563Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | 2026-10-10T17:38:43.806Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | 2026-10-11T16:33:21.125Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | 2026-10-10T08:38:56.921Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | 2026-10-09T18:35:04.031Z
- opportunity | /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | 2026-10-11T09:17:01.561Z
- opportunity | /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | 2026-10-11T11:27:54.175Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
