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
title: "Électroménager en panne à Dijon: réparer ou acheter reconditionné"
subtitle: Du petit appareil à apporter en atelier au réfrigérateur à remplacer, les solutions dans l’agglomération dijonnaise.
summary: "Café réparation à Marsannay, dépannage à Longvic ou achat reconditionné: les coûts, délais et garanties à comparer dans l’agglomération dijonnaise."
slug: electromenager-en-panne-a-dijon-reparer-ou-acheter-reconditionne
status: published
publishedAt: 2026-11-09T13:09:07+01:00
updatedAt: null
category: maison
readingTime: 5
publicationOrigin: region
location:
  city: Dijon
  department: Côte-d'Or
  region: Bourgogne-Franche-Comté
topic:
  key: maison|dijon|electromenager-en-panne-a-dijon-reparer-ou-acheter-reconditionne|2026
  keywords:
    - réparation électroménager Dijon
    - électroménager reconditionné Marsannay
    - café réparation Marsannay
image:
  src: /images/articles/2026/11/electromenager-en-panne-a-dijon-reparer-ou-acheter-reconditionne.webp
  alt: Réparation collective d'un appareil électrique dans un Repair Café à Trèves, en Allemagne, illustration du principe d'un atelier de réparation.
sources:
  - title: "Les Répar’Acteurs de Marsannay: cafés réparation et fonctionnement"
    url: https://lesreparacteurs.fr/
  - title: "Envie Dijon: dépannage"
    url: https://dijon.envie.org/content/284-depannage
  - title: "Envie Dijon: magasins et ateliers"
    url: https://dijon.envie.org/magasins
  - title: "Envie Dijon: garantie et SAV"
    url: https://dijon.envie.org/content/285-garantie-envie
  - title: "ADEME: réparation de l’électroménager et Bonus Réparation"
    url: https://quefairedemesdechets.ademe.fr/reduction-des-dechets/reparation-objets/reparateur-electromenager/
  - title: "Service Public: garantie légale de conformité"
    url: https://www.service-public.gouv.fr/particuliers/vosdroits/F11094
  - title: "Envie Dijon: livraison et installation"
    url: https://dijon.envie.org/content/279-livraison-installation
  - title: "Service Public: reprise des équipements électriques et électroniques"
    url: https://www.service-public.gouv.fr/particuliers/vosdroits/F31955
affiliate:
  enabled: true
  type: travel
  destination: Dijon
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/maison/(2026)/(11)/electromenager-en-panne-a-dijon-reparer-ou-acheter-reconditionne/index.md
  targetSha: ba8824448a6f7d8a670e668c79330128d6aa7349
  targetUrl: /articles/maison/electromenager-en-panne-a-dijon-reparer-ou-acheter-reconditionne/
  decision: Savoir si le diagnostic, la réparation avec Bonus Réparation ou l'achat reconditionné revient réellement moins cher, en distinguant les frais non éligibles et le reste à payer.
  affiliationPotential: Conserver seulement la location d'utilitaire KAYAK si elle répond à un besoin réel de transport; aucune offre partenaire naturelle à ajouter pour le dépannage.
  gsc:
    retrievedAt: 2026-11-22T01:30:56+01:00
    dataThrough: 2026-11-19
    signal: uncertain
    basis: "Visibilité récente : 20 impressions sur trois jours, puis 1 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-11
    peakEnd: 2026-11-13
    recentStart: 2026-11-17
    recentEnd: 2026-11-19
    peakImpressions: 20
    recentImpressions: 1
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - reparation four
      - réparation d'équipements électriques bourgogne-franche-comté
      - électroménager dijon
---

## Mission retenue
Actualiser le guide pratique sur l'électroménager en panne dans l'agglomération dijonnaise, sans transformer sa baisse d'impressions en diagnostic SEO certain.

## Pourquoi cette mission
Le snapshot signale une baisse de 20 à 1 impression sur deux périodes de trois jours, sans requête comparable ni cause établie. Une lacune indépendante existe: l'article cite les montants QualiRépar, mais n'explique pas qu'un diagnostic seul n'ouvre pas droit au bonus et que le montant TTC de la réparation doit dépasser celui du bonus. Le ministère de l'Économie l'explicite dans sa publication du 11 septembre 2026.

## Décision du lecteur
Comparer avant le dépôt le coût du diagnostic, le devis net de bonus, le délai et le remplacement reconditionné, sans compter une réduction qui ne serait pas applicable.

