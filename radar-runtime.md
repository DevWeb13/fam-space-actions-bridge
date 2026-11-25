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
  phase: 1
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

## Mission retenue
Actualiser le guide Maison du Cacao et atelier Gwakako à Pointe-Noire, en distinguant précisément les deux lieux et leurs modalités.

## Pourquoi cette mission
Candidat rapidDrop. La cause de la baisse de visibilité demeure incertaine. Le premier candidat, LAEP Toulouse, a déjà été actualisé ce matin sur master. Le Parc floral d'Orléans a été actualisé le 8 novembre et son annonce hivernale confirme les dates et horaires publiés; pas de nouvelle correction établie. Gwakako affiche en revanche des jours différents de ceux de l'article, ainsi que des tranches d'âge tarifaires précises. Le lien depuis la Maison du Cacao vers l'atelier renvoie directement à Gwakako, pas à un troisième atelier.

## Décision du lecteur
Savoir quelle expérience réserver en fonction du jour, de l'âge des enfants et du budget, sans se tromper d'adresse.

## Faits à traiter
- Gwakako: mardi à vendredi matin sur réservation, et non mercredi à samedi; 60 euros dès 12 ans, 30 euros de 3 à 11 ans, groupes de 6 à 20 constitués par l'organisateur, environ 2h30. Ne pas déduire un tarif ou une admission pour les moins de 3 ans. Enfants sous surveillance parentale. Atelier route des Plaines, distinct de l'écomusée.
- La page Maison du Cacao renvoie à Gwakako pour la fabrication de tablette; supprimer l'ambiguïté d'un atelier supplémentaire non confirmé. Visite classique: mardi à samedi, 14 euros dès 12 ans, 7 euros de 3 à 11 ans, gratuit avant 3 ans, justificatif pour tarif enfant. Réservation conseillée et paiement sur place. Conserver l'écart de durée entre les pages officielles (1h à 1h30) et le conseil de prévoir 1h30. Pour deux adultes et deux enfants de 3 à 11 ans, comparer 42 euros pour la visite et 180 euros pour l'atelier.
- Préserver le parcours pédagogique, la dégustation, les précautions allergies et poussette, les horaires d'accueil, les adresses, les images et leurs crédits. Actualiser uniquement les informations vérifiées.

## Sources de départ
- https://www.gwakako.com/
- https://www.maisonducacao.fr/
- https://www.maisonducacao.fr/contact
- https://www.maisonducacao.fr/book-online

## Affiliation
Recherche GetYourGuide, Tiqets et Klook sans offre correspondant aux deux expériences. Conserver la Villa les Gallières sur Abritel (https://www.abritel.fr/location-vacances/p1735723), fiche confirmant Pointe-Noire, deux chambres, quatre personnes et piscine privée. Ne pas prétendre à une disponibilité pour des dates non renseignées.

## Continuations internes
Garder le guide centré sur ces deux expériences autour du cacao; le guide du jardin botanique de Deshaies peut servir de prolongement distinct si le lien est utile et vérifié sur master.

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
