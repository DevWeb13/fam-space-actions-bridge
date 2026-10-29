# Radar Fam Space - Phase 2/3

## Mission

Radar utilise Google Search Console et la recherche web pour choisir le travail éditorial qui apporte le plus de valeur à Fam Space: améliorer une page réellement perfectible, développer une intention proche d'une page forte, ou publier à temps une opportunité locale/saisonnière. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 2/3

Tu es journaliste web et responsable du parcours lecteur. Le candidat validé de phase 1 est fourni intégralement plus bas. Pour un refresh, l'article source exact est fourni intégralement plus bas.

Un refresh utilise l'ancien article comme référence interne, mais le résultat doit se lire comme un article actuel et autonome. Toute information encore vraie et utile doit rester, notamment prix décisionnels, durées, réservation, âge/taille, accessibilité, accès, contraintes, services bébé/enfants, repas et autres détails pratiques; une information fausse, périmée ou réellement redondante peut être retirée.

Suis le diagnostic éditorial du brief:
- `rank_loss`: réponds mieux aux intentions réellement en recul;
- `coverage_loss`: améliore la couverture utile sans présenter cela comme une perte de ranking;
- `uncertain`: applique uniquement la raison éditoriale indépendante vérifiée;
- opportunity: construis l'article autour de la décision choisie en phase 1. Le titre, le sous-titre et le résumé de phase 1 sont des formulations de travail: réévalue-les à partir de l'article final au lieu de reprendre mécaniquement la formulation de la décision.

Utilise des sources directement responsables. Les sources utilisées figurent dans `sources` et sont liées dans le corps lorsqu'elles ne concurrencent pas une offre partenaire. Aucun H1, tableau Markdown ou section Sources.

Sélectionne l'information au lieu de l'épuiser. Une information importante doit normalement apparaître une seule fois: l'introduction, les sections et la fin ne doivent pas redire la même chose. Une conclusion n'est pas obligatoire si elle ne fait que résumer. La structure doit découler du sujet et il n'existe aucun objectif de longueur; arrête-toi lorsque le sujet est traité complètement, sans remplissage.

Applique directement les règles partenaires ci-dessous.

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


Sélectionne seulement les liens internes réellement utiles et vérifie les routes avant usage. Lorsqu'une autre page Fam Space traite déjà correctement un sous-sujet, donne uniquement le contexte nécessaire puis renvoie vers cette page au lieu de refaire son contenu. Dans le texte public, oriente simplement le lecteur vers cette page sans commenter l'organisation éditoriale entre les articles. Le maillage doit prolonger la lecture et réduire les répétitions entre articles, pas seulement ajouter des liens.

Si du contenu temporaire est ajouté à un evergreen, utilise `reviewAt`; pour un événement pur, utilise `eventEndsAt`.

