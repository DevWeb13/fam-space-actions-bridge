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
title: "Saint-Nicolas-de-Port 2026 en famille : village, défilé ou procession ?"
subtitle: Le samedi 5 décembre, choisir le bon moment pour venir avec les enfants
summary: "Village gratuit de 14 h à 19 h, défilé de chars et procession aux flambeaux : les repères confirmés et les précautions pour la Saint-Nicolas 2026 à Saint-Nicolas-de-Port."
category: evenements
location:
  city: Saint-Nicolas-de-Port
  department: Meurthe-et-Moselle
  region: Grand Est
keywords:
  - Saint-Nicolas-de-Port 5 décembre 2026 en famille
  - festivités Saint Nicolas de Port défilé 2026
  - village Saint Nicolas de Port procession aux flambeaux
sources:
  - title: Ville de Saint-Nicolas-de-Port - Festivités de la Saint-Nicolas, 5 décembre 2026
    url: https://www.saintnicolasdeport.com/fr/ev/1263095/792846/festivites-de-la-saint-nicolas-1
  - title: Ville de Saint-Nicolas-de-Port - Village de la Saint-Nicolas, 14 h à 19 h
    url: https://www.saintnicolasdeport.com/fr/nw/1263056/3010347/village-de-la-saint-nicolas-recherche-de-producteurs-et-artisans-en-gastronomie
  - title: Ville de Saint-Nicolas-de-Port - Se déplacer
    url: https://saintnicolasdeport.com/fr/rb/1023453/se-deplacer-19
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille
  decision: Choisir le bon moment pour venir avec des enfants le 5 décembre, entre village de l'après-midi, défilé et procession en soirée, sans confondre Saint-Nicolas-de-Port avec Nancy.
  affiliationPotential: "Hébergement naturel pour les familles venant de loin : des logements à Saint-Nicolas-de-Port sont effectivement proposés sur Booking.com (https://www.booking.com/city/fr/saint-nicolas-de-port.fr.html) ; vérifier capacité familiale et disponibilité à la date choisie. Aucune billetterie à promouvoir pour la fête annoncée gratuite."
  gsc:
    retrievedAt: 2026-11-02T02:27:57+01:00
    dataThrough: 2026-10-30
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Saint-Nicolas-de-Port - Festivités du 5 décembre 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-05
---

Le **samedi 5 décembre 2026**, Saint-Nicolas-de-Port, en Meurthe-et-Moselle, célèbre la Saint-Nicolas avec un village, des spectacles de rue, un défilé de chars et une procession aux flambeaux dans la basilique. L'accès aux festivités est **gratuit**. Pour une famille, le choix dépend surtout de l'âge des enfants : une promenade l'après-midi est plus facile à écourter qu'une soirée de défilé et de procession.

## Le village de 14 h à 19 h : le choix le plus souple avec de jeunes enfants

