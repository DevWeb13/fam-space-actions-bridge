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
title: "SnowWorld Amnéville en famille: luge, bouées ou ski ?"
subtitle: Âges minimums, tarifs et réservations pour une sortie à la neige en Moselle
summary: "Luge dès 3 ans, bouées dès 10 ans ou initiation au ski: comparez les conditions d'accès, le coût du matériel et les réservations à SnowWorld Amnéville."
slug: snowworld-amneville-en-famille-luge-bouees-ou-ski
status: published
publishedAt: 2026-11-01T00:58:13+01:00
updatedAt: null
category: activites
readingTime: 5
location:
  city: Amnéville
  department: Moselle
  region: Grand Est
topic:
  key: activites|amneville|snowworld-amneville-en-famille-luge-bouees-ou-ski|2026
  keywords:
    - SnowWorld Amnéville en famille
    - luge Amnéville
    - tubing Amnéville
    - ski indoor Moselle
image:
  src: /images/articles/2026/11/snowworld-amneville-en-famille-luge-bouees-ou-ski.webp
  alt: Piste de ski couverte du Snowhall à Amnéville lors d'une compétition en 2007
sources:
  - title: SnowWorld Amnéville - horaires, accès et services
    url: https://www.snowworld.com/fr/amneville
  - title: SnowWorld Amnéville - luge
    url: https://www.snowworld.com/fr/amneville/luge
  - title: SnowWorld Amnéville - tubing
    url: https://www.snowworld.com/en/amneville/tubing
  - title: SnowWorld Amnéville - ski, location et accès
    url: https://www.snowworld.com/fr/amneville/ski-snowboard
  - title: ESF Amnéville - cours de ski et tarifs
    url: https://www.esf-amneville.com/cours
  - title: SnowWorld Amnéville - offres grand public
    url: https://www.snowworld.com/fr/amneville/offres-grand-public
affiliate:
  enabled: true
  type: travel
  destination: Amnéville
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/activites/(2026)/(11)/snowworld-amneville-en-famille-luge-bouees-ou-ski/index.md
  targetSha: d7fce5d48eafe9b61e03056faccdb14c24c53cd9
  targetUrl: /articles/activites/snowworld-amneville-en-famille-luge-bouees-ou-ski/
  decision: Choisir entre luge, tubing et ski selon l'âge et calculer le coût réel d'une sortie, sans mauvaise surprise à la caisse.
  affiliationPotential: Conserver l'hébergement Booking existant à Amnéville; aucune nouvelle offre partenaire justifiée.
  gsc:
    retrievedAt: 2026-11-09T06:27:46+01:00
    dataThrough: 2026-11-07
    signal: uncertain
    basis: "Visibilité récente : 47 impressions sur trois jours, puis 10 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-02
    peakEnd: 2026-11-04
    recentStart: 2026-11-05
    recentEnd: 2026-11-07
    peakImpressions: 47
    recentImpressions: 10
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0.091
    focusQueries:
      - luge amneville
      - snow hall amnéville
      - esf amneville
      - ski amneville prix
      - snowhall tarif
reviewAt: 2026-11-23
---

