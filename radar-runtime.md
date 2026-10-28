# Radar Fam Space - Phase 3/3

## Mission

Radar utilise Google Search Console et la recherche web pour choisir le travail éditorial qui apporte le plus de valeur à Fam Space: améliorer une page réellement perfectible, développer une intention proche d'une page forte, ou publier à temps une opportunité locale/saisonnière. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

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
- pour un refresh, `substantialChanges`: au moins deux changements substantiels;
- pour un refresh, `regressionCheck`: résultat concret de la comparaison ancien/nouveau.

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
title: "Marché de Noël de Grenoble 2026 en famille : horaires et Père Noël"
subtitle: Quel jour venir place Victor-Hugo, comment rejoindre les chalets et préparer la visite avec des enfants
summary: Du 20 novembre au 24 décembre 2026, le marché de Noël de Grenoble accueille les familles place Victor-Hugo. Les rencontres gratuites avec le Père Noël sont annoncées les mercredis et week-ends, du 21 novembre au 23 décembre, de 14 h à 19 h.
category: evenements
location:
  city: Grenoble
  department: Isère
  region: Auvergne-Rhône-Alpes
keywords:
  - marché de Noël Grenoble 2026
  - Père Noël Grenoble 2026
  - marché de Noël Grenoble horaires famille
sources:
  - title: Grenoble Alpes Tourisme - Marché de Noël de Grenoble 2026
    url: https://www.grenoble-tourisme.com/fr/catalogue/detail/marche-de-noel-de-grenoble-258480/
  - title: Grenoble Alpes Tourisme - Le Père Noël au marché de Noël de Grenoble
    url: https://www.grenoble-tourisme.com/fr/catalogue/detail/le-pere-noel-marche-de-noel-de-grenoble-6348212/
  - title: RockyPop Grenoble - Hébergements familiaux
    url: https://www.rockypop.com/grenoble/dormir/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel
  decision: Choisir une visite calme des chalets ou un mercredi/week-end avec rencontre du Père Noël, connaître les horaires et rejoindre la place Victor-Hugo sans difficulté avec des enfants.
  affiliationPotential: "Marché et rencontre du Père Noël gratuits, sans billetterie partenaire. Hébergement familial RockyPop Grenoble Hotel vérifié sur Booking.com pour les familles en week-end : https://www.booking.com/hotel/fr/rockypop-grenoble.html ; ne pas annoncer de prix ou de disponibilité sans dates."
  gsc:
    retrievedAt: 2026-10-28T03:28:35+01:00
    dataThrough: 2026-10-25
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Grenoble Alpes Tourisme - Marché de Noël de Grenoble 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-24
---

Le **marché de Noël de Grenoble** se tient **place Victor-Hugo du 20 novembre au 24 décembre 2026**. L'entrée est gratuite : on peut parcourir les chalets d'artisans et de gourmandises sans acheter de billet. Avec des enfants, le choix du jour dépend surtout d'une envie : flâner tranquillement ou rencontrer le Père Noël.

## Quel jour choisir pour voir le Père Noël ?

