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
title: "Déchets verts à Toulouse Métropole en 2027: collecte, broyage et compostage"
subtitle: Six ramassages gratuits ou trente payants, avec d'autres solutions pour les tontes et les branches.
summary: "Collecte gratuite ou payante, inscription avant le 16 novembre 2026, broyage et composteur: les solutions pour les jardins de Toulouse Métropole en 2027."
slug: dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage
status: published
publishedAt: 2026-10-15T19:13:56+02:00
updatedAt: null
category: maison
readingTime: 6
location:
  city: Toulouse
  department: Haute-Garonne
  region: Occitanie
topic:
  key: maison|toulouse|dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage|2026
  keywords:
    - déchets verts Toulouse Métropole 2027
    - collecte déchets végétaux Toulouse
    - broyage gratuit Toulouse Métropole
image:
  src: /images/articles/2026/10/dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage.webp
  alt: Vue de la zone de dépôt d'un composteur collectif, photographie illustrative sans lien avec Toulouse Métropole
sources:
  - title: Toulouse Métropole - S'abonner à la collecte des déchets végétaux
    url: https://metropole.toulouse.fr/demarches/collecte-de-dechets-vegetaux-sabonner-au-service
  - title: Toulouse Métropole - FAQ déchets végétaux
    url: https://metropole.toulouse.fr/mon-environnement/dechets-et-proprete/les-dechets-vegetaux/faq-dechets-vegetaux
  - title: Toulouse Métropole - Les déchets végétaux
    url: https://metropole.toulouse.fr/mon-environnement/dechets-et-proprete/les-dechets-vegetaux
  - title: Toulouse Métropole - Demander un broyage de déchets végétaux
    url: https://metropole.toulouse.fr/demarches/faire-une-demande-de-broyage-de-dechets-vegetaux
  - title: Toulouse Métropole - Demander un composteur individuel
    url: https://metropole.toulouse.fr/demarches/demander-un-composteur-individuel
  - title: Toulouse Métropole - Les déchèteries
    url: https://metropole.toulouse.fr/mon-environnement/dechets-et-proprete/les-decheteries
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/maison/(2026)/(10)/dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage/index.md
  targetSha: 1f411193dbce80c9d726adae6bc193815c178845
  targetUrl: /articles/maison/dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage/
  decision: Choisir avant le 16 novembre 2026 entre collecte gratuite, abonnement annuel et solutions adaptées aux très gros volumes, en connaissant les démarches et contraintes réelles.
  affiliationPotential: "Aucune affiliation naturelle : services publics municipaux, gratuits ou payants."
  gsc:
    retrievedAt: 2026-11-08T02:28:56+01:00
    dataThrough: 2026-11-05
    signal: uncertain
    basis: "Visibilité récente : 83 impressions sur trois jours, puis 20 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-18
    peakEnd: 2026-10-20
    recentStart: 2026-11-03
    recentEnd: 2026-11-05
    peakImpressions: 83
    recentImpressions: 20
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - collecte déchets verts toulouse
      - calendrier collecte déchets verts toulouse métropole 2026
      - calendrier ramassage déchets verts toulouse 2026
      - collecte dechet vert toulouse
      - enlèvement déchets verts gratuit toulouse
---

## Mission retenue
Actualiser le guide des déchets végétaux à Toulouse Métropole pour 2027, surtout le choix après une grosse taille de jardin.

## Pourquoi cette mission
Le snapshot signale 83 puis 20 impressions sur trois jours, sans cause SEO démontrée. Lacune indépendante vérifiée : l'article détaille broyage, bennes statiques et déchèteries, mais omet la location municipale de grandes bennes, solution distincte pour évacuer des volumes exceptionnels.

## Décision du lecteur
Distinguer les six collectes gratuites, les trente collectes à 120 €/an, le broyage qui laisse le broyat sur place, le dépôt et la location d'une benne pour une évacuation importante.

## Faits à traiter
- Ajouter sobrement la location officielle de bennes de 8 ou 15 m³, 500 € par benne pour sept jours selon la FAQ ; vérifier le tarif au moment de rédiger.
- Préciser les contraintes d'accès : largeur minimale 4 m et dégagement vertical 4 m ; la demande est payante et l'annulation n'est pas possible selon la fiche du 14 octobre 2026.
- Préserver impérativement l'échéance du 16 novembre 2026, les deux forfaits et leurs modalités de reconduction, les trois solutions gratuites de broyage, compostage, bennes statiques, déchèteries, images, crédits et liens utiles. Conserver l'avertissement sur les dates contradictoires d'août 2027 tant que la Métropole ne les harmonise pas.

