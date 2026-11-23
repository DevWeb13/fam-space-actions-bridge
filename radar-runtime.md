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
title: "Ferry Ouistreham-Portsmouth en famille: préparer le départ et la traversée"
subtitle: Avec ou sans voiture, choisir son horaire et son confort pour arriver en Angleterre dans de bonnes conditions
summary: "Accès au terminal de Ouistreham, formalités britanniques, cabine et budget: les repères pour préparer une première traversée en famille."
slug: ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee
status: published
publishedAt: 2026-10-24T16:19:35+02:00
updatedAt: 2026-11-07T07:35:04.882Z
category: vie-pratique
readingTime: 8
publicationOrigin: region
location:
  city: Ouistreham
  department: Calvados
  region: Normandie
topic:
  key: vie-pratique|ouistreham|ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee|2026
  keywords:
    - ferry Ouistreham Portsmouth en famille
    - traversée Caen Portsmouth
    - Brittany Ferries avec enfants
image:
  src: /images/articles/2026/10/ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee.webp
  alt: Le ferry Mont St Michel de Brittany Ferries dans le port de Caen-Ouistreham au crépuscule en décembre 2021.
sources:
  - title: "Brittany Ferries: guide du port de Caen/Ouistreham"
    url: https://www.brittany-ferries.fr/traversees/planifier-voyage/ports/caen
  - title: "Gouvernement britannique: entrée des ressortissants européens au Royaume-Uni"
    url: https://www.gov.uk/guidance/visiting-the-uk-as-an-eu-eea-or-swiss-citizen
  - title: "Gouvernement britannique: autorisation électronique de voyage ETA"
    url: https://www.gov.uk/eta
  - title: "Gouvernement britannique: demander une ETA"
    url: https://www.gov.uk/eta/apply
  - title: "Service Public: autorisation de sortie du territoire"
    url: https://www.service-public.gouv.fr/particuliers/vosdroits/F1359
  - title: "Brittany Ferries: durées des traversées Portsmouth-Caen et Caen-Portsmouth"
    url: https://www.brittany-ferries.co.uk/ferry-routes/ferries-france/portsmouth-caen/crossings
  - title: "Brittany Ferries: horaires Caen-Portsmouth"
    url: https://www.brittany-ferries.fr/traversees/ferries-angleterre/caen-portsmouth/horaires
  - title: "Brittany Ferries: heures locales et horaires à bord"
    url: https://www.brittany-ferries.fr/informations/faqs/renseignement-sur-le-voyage/horaires
  - title: "Brittany Ferries: cabines et sièges à bord"
    url: https://www.brittany-ferries.fr/navires/services-a-bord/cabines-et-sieges
  - title: "Brittany Ferries: réservation des installations pour une traversée de nuit"
    url: https://www.brittany-ferries.fr/informations/faqs/renseignements-sur-la-reservation/est-il-possible-de-reserver-en-ligne-une-traversee-de-nuit-sans-aucune-installation-a-bord
  - title: "Brittany Ferries: heure de présentation au port"
    url: https://www.brittany-ferries.fr/informations/faqs/navires-lignes-ports/quelle-est-l-heure-de-presentation-au-port
  - title: "Brittany Ferries: réservation du véhicule et de ses accessoires"
    url: https://www.brittany-ferries.co.uk/information/faqs/booking-information/booking-the-correct-vehicle-type
  - title: "Brittany Ferries: conditions de transport"
    url: https://www.brittany-ferries.fr/informations/termes/conditions-de-transport
  - title: "Ville de Ouistreham: desserte Twisto"
    url: https://ouistreham-rivabella.fr/vivre-a-ouistreham/transports-circulation-stationnement/twisto/
  - title: "Brittany Ferries: guide du port de Portsmouth"
    url: https://www.brittany-ferries.co.uk/ferry-routes/planning/ports/portsmouth
  - title: "Brittany Ferries: présentation de la ligne Caen-Portsmouth"
    url: https://www.brittany-ferries.fr/traversees/ferries-angleterre/caen-portsmouth/presentation
  - title: "Brittany Ferries: présentation du Mont St Michel"
    url: https://www.brittany-ferries.fr/navires/ferries-croisiere/mont-st-michel/presentation
  - title: "Brittany Ferries: installations du Guillaume de Normandie"
    url: https://www.brittany-ferries.fr/navires/ferries-croisiere/guillaume-de-normandie/installations
  - title: "Brittany Ferries: restauration du Guillaume de Normandie"
    url: https://www.brittany-ferries.fr/navires/ferries-croisiere/guillaume-de-normandie/manger-et-boire
  - title: "Brittany Ferries: devis et réservation"
    url: https://www.brittany-ferries.fr/reservation
  - title: "Brittany Ferries: supplément environnemental SEQE"
    url: https://www.brittany-ferries.fr/informations/conseils-aux-voyageurs/seqe-eu
  - title: "UK Border Force: enfants voyageant au Royaume-Uni"
    url: https://www.gov.uk/government/publications/children-travelling-to-the-uk/children-travelling-to-the-uk-accessible
  - title: "B&B HOTELS: hôtel de Ouistreham"
    url: https://www.hotel-bb.com/fr/hotel/ouistreham
