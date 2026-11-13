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
title: "Thoiry Lumières Sauvages 2026-2027: dates, billets et visite en famille"
subtitle: "Pachamama: tarifs vérifiés, billets soirée ou journée et parcours avec les enfants"
summary: "Du 17 octobre 2026 au 7 mars 2027, choisissez entre soirée lumineuse et journée safari à Thoiry: prix 2026 vérifiés, budgets et précautions pour 2027."
category: evenements
location:
  city: Thoiry
  department: Yvelines
  region: Île-de-France
image:
  src: /images/articles/2026/10/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille.webp
  alt: Façade principale du château de Thoiry, photographiée en journée hors festival des Lumières Sauvages.
sources:
  - title: Wow Safari Thoiry - Lumières Sauvages 2026-2027
    url: https://www.thoiry.net/thoiry-lumieres-sauvages/
  - title: Wow Safari Thoiry - Tarifs
    url: https://www.thoiry.net/tarifs/
  - title: Wow Safari Thoiry - Calendrier et horaires
    url: https://www.thoiry.net/calendrier-et-horaires/
  - title: Wow Safari Thoiry - Informations pratiques
    url: https://www.thoiry.net/informations-pratiques/
eventEndsAt: 2027-03-07
topic:
  key: evenements|thoiry|thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille|2026
  keywords:
    - Thoiry Lumières Sauvages 2026 2027
    - Thoiry Pachamama tarifs enfants
    - billet soirée ou journée Thoiry
slug: thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille
status: published
publishedAt: 2026-10-24T19:30:32.602Z
updatedAt: null
readingTime: 5
affiliate:
  enabled: true
  type: travel
  destination: Thoiry
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/index.md
  targetSha: 0a9c31bbe5a87d2bb7e57902b9abf4511fe88c19
  targetUrl: /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/
  decision: Permettre à une famille de choisir et payer le bon billet pour les Lumières Sauvages sans se fier à un tarif Futé ou à un budget qui ne correspond plus à l'offre réellement disponible pour sa date.
  affiliationPotential: Conserver le lien Klook Safari Thoiry seulement si le billet couvre bien les illuminations à la date retenue, ainsi que l'hébergement Booking.com à Thoiry; ne pas présenter le revendeur comme source des tarifs officiels.
  gsc:
    retrievedAt: 2026-11-13T03:30:25+01:00
    dataThrough: 2026-11-10
    signal: needs_query_check
    basis: "Visibilité récente : 149 impressions sur trois jours, puis 18 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-26
    peakEnd: 2026-10-28
    recentStart: 2026-11-08
    recentEnd: 2026-11-10
    peakImpressions: 149
    recentImpressions: 18
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Thoiry Lumières Sauvages 2026 2027
      - Thoiry Pachamama tarifs enfants
      - billet soirée ou journée Thoiry
---

