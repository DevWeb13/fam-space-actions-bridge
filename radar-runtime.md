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
title: "Toussaint 2026 au musée des Confluences: cinq rendez-vous pour les enfants"
subtitle: "Kamishibaï, Kirikou, marionnettes et atelier à Lyon: les dates, les âges et les réservations du 21 au 29 octobre"
summary: Au musée des Confluences de Lyon, le cycle Toussaint 2026 propose cinq rendez-vous pour les 3-8 ans et plus. Dates, séances, gratuités, prix et accès en famille.
category: evenements
location:
  city: Lyon
  department: Rhône
  region: Auvergne-Rhône-Alpes
keywords:
  - musée des Confluences Toussaint 2026 enfants
  - Quand les animaux s'animent Lyon 2026
  - Kirikou Puppet party Confluences octobre 2026
sources:
  - title: "Musée des Confluences - Vacances d'octobre 2026: Quand les animaux s'animent"
    url: https://museedesconfluences.fr/fr/le-musee/actualites/vacances-doctobre-cycle-quand-les-animaux-saniment
  - title: Musée des Confluences - Bama et l'antilope cheval
    url: https://museedesconfluences.fr/fr/agenda/theatre-kamishibai-bama-et-lantilope-cheval
  - title: Musée des Confluences - Ciné-Science Kirikou et les bêtes sauvages
    url: https://museedesconfluences.fr/fr/agenda/cine-science-kirikou-et-les-betes-sauvages
  - title: Musée des Confluences - Le Bal poussière de Congo Massa
    url: https://museedesconfluences.fr/fr/agenda/deambulation-spectacle-le-bal-poussiere-de-congo-massa
  - title: Musée des Confluences - Animaux en mouvements
    url: https://museedesconfluences.fr/fr/agenda/conference-hauteur-denfant-animaux-en-mouvements-le-pouvoir-des-marionnettes
  - title: Musée des Confluences - Puppet party
    url: https://museedesconfluences.fr/fr/agenda/atelier-spectacle-puppet-party
  - title: Musée des Confluences - Tarifs et billetterie
    url: https://museedesconfluences.fr/fr/preparer-ma-visite/tarifs-et-billetterie
  - title: Musée des Confluences - Venir au musée
    url: https://museedesconfluences.fr/fr/preparer-ma-visite/comment-venir
  - title: Musée des Confluences - Confort de visite
    url: https://museedesconfluences.fr/fr/preparer-ma-visite/confort-de-visite
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age
  decision: Choisir la séance réellement accessible à l'âge des enfants et à la date de visite, savoir ce qui est gratuit mais à réserver, ce qui est payant, et distinguer le billet d'activité du billet des expositions.
  affiliationPotential: "Billet simple musée Tiqets momentanément indisponible: ne pas le recommander. Lyon City Card sur Tiqets (https://www.tiqets.com/fr/activites-attractions-lyon-c66838/billets-pour-lyon-city-card-p976069/) inclut l'accès aux expositions du musée et d'autres visites, à envisager seulement pour un séjour avec plusieurs activités, sans prétendre qu'elle couvre les spectacles ni qu'elle est rentable pour une seule visite. Hébergement secondaire proche du musée: ibis Styles Lyon Centre Confluence sur Booking.com (https://www.booking.com/hotel/fr/ibis-styles-lyon-confluence.fr.html), avec chambres familiales; vérifier capacité et disponibilité."
  gsc:
    retrievedAt: 2026-10-15T06:53:46.851Z
    dataThrough: 2026-10-12
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Musée des Confluences - Vacances d'octobre, cycle Quand les animaux s'animent »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-10-31
---

Pendant les vacances de la Toussaint, le musée des Confluences à Lyon propose le cycle **«Quand les animaux s'animent» du 17 au 31 octobre 2026**. Cinq rendez-vous sont annoncés entre le **21 et le 29 octobre**, des contes pour les 3-6 ans à un atelier de fabrication de marionnettes dès 8 ans. Attention: une séance gratuite peut nécessiter une réservation, et l'entrée aux expositions ne couvre pas automatiquement les activités payantes.

## Les animations de Toussaint, date par date

