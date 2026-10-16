# Radar Fam Space - Phase 2/3

## Mission

Radar utilise Google Search Console et la recherche web pour choisir le travail éditorial qui apporte le plus de valeur à Fam Space: améliorer une page réellement perfectible, développer une intention proche d'une page forte, ou publier à temps une opportunité locale/saisonnière. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 2/3

Tu es journaliste web et responsable du parcours lecteur. Le candidat validé de phase 1 est fourni intégralement plus bas. Pour un refresh, l'article source exact est fourni intégralement plus bas.

Un refresh utilise l'ancien article comme référence interne, mais le résultat doit se lire comme un article actuel et autonome. Toute information encore vraie et utile doit rester, notamment prix décisionnels, durées, réservation, âge/taille, accessibilité, accès, contraintes, services bébé/enfants, repas et autres détails pratiques; une information fausse, périmée ou réellement redondante peut être retirée.

Suis le diagnostic éditorial du brief:
- `rank_loss`: réponds mieux aux intentions réellement en recul;
- `coverage_loss`: améliore la couverture utile sans présenter cela comme une perte de ranking;
- `uncertain`: applique uniquement la raison éditoriale indépendante vérifiée;
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
title: "Halloween au Château de Villersexel 2026 en famille: quelle expérience choisir?"
subtitle: "Parc gratuit, visite familiale ou parcours horrifique: trois ambiances très différentes les 30 et 31 octobre"
summary: "Parc gratuit, Château des Oubliés ou Cave des Clowns Maudits: les différences à connaître avant Halloween 2026 à Villersexel."
slug: halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir
status: published
publishedAt: 2026-09-27T20:24:24+02:00
updatedAt: 2026-09-28T03:20:37+02:00
eventEndsAt: 2026-10-31
category: evenements
readingTime: 4
location:
  city: Villersexel
  department: Haute-Saône
  region: Bourgogne-Franche-Comté
topic:
  key: evenements|villersexel|halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir|2026
  keywords:
    - Halloween Villersexel 2026
    - Château de Villersexel Halloween famille
image:
  src: /images/articles/2026/09/halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir.webp
  alt: Façade du Château de Villersexel
sources:
  - title: Château de Villersexel - Halloween 2026
    url: https://www.villersexel.com/halloween2026.html
  - title: Haute-Saône Tourisme - Festival de l'horreur
    url: https://hautesaonetourisme.com/offres/festival-de-lhorreur-villersexel-fr-4913213/
  - title: Château de Villersexel - Visites du château
    url: https://www.villersexel.com/visites-chateau-villersexel.html
affiliate:
  enabled: true
  type: travel
  destination: Villersexel
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(09)/halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir/index.md
  targetSha: 861d00d625592568f8342fcc6495d15f89a35816
  targetUrl: /articles/evenements/halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir/
  decision: Choisir sans erreur entre le parc gratuit, la visite familiale et la cave réservée aux 12 ans et plus, puis décider si la réservation prioritaire est utile pour les soirées des 30 et 31 octobre.
  affiliationPotential: "Conserver, si toujours pertinent, le lien Booking.com existant vers l'Auberge de la Terrasse à Villersexel (chambres familiales et parking annoncés, sans disponibilité garantie aux dates concernées). Aucun partenaire billetterie équivalent aux parcours Halloween identifié: Billetto et les autres liens officiels d'achat restent dans les Sources, pas en concurrence dans le corps."
  gsc:
    retrievedAt: 2026-10-16T04:49:29.006Z
    dataThrough: 2026-10-13
    signal: coverage_loss
    basis: Exposition en baisse avec classement comparable; ne prouve pas une désindexation.
    peakStart: 2026-09-30
    peakEnd: 2026-10-06
    recentStart: 2026-10-07
    recentEnd: 2026-10-13
    peakImpressions: 326
    recentImpressions: 204
    commonQueries: 1
    positionDelta: 1.801
    impressionRatio: 0.246
    focusQueries:
      - chateau villersexel halloween
      - chateau de villersexel halloween
      - halloween chateau villersexel
      - en famille avec des enfants
