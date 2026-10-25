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
title: "Noël à Nice 2026 en famille : village, spectacles et crèche"
subtitle: "Du 27 novembre au 3 janvier : les bonnes sorties selon l'âge, les dates et les réservations"
summary: "Village de Noël au jardin Albert-Ier, spectacles gratuits dès 1 an et crèche Lou Presèpi : les dates et inscriptions à connaître pour sortir avec les enfants à Nice."
category: evenements
location:
  city: Nice
  department: Alpes-Maritimes
  region: Provence-Alpes-Côte d'Azur
keywords:
  - Noël Nice 2026 en famille
  - Village de Noël Nice 2026 enfants
  - spectacles gratuits Noël Nice réservation
  - Lou Presèpi Nice décembre 2026
sources:
  - title: Ville de Nice - Noël à Nice 2026 et agenda par âge
    url: https://www.nice.fr/noel-a-nice/
  - title: Ville de Nice - Village de Noël 2026, dates officielles
    url: https://www.nice.fr/demarches/appel-a-candidature-village-de-noel-2026/
  - title: Ville de Nice - Mon tout petit Noël, 8 décembre
    url: https://www.nice.fr/agenda/mon-tout-petit-noel/
  - title: Ville de Nice - Mon tout petit Noël, 16 décembre
    url: https://www.nice.fr/agenda/mon-tout-petit-noel/20261216-1000/
  - title: Ville de Nice - Crèche de Noël Lou Presèpi
    url: https://www.nice.fr/agenda/creche-de-noel-lou-presepi/
  - title: Lignes d'Azur - Plan officiel autour du tramway ligne 1
    url: https://www.lignesdazur.com/sites/default/files/2025-08/plan-autour-du-tram-1_09-2025_web.pdf
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir
  decision: Choisir une sortie de Noël à Nice réellement adaptée à l'âge des enfants, à la date disponible et au besoin de réserver, plutôt que confondre promenade libre au village et spectacles municipaux sur inscription.
  affiliationPotential: "Pas de billet partenaire naturel pour les animations municipales. Pour les familles qui prolongent la sortie en séjour, l'Adagio Nice Centre est référencé sur Booking.com avec appartements équipés d'une kitchenette et formule quatre personnes ; vérifier capacité exacte, prix et disponibilités aux dates choisies : https://www.booking.com/hotel/fr/hipark-nice.html"
  gsc:
    retrievedAt: 2026-10-25T02:31:31+02:00
    dataThrough: 2026-10-22
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Nice - Noël à Nice 2026 et agenda par âge »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-03T23:59:00+01:00
---

À Nice, les fêtes de Noël 2026 se déroulent du **27 novembre 2026 au 3 janvier 2027**. Avec des enfants, le bon programme dépend surtout de l'âge et de la liberté que vous voulez garder : flâner au Village de Noël sans horaire de spectacle à respecter, réserver une séance gratuite adaptée aux plus petits ou découvrir la crèche traditionnelle du Vieux-Nice.

## Le Village de Noël : la sortie la plus souple

Le **Village de Noël** est annoncé au **jardin Albert-Ier**, au cœur de Nice, du **vendredi 27 novembre 2026 au dimanche 3 janvier 2027**. La Ville évoque des illuminations, une grande roue et des espaces gourmands autour de la place Masséna et de la promenade du Paillon.

C'est le choix le plus simple si les enfants ont des âges différents ou si vous ne voulez pas organiser la journée autour d'une séance précise. Avec une poussette ou un tout-petit, prévoyez toutefois des pauses : le centre peut être très fréquenté à l'approche de Noël.

