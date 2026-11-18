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
title: "Noël Gaulois 2026 au Parc Astérix: billets, glissades et spectacles en famille"
subtitle: "Du 19 décembre au 3 janvier: tarifs, animations d'hiver et organisation avec des enfants"
summary: "Billets Malin, Noël ou Flex, budget pour quatre, patinoire, glissades et spectacles: les informations utiles pour préparer Noël Gaulois au Parc Astérix."
category: evenements
location:
  city: Plailly
  department: Oise
  region: Hauts-de-France
image:
  src: /images/articles/2026/10/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille.webp
  alt: Attraction du Parc Astérix photographiée en octobre 2024, hors saison de Noël
sources:
  - title: Parc Astérix - Noël Gaulois 2026, programme et billets
    url: https://www.parcasterix.fr/evenements/noel-gaulois
  - title: Parc Astérix - Tous les billets 2026, dont le Billet Futé
    url: https://www.parcasterix.fr/offres/billets
  - title: Parc Astérix - Horaires de Noël Gaulois
    url: https://www.parcasterix.fr/faq?question=quels-sont-les-horaires-d-ouverture-du-parc-a-noel-gaulois
  - title: Parc Astérix - Tarifs et parking 2026
    url: https://www.parcasterix.fr/tarifs-au-guichet
  - title: Parc Astérix - Glissade d'Obélix et accessibilité
    url: https://www.parcasterix.fr/attractions/famille/glissade-dobelix
  - title: Parc Astérix - Patinoire Viking
    url: https://www.parcasterix.fr/attractions/famille/patinoire-viking
  - title: Parc Astérix - Quel Cirque !
    url: https://www.parcasterix.fr/spectacles/quel-cirque
  - title: Parc Astérix - Chantons Noël
    url: https://www.parcasterix.fr/spectacles/chantons-noel
  - title: Parc Astérix - Qui veut la peau du Père Noël ?
    url: https://www.parcasterix.fr/spectacles/qui-veut-peau-du-pere-noel
  - title: Parc Astérix - Menhir Express fermé à Noël Gaulois
    url: https://www.parcasterix.fr/attractions/famille/menhir-express
eventEndsAt: 2027-01-03T20:00:00+01:00
topic:
  key: evenements|plailly|noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille|2026
  keywords:
    - Noël Gaulois 2026 Parc Astérix
    - billet Noël Parc Astérix 2026
    - billet Malin Liberté Flex Parc Astérix
    - Parc Astérix Noël avec enfants
slug: noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille
status: published
publishedAt: 2026-10-24T09:33:57.091Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Plailly
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/index.md
  targetSha: db689578fd93bb0129edc3e69b5c5be44378a5fb
  targetUrl: /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/
  decision: Choisir un billet et les animations de Noël réellement adaptées aux enfants, distinguer les nouveautés incluses des repas et goûters payants, puis prévoir le bon créneau pour les spectacles du soir.
  affiliationPotential: Conserver la billetterie Klook et l'hébergement Booking.com déjà présents, après vérification des conditions; comparer sans prétendre que les offres partenaires sont moins chères.
  gsc:
    retrievedAt: 2026-11-18T00:34:26+01:00
    dataThrough: 2026-11-15
    signal: uncertain
    basis: "Visibilité récente : 24 impressions sur trois jours, puis 4 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-25
    peakEnd: 2026-10-27
    recentStart: 2026-11-13
    recentEnd: 2026-11-15
    peakImpressions: 24
    recentImpressions: 4
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - noel gaulois 2026
      - et le 1er janvier
      - parc asterix decembre
---

## Mission retenue
Actualiser Noël Gaulois 2026 au Parc Astérix, du 19 décembre 2026 au 3 janvier 2027, à la lumière du communiqué officiel publié le 16 novembre.

