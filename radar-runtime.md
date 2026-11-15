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
title: "Le PAL 2027 en famille: une ou deux journées entre animaux et attractions ?"
subtitle: Billets, tailles d'accès, parcours et hébergements dans l'Allier
summary: Une journée ou deux au PAL en 2027 ? Comparez les billets, préparez les attractions selon la taille des enfants et trouvez où dormir près du parc.
slug: le-pal-2027-en-famille-une-ou-deux-journees-entre-animaux-et-attractions
status: published
publishedAt: 2026-11-05T13:02:56+01:00
updatedAt: null
category: activites
readingTime: 4
location:
  city: Saint-Pourçain-sur-Besbre
  department: Allier
  region: Auvergne-Rhône-Alpes
topic:
  key: activites|saint-pourcain-sur-besbre|le-pal-2027-en-famille-une-ou-deux-journees-entre-animaux-et-attractions|2026
  keywords:
    - Le PAL 2027 en famille
    - visiter Le PAL avec enfants
    - billets Le PAL 2027
image:
  src: /images/articles/2026/11/le-pal-2027-en-famille-une-ou-deux-journees-entre-animaux-et-attractions.webp
  alt: Éléphants photographiés dans le parc animalier Le PAL en 2016.
sources:
  - title: Le PAL - parc animalier et attractions
    url: https://www.lepal.com/
  - title: Le PAL - tarifs et billets
    url: https://www.lepal.com/preparer-votre-visite/tarifs-et-achats-des-billets
  - title: Le PAL - calendrier et horaires
    url: https://www.lepal.com/preparer-votre-visite/calendrier-et-horaires
  - title: Le PAL - accès et services
    url: https://www.lepal.com/preparer-votre-visite/page/acces-et-services
  - title: Le PAL - FAQ tout-petits
    url: https://www.lepal.com/a-propos/faq/nos-tout-petits
  - title: Le PAL - application
    url: https://www.lepal.com/preparer-votre-visite/application
  - title: Le PAL - séjours
    url: https://www.lepal.com/sejours/toutes-les-offres
affiliate:
  enabled: true
  type: travel
  destination: Saint-Pourçain-sur-Besbre
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/activites/(2026)/(11)/le-pal-2027-en-famille-une-ou-deux-journees-entre-animaux-et-attractions/index.md
  targetSha: 9df6488aeb9339b3a038b07b35b89903b8b5d6ee
  targetUrl: /articles/activites/le-pal-2027-en-famille-une-ou-deux-journees-entre-animaux-et-attractions/
  decision: Choisir une date et une formule 2027 adaptées à une vraie visite du parc avec attractions, ou à un séjour animalier, sans confondre les deux.
  affiliationPotential: Conserver les deux hébergements Booking.com déjà présents; comparer utilement avec les séjours officiels du PAL sans ajouter de partenaire artificiel.
  gsc:
    retrievedAt: 2026-11-15T10:29:35+01:00
    dataThrough: 2026-11-13
    signal: uncertain
    basis: "Visibilité récente : 34 impressions sur trois jours, puis 10 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-06
    peakEnd: 2026-11-08
    recentStart: 2026-11-11
    recentEnd: 2026-11-13
    peakImpressions: 34
    recentImpressions: 10
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0.083
    focusQueries:
      - le pal ouverture 2027
      - ouverture le pal 2027
      - ouverture pal 2027
      - date ouverture le pal 2027
---

## Mission retenue
Actualiser le guide familial du PAL 2027 sur la différence entre les journées de visite du parc et les séjours « Été indien » aux Lodges.

## Pourquoi cette mission
Le signal GSC est incertain (34 puis 10 impressions sur trois jours), sans recul de classement démontré. Une lacune indépendante est vérifiée: le guide conseille de contrôler les jours d'ouverture mais ne distingue pas l'offre « Été indien » 2027, qui donne accès au parc animalier réservé aux résidents des Lodges, de la visite habituelle combinant animaux et attractions.

