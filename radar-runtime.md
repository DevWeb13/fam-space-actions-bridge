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
title: "Réserve Africaine de Sigean: combien de temps prévoir entre safari et visite à pied ?"
subtitle: "Safari, visite à pied ou Lumières d'Afrique: les bons horaires pour organiser la journée avec des enfants"
summary: "Durée, tarifs, horaires d'automne, billets Lumières d'Afrique, poussette et repas: préparez une journée à la Réserve Africaine de Sigean."
slug: reserve-africaine-de-sigean-combien-de-temps-prevoir-entre-safari-et-visite-a-pied
status: published
publishedAt: 2026-09-10T16:05:53+02:00
updatedAt: 2026-10-02T18:25:59.863Z
category: sorties
readingTime: 6
location:
  city: Sigean
  department: Aude
  region: Occitanie
topic:
  key: sorties|sigean|reserve-africaine-de-sigean-combien-de-temps-prevoir-entre-safari-et-visite-a-pied|2026
  keywords:
    - Réserve Africaine de Sigean avec enfants
    - durée visite Réserve Africaine Sigean
image:
  src: /images/articles/2026/09/reserve-africaine-de-sigean-combien-de-temps-prevoir-entre-safari-et-visite-a-pied.webp
  alt: Des girafes dans la Réserve Africaine de Sigean
affiliate:
  enabled: true
  type: travel
  destination: Sigean
sources:
  - title: Réserve Africaine de Sigean - FAQ
    url: https://www.reserveafricainesigean.fr/infos-pratiques/faq/
    accessedAt: 2026-10-02
  - title: Réserve Africaine de Sigean - Horaires
    url: https://www.reserveafricainesigean.fr/infos-pratiques/horaires/
    accessedAt: 2026-10-02
  - title: Réserve Africaine de Sigean - Billetterie
    url: https://www.reserveafricainesigean.fr/billetterie/achat-de-billet/
    accessedAt: 2026-10-02
  - title: Réserve Africaine de Sigean - Lumières d'Afrique
    url: https://www.reserveafricainesigean.fr/visitez-la-reserve/lumieres-d-afrique/
    accessedAt: 2026-10-02
  - title: Réserve Africaine de Sigean - Application du parc
    url: https://www.reserveafricainesigean.fr/visitez-la-reserve/application-du-parc/
    accessedAt: 2026-10-02
  - title: Réserve Africaine de Sigean - Accueil
    url: https://www.reserveafricainesigean.fr/
    accessedAt: 2026-10-02
  - title: Réserve Africaine de Sigean - Restauration et pique-nique
    url: https://www.reserveafricainesigean.fr/infos-pratiques/restauration-pique-nique/
    accessedAt: 2026-10-02
  - title: Réserve Africaine de Sigean - Accès au parc
    url: https://www.reserveafricainesigean.fr/infos-pratiques/acces-au-parc/
    accessedAt: 2026-10-02
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/sorties/(2026)/(09)/reserve-africaine-de-sigean-combien-de-temps-prevoir-entre-safari-et-visite-a-pied/index.md
  targetSha: cc92588b45f110efbb6dcea17742f52896d21640
  targetUrl: /articles/sorties/reserve-africaine-de-sigean-combien-de-temps-prevoir-entre-safari-et-visite-a-pied/
  decision: Choisir une arrivée réaliste en hiver pour faire le safari et le parcours à pied, avec ou sans Lumières d'Afrique, sans se tromper sur l'heure d'ouverture.
  affiliationPotential: Conserver le lien d'hébergement Booking.com à Sigean pour les familles qui prolongent la soirée; ne pas substituer un partenaire à la billetterie officielle.
  gsc:
    retrievedAt: 2026-11-19T01:30:40+01:00
    dataThrough: 2026-11-16
    signal: needs_query_check
    basis: Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.
    peakStart: 2026-10-23
    peakEnd: 2026-10-29
    recentStart: 2026-11-10
    recentEnd: 2026-11-16
    peakImpressions: 131
    recentImpressions: 30
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Réserve Africaine de Sigean avec enfants
      - durée visite Réserve Africaine Sigean
---

## Mission retenue
Actualiser les horaires d'hiver de la Réserve Africaine de Sigean dans le guide familial déjà publié, en distinguant les horaires du safari, du parcours à pied et de Lumières d'Afrique.

## Pourquoi cette mission
L'article affirme « La Réserve ouvre tous les jours à 9 h », alors que le tableau officiel actuellement publié indique une ouverture à 10 h et, du 25 octobre 2026 au 27 mars 2027, une fermeture des caisses et du safari à 16 h, puis du parcours à pied à 17 h 30 (17 h pendant Lumières d'Afrique). C'est une erreur pratique indépendante de la baisse GSC, dont la cause reste inconnue.

