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
title: "Marché de Noël d'Avignon 2026 en famille : horaires et accès"
subtitle: "Place de l'Horloge : quand venir avec les enfants, où se garer et comment rejoindre les chalets"
summary: Du 27 novembre 2026 au 2 janvier 2027, le marché de Noël des commerçants d'Avignon est gratuit. Horaires confirmés, accès depuis la gare, parkings et conseils avec une poussette.
category: evenements
location:
  city: Avignon
  department: Vaucluse
  region: Provence-Alpes-Côte d'Azur
keywords:
  - marché de Noël Avignon 2026
  - Noël Avignon place de l'Horloge
  - marché de Noël des commerçants Avignon horaires
sources:
  - title: Avignon Tourisme — Marché de Noël des commerçants 2026
    url: https://avignon-tourisme.com/offres/marche-de-noel-des-commercants-avignon-fr-5191837/
  - title: Avignon Tourisme — Où se garer à Avignon
    url: https://avignon-tourisme.com/informations-pratiques/ou-se-garer-a-avignon/
  - title: Avignon Tourisme — Gare Avignon Centre
    url: https://avignon-tourisme.com/offres/avignon-gare-centre-avignon-fr-4254665/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces
  decision: Savoir quand aller au marché gratuit de la place de l'Horloge avec des enfants et choisir un accès simple, sans confondre les chalets confirmés avec d'éventuelles animations de Noël non annoncées.
  affiliationPotential: "Aucun billet pour le marché gratuit. Hébergement facultatif vérifié sur Booking.com : ApartHotel Sainte-Marthe, appartements familiaux avec kitchenette, à proximité du centre historique ; vérifier les disponibilités aux dates choisies."
  gsc:
    retrievedAt: 2026-10-28T03:28:35+01:00
    dataThrough: 2026-10-25
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Avignon Tourisme — Marché de Noël des commerçants 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-02
---

Le marché de Noël des commerçants revient **place de l'Horloge, au centre d'Avignon, du vendredi 27 novembre 2026 au samedi 2 janvier 2027**. L'entrée est libre : vous pouvez venir voir les chalets avec les enfants sans acheter de billet. L'essentiel est de choisir un horaire adapté à leur rythme et un accès qui évite de chercher une place au dernier moment.

## Dates et horaires : quel créneau choisir ?

