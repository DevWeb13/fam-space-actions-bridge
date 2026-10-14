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
- contrôle que la logique d'affiliation de ces règles partenaires fournies dans ce runtime a bien été appliquée, que les offres retenues sont encore pertinentes et que leur intégration se lit naturellement; pour une sortie, une activité, une visite, un événement ou un voyage sans affiliation, vérifie qu'aucune piste normale n'a été oubliée;
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
title: "Au Creux de l'Oreille 2026 à Noirlac: spectacles et ateliers en famille du 17 au 22 octobre"
subtitle: "Concert dès 6 mois, contes, jeux et découvertes de l'abbaye: dates, âges, tarifs et réservations"
summary: "Au Creux de l'Oreille 2026 à l'abbaye de Noirlac: quels spectacles ou ateliers choisir selon l'âge des enfants du 17 au 22 octobre, et à quel prix?"
category: evenements
location:
  city: Bruère-Allichamps
  department: Cher
  region: Centre-Val de Loire
keywords:
  - Au Creux de l'Oreille 2026
  - festival famille abbaye de Noirlac octobre 2026
  - spectacles ateliers enfants Noirlac Toussaint
sources:
  - title: Abbaye de Noirlac - Programme Au Creux de l'Oreille 2026
    url: https://www.abbayedenoirlac.fr/fr/au-creux-de-l-oreille
  - title: Abbaye de Noirlac - La danse de la pluie
    url: https://www.abbayedenoirlac.fr/agenda/programmation-artistique/concert-pour-mon-tout-petit-la-danse-de-la-pluie
  - title: Abbaye de Noirlac - L'Affaire méchant loup
    url: https://www.abbayedenoirlac.fr/agenda/programmation-artistique/l-affaire-mechant-loup
  - title: Abbaye de Noirlac - Atelier Rejoue L'affaire méchant loup
    url: https://www.abbayedenoirlac.fr/agenda/programmation-artistique/atelier-l-affaire-mechant-loup
  - title: Abbaye de Noirlac - Les Histoires manquantes
    url: https://www.abbayedenoirlac.fr/agenda/programmation-artistique/les-histoires-manquantes
  - title: Abbaye de Noirlac - Ludothèque Micado
    url: https://www.abbayedenoirlac.fr/agenda/programmation-artistique/ludotheque-micado
  - title: Abbaye de Noirlac - Sur la piste des animaux sauvages
    url: https://www.abbayedenoirlac.fr/fr/sur-la-piste-des-animaux-sauvages
  - title: Abbaye de Noirlac - Jeu de la Sagesse
    url: https://www.abbayedenoirlac.fr/agenda/programmation-artistique/au-creux-de-l-oreille-festival-famille/jeu-de-la-sagesse
  - title: Abbaye de Noirlac - Visite Bout d'Choux
    url: https://www.abbayedenoirlac.fr/agenda/activites-patrimoine/visite-bout-d-choux-copie
  - title: Abbaye de Noirlac - Moulage d'empreinte animale
    url: https://www.abbayedenoirlac.fr/agenda/programmation-artistique/au-creux-de-l-oreille-festival-famille/atelier-moulage-d-empreinte-animale
  - title: Abbaye de Noirlac - Atelier Bout d'choux landart
    url: https://www.abbayedenoirlac.fr/agenda/programmation-artistique/au-creux-de-l-oreille-festival-famille/atelier-bout-d-choux-landart-d399b741
  - title: Abbaye de Noirlac - Jouons avec les Grisailles
    url: https://www.abbayedenoirlac.fr/agenda/programmation-artistique/au-creux-de-l-oreille-festival-famille/jouons-avec-les-grisailles
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants
  decision: Choisir un spectacle, une visite ou un atelier réellement adapté à l'âge de chaque enfant entre le 17 et le 22 octobre, comprendre le prix de chaque activité et réserver le bon créneau auprès de l'abbaye.
  affiliationPotential: Billetterie des spectacles et ateliers exclusivement auprès de l'abbaye; aucun lien de billetterie partenaire naturel vérifié. Pour une famille venue de loin, Le Noirlac à Saint-Amand-Montrond est référencé avec chambres familiales sur Booking.com (https://www.booking.com/hotel/fr/le-noirlac.fr.html); mention secondaire de séjour uniquement, sans prix ni disponibilité supposés.
  gsc:
    retrievedAt: 2026-10-14T04:26:13.937Z
    dataThrough: 2026-10-11
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Abbaye de Noirlac - Au Creux de l'Oreille 2026, programme et réservations »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-10-22
---