## Décision du lecteur
Savoir à quelle heure arriver pour voir les animaux sans perdre la visite à pied, et décider si le parcours lumineux vaut de prolonger la journée.

## Faits à traiter
Vérifier et corriger l'ouverture à 10 h et la fermeture à pied avancée à 17 h les jours de Lumières d'Afrique; distinguer les dates du festival (week-ends et vacances jusqu'au 17 janvier 2027), le billet jour avec accès lumineux et le billet soirée sans animaux. Contrôler les tarifs avant toute réécriture. Conserver le safari en véhicule personnel, les durées, la règle de sortie définitive, les informations poussette et repas, les photos et crédits, les liens internes et l'hébergement existant. Ne pas transformer la page en article distinct sur le festival.

## Sources de départ
- https://www.reserveafricainesigean.fr/infos-pratiques/horaires/
- https://www.reserveafricainesigean.fr/billetterie/achat-de-billet/
- https://www.reserveafricainesigean.fr/visitez-la-reserve/lumieres-d-afrique/

## Affiliation
L'hébergement Booking.com à Sigean reste utile après une visite jusqu'à 20 h. Pas d'autre offre partenaire vérifiée.

## Continuations internes
Conserver le positionnement « durée safari + marche »; le festival reste un choix complémentaire, non un doublon éditorial. Vérifier la cohérence du conseil d'arrivée matinale avec l'ouverture officielle à 10 h.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/sorties/(2026)/(09)/reserve-africaine-de-sigean-combien-de-temps-prevoir-entre-safari-et-visite-a-pied/index.md

---
title: "Réserve Africaine de Sigean: combien de temps prévoir entre safari et visite à pied ?"
subtitle: "Safari, visite à pied ou Lumières d'Afrique: les bons horaires pour organiser la journée avec des enfants"
summary: "Durée, tarifs, horaires d'automne, billets Lumières d'Afrique, poussette et repas: préparez une journée à la Réserve Africaine de Sigean."
slug: reserve-africaine-de-sigean-combien-de-temps-prevoir-entre-safari-et-visite-a-pied
status: published
publishedAt: 2026-09-10T16:05:53+02:00
updatedAt: 2026-10-02T18:25:59.863Z
category: sorties
readingTime: 6
location:
  city: Sigean
  department: Aude
  region: Occitanie
topic:
  key: sorties|sigean|reserve-africaine-de-sigean-combien-de-temps-prevoir-entre-safari-et-visite-a-pied|2026
  keywords:
    - Réserve Africaine de Sigean avec enfants
    - durée visite Réserve Africaine Sigean
image:
  src: /images/articles/2026/09/reserve-africaine-de-sigean-combien-de-temps-prevoir-entre-safari-et-visite-a-pied.webp
  alt: Des girafes dans la Réserve Africaine de Sigean
affiliate:
  enabled: true
  type: travel
  destination: Sigean
sources:
  - title: Réserve Africaine de Sigean - FAQ
    url: https://www.reserveafricainesigean.fr/infos-pratiques/faq/
    accessedAt: 2026-10-02
  - title: Réserve Africaine de Sigean - Horaires
    url: https://www.reserveafricainesigean.fr/infos-pratiques/horaires/
    accessedAt: 2026-10-02
  - title: Réserve Africaine de Sigean - Billetterie
    url: https://www.reserveafricainesigean.fr/billetterie/achat-de-billet/
    accessedAt: 2026-10-02
  - title: Réserve Africaine de Sigean - Lumières d'Afrique
    url: https://www.reserveafricainesigean.fr/visitez-la-reserve/lumieres-d-afrique/
    accessedAt: 2026-10-02
  - title: Réserve Africaine de Sigean - Application du parc
    url: https://www.reserveafricainesigean.fr/visitez-la-reserve/application-du-parc/
    accessedAt: 2026-10-02
  - title: Réserve Africaine de Sigean - Accueil
    url: https://www.reserveafricainesigean.fr/
    accessedAt: 2026-10-02
  - title: Réserve Africaine de Sigean - Restauration et pique-nique
    url: https://www.reserveafricainesigean.fr/infos-pratiques/restauration-pique-nique/
    accessedAt: 2026-10-02
  - title: Réserve Africaine de Sigean - Accès au parc
    url: https://www.reserveafricainesigean.fr/infos-pratiques/acces-au-parc/
    accessedAt: 2026-10-02
---

<!-- article-image-credit -->
*Photo: [Sacamol](https://commons.wikimedia.org/wiki/File:Girafes_Sigean.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

La Réserve Africaine de Sigean, entre Narbonne et Perpignan, se visite en deux temps: un safari avec votre véhicule, puis un parc à pied. Comptez environ 1 heure en voiture et 2 h 30 à 3 heures de marche. Avec le repas et les pauses, la journée entière est le format le plus confortable avec des enfants.

À partir du 25 octobre 2026, un second choix s'ajoute: prolonger la visite avec **Lumières d'Afrique** ou acheter un billet pour ce parcours lumineux seulement. La formule du soir ne permet pas de voir les animaux et ne remplace donc pas le safari.

## Combien de temps faut-il prévoir pour visiter la Réserve de Sigean?

La [FAQ officielle](https://www.reserveafricainesigean.fr/infos-pratiques/faq/) annonce environ 1 heure pour le safari et entre 2 h 30 et 3 heures pour la promenade à pied. La plupart des visiteurs restent la journée.

Ces durées correspondent aux parcours eux-mêmes. Avec un déjeuner, les arrêts devant les animaux et les besoins d'un jeune enfant, prévoyez plutôt **5 à 6 heures sur place**. Arriver le matin évite de raccourcir la partie à pied et laisse une marge pour refaire le safari en fin de journée si des animaux se sont peu montrés au premier passage.

## Safari d'abord ou parc à pied?

<!-- article-image-body:01 -->

![Un rhinocéros au milieu de la voie réservée aux voitures dans la Réserve Africaine de Sigean](/images/articles/2026/09/reserve-africaine-de-sigean-combien-de-temps-prevoir-entre-safari-et-visite-a-pied-body-01.webp)

*Photo: [Gordito1869](https://commons.wikimedia.org/wiki/File:R%C3%A9serve_Africaine_Nashorn_1.jpg) - [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Avec une arrivée à l'ouverture, commencer par le safari est le déroulé le plus simple: les enfants découvrent les animaux depuis la voiture, puis la famille garde le reste de la journée pour marcher, déjeuner et faire des pauses. L'ordre inverse reste possible si vous voulez revenir au safari plus tard.

Le circuit voiture se fait obligatoirement avec votre propre voiture, camping-car ou bus. Les motos, vélos et voitures décapotables ne sont pas admis. Ne prévoyez donc pas une arrivée en taxi suivie d'une visite complète sans solution pour le safari.

L'[application gratuite du parc](https://www.reserveafricainesigean.fr/visitez-la-reserve/application-du-parc/) aide à repérer les animaux, les toilettes, les points de restauration et l'itinéraire conseillé. Elle est surtout utile pour décider quelles zones à pied garder si les enfants fatiguent.

## Visite de jour et Lumières d'Afrique, ou soirée seule?

La troisième édition de [Lumières d'Afrique](https://www.reserveafricainesigean.fr/visitez-la-reserve/lumieres-d-afrique/) est annoncée du **25 octobre 2026 au 17 janvier 2027**, uniquement les week-ends et pendant les vacances scolaires. Le parcours lumineux ouvre de 17 h 30 à 20 h.

Deux formules sont proposées:

- Le billet de jour permet de visiter les animaux puis d'accéder à Lumières d'Afrique sans supplément aux dates du festival.
- Le billet soirée seule donne accès au parcours lumineux, mais pas au parc animalier. Les animaux du safari et du parc à pied ne sont pas visibles la nuit.

Pour une première visite, choisissez la formule de jour si les animaux sont la priorité. La soirée seule convient plutôt à une famille qui connaît déjà la Réserve ou qui veut uniquement voir les lanternes. L'arrivée pour ce billet est possible de 17 h à 18 h 30.

Rester du matin jusqu'à 20 h peut être long avec un petit enfant. Prévoyez une pause sur place avant 17 h 30. La sortie du parc étant définitive, il ne faut pas quitter le site en pensant revenir pour le parcours lumineux.

## Quel budget prévoir?

La [billetterie officielle](https://www.reserveafricainesigean.fr/billetterie/achat-de-billet/) affiche **34 € par adulte** et **24 € par enfant de 4 à 14 ans** pour la visite de jour. L'entrée est gratuite avant 4 ans. Le tarif pour une personne en situation de handicap est de 14,50 €, sur présentation de la carte mobilité inclusion.

Le Pack Famille s'applique à partir de deux adultes et trois enfants de 4 à 14 ans dans le même véhicule. Il ramène le prix à **31 € par adulte** et **21 € par enfant**.

Pour Lumières d'Afrique uniquement, le billet coûte **17,90 € par adulte** et **14,50 € par enfant de 4 à 14 ans**. L'achat en ligne est obligatoire pour cette formule et le nombre d'entrées est limité. Dans tous les cas, choisissez la date et le créneau d'arrivée avant de finaliser le programme.

## Quels horaires prévoir en automne?

La Réserve ouvre tous les jours à 9 h. Les [horaires officiels](https://www.reserveafricainesigean.fr/infos-pratiques/horaires/) changent selon la période:

- Du 27 septembre au 24 octobre 2026, les caisses ferment à 16 h 30, le safari à 17 h 30 et le parc à pied à 18 h 30.
- Du 25 octobre 2026 au 27 mars 2027, les caisses et le safari ferment à 16 h, puis le parc à pied à 17 h 30.

Ces heures sont des limites de fermeture, pas des heures conseillées pour commencer. Une arrivée à 16 h ne laisse pas assez de temps pour enchaîner le safari et le parcours à pied. Pour une journée avec Lumières d'Afrique, arrivez le matin et gardez de l'énergie pour le parcours nocturne.

## Poussette, bébé et repas

Les chemins du circuit pédestre sont goudronnés, avec des pentes douces, et les poussettes sont autorisées. Le plan et l'application permettent de suivre un itinéraire qui évite les passages les plus pentus.

La [Réserve Africaine de Sigean](https://www.reserveafricainesigean.fr/) annonce aussi un accueil bébé avec coin à langer, micro-ondes et chaises enfant.

Les familles peuvent apporter leur repas et utiliser les aires de pique-nique. La page [restauration et pique-nique](https://www.reserveafricainesigean.fr/infos-pratiques/restauration-pique-nique/) indique aussi quels points sont ouverts le jour de la visite. Les horaires des snacks varient: vérifiez-les si vous comptez dîner ou prendre une collation avant Lumières d'Afrique.

Le meilleur rythme consiste à faire le safari, déjeuner, puis parcourir la partie à pied sans chercher à tout enchaîner. Avec un petit enfant, mieux vaut garder deux ou trois zones prioritaires que transformer les 2 h 30 de marche en parcours forcé.

## Adresse et suite du séjour

La Réserve se trouve **RD 6009, 19 chemin Hameau du Lac, 11130 Sigean**. La page [accès au parc](https://www.reserveafricainesigean.fr/infos-pratiques/acces-au-parc/) détaille les itinéraires depuis les sorties d'autoroute de Sigean et Narbonne Sud. L'accueil est joignable au [04 68 48 20 20](tel:+33468482020).

Après une visite prolongée jusqu'à 20 h, dormir à proximité peut éviter un long trajet avec des enfants. Vous pouvez [chercher un hébergement à Sigean sur Booking.com](https://www.booking.com/city/fr/sigean.fr.html).

Pour poursuivre dans l'Aude, notre guide [Carcassonne en famille en 1 ou 2 jours](/articles/voyages/carcassonne-en-famille-1-ou-2-jours-billets-et-budget-a-prevoir/) aide à choisir la durée et le budget. Une autre journée peut aussi se préparer avec [le jeu de piste du petit archéologue à Puilaurens](/articles/sorties/petit-archeologue-puilaurens-famille-2026/).

À retenir: prévoyez une vraie journée pour voir les animaux. Entre le 25 octobre et le 17 janvier, ajoutez Lumières d'Afrique seulement si les enfants peuvent tenir jusqu'à 20 h; sinon, gardez le safari et le parc à pied comme programme principal.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/voyages/paleosite-de-saint-cesaire-en-famille-combien-de-temps-prevoir-en-2026/ | Paléosite de Saint-Césaire en famille: combien de temps prévoir en 2026? | voyages | Saint-Césaire, Charente-Maritime, Nouvelle-Aquitaine
- /articles/activites/micropolis-avec-de-jeunes-enfants-combien-de-temps-prevoir-et-quoi-emporter/ | Micropolis avec de jeunes enfants: combien de temps prévoir et quoi emporter? | activites | Saint-Léons, Aveyron, Occitanie
- /articles/activites/vallee-des-singes-a-romagne-combien-de-temps-prevoir-pour-la-visite/ | Vallée des Singes à Romagne: combien de temps prévoir pour la visite? | activites | Romagne, Vienne, Nouvelle-Aquitaine
- /articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/ | Mini World Lyon: quel billet choisir en famille et combien de temps prévoir ? | bons-plans | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/sorties/chateau-de-kerjean-avec-des-enfants-combien-de-temps-prevoir-et-quel-billet-choisir/ | Château de Kerjean avec des enfants: combien de temps prévoir et quel billet choisir? | sorties | Saint-Vougay, Finistère, Bretagne
- /articles/activites/anatomik-park-a-cap-sciences-a-partir-de-quel-age-et-combien-de-temps-prevoir/ | Anatomik Park à Cap Sciences: à partir de quel âge et combien de temps prévoir? | activites | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/sorties/centre-historique-minier-de-lewarde-combien-de-temps-prevoir-avec-des-enfants/ | Centre Historique Minier de Lewarde: combien de temps prévoir avec des enfants | sorties | Lewarde, Nord, Hauts-de-France
- /articles/voyages/carcassonne-en-famille-1-ou-2-jours-billets-et-budget-a-prevoir/ | Carcassonne en famille: 1 ou 2 jours, billets et budget à prévoir | voyages | Carcassonne, Aude, Occitanie
- /articles/sorties/reserve-africaine-de-sigean-combien-de-temps-prevoir-entre-safari-et-visite-a-pied/ | Réserve Africaine de Sigean: combien de temps prévoir entre safari et visite à pied ? | sorties | Sigean, Aude, Occitanie
- /articles/voyages/narbonne-en-famille-hors-saison-un-week-end-entre-romains-halles-et-canal/ | Narbonne en famille hors saison: un week-end entre Romains, Halles et canal | voyages | Narbonne, Aude, Occitanie
- /articles/evenements/carnaval-de-limoux-2027-en-famille-dates-fecos-et-conseils-pratiques/ | Carnaval de Limoux 2027 en famille: dates, Fécos et conseils pratiques | evenements | Limoux, Aude, Occitanie
- /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | Saint-Nicolas 2026 à Carcassonne: campements médiévaux et marche aux flambeaux en famille | evenements | Carcassonne, Aude, Occitanie
- /articles/voyages/gouffre-geant-de-cabrespine-en-famille-quelle-visite-choisir-en-2026/ | Gouffre Géant de Cabrespine en famille: quelle visite choisir en 2026? | voyages | Cabrespine, Aude, Occitanie
- /articles/sorties/petit-archeologue-puilaurens-famille-2026/ | Le petit archéologue à Puilaurens: un jeu de piste en famille | sorties | Puilaurens, Aude, Occitanie
- /articles/sorties/chauvigny-en-famille-cite-medievale-et-deux-chasses-aux-tresors/ | Chauvigny en famille: cité médiévale et deux chasses aux trésors | sorties | Chauvigny, Vienne, Nouvelle-Aquitaine
- /articles/sorties/chateau-de-la-motte-tilly-en-famille-visite-jeu-de-piste-et-parc-gratuit/ | Château de La Motte-Tilly en famille: visite, jeu de piste et parc gratuit | sorties | La Motte-Tilly, Aube, Grand Est
- /articles/sorties/musee-de-la-musique-mecanique-aux-gets-une-sortie-en-famille-qui-s-ecoute/ | Musée de la Musique Mécanique aux Gets: une sortie en famille qui s'écoute | sorties | Les Gets, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/sorties/mariana-en-famille-du-musee-aux-vestiges-de-la-cite-antique/ | Mariana en famille: du musée aux vestiges de la cité antique | sorties | Lucciana, Haute-Corse, Corse
- /articles/sorties/espace-des-sciences-a-rennes-avec-des-enfants-expositions-experiences-et-planetarium/ | Espace des sciences à Rennes avec des enfants: expositions, expériences et planétarium | sorties | Rennes, Ille-et-Vilaine, Bretagne
- /articles/sorties/lascaux-iv-en-famille-decouvrir-les-peintures-et-choisir-sa-visite/ | Lascaux IV en famille: découvrir les peintures et choisir sa visite | sorties | Montignac-Lascaux, Dordogne, Nouvelle-Aquitaine
- /articles/sorties/chateau-d-if-a-marseille-en-famille-bateau-visite-et-tarifs/ | Château d'If à Marseille en famille: bateau, visite et tarifs | sorties | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/sorties/cite-du-train-a-mulhouse-en-famille-que-voir-selon-l-age/ | Cité du Train à Mulhouse en famille: que voir selon l’âge ? | sorties | Mulhouse, Haut-Rhin, Grand Est

### Historique Radar lié

- refresh | /articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/ | 2026-11-02T16:35:39.647Z
- refresh | /articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/ | 2026-11-18T11:35:44.875Z
- refresh | /articles/sorties/reserve-africaine-de-sigean-combien-de-temps-prevoir-entre-safari-et-visite-a-pied/ | 2026-10-02T18:25:59.965Z
- opportunity | /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | 2026-10-27T00:35:14.931Z
- refresh | /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | 2026-11-17T06:29:57.590Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
