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
title: "La Cité de la Mer à Cherbourg en famille: billets, tarifs et durée"
subtitle: "Sous-marin, aquariums et Titanic: ce qu'il faut savoir avant de venir avec des enfants"
summary: "Billets, tarifs 2026, durée de visite et règles pour les jeunes enfants: préparez votre journée à La Cité de la Mer à Cherbourg."
slug: la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite
status: published
publishedAt: 2026-08-18T15:06:21+02:00
updatedAt: 2026-08-30T11:25:54+02:00
category: activites
readingTime: 6
image:
  src: /images/articles/2026/08/la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite.webp
  alt: Le sous-marin Le Redoutable à la Cité de la Mer de Cherbourg
location:
  city: Cherbourg-en-Cotentin
  department: Manche
  region: Normandie
topic:
  key: activites|cherbourg-en-cotentin|la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite|2026
  keywords:
    - Cité de la Mer Cherbourg famille
    - activité famille Manche
affiliate:
  enabled: true
  type: travel
  destination: Cherbourg-en-Cotentin
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/activites/(2026)/(08)/la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite/index.md
  targetSha: 6976c27d9ca3ee1a459c576021ce28d1d404bd9f
  targetUrl: /articles/activites/la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite/
  decision: Choisir le billet et les expériences adaptées à l'âge des enfants (visite classique, Cherbourg Transatlantique ou rencontre guidée), calculer le budget familial actualisé et organiser une visite aux horaires réellement proposés cet automne.
  affiliationPotential: "Billet standard La Cité de la Mer toujours proposé sur Booking.com Attractions : https://www.booking.com/attractions/fr/prztomon0sgj-la-cite-de-la-mer-ticket.fr.html ; vérifier le prix, les conditions et surtout l'âge de gratuité, car la fiche partenaire mentionne moins de 4 ans alors que l'exploitant annonce moins de 5 ans. Lien partenaire existant à conserver si l'offre reste adaptée; ne pas ajouter de lien officiel menant à l'achat dans le corps. Hébergement Le Hublot sur Booking.com (https://www.booking.com/hotel/fr/le-hublot-cherbourg-en-cotentin.fr.html) à revérifier et présenter prudemment: la fiche évoque une chambre et un canapé-lit mais affiche des informations contradictoires sur la capacité; pas de lit bébé/appoint selon les conditions Booking, malgré la mention contraire dans une fiche touristique. Ne garantir ni 3 ni 4 occupants sans validation au moment de réserver."
  gsc:
    retrievedAt: 2026-10-16T04:49:29.006Z
    dataThrough: 2026-10-13
    signal: uncertain
    basis: Baisse non attribuable au classement; 0 requêtes comparables.
    peakStart: 2026-09-16
    peakEnd: 2026-09-22
    recentStart: 2026-10-07
    recentEnd: 2026-10-13
    peakImpressions: 130
    recentImpressions: 41
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - cité de la mer cherbourg tarif
      - cité de la mer cherbourg horaires
      - prix entree cite de la mer cherbourg
      - le redoutable sous-marin prix
      - prix cite de la mer
---

## Mission retenue

**Actualisation de La Cité de la Mer à Cherbourg**, visite familiale permanente associant aquariums, Le Redoutable et Titanic, avec des options supplémentaires désormais tarifées et programmées: l'expérience en réalité mixte **Cherbourg Transatlantique** et des visites guidées d'octobre.

## Pourquoi cette mission

Le snapshot GSC affiche **130 impressions sur la période de référence contre 41 récemment**, mais un signal **uncertain** sans requêtes réellement comparables: aucune conclusion de perte de position. Ce refresh a une **raison éditoriale indépendante**, visible dans l'article publié: il présente encore des horaires estivaux terminés et omet les choix payants qui modifient le prix et le déroulement de la visite familiale. L'article sur la cantine en Essonne, malgré un score GSC plus élevé, répond déjà à la démarche attendue sans changement substantiel confirmé. L'expansion autour de la page forte Futuroween risquerait un chevauchement avec les guides Futuroscope déjà en ligne; une opportunité saisonnière autonome doit être suffisamment distincte des événements de Toussaint déjà couverts. La publication en cours sur la Maison du Marais à Saint-Omer ne recoupe pas Cherbourg.

## Décision du lecteur

