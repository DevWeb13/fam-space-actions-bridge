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
title: "Fête foraine de Dijon 2026 : horaires et budget avec des enfants"
subtitle: Du 23 octobre au 15 novembre, des manèges en plein air derrière le Parc des expositions
summary: Quand venir à la fête foraine de Dijon avec les enfants, comment prévoir les tours de manège et rejoindre le mail Général-Delaborde sans confondre la sortie avec la Foire gastronomique.
category: evenements
location:
  city: Dijon
  department: Côte-d'Or
  region: Bourgogne-Franche-Comté
keywords:
  - fête foraine Dijon 2026
  - manèges Dijon octobre novembre 2026
  - mail Général-Delaborde
  - foire aux manèges Dijon
sources:
  - title: Ville de Dijon — La fête foraine de retour à Dijon (24 octobre 2026)
    url: https://www.dijon.fr/agenda/la-fete-foraine-de-retour-a-dijon/
  - title: Foire internationale et gastronomique de Dijon — édition 2026
    url: https://www.foirededijon.com/
  - title: Divia Mobilités — Parking Clemenceau, accès et tram T1
    url: https://information.divia.fr/sinformer/voiture/parkings-en-ouvrage/clemenceau/
  - title: Dijon Bourgogne Events — Plan du Parc des expositions et de ses accès
    url: https://dijonbourgogne-events.com/wp-content/uploads/2023/04/Dijon-Bourgogne-Events_Map.pdf
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget
  decision: Savoir quand aller aux manèges avec les enfants, quel budget prévoir sans tarif inventé, et si la famille souhaite aussi visiter la Foire gastronomique, événement distinct.
  affiliationPotential: "Aucune billetterie partenaire pertinente pour les manèges : entrée libre et attractions payées sur place. Hébergement secondaire vérifié sur Booking.com : Aparthotel Adagio Access Dijon République, appartements avec kitchenette et chambres familiales, à proximité du secteur Congrexpo ; vérifier capacité, prix et disponibilités aux dates choisies."
  gsc:
    retrievedAt: 2026-10-25T02:31:31+02:00
    dataThrough: 2026-10-22
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Dijon - La fête foraine de retour à Dijon (25 octobre 2026) »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-11-15
---

La fête foraine de Dijon s'installe **du 23 octobre au 15 novembre 2026** sur le **mail Général-Delaborde**, derrière le Parc des expositions et des congrès. C'est une sortie possible pendant les vacances de la Toussaint, même sans acheter de billet d'entrée : on accède librement à la fête, mais chaque attraction est payante. Avec des enfants, le choix de l'heure et le budget consacré aux tours comptent davantage que la durée passée sur place.

## Quand venir pour profiter des manèges ?

