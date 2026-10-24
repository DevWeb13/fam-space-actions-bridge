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
title: "Noël 2026 au château royal d'Amboise : visite de jour ou nocturne aux chandelles ?"
subtitle: "Le Noël royal des animaux, la soirée du 11 décembre et les nocturnes des 26 et 29 décembre : quel billet choisir avec des enfants ?"
summary: À Amboise, le parcours de Noël est inclus dans la visite ordinaire, mais les soirées ne proposent pas la même expérience. Dates, âges, réservations et budget pour choisir sans confondre les formules.
category: evenements
location:
  city: Amboise
  department: Indre-et-Loire
  region: Centre-Val de Loire
keywords:
  - Noël château royal Amboise 2026
  - Noël royal des animaux Amboise
  - nocturne chandelles Amboise décembre 2026
sources:
  - title: Château royal d'Amboise - Noël au Pays des Châteaux 2026
    url: https://www.chateau-amboise.com/noel-au-pays-des-chateaux/
  - title: Château royal d'Amboise - Soirée prolongée du 11 décembre 2026
    url: https://www.chateau-amboise.com/nocturne-de-noel-au-pays-des-chateaux/
  - title: Château royal d'Amboise - Balades nocturnes aux chandelles spéciale Noël
    url: https://www.chateau-amboise.com/balades-nocturnes-aux-chandelles-speciale-noel/
  - title: Château royal d'Amboise - Visite guidée Le Noël royal des animaux
    url: https://www.chateau-amboise.com/visite-guidee-le-noel-royal-des-animaux/
  - title: Château royal d'Amboise - Tarifs 2026
    url: https://www.chateau-amboise.com/tarifs/
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles
  decision: Choisir la visite décorée en journée, la prolongation du 11 décembre ou une nocturne aux chandelles des 26 et 29 décembre selon l'âge des enfants, le budget, l'accessibilité et les réservations nécessaires.
  affiliationPotential: Billet d'entrée de jour au château royal d'Amboise vérifié sur Tiqets (également présent sur GetYourGuide), sans présumer qu'il donne accès aux nocturnes spéciales ; pour un séjour, suites familiales du Clos d'Amboise vérifiées sur Booking.com, sous réserve de disponibilité aux dates choisies.
  gsc:
    retrievedAt: 2026-10-24T02:34:28+02:00
    dataThrough: 2026-10-21
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Château royal d'Amboise - Noël au Pays des Châteaux 2026 »; aucune page forte GSC n'est requise.
---

## Mission retenue
Préparer un guide de décision sur **Le Noël royal des animaux**, au château royal d'Amboise, du **28 novembre 2026 au 3 janvier 2027**. Il distingue le parcours décoré ordinaire des expériences nocturnes réellement différentes.

## Pourquoi cette mission
L'opportunité saisonnière est documentée dès maintenant par l'organisateur, avec trois choix de visite et une vraie différence de billets. Le refresh SNCF (signal GSC « uncertain ») a été écarté : l'article complet couvre déjà correctement prix, réductions, conditions de semaine et plafonds, sans lacune décisive démontrée. L'expansion depuis la page forte sur les transports parisiens risquerait de reprendre les tarifs déjà traités et les guides Orly/CDG existants. Le contrôle `probableDuplicates` sur les **759 articles** ne trouve aucun Noël 2026 au château royal d'Amboise ; les pages Amboise existantes concernent le city pass, l'hébergement et le marché, sans traiter cette décision. Aucun recouvrement avec les candidats Publication (véloroute du Calavon) ou Destination (Vincennes, Haut-Rhin).

## Décision du lecteur
Savoir s'il vaut mieux réserver une entrée de jour, profiter de l'ouverture prolongée du 11 décembre sans chandelles, ou choisir une soirée aux chandelles les 26 ou 29 décembre, en connaissant le coût et les contraintes pour les enfants.

## Faits à traiter
- Parcours « Noël royal des animaux » inclus dans l'entrée du château du 28/11/2026 au 03/01/2027 ; fermeture les 25/12 et 01/01. Tarifs 2026 de jour : 17,30 € adulte, 11 € de 7 à 18 ans, gratuit avant 7 ans.
- **11 décembre** : fermeture de la billetterie à 19 h, château à 20 h ; tarif normal, sans réservation, **sans chandelles**. Ne pas confondre avec les soirées spéciales.
- **26 et 29 décembre** : nocturnes aux chandelles, créneaux d'entrée 18 h 30, 19 h, 19 h 30, 20 h, réservation obligatoire ; 16,50 € adulte, 11,50 € enfant ; parc fermé, accès difficile en fauteuil. Vérifier les conditions exactes pour les tout-petits et ne pas supposer que le billet de jour suffit.
- Visite guidée « Le Noël royal des animaux » à 11 h 30 du 19 décembre au 3 janvier, hors fermetures : 1 h, comprise dans l'entrée mais **sur réservation**. Vérifier ouverture effective des réservations ; mentionner seulement si utile le conte du 23 décembre.
- Distinguer billets de jour, nocturnes et éventuel pass multi-châteaux ; vérifier les horaires, la capacité et les accès avant toute recommandation.

## Sources de départ
Les cinq pages officielles du frontmatter : événement 2026, prolongation du 11 décembre, nocturnes de Noël, visite guidée et grille tarifaire 2026. Ne pas reprendre les horaires d'une ancienne édition.

