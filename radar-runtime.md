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
title: "Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès"
subtitle: "Quatre soirées gratuites du 5 au 8 décembre: choisir son soir et préparer une visite courte avec des enfants."
summary: "Fête des Lumières 2026 à Lyon en famille: horaires des 5, 6, 7 et 8 décembre, accès, poussettes, gratuité et choix du parcours lorsque le programme sera publié."
category: evenements
location:
  city: Lyon
  department: Rhône
  region: Auvergne-Rhône-Alpes
image:
  src: /images/articles/2026/10/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours.webp
  alt: Statue équestre de Louis XIV sur la place Bellecour à Lyon, pendant la Fête des Lumières en 2019.
sources:
  - title: Fête des Lumières - dates et horaires 2026
    url: https://www.fetedeslumieres.lyon.fr/fr/page/horaires-et-dates-fete-des-lumieres-2026
  - title: Fête des Lumières - foire aux questions
    url: https://www.fetedeslumieres.lyon.fr/fr/faq/foire-aux-questions
  - title: Fête des Lumières - handi-accueil
    url: https://www.fetedeslumieres.lyon.fr/fr/page/handi-accueil
  - title: Fête des Lumières - se déplacer dans Lyon
    url: https://www.fetedeslumieres.lyon.fr/fr/page/se-deplacer-dans-lyon
  - title: Office de tourisme de Lyon - Fête des Lumières
    url: https://www.visiterlyon.com/sortir/l-agenda/fetes/fete-des-lumieres
  - title: ibis Styles Lyon Centre Gare Part Dieu - chambres et localisation
    url: https://all.accor.com/hotel/7373/index.fr.shtml
eventEndsAt: 2026-12-08
reviewAt: 2026-11-05
topic:
  key: evenements|lyon|fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours|2026
  keywords:
    - Fête des Lumières Lyon 2026 famille
    - Fête des Lumières Lyon 2026 horaires enfants
    - Fête des Lumières Lyon poussette parcours
slug: fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours
status: published
publishedAt: 2026-10-19T19:48:02.057Z
updatedAt: null
readingTime: 5
affiliate:
  enabled: true
  type: travel
  destination: Lyon
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/index.md
  targetSha: 221896fcce4a36a0b51196ce8cf076e5dd29f546
  targetUrl: /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/
  decision: Choisir un petit parcours réellement réalisable avec des enfants à partir des œuvres 2026 désormais publiées, en connaissant les accès, les horaires particuliers et les contraintes du parc de la Tête d'or.
  affiliationPotential: Conserver l'hébergement familial ibis Styles Lyon Centre Gare Part Dieu sur Booking.com, vérifier capacité et disponibilité; l'accès aux œuvres reste gratuit.
  gsc:
    retrievedAt: 2026-11-15T10:29:35+01:00
    dataThrough: 2026-11-13
    signal: needs_query_check
    basis: "Visibilité récente : 20 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-20
    peakEnd: 2026-10-22
    recentStart: 2026-11-11
    recentEnd: 2026-11-13
    peakImpressions: 20
    recentImpressions: 0
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Fête des Lumières Lyon 2026 famille
      - Fête des Lumières Lyon 2026 horaires enfants
      - Fête des Lumières Lyon poussette parcours
---

## Mission retenue
Actualiser le guide familial de la Fête des Lumières de Lyon, du 5 au 8 décembre 2026, avec le programme officiel désormais publié.

## Pourquoi cette mission
Le snapshot GSC signale 20 impressions sur trois jours puis 0, sans diagnostic de cause. L'article promet encore une programmation « à paraître début novembre » alors que l'organisateur présente maintenant les œuvres 2026: lacune concrète et indépendante du signal SEO.

## Décision du lecteur
Permettre de choisir une ou deux œuvres adaptées au rythme des enfants, avec un trajet cohérent, plutôt qu'un parcours théorique fondé sur l'édition précédente.

