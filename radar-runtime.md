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
title: "ÉduConnect parents: activer son compte et retrouver tous ses enfants"
subtitle: SMS ou courriel, rattachement d'un enfant absent et accès aux démarches scolaires
summary: Comment activer ÉduConnect par SMS ou courriel, retrouver un enfant absent et accéder aux services scolaires avec un compte parent.
slug: educonnect-pour-les-parents-activer-son-compte-et-retrouver-les-demarches-scolaires
status: published
publishedAt: 2026-09-12T20:02:41+02:00
updatedAt: 2026-09-13T13:24:24+02:00
category: parentalite
readingTime: 4
topic:
  key: parentalite|france|educonnect-pour-les-parents-activer-son-compte-et-retrouver-les-demarches-scolaires|2026
  keywords:
    - EduConnect parents
    - Scolarité Services
image:
  src: /images/articles/2026/09/educonnect-pour-les-parents-activer-son-compte-et-retrouver-les-demarches-scolaires.webp
  alt: Enfants utilisant un ordinateur portable, illustration des services numériques liés à la scolarité
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/parentalite/(2026)/(09)/educonnect-pour-les-parents-activer-son-compte-et-retrouver-les-demarches-scolaires/index.md
  targetSha: 23219f53f3d3bbd07e3a9a08c51588e1ae790de5
  targetUrl: /articles/parentalite/educonnect-pour-les-parents-activer-son-compte-et-retrouver-les-demarches-scolaires/
  decision: Activer ou récupérer l'accès parent ÉduConnect avec la bonne méthode, puis rattacher un enfant absent sans créer de comptes inutiles.
  affiliationPotential: "Aucune affiliation naturelle: accès public gratuit, activation et assistance officielles."
  gsc:
    retrievedAt: 2026-10-15T06:53:46.851Z
    dataThrough: 2026-10-12
    signal: uncertain
    basis: Baisse non attribuable au classement; 0 requêtes comparables.
    peakStart: 2026-09-15
    peakEnd: 2026-09-21
    recentStart: 2026-10-06
    recentEnd: 2026-10-12
    peakImpressions: 209
    recentImpressions: 42
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - educonnect parents
      - est ce que educonnect fonctionne
      - educonnect espace parent
      - educonnect parent
      - il me manque un enfant sur educonnect
sources:
  - title: ÉduConnect - Activation du compte
    url: https://moncompte.educonnect.education.gouv.fr/educt-self-service/activation/nouveauParcoursUtilisateur
  - title: Éducation nationale - Assistance Scolarité Services
    url: https://assistanceteleservices.education.gouv.fr/
  - title: ÉduConnect - Identifiant oublié
    url: https://moncompte.educonnect.education.gouv.fr/educt-self-service/oubliLogin/recupererLoginResponsable
  - title: ÉduConnect - Mot de passe oublié
    url: https://moncompte.educonnect.education.gouv.fr/educt-self-service/oubliMdp/recupererMotDePasseResponsable
  - title: Ministère - Présentation ÉduConnect
    url: https://www.education.gouv.fr/educonnect-un-compte-unique-pour-suivre-et-accompagner-la-scolarite-de-mon-enfant-455196
---

