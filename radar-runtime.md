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
title: "Palais idéal du facteur Cheval en famille: visite et conseils à Hauterives"
subtitle: Animaux sculptés, jeu d'observation et informations pratiques pour découvrir ce monument de la Drôme avec des enfants
summary: "À Hauterives, explorez le Palais idéal avec les enfants: sculptures à observer, histoire de Ferdinand Cheval, durée, tarifs, abonnements et accès."
slug: palais-ideal-du-facteur-cheval-en-famille-visite-et-conseils-a-hauterives
status: published
publishedAt: 2026-10-27T02:02:18+01:00
updatedAt: 2026-11-10T15:36:17.548Z
category: activites
readingTime: 6
location:
  city: Hauterives
  department: Drôme
  region: Auvergne-Rhône-Alpes
topic:
  key: activites|hauterives|palais-ideal-du-facteur-cheval-en-famille-visite-et-conseils-a-hauterives|2026
  keywords:
    - Palais idéal du facteur Cheval en famille
    - visiter le Palais idéal avec des enfants
    - Hauterives Drôme sortie famille
image:
  src: /images/articles/2026/10/palais-ideal-du-facteur-cheval-en-famille-visite-et-conseils-a-hauterives.webp
  alt: Sculptures d'animaux et arches de pierre du Palais idéal du facteur Cheval à Hauterives
sources:
  - title: Palais idéal du facteur Cheval - Histoire
    url: https://www.facteurcheval.com/histoire/
  - title: Office de tourisme Porte de DrômArdèche - L'histoire du Palais idéal
    url: https://www.autour-du-palais-ideal.fr/decouvrir/palais-ideal-du-facteur-cheval/lhistoire-du-palais-ideal/
  - title: Palais idéal du facteur Cheval - Informations pratiques et tarifs
    url: https://www.facteurcheval.com/infos-pratiques/
  - title: Palais idéal du facteur Cheval - Abonnement
    url: https://www.facteurcheval.com/abonnement/
  - title: Palais idéal du facteur Cheval - Conditions générales de vente et d'accès
    url: https://www.facteurcheval.com/mentions-legales/
  - title: Palais idéal du facteur Cheval - Réservation conseillée
    url: https://www.facteurcheval.com/reservation-conseillee/
  - title: Auvergne-Rhône-Alpes Tourisme - Visite du Palais idéal
    url: https://legrandtour.auvergnerhonealpes-tourisme.com/incontournables/le-palais-ideal-du-facteur-cheval/
  - title: Palais idéal du facteur Cheval - Exposition Juliana Dorso
    url: https://www.facteurcheval.com/programmation/evenements/juliana-dorso/
  - title: Palais idéal du facteur Cheval - Actualités
    url: https://www.facteurcheval.com/actualites/
  - title: Cars Région Drôme - Ligne D03
    url: https://www.laregionvoustransporte.fr/cars-region/cars-region-de-la-drome/ligne/d03-le-grand-serre-hauterives-saint-vallier/
  - title: Cars Région Drôme - Ligne D12
    url: https://www.laregionvoustransporte.fr/cars-region/cars-region-de-la-drome/ligne/d12-romans-le-grand-serre-beuarepaire/
affiliate:
  enabled: true
  type: travel
  destination: Hauterives
reviewAt: 2027-04-19
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/activites/(2026)/(10)/palais-ideal-du-facteur-cheval-en-famille-visite-et-conseils-a-hauterives/index.md
  targetSha: bc6836b78a535c47af4bd151f6c7b8dcf0d36581
  targetUrl: /articles/activites/palais-ideal-du-facteur-cheval-en-famille-visite-et-conseils-a-hauterives/
  decision: Choisir une visite adaptée à l'âge des enfants, préparer les supports de jeu et connaître les réductions et conditions d'accès avant de réserver.
  affiliationPotential: Conserver le gîte familial Abritel vérifié à Hauterives; aucun billet partenaire direct identifié.
  gsc:
    retrievedAt: 2026-11-25T07:30:00+01:00
    dataThrough: 2026-11-23
    signal: uncertain
    basis: "Visibilité récente : 29 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-28
    peakEnd: 2026-10-30
    recentStart: 2026-11-21
    recentEnd: 2026-11-23
    peakImpressions: 29
    recentImpressions: 0
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - conseils de réservation
      - hauterive cheval
      - palais du facteur cheval
      - visiter le palais du facteur cheval
