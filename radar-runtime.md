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
title: "Au Creux de l'Oreille 2026 à Noirlac: quels spectacles et ateliers choisir avec les enfants?"
subtitle: "Du 17 au 22 octobre dans le Cher: concerts dès 6 mois, contes, visites et ateliers selon l'âge et le budget"
summary: "Au Creux de l'Oreille 2026 à l'abbaye de Noirlac: spectacles et ateliers pour les enfants du 17 au 22 octobre, avec âges, tarifs et réservations."
category: evenements
location:
  city: Bruère-Allichamps
  department: Cher
  region: Centre-Val de Loire
keywords:
  - Au Creux de l'Oreille 2026
  - festival famille abbaye de Noirlac octobre 2026
  - spectacles ateliers enfants Noirlac Toussaint
sources:
  - title: Abbaye de Noirlac - Au Creux de l'Oreille 2026, programme et réservations
    url: https://www.abbayedenoirlac.fr/fr/au-creux-de-l-oreille
  - title: Abbaye de Noirlac - Concert pour mon tout-petit, La danse de la pluie
    url: https://www.abbayedenoirlac.fr/agenda/programmation-artistique/concert-pour-mon-tout-petit-la-danse-de-la-pluie
  - title: Abbaye de Noirlac - L'Affaire méchant loup
    url: https://www.abbayedenoirlac.fr/agenda/programmation-artistique/l-affaire-mechant-loup
  - title: Abbaye de Noirlac - Les Histoires manquantes
    url: https://www.abbayedenoirlac.fr/agenda/programmation-artistique/les-histoires-manquantes
  - title: Abbaye de Noirlac - Visite Bout d'Choux
    url: https://www.abbayedenoirlac.fr/agenda/activites-patrimoine/visite-bout-d-choux-copie
  - title: Abbaye de Noirlac - Atelier Moulage d'empreinte animale
    url: https://www.abbayedenoirlac.fr/agenda/programmation-artistique/au-creux-de-l-oreille-festival-famille/atelier-moulage-d-empreinte-animale
  - title: Destination Sud Berry - Festival famille à Noirlac
    url: https://www.destination-sud-berry.com/temps-fort/au-creux-de-loreille-festival-famille-a-noirlac/
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants
  decision: Choisir un spectacle, une visite ou un atelier réellement adapté à l'âge de chaque enfant entre le 17 et le 22 octobre, comprendre le prix de chaque activité et réserver le bon créneau auprès de l'abbaye.
  affiliationPotential: Billetterie des spectacles et ateliers exclusivement auprès de l'abbaye; aucun lien de billetterie partenaire naturel vérifié. Pour une famille venue de loin, Le Noirlac à Saint-Amand-Montrond est référencé avec chambres familiales sur Booking.com (https://www.booking.com/hotel/fr/le-noirlac.fr.html); mention secondaire de séjour uniquement, sans prix ni disponibilité supposés.
  gsc:
    retrievedAt: 2026-10-14T04:26:13.937Z
    dataThrough: 2026-10-11
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Abbaye de Noirlac - Au Creux de l'Oreille 2026, programme et réservations »; aucune page forte GSC n'est requise.
---

## Mission retenue
Festival familial «Au Creux de l'Oreille» à l'abbaye de Noirlac, à Bruère-Allichamps (Cher), du 17 au 22 octobre 2026. Le week-end des 17-18 est consacré aux concerts, contes et jeux; du 19 au 22, le programme propose notamment des visites et ateliers de découverte de l'abbaye et de son bocage. Ce n'est ni un événement gratuit dans son ensemble ni une sortie uniforme pour tous les âges.

## Pourquoi cette mission
Opportunité imminente (dans trois jours), calendrier officiel et fiches d'activités déjà détaillés. Aucun doublon direct dans le catalogue compact ni dans l'historique Radar; les travaux Publication à Compiègne et Destination à Vincennes/Haut-Rhin ne chevauchent pas cette décision. Le premier refresh GSC, Carte Tattoo Isère, reste «uncertain», sans perte de classement ni raison éditoriale indépendante confirmée. La meilleure page forte (Halloween à Villersexel) traite déjà son propre événement et n'offre pas ici d'expansion distincte suffisamment prioritaire.

## Décision du lecteur
Comparer les âges admis, la durée, le créneau et le coût, puis réserver une activité adaptée à l'enfant, sans confondre les offres du week-end et celles des jours suivants.

## Faits à traiter
- Festival à Noirlac les 17-22 octobre: samedi/dimanche 11h-18h30; lundi-jeudi 10h30-17h selon l'organisateur. Réservation des spectacles et activités via resa@noirlac.fr ou 02 48 96 17 16; vérifier chaque fiche.
- «La danse de la pluie» (Mikrokosmos): 17 octobre à 17h30, 18 octobre à 11h et 17h30; 6 mois-7 ans, 30 min, 6 €.
- «L'Affaire méchant loup»: les 17-18 à 16h, dès 5 ans, 45 min, 6 €; atelier associé à 17h, dès 5 ans, 6 €. «Les Histoires manquantes»: mêmes jours à 15h et 17h, dès 6 ans, 50 min, 6 €.
- Après le week-end: visite Bout d'Choux le 21 à 10h30, 3-5 ans, 1h30, 6 €; moulage d'empreinte animale le 21 à 14h30, dès 6 ans, 8 € par participant; landart le 22 à 10h30, 3-5 ans, 6 € par participant; «Jouons avec les Grisailles» le 22 à 10h30, dès 8 ans, 8 €. Les activités nature ont leurs propres contraintes, notamment rendez-vous anticipé, chaussures adaptées et adulte accompagnant.
- Ne pas généraliser un tarif unique à tout le festival: la visite «Sur la piste des animaux sauvages» le 19, accessible à partir de 9 ans, annonce 5 € adulte, 3,50 € réduit, gratuit moins de 12 ans. Ludothèque Micado et goûter offerts aux enfants à distinguer des spectacles payants. Vérifier la coexistence des séances et les places avant de proposer un parcours.
- L'abbaye annonce parfois des règles tarifaires de visite libre particulières pendant le festival: ne pas extrapoler les prix habituels de visite du monument.

