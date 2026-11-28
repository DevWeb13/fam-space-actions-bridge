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
title: "Noël 2026 à Chantilly: Le Noël oublié, billets et séances en famille"
subtitle: Spectacle équestre, activités selon l'âge, tarifs et accès avec enfants
summary: Du 28 novembre 2026 au 3 janvier 2027, découvrez les séances et tarifs du Noël oublié à Chantilly et les autres visites de Noël à choisir selon l'âge.
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
updatedAt: 2026-11-12T18:32:15.828Z
readingTime: 5
affiliate:
  enabled: true
  type: travel
  destination: Chantilly
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/index.md
  targetSha: b0b5d0b4f004f89788fc0601cc0ac8d64cbdbceb
  targetUrl: /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/
  decision: Choisir entre une séance du Noël oublié et une journée de Noël au domaine, avec les animations comprises dans chaque billet, les dates compatibles et les réservations nécessaires selon l'âge des enfants.
  affiliationPotential: Conserver le Best Western Plus Hotel Du Parc Chantilly sur Booking.com (chambre familiale pour quatre vérifiée, disponibilité aux dates non confirmée). Tiqets propose une entrée château et jardins, distincte du spectacle; ne l'utiliser que si les inclusions et l'intérêt pour une visite sans spectacle sont confirmés.
  gsc:
    retrievedAt: 2026-11-28T07:56:00+01:00
    dataThrough: 2026-11-26
    signal: uncertain
    basis: "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-30
    peakEnd: 2026-11-05
    recentStart: 2026-11-20
    recentEnd: 2026-11-26
    peakImpressions: 247
    recentImpressions: 31
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0.018
    focusQueries:
      - chateau de chantilly noel 2026
      - spectacle noël chantilly 2026
      - noel a chantilly 2026
      - spectacle equestre chantilly noel 2026
      - chantilly noel 2026
---

## Mission retenue
Actualiser l'article sur Noël 2026 à Chantilly, dont le spectacle équestre commence le 28 novembre.

## Pourquoi cette mission
Dijon, seul rapidDrop du snapshot, a déjà été actualisé sur master aujourd'hui. Chantilly présente la prochaine perte importante du snapshot (cause non établie). La lacune éditoriale est indépendante: le programme officiel annonce la rencontre avec le Père Noël et le concert du chœur des enfants, absents de l'article, ainsi qu'une billetterie qui référence maintenant les trois visites précédemment annoncées à venir.

## Décision du lecteur
Choisir un jour et un billet en sachant si les enfants pourront voir le Père Noël, assister au spectacle ou participer à une autre animation, sans payer un supplément inutile ni réserver des horaires incompatibles.

## Faits à traiter
- Vérifier les jours précis et les horaires du Père Noël (période du 2 au 24 décembre, 14 h à 17 h annoncés), inclus dans les billets 1 Jour, Famille et 1 Jour + spectacle; ne pas laisser croire qu'il est inclus dans le billet spectacle seul. Vérifier la chorale du 12 décembre et ses conditions d'accès.
- Vérifier la liste complète des jours du spectacle à 14 h 30 et 16 h 30, et mettre à jour l'état de la billetterie des contes, des œuvres et de la veillée; ne pas garantir de places libres. Donner un lien de réservation pertinent et distinguer les billets nécessaires. Vérifier les horaires du coin gourmand car les annonces divergent.
- Préserver les tarifs et exemples de budget s'ils restent valides, la gratuité des moins de 3 ans sur les genoux, les âges, les incompatibilités horaires, le délai d'arrivée, les informations poussettes, accessibilité, train, parking, les images et crédits existants.

## Sources de départ
- https://chateaudechantilly.fr/evenement/spectacle-de-noel-le-noel-oublie/
- https://chateaudechantilly.fr/noel-au-chateau/
- https://chateaudechantilly.fr/evenement/rencontrez-le-pere-noel/
- https://chateaudechantilly.fr/evenement/chorale-de-noel/
- https://chateaudechantilly.tickeasy.com/fr-FR/accueil
- https://www.ville-chantilly.fr/evenements/spectacle-equestre-de-noel-le-noel-oublie/
- Conserver les sources pratiques existantes et confronter les pages du domaine aux annonces récentes. Certaines ouvertures directes renvoient des erreurs, mais les résultats indexés récents et la billetterie confirment les nouvelles pistes.

