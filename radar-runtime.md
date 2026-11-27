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
title: "Fontaines dansantes d'hiver à Metz 2026-2027: dates, horaires et conseils en famille"
subtitle: Au Lac aux Cygnes, un spectacle de jets d'eau, de musique et de lumières pour les fêtes
summary: "Du 20 novembre 2026 au 3 janvier 2027, profitez des fontaines dansantes d'hiver à Metz: spectacle gratuit toutes les 30 minutes de 17 h à 21 h, accès et conseils avec les enfants."
category: evenements
location:
  city: Metz
  department: Moselle
  region: Grand Est
image:
  src: /images/articles/2026/11/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants.webp
  alt: Vue du plan d'eau de Metz, secteur du lac aux Cygnes, hors spectacle des fontaines hivernales
sources:
  - title: Ville de Metz - Fontaines dansantes d'hiver
    url: https://metz.fr/agenda/fiche-42622.php
  - title: Inspire Metz - Les fontaines dansantes d'hiver
    url: https://www.tourisme-metz.com/fr/details/838175564-les-fontaines-dansantes-d-hiver
  - title: Ville de Metz - Noël à Metz 2026
    url: https://metz.fr/actus/2026/261102_noel_a_metz_2026_magie_tradition_et_reverie.php
  - title: Ville de Metz - Marchés de Noël 2026 et accès
    url: https://metz.fr/decouvrir-partager/evenements/marches-noel.php
eventEndsAt: 2027-01-03
topic:
  key: evenements|metz|fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants|2026
  keywords:
    - fontaines dansantes hiver Metz 2026
    - Lac aux Cygnes Metz Noël spectacle enfants
slug: fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants
status: published
publishedAt: 2026-11-03T06:32:33.518Z
updatedAt: null
readingTime: 2
affiliate:
  enabled: true
  type: travel
  destination: Metz
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(11)/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants/index.md
  targetSha: b28e99deadb772d8aeca418376b23c772ff27cdd
  targetUrl: /articles/evenements/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants/
  decision: Choisir un créneau pour voir gratuitement les fontaines avec les enfants, en connaissant la fréquence des séances et le temps d'attente à prévoir.
  affiliationPotential: Conserver l'offre Booking ibis Styles Metz Centre, dont la fiche existe et propose une configuration familiale; aucun billet nécessaire pour les fontaines.
  gsc:
    retrievedAt: 2026-11-27T09:15:00+01:00
    dataThrough: 2026-11-25
    signal: uncertain
    basis: "Visibilité récente : 320 impressions sur trois jours, puis 112 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 1 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-20
    peakEnd: 2026-11-22
    recentStart: 2026-11-23
    recentEnd: 2026-11-25
    peakImpressions: 320
    recentImpressions: 112
    commonQueries: 1
    positionDelta: -1.659
    impressionRatio: 0.846
    focusQueries:
      - fontaine dansante metz 2026
      - fontaines dansantes metz
      - fontaines dansantes metz 2026
      - combien de temps ça dure ?
      - fontaine dansante metz horaires
---

Les **fontaines dansantes de Metz** reviennent pour la première fois en hiver, du **20 novembre 2026 au 3 janvier 2027**. Au Lac aux Cygnes, les jets d'eau s'animent au rythme de la musique et des lumières sur le thème de Noël. Le spectacle est gratuit.

## Dates et horaires: quand venir ?

L'[agenda officiel de la Ville de Metz](https://metz.fr/agenda/fiche-42622.php) annonce une représentation **toutes les 30 minutes, chaque jour de 17 h à 21 h**.

Avec de jeunes enfants, privilégiez le début de soirée et prévoyez jusqu'à une demi-heure d'attente si vous manquez une séance. Les 30 minutes correspondent à l'intervalle entre les représentations, et non à la durée du spectacle, qui n'est pas précisée. Il ne s'agit pas non plus d'un spectacle continu de quatre heures.

Consultez l'agenda municipal avant de partir pour vérifier les éventuels changements d'horaires.

## Où voir le spectacle avec les enfants ?

<!-- article-image-body:01 -->

![Vue du lac aux Cygnes à Metz en juin 2014, hors spectacle hivernal](/images/articles/2026/11/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants-body-01.webp)

