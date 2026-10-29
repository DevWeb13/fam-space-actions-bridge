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
title: "Marché de Noël 100 % Côte-d’Or 2026 à Dijon : samedi ou dimanche avec les enfants ?"
subtitle: Spectacles à 11 h, ateliers gratuits et créneaux du Père Noël les 12 et 13 décembre
summary: Aux Jardins du Département, le samedi mise sur les comptines et les décorations de Noël, le dimanche sur la magie et les biscuits. Horaires précis pour choisir sa sortie en famille.
category: evenements
location:
  city: Dijon
  department: Côte-d'Or
  region: Bourgogne-Franche-Comté
keywords:
  - marché de Noël du Département Dijon 2026
  - marché de Noël 100 % Côte-d'Or 12 13 décembre
  - Jardins du Département Dijon Noël enfants
  - spectacles ateliers gratuits Père Noël Dijon
sources:
  - title: Département de la Côte-d'Or — Programme officiel du Marché de Noël 2026
    url: https://www.cotedor.fr/agenda/magie-et-gourmandises-vous-attendent-au-marche-de-noel-du-departement-0
  - title: DiviaMobilités — Parking Trémouille-Marché et desserte République
    url: https://information.divia.fr/sinformer/voiture/parkings-en-ouvrage/tremouille-marche/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants
  decision: Choisir le samedi ou le dimanche et le bon horaire selon l'âge des enfants, le spectacle souhaité, l'atelier et la rencontre avec le Père Noël, sans payer d'entrée.
  affiliationPotential: "Entrée, ateliers et animations gratuits : aucune billetterie à proposer. Pour un week-end à Dijon, City Loft Apparthotel (https://www.booking.com/hotel/fr/city-loft.fr.html) : studio familial jusqu'à 4 personnes, kitchenette avec micro-ondes, lit bébé sur demande (8 € par séjour selon la fiche Booking). Disponibilité et prix des 12-13 décembre 2026 non vérifiés."
  gsc:
    retrievedAt: 2026-10-29T02:27:59+01:00
    dataThrough: 2026-10-26
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Département de la Côte-d'Or — Marché de Noël 100 % Côte-d'Or, programme 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-13T18:00:00+01:00
---

Les **samedi 12 et dimanche 13 décembre 2026**, les Jardins du Département, au **23 boulevard de la Trémouille à Dijon**, accueillent le Marché de Noël 100 % Côte-d’Or. L’entrée, les spectacles et les ateliers sont gratuits. Pour choisir son jour avec des enfants, la différence se joue surtout sur le spectacle de 11 h et l’atelier de l’après-midi : comptines et décorations le samedi, magie et biscuits le dimanche.

## Samedi ou dimanche : quel programme choisir ?

**Samedi 12 décembre, de 10 h à 21 h** : le spectacle *Swann au pays des comptines* est annoncé de **11 h à 12 h**. L’après-midi, les enfants peuvent participer à un atelier manuel de décoration de Noël. Le programme comprend aussi une démonstration culinaire de **12 h 30 à 14 h**, une chorale de **17 h 30 à 18 h 30** et un concert des Rockers de Noël de **18 h 30 à 20 h**. Ce jour convient particulièrement aux familles qui préfèrent les comptines ou souhaitent profiter du marché en fin de journée.

**Dimanche 13 décembre, de 9 h à 18 h** : le spectacle *Parlons Magie !* se tient de **11 h à 12 h**. L’atelier de l’après-midi est consacré à la décoration de biscuits. Deux concerts sont prévus ensuite : Rosebud de **14 h 30 à 15 h 30**, puis un concert folk de **16 h à 17 h**. C’est le choix le plus adapté si les enfants préfèrent la magie ou une activité gourmande.

Les deux jours, le marché annonce un photocall, un atelier des lutins et **21 exposants de Côte-d’Or**. La liste détaillée des exposants n’est pas encore publiée. Les horaires des ateliers de l’après-midi ne sont pas précisés : ne prévoyez pas une séance à heure fixe sans confirmation.

## À quelle heure rencontrer le Père Noël ?

Les créneaux annoncés par le Département sont suffisamment précis pour organiser la visite autour du spectacle ou de l’atelier.

- **Samedi** : 12 h–13 h, 13 h 30–14 h, 15 h–16 h, 16 h 30–17 h 30, 18 h–18 h 45 et 19 h 15–20 h.
- **Dimanche** : 12 h–13 h, 14 h–15 h, 15 h 30–16 h 30 et 17 h–17 h 45.

Avec un jeune enfant, une formule simple consiste à assister au spectacle de 11 h puis à rejoindre le Père Noël à partir de midi, en prévoyant une éventuelle attente. Une borne photo est annoncée à proximité de sa rencontre. Le programme ne garantit ni un temps d'attente ni une photo sans file.

