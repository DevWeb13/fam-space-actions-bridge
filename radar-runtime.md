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
title: "Monument Jeu d'enfant 2026 à Azay-le-Rideau: animaux cachés, atelier et contes"
subtitle: Les 17 et 18 octobre, deux animations pour des âges différents et une divergence d'horaires à vérifier
summary: Au château d'Azay-le-Rideau, Monument Jeu d'enfant propose une enquête sur les animaux cachés et un atelier créatif dès 5 ans, plus des contes dès 3 ans le samedi. Horaires, prix et conseils pour choisir.
category: evenements
location:
  city: Azay-le-Rideau
  department: Indre-et-Loire
  region: Centre-Val de Loire
keywords:
  - Monument Jeu d'enfant Azay-le-Rideau 2026
  - château Azay-le-Rideau 17 18 octobre animaux cachés
  - atelier animaux Karen Knorr enfants 5 ans
  - contes Azay-le-Rideau 17 octobre dès 3 ans
sources:
  - title: Château d'Azay-le-Rideau — Monument Jeu d'enfant 2026
    url: https://www.azay-le-rideau.fr/agenda/agenda-2026/monument-jeu-d-enfant
  - title: Château d'Azay-le-Rideau — Informations pratiques et tarifs
    url: https://www.azay-le-rideau.fr/visiter/informations-pratiques
  - title: Château d'Azay-le-Rideau — FAQ billetterie et accès
    url: https://www.azay-le-rideau.fr/visiter/faq-toutes-les-reponses-a-vos-questions
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes
  decision: Choisir entre contes dès 3 ans le samedi et enquête/atelier dès 5 ans les deux jours, connaître les horaires réellement proposés, les conditions d'entrée et la préparation pratique avant de venir en famille.
  affiliationPotential: "Entrée à 13 € pour un adulte en octobre, gratuité enfants; billet d'entrée officiel du château (https://tickets.monuments-nationaux.fr/fr-FR/familles?site=2129766360470401831) comme action principale. Aucun billet partenaire exact vérifié pour les animations Monument Jeu d'enfant: ne pas opposer une offre Tiqets de visite ordinaire à une réservation d'atelier non confirmée. Hébergement de week-end précis vérifié sur Booking.com: Le grand nid charmant, Azay-le-Rideau, appartement de deux chambres avec cuisine, environ cinq minutes à pied du château (https://www.booking.com/hotel/fr/le-grand-nid-charmant.html); vérifier disponibilité et prix aux dates choisies."
  gsc:
    retrievedAt: 2026-10-11T05:37:00.000Z
    dataThrough: 2026-10-08
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Château d'Azay-le-Rideau — Monument Jeu d'enfant 2026 »; aucune page forte GSC n'est requise.
---

## Mission retenue

**Monument Jeu d'enfant au château d'Azay-le-Rideau**, les **samedi 17 et dimanche 18 octobre 2026**: enquête autonome au premier étage avec livret-jeu sur les animaux des photographies de Karen Knorr, suivie d'un atelier animé où les enfants inventent une créature. **Dès 5 ans**, les deux jours. En complément, **lecture de contes sur les animaux dès 3 ans**, samedi seulement.

## Pourquoi cette mission

Opportunité familiale imminente, annoncée directement par le château avec activités différenciées selon l'âge, prix et horaires; intention concrète sans article dédié à cet événement à Azay-le-Rideau. Le catalogue contient déjà **« Azay-le-Rideau en famille: une journée entre château et troglodytes »**, qui explique la visite ordinaire, le parc et les Goupillières, et plusieurs autres pages « Monument Jeu d'enfant » concernant des monuments différents. La nouvelle page doit donc traiter les **animations spécifiques des 17-18 octobre**, pas refaire un guide général.

Le meilleur refresh, **Aquarium de La Réunion**, reste `uncertain` côté GSC: l'article complet préserve correctement l'information de fermeture sans annoncer de date certaine de réouverture et aucune amélioration éditoriale substantielle indépendante n'est établie. L'expansion à partir d'une page forte, notamment les transports en famille à Paris, est moins urgente et le guide existant couvre déjà les principaux choix tarifaires.

