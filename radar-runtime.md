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
title: "Festival Playground 2026 : quels spectacles de danse choisir avec les enfants ?"
subtitle: "Du 4 au 29 novembre en Île-de-France : séances publiques, âges, tarifs et accès."
summary: Playground 2026 propose de la danse dès la petite enfance dans plusieurs villes franciliennes. Quatre spectacles à comparer selon l'âge, la durée et le budget, avec les séances réellement ouvertes aux familles.
category: evenements
location:
  city: Bagnolet
  department: Seine-Saint-Denis
  region: Île-de-France
keywords:
  - festival Playground 2026
  - spectacles danse enfants Île-de-France
  - Playground 2026 billetterie famille
  - danse bébé Romainville novembre 2026
  - Little Villette A corpo libero
sources:
  - title: Rencontres chorégraphiques — Playground 26, programmation officielle
    url: https://rencontreschoregraphiques.com/festival/playground-26/
  - title: Rencontres chorégraphiques — Jean Romuald, un garçon de son âge
    url: https://rencontreschoregraphiques.com/spectacle/mickael-phelippeau-jean-romuald-un-garcon-de-son-age/
  - title: Rencontres chorégraphiques — AudioBébéDanse!
    url: https://rencontreschoregraphiques.com/spectacle/lorena-dozio-audiobebedanse-2/
  - title: "Rencontres chorégraphiques — #petit CORPS"
    url: https://rencontreschoregraphiques.com/spectacle/mathieu-heyraud-petit-corps/
  - title: Rencontres chorégraphiques — A corpo libero
    url: https://rencontreschoregraphiques.com/spectacle/la-baracca-a-corpo-libero/
  - title: Théâtre de Suresnes — Les Dimanches en famille, tarifs
    url: https://www.theatre-suresnes.fr/dimanchesenfamille/
  - title: Théâtre de Suresnes — Billetterie Jean-Romuald du 29 novembre
    url: https://billetterie.theatre-suresnes.fr/selection/event/date?productId=10229855074717
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants
  decision: Choisir une représentation réellement accessible aux familles selon l'âge de l'enfant, la ville, l'horaire et le budget, sans confondre séances publiques et scolaires.
  affiliationPotential: "Aucune billetterie Playground pertinente vérifiée chez GetYourGuide, Tiqets ou Klook : réserver via l'organisateur ou la salle. Pour un week-end autour de Little Villette, Campanile Prime Paris 19 - La Villette présente des chambres familiales sur Booking.com ; disponibilité, capacité et prix aux dates voulues non confirmés."
  gsc:
    retrievedAt: 2026-10-26T01:34:33+01:00
    dataThrough: 2026-10-23
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Organisateur — Playground 26, programmation officielle »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-11-29
---

Du **4 au 29 novembre 2026**, le festival de danse jeune public Playground investit 57 lieux dans 34 villes d'Île-de-France. Il annonce plus de 150 rendez-vous, mais **tous ne sont pas ouverts aux familles** : une partie des représentations se déroule dans les écoles ou sur des créneaux scolaires. Pour choisir une sortie, mieux vaut partir de l'âge de l'enfant et d'une séance publique précise plutôt que du nombre total de spectacles.

## Quel spectacle choisir selon l'âge ?

### Avec un bébé : AudioBébéDanse! à Romainville

Le **samedi 21 novembre à 10 h ou à 16 h 30**, Le Pavillon de Romainville accueille *AudioBébéDanse!*, une expérience sensorielle de **38 minutes** imaginée par Lorena Dozio. Sons, voix et mouvements invitent les tout-petits à explorer l'espace avec les danseuses. **Tarif unique annoncé : 3 €**.

