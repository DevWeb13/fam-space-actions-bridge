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

Soumets le résultat via `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées, puis le corps complet. **Ne recopie pas les métadonnées inchangées, aucun bloc `radar`, aucune branche et aucun SHA.** La plomberie mécanique conserve le reste, normalise la syntaxe de la requête et préserve le diagnostic GSC, la cible, le slug et les champs protégés.

## Candidat validé de la phase précédente

---
title: "La Cité de la Mer à Cherbourg en famille: tarifs, visite et billets 2026"
subtitle: "Le Redoutable, les aquariums et Cherbourg Transatlantique: quelles options choisir avec des enfants?"
summary: "Préparer La Cité de la Mer à Cherbourg avec des enfants: prix, réductions, durée, âge minimum pour le sous-marin, visite immersive et horaires 2026."
slug: la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite
status: published
publishedAt: 2026-08-18T15:06:21+02:00
updatedAt: 2026-10-17T06:36:14.901Z
category: activites
readingTime: 7
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
reviewAt: 2026-11-02
sources:
  - title: La Cité de la Mer - Horaires et tarifs 2026, billets couplés
    url: https://www.citedelamer.com/informations-pratiques/tarifs-horaires/
  - title: La Cité de la Mer - Cherbourg Transatlantique, conditions et âges
    url: https://www.citedelamer.com/espaces/cherbourg-transatlantique/
  - title: La Cité de la Mer - Visites guidées et rencontres d'octobre
    url: https://www.citedelamer.com/experience/nos-visites-guidees/
  - title: La Cité de la Mer - Visite guidée des aquariums en octobre
    url: https://www.citedelamer.com/visite-guidee-aquariums/
  - title: La Cité de la Mer - Offre Early Bird
    url: https://www.citedelamer.com/evenement/early-bird/
  - title: La Cité de la Mer - Accès et Tarif Bas Carbone
    url: https://www.citedelamer.com/informations-pratiques/plan-acces/
  - title: La Cité de la Mer - Préparer la visite et accessibilité
    url: https://www.citedelamer.com/informations-pratiques/preparer-ma-visite-brochure/
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/activites/(2026)/(08)/la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite/index.md
  targetSha: 31cf759a4731220e7cf28133615ce9b763a2954f
  targetUrl: /articles/activites/la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite/
  decision: Choisir le billet adapté à l'âge des enfants et préparer une visite en novembre ou décembre 2026 sans se fier aux animations d'octobre terminées.
  affiliationPotential: Conserver le billet Booking.com existant avec sa réserve sur les moins de 5 ans et l'hébergement Le Hublot; vérifier l'offre Early Bird officielle avant toute recommandation commerciale supplémentaire.
  gsc:
    retrievedAt: 2026-11-19T01:30:40+01:00
    dataThrough: 2026-11-16
    signal: needs_query_check
    basis: Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.
    peakStart: 2026-10-24
    peakEnd: 2026-10-30
    recentStart: 2026-11-10
    recentEnd: 2026-11-16
    peakImpressions: 109
    recentImpressions: 37
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Cité de la Mer Cherbourg famille
      - activité famille Manche
---

## Mission retenue
Actualiser le guide familial de La Cité de la Mer à Cherbourg pour la fin 2026, sans réécriture générale.

## Pourquoi cette mission
L'article conserve au premier plan deux animations des 17 au 29 octobre désormais terminées, ainsi que des horaires centrés sur octobre. Le calendrier officiel précise les jours fermés en novembre et décembre, les fermetures anticipées des 24 et 31 décembre et la possibilité de revenir après déjeuner. La baisse GSC ne prouve pas un recul de classement; la lacune pratique est indépendante et vérifiable.

## Décision du lecteur
Savoir quel billet acheter selon l'âge des enfants, quand venir pendant les prochaines semaines et combien de temps prévoir sur place.

## Faits à traiter
Vérifier les dates d'ouverture de novembre-décembre 2026 et les horaires particuliers des 24 et 31 décembre, sans déduire les jours ouverts du seul horaire général. Reclasser les visites guidées d'octobre comme terminées ou les retirer de la partie consacrée aux choix actuels, sans effacer les informations encore utiles. Confirmer la réduction Early Bird de 1,50 € sous condition de réservation 48 h à l'avance et distinguer tarifs officiels et offres partenaires. Préserver la durée de 4 à 5 h, les 17 aquariums, l'interdiction du Redoutable aux moins de 5 ans, les conditions de Cherbourg Transatlantique, les pauses, l'accessibilité, les trois photos et crédits, le maillage et les deux liens Booking.com.

## Sources de départ
- https://www.citedelamer.com/informations-pratiques/tarifs-horaires/
- https://www.citedelamer.com/foire-questions/
- https://www.citedelamer.com/espaces/
- https://www.citedelamer.com/

## Affiliation
Billet La Cité de la Mer sur Booking.com et appartement Le Hublot déjà intégrés. Vérifier prix et conditions avant de les comparer à l'offre officielle; ne pas présenter une offre partenaire comme preuve d'un tarif.

## Continuations internes
Conserver le guide centré sur la visite familiale et les choix de billets; ne pas créer de nouvel article sur les animations passées. Vérifier les liens vers les offres existantes sans modifier les crédits d'images.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/activites/(2026)/(08)/la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite/index.md

---
title: "La Cité de la Mer à Cherbourg en famille: tarifs, visite et billets 2026"
subtitle: "Le Redoutable, les aquariums et Cherbourg Transatlantique: quelles options choisir avec des enfants?"
summary: "Préparer La Cité de la Mer à Cherbourg avec des enfants: prix, réductions, durée, âge minimum pour le sous-marin, visite immersive et horaires 2026."
slug: la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite
status: published
publishedAt: 2026-08-18T15:06:21+02:00
updatedAt: 2026-10-17T06:36:14.901Z
category: activites
readingTime: 7
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
reviewAt: 2026-11-02
sources:
  - title: La Cité de la Mer - Horaires et tarifs 2026, billets couplés
    url: https://www.citedelamer.com/informations-pratiques/tarifs-horaires/
  - title: La Cité de la Mer - Cherbourg Transatlantique, conditions et âges
    url: https://www.citedelamer.com/espaces/cherbourg-transatlantique/
  - title: La Cité de la Mer - Visites guidées et rencontres d'octobre
    url: https://www.citedelamer.com/experience/nos-visites-guidees/
  - title: La Cité de la Mer - Visite guidée des aquariums en octobre
    url: https://www.citedelamer.com/visite-guidee-aquariums/
  - title: La Cité de la Mer - Offre Early Bird
    url: https://www.citedelamer.com/evenement/early-bird/
  - title: La Cité de la Mer - Accès et Tarif Bas Carbone
    url: https://www.citedelamer.com/informations-pratiques/plan-acces/
  - title: La Cité de la Mer - Préparer la visite et accessibilité
    url: https://www.citedelamer.com/informations-pratiques/preparer-ma-visite-brochure/
---

<!-- article-image-credit -->
*Photo: [Raimond Spekking](https://commons.wikimedia.org/wiki/File:Le_Redoutable_(S_611),_Cit%C3%A9_de_la_Mer,_Cherbourg,_France-7927.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Cherbourg-en-Cotentin, **La Cité de la Mer** réunit les **17 aquariums de L'Océan du Futur**, l'histoire du **Titanic**, des espaces sur l'exploration sous-marine et la visite du sous-marin **Le Redoutable**. Pour découvrir l'ensemble avec des enfants, prévoyez **4 à 5 heures**. Le billet classique suffit à profiter du site; la nouvelle expérience **Cherbourg Transatlantique**, avec casque de réalité mixte, et certaines rencontres guidées demandent des billets spécifiques.

Le premier critère à vérifier est l'âge: **les enfants de moins de 5 ans ne peuvent pas visiter Le Redoutable**, tandis que Cherbourg Transatlantique est **recommandé à partir de 8 ans**.

<!-- article-image-body:02 -->

![Vue générale de la Cité de la Mer et du Redoutable à Cherbourg](/images/articles/2026/08/la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite-body-02.webp)

*Photo: [La Cité de la Mer - Sylvain Guichard](https://commons.wikimedia.org/wiki/File:Cit%C3%A9merCherbourg.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

## Billet classique, tarifs réduits ou formule combinée?

Le **billet classique 2026** coûte **21 € par adulte** et **15 € pour les enfants de 5 à 17 ans**. L'entrée est **gratuite pour les moins de 5 ans accompagnés d'un adulte payant**. Deux adultes et deux enfants de 5 à 17 ans paient donc **72 €** au plein tarif. L'entrée comprend les aquariums, Le Redoutable pour les visiteurs âgés d'au moins 5 ans, « Titanic, retour à Cherbourg » et « Océan sur écoute ».

Vous pouvez [consulter le billet La Cité de la Mer proposé sur Booking.com](https://www.booking.com/attractions/fr/prztomon0sgj-la-cite-de-la-mer-ticket.fr.html), puis comparer son **prix final et ses conditions** avec les formules ci-dessous. La fiche partenaire affiche une règle de gratuité différente de la grille officielle pour les tout-petits: **pour un enfant de 4 ans, confirmez impérativement les modalités de réservation**. La règle d'accès publiée par l'exploitant reste la gratuité **avant 5 ans**.

Deux réductions existent pour la visite classique, selon leurs conditions:

- **Early Bird:** **1,50 € de réduction par billet** si la réservation est faite en ligne au moins **48 heures** à l'avance. Pour quatre billets payants, cela ferait **66 €** au lieu de 72 €. Cette offre dépend des billets éligibles et ne doit pas être supposée cumulable avec une autre réduction.
- **Tarif Bas Carbone:** **18,90 € par adulte** et **13,50 € par enfant de 5 à 17 ans**, soit **64,80 €** pour la famille de référence. Il nécessite un justificatif de trajet en **train, bus ou vélo**: billet de bus du jour, billet de train vers Cherbourg ou Valognes datant de moins de sept jours, ou photo du cycliste avec son vélo devant le site.

Les **étudiants et adultes en situation de handicap** disposent également d'un tarif de **16 €**, et les **enfants en situation de handicap** de **12,50 €**, sur présentation d'un justificatif en cours de validité. Comparez les offres **avant l'achat**: leurs conditions ne sont pas automatiquement compatibles.

## Cherbourg Transatlantique: pour quel âge et à quel prix?

Cette **expérience de réalité mixte d'environ 35 minutes**, proposée dans l'ancienne Gare Maritime Transatlantique Art déco, s'ajoute à la visite classique. Elle coûte **11 € seule**, ou peut être achetée avec le musée pour **30 € par adulte** et **24 € par enfant**. Pour deux adultes et deux enfants, la formule combinée représente **108 €** si chaque enfant est éligible.

Le parcours est **recommandé à partir de 8 ans** et suit **son propre calendrier de réservation**, avec des créneaux habituellement annoncés de **10h45 à 17h en octobre**, sous réserve des dates disponibles. L'organisateur le **déconseille aux personnes épileptiques et aux femmes enceintes**. Avec un enfant plus jeune ou sans intérêt pour la réalité mixte, le billet classique est donc un choix complet, sans devoir ajouter cette option.

## Une rencontre avec un sous-marinier ou une visite des aquariums?

Pendant les vacances d'automne, deux expériences guidées peuvent compléter la visite:

- **Rencontre avec un ancien sous-marinier:** billets couplés à **28 € par adulte** et **19 € par enfant**, proposés les **samedis 17 et 24 octobre 2026**. Rendez-vous à **15h30**, pour environ **1h15 d'échange**; activité **à partir de 5 ans** et **non accessible aux personnes en fauteuil roulant** en raison des escaliers. La réservation se fait **en ligne**.
- **« Les trésors de L'Océan du Futur »:** parcours guidé d'environ **1h15** parmi les aquariums, annoncé les **20, 21, 22, 27, 28 et 29 octobre 2026**. L'organisateur demande d'arriver **15 minutes avant le départ**. Vérifiez les places et le prix de cette formule à la date souhaitée.

Ces animations sont **facultatives** et n'ont pas la même jauge ni les mêmes conditions d'accès que la visite libre. Pour une journée avec de jeunes enfants, le parcours classique reste le plus simple à organiser.

## Le Redoutable avec un enfant de moins de 5 ans

<!-- article-image-body:01 -->

![Le sous-marin Le Redoutable à la Cité de la Mer de Cherbourg](/images/articles/2026/08/la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite-body-01.webp)

*Photo: [Raimond Spekking](https://commons.wikimedia.org/wiki/File:Le_Redoutable_(S_611),_Cit%C3%A9_de_la_Mer,_Cherbourg,_France-7922.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

La visite de l'intérieur du sous-marin dure environ **35 minutes**. L'accès est **interdit aux moins de 5 ans pour des raisons de sécurité**, mais un audioguide adapté aux **5-12 ans** permet aux enfants plus âgés de mieux comprendre la vie à bord.

Avec un plus jeune enfant, l'organisateur propose **d'alterner entre adultes**: l'un visite Le Redoutable pendant que l'autre reste avec l'enfant, puis inversement. Cela n'empêche pas toute la famille de profiter des aquariums et des espaces « Océan sur écoute » ou Titanic.

## Aquariums, Titanic et pauses pendant la visite

Dans **L'Océan du Futur**, les **17 aquariums** alternent avec des découvertes scientifiques. Le parcours **« Titanic, retour à Cherbourg »** retrace l'escale du paquebot et présente notamment des objets remontés du site de l'épave. L'espace **« Océan sur écoute »** complète la visite avec des dispositifs sonores et des manipulations.

Le guide numérique **Poisson-pilote**, disponible en version familiale, coûte **5 € supplémentaires**; une **pièce d'identité** est demandée comme caution pour sa location. Il n'est pas nécessaire pour accéder aux espaces compris dans le billet.

Le **billet reste valable toute la journée**: vous pouvez sortir déjeuner puis revenir. Le site dispose du restaurant **Le Quai des Mers**, d'un snack selon la saison et de **deux aires de pique-nique**, dont une couverte. Une pause entre le sous-marin et les aquariums est donc possible sans perdre le reste de la visite.

## Horaires d'automne, accès et poussettes

En **octobre 2026**, le calendrier officiel prévoit selon les dates une ouverture de **9h30 à 18h** ou de **10h à 18h**. En **novembre**, certaines journées sont **fermées**. Les **caisses ferment 1h30 avant le site**: consultez les horaires du jour avant de venir et privilégiez une arrivée dans la matinée. 

La Cité de la Mer se trouve dans l'ancienne Gare Maritime Transatlantique, **allée du Président-Menut, 50100 Cherbourg-en-Cotentin**. En voiture, suivez la signalisation **Car Ferries / La Cité de la Mer**. Le **parking gratuit mais non surveillé** possède des emplacements réservés et une borne de recharge pour véhicules électriques. Depuis la **gare SNCF de Cherbourg**, comptez environ **15 minutes à pied**. Les dessertes de bus varient selon la période: vérifiez les lignes et horaires Cap Cotentin pour la date voulue plutôt que de vous fier aux renforts estivaux terminés.

Le site détient la marque **Tourisme et Handicap** pour les quatre familles de handicap, avec **rampes, ascenseurs** et possibilité de **prêt gratuit d'un fauteuil roulant**, à confirmer à l'accueil. Les principaux espaces conviennent mieux à la poussette que les coursives du sous-marin. **L'intérieur du Redoutable n'est pas accessible en fauteuil roulant**, mais une salle accessible propose un film sur sa visite. Pour une situation particulière, appelez le **02 33 20 26 69**.

Lors d'une **escale de paquebot**, la **Salle des Bagages** peut être inaccessible, sans que cela signifie une fermeture de l'ensemble de la Cité de la Mer.

## Où dormir à Cherbourg après la visite?

Si vous prévoyez un séjour dans le Cotentin plutôt qu'un simple aller-retour, **[Le Hublot à Cherbourg-en-Cotentin](https://www.booking.com/hotel/fr/le-hublot-cherbourg-en-cotentin.fr.html)** est un appartement de centre-ville avec **une chambre, un canapé-lit et une cuisine équipée**, à environ **10 minutes à pied** du musée selon son annonce. Sa capacité exacte doit être confirmée selon le **nombre d'adultes, d'enfants et leurs âges**: ne déduisez pas automatiquement le nombre maximal d'occupants de la présence du canapé-lit. La fiche Booking.com indique **qu'aucun lit bébé ni lit d'appoint n'est disponible**, contrairement à certaines descriptions touristiques plus anciennes. Comparez le prix, les couchages et les conditions d'annulation pour vos dates avant de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/vie-pratique/spot50-2026-2027-dans-la-manche-75-d-activites-pour-5/ | SPOT50 2026/2027 dans la Manche: 75 € d'activités pour 5 € | vie-pratique | Saint-Lô, Manche, Normandie
- /articles/parentalite/rejouets-a-cerences-donner-completer-et-acheter-des-jouets-d-occasion/ | Rejouets à Cérences: donner, compléter et acheter des jouets d’occasion | parentalite | Cérences, Manche, Normandie
- /articles/maison/renover-une-maison-dans-la-manche-dans-quel-ordre-demander-les-aides-en-2026/ | Rénover une maison dans la Manche: dans quel ordre demander les aides en 2026 ? | maison | Saint-Lô, Manche, Normandie
- /articles/activites/la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite/ | La Cité de la Mer à Cherbourg en famille: tarifs, visite et billets 2026 | activites | Cherbourg-en-Cotentin, Manche, Normandie
- /articles/bons-plans/le-mont-saint-michel-en-famille-a-petit-prix-en-automne-et-en-hiver/ | Le Mont-Saint-Michel en famille à petit prix en automne et en hiver | bons-plans | Le Mont-Saint-Michel, Manche, Normandie
- /articles/maison/a-villedieu-les-poeles-choisir-ou-faire-restaurer-ses-casseroles-en-cuivre/ | À Villedieu-les-Poêles, choisir ou faire restaurer ses casseroles en cuivre | maison | Villedieu-les-Poêles-Rouffigny, Manche, Normandie
- /articles/cuisine/a-granville-cuisiner-saint-jacques-bulots-et-moules-en-famille/ | À Granville, cuisiner Saint-Jacques, bulots et moules en famille | cuisine | Granville, Manche, Normandie
- /articles/voyages/mont-saint-michel-en-famille-en-2026-une-journee-ou-un-week-end-ou-dormir-et-quel-budget-prevoir/ | Mont-Saint-Michel en famille en 2026: une journée ou un week-end, où dormir et quel budget prévoir | voyages | Le Mont-Saint-Michel, Manche, Normandie
- /articles/activites/un-dimanche-a-cacao-en-famille-marche-hmong-insectes-et-poterie/ | Un dimanche à Cacao en famille: marché hmong, insectes et poterie | activites | Roura, Guyane, Guyane
- /articles/activites/parc-du-moulin-a-tan-a-sens-une-sortie-nature-gratuite-en-famille/ | Parc du Moulin à Tan à Sens: une sortie nature gratuite en famille | activites | Sens, Yonne, Bourgogne-Franche-Comté
- /articles/activites/nuits-de-branfere-2026-preparer-une-sortie-en-famille-dans-le-morbihan/ | Nuits de Branféré 2026: préparer une sortie en famille dans le Morbihan | activites | Le Guerno, Morbihan, Bretagne
- /articles/activites/parc-animalier-des-angles-en-famille-quel-circuit-choisir-et-comment-preparer-la-visite/ | Parc animalier des Angles en famille: quel circuit choisir et comment préparer la visite ? | activites | Les Angles, Pyrénées-Orientales, Occitanie
- /articles/activites/parc-phoenix-a-nice-en-famille-serre-tropicale-animaux-et-jeux/ | Parc Phoenix à Nice en famille: serre tropicale, animaux et jeux | activites | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/activites/les-z-accroches-pres-de-nevers-quel-accrobranche-choisir-avec-des-enfants/ | Les Z'Accrochés près de Nevers: quel accrobranche choisir avec des enfants? | activites | Sauvigny-les-Bois, Nièvre, Bourgogne-Franche-Comté
- /articles/activites/musee-de-la-ceramique-de-desvres-en-famille-visite-ateliers-et-tarifs/ | Musée de la Céramique de Desvres en famille: visite, ateliers et tarifs | activites | Desvres, Pas-de-Calais, Hauts-de-France
- /articles/activites/lewarde-en-famille-decouvrir-la-mine-et-la-vie-des-mineurs/ | Lewarde en famille: découvrir la mine et la vie des mineurs | activites | Lewarde, Nord, Hauts-de-France
- /articles/activites/cremieu-en-famille-balade-gratuite-dans-la-cite-medievale/ | Crémieu en famille: balade gratuite dans la cité médiévale | activites | Crémieu, Isère, Auvergne-Rhône-Alpes
- /articles/activites/corderie-royale-de-rochefort-en-famille-visite-tarifs-et-ateliers/ | Corderie Royale de Rochefort en famille: visite, tarifs et ateliers | activites | Rochefort, Charente-Maritime, Nouvelle-Aquitaine
- /articles/activites/musee-de-l-air-et-de-l-espace-au-bourget-quel-parcours-en-famille/ | Musée de l’Air et de l’Espace au Bourget: quel parcours en famille? | activites | Le Bourget, Seine-Saint-Denis, Île-de-France
- /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | Atelier bâton de pluie gratuit à Paris le 18 novembre 2026: dès 6 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | Lecture d'hiver gratuite à Paris le 12 décembre 2026: deux séances pour les 1-3 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | Bricolages de Noël gratuits à Paris le 19 décembre 2026: un atelier dès 4 ans | activites | Paris, Paris, Île-de-France

### Historique Radar lié

- opportunity | /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | 2026-11-06T12:30:50.449Z
- opportunity | /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | 2026-11-06T03:27:40.597Z
- refresh | /articles/activites/la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite/ | 2026-10-17T06:36:14.977Z
- opportunity | /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | 2026-11-06T09:33:42.136Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
