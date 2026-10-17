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
title: "Métamorphoses 2026 au quai Branly: séances gratuites et films par âge"
subtitle: "Du 17 au 25 octobre à Paris: courts métrages, films d'animation, VF ou VOSTF"
summary: "Métamorphoses 2026 au musée du quai Branly: 17 séances gratuites sur réservation, films dès 3 ans, horaires, durées et versions pour choisir en famille."
category: evenements
location:
  city: Paris
  department: Paris
  region: Île-de-France
keywords:
  - festival Métamorphoses 2026 quai Branly
  - cinéma gratuit enfants musée du quai Branly
  - festival cinéma jeune public Paris octobre 2026
sources:
  - title: Musée du quai Branly - Métamorphoses, programme complet 2026
    url: https://www.quaibranly.fr/fr/expositions-evenements/au-musee/cinema/details-de-levenement/e/metamorphoses-41165
  - title: Musée du quai Branly - Les Contes de la mère poule
    url: https://www.quaibranly.fr/fr/expositions-evenements/au-musee/cinema/details-de-levenement/e/les-contes-de-la-mere-poule-41167
  - title: Musée du quai Branly - Louise et la légende du serpent à plumes
    url: https://www.quaibranly.fr/fr/expositions-evenements/au-musee/cinema/details-de-levenement/e/louise-et-la-legende-du-serpent-a-plumes-41173
  - title: Musée du quai Branly - Les enfants loups, Ame et Yuki
    url: https://www.quaibranly.fr/fr/expositions-evenements/au-musee/cinema/details-de-levenement/e/les-enfants-loups-ame-et-yuki-41177
  - title: Musée du quai Branly - Ponyo sur la falaise
    url: https://www.quaibranly.fr/fr/expositions-evenements/au-musee/cinema/details-de-levenement/e/ponyo-sur-la-falaise-41179
  - title: Musée du quai Branly - Le Prince Serpent
    url: https://www.quaibranly.fr/fr/expositions-evenements/au-musee/cinema/details-de-levenement/e/le-prince-serpent-41180
  - title: Musée du quai Branly - Le Garçon et le Héron
    url: https://www.quaibranly.fr/fr/expositions-evenements/au-musee/cinema/details-de-levenement/e/le-garcon-et-le-heron-41184
  - title: Musée du quai Branly - accès au musée
    url: https://www.quaibranly.fr/fr/informations-pratiques/venir/horaires-acces-et-tarifs/plans/acces-au-musee
  - title: Musée du quai Branly - handicap moteur et accessibilité
    url: https://www.quaibranly.fr/fr/handicap-moteur
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants
  decision: Repérer un film adapté à l'âge, à la sensibilité et à la capacité de lecture des sous-titres de ses enfants, puis choisir l'heure de projection et réserver une place gratuite au bon créneau.
  affiliationPotential: "L'entrée aux séances est gratuite sur réservation auprès du musée, sans billetterie partenaire équivalente. Hébergement optionnel réellement identifié pour une famille séjournant à Paris: Aparthotel Adagio Paris Centre Tour Eiffel sur Booking.com (https://www.booking.com/hotel/fr/pierre-vacacnces-city-paris-tour-eiffel.fr.html), appartements avec cuisine et options familiales; vérifier disponibilité, capacité et trajet avant recommandation."
  gsc:
    retrievedAt: 2026-10-17T09:26:43.000Z
    dataThrough: 2026-10-14
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Musée du quai Branly - Métamorphoses, festival de cinéma jeune public 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-10-25
---

Au **musée du quai Branly – Jacques Chirac, à Paris**, le festival **Métamorphoses** propose **17 séances de cinéma du 17 au 25 octobre 2026**, pendant les vacances de la Toussaint. Les films abordent les transformations imaginaires, les contes et les créatures fantastiques. **Toutes les projections sont gratuites sur réservation**, mais les durées, les langues et les âges conseillés varient considérablement.

## Quel film choisir pour les plus jeunes?

Pour un enfant qui découvre le cinéma, le premier critère est moins la célébrité du titre que la combinaison **âge conseillé, durée et ambiance**.

