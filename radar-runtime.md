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
title: "Lumières de Laval 2026 en famille : quel jour venir et quel budget ?"
subtitle: "Illuminations, marchés, grande roue et croisière : choisir une date sans se tromper"
summary: Du 21 novembre 2026 au 3 janvier 2027, Laval s'illumine sur le thème du Bal de Noël. Voici les dates précises des trois marchés, les tarifs de la grande roue et de la croisière, et les bons choix selon l'âge des enfants.
category: evenements
location:
  city: Laval
  department: Mayenne
  region: Pays de la Loire
keywords:
  - Lumières de Laval 2026
  - Noël Laval 2026 famille
  - marchés de Noël Laval 2026
  - grande roue Laval enfants
  - croisière Lumières Laval tarif
sources:
  - title: "Laval Tourisme - Les Lumières de Laval 2026 : programme, marchés, grande roue et tarifs"
    url: https://www.laval-tourisme.com/sortez-vibrez/le-plein-d-evenements/les-lumieres-de-laval/
  - title: "Laval Tourisme - Le Bal de Noël 2026 : dates des illuminations"
    url: https://www.laval-tourisme.com/offres/les-lumieres-de-laval-le-bal-de-noel-laval-fr-6059570/
  - title: "Laval Tourisme - Croisière des Lumières 2026 : tarifs et dates de départ"
    url: https://www.laval-tourisme.com/offres/croisiere-des-lumieres-2026-laval-fr-6854586/
  - title: Laval Agglomération - Transports urbains lavallois
    url: https://www.agglo-laval.fr/utile-au-quotidien/transports-et-mobilites/tul
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere
  decision: Permettre aux parents de choisir une date où les activités souhaitées sont réellement ouvertes, puis de décider entre promenade lumineuse, marchés, grande roue et croisière selon l'âge des enfants, le rythme et le budget.
  affiliationPotential: "Hôtel et Apparts Marin à Laval vérifié sur Booking.com (https://www.booking.com/hotel/fr/marin-laval.fr.html) : hébergement près de la gare, avec appartements et lit bébé sur demande; contrôler la capacité et les conditions pour les dates choisies, sans promettre de disponibilité. Aucun billet partenaire pertinent vérifié pour les animations."
  gsc:
    retrievedAt: 2026-10-30T01:28:25+01:00
    dataThrough: 2026-10-27
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Laval Tourisme - Les Lumières de Laval, édition 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-10
---

Pour les **Lumières de Laval 2026**, inutile de prévoir une journée entière si vos enfants veulent surtout admirer les illuminations. En revanche, si vous comptez sur un marché de Noël, un tour de grande roue ou une croisière, **le choix de la date change tout** : ces animations n'ont pas le même calendrier.

