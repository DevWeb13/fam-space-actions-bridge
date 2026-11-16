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
title: "Noël 2026 à Toulon en famille: marché, patinoire et horaires"
subtitle: "Place de la Liberté et place d'Armes: animations, horaires et budget à prévoir avec des enfants"
summary: "Noël 2026 à Toulon, du 27 novembre au 3 janvier: deux places à visiter, tarifs de la patinoire et de la crèche, horaires du Père Noël et conseils avec des enfants."
category: evenements
location:
  city: Toulon
  department: Var
  region: Provence-Alpes-Côte d’Azur
image:
  src: /images/articles/2026/10/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants.webp
  alt: Place de la Liberté à Toulon photographiée en été, lieu prévu pour le marché de Noël 2026
sources:
  - title: Ville de Toulon - Marché de Noël et horaires du Père Noël
    url: https://toulon.fr/agenda/marche-de-noel
  - title: Ville de Toulon - Patinoire du Village des Enfants et tarifs
    url: https://toulon.fr/agenda/village-des-enfants-la-patinoire
  - title: Ville de Toulon - Crèche animée et tarifs
    url: https://toulon.fr/agenda/la-creche-animee
  - title: Ville de Toulon - Village des Enfants
    url: https://toulon.fr/agenda/le-village-des-enfants
eventEndsAt: 2027-01-03
reviewAt: 2026-11-25
topic:
  key: evenements|toulon|noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants|2026
  keywords:
    - Noël Toulon 2026 famille
    - marché de Noël Toulon place de la Liberté
    - Village des Enfants Toulon place d'Armes
    - patinoire Toulon Noël 2026
slug: noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants
status: published
publishedAt: 2026-10-31T10:28:17.323Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Toulon
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/index.md
  targetSha: e50bf7a0d885e90591db8f9c473ce3d9997d1ca3
  targetUrl: /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/
  decision: Choisir entre le marché de la Liberté et les activités de la place d'Armes, prévoir le coût réel de la patinoire et de la crèche, et choisir un créneau adapté aux enfants.
  affiliationPotential: Conserver le lien Booking.com existant vers l'appartement T3 du centre de Toulon; aucune autre offre partenaire vérifiée.
  gsc:
    retrievedAt: 2026-11-16T02:33:37+01:00
    dataThrough: 2026-11-13
    signal: uncertain
    basis: "Visibilité récente : 47 impressions sur trois jours, puis 2 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-01
    peakEnd: 2026-11-03
    recentStart: 2026-11-11
    recentEnd: 2026-11-13
    peakImpressions: 47
    recentImpressions: 2
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - marche noel toulon 2026
---

<!-- article-image-credit -->
*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Place_Libert%C3%A9_Toulon_2.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Du **27 novembre 2026 au 3 janvier 2027**, les fêtes de Noël à Toulon se découvrent principalement sur deux places proches du centre-ville. La **place de la Liberté** accueille le marché, le Père Noël et une crèche animée; la **place d'Armes** rassemble la patinoire et les manèges du Village des Enfants. Les deux peuvent se combiner lors d'une sortie, mais certaines activités sont payantes.

## Place de la Liberté: marché, crèche et Père Noël