## Faits à traiter
Préciser que le diagnostic seul ne bénéficie pas du Bonus Réparation; le bonus n'est pas accordé lorsque la facture de réparation TTC est inférieure à son montant. Vérifier la majoration possible de 20 % si une pièce issue de l'économie circulaire est utilisée, sans la promettre systématiquement. Préserver les tarifs de diagnostic et main-d'œuvre annoncés par Envie, leurs réserves, les adresses et téléphones de Longvic et Marsannay, les délais, garanties, livraison, reprise, conseils de sécurité et crédits photographiques. Ne pas inventer de prix net ni déduire le bonus des 50 € de diagnostic sans confirmation de l'atelier.

## Sources de départ
- Ministère de l'Économie, Bonus réparation, 11 septembre 2026: https://www.economie.gouv.fr/particuliers/mes-droits-conso/bien-consommer/bonus-reparation-comment-ca-marche
- Label QualiRépar, grille d'avril 2026: https://www.label-qualirepar.fr/wp-content/uploads/2026/04/Grille-des-bonus-reparation_2026.04.02.pdf
- Envie Dijon, dépannage: https://dijon.envie.org/content/284-depannage
- Envie Dijon, garantie: https://dijon.envie.org/content/285-garantie-envie

## Affiliation
Conserver uniquement la piste existante de location d'utilitaire KAYAK lorsque le transport d'un appareil volumineux la justifie; aucune affiliation artificielle.

## Continuations internes
Conserver le lien existant vers le guide local d'enlèvement des appareils. Ne pas refaire un guide général des garanties ni ajouter d'hébergement pour un dépannage domestique.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/maison/(2026)/(11)/electromenager-en-panne-a-dijon-reparer-ou-acheter-reconditionne/index.md

---
title: "Électroménager en panne à Dijon: réparer ou acheter reconditionné"
subtitle: Du petit appareil à apporter en atelier au réfrigérateur à remplacer, les solutions dans l’agglomération dijonnaise.
summary: "Café réparation à Marsannay, dépannage à Longvic ou achat reconditionné: les coûts, délais et garanties à comparer dans l’agglomération dijonnaise."
slug: electromenager-en-panne-a-dijon-reparer-ou-acheter-reconditionne
status: published
publishedAt: 2026-11-09T13:09:07+01:00
updatedAt: null
category: maison
readingTime: 5
publicationOrigin: region
location:
  city: Dijon
  department: Côte-d'Or
  region: Bourgogne-Franche-Comté
topic:
  key: maison|dijon|electromenager-en-panne-a-dijon-reparer-ou-acheter-reconditionne|2026
  keywords:
    - réparation électroménager Dijon
    - électroménager reconditionné Marsannay
    - café réparation Marsannay
image:
  src: "/images/articles/2026/11/electromenager-en-panne-a-dijon-reparer-ou-acheter-reconditionne.webp"
  alt: "Réparation collective d'un appareil électrique dans un Repair Café à Trèves, en Allemagne, illustration du principe d'un atelier de réparation."
sources:
  - title: "Les Répar’Acteurs de Marsannay: cafés réparation et fonctionnement"
    url: https://lesreparacteurs.fr/
  - title: "Envie Dijon: dépannage"
    url: https://dijon.envie.org/content/284-depannage
  - title: "Envie Dijon: magasins et ateliers"
    url: https://dijon.envie.org/magasins
  - title: "Envie Dijon: garantie et SAV"
    url: https://dijon.envie.org/content/285-garantie-envie
  - title: "ADEME: réparation de l’électroménager et Bonus Réparation"
    url: https://quefairedemesdechets.ademe.fr/reduction-des-dechets/reparation-objets/reparateur-electromenager/
  - title: "Service Public: garantie légale de conformité"
    url: https://www.service-public.gouv.fr/particuliers/vosdroits/F11094
  - title: "Envie Dijon: livraison et installation"
    url: https://dijon.envie.org/content/279-livraison-installation
  - title: "Service Public: reprise des équipements électriques et électroniques"
    url: https://www.service-public.gouv.fr/particuliers/vosdroits/F31955
affiliate:
  enabled: true
  type: travel
  destination: Dijon