## Affiliation
Aucune offre partenaire vérifiée pour le spectacle précis. Conserver https://www.booking.com/hotel/fr/du-parc-chantilly.fr.html (chambre familiale quatre personnes, prix et dates non confirmés). L'entrée classique Tiqets https://www.tiqets.com/fr/activites-attractions-chantilly-c97268/billets-pour-chateau-de-chantilly-billet-d-entree-coupe-file-acces-aux-jardins-p977985/ ne doit jamais être présentée comme un billet du Noël oublié; ne pas l'ajouter si elle brouille le choix.

## Continuations internes
Conserver les liens vers la destination Chantilly et l'atelier de crème Chantilly pour prolonger le séjour; ne pas développer ces sujets dans le refresh.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/index.md

---
title: "Noël 2026 à Chantilly: Le Noël oublié, billets et séances en famille"
subtitle: Spectacle équestre, activités selon l'âge, tarifs et accès avec enfants
summary: Du 28 novembre 2026 au 3 janvier 2027, découvrez les séances et tarifs du Noël oublié à Chantilly et les autres visites de Noël à choisir selon l'âge.
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
updatedAt: 2026-11-12T18:32:15.828Z
readingTime: 5
affiliate:
  enabled: true
  type: travel
  destination: Chantilly
---

<!-- article-image-credit -->
*Photo: [P.poschadel](https://commons.wikimedia.org/wiki/File:Chantilly_(60),_Grandes_%C3%A9curies.jpg) - [CC BY-SA 2.0 fr](https://creativecommons.org/licenses/by-sa/2.0/fr/deed.en/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Du **28 novembre 2026 au 3 janvier 2027**, les Grandes Écuries du château de Chantilly accueillent **Le Noël oublié**, spectacle équestre d'une heure. Chevaux, costumes et effets visuels accompagnent Vérité, un enfant parti retrouver la mémoire de Noël sur une île enchantée. Le domaine propose aussi des visites de Noël distinctes, à choisir selon l'âge des enfants et le budget.

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

Les **décorations de Noël commencent dès le 14 novembre 2026**, deux semaines avant le début du spectacle. Le **coin gourmand du parc** est annoncé **du 20 décembre au 4 janvier, de 10 h à 18 h**.

## Spectacle ou autre activité de Noël: que choisir selon l'âge ?

Ces trois activités sont **distinctes du spectacle équestre** et ne sont pas comprises dans son billet. Leurs réservations sont séparées.

- **Dès 5 ans, les contes:** *Si Chantilly m'était conté… En attendant Noël* se déroule les **23 et 30 décembre à 15 h**, pendant **1 heure**, dans la cour d'honneur. Comptez **9 € en supplément du billet horodaté 1 jour**. La billetterie est annoncée prochainement.
- **Dès 6 ans, la découverte des œuvres:** *Noël au fil des œuvres* dure **1 heure à 15 h**, les **20, 21, 24, 26, 27, 28 et 31 décembre**, puis les **1er, 2 et 3 janvier**. Le supplément est de **7 € par personne**, en plus du billet horodaté 1 jour; la réservation est annoncée prochainement.
- **Dès 6 ans, une sortie en soirée:** *La veillée enchantée* propose un parcours théâtralisé les **20, 21, 22 et 23 décembre**, avec des départs toutes les **30 minutes entre 17 h 30 et 21 h**. Tarif annoncé: **15 €**, ou **12 € pour les moins de 12 ans**. La billetterie est annoncée prochainement.

Pour un enfant de moins de 5 ans, le spectacle reste une option plus simple que ces visites guidées, à condition qu'il puisse rester assis pendant une heure. Les visites à 15 h ne peuvent pas être suivies en même temps que la représentation de 14 h 30.

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
- /articles/sorties/chateau-de-compiegne-en-famille-que-visiter-et-comment-organiser-la-journee/ | Château de Compiègne en famille: que visiter et comment organiser la journée? | sorties | Compiègne, Oise, Hauts-de-France
- /articles/evenements/ain-croyable-noel-2026-a-bourg-en-bresse-en-famille-spectacle-arbre-de-noel-et-tarifs/ | Ain'Croyable Noël 2026 à Bourg-en-Bresse en famille: spectacle, arbre de Noël et tarifs | evenements | Bourg-en-Bresse, Ain, Auvergne-Rhône-Alpes
- /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | Noël au château de Cheverny 2026: billets, mapping et animations en famille | evenements | Cheverny, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | Noël 2026 à Chantilly: Le Noël oublié, billets et séances en famille | evenements | Chantilly, Oise, Hauts-de-France
- /articles/evenements/chambly-kids-festival-2027-quatre-spectacles-pour-les-enfants-dates-et-ages/ | Chambly Kids Festival 2027: quatre spectacles pour les enfants, dates et âges | evenements | Chambly, Oise, Hauts-de-France
- /articles/voyages/domaine-de-chaalis-en-famille-que-visiter-pendant-les-travaux/ | Domaine de Chaalis en famille: que visiter pendant les travaux ? | voyages | Fontaine-Chaalis, Oise, Hauts-de-France
- /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | Rétro Game Festival 2026 à Beauvais: programme, billets famille et animations enfants | evenements | Beauvais, Oise, Hauts-de-France
- /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | Noël Gaulois 2026 au Parc Astérix: billets, spectacles et extras en famille | evenements | Plailly, Oise, Hauts-de-France
- /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | Halloween 2026 à la Mer de Sable: spectacles, frissons et billets en famille | evenements | Ermenonville, Oise, Hauts-de-France
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/bons-plans/pass-sports-citoyen-dans-l-oise-15-a-cumuler-avec-le-pass-sport-en-2026/ | Pass Sports Citoyen dans l'Oise: 15 € à cumuler avec le pass Sport en 2026 | bons-plans | Beauvais, Oise, Hauts-de-France
- /articles/parentalite/ateliers-parents-malins-dans-l-oise-quels-rendez-vous-gratuits-choisir-avant-fin-2026/ | Ateliers Parents Malins dans l'Oise: quels rendez-vous gratuits choisir avant fin 2026 ? | parentalite | Plusieurs communes, Oise, Hauts-de-France
- /articles/maison/meubles-et-encombrants-a-compiegne-recyclerie-dechetterie-ou-collecte-a-domicile/ | Meubles et encombrants à Compiègne: recyclerie, déchetterie ou collecte à domicile? | maison | Compiègne, Oise, Hauts-de-France
- /articles/evenements/cite-immersive-des-fables-a-paris-decouvrir-la-fontaine-en-famille/ | Cité immersive des Fables à Paris: découvrir La Fontaine en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/sculptures-sur-glace-et-neige-a-valloire-en-janvier-2027/ | Sculptures sur glace et neige à Valloire en janvier 2027 | evenements | Valloire, Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/seraphine-louis-a-metz-decouvrir-l-exposition-avec-les-enfants/ | Séraphine Louis à Metz: découvrir l’exposition avec les enfants | evenements | Metz, Moselle, Grand Est
- /articles/evenements/festival-contes-et-rencontres-2027-en-lozere-quels-spectacles-voir-en-famille/ | Festival Contes et Rencontres 2027 en Lozère: quels spectacles voir en famille ? | evenements | Lozère, Occitanie

### Historique Radar lié

- opportunity | /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | 2026-10-18T12:12:00.071Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | 2026-10-26T21:31:06.119Z
- refresh | /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | 2026-11-12T18:32:15.897Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | 2026-10-23T19:58:30.214Z
- refresh | /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | 2026-11-13T19:31:25.370Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | 2026-11-03T15:36:10.146Z
- refresh | /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | 2026-11-13T13:31:11.034Z
- opportunity | /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | 2026-10-27T07:35:50.437Z
- refresh | /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | 2026-11-16T12:48:08.556Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
