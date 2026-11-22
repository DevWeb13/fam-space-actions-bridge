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
title: "Arles en famille à petit budget: quelles visites et quel pass choisir?"
subtitle: "Billet couplé, pass à tarif plein ou réduit et musées gratuits: comparer avant de réserver"
summary: "Arènes, cryptoportiques et musées d'Arles: comparez les billets couplés, pass à tarif réduit et gratuités pour organiser une visite familiale abordable."
slug: arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir
status: published
publishedAt: 2026-10-25T09:51:23+01:00
updatedAt: 2026-11-07T18:35:06.929Z
category: bons-plans
readingTime: 7
publicationOrigin: region
location:
  city: Arles
  department: Bouches-du-Rhône
  region: Provence-Alpes-Côte d’Azur
topic:
  key: bons-plans|arles|arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir|2026
  keywords:
    - Arles en famille
    - pass monuments Arles
    - visites gratuites enfants Arles
image:
  src: /images/articles/2026/10/arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir.webp
  alt: Vue de l'amphithéâtre romain d'Arles et de ses gradins de pierre
sources:
  - title: "Office de tourisme d’Arles: pass et tarifs"
    url: https://www.arlestourisme.com/fr/comment-visiter-arles.html
  - title: "Office de tourisme d’Arles: conditions des tarifs réduits"
    url: https://www.arlestourisme.com/fr/d%C3%A9tails.html?ident=6061461
  - title: "Office de tourisme d’Arles: le patrimoine mondial"
    url: https://www.arlestourisme.com/fr/decouvrir-le-patrimoine-mondial.html
  - title: "Office de tourisme d’Arles: les cryptoportiques du Forum"
    url: https://www.arlestourisme.com/fr/d%C3%A9tails.html?ident=5538697
  - title: "Musée départemental Arles antique: en famille"
    url: https://www.arlesantique.fr/en-famille
  - title: "Musée départemental Arles antique: informations pratiques"
    url: https://www.arlesantique.fr/informations-pratiques/informations-pratiques
  - title: "Museon Arlaten: un musée enjoué"
    url: https://www.museonarlaten.fr/le-musee-avec-les-parents-cest-possible/un-musee-enjoue
  - title: "Museon Arlaten: en famille et en pratique"
    url: https://www.museonarlaten.fr/le-musee-avec-les-parents-cest-possible/en-famille-et-en-pratique
  - title: "Museon Arlaten: tarifs, pass, contacts et horaires"
    url: https://www.museonarlaten.fr/votre-visite-0/tarifs-contacts-horaires
  - title: "Office de tourisme d’Arles: musée Réattu"
    url: https://www.arlestourisme.com/fr/d%C3%A9tails.html?=Mus%C3%A9e+R%C3%A9attu&ident=5539256
  - title: "Ville d’Arles: musée Réattu"
    url: https://arles.fr/decouvrir/la-culture/le-musee-reattu/
  - title: "Parc naturel régional de Camargue: musée de la Camargue"
    url: https://www.parc-camargue.fr/musee-camargue.html
  - title: "Billetterie officielle d’Arles: billets et pass"
    url: https://arlestourisme.tickeasy.com/fr-FR/produits
  - title: "Ville d’Arles: horaires et conditions de visite du patrimoine"
    url: https://arles.fr/decouvrir/le-patrimoine/
affiliate:
  enabled: true
  type: travel
  destination: Arles
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/bons-plans/(2026)/(10)/arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir/index.md
  targetSha: c75fc59c6b3fbc5be9575e7b599d5068fceb30d6
  targetUrl: /articles/bons-plans/arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir/
  decision: Comparer correctement le billet couplé Arènes + théâtre à tarif réduit avec les Pass Liberté et Avantage selon les droits des adultes et les visites réellement prévues.
  affiliationPotential: Conserver l'hébergement Booking.com existant pour un week-end à Arles; aucun autre lien partenaire nécessaire à la comparaison des billets municipaux.
  gsc:
    retrievedAt: 2026-11-22T01:30:56+01:00
    dataThrough: 2026-11-19
    signal: uncertain
    basis: "Visibilité récente : 55 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-27
    peakEnd: 2026-10-29
    recentStart: 2026-11-17
    recentEnd: 2026-11-19
    peakImpressions: 55
    recentImpressions: 0
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - pass visite arles
      - pass liberté arles
      - "1"
      - arles pass avantage
      - sortie en famille
