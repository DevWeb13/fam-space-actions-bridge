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
title: "Disneyland Paris en RER A avec des enfants: trajet et tarifs 2026"
subtitle: Le bon train vers Marne-la-Vallée-Chessy, les tickets selon l'âge et le retour après les parcs
summary: Depuis Paris, le RER A rejoint directement Disneyland Paris. Direction à vérifier, prix des tickets pour chaque âge, correspondances, poussette et précautions pour le dernier train du soir.
category: voyages
location:
  city: Chessy
  department: Seine-et-Marne
  region: Île-de-France
image:
  src: /images/articles/2026/10/disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026.webp
  alt: Rame du RER A à quai en gare de Marne-la-Vallée-Chessy
sources:
  - title: Disneyland Paris - Comment venir aux parcs
    url: https://www.disneylandparis.com/fr-fr/services-visiteurs/comment-venir-a-disneyland-paris
  - title: Île-de-France Mobilités - Tarifs des transports 2026
    url: https://www.iledefrance-mobilites.fr/tarifs-titre-de-transport-en-commun-2026
  - title: Île-de-France Mobilités - Ticket Métro-Train-RER et correspondances
    url: https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/ticket-metro-train-rer
  - title: Île-de-France Mobilités - Réduction enfants de 4 à moins de 10 ans
    url: https://www.iledefrance-mobilites.fr/titres-et-tarifs/tarifs-reduits/enfants-4-10-ans
  - title: Île-de-France Mobilités - Gratuité avant 4 ans
    url: https://www.iledefrance-mobilites.fr/gratuite-pour-les-enfants-de-moins-de-4-ans
  - title: Île-de-France Mobilités - Voyager en famille avec Navigo Easy
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/passe-navigo-easy/voyage-groupe-famille
  - title: RATP - État des ascenseurs en direct
    url: https://www.ratp.fr/services/etat-equipement
  - title: RATP - Information trafic RER A
    url: https://www.ratp.fr/infos-trafic/rer-transilien/a
  - title: Disneyland Paris - Staycity Aparthotels et ses services
    url: https://www.disneylandparis.com/fr-be/hotels/staycity-aparthotels
reviewAt: 2026-12-15
topic:
  key: voyages|chessy|disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026|2026
  keywords:
    - RER A Disneyland Paris enfants
    - ticket RER Paris Disneyland 2026
    - Marne-la-Vallée Chessy en famille
slug: disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026
status: published
publishedAt: 2026-10-31T04:29:30.562Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Chessy
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/voyages/(2026)/(10)/disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026/index.md
  targetSha: 80c71257cd10a3a1a0296854c07a95e2351941ea
  targetUrl: /articles/voyages/disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026/
  decision: Calculer le coût réel du RER A pour toute la famille, supports de validation compris, et choisir comment acheter et valider les billets avant le départ.
  affiliationPotential: Conserver les liens Booking existants vers le billet Disneyland et l'hébergement Staycity; aucune nouvelle offre nécessaire.
  gsc:
    retrievedAt: 2026-11-10T01:34:08+01:00
    dataThrough: 2026-11-07
    signal: uncertain
    basis: "Visibilité récente : 35 impressions sur trois jours, puis 1 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-01
    peakEnd: 2026-11-03
    recentStart: 2026-11-05
    recentEnd: 2026-11-07
    peakImpressions: 35
    recentImpressions: 1
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - ticket rer a disneyland paris
      - rer a disney
      - rer disneyland paris tarif
---

## Mission retenue
Actualiser le guide du RER A vers Disneyland Paris avec des enfants, en précisant les frais et contraintes des supports de transport.

## Pourquoi cette mission
Le snapshot GSC montre 35 impressions du 1er au 3 novembre contre 1 du 5 au 7 novembre; la cause n'est pas établie. Une lacune indépendante est vérifiée: l'exemple familial annonce 15,40 € aller-retour en tickets mais omet le coût initial de 2 € par passe Navigo Easy, soit jusqu'à 8 € supplémentaires pour quatre voyageurs payants sans support existant. Cette omission peut fausser le budget annoncé.

