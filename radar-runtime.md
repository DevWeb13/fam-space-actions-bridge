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
title: "Grand Noël 2026 à Vaux-le-Vicomte en famille: billets, offre enfant et animations"
subtitle: "Du 14 novembre au 3 janvier: quel jour venir, combien payer et comment profiter des illuminations?"
summary: "Grand Noël 2026-2027 à Vaux-le-Vicomte: dates, offre enfant gratuit les deux premiers week-ends, prix des billets, activités incluses, patinoire, navette et conseils avec des enfants."
category: evenements
location:
  city: Maincy
  department: Seine-et-Marne
  region: Île-de-France
image:
  src: /images/articles/2026/10/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget.webp
  alt: Château de Vaux-le-Vicomte photographié en septembre 2010, sans les décorations du Grand Noël 2026.
sources:
  - title: Château de Vaux-le-Vicomte - Le Grand Noël 2026, programme, horaires et tarifs
    url: https://vaux-le-vicomte.com/event/le-grand-noel-de-vaux-le-vicomte/
  - title: Château de Vaux-le-Vicomte - Offre enfant gratuit les deux premiers week-ends, conditions
    url: https://vaux-le-vicomte.com/en/news/grand-noel-at-vaux-le-vicomte-2026-free-child-ticket/
  - title: Château de Vaux-le-Vicomte - Informations pratiques, navette Grand Noël et accueil des familles
    url: https://vaux-le-vicomte.com/preparer-sa-visite-au-chateau-de-vaux-le-vicomte/informations-pratiques/
  - title: Office de tourisme Melun Val de Seine - Le Grand Noël
    url: https://www.melunvaldeseine-tourisme.com/fete-et-manifestation/le-grand-noel-au-chateau-de-vaux-le-vicomte
  - title: ibis Styles Melun Rubelles - Chambres et suites
    url: https://www.ibis-styles-melun-rubelles.com/chambres-et-suites
eventEndsAt: 2027-01-03
topic:
  key: evenements|maincy|grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget|2026
  keywords:
    - Grand Noël Vaux-le-Vicomte 2026 famille
    - Vaux-le-Vicomte Noël 2026 billet enfant offert
    - Grand Noël Maincy patinoire Odyssée Nordique
slug: grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget
status: published
publishedAt: 2026-10-20T22:29:05.320Z
updatedAt: null
readingTime: 7
affiliate:
  enabled: true
  type: travel
  destination: Maincy
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/index.md
  targetSha: 28ed76842cfc5b2de88bde6e74673c1cb00bccf8
  targetUrl: /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/
  decision: Permettre à une famille de comparer précisément jardin seul, château et jardin, offre enfant des 14, 15, 21 et 22 novembre, et transport retour, sans payer une prestation inaccessible ou manquer la projection.
  affiliationPotential: Conserver l'hébergement Booking.com à Rubelles déjà présent; aucune billetterie partenaire de l'événement confirmée.
  gsc:
    retrievedAt: 2026-11-13T03:30:25+01:00
    dataThrough: 2026-11-10
    signal: uncertain
    basis: "Visibilité récente : 235 impressions sur trois jours, puis 18 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-22
    peakEnd: 2026-10-24
    recentStart: 2026-11-08
    recentEnd: 2026-11-10
    peakImpressions: 235
    recentImpressions: 18
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - vaux-le-vicomte noël tarif 2026
      - vaux le vicomte noel 2026
      - noel a vaux le vicomte 2026
      - noel vaux le vicomte 2026
      - vaux-le-vicomte noël 2026
---

## Mission retenue
Actualisation ciblée du Grand Noël 2026 à Vaux-le-Vicomte, surtout pour les familles qui hésitent entre jardin seul et château + jardin, et pour celles qui viennent sans voiture.

## Pourquoi cette mission
Le snapshot GSC montre 235 impressions sur trois jours au pic puis 18 sur les trois derniers jours consolidés, sans cause SEO établie. L'événement ouvre le 14 novembre et l'offre enfant concerne les deux premiers week-ends. La page explique déjà bien les tarifs château + jardin mais ne chiffre pas le budget familial du jardin seul ni le gain réel selon les compositions; cette comparaison est utile indépendamment de la baisse d'impressions. Ne pas prétendre corriger une perte de classement.

