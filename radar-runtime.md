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
title: "Fêtes de l’Ours 2027: quelle fête choisir en famille dans les Pyrénées-Orientales ?"
subtitle: Trois villages du Haut-Vallespir, des traditions spectaculaires et des précautions à connaître avec des enfants
summary: À Prats-de-Mollo, Saint-Laurent-de-Cerdans et Arles-sur-Tech, découvrez les Fêtes de l’Ours 2027 et préparez votre sortie en famille.
slug: fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales
status: published
publishedAt: 2026-11-05T05:04:01+01:00
updatedAt: null
category: evenements
readingTime: 4
location:
  city: ""
  department: Pyrénées-Orientales
  region: Occitanie
topic:
  key: evenements|pyrenees-orientales|fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales|2026
  keywords:
    - Fêtes de l’Ours 2027
    - Fête de l’Ours Pyrénées-Orientales en famille
    - Haut-Vallespir carnaval
image:
  src: /images/articles/2026/11/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales.webp
  alt: Participants à la Fête de l’Ours de Prats-de-Mollo en 2016, édition antérieure à 2027
sources:
  - title: Fêtes de l’Ours du Haut-Vallespir - présentation
    url: https://www.fetesdelours.com/
  - title: Fête de l’Ours de Prats-de-Mollo - organisateurs
    url: https://www.fetesdelours.com/les-fetes-de-lours/fete-de-lours-de-prats-de-mollo-la-preste/
  - title: Fête de l’Ours de Saint-Laurent-de-Cerdans - organisateurs
    url: https://www.fetesdelours.com/les-fetes-de-lours/fete-de-lours-de-saint-laurent-de-cerdans/
  - title: Tourisme Occitanie - Fêtes de l’Ours 2027
    url: https://www.tourisme-occitanie.com/fr/fiche/fete-et-manifestation/fetes-de-l-ours-prats-de-mollo-la-preste_TFOFMALAR0660018062/
  - title: UNESCO - Les fêtes de l’Ours dans les Pyrénées
    url: https://ich.unesco.org/fr/RL/les-ftes-de-lours-dans-les-pyrnes-01846
affiliate:
  enabled: true
  type: travel
  destination: Pyrénées-Orientales
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(11)/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales/index.md
  targetSha: e412b91dd3b45e24e01e143896c92aba63d46464
  targetUrl: /articles/evenements/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales/
  decision: Choisir entre les fêtes traditionnelles et les fêtes de l'ours junior selon la sensibilité des enfants, puis identifier les dates réellement confirmées avant de réserver un séjour.
  affiliationPotential: Conserver le Costabonne sur Booking.com, chambres familiales et lit bébé sur demande vérifiés; disponibilité aux dates de fête non confirmée. Pas de billetterie générale payante identifiée.
  gsc:
    retrievedAt: 2026-11-28T07:56:00+01:00
    dataThrough: 2026-11-26
    signal: uncertain
    basis: "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer. Diagnostic sur 5 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-10
    peakEnd: 2026-11-16
    recentStart: 2026-11-20
    recentEnd: 2026-11-26
    peakImpressions: 402
    recentImpressions: 285
    commonQueries: 5
    positionDelta: 0.065
    impressionRatio: 0.678
    focusQueries:
      - fete de l'ours 2027
      - fête de l'ours 2027
      - fête de l ours prats de mollo 2027
      - fête de lours 2027
      - fete de l ours
---

## Mission retenue
Améliorer le comparatif des trois fêtes de l'Ours du Haut-Vallespir.

## Pourquoi cette mission
Les candidats précédents ont déjà été actualisés aujourd'hui. La baisse d'exposition de cette page ne démontre pas une perte de classement. Lacune indépendante vérifiée: Destination Canigó indique que chaque village organise une fête de l'ours junior, option familiale absente du guide. Le passage sur Arles-sur-Tech est également trop vague alors que le tourisme départemental décrit son repas collectif et son rituel distinct.

## Décision du lecteur
Choisir une fête ou une animation junior adaptée à son enfant et savoir quand réserver.

