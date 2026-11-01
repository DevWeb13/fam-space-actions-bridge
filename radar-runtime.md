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
title: "Noël 2026 à Sélestat en famille : marchés, sapins et visites gratuites"
subtitle: Choisir une balade entre les chalets et les expositions, sans se tromper de dates
summary: "Du 20 novembre au 27 décembre 2026, Sélestat fête Noël sur trois places. Les sapins suspendus et plusieurs expositions prolongent la visite, parfois jusqu'au 3 janvier : horaires, gratuités et parcours avec les enfants."
category: evenements
location:
  city: Sélestat
  department: Bas-Rhin
  region: Grand Est
keywords:
  - Noël Sélestat 2026 famille
  - marché de Noël Sélestat horaires
  - sapins suspendus église Saint-Georges
  - exposition gratuite Sélestat Noël
sources:
  - title: Ville de Sélestat - Noël 2026, programme général
    url: https://www.selestat.fr/mes-sorties/agenda/noel-a-selestat
  - title: Ville de Sélestat - Les marchés de Noël, horaires et exposants
    url: https://www.selestat.fr/mes-sorties/agenda/noel-a-selestat/les-marches-de-noel
  - title: Ville de Sélestat - Les incontournables en neuf étapes
    url: https://www.selestat.fr/mes-sorties/agenda/noel-a-selestat/les-expositions
  - title: Ville de Sélestat - Les dix sapins de l'église Saint-Georges
    url: https://www.selestat.fr/mes-sorties/agenda/noel-a-selestat/les-expositions/etape-5-lhistoire-de-larbre-de-noel
  - title: Ville de Sélestat - Exposition Pôle Nord Express
    url: https://www.selestat.fr/mes-sorties/agenda/noel-a-selestat/les-expositions/etape-2-exposition-les-boules-de-noel-de-meisenthal-pole-nord-express
  - title: Ville de Sélestat - Exposition 1521, la tradition de l'arbre de Noël
    url: https://www.selestat.fr/mes-sorties/agenda/noel-a-selestat/les-expositions/etape-1-exposition-1521-la-tradition-de-larbre-de-noel
  - title: Ville de Sélestat - Lustre de Meisenthal à l'église Sainte-Foy
    url: https://www.selestat.fr/mes-sorties/agenda/noel-a-selestat/les-expositions/etape-6-tel-un-lustre
  - title: Ville de Sélestat - Noël à la Maison du Pain d'Alsace
    url: https://www.selestat.fr/mes-sorties/agenda/noel-a-selestat/les-expositions/etape-4-noel-a-la-maison-du-pain-dalsace
  - title: Ville de Sélestat - Jardin du sapin, Hansel et Gretel
    url: https://www.selestat.fr/mes-sorties/agenda/noel-a-selestat/les-expositions/le-jardin-du-sapin
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-2026-a-selestat-en-famille-marches-ou-parcours-du-sapin
  decision: Choisir une demi-journée de Noël à Sélestat adaptée à l'âge des enfants et au budget, en distinguant les marchés des visites gratuites, et éviter les dates de fermeture.
  affiliationPotential: "Marchés et plusieurs expositions en accès libre, sans billetterie partenaire naturelle. Pour un week-end, Booking.com propose l'Hôtel Restaurant Vaillant à Sélestat, avec chambres quadruples pour quatre personnes vérifiées ; prix et disponibilités à contrôler selon les dates : https://www.booking.com/hotel/fr/vaillant.fr.html"
  gsc:
    retrievedAt: 2026-11-01T04:25:25+01:00
    dataThrough: 2026-10-29
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Sélestat - Noël 2026 et programme général »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-03
---

À Sélestat, dans le Bas-Rhin, Noël se découvre aussi bien en flânant entre les chalets qu'en suivant l'histoire du sapin. Avec des enfants, le choix le plus simple est de combiner les **marchés du centre-ville** avec une ou deux étapes gratuites : les dix sapins suspendus de l'église Saint-Georges, puis, si l'envie et les horaires le permettent, une exposition à la Bibliothèque Humaniste.

## Trois places pour les marchés, du 20 novembre au 27 décembre

Les chalets se répartissent entre la **place d'Armes**, la **place de la Victoire** et la **place du Docteur Maurice Kubler**, devant la Bibliothèque Humaniste. On y trouve notamment des décorations artisanales, des douceurs alsaciennes, des boissons chaudes et de quoi manger sur le pouce. La place d'Armes accueille aussi la boîte aux lettres du Père Noël, du **20 novembre au 17 décembre** : les enfants peuvent préparer leur dessin ou leur lettre avant de partir.

Les horaires annoncés pour 2026 sont les suivants :

- **Du dimanche au jeudi : 11 h à 19 h**.
- **Vendredi et samedi : 11 h à 20 h**.
- **Jeudi 24 décembre : 11 h à 16 h**.
- **Vendredi 25 décembre : fermé**.

