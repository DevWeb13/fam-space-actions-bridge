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
title: "Belle-Île-en-Mer en famille sans voiture: ferry et déplacements"
subtitle: Une journée à pied au Palais ou deux nuits pour découvrir l’île selon la saison
summary: "Depuis Quiberon, organisez Belle-Île avec des enfants sans embarquer votre voiture: traversée, balades au Palais, bus saisonniers et hébergements proches du port."
slug: belle-ile-en-mer-en-famille-sans-voiture-ferry-et-deplacements
status: published
publishedAt: 2026-10-23T23:04:55+02:00
updatedAt: null
category: voyages
readingTime: 5
location:
  city: Le Palais
  department: Morbihan
  region: Bretagne
topic:
  key: voyages|le-palais|belle-ile-en-mer-en-famille-sans-voiture-ferry-et-deplacements|2026
  keywords:
    - Belle-Île-en-Mer en famille sans voiture
    - ferry Quiberon Le Palais
    - Belle-Île bus 2026
    - visiter Belle-Île avec enfants
image:
  src: /images/articles/2026/10/belle-ile-en-mer-en-famille-sans-voiture-ferry-et-deplacements.webp
  alt: L'ancien ferry Acadie et un canot de sauvetage dans le port du Palais à Belle-Île-en-Mer en 2006
sources:
  - title: BreizhGo Océane - traversées Quiberon-Belle-Île
    url: https://oceane.breizhgo.bzh/line/belle-ile-en-mer/
  - title: BreizhGo Océane - accès à la gare maritime de Quiberon
    url: https://oceane.breizhgo.bzh/acces-stationnement-gare-maritime-quiberon/
  - title: BreizhGo Océane - adaptations des horaires en 2026
    url: https://oceane.breizhgo.bzh/horaires-des-traversees-vers-belle-ile-en-mer-comprendre-les-adaptations-en-cours/
  - title: Office de tourisme de Belle-Île - réseau de bus
    url: https://www.belle-ile.com/organiser/se-deplacer-belle-ile-sans-ma-voiture/belle-ile-en-bus/
  - title: Office de tourisme de Belle-Île - se déplacer sans voiture
    url: https://www.belle-ile.com/organiser/se-deplacer-belle-ile-sans-ma-voiture/
  - title: Office de tourisme de Belle-Île - plage de Ramonette
    url: https://www.belle-ile.com/offres/plage-de-ramonette-le-palais-fr-517809/
  - title: Office de tourisme de Belle-Île - enceinte urbaine du Palais
    url: https://www.belle-ile.com/offres/lenceinte-urbaine-de-palais-le-palais-fr-3042868/
  - title: Office de tourisme de Belle-Île - location de vélo
    url: https://www.belle-ile.com/organiser/se-deplacer-belle-ile-sans-ma-voiture/location-de-velo/
  - title: Office de tourisme de Belle-Île - boucle Le Palais-Port Fouquet
    url: https://www.belle-ile.com/offres/boucle-le-palais-port-fouquet-le-palais-fr-5647919/
affiliate:
  enabled: true
  type: travel
  destination: Le Palais
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/voyages/(2026)/(10)/belle-ile-en-mer-en-famille-sans-voiture-ferry-et-deplacements/index.md
  targetSha: d2bf5b4afd0b734146f044cba14c72a7e503b514
  targetUrl: /articles/voyages/belle-ile-en-mer-en-famille-sans-voiture-ferry-et-deplacements/
  decision: Permettre à une famille de chiffrer sa traversée aller-retour et de choisir une excursion réellement faisable sans voiture selon la saison, avec ou sans bus touristique.
  affiliationPotential: Conserver les deux hébergements déjà proposés au Palais sur Booking et Abritel; aucune nouvelle offre non vérifiée.
  gsc:
    retrievedAt: 2026-11-11T02:29:19+01:00
    dataThrough: 2026-11-08
    signal: uncertain
    basis: "Visibilité récente : 25 impressions sur trois jours, puis 2 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-25
    peakEnd: 2026-10-27
    recentStart: 2026-11-06
    recentEnd: 2026-11-08
    peakImpressions: 25
    recentImpressions: 2
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - bateau belle ile en mer voiture
      - belle ile en mer voiture ou pas
      - sans voiture