La [Ville de Dijon](https://www.dijon.fr/agenda/la-fete-foraine-de-retour-a-dijon/) annonce des horaires de **14 h à 23 h**, avec des prolongations certains soirs jusqu'à **1 h du matin**. Attention toutefois : l'en-tête de la même page indique une ouverture « à partir de 15 h ». Cette divergence n'est pas résolue dans l'annonce municipale. Si vous souhaitez arriver dès l'ouverture, vérifiez l'horaire le jour choisi plutôt que de compter sur 14 h sans confirmation.

Avec de jeunes enfants, privilégier le début d'après-midi permet de profiter des manèges avant une éventuelle fatigue en soirée. Les familles qui recherchent surtout les lumières et l'ambiance nocturne peuvent venir plus tard, en adaptant la durée de visite au rythme des enfants. Les jours de forte affluence, prévoyez aussi du temps pour les files d'attente.

## Quel budget prévoir pour les enfants ?

**L'entrée est gratuite, pas les tours de manège.** La mairie ne publie pas de grille de prix par attraction : impossible donc d'annoncer honnêtement le coût d'un tour ou d'un après-midi complet. Le plus simple est de fixer **une enveloppe de dépenses avant d'entrer**, puis de choisir ensemble les attractions en fonction des tarifs affichés sur place.

Par exemple, une famille peut décider de consacrer **20 € au total aux manèges** : il s'agit d'un plafond qu'elle se fixe, et non d'un forfait proposé par la fête. Le nombre de tours possibles dépendra des prix constatés. Prévoyez séparément les éventuelles boissons, friandises ou parties aux stands de jeux.

Avant de faire la queue, vérifiez auprès de chaque attraction les **conditions d'âge ou de taille** et la possibilité d'être accompagné par un adulte : aucune liste officielle commune des restrictions n'a été publiée. Pour les tout-petits ou avec une poussette, un parcours court et des pauses à l'écart de la musique peuvent rendre la visite plus agréable. N'anticipez pas la présence de sanitaires ou d'un espace bébé sans vérification sur place.

## Comment rejoindre le mail Général-Delaborde ?

La fête est installée **à l'extérieur, derrière le Parc des expositions**, et non à l'intérieur de ses halls. En transports en commun, le **tram T1** dessert le secteur par les stations **Auditorium** et **Poincaré**, repérées sur le [plan du Parc des expositions](https://dijonbourgogne-events.com/wp-content/uploads/2023/04/Dijon-Bourgogne-Events_Map.pdf). Depuis la gare de Dijon, le T1 permet de rejoindre ce quartier sans prendre la voiture. Vérifiez les horaires et perturbations du réseau avant le départ.

En voiture, le [parking Clemenceau indiqué par Divia](https://information.divia.fr/sinformer/voiture/parkings-en-ouvrage/clemenceau/) se trouve **1 avenue Marbotte**, avec un accès piéton côté boulevard de Champagne, près de l'Auditorium. Il est annoncé ouvert **24 h/24 et 7 j/7**, mais ne supposez pas que le stationnement est gratuit. Repérez votre chemin de retour avant de partir, surtout si vous restez après la tombée de la nuit.

## Fête foraine ou Foire gastronomique : faut-il choisir ?

Les deux rendez-vous sont voisins, mais **ce ne sont pas le même événement**. La fête foraine se tient sur le mail Général-Delaborde jusqu'au 15 novembre. La [Foire internationale et gastronomique de Dijon](https://www.foirededijon.com/) a lieu **du 31 octobre au 11 novembre 2026** dans les halls du Parc des expositions, avec ses propres billets et horaires.

Si les enfants veulent avant tout faire des tours de manège, nul besoin d'acheter une entrée à la Foire gastronomique. Si vous envisagez aussi ses ateliers ou ses animaux, consultez notre [guide de la Foire de Dijon 2026 en famille](/articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/) pour choisir le jour et calculer séparément le budget de cette deuxième visite.

## Et pour un week-end à Dijon ?

Si la fête foraine s'inscrit dans un séjour, l'[Aparthotel Adagio Access Dijon République sur Booking.com](https://www.booking.com/hotel/fr/aparthotel-adagio-access-dijon-republique.fr.html), **33 rue de Mulhouse**, propose des hébergements avec kitchenette et des options de chambres familiales. C'est une piste pratique pour préparer des repas simples avec les enfants et rejoindre le secteur du Parc des expositions. Vérifiez la **capacité exacte du logement**, le prix et les disponibilités pour vos dates : rien n'est garanti à l'avance.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | Foire de Dijon 2026 avec les enfants: gratuités, ateliers et Ferme Côte-d'Or | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/cuisine/fabrique-de-pain-d-epices-a-dijon-faut-il-reserver-et-combien-prevoir-avec-des-enfants/ | Fabrique de pain d'épices à Dijon: faut-il réserver et combien prévoir avec des enfants? | cuisine | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/activites/parc-de-l-auxois-avec-des-enfants-comment-combiner-animaux-maneges-et-piscine/ | Parc de l'Auxois avec des enfants: comment combiner animaux, manèges et piscine | activites | Arnay-sous-Vitteaux, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/fete-des-rues-aux-enfants-2026-a-paris-ou-aller-selon-l-arrondissement/ | Fête des rues aux enfants 2026 à Paris: où aller selon l'arrondissement? | evenements | Paris, Paris, Île-de-France
- /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | Foire aux santons de Marseille 2026: dates, inauguration et visite en famille | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | Nuit des Châteaux 2026 à Tanlay: visites aux bougies les 16 et 17 octobre | evenements | Tanlay, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/foire-de-la-barguillere-a-foix-samedi-ou-dimanche-avec-des-enfants/ | Foire de la Barguillère à Foix: samedi ou dimanche avec des enfants ? | evenements | Foix, Ariège, Occitanie
- /articles/evenements/fete-de-la-chataigne-a-collobrieres-quel-dimanche-choisir-avec-des-enfants/ | Fête de la Châtaigne à Collobrières: quel dimanche choisir avec des enfants? | evenements | Collobrières, Var, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/vacaf-2026-en-cote-d-or-jusqu-a-80-du-sejour-pris-en-charge/ | VACAF 2026 en Côte-d'Or: jusqu'à 80 % du séjour pris en charge | bons-plans | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/parentalite/cercles-de-parents-en-cote-d-or-trois-seances-gratuites-pour-echanger-pendant-les-premieres-annees/ | Cercles de Parents en Côte-d'Or: trois séances gratuites pour échanger pendant les premières années | parentalite | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/maison/canape-matelas-ou-electromenager-a-dijon-donner-faire-enlever-ou-aller-en-dechetterie/ | Canapé, matelas ou électroménager à Dijon: donner, faire enlever ou aller en déchetterie ? | maison | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/vie-pratique/frais-scolaires-en-cote-d-or-quelles-aides-demander-au-departement/ | Frais scolaires en Côte-d'Or: quelles aides demander au Département? | vie-pratique | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/sorties/cite-des-climats-a-beaune-en-famille-tarifs-parcours-enfants-et-billets/ | Cité des Climats à Beaune en famille: tarifs, parcours enfants et billets | sorties | Beaune, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/village-du-pere-noel-a-montbazon-2026-dates-activites-et-budget-en-famille/ | Village du Père Noël à Montbazon 2026: dates, activités et budget en famille | evenements | Montbazon, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-a-orleans-2026-en-famille-marches-horaires-et-maneges-apres-noel/ | Marché de Noël d’Orléans 2026 en famille: horaires, lieux et manèges | evenements | Orléans, Loiret, Centre-Val de Loire
- /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | Noël à Nice 2026 en famille: village, spectacles et crèche | evenements | Nice, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | Noël à Toulouse 2026 en famille: marchés, Père Noël et patinoire | evenements | Toulouse, Haute-Garonne, Occitanie
- /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | Thoiry Lumières Sauvages 2026-2027: dates, billets et visite en famille | evenements | Thoiry, Yvelines, Île-de-France
- /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | Noël à Nantes 2026: marché de Noël et Voyage en hiver en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | Noël à Chenonceau 2026: décors, nocturnes et tarifs en famille | evenements | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | Noël Gaulois 2026 au Parc Astérix: billets, glissades et spectacles en famille | evenements | Plailly, Oise, Hauts-de-France
- /articles/evenements/train-du-pere-noel-a-toucy-2026-horaires-tarifs-et-reservation/ | Train du Père Noël à Toucy 2026: horaires, tarifs et réservation | evenements | Toucy, Yonne, Bourgogne-Franche-Comté

### Historique Radar lié

- refresh | /articles/evenements/fete-de-la-chataigne-a-collobrieres-quel-dimanche-choisir-avec-des-enfants/ | 2026-10-08T10:21:36.677Z
- opportunity | /articles/evenements/fete-des-rues-aux-enfants-2026-a-paris-ou-aller-selon-l-arrondissement/ | 2026-10-03T14:16:09.016Z
- opportunity | /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | 2026-10-23T15:29:55.218Z
- opportunity | /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | 2026-10-21T16:31:41.000Z
- opportunity | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-10-24T12:31:27.784Z
- opportunity | /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | 2026-10-24T15:27:41.430Z
- opportunity | /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | 2026-10-25T04:31:33.540Z
- opportunity | /articles/evenements/noel-a-orleans-2026-en-famille-marches-horaires-et-maneges-apres-noel/ | 2026-10-25T07:29:47.050Z
- opportunity | /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | 2026-10-24T23:34:36.270Z
- opportunity | /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | 2026-10-24T09:33:57.174Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
