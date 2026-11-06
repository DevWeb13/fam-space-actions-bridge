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
title: "Transports à Paris avec des enfants: quel titre choisir pour payer juste?"
subtitle: "Tickets, Navigo Jour, Navigo Semaine ou Paris Visite: le bon choix dépend surtout du nombre de trajets, des aéroports et des jours de séjour"
summary: Comparez les titres de transport 2026 à Paris pour une famille selon l'âge des enfants, le nombre de trajets et l'arrivée par Orly ou CDG.
slug: transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste
status: published
publishedAt: 2026-08-29T00:00:45+02:00
updatedAt: 2026-10-07T15:14:00+02:00
category: voyages
readingTime: 5
location:
  city: Paris
  department: Paris
  region: Île-de-France
topic:
  key: voyages|paris|transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste|2026
  keywords:
    - transport Paris avec enfants
    - Paris Visite ou Navigo famille
image:
  src: /images/articles/2026/08/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste.webp
  alt: Quai de la station Stalingrad sur la ligne 2 du métro de Paris
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/voyages/(2026)/(08)/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/index.md
  targetSha: 8b61558b057eb75a7d983228b8f5cc6e38d986b9
  targetUrl: /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/
  decision: Choisir le titre réellement accessible et le moins coûteux pour chaque membre de la famille, en distinguant visiteurs et résidents ou travailleurs franciliens, sans recommander Navigo Liberté+ à un touriste non éligible.
  affiliationPotential: Aucune affiliation naturelle pour un comparatif de tarifs de transport public; préserver les liens pratiques internes existants sans ajouter d'hébergement artificiel.
  gsc:
    retrievedAt: 2026-11-06T01:28:02+01:00
    dataThrough: 2026-11-03
    signal: needs_query_check
    basis: Baisse d'impressions observée; causalité et classement non établis.
    peakStart: 2026-10-21
    peakEnd: 2026-10-27
    recentStart: 2026-10-28
    recentEnd: 2026-11-03
    peakImpressions: 2930
    recentImpressions: 1975
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - transport Paris avec enfants
      - Paris Visite ou Navigo famille
---

## Mission retenue
Actualiser le comparatif des transports parisiens en famille pour intégrer Navigo Liberté+ **avec ses conditions d'accès**, et non comme une option universelle pour les touristes.

## Pourquoi cette mission
Le premier refresh du snapshot totalise 1 975 impressions récentes, contre 2 930 au pic, mais cette baisse ne prouve pas une perte de classement. La lacune indépendante est vérifiée dans l'article entier sur master: Navigo Liberté+ n'y figure pas, alors qu'il change le calcul pour les personnes éligibles. Une expansion depuis une page forte (par exemple Foire de Grenoble) serait moins distincte et plus saisonnière; les opportunités locales sont déjà largement couvertes dans le catalogue et l'historique. Ne pas recréer un article consacré à Liberté+, déjà publié.

## Décision du lecteur
Savoir si Liberté+ lui est réellement accessible avant de comparer le coût de ses trajets avec les tickets, Navigo Jour, Navigo Semaine et Paris Visite, selon les âges et les aéroports.

## Faits à traiter
- Tarifs 2026 Liberté+: métro/train/RER 2,04 € et bus/tram 1,64 € au plein tarif; 1,02 € et 0,82 € au tarif réduit sur passe, sous conditions. Plafond journalier équivalent à Navigo Jour hors dessertes aéroportuaires.
- Éligibilité: résidence ou travail en Île-de-France; le service sur téléphone n'est pas disponible aux résidents hors région. Préciser la souscription préalable, le RIB, la facturation différée et la distinction passe/téléphone. **Ne pas présenter Liberté+ comme une solution ouverte à tous les visiteurs.**
- Préserver les comparaisons actuelles: tickets classiques, gratuité des moins de 4 ans, réductions des 4 à moins de 10 ans, Navigo Jour/Semaine, Paris Visite, exemples chiffrés, Orly/CDG, poussette et liens internes pertinents. Recalculer seulement les exemples touchés; ne pas supprimer d'informations encore valables.

