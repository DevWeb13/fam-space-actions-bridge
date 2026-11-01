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
title: "Noël 2026 à Sélestat en famille : marchés ou parcours du sapin ?"
subtitle: Choisir entre chalets, expositions et découvertes gratuites selon la date de visite
summary: Du 20 novembre au 27 décembre 2026, Sélestat célèbre l'arbre de Noël avec des marchés et un parcours patrimonial. Dates, gratuités, fermetures et idées de balade avec les enfants.
category: evenements
location:
  city: Sélestat
  department: Bas-Rhin
  region: Grand Est
keywords:
  - Noël Sélestat 2026 famille
  - marchés de Noël Sélestat horaires
  - parcours sapin Noël Sélestat enfants
  - expositions gratuites Noël Sélestat
sources:
  - title: Ville de Sélestat - Noël 2026 et programme général
    url: https://www.selestat.fr/mes-sorties/agenda/noel-a-selestat
  - title: Ville de Sélestat - Marchés de Noël 2026
    url: https://www.selestat.fr/mes-sorties/agenda/noel-a-selestat/les-marches-de-noel
  - title: Ville de Sélestat - Les incontournables en neuf étapes
    url: https://www.selestat.fr/mes-sorties/agenda/noel-a-selestat/les-expositions
  - title: Ville de Sélestat - L'histoire de l'arbre de Noël
    url: https://www.selestat.fr/mes-sorties/agenda/noel-a-selestat/les-expositions/etape-5-lhistoire-de-larbre-de-noel
  - title: Ville de Sélestat - Exposition Meisenthal Pôle Nord Express
    url: https://www.selestat.fr/mes-sorties/agenda/noel-a-selestat/les-expositions/etape-2-exposition-les-boules-de-noel-de-meisenthal-pole-nord-express
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: noel-2026-a-selestat-en-famille-marches-ou-parcours-du-sapin
  decision: Choisir une demi-journée de Noël à Sélestat adaptée à l'âge des enfants et au budget, en distinguant les marchés des visites gratuites, et éviter les dates de fermeture.
  affiliationPotential: "Marchés et plusieurs expositions en accès libre, sans billetterie partenaire naturelle. Pour un week-end, Booking.com propose l'Hôtel Restaurant Vaillant à Sélestat, avec chambres quadruples pour quatre personnes vérifiées ; prix et disponibilités à contrôler selon les dates : https://www.booking.com/hotel/fr/vaillant.fr.html"
  gsc:
    retrievedAt: 2026-11-01T04:25:25+01:00
    dataThrough: 2026-10-29
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Sélestat - Noël 2026 et programme général »; aucune page forte GSC n'est requise.
---

## Mission retenue
Préparer une sortie de Noël 2026 à Sélestat, autour des marchés de trois places et du parcours consacré à l'histoire du sapin, avec un choix concret entre flânerie et expositions.

## Pourquoi cette mission
Programme 2026 détaillé et confirmé par la Ville, départ le 20 novembre, sans article équivalent dans le catalogue. Le refresh Futuroween, premier signal GSC, concerne une manifestation se terminant le 1er novembre et sa baisse d'exposition ne prouve pas une dégradation. Lumigny est déjà complet et son signal est incertain. L'expansion possible de la page forte « Cité des sciences en famille » vers les stages de Noël est distincte, mais deux articles traitent déjà les ateliers et stages de la Toussaint ; Sélestat apporte une nouvelle destination et une décision familiale encore absente.

## Décision du lecteur
Déterminer quand venir pour voir les chalets et une ou deux expositions adaptées aux enfants, ce qui est réellement gratuit, et ce qui reste ouvert après Noël.

## Faits à traiter
- Marchés du 20 novembre au 27 décembre 2026, places de la Victoire, d'Armes et du Dr Maurice Kubler ; dimanche-jeudi 11 h-19 h, vendredi-samedi 11 h-20 h, 24 décembre 11 h-16 h, fermés le 25 décembre. Prolongations éventuelles non garanties.
- Dix sapins suspendus dans l'église Saint-Georges, du 21 novembre au 3 janvier, 9 h-19 h hors offices, entrée libre ; jardin du sapin Hansel et Gretel du 27 novembre au 3 janvier, 9 h-18 h, fermé les 25 et 31 décembre et le 1er janvier.
- Exposition « Pôle Nord Express » à la Bibliothèque Humaniste du 21 novembre au 31 décembre, entrée de l'exposition gratuite mais musée payant ; fermée le lundi et les 25-26 décembre, horaires spécifiques les 24 et 31.
- Boîte aux lettres du Père Noël place d'Armes du 20 novembre au 17 décembre. Vérifier les animations datées, l'accès en poussette, les sanitaires et les trajets gare-centre sans supposer de services non documentés.
- Ne pas présenter les neuf étapes du parcours comme toutes gratuites ou ouvertes aux mêmes dates.

## Sources de départ
Pages officielles de la Ville listées en frontmatter, à compléter en rédaction par les horaires propres aux étapes choisies.

