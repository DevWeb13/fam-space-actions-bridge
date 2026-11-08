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
title: "LAEP autour d'Annecy: trois lieux pour jouer avec son tout-petit"
subtitle: À Meythet, aux Teppes et à Alby-sur-Chéran, comparez les âges, les créneaux et les conditions d'accueil
summary: "Trois lieux d'accueil enfants-parents autour d'Annecy : horaires 2026-2027, âges, accès en bus, adhésion et prochaines séances pour venir sans mauvaise surprise."
slug: laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit
status: published
publishedAt: 2026-10-23T10:59:51+02:00
updatedAt: null
category: parentalite
readingTime: 5
location:
  city: Annecy
  department: Haute-Savoie
  region: Auvergne-Rhône-Alpes
topic:
  key: parentalite|annecy|laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit|2026
  keywords:
    - LAEP Annecy
    - lieu accueil enfants parents Haute-Savoie
    - LAEP Meythet Alby-sur-Chéran
image:
  src: /images/articles/2026/10/laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit.webp
  alt: Vue du centre de Meythet près d'Annecy en septembre 2007, illustration géographique sans représenter les lieux d'accueil enfants-parents.
sources:
  - title: Caf - Les lieux d'accueil enfants-parents
    url: https://www.monenfant.fr/les-lieux-d-accueil-enfants-parents/
  - title: Le Cairn - Les Petites Bulles, accueil des familles
    url: https://lecairn-annecymeythet.com/famille-habitants/
  - title: Le Cairn - Adresse et accès
    url: https://lecairn-annecymeythet.com/infos-pratiques/
  - title: Le Mikado - Le Patio et horaires 2026-2027
    url: https://lemikado.org/action-sociale/petite-enfance-annecy/
  - title: Le Mikado - Carte d'adhésion familiale 2026-2027
    url: https://lemikado.org/adhesion/
  - title: Le Mikado - Accès au site Teppes
    url: https://lemikado.org/contacts-horaires-acces/
  - title: SIPA - Les P'tits explorateurs et calendrier 2026-2027
    url: https://www.sipalby.fr/espace-jeux-enfants-parents/
  - title: Mairie d'Alby-sur-Chéran - Petite enfance et accès au LAEP
    url: https://mairie-alby-sur-cheran.fr/enfance-jeunesse/petite-enfance/
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/parentalite/(2026)/(10)/laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit/index.md
  targetSha: 247dea85decc3594f9272de9778ae1035cba3506
  targetUrl: /articles/parentalite/laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit/
  decision: Choisir un LAEP réellement accessible selon l'âge de l'enfant, le jour disponible et les conditions d'accueil, notamment pour les séances de 2027.
  affiliationPotential: "Aucune affiliation naturelle : accueil de proximité sans réservation commerciale."
  gsc:
    retrievedAt: 2026-11-08T02:28:56+01:00
    dataThrough: 2026-11-05
    signal: needs_query_check
    basis: "Visibilité récente : 40 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-25
    peakEnd: 2026-10-27
    recentStart: 2026-11-03
    recentEnd: 2026-11-05
    peakImpressions: 40
    recentImpressions: 0
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - LAEP Annecy
      - lieu accueil enfants parents Haute-Savoie
      - LAEP Meythet Alby-sur-Chéran
reviewAt: 2027-01-04
---

Un **lieu d'accueil enfants-parents (LAEP)** permet aux tout-petits de jouer avec d'autres enfants pendant que les adultes échangent ou partagent un moment avec eux. Autour d'Annecy, **Les Petites Bulles à Meythet**, **Le Patio aux Teppes** et **Les P'tits explorateurs à Alby-sur-Chéran** proposent cette formule, mais leurs horaires, âges et conditions d'accès diffèrent.

