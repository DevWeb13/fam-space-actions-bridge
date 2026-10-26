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
title: "Odyssée Lumineuse 2026-2027 au Parc Floral de Paris : billet daté ou Open en famille ?"
subtitle: Dates, fermetures, spectacles inclus et budget selon l'âge des enfants
summary: Du 14 novembre 2026 au 24 janvier 2027, le Parc Floral accueille un parcours nocturne de lanternes, fontaines lumineuses, aurores boréales et ombres chinoises. Comparer les billets et préparer une soirée adaptée aux enfants.
category: evenements
location:
  city: Paris
  department: Paris
  region: Île-de-France
keywords:
  - Odyssée Lumineuse Paris 2026 2027
  - Parc Floral illuminations enfants
  - billet daté Open Odyssée Lumineuse
sources:
  - title: Organisateur — Odyssée Lumineuse Paris, programme, tarifs et fermetures 2026-2027
    url: https://odysseelumineuse.fr/paris
  - title: Office de tourisme de Paris — Odyssée Lumineuse au Parc Floral
    url: https://parisjetaime.com/eng/event/l-odyssee-lumineuse-parc-floral-paris-e661
  - title: Ville de Paris — Parc Floral, accès et horaires du jardin
    url: https://www.paris.fr/lieux/parc-floral-de-paris-1
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille
  decision: Choisir entre un billet daté et un billet Open selon la flexibilité nécessaire, calculer le coût réel pour la famille et sélectionner une soirée ouverte permettant de voir les animations sans coucher les jeunes enfants trop tard.
  affiliationPotential: "Billetterie principale : aucune offre précise confirmée chez GetYourGuide, Tiqets ou Klook après recherche ciblée. Pour les familles en séjour, Abritel propose l'Appartement face au bois de Vincennes (2 chambres, 4 personnes, Parc Floral annoncé à 11 min à pied) : https://www.abritel.fr/location-vacances/p2347593 ; prix et disponibilité aux dates de visite non vérifiés."
  gsc:
    retrievedAt: 2026-10-26T01:34:33+01:00
    dataThrough: 2026-10-23
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Organisateur — Odyssée Lumineuse Paris, programme, tarifs et fermetures 2026-2027 »; aucune page forte GSC n'est requise.
---

## Mission retenue
L'Odyssée Lumineuse, parcours nocturne payant et distinct de la visite diurne du Parc Floral, du 14 novembre 2026 au 24 janvier 2027. Édition avec Féerie des Fontaines, aurores boréales et spectacles d'ombres chinoises.

## Pourquoi cette mission
Le refresh GSC Futuroween (score 215, signal uncertain) a été lu avec sa source officielle : l'article couvre déjà programme, billets, durée, hébergement et précautions ; aucune amélioration suffisamment décisive confirmée avant sa fin le 1er novembre. L'expansion depuis la page forte « Transports à Paris avec des enfants » risquerait de répéter les guides de titres et trajets existants. Cette opportunité hivernale possède des dates, des choix de billets et des fermetures déjà vérifiables ; aucun article direct trouvé dans le catalogue (contrôle probableDuplicates et pages proches).

## Décision du lecteur
Savoir si un billet daté moins cher suffit ou si la souplesse du billet Open justifie son surcoût, quelle soirée choisir selon les fermetures, et comment profiter du parcours avec enfants ou poussette.

## Faits à traiter
- Organisateur : 17 h 30-22 h, dernière entrée 21 h 30, durée annoncée environ 1 h 30 ; spectacle d'ombres à 18 h 40, 19 h 35 et 20 h 30. Vérifier les créneaux lors de la rédaction.
- Billet daté : adulte 13 €, enfant 3-12 ans 11 €, moins de 3 ans gratuit ; Open : 18 € adulte et 16 € enfant. Calculer des exemples pour deux adultes et deux enfants ; ne pas confondre « à partir de 10 € » avec le tarif adulte.
- Fermetures annoncées en novembre, décembre et janvier sur la page organisateur : impérativement consulter le calendrier avant de conseiller une date.
- Accès côté Château de Vincennes, métro 1 à environ 15 minutes à pied ; organisateur annonce un parcours accessible aux poussettes et fauteuils. Distinguer l'entrée diurne gratuite du parc d'octobre à mars du billet payant de l'événement nocturne.
- Titulaires CMI ou carte d'invalidité : gratuité à retirer sur place sous conditions ; accompagnant au tarif normal. Billets non échangeables/non annulables selon FAQ ; ne pas promettre de disponibilité.

