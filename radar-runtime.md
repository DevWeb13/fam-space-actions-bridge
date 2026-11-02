# Radar Fam Space - Phase 3/3

## Mission

Radar utilise Google Search Console et la recherche web pour choisir le travail éditorial qui apporte le plus de valeur à Fam Space: améliorer une page réellement perfectible, développer une intention proche d'une page forte, ou publier à temps une opportunité locale/saisonnière. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

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
- pour un refresh, `substantialChanges`: au moins deux changements substantiels;
- pour un refresh, `regressionCheck`: résultat concret de la comparaison ancien/nouveau.

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
title: "Petite section : comment demander un aménagement des après-midis ?"
subtitle: "Formulaire, courrier, horaires et délais : la démarche pour alléger les après-midis à l'école maternelle"
summary: En petite section, les familles peuvent demander un aménagement des heures de classe de l'après-midi. Où trouver le formulaire, que préciser dans la demande et quand peut-elle s'appliquer ?
slug: petite-section-peut-on-alleger-les-apres-midis-a-l-ecole-maternelle
status: published
publishedAt: 2026-08-28T12:03:36+02:00
updatedAt: 2026-08-31T13:41:39+02:00
category: parentalite
readingTime: 4
topic:
  key: parentalite|france|petite-section-peut-on-alleger-les-apres-midis-a-l-ecole-maternelle|2026
  keywords:
    - petite section après-midi
    - aménagement assiduité maternelle
image:
  src: /images/articles/2026/08/petite-section-peut-on-alleger-les-apres-midis-a-l-ecole-maternelle.webp
  alt: Façade d'une école maternelle française
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/parentalite/(2026)/(08)/petite-section-peut-on-alleger-les-apres-midis-a-l-ecole-maternelle/index.md
  targetSha: d56aa2c5714ba315e5e7e679591d75785c0795db
  targetUrl: /articles/parentalite/petite-section-peut-on-alleger-les-apres-midis-a-l-ecole-maternelle/
  decision: Permettre aux parents de préparer et remettre une demande d'aménagement des après-midis en petite section avec le bon formulaire local ou un courrier signé, en sachant quels créneaux demander et quand l'aménagement peut commencer.
  affiliationPotential: "Aucune affiliation naturelle : démarche scolaire gratuite, sans achat ni réservation."
  gsc:
    retrievedAt: 2026-11-02T02:27:57+01:00
    dataThrough: 2026-10-30
    signal: uncertain
    basis: Baisse d'impressions observée; causalité et classement non établis.
    peakStart: 2026-10-08
    peakEnd: 2026-10-14
    recentStart: 2026-10-24
    recentEnd: 2026-10-30
    peakImpressions: 109
    recentImpressions: 33
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0.909
    focusQueries:
      - amenagement ecole maternelle
      - formulaire aménagement temps scolaire petite section
      - aménagement temps scolaire
sources:
  - title: Code de l'éducation, article R131-1-1
    url: https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038882474
  - title: Ministère de l'Éducation nationale, décret du 2 août 2019
    url: https://www.education.gouv.fr/bo/19/Hebdo31/MENE1918999D.htm
  - title: "Éducation nationale, Ain : formulaire départemental 2026-2027"
    url: https://collectif-maternelle.edu01.ac-lyon.fr/2025/08/29/demande-damenagement-du-temps-de-presence-pour-un-eleve-de-ps/
  - title: "Éducation nationale, Savoie : fiche repère et formulaire 2026"
    url: https://savoie-educ.web.ac-grenoble.fr/menu-maternelle/amenagement-du-temps-ps-fiche-repere
---

Votre enfant est en petite section et les journées complètes le fatiguent ? Vous pouvez demander qu'il ne fréquente pas l'école pendant certaines heures de classe de l'après-midi. Mais **cet aménagement n'est pas une absence que les parents peuvent décider seuls** : il faut déposer une demande écrite auprès de la direction de l'école.

