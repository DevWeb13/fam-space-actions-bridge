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
title: "Paris avec une poussette : métro, RER, bus ou tram, que choisir ?"
subtitle: Repérer les accès sans escaliers, contrôler les ascenseurs et prévoir un trajet de repli
summary: À Paris, le meilleur transport avec une poussette dépend surtout des accès aux stations et de la possibilité de la plier. Voici comment comparer métro, RER, bus et tram et vérifier son parcours avant de partir.
category: voyages
location:
  city: Paris
  department: Paris
  region: Île-de-France
keywords:
  - métro Paris poussette ascenseur
  - RER Paris avec poussette
  - bus Paris poussette dépliée
  - itinéraire accessible poussette Paris
sources:
  - title: RATP — Quelles gares et stations sont accessibles ? (27 août 2026)
    url: https://www.ratp.fr/aide-contact/questions/preparer-mon-trajet/information-trafic/gares-stations-accessibles
  - title: Île-de-France Mobilités — Équipements et services accessibles sur un trajet (20 juillet 2026)
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/s-informer-sur-l-accessibilite/je-souhaite-connaitre-les-equipements-et-services-accessibles-sur-mes-traj
  - title: RATP — État des ascenseurs (27 août 2026)
    url: https://www.ratp.fr/aide-contact/questions/preparer-mon-trajet/information-trafic/etat-ascenseurs
  - title: RATP — État des ascenseurs par ligne
    url: https://www.ratp.fr/services/etat-equipement
  - title: RATP — Que puis-je emporter comme bagages ? (28 août 2026)
    url: https://www.ratp.fr/aide-contact/questions/preparer-mon-trajet/voyage-en-regle/emporter-bagages
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir
  decision: Choisir un trajet praticable avec une poussette selon les stations, les correspondances et la possibilité ou non de la plier, puis savoir quoi vérifier juste avant le départ.
  affiliationPotential: "Citadines Bastille Gare de Lyon Paris vérifié sur Booking.com : appartements familiaux avec cuisine et ascenseur dans la résidence, à environ 10 minutes à pied de Gare de Lyon ; https://www.booking.com/hotel/fr/citadines-paris-bastille-nation.fr.html . Vérifier l'itinéraire piéton, les accès de gare et la disponibilité avant réservation."
  gsc:
    retrievedAt: 2026-10-28T03:28:35+01:00
    dataThrough: 2026-10-25
    signal: strong_page
    sourceUrl: /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/
    basis: "La page « Transports à Paris avec des enfants: quel titre choisir pour payer juste? » conserve 2409 impressions sur la semaine récente, avec une position moyenne de 8.838 et 150.6 % de son pic."
---

Avec une poussette, le trajet le plus rapide sur le plan du métro n'est pas toujours le plus simple à réaliser. Une station sans ascenseur, une correspondance avec des escaliers ou un équipement en panne peuvent obliger à porter l'enfant et la poussette. Avant de choisir entre métro, RER, bus et tramway à Paris, posez-vous une question : **pouvez-vous plier et porter la poussette, ou faut-il un parcours sans marches de bout en bout ?**

## Métro : la ligne 14 est un bon point de départ, pas tout le réseau

