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
title: "Ludothèques autour de Dinan: emprunter des jeux pour la maison"
subtitle: Tarifs, durées de prêt et créneaux à Plancoët, Plouër-sur-Rance et Lanvallay
summary: Où jouer et emprunter près de Dinan? Adresses vérifiées, formules familiales, durées de prêt et permanences des trois ludothèques.
slug: ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison
status: published
publishedAt: 2026-10-30T11:31:33+01:00
updatedAt: null
category: vie-pratique
readingTime: 4
publicationOrigin: region
location:
  city: ""
  department: Côtes-d'Armor
  region: Bretagne
topic:
  key: vie-pratique|cotes-d-armor|ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison|2026
  keywords:
    - ludothèques Dinan
    - emprunt de jeux
    - ludothèque Plancoët
    - ludothèque Plouër-sur-Rance
    - ludothèque Lanvallay
image:
  src: /images/articles/2026/10/ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison.webp
  alt: Vue de Dinan et de ses maisons au bord de la Rance, illustration géographique de la région des ludothèques
sources:
  - title: "Dinan Agglomération: ludothèque de Plancoët"
    url: https://www.dinan-agglomeration.fr/activites-et-loisirs/culture-et-pratiques-artistiques/culture/ludotheque/
  - title: "Dinan Agglomération: adresse officielle de la ludothèque de Plancoët"
    url: https://www.dinan-agglomeration.fr/annuaire/ludotheque-plancoet/
  - title: Catalogue et horaires de la ludothèque de Plancoët
    url: https://www.dyade-fr.com/WD150AWP/WD150Awp.exe/CONNECT/e-Kawa-Ludotheque?Ludotheque=PLANCOET
  - title: "Mairie de Plouër-sur-Rance: la ludothèque"
    url: https://www.plouer-sur-rance.fr/la-ludotheque/
  - title: "Ludothèque plouëraise: présentation, horaires et tarifs de l’association"
    url: https://assoludoplouer.wixsite.com/my-site/about-1
  - title: "Ludothèque plouëraise: coordonnées"
    url: https://assoludoplouer.wixsite.com/my-site/contact-3
  - title: "Mairie de Lanvallay: bibliothèque et ludothèque"
    url: https://www.lanvallay.fr/mes-loisirs/bibliotheque/
  - title: "Mairie de Lanvallay: permanence du 14 novembre 2026"
    url: https://www.lanvallay.fr/agenda/ludotheque-4/
  - title: "Mairie de Lanvallay: agenda des permanences"
    url: https://www.lanvallay.fr/mes-loisirs/agenda/
  - title: "Au Bois des Ludes: documentation du catalogue"
    url: https://catalogue.auboisdesludes.com/documentation/
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/vie-pratique/(2026)/(10)/ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison/index.md
  targetSha: 4abd25f829d151cec312a5d82cb9d3c71dd5419c
  targetUrl: /articles/vie-pratique/ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison/
  decision: Permettre aux familles de se rendre à la bonne adresse à Plancoët et de choisir une ludothèque selon le coût réel du prêt et les prochaines permanences.
  affiliationPotential: "Aucune affiliation naturelle: les prêts associatifs et publics sont le service principal."
  gsc:
    retrievedAt: 2026-11-11T02:29:19+01:00
    dataThrough: 2026-11-08
    signal: needs_query_check
    basis: "Visibilité récente : 22 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-31
    peakEnd: 2026-11-02
    recentStart: 2026-11-06
    recentEnd: 2026-11-08
    peakImpressions: 22
    recentImpressions: 0
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - ludothèques Dinan
      - emprunt de jeux
      - ludothèque Plancoët
      - ludothèque Plouër-sur-Rance
      - ludothèque Lanvallay
reviewAt: 2026-11-15
---

Emprunter un jeu permet de le découvrir en famille, d’y rejouer quelques semaines, puis de changer sans encombrer les placards. Autour de Dinan, dans les Côtes-d’Armor, les ludothèques de Plancoët et de Plouër-sur-Rance ainsi que les permanences de Lanvallay proposent ce service, avec la possibilité de jouer sur place.

