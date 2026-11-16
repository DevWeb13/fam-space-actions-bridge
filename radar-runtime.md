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

Soumets le résultat final avec `action: advance`, uniquement les métadonnées éditoriales réellement corrigées, le corps complet et un bloc `radarReview`. Ne recopie pas les métadonnées inchangées: la plomberie les conserve et normalise la syntaxe avant traitement. Le bloc `radarReview` contient:
- `summary`: contrôles et corrections réellement effectués;
- `sources`: URLs factuelles revérifiées;
- pour un refresh, `regressionCheck`: résultat concret de la comparaison ancien/nouveau. Une seule correction factuelle vérifiée peut suffire.

**Ne recopie aucun autre champ Radar, aucune branche et aucun SHA.** Le workflow construit et contrôle d'abord l'article final avec le validateur réel. Il ne crée le commit de phase 3 que si ce précontrôle réussit, puis lance le processeur final.

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
title: "Bâtiment B à Saint-Denis: découvrir le street art en famille"
subtitle: Visite guidée, atelier dès 10 ans et animations du Village pour explorer ce musée éphémère
summary: "À Saint-Denis, le Bâtiment B accueille les familles jusqu’à fin décembre 2026. Visites guidées, tarifs enfants et atelier graffiti: les repères pour réserver."
slug: batiment-b-a-saint-denis-decouvrir-le-street-art-en-famille
status: published
publishedAt: 2026-10-28T00:11:04+01:00
updatedAt: null
eventEndsAt: 2026-12-31
category: evenements
readingTime: 3
publicationOrigin: region
location:
  city: Saint-Denis
  department: La Réunion
  region: La Réunion
topic:
  key: evenements|saint-denis|batiment-b-a-saint-denis-decouvrir-le-street-art-en-famille|2026
  keywords:
    - Bâtiment B Réunion Graffiti
    - street art en famille
    - Saint-Denis La Réunion
image:
  src: /images/articles/2026/10/batiment-b-a-saint-denis-decouvrir-le-street-art-en-famille.webp
  alt: Lit de galets de la rivière Saint-Denis dans le quartier du Bas de la Rivière, à La Réunion
sources:
  - title: Réunion Graffiti, édition 2026
    url: https://reuniongraffiti.re/edition-2026/
  - title: Billetterie officielle du Bâtiment B
    url: https://my.weezevent.com/batiment-b
  - title: Programme officiel de Réunion Graffiti 2026
    url: https://reuniongraffiti.re/wp-content/uploads/2026/09/RG26-livret_A5.pdf
  - title: Réunion Graffiti, portrait d’Eko LSA
    url: https://reuniongraffiti.re/eko-lsa/
  - title: Réunion Graffiti, portrait de Bonheur
    url: https://reuniongraffiti.re/bonheur/
  - title: Hôtel Le Juliette Dodu, coordonnées
    url: https://hotel-juliette-dodu.fr/fr/contactez-nous/
affiliate:
  enabled: true
  type: travel
  destination: Saint-Denis
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/batiment-b-a-saint-denis-decouvrir-le-street-art-en-famille/index.md
  targetSha: f0d5b7b8146711e3526fe07a895132d99bb03c56
  targetUrl: /articles/evenements/batiment-b-a-saint-denis-decouvrir-le-street-art-en-famille/
  decision: Choisir une visite guidée du Bâtiment B avec les enfants en connaissant la réservation obligatoire, la jauge, les tarifs par âge et les conditions de l'atelier.
  affiliationPotential: Conserver l'offre Expedia existante pour l'hôtel Le Juliette Dodu; pas de billetterie partenaire vérifiée pour le musée.
  gsc:
    retrievedAt: 2026-11-16T02:33:37+01:00
    dataThrough: 2026-11-13
    signal: needs_query_check
    basis: "Visibilité récente : 41 impressions sur trois jours, puis 3 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-29
    peakEnd: 2026-10-31
    recentStart: 2026-11-11
    recentEnd: 2026-11-13
    peakImpressions: 41
    recentImpressions: 3
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Bâtiment B Réunion Graffiti
      - street art en famille
      - Saint-Denis La Réunion
---