- **Dès 3 ans — Les Contes de la mère poule**, le **dimanche 18 octobre à 11h**: **46 min**, **sans dialogues**. Trois courts métrages iraniens font vivre des animaux et des personnages à partir de tissus, de papier découpé ou de laine. C'est la séance la plus courte de cette sélection et elle n'exige aucune lecture.
- **Dès 4 ans — Ponyo sur la falaise**, le **vendredi 23 octobre à 11h**: **1h41**, **VF**. Cette aventure animée autour d'une petite créature marine est accessible à un âge plus jeune, mais dure nettement plus longtemps.
- **Dès 6 ans — Louise et la légende du serpent à plumes**, le **mardi 20 octobre à 11h**: **44 min**, **VF** pour le film principal. Attention: la séance est précédée du court métrage **Lion Bleu (15 min)**. Prévoyez donc davantage que 44 minutes pour l'ensemble.

Les âges indiqués correspondent aux recommandations publiées par le musée, et non à une garantie qu'un film conviendra à tous les enfants du même âge.

## Pour les écoliers et les plus grands: durée et sous-titres

- **Dès 7 ans — Les enfants loups, Ame et Yuki**, le **jeudi 22 octobre à 11h**: **1h57**, **VF**. Ce récit familial évoque notamment l'absence d'un parent et la façon dont deux enfants grandissent. **Retenez bien 11h**, l'horaire du programme général et de la fiche française du film.
- **Dès 10 ans — Le Prince Serpent**, le **vendredi 23 octobre à 15h**: **59 min**. Une formule plus courte que les longs métrages proposés aux grands enfants; confirmez la version linguistique sur la fiche au moment de réserver.
- **Dès 10 ans — Le Garçon et le Héron**, le **dimanche 25 octobre à 15h**: **2h04**, **VOSTF**. Les sous-titres demandent une lecture suivie pendant un film long, parfois impressionnant, où la disparition de la mère fait partie du récit.

Un âge minimum conseillé ne signifie pas que l'enfant pourra suivre aisément une **version originale sous-titrée**. Pour une première séance ou avec plusieurs enfants d'âges différents, privilégiez un film court ou en français plutôt qu'un titre dont le récit impose à la fois des sous-titres et une attention soutenue.

Ce sont des **repères parmi les 17 séances**, pas une liste exhaustive: le festival propose aussi *L'enfant qui voulait être un ours*, *Lou et l'île aux sirènes*, *Tito et les oiseaux*, *Ivan Tsarévitch et la princesse changeante* et plusieurs films pour des publics plus âgés. Le choix final dépend de la date et des places encore disponibles.

## Réserver une séance gratuite: ce qu'il faut vérifier

Les réservations ont ouvert le **5 octobre 2026**. Sur le site du musée, ouvrez **la fiche de la séance choisie**, puis contrôlez la date, l'heure, la version du film et la disponibilité avant de finaliser la réservation gratuite. Le bouton de billetterie peut être libellé « Acheter un billet » même lorsque **le tarif de cette projection est de 0 €**.

Toutes les séances se déroulent dans la **salle de cinéma du musée**. Ne confondez pas **l'accès gratuit à une projection** avec un billet d'entrée aux collections ou aux expositions: la gratuité annoncée concerne ces séances du festival. Si vous prévoyez de visiter le musée le même jour, renseignez-vous séparément sur les conditions d'accès aux autres espaces.

## Venir au musée en famille

Le musée du quai Branly – Jacques Chirac se trouve **37 quai Branly, dans le 7e arrondissement de Paris**. Les accès comprennent le quai Jacques-Chirac et la rue de l'Université. En transports, les arrêts **Alma-Marceau (métro 9)** et **Pont de l'Alma (RER C)** figurent parmi les options indiquées par le musée; le **bus 42** dessert aussi le secteur de la tour Eiffel.

Les personnes à mobilité réduite peuvent utiliser l'**entrée conseillée du 222 rue de l'Université**, équipée d'un ascenseur. Le musée indique que ses espaces et événements sont accessibles aux utilisateurs de fauteuils roulants. Pour un besoin particulier, le service accessibilité peut être joint au **01 56 61 53 50**.

Si vous prolongez les vacances à Paris, notre guide [Mon Premier Festival 2026 à Paris](/articles/evenements/mon-premier-festival-2026-paris-film-age/) présente un **autre festival**, avec ses propres cinémas et son propre programme. Les deux événements ne partagent pas une réservation commune.

## Pour un séjour de plusieurs jours à Paris