## Décision du lecteur
Choisir une formule et une date compatibles avec l'âge des enfants, la mobilité de la famille et le trajet retour, en comprenant les prestations incluses et le coût total.

## Faits à traiter
- Vérifier la portée exacte du tarif « jardin uniquement » à 19 € en semaine et à partir de 20 € les week-ends: confirmer si ce tarif s'applique aussi aux enfants avant de publier des simulations chiffrées. Comparer les billets jardin seul et château + jardin avec la promotion 2 adultes + 1 enfant à 55,80 € les 14, 15, 21 et 22 novembre, sans supposer que la promotion s'applique au jardin seul.
- Distinguer le jardin accessible en fauteuil du château avec environ 30 marches et de l'Odyssée Nordique inaccessible aux fauteuils/poussettes. Vérifier que la formule jardin seul permet bien les illuminations, la projection et les animations extérieures.
- Conserver les horaires précis des projections et les avertissements sur la navette Paris à 19 h (18 h les 24 et 31 décembre); ne pas recycler les horaires de navette Melun d'un PDF de 2024.
- Préserver les informations poussette, tables à langer, micro-ondes, restauration, stationnement, les deux images du corps avec leurs licences/crédits, les sources, le maillage interne et le lien Booking.com. Ne pas allonger artificiellement l'article.

## Sources de départ
- https://vaux-le-vicomte.com/event/le-grand-noel-de-vaux-le-vicomte/
- https://vaux-le-vicomte.com/en/news/grand-noel-at-vaux-le-vicomte-2026-free-child-ticket/
- https://vaux-le-vicomte.com/preparer-ma-visite/acces-transports/

## Affiliation
Conserver le lien existant vers l'ibis Styles Melun à Rubelles sur Booking.com avec les réserves sur couchages, prix et disponibilité. Ne pas inventer de billetterie partenaire.

## Continuations internes
- Conserver le lien vers le guide Parrot World pour une autre sortie en Seine-et-Marne.
- Ne pas fusionner avec l'article Toussaint à Vaux-le-Vicomte: événement distinct.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/index.md

---
title: "Grand Noël 2026 à Vaux-le-Vicomte en famille: billets, offre enfant et animations"
subtitle: "Du 14 novembre au 3 janvier: quel jour venir, combien payer et comment profiter des illuminations?"
summary: "Grand Noël 2026-2027 à Vaux-le-Vicomte: dates, offre enfant gratuit les deux premiers week-ends, prix des billets, activités incluses, patinoire, navette et conseils avec des enfants."
category: evenements
location:
  city: Maincy
  department: Seine-et-Marne
  region: Île-de-France
image:
  src: "/images/articles/2026/10/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget.webp"
  alt: "Château de Vaux-le-Vicomte photographié en septembre 2010, sans les décorations du Grand Noël 2026."
sources:
  - title: Château de Vaux-le-Vicomte - Le Grand Noël 2026, programme, horaires et tarifs
    url: https://vaux-le-vicomte.com/event/le-grand-noel-de-vaux-le-vicomte/
  - title: Château de Vaux-le-Vicomte - Offre enfant gratuit les deux premiers week-ends, conditions
    url: https://vaux-le-vicomte.com/en/news/grand-noel-at-vaux-le-vicomte-2026-free-child-ticket/
  - title: Château de Vaux-le-Vicomte - Informations pratiques, navette Grand Noël et accueil des familles
    url: https://vaux-le-vicomte.com/preparer-sa-visite-au-chateau-de-vaux-le-vicomte/informations-pratiques/
  - title: Office de tourisme Melun Val de Seine - Le Grand Noël
    url: https://www.melunvaldeseine-tourisme.com/fete-et-manifestation/le-grand-noel-au-chateau-de-vaux-le-vicomte
  - title: ibis Styles Melun Rubelles - Chambres et suites
    url: https://www.ibis-styles-melun-rubelles.com/chambres-et-suites
eventEndsAt: 2027-01-03
topic:
  key: evenements|maincy|grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget|2026
  keywords:
    - Grand Noël Vaux-le-Vicomte 2026 famille
    - Vaux-le-Vicomte Noël 2026 billet enfant offert
    - Grand Noël Maincy patinoire Odyssée Nordique
slug: grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget
status: published
publishedAt: 2026-10-20T22:29:05.320Z
updatedAt: null
readingTime: 7
affiliate:
  enabled: true
  type: travel
  destination: Maincy
