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
title: "Marché de Noël d'Avignon 2026 en famille: horaires, Père Noël et animations"
subtitle: "Place de l'Horloge: choisir sa date, rejoindre les chalets et profiter des fêtes avec les enfants"
summary: Du 27 novembre 2026 au 2 janvier 2027, le marché de Noël d'Avignon accueille gratuitement les familles place de l'Horloge. Horaires, Père Noël, jeux en bois, autres animations et accès.
category: evenements
location:
  city: Avignon
  department: Vaucluse
  region: Provence-Alpes-Côte d’Azur
image:
  src: /images/articles/2026/10/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces.webp
  alt: Chalets du marché de Noël sur la place de l'Horloge à Avignon, photographiés en 2010
sources:
  - title: Avignon Tourisme - Le marché de Noël 2026
    url: https://avignon-tourisme.com/offres/le-marche-de-noel-avignon-fr-5191837/
  - title: Ville d'Avignon - Avignon fête Noël
    url: https://www.avignon.fr/toutes-les-actualites/actualite/avignon-fete-noel-le-marche-retrouve-la-place-de-lhorloge
  - title: Ville d'Avignon - Noël des enfants
    url: https://www.avignon.fr/noel-a-avignon/noel-des-enfants
  - title: Ville d'Avignon - Programme de Noël
    url: https://www.avignon.fr/noel-a-avignon
  - title: Avignon Tourisme - Où se garer à Avignon
    url: https://avignon-tourisme.com/informations-pratiques/ou-se-garer-a-avignon/
  - title: Avignon Tourisme - Gare Avignon Centre
    url: https://avignon-tourisme.com/offres/avignon-gare-centre-avignon-fr-4254665/
eventEndsAt: 2027-01-02
reviewAt: 2026-11-25
topic:
  key: evenements|avignon|marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces|2026
  keywords:
    - marché de Noël Avignon 2026
    - Noël Avignon place de l'Horloge
    - marché de Noël des commerçants Avignon horaires
slug: marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces
status: published
publishedAt: 2026-10-28T15:29:23.280Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Avignon
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/index.md
  targetSha: 296b307973ecb0605f4bbf42d97d4760bb240243
  targetUrl: /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/
  decision: Choisir une date et un parcours de Noël à Avignon avec les enfants en distinguant le marché gratuit des autres animations, leurs lieux et leurs éventuels tarifs.
  affiliationPotential: Conserver l'hébergement ApartHotel Sainte-Marthe sur Booking.com, utile pour un week-end; ne pas ajouter de billet partenaire sans offre vérifiée.
  gsc:
    retrievedAt: 2026-11-17T04:29:30+01:00
    dataThrough: 2026-11-14
    signal: needs_query_check
    basis: "Visibilité récente : 24 impressions sur trois jours, puis 2 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-29
    peakEnd: 2026-10-31
    recentStart: 2026-11-12
    recentEnd: 2026-11-14
    peakImpressions: 24
    recentImpressions: 2
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - marché de Noël Avignon 2026
      - Noël Avignon place de l'Horloge
      - marché de Noël des commerçants Avignon horaires
---

Le **marché de Noël d'Avignon** revient **place de l'Horloge du vendredi 27 novembre 2026 au samedi 2 janvier 2027**. L'entrée est gratuite: les familles peuvent découvrir les chalets sans billet. Cette année, le Père Noël et des animations sont annoncés, tandis que d'autres attractions se déroulent ailleurs dans le centre-ville. Voici comment choisir votre date sans confondre les différents lieux.

## Quand venir au marché de Noël ?

