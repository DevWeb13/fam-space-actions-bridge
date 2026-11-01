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
title: "Noël 2026 à Chambéry en famille : marché, village ou ateliers créatifs ?"
subtitle: "Chalets et Père Noël, pause gourmande ou Fabrique de Noël le 12 décembre : comment choisir"
summary: "Du 27 novembre 2026 au 3 janvier 2027, Chambéry propose deux espaces de Noël en centre-ville. Le 12 décembre, Rubanox accueille aussi un marché artisanal et des ateliers sur inscription : lieux, horaires, budget et conseils avec enfants."
category: evenements
location:
  city: Chambéry
  department: Savoie
  region: Auvergne-Rhône-Alpes
keywords:
  - Noël Chambéry 2026 famille
  - marché de Noël Chambéry 2026 horaires
  - village de Noël Palais de Justice Chambéry
  - Fabrique de Noël Rubanox 12 décembre 2026
sources:
  - title: Ville de Chambéry — Marché et village de Noël 2026
    url: https://www.chambery.fr/actualite/1695/9-le-marche-de-noel-revient-a-chambery-du-27-novembre-au-3-janvier.htm
  - title: Ville de Chambéry — Noël 2026 et programmation à venir
    url: https://www.chambery.fr/493-noel.htm
  - title: Ville de Chambéry — Marché artisanal et Fabrique de Noël du 12 décembre
    url: https://www.chambery.fr/agenda/3638/316-marche-de-noel-artisanal-fabrique-de-noel.htm
  - title: Ville de Chambéry — Stationnement en centre-ville
    url: https://www.chambery.fr/390-je-viens-en-centre-ville-en-voiture.htm
  - title: Ville de Chambéry — Toilettes publiques et carte
    url: https://www.chambery.fr/307-proprete-et-entretien-de-la-ville.htm
  - title: Kyriad Chambéry Centre - Curial — Chambres et services
    url: https://chambery-centre-curial.kyriad.com/fr-fr/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel
  decision: "Choisir la sortie de Noël la plus adaptée à l'âge des enfants, au budget et à la date : chalets et Père Noël, village gourmand et concerts, ou ateliers créatifs le 12 décembre."
  affiliationPotential: "Kyriad Chambéry Centre - Curial : chambre familiale ou studio jusqu'à quatre personnes repérés sur Booking.com (https://www.booking.com/hotel/fr/kyriad-chambery-centre.fr.html), près du centre ; disponibilité, couchages et prix à vérifier aux dates retenues. Pas de billetterie partenaire naturelle pour les marchés."
  gsc:
    retrievedAt: 2026-11-01T04:25:25+01:00
    dataThrough: 2026-10-29
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Chambéry — Marché et village de Noël 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-03
---

À Chambéry, les familles peuvent choisir entre trois sorties de Noël assez différentes : flâner parmi les chalets et chercher la Maison du Père Noël, s'installer au village gourmand avec ses animations, ou consacrer le samedi 12 décembre à l'artisanat et à un atelier créatif. Les deux premiers lieux ouvrent du **27 novembre 2026 au 3 janvier 2027** ; le troisième ne dure qu'une journée. Voici comment choisir sans prévoir plus de déplacements ni de dépenses que nécessaire.

## Le marché boulevard de la Colonne : pour les chalets et le Père Noël

Entre la place du Centenaire et la place des Éléphants, **37 chalets en bois** mettent à l'honneur les produits locaux et les savoir-faire dans une ambiance alpine. La Ville annonce aussi une **Maison du Père Noël** et un espace pour les familles et les enfants.