La [RATP précise que seule la ligne 14 du métro est accessible en autonomie](https://www.ratp.fr/aide-contact/questions/preparer-mon-trajet/information-trafic/gares-stations-accessibles) sur l'ensemble de son parcours. Les autres lignes comportent encore de nombreux accès par escaliers : une station équipée d'un escalator ne garantit pas un parcours utilisable avec une poussette qu'on ne peut pas porter.

Si vous pouvez plier la poussette, d'autres lignes peuvent convenir, à condition de pouvoir gérer l'enfant, les sacs et les marches. Si vous ne pouvez pas la porter, ne choisissez pas un itinéraire sur la seule présence d'une station de métro proche : contrôlez les accès précis et chaque correspondance. Même sur la ligne 14, un ascenseur momentanément hors service peut changer la donne.

## RER, tramway ou bus : souvent plus pratiques, sous conditions

Une grande partie des gares du RER A et du RER B disposent d'aménagements d'accessibilité, mais **pas toutes**. Vérifiez la gare de départ, la gare d'arrivée et les correspondances, sans supposer qu'une ligne entière offre un accès sans marches.

Le tramway peut être une bonne alternative lorsqu'il dessert directement votre destination : le réseau est conçu pour être accessible, mais il faut toujours regarder l'approche de l'arrêt et les éventuelles perturbations.

Le bus évite souvent les longs couloirs souterrains et les escaliers. Il peut toutefois être bondé, et l'emplacement pour une poussette ouverte n'est jamais garanti. Un trajet un peu plus long, mais direct en bus ou en tram, peut être préférable à plusieurs changements de métro.

## Peut-on garder la poussette dépliée dans le bus ?

La [règle RATP](https://www.ratp.fr/aide-contact/questions/preparer-mon-trajet/voyage-en-regle/emporter-bagages) accepte les poussettes, de préférence pliées. Dans les bus standards et articulés, **deux poussettes dépliées au maximum** sont admises ; dans les midibus et minibus, **une seule**. Les poussettes pliées montent par la porte avant.

Avec une poussette dépliée, l'accès peut se faire par la porte centrale **avec l'accord du conducteur et après validation du titre de transport**. Si les emplacements sont déjà occupés ou si la circulation dans le véhicule est gênée, prévoyez de plier la poussette lorsque c'est possible ou d'attendre le bus suivant. Gardez l'enfant en sécurité et veillez à ne pas bloquer les passages.

## Vérifier un trajet sans marches avant de partir

Sur l'application ou le site [Île-de-France Mobilités](https://www.iledefrance-mobilites.fr/aide-et-contacts/s-informer-sur-l-accessibilite/je-souhaite-connaitre-les-equipements-et-services-accessibles-sur-mes-traj), recherchez votre départ et votre destination, ouvrez l'itinéraire envisagé, puis choisissez **« Accéder aux détails sur l'accessibilité »**. Vous y trouverez les informations sur les équipements et l'état des ascenseurs aux différentes étapes. La rubrique « Gares, stations, arrêts » permet également d'examiner une station en particulier.

Le jour du déplacement, consultez aussi l'[état des ascenseurs RATP par ligne](https://www.ratp.fr/services/etat-equipement) pour le métro et les RER A et B. Contrôlez les équipements **au départ, à l'arrivée et aux correspondances** : un ascenseur fonctionnel à l'entrée ne suffit pas si la sortie est inaccessible.

Comparez ensuite le parcours complet, et non seulement le temps dans le véhicule : marche jusqu'à l'arrêt, entrée dans la station, changement de quai, sortie et dernière portion à pied. Pour une poussette impossible à porter, conservez une solution de repli en surface, par exemple un bus ou un tram desservant le même secteur. Évitez de compter sur l'aide spontanée d'autres voyageurs pour franchir les escaliers.

## Un séjour à Paris avec bébé : limiter les correspondances dès le logement

Pour quelques jours sur place, choisir un hébergement avec cuisine peut faciliter les repas et les biberons. Le [Citadines Bastille Gare de Lyon Paris, proposé sur Booking.com](https://www.booking.com/hotel/fr/citadines-paris-bastille-nation.fr.html), dispose de studios et appartements avec cuisine équipée, notamment d'un micro-ondes, et d'un ascenseur dans la résidence. L'établissement indique se trouver à environ dix minutes à pied de la gare de Lyon. Vérifiez la capacité du logement, les équipements pour bébé, les disponibilités et le chemin piéton avant de réserver : **l'ascenseur de l'hôtel ne garantit pas celui de la gare ou du métro voisin**.

Pour choisir ensuite le bon ticket ou forfait selon l'âge des enfants et le nombre de déplacements, consultez notre guide [Transports à Paris avec des enfants : quel titre choisir pour payer juste ?](https://www.fam-space.fr/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/). Si vous arrivez en avion avec une poussette et des valises, les trajets sont détaillés séparément pour [Orly](https://www.fam-space.fr/articles/voyages/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi/) et [Paris-Charles-de-Gaulle](https://www.fam-space.fr/articles/voyages/rejoindre-l-aeroport-paris-cdg-en-famille-rer-b-bus-9517-ou-taxi/).

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/atelier-des-lumieres-avec-un-enfant-quel-programme-choisir-et-peut-on-venir-avec-une-poussette/ | Atelier des Lumières avec un enfant: quel programme choisir et peut-on venir avec une poussette ? | activites | Paris, Paris, Île-de-France
- /articles/evenements/salon-du-chocolat-paris-2026-avec-des-enfants-quel-billet-choisir-et-quels-ateliers-reserver/ | Salon du Chocolat Paris 2026 avec des enfants: quel billet choisir et quels ateliers réserver | evenements | Paris, Paris, Île-de-France
- /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/ | Transports à Paris avec des enfants: quel titre choisir pour payer juste? | voyages | Paris, Paris, Île-de-France
- /articles/evenements/mon-premier-festival-2026-paris-film-age/ | Mon Premier Festival 2026 à Paris: quel film choisir selon l'âge? | evenements | Paris, Paris, Île-de-France
- /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | Féeries de Noël 2026 à Paris: parcours lumineux, billets et patinoire en famille | evenements | Paris, Paris, Île-de-France
- /articles/voyages/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi/ | Rejoindre Orly en famille: métro 14, Orlyval ou taxi en 2026 | voyages | Orly, Val-de-Marne, Île-de-France
- /articles/activites/le-vaisseau-a-strasbourg-quel-billet-choisir-pour-une-sortie-avec-des-enfants/ | Le Vaisseau à Strasbourg: quel billet choisir pour une sortie avec des enfants | activites | Strasbourg, Bas-Rhin, Grand Est
- /articles/voyages/rejoindre-l-aeroport-paris-cdg-en-famille-rer-b-bus-9517-ou-taxi/ | Aéroport CDG en famille: RER B, bus 9517 ou taxi en 2026? | voyages | Roissy-en-France, Val-d'Oise, Île-de-France
- /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | Odyssée Lumineuse 2026-2027 à Paris: billets, dates et visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/bons-plans/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/ | Navigo Liberté+ en famille: tarifs enfants et choix du passe en 2026 | bons-plans | Paris, Paris, Île-de-France
- /articles/sorties/l-aquarium-tropical-de-la-porte-doree-en-famille/ | L’Aquarium tropical de la Porte Dorée en famille | sorties | Paris, Paris, Île-de-France
- /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | Créations & savoir-faire 2026 à Paris en famille: billets, ateliers et dates | evenements | Paris, Paris, Île-de-France
- /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | Salon du Cheval de Paris 2026 en famille: animations, jumping et billets | evenements | Paris, Paris, Île-de-France
- /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | Métamorphoses 2026 au quai Branly: séances gratuites et films par âge | evenements | Paris, Paris, Île-de-France
- /articles/maison/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager/ | À Paris, où donner ou déposer meubles, jouets et électroménager ? | maison | Paris, Paris, Île-de-France
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | Día de los Muertos 2026 au Jardin d’Acclimatation: programme, billets et tailles | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-au-musee-carnavalet-quelle-activite-choisir-selon-l-age/ | Vacances de la Toussaint 2026 au musée Carnavalet: activités en famille dès 4 ans | sorties | Paris, Paris, Île-de-France
- /articles/voyages/iles-de-lerins-en-famille-quelle-ile-choisir-et-comment-organiser-la-traversee/ | Îles de Lérins en famille: quelle île choisir et comment organiser la traversée ? | voyages | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/voyages/rambouillet-en-famille-sans-voiture-un-week-end-entre-ferme-chateau-et-trains-miniatures/ | Rambouillet en famille sans voiture: un week-end entre ferme, château et trains miniatures | voyages | Rambouillet, Yvelines, Île-de-France
- /articles/voyages/collonges-la-rouge-turenne-et-curemonte-en-famille-quel-circuit-choisir/ | Collonges-la-Rouge, Turenne et Curemonte en famille: quel circuit choisir ? | voyages | Collonges-la-Rouge, Corrèze, Nouvelle-Aquitaine
- /articles/voyages/chambery-en-famille-un-week-end-entre-elephants-et-sciences/ | Chambéry en famille: un week-end entre éléphants et sciences | voyages | Chambéry, Savoie, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/voyages/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi/ | 2026-10-13T15:33:13.378Z
- opportunity | /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | 2026-10-23T06:21:12.326Z
- opportunity | /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | 2026-10-08T14:56:52.034Z
- opportunity | /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | 2026-10-27T13:28:21.076Z
- opportunity | /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | 2026-10-18T04:19:39.869Z
- opportunity | /articles/evenements/mon-premier-festival-2026-paris-film-age/ | 2026-10-03T06:21:55.257Z
- opportunity | /articles/bons-plans/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/ | 2026-10-25T10:33:30.080Z
- opportunity | /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | 2026-10-09T14:37:47.734Z
- opportunity | /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | 2026-10-26T15:30:14.299Z
- opportunity | /articles/voyages/rejoindre-l-aeroport-paris-cdg-en-famille-rer-b-bus-9517-ou-taxi/ | 2026-10-15T09:28:56.552Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
