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
title: "Moulin du Mont Ramus à Bessan: choisir son huile d’olive en famille"
subtitle: De l’oliveraie à la dégustation, des repères à rapporter dans sa cuisine
summary: À Bessan, une visite gratuite chez le producteur pour comprendre les olives, comparer les huiles et choisir celle qui accompagnera les repas de famille.
slug: moulin-du-mont-ramus-a-bessan-choisir-son-huile-d-olive-en-famille
status: published
publishedAt: 2026-10-24T23:14:34+02:00
updatedAt: null
category: cuisine
readingTime: 5
publicationOrigin: region
location:
  city: Bessan
  department: Hérault
  region: Occitanie
topic:
  key: cuisine|bessan|moulin-du-mont-ramus-a-bessan-choisir-son-huile-d-olive-en-famille|2026
  keywords:
    - Moulin du Mont Ramus
    - huile d’olive en cuisine
    - visite en famille en Hérault
image:
  src: /images/articles/2026/10/moulin-du-mont-ramus-a-bessan-choisir-son-huile-d-olive-en-famille.webp
  alt: Pont sur l'Hérault à Bessan, vue de la commune et non du Moulin du Mont Ramus.
sources:
  - title: "Moulin du Mont Ramus: visite et renseignements pratiques"
    url: https://www.moulindumontramus.fr/
  - title: "Office de tourisme Cap d’Agde Méditerranée: Le Moulin du Mont Ramus"
    url: https://www.capdagde.com/visites-guidees/le-moulin-du-mont-ramus_1/
  - title: "Bienvenue à la ferme: Moulin du Mont Ramus"
    url: https://www.bienvenue-a-la-ferme.com/occitanie/herault/bessan/ferme/moulin-du-mont-ramus/300130
  - title: "France Olive: L’extraction de l’huile d’olive"
    url: https://huiles-et-olives.fr/les-produits/huiles-d-olive/extraction-huile-olive/
  - title: "France Olive: La préparation des olives"
    url: https://huiles-et-olives.fr/les-produits/olives/preparation/
  - title: "France Olive: Alliances culinaires avec les huiles d’olive de France"
    url: https://huiles-et-olives.fr/wp-content/uploads/2023/10/huiles-et-olives-Depliant-Alliances-culinaires-avec-huiles-olive-de-france.pdf
  - title: "France Olive: Peut-on chauffer son huile d’olive?"
    url: https://huiles-et-olives.fr/peut-on-chauffer-son-huile-dolive/
  - title: "France Olive: Bien conserver son huile d’olive"
    url: https://huiles-et-olives.fr/bien-conserver-son-huile-dolive/
affiliate:
  enabled: true
  type: travel
  destination: Bessan
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/cuisine/(2026)/(10)/moulin-du-mont-ramus-a-bessan-choisir-son-huile-d-olive-en-famille/index.md
  targetSha: 96aaf5e28fd79e916e2d02eea2978fc2c3ad462d
  targetUrl: /articles/cuisine/moulin-du-mont-ramus-a-bessan-choisir-son-huile-d-olive-en-famille/
  decision: Permettre à une famille de choisir un créneau de visite gratuit, de distinguer visite guidée et horaires de boutique, et de préparer l'accès avec de jeunes enfants.
  affiliationPotential: Conserver l'hébergement Booking à Bessan déjà présent; aucune nouvelle offre nécessaire.
  gsc:
    retrievedAt: 2026-11-09T06:27:46+01:00
    dataThrough: 2026-11-07
    signal: uncertain
    basis: "Visibilité récente : 36 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-25
    peakEnd: 2026-10-27
    recentStart: 2026-11-05
    recentEnd: 2026-11-07
    peakImpressions: 36
    recentImpressions: 0
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - avis sur moulin du mont ramus - huiles & olives - 100% producteur
      - moulin olive bessan
      - oliveraie bessan
      - moulin du mont ramus avis
      - moulin huile d'olive bessan
---

## Mission retenue
Actualiser de façon ciblée le guide familial du Moulin du Mont Ramus à Bessan, sans transformer l'article de cuisine en fiche touristique générique.

## Pourquoi cette mission
Le snapshot GSC indique 36 impressions du 25 au 27 octobre puis zéro du 5 au 7 novembre; la cause n'est pas établie. Une lacune pratique indépendante existe: l'article donne les départs des visites mais pas les horaires distincts de la boutique, ni les informations d'accès et d'accueil des familles désormais documentées.