## Sources de départ
Page officielle du festival et fiches de spectacles/ateliers de l'abbaye, complétées par l'office de tourisme Destination Sud Berry; les URL exactes sont dans le frontmatter.

## Affiliation
Action principale: réserver directement auprès de l'abbaye, sans partenaire de billetterie crédible trouvé. Hébergement secondaire utile à une famille qui transforme le festival en séjour: Le Noirlac à Saint-Amand-Montrond sur Booking.com, chambres familiales listées; contrôler les besoins réels avant intégration.

## Continuations internes
Aucune page ne traite ce festival ni ses réservations. Ne pas recycler les articles consacrés à d'autres festivals ou abbayes. Une éventuelle référence à Bourges en famille ne serait utile que si la rédaction documente un véritable séjour à Bourges; sinon, aucun lien interne à forcer.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/les-expressifs-2026-a-poitiers-trois-jours-de-spectacles-gratuits/ | Les Expressifs 2026 à Poitiers: trois jours de spectacles gratuits | evenements | Poitiers, Vienne, Nouvelle-Aquitaine
- /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | Famille en fête 2026 en Gironde: ateliers gratuits pour les 0-6 ans | evenements | Saint-Loubès, Gironde, Nouvelle-Aquitaine
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/mon-premier-festival-2026-paris-film-age/ | Mon Premier Festival 2026 à Paris: quel film choisir selon l'âge? | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | Vacances de la Toussaint 2026 à la Cité des sciences: les ateliers numériques gratuits avec des enfants | sorties | Paris, Paris, Île-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | Monument jeu d'enfant 2026 au château de Vincennes: quel atelier choisir ? | evenements | Vincennes, Val-de-Marne, Île-de-France
- /articles/sorties/toussaint-2026-au-louvre-lens-quelle-activite-choisir-selon-l-age/ | Toussaint 2026 au Louvre-Lens: quelle activité choisir selon l'âge? | sorties | Lens, Pas-de-Calais, Hauts-de-France
- /articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/ | Lire en Poche 2026 à Gradignan avec des enfants: organiser une journée sans perdre les ateliers | evenements | Gradignan, Gironde, Nouvelle-Aquitaine
- /articles/cuisine/galette-aux-pommes-de-terre-du-berry-une-recette-a-faire-en-famille/ | Galette aux pommes de terre du Berry: une recette à faire en famille | cuisine | Bourges, Cher, Centre-Val de Loire
- /articles/maison/encombrants-a-bourges-quand-sortir-meubles-et-gros-objets/ | Encombrants à Bourges: quand sortir meubles et gros objets | maison | Bourges, Cher, Centre-Val de Loire
- /articles/vie-pratique/carte-famille-de-bourges-qui-peut-l-obtenir-et-a-quoi-sert-elle/ | Carte famille de Bourges: qui peut l'obtenir et à quoi sert-elle? | vie-pratique | Bourges, Cher, Centre-Val de Loire
- /articles/voyages/bourges-en-famille-ou-dormir-pour-visiter-sans-voiture/ | Bourges en famille: où dormir pour visiter sans voiture | voyages | Bourges, Cher, Centre-Val de Loire
- /articles/voyages/week-end-en-famille-au-lac-de-sidiailles-activites-baignade-et-budget/ | Week-end en famille au lac de Sidiailles: activités, baignade et budget | voyages | Sidiailles, Cher, Centre-Val de Loire
- /articles/evenements/guinguette-familles-rians-2026/ | Guinguette des familles 2026 à Rians: les rendez-vous à ne pas manquer jusqu’au 12 août | evenements | Rians, Cher, Centre-Val de Loire
- /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | Abracada BOUH 2026 à Montpellier: programme et tarifs au château de Flaugergues | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | Fête de l'Automne 2026 à Terra Botanica: animations et tarifs | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | Monument jeu d'enfant 2026 à Saint-Denis: atelier Dagobert le 17 octobre | evenements | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | Halloween 2026 au Safari de Peaugres: animations, tarifs et Festival Lumières Sauvages | evenements | Peaugres, Ardèche, Auvergne-Rhône-Alpes
- /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | Halloween 2026 au Parc Spirou: billets, nocturnes Naruto et maison hantée | evenements | Monteux, Vaucluse, Provence-Alpes-Côte d'Azur
- /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | Halloween 2026 au château de Couches: atelier citrouille et jeu Mystères & Sortilèges | evenements | Couches, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | Halloween 2026 à la Tour de l'Horloge de Guînes: visites, contes et nocturne | evenements | Guînes, Pas-de-Calais, Hauts-de-France
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | 2026-10-13T20:41:25.500Z
- refresh | /articles/maison/encombrants-a-bourges-quand-sortir-meubles-et-gros-objets/ | 2026-10-03T03:24:30.315Z
- opportunity | /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | 2026-10-12T08:10:30.674Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- opportunity | /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | 2026-10-13T12:37:05.098Z
- opportunity | /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | 2026-10-12T10:40:26.563Z
- opportunity | /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | 2026-10-12T14:00:32.202Z
- opportunity | /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | 2026-10-12T17:34:53.933Z
- opportunity | /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | 2026-10-13T05:01:12.150Z
- refresh | /articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/ | 2026-10-06T12:23:52.449Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
