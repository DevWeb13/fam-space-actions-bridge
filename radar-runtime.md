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
title: "Pass Nantes en famille en 2026: tarifs, visites incluses et alternatives gratuites"
subtitle: Un guide pour choisir entre 24 h, 48 h, 72 h ou 7 jours sans payer pour des visites que vous ne ferez pas
summary: "Pass Nantes en famille: prix 2026, Machines de l'île, musées, croisières, réservations et gratuités pour choisir la formule adaptée à votre séjour."
slug: pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites
status: published
publishedAt: 2026-10-27T17:17:43+01:00
updatedAt: null
category: bons-plans
readingTime: 7
location:
  city: Nantes
  department: Loire-Atlantique
  region: Pays de la Loire
topic:
  key: bons-plans|nantes|pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites|2026
  keywords:
    - Pass Nantes en famille 2026
    - Pass Nantes tarifs famille
    - Pass Nantes visites incluses
    - visiter Nantes avec enfants pas cher
image:
  src: /images/articles/2026/10/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites.webp
  alt: Le Grand Éléphant mécanique des Machines de l'île à Nantes, avec des visiteurs sur ses plateformes
sources:
  - title: Le Voyage à Nantes - Pass Nantes et activités incluses
    url: https://www.levoyageanantes.fr/a-faire/pass-nantes/
  - title: Le Voyage à Nantes - FAQ Pass Nantes, tarifs et réservations
    url: https://www.levoyageanantes.fr/a-faire/pass-nantes/faq-pass-nantes/
  - title: Naolib - Gratuité des transports en commun
    url: https://naolib.fr/gratuite-des-transports-en-commun
  - title: Musée d'arts de Nantes - Tarifs et gratuités
    url: https://museedartsdenantes.nantesmetropole.fr/visiter/visiteurs-individuels/
  - title: Musée d'arts de Nantes - Gratuité du premier dimanche
    url: https://museedartsdenantes.nantesmetropole.fr/agenda/musee-gratuit-tous-les-1ers-dimanches-du-mois/
  - title: Saint-Nazaire Tourisme - Pass Renversant et visites
    url: https://www.saint-nazaire-tourisme.com/les-visites/les-bons-plans/
affiliate:
  enabled: true
  type: travel
  destination: Nantes
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/bons-plans/(2026)/(10)/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites/index.md
  targetSha: b106b02c80383149d459ea9181bc237486760387
  targetUrl: /articles/bons-plans/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites/
  decision: Décider, pour les âges et visites réellement prévus, si le Pass Nantes famille, des pass individuels ou des billets séparés coûtent le moins cher, puis réserver les activités accessibles aux dates du séjour.
  affiliationPotential: Conserver le lien Tiqets vers le Pass Nantes et l'hébergement Booking existant, comparer le prix final et les conditions avec l'organisateur sans promettre de réduction partenaire.
  gsc:
    retrievedAt: 2026-11-11T02:29:19+01:00
    dataThrough: 2026-11-08
    signal: uncertain
    basis: "Visibilité récente : 24 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-29
    peakEnd: 2026-10-31
    recentStart: 2026-11-06
    recentEnd: 2026-11-08
    peakImpressions: 24
    recentImpressions: 0
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - pass famille nantes
      - pass famille
      - pass nantes prix
---

## Mission retenue
Actualiser le guide existant du Pass Nantes pour rendre son arbitrage financier familial réellement calculable, et fiabiliser les réservations des Machines de l'île.

## Pourquoi cette mission
Le snapshot GSC du 8 novembre montre 24 impressions du 29 au 31 octobre puis zéro du 6 au 8 novembre, sans diagnostic de requêtes comparable: la cause SEO est inconnue. Lacune éditoriale indépendante: le texte donne les tarifs et des conseils généraux mais ne chiffre pas les visites séparées pour des familles d'âges différents. La page officielle publie un exemple de coûts par activité et précise désormais que la réservation en ligne des Machines est possible tous les jours. Ce refresh doit aider à prendre une décision d'achat, pas seulement actualiser une date.

## Décision du lecteur
Comparer deux adultes et enfants de 4-17 ans, moins de 4 ans ou bénéficiant de gratuités, selon une ou deux journées et les prestations réellement ouvertes. Choisir le bon achat sans compter les transports gratuits du week-end comme une économie.