## Sources de départ
Les trois sources officielles du frontmatter ; la page organisateur prime pour le calendrier, les tarifs et les conditions du parcours.

## Affiliation
Aucun billet partenaire de l'événement confirmé. Proposer discrètement l'appartement Abritel vérifié uniquement aux familles qui passent une nuit près de Vincennes, sans prix ni disponibilité inventés.

## Continuations internes
- Lien vers « Transports à Paris avec des enfants » pour les titres et tarifs du trajet, sans recopier son comparatif.
- Lien vers la destination Vincennes pour organiser une autre visite dans le secteur ; ne pas confondre cette destination et le parcours nocturne.
- Les autres parcours lumineux déjà traités (Thoiry, Lumigny) ne sont pas des doublons : lieux et billets différents.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/parc-zoo-du-reynou-avec-des-enfants-billet-date-poussette-ou-journee-complete/ | Parc Zoo du Reynou avec des enfants: billet daté, poussette ou journée complète? | activites | Le Vigen, Haute-Vienne, Nouvelle-Aquitaine
- /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | Halloween 2026 au Parc Spirou: billets, nocturnes Naruto et maison hantée | evenements | Monteux, Vaucluse, Provence-Alpes-Côte d'Azur
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | Grand Noël 2026 à Vaux-le-Vicomte en famille: billets, offre enfant et animations | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/bons-plans/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/ | Navigo Liberté+ en famille: tarifs enfants et choix du passe en 2026 | bons-plans | Paris, Paris, Île-de-France
- /articles/sorties/l-aquarium-tropical-de-la-porte-doree-en-famille/ | L’Aquarium tropical de la Porte Dorée en famille | sorties | Paris, Paris, Île-de-France
- /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | Créations & savoir-faire 2026 à Paris en famille: billets, ateliers et dates | evenements | Paris, Paris, Île-de-France
- /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | Salon du Cheval de Paris 2026 en famille: animations, jumping et billets | evenements | Paris, Paris, Île-de-France
- /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | Métamorphoses 2026 au quai Branly: séances gratuites et films par âge | evenements | Paris, Paris, Île-de-France
- /articles/maison/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager/ | À Paris, où donner ou déposer meubles, jouets et électroménager ? | maison | Paris, Paris, Île-de-France
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | Día de los Muertos 2026 au Jardin d’Acclimatation: programme, billets et tailles | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-au-musee-carnavalet-quelle-activite-choisir-selon-l-age/ | Vacances de la Toussaint 2026 au musée Carnavalet: activités en famille dès 4 ans | sorties | Paris, Paris, Île-de-France
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | Vacances de la Toussaint 2026 à la Cité des sciences: les ateliers numériques gratuits avec des enfants | sorties | Paris, Paris, Île-de-France
- /articles/activites/stages-de-science-a-la-cite-des-sciences-pendant-la-toussaint-2026-lequel-choisir-selon-l-age/ | Stages de science à la Cité des sciences à la Toussaint 2026: durées, âges et tarifs | activites | Paris, Paris, Île-de-France
- /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | Festival Playground 2026: spectacles de danse en famille, dates et tarifs | evenements | Bagnolet, Seine-Saint-Denis, Île-de-France
- /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | Festival Enfantillages 2026 à Valbonne: spectacles gratuits et cinéma en famille | evenements | Valbonne, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | Festival MARMOE 2026 à Montreuil: spectacles, ateliers et tarifs en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/halloween-2026-au-zoo-de-la-fleche-entree-offerte-aux-enfants-deguises/ | Halloween 2026 au Zoo de La Flèche: tarifs, jeux et entrée offerte aux enfants déguisés | evenements | La Flèche, Sarthe, Pays de la Loire

### Historique Radar lié

- opportunity | /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | 2026-10-23T06:21:12.326Z
- opportunity | /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | 2026-10-08T14:56:52.034Z
- opportunity | /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | 2026-10-26T03:35:31.605Z
- opportunity | /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | 2026-10-25T23:35:17.860Z
- opportunity | /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | 2026-10-26T06:30:10.217Z
- opportunity | /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | 2026-10-20T22:29:05.422Z
- opportunity | /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | 2026-10-12T17:34:53.933Z
- opportunity | /articles/evenements/halloween-2026-au-zoo-de-la-fleche-entree-offerte-aux-enfants-deguises/ | 2026-10-25T20:27:07.814Z
- opportunity | /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | 2026-10-18T04:19:39.869Z
- opportunity | /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | 2026-10-06T19:20:39.093Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