<!-- article-image-credit -->
*Photo: [uploaded by User:Tom2](https://commons.wikimedia.org/wiki/File:Amn%C3%A9ville_Snowhall_indoor_ski_slope.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Envie de faire découvrir la neige aux enfants sans partir à la montagne ? À Amnéville, en Moselle, **SnowWorld propose des pistes de glisse couvertes toute l'année**, autour de **−5 °C**. On peut y faire de la luge, descendre en bouée gonflable ou apprendre à skier. Le budget et la réservation varient selon l'activité.

## Luge, bouées ou ski: quelle activité choisir ?

### La luge dès 3 ans, pour une première glisse

La luge se pratique dans un espace dédié. Elle coûte **9,95 € par personne pour une heure**, puis **7,50 € pour une heure supplémentaire**. La luge, les chaussures et le casque sont fournis; il faut apporter des vêtements chauds et des gants.

**Pour un enfant de 3 à 12 ans muni d'un billet luge, un adulte accompagnant peut accéder gratuitement à la piste.** Cet accès permet de l'accompagner, pas de faire gratuitement de la luge à sa place.

Les billets sont vendus **uniquement à la caisse**, sans réservation en ligne. Pour vérifier la disponibilité avant de venir, appelez le **03 56 71 99 90**. Les luges personnelles sont interdites. Consultez les [conditions officielles de la luge](https://www.snowworld.com/fr/amneville/luge).

### Les bouées dès 10 ans et 1,35 m, pour les plus grands

Le *tubing* consiste à dévaler une piste enneigée dans une bouée gonflable. Il faut **avoir au moins 10 ans et mesurer au moins 135 cm**: les deux conditions sont obligatoires. Aucun apprentissage du ski n'est nécessaire.

Le tarif est de **9,95 € par personne pour une heure**, enfants de 10 à 12 ans et adultes compris. Chaque participant descend seul dans sa bouée. **Casque et gants sont obligatoires**; les casques sont prêtés gratuitement.

Contrairement à la luge, le tubing se **réserve en ligne** depuis la [page officielle de l'activité](https://www.snowworld.com/en/amneville/tubing), disponible en anglais.

### Le ski dès 5 ans, avec ou sans cours

Pour apprendre à skier, l'**ESF d'Amnéville** propose des cours particuliers dès **5 ans**. Une leçon de 55 minutes coûte **à partir de 56 € pour une ou deux personnes de même niveau**. Les stages enfants commencent à **135 € pour quatre séances d'1 h 30**, soit six heures au total.

**Le prix du cours n'inclut ni le forfait d'accès aux pistes ni la location du matériel.** Réservez le cours auprès de l'[ESF Amnéville](https://www.esf-amneville.com/cours), puis prévoyez séparément le forfait et l'équipement auprès de SnowWorld.

Pour les familles qui savent déjà skier, le complexe dispose d'une petite piste adaptée aux débutants et d'une grande piste de **620 mètres**, avec des passages bleus et rouges. Les tarifs des forfaits changent selon la durée et la période: consultez la [page ski et snowboard](https://www.snowworld.com/fr/amneville/ski-snowboard).

## Quel budget prévoir en famille ?

Trois repères pour une heure d'activité ou une première leçon:

- **Deux enfants de 6 et 9 ans à la luge: 19,90 €** pour une heure, avec un adulte accompagnant admis gratuitement par enfant selon les conditions de SnowWorld.
- **Un parent et un adolescent au tubing: 19,90 €** pour une heure, si tous deux respectent les conditions d'âge et de taille.
- **Un enfant en cours particulier de ski: à partir de 70,90 € hors forfait d'accès**, soit 56 € de cours et 14,90 € de location skis, chaussures et casque. Le total réel est supérieur dès qu'on ajoute le forfait d'accès.

Pour le ski sans cours, la [grille officielle de location](https://www.snowworld.com/fr/amneville/ski-snowboard) affiche actuellement **14,90 € pour les skis ou le snowboard avec chaussures**, casque prêté gratuitement. Une combinaison peut être louée **10,95 €**, les casiers coûtent **2 €** et les gants doivent être apportés ou achetés sur place.

SnowWorld propose aussi un forfait ski **Friends & Family** d'une, deux ou quatre heures, **sans matériel inclus**. Consultez les [offres grand public](https://www.snowworld.com/fr/amneville/offres-grand-public) pour le prix du créneau choisi. Pour éviter les surprises, vérifiez le montant final au moment de l'achat en ligne et comparez-le au prix annoncé au guichet: les éventuels frais de caisse ne doivent pas être supposés applicables à la luge, vendue uniquement sur place. Ajoutez le transport, les vêtements nécessaires et le repas.

*Tarifs revérifiés sur les pages officielles le 9 novembre 2026, susceptibles d'évoluer.*

## Préparer la visite: équipement, horaires et règles

Sur les pistes, prévoyez une tenue d'hiver et **des gants obligatoires**. Le casque est également obligatoire pour le ski et les bouées; SnowWorld en prête gratuitement. Le restaurant Chalet 55° et le snack permettent aux accompagnants de patienter dans un espace plus tempéré.

**La durée du forfait commence au passage des portiques** et ne s'arrête pas pour une pause. Récupérez donc le matériel et changez-vous avant d'entrer sur les pistes. Les jeux libres dans la neige sont interdits et le complexe ne propose pas de garde d'enfants.

Les [horaires officiels](https://www.snowworld.com/fr/amneville) indiquent **10 h à 22 h tous les jours du 2 novembre au 2 mai**. Attention: la [page ski](https://www.snowworld.com/fr/amneville/ski-snowboard) annonce des compétitions les **14, 15, 21 et 22 novembre 2026**; la grande piste n'ouvrira qu'à **14 h** ces jours-là. Vérifiez toujours le créneau de la piste et de l'activité avant de partir.

## Où se trouve SnowWorld Amnéville ?

<!-- article-image-body:01 -->

![Bâtiment voyageurs de la gare SNCF d'Hagondange, point d'arrivée possible en TER](/images/articles/2026/11/snowworld-amneville-en-famille-luge-bouees-ou-ski-body-01.webp)

*Photo: [Alexandre Chapus (Coyote du 86)](https://commons.wikimedia.org/wiki/File:Gare_SNCF_d%27Hagondange.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le complexe se situe **chemin des Terrasses du Soleil, 57360 Amnéville**, dans le Centre thermal et touristique. **Le parking est gratuit**, avec des emplacements réservés aux personnes à mobilité réduite. SnowWorld accueille les personnes en situation de handicap; pour l'accès aux pistes, il recommande un accompagnant, qui doit disposer de son propre forfait. Le ski assis est possible avec son matériel et une pratique suffisante.

Sans voiture, SnowWorld indique un TER jusqu'à **Hagondange**, puis un trajet à pied en montée vers le centre thermal. Autres possibilités mentionnées sur sa [page d'accès](https://www.snowworld.com/fr/amneville/ski-snowboard): le bus **77**, ou le **48** jusqu'à la mairie d'Amnéville, suivi de la navette **TR'AMM**. Vérifiez les correspondances et le retour avant de partir.

## Prolonger la sortie à Amnéville

Pour les familles qui viennent de loin, le [B&B HOTEL Amneville-les-Thermes sur Booking.com](https://www.booking.com/hotel/fr/roi-soleil-amneville-les-thermes.fr.html) est situé dans le secteur de loisirs, avec **chambres familiales et parking gratuit**. Vérifiez la capacité de la chambre et les conditions de séjour pour vos dates.

Vous pouvez aussi compléter votre escapade avec les lanternes du zoo: notre guide de [Luminescences à Amnéville en famille](https://www.fam-space.fr/articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/) explique les différentes formules de visite.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/activites/(2026)/(11)/snowworld-amneville-en-famille-luge-bouees-ou-ski/index.md

---
title: "SnowWorld Amnéville en famille: luge, bouées ou ski ?"
subtitle: Âges minimums, tarifs et réservations pour une sortie à la neige en Moselle
summary: "Luge dès 3 ans, bouées dès 10 ans ou initiation au ski: les activités à choisir selon l'âge, les prix à prévoir et les règles pratiques à SnowWorld Amnéville."
slug: snowworld-amneville-en-famille-luge-bouees-ou-ski
status: published
publishedAt: 2026-11-01T00:58:13+01:00
updatedAt: null
category: activites
readingTime: 5
location:
  city: Amnéville
  department: Moselle
  region: Grand Est
topic:
  key: activites|amneville|snowworld-amneville-en-famille-luge-bouees-ou-ski|2026
  keywords:
    - SnowWorld Amnéville en famille
    - luge Amnéville
    - tubing Amnéville
    - ski indoor Moselle
image:
  src: "/images/articles/2026/11/snowworld-amneville-en-famille-luge-bouees-ou-ski.webp"
  alt: "Piste de ski couverte du Snowhall à Amnéville lors d'une compétition en 2007"
sources:
  - title: SnowWorld Amnéville - horaires, accès et services
    url: https://www.snowworld.com/fr/amneville
  - title: SnowWorld Amnéville - luge
    url: https://www.snowworld.com/fr/amneville/luge
  - title: SnowWorld Amnéville - tubing
    url: https://www.snowworld.com/en/amneville/tubing
  - title: SnowWorld Amnéville - ski, location et accès
    url: https://www.snowworld.com/fr/amneville/ski-snowboard
  - title: ESF Amnéville - cours de ski et tarifs
    url: https://www.esf-amneville.com/cours
  - title: SnowWorld Amnéville - offres grand public
    url: https://www.snowworld.com/fr/amneville/offres-grand-public
affiliate:
  enabled: true
  type: travel
  destination: Amnéville
---
<!-- article-image-credit -->
*Photo: [uploaded by User:Tom2](https://commons.wikimedia.org/wiki/File:Amn%C3%A9ville_Snowhall_indoor_ski_slope.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Envie de faire découvrir la neige aux enfants sans partir à la montagne ? À Amnéville, en Moselle, **SnowWorld propose des pistes de glisse couvertes toute l'année**. On peut y faire de la luge, descendre en bouée gonflable ou apprendre à skier, dans un bâtiment où les pistes restent autour de **−5 °C**.

Le bon choix dépend surtout de l'âge des enfants et de ce qu'ils souhaitent faire. Les activités n'ont ni les mêmes conditions d'accès ni les mêmes modalités de réservation.

## Luge, bouées ou ski: quelle activité choisir ?

### La luge dès 3 ans, pour une première glisse

La luge se pratique dans un espace dédié. Elle coûte **9,95 € par personne pour une heure**, puis **7,50 € pour une heure supplémentaire**. La luge, les chaussures et le casque sont fournis; il faut apporter des vêtements chauds et des gants.

**Pour un enfant de 3 à 12 ans muni d'un billet luge, un adulte accompagnant peut accéder gratuitement à la piste.** Cet accès permet de l'accompagner, pas de faire gratuitement de la luge à sa place.

Les billets sont vendus **uniquement à la caisse**, sans réservation en ligne. Si vous venez spécialement pour cette activité, vérifiez la disponibilité au **03 56 71 99 90**. Les luges personnelles sont interdites. Toutes les conditions figurent sur la [page officielle de la luge](https://www.snowworld.com/fr/amneville/luge).

### Les bouées dès 10 ans et 1,35 m, pour les plus grands

Le *tubing* consiste à dévaler une piste enneigée dans une bouée gonflable. Il faut **avoir au moins 10 ans et mesurer au moins 135 cm**: les deux conditions sont obligatoires. Aucun apprentissage du ski n'est nécessaire.

Le tarif est de **9,95 € par personne pour une heure**, enfants de 10 à 12 ans et adultes compris. Chaque participant descend seul dans sa bouée. **Casque et gants sont obligatoires**; les casques sont prêtés gratuitement.

Contrairement à la luge, le tubing se **réserve en ligne** depuis la [page officielle de l'activité](https://www.snowworld.com/en/amneville/tubing), actuellement disponible en anglais.

### Le ski dès 5 ans, avec ou sans cours

Pour apprendre à skier, l'**ESF d'Amnéville** propose des cours particuliers dès **5 ans**. Une leçon de 55 minutes coûte **à partir de 56 € pour une ou deux personnes de même niveau**. Les stages enfants commencent à **135 € pour quatre séances d'1 h 30**, soit six heures au total.

Attention au budget: **les cours n'incluent ni le forfait d'accès aux pistes ni la location des skis et chaussures**. La réservation du cours se fait auprès de l'[ESF Amnéville](https://www.esf-amneville.com/cours); l'accès aux pistes et le matériel se règlent séparément auprès de SnowWorld.

Pour les familles qui savent déjà skier, le complexe dispose d'une petite piste adaptée aux débutants et d'une grande piste de **620 mètres**, avec des passages bleus et rouges. Les tarifs des forfaits changent selon la durée et la période. Consultez la [page ski et snowboard](https://www.snowworld.com/fr/amneville/ski-snowboard) avant de choisir votre créneau.

## Quel budget prévoir en famille ?

Voici trois repères concrets pour une heure d'activité ou une première leçon:

- **Deux enfants de 6 et 9 ans à la luge: 19,90 €** au total pour une heure, avec un adulte accompagnant admis gratuitement par enfant selon les conditions de SnowWorld.
- **Un parent et un adolescent au tubing: 19,90 €** pour une heure, si tous deux respectent les conditions d'âge et de taille.
- **Un enfant en cours particulier de ski: au moins 70,90 € hors forfait d'accès**, en comptant le cours à partir de 56 € et la location skis, chaussures et casque à 14,90 €.

Pour le ski sans cours, la location skis ou snowboard avec chaussures coûte **14,90 €**. Une combinaison peut être louée **10,95 €**, et le casque est prêté gratuitement. Les casiers coûtent **2 €**.

SnowWorld propose également un forfait ski **Friends & Family** d'une, deux ou quatre heures, **sans matériel inclus**. Les tarifs du forfait sont à consulter dans les [offres grand public](https://www.snowworld.com/fr/amneville/offres-grand-public). Ajoutez à votre budget le transport, les éventuels vêtements et le repas.

*Tarifs vérifiés sur les sites officiels le 1er novembre 2026, susceptibles d'évoluer.*

## Préparer la visite: équipement, horaires et règles

Sur les pistes, prévoyez une tenue d'hiver et **des gants obligatoires**. Le casque est également obligatoire pour le ski et les bouées; SnowWorld en prête gratuitement. Le restaurant Chalet 55° et le snack permettent aux accompagnants de patienter dans un espace plus tempéré.

**La durée du forfait commence au passage des portiques** et ne s'arrête pas pour une pause. Mieux vaut donc récupérer le matériel et se changer avant d'entrer sur les pistes. Les jeux libres dans la neige sont interdits et le complexe ne propose pas de garde d'enfants.

Les [horaires officiels](https://www.snowworld.com/fr/amneville) annoncent **10 h à 22 h tous les jours du 2 novembre au 2 mai**. Jusqu'au 1er novembre inclus, la grande piste n'ouvre qu'à **14 h**, même si la petite piste ouvre dès 10 h. Vérifiez les horaires de la piste et de l'activité choisies avant le déplacement.

## Où se trouve SnowWorld Amnéville ?

<!-- article-image-body:01 -->

![Bâtiment voyageurs de la gare SNCF d'Hagondange, point d'arrivée possible en TER](/images/articles/2026/11/snowworld-amneville-en-famille-luge-bouees-ou-ski-body-01.webp)

*Photo: [Alexandre Chapus (Coyote du 86)](https://commons.wikimedia.org/wiki/File:Gare_SNCF_d%27Hagondange.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le complexe se situe **chemin des Terrasses du Soleil, 57360 Amnéville**, dans le Centre thermal et touristique. **Le parking est gratuit**, avec des emplacements réservés aux personnes à mobilité réduite.

Sans voiture, SnowWorld indique un TER jusqu'à **Hagondange**, puis un trajet à pied en montée vers le centre thermal. Autres possibilités mentionnées sur sa [page d'accès](https://www.snowworld.com/fr/amneville/ski-snowboard): le bus **77**, ou le **48** jusqu'à la mairie d'Amnéville, suivi de la navette **TR'AMM**. Vérifiez les correspondances et le retour avant de partir.

## Prolonger la sortie à Amnéville

Pour les familles qui viennent de loin, le [B&B HOTEL Amneville-les-Thermes sur Booking.com](https://www.booking.com/hotel/fr/roi-soleil-amneville-les-thermes.fr.html) est situé dans le secteur de loisirs, avec **chambres familiales et parking gratuit**. Vérifiez la capacité de la chambre et les conditions de séjour pour vos dates.

Vous pouvez aussi compléter votre escapade avec les lanternes du zoo: notre guide de [Luminescences à Amnéville en famille](https://www.fam-space.fr/articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/) explique les différentes formules de visite.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | Luminescences 2026-2027 au zoo d'Amnéville: billets, tarifs et visite en famille | evenements | Amnéville, Moselle, Grand Est
- /articles/sorties/chateau-de-sierck-en-famille-tarifs-2026-jeux-et-conseils-de-visite/ | Château de Sierck en famille: tarifs 2026, jeux et conseils de visite | sorties | Sierck-les-Bains, Moselle, Grand Est
- /articles/sorties/musee-cour-or-metz-ateliers-famille-ete-2026/ | Musée de La Cour d’Or à Metz en famille: prochains ateliers en septembre 2026 | sorties | Metz, Moselle, Grand Est
- /articles/activites/animation-estivale-metz-2026-enfants/ | Animation estivale Metz 2026: inscription et activités gratuites | activites | Metz, Moselle, Grand Est
- /articles/sorties/les-menuires-sans-ski-en-famille-luges-piscines-et-balades-en-hiver/ | Les Menuires sans ski en famille: luges, piscines et balades en hiver | sorties | Les Belleville, Savoie, Auvergne-Rhône-Alpes
- /articles/maison/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/ | Meubles d'occasion en Meurthe-et-Moselle: où acheter, donner et réparer ? | maison | Meurthe-et-Moselle, Grand Est
- /articles/activites/snowworld-amneville-en-famille-luge-bouees-ou-ski/ | SnowWorld Amnéville en famille: luge, bouées ou ski ? | activites | Amnéville, Moselle, Grand Est
- /articles/evenements/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants/ | Fontaines dansantes d'hiver à Metz 2026-2027: dates, horaires et conseils en famille | evenements | Metz, Moselle, Grand Est
- /articles/evenements/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille/ | Traîneau flottant de Noël à Metz 2026: dates, horaires et embarquement | evenements | Metz, Moselle, Grand Est
- /articles/evenements/noel-a-metz-2026-en-famille-marches-et-sentier-des-lanternes/ | Noël à Metz 2026 en famille: marchés et Sentier des Lanternes | evenements | Metz, Moselle, Grand Est
- /articles/voyages/dormir-au-parc-sainte-croix-avec-des-enfants-lodge-repas-et-acces-au-parc/ | Dormir au Parc Sainte-Croix avec des enfants: lodge, repas et accès au parc | voyages | Rhodes, Moselle, Grand Est
- /articles/activites/corderie-royale-de-rochefort-en-famille-visite-tarifs-et-ateliers/ | Corderie Royale de Rochefort en famille: visite, tarifs et ateliers | activites | Rochefort, Charente-Maritime, Nouvelle-Aquitaine
- /articles/activites/musee-de-l-air-et-de-l-espace-au-bourget-quel-parcours-en-famille/ | Musée de l’Air et de l’Espace au Bourget: quel parcours en famille? | activites | Le Bourget, Seine-Saint-Denis, Île-de-France
- /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | Atelier bâton de pluie gratuit à Paris le 18 novembre 2026: dès 6 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | Lecture d'hiver gratuite à Paris le 12 décembre 2026: deux séances pour les 1-3 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | Bricolages de Noël gratuits à Paris le 19 décembre 2026: un atelier dès 4 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-deco-de-noel-gratuit-a-paris-le-28-novembre-2026-creer-en-recup-art-des-8-ans/ | Atelier déco de Noël gratuit à Paris le 28 novembre 2026: bricolage dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | Atelier Calder à Paris le 14 novembre 2026: fabriquer un mobile dès 5 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/le-pal-2027-en-famille-une-ou-deux-journees-entre-animaux-et-attractions/ | Le PAL 2027 en famille: une ou deux journées entre animaux et attractions ? | activites | Saint-Pourçain-sur-Besbre, Allier, Auvergne-Rhône-Alpes
- /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | Atelier Pokémon et biodiversité à Paris le 28 novembre 2026: dessin dès 10 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-omamori-gratuit-a-paris-le-21-novembre-2026-creer-une-amulette-japonaise-des-7-ans/ | Atelier omamori gratuit à Paris le 21 novembre 2026: créer une amulette dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | Atelier couture gratuit à Paris le 28 novembre 2026: dès 8 ans | activites | Paris, Paris, Île-de-France

### Historique Radar lié

- opportunity | /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | 2026-11-05T16:36:05.180Z
- opportunity | /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | 2026-11-05T04:36:26.347Z
- opportunity | /articles/activites/atelier-deco-de-noel-gratuit-a-paris-le-28-novembre-2026-creer-en-recup-art-des-8-ans/ | 2026-11-05T23:35:44.031Z
- opportunity | /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | 2026-11-06T12:30:50.449Z
- opportunity | /articles/activites/atelier-omamori-gratuit-a-paris-le-21-novembre-2026-creer-une-amulette-japonaise-des-7-ans/ | 2026-11-05T07:29:24.731Z
- opportunity | /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | 2026-11-06T03:27:40.597Z
- opportunity | /articles/evenements/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants/ | 2026-11-03T06:32:33.600Z
- opportunity | /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | 2026-11-06T09:33:42.136Z
- opportunity | /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | 2026-10-22T09:37:18.560Z
- opportunity | /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | 2026-11-05T10:32:54.471Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
