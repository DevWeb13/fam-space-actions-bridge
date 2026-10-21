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
title: "Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget"
subtitle: Comment choisir son moment, profiter des ateliers et venir aux Quinconces sans mauvaise surprise
summary: Le marché de Noël de Bordeaux revient aux Quinconces du 27 novembre au 27 décembre 2026. Horaires, activités pour enfants, tram et dépenses à prévoir.
category: evenements
location:
  city: Bordeaux
  department: Gironde
  region: Nouvelle-Aquitaine
keywords:
  - marché de Noël Bordeaux 2026
  - marché de Noël Quinconces enfants
  - animations de Noël Bordeaux en famille
sources:
  - title: Bordeaux Mon Commerce - Site officiel du marché de Noël
    url: https://www.marche-de-noel-bordeaux.com/
  - title: Office de tourisme de Bordeaux - Marché de Noël 2026
    url: https://www.bordeaux-tourisme.com/noel/marche
  - title: Bordeaux Métropole - Agenda du marché de Noël
    url: https://www.bordeaux-metropole.fr/agenda/20724859_mercado-de-navidad-en-burdeos
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces
  decision: Choisir quand venir avec des enfants, quelles animations viser sans les présumer gratuites, comment rejoindre les Quinconces en tram et quelles dépenses prévoir.
  affiliationPotential: "Entrée libre: pas de billet partenaire à vendre. Pour un week-end, vérifier les chambres familiales à proximité chez Hôtel Majestic ou Quality Hotel Bordeaux Centre, tous deux référencés sur Booking.com; prix et disponibilité selon les dates."
  gsc:
    retrievedAt: 2026-10-21T05:02:00.000Z
    dataThrough: 2026-10-18
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Bordeaux Mon Commerce - Marché de Noël 2026, site de l'organisateur »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-27
---

Du **27 novembre au 27 décembre 2026**, le marché de Noël de Bordeaux retrouve la **place des Quinconces**, avec plus d'une centaine de chalets, des gourmandises et des animations pour les enfants. L'entrée est libre: une famille peut venir simplement regarder les illuminations et flâner, sans acheter de billet. En revanche, les manèges, les ateliers éventuels et les achats sur place ne doivent pas être supposés gratuits.

## Quel jour et à quelle heure venir avec des enfants?

