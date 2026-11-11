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
title: "Pass Nantes en famille en 2026: tarifs, visites incluses et alternatives gratuites"
subtitle: Calculs par âge, réservations des Machines de l'île et gratuités pour choisir entre pass et billets séparés
summary: "Pass Nantes 2026: comparez le coût des visites en famille, les formules 24 h à 7 jours, les réservations et les gratuités avant d'acheter."
slug: pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites
status: published
publishedAt: 2026-10-27T17:17:43+01:00
updatedAt: null
category: bons-plans
readingTime: 7
location:
  city: Nantes
  department: Loire-Atlantique
  region: Pays de la Loire
topic:
  key: bons-plans|nantes|pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites|2026
  keywords:
    - Pass Nantes en famille 2026
    - Pass Nantes tarifs famille
    - Pass Nantes visites incluses
    - visiter Nantes avec enfants pas cher
image:
  src: /images/articles/2026/10/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites.webp
  alt: Le Grand Éléphant mécanique des Machines de l'île à Nantes, avec des visiteurs sur ses plateformes
sources:
  - title: Le Voyage à Nantes - Pass Nantes et activités incluses
    url: https://www.levoyageanantes.fr/a-faire/pass-nantes/
  - title: Le Voyage à Nantes - FAQ Pass Nantes, tarifs et réservations
    url: https://www.levoyageanantes.fr/a-faire/pass-nantes/faq-pass-nantes/
  - title: Le Voyage à Nantes - Tarifs individuels des Machines et du château
    url: https://www.levoyageanantes.fr/sorganiser/groupes/comites-dentreprise/
  - title: Naolib - Gratuité des transports en commun
    url: https://naolib.fr/gratuite-des-transports-en-commun
  - title: Musée d'arts de Nantes - Tarifs et gratuités
    url: https://museedartsdenantes.nantesmetropole.fr/visiter/visiteurs-individuels/
  - title: Musée d'arts de Nantes - Gratuité du premier dimanche
    url: https://museedartsdenantes.nantesmetropole.fr/agenda/musee-gratuit-tous-les-1ers-dimanches-du-mois/
  - title: Saint-Nazaire Tourisme - Pass Renversant et visites
    url: https://www.saint-nazaire-tourisme.com/les-visites/les-bons-plans/
affiliate:
  enabled: true
  type: travel
  destination: Nantes
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/bons-plans/(2026)/(10)/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites/index.md
  targetSha: b106b02c80383149d459ea9181bc237486760387
  targetUrl: /articles/bons-plans/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites/
  decision: Décider, pour les âges et visites réellement prévus, si le Pass Nantes famille, des pass individuels ou des billets séparés coûtent le moins cher, puis réserver les activités accessibles aux dates du séjour.
  affiliationPotential: Conserver le lien Tiqets vers le Pass Nantes et l'hébergement Booking existant, comparer le prix final et les conditions avec l'organisateur sans promettre de réduction partenaire.
  gsc:
    retrievedAt: 2026-11-11T02:29:19+01:00
    dataThrough: 2026-11-08
    signal: uncertain
    basis: "Visibilité récente : 24 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-29
    peakEnd: 2026-10-31
    recentStart: 2026-11-06
    recentEnd: 2026-11-08
    peakImpressions: 24
    recentImpressions: 0
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - pass famille nantes
      - pass famille
      - pass nantes prix
reviewAt: 2027-03-15
---

