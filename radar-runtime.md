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
title: "Noël 2026 au château royal de Blois: décors, spectacles et tarifs en famille"
subtitle: "Forêts Intérieures, Antonietta, visites guidées et Maison de la Magie: les dates et billets à distinguer"
summary: Du 28 novembre 2026 au 10 janvier 2027, le château royal de Blois accueille des décors de Noël, un spectacle dès 7 ans et des visites pour les familles. Tarifs, créneaux, réservations et conseils avec de jeunes enfants.
category: evenements
location:
  city: Blois
  department: Loir-et-Cher
  region: Centre-Val de Loire
image:
  src: /images/articles/2026/10/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age.webp
  alt: Cour du château royal de Blois sur une photographie historique de Jean-Auguste Brutails, sans décorations de Noël
sources:
  - title: Château royal de Blois - Noël 2026-2027, spectacles et visites
    url: https://www.chateaudeblois.fr/EvenementChateau/11893/2159-fiche-evenement.htm
  - title: Château royal de Blois - Horaires, tarifs et accueil des familles
    url: https://www.chateaudeblois.fr/2027-preparer-sa-visite.htm
  - title: Maison de la Magie - Horaires, spectacles et tarifs de Noël 2026
    url: https://www.maisondelamagie.fr/1060-contact-information.htm
eventEndsAt: 2027-01-10
topic:
  key: evenements|blois|noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age|2026
  keywords:
    - Noël château de Blois 2026
    - Forêts Intérieures château royal de Blois
    - Antonietta ou la forêt intérieure
    - visite familiale Noël Blois tarifs
slug: noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age
status: published
publishedAt: 2026-10-27T22:28:21.257Z
updatedAt: null
readingTime: 6
affiliate:
  enabled: true
  type: travel
  destination: Blois
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/index.md
  targetSha: 7b73db207696ef18dde2c5bd2e585e78049089df
  targetUrl: /articles/evenements/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/
  decision: Choisir le billet et les activités de Noël adaptés aux âges et au budget familial, en tenant compte des réductions réellement accessibles.
  affiliationPotential: Conserver le billet château Tiqets et l'hébergement Booking.com déjà intégrés, sans créer de lien officiel d'achat concurrent.
  gsc:
    retrievedAt: 2026-11-18T00:34:26+01:00
    dataThrough: 2026-11-15
    signal: needs_query_check
    basis: "Visibilité récente : 22 impressions sur trois jours, puis 7 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-28
    peakEnd: 2026-10-30
    recentStart: 2026-11-13
    recentEnd: 2026-11-15
    peakImpressions: 22
    recentImpressions: 7
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Noël château de Blois 2026
      - Forêts Intérieures château royal de Blois
      - Antonietta ou la forêt intérieure
      - visite familiale Noël Blois tarifs
---

## Mission retenue
Actualiser le guide Noël 2026 au château royal de Blois, déjà très complet, en ajoutant les économies et aides pratiques vérifiées qui manquent.

## Pourquoi cette mission
Le snapshot signale 22 puis 7 impressions sur les périodes comparées, sans cause SEO établie. La page officielle du château confirme indépendamment des informations utiles absentes de l'article: tarif réduit pour bénéficiaires de minima sociaux et voyageurs Rémi, parcours famille sur audioguide. Ne pas attribuer la baisse à ces lacunes.

## Décision du lecteur
Savoir quel billet acheter et combien payer réellement selon les âges, les justificatifs et les activités choisies.

## Faits à traiter
- Préciser que le tarif réduit de 12 € concerne aussi les bénéficiaires de minima sociaux, étudiants, demandeurs d'emploi, enseignants et adultes de familles nombreuses sur justificatif; mentionner le tarif Rémi avec titre validé depuis moins de 24 h ou Pass Rémi Découverte valide, réduction obtenue à la billetterie.
- Indiquer le parcours famille sur audioguide en français et anglais, supplément de 3 €, distinct de l'HistoPad inclus dans les entrées payantes; vérifier la coexistence et éviter de les confondre.
- Préserver intégralement les tarifs et calculs familiaux, les décors, dates, spectacles, âges, réservations, horaires contradictoires du 3 janvier (ne pas trancher sans preuve), accessibilité, poussettes, trois photos avec crédits/licences, liens internes et partenaires.
- Vérifier si les conditions de réductions s'appliquent aux billets combinés et aux réservations en ligne avant toute recommandation.

