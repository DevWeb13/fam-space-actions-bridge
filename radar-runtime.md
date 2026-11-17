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
title: "Marché de Noël de Clermont-Ferrand 2026 en famille: horaires, animations et accès"
subtitle: Place de Jaude du 27 novembre au 27 décembre, jours de fermeture et sorties avec les enfants
summary: Horaires et fermeture du 25 décembre, animations pour enfants, accès en tramway, gratuité et informations utiles pour les bébés au marché de Noël de Clermont-Ferrand 2026.
category: evenements
location:
  city: Clermont-Ferrand
  department: Puy-de-Dôme
  region: Auvergne-Rhône-Alpes
image:
  src: /images/articles/2026/10/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces.webp
  alt: Place de Jaude illuminée pour Noël en 2018, vue depuis la grande roue à Clermont-Ferrand
sources:
  - title: Marché de Noël de Clermont-Ferrand - programme et animations 2026
    url: https://www.marche-noel-clermont.com/
  - title: Marché de Noël de Clermont-Ferrand - horaires et fermetures 2026
    url: https://www.marche-noel-clermont.com/les-horaires-douverture-du-marche-de-noel/
  - title: Marché de Noël de Clermont-Ferrand - calendrier des animations 2026
    url: https://www.marche-noel-clermont.com/animations/
  - title: Marché de Noël de Clermont-Ferrand - accès et transports
    url: https://www.marche-noel-clermont.com/comment-venir-au-marche-de-noel-de-clermont-ferrand/
  - title: Marché de Noël de Clermont-Ferrand - FAQ, gratuité et accessibilité
    url: https://www.marche-noel-clermont.com/faq/
eventEndsAt: 2026-12-27
reviewAt: 2026-11-20
topic:
  key: evenements|clermont-ferrand|marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces|2026
  keywords:
    - marché de Noël Clermont-Ferrand 2026
    - marché de Noël place de Jaude horaires
    - Noël Clermont-Ferrand enfants
    - animations marché de Noël Clermont-Ferrand 2026
slug: marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces
status: published
publishedAt: 2026-10-29T11:32:05.183Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Clermont-Ferrand
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/index.md
  targetSha: 671634165087891d44722c70c06683708f9d272d
  targetUrl: /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/
  decision: Choisir le bon jour et le bon créneau pour une visite gratuite avec les enfants, sans se tromper sur l'ouverture du 27 novembre ni les animations réellement prévues.
  affiliationPotential: Conserver l'hébergement CIT'HÔTEL LE DAV sur Booking.com, avec vérification de la capacité familiale et des disponibilités selon les dates; aucune billetterie à ajouter pour le marché gratuit.
  gsc:
    retrievedAt: 2026-11-17T04:29:30+01:00
    dataThrough: 2026-11-14
    signal: needs_query_check
    basis: "Visibilité récente : 30 impressions sur trois jours, puis 6 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-30
    peakEnd: 2026-11-01
    recentStart: 2026-11-12
    recentEnd: 2026-11-14
    peakImpressions: 30
    recentImpressions: 6
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - marché de Noël Clermont-Ferrand 2026
      - marché de Noël place de Jaude horaires
      - Noël Clermont-Ferrand enfants
      - animations marché de Noël Clermont-Ferrand 2026
---

