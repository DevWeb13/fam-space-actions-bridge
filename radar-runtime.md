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
title: "Marché de Noël de Saint-Étienne 2026 en famille: trois places, horaires et accès"
subtitle: Grande roue à l'Hôtel-de-Ville, artisans place Dorian et horaires particuliers à Noël
summary: "Du 21 novembre au 31 décembre 2026, découvrez le marché de Noël de Saint-Étienne en famille. Les chalets de la place Dorian ouvrent seulement certains jours jusqu'au 23 décembre: voici comment choisir sa visite."
category: evenements
location:
  city: Saint-Étienne
  department: Loire
  region: Auvergne-Rhône-Alpes
image:
  src: /images/articles/2026/10/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces.webp
  alt: Chalet de décorations au marché de Noël de Saint-Étienne, photographié en 2019
sources:
  - title: Ville de Saint-Étienne - Magazine municipal de novembre 2026, page 15
    url: https://www.saint-etienne.fr/sites/default/files/media/downloads/116-2026-mag_vse_web.pdf
  - title: Ville de Saint-Étienne - Marché de Noël 2026, dates et horaires des chalets
    url: https://connect.saint-etienne.fr/demarche/417/4
  - title: STAS - Itinéraires, horaires et informations trafic
    url: https://www.reseau-stas.fr/
  - title: Saint-Étienne Métropole - Transports en commun et accessibilité
    url: https://www.saint-etienne-metropole.fr/habiter-se-deplacer/deplacement-et-mobilite/en-transports-en-commun
eventEndsAt: 2026-12-31
reviewAt: 2026-11-19
topic:
  key: evenements|saint-etienne|marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces|2026
  keywords:
    - marché de Noël Saint-Étienne 2026
    - marché de Noël Saint-Étienne horaires
    - Noël à Sainté avec enfants
slug: marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces
status: published
publishedAt: 2026-10-28T18:37:08.909Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Saint-Étienne
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/index.md
  targetSha: dcfec6f07766f0ab3b98339459dc254677833e6a
  targetUrl: /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/
  decision: Choisir les places et les jours de visite du marché de Noël 2026, notamment pour découvrir les artisans de la place Dorian avec des enfants, sans confondre les horaires des différents espaces.
  affiliationPotential: Conserver l'hébergement familial Residhotel St Etienne Centre sur Booking.com; aucune nouvelle offre nécessaire.
  gsc:
    retrievedAt: 2026-11-14T03:26:00+01:00
    dataThrough: 2026-11-10
    signal: needs_query_check
    basis: "Visibilité récente : 60 impressions sur trois jours, puis 12 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-31
    peakEnd: 2026-11-02
    recentStart: 2026-11-08
    recentEnd: 2026-11-10
    peakImpressions: 60
    recentImpressions: 12
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - marché de Noël Saint-Étienne 2026
      - marché de Noël Saint-Étienne horaires
      - Noël à Sainté avec enfants
---

