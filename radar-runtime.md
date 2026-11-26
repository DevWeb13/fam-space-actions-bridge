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
title: "Forum des Sciences à Villeneuve-d'Ascq en famille: que choisir selon l'âge ?"
subtitle: "Planétarium, expositions et enquêtes: âges, durées, tarifs et programmation"
summary: Dès 2 ans, le Forum des Sciences près de Lille propose ateliers, planétarium et enquêtes. Les âges, durées, tarifs et réservations pour préparer la visite.
slug: forum-des-sciences-a-villeneuve-d-ascq-en-famille-que-choisir-selon-l-age
status: published
publishedAt: 2026-11-02T00:03:12+01:00
updatedAt: 2026-11-11T17:34:51.921Z
category: activites
readingTime: 6
location:
  city: Villeneuve-d'Ascq
  department: Nord
  region: Hauts-de-France
topic:
  key: activites|villeneuve-d-ascq|forum-des-sciences-a-villeneuve-d-ascq-en-famille-que-choisir-selon-l-age|2026
  keywords:
    - Forum des Sciences Villeneuve-d'Ascq en famille
    - planétarium Villeneuve-d'Ascq enfants
    - activités scientifiques enfants Nord
image:
  src: /images/articles/2026/11/forum-des-sciences-a-villeneuve-d-ascq-en-famille-que-choisir-selon-l-age.webp
  alt: Entrée et façade vitrée du Forum départemental des Sciences à Villeneuve-d’Ascq.
sources:
  - title: Forum des Sciences - Planétarium
    url: https://forumdepartementaldessciences.fr/activites/le-planetarium/
  - title: Forum des Sciences - Espace d'Atom
    url: https://forumdepartementaldessciences.fr/activites/espace-datom/
  - title: Forum des Sciences - Croque Couleurs
    url: https://forumdepartementaldessciences.fr/activites/croque-couleurs/
  - title: Forum des Sciences - Tous à plumes !
    url: https://forumdepartementaldessciences.fr/activites/tous-a-plumes/
  - title: Forum des Sciences - Boule de plumes
    url: https://forumdepartementaldessciences.fr/evenements/boule-de-plumes/
  - title: Forum des Sciences - Enigma
    url: https://forumdepartementaldessciences.fr/activites/enigma/
  - title: Forum des Sciences - Ouverture et tarifs
    url: https://forumdepartementaldessciences.fr/informations-pratiques/ouverture-et-tarifs/
  - title: Forum des Sciences - Comment venir ?
    url: https://forumdepartementaldessciences.fr/informations-pratiques/quand-et-comment-venir/
  - title: Forum des Sciences - Accessibilité
    url: https://forumdepartementaldessciences.fr/informations-pratiques/accessibilite/
  - title: Forum des Sciences - Accueil et état de la billetterie
    url: https://forumdepartementaldessciences.fr/
  - title: Forum des Sciences - Ça capte !
    url: https://forumdepartementaldessciences.fr/evenements/ca-capte/
  - title: Forum des Sciences - Ateliers vacances
    url: https://forumdepartementaldessciences.fr/agenda/les-ateliers-vacances/
  - title: Forum des Sciences - Dimanche gratuit du 6 décembre
    url: https://forumdepartementaldessciences.fr/evenements/le-forum-des-sciences-est-gratuit/
  - title: Lille City Pass - Conditions de visite du Forum
    url: https://www.citypass.lillemetropole.fr/fr/prestation/18-visite-du-forum-departemental-des-sciences
affiliate:
  enabled: true
  type: travel
  destination: Villeneuve-d'Ascq
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/activites/(2026)/(11)/forum-des-sciences-a-villeneuve-d-ascq-en-famille-que-choisir-selon-l-age/index.md
  targetSha: 37177db461d236b51527fbf1073f01b565b7590f
  targetUrl: /articles/activites/forum-des-sciences-a-villeneuve-d-ascq-en-famille-que-choisir-selon-l-age/
  decision: Choisir une activité scientifique réellement programmée selon l'âge des enfants, la date et le budget, puis savoir comment réserver.
  affiliationPotential: Conserver les hébergements existants; vérifier le Lille City Pass proposé sur Klook, seulement pertinent pour plusieurs visites.
  gsc:
    retrievedAt: 2026-11-26T07:29:00+01:00
    dataThrough: 2026-11-23
    signal: uncertain
    basis: "Visibilité récente : 37 impressions sur trois jours, puis 5 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-04
    peakEnd: 2026-11-06
    recentStart: 2026-11-21
    recentEnd: 2026-11-23
    peakImpressions: 37
    recentImpressions: 5
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - forum departemental des sciences villeneuve d'ascq
      - forum des sciences
      - forum des sciences lille
      - forum des sciences villeneuve d'ascq
      - forum sciences lille
