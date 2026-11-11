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
title: "Banyuls-sur-Mer en famille: aquarium et balade hors saison"
subtitle: Un programme sur la Côte Vermeille, avec les bons horaires, le bon billet et une promenade adaptée aux enfants
summary: Aquarium du Biodiversarium, balade au bord de mer et conseils pratiques pour découvrir Banyuls-sur-Mer en famille en automne ou en hiver.
slug: banyuls-sur-mer-en-famille-aquarium-et-balade-hors-saison
status: published
publishedAt: 2026-10-21T18:13:04+02:00
updatedAt: null
category: voyages
readingTime: 5
location:
  city: Banyuls-sur-Mer
  department: Pyrénées-Orientales
  region: Occitanie
topic:
  key: voyages|banyuls-sur-mer|banyuls-sur-mer-en-famille-aquarium-et-balade-hors-saison|2026
  keywords:
    - Banyuls-sur-Mer en famille
    - aquarium Biodiversarium
    - Côte Vermeille hors saison
image:
  src: /images/articles/2026/10/banyuls-sur-mer-en-famille-aquarium-et-balade-hors-saison.webp
  alt: Ensemble des bâtiments de l'Observatoire océanologique de Banyuls-sur-Mer en 2019, site scientifique auquel appartient le Biodiversarium.
sources:
  - title: Biodiversarium - Aquarium scientifique méditerranéen
    url: https://www.biodiversarium.fr/fr/biodiversarium/aquarium.html
  - title: Biodiversarium - Horaires d'ouverture
    url: https://www.biodiversarium.fr/fr/preparez-votre-visite/horaires-d-ouvertures.html
  - title: Biodiversarium - Tarifs individuels
    url: https://www.biodiversarium.fr/fr/preparez-votre-visite/tarifs-individuels.html
  - title: Biodiversarium - Accès aux deux sites
    url: https://www.biodiversarium.fr/fr/preparez-votre-visite/acces2.html
  - title: Biodiversarium - Programme des animations de Toussaint 2026
    url: https://www.biodiversarium.fr/fr/plan-acces/print_article/5.html?flag=1&tmpl=component
  - title: Biodiversarium - Aquarium et jardin, deux sites complémentaires
    url: https://www.biodiversarium.fr/fr/biodiversarium.html
  - title: Office de tourisme de Banyuls-sur-Mer - Le sentier littoral
    url: https://www.banyuls-sur-mer.com/tourisme/decouvrir/banyuls-la-mer-et-ses-tresors/incontournables-de-la-mediterranee/le-sentier-littoral/
affiliate:
  enabled: true
  type: travel
  destination: Banyuls-sur-Mer
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/voyages/(2026)/(10)/banyuls-sur-mer-en-famille-aquarium-et-balade-hors-saison/index.md
  targetSha: 1ab61308fe1d125414947938a09906409d746c32
  targetUrl: /articles/voyages/banyuls-sur-mer-en-famille-aquarium-et-balade-hors-saison/
  decision: "Permettre aux familles de prévoir une visite hivernale réaliste du Biodiversarium: durée, accessibilité avec poussette, coût selon les réductions et choix entre aquarium et jardin."
  affiliationPotential: Conserver les deux hébergements Booking déjà proposés pour un séjour sur la Côte Vermeille; aucune nouvelle offre indispensable.
  gsc:
    retrievedAt: 2026-11-11T02:29:19+01:00
    dataThrough: 2026-11-08
    signal: uncertain
    basis: "Visibilité récente : 25 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-22
    peakEnd: 2026-10-24
    recentStart: 2026-11-06
    recentEnd: 2026-11-08
    peakImpressions: 25
    recentImpressions: 0
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - aquarium banyuls prix
      - aquarium banyuls temps de visite
      - today
---

## Mission retenue
Actualiser les conseils pratiques de l'article existant sur l'aquarium du Biodiversarium et la promenade à Banyuls-sur-Mer hors saison.

## Pourquoi cette mission
Le snapshot GSC montre 25 impressions du 22 au 24 octobre, puis aucune du 6 au 8 novembre; le signal est incertain et n'établit aucune cause SEO. L'article donne déjà les tarifs et les horaires, mais ne précise pas la durée indicative de visite ni la différence d'accessibilité entre l'aquarium et le jardin, utiles pour choisir une sortie avec de jeunes enfants.

## Décision du lecteur
Choisir un programme faisable en une demi-journée avec les enfants, sans acheter inutilement un billet couplé ni prévoir un itinéraire inadapté à une poussette.