## Faits à traiter
- Vérifier les tarifs officiels 24 h/48 h/72 h/7 jours, la formule famille, les conditions du tarif réduit et la promotion de 10 % sur les seuls pleins tarifs jusqu'au 31 mars 2027.
- Ajouter un ou deux calculs transparents à partir de prix individuels vérifiés: château, Galerie, Carrousel et éventuellement croisière, avec prix par âge et cas où les billets séparés sont préférables. Ne pas extrapoler des tarifs adultes aux enfants.
- Vérifier la réservation en ligne quotidienne de la Galerie et du Carrousel au tarif porteur Pass, les réservations obligatoires pour croisières, Planétarium et expositions, et les activités saisonnières indisponibles en novembre.
- Préserver le principe des heures consécutives, les gratuités Naolib du week-end et du musée d'Arts pour mineurs, l'exclusion du voyage en Grand Éléphant, la fermeture du Muséum, les trajets TER conditionnels, l'accessibilité pratique, toutes les photographies/crédits, les sources, les liens internes et les deux liens partenaires. Retirer l'exemple du dimanche 8 novembre devenu passé sans perdre les règles de gratuité.

## Sources de départ
- https://www.levoyageanantes.fr/a-faire/pass-nantes/
- https://www.levoyageanantes.fr/a-faire/pass-nantes/faq-pass-nantes/
- https://naolib.fr/gratuite-des-transports-en-commun
- https://museedartsdenantes.nantesmetropole.fr/visiter/visiteurs-individuels/

## Affiliation
Lien Tiqets Pass Nantes déjà présent à préserver après contrôle des conditions; hébergement Adagio Nantes Centre sur Booking à conserver. Ne pas utiliser les partenaires pour valider les tarifs officiels.

## Continuations internes
- Laisser les itinéraires et quartiers à la page Destination Nantes déjà liée.
- Ne pas réécrire les événements saisonniers nantais couverts par leurs articles dédiés.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/bons-plans/(2026)/(10)/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites/index.md

---
title: "Pass Nantes en famille en 2026: tarifs, visites incluses et alternatives gratuites"
subtitle: Un guide pour choisir entre 24 h, 48 h, 72 h ou 7 jours sans payer pour des visites que vous ne ferez pas
summary: "Pass Nantes en famille: prix 2026, Machines de l'île, musées, croisières, réservations et gratuités pour choisir la formule adaptée à votre séjour."
slug: pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites
status: published
publishedAt: 2026-10-27T17:17:43+01:00
updatedAt: null
category: bons-plans
readingTime: 7
location:
  city: Nantes
  department: Loire-Atlantique
  region: Pays de la Loire
topic:
  key: bons-plans|nantes|pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites|2026
  keywords:
    - Pass Nantes en famille 2026
    - Pass Nantes tarifs famille
    - Pass Nantes visites incluses
    - visiter Nantes avec enfants pas cher
image:
  src: "/images/articles/2026/10/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites.webp"
  alt: "Le Grand Éléphant mécanique des Machines de l'île à Nantes, avec des visiteurs sur ses plateformes"
sources:
  - title: Le Voyage à Nantes - Pass Nantes et activités incluses
    url: https://www.levoyageanantes.fr/a-faire/pass-nantes/
  - title: Le Voyage à Nantes - FAQ Pass Nantes, tarifs et réservations
    url: https://www.levoyageanantes.fr/a-faire/pass-nantes/faq-pass-nantes/
  - title: Naolib - Gratuité des transports en commun
    url: https://naolib.fr/gratuite-des-transports-en-commun
  - title: Musée d'arts de Nantes - Tarifs et gratuités
    url: https://museedartsdenantes.nantesmetropole.fr/visiter/visiteurs-individuels/
  - title: Musée d'arts de Nantes - Gratuité du premier dimanche
    url: https://museedartsdenantes.nantesmetropole.fr/agenda/musee-gratuit-tous-les-1ers-dimanches-du-mois/
  - title: Saint-Nazaire Tourisme - Pass Renversant et visites
    url: https://www.saint-nazaire-tourisme.com/les-visites/les-bons-plans/
affiliate:
  enabled: true
  type: travel
  destination: Nantes
