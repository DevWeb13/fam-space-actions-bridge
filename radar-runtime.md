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
title: "Bus gratuit à Poitiers pour les moins de 12 ans: quelle carte faut-il prévoir ?"
subtitle: La gratuité Vitalis existe depuis juillet 2026, mais les enfants de 3 à 11 ans doivent avoir leur propre carte Modalis
summary: À Poitiers, les moins de 12 ans voyagent gratuitement sur Vitalis. Voici la carte à demander, les frais possibles et les règles à respecter.
slug: bus-gratuit-a-poitiers-pour-les-moins-de-12-ans-quelle-carte-faut-il-prevoir
status: published
publishedAt: 2026-09-09T02:01:52+02:00
updatedAt: 2026-09-09T10:02:51+02:00
category: vie-pratique
readingTime: 4
location:
  city: Poitiers
  department: Vienne
  region: Nouvelle-Aquitaine
topic:
  key: vie-pratique|poitiers|bus-gratuit-a-poitiers-pour-les-moins-de-12-ans-quelle-carte-faut-il-prevoir|2026
  keywords:
    - bus gratuit Poitiers enfant
    - carte Modalis moins de 12 ans
image:
  src: /images/articles/2026/09/bus-gratuit-a-poitiers-pour-les-moins-de-12-ans-quelle-carte-faut-il-prevoir.webp
  alt: Bus du réseau Vitalis à Poitiers
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/vie-pratique/(2026)/(09)/bus-gratuit-a-poitiers-pour-les-moins-de-12-ans-quelle-carte-faut-il-prevoir/index.md
  targetSha: 0fb8b48a74953c418f3ee4dfde06d077654086ad
  targetUrl: /articles/vie-pratique/bus-gratuit-a-poitiers-pour-les-moins-de-12-ans-quelle-carte-faut-il-prevoir/
  decision: Savoir comment voyager gratuitement avec un enfant sur Vitalis après le 1er novembre 2026, obtenir ou contrôler sa carte Modalis et éviter un trajet sans titre valide.
  affiliationPotential: "Aucune affiliation naturelle : il s'agit d'une démarche de transport public gratuit, sans achat partenaire pertinent."
  gsc:
    retrievedAt: 2026-11-02T02:27:57+01:00
    dataThrough: 2026-10-30
    signal: uncertain
    basis: Baisse d'impressions observée; causalité et classement non établis.
    peakStart: 2026-10-17
    peakEnd: 2026-10-23
    recentStart: 2026-10-24
    recentEnd: 2026-10-30
    peakImpressions: 143
    recentImpressions: 45
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0.5
    focusQueries:
      - bus poitiers
      - tarif bus poitiers
      - distance bressuire poitiers
---

## Mission retenue
Actualiser le guide Vitalis de Poitiers pour les familles après la fin des deux échéances de lancement de la gratuité.

## Pourquoi cette mission
Le texte conseille encore de faire valider une ancienne carte « avant le 1er novembre 2026 » alors que nous sommes le 2 novembre, et présente au présent la gratuité de création de carte terminée le 30 septembre. Cette information périmée touche directement la démarche et le coût du lecteur. Le signal GSC est `uncertain` (143 impressions sur la semaine de pointe, 45 sur la dernière) : ne pas présenter cette baisse comme une perte de classement. Le refresh de Lumigny n'a pas de correction indépendante aussi nette ; l'expansion de la page forte sur les transports parisiens recoupe déjà les guides Navigo, Orly, CDG et poussette ; l'atelier familial de Noël du 16 décembre au Havre est documenté mais plus éloigné et plus limité.

## Décision du lecteur
Distinguer les démarches pour les moins de 3 ans, les 3–11 ans avec ou sans carte Modalis, et les enfants atteignant 12 ans ; savoir quoi vérifier si le chargement automatique d'une ancienne carte n'a pas été finalisé avant le 1er novembre.

## Faits à traiter
- Conserver la gratuité annuelle 3–11 ans à 0 €, la carte Modalis nominative obligatoire et la validation à chaque montée et correspondance ; moins de 3 ans sans titre et accompagnés.
- Au 2 novembre, création de carte à 2,50 € hors promotion échue le 30 septembre ; frais d'envoi E-boutique de 3,50 € éventuels. Ne pas laisser croire que la création est encore offerte.
- Transformer l'échéance du 1er novembre en information passée. Vitalis ne précise pas publiquement la procédure après dépassement : inviter les familles concernées à vérifier le titre sur la carte et à contacter Vitalis ou passer en agence, sans affirmer que la gratuité est annulée ou que la validation tardive suffit.
- Préserver la fin de validité à la veille des 12 ans, les réductions possibles ensuite, les adresses et horaires des deux agences, ALLOBUS, les justificatifs et la possibilité de commander en ligne.
- Préserver l'image, les liens internes utiles et les renseignements encore exacts ; n'effectuer aucune réécriture inutile.

