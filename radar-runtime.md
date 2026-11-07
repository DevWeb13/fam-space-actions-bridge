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

Soumets le résultat final avec `action: advance`, le frontmatter éditorial utile, le corps complet et un bloc `radarReview`:
- `summary`: contrôles et corrections réellement effectués;
- `sources`: URLs factuelles revérifiées;
- pour un refresh, `regressionCheck`: résultat concret de la comparaison ancien/nouveau. Une seule correction factuelle vérifiée peut suffire.

**Ne recopie aucun autre champ Radar, aucune branche et aucun SHA.** Le workflow GitHub crée le commit de phase 3, retrouve le HEAD réel et lance directement le processeur final.

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
title: "Biotropica en famille à Val-de-Reuil: animaux, tarifs et visite par temps de pluie"
subtitle: "Serre tropicale, espaces extérieurs et budget : billets ou pass annuel selon vos visites"
summary: À Biotropica, comparez billets, réductions, pass annuels et parking avant une sortie en famille. Horaires, animaux, pluie et services bébé à Val-de-Reuil.
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
  phase: 2
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

<!-- article-image-credit -->
*Photo: [Eponimm](https://commons.wikimedia.org/wiki/File:Lac_des_Deux-Amants.JPG) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Val-de-Reuil, dans l'Eure, **Biotropica** associe une serre tropicale et un parcours animalier en plein air, sur la base de loisirs de Léry-Poses. Avant de partir, deux choix comptent : faut-il prévoir une journée entière malgré la pluie, et vaut-il mieux acheter des billets ou un pass annuel ? Le stationnement s'ajoute dans les deux cas.

## Une serre tropicale et des animaux en plein air

<!-- article-image-body:02 -->

![Portrait d'un panda roux photographié au parc animalier de Sainte-Croix en Moselle, et non à Biotropica](/images/articles/2026/10/biotropica-en-famille-a-val-de-reuil-animaux-tarifs-et-visite-par-temps-de-pluie-body-02.webp)

*Photo: [Musicaline](https://commons.wikimedia.org/wiki/File:Panda_roux_DSCF1218.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

<!-- article-image-body:01 -->

![Dragon de Komodo photographié au Tropiquarium de Servion en Suisse, illustration de l'espèce et non d'un animal de Biotropica](/images/articles/2026/10/biotropica-en-famille-a-val-de-reuil-animaux-tarifs-et-visite-par-temps-de-pluie-body-01.webp)

*Photo: [Marie-Noëlle Charles](https://commons.wikimedia.org/wiki/File:Padar,_dragon_de_Komodo.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

La [serre tropicale de 5 000 m²](https://www.biotropica.fr/le-parc-de-biotropica/) abrite une végétation dense et des animaux comme les paresseux, tamarins, loriquets, grenouilles colorées ou le dragon de Komodo. C'est la partie la plus confortable par temps froid ou humide.

À l'extérieur, environ **10 hectares** accueillent notamment les pandas roux du Jardin d'Asie, les manchots de Humboldt, les suricates, les kangourous et la ferme des enfants. Les [différents univers](https://www.biotropica.fr/nos-univers/) aident à choisir les étapes qui plairont aux enfants.

Par temps de pluie, la serre reste intéressante, mais **le parcours extérieur n'est pas couvert**. Pour voir les pandas roux, les manchots et les grands espaces, prévoyez chaussures et vêtements adaptés plutôt que de compter uniquement sur la serre.

## Combien de temps prévoir avec des enfants ?

Biotropica recommande **3 à 4 heures au minimum** pour voir les espaces intérieurs et extérieurs, davantage si vous souhaitez assister à un nourrissage commenté ou observer longtemps les animaux.

Avec de jeunes enfants, commencez par leur univers préféré, puis alternez serre et extérieur selon la fatigue et la météo. Le lac des pélicans se prête à une promenade plus longue, la ferme des enfants à un arrêt plus court. Les horaires des présentations et nourrissages pouvant varier, consultez le programme du jour.

## Billets, tarifs réduits et pass annuel : quel budget ?

Selon les [tarifs officiels de Biotropica](https://www.biotropica.fr/tarifs-et-horaires/), le billet ordinaire coûte **18,50 € dès 12 ans**, **13,50 € de 3 à 11 ans** et reste **gratuit avant 3 ans**. Pour deux adultes et deux enfants de 3 à 11 ans, comptez donc **64 € d'entrées**, ou **70 € avec le parking de 6 €** pour une voiture.

Sur présentation d'un justificatif, le tarif pour une personne en situation de handicap est de **16 € dès 12 ans** et **11 € de 3 à 11 ans**. La [FAQ](https://www.biotropica.fr/faq/) précise que l'accompagnant bénéficie de la gratuité lorsque la Carte mobilité inclusion mentionne un besoin d'accompagnement. Cette gratuité dépend donc de la mention portée sur la carte.

Pour plusieurs sorties, Biotropica propose un **abonnement annuel nominatif**, valable un an de date à date, à **55 € dès 12 ans** et **40 € de 3 à 11 ans**. Il est établi sur place lors de la première visite, avec photo. Trois billets ordinaires reviennent à 55,50 € par adulte et 40,50 € par enfant : **le pass devient légèrement avantageux dès la troisième visite** pour ces tarifs, sans compter le stationnement. Pour notre famille de quatre, les pass représentent **190 €**, contre **192 € pour trois journées de billets ordinaires**.

Attention : **le parking de la base de loisirs coûte 6 € par voiture et par venue**, en supplément des entrées. Trois visites en voiture ajoutent donc 18 €, que vous choisissiez les billets ou les pass Biotropica. La FAQ mentionne un **pass annuel de parking distinct**, à demander directement à la base de loisirs, sans tarif public confirmé. Pour un usage régulier, renseignez-vous avant de calculer votre budget total.

La réservation n'est **pas obligatoire pour une visite individuelle** : les billets s'achètent aussi aux caisses d'entrée. En revanche, elle est obligatoire pour les groupes. La [FAQ du parc](https://www.biotropica.fr/faq/) détaille ces conditions.

## Horaires : attention aux dernières entrées

**D'octobre à mars, Biotropica ouvre de 10h à 17h30**, en semaine comme les week-ends et jours fériés. Les caisses ferment **1h30 avant la fermeture** et les espaces extérieurs **une heure avant** : arriver au plus tard en début d'après-midi laisse davantage de temps pour tout voir.

Le parc annonce une ouverture toute l'année, sauf **le 25 décembre et le 1er janvier**. Les horaires des autres saisons varient entre semaine, week-end et vacances : vérifiez la [grille officielle](https://www.biotropica.fr/tarifs-et-horaires/) avant le départ.

## Déjeuner sur place ou apporter son pique-nique ?

Le restaurant de la serre ouvre à partir de **11h30**. Le snack extérieur fonctionne sur des périodes plus limitées, notamment durant certaines vacances et certains week-ends : ne comptez pas systématiquement dessus en automne ou en hiver.

Les consignes officielles sur le pique-nique ne sont pas parfaitement concordantes : la page des conditions d'accès l'interdit dans l'enceinte du parc, tandis que la FAQ mentionne des zones extérieures sous réserve de disponibilité, avec priorité aux groupes. La solution la plus sûre est de **demander un tampon à l'accueil**, de sortir manger sur la base de loisirs puis de revenir **avant la fermeture des caisses**.

Pour les bébés, des **tables à langer** sont disponibles dans les sanitaires et des **micro-ondes** au restaurant et au snack. Biotropica **ne prête pas de poussettes** : emportez la vôtre.

## Accès, navette et accessibilité

<!-- article-image-body:03 -->

![Entrée de la gare ferroviaire de Val-de-Reuil dans l'Eure, photographiée en août 2016](/images/articles/2026/10/biotropica-en-famille-a-val-de-reuil-animaux-tarifs-et-visite-par-temps-de-pluie-body-03.webp)

*Photo: [Minuellou](https://commons.wikimedia.org/wiki/File:Gare_de_Val_de_Reuil_ao%C3%BBt_2016.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

Biotropica se trouve **Butte de la Capoulade, 27100 Val-de-Reuil**, sur la base de loisirs de Léry-Poses. En voiture, l'[accès officiel](https://www.biotropica.fr/acces-au-parc/) indique la sortie 20 de l'A13. Pour le GPS, « La Coudrette, Val-de-Reuil » peut être plus pratique.

En transports, rejoignez la **gare de Val-de-Reuil** sur la ligne Paris-Rouen, puis consultez les horaires de la **navette Semo** vers le parc : elle ne circule pas à toute heure.

Le parcours est annoncé accessible en fauteuil roulant ou avec un déambulateur, mais la remontée vers la serre peut être difficile. Une **voiturette électrique d'assistance** est proposée sur demande ; un **fauteuil roulant peut être prêté gratuitement sur réservation**, sous réserve de disponibilité.

## Passer une nuit près de Biotropica

Pour les familles qui prolongent la sortie en week-end, deux hôtels de Val-de-Reuil peuvent servir de point de départ :

- Le [Kyriad Rouen Sud - Val de Reuil](https://www.booking.com/hotel/fr/premiere-classe-rouen-sud-val-de-reuil-xml.fr.html), anciennement Première Classe, propose notamment une formule de chambre avec un lit double et deux lits simples et un parking gratuit. Vérifiez la capacité réelle autorisée pour votre famille et les disponibilités.
- Le [Brit Hotel Rouen Sud Val De Reuil](https://www.booking.com/hotel/fr/best-rouen-est-val-de-reuil.fr.html), anciennement Best Hotel, dispose de chambres familiales, d'un parking privé gratuit et d'un restaurant. Vérifiez la configuration de couchage et les conditions du dîner avant de réserver.

Les anciens noms expliquent les adresses des pages de réservation, qui correspondent bien à ces établissements.

Pour une autre journée dans l'Eure, notre guide de [Lyons-la-Forêt avec des enfants](https://www.fam-space.fr/articles/voyages/lyons-la-foret-avec-des-enfants-journee-ou-week-end-dans-le-village-et-la-foret/) propose la découverte du village et de la forêt dans un cadre très différent.

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