<!-- article-image-credit -->
*Photo: [Florian Pépellin](https://commons.wikimedia.org/wiki/File:Place_de_Jaude_de_Clermont-Ferrand_illumin%C3%A9e_vue_de_la_Grande_Roue_(2018)_1.JPG) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Le **marché de Noël de Clermont-Ferrand 2026** se tient **place de Jaude du vendredi 27 novembre au dimanche 27 décembre**. L'entrée et les animations annoncées sont gratuites. **Le vendredi 27 novembre, l'ouverture exceptionnelle est fixée de 17 h à 22 h**. Pour choisir une visite avec les enfants, voici les horaires, les rendez-vous familiaux et les accès utiles.

## Dates et horaires: quand venir ?

Selon [l'organisateur](https://www.marche-noel-clermont.com/les-horaires-douverture-du-marche-de-noel/), les horaires sont les suivants:

- **Vendredi 27 novembre, ouverture:** 17 h à 22 h.
- **Lundi:** 14 h à 20 h.
- **Mardi, mercredi, jeudi et dimanche:** 10 h 30 à 20 h.
- **Vendredi et samedi:** 10 h 30 à 22 h.
- **Jeudi 24 décembre:** fermeture anticipée à **17 h**.
- **Vendredi 25 décembre:** **fermé toute la journée**.

Avec de jeunes enfants, une visite en journée évite de dépendre de l'affluence du soir; la fin d'après-midi permet aussi de voir les lumières. **Une à deux heures** peuvent suffire pour parcourir les chalets et prendre un goûter, hors animation particulière.

## Animations pour enfants annoncées en 2026

<!-- article-image-body:01 -->

![Chalets du marché de Noël de Clermont-Ferrand et cathédrale illuminés en 2018](/images/articles/2026/10/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces-body-01.webp)

*Photo: [Florian Pépellin](https://commons.wikimedia.org/wiki/File:March%C3%A9_de_No%C3%ABl_et_cath%C3%A9drale_de_Clermont-Ferrand_de_nuit_(2018).JPG) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le [calendrier officiel des animations](https://www.marche-noel-clermont.com/animations/) annonce notamment:

- **Vendredi 27 novembre:** parade de Noël (horaire non précisé) et collecte de jouets pour les Restos du Cœur de 17 h à 22 h. La collecte continue **samedi 28** de 10 h 30 à 22 h et **dimanche 29** de 10 h 30 à 20 h.
- **Mercredi 9 décembre:** distribution de papier cadeau avec Scoopy de 14 h à 18 h et jeux géants en bois de 14 h 30 à 17 h 30.
- **Samedi 12 décembre:** distribution de papier cadeau avec Scoopy de 14 h à 18 h.
- **Mercredi 16 décembre:** maquillage pour enfants de 14 h 30 à 17 h 30 et concert de cuivres du Conservatoire Emmanuel Chabrier de 15 h 15 à 15 h 45.
- **Vendredi 18 décembre:** soirée « Mascotte Party » de 18 h 30 à 22 h.
- **Mercredi 23 décembre:** jeux géants en bois de 14 h 30 à 17 h 30.

Autour du sapin et de la grande roue, les chalets proposent artisanat, cadeaux et spécialités gourmandes. **L'accès au marché et la participation aux animations annoncées sont gratuits**, mais les tours de grande roue, les achats et la restauration ne sont pas annoncés gratuits; leurs tarifs ne sont pas établis par cette programmation.

Le **Père Noël** est évoqué sur le site, mais les horaires détaillés de rencontre proviennent d'une page ancienne. Ne les considérez pas comme confirmés pour 2026; si la rencontre motive la sortie, consultez le programme actualisé peu avant votre visite.

## Accès, poussette et stationnement place de Jaude

<!-- article-image-body:02 -->

![Rame de tramway sur la place de Jaude à Clermont-Ferrand en 2007](/images/articles/2026/10/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces-body-02.webp)

*Photo: [Fabien1309](https://commons.wikimedia.org/wiki/File:Clermont-tram-place-de-jaude.jpg) - [CC BY-SA 2.0 fr](https://creativecommons.org/licenses/by-sa/2.0/fr/deed.en/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Le plus direct en transports est le **tramway A, arrêt Jaude**. En voiture, l'organisateur mentionne les parcs relais **Les Pistes** et **Henri Dunant**, puis le tramway, ainsi que les parkings centraux **Cathédrale, Saint-Pierre et Vercingétorix**. Le stationnement automobile est payant. Pour les correspondances et perturbations, consultez [T2C](https://www.t2c.fr/).

Le marché est annoncé **accessible aux personnes à mobilité réduite**. Cela ne garantit pas l'absence d'affluence entre les chalets: avec une poussette, un passage en journée peut être plus confortable.

## Goûter et besoins des bébés

Les stands proposent des plats salés, dont des spécialités auvergnates, ainsi que crêpes, gaufres et autres gourmandises. Une petite collation et de l'eau peuvent aider si l'enfant doit manger à heure fixe.

**Toilettes, table à langer, micro-ondes, chauffe-biberon et espace bébé:** leur disponibilité précise pour 2026 n'est pas confirmée. Prévoyez le nécessaire de change et une solution autonome pour le repas ou le biberon. Un porte-bébé peut compléter la poussette en cas d'affluence. La visite étant en extérieur, prévoyez des vêtements chauds et de quoi vous protéger de la pluie.

## Passer une nuit à Clermont-Ferrand

Pour prolonger la visite, le [CIT'HÔTEL LE DAV sur Booking.com](https://www.booking.com/hotel/fr/dav-39-jaude.html), au **10 rue des Minimes**, est situé à environ **120 mètres de la place de Jaude**. Il propose des chambres familiales; les **lits bébé sont gratuits sur demande jusqu'à 2 ans**, selon le type de chambre et la disponibilité. Vérifiez la capacité et les couchages en indiquant l'âge de chaque enfant, ainsi que le tarif et les conditions d'annulation pour vos dates. L'hôtel se trouve dans une **rue piétonne inaccessible directement en voiture**.

Pour organiser un séjour plus long, consultez [Clermont-Ferrand en famille](/destinations/auvergne-rhone-alpes/puy-de-dome/clermont-ferrand/). Une deuxième journée peut aussi être consacrée au [puy de Dôme en famille: train ou randonnée ?](/articles/sorties/puy-de-dome-en-famille-train-randonnee-ou-les-deux/), en vérifiant les horaires d'hiver et les conditions météorologiques.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/index.md

---
title: "Marché de Noël de Clermont-Ferrand 2026 en famille: horaires, animations et accès"
subtitle: Place de Jaude du 27 novembre au 27 décembre, jours de fermeture et sorties avec les enfants
summary: Horaires et fermeture du 25 décembre, animations pour enfants, accès en tramway, gratuité et informations utiles pour les bébés au marché de Noël de Clermont-Ferrand 2026.
category: evenements
location:
  city: Clermont-Ferrand
  department: Puy-de-Dôme
  region: Auvergne-Rhône-Alpes
image:
  src: "/images/articles/2026/10/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces.webp"
  alt: "Place de Jaude illuminée pour Noël en 2018, vue depuis la grande roue à Clermont-Ferrand"
sources:
  - title: Marché de Noël de Clermont-Ferrand - dates et animations annoncées pour 2026
    url: https://www.marche-noel-clermont.com/
  - title: Marché de Noël de Clermont-Ferrand - horaires et fermetures 2026
    url: https://www.marche-noel-clermont.com/les-horaires-douverture-du-marche-de-noel/
  - title: Marché de Noël de Clermont-Ferrand - accès et transports
    url: https://www.marche-noel-clermont.com/comment-venir-au-marche-de-noel-de-clermont-ferrand/
  - title: Marché de Noël de Clermont-Ferrand - FAQ, gratuité et accessibilité
    url: https://www.marche-noel-clermont.com/faq/
eventEndsAt: 2026-12-27
reviewAt: 2026-11-20
topic:
  key: evenements|clermont-ferrand|marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces|2026
  keywords:
    - marché de Noël Clermont-Ferrand 2026
    - marché de Noël place de Jaude horaires
    - Noël Clermont-Ferrand enfants
    - animations marché de Noël Clermont-Ferrand 2026
slug: marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces
status: published
publishedAt: 2026-10-29T11:32:05.183Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Clermont-Ferrand
---
<!-- article-image-credit -->
*Photo: [Florian Pépellin](https://commons.wikimedia.org/wiki/File:Place_de_Jaude_de_Clermont-Ferrand_illumin%C3%A9e_vue_de_la_Grande_Roue_(2018)_1.JPG) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Le **marché de Noël de Clermont-Ferrand 2026** se tient **place de Jaude du vendredi 27 novembre au dimanche 27 décembre**. L'entrée et les animations annoncées sont gratuites. Deux dates méritent une attention particulière: **fermeture à 17 h le 24 décembre et fermeture complète le 25**. Voici les horaires, les rendez-vous pour les enfants et les informations pratiques pour préparer la visite.

## Dates et horaires: quand venir ?

L'organisateur indique les horaires habituels suivants:

- **Lundi:** 14 h à 20 h.
- **Mardi, mercredi, jeudi et dimanche:** 10 h 30 à 20 h.
- **Vendredi et samedi:** 10 h 30 à 22 h.
- **Jeudi 24 décembre:** fermeture à **17 h**.
- **Vendredi 25 décembre:** **fermé toute la journée**.

**Attention au vendredi 27 novembre, jour d'ouverture:** la page des horaires contient encore une mention contradictoire d'un « dimanche 27 novembre » avec ouverture à 17 h. Le programme 2026 annonce bien une parade ce vendredi, mais ne précise pas son heure. **L'heure exacte d'ouverture du 27 novembre reste donc à confirmer** auprès de l'organisateur avant de se déplacer.

Avec de jeunes enfants, une visite en journée évite de dépendre de l'affluence du soir; la fin d'après-midi permet aussi de voir les lumières. **Une à deux heures** peuvent suffire pour parcourir les chalets et prendre un goûter, hors animation particulière.

## Animations pour enfants annoncées en 2026

<!-- article-image-body:01 -->

![Chalets du marché de Noël de Clermont-Ferrand et cathédrale illuminés en 2018](/images/articles/2026/10/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces-body-01.webp)

*Photo: [Florian Pépellin](https://commons.wikimedia.org/wiki/File:March%C3%A9_de_No%C3%ABl_et_cath%C3%A9drale_de_Clermont-Ferrand_de_nuit_(2018).JPG) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le programme affiché pour cette édition comprend notamment:

- **Vendredi 27 novembre:** parade de Noël, horaire non encore précisé.
- **Mercredi 9 décembre, 14 h 30-17 h 30:** jeux géants en bois.
- **Mercredi 16 décembre, 14 h 30-17 h 30:** maquillage pour enfants.
- **Mercredi 23 décembre, 14 h 30-17 h 30:** jeux géants en bois.

Autour du sapin et de la grande roue, les chalets proposent artisanat, cadeaux et spécialités gourmandes. **L'accès au marché et la participation aux animations sont gratuits**, mais cela ne signifie pas que les tours de grande roue, les achats ou la restauration le sont: leurs tarifs ne sont pas établis par cette annonce.

Le **Père Noël** est évoqué sur le site, mais les horaires détaillés de rencontre proviennent d'une page ancienne. Ne les considérez pas comme confirmés pour 2026; si la rencontre motive la sortie, consultez le programme actualisé peu avant votre visite.

## Accès, poussette et stationnement place de Jaude

<!-- article-image-body:02 -->

![Rame de tramway sur la place de Jaude à Clermont-Ferrand en 2007](/images/articles/2026/10/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces-body-02.webp)

*Photo: [Fabien1309](https://commons.wikimedia.org/wiki/File:Clermont-tram-place-de-jaude.jpg) - [CC BY-SA 2.0 fr](https://creativecommons.org/licenses/by-sa/2.0/fr/deed.en/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Le plus direct en transports est le **tramway A, arrêt Jaude**. En voiture, l'organisateur mentionne les parcs relais **Les Pistes** et **Henri Dunant**, puis le tramway, ainsi que les parkings centraux **Cathédrale, Saint-Pierre et Vercingétorix**. Le stationnement automobile est payant. Pour les correspondances et perturbations, consultez [T2C](https://www.t2c.fr/).

Le marché est annoncé **accessible aux personnes à mobilité réduite**. Cela ne garantit pas l'absence d'affluence entre les chalets: avec une poussette, un passage en journée peut être plus confortable.

## Goûter et besoins des bébés

Les stands proposent des plats salés, dont des spécialités auvergnates, ainsi que crêpes, gaufres et autres gourmandises. Une petite collation et de l'eau peuvent aider si l'enfant doit manger à heure fixe.

**Toilettes, table à langer, micro-ondes, chauffe-biberon et espace bébé:** leur disponibilité précise pour 2026 n'est pas confirmée. Prévoyez le nécessaire de change et une solution autonome pour le repas ou le biberon. Un porte-bébé peut compléter la poussette en cas d'affluence. La visite étant en extérieur, prévoyez des vêtements chauds et de quoi vous protéger de la pluie.

## Passer une nuit à Clermont-Ferrand

Pour prolonger la visite, le [CIT'HÔTEL LE DAV sur Booking.com](https://www.booking.com/hotel/fr/dav-39-jaude.html), au **10 rue des Minimes**, est situé à environ **120 mètres de la place de Jaude**. Il propose des chambres familiales; les **lits bébé sont gratuits sur demande jusqu'à 2 ans**, selon le type de chambre et la disponibilité. Vérifiez la capacité et les couchages en indiquant l'âge de chaque enfant, ainsi que le tarif et les conditions d'annulation pour vos dates. L'hôtel se trouve dans une **rue piétonne inaccessible directement en voiture**.

Pour organiser un séjour plus long, consultez [Clermont-Ferrand en famille](/destinations/auvergne-rhone-alpes/puy-de-dome/clermont-ferrand/). Une deuxième journée peut aussi être consacrée au [puy de Dôme en famille: train ou randonnée ?](/articles/sorties/puy-de-dome-en-famille-train-randonnee-ou-les-deux/), en vérifiant les horaires d'hiver et les conditions météorologiques.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/parentalite/creche-a-clermont-ferrand-quand-deposer-la-pre-inscription-et-comment-la-faire/ | Crèche à Clermont-Ferrand: quand déposer la pré-inscription et comment la faire | parentalite | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires et accès | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/activites/l-aventure-michelin-en-famille-a-clermont-ferrand/ | L’Aventure Michelin en famille à Clermont-Ferrand | activites | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/maison/encombrants-a-clermont-ferrand-collecte-a-domicile-ou-dechetterie/ | Encombrants à Clermont-Ferrand: collecte à domicile ou déchetterie? | maison | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Clermont-Ferrand 2026 en famille: horaires, animations et accès | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/vie-pratique/location-de-voiture-a-clermont-ferrand-avec-des-enfants-quoi-verifier-avant-de-reserver/ | Location de voiture à Clermont-Ferrand avec des enfants: quoi vérifier avant de réserver | vie-pratique | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/maison/radon-a-clermont-ferrand-comment-reduire-l-exposition-dans-son-logement/ | Radon à Clermont-Ferrand: comment réduire l'exposition dans son logement | maison | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/voyages/super-besse-en-famille-premiers-skis-et-activites-sans-ski-en-hiver-2026-2027/ | Super-Besse en famille: premiers skis et activités sans ski en hiver 2026-2027 | voyages | Besse-et-Saint-Anastaise, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/sorties/puy-de-dome-en-famille-train-randonnee-ou-les-deux/ | Puy de Dôme en famille: train, randonnée ou les deux? | sorties | Orcines, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/bons-plans/mont-dore-en-famille-telepherique-funiculaire-et-bons-billets-en-2026/ | Mont-Dore en famille fin septembre 2026: funiculaire ouvert, téléphérique fermé | bons-plans | Mont-Dore, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/cuisine/maison-de-la-fourme-d-ambert-visite-libre-ou-guidee-avec-des-enfants/ | Maison de la Fourme d'Ambert: visite libre ou guidée avec des enfants? | cuisine | Ambert, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/voyages/vulcania-a-la-toussaint-2026-1-ou-2-jours-billets-et-ou-dormir/ | Vulcania à la Toussaint 2026: 1 ou 2 jours, billets et où dormir | voyages | Saint-Ours-les-Roches, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/voyages/vulcania-en-famille-en-2026-un-ou-deux-jours-ou-dormir-et-quel-budget-prevoir/ | Vulcania en famille: 1 ou 2 jours, tarifs et hébergements 2026 | voyages | Saint-Ours-les-Roches, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/carnaval-de-guadeloupe-2027-preparer-une-premiere-sortie-avec-ses-enfants/ | Carnaval de Guadeloupe 2027: préparer une première sortie avec ses enfants | evenements | Guadeloupe
- /articles/evenements/niepce-et-apres-une-exposition-photo-a-decouvrir-en-famille-a-chalon-sur-saone/ | Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône | evenements | Chalon-sur-Saône, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-puy-du-fou-en-famille-spectacles-et-visite-en-hiver/ | Noël 2026 au Puy du Fou en famille: spectacles et visite en hiver | evenements | Les Epesses, Vendée, Pays de la Loire
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/carnaval-de-guyane-2027-en-famille-preparer-ses-premieres-sorties/ | Carnaval de Guyane 2027 en famille: préparer ses premières sorties | evenements | Guyane

### Historique Radar lié

- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z
- opportunity | /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/ | 2026-10-29T11:32:05.289Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
