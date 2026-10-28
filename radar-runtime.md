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
title: "Marchés de Noël de Tours 2026 en famille : quel lieu choisir et combien prévoir ?"
subtitle: "Chalets municipaux, Village Gourmand, grande roue et patinoire roller : les dates et les bons choix avec des enfants"
summary: À Tours, les chalets municipaux ouvrent du 27 novembre au 27 décembre 2026, tandis que le Village Gourmand accueille les familles du 20 novembre au 3 janvier. Lieux, horaires, attractions payantes et accès pour préparer la sortie.
category: evenements
location:
  city: Tours
  department: Indre-et-Loire
  region: Centre-Val de Loire
keywords:
  - marché de Noël Tours 2026
  - Village Gourmand Tours 2026
  - grande roue Tours Noël 2026
  - patinoire roller Tours
  - Noël Tours en famille
sources:
  - title: Ville de Tours - Marchés de Noël 2026
    url: https://formulaires.services.tours.fr/animations-commerciales/candidature-au-marche-de-noel-tours/
  - title: Village Gourmand de Tours - Horaires, tarifs et programme 2026-2027
    url: https://levillagegourmand.fr/
  - title: Touraine Val de Loire - Village Gourmand
    url: https://www.tourainevaldeloire.com/agenda/tout-lagenda/village-gourmand-tours-fr-5239187/
  - title: Fil Bleu - Tramway ligne A
    url: https://www.filbleu.fr/horaires-et-trajets/toutes-les-lignes/ligne-a
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand
  decision: Savoir quel lieu choisir selon la date, l'âge des enfants et le budget, et organiser une sortie simple sans confondre les trois emplacements.
  affiliationPotential: "Marchés en accès libre, sans billetterie partenaire naturelle. Hébergement familial vérifié sur Booking.com : Nemea Appart Hotel Quai Victor Tours Centre, proche de la gare, avec appartements équipés et chambres familiales (https://www.booking.com/hotel/fr/nemea-appart-39-residence-le-quai-victor.html)."
  gsc:
    retrievedAt: 2026-10-28T03:28:35+01:00
    dataThrough: 2026-10-25
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Tours - Marchés de Noël 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-03
---

À Tours, « le marché de Noël » désigne plusieurs lieux qui ne suivent pas le même calendrier. Pour une balade entre les chalets, les marchés municipaux occupent **le boulevard Heurteloup et la place de la Résistance du 27 novembre au 27 décembre 2026**. Pour manger sur place, monter dans la grande roue ou essayer la patinoire roller, direction **le Village Gourmand, place Anatole-France, du 20 novembre 2026 au 3 janvier 2027**. On peut aussi combiner les deux pendant leur période commune.

## Trois lieux, deux ambiances : lequel choisir ?

