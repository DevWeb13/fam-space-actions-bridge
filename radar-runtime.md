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
title: "Navigo Liberté+ en famille en 2026 : tarif enfant, passe ou téléphone ?"
subtitle: Comparer les trajets occasionnels aux tickets classiques et éviter de perdre le tarif réduit d'un enfant.
summary: En Île-de-France, découvrez quand Navigo Liberté+ est avantageux pour les déplacements irréguliers d'une famille, comment obtenir le tarif enfant et quand préférer Navigo Easy ou imagine R Junior.
category: bons-plans
location:
  city: Paris
  department: Paris
  region: Île-de-France
keywords:
  - Navigo Liberté+ enfant 2026
  - Navigo Liberté+ tarif réduit sur passe
  - Navigo Liberté+ ou Navigo Easy famille
  - Navigo Liberté+ téléphone enfant
sources:
  - title: "Île-de-France Mobilités — Navigo Liberté+ : tarifs 2026 et plafonnement"
    url: https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/liberte-plus
  - title: Île-de-France Mobilités — Souscrire pour soi ou pour un mineur
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/navigo-liberte-plus/comment-souscrire-un-contrat-navigo-liberte-plus
  - title: Île-de-France Mobilités — Tarif réduit et justificatifs
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/navigo-liberte-plus/quelles-sont-les-conditions-pour-beneficier-dun-tarif-reduit
  - title: Île-de-France Mobilités — Pas de tarif réduit sur téléphone
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/navigo-liberte-plus-sur-telephone/tarif-reduit-sur-telephone
  - title: Île-de-France Mobilités — Navigo Easy
    url: https://www.iledefrance-mobilites.fr/titres-et-tarifs/supports/passe-navigo-easy
  - title: Île-de-France Mobilités — Imagine R Junior 2026-2027
    url: https://www.iledefrance-mobilites.fr/actualites/forfait-navigo-imagine-r-souscription-en-ligne
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone
  decision: Pour des déplacements familiaux irréguliers en Île-de-France, décider qui doit souscrire Navigo Liberté+, avec quel support pour conserver le tarif enfant, et dans quels cas garder des tickets Navigo Easy ou choisir imagine R Junior.
  affiliationPotential: Aucune offre partenaire naturelle pour cette tarification publique du quotidien; ne pas ajouter d'hôtel ni d'offre touristique hors sujet.
  gsc:
    retrievedAt: 2026-10-25T02:31:31+02:00
    dataThrough: 2026-10-22
    signal: strong_page
    sourceUrl: /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/
    basis: "La page « Transports à Paris avec des enfants: quel titre choisir pour payer juste? » conserve 2281 impressions sur la semaine récente, avec une position moyenne de 8.722 et 197 % de son pic."
---

## Mission retenue
Créer un guide ciblé sur le contrat Navigo Liberté+ pour les familles qui utilisent occasionnellement les transports franciliens, particulièrement avec un enfant de 4 à moins de 10 ans.

## Pourquoi cette mission
Expansion réellement distincte d'une page forte GSC : le guide Fam Space sur les transports à Paris compare déjà tickets, Navigo Jour/Semaine et Paris Visite, mais pas le contrat Liberté+ et sa souscription pour mineur. Le meilleur refresh disponible, la Carte Avantage Adulte SNCF, répond déjà aux décisions essentielles et sa baisse GSC reste incertaine. L'opportunité saisonnière « Soleils d'hiver à Angers » démarre officiellement le 25 novembre 2026, mais le programme municipal 2026 détaillé n'est pas encore publié : moins documentée pour l'instant.

## Décision du lecteur
Savoir si le paiement au trajet de Liberté+ est préférable aux tickets achetés d'avance pour les déplacements occasionnels de chaque membre du foyer, et comment obtenir le bon tarif sans choisir le mauvais support.

