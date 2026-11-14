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
title: "Festival MARMOE 2026 à Montreuil: spectacles, ateliers et sorties jusqu'au 29 novembre"
subtitle: Dates, âges, ateliers gratuits, spectacles et réservations pour les familles
summary: "MARMOE se poursuit à Montreuil jusqu'au 29 novembre 2026. Ateliers MoMoMoMo, Pierre et le Loup, boum des Loupiotes et spectacles: dates, âges, tarifs et réservations."
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
  - title: Ville de Montreuil - Programme officiel MARMOE 2026
    url: https://www.montreuil.fr/sites/default/files/medias/document/2026/10/programme_marmoe_2026.pdf
  - title: Ville de Montreuil - Boum familiale des Loupiotes
    url: https://www.montreuil.fr/agenda/boum-familiale-des-loupiotes
  - title: Ville de Montreuil - Les Dames du Lac, 29 novembre
    url: https://www.montreuil.fr/agenda/les-dames-du-lac-chapitre-1-melora-jeune-public
  - title: Ville de Montreuil - Studio Boissière
    url: https://www.montreuil.fr/agenda/festival-marmoe-au-studio-boissiere
  - title: Théâtre public de Montreuil - Tout pour les MARMOE(s)
    url: https://theatrepublicmontreuil.com/programme/saison-26-27/tout-pour-les-marmoe-s-2026
eventEndsAt: 2026-11-29
reviewAt: 2026-11-14
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
updatedAt: 2026-11-14T05:32:38.513Z
readingTime: 6
affiliate:
  enabled: true
  type: travel
  destination: Montreuil
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/index.md
  targetSha: 43a8ab33a5c4ae66938f7db166d9e5262c5ceecb
  targetUrl: /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/
  decision: Permettre aux familles de choisir une activité encore à venir entre le 14 et le 29 novembre, selon l'âge, le lieu, le prix et la réservation, sans confondre les rendez-vous passés et futurs.
  affiliationPotential: Conserver l'hébergement ibis Styles Paris Mairie de Montreuil sur Booking.com déjà présent, sans ajout commercial artificiel.
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
Actualisation ciblée du guide MARMOE 2026 à Montreuil, festival municipal du 4 au 29 novembre.

## Pourquoi cette mission
Le snapshot GSC indique 110 impressions du 28 au 30 octobre puis 2 du 8 au 10 novembre, sans cause SEO établie. Lacune éditoriale indépendante: au 14 novembre, l'article développe surtout les rendez-vous déjà terminés des 4, 7 et 8 novembre, puis saute au 22 et au 25 novembre, alors que le programme municipal couvre tout le festival. Il faut vérifier les propositions familiales pertinentes du 14 au 21 novembre avant d'en ajouter, sans prétendre que la chute GSC est expliquée.

## Décision du lecteur
Choisir une sortie réellement accessible à la date prévue, selon l'âge des enfants, le tarif et les modalités de réservation.

## Faits à traiter
Examiner le programme officiel complet pour les dates du 14 au 21 novembre et ne retenir que les rendez-vous confirmés et utiles. Distinguer clairement les événements passés de ceux encore à venir; vérifier horaires, âges, lieux, gratuité, réservation et éventuels changements. Préserver les informations exactes des 22, 25 et 29 novembre, les transports, le budget de la boum, les liens internes, l'hébergement affilié, les trois images, licences et crédits. Éviter de rallonger inutilement l'article.

## Sources de départ
- Ville de Montreuil, festival et programme officiel 2026: https://www.montreuil.fr/marmoe2026
- Article actuel: https://www.fam-space.fr/articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/

## Affiliation
Conserver le lien Booking.com existant vers ibis Styles Paris Mairie de Montreuil si toujours pertinent.

## Continuations internes
- L'article dédié au Salon du livre et de la presse jeunesse de Montreuil doit continuer de traiter les billets et horaires de cet événement distinct.
- Conserver le lien vers le guide des transports parisiens plutôt que répéter les tarifs.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/index.md

