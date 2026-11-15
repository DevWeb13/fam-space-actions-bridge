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
title: "Festival Playground 2026: spectacles de danse en famille, dates et tarifs"
subtitle: "Jusqu'au 29 novembre en Île-de-France: spectacles dès 3 mois, séances publiques, accès et prix."
summary: "Playground 2026 accueille les bébés et les plus grands. Choisissez parmi les séances publiques de COU ERTURE, AudioBébéDanse!, Hypermer, #petit CORPS, A corpo libero et Jean Romuald, avec les tarifs et accès."
category: evenements
location:
  city: Bagnolet
  department: Seine-Saint-Denis
  region: Île-de-France
image:
  src: /images/articles/2026/10/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants.webp
  alt: Vue du parc de la Villette à Paris, où se trouve Little Villette, l'un des lieux du festival Playground
sources:
  - title: Rencontres chorégraphiques - Playground 26, programme officiel
    url: https://rencontreschoregraphiques.com/festival/playground-26/
  - title: Rencontres chorégraphiques - COU ERTURE
    url: https://rencontreschoregraphiques.com/spectacle/pauline-valentin-cou-erture/
  - title: Rencontres chorégraphiques - Hypermer
    url: https://rencontreschoregraphiques.com/spectacle/nina-santes-hypermer/
  - title: Rencontres chorégraphiques - AudioBébéDanse!
    url: https://rencontreschoregraphiques.com/spectacle/lorena-dozio-audiobebedanse-2/
  - title: Rencontres chorégraphiques - A corpo libero
    url: https://rencontreschoregraphiques.com/spectacle/la-baracca-a-corpo-libero/
  - title: "Rencontres chorégraphiques - #petit CORPS"
    url: https://rencontreschoregraphiques.com/spectacle/mathieu-heyraud-petit-corps/
  - title: Rencontres chorégraphiques - Jean Romuald, un garçon de son âge
    url: https://rencontreschoregraphiques.com/spectacle/mickael-phelippeau-jean-romuald-un-garcon-de-son-age/
  - title: Théâtre de Suresnes - Tarifs des Dimanches en famille
    url: https://www.theatre-suresnes.fr/dimanchesenfamille/
  - title: Théâtre de Suresnes - Billetterie Jean-Romuald, 29 novembre 2026
    url: https://billetterie.theatre-suresnes.fr/selection/event/date?productId=10229855074717
eventEndsAt: 2026-11-29
reviewAt: 2026-11-02
topic:
  key: evenements|bagnolet|festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants|2026
  keywords:
    - festival Playground 2026
    - spectacles danse enfants Île-de-France
    - Playground 2026 tarifs et dates
    - danse bébé Romainville novembre 2026
    - Little Villette A corpo libero
slug: festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants
status: published
publishedAt: 2026-10-26T06:30:10.109Z
updatedAt: null
readingTime: 7
affiliate:
  enabled: true
  type: travel
  destination: Bagnolet
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/index.md
  targetSha: 3c01d023cae7119be32f63ae82d5517b0d32e1f3
  targetUrl: /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/
  decision: Choisir parmi les représentations publiques encore à venir du festival Playground selon l'âge des enfants, la date, le lieu et le budget, sans confondre séances scolaires et séances ouvertes aux familles.
  affiliationPotential: Conserver l'hébergement Campanile Prime Paris 19 - La Villette sur Booking.com pour les familles qui prolongent la sortie; aucune billetterie partenaire vérifiée pour ces spectacles.
  gsc:
    retrievedAt: 2026-11-14T03:26:00+01:00
    dataThrough: 2026-11-10
    signal: needs_query_check
    basis: "Visibilité récente : 37 impressions sur trois jours, puis 1 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-27
    peakEnd: 2026-10-29
    recentStart: 2026-11-08
    recentEnd: 2026-11-10
    peakImpressions: 37
    recentImpressions: 1
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - festival Playground 2026
      - spectacles danse enfants Île-de-France
      - Playground 2026 tarifs et dates
      - danse bébé Romainville novembre 2026
      - Little Villette A corpo libero
---

