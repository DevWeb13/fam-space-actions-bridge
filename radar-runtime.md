# Radar Fam Space - Phase 3/3

## Mission

Radar utilise Google Search Console et la recherche web pour choisir le travail éditorial qui apporte le plus de valeur à Fam Space: améliorer une page réellement perfectible, développer une intention proche d'une page forte, ou publier à temps une opportunité locale/saisonnière. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 3/3

Tu es secrétaire de rédaction et fact-checker final. Ta mission principale est l'anti-régression, pas de réécrire l'article une deuxième fois.

Pour un refresh, compare l'article source exact et le candidat de phase 2 fournis intégralement plus bas. Le candidat final doit rester autonome et actuel. Pour chaque information présente avant et absente après, décide explicitement: toujours vraie et utile -> restaure-la; périmée ou fausse -> laisse-la supprimée; réellement redondante ou sans valeur -> suppression acceptable.

Accorde une attention particulière aux prix décisionnels, durées, réservation, âge/taille, accessibilité, accès, contraintes, services bébé/enfants, repas et autres détails pratiques familiaux.

Ensuite:
- lis l'article du début à la fin comme un lecteur sur téléphone et vérifie que l'introduction, les sections et la fin ne répètent pas la même information; supprime les conseils évidents, paraphrases de sources, sections sans information nouvelle et toute conclusion qui ne ferait que résumer;
- vérifie que l'angle sert l'article sans devenir l'article entier: une micro-question utile ne doit pas être répétée pendant toute la page, et le titre final doit décrire le sujet plutôt que recopier mécaniquement la décision de phase 1;
- vérifie que les modifications répondent au diagnostic et à la décision de phase 1;
- revérifie les faits déterminants auprès des sources officielles. Une affirmation attribuée à une source doit respecter exactement son niveau de certitude: ne transforme jamais « peut constituer un frein » en « déconseille », ni une possibilité en obligation ou interdiction;
- contrôle que la logique d'affiliation de ces règles partenaires fournies dans ce runtime a bien été appliquée, que les offres retenues sont encore pertinentes et que leur intégration se lit naturellement; vérifie qu'aucun lien officiel du corps ne mène, même indirectement depuis une page informative, à l'achat ou à la réservation de la même prestation sur le site officiel; pour une sortie, une activité, une visite, un événement ou un voyage sans affiliation, vérifie qu'aucune piste normale n'a été oubliée;
- contrôle les liens internes et les routes. Garde ceux qui prolongent réellement la lecture et, lorsqu'une autre page Fam Space traite déjà correctement un sous-sujet, raccourcis le passage au contexte nécessaire puis oriente naturellement le lecteur vers elle;
- vérifie `reviewAt` / `eventEndsAt` lorsqu'un contenu temporaire existe;
- ne force ni longueur ni affiliation.

Pour une opportunity, revérifie doublons, chevauchement avec les pages proches, catégorie, territoire, sources, cycle de vie et utilité. Un angle distinct ne justifie pas de recopier les parties générales déjà couvertes ailleurs. Le slug technique reste géré mécaniquement.

Soumets le résultat final avec `action: advance`, le frontmatter éditorial utile, le corps complet et un bloc `radarReview`:
- `summary`: contrôles et corrections réellement effectués;
- `sources`: URLs factuelles revérifiées;
- pour un refresh, `substantialChanges`: au moins deux changements substantiels;
- pour un refresh, `regressionCheck`: résultat concret de la comparaison ancien/nouveau.

**Ne recopie aucun autre champ Radar, aucune branche et aucun SHA.** Le workflow GitHub crée le commit de phase 3, retrouve le HEAD réel et lance directement le processeur final.

## Règles partenaires

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

## Candidat validé de la phase précédente

---
title: "Bus gratuit à Poitiers pour les moins de 12 ans : quelle carte faut-il prévoir ?"
subtitle: Abonnement à 0 € de 3 à 11 ans, carte Modalis à 2,50 € et démarches si l'enfant possède déjà une carte
summary: À Poitiers, les moins de 12 ans voyagent gratuitement sur Vitalis, mais dès 3 ans une carte Modalis avec abonnement est obligatoire. Coût de la carte, validation et ancienne carte après le 1er novembre 2026.
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
  phase: 2
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
reviewAt: 2026-12-14
sources:
  - title: Vitalis - Comment voyager sur le réseau pour les moins de 12 ans ?
    url: https://aide.vitalis-poitiers.fr/hc/fr/articles/37634067409693-Comment-voyager-sur-le-r%C3%A9seau-pour-les-moins-de-12-ans
  - title: Vitalis - Tarifs et carte Modalis
    url: https://www.vitalis-poitiers.fr/tarifs/1000/
  - title: Vitalis - Gratuités depuis le 1er juillet 2026
    url: https://www.vitalis-poitiers.fr/news/des-le-1er-juillet-2026-profitez-des-gratuites/
  - title: Vitalis - Adresses, horaires et contact des agences
    url: https://aide.vitalis-poitiers.fr/hc/fr/articles/8210378481565-Je-souhaite-vous-faire-part-d-une-suggestion-comment-vous-contacter
  - title: Vitalis - Tarifs réduits selon les revenus
    url: https://www.vitalis-poitiers.fr/news/les-tarifs-reduits-selon-les-revenus/
  - title: Vitalis - Réduction à partir du troisième abonnement 12-17 ans
    url: https://aide.vitalis-poitiers.fr/hc/fr/articles/8211659853981-Y-a-t-il-un-tarif-r%C3%A9duit-ou-une-gratuit%C3%A9-si-plusieurs-abonnements-sont-achet%C3%A9s
