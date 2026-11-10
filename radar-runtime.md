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
title: "Lac du Bouchet en famille: tour du lac, baignade et activités"
subtitle: Une promenade gratuite autour d’un lac volcanique, avec des pauses et des activités selon la saison
summary: Près de Cayres, le lac du Bouchet se découvre en famille sur une boucle de 3 km, entre forêt, jeux et baignade estivale. Voici ce qu’il faut savoir pour les poussettes et les activités.
slug: lac-du-bouchet-en-famille-tour-du-lac-baignade-et-activites
status: published
publishedAt: 2026-10-24T14:58:55+02:00
updatedAt: null
category: activites
readingTime: 4
location:
  city: Cayres
  department: Haute-Loire
  region: Auvergne-Rhône-Alpes
topic:
  key: activites|cayres|lac-du-bouchet-en-famille-tour-du-lac-baignade-et-activites|2026
  keywords:
    - lac du Bouchet en famille
    - tour du lac du Bouchet
    - lac du Bouchet poussette
    - baignade lac du Bouchet
image:
  src: /images/articles/2026/10/lac-du-bouchet-en-famille-tour-du-lac-baignade-et-activites.webp
  alt: Vue panoramique du lac du Bouchet entouré de forêt en Haute-Loire
sources:
  - title: My Haute-Loire - Sentier le Tour du Lac du Bouchet
    url: https://www.myhauteloire.fr/activite-auvergne/sentier-le-tour-du-lac-du-bouchet/
  - title: "My Haute-Loire - Lac du Bouchet: accès et équipements"
    url: https://www.myhauteloire.fr/site-naturel/lac-du-bouchet/
  - title: My Haute-Loire - Aire Respirando du lac du Bouchet
    url: https://www.myhauteloire.fr/nature-sauvage/aires-et-stations-respirando/aire-respirando-du-lac-du-bouchet/
  - title: Sud Haute-Loire Tourisme - Le lac du Bouchet
    url: https://www.sudhauteloire-tourisme.fr/les-incontournables/le-lac-du-bouchet/
  - title: Chalet du lac du Bouchet - Activités et restauration
    url: https://www.lacdubouchet.fr/activites-lac-bouchet-cayres-43_fr.html
affiliate:
  enabled: true
  type: travel
  destination: Cayres
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/activites/(2026)/(10)/lac-du-bouchet-en-famille-tour-du-lac-baignade-et-activites/index.md
  targetSha: 65c4236e32f0731fde75a424cc256ed56f61ddef
  targetUrl: /articles/activites/lac-du-bouchet-en-famille-tour-du-lac-baignade-et-activites/
  decision: Choisir entre promenade, baignade estivale et pêche avec les enfants, en connaissant les dates de surveillance, les conditions d'accès et les autorisations nécessaires.
  affiliationPotential: Conserver les hébergements Booking et Abritel déjà intégrés; aucune nouvelle offre nécessaire.
  gsc:
    retrievedAt: 2026-11-10T01:34:08+01:00
    dataThrough: 2026-11-07
    signal: uncertain
    basis: "Visibilité récente : 30 impressions sur trois jours, puis 3 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-25
    peakEnd: 2026-10-27
    recentStart: 2026-11-05
    recentEnd: 2026-11-07
    peakImpressions: 30
    recentImpressions: 3
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - lac du bouchet
      - chalet lac du bouchet cayres
      - tour du lac du bouchet
---

## Mission retenue
Actualiser le guide familial du lac du Bouchet (Haute-Loire), sans changer son angle de promenade et de loisirs.

## Pourquoi cette mission
Signal rapidDrop du snapshot: 30 impressions du 25 au 27 octobre, puis 3 du 5 au 7 novembre. Cause inconnue, sans requêtes comparables. Lacune indépendante vérifiée: l'article ne donne pas les dates officielles de la saison balnéaire 2026 ni les conditions de pêche, alors qu'il présente la baignade et les activités nautiques.

