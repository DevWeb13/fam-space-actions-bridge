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
title: "Foire de Grenoble 2026 en famille: jours gratuits, programme et tarifs"
subtitle: "Halloween ou week-end des jeux: choisir quand visiter Alpexpo du 30 octobre au 8 novembre"
summary: Quelles journées choisir pour la Foire de Grenoble 2026 avec des enfants? Gratuités, univers celte, train fantôme, jeux, horaires et accès à Alpexpo.
category: evenements
location:
  city: Grenoble
  department: Isère
  region: Auvergne-Rhône-Alpes
keywords:
  - Foire de Grenoble 2026 enfants
  - Foire de Grenoble 2026 entrée gratuite
  - animations Alpexpo Toussaint 2026
sources:
  - title: Foire de Grenoble - Infos pratiques 2026
    url: https://foiredegrenoble.com/infos-pratiques/
  - title: Foire de Grenoble - Programme des animations 2026
    url: https://foiredegrenoble.com/animations-temps-forts/programme/
  - title: Foire de Grenoble - FAQ
    url: https://foiredegrenoble.com/visitez/faq/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget
  decision: Choisir le jour adapté aux enfants et le moins cher selon les animations et les gratuités.
  affiliationPotential: "Pas de billetterie partenaire vérifiée. Hébergements proches avec chambres familiales sur Booking.com: B&B HOTEL Grenoble Centre Alpexpo et Appartéa Grenoble Alpexpo."
  gsc:
    retrievedAt: 2026-10-21T05:02:00.000Z
    dataThrough: 2026-10-18
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Foire de Grenoble - Infos pratiques 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-11-08
---

Du **30 octobre au 8 novembre 2026**, la **Foire de Grenoble** s'installe à **Alpexpo** avec des stands, un univers consacré aux Celtes et des animations qui changent au fil des jours. Avec des enfants, deux questions comptent avant tout: souhaitez-vous profiter de l'ambiance d'Halloween ou plutôt découvrir les jeux de rôle et de plateau? Et pouvez-vous choisir un jour où **les adultes entrent gratuitement**?

L'**entrée est gratuite pour les moins de 16 ans pendant toute la foire**. Une sortie avec des enfants peut donc coûter très peu si vous venez sans achats ni activités payantes, surtout les 30 octobre et 4 novembre.

## Quel jour choisir pour les enfants?

