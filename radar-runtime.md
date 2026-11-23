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
title: "Foulée Blanche 2027 en famille: courses, âges, tarifs et programme à Autrans"
subtitle: Du 27 au 31 janvier, les journées scolaires et les courses du dimanche ne s'organisent pas de la même façon.
summary: Quelles courses de la Foulée Blanche 2027 sont accessibles aux enfants ? Dates, âges, tarifs, navette et conseils pour préparer une journée à Autrans.
slug: foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans
status: published
publishedAt: 2026-10-28T05:07:10+01:00
updatedAt: null
eventEndsAt: 2027-01-31
category: evenements
readingTime: 8
location:
  city: Autrans-Méaudre en Vercors
  department: Isère
  region: Auvergne-Rhône-Alpes
topic:
  key: evenements|autrans-meaudre-en-vercors|foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans|2026
  keywords:
    - Foulée Blanche 2027 famille
    - Foulée Blanche Autrans enfants
    - ski de fond Vercors janvier 2027
image:
  src: /images/articles/2026/10/foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans.webp
  alt: La Foulée blanche de 2019 à Autrans, sur les pistes enneigées du Vercors
sources:
  - title: Foulée Blanche - annonce de la 49e édition 2027
    url: https://www.lafouleeblanche.com/49e-foulee-blanche-27-31-janvier-2027-vercors/
  - title: Foulée Blanche - programme 2027
    url: https://www.lafouleeblanche.com/hiver/infos-pratiques/programme/
  - title: Foulée Blanche - distances, âges et horaires des courses
    url: https://www.lafouleeblanche.com/hiver/la-foulee-skating/
  - title: Foulée Blanche - inscriptions et tarifs 2027
    url: https://www.lafouleeblanche.com/hiver/infos-pratiques/inscriptions-hiver/
  - title: Foulée Blanche - informations pratiques et accès
    url: https://www.lafouleeblanche.com/hiver/infos-pratiques/
  - title: Foulée Blanche - Matchy dans l'effort 2027
    url: https://www.lafouleeblanche.com/matchy-dans-leffort-49e-foulee-blanche/
  - title: Office de tourisme du Vercors - Centre sportif nordique d'Autrans
    url: https://www.vercors-experience.com/centre-sportif-nordique-d-autrans.html
affiliate:
  enabled: true
  type: travel
  destination: Autrans-Méaudre en Vercors
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans/index.md
  targetSha: f3b409eeef14b4bf56c1d2c3d53423cd9f60f2bc
  targetUrl: /articles/evenements/foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans/
  decision: Permettre à une famille de passer directement du choix de la distance à l'inscription officielle, avant la fin du tarif promotionnel du marathon le 30 novembre, sans confondre course familiale et journées scolaires.
  affiliationPotential: Conserver les deux hébergements Booking.com à Autrans; aucune billetterie partenaire pertinente confirmée pour l'inscription sportive, qui relève de l'organisateur.
  gsc:
    retrievedAt: 2026-11-23T02:29:06+01:00
    dataThrough: 2026-11-20
    signal: needs_query_check
    basis: "Visibilité récente : 27 impressions sur trois jours, puis 9 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-29
    peakEnd: 2026-10-31
    recentStart: 2026-11-18
    recentEnd: 2026-11-20
    peakImpressions: 27
    recentImpressions: 9
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Foulée Blanche 2027 famille
      - Foulée Blanche Autrans enfants
      - ski de fond Vercors janvier 2027
---