Le **vendredi 27 novembre**, ouverture exceptionnelle **de 17 h à 21 h**. Du **28 novembre au 2 janvier**, les chalets ouvrent **de 11 h à 20 h du dimanche au jeudi** et **de 11 h à 21 h les vendredis et samedis**, selon [Avignon Tourisme](https://avignon-tourisme.com/offres/le-marche-de-noel-avignon-fr-5191837/).

La Ville lance ses festivités le **28 novembre**, avec les illuminations à **18 h**. Son programme de Noël se poursuit jusqu'au **3 janvier 2027**, soit un jour après la fermeture du marché. Les horaires peuvent être modifiés: vérifiez la fiche officielle avant de partir, notamment les jours fériés.

## Chalets, Père Noël et jeux en bois place de l'Horloge

Organisé par les commerçants et artisans, le marché rassemble des **chalets en bois**, des idées de cadeaux, des produits régionaux, des spécialités gourmandes, des bijoux, des tissus et des jouets en bois. Un espace de restauration permet de faire une pause sur place.

Le **Père Noël accueille les enfants dans son chalet les mercredis, samedis et dimanches ainsi que pendant les vacances scolaires**. Une photo souvenir est proposée. L'organisateur ne précise pas d'heures de présence: ne promettez pas une rencontre à une heure particulière.

Pour une sortie centrée sur une activité, les **mercredis 9, 16 et 23 décembre, de 15 h à 17 h 30**, des **jeux en bois avec animateur** sont prévus sur le marché: puissance 4 géant, mikado, dominos et autres jeux. Le **2 décembre, de 15 h à 17 h 30**, un artiste en roller et une artiste échassière sont annoncés. Le programme comprend également des musiciens et des démonstrations artisanales à certaines dates. Consultez [l'agenda détaillé du marché](https://avignon-tourisme.com/offres/le-marche-de-noel-avignon-fr-5191837/) pour choisir votre visite.

## Quelles autres animations de Noël avec les enfants ?

Le **samedi 19 décembre à 17 h 30**, une **grande parade de Noël traverse le centre-ville**. Ce rendez-vous municipal n'est pas une animation limitée aux chalets de la place de l'Horloge.

Le [programme de Noël de la Ville](https://www.avignon.fr/noel-a-avignon/noel-des-enfants) permet aussi de compléter la promenade:

- **Place du Palais des Papes:** le Palais des Glaces, du 28 novembre au 3 janvier, propose un parcours de sculptures de glace. Ne le confondez pas avec une activité gratuite du marché; vérifiez les conditions et tarifs avant de vous y rendre.
- **Places Pie et Saint-Jean-le-Vieux:** « Place Pie en folie » rassemble manèges, attractions et animations. Les manèges peuvent être payants; le programme annonce des tickets de réduction chez des commerçants participants.
- **Place des Corps-Saints et église des Célestins:** crèche provençale de plus de 600 santons, ateliers créatifs gratuits et mini-ferme.
- **Les 9, 12, 16 et 19 décembre:** un **petit train de Noël gratuit** dessert plusieurs places du centre-ville. Vérifiez son circuit et ses horaires dans le programme municipal.

Pour une première visite avec de jeunes enfants, mieux vaut choisir **le marché et une seule autre animation** plutôt que multiplier les trajets dans la foule.

## Rejoindre la place de l'Horloge

<!-- article-image-body:01 -->

![Façade de la gare d'Avignon-Centre photographiée en avril 2008](/images/articles/2026/10/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces-body-01.webp)

<!-- /article-image-body:01 -->

**En train:** descendez à **Avignon-Centre**, boulevard Saint-Roch, et non à Avignon TGV. La gare Centre est au bord du centre historique. Passez par la porte de la République et remontez la rue de la République vers la place de l'Horloge. Le trajet se fait à pied; prévoyez une marge avec de jeunes enfants.

**En voiture, au plus près:** le **parking du Palais des Papes** est payant, ouvert 24 h/24 et limité aux véhicules de **1,90 m de hauteur**. Il se trouve près de la place de l'Horloge. Avec une poussette, utilisez la sortie piétonne **de plain-pied rue de la Juiverie**; la sortie place du Palais comporte des escaliers ou des ascenseurs. Les tarifs sont indiqués dans le [guide officiel du stationnement](https://avignon-tourisme.com/informations-pratiques/ou-se-garer-a-avignon/).

**Pour stationner gratuitement:** le **P+R Italiens**, avenue des Italiens, est desservi par la navette gratuite CityZen Italiens. Le **P+R Piot**, route de l'Islon, est relié gratuitement à la porte de l'Oulle par la navette P1. Dans les deux cas, il reste une marche jusqu'au marché. Vérifiez les horaires de la navette pour le retour, particulièrement après la tombée de la nuit.

## Visiter le marché avec une poussette

<!-- article-image-body:02 -->

![Place de l'Horloge à Avignon avec la mairie et l'opéra, photographiée hors marché de Noël en janvier 2010](/images/articles/2026/10/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces-body-02.webp)

<!-- /article-image-body:02 -->

La visite se fait à pied dans le centre ancien. Autour des chalets, l'affluence peut ralentir la circulation avec une poussette: prévoyez un parcours souple et la possibilité de vous éloigner pour une pause.

Pour un bébé, emportez de quoi le changer, le nourrir et le protéger du froid. **La fiche du marché ne garantit ni espace de change ni équipement pour réchauffer un repas ou un biberon.** Si vous ajoutez une visite du Palais des Papes, consultez notre [guide d'Avignon avec un bébé](https://www.fam-space.fr/articles/parentalite/premier-week-end-a-avignon-avec-un-bebe-ou-dormir-et-quoi-prevoir/): il détaille notamment les contraintes de poussette dans ce monument.

Les habitants d'Avignon et de Montfavet qui souhaitent prolonger leur sortie peuvent également consulter notre [guide de la gratuité du Palais des Papes et du pont d'Avignon le week-end](https://www.fam-space.fr/articles/bons-plans/avignonnais-palais-des-papes-et-pont-gratuits-le-week-end/), avec les justificatifs nécessaires.

## Dormir à Avignon pour le week-end

Si vous transformez le marché en escapade, l'[ApartHotel Sainte-Marthe sur Booking.com](https://www.booking.com/hotel/fr/ra-c-sidence-sainte-marthe.fr.html) propose des logements de plusieurs capacités, avec kitchenette, réfrigérateur et micro-ondes, utiles pour préparer les repas des enfants. L'établissement se trouve près du centre historique, mais pas directement sur la place de l'Horloge. Vérifiez la capacité du logement choisi, le trajet avec une poussette, les équipements bébé et les conditions de réservation pour vos dates.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/index.md

---
title: "Marché de Noël d'Avignon 2026 en famille: horaires et accès"
subtitle: "Place de l'Horloge: dates, chalets, parkings et trajet avec une poussette"
summary: Du 27 novembre 2026 au 2 janvier 2027, le marché de Noël des commerçants d'Avignon est gratuit. Horaires, accès depuis la gare, parkings et conseils utiles avec des enfants.
category: evenements
location:
  city: Avignon
  department: Vaucluse
  region: Provence-Alpes-Côte d’Azur
image:
  src: "/images/articles/2026/10/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces.webp"
  alt: "Chalets du marché de Noël sur la place de l'Horloge à Avignon, photographiés en 2010"
sources:
  - title: Avignon Tourisme - Marché de Noël des commerçants 2026
    url: https://avignon-tourisme.com/offres/marche-de-noel-des-commercants-avignon-fr-5191837/
  - title: Avignon Tourisme - Où se garer à Avignon
    url: https://avignon-tourisme.com/informations-pratiques/ou-se-garer-a-avignon/
  - title: Avignon Tourisme - Gare Avignon Centre
    url: https://avignon-tourisme.com/offres/avignon-gare-centre-avignon-fr-4254665/
eventEndsAt: 2027-01-02
reviewAt: 2026-11-25
topic:
  key: evenements|avignon|marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces|2026
  keywords:
    - marché de Noël Avignon 2026
    - Noël Avignon place de l'Horloge
    - marché de Noël des commerçants Avignon horaires
slug: marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces
status: published
publishedAt: 2026-10-28T15:29:23.280Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Avignon
---

Le **marché de Noël des commerçants d'Avignon** se tient **place de l'Horloge du vendredi 27 novembre 2026 au samedi 2 janvier 2027**. L'entrée est gratuite: pas besoin de billet pour parcourir les chalets avec les enfants. Voici les horaires et les accès à connaître pour organiser la visite.

## Dates et horaires du marché

Le marché ouvre **de 11 h à 20 h du dimanche au jeudi** et **de 11 h à 21 h les vendredis et samedis**, selon la fiche 2026 d'Avignon Tourisme.

Pour une famille avec de jeunes enfants, le début d'après-midi laisse du temps pour découvrir les chalets avant la soirée. Si vous préférez les lumières après la tombée de la nuit, pensez au froid et au retour. Les horaires pouvant évoluer pendant les fêtes, revérifiez la fiche officielle dans les sources avant le déplacement.

## Quels chalets et quelles animations ?

Organisé par la Fédération des commerçants et artisans de la ville, le marché réunit des **chalets en bois** proposant notamment des produits régionaux, des spécialités gastronomiques, des bijoux, des tissus et des **jouets en bois**. On y vient pour se promener, goûter des spécialités et chercher des cadeaux.

La fiche officielle de ce marché ne confirme pas de patinoire, de rencontre avec le Père Noël ou de spectacle sur la place de l'Horloge. Ces éventuelles animations relèvent d'un programme distinct, à vérifier avant de les annoncer aux enfants.

## Rejoindre la place de l'Horloge

<!-- article-image-body:01 -->

![Façade de la gare d'Avignon-Centre photographiée en avril 2008](/images/articles/2026/10/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces-body-01.webp)

<!-- /article-image-body:01 -->

**En train:** descendez à **Avignon-Centre**, boulevard Saint-Roch, et non à Avignon TGV. La gare Centre est au bord du centre historique. Passez par la porte de la République et remontez la rue de la République vers la place de l'Horloge. Le trajet se fait à pied; prévoyez une marge avec de jeunes enfants.

**En voiture, au plus près:** le **parking du Palais des Papes** est payant, ouvert 24 h/24 et limité aux véhicules de **1,90 m de hauteur**. Il se trouve près de la place de l'Horloge. Avec une poussette, utilisez la sortie piétonne **de plain-pied rue de la Juiverie**; la sortie place du Palais comporte des escaliers ou des ascenseurs. Les tarifs du parking sont indiqués dans le guide officiel du stationnement.

**Pour stationner gratuitement:** le **P+R Italiens**, avenue des Italiens, est desservi par la navette gratuite CityZen Italiens. Le **P+R Piot**, route de l'Islon, est relié gratuitement à la porte de l'Oulle par la navette P1. Dans les deux cas, il reste une marche jusqu'au marché. Vérifiez les horaires de la navette pour le retour, particulièrement après la tombée de la nuit.

## Visiter le marché avec une poussette

<!-- article-image-body:02 -->

![Place de l'Horloge à Avignon avec la mairie et l'opéra, photographiée hors marché de Noël en janvier 2010](/images/articles/2026/10/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces-body-02.webp)

<!-- /article-image-body:02 -->

La visite se fait à pied dans le centre ancien. Autour des chalets, l'affluence peut ralentir la circulation avec une poussette: prévoyez un parcours souple et la possibilité de vous éloigner pour une pause.

Pour un bébé, emportez de quoi le changer, le nourrir et le protéger du froid. **La fiche du marché ne garantit ni espace de change ni équipement pour réchauffer un repas ou un biberon.** Si vous ajoutez une visite du Palais des Papes, consultez notre [guide d'Avignon avec un bébé](https://www.fam-space.fr/articles/parentalite/premier-week-end-a-avignon-avec-un-bebe-ou-dormir-et-quoi-prevoir/): il détaille notamment les contraintes de poussette dans ce monument.

Les habitants d'Avignon et de Montfavet qui souhaitent prolonger leur sortie peuvent également consulter notre [guide de la gratuité du Palais des Papes et du pont d'Avignon le week-end](https://www.fam-space.fr/articles/bons-plans/avignonnais-palais-des-papes-et-pont-gratuits-le-week-end/), avec les justificatifs nécessaires.

## Dormir à Avignon pour le week-end

Si vous transformez le marché en escapade, l'[ApartHotel Sainte-Marthe sur Booking.com](https://www.booking.com/hotel/fr/ra-c-sidence-sainte-marthe.fr.html) propose des logements de plusieurs capacités, avec kitchenette, réfrigérateur et micro-ondes, utiles pour préparer les repas des enfants. L'établissement se trouve près du centre historique, mais pas directement sur la place de l'Horloge. Vérifiez la capacité du logement choisi, le trajet avec une poussette, les équipements bébé et les conditions de réservation pour vos dates.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Clermont-Ferrand 2026 en famille: horaires, animations et accès | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | Noël 2026 à Toulon en famille: marché, patinoire et horaires | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/parentalite/premier-week-end-a-avignon-avec-un-bebe-ou-dormir-et-quoi-prevoir/ | Avignon avec un bébé: poussette, Palais des Papes et où dormir | parentalite | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires et accès | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/halloween-a-avignon-une-visite-familiale-pour-decouvrir-l-archeologie-funeraire/ | Halloween à Avignon: un atelier familial pour découvrir l'archéologie funéraire | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/avignonnais-palais-des-papes-et-pont-gratuits-le-week-end/ | Avignonnais: Palais des Papes et Pont gratuits le week-end | bons-plans | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/sorties/palais-roure-avignon-famille-2026/ | Palais du Roure à Avignon en famille: retour sur les rendez-vous gratuits d'août 2026 | sorties | Avignon, Vaucluse, Provence-Alpes-Côte d'Azur
- /articles/cuisine/petit-epeautre-du-ventoux-quatre-idees-pour-le-cuisiner-en-famille/ | Petit épeautre du Ventoux: quatre idées pour le cuisiner en famille | cuisine | Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/maison/logement-mal-isole-dans-le-vaucluse-comment-gagner-en-confort-ete-comme-hiver/ | Logement mal isolé dans le Vaucluse: comment gagner en confort été comme hiver ? | maison | Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/vie-pratique/veloroute-du-calavon-avec-des-enfants-quelle-balade-choisir/ | Véloroute du Calavon avec des enfants: quelle balade choisir ? | vie-pratique | Apt, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | Halloween 2026 au Parc Spirou: billets, nocturnes Naruto et maison hantée | evenements | Monteux, Vaucluse, Provence-Alpes-Côte d'Azur
- /articles/activites/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre/ | Grottes de Thouzon avec des enfants: préparer la visite sous terre | activites | Le Thor, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/voyages/orange-avec-des-enfants-ou-dormir-pour-tout-faire-a-pied/ | Orange avec des enfants: où dormir pour tout faire à pied | voyages | Orange, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/carnaval-de-guadeloupe-2027-preparer-une-premiere-sortie-avec-ses-enfants/ | Carnaval de Guadeloupe 2027: préparer une première sortie avec ses enfants | evenements | Guadeloupe
- /articles/evenements/niepce-et-apres-une-exposition-photo-a-decouvrir-en-famille-a-chalon-sur-saone/ | Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône | evenements | Chalon-sur-Saône, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-puy-du-fou-en-famille-spectacles-et-visite-en-hiver/ | Noël 2026 au Puy du Fou en famille: spectacles et visite en hiver | evenements | Les Epesses, Vendée, Pays de la Loire
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes

### Historique Radar lié

- refresh | /articles/activites/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre/ | 2026-11-10T09:32:01.095Z
- opportunity | /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | 2026-10-12T17:34:53.933Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z
- opportunity | /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/ | 2026-10-29T11:32:05.289Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | 2026-10-31T10:28:17.432Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
