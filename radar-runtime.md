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
title: "Mini World Lyon: quel billet choisir en famille et combien de temps prévoir ?"
subtitle: "Pack famille, tarifs réduits en caisse, gratuité des petits et Lyon City Card: les différences qui comptent"
summary: À Mini World Lyon, comparez billets datés, pack à 54 €, réductions sur justificatif et gratuité des moins de 4 ans avant de prévoir 2 à 4 h de visite.
slug: mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite
status: published
publishedAt: 2026-09-25T06:00:59+02:00
updatedAt: 2026-11-02T16:35:39.572Z
category: bons-plans
readingTime: 5
location:
  city: Vaulx-en-Velin
  department: Rhône
  region: Auvergne-Rhône-Alpes
topic:
  key: bons-plans|vaulx-en-velin|mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite|2026
  keywords:
    - Mini World Lyon en famille
    - Mini World Lyon tarifs
image:
  src: /images/articles/2026/09/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite.webp
  alt: Décor miniature de l'île du Souvenir à Mini World Lyon
sources:
  - title: Mini World Lyon
    url: https://miniworldlyon.com/
  - title: Tarifs officiels de Mini World Lyon
    url: https://miniworldlyon.com/tarifs/
  - title: Horaires et calendrier d'ouverture
    url: https://miniworldlyon.com/horaires/
  - title: Informations pratiques et accès
    url: https://miniworldlyon.com/infos-pratiques/
  - title: Questions fréquentes et services aux familles
    url: https://miniworldlyon.com/questions-frequentes/
  - title: Le parc et les visites des coulisses
    url: https://miniworldlyon.com/le-parc/
  - title: Aventure de Noël Les Sisters
    url: https://miniworldlyon.com/sisters/
affiliate:
  enabled: true
  type: travel
  destination: Vaulx-en-Velin
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/bons-plans/(2026)/(09)/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/index.md
  targetSha: 67c76be4f2c04cebdfbf669899ca57ecb563337e
  targetUrl: /articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/
  decision: Choisir le bon billet pour Mini World Lyon en tenant compte de la nouvelle aventure de Noël Les Sisters incluse, de l'âge des enfants et du temps de visite.
  affiliationPotential: Conserver la Lyon City Card Tiqets et l'hébergement Booking.com existants, sans ajouter de lien commercial artificiel pour l'animation incluse.
  gsc:
    retrievedAt: 2026-11-18T00:34:26+01:00
    dataThrough: 2026-11-15
    signal: needs_query_check
    basis: Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.
    peakStart: 2026-10-19
    peakEnd: 2026-10-25
    recentStart: 2026-11-09
    recentEnd: 2026-11-15
    peakImpressions: 574
    recentImpressions: 197
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Mini World Lyon en famille
      - Mini World Lyon tarifs
reviewAt: 2027-01-16
---

À Vaulx-en-Velin, au Carré de Soie, **Mini World Lyon** réunit plus de 3 000 m² de décors miniatures animés. On y explore cinq univers: ville, montagne, campagne, Lyon et Côte d'Azur, où les véhicules circulent et les lumières recréent le jour et la nuit. L'exposition temporaire est comprise dans l'entrée. Pour une famille, le choix du billet dépend surtout du nombre et de l'âge des enfants, mais aussi des réductions auxquelles les adultes peuvent prétendre.

## Billets datés, pack famille ou billet liberté ?

Les **billets web datés** commencent à **16,90 € par adulte** et **11,90 € par enfant de 4 à 17 ans**. Ce sont des prix d'appel: le montant à payer dépend de la date choisie. Ces billets ne sont ni modifiables ni remboursables.

Le **pack famille daté** coûte **54 € pour deux adultes et deux enfants**, avec un tarif annoncé de **10,90 € par enfant supplémentaire**. À titre de comparaison, deux billets adultes et deux billets enfants aux prix web minimum totalisent 57,60 €: le pack fait alors économiser 3,60 €. Il faut néanmoins refaire le calcul si l'un des visiteurs bénéficie d'une réduction particulière ou si un enfant entre gratuitement.

Les **0-3 ans inclus** ne paient pas l'entrée, mais leur billet gratuit doit être retiré en caisse. Le parc précise une limite de **trois enfants de cet âge par adulte payant**. Ne comptez donc pas un enfant de 3 ans comme un enfant payant dans un pack sans comparer les autres formules.