affiliate:
  enabled: true
  type: travel
  destination: Ouistreham
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/vie-pratique/(2026)/(10)/ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee/index.md
  targetSha: 404365960cf4d4a88205ccc2ff48aeb419a77b5d
  targetUrl: /articles/vie-pratique/ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee/
  decision: Réserver une traversée avec des enfants sans se tromper sur les règles de cabine et d'accompagnement des mineurs, en plus du choix jour/nuit et du coût total.
  affiliationPotential: Conserver l'hébergement Booking.com à Ouistreham déjà présent; réservation du ferry auprès de l'opérateur, sans lien partenaire confirmé.
  gsc:
    retrievedAt: 2026-11-23T02:29:06+01:00
    dataThrough: 2026-11-20
    signal: uncertain
    basis: "Visibilité récente : 76 impressions sur trois jours, puis 14 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-25
    peakEnd: 2026-10-27
    recentStart: 2026-11-18
    recentEnd: 2026-11-20
    peakImpressions: 76
    recentImpressions: 14
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - durée traversée ouistreham portsmouth
      - traversée ouistreham angleterre
      - bateau ouistreham angleterre
      - brittany ferries ouistreham
      - car ferry ouistreham
---

## Mission retenue
Actualiser le guide familial de la traversée Caen-Ouistreham–Portsmouth, sans changer son angle principal.

## Pourquoi cette mission
Le snapshot GSC passe de 76 à 14 impressions sur les fenêtres de trois jours comparées, sans cause démontrée. Une lacune indépendante est vérifiable: les conditions particulières de réservation pour les enfants ne figurent pas dans le guide, alors qu'elles influencent le choix de cabine et l'embarquement.

## Décision du lecteur
Savoir quelle cabine et quelle réservation choisir avec un bébé ou un mineur, sans risquer un refus à l'embarquement ni une mauvaise estimation du budget.

## Faits à traiter
- Vérifier dans les conditions actuelles de Brittany Ferries la règle d'accompagnement et de réservation commune pour les moins de 16 ans, ainsi que la règle de cabine entière pour les moins de 4 ans. Ne pas reprendre une condition ancienne sans confirmation actuelle.
- Vérifier l'offre et la réservation des lits bébé sur les deux navires de la ligne, sans généraliser les équipements d'un autre navire.
- Préserver intégralement les formalités passeport/ETA/AST, les durées, horaires locaux, correspondances, véhicules, activités des navires, comparaison du budget, photos/crédits et lien hôtel. Pas de modification de date artificielle.

## Sources de départ
- Brittany Ferries, conditions de vente et de transport: https://www.brittany-ferries.fr/em/2021v3/conditions-generales-vente
- Brittany Ferries, cabines et sièges: https://www.brittany-ferries.fr/navires/services-a-bord/cabines-et-sieges
- Brittany Ferries, ligne Caen-Portsmouth: https://www.brittany-ferries.fr/traversees/ferries-angleterre/caen-portsmouth/presentation