---

## Mission retenue
Refresh du Palais idéal du facteur Cheval à Hauterives.

## Pourquoi cette mission
Baisse rapide de visibilité, cause non établie. Lacune indépendante: la page ne mentionne ni les supports de visite officiels par âge (imagier et quiz), ni la gratuité pour les enfants en situation de handicap jusqu'à 16 ans, ni les tarifs réduits. L'annonce de travaux indique désormais le 6 novembre, non le 23 octobre. Toulouse, Cacao et Disneyland ont été rafraîchis aujourd'hui; Orléans couvre déjà les informations hivernales vérifiées.

## Décision du lecteur
Choisir une visite adaptée à l'âge des enfants et préparer les supports de jeu, le budget et les conditions d'accès.

## Faits à traiter
Ajouter l'imagier dès 3 ans, le quiz dès 8 ans, leur téléchargement officiel, le musée inclus et les visites commentées gratuites de 20 minutes uniquement aux mois et horaires annoncés. Compléter les tarifs réduits et la gratuité handicap jusqu'à 16 ans; préciser le calendrier des fermetures sans extrapoler les tarifs 2027. Rectifier la date annoncée des travaux sans affirmer leur achèvement. Préserver histoire, jeu libre, durée, tarifs et comparatifs abonnements, réservation y compris billet gratuit, consignes, accès cars D03/D12, exposition, images et crédits, hébergements pertinents.

## Sources de départ
- https://www.facteurcheval.com/visitez-le-palais/seul-ou-en-famille/
- https://www.facteurcheval.com/infos-pratiques/
- https://www.facteurcheval.com/actualites/
- https://www.facteurcheval.com/reservation-conseillee/
- https://www.facteurcheval.com/programmation/evenements/juliana-dorso/

## Affiliation
Pas de billet direct identifié chez Tiqets/GetYourGuide/Klook. Conserver le gîte Abritel https://www.abritel.fr/location-vacances/p1823668 (6 personnes, 3 chambres, cuisine, 3 min à pied selon la fiche). Booking La Parenthèse: page inaccessible à la vérification automatique, contrôler avant toute modification.

## Continuations internes
Conserver le lien Cité du Chocolat Valrhona pour une autre sortie; utiliser le guide Drôme sans voiture pour les déplacements généraux si utile.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/activites/(2026)/(10)/palais-ideal-du-facteur-cheval-en-famille-visite-et-conseils-a-hauterives/index.md

---
title: "Palais idéal du facteur Cheval en famille: visite et conseils à Hauterives"
subtitle: Animaux sculptés, jeu d'observation et informations pratiques pour découvrir ce monument de la Drôme avec des enfants
summary: "À Hauterives, explorez le Palais idéal avec les enfants: sculptures à observer, histoire de Ferdinand Cheval, durée, tarifs, abonnements et accès."
slug: palais-ideal-du-facteur-cheval-en-famille-visite-et-conseils-a-hauterives
status: published
publishedAt: 2026-10-27T02:02:18+01:00
updatedAt: 2026-11-10T15:36:17.548Z
category: activites
readingTime: 6
location:
  city: Hauterives
  department: Drôme
  region: Auvergne-Rhône-Alpes
topic:
  key: activites|hauterives|palais-ideal-du-facteur-cheval-en-famille-visite-et-conseils-a-hauterives|2026
  keywords:
    - Palais idéal du facteur Cheval en famille
    - visiter le Palais idéal avec des enfants
    - Hauterives Drôme sortie famille
image:
  src: /images/articles/2026/10/palais-ideal-du-facteur-cheval-en-famille-visite-et-conseils-a-hauterives.webp
  alt: Sculptures d'animaux et arches de pierre du Palais idéal du facteur Cheval à Hauterives