## Sources de départ
- https://metropole.toulouse.fr/mon-environnement/dechets-et-proprete/les-dechets-vegetaux/faq-dechets-vegetaux
- https://metropole.toulouse.fr/demarches/collecte-de-dechets-vegetaux-reserver-une-benne
- https://metropole.toulouse.fr/demarches/collecte-de-dechets-vegetaux-sabonner-au-service

## Affiliation
Aucune : renvoyer vers les démarches officielles sans détour commercial.

## Continuations internes
Aucune nécessaire.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/maison/(2026)/(10)/dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage/index.md

---
title: "Déchets verts à Toulouse Métropole en 2027: collecte, broyage et compostage"
subtitle: Six ramassages gratuits ou trente payants, avec d'autres solutions pour les tontes et les branches.
summary: "Collecte gratuite ou payante, inscription avant le 16 novembre 2026, broyage et composteur: les solutions pour les jardins de Toulouse Métropole en 2027."
slug: dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage
status: published
publishedAt: 2026-10-15T19:13:56+02:00
updatedAt: null
category: maison
readingTime: 6
location:
  city: Toulouse
  department: Haute-Garonne
  region: Occitanie
topic:
  key: maison|toulouse|dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage|2026
  keywords:
    - déchets verts Toulouse Métropole 2027
    - collecte déchets végétaux Toulouse
    - broyage gratuit Toulouse Métropole
image:
  src: "/images/articles/2026/10/dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage.webp"
  alt: "Vue de la zone de dépôt d'un composteur collectif, photographie illustrative sans lien avec Toulouse Métropole"
sources:
  - title: Toulouse Métropole - S'abonner à la collecte des déchets végétaux
    url: https://metropole.toulouse.fr/demarches/collecte-de-dechets-vegetaux-sabonner-au-service
  - title: Toulouse Métropole - FAQ déchets végétaux
    url: https://metropole.toulouse.fr/mon-environnement/dechets-et-proprete/les-dechets-vegetaux/faq-dechets-vegetaux
  - title: Toulouse Métropole - Les déchets végétaux
    url: https://metropole.toulouse.fr/mon-environnement/dechets-et-proprete/les-dechets-vegetaux
  - title: Toulouse Métropole - Demander un broyage de déchets végétaux
    url: https://metropole.toulouse.fr/demarches/faire-une-demande-de-broyage-de-dechets-vegetaux
  - title: Toulouse Métropole - Demander un composteur individuel
    url: https://metropole.toulouse.fr/demarches/demander-un-composteur-individuel
  - title: Toulouse Métropole - Les déchèteries
    url: https://metropole.toulouse.fr/mon-environnement/dechets-et-proprete/les-decheteries
---

Dans les 37 communes de Toulouse Métropole, les foyers qui entretiennent un jardin peuvent faire collecter leurs feuilles, tontes et tailles de haies à domicile en 2027. La Métropole propose deux forfaits, mais aussi des solutions gratuites de broyage et de compostage. Voici comment choisir et quelles démarches effectuer avant la prochaine saison.

## Collecte 2027: six passages gratuits ou trente pour 120 €

