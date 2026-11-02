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
  src: /images/articles/2026/08/petite-section-peut-on-alleger-les-apres-midis-a-l-ecole-maternelle.webp
  alt: Façade d'une école maternelle française
radar:
  schemaVersion: 1
  phase: 1
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
---

## Mission retenue
Actualiser le guide national sur l'aménagement des après-midis en petite section, sans en faire un guide propre à un département.

## Pourquoi cette mission
Les recherches portent notamment sur le formulaire de demande, mais l'article explique la procédure sans aider à trouver ni remplir le document. Le droit national est toujours en vigueur et des académies diffusent des formulaires locaux actualisés pour 2026-2027. Ce manque concret justifie le refresh malgré un signal GSC incertain. À l'inverse, le guide Lumigny déjà vérifié couvre les tarifs et horaires officiels ; une expansion depuis le guide fort des transports parisiens risquerait de redoubler les pages Navigo, poussette et aéroports ; les Gastronomades 2026 font déjà l'objet d'une mission Radar récente.

## Décision du lecteur
Savoir si son enfant peut manquer certains après-midis, quel document demander à son école, comment préciser les jours ou le retour après la sieste, et à partir de quand appliquer l'accord.

## Faits à traiter
- Conserver les règles exactes de l'article R131-1-1 : petite section uniquement, heures de classe de l'après-midi seulement, demande écrite et signée au directeur, transmission sous deux jours ouvrés, application provisoire seulement si avis favorable du directeur, silence de l'IEN pendant quinze jours valant acceptation, possibilité de modification en cours d'année.
- Expliquer qu'il existe des formulaires départementaux ou académiques : demander en priorité à la direction le formulaire applicable à l'école, plutôt que présenter le formulaire d'un autre département comme national.
- Donner un exemple court de demande écrite adaptable (identité de l'enfant et des responsables, école, jours et créneaux d'après-midi demandés, date, signature), clairement présenté comme modèle non officiel et à remplacer par le formulaire local lorsqu'il est requis.
- Illustrer les possibilités sans les garantir : certains après-midis, tous les après-midis, ou retour après sieste selon les horaires et l'organisation de l'école. Ne pas généraliser les limites de durée locales à toute la France.
- Préserver l'explication existante sur l'assiduité, les délais, le rôle du directeur et de l'IEN, les modifications en cours d'année et l'échange avec l'enseignant.

## Sources de départ
- Légifrance, Code de l'éducation, article R131-1-1 : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038882474
- Éducation nationale, Bulletin officiel du 29 août 2019 : https://www.education.gouv.fr/bo/19/Hebdo31/MENE1918999D.htm
- Académie de Lyon, Ain, formulaire départemental 2026-2027 : https://collectif-maternelle.edu01.ac-lyon.fr/2025/08/29/demande-damenagement-du-temps-de-presence-pour-un-eleve-de-ps/
- Académie de Grenoble, Savoie, fiche et modèle 2026 : https://savoie-educ.web.ac-grenoble.fr/menu-maternelle/amenagement-du-temps-ps-fiche-repere

## Affiliation
Aucune : il s'agit d'une demande administrative scolaire.

## Continuations internes
- Ne pas transformer les formulaires propres à l'Ain ou à la Savoie en règle nationale ; les citer comme exemples locaux.
- Ne pas développer un guide général de rentrée scolaire : rester centré sur le dépôt de la demande et ses effets.

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
- /articles/evenements/fete-cloture-ete-saint-andre-2026-famille/ | Fête de clôture de l’été 2026 à Saint-André-les-Vergers: une après-midi gratuite en famille | evenements | Saint-André-les-Vergers, Aube, Grand Est
- /articles/parentalite/entrer-en-maternelle-avant-3-ans-a-lille-comment-fonctionne-l-action-passerelle/ | Entrer en maternelle avant 3 ans à Lille: comment fonctionne l'action Passerelle | parentalite | Lille, Nord, Hauts-de-France
- /articles/bons-plans/nausicaa-a-8-pour-les-adultes-et-6-pour-les-enfants-qui-peut-profiter-des-dimanches-boulonnais/ | Nausicaá à 8 € pour les adultes et 6 € pour les enfants: qui peut profiter des Dimanches Boulonnais? | bons-plans | Boulogne-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/cuisine/apres-une-cueillette-en-eure-et-loir-5-recettes-faciles-a-faire-avec-les-enfants/ | Après une cueillette en Eure-et-Loir: 5 recettes faciles à faire avec les enfants | cuisine | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/parentalite/la-petite-maison-a-agen-un-lieu-gratuit-pour-les-parents-et-les-enfants-de-0-a-3-ans/ | La Petite Maison à Agen: un lieu gratuit pour les parents et les enfants de 0 à 3 ans | parentalite | Agen, Lot-et-Garonne, Nouvelle-Aquitaine
- /articles/vie-pratique/transport-scolaire-en-ardeche-peut-on-utiliser-scolaire-le-week-end-et-pendant-les-vacances/ | Transport scolaire en Ardèche: peut-on utiliser Scolaire+ le week-end et pendant les vacances? | vie-pratique | Privas, Ardèche, Auvergne-Rhône-Alpes
- /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | Foire de Dijon 2026 avec les enfants: gratuités, ateliers et Ferme Côte-d'Or | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
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

- opportunity | /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | 2026-10-21T16:31:41.000Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
