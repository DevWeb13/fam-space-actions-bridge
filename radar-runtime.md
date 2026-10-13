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
title: "Monument jeu d'enfant 2026 à Saint-Denis: l'atelier Dagobert du 17 octobre"
subtitle: "Une visite autour du tombeau royal suivie d'une marionnette à fabriquer: âges, billets et horaires pour les familles."
summary: Samedi 17 octobre 2026, la basilique de Saint-Denis propose une visite-atelier autour du roi Dagobert. Groupes 4-7 ans et 8-12 ans annoncés, tarifs, réservation et fermeture exceptionnelle à connaître.
category: evenements
location:
  city: Saint-Denis
  department: Seine-Saint-Denis
  region: Île-de-France
keywords:
  - Monument jeu d'enfant basilique Saint-Denis 2026
  - atelier Dagobert Saint-Denis 17 octobre
  - marionnette roi Dagobert enfant
  - réserver Monument jeu d'enfant Saint-Denis
sources:
  - title: Basilique cathédrale Saint-Denis - Monument jeu d'enfant et réservations
    url: https://www.saint-denis-basilique.fr/agenda/monument-jeu-d-enfant
  - title: Basilique cathédrale Saint-Denis - Informations pratiques et fermetures exceptionnelles
    url: https://www.saint-denis-basilique.fr/visiter/informations-pratiques
  - title: Basilique cathédrale Saint-Denis - Visites et services aux familles
    url: https://www.saint-denis-basilique.fr/visiter/en-famille
  - title: Basilique cathédrale Saint-Denis - Offre adaptée aux visiteurs en mobilité réduite
    url: https://www.saint-denis-basilique.fr/visiter/visiteurs-en-situation-de-handicap/offre-adaptee-aux-visiteurs-en-mobilite-reduite
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille
  decision: Choisir le départ adapté à l'âge de son enfant et réserver la visite-atelier du 17 octobre, en sachant ce que couvre le billet et comment organiser une éventuelle visite libre avant l'activité.
  affiliationPotential: "La visite-atelier du 17 octobre doit être réservée dans la billetterie officielle spécifique. Tiqets propose un billet pour la visite libre de la basilique, mais n'annonce pas l'atelier Dagobert: ne pas substituer ce billet à la réservation de l'événement ni proposer deux achats concurrents. Pour une famille venue séjourner à Paris, un hébergement à Saint-Denis est disponible sur Booking.com, mais le guide Fam Space existant sur Pleyel ou Basilique traite déjà ce choix; une simple continuation interne suffit."
  gsc:
    retrievedAt: 2026-10-13T05:39:08.168Z
    dataThrough: 2026-10-10
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Basilique cathédrale Saint-Denis - Monument jeu d'enfant »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-10-17
---

Le **samedi 17 octobre 2026**, la basilique cathédrale Saint-Denis accueille les familles pour « Le fabuleux roi Dagobert ! », une visite-atelier organisée dans le cadre de **Monument jeu d'enfant**. Les enfants découvrent l'histoire et les légendes du roi devant son tombeau, puis fabriquent une **marionnette à gaine** qu'ils imaginent eux-mêmes. Le rendez-vous est annoncé à **14h45**, pour une durée d'environ **deux heures**.

L'activité s'adresse aux enfants à partir de 4 ans. Mais avant de réserver, une différence entre les tranches d'âge affichées dans le programme et la billetterie mérite d'être éclaircie.

## Quel groupe choisir selon l'âge de l'enfant?

