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
title: "Rencontres du ciel et de l’espace 2026 : quelles activités choisir avec les enfants à Paris ?"
subtitle: "Du 13 au 15 novembre à la Cité des sciences : séances dès 3 ans, ateliers dès 6 ou 9 ans, billets et réservations."
summary: À la Cité des sciences, les Rencontres du ciel et de l’espace proposent des séances de planétarium et des ateliers familiaux du 13 au 15 novembre 2026. Voici les bons créneaux selon l’âge et le billet.
category: evenements
location:
  city: Paris
  department: Paris
  region: Île-de-France
keywords:
  - Rencontres du ciel et de l’espace 2026 enfants
  - planétarium Cité des sciences novembre 2026 famille
  - ateliers astronomie Paris 13 15 novembre 2026
sources:
  - title: Cité des sciences — programme officiel des Rencontres du ciel et de l’espace
    url: https://www.cite-sciences.fr/fr/au-programme/evenements/les-rencontres-du-ciel-et-de-lespace/
  - title: Cité des sciences — tarifs
    url: https://www.cite-sciences.fr/fr/infos-pratiques/nos-tarifs
  - title: Cité des sciences — accès au Planétarium
    url: https://www.cite-sciences.fr/fr/au-programme/activites-spectacles/le-planetarium
  - title: Cité des sciences — préparer sa visite
    url: https://www.cite-sciences.fr/fr/infos-pratiques/preparez-votre-visite
  - title: Ville de Paris — Rencontres du ciel et de l’espace 2026
    url: https://www.paris.fr/evenements/les-rencontres-du-ciel-et-de-l-espace-125909
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: rencontres-du-ciel-et-de-l-espace-2026-a-paris-que-choisir-avec-des-enfants
  decision: Choisir une activité réellement adaptée à l’âge des enfants, son créneau et le bon billet pour les Rencontres du ciel et de l’espace des 13 au 15 novembre 2026.
  affiliationPotential: Billetterie principale uniquement chez l’organisateur, sans partenaire billetterie vérifié. Hébergement Booking.com à proximité de la Villette à envisager pour les familles en séjour, sans inventer d’offre précise.
  gsc:
    retrievedAt: 2026-11-04T03:31:09+01:00
    dataThrough: 2026-11-01
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Cité des sciences - Rencontres du ciel et de l’espace, programme officiel »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-11-15
---