**Âge à confirmer avant de réserver :** la [fiche de l'organisateur](https://rencontreschoregraphiques.com/spectacle/lorena-dozio-audiobebedanse-2/) affiche un pictogramme « dès 6 mois », alors que le descriptif présente le projet pour les enfants **de 9 mois à 2 ans**. Pour un bébé de 6 à 8 mois, demandez au Pavillon quel seuil s'applique à cette représentation. Vérifiez également le nombre de billets nécessaires pour les adultes accompagnants et les enfants ; le tarif affiché ne précise pas une gratuité des bébés.

Le Pavillon se trouve **28 avenue Paul-Vaillant-Couturier, 93230 Romainville**, près du métro 11 **Romainville–Carnot** (bus 129 et 318, arrêt Mairie de Romainville). La fiche mentionne un accès PMR et une guinguette proposant goûters et petite restauration. Les deux séances du vendredi 20 novembre, à 9 h 30 et 10 h 45, sont **scolaires** : elles ne sont pas les créneaux à choisir pour une sortie individuelle.

### Dès 1 an : A corpo libero à Little Villette

Pour un enfant qui découvre la danse, *A corpo libero* propose un solo de **35 minutes**, sans récit compliqué : l'interprète Giada Ciccolini joue avec les gestes, l'équilibre et les réactions de la salle. Le spectacle est annoncé **dès 1 an**.

À **Little Villette, Paris 19e**, six séances publiques sont prévues : **samedi 28 et dimanche 29 novembre à 11 h, 15 h et 17 h**. Les tarifs affichés sont de **16 € plein tarif** et **10 € réduit**, notamment pour les moins de 28 ans, les personnes en situation de handicap et leur accompagnateur, les demandeurs d'emploi et les bénéficiaires de minima sociaux. Pour deux adultes au plein tarif et deux enfants éligibles au réduit, le calcul théorique est de **52 €**, sous réserve des catégories effectivement proposées à la commande.

Little Villette est indiquée au **211 galerie de la Villette, 75019 Paris**, accessible par le métro 5 et le tram T3b, station **Porte de Pantin**. L'organisateur signale un accès PMR ; plusieurs restaurants se trouvent dans le parc. Si vous ajoutez une autre activité, notre guide de la [Cité des sciences en famille](https://www.fam-space.fr/articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/) aide à choisir un billet et un créneau adaptés, sans supposer que les deux lieux partagent une billetterie.

### Dès 6 ans : #petit CORPS à Sevran

**Samedi 21 novembre à 16 h**, *#petit CORPS* mêle danse, dessin et questions d'enfants sur le corps : pourquoi grandit-on, bouge-t-on ou est-on différent ? La participation fait partie du spectacle. **Durée : 60 minutes ; âge conseillé : dès 6 ans.**

À la **salle des fêtes de Sevran, 9 rue Gabriel-Péri**, le prix annoncé est de **7 € plein tarif** et **5 € réduit**. Ce dernier concerne notamment les **moins de 20 ans**, les familles nombreuses titulaires de la carte correspondante, les étudiants, les demandeurs d'emploi et les bénéficiaires du RSA. Deux adultes au plein tarif et deux enfants de 6 et 10 ans au tarif réduit paieraient donc **24 €**, si ces tarifs sont toujours disponibles à la réservation.

L'accès indiqué est le **RER B Sevran–Livry** ou le bus 607 (arrêt Gaston-Bussière). Attention : les deux représentations du **vendredi 20 novembre**, à 9 h 30 et 14 h 30, sont **réservées aux scolaires**.

### Dès 8 ans : Jean Romuald, un garçon de son âge, dans trois villes

Ce solo de **60 minutes** interprété par Jean-Romuald Fessin, sur une chorégraphie de Mickaël Phelippeau, met en scène un danseur qui construit son univers à partir de ses mouvements et de ses propres musiques. Trois séances publiques permettent de choisir selon le lieu, l'horaire et le prix :

- **Mercredi 4 novembre à 20 h**, Théâtre L'Échangeur, **59 avenue du Général-de-Gaulle à Bagnolet** : **8 € tarif unique**. Métro 3 **Gallieni** ; le bar du théâtre ouvre une heure avant le spectacle. L'horaire tardif peut peser pour un enfant de 8 ans.
- **Samedi 7 novembre à 18 h**, **Le Pavillon à Romainville** : **3 € tarif unique**. C'est la séance la moins chère de cette sélection pour une famille ; quatre billets au tarif annoncé reviennent à **12 €**.
- **Dimanche 29 novembre à 16 h**, **Théâtre de Suresnes Jean Vilar**, **16 place Stalingrad** : la fiche du festival affiche **25 € plein tarif**, **20 € réduit**, **12 € pour les moins de 28 ans** et **10 € pour les moins de 12 ans**. **Attention à une différence de tarifs** : la grille générale « Dimanches en famille » du théâtre indique **8 € pour les moins de 12 ans** en catégorie B. Vérifiez le montant effectivement proposé pour cette séance avant de calculer le budget. Le théâtre dispose d'un parking gratuit annoncé et d'un accès par le tram T2 puis bus ou par le train L.

La séance du **vendredi 6 novembre à 14 h 30 à Romainville** est scolaire, pas une quatrième possibilité de réservation familiale. Pour Suresnes, la billetterie indique également que les enfants de **moins de 3 ans ne sont pas admis en salle** ; le spectacle reste conseillé dès 8 ans.

## Réserver sans se tromper de séance

Le [programme officiel Playground 2026](https://rencontreschoregraphiques.com/festival/playground-26/) distingue les représentations publiques des séances scolaires. Choisissez d'abord **la date et le lieu**, puis ouvrez la fiche du spectacle pour accéder à la billetterie de l'organisateur ou de la salle : les circuits de réservation ne sont pas nécessairement identiques à Bagnolet, Sevran, Suresnes et La Villette. Les tarifs ci-dessus sont ceux affichés lors de la préparation de ce guide ; **ils ne garantissent ni une place ni le prix final**.

Pour un enfant très jeune, confirmez les conditions d'accompagnement et la politique d'accès en poussette directement auprès de la salle : un pictogramme PMR ne garantit pas qu'une poussette soit autorisée dans l'espace de représentation. Pour une famille qui enchaîne plusieurs lieux, prévoyez du temps pour les correspondances. Notre guide [Transports à Paris avec des enfants](https://www.fam-space.fr/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/) compare les tickets et forfaits franciliens selon le nombre de trajets.

## Et si vous venez passer le week-end à Paris ?

Si vous assistez à plusieurs spectacles ou prévoyez une journée supplémentaire autour de La Villette, vous pouvez [examiner les chambres du Campanile Prime Paris 19 – La Villette sur Booking.com](https://www.booking.com/hotel/fr/campanile-prime-paris19-lavillette.fr.html). Vérifiez **la capacité exacte pour adultes et enfants**, les dates disponibles, les conditions d'annulation et le trajet jusqu'à la salle avant de réserver. Cet hébergement n'est pas nécessaire pour une sortie à la journée et ne convient pas automatiquement à tous les lieux du festival.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | Festival MARMOE 2026 à Montreuil: spectacles, ateliers et tarifs en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/jardins-ouverts-2026-ile-de-france-en-famille/ | Jardins ouverts 2026: choisir une animation pour les enfants en Île-de-France | evenements
- /articles/activites/visiter-le-stade-de-france-en-famille-coulisses-musee-et-conseils-pratiques/ | Visiter le Stade de France en famille: coulisses, musée et conseils pratiques | activites | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/ateliers-au-jardin-de-la-pmi-a-bobigny-quelles-dates-choisir-cet-automne/ | Ateliers au jardin de la PMI à Bobigny: quelles dates choisir cet automne? | evenements | Bobigny, Seine-Saint-Denis, Île-de-France
- /articles/sorties/musee-de-l-air-et-de-l-espace-a-la-toussaint-2026-quelle-activite-choisir-selon-l-age/ | Toussaint 2026 au Musée de l'Air et de l'Espace: quelle activité choisir avec un enfant? | sorties | Le Bourget, Seine-Saint-Denis, Île-de-France
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/les-expressifs-2026-a-poitiers-trois-jours-de-spectacles-gratuits/ | Les Expressifs 2026 à Poitiers: trois jours de spectacles gratuits | evenements | Poitiers, Vienne, Nouvelle-Aquitaine
- /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | Monument jeu d'enfant 2026 à Saint-Denis: atelier Dagobert le 17 octobre | evenements | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/voyages/dormir-a-saint-denis-pour-visiter-paris-avec-des-enfants-pleyel-ou-basilique/ | Dormir à Saint-Denis pour visiter Paris avec des enfants: Pleyel ou Basilique? | voyages | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/sorties/musee-de-l-air-et-de-l-espace-du-bourget-en-famille-tarifs-avions-et-activites/ | Musée de l'Air et de l'Espace du Bourget en famille: tarifs, avions et activités | sorties | Le Bourget, Seine-Saint-Denis, Île-de-France
- /articles/evenements/halloween-2026-au-zoo-de-la-fleche-entree-offerte-aux-enfants-deguises/ | Halloween 2026 au Zoo de La Flèche: tarifs, jeux et entrée offerte aux enfants déguisés | evenements | La Flèche, Sarthe, Pays de la Loire
- /articles/evenements/noel-au-pays-du-jouet-2026-a-moirans-en-montagne-preparer-sa-sortie-en-famille/ | Noël au Pays du Jouet 2026 à Moirans-en-Montagne: préparer sa sortie en famille | evenements | Moirans-en-Montagne, Jura, Bourgogne-Franche-Comté
- /articles/evenements/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/ | Fête foraine de Dijon 2026: dates, horaires et budget avec les enfants | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges/ | Noël à Aix-en-Provence 2026 en famille: marchés, santons et manèges | evenements | Aix-en-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/village-du-pere-noel-a-montbazon-2026-dates-activites-et-budget-en-famille/ | Village du Père Noël à Montbazon 2026: dates, activités et budget en famille | evenements | Montbazon, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-a-orleans-2026-en-famille-marches-horaires-et-maneges-apres-noel/ | Marché de Noël d’Orléans 2026 en famille: horaires, lieux et manèges | evenements | Orléans, Loiret, Centre-Val de Loire
- /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | Noël à Nice 2026 en famille: village, spectacles et crèche | evenements | Nice, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | Noël à Toulouse 2026 en famille: marchés, Père Noël et patinoire | evenements | Toulouse, Haute-Garonne, Occitanie
- /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | Thoiry Lumières Sauvages 2026-2027: dates, billets et visite en famille | evenements | Thoiry, Yvelines, Île-de-France
- /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | Noël à Nantes 2026: marché de Noël et Voyage en hiver en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | Noël à Chenonceau 2026: décors, nocturnes et tarifs en famille | evenements | Chenonceaux, Indre-et-Loire, Centre-Val de Loire

### Historique Radar lié

- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- opportunity | /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | 2026-10-25T23:35:17.860Z
- opportunity | /articles/evenements/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/ | 2026-10-25T17:34:53.718Z
- opportunity | /articles/evenements/halloween-2026-au-zoo-de-la-fleche-entree-offerte-aux-enfants-deguises/ | 2026-10-25T20:27:07.814Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | 2026-10-13T09:50:29.435Z
- opportunity | /articles/sorties/musee-de-l-air-et-de-l-espace-a-la-toussaint-2026-quelle-activite-choisir-selon-l-age/ | 2026-10-05T20:22:10.692Z
- opportunity | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-10-24T12:31:27.784Z
- opportunity | /articles/evenements/noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges/ | 2026-10-25T15:16:03.590Z
- opportunity | /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | 2026-10-24T15:27:41.430Z
- opportunity | /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | 2026-10-25T04:31:33.540Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
