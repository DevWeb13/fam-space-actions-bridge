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
title: "Colmar avec des enfants quand il pleut: quel musée choisir ?"
subtitle: "Jouets, chocolat ou beaux-arts: trois visites au centre-ville, avec les vrais tarifs selon l'âge et les jours d'ouverture."
summary: "Musée du Jouet, Choco-Story ou Unterlinden: comparez les expériences, les gratuités pour les enfants et les horaires pour organiser une journée pluvieuse à Colmar."
slug: colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir
status: published
publishedAt: 2026-10-19T21:12:31+02:00
updatedAt: null
category: vie-pratique
readingTime: 5
location:
  city: Colmar
  department: Haut-Rhin
  region: Grand Est
topic:
  key: vie-pratique|colmar|colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir|2026
  keywords:
    - Colmar en famille quand il pleut
    - musées Colmar enfants tarifs
image:
  src: /images/articles/2026/10/colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir.webp
  alt: Hall du Musée du Jouet de Colmar, photographié en 2024.
sources:
  - title: Musée du Jouet de Colmar - Informations pratiques
    url: https://museedujouet.colmar.fr/visites/informations-pratiques/
  - title: Musée du Jouet de Colmar - Collections
    url: https://museedujouet.colmar.fr/musee/collections/
  - title: Choco-Story Colmar - Visites, tarifs, ateliers et horaires
    url: https://www.choco-story-colmar.fr/
  - title: Musée Unterlinden - Billets et tarifs
    url: https://www.musee-unterlinden.com/visites-et-activites/infos-2/informations-pratiques/
  - title: Musée Unterlinden - Muséojeux
    url: https://www.musee-unterlinden.com/visites-et-activites/parcours/enfant-famille/museojeux/
affiliate:
  enabled: true
  type: travel
  destination: Colmar
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/vie-pratique/(2026)/(10)/colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir/index.md
  targetSha: 88f43b90ca0f6e62b57bbf9a16a2851ca1c11c1c
  targetUrl: /articles/vie-pratique/colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir/
  decision: Choisir une visite intérieure adaptée à l'âge et au budget des enfants, en tenant compte des activités réellement proposées au Musée du Jouet et de l'accès sans voiture.
  affiliationPotential: Conserver le billet combiné Tiqets Choco-Story + Musée du Jouet, en vérifiant son intérêt selon l'âge, ainsi que l'hébergement Booking existant; ne pas ajouter de partenaire artificiel.
  gsc:
    retrievedAt: 2026-11-10T01:34:08+01:00
    dataThrough: 2026-11-07
    signal: uncertain
    basis: "Visibilité récente : 40 impressions sur trois jours, puis 12 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-21
    peakEnd: 2026-10-23
    recentStart: 2026-11-05
    recentEnd: 2026-11-07
    peakImpressions: 40
    recentImpressions: 12
    commonQueries: 0
    positionDelta: null
    impressionRatio: 1.25
    focusQueries:
      - musée du jouet colmar tarif
      - colmar enfant
      - colmar sous la pluie
      - que faire à colmar quand il pleut
      - colmar enfants
---

## Mission retenue
Actualiser le comparatif familial de trois musées de Colmar sous la pluie, sans transformer le guide en agenda éphémère.

## Pourquoi cette mission
Le snapshot montre 40 impressions du 21 au 23 octobre contre 12 du 5 au 7 novembre, sans cause SEO établie. Les trois premiers candidats ont déjà fait l'objet d'une mission Radar. L'article est utile mais présente le Musée du Jouet surtout comme une collection à regarder: le site officiel annonce désormais l'exposition « 4026 – Des jouets éternels ? », construite autour d'une enquête sur dix jouets, et un agenda d'animations. C'est une amélioration concrète du choix proposé aux familles, indépendante de la baisse GSC.

## Décision du lecteur
Savoir si les enfants préféreront l'enquête et les jouets, la visite chocolatée ou les Muséojeux d'Unterlinden, et choisir une sortie réalisable un jour de pluie sans mauvaise surprise de prix ou d'ouverture.