## Pourquoi cette mission
Article marqué rapidDrop (24 puis 4 impressions sur les périodes GSC comparées), mais diagnostic SEO incertain: ne pas attribuer la baisse à un classement perdu. Une amélioration éditoriale indépendante est vérifiée: le programme officiel du 16 novembre révèle des nouveautés et options payantes absentes de l'article.

## Décision du lecteur
Comparer les billets et le budget réel d'une famille; choisir les animations de jour et du soir, sans confondre prestations comprises dans l'entrée et extras réservables.

## Faits à traiter
- Ajouter la nouveauté « Les Merveilles de Cléopâtre », mapping nocturne sur OzIris, et « L'Île aux Vœux », spectacle final de huit minutes avec effets pyrotechniques; vérifier les horaires du jour sans inventer d'heure fixe.
- Présenter le Goûter du Père Noël: 18,90 € par personne, gratuit avant 3 ans selon la fiche officielle, créneaux 16 h 30-17 h 30 et 17 h 30-18 h 30, en supplément du billet; préciser réservation et conditions. Buffet de Noël: 37,90 € adulte, 12,90 € enfant selon le communiqué, sans le confondre avec le goûter.
- Mentionner « Les Comptoirs d'Épidemaïs » et, si utile, « C'est du Délire ! »; privilégier les nouveautés importantes plutôt qu'un catalogue exhaustif.
- Conserver les comparatifs Malin/Noël/Futé/Flex et leurs réserves de disponibilité, gratuité avant 3 ans, parking, restrictions de taille, glissade, patinoire, spectacles existants, horaires 11 h-20 h (19 h les 24 et 31 décembre), accès et renvoi au guide général.
- Préserver strictement les trois photos, crédits, licences, liens internes et liens partenaires. Contrôler les formulations ambiguës du site officiel, notamment la date limite du billet Noël, avant toute affirmation.

## Sources de départ
- Communiqué officiel du 16 novembre 2026: https://newsroom.parcasterix.fr/strongnoel-gaulois-une-parenthese-chaleureuse-en-famille-strongstrongdu-19-decembre-2026-au-3-janvier-2027strong-33783/?lang=en
- Programme officiel: https://www.parcasterix.fr/evenements/noel-gaulois
- Billets: https://www.parcasterix.fr/offres/billets
- Horaires: https://www.parcasterix.fr/faq?question=quels-sont-les-horaires-d-ouverture-du-parc-a-noel-gaulois

## Affiliation
Conserver le lien Klook pour comparer la billetterie, sous réserve de validité à Noël, et le B&B HOTEL Saint-Witz sur Booking.com pour les familles venant de loin. Ne pas inventer de disponibilité ou de tarif.

## Continuations internes
- Garder le guide général Parc Astérix pour navette, tailles d'attractions et séjour de deux jours.
- Ne pas créer un second article sur les nouveautés de Noël Gaulois.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/index.md

---
title: "Noël Gaulois 2026 au Parc Astérix: billets, glissades et spectacles en famille"
subtitle: "Du 19 décembre au 3 janvier: tarifs, animations d'hiver et organisation avec des enfants"
summary: "Billets Malin, Noël ou Flex, budget pour quatre, patinoire, glissades et spectacles: les informations utiles pour préparer Noël Gaulois au Parc Astérix."
category: evenements
location:
  city: Plailly
  department: Oise
  region: Hauts-de-France
image:
  src: "/images/articles/2026/10/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille.webp"
  alt: "Attraction du Parc Astérix photographiée en octobre 2024, hors saison de Noël"