Savoir **quelle formule vaut la peine selon l'âge des enfants et le temps disponible**, quel montant prévoir selon les billets individuels, offres combinées et réductions, puis organiser l'arrivée aux horaires réels sans réserver un supplément inaccessible à son enfant.

## Faits à traiter

- **Actualiser les horaires d'automne 2026**: la page officielle indique selon les dates **9h30-18h ou 10h-18h en octobre**, et d'autres jours fermés en novembre; caisses fermées **1h30 avant** le site. Ne plus mettre en avant les horaires de juillet-août ni le renfort estival de bus valable seulement jusqu'au 31 août.
- **Billet de base 2026**: **21 € adulte**, **15 € de 5 à 17 ans**, gratuit **avant 5 ans** avec adulte payant, donc **72 € pour deux adultes et deux enfants de 5 à 17 ans**. Préserver **Early Bird -1,50 € par billet** si réservation en ligne au moins 48 h à l'avance (conditions à vérifier) et **Bas Carbone 18,90 € adulte / 13,50 € enfant** sur justificatif; ne pas présumer leur cumul ou leur application aux formules couplées.
- **Cherbourg Transatlantique**, expérience supplémentaire avec casque de réalité mixte dans la gare Art déco: **11 € seule**, ou **30 € adulte / 24 € enfant** pour le combiné avec la visite ordinaire; recommandée **à partir de 8 ans**, calendrier distinct et réservation nécessaire. La page de présentation la **déconseille aux personnes épileptiques et aux femmes enceintes**; restituer cette précaution exactement. Pour deux adultes et deux enfants d'âge adapté: **108 € en combiné**, si les conditions s'appliquent.
- **Rencontre avec un ancien sous-marinier**: option couplée à la visite les **samedis 17 et 24 octobre** encore à venir, **28 € adulte / 19 € enfant** selon grille officielle; **à partir de 5 ans**, durée **1h15**, **non accessible en fauteuil** pour cette animation à cause des escaliers, réservation en ligne. **Visites guidées de l'Océan du Futur** des **20, 21, 22, 27, 28, 29 octobre**, environ **1h15**, accueil **15 minutes avant**; contrôler prix et créneaux à la rédaction.
- Préserver le socle utile sans raccourcir abusivement: **4 à 5 heures** de visite recommandées, billet valide toute la journée avec sortie-retour, **Le Redoutable interdit aux moins de 5 ans** et visite d'environ **35 minutes** (alternance des adultes), aquariums et Titanic, **Poisson-pilote à 5 €** avec pièce d'identité, pauses repas/pique-nique, parking gratuit non surveillé, gare à 15 minutes à pied, accès poussettes/PMR et alternative film au sous-marin, téléphone et **trois photos avec leurs crédits et licences Wikimedia Commons**. Conserver les prix exacts et les réductions.
- Distinguer **billet classique** d'une entrée à **Cherbourg Transatlantique**: l'expérience immersive est un **supplément** et n'est pas incluse automatiquement. Une escale de paquebot peut fermer la Salle des Bagages sans fermer Titanic.
- Conserver l'intérêt du séjour à Cherbourg, mais **revérifier Le Hublot**: fiche Booking indiquant **aucun lit bébé ni lit d'appoint**, et capacité incertaine entre annonce/hôte/tourisme. Ne pas reconduire la promesse de lit bébé ni affirmer une occupation maximale sans confirmation.

## Sources de départ

- Site officiel, calendrier octobre-novembre 2026, tarifs ordinaires et combinés: https://www.citedelamer.com/informations-pratiques/tarifs-horaires/
- Cherbourg Transatlantique, âge, contre-indications et billets: https://www.citedelamer.com/espaces/cherbourg-transatlantique/
- Visites guidées et calendrier des rencontres 2026: https://www.citedelamer.com/experience/nos-visites-guidees/
- Offre Early Bird encore affichée: https://www.citedelamer.com/evenement/early-bird/
- Conditions d'accès: https://www.citedelamer.com/informations-pratiques/plan-acces/

## Affiliation

L'offre d'entrée classique **Booking.com Attractions** existe toujours: conserver une action principale partenaire si prix et conditions conviennent, sans concurrent officiel de réservation dans le corps. Attention à la divergence d'âge pour la gratuité (**moins de 4 ans chez Booking, moins de 5 ans sur le site du lieu**): ne pas présenter la fiche partenaire comme source éditoriale ou garantie de gratuité. La réservation distincte de Cherbourg Transatlantique ou des visites guidées n'a pas d'équivalent partenaire vérifié. Hébergement **Le Hublot** maintenu comme piste à contrôler, avec vérification expresse du couchage, de la capacité et des équipements bébé, sans garantie de disponibilité.