## Faits à traiter
Vérifier les dates et modalités de l'exposition « 4026 – Des jouets éternels ? » avant de l'intégrer comme activité actuelle; distinguer clairement exposition, visite libre et éventuels ateliers sur réservation. Préciser le trajet depuis la gare de Colmar pour les familles sans voiture (le Musée du Jouet annonce environ 22 minutes à pied, lignes de bus A/B arrêt Vauban), sans supposer que les trois musées sont également proches de la gare. Recontrôler les horaires de novembre et les tarifs par âge. Préserver la comparaison détaillée existante, la gratuité des plus jeunes, la prudence sur le billet combiné, les horaires des trois lieux, les trois photos et leurs crédits, les liens internes et l'affiliation.

## Sources de départ
- https://museedujouet.colmar.fr/
- https://museedujouet.colmar.fr/visites/informations-pratiques/
- https://www.choco-story-colmar.fr/
- https://www.musee-unterlinden.com/visites-et-activites/infos-2/informations-pratiques/
- https://www.musee-unterlinden.com/visites-et-activites/parcours/enfant-famille/museojeux/

## Affiliation
Conserver les liens Tiqets et Booking déjà intégrés, sans promettre une économie non vérifiée.

## Continuations internes
- Garder le guide Destination Colmar comme relais pour le reste du séjour.
- Éviter de détailler les ateliers ponctuels sans horaires et conditions officiels vérifiés.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/vie-pratique/(2026)/(10)/colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir/index.md

---
title: "Colmar avec des enfants quand il pleut: quel musée choisir ?"
subtitle: "Jouets, chocolat ou beaux-arts: trois visites au centre-ville, avec les vrais tarifs selon l'âge et les jours d'ouverture."
summary: "Musée du Jouet, Choco-Story ou Unterlinden: comparez les expériences, les gratuités pour les enfants et les horaires pour organiser une journée pluvieuse à Colmar."
slug: colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir
status: published
publishedAt: 2026-10-19T21:12:31+02:00
updatedAt: null
category: vie-pratique
readingTime: 5
location:
  city: Colmar
  department: Haut-Rhin
  region: Grand Est
topic:
  key: vie-pratique|colmar|colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir|2026
  keywords:
    - Colmar en famille quand il pleut
    - musées Colmar enfants tarifs
image:
  src: "/images/articles/2026/10/colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir.webp"
  alt: "Hall du Musée du Jouet de Colmar, photographié en 2024."
sources:
  - title: Musée du Jouet de Colmar - Informations pratiques
    url: https://museedujouet.colmar.fr/visites/informations-pratiques/
  - title: Musée du Jouet de Colmar - Collections
    url: https://museedujouet.colmar.fr/musee/collections/
  - title: Choco-Story Colmar - Visites, tarifs, ateliers et horaires
    url: https://www.choco-story-colmar.fr/
  - title: Musée Unterlinden - Billets et tarifs
    url: https://www.musee-unterlinden.com/visites-et-activites/infos-2/informations-pratiques/
  - title: Musée Unterlinden - Muséojeux
    url: https://www.musee-unterlinden.com/visites-et-activites/parcours/enfant-famille/museojeux/
affiliate:
  enabled: true
  type: travel
  destination: Colmar
---

À Colmar, dans le Haut-Rhin, la pluie ne condamne pas la journée en famille. Trois musées du centre historique permettent de changer de programme sans quitter la ville: le Musée du Jouet pour retrouver les jeux de plusieurs générations, Choco-Story pour découvrir le chocolat en le dégustant et le musée Unterlinden pour explorer des œuvres avec les enfants. Le bon choix dépend surtout de leur âge, du temps disponible et du prix réel des entrées.

## Musée du Jouet: pour les enfants curieux de jeux et d'objets

<!-- article-image-body:01 -->

![Chevaux et voiturettes-jouets photographiés au musée du Jouet de Colmar en décembre 2008.](/images/articles/2026/10/colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir-body-01.webp)

