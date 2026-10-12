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
title: "Halloween 2026 à la Tour de l'Horloge de Guînes: musée hanté, contes et nocturne"
subtitle: Du 18 octobre au 1er novembre, choisir entre visite libre, Soupe aux Contes et soirée gratuite du 30 octobre
summary: "À Guînes, la Tour de l'Horloge propose un musée hanté pour Halloween 2026: visites sans réservation, contes à dates fixes et nocturne gratuite le 30 octobre sur inscription. Horaires, tarifs et formule famille."
category: evenements
location:
  city: Guînes
  department: Pas-de-Calais
  region: Hauts-de-France
keywords:
  - Halloween 2026 Guînes Tour de l'Horloge
  - musée hanté Guînes 18 octobre 1er novembre 2026
  - Soupe aux Contes Guînes 19 22 26 29 octobre
  - nocturne gratuite Tour de l'Horloge 30 octobre
  - Tour de l'Horloge Guînes tarifs famille 2026
sources:
  - title: La Tour de l'Horloge — Le musée hanté, Halloween 2026
    url: https://www.tour-horloge-guines.com/actualites/musee-hante-halloween-2026
  - title: La Tour de l'Horloge — Horaires, tarifs 2026, accessibilité et parking
    url: https://www.tour-horloge-guines.com/horaires-tarifs-pmr
  - title: La Tour de l'Horloge — Présentation du musée et durée de visite
    url: https://www.tour-horloge-guines.com/
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne
  decision: Choisir la formule adaptée à sa famille (visite libre, séance de contes ou nocturne gratuite), connaître le coût réel selon le nombre et l'âge des enfants et réserver uniquement lorsque c'est nécessaire, sans se déplacer un samedi où le musée est fermé.
  affiliationPotential: "Action principale: entrée au musée via l'exploitant; aucune billetterie partenaire vérifiée. Visite libre sans réservation, mais contes et nocturne sur inscription téléphonique au 03 21 19 59 00. Pour un séjour près de Calais, hébergement familial facultatif vérifié sur Booking.com: L'Échappée Verte à Guînes, maison entière avec deux chambres, cuisine et parking (https://www.booking.com/hotel/fr/petite-maison-2-chambres-a-20min-du-site-des-2-caps.fr.html); vérifier les dates et la capacité familiale avant toute proposition, sans prétendre que l'entrée au musée nécessite un séjour."
  gsc:
    retrievedAt: 2026-10-12T04:49:15.779Z
    dataThrough: 2026-10-09
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « La Tour de l'Horloge — Le musée hanté, Halloween 2026 »; aucune page forte GSC n'est requise.
---

## Mission retenue

Une page pratique sur **Le Musée Hanté, Halloween 2026 à la Tour de l'Horloge de Guînes**, musée interactif d'histoire situé **rue du Château, 62340 Guînes**, du **18 octobre au 1er novembre 2026**. Montrer les trois expériences réellement distinctes: la visite costumée accessible sans réservation, **La Soupe aux Contes** à dates fixes et la **nocturne gratuite du vendredi 30 octobre**, limitée à la salle médiévale au rez-de-chaussée.

## Pourquoi cette mission

Le meilleur refresh du snapshot, **Carte Tattoo Isère 2026-2027**, porte le signal **uncertain** et son article complet sur master traite déjà montants, bonus Caf, éligibilité, partenaires, démarches, échéances et aide téléphonique: aucune correction substantielle indépendante n'a été vérifiée. L'expansion envisagée depuis la page forte **Transports à Paris avec des enfants** est moins urgente: le guide existant traite déjà le choix des titres, les réductions enfants, les aéroports et la durée du séjour. À Guînes, l'événement est imminent, avec plusieurs formules et des dates de réservation différentes qui nécessitent une vraie décision familiale. Le catalogue de 659 articles et le contrôle `probableDuplicates` ne trouvent aucun article sur ce musée à Guînes; les correspondances concernent d'autres manifestations de Toussaint, notamment au Louvre-Lens. Le travail Destination actuellement indiqué est consacré à Vincennes, sans chevauchement.

## Décision du lecteur