<!-- article-image-credit -->
*Photo: [Wikipresence](https://commons.wikimedia.org/wiki/File:Kids_with_laptop.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

**ÉduConnect** permet aux parents d'accéder aux services scolaires de leurs enfants avec un compte unique, de l'école au lycée. Pour une première activation, le parcours actuel propose **SMS ou courriel**, si ces coordonnées ont déjà été communiquées à l'établissement. Le portail [Scolarité Services](https://teleservices.education.gouv.fr/) est accessible avec ÉduConnect ou FranceConnect.

## Première connexion: téléphone ou adresse mail?

Le [formulaire officiel d'activation](https://moncompte.educonnect.education.gouv.fr/educt-self-service/activation/nouveauParcoursUtilisateur) propose **«Par SMS»** et **«Par mail»**. Choisissez le contact enregistré dans le dossier scolaire, puis suivez les instructions affichées.

Si votre numéro ou votre adresse ne sont pas reconnus, demandez à l'établissement de vérifier vos coordonnées et votre qualité de représentant légal. Contrairement à une ancienne page générale du ministère qui présente le téléphone comme indispensable, le formulaire d'activation actuel propose explicitement les deux moyens. Une adresse non enregistrée auprès de l'établissement ne suffit toutefois pas.

## Un enfant manque dans votre compte: comment le rattacher?

Un parent n'a pas besoin d'un compte différent pour chaque enfant. L'[assistance officielle](https://assistanceteleservices.education.gouv.fr/) indique comment regrouper les enfants déjà associés à des comptes distincts:

1. Demandez à l'établissement de l'enfant absent les accès provisoires nécessaires au regroupement.
2. Connectez-vous à votre compte parent actif.
3. Ouvrez **«Mon Compte»**, puis **«Mes enfants»**.
4. Sélectionnez **«Ajouter des enfants depuis un autre compte»** et suivez les étapes.

Si la date de naissance d'un enfant est incorrecte, l'établissement doit rectifier son dossier. La prise en compte de la correction peut demander **24 à 48 heures**. Le même délai est indiqué pour certaines corrections de numéro de téléphone.

## Identifiant ou mot de passe oublié

Les pages officielles permettent de [retrouver son identifiant](https://moncompte.educonnect.education.gouv.fr/educt-self-service/oubliLogin/recupererLoginResponsable) ou de [réinitialiser son mot de passe](https://moncompte.educonnect.education.gouv.fr/educt-self-service/oubliMdp/recupererMotDePasseResponsable) par **SMS ou courriel**, avec les coordonnées déjà liées au compte. Si vous n'y avez plus accès, contactez l'école ou l'établissement.

## Scolarité Services, livret scolaire et ENT

Après connexion, la rubrique **«Mes services»** du portail Scolarité Services présente les démarches ouvertes pour l'enfant sélectionné: fiche de renseignements, livret scolaire, inscriptions, bourses et orientation selon l'établissement. Le portail est accessible **24 heures sur 24, 7 jours sur 7**, sur ordinateur, smartphone ou tablette.

L'affichage varie selon les établissements et les périodes. Si un service n'apparaît pas, vérifiez **l'enfant sélectionné**, puis les dates d'ouverture auprès de l'établissement. Une démarche clôturée peut ne plus être proposée.

**ÉduConnect** est le compte national d'authentification; **l'ENT** est l'espace numérique de travail de l'établissement ou de la collectivité. Selon le dispositif local, ÉduConnect permet aussi d'accéder à l'ENT sans autre compte parent. Utilisez le lien communiqué par l'établissement.

## Qui contacter en cas de blocage?

Pour corriger une information du dossier scolaire ou un rattachement, adressez-vous à l'établissement. Pour les difficultés de connexion et les démarches en ligne, l'Éducation nationale propose une [assistance Scolarité Services](https://assistanceteleservices.education.gouv.fr/) et le **0 809 54 06 06** (prix d'un appel local), annoncé du **lundi au vendredi de 8h à 20h** et le **samedi de 8h à 12h**, heures de métropole, pendant les périodes d'ouverture des démarches en ligne. Les modalités d'assistance peuvent aussi dépendre de l'académie.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/parentalite/(2026)/(09)/educonnect-pour-les-parents-activer-son-compte-et-retrouver-les-demarches-scolaires/index.md

---
title: "EduConnect pour les parents: activer son compte et retrouver les démarches scolaires"
subtitle: Un seul accès pour les enfants du foyer, l'ENT, le livret scolaire et les services proposés par l'établissement
summary: "Première connexion, enfant absent, numéro non reconnu: les étapes utiles pour accéder à EduConnect et Scolarité Services sans tourner en rond."
slug: educonnect-pour-les-parents-activer-son-compte-et-retrouver-les-demarches-scolaires
status: published
publishedAt: 2026-09-12T20:02:41+02:00
updatedAt: 2026-09-13T13:24:24+02:00
category: parentalite
readingTime: 4
topic:
  key: parentalite|france|educonnect-pour-les-parents-activer-son-compte-et-retrouver-les-demarches-scolaires|2026
  keywords:
    - EduConnect parents
    - Scolarité Services
image:
  src: "/images/articles/2026/09/educonnect-pour-les-parents-activer-son-compte-et-retrouver-les-demarches-scolaires.webp"
  alt: "Enfants utilisant un ordinateur portable, illustration des services numériques liés à la scolarité"
---
<!-- article-image-credit -->
*Photo: [Wikipresence](https://commons.wikimedia.org/wiki/File:Kids_with_laptop.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Entre l'ENT, le livret scolaire et les démarches administratives, les accès numériques de l'école peuvent vite devenir confus. Pour les familles concernées, EduConnect sert justement de compte unique: un même identifiant permet de retrouver les services associés à tous ses enfants, de l'école au lycée.

Le plus simple est de commencer par le portail officiel [Scolarité Services](https://teleservices.education.gouv.fr/). Les parents peuvent s'y connecter avec leur compte EduConnect ou avec FranceConnect.

## Faut-il créer un compte différent pour chaque enfant?

Non. Un représentant légal utilise un seul compte EduConnect pour l'ensemble de ses enfants rattachés à son dossier. Le ministère précise que ce compte suit la famille tout au long de la scolarité, de l'école au lycée.

Une fois connecté, il peut donner accès, selon l'établissement et la période, à plusieurs services:

- l'ENT de l'établissement;
- le livret scolaire;
- la fiche de renseignements;
- certaines inscriptions en ligne;
- les démarches de bourse;
- les démarches d'orientation;
- d'autres services activés par l'école, le collège ou le lycée.

Tous les établissements ne proposent donc pas exactement les mêmes écrans. Si une démarche attendue n'apparaît pas, cela ne signifie pas forcément que le compte fonctionne mal: certains services ne sont ouverts qu'à certaines périodes ou seulement lorsque l'établissement les a activés.

## Première connexion: le numéro de téléphone est le point à vérifier

Pour activer un compte EduConnect directement, le numéro de téléphone portable communiqué lors de l'inscription de l'enfant ou dans sa fiche de renseignements est indispensable.

Il faut donc utiliser le numéro déjà connu de l'établissement. Si ce numéro a changé, ou s'il n'est pas reconnu, mieux vaut éviter de multiplier les tentatives avec d'autres numéros: l'établissement peut vérifier et corriger les coordonnées enregistrées.

L'autre possibilité est de se connecter avec FranceConnect depuis [Scolarité Services](https://teleservices.education.gouv.fr/). Cela évite d'avoir à mémoriser un identifiant EduConnect supplémentaire lorsque le parent utilise déjà un compte compatible avec FranceConnect.

## Un enfant n'apparaît pas dans le compte: que faire?

Avant de créer un second compte, il faut vérifier le rattachement. Le compte EduConnect est justement prévu pour regrouper les enfants d'un même représentant légal.

Le ministère propose une [assistance dédiée aux démarches en ligne](https://assistanceteleservices.education.gouv.fr/) pour les principaux blocages. Elle traite notamment les cas où le numéro de téléphone n'est pas reconnu ou lorsqu'un enfant n'apparaît pas dans le compte.

Si la date de naissance de l'enfant est refusée, l'assistance indique de contacter l'établissement afin qu'il la rectifie dans son dossier. Après modification, la prise en compte peut demander 24 à 48 heures.

## Où retrouver les démarches scolaires une fois connecté?

Après connexion, le portail Scolarité Services regroupe les services disponibles pour chaque enfant. Le ministère indique que le portail est accessible 7 jours sur 7 et 24 heures sur 24, depuis un ordinateur, un smartphone ou une tablette.

La rubrique « Mes services » permet de voir ce qui est actuellement proposé. Au collège et au lycée, cela peut notamment concerner l'orientation, les inscriptions, les bourses ou la consultation du livret scolaire. À l'école élémentaire, l'offre est plus limitée.

Il faut garder en tête qu'une démarche peut disparaître une fois sa période terminée. Pour une inscription ou une orientation, le calendrier et les modalités restent ceux communiqués par l'établissement.

## EduConnect et ENT: ce n'est pas forcément deux comptes différents

EduConnect est le compte d'authentification national. L'ENT est l'espace numérique utilisé localement par l'établissement ou la collectivité. Selon l'organisation mise en place, EduConnect peut servir à ouvrir l'ENT sans créer un accès parent séparé.

Le bon réflexe est donc de suivre le lien fourni par l'école, le collège ou le lycée lorsqu'il renvoie vers l'ENT, puis de choisir l'accès EduConnect si celui-ci est proposé.

## En cas de blocage, qui contacter?

Pour un problème lié aux informations de l'enfant, au rattachement du dossier ou à une donnée erronée, l'établissement reste l'interlocuteur utile.

Pour un problème de connexion ou de démarche en ligne, l'Éducation nationale met aussi à disposition son [assistance Scolarité Services](https://assistanceteleservices.education.gouv.fr/). Une plateforme téléphonique nationale est annoncée au **0 809 54 06 06**, au prix d'un appel local, du lundi au vendredi de 8h à 20h et le samedi de 8h à 12h, horaires de métropole.

## Les vérifications à faire avant de conclure que le service ne fonctionne pas

Trois contrôles règlent une bonne partie des problèmes courants:

1. vérifier que le parent utilise bien son compte représentant légal et non celui de l'enfant;
2. vérifier que le numéro de téléphone correspond à celui enregistré par l'établissement;
3. regarder dans « Mes services » si la démarche recherchée est réellement ouverte à cette période.

Si l'enfant manque dans le compte ou qu'une information d'état civil est incorrecte, il vaut mieux faire corriger le dossier à la source plutôt que de recréer plusieurs comptes.

Pour retrouver les informations officielles sur le fonctionnement du compte, le ministère détaille [EduConnect pour les parents](https://www.education.gouv.fr/educonnect-un-compte-unique-pour-suivre-et-accompagner-la-scolarite-de-mon-enfant-455196) et [Scolarité Services](https://www.education.gouv.fr/scolarite-services-un-acces-unique-pour-toutes-les-demarches-scolaires-326158).

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/parentalite/la-maison-des-petits-pas-a-troyes-un-lieu-pour-souffler-avec-son-jeune-enfant/ | La Maison des Petits Pas à Troyes: un lieu pour souffler avec son jeune enfant | parentalite | Troyes, Aube, Grand Est
- /articles/vie-pratique/projet-accueil-individualise-enfant-ecole-pai/ | Projet d’accueil individualisé à l’école: comment préparer le PAI de son enfant | vie-pratique
- /articles/parentalite/cafe-papote-a-lyon-4e-ou-echanger-gratuitement-avec-d-autres-parents/ | Café Papote à Lyon 4e: où échanger gratuitement avec d'autres parents | parentalite | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-a-caen-4-lieux-pour-venir-avec-un-enfant-sans-inscription/ | LAEP à Caen: 4 lieux pour venir avec un enfant sans inscription | parentalite | Caen, Calvados, Normandie
- /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP à Nantes: où aller avec un enfant de moins de 6 ans? | parentalite | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/parentalite/laep-a-grenoble-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP à Grenoble: où aller avec un enfant de moins de 6 ans? | parentalite | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/parentalite/maisons-des-1000-jours-dans-l-herault-ou-trouver-un-accompagnement-gratuit/ | Maisons des 1000 jours dans l'Hérault: où trouver un accompagnement gratuit | parentalite | Montpellier, Hérault, Occitanie
- /articles/evenements/premiere-rentree-en-6e-a-dole-un-atelier-gratuit-pour-les-familles/ | Première rentrée en 6e à Dole: un atelier gratuit pour les familles | evenements | Dole, Jura, Bourgogne-Franche-Comté
- /articles/parentalite/laep-a-bastia-et-en-balagne-deux-lieux-gratuits-pour-les-tout-petits/ | LAEP à Bastia et en Balagne: deux lieux gratuits pour les tout-petits | parentalite | Bastia, Haute-Corse, Corse
- /articles/parentalite/kaz-1000-jours-au-port-ateliers-gratuits-pour-les-futurs-et-jeunes-parents/ | Kaz’1000 jours au Port: ateliers gratuits pour les futurs et jeunes parents | parentalite | Le Port, La Réunion, La Réunion
- /articles/parentalite/laep-dans-le-cantal-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP dans le Cantal: où aller avec un enfant de moins de 6 ans | parentalite | Aurillac, Cantal, Auvergne-Rhône-Alpes
- /articles/parentalite/cercles-de-parents-en-cote-d-or-trois-seances-gratuites-pour-echanger-pendant-les-premieres-annees/ | Cercles de Parents en Côte-d'Or: trois séances gratuites pour échanger pendant les premières années | parentalite | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/parentalite/laep-en-seine-et-marne-ou-aller-et-comment-se-passe-une-premiere-visite/ | LAEP en Seine-et-Marne: où aller et comment se passe une première visite? | parentalite | Meaux, Seine-et-Marne, Île-de-France
- /articles/parentalite/montchavin-les-coches-avec-un-bebe-garderie-horaires-et-sejour-d-hiver/ | Montchavin-Les Coches avec un bébé: garderie, horaires et séjour d'hiver | parentalite | Montchavin-Les Coches, Savoie, Auvergne-Rhône-Alpes
- /articles/parentalite/maison-des-parents-a-guingamp-quand-y-aller-et-quel-service-choisir/ | Maison des Parents à Guingamp: quand y aller et quel service choisir ? | parentalite | Guingamp, Côtes-d'Armor, Bretagne
- /articles/parentalite/chateau-de-chamerolles-en-famille-visite-libre-ou-guidee-en-2026/ | Château de Chamerolles en famille: visite libre ou guidée en 2026 ? | parentalite | Chilleurs-aux-Bois, Loiret, Centre-Val de Loire
- /articles/parentalite/visiter-le-chateau-de-versailles-avec-un-bebe-poussette-billets-et-parcours/ | Visiter le château de Versailles avec un bébé: poussette, billets et parcours | parentalite | Versailles, Yvelines, Île-de-France
- /articles/parentalite/creche-a-clermont-ferrand-quand-deposer-la-pre-inscription-et-comment-la-faire/ | Crèche à Clermont-Ferrand: quand déposer la pré-inscription et comment la faire | parentalite | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/parentalite/educonnect-pour-les-parents-activer-son-compte-et-retrouver-les-demarches-scolaires/ | EduConnect pour les parents: activer son compte et retrouver les démarches scolaires | parentalite
- /articles/parentalite/ateliers-parents-malins-dans-l-oise-quels-rendez-vous-gratuits-choisir-avant-fin-2026/ | Ateliers Parents Malins dans l'Oise: quels rendez-vous gratuits choisir avant fin 2026 ? | parentalite | Plusieurs communes, Oise, Hauts-de-France
- /articles/parentalite/aide-a-domicile-caf-en-guyane-qui-peut-la-demander-et-combien-reste-t-il-a-payer/ | Aide à domicile Caf en Guyane: qui peut la demander et combien reste-t-il à payer? | parentalite | Cayenne, Guyane, Guyane
- /articles/parentalite/maison-des-1-000-premiers-jours-a-grasse-peut-on-venir-sans-rendez-vous/ | Maison des 1 000 premiers jours à Grasse: peut-on venir sans rendez-vous? | parentalite | Grasse, Alpes-Maritimes, Provence-Alpes-Côte d’Azur

### Historique Radar lié

- Aucun historique lié.

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
