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
title: "bd BOUM 2026 à Blois en famille: ateliers, expositions et cinéma"
subtitle: Du 20 au 22 novembre, les rendez-vous par âge, horaires, inscriptions et tarifs
summary: "Festival bd BOUM 2026 à Blois avec des enfants: salon gratuit, ateliers de BD dès 6 ans, spectacle dès 3 ans et séances jeune public à 5 €."
category: evenements
location:
  city: Blois
  department: Loir-et-Cher
  region: Centre-Val de Loire
keywords:
  - bd BOUM 2026 Blois enfants
  - bd BOUM ateliers jeunesse 2026
  - festival bd Blois 20 21 22 novembre 2026
  - bd BOUM Blois cinéma spectacle prix
sources:
  - title: "Maison de la BD: salon du livre 2026, lieux et horaires"
    url: https://www.maisondelabd.com/sal-du-liv-2026
  - title: "Maison de la BD: ateliers du week-end, âges et inscriptions"
    url: https://www.maisondelabd.com/jeun-we-2026
  - title: "Maison de la BD: expositions du festival 2026"
    url: https://www.maisondelabd.com/expos-2026
  - title: "Maison de la BD: séances de cinéma 2026, âges, durées et tarifs"
    url: https://maisondelabd.com/cine-2026
  - title: "Maison de la BD: concerts, spectacles et lectures 2026"
    url: https://www.maisondelabd.com/concerts-spectacles-2026-3
  - title: "Blois Chambord Tourisme: festival bd BOUM 2026 et programme chronologique"
    url: https://www.bloischambord.com/lactu/carnet-dambiances/festival-de-la-bd/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age
  decision: Choisir pour chaque enfant les activités et séances accessibles selon son âge, leurs horaires, leur lieu et leur coût, en distinguant visite gratuite, inscription obligatoire et spectacle ou cinéma payant.
  affiliationPotential: Le salon et ses expositions sont gratuits; pas de billetterie partenaire pertinente pour cette entrée. Pour un séjour, Booking.com référence l'ibis Blois Centre Château avec une chambre familiale pour 2 adultes et 1 enfant; vérifier capacité selon la famille, tarifs et disponibilités du 20 au 22 novembre avant proposition.
  gsc:
    retrievedAt: 2026-10-18T05:46:43.422Z
    dataThrough: 2026-10-15
    signal: seasonal_opportunity
    basis: "Opportunité saisonnière vérifiée via « Maison de la BD: salon du livre 2026, horaires et implantation »; aucune page forte GSC n'est requise."
eventEndsAt: 2026-11-22
---

La **43e édition de bd BOUM** se tient à **Blois du vendredi 20 au dimanche 22 novembre 2026**. Le salon de bande dessinée et les expositions permettent une sortie gratuite en famille; pour participer à un atelier ou voir un film, il faut regarder de plus près **l'âge conseillé, le lieu et les conditions d'accès**. Voici les rendez-vous qui comptent vraiment avec des enfants.

## Le salon de BD: une sortie gratuite même sans réservation d'atelier

À la **Halle aux grains et sous le chapiteau**, le salon accueille libraires, éditeurs, auteurs et séances de dédicaces sur environ 2 000 m². L'**entrée du salon est gratuite**; les livres, eux, sont payants si vous souhaitez en acheter. Les dédicaces dépendent de la présence des auteurs et de l'affluence.

Les horaires du salon sont les suivants:

- **Vendredi 20 novembre:** 9 h à 19 h.
- **Samedi 21 novembre:** 10 h à 19 h.
- **Dimanche 22 novembre:** 10 h à 18 h.

Une visite du salon peut être associée à l'exposition **«Captain Biceps, Raowl, Mickey et les Schtroumpfs: la bande à Tébo!»**, visible à la Halle aux grains pendant les trois jours. Pour de jeunes lecteurs, c'est une façon de découvrir plusieurs personnages sans devoir assister à une rencontre programmée.

## Dès 3 ans: spectacle ou atelier avec un adulte

Le spectacle de danse et dessin **«Immobile & Rebondi #1»** est proposé au **théâtre Nicolas-Peskine**, dès **3 ans**, le **vendredi 20 à 18 h** et le **samedi 21 à 17 h**. Le tarif annoncé est de **5 €**. Ce rendez-vous convient aux enfants attirés par le mouvement et les images plutôt que par la lecture de BD.

