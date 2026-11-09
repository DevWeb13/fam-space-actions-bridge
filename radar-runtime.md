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
title: "Maison des Parents aux Pennes-Mirabeau: ateliers gratuits et accueil des familles"
subtitle: Ateliers parent-enfant sur réservation, Maison Câlins en accès libre et horaires à vérifier
summary: Aux Pennes-Mirabeau, la Maison des Parents propose des ateliers gratuits et un accueil libre pour les 0-5 ans à Maison Câlins. Infos pratiques.
slug: maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles
status: published
publishedAt: 2026-10-16T14:09:03+02:00
updatedAt: null
category: parentalite
readingTime: 3
location:
  city: Les Pennes-Mirabeau
  department: Bouches-du-Rhône
  region: Provence-Alpes-Côte d’Azur
topic:
  key: parentalite|les-pennes-mirabeau|maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles|2026
  keywords:
    - Maison des Parents Les Pennes-Mirabeau
    - Maison Câlins accueil enfants parents
    - ateliers parentalité gratuits Bouches-du-Rhône
image:
  src: /images/articles/2026/10/maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles.webp
  alt: Vue générale des Pennes-Mirabeau depuis l'église Saint-Blaise, photographie de la commune sans lien avec les ateliers de la Maison des Parents
sources:
  - title: Ville des Pennes-Mirabeau - Présentation de la Maison des Parents
    url: https://pennes-mirabeau.org/index.php/def-mdp
  - title: Ville des Pennes-Mirabeau - Ateliers parentalité
    url: https://www.pennes-mirabeau.org/index.php/actu-mdp/314-parentalite
  - title: Ville des Pennes-Mirabeau - Goûter partagé du 20 octobre
    url: https://www.pennes-mirabeau.org/index.php/agenda/200-gouter20oct
  - title: Ville des Pennes-Mirabeau - Atelier bien-être du 21 octobre
    url: https://www.pennes-mirabeau.org/index.php/agenda/108-bien-etre21oct
  - title: Ville des Pennes-Mirabeau - Éveil musical du 28 octobre
    url: https://www.pennes-mirabeau.org/index.php/agenda/262-eveil28oct
  - title: Ville des Pennes-Mirabeau - Team Parents du 17 novembre
    url: https://www.pennes-mirabeau.org/index.php/agenda/219-bebe17nov
  - title: Ville des Pennes-Mirabeau - Maison Câlins
    url: https://www.pennes-mirabeau.org/index.php/infos-mdp/134-calins
  - title: Ville des Pennes-Mirabeau - Convention Maison Câlins 2024-2026
    url: https://www.pennes-mirabeau.org/images/pdf/ville/delib2023/12/266x23.pdf
  - title: Ville des Pennes-Mirabeau - Horaires de la Maison des Parents
    url: https://www.pennes-mirabeau.org/index.php/mdp
  - title: Ville des Pennes-Mirabeau - Guide municipal 2025-2026
    url: https://pennes-mirabeau.org/images/pdf/actu/25-26guide.pdf
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/parentalite/(2026)/(10)/maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles/index.md
  targetSha: 9cea767829eea6f4fb09b66e617989ac34658cb9
  targetUrl: /articles/parentalite/maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles/
  decision: Choisir entre un atelier gratuit à réserver et l'accueil libre de Maison Câlins, avec les prochaines dates, les âges concernés et les bons horaires.
  affiliationPotential: "Aucune affiliation naturelle: service municipal et LAEP gratuits, sans logique de séjour."
  gsc:
    retrievedAt: 2026-11-09T06:27:46+01:00
    dataThrough: 2026-11-07
    signal: uncertain
    basis: "Visibilité récente : 50 impressions sur trois jours, puis 10 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-18
    peakEnd: 2026-10-20
    recentStart: 2026-11-05
    recentEnd: 2026-11-07
    peakImpressions: 50
    recentImpressions: 10
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0.042
    focusQueries:
      - espace famille les pennes mirabeau
      - espace famille les pennes-mirabeau
      - crèche les pennes mirabeau
      - espace famille pennes mirabeau
      - oui les 2
---