*Photo: [JuJu939](https://commons.wikimedia.org/wiki/File:Lac_aux_cygnes_-_Metz_57.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le rendez-vous se situe **quai des Régates, au Lac aux Cygnes**, dans le secteur du Plan d'eau de Metz, comme l'indique la [fiche de l'office de tourisme](https://www.tourisme-metz.com/fr/details/838175564-les-fontaines-dansantes-d-hiver).

Le spectacle se déroule dehors, au bord de l'eau: gardez les petits près de vous et prévoyez des vêtements chauds. En poussette, arrivez suffisamment tôt pour repérer un point de vue dégagé.

Les informations officielles consultées ne précisent pas les conditions d'accessibilité propres aux fontaines hivernales, les adaptations éventuelles en cas de mauvais temps ni les modalités particulières de réservation. En cas de besoin spécifique, renseignez-vous auprès de l'organisateur avant votre déplacement.

## Accès et autres animations de Noël

Pour venir en voiture, les parkings-relais du réseau LE MET' peuvent faciliter l'accès au centre. Dans son [programme des fêtes](https://metz.fr/actus/2026/261102_noel_a_metz_2026_magie_tradition_et_reverie.php), la Ville annonce la **gratuité des bus et parkings-relais les samedis et dimanches du 21 novembre au 20 décembre 2026**. Vérifiez les conditions de déplacement sur sa [page pratique](https://metz.fr/decouvrir-partager/evenements/marches-noel.php).

Les fontaines sont distinctes du Sentier des Lanternes, installé au square Boufflers, et du traîneau flottant du père Noël, qui propose une balade en bateau. Pour organiser ces autres étapes et les marchés, consultez notre [guide de Noël à Metz en famille](/articles/evenements/noel-a-metz-2026-en-famille-marches-et-sentier-des-lanternes/).

## Dormir à Metz pour prolonger le séjour

Si vous venez de loin, l'[ibis Styles Metz Centre sur Booking](https://www.booking.com/hotel/fr/ibis-styles-metz-centre.fr.html), rue Haute-Seille, propose notamment une chambre familiale avec un lit double et un canapé-lit pour deux personnes. Vérifiez sa disponibilité, la capacité adaptée à votre famille, les possibilités de lit bébé et les conditions de réservation pour vos dates.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(11)/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants/index.md

---
title: "Fontaines dansantes d'hiver à Metz 2026-2027: dates, horaires et conseils en famille"
subtitle: Au Lac aux Cygnes, un spectacle de jets d'eau, de musique et de lumières pour les fêtes
summary: Du 20 novembre 2026 au 3 janvier 2027, Metz accueille ses premières fontaines dansantes hivernales. Plusieurs représentations sont annoncées chaque jour entre 17 h et 21 h, sans horaires de séances détaillés à ce jour.
category: evenements
location:
  city: Metz
  department: Moselle
  region: Grand Est
image:
  src: "/images/articles/2026/11/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants.webp"
  alt: "Vue du plan d'eau de Metz, secteur du lac aux Cygnes, hors spectacle des fontaines hivernales"
sources:
  - title: Ville de Metz - Noël à Metz 2026
    url: https://metz.fr/actus/2026/261102_noel_a_metz_2026_magie_tradition_et_reverie.php
  - title: Ville de Metz - Marchés de Noël 2026 et accès
    url: https://metz.fr/decouvrir-partager/evenements/marches-noel.php
eventEndsAt: 2027-01-03
topic:
  key: evenements|metz|fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants|2026
  keywords:
    - fontaines dansantes hiver Metz 2026
    - Lac aux Cygnes Metz Noël spectacle enfants
slug: fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants
status: published
publishedAt: 2026-11-03T06:32:33.518Z
updatedAt: null
readingTime: 2
affiliate:
  enabled: true
  type: travel
  destination: Metz
---

Les **fontaines dansantes de Metz** reviennent pour la première fois en hiver: jets d'eau, musique et lumières sur le thème de Noël, au **Lac aux Cygnes, du 20 novembre 2026 au 3 janvier 2027**. Cette sortie en début de soirée peut plaire aux enfants, mais il faut prévoir un peu de souplesse pour assister à une représentation.

## Dates et horaires: quand venir ?

La Ville de Metz annonce **plusieurs représentations tous les jours entre 17 h et 21 h**. Il ne s'agit pas d'un spectacle continu de quatre heures: le programme municipal publié le 2 novembre ne précise ni les heures exactes de chaque séance ni leur durée.

Avec de jeunes enfants, prévoyez une marge d'attente et consultez les [informations actualisées de la Ville](https://metz.fr/actus/2026/261102_noel_a_metz_2026_magie_tradition_et_reverie.php) avant de partir. **17 h correspond au début de la plage annoncée**, pas à une séance garantie à cette heure.

## Où voir le spectacle avec les enfants ?

<!-- article-image-body:01 -->

![Vue du lac aux Cygnes à Metz en juin 2014, hors spectacle hivernal](/images/articles/2026/11/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants-body-01.webp)

*Photo: [JuJu939](https://commons.wikimedia.org/wiki/File:Lac_aux_cygnes_-_Metz_57.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le rendez-vous est fixé **au Lac aux Cygnes, dans le secteur du Plan d'eau de Metz**. Le spectacle est extérieur, au bord de l'eau: gardez les petits près de vous et prévoyez des vêtements chauds. En poussette, arrivez suffisamment tôt pour repérer un point de vue dégagé.

La Ville ne détaille pas encore les conditions d'accessibilité propres aux fontaines hivernales ni les éventuelles adaptations en cas de mauvais temps. **Tarif et réservation:** aucune modalité spécifique n'est indiquée dans le programme consulté. L'absence de tarif publié ne constitue pas une confirmation de gratuité.

## Accès et autres animations de Noël

Pour venir en voiture, les parkings-relais du réseau LE MET' peuvent faciliter l'accès au centre. La Ville annonce la **gratuité des bus et parkings-relais les samedis et dimanches du 21 novembre au 20 décembre 2026**; vérifiez les conditions sur sa [page pratique](https://metz.fr/decouvrir-partager/evenements/marches-noel.php).

Les fontaines sont distinctes du Sentier des Lanternes, installé au square Boufflers, et du traîneau flottant du père Noël, qui propose une balade en bateau. Pour organiser ces autres étapes et les marchés, consultez notre [guide de Noël à Metz en famille](https://www.fam-space.fr/articles/evenements/noel-a-metz-2026-en-famille-marches-et-sentier-des-lanternes/).

## Dormir à Metz pour prolonger le séjour

Pour les familles qui viennent de loin, l'[ibis Styles Metz Centre sur Booking](https://www.booking.com/hotel/fr/ibis-styles-metz-centre.fr.html), rue Haute-Seille, constitue une piste d'hébergement au centre-ville. Vérifiez directement les configurations familiales, la capacité des chambres, les lits bébé et les conditions applicables à vos dates: aucun tarif ni disponibilité pendant les fêtes n'est garanti.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille/ | Traîneau flottant de Noël à Metz 2026: dates, horaires et embarquement | evenements | Metz, Moselle, Grand Est
- /articles/evenements/noel-a-metz-2026-en-famille-marches-et-sentier-des-lanternes/ | Noël à Metz 2026 en famille: marchés et Sentier des Lanternes | evenements | Metz, Moselle, Grand Est
- /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | Noël 2026 au château de Goulaine: dates, billets et conseils en famille | evenements | Haute-Goulaine, Loire-Atlantique, Pays de la Loire
- /articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/ | Noël à Trévarez 2026 en famille: dates, horaires et réservation | evenements | Saint-Goazec, Finistère, Bretagne
- /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | Marché de Noël de Mulhouse 2026 en famille: horaires, étoffe et animations | evenements | Mulhouse, Haut-Rhin, Grand Est
- /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | Noël à Fontevraud 2026: patinoire, marché, dates et tarifs en famille | evenements | Fontevraud-l'Abbaye, Maine-et-Loire, Pays de la Loire
- /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | Noël des Siècles 2026 à Champs-sur-Marne: billets, budget et horaires en famille | evenements | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/cirque-de-noel-d-alsace-2026-a-eckbolsheim-quelle-seance-choisir-avec-des-enfants/ | Cirque de Noël d’Alsace 2026 à Eckbolsheim: dates, horaires et accès en famille | evenements | Eckbolsheim, Bas-Rhin, Grand Est
- /articles/vie-pratique/metz-en-famille-sans-voiture-train-bus-et-bagages/ | Metz en famille sans voiture: train, bus et bagages | vie-pratique | Metz, Moselle, Grand Est
- /articles/evenements/seraphine-louis-a-metz-decouvrir-l-exposition-avec-les-enfants/ | Séraphine Louis à Metz: découvrir l’exposition avec les enfants | evenements | Metz, Moselle, Grand Est
- /articles/evenements/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants/ | Fontaines dansantes d'hiver à Metz 2026-2027: dates, horaires et conseils en famille | evenements | Metz, Moselle, Grand Est
- /articles/activites/animation-estivale-metz-2026-enfants/ | Animation estivale Metz 2026: inscription et activités gratuites | activites | Metz, Moselle, Grand Est
- /articles/sorties/musee-cour-or-metz-ateliers-famille-ete-2026/ | Musée de La Cour d’Or à Metz en famille: prochains ateliers en septembre 2026 | sorties | Metz, Moselle, Grand Est
- /articles/activites/snowworld-amneville-en-famille-luge-bouees-ou-ski/ | SnowWorld Amnéville en famille: luge, bouées ou ski ? | activites | Amnéville, Moselle, Grand Est
- /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | Luminescences 2026-2027 au zoo d'Amnéville: billets, pass annuel et horaires | evenements | Amnéville, Moselle, Grand Est
- /articles/voyages/dormir-au-parc-sainte-croix-avec-des-enfants-lodge-repas-et-acces-au-parc/ | Dormir au Parc Sainte-Croix avec des enfants: lodge, repas et accès au parc | voyages | Rhodes, Moselle, Grand Est
- /articles/sorties/chateau-de-sierck-en-famille-tarifs-2026-jeux-et-conseils-de-visite/ | Château de Sierck en famille: tarifs 2026, jeux et conseils de visite | sorties | Sierck-les-Bains, Moselle, Grand Est
- /articles/evenements/cite-immersive-des-fables-a-paris-decouvrir-la-fontaine-en-famille/ | Cité immersive des Fables à Paris: découvrir La Fontaine en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/sculptures-sur-glace-et-neige-a-valloire-en-janvier-2027/ | Sculptures sur glace et neige à Valloire en janvier 2027 | evenements | Valloire, Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-contes-et-rencontres-2027-en-lozere-quels-spectacles-voir-en-famille/ | Festival Contes et Rencontres 2027 en Lozère: quels spectacles voir en famille ? | evenements | Lozère, Occitanie
- /articles/evenements/lumieres-d-afrique-2026-2027-a-sigean-les-lanternes-en-famille/ | Lumières d’Afrique 2026-2027 à Sigean: les lanternes en famille | evenements | Sigean, Aude, Occitanie
- /articles/evenements/natur-armor-2027-a-paimpol-preparer-sa-visite-en-famille/ | Natur’Armor 2027 à Paimpol: préparer sa visite en famille | evenements | Paimpol, Côtes-d'Armor, Bretagne

### Historique Radar lié

- opportunity | /articles/evenements/cirque-de-noel-d-alsace-2026-a-eckbolsheim-quelle-seance-choisir-avec-des-enfants/ | 2026-11-01T12:31:31.417Z
- opportunity | /articles/evenements/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants/ | 2026-11-03T06:32:33.600Z
- opportunity | /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | 2026-10-22T09:37:18.560Z
- refresh | /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | 2026-11-13T10:29:37.013Z
- opportunity | /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | 2026-10-19T09:37:22.517Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | 2026-11-03T15:36:10.146Z
- refresh | /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | 2026-11-13T13:31:11.034Z
- opportunity | /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | 2026-10-28T01:34:03.741Z
- opportunity | /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | 2026-10-26T18:32:56.730Z
- refresh | /articles/activites/snowworld-amneville-en-famille-luge-bouees-ou-ski/ | 2026-11-09T17:37:32.610Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