Leurs formules diffèrent: Plancoët comprend les prêts dans un forfait annuel, tandis que Plouër-sur-Rance et Lanvallay facturent chaque jeu en plus de l’adhésion. Les durées d’emprunt vont de deux à quatre semaines, un point à regarder selon vos possibilités de retour.

## Plancoët: jusqu’à trois jeux pour trois semaines

À la [ludothèque de Dinan Agglomération](https://www.dinan-agglomeration.fr/activites-et-loisirs/culture-et-pratiques-artistiques/culture/ludotheque/), le jeu sur place est **gratuit et ouvert à tous**. Vous pouvez découvrir les espaces et tester des jeux avant de décider d’emprunter.

L’adhésion familiale coûte **35 € pour un an, de date à date**. Elle permet d’emporter jusqu’à **trois jeux pour trois semaines**. Le fonds compte plus de mille jeux et jouets, de l’imitation et de la construction aux jeux de règles.

La ludothèque se trouve au **34 rue de la Madeleine, 22130 Plancoët**, selon sa [fiche officielle dans l’annuaire de Dinan Agglomération](https://www.dinan-agglomeration.fr/annuaire/ludotheque-plancoet/). Attention à ne pas confondre avec le numéro 33, également utilisé par d’autres services intercommunaux. En période scolaire, les ouvertures annoncées sont les suivantes:

- Mardi de 16 h 30 à 18 h.
- Mercredi de 10 h à 12 h 30 et de 15 h à 18 h.
- Vendredi de 16 h 30 à 18 h 30.
- Un samedi sur deux de 10 h à 12 h 30.

Le [catalogue de Plancoët](https://www.dyade-fr.com/WD150AWP/WD150Awp.exe/CONNECT/e-Kawa-Ludotheque?Ludotheque=PLANCOET) publie aussi les horaires des vacances scolaires et permet de consulter les disponibilités ou de demander une réservation. Vérifiez les informations avant le déplacement, particulièrement le samedi.

## Plouër-sur-Rance: des matinées pour les tout-petits

La ludothèque plouëraise accueille notamment les plus jeunes sur des créneaux « ludo pitchounes », présentés sur la [page municipale](https://www.plouer-sur-rance.fr/la-ludotheque/). **Les enfants de moins de huit ans doivent être accompagnés.**

Pour le budget, [l’association annonce une première visite gratuite](https://assoludoplouer.wixsite.com/my-site/about-1), puis une adhésion familiale de **32 € pour 365 jours**, ou un passage sans adhésion à **2 € par personne**. La mairie affiche encore une adhésion à 30 €: faites confirmer le montant lors de l’inscription. Pour emprunter, comptez **1 € par jeu pour deux semaines**, en plus de l’adhésion.

En période scolaire, l’association publie ces horaires:

- Du mardi au vendredi de 10 h à 11 h 45.
- Le mercredi également de 15 h à 18 h.
- Le samedi de 10 h 30 à 12 h.

Les heures de fin de matinée diffèrent sur la page municipale et la page de contact de l’association, qui indiquent 11 h 30 les mardis, jeudis et vendredis, et 12 h le mercredi. Confirmez votre créneau, ainsi que les ouvertures pendant les vacances.

La ludothèque se situe au **9 rue du Four à Chaux**. Vous pouvez joindre l’équipe au **02 96 86 88 94**, indiqué sur sa [page de contact](https://assoludoplouer.wixsite.com/my-site/contact-3).

## Lanvallay: quatre semaines de prêt lors des permanences

À Lanvallay, Au Bois des Ludes intervient **deux fois par mois à la bibliothèque**. Le jeu sur place est gratuit pendant ces rendez-vous. L’adhésion familiale coûte **20 € par an**, auxquels s’ajoute **1 € par jeu emprunté pour quatre semaines**, selon la [présentation municipale](https://www.lanvallay.fr/mes-loisirs/bibliotheque/).

Cette durée laisse davantage de temps entre deux emprunts, mais les visites doivent tenir compte des permanences. L’ouverture de la bibliothèque ne signifie pas que la ludothèque est présente.

La prochaine permanence annoncée est le **samedi 14 novembre 2026 de 10 h 30 à 12 h**, à la bibliothèque du **9 rue de Saint James**. Cette date est un rendez-vous ponctuel, pas un horaire hebdomadaire: consultez la [fiche de la permanence](https://www.lanvallay.fr/agenda/ludotheque-4/) puis [l’agenda de Lanvallay](https://www.lanvallay.fr/mes-loisirs/agenda/) pour les séances suivantes.

**La carte gratuite de la bibliothèque et du réseau Lirici ne remplace pas l’adhésion nécessaire pour emprunter les jeux.**

Le catalogue d’Au Bois des Ludes permet aux adhérents de consulter les collections et de réserver des jeux. Pour y accéder, le compte doit être créé par l’équipe, comme l’explique la [documentation du catalogue](https://catalogue.auboisdesludes.com/documentation/). Demandez sa mise en place lors de votre adhésion.

## Choisir le premier jeu à emporter

Indiquez à l’équipe l’âge des enfants, le nombre de joueurs habituel et le temps dont vous disposez pour une partie. Avec une fratrie, essayez quelques tours sur place: cela permet de voir si le plus jeune peut participer, suivre les règles et attendre son tour.

Pour explorer différents types de jeux avec des enfants de 6 à 8 ans, notre [comparatif de Bandido, Chabyrinthe et Kameleo](https://www.fam-space.fr/cadeaux/guides/bandido-chabyrinthe-ou-kameleo-quel-jeu-de-logique-choisir-de-6-a-8-ans/) distingue coopération, compétition et défis en solo. La présence de ces titres dans la ludothèque choisie reste à vérifier.

Avant de repartir, faites préciser la date de retour et les consignes si une pièce manque ou se casse. Si vous avez réservé une référence, attendez la confirmation de sa mise à disposition avant de vous déplacer spécialement.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/vie-pratique/(2026)/(10)/ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison/index.md

---
title: "Ludothèques autour de Dinan: emprunter des jeux pour la maison"
subtitle: Tarifs, durées de prêt et créneaux à Plancoët, Plouër-sur-Rance et Lanvallay
summary: "Trois services autour de Dinan pour renouveler les jeux à la maison: comparez les adhésions, les durées de prêt et les possibilités de visite."
slug: ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison
status: published
publishedAt: 2026-10-30T11:31:33+01:00
updatedAt: null
category: vie-pratique
readingTime: 4
publicationOrigin: region
location:
  city: ""
  department: Côtes-d'Armor
  region: Bretagne
topic:
  key: vie-pratique|cotes-d-armor|ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison|2026
  keywords:
    - ludothèques Dinan
    - emprunt de jeux
    - ludothèque Plancoët
    - ludothèque Plouër-sur-Rance
    - ludothèque Lanvallay
image:
  src: "/images/articles/2026/10/ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison.webp"
  alt: "Vue de Dinan et de ses maisons au bord de la Rance, illustration géographique de la région des ludothèques"
sources:
  - title: "Dinan Agglomération: ludothèque de Plancoët"
    url: https://www.dinan-agglomeration.fr/activites-et-loisirs/culture-et-pratiques-artistiques/culture/ludotheque/
  - title: Catalogue et horaires de la ludothèque de Plancoët
    url: https://www.dyade-fr.com/WD150AWP/WD150Awp.exe/CONNECT/e-Kawa-Ludotheque?Ludotheque=PLANCOET
  - title: "Mairie de Plouër-sur-Rance: la ludothèque"
    url: https://www.plouer-sur-rance.fr/la-ludotheque/
  - title: "Ludothèque plouëraise: présentation, horaires et tarifs de l’association"
    url: https://assoludoplouer.wixsite.com/my-site/about-1
  - title: "Ludothèque plouëraise: coordonnées"
    url: https://assoludoplouer.wixsite.com/my-site/contact-3
  - title: "Mairie de Lanvallay: bibliothèque et ludothèque"
    url: https://www.lanvallay.fr/mes-loisirs/bibliotheque/
  - title: "Mairie de Lanvallay: agenda des permanences"
    url: https://www.lanvallay.fr/mes-loisirs/agenda/
  - title: "Au Bois des Ludes: documentation du catalogue"
    url: https://catalogue.auboisdesludes.com/documentation/
---

Emprunter un jeu permet de le découvrir en famille, d’y rejouer quelques semaines, puis de changer sans encombrer les placards. Autour de Dinan, dans les Côtes-d’Armor, les ludothèques de Plancoët et de Plouër-sur-Rance ainsi que les permanences de Lanvallay proposent ce service, avec la possibilité de jouer sur place.

Leurs formules diffèrent: Plancoët comprend les prêts dans un forfait annuel, tandis que Plouër-sur-Rance et Lanvallay facturent chaque jeu en plus de l’adhésion. Les durées d’emprunt vont de deux à quatre semaines, un point à regarder selon vos possibilités de retour.

## Plancoët: jusqu’à trois jeux pour trois semaines

À la [ludothèque de Dinan Agglomération](https://www.dinan-agglomeration.fr/activites-et-loisirs/culture-et-pratiques-artistiques/culture/ludotheque/), le jeu sur place est **gratuit et ouvert à tous**. Vous pouvez découvrir les espaces et tester des jeux avant de décider d’emprunter.

L’adhésion familiale coûte **35 € pour un an, de date à date**. Elle permet d’emporter jusqu’à **trois jeux pour trois semaines**. Le fonds compte plus de mille jeux et jouets, de l’imitation et de la construction aux jeux de règles.

La ludothèque se trouve au **33 rue de la Madeleine**. En période scolaire, les ouvertures sont les suivantes:

- Mardi de 16 h 30 à 18 h.
- Mercredi de 10 h à 12 h 30 et de 15 h à 18 h.
- Vendredi de 16 h 30 à 18 h 30.
- Un samedi sur deux de 10 h à 12 h 30.

Le [catalogue de Plancoët](https://www.dyade-fr.com/WD150AWP/WD150Awp.exe/CONNECT/e-Kawa-Ludotheque?Ludotheque=PLANCOET) publie aussi les horaires des vacances scolaires et permet de consulter les disponibilités ou de demander une réservation. Vérifiez les informations avant le déplacement, particulièrement le samedi.

## Plouër-sur-Rance: des matinées pour les tout-petits

La ludothèque plouëraise accueille notamment les plus jeunes sur des créneaux « ludo pitchounes », présentés sur la [page municipale](https://www.plouer-sur-rance.fr/la-ludotheque/). **Les enfants de moins de huit ans doivent être accompagnés.**

Pour le budget, [l’association annonce une première visite gratuite](https://assoludoplouer.wixsite.com/my-site/about-1), puis une adhésion familiale de **32 € pour 365 jours**, ou un passage sans adhésion à **2 € par personne**. La mairie affiche encore une adhésion à 30 €: faites confirmer le montant lors de l’inscription. Pour emprunter, comptez **1 € par jeu pour deux semaines**, en plus de l’adhésion.

En période scolaire, l’association publie ces horaires:

- Du mardi au vendredi de 10 h à 11 h 45.
- Le mercredi également de 15 h à 18 h.
- Le samedi de 10 h 30 à 12 h.

Les heures de fin de matinée diffèrent sur la page municipale et la page de contact de l’association, qui indiquent 11 h 30 les mardis, jeudis et vendredis, et 12 h le mercredi. Confirmez votre créneau, ainsi que les ouvertures pendant les vacances.

La ludothèque se situe au **9 rue du Four à Chaux**. Vous pouvez joindre l’équipe au **02 96 86 88 94**, indiqué sur sa [page de contact](https://assoludoplouer.wixsite.com/my-site/contact-3).

## Lanvallay: quatre semaines de prêt lors des permanences

À Lanvallay, Au Bois des Ludes intervient **deux fois par mois à la bibliothèque**. Le jeu sur place est gratuit pendant ces rendez-vous. L’adhésion familiale coûte **20 € par an**, auxquels s’ajoute **1 € par jeu emprunté pour quatre semaines**, selon la [présentation municipale](https://www.lanvallay.fr/mes-loisirs/bibliotheque/).

Cette durée laisse davantage de temps entre deux emprunts, mais les visites doivent tenir compte des permanences. L’ouverture de la bibliothèque ne signifie pas que la ludothèque est présente.

Les rendez-vous ont lieu au **9 rue de Saint James**. Consultez [l’agenda de Lanvallay](https://www.lanvallay.fr/mes-loisirs/agenda/) pour connaître les prochaines dates et leurs horaires.

**La carte gratuite de la bibliothèque et du réseau Lirici ne remplace pas l’adhésion nécessaire pour emprunter les jeux.**

Le catalogue d’Au Bois des Ludes permet aux adhérents de consulter les collections et de réserver des jeux. Pour y accéder, le compte doit être créé par l’équipe, comme l’explique la [documentation du catalogue](https://catalogue.auboisdesludes.com/documentation/). Demandez sa mise en place lors de votre adhésion.

## Choisir le premier jeu à emporter

Indiquez à l’équipe l’âge des enfants, le nombre de joueurs habituel et le temps dont vous disposez pour une partie. Avec une fratrie, essayez quelques tours sur place: cela permet de voir si le plus jeune peut participer, suivre les règles et attendre son tour.

Pour explorer différents types de jeux avec des enfants de 6 à 8 ans, notre [comparatif de Bandido, Chabyrinthe et Kameleo](https://www.fam-space.fr/cadeaux/guides/bandido-chabyrinthe-ou-kameleo-quel-jeu-de-logique-choisir-de-6-a-8-ans/) distingue coopération, compétition et défis en solo. La présence de ces titres dans la ludothèque choisie reste à vérifier.

Avant de repartir, faites préciser la date de retour et les consignes si une pièce manque ou se casse. Si vous avez réservé une référence, attendez la confirmation de sa mise à disposition avant de vous déplacer spécialement.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/vie-pratique/emprunter-des-jeux-a-tours-mirabeau-ou-la-maison-des-jeux/ | Emprunter des jeux à Tours: Mirabeau ou la Maison des Jeux? | vie-pratique | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/parentalite/ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille/ | Ludothèque du Choletais: jouer sur place et emprunter en famille | parentalite | Cholet, Maine-et-Loire, Pays de la Loire
- /articles/vie-pratique/ludotheques-dans-le-gers-ou-jouer-et-emprunter-des-jeux-en-famille/ | Ludothèques dans le Gers: où jouer et emprunter des jeux en famille | vie-pratique | Auch, Gers, Occitanie
- /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | Ludothèques du Grand Nancy: où jouer en famille et emprunter des jeux | parentalite | Meurthe-et-Moselle, Grand Est
- /articles/parentalite/maison-des-parents-a-guingamp-quand-y-aller-et-quel-service-choisir/ | Maison des Parents à Guingamp: quand y aller et quel service choisir ? | parentalite | Guingamp, Côtes-d'Armor, Bretagne
- /articles/maison/secheresse-dans-les-cotes-d-armor-ce-qui-est-interdit-a-la-maison/ | Sécheresse dans les Côtes-d'Armor: ce qui est interdit à la maison | maison | Saint-Brieuc, Côtes-d'Armor, Bretagne
- /articles/cuisine/maison-des-fromages-de-chevre-a-celles-sur-belle-visite-et-ateliers-en-famille/ | Maison des Fromages de Chèvre à Celles-sur-Belle: visite et ateliers en famille | cuisine | Celles-sur-Belle, Deux-Sèvres, Nouvelle-Aquitaine
- /articles/cuisine/maison-de-la-salers-visite-degustation-et-budget-avec-des-enfants/ | Maison de la Salers: visite, dégustation et budget avec des enfants | cuisine | Saint-Bonnet-de-Salers, Cantal, Auvergne-Rhône-Alpes
- /articles/voyages/la-vallee-des-saints-a-carnoet-visiter-les-geants-de-granit-en-famille/ | La Vallée des Saints à Carnoët: visiter les géants de granit en famille | voyages | Carnoët, Côtes-d'Armor, Bretagne
- /articles/vie-pratique/ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison/ | Ludothèques autour de Dinan: emprunter des jeux pour la maison | vie-pratique | Côtes-d'Armor, Bretagne
- /articles/sorties/ile-de-brehat-en-famille-hors-saison-bateau-balades-et-marees/ | Île de Bréhat en famille hors saison: bateau, balades et marées | sorties | Île-de-Bréhat, Côtes-d'Armor, Bretagne
- /articles/bons-plans/la-roche-jagu-en-famille-a-l-automne-hiver-2026-parc-gratuit-tarifs-et-jours-d-ouverture/ | La Roche-Jagu en famille à l'automne-hiver 2026: parc gratuit, tarifs et jours d'ouverture | bons-plans | Ploëzal, Côtes-d'Armor, Bretagne
- /articles/cuisine/biscuiterie-menou-a-plougonver-une-visite-gratuite-a-prevoir-avec-les-enfants/ | Biscuiterie Ménou à Plougonver: une visite gratuite à prévoir avec les enfants | cuisine | Plougonver, Côtes-d'Armor, Bretagne
- /articles/activites/sept-iles-en-bateau-avec-des-enfants-tarifs-duree-et-conseils-depuis-perros-guirec/ | Sept-Îles en bateau avec des enfants: tarifs, durée et conseils depuis Perros-Guirec | activites | Perros-Guirec, Côtes-d'Armor, Bretagne
- /articles/voyages/perros-guirec-en-famille-ou-dormir-selon-votre-programme/ | Perros-Guirec en famille: où dormir selon votre programme | voyages | Perros-Guirec, Côtes-d'Armor, Bretagne
- /articles/vie-pratique/bibliotheques-de-la-marne-en-famille-livres-jeux-et-services-numeriques/ | Bibliothèques de la Marne en famille: livres, jeux et services numériques | vie-pratique | Marne, Grand Est
- /articles/vie-pratique/fort-de-france-trois-ilets-en-famille-quelle-navette-prendre-sans-voiture/ | Fort-de-France - Trois-Îlets en famille: quelle navette prendre sans voiture ? | vie-pratique | Martinique, Martinique
- /articles/vie-pratique/lyon-saint-exupery-avec-des-enfants-preparer-le-trajet-les-controles-et-l-attente/ | Lyon-Saint-Exupéry avec des enfants: préparer le trajet, les contrôles et l’attente | vie-pratique | Colombier-Saugnieu, Rhône, Auvergne-Rhône-Alpes
- /articles/vie-pratique/drome-sans-voiture-avec-des-enfants-train-cars-et-bus-pour-se-deplacer/ | Drôme sans voiture avec des enfants: train, cars et bus pour se déplacer | vie-pratique | Drôme, Auvergne-Rhône-Alpes
- /articles/vie-pratique/transports-gratuits-a-lille-comment-obtenir-le-titre-moins-de-18-ans/ | Transports gratuits à Lille: comment obtenir le titre moins de 18 ans ? | vie-pratique | Nord, Hauts-de-France
- /articles/vie-pratique/bus-ou-voiture-a-la-reunion-organiser-ses-deplacements-en-famille/ | Bus ou voiture à La Réunion: organiser ses déplacements en famille | vie-pratique | La Réunion
- /articles/vie-pratique/transport-scolaire-en-ariege-gratuite-lio-inscription-et-aide-si-aucun-car-ne-dessert-votre-domicile/ | Transport scolaire en Ariège: gratuité liO, inscription et aide si aucun car ne dessert votre domicile | vie-pratique | Ariège, Occitanie

### Historique Radar lié

- refresh | /articles/parentalite/ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille/ | 2026-11-10T03:33:47.847Z
- refresh | /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | 2026-11-09T12:50:22.314Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
