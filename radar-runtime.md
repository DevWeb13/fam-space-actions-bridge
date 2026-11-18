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
title: "Maisons des 1000 premiers jours à Paris: deux adresses pour les parents et les bébés"
subtitle: Accueil libre, ateliers sur inscription et horaires dans les 18e et 20e
summary: "Deux Maisons gratuites à Paris pour les futurs parents et les tout-petits: adresses, horaires, accueil libre, ateliers datés et réservations."
slug: maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes
status: published
publishedAt: 2026-11-09T06:06:02+01:00
updatedAt: null
category: parentalite
readingTime: 4
location:
  city: Paris
  department: Paris
  region: Île-de-France
topic:
  key: parentalite|paris|maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes|2026
  keywords:
    - Maisons des 1000 premiers jours Paris
    - activités gratuites bébé Paris
    - soutien parentalité Paris
image:
  src: /images/articles/2026/11/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes.webp
  alt: Passage des Tourelles dans le 20e arrondissement de Paris, où se trouve l'une des Maisons des 1000 premiers jours
sources:
  - title: Ville de Paris - Deux Maisons des 1000 premiers jours
    url: https://www.paris.fr/pages/deux-maisons-des-1000-premiers-jours-ouvrent-leurs-portes-a-paris-32106
  - title: Ville de Paris - Maison des 1000 premiers jours du 18e
    url: https://www.paris.fr/lieux/maison-des-1000-premiers-jours-du-18eme-arrondissement-20653
  - title: Ville de Paris - Maison des 1000 premiers jours du 20e
    url: https://www.paris.fr/lieux/maison-des-1000-premiers-jours-du-20eme-arrondissement-20652
  - title: Ville de Paris - Atelier santé environnement dans le 18e
    url: https://www.paris.fr/evenements/mon-premier-atelier-sante-environnement-a-la-maison-des-1000-premiers-jours-du-18eme-116240
  - title: Ville de Paris - Gestes qui sauvent pour bébé
    url: https://www.paris.fr/evenements/gestes-qui-sauvent-maison-des-1000-premiers-jours-du-18eme-106067
  - title: Ville de Paris - Ateliers créatifs parents-enfants
    url: https://www.paris.fr/evenements/ateliers-creatifs-parents-enfants-maison-des-1000-jours-18eme-109749
  - title: Ville de Paris - Ateliers santé environnement à Paris
    url: https://www.paris.fr/evenements/mon-premier-atelier-sante-environnement-pour-bien-demarrer-avec-votre-bebe-101801
  - title: CAF de Paris - Les lieux d'accueil enfants-parents
    url: https://www.caf.fr/allocataires/caf-de-paris/offre-de-service/vie-personnelle/les-lieux-d-accueil-enfants-parents
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/parentalite/(2026)/(11)/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes/index.md
  targetSha: 20bb1aa124160026c4432c9f9d17d8794fa143f2
  targetUrl: /articles/parentalite/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes/
  decision: Choisir entre les Maisons des 18e et 20e selon l'âge de l'enfant, les créneaux d'accueil libre et les ateliers réellement accessibles, puis savoir quand et comment s'inscrire.
  affiliationPotential: "Aucune affiliation naturelle: accueil et ateliers municipaux gratuits, sans logique de réservation commerciale ni d'hébergement."
  gsc:
    retrievedAt: 2026-11-18T00:34:26+01:00
    dataThrough: 2026-11-15
    signal: coverage_loss
    basis: "Visibilité récente : 64 impressions sur trois jours, puis 13 sur les trois derniers jours consolidés; cause non établie. Baisse d'exposition sur les requêtes visibles (ratio 0.25), sans recul de classement comparable établi."
    peakStart: 2026-11-10
    peakEnd: 2026-11-12
    recentStart: 2026-11-13
    recentEnd: 2026-11-15
    peakImpressions: 64
    recentImpressions: 13
    commonQueries: 1
    positionDelta: 1
    impressionRatio: 0.25
    focusQueries:
      - maison des 1000 premiers jours paris 20
      - maison des 1000 premiers jours paris
      - la maison des 1000 premiers jours paris
      - maison des 1000 premiers jours paris 18
reviewAt: 2026-12-17
---

<!-- article-image-credit -->
*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Passage_Tourelles_-_Paris_XX_(FR75)_-_2021-06-10_-_1.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Paris, deux **Maisons des 1000 premiers jours** accueillent gratuitement les futurs parents, les familles de tout-petits et leurs proches, dans les 18e et 20e arrondissements. On peut y rencontrer d'autres parents, jouer avec son enfant, poser des questions sur la grossesse ou le développement de bébé et participer à des activités.

