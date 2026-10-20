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
title: "ALFest 2026 à Annecy en famille: horaires, jeux et braderie"
subtitle: "Les 14 et 15 novembre à la MJC des Romains: des jeux accessibles gratuitement, des initiations et une braderie à horaires distincts."
summary: "ALFest 2026 à Annecy: samedi ou dimanche avec des enfants, horaires des jeux et de la braderie, soirées dès 6 ans, conditions du jeu de rôle et accès à la MJC."
category: evenements
location:
  city: Annecy
  department: Haute-Savoie
  region: Auvergne-Rhône-Alpes
keywords:
  - ALFest Annecy 2026 famille
  - Annecy Ludique Festival 14 15 novembre 2026
  - ALFest braderie horaires jeux enfants
sources:
  - title: Annecy Ludique - ALFest 2026, programme et informations pratiques
    url: https://www.annecyludique.fr/les-evenements/alfest/
  - title: MJC Forum des Romains - Agenda de la ludothèque
    url: https://www.forumdesromains.org/horaires-et-planning-forumdesromains-annecy-2-2/
  - title: Office de tourisme du lac d'Annecy - Soirée jeux du 14 novembre
    url: https://www.lac-annecy.com/fete-et-manifestation/soiree-jeux-de-societe-annecy-2/
  - title: Léman Express - ALFest 2026
    url: https://www.lemanexpress.com/events/alfest-festival-de-jeux/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie
  decision: Choisir samedi ou dimanche et les espaces de jeu réellement adaptés aux enfants, en distinguant l'entrée libre, les horaires propres à la braderie et les éventuelles conditions d'accès aux sessions de jeu de rôle.
  affiliationPotential: "Entrée générale gratuite: aucune billetterie principale à proposer. Une séance de jeu de rôle annonce une pré-réservation de 5 € rendus sous forme de bon d'achat à la buvette; ne pas la présenter comme un billet d'entrée au festival. Pour les familles venant de loin, Campanile Annecy Centre - Gare sur Booking.com (https://www.booking.com/hotel/fr/campanile-annecy-centre-gare.fr.html): chambres triples/quadruples affichées, près de la gare et non présenté comme immédiatement adjacent à la MJC. Vérifier capacité selon âge, trajet réel vers le festival, tarifs, disponibilité du 14 au 15 novembre et annulation; aucune disponibilité à ces dates n'a été confirmée."
  gsc:
    retrievedAt: 2026-10-20T02:29:02.000Z
    dataThrough: 2026-10-17
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Annecy Ludique - ALFest 2026, programme et informations pratiques »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-11-15
---

**ALFest 2026**, le festival de jeux de l'association Annecy Ludique, se tient **samedi 14 et dimanche 15 novembre** à la **MJC des Romains**, à Annecy. L'entrée est **gratuite**: on peut venir découvrir des jeux de société, rencontrer des joueurs de figurines ou parcourir la braderie sans acheter de billet général.

Pour une sortie avec des enfants, le choix dépend surtout des horaires: les tables de jeux sont accessibles pendant le festival, mais **la braderie, la soirée de la ludothèque et les parties de jeu de rôle ont leurs propres modalités**.

## Samedi ou dimanche: quand venir?

