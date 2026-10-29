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
title: "Festival BD Colomiers 2026 en famille : quel jour choisir et combien ça coûte ?"
subtitle: "Du 20 au 22 novembre : ateliers, lectures et spectacles selon l'âge des enfants"
summary: "Vendredi pour les lectures en pyjama, samedi pour les ateliers et une lecture dès 6 ans, dimanche pour les jeux en ville et les séances des plus jeunes : les horaires, lieux et tarifs pour organiser la visite."
category: evenements
location:
  city: Colomiers
  department: Haute-Garonne
  region: Occitanie
keywords:
  - festival BD Colomiers 2026
  - festival BD Colomiers enfants
  - festival BD Colomiers tarifs 2026
sources:
  - title: Festival BD Colomiers — édition 2026
    url: https://www.bdcolomiers.com/les-evenements/le-festival
  - title: Festival BD Colomiers — tarifs, horaires et accès
    url: https://www.bdcolomiers.com/les-evenements/infos-pratiques
  - title: Festival BD Colomiers — animations jeunesse
    url: https://www.bdcolomiers.com/les-evenements/animations-et-ateliers/animations-jeunesse
  - title: Festival BD Colomiers — animations tout public
    url: https://www.bdcolomiers.com/les-evenements/animations-et-ateliers/animations-tout-public
  - title: Festival BD Colomiers — Nouvelle vague, lectures live
    url: https://www.bdcolomiers.com/les-evenements/spectacles-et-evenements/nouvelle-vague-lectures-live
  - title: Cinéma Véo Grand Central — séances du festival BD 2026
    url: https://colomiers.veocinemas.fr/events/84950-festival-bd-colomiers-2026-or-avant-premieres-rencontres-seances-speciales/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir
  decision: Choisir le jour et les activités selon l'âge des enfants, puis prévoir le budget réel entre Hall Comminges, ateliers, spectacles et cinéma.
  affiliationPotential: Billets du festival vendus sur place, sans partenaire billetterie vérifié. Appart'City Classic Toulouse Colomiers vérifié sur Booking.com pour une famille venant passer le week-end (appartements avec kitchenette, couchages familiaux et lit bébé sur demande) ; disponibilité du 20 au 22 novembre non confirmée.
  gsc:
    retrievedAt: 2026-10-29T02:27:59+01:00
    dataThrough: 2026-10-26
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Festival BD Colomiers — édition 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-11-22
---

Du **vendredi 20 au dimanche 22 novembre 2026**, le Festival BD Colomiers accueille les familles autour des bandes dessinées, des ateliers créatifs, des lectures et du cinéma. Pour une première visite avec des enfants, **le samedi offre le plus de choix**. Le vendredi convient à une courte sortie après l'école ; le dimanche ajoute un parcours de jeux dans la ville et des films pour les plus jeunes. Attention : **l'entrée au Hall Comminges est payante pour certains adultes**, mais les expositions et plusieurs animations sont en accès libre.

## Vendredi, samedi ou dimanche : que choisir avec les enfants ?

**Vendredi 20 novembre : une sortie courte en fin de journée.** Au Pavillon blanc Henri-Molina, les ateliers de portraits mêlant photographie et dessin se déroulent de **16 h à 18 h 30**. À **18 h**, la **Pyjama Party** invite les familles à écouter des albums et comptines : pyjamas et doudous sont les bienvenus. Le Hall Comminges ouvre de **14 h à 19 h**. C'est le choix le plus simple pour profiter d'une animation sans consacrer toute une journée au festival.

**Samedi 21 novembre : le plus polyvalent.** Au Pavillon blanc, les lectures **« Raconte-moi »** ont lieu de **11 h à 11 h 30** et de **16 h à 16 h 30**. Les ateliers créatifs sont proposés de **10 h à 12 h** et de **14 h à 18 h**. Un atelier photo avec l'association Déclic est annoncé à **13 h 30**, et un atelier de dessin et photo avec **Anne Letuffe**, pensé pour les tout-petits et leurs accompagnants, à **15 h**. À **17 h**, les lectures BD live **« Nouvelle vague »** au Chapikioske s'adressent aux enfants **dès 6 ans** : séance d'une heure, **2 € par personne**. Le Hall ferme à **20 h**, ce qui laisse du temps aux amateurs de BD pour parcourir les stands.

**Dimanche 22 novembre : lectures, dessins et jeux en ville.** Les lectures et ateliers du Pavillon blanc reprennent aux mêmes horaires que le samedi, dont l'atelier d'Anne Letuffe à **15 h**. De **11 h à 17 h**, la **« Coupe du monde de Colomiers »** propose un parcours participatif mêlant football, défis et bande dessinée : le kit est à récupérer au point info du festival. La lecture live de **17 h** est cette fois destinée aux **12 ans et plus** ; ne la choisissez pas pour un enfant de 6 ans en pensant retrouver le programme du samedi.