## Décision du lecteur
Savoir quand venir pour une vraie visite guidée gratuite, et comment s'organiser pour arriver au moulin, plutôt que confondre les heures d'ouverture de la boutique avec les départs de visite.

## Faits à traiter
- Vérifier et ajouter les horaires de boutique de novembre à mars: 9h30-12h30 et 14h-18h, distincts des visites à 10h30, 15h30 et 16h30; fermeture dimanche.
- Préciser les possibilités d'accès en voiture, parking et accessibilité à partir des informations officielles, sans promettre un trajet en bus jusqu'à l'entrée ni garantir l'accès en poussette à toute l'oliveraie.
- Conserver la gratuité, la durée de 45 à 60 minutes, l'absence de réservation hors groupes de dix personnes, la fermeture annuelle à confirmer, les conseils de dégustation, cuisson, conservation, les images et leurs crédits, ainsi que le lien Booking existant.
- Ne pas présenter la chute GSC comme une preuve de désindexation.

## Sources de départ
- Moulin, horaires et visites: https://www.moulindumontramus.fr/
- Moulin, accès: https://www.moulindumontramus.fr/en/venir-au-moulin
- Office de tourisme, horaires novembre-décembre 2026 et parking: https://www.capdagde.com/fiche-sit/le-moulin-du-mont-ramus-nl/
- Fiche publique d'accessibilité à recouper: https://acceslibre.beta.gouv.fr/app/34-bessan/a/lieu-de-visite/erp/moulin-du-mont-ramus/

## Affiliation
Conserver l'appartement L'Olivier sur Booking déjà cité, utile pour un séjour; aucune insertion supplémentaire.

## Continuations internes
Ne pas développer de nouveau guide de transport local sans preuve précise de l'arrêt et du chemin piéton. Garder le renvoi existant vers les recettes en famille.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/cuisine/(2026)/(10)/moulin-du-mont-ramus-a-bessan-choisir-son-huile-d-olive-en-famille/index.md

---
title: "Moulin du Mont Ramus à Bessan: choisir son huile d’olive en famille"
subtitle: De l’oliveraie à la dégustation, des repères à rapporter dans sa cuisine
summary: À Bessan, une visite gratuite chez le producteur pour comprendre les olives, comparer les huiles et choisir celle qui accompagnera les repas de famille.
slug: moulin-du-mont-ramus-a-bessan-choisir-son-huile-d-olive-en-famille
status: published
publishedAt: 2026-10-24T23:14:34+02:00
updatedAt: null
category: cuisine
readingTime: 5
publicationOrigin: region
location:
  city: Bessan
  department: Hérault
  region: Occitanie
topic:
  key: cuisine|bessan|moulin-du-mont-ramus-a-bessan-choisir-son-huile-d-olive-en-famille|2026
  keywords:
    - Moulin du Mont Ramus
    - huile d’olive en cuisine
    - visite en famille en Hérault
image:
  src: "/images/articles/2026/10/moulin-du-mont-ramus-a-bessan-choisir-son-huile-d-olive-en-famille.webp"
  alt: "Pont sur l'Hérault à Bessan, vue de la commune et non du Moulin du Mont Ramus."
sources:
  - title: "Moulin du Mont Ramus: visite et renseignements pratiques"
    url: https://www.moulindumontramus.fr/
  - title: "Office de tourisme Cap d’Agde Méditerranée: Le Moulin du Mont Ramus"
    url: https://www.capdagde.com/visites-guidees/le-moulin-du-mont-ramus_1/
  - title: "Bienvenue à la ferme: Moulin du Mont Ramus"
    url: https://www.bienvenue-a-la-ferme.com/occitanie/herault/bessan/ferme/moulin-du-mont-ramus/300130
  - title: "France Olive: L’extraction de l’huile d’olive"
    url: https://huiles-et-olives.fr/les-produits/huiles-d-olive/extraction-huile-olive/
  - title: "France Olive: La préparation des olives"
    url: https://huiles-et-olives.fr/les-produits/olives/preparation/
  - title: "France Olive: Alliances culinaires avec les huiles d’olive de France"
    url: https://huiles-et-olives.fr/wp-content/uploads/2023/10/huiles-et-olives-Depliant-Alliances-culinaires-avec-huiles-olive-de-france.pdf
  - title: "France Olive: Peut-on chauffer son huile d’olive?"
    url: https://huiles-et-olives.fr/peut-on-chauffer-son-huile-dolive/
  - title: "France Olive: Bien conserver son huile d’olive"
    url: https://huiles-et-olives.fr/bien-conserver-son-huile-dolive/
affiliate:
  enabled: true
  type: travel
  destination: Bessan