reviewAt: 2026-12-07
---

À Villeneuve-d'Ascq, près de Lille, le Forum départemental des Sciences permet aux enfants d'explorer les couleurs, les oiseaux, l'astronomie ou des énigmes scientifiques. Certaines activités commencent dès 2 ans, d'autres demandent d'avoir 7, 9 ou 12 ans. Choisissez selon l'âge des enfants et vérifiez la séance réellement programmée à votre date de visite: les ateliers ponctuels ne suivent pas forcément le calendrier des expositions.

## De 2 à 6 ans: trois expériences différentes

**De 2 à 4 ans, l'Espace d'Atom** invite les tout-petits à découvrir les couleurs avec un adulte. Après un temps collectif animé par une médiatrice, ils expérimentent dans de petits ateliers sensoriels à leur rythme. La séance dure **1 heure**, avec **16 participants maximum**. Cette activité est annoncée jusqu'au **17 janvier 2027**. [Découvrir l'Espace d'Atom](https://forumdepartementaldessciences.fr/activites/espace-datom/).

**De 3 à 6 ans, Croque Couleurs** propose une exposition interactive pour jouer avec les couleurs et comprendre comment on les perçoit. La visite est accompagnée par un médiateur, dure **1 h 15** et accueille **16 personnes** par séance. Elle est programmée jusqu'au **17 janvier 2027**. [Voir Croque Couleurs](https://forumdepartementaldessciences.fr/activites/croque-couleurs/).

