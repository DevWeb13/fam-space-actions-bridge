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
title: "LAEP à Nantes : où aller avec un enfant de moins de 6 ans ?"
subtitle: 14 adresses, âges, horaires, tarifs et accès en période scolaire
summary: À Nantes, comparez 14 lieux d'accueil enfants-parents selon le quartier, l'âge de l'enfant et le jour disponible. Adresses, horaires scolaires, gratuité et accessibilité.
slug: laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans
status: published
publishedAt: 2026-09-30T11:04:48+02:00
updatedAt: 2026-10-17T18:40:41.897Z
category: parentalite
readingTime: 6
location:
  city: Nantes
  department: Loire-Atlantique
  region: Pays de la Loire
topic:
  key: parentalite|nantes|laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans|2026
  keywords:
    - LAEP Nantes
    - lieu accueil enfants parents Nantes
image:
  src: /images/articles/2026/09/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans.webp
  alt: Vue aérienne du centre-ville de Nantes
sources:
  - title: Ville de Nantes - LAEP par quartier, horaires et coordonnées (16 octobre 2026)
    url: https://metropole.nantes.fr/mes-services-mon-quotidien/les-lieux-d-accueil-enfants-parents-pour-le-bien-etre-de-vos-enfants
  - title: Ville de Nantes - La Perdriole, horaires et accessibilité
    url: https://metropole.nantes.fr/lieu/laep-la-perdriole
  - title: Ville de Nantes - Le Square, horaires et accessibilité
    url: https://metropole.nantes.fr/lieu/laep-le-square
  - title: Ville de Nantes - La Marouette et fermetures pendant les vacances
    url: https://metropole.nantes.fr/lieu/laep-la-marouette
  - title: La Marouette - horaires, âge limite et participation
    url: https://marouette.fr/infos-pratiques/
  - title: Questions de parents - Le Square et accès PMR
    url: https://parents.loire-atlantique.fr/44/laep-le-square-nantes/parents_10658
  - title: Questions de parents - L'Oasis
    url: https://parents.loire-atlantique.fr/44/laep-municipal-l-oasis-nantes/parents_10690
  - title: Questions de parents - La Perdriole
    url: https://parents.loire-atlantique.fr/44/laep-la-perdriole-nantes/parents_10688
  - title: Questions de parents - LAEP Accoord
    url: https://parents.loire-atlantique.fr/44/lieux-d-accueil-enfants-parents-laep-de-l-accoord/parents_10701
  - title: À l'Abord'âge - horaires, adresse et adhésion
    url: https://alabordage-le-cafe-des-enfants.fr/
reviewAt: 2026-12-14
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/parentalite/(2026)/(09)/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/index.md
  targetSha: 36afe923af83c9990307b2f7f846b92f2aefa2ca
  targetUrl: /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/
  decision: Choisir un LAEP réellement adapté à Nantes dès la reprise du 2 novembre 2026, selon l'âge de l'enfant, le quartier, les jours d'accueil, le coût et l'accessibilité.
  affiliationPotential: "Aucune affiliation naturelle : service de proximité pour parents et jeunes enfants, sans achat ni séjour pertinent."
  gsc:
    retrievedAt: 2026-11-02T02:27:57+01:00
    dataThrough: 2026-10-30
    signal: uncertain
    basis: Baisse d'impressions observée; causalité et classement non établis.
    peakStart: 2026-10-03
    peakEnd: 2026-10-09
    recentStart: 2026-10-24
    recentEnd: 2026-10-30
    peakImpressions: 138
    recentImpressions: 13
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - laep nantes
      - laep
      - cape nantes
---

À Nantes, un **lieu d'accueil enfants-parents (LAEP)** permet à un jeune enfant de jouer et de rencontrer d'autres enfants, accompagné d'un parent, d'un grand-parent ou d'un adulte référent. L'adulte **reste sur place** : ce n'est pas un mode de garde. Pour choisir sans déplacement inutile, regardez surtout **l'âge admis, le jour d'ouverture, le quartier et le coût éventuel**.

