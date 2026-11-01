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
title: "Festival du livre jeunesse de Rouen 2026 : quel jour venir avec les enfants ?"
subtitle: "Du 6 au 8 novembre : entrée à 3,50 €, gratuités, ateliers à réserver et spectacle dès 6 ans."
summary: Choisir entre visite libre, ateliers du week-end et spectacle du samedi, puis prévoir les billets et les différents lieux du festival.
category: evenements
location:
  city: Rouen
  department: Seine-Maritime
  region: Normandie
keywords:
  - festival livre jeunesse Rouen 2026
  - Rouen enfants 6 7 8 novembre
  - festival livre jeunesse Rouen tarifs ateliers
sources:
  - title: Lis-moi les mots - Festival du livre jeunesse 2026
    url: https://www.lismoilesmots.fr/
  - title: Lis-moi les mots - Informations pratiques et tarifs 2026
    url: https://www.lismoilesmots.fr/festival/informations-pratiques-2026/
  - title: Lis-moi les mots - Programme et temps forts
    url: https://www.lismoilesmots.fr/festival/programme-et-temps-forts/
  - title: Lis-moi les mots - Billetterie officielle HelloAsso
    url: https://www.helloasso.com/associations/lis-moi-les-mots-festival-du-livre-de-jeunesse-de-rouen/evenements/festival-du-livre-de-jeunesse-de-rouen-2026/
  - title: Normandie Livre & Lecture - Animations accessibles du samedi
    url: https://projets.normandielivre.fr/tous-lecteurs-en-normandie/2026/10/23/animations-eja-au-festival-du-livre-jeunesse-de-rouen-2026/
  - title: Centre photographique Rouen Normandie - Plein les yeux !
    url: https://centrephotographique.com/plein_les_yeux/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: festival-du-livre-jeunesse-de-rouen-2026-quel-jour-et-quelles-activites-choisir-avec-les-enfants
  decision: Choisir entre visite libre, atelier ou spectacle selon l'âge et le jour, puis savoir quel billet et quelle inscription prévoir.
  affiliationPotential: Entrée et activités réservables auprès de l'organisateur, sans partenaire billetterie vérifié. Pour un week-end à Rouen, Expedia.fr présente une chambre Familiale 4 personnes à The Originals City, Hôtel Notre Dame, 4 rue de la Savonnerie ; disponibilité et prix aux dates du festival à contrôler.
  gsc:
    retrievedAt: 2026-11-01T04:25:25+01:00
    dataThrough: 2026-10-29
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Lis-moi les mots - Festival du livre jeunesse 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-11-08
---

Le **44e Festival du livre jeunesse de Rouen** accueille les familles du **vendredi 6 au dimanche 8 novembre 2026**, à la Halle aux Toiles. Son thème, « Sorcières, fantômes et autres histoires vraies », se découvre en feuilletant des livres, en rencontrant des artistes ou en participant à des activités. Pour choisir votre journée, la vraie différence se joue entre une visite libre et un atelier ou spectacle à réserver.

## Vendredi, samedi ou dimanche : que choisir ?

**Vendredi 6 novembre, de 10 h à 19 h :** la journée est principalement consacrée aux groupes scolaires. Le public peut néanmoins venir ; son billet s'obtient directement à l'accueil, et non sur la billetterie en ligne du week-end. Si vous venez avec des enfants hors cadre scolaire, privilégiez samedi ou dimanche pour profiter du programme familial annoncé.

