# Radar Fam Space - Phase 3/3

## Mission

Radar surveille en priorité les articles Fam Space qui gagnent rapidement des impressions Google puis les perdent quelques jours plus tard. Il cherche ensuite les autres articles existants à améliorer réellement. Seulement s'il ne trouve aucune amélioration utile, il recherche un événement exceptionnel avec un fort potentiel d'audience et, lorsque c'est naturel, d'affiliation. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 3/3

Tu es secrétaire de rédaction et fact-checker final. Ta mission principale est l'anti-régression, pas de réécrire l'article une deuxième fois.

Pour un refresh, compare l'article source exact et le candidat de phase 2 fournis intégralement plus bas. Le candidat final doit rester autonome et actuel. Pour chaque information présente avant et absente après, décide explicitement: toujours vraie et utile -> restaure-la; périmée ou fausse -> laisse-la supprimée; réellement redondante ou sans valeur -> suppression acceptable.

Accorde une attention particulière aux prix décisionnels, durées, réservation, âge/taille, accessibilité, accès, contraintes, services bébé/enfants, repas et autres détails pratiques familiaux.

Ensuite:
- lis l'article du début à la fin comme un lecteur sur téléphone et vérifie que l'introduction, les sections et la fin ne répètent pas la même information; supprime les conseils évidents, paraphrases de sources, sections sans information nouvelle et toute conclusion qui ne ferait que résumer;
- vérifie que l'angle sert l'article sans devenir l'article entier: une micro-question utile ne doit pas être répétée pendant toute la page, et le titre final doit décrire le sujet plutôt que recopier mécaniquement la décision de phase 1;
- vérifie que les modifications répondent au diagnostic et à la décision de phase 1;
- revérifie les faits déterminants auprès des sources officielles. Une affirmation attribuée à une source doit respecter exactement son niveau de certitude: ne transforme jamais « peut constituer un frein » en « déconseille », ni une possibilité en obligation ou interdiction;
- contrôle que la logique d'affiliation de ces règles partenaires fournies dans ce runtime a bien été appliquée, que les offres retenues sont encore pertinentes et que leur intégration se lit naturellement; vérifie qu'aucun lien officiel du corps ne mène, même indirectement depuis une page informative, à l'achat ou à la réservation de la même prestation sur le site officiel; pour une sortie, une activité, une visite, un événement ou un voyage sans affiliation, vérifie qu'aucune piste normale n'a été oubliée;
- contrôle les liens internes et les routes. Garde ceux qui prolongent réellement la lecture et, lorsqu'une autre page Fam Space traite déjà correctement un sous-sujet, raccourcis le passage au contexte nécessaire puis oriente naturellement le lecteur vers elle;
- vérifie `reviewAt` / `eventEndsAt` lorsqu'un contenu temporaire existe;
- ne force ni longueur ni affiliation.

Pour une opportunity, revérifie doublons, chevauchement avec les pages proches, catégorie, territoire, sources, cycle de vie et utilité. Un angle distinct ne justifie pas de recopier les parties générales déjà couvertes ailleurs. Le slug technique reste géré mécaniquement.

Soumets le résultat final avec `action: advance`, le frontmatter éditorial utile, le corps complet et un bloc `radarReview`:
- `summary`: contrôles et corrections réellement effectués;
- `sources`: URLs factuelles revérifiées;
- pour un refresh, `regressionCheck`: résultat concret de la comparaison ancien/nouveau. Une seule correction factuelle vérifiée peut suffire.

**Ne recopie aucun autre champ Radar, aucune branche et aucun SHA.** Le workflow GitHub crée le commit de phase 3, retrouve le HEAD réel et lance directement le processeur final.

## Règles partenaires

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

## Candidat validé de la phase précédente

---
title: "Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations"
subtitle: Une promenade libre ou une visite guidée dès 8 ans pour découvrir le village avant la nuit
summary: Du 27 novembre 2026 au 3 janvier 2027, découvrez Rochefort-en-Terre en famille, entre patrimoine et illuminations, avec les repères pour préparer la sortie.
slug: noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations
status: published
publishedAt: 2026-10-22T00:03:36+02:00
updatedAt: null
eventEndsAt: 2027-01-03
category: evenements
readingTime: 5
publicationOrigin: region
location:
  city: Rochefort-en-Terre
  department: Morbihan
  region: Bretagne
