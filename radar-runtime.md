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
title: "Parc Spirou avec de jeunes enfants: tailles des attractions et billets 2027"
subtitle: Le parc est fermé pour l'hiver; comparez les accès accompagnés et les offres 2027 avant d'acheter
summary: "Parc Spirou à Monteux: fermeture hivernale, billets 2027, pass saison, tailles minimales avec adulte, poussette, pique-nique et accès en famille."
slug: parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets
status: published
publishedAt: 2026-09-03T04:04:27+02:00
updatedAt: 2026-10-07T15:14:00+02:00
category: sorties
readingTime: 4
location:
  city: Monteux
  department: Vaucluse
  region: Provence-Alpes-Côte d’Azur
topic:
  key: sorties|monteux|parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets|2026
  keywords:
    - Parc Spirou enfants taille attractions
    - Parc Spirou billets famille
affiliate:
  enabled: true
  type: travel
  destination: Monteux
sources:
  - title: Attractions et conditions de taille - Parc Spirou
    url: https://www.parc-spirou.com/les-attractions/
  - title: Tarifs et fermeture - Parc Spirou
    url: https://www.parc-spirou.com/
  - title: Foire aux questions - Parc Spirou
    url: https://www.parc-spirou.com/faq/
  - title: Billetterie officielle - Parc Spirou
    url: https://ticket.parc-spirou.com/b2c
  - title: Billetterie et paiements - Parc Spirou
    url: https://application.parc-spirou.com/aide/billetterie-et-paiements
image:
  src: /images/articles/2026/09/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets.webp
  alt: Entrée du Parc Spirou à Monteux
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/sorties/(2026)/(09)/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets/index.md
  targetSha: ce571a762a8cce7467642b16a377d0b9f25e2704
  targetUrl: /articles/sorties/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets/
  decision: Savoir que le Parc Spirou est fermé depuis le 11 novembre 2026, puis préparer une visite en 2027 en comparant les nouveaux billets, les tailles et les attractions réellement accessibles aux jeunes enfants.
  affiliationPotential: Conserver le lien Tiqets existant en précisant de vérifier sa validité pour 2027; conserver la piste d'hébergement seulement si elle est pertinente pour un séjour à Monteux ou Avignon.
  gsc:
    retrievedAt: 2026-11-18T00:34:26+01:00
    dataThrough: 2026-11-15
    signal: needs_query_check
    basis: Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.
    peakStart: 2026-10-22
    peakEnd: 2026-10-28
    recentStart: 2026-11-09
    recentEnd: 2026-11-15
    peakImpressions: 141
    recentImpressions: 17
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Parc Spirou enfants taille attractions
      - Parc Spirou billets famille
reviewAt: 2027-02-15
---