Du **4 au 29 novembre 2026**, le festival Playground présente de la danse dans 34 villes d'Île-de-France. Pour une sortie en famille à partir du 15 novembre, il faut surtout distinguer les **séances ouvertes au public** des représentations scolaires. Voici les spectacles à choisir selon l'âge des enfants, avec les horaires, les prix et les accès utiles.

## Avec un bébé: deux expériences à Romainville et La Courneuve

### Dès 3 mois: COU ERTURE

Dans **COU ERTURE**, Pauline Valentin mêle danse, musique et matières à explorer autour des souvenirs de la petite enfance. Cette proposition sensorielle dure **45 minutes** et accueille les bébés **dès 3 mois**.

Les séances publiques annoncées sont:
- **Vendredi 20 novembre à 17 h**, puis **samedi 21 novembre à 9 h 45 et 11 h**, au **Pavillon de Romainville**: **3 € le billet**.
- **Mardi 24 et mercredi 25 novembre à 9 h 30 et 11 h**, au **centre culturel Houdremont de La Courneuve**: **10 € plein tarif**, **6 € réduit** et **3 € très réduit**, selon les conditions indiquées par le lieu. La grille de Houdremont distingue notamment des catégories liées à l'âge et à la situation personnelle: vérifiez la catégorie réellement proposée à la réservation.

**Ne confondez pas** ces séances avec celle du **20 novembre à 10 h à Romainville**, réservée aux scolaires.

Le Pavillon se trouve au **28 avenue Paul-Vaillant-Couturier, 93230 Romainville**: métro 11 **Romainville-Carnot** ou bus 129 et 318, arrêt Mairie de Romainville. Une guinguette propose goûters, boissons et petite restauration. Houdremont se situe au **11 avenue du Général-Leclerc, 93120 La Courneuve**: métro 7 **La Courneuve 8-Mai-1945** avec le tram T1 à Six Routes, ou RER B **La Courneuve-Aubervilliers**.