D'après la [fiche 2026 d'Avignon Tourisme](https://avignon-tourisme.com/offres/marche-de-noel-des-commercants-avignon-fr-5191837/), le marché ouvre **de 11 h à 20 h du dimanche au jeudi**, et **de 11 h à 21 h le vendredi et le samedi**, pendant toute la période annoncée.

Avec de jeunes enfants, une visite en début d'après-midi permet de parcourir les chalets avant la fatigue du soir. Si vous souhaitez profiter de l'ambiance après la tombée de la nuit, prévoyez plutôt une sortie courte, des vêtements chauds et un horaire de retour compatible avec le coucher des plus petits. Les horaires affichés peuvent être actualisés, notamment autour des fêtes : consultez la fiche officielle avant de partir.

## Que trouver sur la place de l'Horloge ?

Le marché est organisé par la Fédération des commerçants et artisans de la ville. L'office de tourisme annonce des **chalets en bois**, des produits régionaux, des spécialités gastronomiques, des bijoux, des tissus et des **jouets en bois**. C'est une sortie à envisager pour flâner et choisir quelques cadeaux, plutôt qu'une activité nécessitant une réservation.

Ne confondez pas ce marché confirmé avec l'ensemble des festivités de Noël à Avignon : la fiche consultée ne confirme ni patinoire, ni rencontre avec le Père Noël, ni spectacles sur ce site. Ne promettez donc pas ces animations aux enfants sans programme distinct publié par les organisateurs.

## Venir en train ou en voiture

**En train :** choisissez **Avignon-Centre**, sur le boulevard Saint-Roch, et non Avignon TGV, qui est une autre gare. Depuis Avignon-Centre, rejoignez la vieille ville par la porte de la République, puis remontez la rue de la République vers la place de l'Horloge. Comptez une marche dans le centre historique, avec une marge supplémentaire pour les petites jambes et les arrêts. La [fiche officielle de la gare Centre](https://avignon-tourisme.com/offres/avignon-gare-centre-avignon-fr-4254665/) confirme sa proximité immédiate avec le centre.

**En voiture, pour une visite courte :** le **parking du Palais des Papes** est pratique pour rejoindre la place de l'Horloge à pied. Il est payant, ouvert 24 h/24 et limité aux véhicules de 1,90 m de hauteur. Avec une poussette, privilégiez sa sortie de plain-pied par la rue de la Juiverie plutôt que la sortie avec escaliers. Vérifiez le tarif et les places avant de vous engager.

**Pour éviter le stationnement payant du centre :** le **P+R Italiens**, avenue des Italiens, propose des places gratuites et la navette gratuite CityZen Italiens vers le secteur de la place Pie ; il reste ensuite un trajet à pied. Le **P+R Piot** est une autre possibilité, avec une navette P1 gratuite jusqu'à la porte de l'Oulle, mais l'approche du marché se fait depuis l'ouest du centre. Contrôlez les horaires de retour des navettes, surtout si vous restez en soirée. Les capacités, dessertes et conditions sont détaillées par [Avignon Tourisme dans son guide du stationnement](https://avignon-tourisme.com/informations-pratiques/ou-se-garer-a-avignon/).

## Avec une poussette : prévoir une visite souple

La place de l'Horloge se découvre à pied, mais prévoyez de circuler dans des rues de centre ancien et d'adapter votre parcours à l'affluence autour des chalets. Pour un bébé, emportez le nécessaire pour le change et le repas, ainsi qu'une protection contre le froid ou la pluie. Aucun espace de change, service de réchauffage des biberons ou animation pour tout-petits n'est garanti par la fiche du marché : ne comptez pas dessus sans confirmation.

Gardez la visite assez courte pour pouvoir faire une pause à l'écart des chalets. Si vous prolongez la journée par une découverte du Palais des Papes, notre [guide d'Avignon avec un bébé](https://www.fam-space.fr/articles/parentalite/premier-week-end-a-avignon-avec-un-bebe-ou-dormir-et-quoi-prevoir/) explique notamment pourquoi un porte-bébé est utile pour ce monument. Les familles qui habitent Avignon ou Montfavet peuvent aussi consulter les [conditions de gratuité du Palais et du pont d'Avignon le week-end](https://www.fam-space.fr/articles/bons-plans/avignonnais-palais-des-papes-et-pont-gratuits-le-week-end/) si elles souhaitent ajouter une visite patrimoniale.

## Et si vous passez la nuit à Avignon ?

Pour transformer la sortie en petit séjour, l'[ApartHotel Sainte-Marthe sur Booking.com](https://www.booking.com/hotel/fr/ra-c-sidence-sainte-marthe.fr.html) propose des appartements de différentes capacités avec kitchenette, réfrigérateur et micro-ondes, pratiques pour les repas d'une famille. Il se situe près du centre historique, mais pas directement sur la place de l'Horloge : vérifiez le trajet, la capacité exacte du logement, les équipements pour bébé et les conditions de réservation aux dates choisies.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/parentalite/premier-week-end-a-avignon-avec-un-bebe-ou-dormir-et-quoi-prevoir/ | Avignon avec un bébé: poussette, Palais des Papes et où dormir | parentalite | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/avignonnais-palais-des-papes-et-pont-gratuits-le-week-end/ | Avignonnais: Palais des Papes et Pont gratuits le week-end | bons-plans | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/halloween-a-avignon-une-visite-familiale-pour-decouvrir-l-archeologie-funeraire/ | Halloween à Avignon: un atelier familial pour découvrir l'archéologie funéraire | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/sorties/palais-roure-avignon-famille-2026/ | Palais du Roure à Avignon en famille: retour sur les rendez-vous gratuits d'août 2026 | sorties | Avignon, Vaucluse, Provence-Alpes-Côte d'Azur
- /articles/evenements/noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges/ | Noël à Aix-en-Provence 2026 en famille: marchés, santons et manèges | evenements | Aix-en-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/lumieres-de-noel-a-montbeliard-2026-quel-jour-venir-avec-des-enfants/ | Lumières de Noël à Montbéliard 2026: quel jour venir avec des enfants? | evenements | Montbéliard, Doubs, Bourgogne-Franche-Comté
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/vie-pratique/veloroute-du-calavon-avec-des-enfants-quelle-balade-choisir/ | Véloroute du Calavon avec des enfants: quelle balade choisir ? | vie-pratique | Apt, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | Halloween 2026 au Parc Spirou: billets, nocturnes Naruto et maison hantée | evenements | Monteux, Vaucluse, Provence-Alpes-Côte d'Azur
- /articles/activites/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre/ | Grottes de Thouzon avec des enfants: préparer la visite sous terre | activites | Le Thor, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/voyages/orange-avec-des-enfants-ou-dormir-pour-tout-faire-a-pied/ | Orange avec des enfants: où dormir pour tout faire à pied | voyages | Orange, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/sorties/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets/ | Parc Spirou avec de jeunes enfants: regardez la taille avant d'acheter les billets | sorties | Monteux, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans/ | Foulée Blanche 2027 en famille: courses, âges, tarifs et programme à Autrans | evenements | Autrans-Méaudre en Vercors, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | Noël à Fontevraud 2026: patinoire, marché, dates et tarifs en famille | evenements | Fontevraud-l'Abbaye, Maine-et-Loire, Pays de la Loire
- /articles/evenements/batiment-b-a-saint-denis-decouvrir-le-street-art-en-famille/ | Bâtiment B à Saint-Denis: découvrir le street art en famille | evenements | Saint-Denis, La Réunion, La Réunion
- /articles/evenements/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/ | Noël 2026 au château royal de Blois: décors, spectacles et tarifs en famille | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants/ | Marie-Antoinette à Fontainebleau 2026-2027: exposition, visites et tarifs en famille | evenements | Fontainebleau, Seine-et-Marne, Île-de-France
- /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | Féeries de Noël 2026 à Paris: parcours lumineux, billets et patinoire en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-a-villandry-spectacles-et-ateliers-a-choisir-selon-l-age/ | Noël 2026 à Villandry: décors, spectacle d'ombres et ateliers en famille | evenements | Villandry, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | Noël de Casse-Noisette 2026 à Pierrefonds: visites, dates et tarifs en famille | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/ | Festival de la Sainte-Barbe 2026 à Lens-Liévin: programme en famille du 4 au 6 décembre | evenements | Lens, Pas-de-Calais, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/evenements/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/ | 2026-10-27T04:28:31.006Z
- opportunity | /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | 2026-10-12T17:34:53.933Z
- opportunity | /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | 2026-10-27T13:28:21.076Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants/ | 2026-10-27T18:27:41.322Z
- opportunity | /articles/evenements/noel-2026-a-villandry-spectacles-et-ateliers-a-choisir-selon-l-age/ | 2026-10-27T10:35:41.254Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/ | 2026-10-27T22:28:21.356Z
- opportunity | /articles/evenements/noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges/ | 2026-10-25T15:16:03.590Z
- opportunity | /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | 2026-10-28T01:34:03.741Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