<!-- article-image-credit -->
*Photo: [Marianne Casamance](https://commons.wikimedia.org/wiki/File:Parc_spirou.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Le Parc Spirou, à Monteux dans le Vaucluse, est **fermé depuis le 11 novembre 2026** et annonce son retour en 2027, sans date précise de réouverture publiée à ce stade. Pour préparer une sortie avec de jeunes enfants, mieux vaut commencer par leur taille: certaines attractions acceptent un enfant accompagné bien avant qu'il puisse monter seul. Les nouveaux billets 2027 sont déjà annoncés, mais leur intérêt dépend du nombre d'attractions accessibles à chaque membre de la famille.

## Quelles attractions selon la taille des enfants?

L'entrée reste annoncée gratuite pour les enfants de moins de **1 mètre**. Gratuité ne signifie pas accès à toutes les attractions: chaque équipement a ses propres seuils, parfois différents selon que l'enfant est accompagné ou non.

Voici des exemples indiqués sur la [liste officielle des attractions](https://www.parc-spirou.com/les-attractions/):

- **Palombie Secrète**: dès 85 cm accompagné; seul à partir de 1,10 m.
- **Boule et Bill Déboulent**: dès 90 cm accompagné; seul à partir de 1,20 m.
- **Rasengan Chakra Rotation**: dès 1 m accompagné; seul à partir de 1,20 m.
- **Kyûbi Unchained**: dès 1,05 m accompagné; seul à partir de 1,30 m.
- **Crash Blork et Zombillénium Tower**: 1,40 m en solo, sans seuil accompagné plus bas indiqué.

Ces exemples montrent pourquoi deux enfants du même âge ne profiteront pas forcément des mêmes manèges. Mesurez chacun avant l'achat, consultez les fiches des attractions qui les intéressent et revérifiez les restrictions lors de la réouverture: les conditions de sécurité peuvent évoluer. L'application officielle permet aussi de filtrer les attractions par taille.

## Billets 2027 ou pass saison: que choisir?

Sur son [site officiel](https://www.parc-spirou.com/), le parc affiche actuellement des **billets non datés 2027** à **35 € pour un enfant de 1 m à 10 ans inclus** et **40 € à partir de 11 ans**. Pour deux adultes et deux enfants payants de moins de 11 ans, cela représente **150 €** pour une visite, hors transport, parking et repas. Les anciens tarifs 2026 ne doivent plus servir à calculer le budget 2027.

Le **pass saison 2027** est affiché en **offre de Noël à 90 € au lieu de 99 €**, tarif unique. À prix inchangés, il devient plus avantageux qu'une succession de billets individuels dès trois visites pour une même personne payante. La date de fin de la promotion, les éventuelles exclusions et les modalités détaillées de validité 2027 ne sont pas suffisamment précisées dans les informations consultées: vérifiez-les avant de payer.

Le parc encourage la réservation en ligne pour les billets datés, mais sa [FAQ](https://www.parc-spirou.com/faq/) précise que les détenteurs de billets non datés n'ont normalement pas besoin de réserver. Les règles propres à la saison 2027 restent à confirmer. Sur place, le billet peut être présenté sur smartphone, pas simplement le courriel de confirmation.

Les tarifs réduits pour certains publics (notamment étudiants, seniors et personnes en situation de handicap) sont proposés en caisse sous conditions et justificatifs. Les **chèques vacances ANCV papier** sont acceptés directement au parc, notamment en caisse. Vérifiez les conditions 2027 avant le départ.

Vous pouvez également [consulter les offres Parc Spirou sur Tiqets](https://www.tiqets.com/fr/billets-parc-spirou-provence-l149738/), en contrôlant expressément la saison et les dates réellement couvertes: la présence d'une page de billetterie ne garantit pas la disponibilité de billets valables en 2027.

## Poussette, pique-nique et services pour les petits

Les **poussettes classiques** sont autorisées dans le parc, mais doivent rester hors des attractions. Les chariots et wagons destinés au transport d'enfants sont interdits selon la FAQ du parc. Pour les enfants qui se fatiguent vite, une poussette classique peut donc être utile.

Les pique-niques et boissons sont autorisés; des aires ombragées permettent de déjeuner sans dépendre de la restauration. L'application officielle donne accès au plan interactif, aux temps d'attente et à la commande de repas. Le plan signale également les espaces de change bébé et les toilettes accessibles.

## Comment rejoindre le Parc Spirou à Monteux?

<!-- article-image-body:01 -->

![Panneau de la rue Jean-Henri-Fabre à proximité du Parc Spirou à Monteux](/images/articles/2026/09/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets-body-01.webp)

<!-- /article-image-body:01 -->

Le parc est situé au **1 rue Jean-Henri Fabre, 84170 Monteux**, le long de la D942 entre Avignon et Carpentras. Le parking voisin est **payant** et géré par la collectivité; le parc indique qu'il ne comporte pas de borne de recharge électrique.

En transports en commun, la ligne régionale ZOU! 905 entre Avignon et Carpentras dessert l'arrêt Soleil. La gare TER de Monteux est desservie depuis Avignon et Carpentras, avec des correspondances locales possibles vers la zone du parc. Vérifiez les horaires de transport à la date de votre visite.

Si vous prolongez la sortie sur deux jours, vous pouvez [chercher un hébergement à Avignon sur Booking.com](https://www.booking.com/city/fr/avignon.fr.html), puis préparer une autre visite grâce à notre [guide d'Avignon](/destinations/provence-alpes-cote-d-azur/vaucluse/avignon/). Pour les familles concernées, notre article sur la [gratuité du Palais des Papes et du Pont d'Avignon le week-end](/articles/bons-plans/avignonnais-palais-des-papes-et-pont-gratuits-le-week-end/) apporte un complément utile.

Avant toute réservation, consultez le calendrier d'ouverture 2027 dès sa publication. Le parc n'ouvre pas nécessairement chaque jour hors vacances scolaires et haute saison.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/sorties/(2026)/(09)/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets/index.md

---
title: "Parc Spirou avec de jeunes enfants: regardez la taille avant d'acheter les billets"
subtitle: Les seuils accompagnés et solo changent beaucoup d'une attraction à l'autre, même quand l'entrée du plus petit est gratuite
summary: Au Parc Spirou, la taille compte plus que l'âge pour choisir les attractions. Seuils, billets, pique-nique, poussette et accès à vérifier avant de partir.
slug: parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets
status: published
publishedAt: 2026-09-03T04:04:27+02:00
updatedAt: 2026-10-07T15:14:00+02:00
category: sorties
readingTime: 4
location:
  city: Monteux
  department: Vaucluse
  region: Provence-Alpes-Côte d’Azur
topic:
  key: sorties|monteux|parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets|2026
  keywords:
    - Parc Spirou enfants taille attractions
    - Parc Spirou billets famille
affiliate:
  enabled: true
  type: travel
  destination: Monteux
sources:
  - title: "Attractions et conditions de taille - Parc Spirou"
    url: "https://www.parc-spirou.com/les-attractions/"
  - title: "Billetterie officielle - Parc Spirou"
    url: "https://ticket.parc-spirou.com/"
  - title: "Calendrier d'ouverture - Parc Spirou"
    url: "https://www.parc-spirou.com/calendrier/"
image:
  src: "/images/articles/2026/09/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets.webp"
  alt: "Entrée du Parc Spirou à Monteux"
---
<!-- article-image-credit -->
*Photo: [Marianne Casamance](https://commons.wikimedia.org/wiki/File:Parc_spirou.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Avec un jeune enfant, la première question à régler avant une journée au Parc Spirou n'est pas son âge mais sa taille. Le parc fixe des seuils différents selon les attractions, avec parfois un accès plus tôt lorsqu'un adulte accompagne l'enfant. Mesurer les enfants avant d'acheter permet donc de savoir si chacun aura réellement assez de choix sur place.

## Mesurez les enfants avant de choisir les billets

Le parc indique que l'entrée est gratuite pour les enfants de moins de 1 mètre. Cela ne signifie pas qu'ils peuvent accéder à toutes les attractions: les conditions sont définies attraction par attraction.

Quelques exemples montrent bien l'écart entre les seuils:

- **Palombie Secrète**: accès accompagné dès 85 cm, puis seul à partir de 1,10 m;
- **Boule et Bill Déboulent**: accompagné dès 90 cm, puis seul à partir de 1,20 m;
- **Rasengan Chakra Rotation**: accompagné dès 1 m, puis seul à partir de 1,20 m;
- **Kyûbi Unchained**: accompagné dès 1,05 m, puis seul à partir de 1,30 m;
- certaines attractions à sensations demandent 1,40 m sans accès accompagné plus bas.

Avant la visite, mesurez donc chaque enfant et repérez les seuils qui comptent pour les attractions qui l'intéressent. Si plusieurs enfants de tailles différentes viennent ensemble, cette vérification permet de savoir avant l'achat si chacun aura suffisamment de choix sur place.

## Faut-il réserver en ligne?

Le Parc Spirou encourage fortement la réservation de billets datés en ligne. Les billets n'ont pas besoin d'être imprimés: le billet lui-même peut être présenté sur smartphone. Le simple mail de confirmation ne suffit pas.

Pour la saison 2026, le tarif web affiché est de **39 € à partir de 11 ans** et **33 € pour les moins de 11 ans**. Sur place, les mêmes catégories sont affichées à 41 € et 36 €. Les enfants de moins de 1 mètre entrent gratuitement.

Les tarifs réduits, notamment famille nombreuse, étudiant, senior ou personne en situation de handicap, sont annoncés comme disponibles en caisse sur présentation d'un justificatif. Le parc précise aussi que les chèques vacances ANCV papier sont acceptés directement sur place.

Si vous avez déjà vérifié les tailles et choisi votre date, vous pouvez [voir les billets disponibles pour le Parc Spirou sur Tiqets](https://www.tiqets.com/fr/billets-parc-spirou-provence-l149738/) et vérifier l'offre proposée pour votre jour de visite.

Pour Halloween 2026, le parc annonce une programmation spéciale du 3 octobre au 11 novembre. Si vous utilisez un billet non daté entre le **17 octobre et le 1er novembre**, une réservation de la journée est obligatoire; le parc précise qu'un visiteur sans réservation peut se voir refuser l'accès en cas de forte affluence. Vérifiez donc la [procédure de réservation Halloween](https://www.parc-spirou.com/reservation-halloween/) avant de partir.

## Une poussette est-elle utile dans le parc?

Oui, les poussettes sont autorisées dans l'enceinte. Elles doivent toutefois rester à l'extérieur des attractions. Pour un enfant qui marche mais fatigue encore vite, cela peut rester utile sur une journée complète.

Le parc autorise également les pique-niques et les boissons. Des aires de repos ombragées sont prévues pour déjeuner. C'est une option simple pour éviter de dépendre des restaurants, notamment avec de jeunes enfants ou des contraintes alimentaires.

L'application officielle du Parc Spirou permet de consulter les temps d'attente, d'utiliser le plan interactif, de filtrer les attractions selon la taille et de commander un repas. Ce filtre par taille est particulièrement pratique une fois dans le parc.

## Comment venir à Monteux?

<!-- article-image-body:01 -->

![Panneau de la rue Jean-Henri-Fabre à proximité du Parc Spirou à Monteux](/images/articles/2026/09/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets-body-01.webp)

<!-- /article-image-body:01 -->

Le Parc Spirou se trouve au **1 rue Jean-Henri Fabre, 84170 Monteux**, le long de la D942 entre Avignon et Carpentras. Le parking voisin est payant et dépend de la collectivité, pas du parc. Le parc indique aussi qu'il n'y a pas de borne de recharge électrique sur ce parking.

En transports en commun, la ligne régionale ZOU! 905 entre Avignon et Carpentras dessert l'arrêt Soleil. La gare TER de Monteux est également desservie depuis Avignon et Carpentras, avec des correspondances locales possibles jusqu'à la zone du parc.

Si la sortie s'inscrit dans un séjour plus large, la page Fam Space consacrée à [Avignon](/destinations/provence-alpes-cote-d-azur/vaucluse/avignon/) aide à organiser le reste du programme autour de la ville. Pour une deuxième journée culturelle, notre article [Avignonnais: Palais des Papes et Pont gratuits le week-end](/articles/bons-plans/avignonnais-palais-des-papes-et-pont-gratuits-le-week-end/) permet aussi de vérifier si votre famille peut profiter de la gratuité locale.

## Le point à retenir avant de partir

Pour une famille avec de jeunes enfants, ne choisissez pas la journée uniquement sur la réputation des attractions ou les personnages préférés. Mesurez d'abord chaque enfant, vérifiez les seuils accompagnés et solo, puis regardez si le nombre d'attractions accessibles justifie le billet pour votre famille.

Vérifiez enfin le calendrier d'ouverture du parc juste avant le départ: en dehors des vacances et de la haute saison, le parc n'ouvre pas nécessairement tous les jours.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/parc-bagatelle-en-famille-quelles-attractions-selon-la-taille-des-enfants/ | Parc Bagatelle en famille: quelles attractions selon la taille des enfants? | sorties | Merlimont, Pas-de-Calais, Hauts-de-France
- /articles/activites/festyland-avec-de-jeunes-enfants-quelles-attractions-selon-leur-taille/ | Festyland avec de jeunes enfants: quelles attractions selon leur taille? | activites | Carpiquet, Calvados, Normandie
- /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | Halloween 2026 au Parc Spirou: billets, nocturnes Naruto et maison hantée | evenements | Monteux, Vaucluse, Provence-Alpes-Côte d'Azur
- /articles/sorties/walibi-rhone-alpes-en-famille-quel-billet-choisir-selon-la-taille-des-enfants/ | Walibi Rhône-Alpes en famille: attractions, tailles et billets en 2026 | sorties | Les Avenières Veyrins-Thuellin, Isère, Auvergne-Rhône-Alpes
- /articles/sorties/chateau-de-boutheon-avec-des-enfants-chateau-parc-ou-billet-couple/ | Château de Bouthéon avec des enfants: château, parc ou billet couplé? | sorties | Andrézieux-Bouthéon, Loire, Auvergne-Rhône-Alpes
- /articles/sorties/musee-de-prehistoire-de-solutre-avec-des-enfants-musee-parc-et-roche/ | Musée de préhistoire de Solutré avec des enfants: musée, parc et Roche | sorties | Solutré-Pouilly, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/sorties/parc-de-cleres-avec-des-enfants-le-pass-famille-vaut-il-le-coup/ | Parc de Clères avec des enfants: le pass famille vaut-il le coup? | sorties | Clères, Seine-Maritime, Normandie
- /articles/activites/le-pal-ou-touroparc-en-famille-quel-parc-choisir-en-2026/ | Le PAL ou Touroparc en famille: quel parc choisir en 2026? | activites
- /articles/sorties/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets/ | Parc Spirou avec de jeunes enfants: regardez la taille avant d'acheter les billets | sorties | Monteux, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/cuisine/petit-epeautre-du-ventoux-quatre-idees-pour-le-cuisiner-en-famille/ | Petit épeautre du Ventoux: quatre idées pour le cuisiner en famille | cuisine | Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/maison/logement-mal-isole-dans-le-vaucluse-comment-gagner-en-confort-ete-comme-hiver/ | Logement mal isolé dans le Vaucluse: comment gagner en confort été comme hiver ? | maison | Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires, Père Noël et animations | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/vie-pratique/veloroute-du-calavon-avec-des-enfants-quelle-balade-choisir/ | Véloroute du Calavon avec des enfants: quelle balade choisir ? | vie-pratique | Apt, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/activites/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre/ | Grottes de Thouzon avec des enfants: préparer la visite sous terre | activites | Le Thor, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/halloween-a-avignon-une-visite-familiale-pour-decouvrir-l-archeologie-funeraire/ | Halloween à Avignon: un atelier familial pour découvrir l'archéologie funéraire | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/voyages/orange-avec-des-enfants-ou-dormir-pour-tout-faire-a-pied/ | Orange avec des enfants: où dormir pour tout faire à pied | voyages | Orange, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/avignonnais-palais-des-papes-et-pont-gratuits-le-week-end/ | Avignonnais: Palais des Papes et Pont gratuits le week-end | bons-plans | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/parentalite/premier-week-end-a-avignon-avec-un-bebe-ou-dormir-et-quoi-prevoir/ | Avignon avec un bébé: poussette, Palais des Papes et où dormir | parentalite | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/sorties/chauvigny-en-famille-cite-medievale-et-deux-chasses-aux-tresors/ | Chauvigny en famille: cité médiévale et deux chasses aux trésors | sorties | Chauvigny, Vienne, Nouvelle-Aquitaine
- /articles/sorties/chateau-de-la-motte-tilly-en-famille-visite-jeu-de-piste-et-parc-gratuit/ | Château de La Motte-Tilly en famille: visite, jeu de piste et parc gratuit | sorties | La Motte-Tilly, Aube, Grand Est
- /articles/sorties/musee-de-la-musique-mecanique-aux-gets-une-sortie-en-famille-qui-s-ecoute/ | Musée de la Musique Mécanique aux Gets: une sortie en famille qui s'écoute | sorties | Les Gets, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/sorties/mariana-en-famille-du-musee-aux-vestiges-de-la-cite-antique/ | Mariana en famille: du musée aux vestiges de la cité antique | sorties | Lucciana, Haute-Corse, Corse

### Historique Radar lié

- refresh | /articles/activites/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre/ | 2026-11-10T09:32:01.095Z
- opportunity | /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | 2026-10-12T17:34:53.933Z
- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- refresh | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-11-17T22:37:09.520Z
- refresh | /articles/sorties/walibi-rhone-alpes-en-famille-quel-billet-choisir-selon-la-taille-des-enfants/ | 2026-11-18T17:27:44.409Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
