# Radar Fam Space - Phase 2/3

## Mission

Radar utilise Google Search Console et la recherche web pour choisir le travail éditorial qui apporte le plus de valeur à Fam Space: améliorer une page réellement perfectible, développer une intention proche d'une page forte, ou publier à temps une opportunité locale/saisonnière. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 2/3

Tu es journaliste web et responsable du parcours lecteur. Le candidat validé de phase 1 est fourni intégralement plus bas. Pour un refresh, l'article source exact est fourni intégralement plus bas.

Un refresh utilise l'ancien article comme référence interne, mais le résultat doit se lire comme un article actuel et autonome. Toute information encore vraie et utile doit rester, notamment prix décisionnels, durées, réservation, âge/taille, accessibilité, accès, contraintes, services bébé/enfants, repas et autres détails pratiques; une information fausse, périmée ou réellement redondante peut être retirée.

Suis le diagnostic éditorial du brief:
- `rank_loss`: réponds mieux aux intentions réellement en recul;
- `coverage_loss`: améliore la couverture utile sans présenter cela comme une perte de ranking;
- `uncertain`: applique uniquement la raison éditoriale indépendante vérifiée;
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
title: "LAEP à Nantes: où aller avec un enfant de moins de 6 ans?"
subtitle: Adresses, âges, horaires et ouvertures pendant les vacances d'automne 2026
summary: "LAEP à Nantes: quels accueils pour les moins de 6 ans, selon le quartier et l'âge? Horaires habituels, particularités des vacances de Toussaint, tarifs et accès."
slug: laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans
status: published
publishedAt: 2026-09-30T11:04:48+02:00
updatedAt: 2026-10-17T18:40:41.897Z
category: parentalite
readingTime: 5
location:
  city: Nantes
  department: Loire-Atlantique
  region: Pays de la Loire
topic:
  key: parentalite|nantes|laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans|2026
  keywords:
    - LAEP Nantes
    - lieu accueil enfants parents Nantes
image:
  src: /images/articles/2026/09/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans.webp
  alt: Vue aérienne du centre-ville de Nantes
sources:
  - title: Ville de Nantes - LAEP et horaires par quartier
    url: https://metropole.nantes.fr/mes-services-mon-quotidien/les-lieux-d-accueil-enfants-parents-pour-le-bien-etre-de-vos-enfants
  - title: Ville de Nantes - Le Square, horaires et accessibilité
    url: https://metropole.nantes.fr/lieu/laep-le-square
  - title: Ville de Nantes - La Perdriole, accessibilité
    url: https://metropole.nantes.fr/lieu/laep-la-perdriole
  - title: Ville de Nantes - La Marouette, calendrier de vacances
    url: https://metropole.nantes.fr/lieu/laep-la-marouette
  - title: La Marouette - horaires et participation
    url: https://marouette.fr/infos-pratiques/
  - title: Questions de parents - Le Square
    url: https://parents.loire-atlantique.fr/44/laep-le-square-nantes/parents_10658
  - title: Questions de parents - L'Oasis
    url: https://parents.loire-atlantique.fr/44/laep-municipal-l-oasis-nantes/parents_10690
  - title: Questions de parents - La Perdriole
    url: https://parents.loire-atlantique.fr/44/laep-la-perdriole-nantes/parents_10688
  - title: Questions de parents - accueils Accoord
    url: https://parents.loire-atlantique.fr/44/lieux-d-accueil-enfants-parents-laep-de-l-accoord/parents_10701
  - title: Nantes Métropole - accompagnement des parents
    url: https://metropole.nantes.fr/dossier-parents-des-solutions-face-aux-defis-du-quotidien
  - title: Service Public - dates des vacances de la Toussaint 2026
    url: https://www.service-public.gouv.fr/particuliers/actualites/A15125
