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
title: "Toussaint 2026 au château de Pierrefonds: atelier lanterne ou Halloween spirite?"
subtitle: "Deux rendez-vous distincts: exploration dès 4 ans pendant les vacances, enquête nocturne dès 10 ans le 31 octobre"
summary: Au château de Pierrefonds, les familles choisissent entre une visite-atelier à la lanterne dès 4 ans et une enquête spirite d'Halloween dès 10 ans. Dates, tarifs, réservation et accès.
category: evenements
location:
  city: Pierrefonds
  department: Oise
  region: Hauts-de-France
keywords:
  - Toussaint 2026 château de Pierrefonds famille
  - Raconte-moi le château à la lanterne octobre 2026
  - Halloween Eugénie es-tu là Pierrefonds 31 octobre
  - atelier Pierrefonds enfants 4 ans 10 ans
sources:
  - title: Château de Pierrefonds — Raconte-moi le château à la lanterne
    url: https://www.chateau-pierrefonds.fr/agenda/raconte-moi-le-chateau-a-la-lanterne
  - title: "Château de Pierrefonds — Halloween: Eugénie es-tu là?"
    url: https://www.chateau-pierrefonds.fr/agenda/halloween-eugenie-es-tu-la
  - title: Château de Pierrefonds — Informations pratiques
    url: https://www.chateau-pierrefonds.fr/visiter/informations-pratiques
  - title: Château de Pierrefonds — Accessibilité
    url: https://www.chateau-pierrefonds.fr/visiter/visiteurs-en-situation-de-handicap
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite
  decision: Choisir et réserver l'animation réellement adaptée à l'âge des enfants et au jour de visite, sans confondre billet d'atelier, billet de la soirée d'Halloween et entrée ordinaire au château.
  affiliationPotential: "Action principale: billetteries officielles des deux événements, accessibles depuis chacune des pages agenda du château; aucun billet partenaire spécifique équivalent vérifié, ne pas présenter un billet de visite ordinaire comme donnant accès aux animations. Séjour facultatif: Maison de charme avec vue sur château, 7 rue du Beaudon à Pierrefonds, maison entière de trois chambres avec cuisine à environ 500 m du château, vérifiée sur Booking.com (https://www.booking.com/hotel/fr/maison-de-charme-avec-vue-sur-chateau.fr.html); disponibilité et prix à vérifier pour les dates choisies."
  gsc:
    retrievedAt: 2026-10-11T05:37:00.000Z
    dataThrough: 2026-10-08
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Château de Pierrefonds — Raconte-moi le château à la lanterne »; aucune page forte GSC n'est requise.
---

## Mission retenue

Préparer une page sur **deux animations familiales distinctes au château de Pierrefonds pendant la Toussaint 2026**: « Raconte-moi le château à la lanterne » (atelier et visite hors circuit, dès 4 ans) et « Halloween: Eugénie es-tu là? » (enquête spirite immersive nocturne, dès 10 ans). Ne pas les confondre avec la visite libre ordinaire.

## Pourquoi cette mission

**Opportunité imminente et documentée** sur les pages officielles du monument, avec âges, dates, séances, tarifs et billetteries spécifiques. Aucun article Pierrefonds dans le catalogue compact, et les pages Halloween de Chantilly ou de Villersexel concernent d'autres lieux: pas de doublon local. La Publication en cours (restaurants de fouées à Saumur) et la Destination en cours (Vincennes) ne chevauchent pas ce sujet.

Le meilleur refresh GSC, **Aquarium de La Réunion**, porte un signal `uncertain`: son article explique déjà la fermeture et l'absence de date ferme de réouverture, sans correction substantielle justifiée. La carte Tattoo Isère est elle aussi complète sur les montants, dates et conditions, sans défaut indépendant établi. L'expansion envisagée depuis la page forte « Transports à Paris avec des enfants » n'apporte pas ici de décision suffisamment distincte: les tickets enfants, forfaits, aéroports et arbitrages sont déjà traités dans la page existante. La fenêtre de réservation des activités à Pierrefonds rend l'opportunité plus utile maintenant.