Savoir **quel jour venir, quelle formule choisir, combien payer en famille et quand appeler pour réserver**. Ne pas confondre l'accès libre payant au musée, les séances de contes sur réservation et la seule animation nocturne annoncée gratuite.

## Faits à traiter

- **18 octobre au 1er novembre**: musée hanté ouvert **de 14 h à 18 h tous les jours sauf le samedi**; **visite libre sans réservation**. Costumes, drakkar, jeux anciens et confection d'un panier à bonbons avec surveillance parentale. Durée indicative du parcours normal: **1 h 30**.
- **La Soupe aux Contes**: lundis **19 et 26** et jeudis **22 et 29 octobre**, à **14 h et 16 h**, sur réservation au **03 21 19 59 00**. Ne pas inventer un tarif supplémentaire ou affirmer que les contes sont inclus sans vérification.
- **Vendredi 30 octobre**: nocturne **gratuite sur réservation**, à **18 h 30 et 19 h 30**, avec conte, dégustation de soupe, **accès au rez-de-chaussée seulement (salle médiévale)** et places limitées. Ne pas la présenter comme une visite gratuite intégrale.
- Tarifs d'entrée 2026 du musée: **7 € adulte**, **5 € enfant de 4 à 12 ans**, **gratuit moins de 4 ans**, **pack famille 24 € pour deux adultes et deux à quatre enfants**. Comparer au besoin les sommes à l'unité: avantage tarifaire du pack surtout avec trois ou quatre enfants payants.
- **Rue du Château, Guînes**. Stationnement annoncé place Foch et place des Tilleuls; deux places PMR place Foch, à environ 50 m. Accessibilité labellisée Tourisme & Handicap (moteur et mental), contacter le musée pour les besoins individuels. Enfants accompagnés. Bien distinguer règles de visite et éventuelles conditions propres aux animations.
- Source organisatrice prioritaire, informations susceptibles d'évoluer: confirmer les places de contes et de nocturne par téléphone.

## Sources de départ