C'est le choix le plus simple pour une promenade avec de jeunes enfants : regarder les décorations, faire un tour des stands, puis repartir dès que la fatigue arrive. La présence de la Maison du Père Noël est annoncée, mais **ses horaires de rencontre et les éventuelles modalités d'accès ne sont pas encore publiés**. Ne promettez donc pas aux enfants une rencontre à heure fixe avant de consulter le [programme municipal de Noël](https://www.chambery.fr/493-noel.htm).

**Horaires :** tous les jours de 11 h à 21 h, jusqu'à 22 h les vendredis et samedis. Le marché se visite sans réservation annoncée ; prévoyez un budget uniquement pour les achats et consommations que vous choisirez. La [Ville confirme les dates, les 37 chalets et les horaires](https://www.chambery.fr/actualite/1695/9-le-marche-de-noel-revient-a-chambery-du-27-novembre-au-3-janvier.htm).

## Le village du Palais de Justice : pour manger et profiter des animations

Sur la **place du Palais de Justice–Robert Badinter**, le deuxième espace de Noël réunit **sept chalets**, un chapiteau consacré à la restauration et aux animations, des concerts et une **Maison du pain d'épices**. Il convient mieux aux familles qui veulent prolonger la sortie par une pause gourmande ou venir en début de soirée.

**Horaires :** du 27 novembre au 3 janvier, de 11 h à 21 h tous les jours, et **jusqu'à 23 h les vendredis et samedis**. Attention à ne pas confondre cette fermeture tardive avec celle du marché du boulevard, qui ferme une heure plus tôt ces deux soirs.

Les concerts et animations sont annoncés, mais leurs dates précises ne sont pas encore disponibles. Le programme des parades et les horaires des rencontres avec le Père Noël restent également à confirmer. Pour une sortie centrée sur un spectacle, attendez la publication des créneaux plutôt que de choisir une date au hasard.

Les deux espaces étant dans le centre-ville, il est possible de les associer à une même promenade, sans chercher à tout voir.

## Le 12 décembre à Rubanox : pour fabriquer plutôt qu'acheter

Le **samedi 12 décembre 2026, de 10 h à 18 h**, le collectif Wom'Bat organise un marché de Noël artisanal à **Rubanox, 235 avenue Alsace-Lorraine**. Une cinquantaine d'artistes et d'artisans sont annoncés, avec une buvette et des foodtrucks.

La **Fabrique de Noël** propose en parallèle des ateliers de macramé, poterie, marqueterie, aquarelle ou décoration de Noël. C'est une idée à privilégier si les enfants aiment créer un objet à rapporter, plutôt que simplement parcourir des stands.

**L'entrée à l'événement et au marché est libre ; les ateliers sont payants et sur inscription.** La [fiche de la Ville consacrée à Rubanox](https://www.chambery.fr/agenda/3638/316-marche-de-noel-artisanal-fabrique-de-noel.htm) ne précise pas encore les prix, les âges minimums ni les créneaux de chaque atelier. Vérifiez ces trois points auprès de l'organisateur avant de promettre une activité à un enfant ; les places ne sont pas garanties sans réservation.

Rubanox n'est pas sur la place des Éléphants : prévoyez cette visite comme une étape distincte, particulièrement avec une poussette ou des enfants fatigués.

## Quel budget et quel moment choisir ?

Pour **une sortie courte et souple**, choisissez les chalets du boulevard en journée. Pour **un repas et une ambiance de soirée**, privilégiez le village du Palais de Justice ; le prix dépendra des consommations. Pour **une activité manuelle**, réservez plutôt le 12 décembre, après confirmation du tarif et de l'âge accepté par l'atelier.

Aucun prix fiable n'est publié pour les consommations du marché, et aucun tarif d'atelier détaillé n'est annoncé : il serait trompeur de donner un budget familial chiffré. Les horaires généraux sont publiés, mais vérifiez les éventuels aménagements des jours fériés, notamment les 24 et 25 décembre et le 1er janvier, avant de partir.

## Venir avec une poussette, en train ou en voiture

Le marché et le village se trouvent dans le **centre-ville largement piéton**. Une poussette peut être pratique pour relier les deux lieux, mais les pavés du centre ancien peuvent être irréguliers et la foule ralentir les déplacements. L'accessibilité précise des installations temporaires, notamment du chapiteau, et celle des ateliers de Rubanox ne sont pas confirmées dans les annonces consultées.

La gare de **Chambéry–Challes-les-Eaux** permet de rejoindre le centre à pied ; comptez une quinzaine de minutes à titre indicatif, davantage avec de jeunes enfants et des bagages. Le centre est également desservi par les bus urbains. Pour préparer un trajet ferroviaire avec une poussette, consultez nos [conseils pour voyager en train avec des enfants](/articles/voyages/voyager-train-enfants-ete-2026-conseils/), en revérifiant les conditions du transporteur pour votre voyage.

En voiture, les parkings **Ravet, Château et Curial** permettent d'éviter de chercher une place dans les rues piétonnes. La Ville indique actuellement la gratuité **le samedi de 14 h à 19 h** dans les parkings du Château et de la Falaise ; vérifiez les conditions à votre date sur la [page officielle du stationnement](https://www.chambery.fr/390-je-viens-en-centre-ville-en-voiture.htm).

Pour les pauses avec un bébé, la Ville propose une [carte des toilettes publiques](https://www.chambery.fr/307-proprete-et-entretien-de-la-ville.htm). En revanche, les annonces de Noël ne confirment ni table à langer, ni espace bébé, ni sanitaires propres aux installations : anticipez une pause dans un établissement adapté si ces équipements vous sont indispensables.

## Rester une nuit pour profiter de Chambéry

Pour une famille qui vient de plus loin, le **Kyriad Chambéry Centre - Curial**, au **371 rue de la République**, propose des chambres familiales pouvant accueillir **jusqu'à quatre personnes** et une kitchenette, pratique pour un repas simple ou les besoins d'un jeune enfant. Vous pouvez [consulter les chambres du Kyriad Chambéry Centre - Curial sur Booking.com](https://www.booking.com/hotel/fr/kyriad-chambery-centre.fr.html) en indiquant vos dates, le nombre de voyageurs et l'âge des enfants. Vérifiez la disposition des lits, le tarif total et les conditions d'annulation avant de réserver : une chambre standard ne garantit pas quatre couchages.

Si vous prolongez le séjour, notre guide [Chambéry en famille : un week-end entre éléphants et sciences](/articles/voyages/chambery-en-famille-un-week-end-entre-elephants-et-sciences/) propose des visites dans la vieille ville, à Eurêka et au Musée Savoisien, sans les confondre avec les animations temporaires de Noël.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | Noël 2026 à Brest en famille: marché, projections et horaires | evenements | Brest, Finistère, Bretagne
- /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | Marché de Noël 100 % Côte-d’Or à Dijon 2026: horaires, spectacles et Père Noël | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/maison/emprunter-un-broyeur-a-grand-chambery-electrique-ou-thermique-que-choisir/ | Emprunter un broyeur à Grand Chambéry: électrique ou thermique, que choisir? | maison | Chambéry, Savoie, Auvergne-Rhône-Alpes
- /articles/voyages/chambery-en-famille-un-week-end-entre-elephants-et-sciences/ | Chambéry en famille: un week-end entre éléphants et sciences | voyages | Chambéry, Savoie, Auvergne-Rhône-Alpes
- /articles/sorties/tresor-verney-chambery-enfants-2026/ | Le trésor du Verney à Chambéry: les séances 2026 sont terminées | sorties | Chambéry, Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | Noël 2026 à Toulon en famille: marché, patinoire et horaires | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/vie-pratique/carte-okay-savoie-2026-2027-comment-obtenir-et-utiliser-les-80-du-collegien/ | Carte OKAY Savoie 2026-2027: comment obtenir et utiliser les 80 € du collégien | vie-pratique | Chambéry, Savoie, Auvergne-Rhône-Alpes
- /articles/sorties/les-menuires-sans-ski-en-famille-luges-piscines-et-balades-en-hiver/ | Les Menuires sans ski en famille: luges, piscines et balades en hiver | sorties | Les Belleville, Savoie, Auvergne-Rhône-Alpes
- /articles/bons-plans/ski-a-aussois-en-famille-en-2026-2027-forfaits-et-budget/ | Ski à Aussois en famille en 2026-2027: forfaits et budget | bons-plans | Aussois, Savoie, Auvergne-Rhône-Alpes
- /articles/parentalite/montchavin-les-coches-avec-un-bebe-garderie-horaires-et-sejour-d-hiver/ | Montchavin-Les Coches avec un bébé: garderie, horaires et séjour d'hiver | parentalite | Montchavin-Les Coches, Savoie, Auvergne-Rhône-Alpes
- /articles/cuisine/visiter-une-cooperative-de-beaufort-avec-des-enfants-a-val-cenis/ | Visiter une coopérative de Beaufort avec des enfants à Val Cenis | cuisine | Val Cenis, Savoie, Auvergne-Rhône-Alpes
- /articles/activites/croisiere-a-chanaz-en-famille-tarifs-2026-duree-et-conseils/ | Croisière à Chanaz en famille: tarifs 2026, durée et conseils | activites | Chanaz, Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/grand-bivouac-2026-a-albertville-en-famille-preparer-sa-journee-au-festival/ | Grand Bivouac 2026 à Albertville en famille: préparer sa journée au festival | evenements | Albertville, Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/tous-en-sons-2026-a-marseille-quel-spectacle-choisir-selon-l-age-des-enfants/ | Tous en Sons ! 2026 à Marseille: spectacles enfants, âges et tarifs | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | Noël à Caen 2026 en famille: marché de Noël et visite illuminée | evenements | Caen, Calvados, Normandie
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | Noël à Bayeux 2026 en famille: marché et Galopades | evenements | Bayeux, Calvados, Normandie
- /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | Lumières de Laval 2026 en famille: marchés, grande roue et croisière | evenements | Laval, Mayenne, Pays de la Loire
- /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | Festival des Petits Explorateurs 2026 à Dijon: ateliers, horaires et tarifs | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté

### Historique Radar lié

- refresh | /articles/vie-pratique/carte-okay-savoie-2026-2027-comment-obtenir-et-utiliser-les-80-du-collegien/ | 2026-10-06T08:50:37.159Z
- opportunity | /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | 2026-10-30T03:27:02.483Z
- opportunity | /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | 2026-10-30T09:27:15.122Z
- opportunity | /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | 2026-10-29T14:26:32.277Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | 2026-10-30T06:28:26.726Z
- opportunity | /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | 2026-10-31T10:28:17.432Z
- opportunity | /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | 2026-10-30T15:36:05.374Z
- opportunity | /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | 2026-10-30T21:26:32.584Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
