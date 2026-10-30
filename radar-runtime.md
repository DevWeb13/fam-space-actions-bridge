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
title: "Soleils d'hiver 2026 à Angers en famille : marché, manèges et Père Noël"
subtitle: Où aller selon l'âge des enfants, et quelles informations vérifier avant de partir ?
summary: "À partir du 25 novembre 2026, Soleils d'hiver anime plusieurs lieux d'Angers : chalets, village Santa Claus et maison du Père Noël. Voici comment choisir sa sortie en famille sans confondre les sites ni supposer des horaires encore inconnus."
category: evenements
location:
  city: Angers
  department: Maine-et-Loire
  region: Pays de la Loire
keywords:
  - Soleils d'hiver Angers 2026
  - marché de Noël Angers en famille
  - village Santa Claus Angers
  - maison du Père Noël place Sainte-Croix
sources:
  - title: Ville d'Angers — Soleils d'hiver 2026, présentation et date de lancement
    url: https://www.angers.fr/vivre-a-angers/culture/arts-de-la-rue-arts-du-cirque/soleils-d-hiver/index.html
  - title: Ville d'Angers — Ambassadeurs Soleils d'hiver 2026, implantation de la maison du Père Noël
    url: https://recrutement.angers.fr/emplois/postes-temporaires-fr/1947-ambassadeurs-soleils-dhiver-fr/
  - title: Irigo — Ligne C du tramway, arrêts du centre-ville
    url: https://www.irigo.fr/se-deplacer/lignes-et-horaires/ligne-tram-c
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus
  decision: Choisir une sortie adaptée aux enfants entre marché artisanal, village Santa Claus et rencontre avec le Père Noël, en sachant ce qui est confirmé et ce qui reste à vérifier avant de partir.
  affiliationPotential: "L'événement ne nécessite pas de billetterie partenaire identifiée. Pour un week-end, fiches Booking.com vérifiées : Novotel Angers Centre Gare (chambres familiales, https://www.booking.com/hotel/fr/novotel-angers-centre-gare.fr.html) ou Le César hypercentre (appartement 3 chambres, https://www.booking.com/hotel/fr/appartement-de-charme-hyper-centre-ville-de-angers.fr.html). Tarifs et disponibilités non confirmés."
  gsc:
    retrievedAt: 2026-10-30T01:28:25+01:00
    dataThrough: 2026-10-27
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville d'Angers — Soleils d'hiver, annonce de l'édition 2026 »; aucune page forte GSC n'est requise.
---

À Angers, **Soleils d'hiver commence le mercredi 25 novembre 2026**. Ce n'est pas seulement un marché de Noël : la Ville annonce aussi un village avec des manèges, des rencontres avec le Père Noël et Madame Noël, des ateliers pour les enfants et des animations dans les rues. Pour une sortie réussie, le plus utile est de choisir une activité principale plutôt que de vouloir tout parcourir avec de jeunes enfants.

