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
title: "Biotropica en famille à Val-de-Reuil: animaux, tarifs et visite par temps de pluie"
subtitle: Une serre tropicale et un vaste parc extérieur à découvrir dans l'Eure, toute l'année
summary: Biotropica, à Val-de-Reuil dans l'Eure, associe serre tropicale et espaces animaliers dehors. Tarifs, horaires et conseils pour une visite en famille.
slug: biotropica-en-famille-a-val-de-reuil-animaux-tarifs-et-visite-par-temps-de-pluie
status: published
publishedAt: 2026-10-20T12:10:23+02:00
updatedAt: null
category: activites
readingTime: 5
location:
  city: Val-de-Reuil
  department: Eure
  region: Normandie
topic:
  key: activites|val-de-reuil|biotropica-en-famille-a-val-de-reuil-animaux-tarifs-et-visite-par-temps-de-pluie|2026
  keywords:
    - Biotropica en famille
    - Biotropica Val-de-Reuil tarifs
    - parc animalier Eure
image:
  src: /images/articles/2026/10/biotropica-en-famille-a-val-de-reuil-animaux-tarifs-et-visite-par-temps-de-pluie.webp
  alt: Le lac des Deux-Amants sur la base de loisirs de Léry-Poses, près de Biotropica, avec la Seine au premier plan, photographié en 2015.
sources:
  - title: Biotropica - Le parc de Biotropica
    url: https://www.biotropica.fr/le-parc-de-biotropica/
  - title: Biotropica - Nos univers
    url: https://www.biotropica.fr/nos-univers/
  - title: Biotropica - Tarifs et horaires
    url: https://www.biotropica.fr/tarifs-et-horaires/
  - title: Biotropica - Foire aux questions
    url: https://www.biotropica.fr/faq/
  - title: Biotropica - Accès au parc
    url: https://www.biotropica.fr/acces-au-parc/
affiliate:
  enabled: true
  type: travel
  destination: Val-de-Reuil
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/activites/(2026)/(10)/biotropica-en-famille-a-val-de-reuil-animaux-tarifs-et-visite-par-temps-de-pluie/index.md
  targetSha: ea0c067decd6f8329062d271c392a82cfdb09357
  targetUrl: /articles/activites/biotropica-en-famille-a-val-de-reuil-animaux-tarifs-et-visite-par-temps-de-pluie/
  decision: Permettre à une famille de choisir entre billets à la journée, tarifs réduits et pass annuels selon le nombre de visites, en intégrant le parking au budget.
  affiliationPotential: Conserver les deux pistes d'hébergement Booking.com existantes, en vérifiant que les établissements décrits correspondent réellement aux pages liées ; aucune billetterie partenaire précise confirmée.
  gsc:
    retrievedAt: 2026-11-07T02:32:02+01:00
    dataThrough: 2026-11-04
    signal: needs_query_check
    basis: "Visibilité récente : 55 impressions sur trois jours, puis 7 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-21
    peakEnd: 2026-10-23
    recentStart: 2026-11-02
    recentEnd: 2026-11-04
    peakImpressions: 55
    recentImpressions: 7
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Biotropica en famille
      - Biotropica Val-de-Reuil tarifs
      - parc animalier Eure
---

## Mission retenue
Améliorer le guide existant Biotropica à Val-de-Reuil, sans créer de nouvel article.

## Pourquoi cette mission
Le snapshot GSC montre 55 impressions sur trois jours puis 7, sans établir la cause de la baisse. Lacune indépendante : l'article ne présente que les billets ordinaires alors que le parc propose aussi des tarifs réduits et des abonnements annuels, utiles aux familles qui hésitent entre une sortie unique et plusieurs visites.

## Décision du lecteur
Choisir la formule réellement adaptée à la composition familiale et à la fréquence des visites, avec le coût du stationnement.

## Faits à traiter
- Billets actuels : 18,50 € dès 12 ans, 13,50 € de 3 à 11 ans, gratuit avant 3 ans.
- Tarifs PSH sur justificatif : 16 € dès 12 ans et 11 € de 3 à 11 ans ; la FAQ précise la gratuité de l'accompagnant lorsque la carte mentionne un besoin d'accompagnement.
- Abonnements nominatifs valables un an : 55 € adulte, 40 € enfant ; comparaison simple avec les billets ordinaires, rentable à partir de trois visites selon la FAQ, hors stationnement.
- Parking 6 € par voiture à chaque venue ; un pass parking distinct existe selon la FAQ, sans prix confirmé.
- Préserver intégralement les horaires, la fermeture anticipée des caisses et espaces extérieurs, la distinction serre/extérieurs sous la pluie, les animaux, la durée, la navette, les poussettes, tables à langer, micro-ondes, pique-nique, accessibilité, images et crédits.
- Vérifier les noms des deux hôtels face aux URL Booking.com avant toute modification : les slugs des liens actuels ne correspondent pas clairement aux noms affichés.

