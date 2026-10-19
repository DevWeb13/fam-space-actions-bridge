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
title: "Fête des Lumières 2026 à Lyon en famille: quel soir venir et comment s'organiser?"
subtitle: "Du 5 au 8 décembre, quatre soirées gratuites: horaires, visite courte avec les enfants et précautions avant le programme."
summary: "Fête des Lumières 2026 à Lyon en famille: choisissez entre les soirées du 5 au 8 décembre, préparez une visite gratuite adaptée aux enfants et anticipez les transports et la foule."
category: evenements
location:
  city: Lyon
  department: Rhône
  region: Auvergne-Rhône-Alpes
keywords:
  - Fête des Lumières Lyon 2026 famille
  - Fête des Lumières Lyon 2026 horaires enfants
  - Fête des Lumières Lyon poussette parcours
sources:
  - title: Fête des Lumières - dates et horaires 2026
    url: https://www.fetedeslumieres.lyon.fr/fr/page/horaires-et-dates-fete-des-lumieres-2026
  - title: Fête des Lumières - foire aux questions
    url: https://www.fetedeslumieres.lyon.fr/fr/faq/foire-aux-questions
  - title: Fête des Lumières - handi-accueil
    url: https://www.fetedeslumieres.lyon.fr/fr/page/handi-accueil
  - title: Fête des Lumières - se déplacer dans Lyon
    url: https://www.fetedeslumieres.lyon.fr/fr/page/se-deplacer-dans-lyon
  - title: Office de tourisme de Lyon - Fête des Lumières
    url: https://www.visiterlyon.com/sortir/l-agenda/fetes/fete-des-lumieres
  - title: ibis Styles Lyon Centre Gare Part Dieu - chambres et localisation
    url: https://all.accor.com/hotel/7373/index.fr.shtml
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours
  decision: Décider laquelle des quatre soirées choisir avec ses enfants, à quelle heure venir, et comment organiser une courte découverte gratuite et praticable plutôt qu'un circuit épuisant, puis sélectionner les installations réelles lorsque le programme officiel 2026 sera publié.
  affiliationPotential: "L'événement est gratuit, sans billet à proposer. Hébergement pertinent vérifié pour les familles arrivant en train: ibis Styles Lyon Centre - Gare Part Dieu sur Booking.com (https://www.booking.com/hotel/fr/all-seasons-lyon-part-dieu.fr.html), 54 rue de la Villette, à proximité immédiate de la gare Part-Dieu, chambres familiales, notamment configuration avec canapé-lit. Comparer capacité selon âge et nombre d'enfants, tarif et disponibilité du 5 au 8 décembre, caution/empreinte de carte et conditions d'annulation; rejoindre les œuvres en transports selon les restrictions 2026."
  gsc:
    retrievedAt: 2026-10-19T04:30:00.000Z
    dataThrough: 2026-10-16
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Fête des Lumières - horaires et dates officielles 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-08
---

La **Fête des Lumières 2026 à Lyon** se déroule **du samedi 5 au mardi 8 décembre**. Pendant quatre soirées, des projections et installations lumineuses transforment des espaces publics de la ville. **La visite des œuvres est gratuite**, mais, avec des enfants, il vaut mieux prévoir une sortie courte que chercher à tout voir.

La première décision est la date: **le dimanche 6 décembre commence une heure plus tôt** que les trois autres soirées. C'est une option intéressante si vos enfants se couchent tôt. Le programme précis des œuvres 2026 est annoncé pour début novembre: les lieux et circuits des années précédentes ne doivent pas servir de parcours définitif.

## Dates et horaires: quel soir choisir?