Du **vendredi 13 au dimanche 15 novembre 2026**, la Cité des sciences et de l’industrie accueille les Rencontres du ciel et de l’espace. Pour une sortie avec des enfants, le bon choix n’est pas forcément la conférence la plus spectaculaire : il faut d’abord regarder l’âge conseillé, le jour de la séance et le type de billet. Le [programme officiel](https://www.cite-sciences.fr/fr/au-programme/evenements/les-rencontres-du-ciel-et-de-lespace/) distingue les animations dans les expositions, les spectacles du Planétarium et les conférences du Centre des congrès.

## Quel programme selon l’âge des enfants ?

**De 3 à 6 ans : « Mon premier planétarium ».** Cette découverte commentée en direct dure **30 minutes** et se tient **vendredi 13, samedi 14 et dimanche 15 novembre à 10 h 30**, avec les parents. C’est le choix le plus adapté pour une première expérience sous le dôme, au niveau 2.

**De 6 à 8 ans : deux expériences très différentes.** Le vendredi 13 à **12 h**, « Parés au décollage ! » propose un voyage immersif à travers le système solaire (**35 minutes**, dès 6 ans, Planétarium). Le samedi 14 et le dimanche 15 à **12 h et 16 h**, « Mission Bellona » invite les enfants à préparer une mission vers Mars (**45 minutes**, dès 6 ans, espace de médiation EM1, niveau 1 des expositions). Si vous ne venez que le week-end, Bellona est le choix évident dans cette tranche d’âge. Le dimanche 15 à **17 h**, la séance « 2027 éclipse totale » au Planétarium est également annoncée dès 6 ans (**40 minutes**).

**Dès 9 ans : manipuler et observer.** « Chasse aux météorites » est proposée samedi et dimanche à **14 h, 15 h et 17 h** (**45 minutes**, balcon des expositions, niveau 2). Les mêmes jours, « Découverte des télescopes » se tient à **11 h, 15 h et 17 h** et « Carte du ciel » à **12 h, 14 h et 16 h**, chaque fois pour **45 minutes**. L’observation du Soleil, à **12 h et 14 h**, dépend de la météo. Attention aux chevauchements : impossible, par exemple, d’enchaîner deux ateliers commençant à 14 h.

Pour une famille avec plusieurs âges, les animations en continu du **samedi et du dimanche de 13 h à 17 h**, notamment « La pétanque des planètes » et le village de la recherche spatiale, permettent de compléter la journée sans construire un programme trop serré. Le programme ne précise pas d’âge minimum pour ces deux propositions : vérifiez sur place leur adéquation aux plus jeunes.

## Vendredi ou week-end : quel jour choisir ?

Le **vendredi 13** convient surtout si vous visez une séance précise au Planétarium, notamment « Mon premier planétarium » ou « Parés au décollage ! ». Le **samedi 14** et le **dimanche 15** offrent davantage d’ateliers participatifs pour les enfants d’âge scolaire.

Avec un enfant de 9 ans ou plus, un parcours simple le samedi serait : découverte des télescopes à 11 h, pause déjeuner, puis chasse aux météorites à 14 h. Gardez une marge pour circuler entre les espaces et vérifiez les modalités d’accès de chaque animation avant de fixer cet enchaînement. Le dimanche propose en plus des visites guidées du « Grand récit de l’Univers » dès 9 ans, limitées à **20 à 25 personnes** selon le programme.

Les conférences spécialisées et les forums du **Centre des congrès**, niveau -1, constituent une autre partie de l’événement. Ils ne doivent pas être confondus avec les ateliers jeunesse : leur accès relève du billet Rencontres.

## Quel billet acheter et combien prévoir ?

Pour les **ateliers dans les espaces d’exposition**, l’organisateur indique un accès avec le **billet Expositions OU le billet Rencontres du ciel et de l’espace**. Le billet Expositions coûte **15 € au plein tarif**, **12 € pour les 6–25 ans** et **4 € pour les enfants de 2 à 5 ans**, sous réserve des justificatifs et autres réductions applicables. À titre indicatif, **un adulte et un enfant de 5 ans : 19 €** ; **deux adultes et deux enfants de 6 à 12 ans : 54 €** au tarif indiqué, hors éventuelles gratuités.

Pour les **conférences et forums du Centre des congrès**, il faut le **billet Rencontres** : la [Ville de Paris](https://www.paris.fr/evenements/les-rencontres-du-ciel-et-de-l-espace-125909) annonce **18 € pour un jour**, **25 € pour deux jours**, **33 € pour trois jours**, avec tarifs réduits respectifs de **15 €, 22 € et 30 €** réservés aux publics éligibles. Ne supposez pas que ces tarifs réduits s’appliquent automatiquement aux enfants : vérifiez les catégories proposées dans la billetterie.

**Pour le Planétarium**, la Cité précise que l’accès est compris dans le billet Expositions, mais **recommande de réserver la séance** et de se présenter **10 à 15 minutes avant**. Les modalités particulières et les places disponibles pour les Rencontres doivent être contrôlées au moment de la commande. Le billet d’entrée ne garantit pas une place à toutes les animations. Consultez la [billetterie depuis la page officielle de l’événement](https://www.cite-sciences.fr/fr/au-programme/evenements/les-rencontres-du-ciel-et-de-lespace/) avant de payer : privilégiez d’abord le créneau indispensable à votre enfant.

## Préparer la visite avec des enfants

La Cité des sciences se trouve **30 avenue Corentin-Cariou, Paris 19e**, à la Villette. Les espaces des activités sont répartis sur plusieurs niveaux : les ateliers au niveau 1 ou 2, le Planétarium au niveau 2 et les conférences au niveau -1. La [page de préparation de visite](https://www.cite-sciences.fr/fr/infos-pratiques/preparez-votre-visite) recommande la réservation en ligne et précise que l’entrée peut se faire **15 minutes avant l’horaire inscrit sur le billet**.

La Cité dispose de points de restauration au **niveau 0** et au **niveau 1**, ainsi que d’un vestiaire au niveau 0. Les bagages ou objets de plus de **50 × 30 × 20 cm** et les batteries ne sont pas acceptés à la consigne. L’événement est annoncé accessible aux personnes à mobilité réduite ; pour un besoin d’accompagnement ou un parcours précis entre niveaux, contactez l’établissement en amont. Pour les services aux bébés, poussettes, transports et tarifs généraux, consultez notre [guide de la Cité des sciences en famille](/articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/).

Si vous venez de loin pour le week-end, rechercher un [hébergement près de la Villette sur Booking.com](https://www.booking.com/searchresults.fr.html?ss=Parc+de+la+Villette%2C+Paris) peut éviter un long trajet après les ateliers. Vérifiez les dates, la distance réelle à pied et les conditions d’annulation avant de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/ | Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite | sorties | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | Vacances de la Toussaint 2026 à la Cité des sciences: les ateliers numériques gratuits avec des enfants | sorties | Paris, Paris, Île-de-France
- /articles/evenements/salon-du-chocolat-paris-2026-avec-des-enfants-quel-billet-choisir-et-quels-ateliers-reserver/ | Salon du Chocolat Paris 2026 avec des enfants: quel billet choisir et quels ateliers réserver | evenements | Paris, Paris, Île-de-France
- /articles/activites/stages-de-science-a-la-cite-des-sciences-pendant-la-toussaint-2026-lequel-choisir-selon-l-age/ | Stages de science à la Cité des sciences à la Toussaint 2026: durées, âges et tarifs | activites | Paris, Paris, Île-de-France
- /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/ | Transports à Paris avec des enfants: quel titre choisir pour payer juste? | voyages | Paris, Paris, Île-de-France
- /articles/cuisine/ateliers-cuisine-parent-enfant-a-paris-lesquels-choisir-selon-l-age-et-le-budget/ | Ateliers cuisine parent-enfant à Paris: lesquels choisir selon l’âge et le budget ? | cuisine | Paris, Paris, Île-de-France
- /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | Créations & savoir-faire 2026 à Paris en famille: billets, ateliers et dates | evenements | Paris, Paris, Île-de-France
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/evenements/planete-ocean-a-paris-preparer-la-visite-en-famille/ | Planète Océan à Paris: préparer la visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/ | Paris avec une poussette: métro, RER, bus ou tram, que choisir ? | voyages | Paris, Paris, Île-de-France
- /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | Féeries de Noël 2026 à Paris: parcours lumineux, billets et patinoire en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | Odyssée Lumineuse 2026-2027 à Paris: billets, dates et visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/bons-plans/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/ | Navigo Liberté+ en famille: tarifs enfants et choix du passe en 2026 | bons-plans | Paris, Paris, Île-de-France
- /articles/sorties/l-aquarium-tropical-de-la-porte-doree-en-famille/ | L’Aquarium tropical de la Porte Dorée en famille | sorties | Paris, Paris, Île-de-France
- /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | Salon du Cheval de Paris 2026 en famille: animations, jumping et billets | evenements | Paris, Paris, Île-de-France
- /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | Métamorphoses 2026 au quai Branly: séances gratuites et films par âge | evenements | Paris, Paris, Île-de-France
- /articles/maison/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager/ | À Paris, où donner ou déposer meubles, jouets et électroménager ? | maison | Paris, Paris, Île-de-France
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | Noël 2026 au château de Goulaine: dates, billets et conseils en famille | evenements | Haute-Goulaine, Loire-Atlantique, Pays de la Loire
- /articles/evenements/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants/ | Fontaines dansantes d'hiver à Metz 2026-2027: dates, horaires et conseils en famille | evenements | Metz, Moselle, Grand Est
- /articles/evenements/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille/ | Traîneau flottant de Noël à Metz 2026: dates, horaires et embarquement | evenements | Metz, Moselle, Grand Est
- /articles/evenements/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/ | Saint-Nicolas-de-Port 2026 en famille: village, défilé et procession | evenements | Saint-Nicolas-de-Port, Meurthe-et-Moselle, Grand Est

### Historique Radar lié

- opportunity | /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | 2026-10-23T06:21:12.326Z
- opportunity | /articles/evenements/fontaines-dansantes-d-hiver-a-metz-2026-2027-quand-voir-le-spectacle-avec-les-enfants/ | 2026-11-03T06:32:33.600Z
- opportunity | /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | 2026-10-27T13:28:21.076Z
- opportunity | /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | 2026-10-18T04:19:39.869Z
- opportunity | /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | 2026-10-06T19:20:39.093Z
- opportunity | /articles/bons-plans/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/ | 2026-10-25T10:33:30.080Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | 2026-11-03T15:36:10.146Z
- opportunity | /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | 2026-10-09T14:37:47.734Z
- opportunity | /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | 2026-10-26T15:30:14.299Z
- opportunity | /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/ | 2026-10-28T12:27:07.569Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