## Sources de départ
- Vitalis, FAQ moins de 12 ans : https://aide.vitalis-poitiers.fr/hc/fr/articles/37634067409693-Comment-voyager-sur-le-r%C3%A9seau-pour-les-moins-de-12-ans
- Vitalis, tarifs et création de carte : https://www.vitalis-poitiers.fr/tarifs/1000/
- Vitalis, gratuités et ancienne carte : https://www.vitalis-poitiers.fr/news/des-le-1er-juillet-2026-profitez-des-gratuites/
- Vitalis, horaires et contact des agences : https://aide.vitalis-poitiers.fr/hc/fr/articles/8210378481565-Je-souhaite-vous-faire-part-d-une-suggestion-comment-vous-contacter

## Affiliation
Aucune offre partenaire pertinente à ajouter : le service est gratuit pour les enfants éligibles, hormis les frais de support ou d'envoi.

## Continuations internes
- Conserver le lien vers la destination Poitiers pour les familles qui préparent leurs déplacements.
- Le guide de l'Espace Mendès France renvoie déjà vers cet article : maintenir une information Vitalis fiable sans dupliquer son contenu.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/vie-pratique/(2026)/(09)/bus-gratuit-a-poitiers-pour-les-moins-de-12-ans-quelle-carte-faut-il-prevoir/index.md

---
title: "Bus gratuit à Poitiers pour les moins de 12 ans: quelle carte faut-il prévoir ?"
subtitle: La gratuité Vitalis existe depuis juillet 2026, mais les enfants de 3 à 11 ans doivent avoir leur propre carte Modalis
summary: À Poitiers, les moins de 12 ans voyagent gratuitement sur Vitalis. Voici la carte à demander, les frais possibles et les règles à respecter.
slug: bus-gratuit-a-poitiers-pour-les-moins-de-12-ans-quelle-carte-faut-il-prevoir
status: published
publishedAt: 2026-09-09T02:01:52+02:00
updatedAt: 2026-09-09T10:02:51+02:00
category: vie-pratique
readingTime: 4
location:
  city: Poitiers
  department: Vienne
  region: Nouvelle-Aquitaine
topic:
  key: vie-pratique|poitiers|bus-gratuit-a-poitiers-pour-les-moins-de-12-ans-quelle-carte-faut-il-prevoir|2026
  keywords:
    - bus gratuit Poitiers enfant
    - carte Modalis moins de 12 ans
image:
  src: "/images/articles/2026/09/bus-gratuit-a-poitiers-pour-les-moins-de-12-ans-quelle-carte-faut-il-prevoir.webp"
  alt: "Bus du réseau Vitalis à Poitiers"