Le **dimanche 22 novembre à 16 h**, l'autrice Betty Bone propose à la **Maison de la BD**, 3 rue des Jacobins, un atelier plastique lié au spectacle, **en binôme adulte-enfant dès 3 ans**. Cette fois, **la réservation est obligatoire et les places sont limitées**: consultez les modalités indiquées sur la [page des ateliers de bd BOUM](https://www.maisondelabd.com/jeun-we-2026). Ne confondez pas le billet du spectacle avec l'inscription à l'atelier.

Autre sortie à envisager dès **4–5 ans**: l'avant-première du film **«Le Noël d'Ernest et Célestine»** au **cinéma Les Lobis**, le **dimanche 22 à 11 h**. Durée annoncée: **1 h 11**; séance **Ciné-Marmot à 5 €**.

## Dès 6 ans: fresque de super-héros et découverte du dessin

La **Maison de la BD** accueille le samedi de **10 h à 18 h** et le dimanche de **10 h à 17 h 30** des propositions de création:

- **Fresque super-héroïque avec Solène Appéré**, à partir de **6 ans**, pour participer à une grande réalisation collective.
- **Atelier bande dessinée avec l'autrice Ida**, pour enfants et adolescents, afin de s'essayer au récit dessiné ou d'approfondir sa pratique.

La page de l'organisateur ne fixe pas, pour ces deux ateliers, un créneau individuel ou une réservation obligatoire: **vérifiez les places et les modalités d'accueil sur place** avant de promettre une participation immédiate à l'enfant.

Le **samedi 21**, des **lectures projetées dès 6 ans** ont aussi lieu à **10 h 30 et 11 h 30**, dans la salle de l'heure du conte de la **bibliothèque Abbé-Grégoire**. Vous pouvez y associer l'exposition jeunesse **«Lina et le secret de la passerelle»**, présentée à la bibliothèque du **17 octobre au 5 décembre 2026**. Elle reste donc visible au-delà du festival.

## Dès 8–9 ans: un film d'animation à 5 €

Le **cinéma Les Lobis**, **12 avenue du Maréchal-Maunoury**, projette **«Le Mystère Lucy Lost»** le **samedi 21 et le dimanche 22 novembre à 14 h**. La séance dure **1 h 25**, est conseillée à partir de **8–9 ans** et coûte **5 €** au tarif Ciné-Marmot.

Si vous prévoyez le film, organisez la visite du salon avant ou après, plutôt que d'ajouter un atelier à horaire fixe qui risque de chevaucher la projection. Les détails des séances sont donnés sur la [présentation cinéma de la Maison de la BD](https://maisondelabd.com/cine-2026).

## Pour les adolescents: fantasy et aquarelle

Deux rendez-vous permettent aux plus grands de créer plutôt que de simplement regarder:

- **Illustration fantasy**, le **samedi 21 novembre à 15 h** à la Maison de la BD, avec Mohamed Reda Diassem, atelier annoncé **pour les ados**.
- **Aquarelle avec Pauchette**, le **dimanche 22 de 14 h 30 à 16 h 30** au cinéma Les Lobis, **à partir de 14 ans**. **Inscription nécessaire, places limitées**: utiliser la procédure indiquée par l'organisateur.

Pour des adolescents déjà amateurs de BD ou de dessin, ces propositions sont plus ciblées qu'une visite rapide de tous les stands. Si votre groupe compte des enfants d'âges différents, prenez en compte les lieux séparés avant de répartir les activités.

## Une dernière animation musicale gratuite le dimanche

Le **dimanche 22 novembre à 17 h**, le cinéma Les Lobis accueille **«L'univers musical de Hisaishi»**, concert de piano par Aline Pelletier autour de la musique des films du Studio Ghibli. **L'entrée est gratuite, sans réservation, dans la limite des places disponibles**. C'est une option pour terminer le week-end avec des enfants qui apprécient cet univers, sans confondre ce concert avec les projections payantes.

## Venir à Blois et dormir sur place

Le festival se répartit entre la **Halle aux grains**, la **Maison de la BD**, la **bibliothèque Abbé-Grégoire**, **Les Lobis** et le **théâtre Nicolas-Peskine**. Avant de réserver une séance, vérifiez l'adresse de chaque rendez-vous et prévoyez le temps de déplacement entre les lieux. Pour organiser d'autres sorties et trajets dans la région sans voiture, notre [guide de Blois, Chambord et Cheverny sans voiture](/articles/voyages/blois-sans-voiture-en-2026-3-jours-pour-chambord-cheverny-et-le-centre-ville/) détaille les possibilités au-delà du festival.