## Affiliation
Proposer le billet de **jour** Tiqets seulement si la date et l'inclusion du parcours de Noël sont vérifiées au moment de rédiger ; ne jamais le présenter comme un billet pour la nocturne. Pour un week-end, **Le Clos d'Amboise** sur Booking.com propose des chambres/suites familiales, sans disponibilité garantie pour décembre. Une offre précise de chaque type suffit.

## Continuations internes
- Renvoyer au guide **Amboise City Pass 2026** pour les arbitrages entre plusieurs monuments, sans reproduire tout le calcul des pass.
- Renvoyer à **Maison de vacances à Amboise avec des enfants** pour les critères généraux d'hébergement ; rester ici sur la seule utilité d'une nuit après une nocturne.
- Si comparaison géographique utile, signaler **Noël à Chambord 2026** comme autre sortie distincte, sans répéter son programme.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/cuisine/marche-d-amboise-composer-un-pique-nique-tourangeau-avec-des-enfants/ | Marché d'Amboise: composer un pique-nique tourangeau avec des enfants | cuisine | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/maison/maison-de-vacances-a-amboise-avec-des-enfants-7-criteres-pour-bien-choisir/ | Maison de vacances à Amboise avec des enfants: 7 critères pour bien choisir | maison | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/sorties/chateau-de-chenonceau-en-famille-billets-duree-et-conseils-avec-des-enfants/ | Château de Chenonceau en famille: billets, durée et conseils avec des enfants | sorties | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/bons-plans/amboise-city-pass-2026-quand-devient-il-vraiment-rentable/ | Amboise City Pass 2026: quand devient-il vraiment rentable? | bons-plans | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | Monument Jeu d'enfant 2026 à Azay-le-Rideau: animaux cachés et contes en famille | evenements | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/habits-de-lumiere-a-epernay-avec-des-enfants-quel-jour-choisir-en-2026/ | Habits de Lumière à Épernay avec des enfants: quel jour choisir en 2026? | evenements | Épernay, Marne, Grand Est
- /articles/evenements/lumieres-de-noel-a-montbeliard-2026-quel-jour-venir-avec-des-enfants/ | Lumières de Noël à Montbéliard 2026: quel jour venir avec des enfants? | evenements | Montbéliard, Doubs, Bourgogne-Franche-Comté
- /articles/sorties/camp-batisseurs-chinon-famille-2026/ | Camp des bâtisseurs à Chinon: une immersion médiévale en famille jusqu’au 28 août | sorties | Chinon, Indre-et-Loire, Centre-Val de Loire
- /articles/voyages/azay-le-rideau-en-famille-une-journee-entre-chateau-et-troglodytes/ | Azay-le-Rideau en famille: une journée entre château et troglodytes | voyages | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/sorties/villandry-en-famille-jardins-seuls-ou-chateau-et-jardins/ | Villandry en famille: jardins seuls ou château et jardins ? | sorties | Villandry, Indre-et-Loire, Centre-Val de Loire
- /articles/parentalite/laep-en-indre-et-loire-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP en Indre-et-Loire: où aller avec un enfant de moins de 6 ans | parentalite | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/vie-pratique/transport-scolaire-remi-en-indre-et-loire-que-faire-apres-la-date-limite-2026/ | Transport scolaire Rémi en Indre-et-Loire: que faire après la date limite 2026 | vie-pratique | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | Noël au château de Cheverny 2026: billets, mapping et visite en famille | evenements | Cheverny, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | Foire aux santons de Marseille 2026: dates, inauguration et visite en famille | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | Bédéciné 2026 à Illzach en famille: ateliers, spectacles et billets | evenements | Illzach, Haut-Rhin, Grand Est
- /articles/evenements/automne-des-gones-2026-a-lyon-quels-ateliers-gratuits-choisir-avec-les-enfants/ | Automne des gones 2026 à Lyon: ateliers et sorties gratuites en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | Créations & savoir-faire 2026 à Paris en famille: billets, ateliers et dates | evenements | Paris, Paris, Île-de-France
- /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | MonstroZoo 2026-2027 à Beauval: parcours inclus, visite guidée et tarifs | evenements | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | Halloween 2026 à Mini World Lyon: la Chasse aux 31 Méchants en famille | evenements | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | Luminescences 2026-2027 au zoo d'Amnéville: billets, tarifs et visite en famille | evenements | Amnéville, Moselle, Grand Est
- /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | Salon du Cheval de Paris 2026 en famille: animations, jumping et billets | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne

### Historique Radar lié

- opportunity | /articles/evenements/automne-des-gones-2026-a-lyon-quels-ateliers-gratuits-choisir-avec-les-enfants/ | 2026-10-23T09:31:27.871Z
- opportunity | /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | 2026-10-23T12:33:36.649Z
- opportunity | /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | 2026-10-23T06:21:12.326Z
- opportunity | /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | 2026-10-23T15:29:55.218Z
- opportunity | /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | 2026-10-22T12:58:21.691Z
- opportunity | /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | 2026-10-22T09:37:18.560Z
- opportunity | /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | 2026-10-22T15:49:20.816Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | 2026-10-11T16:33:21.125Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | 2026-10-23T19:58:30.214Z
- opportunity | /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | 2026-10-22T04:59:04.773Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
