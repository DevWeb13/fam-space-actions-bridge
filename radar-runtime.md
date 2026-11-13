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
title: "Luminescences 2026-2027 au zoo d'Amnéville: billets, pass annuel et horaires"
subtitle: "Du 17 octobre au 27 mars: choisir le bon accès et vérifier le calendrier avant de partir"
summary: "Soirée lanternes, journée zoo, Pass' Tribu ou pass annuel: comparez les accès à Luminescences à Amnéville, les tarifs familiaux et les horaires propres à chaque date."
category: evenements
location:
  city: Amnéville
  department: Moselle
  region: Grand Est
image:
  src: /images/articles/2026/10/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes.webp
  alt: Entrée du zoo d'Amnéville photographiée en octobre 2010, lieu du festival Luminescences, sans montrer les lanternes de l'édition 2026-2027.
sources:
  - title: Zoo d'Amnéville - Festival Luminescences et conditions de visite
    url: https://zoo-amneville.com/festival-luminescences/
  - title: Zoo d'Amnéville - Horaires et animations
    url: https://zoo-amneville.com/horaires/
  - title: Zoo d'Amnéville - Tarifs, pass annuel et Pass' Tribu
    url: https://zoo-amneville.com/tarifs/
  - title: Zoo d'Amnéville - Accès et transports
    url: https://zoo-amneville.com/acces/
  - title: Zoo d'Amnéville - Accessibilité et tarifs adaptés
    url: https://zoo-amneville.com/accessibilite-et-inclusion/
  - title: Moselle Tourisme - Luminescences 2026-2027
    url: https://www.mosl.fr/fr/decouvrir-la-moselle/betes-et-sorcieres/f1368003428_festival-luminescences-le-monde-est-une-fete-amneville-les-thermes
eventEndsAt: 2027-03-27
topic:
  key: evenements|amneville|luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes|2026
  keywords:
    - Luminescences Amnéville 2026 2027
    - festival lanternes zoo Amnéville enfants
    - Luminescences Amnéville tarifs
    - zoo Amnéville lanternes poussette
slug: luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes
status: published
publishedAt: 2026-10-22T09:37:18.454Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Amnéville
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/index.md
  targetSha: b686fd9b0181d07ef5a7f714a8deb8c6a4023aa5
  targetUrl: /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/
  decision: Choisir le billet réellement adapté à la famille, notamment si elle possède déjà un pass annuel, puis vérifier que zoo et lanternes sont accessibles à la date prévue.
  affiliationPotential: Conserver le billet zoo + Luminescences Klook déjà présent et l'hébergement Booking.com; comparer les conditions et le prix total sans promettre une économie.
  gsc:
    retrievedAt: 2026-11-13T03:30:25+01:00
    dataThrough: 2026-11-10
    signal: uncertain
    basis: "Visibilité récente : 348 impressions sur trois jours, puis 78 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-23
    peakEnd: 2026-10-25
    recentStart: 2026-11-08
    recentEnd: 2026-11-10
    peakImpressions: 348
    recentImpressions: 78
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - billets pour festival luminescences
      - luminescence amnéville tarif
      - tarif luminescence amnéville
      - luminescence zoo amnéville 2026 2027
      - luminescence 2027
---

