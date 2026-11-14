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
title: "Festival MARMOE 2026 à Montreuil: spectacles, ateliers et tarifs en famille"
subtitle: "Du 4 au 29 novembre: sorties gratuites, activités sur réservation et billets payants selon l'âge"
summary: MARMOE 2026 anime Montreuil du 4 au 29 novembre. Voici les séances à choisir avec des enfants les 4, 7, 8, 22 et 25 novembre, leurs âges, horaires, tarifs et conditions de réservation.
category: evenements
location:
  city: Montreuil
  department: Seine-Saint-Denis
  region: Île-de-France
image:
  src: /images/articles/2026/10/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants.webp
  alt: Façade de l'hôtel de ville de Montreuil en Seine-Saint-Denis, l'un des lieux accueillant le festival MARMOE.
sources:
  - title: Ville de Montreuil - Festival MARMOE 2026
    url: https://www.montreuil.fr/marmoe2026
  - title: Ville de Montreuil - Programme officiel MARMOE 2026 (60 pages)
    url: https://www.montreuil.fr/sites/default/files/medias/document/2026/10/programme_marmoe_2026.pdf
  - title: Ville de Montreuil - Toc-Toc et l'environnement, 8 novembre
    url: https://www.montreuil.fr/agenda/toc-toc-et-lenvironnement-clown-spectacle-jeunesse
  - title: Théâtre public de Montreuil - Tout pour les MARMOE(s), 4 au 8 novembre
    url: https://theatrepublicmontreuil.com/programme/saison-26-27/tout-pour-les-marmoe-s-2026
eventEndsAt: 2026-11-29
reviewAt: 2026-11-02
topic:
  key: evenements|montreuil|festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants|2026
  keywords:
    - festival MARMOE Montreuil 2026
    - programme MARMOE 2026 enfants
    - spectacles enfants Montreuil novembre 2026
    - ateliers gratuits MARMOE
slug: festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants
status: published
publishedAt: 2026-10-25T23:35:17.753Z
updatedAt: null
readingTime: 5
affiliate:
  enabled: true
  type: travel
  destination: Montreuil
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/index.md
  targetSha: 2dfc34f42c08db650e939bff2606f5bac4efef7e
  targetUrl: /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/
  decision: Choisir une sortie MARMOE encore accessible entre le 14 et le 29 novembre selon l'âge, le prix et la réservation, sans confondre les rendez-vous déjà passés.
  affiliationPotential: Conserver l'hébergement Booking.com existant pour un séjour; aucune nouvelle offre de spectacle partenaire vérifiée.
  gsc:
    retrievedAt: 2026-11-14T03:26:00+01:00
    dataThrough: 2026-11-10
    signal: uncertain
    basis: "Visibilité récente : 110 impressions sur trois jours, puis 2 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-28
    peakEnd: 2026-10-30
    recentStart: 2026-11-08
    recentEnd: 2026-11-10
    peakImpressions: 110
    recentImpressions: 2
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - marmoe montreuil
      - marmoe montreuil 2026
      - marmoe
      - festival marmoe 2026
      - festival marmoe
---

## Mission retenue
Actualiser le guide du festival MARMOE 2026 à Montreuil, qui se poursuit jusqu'au 29 novembre.

## Pourquoi cette mission
Le snapshot GSC montre 110 puis 2 impressions sur deux fenêtres de trois jours, sans cause SEO établie. Lacune éditoriale indépendante: au 14 novembre, une grande partie du guide met en avant les 4, 7 et 8 novembre, désormais passés, tandis que les ateliers Momomomo des 14 et 21 novembre, encore utiles, n'y figurent pas.

## Décision du lecteur
Permettre aux parents de sélectionner une activité à venir, gratuite ou payante, avec un âge adapté et des conditions de réservation claires.

## Faits à traiter
- Vérifier dans le programme municipal l'exposition participative Momomomo au Centre Tignous du 12 au 28 novembre et ses ateliers parents-enfants les 14 et 21 novembre, 14 h 30 à 17 h 30; confirmer inscription et âge avant de les présenter comme accessibles.
- Garder visibles les choix du 22 novembre (Pierre et le Loup gratuit, boum des Loupiotes payante), du 25 novembre (Livre des songes) et rechercher les propositions restantes jusqu'au 29.
- Réorganiser la lecture pour distinguer les séances passées des sorties encore possibles, sans inventer de disponibilité ni supprimer les informations toujours utiles.
- Préserver tarifs exacts, contraintes de réservation, trajets, photos et crédits/licences, liens internes et hébergement Booking.com.