Le [marché de Noël annoncé par la Ville](https://toulon.fr/agenda/marche-de-noel) réunit une soixantaine de chalets d'artisanat et de gourmandises, une piste de luge, un sapin-manège et des décorations. Se promener entre les chalets ne nécessite pas de billet; le prix de la luge, du manège et des photos avec le Père Noël n'est pas indiqué dans les fiches municipales consultées.

La **crèche provençale animée** propose un spectacle de **26 minutes** avec santons et décors. Selon la [fiche officielle](https://toulon.fr/agenda/la-creche-animee), l'entrée coûte **3 € par adulte**, **1 € pour les enfants de 6 à 12 ans** et reste **gratuite avant 6 ans**. Une famille de deux adultes et deux enfants de 6 à 12 ans paie donc **8 €** pour cette activité.

Pour rencontrer le Père Noël au chalet de la place de la Liberté, la Ville annonce les créneaux suivants:
- **Du 28 novembre au 18 décembre:** mercredi, samedi et dimanche de 13 h à 20 h; lundi, mardi, jeudi et vendredi de 17 h à 20 h.
- **Du 18 au 24 décembre:** de 13 h à 20 h, avec fermeture à **18 h les 23 et 24 décembre**.

Le 18 décembre apparaît dans les deux plages du programme municipal, sans conséquence sur l'horaire de ce jour. Pour une photo, vérifiez sur place les conditions et le tarif.

## Place d'Armes: patinoire et manèges

Le [Village des Enfants](https://toulon.fr/agenda/le-village-des-enfants) annonce **cinq manèges** et **sept chalets gourmands** autour des attractions. Leurs tarifs et éventuelles restrictions d'âge ou de taille ne sont pas précisés dans la fiche officielle.

La [patinoire de 600 m²](https://toulon.fr/agenda/village-des-enfants-la-patinoire) dispose de patinettes pour les plus jeunes. Ses tarifs publiés pour 2026 sont:
- **2,50 € les 30 minutes**, location des patins incluse.
- **2,50 € l'heure**, sans location des patins.
- **5,50 € la formule** comprenant une entrée et une paire de gants.

**Les gants sont obligatoires.** Avant 12 ans, le casque est recommandé et mis à disposition avec une charlotte à l'accueil. Pour deux enfants qui louent des patins pendant 30 minutes, comptez **5 € hors achat éventuel de gants**. La formule à 5,50 € peut être utile si vous n'en avez pas.

## Horaires du 27 novembre au 3 janvier

Les fiches officielles annoncent les horaires suivants pour le marché et le Village des Enfants:
- **Du lundi au jeudi et le dimanche:** 10 h 30 à 21 h 30.
- **Vendredi et samedi:** 10 h 30 à 22 h 30.
- **Jeudi 24 décembre:** 10 h 30 à 18 h 30.
- **Vendredi 25 décembre:** 15 h 30 à 20 h 30.
- **Jeudi 31 décembre:** 10 h 30 à 18 h 30.
- **Vendredi 1er janvier 2027:** 15 h 30 à 18 h 30.

L'inauguration du **vendredi 27 novembre** est annoncée de 10 h 30 à 22 h 30. La Ville peut adapter ces horaires pour des motifs d'organisation, de sécurité ou de météo. Avec de jeunes enfants, arriver en fin d'après-midi permet de profiter des illuminations sans finir trop tard.

## Toilettes, poussette et repas avec des enfants

<!-- article-image-body:01 -->

![Gare ferroviaire de Toulon, point d'arrivée des familles venant en train](/images/articles/2026/10/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants-body-01.webp)

*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Gare_Toulon_2.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le règlement municipal prévoit des **toilettes pour les visiteurs**, nettoyées quotidiennement. Leur emplacement exact, les équipements de **change pour bébé** et les cheminements accessibles ne sont toutefois pas détaillés. Si vous venez avec une poussette, anticipez les zones de forte affluence autour des manèges.

Des chalets gourmands sont annoncés sur les deux places. La Ville a également lancé un appel à candidatures pour des **food-trucks place Monsenergue**, près de la place d'Armes; leur présence effective et leurs horaires restent à vérifier. Pour un bébé, prévoyez le nécessaire pour le repas et le change plutôt que de compter sur des équipements non confirmés.

Si vous arrivez en train, notre guide de la [gare de Toulon avec des enfants](https://www.fam-space.fr/articles/vie-pratique/gare-de-toulon-avec-des-enfants-bagages-parking-et-correspondances/) détaille les toilettes avec nurserie, les correspondances et la gestion des bagages.

## Passer un week-end à Toulon

Pour les familles venant de plus loin, un appartement avec cuisine peut faciliter le retour après les animations. L'[Appartement T3 climatisé, cœur de Toulon, sur Booking.com](https://www.booking.com/hotel/fr/appartement-t3-coeur-de-toulon.fr.html), près de la gare et de la place de la Liberté, annonce jusqu'à **quatre personnes** et une cuisine. Vérifiez la disposition des lits, présentée différemment selon les rubriques de l'annonce, ainsi que les tarifs et disponibilités pour votre séjour.

Pour compléter la visite, notre guide du [Mont Faron en famille](https://www.fam-space.fr/articles/sorties/mont-faron-en-famille-telepherique-parc-animalier-et-conseils-2026/) présente cette autre sortie toulonnaise; contrôlez les horaires hivernaux du téléphérique avant de partir.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/index.md

---
title: "Noël 2026 à Toulon en famille: marché, patinoire et horaires"
subtitle: "Place de la Liberté et place d'Armes: animations, horaires et budget à prévoir avec des enfants"
summary: Du 27 novembre 2026 au 3 janvier 2027, Toulon prévoit un marché de Noël place de la Liberté et un Village des Enfants place d'Armes. Activités annoncées, horaires particuliers, sanitaires et frais encore à confirmer.
category: evenements
location:
  city: Toulon
  department: Var
  region: Provence-Alpes-Côte d’Azur
image:
  src: "/images/articles/2026/10/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants.webp"
  alt: "Place de la Liberté à Toulon photographiée en été, lieu prévu pour le marché de Noël 2026"
sources:
  - title: Ville de Toulon - règlement du marché de Noël 2026, dates, horaires et sanitaires
    url: https://demarches.toulon.fr/media/uploads/2026/04/24/appel-a-candidature-et-reglement-interieur-marche-de-noel-toulon-2026-places-liberte-et-armes.pdf
  - title: Ville de Toulon - programme prévu et chalet photo du Père Noël
    url: https://demarches.toulon.fr/infos_demarches/appel-a-projets/appel-a-candidature-en-vue-dexploiter-une-stand-photo-avec-le-pere-noel-a-toulon-pour-les-festivites-de-noel-2026/
  - title: Ville de Toulon - projet de restauration place Monsenergue
    url: https://demarches.toulon.fr/infos_demarches/appel-a-projets/appel-a-candidatures-marche-de-noel-2026-place-monsenergue/
eventEndsAt: 2027-01-03
reviewAt: 2026-11-25
topic:
  key: evenements|toulon|noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants|2026
  keywords:
    - Noël Toulon 2026 famille
    - marché de Noël Toulon place de la Liberté
    - Village des Enfants Toulon place d'Armes
    - patinoire Toulon Noël 2026
slug: noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants
status: published
publishedAt: 2026-10-31T10:28:17.323Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Toulon
---
<!-- article-image-credit -->
*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Place_Libert%C3%A9_Toulon_2.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Toulon, les festivités de Noël sont annoncées **du vendredi 27 novembre 2026 au dimanche 3 janvier 2027**. Deux lieux concentrent les activités: la **place de la Liberté** pour le marché, les décors et la crèche, et la **place d'Armes** pour le Village des Enfants, sa patinoire et ses manèges. On peut visiter les deux lors d'une même sortie.

Au 31 octobre, les renseignements municipaux proviennent surtout d'appels à candidatures: **le programme définitif et les tarifs des attractions ne sont pas encore publiés**.

## Place de la Liberté: chalets, crèche et Père Noël

La Ville prévoit **environ 59 chalets**, une crèche provençale animée, des décorations, une **luge synthétique** et un **sapin-manège**. C'est l'endroit à privilégier pour découvrir le marché de Noël et ses animations.

Un **chalet photo avec le Père Noël** est annoncé du **27 novembre au 24 décembre 2026 au soir**. Les heures de présence du Père Noël et les éventuels tarifs des photos restent à confirmer.

## Place d'Armes: patinoire et manèges

Le **Village des Enfants** doit accueillir **huit chalets, une patinoire et cinq manèges**, notamment un mini-grand huit, un manège enfantin et un petit train. Le programme prévoit également des animations et déambulations dans le centre-ville pendant les fêtes, sans calendrier détaillé disponible à ce stade.

**Quel budget prévoir ?** Aucun billet n'est annoncé pour simplement se promener sur ces places publiques. En revanche, ne supposez pas que la patinoire, la luge, les manèges ou les photos sont gratuits: **prix, âges et tailles minimums, location de patins et règles d'accès** ne sont pas précisés dans les documents municipaux consultés. Les tarifs de 2025 ne permettent pas de fixer le budget 2026.

## Dates et horaires du marché de Noël 2026

Le règlement municipal annonce:

- **Du dimanche au jeudi:** 10 h 30 à 21 h 30.
- **Vendredi et samedi:** 10 h 30 à 22 h 30.
- **Vendredi 27 novembre (inauguration):** 10 h 30 à 22 h 30.
- **Jeudi 24 décembre:** 10 h 30 à 18 h 30.
- **Vendredi 25 décembre:** 15 h 30 à 20 h 30.
- **Jeudi 31 décembre:** 10 h 30 à 18 h 30.
- **Vendredi 1er janvier 2027:** 15 h 30 à 18 h 30.

La Ville peut modifier ces horaires pour des raisons d'organisation, de sécurité ou de météo. Pour les illuminations, une arrivée en fin d'après-midi permet de voir les décorations éclairées sans devoir commencer la sortie trop tard avec les enfants.

## Toilettes, poussette et repas avec des enfants

<!-- article-image-body:01 -->

![Gare ferroviaire de Toulon, point d'arrivée des familles venant en train](/images/articles/2026/10/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants-body-01.webp)

*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Gare_Toulon_2.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

**Des sanitaires pour le public sont prévus**: le règlement municipal mentionne des toilettes mises à disposition des exposants et des visiteurs, avec un nettoyage quotidien. En revanche, leur emplacement exact, la présence d'une **table à langer** et les cheminements accessibles ne sont pas précisés. Avec un bébé ou une poussette, mieux vaut vérifier ces points avant la visite.

Des chalets alimentaires sont envisagés et la Ville a lancé un appel à candidatures pour des **food-trucks place Monsenergue**, près de la place d'Armes. Les commerçants effectivement présents et leurs horaires restent à confirmer.

Si vous venez en train, notre guide de la [gare de Toulon avec des enfants](https://www.fam-space.fr/articles/vie-pratique/gare-de-toulon-avec-des-enfants-bagages-parking-et-correspondances/) détaille notamment les toilettes avec nurserie, les correspondances et les bagages.

## Dormir à Toulon pendant les fêtes

Pour les familles qui viennent de plus loin, un appartement avec cuisine peut être pratique après les animations. L'[Appartement T3 climatisé, cœur de Toulon, sur Booking.com](https://www.booking.com/hotel/fr/appartement-t3-coeur-de-toulon.fr.html) est situé près de la gare et de la place de la Liberté; l'annonce présente une capacité allant jusqu'à **quatre personnes** et une cuisine. **Vérifiez la répartition exacte des chambres et des lits**, indiquée différemment selon les rubriques de l'annonce, ainsi que le prix, les conditions et la disponibilité aux dates souhaitées.

Pour compléter le séjour par une autre sortie, consultez notre guide du [Mont Faron en famille](https://www.fam-space.fr/articles/sorties/mont-faron-en-famille-telepherique-parc-animalier-et-conseils-2026/) et vérifiez les horaires hivernaux du téléphérique.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires et accès | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/vie-pratique/gare-de-toulon-avec-des-enfants-bagages-parking-et-correspondances/ | Gare de Toulon avec des enfants: bagages, parking et correspondances | vie-pratique | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/maison/chambre-d-enfant-a-petit-budget-dans-le-var-ou-acheter-des-meubles-d-occasion/ | Chambre d'enfant à petit budget dans le Var: où acheter des meubles d'occasion? | maison | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Clermont-Ferrand 2026 en famille: horaires, animations et accès | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/sorties/mont-faron-en-famille-telepherique-parc-animalier-et-conseils-2026/ | Mont Faron en famille: téléphérique, parc animalier et conseils 2026 | sorties | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/braderie-ete-toulon-2026-famille/ | Braderie d’été de Toulon 2026 en famille: animations gratuites et accès au centre-ville | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | Noël 2026 à Toulon en famille: marché, patinoire et horaires | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/parentalite/lieux-d-accueil-enfants-parents-dans-le-var-ou-aller-avec-son-enfant/ | Lieux d'accueil enfants-parents dans le Var: où aller avec son enfant ? | parentalite | Var, Provence-Alpes-Côte d’Azur
- /articles/cuisine/huile-d-olive-dans-le-var-en-famille-trois-adresses-et-des-idees-pour-cuisiner/ | Huile d’olive dans le Var en famille: trois adresses et des idées pour cuisiner | cuisine | Var, Provence-Alpes-Côte d’Azur
- /articles/activites/ecopark-la-castille-avec-des-enfants-quel-parcours-choisir-selon-leur-taille/ | Ecopark La Castille avec des enfants: quel parcours choisir selon leur taille? | activites | Solliès-Ville, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/fete-de-la-chataigne-a-collobrieres-quel-dimanche-choisir-avec-des-enfants/ | Fête de la Châtaigne à Collobrières: quel dimanche choisir avec des enfants? | evenements | Collobrières, Var, Provence-Alpes-Côte d’Azur
- /articles/voyages/gorges-du-verdon-avec-des-enfants-dormir-a-aiguines-ou-pres-du-lac-de-sainte-croix/ | Gorges du Verdon avec des enfants: dormir à Aiguines ou près du lac de Sainte-Croix? | voyages | Aiguines, Var, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/porquerolles-en-famille-sans-exploser-le-budget-les-bons-choix-pour-une-journee-ou-un-week-end/ | Porquerolles en famille sans exploser le budget: les bons choix pour une journée ou un week-end | bons-plans | Hyères, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/niepce-et-apres-une-exposition-photo-a-decouvrir-en-famille-a-chalon-sur-saone/ | Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône | evenements | Chalon-sur-Saône, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-puy-du-fou-en-famille-spectacles-et-visite-en-hiver/ | Noël 2026 au Puy du Fou en famille: spectacles et visite en hiver | evenements | Les Epesses, Vendée, Pays de la Loire
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/carnaval-de-guyane-2027-en-famille-preparer-ses-premieres-sorties/ | Carnaval de Guyane 2027 en famille: préparer ses premières sorties | evenements | Guyane
- /articles/evenements/mondo-clowns-2027-a-marmande-dates-tarifs-et-conseils-en-famille/ | Mondo'Clowns 2027 à Marmande: dates, tarifs et conseils en famille | evenements | Marmande, Lot-et-Garonne, Nouvelle-Aquitaine
- /articles/evenements/chambly-kids-festival-2027-quatre-spectacles-pour-les-enfants-dates-et-ages/ | Chambly Kids Festival 2027: quatre spectacles pour les enfants, dates et âges | evenements | Chambly, Oise, Hauts-de-France

### Historique Radar lié

- refresh | /articles/evenements/fete-de-la-chataigne-a-collobrieres-quel-dimanche-choisir-avec-des-enfants/ | 2026-10-08T10:21:36.677Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- opportunity | /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/ | 2026-10-29T11:32:05.289Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | 2026-10-31T10:28:17.432Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