## Faits à traiter
Vérifier auprès des responsables la durée indicative de visite de l'aquarium (environ 1 h 30 selon la documentation touristique), son accessibilité aux poussettes, et les contraintes du jardin (escaliers, chemins en pierre, visite guidée sur réservation). Vérifier les catégories de tarifs réduits et justificatifs avant de les citer. Préserver horaires, fermetures de janvier 2027, tarifs familiaux, séparation des deux sites, itinéraire aménagé distinct du sentier littoral, accès TER/bus, photographies et crédits, ainsi que les deux hébergements. Les animations de Toussaint sont passées: ne pas les présenter comme encore disponibles.

## Sources de départ
- https://www.biodiversarium.fr/fr/preparez-votre-visite/horaires-d-ouvertures.html
- https://www.biodiversarium.fr/fr/preparez-votre-visite/tarifs-individuels.html
- https://www.biodiversarium.fr/fr/preparez-votre-visite/acces2.html
- https://www.banyuls-sur-mer.com/tourisme/decouvrir/banyuls-la-mer-et-ses-tresors/incontournables-de-la-mediterranee/laquarium/
- https://www.tourisme-occitanie.com/fr/fiche/equipement/biodiversarium-aquarium-de-banyuls-sur-mer-banyuls-sur-mer_TFOLOILAR066FS0006H/

## Affiliation
Conserver les hébergements Booking déjà intégrés; ne pas ajouter de partenaire pour le billet de l'aquarium sans offre vérifiée.

## Continuations internes
Conserver le lien vers la visite des anchois à Collioure pour une deuxième journée. Ne pas développer un guide complet de randonnée sur le sentier littoral.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/voyages/(2026)/(10)/banyuls-sur-mer-en-famille-aquarium-et-balade-hors-saison/index.md

---
title: "Banyuls-sur-Mer en famille: aquarium et balade hors saison"
subtitle: Un programme sur la Côte Vermeille, avec les bons horaires, le bon billet et une promenade adaptée aux enfants
summary: Aquarium du Biodiversarium, balade au bord de mer et conseils pratiques pour découvrir Banyuls-sur-Mer en famille en automne ou en hiver.
slug: banyuls-sur-mer-en-famille-aquarium-et-balade-hors-saison
status: published
publishedAt: 2026-10-21T18:13:04+02:00
updatedAt: null
category: voyages
readingTime: 5
location:
  city: Banyuls-sur-Mer
  department: Pyrénées-Orientales
  region: Occitanie
topic:
  key: voyages|banyuls-sur-mer|banyuls-sur-mer-en-famille-aquarium-et-balade-hors-saison|2026
  keywords:
    - Banyuls-sur-Mer en famille
    - aquarium Biodiversarium
    - Côte Vermeille hors saison
image:
  src: "/images/articles/2026/10/banyuls-sur-mer-en-famille-aquarium-et-balade-hors-saison.webp"
  alt: "Ensemble des bâtiments de l'Observatoire océanologique de Banyuls-sur-Mer en 2019, site scientifique auquel appartient le Biodiversarium."
sources:
  - title: Biodiversarium - Aquarium scientifique méditerranéen
    url: https://www.biodiversarium.fr/fr/biodiversarium/aquarium.html
  - title: Biodiversarium - Horaires d'ouverture
    url: https://www.biodiversarium.fr/fr/preparez-votre-visite/horaires-d-ouvertures.html
  - title: Biodiversarium - Tarifs individuels
    url: https://www.biodiversarium.fr/fr/preparez-votre-visite/tarifs-individuels.html
  - title: Biodiversarium - Accès aux deux sites
    url: https://www.biodiversarium.fr/fr/preparez-votre-visite/acces2.html
  - title: Biodiversarium - Programme des animations de Toussaint 2026
    url: https://www.biodiversarium.fr/fr/plan-acces/print_article/5.html?flag=1&tmpl=component
  - title: Biodiversarium - Aquarium et jardin, deux sites complémentaires
    url: https://www.biodiversarium.fr/fr/biodiversarium.html
  - title: Office de tourisme de Banyuls-sur-Mer - Le sentier littoral
    url: https://www.banyuls-sur-mer.com/tourisme/decouvrir/banyuls-la-mer-et-ses-tresors/incontournables-de-la-mediterranee/le-sentier-littoral/
affiliate:
  enabled: true
  type: travel
  destination: Banyuls-sur-Mer
