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
title: "Rétro Game Festival 2026 à Beauvais : samedi ou dimanche avec les enfants ?"
subtitle: "Jeux rétro, concerts Disney, cosplay : programme du 6 au 8 novembre et vrais coûts des billets famille"
summary: "Samedi pour les animations enfants et la musique, dimanche pour le dessin et le cosplay, vendredi pour la soirée Disney : choisissez votre venue au Rétro Game Festival de Beauvais et calculez le budget."
category: evenements
location:
  city: Beauvais
  department: Oise
  region: Hauts-de-France
keywords:
  - Rétro Game Festival Beauvais 2026
  - Rétro Game Festival Beauvais billet famille
  - Elispace Beauvais novembre 2026 enfants
  - Rétro Game Festival samedi dimanche
sources:
  - title: Rétro Game Festival 2026 - programme officiel
    url: https://retrogamefestival.beauvais.fr/programme
  - title: Ville de Beauvais - billetterie officielle 2026
    url: https://billetterie.beauvais.fr/beauvais/rgfb2026/
  - title: Elispace - Rétro Game Festival 2026
    url: https://elispace.fr/programmation/retro-game-festival
  - title: Elispace - Soirée magique du 6 novembre 2026
    url: https://elispace.fr/programmation/soiree-magique-2
  - title: Elispace - informations pratiques, parking et accessibilité
    url: https://elispace.fr/infos-pratiques
  - title: Rétro Game Festival - restauration
    url: https://retrogamefestival.beauvais.fr/restauration
  - title: Rétro Game Festival - accès et transports
    url: https://retrogamefestival.beauvais.fr/acces-transports
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille
  decision: Choisir la journée et la formule d'entrée les plus adaptées aux enfants, sans confondre la soirée musicale et le festival.
  affiliationPotential: "Billetterie officielle sans partenaire identifié. Hébergements près de l'Elispace vérifiés sur Booking.com : https://www.booking.com/landmark/fr/elispace.fr.html."
  gsc:
    retrievedAt: 2026-10-26T01:34:33+01:00
    dataThrough: 2026-10-23
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Programme officiel »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-11-08
---

Le **Rétro Game Festival revient à l’Elispace de Beauvais du vendredi 6 au dimanche 8 novembre 2026**. Mais les trois dates ne proposent pas la même sortie : le vendredi est consacré à une soirée musicale avec son propre billet, tandis que le samedi et le dimanche réunissent jeux vidéo, bornes d’arcade, invités et animations pop culture. Pour une famille qui ne vient qu’une journée, **le samedi convient particulièrement aux enfants attirés par les jeux et les concerts ; le dimanche, à ceux qui veulent aussi dessiner et voir des costumes de cosplay**.

## Quel jour choisir selon les envies des enfants ?

### Vendredi 6 novembre : une soirée musicale, pas une journée de jeux

