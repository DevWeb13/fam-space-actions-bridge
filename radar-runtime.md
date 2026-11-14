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
- pour un refresh, `regressionCheck`: résultat concret de la comparaison ancien/nouveau. Une seule correction factuelle vérifiée peut suffire.

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
title: "Noël au château d'Amboise 2026: animations, nocturnes et tarifs en famille"
subtitle: Du parcours décoré aux contes pour enfants, choisissez votre date et vérifiez les suppléments et réservations.
summary: Du 28 novembre 2026 au 3 janvier 2027, le château royal d'Amboise fête Noël avec des décors, des contes, un spectacle et des soirées aux chandelles. Dates, âges, prix et conseils pratiques pour les familles.
category: evenements
location:
  city: Amboise
  department: Indre-et-Loire
  region: Centre-Val de Loire
image:
  src: /images/articles/2026/10/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles.webp
  alt: Vue du château royal d'Amboise depuis Maletrenne, hors illuminations de Noël
sources:
  - title: Château royal d'Amboise - Noël au Pays des Châteaux 2026
    url: https://www.chateau-amboise.com/noel-au-pays-des-chateaux/
  - title: Château royal d'Amboise - Prolongation du 11 décembre 2026
    url: https://www.chateau-amboise.com/nocturne-de-noel-au-pays-des-chateaux/
  - title: Château royal d'Amboise - Sainte-Lucie du 12 décembre
    url: https://www.chateau-amboise.com/balade-nocturne-aux-chandelles-sainte-lucie/
  - title: Château royal d'Amboise - Balades nocturnes aux chandelles spéciale Noël
    url: https://www.chateau-amboise.com/balades-nocturnes-aux-chandelles-speciale-noel/
  - title: Château royal d'Amboise - Visite guidée Le Noël royal des animaux
    url: https://www.chateau-amboise.com/visite-guidee-le-noel-royal-des-animaux/
  - title: Château royal d'Amboise - Conte Le Noël mystère du Roi
    url: https://www.chateau-amboise.com/conte-le-noel-mystere-du-roi/
  - title: Château royal d'Amboise - L'heure du conte
    url: https://www.chateau-amboise.com/lheure-du-conte/
  - title: Château royal d'Amboise - Spectacle Barbe-en-Vrac
    url: https://www.chateau-amboise.com/spectacle-pour-enfants-les-aventures-du-pirate-barbe-en-vrac/
  - title: Château royal d'Amboise - Tarifs 2026
    url: https://www.chateau-amboise.com/tarifs/
  - title: Château royal d'Amboise - Horaires
    url: https://www.chateau-amboise.com/horaires/
  - title: Château royal d'Amboise - Accès et accessibilité
    url: https://www.chateau-amboise.com/acces-au-chateau-royal-damboise/
  - title: Château royal d'Amboise - Informations pratiques et restauration
    url: https://www.chateau-amboise.com/infos-pratiques/
eventEndsAt: 2027-01-03T17:45:00+01:00
topic:
  key: evenements|amboise|noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles|2026
  keywords:
    - Noël château royal Amboise 2026
    - Noël royal des animaux Amboise
    - nocturne chandelles Amboise décembre 2026
    - château Amboise Noël tarifs enfants
slug: noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles
status: published
publishedAt: 2026-10-24T06:28:53.652Z
updatedAt: null
readingTime: 6
affiliate:
  enabled: true
  type: travel
  destination: Amboise
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/index.md
  targetSha: ac3d689d53e395a4dbb7feaa8ee2045f66453212
  targetUrl: /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/
  decision: Choisir une date et une animation de Noël adaptées à l'âge des enfants, en comprenant le coût réel et les réservations nécessaires.
  affiliationPotential: Conserver le billet de visite Tiqets avec ses limites explicites et l'hébergement familial Booking.com existant; aucune offre partenaire vérifiée pour les spectacles à supplément.
  gsc:
    retrievedAt: 2026-11-14T03:26:00+01:00
    dataThrough: 2026-11-10
    signal: needs_query_check
    basis: "Visibilité récente : 54 impressions sur trois jours, puis 3 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-26
    peakEnd: 2026-10-28
    recentStart: 2026-11-08
    recentEnd: 2026-11-10
    peakImpressions: 54
    recentImpressions: 3
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Noël château royal Amboise 2026
      - Noël royal des animaux Amboise
      - nocturne chandelles Amboise décembre 2026
      - château Amboise Noël tarifs enfants