Le [programme officiel de la Ville d'Angers](https://www.angers.fr/vivre-a-angers/culture/arts-de-la-rue-arts-du-cirque/soleils-d-hiver/index.html) est encore indiqué « à venir » au 30 octobre. La date d'ouverture est confirmée, **mais pas encore les horaires détaillés des animations, leurs tarifs éventuels ni toutes leurs dates de fin**.

## Chalets, manèges ou Père Noël : que choisir ?

**Pour flâner et chercher des cadeaux**, privilégiez le marché artisanal du centre-ville. La Ville présente une centaine de producteurs régionaux et artisans locaux, ainsi que des chalets de gourmandises. C'est l'option la plus souple : vous pouvez raccourcir la promenade si les enfants se fatiguent, sans dépendre d'un rendez-vous précis.

**Pour les enfants attirés par les attractions**, dirigez-vous vers le Village de Santa Claus, avec ses chalets et ses manèges. Le Jardin du Mail fait partie des sites mobilisés pour l'édition 2026, mais le plan définitif des installations et les conditions propres à chaque manège restent à vérifier dans le programme. Ne prévoyez pas un nombre de tours ou un budget d'attractions sur la base des tarifs de 2025.

**Pour rencontrer le Père Noël**, retenez la **place Sainte-Croix** : la Ville y prévoit sa maison dans une [annonce municipale publiée en octobre 2026](https://recrutement.angers.fr/emplois/postes-temporaires-fr/1947-ambassadeurs-soleils-dhiver-fr/). Elle prévoit aussi du personnel pour gérer la file d'attente. Cela ne confirme ni les heures d'accueil du public, ni les modalités d'accès ou de réservation. Les ateliers avec les lutins et les rencontres avec Madame Noël figurent dans l'annonce générale, sans créneaux 2026 détaillés pour l'instant.

## Quand venir, et combien prévoir ?

Si votre priorité est la rencontre avec le Père Noël ou un atelier, **attendez la publication des jours et créneaux officiels avant de fixer votre visite**. Pour une simple balade parmi les chalets et les décorations, une sortie plus courte, en début de fréquentation, sera souvent plus confortable avec un tout-petit. Les illuminations sont surtout intéressantes à la tombée de la nuit, mais cela peut imposer un retour plus tardif.

Aucun billet général pour Soleils d'hiver n'est annoncé sur la page municipale consultée. Cela ne signifie pas que les manèges, ateliers ou autres prestations seront tous gratuits : **leurs prix et éventuelles réservations doivent encore être confirmés**. Gardez une enveloppe séparée pour les attractions, les boissons et les achats aux chalets.

## Venir avec une poussette ou un bébé

Le centre d'Angers se rejoint en tramway. La [ligne C d'Irigo](https://www.irigo.fr/se-deplacer/lignes-et-horaires/ligne-tram-c) dessert notamment **Ralliement** et **Foch-Maison Bleue**, deux arrêts utiles pour répartir la promenade dans le centre. Vérifiez les horaires du retour et les éventuelles perturbations avant de partir.

Avec une poussette, prévoyez des pauses et évitez de multiplier les lieux aux heures d'affluence. Pour un bébé, emportez de quoi assurer le repas et le change : la présence de micro-ondes, de tables à langer et d'espaces abrités sur les sites de Noël n'est pas encore confirmée. En cas de pluie, mieux vaut raccourcir la sortie ou prévoir une pause à l'intérieur dans un lieu dont vous aurez vérifié l'ouverture.

La Ville prévoit également un **espace de repos cognitif à l'Hôtel Godeline, rue Plantagenet**, selon son annonce de recrutement. Les conditions d'accès pour les visiteurs ne sont toutefois pas publiées dans le programme général : renseignez-vous auprès de l'organisateur avant de compter dessus.

## Rester une nuit à Angers

Pour transformer la sortie en week-end, le [Novotel Angers Centre Gare](https://www.booking.com/hotel/fr/novotel-angers-centre-gare.fr.html), près de la gare, propose des chambres familiales et des lits bébé sur demande. Vérifiez la capacité adaptée à l'âge de vos enfants, le tarif et la disponibilité pour vos dates avant de réserver.

Si vous souhaitez une autre sortie de Noël dans le département, découvrez aussi [Noël à Fontevraud 2026 en famille](/articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/) : les activités et leurs dates y sont différentes de celles d'Angers.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/maison/composteur-gratuit-a-angers-loire-metropole-qui-peut-le-demander/ | Composteur gratuit à Angers Loire Métropole: qui peut le demander? | maison | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | Monument Jeu d’Enfant au château d’Angers: dragons et ateliers le 17 octobre 2026 | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/vie-pratique/garde-d-enfants-sur-horaires-atypiques-a-angers-qui-peut-demander-l-aide-du-ccas/ | Garde d'enfants sur horaires atypiques à Angers: qui peut demander l'aide du CCAS? | vie-pratique | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | Fête de l'Automne 2026 à Terra Botanica: animations et tarifs | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/sorties/chasse-tresor-galerie-david-angers-2026/ | Chasse au trésor à Angers: les 4 à 6 ans enquêtent à la Galerie David | sorties | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | Noël à Toulouse 2026 en famille: marchés, Père Noël et patinoire | evenements | Toulouse, Haute-Garonne, Occitanie
- /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | Noël à Fontevraud 2026: patinoire, marché, dates et tarifs en famille | evenements | Fontevraud-l'Abbaye, Maine-et-Loire, Pays de la Loire
- /articles/parentalite/ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille/ | Ludothèque du Choletais: jouer sur place et emprunter en famille | parentalite | Cholet, Maine-et-Loire, Pays de la Loire
- /articles/cuisine/ou-manger-des-fouees-en-famille-autour-de-saumur/ | Où manger des fouées en famille autour de Saumur ? | cuisine | Saumur, Maine-et-Loire, Pays de la Loire
- /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | Festival des Petits Explorateurs 2026 à Dijon: ateliers, horaires et tarifs | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille/ | Flottins d’Évian 2026: un village de Noël en bois flotté à découvrir en famille | evenements | Évian-les-Bains, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | Festival BD Colomiers 2026 en famille: programme, tarifs et accès | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | Ville de Noël d’Arras 2026 en famille: horaires, attractions et budget | evenements | Arras, Pas-de-Calais, Hauts-de-France
- /articles/evenements/noel-d-autrefois-2026-au-musee-de-plein-air-quel-jour-venir-en-famille/ | Noël d’autrefois 2026 à Villeneuve-d’Ascq: dates, ateliers et accès en famille | evenements | Villeneuve-d'Ascq, Nord, Hauts-de-France
- /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | Marché de Noël 100 % Côte-d’Or à Dijon 2026: horaires, spectacles et Père Noël | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/festival-du-cerf-volant-2027-a-chatelaillon-plage-le-guide-des-familles/ | Festival du cerf-volant 2027 à Châtelaillon-Plage: le guide des familles | evenements | Châtelaillon-Plage, Charente-Maritime, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Clermont-Ferrand 2026 en famille: horaires, animations et accès | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-montpellier-2026-en-famille-dates-fermetures-et-attractions/ | Marché de Noël de Montpellier 2026 en famille: horaires, jours fermés et manèges | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | Noël des Alpes 2026 à Annecy en famille: marché, patinoire et illuminations | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | Marchés de Noël de Tours 2026 en famille: lieux, dates et budget | evenements | Tours, Indre-et-Loire, Centre-Val de Loire

### Historique Radar lié

- opportunity | /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | 2026-10-29T23:28:55.064Z
- opportunity | /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | 2026-10-30T03:27:02.483Z
- opportunity | /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | 2026-10-13T12:37:05.098Z
- opportunity | /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | 2026-10-29T14:26:32.277Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/ | 2026-10-29T11:32:05.289Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/marche-de-noel-de-montpellier-2026-en-famille-dates-fermetures-et-attractions/ | 2026-10-29T08:29:37.767Z
- opportunity | /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | 2026-10-28T21:29:26.054Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | 2026-10-10T08:38:56.921Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
