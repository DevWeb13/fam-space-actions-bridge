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
title: "Noël à Caen 2026 en famille : marché ou visite des illuminations ?"
subtitle: Marché du 28 novembre au 29 décembre, visites guidées les 9 et 16 décembre.
summary: Choisir une promenade libre au marché de Noël ou une visite commentée du centre illuminé, selon l'âge des enfants, le temps disponible et le budget.
category: evenements
location:
  city: Caen
  department: Calvados
  region: Normandie
keywords:
  - marché de Noël Caen 2026
  - Noël Caen en famille
  - visite illuminations Caen décembre 2026
sources:
  - title: Caen Événements - Marché de Noël 2026
    url: https://www.caen-evenements.com/evenements/marche-de-noel-2026/
  - title: Caen la mer Tourisme - Dans la ville illuminée, RDV Découverte
    url: https://www.caenlamer-tourisme.fr/agenda-evenements/dans-la-ville-illuminee-en-partenariat-avec-caen-evenements-rdv-decouverte/
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations
  decision: Savoir si une promenade au marché suffit ou si la visite guidée du 9 ou du 16 décembre mérite une réservation pour sa famille.
  affiliationPotential: Aucune billetterie partenaire pertinente pour la visite guidée ; hébergement Booking.com utile pour un week-end, par exemple Hôtel Astrid Caen Centre (chambres familiales vérifiées).
  gsc:
    retrievedAt: 2026-10-30T01:28:25+01:00
    dataThrough: 2026-10-27
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Caen Événements - Marché de Noël 2026 »; aucune page forte GSC n'est requise.
---

## Mission retenue
Préparer Noël à Caen avec des enfants en distinguant le marché saisonnier de la visite guidée du centre illuminé, deux expériences qui n'imposent ni la même durée ni la même réservation.

## Pourquoi cette mission
Édition 2026 et deux séances datées confirmées par les organisateurs, sujet encore absent du catalogue Caen. Le meilleur refresh GSC, Futuroween, est déjà complet et se termine le 1er novembre ; son recul d'exposition ne justifie pas de retoucher une page utile. L'expansion des transports parisiens recoupe déjà les articles sur les titres, Navigo Liberté+, les poussettes et les aéroports.

## Décision du lecteur
Choisir une sortie libre entre les chalets ou réserver 1 h 30 de visite commentée, sans confondre les deux offres ni payer inutilement.

## Faits à traiter
Marché du 28 novembre au 29 décembre 2026, une cinquantaine de chalets selon Caen Événements. Visites les mercredis 9 et 16 décembre de 17 h à 18 h 30, 8 € plein tarif, 6 € réduit, gratuit pour les moins de 10 ans ; réservation obligatoire, pas de vente sur place, fin au marché avec boisson chaude. Vérifier les horaires, l'implantation précise, l'accès libre et les animations 2026 avant de les affirmer : ne pas reprendre le programme 2025. Prévoir un choix simple pour poussette, jeunes enfants et retour après la tombée de la nuit.

## Sources de départ
Caen Événements pour le marché ; Caen la mer Tourisme pour la visite, les tarifs et la réservation.

## Affiliation
L'action principale n'a pas de partenaire de billetterie pertinent : la réservation officielle reste en Sources. Pour les familles qui restent une nuit, Hôtel Astrid Caen Centre sur Booking.com (https://www.booking.com/hotel/fr/astrid.fr.html) propose des chambres familiales ; comparer la capacité et les conditions à la date choisie.

## Continuations internes
- L'article Fam Space sur les tickets Twisto à Caen peut prendre le relais pour les tarifs de transport, sans les redévelopper.
- Ne pas présenter les animations, la parade ou les horaires de Noël 2025 comme des confirmations 2026.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/vie-pratique/quel-ticket-twisto-choisir-a-caen-avec-des-enfants/ | Quel ticket Twisto choisir à Caen avec des enfants? | vie-pratique | Caen, Calvados, Normandie
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/lumieres-de-noel-a-montbeliard-2026-quel-jour-venir-avec-des-enfants/ | Lumières de Noël à Montbéliard 2026: quel jour venir avec des enfants? | evenements | Montbéliard, Doubs, Bourgogne-Franche-Comté
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | Noël des Alpes 2026 à Annecy en famille: marché, patinoire et illuminations | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires et accès | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/parentalite/laep-a-caen-4-lieux-pour-venir-avec-un-enfant-sans-inscription/ | LAEP à Caen: 4 lieux pour venir avec un enfant sans inscription | parentalite | Caen, Calvados, Normandie
- /articles/cuisine/ateliers-cuisine-a-caen-avec-des-enfants-quelle-formule-choisir/ | Bien Dans Son Assiette à Caen: quel atelier cuisine choisir avec un enfant ? | cuisine | Caen, Calvados, Normandie
- /articles/maison/decheteries-de-caen-la-mer-qr-code-ou-plaque-obligatoires-depuis-septembre-2026/ | Déchèteries de Caen la mer: QR code ou plaque obligatoires depuis septembre 2026 | maison | Caen, Calvados, Normandie
- /articles/evenements/equidays-2026-en-famille-dans-le-calvados-villages-gratuits-parade-et-animations/ | Équidays 2026 en famille dans le Calvados: villages gratuits, parade et animations | evenements | Caen, Calvados, Normandie
- /articles/bons-plans/cinema-famille-gratuit-au-memorial-de-caen-pendant-l-ete-2026/ | Cinéma famille gratuit au Mémorial de Caen pendant l'été 2026 | bons-plans | Caen, Calvados, Normandie
- /articles/evenements/week-end-joyeux-caen-2026-famille/ | Week-end joyeux 2026 à Caen: deux jours gratuits au château en famille | evenements | Caen, Calvados, Normandie
- /articles/vie-pratique/ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee/ | Ferry Ouistreham-Portsmouth en famille: préparer le départ et la traversée | vie-pratique | Ouistreham, Calvados, Normandie
- /articles/activites/festyland-avec-de-jeunes-enfants-quelles-attractions-selon-leur-taille/ | Festyland avec de jeunes enfants: quelles attractions selon leur taille? | activites | Carpiquet, Calvados, Normandie
- /articles/voyages/bayeux-en-famille-1-ou-2-jours-et-quel-budget-prevoir/ | Bayeux en famille: 1 ou 2 jours et quel budget prévoir | voyages | Bayeux, Calvados, Normandie
- /articles/sorties/conde-cote-plage-2026-famille/ | Condé Côté Plage 2026 en Normandie: activités gratuites en famille jusqu’au 23 août | sorties | Condé-en-Normandie, Calvados, Normandie
- /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | Festival des Petits Explorateurs 2026 à Dijon: ateliers, horaires et tarifs | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille/ | Flottins d’Évian 2026: un village de Noël en bois flotté à découvrir en famille | evenements | Évian-les-Bains, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | Festival BD Colomiers 2026 en famille: programme, tarifs et accès | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | Ville de Noël d’Arras 2026 en famille: horaires, attractions et budget | evenements | Arras, Pas-de-Calais, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | 2026-10-29T23:28:55.064Z
- opportunity | /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | 2026-10-30T03:27:02.483Z
- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | 2026-10-29T05:28:53.475Z
- opportunity | /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | 2026-10-29T20:30:33.011Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