Le [Code de l'éducation, article R131-1-1](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038882474), prévoit cette possibilité uniquement en **petite section de maternelle** et uniquement pour **les heures de classe de l'après-midi**. Les matinées restent soumises à l'obligation d'assiduité.

## Où trouver le formulaire de demande ?

Commencez par demander au directeur ou à la directrice de l'école **le formulaire applicable à votre établissement**. Certaines directions académiques ou départementales proposent leur propre document ; il n'existe pas de formulaire unique à utiliser partout en France.

Par exemple, l'[Ain publie un formulaire pour l'année scolaire 2026-2027](https://collectif-maternelle.edu01.ac-lyon.fr/2025/08/29/demande-damenagement-du-temps-de-presence-pour-un-eleve-de-ps/), tandis que la [Savoie propose une fiche repère et un modèle actualisé en mars 2026](https://savoie-educ.web.ac-grenoble.fr/menu-maternelle/amenagement-du-temps-ps-fiche-repere). **Ces documents illustrent des procédures locales : ne les utilisez pas pour une école d'un autre département sans confirmation de sa direction.**

Si l'école n'impose pas de formulaire particulier, vous pouvez préparer une demande écrite et signée. Le texte national exige l'écrit et la signature, pas un modèle national précis.

## Modèle de courrier à adapter

Voici un **exemple non officiel**, à remplacer par le formulaire local lorsqu'il est demandé :

> À l'attention de la direction de l'école [nom de l'école]
>
> Nous, [nom et prénom du ou des responsables], responsables de [prénom et nom de l'enfant], scolarisé(e) en petite section, demandons un aménagement de son assiduité sur les heures de classe de l'après-midi.
>
> Nous souhaiterions [préciser les jours concernés et les horaires d'absence ou de retour souhaités], à compter du [date souhaitée], en raison de [besoin de rythme ou de repos de l'enfant].
>
> Nous restons disponibles pour convenir de modalités compatibles avec les horaires et l'organisation de l'école.
>
> Fait à [lieu], le [date]. Signature du ou des responsables : [signature].

La date souhaitée ne vaut pas autorisation de commencer : la mise en œuvre dépend de la procédure décrite plus bas.

## Quels après-midis peut-on demander ?

Vous pouvez exposer un besoin pour **certains après-midis de la semaine**, pour **tous les après-midis**, ou demander un **retour en classe après une sieste à domicile**. Ce sont des possibilités à discuter, pas des horaires garantis.

La direction doit tenir compte des heures d'entrée et de sortie, du fonctionnement de l'école et de son règlement intérieur. Renseignez-vous notamment sur l'existence d'un accueil en cours d'après-midi : un retour après la sieste n'est pas forcément possible à n'importe quelle heure.

Certaines administrations locales prévoient aussi des limites par période scolaire. Ces consignes ne doivent pas être prises pour une durée maximale valable dans toute la France.

## À qui remettre la demande et quels sont les délais ?

Remettez le document **écrit et signé à la direction**, plutôt que de vous limiter à un accord oral avec l'enseignant. Le directeur ou la directrice dialogue avec l'équipe éducative, donne son avis, puis transmet la demande et cet avis à l'inspecteur de l'Éducation nationale (IEN) de la circonscription **dans un délai maximal de deux jours ouvrés**.

La suite dépend de cet avis :

- **Si l'avis de la direction est favorable**, l'aménagement demandé peut s'appliquer **à titre provisoire**, dans l'attente de la décision de l'IEN.
- **Si l'avis est défavorable**, ne considérez pas l'aménagement comme autorisé provisoirement ; attendez la décision et les modalités communiquées par l'école.
- **Si l'IEN ne répond pas dans les quinze jours suivant la transmission par la direction**, son silence vaut acceptation. Le délai ne commence donc pas nécessairement le jour où vous remettez le courrier.

La direction communique ensuite par écrit les modalités de l'aménagement décidé. Ces règles figurent dans le [décret publié au Bulletin officiel de l'Éducation nationale](https://www.education.gouv.fr/bo/19/Hebdo31/MENE1918999D.htm).

## Peut-on modifier l'accord en cours d'année ?

Oui. Si votre enfant s'habitue progressivement au rythme scolaire, ou si ses besoins changent, vous pouvez demander de nouvelles modalités **en cours d'année**. La modification suit la même procédure écrite, avec avis de la direction et décision de l'IEN.

Avant de déposer la demande initiale ou de la modifier, échangez avec l'enseignant sur la fatigue de l'enfant et les horaires réels de la classe. L'objectif est de proposer un rythme applicable, tout en gardant à l'esprit que **l'assiduité reste obligatoire sur tous les créneaux qui ne sont pas couverts par l'aménagement accepté**.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/parentalite/(2026)/(08)/petite-section-peut-on-alleger-les-apres-midis-a-l-ecole-maternelle/index.md

---
title: "Petite section: peut-on alléger les après-midis à l'école maternelle?"
subtitle: L'assiduité est obligatoire dès 3 ans, mais un aménagement est possible en petite section sur les heures de classe de l'après-midi
summary: En petite section, les parents peuvent demander un aménagement des après-midis. Voici ce qui est possible, la procédure et les délais à connaître.
slug: petite-section-peut-on-alleger-les-apres-midis-a-l-ecole-maternelle
status: published
publishedAt: 2026-08-28T12:03:36+02:00
updatedAt: 2026-08-31T13:41:39+02:00
category: parentalite
readingTime: 4
topic:
  key: parentalite|france|petite-section-peut-on-alleger-les-apres-midis-a-l-ecole-maternelle|2026
  keywords:
    - petite section après-midi
    - aménagement assiduité maternelle
image:
  src: "/images/articles/2026/08/petite-section-peut-on-alleger-les-apres-midis-a-l-ecole-maternelle.webp"
  alt: "Façade d'une école maternelle française"
---

Depuis que l'instruction est obligatoire à partir de 3 ans, un enfant inscrit en maternelle doit en principe être présent pendant les horaires de classe. Il existe toutefois une exception utile à connaître pour la petite section: les responsables de l'enfant peuvent demander un aménagement de l'assiduité, uniquement sur les heures de classe prévues l'après-midi.

Cette possibilité ne signifie pas que chaque famille peut décider seule de garder son enfant à la maison certains après-midis. Une demande formelle est nécessaire et l'aménagement doit tenir compte du fonctionnement de l'école.

## Qui peut demander un aménagement?

Le dispositif concerne les enfants scolarisés en petite section d'école maternelle. Il peut être demandé par les personnes responsables de l'enfant.

La règle est précise: l'aménagement ne peut porter que sur les heures de classe de l'après-midi. Il ne permet donc pas de supprimer librement des matinées de classe ou de choisir un emploi du temps entièrement personnalisé.

Le [Code de l'éducation précise les modalités de cet aménagement](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038882474/2026-05-10).

## Comment faire la demande?

La demande doit être écrite et signée, puis remise au directeur ou à la directrice de l'école.

Le directeur échange avec l'équipe éducative avant de donner son avis. Il transmet ensuite la demande, accompagnée de cet avis, à l'inspecteur de l'Éducation nationale de la circonscription dans un délai maximal de deux jours ouvrés.

Il est donc préférable de ne pas se contenter d'un accord oral avec l'enseignant. Si vous pensez que votre enfant a besoin d'un rythme allégé l'après-midi, adressez directement la demande à la direction de l'école afin que la procédure officielle soit engagée.

## Peut-on appliquer l'aménagement immédiatement?

Cela dépend de l'avis de la direction.

Lorsque l'avis du directeur est favorable, l'aménagement demandé peut être appliqué provisoirement en attendant la décision de l'inspecteur.

L'inspecteur dispose ensuite de quinze jours à compter de la transmission de la demande. S'il ne répond pas dans ce délai, son silence vaut acceptation.

Si l'aménagement est accepté, ses modalités sont communiquées par écrit aux responsables de l'enfant par la direction de l'école.

## Peut-on choisir n'importe quels après-midis?

Pas nécessairement. L'organisation retenue doit tenir compte des horaires d'entrée et de sortie des classes, du fonctionnement général de l'école et de son règlement intérieur.

Cela signifie qu'une famille peut formuler un besoin, mais que les modalités concrètes doivent rester compatibles avec l'organisation de l'établissement.

Avant de rédiger votre demande, vérifiez donc les horaires exacts de l'école et demandez à la direction comment sont organisés les retours en classe après la pause méridienne. Cela évite de proposer un rythme impossible à appliquer localement.

## Peut-on modifier l'aménagement en cours d'année?

Oui. Les responsables peuvent demander une modification en cours d'année scolaire.

La nouvelle demande suit alors la même procédure que la demande initiale: demande écrite, avis de la direction, transmission à l'inspecteur et décision selon les mêmes modalités.

C'est utile si le rythme de l'enfant évolue après quelques semaines de classe. Un aménagement décidé en septembre n'est donc pas forcément figé pour toute l'année.

## L'assiduité reste obligatoire en dehors de l'aménagement

Pour un enfant scolarisé en petite section, l'aménagement prévu par le Code de l'éducation ne concerne que les heures de classe de l'après-midi. En dehors des créneaux autorisés par cet aménagement, l'obligation d'assiduité continue donc de s'appliquer.

L'instruction est obligatoire dès 3 ans. Le ministère de l'Éducation nationale rappelle par ailleurs que l'école maternelle accueille tous les enfants à partir de 3 ans et détaille les démarches d'inscription sur sa page consacrée à [l'inscription à l'école maternelle](https://www.education.gouv.fr/l-inscription-l-ecole-maternelle-8651).

## Que faire si votre enfant fatigue beaucoup en début d'année?

Commencez par en parler avec l'enseignant et la direction afin de distinguer une fatigue normale liée aux premières semaines d'école d'un besoin d'organisation plus durable.

Si un aménagement des après-midis semble pertinent, formulez ensuite la demande par écrit. Indiquez clairement le rythme souhaité, tout en laissant à l'école la possibilité de l'adapter à ses horaires et à son fonctionnement.

Pour un parent qui prépare une première rentrée, l'essentiel est de ne pas confondre souplesse et absence libre: en petite section, un allègement de l'après-midi est bien prévu par les textes, mais il passe par une demande officielle et une validation administrative.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/vie-pratique/demenagement-comment-changer-d-ecole-maternelle-ou-elementaire-sans-rater-une-etape/ | Déménagement: comment changer d'école maternelle ou élémentaire sans rater une étape | vie-pratique
- /articles/voyages/marches-de-noel-de-colmar-avec-des-enfants-en-2026-1-ou-2-jours-et-ou-dormir/ | Marchés de Noël de Colmar avec des enfants en 2026: 1 ou 2 jours et où dormir | voyages | Colmar, Haut-Rhin, Grand Est
- /articles/bons-plans/majoration-allocations-familiales-18-ans-2026/ | Majoration des allocations familiales en 2026: pourquoi certaines familles devront attendre 18 ans | bons-plans
- /articles/vie-pratique/faire-garder-son-enfant-dans-l-aisne-creche-assistante-maternelle-mam-et-aides/ | Faire garder son enfant dans l’Aisne: crèche, assistante maternelle, MAM et aides | vie-pratique | Aisne, Hauts-de-France
- /articles/evenements/fete-cloture-ete-saint-andre-2026-famille/ | Fête de clôture de l’été 2026 à Saint-André-les-Vergers: une après-midi gratuite en famille | evenements | Saint-André-les-Vergers, Aube, Grand Est
- /articles/parentalite/mode-de-garde-a-vannes-quand-contacter-le-relais-petite-enfance/ | Mode de garde à Vannes: quand contacter le Relais Petite Enfance ? | parentalite | Vannes, Morbihan, Bretagne
- /articles/activites/lac-dziani-en-famille-une-balade-autour-d-un-cratere-a-mayotte/ | Lac Dziani en famille: une balade autour d’un cratère à Mayotte | activites | Dzaoudzi-Labattoir, Mayotte, Mayotte
- /articles/maison/composteur-gratuit-a-angers-loire-metropole-qui-peut-le-demander/ | Composteur gratuit à Angers Loire Métropole: qui peut le demander? | maison | Angers, Maine-et-Loire, Pays de la Loire
- /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | Ludothèques du Grand Nancy: où jouer en famille et emprunter des jeux | parentalite | Meurthe-et-Moselle, Grand Est
- /articles/parentalite/laep-dans-l-herault-jouer-avec-son-enfant-et-rencontrer-d-autres-parents/ | LAEP dans l'Hérault: jouer avec son enfant et rencontrer d'autres parents | parentalite | Hérault, Occitanie
- /articles/parentalite/a-sainte-rose-decouvrir-la-mangrove-avec-son-enfant-en-pedalo/ | À Sainte-Rose, découvrir la mangrove avec son enfant en pédalo | parentalite | Sainte-Rose, Guadeloupe, Guadeloupe
- /articles/parentalite/a-manosque-ou-sortir-avec-un-bebe-ou-un-tout-petit/ | À Manosque, où sortir avec un bébé ou un tout-petit ? | parentalite | Manosque, Alpes-de-Haute-Provence, Provence-Alpes-Côte d’Azur
- /articles/parentalite/cote-parents-52-une-ecoute-gratuite-pour-les-parents-en-haute-marne/ | Côté Parents 52: une écoute gratuite pour les parents en Haute-Marne | parentalite | Saint-Dizier, Haute-Marne, Grand Est
- /articles/parentalite/ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille/ | Ludothèque du Choletais: jouer sur place et emprunter en famille | parentalite | Cholet, Maine-et-Loire, Pays de la Loire
- /articles/parentalite/espace-mendes-france-a-poitiers-en-famille-que-faire-selon-l-age/ | Espace Mendès France à Poitiers en famille: que faire selon l’âge ? | parentalite | Poitiers, Vienne, Nouvelle-Aquitaine
- /articles/parentalite/laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit/ | LAEP autour d'Annecy: trois lieux pour jouer avec son tout-petit | parentalite | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/parentalite/zoo-refuge-de-guyane-a-macouria-preparer-une-visite-en-famille/ | Zoo-refuge de Guyane à Macouria: préparer une visite en famille | parentalite | Macouria, Guyane, Guyane
- /articles/parentalite/laep-a-rennes-ou-jouer-gratuitement-avec-son-enfant/ | LAEP à Rennes: où jouer gratuitement avec son enfant? | parentalite | Rennes, Ille-et-Vilaine, Bretagne
- /articles/parentalite/maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles/ | Maison des Parents aux Pennes-Mirabeau: ateliers gratuits et accueil des familles | parentalite | Les Pennes-Mirabeau, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/parentalite/laep-a-bastia-et-en-balagne-deux-lieux-gratuits-pour-les-tout-petits/ | LAEP à Bastia et en Balagne: deux lieux gratuits pour les tout-petits | parentalite | Bastia, Haute-Corse, Corse
- /articles/parentalite/kaz-1000-jours-au-port-ateliers-gratuits-pour-les-futurs-et-jeunes-parents/ | Kaz’1000 jours au Port: ateliers gratuits pour les futurs et jeunes parents | parentalite | Le Port, La Réunion, La Réunion
- /articles/parentalite/laep-dans-le-cantal-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP dans le Cantal: où aller avec un enfant de moins de 6 ans | parentalite | Aurillac, Cantal, Auvergne-Rhône-Alpes

### Historique Radar lié

- Aucun historique lié.

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