## Décision du lecteur

Identifier **la bonne séance et le bon billet selon l'âge, la sensibilité aux ambiances inquiétantes, le budget et la date**, puis organiser l'arrivée au château avec les contraintes pratiques d'une sortie en famille.

## Faits à traiter

- **Lanterne**: mardi **20**, mercredi **21**, samedi **24**, mardi **27** et mercredi **28 octobre 2026**, départ à **14 h 30**, durée annoncée de **14 h 30 à 16 h 30** dans l'agenda; **dès 4 ans**. Fabrication d'une lanterne puis découverte de salles normalement fermées au public. **Adulte 9 €, moins de 18 ans 6 €** pour cette animation: ne pas appliquer automatiquement la gratuité enfant de la visite libre.
- **Halloween « Eugénie es-tu là? »**: **samedi 31 octobre**, séances à **18 h 30, 20 h 30 et 22 h 30**, **dès 10 ans**, **tarif unique 13 €**. Enquête spirite inspirée du XIXe siècle; atmosphère potentiellement impressionnante et horaires tardifs, à prendre en compte sans inventer une interdiction supplémentaire.
- Les deux pages d'événement renvoient à **leurs propres achats de billets**. Vérifier disponibilité, éventuelles modalités d'accès et durée exacte au moment de rédiger; ne pas supposer que le billet d'entrée ordinaire à **9 €** inclut l'une de ces activités.
- En octobre, visite ordinaire **10 h-17 h 30**, dernier accès ordinaire une heure avant la fermeture: les **séances nocturnes du 31 octobre relèvent d'un dispositif distinct**, pas de l'horaire ordinaire.
- **Poussettes autorisées dans le parc mais pas dans le château**, stationnement poussettes dans la cour d'honneur. Adresse: **rue Viollet-le-Duc, 60350 Pierrefonds**; parking gratuit rue Sabatier à environ 10 minutes, pente depuis le village et accessibilité partielle à vérifier selon les parcours spéciaux. Pour venir sans voiture, correspondance en bus depuis Compiègne à contrôler auprès du réseau.
- **Fin de validité événementielle: 31 octobre 2026**.

## Sources de départ

Les deux pages agenda officielles du château et ses pages d'informations pratiques et d'accessibilité ci-dessus. Elles priment sur toute fiche touristique ancienne, notamment pour les animations Halloween des années précédentes.

## Affiliation

**Billetterie officielle de chaque animation** comme action principale, sans lien partenaire générique qui promettrait à tort l'accès à l'atelier. Pour un séjour, **Maison de charme avec vue sur château** sur Booking.com: maison de **trois chambres**, cuisine et proximité du château; suggérer uniquement comme option pour une famille qui dort sur place, sous réserve des disponibilités et tarifs réels.

## Continuations internes