---
title: "Maison des Parents aux Pennes-Mirabeau: ateliers gratuits et accueil des familles"
subtitle: "Ateliers sur réservation en novembre 2026 et Maison Câlins en accueil libre pour les 0-5 ans"
summary: "Aux Pennes-Mirabeau, découvrez les ateliers gratuits de novembre 2026 à réserver et l'accueil libre de Maison Câlins pour les enfants de 0 à 5 ans."
slug: maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles
status: published
publishedAt: 2026-10-16T14:09:03+02:00
updatedAt: null
reviewAt: 2026-11-26
category: parentalite
readingTime: 3
location:
  city: Les Pennes-Mirabeau
  department: Bouches-du-Rhône
  region: Provence-Alpes-Côte d’Azur
topic:
  key: parentalite|les-pennes-mirabeau|maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles|2026
  keywords:
    - Maison des Parents Les Pennes-Mirabeau
    - Maison Câlins accueil enfants parents
    - ateliers parentalité gratuits Bouches-du-Rhône
image:
  src: "/images/articles/2026/10/maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles.webp"
  alt: "Vue générale des Pennes-Mirabeau depuis l'église Saint-Blaise, photographie de la commune sans lien avec les ateliers de la Maison des Parents"
sources:
  - title: Ville des Pennes-Mirabeau - Présentation de la Maison des Parents
    url: https://pennes-mirabeau.org/index.php/def-mdp
  - title: Ville des Pennes-Mirabeau - Programme des ateliers parentalité
    url: https://pennes-mirabeau.org/index.php/actu-mdp/314-parentalite
  - title: Ville des Pennes-Mirabeau - Team Parents du 17 novembre
    url: https://pennes-mirabeau.org/index.php/agenda/276-team17nov
  - title: Ville des Pennes-Mirabeau - Massage bébé du 19 novembre
    url: https://pennes-mirabeau.org/index.php/agenda/286-massage19nov
  - title: Ville des Pennes-Mirabeau - Portage en écharpe du 24 novembre
    url: https://pennes-mirabeau.org/index.php/agenda/288-portage24nov
  - title: Ville des Pennes-Mirabeau - Bien-être du 25 novembre
    url: https://pennes-mirabeau.org/index.php/agenda/199-bien-etre25nov
  - title: Ville des Pennes-Mirabeau - Maison Câlins
    url: https://www.pennes-mirabeau.org/index.php/infos-mdp/134-calins
  - title: Ville des Pennes-Mirabeau - Convention Maison Câlins 2024-2026
    url: https://www.pennes-mirabeau.org/images/pdf/ville/delib2023/12/266x23.pdf
  - title: Ville des Pennes-Mirabeau - Horaires de la Maison des Parents
    url: https://www.pennes-mirabeau.org/index.php/mdp
  - title: Ville des Pennes-Mirabeau - Guide municipal 2025-2026
    url: https://pennes-mirabeau.org/images/pdf/actu/25-26guide.pdf