---

## Mission retenue
Actualiser le guide de Belle-Île-en-Mer en famille sans voiture, centré sur la traversée Quiberon-Le Palais et les déplacements selon la saison.

## Pourquoi cette mission
Signal GSC de visibilité rapide puis forte baisse, sans cause SEO établie. Lacune indépendante: le guide demande de vérifier les tarifs du ferry sans donner de budget familial indicatif, alors que la compagnie et l'office de tourisme publient des prix par âge. La distinction entre journée hors saison et excursion avec bus mérite un choix concret.

## Décision du lecteur
Savoir combien prévoir pour traverser à pied avec ses enfants et si une journée au Palais suffit ou si une excursion plus éloignée exige un transport réservé.

## Faits à traiter
- Vérifier auprès de BreizhGo Océane les tarifs aller-retour actuels, les tranches d'âge et calculer un exemple familial daté, clairement indicatif, sans promettre un prix de réservation.
- Expliquer simplement que Belle-Ile-Bus a terminé sa saison le 1er novembre 2026 et que le transport hivernal sur demande ne remplace pas un réseau touristique libre; préciser la réservation et les limites.
- Rappeler de consulter les alertes trafic: la compagnie signale des adaptations liées au chenal du Palais et des travaux d'accès à Quiberon du 2 au 13 novembre 2026. Ne pas figer une alerte ponctuelle comme conseil permanent.
- Préserver la traversée de 50 minutes, les marges d'embarquement, le stationnement, le TER/car, la balade du Palais, Ramonette, les conseils poussette/vélo/falaises, les trois photos et leurs crédits, les sources, le lien vers l'île de Batz et les deux hébergements.

## Sources de départ
- BreizhGo Océane, ligne et tarifs: https://oceane.breizhgo.bzh/line/belle-ile-en-mer/
- BreizhGo Océane, trafic: https://oceane.breizhgo.bzh/trafic/
- Office de tourisme, Belle-Ile-Bus: https://www.belle-ile.com/organiser/se-deplacer-belle-ile-sans-ma-voiture/belle-ile-en-bus/
- Office de tourisme, traversée et prix indicatifs: https://www.belle-ile.com/organiser/venir-en-bateau-une-ile-plusieurs-ports-de-depart/au-depart-de-quiberon/depart-pour-belle-ile-en-mer-toute-l-annee/

## Affiliation
Conserver l'Hôtel Atlantique (Booking) et la Maison de Véronique (Abritel), sans modifier leurs liens.

## Continuations internes
- Garder le guide de l'île de Batz comme alternative déjà liée, sans en dupliquer le contenu.
- Ne pas étendre le sujet à un catalogue de visites de toute Belle-Île.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/voyages/(2026)/(10)/belle-ile-en-mer-en-famille-sans-voiture-ferry-et-deplacements/index.md

---
title: "Belle-Île-en-Mer en famille sans voiture: ferry et déplacements"
subtitle: Une journée à pied au Palais ou deux nuits pour découvrir l’île selon la saison
summary: "Depuis Quiberon, organisez Belle-Île avec des enfants sans embarquer votre voiture: traversée, balades au Palais, bus saisonniers et hébergements proches du port."
slug: belle-ile-en-mer-en-famille-sans-voiture-ferry-et-deplacements
status: published
publishedAt: 2026-10-23T23:04:55+02:00
updatedAt: null
category: voyages
readingTime: 5
location:
  city: Le Palais
  department: Morbihan
  region: Bretagne
topic:
  key: voyages|le-palais|belle-ile-en-mer-en-famille-sans-voiture-ferry-et-deplacements|2026
  keywords:
    - Belle-Île-en-Mer en famille sans voiture
    - ferry Quiberon Le Palais
    - Belle-Île bus 2026
    - visiter Belle-Île avec enfants
image:
  src: "/images/articles/2026/10/belle-ile-en-mer-en-famille-sans-voiture-ferry-et-deplacements.webp"
  alt: "L'ancien ferry Acadie et un canot de sauvetage dans le port du Palais à Belle-Île-en-Mer en 2006"
