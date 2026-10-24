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
title: "Noël 2026 à Chenonceau : quand voir les décors en famille ?"
subtitle: "Du 28 novembre au 3 janvier : salles décorées, horaires de visite, budget et animations réellement annoncées"
summary: "Pour découvrir les décors de Noël 2026 du château de Chenonceau avec des enfants, choisissez votre jour selon les horaires de billetterie : la visite est plus courte début décembre et plus souple pendant les vacances. Tarifs, parcours et prestations à ne pas confondre."
category: evenements
location:
  city: Chenonceaux
  department: Indre-et-Loire
  region: Centre-Val de Loire
keywords:
  - Noël Chenonceau 2026
  - Noëls et traditions du monde Chenonceau
  - château de Chenonceau décembre 2026 enfants
  - horaires Noël château Chenonceau
sources:
  - title: Agenda communal de Chenonceaux — Noëls et traditions du monde 2026
    url: https://www.intramuros.org/chenonceaux/agenda/819144
  - title: Château de Chenonceau — horaires officiels 2026
    url: https://www.chenonceau.com/infos-pratiques/horaires/
  - title: Château de Chenonceau — tarifs officiels 2026
    url: https://www.chenonceau.com/infos-pratiques/tarifs/
  - title: Château de Chenonceau — billetterie des visites et masterclasses
    url: https://chateaudechenonceau.tickeasy.com/fr-FR/accueil
  - title: Sud Val de Loire Tourisme — Noël à Chenonceau
    url: https://www.sudvaldeloire.fr/offres/noel-a-chenonceau-noels-traditions-du-monde-chenonceaux-fr-4445807/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille
  decision: Choisir une date et un créneau pour voir les décors de Noël avec les enfants, connaître le coût de la visite et éviter de réserver en supposant qu'un spectacle ou une nocturne non annoncés sont inclus.
  affiliationPotential: Billet d'entrée Chenonceau proposé sur Tiqets, mais disponibilité et inclusion de la scénographie de Noël à confirmer pour les dates choisies. Pour un week-end, Auberge du Bon Laboureur à Chenonceaux référencée sur Booking.com avec suite familiale; vérifier les dates et conditions avant conseil.
  gsc:
    retrievedAt: 2026-10-24T02:34:28+02:00
    dataThrough: 2026-10-21
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Agenda communal de Chenonceaux - Noëls et traditions du monde 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-03T23:59:00+01:00
---

Du **28 novembre 2026 au 3 janvier 2027**, le château de Chenonceau se pare de décors floraux et de mises en scène inspirées des traditions de Noël du monde entier. Avec des enfants, la bonne décision n'est pas tant de chercher un spectacle que de **choisir un créneau laissant assez de temps pour parcourir les salles** : les horaires varient fortement entre le début de décembre et les vacances scolaires.

## Que découvrira-t-on dans le château à Noël ?

Pour cette édition « Noëls & traditions du monde », Jean-François Boucher et l'Atelier Floral du château revisitent des coutumes de France, de Grande-Bretagne, d'Allemagne, des Amériques, du Japon et d'Islande. La grande galerie au-dessus du Cher doit prendre des airs de salle de bal viennoise. Dans les cuisines installées dans les piles du pont, les décors évoqueront notamment les épices de l'Inde, les treize desserts provençaux et l'Alsace.

C'est donc **une visite des pièces historiques transformées par la scénographie**, pas un marché de Noël ni un parcours de manèges. Avec des enfants, on peut en faire un jeu d'observation : reconnaître un pays, retrouver une tradition ou choisir sa salle préférée. Les créations annoncées sont à découvrir en visitant le château ; aucun spectacle pour enfants n'est à présumer à partir de cette seule annonce.

## Quel jour et à quelle heure venir ?

Le calendrier officiel du château donne les **heures de dernier accès à la billetterie**, et non l'heure à laquelle il faut quitter les salles :

