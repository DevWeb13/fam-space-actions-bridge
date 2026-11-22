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
title: "Saint-Nicolas-de-Port 2026 en famille: village, défilé et procession"
subtitle: Le 5 décembre, les horaires confirmés et les repères pour venir avec les enfants
summary: "Village gratuit de 14 h à 19 h, défilé de chars et procession aux flambeaux: les rendez-vous de la Saint-Nicolas 2026 à Saint-Nicolas-de-Port et les informations encore à confirmer."
category: evenements
location:
  city: Saint-Nicolas-de-Port
  department: Meurthe-et-Moselle
  region: Grand Est
image:
  src: /images/articles/2026/11/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille.webp
  alt: Procession aux flambeaux de la Saint-Nicolas dans la basilique de Saint-Nicolas-de-Port, photographiée en décembre 2007.
sources:
  - title: Ville de Saint-Nicolas-de-Port - Festivités de la Saint-Nicolas, 5 décembre 2026
    url: https://www.saintnicolasdeport.com/fr/ev/1263095/792846/festivites-de-la-saint-nicolas-1
  - title: Ville de Saint-Nicolas-de-Port - Village de la Saint-Nicolas, 14 h à 19 h
    url: https://www.saintnicolasdeport.com/fr/nw/1263056/3010347/village-de-la-saint-nicolas-recherche-de-producteurs-et-artisans-en-gastronomie
  - title: Ville de Saint-Nicolas-de-Port - Se déplacer
    url: https://saintnicolasdeport.com/fr/rb/1023453/se-deplacer-19
eventEndsAt: 2026-12-05
topic:
  key: evenements|saint-nicolas-de-port|saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille|2026
  keywords:
    - Saint-Nicolas-de-Port 5 décembre 2026 en famille
    - festivités Saint Nicolas de Port défilé 2026
    - village Saint Nicolas de Port procession aux flambeaux
slug: saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille
status: published
publishedAt: 2026-11-02T23:31:49.325Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Saint-Nicolas-de-Port
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(11)/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/index.md
  targetSha: 308adb46f79678747d76656574ba696a4212844e
  targetUrl: /articles/evenements/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/
  decision: Choisir entre village, défilé et procession le 5 décembre, avec les horaires, lieux et contraintes de retour réellement annoncés pour 2026.
  affiliationPotential: Conserver l'hébergement Booking.com déjà présent pour les familles venant de loin; aucune billetterie pour les festivités gratuites.
  gsc:
    retrievedAt: 2026-11-22T01:30:56+01:00
    dataThrough: 2026-11-19
    signal: needs_query_check
    basis: "Visibilité récente : 31 impressions sur trois jours, puis 9 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-11-10
    peakEnd: 2026-11-12
    recentStart: 2026-11-17
    recentEnd: 2026-11-19
    peakImpressions: 31
    recentImpressions: 9
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Saint-Nicolas-de-Port 5 décembre 2026 en famille
      - festivités Saint Nicolas de Port défilé 2026
      - village Saint Nicolas de Port procession aux flambeaux
---

## Mission retenue
Actualiser le guide familial des festivités de la Saint-Nicolas 2026 à Saint-Nicolas-de-Port, le samedi 5 décembre.

## Pourquoi cette mission
L'article du 2 novembre indique que les horaires du défilé et de la procession restent inconnus. La Ville a désormais mis en ligne un programme détaillé 2026, un flyer et un plan sur sa page officielle. Lacune éditoriale vérifiable, indépendante de la baisse GSC (31 puis 9 impressions, cause non établie).

## Décision du lecteur
Permettre aux parents de choisir le village de l'après-midi, le défilé ou la procession selon l'âge des enfants, l'attente, les déplacements et l'heure de retour.

## Faits à traiter
Lire intégralement le programme municipal 2026 et son flyer; relever seulement les horaires, parcours, animations, accès, stationnement et éventuelles restrictions effectivement confirmés. Distinguer le début général à 14 h de l'heure du défilé. Conserver le village gratuit de 14 h à 19 h, les conseils poussette et froid, les lignes SUB 23/24 sous réserve des horaires du jour, la différence avec Nancy, les deux crédits photographiques et l'hébergement existant. Ne pas inventer les horaires manquants ni reprendre ceux de 2025.

## Sources de départ
- Ville de Saint-Nicolas-de-Port, programme détaillé 2026, flyer et plan: https://saintnicolasdeport.com/fr/ev/1263095/792846/festivites-de-la-saint-nicolas-1
- Ville, village de 14 h à 19 h: https://www.saintnicolasdeport.com/fr/nw/1263056/3010347/village-de-la-saint-nicolas-recherche-de-producteurs-et-artisans-en-gastronomie