<!-- article-image-credit -->
*Photo: [Touam (Hervé Agnoux)](https://commons.wikimedia.org/wiki/File:No%C3%ABl-D%C3%A9co.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Le **marché de Noël de Saint-Étienne 2026 se déroule du 21 novembre au 31 décembre** dans le centre-ville. Aux chalets des places de l'Hôtel-de-Ville et Jean-Jaurès s'ajoute un espace d'artisans et de producteurs **place Dorian**, qui n'ouvre pas tous les jours. La grande roue est annoncée place de l'Hôtel-de-Ville. Pour une visite en famille, le choix du jour compte autant que celui de l'horaire.

## Trois places à découvrir, mais pas les mêmes jours

<!-- article-image-body:01 -->

![Vue de la place Jean-Jaurès à Saint-Étienne en juin 2025, hors marché de Noël](/images/articles/2026/10/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces-body-01.webp)

*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Place_Jean_Jaur%C3%A8s_-_Saint-%C3%89tienne_(FR42)_-_2025-06-29_-_1.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Les chalets principaux sont installés **places de l'Hôtel-de-Ville et Jean-Jaurès**, accessibles à pied l'une depuis l'autre. La Ville annonce aussi une **grande roue place de l'Hôtel-de-Ville**. Son tarif et ses horaires propres ne sont pas précisés dans le programme consulté: ne les confondez pas avec ceux des chalets.

**Place Dorian**, des chalets réunissent artisans, créateurs et producteurs locaux. Ils sont annoncés **les mercredis, samedis et dimanches du 21 novembre au 23 décembre 2026**. Si votre priorité est de découvrir ces stands et de chercher des cadeaux locaux, privilégiez l'un de ces jours plutôt qu'un lundi, mardi, jeudi ou vendredi. Les horaires détaillés propres à cet espace ne sont pas confirmés séparément.

Ces informations figurent dans le [magazine municipal de novembre 2026, page 15](https://www.saint-etienne.fr/sites/default/files/media/downloads/116-2026-mag_vse_web.pdf). La promenade entre les chalets ne fait pas l'objet d'une billetterie annoncée; prévoyez néanmoins un budget pour les achats, gourmandises et attractions.

## Horaires des chalets principaux et exceptions de décembre

La [Ville de Saint-Étienne](https://connect.saint-etienne.fr/demarche/417/4) annonce pour les chalets des places de l'Hôtel-de-Ville et Jean-Jaurès:

- **Du dimanche au jeudi:** 10 h 30 à 20 h.
- **Vendredi et samedi:** 10 h 30 à 21 h 30.
- **Samedi 5 décembre, Sainte-Barbe:** jusqu'à 23 h.
- **Jeudi 24 et jeudi 31 décembre:** fermeture à 18 h.
- **Vendredi 25 décembre:** 14 h à 19 h, sur la base du volontariat des exposants. Tous les chalets ne seront donc pas forcément ouverts.

Ces horaires ne doivent pas être appliqués automatiquement aux chalets de la place Dorian ni à la grande roue. Pour les illuminations avec de jeunes enfants, la fin d'après-midi permet de profiter de l'ambiance sans attendre la fermeture. Le 5 décembre, vérifiez séparément le programme de la Sainte-Barbe: la nocturne des chalets ne garantit pas une animation précise.

## Venir en tram, en voiture ou avec une poussette

<!-- article-image-body:02 -->

![Tramway de Saint-Étienne photographié à la station Place Jean-Jaurès en 2020](/images/articles/2026/10/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces-body-02.webp)

*Photo: [Smiley.toerist](https://commons.wikimedia.org/wiki/File:Saint-%C3%89tienne_tram_2020_2.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Les arrêts **Hôtel de Ville** et **Place Jean Jaurès** desservent les secteurs principaux du marché. Consultez les [itinéraires et informations trafic de la STAS](https://www.reseau-stas.fr/) pour choisir votre ligne et vérifier le retour, surtout les 5, 24, 25 et 31 décembre. La fermeture des chalets à 23 h le 5 décembre ne garantit pas un tram à cette heure.

En voiture, mieux vaut choisir un parking public puis terminer à pied plutôt que de chercher une place devant les chalets. Le tram peut être pratique avec une poussette: [Saint-Étienne Métropole](https://www.saint-etienne-metropole.fr/habiter-se-deplacer/deplacement-et-mobilite/en-transports-en-commun) présente les aménagements d'accessibilité de son réseau. Sur le marché, la foule et les files peuvent cependant gêner la circulation. Prévoyez une boucle courte si les enfants fatiguent.

## Avec un bébé: repas, change et pauses

La sortie se déroule principalement dehors. Prévoyez vêtements chauds, collation et solution autonome pour le repas ou le change: **les annonces municipales ne confirment ni table à langer ni micro-ondes accessibles aux visiteurs**. Une poussette peut être moins maniable lorsque les allées sont chargées; adaptez la durée à l'âge des enfants.

Pour une pause culturelle à l'abri, notre [guide du Pass 4 musées de Saint-Étienne](https://www.fam-space.fr/articles/bons-plans/pass-4-musees-a-saint-etienne-est-il-interessant-pour-une-famille/) détaille les gratuités pour les jeunes et les cas où le pass vaut réellement le coût.

## Passer la nuit à Saint-Étienne en famille

Pour prolonger la sortie en week-end, le [Residhotel St Etienne Centre sur Booking.com](https://www.booking.com/hotel/fr/residhotel-st-etienne-centre.fr.html) est situé dans le centre historique, près de l'arrêt Hôtel de Ville. Ses studios et appartements proposent une kitchenette avec réfrigérateur et micro-ondes, utile pour les repas des enfants. Choisissez un logement dont la capacité correspond à toute la famille, plutôt qu'un studio prévu pour deux, et vérifiez avant réservation la disponibilité, les conditions et la possibilité d'un lit bébé.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/index.md

---
title: "Marché de Noël de Saint-Étienne 2026 en famille: dates, horaires et accès"
subtitle: Deux places en centre-ville, une nocturne pour la Sainte-Barbe et des horaires particuliers à Noël
summary: Le marché de Noël de Saint-Étienne se tient du 21 novembre au 31 décembre 2026, places de l'Hôtel-de-Ville et Jean-Jaurès. Retrouvez les horaires, les exceptions des 5, 24, 25 et 31 décembre, l'accès en tram et les informations utiles avec des enfants.
category: evenements
location:
  city: Saint-Étienne
  department: Loire
  region: Auvergne-Rhône-Alpes
image:
  src: "/images/articles/2026/10/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces.webp"
  alt: "Chalet de décorations au marché de Noël de Saint-Étienne, photographié en 2019"
sources:
  - title: Ville de Saint-Étienne - Marché de Noël 2026, dates et horaires des chalets
    url: https://connect.saint-etienne.fr/demarche/417/4
  - title: STAS - Itinéraires, horaires et informations trafic
    url: https://www.reseau-stas.fr/
  - title: Saint-Étienne Métropole - Transports en commun et accessibilité
    url: https://www.saint-etienne-metropole.fr/habiter-se-deplacer/deplacement-et-mobilite/en-transports-en-commun
eventEndsAt: 2026-12-31
reviewAt: 2026-11-19
topic:
  key: evenements|saint-etienne|marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces|2026
  keywords:
    - marché de Noël Saint-Étienne 2026
    - marché de Noël Saint-Étienne horaires
    - Noël à Sainté avec enfants
slug: marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces
status: published
publishedAt: 2026-10-28T18:37:08.909Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Saint-Étienne
---
<!-- article-image-credit -->
*Photo: [Touam (Hervé Agnoux)](https://commons.wikimedia.org/wiki/File:No%C3%ABl-D%C3%A9co.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Le **marché de Noël de Saint-Étienne est annoncé du 21 novembre au 31 décembre 2026**, sur les **places de l'Hôtel-de-Ville et Jean-Jaurès**. Les chalets ouvrent tous les jours, mais les horaires changent pour la Sainte-Barbe, Noël et la Saint-Sylvestre. Voici ce qu'il faut savoir pour organiser une visite avec des enfants.

## Dates et horaires du marché de Noël 2026

La Ville de Saint-Étienne annonce les horaires suivants pour les chalets:

- **Du dimanche au jeudi:** de 10 h 30 à 20 h.
- **Les vendredis et samedis:** de 10 h 30 à 21 h 30.
- **Samedi 5 décembre, pour la Sainte-Barbe:** fermeture prolongée jusqu'à 23 h.
- **Jeudis 24 et 31 décembre:** fermeture anticipée à 18 h.
- **Vendredi 25 décembre:** de 14 h à 19 h, **sur la base du volontariat des exposants**. Certains chalets peuvent donc rester fermés.

Avec de jeunes enfants, une visite en journée permet de profiter des chalets sans attendre la soirée. Pour voir les illuminations, la fin d'après-midi est un compromis. Si vous venez le 5 décembre, vérifiez séparément le programme des festivités de la Sainte-Barbe: l'horaire tardif des chalets ne confirme pas à lui seul une animation particulière.

## Où se trouvent les chalets et quelles animations sont prévues ?

<!-- article-image-body:01 -->

![Vue de la place Jean-Jaurès à Saint-Étienne en juin 2025, hors marché de Noël](/images/articles/2026/10/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces-body-01.webp)

*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Place_Jean_Jaur%C3%A8s_-_Saint-%C3%89tienne_(FR42)_-_2025-06-29_-_1.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le marché occupe **deux places du centre-ville**, l'Hôtel-de-Ville et Jean-Jaurès, accessibles l'une depuis l'autre à pied. La page municipale consacrée aux chalets ne prévoit pas de billetterie pour la promenade; prévoyez toutefois un budget pour les achats et consommations.

**Au 28 octobre 2026**, cette annonce ne permet pas de confirmer les attractions précises, leurs dates ou leurs tarifs: patinoire, manèges ou rencontre avec le Père Noël ne doivent pas être considérés comme acquis sur cette seule base. Consultez le programme visiteurs de la Ville à l'approche de votre sortie.

## Accès en tram, en voiture et avec une poussette

<!-- article-image-body:02 -->

![Tramway de Saint-Étienne photographié à la station Place Jean-Jaurès en 2020](/images/articles/2026/10/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces-body-02.webp)

*Photo: [Smiley.toerist](https://commons.wikimedia.org/wiki/File:Saint-%C3%89tienne_tram_2020_2.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Les arrêts **Hôtel de Ville** et **Place Jean Jaurès** permettent de rejoindre les deux secteurs en tram. Pour choisir votre ligne selon votre point de départ et connaître les derniers passages, consultez les itinéraires et informations trafic de la **STAS**, notamment les 5, 24, 25 et 31 décembre. L'ouverture des chalets jusqu'à 23 h le 5 décembre ne signifie pas que votre tram de retour circule jusqu'à cette heure.

En voiture, mieux vaut choisir un parking public en amont et terminer à pied plutôt que de chercher à stationner juste devant les chalets. Avec une poussette, le tram est une option intéressante: Saint-Étienne Métropole décrit des aménagements d'accessibilité dans ses rames. Cela ne garantit pas pour autant des passages dégagés entre les chalets lorsque le marché est fréquenté.

## Avec un bébé: repas, change et pauses

Le marché se déroule en extérieur. Prévoyez une solution pour nourrir et changer un bébé sans dépendre d'un équipement sur place: **l'annonce municipale ne confirme ni table à langer ni micro-ondes accessible aux visiteurs**. Une poussette peut aussi être moins pratique au milieu des files; gardez un parcours court entre les deux places.

Pour prolonger la sortie à l'intérieur, notre [guide du Pass 4 musées de Saint-Étienne](https://www.fam-space.fr/articles/bons-plans/pass-4-musees-a-saint-etienne-est-il-interessant-pour-une-famille/) explique les gratuités pour les jeunes et aide à choisir une visite sans acheter inutilement un pass.

## Dormir près du marché en famille

Si vous venez de loin pour un week-end, le [Residhotel St Etienne Centre sur Booking.com](https://www.booking.com/hotel/fr/residhotel-st-etienne-centre.fr.html) est situé dans le centre historique, à proximité de l'arrêt Hôtel de Ville. Ses studios et appartements disposent d'une kitchenette avec réfrigérateur et micro-ondes, pratique pour les repas des enfants. **Privilégiez un appartement adapté au nombre de voyageurs** plutôt qu'un studio prévu pour deux; vérifiez la capacité, le lit bébé éventuel, les conditions et la disponibilité pour vos dates.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/bons-plans/pass-4-musees-a-saint-etienne-est-il-interessant-pour-une-famille/ | Pass 4 musées à Saint-Étienne: est-il intéressant pour une famille? | bons-plans | Saint-Étienne, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires et accès | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Clermont-Ferrand 2026 en famille: horaires, animations et accès | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël de Saint-Étienne 2026 en famille: dates, horaires et accès | evenements | Saint-Étienne, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/festival-tete-de-mioche-2027-a-l-horme-quels-spectacles-choisir-avec-les-enfants/ | Festival Tête de mioche 2027 à L'Horme: quels spectacles choisir avec les enfants ? | evenements | L'Horme, Loire, Auvergne-Rhône-Alpes
- /articles/voyages/charlieu-en-famille-abbaye-musees-et-balades-dans-la-loire/ | Charlieu en famille: abbaye, musées et balades dans la Loire | voyages | Charlieu, Loire, Auvergne-Rhône-Alpes
- /articles/sorties/chateau-de-boutheon-avec-des-enfants-chateau-parc-ou-billet-couple/ | Château de Bouthéon avec des enfants: château, parc ou billet couplé? | sorties | Andrézieux-Bouthéon, Loire, Auvergne-Rhône-Alpes
- /articles/activites/escape-game-du-chateau-de-la-roche-en-famille-alerte-submersion-des-10-ans/ | Escape game du Château de la Roche en famille: Alerte Submersion dès 10 ans | activites | Saint-Priest-la-Roche, Loire, Auvergne-Rhône-Alpes
- /articles/vie-pratique/cantine-et-periscolaire-a-roanne-les-demarches-avant-la-rentree-2026/ | Cantine et périscolaire à Roanne: les démarches avant la rentrée 2026 | vie-pratique | Roanne, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/carnaval-de-guyane-2027-en-famille-preparer-ses-premieres-sorties/ | Carnaval de Guyane 2027 en famille: préparer ses premières sorties | evenements | Guyane
- /articles/evenements/mondo-clowns-2027-a-marmande-dates-tarifs-et-conseils-en-famille/ | Mondo'Clowns 2027 à Marmande: dates, tarifs et conseils en famille | evenements | Marmande, Lot-et-Garonne, Nouvelle-Aquitaine
- /articles/evenements/chambly-kids-festival-2027-quatre-spectacles-pour-les-enfants-dates-et-ages/ | Chambly Kids Festival 2027: quatre spectacles pour les enfants, dates et âges | evenements | Chambly, Oise, Hauts-de-France
- /articles/evenements/festival-mini-kids-2027-aux-orres-trois-jours-pour-les-3-6-ans/ | Festival Mini Kids 2027 aux Orres, trois jours pour les 3-6 ans | evenements | Les Orres, Hautes-Alpes, Provence-Alpes-Côte d’Azur
- /articles/evenements/fete-du-citron-2027-a-menton-en-famille-que-voir-et-combien-prevoir/ | Fête du Citron 2027 à Menton en famille: que voir et combien prévoir ? | evenements | Menton, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/carnaval-de-limoux-2027-en-famille-dates-fecos-et-conseils-pratiques/ | Carnaval de Limoux 2027 en famille: dates, Fécos et conseils pratiques | evenements | Limoux, Aude, Occitanie

### Historique Radar lié

- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z
- opportunity | /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/ | 2026-10-29T11:32:05.289Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z
- opportunity | /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T18:37:09.008Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
