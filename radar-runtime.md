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
title: "Ludothèque du Choletais: jouer sur place et emprunter en famille"
subtitle: "Espaces d’éveil, jeux de construction ou parties entre générations: les repères pour découvrir ce lieu à Cholet."
summary: À Cholet, la ludothèque permet de jouer en famille et d’emprunter pour la maison. Espaces, tarifs et conditions pour préparer une première visite.
slug: ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille
status: published
publishedAt: 2026-10-25T02:35:14+02:00
updatedAt: null
category: parentalite
readingTime: 4
publicationOrigin: region
location:
  city: Cholet
  department: Maine-et-Loire
  region: Pays de la Loire
topic:
  key: parentalite|cholet|ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille|2026
  keywords:
    - ludothèque du Choletais
    - jeux en famille à Cholet
    - emprunter des jeux
image:
  src: /images/articles/2026/10/ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille.webp
  alt: Vue de la zone des Arcades Rougé à Cholet, quartier où se trouve la ludothèque, sans montrer ses salles de jeux.
sources:
  - title: "Cholet Agglomération: présentation de la ludothèque"
    url: https://www.cholet.fr/welcome/ludotheque.php
  - title: "Office de tourisme du Choletais: espaces de jeu de la ludothèque"
    url: https://www.ot-cholet.fr/grand-public/decouvrir-et-visiter/ludotheque-cholet.html
  - title: "Cholet Agglomération: tarifs 2026 de la ludothèque"
    url: https://www.cholet.fr/tarifs_municipaux/agglo_11_ludotheque.pdf?2025=
  - title: "Ludothèque du Choletais: foire aux questions"
    url: https://ludotheque.cholet.fr/faq.aspx
  - title: "Ludothèque du Choletais: portail et catalogue"
    url: https://ludotheque.cholet.fr/
  - title: "Cholet Agglomération: informations pratiques et inscription"
    url: https://www.cholet.fr/chaines/dossier_712_ludotheque%2Binfos%2Bpratiques.html
  - title: "Fam Space: comparatif de Papageno, Dékal, Hilo et Pixies"
    url: https://www.fam-space.fr/cadeaux/guides/papageno-dekal-hilo-ou-pixies-quel-jeu-de-cartes-familial-choisir/
  - title: "Accor: localisation et chambres de l’ibis budget Cholet Centre"
    url: https://all.accor.com/hotel/8692/index.fr.shtml
  - title: "Direction générale des Entreprises: couchages en hauteur et lits superposés"
    url: https://www.entreprises.gouv.fr/espace-entreprises/s-informer-sur-la-reglementation/couchages-en-hauteur-lits-superposes
affiliate:
  enabled: true
  type: travel
  destination: Cholet
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/parentalite/(2026)/(10)/ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille/index.md
  targetSha: 64317b399066a0df9ee943e6c43e415d8a55759e
  targetUrl: /articles/parentalite/ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille/
  decision: Choisir entre une visite ponctuelle et un abonnement pour jouer ou emprunter, et préparer concrètement la venue aux Arcades Rougé avec les enfants.
  affiliationPotential: Hébergement Booking ibis budget Cholet Centre déjà présent à conserver pour les familles de passage; aucune nouvelle offre naturelle.
  gsc:
    retrievedAt: 2026-11-10T01:34:08+01:00
    dataThrough: 2026-11-07
    signal: uncertain
    basis: "Visibilité récente : 28 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-28
    peakEnd: 2026-10-30
    recentStart: 2026-11-05
    recentEnd: 2026-11-07
    peakImpressions: 28
    recentImpressions: 0
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - ludothèque
      - horaire ludothèque cholet
      - ludothèque du choletais
      - horaires ludothèque cholet
      - ludotheqie
---

## Mission retenue
Actualiser le guide de la Ludothèque du Choletais à Cholet, lieu de jeu sur place et de prêt de jeux.

## Pourquoi cette mission
L'article a perdu sa visibilité récente, sans cause GSC démontrée. Une lacune pratique indépendante est vérifiée: la fiche officielle précise 1 h 30 de stationnement gratuit sur présentation du ticket, absent du guide. Le programme municipal annonce aussi deux séances motrices pour les 0-3 ans les 12 et 13 novembre, pertinentes pour les familles qui viennent cette semaine. Les deux premiers candidats du snapshot ont déjà des tarifs/conditions essentiels cohérents et ne présentent pas de lacune aussi utile confirmée.