## Sources de départ
- Biotropica, tarifs et horaires : https://www.biotropica.fr/tarifs-et-horaires/
- Biotropica, FAQ (pass annuel, accompagnant et parking) : https://www.biotropica.fr/faq/
- Biotropica, accès : https://www.biotropica.fr/acces-au-parc/

## Affiliation
Conserver les offres d'hébergement pertinentes après contrôle de leur correspondance exacte ; ne pas inventer de billetterie affiliée.

## Continuations internes
Conserver le lien existant vers Lyons-la-Forêt sans développer ce second sujet.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/activites/(2026)/(10)/biotropica-en-famille-a-val-de-reuil-animaux-tarifs-et-visite-par-temps-de-pluie/index.md

---
title: "Biotropica en famille à Val-de-Reuil: animaux, tarifs et visite par temps de pluie"
subtitle: Une serre tropicale et un vaste parc extérieur à découvrir dans l'Eure, toute l'année
summary: Biotropica, à Val-de-Reuil dans l'Eure, associe serre tropicale et espaces animaliers dehors. Tarifs, horaires et conseils pour une visite en famille.
slug: biotropica-en-famille-a-val-de-reuil-animaux-tarifs-et-visite-par-temps-de-pluie
status: published
publishedAt: 2026-10-20T12:10:23+02:00
updatedAt: null
category: activites
readingTime: 5
location:
  city: Val-de-Reuil
  department: Eure
  region: Normandie
topic:
  key: activites|val-de-reuil|biotropica-en-famille-a-val-de-reuil-animaux-tarifs-et-visite-par-temps-de-pluie|2026
  keywords:
    - Biotropica en famille
    - Biotropica Val-de-Reuil tarifs
    - parc animalier Eure
image:
  src: "/images/articles/2026/10/biotropica-en-famille-a-val-de-reuil-animaux-tarifs-et-visite-par-temps-de-pluie.webp"
  alt: "Le lac des Deux-Amants sur la base de loisirs de Léry-Poses, près de Biotropica, avec la Seine au premier plan, photographié en 2015."
sources:
  - title: Biotropica - Le parc de Biotropica
    url: https://www.biotropica.fr/le-parc-de-biotropica/
  - title: Biotropica - Nos univers
    url: https://www.biotropica.fr/nos-univers/
  - title: Biotropica - Tarifs et horaires
    url: https://www.biotropica.fr/tarifs-et-horaires/
  - title: Biotropica - Foire aux questions
    url: https://www.biotropica.fr/faq/
  - title: Biotropica - Accès au parc
    url: https://www.biotropica.fr/acces-au-parc/
affiliate:
  enabled: true
  type: travel
  destination: Val-de-Reuil