---

## Mission retenue

Actualiser l'article déjà publié sur **Halloween au Château de Villersexel**, les **30 et 31 octobre 2026**, sans le remplacer ni en allonger inutilement le texte. Les trois expériences existantes restent distinctes: parc gratuit, **Château des Oubliés** familial à 5 € et **Cave des Clowns Maudits** horrifique à 10 €.

## Pourquoi cette mission

Le snapshot GSC indique une baisse d'exposition avec signal `coverage_loss`, sans preuve de désindexation ni de perte de rang. Surtout, la page actuelle contient **deux erreurs pratiques indépendamment vérifiées**: elle affirme qu'aucun âge minimum chiffré n'est annoncé pour la cave et que la billetterie est encore « bientôt disponible ». Le site de l'organisateur indique au contraire **accès strictement interdit aux moins de 12 ans** et **réservation Billetto déjà ouverte**, facultative mais prioritaire. Corriger ces points avant le 30 octobre protège la décision des familles. Les autres refresh GSC, notamment cantine Essonne et carte Tattoo Isère, ont un signal incertain et des articles déjà exploitables; une expansion depuis les pages fortes risquerait de redoubler les guides Halloween et sorties déjà publiés. Une nouvelle opportunité saisonnière locale se heurterait à de nombreuses pages d'octobre existantes et à Publication/Destination déjà en cours.

## Décision du lecteur

Savoir **quelle expérience est permise et adaptée à l'âge de l'enfant**, quel billet correspond à chaque partie de la soirée et **s'il faut réserver pour réduire l'attente**, sans croire qu'un billet comprend toutes les activités.

## Faits à traiter

- Corriger impérativement la limite **12 ans minimum pour les sous-sols**; elle ne concerne ni le parc gratuit ni le Château des Oubliés.
- Remplacer « billetterie bientôt disponible » par **Billetto ouverte**, réservations **facultatives mais prioritaires**; une attente reste possible à cause de la capacité de chaque boucle, même avec priorité. Chaque parcours intérieur demande son propre billet.
- Distinguer **Billetto** pour les deux parcours Halloween de la billetterie **Godin Events** pour les soirées dansantes; l'accueil des soirées Godin est annoncé dès 21 h 30, la partie dansante à partir de 23 h. Pas d'inclusion croisée.
- Préserver les données encore utiles: les **30-31 octobre**, parc et visites **18 h-23 h** selon l'organisateur (une fiche tourisme moins précise annonçait 17 h), prix **0/5/10 €**, exposition extérieure et restauration, ambiance familiale vs horrifique, masques intégraux à retirer en intérieur, adresse **63 place de l'Hôtel-de-Ville, 70110 Villersexel**, photos et crédits, hébergement facultatif. Garder `eventEndsAt: 2026-10-31`.
- Raccourcir les répétitions sur les trois options plutôt que supprimer des informations familiales utiles. Éviter tout lien officiel direct ou indirect menant à l'achat dans le corps lorsqu'il concurrence la logique partenaire; les URLs de vérification restent dans le frontmatter `sources`.

## Sources de départ

- Château de Villersexel, programmation et modalités de priorité: https://www.villersexel.com/halloween2026.html
- Haute-Saône Tourisme, fiche événement et éventuelle divergence horaire: https://hautesaonetourisme.com/offres/festival-de-lhorreur-villersexel-fr-4913213/
- Booking.com, existence de l'hébergement familial déjà cité: https://www.booking.com/hotel/fr/auberge-de-la-terrasse.fr.html

## Affiliation

La réservation des parcours se fait chez l'organisateur via **Billetto**, sans partenaire alternatif confirmé: ne pas inventer d'offre équivalente. Maintenir seulement, si sa pertinence est confirmée, l'hébergement Booking.com à Villersexel pour les familles venant de loin, sans promettre de chambre disponible.

