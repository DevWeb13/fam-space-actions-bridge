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
title: "Féeries de Noël 2026 à Paris : parcours lumineux, billets et patinoire en famille"
subtitle: "Au parc André-Citroën du 4 décembre au 2 janvier : durée, accès, réservations et précautions avec des enfants"
summary: Les Féeries de Noël 2026 proposent un parcours nocturne de 1,3 km au parc André-Citroën. Voici comment préparer la sortie en famille, distinguer le spectacle de la patinoire et éviter de réserver sur une ancienne billetterie.
category: evenements
location:
  city: Paris
  department: Paris
  region: Île-de-France
keywords:
  - Féeries de Noël Paris 2026
  - parc André Citroën Noël enfants
  - Parc Enchanté Paris billets 2026
  - Patins en Folie Paris 2026
  - Féeries de Noël poussette
sources:
  - title: "Les Féeries de Noël au parc André-Citroën : annonce 2026, programme et informations pratiques"
    url: https://leparcenchante.fr/
  - title: "Patins en Folie : site de la patinoire, informations de l'édition précédente à ne pas confondre avec 2026"
    url: https://patinsenfolie.com/
  - title: "Fever : page actuellement ouverte par le bouton de réservation du Parc Enchanté (Parc de l'Étrange, Halloween 2026)"
    url: https://feverup.com/m/769806
  - title: "Fever : Patins en Folie, aucune place actuellement en vente"
    url: https://feverup.com/m/497312
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille
  decision: Savoir si le parcours nocturne convient aux enfants, choisir entre billet daté et formule liberté et décider s'il faut ajouter la patinoire, sans confondre les deux expériences.
  affiliationPotential: "Billets du spectacle via Fever (aucun partenaire de billetterie confirmé). Hébergement vérifié sur Booking.com : Aparthotel Adagio Paris Centre Tour Eiffel, appartements d'une chambre pour quatre personnes ; prix et disponibilités de décembre à vérifier : https://www.booking.com/hotel/fr/pierre-vacacnces-city-paris-tour-eiffel.fr.html"
  gsc:
    retrievedAt: 2026-10-27T02:25:59+01:00
    dataThrough: 2026-10-24
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Les Féeries de Noël - programme et informations pratiques 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-02
---

Les **Féeries de Noël** s'installent au parc André-Citroën, dans le 15e arrondissement de Paris, **du 4 décembre 2026 au 2 janvier 2027**. Ce nouveau nom du Parc Enchanté désigne une promenade-spectacle nocturne en plein air, avec décors lumineux, comédiens et personnages de Noël. Pour une famille, le choix se joue surtout sur la durée de marche, l'heure de sortie et le prix des billets. Attention : la patinoire **Patins en Folie** est une activité distincte, à réserver séparément.

## Un parcours d'une heure : pour quel âge ?

L'organisateur annonce **1,3 km de promenade**, à parcourir en **environ une heure** selon les arrêts. L'histoire mène les visiteurs vers un Pôle Nord imaginaire peuplé de créatures et de personnages fantastiques, avec des installations lumineuses, des effets spéciaux et une rencontre annoncée avec le Père Noël. L'expérience est ouverte à tous les âges.

Avec des enfants qui marchent peu, une poussette ou plusieurs pauses, comptez plus d'une heure. Il s'agit d'une sortie **entièrement extérieure, en décembre et de nuit** : vêtements chauds, chaussures fermées adaptées aux chemins éventuellement boueux et marge avant le coucher des plus jeunes sont plus utiles qu'un programme trop chargé.

Les poussettes et fauteuils roulants sont admis, mais l'organisateur prévient que **certaines portions en pente ou au sol irrégulier peuvent être difficiles**. L'accessibilité ne garantit donc pas un parcours sans obstacle. Les effets sonores et pyrotechniques peuvent également impressionner les enfants sensibles au bruit. La FAQ mentionne des feux d'artifice vers **19 h 30 et 21 h**, susceptibles d'être modifiés ou supprimés selon la météo : ces horaires issus d'une page mêlant plusieurs éditions sont **à reconfirmer pour Noël 2026** avant de promettre ce final aux enfants.

## Quelles dates et quel créneau choisir ?

Les horaires généraux annoncés sont **18 h à 22 h**. L'événement est fermé **les lundis et mardis hors vacances scolaires**, ainsi que **les 24, 25 et 31 décembre**. Cela ne signifie pas que toutes les autres soirées ou tous les horaires sont déjà disponibles à la réservation : vérifiez le calendrier de vente avant de fixer votre déplacement.