## Faits à traiter
- Le site officiel présente le programme 2026 et annonce 27 installations: sélectionner seulement quelques œuvres et secteurs réellement pratiques pour une courte sortie familiale.
- Le parc de la Tête d'or a des horaires et des accès spécifiques: ouverture à 18h les 5, 7 et 8 décembre, à 17h le 6; dernières entrées à 22h15 ou 21h15 selon le jour. Entrée boulevard des Belges par la Porte Tête d'Or; Porte des Enfants du Rhône réservée aux personnes en situation de handicap. Évacuation préalable du parc et fermeture possible selon la météo.
- Vérifier les horaires particuliers de chaque œuvre avant de conseiller un parcours. Ne pas reprendre les fiches des éditions précédentes, dont certaines sont toujours indexées.
- Préserver dates et horaires généraux, gratuité, conseils poussette et foule, transports, réserves sur les informations TCL anciennes, trois photographies et leurs crédits/licences, et lien Booking.com existant.

## Sources de départ
- Programme officiel: https://www.fetedeslumieres.lyon.fr/fr
- Dates et horaires: https://www.fetedeslumieres.lyon.fr/fr/page/horaires-et-dates-fete-des-lumieres-2026
- Œuvre et accès au parc: https://www.fetedeslumieres.lyon.fr/fr/oeuvre/1-000-k-delta
- FAQ: https://www.fetedeslumieres.lyon.fr/fr/faq/foire-aux-questions
- Accessibilité: https://www.fetedeslumieres.lyon.fr/fr/page/handi-accueil

## Affiliation
Conserver l'hôtel ibis Styles Lyon Centre Gare Part Dieu déjà lié via Booking.com; aucune billetterie payante pour les œuvres.

## Continuations internes
Conserver le renvoi éventuel vers l'article Slava's Snowshow à Lyon uniquement pour les familles qui souhaitent une autre sortie, sans confondre les deux événements.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/index.md

---
title: "Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès"
subtitle: "Quatre soirées gratuites du 5 au 8 décembre: choisir son soir et préparer une visite courte avec des enfants."
summary: "Fête des Lumières 2026 à Lyon en famille: horaires des 5, 6, 7 et 8 décembre, accès, poussettes, gratuité et choix du parcours lorsque le programme sera publié."
category: evenements
location:
  city: Lyon
  department: Rhône
  region: Auvergne-Rhône-Alpes
image:
  src: "/images/articles/2026/10/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours.webp"
  alt: "Statue équestre de Louis XIV sur la place Bellecour à Lyon, pendant la Fête des Lumières en 2019."
sources:
  - title: Fête des Lumières - dates et horaires 2026
    url: https://www.fetedeslumieres.lyon.fr/fr/page/horaires-et-dates-fete-des-lumieres-2026
  - title: Fête des Lumières - foire aux questions
    url: https://www.fetedeslumieres.lyon.fr/fr/faq/foire-aux-questions
  - title: Fête des Lumières - handi-accueil
    url: https://www.fetedeslumieres.lyon.fr/fr/page/handi-accueil
  - title: Fête des Lumières - se déplacer dans Lyon
    url: https://www.fetedeslumieres.lyon.fr/fr/page/se-deplacer-dans-lyon
  - title: Office de tourisme de Lyon - Fête des Lumières
    url: https://www.visiterlyon.com/sortir/l-agenda/fetes/fete-des-lumieres
  - title: ibis Styles Lyon Centre Gare Part Dieu - chambres et localisation
    url: https://all.accor.com/hotel/7373/index.fr.shtml
eventEndsAt: 2026-12-08
reviewAt: 2026-11-05
topic:
  key: evenements|lyon|fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours|2026
  keywords:
    - Fête des Lumières Lyon 2026 famille
    - Fête des Lumières Lyon 2026 horaires enfants
    - Fête des Lumières Lyon poussette parcours