## Sources de départ
- Ville de Montreuil, programme officiel: https://www.montreuil.fr/marmoe2026
- Programme PDF municipal: https://www.montreuil.fr/sites/default/files/medias/document/2026/10/programme_marmoe_2026.pdf
- Journal municipal, sélection datée du 5 novembre: https://www.lemontreuillois.fr/articles/marmoe-40-rendez-vous-hauteur-denfant
- Ville de Montreuil, boum des Loupiotes: https://www.montreuil.fr/agenda/boum-familiale-des-loupiotes

## Affiliation
Conserver l'offre d'hébergement Booking.com déjà présente, sans la présenter comme nécessaire pour une sortie locale.

## Continuations internes
- Garder le Salon du livre jeunesse de Montreuil comme article distinct, relié par le maillage existant.
- Ne pas redévelopper le guide général des transports parisiens déjà lié.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/index.md

---
title: "Festival MARMOE 2026 à Montreuil: spectacles, ateliers et tarifs en famille"
subtitle: "Du 4 au 29 novembre: sorties gratuites, activités sur réservation et billets payants selon l'âge"
summary: MARMOE 2026 anime Montreuil du 4 au 29 novembre. Voici les séances à choisir avec des enfants les 4, 7, 8, 22 et 25 novembre, leurs âges, horaires, tarifs et conditions de réservation.
category: evenements
location:
  city: Montreuil
  department: Seine-Saint-Denis
  region: Île-de-France
image:
  src: "/images/articles/2026/10/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants.webp"
  alt: "Façade de l'hôtel de ville de Montreuil en Seine-Saint-Denis, l'un des lieux accueillant le festival MARMOE."
sources:
  - title: Ville de Montreuil - Festival MARMOE 2026
    url: https://www.montreuil.fr/marmoe2026
  - title: Ville de Montreuil - Programme officiel MARMOE 2026 (60 pages)
    url: https://www.montreuil.fr/sites/default/files/medias/document/2026/10/programme_marmoe_2026.pdf
  - title: Ville de Montreuil - Toc-Toc et l'environnement, 8 novembre
    url: https://www.montreuil.fr/agenda/toc-toc-et-lenvironnement-clown-spectacle-jeunesse
  - title: Théâtre public de Montreuil - Tout pour les MARMOE(s), 4 au 8 novembre
    url: https://theatrepublicmontreuil.com/programme/saison-26-27/tout-pour-les-marmoe-s-2026
eventEndsAt: 2026-11-29
reviewAt: 2026-11-02
topic:
  key: evenements|montreuil|festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants|2026
  keywords:
    - festival MARMOE Montreuil 2026
    - programme MARMOE 2026 enfants
    - spectacles enfants Montreuil novembre 2026
    - ateliers gratuits MARMOE
slug: festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants
status: published
publishedAt: 2026-10-25T23:35:17.753Z
updatedAt: null
readingTime: 5
affiliate:
  enabled: true
  type: travel
  destination: Montreuil