## Affiliation
Aucun billet partenaire pertinent pour les marchés gratuits. Hôtel Restaurant Vaillant sur Booking.com : chambres quadruples de quatre couchages vérifiées, sans prix ni disponibilité garantis pour Noël.

## Continuations internes
- Relier la Maison du Pain à Sélestat pour les détails de la visite permanente, sans recopier son contenu.
- Relier le marché de Noël de Strasbourg et, si utile, le guide de Colmar uniquement pour les familles qui envisagent plusieurs villes, sans transformer cet article en comparatif régional.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/cuisine/maison-du-pain-a-selestat-decouvrir-la-boulangerie-en-famille/ | Maison du Pain à Sélestat: découvrir la boulangerie en famille | cuisine | Sélestat, Bas-Rhin, Grand Est
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/ | Noël à Trévarez 2026 en famille: dates, horaires et réservation | evenements | Saint-Goazec, Finistère, Bretagne
- /articles/evenements/noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges/ | Noël à Aix-en-Provence 2026 en famille: marchés, santons et manèges | evenements | Aix-en-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/noel-a-metz-2026-en-famille-marches-et-sentier-des-lanternes/ | Noël à Metz 2026 en famille: marchés et Sentier des Lanternes | evenements | Metz, Moselle, Grand Est
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | Lumières de Laval 2026 en famille: marchés, grande roue et croisière | evenements | Laval, Mayenne, Pays de la Loire
- /articles/maison/renover-sa-maison-dans-l-eurometropole-de-strasbourg-aides-et-demarches-2026/ | Rénover sa maison dans l’Eurométropole de Strasbourg: aides et démarches 2026 | maison | Strasbourg, Bas-Rhin, Grand Est
- /articles/vie-pratique/parking-relais-a-strasbourg-en-famille-comment-choisir-son-p-r-et-son-forfait/ | Parking-relais à Strasbourg en famille: comment choisir son P+R et son forfait | vie-pratique | Strasbourg, Bas-Rhin, Grand Est
- /articles/activites/le-vaisseau-a-strasbourg-quel-billet-choisir-pour-une-sortie-avec-des-enfants/ | Le Vaisseau à Strasbourg: quel billet choisir pour une sortie avec des enfants | activites | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/course-des-chateaux-d-ottrott-2026-quelles-epreuves-choisir-pour-les-enfants/ | Course des Châteaux d'Ottrott 2026: quelles épreuves choisir pour les enfants? | evenements | Ottrott, Bas-Rhin, Grand Est
- /articles/voyages/wissembourg-sans-voiture-avec-des-enfants-que-faire-a-pied-sur-une-journee/ | Wissembourg sans voiture avec des enfants: que faire à pied sur une journée? | voyages | Wissembourg, Bas-Rhin, Grand Est
- /articles/sorties/chateau-du-haut-koenigsbourg-en-famille-tarifs-2026-et-conseils-de-visite/ | Château du Haut-Koenigsbourg en famille: tarifs 2026 et conseils de visite | sorties | Orschwiller, Bas-Rhin, Grand Est
- /articles/bons-plans/pass-strasbourg-et-nord-alsace-en-famille-quand-est-il-vraiment-rentable/ | Pass Strasbourg et Nord Alsace en famille: quand est-il vraiment rentable? | bons-plans | Strasbourg, Bas-Rhin, Grand Est
- /articles/activites/arachnima-strasbourg-famille-2026/ | Arachnima 2026 à Strasbourg: dernier week-end gratuit au square Hasek | activites | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/planete-ocean-a-paris-preparer-la-visite-en-famille/ | Planète Océan à Paris: préparer la visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | Noël 2026 à Paris La Défense en famille: marché, animations et patinoire | evenements | Puteaux, Hauts-de-Seine, Île-de-France
- /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | Noël 2026 à Cannes en famille: marché du centre et Palm Beach | evenements | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | Luminéales du Thabor 2026 à Rennes: tarifs, horaires et visite en famille | evenements | Rennes, Ille-et-Vilaine, Bretagne
- /articles/evenements/tous-en-sons-2026-a-marseille-quel-spectacle-choisir-selon-l-age-des-enfants/ | Tous en Sons ! 2026 à Marseille: spectacles enfants, âges et tarifs | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | Noël 2026 à Toulon en famille: marché, patinoire et horaires | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur

### Historique Radar lié

- opportunity | /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | 2026-10-31T19:33:18.323Z
- opportunity | /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | 2026-10-30T09:27:15.122Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | 2026-10-31T22:36:58.800Z
- opportunity | /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | 2026-11-01T01:35:08.448Z
- opportunity | /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | 2026-10-31T10:28:17.432Z
- opportunity | /articles/evenements/noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges/ | 2026-10-25T15:16:03.590Z
- opportunity | /articles/evenements/tous-en-sons-2026-a-marseille-quel-spectacle-choisir-selon-l-age-des-enfants/ | 2026-10-31T13:29:50.851Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
