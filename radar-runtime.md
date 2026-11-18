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
title: "Foire aux santons de Marseille 2026: dates, inauguration et visite en famille"
subtitle: Entrée gratuite sur le quai du Port du 14 novembre 2026 au 3 janvier 2027
summary: La 224e Foire aux santons de Marseille se tient du 14 novembre 2026 au 3 janvier 2027 sur le Vieux-Port. Inauguration, horaires, ateliers annoncés et accès avec des enfants.
category: evenements
location:
  city: Marseille
  department: Bouches-du-Rhône
  region: Provence-Alpes-Côte d'Azur
image:
  src: /images/articles/2026/10/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir.webp
  alt: Santons provençaux exposés au marché de Noël du Vieux-Port de Marseille en novembre 2022, et non à la Foire aux santons 2026.
sources:
  - title: Foire aux Santons de Marseille - Édition 2026, dates, horaires et inauguration
    url: https://foire-aux-santons-de-marseille.fr/
  - title: Foire aux Santons de Marseille - Animations annoncées sans millésime explicite
    url: https://foire-aux-santons-de-marseille.fr/les-animations/
  - title: Office de tourisme de Marseille - 224e Foire aux santons 2026
    url: https://www.marseille-tourisme.com/en/vivez-marseille/events-in-marseille/224e-foire-aux-santons-et-aux-creches-de-marseille-marseille-2eme-en-6851848/
  - title: Foire aux Santons de Marseille - Informations pratiques (page encore marquée 223e édition)
    url: https://foire-aux-santons-de-marseille.fr/infos-pratiques/
eventEndsAt: 2027-01-03T19:00:00+01:00
topic:
  key: evenements|marseille|foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir|2026
  keywords:
    - foire aux santons Marseille 2026 enfants
    - foire aux santons Marseille horaires entrée gratuite
    - inauguration foire santons Marseille 15 novembre
    - atelier santon enfants Marseille 2026
slug: foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir
status: published
publishedAt: 2026-10-23T15:29:55.155Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Marseille
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/index.md
  targetSha: 56f779c16ea224e79b2bc89d722b9b54263d58e5
  targetUrl: /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/
  decision: Choisir un jour et un horaire de visite fiables, puis savoir quelles animations pour enfants sont réellement confirmées.
  affiliationPotential: Conserver l'hébergement Staycity Aparthotels Marseille Centre Vieux Port déjà intégré pour les familles en séjour; aucune offre de billet nécessaire puisque l'entrée est gratuite.
  gsc:
    retrievedAt: 2026-11-18T00:34:26+01:00
    dataThrough: 2026-11-15
    signal: uncertain
    basis: "Visibilité récente : 37 impressions sur trois jours, puis 10 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-24
    peakEnd: 2026-10-26
    recentStart: 2026-11-13
    recentEnd: 2026-11-15
    peakImpressions: 37
    recentImpressions: 10
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - foire aux santons 2026
      - calendrier foire aux santons 2026
      - foire au santon 2026
      - foires aux santons 2026
---

title: "Foire aux santons de Marseille 2026: horaires et visite en famille"
summary: "La 224e Foire aux santons de Marseille est ouverte gratuitement du 14 novembre 2026 au 3 janvier 2027. Attention aux horaires contradictoires du vendredi et du samedi; ateliers enfants à confirmer avant de venir."
---

La **224e Foire aux santons de Marseille** accueille les familles **du 14 novembre 2026 au 3 janvier 2027**, sur le **quai du Port, au Vieux-Port**. L'entrée est **gratuite**, sans billet ni réservation: on peut admirer les crèches et les figurines provençales sans rien acheter. Pour préparer une visite, deux points méritent une vérification: les horaires du soir et la tenue des ateliers pour enfants.

## À quelle heure venir à la foire ?