## Affiliation
Conserver le B&B HOTEL Ouistreham sur Booking.com déjà présent. Aucun partenaire de billetterie ferry vérifié: ne pas inventer d'offre affiliée.

## Continuations internes
- Garder le renvoi vers le guide Twisto de Caen pour les détails de titres de transport.
- Limiter les ajouts aux règles familiales réellement confirmées, sans répéter les formalités déjà détaillées.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/vie-pratique/(2026)/(10)/ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee/index.md

---
title: "Ferry Ouistreham-Portsmouth en famille: préparer le départ et la traversée"
subtitle: Avec ou sans voiture, choisir son horaire et son confort pour arriver en Angleterre dans de bonnes conditions
summary: "Accès au terminal de Ouistreham, formalités britanniques, cabine et budget: les repères pour préparer une première traversée en famille."
slug: ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee
status: published
publishedAt: 2026-10-24T16:19:35+02:00
updatedAt: 2026-11-07T07:35:04.882Z
category: vie-pratique
readingTime: 8
publicationOrigin: region
location:
  city: Ouistreham
  department: Calvados
  region: Normandie
topic:
  key: vie-pratique|ouistreham|ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee|2026
  keywords:
    - ferry Ouistreham Portsmouth en famille
    - traversée Caen Portsmouth
    - Brittany Ferries avec enfants
image:
  src: /images/articles/2026/10/ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee.webp
  alt: Le ferry Mont St Michel de Brittany Ferries dans le port de Caen-Ouistreham au crépuscule en décembre 2021.
sources:
  - title: "Brittany Ferries: guide du port de Caen/Ouistreham"
    url: https://www.brittany-ferries.fr/traversees/planifier-voyage/ports/caen
  - title: "Gouvernement britannique: entrée des ressortissants européens au Royaume-Uni"
    url: https://www.gov.uk/guidance/visiting-the-uk-as-an-eu-eea-or-swiss-citizen
  - title: "Gouvernement britannique: autorisation électronique de voyage ETA"
    url: https://www.gov.uk/eta
  - title: "Gouvernement britannique: demander une ETA"
    url: https://www.gov.uk/eta/apply
  - title: "Service Public: autorisation de sortie du territoire"
    url: https://www.service-public.gouv.fr/particuliers/vosdroits/F1359
  - title: "Brittany Ferries: durées des traversées Portsmouth-Caen et Caen-Portsmouth"
    url: https://www.brittany-ferries.co.uk/ferry-routes/ferries-france/portsmouth-caen/crossings
  - title: "Brittany Ferries: horaires Caen-Portsmouth"
    url: https://www.brittany-ferries.fr/traversees/ferries-angleterre/caen-portsmouth/horaires
  - title: "Brittany Ferries: heures locales et horaires à bord"
    url: https://www.brittany-ferries.fr/informations/faqs/renseignement-sur-le-voyage/horaires
  - title: "Brittany Ferries: cabines et sièges à bord"
    url: https://www.brittany-ferries.fr/navires/services-a-bord/cabines-et-sieges
  - title: "Brittany Ferries: réservation des installations pour une traversée de nuit"
    url: https://www.brittany-ferries.fr/informations/faqs/renseignements-sur-la-reservation/est-il-possible-de-reserver-en-ligne-une-traversee-de-nuit-sans-aucune-installation-a-bord
  - title: "Brittany Ferries: heure de présentation au port"
    url: https://www.brittany-ferries.fr/informations/faqs/navires-lignes-ports/quelle-est-l-heure-de-presentation-au-port
  - title: "Brittany Ferries: réservation du véhicule et de ses accessoires"
    url: https://www.brittany-ferries.co.uk/information/faqs/booking-information/booking-the-correct-vehicle-type
  - title: "Brittany Ferries: conditions de transport"
    url: https://www.brittany-ferries.fr/informations/termes/conditions-de-transport
  - title: "Ville de Ouistreham: desserte Twisto"
    url: https://ouistreham-rivabella.fr/vivre-a-ouistreham/transports-circulation-stationnement/twisto/
  - title: "Brittany Ferries: guide du port de Portsmouth"
    url: https://www.brittany-ferries.co.uk/ferry-routes/planning/ports/portsmouth
  - title: "Brittany Ferries: présentation de la ligne Caen-Portsmouth"
    url: https://www.brittany-ferries.fr/traversees/ferries-angleterre/caen-portsmouth/presentation
  - title: "Brittany Ferries: présentation du Mont St Michel"
    url: https://www.brittany-ferries.fr/navires/ferries-croisiere/mont-st-michel/presentation
  - title: "Brittany Ferries: installations du Guillaume de Normandie"
    url: https://www.brittany-ferries.fr/navires/ferries-croisiere/guillaume-de-normandie/installations
  - title: "Brittany Ferries: restauration du Guillaume de Normandie"
    url: https://www.brittany-ferries.fr/navires/ferries-croisiere/guillaume-de-normandie/manger-et-boire
  - title: "Brittany Ferries: devis et réservation"
    url: https://www.brittany-ferries.fr/reservation
  - title: "Brittany Ferries: supplément environnemental SEQE"
    url: https://www.brittany-ferries.fr/informations/conseils-aux-voyageurs/seqe-eu
  - title: "UK Border Force: enfants voyageant au Royaume-Uni"
    url: https://www.gov.uk/government/publications/children-travelling-to-the-uk/children-travelling-to-the-uk-accessible
  - title: "B&B HOTELS: hôtel de Ouistreham"
    url: https://www.hotel-bb.com/fr/hotel/ouistreham
