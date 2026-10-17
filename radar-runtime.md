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
title: "La Cité de la Mer à Cherbourg en famille: billets, tarifs et durée"
subtitle: "Visite classique, Le Redoutable et Cherbourg Transatlantique: choisir selon l'âge des enfants"
summary: "La Cité de la Mer à Cherbourg en famille: tarifs 2026, billets combinés, visites guidées en octobre, durée, restrictions d'âge et accès."
slug: la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite
status: published
publishedAt: 2026-08-18T15:06:21+02:00
updatedAt: 2026-08-30T11:25:54+02:00
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
radar:
  schemaVersion: 1
  phase: 2
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

## Billet classique, tarifs réduits ou formule combinée?

Le **billet classique 2026** coûte **21 € par adulte** et **15 € pour les enfants de 5 à 17 ans**. L'entrée est **gratuite pour les moins de 5 ans accompagnés d'un adulte payant**. Deux adultes et deux enfants de 5 à 17 ans paient donc **72 €** au plein tarif. L'entrée comprend les aquariums, Le Redoutable pour les visiteurs âgés d'au moins 5 ans, « Titanic, retour à Cherbourg » et « Océan sur écoute ».

Vous pouvez [consulter le billet La Cité de la Mer proposé sur Booking.com](https://www.booking.com/attractions/fr/prztomon0sgj-la-cite-de-la-mer-ticket.fr.html), puis comparer son **prix final et ses conditions** avec les formules ci-dessous. La fiche partenaire affiche une règle de gratuité différente de la grille officielle pour les tout-petits: **pour un enfant de 4 ans, confirmez impérativement les modalités de réservation**. La règle d'accès publiée par l'exploitant reste la gratuité **avant 5 ans**.

Deux réductions existent pour la visite classique, selon leurs conditions:

- **Early Bird:** **1,50 € de réduction par billet** si la réservation est faite en ligne au moins **48 heures** à l'avance. Pour quatre billets payants, cela ferait **66 €** au lieu de 72 €. Cette offre dépend des billets éligibles et ne doit pas être supposée cumulable avec une autre réduction.
- **Tarif Bas Carbone:** **18,90 € par adulte** et **13,50 € par enfant de 5 à 17 ans**, soit **64,80 €** pour la famille de référence. Il nécessite un justificatif de trajet en **train, bus ou vélo**: billet de bus du jour, billet de train vers Cherbourg ou Valognes datant de moins de sept jours, ou photo du cycliste avec son vélo devant le site.

Les **étudiants et adultes en situation de handicap** disposent également d'un tarif de **16 €**, et les **enfants en situation de handicap** de **12,50 €**, sur présentation des justificatifs demandés. Comparez les offres **avant l'achat**: leurs conditions ne sont pas automatiquement compatibles.

## Cherbourg Transatlantique: pour quel âge et à quel prix?

Cette **expérience de réalité mixte**, proposée dans l'ancienne Gare Maritime Transatlantique Art déco, s'ajoute à la visite classique. Elle coûte **11 € seule**, ou peut être achetée avec le musée pour **30 € par adulte** et **24 € par enfant**. Pour deux adultes et deux enfants, la formule combinée représente **108 €** si chaque enfant est éligible.

Le parcours est **recommandé à partir de 8 ans** et suit **son propre calendrier de réservation**. L'organisateur le **déconseille aux personnes épileptiques et aux femmes enceintes**. Avec un enfant plus jeune ou sans intérêt pour la réalité mixte, le billet classique est donc un choix complet, sans devoir ajouter cette option.

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

<!-- article-image-body:02 -->

![Vue générale de la Cité de la Mer et du Redoutable à Cherbourg](/images/articles/2026/08/la-cite-de-la-mer-a-cherbourg-en-famille-tarifs-duree-et-conseils-de-visite-body-02.webp)

*Photo: [La Cité de la Mer - Sylvain Guichard](https://commons.wikimedia.org/wiki/File:Cit%C3%A9merCherbourg.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Dans **L'Océan du Futur**, les **17 aquariums** alternent avec des découvertes scientifiques. Le parcours **« Titanic, retour à Cherbourg »** retrace l'escale du paquebot et présente notamment des objets remontés du site de l'épave. L'espace **« Océan sur écoute »** complète la visite avec des dispositifs sonores et des manipulations.

Le guide numérique **Poisson-pilote**, disponible en version familiale, coûte **5 € supplémentaires**; une **pièce d'identité** est demandée comme caution pour sa location. Il n'est pas nécessaire pour accéder aux espaces compris dans le billet.

Le **billet reste valable toute la journée**: vous pouvez sortir déjeuner puis revenir. Le site dispose du restaurant **Le Quai des Mers**, d'un snack selon la saison et de **deux aires de pique-nique**, dont une couverte. Une pause entre le sous-marin et les aquariums est donc possible sans perdre le reste de la visite.

## Horaires d'automne, accès et poussettes

En **octobre 2026**, le calendrier officiel prévoit selon les dates une ouverture de **9h30 à 18h** ou de **10h à 18h**. En **novembre**, certaines journées sont **fermées**. Les **caisses ferment 1h30 avant le site**: consultez les horaires du jour avant de venir et, pour profiter des 4 à 5 heures de visite, privilégiez une arrivée dans la matinée. Les horaires renforcés de juillet-août ne s'appliquent plus.

La Cité de la Mer se trouve dans l'ancienne Gare Maritime Transatlantique, **allée du Président-Menut, 50100 Cherbourg-en-Cotentin**. Le **parking gratuit mais non surveillé** possède des emplacements réservés et une borne de recharge pour véhicules électriques. Depuis la **gare SNCF de Cherbourg**, comptez environ **15 minutes à pied**. Les dessertes de bus varient selon la période: vérifiez les lignes et horaires Cap Cotentin pour la date voulue plutôt que de vous fier aux renforts estivaux terminés.

Le site détient la marque **Tourisme et Handicap** pour les quatre familles de handicap, avec **rampes, ascenseurs** et possibilité de **prêt gratuit d'un fauteuil roulant**, à confirmer à l'accueil. Les principaux espaces conviennent mieux à la poussette que les coursives du sous-marin. **L'intérieur du Redoutable n'est pas accessible en fauteuil roulant**, mais une salle accessible propose un film sur sa visite. Pour une situation particulière, appelez le **02 33 20 26 69**.

Lors d'une **escale de paquebot**, la **Salle des Bagages** peut être inaccessible, sans que cela signifie une fermeture de l'ensemble de la Cité de la Mer.

## Où dormir à Cherbourg après la visite?

Si vous prévoyez un séjour dans le Cotentin plutôt qu'un simple aller-retour, **[Le Hublot à Cherbourg-en-Cotentin](https://www.booking.com/hotel/fr/le-hublot-cherbourg-en-cotentin.fr.html)** est un appartement de centre-ville avec **une chambre et un canapé-lit**. Sa capacité exacte doit être confirmée selon le **nombre d'adultes, d'enfants et leurs âges**: ne déduisez pas automatiquement le nombre maximal d'occupants de la présence du canapé-lit. La fiche Booking.com indique **qu'aucun lit bébé ni lit d'appoint n'est disponible**, contrairement à certaines descriptions touristiques plus anciennes. Comparez le prix, les couchages et les conditions d'annulation pour vos dates avant de réserver.

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