La **Soirée magique** commence à **20 h** (ouverture des portes à **19 h**). Le spectacle, en places assises à placement libre, réunit des chansons de films d’animation interprétées notamment par Mimifé, Tom Almodar, Maëva Méline, Emmanuel Dahl et Claire Guyot. Le [programme du festival](https://retrogamefestival.beauvais.fr/programme) indique une fin à **23 h** ; d’autres pages pratiques du festival affichent des horaires généraux différents pour le vendredi. Pour organiser le retour avec de jeunes enfants, confirmez l’heure de fin auprès de l’Elispace.

**Billets distincts : 12 € par personne ou 30 € le pass famille** (jusqu’à deux adultes et quatre enfants). Ce billet concerne la soirée du vendredi : il ne remplace pas une entrée pour le festival du week-end. Le billet solo prévoit la présence d’un enfant de moins de 3 ans sans supplément, à déclarer lors de la commande.

### Samedi 7 novembre : animations enfants, Disney, K-pop et jeux

Le festival ouvre de **10 h à 19 h**. C’est la journée la plus facile à construire autour d’activités variées :

- **10 h–19 h, hall 4 :** animations enfants annoncées toute la journée.
- **10 h 45–11 h 30 :** concert Disney sur la scène principale.
- **11 h–12 h :** show Just Dance ; **11 h 30–12 h 15 :** K-pop avec HYPE et Milestone Crew.
- **14 h 30–15 h :** showcase Kpop Demon Hunters.
- **17 h 30–18 h :** finale Mario Kart sur la scène gaming.

Les familles de joueurs peuvent aussi profiter des consoles rétro, bornes d’arcade, défis et rencontres avec les invités. Les horaires de dédicaces de Marcus, Conkerax ou des comédiens de doublage sont détaillés dans le programme officiel : choisissez-en une ou deux plutôt que d’essayer de tout suivre.

**À 19 h, le concert Comics de l’Orchestre Philharmonique de l’Oise** prolonge la journée jusqu’à **20 h** selon le programme. L’Elispace indique que le billet du samedi donne accès au concert. Une **place assise « carré or » coûte 15 € supplémentaires par personne** et nécessite aussi le billet d’entrée du samedi. Ne confondez pas ce supplément facultatif avec le prix du festival.

### Dimanche 8 novembre : super-héros, dessin et cosplay

Le dimanche, de **10 h à 19 h**, les jeux et les rencontres continuent, avec un programme particulièrement intéressant pour les enfants qui aiment les personnages et les costumes :

- **10 h 45–11 h 30 :** concert Disney.
- **11 h 30–12 h :** showcase Kpop Demon Hunters ; **12 h–13 h :** show K-pop et danse.
- **13 h 15–13 h 30 :** quiz super-héros.
- **13 h 30–14 h 30 :** « Dessinez votre super-héros » avec JL Mast et Goeffo.
- **15 h 30–16 h 30 :** concours cosplay ; remise des prix **18 h–18 h 30**.

Les déguisements sont bienvenus, même sans participation au concours. Si le dessin est la priorité, arrivez avant 13 h 30 ; pour le cosplay, prévoyez plutôt l’après-midi. Les horaires peuvent évoluer : consultez le [programme officiel détaillé](https://retrogamefestival.beauvais.fr/programme) avant de partir.

## Combien coûte réellement la sortie ?

Pour **le samedi ou le dimanche**, la billetterie municipale annonce :

- **Pass famille : 8 € par jour**, pour un maximum de **deux adultes et quatre enfants de 3 à 18 ans**.
- **Pass individuel : 4 € par jour**, prévu pour un adulte et, le cas échéant, un enfant de moins de 3 ans.
- **Moins de 3 ans :** pas de billet nécessaire pour le festival du week-end ; les enfants doivent être accompagnés d’un adulte.

Ainsi, **deux adultes avec deux enfants de 5 et 9 ans paient 8 € pour une journée**, ou **16 € pour les deux journées** avec deux pass famille distincts. En ajoutant la Soirée magique du vendredi pour cette même famille, le total des billets de base atteint **46 € pour les trois dates**. Ces calculs sont **hors frais de traitement**, signalés par la billetterie lors du paiement, hors repas et hors éventuelles places « carré or ».

Attention : **le pass famille n’est pas un pass trois jours**. Il faut sélectionner séparément samedi et dimanche. La soirée du vendredi possède également sa propre formule. Pour les familles avec une composition inhabituelle ou des enfants tout juste âgés de 3 ans, vérifiez le billet proposé avant de payer.

## Sur place : repas, poussette, parking et accès

Le festival se tient à **l’Elispace, 3 avenue Paul-Henri-Spaak, 60000 Beauvais**. L’Elispace annonce plusieurs parkings gratuits et des places réservées aux personnes à mobilité réduite. En transports en commun, des lignes du réseau Corolis desservent les environs ; les indications de lignes et d’arrêt varient entre les pages du festival, donc vérifiez votre trajet et les horaires du week-end avant de partir.

Des **food trucks salés et sucrés** sont annoncés le samedi et le dimanche, ainsi qu’une buvette. Un **espace pour pique-niquer avec son propre repas** est prévu **à l’extérieur, sous un barnum** : pensez à la météo de novembre. Le vendredi, la restauration annoncée se limite à la cafétéria.

Le festival et l’Elispace annoncent un accès adapté aux personnes à mobilité réduite. Pour un besoin de placement particulier, notamment en fauteuil, l’Elispace recommande de prendre contact **au 03 44 10 01 01** en amont. **Attention aux poussettes :** le [règlement général de l’Elispace](https://elispace.fr/infos-pratiques) les classe parmi les objets roulants interdits à l’intérieur, comme les gros bagages. Aucune consigne pour poussettes ni espace de change spécifique au festival n’a été confirmé : contactez la salle avant de venir avec un bébé pour connaître les modalités exactes.

## Venir de loin : dormir près de l’Elispace

Si vous souhaitez profiter **des deux journées sans multiplier les trajets**, comparez les [hébergements autour de l’Elispace à Beauvais sur Booking.com](https://www.booking.com/landmark/fr/elispace.fr.html). Indiquez vos dates exactes et l’âge des enfants pour vérifier la capacité de la chambre, le trajet jusqu’à la salle et les conditions d’annulation. Les tarifs et disponibilités du week-end du 7–8 novembre ne sont pas garantis.

Pour une seule journée, inutile de réserver une nuit par principe : choisissez d’abord les animations que vos enfants veulent vraiment voir, puis calculez le temps de trajet et le coût total de la sortie.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/vie-pratique/location-de-voiture-a-beauvais-avec-des-enfants-les-verifications-utiles-avant-de-reserver/ | Location de voiture à Beauvais avec des enfants: les vérifications utiles avant de réserver | vie-pratique | Beauvais, Oise, Hauts-de-France
- /articles/evenements/foire-de-la-barguillere-a-foix-samedi-ou-dimanche-avec-des-enfants/ | Foire de la Barguillère à Foix: samedi ou dimanche avec des enfants ? | evenements | Foix, Ariège, Occitanie
- /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | ALFest 2026 à Annecy en famille: horaires, jeux et braderie | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | Festival MARMOE 2026 à Montreuil: spectacles, ateliers et tarifs en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/castagnade-de-joyeuse-2026-avec-des-enfants-venir-samedi-ou-dimanche/ | Castagnade de Joyeuse 2026 avec des enfants: venir samedi ou dimanche? | evenements | Joyeuse, Ardèche, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | Festival du Livre de Colmar 2026 en famille: dates, horaires et animations jeunesse | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | bd BOUM 2026 à Blois en famille: ateliers, expositions et cinéma | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/les-expressifs-2026-a-poitiers-trois-jours-de-spectacles-gratuits/ | Les Expressifs 2026 à Poitiers: trois jours de spectacles gratuits | evenements | Poitiers, Vienne, Nouvelle-Aquitaine
- /articles/bons-plans/pass-sports-citoyen-dans-l-oise-15-a-cumuler-avec-le-pass-sport-en-2026/ | Pass Sports Citoyen dans l'Oise: 15 € à cumuler avec le pass Sport en 2026 | bons-plans | Beauvais, Oise, Hauts-de-France
- /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | Noël Gaulois 2026 au Parc Astérix: billets, glissades et spectacles en famille | evenements | Plailly, Oise, Hauts-de-France
- /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | Halloween 2026 à la Mer de Sable: spectacles, frissons et billets en famille | evenements | Ermenonville, Oise, Hauts-de-France
- /articles/sorties/chateau-de-compiegne-en-famille-que-visiter-et-comment-organiser-la-journee/ | Château de Compiègne en famille: que visiter et comment organiser la journée? | sorties | Compiègne, Oise, Hauts-de-France
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/parentalite/ateliers-parents-malins-dans-l-oise-quels-rendez-vous-gratuits-choisir-avant-fin-2026/ | Ateliers Parents Malins dans l'Oise: quels rendez-vous gratuits choisir avant fin 2026 ? | parentalite | Plusieurs communes, Oise, Hauts-de-France
- /articles/cuisine/atelier-de-creme-chantilly-avec-des-enfants-a-partir-de-quel-age-et-comment-reserver/ | Atelier de crème Chantilly avec des enfants: à partir de quel âge et comment réserver | cuisine | Chantilly, Oise, Hauts-de-France
- /articles/maison/meubles-et-encombrants-a-compiegne-recyclerie-dechetterie-ou-collecte-a-domicile/ | Meubles et encombrants à Compiègne: recyclerie, déchetterie ou collecte à domicile? | maison | Compiègne, Oise, Hauts-de-France
- /articles/voyages/peur-sur-le-parc-2026-en-famille-journee-nocturne-billets-et-hebergement/ | Peur sur le Parc 2026 en famille: journée, nocturne, billets et hébergement | voyages | Plailly, Oise, Hauts-de-France
- /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | Festival Playground 2026: spectacles de danse en famille, dates et tarifs | evenements | Bagnolet, Seine-Saint-Denis, Île-de-France
- /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | Festival Enfantillages 2026 à Valbonne: spectacles gratuits et cinéma en famille | evenements | Valbonne, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/halloween-2026-au-zoo-de-la-fleche-entree-offerte-aux-enfants-deguises/ | Halloween 2026 au Zoo de La Flèche: tarifs, jeux et entrée offerte aux enfants déguisés | evenements | La Flèche, Sarthe, Pays de la Loire
- /articles/evenements/noel-au-pays-du-jouet-2026-a-moirans-en-montagne-preparer-sa-sortie-en-famille/ | Noël au Pays du Jouet 2026 à Moirans-en-Montagne: préparer sa sortie en famille | evenements | Moirans-en-Montagne, Jura, Bourgogne-Franche-Comté

### Historique Radar lié

- opportunity | /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | 2026-10-20T15:29:27.541Z
- opportunity | /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | 2026-10-18T19:49:09.191Z
- opportunity | /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | 2026-10-20T08:52:25.825Z
- opportunity | /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | 2026-10-26T03:35:31.605Z
- opportunity | /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | 2026-10-25T23:35:17.860Z
- opportunity | /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | 2026-10-26T06:30:10.217Z
- opportunity | /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | 2026-10-18T12:12:00.071Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- opportunity | /articles/evenements/halloween-2026-au-zoo-de-la-fleche-entree-offerte-aux-enfants-deguises/ | 2026-10-25T20:27:07.814Z
- opportunity | /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | 2026-10-24T09:33:57.174Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