---

**Du 14 novembre 2026 au 3 janvier 2027**, le château de Vaux-le-Vicomte, à Maincy en Seine-et-Marne, organise son **Grand Noël** autour d'un voyage à travers le monde: salons décorés, automates, jardin illuminé et projection sur la façade. Comptez **environ quatre heures, voire davantage**, pour en profiter en famille.

Pour choisir votre date, deux points comptent particulièrement: **un billet enfant est offert sous conditions les 14, 15, 21 et 22 novembre**, et **la patinoire comme le spectacle immersif sont payants en plus de l'entrée**. La réservation en ligne est obligatoire.

## L'offre enfant gratuit: pour quelles familles?

Les **14, 15, 21 et 22 novembre 2026**, l'offre de lancement permet d'acheter un billet **« 2 adultes + 1 enfant de 3 à 17 ans » à 55,80 €**, soit le prix de deux entrées adultes. Elle concerne uniquement la formule **château et jardin**, avec deux adultes au plein tarif; elle ne s'applique ni aux billets réduits ni aux entrées jardin seul.

Les trois personnes doivent venir ensemble et le billet doit être choisi **en ligne**, pour l'une des quatre dates. Avec **deux enfants de 3 à 17 ans**, il faut ajouter un billet enfant au panier. Les moins de 3 ans entrent gratuitement, mais **un billet gratuit doit tout de même être réservé** pour eux.

À titre de comparaison, sur la base des **tarifs d'entrée de week-end annoncés à partir de 27,90 € par adulte et 22,90 € par enfant**, une famille de deux adultes et deux enfants paierait **101,60 € sans promotion**, contre **78,70 € avec l'offre et un second billet enfant au tarif de base**. L'économie théorique est donc de **22,90 €**, sous réserve des prix effectivement proposés pour votre date et votre panier. Les changements de date de l'offre sont limités aux quatre dates promotionnelles et doivent être demandés au plus tard **cinq jours avant la date initiale**.

## Quels billets et quel budget en dehors de l'offre?

Pour le Grand Noël, le billet **château et jardin** coûte **25,90 € par adulte en semaine** et **à partir de 27,90 € les week-ends ou pendant les vacances scolaires**. Pour les **3-17 ans**, il coûte **20,90 € en semaine**, ou **à partir de 22,90 €** sur les périodes les plus demandées. L'entrée est gratuite avant 3 ans.

Pour **deux adultes et deux enfants payants**, cela représente **93,60 € en semaine** aux tarifs affichés, ou **au moins 101,60 €** en week-end et vacances, sans activité supplémentaire. Vérifiez le total à la réservation: les prix de week-end sont indiqués **« à partir de »**.

Un billet **jardin seul** est également proposé à **19 € en semaine** ou **à partir de 20 €** en week-end et vacances. Il permet de profiter des animations du jardin et de la projection, **mais pas des salons décorés à l'intérieur du château**. Le tarif famille habituel des visites hors événement ne doit pas être utilisé pour calculer le budget du Grand Noël.

## Que comprend l'entrée avec des enfants?

<!-- article-image-body:01 -->

![Grand Salon du château de Vaux-le-Vicomte photographié en 2017, sans les décors du Grand Noël 2026](/images/articles/2026/10/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget-body-01.webp)