---
<!-- article-image-credit -->
*Photo: [Eponimm](https://commons.wikimedia.org/wiki/File:Lac_des_Deux-Amants.JPG) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Val-de-Reuil, dans l'Eure, **Biotropica** réunit une grande serre tropicale et un parcours animalier en plein air. Situé sur la base de loisirs de Léry-Poses, le parc se visite même en automne ou en hiver. Par temps de pluie, la serre garde tout son intérêt, mais le reste du parcours n'est pas couvert.

## Une serre tropicale et des animaux en plein air

<!-- article-image-body:02 -->

![Portrait d'un panda roux photographié au parc animalier de Sainte-Croix en Moselle, et non à Biotropica](/images/articles/2026/10/biotropica-en-famille-a-val-de-reuil-animaux-tarifs-et-visite-par-temps-de-pluie-body-02.webp)

*Photo: [Musicaline](https://commons.wikimedia.org/wiki/File:Panda_roux_DSCF1218.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

<!-- article-image-body:01 -->

![Dragon de Komodo photographié au Tropiquarium de Servion en Suisse, illustration de l'espèce et non d'un animal de Biotropica](/images/articles/2026/10/biotropica-en-famille-a-val-de-reuil-animaux-tarifs-et-visite-par-temps-de-pluie-body-01.webp)

*Photo: [Marie-Noëlle Charles](https://commons.wikimedia.org/wiki/File:Padar,_dragon_de_Komodo.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

La [serre tropicale de 5 000 m²](https://www.biotropica.fr/le-parc-de-biotropica/) abrite une végétation dense et des animaux parfois difficiles à voir ailleurs: paresseux, tamarins, loriquets, grenouilles colorées ou encore dragon de Komodo. C'est la partie la plus agréable lorsque le temps est froid ou humide.

Le reste du parc s'étend sur environ **10 hectares à l'extérieur**, avec notamment des pandas roux dans le Jardin d'Asie, des manchots de Humboldt, des suricates, des kangourous et une ferme des enfants. Le [détail des différents univers](https://www.biotropica.fr/nos-univers/) permet de repérer les animaux qui intéressent le plus votre famille avant d'arriver.

Cette différence entre intérieur et extérieur est essentielle pour choisir sa journée: par temps de pluie, la serre conserve tout son intérêt, mais une visite limitée à celle-ci ne permet pas de voir l'ensemble du parc. Pour profiter des manchots, des pandas roux ou des grands espaces, prévoyez des vêtements adaptés.

## Combien de temps prévoir avec des enfants?

Biotropica conseille **3 à 4 heures au minimum** pour découvrir l'ensemble des espaces. Mieux vaut prévoir davantage si vos enfants aiment observer longtemps les animaux ou si vous voulez assister à un nourrissage commenté.

Avec de jeunes enfants, commencez par l'univers qui les attire le plus, puis alternez les parties extérieures et la serre selon leur fatigue et la météo. Le lac des pélicans offre, par exemple, une promenade plus longue; la ferme des enfants se prête à un arrêt plus court. Le parc organise des présentations autour de l'alimentation des animaux. Leurs horaires peuvent varier: consultez le programme du jour plutôt que d'organiser tout le déplacement autour d'un nourrissage supposé.

## Tarifs et horaires: le budget à prévoir

Selon les [tarifs affichés par Biotropica](https://www.biotropica.fr/tarifs-et-horaires/), l'entrée individuelle coûte:

- **18,50 €** à partir de 12 ans;
- **13,50 €** pour les enfants de 3 à 11 ans;
- **gratuit** pour les moins de 3 ans.

La réservation n'est **pas obligatoire pour une visite individuelle**: la [FAQ du parc](https://www.biotropica.fr/faq/) précise que les billets peuvent aussi être achetés à l'entrée. En revanche, la réservation est obligatoire pour les groupes. Vous pouvez également acheter les billets sur la [billetterie officielle de Biotropica](https://biotropica.tickeasy.com/fr-FR/accueil).

**D'octobre à mars, le parc ouvre de 10h à 17h30**, en semaine comme le week-end. Les caisses ferment **1h30 avant la fermeture**, et les espaces extérieurs **une heure avant**. Il est donc préférable d'arriver en début d'après-midi au plus tard pour ne pas devoir écourter la visite. Biotropica annonce une ouverture toute l'année, sauf **le 25 décembre et le 1er janvier**.

À ce budget s'ajoute le **parking de la base de loisirs: 6 € par voiture** (véhicule léger). Ce coût est distinct du billet d'entrée, un détail à anticiper pour une sortie familiale.

## Déjeuner sur place ou apporter son pique-nique?

Le parc dispose d'un restaurant dans la serre, ouvert à partir de 11h30. Le snack extérieur, lui, fonctionne sur des périodes plus limitées: ne comptez pas systématiquement dessus lors d'une visite d'automne ou d'hiver.

Pour le pique-nique, les informations officielles ne sont pas parfaitement concordantes. La [page des conditions d'accès](https://www.biotropica.fr/tarifs-et-horaires/) indique qu'il n'est pas autorisé dans l'enceinte du parc, tandis que la [FAQ](https://www.biotropica.fr/faq/) évoque des espaces extérieurs soumis à disponibilité, avec priorité aux groupes. Pour éviter une mauvaise surprise, mieux vaut **demander un tampon à l'accueil**, pique-niquer sur la base de loisirs puis revenir. Le retour doit avoir lieu avant la fermeture des caisses.

Avec un bébé, des tables à langer sont présentes dans les blocs sanitaires et des micro-ondes sont annoncés au restaurant et au snack. Le parc **ne prête pas de poussettes**: apportez la vôtre si nécessaire.

## Accès, mobilité et derniers repères

<!-- article-image-body:03 -->

![Entrée de la gare ferroviaire de Val-de-Reuil dans l'Eure, photographiée en août 2016](/images/articles/2026/10/biotropica-en-famille-a-val-de-reuil-animaux-tarifs-et-visite-par-temps-de-pluie-body-03.webp)

*Photo: [Minuellou](https://commons.wikimedia.org/wiki/File:Gare_de_Val_de_Reuil_ao%C3%BBt_2016.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

Biotropica se situe à la **Butte de la Capoulade, 27100 Val-de-Reuil**, sur la base de loisirs de Léry-Poses. En voiture, l'[itinéraire officiel](https://www.biotropica.fr/acces-au-parc/) conseille la sortie 20 de l'A13; pour le GPS, l'adresse « La Coudrette, Val-de-Reuil » peut être plus pratique.

Il est aussi possible d'arriver en train à la **gare de Val-de-Reuil**, sur la ligne Paris-Rouen, puis de prendre une navette Semo vers Biotropica. Vérifiez ses jours et heures de circulation avant de partir: elle ne doit pas être considérée comme disponible à toute heure.

Pour les personnes à mobilité réduite, le parc annonce un parcours accessible en fauteuil ou avec un déambulateur. La remontée vers la serre peut néanmoins être difficile; une aide en voiturette électrique est proposée sur demande. Un fauteuil roulant peut être prêté gratuitement sur réservation et sous réserve de disponibilité.

## Prolonger la sortie autour de Val-de-Reuil

Si vous venez de loin et souhaitez rester une nuit après Biotropica, deux hôtels de Val-de-Reuil offrent des solutions différentes:

- Le [Kyriad Rouen Sud - Val de Reuil](https://www.booking.com/hotel/fr/premiere-classe-rouen-sud-val-de-reuil-xml.fr.html) présente une chambre quadruple avec un lit double et deux lits simples, ainsi qu'un parking gratuit. Vérifiez la capacité autorisée et les disponibilités pour votre famille.
- Le [Brit Hotel Rouen Sud Val De Reuil](https://www.booking.com/hotel/fr/best-rouen-est-val-de-reuil.fr.html) affiche des chambres familiales et un parking privé gratuit; son restaurant sur place peut simplifier le dîner. Vérifiez les conditions et les disponibilités aux dates choisies.

Pour une autre journée dans l'Eure, notre guide de [Lyons-la-Forêt avec des enfants](https://www.fam-space.fr/articles/voyages/lyons-la-foret-avec-des-enfants-journee-ou-week-end-dans-le-village-et-la-foret/) propose une découverte du village et de la forêt, dans un tout autre cadre que le parc animalier.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/parc-animalier-de-gramat-en-famille-animaux-duree-et-conseils-de-visite/ | Parc animalier de Gramat en famille: animaux, durée et conseils de visite | activites | Gramat, Lot, Occitanie
- /articles/activites/parc-animalier-d-ecouves-en-famille-tarifs-horaires-et-conseils-pour-la-visite/ | Parc animalier d'Ecouves en famille: tarifs, horaires et conseils pour la visite | activites | Le Bouillon, Orne, Normandie
- /articles/sorties/mont-faron-en-famille-telepherique-parc-animalier-et-conseils-2026/ | Mont Faron en famille: téléphérique, parc animalier et conseils 2026 | sorties | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/activites/le-pal-ou-touroparc-en-famille-quel-parc-choisir-en-2026/ | Le PAL ou Touroparc en famille: quel parc choisir en 2026? | activites
- /articles/activites/parc-de-l-auxois-avec-des-enfants-comment-combiner-animaux-maneges-et-piscine/ | Parc de l'Auxois avec des enfants: comment combiner animaux, manèges et piscine | activites | Arnay-sous-Vitteaux, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/activites/parc-animalier-de-lapenne-en-famille-a-pied-ou-avec-la-visite-en-tracteur/ | Parc animalier de Lapenne en famille: à pied ou avec la visite en tracteur ? | activites | Lapenne, Ariège, Occitanie
- /articles/activites/parc-animalier-de-serre-poncon-comment-organiser-la-visite-avec-des-enfants/ | Parc animalier de Serre-Ponçon: comment organiser la visite avec des enfants | activites | Le Sauze-du-Lac, Hautes-Alpes, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/loups-de-chabrieres-en-famille-quel-pass-choisir-en-2026/ | Loups de Chabrières en famille: préparer la visite en 2026 | bons-plans | Sainte-Feyre, Creuse, Nouvelle-Aquitaine
- /articles/activites/biotropica-en-famille-a-val-de-reuil-animaux-tarifs-et-visite-par-temps-de-pluie/ | Biotropica en famille à Val-de-Reuil: animaux, tarifs et visite par temps de pluie | activites | Val-de-Reuil, Eure, Normandie
- /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | Automnales d'Harcourt 2026: animations, visites et tarifs en famille | evenements | Harcourt, Eure, Normandie
- /articles/evenements/arbora-lumina-a-harcourt-ce-qu-il-faut-prevoir-avec-des-enfants/ | Arbora Lumina 2026-2027 à Harcourt en famille: billets, tarifs et parcours | evenements | Harcourt, Eure, Normandie
- /articles/voyages/lyons-la-foret-avec-des-enfants-journee-ou-week-end-dans-le-village-et-la-foret/ | Lyons-la-Forêt avec des enfants: journée ou week-end dans le village et la forêt? | voyages | Lyons-la-Forêt, Eure, Normandie
- /articles/sorties/giverny-en-famille-visiter-la-maison-de-monet-et-le-musee-des-impressionnismes/ | Giverny en famille: visiter la maison de Monet et le musée des impressionnismes | sorties | Giverny, Eure, Normandie
- /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | Atelier Calder à Paris le 14 novembre 2026: fabriquer un mobile dès 5 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/le-pal-2027-en-famille-une-ou-deux-journees-entre-animaux-et-attractions/ | Le PAL 2027 en famille: une ou deux journées entre animaux et attractions ? | activites | Saint-Pourçain-sur-Besbre, Allier, Auvergne-Rhône-Alpes
- /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | Atelier Pokémon et biodiversité à Paris le 28 novembre 2026: dessin dès 10 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-omamori-gratuit-a-paris-le-21-novembre-2026-creer-une-amulette-japonaise-des-7-ans/ | Atelier omamori gratuit à Paris le 21 novembre 2026: créer une amulette dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | Atelier couture gratuit à Paris le 28 novembre 2026: dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-laine-cardee-de-noel-a-paris-le-2-decembre-2026-creer-ses-decorations-des-7-ans/ | Atelier laine cardée de Noël à Paris le 2 décembre 2026: décorations dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/aquarium-de-touraine-en-famille-que-voir-avec-les-enfants/ | Aquarium de Touraine en famille: que voir avec les enfants ? | activites | Lussault-sur-Loire, Indre-et-Loire, Centre-Val de Loire
- /articles/activites/atelier-pop-up-gratuit-a-paris-le-21-novembre-2026-creer-un-livre-anime-en-famille/ | Atelier pop-up gratuit à Paris le 21 novembre 2026: créer en famille dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/jeux-nature-gratuits-au-parc-floral-de-paris-le-18-novembre-2026-quel-jeu-selon-l-age/ | Jeux nature gratuits au Parc floral de Paris le 18 novembre 2026 | activites | Paris, Paris, Île-de-France

### Historique Radar lié

- refresh | /articles/evenements/arbora-lumina-a-harcourt-ce-qu-il-faut-prevoir-avec-des-enfants/ | 2026-10-16T13:36:28.294Z
- opportunity | /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | 2026-11-05T16:36:05.180Z
- opportunity | /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | 2026-11-05T04:36:26.347Z
- opportunity | /articles/activites/atelier-laine-cardee-de-noel-a-paris-le-2-decembre-2026-creer-ses-decorations-des-7-ans/ | 2026-11-04T18:34:22.540Z
- opportunity | /articles/activites/atelier-omamori-gratuit-a-paris-le-21-novembre-2026-creer-une-amulette-japonaise-des-7-ans/ | 2026-11-05T07:29:24.731Z
- opportunity | /articles/activites/atelier-pop-up-gratuit-a-paris-le-21-novembre-2026-creer-un-livre-anime-en-famille/ | 2026-11-04T15:34:37.269Z
- opportunity | /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | 2026-10-16T06:56:21.314Z
- opportunity | /articles/activites/jeux-nature-gratuits-au-parc-floral-de-paris-le-18-novembre-2026-quel-jeu-selon-l-age/ | 2026-11-04T12:35:19.125Z
- opportunity | /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | 2026-11-05T10:32:54.471Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