Les chalets des **marchés municipaux** sont répartis sur deux emplacements, boulevard Heurteloup et place de la Résistance. C'est l'option à privilégier pour flâner, regarder les étals et laisser chacun choisir sa halte. La [Ville de Tours confirme les dates et les deux lieux](https://formulaires.services.tours.fr/animations-commerciales/candidature-au-marche-de-noel-tours/), mais **les horaires visiteurs 2026 ne sont pas encore confirmés** dans cette annonce : ne vous fiez pas à un ancien programme pour organiser une visite tardive.

Le **Village Gourmand**, place Anatole-France au bout de la rue Nationale, est davantage tourné vers la restauration et les attractions. Son [programme 2026-2027](https://levillagegourmand.fr/) annonce une trentaine de chalets gourmands, une grande roue, une patinoire **à rollers** — et non une patinoire sur glace — ainsi que des animations ponctuelles. L'accès au village est **gratuit** : seules les consommations et les activités payantes entrent dans le budget. Le programme indique notamment une ouverture avec magie et musique le 20 novembre, puis maquillage pour les enfants et musique le 22 novembre ; pour rencontrer le Père Noël ou assister à un concert précis, vérifiez le jour annoncé plutôt que de supposer une animation quotidienne.

**Selon la date :** du 20 au 26 novembre, seul le Village Gourmand est annoncé ouvert parmi ces lieux ; du 27 novembre au 27 décembre, les trois emplacements peuvent se visiter ; du 28 décembre au 3 janvier, le Village Gourmand continue après la fermeture prévue des marchés municipaux.

## Grande roue et patinoire roller : quel budget ?

L'organisateur affiche **5 € par personne et par attraction**. À quatre, un tour de grande roue revient donc à **20 €** ; si les quatre personnes font également la patinoire roller, les deux activités totalisent **40 €**, hors repas et déplacements.

Un tarif de **4 €** est annoncé **le mercredi pour les moins de 12 ans**, et les jeudis et vendredis pour les étudiants, **hors vacances scolaires**. Ce n'est pas une réduction générale pour tous les enfants ou tous les mercredis. Un pass « Gliss » à 49 € existe pour la patinoire, plutôt destiné à plusieurs séances. L'organisateur ne précise pas sur sa page générale l'âge minimum, les équipements de protection ni les conditions d'accompagnement des plus jeunes : demandez-les sur place avant de promettre l'activité à un petit enfant.

Pour une sortie économique, on peut simplement traverser les chalets et choisir une gourmandise, sans acheter de tour de manège.

## Horaires du Village Gourmand et jours fériés

Le Village Gourmand annonce une ouverture **de 12 h à 22 h**, prolongée **jusqu'à 23 h les vendredis et samedis**. La grande roue et la patinoire roller ouvrent **de 13 h à 22 h du lundi au jeudi**, **de 13 h à 23 h le vendredi**, et **de 11 h à 23 h le week-end et pendant les vacances scolaires**.

Deux exceptions importantes sont publiées par l'organisateur :
- **25 décembre :** Village Gourmand de **15 h à 21 h** ; grande roue et patinoire de **15 h à 23 h**.
- **1er janvier :** Village Gourmand de **15 h à 22 h** ; grande roue et patinoire de **15 h à 23 h**.

Les horaires des attractions ne sont donc pas forcément ceux des chalets. Ils peuvent évoluer : vérifiez la page de l'organisateur avant de partir, particulièrement les jours fériés.

## Venir en tram, circuler avec une poussette et faire une pause

Pour le Village Gourmand, l'accès le plus simple en tram est la **ligne A, arrêt Porte de Loire**. Depuis la gare de Tours, l'organisateur indique de prendre le tram A direction Vaucanson. Consultez les [horaires et éventuelles perturbations sur Fil Bleu](https://www.filbleu.fr/horaires-et-trajets/toutes-les-lignes/ligne-a) avant le trajet retour. Les parkings Anatole-France et Nationale sont également signalés, sans garantie de place disponible.

Pour relier les sites à pied, la rue Nationale permet de rejoindre la place Anatole-France depuis le centre ; le boulevard Heurteloup constitue un autre emplacement, à ne pas confondre avec la place de la Résistance. Avec une poussette, privilégiez une visite courte et des pauses régulières : les allées peuvent être encombrées lors des soirées et week-ends. Aucun espace change-bébé, micro-ondes ou service de prêt de poussette n'est confirmé par les organisateurs dans les informations consultées. Prévoyez donc le nécessaire pour le repas et le change des plus petits, et vérifiez les modalités d'accès à la grande roue avant de faire la queue.

## Transformer la balade en week-end

Si vous arrivez en train et souhaitez dormir à Tours, le [Nemea Appart Hotel Quai Victor Tours Centre sur Booking.com](https://www.booking.com/hotel/fr/nemea-appart-39-residence-le-quai-victor.html) est une piste près de la gare. Certains logements disposent d'une kitchenette avec micro-ondes, pratique pour les repas d'un jeune enfant. **Vérifiez la capacité exacte du logement, les lits disponibles, les conditions d'accueil des enfants et le prix à vos dates** : un studio présenté pour deux adultes ne convient pas automatiquement à une famille de quatre.

Pour prolonger le séjour par une visite différente des marchés, notre guide de [Noël 2026 au château royal d'Amboise](/articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/) détaille le parcours décoré, les tarifs et les nocturnes sur réservation.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/ | Marché de Noël de Lille 2026 en famille: village, Grande Roue et infos pratiques | evenements | Lille, Nord, Hauts-de-France
- /articles/parentalite/laep-en-indre-et-loire-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP en Indre-et-Loire: où aller avec un enfant de moins de 6 ans | parentalite | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | Noël à Toulouse 2026 en famille: marchés, Père Noël et patinoire | evenements | Toulouse, Haute-Garonne, Occitanie
- /articles/evenements/village-du-pere-noel-a-montbazon-2026-dates-activites-et-budget-en-famille/ | Village du Père Noël à Montbazon 2026: dates, activités et budget en famille | evenements | Montbazon, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/marche-de-noel-de-cusset-2026-en-famille-quel-jour-choisir/ | Marché de Noël de Cusset 2026 en famille: quel jour choisir? | evenements | Cusset, Allier, Auvergne-Rhône-Alpes
- /articles/vie-pratique/emprunter-des-jeux-a-tours-mirabeau-ou-la-maison-des-jeux/ | Emprunter des jeux à Tours: Mirabeau ou la Maison des Jeux? | vie-pratique | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/vie-pratique/transport-scolaire-remi-en-indre-et-loire-que-faire-apres-la-date-limite-2026/ | Transport scolaire Rémi en Indre-et-Loire: que faire après la date limite 2026 | vie-pratique | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-2026-a-villandry-spectacles-et-ateliers-a-choisir-selon-l-age/ | Noël 2026 à Villandry: décors, spectacle d'ombres et ateliers en famille | evenements | Villandry, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | Noël à Chenonceau 2026: décors, nocturnes et tarifs en famille | evenements | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | Noël au château d'Amboise 2026: visite, nocturnes et tarifs en famille | evenements | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | Monument Jeu d'enfant 2026 à Azay-le-Rideau: animaux cachés et contes en famille | evenements | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/voyages/azay-le-rideau-en-famille-une-journee-entre-chateau-et-troglodytes/ | Azay-le-Rideau en famille: une journée entre château et troglodytes | voyages | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/sorties/villandry-en-famille-jardins-seuls-ou-chateau-et-jardins/ | Villandry en famille: jardins seuls ou château et jardins ? | sorties | Villandry, Indre-et-Loire, Centre-Val de Loire
- /articles/bons-plans/amboise-city-pass-2026-quand-devient-il-vraiment-rentable/ | Amboise City Pass 2026: quand devient-il vraiment rentable? | bons-plans | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/cuisine/marche-d-amboise-composer-un-pique-nique-tourangeau-avec-des-enfants/ | Marché d'Amboise: composer un pique-nique tourangeau avec des enfants | cuisine | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans/ | Foulée Blanche 2027 en famille: courses, âges, tarifs et programme à Autrans | evenements | Autrans-Méaudre en Vercors, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | Noël à Fontevraud 2026: patinoire, marché, dates et tarifs en famille | evenements | Fontevraud-l'Abbaye, Maine-et-Loire, Pays de la Loire
- /articles/evenements/batiment-b-a-saint-denis-decouvrir-le-street-art-en-famille/ | Bâtiment B à Saint-Denis: découvrir le street art en famille | evenements | Saint-Denis, La Réunion, La Réunion
- /articles/evenements/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/ | Noël 2026 au château royal de Blois: décors, spectacles et tarifs en famille | evenements | Blois, Loir-et-Cher, Centre-Val de Loire

### Historique Radar lié

- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | 2026-10-11T16:33:21.125Z
- opportunity | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-10-24T12:31:27.784Z
- opportunity | /articles/evenements/noel-2026-a-villandry-spectacles-et-ateliers-a-choisir-selon-l-age/ | 2026-10-27T10:35:41.254Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | 2026-10-24T06:28:53.730Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/ | 2026-10-27T22:28:21.356Z
- opportunity | /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | 2026-10-28T01:34:03.741Z
- opportunity | /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | 2026-10-24T23:34:36.270Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