## Continuations internes

- Traiter **Cherbourg Transatlantique comme un choix supplémentaire**, pas comme une obligation pour profiter du musée; garder l'article centré sur une journée familiale à La Cité de la Mer.
- Supprimer les **horaires de transport et d'ouverture de l'été 2026** désormais périmés; préserver toutes les modalités permanentes encore utiles.
- Éviter la duplication avec les pages voisines du catalogue Fam Space et ne pas créer de nouvel article isolé pour un simple supplément au même lieu.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/activites/(2026)/(08)/la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite/index.md

---
title: "La Cité de la Mer à Cherbourg en famille: billets, tarifs et durée"
subtitle: "Sous-marin, aquariums et Titanic: ce qu'il faut savoir avant de venir avec des enfants"
summary: "Billets, tarifs 2026, durée de visite et règles pour les jeunes enfants: préparez votre journée à La Cité de la Mer à Cherbourg."
slug: la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite
status: published
publishedAt: 2026-08-18T15:06:21+02:00
updatedAt: 2026-08-30T11:25:54+02:00
category: activites
readingTime: 6
image:
  src: "/images/articles/2026/08/la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite.webp"
  alt: "Le sous-marin Le Redoutable à la Cité de la Mer de Cherbourg"
location:
  city: Cherbourg-en-Cotentin
  department: Manche
  region: Normandie
topic:
  key: activites|cherbourg-en-cotentin|la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite|2026
  keywords:
    - Cité de la Mer Cherbourg famille
    - activité famille Manche
affiliate:
  enabled: true
  type: travel
  destination: Cherbourg-en-Cotentin