affiliate:
  enabled: true
  type: travel
  destination: Ouistreham
---

<!-- article-image-credit -->
*Photo: [Raimond Spekking](https://commons.wikimedia.org/wiki/File:Ferry_Mont_St_Michel_Brittany_Ferries_-_IMO_9238337_in_port_of_Caen-Ouistreham-7701_(cropped).jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Rejoindre l’Angleterre en ferry depuis le Calvados permet d’emmener sa voiture ou de poursuivre le voyage en train depuis Portsmouth. Avec des enfants, le choix du départ change surtout le rythme du trajet: une journée à bord ou une nuit de traversée, avec une arrivée matinale.

La liaison commercialisée sous le nom « Caen-Portsmouth » part du [terminal maritime de Ouistreham](https://www.brittany-ferries.fr/traversees/planifier-voyage/ports/caen), à environ 15 kilomètres au nord de Caen. **La gare SNCF de Caen et le terminal sont deux lieux distincts**: leur liaison compte dans le choix de l’horaire, particulièrement sans voiture.

## Préparer les documents de chaque enfant

Pour un séjour touristique ordinaire au Royaume-Uni, les voyageurs français doivent disposer d’un **passeport individuel valable pendant tout le séjour**, enfants compris. Certaines exceptions permettent encore l’entrée avec une carte d’identité; elles sont détaillées par le [gouvernement britannique](https://www.gov.uk/guidance/visiting-the-uk-as-an-eu-eea-or-swiss-citizen).

Les visiteurs français doivent aussi obtenir une **autorisation électronique de voyage, appelée ETA**, sauf exemption liée notamment à leur nationalité ou à leur statut au Royaume-Uni. Chaque voyageur concerné doit avoir la sienne, y compris les bébés. Au 24 octobre 2026, le [tarif officiel de l’ETA](https://www.gov.uk/eta) est de **20 £ par personne**.

Faites les demandes avec les passeports qui serviront au voyage. Les décisions peuvent arriver séparément et prendre jusqu’à trois jours ouvrés: attendez l’accord pour chaque personne avant de partir. L’[ETA est liée au passeport utilisé pour la demande](https://www.gov.uk/eta/apply) et reste valable deux ans, ou jusqu’à l’expiration de ce passeport si elle intervient avant. Un changement de passeport impose une nouvelle demande.

Un enfant résidant habituellement en France qui voyage avec ses grands-parents ou un autre adulte sans autorité parentale doit également emporter une [autorisation de sortie du territoire](https://www.service-public.gouv.fr/particuliers/vosdroits/F1359), accompagnée d’une copie du document d’identité du signataire.

**Si l’enfant porte un nom différent de celui du parent accompagnateur**, la police aux frontières britannique peut demander de préciser leur lien. Emportez, par précaution, une copie de son acte de naissance ou d’adoption; un acte de mariage ou de divorce peut aussi expliquer la différence de nom. Ces justificatifs ne sont pas exigés systématiquement de toutes les familles.

**S’il voyage avec ses grands-parents, un proche ou un autre adulte non parent**, prévoyez également une lettre du ou des parents autorisant le voyage et indiquant leurs coordonnées. La [Border Force britannique](https://www.gov.uk/government/publications/children-travelling-to-the-uk/children-travelling-to-the-uk-accessible) peut demander ces éléments pour vérifier la relation avec l’enfant. Cette lettre utile au contrôle britannique ne remplace pas l’AST française lorsqu’elle est obligatoire. À l’inverse, un enfant qui quitte la France avec un parent titulaire de l’autorité parentale n’a pas besoin d’AST française du seul fait d’une différence de nom.

## De jour ou de nuit, quel rythme choisir?

Dans le sens Caen-Portsmouth, Brittany Ferries annonce une durée moyenne d’environ **six heures de jour et huit heures de nuit**, avec des variations saisonnières. Comparez les [durées de traversée](https://www.brittany-ferries.co.uk/ferry-routes/ferries-france/portsmouth-caen/crossings) et les [horaires à vos dates](https://www.brittany-ferries.fr/traversees/ferries-angleterre/caen-portsmouth/horaires).

**Le départ du matin** permet de découvrir le bateau, de déjeuner à bord et de poursuivre le voyage après l’arrivée. Selon votre domicile, il peut toutefois imposer plusieurs heures de route ou un réveil très matinal avant l’embarquement.

**Le départ de l’après-midi** laisse davantage de temps pour rejoindre Ouistreham. Regardez alors l’heure d’arrivée réelle à votre hébergement anglais, après le débarquement et le trajet depuis Portsmouth. Avec de jeunes enfants, cette fin de journée peut être la partie la plus fatigante du voyage.

**La traversée de nuit** libère une partie de la journée suivante, mais ne garantit pas une longue nuit de sommeil. Le départ tardif décale le coucher et l’arrivée matinale oblige à se remettre rapidement en mouvement. Dîner avant l’embarquement permet de rejoindre directement la cabine; gardez ensuite une première matinée légère.

Les horaires de départ et d’arrivée sont affichés en [heures locales, tandis que l’heure britannique s’applique à bord](https://www.brittany-ferries.fr/informations/faqs/renseignement-sur-le-voyage/horaires). L’Angleterre a une heure de moins que la France.

### Cabine ou sièges?

Même de jour, une cabine peut servir pour une sieste, un change ou un moment au calme. L’offre de [cabines et sièges](https://www.brittany-ferries.fr/navires/services-a-bord/cabines-et-sieges) comprend notamment des cabines à deux ou quatre couchettes, avec salle de bains, couettes et serviettes.

Pour une nuit avec de jeunes enfants, privilégiez une cabine et vérifiez sa capacité pour toute la famille, bébé compris, ainsi que la disposition des lits, souvent superposés. Les sièges en salon, lorsqu’ils sont proposés, laissent moins de possibilités pour coucher un enfant.

La [réservation d’une installation est en principe obligatoire la nuit](https://www.brittany-ferries.fr/informations/faqs/renseignements-sur-la-reservation/est-il-possible-de-reserver-en-ligne-une-traversee-de-nuit-sans-aucune-installation-a-bord). Sur les liaisons France-Grande-Bretagne, la compagnie prévoit une exception lorsque toutes les cabines et tous les sièges ont été vendus. Pour une première traversée familiale, mieux vaut choisir son confort dès la réservation.

## Rejoindre le bateau avec sa voiture

<!-- article-image-body:01 -->

![Bâtiment de la gare maritime du port de Caen-Ouistreham, photographié en mars 2025.](/images/articles/2026/10/ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee-body-01.webp)

<!-- /article-image-body:01 -->

Depuis le périphérique de Caen, suivez Ouistreham/Car Ferry, par la sortie Porte d’Angleterre. Organisez votre arrivée à partir de **l’heure de présentation inscrite sur votre billet**, et non de la seule heure de départ: la [consigne d’enregistrement dépend de la réservation](https://www.brittany-ferries.fr/informations/faqs/navires-lignes-ports/quelle-est-l-heure-de-presentation-au-port).

Déclarez les dimensions exactes du véhicule et ses accessoires. La [compagnie demande la hauteur totale avec les équipements de toit](https://www.brittany-ferries.co.uk/information/faqs/booking-information/booking-the-correct-vehicle-type), ainsi que la présence d’un porte-vélos arrière. Ces éléments déterminent la place nécessaire et peuvent modifier le prix.

Avant de rejoindre les files d’embarquement, préparez un sac pour les espaces passagers: documents, médicaments, changes, doudou, affaires de nuit et vêtements chauds pour le pont. **[L’accès aux garages est interdit pendant la traversée](https://www.brittany-ferries.fr/informations/termes/conditions-de-transport)**: les affaires laissées dans la voiture ne seront plus accessibles.

## Sans voiture, vérifier les correspondances aux deux ports

<!-- article-image-body:02 -->

![Terminal des ferries internationaux de Portsmouth, photographié en août 2023.](/images/articles/2026/10/ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee-body-02.webp)

*Photo: [Tim Sheerman-Chase](https://commons.wikimedia.org/wiki/File:Terminal_at_Portsmouth_Continental_Ferry_Port.jpg) - [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

La [ligne 12 du réseau Twisto](https://ouistreham-rivabella.fr/vivre-a-ouistreham/transports-circulation-stationnement/twisto/) relie la gare SNCF de Caen à Ouistreham. Selon le guide du port de Brittany Ferries, l’arrêt se trouve à environ 500 mètres de la gare maritime. Ajoutez cette marche avec les valises et la poussette au temps de correspondance.

Avant d’acheter le train, vérifiez le bus du jour choisi, le [titre Twisto adapté à votre famille](/articles/vie-pratique/quel-ticket-twisto-choisir-a-caen-avec-des-enfants/) et l’heure limite d’enregistrement du ferry. Ne supposez pas qu’un bus correspond à chaque traversée, notamment pour un départ tardif. Si la liaison ne convient pas, prévoyez un taxi réservé ou une nuit sur place. Un bus assure ensuite le transfert du terminal au navire.

À l’arrivée, le ferry accoste à **Portsmouth International Port**. La gare ferroviaire n’est pas au pied du bateau: le [guide du port de Portsmouth](https://www.brittany-ferries.co.uk/ferry-routes/planning/ports/portsmouth) situe Portsmouth & Southsea à environ trente minutes à pied et signale une station de taxis devant le terminal.

Pour poursuivre en train, laissez une marge pour le débarquement, les contrôles et le transfert. Regardez les conditions d’échange du billet si toute la suite du voyage dépend de cette correspondance.

## Vérifier le navire avant de promettre le programme aux enfants

<!-- article-image-body:03 -->

![Ferry Guillaume de Normandie dans le port de Ouistreham, photographié en mars 2026.](/images/articles/2026/10/ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee-body-03.webp)

*Photo: [Loxyger](https://commons.wikimedia.org/wiki/File:Guillaume_de_Normandie_Ouistreham.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

Brittany Ferries présente deux bateaux sur la [ligne Caen-Portsmouth](https://www.brittany-ferries.fr/traversees/ferries-angleterre/caen-portsmouth/presentation), avec des prestations différentes.

Le [Mont St Michel](https://www.brittany-ferries.fr/navires/ferries-croisiere/mont-st-michel/presentation) possède notamment deux cinémas, une salle de jeux vidéo destinée aux adolescents, des restaurants et des bars.

Le [Guillaume de Normandie](https://www.brittany-ferries.fr/navires/ferries-croisiere/guillaume-de-normandie/installations) propose la vidéo à la demande gratuite en cabine. Sa [présentation de la restauration](https://www.brittany-ferries.fr/navires/ferries-croisiere/guillaume-de-normandie/manger-et-boire) annonce des menus enfants de 4 à 12 ans dans les restaurants.

Vérifiez le navire prévu sur votre réservation, puis les services ouverts et leurs horaires une fois à bord. Pour un petit qui dîne tôt, organisez le repas autour de l’embarquement plutôt que de compter sur une installation immédiate au restaurant.

## Comparer le coût du trajet complet

Faites une [simulation auprès de Brittany Ferries](https://www.brittany-ferries.fr/reservation) avec vos dates, les âges des enfants et les dimensions exactes du véhicule. Pour comparer deux départs, gardez les mêmes prestations et regardez:

- les passagers et le véhicule éventuel;
- la cabine ou les sièges;
- les repas, boissons et petits-déjeuners;
- le supplément environnemental;
- les transferts, le stationnement éventuel et une nuit avant le départ.

Le [supplément environnemental SEQE](https://www.brittany-ferries.fr/informations/conseils-aux-voyageurs/seqe-eu) dépend notamment du nombre et de l’âge des passagers, du véhicule et de la date du voyage. Pour 2026, la compagnie donne l’exemple de **24,60 € pour une traversée Caen-Portsmouth avec deux passagers et une voiture**. Ce montant correspond uniquement au supplément. Vérifiez s’il figure déjà dans le total affiché pour éviter de le compter deux fois.

Sans voiture, mettez l’économie sur le ferry en regard des transferts et des transports en Angleterre. Pour un départ de nuit, comparez aussi le prix de la cabine avec l’éventuelle nuit d’hôtel que cet horaire permet d’éviter.

## Dormir à Ouistreham avant un départ matinal

Une nuit sur place peut être utile si le ferry du matin impose plusieurs heures de route nocturne ou si les transports publics ne permettent pas d’arriver à temps.

Pour cette étape, vous pouvez regarder les disponibilités du [B&B HOTEL Ouistreham sur Booking.com](https://www.booking.com/hotel/fr/b-amp-b-ouistreham.fr.html). L’établissement propose des chambres pour quatre personnes et annonce un parking gratuit pendant le séjour à l’hôtel, ainsi qu’un petit-déjeuner à partir de 6 h 30. Vérifiez la capacité adaptée à votre famille, les conditions d’annulation et le temps nécessaire pour rejoindre le terminal à l’heure demandée.

Si vous arrivez après la fermeture de la réception, préparez la récupération de la chambre par le distributeur automatique de l’hôtel. Et avant de prévoir le petit-déjeuner sur place, assurez-vous que son horaire reste compatible avec l’enregistrement du ferry.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/vie-pratique/aeroport-de-lille-avec-des-enfants-preparer-le-depart-jusqu-a-l-embarquement/ | Aéroport de Lille avec des enfants: préparer le départ jusqu’à l’embarquement | vie-pratique | Lesquin, Nord, Hauts-de-France
- /articles/vie-pratique/lyon-saint-exupery-avec-des-enfants-preparer-le-trajet-les-controles-et-l-attente/ | Lyon-Saint-Exupéry avec des enfants: préparer le trajet, les contrôles et l’attente | vie-pratique | Colombier-Saugnieu, Rhône, Auvergne-Rhône-Alpes
- /articles/voyages/visiter-guedelon-avec-des-enfants-preparer-la-journee-en-2026/ | Visiter Guédelon avec des enfants: préparer la journée en 2026 | voyages | Treigny-Perreuse-Sainte-Colombe, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/carnaval-de-guyane-2027-en-famille-preparer-ses-premieres-sorties/ | Carnaval de Guyane 2027 en famille: préparer ses premières sorties | evenements | Guyane
- /articles/voyages/carte-europeenne-assurance-maladie-enfant-vacances/ | Carte européenne d’assurance maladie pour un enfant: que faut-il préparer avant le départ ? | voyages
- /articles/activites/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre/ | Grottes de Thouzon avec des enfants: préparer la visite sous terre | activites | Le Thor, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/mer-en-vue-a-epinal-en-famille-preparer-la-visite/ | Mer en vue ! à Épinal en famille: préparer la visite | evenements | Épinal, Vosges, Grand Est
- /articles/maison/saison-cyclonique-en-guadeloupe-comment-preparer-sa-maison-en-famille/ | Saison cyclonique en Guadeloupe: comment préparer sa maison en famille | maison | Basse-Terre, Guadeloupe, Guadeloupe
- /articles/vie-pratique/ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee/ | Ferry Ouistreham-Portsmouth en famille: préparer le départ et la traversée | vie-pratique | Ouistreham, Calvados, Normandie
- /articles/sorties/paleospace-de-villers-sur-mer-en-famille-fossiles-planetarium-et-visites/ | Paléospace de Villers-sur-Mer en famille: fossiles, planétarium et visites | sorties | Villers-sur-Mer, Calvados, Normandie
- /articles/bons-plans/visiter-falaise-en-famille-a-petit-prix-quel-pass-choisir/ | Visiter Falaise en famille à petit prix: quel pass choisir ? | bons-plans | Falaise, Calvados, Normandie
- /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | Noël à Caen 2026 en famille: marché de Noël et visite illuminée | evenements | Caen, Calvados, Normandie
- /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | Noël à Bayeux 2026 en famille: marché et Galopades | evenements | Bayeux, Calvados, Normandie
- /articles/parentalite/laep-a-caen-4-lieux-pour-venir-avec-un-enfant-sans-inscription/ | LAEP à Caen: 4 lieux pour venir avec un enfant sans inscription | parentalite | Caen, Calvados, Normandie
- /articles/cuisine/ateliers-cuisine-a-caen-avec-des-enfants-quelle-formule-choisir/ | Bien Dans Son Assiette à Caen: quel atelier cuisine choisir avec un enfant ? | cuisine | Caen, Calvados, Normandie
- /articles/maison/decheteries-de-caen-la-mer-qr-code-ou-plaque-obligatoires-depuis-septembre-2026/ | Déchèteries de Caen la mer: QR code ou plaque obligatoires depuis septembre 2026 | maison | Caen, Calvados, Normandie
- /articles/vie-pratique/quel-ticket-twisto-choisir-a-caen-avec-des-enfants/ | Quel ticket Twisto choisir à Caen avec des enfants? | vie-pratique | Caen, Calvados, Normandie
- /articles/activites/festyland-avec-de-jeunes-enfants-quelles-attractions-selon-leur-taille/ | Festyland avec de jeunes enfants: quelles attractions selon leur taille? | activites | Carpiquet, Calvados, Normandie
- /articles/vie-pratique/aides-caf-en-charente-maritime-financer-meubles-electromenager-et-ordinateur/ | Aides Caf en Charente-Maritime: financer meubles, électroménager et ordinateur | vie-pratique | Charente-Maritime, Nouvelle-Aquitaine
- /articles/vie-pratique/littoral-des-alpes-maritimes-en-famille-se-deplacer-sans-voiture/ | Littoral des Alpes-Maritimes en famille: se déplacer sans voiture | vie-pratique | Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/vie-pratique/transaltitude-hiver-2026-2027-partir-a-la-neige-en-isere-sans-voiture/ | Transaltitude hiver 2026-2027: partir à la neige en Isère sans voiture | vie-pratique | Isère, Auvergne-Rhône-Alpes
- /articles/vie-pratique/ordi-lot-2026-2027-prix-demarches-et-delais-pour-les-familles/ | Ordi'Lot 2026-2027: prix, démarches et délais pour les familles | vie-pratique | Lot, Occitanie

### Historique Radar lié

- refresh | /articles/vie-pratique/ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee/ | 2026-11-07T07:35:04.984Z
- refresh | /articles/activites/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre/ | 2026-11-10T09:32:01.095Z
- opportunity | /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | 2026-10-30T15:36:05.374Z
- refresh | /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | 2026-11-14T12:29:40.480Z
- opportunity | /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | 2026-10-30T21:26:32.584Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