Les travaux actifs Publication (fouées autour de Saumur) et Destination (Vincennes) ne chevauchent pas cette mission.

## Décision du lecteur

Permettre aux parents de sélectionner **samedi ou dimanche selon l'âge des enfants et l'animation voulue**, de prévoir l'horaire réaliste et le budget familial, puis de vérifier les modalités avant de venir, sans confondre carte-jeu habituelle et enquête temporaire sur les œuvres de Karen Knorr.

## Faits à traiter

- **Visite et atelier animaux**, samedi 17 et dimanche 18 octobre: livret-jeu remis à l'arrivée; enquête autonome parmi les œuvres exposées puis création d'un animal avec les médiatrices en salle pédagogique. **Dès 5 ans**.
- **Divergence à signaler sans trancher:** la page officielle annonce **14 h à 16 h 30** dans son encadré horaires, puis **14 h 30 à 16 h 30** plus bas. Confirmer avec le château le début effectif de l'atelier; **dernier accès à 16 h** pour la manifestation.
- **Contes** par Hélène, libraire locale: **samedi 17 octobre de 14 h 30 à 15 h 30**, dès **3 ans**; possibilité de rejoindre la séance en cours. Aucun conte annoncé le dimanche.
- **Tarif événement**: **13 € par adulte**, gratuité affichée pour les **moins de 26 ans**. La page générale des tarifs précise cependant que la gratuité habituelle des **18-25 ans** dépend de conditions de résidence/nationalité: ne pas promettre à tout adulte de 18 à 25 ans un billet gratuit sans vérifier la règle appliquée à l'événement.
- Le site officiel ne précise pas de supplément dédié ni de réservation obligatoire pour l'atelier: **ne pas en inventer**. Le billet d'entrée ordinaire s'achète en ligne via la billetterie du monument ou sur place; vérifier directement les modalités de participation si nécessaire.
- Organisation: château ouvert **10 h-17 h 15** en octobre, mais suivre **l'accès spécifique de l'événement jusqu'à 16 h**. Poussettes **acceptées dans le parc, non dans le château**; table à langer et chauffe-biberon disponibles. Pique-nique interdit dans l'enceinte; salon de thé saisonnier normalement fermé en octobre.
- Accès: **19 rue Balzac, Azay-le-Rideau**. Parking proche **payant**, avec possibilités plus éloignées dans le village; gare SNCF sur la ligne Tours-Chinon à **2,1 km à pied**. Vérifier l'accessibilité du parcours avec l'établissement plutôt que de la présumer.

## Sources de départ

Priorité à la page officielle de l'événement, à la page tarifs et accès du château ainsi qu'à sa FAQ. La réservation et les éventuelles restrictions doivent être clarifiées avec le château si les sources ne tranchent pas.

## Affiliation

Pour l'activité, orienter vers **la billetterie officielle**, pas vers un billet partenaire générique qui n'assurerait pas l'atelier. Pour un séjour sur place, **Le grand nid charmant** sur Booking.com: appartement de deux chambres avec cuisine, à quelques minutes à pied du château. Présenter cette piste de façon facultative sans promettre disponibilité ni prix pour les 17 et 18 octobre.

## Continuations internes