Le [programme officiel du Département](https://www.cotedor.fr/agenda/magie-et-gourmandises-vous-attendent-au-marche-de-noel-du-departement-0) reste la référence pour vérifier les créneaux avant de partir.

## Accès, poussette et repas des tout-petits

Le marché se déroule **dans les Jardins du Département**, et non sur les emplacements habituels des autres marchés de Noël dijonnais. L’adresse à utiliser est **23 boulevard de la Trémouille, 21000 Dijon**.

En tramway, la station **République**, desservie par les lignes **T1 et T2**, permet de rejoindre le secteur. En voiture, le parking payant **Trémouille-Marché**, au 7 boulevard de la Trémouille, est une possibilité à proximité ; [DiviaMobilités en donne les accès et les conditions](https://information.divia.fr/sinformer/voiture/parkings-en-ouvrage/tremouille-marche/). Vérifiez les éventuelles perturbations et le stationnement avant le départ.

La visite comporte des espaces extérieurs : vêtements chauds, protection contre la pluie et chaussures adaptées sont utiles en décembre. Avec une poussette, prévoyez de pouvoir ralentir dans les passages fréquentés et d’attendre devant les animations. Le Département ne précise pas dans son programme la présence de table à langer, de point de chauffe pour les repas bébé ni de zone abritée pour les nourrissons. Emportez donc de quoi nourrir et changer votre enfant sans compter sur ces équipements. Pour un repas sur place, les exposants proposent des produits locaux, mais les menus et tarifs ne sont pas encore détaillés.

## Prolonger le week-end à Dijon

Si vous venez de plus loin pour les deux journées, le [City Loft Dijon sur Booking.com](https://www.booking.com/hotel/fr/city-loft.html), situé rue des Godrans dans le centre, propose notamment des studios familiaux avec kitchenette et micro-ondes : un point pratique pour les repas des enfants. Vérifiez la capacité exacte du logement, les conditions d’un éventuel lit bébé, le prix total et la disponibilité pour les **12 et 13 décembre 2026** avant de réserver ; ils ne sont pas confirmés pour ce week-end.

Pour ajouter une visite gourmande sans confondre les deux activités, découvrez aussi [la Fabrique de pain d’épices Mulot & Petitjean à Dijon : horaires, tarifs et réservation](/articles/cuisine/fabrique-de-pain-d-epices-a-dijon-faut-il-reserver-et-combien-prevoir-avec-des-enfants/). Ses horaires habituels concernent notamment le samedi, pas le dimanche : vérifiez l’ouverture effective avant de l’associer au marché.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | Foire de Dijon 2026 avec les enfants: gratuités, ateliers et Ferme Côte-d'Or | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/parentalite/cercles-de-parents-en-cote-d-or-trois-seances-gratuites-pour-echanger-pendant-les-premieres-annees/ | Cercles de Parents en Côte-d'Or: trois séances gratuites pour échanger pendant les premières années | parentalite | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/vie-pratique/frais-scolaires-en-cote-d-or-quelles-aides-demander-au-departement/ | Frais scolaires en Côte-d'Or: quelles aides demander au Département? | vie-pratique | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/ | Fête foraine de Dijon 2026: dates, horaires et budget avec les enfants | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | Noël à Nice 2026 en famille: village, spectacles et crèche | evenements | Nice, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | Noël des Alpes 2026 à Annecy en famille: marché, patinoire et illuminations | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/bons-plans/vacaf-2026-en-cote-d-or-jusqu-a-80-du-sejour-pris-en-charge/ | VACAF 2026 en Côte-d'Or: jusqu'à 80 % du séjour pris en charge | bons-plans | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/cuisine/fabrique-de-pain-d-epices-a-dijon-faut-il-reserver-et-combien-prevoir-avec-des-enfants/ | Fabrique de pain d'épices à Dijon: faut-il réserver et combien prévoir avec des enfants? | cuisine | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/maison/canape-matelas-ou-electromenager-a-dijon-donner-faire-enlever-ou-aller-en-dechetterie/ | Canapé, matelas ou électroménager à Dijon: donner, faire enlever ou aller en déchetterie ? | maison | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/activites/parc-de-l-auxois-avec-des-enfants-comment-combiner-animaux-maneges-et-piscine/ | Parc de l'Auxois avec des enfants: comment combiner animaux, manèges et piscine | activites | Arnay-sous-Vitteaux, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/sorties/cite-des-climats-a-beaune-en-famille-tarifs-parcours-enfants-et-billets/ | Cité des Climats à Beaune en famille: tarifs, parcours enfants et billets | sorties | Beaune, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | Marchés de Noël de Tours 2026 en famille: lieux, dates et budget | evenements | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël de Saint-Étienne 2026 en famille: dates, horaires et accès | evenements | Saint-Étienne, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/la-seine-musicale-en-famille-en-2027-quels-concerts-et-ateliers-selon-l-age/ | La Seine Musicale en famille en 2027: quels concerts et ateliers selon l'âge ? | evenements | Boulogne-Billancourt, Hauts-de-Seine, Île-de-France
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires et accès | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir/ | Festival des Jeux de Cannes 2027 en famille: billets, âges et visite | evenements | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans/ | Foulée Blanche 2027 en famille: courses, âges, tarifs et programme à Autrans | evenements | Autrans-Méaudre en Vercors, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | Noël à Fontevraud 2026: patinoire, marché, dates et tarifs en famille | evenements | Fontevraud-l'Abbaye, Maine-et-Loire, Pays de la Loire
- /articles/evenements/batiment-b-a-saint-denis-decouvrir-le-street-art-en-famille/ | Bâtiment B à Saint-Denis: découvrir le street art en famille | evenements | Saint-Denis, La Réunion, La Réunion
- /articles/evenements/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/ | Noël 2026 au château royal de Blois: décors, spectacles et tarifs en famille | evenements | Blois, Loir-et-Cher, Centre-Val de Loire

### Historique Radar lié

- opportunity | /articles/evenements/festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir/ | 2026-10-28T09:26:08.391Z
- opportunity | /articles/evenements/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/ | 2026-10-25T17:34:53.718Z
- opportunity | /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | 2026-10-21T16:31:41.000Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T18:37:09.008Z
- opportunity | /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | 2026-10-28T21:29:26.054Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/ | 2026-10-27T22:28:21.356Z
- opportunity | /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | 2026-10-28T01:34:03.741Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