## Continuations internes

- Conserver cette page centrée sur les **trois expériences du Château de Villersexel et leurs deux billetteries**, sans développer un guide Halloween régional.
- Conserver les liens internes seulement lorsqu'ils apportent une information complémentaire réelle; aucun nouveau doublon ne justifie un détour.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(09)/halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir/index.md

---
title: "Halloween au Château de Villersexel 2026 en famille: quelle expérience choisir?"
subtitle: "Parc gratuit, visite familiale ou parcours horrifique: trois ambiances très différentes les 30 et 31 octobre"
summary: "Parc gratuit, Château des Oubliés ou Cave des Clowns Maudits: les différences à connaître avant Halloween 2026 à Villersexel."
slug: halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir
status: published
publishedAt: 2026-09-27T20:24:24+02:00
updatedAt: 2026-09-28T03:20:37+02:00
eventEndsAt: 2026-10-31
category: evenements
readingTime: 4
location:
  city: Villersexel
  department: Haute-Saône
  region: Bourgogne-Franche-Comté
topic:
  key: evenements|villersexel|halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir|2026
  keywords:
    - Halloween Villersexel 2026
    - Château de Villersexel Halloween famille
image:
  src: "/images/articles/2026/09/halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir.webp"
  alt: "Façade du Château de Villersexel"
sources:
  - title: Château de Villersexel - Halloween 2026
    url: https://www.villersexel.com/halloween2026.html
  - title: Haute-Saône Tourisme - Festival de l'horreur
    url: https://hautesaonetourisme.com/offres/festival-de-lhorreur-villersexel-fr-4913213/
  - title: Château de Villersexel - Visites du château
    url: https://www.villersexel.com/visites-chateau-villersexel.html
affiliate:
  enabled: true
  type: travel
  destination: Villersexel