Pour des enfants jeunes, privilégiez le premier créneau effectivement proposé. La dernière entrée est annoncée **30 minutes après le dernier créneau vendu**, ce qui n'équivaut pas à une entrée libre jusqu'à 21 h 30. La FAQ indique que la visite peut se prolonger jusqu'à la fermeture après l'entrée, mais les conditions exactes doivent être vérifiées au moment de l'achat.

## Billet daté ou option liberté : que faut-il vérifier ?

La FAQ de l'organisateur décrit deux principes :

- **Billet daté** : date et créneau choisis à l'avance, sans modification normalement prévue.
- **Option liberté** : possibilité de choisir son jour et son heure sans créneau réservé, selon les conditions annoncées par l'organisateur.

Cette FAQ comporte toutefois encore des mentions d'anciennes éditions. **Au 27 octobre 2026, les tarifs et la disponibilité de ces deux formules pour les Féeries de Noël n'ont pas pu être confirmés sur une billetterie dédiée.** Le bouton « Je réserve mes billets » du [site de l'organisateur](https://leparcenchante.fr/) conduit actuellement à une page Fever intitulée **« Le Parc de l'Étrange 2026 »**, consacrée à Halloween, et non aux Féeries de Noël. **N'achetez pas un billet Halloween en pensant réserver Noël.** Attendez qu'une fiche indique explicitement « Féeries de Noël », les dates de décembre 2026 et le contenu du billet.

Pour établir votre budget, additionnez le prix réel de chaque billet adulte et enfant, les éventuels frais de réservation, puis les transports et la restauration. La FAQ évoque des tarifs réduits pour certains publics, mais les montants et justificatifs applicables à Noël 2026 doivent aussi être contrôlés. Ne partez pas du principe qu'un billet donne droit à un remboursement ou à un changement de date : vérifiez les conditions affichées lors du paiement.

## Patins en Folie : faut-il ajouter la patinoire ?

L'organisateur présente **Patins en Folie** comme une patinoire extérieure de **600 m² de glace véritable** située dans le même parc. **Elle n'est pas comprise dans le billet du parcours lumineux** : un billet du spectacle ne garantit pas l'accès à la glace. Il est possible de choisir seulement la promenade ou seulement le patinage. Un tarif préférentiel combiné est évoqué, sans prix 2026 confirmé.

Point de vigilance : le [site de Patins en Folie](https://patinsenfolie.com/) affiche encore une ouverture en **novembre 2025** et indique que la patinoire a fermé ses portes ; sa [fiche Fever](https://feverup.com/m/497312) ne propose actuellement aucun billet. Les horaires, tarifs, séances et modalités d'accès de l'hiver **2026-2027 restent donc à confirmer**. Les anciennes informations sur la location des patins, les gants ou les âges ne doivent pas être considérées comme des conditions garanties pour cette édition.

Si les réservations ouvrent, prévoyez une séance distincte, une pause pour se réchauffer et suffisamment de temps pour rejoindre l'entrée correspondante. Avec un enfant fatigué après une heure de marche, faire les deux activités le même soir n'est pas forcément le meilleur choix.

## Où entrer et comment venir ?

Pour les **Féeries de Noël**, l'entrée annoncée se trouve **à l'angle de la rue Balard et de la rue de la Montagne de l'Espérou, près du 56 rue Balard**. La sortie se fait **rue de la Montagne de la Fage**. Attention : une autre réponse de la FAQ mentionne un ancien accès près de la rue Leblanc. Retenez l'entrée indiquée dans la rubrique pratique principale et contrôlez les consignes de votre billet avant de partir. Le parc est bien dans le **15e arrondissement**, malgré un code postal erroné affiché à certains endroits de l'ancien site.

Les accès en transports annoncés comprennent le **métro 8 (Balard)**, le **métro 10 (Javel–André Citroën)** et le **RER C (Javel)**. Le stationnement à proximité est limité et l'organisateur déconseille la voiture, y compris lorsqu'un emplacement adapté est nécessaire. Pour choisir des titres adaptés à l'âge des enfants et au nombre de trajets, consultez notre [guide des transports à Paris en famille](/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/).

Des chalets de restauration sucrée et salée sont annoncés, sans carte ni prix garantis pour la soirée. Il n'y a **ni vestiaire ni consigne** selon la FAQ : évitez valises et sacs encombrants. Les animaux ne sont pas admis. En cas de pluie, le spectacle peut se tenir, mais des vents violents ou un orage peuvent entraîner des changements ou une fermeture de sécurité.

## Prolonger la soirée à Paris

Pour une famille qui vient de loin, l'[Aparthotel Adagio Paris Centre Tour Eiffel sur Booking.com](https://www.booking.com/hotel/fr/pierre-vacacnces-city-paris-tour-eiffel.fr.html) propose notamment des appartements d'une chambre avec canapé-lit, pouvant accueillir quatre personnes selon la catégorie choisie. Vérifiez les couchages, l'âge des enfants, le trajet jusqu'à l'entrée nocturne, le prix total et les disponibilités aux dates du séjour ; aucune disponibilité pour décembre n'est garantie ici.

Si vous cherchez plutôt **un autre parcours lumineux parisien**, l'[Odyssée Lumineuse au Parc Floral](/articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/) se déroule dans un autre parc, à Vincennes : ses billets et ses horaires ne sont pas ceux des Féeries de Noël.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | Odyssée Lumineuse 2026-2027 à Paris: billets, dates et visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/activites/atelier-des-lumieres-avec-un-enfant-quel-programme-choisir-et-peut-on-venir-avec-une-poussette/ | Atelier des Lumières avec un enfant: quel programme choisir et peut-on venir avec une poussette ? | activites | Paris, Paris, Île-de-France
- /articles/sorties/parc-en-folie-2026-a-rennes-billet-en-ligne-ou-sur-place-quelle-formule-choisir-en-famille/ | Parc en Folie 2026 à Rennes: tarifs, espace 0-3 ans et infos pratiques en famille | sorties | Bruz, Ille-et-Vilaine, Bretagne
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/parentalite/visiter-le-chateau-de-versailles-avec-un-bebe-poussette-billets-et-parcours/ | Visiter le château de Versailles avec un bébé: poussette, billets et parcours | parentalite | Versailles, Yvelines, Île-de-France
- /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | Noël à Toulouse 2026 en famille: marchés, Père Noël et patinoire | evenements | Toulouse, Haute-Garonne, Occitanie
- /articles/activites/parc-zoo-du-reynou-avec-des-enfants-billet-date-poussette-ou-journee-complete/ | Parc Zoo du Reynou avec des enfants: billet daté, poussette ou journée complète? | activites | Le Vigen, Haute-Vienne, Nouvelle-Aquitaine
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/bons-plans/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/ | Navigo Liberté+ en famille: tarifs enfants et choix du passe en 2026 | bons-plans | Paris, Paris, Île-de-France
- /articles/sorties/l-aquarium-tropical-de-la-porte-doree-en-famille/ | L’Aquarium tropical de la Porte Dorée en famille | sorties | Paris, Paris, Île-de-France
- /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | Créations & savoir-faire 2026 à Paris en famille: billets, ateliers et dates | evenements | Paris, Paris, Île-de-France
- /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | Salon du Cheval de Paris 2026 en famille: animations, jumping et billets | evenements | Paris, Paris, Île-de-France
- /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | Métamorphoses 2026 au quai Branly: séances gratuites et films par âge | evenements | Paris, Paris, Île-de-France
- /articles/maison/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager/ | À Paris, où donner ou déposer meubles, jouets et électroménager ? | maison | Paris, Paris, Île-de-France
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | Día de los Muertos 2026 au Jardin d’Acclimatation: programme, billets et tailles | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-au-musee-carnavalet-quelle-activite-choisir-selon-l-age/ | Vacances de la Toussaint 2026 au musée Carnavalet: activités en famille dès 4 ans | sorties | Paris, Paris, Île-de-France
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | Saint-Nicolas 2026 à Carcassonne: campements médiévaux et marche aux flambeaux en famille | evenements | Carcassonne, Aude, Occitanie
- /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | Noël 2026 à Chantilly: Le Noël oublié, billets et séances en famille | evenements | Chantilly, Oise, Hauts-de-France
- /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | Noël des Siècles 2026 à Champs-sur-Marne: billets, budget et horaires en famille | evenements | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | Rétro Game Festival 2026 à Beauvais: programme, billets famille et animations enfants | evenements | Beauvais, Oise, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | 2026-10-23T06:21:12.326Z
- opportunity | /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | 2026-10-08T14:56:52.034Z
- opportunity | /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | 2026-10-19T19:48:02.164Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | 2026-10-18T04:19:39.869Z
- opportunity | /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | 2026-10-06T19:20:39.093Z
- opportunity | /articles/bons-plans/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/ | 2026-10-25T10:33:30.080Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | 2026-10-26T21:31:06.119Z
- opportunity | /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | 2026-10-24T23:34:36.270Z
- opportunity | /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | 2026-10-26T18:32:56.730Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