---
<!-- article-image-credit -->
*Photo: [Raimond Spekking](https://commons.wikimedia.org/wiki/File:Le_Redoutable_(S_611),_Cit%C3%A9_de_la_Mer,_Cherbourg,_France-7927.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

La Cité de la Mer est l'une des activités familiales les plus complètes de la Manche pour une journée à Cherbourg-en-Cotentin. Le site réunit aquariums, espaces consacrés à l'exploration sous-marine, parcours autour du Titanic et visite du sous-marin nucléaire Le Redoutable.

Pour une famille, l'intérêt principal est simple: il y a suffisamment de contenu pour occuper plusieurs heures sans multiplier les déplacements. Il faut en revanche anticiper l'âge des enfants, car les moins de 5 ans ne peuvent pas entrer dans Le Redoutable.

## Combien de temps prévoir sur place

<!-- article-image-body:02 -->

![Vue générale de la Cité de la Mer et du Redoutable à Cherbourg](/images/articles/2026/08/la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite-body-02.webp)

*Photo: [La Cité de la Mer - Sylvain Guichard](https://commons.wikimedia.org/wiki/File:Cit%C3%A9merCherbourg.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

La Cité de la Mer recommande de prévoir environ 4 à 5 heures pour la visite complète. Avec de jeunes enfants, il est raisonnable de considérer la sortie comme une vraie demi-journée, voire davantage si vous prenez le temps de parcourir les aquariums et l'espace Titanic.

Le billet est valable toute la journée. Vous pouvez sortir pour déjeuner puis revenir terminer la visite. Le site dispose aussi du restaurant Le Quai des Mers, d'un snack ouvert en haute saison et de deux aires de pique-nique, dont une couverte.

Cette possibilité de faire une vraie pause est utile avec des enfants qui fatiguent après plusieurs heures en intérieur.

## Tarifs 2026 et budget pour une famille

Le billet classique coûte **21 € par adulte** et **15 € pour les enfants de 5 à 17 ans inclus**. L'entrée est gratuite pour les moins de 5 ans accompagnés d'un adulte payant.

Pour 2 adultes et 2 enfants de 5 à 17 ans, le plein tarif représente donc **72 €**.

Pour acheter l'entrée séparément, vous pouvez [réserver le billet La Cité de la Mer](https://www.booking.com/attractions/fr/prztomon0sgj-la-cite-de-la-mer-ticket.fr.html). Vérifiez le prix final et les conditions affichées pour votre date avant de confirmer.

Deux réductions officielles peuvent faire baisser ce budget:

- l'offre Early Bird retire 1,50 € par billet lorsque la visite est réservée en ligne au moins 48 heures à l'avance, soit **66 €** pour cette famille de quatre personnes;
- le Tarif Bas Carbone est fixé à **18,90 € par adulte** et **13,50 € par enfant de 5 à 17 ans** pour les visiteurs venant en bus, en train ou à vélo avec le justificatif demandé, soit **64,80 €** pour 2 adultes et 2 enfants.

Le Tarif Bas Carbone demande notamment un titre de bus du jour, un billet de train datant de moins de 7 jours avec arrivée à Cherbourg ou Valognes, ou une photo du cycliste avec son vélo devant La Cité de la Mer. Vérifiez les conditions sur la [page officielle d'accès](https://www.citedelamer.com/informations-pratiques/plan-acces/) avant le départ.

## Le Redoutable: attention avec les moins de 5 ans

<!-- article-image-body:01 -->

![Le sous-marin Le Redoutable à la Cité de la Mer de Cherbourg](/images/articles/2026/08/la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite-body-01.webp)

*Photo: [Raimond Spekking](https://commons.wikimedia.org/wiki/File:Le_Redoutable_(S_611),_Cit%C3%A9_de_la_Mer,_Cherbourg,_France-7922.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le Redoutable est l'un des espaces les plus marquants de la visite, mais son accès est interdit aux enfants de moins de 5 ans pour des raisons de sécurité. La visite intérieure dure environ 35 minutes et un audioguide spécifique existe pour les 5-12 ans.

Si vous venez avec un enfant plus jeune, La Cité de la Mer conseille d'alterner la visite entre adultes: l'un reste avec l'enfant pendant que l'autre visite le sous-marin, puis vous échangez.

Cette restriction ne concerne pas l'ensemble du site. Les plus jeunes peuvent profiter de L'Océan du Futur, d'Océan sur Écoute et des autres espaces accessibles à leur âge.

## Aquariums, Titanic et guide numérique

L'Océan du Futur regroupe notamment 17 aquariums. C'est généralement la partie la plus facile à parcourir avec de jeunes enfants, car elle alterne observation des animaux et dispositifs de découverte.

Le guide numérique Poisson-pilote coûte **5 € en supplément**. Il ajoute des contenus pédagogiques dans plusieurs espaces. Une pièce d'identité est demandée comme caution lors de la location.

Le parcours Titanic: retour à Cherbourg complète la visite avec des objets, des récits de passagers et l'histoire de l'escale du paquebot à Cherbourg. L'ensemble permet d'alterner animaux marins, sciences, technologie et histoire au cours de la même journée.

## Venir en voiture, en train ou en bus

La Cité de la Mer se trouve dans l'ancienne Gare Maritime Transatlantique, **Allée du Président Menut, 50100 Cherbourg-en-Cotentin**.

En voiture, suivez la signalisation Car Ferries / La Cité de la Mer. Le parking est gratuit mais non surveillé. Il comprend des emplacements réservés aux personnes en situation de handicap et une borne de recharge pour véhicules électriques.

En train, la gare de Cherbourg est située à environ **15 minutes à pied**. Jusqu'au 31 août 2026, Cap Cotentin annonce aussi des dessertes estivales renforcées vers La Cité de la Mer, notamment avec les lignes 4 et 8.

Pour une question pratique avant de partir, La Cité de la Mer est joignable au [02 33 20 26 69](tel:+33233202669).

## Accessibilité et poussettes

La Cité de la Mer porte la marque Tourisme et Handicap pour les handicaps visuel, mental, auditif et moteur. Des rampes et ascenseurs facilitent les déplacements et un fauteuil roulant peut être prêté gratuitement. Il est conseillé d'appeler avant la visite pour vérifier sa disponibilité.

L'intérieur du Redoutable n'est pas accessible aux personnes en fauteuil roulant, mais un espace dédié permet de découvrir le sous-marin grâce à un film.

Avec une poussette, les espaces principaux sont beaucoup plus simples à parcourir que le sous-marin lui-même. Si un membre de la famille ne peut pas emprunter les coursives ou les escaliers du Redoutable, prévoyez l'organisation de la visite avant d'arriver à son entrée.

## Horaires d'été et meilleur moment pour arriver

En juillet et août 2026, La Cité de la Mer ouvre généralement de **9h30 à 19h**, avec certaines journées prolongées jusqu'à **20h**. Les caisses ferment 1h30 avant le site.

Le site recommande d'arriver dans la matinée. C'est particulièrement pertinent en été et les jours de pluie, lorsque l'affluence peut augmenter. Arriver tôt laisse aussi davantage de marge pour faire une pause déjeuner et revenir terminer les espaces restants.

Les horaires varient au fil de l'année. Vérifiez donc le [calendrier et les tarifs 2026](https://www.citedelamer.com/informations-pratiques/tarifs-horaires/) le jour où vous préparez votre déplacement.

## Faut-il dormir à Cherbourg après la visite

La visite se fait très bien à la journée. Dormir à Cherbourg devient surtout pertinent si vous voulez ajouter une seconde activité dans le Cotentin le lendemain ou éviter plusieurs heures de route après 4 à 5 heures de visite.

Pour une petite famille, [Le Hublot à Cherbourg-en-Cotentin](https://www.booking.com/hotel/fr/le-hublot-cherbourg-en-cotentin.fr.html) est une option précise plutôt qu'une page générale d'hôtels. Cet appartement classé 3 étoiles accueille jusqu'à 3 personnes. Tourisme en Cotentin confirme notamment la présence d'un lit bébé, d'une chaise haute, d'une cuisine équipée et sa situation en centre-ville. Le site de l'hébergement annonce La Cité de la Mer à environ 10 minutes à pied.

Pour une famille de quatre personnes ou plus, choisissez plutôt un hébergement dont la capacité correspond réellement à votre groupe: ce logement n'est pas adapté au-delà de trois occupants.

## Checklist avant de partir

- Vérifiez l'horaire exact du jour et l'heure de fermeture des caisses.
- Comparez le plein tarif, l'Early Bird et le Tarif Bas Carbone selon votre trajet.
- Avec un enfant de moins de 5 ans, prévoyez l'alternance entre adultes pour Le Redoutable.
- Si vous comptez pique-niquer, profitez des espaces prévus sur le site.
- Gardez votre billet si vous sortez déjeuner afin de pouvoir revenir terminer la visite.
- Si l'accessibilité conditionne votre sortie, contactez le site avant de vous déplacer.

## Ce qu'il faut retenir

Comptez environ **4 à 5 heures** pour la visite complète. Le plein tarif familial de référence est de **72 € pour 2 adultes et 2 enfants de 5 à 17 ans**, mais l'Early Bird ou le Tarif Bas Carbone peuvent réduire la dépense. Les moins de 5 ans entrent gratuitement mais ne peuvent pas visiter Le Redoutable. Le parking est gratuit, la gare est à environ 15 minutes à pied et le billet permet de sortir déjeuner puis de revenir dans la journée.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/vie-pratique/spot50-2026-2027-dans-la-manche-75-d-activites-pour-5/ | SPOT50 2026/2027 dans la Manche: 75 € d'activités pour 5 € | vie-pratique | Saint-Lô, Manche, Normandie
- /articles/maison/renover-une-maison-dans-la-manche-dans-quel-ordre-demander-les-aides-en-2026/ | Rénover une maison dans la Manche: dans quel ordre demander les aides en 2026 ? | maison | Saint-Lô, Manche, Normandie
- /articles/activites/la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite/ | La Cité de la Mer à Cherbourg en famille: billets, tarifs et durée | activites | Cherbourg-en-Cotentin, Manche, Normandie
- /articles/voyages/mont-saint-michel-en-famille-en-2026-une-journee-ou-un-week-end-ou-dormir-et-quel-budget-prevoir/ | Mont-Saint-Michel en famille en 2026: une journée ou un week-end, où dormir et quel budget prévoir | voyages | Le Mont-Saint-Michel, Manche, Normandie
- /articles/activites/musee-de-la-biere-a-stenay-en-famille-parcours-enfants-et-exposition-2026/ | Musée de la Bière à Stenay en famille: parcours enfants et exposition 2026 | activites | Stenay, Meuse, Grand Est
- /articles/activites/musee-de-pont-aven-en-famille-visites-ludiques-et-ateliers-pour-enfants/ | Musée de Pont-Aven en famille: visites ludiques et ateliers pour enfants | activites | Pont-Aven, Finistère, Bretagne
- /articles/activites/musee-automobile-reims-champagne-en-famille-que-voir-et-comment-preparer-sa-visite/ | Musée Automobile Reims-Champagne en famille: que voir et comment préparer sa visite? | activites | Reims, Marne, Grand Est
- /articles/activites/grotte-de-trabuc-en-famille-les-100-000-soldats-tarifs-et-visites/ | Grotte de Trabuc en famille: les 100 000 soldats, tarifs et visites | activites | Mialet, Gard, Occitanie
- /articles/activites/zoo-de-martinique-en-famille-tarifs-poussette-et-visite-de-l-habitation-latouche/ | Zoo de Martinique en famille: tarifs, poussette et visite de l'Habitation Latouche | activites | Le Carbet, Martinique, Martinique
- /articles/activites/cite-du-chocolat-valrhona-a-la-toussaint-2026-quel-atelier-choisir-selon-l-age/ | Cité du Chocolat Valrhona à la Toussaint 2026: animations et ateliers avec des enfants | activites | Tain-l'Hermitage, Drôme, Auvergne-Rhône-Alpes
- /articles/activites/parc-animalier-de-lapenne-en-famille-a-pied-ou-avec-la-visite-en-tracteur/ | Parc animalier de Lapenne en famille: à pied ou avec la visite en tracteur ? | activites | Lapenne, Ariège, Occitanie
- /articles/activites/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre/ | Grottes de Thouzon avec des enfants: préparer la visite sous terre | activites | Le Thor, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/activites/stages-de-science-a-la-cite-des-sciences-pendant-la-toussaint-2026-lequel-choisir-selon-l-age/ | Stages de science à la Cité des sciences à la Toussaint 2026: durées, âges et tarifs | activites | Paris, Paris, Île-de-France
- /articles/activites/noel-2026-a-l-ecomusee-d-alsace-en-famille-quand-venir-et-que-prevoir/ | Noël 2026 à l'Écomusée d'Alsace en famille: quand venir et que prévoir? | activites | Ungersheim, Haut-Rhin, Grand Est
- /articles/activites/paris-sport-vacances-automne-2026-demi-journee-gratuite-ou-stage-a-la-journee/ | Paris Sport Vacances automne 2026: demi-journée gratuite ou stage à la journée? | activites | Paris, Paris, Île-de-France
- /articles/activites/musee-parc-des-dinosaures-de-meze-en-famille-fossiles-visite-et-conseils/ | Musée-Parc des Dinosaures de Mèze en famille: fossiles, visite et conseils | activites | Mèze, Hérault, Occitanie
- /articles/activites/chateau-de-biron-avec-des-enfants-tarifs-et-conseils-pour-la-visite/ | Château de Biron avec des enfants: tarifs et conseils pour la visite | activites | Biron, Dordogne, Nouvelle-Aquitaine
- /articles/activites/o-fun-park-en-famille-en-basse-saison-2026-activites-tarifs-et-ages/ | O'Fun Park en famille en basse saison 2026: activités, tarifs et âges | activites | Le Bernard, Vendée, Pays de la Loire
- /articles/activites/grottes-de-saulges-en-famille-margot-ou-rochefort-selon-l-age/ | Grottes de Saulges en famille: découvrir Margot, Rochefort et le musée | activites | Thorigné-en-Charnie, Mayenne, Pays de la Loire
- /articles/activites/cite-de-la-langue-francaise-en-famille-quelle-visite-choisir-en-2026/ | Cité internationale de la langue française en famille: que voir avec les enfants? | activites | Villers-Cotterêts, Aisne, Hauts-de-France
- /articles/activites/ferme-aux-cerfs-au-houga-en-famille-quand-venir-pour-le-brame/ | Ferme aux Cerfs au Houga en famille: quand venir pour le brame ? | activites | Le Houga, Gers, Occitanie
- /articles/activites/canoe-en-ardeche-avec-des-enfants-6-ou-12-km-quel-parcours-choisir/ | Canoë en Ardèche avec des enfants: 6 ou 12 km, quel parcours choisir ? | activites | Vallon-Pont-d'Arc, Ardèche, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/activites/cite-du-chocolat-valrhona-a-la-toussaint-2026-quel-atelier-choisir-selon-l-age/ | 2026-10-05T14:27:51.219Z
- opportunity | /articles/activites/paris-sport-vacances-automne-2026-demi-journee-gratuite-ou-stage-a-la-journee/ | 2026-10-03T20:20:25.508Z
- opportunity | /articles/activites/stages-de-science-a-la-cite-des-sciences-pendant-la-toussaint-2026-lequel-choisir-selon-l-age/ | 2026-10-04T05:39:23.036Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
