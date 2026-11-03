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
title: "Slava’s Snowshow à Lyon 2026 : horaires, âge et budget en famille"
subtitle: "Du 25 novembre au 6 décembre à la Maison de la danse : choisir une séance et comprendre le samedi en famille"
summary: "Slava’s Snowshow revient à Lyon du 25 novembre au 6 décembre 2026. Séances en journée, âge conseillé dès 8 ans, tarifs de 20 à 50 € et animations du 5 décembre : les repères pour réserver avec des enfants."
category: evenements
location:
  city: Lyon
  department: Rhône
  region: Auvergne-Rhône-Alpes
keywords:
  - Slava Snowshow Lyon 2026 enfants
  - Maison de la danse Slava Snowshow horaires billets
  - Slava Snowshow samedi en famille 5 décembre
sources:
  - title: Maison de la danse — Slava’s Snowshow, horaires et tarifs
    url: https://maisondeladanse.com/node/2086
  - title: Maison de la danse — Samedis en famille
    url: https://maisondeladanse.com/node/2067
  - title: Maison de la danse — Billetterie
    url: https://maisondeladanse.com/information/billetterie
  - title: Maison de la danse — Venir à la Maison
    url: https://maisondeladanse.com/information/deplacer
  - title: Maison de la danse — Accessibilité
    url: https://maisondeladanse.com/information/en-situation-de-handicap
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: slava-s-snowshow-a-lyon-en-2026-quelle-seance-choisir-en-famille
  decision: Déterminer si ce spectacle de 1 h 45 avec entracte, conseillé dès 8 ans, convient à son enfant et choisir entre les séances de journée et du soir, notamment le samedi 5 décembre et ses animations familiales, en connaissant le budget réel.
  affiliationPotential: Billets vendus directement par la Maison de la danse, aucune offre partenaire de billetterie vérifiée. Hébergement Booking.com à proximité à vérifier pour les familles venant passer un week-end à Lyon ; ne pas inventer d'offre.
  gsc:
    retrievedAt: 2026-11-03T01:32:28+01:00
    dataThrough: 2026-10-31
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Maison de la danse — Slava’s Snowshow, calendrier et tarifs »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-06
---

Du **25 novembre au 6 décembre 2026**, *Slava’s Snowshow* transforme la Grande salle de la Maison de la danse, à Lyon, en univers de clowns, de mime et de neige théâtrale. Le spectacle dure **1 h 45, entracte compris**, et la salle le **conseille à partir de 8 ans**. Pour une sortie avec des enfants, le choix de l'horaire compte autant que celui des places : plusieurs représentations commencent à 15 h, et le samedi 5 décembre propose aussi un rendez-vous familial distinct.

## Quelle séance choisir avec des enfants ?

