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
title: "Noël 2026 au château de Goulaine: dates, billets et conseils en famille"
subtitle: "Un spectacle immersif d'environ une heure près de Nantes: poussettes, accessibilité et accès à vérifier avant la sortie"
summary: Dates de Noël 2026, réservation, durée, contraintes avec les enfants, accessibilité, restauration et transports pour la Merveilleuse Histoire du Père Noël au château de Goulaine.
category: evenements
location:
  city: Haute-Goulaine
  department: Loire-Atlantique
  region: Pays de la Loire
image:
  src: /images/articles/2026/11/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille.webp
  alt: Vue du château de Goulaine en Loire-Atlantique, hors spectacle de Noël 2026
sources:
  - title: Polaris Spectacles - La Merveilleuse Histoire du Père Noël
    url: https://www.goulaine-spectacles.com/spectacle-1
  - title: Polaris Spectacles - Informations pratiques
    url: https://www.goulaine-spectacles.com/pratique
  - title: Polaris Spectacles - Programmation 2026
    url: https://www.goulaine-spectacles.com/
  - title: Placeminute - Billetterie 2026
    url: https://polaris-horslesmurs.placeminute.com/event/immersive-experience/polaris-presente-la-merveilleuse-histoire-du-pere-noel-2026-chateau-de-goulaine,47483.html
eventEndsAt: 2026-12-20
topic:
  key: evenements|haute-goulaine|noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille|2026
  keywords:
    - Merveilleuse Histoire du Père Noël Goulaine 2026
    - spectacle Noël château de Goulaine enfants
    - billets horaires Noël Haute-Goulaine
slug: noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille
status: published
publishedAt: 2026-11-03T15:35:55.581Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Haute-Goulaine
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(11)/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/index.md
  targetSha: c664e1423dc8b4d27603f434820c1adee339eda3
  targetUrl: /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/
  decision: Savoir si la famille peut réellement rentrer à Nantes après une séance du soir, surtout le vendredi, le samedi ou le dimanche, et choisir son transport avant de réserver.
  affiliationPotential: Conserver l'hébergement Booking.com Hôtel de la Louée existant; ne pas ajouter de partenaire sans offre pertinente vérifiée.
  gsc:
    retrievedAt: 2026-11-13T03:30:25+01:00
    dataThrough: 2026-11-10
    signal: uncertain
    basis: "Visibilité récente : 192 impressions sur trois jours, puis 1 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-04
    peakEnd: 2026-11-06
    recentStart: 2026-11-08
    recentEnd: 2026-11-10
    peakImpressions: 192
    recentImpressions: 1
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - spectacle château de goulaine 2026
      - chateau de goulaine noel 2026
      - chateau de goulaine spectacle noel 2026
      - noel chateau de goulaine
      - noel haute goulaine
---

## Mission retenue
Actualiser uniquement les conseils de transport pour « La Merveilleuse Histoire du Père Noël » au château de Goulaine, près de Nantes.

## Pourquoi cette mission
Le snapshot GSC indique 192 impressions sur trois jours puis 1, sans cause SEO établie. Lacune indépendante et utile: l'article cite le car Aléop 331 mais n'avertit pas clairement qu'il ne dessert pas l'arrêt le dimanche et que les derniers retours vers Nantes précèdent les séances tardives. Le spectacle commence ce 13 novembre.

## Décision du lecteur
Déterminer si le trajet aller-retour en car est réalisable pour la séance choisie, sinon prévoir un autre transport ou renoncer à cette date.

## Faits à traiter
Vérifier sur les horaires Aléop applicables aux dates de visite les dessertes de l'arrêt « Allée du Château » vers Nantes: absence de service dominical selon les horaires publiés et dernier passage théorique du samedi vers Nantes à 18 h 50, sous réserve de confirmation officielle. Le vendredi, vérifier aussi le dernier retour avant de conseiller une séance tardive. Ne pas présenter les plages d'ouverture du spectacle comme des départs de séance. Les dates contradictoires du site organisateur (13 novembre-20 décembre contre 14 novembre-21 décembre) restent à résoudre par la billetterie, sans inventer de calendrier. Préserver durée, contraintes poussettes/PMR, restauration, photographies, licences, crédits et affiliation existante.

## Sources de départ
- https://aleop.paysdelaloire.fr/je-recherche-un-horaire-aleop
- https://hbus.fr/stop/allee-du-chateau-3-2d9b16dd-6fac-4362-b10c-e4bc195a12b5
- https://www.goulaine-spectacles.com/
- https://www.goulaine-spectacles.com/pratique

## Affiliation
Conserver le lien Booking.com vers l'Hôtel de la Louée; aucune autre offre vérifiée.

## Continuations internes
Ne pas développer les animations de Nantes: renvoyer au guide Noël à Nantes déjà présent. Ne pas remplacer les horaires du transporteur par une estimation. Ne pas modifier d'autres articles.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(11)/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/index.md