---
<!-- article-image-credit -->
*Photo: [Fagairolles 34](https://commons.wikimedia.org/wiki/File:Bessan_pont.JPG) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Bessan, dans l’Hérault, près d’Agde, le Moulin du Mont Ramus propose une découverte de l’olive depuis l’arbre jusqu’à la dégustation. La visite guidée passe par l’oliveraie, présente l’extraction de l’huile et la préparation des olives de table, puis se termine par une dégustation. De quoi comprendre en famille pourquoi deux huiles peuvent donner des goûts bien différents aux mêmes pâtes ou aux mêmes légumes.

## Préparer sa visite au moulin

Selon les [renseignements du moulin](https://www.moulindumontramus.fr/), **la visite est gratuite et dure de 45 minutes à une heure**. Elle se fait sans réservation, sauf pour les groupes à partir de dix personnes. Présentez-vous cinq minutes avant le départ.

Les départs annoncés sont les suivants, du lundi au samedi:

- D’octobre à mars: 10 h 30, 15 h 30 et 16 h 30.
- D’avril à septembre: 10 h, 11 h, 14 h 30, 15 h 30, 16 h 30 et 17 h 30.

Le moulin est fermé le dimanche. **Entre mi-janvier et mi-février, faites confirmer l’ouverture au 04 67 32 04 73.** [Bienvenue à la ferme](https://www.bienvenue-a-la-ferme.com/occitanie/herault/bessan/ferme/moulin-du-mont-ramus/300130) signale une fermeture annuelle pendant cette période, que le calendrier général du moulin ne précise pas.

Le domaine se trouve route de Saint-Thibéry, à Bessan. L’[office de tourisme Cap d’Agde Méditerranée](https://www.capdagde.com/visites-guidees/le-moulin-du-mont-ramus_1/) indique un parking sur place et des activités adaptées aux familles.

## Une olive, deux chemins jusqu’à l’assiette

<!-- article-image-body:01 -->

![Lignes modernes d'extraction d'huile d'olive photographiées hors du Moulin du Mont Ramus.](/images/articles/2026/10/moulin-du-mont-ramus-a-bessan-choisir-son-huile-d-olive-en-famille-body-01.webp)

*Photo: [Amenduni](https://commons.wikimedia.org/wiki/File:Modern_olive_oil_mill.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Pour expliquer l’huile aux enfants, une question suffit: se trouve-t-elle déjà dans le fruit?

Oui. Le moulin sert à l’en extraire. [France Olive décrit les étapes](https://huiles-et-olives.fr/les-produits/huiles-d-olive/extraction-huile-olive/): les olives sont débarrassées des feuilles et lavées, puis broyées entières, noyaux compris. La pâte obtenue est malaxée pour réunir les gouttelettes d’huile. On sépare ensuite l’huile de l’eau et des matières solides, notamment par centrifugation, en faisant tourner le mélange rapidement.

L’olive destinée à être mangée suit un autre parcours. Fraîchement cueillie, elle est naturellement très amère, même mûre. La «désamérisation» consiste à lui retirer cette amertume. Vient aussi la préparation qui permettra sa conservation. [France Olive présente plusieurs méthodes pour les olives de table](https://huiles-et-olives.fr/les-produits/olives/preparation/), dont certaines utilisent une saumure, c’est-à-dire de l’eau salée.

Voilà une question à poser au guide: comment prépare-t-on ici les olives proposées à la dégustation?

## Goûter en pensant aux plats de la maison

<!-- article-image-body:02 -->

![Dégustation d'huile d'olive photographiée au Portugal, illustration d'une activité similaire.](/images/articles/2026/10/moulin-du-mont-ramus-a-bessan-choisir-son-huile-d-olive-en-famille-body-02.webp)

*Photo: [flowcomm](https://commons.wikimedia.org/wiki/File:Olive_oil_tasting,_Portugal_(53979922996).jpg) - [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Pendant la dégustation, demandez à comparer une huile douce et une huile plus expressive. Avec les enfants, cherchez des sensations simples: un parfum d’herbe, de l’amertume, un picotement en bouche ou dans la gorge. Ce piquant porte un nom, l’ardence.

Les [alliances culinaires de France Olive](https://huiles-et-olives.fr/wp-content/uploads/2023/10/huiles-et-olives-Depliant-Alliances-culinaires-avec-huiles-olive-de-france.pdf) donnent trois repères pour passer de la dégustation à la cuisine:

- **Un goût subtil**, généralement peu amer et peu ardent, accompagne les aliments délicats et les pâtisseries. Pensez à des carottes ou à un gâteau au yaourt.
- **Un goût intense**, aux notes végétales ou herbacées, peut relever des pâtes et des légumes méditerranéens.
- **Un goût à l’ancienne**, obtenu avec des olives maturées dans des conditions maîtrisées avant extraction, apporte notamment des notes d’olive noire et boisées. Il s’accorde avec les pommes de terre et les champignons.

Ces familles décrivent des profils aromatiques. Demandez quels goûts sont représentés parmi les huiles disponibles au moulin, sans supposer que les trois y seront proposés.

Pour choisir une bouteille, évoquez deux ou trois repas habituels avec la personne qui vous fait goûter. Vous pourrez ainsi chercher une huile pour votre cuisine quotidienne ou pour un usage précis.

## Au four, dans la casserole ou au dernier moment?

L’huile d’olive convient à la cuisson. [France Olive précise toutefois](https://huiles-et-olives.fr/peut-on-chauffer-son-huile-dolive/) qu’une cuisson longue ou à température élevée diminue ses arômes. Une huile d’olive courante peut donc servir à cuire. Pour profiter du parfum de celle que vous avez aimée à la dégustation, essayez aussi de l’ajouter en fin de préparation.

Quelques essais permettent de sentir la différence:

**Sur des légumes rôtis**, mélangez carottes et pommes de terre coupées avec de l’huile avant d’enfourner. Au service, ajoutez quelques gouttes de l’huile choisie au moulin sur une portion et comparez.

**Dans des pâtes**, réservez un peu d’eau de cuisson avant de les égoutter. Mélangez-les avec un filet d’huile au goût intense et un peu de cette eau. Goûtez avant d’ajouter le fromage râpé pour mieux distinguer les arômes de l’huile.

**Avec une purée**, répartissez quelques cuillerées dans deux petits bols et assaisonnez-les avec deux huiles différentes. Un aliment familier devient ainsi le support d’une nouvelle dégustation.

Pour un autre repas à préparer ensemble, nos [recettes à faire avec les enfants après une cueillette](/articles/cuisine/apres-une-cueillette-en-eure-et-loir-5-recettes-faciles-a-faire-avec-les-enfants/) comprennent un tian de légumes à l’huile d’olive.

## Acheter une quantité que l’on utilisera

Adaptez le volume acheté à votre consommation. [France Olive conseille de consommer l’huile dans les trois mois après ouverture](https://huiles-et-olives.fr/bien-conserver-son-huile-dolive/) pour profiter de ses qualités aromatiques.

Privilégiez un contenant opaque ou en verre foncé. Gardez-le bien fermé dans un placard, à l’abri de la lumière et des variations importantes de température. Le rangement près des plaques de cuisson est donc à éviter.

## Une cuisine pour prolonger le séjour à Bessan

Si vous intégrez le moulin à un week-end, [l’appartement L’Olivier à Bessan, proposé sur Booking.com](https://www.booking.com/hotel/fr/olivier-centre-village-au-calme.fr.html), peut accueillir jusqu’à quatre personnes avec deux chambres et une cuisine équipée. Vous pourrez y essayer l’huile choisie dès le dîner. Avant de réserver, vérifiez les disponibilités, les conditions d’annulation et le linge fourni. Aucun lit bébé ni lit d’appoint n’est disponible dans cet hébergement.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/parentalite/laep-dans-l-herault-jouer-avec-son-enfant-et-rencontrer-d-autres-parents/ | LAEP dans l'Hérault: jouer avec son enfant et rencontrer d'autres parents | parentalite | Hérault, Occitanie
- /articles/cuisine/ateliers-cuisine-a-caen-avec-des-enfants-quelle-formule-choisir/ | Bien Dans Son Assiette à Caen: quel atelier cuisine choisir avec un enfant ? | cuisine | Caen, Calvados, Normandie
- /articles/cuisine/huile-de-noix-du-perigord-du-moulin-de-neuvic-a-la-cuisine-familiale/ | Huile de noix du Périgord: du moulin de Neuvic à la cuisine familiale | cuisine | Neuvic, Dordogne, Nouvelle-Aquitaine
- /articles/activites/musee-parc-des-dinosaures-de-meze-en-famille-fossiles-visite-et-conseils/ | Musée-Parc des Dinosaures de Mèze en famille: fossiles, visite et conseils | activites | Mèze, Hérault, Occitanie
- /articles/sorties/grotte-des-demoiselles-avec-des-enfants-visite-guidee-contee-ou-lanterne/ | Grotte des Demoiselles avec des enfants: visite guidée, contée ou lanterne? | sorties | Saint-Bauzille-de-Putois, Hérault, Occitanie
- /articles/voyages/montpellier-ou-sete-sans-voiture-avec-des-enfants-ou-poser-ses-valises/ | Montpellier ou Sète sans voiture avec des enfants: où poser ses valises ? | voyages | Montpellier, Hérault, Occitanie
- /articles/bons-plans/cantine-au-college-dans-l-herault-jusqu-a-3-60-d-aide-par-repas/ | Cantine au collège dans l'Hérault: jusqu'à 3,60 € d'aide par repas | bons-plans | Montpellier, Hérault, Occitanie
- /articles/parentalite/maisons-des-1000-jours-dans-l-herault-ou-trouver-un-accompagnement-gratuit/ | Maisons des 1000 jours dans l'Hérault: où trouver un accompagnement gratuit | parentalite | Montpellier, Hérault, Occitanie
- /articles/cuisine/moulin-du-mont-ramus-a-bessan-choisir-son-huile-d-olive-en-famille/ | Moulin du Mont Ramus à Bessan: choisir son huile d’olive en famille | cuisine | Bessan, Hérault, Occitanie
- /articles/maison/reparer-ses-objets-dans-l-herault-repair-cafes-et-bonus-reparation/ | Réparer ses objets dans l’Hérault: Repair Cafés et bonus réparation | maison | Hérault, Occitanie
- /articles/evenements/marche-de-noel-de-montpellier-2026-en-famille-dates-fermetures-et-attractions/ | Marché de Noël de Montpellier 2026 en famille: horaires, jours fermés et manèges | evenements | Montpellier, Hérault, Occitanie
- /articles/vie-pratique/cars-lio-dans-l-herault-en-famille-billets-tram-et-poussettes/ | Cars liO dans l'Hérault en famille: billets, tram et poussettes | vie-pratique | Montpellier, Hérault, Occitanie
- /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | Grands Zyeux P'tites Zoreilles 2026: spectacles gratuits avec les tout-petits autour de Béziers | evenements | Béziers, Hérault, Occitanie
- /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | Abracada BOUH 2026 à Montpellier: programme et tarifs au château de Flaugergues | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/coeur-de-ville-en-lumieres-2026-avec-des-enfants-comment-preparer-la-soiree-sans-voiture/ | Cœur de Ville en Lumières 2026 avec des enfants: comment préparer la soirée sans voiture? | evenements | Montpellier, Hérault, Occitanie
- /articles/bons-plans/city-card-montpellier-en-famille-quand-est-elle-vraiment-rentable/ | City Card Montpellier en famille: quand est-elle vraiment rentable? | bons-plans | Montpellier, Hérault, Occitanie
- /articles/cuisine/fete-de-la-truffe-2027-a-sarlat-en-famille-que-faire-et-que-gouter/ | Fête de la Truffe 2027 à Sarlat en famille: que faire et que goûter ? | cuisine | Sarlat-la-Canéda, Dordogne, Nouvelle-Aquitaine
- /articles/cuisine/maison-du-cacao-a-pointe-noire-decouvrir-le-chocolat-en-famille/ | Maison du Cacao à Pointe-Noire: découvrir le chocolat en famille | cuisine | Pointe-Noire, Guadeloupe, Guadeloupe
- /articles/cuisine/a-chiconi-decouvrir-la-cuisine-mahoraise-en-famille/ | À Chiconi, découvrir la cuisine mahoraise en famille | cuisine | Chiconi, Mayotte, Mayotte
- /articles/cuisine/mogettes-de-vendee-en-famille-quatre-repas-simples-et-les-bonnes-cuissons/ | Mogettes de Vendée en famille: quatre repas simples et les bonnes cuissons | cuisine | Vendée, Pays de la Loire
- /articles/cuisine/halles-de-tours-en-famille-un-panier-d-automne-deux-repas-simples/ | Halles de Tours en famille: un panier d’automne, deux repas simples | cuisine | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/cuisine/ateliers-cuisine-et-patisserie-en-ardeche-avec-des-enfants-trois-adresses-selon-leur-age/ | Ateliers cuisine et pâtisserie en Ardèche avec des enfants: trois adresses selon leur âge | cuisine | Ardèche, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | 2026-10-13T20:41:25.500Z
- opportunity | /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | 2026-10-14T07:31:28.976Z
- opportunity | /articles/evenements/marche-de-noel-de-montpellier-2026-en-famille-dates-fermetures-et-attractions/ | 2026-10-29T08:29:37.767Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
