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
title: "Château de Champs-sur-Marne en famille: gratuités, tarifs et dates à éviter"
subtitle: "Parc gratuit, livret-jeu et réductions: préparer sa visite sans mauvaise surprise à l'automne et en hiver 2026"
summary: À Champs-sur-Marne, profitez du parc gratuit et des réductions au château. Découvrez les visites avec enfants et les fermetures à connaître fin 2026.
slug: chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter
status: published
publishedAt: 2026-10-18T20:18:29+02:00
updatedAt: null
category: bons-plans
readingTime: 6
location:
  city: Champs-sur-Marne
  department: Seine-et-Marne
  region: Île-de-France
topic:
  key: bons-plans|champs-sur-marne|chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter|2026
  keywords:
    - château de Champs-sur-Marne gratuit
    - Champs-sur-Marne visite en famille
    - château Champs-sur-Marne tarif Navigo
    - parc château Champs-sur-Marne gratuit
image:
  src: /images/articles/2026/10/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter.webp
  alt: Façade nord du château de Champs-sur-Marne vue depuis son parc
sources:
  - title: "Château de Champs-sur-Marne: informations pratiques, tarifs et fermetures"
    url: https://www.chateau-champs-sur-marne.fr/visiter/informations-pratiques
  - title: "Château de Champs-sur-Marne: visites en famille et livret-jeu"
    url: https://www.chateau-champs-sur-marne.fr/visiter/en-famille
  - title: "Château de Champs-sur-Marne: visites libres et activités"
    url: https://www.chateau-champs-sur-marne.fr/visiter/visites-et-activites
  - title: "Château de Champs-sur-Marne: le parc et ses jardins"
    url: https://www.chateau-champs-sur-marne.fr/decouvrir/le-parc
  - title: "Château de Champs-sur-Marne: spectacle Le Noël des Siècles 2026"
    url: https://www.chateau-champs-sur-marne.fr/agenda/le-noel-des-siecles
affiliate:
  enabled: true
  type: travel
  destination: Champs-sur-Marne
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/bons-plans/(2026)/(10)/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/index.md
  targetSha: 37b48700171635c27738f6f84cffe519b85bac5c
  targetUrl: /articles/bons-plans/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/
  decision: Savoir quels jours le château et le parc sont réellement accessibles, et quand la gratuité du premier dimanche peut être utilisée sans déplacement inutile.
  affiliationPotential: Conserver le billet Tiqets pour la visite ordinaire et l'hébergement Booking.com déjà présents; ne pas les présenter comme valables pour le spectacle.
  gsc:
    retrievedAt: 2026-11-07T02:32:02+01:00
    dataThrough: 2026-11-04
    signal: uncertain
    basis: "Visibilité récente : 79 impressions sur trois jours, puis 17 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-30
    peakEnd: 2026-11-01
    recentStart: 2026-11-02
    recentEnd: 2026-11-04
    peakImpressions: 79
    recentImpressions: 17
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0.25
    focusQueries:
      - chateau champs sur marne gratuit dimanche
      - château champs-sur-marne gratuit dimanche
---

## Mission retenue
Actualiser le guide familial du château de Champs-sur-Marne, particulièrement les fermetures de novembre 2026.

## Pourquoi cette mission
Le guide indique une fermeture complète le 8 novembre mais omet **le 9 novembre**, désormais également annoncé fermé pour le château **et** le parc sur la page officielle des informations pratiques. C'est une lacune vérifiée qui peut provoquer un déplacement inutile. Le snapshot GSC montre 79 impressions sur trois jours puis 17, sans établir la cause de la baisse.

## Décision du lecteur
Identifier précisément les jours où la promenade gratuite dans le parc et la visite payante du château sont possibles, notamment autour des premiers dimanches gratuits et du spectacle de Noël.

## Faits à traiter
Corriger « 8 novembre » en « 8 et 9 novembre » pour la fermeture complète, selon l'annonce officielle actuelle. Recontrôler les autres exceptions de novembre-décembre, les restrictions du Noël des Siècles et les conditions du premier dimanche gratuit. Préserver tarifs 9 €, 7,50 € et 6 €, gratuités enfants et ayants droit, livret-jeu, poussettes, table à langer, horaires, accès RER/bus, parking, pique-nique, images et crédits, ainsi que les liens utiles. Ne pas confondre spectacle payant et visite ordinaire.

