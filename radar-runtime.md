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
title: "Flottins d’Évian 2026: un village de Noël en bois flotté à découvrir en famille"
subtitle: Sculptures, personnages et lumières au bord du Léman, du 11 décembre 2026 au 2 janvier 2027
summary: À Évian, les Flottins mêlent sculptures en bois récupéré et rencontres imaginaires. Dates, temps forts et repères pour découvrir ce village gratuit avec des enfants.
slug: flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille
status: published
publishedAt: 2026-10-30T00:37:19+01:00
updatedAt: null
eventEndsAt: 2027-01-02
category: evenements
readingTime: 5
publicationOrigin: region
location:
  city: Évian-les-Bains
  department: Haute-Savoie
  region: Auvergne-Rhône-Alpes
topic:
  key: evenements|evian-les-bains|flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille|2026
  keywords:
    - Flottins Évian 2026
    - Fabuleux Village en famille
    - Noël Haute-Savoie
image:
  src: /images/articles/2026/10/flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille.webp
  alt: Quai Baron-de-Blonay à Évian-les-Bains, avec vue vers l'ouest du côté du lac Léman, hors festivités des Flottins
sources:
  - title: "Office de tourisme d’Évian: Le Fabuleux Village 2026"
    url: https://www.evian-tourisme.com/manifestation/le-fabuleux-village-217054/
  - title: "Théâtre de la Toupine: présentation de l’événement"
    url: https://lesflottins.com/levenement/
  - title: "Le Fabuleux Village: les rencontres avec les Flottins"
    url: https://lesflottins.com/
  - title: "Office de tourisme d’Évian: arrivée des Flottins"
    url: https://www.evian-tourisme.com/manifestation/arrivee-des-flottins-248290/
  - title: "Office de tourisme d’Évian: départ des Flottins"
    url: https://www.evian-tourisme.com/manifestation/depart-des-flottins-248289/
  - title: "Organisateur: programme du Fabuleux Village"
    url: https://lesflottins.com/programme/
  - title: "Organisateur: accès et informations pratiques"
    url: https://lesflottins.com/levenement/festival-pratique/
  - title: "Office de tourisme d’Évian: stationner et se déplacer"
    url: https://www.evian-tourisme.com/infospratiques/stationner-se-deplacer/
  - title: "Hôtel Le Littoral: situation et présentation des chambres"
    url: https://hotel-littoral-evian.fr/
affiliate:
  enabled: true
  type: travel
  destination: Évian-les-Bains
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille/index.md
  targetSha: d584b617e3ec171b7fbb8f887aab37e4c36c52ec
  targetUrl: /articles/evenements/flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille/
  decision: Choisir une visite des Flottins adaptée aux enfants, avec des repères fiables pour l'accès, les pauses, la restauration et les retrouvailles en cas de séparation.
  affiliationPotential: Conserver l'hébergement Booking.com Le Littoral pour les familles venant de loin; ne pas ajouter d'offre payante sans lien réel avec la visite gratuite.
  gsc:
    retrievedAt: 2026-11-12T03:33:45+01:00
    dataThrough: 2026-11-09
    signal: needs_query_check
    basis: "Visibilité récente : 155 impressions sur trois jours, puis 9 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-11-01
    peakEnd: 2026-11-03
    recentStart: 2026-11-07
    recentEnd: 2026-11-09
    peakImpressions: 155
    recentImpressions: 9
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Flottins Évian 2026
      - Fabuleux Village en famille
      - Noël Haute-Savoie
---

À Évian-les-Bains, au bord du lac Léman, le Fabuleux Village transforme le centre-ville en paysage de sculptures monumentales en bois flotté. Entre ces créatures étranges circulent les Flottins et les Flottines, des personnages qui racontent leurs histoires et interpellent les passants. Pour les enfants, la promenade devient une rencontre avec tout un peuple imaginaire.

