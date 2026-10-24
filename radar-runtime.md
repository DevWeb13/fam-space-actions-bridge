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
title: "Noël à Nantes 2026 : marché ou visite du Voyage en hiver en famille ?"
subtitle: Deux sorties au centre-ville, l'une libre et gratuite, l'autre guidée pendant deux heures
summary: "Le marché de Noël accueille les familles du 19 novembre au 27 décembre 2026. La visite guidée du Voyage en hiver, proposée sur certains créneaux du 26 novembre au 30 décembre, demande une réservation : voici comment choisir selon l'âge des enfants et le budget."
category: evenements
location:
  city: Nantes
  department: Loire-Atlantique
  region: Pays de la Loire
keywords:
  - marché de Noël Nantes 2026
  - Voyage en hiver Nantes 2026
  - visite guidée Noël Nantes enfants
sources:
  - title: Marché de Noël de Nantes — informations pratiques 2026
    url: https://marche-de-noel-nantes.com/marche-de-noel-de-nantes/infos-pratiques/
  - title: Le Voyage à Nantes — visite guidée Le Voyage en hiver 2026
    url: https://reservation.levoyageanantes.fr/selection/timeslotpass?lang=fr&productId=10229129490424
  - title: Naolib — gratuité des transports en commun
    url: https://naolib.fr/gratuite-des-transports-en-commun
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver
  decision: Décider si une promenade libre parmi les chalets suffit ou si la visite guidée artistique de deux heures vaut une réservation selon l'âge des enfants, le budget et le temps disponible ; pouvoir combiner les deux sans confondre leurs dates.
  affiliationPotential: Pass Nantes sur Tiqets vérifié, à proposer seulement si d'autres visites payantes rendent le pass pertinent (la visite guidée est annoncée gratuite pour ses porteurs, réservation conseillée). Hébergement familial Oceania l'Hôtel de France Nantes vérifié sur Booking.com, près de la place Royale ; tarifs et disponibilité selon les dates à contrôler.
  gsc:
    retrievedAt: 2026-10-24T02:34:28+02:00
    dataThrough: 2026-10-21
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Marché de Noël de Nantes - informations pratiques 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-30T20:00:00+01:00
---

À Nantes, les fêtes peuvent se vivre de deux façons très différentes : flâner à son rythme entre les chalets des places Royale et du Commerce, ou suivre un guide à travers les œuvres et les histoires de la ville. Le **marché de Noël est accessible gratuitement et sans réservation** ; la **visite guidée du Voyage en hiver dure deux heures** et se réserve pour un créneau précis. Les deux se complètent, mais leurs calendriers ne sont pas identiques.

## Le marché de Noël : la sortie souple, même avec des petits

Du **19 novembre au 27 décembre 2026**, les chalets occupent les places Royale et du Commerce, au cœur de Nantes. On peut s'y arrêter une demi-heure après l'école, y revenir un autre jour ou prolonger la promenade selon l'énergie des enfants. L'entrée est libre ; les achats de cadeaux et les gourmandises restent payants.