## Faits à traiter
Mettre les dates 2027 en évidence dès le début: Saint-Laurent du 12 au 14 février selon Tourisme Occitanie; les deux autres dates restent à venir. Ne pas recycler les dates 2026. Vérifier les modalités des fêtes junior et distinguer leur existence traditionnelle de leur programmation 2027 encore inconnue. Décrire le rituel propre à Arles-sur-Tech sans promettre une ambiance calme. Préserver les conseils de sécurité, les précautions poussette, vêtements, stationnement, l'inscription UNESCO, les images et crédits, ainsi que les hébergements pertinents.

## Sources de départ
- https://www.visit-canigo.com/pratique-agenda/agenda-manifestations/les-temps-forts-en-hiver/fetes-de-lours/
- https://www.tourisme-pyreneesorientales.com/agenda/grands-evenements/fetes-de-lours/
- https://www.tourisme-occitanie.com/fr/fiche/fete-et-manifestation/fetes-de-l-ours-prats-de-mollo-la-preste_TFOFMALAR0660018062/
- https://www.fetesdelours.com/
- Conserver les sources officielles existantes.

## Affiliation
https://www.booking.com/hotel/fr/restaurant-le-costabonne.fr.html : chambres familiales, restaurant et lit bébé gratuit sur demande confirmés sur la fiche. Conserver Falgos si son offre familiale est revérifiée. Ne pas garantir les disponibilités.

## Continuations internes
Éventuellement proposer le parc animalier des Angles ou le musée de Tautavel uniquement si une extension de séjour cohérente est établie; sinon aucun lien forcé.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(11)/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales/index.md

---
title: "Fêtes de l’Ours 2027: quelle fête choisir en famille dans les Pyrénées-Orientales ?"
subtitle: Trois villages du Haut-Vallespir, des traditions spectaculaires et des précautions à connaître avec des enfants
summary: À Prats-de-Mollo, Saint-Laurent-de-Cerdans et Arles-sur-Tech, découvrez les Fêtes de l’Ours 2027 et préparez votre sortie en famille.
slug: fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales
status: published
publishedAt: 2026-11-05T05:04:01+01:00
updatedAt: null
category: evenements
readingTime: 4
location:
  city: ""
  department: Pyrénées-Orientales
  region: Occitanie
topic:
  key: evenements|pyrenees-orientales|fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales|2026
  keywords:
    - Fêtes de l’Ours 2027
    - Fête de l’Ours Pyrénées-Orientales en famille
    - Haut-Vallespir carnaval
image:
  src: "/images/articles/2026/11/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales.webp"
  alt: "Participants à la Fête de l’Ours de Prats-de-Mollo en 2016, édition antérieure à 2027"
sources:
  - title: Fêtes de l’Ours du Haut-Vallespir - présentation
    url: https://www.fetesdelours.com/
  - title: Fête de l’Ours de Prats-de-Mollo - organisateurs
    url: https://www.fetesdelours.com/les-fetes-de-lours/fete-de-lours-de-prats-de-mollo-la-preste/
  - title: Fête de l’Ours de Saint-Laurent-de-Cerdans - organisateurs
    url: https://www.fetesdelours.com/les-fetes-de-lours/fete-de-lours-de-saint-laurent-de-cerdans/
  - title: Tourisme Occitanie - Fêtes de l’Ours 2027
    url: https://www.tourisme-occitanie.com/fr/fiche/fete-et-manifestation/fetes-de-l-ours-prats-de-mollo-la-preste_TFOFMALAR0660018062/
  - title: UNESCO - Les fêtes de l’Ours dans les Pyrénées
    url: https://ich.unesco.org/fr/RL/les-ftes-de-lours-dans-les-pyrnes-01846
affiliate:
  enabled: true
  type: travel
  destination: Pyrénées-Orientales
