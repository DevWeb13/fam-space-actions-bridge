# Radar Fam Space - Phase 3/3

## Mission

Radar surveille en priorité les articles Fam Space qui gagnent rapidement des impressions Google puis les perdent quelques jours plus tard. Il cherche ensuite les autres articles existants à améliorer réellement. Seulement s'il ne trouve aucune amélioration utile, il recherche un événement exceptionnel avec un fort potentiel d'audience et, lorsque c'est naturel, d'affiliation. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

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

Soumets le résultat final avec `action: advance`, uniquement les métadonnées éditoriales réellement corrigées, le corps complet et un bloc `radarReview`. Ne recopie pas les métadonnées inchangées: la plomberie les conserve et normalise la syntaxe avant traitement. Le bloc `radarReview` contient:
- `summary`: contrôles et corrections réellement effectués;
- `sources`: URLs factuelles revérifiées;
- pour un refresh, `regressionCheck`: résultat concret de la comparaison ancien/nouveau. Une seule correction factuelle vérifiée peut suffire.

**Ne recopie aucun autre champ Radar, aucune branche et aucun SHA.** Le workflow construit et contrôle d'abord l'article final avec le validateur réel. Il ne crée le commit de phase 3 que si ce précontrôle réussit, puis lance le processeur final.

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
title: "Luminéales du Thabor 2026 à Rennes: tarifs, horaires et visite en famille"
subtitle: Billets, créneaux du soir et accès avec des enfants
summary: "Du 27 novembre 2026 au 3 janvier 2027, les Luminéales proposent une balade lumineuse et musicale au Thabor. Tarifs famille, gratuités, poussettes, accès et retour: les informations utiles avant de réserver."
category: evenements
location:
  city: Rennes
  department: Ille-et-Vilaine
  region: Bretagne
image:
  src: /images/articles/2026/10/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille.webp
  alt: Vue du parc du Thabor à Rennes en journée, lieu du parcours des Luminéales, sans installations lumineuses visibles
sources:
  - title: Les Luminéales du Thabor - informations et billetterie officielles
    url: https://leslumineales.fr/
  - title: Destination Rennes - Les Luminéales du Thabor
    url: https://www.tourisme-rennes.com/sortir/les-lumineales-du-thabor-des-noels-dans-le-monde/
eventEndsAt: 2027-01-03
topic:
  key: evenements|rennes|les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille|2026
  keywords:
    - Luminéales du Thabor Rennes 2026
    - Des Noëls dans le monde Rennes enfants
    - Luminéales Thabor tarif famille
    - parcours lumineux Thabor poussette
slug: les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille
status: published
publishedAt: 2026-10-31T19:33:18.221Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Rennes
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/index.md
  targetSha: 5ea7ee2c52e9655395593418391a8a02728e3a36
  targetUrl: /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/
  decision: Choisir les billets adaptés à sa famille, prévoir le parcours nocturne et payer sans mauvaise surprise.
  affiliationPotential: Conserver l'hébergement Booking.com déjà intégré pour un week-end à Rennes; aucune billetterie partenaire vérifiée pour le parcours.
  gsc:
    retrievedAt: 2026-11-16T02:33:37+01:00
    dataThrough: 2026-11-13
    signal: uncertain
    basis: "Visibilité récente : 63 impressions sur trois jours, puis 7 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-02
    peakEnd: 2026-11-04
    recentStart: 2026-11-11
    recentEnd: 2026-11-13
    peakImpressions: 63
    recentImpressions: 7
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - illumination thabor rennes 2026
      - les lumineales
      - illumination thabor 2026
      - ou
---