L’[office de tourisme annonce l’édition 2026](https://www.evian-tourisme.com/manifestation/le-fabuleux-village-217054/) **du 11 décembre 2026 au 2 janvier 2027, tous les jours de 15h à 19h, en accès gratuit**. Cette 20e édition explore la nuit: lanternes, effets lumineux et feu doivent révéler chimères, fantômes et petites bêtes nocturnes.

## Du bois échoué aux créatures imaginaires

Les troncs et branchages transportés par les cours d’eau jusqu’au Léman finissent sur ses rivages. Des sculpteurs les assemblent pour leur donner une nouvelle existence dans les rues, comme l’explique le [Théâtre de la Toupine, à l’origine du projet](https://lesflottins.com/levenement/).

Avec les enfants, on peut chercher comment une branche devient une patte ou un morceau de tronc un visage. Nul besoin de connaître la légende pour entrer dans cet univers: les formes du bois donnent déjà matière à inventer des histoires.

Les rencontres font le reste. Selon la [présentation de l’organisateur](https://lesflottins.com/), les Flottins et les Flottines déambulent librement, racontent leurs aventures et taquinent parents et enfants. Gardez du temps pour ces échanges imprévus, qui font autant l’intérêt de la visite que les sculptures.

## Deux rendez-vous pour ouvrir et clore la fête

- **Vendredi 11 décembre 2026 à partir de 18h30:** l’[arrivée des Flottins](https://www.evian-tourisme.com/manifestation/arrivee-des-flottins-248290/) prend la forme d’une déambulation mêlant feu, musique et créatures volantes fantastiques.
- **Samedi 2 janvier 2027 à partir de 17h30:** pour leur [départ](https://www.evian-tourisme.com/manifestation/depart-des-flottins-248289/), les personnages doivent embarquer à bord de la barque historique La Savoie.

L’ouverture intéressera surtout les familles qui peuvent rester en début de soirée. Si vos enfants fatiguent tôt, privilégiez une visite dès 15h un autre jour, sans chercher à assister à un grand rendez-vous.

**Le programme détaillé reste à vérifier.** Au 12 novembre 2026, la [page de l’organisateur](https://lesflottins.com/programme/) affiche les dates de cette édition, mais conserve des contenus de 2025, notamment des indications de journées réservées aux scolaires et un ancien programme à télécharger. Ces restrictions ne peuvent pas être considérées comme confirmées pour 2026. Avant de fixer votre sortie autour d’un atelier, vérifiez sa date, les âges admis et les éventuelles modalités d’inscription dans le programme actualisé.

## Profiter du jour et des lumières

Commencer en milieu d’après-midi permet d’observer les assemblages de bois avant de découvrir leur mise en lumière au crépuscule. C’est aussi une approche plus progressive pour un enfant impressionné par les fantômes ou les figures fantastiques.

Prévoyez des vêtements chauds et des chaussures adaptées à la marche. Avec une poussette, privilégiez une promenade courte autour de la place Charles-de-Gaulle et prévoyez une halte à la Tanière plutôt que de chercher à parcourir tout le village.

## Venir au village avec des enfants

<!-- article-image-body:01 -->

![Façade du bâtiment voyageurs de la gare d'Évian-les-Bains en juin 2020](/images/articles/2026/10/flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille-body-01.webp)

*Photo: [Remontees](https://commons.wikimedia.org/wiki/File:Bv-evian-les-bains.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

En train, comptez **environ douze minutes à pied entre la gare d’Évian-les-Bains et la place Charles-de-Gaulle**. Pour réduire la marche, les [informations pratiques de l’organisateur](https://lesflottins.com/levenement/festival-pratique/) indiquent deux possibilités en bus: lignes 2 ou 3 depuis « Gare SNCF » jusqu’à « Supermarché Casino », puis quatre minutes à pied; ou lignes 1 ou 4 depuis « Anna de Noailles » (à quatre minutes de la gare) jusqu’à « Hôtel de Ville d’Évian », puis trois minutes à pied. Vérifiez les horaires et l’accessibilité du véhicule avant de partir avec une poussette.

Depuis Lausanne, la traversée en bateau prend environ 35 minutes selon l’organisateur, puis huit minutes à pied depuis l’embarcadère. Un bus peut aussi relier l’embarcadère à l’arrêt Hôtel de Ville. Vérifiez les horaires de retour avant de choisir une animation en fin de journée.

En voiture, la [page consacrée au stationnement de l’office de tourisme](https://www.evian-tourisme.com/infospratiques/stationner-se-deplacer/) rassemble les plans, les tarifs et les emplacements adaptés aux personnes à mobilité réduite. Prévoyez aussi le trajet à pied entre votre parking et le village.

## Faire une pause et se retrouver facilement

La [Tanière des Flottins](https://lesflottins.com/levenement/festival-pratique/), au **11 avenue de Narvik**, propose une petite restauration locale, sucrée et salée, avec boissons chaudes, tartines au fromage d’Abondance et guimauves grillées. L’organisateur annonce une ouverture **tous les jours de 15h à 19h** pendant le village. La Vache de Buvette, place Charles-de-Gaulle, propose notamment du chocolat chaud. Le Repaire des Gourmands, sur le parvis du Palais Lumière, réunit d’autres stands de restauration; vérifiez leurs jours et horaires précis, car la page pratique présente encore des dates et exceptions qui peuvent relever d’une édition antérieure.

Avant de vous séparer dans la foule, convenez d’un point de rendez-vous avec les enfants assez grands. L’organisateur recommande un **bracelet portant le nom de l’enfant et un numéro de téléphone**. Si un enfant se perd, ou si vous trouvez un enfant seul, adressez-vous à l’équipe **place Charles-de-Gaulle, à l’Antre des Flottins ou à la Tanière**.

## Rester une nuit pour profiter de la soirée

Si vous venez de loin, dormir dans le centre permet de faire une pause avant les animations et de rejoindre votre hébergement à pied après la promenade.

L’[hôtel Le Littoral, dans le centre face au lac](https://www.booking.com/hotel/fr/le-littoral.fr.html), constitue une piste à examiner. Renseignez vos dates, le nombre d’enfants et leur âge pour vérifier les chambres effectivement proposées. Regardez notamment si l’offre prévoit une ou plusieurs chambres, quels couchages sont inclus et quelles conditions d’annulation s’appliquent.

Pour compléter le séjour, notre [guide d’Évian-les-Bains en famille](/articles/voyages/evian-les-bains-en-famille-pendant-3-jours-lac-balades-et-activites-faciles/) donne des idées de promenades sur les quais et de visites culturelles. Il comprend aussi des activités estivales: vérifiez les ouvertures hivernales avant de reprendre son itinéraire.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille/index.md

---
title: "Flottins d’Évian 2026: un village de Noël en bois flotté à découvrir en famille"
subtitle: Sculptures, personnages et lumières au bord du Léman, du 11 décembre 2026 au 2 janvier 2027
summary: À Évian, les Flottins mêlent sculptures en bois récupéré et rencontres imaginaires. Dates, temps forts et repères pour découvrir ce village gratuit avec des enfants.
slug: flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille
status: published
publishedAt: 2026-10-30T00:37:19+01:00
updatedAt: null
eventEndsAt: 2027-01-02
category: evenements
readingTime: 4
publicationOrigin: region
location:
  city: Évian-les-Bains
  department: Haute-Savoie
  region: Auvergne-Rhône-Alpes
topic:
  key: evenements|evian-les-bains|flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille|2026
  keywords:
    - Flottins Évian 2026
    - Fabuleux Village en famille
    - Noël Haute-Savoie
image:
  src: "/images/articles/2026/10/flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille.webp"
  alt: "Quai Baron-de-Blonay à Évian-les-Bains, avec vue vers l'ouest du côté du lac Léman, hors festivités des Flottins"
sources:
  - title: "Office de tourisme d’Évian: Le Fabuleux Village 2026"
    url: https://www.evian-tourisme.com/manifestation/le-fabuleux-village-217054/
  - title: "Théâtre de la Toupine: présentation de l’événement"
    url: https://lesflottins.com/levenement/
  - title: "Le Fabuleux Village: les rencontres avec les Flottins"
    url: https://lesflottins.com/
  - title: "Office de tourisme d’Évian: arrivée des Flottins"
    url: https://www.evian-tourisme.com/manifestation/arrivee-des-flottins-248290/
  - title: "Office de tourisme d’Évian: départ des Flottins"
    url: https://www.evian-tourisme.com/manifestation/depart-des-flottins-248289/
  - title: "Organisateur: programme du Fabuleux Village"
    url: https://lesflottins.com/programme/
  - title: "Organisateur: accès et informations pratiques"
    url: https://lesflottins.com/levenement/festival-pratique/
  - title: "Office de tourisme d’Évian: stationner et se déplacer"
    url: https://www.evian-tourisme.com/infospratiques/stationner-se-deplacer/
  - title: "Hôtel Le Littoral: situation et présentation des chambres"
    url: https://hotel-littoral-evian.fr/
affiliate:
  enabled: true
  type: travel
  destination: Évian-les-Bains
---

À Évian-les-Bains, au bord du lac Léman, le Fabuleux Village transforme le centre-ville en paysage de sculptures monumentales en bois flotté. Entre ces créatures étranges circulent les Flottins et les Flottines, des personnages qui racontent leurs histoires et interpellent les passants. Pour les enfants, la promenade devient une rencontre avec tout un peuple imaginaire.

L’[office de tourisme annonce l’édition 2026](https://www.evian-tourisme.com/manifestation/le-fabuleux-village-217054/) **du 11 décembre 2026 au 2 janvier 2027, tous les jours de 15h à 19h, en accès gratuit**. Cette 20e édition explore la nuit: lanternes, effets lumineux et feu doivent révéler chimères, fantômes et petites bêtes nocturnes.

## Du bois échoué aux créatures imaginaires

Les troncs et branchages transportés par les cours d’eau jusqu’au Léman finissent sur ses rivages. Des sculpteurs les assemblent pour leur donner une nouvelle existence dans les rues, comme l’explique le [Théâtre de la Toupine, à l’origine du projet](https://lesflottins.com/levenement/).

Avec les enfants, on peut chercher comment une branche devient une patte ou un morceau de tronc un visage. Nul besoin de connaître la légende pour entrer dans cet univers: les formes du bois donnent déjà matière à inventer des histoires.

Les rencontres font le reste. Selon la [présentation de l’organisateur](https://lesflottins.com/), les Flottins et les Flottines déambulent librement, racontent leurs aventures et taquinent parents et enfants. Gardez du temps pour ces échanges imprévus, qui font autant l’intérêt de la visite que les sculptures.

## Deux rendez-vous pour ouvrir et clore la fête

- **Vendredi 11 décembre 2026 à partir de 18h30:** l’[arrivée des Flottins](https://www.evian-tourisme.com/manifestation/arrivee-des-flottins-248290/) prend la forme d’une déambulation mêlant feu, musique et créatures volantes fantastiques.
- **Samedi 2 janvier 2027 à partir de 17h30:** pour leur [départ](https://www.evian-tourisme.com/manifestation/depart-des-flottins-248289/), les personnages doivent embarquer à bord de la barque historique La Savoie.

L’ouverture intéressera surtout les familles qui peuvent rester en début de soirée. Si vos enfants fatiguent tôt, privilégiez une visite dès 15h un autre jour, sans chercher à assister à un grand rendez-vous.

**Le programme détaillé reste à vérifier.** Au 29 octobre 2026, la [page de l’organisateur](https://lesflottins.com/programme/) affiche les dates de cette édition, mais conserve des contenus de 2025, notamment des indications de journées réservées aux scolaires et un ancien programme à télécharger. Ces restrictions ne peuvent pas être considérées comme confirmées pour 2026. Avant de fixer votre sortie autour d’un atelier, vérifiez sa date, les âges admis et les éventuelles modalités d’inscription dans le programme actualisé.

## Profiter du jour et des lumières

Commencer en milieu d’après-midi permet d’observer les assemblages de bois avant de découvrir leur mise en lumière au crépuscule. C’est aussi une approche plus progressive pour un enfant impressionné par les fantômes ou les figures fantastiques.

Prévoyez des vêtements chauds, des chaussures adaptées à la marche et une pause au chaud si vous souhaitez prolonger la sortie jusqu’en soirée. Une promenade entrecoupée d’un goûter sera plus facile à adapter qu’un parcours où l’on cherche à tout voir.

## Venir au village avec des enfants

<!-- article-image-body:01 -->

![Façade du bâtiment voyageurs de la gare d'Évian-les-Bains en juin 2020](/images/articles/2026/10/flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille-body-01.webp)

*Photo: [Remontees](https://commons.wikimedia.org/wiki/File:Bv-evian-les-bains.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

En train, l’organisateur indique **environ douze minutes à pied entre la gare d’Évian-les-Bains et la place Charles-de-Gaulle**. Ses [informations pratiques](https://lesflottins.com/levenement/festival-pratique/) présentent aussi l’accès en bateau depuis Lausanne. Vérifiez les horaires de retour avant de choisir une animation en fin de journée.

En voiture, la [page consacrée au stationnement de l’office de tourisme](https://www.evian-tourisme.com/infospratiques/stationner-se-deplacer/) rassemble les plans, les tarifs et les emplacements adaptés aux personnes à mobilité réduite. Prévoyez aussi le trajet à pied entre votre parking et le village.

## Rester une nuit pour profiter de la soirée

Si vous venez de loin, dormir dans le centre permet de faire une pause avant les animations et de rejoindre votre hébergement à pied après la promenade.

L’[hôtel Le Littoral, dans le centre face au lac](https://www.booking.com/hotel/fr/le-littoral.fr.html), constitue une piste à examiner. Renseignez vos dates, le nombre d’enfants et leur âge pour vérifier les chambres effectivement proposées. Regardez notamment si l’offre prévoit une ou plusieurs chambres, quels couchages sont inclus et quelles conditions d’annulation s’appliquent.

Pour compléter le séjour, notre [guide d’Évian-les-Bains en famille](/articles/voyages/evian-les-bains-en-famille-pendant-3-jours-lac-balades-et-activites-faciles/) donne des idées de promenades sur les quais et de visites culturelles. Il comprend aussi des activités estivales: vérifiez les ouvertures hivernales avant de reprendre son itinéraire.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/voyages/evian-les-bains-en-famille-pendant-3-jours-lac-balades-et-activites-faciles/ | Évian-les-Bains en famille pendant 3 jours: lac, balades et activités faciles | voyages | Évian-les-Bains, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/maison/renovation-energetique-en-haute-savoie-jusqu-a-3-000-d-aide-departementale/ | Rénovation énergétique en Haute-Savoie: jusqu'à 3 000 € d'aide départementale | maison | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/cuisine/ferme-du-petit-mont-a-bellevaux-en-famille-quelle-formule-choisir/ | Ferme du Petit Mont à Bellevaux en famille: quelle formule choisir ? | cuisine | Bellevaux, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-au-bonheur-des-momes-2026-en-famille/ | Au Bonheur des Mômes 2026: pass, spectacles et journée au Grand-Bornand | evenements | Le Grand-Bornand, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit/ | LAEP autour d'Annecy: trois lieux pour jouer avec son tout-petit | parentalite | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/noel-2026-a-quimper-en-famille-village-concert-ou-ateliers-gratuits/ | Noël 2026 à Quimper en famille: village, concert et animations gratuites | evenements | Quimper, Finistère, Bretagne
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille/ | Flottins d’Évian 2026: un village de Noël en bois flotté à découvrir en famille | evenements | Évian-les-Bains, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/bons-plans/chamonix-en-famille-sans-voiture-train-gratuit-et-bus-a-prix-reduit-avec-la-carte-d-hote/ | Chamonix en famille sans voiture: train gratuit et bus à prix réduit avec la carte d’hôte | bons-plans | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | Noël des Alpes 2026 à Annecy en famille: marché, patinoire et illuminations | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | ALFest 2026 à Annecy en famille: horaires, jeux et braderie | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/vie-pratique/bus-a-annecy-avec-des-enfants-quel-ticket-choisir-et-comment-eviter-les-galeres/ | Bus à Annecy avec des enfants: quel ticket choisir et comment éviter les galères | vie-pratique | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/activites/mer-de-glace-avec-des-enfants-faut-il-descendre-jusqu-a-la-grotte/ | Mer de Glace avec des enfants: faut-il descendre jusqu'à la grotte? | activites | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/court-circuit-2026-a-annecy-en-famille-spectacles-tarifs-et-conseils/ | Court Circuit 2026 à Annecy en famille: spectacles, tarifs et conseils | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/fete-du-lac-annecy-2026-en-famille/ | Fête du lac d’Annecy 2026: préparer la soirée avec des enfants | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/chambly-kids-festival-2027-quatre-spectacles-pour-les-enfants-dates-et-ages/ | Chambly Kids Festival 2027: quatre spectacles pour les enfants, dates et âges | evenements | Chambly, Oise, Hauts-de-France
- /articles/evenements/festival-tete-de-mioche-2027-a-l-horme-quels-spectacles-choisir-avec-les-enfants/ | Festival Tête de mioche 2027 à L'Horme: quels spectacles choisir avec les enfants ? | evenements | L'Horme, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/festival-mini-kids-2027-aux-orres-trois-jours-pour-les-3-6-ans/ | Festival Mini Kids 2027 aux Orres, trois jours pour les 3-6 ans | evenements | Les Orres, Hautes-Alpes, Provence-Alpes-Côte d’Azur
- /articles/evenements/fete-du-citron-2027-a-menton-en-famille-que-voir-et-combien-prevoir/ | Fête du Citron 2027 à Menton en famille: que voir et combien prévoir ? | evenements | Menton, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/carnaval-de-limoux-2027-en-famille-dates-fecos-et-conseils-pratiques/ | Carnaval de Limoux 2027 en famille: dates, Fécos et conseils pratiques | evenements | Limoux, Aude, Occitanie

### Historique Radar lié

- opportunity | /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | 2026-10-20T15:29:27.541Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- refresh | /articles/parentalite/laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit/ | 2026-11-08T16:33:51.043Z
- opportunity | /articles/evenements/noel-2026-a-quimper-en-famille-village-concert-ou-ateliers-gratuits/ | 2026-11-01T18:35:45.871Z
- opportunity | /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | 2026-10-29T05:28:53.475Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
