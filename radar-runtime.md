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
title: "Parc Phoenix à Nice en famille: serre tropicale, animaux et jeux"
subtitle: Deux heures de découverte ou une demi-journée avec pique-nique, au rythme des enfants
summary: "Serre tropicale, animaux, jardins et jeux: nos conseils pour visiter le Parc Phoenix à Nice avec des enfants, prévoir les pauses et venir en tramway."
slug: parc-phoenix-a-nice-en-famille-serre-tropicale-animaux-et-jeux
status: published
publishedAt: 2026-11-15T00:25:33+01:00
updatedAt: null
category: activites
readingTime: 4
publicationOrigin: region
location:
  city: Nice
  department: Alpes-Maritimes
  region: Provence-Alpes-Côte d’Azur
topic:
  key: activites|nice|parc-phoenix-a-nice-en-famille-serre-tropicale-animaux-et-jeux|2026
  keywords:
    - Parc Phoenix en famille
    - activité avec enfants à Nice
    - serre tropicale Nice
image:
  src: /images/articles/2026/11/parc-phoenix-a-nice-en-famille-serre-tropicale-animaux-et-jeux.webp
  alt: La grande serre tropicale du Parc Phœnix à Nice
sources:
  - title: Ville de Nice - Parc Phoenix
    url: https://www.nice.fr/lieux/parc-phoenix/
  - title: Parc Phoenix - Présentation
    url: https://www.parc-phoenix.org/le-parc/presentation/
  - title: Parc Phoenix - La serre
    url: https://www.parc-phoenix.org/la-flore/la-serre/
  - title: Parc Phoenix - Informations pratiques
    url: https://www.parc-phoenix.org/le-parc/infos-pratiques/
  - title: Parc Phoenix - Accrobranche
    url: https://www.parc-phoenix.org/activites-pedagogie/accrobranche/
  - title: Parc Phoenix - Accueil et informations de visite
    url: https://www.parc-phoenix.org/
  - title: B&B HOTELS - Nice Aéroport Arenas
    url: https://www.hotel-bb.com/fr/hotel/nice-aeroport-arenas
affiliate:
  enabled: true
  type: travel
  destination: Nice
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/activites/(2026)/(11)/parc-phoenix-a-nice-en-famille-serre-tropicale-animaux-et-jeux/index.md
  targetSha: 25904066a3fe508de3d5526da7be82eb92abb412
  targetUrl: /articles/activites/parc-phoenix-a-nice-en-famille-serre-tropicale-animaux-et-jeux/
  decision: Organiser une visite adaptée à l'âge des enfants et au budget familial, en sachant quels équipements sont disponibles pour les tout-petits et quand ajouter une activité payante.
  affiliationPotential: Conserver le lien Booking.com du B&B HOTEL Nice Aéroport Arenas, dont la fiche hôtel officielle confirme l'offre familiale; aucun billet direct partenaire pour le parc confirmé, pass Klook épuisé.
  gsc:
    retrievedAt: 2026-11-27T09:15:00+01:00
    dataThrough: 2026-11-25
    signal: uncertain
    basis: "Visibilité récente : 22 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-16
    peakEnd: 2026-11-18
    recentStart: 2026-11-23
    recentEnd: 2026-11-25
    peakImpressions: 22
    recentImpressions: 0
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - avis sur parc phœnix
      - nice phoenix
      - oui
      - parc phenix nice
      - parc pheonix
---

## Mission retenue
Actualiser le guide familial du Parc Phoenix à Nice.

## Pourquoi cette mission
Premier candidat rapidDrop du snapshot du jour, signal uncertain: aucune perte de classement démontrée. Lacune indépendante confirmée par le parc: deux espaces à langer, prêt de poussette et de fauteuil roulant selon disponibilité, restauration sur place, informations déterminantes pour décider de rester deux heures ou une demi-journée, absentes du guide actuel.

## Décision du lecteur
Choisir un parcours adapté aux enfants, prévoir le coût réel et le matériel à emporter, décider si l'accrobranche ou un séjour plus large mérite un supplément.