<!-- article-image-credit -->
*Photo: [Patafisik](https://commons.wikimedia.org/wiki/File:Foul%C3%A9e_blanche_2019_abc1.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Autrans, village du massif du Vercors en Isère, la Foulée Blanche réunit chaque hiver des skieurs de fond amateurs et confirmés. Sa 49e édition se tiendra **du mercredi 27 au dimanche 31 janvier 2027**. On peut y venir pour courir en famille, encourager un proche ou profiter de l'ambiance nordique, mais **toutes les journées ne sont pas ouvertes aux inscriptions individuelles**.

Pour une sortie familiale organisée librement, le rendez-vous le plus simple à retenir est **le dimanche 31 janvier**, jour des courses grand public. Les mercredi et jeudi sont consacrés aux établissements scolaires. Voici comment choisir sa journée sans confondre ces formules, selon l'[annonce officielle de l'édition 2027](https://www.lafouleeblanche.com/49e-foulee-blanche-27-31-janvier-2027-vercors/).

## Quel jour venir avec des enfants ?

<!-- article-image-body:01 -->

![Photographie de la Foulée Blanche 2019 à Autrans, lors d'une édition antérieure](/images/articles/2026/10/foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans-body-01.webp)

*Photo: [Patafisik](https://commons.wikimedia.org/wiki/File:Foul%C3%A9e_blanche_2019_abc2.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

**Mercredi 27 janvier - la Foulée des Jeunes.** Cette journée concerne les collégiens, lycéens et étudiants dans le cadre de leurs établissements et des structures participantes. Au programme annoncé: courses de ski nordique de 5 et 10 km, initiation, ateliers sportifs et éducatifs, ainsi que compétition universitaire. Ce n'est pas une journée de courses à laquelle les parents inscrivent librement leurs enfants comme le dimanche.

**Jeudi 28 janvier - la Foulée des Enfants.** Elle s'adresse aux classes de primaire, du CE1 au CM2, avec des parcours annoncés de 1,5 km pour les CE et 3 km pour les CM. L'encadrement et les inscriptions passent par les écoles; la présence d'une course pour enfants ne signifie donc pas qu'une famille peut s'y présenter individuellement.

**Vendredi 29 janvier - retrait des dossards.** Il commence à 14 h. Aucune animation familiale publique n'est annoncée pour ce jour.

**Samedi 30 janvier - l'avant-course.** Le village des partenaires accueille gratuitement les visiteurs de **10 h à 19 h** au gymnase du centre nordique: matériel, produits locaux et univers des sports de plein air. L'organisateur annonce une journée festive, mais indique que **son programme détaillé est encore en construction**. Mieux vaut ne pas planifier le déplacement autour d'une animation précise tant qu'elle n'est pas confirmée.

**Dimanche 31 janvier - les courses ouvertes au public.** Quatre distances sont proposées, avec un village des partenaires gratuit de **7 h à 16 h** et des remises de prix à partir de 14 h.

Les horaires et la distinction entre les journées figurent dans le [programme officiel 2027](https://www.lafouleeblanche.com/hiver/infos-pratiques/programme/).

## Quelle distance choisir en famille le dimanche ?

Les courses se disputent en **style libre**: technique classique ou skating sont autorisés. Même le 5 km demande toutefois de savoir avancer, freiner et gérer son effort sur des skis de fond.

- **5 km, départ à 10 h 30:** ouvert dès **6 ans le jour de la course**. Les enfants de moins de 8 ans doivent être accompagnés d'un adulte et effectuer le parcours **sur leurs propres skis**, pas portés sur le dos, comme le précise le [règlement officiel](https://www.lafouleeblanche.com/hiver/infos-pratiques/). C'est le choix le plus raisonnable pour une première participation, à condition d'avoir déjà pratiqué.
- **10 km, départ à 10 h 20:** accessible dès **10 ans**. Il convient plutôt à un enfant qui maîtrise déjà les bases et peut tenir la distance.
- **21 km, départ à 10 h 10:** accessible dès **16 ans**. Il s'adresse à des skieurs endurants, pas à une découverte familiale improvisée.
- **42 km, départ à 10 h:** marathon destiné aux skieurs entraînés, à partir de la catégorie Senior, avec conditions de licence ou de ticket course, formalités de santé et barrières horaires.

Ces conditions sont précisées sur la [page des courses du dimanche](https://www.lafouleeblanche.com/hiver/la-foulee-skating/). Le site officiel affiche **20 km** dans certains tableaux de tarifs et d'horaires, mais la page détaillée des courses et le règlement 2027 indiquent **21 km**. C'est cette distance qui est retenue ici; une confirmation de l'organisateur reste utile avant l'inscription.

Pour un enfant qui ne sait pas encore skier, assister à la course et visiter le village des partenaires est une meilleure option que l'inscrire sur 5 km. Les tracés définitifs ne seront annoncés qu'environ **dix jours avant l'épreuve**, en fonction de l'enneigement: ni le dénivelé ni les conditions de piste ne peuvent être garantis aujourd'hui.

## Combien coûte une inscription en 2027 ?

**Les inscriptions sont ouvertes en ligne depuis le 1er novembre 2026.** Après avoir choisi la distance et vérifié l'âge du participant, accédez à la [billetterie officielle de la Foulée Blanche 2027](https://www.lafouleeblanche.com/hiver/infos-pratiques/inscriptions-hiver/) puis au bouton « Je m'inscris en ligne ». Les tarifs généraux ci-dessous s'appliquent jusqu'au 26 janvier 2027, sauf promotion spécifique du 42 km:

- **5 km: 14 €**, ou **10 € pour les moins de 8 ans**;
- **10 km: 17 €**;
- **21 km: 28 €**;
- **42 km: 40 € pour les licenciés avec Carte Neige et 57 € pour les non-licenciés** pendant la promotion du 1er au 30 novembre, puis respectivement **44 € et 61 €** à partir du 1er décembre.

Exemple concret: **deux adultes et deux enfants de 6 et 9 ans sur le 5 km paieraient 52 €** aux tarifs généraux (14 + 14 + 10 + 14 €), hors location de matériel, transport et repas. L'enfant de 6 ans doit skier avec un adulte.

Une **majoration débute le 27 janvier 2027**: 20 € sur le 5 km (le tarif des moins de 8 ans reste à 10 €), 23 € sur le 10 km et 38 € sur le 21 km. Pour le 42 km, les tarifs tardifs annoncés sont de 56 € et 73 € selon la licence. L'organisateur affiche désormais les tarifs généraux **jusqu'au 26 janvier inclus**. Vérifiez néanmoins le montant récapitulatif avant de payer.

**Clôture des inscriptions: samedi 30 janvier à 19 h.** Pour le 42 km, le tarif promotionnel se termine **le 30 novembre 2026**: mieux vaut s'inscrire avant cette date pour bénéficier du prix annoncé. Les formalités médicales spécifiques concernent le 42 km. En cas d'annulation pour force majeure, notamment faute de neige, l'organisateur annonce un remboursement intégral des inscriptions. Toutes les modalités figurent sur la [page officielle des inscriptions et tarifs](https://www.lafouleeblanche.com/hiver/infos-pratiques/inscriptions-hiver/).

## Courir en « tribu » avec Matchy: qu'est-ce que cela change ?

L'opération **« Matchy dans l'effort »** permet à une famille ou à un groupe d'amis de participer sous un même nom, sans obligation de choisir tous la même distance. La création de la tribu est **gratuite**, mais **chaque personne règle sa propre inscription à la course**.

Il faut créer le groupe depuis l'espace d'inscription, signaler sa participation à l'opération Matchy Vercors, puis partager le lien d'invitation. Deux distinctions récompensent la tribu la plus nombreuse et celle qui cumule le plus de kilomètres. Le [mode d'emploi Matchy publié le 19 octobre 2026](https://www.lafouleeblanche.com/matchy-dans-leffort-49e-foulee-blanche/) détaille la procédure.

Cette formule est intéressante si certains membres skient 5 km et d'autres 10 km ou davantage. Elle ne dispense ni des conditions d'âge ni de l'accompagnement des plus jeunes.

## Se rendre à Autrans et organiser la journée

<!-- article-image-body:02 -->

![Panneau de la Foulée Blanche entre Autrans et le pas de Bellecombe, photographié hors saison](/images/articles/2026/10/foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans-body-02.webp)

*Photo: [Patafisik](https://commons.wikimedia.org/wiki/File:Panneau_foul%C3%A9e_blanche_2.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Le départ et l'arrivée des courses du dimanche sont prévus au **Centre sportif nordique d'Autrans**. Les dossards ne sont pas envoyés: retrait sur place **vendredi de 14 h à 18 h, samedi de 10 h à 19 h ou dimanche de 7 h à 10 h**. Venir la veille peut éviter de cumuler trajet, retrait et équipement juste avant les départs.

**Sans voiture, une navette gratuite est annoncée pour le dimanche uniquement.** Elle part de **Fontaine, parking d'Auchan près du tram A « La Poya », à 7 h 30**, avec un arrêt au parking-relais Sassenage Jean-Prévost. Retour depuis Autrans à **15 h 30**. La [réservation de la navette](https://www.lafouleeblanche.com/hiver/infos-pratiques/inscriptions-hiver/) est **obligatoire** et les places sont limitées. Les familles engagées sur les longues distances doivent vérifier que l'horaire de retour leur convient.

En voiture, l'organisateur indique des zones de stationnement autour du village et demande de limiter les déplacements. Il faut tenir compte des conditions hivernales et des éventuelles consignes de circulation propres au jour de l'épreuve. Le détail des parkings, de la navette et des dossards est regroupé dans les [informations pratiques officielles](https://www.lafouleeblanche.com/hiver/infos-pratiques/).

### Skis, repas et hébergement: ce qu'il faut anticiper

Pour courir, il faut des skis de fond, chaussures et bâtons adaptés à la taille et à la pratique de chacun, ainsi que des vêtements chauds permettant de bouger. L'[office de tourisme du Vercors confirme la location de matériel de ski de fond au Centre sportif nordique d'Autrans](https://www.vercors-experience.com/centre-sportif-nordique-d-autrans.html), au **138 voie de la Foulée Blanche**, sous réserve d'ouverture liée à l'enneigement. **Contact: 04 76 95 31 76.** Réserver ou confirmer le matériel à l'avance est préférable, surtout pour les pointures d'enfants.

Un food-truck et un stand de ravioles solidaires sont annoncés au centre nordique, avec des ravitaillements sur les parcours les plus longs. Pour une famille, prévoir également de l'eau et un encas évite de dépendre exclusivement des stands, dont les horaires peuvent varier.

Enfin, un séjour du samedi au dimanche permet de récupérer les dossards, de voir le village des partenaires et de partir plus sereinement le lendemain. Les hébergements ne sont pas compris dans l'inscription.

### Où dormir à Autrans pour le départ du dimanche ?

Deux appartements avec cuisine et rangement des skis peuvent simplifier le week-end, selon la taille de la famille:

- Pour **quatre personnes**, l'[Appartement cosy à Autrans sur Booking.com](https://www.booking.com/hotel/fr/studio-autrans-1-piece-4-personnes-fr-1-737-50.fr.html) comprend un canapé convertible deux places, deux lits superposés, une kitchenette, un placard à skis et un parking. La caution annoncée est de 500 €, et le linge peut entraîner des frais supplémentaires.
- Pour **cinq personnes**, l'[appartement de la résidence Les Éperouses sur Booking.com](https://www.booking.com/hotel/fr/autrans-5-pers-40-m2-2-1-fr-1-737-32.fr.html) comprend une chambre, des couchages supplémentaires dans le séjour, une cuisine, un placard à skis et un parking. La caution annoncée est de 300 €, avec des prestations de linge potentiellement en supplément.

Ces deux logements se trouvent à Autrans, près des pistes de ski de fond, mais **leur disponibilité pour la nuit du 30 au 31 janvier 2027 n'est pas confirmée**. Vérifiez le prix total, les horaires de remise des clés, les couchages et les conditions d'annulation avant de réserver. Pour comparer les critères d'une location familiale dans le massif, notre [guide des maisons de vacances à Lans-en-Vercors](https://www.fam-space.fr/articles/maison/maison-de-vacances-a-lans-en-vercors-en-famille-les-criteres-qui-changent-vraiment-le-sejour/) peut aussi aider; Lans-en-Vercors reste toutefois une autre commune.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans/index.md

---
title: "Foulée Blanche 2027 en famille: courses, âges, tarifs et programme à Autrans"
subtitle: Du 27 au 31 janvier, les journées scolaires et les courses du dimanche ne s'organisent pas de la même façon.
summary: Quelles courses de la Foulée Blanche 2027 sont accessibles aux enfants ? Dates, âges, tarifs, navette et conseils pour préparer une journée à Autrans.
slug: foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans
status: published
publishedAt: 2026-10-28T05:07:10+01:00
updatedAt: null
eventEndsAt: 2027-01-31
category: evenements
readingTime: 8
location:
  city: Autrans-Méaudre en Vercors
  department: Isère
  region: Auvergne-Rhône-Alpes
topic:
  key: evenements|autrans-meaudre-en-vercors|foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans|2026
  keywords:
    - Foulée Blanche 2027 famille
    - Foulée Blanche Autrans enfants
    - ski de fond Vercors janvier 2027
image:
  src: "/images/articles/2026/10/foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans.webp"
  alt: "La Foulée blanche de 2019 à Autrans, sur les pistes enneigées du Vercors"
sources:
  - title: Foulée Blanche - annonce de la 49e édition 2027
    url: https://www.lafouleeblanche.com/49e-foulee-blanche-27-31-janvier-2027-vercors/
  - title: Foulée Blanche - programme 2027
    url: https://www.lafouleeblanche.com/hiver/infos-pratiques/programme/
  - title: Foulée Blanche - distances, âges et horaires des courses
    url: https://www.lafouleeblanche.com/hiver/la-foulee-skating/
  - title: Foulée Blanche - inscriptions et tarifs 2027
    url: https://www.lafouleeblanche.com/hiver/infos-pratiques/inscriptions-hiver/
  - title: Foulée Blanche - informations pratiques et accès
    url: https://www.lafouleeblanche.com/hiver/infos-pratiques/
  - title: Foulée Blanche - Matchy dans l'effort 2027
    url: https://www.lafouleeblanche.com/matchy-dans-leffort-49e-foulee-blanche/
  - title: Office de tourisme du Vercors - Centre sportif nordique d'Autrans
    url: https://www.vercors-experience.com/centre-sportif-nordique-d-autrans.html
affiliate:
  enabled: true
  type: travel
  destination: Autrans-Méaudre en Vercors
---
<!-- article-image-credit -->
*Photo: [Patafisik](https://commons.wikimedia.org/wiki/File:Foul%C3%A9e_blanche_2019_abc1.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Autrans, village du massif du Vercors en Isère, la Foulée Blanche réunit chaque hiver des skieurs de fond amateurs et confirmés. Sa 49e édition se tiendra **du mercredi 27 au dimanche 31 janvier 2027**. On peut y venir pour courir en famille, encourager un proche ou profiter de l'ambiance nordique, mais **toutes les journées ne sont pas ouvertes aux inscriptions individuelles**.

Pour une sortie familiale organisée librement, le rendez-vous le plus simple à retenir est **le dimanche 31 janvier**, jour des courses grand public. Les mercredi et jeudi sont consacrés aux établissements scolaires. Voici comment choisir sa journée sans confondre ces formules, selon l'[annonce officielle de l'édition 2027](https://www.lafouleeblanche.com/49e-foulee-blanche-27-31-janvier-2027-vercors/).

## Quel jour venir avec des enfants ?

<!-- article-image-body:01 -->

![Photographie de la Foulée Blanche 2019 à Autrans, lors d'une édition antérieure](/images/articles/2026/10/foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans-body-01.webp)

*Photo: [Patafisik](https://commons.wikimedia.org/wiki/File:Foul%C3%A9e_blanche_2019_abc2.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

**Mercredi 27 janvier - la Foulée des Jeunes.** Cette journée concerne les collégiens, lycéens et étudiants dans le cadre de leurs établissements et des structures participantes. Au programme annoncé: courses de ski nordique de 5 et 10 km, initiation, ateliers sportifs et éducatifs, ainsi que compétition universitaire. Ce n'est pas une journée de courses à laquelle les parents inscrivent librement leurs enfants comme le dimanche.

**Jeudi 28 janvier - la Foulée des Enfants.** Elle s'adresse aux classes de primaire, du CE1 au CM2, avec des parcours annoncés de 1,5 km pour les CE et 3 km pour les CM. L'encadrement et les inscriptions passent par les écoles; la présence d'une course pour enfants ne signifie donc pas qu'une famille peut s'y présenter individuellement.

**Vendredi 29 janvier - retrait des dossards.** Il commence à 14 h. Aucune animation familiale publique n'est annoncée pour ce jour.

**Samedi 30 janvier - l'avant-course.** Le village des partenaires accueille gratuitement les visiteurs de **10 h à 19 h** au gymnase du centre nordique: matériel, produits locaux et univers des sports de plein air. L'organisateur annonce une journée festive, mais indique que **son programme détaillé est encore en construction**. Mieux vaut ne pas planifier le déplacement autour d'une animation précise tant qu'elle n'est pas confirmée.

**Dimanche 31 janvier - les courses ouvertes au public.** Quatre distances sont proposées, avec un village des partenaires gratuit de **7 h à 16 h** et des remises de prix à partir de 14 h.

Les horaires et la distinction entre les journées figurent dans le [programme officiel 2027](https://www.lafouleeblanche.com/hiver/infos-pratiques/programme/).

## Quelle distance choisir en famille le dimanche ?

Les courses se disputent en **style libre**: technique classique ou skating sont autorisés. Même le 5 km demande toutefois de savoir avancer, freiner et gérer son effort sur des skis de fond.

- **5 km, départ à 10 h 30:** ouvert dès **6 ans le jour de la course**. Les enfants de moins de 8 ans doivent être accompagnés d'un adulte et effectuer le parcours **sur leurs propres skis**, pas portés sur le dos, comme le précise le [règlement officiel](https://www.lafouleeblanche.com/hiver/infos-pratiques/). C'est le choix le plus raisonnable pour une première participation, à condition d'avoir déjà pratiqué.
- **10 km, départ à 10 h 20:** accessible dès **10 ans**. Il convient plutôt à un enfant qui maîtrise déjà les bases et peut tenir la distance.
- **21 km, départ à 10 h 10:** accessible dès **16 ans**. Il s'adresse à des skieurs endurants, pas à une découverte familiale improvisée.
- **42 km, départ à 10 h:** marathon destiné aux skieurs entraînés, à partir de la catégorie Senior, avec conditions de licence ou de ticket course, formalités de santé et barrières horaires.

Ces conditions sont précisées sur la [page des courses du dimanche](https://www.lafouleeblanche.com/hiver/la-foulee-skating/). Le site officiel affiche **20 km** dans certains tableaux de tarifs et d'horaires, mais la page détaillée des courses et le règlement 2027 indiquent **21 km**. C'est cette distance qui est retenue ici; une confirmation de l'organisateur reste utile avant l'inscription.

Pour un enfant qui ne sait pas encore skier, assister à la course et visiter le village des partenaires est une meilleure option que l'inscrire sur 5 km. Les tracés définitifs ne seront annoncés qu'environ **dix jours avant l'épreuve**, en fonction de l'enneigement: ni le dénivelé ni les conditions de piste ne peuvent être garantis aujourd'hui.

## Combien coûte une inscription en 2027 ?

Les inscriptions ouvrent **dimanche 1er novembre 2026 à 10 h**, en ligne. Pour les tarifs généraux annoncés du 1er novembre au 20 janvier:

- **5 km: 14 €**, ou **10 € pour les moins de 8 ans**;
- **10 km: 17 €**;
- **21 km: 28 €**;
- **42 km: 40 € pour les licenciés avec Carte Neige et 57 € pour les non-licenciés** pendant la promotion du 1er au 30 novembre, puis respectivement **44 € et 61 €** à partir du 1er décembre.

Exemple concret: **deux adultes et deux enfants de 6 et 9 ans sur le 5 km paieraient 52 €** aux tarifs généraux (14 + 14 + 10 + 14 €), hors location de matériel, transport et repas. L'enfant de 6 ans doit skier avec un adulte.

Une **majoration débute le 27 janvier 2027**: 20 € sur le 5 km (le tarif des moins de 8 ans reste à 10 €), 23 € sur le 10 km et 38 € sur le 21 km. Pour le 42 km, les tarifs tardifs annoncés sont de 56 € et 73 € selon la licence. Le tableau officiel laisse un intervalle non explicité **du 21 au 26 janvier**: mieux vaut vérifier le prix affiché au moment du paiement plutôt que supposer le tarif applicable à ces dates.

**Clôture des inscriptions: samedi 30 janvier à 19 h.** Les formalités médicales spécifiques concernent le 42 km. En cas d'annulation pour force majeure, notamment faute de neige, l'organisateur annonce un remboursement intégral des inscriptions. Toutes les modalités figurent sur la [page officielle des inscriptions et tarifs](https://www.lafouleeblanche.com/hiver/infos-pratiques/inscriptions-hiver/).

## Courir en « tribu » avec Matchy: qu'est-ce que cela change ?

L'opération **« Matchy dans l'effort »** permet à une famille ou à un groupe d'amis de participer sous un même nom, sans obligation de choisir tous la même distance. La création de la tribu est **gratuite**, mais **chaque personne règle sa propre inscription à la course**.

Il faut créer le groupe depuis l'espace d'inscription, signaler sa participation à l'opération Matchy Vercors, puis partager le lien d'invitation. Deux distinctions récompensent la tribu la plus nombreuse et celle qui cumule le plus de kilomètres. Le [mode d'emploi Matchy publié le 19 octobre 2026](https://www.lafouleeblanche.com/matchy-dans-leffort-49e-foulee-blanche/) détaille la procédure.

Cette formule est intéressante si certains membres skient 5 km et d'autres 10 km ou davantage. Elle ne dispense ni des conditions d'âge ni de l'accompagnement des plus jeunes.

## Se rendre à Autrans et organiser la journée

<!-- article-image-body:02 -->

![Panneau de la Foulée Blanche entre Autrans et le pas de Bellecombe, photographié hors saison](/images/articles/2026/10/foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans-body-02.webp)

*Photo: [Patafisik](https://commons.wikimedia.org/wiki/File:Panneau_foul%C3%A9e_blanche_2.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Le départ et l'arrivée des courses du dimanche sont prévus au **Centre sportif nordique d'Autrans**. Les dossards ne sont pas envoyés: retrait sur place **vendredi de 14 h à 18 h, samedi de 10 h à 19 h ou dimanche de 7 h à 10 h**. Venir la veille peut éviter de cumuler trajet, retrait et équipement juste avant les départs.

**Sans voiture, une navette gratuite est annoncée pour le dimanche uniquement.** Elle part de **Fontaine, parking d'Auchan près du tram A « La Poya », à 7 h 30**, avec un arrêt au parking-relais Sassenage Jean-Prévost. Retour depuis Autrans à **15 h 30**. La [réservation de la navette](https://www.lafouleeblanche.com/hiver/infos-pratiques/inscriptions-hiver/) est **obligatoire** et les places sont limitées. Les familles engagées sur les longues distances doivent vérifier que l'horaire de retour leur convient.

En voiture, l'organisateur indique des zones de stationnement autour du village et demande de limiter les déplacements. Il faut tenir compte des conditions hivernales et des éventuelles consignes de circulation propres au jour de l'épreuve. Le détail des parkings, de la navette et des dossards est regroupé dans les [informations pratiques officielles](https://www.lafouleeblanche.com/hiver/infos-pratiques/).

### Skis, repas et hébergement: ce qu'il faut anticiper

Pour courir, il faut des skis de fond, chaussures et bâtons adaptés à la taille et à la pratique de chacun, ainsi que des vêtements chauds permettant de bouger. L'[office de tourisme du Vercors confirme la location de matériel de ski de fond au Centre sportif nordique d'Autrans](https://www.vercors-experience.com/centre-sportif-nordique-d-autrans.html), au **138 voie de la Foulée Blanche**, sous réserve d'ouverture liée à l'enneigement. **Contact: 04 76 95 31 76.** Réserver ou confirmer le matériel à l'avance est préférable, surtout pour les pointures d'enfants.

Un food-truck et un stand de ravioles solidaires sont annoncés au centre nordique, avec des ravitaillements sur les parcours les plus longs. Pour une famille, prévoir également de l'eau et un encas évite de dépendre exclusivement des stands, dont les horaires peuvent varier.

Enfin, un séjour du samedi au dimanche permet de récupérer les dossards, de voir le village des partenaires et de partir plus sereinement le lendemain. Les hébergements ne sont pas compris dans l'inscription.

### Où dormir à Autrans pour le départ du dimanche ?

Deux appartements avec cuisine et rangement des skis peuvent simplifier le week-end, selon la taille de la famille:

- Pour **quatre personnes**, l'[Appartement cosy à Autrans sur Booking.com](https://www.booking.com/hotel/fr/studio-autrans-1-piece-4-personnes-fr-1-737-50.fr.html) comprend un canapé convertible deux places, deux lits superposés, une kitchenette, un placard à skis et un parking. La caution annoncée est de 500 €, et le linge peut entraîner des frais supplémentaires.
- Pour **cinq personnes**, l'[appartement de la résidence Les Éperouses sur Booking.com](https://www.booking.com/hotel/fr/autrans-5-pers-40-m2-2-1-fr-1-737-32.fr.html) comprend une chambre, des couchages supplémentaires dans le séjour, une cuisine, un placard à skis et un parking. La caution annoncée est de 300 €, avec des prestations de linge potentiellement en supplément.

Ces deux logements se trouvent à Autrans, près des pistes de ski de fond, mais **leur disponibilité pour la nuit du 30 au 31 janvier 2027 n'est pas confirmée**. Vérifiez le prix total, les horaires de remise des clés, les couchages et les conditions d'annulation avant de réserver. Pour comparer les critères d'une location familiale dans le massif, notre [guide des maisons de vacances à Lans-en-Vercors](https://www.fam-space.fr/articles/maison/maison-de-vacances-a-lans-en-vercors-en-famille-les-criteres-qui-changent-vraiment-le-sejour/) peut aussi aider; Lans-en-Vercors reste toutefois une autre commune.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | Foire de Grenoble 2026 en famille: jours gratuits, programme et tarifs | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/maison/maison-de-vacances-a-lans-en-vercors-en-famille-les-criteres-qui-changent-vraiment-le-sejour/ | Maison de vacances à Lans-en-Vercors en famille: les critères qui changent vraiment le séjour | maison | Lans-en-Vercors, Isère, Auvergne-Rhône-Alpes
- /articles/voyages/les-rousses-en-hiver-avec-des-enfants-ski-luge-et-sorties-sans-neige/ | Les Rousses en hiver avec des enfants: ski, luge et sorties sans neige | voyages | Jura, Bourgogne-Franche-Comté
- /articles/evenements/fete-patronale-sainte-marie-martinique-2026/ | Fête patronale de Sainte-Marie en Martinique 2026: programme des 15 et 16 août | evenements | Sainte-Marie, Martinique, Martinique
- /articles/evenements/gastronomades-2026-a-angouleme-en-famille-faut-il-prevoir-le-week-end/ | Gastronomades 2026 à Angoulême en famille: programme, tarifs et conseils | evenements | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | Festival BD Colomiers 2026 en famille: programme, tarifs et accès | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/evenements/mucem-a-la-toussaint-2026-quelle-activite-en-ribambelle-choisir-selon-l-age/ | Mucem à la Toussaint 2026: le programme En Ribambelle avec des enfants | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/voyages/bonifacio-en-famille-ou-dormir-selon-votre-programme/ | Bonifacio en famille: où dormir selon votre programme | voyages | Bonifacio, Corse-du-Sud, Corse
- /articles/evenements/foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans/ | Foulée Blanche 2027 en famille: courses, âges, tarifs et programme à Autrans | evenements | Autrans-Méaudre en Vercors, Isère, Auvergne-Rhône-Alpes
- /articles/vie-pratique/transaltitude-hiver-2026-2027-partir-a-la-neige-en-isere-sans-voiture/ | Transaltitude hiver 2026-2027: partir à la neige en Isère sans voiture | vie-pratique | Isère, Auvergne-Rhône-Alpes
- /articles/activites/cremieu-en-famille-balade-gratuite-dans-la-cite-medievale/ | Crémieu en famille: balade gratuite dans la cité médiévale | activites | Crémieu, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | Festival du Film pour Enfants 2026 en Isère: séances, ateliers et tarifs | evenements | Vizille, Isère, Auvergne-Rhône-Alpes
- /articles/voyages/chamrousse-en-famille-quel-secteur-choisir-pour-l-hiver-2026-2027/ | Chamrousse en famille: quel secteur choisir pour l'hiver 2026-2027? | voyages | Chamrousse, Isère, Auvergne-Rhône-Alpes
- /articles/sorties/walibi-rhone-alpes-en-famille-quel-billet-choisir-selon-la-taille-des-enfants/ | Walibi Rhône-Alpes en famille: attractions, tailles et billets en 2026 | sorties | Les Avenières Veyrins-Thuellin, Isère, Auvergne-Rhône-Alpes
- /articles/bons-plans/carte-tattoo-isere-2026-2027-comment-obtenir-60-a-120-pour-les-activites-d-un-collegien/ | Carte Tattoo Isère 2026-2027: comment obtenir 60 à 120 € pour les activités d'un collégien | bons-plans | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-a-grenoble-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP à Grenoble: où aller avec un enfant de moins de 6 ans? | parentalite | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/cuisine/noix-de-grenoble-fraiche-ou-seche-laquelle-choisir-pour-cuisiner/ | Noix de Grenoble fraîche ou sèche: laquelle choisir pour cuisiner? | cuisine | Vinay, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/festival-contes-et-rencontres-2027-en-lozere-quels-spectacles-voir-en-famille/ | Festival Contes et Rencontres 2027 en Lozère: quels spectacles voir en famille ? | evenements | Lozère, Occitanie
- /articles/evenements/lumieres-d-afrique-2026-2027-a-sigean-les-lanternes-en-famille/ | Lumières d’Afrique 2026-2027 à Sigean: les lanternes en famille | evenements | Sigean, Aude, Occitanie
- /articles/evenements/natur-armor-2027-a-paimpol-preparer-sa-visite-en-famille/ | Natur’Armor 2027 à Paimpol: préparer sa visite en famille | evenements | Paimpol, Côtes-d'Armor, Bretagne
- /articles/evenements/noel-a-brive-2026-en-famille-animations-dates-et-parcours/ | Noël à Brive 2026 en famille: animations, dates et parcours | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine

### Historique Radar lié

- opportunity | /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | 2026-10-29T23:28:55.064Z
- opportunity | /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | 2026-10-17T15:41:33.883Z
- opportunity | /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | 2026-10-21T13:33:34.395Z
- refresh | /articles/evenements/gastronomades-2026-a-angouleme-en-famille-faut-il-prevoir-le-week-end/ | 2026-11-19T18:35:02.867Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- refresh | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-11-17T19:34:24.194Z
- opportunity | /articles/evenements/mucem-a-la-toussaint-2026-quelle-activite-en-ribambelle-choisir-selon-l-age/ | 2026-10-04T10:54:39.216Z
- refresh | /articles/sorties/walibi-rhone-alpes-en-famille-quel-billet-choisir-selon-la-taille-des-enfants/ | 2026-11-18T17:27:44.409Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