---
title: "Noël 2026 au château de Goulaine: dates, billets et conseils en famille"
subtitle: "Un spectacle immersif d'environ une heure près de Nantes: poussettes, accessibilité et accès à vérifier avant la sortie"
summary: Dates de Noël 2026, réservation, durée, contraintes avec les enfants, accessibilité, restauration et transports pour la Merveilleuse Histoire du Père Noël au château de Goulaine.
category: evenements
location:
  city: Haute-Goulaine
  department: Loire-Atlantique
  region: Pays de la Loire
image:
  src: "/images/articles/2026/11/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille.webp"
  alt: "Vue du château de Goulaine en Loire-Atlantique, hors spectacle de Noël 2026"
sources:
  - title: Polaris Spectacles - La Merveilleuse Histoire du Père Noël
    url: https://www.goulaine-spectacles.com/spectacle-1
  - title: Polaris Spectacles - Informations pratiques
    url: https://www.goulaine-spectacles.com/pratique
  - title: Polaris Spectacles - Programmation 2026
    url: https://www.goulaine-spectacles.com/
  - title: Placeminute - Billetterie 2026
    url: https://polaris-horslesmurs.placeminute.com/event/immersive-experience/polaris-presente-la-merveilleuse-histoire-du-pere-noel-2026-chateau-de-goulaine,47483.html
eventEndsAt: 2026-12-20
topic:
  key: evenements|haute-goulaine|noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille|2026
  keywords:
    - Merveilleuse Histoire du Père Noël Goulaine 2026
    - spectacle Noël château de Goulaine enfants
    - billets horaires Noël Haute-Goulaine