sources:
  - title: Palais idéal du facteur Cheval - Histoire
    url: https://www.facteurcheval.com/histoire/
  - title: Office de tourisme Porte de DrômArdèche - L'histoire du Palais idéal
    url: https://www.autour-du-palais-ideal.fr/decouvrir/palais-ideal-du-facteur-cheval/lhistoire-du-palais-ideal/
  - title: Palais idéal du facteur Cheval - Informations pratiques et tarifs
    url: https://www.facteurcheval.com/infos-pratiques/
  - title: Palais idéal du facteur Cheval - Abonnement
    url: https://www.facteurcheval.com/abonnement/
  - title: Palais idéal du facteur Cheval - Conditions générales de vente et d'accès
    url: https://www.facteurcheval.com/mentions-legales/
  - title: Palais idéal du facteur Cheval - Réservation conseillée
    url: https://www.facteurcheval.com/reservation-conseillee/
  - title: Auvergne-Rhône-Alpes Tourisme - Visite du Palais idéal
    url: https://legrandtour.auvergnerhonealpes-tourisme.com/incontournables/le-palais-ideal-du-facteur-cheval/
  - title: Palais idéal du facteur Cheval - Exposition Juliana Dorso
    url: https://www.facteurcheval.com/programmation/evenements/juliana-dorso/
  - title: Palais idéal du facteur Cheval - Actualités
    url: https://www.facteurcheval.com/actualites/
  - title: Cars Région Drôme - Ligne D03
    url: https://www.laregionvoustransporte.fr/cars-region/cars-region-de-la-drome/ligne/d03-le-grand-serre-hauterives-saint-vallier/
  - title: Cars Région Drôme - Ligne D12
    url: https://www.laregionvoustransporte.fr/cars-region/cars-region-de-la-drome/ligne/d12-romans-le-grand-serre-beuarepaire/
affiliate:
  enabled: true
  type: travel
  destination: Hauterives
reviewAt: 2027-04-19
---

Un palais construit par un facteur, sans architecte, et peuplé d'animaux de pierre: à Hauterives, dans le nord de la Drôme, le Palais idéal de Ferdinand Cheval se découvre en famille comme un monde imaginaire grandeur nature. Entre façades sculptées, passages autorisés et espace muséographique, les enfants peuvent chercher des créatures, reconnaître des bâtiments et découvrir l'histoire d'un homme qui a consacré 33 ans à son rêve. Ce n'est ni un château meublé ni un parc d'attractions.

## Un jeu d'observation parmi les sculptures

<!-- article-image-body:01 -->

![Détail des sculptures de la façade est du Palais idéal du facteur Cheval à Hauterives](/images/articles/2026/10/palais-ideal-du-facteur-cheval-en-famille-visite-et-conseils-a-hauterives-body-01.webp)