reviewAt: 2026-11-02
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/parentalite/(2026)/(09)/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/index.md
  targetSha: 36afe923af83c9990307b2f7f846b92f2aefa2ca
  targetUrl: /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/
  decision: Choisir un LAEP réellement adapté à Nantes dès la reprise du 2 novembre 2026, selon l'âge de l'enfant, le quartier, les jours d'accueil, le coût et l'accessibilité.
  affiliationPotential: "Aucune affiliation naturelle : service de proximité pour parents et jeunes enfants, sans achat ni séjour pertinent."
  gsc:
    retrievedAt: 2026-11-02T02:27:57+01:00
    dataThrough: 2026-10-30
    signal: uncertain
    basis: Baisse d'impressions observée; causalité et classement non établis.
    peakStart: 2026-10-03
    peakEnd: 2026-10-09
    recentStart: 2026-10-24
    recentEnd: 2026-10-30
    peakImpressions: 138
    recentImpressions: 13
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - laep nantes
      - laep
      - cape nantes
---

## Mission retenue

Actualiser le guide des lieux d'accueil enfants-parents (LAEP) de Nantes pour la période scolaire après la Toussaint 2026. Le guide est actuellement centré sur les vacances du 17 octobre au 1er novembre, terminées, alors que sa révision était prévue le 2 novembre.

## Pourquoi cette mission

La baisse GSC (138 à 13 impressions entre les semaines comparées) est classée `uncertain` et ne prouve pas une perte de classement. En revanche, la fin des vacances rend l'angle principal obsolète et empêche de choisir directement un accueil ouvert cette semaine. Ce refresh utile et immédiat passe devant une expansion de la page forte sur les transports parisiens (plusieurs trajets déjà traités) et devant le Festival des 3 Continents à Nantes du 20 au 28 novembre (opportunité vérifiée, mais moins urgente pour les familles de tout-petits).

## Décision du lecteur

Identifier sans déplacement inutile le LAEP correspondant à l'âge de son enfant et à ses disponibilités, et savoir s'il est gratuit, sans inscription et praticable avec une poussette ou en fauteuil.

## Faits à traiter

- Remplacer l'accroche, le sous-titre et la section centrés sur les vacances de Toussaint par les créneaux ordinaires à partir du 2 novembre; ne pas laisser les dates du 19 au 30 octobre comme conseil actuel.
- Conserver les adresses, âges, horaires, transports et contacts utiles, en revérifiant la liste municipale actualisée le 16 octobre: La Perdriole, Le Nid de Jordan, Le Sablier, L'Oasis, Le Square, La Marouette, les cinq accueils Accoord, Au 104, La Laetitia et À l'Abord'âge.
- Distinguer clairement les accueils Accoord et associatifs fermés pendant les vacances mais ouverts en période scolaire; nommer les accueils par leur nom réel lorsqu'il aide à les retrouver.
- La Marouette: mardi et jeudi 15 h 30-18 h 30, participation libre par visite; le site de l'association précise un accueil jusqu'au quatrième anniversaire. Vérifier les éventuelles annonces particulières et ne pas présenter ses créneaux de Toussaint comme actuels.
- Préserver les avertissements utiles sur l'accès PMR contradictoire au Square, l'escalier sans ascenseur à La Perdriole, les conditions financières des associations, l'accompagnement obligatoire de l'enfant et les horaires susceptibles de changer. Ne pas inventer de confirmations individuelles.

## Sources de départ

- Ville de Nantes, annuaire LAEP par quartier (mis à jour le 16 octobre 2026): https://metropole.nantes.fr/mes-services-mon-quotidien/les-lieux-d-accueil-enfants-parents-pour-le-bien-etre-de-vos-enfants
- Ville de Nantes, La Perdriole et ses créneaux du 3 et 6 novembre: https://metropole.nantes.fr/lieu/laep-la-perdriole
- Ville de Nantes, Le Square et accessibilité: https://metropole.nantes.fr/lieu/laep-le-square
- Association La Marouette, horaires et participation: https://marouette.fr/infos-pratiques/

## Affiliation

Aucune offre partenaire naturelle pour ce service local gratuit ou à participation modeste; ne pas ajouter d'hébergement artificiel.