---

## Mission retenue
Actualiser la comparaison des billets et pass des monuments d'Arles pour les familles, sans refaire le guide.

## Pourquoi cette mission
Le snapshot montre 55 impressions au pic puis aucune sur les trois jours récents, sans cause SEO démontrée. Une lacune indépendante est vérifiée: le guide compare les pass réduits à un billet couplé uniquement au plein tarif, alors que l'office de tourisme affiche aussi un billet couplé réduit à 9 €. Cela peut fausser le choix d'une famille éligible.

## Décision du lecteur
Choisir la formule réellement la moins chère pour deux adultes et leurs enfants selon les réductions justifiées et la présence ou non d'une visite de musée.

## Faits à traiter
- Billet couplé Arènes + théâtre: 11 € plein tarif, 9 € réduit, valable deux jours consécutifs; vérifier les justificatifs.
- Pass Liberté: 15 € ou 13 €; Pass Avantage: 19 € ou 16 €; gratuité des pass pour les moins de 18 ans accompagnés d'un parent.
- Recalculer les exemples familiaux en distinguant deux adultes plein tarif, un adulte réduit ou deux adultes réduits. Ne pas comparer des billets pleins avec des pass réduits sans expliquer l'hypothèse.
- Préserver toutes les visites, aides aux familles, accessibilité, horaires, gratuités, photos, crédits, sources et liens existants. Ne pas attribuer la baisse GSC à cette omission.

## Sources de départ
- Office de tourisme d'Arles, billet couplé et tarifs réduits: https://www.arlestourisme.com/fr/d%C3%A9tails.html?ident=6061548
- Office de tourisme, pass et gratuité des enfants: https://www.arlestourisme.com/fr/comment-visiter-arles.html
- Office de tourisme, conditions Pass Liberté: https://www.arlestourisme.com/fr/d%C3%A9tails.html?aspect=STANDARD&ident=6061544
- Brochure patrimoine 2026, grille tarifaire: https://www.arlestourisme.com/fr/assets/pdf/patrimoine/Arles%2C%20Patrimoine%20mondial%20rendez-vous%20de%20Printemps%202026.pdf

## Affiliation
Conserver la proposition Booking.com déjà présente, sans ajout artificiel.

## Continuations internes
- Conserver le lien existant vers le guide hôtel ou location avec bébé.
- Garder les excursions hors du centre comme options, sans transformer cette page de comparaison tarifaire en guide de destination.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/bons-plans/(2026)/(10)/arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir/index.md

---
title: "Arles en famille à petit budget: quelles visites et quel pass choisir?"
subtitle: "Billet couplé, pass à tarif plein ou réduit et musées gratuits: comparer avant de réserver"
summary: "Arènes, cryptoportiques et musées d'Arles: comparez les billets couplés, pass à tarif réduit et gratuités pour organiser une visite familiale abordable."
slug: arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir
status: published
publishedAt: 2026-10-25T09:51:23+01:00
updatedAt: 2026-11-07T18:35:06.929Z
category: bons-plans
readingTime: 7
publicationOrigin: region
location:
  city: Arles
  department: Bouches-du-Rhône
  region: Provence-Alpes-Côte d’Azur
topic:
  key: bons-plans|arles|arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir|2026
  keywords:
    - Arles en famille
    - pass monuments Arles
    - visites gratuites enfants Arles
image:
  src: /images/articles/2026/10/arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir.webp
  alt: Vue de l'amphithéâtre romain d'Arles et de ses gradins de pierre