## Sources de départ
- https://www.chateaudeblois.fr/2027-preparer-sa-visite.htm
- https://www.chateaudeblois.fr/EvenementChateau/11893/2159-fiche-evenement.htm

## Affiliation
Conserver Tiqets pour l'entrée classique et Booking.com pour le séjour; ne pas promettre les tarifs réduits sur une plateforme partenaire sans confirmation.

## Continuations internes
- Conserver le lien vers le guide Blois sans voiture pour les transports et les excursions.
- Conserver le renvoi vers Noël à Chambord plutôt que dupliquer son programme.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/index.md

---
title: "Noël 2026 au château royal de Blois: décors, spectacles et tarifs en famille"
subtitle: "Forêts Intérieures, Antonietta, visites guidées et Maison de la Magie: les dates et billets à distinguer"
summary: Du 28 novembre 2026 au 10 janvier 2027, le château royal de Blois accueille des décors de Noël, un spectacle dès 7 ans et des visites pour les familles. Tarifs, créneaux, réservations et conseils avec de jeunes enfants.
category: evenements
location:
  city: Blois
  department: Loir-et-Cher
  region: Centre-Val de Loire
image:
  src: "/images/articles/2026/10/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age.webp"
  alt: "Cour du château royal de Blois sur une photographie historique de Jean-Auguste Brutails, sans décorations de Noël"
sources:
  - title: Château royal de Blois - Noël 2026-2027, spectacles et visites
    url: https://www.chateaudeblois.fr/EvenementChateau/11893/2159-fiche-evenement.htm
  - title: Château royal de Blois - Horaires, tarifs et accueil des familles
    url: https://www.chateaudeblois.fr/2027-preparer-sa-visite.htm
  - title: Maison de la Magie - Horaires, spectacles et tarifs de Noël 2026
    url: https://www.maisondelamagie.fr/1060-contact-information.htm
eventEndsAt: 2027-01-10
topic:
  key: evenements|blois|noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age|2026
  keywords:
    - Noël château de Blois 2026
    - Forêts Intérieures château royal de Blois
    - Antonietta ou la forêt intérieure
    - visite familiale Noël Blois tarifs
slug: noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age
status: published
publishedAt: 2026-10-27T22:28:21.257Z
updatedAt: null
readingTime: 6
affiliate:
  enabled: true
  type: travel
  destination: Blois
---

Du **28 novembre 2026 au 10 janvier 2027**, le château royal de Blois présente « Forêts Intérieures », des décors de Noël compris dans l'entrée classique. Pendant les vacances, les familles peuvent aussi choisir le spectacle « Antonietta » dès 7 ans, une visite guidée dès 6 ans ou une soirée dès 8 ans. Les dates, les suppléments et les réservations ne sont pas les mêmes.

## Décors de Noël: la visite libre et son prix

<!-- article-image-body:01 -->

![Salle des États du château royal de Blois, photographiée hors décorations de Noël](/images/articles/2026/10/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age-body-01.webp)