La page [Azay-le-Rideau en famille: une journée entre château et troglodytes](https://www.fam-space.fr/articles/voyages/azay-le-rideau-en-famille-une-journee-entre-chateau-et-troglodytes/) prend le relais pour la visite ordinaire, le parc, les Goupillières et le programme d'une journée. Un renvoi vers la page générale [Monument Jeu d'enfant 2026: choisir une visite adaptée à l'âge](https://www.fam-space.fr/articles/evenements/monument-jeu-d-enfant-2026-comment-choisir-une-visite-adaptee-a-l-age-des-enfants/) n'est utile que pour comparer plusieurs monuments: ne pas reproduire ici le tour de France des animations.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/voyages/azay-le-rideau-en-famille-une-journee-entre-chateau-et-troglodytes/ | Azay-le-Rideau en famille: une journée entre château et troglodytes | voyages | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | Monument jeu d'enfant 2026 au château de Vincennes: quel atelier choisir ? | evenements | Vincennes, Val-de-Marne, Île-de-France
- /articles/sorties/chateau-de-chenonceau-en-famille-billets-duree-et-conseils-avec-des-enfants/ | Château de Chenonceau en famille: billets, durée et conseils avec des enfants | sorties | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/monument-jeu-d-enfant-2026-comment-choisir-une-visite-adaptee-a-l-age-des-enfants/ | Monument jeu d'enfant 2026: comment choisir une visite adaptée à l'âge des enfants | evenements
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | Monument Jeu d’Enfant au château d’Angers: dragons et ateliers le 17 octobre 2026 | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/sorties/camp-batisseurs-chinon-famille-2026/ | Camp des bâtisseurs à Chinon: une immersion médiévale en famille jusqu’au 28 août | sorties | Chinon, Indre-et-Loire, Centre-Val de Loire
- /articles/sorties/vacances-de-la-toussaint-2026-au-musee-carnavalet-quelle-activite-choisir-selon-l-age/ | Vacances de la Toussaint 2026 au musée Carnavalet: activités en famille dès 4 ans | sorties | Paris, Paris, Île-de-France
- /articles/sorties/villandry-en-famille-jardins-seuls-ou-chateau-et-jardins/ | Villandry en famille: jardins seuls ou château et jardins ? | sorties | Villandry, Indre-et-Loire, Centre-Val de Loire
- /articles/bons-plans/amboise-city-pass-2026-quand-devient-il-vraiment-rentable/ | Amboise City Pass 2026: quand devient-il vraiment rentable? | bons-plans | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/parentalite/laep-en-indre-et-loire-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP en Indre-et-Loire: où aller avec un enfant de moins de 6 ans | parentalite | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/cuisine/marche-d-amboise-composer-un-pique-nique-tourangeau-avec-des-enfants/ | Marché d'Amboise: composer un pique-nique tourangeau avec des enfants | cuisine | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/maison/maison-de-vacances-a-amboise-avec-des-enfants-7-criteres-pour-bien-choisir/ | Maison de vacances à Amboise avec des enfants: 7 critères pour bien choisir | maison | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/vie-pratique/transport-scolaire-remi-en-indre-et-loire-que-faire-apres-la-date-limite-2026/ | Transport scolaire Rémi en Indre-et-Loire: que faire après la date limite 2026 | vie-pratique | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | Nuit des Châteaux 2026 à Tanlay: visites aux bougies les 16 et 17 octobre | evenements | Tanlay, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | Monument jeu d’enfant à Aigues-Mortes: mini-sacre et escape game les 17 et 18 octobre 2026 | evenements | Aigues-Mortes, Gard, Occitanie
- /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | Festival Lumière 2026 avec des enfants: Chaplin, Laurel & Hardy et les bons billets | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-au-chateau-de-grignan-dates-tarifs-et-visite-en-famille/ | Noël 2026 au château de Grignan: dates, tarifs et visite en famille | evenements | Grignan, Drôme, Auvergne-Rhône-Alpes
- /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | Día de los Muertos 2026 au Jardin d’Acclimatation: programme, billets et tailles | evenements | Paris, Paris, Île-de-France
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | Fête de la mer 2026 à Marseille avec des enfants: quelle escale choisir? | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/ | Marché de Noël de Lille 2026 en famille: village, Grande Roue et infos pratiques | evenements | Lille, Nord, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | 2026-10-08T14:56:52.034Z
- opportunity | /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | 2026-10-10T15:40:28.185Z
- opportunity | /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | 2026-10-06T16:58:51.946Z
- opportunity | /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | 2026-10-06T19:20:39.093Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | 2026-10-10T17:38:43.806Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | 2026-10-10T08:38:56.921Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | 2026-10-09T18:35:04.031Z
- opportunity | /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | 2026-10-11T09:17:01.561Z
- opportunity | /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | 2026-10-09T14:37:47.734Z
- opportunity | /articles/sorties/vacances-de-la-toussaint-2026-au-musee-carnavalet-quelle-activite-choisir-selon-l-age/ | 2026-10-07T12:23:23.783Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