**Tous à plumes !**, accessible à tous les âges, permet de découvrir les oiseaux en **1 h 15 environ**. L'exposition reste annoncée jusqu'au **29 août 2027**. Elle ne doit pas être confondue avec **Boule de plumes**, atelier sensoriel d'**1 heure** pour les **3 à 6 ans accompagnés**, limité à **16 personnes** et inclus dans le billet de l'exposition. L'[agenda des vacances](https://forumdepartementaldessciences.fr/agenda/les-ateliers-vacances/) annonce de nouvelles séances du 22 au 24 et du 29 au 31 décembre 2026, à 14 h 15, 15 h 30 et 16 h 45. Confirmez les créneaux des veilles de fête auprès de l'accueil. [Découvrir Tous à plumes !](https://forumdepartementaldessciences.fr/activites/tous-a-plumes/).

Pour un enfant qui découvre le lieu, une seule de ces activités peut suffire. Tous à plumes ! est particulièrement intéressant si les frères et sœurs n'ont pas le même âge.

## Dès 3 ans: le planétarium

Rénové en 2025, le **planétarium** projette le ciel étoilé sous un dôme immersif, avec l'accompagnement d'un médiateur. Le programme varie selon l'âge:

- **3 à 6 ans:** « Le petit ciel étoilé », une découverte du ciel en **45 minutes**.
- **Dès 6 ans:** « À la belle étoile », autour des constellations, en **1 heure**.
- **Dès 9 ans:** « Le ciel ce soir », pour apprendre à reconnaître les astres, en **1 heure**.

D'autres séances existent. Vérifiez celle proposée à la date choisie, car toutes ne conviennent pas aux plus jeunes. **L'accès est refusé après le début de la projection**: arrivez en avance. [Consulter les programmes du planétarium](https://forumdepartementaldessciences.fr/activites/le-planetarium/).

## Dès 7 ans: résoudre une enquête Enigma

Avec **Enigma**, les enfants observent, manipulent et raisonnent pour résoudre une investigation scientifique. Trois enquêtes alternent, **une seule étant proposée chaque semaine**:

- **« Codes secrets »**, dès **7 ans**: messages chiffrés et cryptologie.
- **« Illusions retrouvées »**, dès **9 ans**: vision, œil et cerveau.
- **« En quête d'évolution »**, dès **12 ans**: biodiversité et évolution des espèces.

Chaque enquête dure **1 h 15** et accueille au maximum **20 participants**. Les créneaux habituels sont **14 h 45 et 16 h 15** les jours d'ouverture au public. Le thème réellement programmé doit être confirmé auprès de l'accueil, surtout avec un enfant de moins de 12 ans. [Voir les enquêtes Enigma](https://forumdepartementaldessciences.fr/activites/enigma/).

## Dès 9 ans: comprendre le numérique avec Ça capte !

Du 17 octobre 2026 au 29 août 2027, cette exposition gratuite retrace l'évolution des moyens de communication et invite à réfléchir aux usages du numérique à travers des objets et des expériences interactives. Elle convient aux enfants dès 9 ans. [Découvrir Ça capte !](https://forumdepartementaldessciences.fr/evenements/ca-capte/).

L'agenda annonce également deux ateliers gratuits à partir du 23 décembre: La fresque des écrans dès 11 ans et Décrypter l'information à l'ère des réseaux sociaux dès 13 ans. Vérifiez les dates précises et réservez avant de venir.

## Organiser la visite sans courir d'une séance à l'autre

Le Forum accueille les visiteurs individuels **de 14 h à 18 h**. Entre les ateliers guidés, les projections et les enquêtes, il est difficile de tout combiner dans un même après-midi.

Avec plusieurs enfants d'âges différents, vous pouvez choisir l'exposition Tous à plumes !, ouverte à tous, ou prévoir deux activités distinctes si plusieurs adultes peuvent accompagner les enfants. Pour ajouter un planétarium ou une enquête, faites confirmer les horaires et les places disponibles avant de réserver: certaines séances se chevauchent.

## Tarifs: le Pass tribu est-il intéressant ?

Les [tarifs officiels du Forum des Sciences](https://forumdepartementaldessciences.fr/informations-pratiques/ouverture-et-tarifs/) indiquent:

- **Planétarium:** 9 € par adulte, 4 € par enfant jusqu'à 12 ans; tarif réduit de 8 € pour les 13-18 ans.
- **Expositions et Enigma:** 8 € par adulte, gratuit jusqu'à 12 ans; 6 € pour les 13-18 ans.
- **Espace d'Atom:** 5 € par adulte et 5 € par enfant.
- **Pass tribu:** 25 € pour quatre personnes et une activité, ou 35 € pour quatre personnes et deux activités.

**Exemple pour deux adultes et deux enfants de moins de 13 ans:** une exposition seule coûte **16 €** en billets individuels, contre **25 €** avec le Pass tribu. En ajoutant le planétarium pour les quatre, le total individuel atteint **42 €**, contre **35 €** pour le Pass tribu deux activités, si cette combinaison est applicable aux séances retenues. Faites confirmer le tarif exact avant de payer.

Le Forum annonce également la **gratuité pour tous le premier dimanche de chaque mois**. Le dimanche 6 décembre 2026, le programme gratuit annoncé comprend notamment Codes secrets à 14 h 45 et 16 h 15, et Le petit ciel étoilé à 16 h. Les expositions et ateliers pour les plus jeunes sont également programmés. Réservation obligatoire par téléphone. [Consulter le programme du 6 décembre](https://forumdepartementaldessciences.fr/evenements/le-forum-des-sciences-est-gratuit/).

Des gratuités existent sous conditions, notamment pour les bénéficiaires de certains minima sociaux et les personnes en situation de handicap, sur justificatif. Les activités pour les très jeunes enfants peuvent avoir des règles tarifaires particulières.

Si vous avez déjà un Lille City Pass pour plusieurs visites dans la métropole, l'entrée au Forum est incluse selon l'office de tourisme, mais le planétarium reste payant. Ce pass touristique est distinct du Pass tribu. Pour une seule exposition gratuite ou une sortie avec de jeunes enfants, comparez d'abord les billets individuels.

## Réservation, horaires et accès

**La billetterie en ligne fait l'objet d'indications contradictoires sur le site officiel:** la [page des tarifs](https://forumdepartementaldessciences.fr/informations-pratiques/ouverture-et-tarifs/) propose un lien de réservation, tandis que [l'accueil du Forum](https://forumdepartementaldessciences.fr/) annonce son indisponibilité. Pour confirmer le programme, les places et réserver, appelez le **03 59 73 96 00**. La réservation est particulièrement conseillée pour les ateliers limités à 16 places.

Le Forum se situe **1 place François-Mitterrand, 59650 Villeneuve-d'Ascq**. En transports en commun, prenez la **ligne 1 du métro**, arrêt **Villeneuve-d'Ascq - Hôtel de Ville**. En voiture, l'accès indiqué passe par la **sortie 3 « Hôtel de Ville » de la RN 227**. [Voir les indications d'accès](https://forumdepartementaldessciences.fr/informations-pratiques/quand-et-comment-venir/).

En période scolaire, le lieu ouvre **le mercredi, le week-end et les jours fériés de 14 h à 18 h**. Pendant les vacances scolaires, il ouvre **du mardi au dimanche de 14 h à 18 h**. Il ferme le lundi, ainsi que les **1er janvier, 1er mai et 25 décembre**.

Les expositions sont annoncées accessibles aux personnes à mobilité réduite, avec un ascenseur dans le bâtiment. Le planétarium dispose de **quatre emplacements PMR**. Pour un besoin d'accueil particulier, contactez l'équipe avant la visite. [Consulter les informations d'accessibilité](https://forumdepartementaldessciences.fr/informations-pratiques/accessibilite/).

## Un week-end à Villeneuve-d'Ascq ou à Lille ?

Si vous venez de plus loin et souhaitez prolonger la sortie, deux types d'hébergement sont proposés sur Booking.com:

- Pour un séjour à l'hôtel, le [B&B HOTEL Lille Villeneuve d'Ascq Grand Stade](https://www.booking.com/hotel/fr/b-amp-b-lille-grand-stade.fr.html) dispose notamment de chambres triples. Vérifiez la configuration nécessaire si vous voyagez à quatre.
- Pour une famille de quatre personnes souhaitant cuisiner sur place, [L'Appart Lille Métropole Arena](https://www.booking.com/hotel/fr/appart-lille-metropole-arena.fr.html) propose un appartement de deux chambres avec cuisine équipée.

Les capacités, tarifs et disponibilités dépendent des dates et de l'âge des enfants. Vous pouvez aussi préparer d'autres découvertes avec notre [guide de Lille en famille](https://www.fam-space.fr/destinations/hauts-de-france/nord/lille/).

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/activites/(2026)/(11)/forum-des-sciences-a-villeneuve-d-ascq-en-famille-que-choisir-selon-l-age/index.md

---
title: "Forum des Sciences à Villeneuve-d'Ascq en famille: que choisir selon l'âge ?"
subtitle: "Planétarium, expositions et enquêtes: âges, durées, tarifs et programmation"
summary: Dès 2 ans, le Forum des Sciences près de Lille propose ateliers, planétarium et enquêtes. Les âges, durées, tarifs et réservations pour préparer la visite.
slug: forum-des-sciences-a-villeneuve-d-ascq-en-famille-que-choisir-selon-l-age
status: published
publishedAt: 2026-11-02T00:03:12+01:00
updatedAt: 2026-11-11T17:34:51.921Z
category: activites
readingTime: 6
location:
  city: Villeneuve-d'Ascq
  department: Nord
  region: Hauts-de-France
topic:
  key: activites|villeneuve-d-ascq|forum-des-sciences-a-villeneuve-d-ascq-en-famille-que-choisir-selon-l-age|2026
  keywords:
    - Forum des Sciences Villeneuve-d'Ascq en famille
    - planétarium Villeneuve-d'Ascq enfants
    - activités scientifiques enfants Nord
image:
  src: /images/articles/2026/11/forum-des-sciences-a-villeneuve-d-ascq-en-famille-que-choisir-selon-l-age.webp
  alt: Entrée et façade vitrée du Forum départemental des Sciences à Villeneuve-d’Ascq.
sources:
  - title: Forum des Sciences - Planétarium
    url: https://forumdepartementaldessciences.fr/activites/le-planetarium/
  - title: Forum des Sciences - Espace d'Atom
    url: https://forumdepartementaldessciences.fr/activites/espace-datom/
  - title: Forum des Sciences - Croque Couleurs
    url: https://forumdepartementaldessciences.fr/activites/croque-couleurs/
  - title: Forum des Sciences - Tous à plumes !
    url: https://forumdepartementaldessciences.fr/activites/tous-a-plumes/
  - title: Forum des Sciences - Boule de plumes
    url: https://forumdepartementaldessciences.fr/evenements/boule-de-plumes/
  - title: Forum des Sciences - Enigma
    url: https://forumdepartementaldessciences.fr/activites/enigma/
  - title: Forum des Sciences - Ouverture et tarifs
    url: https://forumdepartementaldessciences.fr/informations-pratiques/ouverture-et-tarifs/
  - title: Forum des Sciences - Comment venir ?
    url: https://forumdepartementaldessciences.fr/informations-pratiques/quand-et-comment-venir/
  - title: Forum des Sciences - Accessibilité
    url: https://forumdepartementaldessciences.fr/informations-pratiques/accessibilite/
  - title: Forum des Sciences - Accueil et état de la billetterie
    url: https://forumdepartementaldessciences.fr/
affiliate:
  enabled: true
  type: travel
  destination: Villeneuve-d'Ascq
---

À Villeneuve-d'Ascq, près de Lille, le Forum départemental des Sciences permet aux enfants d'explorer les couleurs, les oiseaux, l'astronomie ou des énigmes scientifiques. Certaines activités commencent dès 2 ans, d'autres demandent d'avoir 7, 9 ou 12 ans. Choisissez selon l'âge des enfants et vérifiez la séance réellement programmée à votre date de visite: les ateliers ponctuels ne suivent pas forcément le calendrier des expositions.

## De 2 à 6 ans: trois expériences différentes

**De 2 à 4 ans, l'Espace d'Atom** invite les tout-petits à découvrir les couleurs avec un adulte. Après un temps collectif animé par une médiatrice, ils expérimentent dans de petits ateliers sensoriels à leur rythme. La séance dure **1 heure**, avec **16 participants maximum**. Cette activité est annoncée jusqu'au **17 janvier 2027**. [Découvrir l'Espace d'Atom](https://forumdepartementaldessciences.fr/activites/espace-datom/).

**De 3 à 6 ans, Croque Couleurs** propose une exposition interactive pour jouer avec les couleurs et comprendre comment on les perçoit. La visite est accompagnée par un médiateur, dure **1 h 15** et accueille **16 personnes** par séance. Elle est programmée jusqu'au **17 janvier 2027**. [Voir Croque Couleurs](https://forumdepartementaldessciences.fr/activites/croque-couleurs/).

**Tous à plumes !**, accessible à tous les âges, permet de découvrir les oiseaux en **1 h 15 environ**. L'exposition reste annoncée jusqu'au **29 août 2027**. Elle ne doit pas être confondue avec **Boule de plumes**, atelier sensoriel d'**1 heure** pour les **3 à 6 ans accompagnés**, limité à **16 personnes** et inclus dans le billet de l'exposition. La [programmation officielle de Boule de plumes](https://forumdepartementaldessciences.fr/evenements/boule-de-plumes/) indiquait des séances **du 20 octobre au 1er novembre 2026**: aucun créneau régulier après cette période n'est confirmé sur cette page. Demandez à l'accueil si l'atelier est reprogrammé. [Découvrir Tous à plumes !](https://forumdepartementaldessciences.fr/activites/tous-a-plumes/).

Pour un enfant qui découvre le lieu, une seule de ces activités peut suffire. Tous à plumes ! est particulièrement intéressant si les frères et sœurs n'ont pas le même âge.

## Dès 3 ans: le planétarium

Rénové en 2025, le **planétarium** projette le ciel étoilé sous un dôme immersif, avec l'accompagnement d'un médiateur. Le programme varie selon l'âge:

- **3 à 6 ans:** « Le petit ciel étoilé », une découverte du ciel en **45 minutes**.
- **Dès 6 ans:** « À la belle étoile », autour des constellations, en **1 heure**.
- **Dès 9 ans:** « Le ciel ce soir », pour apprendre à reconnaître les astres, en **1 heure**.

D'autres séances existent. Vérifiez celle proposée à la date choisie, car toutes ne conviennent pas aux plus jeunes. **L'accès est refusé après le début de la projection**: arrivez en avance. [Consulter les programmes du planétarium](https://forumdepartementaldessciences.fr/activites/le-planetarium/).

## Dès 7 ans: résoudre une enquête Enigma

Avec **Enigma**, les enfants observent, manipulent et raisonnent pour résoudre une investigation scientifique. Trois enquêtes alternent, **une seule étant proposée chaque semaine**:

- **« Codes secrets »**, dès **7 ans**: messages chiffrés et cryptologie.
- **« Illusions retrouvées »**, dès **9 ans**: vision, œil et cerveau.
- **« En quête d'évolution »**, dès **12 ans**: biodiversité et évolution des espèces.

Chaque enquête dure **1 h 15** et accueille au maximum **20 participants**. Les créneaux habituels sont **14 h 45 et 16 h 15** les jours d'ouverture au public. Le thème réellement programmé doit être confirmé auprès de l'accueil, surtout avec un enfant de moins de 12 ans. [Voir les enquêtes Enigma](https://forumdepartementaldessciences.fr/activites/enigma/).

## Organiser la visite sans courir d'une séance à l'autre

Le Forum accueille les visiteurs individuels **de 14 h à 18 h**. Entre les ateliers guidés, les projections et les enquêtes, il est difficile de tout combiner dans un même après-midi.

Avec plusieurs enfants d'âges différents, vous pouvez choisir l'exposition Tous à plumes !, ouverte à tous, ou prévoir deux activités distinctes si plusieurs adultes peuvent accompagner les enfants. Pour ajouter un planétarium ou une enquête, faites confirmer les horaires et les places disponibles avant de réserver: certaines séances se chevauchent.

## Tarifs: le Pass tribu est-il intéressant ?

Les [tarifs officiels du Forum des Sciences](https://forumdepartementaldessciences.fr/informations-pratiques/ouverture-et-tarifs/) indiquent:

- **Planétarium:** 9 € par adulte, 4 € par enfant jusqu'à 12 ans; tarif réduit de 8 € pour les 13-18 ans.
- **Expositions et Enigma:** 8 € par adulte, gratuit jusqu'à 12 ans; 6 € pour les 13-18 ans.
- **Espace d'Atom:** 5 € par adulte et 5 € par enfant.
- **Pass tribu:** 25 € pour quatre personnes et une activité, ou 35 € pour quatre personnes et deux activités.

**Exemple pour deux adultes et deux enfants de moins de 13 ans:** une exposition seule coûte **16 €** en billets individuels, contre **25 €** avec le Pass tribu. En ajoutant le planétarium pour les quatre, le total individuel atteint **42 €**, contre **35 €** pour le Pass tribu deux activités, si cette combinaison est applicable aux séances retenues. Faites confirmer le tarif exact avant de payer.

Le Forum annonce également la **gratuité pour tous le premier dimanche de chaque mois**. Des gratuités existent sous conditions, notamment pour les bénéficiaires de certains minima sociaux et les personnes en situation de handicap, sur justificatif. Les activités pour les très jeunes enfants peuvent avoir des règles tarifaires particulières.

## Réservation, horaires et accès

**La billetterie en ligne fait l'objet d'indications contradictoires sur le site officiel:** la [page des tarifs](https://forumdepartementaldessciences.fr/informations-pratiques/ouverture-et-tarifs/) propose un lien de réservation, tandis que [l'accueil du Forum](https://forumdepartementaldessciences.fr/) annonce son indisponibilité. Pour confirmer le programme, les places et réserver, appelez le **03 59 73 96 00**. La réservation est particulièrement conseillée pour les ateliers limités à 16 places.

Le Forum se situe **1 place François-Mitterrand, 59650 Villeneuve-d'Ascq**. En transports en commun, prenez la **ligne 1 du métro**, arrêt **Villeneuve-d'Ascq - Hôtel de Ville**. En voiture, l'accès indiqué passe par la **sortie 3 « Hôtel de Ville » de la RN 227**. [Voir les indications d'accès](https://forumdepartementaldessciences.fr/informations-pratiques/quand-et-comment-venir/).

En période scolaire, le lieu ouvre **le mercredi, le week-end et les jours fériés de 14 h à 18 h**. Pendant les vacances scolaires, il ouvre **du mardi au dimanche de 14 h à 18 h**. Il ferme le lundi, ainsi que les **1er janvier, 1er mai et 25 décembre**.

Les expositions sont annoncées accessibles aux personnes à mobilité réduite, avec un ascenseur dans le bâtiment. Le planétarium dispose de **quatre emplacements PMR**. Pour un besoin d'accueil particulier, contactez l'équipe avant la visite. [Consulter les informations d'accessibilité](https://forumdepartementaldessciences.fr/informations-pratiques/accessibilite/).

## Un week-end à Villeneuve-d'Ascq ou à Lille ?

Si vous venez de plus loin et souhaitez prolonger la sortie, deux types d'hébergement sont proposés sur Booking.com:

- Pour un séjour à l'hôtel, le [B&B HOTEL Lille Villeneuve d'Ascq Grand Stade](https://www.booking.com/hotel/fr/b-amp-b-lille-grand-stade.fr.html) dispose notamment de chambres triples. Vérifiez la configuration nécessaire si vous voyagez à quatre.
- Pour une famille de quatre personnes souhaitant cuisiner sur place, [L'Appart Lille Métropole Arena](https://www.booking.com/hotel/fr/appart-lille-metropole-arena.fr.html) propose un appartement de deux chambres avec cuisine équipée.

Les capacités, tarifs et disponibilités dépendent des dates et de l'âge des enfants. Vous pouvez aussi préparer d'autres découvertes avec notre [guide de Lille en famille](https://www.fam-space.fr/destinations/hauts-de-france/nord/lille/).

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/parentalite/espace-mendes-france-a-poitiers-en-famille-que-faire-selon-l-age/ | Espace Mendès France à Poitiers en famille: que faire selon l’âge ? | parentalite | Poitiers, Vienne, Nouvelle-Aquitaine
- /articles/evenements/noel-d-autrefois-2026-au-musee-de-plein-air-quel-jour-venir-en-famille/ | Noël d’autrefois 2026 à Villeneuve-d’Ascq: dates, ateliers et accès en famille | evenements | Villeneuve-d'Ascq, Nord, Hauts-de-France
- /articles/activites/port-aux-cerises-a-draveil-quelle-activite-choisir-selon-l-age-des-enfants/ | Port aux Cerises à Draveil: quelle activité choisir selon l'âge des enfants? | activites | Draveil, Essonne, Île-de-France
- /articles/sorties/cosquer-mediterranee-avec-des-enfants-age-poussette-tarifs/ | Cosquer Méditerranée avec des enfants: que peut-on visiter selon leur âge? | sorties | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/sorties/musee-de-la-grande-guerre-a-meaux-avec-des-enfants-que-voir-selon-leur-age/ | Musée de la Grande Guerre à Meaux avec des enfants: que voir selon leur âge ? | sorties | Meaux, Seine-et-Marne, Île-de-France
- /articles/sorties/cite-du-train-a-mulhouse-en-famille-que-voir-selon-l-age/ | Cité du Train à Mulhouse en famille: que voir selon l’âge ? | sorties | Mulhouse, Haut-Rhin, Grand Est
- /articles/bons-plans/musverre-en-famille-gratuites-et-contes-a-sars-poteries/ | MusVerre en famille: gratuités et contes à Sars-Poteries | bons-plans | Sars-Poteries, Nord, Hauts-de-France
- /articles/voyages/ferry-de-nuit-avec-des-enfants-cabine-ou-fauteuil-que-choisir/ | Ferry de nuit avec des enfants: cabine ou fauteuil, que choisir? | voyages
- /articles/activites/forum-des-sciences-a-villeneuve-d-ascq-en-famille-que-choisir-selon-l-age/ | Forum des Sciences à Villeneuve-d'Ascq en famille: que choisir selon l'âge ? | activites | Villeneuve-d'Ascq, Nord, Hauts-de-France
- /articles/voyages/musee-de-l-illusion-a-lille-une-visite-a-partager-en-famille/ | Musée de l’Illusion à Lille: une visite à partager en famille | voyages | Lille, Nord, Hauts-de-France
- /articles/vie-pratique/aeroport-de-lille-avec-des-enfants-preparer-le-depart-jusqu-a-l-embarquement/ | Aéroport de Lille avec des enfants: préparer le départ jusqu’à l’embarquement | vie-pratique | Lesquin, Nord, Hauts-de-France
- /articles/activites/lewarde-en-famille-decouvrir-la-mine-et-la-vie-des-mineurs/ | Lewarde en famille: découvrir la mine et la vie des mineurs | activites | Lewarde, Nord, Hauts-de-France
- /articles/vie-pratique/transports-gratuits-a-lille-comment-obtenir-le-titre-moins-de-18-ans/ | Transports gratuits à Lille: comment obtenir le titre moins de 18 ans ? | vie-pratique | Nord, Hauts-de-France
- /articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/ | Marché de Noël de Lille 2026 en famille: village, Grande Roue et infos pratiques | evenements | Lille, Nord, Hauts-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-a-la-villa-cavrois-quelle-activite-choisir-selon-l-age/ | Monument jeu d'enfant 2026 à la Villa Cavrois: énigme, mosaïque ou linogravure? | evenements | Croix, Nord, Hauts-de-France
- /articles/voyages/week-end-a-dunkerque-en-famille-port-bateaux-et-plage-sans-courir/ | Week-end à Dunkerque en famille: port, bateaux et plage sans courir | voyages | Dunkerque, Nord, Hauts-de-France
- /articles/sorties/centre-historique-minier-de-lewarde-combien-de-temps-prevoir-avec-des-enfants/ | Centre Historique Minier de Lewarde: combien de temps prévoir avec des enfants | sorties | Lewarde, Nord, Hauts-de-France
- /articles/bons-plans/c-art-tribu-a-lille-quand-l-abonnement-familial-a-65-vaut-le-coup/ | C'ART Tribu à Lille: quand l'abonnement familial à 65 € vaut le coup | bons-plans | Lille, Nord, Hauts-de-France
- /articles/activites/a-pointe-noire-decouvrir-la-riviere-en-famille-avec-l-aquarando-d-acomat/ | À Pointe-Noire, découvrir la rivière en famille avec l’aquarando d’Acomat | activites | Pointe-Noire, Guadeloupe, Guadeloupe
- /articles/activites/musee-de-l-illusion-a-lyon-en-famille-que-voir-et-combien-coute-la-visite/ | Musée de l'Illusion à Lyon en famille: que voir et combien coûte la visite ? | activites | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/activites/parc-animalier-d-auvergne-en-famille-billets-animaux-et-conseils-de-visite/ | Parc animalier d'Auvergne en famille: billets, animaux et conseils de visite | activites | Ardes, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/activites/ferme-des-chanteraines-en-famille-animaux-ateliers-et-balade-gratuite/ | Ferme des Chanteraines en famille: animaux, ateliers et balade gratuite | activites | Villeneuve-la-Garenne, Hauts-de-Seine, Île-de-France

### Historique Radar lié

- opportunity | /articles/sorties/cosquer-mediterranee-avec-des-enfants-age-poussette-tarifs/ | 2026-10-03T11:22:17.769Z
- refresh | /articles/activites/forum-des-sciences-a-villeneuve-d-ascq-en-famille-que-choisir-selon-l-age/ | 2026-11-11T17:34:51.991Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-la-villa-cavrois-quelle-activite-choisir-selon-l-age/ | 2026-10-04T19:31:30.376Z
- opportunity | /articles/evenements/noel-d-autrefois-2026-au-musee-de-plein-air-quel-jour-venir-en-famille/ | 2026-10-29T17:29:29.382Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