*Photo: [Zairon](https://commons.wikimedia.org/wiki/File:Maincy_Ch%C3%A2teau_de_Vaux-le-Vicomte_Innen_Grand_Salon_7.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Avec le billet château et jardin, la famille traverse les salons transformés en escales du monde entier, avec lumières et automates. La visite intérieure dure **environ une heure** et son **créneau réservé doit être respecté**.

Dans le jardin, plusieurs expériences sont **sans supplément**: la chasse au trésor du **« passeport du petit voyageur » dès 3 ans** (10h30-18h30), la **veillée gourmande autour des guimauves** (12h-18h30), le **bosquet des vœux** (10h30-18h30) et la **fabrique postale solidaire**, où l'on peut écrire à des personnes isolées.

La **projection monumentale** sur la façade dure environ **huit minutes**. Le château annonce des séances à **18h, 18h30 et 19h**, avec une **séance unique à 17h40 les 24 et 31 décembre**. Les soirées prolongées jusqu'à 21h proposent des projections supplémentaires: contrôlez leur horaire précis pour la date retenue.

## Patinoire ou spectacle immersif: quels suppléments?

La **patinoire en glace** est annoncée de **11h à 19h30**, sous réserve des journées où le domaine ferme plus tôt. Son tarif est de **5 € par personne**, à payer **sur place**; il n'y a pas de réservation en ligne pour cette activité. Les enfants peuvent utiliser des aides à la glisse, les gants sont fortement recommandés et **les mineurs doivent être accompagnés d'un adulte**. Quatre personnes qui patinent ajoutent ainsi **20 €** au budget familial.

**« L'Odyssée Nordique »** est un spectacle déambulatoire **dès 6 ans**, d'environ **une heure debout**, dans le château. Il exige une **réservation en ligne séparée**. Le château affiche **14,90 € à partir de 13 ans** et **10,90 € pour les moins de 12 ans**: la formulation officielle ne tranche pas le tarif d'un enfant de **12 ans**, à vérifier dans le panier. L'activité n'est accessible ni aux fauteuils roulants ni aux poussettes. L'accès au **dôme** et la **location de costumes** constituent aussi des suppléments.

## Quelles dates et quels horaires choisir?

<!-- article-image-body:02 -->

![Perspective des jardins à la française de Vaux-le-Vicomte en septembre 2010, de jour et sans illuminations de Noël](/images/articles/2026/10/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget-body-02.webp)

<!-- /article-image-body:02 -->

Le calendrier varie au cours de la saison:

- **Du 14 novembre au 18 décembre**, ouverture principalement **du mercredi au dimanche, de 10h30 à 20h**, avec **dernier accès à 19h**; **les 5 et 12 décembre**, fermeture à **21h**.
- **Du 19 décembre au 2 janvier**, ouverture généralement **de 10h30 à 21h**, sauf exceptions.
- **Les 24 et 31 décembre**, ouverture **10h30-18h**, dernier accès **16h**.
- **Les 25 décembre et 1er janvier**, le domaine est **fermé**.
- **Le dimanche 3 janvier**, ouverture **10h30-20h**.

Pour une sortie avec de jeunes enfants, arriver dans l'après-midi laisse le temps de visiter les salons, de participer à la chasse au trésor et de rester jusqu'aux lumières du soir. Le parcours alterne intérieur et extérieur: prévoyez vêtements chauds et chaussures adaptées à la marche.

## Venir sans voiture et repartir après les illuminations

Le château dispose d'un **parking gratuit** à Maincy. Pour le Grand Noël, il annonce aussi une **navette directe depuis Paris**, sur réservation obligatoire, au départ de l'**avenue des Terroirs de France**, près du métro **Cour Saint-Émilion (ligne 14)**: départ de Paris à **14h**, retour du domaine à **19h**. **Les 24 et 31 décembre**, départ de Paris à **13h** et retour à **18h**. Ces deux jours, la projection de **17h40** ne laisse qu'une douzaine de minutes avant le départ: ne comptez pas pouvoir assister à cette séance et rejoindre la navette sans confirmation de l'organisateur.

**Attention au retour de 19h**: il ne permet pas d'assister à la projection de **19h** et de prendre la navette en même temps. Pour celle de **18h30**, la marge est très faible; privilégiez la séance de **18h** si vous utilisez ce transport, en confirmant le temps de marche jusqu'au point de départ.

Autre possibilité: **ligne R depuis Paris-Gare-de-Lyon jusqu'à Melun**, puis taxi ou VTC (environ **10 à 15 minutes** jusqu'au château). Le domaine décrit aussi une navette depuis la gare de Melun, mais **son horaire de retour applicable au Grand Noël n'est pas établi ici**: ne comptez pas dessus sans confirmation pour rentrer après la projection.

## Poussette, repas et accessibilité

L'accès aux salons du château nécessite de gravir **une trentaine de marches** et **les poussettes ne sont pas admises à l'intérieur**; un espace pour les stationner est prévu dans la coursive. Le parcours intérieur et **L'Odyssée Nordique** ne sont pas accessibles aux personnes en fauteuil roulant. Le jardin est accessible, mais les **pavés et graviers** peuvent compliquer les déplacements; des voiturettes électriques peuvent être louées selon disponibilité.

