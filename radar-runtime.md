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
title: "Halloween 2026 à Mini World Lyon : retrouver les 31 méchants avec les enfants"
subtitle: "Jusqu'au 1er novembre à Vaulx-en-Velin : jeu de recherche, décors frissonnants et billet à choisir"
summary: La Chasse aux 31 Méchants de Mini World Lyon est incluse dans l'entrée jusqu'au 1er novembre 2026. Personnages, ambiance pour les petits, tarifs et horaires à vérifier.
category: evenements
location:
  city: Vaulx-en-Velin
  department: Rhône
  region: Auvergne-Rhône-Alpes
keywords:
  - Halloween Mini World Lyon 2026
  - chasse aux méchants Mini World Lyon
  - Mini World Lyon Toussaint enfants
  - Halloween Vaulx-en-Velin en famille
sources:
  - title: Mini World Lyon - La Chasse aux Méchants 2026
    url: https://miniworldlyon.com/halloween/
  - title: Mini World Lyon - Tarifs et billets
    url: https://miniworldlyon.com/tarifs/
  - title: Mini World Lyon - Horaires et calendrier
    url: https://miniworldlyon.com/horaires/
  - title: Mini World Lyon - Questions fréquentes
    url: https://miniworldlyon.com/questions-frequentes/
  - title: Mini World Lyon - Lyon City Card et accès au parc
    url: https://miniworldlyon.com/helpie_faq/lentree-au-parc-est-elle-incluse-dans-la-lyon-city-card/
  - title: Office de tourisme de Lyon - Chasse aux Méchants 2026
    url: https://www.visiterlyon.com/sortir/l-agenda/expositions/chasse-aux-mechants
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille
  decision: Permettre aux parents de savoir si la Chasse aux 31 Méchants convient à l'âge et à la sensibilité de leurs enfants, quand venir avant sa fin le 1er novembre et comment en profiter sans acheter un supplément inutile.
  affiliationPotential: La chasse est comprise dans le billet ordinaire du parc; aucune entrée partenaire directe équivalente confirmée chez Tiqets, GetYourGuide ou Klook. La Lyon City Card, proposée sur Tiqets (https://www.tiqets.com/fr/les-choses-a-faire-a-lyon-c66838/billets-pour-lyon-city-card-p976069/), inclut Mini World selon l'organisateur, surtout pertinente pour un séjour multi-visites, pas pour Halloween seul. L'ibis Lyon Carré de Soie dispose de chambres familiales réservables via Booking.com (https://www.booking.com/hotel/fr/ibis-lyon-carre-de-soie.fr.html); composition et disponibilités à vérifier pour les dates retenues.
  gsc:
    retrievedAt: 2026-10-22T08:53:00+02:00
    dataThrough: 2026-10-19
    signal: strong_page
    sourceUrl: /articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/
    basis: "La page « Mini World Lyon: tarifs, billets famille et durée de visite » conserve 342 impressions sur la semaine récente, avec une position moyenne de 9.421 et 239.2 % de son pic."
eventEndsAt: 2026-11-01
---

Du **10 octobre au 1er novembre 2026**, Mini World Lyon organise sa **Chasse aux Méchants** à Vaulx-en-Velin. **31 personnages** issus du cinéma, des séries et des dessins animés se dissimulent dans les décors miniatures. Les familles doivent les retrouver à l'aide d'un plan. Le jeu est **compris dans le billet d'entrée** : pas besoin d'acheter une activité supplémentaire.

## Comment se déroule la Chasse aux 31 Méchants ?

À l'arrivée, les visiteurs récupèrent un **plan spécial Halloween** pour chercher les personnages parmi les univers miniatures du parc. **Dark Vador, Cruella, Maléfique, le Grinch, Voldemort, Chucky et le Démogorgon** figurent parmi les invités annoncés. L'organisateur prévoit une **petite surprise HARIBO** pour les explorateurs qui relèvent le défi, sans préciser la nature exacte du cadeau.

Le principe consiste à **observer les scènes et repérer les personnages cachés**, plutôt qu'à suivre un parcours d'horreur avec des acteurs. Il n'est pas nécessaire de trouver les 31 personnages pour profiter des mini-mondes : avec un jeune enfant, cherchez-en quelques-uns à son rythme.

## Est-ce adapté aux plus petits ?

Mini World Lyon est un **parc couvert de miniatures animées** ouvert aux enfants, y compris aux tout-petits. Mais la décoration temporaire d'Halloween change l'atmosphère habituelle : l'organisateur annonce **maison hantée, citrouilles, cimetières et scènes inquiétantes**. Certains personnages, notamment **Chucky** ou le **Démogorgon**, peuvent aussi impressionner les enfants qui les reconnaissent.

Un enfant qui aime chercher des détails dans les maquettes devrait apprécier le jeu, même s'il ne connaît pas les références de tous les personnages. Pour un enfant sensible aux monstres et aux décors sombres, mieux vaut présenter la chasse comme une activité **facultative** au sein de la visite, sans insister pour tout trouver. L'organisateur ne publie pas d'âge minimum propre à cette animation.

## Quel billet et quel créneau choisir avant le 1er novembre ?

La chasse ne coûte **rien de plus que la visite ordinaire**. Les prix web datés sont annoncés **à partir de 16,90 € pour les adultes** et **11,90 € pour les enfants de 4 à 17 ans**. Les **0 à 3 ans inclus entrent gratuitement**, avec un billet gratuit à retirer en caisse. Le **pack famille daté à 54 €** comprend **deux adultes et deux enfants**. Ces billets datés sont **non modifiables et non remboursables**.

Les horaires méritent une vérification particulière : l'office de tourisme de Lyon indique **11 h à 18 h** pendant les vacances, mais le calendrier de Mini World affiche aussi des journées **de 10 h à 19 h**. Consultez donc **l'horaire du jour choisi**, ainsi que l'heure de fermeture de la billetterie, avant de partir. Le parc recommande **au moins deux heures** pour découvrir les mondes miniatures : ne prévoyez pas une arrivée à la dernière minute si les enfants veulent participer à la chasse.

Pour retrouver le détail des **billets, des durées de visite et de l'accès au Carré de Soie**, consultez notre guide [Mini World Lyon en famille](/articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/).

Si la visite s'inscrit dans un **séjour avec plusieurs activités à Lyon**, la [Lyon City Card disponible sur Tiqets](https://www.tiqets.com/fr/les-choses-a-faire-a-lyon-c66838/billets-pour-lyon-city-card-p976069/) peut être une alternative : Mini World figure parmi les activités incluses et le parc demande de présenter une carte active à sa billetterie. **Pour Mini World seul**, un billet d'entrée classique sera généralement plus pertinent ; comparez le coût global du pass uniquement si vous comptez profiter aussi des transports et d'autres visites.

## Venir à Vaulx-en-Velin et dormir à proximité

Mini World Lyon se situe au **3 avenue de Bohlen, 69120 Vaulx-en-Velin**, dans le centre commercial **Carré de Soie**. La station **Vaulx-en-Velin La Soie** est desservie par le **métro A** et le **tramway T3** ; le parc se trouve à environ **cinq minutes à pied**. Un parking est également disponible au centre commercial. Sur place, le **Mini World Café** propose de la restauration rapide pendant l'animation.

Pour les familles qui viennent de loin et prolongent la sortie par un week-end lyonnais, l'[ibis Lyon Carré de Soie](https://www.booking.com/hotel/fr/ibis-lyon-carre-de-soie.fr.html) propose des **chambres adaptées à certaines compositions familiales** près de la station La Soie. Vérifiez précisément **le nombre de couchages**, l'âge des enfants, le prix total et les conditions d'annulation : la présence d'un canapé-lit dans une catégorie de chambre ne garantit pas l'accueil de quatre personnes.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/ | Mini World Lyon: tarifs, billets famille et durée de visite | bons-plans | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | Toussaint 2026 au musée des Confluences: cinq rendez-vous pour les enfants | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/sorties/chasse-motifs-loire-orleans-famille-2026/ | Chasse aux motifs de Loire à Orléans: une balade gratuite pour les 6 à 12 ans | sorties | Orléans, Loiret, Centre-Val de Loire
- /articles/voyages/vulcania-a-la-toussaint-2026-1-ou-2-jours-billets-et-ou-dormir/ | Vulcania à la Toussaint 2026: 1 ou 2 jours, billets et où dormir | voyages | Saint-Ours-les-Roches, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | Halloween 2026 à la Tour de l'Horloge de Guînes: visites, contes et nocturne | evenements | Guînes, Pas-de-Calais, Hauts-de-France
- /articles/voyages/futuroween-2026-futuroscope-billet-programme-enfants/ | Futuroween 2026 au Futuroscope: billet, programme et conseils avec des enfants | voyages | Chasseneuil-du-Poitou, Vienne, Nouvelle-Aquitaine
- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | Toussaint 2026 à Nausicaá: ateliers en journée et nocturne d’Halloween | evenements | Boulogne-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | Equita Lyon 2026 avec des enfants: billets, Village Enfants et spectacles | evenements | Chassieu, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/sorties/aquarium-de-lyon-en-famille-nouveautes-ocean-360-tarifs-et-visite/ | Aquarium de Lyon en famille: nouveautés Océan 360°, tarifs et visite | sorties | La Mulatière, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | Festival Lumière 2026: Laurel & Hardy en famille le 17 octobre à Lyon | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/parentalite/cafe-papote-a-lyon-4e-ou-echanger-gratuitement-avec-d-autres-parents/ | Café Papote à Lyon 4e: où échanger gratuitement avec d'autres parents | parentalite | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/cuisine/a-claveisolles-decouvrir-comment-le-lait-de-chevre-devient-fromage-avec-les-enfants/ | À Claveisolles, découvrir comment le lait de chèvre devient fromage avec les enfants | cuisine | Claveisolles, Rhône, Auvergne-Rhône-Alpes
- /articles/maison/decheteries-mobiles-a-lyon-que-peut-on-deposer-et-quand-preferer-une-decheterie-fixe/ | Déchèteries mobiles à Lyon: que peut-on déposer et quand préférer une déchèterie fixe? | maison | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/vie-pratique/location-de-voiture-a-lyon-avec-des-enfants-ce-qu-il-faut-verifier-avant-de-reserver/ | Location de voiture à Lyon avec des enfants: ce qu'il faut vérifier avant de réserver | vie-pratique | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/activites/parc-de-courzieu-en-famille-tarifs-horaires-et-conseils-pour-la-visite/ | Parc de Courzieu en famille: tarifs, horaires et conseils pour la visite | activites | Courzieu, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | Luminescences 2026-2027 au zoo d'Amnéville: billets, tarifs et visite en famille | evenements | Amnéville, Moselle, Grand Est
- /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | Salon du Cheval de Paris 2026 en famille: animations, jumping et billets | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne
- /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | Foire de Dijon 2026 avec les enfants: gratuités, ateliers et Ferme Côte-d'Or | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | Foire de Grenoble 2026 en famille: jours gratuits, programme et tarifs | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | 2026-10-21T10:43:46.144Z
- opportunity | /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | 2026-10-10T15:40:28.185Z
- opportunity | /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | 2026-10-19T19:48:02.164Z
- opportunity | /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | 2026-10-21T16:31:41.000Z
- opportunity | /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | 2026-10-21T13:33:34.395Z
- opportunity | /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | 2026-10-12T10:40:26.563Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- opportunity | /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | 2026-10-22T09:37:18.560Z
- opportunity | /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | 2026-10-18T08:44:05.495Z
- opportunity | /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | 2026-10-22T04:59:04.773Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
