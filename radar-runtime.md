# Radar Fam Space - Phase 3/3

## Mission

Radar surveille en priorité les articles Fam Space qui gagnent rapidement des impressions Google puis les perdent quelques jours plus tard. Il cherche ensuite les autres articles existants à améliorer réellement. Seulement s'il ne trouve aucune amélioration utile, il recherche un événement exceptionnel avec un fort potentiel d'audience et, lorsque c'est naturel, d'affiliation. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 3/3

Tu es secrétaire de rédaction et fact-checker final. Ta mission principale est l'anti-régression, pas de réécrire l'article une deuxième fois.

Pour un refresh, compare l'article source exact et le candidat de phase 2 fournis intégralement plus bas. Le candidat final doit rester autonome et actuel. Pour chaque information présente avant et absente après, décide explicitement: toujours vraie et utile -> restaure-la; périmée ou fausse -> laisse-la supprimée; réellement redondante ou sans valeur -> suppression acceptable.

Accorde une attention particulière aux prix décisionnels, durées, réservation, âge/taille, accessibilité, accès, contraintes, services bébé/enfants, repas et autres détails pratiques familiaux.

Ensuite:
- lis l'article du début à la fin comme un lecteur sur téléphone et vérifie que l'introduction, les sections et la fin ne répètent pas la même information; supprime les conseils évidents, paraphrases de sources, sections sans information nouvelle et toute conclusion qui ne ferait que résumer;
- vérifie que l'angle sert l'article sans devenir l'article entier: une micro-question utile ne doit pas être répétée pendant toute la page, et le titre final doit décrire le sujet plutôt que recopier mécaniquement la décision de phase 1;
- vérifie que les modifications répondent au diagnostic et à la décision de phase 1;
- revérifie les faits déterminants auprès des sources officielles. Une affirmation attribuée à une source doit respecter exactement son niveau de certitude: ne transforme jamais « peut constituer un frein » en « déconseille », ni une possibilité en obligation ou interdiction;
- contrôle que la logique d'affiliation de ces règles partenaires fournies dans ce runtime a bien été appliquée, que les offres retenues sont encore pertinentes et que leur intégration se lit naturellement; vérifie qu'aucun lien officiel du corps ne mène, même indirectement depuis une page informative, à l'achat ou à la réservation de la même prestation sur le site officiel; pour une sortie, une activité, une visite, un événement ou un voyage sans affiliation, vérifie qu'aucune piste normale n'a été oubliée;
- contrôle les liens internes et les routes. Garde ceux qui prolongent réellement la lecture et, lorsqu'une autre page Fam Space traite déjà correctement un sous-sujet, raccourcis le passage au contexte nécessaire puis oriente naturellement le lecteur vers elle;
- vérifie `reviewAt` / `eventEndsAt` lorsqu'un contenu temporaire existe;
- ne force ni longueur ni affiliation.

Pour une opportunity, revérifie doublons, chevauchement avec les pages proches, catégorie, territoire, sources, cycle de vie et utilité. Un angle distinct ne justifie pas de recopier les parties générales déjà couvertes ailleurs. Le slug technique reste géré mécaniquement.

Soumets le résultat final avec `action: advance`, le frontmatter éditorial utile, le corps complet et un bloc `radarReview`:
- `summary`: contrôles et corrections réellement effectués;
- `sources`: URLs factuelles revérifiées;
- pour un refresh, `regressionCheck`: résultat concret de la comparaison ancien/nouveau. Une seule correction factuelle vérifiée peut suffire.

**Ne recopie aucun autre champ Radar, aucune branche et aucun SHA.** Le workflow GitHub crée le commit de phase 3, retrouve le HEAD réel et lance directement le processeur final.

## Règles partenaires

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

## Candidat validé de la phase précédente