---
<!-- article-image-credit -->
*Photo: [ComOOB](https://commons.wikimedia.org/wiki/File:OOB_batiments.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Sur la Côte Vermeille, près de la frontière espagnole, Banyuls-sur-Mer se découvre aussi hors de l'été. Dans cette ville des Pyrénées-Orientales, une famille peut associer la visite de l'aquarium scientifique du Biodiversarium à une promenade face à la Méditerranée. C'est une sortie qui se prête à l'automne et à l'hiver, sous réserve des jours d'ouverture.

## Un aquarium qui raconte la Méditerranée

<!-- article-image-body:01 -->

![Herbier de posidonies photographié sous l'eau à La Ciotat en 2021, exemple de milieu méditerranéen présenté au Biodiversarium sans montrer ses bassins](/images/articles/2026/10/banyuls-sur-mer-en-famille-aquarium-et-balade-hors-saison-body-01.webp)

*Photo: [Frédéric Ducarme](https://commons.wikimedia.org/wiki/File:Posidonia_oceanica_(L).jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Rattaché à l'Observatoire océanologique de Banyuls-sur-Mer, l'aquarium du Biodiversarium montre la vie marine à travers le regard des scientifiques. Ses bassins abritent environ 300 espèces méditerranéennes et évoquent les fonds sableux, les herbiers de posidonie et les milieux rocheux.

Avec les enfants, on peut comparer les animaux des fonds sableux et ceux des rochers, puis découvrir l'utilité des herbiers sous-marins. Le circuit évoque aussi les recherches menées à l'observatoire; certains laboratoires sont visibles depuis le parcours. Le [Biodiversarium présente les différents espaces de l'aquarium](https://www.biodiversarium.fr/fr/biodiversarium/aquarium.html).

## Adapter la journée aux enfants

Avec de jeunes enfants, associez l'aquarium à une courte balade près du port. Avec des plus grands, une animation scientifique ou un parcours à pied plus long peuvent enrichir la journée, si la météo le permet.

**Pendant les vacances de Toussaint 2026, du 17 octobre au 1er novembre inclus**, le Biodiversarium programme deux animations à l'aquarium: le nourrissage commenté du bassin « La côte sableuse », tous les jours à **11h et 15h30**, et le jeu d'enquête « Opération Gobetout », à **14h15 et 16h30**. Ce dernier est conseillé dès 8 ans avec un adulte accompagnateur; les places sont limitées, mais aucune réservation préalable n'est nécessaire. Les animations ne coûtent pas de supplément au billet d'entrée et peuvent être annulées. Vérifiez le [programme officiel de Toussaint 2026](https://www.biodiversarium.fr/fr/plan-acces/print_article/5.html?flag=1&tmpl=component) avant votre visite: ces créneaux ne sont pas valables toute l'année.

## Horaires et billets: éviter une mauvaise surprise

**De septembre à juin**, l'aquarium ouvre normalement du mardi au dimanche, de **10h à 12h30** et de **14h à 18h30**. Le lundi est fermé, sauf pendant les vacances scolaires de la zone C. L'aquarium ferme également les 25 décembre et 1er janvier, ainsi que **du 4 au 29 janvier 2027 inclus**. La billetterie ferme 30 minutes avant le site. Vérifiez les [horaires officiels](https://www.biodiversarium.fr/fr/preparez-votre-visite/horaires-d-ouvertures.html) avant de partir, particulièrement pour un séjour hivernal.

Pour l'aquarium seul, les [tarifs affichés](https://www.biodiversarium.fr/fr/preparez-votre-visite/tarifs-individuels.html) sont de **12 € par adulte**, **8,50 € de 13 à 17 ans** et **6 € de 3 à 12 ans**, avec entrée gratuite avant 3 ans. Comptez donc **36 € pour deux adultes et deux enfants de 3 à 12 ans**.

Le Biodiversarium possède aussi un **Jardin méditerranéen du Mas de la Serre**, mais ce n'est pas une annexe attenante à l'aquarium: il se trouve sur un autre site, sur les hauteurs, et se visite **uniquement avec un guide, sur réservation**. Le jardin est habituellement fermé de novembre à mars. Il faut donc vérifier qu'une visite est effectivement proposée avant de choisir un billet couplé aquarium + jardin, facturé **14,50 € par adulte**, **11 € par adolescent** et **7,50 € par enfant de 3 à 12 ans**. Pour une sortie hivernale limitée à l'aquarium, ce supplément n'a pas d'intérêt. L'organisateur explique la [distinction entre ses deux sites](https://www.biodiversarium.fr/fr/biodiversarium.html).

## Après l'aquarium, marcher sans surestimer le sentier côtier

<!-- article-image-body:02 -->

![Promenade aménagée du front de mer de Banyuls-sur-Mer bordée de palmiers, pins parasols et platanes en 2018](/images/articles/2026/10/banyuls-sur-mer-en-famille-aquarium-et-balade-hors-saison-body-02.webp)

*Photo: [Zaloudock](https://commons.wikimedia.org/wiki/File:3_essences_d%27arbres_embl%C3%A9matiques_d%27ici_bordent_le_front_de_mer_de_Banyuls.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Pour une balade tranquille, restez près du front de mer, du port et des Allées Maillol. Vous pourrez écourter le parcours si le vent se lève.

Le **sentier littoral** demande une autre préparation. Au départ de Banyuls, il longe notamment le port et les Allées Maillol avant de poursuivre dans la garrigue vers Cerbère, avec des portions plus sportives. L'[office de tourisme](https://www.banyuls-sur-mer.com/tourisme/decouvrir/banyuls-la-mer-et-ses-tresors/incontournables-de-la-mediterranee/le-sentier-littoral/) rappelle que le parcours côtier complet est une randonnée. Il répertorie aussi une traversée de Banyuls de 4 km, annoncée praticable avec poussette ou fauteuil roulant: cette indication concerne **cet itinéraire identifié**, pas l'ensemble des sentiers en bord de falaise.

Avec une poussette ou de jeunes marcheurs, privilégiez les espaces aménagés en ville. Si vous envisagez un tronçon de randonnée, examinez le tracé, le dénivelé et l'état du terrain, et renoncez en cas de vent fort ou de pluie.

## Venir et choisir entre une journée et une nuit sur place

L'aquarium est situé au **1 avenue Pierre Fabre**. Selon les [indications d'accès du Biodiversarium](https://www.biodiversarium.fr/fr/preparez-votre-visite/acces2.html), la gare de Banyuls-sur-Mer se trouve à environ **15 minutes à pied**, avec des liaisons TER; la **ligne de bus 400** dessert également le secteur Perpignan-Cerbère. En voiture, l'accès se fait par la D914. Le parking voisin est indiqué comme payant du **1er avril au 30 octobre**. Le Jardin méditerranéen, si vous avez réservé une visite, se rejoint séparément au Mas Reig, route des Crêtes.

Si vous prolongez la sortie en week-end, le choix entre hôtel et appartement dépend surtout du nombre de voyageurs et de la possibilité de préparer les repas. Comparez l'emplacement, la capacité réelle et les conditions de réservation; les équipements extérieurs peuvent être fermés hors saison.

Pour une nuit à l'hôtel, [Le Catalan, à Banyuls-sur-Mer](https://www.booking.com/hotel/fr/le-catalan.fr.html) propose notamment des chambres triples, un restaurant et un parking. L'établissement est situé sur les hauteurs, à une dizaine de minutes à pied du centre. Vérifiez la capacité de la chambre retenue pour votre famille.

Pour quatre voyageurs préférant disposer d'une cuisine, [cet appartement T3 à deux chambres près de la plage des Elmes](https://www.booking.com/hotel/fr/appartement-banyuls-sur-mer-2-pieces-4-personnes-fr-1-309-281.fr.html) constitue une autre option. Sa fiche annonce une caution de 500 € et des conditions de ménage à vérifier avant réservation. Les tarifs et disponibilités des deux hébergements dépendent des dates.

Si vous passez une deuxième journée sur la Côte Vermeille, une [courte visite autour des anchois à Collioure](https://www.fam-space.fr/articles/cuisine/anchois-de-collioure-quelle-visite-choisir-avec-des-enfants/) peut compléter le programme, selon les jours d'ouverture des ateliers.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/ile-de-brehat-en-famille-hors-saison-bateau-balades-et-marees/ | Île de Bréhat en famille hors saison: bateau, balades et marées | sorties | Île-de-Bréhat, Côtes-d'Armor, Bretagne
- /articles/voyages/la-parata-et-les-iles-sanguinaires-en-famille-balades-et-sortie-en-mer/ | La Parata et les îles Sanguinaires en famille: balades et sortie en mer | voyages | Ajaccio, Corse-du-Sud, Corse
- /articles/activites/aquarium-de-touraine-en-famille-que-voir-avec-les-enfants/ | Aquarium de Touraine en famille: que voir avec les enfants ? | activites | Lussault-sur-Loire, Indre-et-Loire, Centre-Val de Loire
- /articles/activites/balade-en-bateau-a-saint-dye-sur-loire-journee-pique-nique-ou-crepuscule/ | Balade en bateau à Saint-Dyé-sur-Loire: journée, pique-nique ou crépuscule ? | activites | Saint-Dyé-sur-Loire, Loir-et-Cher, Centre-Val de Loire
- /articles/sorties/rouen-sur-mer-2026-en-famille/ | Rouen sur Mer 2026: jeux, ateliers et plage urbaine sur les quais | sorties | Rouen, Seine-Maritime, Normandie
- /articles/sorties/paleospace-de-villers-sur-mer-en-famille-fossiles-planetarium-et-visites/ | Paléospace de Villers-sur-Mer en famille: fossiles, planétarium et visites | sorties | Villers-sur-Mer, Calvados, Normandie
- /articles/sorties/chasse-tresor-lisle-sur-tarn-famille-2026/ | Chasse au trésor à Lisle-sur-Tarn: une balade gourmande en famille | sorties | Lisle-sur-Tarn, Tarn, Occitanie
- /articles/activites/o-fun-park-en-famille-en-basse-saison-2026-activites-tarifs-et-ages/ | O'Fun Park en famille en basse saison 2026: activités, tarifs et âges | activites | Le Bernard, Vendée, Pays de la Loire
- /articles/voyages/banyuls-sur-mer-en-famille-aquarium-et-balade-hors-saison/ | Banyuls-sur-Mer en famille: aquarium et balade hors saison | voyages | Banyuls-sur-Mer, Pyrénées-Orientales, Occitanie
- /articles/evenements/fetes-de-l-ours-2027-quelle-fete-choisir-en-famille-dans-les-pyrenees-orientales/ | Fêtes de l’Ours 2027: quelle fête choisir en famille dans les Pyrénées-Orientales ? | evenements | Pyrénées-Orientales, Occitanie
- /articles/sorties/forteresse-de-salses-en-famille-ce-que-change-le-nouveau-parcours/ | Forteresse de Salses en famille: ce que change le nouveau parcours | sorties | Salses-le-Château, Pyrénées-Orientales, Occitanie
- /articles/bons-plans/musee-de-tautavel-moins-cher-avec-lio-le-bon-plan-a-connaitre/ | Musée de Tautavel moins cher avec liO: le bon plan à connaître | bons-plans | Tautavel, Pyrénées-Orientales, Occitanie
- /articles/parentalite/quel-laep-choisir-a-perpignan-selon-l-age-et-le-jour/ | Quel LAEP choisir à Perpignan selon l'âge et le jour ? | parentalite | Perpignan, Pyrénées-Orientales, Occitanie
- /articles/cuisine/anchois-de-collioure-quelle-visite-choisir-avec-des-enfants/ | Anchois de Collioure: quelle visite choisir avec des enfants? | cuisine | Collioure, Pyrénées-Orientales, Occitanie
- /articles/maison/renover-une-facade-a-perpignan-jusqu-a-40-d-aide-selon-le-secteur/ | Rénover une façade à Perpignan: jusqu'à 40 % d'aide selon le secteur | maison | Perpignan, Pyrénées-Orientales, Occitanie
- /articles/vie-pratique/location-de-voiture-a-perpignan-en-famille-sieges-enfant-agences-et-bons-reflexes/ | Louer une voiture à Perpignan: aéroport, gare et stationnement | vie-pratique | Perpignan, Pyrénées-Orientales, Occitanie
- /articles/sorties/insectes-compagnie-perpignan-famille-2026/ | Insectes et compagnie à Perpignan: trois visites ludiques en famille en août | sorties | Perpignan, Pyrénées-Orientales, Occitanie
- /articles/voyages/refuge-de-l-arche-en-famille-decouvrir-les-animaux-recueillis-et-preparer-sa-visite/ | Refuge de l’Arche en famille: découvrir les animaux recueillis et préparer sa visite | voyages | Château-Gontier-sur-Mayenne, Mayenne, Pays de la Loire
- /articles/voyages/la-vallee-des-saints-a-carnoet-visiter-les-geants-de-granit-en-famille/ | La Vallée des Saints à Carnoët: visiter les géants de granit en famille | voyages | Carnoët, Côtes-d'Armor, Bretagne
- /articles/voyages/week-end-dans-l-auxois-en-famille-chateau-de-bussy-rabutin-et-semur-en-auxois/ | Week-end dans l'Auxois en famille: château de Bussy-Rabutin et Semur-en-Auxois | voyages | Côte-d'Or, Bourgogne-Franche-Comté
- /articles/voyages/musee-du-jouet-de-poissy-en-famille-visite-tarifs-et-exposition-sur-le-precinema/ | Musée du Jouet de Poissy en famille: visite, tarifs et exposition sur le précinéma | voyages | Poissy, Yvelines, Île-de-France
- /articles/voyages/saul-en-famille-preparer-un-sejour-au-coeur-de-la-foret-guyanaise/ | Saül en famille: préparer un séjour au cœur de la forêt guyanaise | voyages | Saül, Guyane, Guyane

### Historique Radar lié

- Aucun historique lié.

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