slug: noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille
status: published
publishedAt: 2026-11-03T15:35:55.581Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Haute-Goulaine
---
<!-- article-image-credit -->
*Photo: [Selbymay](https://commons.wikimedia.org/wiki/File:Haute-Goulaine_-_Chateau_08.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Au château de Goulaine, près de Nantes, **La Merveilleuse Histoire du Père Noël** invite les familles à traverser des décors féériques avec des comédiens plutôt qu'à assister à un spectacle assis. Le parcours dure **environ une heure, à l'intérieur du château**. Avant de réserver, retenez deux contraintes importantes: **les poussettes doivent rester à l'accueil** et l'organisateur annonce un parcours **non accessible aux personnes à mobilité réduite**.

## Dates, séances et billets de Noël 2026

La programmation générale de Polaris affiche **du 13 novembre au 20 décembre 2026**, mais certaines pages de présentation indiquent encore **du 14 novembre au 21 décembre**. Ces dates contradictoires proviennent du même organisateur: pour choisir une sortie, vérifiez les **séances effectivement proposées dans la billetterie 2026**, dont le lien figure dans les sources en bas d'article.

Les horaires généraux communiqués sont le vendredi de 18 h 30 à 23 h, le samedi de 9 h à 23 h et le dimanche de 9 h à 21 h. **Ce sont des plages d'ouverture, pas les heures de départ de chaque séance.** Le tarif final et les éventuelles conditions selon l'âge doivent également être vérifiés lors du choix des billets: aucun tarif enfant ni accès gratuit pour les tout-petits n'a pu être confirmé de manière fiable.

## À quoi s'attendre avec les enfants ?

<!-- article-image-body:01 -->

![Détail d'un plafond Renaissance à l'intérieur du château de Goulaine, hors spectacle de Noël](/images/articles/2026/11/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille-body-01.webp)

*Photo: [Caugris](https://commons.wikimedia.org/wiki/File:Plafond_au_ch%C3%A2teau_de_Goulaine.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le spectacle fait découvrir une dizaine de mises en scène autour de l'histoire du Père Noël, notamment des ateliers, des jouets, des lutins et des personnages costumés. C'est une formule à privilégier si vos enfants aiment avancer au fil d'une histoire vivante. Pour ceux qui supportent difficilement un parcours d'une heure, prenez en compte la durée avant d'acheter.

**Avec un bébé**, un porte-bébé peut être utile: Polaris précise que les poussettes ne sont pas admises dans le spectacle et doivent être déposées à l'accueil. Les **toilettes sont annoncées à l'issue du parcours**; anticipez les besoins des enfants avant d'entrer. Aucun espace de change n'est confirmé dans les informations publiées.

**Accessibilité:** l'organisateur indique expressément que le spectacle n'est pas accessible aux personnes à mobilité réduite. Si un membre de la famille rencontre des difficultés de déplacement, contactez Polaris avant de réserver. Aucun âge minimum n'est confirmé dans les informations officielles consultées.

## Comment venir et manger sur place ?

Le château se trouve **allée du Château, 44115 Haute-Goulaine**, à environ quinze minutes de Nantes selon l'organisateur. Un parking est annoncé. Polaris indique aussi le **car Aléop 331, arrêt « Allée du Château »**: consultez les horaires en vigueur à votre date, surtout pour le retour après une séance du soir.

Une **buvette et de la restauration** sont annoncées sur place. La présence d'un repas complet, d'une offre pour bébé ou de services particuliers n'est toutefois pas confirmée: mieux vaut en tenir compte pour une sortie à l'heure du dîner.

Si vous passez la journée dans la région, notre [guide de Noël à Nantes 2026](https://www.fam-space.fr/articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/) présente les animations de la ville. Ce sont deux sorties différentes, avec un déplacement à organiser entre Nantes et Haute-Goulaine.

## Dormir près du château

Pour une famille qui vient de plus loin, l'[Hôtel de la Louée à Haute-Goulaine sur Booking.com](https://www.booking.com/hotel/fr/ha-tel-de-la-loua-c-e.fr.html) constitue une piste de séjour à examiner. Vérifiez la capacité réelle de la chambre selon le nombre et l'âge des enfants, les disponibilités et le prix pour vos dates: une chambre triple ne convient pas automatiquement à quatre personnes.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/ | Noël à Trévarez 2026 en famille: dates, horaires et réservation | evenements | Saint-Goazec, Finistère, Bretagne
- /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | Noël des Siècles 2026 à Champs-sur-Marne: billets, budget et horaires en famille | evenements | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille/ | Traîneau flottant de Noël à Metz 2026: dates, horaires et embarquement | evenements | Metz, Moselle, Grand Est
- /articles/evenements/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants/ | Fontaines dansantes d'hiver à Metz 2026-2027: dates, horaires et conseils en famille | evenements | Metz, Moselle, Grand Est
- /articles/evenements/train-de-noel-de-la-haute-somme-2026-en-famille-dates-tarifs-et-reservation/ | Train de Noël de la Haute Somme 2026 en famille: dates, tarifs et réservation | evenements | La Neuville-les-Bray, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | Noël 2026 à Chantilly: Le Noël oublié, billets et séances en famille | evenements | Chantilly, Oise, Hauts-de-France
- /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | Noël 2026 au château de Goulaine: dates, billets et conseils en famille | evenements | Haute-Goulaine, Loire-Atlantique, Pays de la Loire
- /articles/sorties/ocearium-du-croisic-en-famille-animations-tarifs-et-visite/ | Océarium du Croisic en famille: animations, tarifs et visite | sorties | Le Croisic, Loire-Atlantique, Pays de la Loire
- /articles/bons-plans/chateau-de-chateaubriant-en-famille-une-sortie-a-petit-budget/ | Château de Châteaubriant en famille, une sortie à petit budget | bons-plans | Châteaubriant, Loire-Atlantique, Pays de la Loire
- /articles/bons-plans/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites/ | Pass Nantes en famille en 2026: tarifs, visites incluses et alternatives gratuites | bons-plans | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | Noël à Nantes 2026: marché de Noël et Voyage en hiver en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | Festi'Mômes 2026 à Nantes: séances, spectacles et tarifs en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP à Nantes: où aller avec un enfant de moins de 6 ans ? | parentalite | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/cuisine/atelier-cuisine-parent-enfant-a-nantes-gratuit-au-breil-ou-cours-prive/ | Ateliers cuisine parent-enfant à Nantes: où cuisiner ensemble? | cuisine | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/maison/broyeur-de-vegetaux-a-nantes-metropole-acheter-a-plusieurs-ou-profiter-des-operations-gratuites/ | Broyeur de végétaux à Nantes Métropole: acheter à plusieurs ou profiter des opérations gratuites ? | maison | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/vie-pratique/tarification-solidaire-naolib-a-nantes-combien-paie-une-famille-et-comment-faire-la-demande/ | Tarification solidaire Naolib à Nantes: combien paie une famille et comment faire la demande? | vie-pratique | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/chambly-kids-festival-2027-quatre-spectacles-pour-les-enfants-dates-et-ages/ | Chambly Kids Festival 2027: quatre spectacles pour les enfants, dates et âges | evenements | Chambly, Oise, Hauts-de-France
- /articles/evenements/festival-tete-de-mioche-2027-a-l-horme-quels-spectacles-choisir-avec-les-enfants/ | Festival Tête de mioche 2027 à L'Horme: quels spectacles choisir avec les enfants ? | evenements | L'Horme, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/festival-mini-kids-2027-aux-orres-trois-jours-pour-les-3-6-ans/ | Festival Mini Kids 2027 aux Orres, trois jours pour les 3-6 ans | evenements | Les Orres, Hautes-Alpes, Provence-Alpes-Côte d’Azur
- /articles/evenements/fete-du-citron-2027-a-menton-en-famille-que-voir-et-combien-prevoir/ | Fête du Citron 2027 à Menton en famille: que voir et combien prévoir ? | evenements | Menton, Alpes-Maritimes, Provence-Alpes-Côte d’Azur

### Historique Radar lié

- opportunity | /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | 2026-10-17T11:48:00.184Z
- opportunity | /articles/evenements/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants/ | 2026-11-03T06:32:33.600Z
- refresh | /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | 2026-10-17T18:40:41.973Z
- refresh | /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | 2026-11-02T06:34:10.210Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | 2026-10-26T21:31:06.119Z
- refresh | /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | 2026-11-12T18:32:15.897Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | 2026-11-03T15:36:10.146Z
- opportunity | /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | 2026-10-24T15:27:41.430Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