---
title: "Festival MARMOE 2026 à Montreuil: que faire en famille jusqu'au 29 novembre?"
subtitle: "Ateliers gratuits, spectacles, boum et réservations: les rendez-vous encore à venir selon l'âge"
summary: "MARMOE se poursuit à Montreuil jusqu'au 29 novembre 2026. Ateliers MoMoMoMo, Pierre et le Loup, boum des Loupiotes, spectacles et activités gratuites: dates, âges, prix et réservations pour choisir une sortie."
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
  phase: 2
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

<!-- article-image-credit -->
*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:H%C3%B4tel_ville_Montreuil_Seine_St_Denis_15.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Le festival **MARMOE (Mois des Arts à Montreuil pour l'Enfance)** continue jusqu'au **29 novembre 2026**. Il n'existe ni billet unique ni tarif commun: selon le lieu, les activités sont gratuites en accès libre, gratuites sur inscription ou payantes. Pour choisir une sortie à partir du 14 novembre, voici les dates encore utiles, les âges et les démarches à anticiper. Le [programme officiel de la Ville de Montreuil](https://www.montreuil.fr/marmoe2026) permet de consulter l'ensemble des propositions.

## Du 14 au 28 novembre: créer et jouer avec MoMoMoMo

Au **Centre Tignous d'art contemporain**, l'installation participative **MoMoMoMo**, conçue par Victor Cord'homme, évolue au gré des modules, mobiles et ventilateurs que les visiteurs manipulent. Le dispositif est annoncé **du 12 au 28 novembre**, avec **entrée gratuite**, à partir de **5 ans** selon la fiche détaillée du programme municipal.

Les ateliers animés par l'artiste durent **une heure**, avec **12 places maximum par séance**. Ils sont gratuits mais **l'inscription est obligatoire** par courriel à **publics.tignous@montreuil.fr**:

- **Samedi 14 novembre** à **14 h 30** et **16 h**.
- **Mercredi 18 novembre** à **16 h**.
- **Samedi 21 novembre** à **14 h 30** et **16 h**.
- **Mercredi 25 novembre** à **16 h**.

Des nocturnes en entrée libre sont également annoncées les **vendredis 20 et 27 novembre, de 18 h à 21 h**, puis un finissage ouvert à tous le **samedi 28, de 14 h à 19 h**. Attention: le programme synthétique mentionne 3 ans pour les ateliers du 14, tandis que la fiche détaillée indique 5 ans pour le dispositif; demandez confirmation au Centre Tignous avant d'inscrire un enfant de 3 ou 4 ans. **Une date annoncée ne garantit pas qu'il reste des places.**

## Les autres rendez-vous à choisir selon l'âge

**Dès 3 ou 4 ans.** Le spectacle *La Moufle* est programmé à l'Aktéon Théâtre les **15, 21, 22 et 28 novembre à 11 h**, dès **3 ans**. *Trop fort* est annoncé au Théâtre de la Noue le **18 novembre à 14 h 30**, dès **4 ans**. Ces propositions ne sont pas indiquées comme gratuites dans le programme récapitulatif: vérifiez le tarif et la réservation auprès de la salle.

**Dès 5 ou 6 ans, sans payer de billet.** Le **18 novembre**, l'atelier *Bestiaire bleu* à La Locale commence à **10 h 30**, dès **6 ans**. Il revient le **25 novembre à 10 h 30**. Le **19 novembre à 19 h**, *Temps de baleine* est annoncé gratuitement au Centre social Espéranto, dès **5 ans**. Les ateliers et événements gratuits peuvent néanmoins demander une inscription: consultez les modalités dans le [programme municipal détaillé](https://www.montreuil.fr/sites/default/files/medias/document/2026/10/programme_marmoe_2026.pdf).

**Samedi 21 novembre.** *Mirages*, au Centre social Lounès Matoub à **14 h**, est annoncé **gratuit dès 6 ans**. Pour les enfants plus grands, *Déraciné* est programmé à **15 h** au Théâtre municipal des Roches, dès **8 ans**; renseignez-vous sur la billetterie.

## Dimanche 22 novembre: Pierre et le Loup ou la boum des Loupiotes

<!-- article-image-body:01 -->

![Façade du cinéma Le Méliès à Montreuil, photographiée en 2018.](/images/articles/2026/10/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants-body-01.webp)

*Photo: [Ville de Montreuil](https://commons.wikimedia.org/wiki/File:Dsc06451_copie_0.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

**Pierre et le Loup, revu et pas corrigé !** débute à **16 h** dans la salle des fêtes de l'Hôtel de ville. Corinne Masiero raconte le conte avec l'Ensemble Dénote. Le spectacle dure **50 minutes**, est annoncé **dès 4 ans** et l'entrée est **libre dans la limite des places disponibles**. Les portes ouvrent à **15 h 30**; arriver à cette heure ne garantit pas une place.

<!-- article-image-body:02 -->

![Salle de La Marbrerie à Montreuil pendant le Carnival Rital de février 2025, hors festival MARMOE.](/images/articles/2026/10/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants-body-02.webp)

*Photo: [Danilo Samà · www.danilosama.ph](https://commons.wikimedia.org/wiki/File:Carnival_Rital,_La_Marbrerie,_Montreuil,_France_(08-02-2025)_%C2%B7_%C2%A9_Danilo_Sam%C3%A0.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

La **Boum familiale des Loupiotes**, à **La Marbrerie, 21 rue Alexis-Lepère**, se déroule de **15 h 30 à 18 h 30**. Les bébés en portage sont acceptés. Selon la [fiche officielle de la boum](https://www.montreuil.fr/agenda/boum-familiale-des-loupiotes), les tarifs sont:

- **En prévente**: **8 € par adulte**, **4 € par enfant à partir de 18 mois**, **gratuit de 0 à 17 mois**.
- **Sur place, sous réserve de places**: **12 € par adulte**, **6 € par enfant à partir de 18 mois**, **2 € de 0 à 17 mois**.

Pour deux adultes et deux enfants d'au moins 18 mois, comptez **24 € en prévente** ou **36 € sur place**, hors extras. La boum et le conte se chevauchent: mieux vaut choisir l'un des deux plutôt que prévoir les deux.

Autre option le 22: le **Studio Boissière** propose des portraits photographiques de style Harcourt entre **14 h et 18 h**, **tout public**, **7 € par personne**, avec réservation conseillée à **studioboissiere.montreuil@gmail.com**. Au cinéma **Le Méliès**, *Dessine tes toons !* débute à **14 h**, dès **6 ans**: courts métrages d'une heure suivis d'un atelier dessin d'une heure, **4 € par billet**, places à acheter auprès du cinéma.

## Du 25 au 29 novembre: les dernières sorties

Le **mercredi 25 novembre à 14 h 30**, **Le Livre des songes** est proposé au **Conservatoire Pina Bausch**. Ce spectacle musical dure **35 minutes**, est annoncé **dès 5 ans** et l'entrée est **gratuite sur réservation**. Le même jour, un atelier *À voix haute* est programmé à **15 h** à la bibliothèque Paul Éluard, dès **6 ans**, gratuitement.

Le **samedi 28 novembre**, *Corps sonores* propose quatre créneaux au **Théâtre municipal des Roches**, à **10 h, 11 h, 15 h et 17 h**, **dès 4 ans**, gratuitement. Le festival annonce aussi *Make Your Choice Contest*, battle international de danse hip-hop, à **13 h** à l'Hôtel de ville: les conditions tarifaires sont à vérifier dans le programme.

Enfin, le **dimanche 29 novembre à 11 h**, **Les Dames du Lac, chapitre 1: Mélora** est un spectacle d'une heure pour les **6-12 ans**, chez **Comme Vous Émoi**. Il est **gratuit**, avec **réservation fortement conseillée** à **contact@commevousemoi.org** ou au **09 50 77 67 89**, selon la [fiche de la Ville](https://www.montreuil.fr/agenda/les-dames-du-lac-chapitre-1-melora-jeune-public). *Santa Maria*, au Théâtre Thénardier, est également annoncé ce dimanche à **11 h et 16 h**, dès **6 ans**, avec billetterie à vérifier.

## Les rendez-vous déjà passés: ne pas les confondre avec les prochaines séances

Les **4, 7 et 8 novembre** ont notamment accueilli *Jardins fantastiques* (atelier dès 3 ans, gratuit sur réservation), *La Relève* (hip-hop dès 6 ans, gratuit), *Olalaland* (spectacle dès 8 ans, **9 à 27 €**, avec tarif affiché de **12 € pour les moins de 18 ans**) et *Toc-Toc et l'environnement* (45 minutes dès 3 ans, gratuit avec réservation obligatoire auprès de Comme Vous Émoi). Le week-end *Tout pour les MARMOE(s)* au Théâtre public de Montreuil proposait également un château gonflable gratuit pour les **5-10 ans**, une boum gratuite le 7 novembre, l'atelier *Fabrique ta machine à dessiner* (**5 € par participant**, adulte ou enfant, dès 5 ans) et les courts métrages *Petits contes sous l'océan* au Méliès (**4 € par billet**, pour les 3-5 ans). Ces horaires et prix sont conservés comme repères de l'édition 2026, **pas comme des réservations encore possibles**.

## Accès et séjour à Montreuil

Les activités se tiennent dans **plusieurs lieux distincts**. Vérifiez l'adresse exacte, l'âge requis et les modalités de réservation de chaque séance avant de partir. Depuis Paris, le guide [Transports à Paris avec des enfants: quel titre choisir ?](https://www.fam-space.fr/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/) aide à comparer les billets selon les trajets et l'âge.

Pour les familles qui prolongent leur sortie en séjour, l'[ibis Styles Paris Mairie de Montreuil sur Booking.com](https://www.booking.com/hotel/fr/ibis-styles-mairie-de-montreuil.fr.html) présente notamment une catégorie de suite avec deux chambres communicantes. Vérifiez la **capacité réellement proposée**, les couchages, le tarif et la disponibilité pour vos dates.

Du **25 au 30 novembre**, le [Salon du livre et de la presse jeunesse de Montreuil](https://www.fam-space.fr/articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/) est une autre possibilité, **distincte de MARMOE**, avec ses propres conditions d'entrée.

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
- /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | Festival Playground 2026: spectacles de danse en famille, dates et tarifs | evenements | Bagnolet, Seine-Saint-Denis, Île-de-France
- /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | Bédéciné 2026 à Illzach en famille: ateliers, spectacles et billets | evenements | Illzach, Haut-Rhin, Grand Est
- /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | Festival Enfantillages 2026 à Valbonne: spectacles gratuits et cinéma en famille | evenements | Valbonne, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | Rétro Game Festival 2026 à Beauvais: programme, billets famille et animations enfants | evenements | Beauvais, Oise, Hauts-de-France
- /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | Au Creux de l'Oreille 2026 à Noirlac: spectacles et ateliers en famille du 17 au 22 octobre | evenements | Bruère-Allichamps, Cher, Centre-Val de Loire
- /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | bd BOUM 2026 à Blois en famille: ateliers, expositions et cinéma | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/les-expressifs-2026-a-poitiers-trois-jours-de-spectacles-gratuits/ | Les Expressifs 2026 à Poitiers: trois jours de spectacles gratuits | evenements | Poitiers, Vienne, Nouvelle-Aquitaine
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
- opportunity | /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | 2026-10-26T03:35:31.605Z
- opportunity | /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | 2026-10-25T23:35:17.860Z
- opportunity | /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | 2026-10-26T06:30:10.217Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | 2026-10-13T09:50:29.435Z
- opportunity | /articles/sorties/musee-de-l-air-et-de-l-espace-a-la-toussaint-2026-quelle-activite-choisir-selon-l-age/ | 2026-10-05T20:22:10.692Z
- opportunity | /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | 2026-10-26T10:34:36.317Z
- opportunity | /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | 2026-10-15T05:30:56.094Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
