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
title: "Encombrants à Bourges: quand sortir meubles et gros objets"
subtitle: Calendrier 2026 par rue, dernières collectes et solutions de réemploi
summary: À Bourges, vérifiez les derniers passages de 2026 selon votre rue et votre logement, puis choisissez entre collecte, déchèterie et réemploi.
slug: encombrants-a-bourges-quand-sortir-meubles-et-gros-objets
status: published
publishedAt: 2026-09-11T00:03:15+02:00
updatedAt: 2026-10-03T03:24:30.225Z
reviewAt: 2026-12-18
category: maison
readingTime: 5
location:
  city: Bourges
  department: Cher
  region: Centre-Val de Loire
topic:
  key: maison|bourges|encombrants-a-bourges-quand-sortir-meubles-et-gros-objets|2026
  keywords:
    - encombrants Bourges
    - déchèterie Bourges
image:
  src: /images/articles/2026/09/encombrants-a-bourges-quand-sortir-meubles-et-gros-objets.webp
  alt: Matelas et chaises déposés comme encombrants sur un trottoir
sources:
  - title: Bourges Plus - Ramassage des encombrants
    url: https://www.agglo-bourgesplus.fr/site/vie-pratiquedechetsramassage-des-encombrants-monstres
    accessedAt: 2026-11-19
  - title: Bourges Plus - Planning encombrants 2026
    url: https://www.agglo-bourgesplus.fr/web/medias/files/environnement/calendrier_encombrants.pdf
    accessedAt: 2026-11-19
  - title: Bourges Plus - Déchèteries
    url: https://www.agglo-bourgesplus.fr/site/vie-pratique/dechets/decheteries-les-horaires-d-ouverture
    accessedAt: 2026-11-19
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/maison/(2026)/(09)/encombrants-a-bourges-quand-sortir-meubles-et-gros-objets/index.md
  targetSha: 02bb44c32c626608887c2825e67cbf121cdc942c
  targetUrl: /articles/maison/encombrants-a-bourges-quand-sortir-meubles-et-gros-objets/
  decision: Permettre à un habitant de Bourges de déterminer sans erreur si sa rue bénéficie encore d'un ramassage en 2026, quand sortir son objet, et quelle solution choisir si la collecte est passée ou l'objet refusé.
  affiliationPotential: Aucune affiliation naturelle pour un service public de collecte et de réemploi.
  gsc:
    retrievedAt: 2026-11-19T01:30:40+01:00
    dataThrough: 2026-11-16
    signal: needs_query_check
    basis: Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.
    peakStart: 2026-10-24
    peakEnd: 2026-10-30
    recentStart: 2026-11-10
    recentEnd: 2026-11-16
    peakImpressions: 149
    recentImpressions: 45
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - encombrants Bourges
      - déchèterie Bourges
---

e: "Encombrants à Bourges: quand sortir meubles et gros objets"
subtitle: Calendrier par rue, prochaines dates, objets acceptés et solutions de réemploi
summary: À Bourges, retrouvez la date de collecte de votre rue et choisissez entre ramassage, déchèterie ou réemploi selon l'objet à évacuer.
slug: encombrants-a-bourges-quand-sortir-meubles-et-gros-objets
status: published
publishedAt: 2026-09-11T00:03:15+02:00
updatedAt: 2026-10-03T03:24:30.225Z
reviewAt: 2026-12-18
category: maison
readingTime: 5
location:
  city: Bourges
  department: Cher
  region: Centre-Val de Loire
topic:
  key: maison|bourges|encombrants-a-bourges-quand-sortir-meubles-et-gros-objets|2026
  keywords:
    - encombrants Bourges
    - déchèterie Bourges
image:
  src: /images/articles/2026/09/encombrants-a-bourges-quand-sortir-meubles-et-gros-objets.webp
  alt: Matelas et chaises déposés comme encombrants sur un trottoir
sources:
  - title: Bourges Plus - Ramassage des encombrants
    url: https://www.agglo-bourgesplus.fr/site/vie-pratiquedechetsramassage-des-encombrants-monstres
    accessedAt: 2026-10-03
  - title: Bourges Plus - Planning encombrants 2026
    url: https://www.agglo-bourgesplus.fr/web/medias/files/environnement/calendrier_encombrants.pdf
    accessedAt: 2026-10-03
  - title: Bourges Plus - Déchèteries
    url: https://www.agglo-bourgesplus.fr/site/vie-pratique/dechets/decheteries-les-horaires-d-ouverture
    accessedAt: 2026-10-03