## Décision du lecteur
Savoir ce qui est faisable selon la saison, si la plage convient aux besoins d'accessibilité de la famille, et comment pratiquer la pêche légalement sans confondre pêche et simple promenade.

## Faits à traiter
- La fiche sanitaire officielle indique une saison balnéaire du 15 juin au 13 septembre 2026, terminée; ne pas présenter ces dates comme celles de 2027. Elle distingue la plage aménagée, surveillée, équipée de toilettes et d'un poste de secours, mais non accessible PMR, de la portion de sentier décrite comme partiellement accessible.
- Ajouter brièvement la pêche comme option distincte, sans la promettre gratuitement: carte de pêche départementale éligible et supplément spécifique au lac requis, y compris pour les mineurs selon les modalités de la Fédération; vérifier les saisons et tarifs 2026 avant publication, sans extrapoler 2027.
- Préserver intégralement la boucle de 3 km, le conseil poussette, la géologie, les activités nautiques, jeux, pique-nique, restaurant, accès, météo, photographies et crédits, liens Booking/Abritel et maillage existant. Ne pas transformer le guide en article de pêche.

## Sources de départ
- Ministère de la Santé, fiche 2026 Lac du Bouchet: https://baignades.sante.gouv.fr/baignades/consultSite.do?annee=2026&dptddass=043&impression=yes&isite=043001587&modeDetailImp=3&plv=04300153941&site=043001587
- Fédération de pêche de Haute-Loire, règlement et tarifs 2026: https://www.pechehauteloire.fr/LacDuBouchet.php
- My Haute-Loire, tour du lac: https://www.myhauteloire.fr/activite-auvergne/sentier-le-tour-du-lac-du-bouchet/

## Affiliation
Conserver les deux hébergements existants, sans ajout artificiel.

## Continuations internes
Conserver le renvoi vers le guide du Puy-en-Velay. Ne pas détailler toute la réglementation de pêche: renvoyer à la Fédération pour les conditions complètes et à jour.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/activites/(2026)/(10)/lac-du-bouchet-en-famille-tour-du-lac-baignade-et-activites/index.md

---
title: "Lac du Bouchet en famille: tour du lac, baignade et activités"
subtitle: Une promenade gratuite autour d’un lac volcanique, avec des pauses et des activités selon la saison
summary: Près de Cayres, le lac du Bouchet se découvre en famille sur une boucle de 3 km, entre forêt, jeux et baignade estivale. Voici ce qu’il faut savoir pour les poussettes et les activités.
slug: lac-du-bouchet-en-famille-tour-du-lac-baignade-et-activites
status: published
publishedAt: 2026-10-24T14:58:55+02:00
updatedAt: null
category: activites
readingTime: 4
location:
  city: Cayres
  department: Haute-Loire
  region: Auvergne-Rhône-Alpes
topic:
  key: activites|cayres|lac-du-bouchet-en-famille-tour-du-lac-baignade-et-activites|2026
  keywords:
    - lac du Bouchet en famille
    - tour du lac du Bouchet
    - lac du Bouchet poussette
    - baignade lac du Bouchet
image:
  src: "/images/articles/2026/10/lac-du-bouchet-en-famille-tour-du-lac-baignade-et-activites.webp"
  alt: "Vue panoramique du lac du Bouchet entouré de forêt en Haute-Loire"
sources:
  - title: My Haute-Loire - Sentier le Tour du Lac du Bouchet
    url: https://www.myhauteloire.fr/activite-auvergne/sentier-le-tour-du-lac-du-bouchet/
  - title: "My Haute-Loire - Lac du Bouchet: accès et équipements"
    url: https://www.myhauteloire.fr/site-naturel/lac-du-bouchet/
  - title: My Haute-Loire - Aire Respirando du lac du Bouchet
    url: https://www.myhauteloire.fr/nature-sauvage/aires-et-stations-respirando/aire-respirando-du-lac-du-bouchet/
  - title: Sud Haute-Loire Tourisme - Le lac du Bouchet
    url: https://www.sudhauteloire-tourisme.fr/les-incontournables/le-lac-du-bouchet/
  - title: Chalet du lac du Bouchet - Activités et restauration
    url: https://www.lacdubouchet.fr/activites-lac-bouchet-cayres-43_fr.html
