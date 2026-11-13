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
title: "Noël au château de Cheverny 2026: billets, mapping et visite en famille"
subtitle: "Décors, illuminations, tarifs et horaires: préparer la sortie sans se tromper de billet"
summary: Du 28 novembre 2026 au 10 janvier 2027, le château de Cheverny annonce des décors et un mapping de Noël. Tarifs des deux billets, jeu de piste, accès avec des enfants et horaires encore à confirmer.
category: evenements
location:
  city: Cheverny
  department: Loir-et-Cher
  region: Centre-Val de Loire
image:
  src: /images/articles/2026/10/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille.webp
  alt: Façade sud du château de Cheverny et son parc au printemps 2026, hors illuminations de Noël
sources:
  - title: Château de Cheverny - Noël 2026 au château
    url: https://www.chateau-cheverny.fr/evenements/noel-chateau
  - title: Château de Cheverny - Tarifs et horaires
    url: https://www.chateau-cheverny.fr/informations-pratiques/tarifs
  - title: Château de Cheverny - Comment venir
    url: https://www.chateau-cheverny.fr/informations-pratiques/comment-venir
  - title: Château de Cheverny - Préparer sa visite
    url: https://www.chateau-cheverny.fr/informations-pratiques/preparer-sa-visite.html
  - title: Château de Cheverny - Journée spéciale du Père Noël
    url: https://www.chateau-cheverny.fr/evenements/journee-noel
  - title: Rémi - Ligne 4 renforcée à la rentrée 2026
    url: https://www.remi-centrevaldeloire.fr/s-evader/loir-et-cher-41-nouveautes-rentree-2026
eventEndsAt: 2027-01-10T18:45:00+01:00
topic:
  key: evenements|cheverny|noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille|2026
  keywords:
    - Noël château de Cheverny 2026
    - Cheverny mapping Noël billet
    - Cheverny jeu de piste Noël enfants
slug: noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille
status: published
publishedAt: 2026-10-23T19:58:30.103Z
updatedAt: null
readingTime: 5
affiliate:
  enabled: true
  type: travel
  destination: Cheverny
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/index.md
  targetSha: 803bf8aaeeed0632b687cd5f9643f8aebfe5e897
  targetUrl: /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/
  decision: Choisir entre visite complète et mapping seul, calculer le budget familial exact et sélectionner une date selon les animations 2026 désormais confirmées.
  affiliationPotential: Conserver le lien Booking.com vers le Relais des Trois Châteaux à Cour-Cheverny; aucune billetterie affiliée naturelle puisque les billets du château sont vendus uniquement sur place.
  gsc:
    retrievedAt: 2026-11-13T03:30:25+01:00
    dataThrough: 2026-11-10
    signal: needs_query_check
    basis: "Visibilité récente : 102 impressions sur trois jours, puis 17 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-25
    peakEnd: 2026-10-27
    recentStart: 2026-11-08
    recentEnd: 2026-11-10
    peakImpressions: 102
    recentImpressions: 17
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Noël château de Cheverny 2026
      - Cheverny mapping Noël billet
      - Cheverny jeu de piste Noël enfants
---

## Mission retenue
Actualiser l'article existant « Noël au château de Cheverny 2026 » pour refléter le programme officiel désormais détaillé, sans réécriture inutile.

## Pourquoi cette mission
Le snapshot GSC consolidé au 10 novembre montre 102 puis 17 impressions sur deux fenêtres de trois jours, signal `needs_query_check`: aucune cause SEO n'est démontrée. En revanche, une lacune indépendante est vérifiée: l'article présente encore les informations 2026 comme incertaines et annonce un billet mapping à 9,50 €/8 €, alors que le château affiche désormais 10,50 €/9 € et publie les animations datées.

## Décision du lecteur
Savoir quel billet acheter, combien dépenser et quand venir avec les enfants pour profiter du mapping, du jeu de piste, du Père Noël ou du spectacle équestre.