slug: fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours
status: published
publishedAt: 2026-10-19T19:48:02.057Z
updatedAt: null
readingTime: 5
affiliate:
  enabled: true
  type: travel
  destination: Lyon
---

La **Fête des Lumières 2026 à Lyon** se déroule **du samedi 5 au mardi 8 décembre**. Pendant ces quatre soirées, les rues et les places de la ville accueillent projections et installations lumineuses. **L'accès aux œuvres est gratuit.** Avec des enfants, l'essentiel est de choisir un horaire compatible avec leur rythme et un secteur facile à rejoindre, sans chercher à tout voir.

Le programme détaillé des œuvres 2026 doit être publié **début novembre**. Les œuvres et itinéraires de l'édition précédente ne permettent donc pas encore de définir un circuit fiable pour décembre.

## Quel soir venir avec des enfants?

Voici les [dates et horaires officiels pour 2026](https://www.fetedeslumieres.lyon.fr/fr/page/horaires-et-dates-fete-des-lumieres-2026), sauf horaire particulier mentionné sur la fiche d'une œuvre:

- **Samedi 5 décembre:** de 19h à 23h.
- **Dimanche 6 décembre:** de 18h à 22h.
- **Lundi 7 décembre:** de 19h à 23h.
- **Mardi 8 décembre:** de 19h à 23h.

**Le dimanche 6 décembre** permet de commencer dès **18h**: un avantage pour des enfants qui se couchent tôt. Le samedi évite l'école le lendemain, mais la fréquentation peut être forte. Les lundi et mardi peuvent convenir aux familles déjà à Lyon; ne présumez pas que le mardi 8 décembre, date traditionnelle des lumignons, sera calme.

## Comment choisir un parcours sans épuiser les enfants?

<!-- article-image-body:01 -->

![Musée des Beaux-Arts illuminé sur la place des Terreaux pendant la Fête des Lumières de Lyon en 2025.](/images/articles/2026/10/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours-body-01.webp)

*Photo: [Corentin Eustacchi](https://commons.wikimedia.org/wiki/File:F%C3%AAte_des_Lumi%C3%A8res_(Lyon,_2025,_place_des_Terreaux).jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

La [FAQ officielle](https://www.fetedeslumieres.lyon.fr/fr/faq/foire-aux-questions) annonce un **programme numérique début novembre**, puis une version papier **fin novembre**. Dès sa sortie, choisissez **une ou deux installations proches**, de préférence accessibles depuis une même ligne de transport et sans longue marche entre deux quartiers.

Pour une première découverte, **une heure à une heure et demie sur place** peut servir d'objectif familial souple: ce n'est **pas une durée officielle**, et les files, le déplacement entre les œuvres et la densité de la foule peuvent la prolonger. Une seule installation bien choisie suffit parfois pour une soirée réussie avec un petit enfant.

Regardez aussi le descriptif des œuvres: certaines projections peuvent comporter des sons puissants ou des effets lumineux intenses. Si un enfant y est sensible, privilégiez une installation qui lui convient réellement, une fois son emplacement et son contenu confirmés.

## Poussette et accessibilité: quels points vérifier?

Une poussette facilite certaines sorties avec un bébé, mais peut être difficile à manœuvrer au milieu d'une foule compacte; un porte-bébé peut constituer une alternative selon l'âge de l'enfant et votre confort. Prévoyez des vêtements chauds, une protection contre la pluie et des chaussures adaptées à la marche.

Selon la FAQ de la Fête, des **dispositifs d'accueil des personnes en situation de handicap** sont mis en œuvre **sur présentation de la carte mobilité inclusion (CMI)**, notamment des accès et parcours adaptés. La [page handi-accueil officielle](https://www.fetedeslumieres.lyon.fr/fr/page/handi-accueil) annonce des informations pratiques et des contacts **à partir du 4 novembre**. Vérifiez les aménagements effectivement disponibles pour 2026 avant de partir. Un parcours accessible aux personnes à mobilité réduite n'est pas nécessairement le plus commode pour chaque poussette.

## Venir à Lyon: train, métro et périmètre piéton

<!-- article-image-body:02 -->

![Entrée côté Villette de la gare de Lyon-Part-Dieu photographiée de nuit en janvier 2026.](/images/articles/2026/10/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours-body-02.webp)

*Photo: [TCY](https://commons.wikimedia.org/wiki/File:Gare_de_Lyon-Part-Dieu,_entr%C3%A9e_Vilette_de_nuit.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Les gares **Lyon Part-Dieu** et **Lyon-Perrache** sont des points d'arrivée possibles pour les familles venant sans voiture. Vous pourrez ensuite choisir les transports TCL et la marche en fonction des installations retenues.

Pendant la Fête des Lumières, un **périmètre piéton est habituellement établi dans l'hypercentre**, avec des restrictions pour les véhicules, les parkings et parfois les cheminements. Attention: la [page officielle « Se déplacer dans Lyon »](https://www.fetedeslumieres.lyon.fr/fr/page/se-deplacer-dans-lyon) mélange encore certaines informations anciennes avec les dates de 2026, notamment des indications de gratuité TCL faisant référence à un **lundi 8 décembre**, qui ne correspond pas au calendrier de 2026. **Ne reprenez ni ces tarifs, ni les horaires de fermeture des stations et parkings sans confirmation propre à l'édition 2026.**

En voiture, évitez de miser sur un parking situé dans le périmètre de l'événement: les accès et les sorties peuvent être empêchés pendant les fermetures. En train, prévoyez une marge avant le dernier départ, car les déplacements à pied et l'accès aux stations peuvent prendre plus de temps.

## La Fête des Lumières est-elle payante?

**Non.** L'accès aux installations de la Fête des Lumières est gratuit, comme le précise l'organisateur. Il n'y a pas de billet général à réserver pour voir les œuvres. Les dépenses concernent plutôt les transports, une collation, le stationnement ou l'hébergement si vous venez de loin.

Les **Lumignons du Cœur** constituent une opération solidaire distincte: contribuer est facultatif et n'est pas une condition pour assister à la Fête.

## Où dormir si vous arrivez en train?

Pour éviter un retour tardif avec les enfants, passer une nuit à Lyon peut être pratique. L'[**ibis Styles Lyon Centre - Gare Part Dieu sur Booking.com**](https://www.booking.com/hotel/fr/all-seasons-lyon-part-dieu.fr.html), au **54 rue de la Villette**, se trouve à proximité immédiate de la gare **Part-Dieu**.

L'hôtelier présente notamment **une chambre supérieure de trois personnes** avec lit double et lit simple, ainsi qu'une **junior suite de quatre personnes maximum**, comprenant un lit double et un canapé-lit double. Il faut toutefois vérifier la capacité admise **en fonction de l'âge de chaque enfant**, le prix final, la disponibilité aux dates souhaitées et les conditions de réservation ou de garantie. Cette adresse est pratique pour la gare; elle n'est pas nécessairement voisine des œuvres, dont la carte 2026 reste à publier.

Lorsque le programme sera disponible, utilisez le [site officiel de la Fête des Lumières](https://www.fetedeslumieres.lyon.fr/fr/faq/foire-aux-questions) pour choisir votre secteur de visite et contrôler les accès et les transports avant le départ.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/slava-s-snowshow-a-lyon-en-2026-quelle-seance-choisir-en-famille/ | Slava’s Snowshow à Lyon 2026: dates, tarifs et conseils en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/vie-pratique/location-de-voiture-a-lyon-avec-des-enfants-ce-qu-il-faut-verifier-avant-de-reserver/ | Location de voiture à Lyon avec des enfants: ce qu'il faut vérifier avant de réserver | vie-pratique | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/automne-des-gones-2026-a-lyon-quels-ateliers-gratuits-choisir-avec-les-enfants/ | Automne des gones 2026 à Lyon: ateliers et sorties gratuites en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | Toussaint 2026 au musée des Confluences: cinq rendez-vous pour les enfants | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | Luminéales du Thabor 2026 à Rennes: tarifs, horaires et visite en famille | evenements | Rennes, Ille-et-Vilaine, Bretagne
- /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | Equita Lyon 2026 avec des enfants: billets, Village Enfants et spectacles | evenements | Chassieu, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | Festival Lumière 2026: Laurel & Hardy en famille le 17 octobre à Lyon | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/parentalite/cafe-papote-a-lyon-4e-ou-echanger-gratuitement-avec-d-autres-parents/ | Café Papote à Lyon 4e: où échanger gratuitement avec d'autres parents | parentalite | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/maison/decheteries-mobiles-a-lyon-que-peut-on-deposer-et-quand-preferer-une-decheterie-fixe/ | Déchèteries mobiles à Lyon: que peut-on déposer et quand préférer une déchèterie fixe? | maison | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/vie-pratique/lyon-saint-exupery-avec-des-enfants-preparer-le-trajet-les-controles-et-l-attente/ | Lyon-Saint-Exupéry avec des enfants: préparer le trajet, les contrôles et l’attente | vie-pratique | Colombier-Saugnieu, Rhône, Auvergne-Rhône-Alpes
- /articles/voyages/week-end-dans-les-pierres-dorees-en-famille-oingt-jarnioux-et-balades/ | Week-end dans les Pierres Dorées en famille: Oingt, Jarnioux et balades | voyages | Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | Halloween 2026 à Mini World Lyon: la Chasse aux 31 Méchants en famille | evenements | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/sorties/aquarium-de-lyon-en-famille-nouveautes-ocean-360-tarifs-et-visite/ | Aquarium de Lyon en famille: nouveautés Océan 360°, tarifs et visite | sorties | La Mulatière, Rhône, Auvergne-Rhône-Alpes
- /articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/ | Mini World Lyon: quel billet choisir en famille et combien de temps prévoir ? | bons-plans | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/cuisine/a-claveisolles-decouvrir-comment-le-lait-de-chevre-devient-fromage-avec-les-enfants/ | À Claveisolles, découvrir comment le lait de chèvre devient fromage avec les enfants | cuisine | Claveisolles, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/noel-2026-au-puy-du-fou-en-famille-spectacles-et-visite-en-hiver/ | Noël 2026 au Puy du Fou en famille: spectacles et visite en hiver | evenements | Les Epesses, Vendée, Pays de la Loire
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/carnaval-de-guyane-2027-en-famille-preparer-ses-premieres-sorties/ | Carnaval de Guyane 2027 en famille: préparer ses premières sorties | evenements | Guyane
- /articles/evenements/mondo-clowns-2027-a-marmande-dates-tarifs-et-conseils-en-famille/ | Mondo'Clowns 2027 à Marmande: dates, tarifs et conseils en famille | evenements | Marmande, Lot-et-Garonne, Nouvelle-Aquitaine

### Historique Radar lié

- refresh | /articles/sorties/aquarium-de-lyon-en-famille-nouveautes-ocean-360-tarifs-et-visite/ | 2026-11-12T06:40:05.780Z
- opportunity | /articles/evenements/automne-des-gones-2026-a-lyon-quels-ateliers-gratuits-choisir-avec-les-enfants/ | 2026-10-23T09:31:27.871Z
- opportunity | /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | 2026-10-21T10:43:46.144Z
- opportunity | /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | 2026-10-10T15:40:28.185Z
- opportunity | /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | 2026-10-19T19:48:02.164Z
- opportunity | /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | 2026-10-22T12:58:21.691Z
- opportunity | /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | 2026-10-31T19:33:18.323Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- refresh | /articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/ | 2026-11-02T16:35:39.647Z
- opportunity | /articles/evenements/slava-s-snowshow-a-lyon-en-2026-quelle-seance-choisir-en-famille/ | 2026-11-03T22:37:45.305Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
