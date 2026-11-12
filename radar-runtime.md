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
title: "Noël 2026 à Chantilly: Le Noël oublié, billets et séances en famille"
subtitle: Spectacle équestre, activités selon l'âge, tarifs et accès avec enfants
summary: Du 28 novembre 2026 au 3 janvier 2027, découvrez les séances et tarifs du Noël oublié à Chantilly, ainsi que trois visites de Noël distinctes à réserver selon l'âge.
category: evenements
location:
  city: Chantilly
  department: Oise
  region: Hauts-de-France
image:
  src: /images/articles/2026/10/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine.webp
  alt: Vue d'ensemble des Grandes Écuries de Chantilly, photographiées hors spectacle de Noël
sources:
  - title: Château de Chantilly - spectacle Le Noël oublié
    url: https://chateaudechantilly.fr/evenement/spectacle-de-noel-le-noel-oublie/
  - title: Château de Chantilly - Noël au château
    url: https://chateaudechantilly.fr/noel-au-chateau/
  - title: Château de Chantilly - billets et tarifs
    url: https://chateaudechantilly.fr/billets-et-tarifs/
  - title: Château de Chantilly - visite Noël au fil des œuvres
    url: https://chateaudechantilly.fr/evenement/visite-en-famille-noel-au-fil-des-oeuvres/
  - title: Château de Chantilly - visite contée
    url: https://chateaudechantilly.fr/evenement/si-chantilly-metait-conte-en-attendant-noel/
  - title: Château de Chantilly - veillée enchantée
    url: https://chateaudechantilly.fr/evenement/noel-chateau-chantilly-nocturne-enchantee/
  - title: Château de Chantilly - accès
    url: https://chateaudechantilly.fr/acces/
  - title: Château de Chantilly - FAQ
    url: https://chateaudechantilly.fr/foire-aux-questions/
  - title: Château de Chantilly - accessibilité
    url: https://chateaudechantilly.fr/visiteurs-en-situation-de-handicap/
  - title: Château de Chantilly - conditions de vente
    url: https://chateaudechantilly.fr/conditions-generales-de-vente/
eventEndsAt: 2027-01-03
topic:
  key: evenements|chantilly|noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine|2026
  keywords:
    - Noël château de Chantilly 2026
    - Le Noël oublié spectacle équestre
    - billet spectacle Noël Chantilly famille
slug: noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine
status: published
publishedAt: 2026-10-26T21:31:06.019Z
updatedAt: null
readingTime: 5
affiliate:
  enabled: true
  type: travel
  destination: Chantilly
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/index.md
  targetSha: 2292d13cbe3914644da4ace31418299de405609b
  targetUrl: /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/
  decision: "Choisir une sortie de Noël adaptée à l'âge des enfants et au budget: spectacle équestre seul, journée château et spectacle, ou animation familiale distincte, sans confondre les billets."
  affiliationPotential: Conserver l'hébergement Booking.com déjà présent; aucune nouvelle billetterie partenaire vérifiée, privilégier la réservation officielle.
  gsc:
    retrievedAt: 2026-11-12T03:33:45+01:00
    dataThrough: 2026-11-09
    signal: needs_query_check
    basis: "Visibilité récente : 128 impressions sur trois jours, puis 2 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-28
    peakEnd: 2026-10-30
    recentStart: 2026-11-07
    recentEnd: 2026-11-09
    peakImpressions: 128
    recentImpressions: 2
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Noël château de Chantilly 2026
      - Le Noël oublié spectacle équestre
      - billet spectacle Noël Chantilly famille
---