La Ville évoque de possibles prolongations en soirée, mais elles ne sont pas garanties. L'accès aux marchés est libre ; prévoyez seulement un budget pour les achats et les gourmandises. Pour une sortie avec de jeunes enfants, une visite en début de journée laisse plus de souplesse qu'une promenade au moment de l'affluence du soir.

## Quelles visites gratuites ajouter aux chalets ?

**Pour voir quelque chose de spectaculaire sans billet**, entrez dans l'église Saint-Georges : dix sapins suspendus retracent l'évolution des décorations du XVIe siècle à aujourd'hui. L'installation est annoncée du **21 novembre 2026 au 3 janvier 2027**, tous les jours de **9 h à 19 h**, en accès libre **hors offices religieux et messes**. Une visite courte peut suffire aux plus petits ; les plus grands pourront comparer les sapins et leurs ornements.

À l'église Sainte-Foy, un lustre composé de **173 boules en verre de Meisenthal** constitue une autre halte gratuite aux mêmes dates et horaires, également hors offices. Il n'est pas nécessaire de parcourir les neuf étapes proposées par la Ville : leurs conditions d'accès ne sont pas identiques.

**Pour une exposition en intérieur**, la Bibliothèque Humaniste présente « Les boules de Noël de Meisenthal : Pôle Nord Express », un voyage imaginaire mis en scène autour du train. Du **21 novembre au 31 décembre**, la salle d'exposition temporaire est accessible gratuitement, du **mardi au dimanche de 10 h à 12 h 30 et de 13 h 30 à 18 h**. Elle ferme à **16 h les 24 et 31 décembre**, et reste fermée les **lundis ainsi que les 25 et 26 décembre**. L'entrée de cette exposition est libre, mais **la visite du musée est payante**.

Au même endroit, l'exposition consacrée à la mention de **1521** permet de découvrir un fac-similé du document ancien lié à la tradition du sapin. Elle suit les mêmes dates et horaires et se visite librement dans le salon Érasme. Pour des enfants curieux de comprendre pourquoi Sélestat se présente comme la capitale de l'arbre de Noël, c'est une halte complémentaire intéressante.

Le **jardin du sapin**, décoré sur le thème de Hansel et Gretel au **7 place du Marché aux Choux**, est annoncé du **27 novembre au 3 janvier**, de **9 h à 18 h**, en accès libre. Attention : il ferme les **25 et 31 décembre et le 1er janvier**. Son décor peut plaire aux enfants qui préfèrent une promenade à une exposition.

## Quelle sortie choisir selon la date et l'âge des enfants ?

Avec des petits, restez sur un circuit souple : place d'Armes pour la lettre au Père Noël avant le 18 décembre, chalets des places voisines, puis quelques minutes à Saint-Georges. Il est possible de profiter de l'ambiance sans s'engager dans un parcours complet.

Avec des enfants plus grands, ajoutez la Bibliothèque Humaniste pour le Pôle Nord Express ou l'histoire de 1521. Pensez à la **pause de 12 h 30 à 13 h 30** : les salles d'exposition sont fermées à ce moment-là. Une promenade entre les places peut remplir cet intervalle.

**Après Noël, ne confondez pas les dates.** Les marchés s'achèvent le **27 décembre** ; les expositions de la Bibliothèque Humaniste vont jusqu'au **31 décembre**, tandis que les sapins des églises et le jardin restent annoncés jusqu'au **3 janvier 2027**, avec leurs propres fermetures. Le **25 décembre**, ne prévoyez ni marchés ni Bibliothèque Humaniste ; les églises peuvent accueillir des offices.