<!-- article-image-credit -->
*Photo: [Clémenceau Lauret](https://commons.wikimedia.org/wiki/File:Lit_caillouteux_de_la_rivi%C3%A8re_Saint-Denis_depuis_le_pont_-_Saint-Denis_La_R%C3%A9union.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Saint-Denis, à La Réunion, le Bâtiment B est devenu un musée éphémère de street art. Sur près de 5 000 m², fresques, installations et œuvres immersives transforment le bâtiment lui-même en support de création. Pour les enfants, c’est une occasion de découvrir la peinture à une autre échelle. Le festival d’octobre est terminé, mais [Réunion Graffiti annonce des visites guidées le week-end jusqu’au **31 décembre 2026**](https://reuniongraffiti.re/edition-2026/).

## Des murs à regarder autrement

Les artistes ont peint directement sur les murs et créé des œuvres pour le lieu. On peut s’approcher pour observer un détail, puis reculer pour voir comment une composition occupe tout un espace.

Deux artistes présents au [programme 2026](https://reuniongraffiti.re/wp-content/uploads/2026/09/RG26-livret_A5.pdf) donnent des pistes pour aborder cette diversité. [Eko LSA](https://reuniongraffiti.re/eko-lsa/) explore la lettre, le mouvement et la couleur; ses personnages «Eko B boys» sont dessinés d’un seul trait. [Bonheur](https://reuniongraffiti.re/bonheur/) a fait d’un sourire multicolore sa signature. Deux façons d’expliquer aux enfants qu’un artiste peut se reconnaître à son geste comme à un motif récurrent.

Pendant le parcours, proposez aux plus jeunes de choisir une couleur et de suivre ses apparitions. Avec les plus grands, comparez deux œuvres: laquelle semble en mouvement? Les lettres restent-elles lisibles? Quelques échanges suffisent à ouvrir la discussion, en laissant aussi chacun regarder à son rythme.

## Réserver une visite ou un atelier

Le Bâtiment B se découvre **exclusivement en visite guidée**, sur des créneaux réservés à l'avance. La jauge est limitée à **40 personnes maximum par groupe** dans le cadre d'une autorisation temporaire d'accueil du public. **Chaque adulte et chaque enfant doit avoir sa propre réservation, même lorsqu'il bénéficie de la gratuité**: les enfants comptent dans les 40 places disponibles.

Le tarif familial concerne uniquement la **visite de 8 h**:

- moins de 6 ans: gratuit, avec réservation obligatoire;
- de 6 à 11 ans: 10 €;
- dès 12 ans, adultes compris: 15 €.

Les autres créneaux sont affichés à **15 € par personne**. Consultez les dates disponibles avant d’organiser votre venue.

Pour passer à la pratique, la formule **visite guidée + atelier graffiti** prévoit une initiation avec un artiste, **dès 10 ans**. La description mentionne **40 € pour l’atelier**, sans établir clairement si la visite est comprise. Faites confirmer le montant total avant paiement.

Matériel et protections sont fournis. Prévoyez des vêtements qui peuvent être tachés et des chaussures adaptées. Pour un mineur, l’inscription implique l’autorisation du responsable légal.

## Prolonger la découverte au Village

Le Village Réunion Graffiti accompagne les visites avec un programme qui change chaque week-end: peinture en direct, rencontres, ateliers ou animations musicales. Les annonces paraissent progressivement sur les réseaux de l’organisateur, accessibles depuis la [page de l’événement](https://reuniongraffiti.re/edition-2026/). La présence d’un artiste en démonstration n’est donc pas garantie à chaque venue.

Une formule avec brunch peut aussi être proposée selon les dates. Si elle vous intéresse, vérifiez son contenu et son horaire avant de réserver.

## Préparer sa venue à Saint-Denis

Le Bâtiment B se trouve au **13 rue de la Boulangerie, dans le quartier du Bas de la Rivière**.

La durée des formules et les conditions de circulation en poussette ou en fauteuil ne sont pas détaillées dans la billetterie. Avant de réserver, faites préciser ces points grâce au [formulaire de contact de Réunion Graffiti](https://reuniongraffiti.re/edition-2026/), en bas de page.

Pour dormir à Saint-Denis avant une visite matinale, **Le Juliette Dodu**, au **31 rue Juliette Dodu**, est une option à examiner. Vous pouvez [consulter les chambres du Juliette Dodu sur Expedia](https://www.expedia.fr/Saint-Denis-Hotel-Hotel-Le-Juliette-Dodu.h1468549.Description-Hotel) en renseignant vos dates et l’âge des enfants. Vérifiez la capacité des chambres proposées, le prix total et les conditions d’annulation pour votre famille.

Vous poursuivez votre séjour sur l’île? Notre guide pour [visiter la Cité du Volcan en famille à Bourg-Murat](/articles/voyages/visiter-la-cite-du-volcan-en-famille-a-la-reunion/) propose une autre étape culturelle à préparer avec les enfants.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/batiment-b-a-saint-denis-decouvrir-le-street-art-en-famille/index.md

---
title: "Bâtiment B à Saint-Denis: découvrir le street art en famille"
subtitle: Visite guidée, atelier dès 10 ans et animations du Village pour explorer ce musée éphémère
summary: "À Saint-Denis, le Bâtiment B accueille les familles jusqu’à fin décembre 2026. Visites guidées, tarifs enfants et atelier graffiti: les repères pour réserver."
slug: batiment-b-a-saint-denis-decouvrir-le-street-art-en-famille
status: published
publishedAt: 2026-10-28T00:11:04+01:00
updatedAt: null
eventEndsAt: 2026-12-31
category: evenements
readingTime: 3
publicationOrigin: region
location:
  city: Saint-Denis
  department: La Réunion
  region: La Réunion
topic:
  key: evenements|saint-denis|batiment-b-a-saint-denis-decouvrir-le-street-art-en-famille|2026
  keywords:
    - Bâtiment B Réunion Graffiti
    - street art en famille
    - Saint-Denis La Réunion
image:
  src: "/images/articles/2026/10/batiment-b-a-saint-denis-decouvrir-le-street-art-en-famille.webp"
  alt: "Lit de galets de la rivière Saint-Denis dans le quartier du Bas de la Rivière, à La Réunion"
sources:
  - title: Réunion Graffiti, édition 2026
    url: https://reuniongraffiti.re/edition-2026/
  - title: Billetterie officielle du Bâtiment B
    url: https://my.weezevent.com/batiment-b
  - title: Programme officiel de Réunion Graffiti 2026
    url: https://reuniongraffiti.re/wp-content/uploads/2026/09/RG26-livret_A5.pdf
  - title: Réunion Graffiti, portrait d’Eko LSA
    url: https://reuniongraffiti.re/eko-lsa/
  - title: Réunion Graffiti, portrait de Bonheur
    url: https://reuniongraffiti.re/bonheur/
  - title: Hôtel Le Juliette Dodu, coordonnées
    url: https://hotel-juliette-dodu.fr/fr/contactez-nous/
affiliate:
  enabled: true
  type: travel
  destination: Saint-Denis
---
<!-- article-image-credit -->
*Photo: [Clémenceau Lauret](https://commons.wikimedia.org/wiki/File:Lit_caillouteux_de_la_rivi%C3%A8re_Saint-Denis_depuis_le_pont_-_Saint-Denis_La_R%C3%A9union.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Saint-Denis, à La Réunion, le Bâtiment B est devenu un musée éphémère de street art. Sur près de 5 000 m², fresques, installations et œuvres immersives transforment le bâtiment lui-même en support de création. Pour les enfants, c’est une occasion de découvrir la peinture à une autre échelle. Le festival d’octobre est terminé, mais [Réunion Graffiti annonce des visites guidées le week-end jusqu’au **31 décembre 2026**](https://reuniongraffiti.re/edition-2026/).

## Des murs à regarder autrement

Les artistes ont peint directement sur les murs et créé des œuvres pour le lieu. On peut s’approcher pour observer un détail, puis reculer pour voir comment une composition occupe tout un espace.

Deux artistes présents au [programme 2026](https://reuniongraffiti.re/wp-content/uploads/2026/09/RG26-livret_A5.pdf) donnent des pistes pour aborder cette diversité. [Eko LSA](https://reuniongraffiti.re/eko-lsa/) explore la lettre, le mouvement et la couleur; ses personnages «Eko B boys» sont dessinés d’un seul trait. [Bonheur](https://reuniongraffiti.re/bonheur/) a fait d’un sourire multicolore sa signature. Deux façons d’expliquer aux enfants qu’un artiste peut se reconnaître à son geste comme à un motif récurrent.

Pendant le parcours, proposez aux plus jeunes de choisir une couleur et de suivre ses apparitions. Avec les plus grands, comparez deux œuvres: laquelle semble en mouvement? Les lettres restent-elles lisibles? Quelques échanges suffisent à ouvrir la discussion, en laissant aussi chacun regarder à son rythme.

## Réserver une visite ou un atelier

La [billetterie officielle du Bâtiment B](https://my.weezevent.com/batiment-b) précise les formules proposées selon les dates. **Chaque visiteur doit réserver sa place, même un enfant accueilli gratuitement.**

Le tarif familial concerne uniquement la **visite de 8 h**:

- moins de 6 ans: gratuit;
- de 6 à 11 ans: 10 €;
- dès 12 ans, adultes compris: 15 €.

Les autres créneaux sont affichés à **15 € par personne**. Consultez les dates disponibles avant d’organiser votre venue.

Pour passer à la pratique, la formule **visite guidée + atelier graffiti** prévoit une initiation avec un artiste, **dès 10 ans**. La description mentionne **40 € pour l’atelier**, sans établir clairement si la visite est comprise. Faites confirmer le montant total avant paiement.

Matériel et protections sont fournis. Prévoyez des vêtements qui peuvent être tachés et des chaussures adaptées. Pour un mineur, l’inscription implique l’autorisation du responsable légal.

## Prolonger la découverte au Village

Le Village Réunion Graffiti accompagne les visites avec un programme qui change chaque week-end: peinture en direct, rencontres, ateliers ou animations musicales. Les annonces paraissent progressivement sur les réseaux de l’organisateur, accessibles depuis la [page de l’événement](https://reuniongraffiti.re/edition-2026/). La présence d’un artiste en démonstration n’est donc pas garantie à chaque venue.

Une formule avec brunch peut aussi être proposée selon les dates. Si elle vous intéresse, vérifiez son contenu et son horaire avant de réserver.

## Préparer sa venue à Saint-Denis

Le Bâtiment B se trouve au **13 rue de la Boulangerie, dans le quartier du Bas de la Rivière**.

La durée des formules et les conditions de circulation en poussette ou en fauteuil ne sont pas détaillées dans la billetterie. Avant de réserver, faites préciser ces points grâce au [formulaire de contact de Réunion Graffiti](https://reuniongraffiti.re/edition-2026/), en bas de page.

Pour dormir à Saint-Denis avant une visite matinale, **Le Juliette Dodu**, au **31 rue Juliette Dodu**, est une option à examiner. Vous pouvez [consulter les chambres du Juliette Dodu sur Expedia](https://www.expedia.fr/Saint-Denis-Hotel-Hotel-Le-Juliette-Dodu.h1468549.Description-Hotel) en renseignant vos dates et l’âge des enfants. Vérifiez la capacité des chambres proposées, le prix total et les conditions d’annulation pour votre famille.

Vous poursuivez votre séjour sur l’île? Notre guide pour [visiter la Cité du Volcan en famille à Bourg-Murat](/articles/voyages/visiter-la-cite-du-volcan-en-famille-a-la-reunion/) propose une autre étape culturelle à préparer avec les enfants.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/visiter-le-stade-de-france-en-famille-coulisses-musee-et-conseils-pratiques/ | Visiter le Stade de France en famille: coulisses, musée et conseils pratiques | activites | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/voyages/dormir-a-saint-denis-pour-visiter-paris-avec-des-enfants-pleyel-ou-basilique/ | Dormir à Saint-Denis pour visiter Paris avec des enfants: Pleyel ou Basilique? | voyages | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | Monument jeu d'enfant 2026 à Saint-Denis: atelier Dagobert le 17 octobre | evenements | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/activites/kayak-transparent-a-trou-d-eau-decouvrir-le-lagon-en-famille/ | Kayak transparent à Trou d’Eau: découvrir le lagon en famille | activites | Saint-Paul, La Réunion, La Réunion
- /articles/maison/ameliorer-son-logement-a-la-reunion-qui-peut-demander-l-aide-departementale/ | Améliorer son logement à La Réunion: qui peut demander l'aide départementale? | maison | Saint-Denis, La Réunion, La Réunion
- /articles/cuisine/maison-du-coco-a-saint-leu-faut-il-reserver-l-atelier-ou-visiter-seulement-le-domaine/ | Maison du Coco à Saint-Leu: faut-il réserver l'atelier ou visiter seulement le domaine? | cuisine | Saint-Leu, La Réunion, La Réunion
- /articles/sorties/aquarium-reunion-fermeture-2026-visite-famille/ | Aquarium de La Réunion fermé depuis le 17 août 2026: quand pourra-t-on revenir en famille ? | sorties | Saint-Gilles-les-Bains, La Réunion, La Réunion
- /articles/bons-plans/musees-a-la-reunion-en-famille-quel-pass-choisir-pour-economiser/ | Musées à La Réunion en famille: quel pass choisir pour économiser ? | bons-plans | La Réunion, La Réunion
- /articles/evenements/batiment-b-a-saint-denis-decouvrir-le-street-art-en-famille/ | Bâtiment B à Saint-Denis: découvrir le street art en famille | evenements | Saint-Denis, La Réunion, La Réunion
- /articles/voyages/visiter-la-cite-du-volcan-en-famille-a-la-reunion/ | Visiter la Cité du Volcan en famille à La Réunion | voyages | Le Tampon, La Réunion, La Réunion
- /articles/parentalite/kaz-1000-jours-au-port-ateliers-gratuits-pour-les-futurs-et-jeunes-parents/ | Kaz’1000 jours au Port: ateliers gratuits pour les futurs et jeunes parents | parentalite | Le Port, La Réunion, La Réunion
- /articles/evenements/niepce-et-apres-une-exposition-photo-a-decouvrir-en-famille-a-chalon-sur-saone/ | Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône | evenements | Chalon-sur-Saône, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-puy-du-fou-en-famille-spectacles-et-visite-en-hiver/ | Noël 2026 au Puy du Fou en famille: spectacles et visite en hiver | evenements | Les Epesses, Vendée, Pays de la Loire
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/carnaval-de-guyane-2027-en-famille-preparer-ses-premieres-sorties/ | Carnaval de Guyane 2027 en famille: préparer ses premières sorties | evenements | Guyane
- /articles/evenements/mondo-clowns-2027-a-marmande-dates-tarifs-et-conseils-en-famille/ | Mondo'Clowns 2027 à Marmande: dates, tarifs et conseils en famille | evenements | Marmande, Lot-et-Garonne, Nouvelle-Aquitaine
- /articles/evenements/chambly-kids-festival-2027-quatre-spectacles-pour-les-enfants-dates-et-ages/ | Chambly Kids Festival 2027: quatre spectacles pour les enfants, dates et âges | evenements | Chambly, Oise, Hauts-de-France
- /articles/evenements/festival-tete-de-mioche-2027-a-l-horme-quels-spectacles-choisir-avec-les-enfants/ | Festival Tête de mioche 2027 à L'Horme: quels spectacles choisir avec les enfants ? | evenements | L'Horme, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/festival-mini-kids-2027-aux-orres-trois-jours-pour-les-3-6-ans/ | Festival Mini Kids 2027 aux Orres, trois jours pour les 3-6 ans | evenements | Les Orres, Hautes-Alpes, Provence-Alpes-Côte d’Azur
- /articles/evenements/fete-du-citron-2027-a-menton-en-famille-que-voir-et-combien-prevoir/ | Fête du Citron 2027 à Menton en famille: que voir et combien prévoir ? | evenements | Menton, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/carnaval-de-limoux-2027-en-famille-dates-fecos-et-conseils-pratiques/ | Carnaval de Limoux 2027 en famille: dates, Fécos et conseils pratiques | evenements | Limoux, Aude, Occitanie

### Historique Radar lié

- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | 2026-10-13T09:50:29.435Z
- refresh | /articles/voyages/visiter-la-cite-du-volcan-en-famille-a-la-reunion/ | 2026-11-12T22:37:09.211Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