Pour une famille qui transforme la sortie en week-end, l'[ibis budget Blois Centre sur Booking.com](https://www.booking.com/hotel/fr/ibis-budget-blois-centre.fr.html) présente notamment une **catégorie de chambre familiale**. Vérifiez pour les nuits du **20 et du 21 novembre** la capacité admise avec le nombre et l'âge précis de vos enfants, le prix et les conditions d'annulation: **aucune disponibilité à ces dates n'est garantie**.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | Festival du Film pour Enfants 2026 en Isère: séances, ateliers et tarifs | evenements | Vizille, Isère, Auvergne-Rhône-Alpes
- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | Au Creux de l'Oreille 2026 à Noirlac: spectacles et ateliers en famille du 17 au 22 octobre | evenements | Bruère-Allichamps, Cher, Centre-Val de Loire
- /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | Foire du livre de Brive 2026 en famille: dates, auteurs jeunesse et conseils de visite | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine
- /articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/ | Lire en Poche 2026 à Gradignan avec des enfants: organiser une journée sans perdre les ateliers | evenements | Gradignan, Gironde, Nouvelle-Aquitaine
- /articles/evenements/mon-premier-festival-2026-paris-film-age/ | Mon Premier Festival 2026 à Paris: quel film choisir selon l'âge? | evenements | Paris, Paris, Île-de-France
- /articles/evenements/partir-en-livre-2026-en-famille/ | Partir en Livre 2026: trouver une animation jeunesse avant le 19 juillet | evenements
- /articles/voyages/blois-sans-voiture-en-2026-3-jours-pour-chambord-cheverny-et-le-centre-ville/ | Blois sans voiture en 2026: 3 jours pour Chambord, Cheverny et le centre-ville | voyages | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/center-parcs-les-hauts-de-bruyeres-en-famille-quel-cottage-choisir-apres-la-renovation/ | Center Parcs Les Hauts de Bruyères en famille: quel cottage choisir après la rénovation? | voyages | Chaumont-sur-Tharonne, Loir-et-Cher, Centre-Val de Loire
- /articles/vie-pratique/transport-scolaire-remi-41-que-faire-apres-la-rentree/ | Transport scolaire Rémi 41: que faire après la rentrée ? | vie-pratique | Romorantin-Lanthenay, Loir-et-Cher, Centre-Val de Loire
- /articles/activites/balade-en-bateau-a-saint-dye-sur-loire-journee-pique-nique-ou-crepuscule/ | Balade en bateau à Saint-Dyé-sur-Loire: journée, pique-nique ou crépuscule ? | activites | Saint-Dyé-sur-Loire, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/noel-a-chambord-2026-avec-des-enfants-quand-venir-et-que-prevoir/ | Noël à Chambord 2026 avec des enfants: quand venir et que prévoir | evenements | Chambord, Loir-et-Cher, Centre-Val de Loire
- /articles/sorties/chateau-de-chambord-en-famille-tarifs-2026-activites-et-conseils-de-visite/ | Château de Chambord en famille: tarifs 2026, activités et conseils de visite | sorties | Chambord, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/beauval-a-la-toussaint-2026-billets-duree-de-visite-et-hebergement/ | Beauval à la Toussaint 2026: billets, durée de visite et hébergement | voyages | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/zooparc-de-beauval-en-famille-en-2026-un-ou-deux-jours-quel-hotel-et-quel-budget-prevoir/ | ZooParc de Beauval: billets, 1 ou 2 jours, hôtel et budget 2026 | voyages | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | Halloween 2026 à la Mer de Sable: spectacles, frissons et billets en famille | evenements | Ermenonville, Oise, Hauts-de-France
- /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | Toussaint 2026 à Nausicaá: ateliers en journée et nocturne d’Halloween | evenements | Boulogne-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | Métamorphoses 2026 au quai Branly: séances gratuites et films par âge | evenements | Paris, Paris, Île-de-France
- /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | Festi'Mômes 2026 à Nantes: séances, spectacles et tarifs en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | Automnales d'Harcourt 2026: animations, visites et tarifs en famille | evenements | Harcourt, Eure, Normandie

### Historique Radar lié

- opportunity | /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | 2026-10-14T13:49:08.708Z
- opportunity | /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | 2026-10-16T06:56:21.314Z
- opportunity | /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | 2026-10-17T11:48:00.184Z
- opportunity | /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | 2026-10-17T15:41:33.883Z
- opportunity | /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | 2026-10-18T16:46:58.413Z
- opportunity | /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | 2026-10-18T12:12:00.071Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- refresh | /articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/ | 2026-10-06T12:23:52.449Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- opportunity | /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | 2026-10-18T04:19:39.869Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