Le [site de l'organisateur, Bordeaux Mon Commerce](https://www.marche-de-noel-bordeaux.com/), confirme une ouverture **tous les jours de 11h à 21h30**, y compris les **24 et 25 décembre**. L'[office de tourisme](https://www.bordeaux-tourisme.com/noel/marche) annonce les mêmes dates et horaires.

Attention toutefois à une divergence: la [fiche de Bordeaux Métropole](https://www.bordeaux-metropole.fr/agenda/20724859_mercado-de-navidad-en-burdeos) indique **21h** comme heure de fermeture. Pour une visite tardive, fiez-vous aux dernières informations de l'organisateur avant de partir plutôt que de compter sur les trente dernières minutes.

Avec de jeunes enfants, une visite en journée ou en fin d'après-midi permet de profiter des chalets avant une soirée trop longue. Si les lumières de Noël sont la priorité, choisissez plutôt un passage après la tombée de la nuit, en acceptant la possibilité de davantage d'attente autour des animations. Aucun créneau précis n'est garanti calme: adaptez votre horaire à l'affluence réelle.

## Quelles animations choisir en famille?

L'[office de tourisme de Bordeaux](https://www.bordeaux-tourisme.com/noel/marche) annonce notamment un **chalet de cerfs animés**, du **maquillage pour enfants**, des **ateliers de décorations écoresponsables**, des **cours d'emballage de cadeaux** et des **photos avec le père Noël**. Des choristes, acrobates, échassiers et personnages costumés sont également évoqués. Un **carrousel illuminé en face du Grand Théâtre** peut compléter la promenade.

Cette liste ne vaut pas programme quotidien. Les jours, heures, conditions d'accès et éventuels tarifs de chaque animation ne sont pas tous précisés à ce stade. Si votre enfant veut absolument rencontrer le père Noël ou participer à un atelier, vérifiez d'abord le programme annoncé par l'organisateur. Sinon, construisez la sortie autour de la promenade entre les chalets: c'est la partie la plus souple à organiser avec des enfants.

## Combien prévoir pour la sortie?

**L'accès au marché est gratuit**, comme le confirme [Bordeaux Métropole](https://www.bordeaux-metropole.fr/agenda/20724859_mercado-de-navidad-en-burdeos). Une simple balade n'impose donc aucune dépense sur place. Pour fixer un budget réaliste, distinguez plutôt trois envies:

- **Goûter ou repas:** chocolat chaud, marrons, bretzels, aligot et autres spécialités sont annoncés parmi les stands.
- **Animation choisie:** ne promettez pas une gratuité non publiée pour le carrousel, le maquillage ou les ateliers; renseignez-vous sur place ou dans le programme à venir.
- **Cadeaux:** bougies, décorations et produits du terroir figurent parmi les articles proposés par les exposants.

Pour éviter l'accumulation de petites dépenses, choisissez avant de partir ce que les enfants pourront faire ou acheter. Il est tout à fait possible de venir seulement pour l'ambiance et les lumières.

## Comment rejoindre les Quinconces?

Le marché se tient **place des Quinconces, 33000 Bordeaux**. L'[office de tourisme](https://www.bordeaux-tourisme.com/noel/marche) indique les **tramways B, C et D**, arrêt **Quinconces**. C'est un accès pratique pour éviter de chercher une place de stationnement dans le centre pendant les fêtes. Depuis la gare Saint-Jean, la ligne C permet notamment de rejoindre cet arrêt sans correspondance, sous réserve de l'exploitation du jour.

Le marché est annoncé **accessible aux personnes en situation de handicap**. Avec une poussette, prévoyez toutefois des déplacements plus lents dans les allées lorsque la fréquentation augmente; l'accessibilité annoncée ne garantit pas l'absence de foule. Avant le trajet retour, vérifiez les horaires et perturbations éventuelles des tramways, particulièrement les soirs de fêtes.

## Et si vous restez un week-end à Bordeaux?

Pour une famille qui prolonge la visite, dormir près des Quinconces peut éviter un trajet supplémentaire avec des enfants fatigués. L'[Hôtel Majestic](https://www.booking.com/hotel/fr/majestic-bordeaux.fr.html), rue de Condé, propose notamment des chambres familiales et des appartements à quelques pas de l'esplanade. Le [Quality Hotel Bordeaux Centre](https://www.booking.com/hotel/fr/qualitybordeaux.fr.html), rue du Parlement Sainte-Catherine, propose aussi des chambres familiales, à environ 350 mètres de la place. Comparez l'occupation réelle de chaque chambre, les tarifs et les conditions d'annulation pour vos dates.

Pour ajouter une visite en intérieur, notre guide de la [Cité du Vin à Bordeaux en famille](/articles/sorties/cite-du-vin-a-bordeaux-en-famille-tarifs-duree-et-conseils-de-visite/) aide à évaluer durée et budget. Avec des enfants attirés par les dinosaures, consultez plutôt [Planète Préhistorique à Bordeaux](/articles/sorties/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/) pour juger si cette sortie convient à leur âge et aux dates du séjour.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | Marché de Noël de Mulhouse 2026 en famille: horaires, étoffe et animations | evenements | Mulhouse, Haut-Rhin, Grand Est
- /articles/sorties/cite-du-vin-a-bordeaux-en-famille-tarifs-duree-et-conseils-de-visite/ | Cité du Vin à Bordeaux en famille: tarifs, durée et conseils de visite | sorties | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/noel-a-limoges-2026-en-famille-marche-animations-et-idees-pour-un-week-end/ | Noël à Limoges 2026 en famille: marché, animations et idées pour un week-end | evenements | Limoges, Haute-Vienne, Nouvelle-Aquitaine
- /articles/sorties/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/ | Planète Préhistorique à Bordeaux avec des enfants: âge, durée et tarifs | sorties | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/activites/anatomik-park-a-cap-sciences-a-partir-de-quel-age-et-combien-de-temps-prevoir/ | Anatomik Park à Cap Sciences: à partir de quel âge et combien de temps prévoir? | activites | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/maison/composteur-gratuit-a-bordeaux-metropole-que-choisir-selon-son-logement/ | Composteur gratuit à Bordeaux Métropole: que choisir selon son logement? | maison | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/sorties/visites-famille-art-deco-bordeaux-2026/ | Art déco à Bordeaux: deux visites en famille au MusBA en 2026 | sorties | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | Famille en fête 2026 en Gironde: ateliers gratuits pour les 0-6 ans | evenements | Saint-Loubès, Gironde, Nouvelle-Aquitaine
- /articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/ | Lire en Poche 2026 à Gradignan avec des enfants: organiser une journée sans perdre les ateliers | evenements | Gradignan, Gironde, Nouvelle-Aquitaine
- /articles/voyages/dune-du-pilat-avec-une-poussette-ce-qu-il-faut-prevoir-avant-la-montee/ | Dune du Pilat avec une poussette: ce qu'il faut prévoir avant la montée | voyages | La Teste-de-Buch, Gironde, Nouvelle-Aquitaine
- /articles/parentalite/bulles-girondines-a-villenave-d-ornon-un-espace-pour-les-parents-et-les-jeunes-enfants/ | Bulles Girondines à Villenave-d'Ornon: un espace pour les parents et les jeunes enfants | parentalite | Villenave-d'Ornon, Gironde, Nouvelle-Aquitaine
- /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | Grand Noël 2026 à Vaux-le-Vicomte en famille: billets, offre enfant et animations | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | ALFest 2026 à Annecy en famille: horaires, jeux et braderie | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | Festival du Livre de Colmar 2026 en famille: dates, horaires et animations jeunesse | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | Fêtes de Saint-Nicolas 2026 à Nancy en famille: défilé, villages et animations | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | bd BOUM 2026 à Blois en famille: ateliers, expositions et cinéma | evenements | Blois, Loir-et-Cher, Centre-Val de Loire

### Historique Radar lié

- opportunity | /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | 2026-10-20T15:29:27.541Z
- opportunity | /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | 2026-10-18T19:49:09.191Z
- opportunity | /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | 2026-10-12T08:10:30.674Z
- opportunity | /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | 2026-10-20T08:52:25.825Z
- opportunity | /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | 2026-10-19T19:48:02.164Z
- opportunity | /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | 2026-10-19T16:47:56.278Z
- opportunity | /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | 2026-10-20T22:29:05.422Z
- refresh | /articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/ | 2026-10-06T12:23:52.449Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | 2026-10-19T09:37:22.517Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
