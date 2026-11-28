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
title: "Transports à Paris avec des enfants: quel titre choisir pour payer juste?"
subtitle: "Tickets, Navigo Liberté+, Navigo Jour, Semaine ou Paris Visite: comparez selon votre éligibilité, les âges et les aéroports"
summary: Comparez les tarifs 2026 des transports parisiens en famille, y compris Navigo Liberté+ pour les personnes éligibles, selon les trajets et les aéroports.
slug: transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste
status: published
publishedAt: 2026-08-29T00:00:45+02:00
updatedAt: 2026-11-06T21:35:30.174Z
category: voyages
readingTime: 7
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
  targetSha: 7d68dc4f53f2f55ec7b20eedcee08e381d09808a
  targetUrl: /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/
  decision: Connaître immédiatement le prix du métro selon l'âge de chaque enfant, puis choisir et acheter les titres adaptés aux correspondances, au nombre de déplacements et aux jours du séjour.
  affiliationPotential: Aucune offre partenaire vérifiée équivalente aux titres ordinaires IDFM; conserver les liens officiels. Hôtel Terminus Lyon sur Booking.com, chambre familiale pour quatre personnes et proximité gare/RER vérifiées dans la fiche indexée; prix et disponibilité selon dates non confirmés. Ne pas confondre les pass touristiques d'attractions et les titres de transport.
  gsc:
    retrievedAt: 2026-11-28T07:56:00+01:00
    dataThrough: 2026-11-26
    signal: search_potential
    basis: Page visible avec 1478 impressions, 3 clics et une position moyenne de 8.32 sur sept jours; intention de recherche à examiner. Les requêtes visibles ne démontrent pas une perte de classement.
    peakStart: 2026-11-13
    peakEnd: 2026-11-19
    recentStart: 2026-11-20
    recentEnd: 2026-11-26
    peakImpressions: 1592
    recentImpressions: 1478
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0.719
    focusQueries:
      - prix metro enfant paris
      - metro paris enfant
      - prix ticket metro paris enfant
      - ticket metro paris enfant
      - les enfants paient ils le metro a paris
---

## Mission retenue
Actualiser le comparatif des transports parisiens en famille, en répondant immédiatement à la recherche sur le prix du métro enfant.

## Pourquoi cette mission
Dijon, Chantilly et Carte Avantage Adulte SNCF, candidats précédents du snapshot, sont déjà actualisés sur master aujourd'hui. Paris présente un potentiel de recherche avec très peu de clics malgré une exposition significative. Le titre actuel est généraliste et les tarifs par âge sont enfouis après plusieurs sections. Des contraintes d'achat et de correspondance utiles sont absentes. Aucune perte de classement n'est démontrée.

## Décision du lecteur
Savoir combien paie chaque enfant, quels tickets acheter et quand un forfait est réellement plus économique pour la famille.

## Faits à traiter
- Mettre en premier les moins de 4 ans gratuits sans titre, les 4 à moins de 10 ans à 1,30 € en métro/train/RER, 1,05 € en bus/tram et 7 € pour le ticket aéroport, puis le plein tarif dès 10 ans sauf autres droits. Préciser le justificatif d'âge, l'accès aux portiques avec poussette et les éventuelles exceptions. Vérifier les règles Paris Visite auprès de la grille tarifaire et des CGVU actuelles: une ancienne page indexée indique 4-11 ans alors que la fiche produit et les tarifs 2026 indiquent 4 à moins de 10 ans.
- Expliquer que les correspondances métro/train/RER pendant deux heures sans sortie (sauf cheminements autorisés) ne nécessitent pas un second ticket; bus/tram séparés, vérifier les 90 minutes et exceptions. Un support par voyageur payant; plein tarif et tarif réduit incompatibles sur un même support, ainsi que certains tickets aéroport et métro. Vérifier les solutions de cartes dématérialisées séparées sans supposer qu'un seul téléphone permet de valider pour toute la famille.
- Ajouter un exemple famille pour quatre trajets, et seuil Navigo Jour enfant: 10 trajets métro distincts à 1,30 € dépassent 12,30 €; adulte dès cinq. Conserver les comparaisons Liberté+ et ses conditions d'éligibilité en renvoyant au guide spécialisé; conserver les budgets Navigo Semaine et Paris Visite, la distinction aéroports et les supports. Préciser la vente du Navigo Semaine du vendredi précédent jusqu'au jeudi de la semaine concernée, puis la semaine suivante. Mentionner la fin d'acceptation des anciens tickets carton le 14 décembre 2026 et l'échange jusqu'au 14 janvier 2027 uniquement si les conditions officielles exactes sont confirmées. La grille 2027 n'est pas définitivement votée à ce jour: ne pas publier de prix projetés comme acquis; prévoir reviewAt début janvier pour actualiser les prix.
- Garder l'image et son crédit, ajouter les sources structurées actuellement absentes et réduire les répétitions. Titre plus explicite sur le prix du métro enfant sans perdre l'angle comparatif familial.

