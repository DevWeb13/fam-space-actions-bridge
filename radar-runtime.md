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
title: "Maison du Cacao à Pointe-Noire: découvrir le chocolat en famille"
subtitle: De la cabosse à la dégustation, avec une autre adresse pour fabriquer sa tablette
summary: En Guadeloupe, la Maison du Cacao fait découvrir aux enfants l'origine du chocolat. Visite, dégustation, tarifs et atelier de fabrication à Pointe-Noire.
slug: maison-du-cacao-a-pointe-noire-decouvrir-le-chocolat-en-famille
status: published
publishedAt: 2026-11-08T06:04:50+01:00
updatedAt: null
category: cuisine
readingTime: 4
location:
  city: Pointe-Noire
  department: Guadeloupe
  region: Guadeloupe
topic:
  key: cuisine|pointe-noire|maison-du-cacao-a-pointe-noire-decouvrir-le-chocolat-en-famille|2026
  keywords:
    - Maison du Cacao Pointe-Noire en famille
    - atelier chocolat Guadeloupe
    - visite cacaoyère Guadeloupe
image:
  src: /images/articles/2026/11/maison-du-cacao-a-pointe-noire-decouvrir-le-chocolat-en-famille.webp
  alt: Cabosses de cacao qui poussent sur un cacaoyer en Guadeloupe, illustration de la culture du cacao
sources:
  - title: Maison du Cacao - visite et présentation
    url: https://www.maisonducacao.fr/
  - title: Maison du Cacao - horaires et tarifs
    url: https://www.maisonducacao.fr/contact
  - title: Maison du Cacao - réservation et durée annoncée
    url: https://www.maisonducacao.fr/book-online
  - title: Gwakako - atelier de fabrication
    url: https://www.gwakako.com/
affiliate:
  enabled: true
  type: travel
  destination: Pointe-Noire
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/cuisine/(2026)/(11)/maison-du-cacao-a-pointe-noire-decouvrir-le-chocolat-en-famille/index.md
  targetSha: 401db8393b5dc5316b0dbf9ce883e7648e8bedda
  targetUrl: /articles/cuisine/maison-du-cacao-a-pointe-noire-decouvrir-le-chocolat-en-famille/
  decision: Choisir entre la visite-dégustation et la fabrication d'une tablette à Pointe-Noire selon les âges, le budget et le jour disponible.
  affiliationPotential: Conserver l'hébergement familial existant sur Abritel, fiche vérifiée; aucun billet correspondant trouvé chez GetYourGuide, Tiqets ou Klook.
  gsc:
    retrievedAt: 2026-11-25T07:30:00+01:00
    dataThrough: 2026-11-23
    signal: uncertain
    basis: "Visibilité récente : 43 impressions sur trois jours, puis 10 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-16
    peakEnd: 2026-11-18
    recentStart: 2026-11-21
    recentEnd: 2026-11-23
    peakImpressions: 43
    recentImpressions: 10
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0.308
    focusQueries:
      - la maison du cacao
      - maison du cacao en guadeloupe
      - maison du cacao guadeloupe
      - la maison du cacao guadeloupe
      - maison cacao guadeloupe
---

