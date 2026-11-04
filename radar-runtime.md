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
title: "Atelier Scratch gratuit à Paris : créer un jeu vidéo le 7 novembre 2026"
subtitle: Trois heures pour découvrir le code à la médiathèque Hélène Berr, de 8 à 13 ans
summary: "Le samedi 7 novembre 2026, la médiathèque Hélène Berr propose aux 8-13 ans un atelier Scratch gratuit de 14 h à 17 h. Réservation obligatoire : voici ce qu'il faut vérifier avant de venir."
category: activites
location:
  city: Paris
  department: Paris
  region: Île-de-France
keywords:
  - atelier Scratch Paris 7 novembre 2026
  - atelier programmation gratuit enfant Paris
  - médiathèque Hélène Berr jeu vidéo
sources:
  - title: "Ville de Paris — Atelier Scratch : Jeu vidéo"
    url: https://www.paris.fr/evenements/atelier-scratch-jeu-video-126009
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: atelier-scratch-gratuit-a-paris-le-7-novembre-2026-programmer-un-jeu-video-des-8-ans
  decision: Savoir si l'atelier convient à son enfant de 8 à 13 ans, comment réserver une place gratuite et organiser le déplacement pour le samedi 7 novembre.
  affiliationPotential: Aucune affiliation naturelle pour cet atelier gratuit local ; ne pas ajouter d'hébergement artificiel pour une séance de trois heures.
  gsc:
    retrievedAt: 2026-11-04T03:31:09+01:00
    dataThrough: 2026-11-01
    signal: seasonal_opportunity
    basis: "Opportunité saisonnière vérifiée via « Ville de Paris — Atelier Scratch : Jeu vidéo »; aucune page forte GSC n'est requise."
eventEndsAt: 2026-11-07
---

Votre enfant aimerait créer son propre jeu vidéo plutôt que simplement y jouer ? **Samedi 7 novembre 2026, de 14 h à 17 h**, la médiathèque Hélène Berr, dans le 12e arrondissement de Paris, propose un atelier gratuit de programmation avec Scratch aux **8-13 ans**. Le projet : fabriquer un jeu inspiré de Pac-Man. **L'inscription est obligatoire** ; la fiche municipale ne permet pas de garantir qu'il reste des places.

## À qui s'adresse cet atelier ?

L'atelier est annoncé pour les enfants de **8 à 13 ans**. Il s'agit d'une initiation à Scratch, un environnement de programmation visuelle qui permet d'assembler des blocs d'instructions plutôt que d'écrire du code ligne par ligne. C'est une façon concrète de découvrir comment un personnage se déplace et réagit dans un jeu.

Le thème Pac-Man donne un objectif facile à comprendre : imaginer les déplacements et les interactions d'un petit jeu. La fiche officielle ne précise pas de niveau préalable exigé. Elle ne dit pas non plus si un parent doit rester pendant les trois heures, ni si les participants doivent apporter un ordinateur. Pour ces deux points, mieux vaut interroger la médiathèque avant le déplacement plutôt que de supposer que tout est fourni ou que l'enfant peut rester seul.

## Comment réserver une place gratuite ?