## Décision du lecteur
Savoir combien payer réellement pour deux adultes et deux enfants, quels supports prévoir pour chacun et comment éviter une mauvaise surprise aux portiques.

## Faits à traiter
- Conserver les tarifs 2026 confirmés: 2,55 € plein tarif, 1,30 € réduit, gratuité des moins de quatre ans et exemple de 15,40 € pour quatre voyageurs.
- Ajouter le prix officiel de 2 € par nouveau passe Navigo Easy, distinct du ticket; pour l'exemple de quatre personnes sans support, 15,40 € + 8 € = 23,40 €. Ne pas présenter ces 8 € comme systématiques si les supports sont déjà possédés ou si des solutions mobiles compatibles sont utilisées.
- Préciser qu'un passe physique ne permet pas de valider plusieurs voyageurs simultanément et que les tickets plein tarif et réduit ne peuvent pas cohabiter sur le même passe. Vérifier les modalités précises des cartes multiples sur iPhone avant de maintenir cette affirmation.
- Préserver direction du RER A, correspondances, retour nocturne, poussette, ascenseurs, photos/crédits, liens internes et les deux offres Booking.

## Sources de départ
- Île-de-France Mobilités, tarifs 2026: https://www.iledefrance-mobilites.fr/tarifs-titre-de-transport-en-commun-2026
- Île-de-France Mobilités, passe Navigo Easy (2 €): https://tzen4.iledefrance-mobilites.fr/titres-et-tarifs/supports/passe-navigo-easy
- Île-de-France Mobilités, compatibilité des tickets sur Navigo Easy: https://www.iledefrance-mobilites.fr/aide-et-contacts/passe-navigo-easy/quels-titres-de-transports-puis-je-charger-sur-mon-passe-navigo-easy

## Affiliation
Conserver les offres Booking déjà intégrées pour les entrées Disneyland et l'hébergement à Bailly-Romainvilliers, sans modifier leurs URLs.

## Continuations internes
- Laisser au guide « Transports à Paris avec des enfants: quel titre choisir pour payer juste ? » la comparaison générale des forfaits.
- Laisser au guide « Paris avec une poussette » le détail des itinéraires accessibles.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/voyages/(2026)/(10)/disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026/index.md

---
title: "Disneyland Paris en RER A avec des enfants: trajet et tarifs 2026"
subtitle: Le bon train vers Marne-la-Vallée-Chessy, les tickets selon l'âge et le retour après les parcs
summary: Depuis Paris, le RER A rejoint directement Disneyland Paris. Direction à vérifier, prix des tickets pour chaque âge, correspondances, poussette et précautions pour le dernier train du soir.
category: voyages
location:
  city: Chessy
  department: Seine-et-Marne
  region: Île-de-France
image:
  src: "/images/articles/2026/10/disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026.webp"
  alt: "Rame du RER A à quai en gare de Marne-la-Vallée-Chessy"
sources:
  - title: Disneyland Paris - Comment venir aux parcs
    url: https://www.disneylandparis.com/fr-fr/services-visiteurs/comment-venir-a-disneyland-paris
  - title: Île-de-France Mobilités - Tarifs des transports 2026
    url: https://www.iledefrance-mobilites.fr/tarifs-titre-de-transport-en-commun-2026
  - title: Île-de-France Mobilités - Ticket Métro-Train-RER et correspondances
    url: https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/ticket-metro-train-rer
  - title: Île-de-France Mobilités - Réduction enfants de 4 à moins de 10 ans
    url: https://www.iledefrance-mobilites.fr/titres-et-tarifs/tarifs-reduits/enfants-4-10-ans
  - title: Île-de-France Mobilités - Gratuité avant 4 ans
    url: https://www.iledefrance-mobilites.fr/gratuite-pour-les-enfants-de-moins-de-4-ans
  - title: Île-de-France Mobilités - Voyager en famille avec Navigo Easy
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/passe-navigo-easy/voyage-groupe-famille
  - title: RATP - État des ascenseurs en direct
    url: https://www.ratp.fr/services/etat-equipement
  - title: RATP - Information trafic RER A
    url: https://www.ratp.fr/infos-trafic/rer-transilien/a
  - title: Disneyland Paris - Staycity Aparthotels et ses services
    url: https://www.disneylandparis.com/fr-be/hotels/staycity-aparthotels