## Sources de départ
- https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/liberte-plus
- https://www.iledefrance-mobilites.fr/aide-et-contacts/navigo-liberte-plus-sur-telephone/quelles-conditions-navigo-liberte
- https://www.iledefrance-mobilites.fr/aide-et-contacts/navigo-liberte-plus/comment-souscrire-un-contrat-navigo-liberte-plus
- https://www.iledefrance-mobilites.fr/tarifs-titre-de-transport-en-commun-2026

## Affiliation
Aucune affiliation naturelle: le lecteur choisit un titre de transport public, pas une réservation commerciale.

## Continuations internes
- Renvoyer vers /articles/bons-plans/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/ pour les modalités détaillées, sans les recopier.
- Conserver les guides existants Orly/CDG pour les trajets aéroportuaires.
- Garder le comparatif général centré sur le choix pratique et les cas où Liberté+ n'est pas accessible.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/voyages/(2026)/(08)/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/index.md

---
title: "Transports à Paris avec des enfants: quel titre choisir pour payer juste?"
subtitle: "Tickets, Navigo Jour, Navigo Semaine ou Paris Visite: le bon choix dépend surtout du nombre de trajets, des aéroports et des jours de séjour"
summary: Comparez les titres de transport 2026 à Paris pour une famille selon l'âge des enfants, le nombre de trajets et l'arrivée par Orly ou CDG.
slug: transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste
status: published
publishedAt: 2026-08-29T00:00:45+02:00
updatedAt: 2026-10-07T15:14:00+02:00
category: voyages
readingTime: 5
location:
  city: Paris
  department: Paris
  region: Île-de-France
topic:
  key: voyages|paris|transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste|2026
  keywords:
    - transport Paris avec enfants
    - Paris Visite ou Navigo famille
image:
  src: "/images/articles/2026/08/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste.webp"
  alt: "Quai de la station Stalingrad sur la ligne 2 du métro de Paris"