## Affiliation
Conserver la maison d'hôtes Les Berges de l'Ô via Booking.com si les caractéristiques et conditions restent exactes; pas d'affiliation naturelle pour l'événement gratuit.

## Continuations internes
- Garder le lien vers l'article distinct consacré aux fêtes de Saint-Nicolas à Nancy, sans mélanger les programmes.
- Ne pas réécrire les informations générales déjà correctes sur les transports et la nuitée.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(11)/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/index.md

---
title: "Saint-Nicolas-de-Port 2026 en famille: village, défilé et procession"
subtitle: Le 5 décembre, les horaires confirmés et les repères pour venir avec les enfants
summary: "Village gratuit de 14 h à 19 h, défilé de chars et procession aux flambeaux: les rendez-vous de la Saint-Nicolas 2026 à Saint-Nicolas-de-Port et les informations encore à confirmer."
category: evenements
location:
  city: Saint-Nicolas-de-Port
  department: Meurthe-et-Moselle
  region: Grand Est
image:
  src: "/images/articles/2026/11/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille.webp"
  alt: "Procession aux flambeaux de la Saint-Nicolas dans la basilique de Saint-Nicolas-de-Port, photographiée en décembre 2007."
sources:
  - title: Ville de Saint-Nicolas-de-Port - Festivités de la Saint-Nicolas, 5 décembre 2026
    url: https://www.saintnicolasdeport.com/fr/ev/1263095/792846/festivites-de-la-saint-nicolas-1
  - title: Ville de Saint-Nicolas-de-Port - Village de la Saint-Nicolas, 14 h à 19 h
    url: https://www.saintnicolasdeport.com/fr/nw/1263056/3010347/village-de-la-saint-nicolas-recherche-de-producteurs-et-artisans-en-gastronomie
  - title: Ville de Saint-Nicolas-de-Port - Se déplacer
    url: https://saintnicolasdeport.com/fr/rb/1023453/se-deplacer-19
eventEndsAt: 2026-12-05
topic:
  key: evenements|saint-nicolas-de-port|saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille|2026
  keywords:
    - Saint-Nicolas-de-Port 5 décembre 2026 en famille
    - festivités Saint Nicolas de Port défilé 2026
    - village Saint Nicolas de Port procession aux flambeaux