sources:
  - title: "Office de tourisme d’Arles: pass et tarifs"
    url: https://www.arlestourisme.com/fr/comment-visiter-arles.html
  - title: "Office de tourisme d’Arles: conditions des tarifs réduits"
    url: https://www.arlestourisme.com/fr/d%C3%A9tails.html?ident=6061461
  - title: "Office de tourisme d’Arles: le patrimoine mondial"
    url: https://www.arlestourisme.com/fr/decouvrir-le-patrimoine-mondial.html
  - title: "Office de tourisme d’Arles: les cryptoportiques du Forum"
    url: https://www.arlestourisme.com/fr/d%C3%A9tails.html?ident=5538697
  - title: "Musée départemental Arles antique: en famille"
    url: https://www.arlesantique.fr/en-famille
  - title: "Musée départemental Arles antique: informations pratiques"
    url: https://www.arlesantique.fr/informations-pratiques/informations-pratiques
  - title: "Museon Arlaten: un musée enjoué"
    url: https://www.museonarlaten.fr/le-musee-avec-les-parents-cest-possible/un-musee-enjoue
  - title: "Museon Arlaten: en famille et en pratique"
    url: https://www.museonarlaten.fr/le-musee-avec-les-parents-cest-possible/en-famille-et-en-pratique
  - title: "Museon Arlaten: tarifs, pass, contacts et horaires"
    url: https://www.museonarlaten.fr/votre-visite-0/tarifs-contacts-horaires
  - title: "Office de tourisme d’Arles: musée Réattu"
    url: https://www.arlestourisme.com/fr/d%C3%A9tails.html?=Mus%C3%A9e+R%C3%A9attu&ident=5539256
  - title: "Ville d’Arles: musée Réattu"
    url: https://arles.fr/decouvrir/la-culture/le-musee-reattu/
  - title: "Parc naturel régional de Camargue: musée de la Camargue"
    url: https://www.parc-camargue.fr/musee-camargue.html
  - title: "Billetterie officielle d’Arles: billets et pass"
    url: https://arlestourisme.tickeasy.com/fr-FR/produits
  - title: "Ville d’Arles: horaires et conditions de visite du patrimoine"
    url: https://arles.fr/decouvrir/le-patrimoine/
affiliate:
  enabled: true
  type: travel
  destination: Arles
---

À Arles, dans les Bouches-du-Rhône, les enfants peuvent découvrir des arènes romaines, explorer des galeries souterraines et observer un bateau antique sorti du Rhône. Les musées ouvrent aussi une fenêtre sur les traditions provençales et les arts. Pour profiter de ces découvertes à petit budget, choisissez d’abord les lieux qui vous attirent: selon le programme, les réductions auxquelles les adultes ont droit et la date, un billet couplé, un pass ou une journée de gratuité sera le plus intéressant.

## Choisir les visites qui donneront envie aux enfants

<!-- article-image-body:03 -->

![Tenue de cocktail en boutis signée Christian Lacroix dans les collections du Museon Arlaten](/images/articles/2026/10/arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir-body-03.webp)

