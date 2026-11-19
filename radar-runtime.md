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
title: "Féeries de Noël 2026 à Paris: parcours lumineux, billets et patinoire en famille"
subtitle: "Au parc André-Citroën du 4 décembre au 2 janvier: durée, accès, poussettes et réservations"
summary: "Les Féeries de Noël 2026 annoncent un parcours nocturne de 1,3 km au parc André-Citroën. Dates, durée, accessibilité, billets encore non confirmés et patinoire séparée: les informations utiles aux familles."
category: evenements
location:
  city: Paris
  department: Paris
  region: Île-de-France
image:
  src: /images/articles/2026/10/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille.webp
  alt: Vue du parc André-Citroën à Paris en journée, hors parcours lumineux de Noël
sources:
  - title: "Les Féeries de Noël: annonce officielle 2026, programme, dates, accès et FAQ"
    url: https://leparcenchante.fr/
  - title: "Patins en Folie: site officiel affichant encore l'édition 2025 et la fermeture"
    url: https://patinsenfolie.com/
  - title: "Fever: Le Parc de l'Étrange 2026, fiche Halloween actuellement liée au bouton de réservation"
    url: https://feverup.com/m/769806
  - title: "Fever: Patins en Folie, billetterie actuellement indisponible"
    url: https://feverup.com/m/497312
eventEndsAt: 2027-01-02
topic:
  key: evenements|paris|les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille|2026
  keywords:
    - Féeries de Noël Paris 2026
    - parc André Citroën Noël enfants
    - Parc Enchanté Paris billets 2026
    - Patins en Folie Paris 2026
    - Féeries de Noël poussette
slug: les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille
status: published
publishedAt: 2026-10-27T13:28:21.002Z
updatedAt: null
readingTime: 5
affiliate:
  enabled: true
  type: travel
  destination: Paris
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/index.md
  targetSha: e02b232b6c747806a2322971e8305b24598e0a02
  targetUrl: /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/
  decision: Permettre aux familles de choisir une promenade lumineuse, une séance de patinage ou les deux, avec les dates, horaires, tarifs et accès réellement annoncés pour 2026-2027, sans acheter le mauvais billet.
  affiliationPotential: Conserver l'hébergement Booking.com existant pour les familles en séjour; billetteries des deux activités annoncées chez Fever, sans partenaire billets confirmé.
  gsc:
    retrievedAt: 2026-11-19T01:30:40+01:00
    dataThrough: 2026-11-16
    signal: uncertain
    basis: "Visibilité récente : 91 impressions sur trois jours, puis 30 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-11
    peakEnd: 2026-11-13
    recentStart: 2026-11-14
    recentEnd: 2026-11-16
    peakImpressions: 91
    recentImpressions: 30
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - les feeries de noel parc andre citroen
---

## Mission retenue
Actualiser les Féeries de Noël 2026 au parc André-Citroën et la patinoire Patins en Folie, deux expériences distinctes.

## Pourquoi cette mission
Le snapshot GSC signale une baisse récente de 91 à 30 impressions sur deux périodes de trois jours, sans cause démontrée. Lacune éditoriale indépendante vérifiée: l'article du 27 octobre affirme que Patins en Folie affiche encore l'édition 2025 et qu'aucun tarif 2026 n'est disponible, alors que son site officiel publie désormais la saison 2026, les horaires, les prix et les conditions pratiques.

## Décision du lecteur
Comparer le parcours lumineux et la patinoire, savoir quand venir avec des enfants, prévoir le budget et réserver chaque activité séparément sans confusion.