Soumets le résultat via `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet. **Ne recopie aucun bloc `radar` et ne fournis aucune branche ni aucun SHA.** La plomberie mécanique conserve le diagnostic GSC, la cible, le slug et les champs protégés.

## Candidat validé de la phase précédente

---
title: "Noël des Alpes 2026 à Annecy en famille : marché, patinoire ou illuminations ?"
subtitle: "Du 26 novembre au 3 janvier : choisir son parcours entre les quais, les Jardins de l'Europe et la vieille ville"
summary: "Noël des Alpes 2026-2027 à Annecy : dates officielles, lieux du marché, patinoire, Père Noël, illuminations et conseils pour une sortie avec des enfants."
category: evenements
location:
  city: Annecy
  department: Haute-Savoie
  region: Auvergne-Rhône-Alpes
keywords:
  - Noël des Alpes Annecy 2026
  - marché de Noël Annecy 2026
  - patinoire jardins de l'Europe Annecy
  - Père Noël Annecy ancienne Grenette
sources:
  - title: Office de tourisme du lac d'Annecy — Noël des Alpes, informations mises à jour par la Ville
    url: https://www.lac-annecy.com/fete-et-manifestation/noel-des-alpes-annecy/
  - title: Office de tourisme du lac d'Annecy — Illuminations des bâtiments historiques
    url: https://www.lac-annecy.com/fete-et-manifestation/noel-des-alpes-illuminations-des-batiments-historiques-annecy/
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations
  decision: "Choisir une sortie de Noël adaptée à l'âge des enfants, au temps disponible et au budget : marché et Père Noël, patinoire, ou illuminations en soirée ; savoir où aller et quelles informations vérifier avant de partir."
  affiliationPotential: "Marché en accès libre : pas de billet à vendre. Pour un week-end, Booking.com propose Le Pâquier - MyCosyApart, appartement de trois chambres en vieille ville près du lac : https://www.booking.com/hotel/fr/apartment-6-people-in-the-heart-of-annecy.fr.html ; vérifier capacité, dates et conditions à la rédaction."
  gsc:
    retrievedAt: 2026-10-29T02:27:59+01:00
    dataThrough: 2026-10-26
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Office de tourisme du lac d'Annecy — Noël des Alpes, informations mises à jour par la Ville »; aucune page forte GSC n'est requise.
---

## Mission retenue
Préparer le Noël des Alpes 2026-2027 à Annecy avec des enfants, en distinguant les activités réparties dans le centre et au bord du lac.

## Pourquoi cette mission
L'office de tourisme publie déjà les dates 2026 et les principaux lieux, un mois avant l'ouverture. Aucun article Noël des Alpes/Noël à Annecy dans le catalogue de 839 articles ni dans l'historique Radar ; les autres pages Annecy portent sur les bus, la fête du lac ou des événements sans rapport. Le meilleur refresh GSC, Futuroween (662 à 316 impressions, signal « uncertain »), a été lu intégralement : article déjà utile et documenté, événement finissant le 1er novembre, aucune amélioration indépendante décisive constatée. L'expansion de la page forte « Transports à Paris avec des enfants » (2 675 impressions récentes) passe après : les décisions proches sont déjà couvertes par les pages poussette, Orly, CDG et Navigo Liberté+.

## Décision du lecteur
Choisir entre une balade gratuite au marché et à la rencontre du Père Noël, une sortie avec patinoire, ou une visite après la tombée de la nuit, sans confondre les lieux ni les conditions d'accès.

## Faits à traiter
- **Confirmé par la Ville via l'office :** du 26 novembre 2026 au 3 janvier 2027 ; accès libre au marché ; chalets sur les quais de Vicenza, Bayreuth et Napoléon III jusqu'aux Jardins de l'Europe ; patinoire et zone festive dans les jardins ; Père Noël place de l'Ancienne Grenette.
- Illuminations des bâtiments historiques : trois sites annoncés (Conservatoire, tour de l'horloge de la porte Sainte-Claire, église Notre-Dame-de-Liesse). Créneau 17 h–23 h 45 affiché **avec mention « dates à confirmer »** : le présenter comme provisoire.
- Vérifier avant rédaction les horaires précis par zone, tarifs et conditions de la patinoire, jours de présence du Père Noël, activités adaptées aux petits, accès en poussette, sanitaires et trajets depuis la gare. Ne pas recycler les horaires ni les nombres de chalets de 2025 comme faits 2026.

## Sources de départ
Les deux fiches officielles indiquées en frontmatter, actualisées par la Ville d'Annecy.

## Affiliation
L'accès au marché est gratuit ; aucune billetterie partenaire équivalente vérifiée. Pour une famille prolongeant la visite, hébergement Booking.com précis vérifié : Le Pâquier - MyCosyApart, trois chambres et cuisine près du lac (URL ci-dessus). Ne pas annoncer de prix ni de disponibilité sans dates.

## Continuations internes
- Renvoyer vers « Bus à Annecy avec des enfants : quel ticket choisir » pour le détail des transports, sans le recopier.
- Rester centré sur Noël des Alpes : la page « Fête du lac d'Annecy 2026 » concerne un autre événement, pas une source de programme hivernal.
- Si le programme des spectacles et la tarification de la patinoire ne sont pas encore publiés, indiquer précisément ce qui reste à confirmer et prévoir une vérification avant le 26 novembre.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/fete-du-lac-annecy-2026-en-famille/ | Fête du lac d’Annecy 2026: préparer la soirée avec des enfants | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/vie-pratique/bus-a-annecy-avec-des-enfants-quel-ticket-choisir-et-comment-eviter-les-galeres/ | Bus à Annecy avec des enfants: quel ticket choisir et comment éviter les galères | vie-pratique | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/court-circuit-2026-a-annecy-en-famille-spectacles-tarifs-et-conseils/ | Court Circuit 2026 à Annecy en famille: spectacles, tarifs et conseils | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | ALFest 2026 à Annecy en famille: horaires, jeux et braderie | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | Noël à Toulouse 2026 en famille: marchés, Père Noël et patinoire | evenements | Toulouse, Haute-Garonne, Occitanie
- /articles/parentalite/laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit/ | LAEP autour d'Annecy: trois lieux pour jouer avec son tout-petit | parentalite | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | Noël à Fontevraud 2026: patinoire, marché, dates et tarifs en famille | evenements | Fontevraud-l'Abbaye, Maine-et-Loire, Pays de la Loire
- /articles/maison/renovation-energetique-en-haute-savoie-jusqu-a-3-000-d-aide-departementale/ | Rénovation énergétique en Haute-Savoie: jusqu'à 3 000 € d'aide départementale | maison | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/cuisine/ferme-du-petit-mont-a-bellevaux-en-famille-quelle-formule-choisir/ | Ferme du Petit Mont à Bellevaux en famille: quelle formule choisir ? | cuisine | Bellevaux, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/activites/mer-de-glace-avec-des-enfants-faut-il-descendre-jusqu-a-la-grotte/ | Mer de Glace avec des enfants: faut-il descendre jusqu'à la grotte? | activites | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/voyages/evian-les-bains-en-famille-pendant-3-jours-lac-balades-et-activites-faciles/ | Évian-les-Bains en famille pendant 3 jours: lac, balades et activités faciles | voyages | Évian-les-Bains, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-au-bonheur-des-momes-2026-en-famille/ | Au Bonheur des Mômes 2026: pass, spectacles et journée au Grand-Bornand | evenements | Le Grand-Bornand, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/la-seine-musicale-en-famille-en-2027-quels-concerts-et-ateliers-selon-l-age/ | La Seine Musicale en famille en 2027: quels concerts et ateliers selon l'âge ? | evenements | Boulogne-Billancourt, Hauts-de-Seine, Île-de-France
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires et accès | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir/ | Festival des Jeux de Cannes 2027 en famille: billets, âges et visite | evenements | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans/ | Foulée Blanche 2027 en famille: courses, âges, tarifs et programme à Autrans | evenements | Autrans-Méaudre en Vercors, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/batiment-b-a-saint-denis-decouvrir-le-street-art-en-famille/ | Bâtiment B à Saint-Denis: découvrir le street art en famille | evenements | Saint-Denis, La Réunion, La Réunion
- /articles/evenements/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/ | Noël 2026 au château royal de Blois: décors, spectacles et tarifs en famille | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants/ | Marie-Antoinette à Fontainebleau 2026-2027: exposition, visites et tarifs en famille | evenements | Fontainebleau, Seine-et-Marne, Île-de-France
- /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | Féeries de Noël 2026 à Paris: parcours lumineux, billets et patinoire en famille | evenements | Paris, Paris, Île-de-France

### Historique Radar lié

- opportunity | /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | 2026-10-20T15:29:27.541Z
- opportunity | /articles/evenements/festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir/ | 2026-10-28T09:26:08.391Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- opportunity | /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | 2026-10-27T13:28:21.076Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- opportunity | /articles/evenements/marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants/ | 2026-10-27T18:27:41.322Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/ | 2026-10-27T22:28:21.356Z
- opportunity | /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | 2026-10-28T01:34:03.741Z
- opportunity | /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | 2026-10-24T23:34:36.270Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