Le [programme officiel 2026](https://foiredegrenoble.com/animations-temps-forts/programme/) distingue plusieurs périodes:

- **Du 30 octobre au 1er novembre**, les amateurs d'Halloween trouveront le **Grand bal des sorcières**, des décors fantastiques et des animations sportives annoncées. Le **laser game ambiance Halloween** figure également dans les journées de ce premier week-end. Le **30 octobre** a un double avantage: entrée gratuite pour tous et ouverture en nocturne.
- **Du 30 octobre au 5 novembre**, l'espace **« Les Celtes, terres de légendes »** propose **1 000 m²** autour de l'imaginaire celtique et des sorcières. Cette période convient aux familles qui veulent visiter le décor thématique sans réserver nécessairement une animation précise.
- **Du 6 au 8 novembre**, le **Village des Jeux de Rôles et de plateaux / Festival IsèRPG!** est consacré aux jeux de société, aux initiations et aux parties proposées avec Lasso Meuh Jeux table. C'est la période à privilégier si les enfants préfèrent jouer plutôt que découvrir les décors d'Halloween.
- **Pendant les dix jours**, le **Train Fantôme**, présenté comme adapté aux petits et aux grands, et le **Village Italie** complètent la promenade. Le thème du train reste frissonnant: à évaluer selon la sensibilité des plus jeunes.

Des activités ponctuelles apparaissent dans le programme jour par jour. Par exemple, l'animation **Learn-O**, associant mouvement et course d'orientation, est annoncée dès 3 ans sur plusieurs journées du premier week-end. Les horaires précis et les conditions de chaque atelier, jeu ou attraction doivent être revérifiés dans le calendrier à la date choisie; **la gratuité de l'entrée ne signifie pas que chaque prestation sur place est gratuite**.

## Quels jours permettent d'entrer gratuitement?

Les [informations pratiques de la foire](https://foiredegrenoble.com/infos-pratiques/) fixent le tarif général à **5 € par adulte en prévente jusqu'au 29 octobre inclus**, puis **7 € à partir du 30 octobre**, en ligne ou sur place. Les moins de 16 ans entrent gratuitement tous les jours.

Pour les adultes, voici les possibilités qui changent vraiment le budget:

- **Vendredi 30 octobre et mercredi 4 novembre:** **entrée gratuite toute la journée, pour tous**. Le 30 tombe pendant le programme d'Halloween; le 4 pendant les derniers jours de l'univers celte.
- **Lundi 2, mardi 3, jeudi 5 et vendredi 6 novembre:** **gratuité pour tous entre 12h et 14h**, et pas seulement pour les enfants. Le 2 et le 5, les plus de 60 ans bénéficient également d'une entrée gratuite; le 3, cette gratuité concerne aussi les femmes.
- **Samedi 7 novembre à partir de 18h:** tarif réduit à **4 €** pour la nocturne gourmande, limitée au hall Gastronomie.
- D'autres gratuités conditionnelles sont annoncées, notamment pour les personnes à mobilité réduite ou titulaires d'une carte d'invalidité, ainsi qu'une offre exceptionnelle pour les visiteurs prénommés Patrick sur présentation d'un justificatif, uniquement sur place.

À titre de comparaison, **deux adultes et deux enfants de moins de 16 ans** paient **10 €** en prévente sur une journée ordinaire, ou **14 €** au tarif général à partir du 30 octobre, contre **0 €** le 30 octobre ou le 4 novembre, avant toute dépense personnelle. Les billets achetés ne sont ni échangeables ni remboursables selon la FAQ.

## À quelle heure venir et quel budget prévoir?

La foire est ouverte **de 10h à 19h**, avec trois soirées particulières selon l'organisateur:

- **Vendredi 30 octobre et vendredi 6 novembre:** nocturnes jusqu'à **22h**, pour profiter plus longtemps des stands.
- **Samedi 7 novembre:** nocturne jusqu'à **22h dans le hall Gastronomie uniquement**. Elle ne signifie pas que toutes les animations ou tous les espaces du salon restent ouverts le soir.

Pour prévoir le coût réel d'une sortie, ajoutez à l'entrée les consommations et les éventuelles animations tarifées, sans leur attribuer un prix non publié. La [FAQ](https://foiredegrenoble.com/visitez/faq/) confirme la présence de restauration rapide, de sandwichs et de restaurants. Le **vestiaire coûte 2 € par article**; un distributeur de billets est disponible et chaque exposant choisit les moyens de paiement acceptés. Les animaux ne sont pas autorisés, sauf chiens d'assistance.

## Venir à Alpexpo en tram ou en voiture

La foire a lieu à **Alpexpo, avenue d'Innsbruck à Grenoble**. L'accès le plus simple sans voiture est le **tram A**, à l'arrêt **Polesud-Alpexpo**, également desservi par les bus **C3, 65 et 67**. L'arrêt **Grand'place** est une autre possibilité sur le tram A, avec plusieurs lignes de bus.

En voiture, l'organisateur indique la **sortie 6 Alpexpo sur la rocade Sud** et un **parking gratuit**. Pendant les nocturnes, contrôlez les derniers départs du réseau de transports avant de partir avec les enfants.

## Et pour un week-end à Grenoble?

Une nuit sur place peut avoir du sens si vous associez la foire à une autre découverte de Grenoble. À environ **800 mètres d'Alpexpo**, le [B&B HOTEL Grenoble Centre Alpexpo](https://www.booking.com/hotel/fr/b-amp-b-grenoble-centre-alpexpo.fr.html) propose notamment des **chambres pour quatre personnes**, utiles pour deux adultes avec deux enfants. Plus près encore, à environ **400 mètres du parc des expositions**, l'[Appartéa Grenoble Alpexpo](https://www.booking.com/hotel/fr/adagio-access-grenoble.fr.html) dispose de **suites familiales avec kitchenette**, pratiques pour préparer un repas simple avec les enfants. Vérifiez la capacité exacte de l'hébergement choisi, les dates disponibles, le prix et les conditions d'annulation avant de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/ete-oh-parcs-grenoble-2026-famille/ | L’Été Oh! Parcs Grenoble 2026: horaires et activités gratuites | sorties | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/cuisine/3-recettes-de-l-isere-faciles-a-preparer-en-famille/ | 3 recettes de l'Isère faciles à préparer en famille | cuisine | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-a-grenoble-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP à Grenoble: où aller avec un enfant de moins de 6 ans? | parentalite | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | Foire du livre de Brive 2026 en famille: dates, auteurs jeunesse et conseils de visite | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine
- /articles/cuisine/noix-de-grenoble-fraiche-ou-seche-laquelle-choisir-pour-cuisiner/ | Noix de Grenoble fraîche ou sèche: laquelle choisir pour cuisiner? | cuisine | Vinay, Isère, Auvergne-Rhône-Alpes
- /articles/sorties/musees-nationaux-gratuits-avec-des-enfants-qui-paie-vraiment-l-entree/ | Musées nationaux gratuits avec des enfants: qui paie vraiment l'entrée? | sorties
- /articles/evenements/mucem-a-la-toussaint-2026-quelle-activite-en-ribambelle-choisir-selon-l-age/ | Mucem à la Toussaint 2026: le programme En Ribambelle avec des enfants | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/voyages/vulcania-a-la-toussaint-2026-1-ou-2-jours-billets-et-ou-dormir/ | Vulcania à la Toussaint 2026: 1 ou 2 jours, billets et où dormir | voyages | Saint-Ours-les-Roches, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/bons-plans/carte-tattoo-isere-2026-2027-comment-obtenir-60-a-120-pour-les-activites-d-un-collegien/ | Carte Tattoo Isère 2026-2027: comment obtenir 60 à 120 € pour les activités d'un collégien | bons-plans | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | Festival du Film pour Enfants 2026 en Isère: séances, ateliers et tarifs | evenements | Vizille, Isère, Auvergne-Rhône-Alpes
- /articles/voyages/chamrousse-en-famille-quel-secteur-choisir-pour-l-hiver-2026-2027/ | Chamrousse en famille: quel secteur choisir pour l'hiver 2026-2027? | voyages | Chamrousse, Isère, Auvergne-Rhône-Alpes
- /articles/sorties/walibi-rhone-alpes-en-famille-quel-billet-choisir-selon-la-taille-des-enfants/ | Walibi Rhône-Alpes en famille: attractions, tailles et billets en 2026 | sorties | Les Avenières Veyrins-Thuellin, Isère, Auvergne-Rhône-Alpes
- /articles/maison/maison-de-vacances-a-lans-en-vercors-en-famille-les-criteres-qui-changent-vraiment-le-sejour/ | Maison de vacances à Lans-en-Vercors en famille: les critères qui changent vraiment le séjour | maison | Lans-en-Vercors, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | Grand Noël 2026 à Vaux-le-Vicomte en famille: billets, offre enfant et animations | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | ALFest 2026 à Annecy en famille: horaires, jeux et braderie | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | Festival du Livre de Colmar 2026 en famille: dates, horaires et animations jeunesse | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | Fêtes de Saint-Nicolas 2026 à Nancy en famille: défilé, villages et animations | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | 2026-10-20T15:29:27.541Z
- opportunity | /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | 2026-10-17T15:41:33.883Z
- opportunity | /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | 2026-10-20T08:52:25.825Z
- opportunity | /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | 2026-10-19T19:48:02.164Z
- opportunity | /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | 2026-10-19T16:47:56.278Z
- opportunity | /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | 2026-10-18T16:46:58.413Z
- opportunity | /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | 2026-10-20T22:29:05.422Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