Après les vacances de la Toussaint, les créneaux **de période scolaire** redeviennent la référence, notamment pour les cinq accueils Accoord, Au 104 et La Laetitia, fermés pendant les vacances. Les horaires ci-dessous proviennent principalement de l'[annuaire de la Ville de Nantes, mis à jour le 16 octobre 2026](https://metropole.nantes.fr/mes-services-mon-quotidien/les-lieux-d-accueil-enfants-parents-pour-le-bien-etre-de-vos-enfants). Une fermeture ponctuelle reste possible : vérifiez auprès du lieu avant de partir.

## Les trois LAEP municipaux : gratuits et sans inscription

Ces accueils reçoivent les enfants de **0 à 5 ans** et les futurs parents. Ils sont **gratuits, anonymes, confidentiels et sans inscription**.

<!-- article-image-body:01 -->

![Rue des Platanes à Nantes, où se situe le LAEP La Perdriole](/images/articles/2026/09/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans-body-01.webp)

*Photo : [Kalepom](https://commons.wikimedia.org/wiki/File:Rue_des_Platanes.jpg) – [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

- **La Perdriole**, **29 rue des Platanes**, quartier est : **mardi 9 h–12 h et 15 h–18 h**, **vendredi 15 h–18 h**. Chronobus **C1, arrêt Platanes**. Tél. **02 40 49 48 00**. La [fiche municipale](https://metropole.nantes.fr/lieu/laep-la-perdriole) affiche le lieu comme accessible, mais signale un **escalier sans ascenseur** : faites confirmer le cheminement si vous venez en fauteuil ou avec une poussette difficile à porter.
- **Le Square**, **6 rue Samuel-de-Champlain**, quartier nord : **mardi 15 h–18 h**, **jeudi 9 h–12 h et 15 h–18 h**. Arrêt **Chêne des Anglais**. Tél. **06 75 09 22 30**. Attention à l'accessibilité : la [Ville](https://metropole.nantes.fr/lieu/laep-le-square) indique **« Accessible PMR : Non »**, tandis que [Questions de parents](https://parents.loire-atlantique.fr/44/laep-le-square-nantes/parents_10658) annonce un accès PMR. Ne vous fiez pas à une seule fiche si cet accès est indispensable.
- **L'Oasis**, **31 rue du Plessis-Gautron**, quartier ouest : **lundi 9 h–12 h et 15 h–18 h**, **jeudi 15 h–18 h**. **Tram 1, arrêt Lauriers**, ou **bus 11, arrêt Jean-Moulin**. Tél. **02 40 41 62 05**. La [fiche départementale](https://parents.loire-atlantique.fr/44/laep-municipal-l-oasis-nantes/parents_10690) indique un accès PMR.

## Les autres accueils : du tout-petit au café familial

- **Le Nid de Jordan**, **2 rue de la Petite-Noë**, quartier est : **0–3 ans**, **mardi 9 h–12 h et 14 h–17 h**. **C6, arrêt Keren**, ou tram 1, arrêt Ranzay. Tél. **02 40 50 07 22**.
- **Le Sablier**, **16 rue Charles-Perron**, quartier ouest : **0–4 ans**, **mardi et jeudi 15 h–18 h**, **mercredi 9 h 30–12 h et 15 h–18 h**. **C6, arrêt Perron**, ou C20, arrêt Colonac. Tél. **02 40 43 82 66**.
- **La Marouette**, **15 rue de l'Héronnière**, centre-ville : **mardi et jeudi 15 h 30–18 h 30**, **tram 1, arrêt Médiathèque**. Tél. **06 17 90 29 16**. L'association accueille les enfants **jusqu'à leur quatrième anniversaire**, sans inscription, et demande une **participation libre à chaque visite**. Son [calendrier](https://marouette.fr/infos-pratiques/) précise les éventuels samedis supplémentaires ; ne présumez pas d'une ouverture tous les samedis.
- **À l'Abord'âge**, **94 rue de la Ville-en-Pierre**, quartier sud : café associatif ouvert **mercredi, vendredi et samedi 10 h–18 h 30** en période scolaire, avec ouverture le jeudi pendant les vacances selon son calendrier. **Bus 11 ou 12, arrêt Dalby** ; tram 1, arrêt Moutonnerie. Tél. **02 40 48 71 46**. **Pas d'adhésion exigée à la première visite** ; ensuite, cotisation annuelle au choix de **7 à 60 €**, avec possibilité de gratuité solidaire en échange d'un service. Le café propose aussi un déjeuner payant, à réserver de préférence avant 11 h. Consultez les [horaires de l'association](https://alabordage-le-cafe-des-enfants.fr/) en cas de fermeture exceptionnelle.

## Cinq accueils Accoord ouverts pendant les semaines scolaires

Les cinq LAEP de l'**Accoord** fonctionnent en **accès libre et gratuit, sans préinscription**. Leurs créneaux habituels sont annoncés **hors vacances scolaires** ; ils constituent donc des options supplémentaires à la reprise des cours.

<!-- article-image-body:02 -->

![Rue du Port-Boyer à Nantes, quartier où fonctionne un LAEP de l'Accoord](/images/articles/2026/09/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans-body-02.webp)

<!-- /article-image-body:02 -->

- **Le Clapotis – Port-Boyer** : **0–6 ans**, **lundi 9 h 30–11 h 30**, **7 rue de Pornichet**. **C6, arrêt Guindré**. Tél. **02 40 49 21 81**.
- **LAEP Bottière** : **0–6 ans**, **mercredi 9 h 30–11 h 30**, **147 route de Sainte-Luce**. **Bus 11, arrêt Bois-Robillard**, ou tram 1, arrêt Souillarderie. Tél. **02 40 49 62 20**.
- **Le Baobab – Halvêque** : **0–6 ans**, **jeudi 9 h 30–11 h 30**, **109 avenue de la Gare-de-Saint-Joseph**, ludothèque Accoord. **Tram 1, arrêt Halvêque**. Tél. **02 40 49 94 10**.
- **Le Cabanous – Beaulieu** : **0–5 ans**, **mercredi et jeudi 9 h 30–11 h 30**, **4 rue Marc-Vaubourgoin**. **C5 ou bus 26, arrêt Pompidou**. Tél. **02 51 72 39 82**.
- **Marchemabulle – Malakoff** : **0–6 ans**, **vendredi 9 h 30–11 h 30**, **Maison des Haubans, 1 bis boulevard de Berlin, premier étage, salle d'activités n° 2**. **C3, arrêt Haubans**. Tél. **02 40 47 70 53**.

Les [coordonnées et créneaux municipaux](https://metropole.nantes.fr/mes-services-mon-quotidien/les-lieux-d-accueil-enfants-parents-pour-le-bien-etre-de-vos-enfants) sont à privilégier pour préparer une visite : certaines fiches départementales Accoord affichent encore des adresses ou horaires différents.

Deux autres lieux associatifs accueillent également les familles **hors vacances scolaires** :

- **Au 104**, **104 rue Saint-Jacques** : **0–4 ans**, **mercredi 9 h–12 h et 15 h–18 h**, **tram 2 ou 3, arrêt Pirmil**. Participation financière **libre et confidentielle**. Tél. **02 51 86 02 64**.
- **La Laetitia**, **49 rue Chanoine-Larose** : **0–3 ans**, **lundi et vendredi 9 h 30–11 h 30**, **tram 3, arrêt Alexandre-Vincent–Sainte-Thérèse**. Tél. **02 40 40 76 30**.

## Comment éviter de se déplacer pour rien ?

Pour un enfant de **4 ou 5 ans**, écartez d'abord les accueils limités à 3 ans ; pour **La Marouette**, l'accueil s'arrête précisément au **quatrième anniversaire**. Si vous ne pouvez venir que le lundi, regardez notamment **L'Oasis, Le Clapotis ou La Laetitia**, en tenant compte de l'âge. Pour le samedi, vérifiez plutôt le calendrier d'**À l'Abord'âge** ou les ouvertures ponctuelles de **La Marouette**.

La plupart des LAEP ne demandent **aucune réservation**, mais cela ne garantit ni une ouverture exceptionnelle ni un accès adapté à tous les besoins. Avant une première venue, contrôlez le créneau et, si nécessaire, l'entrée avec poussette ou fauteuil auprès du lieu. Pour comprendre le déroulement d'une séance, consultez notre guide sur [la première visite dans un LAEP](/articles/parentalite/laep-enfants-parents-gratuit-sans-inscription/).

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/parentalite/(2026)/(09)/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/index.md

---
title: "LAEP à Nantes: où aller avec un enfant de moins de 6 ans?"
subtitle: Adresses, âges, horaires et ouvertures pendant les vacances d'automne 2026
summary: "LAEP à Nantes: quels accueils pour les moins de 6 ans, selon le quartier et l'âge? Horaires habituels, particularités des vacances de Toussaint, tarifs et accès."
slug: laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans
status: published
publishedAt: 2026-09-30T11:04:48+02:00
updatedAt: 2026-10-17T18:40:41.897Z
category: parentalite
readingTime: 5
location:
  city: Nantes
  department: Loire-Atlantique
  region: Pays de la Loire
topic:
  key: parentalite|nantes|laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans|2026
  keywords:
    - LAEP Nantes
    - lieu accueil enfants parents Nantes
image:
  src: /images/articles/2026/09/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans.webp
  alt: Vue aérienne du centre-ville de Nantes
sources:
  - title: Ville de Nantes - LAEP et horaires par quartier
    url: https://metropole.nantes.fr/mes-services-mon-quotidien/les-lieux-d-accueil-enfants-parents-pour-le-bien-etre-de-vos-enfants
  - title: Ville de Nantes - Le Square, horaires et accessibilité
    url: https://metropole.nantes.fr/lieu/laep-le-square
  - title: Ville de Nantes - La Perdriole, accessibilité
    url: https://metropole.nantes.fr/lieu/laep-la-perdriole
  - title: Ville de Nantes - La Marouette, calendrier de vacances
    url: https://metropole.nantes.fr/lieu/laep-la-marouette
  - title: La Marouette - horaires et participation
    url: https://marouette.fr/infos-pratiques/
  - title: Questions de parents - Le Square
    url: https://parents.loire-atlantique.fr/44/laep-le-square-nantes/parents_10658
  - title: Questions de parents - L'Oasis
    url: https://parents.loire-atlantique.fr/44/laep-municipal-l-oasis-nantes/parents_10690
  - title: Questions de parents - La Perdriole
    url: https://parents.loire-atlantique.fr/44/laep-la-perdriole-nantes/parents_10688
  - title: Questions de parents - accueils Accoord
    url: https://parents.loire-atlantique.fr/44/lieux-d-accueil-enfants-parents-laep-de-l-accoord/parents_10701
  - title: Nantes Métropole - accompagnement des parents
    url: https://metropole.nantes.fr/dossier-parents-des-solutions-face-aux-defis-du-quotidien
  - title: Service Public - dates des vacances de la Toussaint 2026
    url: https://www.service-public.gouv.fr/particuliers/actualites/A15125
reviewAt: 2026-11-02
---

Un **lieu d'accueil enfants-parents (LAEP)** permet aux jeunes enfants de jouer, de rencontrer d'autres enfants et aux adultes d'échanger avec d'autres familles ou des accueillants. Le parent, grand-parent ou autre adulte référent **reste avec l'enfant**: ce n'est ni une crèche ni un mode de garde. Nantes en compte dans plusieurs quartiers, mais **les âges admis, horaires et ouvertures pendant les vacances varient**.

Les horaires varient selon les quartiers, mais le principe d'accueil reste le même. Notre guide [comprendre comment se passe une première visite dans un LAEP](/articles/parentalite/laep-enfants-parents-gratuit-sans-inscription/) explique le rôle de l'adulte et le jeu libre.

## Vacances d'automne 2026: quels LAEP accueillent les familles?

Pendant les vacances de la Toussaint **du 17 octobre au 1er novembre**, les accueils se concentrent sur les jours ouvrés **du 19 au 30 octobre**. La [liste des LAEP publiée par la Ville de Nantes](https://metropole.nantes.fr/mes-services-mon-quotidien/les-lieux-d-accueil-enfants-parents-pour-le-bien-etre-de-vos-enfants) indique les horaires habituels ci-dessous. Vérifiez les éventuelles fermetures exceptionnelles auprès de la structure avant de venir:

- **La Perdriole**, quartier est: mardi de **9h à 12h et 15h à 18h**, vendredi de **15h à 18h**; enfants jusqu'à **5 ans**.
- **Le Nid de Jordan**, quartier est: mardi de **9h à 12h et 14h à 17h**; enfants jusqu'à **3 ans**.
- **Le Sablier**, quartier ouest: mardi et jeudi de **15h à 18h**, mercredi de **9h30 à 12h et 15h à 18h**; enfants jusqu'à **4 ans**.
- **L'Oasis**, quartier ouest: lundi de **9h à 12h et 15h à 18h**, jeudi de **15h à 18h**; enfants jusqu'à **5 ans**.
- **Le Square**, quartier nord: mardi de **15h à 18h**, jeudi de **9h à 12h et 15h à 18h**. La [fiche du Square](https://metropole.nantes.fr/lieu/laep-le-square) confirme des créneaux les **20 et 22 octobre**; elle indique normalement la fermeture les autres jours. Pour la semaine suivante, confirmez les horaires au **06 75 09 22 30**.

Deux autres options se distinguent. **La Marouette**, au centre, accueille les familles le **mardi 20 et le jeudi 22 octobre de 15h30 à 18h30**, puis ferme durant la seconde semaine de vacances, selon sa [fiche municipale](https://metropole.nantes.fr/lieu/laep-la-marouette). Son [site](https://marouette.fr/infos-pratiques/) mentionne une participation financière libre à chaque visite. **À l'Abord'âge**, café associatif du quartier sud, accueille les familles le **mercredi, vendredi et samedi de 10h à 18h30**, avec un **jeudi supplémentaire pendant les vacances**, et demande une participation annuelle de **7 à 60 € par famille**.

À l'inverse, les cinq LAEP **Accoord** de **Port-Boyer, Bottière, Halvêque-Beaujoire, Beaulieu et Malakoff** indiquent des créneaux **hors vacances scolaires**. C'est aussi le cas d'**Au 104** et de **La Laetitia**: leurs créneaux habituels ne doivent pas être considérés comme ouverts pendant ces vacances.

## Gratuit, sans inscription: quelles règles?

Les trois LAEP municipaux **Le Square, La Perdriole et L'Oasis** sont présentés comme **gratuits, anonymes, confidentiels et sans inscription**. Beaucoup d'autres lieux fonctionnent aussi en accès libre. Certains accueils associatifs demandent toutefois une contribution: **Au 104**, par exemple, prévoit une participation libre et confidentielle, et **À l'Abord'âge** une cotisation annuelle.

L'accueil n'est pas une activité à réserver comme un atelier. L'enfant peut jouer ou observer à son rythme tandis que l'adulte reste sur place. Plusieurs structures accueillent aussi les futurs parents. Nantes présente ces espaces comme des lieux de socialisation et d'échange, utiles notamment avant l'entrée en collectivité.

## Trois LAEP municipaux à repérer selon le quartier

<!-- article-image-body:01 -->

![Rue des Platanes à Nantes, où se situe le LAEP La Perdriole](/images/articles/2026/09/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans-body-01.webp)

*Photo: [Kalepom](https://commons.wikimedia.org/wiki/File:Rue_des_Platanes.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

**La Perdriole**, **29 rue des Platanes**, reçoit les enfants de **0 à 5 ans** et les futurs parents. Le **C1, arrêt Platanes**, permet de rejoindre le secteur. La [fiche municipale](https://metropole.nantes.fr/lieu/laep-la-perdriole) affiche « lieu accessible » mais mentionne également un **escalier sans ascenseur**. Si vous utilisez un fauteuil roulant ou une poussette difficile à porter, demandez confirmation du cheminement au **02 40 49 48 00**.

**Le Square**, **6 rue Samuel-de-Champlain**, accueille les **0-5 ans** et les futurs parents. Il est proche de l'arrêt **Chêne des Anglais**. Pour l'accessibilité, les sources divergent: la [fiche municipale](https://metropole.nantes.fr/lieu/laep-le-square) indique **« Accessible PMR: Non »**, alors que [Questions de parents](https://parents.loire-atlantique.fr/44/laep-le-square-nantes/parents_10658) annonce un accès PMR. Une confirmation téléphonique est indispensable en cas de besoin particulier.

**L'Oasis**, **31 rue du Plessis-Gautron**, reçoit les **0-5 ans** et les futurs parents. Accès par le **tram 1, arrêt Lauriers**, ou le **bus 11, arrêt Jean-Moulin**. La [fiche de L'Oasis](https://parents.loire-atlantique.fr/44/laep-municipal-l-oasis-nantes/parents_10690) détaille son accueil gratuit sans inscription.

## D'autres adresses, selon l'âge et le jour

<!-- article-image-body:02 -->

![Rue du Port-Boyer à Nantes, quartier où fonctionne un LAEP de l'Accoord](/images/articles/2026/09/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans-body-02.webp)

<!-- /article-image-body:02 -->

**Le Nid de Jordan**, **2 rue de la Petite-Noë**, reçoit les **0-3 ans** le mardi. **Le Sablier**, **16 rue Charles-Perron**, accueille les **0-4 ans**. **La Marouette**, **15 rue de l'Héronnière**, reçoit les **0-4 ans**; tram 1, arrêt **Médiathèque**. Pour l'automne 2026, son ouverture limitée à la première semaine mérite une attention particulière.

Pendant les semaines scolaires, cinq structures de l'**Accoord** complètent l'offre à **Port-Boyer, Bottière, Halvêque-Beaujoire, Beaulieu et Malakoff**, généralement en accès libre et gratuit. La [liste Accoord](https://parents.loire-atlantique.fr/44/lieux-d-accueil-enfants-parents-laep-de-l-accoord/parents_10701) détaille leurs lieux et créneaux. **Au 104**, **104 rue Saint-Jacques**, accueille les **0-4 ans** le mercredi hors vacances; **La Laetitia**, **49 rue Chanoine-Larose**, propose des matinées **lundi et vendredi** pour les **0-3 ans**, également hors vacances.

## Comment choisir sans déplacement inutile?

Vérifiez d'abord **l'âge maximum**, puis le quartier, le jour d'accueil et le **fonctionnement pendant les vacances**. Un lieu qui reçoit uniquement les moins de 3 ans ne convient pas à un enfant de 4 ans, même s'il est tout près. L'accès avec une poussette ou en fauteuil mérite aussi une vérification spécifique pour les lieux dont les fiches se contredisent.

Pour confirmer un créneau, retrouvez les coordonnées sur la [liste officielle des LAEP de Nantes](https://metropole.nantes.fr/mes-services-mon-quotidien/les-lieux-d-accueil-enfants-parents-pour-le-bien-etre-de-vos-enfants). Les accueils indiqués « hors vacances scolaires » reprennent leur fonctionnement selon leur propre calendrier.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/parentalite/laep-a-grenoble-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP à Grenoble: où aller avec un enfant de moins de 6 ans? | parentalite | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-en-indre-et-loire-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP en Indre-et-Loire: où aller avec un enfant de moins de 6 ans | parentalite | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/parentalite/laep-dans-le-cantal-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP dans le Cantal: où aller avec un enfant de moins de 6 ans | parentalite | Aurillac, Cantal, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-en-seine-et-marne-ou-aller-et-comment-se-passe-une-premiere-visite/ | LAEP en Seine-et-Marne: où aller et comment se passe une première visite? | parentalite | Meaux, Seine-et-Marne, Île-de-France
- /articles/parentalite/laep-a-caen-4-lieux-pour-venir-avec-un-enfant-sans-inscription/ | LAEP à Caen: 4 lieux pour venir avec un enfant sans inscription | parentalite | Caen, Calvados, Normandie
- /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | Noël à Nantes 2026: marché de Noël et Voyage en hiver en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/utopiales-2026-a-nantes-en-famille-dates-billets-et-conseils-pour-preparer-la-visite/ | Utopiales 2026 à Nantes en famille: dates, billets et conseils pour préparer la visite | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/bons-plans/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites/ | Pass Nantes en famille en 2026: tarifs, visites incluses et alternatives gratuites | bons-plans | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | Festi'Mômes 2026 à Nantes: séances, spectacles et tarifs en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP à Nantes: où aller avec un enfant de moins de 6 ans? | parentalite | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/cuisine/atelier-cuisine-parent-enfant-a-nantes-gratuit-au-breil-ou-cours-prive/ | Ateliers cuisine parent-enfant à Nantes: où cuisiner ensemble? | cuisine | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/maison/broyeur-de-vegetaux-a-nantes-metropole-acheter-a-plusieurs-ou-profiter-des-operations-gratuites/ | Broyeur de végétaux à Nantes Métropole: acheter à plusieurs ou profiter des opérations gratuites ? | maison | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/vie-pratique/tarification-solidaire-naolib-a-nantes-combien-paie-une-famille-et-comment-faire-la-demande/ | Tarification solidaire Naolib à Nantes: combien paie une famille et comment faire la demande? | vie-pratique | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/folie-plantes-nantes-2026-famille/ | Folie des plantes 2026 à Nantes: un week-end gratuit à découvrir en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/bons-plans/chateau-de-chateaubriant-en-famille-une-sortie-a-petit-budget/ | Château de Châteaubriant en famille, une sortie à petit budget | bons-plans | Châteaubriant, Loire-Atlantique, Pays de la Loire
- /articles/activites/planete-sauvage-en-famille-tarifs-2026-duree-et-conseils-de-visite/ | Planète Sauvage en famille: tarifs 2026, durée et conseils de visite | activites | Port-Saint-Père, Loire-Atlantique, Pays de la Loire
- /articles/evenements/festival-ete-continue-carquefou-2026-famille/ | Festival L’Été Continue 2026 à Carquefou: six jours gratuits en famille | evenements | Carquefou, Loire-Atlantique, Pays de la Loire
- /articles/evenements/voyage-a-nantes-2026-en-famille/ | Voyage à Nantes 2026 en famille: parcours court et plan | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | Ludothèques du Grand Nancy: où jouer en famille et emprunter des jeux | parentalite | Meurthe-et-Moselle, Grand Est
- /articles/parentalite/laep-dans-l-herault-jouer-avec-son-enfant-et-rencontrer-d-autres-parents/ | LAEP dans l'Hérault: jouer avec son enfant et rencontrer d'autres parents | parentalite | Hérault, Occitanie
- /articles/parentalite/a-sainte-rose-decouvrir-la-mangrove-avec-son-enfant-en-pedalo/ | À Sainte-Rose, découvrir la mangrove avec son enfant en pédalo | parentalite | Sainte-Rose, Guadeloupe, Guadeloupe
- /articles/parentalite/a-manosque-ou-sortir-avec-un-bebe-ou-un-tout-petit/ | À Manosque, où sortir avec un bébé ou un tout-petit ? | parentalite | Manosque, Alpes-de-Haute-Provence, Provence-Alpes-Côte d’Azur

### Historique Radar lié

- opportunity | /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | 2026-10-17T11:48:00.184Z
- refresh | /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | 2026-10-17T18:40:41.973Z
- opportunity | /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | 2026-10-24T15:27:41.430Z
- refresh | /articles/activites/planete-sauvage-en-famille-tarifs-2026-duree-et-conseils-de-visite/ | 2026-10-02T14:23:16.612Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