**À vérifier avant de partir :** au 25 octobre 2026, la rubrique consacrée au village sur le [programme municipal de Noël](https://www.nice.fr/noel-a-nice/) indique encore que les détails arrivent. Les horaires quotidiens, le prix éventuel des manèges et les conditions de certaines animations ne sont pas publiés : ne partez pas du principe que toutes les attractions seront gratuites.

## De 1 à 4 ans : deux séances courtes, mais sur réservation

**« Mon tout petit Noël »** est le rendez-vous le plus adapté aux très jeunes enfants : un spectacle de marionnettes de la compagnie Arpegium, **gratuit**, conseillé **de 1 à 4 ans**, d'une durée de **25 minutes**.

Deux séances sont annoncées à **10 h** :

- **Mardi 8 décembre**, salle **Blackbox**, **2 pont René-Coty**. La fiche officielle indique un **accès PMR** et une [réservation en ligne ou auprès d'AnimaNice](https://www.nice.fr/agenda/mon-tout-petit-noel/). Renseignements : **04 92 00 75 60**.
- **Mercredi 16 décembre**, **centre AnimaNice La Costière**, **178 chemin de la Costière**. Réservation gratuite auprès du centre, au **04 92 09 90 71** ; les conditions d'accessibilité ne sont pas précisées sur la [fiche de cette séance](https://www.nice.fr/agenda/mon-tout-petit-noel/20261216-1000/).

Ces deux lieux ne sont pas au jardin Albert-Ier. Choisissez d'abord la séance accessible depuis chez vous, puis réservez : la gratuité **ne signifie pas entrée libre**.

## De 4 à 9 ans : regarder la mention « entrée libre » ou « sur réservation »

Le programme de la Ville propose plusieurs spectacles et ateliers gratuits, mais les modalités changent **selon la bibliothèque ou la salle**.

Pour les **6-9 ans**, le spectacle de marionnettes **« Le Noël de Lutinette »** permet de bien voir la différence :

- **Mercredi 2 décembre, de 10 h 30 à 11 h 30**, bibliothèque **Les Moulins – Alain Lefeuvre** : **entrée libre**, gratuite.
- **Mercredi 9 décembre, de 15 h à 16 h**, bibliothèque **Pasteur – Camille Claudel** : **entrée libre**, gratuite.
- **Mercredi 9 décembre, de 10 h 30 à 11 h 30**, bibliothèque **Fontaine du Temple – Alfred Hart** : **réservation requise**, gratuite.
- **Samedi 12 décembre, de 10 h 30 à 11 h 30**, bibliothèque **Saint-Roch** : **réservation requise**, gratuite.

Avec un enfant un peu plus jeune, **« La véritable histoire du Père-Noël »**, annoncée **de 4 à 7 ans**, est programmée **mercredi 16 décembre à 15 h**, salle **Blackbox** : spectacle gratuit, avec lien de réservation dans l'agenda municipal. Pour un enfant qui préfère fabriquer quelque chose, l'**atelier de décorations** du **2 décembre à 15 h**, bibliothèque **Pasteur**, est gratuit **sur réservation**, pour les **6-9 ans**.

Les séances en entrée libre peuvent tout de même dépendre de la capacité d'accueil. Avant de vous déplacer, consultez la [fiche de la date choisie dans l'agenda de Nice](https://www.nice.fr/noel-a-nice/) : elle indique le lieu exact et, lorsqu'il y en a une, la procédure d'inscription.

## Du 17 au 27 décembre : Lou Presèpi, dans le Vieux-Nice

La **crèche traditionnelle Lou Presèpi** se découvre **place Rossetti**, du **jeudi 17 au dimanche 27 décembre 2026**, **gratuitement**. Il s'agit d'une crèche à taille humaine et animée, liée aux traditions niçoises, avec des animations musicales et des rendez-vous familiaux annoncés autour de la place et de la cathédrale Sainte-Réparate.

Ce n'est **pas** une attraction du Village de Noël : la place Rossetti est dans le Vieux-Nice, à quelques minutes de marche du secteur Masséna, mais la programmation et les dates sont différentes. La [fiche municipale de Lou Presèpi](https://www.nice.fr/agenda/creche-de-noel-lou-presepi/) mentionne 10 h sans détailler les horaires de chaque journée ni les heures de chaque animation. Elle comporte aussi une mention d'inauguration dont le jour et la date ne concordent pas avec le calendrier 2026 : vérifiez donc les horaires actualisés plutôt que de programmer votre visite autour de cette mention.

Pour une sortie sans billet, c'est une bonne option à associer à une promenade dans les rues du Vieux-Nice, à condition de ne pas promettre aux enfants un spectacle précis sans en avoir confirmé l'heure.

## Comment s'y rendre et organiser la journée ?

Pour le **jardin Albert-Ier**, le **tramway ligne 1, arrêt Masséna**, est un repère pratique. Pour **Lou Presèpi**, l'arrêt **Cathédrale–Vieille Ville**, sur la même ligne, permet de rejoindre le quartier à pied. Le [plan officiel Lignes d'Azur](https://www.lignesdazur.com/sites/default/files/2025-08/plan-autour-du-tram-1_09-2025_web.pdf) situe ces arrêts et le jardin.

Les spectacles AnimaNice et les bibliothèques sont répartis dans plusieurs quartiers : ne supposez pas qu'ils se trouvent à côté du village. Vérifiez l'adresse indiquée sur la fiche de votre séance et préparez votre trajet avec Lignes d'Azur, surtout si vous devez arriver à une heure fixe. Pour les poussettes ou les besoins d'accessibilité, demandez confirmation à l'établissement lorsque sa fiche ne précise rien.

Si vous venez de plus loin et souhaitez rester une nuit ou deux, [l'Adagio Nice Centre sur Booking.com](https://www.booking.com/hotel/fr/hipark-nice.html) propose des appartements avec kitchenette et des configurations familiales : contrôlez **la capacité correspondant à l'âge des enfants**, le tarif final, les conditions d'annulation et la disponibilité à vos dates avant de réserver. Ce n'est pas un hébergement directement dans le jardin Albert-Ier : prévoyez aussi le trajet jusqu'aux animations.

Pour compléter un séjour sans répéter les fêtes, vous pouvez prévoir une visite au [Musée National du Sport en famille](https://www.fam-space.fr/articles/bons-plans/musee-national-du-sport-a-nice-en-famille-combien-coute-vraiment-la-visite/) ou, avec des enfants assez grands pour cuisiner, un [atelier de cuisine niçoise](https://www.fam-space.fr/articles/cuisine/atelier-de-cuisine-nicoise-a-nice-faut-il-reserver-avec-des-enfants/).

Le plus utile est de **réserver d'abord le spectacle adapté à l'âge**, si vous en voulez un, puis de garder le Village de Noël ou Lou Presèpi comme promenade libre autour de ce rendez-vous.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/ | Noël à Trévarez 2026 en famille: dates, horaires et réservation | evenements | Saint-Goazec, Finistère, Bretagne
- /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | Equita Lyon 2026 avec des enfants: billets, Village Enfants et spectacles | evenements | Chassieu, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/train-de-noel-de-la-haute-somme-2026-en-famille-dates-tarifs-et-reservation/ | Train de Noël de la Haute Somme 2026 en famille: dates, tarifs et réservation | evenements | La Neuville-les-Bray, Somme, Hauts-de-France
- /articles/activites/noel-2026-a-l-ecomusee-d-alsace-en-famille-quand-venir-et-que-prevoir/ | Noël 2026 à l'Écomusée d'Alsace en famille: quand venir et que prévoir? | activites | Ungersheim, Haut-Rhin, Grand Est
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/ | Marché de Noël de Lille 2026 en famille: village, Grande Roue et infos pratiques | evenements | Lille, Nord, Hauts-de-France
- /articles/bons-plans/musee-national-du-sport-a-nice-en-famille-combien-coute-vraiment-la-visite/ | Musée National du Sport à Nice en famille: que voir et préparer la visite | bons-plans | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/cuisine/atelier-de-cuisine-nicoise-a-nice-faut-il-reserver-avec-des-enfants/ | Atelier de cuisine niçoise à Nice: faut-il réserver avec des enfants? | cuisine | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/maison/renovation-energetique-dans-les-alpes-maritimes-jusqu-a-25-400-d-aide/ | Rénovation énergétique dans les Alpes-Maritimes: jusqu'à 25 400 € d'aide | maison | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/vie-pratique/location-de-voiture-a-nice-avec-des-enfants-ce-qu-il-faut-verifier-avant-de-reserver/ | Location de voiture à Nice avec des enfants: ce qu'il faut vérifier avant de réserver | vie-pratique | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/activites/ateliers-matisse-nice-famille-aout-2026/ | Ateliers Matisse à Nice: sept matinées créatives pour les 4 à 7 ans en août | activites | Nice, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/sorties/villa-ephrussi-de-rothschild-en-famille-que-voir-dans-la-villa-et-les-jardins/ | Villa Ephrussi de Rothschild en famille: que voir dans la villa et les jardins? | sorties | Saint-Jean-Cap-Ferrat, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/parentalite/maison-des-1-000-premiers-jours-a-grasse-peut-on-venir-sans-rendez-vous/ | Maison des 1 000 premiers jours à Grasse: peut-on venir sans rendez-vous? | parentalite | Grasse, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/voyages/menton-en-famille-ou-dormir-selon-votre-programme/ | Menton en famille: où dormir selon votre programme | voyages | Menton, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | Thoiry Lumières Sauvages 2026-2027: dates, billets et visite en famille | evenements | Thoiry, Yvelines, Île-de-France
- /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | Noël à Nantes 2026: marché de Noël et Voyage en hiver en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | Noël à Chenonceau 2026: décors, nocturnes et tarifs en famille | evenements | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | Noël Gaulois 2026 au Parc Astérix: billets, glissades et spectacles en famille | evenements | Plailly, Oise, Hauts-de-France
- /articles/evenements/train-du-pere-noel-a-toucy-2026-horaires-tarifs-et-reservation/ | Train du Père Noël à Toucy 2026: horaires, tarifs et réservation | evenements | Toucy, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | Noël au château d'Amboise 2026: visite, nocturnes et tarifs en famille | evenements | Amboise, Indre-et-Loire, Centre-Val de Loire

### Historique Radar lié

- opportunity | /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | 2026-10-21T10:43:46.144Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-10-24T12:31:27.784Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | 2026-10-24T06:28:53.730Z
- opportunity | /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | 2026-10-24T15:27:41.430Z
- opportunity | /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | 2026-10-24T09:33:57.174Z
- opportunity | /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | 2026-10-24T19:30:32.700Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