---
<!-- article-image-credit -->
*Photo: [Fabricio Cardenas](https://commons.wikimedia.org/wiki/File:Prats-de-Mollo_-_F%C3%AAte_de_l%27ours_1.JPG) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Chaque hiver, dans trois villages du Haut-Vallespir, des habitants déguisés en ours surgissent dans les rues, poursuivent la foule puis sont capturés. À **Prats-de-Mollo-la-Preste, Saint-Laurent-de-Cerdans et Arles-sur-Tech**, les Fêtes de l’Ours mêlent carnaval, musique et traditions catalanes. Un spectacle étonnant à découvrir en famille, mais qui peut impressionner les enfants sensibles au bruit, aux masques ou aux mouvements de foule.

## Trois villages, trois ambiances

<!-- article-image-body:02 -->

![Rasage rituel lors de la Fête de l'Ours à Arles-sur-Tech en février 2025](/images/articles/2026/11/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales-body-02.webp)

<!-- /article-image-body:02 -->

<!-- article-image-body:01 -->

![Fête de l'Ours de Saint-Laurent-de-Cerdans photographiée en février 2018](/images/articles/2026/11/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales-body-01.webp)

*Photo: [Fabricio Cardenas](https://commons.wikimedia.org/wiki/File:2018-02-25_-_F%C3%AAte_de_l%27ours_Saint-Laurent-de-Cerdans_11.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

**Prats-de-Mollo-la-Preste: une chasse à l’ours mouvementée.** Trois jeunes portent des toisons et s'enduisent d'un mélange d'huile et de noir de fumée. Ils poursuivent les participants et peuvent leur laisser une marque noire sur le visage. Leur capture et leur rasage symbolique marquent le retour à l'humanité. C'est une fête très physique, à envisager avec des enfants à l'aise dans une foule animée. Le [site des organisateurs](https://www.fetesdelours.com/les-fetes-de-lours/fete-de-lours-de-prats-de-mollo-la-preste/) décrit le rituel, mais affiche encore le programme **2026**.

**Saint-Laurent-de-Cerdans: l’ours au milieu du carnaval.** Le défilé accueille plusieurs figures traditionnelles, dont la **Monaca**. L'ours, capturé par le Meneur, est présenté à la foule sur les places du village. Costumes et personnages peuvent fasciner les enfants, mais les courses-poursuites restent impressionnantes. La [présentation des organisateurs](https://www.fetesdelours.com/les-fetes-de-lours/fete-de-lours-de-saint-laurent-de-cerdans/) détaille ces traditions. Son programme visible est également celui de **2026**.

**Arles-sur-Tech: une autre interprétation du même rite.** Cette troisième fête appartient au cycle traditionnel du Haut-Vallespir. Sans programme détaillé pour 2027, impossible de garantir une ambiance plus calme ou un parcours mieux adapté aux petits. Consultez le [site commun des Fêtes de l’Ours](https://www.fetesdelours.com/) avant de choisir.

## Pourquoi chasse-t-on l’ours ?

Les ours sont joués par des habitants, pas par des animaux. La poursuite, la capture et la transformation finale évoquent la fin de l'hiver, le retour du printemps et la relation entre les humains et la nature. Le mythe de Jean de l'Ours, être mi-homme, mi-ours, nourrit cet imaginaire.

Ces fêtes se transmettent au sein des villages, des associations et des familles. Depuis **2022**, les [fêtes de l’Ours dans les Pyrénées sont inscrites au patrimoine culturel immatériel de l’humanité par l’UNESCO](https://ich.unesco.org/fr/RL/les-ftes-de-lours-dans-les-pyrnes-01846). Cette reconnaissance concerne cinq villages en France et en Andorre, dont les trois communes du Haut-Vallespir.

## Avec des enfants: comment profiter de la fête ?

Avant de venir, expliquez que les ours sont des personnes costumées et que les poursuites font partie du rituel. Pour une première découverte, privilégiez un endroit où vous pourrez vous éloigner rapidement si l'enfant prend peur. Évitez les passages étroits et le cœur des attroupements.

À Prats-de-Mollo, le noir de fumée peut tacher les vêtements. Prévoyez des habits peu fragiles, des chaussures fermées et des vêtements chauds pour février. Avec un bébé ou une poussette, ne comptez pas sur une circulation fluide au milieu des défilés. Aucun parcours accessible ni espace calme spécifique pour 2027 n'est confirmé.

Il n'existe pas de village à recommander sans réserve aux tout-petits. Un enfant qui aime les carnavals bruyants peut apprécier la fête; un autre préférera observer de loin, voire éviter les séquences de poursuite.

## Dates des Fêtes de l’Ours 2027

La fiche de [Tourisme Occitanie](https://www.tourisme-occitanie.com/fr/fiche/fete-et-manifestation/fetes-de-l-ours-prats-de-mollo-la-preste_TFOFMALAR0660018062/) annonce les rendez-vous suivants:

- **Saint-Laurent-de-Cerdans: du 12 au 14 février 2027**, sous réserve de confirmation du programme par les organisateurs.
- **Prats-de-Mollo-la-Preste: date 2027 à venir.**
- **Arles-sur-Tech: date 2027 à venir.**

Ces dates ne précisent pas à elles seules l'heure de la chasse à l'ours. Les horaires des poursuites, les animations annexes et les lieux de départ doivent encore être confirmés. Attention aux programmes **2026** toujours visibles sur les sites des organisateurs.

## Organiser la visite

Les trois villages se trouvent dans le Haut-Vallespir, au sud du Canigó. En février, vérifiez la météo et les conditions de circulation avant de partir. Les éventuelles restrictions de stationnement, navettes et fermetures de rues pour 2027 ne sont pas encore précisées.

Les poursuites sont des fêtes populaires et aucune billetterie générale payante n'a été identifiée. Certains repas, bals ou événements annexes peuvent toutefois demander une réservation ou une participation: vérifiez le programme du village choisi.

## Où dormir pour prolonger la découverte ?

Si vous venez de loin, passer une nuit sur place permet de profiter des festivités sans reprendre immédiatement la route. Deux hébergements à considérer selon le village retenu:

- **À Prats-de-Mollo-la-Preste**, le [FASTHOTEL Le Costabonne](https://www.booking.com/hotel/fr/restaurant-le-costabonne.fr.html), place du Foiral, propose notamment des chambres familiales et un restaurant.
- **À Saint-Laurent-de-Cerdans**, le [Domaine de Falgos Golf & Spa](https://www.booking.com/hotel/fr/le-domaine-de-falgos.fr.html) dispose de chambres et d'une piscine intérieure. Vérifiez les conditions d'accès aux équipements avec des enfants.

Confirmez d'abord la date et le programme de votre fête, puis vérifiez les chambres disponibles et leurs conditions. Les tarifs et disponibilités pour février 2027 ne sont pas garantis.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/parentalite/quel-laep-choisir-a-perpignan-selon-l-age-et-le-jour/ | Quel LAEP choisir à Perpignan selon l'âge et le jour ? | parentalite | Perpignan, Pyrénées-Orientales, Occitanie
- /articles/activites/parc-animalier-des-angles-en-famille-quel-circuit-choisir-et-comment-preparer-la-visite/ | Parc animalier des Angles en famille: quel circuit choisir et comment préparer la visite ? | activites | Les Angles, Pyrénées-Orientales, Occitanie
- /articles/bons-plans/musee-de-tautavel-moins-cher-avec-lio-le-bon-plan-a-connaitre/ | Musée de Tautavel moins cher avec liO: le bon plan à connaître | bons-plans | Tautavel, Pyrénées-Orientales, Occitanie
- /articles/sorties/insectes-compagnie-perpignan-famille-2026/ | Insectes et compagnie à Perpignan: trois visites ludiques en famille en août | sorties | Perpignan, Pyrénées-Orientales, Occitanie
- /articles/cuisine/anchois-de-collioure-quelle-visite-choisir-avec-des-enfants/ | Anchois de Collioure: quelle visite choisir avec des enfants? | cuisine | Collioure, Pyrénées-Orientales, Occitanie
- /articles/evenements/course-des-chateaux-d-ottrott-2026-quelles-epreuves-choisir-pour-les-enfants/ | Course des Châteaux d'Ottrott 2026: quelles épreuves choisir pour les enfants? | evenements | Ottrott, Bas-Rhin, Grand Est
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/sorties/lascaux-iv-en-famille-decouvrir-les-peintures-et-choisir-sa-visite/ | Lascaux IV en famille: découvrir les peintures et choisir sa visite | sorties | Montignac-Lascaux, Dordogne, Nouvelle-Aquitaine
- /articles/evenements/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales/ | Fêtes de l’Ours 2027: quelle fête choisir en famille dans les Pyrénées-Orientales ? | evenements | Pyrénées-Orientales, Occitanie
- /articles/voyages/banyuls-sur-mer-en-famille-aquarium-et-balade-hors-saison/ | Banyuls-sur-Mer en famille: aquarium et balade hors saison | voyages | Banyuls-sur-Mer, Pyrénées-Orientales, Occitanie
- /articles/sorties/forteresse-de-salses-en-famille-ce-que-change-le-nouveau-parcours/ | Forteresse de Salses en famille: ce que change le nouveau parcours | sorties | Salses-le-Château, Pyrénées-Orientales, Occitanie
- /articles/maison/renover-une-facade-a-perpignan-jusqu-a-40-d-aide-selon-le-secteur/ | Rénover une façade à Perpignan: jusqu'à 40 % d'aide selon le secteur | maison | Perpignan, Pyrénées-Orientales, Occitanie
- /articles/vie-pratique/location-de-voiture-a-perpignan-en-famille-sieges-enfant-agences-et-bons-reflexes/ | Louer une voiture à Perpignan: aéroport, gare et stationnement | vie-pratique | Perpignan, Pyrénées-Orientales, Occitanie
- /articles/evenements/spectacles-pour-enfants-a-nantes-en-fevrier-2027-que-choisir-pendant-les-vacances/ | Spectacles pour enfants à Nantes en février 2027: que choisir pendant les vacances ? | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/cite-immersive-des-fables-a-paris-decouvrir-la-fontaine-en-famille/ | Cité immersive des Fables à Paris: découvrir La Fontaine en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/sculptures-sur-glace-et-neige-a-valloire-en-janvier-2027/ | Sculptures sur glace et neige à Valloire en janvier 2027 | evenements | Valloire, Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/seraphine-louis-a-metz-decouvrir-l-exposition-avec-les-enfants/ | Séraphine Louis à Metz: découvrir l’exposition avec les enfants | evenements | Metz, Moselle, Grand Est
- /articles/evenements/festival-contes-et-rencontres-2027-en-lozere-quels-spectacles-voir-en-famille/ | Festival Contes et Rencontres 2027 en Lozère: quels spectacles voir en famille ? | evenements | Lozère, Occitanie
- /articles/evenements/lumieres-d-afrique-2026-2027-a-sigean-les-lanternes-en-famille/ | Lumières d’Afrique 2026-2027 à Sigean: les lanternes en famille | evenements | Sigean, Aude, Occitanie
- /articles/evenements/natur-armor-2027-a-paimpol-preparer-sa-visite-en-famille/ | Natur’Armor 2027 à Paimpol: préparer sa visite en famille | evenements | Paimpol, Côtes-d'Armor, Bretagne
- /articles/evenements/noel-a-brive-2026-en-famille-animations-dates-et-parcours/ | Noël à Brive 2026 en famille: animations, dates et parcours | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine
- /articles/evenements/musee-maurice-denis-en-famille-decouvrir-les-nabis-a-saint-germain-en-laye/ | Musée Maurice Denis en famille: découvrir les Nabis à Saint-Germain-en-Laye | evenements | Saint-Germain-en-Laye, Yvelines, Île-de-France

### Historique Radar lié

- refresh | /articles/voyages/banyuls-sur-mer-en-famille-aquarium-et-balade-hors-saison/ | 2026-11-11T08:29:29.427Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