## Faits à traiter
- Corriger le mapping seul: 10,50 € plein tarif et 9 € réduit; entrée possible après 16h30, ou 17h pendant les vacances. Recalculer le comparatif avec le billet château et jardins à 15,50 € adulte, 11,50 € réduit, gratuit avant 7 ans. Ne pas déduire une gratuité mapping non confirmée.
- Remplacer les anciennes réserves liées au programme 2025: jeu de piste gratuit des 7-14 ans du 28 novembre 2026 au 10 janvier 2027; Père et Mère Noël les 6 et 13 décembre (programmes distincts); spectacle équestre du 25 décembre au 1er janvier à 15h, durée 45 min, supplément 8 € dès 3 ans, arrivée 15 min avant.
- Mettre à jour les horaires de la maison du chocolat (16h-18h30 hors week-ends et vacances, 12h-18h30 pendant ceux-ci), l'Orangerie (12-13 décembre et vacances) et le kiosque (5-6 décembre). Le mapping commence à la tombée de la nuit, sans horaire fixe garanti.
- Préserver impérativement les informations utiles sur les billets sur place sans réservation, accès Rémi et retour après mapping, parkings, poussettes, tables à langer, accessibilité, trois images avec licences et crédits, maillage vers Blois et Chambord et lien Booking.com.

## Sources de départ
- https://www.chateau-cheverny.fr/evenements/noel-chateau
- https://www.chateau-cheverny.fr/evenements/journee-noel
- https://www.chateau-cheverny.fr/informations-pratiques/tarifs

## Affiliation
Hébergement existant à Cour-Cheverny sur Booking.com à conserver avec vérification des caractéristiques de chambre; pas de lien de billetterie partenaire inventé.

## Continuations internes
- Maintenir le renvoi vers le guide Blois sans voiture pour le trajet en transports.
- Maintenir le renvoi vers Noël à Chambord, sans mélanger les programmes.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/index.md

---
title: "Noël au château de Cheverny 2026: billets, mapping et visite en famille"
subtitle: "Décors, illuminations, tarifs et horaires: préparer la sortie sans se tromper de billet"
summary: Du 28 novembre 2026 au 10 janvier 2027, le château de Cheverny annonce des décors et un mapping de Noël. Tarifs des deux billets, jeu de piste, accès avec des enfants et horaires encore à confirmer.
category: evenements
location:
  city: Cheverny
  department: Loir-et-Cher
  region: Centre-Val de Loire
image:
  src: "/images/articles/2026/10/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille.webp"
  alt: "Façade sud du château de Cheverny et son parc au printemps 2026, hors illuminations de Noël"
sources:
  - title: Château de Cheverny - Noël 2026 au château
    url: https://www.chateau-cheverny.fr/evenements/noel-chateau
  - title: Château de Cheverny - Tarifs et horaires
    url: https://www.chateau-cheverny.fr/informations-pratiques/tarifs
  - title: Château de Cheverny - Comment venir
    url: https://www.chateau-cheverny.fr/informations-pratiques/comment-venir
  - title: Château de Cheverny - Préparer sa visite
    url: https://www.chateau-cheverny.fr/informations-pratiques/preparer-sa-visite.html
  - title: Château de Cheverny - Journée spéciale du Père Noël
    url: https://www.chateau-cheverny.fr/evenements/journee-noel
  - title: Rémi - Ligne 4 renforcée à la rentrée 2026
    url: https://www.remi-centrevaldeloire.fr/s-evader/loir-et-cher-41-nouveautes-rentree-2026
eventEndsAt: 2027-01-10T18:45:00+01:00
topic:
  key: evenements|cheverny|noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille|2026
  keywords:
    - Noël château de Cheverny 2026
    - Cheverny mapping Noël billet
    - Cheverny jeu de piste Noël enfants
slug: noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille
status: published
publishedAt: 2026-10-23T19:58:30.103Z
updatedAt: null
readingTime: 5
affiliate:
  enabled: true
  type: travel
  destination: Cheverny
