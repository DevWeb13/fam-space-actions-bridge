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
title: "Saint-Nicolas 2026 à Nancy en famille: défilé ou visite plus calme?"
subtitle: "Le 5 décembre pour les chars, les autres jours pour les lumières et les villages: comment choisir avec des enfants."
summary: "Fêtes de Saint-Nicolas à Nancy du 20 novembre 2026 au 3 janvier 2027: défilé du 5 décembre, mapping gratuit, villages, animations familiales et conseils pour venir."
category: evenements
location:
  city: Nancy
  department: Meurthe-et-Moselle
  region: Grand Est
keywords:
  - fêtes Saint-Nicolas Nancy 2026 en famille
  - grand défilé Saint-Nicolas Nancy 5 décembre 2026
  - villages Saint-Nicolas Nancy enfants
sources:
  - title: Ville de Nancy - édition 2026 des Fêtes de Saint-Nicolas
    url: https://saint-nicolas.nancy.fr/edition-2026
  - title: Ville de Nancy - agenda des Fêtes de Saint-Nicolas
    url: https://saint-nicolas.nancy.fr/vos-rendez-vous
  - title: Office de tourisme Destination Nancy - les Fêtes de Saint-Nicolas
    url: https://www.destination-nancy.com/temps-fort/les-fetes-de-saint-nicolas/
  - title: Destination Nancy - mapping vidéo Saint-Nicolas
    url: https://www.destination-nancy.com/temps-fort/mapping-video-saint-nicolas/
  - title: Destination Nancy - dossier de presse 2026
    url: https://www.destination-nancy.com/app/uploads/2026/02/dossier-de-presse-2026-compressed.pdf
  - title: Ville de Nancy - flashmob Ânes-Stram-Gram 2026
    url: https://saint-nicolas.nancy.fr/saint-nicolas-et-nancy/etre-acteur-des-fetes/anes-stram-gram
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite
  decision: "Choisir un jour adapté à l'âge des enfants: venir pour le grand défilé du 5 décembre et accepter son affluence, ou privilégier une visite plus souple des villages et installations sur les autres dates, en distinguant le programme 2026 confirmé des animations encore à annoncer."
  affiliationPotential: "Festivités de rue sans billetterie partenaire exacte à proposer. Pour un séjour avec nuit, ibis Nancy Centre Stanislas sur Booking.com (https://www.booking.com/hotel/fr/ibis-sainte-catherine.fr.html): chambres familiales et hôtel à environ 500 m de la place Stanislas; contrôler composition des chambres, disponibilité, tarifs et conditions aux dates choisies."
  gsc:
    retrievedAt: 2026-10-19T04:30:00.000Z
    dataThrough: 2026-10-16
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Nancy - édition 2026 des Fêtes de Saint-Nicolas »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-03
---

Les **Fêtes de Saint-Nicolas à Nancy** se déroulent **du 20 novembre 2026 au 3 janvier 2027**. Avec des enfants, deux expériences très différentes sont possibles: venir **samedi 5 décembre** pour le grand défilé, ses chars et son ambiance de foule, ou choisir un autre jour pour profiter plus tranquillement des villages, des illuminations et du spectacle sur la place Stanislas.

