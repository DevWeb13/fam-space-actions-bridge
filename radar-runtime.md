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
title: "Visiter le nouveau musée M24 au Mans en famille: billets, parcours et circuit"
subtitle: Voitures de légende, espace famille et conseils pour choisir entre musée et tribunes
summary: Que voir au M24 avec des enfants ? Durée, tarifs, parcours famille, accès au circuit et conseils pour organiser une sortie au Mans sans mauvaise surprise.
slug: visiter-le-nouveau-musee-m24-au-mans-en-famille-billets-parcours-et-circuit
status: published
publishedAt: 2026-10-31T09:01:04+01:00
updatedAt: null
category: activites
readingTime: 5
location:
  city: Le Mans
  department: Sarthe
  region: Pays de la Loire
topic:
  key: activites|le-mans|visiter-le-nouveau-musee-m24-au-mans-en-famille-billets-parcours-et-circuit|2026
  keywords:
    - musée M24 Le Mans en famille
    - musée sport automobile Le Mans enfants
    - visite circuit 24 Heures du Mans
image:
  src: /images/articles/2026/10/visiter-le-nouveau-musee-m24-au-mans-en-famille-billets-parcours-et-circuit.webp
  alt: Voiture de course Tracta Gephi de 1927 photographiée en 2024 dans l'ancien musée des 24 Heures du Mans
sources:
  - title: M24 - Visites individuelles, parcours famille et circuit
    url: https://www.m24-musee.com/visiter/particuliers/
  - title: M24 - Informations pratiques, tarifs et accès
    url: https://www.m24-musee.com/informations-pratiques/
  - title: M24 - Parcours permanent
    url: https://www.m24-musee.com/parcours-permanent/
  - title: M24 - Conditions générales de vente
    url: https://www.m24-musee.com/conditions-generales-de-vente/
  - title: M24 - Billetterie et conditions des forfaits famille
    url: https://ticket.m24-musee.com/
  - title: Automobile Club de l'Ouest - Inauguration du M24 le 27 mai 2026
    url: https://www.lemans.org/fr/actualites/aco/le-m24-musee-du-sport-automobile-est-inaugure-60617
affiliate:
  enabled: true
  type: travel
  destination: Le Mans
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/activites/(2026)/(10)/visiter-le-nouveau-musee-m24-au-mans-en-famille-billets-parcours-et-circuit/index.md
  targetSha: 680ac8e3964e05f607fe6090e4bdf89519f76b98
  targetUrl: /articles/activites/visiter-le-nouveau-musee-m24-au-mans-en-famille-billets-parcours-et-circuit/
  decision: Choisir la formule de visite M24 réellement adaptée aux enfants et payer au meilleur tarif, en comprenant les différences entre visite libre, visite guidée et accès au circuit.
  affiliationPotential: Conserver l'hébergement Booking.com déjà présent; vérifier sa pertinence et ses conditions sans ajouter de billetterie partenaire artificielle.
  gsc:
    retrievedAt: 2026-11-12T03:33:45+01:00
    dataThrough: 2026-11-09
    signal: uncertain
    basis: "Visibilité récente : 21 impressions sur trois jours, puis 5 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-01
    peakEnd: 2026-11-03
    recentStart: 2026-11-07
    recentEnd: 2026-11-09
    peakImpressions: 21
    recentImpressions: 5
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - musée automobile le mans tarif
---

## Mission retenue
Actualiser le guide familial du M24, Musée du Sport Automobile au Mans, sur les options de visite et les moyens de paiement.

## Pourquoi cette mission
L'article figure parmi les baisses rapides du snapshot (21 puis 5 impressions sur trois jours), sans preuve de cause SEO. Lacune éditoriale indépendante vérifiée: les visites guidées, le pass annuel et les moyens de paiement officiels ne sont pas expliqués, alors qu'ils peuvent modifier le choix et le budget familial.

## Décision du lecteur
Savoir si le musée seul, le combiné circuit, ou une visite guidée vaut le coût pour sa famille; éviter de réserver une formule ou un mode de paiement inadapté.