---
<!-- article-image-credit -->
*Photo: [Jmdigne](https://commons.wikimedia.org/wiki/File:Poitiers_-_Transport_en_commun_Vitalis.jpg) - [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Depuis le 1er juillet 2026, les enfants de moins de 12 ans peuvent voyager gratuitement sur le réseau Vitalis de Grand Poitiers. Pour les 3 à 11 ans, la gratuité ne signifie toutefois pas que l'on peut monter sans titre: il faut un abonnement annuel à 0 € chargé sur une carte Modalis nominative.

Pour une famille qui prépare ses déplacements à [Poitiers](/destinations/nouvelle-aquitaine/vienne/), la démarche dépend surtout de l'âge de l'enfant et du fait qu'il possède déjà ou non une carte.

## Moins de 3 ans: aucune carte n'est nécessaire

Un enfant de moins de 3 ans voyage gratuitement sur Vitalis sans titre de transport. Il doit être accompagné par un représentant légal.

À partir de 3 ans, la règle change: l'enfant doit disposer de son propre titre, même si l'abonnement correspondant est gratuit.

## De 3 à 11 ans: demander l'abonnement annuel gratuit

Vitalis propose un abonnement annuel 3-11 ans à 0 €. Il est valable sur l'ensemble du réseau jusqu'à la veille du 12e anniversaire de l'enfant.

La première étape consiste à obtenir une carte Modalis nominative, puis à y faire charger cet abonnement. La demande peut être effectuée en agence Vitalis ou via [l'E-boutique Vitalis](https://eboutique-vitalis.easyticketing.it/).

Pour créer la carte, Vitalis demande une photo et une pièce d'identité du titulaire. La création coûte normalement 2,50 €, mais elle est offerte du 1er juillet au 30 septembre 2026. Une commande par l'E-boutique peut en revanche entraîner 3,50 € de frais d'envoi postal.

La [grille tarifaire officielle Vitalis](https://www.vitalis-poitiers.fr/tarifs/1000/) permet de vérifier les conditions en vigueur avant la demande.

## La carte doit être validée à chaque montée

Même avec un abonnement à 0 €, l'enfant doit valider sa carte Modalis à chaque montée dans un bus ou un car Vitalis, y compris lors d'une correspondance.

Il doit aussi pouvoir présenter la carte en cas de contrôle. Sans carte chargée de l'abonnement gratuit, Vitalis précise que l'enfant doit acheter un titre auprès du conducteur.

Cette formalité est donc importante pour un trajet scolaire comme pour un déplacement occasionnel en famille.

## L'enfant avait déjà une carte avant juillet 2026: une validation particulière peut être nécessaire

Pour les enfants qui possédaient déjà une carte Modalis avec un abonnement avant le 1er juillet 2026, Vitalis a chargé automatiquement à distance le nouvel abonnement gratuit.

Il reste une opération à faire: la carte doit être présentée sur un valideur Vitalis avant le 1er novembre 2026 afin de finaliser ce chargement. Une famille concernée a donc intérêt à faire cette validation sans attendre un trajet important.

## Que se passe-t-il au 12e anniversaire ?

La gratuité 3-11 ans s'arrête la veille du 12e anniversaire. Il faut alors charger un abonnement 12-17 ans pour continuer à voyager en règle, même si l'anniversaire tombe au milieu de l'année scolaire.

Les familles de Grand Poitiers peuvent, selon leur quotient familial, bénéficier de tarifs réduits. Vitalis indique également qu'une remise de 50 % peut s'appliquer à l'abonnement annuel 12-17 ans à partir du troisième enfant, sous certaines conditions, notamment lorsque les achats sont réalisés simultanément pour le même foyer.

Il est utile de vérifier son niveau de réduction avant l'achat sur la [page des tarifs réduits Vitalis](https://www.vitalis-poitiers.fr/news/les-tarifs-reduits-selon-les-revenus/).

## Où faire la démarche à Poitiers ?

<!-- article-image-body:01 -->

![Gare de Poitiers où se trouve l'agence principale Vitalis](/images/articles/2026/09/bus-gratuit-a-poitiers-pour-les-moins-de-12-ans-quelle-carte-faut-il-prevoir-body-01.webp)

*Photo: [patrick janicek from Courbevoie, France](https://commons.wikimedia.org/wiki/File:GARE_DE_POITIERS_(6082957020).jpg) - [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

L'agence principale Vitalis se trouve au Pôle d'Échanges Multimodal de la gare, au 58 boulevard du Grand Cerf à Poitiers. Elle est ouverte du lundi au vendredi de 8h à 18h.

Une autre agence se trouve au siège de Vitalis, 9 avenue de Northampton à Poitiers, ouverte du lundi au vendredi de 9h à 12h30 et de 14h à 17h.

Pour vérifier une situation particulière avant de se déplacer, ALLOBUS est joignable au [05 49 44 66 88](tel:+33549446688), du lundi au vendredi de 8h à 18h.

La règle essentielle à retenir est simple: avant 3 ans, aucun titre n'est nécessaire; de 3 à 11 ans, le trajet est gratuit mais la carte Modalis chargée de l'abonnement à 0 € est obligatoire et doit être validée à chaque montée.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/les-expressifs-2026-a-poitiers-trois-jours-de-spectacles-gratuits/ | Les Expressifs 2026 à Poitiers: trois jours de spectacles gratuits | evenements | Poitiers, Vienne, Nouvelle-Aquitaine
- /articles/maison/renover-son-logement-a-grand-poitiers-par-ou-commencer-avant-de-signer-les-devis/ | Rénover son logement à Grand Poitiers: par où commencer avant de signer les devis | maison | Poitiers, Vienne, Nouvelle-Aquitaine
- /articles/voyages/futuroscope-et-poitiers-en-famille-pendant-3-jours-itineraire-pratique/ | 3 jours à Poitiers et au Futuroscope en famille: itinéraire jour par jour | voyages | Poitiers, Vienne, Nouvelle-Aquitaine
- /articles/parentalite/espace-mendes-france-a-poitiers-en-famille-que-faire-selon-l-age/ | Espace Mendès France à Poitiers en famille: que faire selon l’âge ? | parentalite | Poitiers, Vienne, Nouvelle-Aquitaine
- /articles/evenements/l-ours-et-la-louve-a-sarlat-faut-il-reserver-pour-ce-spectacle-gratuit-des-3-ans/ | L'Ours et la Louve à Sarlat: faut-il réserver pour ce spectacle gratuit dès 3 ans? | evenements | Sarlat-la-Canéda, Dordogne, Nouvelle-Aquitaine
- /articles/activites/vallee-des-singes-a-romagne-combien-de-temps-prevoir-pour-la-visite/ | Vallée des Singes à Romagne: combien de temps prévoir pour la visite? | activites | Romagne, Vienne, Nouvelle-Aquitaine
- /articles/parentalite/la-petite-maison-a-agen-un-lieu-gratuit-pour-les-parents-et-les-enfants-de-0-a-3-ans/ | La Petite Maison à Agen: un lieu gratuit pour les parents et les enfants de 0 à 3 ans | parentalite | Agen, Lot-et-Garonne, Nouvelle-Aquitaine
- /articles/evenements/gastronomades-2026-a-angouleme-en-famille-faut-il-prevoir-le-week-end/ | Gastronomades 2026 à Angoulême en famille: faut-il prévoir le week-end ? | evenements | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/vie-pratique/bus-gratuit-a-poitiers-pour-les-moins-de-12-ans-quelle-carte-faut-il-prevoir/ | Bus gratuit à Poitiers pour les moins de 12 ans: quelle carte faut-il prévoir ? | vie-pratique | Poitiers, Vienne, Nouvelle-Aquitaine
- /articles/cuisine/entre-terre-et-miel-a-marnay-decouvrir-le-miel-en-famille/ | Entre Terre et Miel à Marnay: découvrir le miel en famille | cuisine | Marnay, Vienne, Nouvelle-Aquitaine
- /articles/voyages/futuroween-2026-futuroscope-billet-programme-enfants/ | Futuroween 2026 au Futuroscope: billet, programme et conseils avec des enfants | voyages | Chasseneuil-du-Poitou, Vienne, Nouvelle-Aquitaine
- /articles/voyages/futuroscope-en-famille-en-2026-combien-de-jours-quel-hotel-et-quel-budget-prevoir/ | Futuroscope en famille: 1, 2 ou 3 jours, hôtel et budget 2026 | voyages | Chasseneuil-du-Poitou, Vienne, Nouvelle-Aquitaine
- /articles/vie-pratique/louer-une-voiture-en-martinique-en-famille-bien-choisir-et-preparer-ses-trajets/ | Louer une voiture en Martinique en famille: bien choisir et préparer ses trajets | vie-pratique | Martinique
- /articles/vie-pratique/visiter-le-gard-sans-voiture-avec-des-enfants-les-trajets-qui-fonctionnent/ | Visiter le Gard sans voiture avec des enfants: les trajets qui fonctionnent | vie-pratique | Gard, Occitanie
- /articles/vie-pratique/ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison/ | Ludothèques autour de Dinan: emprunter des jeux pour la maison | vie-pratique | Côtes-d'Armor, Bretagne
- /articles/vie-pratique/ouessant-avec-des-enfants-sans-voiture-ferry-bagages-et-deplacements/ | Ouessant avec des enfants sans voiture: ferry, bagages et déplacements | vie-pratique | Ouessant, Finistère, Bretagne
- /articles/vie-pratique/se-deplacer-en-mayenne-avec-des-enfants-sans-voiture-bus-tad-et-ter/ | Se déplacer en Mayenne avec des enfants sans voiture: bus, TAD et TER | vie-pratique | Mayenne, Pays de la Loire
- /articles/vie-pratique/a-mayotte-passer-de-petite-terre-a-grande-terre-en-famille/ | À Mayotte, passer de Petite-Terre à Grande-Terre en famille | vie-pratique | Mayotte, Mayotte
- /articles/vie-pratique/faire-garder-son-enfant-dans-l-aisne-creche-assistante-maternelle-mam-et-aides/ | Faire garder son enfant dans l’Aisne: crèche, assistante maternelle, MAM et aides | vie-pratique | Aisne, Hauts-de-France
- /articles/vie-pratique/ludotheques-dans-le-gers-ou-jouer-et-emprunter-des-jeux-en-famille/ | Ludothèques dans le Gers: où jouer et emprunter des jeux en famille | vie-pratique | Auch, Gers, Occitanie
- /articles/vie-pratique/emprunter-des-jeux-a-tours-mirabeau-ou-la-maison-des-jeux/ | Emprunter des jeux à Tours: Mirabeau ou la Maison des Jeux? | vie-pratique | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/vie-pratique/ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee/ | Ferry Ouistreham-Portsmouth en famille: préparer le départ et la traversée | vie-pratique | Ouistreham, Calvados, Normandie

### Historique Radar lié

- Aucun historique lié.

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