## Sources de départ
- https://www.iledefrance-mobilites.fr/tarifs-titre-de-transport-en-commun-2026
- https://www.iledefrance-mobilites.fr/titres-et-tarifs/tarifs-reduits/enfants-4-10-ans
- https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/ticket-metro-train-rer
- https://www.iledefrance-mobilites.fr/correspondance-voie-publique
- https://www.iledefrance-mobilites.fr/aide-et-contacts/chargement-des-titres-sur-mon-telephone/quels-titres-de-transport-charges-sur-telephone
- https://www.iledefrance-mobilites.fr/cgvu-forfaits-navigo-mois-navigo-semaine
- https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/forfait-paris-visite
- https://www.iledefrance-mobilites.fr/aide-et-contacts/titres-unitaires-tarifs-reduits/avenir-tickets-t-et-od-en-carton
- Conserver les autres sources officielles pertinentes de l'article.

## Affiliation
Hôtel Terminus Lyon, https://www.booking.com/hotel/fr/hotelterminuslyon.en-gb.html : chambre familiale avec deux lits simples et un grand lit double, Gare de Lyon à proximité, accès RER. Offre vérifiée dans la fiche indexée, prix et dates non confirmés. Conseil secondaire naturel pour limiter les déplacements; aucune offre partenaire vérifiée pour les titres IDFM. Les transferts et consignes sont déjà traités dans les guides dédiés.

## Continuations internes
Priorité aux trois routes vérifiées: /articles/bons-plans/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/ et les deux guides Orly et CDG existants, qui prennent le relais pour les détails des liaisons et transferts. Conserver les autres liens existants s'ils sont utiles et vérifiés en rédaction.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/voyages/(2026)/(08)/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/index.md

---
title: "Transports à Paris avec des enfants: quel titre choisir pour payer juste?"
subtitle: "Tickets, Navigo Liberté+, Navigo Jour, Semaine ou Paris Visite: comparez selon votre éligibilité, les âges et les aéroports"
summary: Comparez les tarifs 2026 des transports parisiens en famille, y compris Navigo Liberté+ pour les personnes éligibles, selon les trajets et les aéroports.
slug: transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste
status: published
publishedAt: 2026-08-29T00:00:45+02:00
updatedAt: 2026-11-06T21:35:30.174Z
category: voyages
readingTime: 7
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
---