affiliate:
  enabled: true
  type: travel
  destination: Cayres
---
<!-- article-image-credit -->
*Photo: [Jérôme Pellé](https://commons.wikimedia.org/wiki/File:Lac_du_Bouchet_(24426648723).jpg) - [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À une vingtaine de kilomètres au sud du Puy-en-Velay, le lac du Bouchet forme un cercle d’eau au milieu de la forêt. On peut y venir pour une promenade gratuite, un pique-nique ou, en été, une après-midi au bord de l’eau. Avec des enfants, le choix est simple: faire le tour du lac s’ils aiment marcher, ou rester près de la plage et de l’aire de jeux pour une sortie plus courte.

## Le tour du lac: 3 km à son rythme

Le [sentier du lac du Bouchet](https://www.myhauteloire.fr/activite-auvergne/sentier-le-tour-du-lac-du-bouchet/) forme une boucle d’environ **3 km**, annoncée facile et gratuite. Comptez une heure de marche ou davantage avec de jeunes enfants, sans inclure les arrêts. Les bancs autour du lac permettent de faire une pause face à l’eau.

Si les enfants marchent encore peu, inutile de s’engager sur toute la boucle. Une promenade aller-retour depuis le secteur de la plage laisse du temps pour jouer ou goûter sans devoir terminer les 3 km.

## Poussette et fauteuil roulant: une accessibilité partielle à confirmer

Les informations touristiques ne sont pas tout à fait concordantes. La présentation de l’[Aire Respirando](https://www.myhauteloire.fr/nature-sauvage/aires-et-stations-respirando/aire-respirando-du-lac-du-bouchet/) décrit un sentier aménagé accessible aux poussettes et fauteuils roulants. En revanche, la fiche détaillée du tour du lac ne garantit explicitement l’accès aux personnes à mobilité réduite que **sur la portion entre l’hôtel-restaurant et la plage**.

Pour une poussette citadine ou un fauteuil roulant, cette portion est donc le choix le plus prudent. Ne considérez pas l’ensemble de la boucle comme accessible sans confirmation de l’état du chemin, notamment après la pluie.

## Un ancien volcan à découvrir en marchant

Le lac occupe un **maar**, un cratère formé lorsqu’une remontée de magma a rencontré de l’eau souterraine et provoqué une explosion. [Sud Haute-Loire Tourisme](https://www.sudhauteloire-tourisme.fr/les-incontournables/le-lac-du-bouchet/) situe sa formation à environ **300 000 ans**.

Des pupitres d’interprétation géologique sont signalés sur le site. Pour les enfants, la forme presque ronde du lac est déjà une bonne façon de comprendre qu’ils se promènent dans un ancien cratère.

## Baignade et activités nautiques: vérifier la saison

<!-- article-image-body:01 -->

![Plage en herbe du lac du Bouchet avec le restaurant au fond, photographiée en 2010](/images/articles/2026/10/lac-du-bouchet-en-famille-tour-du-lac-baignade-et-activites-body-01.webp)

*Photo: [Anthospace](https://commons.wikimedia.org/wiki/File:Plage_du_lac_du_Bouchet.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le lac possède une plage en herbe et une zone de baignade surveillée en été, décrites dans la [fiche générale My Haute-Loire](https://www.myhauteloire.fr/site-naturel/lac-du-bouchet/). Les dates de surveillance peuvent varier d'une saison à l'autre: vérifiez les jours et horaires auprès de l'office de tourisme et sur place avant toute baignade. La saison 2026 est terminée et les dates de 2027 restent à confirmer.

Le [Chalet du lac](https://www.lacdubouchet.fr/activites-lac-bouchet-cayres-43_fr.html) mentionne la location de pédalos, de paddles et de barques. Pour les pédalos et paddles, le contact affiché est le **06 32 22 49 75**. Ces activités dépendent de la saison et de l’exploitant: renseignez-vous sur les ouvertures, les tarifs et les conditions d’âge avant de prévoir une sortie sur l’eau.

## Jeux, pique-nique et restauration

Une **aire de jeux**, des tables de pique-nique et des **toilettes publiques** figurent parmi les [équipements recensés sur le site](https://www.myhauteloire.fr/site-naturel/lac-du-bouchet/). C’est pratique pour prolonger la promenade, mais certains services peuvent être moins disponibles hors saison.

Le Chalet du lac propose également un restaurant et un bar-glacier avec vue sur l’eau. Son ouverture varie selon la période. En dehors de l’été, mieux vaut vérifier ses horaires avant de compter sur un repas sur place.

## Comment accéder au lac et quand venir ?

L’accès routier se fait par la **D312, entre Cayres et Le Bouchet-Saint-Nicolas**, avec un parking près du lac. Le site et le sentier sont annoncés accessibles toute l’année, sans droit d’entrée pour la promenade.

À environ **1 200 m d’altitude**, les conditions changent vite selon la saison. En automne, la forêt est particulièrement colorée, mais le sentier peut être glissant. En hiver, neige et verglas peuvent rendre le tour impraticable même si le site reste officiellement ouvert. L’été est la période des activités nautiques, sous réserve de leur ouverture effective.

## Où dormir pour découvrir le lac et ses environs ?

Pour un week-end tout près du lac, [Le Flambeau au Bouchet-Saint-Nicolas sur Booking.com](https://www.booking.com/hotel/fr/le-flambeau.fr.html) propose des chambres familiales, une cuisine à disposition et des petits-déjeuners selon la formule choisie. L’hébergement indique se trouver à environ 1,5 km du lac.

Pour une famille nombreuse qui préfère un logement entier, [ce gîte de deux chambres pour sept personnes à Cayres sur Abritel](https://www.abritel.fr/location-vacances/p2110660) dispose d’une cuisine et se trouve à quelques kilomètres du lac. Vérifiez la capacité réelle pour votre groupe, les disponibilités et les suppléments éventuels pour le linge.

Si vous souhaitez compléter cette escapade par une visite de la ville, notre [guide du Puy-en-Velay avec des enfants](https://www.fam-space.fr/articles/voyages/le-puy-en-velay-avec-des-enfants-ou-dormir-pour-visiter-la-ville-a-pied/) propose des idées de parcours à pied et de logements dans le centre.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/lac-de-madine-en-famille-baignade-gratuite-et-activites-a-nonsard/ | Lac de Madine en famille: baignade gratuite et activités à Nonsard | sorties | Nonsard-Lamarche, Meuse, Grand Est
- /articles/parentalite/premier-week-end-a-hossegor-avec-un-bebe-ou-dormir-et-quoi-prevoir/ | Hossegor avec un bébé: lac ou océan, quelles plages choisir ? | parentalite | Hossegor, Landes, Nouvelle-Aquitaine
- /articles/voyages/week-end-en-famille-au-lac-de-sidiailles-activites-baignade-et-budget/ | Week-end en famille au lac de Sidiailles: activités, baignade et budget | voyages | Sidiailles, Cher, Centre-Val de Loire
- /articles/parentalite/premier-week-end-a-brive-avec-un-bebe-ou-dormir-et-quoi-faire/ | Brive avec un bébé: voie verte, musée Labenche et lac du Causse | parentalite | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine
- /articles/sorties/bambouseraie-avec-de-jeunes-enfants-poussette-ou-balade-aerienne/ | Bambouseraie avec de jeunes enfants: poussette ou balade aérienne? | sorties | Générargues, Gard, Occitanie
- /articles/activites/zoo-de-martinique-en-famille-tarifs-poussette-et-visite-de-l-habitation-latouche/ | Zoo de Martinique en famille: tarifs, poussette et visite de l'Habitation Latouche | activites | Le Carbet, Martinique, Martinique
- /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | Luminescences 2026-2027 au zoo d'Amnéville: billets, tarifs et visite en famille | evenements | Amnéville, Moselle, Grand Est
- /articles/sorties/gouffre-de-padirac-en-famille-tarifs-poussette-et-conseils-pour-la-visite/ | Gouffre de Padirac avec des enfants: à partir de quel âge et tarifs 2026 | sorties | Padirac, Lot, Occitanie
- /articles/activites/lac-du-bouchet-en-famille-tour-du-lac-baignade-et-activites/ | Lac du Bouchet en famille: tour du lac, baignade et activités | activites | Cayres, Haute-Loire, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-du-mazet-saint-voy-preparer-le-week-end-des-28-et-29-novembre/ | Marché de Noël du Mazet-Saint-Voy: préparer le week-end des 28 et 29 novembre | evenements | Mazet-Saint-Voy, Haute-Loire, Auvergne-Rhône-Alpes
- /articles/voyages/le-puy-en-velay-avec-des-enfants-ou-dormir-pour-visiter-la-ville-a-pied/ | Le Puy-en-Velay avec des enfants: où dormir pour visiter la ville à pied | voyages | Le Puy-en-Velay, Haute-Loire, Auvergne-Rhône-Alpes
- /articles/sorties/parc-family-aventure-en-haute-loire-tarifs-parcours-et-conseils-en-famille/ | Parc Family Aventure La Séauve: tarifs 2026 et parcours dès 3 ans | sorties | La Séauve-sur-Semène, Haute-Loire, Auvergne-Rhône-Alpes
- /articles/maison/renovation-en-haute-loire-demarches-a-faire-avant-le-3-aout/ | Rénovation en Haute-Loire: comment reprendre ses démarches France Rénov après la maintenance | maison | Le Puy-en-Velay, Haute-Loire, Auvergne-Rhône-Alpes
- /articles/activites/corderie-royale-de-rochefort-en-famille-visite-tarifs-et-ateliers/ | Corderie Royale de Rochefort en famille: visite, tarifs et ateliers | activites | Rochefort, Charente-Maritime, Nouvelle-Aquitaine
- /articles/activites/musee-de-l-air-et-de-l-espace-au-bourget-quel-parcours-en-famille/ | Musée de l’Air et de l’Espace au Bourget: quel parcours en famille? | activites | Le Bourget, Seine-Saint-Denis, Île-de-France
- /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | Atelier bâton de pluie gratuit à Paris le 18 novembre 2026: dès 6 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | Lecture d'hiver gratuite à Paris le 12 décembre 2026: deux séances pour les 1-3 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | Bricolages de Noël gratuits à Paris le 19 décembre 2026: un atelier dès 4 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-deco-de-noel-gratuit-a-paris-le-28-novembre-2026-creer-en-recup-art-des-8-ans/ | Atelier déco de Noël gratuit à Paris le 28 novembre 2026: bricolage dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | Atelier Calder à Paris le 14 novembre 2026: fabriquer un mobile dès 5 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/le-pal-2027-en-famille-une-ou-deux-journees-entre-animaux-et-attractions/ | Le PAL 2027 en famille: une ou deux journées entre animaux et attractions ? | activites | Saint-Pourçain-sur-Besbre, Allier, Auvergne-Rhône-Alpes
- /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | Atelier Pokémon et biodiversité à Paris le 28 novembre 2026: dessin dès 10 ans | activites | Paris, Paris, Île-de-France

### Historique Radar lié

- opportunity | /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | 2026-11-05T16:36:05.180Z
- opportunity | /articles/activites/atelier-deco-de-noel-gratuit-a-paris-le-28-novembre-2026-creer-en-recup-art-des-8-ans/ | 2026-11-05T23:35:44.031Z
- opportunity | /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | 2026-11-06T12:30:50.449Z
- opportunity | /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | 2026-11-06T03:27:40.597Z
- opportunity | /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | 2026-11-06T09:33:42.136Z
- opportunity | /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | 2026-10-22T09:37:18.560Z
- opportunity | /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | 2026-11-05T10:32:54.471Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