La [fiche officielle de COU ERTURE](https://rencontreschoregraphiques.com/spectacle/pauline-valentin-cou-erture/) donne accès aux réservations par salle. Pour une sortie avec un nourrisson, demandez au lieu où laisser la poussette et si chaque accompagnant et bébé doit disposer d'un billet.

### Dès 6 mois, sous réserve de confirmation: AudioBébéDanse!

Le **samedi 21 novembre à 10 h et 16 h 30**, *AudioBébéDanse!* de Lorena Dozio invite les tout-petits à explorer sons, voix et mouvements au **Pavillon de Romainville**. **Durée: 38 minutes; tarif unique annoncé: 3 €**.

**Attention à l'âge:** le pictogramme de la fiche organisatrice annonce **dès 6 mois**, mais le descriptif évoque **9 mois à 2 ans**. Pour un bébé de 6 à 8 mois, confirmez son admission avant d'acheter. Vérifiez également le nombre de billets nécessaires pour les adultes et le bébé. Le Pavillon indique un **accès PMR**, sans que cela garantisse l'entrée des poussettes dans la salle.

Les séances du **vendredi 20 novembre à 9 h 30 et 10 h 45** sont **scolaires**.

## Dès 1 an: A corpo libero à Little Villette

Dans *A corpo libero*, Giada Ciccolini explore les gestes et l'équilibre dans un solo sans paroles de **35 minutes**. Six représentations publiques sont annoncées **samedi 28 et dimanche 29 novembre à 11 h, 15 h et 17 h**, à **Little Villette, Paris 19e**.

**Tarifs annoncés: 16 € plein tarif et 10 € réduit**, notamment pour les moins de 28 ans, les personnes en situation de handicap et leur accompagnateur, les demandeurs d'emploi et les bénéficiaires de minima sociaux. Deux adultes au plein tarif et deux enfants éligibles au réduit représenteraient **52 €**; confirmez les catégories appliquées à chaque billet.

**Adresse:** 211 galerie de la Villette, 75019 Paris. Métro 5 ou tram T3b, **Porte de Pantin**. Accès PMR signalé et restauration possible dans le parc.

Pour prolonger cette sortie, notre guide de la [Cité des sciences en famille](https://www.fam-space.fr/articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/) détaille billets et créneaux des espaces enfants. **Les deux visites nécessitent des réservations distinctes.**

## Dès 6 ans: deux spectacles à Sevran, Mantes-la-Jolie et Bagnolet

### #petit CORPS, à Sevran

Le **samedi 21 novembre à 16 h**, *#petit CORPS* mêle danse, dessin et questions d'enfants sur le corps, avec participation du public. **Durée: 60 minutes; dès 6 ans.**

**Salle des fêtes de Sevran, 9 rue Gabriel-Péri**. **Tarifs: 7 € plein et 5 € réduit** pour les catégories annoncées, notamment les moins de 20 ans, les titulaires de la carte famille nombreuse, les étudiants, demandeurs d'emploi et bénéficiaires du RSA. Deux adultes au plein tarif et deux enfants au réduit paieraient **24 €** si ces catégories sont confirmées lors de l'achat.

Accès par le **RER B Sevran-Livry** ou le bus 607, arrêt Gaston-Bussière. Les séances du **vendredi 20 novembre à 9 h 30 et 14 h 30** sont scolaires.

### Hypermer, à Mantes-la-Jolie et Bagnolet

Dans *Hypermer*, Nina Santes imagine un voyage aquatique entre danse, chant et drag-clown, où les enfants sont invités à participer. **Durée: 45 minutes; dès 6 ans**.

Deux séances publiques figurent sur la [fiche officielle d'Hypermer](https://rencontreschoregraphiques.com/spectacle/nina-santes-hypermer/):
- **Samedi 21 novembre à 17 h**, au **Collectif 12**, Friche André-Malraux, **174 boulevard du Maréchal-Juin, 78200 Mantes-la-Jolie**. **8 € plein tarif, 5 € réduit** (notamment moins de 26 ans, plus de 60 ans, étudiants, demandeurs d'emploi et familles nombreuses). Gare de Mantes-la-Jolie puis environ **10 minutes à pied**; parking gratuit de L'Agora annoncé à environ 10 minutes à pied.
- **Jeudi 26 novembre à 19 h**, au **Théâtre municipal Les Malassis**, **3 rue Julian-Grimau, 93170 Bagnolet**. **6 € tarif unique**. Métro 3 **Gallieni**, puis environ **20 minutes à pied**, ou bus 122 (Pierre-Curie) et 76 (Les Malassis).

Les séances du **20 novembre à 14 h 15** à Mantes-la-Jolie et du **26 novembre à 14 h 30** à Bagnolet sont **scolaires**. Pour Bagnolet, l'horaire de 19 h mérite d'être anticipé avec de jeunes enfants.

## Dès 8 ans: Jean Romuald, un garçon de son âge

Dans ce solo de **60 minutes**, Jean-Romuald Fessin danse sur des musiques qu'il compose lui-même. Le spectacle de Mickaël Phelippeau est annoncé **dès 8 ans**.

La dernière séance publique indiquée a lieu le **dimanche 29 novembre à 16 h**, au **Théâtre de Suresnes Jean Vilar**, **16 place Stalingrad**. Tarifs de cette représentation: **25 € plein**, **20 € réduit**, **12 € pour les moins de 28 ans** et **10 € pour les moins de 12 ans**. Attention: le tarif enfant de 8 € figurant dans la grille générale du théâtre concerne une **autre catégorie de spectacles**. La billetterie précise aussi que les **moins de 3 ans ne sont pas admis**.

Le théâtre annonce un **parking gratuit**. Accès notamment par le train L (**Le Val d'Or**) ou le tram T2 avec correspondance en bus.

Pour mémoire, les deux autres séances publiques ont eu lieu le **4 novembre à 20 h au Théâtre L'Échangeur de Bagnolet** (59 avenue du Général-de-Gaulle, **8 €**, métro 3 Gallieni, accès PMR et poussette signalé, bar ouvert une heure avant) et le **7 novembre à 18 h au Pavillon de Romainville** (**3 €**, soit 12 € pour quatre billets). La séance du **6 novembre à 14 h 30** à Romainville était scolaire.

<!-- article-image-body:01 -->

![Façade du théâtre Jean-Vilar à Suresnes, lieu de la représentation du 29 novembre, photographiée en 2018](/images/articles/2026/10/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants-body-01.webp)

*Photo: [Celette](https://commons.wikimedia.org/wiki/File:Th%C3%A9%C3%A2tre_Jean-Vilar_(Suresnes).jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

## Réserver et organiser les déplacements

Chaque salle gère ses billets. Les prix indiqués sont ceux publiés par les organisateurs; **la programmation ne garantit pas la disponibilité des places ni le tarif final**. Les fiches officielles des spectacles, reprises dans les références de l'article, permettent de retrouver les billetteries. Pour les tout-petits, vérifiez la limite d'âge applicable, le nombre de billets nécessaires et les conditions d'accueil des poussettes: **accès PMR ne signifie pas automatiquement poussette autorisée dans l'espace de représentation**.

Si vous combinez plusieurs sorties, notre guide [Transports à Paris avec des enfants](https://www.fam-space.fr/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/) aide à choisir tickets et forfaits selon les trajets.

## Prolonger une sortie à La Villette par un week-end

Pour assister à *A corpo libero* et visiter Paris le lendemain, le [Campanile Prime Paris 19 - La Villette sur Booking.com](https://www.booking.com/hotel/fr/campanile-prime-paris19-lavillette.fr.html) est une option dans le 19e arrondissement. L'établissement annonce des chambres familiales: vérifiez leur capacité, leur disponibilité et leur prix aux dates souhaitées. Cet hébergement **n'est pas nécessairement pratique** pour les séances à Sevran, Mantes-la-Jolie, Bagnolet ou Suresnes.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/index.md

---
title: "Festival Playground 2026: spectacles de danse en famille, dates et tarifs"
subtitle: "Du 4 au 29 novembre en Île-de-France: quatre spectacles, les séances publiques et les prix selon l'âge."
summary: Playground 2026 propose de la danse aux bébés comme aux plus grands. Dates, durées, tarifs et accès de quatre spectacles réellement ouverts aux familles, sans confondre séances publiques et scolaires.
category: evenements
location:
  city: Bagnolet
  department: Seine-Saint-Denis
  region: Île-de-France
image:
  src: "/images/articles/2026/10/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants.webp"
  alt: "Vue du parc de la Villette à Paris, où se trouve Little Villette, l'un des lieux du festival Playground"
sources:
  - title: Rencontres chorégraphiques - Playground 26, programme officiel
    url: https://rencontreschoregraphiques.com/festival/playground-26/
  - title: Rencontres chorégraphiques - AudioBébéDanse!
    url: https://rencontreschoregraphiques.com/spectacle/lorena-dozio-audiobebedanse-2/
  - title: Rencontres chorégraphiques - A corpo libero
    url: https://rencontreschoregraphiques.com/spectacle/la-baracca-a-corpo-libero/
  - title: "Rencontres chorégraphiques - #petit CORPS"
    url: https://rencontreschoregraphiques.com/spectacle/mathieu-heyraud-petit-corps/
  - title: Rencontres chorégraphiques - Jean Romuald, un garçon de son âge
    url: https://rencontreschoregraphiques.com/spectacle/mickael-phelippeau-jean-romuald-un-garcon-de-son-age/
  - title: Théâtre de Suresnes - Tarifs des Dimanches en famille
    url: https://www.theatre-suresnes.fr/dimanchesenfamille/
  - title: Théâtre de Suresnes - Billetterie Jean-Romuald, 29 novembre 2026
    url: https://billetterie.theatre-suresnes.fr/selection/event/date?productId=10229855074717
eventEndsAt: 2026-11-29
reviewAt: 2026-11-02
topic:
  key: evenements|bagnolet|festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants|2026
  keywords:
    - festival Playground 2026
    - spectacles danse enfants Île-de-France
    - Playground 2026 tarifs et dates
    - danse bébé Romainville novembre 2026
    - Little Villette A corpo libero
slug: festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants
status: published
publishedAt: 2026-10-26T06:30:10.109Z
updatedAt: null
readingTime: 5
affiliate:
  enabled: true
  type: travel
  destination: Bagnolet
---

Du **4 au 29 novembre 2026**, le festival Playground propose plus de 150 rendez-vous de danse dans 34 villes d'Île-de-France. Mais une partie de la programmation est réservée aux écoles. Voici quatre spectacles avec des **séances publiques identifiées**, pour des enfants allant de la petite enfance à 8 ans et plus.

## Quel spectacle de danse choisir avec les enfants ?

<!-- article-image-body:01 -->

![Façade du théâtre Jean-Vilar à Suresnes, lieu de la représentation du 29 novembre, photographiée en 2018](/images/articles/2026/10/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants-body-01.webp)

*Photo: [Celette](https://commons.wikimedia.org/wiki/File:Th%C3%A9%C3%A2tre_Jean-Vilar_(Suresnes).jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

### Avec un bébé: AudioBébéDanse! à Romainville

Le **samedi 21 novembre à 10 h et 16 h 30**, *AudioBébéDanse!* invite les tout-petits à explorer les sons, les voix et le mouvement avec des danseuses. L'expérience sensorielle de Lorena Dozio dure **38 minutes** et le **tarif unique affiché est de 3 €**.

**Attention à l'âge:** le pictogramme de la fiche officielle indique **dès 6 mois**, mais son descriptif parle d'enfants **de 9 mois à 2 ans**. Pour un bébé de 6 à 8 mois, confirmez auprès du Pavillon de Romainville que la séance lui est bien accessible. Vérifiez aussi les billets nécessaires pour les adultes et le bébé: le tarif affiché ne précise pas de gratuité pour les plus jeunes.

Le Pavillon se situe au **28 avenue Paul-Vaillant-Couturier, 93230 Romainville**. Accès par le métro 11 **Romainville-Carnot**, ou les bus 129 et 318 (Mairie de Romainville). L'organisateur signale un **accès PMR** et une guinguette avec goûters et petite restauration.

Les séances du **vendredi 20 novembre à 9 h 30 et 10 h 45** sont **scolaires**: elles ne correspondent pas aux représentations publiques du samedi.

### Dès 1 an: A corpo libero à Little Villette

Dans *A corpo libero*, Giada Ciccolini explore les gestes et l'équilibre dans un solo sans paroles de **35 minutes**, annoncé **dès 1 an**. Six représentations publiques sont programmées à **Little Villette, Paris 19e**: **samedi 28 et dimanche 29 novembre à 11 h, 15 h et 17 h**.

Le tarif annoncé est de **16 € plein tarif** et **10 € réduit**, notamment pour les moins de 28 ans, les personnes en situation de handicap et leur accompagnateur, les demandeurs d'emploi et les bénéficiaires de minima sociaux. À titre d'exemple, deux adultes au plein tarif et deux enfants éligibles au réduit représenteraient **52 €**; le montant dépend des catégories acceptées lors de la commande.

**Adresse:** 211 galerie de la Villette, 75019 Paris. Métro 5 et tram T3b, arrêt **Porte de Pantin**. Accès PMR signalé; restauration possible dans le parc de La Villette.

Si vous souhaitez prolonger la journée par une autre visite, notre guide de la [Cité des sciences en famille](https://www.fam-space.fr/articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/) détaille les billets et les créneaux des espaces enfants. **La Cité des sciences et Playground ont des réservations distinctes.**

### Dès 6 ans: #petit CORPS à Sevran

Le **samedi 21 novembre à 16 h**, *#petit CORPS* mêle danse, dessin et questions d'enfants sur le corps. Le public est invité à participer. **Durée: 60 minutes; âge annoncé: dès 6 ans.**

La représentation a lieu à la **salle des fêtes de Sevran, 9 rue Gabriel-Péri**. Les prix affichés sont de **7 € plein tarif** et **5 € réduit**. Le tarif réduit concerne notamment les **moins de 20 ans**, les titulaires de la carte famille nombreuse, les étudiants, les demandeurs d'emploi et les bénéficiaires du RSA. Deux adultes au plein tarif et deux enfants au réduit paieraient donc **24 €**, si les conditions tarifaires restent identiques lors de la réservation.

Accès par le **RER B Sevran-Livry** ou le bus 607 (Gaston-Bussière). Les représentations du **vendredi 20 novembre à 9 h 30 et 14 h 30** sont réservées aux scolaires.

### Dès 8 ans: Jean Romuald, un garçon de son âge, dans trois villes

Dans ce solo de **60 minutes**, Jean-Romuald Fessin danse sur des musiques qu'il compose lui-même. Le spectacle de Mickaël Phelippeau est annoncé **dès 8 ans**. Trois séances publiques sont proposées:

- **Mercredi 4 novembre à 20 h**, **Théâtre L'Échangeur**, 59 avenue du Général-de-Gaulle à **Bagnolet**: **8 € tarif unique**. Métro 3, **Gallieni**. Le théâtre signale un accès PMR et poussette; son bar ouvre une heure avant le spectacle. L'horaire tardif mérite d'être pris en compte pour un enfant de 8 ans.
- **Samedi 7 novembre à 18 h**, **Le Pavillon à Romainville**: **3 € tarif unique**, soit **12 € pour quatre billets** au tarif annoncé. C'est l'une des propositions les moins chères de cette sélection.
- **Dimanche 29 novembre à 16 h**, **Théâtre de Suresnes Jean Vilar**, 16 place Stalingrad: **25 € plein tarif**, **20 € réduit**, **12 € pour les moins de 28 ans** et **10 € pour les moins de 12 ans**. Ce dernier prix est confirmé par la billetterie de cette représentation; le tarif enfant de 8 € visible dans la grille générale du théâtre concerne une **autre catégorie de spectacles (JP)**. Parking gratuit du théâtre annoncé; accès notamment par le train L (**Le Val d'Or**) ou le tram T2 avec correspondance en bus.

À Suresnes, la billetterie précise que les **moins de 3 ans ne sont pas admis en salle**. La séance du **vendredi 6 novembre à 14 h 30 à Romainville** est, elle, réservée aux scolaires.

## Billets et conditions à vérifier

Les tarifs sont ceux publiés par les organisateurs lors de la préparation de ce guide. Chaque salle gère sa propre réservation: **une date inscrite au programme ne garantit ni une place disponible ni le tarif final**. Les fiches des spectacles et les accès aux billetteries figurent dans les **sources** en bas de l'article.

Pour *AudioBébéDanse!*, confirmez l'âge minimal applicable et le nombre de billets nécessaires. Si vous venez avec une poussette, renseignez-vous auprès du lieu: un accès PMR ne signifie pas automatiquement que la poussette peut entrer dans l'espace de représentation.

Pour rejoindre plusieurs salles, notre guide [Transports à Paris avec des enfants](https://www.fam-space.fr/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/) permet de comparer tickets et forfaits franciliens selon les trajets.

## Prolonger le festival par un week-end à Paris

Pour une famille qui souhaite assister à un spectacle à La Villette et visiter Paris le lendemain, le [Campanile Prime Paris 19 - La Villette sur Booking.com](https://www.booking.com/hotel/fr/campanile-prime-paris19-lavillette.fr.html) constitue une piste d'hébergement dans le 19e arrondissement. L'établissement annonce des chambres familiales, mais **leur capacité exacte, leur disponibilité et leur prix pour vos dates doivent être vérifiés**. Il ne faut pas supposer que cet hôtel soit aussi pratique pour les séances à Sevran, Bagnolet ou Suresnes.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | Festival MARMOE 2026 à Montreuil: spectacles, ateliers et sorties jusqu'au 29 novembre | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/activites/visiter-le-stade-de-france-en-famille-coulisses-musee-et-conseils-pratiques/ | Visiter le Stade de France en famille: coulisses, musée et conseils pratiques | activites | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/evenements/chambly-kids-festival-2027-quatre-spectacles-pour-les-enfants-dates-et-ages/ | Chambly Kids Festival 2027: quatre spectacles pour les enfants, dates et âges | evenements | Chambly, Oise, Hauts-de-France
- /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | Festival du Livre de Colmar 2026 en famille: dates, horaires et animations jeunesse | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | Festival Enfantillages 2026 à Valbonne: spectacles gratuits et cinéma en famille | evenements | Valbonne, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/jardins-ouverts-2026-ile-de-france-en-famille/ | Jardins ouverts 2026: choisir une animation pour les enfants en Île-de-France | evenements
- /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | Bédéciné 2026 à Illzach en famille: ateliers, spectacles et billets | evenements | Illzach, Haut-Rhin, Grand Est
- /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | Festival Playground 2026: spectacles de danse en famille, dates et tarifs | evenements | Bagnolet, Seine-Saint-Denis, Île-de-France
- /articles/activites/musee-de-l-air-et-de-l-espace-au-bourget-quel-parcours-en-famille/ | Musée de l’Air et de l’Espace au Bourget: quel parcours en famille? | activites | Le Bourget, Seine-Saint-Denis, Île-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | Monument jeu d'enfant 2026 à Saint-Denis: atelier Dagobert le 17 octobre | evenements | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/sorties/musee-de-l-air-et-de-l-espace-a-la-toussaint-2026-quelle-activite-choisir-selon-l-age/ | Toussaint 2026 au Musée de l'Air et de l'Espace: quelle activité choisir avec un enfant? | sorties | Le Bourget, Seine-Saint-Denis, Île-de-France
- /articles/evenements/ateliers-au-jardin-de-la-pmi-a-bobigny-quelles-dates-choisir-cet-automne/ | Ateliers au jardin de la PMI à Bobigny: quelles dates choisir cet automne? | evenements | Bobigny, Seine-Saint-Denis, Île-de-France
- /articles/voyages/dormir-a-saint-denis-pour-visiter-paris-avec-des-enfants-pleyel-ou-basilique/ | Dormir à Saint-Denis pour visiter Paris avec des enfants: Pleyel ou Basilique? | voyages | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/sorties/musee-de-l-air-et-de-l-espace-du-bourget-en-famille-tarifs-avions-et-activites/ | Musée de l'Air et de l'Espace du Bourget en famille: tarifs, avions et activités | sorties | Le Bourget, Seine-Saint-Denis, Île-de-France
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/carnaval-de-guyane-2027-en-famille-preparer-ses-premieres-sorties/ | Carnaval de Guyane 2027 en famille: préparer ses premières sorties | evenements | Guyane
- /articles/evenements/mondo-clowns-2027-a-marmande-dates-tarifs-et-conseils-en-famille/ | Mondo'Clowns 2027 à Marmande: dates, tarifs et conseils en famille | evenements | Marmande, Lot-et-Garonne, Nouvelle-Aquitaine
- /articles/evenements/festival-tete-de-mioche-2027-a-l-horme-quels-spectacles-choisir-avec-les-enfants/ | Festival Tête de mioche 2027 à L'Horme: quels spectacles choisir avec les enfants ? | evenements | L'Horme, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/festival-mini-kids-2027-aux-orres-trois-jours-pour-les-3-6-ans/ | Festival Mini Kids 2027 aux Orres, trois jours pour les 3-6 ans | evenements | Les Orres, Hautes-Alpes, Provence-Alpes-Côte d’Azur
- /articles/evenements/fete-du-citron-2027-a-menton-en-famille-que-voir-et-combien-prevoir/ | Fête du Citron 2027 à Menton en famille: que voir et combien prévoir ? | evenements | Menton, Alpes-Maritimes, Provence-Alpes-Côte d’Azur

### Historique Radar lié

- opportunity | /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | 2026-10-23T12:33:36.649Z
- opportunity | /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | 2026-10-20T08:52:25.825Z
- opportunity | /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | 2026-10-26T03:35:31.605Z
- opportunity | /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | 2026-10-25T23:35:17.860Z
- refresh | /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | 2026-11-14T05:32:38.580Z
- opportunity | /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | 2026-10-26T06:30:10.217Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | 2026-10-13T09:50:29.435Z
- opportunity | /articles/sorties/musee-de-l-air-et-de-l-espace-a-la-toussaint-2026-quelle-activite-choisir-selon-l-age/ | 2026-10-05T20:22:10.692Z
- opportunity | /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | 2026-10-15T05:30:56.094Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