Pour choisir sans déplacement inutile, retenez surtout ceci : **Meythet accueille gratuitement le jeudi matin**, **Le Patio ouvre plusieurs jours avec une adhésion familiale**, tandis qu'**Alby propose certains mardis matin seulement**, selon un calendrier précis.

## Un LAEP, ce n'est pas une garderie

L'enfant vient avec un parent ou un adulte familier, **qui reste présent et responsable de lui**. Des accueillants accompagnent les échanges sans imposer d'activité. On peut jouer, observer ou discuter et repartir librement. La [Caf présente le principe des LAEP](https://www.monenfant.fr/les-lieux-d-accueil-enfants-parents/) : accueil souple, confidentialité et absence d'inscription préalable.

## Les Petites Bulles à Meythet : gratuit le jeudi matin

**Les Petites Bulles**, au **Cairn, 6 rue de l'Aérodrome à Meythet** (Annecy), accueillent les enfants de **0 à 6 ans** accompagnés d'un parent ou adulte référent. Les futurs parents sont également les bienvenus.

Le [Cairn annonce un accueil gratuit, anonyme et sans inscription](https://lecairn-annecymeythet.com/famille-habitants/), **chaque jeudi de 9 h à 12 h, y compris pendant les vacances scolaires**. Vous pouvez arriver ou repartir pendant ce créneau, sans obligation de rester toute la matinée.

Pour les renseignements et l'accès, consultez les [informations pratiques du Cairn](https://lecairn-annecymeythet.com/infos-pratiques/) ou appelez le **04 50 22 08 13**. La page de l'activité ne détaille pas l'accessibilité de la salle : si vous venez avec une poussette ou devez éviter les escaliers, vérifiez ce point auprès de l'accueil.

## Le Patio aux Teppes : plusieurs créneaux, avec adhésion

**Le Patio**, proposé par **Le Mikado au site Teppes, place des Rhododendrons, 74000 Annecy**, reçoit les enfants **de la naissance à 6 ans** avec un adulte, dans la limite des places disponibles.

Le [programme 2026-2027 du Mikado](https://lemikado.org/action-sociale/petite-enfance-annecy/) distingue deux périodes :

- **Hors vacances scolaires :** lundi et mardi de **15 h à 17 h 30**, mercredi de **9 h à 12 h**, jeudi et vendredi de **9 h à 11 h 30**.
- **Pendant les vacances scolaires :** lundi et mercredi de **9 h 30 à 11 h 30**.

L'accueil est libre dans la limite des places, mais il faut une **carte d'adhésion familiale de 24 € pour la saison 2026-2027**, valable du **1er septembre 2026 au 31 août 2027**. Ce montant correspond à l'année, pas à chaque séance. Consultez les [conditions d'adhésion du Mikado](https://lemikado.org/adhesion/).

**Sans voiture :** le [Mikado indique la ligne de bus 4, arrêts Anémones ou Plaine Edelweiss](https://lemikado.org/contacts-horaires-acces/), pour rejoindre le site Teppes. Le centre est joignable au **04 50 57 56 55**. Les horaires de l'accueil administratif affichés sur son site ne sont **pas** les horaires du LAEP : utilisez les créneaux ci-dessus et vérifiez les fermetures exceptionnelles avant de partir.

## Les P'tits explorateurs à Alby-sur-Chéran : vérifier le mardi choisi

Organisés par le **Syndicat intercommunal du Pays d'Alby (SIPA)**, **Les P'tits explorateurs** accueillent les enfants **de 0 à 4 ans**, et **jusqu'à 6 ans pendant les vacances scolaires**, avec un parent ou adulte familier.

Rendez-vous dans la **salle petite enfance au deuxième étage de la Maison intercommunale des services publics**, au-dessus de la crèche, **118 route de Plaimpalais, 74540 Alby-sur-Chéran**. L'accueil est **gratuit, anonyme et sans inscription**, de **8 h 45 à 11 h 15**, les mardis inscrits au calendrier.

Attention : **il n'y a pas de séance tous les mardis**. Le [calendrier officiel 2026-2027 du SIPA](https://www.sipalby.fr/espace-jeux-enfants-parents/) prévoit :

- **Novembre 2026 :** les 3, 10, 17 et 24.
- **Décembre 2026 :** les 1er, 8 et 15 ; **pas de séance annoncée les 22 et 29 décembre**.
- **Janvier 2027 :** les 5, 12, 19 et 26.
- **Février 2027 :** les 2, 9 et 16 ; **pas de séance annoncée les 23 février**.

Les dates suivantes, jusqu'en juillet 2027, figurent sur le site du SIPA. Pendant les petites vacances, l'organisme annonce une ouverture une semaine sur deux : ne supposez donc pas qu'un mardi habituel est maintenu. Vérifiez le calendrier juste avant de venir.

**Familles hors du Pays d'Alby :** le SIPA décrit une venue libre, mais la [mairie d'Alby-sur-Chéran](https://mairie-alby-sur-cheran.fr/enfance-jeunesse/petite-enfance/) évoque les familles des communes membres du syndicat. L'admission de toutes les familles extérieures n'est donc pas garantie. Pour confirmer votre situation, ou l'accès au deuxième étage avec une poussette, contactez le SIPA au **04 50 68 40 00** ou **04 50 68 40 01**.

## Préparer sa première visite

Si vous souhaitez venir sans adhésion, privilégiez **Meythet le jeudi** ou **Alby un mardi confirmé au calendrier**. Pour davantage de choix dans la semaine, **Le Patio** peut convenir si l'adhésion familiale correspond à vos besoins. Vérifiez toujours l'âge accepté, particulièrement à Alby où la limite passe de 4 à 6 ans pendant les vacances.

Pour le trajet avec une poussette, notre [guide des bus à Annecy avec des enfants](https://www.fam-space.fr/articles/vie-pratique/bus-a-annecy-avec-des-enfants-quel-ticket-choisir-et-comment-eviter-les-galeres/) détaille les règles à bord. Si aucun de ces trois lieux ne vous convient, la [Caf explique comment trouver d'autres LAEP](https://www.monenfant.fr/les-lieux-d-accueil-enfants-parents/) près de chez vous.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/parentalite/(2026)/(10)/laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit/index.md

---
title: "LAEP autour d'Annecy: trois lieux pour jouer avec son tout-petit"
subtitle: À Meythet, Annecy et Alby-sur-Chéran, les âges accueillis, les horaires et les conditions d'accès ne sont pas les mêmes
summary: "Trois lieux d'accueil enfants-parents autour d'Annecy: âges, horaires, coût et conditions d'accès pour choisir où venir avec un tout-petit."
slug: laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit
status: published
publishedAt: 2026-10-23T10:59:51+02:00
updatedAt: null
category: parentalite
readingTime: 5
location:
  city: Annecy
  department: Haute-Savoie
  region: Auvergne-Rhône-Alpes
topic:
  key: parentalite|annecy|laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit|2026
  keywords:
    - LAEP Annecy
    - lieu accueil enfants parents Haute-Savoie
    - LAEP Meythet Alby-sur-Chéran
image:
  src: "/images/articles/2026/10/laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit.webp"
  alt: "Vue du centre de Meythet près d'Annecy en septembre 2007, illustration géographique sans représenter les lieux d'accueil enfants-parents."
sources:
  - title: Caf - Les lieux d'accueil enfants-parents
    url: https://www.monenfant.fr/les-lieux-d-accueil-enfants-parents/
  - title: Le Cairn - Les Petites Bulles, accueil des familles
    url: https://lecairn-annecymeythet.com/famille-habitants/
  - title: Le Cairn - Adresse et accès
    url: https://lecairn-annecymeythet.com/infos-pratiques/
  - title: Le Mikado - Le Patio et horaires 2026-2027
    url: https://lemikado.org/action-sociale/petite-enfance-annecy/
  - title: Le Mikado - Carte d'adhésion familiale 2026-2027
    url: https://lemikado.org/adhesion/
  - title: Le Mikado - Accès au site Teppes
    url: https://lemikado.org/contacts-horaires-acces/
  - title: SIPA - Les P'tits explorateurs et calendrier 2026-2027
    url: https://www.sipalby.fr/espace-jeux-enfants-parents/
  - title: Mairie d'Alby-sur-Chéran - Petite enfance et accès au LAEP
    url: https://mairie-alby-sur-cheran.fr/enfance-jeunesse/petite-enfance/
---

Dans un **lieu d'accueil enfants-parents (LAEP)**, les tout-petits peuvent découvrir des jeux et rencontrer d'autres enfants pendant que les adultes échangent ou prennent simplement le temps d'être avec eux. Autour d'Annecy, en Haute-Savoie, trois accueils proposent cette formule, mais pas aux mêmes horaires ni dans les mêmes conditions.

**Les Petites Bulles à Meythet**, **Le Patio à Annecy** et **Les P'tits explorateurs à Alby-sur-Chéran** se distinguent surtout par l'âge des enfants accueillis, les jours d'ouverture et l'éventuelle adhésion à prévoir.

## Un LAEP, ce n'est pas une garderie

On vient avec son enfant et **on reste avec lui**: l'adulte accompagnant en garde la responsabilité. Des accueillants sont présents pour faciliter les échanges et veiller au cadre du lieu, mais personne n'impose une activité ou un programme. On peut jouer, observer ou discuter avec d'autres parents.

Selon la [présentation des LAEP par la Caf](https://www.monenfant.fr/les-lieux-d-accueil-enfants-parents/), l'accueil repose sur la liberté de venir, la confidentialité et l'absence d'inscription. Les deux premiers lieux présentés ici accueillent les enfants jusqu'à 6 ans; celui d'Alby-sur-Chéran applique une limite plus basse hors vacances. Autre différence locale importante: Le Patio demande une adhésion familiale, alors que les deux autres structures annoncent un accès gratuit.

## Les Petites Bulles à Meythet: gratuit le jeudi matin

**Les Petites Bulles**, au **Cairn, 6 rue de l'Aérodrome à Meythet** (commune déléguée d'Annecy), accueillent les enfants de **0 à 6 ans** avec un parent ou un adulte référent. Les futurs parents peuvent aussi venir.

Le [Cairn indique un accueil gratuit, anonyme et sans inscription](https://lecairn-annecymeythet.com/famille-habitants/), **chaque jeudi de 9h à 12h**, y compris pendant les vacances scolaires. On peut arriver et repartir pendant ce créneau: il n'est pas nécessaire de rester trois heures.

Pour préparer votre venue, les [informations pratiques du Cairn](https://lecairn-annecymeythet.com/infos-pratiques/) donnent l'adresse, les possibilités d'accès et le téléphone **04 50 22 08 13**. L'emplacement précis de la salle LAEP et ses conditions d'accessibilité ne sont pas détaillés sur la page de l'activité: si vous venez avec une poussette ou devez éviter les escaliers, renseignez-vous auprès de l'accueil.

## Le Patio à Annecy: plusieurs jours d'ouverture, avec adhésion

**Le Patio** est le LAEP du **Mikado**, au **site Teppes, place des Rhododendrons, 74000 Annecy**. Il accueille les enfants **de la naissance à 6 ans** avec un adulte, dans la limite des places disponibles.

Pour la saison **2026-2027**, le [calendrier du Patio publié par Le Mikado](https://lemikado.org/action-sociale/petite-enfance-annecy/) distingue:

- **Hors vacances scolaires:** lundi et mardi de **15h à 17h30**, mercredi de **9h à 12h**, jeudi et vendredi de **9h à 11h30**.
- **Pendant les vacances scolaires:** lundi et mercredi de **9h30 à 11h30**.

L'accès est libre dans la limite des places, mais **une carte d'adhésion familiale est nécessaire**. Elle coûte **24 € pour la saison 2026-2027**, du 1er septembre 2026 au 31 août 2027. Il s'agit d'une adhésion annuelle et non d'un tarif par séance. Le Mikado en précise les [conditions et le montant](https://lemikado.org/adhesion/).

Le [plan d'accès au site Teppes](https://lemikado.org/contacts-horaires-acces/) permet de repérer les lieux; le centre répond au **04 50 57 56 55**. Les horaires du LAEP ne doivent pas être confondus avec ceux de l'accueil général du Mikado. Vérifiez aussi les fermetures exceptionnelles avant le départ.

## Les P'tits explorateurs à Alby-sur-Chéran: des mardis précis

Au sud d'Annecy, **Les P'tits explorateurs** sont organisés par le **Syndicat intercommunal du Pays d'Alby (SIPA)**. Le lieu reçoit les enfants **de 0 à 4 ans**, et **jusqu'à 6 ans pendant les vacances scolaires**, avec un parent ou un adulte familier.

L'accueil se tient dans la **salle petite enfance au deuxième étage de la Maison intercommunale des services publics**, au-dessus de la crèche, **118 route de Plaimpalais, 74540 Alby-sur-Chéran**. Le service est annoncé **gratuit, anonyme et sans inscription**.

Les séances ont lieu **le mardi de 8h45 à 11h15**, mais **pas tous les mardis**. Le [calendrier 2026-2027 du SIPA](https://www.sipalby.fr/espace-jeux-enfants-parents/) prévoit notamment les **3, 10, 17 et 24 novembre 2026**, mais aucune séance le **27 octobre 2026**. Consultez les dates actualisées avant de vous déplacer.

**Attention si vous habitez hors du Pays d'Alby:** le SIPA présente la venue comme libre, tandis que la [mairie d'Alby-sur-Chéran](https://mairie-alby-sur-cheran.fr/enfance-jeunesse/petite-enfance/) mentionne explicitement les familles des communes membres du syndicat. Cela ne permet pas d'affirmer que toutes les familles extérieures sont admises. Le SIPA peut confirmer les conditions au **04 50 68 40 00** ou **04 50 68 40 01**.

## Avant la première visite

Le choix dépend surtout du créneau qui convient à votre famille: **jeudi matin sans adhésion à Meythet**, **plusieurs jours possibles au Patio avec une adhésion**, ou **mardi matin sur calendrier à Alby-sur-Chéran**. Si votre enfant approche de 4 ans, vérifiez en particulier la règle d'âge des P'tits explorateurs.

Les horaires et conditions peuvent évoluer; consultez la page de la structure choisie avant de partir. Si vous prenez les transports en commun avec une poussette, notre [guide des bus à Annecy avec des enfants](https://www.fam-space.fr/articles/vie-pratique/bus-a-annecy-avec-des-enfants-quel-ticket-choisir-et-comment-eviter-les-galeres/) explique les règles utiles à bord.

Pour découvrir d'autres accueils près de chez vous, la [Caf présente les LAEP sur monenfant.fr](https://www.monenfant.fr/les-lieux-d-accueil-enfants-parents/); votre Caf ou le service petite enfance de votre commune peut aussi vous orienter vers les lieux et créneaux locaux.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/parentalite/laep-a-rennes-ou-jouer-gratuitement-avec-son-enfant/ | LAEP à Rennes: où jouer gratuitement avec son enfant? | parentalite | Rennes, Ille-et-Vilaine, Bretagne
- /articles/maison/renovation-energetique-en-haute-savoie-jusqu-a-3-000-d-aide-departementale/ | Rénovation énergétique en Haute-Savoie: jusqu'à 3 000 € d'aide départementale | maison | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-dans-l-herault-jouer-avec-son-enfant-et-rencontrer-d-autres-parents/ | LAEP dans l'Hérault: jouer avec son enfant et rencontrer d'autres parents | parentalite | Hérault, Occitanie
- /articles/parentalite/laep-a-bastia-et-en-balagne-deux-lieux-gratuits-pour-les-tout-petits/ | LAEP à Bastia et en Balagne: deux lieux gratuits pour les tout-petits | parentalite | Bastia, Haute-Corse, Corse
- /articles/parentalite/laep-a-caen-4-lieux-pour-venir-avec-un-enfant-sans-inscription/ | LAEP à Caen: 4 lieux pour venir avec un enfant sans inscription | parentalite | Caen, Calvados, Normandie
- /articles/evenements/court-circuit-2026-a-annecy-en-famille-spectacles-tarifs-et-conseils/ | Court Circuit 2026 à Annecy en famille: spectacles, tarifs et conseils | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | ALFest 2026 à Annecy en famille: horaires, jeux et braderie | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/fete-du-lac-annecy-2026-en-famille/ | Fête du lac d’Annecy 2026: préparer la soirée avec des enfants | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | Noël des Alpes 2026 à Annecy en famille: marché, patinoire et illuminations | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit/ | LAEP autour d'Annecy: trois lieux pour jouer avec son tout-petit | parentalite | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/vie-pratique/bus-a-annecy-avec-des-enfants-quel-ticket-choisir-et-comment-eviter-les-galeres/ | Bus à Annecy avec des enfants: quel ticket choisir et comment éviter les galères | vie-pratique | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/bons-plans/chamonix-en-famille-sans-voiture-train-gratuit-et-bus-a-prix-reduit-avec-la-carte-d-hote/ | Chamonix en famille sans voiture: train gratuit et bus à prix réduit avec la carte d’hôte | bons-plans | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille/ | Flottins d’Évian 2026: un village de Noël en bois flotté à découvrir en famille | evenements | Évian-les-Bains, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/cuisine/ferme-du-petit-mont-a-bellevaux-en-famille-quelle-formule-choisir/ | Ferme du Petit Mont à Bellevaux en famille: quelle formule choisir ? | cuisine | Bellevaux, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/activites/mer-de-glace-avec-des-enfants-faut-il-descendre-jusqu-a-la-grotte/ | Mer de Glace avec des enfants: faut-il descendre jusqu'à la grotte? | activites | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/voyages/evian-les-bains-en-famille-pendant-3-jours-lac-balades-et-activites-faciles/ | Évian-les-Bains en famille pendant 3 jours: lac, balades et activités faciles | voyages | Évian-les-Bains, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-au-bonheur-des-momes-2026-en-famille/ | Au Bonheur des Mômes 2026: pass, spectacles et journée au Grand-Bornand | evenements | Le Grand-Bornand, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/parentalite/musee-de-la-corse-a-corte-decouvrir-l-ile-en-famille-par-les-objets-du-quotidien/ | Musée de la Corse à Corte: découvrir l’île en famille par les objets du quotidien | parentalite | Corte, Haute-Corse, Corse
- /articles/parentalite/decouvrir-la-bd-avec-ses-enfants-a-angouleme/ | Découvrir la BD avec ses enfants à Angoulême | parentalite | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | Ludothèques du Grand Nancy: où jouer en famille et emprunter des jeux | parentalite | Meurthe-et-Moselle, Grand Est
- /articles/parentalite/a-sainte-rose-decouvrir-la-mangrove-avec-son-enfant-en-pedalo/ | À Sainte-Rose, découvrir la mangrove avec son enfant en pédalo | parentalite | Sainte-Rose, Guadeloupe, Guadeloupe

### Historique Radar lié

- opportunity | /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | 2026-10-20T15:29:27.541Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- opportunity | /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | 2026-10-29T05:28:53.475Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