---
<!-- article-image-credit -->
*Photo: [RaMa2016](https://commons.wikimedia.org/wiki/File:Repair_Caf%C3%A9_Trier_Reparatur.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Dans l’agglomération de Dijon, plusieurs solutions permettent de faire face à une panne d’électroménager: tenter une réparation avec des bénévoles, confier l’appareil à un professionnel ou le remplacer par un modèle reconditionné. Pour une famille, le choix dépend du coût total, mais aussi du temps pendant lequel on peut se passer du lave-linge ou du réfrigérateur.

Avant de contacter un atelier, photographiez la plaque portant la référence de l’appareil et notez les symptômes ou le code d’erreur. Retrouvez aussi la facture: si une garantie est encore en cours, adressez-vous d’abord au vendeur ou au service qui la prend en charge.

## Petit appareil transportable: réparer avec des bénévoles

À Marsannay-la-Côte, les cafés réparation des [Répar’Acteurs de Marsannay](https://lesreparacteurs.fr/) permettent de chercher une panne et de tenter une réparation avec des bénévoles. Les participants prennent part à l’intervention, sans avoir besoin de connaissances préalables.

Cette formule convient au petit électroménager. Les ateliers excluent les objets volumineux ou nécessitant une alimentation en eau ou en carburant: **n’y apportez pas un lave-linge ou un congélateur**.

La participation est gratuite, mais une pièce à remplacer peut rester à votre charge. Les bénévoles vous orientent pour la trouver. Prévoyez du temps sur place, sans compter sur une réparation systématique pendant la séance. Les enfants accompagnés sont bienvenus.

L’accès aux cafés réparation est généralement libre. Toutefois, le calendrier publié comporte des incohérences entre jours et dates: utilisez le formulaire du site pour faire confirmer la prochaine séance, son horaire et son adresse, en précisant l’appareil concerné.

## Gros électroménager: demander un devis et un délai

<!-- article-image-body:01 -->

![Réparation d'un lave-linge à deux cuves en Zambie, photographie illustrative sans lien avec Envie Dijon.](/images/articles/2026/11/electromenager-en-panne-a-dijon-reparer-ou-acheter-reconditionne-body-01.webp)

*Photo: [Silwimba Felix](https://commons.wikimedia.org/wiki/File:Washing_machine_repairs.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le [service de dépannage d’Envie Dijon](https://dijon.envie.org/content/284-depannage) accepte aussi les appareils achetés ailleurs. Il intervient sur les équipements de lavage, de cuisson et de froid, notamment les lave-linge, lave-vaisselle, fours et réfrigérateurs.

Le dépôt s’effectue à **l’atelier de Longvic, 4 rue de Romelet**, joignable au **03 80 59 62 20**. Ses [horaires d’ouverture](https://dijon.envie.org/magasins) diffèrent de ceux du magasin de vente: l’atelier est notamment fermé le mercredi après-midi et le week-end.

Envie affiche une prise en charge pour diagnostic de **50 € TTC par appareil**, payable au dépôt, puis établit un devis. Le tarif de main-d’œuvre annoncé est de **50 € TTC par heure**. Des pièces d’occasion peuvent être proposées lorsqu’elles sont disponibles.

Avant le dépôt, faites préciser:

- si les 50 € de diagnostic sont déduits de la réparation acceptée et ce qui reste dû en cas de refus du devis;
- le coût de la récupération à domicile et du retour, si vous ne pouvez pas transporter l’appareil;
- le délai prévisible, selon la panne et la disponibilité des pièces.

Si vous pouvez déplacer l’appareil avec de l’aide mais manquez d’un véhicule adapté, vous pouvez [comparer les locations d’utilitaires à Dijon sur KAYAK](https://www.kayak.fr/Dijon-Locations-de-Fourgonnette.9226.cvn.ksp). Vérifiez les dimensions utiles et comparez le coût total, carburant et trajets de dépôt puis de récupération compris, au transport proposé par l’atelier.

Sur sa [page consacrée au SAV](https://dijon.envie.org/content/285-garantie-envie), Envie mentionne une durée moyenne de réparation de sept à dix jours, selon l’approvisionnement en pièces. Ce repère ne garantit pas le délai de votre intervention. Pour un lave-linge, ajoutez les éventuelles dépenses de laverie au budget de réparation.

### Le Bonus Réparation peut réduire la facture

Envie Dijon annonce être labellisé QualiRépar. L’[ADEME indique un bonus de 50 € pour un lave-linge et de 25 € pour un réfrigérateur](https://quefairedemesdechets.ademe.fr/reduction-des-dechets/reparation-objets/reparateur-electromenager/), sous réserve d’éligibilité.

La réparation doit être réalisée par un professionnel labellisé sur un appareil éligible, hors garantie et non couvert par une assurance. La réduction est directement déduite de la facture: vous n’avez pas de demande de remboursement à effectuer. Faites préciser son application sur le devis pour comparer le montant restant à payer avec le prix d’un remplacement.

## Remplacer un appareil: comparer le reconditionné à service égal

Le **magasin Envie de Marsannay-la-Côte, 4 route de Beaune**, est joignable au **03 80 59 96 80**. Ce [site de vente](https://dijon.envie.org/magasins) est distinct de l’atelier de dépannage à Longvic.

Pour un réfrigérateur à remplacer rapidement, demandez d’abord quels modèles sont disponibles et à quelle date ils peuvent être livrés. Comparez ensuite le prix livré à celui d’un appareil neuf de capacité et de consommation proches.

Venez avec les dimensions de l’emplacement et des passages jusqu’à la cuisine. Pour un réfrigérateur, vérifiez le volume utile, le sens d’ouverture des portes et la consommation annuelle en kWh. Choisissez une capacité adaptée au foyer plutôt que le plus grand modèle disponible.

Envie annonce une [garantie de 24 mois, pièces et main-d’œuvre](https://dijon.envie.org/content/285-garantie-envie), sur ses appareils d’occasion rénovés, à compter du retrait ou de la livraison. Sa page prévoit aussi des conditions tarifaires de déplacement du SAV et une option à souscrire à l’achat. Faites expliquer par écrit ce que cette option couvre.

**Ces conditions commerciales ne remplacent pas la garantie légale de conformité.** Celle-ci s’applique aussi aux appareils reconditionnés achetés auprès d’un professionnel. Lorsqu’une panne relève de cette garantie, la réparation ou le remplacement doit intervenir sans frais pour le consommateur, y compris les frais de livraison, comme le rappelle [Service Public](https://www.service-public.gouv.fr/particuliers/vosdroits/F11094).

## Livraison: préciser jusqu’où l’appareil sera transporté

La [grille de livraison affichée par Envie Dijon](https://dijon.envie.org/content/279-livraison-installation) distingue, en zone 1, **20 € en pied d’immeuble** et **40 € avec mise en service pour un appareil standard**. Cette grille porte toujours la date du 1er janvier 2023: faites confirmer le tarif actuel et la zone de votre adresse avant l’achat. Le service annonce une limite de déplacement de 25 km depuis l’atelier de Longvic.

Précisez l’étage, l’ascenseur, les passages étroits et les possibilités de stationnement. Les réfrigérateurs américains ou multiportes font l’objet de tarifs et de restrictions d’accès particuliers.

Pour la mise en service, les raccordements doivent être conformes et accessibles: les livreurs ne modifient pas l’installation du logement.

Prévoyez aussi la reprise de l’ancien appareil au moment de la commande. La [reprise gratuite lors d’un achat de remplacement](https://www.service-public.gouv.fr/particuliers/vosdroits/F31955) est prévue par la réglementation. Envie annonce cet enlèvement lors de la livraison, selon le principe du « 1 pour 1 »: faites-le inscrire au rendez-vous et rendez l’appareil facilement accessible.

Si vous devez vous séparer d’un appareil sans livraison d’un remplaçant, notre guide pour [donner ou faire enlever un appareil électroménager à Dijon](https://www.fam-space.fr/articles/maison/canape-matelas-ou-electromenager-a-dijon-donner-faire-enlever-ou-aller-en-dechetterie/) présente les solutions locales selon son état et vos possibilités de transport.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/maison/canape-matelas-ou-electromenager-a-dijon-donner-faire-enlever-ou-aller-en-dechetterie/ | Canapé, matelas ou électroménager à Dijon: donner, faire enlever ou aller en déchetterie ? | maison | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/maison/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/ | Meubles d'occasion en Meurthe-et-Moselle: où acheter, donner et réparer ? | maison | Meurthe-et-Moselle, Grand Est
- /articles/maison/reparer-ses-objets-dans-l-herault-repair-cafes-et-bonus-reparation/ | Réparer ses objets dans l’Hérault: Repair Cafés et bonus réparation | maison | Hérault, Occitanie
- /articles/maison/donner-acheter-d-occasion-ou-reparer-dans-le-val-d-oise-cinq-adresses-utiles/ | Donner, acheter d’occasion ou réparer dans le Val-d’Oise: cinq adresses utiles | maison | Cergy, Val-d'Oise, Île-de-France
- /articles/maison/lit-superpose-ou-mezzanine-pour-un-enfant-les-verifications-avant-d-acheter/ | Lit superposé ou mezzanine pour un enfant: les vérifications avant d'acheter | maison
- /articles/cuisine/gouter-breton-aux-halles-des-lices-a-vannes-quoi-acheter-et-quand-venir/ | Goûter breton aux Halles des Lices à Vannes: quoi acheter et quand venir? | cuisine | Vannes, Morbihan, Bretagne
- /articles/maison/encombrants-a-bastia-ou-deposer-meubles-electromenager-et-dechets-verts/ | Encombrants à Bastia: où déposer meubles, électroménager et déchets verts | maison | Bastia, Haute-Corse, Corse
- /articles/maison/meubles-d-occasion-en-ile-de-france-ou-acheter-et-comment-les-transporter/ | Meubles d’occasion en Île-de-France: où acheter et comment les transporter | maison | Île-de-France
- /articles/maison/electromenager-en-panne-a-dijon-reparer-ou-acheter-reconditionne/ | Électroménager en panne à Dijon: réparer ou acheter reconditionné | maison | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | Festival des Petits Explorateurs 2026 à Dijon: ateliers, horaires et tarifs | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | Marché de Noël 100 % Côte-d’Or à Dijon 2026: horaires, spectacles et Père Noël | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/ | Fête foraine de Dijon 2026: dates, horaires et budget avec les enfants | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | Foire de Dijon 2026 avec les enfants: gratuités, ateliers et Ferme Côte-d'Or | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/bons-plans/vacaf-2026-en-cote-d-or-jusqu-a-80-du-sejour-pris-en-charge/ | VACAF 2026 en Côte-d'Or: jusqu'à 80 % du séjour pris en charge | bons-plans | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/cuisine/a-beaune-fabriquer-sa-moutarde-en-famille-et-l-utiliser-en-cuisine/ | À Beaune, fabriquer sa moutarde en famille et l’utiliser en cuisine | cuisine | Beaune, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/voyages/week-end-dans-l-auxois-en-famille-chateau-de-bussy-rabutin-et-semur-en-auxois/ | Week-end dans l'Auxois en famille: château de Bussy-Rabutin et Semur-en-Auxois | voyages | Côte-d'Or, Bourgogne-Franche-Comté
- /articles/sorties/visiter-l-abbaye-de-fontenay-avec-des-enfants-meme-en-hiver/ | Visiter l'abbaye de Fontenay avec des enfants, même en hiver | sorties | Marmagne, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/parentalite/cercles-de-parents-en-cote-d-or-trois-seances-gratuites-pour-echanger-pendant-les-premieres-annees/ | Cercles de Parents en Côte-d'Or: trois séances gratuites pour échanger pendant les premières années | parentalite | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/maison/composteur-gratuit-a-laval-agglomeration-quelle-solution-pour-votre-logement/ | Composteur gratuit à Laval Agglomération: quelle solution pour votre logement ? | maison | Laval, Mayenne, Pays de la Loire
- /articles/maison/renover-sa-maison-dans-l-aisne-en-2026-2027-les-demarches-et-les-aides/ | Rénover sa maison dans l’Aisne en 2026-2027: les démarches et les aides | maison | Aisne, Hauts-de-France
- /articles/maison/poterie-a-dieulefit-en-famille-ateliers-et-savoir-faire/ | Poterie à Dieulefit en famille: ateliers et savoir-faire | maison | Dieulefit, Drôme, Auvergne-Rhône-Alpes
- /articles/maison/composteur-gratuit-dans-le-gers-comment-en-obtenir-un-et-bien-demarrer/ | Composteur gratuit dans le Gers: comment en obtenir un et bien démarrer ? | maison | Gers, Occitanie

### Historique Radar lié

- opportunity | /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | 2026-10-30T03:27:02.483Z
- opportunity | /articles/evenements/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/ | 2026-10-25T17:34:53.718Z
- refresh | /articles/evenements/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/ | 2026-11-12T12:32:06.313Z
- opportunity | /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | 2026-10-21T16:31:41.000Z
- opportunity | /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | 2026-10-29T14:26:32.277Z
- refresh | /articles/maison/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/ | 2026-11-12T01:28:37.978Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