---

<!-- article-image-credit -->
*Photo: [Jan Honvehlmann](https://commons.wikimedia.org/wiki/File:Bulky_waste_on_street_side_with_matress_and_chairs_-_HDR_off.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Bourges, la date de ramassage d'un matelas, d'un canapé ou d'un autre objet volumineux dépend de la rue. Il faut d'abord retrouver son adresse dans le planning 2026 de Bourges Plus, puis vérifier la date et la couleur indiquées. Si le passage est déjà terminé ou si l'objet n'est pas accepté, la déchèterie ou le réemploi devient la solution adaptée.

## Comment trouver la date de collecte de sa rue?

Ouvrez le [planning officiel des encombrants 2026](https://www.agglo-bourgesplus.fr/web/medias/files/environnement/calendrier_encombrants.pdf), puis recherchez votre rue. Le document répartit Bourges en 19 secteurs et distingue les dates destinées aux particuliers de celles qui concernent les logements HLM grâce à deux couleurs.

Ne vous fiez donc pas uniquement au numéro du secteur. Une ligne peut comporter une date particulière selon le type d'habitat. Vérifiez la rue complète, la couleur de la date et l'année avant de sortir un objet.

Au **19 novembre 2026**, les dates principales de fin d'année à vérifier sont:

- **secteur 18: jeudi 19 novembre**. Le dépôt devait être effectué le mercredi 18 novembre après 18 h: si vous consultez ce guide après le passage, ne déposez pas d'objet sans nouvelle confirmation de Bourges Plus;
- **secteur 19: jeudi 10 décembre**. Pour les rues concernées et sous réserve de confirmation, dépôt à partir du mercredi 9 décembre à 18 h.

Les collectes des secteurs 14 à 17, programmées en octobre, sont terminées. Ces dates sectorielles ne remplacent pas la vérification de votre rue et de votre type de logement dans le calendrier: des dates complémentaires peuvent concerner certains logements, notamment HLM.

Aucun calendrier 2027 n'est confirmé ici. Pour une collecte après décembre 2026, consultez la version la plus récente publiée par Bourges Plus ou contactez le service clientèle plutôt que de reprendre les dates de 2026.

Le calendrier montre aussi des dates complémentaires pour certaines lignes et certains logements. La [page de Bourges Plus consacrée au ramassage](https://www.agglo-bourgesplus.fr/site/vie-pratiquedechetsramassage-des-encombrants-monstres) prévient que les dates de quelques rues ont pu évoluer. Le PDF associé à votre rue reste donc la référence à contrôler juste avant le dépôt.

## Quand faut-il sortir les objets?

La collecte commence à **5 h du matin**. Bourges Plus autorise le dépôt la veille à partir de **18 h**, au droit de l'habitation.

Placez les objets devant votre adresse sans constituer un point de regroupement avec le voisinage. Un dépôt effectué plusieurs jours trop tôt encombre l'espace public et peut ne pas correspondre au prochain passage de votre rue.

Avant de descendre un meuble, faites ce contrôle rapide:

1. retrouvez la rue exacte dans le planning;
2. relevez la date et la couleur qui correspondent à votre situation;
3. vérifiez que l'objet fait partie des encombrants acceptés;
4. déposez-le seulement la veille après 18 h.

## Quels objets sont acceptés comme encombrants?

Bourges Plus cite notamment les sommiers, matelas, vieux vélos, chauffe-eau, canapés, moquettes, grillages enroulés, caisses et certains récipients vides.

La collecte ne doit pas recevoir:

- les ordures ménagères, en sacs ou en vrac;
- les produits toxiques comme les pots de peinture ou les acides;
- les cailloux, gravats et déchets de démolition;
- les pneus.

Les équipements électriques et électroniques ne doivent pas être déposés par défaut avec les encombrants. Bourges Plus demande de les remettre en priorité au vendeur, en déchèterie ou à une association comme Emmaüs.

Pour les déchets alimentaires et végétaux du quotidien, notre guide sur le [tri des biodéchets à la maison](/articles/maison/tri-biodechets-maison-collecte-composteur-lombricomposteur/) permet de choisir entre collecte locale, composteur ou solution partagée.

## Quand préférer la déchèterie?

La déchèterie est plus pratique si la collecte de votre rue est passée, si vous devez évacuer plusieurs catégories de déchets ou si l'objet est refusé au ramassage. Bourges Plus gère six déchèteries dans l'agglomération, dont celle des 4 Vents à Bourges.

Le [réseau des déchèteries de Bourges Plus](https://www.agglo-bourgesplus.fr/site/vie-pratique/dechets/decheteries-les-horaires-d-ouverture) est réservé aux particuliers qui résident dans l'agglomération et viennent avec un véhicule dont le poids total autorisé en charge est inférieur à 3,5 tonnes. Les professionnels n'y sont pas admis et les sites ferment les jours fériés.

Les déchets acceptés et les horaires peuvent varier selon le site. Consultez la carte interactive officielle avant de charger le véhicule, surtout pour les gravats, appareils électriques, huiles, piles ou déchets spécifiques.

## Venir en déchèterie avec des enfants

Bourges Plus impose un gilet de haute visibilité aux enfants de moins de 12 ans présents en déchèterie. Les animaux doivent rester dans le véhicule.

Triez les objets avant de partir afin de réduire le temps de déchargement. Sur place, roulez au pas, suivez le sens de circulation et les consignes du gardien. Il est interdit de monter dans les bennes ou de récupérer des objets et matériaux déjà déposés.

## Donner ou réemployer un objet encore utilisable

Un meuble ou un appareil en état de fonctionner ne doit pas forcément finir dans une benne. Des conteneurs Emmaüs sont installés dans les déchèteries des 4 Vents à Bourges et de Saint-Doulchard.

Bourges Plus annonce également des zones de dépose et de reprise dans les déchèteries de La Chapelle-Saint-Ursin, Mehun-sur-Yèvre, Saint-Just et Trouy. Vérifiez l'état attendu et la disponibilité de l'espace avant le trajet.

Le réemploi est particulièrement pertinent pour un meuble complet, de la vaisselle, un vélo réparable ou un petit équipement encore fonctionnel. Pour un appareil électrique acheté récemment, vérifiez aussi si le vendeur doit reprendre l'ancien matériel.

## Qui appeler en cas de doute?

Le service clientèle de Bourges Plus répond aux questions sur les jours de collecte, le tri, les déchèteries et les bacs au [0 800 897 730](tel:0800897730). L'appel est gratuit.

Les horaires publiés sont:

- lundi, mercredi, jeudi et vendredi de 9 h à 12 h et de 13 h 30 à 17 h;
- mardi de 10 h à 12 h et de 13 h 30 à 17 h.

Appelez avant le dépôt si votre rue est difficile à repérer dans le calendrier, si plusieurs dates apparaissent ou si l'objet ne correspond pas clairement aux listes officielles.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/maison/(2026)/(09)/encombrants-a-bourges-quand-sortir-meubles-et-gros-objets/index.md

---
title: "Encombrants à Bourges: quand sortir meubles et gros objets"
subtitle: Calendrier par rue, prochaines dates, objets acceptés et solutions de réemploi
summary: À Bourges, retrouvez la date de collecte de votre rue et choisissez entre ramassage, déchèterie ou réemploi selon l'objet à évacuer.
slug: encombrants-a-bourges-quand-sortir-meubles-et-gros-objets
status: published
publishedAt: 2026-09-11T00:03:15+02:00
updatedAt: 2026-10-03T03:24:30.225Z
reviewAt: 2026-12-18
category: maison
readingTime: 5
location:
  city: Bourges
  department: Cher
  region: Centre-Val de Loire
topic:
  key: maison|bourges|encombrants-a-bourges-quand-sortir-meubles-et-gros-objets|2026
  keywords:
    - encombrants Bourges
    - déchèterie Bourges
image:
  src: /images/articles/2026/09/encombrants-a-bourges-quand-sortir-meubles-et-gros-objets.webp
  alt: Matelas et chaises déposés comme encombrants sur un trottoir
sources:
  - title: Bourges Plus - Ramassage des encombrants
    url: https://www.agglo-bourgesplus.fr/site/vie-pratiquedechetsramassage-des-encombrants-monstres
    accessedAt: 2026-10-03
  - title: Bourges Plus - Planning encombrants 2026
    url: https://www.agglo-bourgesplus.fr/web/medias/files/environnement/calendrier_encombrants.pdf
    accessedAt: 2026-10-03
  - title: Bourges Plus - Déchèteries
    url: https://www.agglo-bourgesplus.fr/site/vie-pratique/dechets/decheteries-les-horaires-d-ouverture
    accessedAt: 2026-10-03
---

<!-- article-image-credit -->
*Photo: [Jan Honvehlmann](https://commons.wikimedia.org/wiki/File:Bulky_waste_on_street_side_with_matress_and_chairs_-_HDR_off.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Bourges, la date de ramassage d'un matelas, d'un canapé ou d'un autre objet volumineux dépend de la rue. Il faut d'abord retrouver son adresse dans le planning 2026 de Bourges Plus, puis vérifier la date et la couleur indiquées. Si le passage est déjà terminé ou si l'objet n'est pas accepté, la déchèterie ou le réemploi devient la solution adaptée.

## Comment trouver la date de collecte de sa rue?

Ouvrez le [planning officiel des encombrants 2026](https://www.agglo-bourgesplus.fr/web/medias/files/environnement/calendrier_encombrants.pdf), puis recherchez votre rue. Le document répartit Bourges en 19 secteurs et distingue les dates destinées aux particuliers de celles qui concernent les logements HLM grâce à deux couleurs.

Ne vous fiez donc pas uniquement au numéro du secteur. Une ligne peut comporter une date particulière selon le type d'habitat. Vérifiez la rue complète, la couleur de la date et l'année avant de sortir un objet.

Au 3 octobre 2026, les prochaines dates principales encore affichées dans le calendrier sont:

- secteur 14: jeudi 8 octobre;
- secteur 15: jeudi 15 octobre;
- secteur 16: jeudi 22 octobre;
- secteur 17: jeudi 29 octobre;
- secteur 18: jeudi 19 novembre;
- secteur 19: jeudi 10 décembre.

Le calendrier montre aussi des dates complémentaires pour certaines lignes et certains logements. La [page de Bourges Plus consacrée au ramassage](https://www.agglo-bourgesplus.fr/site/vie-pratiquedechetsramassage-des-encombrants-monstres) prévient que les dates de quelques rues ont pu évoluer. Le PDF associé à votre rue reste donc la référence à contrôler juste avant le dépôt.

## Quand faut-il sortir les objets?

La collecte commence à **5 h du matin**. Bourges Plus autorise le dépôt la veille à partir de **18 h**, au droit de l'habitation.

Placez les objets devant votre adresse sans constituer un point de regroupement avec le voisinage. Un dépôt effectué plusieurs jours trop tôt encombre l'espace public et peut ne pas correspondre au prochain passage de votre rue.

Avant de descendre un meuble, faites ce contrôle rapide:

1. retrouvez la rue exacte dans le planning;
2. relevez la date et la couleur qui correspondent à votre situation;
3. vérifiez que l'objet fait partie des encombrants acceptés;
4. déposez-le seulement la veille après 18 h.

## Quels objets sont acceptés comme encombrants?

Bourges Plus cite notamment les sommiers, matelas, vieux vélos, chauffe-eau, canapés, moquettes, grillages enroulés, caisses et certains récipients vides.

La collecte ne doit pas recevoir:

- les ordures ménagères, en sacs ou en vrac;
- les produits toxiques comme les pots de peinture ou les acides;
- les cailloux, gravats et déchets de démolition;
- les pneus.

Les équipements électriques et électroniques ne doivent pas être déposés par défaut avec les encombrants. Bourges Plus demande de les remettre en priorité au vendeur, en déchèterie ou à une association comme Emmaüs.

Pour les déchets alimentaires et végétaux du quotidien, notre guide sur le [tri des biodéchets à la maison](/articles/maison/tri-biodechets-maison-collecte-composteur-lombricomposteur/) permet de choisir entre collecte locale, composteur ou solution partagée.

## Quand préférer la déchèterie?

La déchèterie est plus pratique si la collecte de votre rue est passée, si vous devez évacuer plusieurs catégories de déchets ou si l'objet est refusé au ramassage. Bourges Plus gère six déchèteries dans l'agglomération, dont celle des 4 Vents à Bourges.

Le [réseau des déchèteries de Bourges Plus](https://www.agglo-bourgesplus.fr/site/vie-pratique/dechets/decheteries-les-horaires-d-ouverture) est réservé aux particuliers qui résident dans l'agglomération et viennent avec un véhicule dont le poids total autorisé en charge est inférieur à 3,5 tonnes. Les professionnels n'y sont pas admis et les sites ferment les jours fériés.

Les déchets acceptés et les horaires peuvent varier selon le site. Consultez la carte interactive officielle avant de charger le véhicule, surtout pour les gravats, appareils électriques, huiles, piles ou déchets spécifiques.

## Venir en déchèterie avec des enfants

Bourges Plus impose un gilet de haute visibilité aux enfants de moins de 12 ans présents en déchèterie. Les animaux doivent rester dans le véhicule.

Triez les objets avant de partir afin de réduire le temps de déchargement. Sur place, roulez au pas, suivez le sens de circulation et les consignes du gardien. Il est interdit de monter dans les bennes ou de récupérer des objets et matériaux déjà déposés.

## Donner ou réemployer un objet encore utilisable

Un meuble ou un appareil en état de fonctionner ne doit pas forcément finir dans une benne. Des conteneurs Emmaüs sont installés dans les déchèteries des 4 Vents à Bourges et de Saint-Doulchard.

Bourges Plus annonce également des zones de dépose et de reprise dans les déchèteries de La Chapelle-Saint-Ursin, Mehun-sur-Yèvre, Saint-Just et Trouy. Vérifiez l'état attendu et la disponibilité de l'espace avant le trajet.

Le réemploi est particulièrement pertinent pour un meuble complet, de la vaisselle, un vélo réparable ou un petit équipement encore fonctionnel. Pour un appareil électrique acheté récemment, vérifiez aussi si le vendeur doit reprendre l'ancien matériel.

## Qui appeler en cas de doute?

Le service clientèle de Bourges Plus répond aux questions sur les jours de collecte, le tri, les déchèteries et les bacs au [0 800 897 730](tel:0800897730). L'appel est gratuit.

Les horaires publiés sont:

- lundi, mercredi, jeudi et vendredi de 9 h à 12 h et de 13 h 30 à 17 h;
- mardi de 10 h à 12 h et de 13 h 30 à 17 h.

Appelez avant le dépôt si votre rue est difficile à repérer dans le calendrier, si plusieurs dates apparaissent ou si l'objet ne correspond pas clairement aux listes officielles.

Pour une autre démarche locale destinée aux foyers, consultez aussi la [carte famille de Bourges](/articles/vie-pratique/carte-famille-de-bourges-qui-peut-l-obtenir-et-a-quoi-sert-elle/).

## Collecte, déchèterie ou réemploi: le bon choix

Choisissez la collecte si votre rue a une date proche et si l'objet figure parmi les encombrants acceptés. Préférez la déchèterie lorsque la date est passée, que plusieurs filières sont nécessaires ou que le déchet est exclu du ramassage.

Si l'objet est encore utilisable, commencez par le réemploi. Dans tous les cas, ne laissez rien au hasard sur le trottoir: retrouvez d'abord la rue dans le calendrier 2026, puis respectez l'horaire et la filière indiqués.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/voyages/bourges-en-famille-ou-dormir-pour-visiter-sans-voiture/ | Bourges en famille: où dormir pour visiter sans voiture | voyages | Bourges, Cher, Centre-Val de Loire
- /articles/vie-pratique/carte-famille-de-bourges-qui-peut-l-obtenir-et-a-quoi-sert-elle/ | Carte famille de Bourges: qui peut l'obtenir et à quoi sert-elle? | vie-pratique | Bourges, Cher, Centre-Val de Loire
- /articles/bons-plans/bourges-en-famille-a-petit-budget-musees-cathedrale-et-jardins/ | Bourges en famille à petit budget: musées, cathédrale et jardins | bons-plans | Bourges, Cher, Centre-Val de Loire
- /articles/maison/encombrants-a-limoges-donner-faire-enlever-ou-deposer-ses-meubles/ | Encombrants à Limoges: donner, faire enlever ou déposer ses meubles | maison | Limoges, Haute-Vienne, Nouvelle-Aquitaine
- /articles/maison/meubles-et-encombrants-a-compiegne-recyclerie-dechetterie-ou-collecte-a-domicile/ | Meubles et encombrants à Compiègne: recyclerie, déchetterie ou collecte à domicile? | maison | Compiègne, Oise, Hauts-de-France
- /articles/parentalite/lieux-d-accueil-enfants-parents-dans-le-cher-ou-aller-avec-son-tout-petit/ | Lieux d’accueil enfants-parents dans le Cher: où aller avec son tout-petit ? | parentalite | Cher, Centre-Val de Loire
- /articles/maison/encombrants-a-bastia-ou-deposer-meubles-electromenager-et-dechets-verts/ | Encombrants à Bastia: où déposer meubles, électroménager et déchets verts | maison | Bastia, Haute-Corse, Corse
- /articles/maison/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager/ | À Paris, où donner ou déposer meubles, jouets et électroménager ? | maison | Paris, Paris, Île-de-France
- /articles/cuisine/galette-aux-pommes-de-terre-du-berry-une-recette-a-faire-en-famille/ | Galette aux pommes de terre du Berry: une recette à faire en famille | cuisine | Bourges, Cher, Centre-Val de Loire
- /articles/maison/encombrants-a-bourges-quand-sortir-meubles-et-gros-objets/ | Encombrants à Bourges: quand sortir meubles et gros objets | maison | Bourges, Cher, Centre-Val de Loire
- /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | Au Creux de l'Oreille 2026 à Noirlac: spectacles et ateliers en famille du 17 au 22 octobre | evenements | Bruère-Allichamps, Cher, Centre-Val de Loire
- /articles/voyages/week-end-en-famille-au-lac-de-sidiailles-activites-baignade-et-budget/ | Week-end en famille au lac de Sidiailles: activités, baignade et budget | voyages | Sidiailles, Cher, Centre-Val de Loire
- /articles/evenements/guinguette-familles-rians-2026/ | Guinguette des familles 2026 à Rians: les rendez-vous à ne pas manquer jusqu’au 12 août | evenements | Rians, Cher, Centre-Val de Loire
- /articles/maison/meubles-d-occasion-en-ile-de-france-ou-acheter-et-comment-les-transporter/ | Meubles d’occasion en Île-de-France: où acheter et comment les transporter | maison | Île-de-France
- /articles/maison/a-crest-amenager-sa-maison-avec-la-chignole/ | À Crest, aménager sa maison avec La Chignole | maison | Crest, Drôme, Auvergne-Rhône-Alpes
- /articles/maison/maison-froide-dans-les-hautes-alpes-quels-travaux-envisager-avant-l-hiver/ | Maison froide dans les Hautes-Alpes: quels travaux envisager avant l'hiver? | maison | Hautes-Alpes, Provence-Alpes-Côte d’Azur
- /articles/maison/composter-a-la-reunion-avec-ou-sans-jardin/ | Composter à La Réunion, avec ou sans jardin | maison | La Réunion
- /articles/maison/louer-une-maison-dans-les-landes-en-famille-ocean-lac-ou-foret/ | Louer une maison dans les Landes en famille: océan, lac ou forêt? | maison | Landes, Nouvelle-Aquitaine
- /articles/maison/materiaux-de-reemploi-dans-le-finistere-ou-acheter-a-brest-et-quimper/ | Matériaux de réemploi dans le Finistère: où acheter à Brest et Quimper ? | maison | Finistère, Bretagne
- /articles/maison/renover-ou-amenager-sa-maison-dans-le-doubs-qui-peut-vous-conseiller-gratuitement/ | Rénover ou aménager sa maison dans le Doubs: qui peut vous conseiller gratuitement ? | maison | Doubs, Bourgogne-Franche-Comté
- /articles/maison/maison-trop-chaude-dans-le-gard-garder-les-chambres-des-enfants-plus-fraiches/ | Maison trop chaude dans le Gard: garder les chambres des enfants plus fraîches | maison | Gard, Occitanie
- /articles/maison/electromenager-en-panne-a-dijon-reparer-ou-acheter-reconditionne/ | Électroménager en panne à Dijon: réparer ou acheter reconditionné | maison | Dijon, Côte-d'Or, Bourgogne-Franche-Comté

### Historique Radar lié

- refresh | /articles/maison/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager/ | 2026-11-08T00:30:04.157Z
- opportunity | /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | 2026-10-14T13:49:08.708Z
- refresh | /articles/maison/encombrants-a-bourges-quand-sortir-meubles-et-gros-objets/ | 2026-10-03T03:24:30.315Z
- refresh | /articles/maison/encombrants-a-limoges-donner-faire-enlever-ou-deposer-ses-meubles/ | 2026-11-13T01:33:28.483Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
