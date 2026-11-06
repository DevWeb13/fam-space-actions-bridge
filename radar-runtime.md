# Radar Fam Space - Phase 2/3

## Mission

Radar surveille en priorité les articles Fam Space qui gagnent rapidement des impressions Google puis les perdent quelques jours plus tard. Il cherche ensuite les autres articles existants à améliorer réellement. Seulement s'il ne trouve aucune amélioration utile, il recherche un événement exceptionnel avec un fort potentiel d'audience et, lorsque c'est naturel, d'affiliation. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 2/3

Tu es journaliste web et responsable du parcours lecteur. Le candidat validé de phase 1 est fourni intégralement plus bas. Pour un refresh, l'article source exact est fourni intégralement plus bas.

Un refresh utilise l'ancien article comme référence interne, mais le résultat doit se lire comme un article actuel et autonome. Toute information encore vraie et utile doit rester, notamment prix décisionnels, durées, réservation, âge/taille, accessibilité, accès, contraintes, services bébé/enfants, repas et autres détails pratiques; une information fausse, périmée ou réellement redondante peut être retirée.

Suis le diagnostic éditorial du brief:
- `rank_loss`: réponds mieux aux intentions réellement en recul;
- `coverage_loss`: améliore la couverture utile sans présenter cela comme une perte de ranking;
- `uncertain`: applique uniquement la raison éditoriale indépendante vérifiée;
- `needs_query_check`: les recherches Google n'ont pas été diagnostiquées; applique uniquement la lacune éditoriale indépendante vérifiée, sans présenter la baisse d'impressions comme une perte de classement;
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
title: "Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille"
subtitle: Choisir entre la promenade lumineuse seule et le billet combiné avec les parcs animaliers jusqu'au 30 novembre
summary: "Safari de Lumières à Lumigny du 15 octobre 2026 au 3 janvier 2027: tarifs enfants, billet combiné, jours d'ouverture, dernière entrée et conseils pour les familles."
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
  phase: 1
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

## Mission retenue
Améliorer le guide existant du Safari de Lumières 2026-2027 à Lumigny, sans créer un nouvel article.

## Pourquoi cette mission
Le snapshot GSC constate 1 318 impressions sur la semaine haute contre 683 récemment, sans établir de perte de position. Lacune indépendante: l'article affirme que la réservation en ligne est obligatoire et les billets datés, mais ne donne aucun accès direct à la billetterie dans le corps du guide; la source officielle présente pourtant une action de réservation. Le lecteur doit pouvoir passer du choix au créneau réel sans chercher ailleurs.

## Décision du lecteur
Choisir le billet nocturne seul ou la formule deux parcs + lumières, vérifier le jour et réserver le créneau réellement proposé.

## Faits à traiter
Ajouter un lien pratique clairement identifiable vers la réservation officielle depuis la section billets; distinguer le calendrier indicatif des créneaux réellement vendus, sans inventer de disponibilités. Préserver les prix 16,90/14,90 € et 39/29 €, la gratuité des moins de 3 ans explicitement établie pour le billet seul, les calculs famille, la fin du combiné au 30 novembre, la fermeture zoologique dès décembre, l'horaire 18 h-22 h et dernière entrée 20 h 30, le parking, les repas et les réserves d'accessibilité. Ne pas remplacer le lien d'hébergement existant.

## Sources de départ
- Organisateur: https://lumigny-safari-reserve.com/evenements/lumigny-safari-de-lumieres/
- Horaires des parcs: https://lumigny-safari-reserve.com/horaires-et-tarifs/
- Calendrier complémentaire: https://www.visitparisregion.com/fr/lumigny-safari-de-lumieres

## Affiliation
L'hébergement Booking.com déjà intégré peut rester pour une nuit sur place; la réservation des lumières relève de la billetterie officielle et ne doit pas être présentée comme affiliée.

## Continuations internes
Ne pas créer un deuxième guide sur le même événement. Conserver les images et leurs crédits intacts. Ne pas présenter la baisse GSC comme une preuve de recul de classement.

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