Les [horaires officiels 2026](https://www.fetedeslumieres.lyon.fr/fr/page/horaires-et-dates-fete-des-lumieres-2026) sont les suivants, sauf indication particulière sur la fiche d'une œuvre:

- **Samedi 5 décembre:** 19h à 23h.
- **Dimanche 6 décembre:** 18h à 22h.
- **Lundi 7 décembre:** 19h à 23h.
- **Mardi 8 décembre:** 19h à 23h.

**Avec de jeunes enfants, le dimanche permet de commencer à 18h** et de rentrer sans attendre la fin de la soirée. Le samedi convient davantage à une famille disponible le week-end, mais il faut anticiper une forte fréquentation possible: la fête attire habituellement une foule considérable. Les lundis et mardis peuvent convenir aux familles déjà sur place; **ne supposez pas qu'ils seront peu fréquentés**, surtout le 8 décembre, date traditionnelle des lumignons.

## Un parcours familial: une ou deux œuvres plutôt que toute la ville

Le bon parcours dépendra des **installations réellement programmées en 2026**. Le [site officiel de la Fête des Lumières](https://www.fetedeslumieres.lyon.fr/fr/faq/foire-aux-questions) annonce son programme numérique **début novembre** et une version papier à partir de **fin novembre**. À cette date, repérez deux œuvres proches l'une de l'autre, un accès en transports et un trajet de retour simple.

Pour une première visite avec des enfants, prévoyez **environ une heure à une heure et demie sur place** comme objectif souple, et non comme durée officielle du parcours. Les temps de marche, les attentes et la densité de la foule peuvent allonger nettement cette sortie. Mieux vaut voir une seule installation dans de bonnes conditions que traverser plusieurs quartiers avec des enfants fatigués.

Privilégiez, une fois la carte publiée, les œuvres accessibles depuis un même secteur et évitez les détours imposant de nombreux franchissements de ponts ou de longues correspondances. Certaines projections sont accompagnées de sons puissants ou d'effets visuels intenses: vérifiez la description de chaque œuvre si un enfant y est sensible.

## Poussette, handicap et foule: les précautions utiles

Une poussette peut être pratique pour un petit enfant, mais plus difficile à manœuvrer dans les rues très fréquentées. Pour un bébé, un porte-bébé peut être une solution plus souple, selon vos habitudes et votre confort. Habillez les enfants chaudement et prévoyez une protection contre la pluie, des chaussures adaptées, ainsi qu'un point de rendez-vous simple si le groupe se sépare.

L'organisateur prévoit des **aménagements pour les visiteurs en situation de handicap**, notamment des dispositifs d'accès et des parcours adaptés sur présentation de la carte mobilité inclusion. Les informations détaillées pour 2026 doivent être publiées **à partir du 4 novembre** sur la [page officielle handi-accueil](https://www.fetedeslumieres.lyon.fr/fr/page/handi-accueil). Consultez-la pour vérifier les accès réellement disponibles et ne déduisez pas qu'un chemin adapté à une personne à mobilité réduite convient automatiquement à toutes les poussettes.

## Venir en train ou en voiture: attention au périmètre piéton

Les gares **Lyon Part-Dieu** et **Lyon-Perrache** permettent de venir sans voiture. Pour rejoindre les œuvres, utilisez le réseau TCL puis marchez sur un trajet compatible avec l'âge des enfants.

Pendant la fête, un **périmètre piéton** est habituellement instauré dans l'hypercentre, avec des restrictions de circulation et d'accès à certains parkings. La [page officielle des déplacements](https://www.fetedeslumieres.lyon.fr/fr/page/se-deplacer-dans-lyon) détaille ces dispositifs, mais certains horaires, itinéraires et tarifs qui y figurent peuvent encore correspondre à une édition précédente: **vérifiez les informations spécifiquement confirmées pour décembre 2026** avant de choisir un parking, une station de métro ou un dernier train.

Si vous venez en voiture, évitez de compter sur une place au cœur du périmètre de fête. Si vous venez en train, gardez une marge avant le départ: les temps de marche et d'accès aux stations peuvent augmenter avec l'affluence.

## Gratuité de la fête: quelles dépenses prévoir?

**Aucun billet général n'est nécessaire pour admirer les œuvres de la Fête des Lumières.** Le budget familial peut donc se limiter aux transports et à une collation, si vous habitez près de Lyon. Pour une famille venue de plus loin, ajoutez les billets de train, le stationnement éventuel ou l'hébergement.

La traditionnelle opération solidaire des **Lumignons du Cœur** est distincte de l'accès gratuit aux installations: y participer est un choix, pas une condition pour assister à la fête.

## Dormir près de la gare pour éviter un retour tardif

Si vous venez en train avec des enfants, passer une nuit sur place peut éviter un long trajet après les illuminations. L'[**ibis Styles Lyon Centre - Gare Part Dieu sur Booking.com**](https://www.booking.com/hotel/fr/all-seasons-lyon-part-dieu.fr.html), au **54 rue de la Villette**, se trouve près de la gare Part-Dieu. L'hôtel présente notamment une **junior suite pouvant accueillir jusqu'à quatre personnes**, avec un lit double et un canapé-lit double; une chambre supérieure est prévue pour trois personnes. Cela ne garantit ni leur disponibilité ni leur prix aux dates de la fête.

Avant de réserver, indiquez **l'âge de chaque enfant**, vérifiez la capacité réelle de la chambre, les conditions d'annulation, les éventuels frais ou garanties à l'arrivée et le prix final. L'hôtel est pratique pour la gare, **pas nécessairement à proximité immédiate des œuvres**: leur emplacement 2026 reste à consulter sur la carte officielle.

Pour arrêter votre programme, revenez au [calendrier et aux informations de l'organisateur](https://www.fetedeslumieres.lyon.fr/fr/faq/foire-aux-questions) dès la publication des œuvres en novembre. Le choix du secteur, des accès et de l'heure de retour sera alors plus fiable qu'un itinéraire préparé à partir de l'édition 2025.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/vie-pratique/location-de-voiture-a-lyon-avec-des-enfants-ce-qu-il-faut-verifier-avant-de-reserver/ | Location de voiture à Lyon avec des enfants: ce qu'il faut vérifier avant de réserver | vie-pratique | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | Toussaint 2026 au musée des Confluences: cinq rendez-vous pour les enfants | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/activites/atelier-des-lumieres-avec-un-enfant-quel-programme-choisir-et-peut-on-venir-avec-une-poussette/ | Atelier des Lumières avec un enfant: quel programme choisir et peut-on venir avec une poussette ? | activites | Paris, Paris, Île-de-France
- /articles/evenements/lumieres-de-noel-a-montbeliard-2026-quel-jour-venir-avec-des-enfants/ | Lumières de Noël à Montbéliard 2026: quel jour venir avec des enfants? | evenements | Montbéliard, Doubs, Bourgogne-Franche-Comté
- /articles/evenements/castagnade-de-joyeuse-2026-avec-des-enfants-venir-samedi-ou-dimanche/ | Castagnade de Joyeuse 2026 avec des enfants: venir samedi ou dimanche? | evenements | Joyeuse, Ardèche, Auvergne-Rhône-Alpes
- /articles/sorties/chateau-de-compiegne-en-famille-que-visiter-et-comment-organiser-la-journee/ | Château de Compiègne en famille: que visiter et comment organiser la journée? | sorties | Compiègne, Oise, Hauts-de-France
- /articles/activites/parc-de-courzieu-en-famille-tarifs-horaires-et-conseils-pour-la-visite/ | Parc de Courzieu en famille: tarifs, horaires et conseils pour la visite | activites | Courzieu, Rhône, Auvergne-Rhône-Alpes
- /articles/sorties/parc-family-aventure-en-haute-loire-tarifs-parcours-et-conseils-en-famille/ | Parc Family Aventure La Séauve: tarifs 2026 et parcours dès 3 ans | sorties | La Séauve-sur-Semène, Haute-Loire, Auvergne-Rhône-Alpes
- /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | Festival Lumière 2026: Laurel & Hardy en famille le 17 octobre à Lyon | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/parentalite/cafe-papote-a-lyon-4e-ou-echanger-gratuitement-avec-d-autres-parents/ | Café Papote à Lyon 4e: où échanger gratuitement avec d'autres parents | parentalite | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/maison/decheteries-mobiles-a-lyon-que-peut-on-deposer-et-quand-preferer-une-decheterie-fixe/ | Déchèteries mobiles à Lyon: que peut-on déposer et quand préférer une déchèterie fixe? | maison | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/sorties/aquarium-de-lyon-en-famille-nouveautes-ocean-360-tarifs-et-visite/ | Aquarium de Lyon en famille: nouveautés Océan 360°, tarifs et visite | sorties | La Mulatière, Rhône, Auvergne-Rhône-Alpes
- /articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/ | Mini World Lyon en famille: tarifs, durée et conseils pour la visite | bons-plans | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/cuisine/a-claveisolles-decouvrir-comment-le-lait-de-chevre-devient-fromage-avec-les-enfants/ | À Claveisolles, découvrir comment le lait de chèvre devient fromage avec les enfants | cuisine | Claveisolles, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | Marché de Noël de Mulhouse 2026 en famille: horaires, étoffe et animations | evenements | Mulhouse, Haut-Rhin, Grand Est
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | bd BOUM 2026 à Blois en famille: ateliers, expositions et cinéma | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | Foire du livre de Brive 2026 en famille: dates, auteurs jeunesse et conseils de visite | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine
- /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | Halloween 2026 à la Mer de Sable: spectacles, frissons et billets en famille | evenements | Ermenonville, Oise, Hauts-de-France
- /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | Toussaint 2026 à Nausicaá: ateliers en journée et nocturne d’Halloween | evenements | Boulogne-sur-Mer, Pas-de-Calais, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | 2026-10-18T19:49:09.191Z
- opportunity | /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | 2026-10-10T15:40:28.185Z
- opportunity | /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | 2026-10-18T16:46:58.413Z
- opportunity | /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | 2026-10-18T12:12:00.071Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | 2026-10-19T09:37:22.517Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | 2026-10-18T08:44:05.495Z
- opportunity | /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | 2026-10-15T17:42:32.693Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