*Photo: [Finoskov](https://commons.wikimedia.org/wiki/File:Museon_Arlaten_int%C3%A9rieur197.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

<!-- article-image-body:02 -->

![Chaland gallo-romain Arles Rhône 3 exposé au musée départemental Arles antique](/images/articles/2026/10/arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir-body-02.webp)

*Photo: [Tylwyth Eldar](https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_Arles_-_Chaland_Arles_Rh%C3%B4ne_3_22.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

<!-- article-image-body:01 -->

![Galerie voûtée des cryptoportiques antiques sous le forum d'Arles](/images/articles/2026/10/arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir-body-01.webp)

*Photo: [Finoskov](https://commons.wikimedia.org/wiki/File:Arles,_cryptoportiques3.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

**Les arènes et le théâtre antique forment une première découverte de la ville romaine.** Dans l’amphithéâtre se déroulaient jeux et combats devant des milliers de spectateurs; le théâtre voisin accueillait les représentations théâtrales. Ces deux monuments présentés par l’office de tourisme permettent de commencer sans multiplier les déplacements.

**Les cryptoportiques séduiront les amateurs de souterrains.** Ces galeries soutenaient le forum, l’ancienne place publique romaine. L’accès se fait par l’hôtel de ville, place de la République. Attention, le site n’est pas accessible aux personnes à mobilité réduite, précise l’office de tourisme d’Arles. Gardez cette exploration comme une option selon les envies et les possibilités de chacun.

**Au musée départemental Arles antique, le chaland Arles-Rhône 3 donne une dimension concrète à l’histoire.** Ce bateau de transport fluvial est conservé au musée. Les outils familiaux proposés à l’accueil permettent d’adapter la visite: livre sensoriel pour les 1-3 ans, application Arkéofil sur tablette dès 6 ans et livret-jeux pour les 8-12 ans. Le prêt du livre et de la tablette est gratuit en échange d’une pièce d’identité; le livret est en accès libre. Les poussettes peuvent circuler dans tous les espaces du musée.

**Le Museon Arlaten fait découvrir la société provençale**, à travers les costumes et la vie quotidienne. Ses jeux sur écrans et son sac Muséojeux, à emprunter à l’accueil, donnent aux enfants une autre manière d’explorer les collections. Le musée autorise les poussettes et dispose d’une table à langer, comme l’indique sa page pratique pour les familles.

**Réattu convient aux enfants attirés par le dessin, la sculpture ou la photographie.** Ses collections comprennent notamment des œuvres de Picasso et des photographies. Le bâtiment comporte toutefois de nombreux escaliers: seules la cour de Saliers et l’espace du Musée Parallèle au rez-de-chaussée sont accessibles en fauteuil roulant, selon la Ville d’Arles.

Le **musée de la Camargue** se prête plutôt à une sortie hors du centre. Installé dans une ancienne bergerie au mas du Pont de Rousty, il raconte les relations entre les habitants et leur environnement. Il se trouve à 10 kilomètres d’Arles, sur la route des Saintes-Maries-de-la-Mer: réservez-le à une escapade vers la Camargue.

## Deux programmes sans marathon culturel

<!-- article-image-body:04 -->

![Colonnes et vestiges du théâtre antique romain d'Arles](/images/articles/2026/10/arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir-body-04.webp)

*Photo: [Tylwyth Eldar](https://commons.wikimedia.org/wiki/File:Arles_-_Th%C3%A9%C3%A2tre_antique_13.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:04 -->

**Pour une journée consacrée à l’Antiquité**, commencez par les arènes et le théâtre voisin, puis gardez l’après-midi pour Arles antique. Le musée se trouve sur la presqu’île du Cirque romain, à l’écart du centre ancien: ce déplacement constitue une étape à part entière.

**Pour un week-end plus varié**, visitez les arènes et le théâtre le samedi. Le dimanche, choisissez le Museon Arlaten pour la vie provençale ou Réattu pour les arts. Les cryptoportiques peuvent compléter le séjour si les enfants souhaitent encore explorer.

## Quel billet acheter selon votre famille?

Les billets et pass officiels sont individuels. L'office de tourisme d'Arles indique la gratuité des pass pour les moins de 18 ans accompagnés d'un parent: ne multipliez donc pas automatiquement le prix adulte par le nombre de membres de la famille.

- **Arènes et théâtre seulement:** le billet couplé coûte **11 € au plein tarif**, pour une visite de chaque site sur **deux jours consécutifs**.
- **Quatre monuments maximum, Réattu et un autre musée:** le **Pass Liberté coûte 15 € au plein tarif ou 13 € au tarif réduit**. Il comprend quatre monuments au choix parmi six, le musée Réattu et un musée au choix entre Arles antique, le Museon Arlaten et le musée de la Camargue. Il est valable **un mois**.
- **Six monuments et quatre musées:** le **Pass Avantage coûte 19 € au plein tarif ou 16 € au tarif réduit**. Il est valable **six mois** et permet, par exemple, de visiter Arles antique et le Museon Arlaten lors du même séjour ou d'un retour.

Les six monuments concernés sont les arènes, le théâtre antique, le cloître Saint-Trophime, les cryptoportiques, les Alyscamps et les thermes de Constantin. Chaque pass autorise **une seule visite par site**.

**Qui peut obtenir le tarif réduit?** La fiche de l'office de tourisme consacrée au Pass Avantage mentionne notamment les groupes d'au moins dix personnes, les étudiants, les titulaires d'une carte d'invalidité et leur accompagnateur ainsi que les enseignants en activité. La réduction n'est donc **pas automatique parce qu'on voyage avec des enfants**. Vérifiez à la billetterie les justificatifs exigés et les conditions applicables au pass choisi avant de calculer votre budget.

**Exemple: deux adultes et deux enfants de moins de 18 ans accompagnés, pour les arènes, le théâtre et Arles antique.** Avec deux adultes au plein tarif, deux Pass Liberté coûtent **30 €**, contre **38 €** pour deux billets couplés à 11 € et deux entrées au musée à 8 €: **8 € d'économie**. Si les deux adultes sont éligibles au tarif réduit du pass, les deux Pass Liberté reviennent à **26 €**: **12 € de moins** que cette comparaison aux billets pleins. Si un seul adulte a droit à la réduction, les deux pass coûtent **28 €**. Ces exemples supposent que les enfants bénéficient des gratuités applicables et que les billets individuels sont achetés au plein tarif; d'autres réductions individuelles peuvent modifier le résultat.

**Si Arles antique est gratuit le jour choisi**, le billet couplé à **11 € par adulte**, soit **22 € pour deux**, revient moins cher que deux Pass Liberté, même réduits, pour ce seul programme. Pour visiter plusieurs musées, comparez au contraire le Pass Avantage: **38 € pour deux adultes au plein tarif, 32 € si tous deux sont éligibles au tarif réduit**.

Pour le Museon Arlaten seul, le **billet famille à 12 €** est annoncé sur la page tarifaire du musée pour deux adultes accompagnés de **deux à sept enfants de moins de 18 ans**. Avec un seul enfant, faites confirmer son application à l’accueil: la page familiale indique «jusqu’à sept enfants» sans préciser de minimum.

## En automne et en hiver, choisir aussi selon le calendrier

De **novembre à février**, les monuments ouvrent de **10h30 à 16h30**, avec une dernière entrée à 16h. En octobre, mars et avril, ils ouvrent de 9h à 18h, avec une dernière entrée à 17h30. Ces horaires municipaux laissent moins de temps pour les visites extérieures en hiver.

Arles antique et le Museon Arlaten ouvrent de **9h30 à 18h**, avec une dernière entrée à 17h30. **Arles antique ferme le mardi, le Museon le lundi.** Réattu ferme aussi le lundi; du 2 novembre à fin février, ses horaires sont de 10h à 17h, avec une dernière entrée à 16h30.

**Arles antique, le Museon Arlaten et Réattu sont gratuits le premier dimanche du mois.** Mais cette gratuité ne l’emporte pas sur les fermetures: **le dimanche 1er novembre 2026, ces trois musées et les monuments étaient fermés**. Pour les prochains premiers dimanches du mois, vérifiez les fermetures exceptionnelles de chaque musée.

Pour le **11 novembre**, vérifiez les horaires de chaque établissement avant de partir: les calendriers des monuments et des musées sont distincts.

## Dormir dans le centre pour prolonger la sortie

Pour transformer la journée en week-end, les [appartements avec cuisine de La Résidence Arles Centre](https://www.booking.com/hotel/fr/la-residence-arles-centre.fr.html) permettent de séjourner dans le centre historique et de préparer des repas sur place. Comparez le coût total, parking compris, pour vos dates. La fiche indique un accès aux appartements par escalier: un point à prendre en compte avec une poussette.

Avec un bébé, notre [guide pour choisir entre hôtel et location](/articles/parentalite/premier-week-end-avec-un-bebe-hotel-ou-location-comment-choisir/) aide à préciser les besoins de couchage et de repas avant de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/bons-plans/saint-remy-de-provence-en-famille-glanum-musees-et-entrees-gratuites/ | Saint-Rémy-de-Provence en famille: Glanum, musées et entrées gratuites | bons-plans | Saint-Rémy-de-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/albi-en-famille-a-petit-budget-deux-programmes-entre-patrimoine-et-musee/ | Albi en famille à petit budget: deux programmes entre patrimoine et musée | bons-plans | Albi, Tarn, Occitanie
- /articles/bons-plans/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites/ | Pass Nantes en famille en 2026: tarifs, visites incluses et alternatives gratuites | bons-plans | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/bons-plans/visiter-falaise-en-famille-a-petit-prix-quel-pass-choisir/ | Visiter Falaise en famille à petit prix: quel pass choisir ? | bons-plans | Falaise, Calvados, Normandie
- /articles/bons-plans/bourges-en-famille-a-petit-budget-musees-cathedrale-et-jardins/ | Bourges en famille à petit budget: musées, cathédrale et jardins | bons-plans | Bourges, Cher, Centre-Val de Loire
- /articles/bons-plans/3-villes-francaises-pour-un-week-end-en-famille-a-petit-budget/ | 3 villes françaises pour un week-end en famille à petit budget | bons-plans
- /articles/bons-plans/troyes-en-famille-a-petit-budget-musees-gratuites-et-balades-dans-le-centre/ | Troyes en famille à petit budget: musées, gratuités et balades dans le centre | bons-plans | Troyes, Aube, Grand Est
- /articles/sorties/mucem-en-famille-billets-gratuites-et-conseils-pour-la-visite/ | Mucem Marseille en famille: tarifs 2026, billets et gratuités | sorties | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/bons-plans/arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir/ | Arles en famille à petit budget: quelles visites et quel pass choisir? | bons-plans | Arles, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/sorties/chateau-d-if-a-marseille-en-famille-bateau-visite-et-tarifs/ | Château d'If à Marseille en famille: bateau, visite et tarifs | sorties | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/voyages/pont-de-gau-en-famille-en-automne-et-en-hiver-flamants-roses-et-marais/ | Pont de Gau en famille en automne et en hiver: flamants roses et marais | voyages | Saintes-Maries-de-la-Mer, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/tous-en-sons-2026-a-marseille-quel-spectacle-choisir-selon-l-age-des-enfants/ | Tous en Sons ! 2026 à Marseille: spectacles enfants, âges et tarifs | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/sorties/carrieres-des-lumieres-avec-des-enfants-choisir-son-spectacle-et-preparer-la-visite/ | Carrières des Lumières avec des enfants: choisir son spectacle et préparer la visite | sorties | Les Baux-de-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges/ | Noël à Aix-en-Provence 2026 en famille: marchés, santons et manèges | evenements | Aix-en-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | Foire aux santons de Marseille 2026: horaires et visite en famille | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/parentalite/maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles/ | Maison des Parents aux Pennes-Mirabeau: ateliers gratuits et accueil des familles | parentalite | Les Pennes-Mirabeau, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | Fête de la mer 2026 à Marseille avec des enfants: quelle escale choisir? | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/mucem-a-la-toussaint-2026-quelle-activite-en-ribambelle-choisir-selon-l-age/ | Mucem à la Toussaint 2026: le programme En Ribambelle avec des enfants | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/bons-plans/n-gouja-en-famille-profiter-de-la-plage-a-petit-budget/ | N’Gouja en famille: profiter de la plage à petit budget | bons-plans | Kani-Kéli, Mayotte, Mayotte
- /articles/bons-plans/passeport-des-musees-04-visiter-en-famille-a-prix-reduit/ | Passeport des musées 04: visiter en famille à prix réduit | bons-plans | Alpes-de-Haute-Provence, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/langres-en-famille-deux-musees-gratuits-le-premier-dimanche-du-mois/ | Langres en famille: deux musées gratuits le premier dimanche du mois | bons-plans | Langres, Haute-Marne, Grand Est
- /articles/bons-plans/le-mont-saint-michel-en-famille-a-petit-prix-en-automne-et-en-hiver/ | Le Mont-Saint-Michel en famille à petit prix en automne et en hiver | bons-plans | Le Mont-Saint-Michel, Manche, Normandie

### Historique Radar lié

- refresh | /articles/bons-plans/arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir/ | 2026-11-07T18:35:07.024Z
- opportunity | /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | 2026-10-06T16:58:51.946Z
- opportunity | /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | 2026-10-23T15:29:55.218Z
- refresh | /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | 2026-11-18T02:27:50.959Z
- refresh | /articles/parentalite/maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles/ | 2026-11-09T20:29:50.656Z
- opportunity | /articles/evenements/mucem-a-la-toussaint-2026-quelle-activite-en-ribambelle-choisir-selon-l-age/ | 2026-10-04T10:54:39.216Z
- opportunity | /articles/evenements/noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges/ | 2026-10-25T15:16:03.590Z
- refresh | /articles/bons-plans/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites/ | 2026-11-11T11:27:51.931Z
- opportunity | /articles/evenements/tous-en-sons-2026-a-marseille-quel-spectacle-choisir-selon-l-age-des-enfants/ | 2026-10-31T13:29:50.851Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
