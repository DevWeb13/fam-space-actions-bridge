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

Soumets le résultat via `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées, puis le corps complet. **Ne recopie pas les métadonnées inchangées, aucun bloc `radar`, aucune branche et aucun SHA.** La plomberie mécanique conserve le reste, normalise la syntaxe de la requête et préserve le diagnostic GSC, la cible, le slug et les champs protégés.

## Candidat validé de la phase précédente

---
title: "MonstroZoo 2026-2027 à Beauval: parcours inclus, visite guidée et tarifs"
subtitle: Du 17 octobre 2026 au 8 mars 2027, les informations utiles pour une visite avec les enfants
summary: À Beauval, MonstroZoo propose une enquête libre comprise dans l'entrée du zoo et une visite guidée de 1 h 30 en supplément, dès 6 ans. Dates, tarifs et réservation.
category: evenements
location:
  city: Saint-Aignan
  department: Loir-et-Cher
  region: Centre-Val de Loire
image:
  src: /images/articles/2026/10/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille.webp
  alt: Hippotragues noirs au ZooParc de Beauval en août 2026, sans représenter les installations de MonstroZoo.
sources:
  - title: ZooParc de Beauval - Découvrez MonstroZoo 2026-2027
    url: https://www.zoobeauval.com/spectacles-et-activites/decouvrir-monstrozoo
  - title: ZooParc de Beauval - Visite guidée MonstroZoo et conditions de réservation
    url: https://reservations.zoobeauval.com/visite-guidee-monstrozoo
  - title: ZooParc de Beauval - Prix des activités et visites guidées
    url: https://www.zoobeauval.com/billetterie/activites
  - title: ZooParc de Beauval - Horaires du jour
    url: https://www.zoobeauval.com/preparez-votre-visite/horaires
  - title: ZooParc de Beauval - MonstroZoo à la Toussaint et Halloween 2026
    url: https://actus.zoobeauval.com/toussaint-monstrozoo-beauval-2026/
eventEndsAt: 2027-03-08
reviewAt: 2026-11-01
topic:
  key: evenements|saint-aignan|monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille|2026
  keywords:
    - MonstroZoo Beauval 2026 2027
    - MonstroZoo visite guidée enfants
    - MonstroZoo carnet enquête gratuit
    - MonstroZoo tarifs durée réservation
slug: monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille
status: published
publishedAt: 2026-10-22T15:49:20.710Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Saint-Aignan
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/index.md
  targetSha: 145006db36962cde481bf4735f5346bb471dabcd
  targetUrl: /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/
  decision: Choisir entre enquête libre et visite guidée, puis préparer correctement son arrivée à Beauval en hiver, notamment l'entrée accessible et les séances des vacances de Noël.
  affiliationPotential: Conserver le billet Tiqets pour l'accès au zoo et l'hébergement Booking.com Les Pagodes de Beauval; ne pas présenter la visite guidée comme incluse.
  gsc:
    retrievedAt: 2026-11-15T10:29:35+01:00
    dataThrough: 2026-11-13
    signal: uncertain
    basis: "Visibilité récente : 60 impressions sur trois jours, puis 9 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-28
    peakEnd: 2026-10-30
    recentStart: 2026-11-11
    recentEnd: 2026-11-13
    peakImpressions: 60
    recentImpressions: 9
    commonQueries: 0
    positionDelta: null
    impressionRatio: 4
    focusQueries:
      - monstrozoo
      - monstrozoo 2026
---

## Mission retenue
Actualiser le guide MonstroZoo 2026-2027 du ZooParc de Beauval pour les visites d'hiver et de Noël.

## Pourquoi cette mission
Le snapshot montre une forte diminution récente des impressions (60 puis 9 sur les fenêtres comparées), sans établir une perte de classement. Une amélioration indépendante et vérifiée existe: l'accès au parc change dès le 16 novembre et les séances spéciales de Noël sont désormais détaillées officiellement. L'article actuel ne les indique pas.

## Décision du lecteur
Savoir quelle formule convient à l'âge et au budget des enfants, comment rejoindre le parc sans se tromper d'entrée et quand réserver une visite guidée pendant les fêtes.

## Faits à traiter
- Du 16 novembre 2026 au 5 février 2027 inclus, entrée Sud fermée sauf exceptions: accès par l'entrée Nord près du Dôme Équatorial. Prévenir les familles hébergées aux hôtels du parc, pour lesquelles Beauval recommande la voiture.
- Noël: séances guidées annoncées de 17h30 à 19h les 19-23 et 26-30 décembre 2026, puis le 2 janvier 2027. Vérifier les disponibilités sur la billetterie et distinguer les nocturnes et le dîner du Dôme de la visite guidée.
- Conserver les distinctions essentielles: carnet et enquête libres inclus dans le billet du zoo, visite guidée payante sur réservation, 1h30, déconseillée aux moins de 6 ans, adulte obligatoire avec mineur, 12 € pour 6-10 ans et 14 € dès 11 ans, billet d'entrée distinct.
- Réduire ou replacer les informations ponctuelles sur Halloween et la Toussaint 2026 désormais passées, sans supprimer les informations toujours utiles. Préserver photos, crédits, licences, liens internes et partenaires.

## Sources de départ
- https://www.zoobeauval.com/preparez-votre-visite/horaires
- https://www.zoobeauval.com/noel-a-beauval
- https://reservations.zoobeauval.com/visite-guidee-monstrozoo
- https://www.zoobeauval.com/spectacles-et-activites/decouvrir-monstrozoo

## Affiliation
Conserver l'offre Tiqets existante pour le billet du ZooParc et l'hôtel Les Pagodes de Beauval sur Booking.com; vérifier les conditions au moment de la rédaction.

## Continuations internes
- Renvoyer au guide Beauval général pour le choix entre un et deux jours, les tarifs globaux et les repas.
- Conserver le renvoi vers l'article Toussaint 2026 seulement s'il apporte encore un contexte utile, sans le présenter comme une actualité à venir.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/index.md

---
title: "MonstroZoo 2026-2027 à Beauval: parcours inclus, visite guidée et tarifs"
subtitle: Du 17 octobre 2026 au 8 mars 2027, les informations utiles pour une visite avec les enfants
summary: À Beauval, MonstroZoo propose une enquête libre comprise dans l'entrée du zoo et une visite guidée de 1 h 30 en supplément, dès 6 ans. Dates, tarifs et réservation.
category: evenements
location:
  city: Saint-Aignan
  department: Loir-et-Cher
  region: Centre-Val de Loire
image:
  src: "/images/articles/2026/10/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille.webp"
  alt: "Hippotragues noirs au ZooParc de Beauval en août 2026, sans représenter les installations de MonstroZoo."
sources:
  - title: ZooParc de Beauval - Découvrez MonstroZoo 2026-2027
    url: https://www.zoobeauval.com/spectacles-et-activites/decouvrir-monstrozoo
  - title: ZooParc de Beauval - Visite guidée MonstroZoo et conditions de réservation
    url: https://reservations.zoobeauval.com/visite-guidee-monstrozoo
  - title: ZooParc de Beauval - Prix des activités et visites guidées
    url: https://www.zoobeauval.com/billetterie/activites
  - title: ZooParc de Beauval - Horaires du jour
    url: https://www.zoobeauval.com/preparez-votre-visite/horaires
  - title: ZooParc de Beauval - MonstroZoo à la Toussaint et Halloween 2026
    url: https://actus.zoobeauval.com/toussaint-monstrozoo-beauval-2026/
eventEndsAt: 2027-03-08
reviewAt: 2026-11-01
topic:
  key: evenements|saint-aignan|monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille|2026
  keywords:
    - MonstroZoo Beauval 2026 2027
    - MonstroZoo visite guidée enfants
    - MonstroZoo carnet enquête gratuit
    - MonstroZoo tarifs durée réservation
slug: monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille
status: published
publishedAt: 2026-10-22T15:49:20.710Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Saint-Aignan
---

Du **17 octobre 2026 au 8 mars 2027**, six créatures fantastiques, **Bloop, Pyrak, Vrix, Grundo, Böm et Octavia**, s'installent dans différents territoires du **ZooParc de Beauval**, à Saint-Aignan. Des sculptures géantes, des indices et des jeux interactifs accompagnent la découverte des animaux.

Deux activités coexistent: **une enquête libre comprise dans le billet d'entrée au zoo**, et **une visite guidée de 1 h 30 payante, présentée dès 6 ans**. Il faut donc distinguer le prix d'accès au parc du supplément demandé pour la mission accompagnée.

## Le parcours libre et son carnet d'enquête

<!-- article-image-body:01 -->

![Lion d'Afrique photographié au ZooParc de Beauval en 2019, secteur animalier sans installation MonstroZoo.](/images/articles/2026/10/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille-body-01.webp)

*Photo: [Gzen92](https://commons.wikimedia.org/wiki/File:Lion_d%27Afrique_(Panthera_leo).jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le **carnet d'enquête MonstroZoo est gratuit**. Les familles peuvent y suivre les indices pour retrouver les six monstres et leurs proches à travers plusieurs secteurs, notamment vers le **Dôme Équatorial**, la **Terre des Lions** et l'espace des **singes dorés**.

Cette activité est **incluse dans l'entrée ordinaire du ZooParc**: aucune réservation de visite guidée ni supplément MonstroZoo n'est nécessaire pour parcourir l'enquête à son rythme. **L'entrée au zoo reste payante** suivant les conditions habituelles. Le parc ne publie pas d'âge minimum spécifique pour cette formule libre.

Pour accéder au zoo, [Tiqets propose un billet d'entrée au ZooParc de Beauval](https://www.tiqets.com/fr/activites-attractions-saint-aignan-c178194/billets-pour-zooparc-de-beauval-billet-d-entree-p974727/). Il donne accès au parc et donc au parcours libre, **mais ne comprend pas la visite guidée payante**. Avant l'achat, comparez le tarif final et l'âge des participants: cette fiche Tiqets annonce un billet ni remboursable ni reprogrammable.

## La visite guidée « Sur la piste des monstres »

Un instructeur accompagne les enquêteurs pendant **1 h 30**, en groupe de **15 participants au maximum**. L'activité est présentée **dès 6 ans**. La billetterie précise qu'elle est **déconseillée aux moins de 6 ans**, ce qui n'est pas formulé comme une interdiction générale. **Les mineurs doivent être accompagnés d'un adulte.**

Les tarifs affichés pour cette activité sont:

- **12 € pour un enfant de 6 à 10 ans**;
- **14 € dès 11 ans, adultes compris**.

Pour **un adulte et un enfant de 6 à 10 ans**, comptez ainsi **26 € de supplément**. Pour **deux adultes et deux enfants de 6 à 10 ans**, le supplément atteint **52 €**. Dans les deux cas, il faut ajouter les **billets d'accès au zoo**, sauf si un ZooPass valide couvre déjà l'entrée au parc; le pass ne couvre pas automatiquement l'activité guidée.

**La visite guidée exige une réservation**, possible aussi le jour même **uniquement s'il reste des places**. L'activité est annoncée **non remboursable**. Le rendez-vous indiqué est à **17 h 30 au Campement d'Alva**, au **kiosque Grand Koudou**, près du Dôme Équatorial. Les séances sont annoncées **tous les jours pendant les vacances scolaires et les samedis hors vacances**: seule la billetterie du créneau choisi permet de confirmer les places restantes.

## Lumières, effets sonores et animations d'Halloween

MonstroZoo mêle **grandes sculptures, sons, éclairages et projections**. Les monstres sont décrits par Beauval comme attachants, mais un enfant impressionné par des décors imposants ou des bruits soudains peut être plus à l'aise avec le parcours libre, sans suivre un groupe.

Les illuminations et projections sont particulièrement visibles **à la tombée du jour**. Ce n'est **pas une nocturne indépendante**: la découverte reste soumise aux **horaires du ZooParc**, qui varient selon la date, tout comme les heures d'accès à certains territoires. Il est donc important de consulter les horaires de la journée, notamment pour une activité guidée qui débute à 17 h 30.

Pendant les **vacances de la Toussaint 2026**, Beauval annonce des rencontres quotidiennes avec **Böm et Bloop**, ainsi qu'avec les mascottes panda et singe doré. Après ces vacances, les rencontres sont annoncées les **mercredis et week-ends hors vacances**, et non chaque jour jusqu'en mars.

Le **31 octobre 2026 uniquement**, les **enfants déguisés** pourront demander un sachet de bonbons HARIBO dans les boutiques participantes, **pendant leurs horaires d'ouverture**. Cette proposition ponctuelle ne s'applique pas à l'ensemble de la saison MonstroZoo.

## Billets du parc et séjour à Saint-Aignan

Pour choisir **une ou deux journées au ZooParc**, retrouver les tarifs d'entrée et organiser les repas ou les déplacements avec des enfants, consultez notre guide [ZooParc de Beauval en famille: billets, hôtel et budget](/articles/voyages/zooparc-de-beauval-en-famille-en-2026-un-ou-deux-jours-quel-hotel-et-quel-budget-prevoir/). Pour les dates propres aux vacances d'octobre, notre article [Beauval à la Toussaint 2026](/articles/voyages/beauval-a-la-toussaint-2026-billets-duree-de-visite-et-hebergement/) complète ces informations, sans confondre les billets du parc avec l'option MonstroZoo guidée.

Si la sortie se prolonge en week-end, [Les Pagodes de Beauval à Saint-Aignan sur Booking.com](https://www.booking.com/hotel/fr/les-pagodes-de-beauval-st-aignan.fr.html) proposent des **chambres familiales** à proximité du zoo. Vérifiez la configuration des couchages, le prix total, les dates disponibles et les conditions d'annulation avant de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/voyages/beauval-a-la-toussaint-2026-billets-duree-de-visite-et-hebergement/ | Beauval à la Toussaint 2026: billets, durée de visite et hébergement | voyages | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/zooparc-de-beauval-en-famille-en-2026-un-ou-deux-jours-quel-hotel-et-quel-budget-prevoir/ | ZooParc de Beauval: billets, 1 ou 2 jours, hôtel et budget 2026 | voyages | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/sorties/festival-photo-la-gacilly-2026-en-famille/ | Festival Photo La Gacilly 2026: un parcours gratuit à hauteur d’enfant | sorties | La Gacilly, Morbihan, Bretagne
- /articles/activites/atelier-omamori-gratuit-a-paris-le-21-novembre-2026-creer-une-amulette-japonaise-des-7-ans/ | Atelier omamori gratuit à Paris le 21 novembre 2026: créer une amulette dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils/ | Visiter le château de La Rochefoucauld en famille: parcours, tarifs et conseils | activites | La Rochefoucauld-en-Angoumois, Charente, Nouvelle-Aquitaine
- /articles/evenements/spectacle-de-noel-gratuit-a-paris-le-5-decembre-2026-p-tit-loup-et-la-magie-en-famille/ | Spectacle de Noël gratuit à Paris le 5 décembre 2026: Mon p'tit loup magique | evenements | Paris, Paris, Île-de-France
- /articles/parentalite/chateau-de-chamerolles-en-famille-visite-libre-ou-guidee-en-2026/ | Château de Chamerolles en famille: visite libre ou guidée en 2026 ? | parentalite | Chilleurs-aux-Bois, Loiret, Centre-Val de Loire
- /articles/activites/musee-de-la-biere-a-stenay-en-famille-parcours-enfants-et-exposition-2026/ | Musée de la Bière à Stenay en famille: parcours enfants et exposition 2026 | activites | Stenay, Meuse, Grand Est
- /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | MonstroZoo 2026-2027 à Beauval: parcours inclus, visite guidée et tarifs | evenements | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/parentalite/laep-dans-le-loir-et-cher-ou-rencontrer-d-autres-parents-avec-son-tout-petit/ | LAEP dans le Loir-et-Cher: où rencontrer d'autres parents avec son tout-petit ? | parentalite | Loir-et-Cher, Centre-Val de Loire
- /articles/cuisine/ateliers-de-cuisine-en-famille-dans-le-loir-et-cher-chocolat-patisserie-ou-legumes/ | Ateliers de cuisine en famille dans le Loir-et-Cher: chocolat, pâtisserie ou légumes ? | cuisine | Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/ | Noël 2026 au château royal de Blois: décors, spectacles et tarifs en famille | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | Noël au château de Cheverny 2026: billets, mapping et animations en famille | evenements | Cheverny, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | bd BOUM 2026 à Blois en famille: ateliers, expositions et cinéma | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/center-parcs-les-hauts-de-bruyeres-en-famille-quel-cottage-choisir-apres-la-renovation/ | Center Parcs Les Hauts de Bruyères en famille: quel cottage choisir après la rénovation? | voyages | Chaumont-sur-Tharonne, Loir-et-Cher, Centre-Val de Loire
- /articles/vie-pratique/transport-scolaire-remi-41-que-faire-apres-la-rentree/ | Transport scolaire Rémi 41: que faire après la rentrée ? | vie-pratique | Romorantin-Lanthenay, Loir-et-Cher, Centre-Val de Loire
- /articles/activites/balade-en-bateau-a-saint-dye-sur-loire-journee-pique-nique-ou-crepuscule/ | Balade en bateau à Saint-Dyé-sur-Loire: journée, pique-nique ou crépuscule ? | activites | Saint-Dyé-sur-Loire, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/noel-a-chambord-2026-avec-des-enfants-quand-venir-et-que-prevoir/ | Noël à Chambord 2026 avec des enfants: quand venir et que prévoir | evenements | Chambord, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/noel-2026-au-puy-du-fou-en-famille-spectacles-et-visite-en-hiver/ | Noël 2026 au Puy du Fou en famille: spectacles et visite en hiver | evenements | Les Epesses, Vendée, Pays de la Loire
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/carnaval-de-guyane-2027-en-famille-preparer-ses-premieres-sorties/ | Carnaval de Guyane 2027 en famille: préparer ses premières sorties | evenements | Guyane

### Historique Radar lié

- opportunity | /articles/activites/atelier-omamori-gratuit-a-paris-le-21-novembre-2026-creer-une-amulette-japonaise-des-7-ans/ | 2026-11-05T07:29:24.731Z
- opportunity | /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | 2026-10-18T19:49:09.191Z
- opportunity | /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | 2026-10-22T15:49:20.816Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | 2026-10-23T19:58:30.214Z
- refresh | /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | 2026-11-13T19:31:25.370Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/ | 2026-10-27T22:28:21.356Z
- opportunity | /articles/evenements/spectacle-de-noel-gratuit-a-paris-le-5-decembre-2026-p-tit-loup-et-la-magie-en-famille/ | 2026-11-06T06:35:41.183Z
- refresh | /articles/activites/visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils/ | 2026-11-08T22:29:18.327Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