sources:
  - title: BreizhGo Océane - traversées Quiberon-Belle-Île
    url: https://oceane.breizhgo.bzh/line/belle-ile-en-mer/
  - title: BreizhGo Océane - accès à la gare maritime de Quiberon
    url: https://oceane.breizhgo.bzh/acces-stationnement-gare-maritime-quiberon/
  - title: BreizhGo Océane - adaptations des horaires en 2026
    url: https://oceane.breizhgo.bzh/horaires-des-traversees-vers-belle-ile-en-mer-comprendre-les-adaptations-en-cours/
  - title: Office de tourisme de Belle-Île - réseau de bus
    url: https://www.belle-ile.com/organiser/se-deplacer-belle-ile-sans-ma-voiture/belle-ile-en-bus/
  - title: Office de tourisme de Belle-Île - se déplacer sans voiture
    url: https://www.belle-ile.com/organiser/se-deplacer-belle-ile-sans-ma-voiture/
  - title: Office de tourisme de Belle-Île - plage de Ramonette
    url: https://www.belle-ile.com/offres/plage-de-ramonette-le-palais-fr-517809/
  - title: Office de tourisme de Belle-Île - enceinte urbaine du Palais
    url: https://www.belle-ile.com/offres/lenceinte-urbaine-de-palais-le-palais-fr-3042868/
  - title: Office de tourisme de Belle-Île - location de vélo
    url: https://www.belle-ile.com/organiser/se-deplacer-belle-ile-sans-ma-voiture/location-de-velo/
  - title: Office de tourisme de Belle-Île - boucle Le Palais-Port Fouquet
    url: https://www.belle-ile.com/offres/boucle-le-palais-port-fouquet-le-palais-fr-5647919/
affiliate:
  enabled: true
  type: travel
  destination: Le Palais
---

Belle-Île-en-Mer, au large de Quiberon dans le Morbihan, se visite aussi sans embarquer la voiture familiale. Environ 50 minutes de ferry suffisent pour rejoindre Le Palais, son principal port. Sur place, les ruelles, les fortifications et une plage toute proche permettent déjà une belle journée avec des enfants.

Pour découvrir Sauzon ou les paysages de la côte sauvage, il faut aller plus loin. Le choix entre une excursion et un séjour de deux nuits dépend surtout des transports disponibles à vos dates, car les bus ne circulent pas toute l’année.

## Le ferry depuis Quiberon: préparer l’aller-retour

<!-- article-image-body:01 -->

![Bâtiment du terminal des ferries de Port-Maria à Quiberon, lieu de départ vers Belle-Île-en-Mer](/images/articles/2026/10/belle-ile-en-mer-en-famille-sans-voiture-ferry-et-deplacements-body-01.webp)