---
title: "Festival MARMOE 2026 à Montreuil: spectacles, ateliers et sorties jusqu'au 29 novembre"
subtitle: Dates, âges, ateliers gratuits, spectacles et réservations pour les familles
summary: "MARMOE se poursuit à Montreuil jusqu'au 29 novembre 2026. Ateliers MoMoMoMo, Pierre et le Loup, boum des Loupiotes et spectacles: dates, âges, tarifs et réservations."
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
  - title: Ville de Montreuil - Programme officiel MARMOE 2026
    url: https://www.montreuil.fr/sites/default/files/medias/document/2026/10/programme_marmoe_2026.pdf
  - title: Ville de Montreuil - Boum familiale des Loupiotes
    url: https://www.montreuil.fr/agenda/boum-familiale-des-loupiotes
  - title: Ville de Montreuil - Les Dames du Lac, 29 novembre
    url: https://www.montreuil.fr/agenda/les-dames-du-lac-chapitre-1-melora-jeune-public
  - title: Ville de Montreuil - Studio Boissière
    url: https://www.montreuil.fr/agenda/festival-marmoe-au-studio-boissiere
  - title: Théâtre public de Montreuil - Tout pour les MARMOE(s)
    url: https://theatrepublicmontreuil.com/programme/saison-26-27/tout-pour-les-marmoe-s-2026
eventEndsAt: 2026-11-29
reviewAt: 2026-11-14
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
updatedAt: 2026-11-14T05:32:38.513Z
readingTime: 6
affiliate:
  enabled: true
  type: travel
  destination: Montreuil
---