---
<!-- article-image-credit -->
*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:H%C3%B4tel_ville_Montreuil_Seine_St_Denis_15.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Du **4 au 29 novembre 2026**, le festival MARMOE (Mois des Arts à Montreuil pour l'Enfance) réunit spectacles, musique, cinéma et ateliers dans plusieurs lieux de Montreuil. Il n'existe **ni billet unique ni tarif commun**: certaines propositions sont gratuites et en accès libre, d'autres gratuites sur réservation, d'autres payantes. Voici des rendez-vous concrets pour choisir selon l'âge des enfants et le budget.

## Mercredi 4 novembre: atelier créatif ou hip-hop gratuit

**Jardins fantastiques**, à La Locale, accueille les enfants **dès 3 ans** pour fabriquer un paysage imaginaire avec des ombres et des transparences. Deux séances de **1 h 30** sont prévues à **10 h 30 et 14 h**. L'atelier est **gratuit sur réservation par courriel** à associationlescousines@gmail.com.

**La Relève**, au Café La Pêche, s'adresse aux **6 ans et plus**. Ce spectacle de hip-hop sur l'amitié et l'écologie dure **50 minutes**, avec deux représentations à **14 h et 15 h 30**. L'entrée est **gratuite et libre**. La séance de 14 h ne peut pas être combinée avec l'atelier Jardins fantastiques de 14 h.

## Les 7 et 8 novembre: animations gratuites, cinéma et spectacle payants

<!-- article-image-body:01 -->

![Façade du cinéma Le Méliès à Montreuil, photographiée en 2018.](/images/articles/2026/10/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants-body-01.webp)

*Photo: [Ville de Montreuil](https://commons.wikimedia.org/wiki/File:Dsc06451_copie_0.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Au Théâtre public de Montreuil, le week-end **Tout pour les MARMOE(s)** rassemble notamment lectures, jeux et animations. Un **château gonflable gratuit, de 5 à 10 ans**, est annoncé le samedi 7 de **10 h à 17 h** et le dimanche 8 de **12 h à 16 h**. Une **boum des familles gratuite** est également prévue le **samedi 7 de 17 h 30 à 20 h 30**: ce n'est pas la boum payante des Loupiotes du 22 novembre.

Deux propositions demandent un budget:

- **Fabrique ta machine à dessiner**: atelier parent-enfant **dès 5 ans**, samedi 7 et dimanche 8 de **13 h 30 à 15 h 30**. Tarif de **5 € par participant, enfant ou parent**, sur réservation auprès du théâtre.
- **Petits contes sous l'océan**: courts métrages au cinéma Le Méliès pour les **3-5 ans**, samedi à **11 h et 16 h**, dimanche à **16 h**. Tarif de **4 € par billet**, réservation auprès du cinéma.

Pour les enfants **dès 8 ans**, **Olalaland** propose un spectacle visuel et musical d'**une heure** au Théâtre public de Montreuil, avec dessins projetés et univers fantaisiste. Les séances du festival sont le **mercredi 4 à 15 h**, le **samedi 7 à 11 h et 16 h** et le **dimanche 8 à 16 h**. Les tarifs vont de **9 à 27 €** selon la catégorie; le théâtre affiche **12 € pour les moins de 18 ans**. Réservation auprès du théâtre.

Autre possibilité le **dimanche 8 à 11 h**: **Toc-Toc et l'environnement**, chez Comme Vous Émoi. Ce spectacle participatif de **45 minutes**, **dès 3 ans**, aborde la nature et le recyclage. Il est **gratuit, mais la réservation est obligatoire** auprès de Comme Vous Émoi. Renseignements au **09 50 77 67 89**.

## Dimanche 22 novembre: un conte musical gratuit ou une boum payante

<!-- article-image-body:02 -->

![Salle de La Marbrerie à Montreuil pendant le Carnival Rital de février 2025, hors festival MARMOE.](/images/articles/2026/10/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants-body-02.webp)

*Photo: [Danilo Samà · www.danilosama.ph](https://commons.wikimedia.org/wiki/File:Carnival_Rital,_La_Marbrerie,_Montreuil,_France_(08-02-2025)_%C2%B7_%C2%A9_Danilo_Sam%C3%A0.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Deux propositions se chevauchent dans des lieux différents.

**Pierre et le Loup, revu et pas corrigé !** commence à **16 h** dans la salle des fêtes de l'Hôtel de ville. Corinne Masiero raconte le conte avec l'Ensemble Dénote. Durée: **50 minutes**, **dès 4 ans**. L'entrée est **libre dans la limite des places disponibles**, avec ouverture des portes à **15 h 30**. Arriver à l'ouverture ne garantit pas une place.

La **Boum familiale des Loupiotes** débute à **15 h 30** à La Marbrerie et dure **trois heures**. Les bébés en portage sont les bienvenus. Les tarifs varient selon l'achat:

- **Prévente**: **8 € par adulte**, **4 € par enfant**, **gratuit de 0 à 18 mois**.
- **Sur place, si des places restent disponibles**: **12 € par adulte**, **6 € par enfant**, **2 € de 0 à 18 mois**.

Pour deux adultes et deux enfants de plus de 18 mois, le total est de **24 € en prévente**, contre **36 € sur place**, hors dépenses annexes. La boum convient aux familles qui souhaitent danser ensemble; Pierre et le Loup permet une sortie culturelle sans billet payant.

## Mercredi 25 novembre: un spectacle musical gratuit dès 5 ans

**Le Livre des songes** est programmé à **14 h 30** au Conservatoire Pina Bausch. Ce spectacle musical de **35 minutes** est proposé **dès 5 ans**, avec **entrée gratuite sur réservation**. D'autres activités se poursuivent jusqu'au **29 novembre**: leurs conditions figurent dans le programme municipal 2026, cité dans les sources de cet article.

## Préparer les déplacements et, si besoin, une nuit sur place

MARMOE se déroule dans des lieux distincts: La Locale, le Café La Pêche, le Théâtre public de Montreuil, Comme Vous Émoi, La Marbrerie, le Conservatoire et l'Hôtel de ville. L'adresse et les modalités de réservation dépendent de la séance; les prix indiqués sont ceux annoncés pour l'édition 2026.

Pour venir depuis Paris, notre guide [Transports à Paris avec des enfants: quel titre choisir ?](https://www.fam-space.fr/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/) aide à comparer les billets selon les trajets et l'âge des enfants.

Pour un séjour de plusieurs jours, l'[ibis Styles Paris Mairie de Montreuil sur Booking.com](https://www.booking.com/hotel/fr/ibis-styles-mairie-de-montreuil.fr.html) affiche notamment une catégorie de suite avec deux chambres communicantes. **Vérifiez la capacité réellement proposée pour votre famille**, les couchages, le prix et la disponibilité aux dates souhaitées.

Du **25 au 30 novembre**, le [Salon du livre et de la presse jeunesse de Montreuil](https://www.fam-space.fr/articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/) constitue une autre idée de sortie. Il s'agit d'un **événement distinct**, avec ses propres conditions d'entrée.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | Bédéciné 2026 à Illzach en famille: ateliers, spectacles et billets | evenements | Illzach, Haut-Rhin, Grand Est
- /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | Festival Playground 2026: spectacles de danse en famille, dates et tarifs | evenements | Bagnolet, Seine-Saint-Denis, Île-de-France
- /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | Festival Enfantillages 2026 à Valbonne: spectacles gratuits et cinéma en famille | evenements | Valbonne, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | Rétro Game Festival 2026 à Beauvais: programme, billets famille et animations enfants | evenements | Beauvais, Oise, Hauts-de-France
- /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | Au Creux de l'Oreille 2026 à Noirlac: spectacles et ateliers en famille du 17 au 22 octobre | evenements | Bruère-Allichamps, Cher, Centre-Val de Loire
- /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | bd BOUM 2026 à Blois en famille: ateliers, expositions et cinéma | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | Festival BD Colomiers 2026 en famille: programme, tarifs et accès | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | Festival MARMOE 2026 à Montreuil: spectacles, ateliers et tarifs en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/activites/musee-de-l-air-et-de-l-espace-au-bourget-quel-parcours-en-famille/ | Musée de l’Air et de l’Espace au Bourget: quel parcours en famille? | activites | Le Bourget, Seine-Saint-Denis, Île-de-France
- /articles/activites/visiter-le-stade-de-france-en-famille-coulisses-musee-et-conseils-pratiques/ | Visiter le Stade de France en famille: coulisses, musée et conseils pratiques | activites | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | Monument jeu d'enfant 2026 à Saint-Denis: atelier Dagobert le 17 octobre | evenements | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/sorties/musee-de-l-air-et-de-l-espace-a-la-toussaint-2026-quelle-activite-choisir-selon-l-age/ | Toussaint 2026 au Musée de l'Air et de l'Espace: quelle activité choisir avec un enfant? | sorties | Le Bourget, Seine-Saint-Denis, Île-de-France
- /articles/evenements/ateliers-au-jardin-de-la-pmi-a-bobigny-quelles-dates-choisir-cet-automne/ | Ateliers au jardin de la PMI à Bobigny: quelles dates choisir cet automne? | evenements | Bobigny, Seine-Saint-Denis, Île-de-France
- /articles/voyages/dormir-a-saint-denis-pour-visiter-paris-avec-des-enfants-pleyel-ou-basilique/ | Dormir à Saint-Denis pour visiter Paris avec des enfants: Pleyel ou Basilique? | voyages | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/sorties/musee-de-l-air-et-de-l-espace-du-bourget-en-famille-tarifs-avions-et-activites/ | Musée de l'Air et de l'Espace du Bourget en famille: tarifs, avions et activités | sorties | Le Bourget, Seine-Saint-Denis, Île-de-France
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/carnaval-de-guyane-2027-en-famille-preparer-ses-premieres-sorties/ | Carnaval de Guyane 2027 en famille: préparer ses premières sorties | evenements | Guyane
- /articles/evenements/mondo-clowns-2027-a-marmande-dates-tarifs-et-conseils-en-famille/ | Mondo'Clowns 2027 à Marmande: dates, tarifs et conseils en famille | evenements | Marmande, Lot-et-Garonne, Nouvelle-Aquitaine
- /articles/evenements/chambly-kids-festival-2027-quatre-spectacles-pour-les-enfants-dates-et-ages/ | Chambly Kids Festival 2027: quatre spectacles pour les enfants, dates et âges | evenements | Chambly, Oise, Hauts-de-France
- /articles/evenements/festival-tete-de-mioche-2027-a-l-horme-quels-spectacles-choisir-avec-les-enfants/ | Festival Tête de mioche 2027 à L'Horme: quels spectacles choisir avec les enfants ? | evenements | L'Horme, Loire, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | 2026-10-14T13:49:08.708Z
- opportunity | /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | 2026-10-18T19:49:09.191Z
- opportunity | /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | 2026-10-23T12:33:36.649Z
- opportunity | /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | 2026-10-29T23:28:55.064Z
- opportunity | /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | 2026-10-26T03:35:31.605Z
- opportunity | /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | 2026-10-25T23:35:17.860Z
- opportunity | /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | 2026-10-26T06:30:10.217Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | 2026-10-13T09:50:29.435Z
- opportunity | /articles/sorties/musee-de-l-air-et-de-l-espace-a-la-toussaint-2026-quelle-activite-choisir-selon-l-age/ | 2026-10-05T20:22:10.692Z
- opportunity | /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | 2026-10-26T10:34:36.317Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