## Décision du lecteur
Savoir quand venir, combien payer, si un abonnement est nécessaire et comment organiser une séance avec un tout-petit sans déplacement inutile.

## Faits à traiter
- Ajouter le stationnement de 1 h 30 gratuit sous condition de présentation du ticket, en précisant de vérifier les modalités sur place; ne pas le présenter comme un parking gratuit illimité.
- Mentionner brièvement les ateliers de motricité des 12 et 13 novembre 2026 pour les 0-3 ans: le 12 à 10 h et 11 h sur inscription au 02 72 77 23 44; le 13 de 10 h à 12 h sans inscription. Bien distinguer ces séances exceptionnelles des horaires ordinaires et prévoir leur retrait après échéance.
- Préserver horaires habituels, adresse, tarif ponctuel 5 € par famille/demi-journée, abonnements selon résidence, règles d'accompagnement, emprunt quatre semaines, réservation/prolongation, contact, images et crédits.
- Ne pas attribuer la baisse d'impressions à ces lacunes.

## Sources de départ
- Ville de Cholet, informations pratiques: https://www.cholet.fr/chaines/dossier_712_ludotheque%20infos%20pratiques.html
- Ville de Cholet, Journées des droits de l'enfant 2026: https://www.cholet.fr/dossiers/dossier.php?id_dossier=5209
- Ludothèque, FAQ: https://ludotheque.cholet.fr/faq.aspx

## Affiliation
Conserver l'hébergement Booking existant sans ajouter d'offre artificielle.

## Continuations internes
Conserver le renvoi vers le comparatif de jeux Fam Space, sans transformer ce guide local en sélection de produits.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/parentalite/(2026)/(10)/ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille/index.md

---
title: "Ludothèque du Choletais: jouer sur place et emprunter en famille"
subtitle: "Espaces d’éveil, jeux de construction ou parties entre générations: les repères pour découvrir ce lieu à Cholet."
summary: À Cholet, la ludothèque permet de jouer en famille et d’emprunter pour la maison. Espaces, tarifs et conditions pour préparer une première visite.
slug: ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille
status: published
publishedAt: 2026-10-25T02:35:14+02:00
updatedAt: null
category: parentalite
readingTime: 4
publicationOrigin: region
location:
  city: Cholet
  department: Maine-et-Loire
  region: Pays de la Loire
topic:
  key: parentalite|cholet|ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille|2026
  keywords:
    - ludothèque du Choletais
    - jeux en famille à Cholet
    - emprunter des jeux
image:
  src: "/images/articles/2026/10/ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille.webp"
  alt: "Vue de la zone des Arcades Rougé à Cholet, quartier où se trouve la ludothèque, sans montrer ses salles de jeux."
sources:
  - title: "Cholet Agglomération: présentation de la ludothèque"
    url: https://www.cholet.fr/welcome/ludotheque.php
  - title: "Office de tourisme du Choletais: espaces de jeu de la ludothèque"
    url: https://www.ot-cholet.fr/grand-public/decouvrir-et-visiter/ludotheque-cholet.html
  - title: "Cholet Agglomération: tarifs 2026 de la ludothèque"
    url: https://www.cholet.fr/tarifs_municipaux/agglo_11_ludotheque.pdf?2025=
  - title: "Ludothèque du Choletais: foire aux questions"
    url: https://ludotheque.cholet.fr/faq.aspx
  - title: "Ludothèque du Choletais: portail et catalogue"
    url: https://ludotheque.cholet.fr/
  - title: "Cholet Agglomération: informations pratiques et inscription"
    url: https://www.cholet.fr/chaines/dossier_712_ludotheque%2Binfos%2Bpratiques.html
  - title: "Fam Space: comparatif de Papageno, Dékal, Hilo et Pixies"
    url: https://www.fam-space.fr/cadeaux/guides/papageno-dekal-hilo-ou-pixies-quel-jeu-de-cartes-familial-choisir/
  - title: "Accor: localisation et chambres de l’ibis budget Cholet Centre"
    url: https://all.accor.com/hotel/8692/index.fr.shtml
  - title: "Direction générale des Entreprises: couchages en hauteur et lits superposés"
    url: https://www.entreprises.gouv.fr/espace-entreprises/s-informer-sur-la-reglementation/couchages-en-hauteur-lits-superposes