Si vous ne pouvez pas fixer la date, le **billet liberté non daté** coûte **20,90 € par adulte** et **15,90 € par enfant de 4 à 17 ans**. Il est annoncé sans limite de validité. Autre option: le tarif de **fin de journée**, applicable pendant les **1 h 30 avant la fermeture**, à **13,90 € par adulte** et **9,90 € par enfant**. Il est moins cher, mais laisse trop peu de temps pour une découverte complète.

*Tarifs vérifiés le 18 novembre 2026, susceptibles de changer.*

## Les réductions à vérifier avant d'acheter

Certains tarifs ne sont accessibles **qu'en caisse, avec un justificatif en cours de validité**:

- **15,90 € pour un adulte** demandeur d'emploi, bénéficiaire du RSA, enseignant, étudiant, senior d'au moins 65 ans, en situation de handicap ou habitant de Vaulx-en-Velin;
- **10,90 € pour un enfant en situation de handicap**;
- **10,90 € pour un adulte en fauteuil roulant**, et **gratuité pour un enfant de moins de 18 ans en fauteuil roulant**.

Ces tarifs peuvent rendre des entrées individuelles plus intéressantes que le pack selon votre situation. Le parc ne précise pas de cumul entre réductions: ne l'anticipez pas dans votre calcul. Pour une famille ayant droit à un tarif réduit, comparez le coût de chaque formule **avant** d'acheter des billets datés non remboursables.

## La Lyon City Card est-elle intéressante ?

Pour **Mini World seul**, des billets individuels ou un pack sont généralement plus adaptés qu'un pass touristique. En revanche, si vous prévoyez plusieurs visites à Lyon et des déplacements en transports en commun, comparez le coût total avec la [Lyon City Card proposée sur Tiqets](https://www.tiqets.com/fr/les-choses-a-faire-a-lyon-c66838/billets-pour-lyon-city-card-p976069/).

Mini World indique accepter les Lyon City Card actives de 24 h, 48 h, 72 h, 96 h et un an, **sans réservation préalable pour l'entrée au parc**. L'offre Tiqets consultée présente notamment les formules 24 h, 48 h et 72 h et mentionne Mini World parmi les visites incluses. Vérifiez les durées proposées et les activités réellement utiles à votre famille avant de choisir: une City Card n'est pas automatiquement rentable pour une seule attraction.

## Noël 2026: l'aventure Les Sisters est-elle incluse ?

**Jusqu'au 15 janvier 2027**, Mini World Lyon propose une aventure de Noël autour de Wendy et Marine, les héroïnes des *Sisters*. Les enfants suivent un **livret d'énigmes** à travers les mondes miniatures, repèrent des scènes cachées et la maison des deux sœurs, puis découvrent un espace dédié avec **coin lecture**, découverte de la BD et dessins animés. Un **cadeau collector** est annoncé pour les enfants à l'issue du parcours.

D'après la [présentation officielle des Sisters](https://miniworldlyon.com/sisters/), **tout est compris dans l'entrée**, sans supplément ni réservation spécifique. Le jeu est **conseillé à partir de 4 ans** pour résoudre les énigmes; les plus jeunes peuvent accompagner leurs parents. Un billet normal, un pack famille ou une entrée admissible avec la City Card suffit: inutile de chercher une billetterie distincte pour cette animation.

## Combien de temps rester avec des enfants ?

<!-- article-image-body:01 -->