reviewAt: 2026-12-15
topic:
  key: voyages|chessy|disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026|2026
  keywords:
    - RER A Disneyland Paris enfants
    - ticket RER Paris Disneyland 2026
    - Marne-la-Vallée Chessy en famille
slug: disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026
status: published
publishedAt: 2026-10-31T04:29:30.562Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Chessy
---
<!-- article-image-credit -->
*Photo: [Idris2000](https://commons.wikimedia.org/wiki/File:Marne-la-Vall%C3%A9e_-_Chessy_RER_2020_04.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Depuis Paris, le **RER A direction Marne-la-Vallée-Chessy** vous dépose juste devant Disneyland Paris, sans navette supplémentaire. Disneyland Paris annonce environ **35 minutes depuis Nation**. Avec des enfants, les deux points à préparer sont le titre de transport adapté à chaque âge et le trajet de retour après les parcs.

## Quel RER prendre et où descendre ?

<!-- article-image-body:01 -->

![Quai du RER A en direction de Marne-la-Vallée-Chessy à Val de Fontenay](/images/articles/2026/10/disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026-body-01.webp)

*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Gare_Val_Fontenay_RER_A_Fontenay_Bois_10.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

À Paris, le RER A dessert notamment Charles-de-Gaulle-Étoile, Auber, Châtelet-Les Halles, Gare de Lyon et Nation. Selon votre point de départ, rejoignez l'une de ces gares directement ou par une correspondance.

**Vérifiez la destination affichée: Marne-la-Vallée-Chessy.** Tous les RER A ne vont pas à Disneyland: la ligne possède plusieurs branches, dont celle de Boissy-Saint-Léger. Descendez au terminus Marne-la-Vallée-Chessy et suivez les indications vers les parcs. Les 35 minutes annoncées concernent **Nation**, pas l'ensemble d'un trajet depuis n'importe quelle adresse parisienne.

## Combien coûte le RER en famille en 2026 ?

Le **ticket Métro-Train-RER** permet de voyager de Paris jusqu'à Chessy sans supplément de zone. Tarifs officiels 2026, par personne et par trajet:

- **Adultes et enfants à partir de 10 ans: 2,55 €**, soit 5,10 € aller-retour.
- **Enfants de 4 ans à moins de 10 ans: 1,30 €**, soit 2,60 € aller-retour.
- **Moins de 4 ans: gratuit**, sans titre de transport, avec un justificatif d'âge à pouvoir présenter.

Pour **deux adultes et deux enfants de 6 et 8 ans**, le total atteint **15,40 € aller-retour** en tickets à l'unité, hors autres déplacements. Si vous prévoyez plusieurs trajets dans Paris le même jour, un forfait peut être plus intéressant. Notre guide [Transports à Paris avec des enfants: quel titre choisir pour payer juste ?](https://www.fam-space.fr/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/) aide à faire cette comparaison.

## Acheter et valider les tickets sans se tromper

<!-- article-image-body:02 -->

![Passe de transport Navigo Easy utilisable sur les réseaux franciliens](/images/articles/2026/10/disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026-body-02.webp)

*Photo: [James Tamim](https://commons.wikimedia.org/wiki/File:Navigo_Easy.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Les tickets peuvent être chargés sur un **passe Navigo Easy** ou un smartphone compatible. **Chaque voyageur payant doit avoir son propre titre et son propre support**: un seul passe Navigo Easy ne peut pas servir à faire passer toute la famille. Sur iPhone, l'application Cartes permet toutefois de créer plusieurs cartes de transport distinctes sur le même appareil et de les valider séparément.

Un ticket Métro-Train-RER couvre les correspondances **métro, train et RER pendant deux heures à partir de la première validation**, sans sortir du réseau. Il ne couvre **ni les bus ni les tramways**: si vous commencez par un bus, prévoyez le titre correspondant. Il faut également un nouveau ticket pour le retour de Chessy vers Paris.

## Avec une poussette ou un bébé

<!-- article-image-body:03 -->

![Hall intérieur de la gare de Marne-la-Vallée-Chessy à proximité de Disneyland Paris](/images/articles/2026/10/disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026-body-03.webp)

<!-- /article-image-body:03 -->

La gare de Chessy se trouve devant les parcs, mais les accès aux quais et les correspondances parisiennes peuvent comporter des escaliers ou des ascenseurs hors service. Vérifiez les équipements au départ, à l'arrivée et à chaque changement sur la page RATP [État des ascenseurs](https://www.ratp.fr/services/etat-equipement).

Pour un enfant de moins de 4 ans en poussette, Île-de-France Mobilités prévoit de **demander au guichet l'ouverture des portes latérales** aux portiques. Si vous ne pouvez pas porter la poussette, examinez l'itinéraire complet avant de choisir votre correspondance. Notre guide [Paris avec une poussette: métro, RER, bus ou tram ?](https://www.fam-space.fr/articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/) détaille les alternatives.

## Préparer le retour après le spectacle nocturne

Avant de décider de rester jusqu'au dernier spectacle, vérifiez les **horaires des derniers RER A vers Paris**, les travaux et les interruptions pour votre date sur [l'information trafic RER A de la RATP](https://www.ratp.fr/infos-trafic/rer-transilien/a). Contrôlez aussi la dernière correspondance si votre hébergement n'est pas directement desservi par le RER A.

Un horaire habituel ne garantit pas qu'un train circule un soir de travaux. Avec de jeunes enfants, prévoyez une marge entre la sortie du parc, l'accès à la gare et le dernier départ utile.

## Billet d'entrée et nuit près des parcs

**Le ticket de RER ne comprend pas l'entrée à Disneyland Paris.** Pour réserver les parcs, consultez les [billets Disneyland Paris sur Booking.com](https://www.booking.com/attractions/fr/prjyfitkuhfz-one-day-admission-to-disneylandr-paris.fr.html). Vérifiez les dates, le nombre de parcs, les âges, les conditions d'annulation et les prestations incluses. Le transport jusqu'aux parcs n'est pas compris.

Si vous préférez éviter le RER tard le soir, [Staycity Aparthotels near Disneyland Paris sur Booking.com](https://www.booking.com/hotel/fr/staycity-aparthotels-paris-marne-la-vallee.fr.html) propose des appartements avec cuisine et une navette gratuite vers les parcs. L'établissement est situé à **Bailly-Romainvilliers**, et non à la sortie de la gare de Chessy. Vérifiez les horaires de navette, la capacité du logement et les disponibilités aux dates de votre séjour.

Pour comparer une journée depuis Paris à un séjour sur place, consultez notre guide [Disneyland Paris en famille en 2026: combien de jours, quel hôtel et quel budget prévoir ?](https://www.fam-space.fr/articles/voyages/disneyland-paris-en-famille-en-2026-combien-de-jours-quel-hotel-et-quel-budget-prevoir/).

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/voyages/halloween-2026-a-disneyland-paris-en-famille-billets-hotel-et-duree-du-sejour/ | Halloween 2026 à Disneyland Paris en famille: billets, hôtel et durée du séjour | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/voyages/disneyland-paris-en-famille-en-2026-combien-de-jours-quel-hotel-et-quel-budget-prevoir/ | Disneyland Paris en famille en 2026: combien de jours, quel hôtel et quel budget prévoir | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | Noël 2026 à Disneyland Paris: faut-il un billet 2 parcs pour voir Arendelle? | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/evenements/la-legende-des-chevaliers-a-provins-en-famille-tarifs-horaires-et-conseils-2026/ | La Légende des Chevaliers à Provins en famille: tarifs, horaires et conseils 2026 | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | Noël des Siècles 2026 à Champs-sur-Marne: billets, budget et horaires en famille | evenements | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/cuisine/visiter-une-cave-d-affinage-de-brie-a-jouarre-ce-qu-il-faut-savoir-avec-des-enfants/ | Visiter une cave d'affinage de brie à Jouarre: ce qu'il faut savoir avec des enfants | cuisine | Jouarre, Seine-et-Marne, Île-de-France
- /articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/ | Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite | sorties | Paris, Paris, Île-de-France
- /articles/voyages/chateau-de-versailles-depuis-paris-avec-des-enfants-rer-c-train-n-ou-l/ | Château de Versailles depuis Paris avec des enfants: RER C, train N ou L ? | voyages | Versailles, Yvelines, Île-de-France
- /articles/voyages/disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026/ | Disneyland Paris en RER A avec des enfants: trajet et tarifs 2026 | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/sorties/musee-de-la-grande-guerre-a-meaux-avec-des-enfants-que-voir-selon-leur-age/ | Musée de la Grande Guerre à Meaux avec des enfants: que voir selon leur âge ? | sorties | Meaux, Seine-et-Marne, Île-de-France
- /articles/voyages/chateau-de-fontainebleau-depuis-paris-en-famille-train-r-bus-3401-et-budget/ | Château de Fontainebleau depuis Paris en famille: train R, bus 3401 et budget | voyages | Fontainebleau, Seine-et-Marne, Île-de-France
- /articles/evenements/marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants/ | Marie-Antoinette à Fontainebleau 2026-2027: exposition, visites et tarifs en famille | evenements | Fontainebleau, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | Noël à Provins 2026: marché médiéval, animations et visites en famille | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | Grand Noël 2026 à Vaux-le-Vicomte en famille: billets, offre enfant et animations | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/bons-plans/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/ | Château de Champs-sur-Marne en famille: gratuités, tarifs et dates à éviter | bons-plans | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/parentalite/laep-en-seine-et-marne-ou-aller-et-comment-se-passe-une-premiere-visite/ | LAEP en Seine-et-Marne: où aller et comment se passe une première visite? | parentalite | Meaux, Seine-et-Marne, Île-de-France
- /articles/voyages/refuge-de-l-arche-en-famille-decouvrir-les-animaux-recueillis-et-preparer-sa-visite/ | Refuge de l’Arche en famille: découvrir les animaux recueillis et préparer sa visite | voyages | Château-Gontier-sur-Mayenne, Mayenne, Pays de la Loire
- /articles/voyages/la-vallee-des-saints-a-carnoet-visiter-les-geants-de-granit-en-famille/ | La Vallée des Saints à Carnoët: visiter les géants de granit en famille | voyages | Carnoët, Côtes-d'Armor, Bretagne
- /articles/voyages/week-end-dans-l-auxois-en-famille-chateau-de-bussy-rabutin-et-semur-en-auxois/ | Week-end dans l'Auxois en famille: château de Bussy-Rabutin et Semur-en-Auxois | voyages | Côte-d'Or, Bourgogne-Franche-Comté
- /articles/voyages/musee-du-jouet-de-poissy-en-famille-visite-tarifs-et-exposition-sur-le-precinema/ | Musée du Jouet de Poissy en famille: visite, tarifs et exposition sur le précinéma | voyages | Poissy, Yvelines, Île-de-France

### Historique Radar lié

- refresh | /articles/bons-plans/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/ | 2026-11-07T10:31:03.300Z
- opportunity | /articles/voyages/chateau-de-fontainebleau-depuis-paris-en-famille-train-r-bus-3401-et-budget/ | 2026-10-31T16:31:36.357Z
- opportunity | /articles/voyages/chateau-de-versailles-depuis-paris-avec-des-enfants-rer-c-train-n-ou-l/ | 2026-10-31T07:32:47.278Z
- opportunity | /articles/voyages/disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026/ | 2026-10-31T04:29:30.633Z
- opportunity | /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | 2026-10-20T22:29:05.422Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- refresh | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-11-07T00:30:17.397Z
- opportunity | /articles/evenements/marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants/ | 2026-10-27T18:27:41.322Z
- opportunity | /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | 2026-10-02T21:22:46.733Z
- opportunity | /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | 2026-10-24T03:31:56.628Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