---
<!-- article-image-credit -->
*Photo: [최광모](https://commons.wikimedia.org/wiki/File:Paris_Metro_-_Ligne_2_-_station_Stalingrad_platform.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Paris, acheter automatiquement un forfait illimité pour toute la famille n'est pas toujours le choix le plus économique. En 2026, un ticket Métro-Train-RER coûte 2,55 € au plein tarif et 1,30 € au tarif réduit. Le forfait Navigo Jour coûte 12,30 €, tandis que Paris Visite commence à 30,60 € pour un adulte sur une journée. Le bon calcul change donc beaucoup selon le nombre de déplacements, l'âge des enfants et l'utilisation ou non des liaisons vers les aéroports.

Voici la méthode la plus simple pour choisir avant le séjour, à partir des [tarifs officiels 2026 d'Île-de-France Mobilités](https://www.iledefrance-mobilites.fr/tarifs-titre-de-transport-en-commun-2026).

## Pour peu de trajets, les tickets à l'unité restent souvent les plus simples

Le Ticket Métro-Train-RER coûte 2,55 € par trajet au plein tarif. Il permet de voyager en métro, train et RER dans toute l'Île-de-France, hors dessertes des aéroports. Le Ticket Bus-Tram coûte 2,05 € au plein tarif.

Pour un adulte qui effectue seulement deux allers-retours en métro dans la journée, soit quatre trajets, la dépense atteint 10,20 €. Elle reste donc inférieure aux 12,30 € d'un Navigo Jour. À partir de cinq trajets Métro-Train-RER dans la même journée, le total des tickets à l'unité atteint 12,75 €: le Navigo Jour devient alors légèrement moins cher.

Ces titres peuvent être chargés sur un smartphone compatible ou sur un [passe Navigo Easy](https://www.iledefrance-mobilites.fr/titres-et-tarifs/supports/passe-navigo-easy). Le passe physique coûte 2 € et chaque voyageur doit avoir son propre support pour voyager en même temps que les autres membres de la famille.

## Avec un enfant de moins de 10 ans, ne copiez pas forcément le choix des adultes

Les enfants de moins de 4 ans voyagent gratuitement. De 4 ans à moins de 10 ans, ils bénéficient notamment de 50 % de réduction sur les tickets Métro-Train-RER, Bus-Tram et Paris Région vers les aéroports. En 2026, cela donne par exemple 1,30 € pour un trajet Métro-Train-RER et 1,05 € pour un trajet Bus-Tram. Les conditions sont détaillées sur la [page officielle consacrée aux enfants de 4 à moins de 10 ans](https://www.iledefrance-mobilites.fr/titres-et-tarifs/tarifs-reduits/enfants-4-10-ans).

Le Navigo Jour, lui, coûte 12,30 € et ne propose pas de tarif enfant spécifique. Une famille peut donc parfaitement faire deux choix différents le même jour: Navigo Jour pour un adulte qui multiplie les déplacements et tickets à l'unité à tarif réduit pour un enfant qui voyage moins.

## Navigo Jour devient intéressant lors d'une journée très mobile

Le Navigo Jour coûte 12,30 € en 2026 et permet des déplacements illimités dans les zones 1 à 5 pendant une journée. Il couvre métro, train, RER, tram et bus, mais pas les trajets vers Orly ou Charles-de-Gaulle avec les dessertes aéroportuaires concernées.

Pour une journée comprenant plusieurs quartiers éloignés, des retours à l'hôtel ou un programme qui risque de changer, l'illimité peut aussi éviter de compter chaque déplacement. Pour une journée essentiellement à pied avec deux ou trois trajets en métro, les tickets à l'unité restent généralement moins chers.

## Pour plusieurs jours du lundi au dimanche, vérifiez Navigo Semaine avant Paris Visite

Le [Navigo Semaine](https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/forfait-navigo-semaine) coûte 32,40 € toutes zones en 2026. C'est un tarif très compétitif pour un séjour avec de nombreux déplacements, mais il faut regarder les dates avant de l'acheter: il fonctionne sur une semaine fixe du lundi au dimanche, et non pendant sept jours glissants à compter de l'achat.

En toutes zones, il couvre le métro, le train et le RER dans les zones 1 à 5. Il permet donc notamment d'aller à Orly par la ligne 14 et à Charles-de-Gaulle par le RER B. Orlyval fait en revanche partie des dessertes exclues du forfait.

Un séjour du lundi au vendredi peut donc parfaitement entrer dans sa période de validité. Un séjour du vendredi au mardi chevauche deux semaines et rend la formule beaucoup moins évidente.

Pour un visiteur qui souhaite un support physique, le [passe Navigo Découverte](https://www.iledefrance-mobilites.fr/titres-et-tarifs/supports/passe-navigo-decouverte) est destiné notamment aux touristes et visiteurs. Il coûte 5 €, est personnel et nécessite d'inscrire son nom et prénom ainsi que d'ajouter une photo.

## Paris Visite devient surtout pertinent quand ses avantages correspondent au séjour

Le forfait [Paris Visite](https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/forfait-paris-visite) est valable pendant 1, 2, 3 ou 5 jours consécutifs dans toute l'Île-de-France. En 2026, il coûte 30,60 € pour 1 jour, 45,40 € pour 2 jours, 63,80 € pour 3 jours et 78 € pour 5 jours au tarif adulte. Les enfants de 4 ans à moins de 10 ans bénéficient du demi-tarif.

Son principal avantage pratique face au Navigo Jour et aux tickets à l'unité est d'inclure les dessertes d'Orly et de Charles-de-Gaulle, ainsi que l'accès à l'ensemble des zones 1 à 5. Il peut donc devenir plus cohérent si le séjour comprend l'aéroport et plusieurs déplacements lointains, par exemple Versailles ou Disneyland Paris, surtout lorsque les dates ne rendent pas Navigo Semaine avantageux.

Si Disneyland fait partie du voyage, mieux vaut aussi chiffrer séparément cette étape avec notre guide [Disneyland Paris en famille: combien de jours, quel hôtel et quel budget prévoir](/articles/voyages/disneyland-paris-en-famille-en-2026-combien-de-jours-quel-hotel-et-quel-budget-prevoir/).

Pour une journée à La Villette, notre guide [Cité des sciences en famille: billets, espaces enfants et organisation de la visite](/articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/) permet ensuite de construire le programme autour d'un vrai créneau de visite plutôt que d'ajouter des trajets au hasard.

## Arrivée par Orly ou CDG: ajoutez le coût de l'aéroport avant de comparer

Le [Ticket Paris Région Aéroports](https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/ticket-paris-region-aeroports) coûte 14 € par trajet au plein tarif et 7 € au tarif réduit. Il concerne notamment Orly via la ligne 14 ou Orlyval et Charles-de-Gaulle via le RER B.

Pour préparer précisément cette liaison avec des enfants et des bagages, consultez nos guides pour [rejoindre Orly en métro 14, Orlyval ou taxi](/articles/voyages/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi/) et pour [rejoindre Roissy-CDG en RER B, bus 9517 ou taxi](/articles/voyages/rejoindre-l-aeroport-paris-cdg-en-famille-rer-b-bus-9517-ou-taxi/).

Pour un adulte, un aller-retour aéroport représente donc 28 € à lui seul. Il faut l'ajouter au coût des déplacements urbains lorsque le titre choisi ne couvre pas ces liaisons. C'est précisément ce calcul qui peut faire basculer la comparaison en faveur de Paris Visite pour certains courts séjours.

Exemple: sur deux jours, deux Navigo Jour coûtent 24,60 €. En ajoutant un aller-retour aéroport à 28 €, le total atteint 52,60 € par adulte. Paris Visite 2 jours coûte 45,40 € et inclut les dessertes d'aéroport: dans ce scénario précis, il revient 7,20 € moins cher, avant même de tenir compte de ses éventuels avantages culturels ou commerciaux.

Si vous arrivez tôt ou repartez tard avec les valises, le calcul du transport ne règle pas le problème des bagages. Notre guide [consigne à bagages à Paris en famille: gare ou dépôt en ville?](/articles/vie-pratique/consigne-a-bagages-a-paris-en-famille-gare-ou-depot-en-ville/) compare les solutions selon le quartier et le temps disponible.

## La règle pratique à retenir avant d'acheter

Pour une famille qui reste surtout dans Paris, commencez par compter le nombre probable de trajets de chaque personne. Quelques déplacements: tickets à l'unité. Beaucoup de déplacements sur une journée: comparez avec Navigo Jour. Plusieurs jours compris dans la même semaine du lundi au dimanche: regardez Navigo Semaine en priorité, y compris si vous arrivez à Orly par la ligne 14 ou à CDG par le RER B. Séjour court avec Orly ou CDG et dates qui rendent Navigo Semaine peu adapté: calculez Paris Visite en intégrant immédiatement le coût des liaisons aéroport.

Ne choisissez pas un seul titre pour toute la famille par réflexe. Avec la gratuité des moins de 4 ans et le tarif réduit des 4 à moins de 10 ans sur plusieurs tickets, la combinaison la moins chère peut être différente pour les adultes et les enfants.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/salon-du-chocolat-paris-2026-avec-des-enfants-quel-billet-choisir-et-quels-ateliers-reserver/ | Salon du Chocolat Paris 2026 avec des enfants: quel billet choisir et quels ateliers réserver | evenements | Paris, Paris, Île-de-France
- /articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/ | Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite | sorties | Paris, Paris, Île-de-France
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/evenements/planete-ocean-a-paris-preparer-la-visite-en-famille/ | Planète Océan à Paris: préparer la visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | Atelier couture gratuit à Paris le 28 novembre 2026: dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-des-lumieres-avec-un-enfant-quel-programme-choisir-et-peut-on-venir-avec-une-poussette/ | Atelier des Lumières avec un enfant: quel programme choisir et peut-on venir avec une poussette ? | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-laine-cardee-de-noel-a-paris-le-2-decembre-2026-creer-ses-decorations-des-7-ans/ | Atelier laine cardée de Noël à Paris le 2 décembre 2026: décorations dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | Contes gratuits à Paris le 14 novembre 2026: trois rendez-vous en famille | evenements | Paris, Paris, Île-de-France
- /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | Atelier Pokémon et biodiversité à Paris le 28 novembre 2026: dessin dès 10 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-omamori-gratuit-a-paris-le-21-novembre-2026-creer-une-amulette-japonaise-des-7-ans/ | Atelier omamori gratuit à Paris le 21 novembre 2026: créer une amulette dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quelle-seance-choisir-en-famille/ | Contes gratuits à Paris le 14 novembre 2026: spectacles et scène ouverte en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans/ | Écoute, je danse ! à Paris le 5 décembre 2026: spectacle gratuit dès 6 mois | evenements | Paris, Paris, Île-de-France
- /articles/activites/atelier-pop-up-gratuit-a-paris-le-21-novembre-2026-creer-un-livre-anime-en-famille/ | Atelier pop-up gratuit à Paris le 21 novembre 2026: créer en famille dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/jeux-nature-gratuits-au-parc-floral-de-paris-le-18-novembre-2026-quel-jeu-selon-l-age/ | Jeux nature gratuits au Parc floral de Paris le 18 novembre 2026 | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-scratch-gratuit-a-paris-le-7-novembre-2026-programmer-un-jeu-video-des-8-ans/ | Atelier Scratch gratuit à Paris le 7 novembre 2026: créer un jeu vidéo | activites | Paris, Paris, Île-de-France
- /articles/evenements/rencontres-du-ciel-et-de-l-espace-2026-a-paris-que-choisir-avec-des-enfants/ | Rencontres du ciel et de l’espace 2026 à Paris: ateliers, âges et billets en famille | evenements | Paris, Paris, Île-de-France
- /articles/activites/ateliers-textiles-au-musee-bourdelle-a-paris-styliste-ou-broderie-en-famille-en-2026/ | Ateliers textiles au musée Bourdelle à Paris: styliste ou broderie en famille | activites | Paris, Paris, Île-de-France
- /articles/voyages/la-parata-et-les-iles-sanguinaires-en-famille-balades-et-sortie-en-mer/ | La Parata et les îles Sanguinaires en famille: balades et sortie en mer | voyages | Ajaccio, Corse-du-Sud, Corse
- /articles/voyages/pont-de-gau-en-famille-en-automne-et-en-hiver-flamants-roses-et-marais/ | Pont de Gau en famille en automne et en hiver: flamants roses et marais | voyages | Saintes-Maries-de-la-Mer, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/voyages/domaine-de-chaalis-en-famille-que-visiter-pendant-les-travaux/ | Domaine de Chaalis en famille: que visiter pendant les travaux ? | voyages | Fontaine-Chaalis, Oise, Hauts-de-France
- /articles/voyages/laon-en-famille-un-week-end-entre-cite-medievale-et-souterrains/ | Laon en famille: un week-end entre cité médiévale et souterrains | voyages | Laon, Aisne, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | 2026-11-05T04:36:26.347Z
- opportunity | /articles/activites/atelier-laine-cardee-de-noel-a-paris-le-2-decembre-2026-creer-ses-decorations-des-7-ans/ | 2026-11-04T18:34:22.540Z
- opportunity | /articles/activites/atelier-omamori-gratuit-a-paris-le-21-novembre-2026-creer-une-amulette-japonaise-des-7-ans/ | 2026-11-05T07:29:24.731Z
- opportunity | /articles/activites/atelier-pop-up-gratuit-a-paris-le-21-novembre-2026-creer-un-livre-anime-en-famille/ | 2026-11-04T15:34:37.269Z
- opportunity | /articles/activites/atelier-scratch-gratuit-a-paris-le-7-novembre-2026-programmer-un-jeu-video-des-8-ans/ | 2026-11-04T08:27:47.912Z
- opportunity | /articles/activites/ateliers-textiles-au-musee-bourdelle-a-paris-styliste-ou-broderie-en-famille-en-2026/ | 2026-11-04T01:30:49.478Z
- opportunity | /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | 2026-11-05T13:27:24.356Z
- opportunity | /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quelle-seance-choisir-en-famille/ | 2026-11-05T00:34:45.481Z
- opportunity | /articles/evenements/ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans/ | 2026-11-04T21:32:12.180Z
- opportunity | /articles/activites/jeux-nature-gratuits-au-parc-floral-de-paris-le-18-novembre-2026-quel-jeu-selon-l-age/ | 2026-11-04T12:35:19.125Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