## Décision du lecteur
Comprendre ce qu'il pourra réellement faire aux dates choisies, notamment en octobre-novembre, avant d'acheter billets et hébergement.

## Faits à traiter
- Distinguer les dates et conditions du parc ordinaire de l'offre Lodges « Été indien » annoncée du 9 octobre au 6 novembre 2027; ne pas présenter cette dernière comme un billet d'entrée classique ni promettre l'accès aux attractions.
- Rendre plus explicite le renvoi au calendrier officiel 2027 pour les recherches sur l'ouverture, sans inventer une date unique d'ouverture ni recopier des jours non vérifiés.
- Préserver intégralement les comparaisons de billets 1/2 jours, les règles de taille, Babyswitch, poussettes, repas, accès, les deux liens Booking.com et les trois photos avec crédits et licences.

## Sources de départ
- Le PAL, calendrier 2027: https://www.lepal.com/preparer-votre-visite/calendrier-et-horaires
- Le PAL, séjours et offre Été indien 2027: https://www.lepal.com/sejours/toutes-les-offres
- Le PAL, billets: https://www.lepal.com/preparer-votre-visite/tarifs-et-achats-des-billets

## Affiliation
Conserver les offres Booking.com existantes, sans changement injustifié.

## Continuations internes
Ne pas développer une nouvelle page sur les séjours; rester centré sur la décision une ou deux journées et la bonne période de visite.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/activites/(2026)/(11)/le-pal-2027-en-famille-une-ou-deux-journees-entre-animaux-et-attractions/index.md

---
title: "Le PAL 2027 en famille: une ou deux journées entre animaux et attractions ?"
subtitle: Billets, tailles d'accès, parcours et hébergements dans l'Allier
summary: Une journée ou deux au PAL en 2027 ? Comparez les billets, préparez les attractions selon la taille des enfants et trouvez où dormir près du parc.
slug: le-pal-2027-en-famille-une-ou-deux-journees-entre-animaux-et-attractions
status: published
publishedAt: 2026-11-05T13:02:56+01:00
updatedAt: null
category: activites
readingTime: 4
location:
  city: Saint-Pourçain-sur-Besbre
  department: Allier
  region: Auvergne-Rhône-Alpes
topic:
  key: activites|saint-pourcain-sur-besbre|le-pal-2027-en-famille-une-ou-deux-journees-entre-animaux-et-attractions|2026
  keywords:
    - Le PAL 2027 en famille
    - visiter Le PAL avec enfants
    - billets Le PAL 2027
image:
  src: "/images/articles/2026/11/le-pal-2027-en-famille-une-ou-deux-journees-entre-animaux-et-attractions.webp"
  alt: "Éléphants photographiés dans le parc animalier Le PAL en 2016."
sources:
  - title: Le PAL - parc animalier et attractions
    url: https://www.lepal.com/
  - title: Le PAL - tarifs et billets
    url: https://www.lepal.com/preparer-votre-visite/tarifs-et-achats-des-billets
  - title: Le PAL - calendrier et horaires
    url: https://www.lepal.com/preparer-votre-visite/calendrier-et-horaires
  - title: Le PAL - accès et services
    url: https://www.lepal.com/preparer-votre-visite/page/acces-et-services
  - title: Le PAL - FAQ tout-petits
    url: https://www.lepal.com/a-propos/faq/nos-tout-petits
  - title: Le PAL - application
    url: https://www.lepal.com/preparer-votre-visite/application
  - title: Le PAL - séjours
    url: https://www.lepal.com/sejours/toutes-les-offres
affiliate:
  enabled: true
  type: travel
  destination: Saint-Pourçain-sur-Besbre