D'après le [programme de l'organisateur Annecy Ludique](https://www.annecyludique.fr/les-evenements/alfest/), les horaires du festival sont:

- **Samedi 14 novembre: 14h à 1h du matin** (dans la nuit de samedi à dimanche).
- **Dimanche 15 novembre: 9h à 18h**.

Le samedi convient notamment à une sortie l'après-midi, avec possibilité de rester plus tard pour jouer. La ludothèque de la MJC propose en parallèle une **soirée jeux de 17h à 23h**. Selon l'[office de tourisme du lac d'Annecy](https://www.lac-annecy.com/fete-et-manifestation/soiree-jeux-de-societe-annecy-2/), cette soirée est **gratuite, sans inscription et accessible aux enfants à partir de 6 ans**. Cette limite d'âge concerne **la soirée annoncée par la ludothèque**, pas nécessairement l'ensemble d'ALFest.

Le dimanche permet de venir dès le matin. En revanche, les jeux ne sont pas tous programmés à heure fixe et l'annonce générale ne garantit pas une partie ou un animateur précis au moment souhaité. Si vous venez pour un tournoi ou une initiation particulière, vérifiez son déroulement auprès d'Annecy Ludique avant de vous déplacer.

## Jeux de société, figurines et jeu de rôle: quelle formule choisir?

Pour découvrir plusieurs jeux en famille, commencez par les **tables de jeux de société en libre accès**. L'association et la ludothèque mettent des jeux à disposition; des bénévoles présents sur place peuvent expliquer les règles. Annecy Ludique précise toutefois que **tous les jeux de son catalogue ne seront pas forcément disponibles**. Si les enfants souhaitent essayer un titre précis, mieux vaut contacter l'association en amont.

Les amateurs de figurines trouveront une **salle dédiée**. Nouveauté annoncée pour 2026: une **initiation à la peinture sur figurines** tout au long du week-end, avec la possibilité de repartir avec sa création. Le programme mentionne aussi des tournois et des animations, sans donner pour chacun un âge minimum ou un horaire garanti.

Pour une première partie de **jeu de rôle**, une table d'initiation est prévue. Attention aux conditions: l'[organisateur annonce une pré-réservation de 5 €](https://www.annecyludique.fr/les-evenements/alfest/), compensée sur place par **un bon de 5 € à utiliser à la buvette**, mais précise également que les réservations des séances se feront **sur place**, dans la limite des places. Ces deux indications ne définissent pas clairement comment sécuriser une place avant de venir: demandez confirmation à l'association, ainsi que l'âge et la durée de la séance visée. **Ces 5 € ne sont pas le prix d'entrée du festival.**

## Braderie: attention aux horaires différents

La braderie rassemble des **jeux d'occasion proposés à la vente par les membres de l'association**, distinctement des tables où l'on joue gratuitement.

Selon les **horaires actuellement affichés par Annecy Ludique**, elle ouvre:

- **Samedi: 14h à 20h**.
- **Dimanche: 10h à 16h**.

Le festival ouvre donc **une heure avant la braderie le dimanche** et ferme **deux heures après elle**. Si vous venez surtout pour acheter un jeu, ne prévoyez pas d'arriver à la toute fin du festival. Les achats à la braderie restent bien sûr payants.

## Adresse, bus et services avec des enfants

ALFest se déroule à la **MJC des Romains, 28 avenue du Parc des Sports, 74000 Annecy**. L'organisateur précise que **l'entrée du festival se fait par l'arrière du bâtiment**, un détail utile lorsqu'on arrive pour la première fois.

En transports en commun, Annecy Ludique indique la **ligne 5, arrêt MJC des Romains**. Vérifiez les passages du week-end et le retour, en particulier si vous restez le samedi soir. Notre guide [**Bus à Annecy avec des enfants: quel ticket choisir?**](/articles/vie-pratique/bus-a-annecy-avec-des-enfants-quel-ticket-choisir-et-comment-eviter-les-galeres/) détaille les titres et les solutions pour circuler en famille.

Une **buvette** et de quoi se restaurer sont annoncés. En revanche, les informations publiées ne confirment pas l'accessibilité précise de chaque salle, les conditions de circulation avec une poussette ou les équipements pour bébés. Si l'un de ces points détermine votre visite, contactez l'organisation ou la MJC **avant** le week-end.

## Dormir à Annecy pour le week-end du festival

Si vous venez de loin et voulez prolonger la sortie, le [**Campanile Annecy Centre - Gare sur Booking.com**](https://www.booking.com/hotel/fr/campanile-annecy-centre-gare.fr.html) est une option près de la gare, **pas à côté de la MJC des Romains**. Des **chambres triples et quadruples** figurent parmi les catégories proposées. Vérifiez leur capacité selon l'âge et le nombre d'enfants, le trajet entre l'hôtel et le festival et, avant de réserver, **le prix, la disponibilité du 14 au 15 novembre et les conditions d'annulation**. La disponibilité pour ces dates n'est pas confirmée.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/court-circuit-2026-a-annecy-en-famille-spectacles-tarifs-et-conseils/ | Court Circuit 2026 à Annecy en famille: spectacles, tarifs et conseils | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/fete-du-lac-annecy-2026-en-famille/ | Fête du lac d’Annecy 2026: préparer la soirée avec des enfants | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/vie-pratique/bus-a-annecy-avec-des-enfants-quel-ticket-choisir-et-comment-eviter-les-galeres/ | Bus à Annecy avec des enfants: quel ticket choisir et comment éviter les galères | vie-pratique | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-cite-en-jeux-2026-a-colomiers-quel-jour-choisir-avec-des-enfants/ | Festival Cité en Jeux 2026 à Colomiers: quel jour choisir avec des enfants | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/evenements/festival-du-cirque-du-val-d-oise-2026-en-famille-tarifs-horaires-et-conseils/ | Festival du Cirque du Val d'Oise 2026 en famille: tarifs, horaires et conseils | evenements | Domont, Val-d'Oise, Île-de-France
- /articles/evenements/festival-au-bonheur-des-momes-2026-en-famille/ | Au Bonheur des Mômes 2026: pass, spectacles et journée au Grand-Bornand | evenements | Le Grand-Bornand, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/maison/renovation-energetique-en-haute-savoie-jusqu-a-3-000-d-aide-departementale/ | Rénovation énergétique en Haute-Savoie: jusqu'à 3 000 € d'aide départementale | maison | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/cuisine/ferme-du-petit-mont-a-bellevaux-en-famille-quelle-formule-choisir/ | Ferme du Petit Mont à Bellevaux en famille: quelle formule choisir ? | cuisine | Bellevaux, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/activites/mer-de-glace-avec-des-enfants-faut-il-descendre-jusqu-a-la-grotte/ | Mer de Glace avec des enfants: faut-il descendre jusqu'à la grotte? | activites | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/voyages/evian-les-bains-en-famille-pendant-3-jours-lac-balades-et-activites-faciles/ | Évian-les-Bains en famille pendant 3 jours: lac, balades et activités faciles | voyages | Évian-les-Bains, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | Fêtes de Saint-Nicolas 2026 à Nancy en famille: défilé, villages et animations | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | Marché de Noël de Mulhouse 2026 en famille: horaires, étoffe et animations | evenements | Mulhouse, Haut-Rhin, Grand Est
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | bd BOUM 2026 à Blois en famille: ateliers, expositions et cinéma | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | Foire du livre de Brive 2026 en famille: dates, auteurs jeunesse et conseils de visite | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine

### Historique Radar lié

- opportunity | /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | 2026-10-18T19:49:09.191Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- opportunity | /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | 2026-10-19T19:48:02.164Z
- opportunity | /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | 2026-10-19T16:47:56.278Z
- opportunity | /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | 2026-10-18T16:46:58.413Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | 2026-10-19T09:37:22.517Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | 2026-10-15T05:30:56.094Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