## Continuations internes

- Conserver le lien vers le guide Fam Space sur la première visite en LAEP, sans réécrire les principes généraux.
- Préserver les informations durables de l'article existant plutôt que de repartir de zéro; garder les liens officiels de vérification dans les Sources.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/parentalite/(2026)/(09)/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/index.md

---
title: "LAEP à Nantes: où aller avec un enfant de moins de 6 ans?"
subtitle: Adresses, âges, horaires et ouvertures pendant les vacances d'automne 2026
summary: "LAEP à Nantes: quels accueils pour les moins de 6 ans, selon le quartier et l'âge? Horaires habituels, particularités des vacances de Toussaint, tarifs et accès."
slug: laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans
status: published
publishedAt: 2026-09-30T11:04:48+02:00
updatedAt: 2026-10-17T18:40:41.897Z
category: parentalite
readingTime: 5
location:
  city: Nantes
  department: Loire-Atlantique
  region: Pays de la Loire
topic:
  key: parentalite|nantes|laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans|2026
  keywords:
    - LAEP Nantes
    - lieu accueil enfants parents Nantes
image:
  src: /images/articles/2026/09/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans.webp
  alt: Vue aérienne du centre-ville de Nantes
sources:
  - title: Ville de Nantes - LAEP et horaires par quartier
    url: https://metropole.nantes.fr/mes-services-mon-quotidien/les-lieux-d-accueil-enfants-parents-pour-le-bien-etre-de-vos-enfants
  - title: Ville de Nantes - Le Square, horaires et accessibilité
    url: https://metropole.nantes.fr/lieu/laep-le-square
  - title: Ville de Nantes - La Perdriole, accessibilité
    url: https://metropole.nantes.fr/lieu/laep-la-perdriole
  - title: Ville de Nantes - La Marouette, calendrier de vacances
    url: https://metropole.nantes.fr/lieu/laep-la-marouette
  - title: La Marouette - horaires et participation
    url: https://marouette.fr/infos-pratiques/
  - title: Questions de parents - Le Square
    url: https://parents.loire-atlantique.fr/44/laep-le-square-nantes/parents_10658
  - title: Questions de parents - L'Oasis
    url: https://parents.loire-atlantique.fr/44/laep-municipal-l-oasis-nantes/parents_10690
  - title: Questions de parents - La Perdriole
    url: https://parents.loire-atlantique.fr/44/laep-la-perdriole-nantes/parents_10688
  - title: Questions de parents - accueils Accoord
    url: https://parents.loire-atlantique.fr/44/lieux-d-accueil-enfants-parents-laep-de-l-accoord/parents_10701
  - title: Nantes Métropole - accompagnement des parents
    url: https://metropole.nantes.fr/dossier-parents-des-solutions-face-aux-defis-du-quotidien
  - title: Service Public - dates des vacances de la Toussaint 2026
    url: https://www.service-public.gouv.fr/particuliers/actualites/A15125
reviewAt: 2026-11-02
---

Un **lieu d'accueil enfants-parents (LAEP)** permet aux jeunes enfants de jouer, de rencontrer d'autres enfants et aux adultes d'échanger avec d'autres familles ou des accueillants. Le parent, grand-parent ou autre adulte référent **reste avec l'enfant**: ce n'est ni une crèche ni un mode de garde. Nantes en compte dans plusieurs quartiers, mais **les âges admis, horaires et ouvertures pendant les vacances varient**.

Les horaires varient selon les quartiers, mais le principe d'accueil reste le même. Notre guide [comprendre comment se passe une première visite dans un LAEP](/articles/parentalite/laep-enfants-parents-gratuit-sans-inscription/) explique le rôle de l'adulte et le jeu libre.

## Vacances d'automne 2026: quels LAEP accueillent les familles?