## Faits à traiter
- Ajouter les deux espaces à langer (toilettes du jardin d'enfants et près du snack), les toilettes accessibles, le prêt de poussette et fauteuil roulant sous réserve de disponibilité, le snack Côté Jardin ouvert toute l'année selon horaires du parc, et le pique-nique autorisé. Source Services du parc.
- Préserver les tarifs de 5,50 € et 3,20 €, gratuité des moins de 12 ans dans la limite de trois par adulte payant, gratuités handicap/accompagnateur et résidents avec justificatifs. Exemples de budgets familiaux simples; abonnement annuel 44,10 € et réductions pertinentes si utiles. Billetterie sur place confirmée sur l'accueil malgré le bouton de réservation. Conserver horaires saisonniers, fermeture les 25 décembre et 1er janvier et vigilance météo.
- Préciser adresse 405 promenade des Anglais, entrée côté tram uniquement, gare Saint-Augustin et parkings publics payants. Conserver serre, éco-refuge, petite ferme, jardins, jeux inclus et aire inclusive, durées indicatives et images/crédits.
- Accrobranche indépendante Nissa'venture dès 3 ans selon exploitant: vérifier parcours, taille, prix et conditions d'accompagnement sur ses pages officielles avant publication; réservation non nécessaire sous dix personnes hors groupes/anniversaires selon le parc, chaussures de sport requises. Ne pas supposer que le billet du parc couvre cette activité.
- Le French Riviera Pass inclut l'entrée du parc, pas l'accrobranche; pas de tarif enfant spécifique selon FAQ officielle. Ne pas recommander un pass pour cette seule sortie peu coûteuse. Klook affiche des offres expirées et épuisées; ne pas insérer ce lien comme réservation disponible.

## Sources de départ
- https://www.parc-phoenix.org/le-parc/services/
- https://www.parc-phoenix.org/le-parc/infos-pratiques/
- https://www.parc-phoenix.org/
- https://www.nice.fr/lieux/parc-phoenix/
- https://www.parc-phoenix.org/le-parc/presentation/
- https://www.parc-phoenix.org/la-flore/la-serre/
- https://www.parc-phoenix.org/activites-pedagogie/accrobranche/
- https://nissaventure-accrobranche.fr/tarifs-horaires/
- https://www.frenchrivierapass.com/activite/parc-phoenix-entree/
- https://www.frenchrivierapass.com/faq/
- https://www.hotel-bb.com/fr/hotel/nice-aeroport-arenas

## Affiliation
Conserver https://www.booking.com/hotel/fr/b-amp-b-nice-aeroport.fr.html pour un séjour plus large; Booking bloque la vérification directe, contrôler les caractéristiques sur la fiche officielle de l'hôtel. Aucun billet direct pour le parc identifié sur GetYourGuide, Tiqets ou Klook. French Riviera Pass sur Klook (157521) épuisé et dates de validité dépassées au contrôle; ne pas l'ajouter tant qu'une offre valide n'est pas confirmée.

## Continuations internes
Conserver le guide de destination Nice existant pour les autres sorties et l'organisation du séjour; ne pas élargir inutilement le guide du parc.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/activites/(2026)/(11)/parc-phoenix-a-nice-en-famille-serre-tropicale-animaux-et-jeux/index.md

---
title: "Parc Phoenix à Nice en famille: serre tropicale, animaux et jeux"
subtitle: Deux heures de découverte ou une demi-journée avec pique-nique, au rythme des enfants
summary: "Serre tropicale, animaux, jardins et jeux: nos conseils pour visiter le Parc Phoenix à Nice avec des enfants, prévoir les pauses et venir en tramway."
slug: parc-phoenix-a-nice-en-famille-serre-tropicale-animaux-et-jeux
status: published
publishedAt: 2026-11-15T00:25:33+01:00
updatedAt: null
category: activites
readingTime: 4
publicationOrigin: region
location:
  city: Nice
  department: Alpes-Maritimes
  region: Provence-Alpes-Côte d’Azur
topic:
  key: activites|nice|parc-phoenix-a-nice-en-famille-serre-tropicale-animaux-et-jeux|2026
  keywords:
    - Parc Phoenix en famille
    - activité avec enfants à Nice
    - serre tropicale Nice
image:
  src: "/images/articles/2026/11/parc-phoenix-a-nice-en-famille-serre-tropicale-animaux-et-jeux.webp"
  alt: "La grande serre tropicale du Parc Phœnix à Nice"
sources:
  - title: Ville de Nice - Parc Phoenix
    url: https://www.nice.fr/lieux/parc-phoenix/
  - title: Parc Phoenix - Présentation
    url: https://www.parc-phoenix.org/le-parc/presentation/
  - title: Parc Phoenix - La serre
    url: https://www.parc-phoenix.org/la-flore/la-serre/
  - title: Parc Phoenix - Informations pratiques
    url: https://www.parc-phoenix.org/le-parc/infos-pratiques/
  - title: Parc Phoenix - Accrobranche
    url: https://www.parc-phoenix.org/activites-pedagogie/accrobranche/
  - title: Parc Phoenix - Accueil et informations de visite
    url: https://www.parc-phoenix.org/
  - title: B&B HOTELS - Nice Aéroport Arenas
    url: https://www.hotel-bb.com/fr/hotel/nice-aeroport-arenas
affiliate:
  enabled: true
  type: travel
  destination: Nice
---

À l’ouest de Nice, face à l’aéroport, le Parc Phoenix réunit sur sept hectares un jardin botanique, une grande serre tropicale, des espaces animaliers et des jeux pour enfants. Pour une famille, son intérêt tient à cette variété: on peut observer les plantes et les animaux, puis laisser les enfants se dépenser, sans changer de lieu.

Prévoyez environ deux heures pour quelques étapes choisies, ou une demi-journée avec un pique-nique et de longues pauses aux jeux. Ces durées sont des suggestions pour organiser votre sortie, à adapter à l’âge et aux envies des enfants.

## La serre, pour regarder les plantes autrement

<!-- article-image-body:01 -->

![Végétation tropicale à l'intérieur de la serre du Parc Phoenix à Nice](/images/articles/2026/11/parc-phoenix-a-nice-en-famille-serre-tropicale-animaux-et-jeux-body-01.webp)

<!-- /article-image-body:01 -->

Le « Diamant vert », une serre pyramidale haute de 25 mètres, constitue un bon premier objectif. Sur 7 000 m², elle rassemble six climats tropicaux et subtropicaux, avec notamment des orchidées, des fougères arborescentes et un jardin d’Afrique australe.

Pour accompagner la découverte, proposez une petite recherche: trouver une feuille plus grande que sa main, comparer deux silhouettes de palmiers ou repérer une plante dont la forme étonne.

Dans la partie centrale, les végétaux sont regroupés selon leurs besoins, notamment en eau et en lumière, comme l’explique la [page officielle consacrée à la serre](https://www.parc-phoenix.org/la-flore/la-serre/). Une piste intéressante pour les plus grands: des plantes venues de continents différents peuvent avoir besoin des mêmes conditions pour pousser. Les floraisons de cette partie sont surtout présentes au printemps et en été.

## Des animaux à observer, un refuge à découvrir

<!-- article-image-body:02 -->

![Flamants roses photographiés dans le Parc Phoenix à Nice](/images/articles/2026/11/parc-phoenix-a-nice-en-famille-serre-tropicale-animaux-et-jeux-body-02.webp)

<!-- /article-image-body:02 -->

La petite ferme offre un point de départ familier aux plus jeunes. Les enfants attirés par la faune exotique pourront consacrer davantage de temps aux autres espaces animaliers. Devant un animal, quelques minutes d’observation permettent parfois de découvrir une façon de se déplacer, de manger ou d’utiliser ses pattes que l’on aurait manquée en passant.

Le lieu a aussi une mission moins visible. Selon sa [présentation officielle](https://www.parc-phoenix.org/le-parc/presentation/), le Parc Phoenix est un éco-refuge depuis 2020: il accueille et protège des animaux sauvages exotiques en détresse, notamment issus de saisies douanières ou d’abandons. Cette dimension permet d’aborder avec les enfants les besoins de ces animaux et les difficultés que pose leur détention chez un particulier.

## Deux façons de composer la sortie

<!-- article-image-body:03 -->

![Plantes succulentes du jardin aride du Parc Phoenix à Nice](/images/articles/2026/11/parc-phoenix-a-nice-en-famille-serre-tropicale-animaux-et-jeux-body-03.webp)

<!-- /article-image-body:03 -->

**Pour une visite courte, autour de deux heures**, choisissez la serre, un espace animalier selon les envies des enfants, puis une pause aux jeux. Si les animaux sont leur motivation principale, inversez les deux premières étapes. Les jardins feront la liaison entre ces temps forts.

**Pour une demi-journée**, ajoutez une promenade dans les jardins et un déjeuner sur place. Les collections méditerranéennes, les plantes succulentes et les plantes aromatiques permettent de poursuivre la découverte après la serre, en comparant les formes et les feuillages. Le pique-nique est autorisé.

Les aires de jeux sont comprises dans l’entrée. La [Ville de Nice signale également une aire inclusive et un accès pour les personnes à mobilité réduite](https://www.nice.fr/lieux/parc-phoenix/).

L’accrobranche est une activité indépendante, payante en supplément. Ses horaires varient: consultez les conditions de l’exploitant depuis la [page officielle consacrée à l’accrobranche](https://www.parc-phoenix.org/activites-pedagogie/accrobranche/) avant de l’intégrer au programme.

## Budget, horaires et arrivée sans voiture

Les [informations pratiques du parc](https://www.parc-phoenix.org/le-parc/infos-pratiques/) indiquent:

- **Plein tarif:** 5,50 €. Pour les jeunes de 12 à 18 ans, le tarif réduit est de 3,20 €.
- **Moins de 12 ans:** gratuit pour trois enfants maximum par adulte payant, puis 3,20 € par enfant supplémentaire.
- **Horaires:** de 9h30 à 18h du 1er octobre au 31 mars, et de 9h30 à 19h30 du 1er avril au 30 septembre. Fermeture les 25 décembre et 1er janvier. La billetterie ferme une heure avant le parc.
- **Sans voiture:** tramway ligne 2, arrêt Parc Phœnix, ou train jusqu’à la gare de Nice Saint-Augustin.
- **Entrée:** exclusivement côté tramway. L’ancienne entrée Arénas est fermée.

Les habitants de la métropole Nice Côte d’Azur bénéficient de la gratuité le premier week-end complet de chaque mois, avec un justificatif de domicile de moins de trois mois et une pièce d’identité par personne. Une gratuité est aussi prévue pour les visiteurs handicapés sur présentation de la carte d’invalidité, ainsi que pour leur accompagnateur.

Pour les billets, prévoyez un achat sur place: l’[accueil officiel](https://www.parc-phoenix.org/) annonce une billetterie en ligne indisponible, malgré des liens de réservation encore affichés sur le site.

## Une sortie surtout en plein air

La serre apporte une étape abritée, mais les déplacements, les jardins et les jeux se déroulent dehors. Par temps d’averses, un parcours court sera plus facile à adapter qu’une demi-journée avec pique-nique.

Le parc annonce une [fermeture en cas de vigilance orange pour précipitations ou vent violent](https://www.parc-phoenix.org/le-parc/infos-pratiques/), ainsi qu’en cas de force majeure. Lorsque la météo se dégrade, vérifiez les annonces officielles avant de partir.

## Une nuit dans l’Arénas pour prolonger la visite

Si la sortie s’intègre à un week-end niçois, le [B&B HOTEL Nice Aéroport Arenas, près du Parc Phoenix](https://www.booking.com/hotel/fr/b-amp-b-nice-aeroport.fr.html), propose des chambres quadruples avec un grand lit double et deux lits simples. Sa proximité permet de rejoindre le parc à pied. Renseignez vos dates et l’âge des enfants pour vérifier les disponibilités, le tarif total et les conditions d’annulation.

Pour préparer les autres étapes du séjour, consultez notre [guide de Nice en famille](https://www.fam-space.fr/destinations/provence-alpes-cote-d-azur/alpes-maritimes/nice/).

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/le-pal-ou-touroparc-en-famille-quel-parc-choisir-en-2026/ | Le PAL ou Touroparc en famille: quel parc choisir en 2026? | activites
- /articles/activites/parc-de-l-auxois-avec-des-enfants-comment-combiner-animaux-maneges-et-piscine/ | Parc de l'Auxois avec des enfants: comment combiner animaux, manèges et piscine | activites | Arnay-sous-Vitteaux, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/activites/parc-animalier-d-auvergne-en-famille-billets-animaux-et-conseils-de-visite/ | Parc animalier d'Auvergne en famille: billets, animaux et conseils de visite | activites | Ardes, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/activites/parc-animalier-de-serre-poncon-comment-organiser-la-visite-avec-des-enfants/ | Parc animalier de Serre-Ponçon: comment organiser la visite avec des enfants | activites | Le Sauze-du-Lac, Hautes-Alpes, Provence-Alpes-Côte d’Azur
- /articles/activites/biotropica-en-famille-a-val-de-reuil-animaux-tarifs-et-visite-par-temps-de-pluie/ | Biotropica en famille à Val-de-Reuil: animaux, tarifs et visite par temps de pluie | activites | Val-de-Reuil, Eure, Normandie
- /articles/activites/ferme-des-chanteraines-en-famille-animaux-ateliers-et-balade-gratuite/ | Ferme des Chanteraines en famille: animaux, ateliers et balade gratuite | activites | Villeneuve-la-Garenne, Hauts-de-Seine, Île-de-France
- /articles/activites/jeux-nature-gratuits-au-parc-floral-de-paris-le-18-novembre-2026-quel-jeu-selon-l-age/ | Jeux nature gratuits au Parc floral de Paris le 18 novembre 2026 | activites | Paris, Paris, Île-de-France
- /articles/sorties/ete-oh-parcs-grenoble-2026-famille/ | L’Été Oh! Parcs Grenoble 2026: horaires et activités gratuites | sorties | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/activites/parc-phoenix-a-nice-en-famille-serre-tropicale-animaux-et-jeux/ | Parc Phoenix à Nice en famille: serre tropicale, animaux et jeux | activites | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | Noël à Nice 2026 en famille: village, spectacles et crèche | evenements | Nice, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/bons-plans/musee-national-du-sport-a-nice-en-famille-combien-coute-vraiment-la-visite/ | Musée National du Sport à Nice en famille: que voir et préparer la visite | bons-plans | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/cuisine/atelier-de-cuisine-nicoise-a-nice-faut-il-reserver-avec-des-enfants/ | Atelier de cuisine niçoise à Nice: faut-il réserver avec des enfants? | cuisine | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/maison/renovation-energetique-dans-les-alpes-maritimes-jusqu-a-25-400-d-aide/ | Rénovation énergétique dans les Alpes-Maritimes: jusqu'à 25 400 € d'aide | maison | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/vie-pratique/location-de-voiture-a-nice-avec-des-enfants-ce-qu-il-faut-verifier-avant-de-reserver/ | Location de voiture à Nice avec des enfants: ce qu'il faut vérifier avant de réserver | vie-pratique | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/vie-pratique/littoral-des-alpes-maritimes-en-famille-se-deplacer-sans-voiture/ | Littoral des Alpes-Maritimes en famille: se déplacer sans voiture | vie-pratique | Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/activites/ateliers-parfum-a-grasse-en-famille-lesquels-choisir-selon-l-age/ | Ateliers parfum à Grasse en famille: lesquels choisir selon l'âge ? | activites | Grasse, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/fete-du-citron-2027-a-menton-en-famille-que-voir-et-combien-prevoir/ | Fête du Citron 2027 à Menton en famille: que voir et combien prévoir ? | evenements | Menton, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | Noël 2026 à Cannes en famille: marché du centre et Palm Beach | evenements | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/activites/accrobranche-au-maido-en-famille-preparer-sa-sortie-a-enler-pied-bois/ | Accrobranche au Maïdo en famille: préparer sa sortie à Enlèr Pied’Bois | activites | Saint-Paul, La Réunion, La Réunion
- /articles/activites/a-pointe-noire-decouvrir-la-riviere-en-famille-avec-l-aquarando-d-acomat/ | À Pointe-Noire, découvrir la rivière en famille avec l’aquarando d’Acomat | activites | Pointe-Noire, Guadeloupe, Guadeloupe
- /articles/activites/musee-de-l-illusion-a-lyon-en-famille-que-voir-et-combien-coute-la-visite/ | Musée de l'Illusion à Lyon en famille: que voir et combien coûte la visite ? | activites | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/activites/musee-dobree-en-famille-a-nantes-jeux-et-parcours-selon-l-age/ | Musée Dobrée en famille à Nantes: jeux et parcours selon l’âge | activites | Nantes, Loire-Atlantique, Pays de la Loire

### Historique Radar lié

- refresh | /articles/activites/biotropica-en-famille-a-val-de-reuil-animaux-tarifs-et-visite-par-temps-de-pluie/ | 2026-11-07T21:36:00.316Z
- opportunity | /articles/activites/jeux-nature-gratuits-au-parc-floral-de-paris-le-18-novembre-2026-quel-jeu-selon-l-age/ | 2026-11-04T12:35:19.125Z
- opportunity | /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | 2026-10-31T22:36:58.800Z
- refresh | /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | 2026-11-17T13:33:26.086Z
- opportunity | /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | 2026-10-25T04:31:33.540Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