## Faits à traiter
- Patins en Folie: ouverture annoncée le 21 novembre 2026, horaires selon les jours et vacances, 600 m² de glace, location des patins comprise, gants obligatoires, patinettes pour petites pointures. Vérifier le calendrier de vente.
- Tarifs patinoire affichés selon séance et âge: avant 16 h 30, enfant moins de 8 ans 10 €, junior 12 €, adulte 13 €; après 16 h 30, respectivement 12 €, 13 € et 17 €. Le « pack famille » affiché à 11 € ou 14 € est ambigu (prix par personne ou total): ne pas calculer de budget pack sans confirmation. Vérifier les conditions de gratuité des moins de 3 ans et les limites d'âge.
- Féeries de Noël: 4 décembre 2026 au 2 janvier 2027, 16 tableaux désormais décrits par le site de la patinoire; vérifier les horaires divergents entre les deux organisateurs (17 h 45-21 h 30 contre 18 h-22 h), le tarif et la vraie fiche de réservation avant toute affirmation.
- Distinguer les entrées et billets des deux activités; ne pas présenter la billetterie Halloween comme Noël.
- Préserver les conseils poussettes, bruit, météo, transports, les deux photographies et leurs crédits, les liens internes et l'hébergement Booking.com existant.

## Sources de départ
- https://patinsenfolie.com/ (édition 2026, tarifs, horaires, patins et FAQ)
- https://leparcenchante.fr/ (Féeries de Noël, dates, parcours, accessibilité et FAQ)

## Affiliation
Hébergement Booking.com déjà intégré, à conserver. Les billets sont indiqués chez Fever, sans offre partenaire vérifiée.

## Continuations internes
- Garder le guide transports parisiens pour les titres de transport.
- Conserver le renvoi vers l'Odyssée Lumineuse au Parc Floral comme alternative, sans redévelopper son programme.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/index.md

---
title: "Féeries de Noël 2026 à Paris: parcours lumineux, billets et patinoire en famille"
subtitle: "Au parc André-Citroën du 4 décembre au 2 janvier: durée, accès, poussettes et réservations"
summary: "Les Féeries de Noël 2026 annoncent un parcours nocturne de 1,3 km au parc André-Citroën. Dates, durée, accessibilité, billets encore non confirmés et patinoire séparée: les informations utiles aux familles."
category: evenements
location:
  city: Paris
  department: Paris
  region: Île-de-France
image:
  src: "/images/articles/2026/10/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille.webp"
  alt: "Vue du parc André-Citroën à Paris en journée, hors parcours lumineux de Noël"
sources:
  - title: "Les Féeries de Noël: annonce officielle 2026, programme, dates, accès et FAQ"
    url: https://leparcenchante.fr/
  - title: "Patins en Folie: site officiel affichant encore l'édition 2025 et la fermeture"
    url: https://patinsenfolie.com/
  - title: "Fever: Le Parc de l'Étrange 2026, fiche Halloween actuellement liée au bouton de réservation"
    url: https://feverup.com/m/769806
  - title: "Fever: Patins en Folie, billetterie actuellement indisponible"
    url: https://feverup.com/m/497312
eventEndsAt: 2027-01-02
topic:
  key: evenements|paris|les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille|2026
  keywords:
    - Féeries de Noël Paris 2026
    - parc André Citroën Noël enfants
    - Parc Enchanté Paris billets 2026
    - Patins en Folie Paris 2026
    - Féeries de Noël poussette
slug: les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille
status: published
publishedAt: 2026-10-27T13:28:21.002Z
updatedAt: null
readingTime: 5
affiliate:
  enabled: true
  type: travel
  destination: Paris