topic:
  key: evenements|rochefort-en-terre|noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations|2026
  keywords:
    - Noël 2026 Rochefort-en-Terre
    - illuminations Rochefort-en-Terre en famille
    - Rochefort-en-Terre avec des enfants
image:
  src: /images/articles/2026/10/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations.webp
  alt: Façades et ruelles de Rochefort-en-Terre décorées d’illuminations de Noël en décembre 2014, et non lors de l’édition 2026.
sources:
  - title: Illuminations de Noël à Rochefort-en-Terre
    url: https://www.rochefortenterre-tourisme.bzh/explorer/la-magie-de-noel/illuminations-noel-rochefort-en-terre/
  - title: FAQ officielle des illuminations
    url: https://www.rochefortenterre-tourisme.bzh/explorer/la-magie-de-noel/faq-illuminations/
  - title: Accès et stationnement pendant les illuminations
    url: https://www.rochefortenterre-tourisme.bzh/explorer/la-magie-de-noel/acces-et-stationnement-noel-a-rochefort-en-terre/
  - title: Parcours Patrimoine de Rochefort-en-Terre
    url: https://www.rochefortenterre-tourisme.bzh/parcours-patrimoine/
  - title: Place du Puits
    url: https://www.rochefortenterre-tourisme.bzh/parcours-patrimoine/place-du-puits/
  - title: Église Notre-Dame de la Tronchaye
    url: https://www.rochefortenterre-tourisme.bzh/parcours-patrimoine/eglise-notre-dame-de-la-tronchaye/
  - title: Parc du château de Rochefort-en-Terre
    url: https://www.rochefortenterre-tourisme.bzh/sorganiser/activites-et-loisirs/parc-du-chateau-de-rochefort-en-terre-rochefort-en-terre-fr-3586693/
  - title: Visite guidée Magie de Noël, programme et tarifs 2026
    url: https://www.rochefortenterre-tourisme.bzh/explorer/voyager-dans-le-temps/visites-guidees/magie-de-noel-rochefort-en-terre/
  - title: Plan officiel du village et de son patrimoine
    url: https://www.rochefortenterre-tourisme.bzh/app/uploads/rochefort-en-terre/2025/11/Plan_patrimoine_Rochefort-en-Terre.pdf
  - title: Domaine du Moulin Neuf, informations du gestionnaire Terres de France
    url: https://www.terresdefrance.com/etablissement/domaine-du-moulin-neuf-morbihan-56/
affiliate:
  enabled: true
  type: travel
  destination: Rochefort-en-Terre
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/index.md
  targetSha: bea73de6f13415abef4c4c2771e3840309e84f54
  targetUrl: /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/
  decision: Choisir une visite familiale des illuminations selon le jour, l'âge des enfants, la marche et le stationnement réellement disponibles en 2026, sans confondre promenade gratuite et visite guidée payante.
  affiliationPotential: Conserver le lien Booking.com vers les cottages du Domaine du Moulin Neuf, sous réserve de disponibilité et des conditions hivernales; aucune billetterie affiliée nécessaire pour les illuminations gratuites.
  gsc:
    retrievedAt: 2026-11-15T10:29:35+01:00
    dataThrough: 2026-11-13
    signal: coverage_loss
    basis: "Visibilité récente : 173 impressions sur trois jours, puis 58 sur les trois derniers jours consolidés; cause non établie. Baisse d'exposition sur les requêtes visibles (ratio 0.231), sans recul de classement comparable établi."
    peakStart: 2026-10-24
    peakEnd: 2026-10-26
    recentStart: 2026-11-11
    recentEnd: 2026-11-13
    peakImpressions: 173
    recentImpressions: 58
    commonQueries: 1
    positionDelta: 2
    impressionRatio: 0.231
    focusQueries:
      - rochefort en terre noel 2026
      - rochefort en terre noel
      - illumination rochefort en terre 2026
      - rochefort en terre a noel
      - date marche de noel rochefort en terre
---