Les ateliers jeunesse du Pavillon blanc sont **en accès libre dans la limite des places disponibles**, avec matériel fourni. L'accès libre ne garantit donc pas de pouvoir participer à l'atelier voulu. Retrouvez les détails sur le [programme officiel des animations jeunesse](https://www.bdcolomiers.com/les-evenements/animations-et-ateliers/animations-jeunesse).

## Combien prévoir pour une famille ?

La [billetterie officielle](https://www.bdcolomiers.com/les-evenements/infos-pratiques) distingue plusieurs dépenses :

- **Hall Comminges** (éditeurs, stands et dédicaces) : **3 € par adulte**, gratuit pour les **moins de 18 ans**, les étudiants et les titulaires de la **carte Pastel-Tisséo**. Le **pass week-end à 5 €** donne accès au Hall pendant les trois jours. Achat uniquement sur place.
- **Expositions** : accès libre.
- **Spectacles au Chapikioske** : **2 € par personne** ; vente des billets sur place à partir de **30 minutes avant** la représentation.
- **Projections au cinéma Véo Grand Central** : **6,50 €** au tarif normal et **5 € pour les moins de 14 ans**. Réservation distincte auprès du cinéma.

Par exemple, **deux adultes et deux enfants de 8 et 12 ans** paient **6 €** pour entrer une journée au Hall, sans spectacle ni cinéma. S'ils assistent tous les quatre à une lecture live à 2 €, leur budget devient **14 €**. Pour deux adultes qui souhaitent visiter le Hall sur deux jours, deux pass week-end coûtent **10 €**, contre 12 € avec quatre billets à la journée.

Il est aussi possible de profiter des expositions et animations en accès libre **sans acheter de billet pour le Hall**. Prévoyez un supplément seulement si vous souhaitez un spectacle, une projection, des achats de livres ou un repas.

## Et si les enfants préfèrent le cinéma ?

Le **Véo Grand Central** propose des séances spécifiques pendant le festival. Parmi les choix adaptés aux familles figurent **« À la poursuite de l'Affreunard »**, samedi à **11 h**, annoncé dès **4 ans**, et **« Le Noël d'Ernest et Célestine »**, dimanche à **16 h**, annoncé dès **3 ans**. Ces séances peuvent convenir à un enfant qui préfère rester assis devant un film plutôt que multiplier les ateliers.

Vérifiez la séance et réservez directement sur le [programme 2026 du cinéma Véo Grand Central](https://colomiers.veocinemas.fr/events/84950-festival-bd-colomiers-2026-or-avant-premieres-rencontres-seances-speciales/) : le billet du Hall Comminges ne comprend pas le cinéma.

## Où aller et comment venir depuis Toulouse ?

Le festival se répartit entre plusieurs lieux. Le **Hall Comminges**, au **6 place des Fêtes**, rassemble les stands d'éditeurs et les dédicaces. Le **Pavillon blanc Henri-Molina**, au **4 place Alex-Raymond**, accueille les ateliers et lectures jeunesse. Le **Chapikioske**, sur cette même place, reçoit les spectacles. Le **cinéma Véo Grand Central** se trouve au **10 allée du Rouergue**. Ne partez pas du principe que toutes les animations ont lieu au Hall.

Le Pavillon blanc ouvre **vendredi de 13 h à 19 h**, puis **samedi et dimanche de 10 h à 19 h**. Pour venir de Toulouse en transports, l'organisateur indique le **métro A puis le bus L2**, ou le **TER Toulouse–Auch jusqu'à la gare de Colomiers**. Vérifiez les correspondances sur [Tisséo](https://www.tisseo.fr/plan-interactif) avant le départ.

Avec une poussette, choisissez un ou deux lieux prioritaires plutôt qu'un programme trop chargé : les activités sont réparties dans le centre-ville. Le festival est labellisé **Villes pour Tous**, mais les conditions précises d'accès en poussette, les tables à langer et la possibilité de réchauffer un repas bébé ne sont pas détaillées dans les informations officielles consultées. Prévoyez donc le nécessaire pour les changes et les repas, ainsi qu'une pause entre deux activités.

Pour déjeuner, l'organisateur signale des restaurants accessibles à pied et trois food trucks, avec des options végétariennes et véganes. Les menus enfants et les équipements bébé ne sont pas confirmés : si ces points sont indispensables, mieux vaut les demander à l'établissement choisi.

## Dormir à Colomiers pour prolonger le week-end

Pour les familles venant de loin, l'[Appart'City Classic Toulouse Colomiers sur Booking.com](https://www.booking.com/hotel/fr/my-suitevillage-colomiers.fr.html) est une option à examiner : cette résidence propose des appartements, dont des configurations familiales, pratiques pour garder un rythme souple avec des enfants. Vérifiez la capacité réelle, les équipements nécessaires, le trajet jusqu'aux lieux du festival et le prix total pour les nuits souhaitées. **Aucune disponibilité ni aucun tarif pour le week-end du 20 au 22 novembre n'est confirmé ici.**

Pour ajuster votre programme avant de partir, consultez la [page officielle du Festival BD Colomiers 2026](https://www.bdcolomiers.com/les-evenements/le-festival) : les ateliers ont des places limitées et chaque lieu suit ses propres horaires.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/festival-cite-en-jeux-2026-a-colomiers-quel-jour-choisir-avec-des-enfants/ | Festival Cité en Jeux 2026 à Colomiers: quel jour choisir avec des enfants | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/evenements/hop-hop-hop-festival-2026-en-famille-quel-jour-choisir/ | Hop Hop Hop Festival 2026 en famille: quel jour choisir? | evenements | Saint-Cirgues, Lot, Occitanie
- /articles/evenements/marche-de-noel-de-cusset-2026-en-famille-quel-jour-choisir/ | Marché de Noël de Cusset 2026 en famille: quel jour choisir? | evenements | Cusset, Allier, Auvergne-Rhône-Alpes
- /articles/bons-plans/filitosa-en-famille-quel-billet-choisir-et-combien-prevoir/ | Filitosa en famille: quel billet choisir et combien prévoir? | bons-plans | Sollacaro, Corse-du-Sud, Corse
- /articles/evenements/habits-de-lumiere-a-epernay-avec-des-enfants-quel-jour-choisir-en-2026/ | Habits de Lumière à Épernay avec des enfants: quel jour choisir en 2026? | evenements | Épernay, Marne, Grand Est
- /articles/activites/accrocamp-toulouse-avec-des-enfants-quel-pass-choisir-selon-leur-taille/ | AccroCamp Toulouse avec des enfants: quel pass choisir selon leur taille? | activites | Toulouse, Haute-Garonne, Occitanie
- /articles/sorties/chateau-de-kerjean-avec-des-enfants-combien-de-temps-prevoir-et-quel-billet-choisir/ | Château de Kerjean avec des enfants: combien de temps prévoir et quel billet choisir? | sorties | Saint-Vougay, Finistère, Bretagne
- /articles/bons-plans/musee-de-gajac-a-villeneuve-sur-lot-combien-coute-vraiment-une-visite-en-famille/ | Musée de Gajac à Villeneuve-sur-Lot: combien coûte vraiment une visite en famille? | bons-plans | Villeneuve-sur-Lot, Lot-et-Garonne, Nouvelle-Aquitaine
- /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | Noël à Toulouse 2026 en famille: marchés, Père Noël et patinoire | evenements | Toulouse, Haute-Garonne, Occitanie
- /articles/maison/dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage/ | Déchets verts à Toulouse Métropole en 2027: collecte, broyage et compostage | maison | Toulouse, Haute-Garonne, Occitanie
- /articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/ | Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates | vie-pratique | Toulouse, Haute-Garonne, Occitanie
- /articles/voyages/saint-bertrand-de-comminges-avec-des-enfants-village-seul-ou-grande-boucle-a-pied/ | Saint-Bertrand-de-Comminges avec des enfants: village seul ou grande boucle à pied? | voyages | Saint-Bertrand-de-Comminges, Haute-Garonne, Occitanie
- /articles/sorties/aeroscopia-a-blagnac-en-famille-tarifs-avions-et-conseils-de-visite/ | Aeroscopia à Blagnac en famille: tarifs, avions et conseils de visite | sorties | Blagnac, Haute-Garonne, Occitanie
- /articles/bons-plans/pass-explorateurs-toulouse-en-famille-quand-est-il-vraiment-rentable/ | Pass Explorateurs Toulouse en famille: quand est-il vraiment rentable? | bons-plans | Toulouse, Haute-Garonne, Occitanie
- /articles/maison/moustique-tigre-en-haute-garonne-proteger-la-maison-et-le-jardin/ | Moustique tigre en Haute-Garonne: protéger la maison et le jardin | maison | Toulouse, Haute-Garonne, Occitanie
- /articles/voyages/cite-de-l-espace-a-toulouse-en-famille-en-2026-une-journee-suffit-elle-et-ou-dormir/ | Cité de l'espace à Toulouse en famille en 2026: une journée suffit-elle et où dormir | voyages | Toulouse, Haute-Garonne, Occitanie
- /articles/sorties/un-ete-au-bord-du-lac-toulouse-2026-famille/ | Un été au bord du lac à Toulouse: activités gratuites en famille à la Reynerie | sorties | Toulouse, Haute-Garonne, Occitanie
- /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Clermont-Ferrand 2026 en famille: horaires, animations et accès | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-montpellier-2026-en-famille-dates-fermetures-et-attractions/ | Marché de Noël de Montpellier 2026 en famille: horaires, jours fermés et manèges | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | Noël des Alpes 2026 à Annecy en famille: marché, patinoire et illuminations | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | Marchés de Noël de Tours 2026 en famille: lieux, dates et budget | evenements | Tours, Indre-et-Loire, Centre-Val de Loire

### Historique Radar lié

- opportunity | /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/ | 2026-10-29T11:32:05.289Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/marche-de-noel-de-montpellier-2026-en-famille-dates-fermetures-et-attractions/ | 2026-10-29T08:29:37.767Z
- opportunity | /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | 2026-10-28T21:29:26.054Z
- opportunity | /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | 2026-10-24T23:34:36.270Z
- opportunity | /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | 2026-10-29T05:28:53.475Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