## Sources de départ
- Centre des monuments nationaux, informations pratiques : https://www.chateau-champs-sur-marne.fr/visiter/informations-pratiques
- Centre des monuments nationaux, Noël des Siècles : https://www.chateau-champs-sur-marne.fr/agenda/le-noel-des-siecles

## Affiliation
Conserver les liens Tiqets et Booking.com existants, sans offre supplémentaire non vérifiée.

## Continuations internes
- L'article distinct sur « Le Noël des Siècles 2026 » prend le relais pour les billets et horaires détaillés du spectacle.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/bons-plans/(2026)/(10)/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/index.md

---
title: "Château de Champs-sur-Marne en famille: gratuités, tarifs et dates à éviter"
subtitle: "Parc gratuit, livret-jeu et réductions: préparer sa visite sans mauvaise surprise à l'automne et en hiver 2026"
summary: À Champs-sur-Marne, profitez du parc gratuit et des réductions au château. Découvrez les visites avec enfants et les fermetures à connaître fin 2026.
slug: chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter
status: published
publishedAt: 2026-10-18T20:18:29+02:00
updatedAt: null
category: bons-plans
readingTime: 6
location:
  city: Champs-sur-Marne
  department: Seine-et-Marne
  region: Île-de-France
topic:
  key: bons-plans|champs-sur-marne|chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter|2026
  keywords:
    - château de Champs-sur-Marne gratuit
    - Champs-sur-Marne visite en famille
    - château Champs-sur-Marne tarif Navigo
    - parc château Champs-sur-Marne gratuit
image:
  src: "/images/articles/2026/10/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter.webp"
  alt: "Façade nord du château de Champs-sur-Marne vue depuis son parc"
sources:
  - title: "Château de Champs-sur-Marne: informations pratiques, tarifs et fermetures"
    url: https://www.chateau-champs-sur-marne.fr/visiter/informations-pratiques
  - title: "Château de Champs-sur-Marne: visites en famille et livret-jeu"
    url: https://www.chateau-champs-sur-marne.fr/visiter/en-famille
  - title: "Château de Champs-sur-Marne: visites libres et activités"
    url: https://www.chateau-champs-sur-marne.fr/visiter/visites-et-activites
  - title: "Château de Champs-sur-Marne: le parc et ses jardins"
    url: https://www.chateau-champs-sur-marne.fr/decouvrir/le-parc
  - title: "Château de Champs-sur-Marne: spectacle Le Noël des Siècles 2026"
    url: https://www.chateau-champs-sur-marne.fr/agenda/le-noel-des-siecles
affiliate:
  enabled: true
  type: travel
  destination: Champs-sur-Marne
---

À **Champs-sur-Marne, en Seine-et-Marne**, on peut découvrir un château meublé du XVIIIe siècle et se promener dans un vaste parc paysager, sans nécessairement payer pour toute la sortie. Le domaine est une option intéressante près de Paris avec des enfants: l'accès au **parc est normalement gratuit**, tandis que la visite des pièces historiques est payante pour la plupart des adultes.

À l'automne et durant les fêtes de fin d'année 2026, des fermetures et un spectacle de Noël modifient toutefois l'accès ordinaire, y compris certains dimanches habituellement gratuits.

## Le parc gratuit: une vraie sortie à part entière

<!-- article-image-body:01 -->

