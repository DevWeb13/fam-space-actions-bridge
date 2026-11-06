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
title: "Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille"
subtitle: "Billet nocturne ou formule avec les deux parcs: tarifs, calendrier et réservation pour les familles"
summary: "Du 15 octobre 2026 au 3 janvier 2027, choisissez votre billet pour le Safari de Lumières à Lumigny: prix enfants, combiné jusqu'au 30 novembre, horaires et réservation en ligne."
category: evenements
location:
  city: Lumigny-Nesles-Ormeaux
  department: Seine-et-Marne
  region: Île-de-France
image:
  src: /images/articles/2026/10/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille.webp
  alt: Entrée historique du Parc des Félins à Lumigny, photographiée en 2013, sans les illuminations du Safari de Lumières 2026
sources:
  - title: Lumigny Safari Reserve - Safari de Lumières, programme, billets et tarifs
    url: https://lumigny-safari-reserve.com/evenements/lumigny-safari-de-lumieres/
  - title: VisitParisRegion - Lumigny Safari de Lumières, calendrier et accessibilité
    url: https://www.visitparisregion.com/fr/lumigny-safari-de-lumieres
  - title: Lumigny Safari Reserve - Horaires des deux parcs animaliers
    url: https://lumigny-safari-reserve.com/horaires-et-tarifs/
eventEndsAt: 2027-01-03
affiliate:
  enabled: true
  type: travel
  destination: Lumigny-Nesles-Ormeaux
topic:
  key: evenements|lumigny-nesles-ormeaux|lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille|2026
  keywords:
    - Lumigny Safari de Lumières 2026 2027
    - Safari de Lumières Lumigny tarifs famille
    - Lumigny Safari de Lumières billet combiné
slug: lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille
status: published
publishedAt: 2026-10-16T17:46:42.359Z
updatedAt: null
readingTime: 4
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/index.md
  targetSha: 8b54c675d6787cb50d8c5965c950eeccf08931a1
  targetUrl: /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/
  decision: Permettre aux familles de réserver le bon billet daté, en distinguant visite nocturne seule et journée combinée avant le 30 novembre, et de vérifier concrètement la date disponible.
  affiliationPotential: Conserver l'hébergement Booking.com déjà proposé, sans prétendre qu'il inclut l'entrée; billetterie officielle du parc pour l'activité principale, sans affiliation artificielle.
  gsc:
    retrievedAt: 2026-11-06T01:28:02+01:00
    dataThrough: 2026-11-03
    signal: needs_query_check
    basis: Baisse d'impressions observée; causalité et classement non établis.
    peakStart: 2026-10-17
    peakEnd: 2026-10-23
    recentStart: 2026-10-28
    recentEnd: 2026-11-03
    peakImpressions: 1318
    recentImpressions: 683
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Lumigny Safari de Lumières 2026 2027
      - Safari de Lumières Lumigny tarifs famille
      - Lumigny Safari de Lumières billet combiné
---