Le Père Noël est annoncé dans son chalet et en déambulation **les mercredis, samedis et dimanches, de 14 h à 19 h**, avec possibilité pour les enfants de lui remettre leur lettre. La [fiche de Grenoble Alpes Tourisme](https://www.grenoble-tourisme.com/fr/catalogue/detail/le-pere-noel-marche-de-noel-de-grenoble-6348212/) affiche **du 21 novembre au 23 décembre 2026** en titre, mais une période légèrement plus large dans son encadré d'ouverture. Pour préparer la sortie, retenez les rencontres des mercredis et week-ends entre le 21 novembre et le 23 décembre, et vérifiez la fiche avant le départ si vous visez une date précise. **La présence du Père Noël n'est pas annoncée tous les jours** et ne doit pas être confondue avec les horaires des chalets.

Si la rencontre n'est pas une priorité, un lundi, mardi, jeudi ou vendredi permet de profiter des stands sans organiser la visite autour de ce créneau. Cela ne garantit toutefois pas une faible affluence. Pour les plus jeunes, venir en journée laisse davantage de souplesse pour une pause ou un retour anticipé.

## Horaires des chalets et budget à prévoir

Selon la [fiche officielle du marché](https://www.grenoble-tourisme.com/fr/catalogue/detail/marche-de-noel-de-grenoble-258480/), les horaires habituels sont :

- **Lundi, mardi, mercredi et dimanche : 10 h à 20 h.**
- **Jeudi, vendredi et samedi : 10 h à 21 h.**

Le marché se termine le **jeudi 24 décembre**. Pour une visite ce dernier jour, revérifiez l'heure de fermeture auprès de l'organisateur : un horaire particulier peut s'appliquer à la veille de Noël.

L'accès au marché et les rencontres annoncées avec le Père Noël sont gratuits. En revanche, les boissons, spécialités à manger et cadeaux proposés par les chalets sont payants, sans tarif unique communiqué. Fixer un petit budget gourmandises ou achats avant de venir évite les surprises. Le programme complémentaire des animations est encore indiqué « à venir » par l'office de tourisme : ne comptez pas sur un spectacle ou un atelier précis sans confirmation.

## Venir place Victor-Hugo avec une poussette

Le marché se déroule en plein centre-ville, **place Victor-Hugo, 38000 Grenoble**. Grenoble Alpes Tourisme indique les **trams A, B et D**, ainsi que plusieurs bus, pour rejoindre le secteur Victor-Hugo. Le tram est pratique pour éviter la recherche de stationnement au cœur de la ville. Avec une poussette, prévoyez une marge pour traverser les allées et rejoindre l'arrêt lors des périodes animées.

La sortie se déroule en extérieur : vêtements chauds, protection contre la pluie et chaussures adaptées sont utiles, surtout avec un enfant qui reste longtemps dans sa poussette. Pour un bébé, emportez ce qu'il faut pour le repas ou le biberon : **aucun micro-ondes, espace de change ou service de chauffe-biberon n'est confirmé** dans les informations officielles consultées. Une pause dans un établissement voisin peut être envisagée, sans présumer de ses équipements.

## Prolonger la sortie en week-end

Pour une nuit sur place, le **RockyPop Grenoble Hotel**, rue de Strasbourg, propose notamment des chambres communicantes et des appartements adaptés aux familles. Vous pouvez [consulter les hébergements RockyPop Grenoble sur Booking.com](https://www.booking.com/hotel/fr/rockypop-grenoble.html) en renseignant vos dates et l'âge des enfants : tarifs, configuration exacte et disponibilités sont à vérifier avant réservation.

Si vous souhaitez ajouter la Bastille, un musée ou préparer le stationnement en périphérie, le [guide Grenoble en famille](/destinations/auvergne-rhone-alpes/isere/grenoble/) détaille ces options pour organiser une journée ou un séjour plus long.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/noel-a-orleans-2026-en-famille-marches-horaires-et-maneges-apres-noel/ | Marché de Noël d’Orléans 2026 en famille: horaires, lieux et manèges | evenements | Orléans, Loiret, Centre-Val de Loire
- /articles/sorties/ete-oh-parcs-grenoble-2026-famille/ | L’Été Oh! Parcs Grenoble 2026: horaires et activités gratuites | sorties | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | Marché de Noël de Mulhouse 2026 en famille: horaires, étoffe et animations | evenements | Mulhouse, Haut-Rhin, Grand Est
- /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | Noël à Toulouse 2026 en famille: marchés, Père Noël et patinoire | evenements | Toulouse, Haute-Garonne, Occitanie
- /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | Foire de Grenoble 2026 en famille: jours gratuits, programme et tarifs | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/bons-plans/carte-tattoo-isere-2026-2027-comment-obtenir-60-a-120-pour-les-activites-d-un-collegien/ | Carte Tattoo Isère 2026-2027: comment obtenir 60 à 120 € pour les activités d'un collégien | bons-plans | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-a-grenoble-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP à Grenoble: où aller avec un enfant de moins de 6 ans? | parentalite | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/cuisine/3-recettes-de-l-isere-faciles-a-preparer-en-famille/ | 3 recettes de l'Isère faciles à préparer en famille | cuisine | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans/ | Foulée Blanche 2027 en famille: courses, âges, tarifs et programme à Autrans | evenements | Autrans-Méaudre en Vercors, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | Festival du Film pour Enfants 2026 en Isère: séances, ateliers et tarifs | evenements | Vizille, Isère, Auvergne-Rhône-Alpes
- /articles/voyages/chamrousse-en-famille-quel-secteur-choisir-pour-l-hiver-2026-2027/ | Chamrousse en famille: quel secteur choisir pour l'hiver 2026-2027? | voyages | Chamrousse, Isère, Auvergne-Rhône-Alpes
- /articles/sorties/walibi-rhone-alpes-en-famille-quel-billet-choisir-selon-la-taille-des-enfants/ | Walibi Rhône-Alpes en famille: attractions, tailles et billets en 2026 | sorties | Les Avenières Veyrins-Thuellin, Isère, Auvergne-Rhône-Alpes
- /articles/cuisine/noix-de-grenoble-fraiche-ou-seche-laquelle-choisir-pour-cuisiner/ | Noix de Grenoble fraîche ou sèche: laquelle choisir pour cuisiner? | cuisine | Vinay, Isère, Auvergne-Rhône-Alpes
- /articles/maison/maison-de-vacances-a-lans-en-vercors-en-famille-les-criteres-qui-changent-vraiment-le-sejour/ | Maison de vacances à Lans-en-Vercors en famille: les critères qui changent vraiment le séjour | maison | Lans-en-Vercors, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/la-seine-musicale-en-famille-en-2027-quels-concerts-et-ateliers-selon-l-age/ | La Seine Musicale en famille en 2027: quels concerts et ateliers selon l'âge ? | evenements | Boulogne-Billancourt, Hauts-de-Seine, Île-de-France
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires et accès | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir/ | Festival des Jeux de Cannes 2027 en famille: billets, âges et visite | evenements | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | Noël à Fontevraud 2026: patinoire, marché, dates et tarifs en famille | evenements | Fontevraud-l'Abbaye, Maine-et-Loire, Pays de la Loire

### Historique Radar lié

- opportunity | /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | 2026-10-17T15:41:33.883Z
- opportunity | /articles/evenements/festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir/ | 2026-10-28T09:26:08.391Z
- opportunity | /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | 2026-10-21T13:33:34.395Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z
- opportunity | /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | 2026-10-19T09:37:22.517Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | 2026-10-28T01:34:03.741Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
