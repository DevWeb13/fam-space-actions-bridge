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
title: "Noël à Toulouse 2026 en famille : marchés, Père Noël et patinoire"
subtitle: Du Capitole aux Allées enchantées, choisissez votre sortie selon l'âge des enfants, les dates et le budget.
summary: "Quatre marchés de Noël gratuits à Toulouse, une maison du Père Noël et une patinoire à 5 € : les horaires 2026, les différences et les bons choix en famille."
category: evenements
location:
  city: Toulouse
  department: Haute-Garonne
  region: Occitanie
keywords:
  - marché de Noël Toulouse 2026
  - Noël Toulouse enfants
  - patinoire Capitole 2026
  - maison du Père Noël Toulouse
sources:
  - title: Organisateur — Marché de Noël de Toulouse, édition 2026
    url: https://marchedenoeltoulouse.fr/
  - title: Toulouse Tourisme — Marché de Noël place du Capitole 2026
    url: https://www.toulouse-tourisme.com/agenda/marche-de-noel-place-du-capitole/
  - title: Toulouse Tourisme — Marché de Noël square Charles-de-Gaulle 2026
    url: https://www.toulouse-tourisme.com/agenda/marche-de-noel-au-square-charles-de-gaulle/
  - title: Toulouse Tourisme — Marché de Noël sur les Ramblas 2026
    url: https://www.toulouse-tourisme.com/agenda/marche-de-noel-sur-les-ramblas/
  - title: Toulouse Tourisme — Marché solidaire Les Allées enchantées 2026
    url: https://www.toulouse-tourisme.com/agenda/marche-de-noel-les-allees-enchantees/
  - title: Toulouse Tourisme — Patinoire place du Capitole 2026-2027
    url: https://www.toulouse-tourisme.com/agenda/patinoire-de-toulouse/
  - title: Novotel Toulouse Centre Wilson — Chambres et suites familiales
    url: https://all.accor.com/hotel/8505/index.fr.shtml
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire
  decision: Choisir une sortie de Noël à Toulouse adaptée à l'âge et au budget des enfants, savoir quels lieux sont gratuits, quand voir le Père Noël et si la patinoire vaut le supplément, sans confondre les calendriers.
  affiliationPotential: Marchés gratuits, sans billet partenaire à vendre. Pour un séjour de plusieurs jours seulement, Toulouse City Pass réellement proposé sur Tiqets ; ne pas le présenter comme nécessaire au marché. Novotel Toulouse Centre Wilson, proche du Capitole et proposant des suites familiales, présent sur Booking.com ; disponibilité et capacité à confirmer aux dates choisies.
  gsc:
    retrievedAt: 2026-10-24T02:34:28+02:00
    dataThrough: 2026-10-21
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Organisateur - Marché de Noël de Toulouse, édition 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-03T21:00:00+01:00
---

À Toulouse, une promenade de Noël avec les enfants peut rester gratuite : l'accès aux quatre marchés est libre. Le vrai choix est ailleurs. Pour les chalets traditionnels et les gourmandises, direction le Capitole ; pour la maison du Père Noël, le square Charles-de-Gaulle juste derrière ; pour les cadeaux artisanaux, les Ramblas ; pour les jeux et les ateliers, les Allées enchantées. Seule la patinoire représente un supplément clairement affiché, à **5 € pour 45 minutes, patins compris**.

Attention aux calendriers : les trois premiers marchés se tiennent du **26 novembre au 27 décembre 2026**, le marché solidaire s'arrête le **13 décembre**, tandis que la patinoire continue jusqu'au **3 janvier 2027**, avec une fermeture le 29 décembre.

## Quel marché choisir avec les enfants ?

### Capitole : l'ambiance de Noël classique

Sur la place du Capitole, **94 chalets** proposent gourmandises, jouets, artisanat et idées cadeaux dans un décor illuminé. Des animations gratuites pour les enfants sont annoncées les mercredis et les week-ends. Un petit train fonctionne aussi dans l'espace près du théâtre, à l'entrée du marché ; **son tarif n'est pas précisé** sur la fiche 2026, ne le considérez donc pas comme gratuit.