---
<!-- article-image-credit -->
*Photo: [kallerna](https://commons.wikimedia.org/wiki/File:Les_Pennes-Mirabeau.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Aux Pennes-Mirabeau, dans le quartier de La Gavotte, la Maison des Parents propose des informations, des échanges et des ateliers gratuits aux familles. Dans les mêmes locaux, **Maison Câlins** accueille librement les enfants de 0 à 5 ans accompagnés. La différence essentielle: **les ateliers nécessitent une inscription, Maison Câlins non**.

## Maison des Parents: quels ateliers réserver en novembre 2026 ?

Créée par la Ville avec la CAF des Bouches-du-Rhône, la [Maison des Parents](https://pennes-mirabeau.org/index.php/def-mdp) s'adresse aux parents d'enfants de différents âges, jusqu'à l'adolescence, ainsi qu'aux futurs parents selon les rendez-vous. Elle met aussi de la documentation à disposition.

Le [programme municipal](https://pennes-mirabeau.org/index.php/actu-mdp/314-parentalite) annonce quatre ateliers gratuits:

- **Mardi 17 novembre, de 18h à 20h:** [Team Parents](https://pennes-mirabeau.org/index.php/agenda/276-team17nov), un temps d'échange pour parents et futurs parents autour de la confiance et de la relation parent-enfant.
- **Jeudi 19 novembre, de 16h30 à 17h30:** [massage bébé](https://pennes-mirabeau.org/index.php/agenda/286-massage19nov), une initiation avec une infirmière puéricultrice pour les parents accompagnés d'un enfant de 0 à 1 an.
- **Mardi 24 novembre, de 16h à 17h30:** [portage en écharpe](https://pennes-mirabeau.org/index.php/agenda/288-portage24nov), pour parents et futurs parents. Apportez votre écharpe ou votre porte-bébé si vous en avez un; l'intervenante propose du matériel aux familles qui n'en disposent pas.
- **Mercredi 25 novembre, de 14h30 à 16h30:** [atelier bien-être](https://pennes-mirabeau.org/index.php/agenda/199-bien-etre25nov), destiné aux mamans et futures mamans. Prévoir un petit coussin et un plaid.

**Inscription en ligne obligatoire et places limitées:** chaque fiche d'atelier contient le formulaire à compléter. Pour toute question, contactez la Maison des Parents au **04 91 67 17 31**. Le programme évolue au fil des mois; vérifiez les prochaines dates auprès de la Ville après novembre.

## Maison Câlins: un accueil libre pour les 0-5 ans

**Maison Câlins** est un lieu d'accueil enfants-parents (LAEP) gratuit, ouvert aux enfants de la naissance à 5 ans accompagnés d'un parent ou d'un adulte référent. L'accueil est **sans inscription, anonyme et confidentiel**.

Des jeux, des livres, un coin bébé et des espaces de motricité permettent aux enfants de découvrir et de jouer, tandis que les adultes échangent avec l'équipe. On peut rester quelques minutes ou une partie de la matinée. L'adulte accompagne son enfant pendant toute la visite: **ce n'est ni une crèche ni un service de garde**.

**Attention aux jours d'ouverture:** la [fiche municipale Maison Câlins](https://www.pennes-mirabeau.org/index.php/infos-mdp/134-calins) indique **mercredi et jeudi de 9h à 12h**, tandis que la [convention municipale 2024-2026](https://www.pennes-mirabeau.org/images/pdf/ville/delib2023/12/266x23.pdf) prévoit **lundi et jeudi de 9h à 12h**. Ces deux documents officiels ne concordent pas: **appelez le 06 27 41 15 19 avant de vous déplacer**, notamment pour une première visite.

## Adresse, contacts et horaires de la Maison des Parents

**Adresse commune:** parc Saint-Georges, impasse Merlusse, quartier de La Gavotte, 13170 Les Pennes-Mirabeau.

**Maison des Parents:** maisondesparents@vlpm.com; **04 91 67 17 31** pour les ateliers, ou **06 84 20 53 69** indiqué dans la présentation générale.

Les horaires d'accueil hors ateliers méritent également une confirmation. La [page municipale](https://www.pennes-mirabeau.org/index.php/mdp) indique **lundi, mardi et jeudi de 14h à 18h**, **mercredi de 13h à 18h**, et fermeture le vendredi. Le [guide municipal 2025-2026](https://pennes-mirabeau.org/images/pdf/actu/25-26guide.pdf) affiche plutôt **lundi, mardi et jeudi de 13h à 17h30**, **mercredi de 9h à 12h puis de 13h à 17h30**.

Précisez au téléphone si vous souhaitez assister à un atelier, demander un renseignement ou venir à Maison Câlins: les conditions d'accès sont différentes.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/parentalite/(2026)/(10)/maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles/index.md

---
title: "Maison des Parents aux Pennes-Mirabeau: ateliers gratuits et accueil des familles"
subtitle: Ateliers parent-enfant sur réservation, Maison Câlins en accès libre et horaires à vérifier
summary: Aux Pennes-Mirabeau, la Maison des Parents propose des ateliers gratuits et un accueil libre pour les 0-5 ans à Maison Câlins. Infos pratiques.
slug: maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles
status: published
publishedAt: 2026-10-16T14:09:03+02:00
updatedAt: null
category: parentalite
readingTime: 3
location:
  city: Les Pennes-Mirabeau
  department: Bouches-du-Rhône
  region: Provence-Alpes-Côte d’Azur
topic:
  key: parentalite|les-pennes-mirabeau|maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles|2026
  keywords:
    - Maison des Parents Les Pennes-Mirabeau
    - Maison Câlins accueil enfants parents
    - ateliers parentalité gratuits Bouches-du-Rhône
image:
  src: "/images/articles/2026/10/maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles.webp"
  alt: "Vue générale des Pennes-Mirabeau depuis l'église Saint-Blaise, photographie de la commune sans lien avec les ateliers de la Maison des Parents"
sources:
  - title: Ville des Pennes-Mirabeau - Présentation de la Maison des Parents
    url: https://pennes-mirabeau.org/index.php/def-mdp
  - title: Ville des Pennes-Mirabeau - Ateliers parentalité
    url: https://www.pennes-mirabeau.org/index.php/actu-mdp/314-parentalite
  - title: Ville des Pennes-Mirabeau - Goûter partagé du 20 octobre
    url: https://www.pennes-mirabeau.org/index.php/agenda/200-gouter20oct
  - title: Ville des Pennes-Mirabeau - Atelier bien-être du 21 octobre
    url: https://www.pennes-mirabeau.org/index.php/agenda/108-bien-etre21oct
  - title: Ville des Pennes-Mirabeau - Éveil musical du 28 octobre
    url: https://www.pennes-mirabeau.org/index.php/agenda/262-eveil28oct
  - title: Ville des Pennes-Mirabeau - Team Parents du 17 novembre
    url: https://www.pennes-mirabeau.org/index.php/agenda/219-bebe17nov
  - title: Ville des Pennes-Mirabeau - Maison Câlins
    url: https://www.pennes-mirabeau.org/index.php/infos-mdp/134-calins
  - title: Ville des Pennes-Mirabeau - Convention Maison Câlins 2024-2026
    url: https://www.pennes-mirabeau.org/images/pdf/ville/delib2023/12/266x23.pdf
  - title: Ville des Pennes-Mirabeau - Horaires de la Maison des Parents
    url: https://www.pennes-mirabeau.org/index.php/mdp
  - title: Ville des Pennes-Mirabeau - Guide municipal 2025-2026
    url: https://pennes-mirabeau.org/images/pdf/actu/25-26guide.pdf
---
<!-- article-image-credit -->
*Photo: [kallerna](https://commons.wikimedia.org/wiki/File:Les_Pennes-Mirabeau.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Aux Pennes-Mirabeau (Bouches-du-Rhône), la Maison des Parents accueille les familles dans le quartier de La Gavotte. On peut y trouver des informations sur l'éducation des enfants, échanger avec d'autres parents et participer à des ateliers gratuits. Elle propose aussi, dans les mêmes locaux, un accueil libre réservé aux tout-petits accompagnés: Maison Câlins.

## Un lieu d'information et d'échange pour les parents

Créée par la Ville avec la CAF des Bouches-du-Rhône, la [Maison des Parents](https://pennes-mirabeau.org/index.php/def-mdp) met de la documentation à disposition et organise des rencontres autour du développement de l'enfant et de la vie familiale. Elle s'adresse aux parents d'enfants de différents âges, y compris des adolescents; certains rendez-vous sont destinés aux futurs parents.

**Les ateliers programmés se réservent**, contrairement à l'accueil libre de Maison Câlins. Pour un renseignement ou une visite en dehors d'un atelier, il est préférable de vérifier au préalable les horaires d'accueil.

## Quatre rendez-vous gratuits à l'automne 2026

Le [programme municipal de parentalité](https://www.pennes-mirabeau.org/index.php/actu-mdp/314-parentalite) annonce quatre rendez-vous:

- **Mardi 20 octobre, de 16h à 18h:** un [goûter familial sur le thème d'Halloween](https://www.pennes-mirabeau.org/index.php/agenda/200-gouter20oct), ouvert aux familles.
- **Mercredi 21 octobre, de 14h à 16h:** un [atelier bien-être en duo](https://www.pennes-mirabeau.org/index.php/agenda/108-bien-etre21oct) pour les parents et les enfants de 3 à 8 ans, mêlant notamment respiration, mouvement et créativité.
- **Mercredi 28 octobre:** un [éveil musical pour les 0-6 ans](https://www.pennes-mirabeau.org/index.php/agenda/262-eveil28oct), avec des créneaux annoncés à 10h et à 10h45.
- **Mardi 17 novembre, à 18h:** une rencontre [« Team Parents »](https://www.pennes-mirabeau.org/index.php/agenda/219-bebe17nov) consacrée aux futurs parents, pour échanger autour de l'arrivée d'un enfant.

**Ces ateliers sont gratuits, sur inscription en ligne obligatoire, dans la limite des places disponibles.** Chaque fiche municipale contient son formulaire. Pour les renseignements, la Ville indique le **04 91 67 17 31**. La Maison des Parents poursuit par ailleurs son activité au-delà de ce programme d'automne.

## Maison Câlins: venir librement avec un enfant de 0 à 5 ans

**Maison Câlins** est un lieu d'accueil enfants-parents (LAEP) gratuit pour les enfants de la naissance à 5 ans, accompagnés d'un parent ou d'un adulte référent. L'accueil se fait **sans inscription**, dans le respect de l'anonymat et de la confidentialité.

Les enfants y trouvent des jeux, des livres et des espaces de motricité; les parents peuvent échanger avec l'équipe. La visite peut être courte ou durer une partie de la matinée. L'adulte reste avec l'enfant: **ce n'est pas une crèche ni un mode de garde**. Ces conditions sont détaillées dans la [présentation municipale de Maison Câlins](https://www.pennes-mirabeau.org/index.php/infos-mdp/134-calins).

**Jours d'ouverture à confirmer:** la [page municipale de Maison Câlins](https://www.pennes-mirabeau.org/index.php/infos-mdp/134-calins) indique **mercredi et jeudi de 9h à 12h**, mais la [convention municipale 2024-2026](https://www.pennes-mirabeau.org/images/pdf/ville/delib2023/12/266x23.pdf) prévoit **lundi et jeudi de 9h à 12h**. Les deux sources officielles divergent. Avant une première visite, mieux vaut appeler le **06 27 41 15 19**.

## Adresse et contacts pour préparer sa visite

**Adresse:** parc Saint-Georges, impasse Merlusse, quartier de La Gavotte, 13170 Les Pennes-Mirabeau.

**Maison des Parents:** maisondesparents@vlpm.com, **04 91 67 17 31** pour les ateliers ou **06 84 20 53 69** indiqué dans la présentation générale.

Ses horaires affichés sont également contradictoires. La [page municipale de la Maison des Parents](https://www.pennes-mirabeau.org/index.php/mdp) mentionne **lundi, mardi et jeudi de 14h à 18h**, **mercredi de 13h à 18h**, et une fermeture le vendredi. Le [guide municipal 2025-2026](https://pennes-mirabeau.org/images/pdf/actu/25-26guide.pdf) indique plutôt **lundi, mardi et jeudi de 13h à 17h30**, et **mercredi de 9h à 12h puis de 13h à 17h30**.

Pour préparer une visite, précisez par téléphone si vous cherchez un renseignement, un atelier sur réservation ou l'accueil libre de Maison Câlins: leurs modalités et leurs horaires sont différents.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/parentalite/l-ilot-des-familles-a-tarbes-quels-ateliers-pour-les-parents-d-enfants-de-0-a-6-ans/ | L'îlot des Familles à Tarbes: quels ateliers pour les parents d'enfants de 0 à 6 ans? | parentalite | Tarbes, Hautes-Pyrénées, Occitanie
- /articles/sorties/musee-calisson-aix-visite-enfants-2026/ | Musée du Calisson à Aix-en-Provence: une enquête gourmande pour les enfants en 2026 | sorties | Aix-en-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/parentalite/maison-des-parents-a-guingamp-quand-y-aller-et-quel-service-choisir/ | Maison des Parents à Guingamp: quand y aller et quel service choisir ? | parentalite | Guingamp, Côtes-d'Armor, Bretagne
- /articles/sorties/carrieres-des-lumieres-avec-des-enfants-choisir-son-spectacle-et-preparer-la-visite/ | Carrières des Lumières avec des enfants: choisir son spectacle et préparer la visite | sorties | Les Baux-de-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges/ | Noël à Aix-en-Provence 2026 en famille: marchés, santons et manèges | evenements | Aix-en-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/parentalite/la-maison-des-petits-pas-a-troyes-un-lieu-pour-souffler-avec-son-jeune-enfant/ | La Maison des Petits Pas à Troyes: un lieu pour souffler avec son jeune enfant | parentalite | Troyes, Aube, Grand Est
- /articles/parentalite/la-petite-maison-a-agen-un-lieu-gratuit-pour-les-parents-et-les-enfants-de-0-a-3-ans/ | La Petite Maison à Agen: un lieu gratuit pour les parents et les enfants de 0 à 3 ans | parentalite | Agen, Lot-et-Garonne, Nouvelle-Aquitaine
- /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | Vacances de la Toussaint 2026 à la Cité des sciences: les ateliers numériques gratuits avec des enfants | sorties | Paris, Paris, Île-de-France
- /articles/parentalite/maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles/ | Maison des Parents aux Pennes-Mirabeau: ateliers gratuits et accueil des familles | parentalite | Les Pennes-Mirabeau, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/voyages/pont-de-gau-en-famille-en-automne-et-en-hiver-flamants-roses-et-marais/ | Pont de Gau en famille en automne et en hiver: flamants roses et marais | voyages | Saintes-Maries-de-la-Mer, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/tous-en-sons-2026-a-marseille-quel-spectacle-choisir-selon-l-age-des-enfants/ | Tous en Sons ! 2026 à Marseille: spectacles enfants, âges et tarifs | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/saint-remy-de-provence-en-famille-glanum-musees-et-entrees-gratuites/ | Saint-Rémy-de-Provence en famille: Glanum, musées et entrées gratuites | bons-plans | Saint-Rémy-de-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir/ | Arles en famille à petit budget: quelles visites et quel pass choisir? | bons-plans | Arles, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | Foire aux santons de Marseille 2026: dates, inauguration et visite en famille | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | Fête de la mer 2026 à Marseille avec des enfants: quelle escale choisir? | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/mucem-a-la-toussaint-2026-quelle-activite-en-ribambelle-choisir-selon-l-age/ | Mucem à la Toussaint 2026: le programme En Ribambelle avec des enfants | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/sorties/cosquer-mediterranee-avec-des-enfants-age-poussette-tarifs/ | Cosquer Méditerranée avec des enfants: que peut-on visiter selon leur âge? | sorties | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/cuisine/food-tour-a-aix-en-provence-avec-des-enfants-lequel-choisir-en-2026/ | Food tour à Aix-en-Provence avec des enfants: lequel choisir en 2026? | cuisine | Aix-en-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/parentalite/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes/ | Maisons des 1000 premiers jours à Paris: deux adresses pour les parents et les bébés | parentalite | Paris, Paris, Île-de-France
- /articles/parentalite/lieux-d-accueil-enfants-parents-dans-le-cher-ou-aller-avec-son-tout-petit/ | Lieux d’accueil enfants-parents dans le Cher: où aller avec son tout-petit ? | parentalite | Cher, Centre-Val de Loire
- /articles/parentalite/rejouets-a-cerences-donner-completer-et-acheter-des-jouets-d-occasion/ | Rejouets à Cérences: donner, compléter et acheter des jouets d’occasion | parentalite | Cérences, Manche, Normandie
- /articles/parentalite/laep-dans-le-loir-et-cher-ou-rencontrer-d-autres-parents-avec-son-tout-petit/ | LAEP dans le Loir-et-Cher: où rencontrer d'autres parents avec son tout-petit ? | parentalite | Loir-et-Cher, Centre-Val de Loire

### Historique Radar lié

- refresh | /articles/bons-plans/arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir/ | 2026-11-07T18:35:07.024Z
- opportunity | /articles/sorties/cosquer-mediterranee-avec-des-enfants-age-poussette-tarifs/ | 2026-10-03T11:22:17.769Z
- opportunity | /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | 2026-10-06T16:58:51.946Z
- opportunity | /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | 2026-10-23T15:29:55.218Z
- opportunity | /articles/evenements/mucem-a-la-toussaint-2026-quelle-activite-en-ribambelle-choisir-selon-l-age/ | 2026-10-04T10:54:39.216Z
- opportunity | /articles/evenements/noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges/ | 2026-10-25T15:16:03.590Z
- opportunity | /articles/evenements/tous-en-sons-2026-a-marseille-quel-spectacle-choisir-selon-l-age-des-enfants/ | 2026-10-31T13:29:50.851Z
- opportunity | /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | 2026-10-05T11:24:52.310Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