<!-- article-image-credit -->
*Photo: [최광모](https://commons.wikimedia.org/wiki/File:Paris_Metro_-_Ligne_2_-_station_Stalingrad_platform.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Paris, acheter automatiquement un forfait illimité pour toute la famille n'est pas toujours le choix le plus économique. En 2026, un ticket Métro-Train-RER coûte 2,55 € au plein tarif et 1,30 € au tarif réduit. Le Navigo Jour coûte 12,30 €, tandis que Paris Visite commence à 30,60 € pour un adulte sur une journée. Pour les personnes qui résident ou travaillent en Île-de-France, Navigo Liberté+ peut aussi réduire la facture. Le bon choix dépend du nombre de déplacements, de l'âge des enfants, des dates du séjour et des trajets vers les aéroports.

Les montants ci-dessous proviennent des [tarifs officiels 2026 d'Île-de-France Mobilités](https://www.iledefrance-mobilites.fr/tarifs-titre-de-transport-en-commun-2026).

## Pour peu de trajets, les tickets à l'unité restent souvent les plus simples

Le Ticket Métro-Train-RER coûte 2,55 € par trajet au plein tarif. Il permet de voyager en métro, train et RER dans toute l'Île-de-France, hors dessertes des aéroports. Le Ticket Bus-Tram coûte 2,05 € au plein tarif.

Pour un adulte qui effectue deux allers-retours en métro dans la journée, soit quatre trajets, la dépense atteint 10,20 €. Elle reste inférieure aux 12,30 € d'un Navigo Jour. À partir de cinq trajets Métro-Train-RER dans la même journée, le total des tickets à l'unité atteint 12,75 €: le Navigo Jour devient légèrement moins cher.

Ces titres peuvent être chargés sur un smartphone compatible ou sur un [passe Navigo Easy](https://www.iledefrance-mobilites.fr/titres-et-tarifs/supports/passe-navigo-easy). Le passe physique coûte 2 € et chaque voyageur doit avoir son propre support pour voyager simultanément avec les autres membres de la famille.

## Navigo Liberté+: avantageux, mais pas accessible à tous les visiteurs

Avant de comparer les prix, vérifiez votre éligibilité. [Île-de-France Mobilités précise](https://www.iledefrance-mobilites.fr/aide-et-contacts/navigo-liberte-plus-sur-telephone/quelles-conditions-navigo-liberte) que Navigo Liberté+ s'adresse aux personnes **résidant ou travaillant en Île-de-France**. Un touriste de passage qui ne remplit aucune de ces conditions ne doit donc pas compter sur cette formule. Le service sur téléphone n'est pas disponible aux résidents hors Île-de-France; une personne qui habite ailleurs mais travaille dans la région peut souscrire sur passe en agence avec un justificatif de son employeur francilien.

Pour une personne éligible, les [tarifs Liberté+ 2026](https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/liberte-plus) sont de **2,04 € en métro, train ou RER** et **1,64 € en bus ou tram** au plein tarif. Sur passe, les personnes ayant droit au tarif réduit paient respectivement 1,02 € et 0,82 €; **le tarif réduit n'est pas disponible sur téléphone**. La facturation intervient le mois suivant les déplacements, et la dépense quotidienne est plafonnée au prix du Navigo Jour pour les trajets ordinaires, hors liaisons aéroportuaires.

Quatre trajets en métro coûtent ainsi 8,16 € avec Liberté+ contre 10,20 € en tickets classiques. Pour six trajets distincts, le total atteint 12,24 €, sous le plafond journalier de 12,30 €. Contrairement au Navigo Jour acheté à l'avance, Liberté+ facture les déplacements réellement effectués, dans la limite du plafond applicable.

Il faut toutefois **souscrire avant de voyager**, fournir un RIB et disposer du support adapté. La [souscription sur passe](https://www.iledefrance-mobilites.fr/aide-et-contacts/navigo-liberte-plus/comment-souscrire-un-contrat-navigo-liberte-plus) peut se faire en ligne ou dans les points d'accueil prévus; sur téléphone, elle se fait dans l'application Île-de-France Mobilités, sous conditions. Pour les justificatifs, les modalités et le choix du support, consultez notre guide [Navigo Liberté+ en famille: tarif enfant, passe ou téléphone](/articles/bons-plans/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/).

## Avec un enfant de moins de 10 ans, ne copiez pas forcément le choix des adultes

Les enfants de moins de 4 ans voyagent gratuitement. De 4 ans à moins de 10 ans, ils bénéficient notamment de 50 % de réduction sur les tickets Métro-Train-RER, Bus-Tram et Paris Région vers les aéroports. En 2026, cela donne 1,30 € pour un trajet Métro-Train-RER et 1,05 € pour un trajet Bus-Tram. Les conditions figurent sur la [page officielle consacrée aux enfants de 4 à moins de 10 ans](https://www.iledefrance-mobilites.fr/titres-et-tarifs/tarifs-reduits/enfants-4-10-ans).

Le Navigo Jour coûte 12,30 € sans tarif enfant spécifique. Une famille peut donc choisir Navigo Jour pour un adulte qui multiplie les déplacements et des tickets à tarif réduit pour un enfant qui voyage moins. Pour un enfant éligible au tarif réduit Liberté+ sur passe, il faut aussi tenir compte des conditions propres à ce contrat: ne présumez pas que le tarif réduit s'applique sur téléphone.

## Navigo Jour devient intéressant lors d'une journée très mobile

Le Navigo Jour coûte 12,30 € en 2026 et permet des déplacements illimités dans les zones 1 à 5 pendant une journée. Il couvre métro, train, RER, tram et bus, mais pas les dessertes aéroportuaires concernées vers Orly ou Charles-de-Gaulle.

Pour une journée comprenant plusieurs quartiers éloignés, des retours à l'hôtel ou un programme susceptible de changer, l'illimité évite de compter chaque déplacement. Pour deux ou trois trajets en métro, les tickets restent généralement moins chers. Une personne déjà abonnée à Liberté+ bénéficie quant à elle du plafonnement quotidien sans avoir à acheter Navigo Jour.

## Pour plusieurs jours du lundi au dimanche, vérifiez Navigo Semaine avant Paris Visite

Le [Navigo Semaine](https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/forfait-navigo-semaine) coûte 32,40 € toutes zones en 2026. C'est un tarif compétitif pour un séjour avec de nombreux déplacements, mais il fonctionne sur une semaine fixe du lundi au dimanche, et non pendant sept jours glissants à compter de l'achat.

En toutes zones, il couvre métro, train et RER dans les zones 1 à 5, notamment Orly par la ligne 14 et Charles-de-Gaulle par le RER B. Orlyval reste exclu.

Un séjour du lundi au vendredi entre dans une seule période de validité. Un séjour du vendredi au mardi chevauche deux semaines et rend la formule moins évidente.

Pour un visiteur qui souhaite un support physique, le [passe Navigo Découverte](https://www.iledefrance-mobilites.fr/titres-et-tarifs/supports/passe-navigo-decouverte) est destiné notamment aux touristes et visiteurs. Il coûte 5 €, est personnel et nécessite nom, prénom et photo.

## Paris Visite devient surtout pertinent quand ses avantages correspondent au séjour

Le forfait [Paris Visite](https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/forfait-paris-visite) est valable pendant 1, 2, 3 ou 5 jours consécutifs dans toute l'Île-de-France. En 2026, il coûte 30,60 € pour 1 jour, 45,40 € pour 2 jours, 63,80 € pour 3 jours et 78 € pour 5 jours au tarif adulte. Les enfants de 4 ans à moins de 10 ans bénéficient du demi-tarif.

Son avantage pratique face au Navigo Jour et aux tickets classiques est d'inclure les dessertes d'Orly et de Charles-de-Gaulle ainsi que l'ensemble des zones 1 à 5. Il peut devenir cohérent avec un aéroport et plusieurs déplacements lointains, par exemple Versailles ou Disneyland Paris, surtout si les dates rendent Navigo Semaine peu avantageux.

Si Disneyland fait partie du voyage, chiffrez séparément cette étape avec notre guide [Disneyland Paris en famille: combien de jours, quel hôtel et quel budget prévoir](/articles/voyages/disneyland-paris-en-famille-en-2026-combien-de-jours-quel-hotel-et-quel-budget-prevoir/).

Pour une journée à La Villette, notre guide [Cité des sciences en famille: billets, espaces enfants et organisation de la visite](/articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/) aide à construire le programme autour d'un créneau de visite.

## Arrivée par Orly ou CDG: ajoutez le coût de l'aéroport avant de comparer

Le [Ticket Paris Région Aéroports](https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/ticket-paris-region-aeroports) coûte 14 € par trajet au plein tarif et 7 € au tarif réduit. Il concerne notamment Orly via la ligne 14 ou Orlyval et Charles-de-Gaulle via le RER B. Navigo Liberté+ facture également les trajets aéroportuaires concernés à part: ils ne bénéficient pas du plafond journalier ordinaire.

Pour préparer ces liaisons avec enfants, poussette et bagages, consultez nos guides pour [rejoindre Orly en métro 14, Orlyval ou taxi](/articles/voyages/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi/) et [rejoindre Roissy-CDG en RER B, bus 9517 ou taxi](/articles/voyages/rejoindre-l-aeroport-paris-cdg-en-famille-rer-b-bus-9517-ou-taxi/).

Pour un adulte, un aller-retour aéroport représente 28 € à lui seul. Il faut l'ajouter au coût des déplacements urbains lorsque le titre choisi ne couvre pas ces liaisons.

Exemple: sur deux jours, deux Navigo Jour coûtent 24,60 €. Avec un aller-retour aéroport à 28 €, le total atteint 52,60 € par adulte. Paris Visite 2 jours coûte 45,40 € et inclut les dessertes d'aéroport: dans ce scénario, il revient 7,20 € moins cher, avant ses éventuels avantages culturels ou commerciaux.

Si vous arrivez tôt ou repartez tard avec les valises, notre guide [consigne à bagages à Paris en famille: gare ou dépôt en ville ?](/articles/vie-pratique/consigne-a-bagages-a-paris-en-famille-gare-ou-depot-en-ville/) compare les solutions selon le quartier et le temps disponible.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/salon-du-chocolat-paris-2026-avec-des-enfants-quel-billet-choisir-et-quels-ateliers-reserver/ | Salon du Chocolat Paris 2026 avec des enfants: quel billet choisir et quels ateliers réserver | evenements | Paris, Paris, Île-de-France
- /articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/ | Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite | sorties | Paris, Paris, Île-de-France
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/evenements/planete-ocean-a-paris-preparer-la-visite-en-famille/ | Planète Océan à Paris: préparer la visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/bons-plans/sainte-chapelle-et-conciergerie-en-famille-a-paris-quels-billets-choisir/ | Sainte-Chapelle et Conciergerie en famille à Paris: quels billets choisir ? | bons-plans | Paris, Paris, Île-de-France
- /articles/evenements/cite-immersive-des-fables-a-paris-decouvrir-la-fontaine-en-famille/ | Cité immersive des Fables à Paris: découvrir La Fontaine en famille | evenements | Paris, Paris, Île-de-France
- /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | Atelier couture gratuit à Paris le 28 novembre 2026: dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-des-lumieres-avec-un-enfant-quel-programme-choisir-et-peut-on-venir-avec-une-poussette/ | Atelier des Lumières avec un enfant: quel programme choisir et peut-on venir avec une poussette ? | activites | Paris, Paris, Île-de-France
- /articles/vie-pratique/changer-de-gare-a-paris-avec-des-enfants-preparer-sa-correspondance/ | Changer de gare à Paris avec des enfants: préparer sa correspondance | vie-pratique | Paris, Paris, Île-de-France
- /articles/parentalite/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes/ | Maisons des 1000 premiers jours à Paris: deux adresses pour les parents et les bébés | parentalite | Paris, Paris, Île-de-France
- /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | Atelier bâton de pluie gratuit à Paris le 18 novembre 2026: dès 6 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | Lecture d'hiver gratuite à Paris le 12 décembre 2026: deux séances pour les 1-3 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/spectacle-de-noel-gratuit-a-paris-le-5-decembre-2026-p-tit-loup-et-la-magie-en-famille/ | Spectacle de Noël gratuit à Paris le 5 décembre 2026: Mon p'tit loup magique | evenements | Paris, Paris, Île-de-France
- /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | Bricolages de Noël gratuits à Paris le 19 décembre 2026: un atelier dès 4 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-deco-de-noel-gratuit-a-paris-le-28-novembre-2026-creer-en-recup-art-des-8-ans/ | Atelier déco de Noël gratuit à Paris le 28 novembre 2026: bricolage dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/sorties/soiree-jeux-gratuite-a-paris-le-21-novembre-2026-jeux-video-et-jeux-de-societe-en-famille/ | Soirée jeux gratuite à Paris le 21 novembre 2026: jeux vidéo et jeux de société en famille | sorties | Paris, Paris, Île-de-France
- /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | Atelier Calder à Paris le 14 novembre 2026: fabriquer un mobile dès 5 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | Contes gratuits à Paris le 14 novembre 2026: trois rendez-vous en famille | evenements | Paris, Paris, Île-de-France
- /articles/voyages/visiter-le-theatre-antique-d-orange-en-famille/ | Visiter le Théâtre antique d’Orange en famille | voyages | Orange, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/voyages/alligator-bay-en-famille-decouvrir-les-reptiles-et-preparer-sa-visite/ | Alligator Bay en famille: découvrir les reptiles et préparer sa visite | voyages | Beauvoir, Manche, Normandie
- /articles/voyages/samoens-en-famille-cet-hiver-un-premier-sejour-a-la-neige-avec-ou-sans-ski/ | Samoëns en famille cet hiver: un premier séjour à la neige avec ou sans ski | voyages | Samoëns, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/voyages/honfleur-en-famille-hors-saison-que-faire-le-temps-d-un-week-end/ | Honfleur en famille hors saison: que faire le temps d'un week-end ? | voyages | Honfleur, Calvados, Normandie

### Historique Radar lié

- opportunity | /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | 2026-11-05T16:36:05.180Z
- opportunity | /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | 2026-11-05T04:36:26.347Z
- opportunity | /articles/activites/atelier-deco-de-noel-gratuit-a-paris-le-28-novembre-2026-creer-en-recup-art-des-8-ans/ | 2026-11-05T23:35:44.031Z
- opportunity | /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | 2026-11-06T12:30:50.449Z
- opportunity | /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | 2026-11-06T03:27:40.597Z
- opportunity | /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | 2026-11-05T13:27:24.356Z
- opportunity | /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | 2026-11-06T09:33:42.136Z
- refresh | /articles/parentalite/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes/ | 2026-11-18T05:37:16.469Z
- opportunity | /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | 2026-10-06T19:20:39.093Z
- opportunity | /articles/sorties/soiree-jeux-gratuite-a-paris-le-21-novembre-2026-jeux-video-et-jeux-de-societe-en-famille/ | 2026-11-05T19:28:08.723Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