slug: saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille
status: published
publishedAt: 2026-11-02T23:31:49.325Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Saint-Nicolas-de-Port
---
<!-- article-image-credit -->
*Photo: [Antoine Taveneaux](https://commons.wikimedia.org/wiki/File:Procession-saint-nicolas4.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Le **samedi 5 décembre 2026**, Saint-Nicolas-de-Port, en Meurthe-et-Moselle, fête la Saint-Nicolas avec un village, des spectacles de rue, un défilé de chars et une procession aux flambeaux dans la basilique. **L'accès aux festivités est gratuit.** Pour une sortie avec de jeunes enfants, le village de l'après-midi est le rendez-vous dont les horaires sont déjà connus; le défilé et la procession demandent encore de vérifier le programme détaillé.

## Le village de 14 h à 19 h: le rendez-vous le plus facile à organiser

Le **Village de la Saint-Nicolas** se tiendra **place des Droits de l'Homme, de 14 h à 19 h**, le 5 décembre. La Ville annonce également des spectacles et des déambulations pendant les festivités, mais ne précise pas encore leurs horaires individuels.

Avec un bébé ou un enfant de maternelle, venir dans l'après-midi permet de profiter des stands sans devoir attendre les rendez-vous du soir. La Ville a lancé un appel à des producteurs et artisans pour proposer notamment de la petite restauration; **la liste définitive des stands n'est pas encore confirmée**. Prévoyez donc une autre solution pour le repas si nécessaire. L'accès est gratuit, mais les consommations et les achats auprès des exposants restent payants.

## Défilé de chars et procession aux flambeaux: deux moments distincts

<!-- article-image-body:01 -->

![Basilique Saint-Nicolas-de-Port illuminée de nuit, photographiée hors des festivités de 2026.](/images/articles/2026/11/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille-body-01.webp)

*Photo: [Antoine Taveneaux](https://commons.wikimedia.org/wiki/File:Basilique_Saint-Nicolas_de-Port_de_nuit_01.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le programme municipal annonce un **défilé de chars et de groupes musicaux**, ainsi que la **procession traditionnelle aux flambeaux dans la basilique**. Le premier est un spectacle de rue; la seconde est une cérémonie de tradition religieuse.

Si les enfants veulent surtout voir les chars, choisissez le défilé et repérez son parcours lorsqu'il sera publié. La procession peut intéresser les familles souhaitant découvrir cette tradition, en tenant compte de l'attente et d'un retour potentiellement tardif.

**Au 3 novembre 2026, la Ville n'indique pas encore l'heure précise ni le parcours du défilé, ni l'horaire de la procession.** La fiche municipale affiche 14 h pour le début général des festivités: ce n'est pas une heure de départ confirmée pour les chars. Ne reprenez pas les horaires d'une ancienne édition. L'organisateur propose aussi l'application « St Nicolas » pour préparer la visite.

## Poussette, foule et services sur place

La Ville présente la fête comme un événement qui rassemble de nombreux visiteurs. En cas de forte affluence, un porte-bébé peut être plus maniable qu'une poussette, selon l'âge de l'enfant. Pour les animations du soir, prévoyez des vêtements chauds et anticipez le trajet du retour.

**Les dispositifs propres au 5 décembre pour les rues fermées, le stationnement, les toilettes, les tables à langer et l'accessibilité des différents espaces ne sont pas encore détaillés.** Si ces services conditionnent votre sortie, vérifiez les dernières annonces municipales avant de partir.

## Venir à Saint-Nicolas-de-Port et repartir

Saint-Nicolas-de-Port est une commune distincte de Nancy. La Ville mentionne les **bus SUB lignes 23 et 24**: la ligne 23 relie notamment Saint-Nicolas-de-Port à Nancy (Artem), et la 24 dessert notamment Laneuveville. La gare ferroviaire la plus proche se trouve dans la commune voisine de **Varangéville**.

Ces dessertes habituelles ne garantissent pas un retour après la procession. Vérifiez les horaires du **samedi 5 décembre**, les derniers départs et les éventuelles déviations. En voiture, attendez les consignes de circulation et de stationnement propres à la fête avant de choisir un parking.

Pour les villages, les illuminations et le grand défilé **à Nancy**, notre [guide des Fêtes de Saint-Nicolas 2026 à Nancy](https://www.fam-space.fr/articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/) présente le programme de cette autre ville, sans confondre les deux événements.

## Dormir sur place pour prolonger la soirée

Pour une famille venant de loin, une nuit sur place peut éviter un retour tardif. La maison d'hôtes [Les Berges de l'Ô sur Booking.com](https://www.booking.com/hotel/fr/les-berges-de-l-a.fr.html), au **10 ruelle du Moulin**, propose des chambres familiales et un parking privé gratuit. L'arrivée est annoncée **de 17 h à 21 h**: il faut organiser l'enregistrement en fonction des festivités.

L'établissement accepte les enfants, mais **ceux de plus de 4 ans sont facturés au tarif adulte**. Un lit bébé est annoncé gratuit sur demande; les lits d'appoint sont payants et soumis à disponibilité. Renseignez l'âge de chaque enfant pour vérifier les couchages, le tarif, les conditions d'annulation et la disponibilité réelle pour la nuit du **5 au 6 décembre 2026**.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | Fêtes de Saint-Nicolas 2026 à Nancy en famille: défilé, villages et animations | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | Saint-Nicolas 2026 à Carcassonne: campements médiévaux et marche aux flambeaux en famille | evenements | Carcassonne, Aude, Occitanie
- /articles/evenements/saint-nicolas-2026-a-epinal-en-famille-defile-du-5-decembre-ou-marche-de-noel/ | Saint-Nicolas 2026 à Épinal: cortège du 5 décembre et marché de Noël en famille | evenements | Épinal, Vosges, Grand Est
- /articles/activites/port-aux-cerises-a-draveil-quelle-activite-choisir-selon-l-age-des-enfants/ | Port aux Cerises à Draveil: quelle activité choisir selon l'âge des enfants? | activites | Draveil, Essonne, Île-de-France
- /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | Noël à Nice 2026 en famille: village, spectacles et crèche | evenements | Nice, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/cuisine/foire-aux-harengs-de-dieppe-2026-quoi-gouter-et-comment-preparer-la-journee/ | Foire aux Harengs de Dieppe 2026: quoi goûter et comment préparer la journée | cuisine | Dieppe, Seine-Maritime, Normandie
- /articles/voyages/saint-bertrand-de-comminges-avec-des-enfants-village-seul-ou-grande-boucle-a-pied/ | Saint-Bertrand-de-Comminges avec des enfants: village seul ou grande boucle à pied? | voyages | Saint-Bertrand-de-Comminges, Haute-Garonne, Occitanie
- /articles/sorties/aquarium-de-vendee-en-famille-des-poissons-de-nos-cotes-aux-mers-tropicales/ | Aquarium de Vendée en famille: des poissons de nos côtes aux mers tropicales | sorties | Talmont-Saint-Hilaire, Vendée, Pays de la Loire
- /articles/evenements/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/ | Saint-Nicolas-de-Port 2026 en famille: village, défilé et procession | evenements | Saint-Nicolas-de-Port, Meurthe-et-Moselle, Grand Est
- /articles/cuisine/cuisiner-local-en-meurthe-et-moselle-producteurs-paniers-et-idees-de-repas/ | Cuisiner local en Meurthe-et-Moselle: producteurs, paniers et idées de repas | cuisine | Meurthe-et-Moselle, Grand Est
- /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | Ludothèques du Grand Nancy: où jouer en famille et emprunter des jeux | parentalite | Meurthe-et-Moselle, Grand Est
- /articles/maison/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/ | Meubles d'occasion en Meurthe-et-Moselle: où acheter, donner et réparer ? | maison | Meurthe-et-Moselle, Grand Est
- /articles/vie-pratique/se-deplacer-a-nancy-en-famille-gratuites-bus-et-parkings-relais/ | Se déplacer à Nancy en famille: gratuités, bus et parkings relais | vie-pratique | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/activites/patrimoine-en-partage-a-luneville-faut-il-inscrire-son-enfant-pour-toute-la-semaine/ | Patrimoine en partage à Lunéville: faut-il inscrire son enfant pour toute la semaine? | activites | Lunéville, Meurthe-et-Moselle, Grand Est
- /articles/evenements/nancy-jazz-pulsations-2026-en-famille-spectacles-enfants-tarifs-et-conseils/ | Nancy Jazz Pulsations 2026 en famille: spectacles enfants, tarifs et conseils | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/evenements/festival-contes-et-rencontres-2027-en-lozere-quels-spectacles-voir-en-famille/ | Festival Contes et Rencontres 2027 en Lozère: quels spectacles voir en famille ? | evenements | Lozère, Occitanie
- /articles/evenements/lumieres-d-afrique-2026-2027-a-sigean-les-lanternes-en-famille/ | Lumières d’Afrique 2026-2027 à Sigean: les lanternes en famille | evenements | Sigean, Aude, Occitanie
- /articles/evenements/natur-armor-2027-a-paimpol-preparer-sa-visite-en-famille/ | Natur’Armor 2027 à Paimpol: préparer sa visite en famille | evenements | Paimpol, Côtes-d'Armor, Bretagne
- /articles/evenements/noel-a-brive-2026-en-famille-animations-dates-et-parcours/ | Noël à Brive 2026 en famille: animations, dates et parcours | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine
- /articles/evenements/musee-maurice-denis-en-famille-decouvrir-les-nabis-a-saint-germain-en-laye/ | Musée Maurice Denis en famille: découvrir les Nabis à Saint-Germain-en-Laye | evenements | Saint-Germain-en-Laye, Yvelines, Île-de-France
- /articles/evenements/carnaval-de-guadeloupe-2027-preparer-une-premiere-sortie-avec-ses-enfants/ | Carnaval de Guadeloupe 2027: préparer une première sortie avec ses enfants | evenements | Guadeloupe
- /articles/evenements/niepce-et-apres-une-exposition-photo-a-decouvrir-en-famille-a-chalon-sur-saone/ | Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône | evenements | Chalon-sur-Saône, Saône-et-Loire, Bourgogne-Franche-Comté

### Historique Radar lié

- opportunity | /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | 2026-10-19T16:47:56.278Z
- refresh | /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | 2026-11-09T12:50:22.314Z
- refresh | /articles/maison/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/ | 2026-11-12T01:28:37.978Z
- opportunity | /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | 2026-10-25T04:31:33.540Z
- opportunity | /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | 2026-10-27T00:35:14.931Z
- refresh | /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | 2026-11-17T06:29:57.590Z
- opportunity | /articles/evenements/saint-nicolas-2026-a-epinal-en-famille-defile-du-5-decembre-ou-marche-de-noel/ | 2026-11-01T21:31:28.158Z
- opportunity | /articles/evenements/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/ | 2026-11-02T23:31:49.432Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