<!-- article-image-credit -->
*Photo: [P.poschadel](https://commons.wikimedia.org/wiki/File:Chantilly_(60),_Grandes_%C3%A9curies.jpg) - [CC BY-SA 2.0 fr](https://creativecommons.org/licenses/by-sa/2.0/fr/deed.en/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Du **28 novembre 2026 au 3 janvier 2027**, les Grandes Écuries du château de Chantilly accueillent **Le Noël oublié**, spectacle équestre d'une heure. Chevaux, costumes et effets visuels accompagnent Vérité, un enfant parti retrouver la mémoire de Noël sur une île enchantée. Le domaine propose aussi des visites de Noël distinctes: le bon choix dépend de l'âge des enfants, du temps disponible et du budget.

## Quel billet choisir et quel budget prévoir ?

<!-- article-image-body:02 -->

![Vue générale du château de Chantilly, accessible avec le billet combiné château et spectacle](/images/articles/2026/10/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine-body-02.webp)

<!-- /article-image-body:02 -->

<!-- article-image-body:01 -->

![Rangée de stalles pour chevaux à l'intérieur du musée vivant du Cheval de Chantilly](/images/articles/2026/10/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine-body-01.webp)

<!-- /article-image-body:01 -->

Le **billet Spectacle de Noël**, à **24 € pour les plus de 25 ans** et **19 € de 3 à 25 ans**, comprend la représentation, les Grandes Écuries et le musée vivant du Cheval.

Le **billet 1 Jour + Spectacle**, à **32 € par adulte** et **26 € de 3 à 25 ans**, ajoute le château et le parc. Pour visiter le château, prévoyez un **créneau d'entrée horodaté** et suffisamment de temps avant la séance.

Pour **deux adultes et deux enfants de 3 à 25 ans**, comptez **86 €** pour le spectacle seul ou **116 €** avec le château et le parc, hors dépenses supplémentaires. Les **moins de 3 ans** assistent gratuitement au spectacle **sur les genoux d'un adulte**, sans siège individuel.

Le **billet Famille classique à 55 €**, pour deux adultes et deux ou trois enfants de 7 à 17 ans, **n'inclut pas ce spectacle**. Les billets du spectacle sont en nombre limité et ne sont normalement ni repris ni échangés: vérifiez la date choisie avant de payer. Les tarifs et réservations figurent sur la [page officielle du spectacle](https://chateaudechantilly.fr/evenement/spectacle-de-noel-le-noel-oublie/).

## Quelles séances avec des enfants ?

Les représentations ont lieu **à 14 h 30** les jours programmés. Une seconde séance **à 16 h 30** est annoncée les **28 et 29 novembre**, les **5, 6, 12, 13, 19, 20, 21, 22, 23, 26, 27, 28, 29 et 30 décembre**, puis le **2 janvier**. Le **3 janvier**, seule la séance de **14 h 30** est prévue. Le spectacle n'est pas quotidien: vérifiez le calendrier avant le déplacement.

Avec de jeunes enfants, 14 h 30 permet de rentrer plus tôt; la séance de 16 h 30 se termine vers 17 h 30. Le domaine conseille de se présenter **30 minutes avant**; ses conditions de vente demandent d'arriver au plus tard **15 minutes avant** et prévoient la fermeture des portes au lever du rideau, sans remboursement pour un retard.

Les **décorations de Noël commencent dès le 14 novembre**, selon le [programme officiel de Noël](https://chateaudechantilly.fr/noel-au-chateau/), soit deux semaines avant le début du spectacle. Le **coin gourmand du parc** est annoncé **du 20 décembre au 4 janvier, de 10 h à 18 h**.

## Spectacle ou autre activité de Noël: que choisir selon l'âge ?

Ces trois activités sont **distinctes du spectacle équestre** et ne sont pas comprises dans son billet. Vérifiez leur propre billetterie avant d'organiser une journée combinée.

- **Dès 5 ans, les contes:** [Si Chantilly m'était conté… En attendant Noël](https://chateaudechantilly.fr/evenement/si-chantilly-metait-conte-en-attendant-noel/) se déroule les **23 et 30 décembre à 15 h**, pendant **1 heure**, dans la cour d'honneur. Comptez **9 € en supplément du billet horodaté 1 jour**. La page officielle annonce une billetterie prochainement en ligne.
- **Dès 6 ans, la découverte des œuvres:** [Noël au fil des œuvres](https://chateaudechantilly.fr/evenement/visite-en-famille-noel-au-fil-des-oeuvres/) dure **1 heure à 15 h**, les **20, 21, 24, 26, 27, 28 et 31 décembre**, puis les **1er, 2 et 3 janvier**. Le supplément est de **7 € par personne**, en plus du billet horodaté 1 jour; la réservation est annoncée prochainement.
- **Dès 6 ans, une sortie en soirée:** [La veillée enchantée](https://chateaudechantilly.fr/evenement/noel-chateau-chantilly-nocturne-enchantee/) propose un parcours théâtralisé les **20, 21, 22 et 23 décembre**, avec des départs toutes les **30 minutes entre 17 h 30 et 21 h**. Tarif annoncé: **15 €**, ou **12 € pour les moins de 12 ans**. Un billet propre à cette visite est à réserver.

Pour un enfant de moins de 5 ans, le spectacle reste une option plus simple que ces visites guidées, à condition qu'il puisse rester assis pendant une heure. Pour les familles souhaitant surtout explorer le château, le billet 1 jour et une visite adaptée à l'âge peuvent suffire, sans acheter de billet de spectacle. Attention aux chevauchements: les visites à 15 h ne peuvent pas être suivies en même temps que la représentation de 14 h 30.

## Poussettes, bébés et accessibilité

<!-- article-image-body:03 -->

![Vue intérieure de l'aile est des Grandes Écuries de Chantilly, avec ses stalles et son sol](/images/articles/2026/10/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine-body-03.webp)

*Photo: [P.poschadel](https://commons.wikimedia.org/wiki/File:Chantilly_(60),_grandes_%C3%A9curies,_vaisseau_est,_vue_vers_l%27est.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

Les **poussettes et porte-bébés sans armature** sont admis dans les Grandes Écuries, mais aucune poussette n'est prêtée. Le domaine ne précise pas où les déposer pendant la représentation assise: demandez-le si nécessaire. Des **matelas à langer** sont disponibles dans les toilettes du château et des Grandes Écuries; les restaurants peuvent aider à réchauffer biberons et petits pots. **Photos et vidéos sont interdites pendant le spectacle**, même sans flash.

Le dôme dispose de **12 places réservées aux personnes en situation de handicap**, à demander au **03 44 27 31 51** ou à **publics@chateaudechantilly.fr**. Pour un billet de spectacle, la personne concernée et un accompagnant bénéficient chacun d'un **tarif réduit sur justificatif**, et non de la gratuité habituelle des visites. Les pavés des Écuries et les chemins irréguliers du parc peuvent compliquer la circulation en fauteuil.

## Venir et prolonger la visite

Depuis **Paris-Gare du Nord**, le **TER** met environ **25 minutes** jusqu'à Chantilly-Gouvieux, contre **45 minutes en RER D**. Le **passe Navigo n'est pas valable** jusqu'à Chantilly. La gare est à environ **20 minutes à pied** du domaine; des bus gratuits DUC, 645 et une navette touristique sont annoncés, sous réserve de leurs horaires. Le **parking P1 coûte 5 € par voiture**.

Le **Café Les Écuries** propose une restauration rapide. Pour compléter le séjour, consultez [Chantilly en famille](https://www.fam-space.fr/destinations/hauts-de-france/oise/chantilly/); avec un enfant d'environ huit ans ou plus, l'[atelier de crème Chantilly](https://www.fam-space.fr/articles/cuisine/atelier-de-creme-chantilly-avec-des-enfants-a-partir-de-quel-age-et-comment-reserver/) est une activité distincte sur réservation.

Pour passer une nuit sur place, le [Best Western Plus Hotel Du Parc Chantilly sur Booking.com](https://www.booking.com/hotel/fr/du-parc-chantilly.fr.html) propose notamment des chambres pour quatre personnes. Vérifiez la capacité adaptée aux âges des enfants, le tarif et les disponibilités aux dates choisies.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/index.md

---
title: "Noël 2026 à Chantilly: Le Noël oublié, billets et séances en famille"
subtitle: Spectacle équestre, visite du château, tarifs et accès avec enfants
summary: Du 28 novembre 2026 au 3 janvier 2027, Le Noël oublié se joue aux Grandes Écuries. Tarifs, séances et choix entre spectacle seul et visite du domaine.
category: evenements
location:
  city: Chantilly
  department: Oise
  region: Hauts-de-France
image:
  src: "/images/articles/2026/10/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine.webp"
  alt: "Vue d'ensemble des Grandes Écuries de Chantilly, photographiées hors spectacle de Noël"
sources:
  - title: Château de Chantilly - spectacle Le Noël oublié
    url: https://chateaudechantilly.fr/evenement/spectacle-de-noel-le-noel-oublie/
  - title: Château de Chantilly - Noël au château
    url: https://chateaudechantilly.fr/noel-au-chateau/
  - title: Château de Chantilly - billets et tarifs
    url: https://chateaudechantilly.fr/billets-et-tarifs/
  - title: Château de Chantilly - accès
    url: https://chateaudechantilly.fr/acces/
  - title: Château de Chantilly - FAQ
    url: https://chateaudechantilly.fr/foire-aux-questions/
  - title: Château de Chantilly - accessibilité
    url: https://chateaudechantilly.fr/visiteurs-en-situation-de-handicap/
  - title: Château de Chantilly - conditions de vente
    url: https://chateaudechantilly.fr/conditions-generales-de-vente/
eventEndsAt: 2027-01-03
topic:
  key: evenements|chantilly|noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine|2026
  keywords:
    - Noël château de Chantilly 2026
    - Le Noël oublié spectacle équestre
    - billet spectacle Noël Chantilly famille
slug: noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine
status: published
publishedAt: 2026-10-26T21:31:06.019Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Chantilly
---
<!-- article-image-credit -->
*Photo: [P.poschadel](https://commons.wikimedia.org/wiki/File:Chantilly_(60),_Grandes_%C3%A9curies.jpg) - [CC BY-SA 2.0 fr](https://creativecommons.org/licenses/by-sa/2.0/fr/deed.en/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Du **28 novembre 2026 au 3 janvier 2027**, les Grandes Écuries du château de Chantilly accueillent **Le Noël oublié**, spectacle équestre d'une heure. Chevaux, costumes et effets visuels accompagnent Vérité, un enfant parti retrouver la mémoire de Noël sur une île enchantée.

## Quel billet choisir et quel budget prévoir ?

<!-- article-image-body:02 -->

![Vue générale du château de Chantilly, accessible avec le billet combiné château et spectacle](/images/articles/2026/10/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine-body-02.webp)

<!-- /article-image-body:02 -->

<!-- article-image-body:01 -->

![Rangée de stalles pour chevaux à l'intérieur du musée vivant du Cheval de Chantilly](/images/articles/2026/10/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine-body-01.webp)

<!-- /article-image-body:01 -->

Le **billet Spectacle de Noël**, à **24 € pour les plus de 25 ans** et **19 € de 3 à 25 ans**, comprend la représentation, les Grandes Écuries et le musée vivant du Cheval.

Le **billet 1 Jour + Spectacle**, à **32 € par adulte** et **26 € de 3 à 25 ans**, ajoute le château et le parc. Pour visiter le château, prévoyez un **créneau d'entrée horodaté** et suffisamment de temps avant la séance.

Pour **deux adultes et deux enfants de 3 à 25 ans**, comptez **86 €** pour le spectacle seul ou **116 €** avec le château et le parc, hors dépenses supplémentaires. Les **moins de 3 ans** assistent gratuitement au spectacle **sur les genoux d'un adulte**, sans siège individuel.

Le **billet Famille classique à 55 €**, pour deux adultes et deux ou trois enfants de 7 à 17 ans, **n'inclut pas ce spectacle**. Les billets du spectacle sont en nombre limité et ne sont normalement ni repris ni échangés: vérifiez la date choisie avant de payer.

## Quelles séances avec des enfants ?

Les représentations ont lieu **à 14 h 30** les jours programmés. Une seconde séance **à 16 h 30** est annoncée les **28 et 29 novembre**, les **5, 6, 12, 13, 19, 20, 21, 22, 23, 26, 27, 28, 29 et 30 décembre**, puis le **2 janvier**. Le **3 janvier**, seule la séance de **14 h 30** est prévue. Le spectacle n'est pas quotidien: vérifiez le calendrier avant le déplacement.

Avec de jeunes enfants, 14 h 30 permet de rentrer plus tôt; la séance de 16 h 30 se termine vers 17 h 30. Le domaine conseille de se présenter **30 minutes avant**; ses conditions de vente demandent d'arriver au plus tard **15 minutes avant** et prévoient la fermeture des portes au lever du rideau, sans remboursement pour un retard.

Les décorations commencent **le 15 novembre**, avant les spectacles. Le **coin gourmand du parc** est annoncé seulement **du 20 décembre au 4 janvier, de 10 h à 18 h**.

## Poussettes, bébés et accessibilité

<!-- article-image-body:03 -->

![Vue intérieure de l'aile est des Grandes Écuries de Chantilly, avec ses stalles et son sol](/images/articles/2026/10/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine-body-03.webp)

*Photo: [P.poschadel](https://commons.wikimedia.org/wiki/File:Chantilly_(60),_grandes_%C3%A9curies,_vaisseau_est,_vue_vers_l%27est.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

Les **poussettes et porte-bébés sans armature** sont admis dans les Grandes Écuries, mais aucune poussette n'est prêtée. Le domaine ne précise pas où les déposer pendant la représentation assise: demandez-le si nécessaire. Des **matelas à langer** sont disponibles dans les toilettes du château et des Grandes Écuries; les restaurants peuvent aider à réchauffer biberons et petits pots. **Photos et vidéos sont interdites pendant le spectacle**, même sans flash.

Le dôme dispose de **12 places réservées aux personnes en situation de handicap**, à demander au **03 44 27 31 51** ou à **publics@chateaudechantilly.fr**. Pour un billet de spectacle, la personne concernée et un accompagnant bénéficient chacun d'un **tarif réduit sur justificatif**, et non de la gratuité habituelle des visites. Les pavés des Écuries et les chemins irréguliers du parc peuvent compliquer la circulation en fauteuil.

## Venir et prolonger la visite

Depuis **Paris-Gare du Nord**, le **TER** met environ **25 minutes** jusqu'à Chantilly-Gouvieux, contre **45 minutes en RER D**. Le **passe Navigo n'est pas valable** jusqu'à Chantilly. La gare est à environ **20 minutes à pied** du domaine; des bus gratuits DUC, 645 et une navette touristique sont annoncés, sous réserve de leurs horaires. Le **parking P1 coûte 5 € par voiture**.

Le **Café Les Écuries** propose une restauration rapide. Pour compléter le séjour, consultez [Chantilly en famille](https://www.fam-space.fr/destinations/hauts-de-france/oise/chantilly/); avec un enfant d'environ huit ans ou plus, l'[atelier de crème Chantilly](https://www.fam-space.fr/articles/cuisine/atelier-de-creme-chantilly-avec-des-enfants-a-partir-de-quel-age-et-comment-reserver/) est une activité distincte sur réservation.

Pour passer une nuit sur place, le [Best Western Plus Hotel Du Parc Chantilly sur Booking.com](https://www.booking.com/hotel/fr/du-parc-chantilly.fr.html) propose notamment des chambres pour quatre personnes. Vérifiez la capacité adaptée aux âges des enfants, le tarif et les disponibilités aux dates choisies.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/cuisine/atelier-de-creme-chantilly-avec-des-enfants-a-partir-de-quel-age-et-comment-reserver/ | Atelier de crème Chantilly avec des enfants: à partir de quel âge et comment réserver | cuisine | Chantilly, Oise, Hauts-de-France
- /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | Noël de Casse-Noisette 2026 à Pierrefonds: visites, dates et tarifs en famille | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | Noël 2026 au château de Goulaine: dates, billets et conseils en famille | evenements | Haute-Goulaine, Loire-Atlantique, Pays de la Loire
- /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | Noël des Siècles 2026 à Champs-sur-Marne: billets, budget et horaires en famille | evenements | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | Noël au château de Cheverny 2026: billets, mapping et visite en famille | evenements | Cheverny, Loir-et-Cher, Centre-Val de Loire
- /articles/sorties/chateau-de-compiegne-en-famille-que-visiter-et-comment-organiser-la-journee/ | Château de Compiègne en famille: que visiter et comment organiser la journée? | sorties | Compiègne, Oise, Hauts-de-France
- /articles/evenements/ain-croyable-noel-2026-a-bourg-en-bresse-en-famille-spectacle-arbre-de-noel-et-tarifs/ | Ain'Croyable Noël 2026 à Bourg-en-Bresse en famille: spectacle, arbre de Noël et tarifs | evenements | Bourg-en-Bresse, Ain, Auvergne-Rhône-Alpes
- /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | Noël 2026 à Chantilly: Le Noël oublié, billets et séances en famille | evenements | Chantilly, Oise, Hauts-de-France
- /articles/evenements/chambly-kids-festival-2027-quatre-spectacles-pour-les-enfants-dates-et-ages/ | Chambly Kids Festival 2027: quatre spectacles pour les enfants, dates et âges | evenements | Chambly, Oise, Hauts-de-France
- /articles/voyages/domaine-de-chaalis-en-famille-que-visiter-pendant-les-travaux/ | Domaine de Chaalis en famille: que visiter pendant les travaux ? | voyages | Fontaine-Chaalis, Oise, Hauts-de-France
- /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | Rétro Game Festival 2026 à Beauvais: programme, billets famille et animations enfants | evenements | Beauvais, Oise, Hauts-de-France
- /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | Noël Gaulois 2026 au Parc Astérix: billets, glissades et spectacles en famille | evenements | Plailly, Oise, Hauts-de-France
- /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | Halloween 2026 à la Mer de Sable: spectacles, frissons et billets en famille | evenements | Ermenonville, Oise, Hauts-de-France
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/bons-plans/pass-sports-citoyen-dans-l-oise-15-a-cumuler-avec-le-pass-sport-en-2026/ | Pass Sports Citoyen dans l'Oise: 15 € à cumuler avec le pass Sport en 2026 | bons-plans | Beauvais, Oise, Hauts-de-France
- /articles/parentalite/ateliers-parents-malins-dans-l-oise-quels-rendez-vous-gratuits-choisir-avant-fin-2026/ | Ateliers Parents Malins dans l'Oise: quels rendez-vous gratuits choisir avant fin 2026 ? | parentalite | Plusieurs communes, Oise, Hauts-de-France
- /articles/maison/meubles-et-encombrants-a-compiegne-recyclerie-dechetterie-ou-collecte-a-domicile/ | Meubles et encombrants à Compiègne: recyclerie, déchetterie ou collecte à domicile? | maison | Compiègne, Oise, Hauts-de-France
- /articles/evenements/festival-tete-de-mioche-2027-a-l-horme-quels-spectacles-choisir-avec-les-enfants/ | Festival Tête de mioche 2027 à L'Horme: quels spectacles choisir avec les enfants ? | evenements | L'Horme, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/festival-mini-kids-2027-aux-orres-trois-jours-pour-les-3-6-ans/ | Festival Mini Kids 2027 aux Orres, trois jours pour les 3-6 ans | evenements | Les Orres, Hautes-Alpes, Provence-Alpes-Côte d’Azur
- /articles/evenements/fete-du-citron-2027-a-menton-en-famille-que-voir-et-combien-prevoir/ | Fête du Citron 2027 à Menton en famille: que voir et combien prévoir ? | evenements | Menton, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/carnaval-de-limoux-2027-en-famille-dates-fecos-et-conseils-pratiques/ | Carnaval de Limoux 2027 en famille: dates, Fécos et conseils pratiques | evenements | Limoux, Aude, Occitanie

### Historique Radar lié

- opportunity | /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | 2026-10-18T12:12:00.071Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | 2026-10-26T21:31:06.119Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | 2026-10-23T19:58:30.214Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | 2026-11-03T15:36:10.146Z
- opportunity | /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | 2026-10-27T07:35:50.437Z
- opportunity | /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | 2026-10-26T18:32:56.730Z
- opportunity | /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | 2026-10-24T09:33:57.174Z
- opportunity | /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | 2026-10-26T10:34:36.317Z
- opportunity | /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | 2026-10-11T19:35:57.703Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