---
<!-- article-image-credit -->
*Photo: [MHM55](https://commons.wikimedia.org/wiki/File:Grand_%C3%A9l%C3%A9phant,_Nantes-09.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Pour découvrir Nantes avec des enfants, le Pass Nantes donne accès à une cinquantaine d'activités: musées, Machines de l'île, visites guidées, croisières et certains transports. Il peut simplifier un séjour chargé, mais n'est pas forcément le meilleur achat pour une famille qui souhaite surtout flâner, visiter un seul musée ou profiter des sorties gratuites. Le bon choix dépend des âges, des jours de visite et des activités réellement ouvertes.

## Combien coûte le Pass Nantes en 2026 ?

Les tarifs du Pass Nantes en vigueur depuis le 1er avril 2026 sont les suivants:

- **24 h:** 30 € par adulte, 20 € au tarif réduit, 80 € en formule famille.
- **48 h:** 40 € par adulte, 26 € au tarif réduit, 106 € en formule famille.
- **72 h:** 49 € par adulte, 31 € au tarif réduit, 129 € en formule famille.
- **7 jours:** 75 € par adulte, 45 € au tarif réduit, 195 € en formule famille.

Le tarif réduit concerne notamment les enfants de **4 à 17 ans**, les étudiants de moins de 26 ans et les titulaires d'une carte d'invalidité. Les enfants de moins de 4 ans n'ont pas besoin de pass. La formule famille correspond à **deux adultes et deux enfants de 4 à 17 ans**: elle offre, en pratique, le deuxième pass enfant.

**Attention à la promotion:** l'organisateur annonce **10 % de réduction sur le tarif plein jusqu'au 31 mars 2027**, mais pas sur les tarifs réduits ou famille. Pour deux adultes et deux enfants de 4 à 17 ans, le Pass famille 24 h à 80 € reste plus avantageux que quatre pass séparés (94 € avec la remise sur les deux adultes). Le [Pass Nantes est également proposé sur Tiqets](https://www.tiqets.com/fr/activites-attractions-nantes-c66776/billets-pour-nantes-pass-p1048804/), pour 1, 2, 3 ou 7 jours. Ce revendeur indique un retrait du pass à l'accueil du Voyage à Nantes: vérifiez cette étape et comparez le prix final avec l'offre de l'organisateur.

La durée se compte en **heures consécutives à partir de la première utilisation**, et non en journées calendaires. Un pass de 24 h activé le vendredi à 14 h reste valable jusqu'au samedi à 13 h 59. Pour un séjour de deux jours, l'heure de la première visite peut donc changer l'intérêt d'une formule 24 h ou 48 h.

## Quelles visites plaisent vraiment aux enfants ?

<!-- article-image-body:02 -->

![Le Carrousel des Mondes Marins installé sur l'île de Nantes](/images/articles/2026/10/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites-body-02.webp)

*Photo: [Duch](https://commons.wikimedia.org/wiki/File:Carrousel_des_Mondes_Marins_-_Nantes.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

<!-- article-image-body:01 -->

![Vue de la Galerie des Machines sur l'île de Nantes](/images/articles/2026/10/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites-body-01.webp)

*Photo: [Dr. Ronald Kunze](https://commons.wikimedia.org/wiki/File:La-Galerie-des-Machines.JPG) - [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Parmi les prestations annoncées dans le Pass Nantes, plusieurs se prêtent à une sortie familiale:

- **La Galerie des Machines de l'île:** découverte des animaux mécaniques et de leur fonctionnement, sur l'île de Nantes.
- **Le Carrousel des Mondes Marins:** univers de créatures marines mécaniques, également sur l'île de Nantes.
- **Le château des ducs de Bretagne:** musée d'histoire de Nantes, dans le centre-ville, avec des expositions à choisir selon l'âge des enfants.
- **Le musée d'Arts et le musée Jules Verne:** deux visites culturelles possibles, plutôt à adapter à la curiosité et à la fatigue de chacun.
- **Une croisière sur l'Erdre ou la Loire:** une autre manière de découvrir la ville, à condition qu'un départ soit programmé et réservé.

Le **voyage à bord du Grand Éléphant n'est pas inclus**, même si la Galerie des Machines l'est. Le Muséum d'histoire naturelle figure encore parmi les prestations présentées, mais il est **fermé pour travaux depuis novembre 2025**, avec une réouverture annoncée en 2029. Ne le comptez pas dans votre programme actuel.

Le pass dépasse aussi Nantes: il couvre notamment des visites à **Clisson**, ville du vignoble nantais, et plusieurs sites de **Saint-Nazaire**, sur l'estuaire de la Loire, dont Escal'Atlantic et le sous-marin Espadon. Ces excursions demandent davantage de temps qu'une visite en centre-ville.

## Trois façons de visiter sans courir

<!-- article-image-body:03 -->

![Douves et façades du château des ducs de Bretagne à Nantes](/images/articles/2026/10/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites-body-03.webp)

*Photo: [sybarite48](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_des_ducs_de_Bretagne_%C3%A0_Nantes.jpg) - [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

### Une journée concentrée sur Nantes

En semaine, vous pouvez consacrer la matinée au château des ducs de Bretagne, faire une vraie pause déjeuner, puis rejoindre l'île de Nantes pour la Galerie des Machines ou le Carrousel. Pour organiser les déplacements et choisir le bon quartier, consultez aussi notre [guide de Nantes en famille](https://www.fam-space.fr/destinations/pays-de-la-loire/loire-atlantique/nantes/). C'est déjà une journée bien remplie avec de jeunes enfants. Le Pass 24 h devient intéressant si les entrées que vous avez effectivement choisies, et éventuellement vos transports, coûtent davantage que le pass. Inutile d'ajouter une croisière uniquement pour rentabiliser l'achat.

### Deux jours avec une activité sur l'eau

Le premier jour, prévoyez le château et une découverte des Machines de l'île. Le second, gardez du temps pour une croisière sur l'Erdre si elle est proposée, puis un musée ou une promenade. La formule 48 h peut convenir à ce programme, à condition de **réserver la croisière avant de bâtir toute la journée autour d'elle**. Les déplacements et les pauses prennent du temps: trois visites importantes par jour ne sont pas une obligation.

### Un week-end à petit budget

Si vous venez un samedi et un dimanche pour une promenade dans le centre, un musée et une seule activité payante, commencez par regarder les gratuités. Vous pourriez avoir davantage intérêt à acheter cette entrée séparément. Plusieurs musées métropolitains proposent une entrée gratuite certains dimanches, hors juillet et août. Vérifiez le calendrier précis plutôt que de présumer que chaque premier dimanche est concerné: le musée d'Arts annonce par exemple sa journée gratuite du **8 novembre 2026**. Ces gratuités peuvent modifier fortement le calcul.

La formule 7 jours prend davantage de sens pour un séjour long, avec plusieurs sorties hors de Nantes. Un aller-retour en TER entre Nantes et Clisson est inclus sous conditions de réservation. En revanche, **le train vers Saint-Nazaire n'est pas librement inclus**: le trajet prévu avec le Pass 7 jours est lié à la croisière Estuaire et à sa date. Ne confondez pas ces deux avantages.

## Les gratuités qui peuvent faire économiser plus qu'un pass

<!-- article-image-body:04 -->

![Vue du musée d'arts de Nantes, accessible lors de journées de gratuité](/images/articles/2026/10/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites-body-04.webp)

*Photo: [GO69](https://commons.wikimedia.org/wiki/File:Nantes_(44)_Mus%C3%A9e_d%27arts_07.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:04 -->

Selon [Naolib](https://naolib.fr/gratuite-des-transports-en-commun), les tramways, bus et navibus du réseau sont **gratuits pour tous le samedi et le dimanche**, à l'exception de la navette aéroport. Les enfants accompagnés de moins de 6 ans voyagent aussi gratuitement en semaine. Si votre programme se déroule entièrement le week-end, n'ajoutez donc pas artificiellement le prix des transports au coût de vos visites.

Le [musée d'Arts de Nantes](https://museedartsdenantes.nantesmetropole.fr/visiter/visiteurs-individuels/) est **gratuit pour les moins de 18 ans**. Il propose également des gratuités pour tous, notamment lors de certaines nocturnes. Lors des [dimanches gratuits annoncés dans son agenda](https://museedartsdenantes.nantesmetropole.fr/agenda/musee-gratuit-tous-les-1ers-dimanches-du-mois/), généralement le premier dimanche du mois hors juillet et août, l'entrée est libre; un créneau reste conseillé pour certaines expositions temporaires. La gratuité concerne aussi d'autres musées métropolitains, sous réserve qu'ils soient ouverts ce jour-là.

Pour une famille, cette différence est essentielle: une entrée gratuite pour l'enfant ne représente **aucune économie supplémentaire** grâce au Pass Nantes. Comparez séparément les besoins des adultes et des enfants avant de choisir la formule famille.

Si vous passez surtout du temps à Saint-Nazaire, regardez aussi le [Pass Renversant proposé par l'office de tourisme](https://www.saint-nazaire-tourisme.com/les-visites/les-bons-plans/): il couvre quatre grands sites locaux, avec des tarifs annoncés à 30 € par adulte et 15 € pour les 4-17 ans. Il ne remplace pas le Pass Nantes pour les visites nantaises, mais peut mieux correspondre à un séjour centré sur Saint-Nazaire.

## Réservations, fermetures et activation: les pièges à éviter

Le Pass Nantes **n'est pas un coupe-file**. D'après les conditions de l'organisateur, les croisières et certaines visites guidées nécessitent une réservation, tout comme les séances du Planétarium. Pour les Machines de l'île, une réservation en ligne est possible en sélectionnant le tarif « porteur Pass Nantes »; le château demande notamment un créneau pour ses expositions temporaires. Les billets réservés peuvent être distincts du pass et ne figurent pas forcément dans son application.

Les croisières, locations de vélos et activités nautiques dépendent de la saison. Les Machines de l'île connaissent également une fermeture annuelle entre les vacances de Noël et celles d'hiver. Vérifiez donc le calendrier de chaque activité **avant d'acheter**: une prestation incluse sur le papier peut être fermée pendant votre séjour.

Après achat, vous recevez un e-pass avec QR code. Il s'active à la première entrée chez un partenaire ou lors de la première auto-validation des transports dans l'application Pass Nantes. Pour les transports, parkings-relais et la navette aéroport, il faut suivre les modalités d'association et d'auto-validation précisées dans la FAQ. La navette aéroport comprend un aller-retour pendant la validité du pass et nécessite un smartphone. Sans smartphone, une version imprimée du pass peut servir pour les visites, mais pas pour cette navette.

Enfin, chaque site inclus ne peut généralement être visité **qu'une fois avec le même pass**. Si un lieu ferme ou qu'une prestation est indisponible après une utilisation partielle, le pass n'est pas remboursé pour ce motif.

## Où dormir pour visiter Nantes sur deux jours ?

Pour enchaîner le château, le centre-ville et les Machines de l'île sans changer d'hébergement, le secteur de la gare est pratique, notamment si vous arrivez en train. L'[Aparthotel Adagio Nantes Centre sur Booking.com](https://www.booking.com/hotel/fr/adagio-city-aparthotel-nantes-centre.fr.html) se trouve à environ 500 m de la gare et près du château. Certains studios peuvent accueillir jusqu'à quatre personnes et disposent d'une kitchenette avec réfrigérateur, plaques et micro-ondes, utile pour les repas des enfants. Vérifiez la capacité exacte du studio, le tarif total et les conditions d'annulation pour vos dates.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/maison/broyeur-de-vegetaux-a-nantes-metropole-acheter-a-plusieurs-ou-profiter-des-operations-gratuites/ | Broyeur de végétaux à Nantes Métropole: acheter à plusieurs ou profiter des opérations gratuites ? | maison | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | Noël à Nantes 2026: marché de Noël et Voyage en hiver en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/utopiales-2026-a-nantes-en-famille-dates-billets-et-conseils-pour-preparer-la-visite/ | Utopiales 2026 à Nantes en famille: dates, billets et conseils pour préparer la visite | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/cuisine/atelier-cuisine-parent-enfant-a-nantes-gratuit-au-breil-ou-cours-prive/ | Ateliers cuisine parent-enfant à Nantes: où cuisiner ensemble? | cuisine | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP à Nantes: où aller avec un enfant de moins de 6 ans ? | parentalite | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/voyage-a-nantes-2026-en-famille/ | Voyage à Nantes 2026 en famille: parcours court et plan | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/vie-pratique/tarification-solidaire-naolib-a-nantes-combien-paie-une-famille-et-comment-faire-la-demande/ | Tarification solidaire Naolib à Nantes: combien paie une famille et comment faire la demande? | vie-pratique | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | Festi'Mômes 2026 à Nantes: séances, spectacles et tarifs en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/bons-plans/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites/ | Pass Nantes en famille en 2026: tarifs, visites incluses et alternatives gratuites | bons-plans | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/folie-plantes-nantes-2026-famille/ | Folie des plantes 2026 à Nantes: un week-end gratuit à découvrir en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | Noël 2026 au château de Goulaine: dates, billets et conseils en famille | evenements | Haute-Goulaine, Loire-Atlantique, Pays de la Loire
- /articles/sorties/ocearium-du-croisic-en-famille-animations-tarifs-et-visite/ | Océarium du Croisic en famille: animations, tarifs et visite | sorties | Le Croisic, Loire-Atlantique, Pays de la Loire
- /articles/bons-plans/chateau-de-chateaubriant-en-famille-une-sortie-a-petit-budget/ | Château de Châteaubriant en famille, une sortie à petit budget | bons-plans | Châteaubriant, Loire-Atlantique, Pays de la Loire
- /articles/activites/planete-sauvage-en-famille-tarifs-2026-duree-et-conseils-de-visite/ | Planète Sauvage en famille: tarifs 2026, durée et conseils de visite | activites | Port-Saint-Père, Loire-Atlantique, Pays de la Loire
- /articles/evenements/festival-ete-continue-carquefou-2026-famille/ | Festival L’Été Continue 2026 à Carquefou: six jours gratuits en famille | evenements | Carquefou, Loire-Atlantique, Pays de la Loire
- /articles/bons-plans/train-de-balagne-en-famille-arrets-plages-et-tarifs-entre-calvi-et-l-ile-rousse/ | Train de Balagne en famille: arrêts, plages et tarifs entre Calvi et L'Île-Rousse | bons-plans | Haute-Corse, Corse
- /articles/bons-plans/musees-a-la-reunion-en-famille-quel-pass-choisir-pour-economiser/ | Musées à La Réunion en famille: quel pass choisir pour économiser ? | bons-plans | La Réunion, La Réunion
- /articles/bons-plans/musees-de-niort-en-famille-le-donjon-et-bernard-d-agesci-a-petit-budget/ | Musées de Niort en famille: le Donjon et Bernard d’Agesci à petit budget | bons-plans | Niort, Deux-Sèvres, Nouvelle-Aquitaine
- /articles/bons-plans/pass-cantal-2026-2027-quels-cheques-utiliser-pour-les-activites-des-enfants/ | PASS CANTAL 2026-2027: quels chèques utiliser pour les activités des enfants ? | bons-plans | Cantal, Auvergne-Rhône-Alpes
- /articles/bons-plans/troyes-en-famille-a-petit-budget-musees-gratuites-et-balades-dans-le-centre/ | Troyes en famille à petit budget: musées, gratuités et balades dans le centre | bons-plans | Troyes, Aube, Grand Est
- /articles/bons-plans/abbaye-de-saint-savin-en-famille-tarifs-gratuites-et-visite-avec-les-enfants/ | Abbaye de Saint-Savin en famille: tarifs, gratuités et visite avec les enfants | bons-plans | Saint-Savin, Vienne, Nouvelle-Aquitaine
- /articles/bons-plans/albi-en-famille-a-petit-budget-deux-programmes-entre-patrimoine-et-musee/ | Albi en famille à petit budget: deux programmes entre patrimoine et musée | bons-plans | Albi, Tarn, Occitanie

### Historique Radar lié

- opportunity | /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | 2026-10-17T11:48:00.184Z
- refresh | /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | 2026-10-17T18:40:41.973Z
- refresh | /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | 2026-11-02T06:34:10.210Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | 2026-11-03T15:36:10.146Z
- opportunity | /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | 2026-10-24T15:27:41.430Z
- refresh | /articles/activites/planete-sauvage-en-famille-tarifs-2026-duree-et-conseils-de-visite/ | 2026-10-02T14:23:16.612Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