<!-- article-image-credit -->
*Photo: [Ash\_Crow](https://commons.wikimedia.org/wiki/File:Rennes-Thabor-3.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Du **27 novembre 2026 au 3 janvier 2027**, les **Luminéales du Thabor** proposent à Rennes une balade nocturne payante à travers dix escales lumineuses et musicales sur les traditions de Noël dans le monde. Cette première édition, « Des Noëls dans le monde », dure environ **1 h 15**. Ce n'est ni un marché de Noël ni un parc de manèges: on vient surtout marcher, observer les installations et écouter les chants, notamment ceux du duo Birds on a Wire.

Avec des enfants, trois points comptent avant d'acheter: le **tarif réellement applicable à chacun**, l'horaire du parcours et les conditions de circulation dans le parc.

## Quel billet choisir en famille ?

La [grille officielle des Luminéales](https://leslumineales.fr/) annonce:

- **15 €** au plein tarif;
- **10 €** au tarif réduit pour les **6-17 ans**, les étudiants, les bénéficiaires du RSA, les demandeurs d'emploi et les personnes à mobilité réduite;
- **5 €** avec le tarif **Sortir!**, sous conditions d'éligibilité;
- **gratuit avant 5 ans**, mais avec un billet gratuit à réserver;
- **10 € par personne** avec le pack famille, accessible à partir de quatre personnes;
- **10 € par personne** avec l'offre groupe, à partir de dix personnes.

Les billets sont également annoncés comme disponibles sur **Pass Culture**, sans que cela signifie que chaque visiteur y soit éligible.

Pour **deux adultes et deux enfants de 6 à 17 ans**, les billets individuels coûtent **50 €** (15 + 15 + 10 + 10), contre **40 €** avec le pack famille. Avec **deux enfants de moins de 5 ans**, les billets individuels des deux adultes reviennent à **30 €**, les enfants entrant gratuitement. Pour deux adultes et un enfant de 6 à 17 ans, comptez **40 €** en billets individuels.

**Cas à vérifier: un enfant de 5 ans exactement.** La grille indique « moins de 5 ans » pour la gratuité et « 6 à 17 ans » pour la réduction, sans préciser clairement le cas des 5 ans. Demandez confirmation avant l'achat. Vérifiez aussi le montant final si plusieurs membres de la famille ont droit à des tarifs préférentiels. Des justificatifs sont demandés à l'entrée pour les tarifs réduits et gratuits.

## Horaires, réservation et paiement

<!-- article-image-body:01 -->

![Grille d'entrée du parc du Thabor sur la place Saint-Melaine à Rennes, photographiée en journée](/images/articles/2026/10/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille-body-01.webp)

*Photo: [Fab5669](https://commons.wikimedia.org/wiki/File:Rennes_-_parc_du_Thabor_24.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le parcours ouvre **à 19 h**, ferme **à minuit** et accepte les dernières entrées **à 22 h 30**. L'entrée se fait **place Saint-Mélaine**, à l'heure indiquée sur le billet. Le parc ferme au public à **18 h 30** pour l'installation: il n'est pas possible d'y attendre directement la séance du soir.

Un créneau proche de **19 h** laisse davantage de marge pour les jeunes enfants, compte tenu des **1 h 15** de promenade puis du trajet de retour. Des billets sont vendus au guichet à partir de 19 h, mais un créneau épuisé en ligne est également complet sur place: mieux vaut réserver en amont.

Au guichet, l'organisateur annonce le paiement par **carte bancaire, espèces ou chèque**. Les **chèques-vacances ne sont pas acceptés**.

Les billets ne sont **ni échangeables ni remboursables**. La pluie ne donne pas droit à un remboursement, sauf annulation par l'organisateur. La visite se déroule dehors.

## Poussettes, accessibilité, animaux et services pour les enfants

<!-- article-image-body:02 -->

![Cheminements et végétation du jardin paysager du parc du Thabor à Rennes en journée](/images/articles/2026/10/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille-body-02.webp)

*Photo: [Morio60](https://commons.wikimedia.org/wiki/File:Rennes_(Ille-et-Vilaine)_-_Parc_du_Thabor_-_Jardin_paysager.jpg) - [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

**Les poussettes sont autorisées.** Certains secteurs du Thabor comportent cependant des **pentes, dénivelés et passages en gravier**: l'autorisation ne garantit donc pas un cheminement entièrement facile. Pour les personnes en fauteuil roulant, l'organisateur recommande un accompagnant et répond aux questions particulières à **contact@leslumineales.fr**.

Les [FAQ officielles](https://leslumineales.fr/) indiquent aussi que les **chiens et autres animaux sont autorisés dans le parc s'ils sont tenus en laisse**.

Les **toilettes du parc seront ouvertes**. Un chalet proposera boissons chaudes et petite restauration. En revanche, aucune garantie publiée n'a été trouvée concernant une table à langer ou un équipement pour réchauffer un repas de bébé. La balade est surtout adaptée aux enfants capables de profiter d'une promenade extérieure après 19 h; elle ne comprend pas d'ateliers ou de manèges annoncés.

## Venir au Thabor et prévoir le retour

Les accès indiqués sont le **bus C5** (arrêt Thabor), les **bus C2, C3 et 12** (arrêt Fossés), ou le **métro Sainte-Anne** suivi d'une marche. Pour une séance tardive, contrôlez le dernier départ sur le [réseau STAR](https://www.star.fr/).

Si vous venez avec des enfants, notre guide [des transports à Rennes en famille](https://www.fam-space.fr/articles/vie-pratique/rennes-avec-des-enfants-les-transports-sont-gratuits-avant-12-ans-mais-pas-sans-carte/) explique notamment la carte KorriGo nécessaire aux **5-11 ans** pour bénéficier de la gratuité.

En voiture, le stationnement du centre-ville est limité. Le **parking Kléber**, à environ **600 m**, permet de sortir 24 h/24, mais ses horaires d'entrée varient. Les parcs-relais STAR peuvent convenir si leurs horaires correspondent à votre retour; certains ferment le dimanche et les jours fériés.

## Dormir à Rennes après la visite

Pour les familles qui transforment la sortie en week-end, l'[appartement TY AR PARIZ T3 près du Thabor sur Booking.com](https://www.booking.com/hotel/fr/ty-ar-pariz-t3-rennes-centre-parc-du-thabor.html) dispose d'une cuisine, d'un micro-ondes et de deux espaces nuit. **On accède à la seconde chambre par la première**, ce qui peut compter avec des enfants qui se couchent tôt. Un lit bébé est proposé sur demande et sous réserve de disponibilité; l'hôte précise qu'il faut apporter le linge de lit pour bébé. Vérifiez le prix total et la disponibilité aux dates choisies.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/index.md

---
title: "Luminéales du Thabor 2026 à Rennes: tarifs, horaires et visite en famille"
subtitle: Billets, créneaux du soir et accès avec des enfants
summary: "Du 27 novembre 2026 au 3 janvier 2027, les Luminéales proposent une balade lumineuse et musicale au Thabor. Tarifs famille, gratuités, poussettes, accès et retour: les informations utiles avant de réserver."
category: evenements
location:
  city: Rennes
  department: Ille-et-Vilaine
  region: Bretagne
image:
  src: "/images/articles/2026/10/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille.webp"
  alt: "Vue du parc du Thabor à Rennes en journée, lieu du parcours des Luminéales, sans installations lumineuses visibles"
sources:
  - title: Les Luminéales du Thabor - informations et billetterie officielles
    url: https://leslumineales.fr/
  - title: Destination Rennes - Les Luminéales du Thabor
    url: https://www.tourisme-rennes.com/sortir/les-lumineales-du-thabor-des-noels-dans-le-monde/
eventEndsAt: 2027-01-03
topic:
  key: evenements|rennes|les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille|2026
  keywords:
    - Luminéales du Thabor Rennes 2026
    - Des Noëls dans le monde Rennes enfants
    - Luminéales Thabor tarif famille
    - parcours lumineux Thabor poussette
slug: les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille
status: published
publishedAt: 2026-10-31T19:33:18.221Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Rennes
---
<!-- article-image-credit -->
*Photo: [Ash\_Crow](https://commons.wikimedia.org/wiki/File:Rennes-Thabor-3.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Du **27 novembre 2026 au 3 janvier 2027**, les **Luminéales du Thabor** proposent à Rennes une balade nocturne payante à travers dix escales lumineuses et musicales sur les traditions de Noël dans le monde. Cette première édition, « Des Noëls dans le monde », dure environ **1 h 15**. Ce n'est ni un marché de Noël ni un parc de manèges: on vient surtout marcher, observer les installations et écouter les chants, notamment ceux du duo Birds on a Wire.

Avec des enfants, trois points comptent avant d'acheter: le **tarif réellement applicable à chacun**, l'horaire du parcours et les conditions de circulation dans le parc.

## Quel billet choisir en famille ?

La grille de l'organisateur annonce:

- **15 €** au plein tarif;
- **10 €** au tarif réduit pour les **6-17 ans**, les étudiants, les bénéficiaires du RSA, les demandeurs d'emploi et les personnes à mobilité réduite;
- **5 €** avec le tarif **Sortir!**, sous conditions d'éligibilité;
- **gratuit avant 5 ans**, mais avec un billet gratuit à réserver;
- **10 € par personne** avec le pack famille, accessible à partir de quatre personnes.

Pour **deux adultes et deux enfants de 6 à 17 ans**, les billets individuels coûtent **50 €** (15 + 15 + 10 + 10), contre **40 €** avec le pack famille. Avec **deux enfants de moins de 5 ans**, les billets individuels des deux adultes reviennent à **30 €**, les enfants entrant gratuitement. Pour deux adultes et un enfant de 6 à 17 ans, comptez **40 €** en billets individuels.

**Cas à vérifier: un enfant de 5 ans exactement.** La grille indique « moins de 5 ans » pour la gratuité et « 6 à 17 ans » pour la réduction, sans préciser clairement le cas des 5 ans. Demandez confirmation avant l'achat. Vérifiez aussi le montant final si plusieurs membres de la famille ont droit à des tarifs préférentiels. Des justificatifs sont demandés à l'entrée pour les tarifs réduits et gratuits.

## Horaires, réservation et météo

<!-- article-image-body:01 -->

![Grille d'entrée du parc du Thabor sur la place Saint-Melaine à Rennes, photographiée en journée](/images/articles/2026/10/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille-body-01.webp)

*Photo: [Fab5669](https://commons.wikimedia.org/wiki/File:Rennes_-_parc_du_Thabor_24.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le parcours ouvre **à 19 h**, ferme **à minuit** et accepte les dernières entrées **à 22 h 30**. L'entrée se fait **place Saint-Mélaine**, à l'heure indiquée sur le billet. Le parc ferme au public à **18 h 30** pour l'installation: il n'est pas possible d'y attendre directement la séance du soir.

Un créneau proche de **19 h** laisse davantage de marge pour les jeunes enfants, compte tenu des **1 h 15** de promenade puis du trajet de retour. Des billets sont vendus au guichet à partir de 19 h, mais un créneau épuisé en ligne est également complet sur place: mieux vaut réserver en amont.

Les billets ne sont **ni échangeables ni remboursables**. La pluie ne donne pas droit à un remboursement, sauf annulation par l'organisateur. La visite se déroule dehors.

## Poussettes, accessibilité et services pour les enfants

<!-- article-image-body:02 -->

![Cheminements et végétation du jardin paysager du parc du Thabor à Rennes en journée](/images/articles/2026/10/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille-body-02.webp)

*Photo: [Morio60](https://commons.wikimedia.org/wiki/File:Rennes_(Ille-et-Vilaine)_-_Parc_du_Thabor_-_Jardin_paysager.jpg) - [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

**Les poussettes sont autorisées.** Certains secteurs du Thabor comportent cependant des **pentes, dénivelés et passages en gravier**: l'autorisation ne garantit donc pas un cheminement entièrement facile. Pour les personnes en fauteuil roulant, l'organisateur recommande un accompagnant et répond aux questions particulières à **contact@leslumineales.fr**.

Les **toilettes du parc seront ouvertes**. Un chalet proposera boissons chaudes et petite restauration. En revanche, aucune garantie publiée n'a été trouvée concernant une table à langer ou un équipement pour réchauffer un repas de bébé. La balade est surtout adaptée aux enfants capables de profiter d'une promenade extérieure après 19 h; elle ne comprend pas d'ateliers ou de manèges annoncés.

## Venir au Thabor et prévoir le retour

Les accès indiqués sont le **bus C5** (arrêt Thabor), les **bus C2, C3 et 12** (arrêt Fossés), ou le **métro Sainte-Anne** suivi d'une marche. Pour une séance tardive, contrôlez le dernier départ sur le [réseau STAR](https://www.star.fr/).

Si vous venez avec des enfants, notre guide [des transports à Rennes en famille](https://www.fam-space.fr/articles/vie-pratique/rennes-avec-des-enfants-les-transports-sont-gratuits-avant-12-ans-mais-pas-sans-carte/) explique notamment la carte KorriGo nécessaire aux **5-11 ans** pour bénéficier de la gratuité.

En voiture, le stationnement du centre-ville est limité. Le **parking Kléber**, à environ **600 m**, permet de sortir 24 h/24, mais ses horaires d'entrée varient. Les parcs-relais STAR peuvent convenir si leurs horaires correspondent à votre retour; certains ferment le dimanche et les jours fériés.

## Dormir à Rennes après la visite

Pour les familles qui transforment la sortie en week-end, l'[appartement TY AR PARIZ T3 près du Thabor sur Booking.com](https://www.booking.com/hotel/fr/ty-ar-pariz-t3-rennes-centre-parc-du-thabor.html) dispose d'une cuisine, d'un micro-ondes et de deux espaces nuit. **On accède à la seconde chambre par la première**, ce qui peut compter avec des enfants qui se couchent tôt. Un lit bébé est proposé sur demande et sous réserve de disponibilité; l'hôte précise qu'il faut apporter le linge de lit pour bébé. Vérifiez le prix total et la disponibilité aux dates choisies.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/balade-a-velo-autour-de-rennes-quel-parcours-choisir-avec-des-enfants/ | Balade à vélo autour de Rennes: quel parcours choisir avec des enfants? | activites | Rennes, Ille-et-Vilaine, Bretagne
- /articles/vie-pratique/rennes-avec-des-enfants-les-transports-sont-gratuits-avant-12-ans-mais-pas-sans-carte/ | Rennes avec des enfants: transports gratuits avant 12 ans, comment ça marche? | vie-pratique | Rennes, Ille-et-Vilaine, Bretagne
- /articles/sorties/espace-des-sciences-a-rennes-avec-des-enfants-expositions-experiences-et-planetarium/ | Espace des sciences à Rennes avec des enfants: expositions, expériences et planétarium | sorties | Rennes, Ille-et-Vilaine, Bretagne
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-a-rennes-ou-jouer-gratuitement-avec-son-enfant/ | LAEP à Rennes: où jouer gratuitement avec son enfant? | parentalite | Rennes, Ille-et-Vilaine, Bretagne
- /articles/maison/ecotravo-a-rennes-metropole-qui-peut-obtenir-jusqu-a-15-000-pour-renover-sa-maison/ | écoTravo à Rennes Métropole: qui peut obtenir jusqu'à 15 000 € pour rénover sa maison? | maison | Rennes, Ille-et-Vilaine, Bretagne
- /articles/evenements/parents-delires-rennes-2026-famille/ | Par’ents Délires 4 à Rennes: une fête gratuite pour toute la famille le 26 août 2026 | evenements | Rennes, Ille-et-Vilaine, Bretagne
- /articles/sorties/parc-en-folie-2026-a-rennes-billet-en-ligne-ou-sur-place-quelle-formule-choisir-en-famille/ | Parc en Folie 2026 à Rennes: tarifs, espace 0-3 ans et infos pratiques en famille | sorties | Bruz, Ille-et-Vilaine, Bretagne
- /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | Luminéales du Thabor 2026 à Rennes: tarifs, horaires et visite en famille | evenements | Rennes, Ille-et-Vilaine, Bretagne
- /articles/bons-plans/fougeres-en-famille-a-petit-prix-chateau-coursive-et-balade-gratuite/ | Fougères en famille à petit prix: château, Coursive et balade gratuite | bons-plans | Fougères, Ille-et-Vilaine, Bretagne
- /articles/cuisine/ferme-marine-de-cancale-avec-des-enfants-quelle-visite-choisir-a-la-toussaint-2026/ | Ferme Marine de Cancale avec des enfants: quelle visite choisir à la Toussaint 2026? | cuisine | Cancale, Ille-et-Vilaine, Bretagne
- /articles/evenements/quai-des-bulles-2026-a-saint-malo-en-famille-tarifs-programme-et-conseils/ | Quai des Bulles 2026 à Saint-Malo en famille: tarifs, programme et conseils | evenements | Saint-Malo, Ille-et-Vilaine, Bretagne
- /articles/voyages/dinard-en-famille-pendant-3-jours-plages-balades-et-escapade-a-saint-malo/ | Dinard en famille pendant 3 jours: plages, balades et escapade à Saint-Malo | voyages | Dinard, Ille-et-Vilaine, Bretagne
- /articles/voyages/saint-malo-en-famille-ou-dormir-pour-profiter-de-la-plage-et-d-intra-muros-a-pied/ | Saint-Malo en famille: où dormir pour profiter de la plage et d'Intra-Muros à pied | voyages | Saint-Malo, Ille-et-Vilaine, Bretagne
- /articles/evenements/terra-aletia-saint-malo-famille-2026/ | Terra Aletia 2026 à Saint-Malo: un voyage immersif dans l’univers des corsaires | evenements | Saint-Malo, Ille-et-Vilaine, Bretagne
- /articles/evenements/niepce-et-apres-une-exposition-photo-a-decouvrir-en-famille-a-chalon-sur-saone/ | Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône | evenements | Chalon-sur-Saône, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-puy-du-fou-en-famille-spectacles-et-visite-en-hiver/ | Noël 2026 au Puy du Fou en famille: spectacles et visite en hiver | evenements | Les Epesses, Vendée, Pays de la Loire
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/carnaval-de-guyane-2027-en-famille-preparer-ses-premieres-sorties/ | Carnaval de Guyane 2027 en famille: préparer ses premières sorties | evenements | Guyane
- /articles/evenements/mondo-clowns-2027-a-marmande-dates-tarifs-et-conseils-en-famille/ | Mondo'Clowns 2027 à Marmande: dates, tarifs et conseils en famille | evenements | Marmande, Lot-et-Garonne, Nouvelle-Aquitaine
- /articles/evenements/chambly-kids-festival-2027-quatre-spectacles-pour-les-enfants-dates-et-ages/ | Chambly Kids Festival 2027: quatre spectacles pour les enfants, dates et âges | evenements | Chambly, Oise, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | 2026-10-19T19:48:02.164Z
- refresh | /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | 2026-11-16T00:35:10.814Z
- refresh | /articles/parentalite/laep-a-rennes-ou-jouer-gratuitement-avec-son-enfant/ | 2026-11-09T04:33:48.646Z
- opportunity | /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | 2026-10-31T19:33:18.323Z
- opportunity | /articles/sorties/parc-en-folie-2026-a-rennes-billet-en-ligne-ou-sur-place-quelle-formule-choisir-en-famille/ | 2026-10-07T09:18:46.414Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