---
<!-- article-image-credit -->
*Photo: [Rolf Kranz](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Cheverny,_fa%C3%A7ade_sud_et_parc.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Du **28 novembre 2026 au 10 janvier 2027**, le château de Cheverny, dans le Loir-et-Cher, annonce des décorations de Noël dans ses salles et ses jardins, ainsi qu'un **mapping lumineux sur la façade**. Vous pouvez visiter le château avant la tombée de la nuit et rester pour les illuminations, ou acheter un billet moins cher pour les lumières seulement.

**Programme à surveiller:** la page officielle est intitulée « Noël 2026 », mais précise qu'elle reprend encore des éléments de **2025**. Les horaires spéciaux, le jeu de piste et les animations ci-dessous sont donc **annoncés, mais pas tous définitivement confirmés pour l'édition 2026-2027**.

## Visite du château et illuminations: prévoir du temps

<!-- article-image-body:01 -->

![Salle à manger du château de Cheverny et panneau peint illustrant Don Quichotte, hors décorations de Noël](/images/articles/2026/10/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille-body-01.webp)

*Photo: [Fab5669](https://commons.wikimedia.org/wiki/File:Cheverny_-_ch%C3%A2teau,_int%C3%A9rieur_(03).jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Les salles et les jardins sont décorés pour Noël, avec notamment une mise en scène gourmande dans la salle à manger, des sapins et une table de fête illuminée à l'extérieur. La visite habituelle **château et jardins dure environ 1 h 30 à 1 h 45**. Arriver en milieu d'après-midi laisse le temps de découvrir les intérieurs avant la projection.

Le billet classique comprend les illuminations, sans supplément annoncé. La page de Noël indique:
- des **illuminations de 17 h 30 à 18 h 45**, avec un mapping commençant **vers 17 h 45**;
- une **dernière entrée pour la visite à 17 h**, repoussée à **17 h 30 pendant les vacances scolaires**;
- une **fermeture du domaine à 18 h 45**.

Ces horaires de Noël diffèrent des horaires d'hiver habituels et restent à reconfirmer pour 2026.

## Mapping seul: un billet pour les lumières, pas pour les salles

Le château annonce un accès **de 16 h 45 à 17 h 45** pour les personnes souhaitant uniquement profiter des illuminations. Cette formule convient notamment aux familles déjà venues visiter les intérieurs ou préférant une sortie plus courte. Elle ne donne pas accès à la visite complète du château.

**Les billets sont vendus sur place, sans réservation en ligne**, y compris pour la formule mapping. L'heure de 17 h 45 correspond à la fin d'accès annoncée, pas à un créneau de réservation: mieux vaut arriver avant.

## Prix: combien coûte chaque formule ?

Les tarifs affichés par le château sont les suivants:

- **Château et jardins, illuminations comprises: 15,50 € par adulte**, **11,50 € au tarif réduit**, **gratuit avant 7 ans**.
- **Mapping seul: 9,50 € au tarif normal** et **8 € au tarif réduit**, sous réserve de confirmation pour l'édition 2026.

Pour **deux adultes au plein tarif**, comptez **31 €** pour la visite complète ou **19 €** pour le mapping seul: **12 € de différence**. Le tarif réduit classique concerne notamment les enfants de **7 à 14 ans**, les lycéens et d'autres publics sur justificatif. Pour le billet château et jardins, le site indique également la gratuité pour les personnes titulaires de la carte d'invalidité, tandis que l'accompagnateur paie le tarif normal.

**Attention aux moins de 7 ans:** la gratuité est explicite pour le billet château et jardins, mais **pas pour le billet mapping seul** sur la page de Noël. Faites préciser ce tarif avant de calculer le budget familial.

## Jeu de piste, Père Noël et pauses gourmandes

<!-- article-image-body:02 -->

![Bâtiment de l'Orangerie de Cheverny vu depuis l'allée du parc au printemps, sans décoration de Noël](/images/articles/2026/10/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille-body-02.webp)

*Photo: [Telemaque MySon](https://commons.wikimedia.org/wiki/File:The_Orangerie_at_Cheverny.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

La page de Noël décrit un **jeu de piste gratuit pour les 7-14 ans**: les enfants doivent retrouver **sept ingrédients** cachés dans le château. Elle affiche toutefois une période allant du **1er décembre au 11 janvier**, alors que Noël 2026 au château se termine le **10 janvier 2027**. Ce décalage confirme qu'il ne faut pas considérer ces dates comme définitives pour 2026.

Une journée avec le **Père et la Mère Noël** est également annoncée, mais **sa date 2026 n'est pas encore publiée**. Les horaires de l'ancienne édition ne permettent pas de prévoir leur présence.

Pour une pause, l'Orangerie est mentionnée pendant les vacances scolaires. La page annonce aussi un kiosque de boissons chaudes et gourmandises **de 12 h 30 à 18 h, sauf le samedi**, pendant ces vacances. Ces modalités figurent dans le programme encore partiellement repris de 2025: vérifiez leur confirmation avant de compter sur une restauration sur place.

## Accès, poussettes et retour après les lumières

Le château se trouve **avenue du Château, 41700 Cheverny**. Il dispose de **trois parkings gratuits**: le **P1** est le plus proche de l'entrée, le **P2** se situe à environ 250 m et le **P3**, également à 250 m, est **réservé aux camping-cars en journée**. Prévoyez des vêtements chauds pour les parties extérieures.

Les **poussettes circulent dans les jardins**, mais **pas dans les salles du château**: elles sont gardées à l'entrée des intérieurs. Des **tables à langer** sont signalées aux toilettes du parking P1 et de l'Orangerie. Un **perron extérieur limite fortement l'accès au château en fauteuil roulant**; contactez le domaine pour connaître les possibilités adaptées à votre situation.

**Sans voiture, vérifiez le retour avant de choisir le mapping.** Depuis septembre 2026, la **ligne Rémi 4** dessert Cheverny toute l'année. Le réseau annonce toutefois un passage de retour à l'arrêt **« l'Orme » vers 16 h 40**: ce départ ne permet pas d'assister au mapping puis de rentrer à Blois. Ne supposez pas qu'un autre car circule après la fermeture; contrôlez la fiche horaire du jour et organisez un retour adapté. Notre [guide de Blois sans voiture, avec Chambord et Cheverny](/articles/voyages/blois-sans-voiture-en-2026-3-jours-pour-chambord-cheverny-et-le-centre-ville/) aide à préparer les autres trajets du séjour.

## Dormir près de Cheverny après les illuminations

Si la visite s'inscrit dans un week-end, le [Relais des Trois Châteaux à Cour-Cheverny sur Booking.com](https://www.booking.com/hotel/fr/relais-des-trois-chac-teaux.fr.html) se situe à environ **800 m du château**. Il propose des **chambres familiales pour trois ou quatre personnes**, selon leur configuration. Vérifiez les lits, les conditions d'accueil des enfants, l'heure d'arrivée et les disponibilités pour vos dates: aucun prix ni hébergement disponible à Noël n'est garanti ici.

Pour une autre sortie dans le même département, notre article sur [Noël à Chambord 2026 avec des enfants](/articles/evenements/noel-a-chambord-2026-avec-des-enfants-quand-venir-et-que-prevoir/) détaille un programme distinct, avec des animations surtout en décembre.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/petit-archeologue-puilaurens-famille-2026/ | Le petit archéologue à Puilaurens: un jeu de piste en famille | sorties | Puilaurens, Aude, Occitanie
- /articles/sorties/chateau-de-chambord-en-famille-tarifs-2026-activites-et-conseils-de-visite/ | Château de Chambord en famille: tarifs 2026, activités et conseils de visite | sorties | Chambord, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/ | Noël 2026 au château royal de Blois: décors, spectacles et tarifs en famille | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/activites/chateau-de-bouges-en-famille-jardins-livret-jeu-et-ecuries/ | Château de Bouges en famille: jardins, livret-jeu et écuries | activites | Bouges-le-Château, Indre, Centre-Val de Loire
- /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | Noël 2026 à Chantilly: Le Noël oublié, billets et séances en famille | evenements | Chantilly, Oise, Hauts-de-France
- /articles/evenements/noel-2026-au-chateau-de-grignan-dates-tarifs-et-visite-en-famille/ | Noël 2026 au château de Grignan: dates, tarifs et visite en famille | evenements | Grignan, Drôme, Auvergne-Rhône-Alpes
- /articles/sorties/halloween-2026-a-france-miniature-en-famille/ | Halloween 2026 à France Miniature avec des enfants: billets et visite | sorties | Élancourt, Yvelines, Île-de-France
- /articles/voyages/blois-sans-voiture-en-2026-3-jours-pour-chambord-cheverny-et-le-centre-ville/ | Blois sans voiture en 2026: 3 jours pour Chambord, Cheverny et le centre-ville | voyages | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | Noël au château de Cheverny 2026: billets, mapping et visite en famille | evenements | Cheverny, Loir-et-Cher, Centre-Val de Loire
- /articles/parentalite/laep-dans-le-loir-et-cher-ou-rencontrer-d-autres-parents-avec-son-tout-petit/ | LAEP dans le Loir-et-Cher: où rencontrer d'autres parents avec son tout-petit ? | parentalite | Loir-et-Cher, Centre-Val de Loire
- /articles/cuisine/ateliers-de-cuisine-en-famille-dans-le-loir-et-cher-chocolat-patisserie-ou-legumes/ | Ateliers de cuisine en famille dans le Loir-et-Cher: chocolat, pâtisserie ou légumes ? | cuisine | Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | MonstroZoo 2026-2027 à Beauval: parcours inclus, visite guidée et tarifs | evenements | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | bd BOUM 2026 à Blois en famille: ateliers, expositions et cinéma | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/center-parcs-les-hauts-de-bruyeres-en-famille-quel-cottage-choisir-apres-la-renovation/ | Center Parcs Les Hauts de Bruyères en famille: quel cottage choisir après la rénovation? | voyages | Chaumont-sur-Tharonne, Loir-et-Cher, Centre-Val de Loire
- /articles/vie-pratique/transport-scolaire-remi-41-que-faire-apres-la-rentree/ | Transport scolaire Rémi 41: que faire après la rentrée ? | vie-pratique | Romorantin-Lanthenay, Loir-et-Cher, Centre-Val de Loire
- /articles/activites/balade-en-bateau-a-saint-dye-sur-loire-journee-pique-nique-ou-crepuscule/ | Balade en bateau à Saint-Dyé-sur-Loire: journée, pique-nique ou crépuscule ? | activites | Saint-Dyé-sur-Loire, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/noel-a-chambord-2026-avec-des-enfants-quand-venir-et-que-prevoir/ | Noël à Chambord 2026 avec des enfants: quand venir et que prévoir | evenements | Chambord, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/beauval-a-la-toussaint-2026-billets-duree-de-visite-et-hebergement/ | Beauval à la Toussaint 2026: billets, durée de visite et hébergement | voyages | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/chambly-kids-festival-2027-quatre-spectacles-pour-les-enfants-dates-et-ages/ | Chambly Kids Festival 2027: quatre spectacles pour les enfants, dates et âges | evenements | Chambly, Oise, Hauts-de-France
- /articles/evenements/festival-tete-de-mioche-2027-a-l-horme-quels-spectacles-choisir-avec-les-enfants/ | Festival Tête de mioche 2027 à L'Horme: quels spectacles choisir avec les enfants ? | evenements | L'Horme, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/festival-mini-kids-2027-aux-orres-trois-jours-pour-les-3-6-ans/ | Festival Mini Kids 2027 aux Orres, trois jours pour les 3-6 ans | evenements | Les Orres, Hautes-Alpes, Provence-Alpes-Côte d’Azur
- /articles/evenements/fete-du-citron-2027-a-menton-en-famille-que-voir-et-combien-prevoir/ | Fête du Citron 2027 à Menton en famille: que voir et combien prévoir ? | evenements | Menton, Alpes-Maritimes, Provence-Alpes-Côte d’Azur

### Historique Radar lié

- opportunity | /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | 2026-10-18T19:49:09.191Z
- opportunity | /articles/sorties/halloween-2026-a-france-miniature-en-famille/ | 2026-10-08T18:25:52.752Z
- opportunity | /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | 2026-10-22T15:49:20.816Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | 2026-10-26T21:31:06.119Z
- refresh | /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | 2026-11-12T18:32:15.897Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | 2026-10-23T19:58:30.214Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/ | 2026-10-27T22:28:21.356Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