## Faits à traiter
- Vérifier les trois visites guidées officielles à 25 € (24 Heures du Mans, sport automobile, circuit), leurs durées, contenus et éventuelles conditions enfants; ne pas les confondre avec la visite libre du circuit.
- Mentionner si utile l'adhésion Passion à 60 € pour un an, sans la présenter comme avantageuse pour une seule visite.
- Préciser les chèques-vacances papier acceptés et les chèques-vacances Connect, pass Culture et titres-restaurant refusés.
- Préserver les tarifs musée/circuit/combiné, forfaits famille, gratuité des moins de 6 ans, accès conditionnel au circuit, horaires, transports, équipements bébé, photographies et crédits, liens internes et Booking.com. Ne pas attribuer la chute GSC à ces manques.

## Sources de départ
- https://www.m24-musee.com/informations-pratiques/
- https://www.m24-musee.com/visiter/particuliers/
- https://ticket.m24-musee.com/

## Affiliation
Conserver le lien Booking.com existant si l'offre familiale reste pertinente; aucune offre de billet affiliée vérifiée.

## Continuations internes
- Garder le guide destination Le Mans comme relais pour la seconde journée.
- Ne pas développer un nouveau guide autonome sur le circuit: compléter la distinction déjà présente dans l'article.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/activites/(2026)/(10)/visiter-le-nouveau-musee-m24-au-mans-en-famille-billets-parcours-et-circuit/index.md

---
title: "Visiter le nouveau musée M24 au Mans en famille: billets, parcours et circuit"
subtitle: Voitures de légende, espace famille et conseils pour choisir entre musée et tribunes
summary: Que voir au M24 avec des enfants ? Durée, tarifs, parcours famille, accès au circuit et conseils pour organiser une sortie au Mans sans mauvaise surprise.
slug: visiter-le-nouveau-musee-m24-au-mans-en-famille-billets-parcours-et-circuit
status: published
publishedAt: 2026-10-31T09:01:04+01:00
updatedAt: null
category: activites
readingTime: 5
location:
  city: Le Mans
  department: Sarthe
  region: Pays de la Loire
topic:
  key: activites|le-mans|visiter-le-nouveau-musee-m24-au-mans-en-famille-billets-parcours-et-circuit|2026
  keywords:
    - musée M24 Le Mans en famille
    - musée sport automobile Le Mans enfants
    - visite circuit 24 Heures du Mans
image:
  src: "/images/articles/2026/10/visiter-le-nouveau-musee-m24-au-mans-en-famille-billets-parcours-et-circuit.webp"
  alt: "Voiture de course Tracta Gephi de 1927 photographiée en 2024 dans l'ancien musée des 24 Heures du Mans"
sources:
  - title: M24 - Visites individuelles, parcours famille et circuit
    url: https://www.m24-musee.com/visiter/particuliers/
  - title: M24 - Informations pratiques, tarifs et accès
    url: https://www.m24-musee.com/informations-pratiques/
  - title: M24 - Parcours permanent
    url: https://www.m24-musee.com/parcours-permanent/
  - title: M24 - Conditions générales de vente
    url: https://www.m24-musee.com/conditions-generales-de-vente/
  - title: M24 - Billetterie et conditions des forfaits famille
    url: https://ticket.m24-musee.com/
  - title: Automobile Club de l'Ouest - Inauguration du M24 le 27 mai 2026
    url: https://www.lemans.org/fr/actualites/aco/le-m24-musee-du-sport-automobile-est-inaugure-60617
affiliate:
  enabled: true
  type: travel
  destination: Le Mans
---

Au Mans, dans la Sarthe, le M24 - Musée du Sport Automobile accueille les familles à l'entrée du circuit des 24 Heures. Ouvert depuis le 28 mai 2026 après une transformation majeure, il raconte aussi bien la course mancelle que la Formule 1, le rallye, l'IndyCar ou la moto. Même sans connaître les pilotes, les enfants peuvent découvrir des voitures impressionnantes, manipuler des matériaux et suivre un parcours conçu pour eux. Reste à choisir entre le musée, les tribunes du circuit ou les deux.

## Ce qui peut plaire aux enfants

