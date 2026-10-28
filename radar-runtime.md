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
title: "Noël à Fontevraud 2026 : dates, patinoire et tarifs en famille"
subtitle: "Marché, poneys, illuminations et spectacle : les bons jours pour profiter des animations avec les enfants."
summary: À Fontevraud, le marché n'a lieu que les 28 et 29 novembre 2026, les poneys trois dimanches et la patinoire selon un calendrier spécifique. Voici comment choisir sa date, prévoir son budget et organiser la visite.
category: evenements
location:
  city: Fontevraud-l'Abbaye
  department: Maine-et-Loire
  region: Pays de la Loire
keywords:
  - Noël à Fontevraud 2026
  - patinoire abbaye Fontevraud horaires
  - marché de Noël Fontevraud 28 29 novembre
  - Fontevraud illuminations poneys enfants tarifs
sources:
  - title: Fontevraud — Noël à Fontevraud 2026, programme officiel
    url: https://www.fontevraud.fr/evenement/noel-a-fontevraud/
  - title: Fontevraud — Informations pratiques, horaires, tarifs et accès
    url: https://www.fontevraud.fr/informations-pratiques/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants
  decision: Choisir une date et la bonne formule d'entrée selon l'âge des enfants et les activités souhaitées, sans confondre accès libre, activités incluses et réservations obligatoires.
  affiliationPotential: "Aucun billet partenaire pour l'abbaye confirmé. Hébergement familial vérifié sur Booking.com : Les écuries des Princesses, maison de 2 chambres pour 4 personnes à Fontevraud-l'Abbaye (https://www.booking.com/hotel/fr/les-ecuries-des-princesses.fr.html). Disponibilité et prix à vérifier selon les dates."
  gsc:
    retrievedAt: 2026-10-27T02:25:59+01:00
    dataThrough: 2026-10-24
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Fontevraud - Noël à Fontevraud 2026, programme officiel »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-03-07
---