**Samedi 7 novembre, de 10 h à 19 h :** c'est le choix le plus riche pour une famille qui veut participer à une activité. En plus des rencontres, lectures et ateliers d'écriture, d'illustration ou de création, plusieurs animations autour de la lecture accessible sont précisément annoncées : médiation animale le matin sur inscription, petits ateliers de fabrication de personnages de 10 h à 12 h avec inscription sur place, ateliers tactiles et braille de 14 h 30 à 16 h, découverte de la langue des signes l'après-midi et conte de sorcières à 16 h. Les inscriptions et places dépendent de chaque activité : consultez le [programme de Normandie Livre & Lecture](https://projets.normandielivre.fr/tous-lecteurs-en-normandie/2026/10/23/animations-eja-au-festival-du-livre-jeunesse-de-rouen-2026/) avant de vous déplacer.

**Dimanche 8 novembre, de 10 h à 18 h :** une bonne option pour découvrir les livres, assister à des lectures, rencontrer les invités et participer à un atelier si un créneau adapté reste disponible. Le programme général annonce des ateliers le samedi et le dimanche, sans garantir les mêmes propositions aux deux dates.

Si votre enfant préfère regarder les livres et découvrir les stands à son rythme, une visite libre suffit : inutile de réserver une activité pour profiter du festival.

## Combien coûte l'entrée et comment réserver ?

L'entrée coûte **3,50 € par personne**, mais elle est **gratuite pour les moins de 18 ans, les étudiants, les bénéficiaires des minima sociaux et les familles nombreuses**, sur justificatif. Ainsi, pour deux adultes payants et deux enfants mineurs, l'entrée revient à **7 € au total**. Une famille nombreuse éligible peut bénéficier de la gratuité.

La [billetterie officielle HelloAsso](https://www.helloasso.com/associations/lis-moi-les-mots-festival-du-livre-de-jeunesse-de-rouen/evenements/festival-du-livre-de-jeunesse-de-rouen-2026/) couvre le **samedi ou le dimanche, au choix** : ne supposez pas qu'un billet donne accès aux deux jours. Même les personnes bénéficiant de la gratuité peuvent prendre leur billet en ligne ou le retirer à l'accueil. Le QR code est échangé contre un bracelet qui permet de sortir et de revenir dans la Halle aux Toiles.

**Pour un atelier ou un spectacle sur inscription, le billet d'entrée au festival ne suffit pas.** Il faut réserver l'activité séparément via les [réservations proposées par l'organisateur](https://www.lismoilesmots.fr/festival/programme-et-temps-forts/). Chaque participant doit également disposer de son billet d'entrée, y compris gratuit. Vérifiez l'âge demandé, les éventuels frais et les places restantes sur la fiche de l'activité choisie : ils ne sont pas identiques ni précisés pour toutes les animations.

## Le spectacle du samedi est-il adapté à votre enfant ?

**« Edgar et la malédiction du corbeau »**, une lecture dessinée et musicale avec Séverine Gauthier, Clément Lefèvre et Agnès Domergue, est annoncé **samedi 7 novembre à 18 h, dès 6 ans**. Il se tient **à l'espace Yannick-Boitrel, à Saint-Léger-du-Bourg-Denis**, et **non à la Halle aux Toiles**. Réservez spécifiquement ce spectacle et prévoyez le déplacement entre les deux lieux si vous passez d'abord la journée au festival.

Autre possibilité pour les enfants attirés par les images : l'exposition **« Plein les yeux ! »** au Centre photographique Rouen Normandie, **15 rue de la Chaîne**, est distincte du salon et se poursuit jusqu'au **30 janvier 2027**. Le centre annonce aussi une **visite en famille dès 3 ans le samedi 7 novembre à 10 h**, gratuite sur réservation auprès du centre. Cette visite ne remplace pas un atelier réservé à la Halle aux Toiles.

## Venir à la Halle aux Toiles avec de jeunes enfants

Le lieu principal se trouve au centre de Rouen, entre la cathédrale et la Seine. Pour une première visite, prévoyez une durée souple : parcourir les stands, faire une pause et assister à une seule activité peut être plus agréable qu'enchaîner plusieurs réservations.

L'organisateur annonce **un îlot dédié au handicap, une salle d'apaisement** et des livres en braille, en gros caractères ou en version audio. C'est un atout si un enfant a besoin d'un espace plus calme. En revanche, les modalités précises pour les poussettes, les toilettes adaptées, le change des bébés et les repas sur place ne sont pas confirmées dans les informations publiées : renseignez-vous auprès de l'organisation si ces services conditionnent votre venue.

## Prolonger la sortie à Rouen

Pour les familles venues de plus loin, **[The Originals City, Hôtel Notre Dame, Rouen](https://www.expedia.fr/Rouen-Hotel-The-Originals-City.h987147.Description-Hotel)** propose une catégorie de **chambre familiale pour quatre personnes** dans le centre-ville. Vérifiez directement le prix et la disponibilité pour votre nuit du 6, 7 ou 8 novembre : aucune chambre n'est garantie à ces dates.

Si vous restez une journée supplémentaire, le guide Fam Space des [musées gratuits autour de Rouen](https://www.fam-space.fr/articles/bons-plans/musees-gratuits-autour-de-rouen-lesquels-choisir-avec-des-enfants/) aide à choisir une visite adaptée aux enfants, en tenant compte des fermetures.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/rouen-sur-mer-2026-en-famille/ | Rouen sur Mer 2026: jeux, ateliers et plage urbaine sur les quais | sorties | Rouen, Seine-Maritime, Normandie
- /articles/parentalite/ludobulle-a-rouen-peut-on-venir-sans-inscription-avec-un-enfant-de-moins-de-4-ans/ | Ludobulle à Rouen: peut-on venir sans inscription avec un enfant de moins de 4 ans? | parentalite | Rouen, Seine-Maritime, Normandie
- /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | Festival du Livre de Colmar 2026 en famille: dates, horaires et animations jeunesse | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | bd BOUM 2026 à Blois en famille: ateliers, expositions et cinéma | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/ | Lire en Poche 2026 à Gradignan avec des enfants: organiser une journée sans perdre les ateliers | evenements | Gradignan, Gironde, Nouvelle-Aquitaine
- /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | Festival MARMOE 2026 à Montreuil: spectacles, ateliers et tarifs en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | Foire du livre de Brive 2026 en famille: dates, auteurs jeunesse et conseils de visite | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine
- /articles/evenements/rouen-givree-2026-en-famille-marche-de-noel-et-refuge-givre/ | Rouen Givrée 2026 en famille: marché de Noël et Refuge Givré | evenements | Rouen, Seine-Maritime, Normandie
- /articles/bons-plans/musees-gratuits-autour-de-rouen-lesquels-choisir-avec-des-enfants/ | Musées gratuits autour de Rouen: lesquels choisir avec des enfants ? | bons-plans | Rouen, Seine-Maritime, Normandie
- /articles/voyages/week-end-a-etretat-en-famille-organiser-deux-jours-autour-des-falaises/ | Week-end à Étretat en famille: organiser deux jours autour des falaises | voyages | Étretat, Seine-Maritime, Normandie
- /articles/sorties/parc-de-cleres-avec-des-enfants-le-pass-famille-vaut-il-le-coup/ | Parc de Clères avec des enfants: le pass famille vaut-il le coup? | sorties | Clères, Seine-Maritime, Normandie
- /articles/cuisine/foire-aux-harengs-de-dieppe-2026-quoi-gouter-et-comment-preparer-la-journee/ | Foire aux Harengs de Dieppe 2026: quoi goûter et comment préparer la journée | cuisine | Dieppe, Seine-Maritime, Normandie
- /articles/evenements/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel/ | Noël 2026 à Chambéry en famille: marchés, parade et ateliers | evenements | Chambéry, Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/noel-2026-a-besancon-en-famille-contes-gratuits-marche-solidaire-ou-artisans/ | Noël 2026 à Besançon en famille: contes, marché solidaire et artisans | evenements | Besançon, Doubs, Bourgogne-Franche-Comté
- /articles/evenements/planete-ocean-a-paris-preparer-la-visite-en-famille/ | Planète Océan à Paris: préparer la visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | Noël 2026 à Paris La Défense en famille: marché, animations et patinoire | evenements | Puteaux, Hauts-de-Seine, Île-de-France
- /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | Noël 2026 à Cannes en famille: marché du centre et Palm Beach | evenements | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | Luminéales du Thabor 2026 à Rennes: tarifs, horaires et visite en famille | evenements | Rennes, Ille-et-Vilaine, Bretagne
- /articles/evenements/tous-en-sons-2026-a-marseille-quel-spectacle-choisir-selon-l-age-des-enfants/ | Tous en Sons ! 2026 à Marseille: spectacles enfants, âges et tarifs | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | Noël 2026 à Toulon en famille: marché, patinoire et horaires | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | Noël à Caen 2026 en famille: marché de Noël et visite illuminée | evenements | Caen, Calvados, Normandie

### Historique Radar lié

- opportunity | /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | 2026-10-18T19:49:09.191Z
- opportunity | /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | 2026-10-20T08:52:25.825Z
- opportunity | /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | 2026-10-25T23:35:17.860Z
- opportunity | /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | 2026-10-18T16:46:58.413Z
- opportunity | /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | 2026-10-31T19:33:18.323Z
- refresh | /articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/ | 2026-10-06T12:23:52.449Z
- opportunity | /articles/evenements/noel-2026-a-besancon-en-famille-contes-gratuits-marche-solidaire-ou-artisans/ | 2026-11-01T06:27:50.817Z
- opportunity | /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | 2026-10-31T22:36:58.800Z
- opportunity | /articles/evenements/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel/ | 2026-11-01T09:37:48.790Z
- opportunity | /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | 2026-11-01T01:35:08.448Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
