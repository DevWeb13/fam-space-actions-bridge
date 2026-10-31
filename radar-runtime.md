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
title: "Noël 2026 à Toulon en famille : marché, patinoire et horaires"
subtitle: "Place de la Liberté ou place d'Armes : où aller avec les enfants et quels frais prévoir ?"
summary: Du 27 novembre 2026 au 3 janvier 2027, Toulon prévoit un marché de Noël place de la Liberté et un Village des Enfants place d'Armes. Animations annoncées, horaires exceptionnels et budget à anticiper.
category: evenements
location:
  city: Toulon
  department: Var
  region: Provence-Alpes-Côte d'Azur
keywords:
  - Noël Toulon 2026 famille
  - marché de Noël Toulon place de la Liberté
  - Village des Enfants Toulon place d'Armes
  - patinoire Toulon Noël 2026
sources:
  - title: Ville de Toulon — règlement du marché de Noël 2026, dates et horaires
    url: https://demarches.toulon.fr/media/uploads/2026/04/24/appel-a-candidature-et-reglement-interieur-marche-de-noel-toulon-2026-places-liberte-et-armes.pdf
  - title: Ville de Toulon — festivités prévues et chalet photo du Père Noël
    url: https://demarches.toulon.fr/infos_demarches/appel-a-projets/appel-a-candidature-en-vue-dexploiter-une-stand-photo-avec-le-pere-noel-a-toulon-pour-les-festivites-de-noel-2026/
  - title: Ville de Toulon — horaires particuliers et restauration place Monsenergue
    url: https://demarches.toulon.fr/infos_demarches/appel-a-projets/appel-a-candidatures-marche-de-noel-2026-place-monsenergue/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants
  decision: Choisir la place et le jour les plus adaptés à l'âge des enfants et aux activités souhaitées, sans confondre accès libre au village et prix éventuels des attractions.
  affiliationPotential: "Aucune billetterie pour entrer dans les villages; hébergement familial vérifié sur Booking.com : Appartement T3 climatisé, cœur de Toulon (2 chambres, 4 personnes, cuisine, proche de la gare et de la place de la Liberté), https://www.booking.com/hotel/fr/appartement-t3-coeur-de-toulon.fr.html ; disponibilité et prix à vérifier aux dates choisies."
  gsc:
    retrievedAt: 2026-10-31T02:28:22+01:00
    dataThrough: 2026-10-28
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Toulon - règlement du marché de Noël 2026, dates et horaires »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-03
---

À Toulon, les festivités de Noël 2026 sont prévues **du vendredi 27 novembre au dimanche 3 janvier 2027** sur deux places du centre-ville. Pour flâner parmi les chalets et les décors, direction la **place de la Liberté**. Pour privilégier les tours de manège et la patinoire, la **place d'Armes** sera le choix le plus adapté. Les deux espaces peuvent aussi se découvrir au cours de la même sortie.

Les informations disponibles au 31 octobre proviennent des appels à candidatures de la Ville : elles décrivent le programme **prévu**, pas encore l'intégralité des animations et tarifs définitifs.

## Place de la Liberté : marché, crèche et Père Noël

Le marché principal doit réunir **environ 59 chalets**, une crèche provençale animée et des décors de fête. La Ville annonce également une **luge synthétique** et un **sapin-manège**. C'est la place à choisir si l'on veut surtout profiter de l'ambiance de Noël, regarder les décorations et faire une pause gourmande, avec ou sans attraction.

Un **chalet photo avec le Père Noël** est prévu du **27 novembre au 24 décembre au soir**. Les jours et heures de présence du Père Noël, ainsi que le prix éventuel des photos, restent à confirmer. Ces éléments figurent dans l'[appel à candidatures de la Ville de Toulon](https://demarches.toulon.fr/infos_demarches/appel-a-projets/appel-a-candidature-en-vue-dexploiter-une-stand-photo-avec-le-pere-noel-a-toulon-pour-les-festivites-de-noel-2026/).

