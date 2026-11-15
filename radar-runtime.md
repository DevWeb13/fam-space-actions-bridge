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
  - title: ZooParc de Beauval - Horaires et accès hivernal
    url: https://www.zoobeauval.com/preparez-votre-visite/horaires
  - title: ZooParc de Beauval - Noël 2026 et séances MonstroZoo
    url: https://www.zoobeauval.com/noel-a-beauval
eventEndsAt: 2027-03-08
reviewAt: 2026-12-18
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
  phase: 2
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

Du **17 octobre 2026 au 8 mars 2027**, six créatures fantastiques, **Bloop, Pyrak, Vrix, Grundo, Böm et Octavia**, s'installent dans différents territoires du **ZooParc de Beauval**, à Saint-Aignan. Sculptures géantes, indices, effets sonores et jeux interactifs accompagnent la découverte des animaux.

Deux façons d'en profiter: **une enquête libre comprise dans le billet d'entrée au zoo** et **une visite guidée de 1 h 30 payante, conseillée à partir de 6 ans**. Pour une visite cet hiver, il faut également anticiper le changement d'entrée du parc.

## Le parcours libre et son carnet d'enquête

<!-- article-image-body:01 -->

![Lion d'Afrique photographié au ZooParc de Beauval en 2019, secteur animalier sans installation MonstroZoo.](/images/articles/2026/10/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille-body-01.webp)

*Photo: [Gzen92](https://commons.wikimedia.org/wiki/File:Lion_d%27Afrique_(Panthera_leo).jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le **carnet d'enquête MonstroZoo est gratuit**. Les familles peuvent suivre les indices pour retrouver les six monstres et leurs proches dans plusieurs secteurs, notamment vers le **Dôme Équatorial**, la **Terre des Lions** et l'espace des **singes dorés**.

Le parcours est **inclus dans l'entrée ordinaire du ZooParc**: aucune réservation de visite guidée ni supplément MonstroZoo n'est nécessaire pour avancer à son rythme. **L'entrée au zoo reste payante** selon les conditions habituelles. Aucun âge minimum spécifique n'est annoncé pour l'enquête libre.

Pour préparer l'accès, [Tiqets propose un billet d'entrée au ZooParc de Beauval](https://www.tiqets.com/fr/activites-attractions-saint-aignan-c178194/billets-pour-zooparc-de-beauval-billet-d-entree-p974727/). Ce billet permet de parcourir l'enquête libre, **mais ne comprend pas la visite guidée**. Vérifiez le tarif final, les âges et les conditions avant de payer: la fiche annonce un billet non remboursable et non reprogrammable.

## La visite guidée « Sur la piste des monstres »

Un instructeur accompagne les enquêteurs pendant **1 h 30**, en groupe de **15 participants maximum**. L'activité est proposée dès **6 ans**; la [billetterie officielle](https://reservations.zoobeauval.com/visite-guidee-monstrozoo) la déconseille aux moins de 6 ans, sans formuler une interdiction générale. **Tout mineur doit être accompagné d'un adulte.** La visite se déroule en français.

Le supplément affiché est de **12 € pour les enfants de 6 à 10 ans** et de **14 € dès 11 ans, adultes compris**. Cela représente **26 € pour un adulte et un enfant de 6 à 10 ans**, ou **52 € pour deux adultes et deux enfants de cet âge**. Il faut ajouter les billets d'entrée au zoo, sauf si un ZooPass valide couvre déjà l'accès; celui-ci n'inclut pas automatiquement la visite guidée.

**La réservation est obligatoire**, y compris le jour même, sous réserve de places restantes. L'activité est annoncée **non remboursable**. Le rendez-vous est fixé à **17 h 30 au Campement d'Alva, kiosque Grand Koudou, près du Dôme Équatorial**. Beauval annonce habituellement des séances tous les jours pendant les vacances scolaires et les samedis hors vacances: choisissez une date sur la billetterie pour connaître les créneaux réellement proposés.

## Noël 2026: quelles séances réserver?

Pour les fêtes, [Beauval annonce des visites guidées MonstroZoo](https://www.zoobeauval.com/noel-a-beauval) **de 17 h 30 à 19 h**, du **19 au 23 décembre 2026**, du **26 au 30 décembre 2026** et le **2 janvier 2027**. Ces dates constituent le programme annoncé, pas une garantie de places: réservez le créneau souhaité.

Les illuminations de Noël sont annoncées **du 14 novembre 2026 au 4 janvier 2027**, de **16 h à 19 h 30**, avec une prolongation lors des Nocturnes de Beauval. **Les illuminations incluses dans l'entrée, la visite guidée payante et le dîner-buffet au restaurant Yasuni sont des propositions distinctes.** Les Nocturnes et le dîner ont leurs propres conditions de réservation et horaires.

MonstroZoo comporte des **sculptures imposantes, sons, éclairages et projections**. Pour un enfant sensible aux bruits soudains ou aux décors impressionnants, l'enquête libre permet de s'éloigner ou de faire une pause sans suivre un groupe. Consultez les [horaires du jour](https://www.zoobeauval.com/preparez-votre-visite/horaires): l'accès aux territoires et les animations peuvent varier avec la saison et la météo.

## Attention à l'entrée du zoo en hiver

**Du 16 novembre 2026 au 5 février 2027 inclus**, Beauval annonce la **fermeture de l'entrée Sud, sauf exceptions**. Les visiteurs doivent passer par **l'entrée Nord, près du Dôme Équatorial**. Le parc recommande fortement la voiture aux familles qui séjournent dans ses hôtels pendant cette période. Vérifiez les consignes d'accès avant de partir, notamment si vous avez prévu un itinéraire vers l'entrée Sud.

Les parkings du ZooParc sont gratuits. Pour les familles avec de jeunes enfants, les services habituels comprennent des espaces de change, des micro-ondes dans les lieux de restauration et la location de poussettes. Ces détails peuvent aider à organiser une journée d'hiver sans multiplier les allers-retours.

## Billets du parc et séjour à Saint-Aignan

Pour choisir **une ou deux journées au ZooParc**, estimer le budget des billets et organiser les repas ou les déplacements avec des enfants, consultez notre guide [ZooParc de Beauval en famille: billets, hôtel et budget](/articles/voyages/zooparc-de-beauval-en-famille-en-2026-un-ou-deux-jours-quel-hotel-et-quel-budget-prevoir/).

Si la visite se prolonge en week-end, [Les Pagodes de Beauval à Saint-Aignan sur Booking.com](https://www.booking.com/hotel/fr/les-pagodes-de-beauval-st-aignan.fr.html) proposent des **chambres familiales** près du zoo. Vérifiez les couchages, le prix total, les disponibilités et l'annulation avant de réserver, ainsi que le trajet vers **l'entrée Nord** pendant la fermeture hivernale de l'entrée Sud.

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