![Décor miniature de l'Auditorium de Lyon éclairé pendant un cycle de nuit](/images/articles/2026/09/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite-body-01.webp)

<!-- /article-image-body:01 -->

Prévoyez **au moins deux heures**, et facilement **trois à quatre heures** si les enfants aiment chercher les personnages cachés et attendre les animations. Avec le livret Les Sisters, gardez une marge pour les énigmes. Ce n'est pas un parc de manèges: la visite consiste à observer de grands paysages animés à son rythme. Les tout-petits, dès 2 ans selon le parc, peuvent aussi apprécier les scènes.

Les **poussettes sont autorisées**, mais leur circulation peut être moins facile dans certains passages étroits les jours d'affluence. Des **marchepieds** aident les petits à regarder les décors, les sanitaires disposent de **tables à langer** et des **casiers gratuits** sont prévus. Le parc est accessible aux personnes en situation de handicap; il recommande le début de journée pour circuler plus facilement.

La nourriture et les boissons ne sont **pas autorisées dans les espaces de visite**. Un **tampon de réentrée** permet toutefois de sortir déjeuner puis de revenir le même jour. Les enfants de moins de 12 ans doivent être accompagnés d'un adulte responsable.

## Faut-il ajouter la visite des coulisses ?

La visite guidée des coulisses et de l'atelier dure environ **45 minutes**, en supplément du billet d'entrée. Le parc annonce des départs à **15 h et 16 h 30** les jours d'ouverture, avec **4 à 8 participants**: en dessous de quatre inscrits, la visite est annulée et les billets en ligne remboursés. Les **moins de 4 ans ne peuvent pas participer**.

La page tarifs et le descriptif de la visite affichent **10 € par personne**, tandis que la FAQ mentionne encore **12 €**. Le prix de 10 € est donc le plus cohérent avec les pages dédiées, mais vérifiez-le lors de la réservation. Pour une première visite avec de jeunes enfants, ce supplément n'est pas indispensable pour profiter des cinq mondes.

## Accès, horaires et séjour sur place

Mini World Lyon se trouve au **3 avenue de Bohlen, 69120 Vaulx-en-Velin**, au bout du centre commercial Carré de Soie. Depuis l'arrêt **Vaulx-en-Velin La Soie** (métro A ou tram T3), comptez environ **cinq minutes à pied**. Les bus C8 et 52 desservent aussi l'arrêt « Carré de Soie ». En voiture, le centre commercial propose un **parking gratuit de 1 800 places**; l'adresse GPS conseillée est « Parking Centre Commercial Carré de Soie, 3 avenue de Bohlen ».

Si vous venez en TER, le parc annonce aussi **3 € de réduction sur présentation en caisse d'un billet TER daté du jour**; les conditions de cumul avec d'autres réductions ne sont pas précisées.

Le parc est **entièrement couvert**, mais ses jours et horaires d'ouverture varient, y compris pendant les fêtes. Consultez le [calendrier officiel](https://miniworldlyon.com/horaires/) avant de partir, surtout si vous envisagez un billet de fin de journée.

Pour une sortie depuis Lyon, il n'est pas nécessaire de dormir sur place. Si vous venez de loin ou prolongez la visite en week-end, vous pouvez [comparer les hébergements à Vaulx-en-Velin sur Booking.com](https://www.booking.com/city/fr/vaulx-en-velin.fr.html), notamment autour du Carré de Soie où se trouve l'ibis Lyon Carré de Soie.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/bons-plans/(2026)/(09)/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/index.md

---
title: "Mini World Lyon: quel billet choisir en famille et combien de temps prévoir ?"
subtitle: "Pack famille, tarifs réduits en caisse, gratuité des petits et Lyon City Card: les différences qui comptent"
summary: À Mini World Lyon, comparez billets datés, pack à 54 €, réductions sur justificatif et gratuité des moins de 4 ans avant de prévoir 2 à 4 h de visite.
slug: mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite
status: published
publishedAt: 2026-09-25T06:00:59+02:00
updatedAt: 2026-11-02T16:35:39.572Z
category: bons-plans
readingTime: 5
location:
  city: Vaulx-en-Velin
  department: Rhône
  region: Auvergne-Rhône-Alpes
topic:
  key: bons-plans|vaulx-en-velin|mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite|2026
  keywords:
    - Mini World Lyon en famille
    - Mini World Lyon tarifs
image:
  src: /images/articles/2026/09/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite.webp
  alt: Décor miniature de l'île du Souvenir à Mini World Lyon
sources:
  - title: Mini World Lyon
    url: https://miniworldlyon.com/
  - title: Tarifs officiels de Mini World Lyon
    url: https://miniworldlyon.com/tarifs/
  - title: Horaires et calendrier d'ouverture
    url: https://miniworldlyon.com/horaires/
  - title: Informations pratiques et accès
    url: https://miniworldlyon.com/infos-pratiques/
  - title: Questions fréquentes et services aux familles
    url: https://miniworldlyon.com/questions-frequentes/
  - title: Le parc et les visites des coulisses
    url: https://miniworldlyon.com/le-parc/
affiliate:
  enabled: true
  type: travel
  destination: Vaulx-en-Velin
---

À Vaulx-en-Velin, au Carré de Soie, **Mini World Lyon** réunit plus de 3 000 m² de décors miniatures animés. On y explore cinq univers - ville, montagne, campagne, Lyon et Côte d'Azur - où les véhicules circulent et les lumières recréent le jour et la nuit. L'exposition temporaire est comprise dans l'entrée. Pour une famille, le choix du billet dépend surtout du nombre et de l'âge des enfants, mais aussi des réductions auxquelles les adultes peuvent prétendre.

## Billets datés, pack famille ou billet liberté ?

Les **billets web datés** commencent à **16,90 € par adulte** et **11,90 € par enfant de 4 à 17 ans**. Ce sont des prix d'appel: le montant à payer dépend de la date choisie. Ces billets ne sont ni modifiables ni remboursables.

Le **pack famille daté** coûte **54 € pour deux adultes et deux enfants**, avec un tarif annoncé de **10,90 € par enfant supplémentaire**. À titre de comparaison, deux billets adultes et deux billets enfants aux prix web minimum totalisent 57,60 €: le pack fait alors économiser 3,60 €. Il faut néanmoins refaire le calcul si l'un des visiteurs bénéficie d'une réduction particulière ou si un enfant entre gratuitement.

Les **0-3 ans inclus** ne paient pas l'entrée, mais leur billet gratuit doit être retiré en caisse. Le parc précise une limite de **trois enfants de cet âge par adulte payant**. Ne comptez donc pas un enfant de 3 ans comme un enfant payant dans un pack sans comparer les autres formules.

Si vous ne pouvez pas fixer la date, le **billet liberté non daté** coûte **20,90 € par adulte** et **15,90 € par enfant de 4 à 17 ans**. Il est annoncé sans limite de validité. Autre option: le tarif de **fin de journée**, applicable pendant les **1 h 30 avant la fermeture**, à **13,90 € par adulte** et **9,90 € par enfant**. Il est moins cher, mais laisse trop peu de temps pour une découverte complète.

*Tarifs vérifiés le 2 novembre 2026, susceptibles de changer.*

## Les réductions à vérifier avant d'acheter

Certains tarifs ne sont accessibles **qu'en caisse, avec un justificatif en cours de validité**:

- **15,90 € pour un adulte** demandeur d'emploi, bénéficiaire du RSA, enseignant, étudiant, senior d'au moins 65 ans, en situation de handicap ou habitant de Vaulx-en-Velin;
- **10,90 € pour un enfant en situation de handicap**;
- **10,90 € pour un adulte en fauteuil roulant**, et **gratuité pour un enfant de moins de 18 ans en fauteuil roulant**.

Ces tarifs peuvent rendre des entrées individuelles plus intéressantes que le pack selon votre situation. Le parc ne précise pas de cumul entre réductions: ne l'anticipez pas dans votre calcul. Pour une famille ayant droit à un tarif réduit, comparez le coût de chaque formule **avant** d'acheter des billets datés non remboursables.

## La Lyon City Card est-elle intéressante ?

Pour **Mini World seul**, des billets individuels ou un pack sont généralement plus adaptés qu'un pass touristique. En revanche, si vous prévoyez plusieurs visites à Lyon et des déplacements en transports en commun, comparez le coût total avec la [Lyon City Card proposée sur Tiqets](https://www.tiqets.com/fr/les-choses-a-faire-a-lyon-c66838/billets-pour-lyon-city-card-p976069/).

Mini World indique accepter les Lyon City Card actives de 24 h, 48 h, 72 h, 96 h et un an, **sans réservation préalable pour l'entrée au parc**. L'offre Tiqets consultée présente notamment les formules 24 h, 48 h et 72 h et mentionne Mini World parmi les visites incluses. Vérifiez les durées proposées et les activités réellement utiles à votre famille avant de choisir: une City Card n'est pas automatiquement rentable pour une seule attraction.

## Combien de temps rester avec des enfants ?

<!-- article-image-body:01 -->

![Décor miniature de l'Auditorium de Lyon éclairé pendant un cycle de nuit](/images/articles/2026/09/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite-body-01.webp)

<!-- /article-image-body:01 -->

Prévoyez **au moins deux heures**, et facilement **trois à quatre heures** si les enfants aiment chercher les personnages cachés et attendre les animations. Ce n'est pas un parc de manèges: la visite consiste à observer de grands paysages animés à son rythme. Les tout-petits, dès 2 ans selon le parc, peuvent aussi apprécier les scènes.

Les **poussettes sont autorisées**, mais leur circulation peut être moins facile dans certains passages étroits les jours d'affluence. Des **marchepieds** aident les petits à regarder les décors, les sanitaires disposent de **tables à langer** et des **casiers gratuits** sont prévus. Le parc est accessible aux personnes en situation de handicap; il recommande le début de journée pour circuler plus facilement.

La nourriture et les boissons ne sont **pas autorisées dans les espaces de visite**. Un **tampon de réentrée** permet toutefois de sortir déjeuner puis de revenir le même jour. Les enfants de moins de 12 ans doivent être accompagnés d'un adulte responsable.

## Faut-il ajouter la visite des coulisses ?

La visite guidée des coulisses et de l'atelier dure environ **45 minutes**, en supplément du billet d'entrée. Le parc annonce des départs à **15 h et 16 h 30** les jours d'ouverture, avec **4 à 8 participants**: en dessous de quatre inscrits, la visite est annulée et les billets en ligne remboursés. Les **moins de 4 ans ne peuvent pas participer**.

La page tarifs et le descriptif de la visite affichent **10 € par personne**, tandis que la FAQ mentionne encore **12 €**. Le prix de 10 € est donc le plus cohérent avec les pages dédiées, mais vérifiez-le lors de la réservation. Pour une première visite avec de jeunes enfants, ce supplément n'est pas indispensable pour profiter des cinq mondes.

## Accès, horaires et séjour sur place

Mini World Lyon se trouve au **3 avenue de Bohlen, 69120 Vaulx-en-Velin**, au bout du centre commercial Carré de Soie. Depuis l'arrêt **Vaulx-en-Velin La Soie** (métro A ou tram T3), comptez environ **cinq minutes à pied**. Les bus C8 et 52 desservent aussi l'arrêt « Carré de Soie ». En voiture, le centre commercial propose un **parking gratuit de 1 800 places**; l'adresse GPS conseillée est « Parking Centre Commercial Carré de Soie, 3 avenue de Bohlen ».

Si vous venez en TER, le parc annonce aussi **3 € de réduction sur présentation en caisse d'un billet TER daté du jour**; les conditions de cumul avec d'autres réductions ne sont pas précisées.

Le parc est **entièrement couvert**, mais ses jours et horaires d'ouverture varient. Consultez le calendrier officiel avant de partir, surtout si vous envisagez un billet de fin de journée.

Pour une sortie depuis Lyon, il n'est pas nécessaire de dormir sur place. Si vous venez de loin ou prolongez la visite en week-end, vous pouvez [comparer les hébergements à Vaulx-en-Velin sur Booking.com](https://www.booking.com/city/fr/vaulx-en-velin.fr.html), notamment autour du Carré de Soie où se trouve l'ibis Lyon Carré de Soie.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | Halloween 2026 à Mini World Lyon: la Chasse aux 31 Méchants en famille | evenements | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/sorties/chateau-de-kerjean-avec-des-enfants-combien-de-temps-prevoir-et-quel-billet-choisir/ | Château de Kerjean avec des enfants: combien de temps prévoir et quel billet choisir? | sorties | Saint-Vougay, Finistère, Bretagne
- /articles/voyages/paleosite-de-saint-cesaire-en-famille-combien-de-temps-prevoir-en-2026/ | Paléosite de Saint-Césaire en famille: combien de temps prévoir en 2026? | voyages | Saint-Césaire, Charente-Maritime, Nouvelle-Aquitaine
- /articles/activites/micropolis-avec-de-jeunes-enfants-combien-de-temps-prevoir-et-quoi-emporter/ | Micropolis avec de jeunes enfants: combien de temps prévoir et quoi emporter? | activites | Saint-Léons, Aveyron, Occitanie
- /articles/activites/vallee-des-singes-a-romagne-combien-de-temps-prevoir-pour-la-visite/ | Vallée des Singes à Romagne: combien de temps prévoir pour la visite? | activites | Romagne, Vienne, Nouvelle-Aquitaine
- /articles/bons-plans/filitosa-en-famille-quel-billet-choisir-et-combien-prevoir/ | Filitosa en famille: quel billet choisir et combien prévoir? | bons-plans | Sollacaro, Corse-du-Sud, Corse
- /articles/activites/anatomik-park-a-cap-sciences-a-partir-de-quel-age-et-combien-de-temps-prevoir/ | Anatomik Park à Cap Sciences: à partir de quel âge et combien de temps prévoir? | activites | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/sorties/centre-historique-minier-de-lewarde-combien-de-temps-prevoir-avec-des-enfants/ | Centre Historique Minier de Lewarde: combien de temps prévoir avec des enfants | sorties | Lewarde, Nord, Hauts-de-France
- /articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/ | Mini World Lyon: quel billet choisir en famille et combien de temps prévoir ? | bons-plans | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/vie-pratique/lyon-saint-exupery-avec-des-enfants-preparer-le-trajet-les-controles-et-l-attente/ | Lyon-Saint-Exupéry avec des enfants: préparer le trajet, les contrôles et l’attente | vie-pratique | Colombier-Saugnieu, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/slava-s-snowshow-a-lyon-en-2026-quelle-seance-choisir-en-famille/ | Slava’s Snowshow à Lyon 2026: dates, tarifs et conseils en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/voyages/week-end-dans-les-pierres-dorees-en-famille-oingt-jarnioux-et-balades/ | Week-end dans les Pierres Dorées en famille: Oingt, Jarnioux et balades | voyages | Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/automne-des-gones-2026-a-lyon-quels-ateliers-gratuits-choisir-avec-les-enfants/ | Automne des gones 2026 à Lyon: ateliers et sorties gratuites en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | Equita Lyon 2026 avec des enfants: billets, Village Enfants et spectacles | evenements | Chassieu, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/sorties/aquarium-de-lyon-en-famille-nouveautes-ocean-360-tarifs-et-visite/ | Aquarium de Lyon en famille: nouveautés Océan 360°, tarifs et visite | sorties | La Mulatière, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | Toussaint 2026 au musée des Confluences: cinq rendez-vous pour les enfants | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/bons-plans/bourges-en-famille-a-petit-budget-musees-cathedrale-et-jardins/ | Bourges en famille à petit budget: musées, cathédrale et jardins | bons-plans | Bourges, Cher, Centre-Val de Loire
- /articles/bons-plans/le-mont-saint-michel-en-famille-a-petit-prix-en-automne-et-en-hiver/ | Le Mont-Saint-Michel en famille à petit prix en automne et en hiver | bons-plans | Le Mont-Saint-Michel, Manche, Normandie
- /articles/bons-plans/propriano-en-famille-une-chasse-au-tresor-gratuite-pour-decouvrir-la-ville/ | Propriano en famille: une chasse au trésor gratuite pour découvrir la ville | bons-plans | Propriano, Corse-du-Sud, Corse
- /articles/bons-plans/train-de-balagne-en-famille-arrets-plages-et-tarifs-entre-calvi-et-l-ile-rousse/ | Train de Balagne en famille: arrêts, plages et tarifs entre Calvi et L'Île-Rousse | bons-plans | Haute-Corse, Corse

### Historique Radar lié

- refresh | /articles/sorties/aquarium-de-lyon-en-famille-nouveautes-ocean-360-tarifs-et-visite/ | 2026-11-12T06:40:05.780Z
- opportunity | /articles/evenements/automne-des-gones-2026-a-lyon-quels-ateliers-gratuits-choisir-avec-les-enfants/ | 2026-10-23T09:31:27.871Z
- opportunity | /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | 2026-10-21T10:43:46.144Z
- opportunity | /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | 2026-10-19T19:48:02.164Z
- refresh | /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | 2026-11-16T00:35:10.814Z
- opportunity | /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | 2026-10-22T12:58:21.691Z
- refresh | /articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/ | 2026-11-02T16:35:39.647Z
- opportunity | /articles/evenements/slava-s-snowshow-a-lyon-en-2026-quelle-seance-choisir-en-famille/ | 2026-11-03T22:37:45.305Z
- opportunity | /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | 2026-10-15T17:42:32.693Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