<!-- article-image-credit -->
*Photo: [Moreau.henri](https://commons.wikimedia.org/wiki/File:128_Rochefort-en-Terre.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Rochefort-en-Terre, dans le Morbihan, les maisons anciennes et les ruelles pavées deviennent le décor d’une promenade de Noël. Du **27 novembre 2026 au 3 janvier 2027 inclus**, les [illuminations annoncées par l’office de tourisme](https://www.rochefortenterre-tourisme.bzh/explorer/la-magie-de-noel/illuminations-noel-rochefort-en-terre/) éclairent le village chaque soir. Avec des enfants, arriver de jour permet de découvrir les façades et les places, puis de les retrouver transformées à la nuit tombée.

**L’accès est libre et gratuit.** Selon la [FAQ officielle](https://www.rochefortenterre-tourisme.bzh/explorer/la-magie-de-noel/faq-illuminations/), l’allumage intervient vers **17h30 à 17h45**, en fonction de la luminosité. Les lumières s’éteignent à 23h les vendredis et samedis, à 22h30 les autres jours.

## Venir assez tôt pour profiter du village

<!-- article-image-body:01 -->

![Place du Puits à Rochefort-en-Terre photographiée en journée en juillet 2016, hors période des illuminations de Noël.](/images/articles/2026/10/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations-body-01.webp)

*Photo: [Saga70](https://commons.wikimedia.org/wiki/File:Rochefort_en_terre.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Privilégiez un jour du lundi au jeudi, hors vacances scolaires, pour une promenade moins fréquentée. Les week-ends et les vacances attirent davantage de visiteurs. L’office conseille d’arriver **avant 15h** pour faciliter l’accès et le stationnement, sur sa [page pratique consacrée aux déplacements](https://www.rochefortenterre-tourisme.bzh/explorer/la-magie-de-noel/acces-et-stationnement-noel-a-rochefort-en-terre/).

Avec les petits, cela laisse un long après-midi avant l’allumage: prévoyez quelques étapes et un goûter assis, plutôt qu’une marche continue.

Le [Parcours Patrimoine](https://www.rochefortenterre-tourisme.bzh/parcours-patrimoine/) peut servir de fil conducteur. Ses quatorze étapes mêlent cartes postales anciennes et récits, avec des témoignages d’habitants à écouter par QR code. Vous pouvez simplement en retenir deux ou trois.

## En promenade libre: des détails à chercher et une légende à raconter

<!-- article-image-body:02 -->

![Église Notre-Dame de la Tronchaye à Rochefort-en-Terre, photographiée en mai 2013.](/images/articles/2026/10/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations-body-02.webp)

*Photo: [Hadonos](https://commons.wikimedia.org/wiki/File:Rochefort-en-Terre_-_%C3%89glise_ND_01.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Commencez par la **place du Puits**. Les [maisons qui l’entourent](https://www.rochefortenterre-tourisme.bzh/parcours-patrimoine/place-du-puits/) datent pour la plupart du XVe au XVIIe siècle. Au ras du sol, cherchez leurs larges soupiraux, les ouvertures des caves en façade. Un petit jeu d’observation donne aux enfants une raison de regarder ces maisons autrement.

Si les jambes suivent, poursuivez vers **l’église Notre-Dame de la Tronchaye**, en contrebas du centre. Selon la légende rapportée dans la [présentation officielle de l’église](https://www.rochefortenterre-tourisme.bzh/parcours-patrimoine/eglise-notre-dame-de-la-tronchaye/), une bergère aurait découvert une statue de la Vierge dans un tronc d’arbre. L’histoire peut se raconter en quelques phrases, même si vous restez à l’extérieur.

Pour prolonger la découverte de jour, le **parc du château** conserve des remparts et un châtelet, l’ouvrage qui protégeait l’entrée de la forteresse médiévale. Proposez aux enfants de repérer ces vestiges autour du bâtiment plus récent. Le [parc est gratuit, avec une ouverture annoncée toute l’année de 10h à 18h30](https://www.rochefortenterre-tourisme.bzh/sorganiser/activites-et-loisirs/parc-du-chateau-de-rochefort-en-terre-rochefort-en-terre-fr-3586693/). L’intérieur du château ne se visite pas.

Après le goûter, revenez vers les façades repérées l’après-midi pour les découvrir illuminées. Laissez les enfants choisir ce qu’ils veulent revoir et gardez une marge d’énergie pour rejoindre la voiture.

## Dès 8 ans: les histoires d’une guide jusqu’aux illuminations

La **visite guidée « Magie de Noël »** constitue une autre façon d’occuper l’après-midi. Son contenu est adapté à partir de 8 ans. Une guide locale raconte les lieux et les personnages du village, photographies anciennes à l’appui, pendant **1h30 sur environ 2 km**. Le départ à 16h conduit jusqu’à l’heure de l’allumage.

Les **tarifs 2026** sont de **10 € par adulte et 6 € pour les enfants de 8 à 16 ans**. Les séances n’ont pas lieu tous les jours: consultez le [programme détaillé de la visite et réservez votre date](https://www.rochefortenterre-tourisme.bzh/explorer/voyager-dans-le-temps/visites-guidees/magie-de-noel-rochefort-en-terre/). Présentez-vous au moins cinq minutes avant le départ à l’office de tourisme, au 3 place des Halles, pour récupérer votre badge.

Cette formule convient aux enfants prêts à marcher et à écouter pendant toute la visite. Prévoyez le goûter avant le rendez-vous et évitez de le faire précéder d’un parcours trop long.

## Poussette et stationnement: anticiper les derniers mètres

<!-- article-image-body:03 -->

![Escalier en pierre dans le village de Rochefort-en-Terre, photographié en mai 2013, illustrant une difficulté possible pour les poussettes.](/images/articles/2026/10/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations-body-03.webp)

*Photo: [Hadonos](https://commons.wikimedia.org/wiki/File:Rochefort-en-Terre_-_escaliers_1.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

Les poussettes sont autorisées, mais les pavés, la foule et les escaliers compliquent certains passages. L’office conseille le porte-bébé pour les tout-petits dans sa [FAQ sur l’accessibilité](https://www.rochefortenterre-tourisme.bzh/explorer/la-magie-de-noel/faq-illuminations/). Le [plan officiel du village](https://www.rochefortenterre-tourisme.bzh/app/uploads/rochefort-en-terre/2025/11/Plan_patrimoine_Rochefort-en-Terre.pdf) permet de repérer les escaliers et les toilettes avant de choisir vos étapes.

Des parkings payants se trouvent aux entrées du bourg, notamment aux Grées et place Saint-Michel, ainsi que dans les rues Graslin et Saint-Roch. L’office de tourisme met désormais à disposition les **tarifs des parkings et le plan de circulation 2026** sur sa [page officielle d’accès et de stationnement](https://www.rochefortenterre-tourisme.bzh/explorer/la-magie-de-noel/acces-et-stationnement-noel-a-rochefort-en-terre/): vérifiez le coût correspondant à votre durée de visite avant de partir.

**Attention aux horaires de piétonnisation:** le vendredi, le village devient piéton de **16h à 21h**; les samedis, dimanches et pendant les vacances scolaires, de **14h à 21h**. Des restrictions de circulation et de stationnement s’appliquent également les week-ends dès le 27 novembre, puis chaque jour du 19 décembre au 3 janvier, selon les axes. En voiture, rejoignez un parking autorisé avant de poursuivre à pied; au retour, ne comptez pas traverser le centre avec votre véhicule pendant la fermeture. Consultez le plan 2026 pour choisir votre itinéraire et votre parking plutôt que de suivre aveuglément le GPS.

Pour une personne à mobilité réduite, vérifiez avant la visite les places adaptées et les possibilités d’assistance directement auprès de l’office de tourisme au **02 97 26 56 00**. Les modalités de prêt de fauteuils mentionnées dans des informations d’éditions antérieures ne sont pas confirmées ici pour 2026.

Le parking gratuit du **Moulin Neuf** se situe à environ **900 mètres, soit vingt minutes de marche du village**, selon l’office. Il se remplit rapidement. Le sentier forestier recommandé présente des pentes et un sol irrégulier, qui peut devenir boueux, glissant, voire impraticable par mauvais temps. Cette option demande donc davantage d’effort avec une poussette ou un enfant fatigué. L’office recommande d’emprunter le sentier plutôt que la route et d’emporter une lampe ainsi qu’un gilet réfléchissant pour les trajets à distance du bourg.

Pour les promesses faites aux enfants, restez sur les lumières: le carrousel et la venue du Père Noël restent [en attente de confirmation pour cette édition](https://www.rochefortenterre-tourisme.bzh/explorer/la-magie-de-noel/faq-illuminations/).

## Dormir à proximité pour prolonger la sortie

Si vous transformez la visite en week-end, le **Domaine du Moulin Neuf**, à Malansac, propose des cottages avec cuisine près de Rochefort-en-Terre. Selon son gestionnaire Terres de France, certains logements disposent de deux chambres, avec un canapé-lit double dans le séjour pour les modèles accueillant six personnes. La cuisine permet de prévoir un repas au logement après les illuminations.

Vous pouvez [consulter les cottages du Domaine du Moulin Neuf sur Booking.com](https://www.booking.com/hotel/fr/domaine-du-moulin-neuf-rochefort-en-terre.fr.html). Indiquez vos dates et l’âge des enfants pour vérifier la configuration proposée, le prix total, les suppléments éventuels et les conditions d’annulation.

Le gestionnaire annonce une fermeture annuelle en janvier sans en préciser les dates sur sa page: **confirmez l’ouverture si vous visez la fin des illuminations**. La piscine extérieure est saisonnière et fermée pour ce séjour hivernal. Si vous arrivez après 18h, contactez aussi la réception à l’avance pour organiser la remise des clés. Enfin, prévoyez votre trajet après la promenade sans supposer que la proximité du domaine garantit un retour à pied facile en hiver.

Si votre séjour comprend une étape à Vannes, nos repères pour [préparer un goûter breton aux Halles des Lices](https://www.fam-space.fr/articles/cuisine/gouter-breton-aux-halles-des-lices-a-vannes-quoi-acheter-et-quand-venir/) vous aideront à choisir quelques gourmandises et à venir aux bons horaires.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/index.md

---
title: "Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations"
subtitle: Une promenade libre ou une visite guidée dès 8 ans pour découvrir le village avant la nuit
summary: Du 27 novembre 2026 au 3 janvier 2027, découvrez Rochefort-en-Terre en famille, entre patrimoine et illuminations, avec les repères pour préparer la sortie.
slug: noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations
status: published
publishedAt: 2026-10-22T00:03:36+02:00
updatedAt: null
eventEndsAt: 2027-01-03
category: evenements
readingTime: 5
publicationOrigin: region
location:
  city: Rochefort-en-Terre
  department: Morbihan
  region: Bretagne
topic:
  key: evenements|rochefort-en-terre|noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations|2026
  keywords:
    - Noël 2026 Rochefort-en-Terre
    - illuminations Rochefort-en-Terre en famille
    - Rochefort-en-Terre avec des enfants
image:
  src: "/images/articles/2026/10/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations.webp"
  alt: "Façades et ruelles de Rochefort-en-Terre décorées d’illuminations de Noël en décembre 2014, et non lors de l’édition 2026."
sources:
  - title: Illuminations de Noël à Rochefort-en-Terre
    url: https://www.rochefortenterre-tourisme.bzh/explorer/la-magie-de-noel/illuminations-noel-rochefort-en-terre/
  - title: FAQ officielle des illuminations
    url: https://www.rochefortenterre-tourisme.bzh/explorer/la-magie-de-noel/faq-illuminations/
  - title: Accès et stationnement pendant les illuminations
    url: https://www.rochefortenterre-tourisme.bzh/explorer/la-magie-de-noel/acces-et-stationnement-noel-a-rochefort-en-terre/
  - title: Parcours Patrimoine de Rochefort-en-Terre
    url: https://www.rochefortenterre-tourisme.bzh/parcours-patrimoine/
  - title: Place du Puits
    url: https://www.rochefortenterre-tourisme.bzh/parcours-patrimoine/place-du-puits/
  - title: Église Notre-Dame de la Tronchaye
    url: https://www.rochefortenterre-tourisme.bzh/parcours-patrimoine/eglise-notre-dame-de-la-tronchaye/
  - title: Parc du château de Rochefort-en-Terre
    url: https://www.rochefortenterre-tourisme.bzh/sorganiser/activites-et-loisirs/parc-du-chateau-de-rochefort-en-terre-rochefort-en-terre-fr-3586693/
  - title: Visite guidée Magie de Noël, programme et tarifs 2026
    url: https://www.rochefortenterre-tourisme.bzh/explorer/voyager-dans-le-temps/visites-guidees/magie-de-noel-rochefort-en-terre/
  - title: Plan officiel du village et de son patrimoine
    url: https://www.rochefortenterre-tourisme.bzh/app/uploads/rochefort-en-terre/2025/11/Plan_patrimoine_Rochefort-en-Terre.pdf
  - title: Domaine du Moulin Neuf, informations du gestionnaire Terres de France
    url: https://www.terresdefrance.com/etablissement/domaine-du-moulin-neuf-morbihan-56/
affiliate:
  enabled: true
  type: travel
  destination: Rochefort-en-Terre
---
<!-- article-image-credit -->
*Photo: [Moreau.henri](https://commons.wikimedia.org/wiki/File:128_Rochefort-en-Terre.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Rochefort-en-Terre, dans le Morbihan, les maisons anciennes et les ruelles pavées deviennent le décor d’une promenade de Noël. Du **27 novembre 2026 au 3 janvier 2027 inclus**, les [illuminations annoncées par l’office de tourisme](https://www.rochefortenterre-tourisme.bzh/explorer/la-magie-de-noel/illuminations-noel-rochefort-en-terre/) éclairent le village chaque soir. Avec des enfants, arriver de jour permet de découvrir les façades et les places, puis de les retrouver transformées à la nuit tombée.

**L’accès est libre et gratuit.** Selon la [FAQ officielle](https://www.rochefortenterre-tourisme.bzh/explorer/la-magie-de-noel/faq-illuminations/), l’allumage intervient vers **17h30 à 17h45**, en fonction de la luminosité. Les lumières s’éteignent à 23h les vendredis et samedis, à 22h30 les autres jours.

## Venir assez tôt pour profiter du village

<!-- article-image-body:01 -->

![Place du Puits à Rochefort-en-Terre photographiée en journée en juillet 2016, hors période des illuminations de Noël.](/images/articles/2026/10/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations-body-01.webp)

*Photo: [Saga70](https://commons.wikimedia.org/wiki/File:Rochefort_en_terre.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Privilégiez un jour du lundi au jeudi, hors vacances scolaires, pour une promenade moins fréquentée. Les week-ends et les vacances attirent davantage de visiteurs. L’office conseille d’arriver **avant 15h** pour faciliter l’accès et le stationnement, sur sa [page pratique consacrée aux déplacements](https://www.rochefortenterre-tourisme.bzh/explorer/la-magie-de-noel/acces-et-stationnement-noel-a-rochefort-en-terre/).

Avec les petits, cela laisse un long après-midi avant l’allumage: prévoyez quelques étapes et un goûter assis, plutôt qu’une marche continue.

Le [Parcours Patrimoine](https://www.rochefortenterre-tourisme.bzh/parcours-patrimoine/) peut servir de fil conducteur. Ses quatorze étapes mêlent cartes postales anciennes et récits, avec des témoignages d’habitants à écouter par QR code. Vous pouvez simplement en retenir deux ou trois.

## En promenade libre: des détails à chercher et une légende à raconter

<!-- article-image-body:02 -->

![Église Notre-Dame de la Tronchaye à Rochefort-en-Terre, photographiée en mai 2013.](/images/articles/2026/10/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations-body-02.webp)

*Photo: [Hadonos](https://commons.wikimedia.org/wiki/File:Rochefort-en-Terre_-_%C3%89glise_ND_01.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Commencez par la **place du Puits**. Les [maisons qui l’entourent](https://www.rochefortenterre-tourisme.bzh/parcours-patrimoine/place-du-puits/) datent pour la plupart du XVe au XVIIe siècle. Au ras du sol, cherchez leurs larges soupiraux, les ouvertures des caves en façade. Un petit jeu d’observation donne aux enfants une raison de regarder ces maisons autrement.

Si les jambes suivent, poursuivez vers **l’église Notre-Dame de la Tronchaye**, en contrebas du centre. Selon la légende rapportée dans la [présentation officielle de l’église](https://www.rochefortenterre-tourisme.bzh/parcours-patrimoine/eglise-notre-dame-de-la-tronchaye/), une bergère aurait découvert une statue de la Vierge dans un tronc d’arbre. L’histoire peut se raconter en quelques phrases, même si vous restez à l’extérieur.

Pour prolonger la découverte de jour, le **parc du château** conserve des remparts et un châtelet, l’ouvrage qui protégeait l’entrée de la forteresse médiévale. Proposez aux enfants de repérer ces vestiges autour du bâtiment plus récent. Le [parc est gratuit, avec une ouverture annoncée toute l’année de 10h à 18h30](https://www.rochefortenterre-tourisme.bzh/sorganiser/activites-et-loisirs/parc-du-chateau-de-rochefort-en-terre-rochefort-en-terre-fr-3586693/). L’intérieur du château ne se visite pas.

Après le goûter, revenez vers les façades repérées l’après-midi pour les découvrir illuminées. Laissez les enfants choisir ce qu’ils veulent revoir et gardez une marge d’énergie pour rejoindre la voiture.

## Dès 8 ans: les histoires d’une guide jusqu’aux illuminations

La **visite guidée « Magie de Noël »** constitue une autre façon d’occuper l’après-midi. Son contenu est adapté à partir de 8 ans. Une guide locale raconte les lieux et les personnages du village, photographies anciennes à l’appui, pendant **1h30 sur environ 2 km**. Le départ à 16h conduit jusqu’à l’heure de l’allumage.

Les **tarifs 2026** sont de **10 € par adulte et 6 € pour les enfants de 8 à 16 ans**. Les séances n’ont pas lieu tous les jours: consultez le [programme détaillé de la visite et réservez votre date](https://www.rochefortenterre-tourisme.bzh/explorer/voyager-dans-le-temps/visites-guidees/magie-de-noel-rochefort-en-terre/). Présentez-vous au moins cinq minutes avant le départ à l’office de tourisme, au 3 place des Halles, pour récupérer votre badge.

Cette formule convient aux enfants prêts à marcher et à écouter pendant toute la visite. Prévoyez le goûter avant le rendez-vous et évitez de le faire précéder d’un parcours trop long.

## Poussette et stationnement: anticiper les derniers mètres

<!-- article-image-body:03 -->

![Escalier en pierre dans le village de Rochefort-en-Terre, photographié en mai 2013, illustrant une difficulté possible pour les poussettes.](/images/articles/2026/10/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations-body-03.webp)

*Photo: [Hadonos](https://commons.wikimedia.org/wiki/File:Rochefort-en-Terre_-_escaliers_1.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

Les poussettes sont autorisées, mais les pavés, la foule et les escaliers compliquent certains passages. L’office conseille le porte-bébé pour les tout-petits dans sa [FAQ sur l’accessibilité](https://www.rochefortenterre-tourisme.bzh/explorer/la-magie-de-noel/faq-illuminations/). Le [plan officiel du village](https://www.rochefortenterre-tourisme.bzh/app/uploads/rochefort-en-terre/2025/11/Plan_patrimoine_Rochefort-en-Terre.pdf) permet de repérer les escaliers et les toilettes avant de choisir vos étapes.

Des parkings payants se trouvent aux entrées du bourg, notamment aux Grées et place Saint-Michel. **Au 21 octobre 2026, les tarifs liés depuis le site officiel restent ceux de 2025**, comme certains documents de circulation. Consultez leur actualisation sur la [page d’accès et de stationnement](https://www.rochefortenterre-tourisme.bzh/explorer/la-magie-de-noel/acces-et-stationnement-noel-a-rochefort-en-terre/) avant le départ.

Le parking gratuit du **Moulin Neuf** se situe à environ **900 mètres, soit vingt minutes de marche du village**, selon l’office. Il se remplit rapidement. Le sentier forestier recommandé présente des pentes et un sol irrégulier, qui peut devenir boueux, glissant, voire impraticable par mauvais temps. Cette option demande donc davantage d’effort avec une poussette ou un enfant fatigué. L’office recommande d’emprunter le sentier plutôt que la route et d’emporter une lampe ainsi qu’un gilet réfléchissant pour les trajets à distance du bourg.

Pour les promesses faites aux enfants, restez sur les lumières: au 21 octobre 2026, le carrousel et la venue du Père Noël sont encore [en attente de confirmation pour cette édition](https://www.rochefortenterre-tourisme.bzh/explorer/la-magie-de-noel/faq-illuminations/).

## Dormir à proximité pour prolonger la sortie

Si vous transformez la visite en week-end, le **Domaine du Moulin Neuf**, à Malansac, propose des cottages avec cuisine près de Rochefort-en-Terre. Selon son gestionnaire Terres de France, certains logements disposent de deux chambres, avec un canapé-lit double dans le séjour pour les modèles accueillant six personnes. La cuisine permet de prévoir un repas au logement après les illuminations.

Vous pouvez [consulter les cottages du Domaine du Moulin Neuf sur Booking.com](https://www.booking.com/hotel/fr/domaine-du-moulin-neuf-rochefort-en-terre.fr.html). Indiquez vos dates et l’âge des enfants pour vérifier la configuration proposée, le prix total, les suppléments éventuels et les conditions d’annulation.

Le gestionnaire annonce une fermeture annuelle en janvier sans en préciser les dates sur sa page: **confirmez l’ouverture si vous visez la fin des illuminations**. La piscine extérieure est saisonnière et fermée pour ce séjour hivernal. Si vous arrivez après 18h, contactez aussi la réception à l’avance pour organiser la remise des clés. Enfin, prévoyez votre trajet après la promenade sans supposer que la proximité du domaine garantit un retour à pied facile en hiver.

Si votre séjour comprend une étape à Vannes, nos repères pour [préparer un goûter breton aux Halles des Lices](https://www.fam-space.fr/articles/cuisine/gouter-breton-aux-halles-des-lices-a-vannes-quoi-acheter-et-quand-venir/) vous aideront à choisir quelques gourmandises et à venir aux bons horaires.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | Noël 2026 à Toulon en famille: marché, patinoire et horaires | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/activites/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre/ | Grottes de Thouzon avec des enfants: préparer la visite sous terre | activites | Le Thor, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | Equita Lyon 2026 avec des enfants: billets, Village Enfants et spectacles | evenements | Chassieu, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/noel-2026-a-quimper-en-famille-village-concert-ou-ateliers-gratuits/ | Noël 2026 à Quimper en famille: village, concert et animations gratuites | evenements | Quimper, Finistère, Bretagne
- /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | Noël à Caen 2026 en famille: marché de Noël et visite illuminée | evenements | Caen, Calvados, Normandie
- /articles/evenements/noel-a-chambord-2026-avec-des-enfants-quand-venir-et-que-prevoir/ | Noël à Chambord 2026 avec des enfants: quand venir et que prévoir | evenements | Chambord, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne
- /articles/evenements/semaine-du-golfe-2027-en-famille-ou-voir-les-bateaux/ | Semaine du Golfe 2027 en famille: où voir les bateaux ? | evenements | Morbihan, Bretagne
- /articles/voyages/belle-ile-en-mer-en-famille-sans-voiture-ferry-et-deplacements/ | Belle-Île-en-Mer en famille sans voiture: ferry et déplacements | voyages | Le Palais, Morbihan, Bretagne
- /articles/sorties/cite-de-la-voile-eric-tabarly-en-famille-quel-parcours-selon-l-age/ | Cité de la Voile Éric Tabarly en famille: quel parcours selon l'âge? | sorties | Lorient, Morbihan, Bretagne
- /articles/bons-plans/les-terres-de-natae-les-reductions-famille-a-connaitre-avant-de-reserver/ | Les Terres de Nataé: les réductions famille à connaître avant de réserver | bons-plans | Pont-Scorff, Morbihan, Bretagne
- /articles/parentalite/mode-de-garde-a-vannes-quand-contacter-le-relais-petite-enfance/ | Mode de garde à Vannes: quand contacter le Relais Petite Enfance ? | parentalite | Vannes, Morbihan, Bretagne
- /articles/cuisine/gouter-breton-aux-halles-des-lices-a-vannes-quoi-acheter-et-quand-venir/ | Goûter breton aux Halles des Lices à Vannes: quoi acheter et quand venir? | cuisine | Vannes, Morbihan, Bretagne
- /articles/maison/fsl-dans-le-morbihan-jusqu-a-1-200-pour-entrer-dans-un-logement/ | FSL dans le Morbihan: jusqu'à 1 200 € pour entrer dans un logement | maison | Vannes, Morbihan, Bretagne
- /articles/evenements/festival-interceltique-lorient-2026-en-famille/ | Festival Interceltique de Lorient 2026: quels rendez-vous choisir avec des enfants ? | evenements | Lorient, Morbihan, Bretagne
- /articles/sorties/festival-photo-la-gacilly-2026-en-famille/ | Festival Photo La Gacilly 2026: un parcours gratuit à hauteur d’enfant | sorties | La Gacilly, Morbihan, Bretagne
- /articles/evenements/noel-2026-au-puy-du-fou-en-famille-spectacles-et-visite-en-hiver/ | Noël 2026 au Puy du Fou en famille: spectacles et visite en hiver | evenements | Les Epesses, Vendée, Pays de la Loire
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/carnaval-de-guyane-2027-en-famille-preparer-ses-premieres-sorties/ | Carnaval de Guyane 2027 en famille: préparer ses premières sorties | evenements | Guyane

### Historique Radar lié

- refresh | /articles/voyages/belle-ile-en-mer-en-famille-sans-voiture-ferry-et-deplacements/ | 2026-11-11T14:37:08.889Z
- opportunity | /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | 2026-10-21T10:43:46.144Z
- refresh | /articles/activites/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre/ | 2026-11-10T09:32:01.095Z
- opportunity | /articles/evenements/noel-2026-a-quimper-en-famille-village-concert-ou-ateliers-gratuits/ | 2026-11-01T18:35:45.871Z
- opportunity | /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | 2026-10-31T10:28:17.432Z
- opportunity | /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | 2026-10-30T21:26:32.584Z
- opportunity | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-10-30T18:26:56.039Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
