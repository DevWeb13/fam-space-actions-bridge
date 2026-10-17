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
title: "Festi'Mômes 2026 à Nantes: quelles séances choisir avec les enfants?"
subtitle: "Du 20 au 24 octobre au cinéma Bonne Garde: films par jour, animations, tarifs et accès"
summary: "Festi'Mômes à Nantes du 20 au 24 octobre 2026: séances courtes pour les plus jeunes, films pour les grands, spectacles, tarifs et bus relais vers Pirmil."
category: evenements
location:
  city: Nantes
  department: Loire-Atlantique
  region: Pays de la Loire
keywords:
  - Festi'Mômes Nantes 2026
  - cinéma Bonne Garde enfants octobre
  - Festi'mômes séances horaires tarifs
sources:
  - title: Cinéma Bonne Garde - films et séances Festi'Mômes
    url: https://cinemalebonnegarde.com/FR/12/prochainement-cinema-bonne-garde.html
  - title: Nantes Métropole - Festi'mômes, dates, âge et tarifs
    url: https://metropole.nantes.fr/que-faire-a-nantes/agenda/26961788_festimomes-2892031
  - title: Nantes Métropole - Les mots magiques du 24 octobre
    url: https://metropole.nantes.fr/actualites/vacances-d-octobre-par-ici-les-spectacles-enfants
  - title: Naolib - interruption des tramways 2 et 3 du 19 octobre au 1er novembre
    url: https://naolib.fr/fr/travaux/secteur-hotel-dieu-8-mai
  - title: Cinéma Bonne Garde - Petite Casbah, contes et goûter
    url: https://cinemalebonnegarde.com/FR/fiche-film-cinema/MSB_208/film-petite-casbah-contes-et-gouter.html
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants
  decision: Choisir une projection ou animation réellement adaptée à l'âge et à l'attention de l'enfant, connaître le jour, l'horaire, le prix et les conditions pour organiser la sortie entre le 20 et le 24 octobre.
  affiliationPotential: "Pas d'offre affiliée vérifiée pour les séances du cinéma associatif Bonne Garde: billetterie et programmation directement chez l'organisateur. Un hébergement nantais n'est utile que pour une famille déjà en séjour; ne pas ajouter de logement arbitraire ni de partenaire de billetterie généraliste."
  gsc:
    retrievedAt: 2026-10-17T09:26:43.000Z
    dataThrough: 2026-10-14
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Cinéma Bonne Garde - programmation et séances Festi'Mômes »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-10-24
---

À Nantes, **Festi'Mômes revient du mardi 20 au samedi 24 octobre 2026** au cinéma associatif Bonne Garde. Pour cette 18e édition, le plus simple est de choisir d'abord selon la durée du film et la capacité d'attention des enfants, puis de vérifier l'horaire. Le festival accueille les familles **à partir de 3 ans**, mais « tout public » ne signifie pas que chaque film convient à un enfant de maternelle.

## Le programme: quel jour et quelle séance?

