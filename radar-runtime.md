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
title: "Marché de Noël de Saint-Étienne 2026 en famille: dates, horaires et accès"
subtitle: Deux places en centre-ville, une nocturne pour la Sainte-Barbe et des horaires particuliers à Noël
summary: Le marché de Noël de Saint-Étienne se tient du 21 novembre au 31 décembre 2026, places de l'Hôtel-de-Ville et Jean-Jaurès. Retrouvez les horaires, les exceptions des 5, 24, 25 et 31 décembre, l'accès en tram et les informations utiles avec des enfants.
category: evenements
location:
  city: Saint-Étienne
  department: Loire
  region: Auvergne-Rhône-Alpes
image:
  src: /images/articles/2026/10/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces.webp
  alt: Chalet de décorations au marché de Noël de Saint-Étienne, photographié en 2019
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
radar:
  schemaVersion: 1
  phase: 1
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

## Mission retenue
Actualiser le guide du marché de Noël 2026 de Saint-Étienne pour intégrer le troisième espace officiel, place Dorian, et ses jours d'ouverture distincts.

## Pourquoi cette mission
Le snapshot GSC passe de 60 à 12 impressions sur deux périodes de trois jours, sans cause SEO démontrée. Indépendamment de cette baisse, l'article affirme que le marché occupe deux places et que les attractions 2026 ne sont pas confirmées. Le magazine officiel de la Ville annonce désormais les chalets créatifs de la place Dorian et la grande roue.

## Décision du lecteur
Savoir où aller et quel jour venir pour profiter des chalets, de la grande roue et du marché artisanal sans se déplacer à Dorian un jour de fermeture.

## Faits à traiter
La Ville confirme le marché principal du 21 novembre au 31 décembre, place de l'Hôtel-de-Ville, avec grande roue. Les chalets de créateurs et producteurs place Dorian ouvrent les mercredis, samedis et dimanches du 21 novembre au 23 décembre. Vérifier les détails et distinguer les horaires de Dorian de ceux des chalets principaux; ne pas annoncer les tarifs d'attractions non confirmés. Préserver les exceptions des 5, 24, 25 et 31 décembre, accès STAS, poussettes, repas bébé, micro-ondes et table à langer non confirmés, photos/licences/crédits, liens internes et hébergement existant.

## Sources de départ
- Ville de Saint-Étienne, magazine municipal de novembre 2026: https://www.saint-etienne.fr/sites/default/files/media/downloads/116-2026-mag_vse_web.pdf
- Ville de Saint-Étienne, horaires des chalets: https://connect.saint-etienne.fr/demarche/417/4

## Affiliation
Conserver le lien Booking.com du Residhotel St Etienne Centre, avec vérification de la capacité familiale.

## Continuations internes
Conserver le lien vers le guide du Pass 4 musées pour une visite à l'abri. Ne pas déduire du programme de l'année précédente les tarifs ou animations 2026.

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

- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/bons-plans/pass-4-musees-a-saint-etienne-est-il-interessant-pour-une-famille/ | Pass 4 musées à Saint-Étienne: est-il intéressant pour une famille? | bons-plans | Saint-Étienne, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires et accès | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Clermont-Ferrand 2026 en famille: horaires, animations et accès | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/ | Noël à Trévarez 2026 en famille: dates, horaires et réservation | evenements | Saint-Goazec, Finistère, Bretagne
- /articles/evenements/noel-d-autrefois-2026-au-musee-de-plein-air-quel-jour-venir-en-famille/ | Noël d’autrefois 2026 à Villeneuve-d’Ascq: dates, ateliers et accès en famille | evenements | Villeneuve-d'Ascq, Nord, Hauts-de-France
- /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | Noël à Fontevraud 2026: patinoire, marché, dates et tarifs en famille | evenements | Fontevraud-l'Abbaye, Maine-et-Loire, Pays de la Loire
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

- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- opportunity | /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/ | 2026-10-29T11:32:05.289Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T18:37:09.008Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | 2026-10-28T01:34:03.741Z
- opportunity | /articles/evenements/noel-d-autrefois-2026-au-musee-de-plein-air-quel-jour-venir-en-famille/ | 2026-10-29T17:29:29.382Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