<!-- article-image-credit -->
*Photo: [Aviator12](https://commons.wikimedia.org/wiki/File:Parc_des_F%C3%A9lins_(Entr%C3%A9e).jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Du **15 octobre 2026 au 3 janvier 2027**, le **Lumigny Safari Reserve**, en Seine-et-Marne, célèbre ses 20 ans avec un parcours nocturne de lanternes géantes. Comptez **environ une heure** de promenade parmi des animaux lumineux, **sans visite des animaux vivants le soir**. Jusqu'au **30 novembre 2026**, une formule combinée permet aussi de découvrir les deux parcs animaliers en journée.

## Quel billet réserver pour votre famille?

<!-- article-image-body:01 -->

![Tigre blanc photographié au Parc des Félins en 2018, visite animalière de jour distincte des illuminations nocturnes](/images/articles/2026/10/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille-body-01.webp)

<!-- /article-image-body:01 -->

**Pour les illuminations seules**, le billet coûte **16,90 € dès 11 ans**, **14,90 € de 3 à 10 ans** et est **gratuit avant 3 ans**. Deux adultes avec deux enfants de 3 à 10 ans paient donc **63,60 €**, hors repas.

**Pour une journée dans les deux parcs suivie des lumières**, le billet combiné « deux parcs + Lumières » est proposé **jusqu'au 30 novembre 2026**. Il donne accès à **Lumigny Safari Reserve et Terre de Singes en journée**, puis au parcours nocturne à partir de 18 h. Comptez **39 € dès 11 ans** et **29 € de 3 à 10 ans**, soit **136 €** pour la même famille de quatre personnes. La gratuité avant 3 ans n'est pas explicitement confirmée sur la page de l'événement pour cette formule: vérifiez-la au moment de l'achat.

**Dès le 1er décembre**, les deux parcs zoologiques sont en fermeture hivernale: seul le parcours lumineux reste proposé aux soirées programmées. Le **pass annuel** ne couvre pas le Safari de Lumières.

### Réserver une date réellement disponible

La **réservation en ligne est obligatoire** et les **billets sont datés**. Pour choisir la formule et voir les soirées effectivement proposées, passez par la **[page officielle du Safari de Lumières et son bouton « Je réserve mes billets »](https://lumigny-safari-reserve.com/evenements/lumigny-safari-de-lumieres/)**.

Sélectionnez d'abord le billet nocturne ou combiné, puis vérifiez **la date proposée, le nombre de places, les âges et le montant final** avant de payer. Le calendrier général indique les jours prévus, mais **ne garantit pas qu'un billet reste disponible** pour votre soirée. Les week-ends et vacances scolaires peuvent être très demandés.

## Quelles dates et quels horaires?

Le parcours lumineux ouvre de **18 h à 22 h**, avec **dernière entrée à 20 h 30**. Le [calendrier publié par VisitParisRegion](https://www.visitparisregion.com/fr/lumigny-safari-de-lumieres) annonce:

- **Du 15 octobre au 1er novembre 2026:** tous les jours.
- **Du 2 novembre au 18 décembre 2026:** jeudi, vendredi, samedi et dimanche hors vacances scolaires; tous les soirs pendant les vacances concernées.
- **Du 19 décembre 2026 au 3 janvier 2027:** tous les jours, **sauf les 24, 25 et 31 décembre et le 1er janvier**.

Si vous choisissez le combiné avant décembre, **Lumigny Safari Reserve ouvre de 10 h à 17 h** et **Terre de Singes de 13 h 30 à 17 h** sur cette période, selon les [horaires des parcs](https://lumigny-safari-reserve.com/horaires-et-tarifs/). Organisez les visites animalières en journée, avant le parcours de 18 h. Un billet nocturne seul **ne permet pas d'entrer voir les animaux l'après-midi**.

## Que découvrent les enfants pendant la promenade?

Trois univers se succèdent: les **fonds marins** avec poissons, méduses et hippocampes géants; les **animaux du monde** en lanternes colorées; puis un univers **fantastique** avec dragons et phénix. Des ambiances sonores accompagnent les scènes.

La visite se fait **librement, au rythme des enfants**. Prévoyez plus d'une heure si vous vous arrêtez souvent et, comme il s'agit d'une promenade extérieure d'automne ou d'hiver, des **vêtements chauds et chaussures adaptées**.

VisitParisRegion indique des **aménagements pour les personnes à mobilité réduite** et un **accès en fauteuil roulant en autonomie**, sans détailler chaque portion du parcours ni les contraintes pour les poussettes. En cas de besoin particulier, mieux vaut interroger le parc **avant l'achat**.

## Accès, parking et repas

Le parc se situe à **La Fortelle, 77540 Lumigny-Nesles-Ormeaux**. Le **parking est gratuit** et accessible durant les soirées. **Snack, restaurant et boutique** restent ouverts; le parc annonce notamment burger raclette, gaufres et autres gourmandises hivernales. **Les repas ne sont pas compris** dans les billets.

Pour toute question sur l'accessibilité, les services ou la visite avec de jeunes enfants, contactez l'équipe au **01 64 51 33 33**.

## Passer la nuit près du parc

Si vous préférez éviter un long retour après les illuminations, **[Le Royaume des Lions à Rigny](https://www.booking.com/hotel/fr/le-royaume-des-lions-lumigny-nesles-ormeaux.fr.html)** propose des **chambres familiales**, un **parking privé gratuit** et un restaurant à proximité. **La chambre se réserve séparément et ne comprend pas automatiquement le billet Safari de Lumières.**

Avant de réserver, vérifiez les couchages, le prix, le petit-déjeuner, l'annulation et les disponibilités aux dates choisies. La fiche de l'établissement indique une **contribution à la conservation animale de 1 € par personne et par nuit** (hors moins de 3 ans), payable sur place, un **dépôt de garantie remboursable de 100 €** à l'arrivée et un **lit bébé à 10 € par séjour sur demande**.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/index.md

---
title: "Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille"
subtitle: Choisir entre la promenade lumineuse seule et le billet combiné avec les parcs animaliers jusqu'au 30 novembre
summary: "Safari de Lumières à Lumigny du 15 octobre 2026 au 3 janvier 2027: tarifs enfants, billet combiné, jours d'ouverture, dernière entrée et conseils pour les familles."
category: evenements
location:
  city: Lumigny-Nesles-Ormeaux
  department: Seine-et-Marne
  region: Île-de-France
image:
  src: "/images/articles/2026/10/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille.webp"
  alt: "Entrée historique du Parc des Félins à Lumigny, photographiée en 2013, sans les illuminations du Safari de Lumières 2026"
sources:
  - title: Lumigny Safari Reserve - Safari de Lumières, programme, billets et tarifs
    url: https://lumigny-safari-reserve.com/evenements/lumigny-safari-de-lumieres/
  - title: VisitParisRegion - Lumigny Safari de Lumières, calendrier et accessibilité
    url: https://www.visitparisregion.com/fr/lumigny-safari-de-lumieres
  - title: Lumigny Safari Reserve - Horaires des deux parcs animaliers
    url: https://lumigny-safari-reserve.com/horaires-et-tarifs/
eventEndsAt: 2027-01-03
affiliate:
  enabled: true
  type: travel
  destination: Lumigny-Nesles-Ormeaux
topic:
  key: evenements|lumigny-nesles-ormeaux|lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille|2026
  keywords:
    - Lumigny Safari de Lumières 2026 2027
    - Safari de Lumières Lumigny tarifs famille
    - Lumigny Safari de Lumières billet combiné
slug: lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille
status: published
publishedAt: 2026-10-16T17:46:42.359Z
updatedAt: null
readingTime: 4
---
<!-- article-image-credit -->
*Photo: [Aviator12](https://commons.wikimedia.org/wiki/File:Parc_des_F%C3%A9lins_(Entr%C3%A9e).jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Du **15 octobre 2026 au 3 janvier 2027**, le **Lumigny Safari Reserve**, en Seine-et-Marne, fête ses 20 ans avec un parcours nocturne de lanternes géantes: le **Lumigny Safari de Lumières**. La promenade, conçue pour les familles, dure environ **une heure** et montre des **animaux lumineux, pas les animaux vivants du zoo**. Jusqu'au **30 novembre**, une formule combinée permet de visiter les deux parcs animaliers en journée avant les illuminations du soir.

## Lumières seules ou deux parcs et Lumières: quel billet prendre?

<!-- article-image-body:01 -->

![Tigre blanc photographié au Parc des Félins en 2018, visite animalière de jour distincte des illuminations nocturnes](/images/articles/2026/10/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille-body-01.webp)

<!-- /article-image-body:01 -->

**Le billet Safari de Lumières seul** donne accès à la promenade nocturne. Il coûte **16,90 € à partir de 11 ans**, **14,90 € de 3 à 10 ans** et est **gratuit pour les moins de 3 ans**. Pour deux adultes et deux enfants de 3 à 10 ans, comptez **63,60 €**, hors repas.

**Le billet combiné « deux parcs + Lumières »**, proposé **jusqu'au 30 novembre 2026**, permet de visiter **Lumigny Safari Reserve et Terre de Singes en journée**, puis les lanternes à partir de 18 h. Il coûte **39 € à partir de 11 ans** et **29 € de 3 à 10 ans**, soit **136 €** pour cette même famille de quatre personnes. La page de l'événement ne précise pas explicitement la gratuité des moins de 3 ans pour cette formule: vérifiez-la avant le paiement.

**À compter du 1er décembre**, les deux parcs zoologiques entrent en **fermeture hivernale** et seul le parcours des lumières reste accessible le soir, aux dates prévues. Pendant les soirées, les espaces de vie des animaux et les circuits animaliers sont fermés aux visiteurs.

La **réservation en ligne est obligatoire** pour les illuminations. Les **billets sont datés** et le **pass annuel** du parc ne donne pas accès à cet événement. Vérifiez les conditions de vente et les places disponibles pour votre date avant de réserver.

## Quels jours venir et jusqu'à quelle heure?

Les illuminations ouvrent de **18 h à 22 h**, avec une **dernière entrée à 20 h 30**. Selon le calendrier publié par VisitParisRegion:

- **Du 15 octobre au 1er novembre 2026:** tous les jours.
- **Du 2 novembre au 18 décembre 2026:** les **jeudis, vendredis, samedis et dimanches** hors vacances scolaires; tous les soirs pendant les vacances concernées.
- **Du 19 décembre 2026 au 3 janvier 2027:** tous les jours **sauf les 24, 25 et 31 décembre, ainsi que le 1er janvier**.

Avant le déplacement, vérifiez qu'un créneau est effectivement proposé à la date choisie.

Avec un billet combiné avant décembre, les deux parcs animaliers ouvrent jusqu'à **17 h** sur cette période et **Terre de Singes à partir de 13 h 30**. Il faut donc prévoir la visite des animaux en journée avant de commencer les lumières à 18 h. Pour le billet nocturne seul, venir dans l'après-midi n'apporte pas d'accès aux animaux.

## Trois univers de lanternes à découvrir avec les enfants

Le parcours traverse **trois univers**: les **fonds marins**, avec poissons, méduses et hippocampes géants; les **animaux du monde**, représentés par de grandes lanternes colorées; puis un monde **fantastique**, avec dragons et phénix. Des ambiances sonores accompagnent les différentes scènes.

La promenade se visite **librement, à son rythme**, et s'adresse aussi aux jeunes enfants. Comptez **environ une heure**, davantage si votre famille s'arrête souvent devant les installations. À l'automne comme en hiver, prévoyez des vêtements chauds et des chaussures adaptées à une promenade extérieure.

VisitParisRegion mentionne des **aménagements pour les personnes à mobilité réduite** et un **accès en fauteuil roulant en autonomie**, sans détailler chaque portion du parcours ni les contraintes éventuelles pour les poussettes. En cas de besoin particulier, contactez le parc avant l'achat.

## Accès, parking et repas

Le Lumigny Safari Reserve se trouve à **La Fortelle, 77540 Lumigny-Nesles-Ormeaux**. Le **parking est gratuit** et reste ouvert durant les soirées. Le **snack, le restaurant et la boutique** accueillent les visiteurs; une carte hivernale comprenant notamment burger raclette et gaufres est annoncée. **Les repas ne sont pas inclus** dans les prix des billets indiqués plus haut.

Pour une question d'accessibilité, de services ou d'organisation, l'équipe est joignable au **01 64 51 33 33**.

## Dormir près du parc après les illuminations

Pour éviter un long trajet de nuit avec les enfants, **[Le Royaume des Lions à Rigny](https://www.booking.com/hotel/fr/le-royaume-des-lions-lumigny-nesles-ormeaux.fr.html)** propose des **chambres familiales**, un **parking privé gratuit** et un restaurant à proximité du parc. Cette nuitée se réserve séparément: **ne supposez pas que le billet Safari de Lumières est compris dans le prix de la chambre**.

Avant de réserver, vérifiez les couchages et le prix aux dates souhaitées. La fiche de l'hôtel indique une **contribution à la conservation animale de 1 € par personne et par nuit**, sauf pour les moins de 3 ans, payable sur place; un **dépôt de garantie remboursable de 100 €** est demandé à l'arrivée, et un **lit bébé sur demande coûte 10 € par séjour**. Le petit-déjeuner, les conditions d'annulation et les disponibilités doivent également être contrôlés selon la formule retenue.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | Thoiry Lumières Sauvages 2026-2027: dates, billets et visite en famille | evenements | Thoiry, Yvelines, Île-de-France
- /articles/sorties/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/ | Planète Préhistorique à Bordeaux: dates, durée et tarifs en famille | sorties | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | Halloween 2026 au Safari de Peaugres: animations, tarifs et Festival Lumières Sauvages | evenements | Peaugres, Ardèche, Auvergne-Rhône-Alpes
- /articles/activites/wow-safari-thoiry-en-famille-tarifs-duree-et-conseils-pour-organiser-la-visite/ | Wow Safari Thoiry en famille: tarifs 2026, billets et durée | activites | Thoiry, Yvelines, Île-de-France
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/sorties/safari-de-peaugres-avec-enfants-quel-billet-choisir-et-comment-organiser-la-journee/ | Safari de Peaugres avec enfants: quel billet choisir et comment organiser la journée | sorties | Peaugres, Ardèche, Auvergne-Rhône-Alpes
- /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | Lumières de Laval 2026 en famille: marchés, grande roue et croisière | evenements | Laval, Mayenne, Pays de la Loire
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/sorties/musee-de-la-grande-guerre-a-meaux-avec-des-enfants-que-voir-selon-leur-age/ | Musée de la Grande Guerre à Meaux avec des enfants: que voir selon leur âge ? | sorties | Meaux, Seine-et-Marne, Île-de-France
- /articles/voyages/chateau-de-fontainebleau-depuis-paris-en-famille-train-r-bus-3401-et-budget/ | Château de Fontainebleau depuis Paris en famille: train R, bus 3401 et budget | voyages | Fontainebleau, Seine-et-Marne, Île-de-France
- /articles/voyages/disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026/ | Disneyland Paris en RER A avec des enfants: trajet et tarifs 2026 | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/evenements/marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants/ | Marie-Antoinette à Fontainebleau 2026-2027: exposition, visites et tarifs en famille | evenements | Fontainebleau, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | Noël des Siècles 2026 à Champs-sur-Marne: billets, budget et horaires en famille | evenements | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | Noël à Provins 2026: marché médiéval, animations et visites en famille | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | Grand Noël 2026 à Vaux-le-Vicomte en famille: billets, offre enfant et animations | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/bons-plans/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/ | Château de Champs-sur-Marne en famille: gratuités, tarifs et dates à éviter | bons-plans | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | Contes gratuits à Paris le 14 novembre 2026: trois rendez-vous en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/semaine-du-golfe-2027-en-famille-ou-voir-les-bateaux/ | Semaine du Golfe 2027 en famille: où voir les bateaux ? | evenements | Morbihan, Bretagne
- /articles/evenements/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales/ | Fêtes de l’Ours 2027: quelle fête choisir en famille dans les Pyrénées-Orientales ? | evenements | Pyrénées-Orientales, Occitanie
- /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quelle-seance-choisir-en-famille/ | Contes gratuits à Paris le 14 novembre 2026: spectacles et scène ouverte en famille | evenements | Paris, Paris, Île-de-France

### Historique Radar lié

- opportunity | /articles/voyages/chateau-de-fontainebleau-depuis-paris-en-famille-train-r-bus-3401-et-budget/ | 2026-10-31T16:31:36.357Z
- opportunity | /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | 2026-11-05T13:27:24.356Z
- opportunity | /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quelle-seance-choisir-en-famille/ | 2026-11-05T00:34:45.481Z
- opportunity | /articles/voyages/disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026/ | 2026-10-31T04:29:30.633Z
- opportunity | /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | 2026-10-19T19:48:02.164Z
- opportunity | /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | 2026-10-20T22:29:05.422Z
- opportunity | /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | 2026-10-13T05:01:12.150Z
- opportunity | /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | 2026-10-30T09:27:15.122Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- opportunity | /articles/evenements/marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants/ | 2026-10-27T18:27:41.322Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