sources:
  - title: Parc Astérix - Noël Gaulois 2026, programme et billets
    url: https://www.parcasterix.fr/evenements/noel-gaulois
  - title: Parc Astérix - Tous les billets 2026, dont le Billet Futé
    url: https://www.parcasterix.fr/offres/billets
  - title: Parc Astérix - Horaires de Noël Gaulois
    url: https://www.parcasterix.fr/faq?question=quels-sont-les-horaires-d-ouverture-du-parc-a-noel-gaulois
  - title: Parc Astérix - Tarifs et parking 2026
    url: https://www.parcasterix.fr/tarifs-au-guichet
  - title: Parc Astérix - Glissade d'Obélix et accessibilité
    url: https://www.parcasterix.fr/attractions/famille/glissade-dobelix
  - title: Parc Astérix - Patinoire Viking
    url: https://www.parcasterix.fr/attractions/famille/patinoire-viking
  - title: Parc Astérix - Quel Cirque !
    url: https://www.parcasterix.fr/spectacles/quel-cirque
  - title: Parc Astérix - Chantons Noël
    url: https://www.parcasterix.fr/spectacles/chantons-noel
  - title: Parc Astérix - Qui veut la peau du Père Noël ?
    url: https://www.parcasterix.fr/spectacles/qui-veut-peau-du-pere-noel
  - title: Parc Astérix - Menhir Express fermé à Noël Gaulois
    url: https://www.parcasterix.fr/attractions/famille/menhir-express
eventEndsAt: 2027-01-03T20:00:00+01:00
topic:
  key: evenements|plailly|noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille|2026
  keywords:
    - Noël Gaulois 2026 Parc Astérix
    - billet Noël Parc Astérix 2026
    - billet Malin Liberté Flex Parc Astérix
    - Parc Astérix Noël avec enfants
slug: noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille
status: published
publishedAt: 2026-10-24T09:33:57.091Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Plailly
---

Du **19 décembre 2026 au 3 janvier 2027**, le **Parc Astérix**, à Plailly dans l'Oise, accueille Noël Gaulois: attractions, patinoire, descente en bouée, spectacles et décors illuminés. Les animations annoncées sont comprises dans le billet d'entrée, mais **le parc n'est pas un marché de Noël gratuit**.

## Quels billets et quel budget pour Noël Gaulois ?

Le meilleur tarif dépend surtout de la date choisie et de la possibilité de la changer:

- **Billet Malin: 49 €** par personne dès 3 ans. Il est daté, disponible sur certaines journées seulement et en quantité limitée, achetable jusqu'à la veille. Ni remboursement ni échange. **Sa disponibilité pendant Noël Gaulois n'est pas garantie**.
- **Billet Noël 2026: 57 €** par personne dès 3 ans. Il est **non daté**, utilisable une journée entre le 19 décembre et le 3 janvier, mais non remboursable et non échangeable. Il permet de choisir le jour de visite au sein de cette période.
- **Billet Liberté Flex: 68 €** à partir de 12 ans et **59 €** de 3 à 11 ans. Daté à l'achat, il peut être déplacé jusqu'à **une heure avant l'ouverture du parc**, uniquement si des places restent disponibles pour la nouvelle date. Un billet non utilisé après sa date est perdu.

Il existe aussi un **Billet Futé**, à partir de **56 € par adulte et 53 € par enfant de 3 à 11 ans**, à réserver au moins **sept jours à l'avance**. Le parc indique une validité jusqu'au 3 janvier 2027 selon son calendrier: comparez les dates et prix effectivement proposés, sans supposer que ce tarif d'appel s'applique à votre journée de Noël.

**L'entrée est gratuite avant 3 ans.** Pour deux adultes et deux enfants de 3 à 11 ans, comptez **196 € en Malin**, **228 € en Noël** ou **254 € en Flex** pour les entrées, si les formules sont disponibles. Le plancher du Futé serait de **218 €**, mais son prix dépend de la date. Le **parking est affiché à 20 € par voiture et par jour** dans les tarifs officiels 2026, à ajouter aux repas et autres dépenses. Les jeux d'adresse sont exclus du billet.