*Photo: [Christophe.Finot](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Blois_09.jpg) - [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Les créations végétales de « Forêts Intérieures » prennent place dans les salles historiques: arbres imaginaires, feuillages et sapins revisités. Aucun billet spécial n'est nécessaire pour voir ces décors pendant la visite habituelle.

**Tarifs 2026 du château: 16 € par adulte, 12 € au tarif réduit sur justificatif, 8 € de 6 à 17 ans et gratuit avant 6 ans.** Pour deux adultes au plein tarif et deux enfants de 6 à 17 ans, le total est de **48 €**. L'HistoPad est compris dans les entrées payantes sous réserve de disponibilité; il coûte 4 € avec une entrée gratuite. Prévoyez environ 1 h 30 à 2 h selon le rythme des enfants.

Le [billet d'entrée au château royal de Blois sur Tiqets](https://www.tiqets.com/fr/activites-attractions-blois-c67107/billets-pour-chateau-royal-de-blois-entree-spectacle-son-et-lumiere-en-option-p1008168/) permet de réserver la visite classique. **Il ne comprend pas les visites guidées.** Comparez le tarif final avant de payer et n'ajoutez pas l'option « Son et Lumière »: elle concerne un autre spectacle, hors programme de Noël.

## Antonietta ou visite familiale: deux rendez-vous à 14 h 30

**« Antonietta ou la forêt intérieure »** est un spectacle poétique et musical inspiré de *La Belle et la Bête*. Il dure **30 minutes**, convient **dès 7 ans**, est **inclus dans l'entrée** et ne demande **aucune réservation**. Il est annoncé **du 19 décembre 2026 au 3 janvier 2027 à 14 h 30 et 16 h**, sauf les 25 décembre et 1er janvier.

**« À toi la vie de château ! »** est une visite guidée en français sur la vie des rois et des reines, **dès 6 ans** et pendant **1 h 15**. Elle est prévue **du 19 décembre au 2 janvier à 14 h 30**, sauf les 25 décembre et 1er janvier. Les enfants ayant leur entrée ne paient pas de supplément; les adultes ajoutent **5 € chacun**. Le budget est donc de **58 €** pour deux adultes au plein tarif et deux enfants de 6 à 17 ans. **Réservation conseillée au 02 54 90 33 33**, dans la limite des places.

Les deux activités se chevauchent à **14 h 30**. La visite familiale se terminant théoriquement à 15 h 45, assister ensuite au spectacle de 16 h peut être envisageable, mais dépend de la circulation entre les salles et des places disponibles: demandez confirmation à l'accueil.

## Visites nocturnes et insolites dès 8 ans

<!-- article-image-body:02 -->

![Escalier intérieur de l'aile Gaston d'Orléans du château de Blois, hors animation de Noël](/images/articles/2026/10/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age-body-02.webp)

*Photo: [Fab5669](https://commons.wikimedia.org/wiki/File:Blois_-_ch%C3%A2teau_royal,_aile_Gaston_d%27Orl%C3%A9ans,_int%C3%A9rieur_(04).jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

**« Murmures nocturnes de Noël »** propose une déambulation à la torche dans les appartements royaux et des espaces habituellement fermés. Les séances durent **2 heures**, les **21, 23, 28 et 30 décembre à 18 h 30**. Tarifs: **22 € par adulte, 16 € au tarif réduit et 12 € pour les 8-17 ans**. Pour deux adultes et deux enfants de 8 à 17 ans, comptez **68 €** pour cette visite. **Réservation obligatoire**, avec ouverture annoncée le **4 novembre 2026** sur la billetterie du château; ce n'est pas un supplément à ajouter au billet de journée.

La **visite insolite** explore tours, combles et passages étroits **les dimanches de décembre à 10 h 30**. Elle dure **2 heures**, est réservée aux visiteurs **d'au moins 8 ans** et coûte, en plus de l'entrée, **7 € par adulte** et **4 € par enfant de 8 à 17 ans**. Réservation conseillée au **02 54 90 33 33**. Le parcours n'est pas adapté aux personnes à mobilité réduite, déficientes visuelles ou sujettes au vertige.

Deux concerts **Candlelight**, les **5 et 19 décembre**, font aussi partie du programme. Ils nécessitent une réservation séparée; consultez le programme et les conditions d'âge avant de choisir une séance.

## Château et Maison de la Magie: le combiné

<!-- article-image-body:03 -->

![Façade de la Maison de la Magie à Blois, photographiée en août 2025](/images/articles/2026/10/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age-body-03.webp)

*Photo: [Pymouss](https://commons.wikimedia.org/wiki/File:Blois_-_maison_de_la_Magie_20250820.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

En face du château, la Maison de la Magie ouvre **du 19 décembre 2026 au 3 janvier 2027**, sauf les **25 décembre et 1er janvier**, de **10 h à 12 h 30 et de 14 h à 18 h 30**. La visite dure environ **1 h 30 à 2 h** et comprend un spectacle de 30 minutes dans la limite des places disponibles.

Pendant ces vacances, le spectacle **« Plume »** est annoncé à **11 h 15, 14 h 45, 16 h et 17 h 15**, sauf les **24 et 31 décembre et le 3 janvier**, où la séance de **17 h 15** n'a pas lieu. Les poussettes sont autorisées dans le parcours du musée, **mais pas dans la salle de spectacle**; un espace de stationnement se trouve devant le théâtre.

Le **billet combiné château + Maison de la Magie** coûte **24 € par adulte, 19 € au tarif réduit, 12 € de 6 à 17 ans**, et reste gratuit avant 6 ans. Soit **72 €** pour deux adultes au plein tarif et deux enfants de 6 à 17 ans, contre **96 €** pour les deux entrées achetées séparément. Le château annonce l'ouverture des réservations le **2 novembre 2026**. Ce combiné n'est intéressant que si vous visitez réellement les deux sites pendant leurs jours d'ouverture.

## Horaires, accès et services pour les familles

Le château se trouve **6 place du Château, 41000 Blois**, à **8 minutes à pied de la gare Blois-Chambord** selon le monument. Pour organiser un séjour sans voiture et les déplacements vers les autres châteaux, consultez notre [guide de Blois, Chambord et Cheverny sans voiture](https://www.fam-space.fr/articles/voyages/blois-sans-voiture-en-2026-3-jours-pour-chambord-cheverny-et-le-centre-ville/).

**Horaires de la période de Noël:**
- Du **28 novembre au 18 décembre**: **10 h-17 h**.
- Du **19 décembre au 2 janvier**: **10 h-18 h**, avec fermeture à **17 h les 24 et 31 décembre**.
- Du **3 au 10 janvier**: **10 h-17 h** selon la page officielle de Noël.
- **Fermé les 25 décembre et 1er janvier**; dernière entrée **30 minutes avant la fermeture**.

**Attention au 3 janvier:** la page consacrée à Noël indique une fermeture à **17 h**, mais la page générale des horaires mentionne **18 h** pour ce jour. Cette divergence officielle n'est pas résolue: vérifiez directement auprès du château avant une visite en fin de journée.

**Poussettes et bébés:** les poussettes sont interdites sur le circuit du château. Un garage gratuit **non surveillé** est disponible sous la galerie. Les porte-bébés dorsaux à armature métallique sont interdits. Le château dispose d'un **espace bébé** et prête un **chauffe-biberon**; la présence d'une table à langer n'est pas confirmée.

**Accessibilité:** la cour, la chapelle, certaines salles du rez-de-chaussée et les extérieurs sont accessibles en fauteuil, mais pas l'ensemble des étages et visites. Le château prévoit la gratuité pour les visiteurs en situation de handicap et leur accompagnateur, sur justificatif. Demandez à l'accueil quelles salles décorées sont effectivement accessibles.

**Repas et sacs:** le billet de journée permet de sortir déjeuner dans le centre puis de revenir. Seuls les petits sacs portés devant sont admis dans les salles; les bagages volumineux sont refusés.

## Dormir près du château

Pour prolonger la visite sur un week-end, [l'appartement Côté Château sur Booking.com](https://www.booking.com/hotel/fr/cote-chateau-blois.fr.html) se situe à environ **400 mètres du château**. Il dispose de **deux chambres**, d'une cuisine avec **micro-ondes** et propose sur demande un **lit parapluie** et une **chaise haute**. Point important avec des enfants: **l'appartement est au troisième étage sans ascenseur**. Vérifiez le tarif, la capacité exacte et les disponibilités à vos dates; aucun prix pour Noël n'est confirmé.

Pour une autre journée de fêtes dans le Loir-et-Cher, notre article sur [Noël 2026 à Chambord en famille](https://www.fam-space.fr/articles/evenements/noel-a-chambord-2026-avec-des-enfants-quand-venir-et-que-prevoir/) présente un programme distinct.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | Noël au château de Cheverny 2026: billets, mapping et animations en famille | evenements | Cheverny, Loir-et-Cher, Centre-Val de Loire
- /articles/sorties/chateau-de-chambord-en-famille-tarifs-2026-activites-et-conseils-de-visite/ | Château de Chambord en famille: tarifs 2026, activités et conseils de visite | sorties | Chambord, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | Noël à Chenonceau 2026: décors, nocturnes et tarifs en famille | evenements | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | Noël au château d'Amboise 2026: animations, nocturnes et tarifs en famille | evenements | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-2026-au-puy-du-fou-en-famille-spectacles-et-visite-en-hiver/ | Noël 2026 au Puy du Fou en famille: spectacles et visite en hiver | evenements | Les Epesses, Vendée, Pays de la Loire
- /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | Noël 2026 à Chantilly: Le Noël oublié, billets et séances en famille | evenements | Chantilly, Oise, Hauts-de-France
- /articles/evenements/noel-2026-au-chateau-de-grignan-dates-tarifs-et-visite-en-famille/ | Noël 2026 au château de Grignan: dates, tarifs et visite en famille | evenements | Grignan, Drôme, Auvergne-Rhône-Alpes
- /articles/evenements/noel-au-chateau-de-valencay-ce-qu-il-faut-savoir-avant-d-y-aller/ | Noël au Château de Valençay: ce qu'il faut savoir avant d'y aller | evenements | Valençay, Indre, Centre-Val de Loire
- /articles/evenements/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/ | Noël 2026 au château royal de Blois: décors, spectacles et tarifs en famille | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | bd BOUM 2026 à Blois en famille: ateliers, expositions et cinéma | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/blois-sans-voiture-en-2026-3-jours-pour-chambord-cheverny-et-le-centre-ville/ | Blois sans voiture en 2026: 3 jours pour Chambord, Cheverny et le centre-ville | voyages | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/parentalite/laep-dans-le-loir-et-cher-ou-rencontrer-d-autres-parents-avec-son-tout-petit/ | LAEP dans le Loir-et-Cher: où rencontrer d'autres parents avec son tout-petit ? | parentalite | Loir-et-Cher, Centre-Val de Loire
- /articles/cuisine/ateliers-de-cuisine-en-famille-dans-le-loir-et-cher-chocolat-patisserie-ou-legumes/ | Ateliers de cuisine en famille dans le Loir-et-Cher: chocolat, pâtisserie ou légumes ? | cuisine | Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | MonstroZoo 2026-2027 à Beauval: parcours inclus, visite guidée et tarifs | evenements | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/center-parcs-les-hauts-de-bruyeres-en-famille-quel-cottage-choisir-apres-la-renovation/ | Center Parcs Les Hauts de Bruyères en famille: quel cottage choisir après la rénovation? | voyages | Chaumont-sur-Tharonne, Loir-et-Cher, Centre-Val de Loire
- /articles/vie-pratique/transport-scolaire-remi-41-que-faire-apres-la-rentree/ | Transport scolaire Rémi 41: que faire après la rentrée ? | vie-pratique | Romorantin-Lanthenay, Loir-et-Cher, Centre-Val de Loire
- /articles/activites/balade-en-bateau-a-saint-dye-sur-loire-journee-pique-nique-ou-crepuscule/ | Balade en bateau à Saint-Dyé-sur-Loire: journée, pique-nique ou crépuscule ? | activites | Saint-Dyé-sur-Loire, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/noel-a-chambord-2026-avec-des-enfants-quand-venir-et-que-prevoir/ | Noël à Chambord 2026 avec des enfants: quand venir et que prévoir | evenements | Chambord, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/musee-maurice-denis-en-famille-decouvrir-les-nabis-a-saint-germain-en-laye/ | Musée Maurice Denis en famille: découvrir les Nabis à Saint-Germain-en-Laye | evenements | Saint-Germain-en-Laye, Yvelines, Île-de-France
- /articles/evenements/carnaval-de-guadeloupe-2027-preparer-une-premiere-sortie-avec-ses-enfants/ | Carnaval de Guadeloupe 2027: préparer une première sortie avec ses enfants | evenements | Guadeloupe
- /articles/evenements/niepce-et-apres-une-exposition-photo-a-decouvrir-en-famille-a-chalon-sur-saone/ | Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône | evenements | Chalon-sur-Saône, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | 2026-10-18T19:49:09.191Z
- opportunity | /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | 2026-10-22T15:49:20.816Z
- refresh | /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | 2026-11-15T21:32:34.113Z
- opportunity | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-10-24T12:31:27.784Z
- refresh | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-11-13T22:32:33.388Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | 2026-10-26T21:31:06.119Z
- refresh | /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | 2026-11-12T18:32:15.897Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | 2026-10-23T19:58:30.214Z
- refresh | /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | 2026-11-13T19:31:25.370Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | 2026-10-24T06:28:53.730Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