## Faits à traiter
- Tarifs 2026 Liberté+ : métro/train/RER 2,04 € ou 1,02 € réduit; bus/tram/câble 1,64 € ou 0,82 € réduit; facturation le mois suivant, souscription gratuite, plafond journalier hors aéroports. Comparer avec tickets unitaires sur Navigo Easy sans recopier le guide touristique général.
- Enfant de 4 à moins de 10 ans : réduction sur **passe Navigo** après justificatif, **pas sur téléphone**; moins de 4 ans gratuits. Expliquer la souscription par le parent pour un mineur, RIB, pièce d'identité et délais de réception/activation.
- Ne pas présenter Liberté+ comme meilleur pour tous : distinguer usage irrégulier et trajets quotidiens; pour les moins de 11 ans résidant en Île-de-France, comparer aussi imagine R Junior 2026-2027 (25,20 €/an, conditions de résidence et d'âge).
- Exemples de budget familial à calculer sur des trajets précis, en séparant les personnes et sans confondre le tarif réduit enfant avec le forfait Navigo Jour. Vérifier les conditions d'aéroport et de correspondance si évoquées.

## Sources de départ
Les six pages Île-de-France Mobilités ci-dessus, notamment la page Liberté+ mise à jour pour les tarifs 2026 et l'aide à la souscription actualisée le 10 septembre 2026.

## Affiliation
Aucune offre partenaire pertinente : il s'agit d'un contrat de transports publics pour des trajets du quotidien, non d'une réservation de séjour.

## Continuations internes
- Renvoyer vers le guide existant « Transports à Paris avec des enfants : quel titre choisir pour payer juste ? » pour les visiteurs qui comparent Navigo Jour/Semaine, Paris Visite et billets d'aéroport; ne pas réécrire ces comparaisons.
- Ne pas développer les trajets Orly/CDG : les deux guides Fam Space spécifiques existent déjà.
- Ne pas confondre ce sujet avec les événements en cours à Montbazon ni les enrichissements Destination Vincennes et Haut-Rhin.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/ | Transports à Paris avec des enfants: quel titre choisir pour payer juste? | voyages | Paris, Paris, Île-de-France
- /articles/bons-plans/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/ | Château de Champs-sur-Marne en famille: gratuités, tarifs et dates à éviter | bons-plans | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | Noël Gaulois 2026 au Parc Astérix: billets, glissades et spectacles en famille | evenements | Plailly, Oise, Hauts-de-France
- /articles/bons-plans/pic-du-midi-moins-cher-quand-choisir-le-billet-date-plutot-que-le-pass-liberte/ | Pic du Midi moins cher: quand choisir le billet daté plutôt que le Pass Liberté | bons-plans | Bagnères-de-Bigorre, Hautes-Pyrénées, Occitanie
- /articles/bons-plans/musee-de-tautavel-moins-cher-avec-lio-le-bon-plan-a-connaitre/ | Musée de Tautavel moins cher avec liO: le bon plan à connaître | bons-plans | Tautavel, Pyrénées-Orientales, Occitanie
- /articles/parentalite/telephone-portable-lycee-rentree-2026-regles/ | Téléphone portable au lycée en 2026: ce qui change à la rentrée | parentalite
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
- /articles/activites/paris-sport-vacances-automne-2026-demi-journee-gratuite-ou-stage-a-la-journee/ | Paris Sport Vacances automne 2026: demi-journée gratuite ou stage à la journée? | activites | Paris, Paris, Île-de-France
- /articles/bons-plans/musee-camille-claudel-a-nogent-sur-seine-visite-et-ateliers-avec-les-enfants/ | Musée Camille Claudel à Nogent-sur-Seine: visite et ateliers avec les enfants | bons-plans | Nogent-sur-Seine, Aube, Grand Est
- /articles/bons-plans/musverre-en-famille-gratuites-et-contes-a-sars-poteries/ | MusVerre en famille: gratuités et contes à Sars-Poteries | bons-plans | Sars-Poteries, Nord, Hauts-de-France
- /articles/bons-plans/ski-a-aussois-en-famille-en-2026-2027-forfaits-et-budget/ | Ski à Aussois en famille en 2026-2027: forfaits et budget | bons-plans | Aussois, Savoie, Auvergne-Rhône-Alpes
- /articles/bons-plans/centre-spatial-guyanais-a-kourou-3-experiences-gratuites-et-un-musee-en-famille/ | Centre spatial guyanais à Kourou: 3 expériences gratuites et un musée en famille | bons-plans | Kourou, Guyane, Guyane

### Historique Radar lié

- opportunity | /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | 2026-10-23T06:21:12.326Z
- opportunity | /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | 2026-10-08T14:56:52.034Z
- opportunity | /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | 2026-10-18T04:19:39.869Z
- opportunity | /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | 2026-10-06T19:20:39.093Z
- opportunity | /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | 2026-10-24T09:33:57.174Z
- opportunity | /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | 2026-10-09T14:37:47.734Z
- opportunity | /articles/activites/paris-sport-vacances-automne-2026-demi-journee-gratuite-ou-stage-a-la-journee/ | 2026-10-03T20:20:25.508Z
- opportunity | /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | 2026-10-22T04:59:04.773Z
- opportunity | /articles/activites/stages-de-science-a-la-cite-des-sciences-pendant-la-toussaint-2026-lequel-choisir-selon-l-age/ | 2026-10-04T05:39:23.036Z
- opportunity | /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | 2026-10-05T11:24:52.310Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