*Photo: [Raimond Spekking](https://commons.wikimedia.org/wiki/File:Terminal_de_ferry_Port-Maria,_Quiberon-41400.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

La [liaison Quiberon-Le Palais de BreizhGo Océane](https://oceane.breizhgo.bzh/line/belle-ile-en-mer/) fonctionne toute l’année. Pour une journée, choisissez ensemble les horaires d’aller et de retour avant de prévoir les visites. Les tarifs varient selon les dates et les voyageurs: vérifiez le montant pour chaque enfant au moment de réserver.

L’embarquement se fait à **Port Maria, à Quiberon**. Les passagers à pied doivent se présenter en salle d’embarquement **20 minutes avant le départ**. La compagnie conseille d’arriver à Quiberon environ une heure à l’avance pour anticiper l’accès au port.

Si vous laissez votre voiture sur le continent, le parking des Îles est adapté aux stationnements de moyenne ou longue durée; une navette gratuite le relie à la gare maritime en haute saison. En été, le train TER « Tire-Bouchon » dessert Quiberon. Le reste de l’année, la ligne de car BreizhGo 601 relie Auray à Quiberon. Retrouvez les possibilités de stationnement et les correspondances sur la page [d’accès à la gare maritime](https://oceane.breizhgo.bzh/acces-stationnement-gare-maritime-quiberon/).

**Vérifiez les horaires peu avant de partir.** Dans sa [communication du 28 août 2026](https://oceane.breizhgo.bzh/horaires-des-traversees-vers-belle-ile-en-mer-comprendre-les-adaptations-en-cours/), la compagnie explique que certains départs sont adaptés en fonction de la profondeur du chenal du Palais, notamment à marée basse. Une réservation déjà effectuée ne dispense donc pas de consulter les dernières informations de circulation.

## Une journée à pied avec les enfants au Palais

<!-- article-image-body:02 -->

![Vue panoramique de la plage de Ramonette au Palais sur Belle-Île-en-Mer](/images/articles/2026/10/belle-ile-en-mer-en-famille-sans-voiture-ferry-et-deplacements-body-02.webp)

*Photo: [Patrice78500](https://commons.wikimedia.org/wiki/File:Plage_de_Ramonette_-_Belle-Ile.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

En arrivant, commencez par le port et les rues du Palais. Les façades colorées et la citadelle Vauban, visible depuis les abords du port, donnent un premier aperçu de l’île sans organiser de transport supplémentaire.

Pour une pause au bord de l’eau, la [plage de Ramonette](https://www.belle-ile.com/offres/plage-de-ramonette-le-palais-fr-517809/) est la plus proche du Palais. C’est un endroit agréable pour jouer dans le sable ou pique-niquer si la météo le permet. Avant toute baignade, tenez compte de la mer et des conditions du jour.

Avec des enfants qui aiment marcher, vous pouvez ajouter la [boucle de l’enceinte urbaine du Palais](https://www.belle-ile.com/offres/lenceinte-urbaine-de-palais-le-palais-fr-3042868/): **2,6 km et environ 1 h 30** selon l’office de tourisme. Avec un tout-petit, mieux vaut choisir seulement une partie de la promenade et garder une marge confortable pour rejoindre le bateau.

Cette journée convient particulièrement à une première découverte de Belle-Île. Elle permet de profiter de la traversée, du port et de la plage, sans prétendre visiter toute l’île.

## Deux nuits sur Belle-Île: choisir une base pratique

<!-- article-image-body:03 -->

![Bateaux de pêche et de plaisance dans le port de Sauzon à Belle-Île-en-Mer, excursion possible depuis Le Palais](/images/articles/2026/10/belle-ile-en-mer-en-famille-sans-voiture-ferry-et-deplacements-body-03.webp)

*Photo: [Franck-fnba](https://commons.wikimedia.org/wiki/File:Sauzon_port_-337.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

Pour un court séjour sans voiture, dormir **au Palais, près du débarcadère**, simplifie les arrivées avec les bagages, les repas et le départ. C’est aussi une précaution utile lorsque les bus ne circulent pas.

Deux possibilités à comparer selon la taille de votre famille: [l’Hôtel Atlantique sur Booking.com](https://www.booking.com/hotel/fr/atlantique-le-palais.fr.html), situé quai de l’Acadie face au port, ou [la Maison de Véronique sur Abritel](https://www.abritel.fr/location-vacances/p1630992), une maison équipée d’une cuisine annoncée pour six personnes, à environ dix minutes à pied de l’embarcadère selon son annonce. Vérifiez la capacité adaptée à vos enfants, la durée minimale du séjour, les frais et les disponibilités avant de réserver.

Pour profiter de deux nuits sans surcharger les journées:

- **Jour 1:** traversée, installation, promenade au Palais et plage de Ramonette.
- **Jour 2:** une excursion vers Sauzon ou un site de la côte sauvage, après avoir confirmé l’aller **et le retour** en transport.
- **Jour 3:** une dernière balade près du port, puis embarquement sans prévoir de visite éloignée.

Pour atteindre les lieux plus isolés, un taxi ou une location de véhicule sur place peut être utile ponctuellement. L’[office de tourisme présente les solutions de déplacement](https://www.belle-ile.com/organiser/se-deplacer-belle-ile-sans-ma-voiture/). Si vous voyagez avec de jeunes enfants, demandez à l’avance la disponibilité de sièges adaptés et vérifiez le lieu de prise en charge.

## Belle-Ile-Bus: attention à la saison

**En 2026, Belle-Ile-Bus fonctionne du 4 avril au 1er novembre.** Les lignes partent de la gare routière du Palais, mais les dessertes et fréquences changent entre printemps, été et automne. Avant de choisir une excursion ou un logement éloigné, consultez les [horaires officiels du réseau](https://www.belle-ile.com/organiser/se-deplacer-belle-ile-sans-ma-voiture/belle-ile-en-bus/), notamment la dernière liaison de retour.

Les poussettes doivent être placées en soute dans la limite des places disponibles. Les vélos et bagages encombrants ne sont pas admis dans l’habitacle: mieux vaut voyager léger pour une sortie en bus.

**Après le 1er novembre 2026**, ne comptez plus sur le réseau touristique. Un transport à la demande existe en hiver, sur réservation au **02 97 31 56 64**, mais il est organisé par demi-journée et permet surtout de courts déplacements vers le centre du Palais. Ce n’est pas un service pour enchaîner librement les sites touristiques. Les dates et conditions devront être revérifiées pour une saison ultérieure.

## Vélo et sentiers côtiers: adapter le parcours à l’âge des enfants

Belle-Île est vallonnée et, selon l’office de tourisme, les vélos circulent principalement sur des **routes partagées avec les voitures**, sans réseau de pistes cyclables aménagées. La page [location de vélo](https://www.belle-ile.com/organiser/se-deplacer-belle-ile-sans-ma-voiture/location-de-velo/) présente les possibilités sur l’île. Avant de louer, vérifiez les équipements pour transporter les enfants et tenez compte du vent, des côtes et de la circulation.

Les sentiers côtiers demandent encore plus de prudence. La [boucle Le Palais-Port Fouquet](https://www.belle-ile.com/offres/boucle-le-palais-port-fouquet-le-palais-fr-5647919/) mesure **10,3 km**: ce n’est pas une petite balade à improviser avec de jeunes enfants. L’office de tourisme signale des passages escarpés, glissants après la pluie et proches des falaises, ainsi que l’absence de points d’eau et de toilettes sur le parcours. Privilégiez un tronçon court adapté aux marcheurs du groupe, avec de bonnes chaussures, de l’eau et une surveillance rapprochée des enfants.

Si vous aimez découvrir les îles bretonnes à un rythme tranquille, notre [guide de l’île de Batz avec des enfants](https://www.fam-space.fr/articles/voyages/ile-de-batz-avec-des-enfants-dormir-sur-l-ile-ou-rester-a-roscoff/) propose une autre escapade à organiser depuis le continent.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/vie-pratique/bus-ou-voiture-a-la-reunion-organiser-ses-deplacements-en-famille/ | Bus ou voiture à La Réunion: organiser ses déplacements en famille | vie-pratique | La Réunion
- /articles/vie-pratique/ouessant-avec-des-enfants-sans-voiture-ferry-bagages-et-deplacements/ | Ouessant avec des enfants sans voiture: ferry, bagages et déplacements | vie-pratique | Ouessant, Finistère, Bretagne
- /articles/voyages/noirmoutier-avec-des-enfants-faut-il-garder-la-voiture-sur-l-ile/ | Noirmoutier avec des enfants: faut-il garder la voiture sur l'île? | voyages | Noirmoutier-en-l'Île, Vendée, Pays de la Loire
- /articles/vie-pratique/se-deplacer-a-digne-les-bains-en-famille-bus-train-ou-voiture-de-location/ | Se déplacer à Digne-les-Bains en famille: bus, train ou voiture de location? | vie-pratique | Digne-les-Bains, Alpes-de-Haute-Provence, Provence-Alpes-Côte d’Azur
- /articles/voyages/blois-sans-voiture-en-2026-3-jours-pour-chambord-cheverny-et-le-centre-ville/ | Blois sans voiture en 2026: 3 jours pour Chambord, Cheverny et le centre-ville | voyages | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/vie-pratique/drome-sans-voiture-avec-des-enfants-train-cars-et-bus-pour-se-deplacer/ | Drôme sans voiture avec des enfants: train, cars et bus pour se déplacer | vie-pratique | Drôme, Auvergne-Rhône-Alpes
- /articles/bons-plans/chamonix-en-famille-sans-voiture-train-gratuit-et-bus-a-prix-reduit-avec-la-carte-d-hote/ | Chamonix en famille sans voiture: train gratuit et bus à prix réduit avec la carte d’hôte | bons-plans | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/vie-pratique/se-deplacer-en-mayenne-avec-des-enfants-sans-voiture-bus-tad-et-ter/ | Se déplacer en Mayenne avec des enfants sans voiture: bus, TAD et TER | vie-pratique | Mayenne, Pays de la Loire
- /articles/voyages/belle-ile-en-mer-en-famille-sans-voiture-ferry-et-deplacements/ | Belle-Île-en-Mer en famille sans voiture: ferry et déplacements | voyages | Le Palais, Morbihan, Bretagne
- /articles/evenements/semaine-du-golfe-2027-en-famille-ou-voir-les-bateaux/ | Semaine du Golfe 2027 en famille: où voir les bateaux ? | evenements | Morbihan, Bretagne
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne
- /articles/sorties/cite-de-la-voile-eric-tabarly-en-famille-quel-parcours-selon-l-age/ | Cité de la Voile Éric Tabarly en famille: quel parcours selon l'âge? | sorties | Lorient, Morbihan, Bretagne
- /articles/bons-plans/les-terres-de-natae-les-reductions-famille-a-connaitre-avant-de-reserver/ | Les Terres de Nataé: les réductions famille à connaître avant de réserver | bons-plans | Pont-Scorff, Morbihan, Bretagne
- /articles/parentalite/mode-de-garde-a-vannes-quand-contacter-le-relais-petite-enfance/ | Mode de garde à Vannes: quand contacter le Relais Petite Enfance ? | parentalite | Vannes, Morbihan, Bretagne
- /articles/cuisine/gouter-breton-aux-halles-des-lices-a-vannes-quoi-acheter-et-quand-venir/ | Goûter breton aux Halles des Lices à Vannes: quoi acheter et quand venir? | cuisine | Vannes, Morbihan, Bretagne
- /articles/maison/fsl-dans-le-morbihan-jusqu-a-1-200-pour-entrer-dans-un-logement/ | FSL dans le Morbihan: jusqu'à 1 200 € pour entrer dans un logement | maison | Vannes, Morbihan, Bretagne
- /articles/evenements/festival-interceltique-lorient-2026-en-famille/ | Festival Interceltique de Lorient 2026: quels rendez-vous choisir avec des enfants ? | evenements | Lorient, Morbihan, Bretagne
- /articles/sorties/festival-photo-la-gacilly-2026-en-famille/ | Festival Photo La Gacilly 2026: un parcours gratuit à hauteur d’enfant | sorties | La Gacilly, Morbihan, Bretagne
- /articles/voyages/refuge-de-l-arche-en-famille-decouvrir-les-animaux-recueillis-et-preparer-sa-visite/ | Refuge de l’Arche en famille: découvrir les animaux recueillis et préparer sa visite | voyages | Château-Gontier-sur-Mayenne, Mayenne, Pays de la Loire
- /articles/voyages/la-vallee-des-saints-a-carnoet-visiter-les-geants-de-granit-en-famille/ | La Vallée des Saints à Carnoët: visiter les géants de granit en famille | voyages | Carnoët, Côtes-d'Armor, Bretagne
- /articles/voyages/week-end-dans-l-auxois-en-famille-chateau-de-bussy-rabutin-et-semur-en-auxois/ | Week-end dans l'Auxois en famille: château de Bussy-Rabutin et Semur-en-Auxois | voyages | Côte-d'Or, Bourgogne-Franche-Comté
- /articles/voyages/musee-du-jouet-de-poissy-en-famille-visite-tarifs-et-exposition-sur-le-precinema/ | Musée du Jouet de Poissy en famille: visite, tarifs et exposition sur le précinéma | voyages | Poissy, Yvelines, Île-de-France

### Historique Radar lié

- Aucun historique lié.

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