Pour les repas, **Le Relais de l'Écureuil** propose une restauration en libre-service avec **menu enfant**. Des chaises hautes et des micro-ondes sont disponibles; les poussettes restent à l'extérieur du restaurant. Les **tables à langer** se trouvent dans les toilettes femmes de la Cour de l'Écureuil, à l'entrée. Le kiosque du jardin et le chalet de la patinoire permettent également une pause rapide.

## Dormir dans le secteur pour prolonger la visite

Pour une soirée sans trajet de retour vers Paris, l'[**ibis Styles Melun à Rubelles sur Booking.com**](https://www.booking.com/hotel/fr/ibis-styles-melun.fr.html) propose notamment des **suites familiales pour quatre personnes**, selon la description de l'hôtel. Il est situé à Rubelles, **pas dans le domaine du château**: prévoyez votre trajet entre l'hébergement et Vaux-le-Vicomte. **Prix, configuration des couchages et disponibilité aux dates du Grand Noël restent à vérifier** avant toute réservation.

Si vous restez un jour de plus en Seine-et-Marne, notre guide [**Parrot World en famille**](/articles/activites/parrot-world-en-famille-tarifs-2026-duree-et-conseils-pour-la-visite/) aide à préparer une autre sortie dans le département.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | Noël à Provins 2026: marché médiéval, animations et visites en famille | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | Noël 2026 à Paris La Défense en famille: marché, animations et patinoire | evenements | Puteaux, Hauts-de-Seine, Île-de-France
- /articles/evenements/noel-2026-a-quimper-en-famille-village-concert-ou-ateliers-gratuits/ | Noël 2026 à Quimper en famille: village, concert et animations gratuites | evenements | Quimper, Finistère, Bretagne
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | Noël au château de Cheverny 2026: billets, mapping et animations en famille | evenements | Cheverny, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | Grand Noël 2026 à Vaux-le-Vicomte en famille: billets, offre enfant et animations | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/voyages/moret-sur-loing-en-famille-sans-voiture-une-journee-entre-remparts-et-riviere/ | Moret-sur-Loing en famille sans voiture: une journée entre remparts et rivière | voyages | Moret-sur-Loing, Seine-et-Marne, Île-de-France
- /articles/sorties/musee-de-la-grande-guerre-a-meaux-avec-des-enfants-que-voir-selon-leur-age/ | Musée de la Grande Guerre à Meaux avec des enfants: que voir selon leur âge ? | sorties | Meaux, Seine-et-Marne, Île-de-France
- /articles/voyages/chateau-de-fontainebleau-depuis-paris-en-famille-train-r-bus-3401-et-budget/ | Château de Fontainebleau depuis Paris en famille: train R, bus 3401 et budget | voyages | Fontainebleau, Seine-et-Marne, Île-de-France
- /articles/voyages/disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026/ | Disneyland Paris en RER A avec des enfants: trajet et tarifs 2026 | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/evenements/marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants/ | Marie-Antoinette à Fontainebleau 2026-2027: exposition, visites et tarifs en famille | evenements | Fontainebleau, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | Noël des Siècles 2026 à Champs-sur-Marne: billets, budget et horaires en famille | evenements | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/bons-plans/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/ | Château de Champs-sur-Marne en famille: gratuités, tarifs et dates à éviter | bons-plans | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | Noël 2026 à Disneyland Paris: faut-il un billet 2 parcs pour voir Arendelle? | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/carnaval-de-guyane-2027-en-famille-preparer-ses-premieres-sorties/ | Carnaval de Guyane 2027 en famille: préparer ses premières sorties | evenements | Guyane
- /articles/evenements/mondo-clowns-2027-a-marmande-dates-tarifs-et-conseils-en-famille/ | Mondo'Clowns 2027 à Marmande: dates, tarifs et conseils en famille | evenements | Marmande, Lot-et-Garonne, Nouvelle-Aquitaine

### Historique Radar lié

- refresh | /articles/bons-plans/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/ | 2026-11-07T10:31:03.300Z
- opportunity | /articles/voyages/chateau-de-fontainebleau-depuis-paris-en-famille-train-r-bus-3401-et-budget/ | 2026-10-31T16:31:36.357Z
- opportunity | /articles/voyages/disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026/ | 2026-10-31T04:29:30.633Z
- refresh | /articles/voyages/disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026/ | 2026-11-10T06:36:15.602Z
- opportunity | /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | 2026-10-20T22:29:05.422Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- refresh | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-11-07T00:30:17.397Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