![Jardin et bassin du parc du château de Champs-sur-Marne près de l'orangerie](/images/articles/2026/10/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter-body-01.webp)

*Photo: [Pierre Poschadel](https://commons.wikimedia.org/wiki/File:Champs-sur-Marne_(77),_ch%C3%A2teau_de_Champs,_parc,_jardin_devant_l%27orangerie_7.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Les **85 hectares** du parc associent des perspectives géométriques, des bassins et sculptures près du château, puis des allées plus naturelles, des bois et des prairies. On peut y organiser une promenade familiale sans visiter les salles intérieures.

Depuis la terrasse, l'axe du jardin à la française donne sur des parterres et des statues; plus loin, le jardin à l'anglaise offre des chemins plus sinueux. Cette alternance permet d'adapter la balade à l'envie de marcher des enfants sans devoir parcourir l'ensemble du domaine. Le Centre des monuments nationaux détaille l'histoire et les différentes parties de ces jardins.

Cette gratuité ne vaut pas lorsque le domaine est fermé ou réservé à un événement: les dates de fin 2026 sont précisées plus bas.

## Visiter le château: qui paie vraiment?

<!-- article-image-body:02 -->

![Grand salon meublé du château de Champs-sur-Marne vu vers l'ouest](/images/articles/2026/10/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter-body-02.webp)

*Photo: [Pierre Poschadel](https://commons.wikimedia.org/wiki/File:Champs-sur-Marne_(77),_ch%C3%A2teau_de_Champs,_grand_salon,_vue_vers_l%27ouest.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Le château se visite librement, à son rythme, au milieu des salons et décors d'une demeure aristocratique. L'entrée est payante pour la plupart des adultes, mais de nombreux publics bénéficient de tarifs réduits ou d'une gratuité.

- **9 €**: tarif individuel habituel pour la visite du château.
- **Gratuit pour les moins de 18 ans**: un adulte peut donc payer sans que ses enfants mineurs aient à acheter un billet plein tarif.
- **Gratuit pour les 18-25 ans** ressortissants d'un pays de l'Union européenne ou résidents réguliers non européens en France, sous conditions et sur justificatif.
- **Gratuit le premier dimanche de chaque mois de novembre à mars**, pour une visite ordinaire lorsque le monument est accessible. Les fermetures et événements exceptionnels restent prioritaires.

D'autres gratuités existent, notamment pour les demandeurs d'emploi sur présentation d'une attestation récente, certains titulaires du Pass éducation et les personnes handicapées avec leur accompagnateur selon les justificatifs prévus. Pour éviter un déplacement inutile, contrôlez le document demandé par la billetterie.

**Réductions utiles:** le tarif de **7,50 €** s'applique notamment sur présentation d'un Pass Navigo Culture valide, d'une carte Balad'pass77 valide ou d'un billet TGV INOUI de moins de cinq jours. La carte SNCF **Grand Voyageur** permet un tarif de **6 €**, sous réserve des conditions indiquées par le château. Ne confondez pas ces offres avec un billet adulte standard acheté à l'avance: toutes les réductions ne sont pas nécessairement proposées dans tous les circuits de vente. Pour un adulte qui paie l'entrée ordinaire, il est possible de [réserver un billet pour le château sur Tiqets](https://www.tiqets.com/fr/activites-attractions-champs-sur-marne-c67054/billets-pour-chateau-et-parc-de-champs-sur-marne-p986915/). Ce billet inclut l'entrée du château et l'accès au parc, **déjà gratuit** en temps normal. Les visiteurs bénéficiant d'une gratuité ou d'un tarif réduit doivent vérifier directement comment faire valoir leur droit auprès du monument avant d'acheter un billet plein tarif; cette offre ne couvre pas le spectacle de Noël.

## À l'intérieur, un livret-jeu pour les 6-12 ans

<!-- article-image-body:03 -->

![Décor et mobilier du salon chinois du château de Champs-sur-Marne](/images/articles/2026/10/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter-body-03.webp)

*Photo: [Archipathist](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Champs-sur-Marne_-_Salon_chinois.JPG) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

Le château n'est pas seulement une enfilade de salons à regarder en silence. Son décor comprend des éléments rocaille, des peintures et des chinoiseries qui peuvent retenir l'attention des enfants, à condition de leur donner quelque chose à chercher.

Le **livret-jeu « Bofang Ji »**, téléchargeable gratuitement, s'adresse aux **6-12 ans**. Un dragon présent dans le décor accompagne les jeunes visiteurs à travers les pièces. C'est un moyen de rendre une visite libre plus active, sans devoir réserver un atelier spécifique. Le document et les conseils sont disponibles sur la page « Visiter en famille » du monument.

Des visites accompagnées et animations familiales existent également à certaines périodes, mais leurs dates et modalités changent. La programmation « Visites et activités » du château permet de distinguer une entrée ordinaire d'un rendez-vous à réserver séparément.

Pour les tout-petits, attention: **les poussettes sont interdites à l'intérieur du château**. Un porte-bébé peut être emprunté à la billetterie-boutique, sur demande. Des toilettes avec table à langer sont disponibles dans le château. Le parc reste la solution la plus souple si l'on préfère ne pas organiser de visite de salles.

## Les fermetures à connaître avant de venir fin 2026

Le château et le parc sont **fermés du 12 au 23 octobre 2026 inclus**; la reprise de l'accueil ordinaire est prévue à partir du **24 octobre**, sous réserve d'une nouvelle modification.

Les autres exceptions annoncées par le monument sont importantes:

- **6 novembre:** château fermé, parc ouvert.
- **8 novembre:** château et parc fermés.
- **12 et 13 novembre:** château fermé, parc ouvert.
- **14 au 17 décembre:** château fermé, parc ouvert.

Du **20 novembre au 13 décembre 2026**, le domaine accueille aussi le spectacle payant **Le Noël des Siècles**. Les **21, 22, 28 et 29 novembre**, puis les **5, 6, 12 et 13 décembre**, l'accès est réservé aux spectateurs munis d'un billet aux heures de représentation. Les vendredis **20 et 27 novembre, 4 et 11 décembre**, le domaine ferme à **16 h**, avec dernière vente de billets pour la visite ordinaire à **15 h 30**.

**Attention au dimanche 6 décembre 2026:** bien qu'il s'agisse du premier dimanche du mois, ne comptez pas sur la gratuité habituelle du château pour entrer ce jour-là. Le spectacle possède sa propre billetterie. La page du [Noël des Siècles](https://www.chateau-champs-sur-marne.fr/agenda/le-noel-des-siecles) détaille le programme et le tarif spécifique, et les restrictions d'accès annoncées par le monument restent à prendre en compte.

## Horaires, accès et pique-nique

Hors exceptions, le château ouvre **tous les jours sauf le mardi**. Du **1er octobre au 31 mai**, les horaires annoncés sont **10 h-12 h 15** et **13 h 30-17 h**; le dernier accès au château se fait 30 minutes avant la fermeture, et le parc ferme 30 minutes après le château. Ces horaires peuvent changer pour un événement.

Le domaine se trouve **31 rue de Paris, 77420 Champs-sur-Marne**. Depuis Paris, on peut prendre le **RER A jusqu'à Noisiel**, puis marcher environ **20 minutes** (1,8 km), ou prendre le **bus 220** vers Bry-sur-Marne jusqu'à l'arrêt « Mairie », suivi d'environ **250 mètres** à pied. En voiture, un **parking visiteurs gratuit** est indiqué face au château, sans garantie de place disponible.

Le **pique-nique est permis uniquement dans les zones signalées du parc**, notamment devant l'orangerie et dans les deux prairies. Les chiens n'y sont pas autorisés, sauf chiens guides ou d'assistance. Pour préparer la sortie avec des enfants, vérifiez le matin même les horaires, fermetures et services d'accueil annoncés par le monument.

## Et si vous prolongez la sortie en Seine-et-Marne?

La visite du château ne nécessite pas de nuit sur place. Si vous prévoyez aussi d'autres activités dans l'est francilien, l'[ibis Marne La Vallée Champs-sur-Marne](https://www.booking.com/hotel/fr/ibis-marne-la-vallee.fr.html) présente notamment des catégories « Chambre double avec canapé-lit » et « Deux chambres adjacentes ». Ces intitulés ne garantissent pas que l'hébergement conviendra à votre famille: vérifiez le nombre d'adultes et d'enfants acceptés, les âges, la capacité et la disponibilité aux dates choisies.

Pour choisir d'autres visites à proximité ou organiser plusieurs journées, notre page [Seine-et-Marne en famille](https://www.fam-space.fr/destinations/ile-de-france/seine-et-marne/) rassemble les destinations et articles du département.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | Noël des Siècles 2026 à Champs-sur-Marne: billets, budget et horaires en famille | evenements | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir/ | Halloween 2026 au Château de Villersexel: parc gratuit, visites et âge minimum | evenements | Villersexel, Haute-Saône, Bourgogne-Franche-Comté
- /articles/evenements/fete-saint-louis-fontainebleau-2026-famille/ | Fête de la Saint-Louis 2026 à Fontainebleau: une journée gratuite en famille au Grand Canal | evenements | Fontainebleau, Seine-et-Marne, Île-de-France
- /articles/sorties/chateau-de-vincennes-en-famille-tarifs-parcours-et-conseils-de-visite/ | Château de Vincennes en famille: tarifs, parcours et conseils de visite | sorties | Vincennes, Val-de-Marne, Île-de-France
- /articles/voyages/chateau-de-fontainebleau-depuis-paris-en-famille-train-r-bus-3401-et-budget/ | Château de Fontainebleau depuis Paris en famille: train R, bus 3401 et budget | voyages | Fontainebleau, Seine-et-Marne, Île-de-France
- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/sorties/chateau-de-boutheon-avec-des-enfants-chateau-parc-ou-billet-couple/ | Château de Bouthéon avec des enfants: château, parc ou billet couplé? | sorties | Andrézieux-Bouthéon, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/noel-2026-au-chateau-de-grignan-dates-tarifs-et-visite-en-famille/ | Noël 2026 au château de Grignan: dates, tarifs et visite en famille | evenements | Grignan, Drôme, Auvergne-Rhône-Alpes
- /articles/bons-plans/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/ | Château de Champs-sur-Marne en famille: gratuités, tarifs et dates à éviter | bons-plans | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/sorties/musee-de-la-grande-guerre-a-meaux-avec-des-enfants-que-voir-selon-leur-age/ | Musée de la Grande Guerre à Meaux avec des enfants: que voir selon leur âge ? | sorties | Meaux, Seine-et-Marne, Île-de-France
- /articles/voyages/disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026/ | Disneyland Paris en RER A avec des enfants: trajet et tarifs 2026 | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/evenements/marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants/ | Marie-Antoinette à Fontainebleau 2026-2027: exposition, visites et tarifs en famille | evenements | Fontainebleau, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | Noël à Provins 2026: marché médiéval, animations et visites en famille | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | Grand Noël 2026 à Vaux-le-Vicomte en famille: billets, offre enfant et animations | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | Noël 2026 à Disneyland Paris: faut-il un billet 2 parcs pour voir Arendelle? | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/parentalite/laep-en-seine-et-marne-ou-aller-et-comment-se-passe-une-premiere-visite/ | LAEP en Seine-et-Marne: où aller et comment se passe une première visite? | parentalite | Meaux, Seine-et-Marne, Île-de-France
- /articles/cuisine/visiter-une-cave-d-affinage-de-brie-a-jouarre-ce-qu-il-faut-savoir-avec-des-enfants/ | Visiter une cave d'affinage de brie à Jouarre: ce qu'il faut savoir avec des enfants | cuisine | Jouarre, Seine-et-Marne, Île-de-France
- /articles/bons-plans/troyes-en-famille-a-petit-budget-musees-gratuites-et-balades-dans-le-centre/ | Troyes en famille à petit budget: musées, gratuités et balades dans le centre | bons-plans | Troyes, Aube, Grand Est
- /articles/bons-plans/abbaye-de-saint-savin-en-famille-tarifs-gratuites-et-visite-avec-les-enfants/ | Abbaye de Saint-Savin en famille: tarifs, gratuités et visite avec les enfants | bons-plans | Saint-Savin, Vienne, Nouvelle-Aquitaine
- /articles/bons-plans/albi-en-famille-a-petit-budget-deux-programmes-entre-patrimoine-et-musee/ | Albi en famille à petit budget: deux programmes entre patrimoine et musée | bons-plans | Albi, Tarn, Occitanie
- /articles/bons-plans/chamonix-en-famille-sans-voiture-train-gratuit-et-bus-a-prix-reduit-avec-la-carte-d-hote/ | Chamonix en famille sans voiture: train gratuit et bus à prix réduit avec la carte d’hôte | bons-plans | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/voyages/chateau-de-fontainebleau-depuis-paris-en-famille-train-r-bus-3401-et-budget/ | 2026-10-31T16:31:36.357Z
- opportunity | /articles/voyages/disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026/ | 2026-10-31T04:29:30.633Z
- opportunity | /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | 2026-10-20T22:29:05.422Z
- refresh | /articles/evenements/halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir/ | 2026-10-16T10:34:46.747Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- refresh | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-11-07T00:30:17.397Z
- opportunity | /articles/evenements/marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants/ | 2026-10-27T18:27:41.322Z
- opportunity | /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | 2026-10-02T21:22:46.733Z
- opportunity | /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | 2026-10-24T03:31:56.628Z
- opportunity | /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | 2026-10-26T18:32:56.730Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