**Du 17 au 22 octobre 2026**, l'abbaye de Noirlac, à Bruère-Allichamps dans le Cher, accueille **Au Creux de l'Oreille**, un festival familial qui commence par un week-end de concerts et de contes, puis se poursuit avec des visites et des ateliers. Certaines propositions sont accessibles **dès 6 mois**, d'autres commencent à 3, 5, 6, 8 ou 9 ans. Les séances ne sont pas toutes au même tarif: mieux vaut choisir selon l'âge de l'enfant avant de réserver.

## Du 17 au 18 octobre: quel spectacle choisir?

Pour une première expérience musicale avec un bébé ou un enfant de moins de 5 ans, le [concert «La danse de la pluie»](https://www.abbayedenoirlac.fr/agenda/programmation-artistique/concert-pour-mon-tout-petit-la-danse-de-la-pluie) est le plus adapté. Quatre voix de l'ensemble Mikrokosmos, accompagnées d'objets sonores, évoquent les éléments naturels. Le concert dure **30 minutes**, accueille les **6 mois-7 ans accompagnés de leurs parents** et coûte **6 €**. Trois séances sont annoncées: **samedi 17 à 17h30**, **dimanche 18 à 11h et 17h30**.

Pour les enfants qui suivent déjà une histoire plus longue, deux spectacles sont proposés les **samedi 17 et dimanche 18 octobre**, chacun à **6 €**:

- **Dès 5 ans:** [«L'Affaire méchant loup»](https://www.abbayedenoirlac.fr/agenda/programmation-artistique/l-affaire-mechant-loup), à **16h**, dure **45 minutes**. Théâtre d'ombres et musique revisitent *La Chèvre de monsieur Seguin* en donnant une autre place au loup. Ceux qui souhaitent manipuler sons et objets peuvent prolonger avec l'[atelier «Rejoue L'affaire méchant loup»](https://www.abbayedenoirlac.fr/agenda/programmation-artistique/atelier-l-affaire-mechant-loup), à **17h**, **dès 5 ans**, **1 heure**, **6 € supplémentaires**.
- **Dès 6 ans:** [«Les Histoires manquantes»](https://www.abbayedenoirlac.fr/agenda/programmation-artistique/les-histoires-manquantes), à **15h et 17h**, dure **50 minutes**. Contes illustrés et musique prennent vie dans un *kamishibaï*, théâtre de papier d'origine japonaise. Les récits évoquent différentes histoires et formes de familles.

Les horaires se chevauchent: un enfant ne peut pas suivre simultanément «Les Histoires manquantes» à 17h et l'atelier du loup à 17h. Avec un plus jeune, privilégier un seul spectacle peut laisser davantage de temps pour jouer sur place.

### La ludothèque est-elle gratuite?

La [ludothèque Micado](https://www.abbayedenoirlac.fr/agenda/programmation-artistique/ludotheque-micado) accueille petits et grands les **17 et 18 octobre de 12h à 17h30**: espace bébé, jeux de construction, plateaux et jeux géants en bois. **Elle est accessible avec un billet de spectacle ou un billet d'entrée à l'abbaye**: ce n'est pas une animation en accès libre sans billet. Le programme annonce également un goûter offert aux enfants. <https://www.abbayedenoirlac.fr/fr/au-creux-de-l-oreille> donne la vue d'ensemble du week-end.

## Du 19 au 22 octobre: visites de l'abbaye ou ateliers nature?

Après le week-end, les animations invitent les enfants à découvrir les salles du monument ou la faune du bocage. Les choix les plus nets selon l'âge sont les suivants.

**Pour les 3-5 ans**, deux propositions à **6 €**:
- **Mercredi 21 octobre à 10h30:** [visite «Bout d'Choux»](https://www.abbayedenoirlac.fr/agenda/activites-patrimoine/visite-bout-d-choux-copie), **1h30**. Puzzles, jeux d'observation et expériences sonores font découvrir la vie des moines aux enfants accompagnés d'un parent.
- **Jeudi 22 octobre à 10h30:** [atelier «Bout d'choux landart»](https://www.abbayedenoirlac.fr/agenda/programmation-artistique/au-creux-de-l-oreille-festival-famille/atelier-bout-d-choux-landart-d399b741), **2 heures**, **6 € par participant, adulte compris**. Les enfants accompagnés créent avec des éléments récoltés dans le bocage. L'activité est réservée à cette tranche d'âge.

**Dès 6 ans**, le [moulage d'empreinte animale](https://www.abbayedenoirlac.fr/agenda/programmation-artistique/au-creux-de-l-oreille-festival-famille/atelier-moulage-d-empreinte-animale) a lieu **mercredi 21 octobre à 14h30**. La famille prépare des moulages en salle, puis cherche des traces de la faune à l'extérieur. Comptez **2 heures et 8 € par participant, adultes compris**. Les enfants plus jeunes ne sont pas admis à cet atelier.

**Dès 8 ans**, le [«Jeu de la Sagesse»](https://www.abbayedenoirlac.fr/agenda/programmation-artistique/au-creux-de-l-oreille-festival-famille/jeu-de-la-sagesse) a lieu **mardi 20 à 10h30**: une épreuve collective pour élire un nouvel abbé, **2 heures, 8 €**. Le [jeu de création «Jouons avec les Grisailles»](https://www.abbayedenoirlac.fr/agenda/programmation-artistique/au-creux-de-l-oreille-festival-famille/jouons-avec-les-grisailles), **jeudi 22 à 10h30**, fait réaliser un vitrail en peinture, **1h30, 8 €**.

**Dès 9 ans**, la sortie [«Sur la piste des animaux sauvages»](https://www.abbayedenoirlac.fr/fr/sur-la-piste-des-animaux-sauvages) du **lundi 19 à 14h30** explore le bocage à la recherche d'indices laissés par les animaux. Prévoyez **2h30, jusqu'à 5 km de marche tout terrain**. Tarif annoncé: **5 € plein tarif**, **3,50 € tarif réduit**, **gratuit pour les moins de 12 ans**. Les enfants de moins de 9 ans ne sont pas admis et les mineurs concernés doivent être accompagnés.

Pour les ateliers et sorties nature, arrivez **10 minutes avant le départ**, avec chaussures fermées ou bottes, eau et vêtements adaptés à la météo. Les chiens ne sont pas admis dans ces activités. Ces conditions comptent particulièrement pour la marche du 19 octobre et les ateliers en extérieur.

## Réserver et préparer la venue à Noirlac

Le [programme officiel du festival](https://www.abbayedenoirlac.fr/fr/au-creux-de-l-oreille) annonce l'ouverture de **11h à 18h30 les samedi 17 et dimanche 18**, puis de **10h30 à 17h du lundi 19 au jeudi 22**. Pour connaître les disponibilités d'une séance et les modalités exactes d'entrée, réservez auprès de l'abbaye via les boutons de billetterie de chaque fiche ou contactez **resa@noirlac.fr** ou **02 48 96 17 16**. Les tarifs des spectacles, ateliers et visites ne sont pas interchangeables: vérifiez le billet correspondant à l'activité et le nombre de participants payants, parents inclus lorsqu'il est indiqué.

Pour les familles qui transforment cette sortie en séjour dans le sud du Cher, l'[hôtel Le Noirlac, à Saint-Amand-Montrond](https://www.booking.com/hotel/fr/le-noirlac.fr.html) propose des chambres familiales. Vérifiez la configuration adaptée à votre groupe, les équipements pour bébé et les disponibilités aux dates retenues avant de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/les-expressifs-2026-a-poitiers-trois-jours-de-spectacles-gratuits/ | Les Expressifs 2026 à Poitiers: trois jours de spectacles gratuits | evenements | Poitiers, Vienne, Nouvelle-Aquitaine
- /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | Famille en fête 2026 en Gironde: ateliers gratuits pour les 0-6 ans | evenements | Saint-Loubès, Gironde, Nouvelle-Aquitaine
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/mon-premier-festival-2026-paris-film-age/ | Mon Premier Festival 2026 à Paris: quel film choisir selon l'âge? | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | Vacances de la Toussaint 2026 à la Cité des sciences: les ateliers numériques gratuits avec des enfants | sorties | Paris, Paris, Île-de-France
- /articles/evenements/court-circuit-2026-a-annecy-en-famille-spectacles-tarifs-et-conseils/ | Court Circuit 2026 à Annecy en famille: spectacles, tarifs et conseils | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/nancy-jazz-pulsations-2026-en-famille-spectacles-enfants-tarifs-et-conseils/ | Nancy Jazz Pulsations 2026 en famille: spectacles enfants, tarifs et conseils | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | Grands Zyeux P'tites Zoreilles 2026: spectacles gratuits avec les tout-petits autour de Béziers | evenements | Béziers, Hérault, Occitanie
- /articles/cuisine/galette-aux-pommes-de-terre-du-berry-une-recette-a-faire-en-famille/ | Galette aux pommes de terre du Berry: une recette à faire en famille | cuisine | Bourges, Cher, Centre-Val de Loire
- /articles/maison/encombrants-a-bourges-quand-sortir-meubles-et-gros-objets/ | Encombrants à Bourges: quand sortir meubles et gros objets | maison | Bourges, Cher, Centre-Val de Loire
- /articles/vie-pratique/carte-famille-de-bourges-qui-peut-l-obtenir-et-a-quoi-sert-elle/ | Carte famille de Bourges: qui peut l'obtenir et à quoi sert-elle? | vie-pratique | Bourges, Cher, Centre-Val de Loire
- /articles/voyages/bourges-en-famille-ou-dormir-pour-visiter-sans-voiture/ | Bourges en famille: où dormir pour visiter sans voiture | voyages | Bourges, Cher, Centre-Val de Loire
- /articles/voyages/week-end-en-famille-au-lac-de-sidiailles-activites-baignade-et-budget/ | Week-end en famille au lac de Sidiailles: activités, baignade et budget | voyages | Sidiailles, Cher, Centre-Val de Loire
- /articles/evenements/guinguette-familles-rians-2026/ | Guinguette des familles 2026 à Rians: les rendez-vous à ne pas manquer jusqu’au 12 août | evenements | Rians, Cher, Centre-Val de Loire
- /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | Abracada BOUH 2026 à Montpellier: programme et tarifs au château de Flaugergues | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | Fête de l'Automne 2026 à Terra Botanica: animations et tarifs | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | Monument jeu d'enfant 2026 à Saint-Denis: atelier Dagobert le 17 octobre | evenements | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | Halloween 2026 au Safari de Peaugres: animations, tarifs et Festival Lumières Sauvages | evenements | Peaugres, Ardèche, Auvergne-Rhône-Alpes
- /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | Halloween 2026 au Parc Spirou: billets, nocturnes Naruto et maison hantée | evenements | Monteux, Vaucluse, Provence-Alpes-Côte d'Azur
- /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | Halloween 2026 au château de Couches: atelier citrouille et jeu Mystères & Sortilèges | evenements | Couches, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | Halloween 2026 à la Tour de l'Horloge de Guînes: visites, contes et nocturne | evenements | Guînes, Pas-de-Calais, Hauts-de-France
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | 2026-10-13T20:41:25.500Z
- refresh | /articles/maison/encombrants-a-bourges-quand-sortir-meubles-et-gros-objets/ | 2026-10-03T03:24:30.315Z
- opportunity | /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | 2026-10-12T08:10:30.674Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- opportunity | /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | 2026-10-13T12:37:05.098Z
- opportunity | /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | 2026-10-14T07:31:28.976Z
- opportunity | /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | 2026-10-12T10:40:26.563Z
- opportunity | /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | 2026-10-12T14:00:32.202Z
- opportunity | /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | 2026-10-12T17:34:53.933Z
- opportunity | /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | 2026-10-13T05:01:12.150Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