Pour comparer une autre billetterie, [Klook propose un billet non daté pour le Parc Astérix](https://www.klook.com/fr/activity/3305-asterix-park-entry-ticket-paris/) annoncé valable les jours d'ouverture jusqu'au 3 janvier 2027, hors nocturnes d'Halloween. Vérifiez le prix, les conditions applicables à **votre date de Noël** et la procédure d'échange du bon au guichet avant de l'acheter: cette formule n'est pas automatiquement plus avantageuse que les billets ci-dessus.

## Patinoire, glissades et spectacles: que faire avec les enfants ?

<!-- article-image-body:01 -->

![Carrousel de César au Parc Astérix photographié en mai 2024, hors saison de Noël](/images/articles/2026/10/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille-body-01.webp)

*Photo: [Bernd van Delft](https://commons.wikimedia.org/wiki/File:Le_Carrousel_de_C%C3%A9sar.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

La **Patinoire Viking** est présentée comme familiale; les **patins sont prêtés gratuitement** et le parc conseille les gants. La **Glissade d'Obélix** se descend en bouée: **1,20 m est la taille indiquée pour y accéder seul**. Le parc ne précise pas sur cette page de seuil d'accès accompagné: renseignez-vous avant de promettre la descente à un enfant plus petit. Pour les personnes en fauteuil roulant, l'accès à la glissade passe par un ascenseur, mais il faut pouvoir quitter le fauteuil, s'asseoir et se tenir aux barres de sécurité.

Les **Jardins merveilleux du Père Noël**, les rencontres avec les personnages et le **défilé gaulois de Noël** offrent des activités aux familles qui privilégient les décors et les animations plutôt que les grandes attractions. Le marché de Noël se trouve **à l'intérieur du parc payant**.

Trois spectacles permettent de varier les pauses et les ambiances:

- **Quel Cirque !**: 20 minutes d'acrobaties, **assis en intérieur**.
- **Chantons Noël**: 30 minutes de chants, **debout en intérieur**.
- **Qui veut la peau du Père Noël ?**: 25 minutes de spectacle sur glace, **assis en extérieur**.

Les horaires des représentations varient selon le jour. Toutes les attractions habituelles ne fonctionnent pas nécessairement pendant les fêtes: **Menhir Express est explicitement annoncé fermé durant Noël Gaulois**.

## Horaires et organisation de la journée

<!-- article-image-body:02 -->

![Autobus de la navette du Parc Astérix à Roissypole en septembre 2024](/images/articles/2026/10/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille-body-02.webp)

*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Bus_Navette_Parc_Ast%C3%A9rix_Roissypole_-_Tremblay-en-France_(FR93)_-_2024-09-08_-_1.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Le parc annonce une ouverture **de 11 h à 20 h**, sauf les **24 et 31 décembre, de 11 h à 19 h**. Pour profiter des illuminations, répartissez les attractions accessibles aux enfants en première partie de journée, puis les activités de Noël et les spectacles selon leurs horaires. Un spectacle intérieur peut aussi offrir une pause à l'abri du froid.

Les restrictions de taille diffèrent d'une attraction à l'autre et la météo peut modifier certaines activités. Pour le trajet, la navette, les attractions selon la taille des enfants et l'intérêt d'une ou deux journées, consultez notre guide [Parc Astérix en famille: durée, hôtel et budget](/articles/voyages/parc-asterix-en-famille-en-2026-une-ou-deux-journees-quel-hotel-et-quel-budget-prevoir/), plutôt que de reprendre ici toute l'organisation d'une visite classique.

## Passer la nuit près du parc

Si vous venez de loin, le [B&B HOTEL Saint-Witz Roissy sur Booking.com](https://www.booking.com/hotel/fr/hotel-saint-witz.html), à proximité du parc, dispose de chambres familiales. Vérifiez la capacité exacte selon l'âge des enfants, le petit déjeuner, les conditions d'annulation et le prix aux dates choisies: **aucune disponibilité pour Noël 2026 n'est garantie**. Cette réservation d'hôtel seule **n'inclut pas les billets d'entrée**.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/voyages/parc-asterix-en-famille-en-2026-une-ou-deux-journees-quel-hotel-et-quel-budget-prevoir/ | Parc Astérix en famille en 2026: une ou deux journées, quel hôtel et quel budget prévoir | voyages | Plailly, Oise, Hauts-de-France
- /articles/voyages/peur-sur-le-parc-2026-en-famille-journee-nocturne-billets-et-hebergement/ | Peur sur le Parc 2026 en famille: journée, nocturne, billets et hébergement | voyages | Plailly, Oise, Hauts-de-France
- /articles/evenements/chambly-kids-festival-2027-quatre-spectacles-pour-les-enfants-dates-et-ages/ | Chambly Kids Festival 2027: quatre spectacles pour les enfants, dates et âges | evenements | Chambly, Oise, Hauts-de-France
- /articles/evenements/noel-2026-au-puy-du-fou-en-famille-spectacles-et-visite-en-hiver/ | Noël 2026 au Puy du Fou en famille: spectacles et visite en hiver | evenements | Les Epesses, Vendée, Pays de la Loire
- /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | Halloween 2026 à la Mer de Sable: spectacles, frissons et billets en famille | evenements | Ermenonville, Oise, Hauts-de-France
- /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | Noël 2026 à Toulon en famille: marché, patinoire et horaires | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | Noël à Nice 2026 en famille: village, spectacles et crèche | evenements | Nice, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/ | Noël 2026 au château royal de Blois: décors, spectacles et tarifs en famille | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | Noël Gaulois 2026 au Parc Astérix: billets, glissades et spectacles en famille | evenements | Plailly, Oise, Hauts-de-France
- /articles/voyages/domaine-de-chaalis-en-famille-que-visiter-pendant-les-travaux/ | Domaine de Chaalis en famille: que visiter pendant les travaux ? | voyages | Fontaine-Chaalis, Oise, Hauts-de-France
- /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | Noël de Casse-Noisette 2026 à Pierrefonds: visites, dates et tarifs en famille | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | Noël 2026 à Chantilly: Le Noël oublié, billets et séances en famille | evenements | Chantilly, Oise, Hauts-de-France
- /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | Rétro Game Festival 2026 à Beauvais: programme, billets famille et animations enfants | evenements | Beauvais, Oise, Hauts-de-France
- /articles/sorties/chateau-de-compiegne-en-famille-que-visiter-et-comment-organiser-la-journee/ | Château de Compiègne en famille: que visiter et comment organiser la journée? | sorties | Compiègne, Oise, Hauts-de-France
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/bons-plans/pass-sports-citoyen-dans-l-oise-15-a-cumuler-avec-le-pass-sport-en-2026/ | Pass Sports Citoyen dans l'Oise: 15 € à cumuler avec le pass Sport en 2026 | bons-plans | Beauvais, Oise, Hauts-de-France
- /articles/parentalite/ateliers-parents-malins-dans-l-oise-quels-rendez-vous-gratuits-choisir-avant-fin-2026/ | Ateliers Parents Malins dans l'Oise: quels rendez-vous gratuits choisir avant fin 2026 ? | parentalite | Plusieurs communes, Oise, Hauts-de-France
- /articles/evenements/carnaval-de-guadeloupe-2027-preparer-une-premiere-sortie-avec-ses-enfants/ | Carnaval de Guadeloupe 2027: préparer une première sortie avec ses enfants | evenements | Guadeloupe
- /articles/evenements/niepce-et-apres-une-exposition-photo-a-decouvrir-en-famille-a-chalon-sur-saone/ | Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône | evenements | Chalon-sur-Saône, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | 2026-10-18T12:12:00.071Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- opportunity | /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | 2026-10-31T10:28:17.432Z
- refresh | /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | 2026-11-16T04:35:04.037Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | 2026-10-26T21:31:06.119Z
- refresh | /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | 2026-11-12T18:32:15.897Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/ | 2026-10-27T22:28:21.356Z
- opportunity | /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | 2026-10-25T04:31:33.540Z
- opportunity | /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | 2026-10-27T07:35:50.437Z
- refresh | /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | 2026-11-16T12:48:08.556Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