<!-- article-image-credit -->
*Photo: [MHM55](https://commons.wikimedia.org/wiki/File:Grand_%C3%A9l%C3%A9phant,_Nantes-09.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Le Pass Nantes donne accès à une cinquantaine de prestations, mais il ne fait pas automatiquement économiser une famille. Pour choisir, additionnez les billets des visites que vous ferez réellement, en tenant compte des âges et des gratuités. Une seule activité payante et des promenades peuvent coûter bien moins cher que quatre pass.

## Tarifs 2026: combien payer selon les âges ?

Les tarifs affichés par [Le Voyage à Nantes](https://www.levoyageanantes.fr/a-faire/pass-nantes/) depuis avril 2026 sont:

- **24 h:** 30 € plein tarif, 20 € réduit, 80 € famille.
- **48 h:** 40 € plein tarif, 26 € réduit, 106 € famille.
- **72 h:** 49 € plein tarif, 31 € réduit, 129 € famille.
- **7 jours:** 75 € plein tarif, 45 € réduit, 195 € famille.

Le tarif réduit concerne les **4-17 ans**, les étudiants de moins de 26 ans et les titulaires d'une carte d'invalidité. Un enfant de moins de 4 ans n'a pas besoin de pass. La formule famille comprend **deux adultes et deux enfants de 4 à 17 ans**. Pour un seul enfant éligible ou un enfant de moins de 4 ans, calculez plutôt le prix des pass individuels: la formule famille n'est pas nécessairement adaptée.

Jusqu'au **31 mars 2027**, l'organisateur annonce **10 % de remise sur les seuls pleins tarifs**, pas sur les pass réduits ou famille. Par exemple, deux adultes et deux enfants de 4 à 17 ans paient **94 € en quatre pass 24 h séparés** (27 + 27 + 20 + 20 €), contre **80 € en pass famille**. Avec deux adultes et un enfant de 4 à 17 ans, trois pass individuels reviennent à **74 €** (27 + 27 + 20 €): inutile de prendre une formule famille à 80 €.

Le [Pass Nantes est aussi proposé sur Tiqets](https://www.tiqets.com/fr/activites-attractions-nantes-c66776/billets-pour-nantes-pass-p1048804/), en 1, 2, 3 ou 7 jours. Vérifiez le prix final, les conditions de retrait annoncées par le revendeur et comparez avec l'organisateur avant de payer.

La durée se décompte en **heures consécutives depuis la première utilisation**. Un pass activé le vendredi à 14 h expire le samedi à 13 h 59 pour la formule 24 h. L'activation se fait à la première visite ou à la première auto-validation des transports.

## Deux calculs pour savoir si le pass vaut son prix

Les prix de référence annoncés par [Le Voyage à Nantes](https://www.levoyageanantes.fr/a-faire/pass-nantes/) sont notamment **9 € pour le musée d'histoire du château**, **12 € pour la Galerie des Machines**, **12 € pour le Carrousel** et **17 € pour une croisière promenade sur l'Erdre** au tarif adulte. Pour les Machines, les [tarifs individuels publiés par l'organisateur](https://www.levoyageanantes.fr/sorganiser/groupes/comites-dentreprise/) distinguent **8 € de 4 à 12 ans** et **10 € de 13 à 17 ans**, contre 12 € pour l'adulte. L'entrée au musée du château est gratuite pour les moins de 18 ans. Ces exemples supposent que les lieux sont ouverts et que les billets correspondent aux visites souhaitées.

**Exemple 1: deux adultes et deux enfants de 8 et 10 ans**, qui visitent le château et la Galerie des Machines. Billets séparés: château 2 × 9 € + Galerie 2 × 12 € + 2 × 8 € = **58 €**. Le pass famille 24 h coûte **80 €**: les billets séparés économisent **22 €**, sans compter les transports. Même en ajoutant le Carrousel, le total devient **98 €** (58 + 24 + 16 €): si ces trois visites sont bien réalisables pendant les 24 heures, le pass famille permet alors **18 € d'économie**.

**Exemple 2: deux adultes et un enfant de 3 ans**, pour le château et la Galerie. Les billets adultes totalisent **42 €** (2 × 9 + 2 × 12 €); le musée est gratuit pour l'enfant et l'accès des moins de 4 ans aux Machines est annoncé gratuit. Deux pass adultes 24 h en promotion coûtent **54 €**: les billets séparés restent préférables pour ces deux visites. Vérifiez toujours les règles d'accès de l'enfant et les billets à réserver avant la visite.

Ces calculs n'attribuent pas aux enfants le prix des billets adultes et n'ajoutent pas de croisière sans connaître le tarif enfant ni les disponibilités. Une famille avec un adolescent de 13 à 17 ans doit refaire la somme avec le tarif Machines correspondant. Pour une croisière, consultez le prix par âge et la date du départ avant de comparer au pass 48 h. Un programme de deux jours chargé peut justifier 48 h; un séjour tranquille, non.

## Les visites à privilégier et les réservations

<!-- article-image-body:02 -->

![Le Carrousel des Mondes Marins installé sur l'île de Nantes](/images/articles/2026/10/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites-body-02.webp)

*Photo: [Duch](https://commons.wikimedia.org/wiki/File:Carrousel_des_Mondes_Marins_-_Nantes.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

<!-- article-image-body:01 -->

![Vue de la Galerie des Machines sur l'île de Nantes](/images/articles/2026/10/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites-body-01.webp)

*Photo: [Dr. Ronald Kunze](https://commons.wikimedia.org/wiki/File:La-Galerie-des-Machines.JPG) - [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

La **Galerie des Machines** permet d'observer les animaux mécaniques; le **Carrousel des Mondes Marins** offre une autre expérience sur l'île de Nantes. Le **voyage en Grand Éléphant n'est pas inclus** dans le Pass Nantes.

Point important de la [FAQ officielle du Pass Nantes](https://www.levoyageanantes.fr/a-faire/pass-nantes/faq-pass-nantes/): la **réservation en ligne de la Galerie et du Carrousel est possible tous les jours**, en sélectionnant la catégorie « Porteur Pass touristique Pass Nantes ». L'accès sans réservation reste possible pendant les horaires d'ouverture de la billetterie, sous réserve des conditions du site. Vérifiez les horaires du jour: les travaux aux abords des Machines peuvent modifier l'accès et l'ouverture.

<!-- article-image-body:03 -->

![Douves et façades du château des ducs de Bretagne à Nantes](/images/articles/2026/10/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites-body-03.webp)

*Photo: [sybarite48](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_des_ducs_de_Bretagne_%C3%A0_Nantes.jpg) - [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

Au **château des ducs de Bretagne**, choisissez le musée d'histoire selon l'intérêt et l'endurance des enfants. La réservation d'un créneau est **obligatoire pour les expositions temporaires**; un créneau en ligne est aussi proposé pour le musée. Le **musée d'Arts** et le **musée Jules Verne** sont d'autres possibilités, sans obligation de tout faire dans la même journée.

Pour une **croisière sur l'Erdre ou la Loire**, vérifiez d'abord la programmation et réservez: les places sont limitées. Les visites guidées, certaines expositions et les séances du **Planétarium** demandent également une réservation, cette dernière étant obligatoire auprès du Planétarium au **02 40 73 99 23**. Les billets réservés ne figurent pas nécessairement dans l'application Pass Nantes: conservez-les séparément avec vos pass. **Le pass n'est pas un coupe-file.**

Le **Muséum d'histoire naturelle** est fermé pour travaux depuis novembre 2025, avec une réouverture annoncée en 2029. Les Machines ferment habituellement entre les vacances de Noël et celles d'hiver. En novembre, ne comptez pas sur les prestations d'été: activités nautiques, vélo saisonnier, petit train ou croisières limitées à avril-octobre. Vérifiez la programmation exacte avant tout achat.

## Une ou deux journées sans épuiser les enfants

Pour **une journée**, combinez le château le matin, une pause déjeuner puis la Galerie ou le Carrousel. Pour **deux jours**, gardez une activité sur l'eau ou un musée pour le lendemain, uniquement si une place est disponible. Les itinéraires et les quartiers pratiques figurent dans notre [guide de Nantes en famille](https://www.fam-space.fr/destinations/pays-de-la-loire/loire-atlantique/nantes/).

Le pass 7 jours peut intéresser les familles qui visitent aussi **Clisson** ou **Saint-Nazaire**, mais les déplacements prennent du temps. Un **aller-retour TER Nantes-Clisson** est inclus avec réservation en ligne, retour possible jusqu'à J+1 de l'aller et pass valide au contrôle. Le **TER Nantes-Saint-Nazaire** n'est pas librement inclus: le trajet prévu avec le pass 7 jours accompagne la **croisière Estuaire** et doit avoir lieu le même jour, avec réservation. Cette croisière est saisonnière, pas une sortie disponible toute l'année.

## Les gratuités à déduire du calcul

<!-- article-image-body:04 -->

![Vue du musée d'arts de Nantes, accessible lors de journées de gratuité](/images/articles/2026/10/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites-body-04.webp)

*Photo: [GO69](https://commons.wikimedia.org/wiki/File:Nantes_(44)_Mus%C3%A9e_d%27arts_07.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:04 -->

Selon [Naolib](https://naolib.fr/gratuite-des-transports-en-commun), **bus, tramways et navibus sont gratuits pour tous le samedi et le dimanche**, hors navette aéroport. Les enfants accompagnés de moins de 6 ans voyagent gratuitement en semaine. Pour un week-end, ne présentez donc pas les transports ordinaires comme une économie apportée par le pass.

Le [musée d'Arts de Nantes](https://museedartsdenantes.nantesmetropole.fr/visiter/visiteurs-individuels/) est **gratuit pour les moins de 18 ans**. Des nocturnes et des [dimanches gratuits](https://museedartsdenantes.nantesmetropole.fr/agenda/musee-gratuit-tous-les-1ers-dimanches-du-mois/) sont aussi annoncés, généralement le premier dimanche du mois hors juillet et août: consultez le calendrier du musée et les éventuels créneaux d'exposition. D'autres musées métropolitains appliquent des gratuités sous conditions d'ouverture. Une entrée déjà gratuite n'apporte aucune économie grâce au pass.

Si votre séjour se concentre sur Saint-Nazaire, le [Pass Renversant](https://www.saint-nazaire-tourisme.com/les-visites/les-bons-plans/) peut être plus pertinent: les tarifs annoncés sont de 30 € par adulte et 15 € pour les 4-17 ans pour quatre sites locaux.

## Activation, accessibilité et hébergement

Après achat, le QR code du pass est présenté aux lieux partenaires. Pour les transports, parkings-relais et la navette aéroport, il faut associer le pass à l'application et **auto-valider** la prestation. La navette aéroport inclut un aller-retour pendant la validité et **nécessite un smartphone**; sans smartphone, une version imprimée du pass convient pour les visites mais pas pour cette navette. Chaque site est généralement utilisable une fois par pass. Une fermeture ou une prestation indisponible après utilisation partielle ne donne pas droit au remboursement.

La plupart des étapes disposent d'informations d'accessibilité, mais les contraintes diffèrent d'un site à l'autre: vérifiez auprès de l'organisateur pour une poussette ou un fauteuil et prévoyez de vraies pauses avec les jeunes enfants.

Pour dormir près de la gare et du château, l'[Aparthotel Adagio Nantes Centre sur Booking.com](https://www.booking.com/hotel/fr/adagio-city-aparthotel-nantes-centre.fr.html), à environ 500 m de la gare, propose des studios dont certains accueillent jusqu'à quatre personnes. Leur kitchenette avec réfrigérateur, plaques et micro-ondes peut faciliter les repas des enfants. Contrôlez la capacité exacte, le tarif total et l'annulation pour vos dates.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/bons-plans/(2026)/(10)/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites/index.md

---
title: "Pass Nantes en famille en 2026: tarifs, visites incluses et alternatives gratuites"
subtitle: Un guide pour choisir entre 24 h, 48 h, 72 h ou 7 jours sans payer pour des visites que vous ne ferez pas
summary: "Pass Nantes en famille: prix 2026, Machines de l'île, musées, croisières, réservations et gratuités pour choisir la formule adaptée à votre séjour."
slug: pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites
status: published
publishedAt: 2026-10-27T17:17:43+01:00
updatedAt: null
category: bons-plans
readingTime: 7
location:
  city: Nantes
  department: Loire-Atlantique
  region: Pays de la Loire
topic:
  key: bons-plans|nantes|pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites|2026
  keywords:
    - Pass Nantes en famille 2026
    - Pass Nantes tarifs famille
    - Pass Nantes visites incluses
    - visiter Nantes avec enfants pas cher
image:
  src: "/images/articles/2026/10/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites.webp"
  alt: "Le Grand Éléphant mécanique des Machines de l'île à Nantes, avec des visiteurs sur ses plateformes"
sources:
  - title: Le Voyage à Nantes - Pass Nantes et activités incluses
    url: https://www.levoyageanantes.fr/a-faire/pass-nantes/
  - title: Le Voyage à Nantes - FAQ Pass Nantes, tarifs et réservations
    url: https://www.levoyageanantes.fr/a-faire/pass-nantes/faq-pass-nantes/
  - title: Naolib - Gratuité des transports en commun
    url: https://naolib.fr/gratuite-des-transports-en-commun
  - title: Musée d'arts de Nantes - Tarifs et gratuités
    url: https://museedartsdenantes.nantesmetropole.fr/visiter/visiteurs-individuels/
  - title: Musée d'arts de Nantes - Gratuité du premier dimanche
    url: https://museedartsdenantes.nantesmetropole.fr/agenda/musee-gratuit-tous-les-1ers-dimanches-du-mois/
  - title: Saint-Nazaire Tourisme - Pass Renversant et visites
    url: https://www.saint-nazaire-tourisme.com/les-visites/les-bons-plans/
affiliate:
  enabled: true
  type: travel
  destination: Nantes
---
<!-- article-image-credit -->
*Photo: [MHM55](https://commons.wikimedia.org/wiki/File:Grand_%C3%A9l%C3%A9phant,_Nantes-09.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Pour découvrir Nantes avec des enfants, le Pass Nantes donne accès à une cinquantaine d'activités: musées, Machines de l'île, visites guidées, croisières et certains transports. Il peut simplifier un séjour chargé, mais n'est pas forcément le meilleur achat pour une famille qui souhaite surtout flâner, visiter un seul musée ou profiter des sorties gratuites. Le bon choix dépend des âges, des jours de visite et des activités réellement ouvertes.

## Combien coûte le Pass Nantes en 2026 ?

Les tarifs du Pass Nantes en vigueur depuis le 1er avril 2026 sont les suivants:

- **24 h:** 30 € par adulte, 20 € au tarif réduit, 80 € en formule famille.
- **48 h:** 40 € par adulte, 26 € au tarif réduit, 106 € en formule famille.
- **72 h:** 49 € par adulte, 31 € au tarif réduit, 129 € en formule famille.
- **7 jours:** 75 € par adulte, 45 € au tarif réduit, 195 € en formule famille.

Le tarif réduit concerne notamment les enfants de **4 à 17 ans**, les étudiants de moins de 26 ans et les titulaires d'une carte d'invalidité. Les enfants de moins de 4 ans n'ont pas besoin de pass. La formule famille correspond à **deux adultes et deux enfants de 4 à 17 ans**: elle offre, en pratique, le deuxième pass enfant.

**Attention à la promotion:** l'organisateur annonce **10 % de réduction sur le tarif plein jusqu'au 31 mars 2027**, mais pas sur les tarifs réduits ou famille. Pour deux adultes et deux enfants de 4 à 17 ans, le Pass famille 24 h à 80 € reste plus avantageux que quatre pass séparés (94 € avec la remise sur les deux adultes). Le [Pass Nantes est également proposé sur Tiqets](https://www.tiqets.com/fr/activites-attractions-nantes-c66776/billets-pour-nantes-pass-p1048804/), pour 1, 2, 3 ou 7 jours. Ce revendeur indique un retrait du pass à l'accueil du Voyage à Nantes: vérifiez cette étape et comparez le prix final avec l'offre de l'organisateur.

La durée se compte en **heures consécutives à partir de la première utilisation**, et non en journées calendaires. Un pass de 24 h activé le vendredi à 14 h reste valable jusqu'au samedi à 13 h 59. Pour un séjour de deux jours, l'heure de la première visite peut donc changer l'intérêt d'une formule 24 h ou 48 h.

## Quelles visites plaisent vraiment aux enfants ?

<!-- article-image-body:02 -->

![Le Carrousel des Mondes Marins installé sur l'île de Nantes](/images/articles/2026/10/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites-body-02.webp)

*Photo: [Duch](https://commons.wikimedia.org/wiki/File:Carrousel_des_Mondes_Marins_-_Nantes.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

<!-- article-image-body:01 -->

![Vue de la Galerie des Machines sur l'île de Nantes](/images/articles/2026/10/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites-body-01.webp)

*Photo: [Dr. Ronald Kunze](https://commons.wikimedia.org/wiki/File:La-Galerie-des-Machines.JPG) - [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Parmi les prestations annoncées dans le Pass Nantes, plusieurs se prêtent à une sortie familiale:

- **La Galerie des Machines de l'île:** découverte des animaux mécaniques et de leur fonctionnement, sur l'île de Nantes.
- **Le Carrousel des Mondes Marins:** univers de créatures marines mécaniques, également sur l'île de Nantes.
- **Le château des ducs de Bretagne:** musée d'histoire de Nantes, dans le centre-ville, avec des expositions à choisir selon l'âge des enfants.
- **Le musée d'Arts et le musée Jules Verne:** deux visites culturelles possibles, plutôt à adapter à la curiosité et à la fatigue de chacun.
- **Une croisière sur l'Erdre ou la Loire:** une autre manière de découvrir la ville, à condition qu'un départ soit programmé et réservé.

Le **voyage à bord du Grand Éléphant n'est pas inclus**, même si la Galerie des Machines l'est. Le Muséum d'histoire naturelle figure encore parmi les prestations présentées, mais il est **fermé pour travaux depuis novembre 2025**, avec une réouverture annoncée en 2029. Ne le comptez pas dans votre programme actuel.

Le pass dépasse aussi Nantes: il couvre notamment des visites à **Clisson**, ville du vignoble nantais, et plusieurs sites de **Saint-Nazaire**, sur l'estuaire de la Loire, dont Escal'Atlantic et le sous-marin Espadon. Ces excursions demandent davantage de temps qu'une visite en centre-ville.

## Trois façons de visiter sans courir

<!-- article-image-body:03 -->

![Douves et façades du château des ducs de Bretagne à Nantes](/images/articles/2026/10/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites-body-03.webp)

*Photo: [sybarite48](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_des_ducs_de_Bretagne_%C3%A0_Nantes.jpg) - [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

### Une journée concentrée sur Nantes

En semaine, vous pouvez consacrer la matinée au château des ducs de Bretagne, faire une vraie pause déjeuner, puis rejoindre l'île de Nantes pour la Galerie des Machines ou le Carrousel. Pour organiser les déplacements et choisir le bon quartier, consultez aussi notre [guide de Nantes en famille](https://www.fam-space.fr/destinations/pays-de-la-loire/loire-atlantique/nantes/). C'est déjà une journée bien remplie avec de jeunes enfants. Le Pass 24 h devient intéressant si les entrées que vous avez effectivement choisies, et éventuellement vos transports, coûtent davantage que le pass. Inutile d'ajouter une croisière uniquement pour rentabiliser l'achat.

### Deux jours avec une activité sur l'eau

Le premier jour, prévoyez le château et une découverte des Machines de l'île. Le second, gardez du temps pour une croisière sur l'Erdre si elle est proposée, puis un musée ou une promenade. La formule 48 h peut convenir à ce programme, à condition de **réserver la croisière avant de bâtir toute la journée autour d'elle**. Les déplacements et les pauses prennent du temps: trois visites importantes par jour ne sont pas une obligation.

### Un week-end à petit budget

Si vous venez un samedi et un dimanche pour une promenade dans le centre, un musée et une seule activité payante, commencez par regarder les gratuités. Vous pourriez avoir davantage intérêt à acheter cette entrée séparément. Plusieurs musées métropolitains proposent une entrée gratuite certains dimanches, hors juillet et août. Vérifiez le calendrier précis plutôt que de présumer que chaque premier dimanche est concerné: le musée d'Arts annonce par exemple sa journée gratuite du **8 novembre 2026**. Ces gratuités peuvent modifier fortement le calcul.

La formule 7 jours prend davantage de sens pour un séjour long, avec plusieurs sorties hors de Nantes. Un aller-retour en TER entre Nantes et Clisson est inclus sous conditions de réservation. En revanche, **le train vers Saint-Nazaire n'est pas librement inclus**: le trajet prévu avec le Pass 7 jours est lié à la croisière Estuaire et à sa date. Ne confondez pas ces deux avantages.

## Les gratuités qui peuvent faire économiser plus qu'un pass

<!-- article-image-body:04 -->

![Vue du musée d'arts de Nantes, accessible lors de journées de gratuité](/images/articles/2026/10/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites-body-04.webp)

*Photo: [GO69](https://commons.wikimedia.org/wiki/File:Nantes_(44)_Mus%C3%A9e_d%27arts_07.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:04 -->

Selon [Naolib](https://naolib.fr/gratuite-des-transports-en-commun), les tramways, bus et navibus du réseau sont **gratuits pour tous le samedi et le dimanche**, à l'exception de la navette aéroport. Les enfants accompagnés de moins de 6 ans voyagent aussi gratuitement en semaine. Si votre programme se déroule entièrement le week-end, n'ajoutez donc pas artificiellement le prix des transports au coût de vos visites.

Le [musée d'Arts de Nantes](https://museedartsdenantes.nantesmetropole.fr/visiter/visiteurs-individuels/) est **gratuit pour les moins de 18 ans**. Il propose également des gratuités pour tous, notamment lors de certaines nocturnes. Lors des [dimanches gratuits annoncés dans son agenda](https://museedartsdenantes.nantesmetropole.fr/agenda/musee-gratuit-tous-les-1ers-dimanches-du-mois/), généralement le premier dimanche du mois hors juillet et août, l'entrée est libre; un créneau reste conseillé pour certaines expositions temporaires. La gratuité concerne aussi d'autres musées métropolitains, sous réserve qu'ils soient ouverts ce jour-là.

Pour une famille, cette différence est essentielle: une entrée gratuite pour l'enfant ne représente **aucune économie supplémentaire** grâce au Pass Nantes. Comparez séparément les besoins des adultes et des enfants avant de choisir la formule famille.

Si vous passez surtout du temps à Saint-Nazaire, regardez aussi le [Pass Renversant proposé par l'office de tourisme](https://www.saint-nazaire-tourisme.com/les-visites/les-bons-plans/): il couvre quatre grands sites locaux, avec des tarifs annoncés à 30 € par adulte et 15 € pour les 4-17 ans. Il ne remplace pas le Pass Nantes pour les visites nantaises, mais peut mieux correspondre à un séjour centré sur Saint-Nazaire.

## Réservations, fermetures et activation: les pièges à éviter

Le Pass Nantes **n'est pas un coupe-file**. D'après les conditions de l'organisateur, les croisières et certaines visites guidées nécessitent une réservation, tout comme les séances du Planétarium. Pour les Machines de l'île, une réservation en ligne est possible en sélectionnant le tarif « porteur Pass Nantes »; le château demande notamment un créneau pour ses expositions temporaires. Les billets réservés peuvent être distincts du pass et ne figurent pas forcément dans son application.

Les croisières, locations de vélos et activités nautiques dépendent de la saison. Les Machines de l'île connaissent également une fermeture annuelle entre les vacances de Noël et celles d'hiver. Vérifiez donc le calendrier de chaque activité **avant d'acheter**: une prestation incluse sur le papier peut être fermée pendant votre séjour.

Après achat, vous recevez un e-pass avec QR code. Il s'active à la première entrée chez un partenaire ou lors de la première auto-validation des transports dans l'application Pass Nantes. Pour les transports, parkings-relais et la navette aéroport, il faut suivre les modalités d'association et d'auto-validation précisées dans la FAQ. La navette aéroport comprend un aller-retour pendant la validité du pass et nécessite un smartphone. Sans smartphone, une version imprimée du pass peut servir pour les visites, mais pas pour cette navette.

Enfin, chaque site inclus ne peut généralement être visité **qu'une fois avec le même pass**. Si un lieu ferme ou qu'une prestation est indisponible après une utilisation partielle, le pass n'est pas remboursé pour ce motif.

## Où dormir pour visiter Nantes sur deux jours ?

Pour enchaîner le château, le centre-ville et les Machines de l'île sans changer d'hébergement, le secteur de la gare est pratique, notamment si vous arrivez en train. L'[Aparthotel Adagio Nantes Centre sur Booking.com](https://www.booking.com/hotel/fr/adagio-city-aparthotel-nantes-centre.fr.html) se trouve à environ 500 m de la gare et près du château. Certains studios peuvent accueillir jusqu'à quatre personnes et disposent d'une kitchenette avec réfrigérateur, plaques et micro-ondes, utile pour les repas des enfants. Vérifiez la capacité exacte du studio, le tarif total et les conditions d'annulation pour vos dates.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/maison/broyeur-de-vegetaux-a-nantes-metropole-acheter-a-plusieurs-ou-profiter-des-operations-gratuites/ | Broyeur de végétaux à Nantes Métropole: acheter à plusieurs ou profiter des opérations gratuites ? | maison | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | Noël à Nantes 2026: marché de Noël et Voyage en hiver en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/utopiales-2026-a-nantes-en-famille-dates-billets-et-conseils-pour-preparer-la-visite/ | Utopiales 2026 à Nantes en famille: dates, billets et conseils pour préparer la visite | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/cuisine/atelier-cuisine-parent-enfant-a-nantes-gratuit-au-breil-ou-cours-prive/ | Ateliers cuisine parent-enfant à Nantes: où cuisiner ensemble? | cuisine | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP à Nantes: où aller avec un enfant de moins de 6 ans ? | parentalite | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/voyage-a-nantes-2026-en-famille/ | Voyage à Nantes 2026 en famille: parcours court et plan | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/vie-pratique/tarification-solidaire-naolib-a-nantes-combien-paie-une-famille-et-comment-faire-la-demande/ | Tarification solidaire Naolib à Nantes: combien paie une famille et comment faire la demande? | vie-pratique | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | Festi'Mômes 2026 à Nantes: séances, spectacles et tarifs en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/bons-plans/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites/ | Pass Nantes en famille en 2026: tarifs, visites incluses et alternatives gratuites | bons-plans | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/folie-plantes-nantes-2026-famille/ | Folie des plantes 2026 à Nantes: un week-end gratuit à découvrir en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | Noël 2026 au château de Goulaine: dates, billets et conseils en famille | evenements | Haute-Goulaine, Loire-Atlantique, Pays de la Loire
- /articles/sorties/ocearium-du-croisic-en-famille-animations-tarifs-et-visite/ | Océarium du Croisic en famille: animations, tarifs et visite | sorties | Le Croisic, Loire-Atlantique, Pays de la Loire
- /articles/bons-plans/chateau-de-chateaubriant-en-famille-une-sortie-a-petit-budget/ | Château de Châteaubriant en famille, une sortie à petit budget | bons-plans | Châteaubriant, Loire-Atlantique, Pays de la Loire
- /articles/activites/planete-sauvage-en-famille-tarifs-2026-duree-et-conseils-de-visite/ | Planète Sauvage en famille: tarifs 2026, durée et conseils de visite | activites | Port-Saint-Père, Loire-Atlantique, Pays de la Loire
- /articles/evenements/festival-ete-continue-carquefou-2026-famille/ | Festival L’Été Continue 2026 à Carquefou: six jours gratuits en famille | evenements | Carquefou, Loire-Atlantique, Pays de la Loire
- /articles/bons-plans/train-de-balagne-en-famille-arrets-plages-et-tarifs-entre-calvi-et-l-ile-rousse/ | Train de Balagne en famille: arrêts, plages et tarifs entre Calvi et L'Île-Rousse | bons-plans | Haute-Corse, Corse
- /articles/bons-plans/musees-a-la-reunion-en-famille-quel-pass-choisir-pour-economiser/ | Musées à La Réunion en famille: quel pass choisir pour économiser ? | bons-plans | La Réunion, La Réunion
- /articles/bons-plans/musees-de-niort-en-famille-le-donjon-et-bernard-d-agesci-a-petit-budget/ | Musées de Niort en famille: le Donjon et Bernard d’Agesci à petit budget | bons-plans | Niort, Deux-Sèvres, Nouvelle-Aquitaine
- /articles/bons-plans/pass-cantal-2026-2027-quels-cheques-utiliser-pour-les-activites-des-enfants/ | PASS CANTAL 2026-2027: quels chèques utiliser pour les activités des enfants ? | bons-plans | Cantal, Auvergne-Rhône-Alpes
- /articles/bons-plans/troyes-en-famille-a-petit-budget-musees-gratuites-et-balades-dans-le-centre/ | Troyes en famille à petit budget: musées, gratuités et balades dans le centre | bons-plans | Troyes, Aube, Grand Est
- /articles/bons-plans/abbaye-de-saint-savin-en-famille-tarifs-gratuites-et-visite-avec-les-enfants/ | Abbaye de Saint-Savin en famille: tarifs, gratuités et visite avec les enfants | bons-plans | Saint-Savin, Vienne, Nouvelle-Aquitaine
- /articles/bons-plans/albi-en-famille-a-petit-budget-deux-programmes-entre-patrimoine-et-musee/ | Albi en famille à petit budget: deux programmes entre patrimoine et musée | bons-plans | Albi, Tarn, Occitanie

### Historique Radar lié

- opportunity | /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | 2026-10-17T11:48:00.184Z
- refresh | /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | 2026-10-17T18:40:41.973Z
- refresh | /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | 2026-11-02T06:34:10.210Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | 2026-11-03T15:36:10.146Z
- opportunity | /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | 2026-10-24T15:27:41.430Z
- refresh | /articles/activites/planete-sauvage-en-famille-tarifs-2026-duree-et-conseils-de-visite/ | 2026-10-02T14:23:16.612Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