L'[annonce officielle du Musée Hanté 2026](https://www.tour-horloge-guines.com/actualites/musee-hante-halloween-2026) pour dates, activités, réservation et nocturne; les [horaires, prix et informations d'accessibilité officiels](https://www.tour-horloge-guines.com/horaires-tarifs-pmr) pour le calcul familial; le [site du musée](https://www.tour-horloge-guines.com/) pour le caractère interactif et la durée habituelle.

## Affiliation

Ne remplacer ni le numéro de réservation officiel ni les entrées sur place par un lien de billetier tiers. En seconde intention seulement, pour une famille organisant plusieurs sorties autour de Calais, **L'Échappée Verte à Guînes** est un hébergement entier à deux chambres avec cuisine et parking, repéré sur Booking.com. Vérifier disponibilité, capacité et conditions aux dates envisagées avant de le mentionner dans l'article.

## Continuations internes

La page **Toussaint 2026 au Louvre-Lens** (/articles/sorties/toussaint-2026-au-louvre-lens-quelle-activite-choisir-selon-l-age/) peut servir uniquement de **seconde idée de sortie** pour des vacances plus longues dans le Pas-de-Calais; ne pas répéter son programme. Éviter les autres articles Halloween situés hors du secteur: leurs conseils de billetterie ou d'animations ne s'appliquent pas à la Tour de l'Horloge.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/vacances-de-la-toussaint-2026-au-louvre-quelles-activites-choisir-avec-des-enfants/ | Vacances de la Toussaint 2026 au Louvre: le programme famille du 17 octobre au 1er novembre | sorties | Paris, Paris, Île-de-France
- /articles/sorties/toussaint-2026-au-louvre-lens-quelle-activite-choisir-selon-l-age/ | Toussaint 2026 au Louvre-Lens: quelle activité choisir selon l'âge? | sorties | Lens, Pas-de-Calais, Hauts-de-France
- /articles/evenements/fete-des-rues-aux-enfants-2026-a-paris-ou-aller-selon-l-arrondissement/ | Fête des rues aux enfants 2026 à Paris: où aller selon l'arrondissement? | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-au-musee-carnavalet-quelle-activite-choisir-selon-l-age/ | Vacances de la Toussaint 2026 au musée Carnavalet: activités en famille dès 4 ans | sorties | Paris, Paris, Île-de-France
- /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | Fête de la mer 2026 à Marseille avec des enfants: quelle escale choisir? | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/fete-de-la-science-2026-au-c2n-de-palaiseau-une-journee-gratuite-en-famille/ | Fête de la science 2026 au C2N de Palaiseau: une journée gratuite en famille | evenements | Palaiseau, Essonne, Île-de-France
- /articles/voyages/peur-sur-le-parc-2026-en-famille-journee-nocturne-billets-et-hebergement/ | Peur sur le Parc 2026 en famille: journée, nocturne, billets et hébergement | voyages | Plailly, Oise, Hauts-de-France
- /articles/cuisine/foire-aux-harengs-de-dieppe-2026-quoi-gouter-et-comment-preparer-la-journee/ | Foire aux Harengs de Dieppe 2026: quoi goûter et comment préparer la journée | cuisine | Dieppe, Seine-Maritime, Normandie
- /articles/sorties/parc-bagatelle-en-famille-quelles-attractions-selon-la-taille-des-enfants/ | Parc Bagatelle en famille: quelles attractions selon la taille des enfants? | sorties | Merlimont, Pas-de-Calais, Hauts-de-France
- /articles/bons-plans/nausicaa-a-8-pour-les-adultes-et-6-pour-les-enfants-qui-peut-profiter-des-dimanches-boulonnais/ | Nausicaá à 8 € pour les adultes et 6 € pour les enfants: qui peut profiter des Dimanches Boulonnais? | bons-plans | Boulogne-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/parentalite/creche-a-l-abordage-a-etaples-accueil-ponctuel-ou-regulier-que-choisir/ | Crèche À l'abordage à Étaples: accueil ponctuel ou régulier, que choisir ? | parentalite | Étaples-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/cuisine/ratte-du-touquet-eau-vapeur-ou-four-quelle-cuisson-choisir/ | Ratte du Touquet: eau, vapeur ou four, quelle cuisson choisir? | cuisine | Le Touquet-Paris-Plage, Pas-de-Calais, Hauts-de-France
- /articles/maison/lens-lievin-jusqu-a-240-pour-recuperer-l-eau-de-pluie/ | Lens-Liévin: jusqu'à 240 € pour récupérer l'eau de pluie | maison | Lens, Pas-de-Calais, Hauts-de-France
- /articles/vie-pratique/cantine-au-college-dans-le-pas-de-calais-les-tarifs-2026-et-les-reductions-pour-les-boursiers/ | Cantine au collège dans le Pas-de-Calais: les tarifs 2026 et les réductions pour les boursiers | vie-pratique | Hénin-Beaumont, Pas-de-Calais, Hauts-de-France
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | Monument Jeu d'enfant 2026 à Azay-le-Rideau: animaux cachés et contes en famille | evenements | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | Nuit des Châteaux 2026 à Tanlay: visites aux bougies les 16 et 17 octobre | evenements | Tanlay, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | Monument jeu d’enfant à Aigues-Mortes: mini-sacre et escape game les 17 et 18 octobre 2026 | evenements | Aigues-Mortes, Gard, Occitanie
- /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | Festival Lumière 2026 avec des enfants: Chaplin, Laurel & Hardy et les bons billets | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | Monument Jeu d’Enfant au château d’Angers: dragons et ateliers le 17 octobre 2026 | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | Monument jeu d'enfant 2026 au château de Vincennes: quel atelier choisir ? | evenements | Vincennes, Val-de-Marne, Île-de-France

### Historique Radar lié

- opportunity | /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | 2026-10-10T15:40:28.185Z
- opportunity | /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | 2026-10-06T16:58:51.946Z
- opportunity | /articles/evenements/fete-des-rues-aux-enfants-2026-a-paris-ou-aller-selon-l-arrondissement/ | 2026-10-03T14:16:09.016Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | 2026-10-10T17:38:43.806Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | 2026-10-11T16:33:21.125Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | 2026-10-10T08:38:56.921Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | 2026-10-09T18:35:04.031Z
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