Ces lieux municipaux ne sont ni des crèches où laisser son enfant ni des cabinets de consultation médicale. La différence essentielle avant de se déplacer: **l'accueil libre ne nécessite pas de réservation, mais certains ateliers imposent une inscription**. Les places et les programmes peuvent changer.

## Dans le 18e: 16 rue Cavé

<!-- article-image-body:01 -->

![Vue de la rue Cavé dans le 18e arrondissement de Paris, sans montrer la Maison](/images/articles/2026/11/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes-body-01.webp)

*Photo: [Mbzt](https://commons.wikimedia.org/wiki/File:P1330182_Paris_XVIII_rue_Cave_rwk.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

La [Maison du 18e](https://www.paris.fr/lieux/maison-des-1000-premiers-jours-du-18eme-arrondissement-20653) se trouve au rez-de-chaussée du Pôle santé Goutte d'Or, près des métros La Chapelle et Barbès. Elle accueille principalement les futurs parents et les familles d'enfants de **0 à 2 ans**.

**Accueil libre habituel:** mardi, mercredi et jeudi de **9 h 30 à 12 h 30** et de **14 h à 17 h 30**. Les autres jours dépendent du programme.

**Attention aux exceptions:** jeudi **19 novembre 2026**, fermeture le matin et accueil uniquement de **14 h à 17 h**. Fermeture du **25 décembre 2026 au 1er janvier 2027 inclus**.

**Contact:** 01 53 41 18 99 ou maison1000jours18@paris.fr. La Ville confirme toilettes, **table à langer** et accès aux personnes à mobilité réduite.

### Quels ateliers réserver dans le 18e ?

- **Santé environnement:** les **24 novembre et 22 décembre 2026**, de **10 h à 12 h**. Gratuit, **réservation obligatoire** via la [page de l'atelier municipal](https://www.paris.fr/evenements/mon-premier-atelier-sante-environnement-a-la-maison-des-1000-premiers-jours-du-18eme-116240). Destiné aux futurs parents et parents de nouveau-nés, il aborde notamment les produits d'hygiène, les jouets et les produits ménagers.
- **Gestes qui sauvent pour bébé:** les **26 novembre et 17 décembre**, de **10 h à 12 h**. Gratuit, **inscription obligatoire auprès de la Maison**, selon la [fiche officielle](https://www.paris.fr/evenements/gestes-qui-sauvent-maison-des-1000-premiers-jours-du-18eme-106067).
- **Ateliers créatifs parents-enfants:** les mercredis programmés jusqu'au **16 décembre**, de **15 h 45 à 17 h 15**, dès **6 mois** et jusqu'à l'entrée à l'école. Inscription par courriel à maison1000jours18@paris.fr; la [Ville précise qu'une participation libre le jour même est possible](https://www.paris.fr/evenements/ateliers-creatifs-parents-enfants-maison-des-1000-jours-18eme-109749). Ce n'est donc pas la même règle que pour les deux ateliers précédents.

Les activités habituelles comprennent aussi comptines, rencontres et groupes de parole. Vérifiez le programme et les disponibilités avant de vous rendre à une séance précise.

## Dans le 20e: 9 passage des Tourelles

La [Maison du 20e](https://www.paris.fr/lieux/maison-des-1000-premiers-jours-du-20eme-arrondissement-20652), près du métro **Porte des Lilas**, s'adresse aux futurs parents et aux familles d'enfants de **moins de deux à trois ans**.

**Accueil libre habituel:**
- Lundi: **14 h à 17 h 30**.
- Mardi, mercredi et jeudi: **9 h 30 à 12 h 30** et **14 h à 17 h 30**.
- Vendredi: **9 h 30 à 12 h 30**.
- Samedi et dimanche: fermé.

**Fermeture de fin d'année:** la fiche municipale annonce une fermeture à partir du **28 décembre**, tandis que sa rubrique d'horaires exceptionnels indique une fermeture du **25 décembre 2026 au 1er janvier 2027**. Par prudence, vérifiez directement auprès de l'équipe pour cette période.

**Contact:** 01 84 82 19 02 ou maison1000jours20@paris.fr. La Ville indique un fauteuil d'allaitement, des toilettes adultes et enfants, une **table à langer** et un accès aux personnes à mobilité réduite.

Les familles peuvent y trouver comptines, peinture parent-bébé et rencontres thématiques. Pour l'atelier gratuit **santé environnement**, deux séances sont annoncées les **19 novembre et 17 décembre 2026**, de **17 h 30 à 19 h 30**, **sur inscription** via le [programme municipal](https://www.paris.fr/evenements/mon-premier-atelier-sante-environnement-pour-bien-demarrer-avec-votre-bebe-101801). Cet horaire est celui de l'atelier, **pas une extension garantie de l'accueil libre**. Consultez le planning mensuel sur la fiche de la Maison ou contactez l'équipe avant de venir.

## Quelle Maison choisir avec bébé ?

Pour une visite spontanée, choisissez d'abord celle qui est la plus proche et ouverte au moment voulu. Le **18e** propose un accueil libre du mardi au jeudi; le **20e** ajoute le lundi après-midi et le vendredi matin. Pour une activité spécifique, le programme, l'âge requis et la réservation comptent davantage que l'arrondissement.

Les deux adresses disposent d'une table à langer et sont indiquées accessibles aux personnes à mobilité réduite. Les fiches ne détaillent pas toutes les conditions de circulation et de stationnement des poussettes: contactez l'équipe si vous avez une contrainte particulière.

## Et si votre enfant a déjà 3 à 5 ans ?

La [CAF de Paris recense 34 lieux d'accueil enfants-parents (LAEP)](https://www.caf.fr/allocataires/caf-de-paris/offre-de-service/vie-personnelle/les-lieux-d-accueil-enfants-parents). Ces espaces de jeu et de rencontre gratuits, sans inscription, accueillent les enfants de moins de 6 ans accompagnés d'un adulte. Ils peuvent être plus adaptés aux enfants qui dépassent l'âge habituellement accueilli dans les Maisons des 1000 premiers jours. Vérifiez les jours et horaires de chaque LAEP avant votre visite.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/parentalite/(2026)/(11)/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes/index.md

---
title: "Maisons des 1000 premiers jours à Paris: deux adresses pour les parents et les bébés"
subtitle: Accueil gratuit, ateliers et rencontres dans les 18e et 20e arrondissements
summary: Deux lieux gratuits à Paris pour rencontrer d'autres parents, participer à des ateliers avec bébé et obtenir des informations. Adresses, horaires et accès.
slug: maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes
status: published
publishedAt: 2026-11-09T06:06:02+01:00
updatedAt: null
category: parentalite
readingTime: 4
location:
  city: Paris
  department: Paris
  region: Île-de-France
topic:
  key: parentalite|paris|maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes|2026
  keywords:
    - Maisons des 1000 premiers jours Paris
    - activités gratuites bébé Paris
    - soutien parentalité Paris
image:
  src: "/images/articles/2026/11/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes.webp"
  alt: "Passage des Tourelles dans le 20e arrondissement de Paris, où se trouve l'une des Maisons des 1000 premiers jours"
sources:
  - title: Ville de Paris - Deux Maisons des 1000 premiers jours
    url: https://www.paris.fr/pages/deux-maisons-des-1000-premiers-jours-ouvrent-leurs-portes-a-paris-32106
  - title: Ville de Paris - Maison des 1000 premiers jours du 18e
    url: https://www.paris.fr/lieux/maison-des-1000-premiers-jours-du-18eme-arrondissement-20653
  - title: Ville de Paris - Maison des 1000 premiers jours du 20e
    url: https://www.paris.fr/lieux/maison-des-1000-premiers-jours-du-20eme-arrondissement-20652
  - title: CAF de Paris - Les lieux d'accueil enfants-parents
    url: https://www.caf.fr/allocataires/caf-de-paris/offre-de-service/vie-personnelle/les-lieux-d-accueil-enfants-parents
---
<!-- article-image-credit -->
*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Passage_Tourelles_-_Paris_XX_(FR75)_-_2021-06-10_-_1.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Paris, deux **Maisons des 1000 premiers jours** accueillent gratuitement les futurs parents et les familles de jeunes enfants, dans les 18e et 20e arrondissements. On peut y rencontrer d'autres parents, participer à un atelier avec son bébé ou simplement trouver un espace pour échanger et se renseigner sur la petite enfance.

Ces lieux municipaux s'adressent aussi aux proches et aux personnes qui accompagnent les familles, comme l'explique la [Ville de Paris](https://www.paris.fr/pages/deux-maisons-des-1000-premiers-jours-ouvrent-leurs-portes-a-paris-32106). Ce ne sont ni des crèches où confier son enfant ni des cabinets de consultation médicale.

## Que peut-on faire dans ces Maisons ?

L'accueil permet de discuter avec d'autres familles, de jouer avec son enfant et de trouver des informations sur la grossesse, le sommeil, l'éveil ou les modes de garde. Des ateliers et rencontres sont également proposés selon le programme: comptines, éveil artistique, gestes utiles avec un bébé ou échanges avec des professionnels.

**L'accueil libre est différent des ateliers programmés.** Pour venir sans activité particulière, consultez les horaires d'accueil. Pour participer à un atelier, vérifiez au préalable l'âge concerné, les places disponibles et les modalités d'inscription.

## Dans le 18e: la Maison de la rue Cavé

<!-- article-image-body:01 -->

![Vue de la rue Cavé dans le 18e arrondissement de Paris, sans montrer la Maison](/images/articles/2026/11/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes-body-01.webp)

*Photo: [Mbzt](https://commons.wikimedia.org/wiki/File:P1330182_Paris_XVIII_rue_Cave_rwk.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

La [Maison des 1000 premiers jours du 18e](https://www.paris.fr/lieux/maison-des-1000-premiers-jours-du-18eme-arrondissement-20653) se situe **16 rue Cavé**, au rez-de-chaussée du Pôle santé Goutte d'Or, près des métros La Chapelle et Barbès.

**Accueil libre:** mardi, mercredi et jeudi, de **9 h 30 à 12 h 30** et de **14 h à 17 h 30**. Les autres jours, l'accès dépend des activités programmées.

Le lieu propose notamment des groupes de parole pour futurs parents, des comptines et des ateliers de prévention. La fiche municipale confirme la présence de toilettes, d'une **table à langer** et d'un accès pour les personnes à mobilité réduite.

**Contact:** 01 53 41 18 99.

**Fermetures annoncées:** jeudi 19 novembre 2026, pas d'accueil le matin et ouverture de 14 h à 17 h; fermeture du 25 décembre 2026 au 1er janvier 2027 inclus. Vérifiez la fiche avant votre visite.

## Dans le 20e: la Maison du passage des Tourelles

La [Maison des 1000 premiers jours du 20e](https://www.paris.fr/lieux/maison-des-1000-premiers-jours-du-20eme-arrondissement-20652) accueille les familles au **9 passage des Tourelles**, près du métro Porte des Lilas.

**Horaires affichés:**
- Lundi: 14 h à 17 h 30.
- Mardi, mercredi et jeudi: 9 h 30 à 12 h 30 et 14 h à 17 h 30.
- Vendredi: 9 h 30 à 12 h 30.
- Samedi et dimanche: fermé.

Les activités peuvent comprendre des comptines, de la peinture parent-bébé et des rencontres thématiques. Sur place, la Ville indique un fauteuil d'allaitement, des toilettes pour adultes et enfants, une **table à langer** et un accès pour les personnes à mobilité réduite.

**Contact:** 01 84 82 19 02 ou maison1000jours20@paris.fr.

**Fermeture annoncée:** du 28 décembre 2026 au 1er janvier 2027 inclus. Le programme mensuel est consultable sur la fiche de la Maison.

## Quelle Maison choisir ?

La proximité reste le critère le plus simple. La Maison du 18e accueille librement les familles du mardi au jeudi. Celle du 20e propose également le lundi après-midi et le vendredi matin.

Pour l'âge des enfants, la fiche du 18e mentionne principalement les **0 à 2 ans**, tandis que celle du 20e parle des enfants de **moins de deux à trois ans**. Si votre enfant approche de cette limite, contactez directement l'équipe avant de venir.

Les deux lieux disposent d'une table à langer et sont indiqués accessibles aux personnes à mobilité réduite. En revanche, les fiches ne précisent pas toutes les conditions de circulation ou de stationnement des poussettes: contactez la Maison si vous avez un besoin particulier.

## Et pour les enfants plus grands ?

La [CAF de Paris recense 34 lieux d'accueil enfants-parents (LAEP)](https://www.caf.fr/allocataires/caf-de-paris/offre-de-service/vie-personnelle/les-lieux-d-accueil-enfants-parents). Ces espaces de jeu et de rencontre sont gratuits, sans inscription, et accueillent les enfants de moins de 6 ans accompagnés d'un adulte.

Pour un enfant de 3 à 5 ans, un LAEP peut donc être plus adapté. La CAF publie les adresses et les coordonnées des structures parisiennes; leurs jours et horaires varient selon le lieu.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans/ | Écoute, je danse ! à Paris le 5 décembre 2026: spectacle gratuit dès 6 mois | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | Vacances de la Toussaint 2026 à la Cité des sciences: les ateliers numériques gratuits avec des enfants | sorties | Paris, Paris, Île-de-France
- /articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/ | Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite | sorties | Paris, Paris, Île-de-France
- /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | Lecture d'hiver gratuite à Paris le 12 décembre 2026: deux séances pour les 1-3 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/evenements/planete-ocean-a-paris-preparer-la-visite-en-famille/ | Planète Océan à Paris: préparer la visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/salon-du-chocolat-paris-2026-avec-des-enfants-quel-billet-choisir-et-quels-ateliers-reserver/ | Salon du Chocolat Paris 2026 avec des enfants: quel billet choisir et quels ateliers réserver | evenements | Paris, Paris, Île-de-France
- /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | Atelier couture gratuit à Paris le 28 novembre 2026: dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/vie-pratique/changer-de-gare-a-paris-avec-des-enfants-preparer-sa-correspondance/ | Changer de gare à Paris avec des enfants: préparer sa correspondance | vie-pratique | Paris, Paris, Île-de-France
- /articles/parentalite/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes/ | Maisons des 1000 premiers jours à Paris: deux adresses pour les parents et les bébés | parentalite | Paris, Paris, Île-de-France
- /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | Atelier bâton de pluie gratuit à Paris le 18 novembre 2026: dès 6 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/spectacle-de-noel-gratuit-a-paris-le-5-decembre-2026-p-tit-loup-et-la-magie-en-famille/ | Spectacle de Noël gratuit à Paris le 5 décembre 2026: Mon p'tit loup magique | evenements | Paris, Paris, Île-de-France
- /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | Bricolages de Noël gratuits à Paris le 19 décembre 2026: un atelier dès 4 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-deco-de-noel-gratuit-a-paris-le-28-novembre-2026-creer-en-recup-art-des-8-ans/ | Atelier déco de Noël gratuit à Paris le 28 novembre 2026: bricolage dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/sorties/soiree-jeux-gratuite-a-paris-le-21-novembre-2026-jeux-video-et-jeux-de-societe-en-famille/ | Soirée jeux gratuite à Paris le 21 novembre 2026: jeux vidéo et jeux de société en famille | sorties | Paris, Paris, Île-de-France
- /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | Atelier Calder à Paris le 14 novembre 2026: fabriquer un mobile dès 5 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | Contes gratuits à Paris le 14 novembre 2026: trois rendez-vous en famille | evenements | Paris, Paris, Île-de-France
- /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | Atelier Pokémon et biodiversité à Paris le 28 novembre 2026: dessin dès 10 ans | activites | Paris, Paris, Île-de-France
- /articles/parentalite/laep-dans-le-tarn-ou-aller-avec-son-enfant/ | LAEP dans le Tarn: où aller avec son enfant ? | parentalite | Tarn, Occitanie
- /articles/parentalite/lieux-d-accueil-enfants-parents-dans-le-var-ou-aller-avec-son-enfant/ | Lieux d'accueil enfants-parents dans le Var: où aller avec son enfant ? | parentalite | Var, Provence-Alpes-Côte d’Azur
- /articles/parentalite/cafes-parents-enfants-dans-le-finistere-deux-adresses-pour-jouer-et-faire-une-pause/ | Cafés parents-enfants dans le Finistère: deux adresses pour jouer et faire une pause | parentalite | Finistère, Bretagne
- /articles/parentalite/parents-en-deux-sevres-ou-trouver-une-ecoute-et-un-accompagnement/ | Parents en Deux-Sèvres: où trouver une écoute et un accompagnement ? | parentalite | Deux-Sèvres, Nouvelle-Aquitaine

### Historique Radar lié

- opportunity | /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | 2026-11-05T16:36:05.180Z
- opportunity | /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | 2026-11-05T04:36:26.347Z
- opportunity | /articles/activites/atelier-deco-de-noel-gratuit-a-paris-le-28-novembre-2026-creer-en-recup-art-des-8-ans/ | 2026-11-05T23:35:44.031Z
- opportunity | /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | 2026-11-06T12:30:50.449Z
- opportunity | /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | 2026-11-06T03:27:40.597Z
- opportunity | /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | 2026-11-05T13:27:24.356Z
- opportunity | /articles/evenements/ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans/ | 2026-11-04T21:32:12.180Z
- opportunity | /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | 2026-11-06T09:33:42.136Z
- opportunity | /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | 2026-10-06T19:20:39.093Z
- opportunity | /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | 2026-11-05T10:32:54.471Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