La [présentation officielle de l'atelier Dagobert](https://www.saint-denis-basilique.fr/agenda/monument-jeu-d-enfant) annonce **deux départs distincts**: l'un pour les **4-7 ans**, l'autre pour les **8-12 ans**. Les parents des plus petits sont sollicités pour les aider pendant la création de la marionnette. La visite mêle récit historique et activité manuelle, plutôt qu'une conférence ou un simple atelier de bricolage.

Attention toutefois: sur cette même page, la ligne de réservation du second départ indique **« 8 à 10 ans »**, tandis que le programme dit **« 8-12 ans »**. Pour un enfant de 11 ou 12 ans, ne présumez donc pas que l'inscription est possible dans le groupe affiché. Le service des publics peut clarifier ce point au **06 15 59 06 84** ou à **sylvie.koch@monuments-nationaux.fr**. La page ne permet pas non plus de garantir la disponibilité des places pour les deux groupes.

## Réserver la visite-atelier: quel billet faut-il prendre?

L'organisateur annonce **17 € pour un adulte** et **la gratuité pour les moins de 26 ans** dans le cadre de cet événement. La réservation du groupe 4-7 ans est accessible depuis la [page officielle Monument jeu d'enfant](https://www.saint-denis-basilique.fr/agenda/monument-jeu-d-enfant). La ligne du groupe plus âgé est également affichée, mais son accès à la vente doit être vérifié directement sur cette page, ainsi que le nombre de places et le créneau retenu.

**N'achetez pas à la place un simple billet d'entrée à la basilique** en pensant qu'il comprend automatiquement la visite-atelier: ce sont deux offres différentes. Le billet spécifique à Monument jeu d'enfant comprend, en plus de l'activité, **l'accès à la nécropole royale et à la Fabrique de la flèche**. Inutile de payer une seconde entrée pour ces espaces si vous avez déjà ce billet.

## Peut-on visiter la nécropole avant l'atelier?

Oui, et c'est même ce que recommande la basilique. Le samedi 17 octobre, l'accès ordinaire à la nécropole royale est exceptionnellement ouvert **de 10h à 15h30**, alors que l'atelier commence à 14h45 et doit durer environ deux heures. Cette fermeture anticipée concerne les visites libres: elle ne signifie pas, à elle seule, que l'atelier prévu au-delà de 15h30 est annulé.

Si vous souhaitez voir les tombeaux des rois et reines à votre rythme, arrivez **avant 14h45** et gardez suffisamment de temps pour cette visite. Les horaires spéciaux et les éventuels changements figurent dans les [informations pratiques officielles](https://www.saint-denis-basilique.fr/visiter/informations-pratiques). Le dimanche 18 octobre, la nécropole est annoncée fermée toute la journée.

## Venir avec une poussette ou un enfant à mobilité réduite

La basilique se trouve au **1, rue de la Légion-d'Honneur, 93200 Saint-Denis**, à environ 100 mètres du métro **ligne 13, station Basilique de Saint-Denis**. Cette station n'a **pas d'ascenseur**, un point important avec une poussette lourde ou un fauteuil.

Sur place, les familles disposent de **toilettes et d'une table à langer**, mais il n'y a **ni consigne ni vestiaire**. Les bagages autorisés ne doivent pas dépasser **40 × 20 × 20 cm** et il n'est pas permis de manger dans le monument. Pour une pause, le [site de la basilique présente ses services aux familles](https://www.saint-denis-basilique.fr/visiter/en-famille), dont le Café de la Flèche.

Pour les personnes à mobilité réduite, la [fiche d'accessibilité](https://www.saint-denis-basilique.fr/visiter/visiteurs-en-situation-de-handicap/offre-adaptee-aux-visiteurs-en-mobilite-reduite) décrit une **rampe d'entrée non normée**, une assistance possible dans certains espaces et un élévateur pour la crypte. Les adaptations mentionnées pour les visites et ateliers ne garantissent pas automatiquement les mêmes conditions pour ce rendez-vous: contactez le monument si votre famille a des besoins précis.

## Et pour prolonger la sortie?

La basilique constitue une sortie particulière parmi les animations du week-end national. Si vous hésitez avec d'autres sites, notre guide [Monument jeu d'enfant 2026: choisir une visite selon l'âge](/articles/evenements/monument-jeu-d-enfant-2026-comment-choisir-une-visite-adaptee-a-l-age-des-enfants/) permet de comparer les formats sans confondre les réservations.

Pour les familles qui viennent de loin et souhaitent passer un week-end près de Paris, le choix d'un hébergement dépend surtout des déplacements prévus: notre article [Dormir à Saint-Denis avec des enfants: Pleyel ou Basilique?](/articles/voyages/dormir-a-saint-denis-pour-visiter-paris-avec-des-enfants-pleyel-ou-basilique/) explique les différences entre les quartiers et propose une piste d'hébergement. Le séjour reste indépendant de la réservation de l'atelier.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/voyages/dormir-a-saint-denis-pour-visiter-paris-avec-des-enfants-pleyel-ou-basilique/ | Dormir à Saint-Denis pour visiter Paris avec des enfants: Pleyel ou Basilique? | voyages | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | Monument jeu d'enfant 2026 au château de Vincennes: quel atelier choisir ? | evenements | Vincennes, Val-de-Marne, Île-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | Monument Jeu d'enfant 2026 à Azay-le-Rideau: animaux cachés et contes en famille | evenements | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/monument-jeu-d-enfant-2026-comment-choisir-une-visite-adaptee-a-l-age-des-enfants/ | Monument jeu d'enfant 2026: comment choisir une visite adaptée à l'âge des enfants | evenements
- /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | Monument jeu d’enfant à Aigues-Mortes: mini-sacre et escape game les 17 et 18 octobre 2026 | evenements | Aigues-Mortes, Gard, Occitanie
- /articles/cuisine/maison-du-coco-a-saint-leu-faut-il-reserver-l-atelier-ou-visiter-seulement-le-domaine/ | Maison du Coco à Saint-Leu: faut-il réserver l'atelier ou visiter seulement le domaine? | cuisine | Saint-Leu, La Réunion, La Réunion
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | Monument Jeu d’Enfant au château d’Angers: dragons et ateliers le 17 octobre 2026 | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/sortie-champignons-a-versigny-faut-il-reserver-avec-des-enfants/ | Sortie champignons à Versigny: faut-il réserver avec des enfants? | evenements | Versigny, Aisne, Hauts-de-France
- /articles/maison/ameliorer-son-logement-a-la-reunion-qui-peut-demander-l-aide-departementale/ | Améliorer son logement à La Réunion: qui peut demander l'aide départementale? | maison | Saint-Denis, La Réunion, La Réunion
- /articles/sorties/musee-de-l-air-et-de-l-espace-a-la-toussaint-2026-quelle-activite-choisir-selon-l-age/ | Toussaint 2026 au Musée de l'Air et de l'Espace: quelle activité choisir avec un enfant? | sorties | Le Bourget, Seine-Saint-Denis, Île-de-France
- /articles/evenements/ateliers-au-jardin-de-la-pmi-a-bobigny-quelles-dates-choisir-cet-automne/ | Ateliers au jardin de la PMI à Bobigny: quelles dates choisir cet automne? | evenements | Bobigny, Seine-Saint-Denis, Île-de-France
- /articles/sorties/musee-de-l-air-et-de-l-espace-du-bourget-en-famille-tarifs-avions-et-activites/ | Musée de l'Air et de l'Espace du Bourget en famille: tarifs, avions et activités | sorties | Le Bourget, Seine-Saint-Denis, Île-de-France
- /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | Halloween 2026 au Parc Spirou: billets, nocturnes Naruto et maison hantée | evenements | Monteux, Vaucluse, Provence-Alpes-Côte d'Azur
- /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | Halloween 2026 au château de Couches: atelier citrouille et jeu Mystères & Sortilèges | evenements | Couches, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | Halloween 2026 à la Tour de l'Horloge de Guînes: visites, contes et nocturne | evenements | Guînes, Pas-de-Calais, Hauts-de-France
- /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | Famille en fête 2026 en Gironde: ateliers gratuits pour les 0-6 ans | evenements | Saint-Loubès, Gironde, Nouvelle-Aquitaine
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | Nuit des Châteaux 2026 à Tanlay: visites aux bougies les 16 et 17 octobre | evenements | Tanlay, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | Festival Lumière 2026: Laurel & Hardy en famille le 17 octobre à Lyon | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-au-chateau-de-grignan-dates-tarifs-et-visite-en-famille/ | Noël 2026 au château de Grignan: dates, tarifs et visite en famille | evenements | Grignan, Drôme, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | 2026-10-12T08:10:30.674Z
- opportunity | /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | 2026-10-10T15:40:28.185Z
- opportunity | /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | 2026-10-12T10:40:26.563Z
- opportunity | /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | 2026-10-12T14:00:32.202Z
- opportunity | /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | 2026-10-12T17:34:53.933Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | 2026-10-10T17:38:43.806Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | 2026-10-11T16:33:21.125Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | 2026-10-10T08:38:56.921Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | 2026-10-09T18:35:04.031Z
- opportunity | /articles/sorties/musee-de-l-air-et-de-l-espace-a-la-toussaint-2026-quelle-activite-choisir-selon-l-age/ | 2026-10-05T20:22:10.692Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
