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
title: "Parc Spirou avec de jeunes enfants: regardez la taille avant d'acheter les billets"
subtitle: Les seuils accompagnés et solo changent beaucoup d'une attraction à l'autre, même quand l'entrée du plus petit est gratuite
summary: Au Parc Spirou, la taille compte plus que l'âge pour choisir les attractions. Seuils, billets, pique-nique, poussette et accès à vérifier avant de partir.
slug: parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets
status: published
publishedAt: 2026-09-03T04:04:27+02:00
updatedAt: 2026-10-07T15:14:00+02:00
category: sorties
readingTime: 4
location:
  city: Monteux
  department: Vaucluse
  region: Provence-Alpes-Côte d’Azur
topic:
  key: sorties|monteux|parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets|2026
  keywords:
    - Parc Spirou enfants taille attractions
    - Parc Spirou billets famille
affiliate:
  enabled: true
  type: travel
  destination: Monteux
sources:
  - title: Attractions et conditions de taille - Parc Spirou
    url: https://www.parc-spirou.com/les-attractions/
  - title: Billetterie officielle - Parc Spirou
    url: https://ticket.parc-spirou.com/
  - title: Calendrier d'ouverture - Parc Spirou
    url: https://www.parc-spirou.com/calendrier/
image:
  src: /images/articles/2026/09/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets.webp
  alt: Entrée du Parc Spirou à Monteux
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/sorties/(2026)/(09)/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets/index.md
  targetSha: ce571a762a8cce7467642b16a377d0b9f25e2704
  targetUrl: /articles/sorties/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets/
  decision: Savoir que le Parc Spirou est fermé depuis le 11 novembre 2026, puis préparer une visite en 2027 en comparant les nouveaux billets, les tailles et les attractions réellement accessibles aux jeunes enfants.
  affiliationPotential: Conserver le lien Tiqets existant en précisant de vérifier sa validité pour 2027; conserver la piste d'hébergement seulement si elle est pertinente pour un séjour à Monteux ou Avignon.
  gsc:
    retrievedAt: 2026-11-18T00:34:26+01:00
    dataThrough: 2026-11-15
    signal: needs_query_check
    basis: Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.
    peakStart: 2026-10-22
    peakEnd: 2026-10-28
    recentStart: 2026-11-09
    recentEnd: 2026-11-15
    peakImpressions: 141
    recentImpressions: 17
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Parc Spirou enfants taille attractions
      - Parc Spirou billets famille
---

## Mission retenue
Actualiser le guide Parc Spirou destiné aux familles avec de jeunes enfants pour la fermeture hivernale et les premières offres 2027, sans transformer ce guide pratique en promotion saisonnière.

## Pourquoi cette mission
L'article conseille encore des billets 2026 et la réservation Halloween, alors que la saison s'est terminée le 11 novembre. Le site officiel annonce maintenant la fermeture jusqu'en 2027, des billets non datés 2027 à 35 € enfant et 40 € adulte, et un pass saison 2027 en offre de Noël à 90 € au lieu de 99 €. La baisse d'impressions GSC ne prouve pas un recul de classement: la lacune est éditoriale et indépendante.

## Décision du lecteur
Déterminer si le parc convient aux tailles des enfants, éviter d'acheter un billet pour une période fermée, puis choisir entre billet 2027 et pass selon le nombre de visites envisagé.

## Faits à traiter
- Signaler clairement la fermeture depuis le 11 novembre 2026 et ne pas inventer de date de réouverture 2027.
- Vérifier les conditions exactes des billets non datés 2027 et du pass de Noël, ainsi que la durée de l'offre; distinguer prix confirmés et conditions encore inconnues.
- Retirer les consignes Halloween 2026 devenues inutiles et distinguer les anciens tarifs 2026 des nouvelles offres.
- Revérifier les seuils d'accès aux attractions, notamment les conditions avec adulte, avant de les conserver comme actuels.
- Préserver les conseils poussette, pique-nique, ANCV, accès, image et crédits, liens internes et affiliation Tiqets; ne pas promettre la validité 2027 d'une offre partenaire non confirmée.