Ne pas réécrire un guide général sur les châteaux de l'Oise. En alternative régionale réellement utile pour une autre ambiance d'Halloween, orienter éventuellement vers [Halloween 2026 au château de Chantilly](https://www.fam-space.fr/articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/), sans comparer des prix ou horaires non vérifiés.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-au-musee-carnavalet-quelle-activite-choisir-selon-l-age/ | Vacances de la Toussaint 2026 au musée Carnavalet: activités en famille dès 4 ans | sorties | Paris, Paris, Île-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | Monument jeu d'enfant 2026 au château de Vincennes: quel atelier choisir ? | evenements | Vincennes, Val-de-Marne, Île-de-France
- /articles/sorties/toussaint-2026-au-louvre-lens-quelle-activite-choisir-selon-l-age/ | Toussaint 2026 au Louvre-Lens: quelle activité choisir selon l'âge? | sorties | Lens, Pas-de-Calais, Hauts-de-France
- /articles/cuisine/atelier-de-creme-chantilly-avec-des-enfants-a-partir-de-quel-age-et-comment-reserver/ | Atelier de crème Chantilly avec des enfants: à partir de quel âge et comment réserver | cuisine | Chantilly, Oise, Hauts-de-France
- /articles/activites/cite-du-chocolat-valrhona-a-la-toussaint-2026-quel-atelier-choisir-selon-l-age/ | Cité du Chocolat Valrhona à la Toussaint 2026: animations et ateliers avec des enfants | activites | Tain-l'Hermitage, Drôme, Auvergne-Rhône-Alpes
- /articles/voyages/peur-sur-le-parc-2026-en-famille-journee-nocturne-billets-et-hebergement/ | Peur sur le Parc 2026 en famille: journée, nocturne, billets et hébergement | voyages | Plailly, Oise, Hauts-de-France
- /articles/parentalite/ateliers-parents-malins-dans-l-oise-quels-rendez-vous-gratuits-choisir-avant-fin-2026/ | Ateliers Parents Malins dans l'Oise: quels rendez-vous gratuits choisir avant fin 2026 ? | parentalite | Plusieurs communes, Oise, Hauts-de-France
- /articles/bons-plans/pass-sports-citoyen-dans-l-oise-15-a-cumuler-avec-le-pass-sport-en-2026/ | Pass Sports Citoyen dans l'Oise: 15 € à cumuler avec le pass Sport en 2026 | bons-plans | Beauvais, Oise, Hauts-de-France
- /articles/maison/meubles-et-encombrants-a-compiegne-recyclerie-dechetterie-ou-collecte-a-domicile/ | Meubles et encombrants à Compiègne: recyclerie, déchetterie ou collecte à domicile? | maison | Compiègne, Oise, Hauts-de-France
- /articles/vie-pratique/location-de-voiture-a-beauvais-avec-des-enfants-les-verifications-utiles-avant-de-reserver/ | Location de voiture à Beauvais avec des enfants: les vérifications utiles avant de réserver | vie-pratique | Beauvais, Oise, Hauts-de-France
- /articles/voyages/parc-asterix-en-famille-en-2026-une-ou-deux-journees-quel-hotel-et-quel-budget-prevoir/ | Parc Astérix en famille en 2026: une ou deux journées, quel hôtel et quel budget prévoir | voyages | Plailly, Oise, Hauts-de-France
- /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | Nuit des Châteaux 2026 à Tanlay: visites aux bougies les 16 et 17 octobre | evenements | Tanlay, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | Monument jeu d’enfant à Aigues-Mortes: mini-sacre et escape game les 17 et 18 octobre 2026 | evenements | Aigues-Mortes, Gard, Occitanie
- /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | Festival Lumière 2026 avec des enfants: Chaplin, Laurel & Hardy et les bons billets | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | Monument Jeu d’Enfant au château d’Angers: dragons et ateliers le 17 octobre 2026 | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-au-chateau-de-grignan-dates-tarifs-et-visite-en-famille/ | Noël 2026 au château de Grignan: dates, tarifs et visite en famille | evenements | Grignan, Drôme, Auvergne-Rhône-Alpes
- /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | Día de los Muertos 2026 au Jardin d’Acclimatation: programme, billets et tailles | evenements | Paris, Paris, Île-de-France
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | Fête de la mer 2026 à Marseille avec des enfants: quelle escale choisir? | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/ | Marché de Noël de Lille 2026 en famille: village, Grande Roue et infos pratiques | evenements | Lille, Nord, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/activites/cite-du-chocolat-valrhona-a-la-toussaint-2026-quel-atelier-choisir-selon-l-age/ | 2026-10-05T14:27:51.219Z
- opportunity | /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | 2026-10-08T14:56:52.034Z
- opportunity | /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | 2026-10-10T15:40:28.185Z
- opportunity | /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | 2026-10-06T16:58:51.946Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- opportunity | /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | 2026-10-06T19:20:39.093Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | 2026-10-10T17:38:43.806Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | 2026-10-10T08:38:56.921Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | 2026-10-09T18:35:04.031Z
- opportunity | /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | 2026-10-11T09:17:01.561Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