Les horaires annoncés par la [Maison de la danse](https://maisondeladanse.com/node/2086) sont les suivants :

- **Mercredi 25 novembre** à 19 h 30 ; jeudi 26 et vendredi 27 à 20 h 30.
- **Samedi 28 novembre** à 15 h et 20 h 30 ; dimanche 29 à 15 h et 19 h 30.
- **Mardi 1er décembre** à 20 h 30 ; mercredi 2 à 15 h et 19 h 30.
- **Jeudi 3 et vendredi 4 décembre** à 20 h 30.
- **Samedi 5 décembre** à 11 h et 15 h ; dimanche 6 à 15 h.

Pour un enfant qui fatigue vite le soir, privilégiez les séances de 15 h des 28 et 29 novembre, 2, 5 ou 6 décembre. Celle de 11 h le samedi 5 permet une sortie plus tôt dans la journée. Les représentations de 20 h 30 finissent théoriquement vers 22 h 15, hors sortie de salle et trajet retour : elles conviennent mieux à des enfants habitués aux soirées tardives.

Le spectacle joue sur les images, la musique, les gestes et des effets de neige ou de vent. Le conseil « dès 8 ans » n'est pas une promesse d'adaptation aux plus petits : avant de réserver pour un enfant plus jeune ou sensible aux effets immersifs, demandez l'avis de la billetterie.

## Quel budget prévoir pour la famille ?

La Maison de la danse affiche un **tarif à l'unité de 20 à 50 € par personne**, selon la catégorie de place. Pour deux adultes et un enfant, comptez donc **60 à 150 €** si chacun achète un billet à l'unité dans cette fourchette ; pour quatre personnes, **80 à 200 €**, hors déplacement et repas. Ce sont des bornes de calcul, pas un devis ni la garantie de places côte à côte à ces prix.

La [page billetterie](https://maisondeladanse.com/information/billetterie) présente aussi des avantages liés à certains abonnements : notamment des places de 8 à 16 € pour les moins de 14 ans accompagnant un abonné sur une sélection comprenant *Slava’s Snowshow*. Cette réduction **n'est pas un tarif enfant universel** pour un achat isolé. Comparez les conditions avant de retenir le prix le plus bas. Vérifiez les disponibilités séance par séance ; la présence d'un horaire au programme ne garantit pas qu'il reste des billets.

## Samedi 5 décembre : que comprend le « samedi en famille » ?

La salle annonce un rendez-vous **à partir de 14 h**, autour du spectacle du samedi 5 décembre. Son programme [Samedis en famille](https://maisondeladanse.com/node/2067) décrit habituellement des propositions gratuites avant ou après certaines représentations : présentation de l'univers du spectacle, goûter et activité partagée selon le rendez-vous.

Attention à la différence entre **la représentation de 11 h**, **celle de 15 h** et **les animations à partir de 14 h**. Le programme consulté ne permet pas d'affirmer que tout billet, notamment celui de 11 h, donne automatiquement accès à toutes les activités. Demandez à la salle le déroulé précis, les âges admis et les éventuelles inscriptions avant de construire votre après-midi autour de ces animations.

## Accès, fauteuil roulant et organisation pratique

La Maison de la danse se trouve **8 avenue Jean Mermoz, 69008 Lyon**, place du Bachut. Consultez les [indications d'accès de la salle](https://maisondeladanse.com/information/deplacer) et votre itinéraire TCL avant de partir. Le parking situé devant le théâtre n'est plus accessible en raison du réaménagement de la place : ne comptez pas vous y garer au dernier moment.

Pour les personnes à mobilité réduite, des places spécifiques en orchestre sont prévues ; l'accès par ascenseur se situe **avenue Général Frère**, sur le côté du théâtre. Des toilettes accessibles sont indiquées au rez-de-chaussée ou au premier étage par ascenseur. Il faut [prévenir la billetterie à l'avance](https://maisondeladanse.com/information/en-situation-de-handicap), au **04 72 78 18 00**, afin de réserver une place adaptée. Les modalités de stationnement des poussettes et les services pour les bébés ne sont pas confirmés pour ce spectacle : renseignez-vous directement auprès de la salle si vous venez avec un tout-petit.

## Prolonger la sortie par un séjour à Lyon

Si vous venez de loin, une nuit peut éviter le retour tardif après une séance du soir. Vous pouvez [comparer les hébergements à Lyon sur Booking.com](https://www.booking.com/city/fr/lyon.fr.html), en vérifiant la capacité réelle de la chambre pour les enfants, les conditions d'annulation et le trajet jusqu'à la Maison de la danse. Aucun tarif ni disponibilité d'hôtel n'est garanti ici.

Le spectacle ne doit pas être confondu avec la Fête des Lumières, qui se déroule en ville du 5 au 8 décembre. Si vous restez pour les illuminations, notre [guide de la Fête des Lumières 2026 à Lyon en famille](https://www.fam-space.fr/articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/) aide à choisir la soirée et à anticiper les déplacements.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/activites/parc-de-courzieu-en-famille-tarifs-horaires-et-conseils-pour-la-visite/ | Parc de Courzieu en famille: tarifs, horaires et conseils pour la visite | activites | Courzieu, Rhône, Auvergne-Rhône-Alpes
- /articles/cuisine/maison-de-la-salers-visite-degustation-et-budget-avec-des-enfants/ | Maison de la Salers: visite, dégustation et budget avec des enfants | cuisine | Saint-Bonnet-de-Salers, Cantal, Auvergne-Rhône-Alpes
- /articles/activites/prehistosite-de-brassempouy-en-famille-horaires-ateliers-et-budget-2026/ | PréhistoSite de Brassempouy en famille: horaires, ateliers et budget 2026 | activites | Brassempouy, Landes, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | Noël 2026 à Brest en famille: marché, projections et horaires | evenements | Brest, Finistère, Bretagne
- /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | Noël des Siècles 2026 à Champs-sur-Marne: billets, budget et horaires en famille | evenements | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | Ville de Noël d’Arras 2026 en famille: horaires, attractions et budget | evenements | Arras, Pas-de-Calais, Hauts-de-France
- /articles/evenements/automne-des-gones-2026-a-lyon-quels-ateliers-gratuits-choisir-avec-les-enfants/ | Automne des gones 2026 à Lyon: ateliers et sorties gratuites en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | Toussaint 2026 au musée des Confluences: cinq rendez-vous pour les enfants | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | Festival Lumière 2026: Laurel & Hardy en famille le 17 octobre à Lyon | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/parentalite/cafe-papote-a-lyon-4e-ou-echanger-gratuitement-avec-d-autres-parents/ | Café Papote à Lyon 4e: où échanger gratuitement avec d'autres parents | parentalite | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/maison/decheteries-mobiles-a-lyon-que-peut-on-deposer-et-quand-preferer-une-decheterie-fixe/ | Déchèteries mobiles à Lyon: que peut-on déposer et quand préférer une déchèterie fixe? | maison | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/vie-pratique/location-de-voiture-a-lyon-avec-des-enfants-ce-qu-il-faut-verifier-avant-de-reserver/ | Location de voiture à Lyon avec des enfants: ce qu'il faut vérifier avant de réserver | vie-pratique | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/voyages/week-end-dans-les-pierres-dorees-en-famille-oingt-jarnioux-et-balades/ | Week-end dans les Pierres Dorées en famille: Oingt, Jarnioux et balades | voyages | Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | Halloween 2026 à Mini World Lyon: la Chasse aux 31 Méchants en famille | evenements | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | Equita Lyon 2026 avec des enfants: billets, Village Enfants et spectacles | evenements | Chassieu, Rhône, Auvergne-Rhône-Alpes
- /articles/sorties/aquarium-de-lyon-en-famille-nouveautes-ocean-360-tarifs-et-visite/ | Aquarium de Lyon en famille: nouveautés Océan 360°, tarifs et visite | sorties | La Mulatière, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/traineau-flottant-du-pere-noel-a-metz-2026-quand-embarquer-en-famille/ | Traîneau flottant de Noël à Metz 2026: dates, horaires et embarquement | evenements | Metz, Moselle, Grand Est
- /articles/evenements/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/ | Saint-Nicolas-de-Port 2026 en famille: village, défilé et procession | evenements | Saint-Nicolas-de-Port, Meurthe-et-Moselle, Grand Est
- /articles/evenements/festival-du-livre-jeunesse-de-rouen-2026-quel-jour-et-quelles-activites-choisir-avec-les-enfants/ | Festival du livre jeunesse de Rouen 2026: dates, tarifs et activités en famille | evenements | Rouen, Seine-Maritime, Normandie
- /articles/evenements/saint-nicolas-2026-a-epinal-en-famille-defile-du-5-decembre-ou-marche-de-noel/ | Saint-Nicolas 2026 à Épinal: cortège du 5 décembre et marché de Noël en famille | evenements | Épinal, Vosges, Grand Est

### Historique Radar lié

- opportunity | /articles/evenements/automne-des-gones-2026-a-lyon-quels-ateliers-gratuits-choisir-avec-les-enfants/ | 2026-10-23T09:31:27.871Z
- opportunity | /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | 2026-10-21T10:43:46.144Z
- opportunity | /articles/evenements/festival-du-livre-jeunesse-de-rouen-2026-quel-jour-et-quelles-activites-choisir-avec-les-enfants/ | 2026-11-02T00:36:18.455Z
- opportunity | /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | 2026-10-10T15:40:28.185Z
- opportunity | /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | 2026-10-19T19:48:02.164Z
- opportunity | /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | 2026-10-22T12:58:21.691Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z
- opportunity | /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | 2026-10-30T06:28:26.726Z
- opportunity | /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | 2026-10-26T18:32:56.730Z
- opportunity | /articles/evenements/saint-nicolas-2026-a-epinal-en-famille-defile-du-5-decembre-ou-marche-de-noel/ | 2026-11-01T21:31:28.158Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