## Sources de départ
- Parc Spirou, accueil et offres 2027: https://www.parc-spirou.com/
- Parc Spirou, calendrier 2026: https://www.parc-spirou.com/calendrier-2/
- Parc Spirou, attractions: https://www.parc-spirou.com/les-attractions/
- Billetterie officielle: https://ticket.parc-spirou.com/b2c

## Affiliation
Le lien Tiqets existant est à conserver avec vérification de l'offre réellement réservable pour 2027. Ne pas substituer une promesse de disponibilité. Hébergement près de Monteux ou Avignon uniquement comme option de séjour utile.

## Continuations internes
Conserver le guide centré sur les familles avec petits enfants et les seuils de taille; laisser les sorties à Avignon aux pages déjà liées.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/sorties/(2026)/(09)/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets/index.md

---
title: "Parc Spirou avec de jeunes enfants: regardez la taille avant d'acheter les billets"
subtitle: Les seuils accompagnés et solo changent beaucoup d'une attraction à l'autre, même quand l'entrée du plus petit est gratuite
summary: Au Parc Spirou, la taille compte plus que l'âge pour choisir les attractions. Seuils, billets, pique-nique, poussette et accès à vérifier avant de partir.
slug: parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets
status: published
publishedAt: 2026-09-03T04:04:27+02:00
updatedAt: 2026-10-07T15:14:00+02:00
category: sorties
readingTime: 4
location:
  city: Monteux
  department: Vaucluse
  region: Provence-Alpes-Côte d’Azur
topic:
  key: sorties|monteux|parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets|2026
  keywords:
    - Parc Spirou enfants taille attractions
    - Parc Spirou billets famille
affiliate:
  enabled: true
  type: travel
  destination: Monteux
sources:
  - title: "Attractions et conditions de taille - Parc Spirou"
    url: "https://www.parc-spirou.com/les-attractions/"
  - title: "Billetterie officielle - Parc Spirou"
    url: "https://ticket.parc-spirou.com/"
  - title: "Calendrier d'ouverture - Parc Spirou"
    url: "https://www.parc-spirou.com/calendrier/"
image:
  src: "/images/articles/2026/09/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets.webp"
  alt: "Entrée du Parc Spirou à Monteux"