<!-- article-image-credit -->
*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:H%C3%B4tel_ville_Montreuil_Seine_St_Denis_15.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Le festival **MARMOE (Mois des Arts à Montreuil pour l'Enfance)** se poursuit jusqu'au **29 novembre 2026** dans plusieurs lieux de Montreuil. Il n'existe ni billet unique ni tarif commun: selon la séance, l'entrée est libre, gratuite sur réservation ou payante. Voici les rendez-vous encore à venir, classés par date et par âge. Le [programme municipal](https://www.montreuil.fr/marmoe2026) détaille toutes les propositions.

## Du 14 au 28 novembre: l'installation et les ateliers MoMoMoMo

Au **Centre Tignous d'art contemporain**, **MoMoMoMo**, installation participative de Victor Cord'homme, propose de manipuler modules, mobiles et ventilateurs. L'installation est annoncée du **12 au 28 novembre**, gratuitement, **dès 5 ans** selon la fiche détaillée du programme municipal.

Les ateliers avec l'artiste durent **une heure**, avec **12 places maximum par séance**. Ils sont gratuits, sur **inscription obligatoire** à **publics.tignous@montreuil.fr**:

- **Samedi 14 novembre** à **14 h 30** et **16 h**.
- **Mercredi 18 novembre** à **16 h**.
- **Samedi 21 novembre** à **14 h 30** et **16 h**.
- **Mercredi 25 novembre** à **16 h**.

Des nocturnes en entrée libre sont annoncées les **20 et 27 novembre de 18 h à 21 h**, puis un finissage le **28 novembre de 14 h à 19 h**. Le programme synthétique indique 3 ans pour les ateliers du 14, mais la fiche détaillée mentionne 5 ans pour le dispositif: confirmez auprès du Centre Tignous pour un enfant de 3 ou 4 ans. Les places disponibles ne sont pas garanties.

## Les autres rendez-vous du 15 au 21 novembre

**Dès 3 ou 4 ans.** *La Moufle* est annoncée à l'Aktéon Théâtre les **15, 21, 22 et 28 novembre à 11 h**, dès **3 ans**. *Trop fort* est programmé au Théâtre de la Noue le **18 novembre à 14 h 30**, dès **4 ans**. La Ville affiche pour *Trop fort* des tarifs de **10 €, 7 € et 4,50 €** selon la catégorie. Vérifiez les conditions auprès de la salle.

**Dès 5 ou 6 ans.** L'atelier *Bestiaire bleu* à La Locale est annoncé les **18 et 25 novembre à 10 h 30**, dès **6 ans**. *Temps de baleine* est programmé le **19 novembre à 19 h** au Centre social Espéranto, gratuitement, dès **5 ans**. Pour les ateliers gratuits, vérifiez les inscriptions dans le [programme détaillé](https://www.montreuil.fr/sites/default/files/medias/document/2026/10/programme_marmoe_2026.pdf).

**Samedi 21 novembre.** *Mirages* est annoncé au Centre social Lounès Matoub à **14 h**, gratuitement, dès **6 ans**. *Déraciné* est programmé au Théâtre municipal des Roches à **15 h**, dès **8 ans**, avec modalités de billetterie à confirmer.

## Dimanche 22 novembre: conte musical ou boum familiale

<!-- article-image-body:01 -->

![Façade du cinéma Le Méliès à Montreuil, photographiée en 2018.](/images/articles/2026/10/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants-body-01.webp)

*Photo: [Ville de Montreuil](https://commons.wikimedia.org/wiki/File:Dsc06451_copie_0.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

**Pierre et le Loup, revu et pas corrigé !** commence à **16 h** dans la salle des fêtes de l'Hôtel de ville. Corinne Masiero raconte le conte avec l'Ensemble Dénote. Durée **50 minutes**, **dès 4 ans**; entrée **libre dans la limite des places disponibles**. Les portes ouvrent à **15 h 30**, sans garantie de place.

<!-- article-image-body:02 -->

![Salle de La Marbrerie à Montreuil pendant le Carnival Rital de février 2025, hors festival MARMOE.](/images/articles/2026/10/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants-body-02.webp)

*Photo: [Danilo Samà · www.danilosama.ph](https://commons.wikimedia.org/wiki/File:Carnival_Rital,_La_Marbrerie,_Montreuil,_France_(08-02-2025)_%C2%B7_%C2%A9_Danilo_Sam%C3%A0.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

La **Boum familiale des Loupiotes** se déroule à **La Marbrerie, 21 rue Alexis-Lepère**, de **15 h 30 à 18 h 30**. Les bébés en portage sont bienvenus. La [fiche officielle](https://www.montreuil.fr/agenda/boum-familiale-des-loupiotes) précise:

- **Prévente**: **8 € par adulte**, **4 € par enfant à partir de 18 mois**, **gratuit de 0 à 17 mois**.
- **Sur place, si des places restent**: **12 € par adulte**, **6 € par enfant à partir de 18 mois**, **2 € de 0 à 17 mois**.

Pour deux adultes et deux enfants d'au moins 18 mois, comptez **24 € en prévente** ou **36 € sur place**, hors extras. Le conte et la boum se chevauchent.

Le **Studio Boissière** propose aussi des portraits photographiques façon Harcourt de **14 h à 18 h**, **7 € par personne**, réservation conseillée à **studioboissiere.montreuil@gmail.com**. Au **Méliès**, *Dessine tes toons !* débute à **14 h**, dès **6 ans**: une heure de courts métrages puis une heure d'atelier dessin, **4 € par billet**, à acheter auprès du cinéma.

## Du 25 au 29 novembre: les derniers rendez-vous

**Mercredi 25 novembre à 14 h 30**, **Le Livre des songes** est annoncé au **Conservatoire Pina Bausch**, **35 minutes**, **dès 5 ans**, **gratuit sur réservation**. Un atelier *À voix haute* se tient à **15 h** à la bibliothèque Paul Éluard, dès **6 ans**, gratuitement.

**Samedi 28 novembre**, *Corps sonores* propose quatre séances au **Théâtre municipal des Roches**, à **10 h, 11 h, 15 h et 17 h**, dès **4 ans**, gratuitement. La battle hip-hop **Make Your Choice Contest** commence à **13 h** à l'Hôtel de ville; la Ville affiche **10 €** pour cet événement.

**Dimanche 29 novembre à 11 h**, **Les Dames du Lac, chapitre 1: Mélora** dure **une heure** et s'adresse aux **6-12 ans**, chez **Comme Vous Émoi**. L'entrée est **gratuite**, avec **réservation fortement conseillée** à **contact@commevousemoi.org** ou au **09 50 77 67 89**, selon la [fiche municipale](https://www.montreuil.fr/agenda/les-dames-du-lac-chapitre-1-melora-jeune-public). *Santa Maria* est également annoncé le 29 à **11 h et 16 h** au Théâtre Thénardier, dès **6 ans**; tarifs à confirmer auprès de la salle.

## Les séances déjà passées de l'édition 2026

Les **4, 7 et 8 novembre** ne sont plus réservables comme sorties à venir. Pour mémoire:

- **Jardins fantastiques**, le 4 à La Locale: dès **3 ans**, séances à **10 h 30** et **14 h**, **1 h 30**, gratuit sur réservation à **associationlescousines@gmail.com**.
- **La Relève**, le 4 au Café La Pêche: hip-hop dès **6 ans**, **50 minutes**, à **14 h** et **15 h 30**, entrée gratuite et libre.
- **Olalaland**, au Théâtre public de Montreuil: dès **8 ans**, **une heure**, séances les **4 à 15 h**, **7 à 11 h et 16 h**, **8 à 16 h**; **9 à 27 €**, avec tarif annoncé de **12 € pour les moins de 18 ans**.
- **Tout pour les MARMOE(s)** au Théâtre public de Montreuil: château gonflable gratuit pour les **5-10 ans**, le **7 de 10 h à 17 h** et le **8 de 12 h à 16 h**; boum gratuite le **7 de 17 h 30 à 20 h 30**, distincte de celle des Loupiotes.
- **Fabrique ta machine à dessiner**, les 7 et 8 de **13 h 30 à 15 h 30**: atelier parent-enfant dès **5 ans**, **5 € par participant**, réservation auprès du théâtre.
- **Petits contes sous l'océan** au Méliès, pour les **3-5 ans**: le **7 à 11 h et 16 h**, le **8 à 16 h**, **4 € par billet**.
- **Toc-Toc et l'environnement**, le 8 à **11 h** chez Comme Vous Émoi: **45 minutes**, dès **3 ans**, gratuit sur réservation obligatoire, contact **09 50 77 67 89**.

Ces informations décrivent les séances passées, pas des disponibilités actuelles.

## Accès et séjour à Montreuil

Les séances se déroulent dans **des lieux différents**. Pour venir depuis Paris, le guide [Transports à Paris avec des enfants: quel titre choisir ?](https://www.fam-space.fr/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/) aide à comparer les titres selon les trajets et l'âge.

Pour prolonger la sortie en séjour, l'[ibis Styles Paris Mairie de Montreuil sur Booking.com](https://www.booking.com/hotel/fr/ibis-styles-mairie-de-montreuil.fr.html) propose notamment une catégorie de suite avec deux chambres communicantes. Vérifiez la capacité, les couchages, les tarifs et la disponibilité pour vos dates.

Du **25 au 30 novembre**, le [Salon du livre et de la presse jeunesse de Montreuil](https://www.fam-space.fr/articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/) constitue une autre sortie, **distincte de MARMOE**.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | Bédéciné 2026 à Illzach en famille: ateliers, spectacles et billets | evenements | Illzach, Haut-Rhin, Grand Est
- /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | Festival Playground 2026: spectacles de danse en famille, dates et tarifs | evenements | Bagnolet, Seine-Saint-Denis, Île-de-France
- /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | Festival Enfantillages 2026 à Valbonne: spectacles gratuits et cinéma en famille | evenements | Valbonne, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | Rétro Game Festival 2026 à Beauvais: programme, billets famille et animations enfants | evenements | Beauvais, Oise, Hauts-de-France
- /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | Au Creux de l'Oreille 2026 à Noirlac: spectacles et ateliers en famille du 17 au 22 octobre | evenements | Bruère-Allichamps, Cher, Centre-Val de Loire
- /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | bd BOUM 2026 à Blois en famille: ateliers, expositions et cinéma | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/les-expressifs-2026-a-poitiers-trois-jours-de-spectacles-gratuits/ | Les Expressifs 2026 à Poitiers: trois jours de spectacles gratuits | evenements | Poitiers, Vienne, Nouvelle-Aquitaine
- /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | Festival MARMOE 2026 à Montreuil: spectacles, ateliers et sorties jusqu'au 29 novembre | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
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
- opportunity | /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | 2026-10-26T03:35:31.605Z
- opportunity | /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | 2026-10-25T23:35:17.860Z
- refresh | /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | 2026-11-14T05:32:38.580Z
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
