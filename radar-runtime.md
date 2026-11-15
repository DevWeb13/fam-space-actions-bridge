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

Soumets le résultat final avec `action: advance`, uniquement les métadonnées éditoriales réellement corrigées, le corps complet et un bloc `radarReview`. Ne recopie pas les métadonnées inchangées: la plomberie les conserve et normalise la syntaxe avant traitement. Le bloc `radarReview` contient:
- `summary`: contrôles et corrections réellement effectués;
- `sources`: URLs factuelles revérifiées;
- pour un refresh, `regressionCheck`: résultat concret de la comparaison ancien/nouveau. Une seule correction factuelle vérifiée peut suffire.

**Ne recopie aucun autre champ Radar, aucune branche et aucun SHA.** Le workflow construit et contrôle d'abord l'article final avec le validateur réel. Il ne crée le commit de phase 3 que si ce précontrôle réussit, puis lance le processeur final.

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
title: "Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès"
subtitle: Du 5 au 8 décembre, deux idées de parcours courts avec enfants, les œuvres 2026 et les accès à connaître.
summary: "Fête des Lumières 2026 à Lyon en famille: horaires, œuvres interactives place Bellecour, visite au parc de la Tête d'or, poussette, transports et accès gratuits."
category: evenements
location:
  city: Lyon
  department: Rhône
  region: Auvergne-Rhône-Alpes
image:
  src: /images/articles/2026/10/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours.webp
  alt: Statue équestre de Louis XIV sur la place Bellecour à Lyon, pendant la Fête des Lumières en 2019.
sources:
  - title: Fête des Lumières - programme officiel 2026
    url: https://www.fetedeslumieres.lyon.fr/fr
  - title: Fête des Lumières - dates et horaires 2026
    url: https://www.fetedeslumieres.lyon.fr/fr/page/horaires-et-dates-fete-des-lumieres-2026
  - title: Fête des Lumières - Twist & Shine
    url: https://www.fetedeslumieres.lyon.fr/fr/oeuvre/twist-shine
  - title: Fête des Lumières - Mission Lumignons, destination NGC2392
    url: https://www.fetedeslumieres.lyon.fr/fr/oeuvre/mission-lumignons-destination-ngc2392?edition=2596
  - title: Fête des Lumières - 1 000 K...Δ
    url: https://www.fetedeslumieres.lyon.fr/fr/oeuvre/1-000-k-delta
  - title: Fête des Lumières - parc de la Tête d'or
    url: https://www.fetedeslumieres.lyon.fr/fr/lieu/parc-de-la-tete-dor
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
reviewAt: 2026-11-27
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
  phase: 2
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

La **Fête des Lumières 2026 à Lyon** a lieu **du samedi 5 au mardi 8 décembre**. Ses **27 installations** sont désormais annoncées et **l'accès aux œuvres est gratuit**. Pour une sortie avec des enfants, mieux vaut choisir un seul secteur et une ou deux créations que traverser la ville dans la foule. Deux possibilités ressortent du [programme officiel 2026](https://www.fetedeslumieres.lyon.fr/fr): jouer avec la lumière place Bellecour ou découvrir une installation au parc de la Tête d'or, avec des accès plus contraints.

## Quel soir venir avec des enfants?