<!-- article-image-credit -->
*Photo: [Own work](https://commons.wikimedia.org/wiki/File:Amn%C3%A9ville_-_Zoo.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Du **17 octobre 2026 au 27 mars 2027**, **Luminescences** transforme une partie du **zoo d'Amnéville**, en Moselle, en parcours de lanternes. La cinquième édition, **« Le monde est une fête »**, réunit **12 univers** et plus de **12 000 installations lumineuses** sur **1,5 km en extérieur**. Comptez environ **1 h 30** pour la promenade.

En famille, le choix ne se limite pas à la soirée seule ou à une journée au zoo: **le pass annuel inclut également Luminescences**. Avant d'acheter un billet supplémentaire, vérifiez les accès dont vous disposez déjà et les horaires du jour choisi.

## Quel billet choisir pour Luminescences ?

<!-- article-image-body:01 -->

![Tigre blanc photographié au zoo d'Amnéville en 2010, illustration de la visite animalière possible avant les lanternes.](/images/articles/2026/10/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes-body-01.webp)

<!-- /article-image-body:01 -->

**Pour les lanternes uniquement**, le tarif annoncé est de **22 € par adulte** et **20 € par enfant de 3 à 11 ans**. Les **moins de 3 ans entrent gratuitement**. Deux adultes avec deux enfants de 3 à 11 ans paient donc **84 €**, hors restauration et transport.

**Pour visiter aussi les animaux**, le billet **zoo + Luminescences** est annoncé **à partir de 29,50 €**. C'est un prix d'appel, pas un tarif familial fixe. Le tarif adulte s'applique **dès 12 ans**. Le zoo précise sur sa [page du festival](https://zoo-amneville.com/festival-luminescences/) que Luminescences est inclus dans le billet d'entrée au zoo: après la journée animalière, rejoignez le parcours **près de la boutique**, sans quitter le parc, car **toute sortie est définitive**.

**Pour deux adultes et deux enfants**, le **Pass' Tribu à 116 €** comprend la journée au zoo et Luminescences. Il est **vendu uniquement en caisse**. Pour cette composition familiale, il coûte **32 € de plus que quatre billets lanternes seuls** aux tarifs annoncés. Vérifiez les catégories d'âge avant de choisir cette formule.

**Si vous possédez un pass annuel**, n'achetez pas automatiquement une entrée Luminescences: le zoo indique expressément que **le festival est compris dans le pass annuel**, valable un an pour les entrées au zoo. Consultez les [conditions officielles des billets et pass](https://zoo-amneville.com/tarifs/) et vérifiez la validité de chaque pass ainsi que les modalités d'accès à votre date; l'inclusion du festival ne dispense pas de respecter son calendrier d'ouverture.

Pour la formule journée, [Klook propose un billet Zoo d'Amnéville avec accès à Luminescences](https://www.klook.com/fr/activity/106081-amneville-zoo-fast-track-ticket/) et aux présentations animalières prévues dans l'offre. Sélectionnez la date et les âges exacts des enfants, puis comparez **le total du panier** au Pass' Tribu. Aucun billet partenaire distinct pour **Luminescences seul** n'a été confirmé.

**Conditions d'annulation:** le zoo indique que **ses billets directs ne sont ni remboursables ni échangeables**. Le forfait journée affiché par Klook mentionnait une **annulation gratuite avec au moins 24 heures de préavis**; vérifiez cette condition sur **l'offre précise sélectionnée** avant de payer.

## Zoo et festival: deux horaires à contrôler

Le **zoo animalier** et **Luminescences** n'ouvrent pas nécessairement aux mêmes heures ni les mêmes jours. Une date où le parc est fermé ne doit pas être interprétée comme une soirée lanternes disponible, et inversement. Avant le déplacement, sélectionnez **le jour précis** sur le [calendrier officiel des horaires](https://zoo-amneville.com/horaires/) et contrôlez séparément **l'ouverture du zoo**, **l'accès à Luminescences** et **l'heure de fermeture des caisses**.

Le festival commence **à la tombée de la nuit** et le zoo annonce habituellement une **dernière entrée à Luminescences à 20 h**; l'horaire applicable reste celui affiché pour votre date. Les animations animalières suivent également un programme quotidien, sans garantie de présence à toutes les séances.

Avec de jeunes enfants, entrer dès le début du parcours permet de terminer plus tôt. Si vous prévoyez les deux visites, gardez du temps pour une pause avant les **1,5 km** de marche nocturne et restez dans l'enceinte du parc entre les deux.

## Poussettes, fauteuils et services sur le parcours

Le festival se déroule **entièrement en extérieur**, sur des **chemins forestiers compactés**, des **sols naturels** et avec des **dénivelés**. Le zoo autorise les **poussettes et les fauteuils roulants**, mais prévient que leur progression **peut être difficile**. Il demande la présence d'un **accompagnateur en bonne condition physique** pour une visite dans de bonnes conditions; l'accessibilité ne signifie pas un terrain plat partout.

Prévoyez des chaussures adaptées et des vêtements chauds ou imperméables. Pour les visiteurs en situation de handicap, le [tarif Luminescences adapté](https://zoo-amneville.com/accessibilite-et-inclusion/) est annoncé à **18,50 € par adulte et 18 € par enfant**, sur présentation d'un justificatif et **uniquement en caisse**.

Des **toilettes** sont disponibles sur le parcours. Le **restaurant Jungle** reste ouvert pendant Luminescences avec une offre de restauration rapide. Les **chiens sont interdits**, sauf les chiens guides d'aveugle.

## Venir à Amnéville et prolonger la sortie

Le zoo se trouve au **1, rue du Tigre, 57360 Amnéville**. Depuis Metz, l'itinéraire automobile conseillé emprunte l'**A31, sortie 37 Mondelange**; le **parking public** reste accessible pendant le festival.

Sans voiture, les gares de **Hagondange (TER)** et de **Metz (TER et TGV)** permettent de s'approcher, puis de finir en **bus ou taxi**. Le zoo cite la **ligne 77 Rombas-Metz**. Avant de réserver une sortie nocturne, vérifiez surtout si votre transport retour circule à l'heure de fin de visite.

Pour rester sur place, le [B&B HOTEL Amneville-les-Thermes](https://www.booking.com/hotel/fr/roi-soleil-amneville-les-thermes.fr.html), dans le secteur de loisirs d'Amnéville, propose des **chambres familiales** et un **parking gratuit**. Vérifiez la capacité de la chambre selon le nombre et l'âge des enfants, la disponibilité et les conditions d'arrivée tardive.

Pour une autre sortie de lanternes en Moselle, notre guide de [Noël à Metz 2026 et du Sentier des Lanternes](/articles/evenements/noel-a-metz-2026-en-famille-marches-et-sentier-des-lanternes/) présente une promenade différente, accessible en centre-ville.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/index.md

---
title: "Luminescences 2026-2027 au zoo d'Amnéville: billets, tarifs et visite en famille"
subtitle: "Du 17 octobre au 27 mars: parcours lumineux, horaires, poussettes et formule zoo"
summary: À Amnéville, Luminescences propose 1,5 km de lanternes en soirée. Tarifs familiaux, Pass' Tribu, gratuité des moins de 3 ans, accès, horaires et choix entre soirée seule ou zoo et lanternes.
category: evenements
location:
  city: Amnéville
  department: Moselle
  region: Grand Est
image:
  src: "/images/articles/2026/10/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes.webp"
  alt: "Entrée du zoo d'Amnéville photographiée en octobre 2010, lieu du festival Luminescences, sans montrer les lanternes de l'édition 2026-2027."
sources:
  - title: Zoo d'Amnéville - Festival Luminescences et conditions de visite
    url: https://zoo-amneville.com/festival-luminescences/
  - title: Zoo d'Amnéville - Horaires et animations
    url: https://zoo-amneville.com/horaires/
  - title: Zoo d'Amnéville - Tarifs, catégories d'âge et Pass' Tribu
    url: https://zoo-amneville.com/tarifs/
  - title: Zoo d'Amnéville - Accès et transports
    url: https://zoo-amneville.com/acces/
  - title: Zoo d'Amnéville - Accessibilité et tarifs adaptés
    url: https://zoo-amneville.com/accessibilite-et-inclusion/
  - title: Moselle Tourisme - Luminescences 2026-2027
    url: https://www.mosl.fr/fr/decouvrir-la-moselle/betes-et-sorcieres/f1368003428_festival-luminescences-le-monde-est-une-fete-amneville-les-thermes
eventEndsAt: 2027-03-27
topic:
  key: evenements|amneville|luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes|2026
  keywords:
    - Luminescences Amnéville 2026 2027
    - festival lanternes zoo Amnéville enfants
    - Luminescences Amnéville tarifs
    - zoo Amnéville lanternes poussette
slug: luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes
status: published
publishedAt: 2026-10-22T09:37:18.454Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Amnéville
---
<!-- article-image-credit -->
*Photo: [Own work](https://commons.wikimedia.org/wiki/File:Amn%C3%A9ville_-_Zoo.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Du **17 octobre 2026 au 27 mars 2027**, **Luminescences** transforme une partie du **zoo d'Amnéville**, en Moselle, en parcours de lanternes. La cinquième édition, **« Le monde est une fête »**, réunit **12 univers** et plus de **12 000 installations lumineuses** sur **1,5 km en extérieur**. Comptez environ **1 h 30** pour la promenade.

En famille, deux expériences sont possibles: **venir uniquement pour les lanternes** ou **visiter le zoo dans la journée avant le parcours du soir**. Le billet à choisir dépend du budget, de l'âge des enfants et du temps dont vous disposez.

## Soirée seule, zoo et lanternes ou Pass' Tribu: quel budget ?

<!-- article-image-body:01 -->

![Tigre blanc photographié au zoo d'Amnéville en 2010, illustration de la visite animalière possible avant les lanternes.](/images/articles/2026/10/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes-body-01.webp)

<!-- /article-image-body:01 -->

Pour **Luminescences seul**, le tarif annoncé est de **22 € par adulte** et **20 € par enfant de 3 à 11 ans**. Les **moins de 3 ans entrent gratuitement**. Deux adultes avec deux enfants de 3 à 11 ans paient donc **84 €**, hors restauration ou transport.

Le billet **zoo + Luminescences**, annoncé **à partir de 29,50 €**, permet de voir les animaux dans la journée puis de rester pour les lanternes. Il s'agit d'un **prix d'appel**, pas d'un tarif familial unique. Le tarif adulte s'applique **dès 12 ans**.

Le zoo propose aussi un **Pass' Tribu à 116 €**, pour **deux adultes et deux enfants**, comprenant la **journée au zoo et Luminescences**. **Ce pass se réserve uniquement en caisse.** Pour une famille de cette composition, le Pass' Tribu revient ainsi à **32 € de plus que quatre entrées Luminescences seules** aux tarifs annoncés; il ajoute la visite du zoo. Vérifiez que les âges de vos enfants correspondent aux conditions du pass avant de le choisir.

Pour la formule journée, [Klook propose un billet Zoo d'Amnéville avec accès à Luminescences](https://www.klook.com/fr/activity/106081-amneville-zoo-fast-track-ticket/) et aux présentations animalières prévues dans l'offre. Sélectionnez votre date et les âges exacts des enfants, puis comparez **le total du panier** au Pass' Tribu. Aucun billet partenaire distinct pour **Luminescences seul** n'a été confirmé.

**Attention aux conditions d'annulation:** le zoo précise que **ses billets directs ne sont ni remboursables ni échangeables**. Le forfait journée actuellement affiché par Klook mentionne de son côté une **annulation gratuite avec au moins 24 heures de préavis**; vérifiez que cette condition figure toujours sur **le billet choisi** avant de payer.

**Si vous combinez zoo et lanternes, ne sortez pas du parc entre les deux: toute sortie est définitive.** Une fois la visite animalière terminée, le départ du parcours lumineux se rejoint **près de la boutique**.

## Horaires du festival: vérifier le jour précis

Luminescences débute à la **tombée de la nuit**. Les jours et heures d'ouverture peuvent changer au fil de la saison: le zoo publie un **calendrier journalier** distinguant le parc animalier et le festival. Il annonce une **dernière entrée à Luminescences à 20 h** pour les horaires habituels; vérifiez toujours ceux affichés pour votre date, particulièrement lors d'une soirée spéciale.

Avec de jeunes enfants, partir dès l'ouverture du parcours lumineux permet de terminer plus tôt. Si vous venez pour la journée complète, prévoyez une pause avant les **1,5 km** du soir. Les animations du zoo dépendent elles aussi du programme quotidien: leur présence n'est pas garantie à toutes les dates.

## Poussettes, fauteuils et services sur le parcours

Le festival se déroule **entièrement en extérieur**, sur des **chemins forestiers compactés**, des **sols naturels** et avec des **dénivelés**. Le zoo autorise les **poussettes et les fauteuils roulants**, mais précise que leur progression **peut être difficile**. Il demande la présence d'un **accompagnateur en bonne condition physique** pour une visite dans de bonnes conditions; l'accessibilité ne signifie donc pas un terrain plat ou roulant partout.

Prévoyez des chaussures adaptées ainsi que des vêtements chauds ou imperméables. Pour les visiteurs en situation de handicap, un **tarif Luminescences adapté** est annoncé à **18,50 € pour un adulte et 18 € pour un enfant**, sur présentation d'un justificatif et **uniquement en caisse**.

Des **toilettes** sont disponibles sur le parcours. Le **restaurant Jungle** reste ouvert pendant Luminescences avec une offre de restauration rapide. Les **chiens sont interdits**, sauf les chiens guides d'aveugle.

## Venir à Amnéville et prolonger la sortie

Le zoo se trouve au **1, rue du Tigre, 57360 Amnéville**. Depuis Metz, l'itinéraire automobile conseillé emprunte l'**A31, sortie 37 Mondelange**; le **parking public** reste accessible pendant le festival.

Sans voiture, les gares de **Hagondange (TER)** et de **Metz (TER et TGV)** permettent de s'approcher, puis de finir en **bus ou taxi**. Le zoo cite la **ligne 77 Rombas-Metz**. Avant de réserver une sortie nocturne, vérifiez surtout si votre transport retour circule à l'heure de fin de visite.

Pour rester sur place, le [B&B HOTEL Amneville-les-Thermes](https://www.booking.com/hotel/fr/roi-soleil-amneville-les-thermes.fr.html), dans le secteur de loisirs d'Amnéville, propose des **chambres familiales** et un **parking gratuit**. Vérifiez la capacité de la chambre selon le nombre et l'âge des enfants, la disponibilité et les conditions d'arrivée tardive.

Pour une autre sortie de lanternes en Moselle, notre guide de [Noël à Metz 2026 et du Sentier des Lanternes](/articles/evenements/noel-a-metz-2026-en-famille-marches-et-sentier-des-lanternes/) présente une promenade différente, accessible en centre-ville.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/snowworld-amneville-en-famille-luge-bouees-ou-ski/ | SnowWorld Amnéville en famille: luge, bouées ou ski ? | activites | Amnéville, Moselle, Grand Est
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-a-metz-2026-en-famille-marches-et-sentier-des-lanternes/ | Noël à Metz 2026 en famille: marchés et Sentier des Lanternes | evenements | Metz, Moselle, Grand Est
- /articles/evenements/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille/ | Traîneau flottant de Noël à Metz 2026: dates, horaires et embarquement | evenements | Metz, Moselle, Grand Est
- /articles/activites/zoo-de-martinique-en-famille-tarifs-poussette-et-visite-de-l-habitation-latouche/ | Zoo de Martinique en famille: tarifs, poussette et visite de l'Habitation Latouche | activites | Le Carbet, Martinique, Martinique
- /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | Bédéciné 2026 à Illzach en famille: ateliers, spectacles et billets | evenements | Illzach, Haut-Rhin, Grand Est
- /articles/evenements/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants/ | Fontaines dansantes d'hiver à Metz 2026-2027: dates, horaires et conseils en famille | evenements | Metz, Moselle, Grand Est
- /articles/evenements/festival-du-cirque-du-val-d-oise-2026-en-famille-tarifs-horaires-et-conseils/ | Festival du Cirque du Val d'Oise 2026 en famille: tarifs, horaires et conseils | evenements | Domont, Val-d'Oise, Île-de-France
- /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | Luminescences 2026-2027 au zoo d'Amnéville: billets, tarifs et visite en famille | evenements | Amnéville, Moselle, Grand Est
- /articles/voyages/dormir-au-parc-sainte-croix-avec-des-enfants-lodge-repas-et-acces-au-parc/ | Dormir au Parc Sainte-Croix avec des enfants: lodge, repas et accès au parc | voyages | Rhodes, Moselle, Grand Est
- /articles/sorties/chateau-de-sierck-en-famille-tarifs-2026-jeux-et-conseils-de-visite/ | Château de Sierck en famille: tarifs 2026, jeux et conseils de visite | sorties | Sierck-les-Bains, Moselle, Grand Est
- /articles/activites/animation-estivale-metz-2026-enfants/ | Animation estivale Metz 2026: inscription et activités gratuites | activites | Metz, Moselle, Grand Est
- /articles/sorties/musee-cour-or-metz-ateliers-famille-ete-2026/ | Musée de La Cour d’Or à Metz en famille: prochains ateliers en septembre 2026 | sorties | Metz, Moselle, Grand Est
- /articles/evenements/chambly-kids-festival-2027-quatre-spectacles-pour-les-enfants-dates-et-ages/ | Chambly Kids Festival 2027: quatre spectacles pour les enfants, dates et âges | evenements | Chambly, Oise, Hauts-de-France
- /articles/evenements/festival-tete-de-mioche-2027-a-l-horme-quels-spectacles-choisir-avec-les-enfants/ | Festival Tête de mioche 2027 à L'Horme: quels spectacles choisir avec les enfants ? | evenements | L'Horme, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/festival-mini-kids-2027-aux-orres-trois-jours-pour-les-3-6-ans/ | Festival Mini Kids 2027 aux Orres, trois jours pour les 3-6 ans | evenements | Les Orres, Hautes-Alpes, Provence-Alpes-Côte d’Azur
- /articles/evenements/fete-du-citron-2027-a-menton-en-famille-que-voir-et-combien-prevoir/ | Fête du Citron 2027 à Menton en famille: que voir et combien prévoir ? | evenements | Menton, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/carnaval-de-limoux-2027-en-famille-dates-fecos-et-conseils-pratiques/ | Carnaval de Limoux 2027 en famille: dates, Fécos et conseils pratiques | evenements | Limoux, Aude, Occitanie
- /articles/evenements/festi-di-natali-2026-a-bonifacio-le-marche-de-noel-en-famille/ | Festi di Natali 2026 à Bonifacio: le marché de Noël en famille | evenements | Bonifacio, Corse-du-Sud, Corse
- /articles/evenements/festi-momes-2027-a-longueau-et-glisy-les-spectacles-en-famille/ | Festi’Mômes 2027 à Longueau et Glisy: les spectacles en famille | evenements | Somme, Hauts-de-France
- /articles/evenements/spectacle-de-noel-gratuit-a-paris-le-5-decembre-2026-p-tit-loup-et-la-magie-en-famille/ | Spectacle de Noël gratuit à Paris le 5 décembre 2026: Mon p'tit loup magique | evenements | Paris, Paris, Île-de-France
- /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | Contes gratuits à Paris le 14 novembre 2026: trois rendez-vous en famille | evenements | Paris, Paris, Île-de-France

### Historique Radar lié

- opportunity | /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | 2026-10-23T12:33:36.649Z
- opportunity | /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | 2026-11-05T13:27:24.356Z
- opportunity | /articles/evenements/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants/ | 2026-11-03T06:32:33.600Z
- opportunity | /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | 2026-10-22T09:37:18.560Z
- opportunity | /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | 2026-10-09T14:37:47.734Z
- refresh | /articles/activites/snowworld-amneville-en-famille-luge-bouees-ou-ski/ | 2026-11-09T17:37:32.610Z
- opportunity | /articles/evenements/spectacle-de-noel-gratuit-a-paris-le-5-decembre-2026-p-tit-loup-et-la-magie-en-famille/ | 2026-11-06T06:35:41.183Z
- opportunity | /articles/evenements/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille/ | 2026-11-03T03:34:06.534Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