C'est le choix le plus simple pour une première découverte, notamment si les enfants veulent voir les lumières sans multiplier les déplacements. Le marché ouvre généralement **de 10 h 30 à 21 h**, jusqu'à **22 h les vendredis et samedis**. La [fiche 2026 du Capitole](https://www.toulouse-tourisme.com/agenda/marche-de-noel-place-du-capitole/) indique des horaires particuliers les 24 et 25 décembre, détaillés plus bas.

### Square Charles-de-Gaulle : pour la maison du Père Noël

Derrière le Capitole, le square Charles-de-Gaulle est plus directement tourné vers les enfants : une douzaine de chalets, la **maison du Père Noël**, une boîte ou un espace pour la lettre, des photos et des ateliers annoncés (maquillage, tatouages éphémères, ballons). Parades, chorales et musique complètent le programme.

**Le marché est gratuit, mais cela ne garantit pas que chaque atelier, photo ou animation soit accessible gratuitement ou à toute heure.** La [fiche du square](https://www.toulouse-tourisme.com/agenda/marche-de-noel-au-square-charles-de-gaulle/) confirme les activités, pas un planning détaillé de présence du Père Noël. Si sa rencontre est le motif principal de votre sortie, vérifiez le programme du jour avant de partir. Avec de jeunes enfants, combiner ce square et le Capitole est plus raisonnable que vouloir visiter les quatre marchés.

### Ramblas : pour chercher un cadeau original

Sur les allées Jean-Jaurès, le marché des Ramblas rassemble **28 chalets d'artisans et créateurs**, trois de producteurs locaux et deux chalets gourmands, avec une allée des lutins. Les exposants évoluent au fil des semaines. Il se prête davantage à une balade-cadeaux qu'à une sortie organisée autour d'une animation précise pour les petits.

Ouvert du **26 novembre au 27 décembre**, généralement de **10 h 30 à 21 h** et jusqu'à **22 h les vendredis et samedis**. Le **24 décembre, la fermeture est annoncée à 17 h**. Pour le 25 décembre, la [fiche des Ramblas](https://www.toulouse-tourisme.com/agenda/marche-de-noel-sur-les-ramblas/) ne donne pas d'horaire exceptionnel explicite : mieux vaut vérifier l'ouverture avant de se déplacer.

### Allées enchantées : jeux, ateliers et cadeaux solidaires

Sur les allées Jules-Guesde, près du Grand Rond, le marché de l'économie sociale et solidaire réunit une cinquantaine d'exposants : associations, artisans et coopératives. On y trouve **de grands jeux en bois**, des ateliers créatifs et une guinguette avec restauration. C'est une bonne option avec des enfants qui ont besoin de jouer entre deux stands, ou pour acheter des cadeaux artisanaux et responsables.

Il n'ouvre que du **28 novembre au 13 décembre 2026**. Horaires du dimanche au jeudi : **11 h–19 h 30** pour le marché, restauration jusqu'à 21 h ; les vendredis et samedis : **11 h–21 h**, restauration et animations du soir jusqu'à 22 h. Les ateliers peuvent dépendre du programme et de la capacité d'accueil : consultez la [fiche des Allées enchantées](https://www.toulouse-tourisme.com/agenda/marche-de-noel-les-allees-enchantees/) pour choisir votre visite.

## Patinoire du Capitole : à partir de quel âge et pour quel budget ?

La patinoire est installée place du Capitole sur une surface annoncée de **250 m²**. La séance coûte **5 € pour 45 minutes, location des patins incluse**, selon la [fiche tarifaire 2026-2027](https://www.toulouse-tourisme.com/agenda/patinoire-de-toulouse/). Les enfants sont admis **dès 2 ans et demi**, accompagnés d'un adulte. Pour les plus jeunes, privilégiez les chalets et les décorations : ils ne pourront pas patiner.

Pour une famille de **deux adultes et deux enfants** qui patinent tous, le budget est de **20 €**. Si seuls les deux enfants patinent, prévoyez **10 €**, sous réserve des conditions d'accompagnement sur la glace à confirmer sur place. Les marchés restent gratuits : repas, achats et petit train éventuel sont à ajouter selon vos choix.

La patinoire fonctionne du **26 novembre 2026 au 3 janvier 2027**. Jusqu'au 27 décembre, les horaires généraux suivent ceux du marché ; ensuite, la fiche annonce habituellement **10 h–20 h**, avec des prolongations les vendredis et samedis et une ouverture à **14 h le 1er janvier**. **Elle est fermée le 29 décembre.** Les indications de la fiche se chevauchent pour le 28 décembre : vérifiez précisément ce jour-là avant de venir.

## Les dates à ne pas confondre, surtout à Noël

Les **24 et 25 décembre**, les deux marchés du Capitole et du square Charles-de-Gaulle annoncent respectivement **10 h 30–19 h** puis **14 h–21 h**. Le 24 décembre, les Ramblas ferment à **17 h**. Les Allées enchantées sont déjà terminées à ces dates.

Une particularité mérite attention : les fiches du Capitole et du square mentionnent aussi un horaire pour le **28 décembre**, alors que leur période d'ouverture indiquée se termine le **27 décembre**. Pour éviter un déplacement inutile, retenez le 27 décembre comme dernière date confirmée pour ces marchés et vérifiez toute éventuelle prolongation auprès de l'organisateur. Ne confondez pas cette date avec la prolongation de la patinoire.

## Venir en métro, circuler avec une poussette et prévoir les pauses

Pour le **Capitole et le square**, la station **Capitole (métro A)** est la plus directe ; pour les **Ramblas**, choisissez **Jean-Jaurès (A et B)** ; pour les **Allées enchantées**, **Palais de Justice (B)**. Les fiches de l'office de tourisme confirment la proximité des transports. Vérifiez l'état du réseau Tisséo et l'accessibilité de la station choisie avant de partir si vous voyagez en poussette ou en fauteuil.

Les marchés sont des espaces de promenade, mais la foule, les files d'attente et les passages entre chalets peuvent rendre la poussette moins pratique, surtout en fin de journée et le week-end. Aucune garantie d'accessibilité intégrale de chaque animation n'est publiée dans les fiches consultées : contactez l'organisateur si vous avez un besoin précis. Avec des tout-petits, privilégiez une visite courte en début de journée, une pause au chaud et un seul secteur à la fois.

## Et si vous passez un week-end à Toulouse ?

Pour une simple balade aux marchés, **aucun pass touristique n'est nécessaire**. Si vous ajoutez plusieurs musées ou visites payantes, le [Toulouse City Pass proposé sur Tiqets](https://www.tiqets.com/fr/activites-attractions-toulouse-c66619/billets-pour-toulouse-city-pass-p1006751/) peut mériter une comparaison : vérifiez les attractions réellement incluses et les conditions de votre formule. Il ne donne pas un avantage particulier pour entrer dans les marchés gratuits. Le **Pass Explorateurs**, différent, est analysé dans notre [comparatif familial des visites à Toulouse](https://www.fam-space.fr/articles/bons-plans/pass-explorateurs-toulouse-en-famille-quand-est-il-vraiment-rentable/).

Pour dormir à proximité du centre et revenir facilement aux illuminations, le [Novotel Toulouse Centre Wilson sur Booking.com](https://www.booking.com/hotel/fr/novotel-toulouse-centre-wilson.fr.html) propose notamment des suites adaptées à **deux adultes et deux enfants** selon les configurations : contrôlez les couchages, l'âge des enfants, le tarif final et les disponibilités aux dates voulues. Pour consacrer une seconde journée à une grande visite scientifique, consultez aussi notre [guide de la Cité de l'espace en famille](https://www.fam-space.fr/articles/voyages/cite-de-l-espace-a-toulouse-en-famille-en-2026-une-journee-suffit-elle-et-ou-dormir/) plutôt que d'essayer de l'ajouter à une soirée de marchés.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/bons-plans/pass-explorateurs-toulouse-en-famille-quand-est-il-vraiment-rentable/ | Pass Explorateurs Toulouse en famille: quand est-il vraiment rentable? | bons-plans | Toulouse, Haute-Garonne, Occitanie
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/maison/moustique-tigre-en-haute-garonne-proteger-la-maison-et-le-jardin/ | Moustique tigre en Haute-Garonne: protéger la maison et le jardin | maison | Toulouse, Haute-Garonne, Occitanie
- /articles/activites/accrocamp-toulouse-avec-des-enfants-quel-pass-choisir-selon-leur-taille/ | AccroCamp Toulouse avec des enfants: quel pass choisir selon leur taille? | activites | Toulouse, Haute-Garonne, Occitanie
- /articles/maison/dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage/ | Déchets verts à Toulouse Métropole en 2027: collecte, broyage et compostage | maison | Toulouse, Haute-Garonne, Occitanie
- /articles/sorties/un-ete-au-bord-du-lac-toulouse-2026-famille/ | Un été au bord du lac à Toulouse: activités gratuites en famille à la Reynerie | sorties | Toulouse, Haute-Garonne, Occitanie
- /articles/voyages/cite-de-l-espace-a-toulouse-en-famille-en-2026-une-journee-suffit-elle-et-ou-dormir/ | Cité de l'espace à Toulouse en famille en 2026: une journée suffit-elle et où dormir | voyages | Toulouse, Haute-Garonne, Occitanie
- /articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/ | Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates | vie-pratique | Toulouse, Haute-Garonne, Occitanie
- /articles/evenements/festival-cite-en-jeux-2026-a-colomiers-quel-jour-choisir-avec-des-enfants/ | Festival Cité en Jeux 2026 à Colomiers: quel jour choisir avec des enfants | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/voyages/saint-bertrand-de-comminges-avec-des-enfants-village-seul-ou-grande-boucle-a-pied/ | Saint-Bertrand-de-Comminges avec des enfants: village seul ou grande boucle à pied? | voyages | Saint-Bertrand-de-Comminges, Haute-Garonne, Occitanie
- /articles/sorties/aeroscopia-a-blagnac-en-famille-tarifs-avions-et-conseils-de-visite/ | Aeroscopia à Blagnac en famille: tarifs, avions et conseils de visite | sorties | Blagnac, Haute-Garonne, Occitanie
- /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | Noël à Nantes 2026: marché de Noël et Voyage en hiver en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | Noël à Chenonceau 2026: décors, nocturnes et tarifs en famille | evenements | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | Noël Gaulois 2026 au Parc Astérix: billets, glissades et spectacles en famille | evenements | Plailly, Oise, Hauts-de-France
- /articles/evenements/train-du-pere-noel-a-toucy-2026-horaires-tarifs-et-reservation/ | Train du Père Noël à Toucy 2026: horaires, tarifs et réservation | evenements | Toucy, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | Noël au château d'Amboise 2026: visite, nocturnes et tarifs en famille | evenements | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | Noël à Provins 2026: marché médiéval, animations et visites en famille | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/evenements/chante-nwel-a-ducos-le-28-novembre-2026-une-soiree-de-noel-creole-en-famille/ | Chanté Nwel à Ducos le 28 novembre 2026: une soirée de Noël créole en famille | evenements | Ducos, Martinique, Martinique
- /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | Noël au château de Cheverny 2026: billets, mapping et visite en famille | evenements | Cheverny, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | Foire aux santons de Marseille 2026: dates, inauguration et visite en famille | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | Bédéciné 2026 à Illzach en famille: ateliers, spectacles et billets | evenements | Illzach, Haut-Rhin, Grand Est

### Historique Radar lié

- opportunity | /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | 2026-10-23T12:33:36.649Z
- opportunity | /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | 2026-10-23T15:29:55.218Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-10-24T12:31:27.784Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | 2026-10-23T19:58:30.214Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | 2026-10-24T06:28:53.730Z
- opportunity | /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | 2026-10-24T15:27:41.430Z
- opportunity | /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | 2026-10-24T03:31:56.628Z
- opportunity | /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | 2026-10-24T09:33:57.174Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
