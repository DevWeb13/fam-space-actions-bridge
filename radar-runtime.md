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
title: "Thoiry Lumières Sauvages 2026-2027: dates, billets et visite en famille"
subtitle: "Pachamama: prix, horaires et parcours nocturne avec les enfants"
summary: "Du 17 octobre 2026 au 7 mars 2027, préparez Thoiry Lumières Sauvages: billets soirée ou journée, tarifs enfants, budget familial et parcours."
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
  phase: 1
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

## Mission retenue
Actualiser la comparaison des billets de Thoiry Lumières Sauvages 2026-2027, notamment le billet Futé et les budgets familiaux.

## Pourquoi cette mission
Le snapshot montre 149 impressions du 26 au 28 octobre contre 18 du 8 au 10 novembre, sans diagnostic de classement: cette baisse ne prouve aucune cause SEO. Une lacune indépendante existe: l'article annonce un billet Futé à 30 € adulte / 21 € enfant, à réserver sept jours avant. La page officielle des tarifs consultée le 13 novembre affiche à la place une offre « Prolongez l'été » à 25 € avec trois jours d'anticipation, explicitement limitée aux achats du 7 septembre au 12 octobre et aux visites jusqu'au 15 octobre. Il faut donc contrôler les offres réellement achetables en novembre, sans recycler cette promotion expirée.

## Décision du lecteur
Savoir combien coûtera réellement une soirée seule ou une journée safari + illuminations pour sa famille, quelles formules sont encore disponibles et à quelles dates, et éviter un achat inadapté.

## Faits à traiter
- Recontrôler directement la billetterie et les pages officielles pour la période 2026-2027: billets soirée, Liberté, Futé et Pack Famille, âges, conditions, date limite et inclusion des illuminations. Si le Futé à 30/21 € n'est plus proposé, le retirer ou l'indiquer comme indisponible, sans le remplacer par l'ancienne promotion estivale.
- Recalculer seulement les budgets affectés par les tarifs réellement vérifiés; distinguer les prix 2026 de ceux non confirmés pour 2027. Vérifier aussi le calendrier du soir choisi.
- Préserver les explications soirée/journée, le parcours Pachamama, les conseils poussette et accessibilité prudents, l'application, les pauses, les photos, licences, crédits, liens internes et partenaires.

## Sources de départ
- Tarifs officiels: https://www.thoiry.net/tarifs/
- Festival: https://www.thoiry.net/thoiry-lumieres-sauvages/
- Calendrier: https://www.thoiry.net/calendrier-et-horaires/
- Conditions pratiques: https://www.thoiry.net/informations-pratiques/

## Affiliation
Conserver l'offre Klook Safari Thoiry uniquement après vérification de son périmètre et de l'âge tarifaire, et l'hébergement Booking.com déjà présent; ne pas multiplier les offres.

## Continuations internes
Laisser les détails du safari animalier au guide Wow Safari Thoiry déjà lié. Ne pas changer la date de mise à jour sans amélioration tarifaire effective.

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