Le [Village de la Saint-Nicolas](https://www.saintnicolasdeport.com/fr/nw/1263056/3010347/village-de-la-saint-nicolas-recherche-de-producteurs-et-artisans-en-gastronomie) est confirmé **place des Droits de l'Homme, de 14 h à 19 h**, le samedi 5 décembre. La Ville annonce aussi des spectacles et des déambulations dans le cadre de la fête, sans publier encore un horaire individuel pour chacun.

Avec un bébé ou un enfant de maternelle, privilégiez une visite de l'après-midi : vous pouvez découvrir les stands et l'ambiance sans attendre les rendez-vous du soir. Prévoyez une pause au chaud si nécessaire et gardez une marge pour les repas et la fatigue. La Ville recherche des producteurs proposant de la petite restauration, mais ne confirme pas encore la liste définitive des stands : mieux vaut ne pas compter sur une offre précise.

L'entrée gratuite ne signifie pas que les boissons, les repas et les achats auprès des exposants sont offerts.

## Défilé et procession : deux rendez-vous différents

Le [programme général annoncé par la Ville](https://www.saintnicolasdeport.com/fr/ev/1263095/792846/festivites-de-la-saint-nicolas-1) comprend un **défilé de chars et de groupes musicaux**, puis la **procession ancestrale aux flambeaux dans la basilique**. Cette dernière est un moment de tradition religieuse, distinct du spectacle des chars dans les rues.

Pour des enfants qui veulent surtout voir les chars, le défilé est le rendez-vous à privilégier, à condition de vérifier son heure de départ et son parcours avant de venir. Pour des enfants plus grands intéressés par la tradition et l'atmosphère de la basilique, la procession peut prolonger la sortie, avec davantage d'attente et une fin de soirée à anticiper.

**Au 2 novembre 2026, la page municipale ne donne ni l'heure précise ni le parcours du défilé, ni l'horaire de la procession.** Ne vous fiez pas aux horaires d'une édition précédente. La Ville renvoie également à son application « St Nicolas » pour préparer la visite. Consultez ses annonces actualisées quelques jours avant le 5 décembre.

## Foule, poussette et retour : ce qu'il faut anticiper

La fête attire habituellement beaucoup de visiteurs, selon l'organisateur. Avec une poussette, prévoyez un itinéraire court et acceptez de changer d'emplacement si la foule devient dense. Un porte-bébé peut être plus maniable pendant les rassemblements, selon l'âge de l'enfant. Pour la soirée, emportez des vêtements chauds et convenez d'un point de rendez-vous avec les enfants assez grands pour se déplacer seuls quelques instants.

La Ville ne publie pas encore de dispositif spécifique pour le **stationnement, les rues fermées, les toilettes, les tables à langer ou l'accessibilité des différents espaces** le 5 décembre. Ces éléments sont à confirmer avant le départ, particulièrement si vous venez en fauteuil roulant ou avec une poussette.

## Comment venir à Saint-Nicolas-de-Port ?

Saint-Nicolas-de-Port est une commune distincte de Nancy. La [page municipale consacrée aux déplacements](https://saintnicolasdeport.com/fr/rb/1023453/se-deplacer-19) indique notamment les **bus SUB lignes 23 et 24** : la 23 relie le secteur à Nancy (Artem), tandis que la 24 dessert notamment Laneuveville. La gare ferroviaire la plus proche se trouve à **Varangéville**, dans la commune voisine.

Ces dessertes habituelles ne garantissent pas un retour après la procession. Vérifiez les horaires du **samedi 5 décembre**, le dernier départ et les éventuelles déviations avant de choisir de rester en soirée. En voiture, ne supposez pas que les places proches du centre seront accessibles pendant le défilé : attendez le plan de circulation de l'organisateur.

Si vous cherchez plutôt les villages, illuminations et le grand défilé **dans Nancy**, consultez notre [guide des Fêtes de Saint-Nicolas 2026 à Nancy](https://www.fam-space.fr/articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/). Les deux villes proposent des événements différents le même week-end.

## Dormir sur place pour éviter un retour tardif

Pour les familles venant de loin, une nuit à Saint-Nicolas-de-Port peut simplifier la soirée. La maison d'hôtes [Les Berges de l'Ô sur Booking.com](https://www.booking.com/hotel/fr/les-berges-de-l-a.fr.html), au **10 ruelle du Moulin**, annonce des chambres familiales, un parking privé gratuit et l'accueil des enfants. L'arrivée est indiquée **de 17 h à 21 h** : il faut donc organiser l'enregistrement autour des festivités.

La fiche précise que les enfants de plus de 4 ans sont facturés au tarif adulte, qu'un lit bébé peut être demandé gratuitement et que les lits d'appoint sont payants et soumis à disponibilité. Renseignez les âges de tous les enfants pour vérifier **la capacité réelle du logement**, le prix et les conditions d'annulation pour la nuit du 5 au 6 décembre ; aucune disponibilité à cette date n'est garantie.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | Fêtes de Saint-Nicolas 2026 à Nancy en famille: défilé, villages et animations | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | Saint-Nicolas 2026 à Carcassonne: campements médiévaux et marche aux flambeaux en famille | evenements | Carcassonne, Aude, Occitanie
- /articles/evenements/saint-nicolas-2026-a-epinal-en-famille-defile-du-5-decembre-ou-marche-de-noel/ | Saint-Nicolas 2026 à Épinal: cortège du 5 décembre et marché de Noël en famille | evenements | Épinal, Vosges, Grand Est
- /articles/activites/port-aux-cerises-a-draveil-quelle-activite-choisir-selon-l-age-des-enfants/ | Port aux Cerises à Draveil: quelle activité choisir selon l'âge des enfants? | activites | Draveil, Essonne, Île-de-France
- /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | Noël à Nice 2026 en famille: village, spectacles et crèche | evenements | Nice, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/cuisine/foire-aux-harengs-de-dieppe-2026-quoi-gouter-et-comment-preparer-la-journee/ | Foire aux Harengs de Dieppe 2026: quoi goûter et comment préparer la journée | cuisine | Dieppe, Seine-Maritime, Normandie
- /articles/voyages/saint-bertrand-de-comminges-avec-des-enfants-village-seul-ou-grande-boucle-a-pied/ | Saint-Bertrand-de-Comminges avec des enfants: village seul ou grande boucle à pied? | voyages | Saint-Bertrand-de-Comminges, Haute-Garonne, Occitanie
- /articles/evenements/noel-d-autrefois-2026-au-musee-de-plein-air-quel-jour-venir-en-famille/ | Noël d’autrefois 2026 à Villeneuve-d’Ascq: dates, ateliers et accès en famille | evenements | Villeneuve-d'Ascq, Nord, Hauts-de-France
- /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | Ludothèques du Grand Nancy: où jouer en famille et emprunter des jeux | parentalite | Meurthe-et-Moselle, Grand Est
- /articles/maison/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/ | Meubles d'occasion en Meurthe-et-Moselle: où acheter, donner et réparer ? | maison | Meurthe-et-Moselle, Grand Est
- /articles/vie-pratique/se-deplacer-a-nancy-en-famille-gratuites-bus-et-parkings-relais/ | Se déplacer à Nancy en famille: gratuités, bus et parkings relais | vie-pratique | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/activites/patrimoine-en-partage-a-luneville-faut-il-inscrire-son-enfant-pour-toute-la-semaine/ | Patrimoine en partage à Lunéville: faut-il inscrire son enfant pour toute la semaine? | activites | Lunéville, Meurthe-et-Moselle, Grand Est
- /articles/evenements/nancy-jazz-pulsations-2026-en-famille-spectacles-enfants-tarifs-et-conseils/ | Nancy Jazz Pulsations 2026 en famille: spectacles enfants, tarifs et conseils | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/evenements/festival-du-livre-jeunesse-de-rouen-2026-quel-jour-et-quelles-activites-choisir-avec-les-enfants/ | Festival du livre jeunesse de Rouen 2026: dates, tarifs et activités en famille | evenements | Rouen, Seine-Maritime, Normandie
- /articles/evenements/noel-2026-a-quimper-en-famille-village-concert-ou-ateliers-gratuits/ | Noël 2026 à Quimper en famille: village, concert et animations gratuites | evenements | Quimper, Finistère, Bretagne
- /articles/evenements/noel-2026-a-selestat-en-famille-marches-ou-parcours-du-sapin/ | Noël 2026 à Sélestat en famille: marchés, sapins et visites gratuites | evenements | Sélestat, Bas-Rhin, Grand Est
- /articles/evenements/cirque-de-noel-d-alsace-2026-a-eckbolsheim-quelle-seance-choisir-avec-des-enfants/ | Cirque de Noël d’Alsace 2026 à Eckbolsheim: dates, horaires et accès en famille | evenements | Eckbolsheim, Bas-Rhin, Grand Est
- /articles/evenements/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel/ | Noël 2026 à Chambéry en famille: marchés, parade et ateliers | evenements | Chambéry, Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/noel-2026-a-besancon-en-famille-contes-gratuits-marche-solidaire-ou-artisans/ | Noël 2026 à Besançon en famille: contes, marché solidaire et artisans | evenements | Besançon, Doubs, Bourgogne-Franche-Comté
- /articles/evenements/planete-ocean-a-paris-preparer-la-visite-en-famille/ | Planète Océan à Paris: préparer la visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | Noël 2026 à Paris La Défense en famille: marché, animations et patinoire | evenements | Puteaux, Hauts-de-Seine, Île-de-France
- /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | Noël 2026 à Cannes en famille: marché du centre et Palm Beach | evenements | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur

### Historique Radar lié

- opportunity | /articles/evenements/cirque-de-noel-d-alsace-2026-a-eckbolsheim-quelle-seance-choisir-avec-des-enfants/ | 2026-11-01T12:31:31.417Z
- opportunity | /articles/evenements/festival-du-livre-jeunesse-de-rouen-2026-quel-jour-et-quelles-activites-choisir-avec-les-enfants/ | 2026-11-02T00:36:18.455Z
- opportunity | /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | 2026-10-19T16:47:56.278Z
- opportunity | /articles/evenements/noel-2026-a-besancon-en-famille-contes-gratuits-marche-solidaire-ou-artisans/ | 2026-11-01T06:27:50.817Z
- opportunity | /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | 2026-10-31T22:36:58.800Z
- opportunity | /articles/evenements/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel/ | 2026-11-01T09:37:48.790Z
- opportunity | /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | 2026-11-01T01:35:08.448Z
- opportunity | /articles/evenements/noel-2026-a-quimper-en-famille-village-concert-ou-ateliers-gratuits/ | 2026-11-01T18:35:45.871Z
- opportunity | /articles/evenements/noel-2026-a-selestat-en-famille-marches-ou-parcours-du-sapin/ | 2026-11-01T15:30:15.363Z
- opportunity | /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | 2026-10-25T04:31:33.540Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