La foire est annoncée **de 10 h à 19 h tous les jours** sur la [page d'accueil de l'organisateur](https://foire-aux-santons-de-marseille.fr/). Mais la [fiche de la 224e édition publiée par l'Office de tourisme](https://www.marseille-tourisme.com/vivez-marseille-blog/agenda/224e-foire-aux-santons-et-aux-creches-de-marseille-marseille-2eme-fr-6851848/) indique **10 h-20 h le vendredi et le samedi**, et 10 h-19 h les autres jours. La [page contact de l'organisateur](https://foire-aux-santons-de-marseille.fr/contact/) affiche également l'horaire de 20 h le vendredi et le samedi.

**Ces informations se contredisent.** Pour éviter une mauvaise surprise avec des enfants, prévoyez de terminer votre visite **avant 19 h**. Si vous souhaitez venir après 19 h un vendredi ou un samedi, demandez confirmation directement à l'[organisateur](https://foire-aux-santons-de-marseille.fr/contact/). Les horaires des jours fériés ne sont pas précisés ici.

## Que découvrir avec les enfants ?

<!-- article-image-body:01 -->

![Moule ancien du santonnier marseillais Jean-Louis Lagnel, conservé dans la collection du musée Marcel Carbonel, illustration du travail artisanal.](/images/articles/2026/10/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir-body-01.webp)

*Photo: [Philippe Renoux-Carbonel](https://commons.wikimedia.org/wiki/File:Moule_de_Lagnel.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Fondée en **1803**, la foire rassemble des **artisans santonniers provençaux**. En parcourant les chalets, les enfants peuvent repérer les personnages de la crèche, les animaux, les métiers traditionnels et les petits décors. Sur certains stands, la mention **« Fabrication Provence »** signale l'engagement de l'artisan auprès de l'association organisatrice à fabriquer ses santons, crèches et accessoires en Provence.

La [page des animations de l'organisateur](https://foire-aux-santons-de-marseille.fr/les-animations/) présente:

- **Un atelier du santon**, où les enfants fabriquent une figurine à emporter, avec des séances indiquées le mercredi à **11 h, 14 h 30 et 16 h**.
- **Des groupes de musique et de danse folklorique**, annoncés les mercredis et les week-ends.
- **Une Poste du Père Noël**, pour écrire et déposer une lettre.

**Attention: cette page ne précise pas explicitement que ces créneaux sont garantis pour l'édition 2026-2027.** L'âge minimum, les inscriptions, les places disponibles et un éventuel tarif de l'atelier ne sont pas détaillés. Si l'atelier est la raison principale de votre déplacement, faites confirmer la séance et ses conditions avant de partir. La gratuité annoncée concerne l'entrée de la foire, pas nécessairement toutes les activités.

## L'inauguration du 15 novembre est passée

La foire a ouvert ses stands le **samedi 14 novembre 2026**. Le programme de l'inauguration officielle du **dimanche 15 novembre** prévoyait une messe des santonniers en provençal à **10 h 30**, à l'église **Saint-Ferréol-les-Augustins**, puis la coupure symbolique du ruban vers **midi** et la visite des stands avec des groupes folkloriques. Ces rendez-vous ne sont plus à venir: une visite ordinaire permet désormais de découvrir les santons à son rythme.

## Accès, poussette et budget

<!-- article-image-body:02 -->

![Entrée de la station de métro Vieux-Port à Marseille, photographiée en 2009, point d'accès au secteur de la foire.](/images/articles/2026/10/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir-body-02.webp)

*Photo: [Jun Kwang Han](https://commons.wikimedia.org/wiki/File:Entr%C3%A9e_Station_de_m%C3%A9tro_Vieux_Port.jpg) - [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Le **métro M1, station Vieux-Port**, permet de rejoindre facilement le quai du Port sans voiture. L'[organisateur détaille également les transports et parkings](https://foire-aux-santons-de-marseille.fr/infos-pratiques/). L'Office de tourisme classe la manifestation comme **accessible aux personnes en situation de handicap**, sans décrire précisément la circulation entre chaque stand.

La foire se déroule **en extérieur**. Avec une poussette, le passage peut être moins confortable en période d'affluence; les équipements spécifiques pour les bébés ne sont pas documentés. Une visite en journée laisse davantage de marge pour avancer au rythme des plus petits.

Le budget d'entrée peut rester à **0 €**. L'achat de santons, de décors ou de gourmandises est facultatif et les prix varient selon les artisans. Vérifiez séparément le tarif d'une animation si vous souhaitez y participer.

## Prolonger la sortie autour du Vieux-Port

Pour organiser d'autres découvertes sans multiplier les déplacements, consultez notre [itinéraire de trois jours à Marseille avec des enfants](/articles/voyages/marseille-en-famille-pendant-3-jours-itineraire-simple-autour-du-vieux-port/).

Pour un séjour près du port, le [Staycity Aparthotels Marseille Centre Vieux Port sur Booking.com](https://www.booking.com/hotel/fr/staycity-aparthotels-centre-vieux-port.fr.html) propose des studios et appartements avec **kitchenette**, à environ **550 m du port**. Vérifiez la capacité du logement pour les adultes et les enfants, le prix total, les disponibilités et les conditions d'annulation avant de réserver.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/index.md

---
title: "Foire aux santons de Marseille 2026: dates, inauguration et visite en famille"
subtitle: Entrée gratuite sur le quai du Port du 14 novembre 2026 au 3 janvier 2027
summary: La 224e Foire aux santons de Marseille se tient du 14 novembre 2026 au 3 janvier 2027 sur le Vieux-Port. Inauguration, horaires, ateliers annoncés et accès avec des enfants.
category: evenements
location:
  city: Marseille
  department: Bouches-du-Rhône
  region: Provence-Alpes-Côte d'Azur
image:
  src: "/images/articles/2026/10/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir.webp"
  alt: "Santons provençaux exposés au marché de Noël du Vieux-Port de Marseille en novembre 2022, et non à la Foire aux santons 2026."
sources:
  - title: Foire aux Santons de Marseille - Édition 2026, dates, horaires et inauguration
    url: https://foire-aux-santons-de-marseille.fr/
  - title: Foire aux Santons de Marseille - Animations annoncées sans millésime explicite
    url: https://foire-aux-santons-de-marseille.fr/les-animations/
  - title: Office de tourisme de Marseille - 224e Foire aux santons 2026
    url: https://www.marseille-tourisme.com/en/vivez-marseille/events-in-marseille/224e-foire-aux-santons-et-aux-creches-de-marseille-marseille-2eme-en-6851848/
  - title: Foire aux Santons de Marseille - Informations pratiques (page encore marquée 223e édition)
    url: https://foire-aux-santons-de-marseille.fr/infos-pratiques/
eventEndsAt: 2027-01-03T19:00:00+01:00
topic:
  key: evenements|marseille|foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir|2026
  keywords:
    - foire aux santons Marseille 2026 enfants
    - foire aux santons Marseille horaires entrée gratuite
    - inauguration foire santons Marseille 15 novembre
    - atelier santon enfants Marseille 2026
slug: foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir
status: published
publishedAt: 2026-10-23T15:29:55.155Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Marseille
---

La **224e Foire aux santons de Marseille** se tiendra **du samedi 14 novembre 2026 au dimanche 3 janvier 2027**, sur le **quai du Port, au Vieux-Port**. L'entrée est **gratuite**: les familles peuvent admirer les santons et les crèches provençales sans obligation d'achat. Pour choisir votre moment, l'essentiel est de distinguer l'**inauguration du dimanche 15 novembre**, avec son cortège folklorique annoncé, d'une visite libre un autre jour.

## Que se passe-t-il à l'inauguration du 15 novembre ?

Les stands ouvrent dès le **samedi 14 novembre à 10 h**. L'inauguration officielle est prévue **le lendemain, dimanche 15 novembre**:

- **10 h 30**: messe des santonniers en provençal à l'église **Saint-Ferréol-les-Augustins**.
- **Vers midi**: coupure symbolique du ruban à l'entrée de la foire.
- **Ensuite**: visite des stands par les élus, accompagnés de **groupes folkloriques**.

Cette journée permet de découvrir les traditions provençales au-delà des figurines. Pour des enfants qui préfèrent regarder les miniatures à leur rythme, une visite ordinaire laisse davantage de souplesse, sans horaire de cérémonie à respecter.

## Que découvrir avec les enfants ?

<!-- article-image-body:01 -->

![Moule ancien du santonnier marseillais Jean-Louis Lagnel, conservé dans la collection du musée Marcel Carbonel, illustration du travail artisanal.](/images/articles/2026/10/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir-body-01.webp)

*Photo: [Philippe Renoux-Carbonel](https://commons.wikimedia.org/wiki/File:Moule_de_Lagnel.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Fondée en **1803**, la foire réunit des **artisans santonniers provençaux**. En parcourant les chalets, les enfants peuvent chercher les personnages de la crèche, les animaux, les métiers traditionnels et les petits décors. Sur certains stands, une affichette **« Fabrication Provence »** signale l'engagement de l'artisan auprès de l'association organisatrice à fabriquer ses santons, crèches et accessoires en Provence.

L'organisateur présente aussi plusieurs animations sur son site:

- **Un atelier du santon** où les enfants peuvent fabriquer une figurine à emporter; la page mentionne des séances le **mercredi à 11 h, 14 h 30 et 16 h**.
- **Des groupes de musique et de danse folklorique** les mercredis et les week-ends.
- **Une « Poste du Père Noël »** pour rédiger et déposer une lettre.

**Ces animations ne sont pas encore garanties pour l'édition 2026-2027.** La page consultée n'indique pas explicitement son année de validité. Elle ne précise pas non plus l'âge minimum, les inscriptions, le tarif éventuel ni les places disponibles à l'atelier. Si votre enfant souhaite absolument fabriquer un santon, demandez confirmation à l'organisateur avant de vous déplacer pour un créneau donné. **La foire elle-même et sa gratuité d'accès sont bien confirmées.**

## Horaires, accès et budget de la visite

<!-- article-image-body:02 -->

![Entrée de la station de métro Vieux-Port à Marseille, photographiée en 2009, point d'accès au secteur de la foire.](/images/articles/2026/10/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir-body-02.webp)

*Photo: [Jun Kwang Han](https://commons.wikimedia.org/wiki/File:Entr%C3%A9e_Station_de_m%C3%A9tro_Vieux_Port.jpg) - [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

La foire se déroule **quai du Port, sur le Vieux-Port de Marseille**, aux horaires annoncés pour 2026-2027:

- **Du dimanche au jeudi: 10 h-19 h.**
- **Vendredi et samedi: 10 h-20 h.**

Le **métro M1, arrêt Vieux-Port**, permet de rejoindre le secteur sans voiture. L'Office de tourisme classe la manifestation comme **accessible aux personnes en situation de handicap**, mais ne détaille pas les conditions de circulation entre chaque stand. La foire se tient en extérieur; en poussette, la facilité de passage dépendra notamment de l'affluence. Les équipements spécifiques pour les bébés ne sont pas documentés.

**Aucun billet ni réservation n'est nécessaire pour entrer.** Le budget peut rester nul pour la visite des stands; l'achat de santons, d'accessoires, de gourmandises ou la participation à une éventuelle animation payante restent facultatifs. Les prix des produits varient selon les artisans.

## Prolonger une visite du Vieux-Port en famille

Si vous séjournez plusieurs jours à Marseille, notre [itinéraire de trois jours autour du Vieux-Port avec des enfants](/articles/voyages/marseille-en-famille-pendant-3-jours-itineraire-simple-autour-du-vieux-port/) permet de combiner la foire avec d'autres visites sans répéter ici tout le programme de la ville.

Pour loger à proximité, le [Staycity Aparthotels Marseille Centre Vieux Port sur Booking.com](https://www.booking.com/hotel/fr/staycity-aparthotels-centre-vieux-port.fr.html) propose des studios et appartements avec **kitchenette**, à environ **550 m du port**. Les capacités diffèrent selon les logements: vérifiez le nombre d'adultes et d'enfants admis, le prix total, les disponibilités et les conditions d'annulation aux dates de votre séjour.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | Foire du livre de Brive 2026 en famille: dates, auteurs jeunesse et conseils de visite | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine
- /articles/evenements/herofestival-marseille-2026-en-famille-billets-gratuite-enfants-et-conseils/ | HeroFestival Marseille 2026 en famille: billets, gratuité enfants et conseils | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | Fête de la mer 2026 à Marseille avec des enfants: quelle escale choisir? | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges/ | Noël à Aix-en-Provence 2026 en famille: marchés, santons et manèges | evenements | Aix-en-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/sorties/chateau-d-if-a-marseille-en-famille-bateau-visite-et-tarifs/ | Château d'If à Marseille en famille: bateau, visite et tarifs | sorties | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/sorties/mucem-en-famille-billets-gratuites-et-conseils-pour-la-visite/ | Mucem Marseille en famille: tarifs 2026, billets et gratuités | sorties | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/maison/dechets-tri-mobile-a-marseille-quoi-apporter-sans-aller-a-la-decheterie/ | Déchets’tri mobile à Marseille: quoi apporter sans aller à la déchèterie? | maison | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/activites/preau-des-accoules-a-marseille-faut-il-reserver-avant-de-venir-avec-des-enfants/ | Préau des Accoules à Marseille: faut-il réserver avant de venir avec des enfants? | activites | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/tous-en-sons-2026-a-marseille-quel-spectacle-choisir-selon-l-age-des-enfants/ | Tous en Sons ! 2026 à Marseille: spectacles enfants, âges et tarifs | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | Foire aux santons de Marseille 2026: dates, inauguration et visite en famille | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/mucem-a-la-toussaint-2026-quelle-activite-en-ribambelle-choisir-selon-l-age/ | Mucem à la Toussaint 2026: le programme En Ribambelle avec des enfants | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/sorties/cosquer-mediterranee-avec-des-enfants-age-poussette-tarifs/ | Cosquer Méditerranée avec des enfants: que peut-on visiter selon leur âge? | sorties | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/sorties/escale-borely-avec-des-enfants-du-david-au-bowl-a-pied/ | Escale Borély avec des enfants: du David au Bowl à pied | sorties | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/vie-pratique/consigne-a-marseille-saint-charles-avec-des-enfants-ou-laisser-valises-et-poussette/ | Consigne à Marseille Saint-Charles avec des enfants: où laisser valises et poussette? | vie-pratique | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/voyages/pont-de-gau-en-famille-en-automne-et-en-hiver-flamants-roses-et-marais/ | Pont de Gau en famille en automne et en hiver: flamants roses et marais | voyages | Saintes-Maries-de-la-Mer, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/saint-remy-de-provence-en-famille-glanum-musees-et-entrees-gratuites/ | Saint-Rémy-de-Provence en famille: Glanum, musées et entrées gratuites | bons-plans | Saint-Rémy-de-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/sorties/carrieres-des-lumieres-avec-des-enfants-choisir-son-spectacle-et-preparer-la-visite/ | Carrières des Lumières avec des enfants: choisir son spectacle et préparer la visite | sorties | Les Baux-de-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir/ | Arles en famille à petit budget: quelles visites et quel pass choisir? | bons-plans | Arles, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/carnaval-de-guadeloupe-2027-preparer-une-premiere-sortie-avec-ses-enfants/ | Carnaval de Guadeloupe 2027: préparer une première sortie avec ses enfants | evenements | Guadeloupe
- /articles/evenements/niepce-et-apres-une-exposition-photo-a-decouvrir-en-famille-a-chalon-sur-saone/ | Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône | evenements | Chalon-sur-Saône, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-puy-du-fou-en-famille-spectacles-et-visite-en-hiver/ | Noël 2026 au Puy du Fou en famille: spectacles et visite en hiver | evenements | Les Epesses, Vendée, Pays de la Loire
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes

### Historique Radar lié

- refresh | /articles/bons-plans/arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir/ | 2026-11-07T18:35:07.024Z
- opportunity | /articles/sorties/cosquer-mediterranee-avec-des-enfants-age-poussette-tarifs/ | 2026-10-03T11:22:17.769Z
- opportunity | /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | 2026-10-06T16:58:51.946Z
- opportunity | /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | 2026-10-23T15:29:55.218Z
- opportunity | /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | 2026-10-18T16:46:58.413Z
- opportunity | /articles/evenements/mucem-a-la-toussaint-2026-quelle-activite-en-ribambelle-choisir-selon-l-age/ | 2026-10-04T10:54:39.216Z
- opportunity | /articles/evenements/noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges/ | 2026-10-25T15:16:03.590Z
- opportunity | /articles/evenements/tous-en-sons-2026-a-marseille-quel-spectacle-choisir-selon-l-age-des-enfants/ | 2026-10-31T13:29:50.851Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