---

Depuis le 1er juillet 2026, les enfants de moins de 12 ans voyagent gratuitement sur le réseau Vitalis de Grand Poitiers. **Dès 3 ans, il faut pourtant une carte Modalis nominative chargée de l'abonnement annuel 3–11 ans à 0 €**. Et depuis la fin de l'offre de lancement, créer cette carte coûte **2,50 €**.

Pour vos déplacements à [Poitiers et dans la Vienne](/destinations/nouvelle-aquitaine/vienne/), la démarche dépend de l'âge de l'enfant et de la carte qu'il possède déjà.

## Avant 3 ans : pas de titre à demander

Un enfant de moins de 3 ans circule gratuitement **sans carte ni abonnement**, à condition d'être accompagné sous la responsabilité d'un représentant légal.

## De 3 à 11 ans : un abonnement gratuit, mais une carte obligatoire

L'abonnement annuel **3–11 ans coûte 0 €** et permet de voyager sur tout le réseau Vitalis jusqu'à la veille du douzième anniversaire de l'enfant.

Si votre enfant n'a pas encore de carte, vous pouvez demander une **carte Modalis nominative** en agence Vitalis ou sur [l'E-boutique Vitalis](https://eboutique-vitalis.easyticketing.it/), avec une **photo et une pièce d'identité de l'enfant**. Faites-y charger l'abonnement gratuit avant son premier trajet.

La création de la carte coûte **2,50 € depuis le 1er octobre 2026** : l'offre qui la rendait gratuite a pris fin le 30 septembre. Une commande par l'E-boutique peut ajouter **3,50 € de frais d'envoi postal**. En cas de perte ou de vol, le duplicata coûte **15 €**. L'abonnement reste gratuit ; ces montants concernent le support et son acheminement. Les conditions sont détaillées dans la [FAQ officielle Vitalis](https://aide.vitalis-poitiers.fr/hc/fr/articles/37634067409693-Comment-voyager-sur-le-r%C3%A9seau-pour-les-moins-de-12-ans).

## À chaque montée, validez la carte

L'enfant doit **valider sa carte Modalis à chaque montée** dans un bus ou un car Vitalis, y compris en correspondance, et pouvoir la présenter lors d'un contrôle.

S'il ne peut pas présenter une carte chargée de l'abonnement 3–11 ans, Vitalis indique qu'il doit **acheter un titre auprès du conducteur**, même s'il a moins de 12 ans. Vérifiez donc que le titre gratuit est bien chargé avant un trajet scolaire ou une sortie.

## Ancienne carte Modalis : que faire après le 1er novembre 2026 ?

Pour les enfants qui détenaient déjà une carte Modalis avec abonnement **avant le 1er juillet 2026**, Vitalis a procédé à un chargement automatique à distance du nouvel abonnement gratuit. Pour le finaliser, il fallait présenter la carte sur un valideur **avant le 1er novembre 2026**.

**Cette échéance est désormais passée.** Au 2 novembre, les informations publiques de Vitalis ne précisent pas ce qui se passe lorsqu'une famille n'a pas effectué cette validation à temps. Il ne faut donc supposer ni que le titre a été annulé, ni qu'une simple validation tardive suffit.

Si vous êtes concernés, **faites vérifier le chargement et la validité du titre par Vitalis avant le prochain trajet** : contactez ALLOBUS au **05 49 44 66 88** ou rendez-vous en agence avec la carte. Cela évite de découvrir au moment de monter que le titre attendu n'est pas utilisable.

## À 12 ans : prévoir un nouvel abonnement

La gratuité 3–11 ans s'arrête **la veille du 12e anniversaire**, même si celui-ci tombe pendant l'année scolaire. Il faut alors acheter un abonnement **12–17 ans** pour continuer à voyager en règle.

Des [tarifs réduits selon le quotient familial](https://www.vitalis-poitiers.fr/news/les-tarifs-reduits-selon-les-revenus/) peuvent s'appliquer aux habitants de Grand Poitiers, après étude des droits. Vitalis prévoit aussi **50 % de réduction sur l'abonnement annuel 12–17 ans à partir du troisième enfant**, sous conditions : achats simultanés pour le même foyer, hors E-boutique. Vérifiez ces droits avant de payer.

## Où demander la carte ou vérifier un abonnement à Poitiers ?

<!-- article-image-body:01 -->

![Gare de Poitiers où se trouve l'agence principale Vitalis](/images/articles/2026/09/bus-gratuit-a-poitiers-pour-les-moins-de-12-ans-quelle-carte-faut-il-prevoir-body-01.webp)

*Photo: [patrick janicek from Courbevoie, France](https://commons.wikimedia.org/wiki/File:GARE_DE_POITIERS_(6082957020).jpg) - [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

L'agence Vitalis du **Pôle d'Échanges Multimodal de la gare**, au **58 boulevard du Grand Cerf**, accueille le public **du lundi au vendredi de 8 h à 18 h**.

L'agence du siège Vitalis, **9 avenue de Northampton**, est ouverte **du lundi au vendredi de 9 h à 12 h 30 et de 14 h à 17 h**.

Pour éviter un déplacement inutile, **ALLOBUS : [05 49 44 66 88](tel:+33549446688)**, du lundi au vendredi de 8 h à 18 h. Vous pouvez notamment demander comment régulariser une ancienne carte dont le chargement n'a pas été finalisé avant le 1er novembre.

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