Le [programme du musée](https://museedesconfluences.fr/fr/le-musee/actualites/vacances-doctobre-cycle-quand-les-animaux-saniment) distingue cinq propositions:

- **Mercredi 21 octobre, «Bama et l'antilope cheval» (3-6 ans).** Un conte présenté en kamishibaï, théâtre d'images d'origine japonaise, autour des marionnettes d'Afrique de l'Ouest. Quatre séances de **45 minutes**, à **10h30, 14h, 15h15 et 16h30**, en galerie Émile Guimet. **Gratuit, sur réservation**, depuis la [fiche du spectacle](https://museedesconfluences.fr/fr/agenda/theatre-kamishibai-bama-et-lantilope-cheval).
- **Vendredi 23 octobre à 14h, «Kirikou et les bêtes sauvages» (dès 6 ans).** Projection suivie d'une rencontre avec un chercheur sur les animaux dans l'art rupestre. **1h45 au total**, grand auditorium. **5 € plein tarif, 3 € réduit, 4 € abonné**. Réservation depuis la [fiche Ciné-Science](https://museedesconfluences.fr/fr/agenda/cine-science-kirikou-et-les-betes-sauvages).
- **Vendredi 23 octobre à partir de 16h, «Le Bal poussière de Congo Massa» (dès 3 ans).** Les marionnettes géantes déambulent dans le musée de **16h à 17h30**. Le spectacle et le bal final, de **17h30 à 18h15**, sont **gratuits en accès libre**. Attention: **certains espaces traversés pendant la déambulation nécessitent un billet d'entrée aux expositions**. La [fiche officielle](https://museedesconfluences.fr/fr/agenda/deambulation-spectacle-le-bal-poussiere-de-congo-massa) précise cette distinction.
- **Mardi 27 octobre à 15h, «Animaux en mouvements» (dès 7 ans).** Conférence accessible aux enfants sur l'art des marionnettes, au petit auditorium. **50 minutes, gratuit**. La [page de la conférence](https://museedesconfluences.fr/fr/agenda/conference-hauteur-denfant-animaux-en-mouvements-le-pouvoir-des-marionnettes) propose un lien de réservation: vérifiez les places disponibles.
- **Jeudi 29 octobre, «Puppet party» (dès 8 ans).** Atelier-spectacle pour découvrir, fabriquer et manipuler une marionnette. Séances à **10h30 et 15h**, d'une durée de **2 heures**, en galerie Émile Guimet. **6 € plein tarif, 4 € réduit, 5 € abonné**. Réservation depuis la [fiche Puppet party](https://museedesconfluences.fr/fr/agenda/atelier-spectacle-puppet-party).

Le 23 octobre permet de combiner deux rendez-vous, mais **le film et la déambulation n'ont pas le même âge minimum**, ni les mêmes conditions d'accès. Pour les tout-petits de 3 à 6 ans, le kamishibaï du 21 octobre ou le bal du 23 octobre sont les propositions annoncées pour leur âge. La disponibilité effective des séances est à vérifier au moment de réserver.

## Billet d'activité ou entrée aux expositions: quel budget?

Les [expositions permanentes et temporaires](https://museedesconfluences.fr/fr/preparer-ma-visite/tarifs-et-billetterie) coûtent **12 € par adulte au plein tarif** ou **7 € au tarif réduit**. Elles sont **gratuites pour les moins de 18 ans**. Les moins de **13 ans doivent être accompagnés d'un adulte** dans les espaces d'exposition.

Ces prix concernent les **expositions**, et non automatiquement les cinq rendez-vous ci-dessus. Un spectacle gratuit peut avoir sa propre réservation; un film ou un atelier payant a sa propre tarification. Le musée précise également que, **pour une visite organisée avec médiation**, un billet d'entrée aux expositions peut être nécessaire **en plus** du billet d'activité. Vérifiez ce qui est inclus pour la séance choisie avant de payer.

Si votre famille reste plusieurs jours à Lyon et prévoit d'autres visites, la [Lyon City Card proposée sur Tiqets](https://www.tiqets.com/fr/activites-attractions-lyon-c66838/billets-pour-lyon-city-card-p976069/) donne notamment accès aux expositions du musée et à différents transports et sites lyonnais. Elle **ne garantit pas l'entrée aux cinq animations du cycle**: les spectacles et ateliers doivent être vérifiés séparément. Pour la seule visite des Confluences, comparez ce pass au billet d'exposition adulte de 12 €, sachant que les mineurs bénéficient déjà de la gratuité.

En complément du programme, l'exposition **«Animal culte»**, annoncée dès **8 ans** et ouverte à partir du **16 octobre**, peut intéresser les familles qui souhaitent aussi explorer les salles. Elle relève des conditions habituelles du billet d'exposition.

## Se rendre au musée avec de jeunes enfants

Le musée se trouve au **86 quai Perrache, Lyon 2e** et ouvre **tous les jours de 10h30 à 18h30 pendant ces vacances**. Le **tramway T1** dessert l'arrêt «musée des Confluences»; depuis **Perrache**, le musée annonce environ **10 minutes de tramway**. Certains arrêts de bus proches sont temporairement déplacés: contrôlez votre trajet sur la [page officielle d'accès](https://museedesconfluences.fr/fr/preparer-ma-visite/comment-venir).

Avec une poussette, utilisez l'**entrée Groupes, à droite de l'escalier principal**. Les spectacles et conférences peuvent aussi utiliser l'entrée Auditorium, côté Rhône. Le musée met à disposition gratuitement, sur demande, **poussettes, casques anti-bruit et autres aides au confort**; des **tables à langer** se trouvent aux niveaux -1, 1 et 2. Un vestiaire gratuit accueille les sacs dans la limite du format cabine indiqué par le musée. Détails sur sa [page de confort de visite](https://museedesconfluences.fr/fr/preparer-ma-visite/confort-de-visite).

## Prolonger le séjour à Lyon

Pour une autre sortie familiale autour de Lyon, notre guide [Mini World Lyon en famille](/articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/) aide à préparer une visite des mondes miniatures à Vaulx-en-Velin, sans confondre ses billets avec ceux des Confluences.

Si vous restez une nuit ou davantage, l'[ibis Styles Lyon Centre Confluence sur Booking.com](https://www.booking.com/hotel/fr/ibis-styles-lyon-confluence.fr.html), au **24 quai Perrache**, affiche notamment des **chambres familiales**. Indiquez l'âge des enfants avant de réserver pour connaître la capacité et le tarif correspondant aux dates souhaitées; ne présumez pas de la disponibilité pendant les vacances.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | Festival Lumière 2026: Laurel & Hardy en famille le 17 octobre à Lyon | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/vie-pratique/location-de-voiture-a-lyon-avec-des-enfants-ce-qu-il-faut-verifier-avant-de-reserver/ | Location de voiture à Lyon avec des enfants: ce qu'il faut vérifier avant de réserver | vie-pratique | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/sorties/vacances-de-la-toussaint-2026-au-musee-carnavalet-quelle-activite-choisir-selon-l-age/ | Vacances de la Toussaint 2026 au musée Carnavalet: activités en famille dès 4 ans | sorties | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | Vacances de la Toussaint 2026 à la Cité des sciences: les ateliers numériques gratuits avec des enfants | sorties | Paris, Paris, Île-de-France
- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/guinguette-familles-rians-2026/ | Guinguette des familles 2026 à Rians: les rendez-vous à ne pas manquer jusqu’au 12 août | evenements | Rians, Cher, Centre-Val de Loire
- /articles/sorties/palais-roure-avignon-famille-2026/ | Palais du Roure à Avignon en famille: retour sur les rendez-vous gratuits d'août 2026 | sorties | Avignon, Vaucluse, Provence-Alpes-Côte d'Azur
- /articles/vie-pratique/premiere-carte-d-identite-d-un-enfant-les-etapes-pour-eviter-un-rendez-vous-inutile/ | Première carte d'identité d'un enfant: les étapes pour éviter un rendez-vous inutile | vie-pratique
- /articles/parentalite/cafe-papote-a-lyon-4e-ou-echanger-gratuitement-avec-d-autres-parents/ | Café Papote à Lyon 4e: où échanger gratuitement avec d'autres parents | parentalite | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/maison/decheteries-mobiles-a-lyon-que-peut-on-deposer-et-quand-preferer-une-decheterie-fixe/ | Déchèteries mobiles à Lyon: que peut-on déposer et quand préférer une déchèterie fixe? | maison | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/ | Mini World Lyon en famille: tarifs, durée et conseils pour la visite | bons-plans | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/cuisine/a-claveisolles-decouvrir-comment-le-lait-de-chevre-devient-fromage-avec-les-enfants/ | À Claveisolles, découvrir comment le lait de chèvre devient fromage avec les enfants | cuisine | Claveisolles, Rhône, Auvergne-Rhône-Alpes
- /articles/activites/parc-de-courzieu-en-famille-tarifs-horaires-et-conseils-pour-la-visite/ | Parc de Courzieu en famille: tarifs, horaires et conseils pour la visite | activites | Courzieu, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/toussaint-2026-au-seaquarium-du-grau-du-roi-quel-jeu-choisir/ | Toussaint 2026 au Seaquarium: dates des jeux, âges et billets en famille | evenements | Le Grau-du-Roi, Gard, Occitanie
- /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/vacances-royales-2026-a-versailles-animations-napoleon-dates-et-billets-en-famille/ | Vacances royales 2026 à Versailles: animations Napoléon, dates et billets | evenements | Versailles, Yvelines, Île-de-France
- /articles/evenements/rouen-givree-2026-en-famille-marche-de-noel-et-refuge-givre/ | Rouen Givrée 2026 en famille: marché de Noël et Refuge Givré | evenements | Rouen, Seine-Maritime, Normandie
- /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | Au Creux de l'Oreille 2026 à Noirlac: spectacles et ateliers en famille du 17 au 22 octobre | evenements | Bruère-Allichamps, Cher, Centre-Val de Loire
- /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | Grands Zyeux P'tites Zoreilles 2026: spectacles gratuits avec les tout-petits autour de Béziers | evenements | Béziers, Hérault, Occitanie
- /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | Abracada BOUH 2026 à Montpellier: programme et tarifs au château de Flaugergues | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | Fête de l'Automne 2026 à Terra Botanica: animations et tarifs | evenements | Angers, Maine-et-Loire, Pays de la Loire

### Historique Radar lié

- opportunity | /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | 2026-10-13T20:41:25.500Z
- opportunity | /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | 2026-10-14T13:49:08.708Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- opportunity | /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | 2026-10-10T15:40:28.185Z
- opportunity | /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | 2026-10-13T12:37:05.098Z
- opportunity | /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | 2026-10-14T07:31:28.976Z
- opportunity | /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | 2026-10-15T05:30:56.094Z
- opportunity | /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | 2026-10-11T11:27:54.175Z
- opportunity | /articles/evenements/toussaint-2026-au-seaquarium-du-grau-du-roi-quel-jeu-choisir/ | 2026-10-15T12:38:21.556Z
- opportunity | /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | 2026-10-05T11:24:52.310Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