Pour une famille venue de loin qui souhaite combiner cette séance et d'autres sorties, l'[Aparthotel Adagio Paris Centre Tour Eiffel sur Booking.com](https://www.booking.com/hotel/fr/pierre-vacacnces-city-paris-tour-eiffel.fr.html), **14 rue du Théâtre dans le 15e**, propose des studios et appartements avec **cuisine**, dont certaines configurations pour **quatre à six personnes**. Comparez la disponibilité, les couchages et le trajet réel jusqu'au musée avant de réserver: ce n'est pas un hébergement situé dans le musée ni une condition pour profiter des séances gratuites.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/mon-premier-festival-2026-paris-film-age/ | Mon Premier Festival 2026 à Paris: quel film choisir selon l'âge? | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-au-musee-carnavalet-quelle-activite-choisir-selon-l-age/ | Vacances de la Toussaint 2026 au musée Carnavalet: activités en famille dès 4 ans | sorties | Paris, Paris, Île-de-France
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/activites/paris-sport-vacances-automne-2026-demi-journee-gratuite-ou-stage-a-la-journee/ | Paris Sport Vacances automne 2026: demi-journée gratuite ou stage à la journée? | activites | Paris, Paris, Île-de-France
- /articles/evenements/fete-des-rues-aux-enfants-2026-a-paris-ou-aller-selon-l-arrondissement/ | Fête des rues aux enfants 2026 à Paris: où aller selon l'arrondissement? | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | Vacances de la Toussaint 2026 à la Cité des sciences: les ateliers numériques gratuits avec des enfants | sorties | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-au-louvre-quelles-activites-choisir-avec-des-enfants/ | Vacances de la Toussaint 2026 au Louvre: le programme famille du 17 octobre au 1er novembre | sorties | Paris, Paris, Île-de-France
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/maison/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager/ | À Paris, où donner ou déposer meubles, jouets et électroménager ? | maison | Paris, Paris, Île-de-France
- /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | Día de los Muertos 2026 au Jardin d’Acclimatation: programme, billets et tailles | evenements | Paris, Paris, Île-de-France
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/activites/stages-de-science-a-la-cite-des-sciences-pendant-la-toussaint-2026-lequel-choisir-selon-l-age/ | Stages de science à la Cité des sciences à la Toussaint 2026: durées, âges et tarifs | activites | Paris, Paris, Île-de-France
- /articles/vie-pratique/consigne-a-bagages-a-paris-en-famille-gare-ou-depot-en-ville/ | Consigne à bagages à Paris en famille: gare ou dépôt en ville? | vie-pratique | Paris, Paris, Île-de-France
- /articles/activites/atelier-des-lumieres-avec-un-enfant-quel-programme-choisir-et-peut-on-venir-avec-une-poussette/ | Atelier des Lumières avec un enfant: quel programme choisir et peut-on venir avec une poussette ? | activites | Paris, Paris, Île-de-France
- /articles/evenements/salon-du-chocolat-paris-2026-avec-des-enfants-quel-billet-choisir-et-quels-ateliers-reserver/ | Salon du Chocolat Paris 2026 avec des enfants: quel billet choisir et quels ateliers réserver | evenements | Paris, Paris, Île-de-France
- /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/ | Transports à Paris avec des enfants: quel titre choisir pour payer juste? | voyages | Paris, Paris, Île-de-France
- /articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/ | Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite | sorties | Paris, Paris, Île-de-France
- /articles/evenements/paris-plages-2026-en-famille/ | Paris Plages 2026: où se baigner et jouer avec des enfants | evenements | Paris, Paris, Île-de-France
- /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | Festival du Film pour Enfants 2026 en Isère: séances, ateliers et tarifs | evenements | Vizille, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | Festi'Mômes 2026 à Nantes: séances, spectacles et tarifs en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | Automnales d'Harcourt 2026: animations, visites et tarifs en famille | evenements | Harcourt, Eure, Normandie

### Historique Radar lié

- opportunity | /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | 2026-10-16T06:56:21.314Z
- opportunity | /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | 2026-10-08T14:56:52.034Z
- opportunity | /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | 2026-10-17T11:48:00.184Z
- opportunity | /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | 2026-10-17T15:41:33.883Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- opportunity | /articles/evenements/fete-des-rues-aux-enfants-2026-a-paris-ou-aller-selon-l-arrondissement/ | 2026-10-03T14:16:09.016Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- opportunity | /articles/evenements/mon-premier-festival-2026-paris-film-age/ | 2026-10-03T06:21:55.257Z
- opportunity | /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | 2026-10-06T19:20:39.093Z
- opportunity | /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | 2026-10-09T14:37:47.734Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