- **Du 28 novembre au 4 décembre**, puis **du 7 au 11** et **du 14 au 18 décembre** : 9 h 30–16 h 30. Privilégiez une arrivée le matin ou en début d'après-midi.
- **Les week-ends des 5–6 et 12–13 décembre** : 9 h 30–17 h. Une demi-heure supplémentaire pour entrer, mais un week-end potentiellement plus fréquenté.
- **Du 19 au 25 décembre** : 9 h 30–18 h. Les vacances offrent une plage de visite plus large.
- **Du 26 au 31 décembre** : 9 h 30–18 h 30. C'est l'amplitude la plus étendue publiée pour la fin de l'année.
- **Du 1er au 3 janvier 2027** : l'événement se poursuit, mais il faut reconfirmer les heures applicables à janvier 2027 avant de fixer un trajet.

Le château ferme **30 minutes après le dernier accès**, puis les jardins **30 minutes après le château**. Ainsi, un dernier accès à 16 h 30 ne laisse pas le temps de faire tranquillement toute la visite intérieure. Pour profiter des décors avec des enfants sans courir, nous viserions plutôt une entrée en matinée ou au moins deux heures avant la fin d'accès affichée.

Attention : certaines fiches d'agenda indiquent 9 h 30–16 h 30 pour toute la période. Elles ne reprennent pas les amplitudes spécifiques de décembre publiées par le château. Pour organiser votre journée, retenez les horaires de l'exploitant et revérifiez-les peu avant le départ.

## Quel budget prévoir pour la famille ?

Les **tarifs individuels 2026 avec brochure** sont de **19 € par adulte**, **15 € de 7 à 18 ans**, et **gratuit pour les moins de 7 ans**. À titre de repère, deux adultes et deux enfants payants représentent **68 €**, contre **38 €** si les deux enfants ont moins de 7 ans.

Il existe aussi une **offre famille à partir de trois enfants payants de 7 à 18 ans** : 15 € par personne de la même famille, adultes compris. Deux adultes et trois enfants concernés paieraient ainsi **75 € au lieu de 83 €** aux tarifs individuels. L'audioguide, disponible selon les modalités du château, coûte davantage que la formule avec brochure. Les personnes en situation de handicap bénéficient d'une gratuité sur présentation de la carte requise ; un tarif spécifique s'applique à l'accompagnant.