---
<!-- article-image-credit -->
*Photo: [Marianne Casamance](https://commons.wikimedia.org/wiki/File:Parc_spirou.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Avec un jeune enfant, la première question à régler avant une journée au Parc Spirou n'est pas son âge mais sa taille. Le parc fixe des seuils différents selon les attractions, avec parfois un accès plus tôt lorsqu'un adulte accompagne l'enfant. Mesurer les enfants avant d'acheter permet donc de savoir si chacun aura réellement assez de choix sur place.

## Mesurez les enfants avant de choisir les billets

Le parc indique que l'entrée est gratuite pour les enfants de moins de 1 mètre. Cela ne signifie pas qu'ils peuvent accéder à toutes les attractions: les conditions sont définies attraction par attraction.

Quelques exemples montrent bien l'écart entre les seuils:

- **Palombie Secrète**: accès accompagné dès 85 cm, puis seul à partir de 1,10 m;
- **Boule et Bill Déboulent**: accompagné dès 90 cm, puis seul à partir de 1,20 m;
- **Rasengan Chakra Rotation**: accompagné dès 1 m, puis seul à partir de 1,20 m;
- **Kyûbi Unchained**: accompagné dès 1,05 m, puis seul à partir de 1,30 m;
- certaines attractions à sensations demandent 1,40 m sans accès accompagné plus bas.

Avant la visite, mesurez donc chaque enfant et repérez les seuils qui comptent pour les attractions qui l'intéressent. Si plusieurs enfants de tailles différentes viennent ensemble, cette vérification permet de savoir avant l'achat si chacun aura suffisamment de choix sur place.

## Faut-il réserver en ligne?

Le Parc Spirou encourage fortement la réservation de billets datés en ligne. Les billets n'ont pas besoin d'être imprimés: le billet lui-même peut être présenté sur smartphone. Le simple mail de confirmation ne suffit pas.

Pour la saison 2026, le tarif web affiché est de **39 € à partir de 11 ans** et **33 € pour les moins de 11 ans**. Sur place, les mêmes catégories sont affichées à 41 € et 36 €. Les enfants de moins de 1 mètre entrent gratuitement.

Les tarifs réduits, notamment famille nombreuse, étudiant, senior ou personne en situation de handicap, sont annoncés comme disponibles en caisse sur présentation d'un justificatif. Le parc précise aussi que les chèques vacances ANCV papier sont acceptés directement sur place.

Si vous avez déjà vérifié les tailles et choisi votre date, vous pouvez [voir les billets disponibles pour le Parc Spirou sur Tiqets](https://www.tiqets.com/fr/billets-parc-spirou-provence-l149738/) et vérifier l'offre proposée pour votre jour de visite.

Pour Halloween 2026, le parc annonce une programmation spéciale du 3 octobre au 11 novembre. Si vous utilisez un billet non daté entre le **17 octobre et le 1er novembre**, une réservation de la journée est obligatoire; le parc précise qu'un visiteur sans réservation peut se voir refuser l'accès en cas de forte affluence. Vérifiez donc la [procédure de réservation Halloween](https://www.parc-spirou.com/reservation-halloween/) avant de partir.

## Une poussette est-elle utile dans le parc?

Oui, les poussettes sont autorisées dans l'enceinte. Elles doivent toutefois rester à l'extérieur des attractions. Pour un enfant qui marche mais fatigue encore vite, cela peut rester utile sur une journée complète.

Le parc autorise également les pique-niques et les boissons. Des aires de repos ombragées sont prévues pour déjeuner. C'est une option simple pour éviter de dépendre des restaurants, notamment avec de jeunes enfants ou des contraintes alimentaires.

L'application officielle du Parc Spirou permet de consulter les temps d'attente, d'utiliser le plan interactif, de filtrer les attractions selon la taille et de commander un repas. Ce filtre par taille est particulièrement pratique une fois dans le parc.

## Comment venir à Monteux?

<!-- article-image-body:01 -->

![Panneau de la rue Jean-Henri-Fabre à proximité du Parc Spirou à Monteux](/images/articles/2026/09/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets-body-01.webp)

<!-- /article-image-body:01 -->

Le Parc Spirou se trouve au **1 rue Jean-Henri Fabre, 84170 Monteux**, le long de la D942 entre Avignon et Carpentras. Le parking voisin est payant et dépend de la collectivité, pas du parc. Le parc indique aussi qu'il n'y a pas de borne de recharge électrique sur ce parking.

En transports en commun, la ligne régionale ZOU! 905 entre Avignon et Carpentras dessert l'arrêt Soleil. La gare TER de Monteux est également desservie depuis Avignon et Carpentras, avec des correspondances locales possibles jusqu'à la zone du parc.

Si la sortie s'inscrit dans un séjour plus large, la page Fam Space consacrée à [Avignon](/destinations/provence-alpes-cote-d-azur/vaucluse/avignon/) aide à organiser le reste du programme autour de la ville. Pour une deuxième journée culturelle, notre article [Avignonnais: Palais des Papes et Pont gratuits le week-end](/articles/bons-plans/avignonnais-palais-des-papes-et-pont-gratuits-le-week-end/) permet aussi de vérifier si votre famille peut profiter de la gratuité locale.

## Le point à retenir avant de partir

Pour une famille avec de jeunes enfants, ne choisissez pas la journée uniquement sur la réputation des attractions ou les personnages préférés. Mesurez d'abord chaque enfant, vérifiez les seuils accompagnés et solo, puis regardez si le nombre d'attractions accessibles justifie le billet pour votre famille.

Vérifiez enfin le calendrier d'ouverture du parc juste avant le départ: en dehors des vacances et de la haute saison, le parc n'ouvre pas nécessairement tous les jours.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | Halloween 2026 au Parc Spirou: billets, nocturnes Naruto et maison hantée | evenements | Monteux, Vaucluse, Provence-Alpes-Côte d'Azur
- /articles/activites/festyland-avec-de-jeunes-enfants-quelles-attractions-selon-leur-taille/ | Festyland avec de jeunes enfants: quelles attractions selon leur taille? | activites | Carpiquet, Calvados, Normandie
- /articles/sorties/parc-bagatelle-en-famille-quelles-attractions-selon-la-taille-des-enfants/ | Parc Bagatelle en famille: quelles attractions selon la taille des enfants? | sorties | Merlimont, Pas-de-Calais, Hauts-de-France
- /articles/maison/lit-superpose-ou-mezzanine-pour-un-enfant-les-verifications-avant-d-acheter/ | Lit superposé ou mezzanine pour un enfant: les vérifications avant d'acheter | maison
- /articles/activites/le-pal-ou-touroparc-en-famille-quel-parc-choisir-en-2026/ | Le PAL ou Touroparc en famille: quel parc choisir en 2026? | activites
- /articles/sorties/parc-des-oiseaux-en-famille-billets-horaires-et-visite-avec-des-enfants/ | Parc des Oiseaux en famille: billets, horaires et visite avec des enfants | sorties | Villars-les-Dombes, Ain, Auvergne-Rhône-Alpes
- /articles/activites/sherwood-parc-avec-des-enfants-quel-billet-choisir-avant-de-reserver/ | Sherwood Parc avec des enfants: quel billet choisir avant de réserver? | activites | Viarmes, Val-d'Oise, Île-de-France
- /articles/maison/maison-de-vacances-avec-piscine-et-enfants-les-verifications-a-faire-avant-de-reserver/ | Maison de vacances avec piscine et enfants: les vérifications à faire avant de réserver | maison
- /articles/sorties/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets/ | Parc Spirou avec de jeunes enfants: regardez la taille avant d'acheter les billets | sorties | Monteux, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/cuisine/petit-epeautre-du-ventoux-quatre-idees-pour-le-cuisiner-en-famille/ | Petit épeautre du Ventoux: quatre idées pour le cuisiner en famille | cuisine | Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/maison/logement-mal-isole-dans-le-vaucluse-comment-gagner-en-confort-ete-comme-hiver/ | Logement mal isolé dans le Vaucluse: comment gagner en confort été comme hiver ? | maison | Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires, Père Noël et animations | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/vie-pratique/veloroute-du-calavon-avec-des-enfants-quelle-balade-choisir/ | Véloroute du Calavon avec des enfants: quelle balade choisir ? | vie-pratique | Apt, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/activites/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre/ | Grottes de Thouzon avec des enfants: préparer la visite sous terre | activites | Le Thor, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/halloween-a-avignon-une-visite-familiale-pour-decouvrir-l-archeologie-funeraire/ | Halloween à Avignon: un atelier familial pour découvrir l'archéologie funéraire | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/voyages/orange-avec-des-enfants-ou-dormir-pour-tout-faire-a-pied/ | Orange avec des enfants: où dormir pour tout faire à pied | voyages | Orange, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/avignonnais-palais-des-papes-et-pont-gratuits-le-week-end/ | Avignonnais: Palais des Papes et Pont gratuits le week-end | bons-plans | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/parentalite/premier-week-end-a-avignon-avec-un-bebe-ou-dormir-et-quoi-prevoir/ | Avignon avec un bébé: poussette, Palais des Papes et où dormir | parentalite | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/sorties/chauvigny-en-famille-cite-medievale-et-deux-chasses-aux-tresors/ | Chauvigny en famille: cité médiévale et deux chasses aux trésors | sorties | Chauvigny, Vienne, Nouvelle-Aquitaine
- /articles/sorties/chateau-de-la-motte-tilly-en-famille-visite-jeu-de-piste-et-parc-gratuit/ | Château de La Motte-Tilly en famille: visite, jeu de piste et parc gratuit | sorties | La Motte-Tilly, Aube, Grand Est
- /articles/sorties/musee-de-la-musique-mecanique-aux-gets-une-sortie-en-famille-qui-s-ecoute/ | Musée de la Musique Mécanique aux Gets: une sortie en famille qui s'écoute | sorties | Les Gets, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/sorties/mariana-en-famille-du-musee-aux-vestiges-de-la-cite-antique/ | Mariana en famille: du musée aux vestiges de la cité antique | sorties | Lucciana, Haute-Corse, Corse

### Historique Radar lié

- refresh | /articles/activites/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre/ | 2026-11-10T09:32:01.095Z
- opportunity | /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | 2026-10-12T17:34:53.933Z
- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- refresh | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-11-17T22:37:09.520Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