Pendant les vacances de la Toussaint **du 17 octobre au 1er novembre**, les accueils se concentrent sur les jours ouvrés **du 19 au 30 octobre**. La [liste des LAEP publiée par la Ville de Nantes](https://metropole.nantes.fr/mes-services-mon-quotidien/les-lieux-d-accueil-enfants-parents-pour-le-bien-etre-de-vos-enfants) indique les horaires habituels ci-dessous. Vérifiez les éventuelles fermetures exceptionnelles auprès de la structure avant de venir:

- **La Perdriole**, quartier est: mardi de **9h à 12h et 15h à 18h**, vendredi de **15h à 18h**; enfants jusqu'à **5 ans**.
- **Le Nid de Jordan**, quartier est: mardi de **9h à 12h et 14h à 17h**; enfants jusqu'à **3 ans**.
- **Le Sablier**, quartier ouest: mardi et jeudi de **15h à 18h**, mercredi de **9h30 à 12h et 15h à 18h**; enfants jusqu'à **4 ans**.
- **L'Oasis**, quartier ouest: lundi de **9h à 12h et 15h à 18h**, jeudi de **15h à 18h**; enfants jusqu'à **5 ans**.
- **Le Square**, quartier nord: mardi de **15h à 18h**, jeudi de **9h à 12h et 15h à 18h**. La [fiche du Square](https://metropole.nantes.fr/lieu/laep-le-square) confirme des créneaux les **20 et 22 octobre**; elle indique normalement la fermeture les autres jours. Pour la semaine suivante, confirmez les horaires au **06 75 09 22 30**.

Deux autres options se distinguent. **La Marouette**, au centre, accueille les familles le **mardi 20 et le jeudi 22 octobre de 15h30 à 18h30**, puis ferme durant la seconde semaine de vacances, selon sa [fiche municipale](https://metropole.nantes.fr/lieu/laep-la-marouette). Son [site](https://marouette.fr/infos-pratiques/) mentionne une participation financière libre à chaque visite. **À l'Abord'âge**, café associatif du quartier sud, accueille les familles le **mercredi, vendredi et samedi de 10h à 18h30**, avec un **jeudi supplémentaire pendant les vacances**, et demande une participation annuelle de **7 à 60 € par famille**.

À l'inverse, les cinq LAEP **Accoord** de **Port-Boyer, Bottière, Halvêque-Beaujoire, Beaulieu et Malakoff** indiquent des créneaux **hors vacances scolaires**. C'est aussi le cas d'**Au 104** et de **La Laetitia**: leurs créneaux habituels ne doivent pas être considérés comme ouverts pendant ces vacances.

## Gratuit, sans inscription: quelles règles?

Les trois LAEP municipaux **Le Square, La Perdriole et L'Oasis** sont présentés comme **gratuits, anonymes, confidentiels et sans inscription**. Beaucoup d'autres lieux fonctionnent aussi en accès libre. Certains accueils associatifs demandent toutefois une contribution: **Au 104**, par exemple, prévoit une participation libre et confidentielle, et **À l'Abord'âge** une cotisation annuelle.

L'accueil n'est pas une activité à réserver comme un atelier. L'enfant peut jouer ou observer à son rythme tandis que l'adulte reste sur place. Plusieurs structures accueillent aussi les futurs parents. Nantes présente ces espaces comme des lieux de socialisation et d'échange, utiles notamment avant l'entrée en collectivité.

## Trois LAEP municipaux à repérer selon le quartier

<!-- article-image-body:01 -->

![Rue des Platanes à Nantes, où se situe le LAEP La Perdriole](/images/articles/2026/09/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans-body-01.webp)

*Photo: [Kalepom](https://commons.wikimedia.org/wiki/File:Rue_des_Platanes.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

**La Perdriole**, **29 rue des Platanes**, reçoit les enfants de **0 à 5 ans** et les futurs parents. Le **C1, arrêt Platanes**, permet de rejoindre le secteur. La [fiche municipale](https://metropole.nantes.fr/lieu/laep-la-perdriole) affiche « lieu accessible » mais mentionne également un **escalier sans ascenseur**. Si vous utilisez un fauteuil roulant ou une poussette difficile à porter, demandez confirmation du cheminement au **02 40 49 48 00**.

**Le Square**, **6 rue Samuel-de-Champlain**, accueille les **0-5 ans** et les futurs parents. Il est proche de l'arrêt **Chêne des Anglais**. Pour l'accessibilité, les sources divergent: la [fiche municipale](https://metropole.nantes.fr/lieu/laep-le-square) indique **« Accessible PMR: Non »**, alors que [Questions de parents](https://parents.loire-atlantique.fr/44/laep-le-square-nantes/parents_10658) annonce un accès PMR. Une confirmation téléphonique est indispensable en cas de besoin particulier.

**L'Oasis**, **31 rue du Plessis-Gautron**, reçoit les **0-5 ans** et les futurs parents. Accès par le **tram 1, arrêt Lauriers**, ou le **bus 11, arrêt Jean-Moulin**. La [fiche de L'Oasis](https://parents.loire-atlantique.fr/44/laep-municipal-l-oasis-nantes/parents_10690) détaille son accueil gratuit sans inscription.

## D'autres adresses, selon l'âge et le jour

<!-- article-image-body:02 -->

![Rue du Port-Boyer à Nantes, quartier où fonctionne un LAEP de l'Accoord](/images/articles/2026/09/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans-body-02.webp)

<!-- /article-image-body:02 -->

**Le Nid de Jordan**, **2 rue de la Petite-Noë**, reçoit les **0-3 ans** le mardi. **Le Sablier**, **16 rue Charles-Perron**, accueille les **0-4 ans**. **La Marouette**, **15 rue de l'Héronnière**, reçoit les **0-4 ans**; tram 1, arrêt **Médiathèque**. Pour l'automne 2026, son ouverture limitée à la première semaine mérite une attention particulière.

Pendant les semaines scolaires, cinq structures de l'**Accoord** complètent l'offre à **Port-Boyer, Bottière, Halvêque-Beaujoire, Beaulieu et Malakoff**, généralement en accès libre et gratuit. La [liste Accoord](https://parents.loire-atlantique.fr/44/lieux-d-accueil-enfants-parents-laep-de-l-accoord/parents_10701) détaille leurs lieux et créneaux. **Au 104**, **104 rue Saint-Jacques**, accueille les **0-4 ans** le mercredi hors vacances; **La Laetitia**, **49 rue Chanoine-Larose**, propose des matinées **lundi et vendredi** pour les **0-3 ans**, également hors vacances.

## Comment choisir sans déplacement inutile?

Vérifiez d'abord **l'âge maximum**, puis le quartier, le jour d'accueil et le **fonctionnement pendant les vacances**. Un lieu qui reçoit uniquement les moins de 3 ans ne convient pas à un enfant de 4 ans, même s'il est tout près. L'accès avec une poussette ou en fauteuil mérite aussi une vérification spécifique pour les lieux dont les fiches se contredisent.

Pour confirmer un créneau, retrouvez les coordonnées sur la [liste officielle des LAEP de Nantes](https://metropole.nantes.fr/mes-services-mon-quotidien/les-lieux-d-accueil-enfants-parents-pour-le-bien-etre-de-vos-enfants). Les accueils indiqués « hors vacances scolaires » reprennent leur fonctionnement selon leur propre calendrier.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/parentalite/laep-a-grenoble-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP à Grenoble: où aller avec un enfant de moins de 6 ans? | parentalite | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-en-indre-et-loire-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP en Indre-et-Loire: où aller avec un enfant de moins de 6 ans | parentalite | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/parentalite/laep-dans-le-cantal-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP dans le Cantal: où aller avec un enfant de moins de 6 ans | parentalite | Aurillac, Cantal, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-en-seine-et-marne-ou-aller-et-comment-se-passe-une-premiere-visite/ | LAEP en Seine-et-Marne: où aller et comment se passe une première visite? | parentalite | Meaux, Seine-et-Marne, Île-de-France
- /articles/parentalite/laep-a-caen-4-lieux-pour-venir-avec-un-enfant-sans-inscription/ | LAEP à Caen: 4 lieux pour venir avec un enfant sans inscription | parentalite | Caen, Calvados, Normandie
- /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | Noël à Nantes 2026: marché de Noël et Voyage en hiver en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/utopiales-2026-a-nantes-en-famille-dates-billets-et-conseils-pour-preparer-la-visite/ | Utopiales 2026 à Nantes en famille: dates, billets et conseils pour préparer la visite | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/bons-plans/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites/ | Pass Nantes en famille en 2026: tarifs, visites incluses et alternatives gratuites | bons-plans | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | Festi'Mômes 2026 à Nantes: séances, spectacles et tarifs en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP à Nantes: où aller avec un enfant de moins de 6 ans? | parentalite | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/cuisine/atelier-cuisine-parent-enfant-a-nantes-gratuit-au-breil-ou-cours-prive/ | Ateliers cuisine parent-enfant à Nantes: où cuisiner ensemble? | cuisine | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/maison/broyeur-de-vegetaux-a-nantes-metropole-acheter-a-plusieurs-ou-profiter-des-operations-gratuites/ | Broyeur de végétaux à Nantes Métropole: acheter à plusieurs ou profiter des opérations gratuites ? | maison | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/vie-pratique/tarification-solidaire-naolib-a-nantes-combien-paie-une-famille-et-comment-faire-la-demande/ | Tarification solidaire Naolib à Nantes: combien paie une famille et comment faire la demande? | vie-pratique | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/folie-plantes-nantes-2026-famille/ | Folie des plantes 2026 à Nantes: un week-end gratuit à découvrir en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/bons-plans/chateau-de-chateaubriant-en-famille-une-sortie-a-petit-budget/ | Château de Châteaubriant en famille, une sortie à petit budget | bons-plans | Châteaubriant, Loire-Atlantique, Pays de la Loire
- /articles/activites/planete-sauvage-en-famille-tarifs-2026-duree-et-conseils-de-visite/ | Planète Sauvage en famille: tarifs 2026, durée et conseils de visite | activites | Port-Saint-Père, Loire-Atlantique, Pays de la Loire
- /articles/evenements/festival-ete-continue-carquefou-2026-famille/ | Festival L’Été Continue 2026 à Carquefou: six jours gratuits en famille | evenements | Carquefou, Loire-Atlantique, Pays de la Loire
- /articles/evenements/voyage-a-nantes-2026-en-famille/ | Voyage à Nantes 2026 en famille: parcours court et plan | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | Ludothèques du Grand Nancy: où jouer en famille et emprunter des jeux | parentalite | Meurthe-et-Moselle, Grand Est
- /articles/parentalite/laep-dans-l-herault-jouer-avec-son-enfant-et-rencontrer-d-autres-parents/ | LAEP dans l'Hérault: jouer avec son enfant et rencontrer d'autres parents | parentalite | Hérault, Occitanie
- /articles/parentalite/a-sainte-rose-decouvrir-la-mangrove-avec-son-enfant-en-pedalo/ | À Sainte-Rose, découvrir la mangrove avec son enfant en pédalo | parentalite | Sainte-Rose, Guadeloupe, Guadeloupe
- /articles/parentalite/a-manosque-ou-sortir-avec-un-bebe-ou-un-tout-petit/ | À Manosque, où sortir avec un bébé ou un tout-petit ? | parentalite | Manosque, Alpes-de-Haute-Provence, Provence-Alpes-Côte d’Azur

### Historique Radar lié

- opportunity | /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | 2026-10-17T11:48:00.184Z
- refresh | /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | 2026-10-17T18:40:41.973Z
- opportunity | /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | 2026-10-24T15:27:41.430Z
- refresh | /articles/activites/planete-sauvage-en-famille-tarifs-2026-duree-et-conseils-de-visite/ | 2026-10-02T14:23:16.612Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
