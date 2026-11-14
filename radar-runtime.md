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
title: "Noël au château d'Amboise 2026: visite, nocturnes et tarifs en famille"
subtitle: Parcours décoré en journée, ouverture tardive du 11 décembre et soirées aux chandelles les 26 et 29 décembre.
summary: Du 28 novembre 2026 au 3 janvier 2027, découvrez les décors de Noël du château royal d'Amboise. Prix des billets, horaires, visites guidées, soirées spéciales et accès avec des enfants.
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
radar:
  schemaVersion: 1
  phase: 1
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

## Mission retenue
Actualiser le guide Noël 2026 du château royal d'Amboise, consacré aujourd'hui surtout aux décors, à la visite guidée et aux nocturnes.

## Pourquoi cette mission
Le snapshot GSC signale 54 puis 3 impressions sur deux périodes de trois jours, sans cause SEO établie. Lacune éditoriale indépendante et vérifiée: quatre animations familiales de décembre publiées par le château manquent au guide, alors que certaines nécessitent réservation et supplément.

## Décision du lecteur
Permettre de choisir entre visite simple, conte selon l'âge, spectacle et soirée aux chandelles, sans confondre billet ordinaire, supplément et réservation.

## Faits à traiter
- Conte « Le Noël mystère du Roi »: 7-10 ans, 22, 24, 27 et 28 décembre à 16 h, 30 min, inclus mais sur réservation; conseiller la visite du château avant le conte.
- « L'heure du conte »: 7-10 ans, 23 décembre de 14 h à 14 h 40, supplément de 4 € par adulte et enfant en plus de l'entrée, réservation; escaliers.
- « Les aventures du pirate Barbe-en-Vrac »: 3-12 ans, 30 décembre à 14 h, une heure, supplément de 5 € par personne; pour les moins de 7 ans, seul le supplément est dû; réservation.
- Vérifier également la balade spéciale Sainte-Lucie du 12 décembre, si pertinente pour la décision familiale, sans la confondre avec les nocturnes des 26 et 29 décembre.
- Préserver dates du parcours, fermetures, horaires et tarifs d'entrée, 11 décembre sans chandelles, nocturnes et leurs créneaux, visite guidée, accessibilité, poussettes, repas, photos, licences, crédits, sources et affiliation existante. Ne pas affirmer l'ouverture des réservations tant qu'elle n'est pas vérifiée.

## Sources de départ
- https://www.chateau-amboise.com/conte-le-noel-mystere-du-roi/
- https://www.chateau-amboise.com/lheure-du-conte/
- https://www.chateau-amboise.com/spectacle-pour-enfants-les-aventures-du-pirate-barbe-en-vrac/
- https://www.chateau-amboise.com/actualite-au-chateau-royal-damboise/

## Affiliation
Conserver les offres Tiqets et Booking.com déjà intégrées sans présenter les billets partenaires comme des réservations pour les animations spécifiques.

## Continuations internes
Conserver le renvoi existant vers le guide d'hébergement familial à Amboise et vers Cheverny, sans redévelopper ces sujets.

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
- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
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

- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- opportunity | /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | 2026-10-28T21:29:26.054Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | 2026-10-11T16:33:21.125Z
- opportunity | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-10-24T12:31:27.784Z
- refresh | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-11-13T22:32:33.388Z
- opportunity | /articles/evenements/noel-2026-a-villandry-spectacles-et-ateliers-a-choisir-selon-l-age/ | 2026-10-27T10:35:41.254Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | 2026-10-24T06:28:53.730Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