---

Du **28 novembre 2026 au 3 janvier 2027**, le château royal d'Amboise présente **« Le Noël royal des animaux »**: des décors qui imaginent les fêtes des oiseaux, cerfs, fauves et petits rongeurs de la cour. Le château est **fermé les 25 décembre et 1er janvier**.

Une visite ordinaire suffit pour découvrir les décors. Pour un conte, un spectacle ou une soirée aux chandelles, choisissez d'abord une date adaptée à l'âge des enfants: certaines animations sont incluses mais exigent une réservation, d'autres demandent un supplément.

## Visite de jour: prix, horaires et décors de Noël

<!-- article-image-body:01 -->

![Salle du Conseil du château royal d'Amboise en 2017, hors décorations de Noël](/images/articles/2026/10/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles-body-01.webp)

*Photo: [Fab5669](https://commons.wikimedia.org/wiki/File:Amboise_%E2%80%93_ch%C3%A2teau,_int%C3%A9rieur_(11).jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le parcours décoré est **inclus dans le billet d'entrée ordinaire**, sans supplément. Tarifs publics 2026:

- **17,30 € par adulte**;
- **11 € pour les 7-18 ans**;
- **gratuit pour les moins de 7 ans**.

Deux adultes et deux enfants de 7 à 18 ans paient donc **56,60 €** hors réductions. Une réduction de **2 € par enfant payant** est prévue pour les familles nombreuses, sous conditions. Le billet comprend l'**HistoPad**, tablette de visite avec reconstitutions historiques. Consultez les [tarifs du château](https://www.chateau-amboise.com/tarifs/) pour les autres réductions.

La billetterie ouvre à **9 h**. Du **28 novembre au 18 décembre**, elle ferme de **12 h 30 à 14 h**, puis à **17 h**. Du **19 décembre au 3 janvier**, hors jours de fermeture, elle reste ouverte en continu jusqu'à **17 h**. Le domaine ferme normalement **45 minutes après la billetterie**. Les soirées spéciales suivent d'autres horaires.

Pour préparer une visite classique, [Tiqets propose un billet d'entrée au château d'Amboise](https://www.tiqets.com/fr/activites-attractions-amboise-c97582/billets-pour-chateau-d-amboise-billet-coupe-file-p977796/). **Vérifiez la date et les prestations avant paiement**: ce billet général ne garantit ni une animation sur réservation, ni l'accès à une soirée aux chandelles.

## Quels contes et spectacles choisir avec les enfants?

**Du 19 décembre 2026 au 3 janvier 2027**, sauf les 25 décembre et 1er janvier, la visite guidée **« Le Noël royal des animaux »** est annoncée à **11 h 30** chaque jour. Elle dure **une heure**, est **incluse dans l'entrée**, mais nécessite une **réservation**. La page de l'organisateur annonçait une ouverture des réservations en ligne à venir: vérifiez sa disponibilité avant de vous déplacer.

Les animations ponctuelles permettent de choisir selon l'âge:

- **22, 24, 27 et 28 décembre à 16 h**: [« Le Noël mystère du Roi »](https://www.chateau-amboise.com/conte-le-noel-mystere-du-roi/), conte de **30 minutes pour les 7-10 ans**, inclus dans le billet mais **sur réservation**. Le château conseille de visiter les salles avant le conte, car sa première porte ferme à **17 h**. La billetterie en ligne était annoncée comme à venir.
- **23 décembre de 14 h à 14 h 40**: [« L'heure du conte »](https://www.chateau-amboise.com/lheure-du-conte/), pour les **7-10 ans**. Prévoir **4 € supplémentaires par enfant et par adulte**, en plus des entrées, et **réserver**. Plusieurs marches donnent accès à la salle.
- **30 décembre à 14 h**: [« Les aventures du pirate Barbe-en-Vrac »](https://www.chateau-amboise.com/spectacle-pour-enfants-les-aventures-du-pirate-barbe-en-vrac/), spectacle participatif d'**une heure pour les 3-12 ans**. Supplément de **5 € par enfant et par adulte** en plus de l'entrée; pour les **moins de 7 ans**, seul ce supplément de 5 € est dû. **Réservation nécessaire**, avec ouverture de billetterie annoncée à venir.

Par exemple, deux adultes et deux enfants de 7 à 10 ans paient **72,60 €** pour l'entrée et « L'heure du conte », ou **76,60 €** pour l'entrée et « Barbe-en-Vrac », hors réductions. Ces suppléments concernent les participants à l'animation; confirmez les modalités de réservation auprès du château.

## Le 11 décembre: ouverture prolongée sans chandelles

Le **vendredi 11 décembre**, la billetterie reste ouverte jusqu'à **19 h** et le château jusqu'à **20 h**. Cette prolongation est **incluse dans le billet ordinaire**, **sans réservation**. Le parcours est identique à celui de la journée, **sans installation de bougies ou de chandelles**. C'est l'option la plus simple pour profiter des décors en soirée sans billet spécial.

## Les 12, 26 et 29 décembre: soirées aux chandelles

Le **12 décembre**, la [soirée spéciale Sainte-Lucie](https://www.chateau-amboise.com/balade-nocturne-aux-chandelles-sainte-lucie/) ajoute aux salles éclairées par des centaines de bougies une **déambulation équestre de l'association Cavalbancale**. Les **26 et 29 décembre**, les [nocturnes spéciales Noël](https://www.chateau-amboise.com/balades-nocturnes-aux-chandelles-speciale-noel/) mettent les salles du logis royal à la lumière des bougies.

Pour ces soirées, il faut un **billet spécifique** et entrer uniquement au créneau réservé: **18 h 30, 19 h, 19 h 30 ou 20 h**. Le billet de jour ne suffit pas. Tarifs annoncés: **16,50 € par adulte**, **13,50 € par étudiant**, **11,50 € par enfant** et **7,50 € par abonné**. La page Sainte-Lucie précise la tranche **7-18 ans** pour le billet enfant et une gratuité pour les personnes prénommées Lucie ou Lucy, avec justificatif et billet correspondant. Pour les 26 et 29 décembre, vérifiez directement les conditions applicables aux moins de 7 ans au lieu de supposer la gratuité du billet ordinaire.

**Le parc n'est pas accessible durant ces soirées**, les animaux sont interdits et le château signale un **accès difficile en fauteuil roulant**. Avec une poussette ou des difficultés de déplacement, renseignez-vous avant de réserver.

## Accès, poussettes et repas sur place

<!-- article-image-body:02 -->

![Cour intérieure et ailes du logis royal du château d'Amboise photographiées en 2005](/images/articles/2026/10/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles-body-02.webp)

*Photo: [No machine-readable author provided. LonganimE assumed (based on copyright claims).](https://commons.wikimedia.org/wiki/File:Cour_int%C3%A9rieure_logis_royal_chateau_d%27Amboise.JPG) - [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

L'entrée publique se trouve **montée de l'Émir Abd El Kader**, depuis la **place Michel Debré**. La **gare d'Amboise est à environ dix minutes à pied**; vérifiez les derniers trains si vous choisissez une soirée tardive. En voiture, prévoyez votre stationnement en centre-ville. Une **bagagerie payante** est disponible dans la rampe d'accès, avant la billetterie.

Pour les personnes à mobilité réduite, l'accès adapté se fait par la **porte des Lions, rue Augustin Thierry**, **en véhicule et non à pied, même en fauteuil électrique**. Le château demande un accompagnateur pour certaines pentes et allées. Les deux premiers étages du logis royal et les jardins sont accessibles en fauteuil; le niveau supérieur dispose d'une présentation adaptée sur HistoPad. Les familles avec poussette, sans situation de handicap, utilisent l'entrée publique principale. Les conditions particulières des nocturnes ne sont pas identiques à celles de jour.

En hiver, ne comptez pas sur le café saisonnier, ouvert en juillet et août. Des **distributeurs de boissons et de biscuits** sont annoncés hors saison; pour un vrai repas, prévoyez une adresse dans le centre d'Amboise.

## Préparer un séjour de Noël à Amboise

Le **pass « Noël au Pays des Châteaux »** couvre plusieurs monuments partenaires: contrôlez les visites incluses et les règles propres à chaque château. Il **ne remplace pas une réservation aux chandelles**. L'**Amboise City Pass 2026** était, lui, valable seulement jusqu'au **31 octobre**.

Pour dormir près du château après une soirée, **Le Clos d'Amboise** propose des **chambres et suites familiales** au centre-ville. [Vérifiez les chambres et disponibilités sur Booking.com](https://www.booking.com/hotel/fr/le-clos-damboise.fr.html) selon vos dates et l'âge des enfants. Si vous préférez davantage d'espace et une cuisine, notre guide sur la [maison de vacances à Amboise avec des enfants](/articles/maison/maison-de-vacances-a-amboise-avec-des-enfants-7-criteres-pour-bien-choisir/) détaille les critères utiles.

Pour une autre sortie de Noël en Centre-Val de Loire, découvrez les [décors et le mapping du château de Cheverny](/articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/).

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/index.md

---
title: "Noël au château d'Amboise 2026: visite, nocturnes et tarifs en famille"
subtitle: Parcours décoré en journée, ouverture tardive du 11 décembre et soirées aux chandelles les 26 et 29 décembre.
summary: Du 28 novembre 2026 au 3 janvier 2027, découvrez les décors de Noël du château royal d'Amboise. Prix des billets, horaires, visites guidées, soirées spéciales et accès avec des enfants.
category: evenements
location:
  city: Amboise
  department: Indre-et-Loire
  region: Centre-Val de Loire
image:
  src: "/images/articles/2026/10/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles.webp"
  alt: "Vue du château royal d'Amboise depuis Maletrenne, hors illuminations de Noël"
sources:
  - title: Château royal d'Amboise - Noël au Pays des Châteaux 2026
    url: https://www.chateau-amboise.com/noel-au-pays-des-chateaux/
  - title: Château royal d'Amboise - Prolongation du 11 décembre 2026
    url: https://www.chateau-amboise.com/nocturne-de-noel-au-pays-des-chateaux/
  - title: Château royal d'Amboise - Balades nocturnes aux chandelles spéciale Noël
    url: https://www.chateau-amboise.com/balades-nocturnes-aux-chandelles-speciale-noel/
  - title: Château royal d'Amboise - Visite guidée Le Noël royal des animaux
    url: https://www.chateau-amboise.com/visite-guidee-le-noel-royal-des-animaux/
  - title: Château royal d'Amboise - Tarifs 2026
    url: https://www.chateau-amboise.com/tarifs/
  - title: Château royal d'Amboise - Horaires
    url: https://www.chateau-amboise.com/horaires/
  - title: Château royal d'Amboise - Accès et accessibilité
    url: https://www.chateau-amboise.com/acces-au-chateau-royal-damboise/
  - title: Château royal d'Amboise - Informations pratiques et restauration
    url: https://www.chateau-amboise.com/infos-pratiques/
eventEndsAt: 2027-01-03T17:45:00+01:00
topic:
  key: evenements|amboise|noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles|2026
  keywords:
    - Noël château royal Amboise 2026
    - Noël royal des animaux Amboise
    - nocturne chandelles Amboise décembre 2026
    - château Amboise Noël tarifs enfants
slug: noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles
status: published
publishedAt: 2026-10-24T06:28:53.652Z
updatedAt: null
readingTime: 5
affiliate:
  enabled: true
  type: travel
  destination: Amboise
---

Du **28 novembre 2026 au 3 janvier 2027**, le château royal d'Amboise accueille **« Le Noël royal des animaux »**, un parcours de décors imaginant les fêtes organisées par les animaux de la cour: oiseaux, cerfs, fauves et petits rongeurs. Le château est **fermé les 25 décembre et 1er janvier**.

Trois expériences sont proposées: les décors en journée, une ouverture prolongée le **11 décembre** et des **soirées aux chandelles les 26 et 29 décembre**. Les deux dernières ne se réservent pas de la même manière.

## Visite de jour: le parcours de Noël est inclus

<!-- article-image-body:01 -->

![Salle du Conseil du château royal d'Amboise en 2017, hors décorations de Noël](/images/articles/2026/10/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles-body-01.webp)

*Photo: [Fab5669](https://commons.wikimedia.org/wiki/File:Amboise_%E2%80%93_ch%C3%A2teau,_int%C3%A9rieur_(11).jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le parcours « Le Noël royal des animaux » est **compris dans le billet d'entrée ordinaire**, sans supplément pour les décors. Les tarifs publics 2026 sont les suivants:

- **17,30 € par adulte**;
- **11 € pour les 7-18 ans**;
- **gratuit pour les moins de 7 ans**.

Pour deux adultes et deux enfants de 7 à 18 ans, le total est de **56,60 €**, hors réductions. Les familles nombreuses peuvent bénéficier d'une réduction de **2 € par enfant payant**, sous conditions. L'entrée comprend l'**HistoPad**, une tablette de visite avec reconstitutions historiques.

La billetterie ouvre à **9 h**. Du **28 novembre au 18 décembre**, elle ferme à **12 h 30**, rouvre à **14 h** et ferme à **17 h**. Du **19 décembre au 3 janvier**, hors jours de fermeture, elle reste ouverte en continu jusqu'à **17 h**. Le domaine ferme normalement **45 minutes après la billetterie**. Ces horaires ordinaires ne s'appliquent pas à l'ouverture prolongée du 11 décembre ni aux nocturnes spéciales.

Pour préparer la visite de jour, [Tiqets propose un billet d'entrée au château d'Amboise](https://www.tiqets.com/fr/activites-attractions-amboise-c97582/billets-pour-chateau-d-amboise-billet-coupe-file-p977796/). **Vérifiez la date et les prestations affichées avant de payer**: cette offre générale ne confirme pas explicitement le parcours de Noël 2026, ne remplace pas un billet de nocturne et ne garantit pas une place à la visite guidée.

## Le 11 décembre: visiter plus tard, sans chandelles

Le **vendredi 11 décembre 2026**, la billetterie reste ouverte jusqu'à **19 h** et le château jusqu'à **20 h**. Cette prolongation est **incluse dans le billet ordinaire**, **sans réservation**.

Le parcours décoré est le même qu'en journée: **aucune installation de chandelles ou de bougies** n'est prévue ce soir-là. C'est une option pour voir le château à la nuit tombée sans choisir une soirée à créneau imposé.

## Les 26 et 29 décembre: les nocturnes aux chandelles

Les **26 et 29 décembre**, des centaines de bougies éclairent les salles du logis royal. Il faut **réserver un billet spécifique** et entrer exclusivement au créneau choisi: **18 h 30, 19 h, 19 h 30 ou 20 h**. Un billet de jour ne suffit pas.

Le château annonce **16,50 € par adulte**, **13,50 € par étudiant**, **11,50 € par enfant** et **7,50 € par abonné**. La page de l'événement ne précise pas la tranche d'âge du billet enfant ni les conditions éventuelles pour les moins de 7 ans. **Ne transposez pas automatiquement la gratuité de la journée à cette soirée**: vérifiez les conditions de réservation.

Pendant les nocturnes, **le parc est fermé** et **les animaux ne sont pas admis**. L'organisateur signale un **accès difficile pour les personnes en fauteuil roulant**; cela ne signifie pas une interdiction générale, mais nécessite de se renseigner sur les possibilités réelles avant de réserver. Avec une poussette, demandez également quelles circulations sont possibles dans les salles.

## Une visite guidée de Noël pendant les vacances

Du **19 décembre 2026 au 3 janvier 2027**, sauf les 25 décembre et 1er janvier, la visite guidée **« Le Noël royal des animaux »** est annoncée chaque jour à **11 h 30**. Elle dure **une heure** et présente les traditions de Noël ainsi que les animaux liés à la cour.

Elle est **incluse dans le billet d'entrée**, mais **sur réservation**. Lors de la vérification, le château indiquait que l'ouverture des réservations en ligne était encore à venir. L'achat d'une entrée seule ne garantit donc pas une place à cette visite: vérifiez l'ouverture des inscriptions auprès de l'organisateur.

## Accès, poussettes et services pratiques

<!-- article-image-body:02 -->

![Cour intérieure et ailes du logis royal du château d'Amboise photographiées en 2005](/images/articles/2026/10/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles-body-02.webp)

*Photo: [No machine-readable author provided. LonganimE assumed (based on copyright claims).](https://commons.wikimedia.org/wiki/File:Cour_int%C3%A9rieure_logis_royal_chateau_d%27Amboise.JPG) - [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

L'entrée publique se trouve **montée de l'Émir Abd El Kader**, depuis la **place Michel Debré**. La **gare d'Amboise est à environ dix minutes à pied** de l'entrée; pour une soirée tardive, vérifiez le dernier train retour. En voiture, repérez votre stationnement en centre-ville avant la visite. Une **bagagerie payante** est disponible dans la rampe d'accès, avant la billetterie.

Pour les personnes à mobilité réduite, l'accès adapté se fait par la **porte des Lions, rue Augustin Thierry**, **en véhicule et non à pied, même avec un fauteuil électrique**. Le château demande la présence d'un accompagnateur pour franchir certaines pentes et allées. Les deux premiers étages du logis royal et les jardins sont accessibles en fauteuil; le niveau supérieur fait l'objet d'une présentation adaptée sur HistoPad. Les visiteurs avec poussette, sans situation de handicap, utilisent l'entrée publique principale. Ces aménagements de jour ne garantissent pas les mêmes conditions pendant les nocturnes.

En hiver, ne comptez pas sur le café saisonnier du château pour un repas: il fonctionne en juillet et août. Des **distributeurs de boissons et de biscuits** sont annoncés hors saison; le centre d'Amboise offre d'autres possibilités pour déjeuner ou dîner.

## Plusieurs châteaux ou une nuit à Amboise ?

Le **pass « Noël au Pays des Châteaux »** concerne plusieurs monuments partenaires: vérifiez les visites incluses et les conditions propres à chaque site. Il est **distinct de la réservation des nocturnes aux chandelles**. Ne le confondez pas non plus avec l'**Amboise City Pass 2026**, valable seulement jusqu'au **31 octobre**.

Pour dormir à proximité après une soirée, **Le Clos d'Amboise**, au centre-ville, propose notamment des **chambres et suites familiales**. [Consultez les catégories de chambres et les disponibilités sur Booking.com](https://www.booking.com/hotel/fr/le-clos-damboise.fr.html) pour votre date et le nombre d'enfants; aucune chambre n'est garantie pour les fêtes. Pour un séjour plus long avec cuisine et davantage d'espace, notre guide sur la [maison de vacances à Amboise avec des enfants](/articles/maison/maison-de-vacances-a-amboise-avec-des-enfants-7-criteres-pour-bien-choisir/) aide à choisir les équipements utiles.

Pour une autre sortie de Noël en Centre-Val de Loire, découvrez aussi les [décors et le mapping du château de Cheverny](/articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/).

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | Noël à Chenonceau 2026: décors, nocturnes et tarifs en famille | evenements | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/cuisine/marche-d-amboise-composer-un-pique-nique-tourangeau-avec-des-enfants/ | Marché d'Amboise: composer un pique-nique tourangeau avec des enfants | cuisine | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/maison/maison-de-vacances-a-amboise-avec-des-enfants-7-criteres-pour-bien-choisir/ | Maison de vacances à Amboise avec des enfants: 7 critères pour bien choisir | maison | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/sorties/chateau-de-chenonceau-en-famille-billets-duree-et-conseils-avec-des-enfants/ | Château de Chenonceau en famille: billets, durée et conseils avec des enfants | sorties | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/bons-plans/amboise-city-pass-2026-quand-devient-il-vraiment-rentable/ | Amboise City Pass 2026: quand devient-il vraiment rentable? | bons-plans | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | Monument Jeu d'enfant 2026 à Azay-le-Rideau: animaux cachés et contes en famille | evenements | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-2026-a-villandry-spectacles-et-ateliers-a-choisir-selon-l-age/ | Noël 2026 à Villandry: décors, spectacle d'ombres et ateliers en famille | evenements | Villandry, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | Noël au château de Cheverny 2026: billets, mapping et animations en famille | evenements | Cheverny, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | Noël au château d'Amboise 2026: visite, nocturnes et tarifs en famille | evenements | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/parentalite/aide-a-domicile-en-indre-et-loire-quel-soutien-pour-les-parents/ | Aide à domicile en Indre-et-Loire: quel soutien pour les parents ? | parentalite | Indre-et-Loire, Centre-Val de Loire
- /articles/cuisine/halles-de-tours-en-famille-un-panier-d-automne-deux-repas-simples/ | Halles de Tours en famille: un panier d’automne, deux repas simples | cuisine | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/activites/aquarium-de-touraine-en-famille-que-voir-avec-les-enfants/ | Aquarium de Touraine en famille: que voir avec les enfants ? | activites | Lussault-sur-Loire, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | Marchés de Noël de Tours 2026 en famille: lieux, dates et budget | evenements | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/vie-pratique/emprunter-des-jeux-a-tours-mirabeau-ou-la-maison-des-jeux/ | Emprunter des jeux à Tours: Mirabeau ou la Maison des Jeux? | vie-pratique | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/village-du-pere-noel-a-montbazon-2026-dates-activites-et-budget-en-famille/ | Village du Père Noël à Montbazon 2026: dates, activités et budget en famille | evenements | Montbazon, Indre-et-Loire, Centre-Val de Loire
- /articles/voyages/azay-le-rideau-en-famille-une-journee-entre-chateau-et-troglodytes/ | Azay-le-Rideau en famille: une journée entre château et troglodytes | voyages | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/sorties/villandry-en-famille-jardins-seuls-ou-chateau-et-jardins/ | Villandry en famille: jardins seuls ou château et jardins ? | sorties | Villandry, Indre-et-Loire, Centre-Val de Loire
- /articles/parentalite/laep-en-indre-et-loire-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP en Indre-et-Loire: où aller avec un enfant de moins de 6 ans | parentalite | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/carnaval-de-guyane-2027-en-famille-preparer-ses-premieres-sorties/ | Carnaval de Guyane 2027 en famille: préparer ses premières sorties | evenements | Guyane
- /articles/evenements/mondo-clowns-2027-a-marmande-dates-tarifs-et-conseils-en-famille/ | Mondo'Clowns 2027 à Marmande: dates, tarifs et conseils en famille | evenements | Marmande, Lot-et-Garonne, Nouvelle-Aquitaine

### Historique Radar lié

- opportunity | /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | 2026-10-28T21:29:26.054Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | 2026-10-11T16:33:21.125Z
- opportunity | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-10-24T12:31:27.784Z
- refresh | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-11-13T22:32:33.388Z
- opportunity | /articles/evenements/noel-2026-a-villandry-spectacles-et-ateliers-a-choisir-selon-l-age/ | 2026-10-27T10:35:41.254Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | 2026-10-23T19:58:30.214Z
- refresh | /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | 2026-11-13T19:31:25.370Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | 2026-10-24T06:28:53.730Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