Le [service de collecte de Toulouse Métropole](https://metropole.toulouse.fr/demarches/collecte-de-dechets-vegetaux-sabonner-au-service) s'adresse aux particuliers de son territoire, **pas à l'ensemble de la Haute-Garonne**. Les deux forfaits utilisent un **bac de 240 litres**, fourni lors du premier abonnement.

**Le forfait saisonnier gratuit** prévoit **six collectes dans l'année**: une par mois en mars, avril, mai, juin, octobre et novembre. Il convient aux foyers qui peuvent conserver, broyer ou déposer ailleurs le reste de leurs végétaux. Un seul abonnement gratuit est autorisé par foyer.

**Le forfait annuel à 120 € TTC** prévoit **30 collectes** au total: deux par mois en janvier, février, juillet, août, septembre et décembre, et trois par mois en mars, avril, mai, juin, octobre et novembre. Il convient aux jardins qui produisent des végétaux une bonne partie de l'année.

**Attention aux interruptions du forfait payant:** aucune collecte n'est prévue du 20 au 31 décembre 2027. Pour août, la page officielle indique à un endroit les **9 au 20 août** et à un autre les **10 au 21 août**. Les dates exactes restent donc à confirmer auprès de la Métropole. Le calendrier propre à votre adresse sera communiqué par courriel avant les premières collectes.

## Avant le 16 novembre 2026: qui doit s'inscrire?

La période de souscription, de renouvellement payant et de désinscription pour 2027 court **du 1er juillet au 16 novembre 2026**. La démarche dépend de votre abonnement actuel:

- **Vous bénéficiez déjà du forfait gratuit et souhaitez le garder:** il est reconduit automatiquement pour 2027.
- **Vous avez le forfait payant et voulez conserver les 30 passages:** vous devez le renouveler avant la date limite.
- **Vous avez le forfait payant, mais souhaitez revenir au gratuit:** l'absence de renouvellement du forfait payant entraîne le passage automatique à la formule gratuite.
- **Vous n'êtes pas encore abonné:** vous devez effectuer votre première inscription pendant la période prévue.
- **Vous souhaitez arrêter toute collecte:** demandez explicitement la désinscription. Ne confondez pas absence de renouvellement du payant et arrêt total du service.

Les démarches se font depuis le [service officiel d'inscription](https://metropole.toulouse.fr/demarches/collecte-de-dechets-vegetaux-sabonner-au-service). La [FAQ de Toulouse Métropole](https://metropole.toulouse.fr/mon-environnement/dechets-et-proprete/les-dechets-vegetaux/faq-dechets-vegetaux) précise également le cas des déménagements: si vous changez d'adresse au sein de la Métropole, signalez-le et conservez votre bac; si vous quittez le territoire, demandez la désinscription.

À la première inscription, renseignez une **adresse complète**: sans elle, le bac ne peut pas être livré. Les nouveaux abonnés sont informés de sa livraison; les foyers déjà équipés conservent leur bac de 240 litres.

## Que mettre dans le bac sans risquer un refus?

Le bac est réservé aux **déchets végétaux du jardin**. On peut y déposer les tontes, les feuilles et les petites tailles, à condition que le couvercle ferme entièrement. Les branches qui dépassent, les sacs plastiques, la terre, les fruits et les déchets alimentaires peuvent provoquer un refus de collecte. Les végétaux posés à côté du bac ne sont pas emportés.

D'après les [consignes de Toulouse Métropole](https://metropole.toulouse.fr/mon-environnement/dechets-et-proprete/les-dechets-vegetaux/faq-dechets-vegetaux), le bac doit être présenté **la veille après 19h** pour un ramassage entre 5h et 16h, puis rentré après le passage.

La Métropole ne propose qu'un format de bac, **240 litres**. Il est possible de souscrire deux abonnements payants, avec un bac par abonnement, mais pas de cumuler la formule gratuite et une formule payante au même foyer.

## Branches et gros volumes: trois façons de broyer gratuitement

<!-- article-image-body:01 -->

![Broyeur de branches et de végétaux Bugnot exposé au Sommet de l'Élevage 2019, photographie illustrative](/images/articles/2026/10/dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage-body-01.webp)

*Photo: [Sebleouf](https://commons.wikimedia.org/wiki/File:Sommet_de_l%27%C3%89levage_2019_-_Broyeur_de_branches_et_v%C3%A9g%C3%A9taux_Bugnot_BV_N.45.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Pour les tailles de haies ou les branches, le broyage transforme un volume encombrant en matière à réutiliser au pied des plantations. Toulouse Métropole propose [trois services gratuits de broyage](https://metropole.toulouse.fr/demarches/faire-une-demande-de-broyage-de-dechets-vegetaux), avec des conditions différentes.

**Emprunter un broyeur.** Le prêt gratuit, sur réservation auprès de l'une des cinq agences Kiloutou partenaires, dure **un jour en semaine ou un week-end**. Au retrait, prévoyez **une pièce d'identité, un permis de conduire et un justificatif de domicile**, ainsi qu'une carte bancaire pour le **dépôt de garantie**. Vérifiez le modèle avant de réserver: le petit broyeur électrique peut tenir dans une voiture sièges rabattus, tandis que les modèles thermiques sont lourds ou nécessitent un attelage. Un retard de restitution ou une dégradation peut entraîner des frais. Vous devez transporter et rapporter vous-même l'appareil.

**Faire intervenir un professionnel à domicile.** La prestation gratuite est limitée à **deux interventions par foyer et par an**, avec au moins **2 m³ de végétaux** déjà coupés et regroupés. Le véhicule de 3,5 tonnes et son broyeur doivent pouvoir accéder au terrain: il faut notamment **2,70 m de largeur, 2,70 m de hauteur et 5 m de longueur** libres. Les végétaux acceptés mesurent au maximum **2 m de long et 17 cm de diamètre**. Vous devez être présent et **conserver le broyat chez vous**. L'intervention comprend environ 1h30 de broyage et 30 minutes de conseils, pas l'enlèvement des déchets.

**Participer à une opération collective.** Des journées de broyage sont organisées ponctuellement dans les communes participantes. Elles peuvent être plus simples qu'une intervention à domicile si l'accès au terrain est étroit. Les dates et modalités figurent sur le site officiel.

## Composteur gratuit: utile pour les petits végétaux, pas pour évacuer une haie

<!-- article-image-body:02 -->

![Tas de copeaux de bois destiné au jardin, illustrant le broyat réutilisable en paillage](/images/articles/2026/10/dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage-body-02.webp)

*Photo: [Geo Lightspeed7](https://commons.wikimedia.org/wiki/File:Wood_chip_pile.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Une partie des feuilles mortes et des petits résidus du jardin peut enrichir un compost ou servir de paillage. Les gros branchages, eux, doivent généralement être broyés ou traités autrement avant d'être intégrés à cette démarche.

Toulouse Métropole [met gratuitement à disposition un composteur individuel](https://metropole.toulouse.fr/demarches/demander-un-composteur-individuel) pour les habitants de ses 37 communes qui disposent d'un jardin. Il faut réserver un créneau et suivre une **session d'information de 30 minutes** lors du retrait. Si vous possédez déjà un composteur fourni par la Métropole depuis moins de sept ans, vous ne pouvez normalement pas en demander un nouveau.

Le compostage est particulièrement utile pour les déchets alimentaires et les végétaux adaptés au mélange. Le paillage, avec les feuilles ou le broyat, permet de couvrir les sols: ces gestes réduisent la quantité de végétaux à évacuer, sans pour autant remplacer toute solution de collecte après de gros travaux de jardin.

## Sans place pour un bac, ou après une grosse taille: où déposer les végétaux?

La [page « Les déchets végétaux » de Toulouse Métropole](https://metropole.toulouse.fr/mon-environnement/dechets-et-proprete/les-dechets-vegetaux) présente aussi les **camions-bennes statiques**, installés ponctuellement dans certaines communes. Le dépôt est gratuit sur présentation d'un justificatif de domicile, avec des végétaux en vrac ou en fagots. Les branches doivent respecter les dimensions acceptées; le calendrier varie selon les communes et les opérations.

Les **déchèteries grand public** constituent une autre option pour les volumes qui ne tiennent pas dans le bac. Attention: le [Pass déchèterie est obligatoire](https://metropole.toulouse.fr/mon-environnement/dechets-et-proprete/les-decheteries). Vérifiez les déchets admis et les horaires du site choisi avant de charger le véhicule.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/bons-plans/pass-explorateurs-toulouse-en-famille-quand-est-il-vraiment-rentable/ | Pass Explorateurs Toulouse en famille: quand est-il vraiment rentable? | bons-plans | Toulouse, Haute-Garonne, Occitanie
- /articles/activites/accrocamp-toulouse-avec-des-enfants-quel-pass-choisir-selon-leur-taille/ | AccroCamp Toulouse avec des enfants: quel pass choisir selon leur taille? | activites | Toulouse, Haute-Garonne, Occitanie
- /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | Noël à Toulouse 2026 en famille: marchés, Père Noël et patinoire | evenements | Toulouse, Haute-Garonne, Occitanie
- /articles/cuisine/ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet/ | Ateliers de cuisine parent-enfant à Toulouse: chocolat, pâtisserie ou menu complet ? | cuisine | Toulouse, Haute-Garonne, Occitanie
- /articles/sorties/un-ete-au-bord-du-lac-toulouse-2026-famille/ | Un été au bord du lac à Toulouse: activités gratuites en famille à la Reynerie | sorties | Toulouse, Haute-Garonne, Occitanie
- /articles/voyages/cite-de-l-espace-a-toulouse-en-famille-en-2026-une-journee-suffit-elle-et-ou-dormir/ | Cité de l'espace à Toulouse en famille en 2026: une journée suffit-elle et où dormir | voyages | Toulouse, Haute-Garonne, Occitanie
- /articles/maison/composteur-gratuit-a-orleans-metropole-comment-en-profiter-en-2026/ | Composteur gratuit à Orléans Métropole: comment en profiter en 2026 | maison | Orléans, Loiret, Centre-Val de Loire
- /articles/maison/composteur-gratuit-a-bordeaux-metropole-que-choisir-selon-son-logement/ | Composteur gratuit à Bordeaux Métropole: que choisir selon son logement? | maison | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/maison/dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage/ | Déchets verts à Toulouse Métropole en 2027: collecte, broyage et compostage | maison | Toulouse, Haute-Garonne, Occitanie
- /articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/ | Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates | vie-pratique | Toulouse, Haute-Garonne, Occitanie
- /articles/maison/moustique-tigre-en-haute-garonne-proteger-la-maison-et-le-jardin/ | Moustique tigre en Haute-Garonne: protéger la maison et le jardin | maison | Toulouse, Haute-Garonne, Occitanie
- /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | Festival BD Colomiers 2026 en famille: programme, tarifs et accès | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/evenements/festival-cite-en-jeux-2026-a-colomiers-quel-jour-choisir-avec-des-enfants/ | Festival Cité en Jeux 2026 à Colomiers: quel jour choisir avec des enfants | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/voyages/saint-bertrand-de-comminges-avec-des-enfants-village-seul-ou-grande-boucle-a-pied/ | Saint-Bertrand-de-Comminges avec des enfants: village seul ou grande boucle à pied? | voyages | Saint-Bertrand-de-Comminges, Haute-Garonne, Occitanie
- /articles/sorties/aeroscopia-a-blagnac-en-famille-tarifs-avions-et-conseils-de-visite/ | Aeroscopia à Blagnac en famille: tarifs, avions et conseils de visite | sorties | Blagnac, Haute-Garonne, Occitanie
- /articles/maison/materiautheques-en-bretagne-preparer-son-projet-et-acheter-les-bons-materiaux/ | Matériauthèques en Bretagne: préparer son projet et acheter les bons matériaux | maison | Bretagne
- /articles/maison/reparer-ses-objets-dans-l-herault-repair-cafes-et-bonus-reparation/ | Réparer ses objets dans l’Hérault: Repair Cafés et bonus réparation | maison | Hérault, Occitanie
- /articles/maison/chaleur-a-mayotte-comment-rendre-son-logement-plus-confortable/ | Chaleur à Mayotte: comment rendre son logement plus confortable | maison | Mayotte
- /articles/maison/dechets-alimentaires-a-orleans-metropole-s-organiser-avec-ou-sans-jardin/ | Déchets alimentaires à Orléans Métropole: s’organiser avec ou sans jardin | maison | Loiret, Centre-Val de Loire
- /articles/maison/fissures-et-secheresse-en-dordogne-proteger-sa-maison-et-demander-l-aide-argile/ | Fissures et sécheresse en Dordogne: protéger sa maison et demander l’aide argile | maison | Dordogne, Nouvelle-Aquitaine
- /articles/maison/recuperer-l-eau-de-pluie-dans-la-somme-choisir-sa-cuve-et-obtenir-l-aide-2026/ | Récupérer l’eau de pluie dans la Somme: choisir sa cuve et obtenir l’aide 2026 | maison | Somme, Hauts-de-France
- /articles/maison/jardin-familial-en-vendee-que-planter-et-preparer-a-l-automne/ | Jardin familial en Vendée: que planter et préparer à l’automne ? | maison | Vendée, Pays de la Loire

### Historique Radar lié

- opportunity | /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | 2026-10-29T23:28:55.064Z
- opportunity | /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | 2026-10-24T23:34:36.270Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