Pour une pause gourmande au chaud, la Maison du Pain d'Alsace propose fournil, salon de thé et musée, avec des conditions d'accès différentes. Notre guide de la [Maison du Pain à Sélestat](https://www.fam-space.fr/articles/cuisine/maison-du-pain-a-selestat-decouvrir-la-boulangerie-en-famille/) détaille les visites, les ateliers familiaux et les tarifs, notamment pour décembre.

## Poussette, toilettes et arrivée à Sélestat

Les trois places et les étapes choisies se situent dans le centre historique : mieux vaut prévoir un parcours court, avec la possibilité de faire demi-tour si la foule ou les pavés gênent la poussette. **L'accessibilité précise des églises, des cours et des expositions avec une poussette n'est pas confirmée** dans le programme de Noël ; ne comptez pas sur un accès sans marche sans vous renseigner.

Pour les sanitaires, des toilettes publiques sont référencées dans le centre, notamment du côté de la place du Marché aux Choux, mais leurs **horaires d'ouverture pendant les fêtes et la présence d'une table à langer ne sont pas confirmés**. Si vous venez avec un bébé, prévoyez une solution de repli pour le change et les repas.

La gare SNCF permet d'arriver sans voiture puis de rejoindre le centre historique à pied. Comptez un déplacement à pied d'environ un quart d'heure pour le secteur de la Maison du Pain, en adaptant le trajet à votre rythme et aux bagages. En voiture, vérifiez les conditions de stationnement avant de partir plutôt que de supposer qu'une place sera disponible au pied des chalets.

## Rester une nuit pour découvrir l'Alsace

Pour prolonger la balade sans reprendre la route le soir, l'[Hôtel Restaurant Vaillant à Sélestat](https://www.booking.com/hotel/fr/vaillant.fr.html), au **7 rue Ignace-Spies**, propose notamment des **chambres quadruples** pouvant accueillir quatre personnes. L'établissement se situe près de la gare et du centre. Vérifiez la configuration adaptée à l'âge des enfants, le tarif total et les disponibilités aux dates souhaitées : aucune chambre n'est garantie pour Noël.

Si vous envisagez aussi Strasbourg pendant votre séjour, notre guide du [marché de Noël de Strasbourg 2026 en famille](https://www.fam-space.fr/articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/) aide à sélectionner les marchés sans multiplier les trajets avec les enfants.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/cuisine/maison-du-pain-a-selestat-decouvrir-la-boulangerie-en-famille/ | Maison du Pain à Sélestat: découvrir la boulangerie en famille | cuisine | Sélestat, Bas-Rhin, Grand Est
- /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël de Saint-Étienne 2026 en famille: dates, horaires et accès | evenements | Saint-Étienne, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges/ | Noël à Aix-en-Provence 2026 en famille: marchés, santons et manèges | evenements | Aix-en-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | Noël à Provins 2026: marché médiéval, animations et visites en famille | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/maison/renover-sa-maison-dans-l-eurometropole-de-strasbourg-aides-et-demarches-2026/ | Rénover sa maison dans l’Eurométropole de Strasbourg: aides et démarches 2026 | maison | Strasbourg, Bas-Rhin, Grand Est
- /articles/vie-pratique/parking-relais-a-strasbourg-en-famille-comment-choisir-son-p-r-et-son-forfait/ | Parking-relais à Strasbourg en famille: comment choisir son P+R et son forfait | vie-pratique | Strasbourg, Bas-Rhin, Grand Est
- /articles/activites/le-vaisseau-a-strasbourg-quel-billet-choisir-pour-une-sortie-avec-des-enfants/ | Le Vaisseau à Strasbourg: quel billet choisir pour une sortie avec des enfants | activites | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/course-des-chateaux-d-ottrott-2026-quelles-epreuves-choisir-pour-les-enfants/ | Course des Châteaux d'Ottrott 2026: quelles épreuves choisir pour les enfants? | evenements | Ottrott, Bas-Rhin, Grand Est
- /articles/voyages/wissembourg-sans-voiture-avec-des-enfants-que-faire-a-pied-sur-une-journee/ | Wissembourg sans voiture avec des enfants: que faire à pied sur une journée? | voyages | Wissembourg, Bas-Rhin, Grand Est
- /articles/sorties/chateau-du-haut-koenigsbourg-en-famille-tarifs-2026-et-conseils-de-visite/ | Château du Haut-Koenigsbourg en famille: tarifs 2026 et conseils de visite | sorties | Orschwiller, Bas-Rhin, Grand Est
- /articles/bons-plans/pass-strasbourg-et-nord-alsace-en-famille-quand-est-il-vraiment-rentable/ | Pass Strasbourg et Nord Alsace en famille: quand est-il vraiment rentable? | bons-plans | Strasbourg, Bas-Rhin, Grand Est
- /articles/activites/arachnima-strasbourg-famille-2026/ | Arachnima 2026 à Strasbourg: dernier week-end gratuit au square Hasek | activites | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/planete-ocean-a-paris-preparer-la-visite-en-famille/ | Planète Océan à Paris: préparer la visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | Noël 2026 à Paris La Défense en famille: marché, animations et patinoire | evenements | Puteaux, Hauts-de-Seine, Île-de-France
- /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | Noël 2026 à Cannes en famille: marché du centre et Palm Beach | evenements | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | Luminéales du Thabor 2026 à Rennes: tarifs, horaires et visite en famille | evenements | Rennes, Ille-et-Vilaine, Bretagne
- /articles/evenements/tous-en-sons-2026-a-marseille-quel-spectacle-choisir-selon-l-age-des-enfants/ | Tous en Sons ! 2026 à Marseille: spectacles enfants, âges et tarifs | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | Noël 2026 à Toulon en famille: marché, patinoire et horaires | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur

### Historique Radar lié

- opportunity | /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | 2026-10-31T19:33:18.323Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T18:37:09.008Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | 2026-10-31T22:36:58.800Z
- opportunity | /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | 2026-11-01T01:35:08.448Z
- opportunity | /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | 2026-10-31T10:28:17.432Z
- opportunity | /articles/evenements/noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges/ | 2026-10-25T15:16:03.590Z
- opportunity | /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | 2026-10-24T03:31:56.628Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