<!-- article-image-credit -->
*Photo: [Alma Mulalic and Yann Fauché](https://commons.wikimedia.org/wiki/File:Cacao_fruits_on_tree_-_Guadeloupe.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Pointe-Noire, sur la côte sous le vent de la Guadeloupe, la Maison du Cacao invite les familles à découvrir d'où vient le chocolat. Dans une cacaoyère, les enfants voient les arbres et leurs cabosses, découvrent la transformation des fèves et terminent par une dégustation commentée. Une sortie gourmande qui permet de relier la tablette familière au fruit dont elle est issue.

## Ce que les enfants découvrent à la Maison du Cacao

<!-- article-image-body:01 -->

![Fèves de cacao séchant à l'air libre en Colombie, illustration d'une étape de la fabrication du chocolat](/images/articles/2026/11/maison-du-cacao-a-pointe-noire-decouvrir-le-chocolat-en-famille-body-01.webp)

*Photo: [pipeafcr](https://commons.wikimedia.org/wiki/File:Cacao_Beans_Drying.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le parcours traverse un jardin planté de cacaoyers, avec des explications sur la culture et l'histoire du cacao. On peut observer le travail du chocolat dans le laboratoire, puis assister à des démonstrations et à une dégustation commentée.

C'est l'occasion de comprendre comment les fèves, une fois extraites des cabosses, sont fermentées, séchées, torréfiées et transformées. Les enfants peuvent comparer les saveurs du cacao et du chocolat, au-delà des tablettes sucrées qu'ils connaissent déjà. La [Maison du Cacao présente le déroulement de cette visite](https://www.maisonducacao.fr/).

Les plus jeunes profiteront surtout de la promenade, des odeurs et de la découverte des fruits. Les plus grands pourront mieux suivre les étapes de fabrication.

## Une visite ou un atelier pour fabriquer sa tablette?

**La visite classique de la Maison du Cacao** comprend le jardin, les explications, les démonstrations et la dégustation. Pour fabriquer votre propre tablette, choisissez plutôt l'atelier Gwakako, vers lequel renvoie le site de la Maison du Cacao.

**Gwakako**, autre adresse à Pointe-Noire, propose un atelier participatif à sa propre plantation. Les participants découvrent notamment la torréfaction, l'épluchage et le broyage, puis fabriquent une tablette à emporter. L'activité comprend aussi une visite de la plantation et des dégustations autour du cacao. Comptez environ 2 h 30. Il s'agit d'un établissement différent, avec une réservation séparée. Les détails figurent sur le [site de Gwakako](https://www.gwakako.com/).

## Tarifs, horaires et réservations

À la Maison du Cacao, les tarifs affichés sont de **14 € à partir de 12 ans**, **7 € de 3 à 11 ans** et **gratuit avant 3 ans**. Pour deux adultes et deux enfants de 3 à 11 ans, le total est de 42 €. Une preuve d'identité est demandée pour le tarif enfant.

L'établissement indique une ouverture **du mardi au samedi, de 9 h 30 à 13 h 30 et de 14 h 30 à 17 h**. Ces plages correspondent aux horaires d'accueil, pas nécessairement aux heures de départ des visites. La réservation est fortement recommandée; elle peut se faire [en ligne, avec paiement sur place](https://www.maisonducacao.fr/book-online).

La durée annoncée varie entre une heure sur la fiche de réservation et 1 h 30 dans les informations pratiques. Pour organiser votre journée, prévoyez environ 1 h 30 et vérifiez l'horaire de votre séance.

Chez Gwakako, l'atelier se déroule **du mardi au vendredi matin, uniquement sur réservation**, à **60 € dès 12 ans et 30 € de 3 à 11 ans**. Pour deux adultes et deux enfants de 3 à 11 ans, comptez 180 €, contre 42 € pour la visite classique. Les groupes de 6 à 20 personnes sont constitués par l'organisateur. Les enfants restent sous la surveillance de leurs parents. Pour les moins de 3 ans, demandez les conditions d'accueil et le tarif avant de réserver.

Si vous ne disposez que du samedi, privilégiez la Maison du Cacao. Pour l'atelier, fiez-vous aux créneaux annoncés directement par Gwakako, qui diffèrent de ceux mentionnés sur le site de la Maison du Cacao.

Tarifs et horaires ont été revérifiés sur les sites des établissements le 25 novembre 2026; ils peuvent changer.

## Préparer la sortie avec des enfants

La Maison du Cacao se situe à **Grande Plaine, 97116 Pointe-Noire**. Une partie de la visite se déroule dans la cacaoyère: prévoyez des chaussures adaptées à la marche et une protection contre les averses. L'accessibilité complète du parcours, notamment avec une poussette, n'est pas confirmée; contactez l'établissement si ce point est important pour votre famille.

En cas d'allergie alimentaire, demandez avant la visite la composition des produits proposés à la dégustation. Pour les enfants de moins de 3 ans, l'entrée gratuite ne signifie pas que toutes les dégustations sont adaptées.

Pour Gwakako, vérifiez bien l'adresse de votre atelier: **route des Plaines, à la plantation Gwakako**, et non à la Maison du Cacao.

## Prolonger la découverte sur la côte sous le vent

Si cette visite s'inscrit dans des vacances en Basse-Terre, la [Villa les Gallières à Pointe-Noire sur Abritel](https://www.abritel.fr/location-vacances/p1735723) propose une formule de deux chambres climatisées pour quatre personnes, avec jardin et piscine privée. Les enfants sont acceptés. Vérifiez la disponibilité, le prix total et les conditions de sécurité autour de la piscine avant de réserver.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/cuisine/(2026)/(11)/maison-du-cacao-a-pointe-noire-decouvrir-le-chocolat-en-famille/index.md

---
title: "Maison du Cacao à Pointe-Noire: découvrir le chocolat en famille"
subtitle: De la cabosse à la dégustation, avec une autre adresse pour fabriquer sa tablette
summary: En Guadeloupe, la Maison du Cacao fait découvrir aux enfants l'origine du chocolat. Visite, dégustation, tarifs et atelier de fabrication à Pointe-Noire.
slug: maison-du-cacao-a-pointe-noire-decouvrir-le-chocolat-en-famille
status: published
publishedAt: 2026-11-08T06:04:50+01:00
updatedAt: null
category: cuisine
readingTime: 4
location:
  city: Pointe-Noire
  department: Guadeloupe
  region: Guadeloupe
topic:
  key: cuisine|pointe-noire|maison-du-cacao-a-pointe-noire-decouvrir-le-chocolat-en-famille|2026
  keywords:
    - Maison du Cacao Pointe-Noire en famille
    - atelier chocolat Guadeloupe
    - visite cacaoyère Guadeloupe
image:
  src: "/images/articles/2026/11/maison-du-cacao-a-pointe-noire-decouvrir-le-chocolat-en-famille.webp"
  alt: "Cabosses de cacao qui poussent sur un cacaoyer en Guadeloupe, illustration de la culture du cacao"
sources:
  - title: Maison du Cacao - visite et présentation
    url: https://www.maisonducacao.fr/
  - title: Maison du Cacao - horaires et tarifs
    url: https://www.maisonducacao.fr/contact
  - title: Maison du Cacao - réservation et durée annoncée
    url: https://www.maisonducacao.fr/book-online
  - title: Gwakako - atelier de fabrication
    url: https://www.gwakako.com/
affiliate:
  enabled: true
  type: travel
  destination: Pointe-Noire
---
<!-- article-image-credit -->
*Photo: [Alma Mulalic and Yann Fauché](https://commons.wikimedia.org/wiki/File:Cacao_fruits_on_tree_-_Guadeloupe.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Pointe-Noire, sur la côte sous le vent de la Guadeloupe, la Maison du Cacao invite les familles à découvrir d'où vient le chocolat. Dans une cacaoyère, les enfants voient les arbres et leurs cabosses, découvrent la transformation des fèves et terminent par une dégustation commentée. Une sortie gourmande qui permet de relier la tablette familière au fruit dont elle est issue.

## Ce que les enfants découvrent à la Maison du Cacao

<!-- article-image-body:01 -->

![Fèves de cacao séchant à l'air libre en Colombie, illustration d'une étape de la fabrication du chocolat](/images/articles/2026/11/maison-du-cacao-a-pointe-noire-decouvrir-le-chocolat-en-famille-body-01.webp)

*Photo: [pipeafcr](https://commons.wikimedia.org/wiki/File:Cacao_Beans_Drying.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le parcours traverse un jardin planté de cacaoyers, avec des explications sur la culture et l'histoire du cacao. On peut observer le travail du chocolat dans le laboratoire, puis assister à des démonstrations et à une dégustation commentée.

C'est l'occasion de comprendre comment les fèves, une fois extraites des cabosses, sont fermentées, séchées, torréfiées et transformées. Les enfants peuvent comparer les saveurs du cacao et du chocolat, au-delà des tablettes sucrées qu'ils connaissent déjà. La [Maison du Cacao présente le déroulement de cette visite](https://www.maisonducacao.fr/).

Les plus jeunes profiteront surtout de la promenade, des odeurs et de la découverte des fruits. Les plus grands pourront mieux suivre les étapes de fabrication.

## Une visite ou un atelier pour fabriquer sa tablette?

**La visite classique de la Maison du Cacao** comprend le jardin, les explications, les démonstrations et la dégustation. Elle ne comprend pas systématiquement la fabrication d'une tablette par chaque visiteur.

La Maison du Cacao mentionne également un atelier distinct, « Je fais ma tablette de chocolat ». Les conditions précises de cet atelier, notamment les âges acceptés, les créneaux et le tarif, sont à confirmer auprès de l'établissement.

**Gwakako**, autre adresse à Pointe-Noire, propose un atelier participatif à sa propre plantation. Les participants découvrent notamment la torréfaction, l'épluchage et le broyage, puis fabriquent une tablette à emporter. L'activité comprend aussi une visite de la plantation et des dégustations autour du cacao. Comptez environ 2 h 30. Il s'agit d'un établissement différent, avec une réservation séparée. Les détails figurent sur le [site de Gwakako](https://www.gwakako.com/).

## Tarifs, horaires et réservations

À la Maison du Cacao, les tarifs affichés sont de **14 € à partir de 12 ans**, **7 € de 3 à 11 ans** et **gratuit avant 3 ans**. Pour deux adultes et deux enfants de 3 à 11 ans, le total est de 42 €. Une preuve d'identité est demandée pour le tarif enfant.

L'établissement indique une ouverture **du mardi au samedi, de 9 h 30 à 13 h 30 et de 14 h 30 à 17 h**. Ces plages correspondent aux horaires d'accueil, pas nécessairement aux heures de départ des visites. La réservation est fortement recommandée; elle peut se faire [en ligne, avec paiement sur place](https://www.maisonducacao.fr/book-online).

La durée annoncée n'est pas parfaitement uniforme: les pages de présentation et d'informations pratiques indiquent 1 h 30, tandis que la fiche de réservation affiche une heure. Pour organiser votre journée, prévoyez environ 1 h 30 et vérifiez l'horaire de votre séance.

Chez Gwakako, l'atelier est annoncé **du mercredi au samedi matin, sur réservation**, à **60 € par adulte et 30 € par enfant**. Les ateliers accueillent des groupes de 6 à 20 personnes, constitués à partir des inscriptions. Demandez les conditions d'âge avant de réserver avec de jeunes enfants.

Tarifs et horaires ont été revérifiés sur les sites des établissements le 8 novembre 2026; ils peuvent changer.

## Préparer la sortie avec des enfants

La Maison du Cacao se situe à **Grande Plaine, 97116 Pointe-Noire**. Une partie de la visite se déroule dans la cacaoyère: prévoyez des chaussures adaptées à la marche et une protection contre les averses. L'accessibilité complète du parcours, notamment avec une poussette, n'est pas confirmée; contactez l'établissement si ce point est important pour votre famille.

En cas d'allergie alimentaire, demandez avant la visite la composition des produits proposés à la dégustation. Pour les enfants de moins de 3 ans, l'entrée gratuite ne signifie pas que toutes les dégustations sont adaptées.

Pour Gwakako, vérifiez bien l'adresse de votre atelier: **route des Plaines, à la plantation Gwakako**, et non à la Maison du Cacao.

## Prolonger la découverte sur la côte sous le vent

Si cette visite s'inscrit dans des vacances en Basse-Terre, la [Villa les Gallières à Pointe-Noire sur Abritel](https://www.abritel.fr/location-vacances/p1735723) propose une formule de deux chambres climatisées pour quatre personnes, avec jardin et piscine privée. Les enfants sont acceptés. Vérifiez la disponibilité, le prix total et les conditions de sécurité autour de la piscine avant de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/a-pointe-noire-decouvrir-la-riviere-en-famille-avec-l-aquarando-d-acomat/ | À Pointe-Noire, découvrir la rivière en famille avec l’aquarando d’Acomat | activites | Pointe-Noire, Guadeloupe, Guadeloupe
- /articles/maison/saison-cyclonique-en-guadeloupe-comment-preparer-sa-maison-en-famille/ | Saison cyclonique en Guadeloupe: comment préparer sa maison en famille | maison | Basse-Terre, Guadeloupe, Guadeloupe
- /articles/cuisine/cuisiner-creole-avec-son-enfant-a-saint-francois/ | Cuisiner créole avec son enfant à Saint-François | cuisine | Saint-François, Guadeloupe, Guadeloupe
- /articles/parentalite/a-sainte-rose-decouvrir-la-mangrove-avec-son-enfant-en-pedalo/ | À Sainte-Rose, découvrir la mangrove avec son enfant en pédalo | parentalite | Sainte-Rose, Guadeloupe, Guadeloupe
- /articles/cuisine/maison-du-pain-a-selestat-decouvrir-la-boulangerie-en-famille/ | Maison du Pain à Sélestat: découvrir la boulangerie en famille | cuisine | Sélestat, Bas-Rhin, Grand Est
- /articles/sorties/petite-terre-en-famille-iguanes-balade-et-lagon/ | Petite-Terre en famille: iguanes, balade et lagon | sorties | La Désirade, Guadeloupe, Guadeloupe
- /articles/cuisine/a-chiconi-decouvrir-la-cuisine-mahoraise-en-famille/ | À Chiconi, découvrir la cuisine mahoraise en famille | cuisine | Chiconi, Mayotte, Mayotte
- /articles/activites/zoo-de-guadeloupe-billet-simple-ou-pack-avec-valombreuse/ | Zoo de Guadeloupe: billet simple ou pack avec Valombreuse? | activites | Bouillante, Guadeloupe, Guadeloupe
- /articles/cuisine/maison-du-cacao-a-pointe-noire-decouvrir-le-chocolat-en-famille/ | Maison du Cacao à Pointe-Noire: découvrir le chocolat en famille | cuisine | Pointe-Noire, Guadeloupe, Guadeloupe
- /articles/voyages/jardin-botanique-de-deshaies-trois-decouvertes-a-faire-en-famille/ | Jardin botanique de Deshaies: trois découvertes à faire en famille | voyages | Deshaies, Guadeloupe, Guadeloupe
- /articles/bons-plans/a-marie-galante-l-habitation-murat-se-decouvre-gratuitement-en-famille/ | À Marie-Galante, l’habitation Murat se découvre gratuitement en famille | bons-plans | Grand-Bourg, Guadeloupe, Guadeloupe
- /articles/vie-pratique/guad-iles-qui-peut-obtenir-la-reduction-sur-les-traversees-en-guadeloupe/ | GUAD'ÎLES: qui peut obtenir la réduction sur les traversées en Guadeloupe ? | vie-pratique | Basse-Terre, Guadeloupe, Guadeloupe
- /articles/evenements/mangwada-sun-petit-bourg-guadeloupe-2026-famille/ | ManGwada'Sun 2026 en Guadeloupe: préparer la convention pop culture en famille | evenements | Petit-Bourg, Guadeloupe, Guadeloupe
- /articles/cuisine/fougasse-d-aigues-mortes-recette-moelleuse-a-faire-en-famille/ | Fougasse d’Aigues-Mortes: recette moelleuse à faire en famille | cuisine | Aigues-Mortes, Gard, Occitanie
- /articles/cuisine/ficelle-picarde-la-recette-familiale-des-crepes-gratinees-d-amiens/ | Ficelle picarde: la recette familiale des crêpes gratinées d'Amiens | cuisine | Amiens, Somme, Hauts-de-France
- /articles/cuisine/kig-ha-farz-en-famille-recette-et-organisation-d-un-repas-breton/ | Kig ha farz en famille: recette et organisation d'un repas breton | cuisine | Finistère, Bretagne
- /articles/cuisine/ravioles-du-dauphine-trois-repas-simples-en-famille/ | Ravioles du Dauphiné: trois repas simples en famille | cuisine | Auvergne-Rhône-Alpes
- /articles/cuisine/cuisiner-local-en-meurthe-et-moselle-producteurs-paniers-et-idees-de-repas/ | Cuisiner local en Meurthe-et-Moselle: producteurs, paniers et idées de repas | cuisine | Meurthe-et-Moselle, Grand Est
- /articles/cuisine/manger-local-dans-le-val-d-oise-paniers-fermes-et-repas-de-saison/ | Manger local dans le Val-d'Oise: paniers, fermes et repas de saison | cuisine | Val-d'Oise, Île-de-France
- /articles/cuisine/cuisine-creole-en-famille-a-la-reunion-quel-atelier-choisir/ | Cuisine créole en famille à La Réunion: quel atelier choisir ? | cuisine | La Réunion
- /articles/cuisine/roquefort-en-famille-visiter-les-caves-et-le-cuisiner-avec-les-enfants/ | Roquefort en famille: visiter les caves et le cuisiner avec les enfants | cuisine | Roquefort-sur-Soulzon, Aveyron, Occitanie
- /articles/cuisine/petit-epeautre-du-ventoux-quatre-idees-pour-le-cuisiner-en-famille/ | Petit épeautre du Ventoux: quatre idées pour le cuisiner en famille | cuisine | Vaucluse, Provence-Alpes-Côte d’Azur

### Historique Radar lié

- Aucun historique lié.

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