affiliate:
  enabled: true
  type: travel
  destination: Cholet
---
<!-- article-image-credit -->
*Photo: [Gwendoland](https://commons.wikimedia.org/wiki/File:Cholet_-_Arcades_Roug%C3%A9s_P1000706.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Cholet, dans le Maine-et-Loire, la Ludothèque du Choletais accueille enfants et adultes pour jouer ensemble, explorer des univers de construction ou découvrir des jeux de société. Avec un abonnement, on peut aussi emporter des jeux à la maison pour **quatre semaines**, dans une [collection de plus de 7 000 jeux](https://www.cholet.fr/welcome/ludotheque.php).

Pour une famille, c’est l’occasion d’essayer une boîte avant de l’acheter, de suivre les envies changeantes des enfants ou de trouver un jeu à partager entre générations.

## Des espaces pour manipuler, inventer et jouer ensemble

<!-- article-image-body:01 -->

![Enfant jouant avec des blocs de construction en bois, illustration hors ludothèque de Cholet.](/images/articles/2026/10/ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille-body-01.webp)

*Photo: [Ben+Sam](https://commons.wikimedia.org/wiki/File:Playing_with_blocks.jpg) - [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Les [espaces présentés par l’office de tourisme du Choletais](https://www.ot-cholet.fr/grand-public/decouvrir-et-visiter/ludotheque-cholet.html) permettent de choisir une activité selon les envies du moment:

- **Avec un tout-petit**, la salle d’éveil propose tapis, structures de motricité et jeux d’exploration pour manipuler et bouger.
- **Avec une fratrie**, la mini-maison, les espaces à thème et les jeux de construction invitent à inventer une histoire ou à bâtir ensemble, sans devoir tous maîtriser les mêmes règles.
- **Entre plusieurs générations**, l’espace de jeux de règles réunit enfants, parents et grands-parents, débutants comme habitués des jeux de société.

Pour demander conseil à l’équipe, précisez l’âge des joueurs, le nombre de participants et la durée de partie recherchée. Ces repères aideront à choisir entre un jeu rapide, une construction ou une partie plus longue.

**Avant 12 ans, les enfants doivent être accompagnés d’un adulte.** De 12 à 17 ans, ils peuvent venir seuls avec une carte d’adhérent à leur nom et une autorisation parentale signée à la ludothèque, selon la [FAQ officielle](https://ludotheque.cholet.fr/faq.aspx).

## Ticket ponctuel ou abonnement: ce que chacun permet

Le **ticket de jeu sur place coûte 5 € par famille pour une demi-journée**. Il permet de découvrir les espaces sans abonnement, mais ne donne pas accès à l’emprunt.

L’abonnement est individuel et annuel. Il comprend le jeu sur place pour l’abonné et ses accompagnants, ainsi que l’emprunt d’**un jeu principal et d’un jeu bonus**. Il n’est donc pas nécessaire d’abonner chaque accompagnant pour partager une séance.

Les [tarifs officiels applicables en 2026](https://www.cholet.fr/tarifs_municipaux/agglo_11_ludotheque.pdf?2025=) dépendent du domicile:

- **Habitants de Cholet Agglomération**: 22 € au tarif plein, 10 € au tarif réduit.
- **Habitants extérieurs à l’agglomération**: 45 € au tarif plein, 25 € au tarif réduit.

Le tarif réduit concerne les moins de 18 ans, les étudiants, les demandeurs d’emploi, les bénéficiaires du RSA et les personnes handicapées.

Le ticket convient pour une découverte ponctuelle, notamment pendant un séjour. L’abonnement permet de revenir jouer et de renouveler les jeux disponibles à la maison.

## Choisir un jeu à emporter

<!-- article-image-body:02 -->

![Partie du jeu de société Carcassonne Junior, photographie illustrative hors ludothèque de Cholet.](/images/articles/2026/10/ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille-body-02.webp)

*Photo: [El Pantera](https://commons.wikimedia.org/wiki/File:Playing_board_game_-_Play_773_1710173686272.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Le [portail de la ludothèque](https://ludotheque.cholet.fr/) donne accès à la rubrique « Les jeux en prêt » pour rechercher une référence. Pour un premier emprunt, pensez au moment où vous comptez jouer: une partie courte après le dîner ne répond pas aux mêmes envies qu’un après-midi avec les cousins.

Si vous cherchez des idées de jeux de cartes, notre [comparatif de Papageno, Dékal, Hilo et Pixies](https://www.fam-space.fr/cadeaux/guides/papageno-dekal-hilo-ou-pixies-quel-jeu-de-cartes-familial-choisir/) distingue les âges conseillés, le nombre de joueurs et les mécanismes. Leur présence à la ludothèque reste à vérifier au catalogue.

### Réserver et prolonger un prêt

Avec un abonnement valide, les jeux se réservent en ligne ou à l’accueil. En revanche, **il n’est pas possible de réserver pour une date précise**, indique la [FAQ sur les prêts et réservations](https://ludotheque.cholet.fr/faq.aspx). Pour un anniversaire ou les fêtes, gardez plusieurs titres en tête.

Pour prolonger un prêt, faites votre demande avant la date de retour, avec un abonnement valide. La démarche peut se faire en ligne, par téléphone ou par courriel.

### Vérifier les pièces avant le retour

Vérifiez le contenu lors du prêt et signalez toute anomalie à l’équipe. Avant le retour, recomptez les éléments. En cas de perte ou de casse, la [FAQ précise les modalités de remplacement](https://ludotheque.cholet.fr/faq.aspx): les pièces doivent être remplacées, voire le jeu entier s’il ne fonctionne plus.

## Préparer sa venue aux Arcades Rougé

La ludothèque se trouve **30 rue Bretonnaise, aux Arcades Rougé, à Cholet**. Les [horaires habituels du prêt et du jeu sur place](https://www.cholet.fr/chaines/dossier_712_ludotheque%2Binfos%2Bpratiques.html) sont:

- Mardi: de 10 h à 12 h.
- Mercredi et samedi: de 10 h à 18 h, en continu.
- Vendredi: de 10 h à 12 h et de 14 h à 18 h.

Le portail précise que ces horaires restent identiques pendant les vacances scolaires. Avant un déplacement, consultez aussi ses annonces pour repérer une éventuelle fermeture exceptionnelle.

Pour vous inscrire, apportez un justificatif de domicile de moins de six mois et le justificatif correspondant à votre situation si vous demandez un tarif réduit. L’adhésion se renouvelle chaque année à la date anniversaire de l’inscription.

Pour une question sur l’accueil ou votre inscription, contactez la ludothèque au **02 72 77 23 44**.

## Une nuit à Cholet pour prolonger le séjour

Si vous intégrez cette sortie à un week-end, vous pouvez [consulter les chambres de l’ibis budget Cholet Centre](https://www.booking.com/hotel/fr/ibis-budget-cholet-centre.fr.html), situé dans le centre-ville, à quelques minutes à pied des Arcades Rougé. L’hôtel propose notamment des chambres triples avec un lit double et un lit superposé.

Le [couchage en hauteur ne convient pas aux enfants de moins de 6 ans](https://www.entreprises.gouv.fr/espace-entreprises/s-informer-sur-la-reglementation/couchages-en-hauteur-lits-superposes). Renseignez l’âge de chaque enfant pour choisir une configuration adaptée et vérifier le prix total ainsi que les conditions d’annulation avant de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/vie-pratique/ludotheques-dans-le-gers-ou-jouer-et-emprunter-des-jeux-en-famille/ | Ludothèques dans le Gers: où jouer et emprunter des jeux en famille | vie-pratique | Auch, Gers, Occitanie
- /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | Ludothèques du Grand Nancy: où jouer en famille et emprunter des jeux | parentalite | Meurthe-et-Moselle, Grand Est
- /articles/vie-pratique/ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison/ | Ludothèques autour de Dinan: emprunter des jeux pour la maison | vie-pratique | Côtes-d'Armor, Bretagne
- /articles/vie-pratique/emprunter-des-jeux-a-tours-mirabeau-ou-la-maison-des-jeux/ | Emprunter des jeux à Tours: Mirabeau ou la Maison des Jeux? | vie-pratique | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/sorties/cncs-a-moulins-avec-des-enfants-gratuit-avant-12-ans-que-choisir-sur-place/ | CNCS à Moulins avec des enfants: gratuit avant 12 ans, que choisir sur place? | sorties | Moulins, Allier, Auvergne-Rhône-Alpes
- /articles/voyages/chateauroux-avec-des-enfants-une-journee-suffit-elle-ou-faut-il-dormir-sur-place/ | Châteauroux avec des enfants: une journée suffit-elle ou faut-il dormir sur place? | voyages | Châteauroux, Indre, Centre-Val de Loire
- /articles/bons-plans/musee-fermat-en-famille-jeux-tarifs-et-visite-avec-des-enfants/ | Musée Fermat en famille: jeux, tarifs et visite avec des enfants | bons-plans | Beaumont-de-Lomagne, Tarn-et-Garonne, Occitanie
- /articles/evenements/festival-cite-en-jeux-2026-a-colomiers-quel-jour-choisir-avec-des-enfants/ | Festival Cité en Jeux 2026 à Colomiers: quel jour choisir avec des enfants | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/parentalite/ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille/ | Ludothèque du Choletais: jouer sur place et emprunter en famille | parentalite | Cholet, Maine-et-Loire, Pays de la Loire
- /articles/parentalite/laep-en-maine-et-loire-ou-aller-avec-son-bebe-et-comment-se-passe-l-accueil/ | LAEP en Maine-et-Loire: où aller avec son bébé et comment se passe l'accueil ? | parentalite | Maine-et-Loire, Pays de la Loire
- /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | Noël à Fontevraud 2026: patinoire, marché, dates et tarifs en famille | evenements | Fontevraud-l'Abbaye, Maine-et-Loire, Pays de la Loire
- /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | Fête de l'Automne 2026 à Terra Botanica: animations et tarifs | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/cuisine/ou-manger-des-fouees-en-famille-autour-de-saumur/ | Où manger des fouées en famille autour de Saumur ? | cuisine | Saumur, Maine-et-Loire, Pays de la Loire
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | Monument Jeu d’Enfant au château d’Angers: dragons et ateliers le 17 octobre 2026 | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/maison/composteur-gratuit-a-angers-loire-metropole-qui-peut-le-demander/ | Composteur gratuit à Angers Loire Métropole: qui peut le demander? | maison | Angers, Maine-et-Loire, Pays de la Loire
- /articles/vie-pratique/garde-d-enfants-sur-horaires-atypiques-a-angers-qui-peut-demander-l-aide-du-ccas/ | Garde d'enfants sur horaires atypiques à Angers: qui peut demander l'aide du CCAS? | vie-pratique | Angers, Maine-et-Loire, Pays de la Loire
- /articles/sorties/chasse-tresor-galerie-david-angers-2026/ | Chasse au trésor à Angers: les 4 à 6 ans enquêtent à la Galerie David | sorties | Angers, Maine-et-Loire, Pays de la Loire
- /articles/parentalite/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes/ | Maisons des 1000 premiers jours à Paris: deux adresses pour les parents et les bébés | parentalite | Paris, Paris, Île-de-France
- /articles/parentalite/lieux-d-accueil-enfants-parents-dans-le-cher-ou-aller-avec-son-tout-petit/ | Lieux d’accueil enfants-parents dans le Cher: où aller avec son tout-petit ? | parentalite | Cher, Centre-Val de Loire
- /articles/parentalite/rejouets-a-cerences-donner-completer-et-acheter-des-jouets-d-occasion/ | Rejouets à Cérences: donner, compléter et acheter des jouets d’occasion | parentalite | Cérences, Manche, Normandie
- /articles/parentalite/laep-dans-le-loir-et-cher-ou-rencontrer-d-autres-parents-avec-son-tout-petit/ | LAEP dans le Loir-et-Cher: où rencontrer d'autres parents avec son tout-petit ? | parentalite | Loir-et-Cher, Centre-Val de Loire

### Historique Radar lié

- opportunity | /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | 2026-10-13T12:37:05.098Z
- refresh | /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | 2026-11-09T12:50:22.314Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | 2026-10-10T08:38:56.921Z
- opportunity | /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | 2026-10-28T01:34:03.741Z
- opportunity | /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | 2026-10-30T12:36:12.349Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