Les horaires annoncés par [l'organisateur du marché](https://marche-de-noel-nantes.com/marche-de-noel-de-nantes/infos-pratiques/) sont **11 h–21 h 30 du lundi au samedi** et **11 h–20 h le dimanche**, avec deux exceptions : **11 h–18 h le 24 décembre** et **15 h–21 h le 25 décembre**. Le 25, l'ouverture de chaque chalet est facultative : ce n'est donc pas la meilleure date si vous venez surtout pour les stands.

L'organisateur annonce des animations gratuites, certaines réservées aux enfants, mais leurs modalités et leurs dates doivent être vérifiées dans le programme avant de promettre une activité précise. Les accès aux deux places sont aménagés pour les personnes en situation de handicap. Avec une poussette ou un jeune enfant, une promenade courte en journée laisse davantage de marge qu'une sortie tardive dans la foule.

## La visite guidée : deux heures pour découvrir Nantes autrement

La visite **Le Voyage en hiver** n'est pas une visite des chalets. Un guide raconte les lieux, les œuvres et les petites histoires de Nantes, dans une ville transformée par les créations artistiques de la saison. Pour 2026, l'organisateur met notamment en avant les installations lumineuses de Vincent Olinet et un parcours réunissant Virginie Barré, Dominique Blais et Quentin Faucompré.

Les **dates proposées vont du 26 novembre au 30 décembre 2026**, uniquement aux jours et horaires ouverts à la réservation. Le rendez-vous se fait au **point « i » devant l'accueil du Voyage à Nantes, 9 rue des États**, face au château des ducs de Bretagne. La visite dure **deux heures**, en français ; un créneau à **18 h** figure notamment dans la billetterie. Ce calendrier concerne la visite accompagnée, pas nécessairement l'ensemble des installations du Voyage en hiver.

Le tarif est de **12 € par adulte**, **7 € pour les 12–17 ans** et **0 € pour les moins de 12 ans**. Le tarif réduit de 7 € concerne aussi certaines situations précisées à la réservation, notamment les étudiants de moins de 26 ans, les demandeurs d'emploi et les personnes en situation de handicap ; l'accompagnateur d'une personne en situation de handicap bénéficie d'une place gratuite selon les conditions affichées.

Pour **deux adultes et deux enfants de moins de 12 ans**, comptez **24 €** ; avec deux adolescents de 12 à 17 ans, **38 €**. Ces montants concernent uniquement la visite guidée. Les billets sont **non annulables et non remboursables** ; un **report peut être possible selon les disponibilités**. Mieux vaut donc choisir une date où les enfants pourront suivre deux heures de marche et d'explications, par temps froid éventuel. Pour un fauteuil roulant ou une difficulté de déplacement, vérifiez les conditions du parcours auprès de l'organisateur avant de réserver.

## Peut-on faire les deux le même jour ?

**Oui, entre le 26 novembre et le 27 décembre**, à condition de choisir **un jour où une visite guidée est effectivement proposée**. Le plus simple est de profiter des chalets avant le départ du groupe, puis de rejoindre à temps le 9 rue des États. Prévoyez une pause et des vêtements chauds : le marché et la visite sont deux sorties en extérieur, dont la seconde ne se raccourcit pas librement.

Avec des enfants qui se fatiguent vite, le marché seul sera souvent plus agréable. Avec des préados curieux d'art et d'histoires urbaines, la visite commentée apporte quelque chose de différent d'une simple balade parmi les illuminations. **Après le 27 décembre**, le marché est terminé, même si des visites guidées restent annoncées jusqu'au 30 décembre.

## Faut-il acheter un Pass Nantes ?

**Pas pour le marché : il est gratuit.** Pour la visite guidée seule, comparez d'abord le coût des billets ordinaires : les porteurs du **Pass Nantes** peuvent réserver une place gratuite à cette visite, mais le pass lui-même est payant et **la réservation reste conseillée**. Il devient surtout intéressant si votre famille prévoit aussi plusieurs visites payantes dans la ville. Vous pouvez [examiner le Pass Nantes sur Tiqets](https://www.tiqets.com/fr/activites-attractions-nantes-c66776/billets-pour-nantes-pass-p1048804/) et comparer ses prestations avec votre programme réel, sans l'acheter uniquement pour éviter un billet à 12 €.

## Accès et nuit sur place

Pour rejoindre le marché, l'arrêt **Commerce** dessert les trois lignes de tramway, à quelques minutes à pied des chalets. Le parking couvert Commerce est payant. Selon [Naolib](https://naolib.fr/gratuite-des-transports-en-commun), les transports du réseau sont **gratuits le samedi et le dimanche**, sauf la navette aéroport, qui exige un titre spécifique. Les enfants accompagnés de moins de six ans voyagent également gratuitement en semaine sur les lignes concernées. Pour les habitants qui empruntent souvent le réseau hors week-end, notre [guide de la tarification solidaire Naolib à Nantes](/articles/vie-pratique/tarification-solidaire-naolib-a-nantes-combien-paie-une-famille-et-comment-faire-la-demande/) explique les droits possibles.

Si vous venez de plus loin et souhaitez passer une nuit dans le centre, [l'Oceania l'Hôtel de France Nantes sur Booking.com](https://www.booking.com/hotel/fr/de-france-nantes.fr.html), rue Crébillon, propose des chambres familiales à proximité de la place Royale. Vérifiez la capacité exacte pour les âges de vos enfants, le prix et les disponibilités aux dates retenues avant de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/voyage-a-nantes-2026-en-famille/ | Voyage à Nantes 2026 en famille: parcours court et plan | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/utopiales-2026-a-nantes-en-famille-dates-billets-et-conseils-pour-preparer-la-visite/ | Utopiales 2026 à Nantes en famille: dates, billets et conseils pour préparer la visite | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/cuisine/atelier-cuisine-parent-enfant-a-nantes-gratuit-au-breil-ou-cours-prive/ | Ateliers cuisine parent-enfant à Nantes: où cuisiner ensemble? | cuisine | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP à Nantes: où aller avec un enfant de moins de 6 ans? | parentalite | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | Marché de Noël de Mulhouse 2026 en famille: horaires, étoffe et animations | evenements | Mulhouse, Haut-Rhin, Grand Est
- /articles/vie-pratique/tarification-solidaire-naolib-a-nantes-combien-paie-une-famille-et-comment-faire-la-demande/ | Tarification solidaire Naolib à Nantes: combien paie une famille et comment faire la demande? | vie-pratique | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | Festi'Mômes 2026 à Nantes: séances, spectacles et tarifs en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/maison/broyeur-de-vegetaux-a-nantes-metropole-acheter-a-plusieurs-ou-profiter-des-operations-gratuites/ | Broyeur de végétaux à Nantes Métropole: acheter à plusieurs ou profiter des opérations gratuites ? | maison | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/folie-plantes-nantes-2026-famille/ | Folie des plantes 2026 à Nantes: un week-end gratuit à découvrir en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/activites/planete-sauvage-en-famille-tarifs-2026-duree-et-conseils-de-visite/ | Planète Sauvage en famille: tarifs 2026, durée et conseils de visite | activites | Port-Saint-Père, Loire-Atlantique, Pays de la Loire
- /articles/evenements/festival-ete-continue-carquefou-2026-famille/ | Festival L’Été Continue 2026 à Carquefou: six jours gratuits en famille | evenements | Carquefou, Loire-Atlantique, Pays de la Loire
- /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | Noël à Chenonceau 2026: décors, nocturnes et tarifs en famille | evenements | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | Noël Gaulois 2026 au Parc Astérix: billets, glissades et spectacles en famille | evenements | Plailly, Oise, Hauts-de-France
- /articles/evenements/train-du-pere-noel-a-toucy-2026-horaires-tarifs-et-reservation/ | Train du Père Noël à Toucy 2026: horaires, tarifs et réservation | evenements | Toucy, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | Noël au château d'Amboise 2026: visite, nocturnes et tarifs en famille | evenements | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | Noël à Provins 2026: marché médiéval, animations et visites en famille | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/evenements/chante-nwel-a-ducos-le-28-novembre-2026-une-soiree-de-noel-creole-en-famille/ | Chanté Nwel à Ducos le 28 novembre 2026: une soirée de Noël créole en famille | evenements | Ducos, Martinique, Martinique
- /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | Noël au château de Cheverny 2026: billets, mapping et visite en famille | evenements | Cheverny, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | Foire aux santons de Marseille 2026: dates, inauguration et visite en famille | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | Bédéciné 2026 à Illzach en famille: ateliers, spectacles et billets | evenements | Illzach, Haut-Rhin, Grand Est
- /articles/evenements/automne-des-gones-2026-a-lyon-quels-ateliers-gratuits-choisir-avec-les-enfants/ | Automne des gones 2026 à Lyon: ateliers et sorties gratuites en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | Créations & savoir-faire 2026 à Paris en famille: billets, ateliers et dates | evenements | Paris, Paris, Île-de-France

### Historique Radar lié

- opportunity | /articles/evenements/automne-des-gones-2026-a-lyon-quels-ateliers-gratuits-choisir-avec-les-enfants/ | 2026-10-23T09:31:27.871Z
- opportunity | /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | 2026-10-23T12:33:36.649Z
- opportunity | /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | 2026-10-23T06:21:12.326Z
- opportunity | /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | 2026-10-17T11:48:00.184Z
- opportunity | /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | 2026-10-23T15:29:55.218Z
- refresh | /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | 2026-10-17T18:40:41.973Z
- opportunity | /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | 2026-10-19T09:37:22.517Z
- opportunity | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-10-24T12:31:27.784Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | 2026-10-23T19:58:30.214Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | 2026-10-24T06:28:53.730Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