Le nouveau M24 réunit plus de 120 véhicules sur 8 600 m², selon l'[Automobile Club de l'Ouest](https://www.lemans.org/fr/actualites/aco/le-m24-musee-du-sport-automobile-est-inaugure-60617). Une première partie fait vivre les 24 Heures du Mans, du départ à l'arrivée en passant par la conduite de nuit et les arrêts aux stands. Une seconde présente d'autres disciplines du sport automobile.

Les enfants peuvent s'arrêter devant les monoplaces de Formule 1, les miniatures au 1/43 et les scènes de course reconstituées grandeur nature. La matériauthèque invite à découvrir certaines matières par le toucher. De grandes vitres permettent aussi d'observer l'atelier d'entretien des véhicules de collection. Ces espaces figurent dans le [parcours permanent du M24](https://www.m24-musee.com/parcours-permanent/).

Un espace famille complète la visite. Depuis un smartphone, l'application du musée propose un parcours destiné aux plus jeunes, distinct du parcours « Les incontournables ». L'entrée du musée comprend également l'exposition temporaire.

## Musée, circuit ou les deux: que choisir ?

<!-- article-image-body:01 -->

![Ligne droite des stands et tribunes du circuit Bugatti au Mans, photographiées en 2013](/images/articles/2026/10/visiter-le-nouveau-musee-m24-au-mans-en-famille-billets-parcours-et-circuit-body-01.webp)

*Photo: [Like tears in rain](https://commons.wikimedia.org/wiki/File:Stands_du_Circuit_Bugatti.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

**Le musée seul** est le choix le plus simple pour une première sortie avec de jeunes enfants ou par mauvais temps. Comptez environ 1 h 30 à 2 h selon votre rythme.

**La visite libre du circuit** permet de rejoindre à pied les gradins et les tribunes pour voir notamment la ligne droite des stands. Comptez environ une heure. Elle est payante et n'ouvre pas les bâtiments, les paddocks ni les coulisses. Surtout, **le circuit n'est pas accessible en visite libre pendant les événements sportifs**: vérifiez sa disponibilité pour votre date.

**Le billet combiné musée + circuit** convient aux familles qui veulent voir les voitures et les installations. Prévoyez environ 3 à 4 h avec les déplacements et une pause. L'application propose aussi un parcours famille sur le circuit.

Pour découvrir la direction de course, le podium ou la salle du speaker, il faut une **visite guidée du circuit**, à pied et d'une durée de deux heures. Les créneaux et les accès dépendent des dates. Les [formules de visite du M24](https://www.m24-musee.com/visiter/particuliers/) permettent de distinguer les parcours.

## Tarifs et forfaits famille

Voici les tarifs affichés par le [M24](https://www.m24-musee.com/informations-pratiques/), vérifiés le 31 octobre 2026:

- **Musée seul:** 20 € par adulte, 12 € de 6 à 17 ans.
- **Circuit seul en visite libre:** 7 € par adulte, 4 € de 6 à 17 ans.
- **Musée + circuit:** 24 € par adulte, 14 € de 6 à 17 ans.
- **Moins de 6 ans:** gratuit pour ces trois formules.

Les forfaits famille coûtent **58 € pour le musée**, **20 € pour le circuit** et **72 € pour le combiné**. La [billetterie du M24](https://ticket.m24-musee.com/) les présente pour **deux adultes et deux jeunes de 6 à 17 ans**. Pour cette composition, le musée revient ainsi à 58 € au lieu de 64 € en billets individuels. Pour une autre composition familiale, comparez les billets avant de réserver.

Un tarif adulte réduit, sur justificatif, est prévu notamment pour les étudiants, demandeurs d'emploi et personnes en situation de handicap: 15 € pour le musée, 6 € pour le circuit et 18 € pour le combiné. Les membres de l'ACO disposent de conditions spécifiques.

La réservation n'est pas obligatoire pour les visiteurs individuels, mais elle est recommandée lors des périodes chargées. Les billets sont datés, nominatifs et, dans les conditions ordinaires, ni échangeables ni remboursables. Une fois sorti du musée, on ne peut pas y rentrer de nouveau avec le même billet. Le passage à l'accueil reste nécessaire même après un achat en ligne, notamment pour les consignes d'accès au circuit.

## Préparer la visite avec des enfants

<!-- article-image-body:02 -->

![Tramway du Mans près de la station Guetteloup - Pôle Santé Sud sur la ligne T1](/images/articles/2026/10/visiter-le-nouveau-musee-m24-au-mans-en-famille-billets-parcours-et-circuit-body-02.webp)

*Photo: [IngolfBLN](https://commons.wikimedia.org/wiki/File:Flickr_-_IngolfBLN_-_Le_Mans_-_Tramway_-_Antar%C3%A8s-Guetteloup_(1).jpg) - [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Le M24 se trouve **9 place Luigi Chinetti, 72100 Le Mans**. Les horaires habituels sont de **10 h à 18 h du 1er octobre au 30 avril** et de **10 h à 19 h du 1er mai au 30 septembre**, avec une dernière entrée une heure avant la fermeture. Le musée ferme les **25 décembre et 1er janvier**. Les moins de 16 ans doivent être accompagnés d'un représentant légal, selon les [conditions de vente](https://www.m24-musee.com/conditions-generales-de-vente/).

Sur place, le musée annonce des toilettes, des ascenseurs, un espace bébé, un espace détente et une cafétéria. Nourriture et boissons ne sont pas autorisées dans les salles d'exposition. Les espaces du musée et du circuit sont annoncés accessibles aux personnes en fauteuil roulant. Avec une poussette, tenez surtout compte de la marche supplémentaire si vous choisissez le circuit.

**En voiture**, les parkings Chinetti et Rouge sont gratuits et à moins de cinq minutes à pied de l'entrée en conditions habituelles. **Sans voiture**, depuis la gare du Mans, prenez le tram T1 vers Antarès - Stade Marie-Marvingt, descendez à Guetteloup - Pôle Santé Sud et comptez encore une vingtaine de minutes de marche. Les bus 10A et 10B desservent aussi l'arrêt Les Raineries, à environ onze minutes à pied du musée.

**Évitez si possible les grandes compétitions** comme les 24 Heures du Mans, les 24 Heures Motos ou Le Mans Classic. Le musée peut rester ouvert, mais les parkings, la circulation et les accès changent fortement. Consultez les [informations pratiques du M24](https://www.m24-musee.com/informations-pratiques/) avant le départ.

## Prolonger la sortie par un week-end au Mans

Pour dormir sur place, l'[Hotel Le Circuit Le Mans](https://www.booking.com/hotel/fr/le-green-7.fr.html) propose une chambre familiale pour quatre personnes, avec un lit double et deux lits simples. L'établissement dispose d'un parking gratuit et d'un restaurant. Il se situe à environ 4 km du circuit: prévoyez un trajet pour rejoindre le musée plutôt qu'un accès immédiat à pied.

Pour une deuxième journée, notre [guide du Mans en famille](https://www.fam-space.fr/destinations/pays-de-la-loire/sarthe/le-mans/) présente notamment la Cité Plantagenêt et l'Arche de la Nature, deux idées très différentes de l'univers automobile.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/musee-de-la-biere-a-stenay-en-famille-parcours-enfants-et-exposition-2026/ | Musée de la Bière à Stenay en famille: parcours enfants et exposition 2026 | activites | Stenay, Meuse, Grand Est
- /articles/sorties/forteresse-de-salses-en-famille-ce-que-change-le-nouveau-parcours/ | Forteresse de Salses en famille: ce que change le nouveau parcours | sorties | Salses-le-Château, Pyrénées-Orientales, Occitanie
- /articles/sorties/historial-de-la-vendee-le-nouveau-musee-des-enfants-vaut-il-la-sortie/ | Historial de la Vendée: le nouveau musée des enfants vaut-il la sortie? | sorties | Les Lucs-sur-Boulogne, Vendée, Pays de la Loire
- /articles/activites/musee-automobile-reims-champagne-en-famille-que-voir-et-comment-preparer-sa-visite/ | Musée Automobile Reims-Champagne en famille: que voir et comment préparer sa visite? | activites | Reims, Marne, Grand Est
- /articles/bons-plans/musee-national-du-sport-a-nice-en-famille-combien-coute-vraiment-la-visite/ | Musée National du Sport à Nice en famille: que voir et préparer la visite | bons-plans | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/activites/musee-de-l-air-et-de-l-espace-au-bourget-quel-parcours-en-famille/ | Musée de l’Air et de l’Espace au Bourget: quel parcours en famille? | activites | Le Bourget, Seine-Saint-Denis, Île-de-France
- /articles/activites/ateliers-a-musees-a-la-rochelle-en-decembre-2026-quelle-seance-choisir-en-famille/ | Ateliers A'musées à La Rochelle: tissage et mosaïque en décembre 2026 | activites | La Rochelle, Charente-Maritime, Nouvelle-Aquitaine
- /articles/activites/visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils/ | Visiter le château de La Rochefoucauld en famille: parcours, tarifs et conseils | activites | La Rochefoucauld-en-Angoumois, Charente, Nouvelle-Aquitaine
- /articles/activites/visiter-le-nouveau-musee-m24-au-mans-en-famille-billets-parcours-et-circuit/ | Visiter le nouveau musée M24 au Mans en famille: billets, parcours et circuit | activites | Le Mans, Sarthe, Pays de la Loire
- /articles/evenements/cirque-de-noel-2026-au-mans-horaires-tarifs-et-seance-a-choisir-avec-des-enfants/ | Cirque de Noël 2026 au Mans: horaires, tarifs et séance à choisir avec des enfants | evenements | Le Mans, Sarthe, Pays de la Loire
- /articles/voyages/le-mans-sans-voiture-avec-des-enfants-ou-dormir-et-comment-organiser-un-week-end/ | Le Mans sans voiture avec des enfants: où dormir et comment organiser un week-end | voyages | Le Mans, Sarthe, Pays de la Loire
- /articles/evenements/le-mans-ete-bord-huisne-2026-famille/ | Le Mans l’été au bord de l’Huisne 2026: une sortie gratuite en famille | evenements | Le Mans, Sarthe, Pays de la Loire
- /articles/evenements/halloween-2026-au-zoo-de-la-fleche-entree-offerte-aux-enfants-deguises/ | Halloween 2026 au Zoo de La Flèche: tarifs, jeux et entrée offerte aux enfants déguisés | evenements | La Flèche, Sarthe, Pays de la Loire
- /articles/sorties/zoo-de-la-fleche-en-famille-tarifs-2026-duree-et-conseils-de-visite/ | Zoo de La Flèche en famille: tarifs 2026, durée et conseils de visite | sorties | La Flèche, Sarthe, Pays de la Loire
- /articles/activites/corderie-royale-de-rochefort-en-famille-visite-tarifs-et-ateliers/ | Corderie Royale de Rochefort en famille: visite, tarifs et ateliers | activites | Rochefort, Charente-Maritime, Nouvelle-Aquitaine
- /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | Atelier bâton de pluie gratuit à Paris le 18 novembre 2026: dès 6 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | Lecture d'hiver gratuite à Paris le 12 décembre 2026: deux séances pour les 1-3 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | Bricolages de Noël gratuits à Paris le 19 décembre 2026: un atelier dès 4 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-deco-de-noel-gratuit-a-paris-le-28-novembre-2026-creer-en-recup-art-des-8-ans/ | Atelier déco de Noël gratuit à Paris le 28 novembre 2026: bricolage dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | Atelier Calder à Paris le 14 novembre 2026: fabriquer un mobile dès 5 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/le-pal-2027-en-famille-une-ou-deux-journees-entre-animaux-et-attractions/ | Le PAL 2027 en famille: une ou deux journées entre animaux et attractions ? | activites | Saint-Pourçain-sur-Besbre, Allier, Auvergne-Rhône-Alpes
- /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | Atelier Pokémon et biodiversité à Paris le 28 novembre 2026: dessin dès 10 ans | activites | Paris, Paris, Île-de-France

### Historique Radar lié

- opportunity | /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | 2026-11-05T16:36:05.180Z
- opportunity | /articles/activites/atelier-deco-de-noel-gratuit-a-paris-le-28-novembre-2026-creer-en-recup-art-des-8-ans/ | 2026-11-05T23:35:44.031Z
- opportunity | /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | 2026-11-06T12:30:50.449Z
- opportunity | /articles/activites/ateliers-a-musees-a-la-rochelle-en-decembre-2026-quelle-seance-choisir-en-famille/ | 2026-10-31T00:36:57.118Z
- opportunity | /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | 2026-11-06T03:27:40.597Z
- opportunity | /articles/evenements/halloween-2026-au-zoo-de-la-fleche-entree-offerte-aux-enfants-deguises/ | 2026-10-25T20:27:07.814Z
- opportunity | /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | 2026-11-06T09:33:42.136Z
- opportunity | /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | 2026-11-05T10:32:54.471Z
- refresh | /articles/activites/visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils/ | 2026-11-08T22:29:18.327Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