Ces montants sont les références officielles 2026, **pas la garantie du prix de chaque billet revendu ni d'une prestation spéciale**. Pour la visite classique, vous pouvez [examiner le billet d'entrée au château de Chenonceau sur Tiqets](https://www.tiqets.com/fr/activites-attractions-chenonceaux-c262292/billets-pour-chateau-de-chenonceau-billet-d-entree-p977880/) : vérifiez la date proposée, le prix final et les conditions. L'offre décrit l'accès au château, aux jardins et aux galeries, mais ne confirme pas à elle seule l'inclusion d'une animation de Noël distincte.

## Y a-t-il une nocturne, un atelier ou une réservation spéciale ?

**Au 24 octobre 2026, les annonces consultées ne permettent pas de promettre une nocturne de Noël ni un spectacle familial inclus.** Ne vous fiez pas aux dates des animations de 2025 pour préparer votre visite 2026.

Une prestation distincte figure toutefois déjà à la billetterie du château : des **masterclasses d'art floral les 18, 23 et 30 décembre 2026**, d'environ deux heures, à **90 € par personne**, sur réservation et dans la limite des places. Ce n'est ni une activité gratuite incluse dans le billet ordinaire ni un atelier annoncé spécifiquement pour les enfants.

Pour la visite des salles décorées, vérifiez lors de l'achat si un **créneau horaire** doit être choisi ou confirmé, notamment avec un billet obtenu auprès d'un revendeur. En cas de doute sur une animation, une nocturne ou son supplément éventuel, le château peut être contacté au **02 47 23 90 07**.

## Une visite agréable avec de jeunes enfants

Prévoyez un manteau pour les extérieurs et un rythme souple : les salles décorées sont le cœur de cette sortie, les jardins peuvent venir ensuite selon la météo et l'énergie des enfants. Avec un bébé, emportez un porte-bébé en complément de la poussette, dont l'accès à l'intérieur peut être limité en période d'affluence.

Pour le trajet en TER, les parkings, le pique-nique, les équipements bébé, l'accessibilité et la durée habituelle de visite, consultez notre [guide complet du château de Chenonceau en famille](/articles/sorties/chateau-de-chenonceau-en-famille-billets-duree-et-conseils-avec-des-enfants/) : il permet de préparer les aspects pratiques sans les répéter ici.

Si cette sortie devient un week-end en Touraine, l'[Auberge du Bon Laboureur à Chenonceaux sur Booking.com](https://www.booking.com/hotel/fr/hotellebonlaboureur.html) se trouve à environ 500 mètres du château et propose notamment des catégories de chambres adaptées à certaines compositions familiales. Vérifiez la capacité exacte, la présence de lits pour enfants, le prix et les disponibilités pour vos nuits de décembre ou de janvier avant de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/chateau-de-chenonceau-en-famille-billets-duree-et-conseils-avec-des-enfants/ | Château de Chenonceau en famille: billets, durée et conseils avec des enfants | sorties | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | Noël au château d'Amboise 2026: visite, nocturnes et tarifs en famille | evenements | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/sorties/villandry-en-famille-jardins-seuls-ou-chateau-et-jardins/ | Villandry en famille: jardins seuls ou château et jardins ? | sorties | Villandry, Indre-et-Loire, Centre-Val de Loire
- /articles/voyages/azay-le-rideau-en-famille-une-journee-entre-chateau-et-troglodytes/ | Azay-le-Rideau en famille: une journée entre château et troglodytes | voyages | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/sorties/villa-ephrussi-de-rothschild-en-famille-que-voir-dans-la-villa-et-les-jardins/ | Villa Ephrussi de Rothschild en famille: que voir dans la villa et les jardins? | sorties | Saint-Jean-Cap-Ferrat, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/ | Noël à Trévarez 2026 en famille: dates, horaires et réservation | evenements | Saint-Goazec, Finistère, Bretagne
- /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | Nuit des Châteaux 2026 à Tanlay: visites aux bougies les 16 et 17 octobre | evenements | Tanlay, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | Monument Jeu d'enfant 2026 à Azay-le-Rideau: animaux cachés et contes en famille | evenements | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/bons-plans/amboise-city-pass-2026-quand-devient-il-vraiment-rentable/ | Amboise City Pass 2026: quand devient-il vraiment rentable? | bons-plans | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/parentalite/laep-en-indre-et-loire-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP en Indre-et-Loire: où aller avec un enfant de moins de 6 ans | parentalite | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/cuisine/marche-d-amboise-composer-un-pique-nique-tourangeau-avec-des-enfants/ | Marché d'Amboise: composer un pique-nique tourangeau avec des enfants | cuisine | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/maison/maison-de-vacances-a-amboise-avec-des-enfants-7-criteres-pour-bien-choisir/ | Maison de vacances à Amboise avec des enfants: 7 critères pour bien choisir | maison | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/vie-pratique/transport-scolaire-remi-en-indre-et-loire-que-faire-apres-la-date-limite-2026/ | Transport scolaire Rémi en Indre-et-Loire: que faire après la date limite 2026 | vie-pratique | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/sorties/camp-batisseurs-chinon-famille-2026/ | Camp des bâtisseurs à Chinon: une immersion médiévale en famille jusqu’au 28 août | sorties | Chinon, Indre-et-Loire, Centre-Val de Loire
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
- opportunity | /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | 2026-10-23T15:29:55.218Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | 2026-10-11T16:33:21.125Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | 2026-10-23T19:58:30.214Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | 2026-10-24T06:28:53.730Z
- opportunity | /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | 2026-10-24T03:31:56.628Z
- opportunity | /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | 2026-10-11T09:17:01.561Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