<!-- article-image-credit -->
*Photo: [Harmonia Amanda](https://commons.wikimedia.org/wiki/File:PA00087655-Thoiry088.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Du **17 octobre 2026 au 7 mars 2027**, **Thoiry Lumières Sauvages** revient dans les Yvelines avec sa neuvième édition, *Sur les traces de Pachamama*. Le parcours nocturne rassemble plus de **3 000 sculptures lumineuses sur près de 3 km**. Les familles peuvent venir uniquement pour les illuminations ou visiter le safari et le zoo en journée avant de poursuivre le soir. **Le festival n'est pas ouvert tous les jours** de cette période.

## Billet soirée ou journée: tarifs et conditions

<!-- article-image-body:01 -->

![Girafes et zèbres sur le circuit safari en voiture de Thoiry, photographiés en avril 2022, hors festival.](/images/articles/2026/10/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille-body-01.webp)

<!-- /article-image-body:01 -->

Pour les **illuminations seules**, le billet coûte **23 € à partir de 11 ans** et **19 € de 3 à 10 ans**. Du **19 décembre 2026 au 2 janvier 2027**, le prix adulte passe à **25 €**, sans changement pour les enfants. L'entrée est gratuite avant 3 ans sur justificatif. Le tarif spécifique pour une personne en situation de handicap est affiché à **18 € sur justificatif**; les contraintes du parcours sont à vérifier avant l'achat. Le billet soirée n'inclut ni le safari ni le zoo en journée. Le parc indique qu'il est possible de l'acheter en ligne ou sur place.

Les **billets journée** comprennent le safari en voiture, le zoo à pied et les illuminations **si le festival est ouvert le soir de la visite**. Les offres figurant sur la [page officielle des tarifs de Thoiry](https://www.thoiry.net/tarifs/), vérifiée le **13 novembre 2026**, sont:

- **Liberté: 34 € à partir de 11 ans, 25 € de 3 à 10 ans.** Utilisable les jours d'ouverture jusqu'au **31 décembre 2026**, sans réservation de date. Non remboursable, non échangeable et non modifiable; l'accès n'est pas garanti en cas de forte affluence.
- **Futé: 30 € à partir de 11 ans, 21 € de 3 à 10 ans.** Cette formule figure toujours sur la page officielle, avec achat en ligne **au moins sept jours avant** et une visite possible le jour choisi ou le lendemain si le parc est ouvert. Non remboursable, non échangeable et non modifiable. Vérifiez sa disponibilité dans la billetterie pour votre date avant de compter sur ce prix.
- **Pack Famille: 118 € pour exactement deux adultes et trois enfants de 3 à 10 ans.** Achat en ligne au moins la veille, billet daté valable uniquement le jour choisi. Ce n'est pas un forfait pour deux adultes et deux enfants.

**Attention aux promotions expirées:** une ancienne offre Futé « Prolongez l'été » à **25 €** concernait uniquement les achats du 7 septembre au 12 octobre 2026 et les visites jusqu'au 15 octobre. **Elle ne s'applique pas aux visites de novembre** et ne remplace pas le Futé classique à 30/21 € affiché sur la page officielle.

Le **Pass Annuel** comprend également les illuminations les soirs où elles ont lieu. Les prix des billets journée et du Pack Famille indiqués ici sont ceux affichés pour **2026**: ne les considérez pas comme garantis pour janvier, février ou mars **2027**. Pour ces dates, vérifiez la formule et son prix au moment de choisir votre visite.

Pour une journée avec les animaux, [le billet Safari Thoiry sur Klook](https://www.klook.com/fr/activity/139228-safari-thoiry-ticket-in-france/) mentionne l'accès aux Lumières Sauvages en hiver. **Vérifiez que la date choisie et l'édition 2026-2027 sont bien couvertes avant de payer.** Le revendeur applique le tarif adulte **dès 12 ans**, alors que le parc l'applique **dès 11 ans**: comparez le prix final selon l'âge de vos enfants. Cette offre ne doit pas être confondue avec un billet pour les seules illuminations.

## Combien coûte la sortie pour quatre personnes ?

Pour **deux adultes et deux enfants de 3 à 10 ans**, hors trajet et repas, selon les tarifs officiels affichés au 13 novembre 2026:

- **Soirée seule: 84 €**, ou **88 €** du 19 décembre au 2 janvier.
- **Journée avec billets Futé et illuminations: 102 €**, sous réserve que la formule soit achetable pour la date retenue, que le délai de sept jours soit respecté et que le festival ouvre ce soir-là.
- **Journée avec billets Liberté et illuminations: 118 €**, pour une visite avant fin 2026 lorsque le festival ouvre.

Ces budgets sont des **calculs à partir des tarifs publiés**, pas une garantie de disponibilité en billetterie. Pour une visite en **2027**, refaites le calcul avec les prix proposés à votre date.

Si les enfants souhaitent surtout voir les lumières, la soirée suffit. Si vous souhaitez aussi observer les animaux, le billet journée évite de payer une seconde entrée, mais implique une visite beaucoup plus longue. Pour **deux adultes et trois enfants de 3 à 10 ans**, le Pack Famille à **118 €** est moins cher que cinq billets Futé à **123 €**, si ces formules sont proposées à votre date.

Les circuits animaliers, les aires de jeux, le camion brousse et l'organisation d'une journée entière sont détaillés dans notre [guide Wow Safari Thoiry en famille](/articles/activites/wow-safari-thoiry-en-famille-tarifs-duree-et-conseils-pour-organiser-la-visite/).

## Quels jours et à quelle heure venir ?

Le festival est programmé **du 17 octobre 2026 au 7 mars 2027**, mais **pas chaque soir**. Il ouvre généralement de **17 h à 21 h**, avec une **dernière entrée à 20 h**. Certaines soirées se terminent à **20 h** (dernière entrée à **19 h**) et d'autres commencent à **18 h**. Comptez **environ 1 h 30** pour la promenade.

Vérifiez [le calendrier officiel](https://www.thoiry.net/calendrier-et-horaires/) et les éventuelles annonces de fermeture avant de partir, même si vous détenez un billet journée: les horaires et ouvertures peuvent changer, notamment avec la météo. Pour voir les animaux avant les lumières, arrivez suffisamment tôt. Le parc avertit qu'une arrivée **après 14 h** ne permet pas de parcourir intégralement ses deux circuits animaliers.

## Le parcours Pachamama avec des enfants

L'histoire suit un aventurier à travers les océans, le Groenland, la Mongolie, l'Inde et le Pérou, à la recherche d'un secret lié à **Pachamama**, figure de la Terre-Mère dans les cultures andines. Sculptures, lumières et ambiance sonore accompagnent la promenade.

Le circuit se déroule **dehors, sur un chemin forestier non aménagé**. Des chaussures adaptées à un sol humide et une **poussette à grandes roues** sont préférables avec de jeunes enfants. **Attention à l'accessibilité:** la page officielle du festival évoque l'accès des fauteuils adaptés, mais la page des tarifs indique que le parcours forestier n'est **pas adapté aux personnes à mobilité réduite**. Ces deux indications ne permettent pas de garantir l'accessibilité dans toutes les situations. **Contactez le parc au 01 34 87 40 67 avant de réserver** si un membre de votre famille utilise un fauteuil ou rencontre des difficultés de déplacement.

L'application gratuite **WOW Animal Explorer** déclenche des contenus sonores géolocalisés. Elle est **facultative**; pour l'utiliser sans connexion pendant la visite, téléchargez le parcours à l'avance et activez la localisation.

Pour les pauses, le parc annonce des **boissons chaudes, crêpes, gaufres et snacks**, notamment dans un chalet, ainsi qu'une offre de restauration au **Café Delicio**. Des **toilettes, tables de pique-nique et espaces abrités** sont également indiqués sur le parcours.

## Dormir à proximité après les illuminations

Pour un séjour dans les Yvelines, [Thoiry Etoile Lodge, Sure Hotel Collection by Best Western, sur Booking.com](https://www.booking.com/hotel/fr/auberge-du-chac-teau.fr.html) se trouve à Thoiry et propose notamment des chambres familiales. Renseignez **le nombre et l'âge des enfants** pour vérifier la capacité réelle, les disponibilités et le prix aux dates de votre visite. L'hébergement ne comprend pas automatiquement les billets du festival.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/index.md

---
title: "Thoiry Lumières Sauvages 2026-2027: dates, billets et visite en famille"
subtitle: "Pachamama: prix, horaires et parcours nocturne avec les enfants"
summary: "Du 17 octobre 2026 au 7 mars 2027, préparez Thoiry Lumières Sauvages: billets soirée ou journée, tarifs enfants, budget familial et parcours."
category: evenements
location:
  city: Thoiry
  department: Yvelines
  region: Île-de-France
image:
  src: "/images/articles/2026/10/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille.webp"
  alt: "Façade principale du château de Thoiry, photographiée en journée hors festival des Lumières Sauvages."
sources:
  - title: Wow Safari Thoiry - Lumières Sauvages 2026-2027
    url: https://www.thoiry.net/thoiry-lumieres-sauvages/
  - title: Wow Safari Thoiry - Tarifs
    url: https://www.thoiry.net/tarifs/
  - title: Wow Safari Thoiry - Calendrier et horaires
    url: https://www.thoiry.net/calendrier-et-horaires/
  - title: Wow Safari Thoiry - Informations pratiques
    url: https://www.thoiry.net/informations-pratiques/
eventEndsAt: 2027-03-07
topic:
  key: evenements|thoiry|thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille|2026
  keywords:
    - Thoiry Lumières Sauvages 2026 2027
    - Thoiry Pachamama tarifs enfants
    - billet soirée ou journée Thoiry
slug: thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille
status: published
publishedAt: 2026-10-24T19:30:32.602Z
updatedAt: null
readingTime: 5
affiliate:
  enabled: true
  type: travel
  destination: Thoiry
---
<!-- article-image-credit -->
*Photo: [Harmonia Amanda](https://commons.wikimedia.org/wiki/File:PA00087655-Thoiry088.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Du **17 octobre 2026 au 7 mars 2027**, **Thoiry Lumières Sauvages** revient dans les Yvelines avec sa neuvième édition, *Sur les traces de Pachamama*. Le parcours nocturne rassemble plus de **3 000 sculptures lumineuses sur près de 3 km**. Les familles peuvent venir uniquement pour les illuminations ou visiter le safari et le zoo en journée avant de poursuivre le soir. **Le festival n'est pas ouvert tous les jours** de cette période.

## Billet soirée ou journée: tarifs et conditions

<!-- article-image-body:01 -->

![Girafes et zèbres sur le circuit safari en voiture de Thoiry, photographiés en avril 2022, hors festival.](/images/articles/2026/10/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille-body-01.webp)

<!-- /article-image-body:01 -->

Pour les **illuminations seules**, le billet coûte **23 € à partir de 11 ans** et **19 € de 3 à 10 ans**. Du **19 décembre 2026 au 2 janvier 2027**, le prix adulte passe à **25 €**, sans changement pour les enfants. L'entrée est gratuite avant 3 ans sur justificatif. Le tarif spécifique pour une personne en situation de handicap est affiché à **18 € sur justificatif**; les contraintes du parcours sont à vérifier avant l'achat. Le billet soirée n'inclut ni le safari ni le zoo en journée. Le parc indique qu'il est possible de l'acheter en ligne ou sur place.

Les **billets journée** comprennent le safari en voiture, le zoo à pied et les illuminations **si le festival est ouvert le soir de la visite**. Les offres affichées pour 2026 sont:

- **Liberté: 34 € à partir de 11 ans, 25 € de 3 à 10 ans.** Utilisable les jours d'ouverture jusqu'au **31 décembre 2026**, sans réservation de date. Non remboursable, non échangeable et non modifiable; l'accès n'est pas garanti en cas de forte affluence.
- **Futé: 30 € à partir de 11 ans, 21 € de 3 à 10 ans.** Achat en ligne au moins **sept jours avant**; une seule visite, à la date choisie ou le lendemain si le parc est ouvert. Non remboursable, non échangeable et non modifiable.
- **Pack Famille: 118 € pour exactement deux adultes et trois enfants de 3 à 10 ans.** Achat en ligne au moins la veille, billet daté valable uniquement le jour choisi. Ce n'est pas un forfait pour deux adultes et deux enfants.

Le **Pass Annuel** comprend également les illuminations les soirs où elles ont lieu. Les conditions et prix ci-dessus sont ceux affichés pour **2026**: ils ne doivent pas être considérés comme acquis pour janvier, février ou mars **2027**.

Pour une journée avec les animaux, [le billet Safari Thoiry sur Klook](https://www.klook.com/fr/activity/139228-safari-thoiry-ticket-in-france/) mentionne l'accès aux Lumières Sauvages en hiver. **Vérifiez que la date choisie et l'édition 2026-2027 sont bien couvertes avant de payer.** Le revendeur applique le tarif adulte **dès 12 ans**, alors que le parc l'applique **dès 11 ans**: comparez le prix final selon l'âge de vos enfants. Cette offre ne doit pas être confondue avec un billet pour les seules illuminations.

## Combien coûte la sortie pour quatre personnes ?

Pour **deux adultes et deux enfants de 3 à 10 ans**, hors trajet et repas:

- **Soirée seule: 84 €**, ou **88 €** du 19 décembre au 2 janvier.
- **Journée avec billets Futé et illuminations: 102 €**, si les délais d'achat et les ouvertures concordent.
- **Journée avec billets Liberté et illuminations: 118 €**.

Si les enfants souhaitent surtout voir les lumières, la soirée suffit. Si vous souhaitez aussi observer les animaux, le billet journée évite de payer une seconde entrée, mais implique une visite beaucoup plus longue. Pour **deux adultes et trois enfants de 3 à 10 ans**, le Pack Famille à **118 €** est moins cher que cinq billets Futé à **123 €**.

Les circuits animaliers, les aires de jeux, le camion brousse et l'organisation d'une journée entière sont détaillés dans notre [guide Wow Safari Thoiry en famille](/articles/activites/wow-safari-thoiry-en-famille-tarifs-duree-et-conseils-pour-organiser-la-visite/).

## Quels jours et à quelle heure venir ?

Le festival est programmé **du 17 octobre 2026 au 7 mars 2027**, mais **pas chaque soir**. Il ouvre généralement de **17 h à 21 h**, avec une **dernière entrée à 20 h**. Certaines soirées se terminent à **20 h** (dernière entrée à **19 h**) et d'autres commencent à **18 h**. Comptez **environ 1 h 30** pour la promenade.

Vérifiez **le calendrier officiel et les éventuelles annonces de fermeture** avant de partir, même si vous détenez un billet journée: les horaires et ouvertures peuvent changer, notamment avec la météo. Pour voir les animaux avant les lumières, arrivez suffisamment tôt. Le parc avertit qu'une arrivée **après 14 h** ne permet pas de parcourir intégralement ses deux circuits animaliers.

## Le parcours Pachamama avec des enfants

L'histoire suit un aventurier à travers les océans, le Groenland, la Mongolie, l'Inde et le Pérou, à la recherche d'un secret lié à **Pachamama**, figure de la Terre-Mère dans les cultures andines. Sculptures, lumières et ambiance sonore accompagnent la promenade.

Le circuit se déroule **dehors, sur un chemin forestier non aménagé**. Des chaussures adaptées à un sol humide et une **poussette à grandes roues** sont préférables avec de jeunes enfants. **Attention à l'accessibilité:** la page officielle du festival évoque l'accès des fauteuils adaptés, mais la page des tarifs indique que le parcours forestier n'est **pas adapté aux personnes à mobilité réduite**. Ces deux indications ne permettent pas de garantir l'accessibilité dans toutes les situations. **Contactez le parc au 01 34 87 40 67 avant de réserver** si un membre de votre famille utilise un fauteuil ou rencontre des difficultés de déplacement.

L'application gratuite **WOW Animal Explorer** déclenche des contenus sonores géolocalisés. Elle est **facultative**; pour l'utiliser sans connexion pendant la visite, téléchargez le parcours à l'avance et activez la localisation.

Pour les pauses, le parc annonce des **boissons chaudes, crêpes, gaufres et snacks**, notamment dans un chalet, ainsi qu'une offre de restauration au **Café Delicio**. Des **toilettes, tables de pique-nique et espaces abrités** sont également indiqués sur le parcours.

## Dormir à proximité après les illuminations

Pour un séjour dans les Yvelines, [Thoiry Etoile Lodge, Sure Hotel Collection by Best Western, sur Booking.com](https://www.booking.com/hotel/fr/auberge-du-chac-teau.fr.html) se trouve à Thoiry et propose notamment des chambres familiales. Renseignez **le nombre et l'âge des enfants** pour vérifier la capacité réelle, les disponibilités et le prix aux dates de votre visite. L'hébergement ne comprend pas automatiquement les billets du festival.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/wow-safari-thoiry-en-famille-tarifs-duree-et-conseils-pour-organiser-la-visite/ | Wow Safari Thoiry en famille: tarifs 2026, billets et durée | activites | Thoiry, Yvelines, Île-de-France
- /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | Halloween 2026 au Safari de Peaugres: animations, tarifs et Festival Lumières Sauvages | evenements | Peaugres, Ardèche, Auvergne-Rhône-Alpes
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/sorties/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/ | Planète Préhistorique à Bordeaux: dates, durée et tarifs en famille | sorties | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/coeur-de-ville-en-lumieres-2026-avec-des-enfants-comment-preparer-la-soiree-sans-voiture/ | Cœur de Ville en Lumières 2026 avec des enfants: comment préparer la soirée sans voiture? | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | Toussaint 2026 à Nausicaá: ateliers en journée et nocturne d’Halloween | evenements | Boulogne-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | Créations & savoir-faire 2026 à Paris en famille: billets, ateliers et dates | evenements | Paris, Paris, Île-de-France
- /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | Thoiry Lumières Sauvages 2026-2027: dates, billets et visite en famille | evenements | Thoiry, Yvelines, Île-de-France
- /articles/voyages/musee-du-jouet-de-poissy-en-famille-visite-tarifs-et-exposition-sur-le-precinema/ | Musée du Jouet de Poissy en famille: visite, tarifs et exposition sur le précinéma | voyages | Poissy, Yvelines, Île-de-France
- /articles/voyages/chateau-de-versailles-depuis-paris-avec-des-enfants-rer-c-train-n-ou-l/ | Château de Versailles depuis Paris avec des enfants: RER C, train N ou L ? | voyages | Versailles, Yvelines, Île-de-France
- /articles/voyages/rambouillet-en-famille-sans-voiture-un-week-end-entre-ferme-chateau-et-trains-miniatures/ | Rambouillet en famille sans voiture: un week-end entre ferme, château et trains miniatures | voyages | Rambouillet, Yvelines, Île-de-France
- /articles/sorties/chateau-de-breteuil-en-famille-contes-de-perrault-jardins-et-visite-du-chateau/ | Château de Breteuil en famille: contes de Perrault, jardins et visite du château | sorties | Choisel, Yvelines, Île-de-France
- /articles/evenements/vacances-royales-2026-a-versailles-animations-napoleon-dates-et-billets-en-famille/ | Vacances royales 2026 à Versailles: animations Napoléon, dates et billets | evenements | Versailles, Yvelines, Île-de-France
- /articles/sorties/halloween-2026-a-france-miniature-en-famille/ | Halloween 2026 à France Miniature avec des enfants: billets et visite | sorties | Élancourt, Yvelines, Île-de-France
- /articles/bons-plans/pass-destination-yvelines-hauts-de-seine-en-famille-comment-profiter-d-au-moins-15-de-reduction/ | Pass Destination Yvelines-Hauts-de-Seine en famille: comment profiter d'au moins 15% de réduction? | bons-plans | Versailles, Yvelines, Île-de-France
- /articles/parentalite/visiter-le-chateau-de-versailles-avec-un-bebe-poussette-billets-et-parcours/ | Visiter le château de Versailles avec un bébé: poussette, billets et parcours | parentalite | Versailles, Yvelines, Île-de-France
- /articles/cuisine/atelier-cuisine-a-versailles-enfant-seul-ou-duo-parent-enfant-que-choisir/ | Atelier cuisine à Versailles: enfant seul ou duo parent-enfant, que choisir ? | cuisine | Versailles, Yvelines, Île-de-France
- /articles/evenements/chambly-kids-festival-2027-quatre-spectacles-pour-les-enfants-dates-et-ages/ | Chambly Kids Festival 2027: quatre spectacles pour les enfants, dates et âges | evenements | Chambly, Oise, Hauts-de-France
- /articles/evenements/festival-tete-de-mioche-2027-a-l-horme-quels-spectacles-choisir-avec-les-enfants/ | Festival Tête de mioche 2027 à L'Horme: quels spectacles choisir avec les enfants ? | evenements | L'Horme, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/festival-mini-kids-2027-aux-orres-trois-jours-pour-les-3-6-ans/ | Festival Mini Kids 2027 aux Orres, trois jours pour les 3-6 ans | evenements | Les Orres, Hautes-Alpes, Provence-Alpes-Côte d’Azur
- /articles/evenements/fete-du-citron-2027-a-menton-en-famille-que-voir-et-combien-prevoir/ | Fête du Citron 2027 à Menton en famille: que voir et combien prévoir ? | evenements | Menton, Alpes-Maritimes, Provence-Alpes-Côte d’Azur

### Historique Radar lié

- opportunity | /articles/voyages/chateau-de-versailles-depuis-paris-avec-des-enfants-rer-c-train-n-ou-l/ | 2026-10-31T07:32:47.278Z
- opportunity | /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | 2026-10-23T06:21:12.326Z
- opportunity | /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | 2026-10-19T19:48:02.164Z
- opportunity | /articles/sorties/halloween-2026-a-france-miniature-en-famille/ | 2026-10-08T18:25:52.752Z
- opportunity | /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | 2026-10-13T05:01:12.150Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- refresh | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-11-07T00:30:17.397Z
- opportunity | /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | 2026-10-18T08:44:05.495Z
- refresh | /articles/sorties/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/ | 2026-10-22T18:35:19.372Z
- opportunity | /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | 2026-10-24T19:30:32.700Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
