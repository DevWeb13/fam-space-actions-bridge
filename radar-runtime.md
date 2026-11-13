# Radar Fam Space - Phase 2/3

## Mission

Radar surveille en priorité les articles Fam Space qui gagnent rapidement des impressions Google puis les perdent quelques jours plus tard. Il cherche ensuite les autres articles existants à améliorer réellement. Seulement s'il ne trouve aucune amélioration utile, il recherche un événement exceptionnel avec un fort potentiel d'audience et, lorsque c'est naturel, d'affiliation. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 2/3

Tu es journaliste web et responsable du parcours lecteur. Le candidat validé de phase 1 est fourni intégralement plus bas. Pour un refresh, l'article source exact est fourni intégralement plus bas.

Un refresh utilise l'ancien article comme référence interne, mais le résultat doit se lire comme un article actuel et autonome. Toute information encore vraie et utile doit rester, notamment prix décisionnels, durées, réservation, âge/taille, accessibilité, accès, contraintes, services bébé/enfants, repas et autres détails pratiques; une information fausse, périmée ou réellement redondante peut être retirée.

Suis le diagnostic éditorial du brief:
- `rank_loss`: réponds mieux aux intentions réellement en recul;
- `coverage_loss`: améliore la couverture utile sans présenter cela comme une perte de ranking;
- `uncertain`: applique uniquement la raison éditoriale indépendante vérifiée;
- `needs_query_check`: les recherches Google n'ont pas été diagnostiquées; applique uniquement la lacune éditoriale indépendante vérifiée, sans présenter la baisse d'impressions comme une perte de classement;
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
title: "Luminescences 2026-2027 au zoo d'Amnéville: billets, tarifs et visite en famille"
subtitle: "Du 17 octobre au 27 mars: parcours lumineux, horaires, poussettes et formule zoo"
summary: À Amnéville, Luminescences propose 1,5 km de lanternes en soirée. Tarifs familiaux, Pass' Tribu, gratuité des moins de 3 ans, accès, horaires et choix entre soirée seule ou zoo et lanternes.
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
radar:
  schemaVersion: 1
  phase: 1
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

## Mission retenue
Actualisation ciblée du guide Luminescences 2026-2027 au zoo d'Amnéville: choix de billet et calendrier réel.

## Pourquoi cette mission
Le snapshot GSC indique 348 impressions sur trois jours au pic contre 78 récemment, sans cause démontrée. Lacune éditoriale indépendante: l'article compare soirée seule, billet combiné et Pass' Tribu, mais omet le pass annuel, qui comprend officiellement Luminescences. La différence entre ouverture du zoo et accès au festival mérite également d'être rendue plus explicite pour éviter un déplacement inutile.

## Décision du lecteur
Savoir si un billet supplémentaire est nécessaire et quel accès convient aux âges des enfants, puis sélectionner un jour où la formule souhaitée est effectivement proposée.

## Faits à traiter
- Ajouter le pass annuel comme quatrième cas, en précisant que Luminescences est compris selon les conditions officielles; ne pas présumer que tous les détenteurs peuvent entrer sans vérification des modalités.
- Distinguer clairement les jours et heures du zoo de ceux de Luminescences; renvoyer au calendrier quotidien officiel, y compris pour les jours de fermeture, et rappeler la dernière entrée annoncée à 20 h sous réserve de la date.
- Préserver les prix et calculs familiaux vérifiés, Pass' Tribu en caisse, gratuité des moins de 3 ans, conditions d'annulation, non-réentrée, poussettes et accessibilité, transport retour, photos/licences/crédits et liens existants. Ne modifier aucun chiffre sans nouvelle preuve.

## Sources de départ
- https://zoo-amneville.com/tarifs/ (pass annuel et Pass' Tribu)
- https://zoo-amneville.com/festival-luminescences/ (accès, billets et conditions)
- https://zoo-amneville.com/horaires/ (calendrier journalier)

## Affiliation
Conserver Klook pour la formule zoo + lanternes et Booking.com pour l'hébergement; ne pas inventer de billet partenaire pour la soirée seule.

## Continuations internes
- Garder le guide Noël à Metz comme autre sortie de lanternes, sans mélanger les deux programmes.
- Ne pas redévelopper SnowWorld Amnéville, déjà traité dans un article distinct.

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
- /articles/activites/zoo-de-martinique-en-famille-tarifs-poussette-et-visite-de-l-habitation-latouche/ | Zoo de Martinique en famille: tarifs, poussette et visite de l'Habitation Latouche | activites | Le Carbet, Martinique, Martinique
- /articles/evenements/noel-a-metz-2026-en-famille-marches-et-sentier-des-lanternes/ | Noël à Metz 2026 en famille: marchés et Sentier des Lanternes | evenements | Metz, Moselle, Grand Est
- /articles/activites/parc-zoo-du-reynou-avec-des-enfants-billet-date-poussette-ou-journee-complete/ | Parc Zoo du Reynou avec des enfants: billet daté, poussette ou journée complète? | activites | Le Vigen, Haute-Vienne, Nouvelle-Aquitaine
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | Festival BD Colomiers 2026 en famille: programme, tarifs et accès | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/activites/lac-du-bouchet-en-famille-tour-du-lac-baignade-et-activites/ | Lac du Bouchet en famille: tour du lac, baignade et activités | activites | Cayres, Haute-Loire, Auvergne-Rhône-Alpes
- /articles/sorties/bambouseraie-avec-de-jeunes-enfants-poussette-ou-balade-aerienne/ | Bambouseraie avec de jeunes enfants: poussette ou balade aérienne? | sorties | Générargues, Gard, Occitanie
- /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | Luminescences 2026-2027 au zoo d'Amnéville: billets, tarifs et visite en famille | evenements | Amnéville, Moselle, Grand Est
- /articles/evenements/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants/ | Fontaines dansantes d'hiver à Metz 2026-2027: dates, horaires et conseils en famille | evenements | Metz, Moselle, Grand Est
- /articles/evenements/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille/ | Traîneau flottant de Noël à Metz 2026: dates, horaires et embarquement | evenements | Metz, Moselle, Grand Est
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

### Historique Radar lié

- opportunity | /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | 2026-10-29T23:28:55.064Z
- opportunity | /articles/evenements/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants/ | 2026-11-03T06:32:33.600Z
- refresh | /articles/activites/lac-du-bouchet-en-famille-tour-du-lac-baignade-et-activites/ | 2026-11-10T18:29:12.894Z
- opportunity | /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | 2026-10-22T09:37:18.560Z
- opportunity | /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | 2026-10-09T14:37:47.734Z
- refresh | /articles/activites/snowworld-amneville-en-famille-luge-bouees-ou-ski/ | 2026-11-09T17:37:32.610Z
- opportunity | /articles/evenements/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille/ | 2026-11-03T03:34:06.534Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