La [Ville de Nancy](https://saint-nicolas.nancy.fr/edition-2026) confirme les grandes animations de l'édition 2026, mais **les horaires détaillés et le parcours du défilé ne sont pas encore tous publiés**. Ne vous fiez donc pas à un ancien programme pour fixer votre heure d'arrivée.

## Le samedi 5 décembre: le grand défilé, mais beaucoup de monde

Le **grand défilé de Saint-Nicolas aura lieu samedi 5 décembre 2026**, sur le thème **« Légendes & Chimères »**. C'est le rendez-vous à privilégier pour voir les chars et les artistes défiler en ville. L'[office de tourisme Destination Nancy](https://www.destination-nancy.com/temps-fort/les-fetes-de-saint-nicolas/) rappelle que **130 000 spectateurs ont assisté au défilé de 2025**: une indication utile de l'affluence possible, et non une prévision pour 2026.

**L'heure de départ, l'itinéraire exact, les points d'accès et les éventuels emplacements adaptés aux familles pour 2026 restent à confirmer**. Le parcours de 2025, qui passait notamment par la place Carnot et la place de la Carrière, ne doit pas être considéré comme celui de 2026. Avant de partir, vérifiez le programme de l'année et les éventuelles restrictions de circulation.

Avec un bébé en poussette ou un enfant qui supporte mal le bruit et les longues attentes, une visite hors du grand défilé peut être plus agréable. Si le défilé est votre priorité, choisissez **un seul emplacement** une fois le parcours officiel annoncé, arrivez en avance et prévoyez vêtements chauds, pause toilettes et solution de retour sans traverser le cortège. Un porte-bébé peut être plus pratique qu'une poussette au milieu d'une foule dense.

## Pour une sortie plus souple: villages et lumières

Les festivités ne se limitent pas au premier week-end de décembre. La Ville annonce **villages et hameaux gourmands, installations artistiques, spectacles et déambulations** pendant la période des fêtes. Le [dossier de presse 2026 de Destination Nancy](https://www.destination-nancy.com/app/uploads/2026/02/dossier-de-presse-2026-compressed.pdf) évoque aussi chalets d'artisans, manèges, grande roue et patinoire.

**Attention aux dates et aux lieux précis:** cette présentation générale ne confirme pas encore les horaires de chaque village ni les conditions d'accès de chaque attraction pour 2026. Les manèges et autres activités peuvent entraîner des dépenses; ne partez pas du principe que tout est gratuit.

Un point de repère déjà confirmé est le **mapping vidéo Saint-Nicolas, place Stanislas**, annoncé **du 20 novembre au 3 janvier**. Ce spectacle **gratuit**, projeté sur la façade de l'Hôtel de Ville, raconte la légende de saint Nicolas en images, musique et narration pendant **une dizaine de minutes**. L'[office de tourisme le présente ici](https://www.destination-nancy.com/temps-fort/mapping-video-saint-nicolas/). Le dossier de presse annonce des projections chaque soir, mais **les heures précises des séances restent à vérifier** avant de venir avec de jeunes enfants.

Pour une première découverte en famille, mieux vaut prévoir une promenade autour de la place Stanislas, un passage dans un village ouvert ce jour-là et le mapping, plutôt que chercher à parcourir tous les sites en une seule soirée.

## D'autres dates pour les enfants, sans attendre le défilé

Le **dimanche 6 décembre**, la compagnie Ânes-Stram-Gram prévoit un **flashmob festif place Stanislas**. Pour les enfants qui voudraient *participer* à la représentation, la [Ville indique un âge minimum de 8 ans](https://saint-nicolas.nancy.fr/saint-nicolas-et-nancy/etre-acteur-des-fetes/anes-stram-gram), une inscription et des conditions d'accompagnement des mineurs. Il ne faut pas confondre ces règles de participation avec l'accès du public au spectacle.

Le **week-end des 12 et 13 décembre**, le dossier de presse 2026 annonce également **Saint-Nicolas sur l'eau**. C'est une alternative pour une famille attirée par les animations lumineuses plutôt que par le grand cortège, sous réserve de vérifier le programme précis et le lieu de rendez-vous lorsqu'ils seront publiés.

D'autres rendez-vous apparaissent déjà dans l'[agenda officiel des Fêtes](https://saint-nicolas.nancy.fr/vos-rendez-vous/): un spectacle jeune public **mercredi 2 décembre à la salle Sainte-Anne**, des animations en Vieille Ville et dans plusieurs quartiers **mercredi 9 décembre**, puis **Saint Nicolas au parc Olry samedi 12 décembre**. Pour ces propositions de proximité, consultez la fiche de chaque événement: âge conseillé, horaires, gratuité et réservation éventuelle varient d'une activité à l'autre.

## Gratuit ou payant: que prévoir?

Le **mapping de la place Stanislas est explicitement annoncé gratuit**. La promenade dans les rues et sur les places n'exige pas de billet, mais les achats dans les chalets, les repas et certaines attractions constituent un budget séparé. **Aucun tarif 2026 vérifié** ne permet encore de chiffrer ici une séance de patinoire, un tour de manège ou de grande roue.

Pour les spectacles et ateliers des quartiers, vérifiez sur l'agenda de la Ville la mention **« sur réservation »** et les conditions propres à l'activité choisie. Ne réservez pas une prestation simplement parce qu'elle figurait au programme de l'année précédente.

## Venir à Nancy et circuler avec une poussette

La **gare Nancy-Ville** permet d'arriver directement au centre sans voiture. La place Stanislas est accessible à pied depuis la gare, mais le temps de marche et le trajet adapté dépendront du lieu exact de l'animation et des restrictions du jour.

Si vous venez en voiture, les **parkings-relais du réseau Stan** sont souvent plus simples que de chercher à se garer à proximité du défilé. Le réseau est **gratuit pour tous les samedis, dimanches et jours fériés**, selon les règles habituelles, mais il faut contrôler les dessertes et déviations spéciales du 5 décembre. Notre guide [**Se déplacer à Nancy en famille: gratuités, bus et parkings relais**](/articles/vie-pratique/se-deplacer-a-nancy-en-famille-gratuites-bus-et-parkings-relais/) détaille les titres, les exceptions des P+R et les règles pour les poussettes.

Avec de petits enfants, prévoyez des couches chaudes, des chaussures qui ne glissent pas, une pause au chaud et une marge pour le retour. Ne supposez pas que toutes les animations annoncées pour les fêtes sont accessibles avec une poussette sans vérifier leur emplacement et leurs modalités.

## Dormir près des festivités pour éviter un retour tardif

Si vous venez de loin pour le défilé ou le mapping en soirée, une nuit sur place peut éviter un trajet de retour avec des enfants fatigués. L'[**ibis Nancy Centre Stanislas sur Booking.com**](https://www.booking.com/hotel/fr/ibis-sainte-catherine.fr.html), au **42 avenue du 20e Corps**, est situé à environ **500 mètres de la place Stanislas** et propose des **chambres familiales**. La gamme comprend notamment une configuration avec lit double et canapé-lit; vérifiez le nombre de couchages réellement adapté à vos enfants, les conditions d'annulation, le tarif et la disponibilité pour la nuit choisie.

Pour une sortie le 5 décembre, réservez seulement après avoir vérifié que le lieu et les conditions d'accès correspondent bien à votre programme. La [page 2026 de la Ville](https://saint-nicolas.nancy.fr/edition-2026) et son agenda restent les références pour les annonces définitives.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/fete-saint-louis-fontainebleau-2026-famille/ | Fête de la Saint-Louis 2026 à Fontainebleau: une journée gratuite en famille au Grand Canal | evenements | Fontainebleau, Seine-et-Marne, Île-de-France
- /articles/evenements/festival-echo-mots-champsaur-2026/ | Festival L’Écho des mots 2026 dans le Champsaur: quatre jours de spectacles en famille | evenements | Saint-Jean-Saint-Nicolas, Hautes-Alpes, Provence-Alpes-Côte d'Azur
- /articles/evenements/fete-cloture-ete-saint-andre-2026-famille/ | Fête de clôture de l’été 2026 à Saint-André-les-Vergers: une après-midi gratuite en famille | evenements | Saint-André-les-Vergers, Aube, Grand Est
- /articles/activites/noel-2026-a-l-ecomusee-d-alsace-en-famille-quand-venir-et-que-prevoir/ | Noël 2026 à l'Écomusée d'Alsace en famille: quand venir et que prévoir? | activites | Ungersheim, Haut-Rhin, Grand Est
- /articles/evenements/habits-de-lumiere-a-epernay-avec-des-enfants-quel-jour-choisir-en-2026/ | Habits de Lumière à Épernay avec des enfants: quel jour choisir en 2026? | evenements | Épernay, Marne, Grand Est
- /articles/evenements/equidays-2026-en-famille-dans-le-calvados-villages-gratuits-parade-et-animations/ | Équidays 2026 en famille dans le Calvados: villages gratuits, parade et animations | evenements | Caen, Calvados, Normandie
- /articles/evenements/l-ours-et-la-louve-a-sarlat-faut-il-reserver-pour-ce-spectacle-gratuit-des-3-ans/ | L'Ours et la Louve à Sarlat: faut-il réserver pour ce spectacle gratuit dès 3 ans? | evenements | Sarlat-la-Canéda, Dordogne, Nouvelle-Aquitaine
- /articles/vie-pratique/se-deplacer-a-nancy-en-famille-gratuites-bus-et-parkings-relais/ | Se déplacer à Nancy en famille: gratuités, bus et parkings relais | vie-pratique | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/evenements/nancy-jazz-pulsations-2026-en-famille-spectacles-enfants-tarifs-et-conseils/ | Nancy Jazz Pulsations 2026 en famille: spectacles enfants, tarifs et conseils | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/activites/patrimoine-en-partage-a-luneville-faut-il-inscrire-son-enfant-pour-toute-la-semaine/ | Patrimoine en partage à Lunéville: faut-il inscrire son enfant pour toute la semaine? | activites | Lunéville, Meurthe-et-Moselle, Grand Est
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | bd BOUM 2026 à Blois en famille: ateliers, expositions et cinéma | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | Foire du livre de Brive 2026 en famille: dates, auteurs jeunesse et conseils de visite | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine
- /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | Halloween 2026 à la Mer de Sable: spectacles, frissons et billets en famille | evenements | Ermenonville, Oise, Hauts-de-France
- /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | Toussaint 2026 à Nausicaá: ateliers en journée et nocturne d’Halloween | evenements | Boulogne-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | Métamorphoses 2026 au quai Branly: séances gratuites et films par âge | evenements | Paris, Paris, Île-de-France
- /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | Festival du Film pour Enfants 2026 en Isère: séances, ateliers et tarifs | evenements | Vizille, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | Festi'Mômes 2026 à Nantes: séances, spectacles et tarifs en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | Automnales d'Harcourt 2026: animations, visites et tarifs en famille | evenements | Harcourt, Eure, Normandie
- /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | Toussaint 2026 au musée des Confluences: cinq rendez-vous pour les enfants | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | 2026-10-16T06:56:21.314Z
- opportunity | /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | 2026-10-18T19:49:09.191Z
- opportunity | /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | 2026-10-17T11:48:00.184Z
- opportunity | /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | 2026-10-17T15:41:33.883Z
- opportunity | /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | 2026-10-18T16:46:58.413Z
- opportunity | /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | 2026-10-18T12:12:00.071Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | 2026-10-18T04:19:39.869Z
- opportunity | /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | 2026-10-18T08:44:05.495Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