Les [horaires généraux officiels](https://www.fetedeslumieres.lyon.fr/fr/page/horaires-et-dates-fete-des-lumieres-2026) sont les suivants, sauf indication différente sur la fiche d'une œuvre:

- **Samedi 5 décembre:** 19h à 23h.
- **Dimanche 6 décembre:** 18h à 22h.
- **Lundi 7 décembre:** 19h à 23h.
- **Mardi 8 décembre:** 19h à 23h.

Le **dimanche 6 décembre** est intéressant avec de jeunes enfants, car les installations commencent une heure plus tôt. Le samedi évite l'école le lendemain, mais il faut anticiper la foule. Le mardi 8 décembre, jour traditionnel des lumignons, n'est pas forcément une soirée calme.

## Un parcours facile: rester place Bellecour

<!-- article-image-body:01 -->

![Musée des Beaux-Arts illuminé sur la place des Terreaux pendant la Fête des Lumières de Lyon en 2025.](/images/articles/2026/10/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours-body-01.webp)

*Photo: [Corentin Eustacchi](https://commons.wikimedia.org/wiki/File:F%C3%AAte_des_Lumi%C3%A8res_(Lyon,_2025,_place_des_Terreaux).jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Pour éviter les longues marches, la **place Bellecour** permet de voir deux propositions 2026 dans un même secteur.

- [**Twist & Shine**](https://www.fetedeslumieres.lyon.fr/fr/oeuvre/twist-shine) invite petits et grands à déplacer et assembler des sculptures lumineuses. Certaines sont manipulables par les enfants; les plus grandes nécessitent l'aide d'adultes. C'est une option particulièrement adaptée aux familles qui préfèrent participer plutôt que regarder longtemps une projection.
- [**Mission Lumignons, destination NGC2392**](https://www.fetedeslumieres.lyon.fr/fr/oeuvre/mission-lumignons-destination-ngc2392?edition=2596) transforme la place en paysage de planètes et d'astres lumineux. Les lumignons participatifs soutiennent l'association Vivre aux Éclats; cette contribution solidaire est **facultative** et ne constitue pas un billet d'entrée.

Les deux fiches annoncent les **horaires généraux de la Fête**. Vous pouvez commencer par une seule installation, puis décider sur place si les enfants ont encore envie de découvrir l'autre. Ce parcours limite les changements de quartier, mais pas les éventuelles attentes ni la densité de la foule.

## Une autre soirée: le parc de la Tête d'or

L'installation [**1 000 K...Δ**](https://www.fetedeslumieres.lyon.fr/fr/oeuvre/1-000-k-delta) mêle sculptures et projections lumineuses dans la végétation du parc. Le site propose également d'autres créations, mais il vaut mieux prévoir **une visite du parc comme sortie principale**, sans imposer ensuite un retour vers Bellecour.

L'accès est strictement organisé:

- **Samedi 5, lundi 7 et mardi 8 décembre:** ouverture du parc à 18h, œuvres de 19h à 23h, **dernière entrée à 22h15**.
- **Dimanche 6 décembre:** ouverture à 17h, œuvres de 18h à 22h, **dernière entrée à 21h15**.
- **Entrée habituelle de la Fête:** boulevard des Belges, **Porte Tête d'Or**, face à la rue Tête d'Or. La **Porte des Enfants du Rhône** est réservée aux personnes en situation de handicap.
- Le parc est évacué l'après-midi avant la réouverture: de **15h30 à 18h les 4, 5, 7 et 8 décembre**, et de **14h30 à 17h le dimanche 6**. Il peut aussi fermer si la météo est défavorable.

Les **bagages sont interdits** et l'organisateur recommande d'éviter les sacs pour faciliter les contrôles. Pour les transports, la [fiche du parc](https://www.fetedeslumieres.lyon.fr/fr/lieu/parc-de-la-tete-dor) mentionne notamment le métro A à Masséna, à environ huit minutes à pied de l'entrée. Vérifiez les dessertes du jour avant de partir.

## Poussette, bruit et accessibilité: prévoir une sortie courte

Avec un bébé, une poussette peut être utile, mais difficile à manœuvrer dans une foule dense; un porte-bébé peut être une alternative selon l'âge et le confort de chacun. Prévoyez des vêtements chauds, une protection contre la pluie et des chaussures de marche. **Une heure à une heure et demie sur place** est un objectif familial possible, pas une durée officielle: les files et les déplacements peuvent l'allonger.

Les installations ne se ressemblent pas: certaines sont participatives, d'autres immersives ou accompagnées de sons et d'effets lumineux intenses. Choisissez selon la sensibilité de l'enfant, plutôt que de chercher à multiplier les œuvres.

La [page handi-accueil officielle](https://www.fetedeslumieres.lyon.fr/fr/page/handi-accueil) précise les dispositifs adaptés, notamment des points d'accueil **place Bellecour, place Louis Pradel et Porte des Enfants du Rhône**. La [FAQ](https://www.fetedeslumieres.lyon.fr/fr/faq/foire-aux-questions) mentionne les aménagements sur présentation de la **carte mobilité inclusion (CMI)**. Un parcours adapté aux personnes à mobilité réduite n'est pas automatiquement le plus pratique pour une poussette: contrôlez le cheminement prévu.

## Venir à Lyon: train, métro et périmètre piéton

<!-- article-image-body:02 -->

![Entrée côté Villette de la gare de Lyon-Part-Dieu photographiée de nuit en janvier 2026.](/images/articles/2026/10/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours-body-02.webp)

*Photo: [TCY](https://commons.wikimedia.org/wiki/File:Gare_de_Lyon-Part-Dieu,_entr%C3%A9e_Vilette_de_nuit.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Les gares **Lyon Part-Dieu** et **Lyon-Perrache** permettent d'arriver sans voiture. Choisissez ensuite votre transport TCL en fonction de l'œuvre retenue. Pendant la Fête, l'hypercentre est habituellement soumis à un **périmètre piéton**, avec des restrictions de circulation, de stationnement et parfois de cheminement.

Attention: la [page officielle consacrée aux déplacements](https://www.fetedeslumieres.lyon.fr/fr/page/se-deplacer-dans-lyon) comporte encore des indications anciennes, notamment une mention de gratuité TCL associée à un « lundi 8 décembre », alors que **le 8 décembre 2026 tombe un mardi**. Ne considérez donc pas ces tarifs, les horaires de stations ou les fermetures de parkings comme confirmés pour 2026 sans nouvelle vérification. Si vous venez en voiture, évitez de compter sur un parking situé dans le périmètre de la Fête. Si vous venez en train, gardez une marge pour rejoindre votre gare avant le dernier départ.

## La Fête des Lumières est-elle payante?

**Non, les installations sont gratuites et ne nécessitent pas de billet général.** Les dépenses éventuelles concernent les transports, les repas ou l'hébergement. Les **Lumignons du Cœur** sont une initiative solidaire distincte: y contribuer reste facultatif.

## Où dormir si vous arrivez en train?

Pour éviter un retour tardif avec les enfants, passer une nuit à Lyon peut être pratique. L'[**ibis Styles Lyon Centre - Gare Part Dieu sur Booking.com**](https://www.booking.com/hotel/fr/all-seasons-lyon-part-dieu.fr.html), au **54 rue de la Villette**, est proche de la gare Part-Dieu. L'hôtelier présente notamment une **chambre supérieure pour trois personnes**, avec lit double et lit simple, ainsi qu'une **junior suite pour quatre personnes maximum**, avec lit double et canapé-lit double. Vérifiez la capacité admise selon l'âge de chaque enfant, les disponibilités, le tarif final et les conditions de réservation. Cet emplacement facilite l'arrivée en train, mais ne garantit pas la proximité immédiate des œuvres choisies.

Avant le départ, revérifiez la [programmation officielle](https://www.fetedeslumieres.lyon.fr/fr), les horaires propres aux installations et les éventuelles modifications d'accès liées à la météo ou à l'affluence.

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