L'édition « Bal de Noël » se déroule **du 21 novembre 2026 au 3 janvier 2027**, avec des illuminations à partir de **17 h**. Le lancement est annoncé le **samedi 21 novembre à partir de 18 h 45**. La grande roue reste installée jusqu'au **10 janvier 2027**. Le [programme de Laval Tourisme](https://www.laval-tourisme.com/sortez-vibrez/le-plein-d-evenements/les-lumieres-de-laval/) permet de suivre les éventuels ajustements.

## Quel jour venir pour trouver un marché de Noël ?

Trois rendez-vous se succèdent, et non un marché ouvert pendant toute la période des illuminations.

- **Du mercredi 25 au dimanche 29 novembre**, place du 11-Novembre : marché de Noël d'environ 20 exposants.
- **Du vendredi 4 au dimanche 6 décembre**, place du 11-Novembre : marché des Lumières consacré aux artisans-créateurs, intéressant pour chercher un cadeau original.
- **Du mercredi 9 au dimanche 13 décembre**, square de Boston : second marché de Noël, annoncé avec environ 50 exposants, juste à côté de la grande roue.

Pour les marchés de Noël des **25–29 novembre et 9–13 décembre**, Laval Tourisme annonce les mêmes horaires : **11 h–20 h le mercredi et le jeudi**, **11 h–23 h le vendredi et le samedi**, **10 h–20 h le dimanche**.

Le marché des créateurs a ses **propres horaires** : **vendredi 4 décembre de 12 h à 22 h**, **samedi 5 de 9 h 30 à 22 h**, **dimanche 6 de 11 h à 20 h**.

**Pour une sortie avec de jeunes enfants**, les 5–6 ou 12–13 décembre sont des choix intéressants : marché, illuminations et grande roue peuvent être réunis le même jour. Le 12 ou le 13 décembre, le marché se trouve directement au square de Boston. En dehors de ces trois périodes, vous pouvez profiter des lumières et de la roue, mais pas compter sur ces marchés.

## Grande roue : quel âge et combien coûte un tour ?

Installée au **square de Boston**, la grande roue est annoncée **du 21 novembre au 10 janvier**. Elle ouvre tous les jours, avec des horaires différents selon les vacances scolaires :

- **Hors vacances** : 14 h–22 h, jusqu'à minuit les vendredis et samedis.
- **Pendant les vacances** : 11 h–23 h, jusqu'à minuit les vendredis et samedis.

En cabine classique ou accessible aux personnes à mobilité réduite, le tarif annoncé est de **6 € par adulte**, **4 € pour un enfant de moins de 10 ans** et **gratuit avant 2 ans**. Les enfants de moins de 10 ans doivent être accompagnés d'un adulte.

Exemple : **2 adultes et 2 enfants de 6 et 9 ans paient 20 €** pour un tour. Avec un enfant de 10 ans à la place de celui de 9 ans, le total passe à **22 €**.

Pour profiter de la vue illuminée, choisissez un créneau après 17 h. Avec un enfant sensible au vide ou au froid, une simple promenade au pied de la roue peut suffire : il n'est pas nécessaire de payer une attraction pour découvrir l'ambiance.

## Croisière des Lumières : une option plus calme, mais à réserver

La **croisière promenade sur le Vallis Guidonis** permet de découvrir les lumières depuis la Mayenne, avec des commentaires du capitaine. Le départ se fait au **25 quai André-Pinçon** ; la sortie dure **1 h 15, de 16 h 45 à 18 h**.

Elle est annoncée entre le **25 novembre et le 30 décembre**, mais **pas tous les jours**. La fiche de l'organisateur affiche notamment des départs les 25–28 novembre, 2–3, 5–6, 9, 12–13, 16–17, 20, 23 et 26–27 décembre. Elle ne détaille pas encore tous les jours jusqu'au 30 décembre : vérifiez donc le **départ exact proposé à la réservation** avant de fixer votre sortie. Les 24 et 25 décembre sont exclus.

Le prix de la promenade est de **12 € par personne**, avec gratuité pour les **moins de 2 ans**. Pour **2 adultes et 2 enfants de 6 et 9 ans**, comptez **48 €**. Les billets sont annoncés **non échangeables et non remboursables** : mieux vaut choisir la date avant d'acheter. Consultez la [fiche de la croisière des Lumières](https://www.laval-tourisme.com/offres/croisiere-des-lumieres-2026-laval-fr-6854586/) pour les départs et la réservation.

Attention à ne pas la confondre avec les **dîners-croisières** : Laval Tourisme annonce aussi des formules à **58 € par adulte et 30 € par enfant de moins de 12 ans**, ou des soirées musicales à **73 € et 37 €**. Ce n'est pas le même budget ni le même horaire.

## Quelle formule choisir selon votre famille ?

**Petit budget ou tout-petits :** une promenade dans le centre illuminé après 17 h, avec une pause au chaud si nécessaire. Vous n'avez pas besoin de réserver de billet pour vous promener dans les rues. Les 25–29 novembre et 4–13 décembre permettent d'y ajouter un marché aux dates précisées plus haut.

**Enfants qui veulent une attraction :** la grande roue, plus facile à intégrer à une sortie courte qu'une croisière à heure fixe. Pour **2 adultes et 2 enfants de 6 et 9 ans**, le budget de l'attraction est de **20 €**, hors achats au marché et transports.

**Famille qui veut les deux expériences payantes :** grande roue et croisière reviennent ensemble à **68 € pour ces mêmes quatre personnes**, hors repas. Le **samedi 12 décembre**, par exemple, combine aussi le marché de Noël du square de Boston, sous réserve de disponibilité des billets de croisière.

## Poussette, bébé et accès : les points à anticiper

Prévoyez des vêtements chauds et une sortie assez courte pour les petits : l'intérêt principal est dehors, en fin de journée, et le lancement ou les soirées de marché peuvent attirer du monde. Une poussette peut aider pour les pauses, mais les rues fréquentées et les files d'attente peuvent ralentir la promenade. Pour la **croisière**, ne présumez pas que la poussette peut être embarquée : demandez à l'organisateur les conditions d'accès et de rangement, notamment en cas de besoin d'accessibilité.

Si vous venez avec un bébé, emportez de quoi assurer son repas et son change : aucun micro-ondes public ni espace à langer spécifique n'a été confirmé pour l'événement. Pour la grande roue, une cabine PMR est annoncée, mais il reste prudent de vérifier les modalités d'accès selon les besoins de votre famille.

Les lieux utiles sont le **centre-ville et la place du 11-Novembre**, le **square de Boston** pour la roue et le marché de décembre, et le **quai André-Pinçon** pour le bateau. Laval Agglomération indique une navette gratuite de centre-ville et des lignes TUL ; vérifiez les horaires du retour, surtout après 19 h ou le dimanche, sur le [réseau de transports de Laval](https://www.agglo-laval.fr/utile-au-quotidien/transports-et-mobilites/tul).

## Et si vous restez dormir à Laval ?

Pour une famille arrivant en train, l'[Hôtel et Apparts Marin à Laval](https://www.booking.com/hotel/fr/marin-laval.fr.html), près de la gare, est une option à examiner : **certains logements disposent d'une cuisine** et un **lit bébé peut être demandé**. Vérifiez la capacité réelle de l'hébergement choisi, la confirmation du lit bébé et les conditions d'annulation pour vos dates ; aucune disponibilité n'est présumée.

Si les Lumières s'inscrivent dans un séjour plus long, retrouvez aussi notre [itinéraire de trois jours en Mayenne avec des enfants](/articles/voyages/mayenne-en-famille-pendant-3-jours-laval-sainte-suzanne-et-chateau-gontier/), entre Laval, Sainte-Suzanne et Château-Gontier.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/lumieres-de-noel-a-montbeliard-2026-quel-jour-venir-avec-des-enfants/ | Lumières de Noël à Montbéliard 2026: quel jour venir avec des enfants? | evenements | Montbéliard, Doubs, Bourgogne-Franche-Comté
- /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | Marchés de Noël de Tours 2026 en famille: lieux, dates et budget | evenements | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/ | Marché de Noël de Lille 2026 en famille: village, Grande Roue et infos pratiques | evenements | Lille, Nord, Hauts-de-France
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/marche-de-noel-de-cusset-2026-en-famille-quel-jour-choisir/ | Marché de Noël de Cusset 2026 en famille: quel jour choisir? | evenements | Cusset, Allier, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-chambord-2026-avec-des-enfants-quand-venir-et-que-prevoir/ | Noël à Chambord 2026 avec des enfants: quand venir et que prévoir | evenements | Chambord, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/noel-a-metz-2026-en-famille-marches-et-sentier-des-lanternes/ | Noël à Metz 2026 en famille: marchés et Sentier des Lanternes | evenements | Metz, Moselle, Grand Est
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/le-lait-a-la-loupe-a-laval-faut-il-reserver-avec-des-enfants/ | Le lait à la loupe à Laval: faut-il réserver avec des enfants? | evenements | Laval, Mayenne, Pays de la Loire
- /articles/voyages/mayenne-en-famille-pendant-3-jours-laval-sainte-suzanne-et-chateau-gontier/ | Mayenne en famille pendant 3 jours: Laval, Sainte-Suzanne et Château-Gontier | voyages | Laval, Mayenne, Pays de la Loire
- /articles/sorties/exposition-trafic-especes-laval-famille-2026/ | Trafic d’espèces à Laval: une enquête gratuite à vivre en famille | sorties | Laval, Mayenne, Pays de la Loire
- /articles/vie-pratique/se-deplacer-en-mayenne-avec-des-enfants-sans-voiture-bus-tad-et-ter/ | Se déplacer en Mayenne avec des enfants sans voiture: bus, TAD et TER | vie-pratique | Mayenne, Pays de la Loire
- /articles/activites/grottes-de-saulges-en-famille-margot-ou-rochefort-selon-l-age/ | Grottes de Saulges en famille: découvrir Margot, Rochefort et le musée | activites | Thorigné-en-Charnie, Mayenne, Pays de la Loire
- /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Clermont-Ferrand 2026 en famille: horaires, animations et accès | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-montpellier-2026-en-famille-dates-fermetures-et-attractions/ | Marché de Noël de Montpellier 2026 en famille: horaires, jours fermés et manèges | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | Noël des Alpes 2026 à Annecy en famille: marché, patinoire et illuminations | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël de Saint-Étienne 2026 en famille: dates, horaires et accès | evenements | Saint-Étienne, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/la-seine-musicale-en-famille-en-2027-quels-concerts-et-ateliers-selon-l-age/ | La Seine Musicale en famille en 2027: quels concerts et ateliers selon l'âge ? | evenements | Boulogne-Billancourt, Hauts-de-Seine, Île-de-France
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires et accès | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir/ | Festival des Jeux de Cannes 2027 en famille: billets, âges et visite | evenements | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans/ | Foulée Blanche 2027 en famille: courses, âges, tarifs et programme à Autrans | evenements | Autrans-Méaudre en Vercors, Isère, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir/ | 2026-10-28T09:26:08.391Z
- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- opportunity | /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/ | 2026-10-29T11:32:05.289Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/marche-de-noel-de-montpellier-2026-en-famille-dates-fermetures-et-attractions/ | 2026-10-29T08:29:37.767Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z
- opportunity | /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T18:37:09.008Z
- opportunity | /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | 2026-10-28T21:29:26.054Z
- opportunity | /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | 2026-10-29T05:28:53.475Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