*Photo: [Chbesset](https://commons.wikimedia.org/wiki/File:D%C3%A9tail_fa%C3%A7ade_est.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Commencez par la façade est, là où Ferdinand Cheval a entrepris son œuvre. Autour de la « Source de Vie », cherchez le lion et le chien. Repérez ensuite les trois géants, les temples et les formes qui évoquent un conte. Le bestiaire du Palais comprend notamment une pieuvre, un caïman, un éléphant, un pélican et un ours. La façade ouest fait voyager entre des architectures imaginées à partir de différents pays, dont un chalet suisse.

**Le petit défi Fam Space:** chaque enfant choisit trois détails à retrouver, par exemple un animal, un personnage et un bâtiment. Les plus grands peuvent aussi comparer les façades ou inventer une histoire à partir d'une sculpture. C'est une proposition de jeu libre, pas une chasse au trésor organisée par le monument.

La présentation historique officielle décrit les façades et leurs figures. L'[office de tourisme](https://www.autour-du-palais-ideal.fr/decouvrir/palais-ideal-du-facteur-cheval/lhistoire-du-palais-ideal/) présente également les espaces à découvrir. Certaines parties peuvent être inaccessibles selon les conditions de visite: respectez les protections et les indications sur place.

## L'histoire du facteur Cheval à raconter aux enfants

<!-- article-image-body:02 -->

![Tombeau construit par Ferdinand Cheval dans le cimetière communal d'Hauterives, distinct du Palais idéal](/images/articles/2026/10/palais-ideal-du-facteur-cheval-en-famille-visite-et-conseils-a-hauterives-body-02.webp)

*Photo: [Bleugrenouille](https://commons.wikimedia.org/wiki/File:La_tombe_du_facteur_Cheval.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

En 1879, Ferdinand Cheval, facteur rural, trébuche sur une pierre étonnante pendant sa tournée. Elle réveille une idée: construire un palais dans son jardin. Il collecte des pierres au fil de ses trajets, les transporte notamment avec une brouette et poursuit son chantier pendant **33 ans**, jusqu'en 1912.

On peut le raconter simplement: « Il distribuait le courrier et, pendant son temps libre, construisait le palais qu'il avait imaginé. » Son œuvre, qui n'était pas destinée à être habitée, a été classée monument historique en 1969.

Un détail mérite d'être expliqué: le tombeau égyptien sculpté dans le Palais n'est pas sa sépulture. Ferdinand Cheval a ensuite construit un autre tombeau, au cimetière d'Hauterives, où il repose aujourd'hui. Le site du Palais distingue bien ces deux réalisations.

## Quelle durée de visite prévoir ?

Comptez **environ 1 h 30**, selon l'[estimation d'Auvergne-Rhône-Alpes Tourisme](https://legrandtour.auvergnerhonealpes-tourisme.com/incontournables/le-palais-ideal-du-facteur-cheval/). Cette durée reste indicative.

Avec de jeunes enfants, privilégiez les façades et quelques sculptures faciles à reconnaître. Avec des enfants plus grands, prenez le temps de comparer les architectures, de lire certaines inscriptions et de visiter l'espace muséographique. Le parcours réel dépend aussi de l'affluence et des zones ouvertes.

## Horaires, billets et abonnements en 2026

Le Palais idéal se situe **8 rue du Palais, 26390 Hauterives**. Les horaires officiels indiquent une ouverture de **9 h 30 à 17 h 30 en octobre et novembre**, puis de **9 h 30 à 16 h 30 en décembre**. Le monument est fermé le 25 décembre et le 1er janvier. Pour janvier 2027 et les autres dates futures, consultez le calendrier actualisé: les fermetures exceptionnelles affichées pour janvier 2026 ne permettent pas de déduire celles de 2027.

Les **tarifs individuels 2026** sont de **10,50 € par adulte** et **6,50 € de 6 à 16 ans inclus**; l'entrée est gratuite avant 6 ans. La réservation en ligne réduit chaque billet payant de 1 €. Pour deux adultes et deux enfants de 6 à 16 ans, cela représente **34 € sur place contre 30 € en ligne** pour une visite, hors réductions particulières.

Si vous pensez revenir, le Palais propose aussi un **abonnement annuel à 15 € par adulte et 9 € par enfant de 6 à 16 ans**. Deux visites au tarif individuel sur place coûteraient 21 € par adulte et 13 € par enfant, contre 15 € et 9 € en abonnement. Pour cette même famille de quatre personnes, deux visites reviennent à 68 € sur place ou 60 € avec des billets en ligne, contre **48 € en abonnements annuels**. Ces abonnements sont individuels et nominatifs, non coupe-file, valables un an pour les visites de journée et ne dispensent pas de réserver un créneau à chaque venue; les événements spéciaux ne sont pas inclus. Vérifiez les conditions de l'abonnement et sa disponibilité avant achat. La réduction de 1 € sur les billets en ligne ne doit pas être présumée applicable à l'abonnement.

**Réserver à l'avance est fortement conseillé**, notamment pendant les vacances. L'accès est soumis à une jauge et seule la réservation garantit l'entrée au créneau choisi, selon l'annonce officielle. Même un enfant de moins de 6 ans doit avoir son billet gratuit. Les conditions de vente précisent que les billets ne sont ni échangeables ni remboursables et qu'ils peuvent être présentés sur téléphone.

## Poussette, sacs à dos, repas et accès sans voiture

Le site comprend des passages extérieurs et des différences de niveau. Un accueil adapté est annoncé, mais **toutes les terrasses et tous les passages ne sont pas nécessairement praticables en poussette ou en fauteuil**. Pour connaître le parcours accessible à votre famille, contactez le monument au **04 75 68 81 19**. La [fiche touristique régionale](https://legrandtour.auvergnerhonealpes-tourisme.com/incontournables/le-palais-ideal-du-facteur-cheval/) détaille les aménagements signalés.

**Les sacs à dos doivent être déposés dans les consignes sécurisées prévues à cet effet**, selon les informations pratiques du monument. Ils ne sont pas admis pendant la visite; vous pouvez donc venir avec un sac, mais devrez le laisser en consigne. Les pique-niques et la restauration sont interdits dans l'enceinte. Les animaux ne sont pas admis, sauf chiens d'assistance. Prévoyez le repas dans le village, avant ou après la visite. Des toilettes et des parkings sont signalés à proximité.

**En transports en commun**, les cars Région [D03, notamment depuis Saint-Vallier](https://www.laregionvoustransporte.fr/cars-region/cars-region-de-la-drome/ligne/d03-le-grand-serre-hauterives-saint-vallier/) et [D12, sur l'axe Romans-sur-Isère et Beaurepaire](https://www.laregionvoustransporte.fr/cars-region/cars-region-de-la-drome/ligne/d12-romans-le-grand-serre-beuarepaire/), desservent l'arrêt « Place de la Galaure » à Hauterives. Vérifiez les jours de circulation, les correspondances et surtout l'horaire du retour avant de réserver vos billets d'entrée.

## Exposition temporaire et travaux: les points d'actualité

Du **19 septembre 2026 au 18 avril 2027**, l'exposition **« 140 ans et un jour » de Juliana Dorso** fait dialoguer l'univers du facteur Cheval avec celui de Madame de Sévigné à travers quinze peintures. Pour les enfants attirés par le dessin, c'est l'occasion de comparer les œuvres exposées aux sculptures du Palais. Il ne s'agit pas d'un atelier familial permanent. Présentation officielle de l'exposition.

Le monument annonçait également des **travaux sur la façade sud et le sommet du tombeau égyptien jusqu'au 23 octobre 2026**. L'annonce toujours visible dans les actualités officielles ne confirme pas expressément que toutes les restrictions ont été levées. Si ces parties motivent votre venue, demandez leur état à l'accueil avant de partir.

## Dormir à Hauterives pour prolonger la découverte

Pour les familles qui viennent de loin, une nuit sur place évite de repartir juste après la visite. La [maison La Parenthèse sur Booking.com](https://www.booking.com/hotel/fr/la-parenthese-a-hauterives.fr.html), à environ trois minutes à pied du Palais, dispose de trois chambres, d'une cuisine et d'un jardin pour accueillir jusqu'à sept personnes. Autre possibilité, le [gîte de la Taillanderie sur Abritel](https://www.abritel.fr/location-vacances/p1823668) accueille jusqu'à six personnes dans trois chambres, avec cuisine et terrasse, à environ 150 mètres du monument. Vérifiez les disponibilités et les conditions pour vos dates.

Si vous souhaitez organiser une seconde sortie dans la Drôme, notre [guide de la Cité du Chocolat Valrhona en famille](https://www.fam-space.fr/articles/sorties/cite-du-chocolat-valrhona-en-famille-tarifs-duree-et-conseils-de-visite/) propose une visite différente, à Tain-l'Hermitage.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/vie-pratique/drome-sans-voiture-avec-des-enfants-train-cars-et-bus-pour-se-deplacer/ | Drôme sans voiture avec des enfants: train, cars et bus pour se déplacer | vie-pratique | Drôme, Auvergne-Rhône-Alpes
- /articles/parentalite/premier-week-end-a-avignon-avec-un-bebe-ou-dormir-et-quoi-prevoir/ | Avignon avec un bébé: poussette, Palais des Papes et où dormir | parentalite | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/avignonnais-palais-des-papes-et-pont-gratuits-le-week-end/ | Avignonnais: Palais des Papes et Pont gratuits le week-end | bons-plans | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | Salon du Cheval de Paris 2026 en famille: ateliers, jumping et Nuit du Cheval | evenements | Paris, Paris, Île-de-France
- /articles/evenements/equidays-2026-en-famille-dans-le-calvados-villages-gratuits-parade-et-animations/ | Équidays 2026 en famille dans le Calvados: villages gratuits, parade et animations | evenements | Caen, Calvados, Normandie
- /articles/voyages/belle-ile-en-mer-en-famille-sans-voiture-ferry-et-deplacements/ | Belle-Île-en-Mer en famille sans voiture: ferry et déplacements | voyages | Le Palais, Morbihan, Bretagne
- /articles/evenements/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel/ | Noël 2026 à Chambéry en famille: marchés, parade et ateliers | evenements | Chambéry, Savoie, Auvergne-Rhône-Alpes
- /articles/sorties/palais-roure-avignon-famille-2026/ | Palais du Roure à Avignon en famille: retour sur les rendez-vous gratuits d'août 2026 | sorties | Avignon, Vaucluse, Provence-Alpes-Côte d'Azur
- /articles/activites/palais-ideal-du-facteur-cheval-en-famille-visite-et-conseils-a-hauterives/ | Palais idéal du facteur Cheval en famille: visite et conseils à Hauterives | activites | Hauterives, Drôme, Auvergne-Rhône-Alpes
- /articles/maison/poterie-a-dieulefit-en-famille-ateliers-et-savoir-faire/ | Poterie à Dieulefit en famille: ateliers et savoir-faire | maison | Dieulefit, Drôme, Auvergne-Rhône-Alpes
- /articles/maison/a-crest-amenager-sa-maison-avec-la-chignole/ | À Crest, aménager sa maison avec La Chignole | maison | Crest, Drôme, Auvergne-Rhône-Alpes
- /articles/evenements/noel-2026-au-chateau-de-grignan-dates-tarifs-et-visite-en-famille/ | Noël 2026 au château de Grignan: dates, tarifs et visite en famille | evenements | Grignan, Drôme, Auvergne-Rhône-Alpes
- /articles/activites/cite-du-chocolat-valrhona-a-la-toussaint-2026-quel-atelier-choisir-selon-l-age/ | Cité du Chocolat Valrhona à la Toussaint 2026: animations et ateliers avec des enfants | activites | Tain-l'Hermitage, Drôme, Auvergne-Rhône-Alpes
- /articles/voyages/canoe-a-saillans-en-famille-3-6-9-ou-14-km/ | Canoë à Saillans en famille: 3, 6, 9 ou 14 km ? | voyages | Saillans, Drôme, Auvergne-Rhône-Alpes
- /articles/sorties/ferme-aux-crocodiles-a-pierrelatte-faut-il-prevoir-une-demi-journee/ | Ferme aux Crocodiles à Pierrelatte: faut-il prévoir une demi-journée ? | sorties | Pierrelatte, Drôme, Auvergne-Rhône-Alpes
- /articles/bons-plans/carte-top-dep-art-comment-utiliser-les-45-et-les-4-sorties-offertes-dans-la-drome/ | Carte Top Dép'Art: comment utiliser les 45 € et les 4 sorties offertes dans la Drôme | bons-plans | Valence, Drôme, Auvergne-Rhône-Alpes
- /articles/parentalite/promeneurs-du-net-parentalite-dans-la-drome-a-qui-parler-en-ligne-quand-on-est-parent/ | Promeneurs du Net Parentalité dans la Drôme: à qui parler en ligne quand on est parent? | parentalite | Valence, Drôme, Auvergne-Rhône-Alpes
- /articles/cuisine/week-end-gourmand-a-nyons-en-famille-marche-olives-et-bonnes-adresses/ | Week-end gourmand à Nyons en famille: marché, olives et bonnes adresses | cuisine | Nyons, Drôme, Auvergne-Rhône-Alpes
- /articles/activites/a-pointe-noire-decouvrir-la-riviere-en-famille-avec-l-aquarando-d-acomat/ | À Pointe-Noire, découvrir la rivière en famille avec l’aquarando d’Acomat | activites | Pointe-Noire, Guadeloupe, Guadeloupe
- /articles/activites/musee-de-l-illusion-a-lyon-en-famille-que-voir-et-combien-coute-la-visite/ | Musée de l'Illusion à Lyon en famille: que voir et combien coûte la visite ? | activites | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/activites/parc-animalier-d-auvergne-en-famille-billets-animaux-et-conseils-de-visite/ | Parc animalier d'Auvergne en famille: billets, animaux et conseils de visite | activites | Ardes, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/activites/ferme-des-chanteraines-en-famille-animaux-ateliers-et-balade-gratuite/ | Ferme des Chanteraines en famille: animaux, ateliers et balade gratuite | activites | Villeneuve-la-Garenne, Hauts-de-Seine, Île-de-France

### Historique Radar lié

- refresh | /articles/voyages/belle-ile-en-mer-en-famille-sans-voiture-ferry-et-deplacements/ | 2026-11-11T14:37:08.889Z
- opportunity | /articles/activites/cite-du-chocolat-valrhona-a-la-toussaint-2026-quel-atelier-choisir-selon-l-age/ | 2026-10-05T14:27:51.219Z
- opportunity | /articles/evenements/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel/ | 2026-11-01T09:37:48.790Z
- refresh | /articles/evenements/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel/ | 2026-11-17T01:29:09.873Z
- refresh | /articles/activites/palais-ideal-du-facteur-cheval-en-famille-visite-et-conseils-a-hauterives/ | 2026-11-10T15:36:17.613Z
- opportunity | /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | 2026-10-22T04:59:04.773Z
- refresh | /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | 2026-11-19T03:32:19.795Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