*Photo: [vincent desjardins](https://commons.wikimedia.org/wiki/File:Au_mus%C3%A9e_du_jouet_de_Colmar.jpg) - [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Au **40 rue Vauban**, le Musée du Jouet présente poupées, trains, automates et jouets anciens ou plus récents. Les collections occupent trois niveaux: c'est une sortie qui plaît autant aux enfants fascinés par les mécanismes qu'aux adultes qui reconnaissent les jeux de leur enfance. Ce n'est toutefois pas une grande salle de jeux où tout se manipule.

Côté budget, l'entrée coûte **6,50 € par adulte** et **5 € de 8 à 18 ans inclus**; elle est **gratuite avant 8 ans**. Attention au « tarif famille » à 5 €: il s'applique **à partir de cinq entrées payantes**, avec au maximum deux adultes, et non automatiquement à une famille de quatre.

De janvier à novembre, le musée ouvre normalement **de 10 h à 17 h**, le lundi et du mercredi au dimanche. Pendant les vacances scolaires françaises (toutes zones), en juillet, août et décembre, il ouvre **tous les jours de 10 h à 18 h**. Il ferme toutefois les **1er janvier, 1er mai, 1er novembre et 25 décembre**. La billetterie ferme 30 minutes avant le musée. Un ascenseur dessert les trois niveaux et des sanitaires adaptés sont disponibles.

## Choco-Story: pour une visite gourmande

<!-- article-image-body:02 -->

![Réplique de la statue de la Liberté au musée du chocolat de Colmar, photographiée en 2023.](/images/articles/2026/10/colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir-body-02.webp)

*Photo: [Paqma](https://commons.wikimedia.org/wiki/File:Chocolmar.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

À deux pas de la collégiale Saint-Martin, **12 place de la Cathédrale**, Choco-Story Colmar raconte le parcours du cacao jusqu'au chocolat. La visite libre, accompagnée d'un audioguide, associe explications, films, démonstrations virtuelles et **dégustations comprises dans le billet**. Comptez **environ 1 h 30**.

Le billet coûte **15 € pour un adulte**, **13 € de 12 à 17 ans**, **9 € de 3 à 11 ans** et est **gratuit jusqu'à 2 ans inclus**. Les enfants ne paient donc pas tous le même prix que dans les deux autres musées.

Fabriquer ses propres chocolats relève d'une **activité distincte**: l'atelier est proposé **à partir de 7 ans**, à **45 € par personne**, avec la visite incluse. Il ajoute environ 45 minutes à la sortie; les places sont limitées. Ne confondez pas cette formule avec le billet de visite ordinaire.

Le musée annonce une ouverture **tous les jours de 10 h à 18 h**, avec dernière entrée à **17 h**. Une **fermeture annuelle intervient en janvier après les vacances scolaires**: mieux vaut vérifier les dates exactes avant un séjour hivernal.

## Unterlinden: de l'art, mais aussi un parcours à jouer

<!-- article-image-body:03 -->

![Cloître de l'ancien couvent des Unterlinden, au musée Unterlinden de Colmar.](/images/articles/2026/10/colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir-body-03.webp)

*Photo: [Gzen92](https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_Unterlinden_-_couvent_des_Unterlinden_-_clo%C3%AEtre_(Colmar)_(5).jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

Le musée Unterlinden, place Unterlinden, réunit des œuvres du Moyen Âge à l'époque moderne et contemporaine dans un ensemble de bâtiments comprenant un ancien couvent. Il convient davantage aux familles qui aiment observer, raconter et discuter devant des œuvres qu'à celles qui recherchent une activité très animée.

Pour rendre la visite plus vivante, demandez gratuitement à l'accueil le sac **Muséojeux**: il propose des consignes pour mimer, dessiner, chanter ou observer les collections ensemble.

Le tarif est de **14 € par adulte**, **9 € de 12 à 17 ans** et **gratuit pour les moins de 12 ans**. La formule famille à **36 €** couvre deux adultes et un à cinq jeunes de **12 à 17 ans**; avec des enfants plus jeunes, mieux vaut comparer avec les billets individuels gratuits.

Le musée ouvre **du mercredi au lundi, de 9 h à 18 h**, avec dernière entrée à **17 h 30**. Il ferme le **mardi**, ainsi que les **1er janvier, 1er mai, 1er novembre et 25 décembre**; les **24 et 31 décembre**, il ferme plus tôt, à **16 h**. Les poussettes sont acceptées, un espace à langer est disponible et les salles sont accessibles aux personnes à mobilité réduite.

## Un musée ou deux: le choix le plus simple

Avec des **enfants de moins de 8 ans**, le Musée du Jouet et Unterlinden présentent un avantage budgétaire important grâce à leurs gratuités. Pour des enfants qui préfèrent goûter et découvrir une fabrication, Choco-Story offre une expérience différente, mais plus chère. Avec des adolescents, les trois visites sont possibles: choisissez plutôt selon leur intérêt pour les jouets, la gourmandise ou l'art.

Les trois lieux se trouvent **dans le centre de Colmar** et se rejoignent à pied. Avec de jeunes enfants, mieux vaut parfois choisir une seule visite et en profiter. Deux visites restent possibles en prévoyant une pause, mais les réductions des billets combinés ne compensent pas toujours les gratuités accordées aux plus jeunes.

Si vous souhaitez visiter **Choco-Story et le Musée du Jouet**, [leur billet combiné sur Tiqets](https://www.tiqets.com/fr/choco-story-colmar-le-musee-du-jouet-de-colmar-b275960/) est affiché **à partir de 20,42 €** pour l'offre présentée. Il faut vérifier le prix final pour chaque âge avant d'acheter: des billets séparés peuvent coûter moins cher pour les enfants de moins de 8 ans, gratuits au Musée du Jouet.

**Attention au mardi**: Unterlinden reste fermé, le Musée du Jouet n'ouvre ce jour-là que pendant les périodes spécifiées, tandis que Choco-Story annonce une ouverture quotidienne hors fermeture annuelle. Vérifiez les horaires du jour avant de partir, particulièrement autour des jours fériés.

## Séjourner à Colmar avec des enfants

Pour un week-end à Colmar, [Le Bag Centre ville sur Booking.com](https://www.booking.com/hotel/fr/le-bag-centre-ville.fr.html) propose un appartement avec **trois chambres et six couchages**, doté d'une cuisine, près du centre historique. Attention: l'établissement indique une **caution remboursable de 500 €**, normalement débitée sur carte bancaire **14 jours avant l'arrivée** et restituée dans les **14 jours après le départ** si aucun dommage n'est constaté. Aucun lit bébé ni lit d'appoint n'est proposé. Vérifiez le tarif, la disponibilité et les conditions exactes à vos dates.

Retrouvez aussi [Colmar en famille](https://www.fam-space.fr/destinations/grand-est/haut-rhin/colmar/) pour prolonger la découverte.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/repto-terra-expo-a-colmar-faut-il-y-aller-avec-des-enfants/ | Repto Terra Expo à Colmar: faut-il y aller avec des enfants? | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/voyages/marches-de-noel-de-colmar-avec-des-enfants-en-2026-1-ou-2-jours-et-ou-dormir/ | Marchés de Noël de Colmar avec des enfants en 2026: 1 ou 2 jours et où dormir | voyages | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/fanabriques-colmar-2026-famille/ | Fana'Briques 2026 à Colmar: un week-end LEGO en famille | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/bons-plans/musees-gratuits-autour-de-rouen-lesquels-choisir-avec-des-enfants/ | Musées gratuits autour de Rouen: lesquels choisir avec des enfants ? | bons-plans | Rouen, Seine-Maritime, Normandie
- /articles/parentalite/laep-a-colmar-ou-aller-gratuitement-avec-un-enfant-de-0-a-6-ans/ | LAEP à Colmar: où aller gratuitement avec un enfant de 0 à 6 ans | parentalite | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | Festival du Livre de Colmar 2026 en famille: dates, horaires et animations jeunesse | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/cuisine/anchois-de-collioure-quelle-visite-choisir-avec-des-enfants/ | Anchois de Collioure: quelle visite choisir avec des enfants? | cuisine | Collioure, Pyrénées-Orientales, Occitanie
- /articles/bons-plans/mulhouse-trois-musees-gratuits-pour-une-journee-culturelle-avec-des-enfants/ | Mulhouse: trois musées gratuits pour une journée culturelle avec des enfants | bons-plans | Mulhouse, Haut-Rhin, Grand Est
- /articles/vie-pratique/colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir/ | Colmar avec des enfants quand il pleut: quel musée choisir ? | vie-pratique | Colmar, Haut-Rhin, Grand Est
- /articles/maison/humidite-et-moisissures-en-hiver-dans-le-haut-rhin-que-faire-et-qui-contacter/ | Humidité et moisissures en hiver dans le Haut-Rhin: que faire et qui contacter ? | maison | Haut-Rhin, Grand Est
- /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | Bédéciné 2026 à Illzach en famille: ateliers, spectacles et billets | evenements | Illzach, Haut-Rhin, Grand Est
- /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | Marché de Noël de Mulhouse 2026 en famille: horaires, étoffe et animations | evenements | Mulhouse, Haut-Rhin, Grand Est
- /articles/activites/noel-2026-a-l-ecomusee-d-alsace-en-famille-quand-venir-et-que-prevoir/ | Noël 2026 à l'Écomusée d'Alsace en famille: quand venir et que prévoir? | activites | Ungersheim, Haut-Rhin, Grand Est
- /articles/voyages/mulhouse-sans-voiture-avec-des-enfants-comment-organiser-2-jours/ | Mulhouse sans voiture avec des enfants: comment organiser 2 jours | voyages | Mulhouse, Haut-Rhin, Grand Est
- /articles/sorties/parc-du-petit-prince-faut-il-prevoir-une-journee-entiere-avec-de-jeunes-enfants/ | Parc du Petit Prince: faut-il prévoir une journée entière avec de jeunes enfants? | sorties | Ungersheim, Haut-Rhin, Grand Est
- /articles/vie-pratique/fort-de-france-trois-ilets-en-famille-quelle-navette-prendre-sans-voiture/ | Fort-de-France - Trois-Îlets en famille: quelle navette prendre sans voiture ? | vie-pratique | Martinique, Martinique
- /articles/vie-pratique/lyon-saint-exupery-avec-des-enfants-preparer-le-trajet-les-controles-et-l-attente/ | Lyon-Saint-Exupéry avec des enfants: préparer le trajet, les contrôles et l’attente | vie-pratique | Colombier-Saugnieu, Rhône, Auvergne-Rhône-Alpes
- /articles/vie-pratique/drome-sans-voiture-avec-des-enfants-train-cars-et-bus-pour-se-deplacer/ | Drôme sans voiture avec des enfants: train, cars et bus pour se déplacer | vie-pratique | Drôme, Auvergne-Rhône-Alpes
- /articles/vie-pratique/transports-gratuits-a-lille-comment-obtenir-le-titre-moins-de-18-ans/ | Transports gratuits à Lille: comment obtenir le titre moins de 18 ans ? | vie-pratique | Nord, Hauts-de-France
- /articles/vie-pratique/bus-ou-voiture-a-la-reunion-organiser-ses-deplacements-en-famille/ | Bus ou voiture à La Réunion: organiser ses déplacements en famille | vie-pratique | La Réunion
- /articles/vie-pratique/transport-scolaire-en-ariege-gratuite-lio-inscription-et-aide-si-aucun-car-ne-dessert-votre-domicile/ | Transport scolaire en Ariège: gratuité liO, inscription et aide si aucun car ne dessert votre domicile | vie-pratique | Ariège, Occitanie
- /articles/vie-pratique/train-mobigo-en-famille-quels-billets-choisir-et-comment-preparer-le-trajet/ | TRAIN Mobigo en famille: quels billets choisir et comment préparer le trajet | vie-pratique | Bourgogne-Franche-Comté

### Historique Radar lié

- opportunity | /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | 2026-10-23T12:33:36.649Z
- opportunity | /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | 2026-10-20T08:52:25.825Z
- opportunity | /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | 2026-10-19T09:37:22.517Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