Pour Noël 2026, l'Abbaye royale de Fontevraud, près de Saumur, réunit patinoire, illuminations, marché gourmand, balades à poney et installations artistiques. Mais ces animations n'ont **pas toutes les mêmes dates** : le week-end des 28 et 29 novembre est celui du marché, tandis que les poneys ne sont annoncés que trois dimanches. Le [programme de Noël de l'abbaye](https://www.fontevraud.fr/evenement/noel-a-fontevraud/) affiche une période générale du **28 novembre 2026 au 7 mars 2027**, sans garantir que chaque animation fonctionne jusqu'en mars.

## Quel jour venir avec les enfants ?

- **Samedi 28 novembre :** pour découvrir le marché gourmand (10 h-17 h 30, accès libre), profiter de la patinoire et attendre les illuminations. Des lectures de Noël sont aussi prévues à 15 h 30 et 16 h 30, à partir de 7 ans.
- **Dimanche 29 novembre :** le meilleur choix pour combiner marché, patinoire et poney avec un enfant de 3 à 10 ans. Particularité importante : l'abbaye annonce **l'entrée gratuite pour tous** ce dernier dimanche du mois. Le marché est décrit comme accessible dans le cadre du billet d'entrée, mais cette gratuité générale évite normalement le prix habituel d'entrée ; vérifiez les modalités d'accès à l'approche de la date.
- **Dimanches 6 et 13 décembre :** pour les balades à poney de 11 h à 17 h, avec la patinoire et la visite de l'abbaye. Le marché gourmand du lancement n'est plus annoncé à ces dates.
- **Mercredis et samedis jusqu'à la fin des vacances de Noël :** pour les illuminations après le coucher du soleil et une visite prolongée jusqu'à **19 h**. Exception : le samedi 12 décembre, la nocturne habituelle n'est pas proposée.
- **Pendant les vacances de Noël :** pour davantage de possibilités de patiner, la patinoire étant annoncée tous les jours de vacances, sauf fermeture du site. L'abbaye et le musée sont fermés **le 25 décembre 2026 et le 1er janvier 2027**.

Si les enfants veulent avant tout voir les lumières, prévoyez de rester après la tombée de la nuit. Le calendrier de l'Avent géant du bâtiment d'accueil est en accès libre ; le parcours intérieur de l'abbaye relève, lui, des conditions d'entrée du monument.

## Patinoire, poneys et spectacle : qu'est-ce qui est inclus ?

La **patinoire en plein air**, installée sur la pelouse du Réfectoire, ouvre normalement de **11 h à 18 h** les mercredis et week-ends à partir du 28 novembre, puis quotidiennement pendant les vacances scolaires. Elle est **incluse dans le billet d'entrée**, sans billet de patinoire supplémentaire annoncé. Lors des nocturnes du mercredi et du samedi, elle reste accessible jusqu'à 19 h. Le programme ne précise pas d'âge minimum ni de conditions particulières pour les plus petits : renseignez-vous avant de promettre une séance de glisse à un jeune enfant.

Les **balades à poney**, réservées aux **3-10 ans**, sont annoncées les **29 novembre, 6 et 13 décembre**, de 11 h à 17 h, près de la pelouse du chevet. L'abbaye les présente en accès libre **dans le cadre du billet d'entrée** : cela ne signifie pas que l'entrée au monument est gratuite les 6 et 13 décembre.

Pour une pause plus courte, **« La Maquette du temps »**, création de François Delarozière et de la compagnie La Machine, fait vivre une maquette de l'abbaye grâce au théâtre d'objets, à la mécanique et à la lumière. Le spectacle dure **10 minutes**, convient à tout public et se déroule dans la cour Saint-Benoît. **La réservation est obligatoire** : les séances et places disponibles doivent être vérifiées avant la visite, car la page générale ne donne pas de calendrier quotidien.

Le parcours artistique permet aussi de découvrir la crèche napolitaine dans l'abbatiale, les créations d'Augustin Frison-Roche et des installations lumineuses. Une visite du musée d'Art moderne peut compléter la sortie, notamment pour son parcours sensoriel de Noël ; elle nécessite la formule d'entrée correspondante.

## Combien coûte la sortie ?

Pour la période du **5 octobre au 31 décembre 2026**, les [tarifs publiés par Fontevraud](https://www.fontevraud.fr/informations-pratiques/) sont de **13 € par adulte** pour l'abbaye seule (11 € en prévente), ou **17 €** pour le billet abbaye + musée (15,50 € en prévente). L'entrée est **gratuite pour les moins de 18 ans**. Les étudiants de moins de 25 ans et plusieurs autres publics bénéficient aussi de gratuités, sous conditions.

Pour **deux adultes et deux enfants de moins de 18 ans**, comptez donc **26 € pour l'abbaye seule**, ou **34 € avec le musée**, au plein tarif, hors repas et achats. Le **29 novembre 2026**, l'entrée de l'abbaye et du musée est annoncée gratuite pour tous. Une activité incluse dans le billet ne doit pas être confondue avec un accès gratuit à l'ensemble du site les autres jours.

Ces tarifs sont publiés pour **2026** : pour une visite en janvier, février ou mars 2027, vérifiez la grille applicable à votre date. La durée conseillée pour la découverte du site est d'environ **trois heures**, davantage si vous combinez patinoire, musée et illuminations. L'achat du billet et l'entrée ne sont plus possibles dans la dernière heure d'ouverture.

## Venir depuis Saumur et visiter avec un bébé

Fontevraud-l'Abbaye se situe à environ **15 minutes de route de Saumur** selon le site du monument. Les parkings visiteurs indiqués se trouvent notamment **place du 8-Mai-1945**, **rue du Logis-Bourbon** et **place du Grand-Clos**. Depuis Saumur, les bus du réseau **Ogalo** desservent également le secteur : contrôlez les horaires du jour, surtout le soir et pendant les vacances.

Des **tables à langer** et des **consignes à bagages** sont indiquées parmi les équipements. Le **musée d'Art moderne est accessible aux personnes à mobilité réduite**, tandis que l'abbaye ne l'est que **partiellement** ; un fauteuil roulant peut être prêté sur réservation. Avec une poussette, renseignez-vous sur les parties du parcours accessibles avant de venir. La nourriture et les boissons ne sont pas admises dans le musée.

Pour une pause, la **Terrasse Gourmande** propose de la restauration rapide sur place ou à emporter et reste ouverte jusqu'à 19 h lors des nocturnes. Si vous prolongez la sortie autour de Saumur, vous pouvez aussi consulter notre guide [où manger des fouées en famille autour de Saumur](https://www.fam-space.fr/articles/cuisine/ou-manger-des-fouees-en-famille-autour-de-saumur/) pour choisir un restaurant adapté aux enfants.

## Passer la nuit près de l'abbaye

Pour transformer cette sortie en week-end, [Les écuries des Princesses à Fontevraud-l'Abbaye](https://www.booking.com/hotel/fr/les-ecuries-des-princesses.fr.html) est une maison de vacances avec **deux chambres pour quatre personnes**, une cuisine et un parking privé. Elle est située dans le village, à proximité de l'abbaye. Vérifiez le prix, les couchages et les disponibilités pour vos dates ; aucun tarif de séjour n'est garanti à l'avance.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/ | Noël à Trévarez 2026 en famille: dates, horaires et réservation | evenements | Saint-Goazec, Finistère, Bretagne
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/evenements/noel-a-orleans-2026-en-famille-marches-horaires-et-maneges-apres-noel/ | Marché de Noël d’Orléans 2026 en famille: horaires, lieux et manèges | evenements | Orléans, Loiret, Centre-Val de Loire
- /articles/parentalite/ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille/ | Ludothèque du Choletais: jouer sur place et emprunter en famille | parentalite | Cholet, Maine-et-Loire, Pays de la Loire
- /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | Fête de l'Automne 2026 à Terra Botanica: animations et tarifs | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/cuisine/ou-manger-des-fouees-en-famille-autour-de-saumur/ | Où manger des fouées en famille autour de Saumur ? | cuisine | Saumur, Maine-et-Loire, Pays de la Loire
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | Monument Jeu d’Enfant au château d’Angers: dragons et ateliers le 17 octobre 2026 | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/maison/composteur-gratuit-a-angers-loire-metropole-qui-peut-le-demander/ | Composteur gratuit à Angers Loire Métropole: qui peut le demander? | maison | Angers, Maine-et-Loire, Pays de la Loire
- /articles/vie-pratique/garde-d-enfants-sur-horaires-atypiques-a-angers-qui-peut-demander-l-aide-du-ccas/ | Garde d'enfants sur horaires atypiques à Angers: qui peut demander l'aide du CCAS? | vie-pratique | Angers, Maine-et-Loire, Pays de la Loire
- /articles/sorties/chasse-tresor-galerie-david-angers-2026/ | Chasse au trésor à Angers: les 4 à 6 ans enquêtent à la Galerie David | sorties | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants/ | Marie-Antoinette à Fontainebleau 2026-2027: exposition, visites et tarifs en famille | evenements | Fontainebleau, Seine-et-Marne, Île-de-France
- /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | Féeries de Noël 2026 à Paris: parcours lumineux, billets et patinoire en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-a-villandry-spectacles-et-ateliers-a-choisir-selon-l-age/ | Noël 2026 à Villandry: décors, spectacle d'ombres et ateliers en famille | evenements | Villandry, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | Noël de Casse-Noisette 2026 à Pierrefonds: visites, dates et tarifs en famille | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/ | Festival de la Sainte-Barbe 2026 à Lens-Liévin: programme en famille du 4 au 6 décembre | evenements | Lens, Pas-de-Calais, Hauts-de-France
- /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | Saint-Nicolas 2026 à Carcassonne: campements médiévaux et marche aux flambeaux en famille | evenements | Carcassonne, Aude, Occitanie
- /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | Noël 2026 à Chantilly: Le Noël oublié, billets et séances en famille | evenements | Chantilly, Oise, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/evenements/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/ | 2026-10-27T04:28:31.006Z
- opportunity | /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | 2026-10-13T12:37:05.098Z
- opportunity | /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | 2026-10-27T13:28:21.076Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants/ | 2026-10-27T18:27:41.322Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | 2026-10-10T08:38:56.921Z
- opportunity | /articles/evenements/noel-2026-a-villandry-spectacles-et-ateliers-a-choisir-selon-l-age/ | 2026-10-27T10:35:41.254Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