---
<!-- article-image-credit -->
*Photo: [Corinnepotet , retouched by A.BourgeoisP](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Villersexel_fa%C3%A7ade.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Les 30 et 31 octobre 2026, le Château de Villersexel, en Haute-Saône, transforme son domaine pour « Le Cirque des Squelettes ». L'événement ne propose pas une seule visite d'Halloween, mais trois expériences indépendantes: un parc extérieur gratuit, une visite familiale du château et un parcours d'horreur dans les sous-sols.

C'est la différence essentielle à comprendre avant de venir avec des enfants. Le [programme officiel du Château](https://www.villersexel.com/halloween2026.html) présente clairement le Château des Oubliés comme une expérience familiale, tandis que la Cave des Clowns Maudits est volontairement conçue pour faire peur.

## Le parc gratuit pour profiter de l'ambiance sans visite payante

Le parc extérieur est accessible gratuitement et sans billet. Des exposants, des food trucks et des décors d'Halloween sont annoncés autour du château mis en lumière.

Cette formule permet de venir simplement pour l'ambiance, de manger sur place ou de découvrir le décor sans engager toute la famille dans une visite intérieure. Elle est présentée comme tout public.

Le parc peut aussi servir de point de départ si certains membres de la famille veulent ensuite visiter le château tandis que d'autres préfèrent rester dehors.

## Le Château des Oubliés pour une visite familiale

<!-- article-image-body:01 -->

![Grand salon à l'intérieur du Château de Villersexel](/images/articles/2026/09/halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir-body-01.webp)

*Photo: [corinne potet](https://commons.wikimedia.org/wiki/File:Grand_salon,_Chateau_de_Villersexel_-_panoramio.jpg) - [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le Château des Oubliés coûte **5 € par personne**. Il se déroule dans les salons du château, avec des décors, des histoires et quelques surprises.

L'organisateur précise que cette visite est pensée pour les familles et qu'elle n'est pas conçue comme un parcours d'horreur. L'ambiance reste mystérieuse et liée à Halloween, mais l'objectif n'est pas de provoquer la peur comme dans la cave.

C'est donc l'option la plus adaptée si vous voulez entrer dans le château avec des enfants sans les emmener dans l'expérience horrifique.

Les deux visites intérieures étant indépendantes, il n'est pas nécessaire d'acheter la cave pour accéder au Château des Oubliés.

## La Cave des Clowns Maudits n'est pas une animation pour jeunes enfants

La Cave des Clowns Maudits coûte **10 € par personne**. Cette fois, le parcours se déroule dans l'obscurité des sous-sols, avec des comédiens et des animations horrifiques.

Le Château indique explicitement que l'expérience peut ne pas convenir aux jeunes enfants ou aux personnes sensibles. Les entrées sont régulées afin de conserver l'immersion et de limiter l'attente.

Il n'existe pas d'âge minimum chiffré annoncé. Pour une famille, il vaut donc mieux se baser sur la sensibilité réelle de l'enfant plutôt que considérer cette cave comme la suite automatique de la visite familiale.

## À quelle heure commence Halloween à Villersexel?

La page officielle du Château annonce une ouverture **à partir de 18 h** les vendredi 30 et samedi 31 octobre 2026.

Il existe toutefois une différence avec la fiche de [Haute-Saône Tourisme](https://hautesaonetourisme.com/offres/festival-de-lhorreur-villersexel-fr-4913213/), qui affiche actuellement un début à **17 h** les deux jours tout en précisant que ses horaires ne sont pas garantis. Le Château étant l'organisateur direct, retenez donc 18 h à ce stade et revérifiez sa page officielle avant le départ.

Une soirée dansante distincte est annoncée à partir de **23 h**. Elle possède sa propre organisation et sa propre billetterie: elle ne fait pas partie des visites d'Halloween.

## Faut-il réserver?

Le parc extérieur ne nécessite aucun billet. Pour le Château des Oubliés et la Cave des Clowns Maudits, la réservation est recommandée.

Au moment de la publication, la [billetterie Halloween du Château](https://www.villersexel.com/halloween2026.html) est annoncée comme « bientôt disponible ». Si vous visez la cave, réserver dès l'ouverture des ventes est particulièrement pertinent puisque les entrées y sont régulées.

## Peut-on venir déguisé?

Oui. Les déguisements sont les bienvenus.

Pour des raisons de sécurité, les masques qui couvrent entièrement le visage doivent toutefois être retirés avant d'entrer dans les espaces intérieurs. C'est une contrainte à prévoir si le déguisement d'un enfant repose principalement sur un masque intégral.

## Où se trouve le Château de Villersexel?

Le Château se trouve au **63, place de l'Hôtel-de-Ville, 70110 Villersexel**. Il s'agit d'une demeure du XIXe siècle toujours habitée, avec des salons historiques ouverts à la visite pendant sa saison habituelle. La [présentation des visites du domaine](https://www.villersexel.com/visites-chateau-villersexel.html) permet de voir le type d'espaces intérieurs que l'on retrouve dans le parcours.

## Dormir à Villersexel si vous venez de loin

Pour une famille qui préfère éviter de reprendre la route après une soirée d'Halloween, [l'Auberge de la Terrasse à Villersexel](https://www.booking.com/hotel/fr/auberge-de-la-terrasse.fr.html) propose des chambres familiales et un parking gratuit. Les tarifs et disponibilités varient selon la composition de la famille et la date: vérifiez les conditions au moment de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | Halloween 2026 au château de Couches: atelier citrouille et jeu Mystères & Sortilèges | evenements | Couches, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | Monument jeu d'enfant 2026 au château de Vincennes: quel atelier choisir ? | evenements | Vincennes, Val-de-Marne, Île-de-France
- /articles/sorties/chateau-de-kerjean-avec-des-enfants-combien-de-temps-prevoir-et-quel-billet-choisir/ | Château de Kerjean avec des enfants: combien de temps prévoir et quel billet choisir? | sorties | Saint-Vougay, Finistère, Bretagne
- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/sorties/chateau-de-chambord-en-famille-tarifs-2026-activites-et-conseils-de-visite/ | Château de Chambord en famille: tarifs 2026, activités et conseils de visite | sorties | Chambord, Loir-et-Cher, Centre-Val de Loire
- /articles/activites/chateau-de-biron-avec-des-enfants-tarifs-et-conseils-pour-la-visite/ | Château de Biron avec des enfants: tarifs et conseils pour la visite | activites | Biron, Dordogne, Nouvelle-Aquitaine
- /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | Abracada BOUH 2026 à Montpellier: programme et tarifs au château de Flaugergues | evenements | Montpellier, Hérault, Occitanie
- /articles/sorties/chateau-de-chenonceau-en-famille-billets-duree-et-conseils-avec-des-enfants/ | Château de Chenonceau en famille: billets, durée et conseils avec des enfants | sorties | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir/ | Halloween au Château de Villersexel 2026 en famille: quelle expérience choisir? | evenements | Villersexel, Haute-Saône, Bourgogne-Franche-Comté
- /articles/voyages/week-end-aux-1000-etangs-avec-des-enfants-ou-se-poser-et-quoi-faire-sans-grosse-randonnee/ | Week-end aux 1000 Étangs avec des enfants: où se poser et quoi faire sans grosse randonnée | voyages | Mélisey, Haute-Saône, Bourgogne-Franche-Comté
- /articles/sorties/chapelle-de-ronchamp-en-famille-tarifs-2026-et-conseils-de-visite/ | Chapelle de Ronchamp en famille: tarifs 2026 et conseils de visite | sorties | Ronchamp, Haute-Saône, Bourgogne-Franche-Comté
- /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | Automnales d'Harcourt 2026: animations, visites et tarifs en famille | evenements | Harcourt, Eure, Normandie
- /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | Toussaint 2026 au musée des Confluences: cinq rendez-vous pour les enfants | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/toussaint-2026-au-seaquarium-du-grau-du-roi-quel-jeu-choisir/ | Toussaint 2026 au Seaquarium: dates des jeux, âges et billets en famille | evenements | Le Grau-du-Roi, Gard, Occitanie
- /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/vacances-royales-2026-a-versailles-animations-napoleon-dates-et-billets-en-famille/ | Vacances royales 2026 à Versailles: animations Napoléon, dates et billets | evenements | Versailles, Yvelines, Île-de-France
- /articles/evenements/rouen-givree-2026-en-famille-marche-de-noel-et-refuge-givre/ | Rouen Givrée 2026 en famille: marché de Noël et Refuge Givré | evenements | Rouen, Seine-Maritime, Normandie
- /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | Au Creux de l'Oreille 2026 à Noirlac: spectacles et ateliers en famille du 17 au 22 octobre | evenements | Bruère-Allichamps, Cher, Centre-Val de Loire
- /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | Grands Zyeux P'tites Zoreilles 2026: spectacles gratuits avec les tout-petits autour de Béziers | evenements | Béziers, Hérault, Occitanie
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | Fête de l'Automne 2026 à Terra Botanica: animations et tarifs | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | Monument jeu d'enfant 2026 à Saint-Denis: atelier Dagobert le 17 octobre | evenements | Saint-Denis, Seine-Saint-Denis, Île-de-France

### Historique Radar lié

- opportunity | /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | 2026-10-13T20:41:25.500Z
- opportunity | /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | 2026-10-14T13:49:08.708Z
- opportunity | /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | 2026-10-16T06:56:21.314Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- opportunity | /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | 2026-10-13T12:37:05.098Z
- opportunity | /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | 2026-10-14T07:31:28.976Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- opportunity | /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | 2026-10-12T14:00:32.202Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | 2026-10-13T09:50:29.435Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | 2026-10-09T18:35:04.031Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