---
<!-- article-image-credit -->
*Photo: [Guilhem Vellut from Paris, France](https://commons.wikimedia.org/wiki/File:Parc_Andr%C3%A9_Citro%C3%ABn_@_Paris_(28133119066).jpg) - [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Les **Féeries de Noël** sont annoncées au parc André-Citroën, dans le 15e arrondissement de Paris, **du 4 décembre 2026 au 2 janvier 2027**. Sous ce nouveau nom, l'ancien Parc Enchanté propose une promenade-spectacle nocturne parmi des décors lumineux, des comédiens et des personnages de Noël. Le parcours dure environ une heure, mais peut demander davantage de temps avec de jeunes enfants. La patinoire **Patins en Folie** est une activité séparée, avec son propre billet.

**Attention à la réservation: au 27 octobre 2026, le bouton de billetterie de l'organisateur renvoie encore vers « Le Parc de l'Étrange 2026 », l'événement d'Halloween.** Ce billet ne doit pas être confondu avec celui des Féeries de Noël.

## Que voit-on et combien de temps prévoir ?

L'organisateur annonce un parcours extérieur de **1,3 km**, estimé à **environ une heure**. L'histoire traverse un Pôle Nord imaginaire, avec créatures fantastiques, installations lumineuses, effets spéciaux et rencontres avec les personnages, dont le Père Noël. Tous les âges sont admis.

Le parcours est accessible aux **poussettes et fauteuils roulants**, mais l'organisateur précise que certains passages, notamment en pente, peuvent être difficiles. Une poussette n'assure donc pas une promenade sans effort. Pour les enfants qui marchent lentement ou ont besoin de pauses, prévoyez plus d'une heure et des chaussures adaptées: le terrain peut être boueux.

Le spectacle se déroule **de nuit et entièrement dehors**. La FAQ décrit une sonorisation immersive et des effets pyrotechniques: mieux vaut en tenir compte pour les enfants sensibles au bruit. Elle mentionne également des feux d'artifice à **19 h 30 et 21 h**, mais comporte encore des passages d'anciennes éditions. **Ces horaires ne sont pas confirmés spécifiquement pour Noël 2026** et les effets peuvent être modifiés selon la météo.

## Quelles soirées sont ouvertes ?

Les horaires annoncés sont **18 h à 22 h**, du 4 décembre au 2 janvier, avec fermeture **les lundis et mardis hors vacances scolaires**, ainsi que **les 24, 25 et 31 décembre**. Les jours théoriquement ouverts ne garantissent pas la mise en vente de tous les créneaux.

La dernière entrée est annoncée **30 minutes après le dernier créneau mis en vente**, et non automatiquement à 21 h 30. Pour de jeunes enfants, le premier créneau disponible laisse davantage de temps avant la fermeture et le coucher. Le calendrier précis devra être vérifié lors de l'ouverture de la billetterie de Noël.

## Billet daté ou formule liberté: peut-on déjà réserver ?

La FAQ de l'organisateur présente deux types de billets:

- **Billet daté**: une date et un créneau précis, avec des conditions de modification restrictives.
- **Option liberté**: accès sans réserver préalablement une date et un créneau, selon les conditions de cette formule.

**Ni les prix ni la présence effective de ces deux formules pour Noël 2026 n'ont pu être confirmés.** La FAQ contient des informations héritées d'autres éditions. Surtout, le bouton « Je réserve mes billets » mène actuellement à la fiche Fever du **Parc de l'Étrange 2026**, consacrée à Halloween, et non à une billetterie des Féeries de Noël.

Avant tout paiement, assurez-vous que la fiche indique expressément **« Féeries de Noël » et une date de décembre 2026 ou janvier 2027**. Vérifiez le prix adulte et enfant, les éventuelles réductions, les frais, l'horaire d'entrée et les conditions d'échange ou de remboursement. Aucun budget familial fiable ne peut encore être calculé à partir d'une offre de Noël confirmée.

## Patins en Folie: une seconde réservation

La patinoire **Patins en Folie** est présentée par l'organisateur comme une installation extérieure de **600 m² de glace véritable** dans le même parc. Elle est **indépendante du parcours lumineux**: le billet des Féeries de Noël ne donne pas accès à la glace. Un tarif combiné préférentiel est évoqué, mais son application et son montant pour l'hiver 2026-2027 restent à confirmer.

Au 27 octobre, le site propre à Patins en Folie affiche encore une ouverture datant de **novembre 2025** et indique que l'expérience est fermée. Sa fiche Fever ne propose **aucun billet actuellement**. Les horaires, tarifs, âges et règles concernant les patins ou les gants de l'édition précédente ne constituent donc pas des garanties pour 2026-2027.

Si les réservations ouvrent, il faudra choisir une séance de patinage séparée et prévoir du temps entre les deux activités. Il est aussi possible de ne faire que la promenade, sans patinoire.

## Où se trouve l'entrée et comment venir ?

<!-- article-image-body:01 -->

![Panneau indiquant le parc André-Citroën à la station Balard du métro parisien](/images/articles/2026/10/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille-body-01.webp)

*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Panneau_Parc_Andr%C3%A9_Citro%C3%ABn_Station_Balard_M%C3%A9tro_Paris_-_Paris_XV_(FR75)_-_2026-02-06_-_1.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Pour les Féeries de Noël, l'entrée annoncée est la **grille à l'angle de la rue Balard et de la rue de la Montagne de l'Espérou**, près du **56 rue Balard, Paris 15e**. La sortie est prévue **rue de la Montagne de la Fage**. Une ancienne réponse de la FAQ évoque un autre accès: suivez la rubrique pratique principale et, une fois les billets disponibles, les indications de l'édition réservée.

Les transports indiqués par l'organisateur comprennent le **métro 8 (Balard)**, le **métro 10 (Javel-André Citroën)**, le **RER C (Javel)** et le **tram T3a (Pont du Garigliano)**. Il n'y a pas de parking réservé à l'événement; les places alentour sont limitées. Pour comparer les titres selon l'âge des enfants et le nombre de trajets, notre [guide des transports à Paris en famille](/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/) détaille les options.

Des **chalets de restauration sucrée et salée** sont annoncés, sans carte ni prix garantis pour votre soirée. La FAQ indique **l'absence de vestiaire et de consigne**: évitez les bagages. Les animaux ne sont pas admis. Le spectacle peut se tenir sous la pluie, mais un orage ou des vents violents peuvent entraîner une fermeture de sécurité; vérifiez les annonces avant le départ.

## Si vous restez dormir à Paris

Pour les familles qui prolongent la sortie en séjour, l'[Aparthotel Adagio Paris Centre Tour Eiffel sur Booking.com](https://www.booking.com/hotel/fr/pierre-vacacnces-city-paris-tour-eiffel.fr.html) propose notamment des appartements d'une chambre avec canapé-lit, dont certaines catégories peuvent accueillir quatre personnes. Vérifiez la capacité exacte selon l'âge des enfants, les couchages, le trajet jusqu'à l'entrée du spectacle et le prix total: **aucune disponibilité pour décembre 2026 n'est garantie**.

Pour une autre promenade lumineuse, l'[Odyssée Lumineuse au Parc Floral](/articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/) a son propre programme, ses dates et sa billetterie à Vincennes.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/atelier-laine-cardee-de-noel-a-paris-le-2-decembre-2026-creer-ses-decorations-des-7-ans/ | Atelier laine cardée de Noël à Paris le 2 décembre 2026: décorations dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/jeux-nature-gratuits-au-parc-floral-de-paris-le-18-novembre-2026-quel-jeu-selon-l-age/ | Jeux nature gratuits au Parc floral de Paris le 18 novembre 2026 | activites | Paris, Paris, Île-de-France
- /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | Odyssée Lumineuse 2026-2027 à Paris: billets, dates et visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | Bricolages de Noël gratuits à Paris le 19 décembre 2026: un atelier dès 4 ans | activites | Paris, Paris, Île-de-France
- /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/ | Paris avec une poussette: métro, RER, bus ou tram, que choisir ? | voyages | Paris, Paris, Île-de-France
- /articles/activites/atelier-deco-de-noel-gratuit-a-paris-le-28-novembre-2026-creer-en-recup-art-des-8-ans/ | Atelier déco de Noël gratuit à Paris le 28 novembre 2026: bricolage dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/spectacle-de-noel-gratuit-a-paris-le-5-decembre-2026-p-tit-loup-et-la-magie-en-famille/ | Spectacle de Noël gratuit à Paris le 5 décembre 2026: Mon p'tit loup magique | evenements | Paris, Paris, Île-de-France
- /articles/activites/atelier-des-lumieres-avec-un-enfant-quel-programme-choisir-et-peut-on-venir-avec-une-poussette/ | Atelier des Lumières avec un enfant: quel programme choisir et peut-on venir avec une poussette ? | activites | Paris, Paris, Île-de-France
- /articles/vie-pratique/changer-de-gare-a-paris-avec-des-enfants-preparer-sa-correspondance/ | Changer de gare à Paris avec des enfants: préparer sa correspondance | vie-pratique | Paris, Paris, Île-de-France
- /articles/parentalite/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes/ | Maisons des 1000 premiers jours à Paris: deux adresses pour les parents et les bébés | parentalite | Paris, Paris, Île-de-France
- /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | Atelier bâton de pluie gratuit à Paris le 18 novembre 2026: dès 6 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | Lecture d'hiver gratuite à Paris le 12 décembre 2026: deux séances pour les 1-3 ans | activites | Paris, Paris, Île-de-France
- /articles/sorties/soiree-jeux-gratuite-a-paris-le-21-novembre-2026-jeux-video-et-jeux-de-societe-en-famille/ | Soirée jeux gratuite à Paris le 21 novembre 2026: jeux vidéo et jeux de société en famille | sorties | Paris, Paris, Île-de-France
- /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | Atelier Calder à Paris le 14 novembre 2026: fabriquer un mobile dès 5 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | Contes gratuits à Paris le 14 novembre 2026: trois rendez-vous en famille | evenements | Paris, Paris, Île-de-France
- /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | Atelier Pokémon et biodiversité à Paris le 28 novembre 2026: dessin dès 10 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-omamori-gratuit-a-paris-le-21-novembre-2026-creer-une-amulette-japonaise-des-7-ans/ | Atelier omamori gratuit à Paris le 21 novembre 2026: créer une amulette dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | Atelier couture gratuit à Paris le 28 novembre 2026: dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/musee-maurice-denis-en-famille-decouvrir-les-nabis-a-saint-germain-en-laye/ | Musée Maurice Denis en famille: découvrir les Nabis à Saint-Germain-en-Laye | evenements | Saint-Germain-en-Laye, Yvelines, Île-de-France
- /articles/evenements/carnaval-de-guadeloupe-2027-preparer-une-premiere-sortie-avec-ses-enfants/ | Carnaval de Guadeloupe 2027: préparer une première sortie avec ses enfants | evenements | Guadeloupe
- /articles/evenements/niepce-et-apres-une-exposition-photo-a-decouvrir-en-famille-a-chalon-sur-saone/ | Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône | evenements | Chalon-sur-Saône, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-puy-du-fou-en-famille-spectacles-et-visite-en-hiver/ | Noël 2026 au Puy du Fou en famille: spectacles et visite en hiver | evenements | Les Epesses, Vendée, Pays de la Loire

### Historique Radar lié

- opportunity | /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | 2026-11-05T16:36:05.180Z
- opportunity | /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | 2026-11-05T04:36:26.347Z
- opportunity | /articles/activites/atelier-deco-de-noel-gratuit-a-paris-le-28-novembre-2026-creer-en-recup-art-des-8-ans/ | 2026-11-05T23:35:44.031Z
- opportunity | /articles/activites/atelier-laine-cardee-de-noel-a-paris-le-2-decembre-2026-creer-ses-decorations-des-7-ans/ | 2026-11-04T18:34:22.540Z
- opportunity | /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | 2026-11-06T12:30:50.449Z
- opportunity | /articles/activites/atelier-omamori-gratuit-a-paris-le-21-novembre-2026-creer-une-amulette-japonaise-des-7-ans/ | 2026-11-05T07:29:24.731Z
- opportunity | /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | 2026-11-06T03:27:40.597Z
- opportunity | /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | 2026-11-05T13:27:24.356Z
- opportunity | /articles/activites/jeux-nature-gratuits-au-parc-floral-de-paris-le-18-novembre-2026-quel-jeu-selon-l-age/ | 2026-11-04T12:35:19.125Z
- opportunity | /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | 2026-11-06T09:33:42.136Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