## Place d'Armes : le Village des Enfants

Le programme municipal prévoit **huit chalets, une patinoire et cinq manèges**, parmi lesquels un mini-grand huit, un manège enfantin et un petit train. Pour les enfants qui veulent surtout jouer ou patiner, mieux vaut commencer par cette place plutôt que de leur promettre une longue visite des chalets.

**Attention au budget :** se promener sur les places publiques ne nécessite pas de billet d'entrée, mais cela ne signifie pas que la patinoire, la luge, les manèges ou les photos sont gratuits. Les **tarifs 2026, conditions d'âge ou de taille, location de patins et éventuelles consignes de sécurité** ne sont pas encore confirmés dans les documents consultés. Ne reprenez pas les prix de l'édition 2025 comme s'ils étaient ceux de 2026.

La Ville prévoit aussi des animations et déambulations dans le centre-ville pendant les fêtes. Le calendrier détaillé des spectacles et ateliers sera à consulter lorsqu'il sera publié.

## Quels jours et horaires choisir ?

Le [règlement municipal 2026](https://demarches.toulon.fr/media/uploads/2026/04/24/appel-a-candidature-et-reglement-interieur-marche-de-noel-toulon-2026-places-liberte-et-armes.pdf) annonce les horaires d'ouverture suivants :

- **Du dimanche au jeudi :** 10 h 30 à 21 h 30.
- **Vendredi et samedi :** 10 h 30 à 22 h 30.
- **Jeudi 24 décembre :** 10 h 30 à 18 h 30.
- **Vendredi 25 décembre :** 15 h 30 à 20 h 30.
- **Jeudi 31 décembre :** 10 h 30 à 18 h 30.
- **Vendredi 1er janvier 2027 :** 15 h 30 à 18 h 30.

L'ouverture du **vendredi 27 novembre** est annoncée de 10 h 30 à 22 h 30. La Ville se réserve la possibilité de modifier les horaires pour des raisons d'organisation, de sécurité ou de météo.

Avec de jeunes enfants, une visite en journée permet de profiter des chalets sans attendre le soir. Pour les illuminations, privilégiez une arrivée en fin d'après-midi, en gardant à l'esprit que les files d'attente des attractions peuvent rallonger la sortie.

## Poussette, toilettes et repas : que prévoir ?

Les deux places se trouvent dans le centre de Toulon et peuvent s'intégrer à une même promenade. Avec une poussette, prévoyez du temps pour circuler parmi les chalets, surtout lors des périodes fréquentées. **Aucun dispositif précis de toilettes publiques, table à langer ou cheminement accessible pour l'édition 2026 n'a pu être confirmé** dans les documents municipaux consultés : mieux vaut vérifier ces services avant de compter dessus avec un bébé.

Pour manger, les chalets offrent une possibilité de pause selon les commerçants présents. La Ville a aussi lancé un [appel à candidatures pour des food-trucks place Monsenergue](https://demarches.toulon.fr/infos_demarches/appel-a-projets/appel-a-candidatures-marche-de-noel-2026-place-monsenergue/), à proximité du Village des Enfants ; leur présence effective reste à confirmer.

Si vous arrivez en train, notre guide de la [gare de Toulon avec des enfants](https://www.fam-space.fr/articles/vie-pratique/gare-de-toulon-avec-des-enfants-bagages-parking-et-correspondances/) détaille les toilettes, la nurserie, les correspondances et les solutions pour les bagages.

## Rester une nuit à Toulon pour profiter des fêtes

Pour les familles qui viennent de plus loin, un logement avec cuisine peut faciliter le dîner et le coucher des enfants après les animations. L'[Appartement T3 climatisé, cœur de Toulon, sur Booking.com](https://www.booking.com/hotel/fr/appartement-t3-coeur-de-toulon.fr.html) est une piste à examiner : l'annonce repérée présente deux chambres et une capacité de quatre personnes, à proximité de la gare et de la place de la Liberté. **Vérifiez directement les équipements, les conditions, le prix et la disponibilité pour vos dates** avant de réserver.

Si vous prolongez le séjour, notre guide du [Mont Faron en famille](https://www.fam-space.fr/articles/sorties/mont-faron-en-famille-telepherique-parc-animalier-et-conseils-2026/) aide à organiser une autre sortie, sous réserve des horaires et de la météo hivernale.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires et accès | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/vie-pratique/gare-de-toulon-avec-des-enfants-bagages-parking-et-correspondances/ | Gare de Toulon avec des enfants: bagages, parking et correspondances | vie-pratique | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/maison/chambre-d-enfant-a-petit-budget-dans-le-var-ou-acheter-des-meubles-d-occasion/ | Chambre d'enfant à petit budget dans le Var: où acheter des meubles d'occasion? | maison | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Clermont-Ferrand 2026 en famille: horaires, animations et accès | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/sorties/mont-faron-en-famille-telepherique-parc-animalier-et-conseils-2026/ | Mont Faron en famille: téléphérique, parc animalier et conseils 2026 | sorties | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/braderie-ete-toulon-2026-famille/ | Braderie d’été de Toulon 2026 en famille: animations gratuites et accès au centre-ville | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/activites/ecopark-la-castille-avec-des-enfants-quel-parcours-choisir-selon-leur-taille/ | Ecopark La Castille avec des enfants: quel parcours choisir selon leur taille? | activites | Solliès-Ville, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/fete-de-la-chataigne-a-collobrieres-quel-dimanche-choisir-avec-des-enfants/ | Fête de la Châtaigne à Collobrières: quel dimanche choisir avec des enfants? | evenements | Collobrières, Var, Provence-Alpes-Côte d’Azur
- /articles/voyages/gorges-du-verdon-avec-des-enfants-dormir-a-aiguines-ou-pres-du-lac-de-sainte-croix/ | Gorges du Verdon avec des enfants: dormir à Aiguines ou près du lac de Sainte-Croix? | voyages | Aiguines, Var, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/porquerolles-en-famille-sans-exploser-le-budget-les-bons-choix-pour-une-journee-ou-un-week-end/ | Porquerolles en famille sans exploser le budget: les bons choix pour une journée ou un week-end | bons-plans | Hyères, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | Noël à Caen 2026 en famille: marché de Noël et visite illuminée | evenements | Caen, Calvados, Normandie
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | Noël à Bayeux 2026 en famille: marché et Galopades | evenements | Bayeux, Calvados, Normandie
- /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | Lumières de Laval 2026 en famille: marchés, grande roue et croisière | evenements | Laval, Mayenne, Pays de la Loire
- /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | Noël 2026 à Brest en famille: marché, projections et horaires | evenements | Brest, Finistère, Bretagne
- /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | Festival des Petits Explorateurs 2026 à Dijon: ateliers, horaires et tarifs | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille/ | Flottins d’Évian 2026: un village de Noël en bois flotté à découvrir en famille | evenements | Évian-les-Bains, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | Festival BD Colomiers 2026 en famille: programme, tarifs et accès | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | Ville de Noël d’Arras 2026 en famille: horaires, attractions et budget | evenements | Arras, Pas-de-Calais, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | 2026-10-29T23:28:55.064Z
- opportunity | /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | 2026-10-30T03:27:02.483Z
- refresh | /articles/evenements/fete-de-la-chataigne-a-collobrieres-quel-dimanche-choisir-avec-des-enfants/ | 2026-10-08T10:21:36.677Z
- opportunity | /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | 2026-10-30T09:27:15.122Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- opportunity | /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/ | 2026-10-29T11:32:05.289Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | 2026-10-30T06:28:26.726Z
- opportunity | /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | 2026-10-30T15:36:05.374Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