Les créneaux annoncés par le festival sont généralement **10h30 pour les 3-6 ans**, **14h30 pour les 6-10 ans** et **18h pour des séances familiales**. Voici les rendez-vous effectivement affichés dans la [programmation du cinéma Bonne Garde](https://cinemalebonnegarde.com/FR/12/prochainement-cinema-bonne-garde.html), avec leurs durées. Ce sont les horaires de ces séances précises, pas une grille garantie pour tous les films.

- **Mardi 20 octobre:** *Un amour d'épouvantail* à **10h30** (**44 min**), une première séance courte à envisager avec un jeune enfant; *Kayara, princesse inca* à **14h30** (**1h21**), aventure davantage adaptée à un enfant déjà à l'aise avec un long film.
- **Mercredi 21 octobre:** *Le Monde à l'envers* à **10h30** (**45 min**); à **14h30**, *Petite Casbah*, suivie de contes et d'un goûter; le film dure **1h24**, et il faut prévoir du temps supplémentaire pour les animations. À **18h**, *La Fin d'Oak Street* (**1h40**) est proposée en **version originale sous-titrée**, avec un avertissement « tout public »: ce n'est pas un choix par défaut pour les petits.
- **Jeudi 22 octobre:** *Gruffalo, de père en fils* à **10h30** (**53 min**), pour les enfants qui aiment les histoires de créatures imaginaires; *Le Corset* à **14h30** (**1h31**), un récit centré sur un garçon de 11 ans; *Kyma, l'onde mystérieuse* à **18h** (**1h29**), également assorti d'un avertissement. Pour ces deux derniers films, mieux vaut tenir compte de la sensibilité et de la maturité de l'enfant.
- **Vendredi 23 octobre:** *Entre ciel et terre* à **10h30** (**33 min de courts métrages**), annoncé avec un spectacle du Livre qui rêve; *La Fille dans les nuages* à **14h30** (**1h28**), pour une sortie autour du fantastique; à **19h**, une soirée de **courts métrages, défilé de mode de jeunes créateurs et collation**, affichée sur un créneau de **3 heures**, convient mieux à une famille prête à rester tard.
- **Samedi 24 octobre:** *Des Minions et des monstres* à **10h30** (**1h30**) peut plaire à des enfants qui suivent déjà un long métrage, mais sa durée le rend moins indiqué pour une première séance à 3 ans, même s'il passe le matin. À **14h30**, place aux **Mots magiques**, spectacle de contes de **50 min** par l'Atelier du Livre qui rêve: une alternative au cinéma pour finir le festival.

Ces âges sont des **repères de choix familial**, pas des classifications officielles film par film. Avec un enfant sensible aux scènes inquiétantes, vérifiez le synopsis et l'avertissement avant de prendre des billets.

## Animations et budget: ce qu'il faut distinguer

Le mercredi, la séance [*Petite Casbah*, contes et goûter](https://cinemalebonnegarde.com/FR/fiche-film-cinema/MSB_208/film-petite-casbah-contes-et-gouter.html) comprend une projection suivie des contes de Philippe puis d'un goûter préparé par Citrus au bar du cinéma. Le vendredi soir, le défilé est une **soirée distincte**, et non une animation ajoutée automatiquement aux séances de l'après-midi. Le samedi, **[Les mots magiques](https://metropole.nantes.fr/actualites/vacances-d-octobre-par-ici-les-spectacles-enfants)** est annoncé à **14h30**, avec un tarif municipal indiqué entre **6 et 7 €**.

Selon [l'agenda de Nantes Métropole](https://metropole.nantes.fr/que-faire-a-nantes/agenda/26961788_festimomes-2892031), les tarifs annoncés sont **5 € pour une séance ordinaire**, **4 € pour les détenteurs de la Carte blanche** et **7 € pour les événements**. Comptez ainsi **20 € pour quatre places à 5 €**, hors collation ou achats sur place. Ne présumez pas que le tarif ordinaire s'applique aux projections accompagnées d'un spectacle ou d'un goûter: contrôlez le montant de la séance choisie avant de réserver.

## Venir au cinéma Bonne Garde pendant les travaux

Le cinéma se situe au **20 rue Frère-Louis, 44200 Nantes**, dans le quartier Nantes Sud, à proximité du secteur de **Pirmil**. Attention à un changement particulièrement important durant le festival: **du 19 octobre au 1er novembre 2026, les tramways 2 et 3 ne circulent pas entre Hôtel-Dieu et 8-Mai**, en raison de travaux. Des **bus relais** assurent la desserte de la section, notamment vers Pirmil, mais **pas les arrêts Wattignies et Gare de Pont-Rousseau**. Consultez les [itinéraires de remplacement Naolib](https://naolib.fr/fr/travaux/secteur-hotel-dieu-8-mai) avant le départ et gardez une marge avec des enfants.

Pour une sortie avec poussette ou en cas de besoin particulier d'accessibilité, demandez au cinéma les modalités d'accès à la salle: le programme consulté ne détaille pas ces équipements. Mieux vaut aussi anticiper la durée totale d'une séance avec goûter, spectacle ou défilé plutôt que de se fier à la seule durée du film.

Si vous souhaitez prévoir un autre festival nantais pendant les vacances, les [Utopiales 2026 en famille](https://www.fam-space.fr/articles/evenements/utopiales-2026-a-nantes-en-famille-dates-billets-et-conseils-pour-preparer-la-visite/) se déroulent **du 29 octobre au 1er novembre**, après Festi'Mômes, avec une programmation et des conditions de billetterie distinctes.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/utopiales-2026-a-nantes-en-famille-dates-billets-et-conseils-pour-preparer-la-visite/ | Utopiales 2026 à Nantes en famille: dates, billets et conseils pour préparer la visite | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/cuisine/atelier-cuisine-parent-enfant-a-nantes-gratuit-au-breil-ou-cours-prive/ | Ateliers cuisine parent-enfant à Nantes: où cuisiner ensemble? | cuisine | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP à Nantes: où aller avec un enfant de moins de 6 ans? | parentalite | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/voyage-a-nantes-2026-en-famille/ | Voyage à Nantes 2026 en famille: parcours court et plan | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/vie-pratique/tarification-solidaire-naolib-a-nantes-combien-paie-une-famille-et-comment-faire-la-demande/ | Tarification solidaire Naolib à Nantes: combien paie une famille et comment faire la demande? | vie-pratique | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/maison/broyeur-de-vegetaux-a-nantes-metropole-acheter-a-plusieurs-ou-profiter-des-operations-gratuites/ | Broyeur de végétaux à Nantes Métropole: acheter à plusieurs ou profiter des opérations gratuites ? | maison | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/folie-plantes-nantes-2026-famille/ | Folie des plantes 2026 à Nantes: un week-end gratuit à découvrir en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/mon-premier-festival-2026-paris-film-age/ | Mon Premier Festival 2026 à Paris: quel film choisir selon l'âge? | evenements | Paris, Paris, Île-de-France
- /articles/activites/planete-sauvage-en-famille-tarifs-2026-duree-et-conseils-de-visite/ | Planète Sauvage en famille: tarifs 2026, durée et conseils de visite | activites | Port-Saint-Père, Loire-Atlantique, Pays de la Loire
- /articles/evenements/festival-ete-continue-carquefou-2026-famille/ | Festival L’Été Continue 2026 à Carquefou: six jours gratuits en famille | evenements | Carquefou, Loire-Atlantique, Pays de la Loire
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | Automnales d'Harcourt 2026: animations, visites et tarifs en famille | evenements | Harcourt, Eure, Normandie
- /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | Toussaint 2026 au musée des Confluences: cinq rendez-vous pour les enfants | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/toussaint-2026-au-seaquarium-du-grau-du-roi-quel-jeu-choisir/ | Toussaint 2026 au Seaquarium: dates des jeux, âges et billets en famille | evenements | Le Grau-du-Roi, Gard, Occitanie
- /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/vacances-royales-2026-a-versailles-animations-napoleon-dates-et-billets-en-famille/ | Vacances royales 2026 à Versailles: animations Napoléon, dates et billets | evenements | Versailles, Yvelines, Île-de-France
- /articles/evenements/rouen-givree-2026-en-famille-marche-de-noel-et-refuge-givre/ | Rouen Givrée 2026 en famille: marché de Noël et Refuge Givré | evenements | Rouen, Seine-Maritime, Normandie
- /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | Au Creux de l'Oreille 2026 à Noirlac: spectacles et ateliers en famille du 17 au 22 octobre | evenements | Bruère-Allichamps, Cher, Centre-Val de Loire
- /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | Grands Zyeux P'tites Zoreilles 2026: spectacles gratuits avec les tout-petits autour de Béziers | evenements | Béziers, Hérault, Occitanie
- /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | Abracada BOUH 2026 à Montpellier: programme et tarifs au château de Flaugergues | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | Fête de l'Automne 2026 à Terra Botanica: animations et tarifs | evenements | Angers, Maine-et-Loire, Pays de la Loire

### Historique Radar lié

- opportunity | /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | 2026-10-13T20:41:25.500Z
- opportunity | /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | 2026-10-14T13:49:08.708Z
- opportunity | /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | 2026-10-16T06:56:21.314Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- opportunity | /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | 2026-10-13T12:37:05.098Z
- opportunity | /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | 2026-10-14T07:31:28.976Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- opportunity | /articles/evenements/mon-premier-festival-2026-paris-film-age/ | 2026-10-03T06:21:55.257Z
- refresh | /articles/activites/planete-sauvage-en-famille-tarifs-2026-duree-et-conseils-de-visite/ | 2026-10-02T14:23:16.612Z
- opportunity | /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | 2026-10-15T05:30:56.094Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