---
<!-- article-image-credit -->
*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Le_Pal_-_2016.10.23_-_%C3%89l%C3%A9phants_3.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Au PAL, dans l'Allier, une même sortie permet d'observer des girafes, de découvrir des animaux de cinq continents et de profiter de manèges. Situé à Saint-Pourçain-sur-Besbre, près de Dompierre-sur-Besbre, ce parc de 40 hectares réunit **31 attractions et environ 1 000 animaux**. Avec des enfants, faut-il prévoir une journée ou prolonger la visite ? Tout dépend de leurs tailles, de leurs envies et du trajet pour venir.

## Animaux et attractions: comment organiser la visite ?

<!-- article-image-body:01 -->

![Montagnes russes Le Twist dans le parc d'attractions Le PAL.](/images/articles/2026/11/le-pal-2027-en-famille-une-ou-deux-journees-entre-animaux-et-attractions-body-01.webp)

*Photo: [Freddo](https://commons.wikimedia.org/wiki/File:Le_Twist_au_PAL.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Pour une première journée, choisissez quelques attractions prioritaires avant d'arriver. Les plus jeunes apprécieront souvent d'alterner manèges adaptés et observation des animaux, tandis que les plus grands voudront parfois commencer par les attractions à sensations.

Le parc propose aussi des présentations animalières et des animations pédagogiques, comprises dans le billet d'entrée. Consultez leurs horaires sur place: ils peuvent guider votre parcours sans vous obliger à traverser le parc plusieurs fois. Les [informations officielles du PAL](https://www.lepal.com/) présentent ses différents univers.

L'[application du parc](https://www.lepal.com/preparer-votre-visite/application) affiche notamment les temps d'attente, les horaires d'animations, le plan et les tailles d'accès aux attractions. Elle aide à ajuster le programme en fonction de l'affluence.

## La taille des enfants change les possibilités

Les restrictions d'accès aux attractions reposent sur des tailles minimales ou maximales propres à chaque manège. Vérifiez-les avant la visite, surtout si un enfant attend avec impatience une attraction précise.

**La taille sert aussi à calculer le tarif, mais selon des règles distinctes:**

- Moins de 1 mètre, chaussures comprises: entrée gratuite.
- À partir de 1 mètre et jusqu'à 9 ans inclus: tarif enfant.
- Dès 10 ans: tarif adulte.

Le parc décrit également un dispositif de **Babyswitch** pour les familles dont un enfant ne peut pas accéder à une attraction. Les conditions sont spécifiques: adressez-vous à l'opérateur avant de faire la queue, plutôt que de supposer que les deux adultes pourront se relayer automatiquement. La [FAQ officielle pour les tout-petits](https://www.lepal.com/a-propos/faq/nos-tout-petits) précise ce fonctionnement.

## Une journée ou deux jours au PAL ?

**Une journée** convient à une famille qui accepte de sélectionner ses activités. Commencez par les attractions les plus attendues, réservez du temps aux animaux et gardez des pauses pour les repas. Chercher à tout faire risque de transformer la visite en course.

**Deux jours consécutifs** sont plus confortables si vous venez de loin, si les enfants ont des envies très différentes ou si vous souhaitez profiter pleinement des espaces animaliers et des manèges. Vous pouvez répartir les deux univers entre les journées, sans suivre un parcours rigide.

Pour dormir près du parc, deux adresses à Dompierre-sur-Besbre peuvent convenir selon la composition de la famille: [L'Auberge de l'Olive sur Booking.com](https://www.booking.com/searchresults.fr.html?ss=L%27Auberge%20de%20l%27Olive%20Dompierre-sur-Besbre), pour une chambre, et [la maison « Logement, idéal famille, amis, tout y est ! » sur Booking.com](https://www.booking.com/hotel/fr/maison-ideale-famille-amis-tout-y-est.fr.html), avec cuisine et plusieurs chambres. Vérifiez la fiche exacte, la capacité, le tarif et la disponibilité aux dates souhaitées en 2027.

Le PAL dispose aussi de ses propres hébergements immersifs, les Lodges et l'hôtel Savana RESERVE. Les prestations et les billets éventuellement inclus varient selon la formule: comparez le coût total du séjour avant de choisir.

## Billets 2027: quelles différences de prix ?

Les tarifs actuellement annoncés en ligne pour 2027 distinguent trois formules:

- **Billet Malin, une journée datée**: dès 33 € par adulte et 28 € par enfant. Achat en ligne au plus tard la veille de la visite.
- **Billet Liberté, une journée non datée**: 41 € par adulte et 35 € par enfant.
- **Billet Passion, deux jours consécutifs datés**: 59 € par adulte et 49 € par enfant.

Pour un adulte, le billet Passion à 59 € revient moins cher que deux billets Liberté à 41 €, mais il impose deux journées consécutives. Le billet Malin peut être plus économique pour une visite fixée à l'avance, selon la date retenue.

Ces prix ne sont pas garantis pour toute la saison. Consultez la [billetterie officielle](https://www.lepal.com/preparer-votre-visite/tarifs-et-achats-des-billets) pour les conditions actualisées et le [calendrier 2027](https://www.lepal.com/preparer-votre-visite/calendrier-et-horaires) avant de réserver un hébergement: le parc n'est pas ouvert toute l'année.

## Poussette, repas et trajet: les points pratiques

<!-- article-image-body:02 -->

![Train touristique circulant dans le parc Le PAL.](/images/articles/2026/11/le-pal-2027-en-famille-une-ou-deux-journees-entre-animaux-et-attractions-body-02.webp)

*Photo: [Freddo](https://commons.wikimedia.org/wiki/File:Train_du_parc_Le_PAL.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Le parc dispose d'aires de pique-nique, de restaurants et de parkings gratuits. Une poussette est proposée à la location pour **9 € par jour**, avec une empreinte bancaire de **50 €**, selon la FAQ officielle. Des espaces de change sont installés dans les sanitaires, à l'exception de ceux de la Place de la Gaieté. Des bracelets d'identification gratuits pour les enfants sont disponibles à l'entrée.

Le PAL se rejoint surtout en voiture. Pour venir en train, renseignez-vous sur les correspondances depuis la gare de Dompierre-Sept-Fons et sur les éventuelles navettes à la date de votre visite: leur fonctionnement n'est pas à présumer pour 2027. Retrouvez les renseignements sur la [page d'accès et de services](https://www.lepal.com/preparer-votre-visite/page/acces-et-services).

Si vous prévoyez deux jours, choisissez d'abord les dates d'ouverture et le billet adapté, puis réservez votre nuit: cela évite de payer un hébergement pour une journée où le parc serait fermé.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/le-pal-ou-touroparc-en-famille-quel-parc-choisir-en-2026/ | Le PAL ou Touroparc en famille: quel parc choisir en 2026? | activites
- /articles/voyages/parc-asterix-en-famille-en-2026-une-ou-deux-journees-quel-hotel-et-quel-budget-prevoir/ | Parc Astérix en famille en 2026: une ou deux journées, quel hôtel et quel budget prévoir | voyages | Plailly, Oise, Hauts-de-France
- /articles/sorties/sortie-ferme-pedagogique-en-famille/ | Ferme pédagogique en famille: comment choisir une visite adaptée aux enfants | sorties
- /articles/voyages/azay-le-rideau-en-famille-une-journee-entre-chateau-et-troglodytes/ | Azay-le-Rideau en famille: une journée entre château et troglodytes | voyages | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/journees-europeennes-patrimoine-2026-en-famille/ | Journées du patrimoine 2026: choisir une visite adaptée aux enfants | evenements
- /articles/evenements/festival-les-martinelles-2026-en-famille/ | Les Martinelles à Saint-Martin-de-Ré: deux journées gratuites pour les enfants | evenements | Saint-Martin-de-Ré, Charente-Maritime, Nouvelle-Aquitaine
- /articles/bons-plans/albi-en-famille-a-petit-budget-deux-programmes-entre-patrimoine-et-musee/ | Albi en famille à petit budget: deux programmes entre patrimoine et musée | bons-plans | Albi, Tarn, Occitanie
- /articles/evenements/journees-nationales-architecture-2026-en-famille/ | Journées de l’architecture 2026: visiter un chantier ou une agence avec des enfants | evenements
- /articles/activites/le-pal-2027-en-famille-une-ou-deux-journees-entre-animaux-et-attractions/ | Le PAL 2027 en famille: une ou deux journées entre animaux et attractions ? | activites | Saint-Pourçain-sur-Besbre, Allier, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-cusset-2026-en-famille-quel-jour-choisir/ | Marché de Noël de Cusset 2026 en famille: quel jour choisir? | evenements | Cusset, Allier, Auvergne-Rhône-Alpes
- /articles/voyages/moulins-sans-voiture-avec-des-enfants-ou-dormir-et-comment-organiser-deux-jours/ | Moulins sans voiture avec des enfants: où dormir et comment organiser deux jours | voyages | Moulins, Allier, Auvergne-Rhône-Alpes
- /articles/sorties/cncs-a-moulins-avec-des-enfants-gratuit-avant-12-ans-que-choisir-sur-place/ | CNCS à Moulins avec des enfants: gratuit avant 12 ans, que choisir sur place? | sorties | Moulins, Allier, Auvergne-Rhône-Alpes
- /articles/voyages/vichy-en-famille-ou-dormir-selon-votre-programme/ | Où dormir à Vichy en famille: quartiers et hôtels selon votre programme | voyages | Vichy, Allier, Auvergne-Rhône-Alpes
- /articles/activites/parc-animalier-des-angles-en-famille-quel-circuit-choisir-et-comment-preparer-la-visite/ | Parc animalier des Angles en famille: quel circuit choisir et comment préparer la visite ? | activites | Les Angles, Pyrénées-Orientales, Occitanie
- /articles/activites/parc-phoenix-a-nice-en-famille-serre-tropicale-animaux-et-jeux/ | Parc Phoenix à Nice en famille: serre tropicale, animaux et jeux | activites | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/activites/les-z-accroches-pres-de-nevers-quel-accrobranche-choisir-avec-des-enfants/ | Les Z'Accrochés près de Nevers: quel accrobranche choisir avec des enfants? | activites | Sauvigny-les-Bois, Nièvre, Bourgogne-Franche-Comté
- /articles/activites/musee-de-la-ceramique-de-desvres-en-famille-visite-ateliers-et-tarifs/ | Musée de la Céramique de Desvres en famille: visite, ateliers et tarifs | activites | Desvres, Pas-de-Calais, Hauts-de-France
- /articles/activites/lewarde-en-famille-decouvrir-la-mine-et-la-vie-des-mineurs/ | Lewarde en famille: découvrir la mine et la vie des mineurs | activites | Lewarde, Nord, Hauts-de-France
- /articles/activites/cremieu-en-famille-balade-gratuite-dans-la-cite-medievale/ | Crémieu en famille: balade gratuite dans la cité médiévale | activites | Crémieu, Isère, Auvergne-Rhône-Alpes
- /articles/activites/corderie-royale-de-rochefort-en-famille-visite-tarifs-et-ateliers/ | Corderie Royale de Rochefort en famille: visite, tarifs et ateliers | activites | Rochefort, Charente-Maritime, Nouvelle-Aquitaine
- /articles/activites/musee-de-l-air-et-de-l-espace-au-bourget-quel-parcours-en-famille/ | Musée de l’Air et de l’Espace au Bourget: quel parcours en famille? | activites | Le Bourget, Seine-Saint-Denis, Île-de-France
- /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | Atelier bâton de pluie gratuit à Paris le 18 novembre 2026: dès 6 ans | activites | Paris, Paris, Île-de-France

### Historique Radar lié

- opportunity | /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | 2026-11-06T12:30:50.449Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