La participation est **gratuite, uniquement sur réservation**. Consultez la [fiche de l'atelier publiée par la Ville de Paris](https://www.paris.fr/evenements/atelier-scratch-jeu-video-126009) pour les modalités actualisées. L'annonce consultée confirme la réservation obligatoire, mais ne fournit pas de compteur de places disponibles : **ne considérez pas l'inscription comme acquise sans confirmation**.

Si vous ne trouvez pas de procédure d'inscription ou souhaitez vérifier une place, contactez directement la médiathèque Hélène Berr au **01 43 45 87 12**. Précisez l'âge de l'enfant et demandez, au besoin, les consignes d'accompagnement et de matériel.

## Où se déroule l'atelier et comment organiser l'après-midi ?

Rendez-vous à la **médiathèque Hélène Berr, 70 rue de Picpus, Paris 12e**, le samedi 7 novembre. L'atelier dure **trois heures, de 14 h à 17 h** : prévoyez une arrivée un peu en avance, après avoir obtenu votre réservation. L'événement se déroule en intérieur.

La fiche municipale annonce un accès pour les personnes à mobilité réduite. Elle signale toutefois que l'activité n'est pas accessible aux personnes déficientes auditives ou visuelles et qu'aucun accueil en langue des signes n'est disponible. Pour un besoin particulier, prenez contact avec l'établissement avant de vous inscrire.

Pour préparer le trajet et choisir des tickets adaptés aux âges des enfants, notre guide [des transports à Paris en famille](https://www.fam-space.fr/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/) détaille les options sans multiplier les achats inutiles.

Cet atelier convient surtout aux familles qui peuvent libérer le samedi après-midi et dont l'enfant a envie d'expérimenter la création d'un jeu. La décision à prendre maintenant est simple : **vérifier la disponibilité et obtenir une confirmation de réservation** avant de prévoir le trajet.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/planete-ocean-a-paris-preparer-la-visite-en-famille/ | Planète Océan à Paris: préparer la visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/activites/paris-sport-vacances-automne-2026-demi-journee-gratuite-ou-stage-a-la-journee/ | Paris Sport Vacances automne 2026: demi-journée gratuite ou stage à la journée? | activites | Paris, Paris, Île-de-France
- /articles/cuisine/ateliers-cuisine-parent-enfant-a-paris-lesquels-choisir-selon-l-age-et-le-budget/ | Ateliers cuisine parent-enfant à Paris: lesquels choisir selon l’âge et le budget ? | cuisine | Paris, Paris, Île-de-France
- /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | Créations & savoir-faire 2026 à Paris en famille: billets, ateliers et dates | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | Vacances de la Toussaint 2026 à la Cité des sciences: les ateliers numériques gratuits avec des enfants | sorties | Paris, Paris, Île-de-France
- /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | Métamorphoses 2026 au quai Branly: séances gratuites et films par âge | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-au-louvre-quelles-activites-choisir-avec-des-enfants/ | Vacances de la Toussaint 2026 au Louvre: le programme famille du 17 octobre au 1er novembre | sorties | Paris, Paris, Île-de-France
- /articles/activites/atelier-des-lumieres-avec-un-enfant-quel-programme-choisir-et-peut-on-venir-avec-une-poussette/ | Atelier des Lumières avec un enfant: quel programme choisir et peut-on venir avec une poussette ? | activites | Paris, Paris, Île-de-France
- /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/ | Paris avec une poussette: métro, RER, bus ou tram, que choisir ? | voyages | Paris, Paris, Île-de-France
- /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | Féeries de Noël 2026 à Paris: parcours lumineux, billets et patinoire en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | Odyssée Lumineuse 2026-2027 à Paris: billets, dates et visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/bons-plans/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/ | Navigo Liberté+ en famille: tarifs enfants et choix du passe en 2026 | bons-plans | Paris, Paris, Île-de-France
- /articles/sorties/l-aquarium-tropical-de-la-porte-doree-en-famille/ | L’Aquarium tropical de la Porte Dorée en famille | sorties | Paris, Paris, Île-de-France
- /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | Salon du Cheval de Paris 2026 en famille: animations, jumping et billets | evenements | Paris, Paris, Île-de-France
- /articles/maison/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager/ | À Paris, où donner ou déposer meubles, jouets et électroménager ? | maison | Paris, Paris, Île-de-France
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | Día de los Muertos 2026 au Jardin d’Acclimatation: programme, billets et tailles | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-au-musee-carnavalet-quelle-activite-choisir-selon-l-age/ | Vacances de la Toussaint 2026 au musée Carnavalet: activités en famille dès 4 ans | sorties | Paris, Paris, Île-de-France
- /articles/activites/grottes-de-sare-en-famille-visite-tarifs-et-conseils-pratiques/ | Grottes de Sare en famille: visite, tarifs et conseils pratiques | activites | Sare, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/activites/noel-2026-au-5e-lieu-a-strasbourg-la-visite-disney-vaut-elle-le-detour-avec-des-enfants/ | Visite Disney à Strasbourg au 5e Lieu: dates et billets de Noël 2026 | activites | Strasbourg, Bas-Rhin, Grand Est
- /articles/activites/monastere-royal-de-brou-en-famille-jeux-cloitres-et-tarifs/ | Monastère royal de Brou en famille: jeux, cloîtres et tarifs | activites | Bourg-en-Bresse, Ain, Auvergne-Rhône-Alpes
- /articles/activites/planetarium-de-belfort-en-famille-etoiles-meteorites-et-infos-pratiques/ | Planétarium de Belfort en famille: étoiles, météorites et infos pratiques | activites | Belfort, Territoire de Belfort, Bourgogne-Franche-Comté

### Historique Radar lié

- opportunity | /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | 2026-10-23T06:21:12.326Z
- opportunity | /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | 2026-10-08T14:56:52.034Z
- opportunity | /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | 2026-10-27T13:28:21.076Z
- opportunity | /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | 2026-10-18T04:19:39.869Z
- opportunity | /articles/bons-plans/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/ | 2026-10-25T10:33:30.080Z
- opportunity | /articles/activites/noel-2026-au-5e-lieu-a-strasbourg-la-visite-disney-vaut-elle-le-detour-avec-des-enfants/ | 2026-11-03T09:41:24.597Z
- opportunity | /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | 2026-10-09T14:37:47.734Z
- opportunity | /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | 2026-10-26T15:30:14.299Z
- opportunity | /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/ | 2026-10-28T12:27:07.569Z
- opportunity | /articles/activites/paris-sport-vacances-automne-2026-demi-journee-gratuite-ou-stage-a-la-journee/ | 2026-10-03T20:20:25.508Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
