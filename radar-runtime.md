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
title: "Festival MARMOE 2026 à Montreuil : quelles sorties choisir avec les enfants ?"
subtitle: "Du 4 au 29 novembre : spectacles gratuits, ateliers à réserver et activités payantes selon l'âge"
summary: MARMOE 2026 se déroule dans plusieurs lieux de Montreuil. Repérez les spectacles et ateliers adaptés aux enfants, les vrais tarifs et les réservations nécessaires, notamment les 4, 7, 8 et 22 novembre.
category: evenements
location:
  city: Montreuil
  department: Seine-Saint-Denis
  region: Île-de-France
keywords:
  - festival MARMOE Montreuil 2026
  - programme MARMOE 2026 enfants
  - spectacles enfants Montreuil novembre 2026
  - ateliers gratuits MARMOE
sources:
  - title: Ville de Montreuil - Festival MARMOE 2026
    url: https://www.montreuil.fr/marmoe2026
  - title: Ville de Montreuil - Programme officiel MARMOE 2026 (60 pages)
    url: https://www.montreuil.fr/sites/default/files/medias/document/2026/10/programme_marmoe_2026.pdf
  - title: Ville de Montreuil - Toc-Toc et l'environnement, 8 novembre
    url: https://www.montreuil.fr/agenda/toc-toc-et-lenvironnement-clown-spectacle-jeunesse
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants
  decision: Choisir une ou deux propositions MARMOE adaptées à l'âge de ses enfants, à la date disponible et au budget, en distinguant entrée libre, gratuit sur réservation et billet payant.
  affiliationPotential: Pas de billetterie partenaire pertinente vérifiée pour les spectacles. Pour un séjour à Montreuil, Booking.com présente l'ibis Styles Paris Mairie de Montreuil et une suite familiale à chambres communicantes ; vérifier composition et disponibilité avant toute recommandation.
  gsc:
    retrievedAt: 2026-10-25T02:31:31+02:00
    dataThrough: 2026-10-22
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Montreuil - MARMOE 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-11-29
---

Du **4 au 29 novembre 2026**, le festival MARMOE (Mois des Arts à Montreuil pour l'Enfance) propose spectacles, concerts, cinéma et ateliers dans plusieurs lieux de Montreuil. Il n'existe **ni entrée unique ni tarif commun** : certaines activités sont gratuites et accessibles librement, d'autres gratuites sur réservation, d'autres encore payantes. Pour organiser une sortie, le plus utile est de partir de l'âge de l'enfant et du créneau disponible, puis de vérifier les conditions de la séance dans le [programme municipal 2026](https://www.montreuil.fr/sites/default/files/medias/document/2026/10/programme_marmoe_2026.pdf).

## Mercredi 4 novembre : deux propositions gratuites, mais pas les mêmes réservations

**Jardins fantastiques**, à La Locale, convient dès **3 ans**. Cet atelier d'arts plastiques propose de composer un paysage imaginaire avec des jeux d'ombres et de transparence. Deux séances sont annoncées, à **10 h 30 et 14 h**, pour **1 h 30** chacune. C'est **gratuit, mais la réservation par courriel est nécessaire** à associationlescousines@gmail.com. Une bonne option pour un enfant qui aime fabriquer et expérimenter plutôt que rester assis devant une scène.

Pour les **6 ans et plus**, **La Relève** raconte la naissance d'un groupe de hip-hop et parle d'amitié, de musique et d'écologie. Le spectacle dure **50 minutes** au Café La Pêche, à **14 h ou 15 h 30**. L'entrée est **gratuite et libre**, sans réservation indiquée dans le programme. Attention à ne pas programmer l'atelier de 14 h et le spectacle de 14 h : leurs horaires se chevauchent.

## Les 7 et 8 novembre : un week-end familial à composer selon son budget

Le Théâtre public de Montreuil accueille **Tout pour les MARMOE(s)**, avec lectures jeunesse, animations et activités parents-enfants. La plupart des propositions de ce week-end sont gratuites, mais deux activités ont un tarif spécifique :

- **Fabrique ta machine à dessiner**, atelier parent-enfant dès **5 ans**, samedi 7 et dimanche 8 à **13 h 30** : **5 €**, sur réservation auprès du théâtre.
- **Petits contes sous l'océan**, courts métrages au cinéma Le Méliès pour les **3-5 ans** : séances le samedi à **11 h et 16 h**, puis le dimanche à **16 h** ; **4 €**, réservation auprès du cinéma.

Pour les enfants **dès 8 ans**, **Olalaland** est un spectacle visuel et musical d'une heure au Théâtre public de Montreuil, avec dessins projetés et univers fantaisiste. Les séances sont prévues le **mercredi 4 à 15 h**, le **samedi 7 à 11 h et 16 h** et le **dimanche 8 à 16 h**. Comptez **9 à 27 €** selon le tarif applicable ; la réservation se fait auprès du théâtre. C'est le choix à privilégier si la famille veut un véritable spectacle plutôt qu'une succession d'animations.

Le **dimanche 8 novembre à 11 h**, autre option pour les plus jeunes : **Toc-Toc et l'environnement**, chez Comme Vous Émoi. Dès **3 ans**, ce spectacle participatif de **45 minutes** aborde la nature et le recyclage avec humour. Il est **gratuit, mais la réservation est obligatoire**. La [fiche municipale de Toc-Toc](https://www.montreuil.fr/agenda/toc-toc-et-lenvironnement-clown-spectacle-jeunesse) donne accès à la réservation et indique le **09 50 77 67 89** pour se renseigner. Ne confondez donc pas « gratuit » et « sans billet ».

## Dimanche 22 novembre : Pierre et le Loup ou une boum avec les enfants ?

Deux propositions intéressantes se tiennent presque en même temps, dans des lieux différents. Mieux vaut **en choisir une** plutôt que d'essayer de les enchaîner.

**Pierre et le Loup, revu et pas corrigé !** commence à **16 h** dans la salle des fêtes de l'Hôtel de ville. Corinne Masiero raconte une version revisitée du conte, accompagnée par l'Ensemble Dénote. Le spectacle dure **50 minutes**, convient **dès 4 ans** et l'entrée est **libre dans la limite des places disponibles**. Les portes ouvrent à **15 h 30** : venir en avance est plus prudent, sans garantie de place.

La **Boum familiale des Loupiotes** démarre à **15 h 30** à La Marbrerie pour **trois heures** de danse, avec DJ et animations. Les bébés en portage sont les bienvenus. Les tarifs annoncés diffèrent fortement selon le moment de l'achat :

- **En prévente** : **8 € par adulte**, **4 € par enfant**, **gratuit de 0 à 18 mois**.
- **Sur place, sous réserve des places restantes** : **12 € par adulte**, **6 € par enfant**, **2 € de 0 à 18 mois**.

Pour deux adultes et deux enfants de plus de 18 mois, cela représente **24 € en prévente contre 36 € sur place**, hors dépenses annexes. La boum convient à une famille qui souhaite bouger ensemble ; le concert est le choix le plus économique pour découvrir un conte musical.

## Et si vous venez plus tard en novembre ?

Le **mercredi 25 novembre à 14 h 30**, **Le Livre des songes** propose un spectacle musical de **35 minutes** au Conservatoire Pina Bausch, **dès 5 ans**. L'entrée est **gratuite sur réservation**. C'est une solution pour les familles qui ne sont pas disponibles au début du mois. Les dernières dates du festival, jusqu'au 29 novembre, comprennent d'autres spectacles et ateliers : leurs âges, horaires et modalités figurent dans le [programme officiel complet](https://www.montreuil.fr/marmoe2026).

## Réserver et se déplacer sans mauvaise surprise

MARMOE ne se tient pas dans un seul bâtiment. Le Café La Pêche, La Locale, le Théâtre public de Montreuil, Comme Vous Émoi, La Marbrerie et l'Hôtel de ville sont des lieux distincts. Vérifiez **l'adresse de chaque activité**, la durée et le temps de trajet avant de combiner deux rendez-vous. Les tarifs indiqués ci-dessus sont ceux du programme 2026 ; consultez la fiche de la séance avant de partir pour confirmer les places restantes et les éventuelles évolutions.

Pour rejoindre Montreuil depuis Paris et choisir des tickets adaptés à l'âge des enfants, notre guide [Transports à Paris avec des enfants : quel titre choisir ?](https://www.fam-space.fr/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/) détaille les options sans avoir à refaire le calcul ici.

Si vous prévoyez plusieurs jours sur place, l'[ibis Styles Paris Mairie de Montreuil sur Booking.com](https://www.booking.com/hotel/fr/ibis-styles-mairie-de-montreuil.fr.html) présente notamment une suite familiale avec deux chambres communicantes. **Vérifiez le nombre de voyageurs réellement accepté, les couchages, les disponibilités et le prix pour vos dates** avant de réserver ; la présence d'une catégorie « familiale » ne garantit pas qu'elle convienne à toutes les compositions de famille.

Enfin, du **25 au 30 novembre**, Montreuil accueille aussi le [Salon du livre et de la presse jeunesse](https://www.fam-space.fr/articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/). C'est **un autre événement**, avec ses propres billets et horaires : une possibilité de prolonger un séjour, pas une activité comprise dans MARMOE.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/les-expressifs-2026-a-poitiers-trois-jours-de-spectacles-gratuits/ | Les Expressifs 2026 à Poitiers: trois jours de spectacles gratuits | evenements | Poitiers, Vienne, Nouvelle-Aquitaine
- /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | Bédéciné 2026 à Illzach en famille: ateliers, spectacles et billets | evenements | Illzach, Haut-Rhin, Grand Est
- /articles/evenements/ateliers-au-jardin-de-la-pmi-a-bobigny-quelles-dates-choisir-cet-automne/ | Ateliers au jardin de la PMI à Bobigny: quelles dates choisir cet automne? | evenements | Bobigny, Seine-Saint-Denis, Île-de-France
- /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | Grands Zyeux P'tites Zoreilles 2026: spectacles gratuits avec les tout-petits autour de Béziers | evenements | Béziers, Hérault, Occitanie
- /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | Au Creux de l'Oreille 2026 à Noirlac: spectacles et ateliers en famille du 17 au 22 octobre | evenements | Bruère-Allichamps, Cher, Centre-Val de Loire
- /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | bd BOUM 2026 à Blois en famille: ateliers, expositions et cinéma | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | Famille en fête 2026 en Gironde: ateliers gratuits pour les 0-6 ans | evenements | Saint-Loubès, Gironde, Nouvelle-Aquitaine
- /articles/activites/visiter-le-stade-de-france-en-famille-coulisses-musee-et-conseils-pratiques/ | Visiter le Stade de France en famille: coulisses, musée et conseils pratiques | activites | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | Monument jeu d'enfant 2026 à Saint-Denis: atelier Dagobert le 17 octobre | evenements | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/sorties/musee-de-l-air-et-de-l-espace-a-la-toussaint-2026-quelle-activite-choisir-selon-l-age/ | Toussaint 2026 au Musée de l'Air et de l'Espace: quelle activité choisir avec un enfant? | sorties | Le Bourget, Seine-Saint-Denis, Île-de-France
- /articles/voyages/dormir-a-saint-denis-pour-visiter-paris-avec-des-enfants-pleyel-ou-basilique/ | Dormir à Saint-Denis pour visiter Paris avec des enfants: Pleyel ou Basilique? | voyages | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/sorties/musee-de-l-air-et-de-l-espace-du-bourget-en-famille-tarifs-avions-et-activites/ | Musée de l'Air et de l'Espace du Bourget en famille: tarifs, avions et activités | sorties | Le Bourget, Seine-Saint-Denis, Île-de-France
- /articles/evenements/noel-au-pays-du-jouet-2026-a-moirans-en-montagne-preparer-sa-sortie-en-famille/ | Noël au Pays du Jouet 2026 à Moirans-en-Montagne: préparer sa sortie en famille | evenements | Moirans-en-Montagne, Jura, Bourgogne-Franche-Comté
- /articles/evenements/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/ | Fête foraine de Dijon 2026: dates, horaires et budget avec les enfants | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges/ | Noël à Aix-en-Provence 2026 en famille: marchés, santons et manèges | evenements | Aix-en-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/village-du-pere-noel-a-montbazon-2026-dates-activites-et-budget-en-famille/ | Village du Père Noël à Montbazon 2026: dates, activités et budget en famille | evenements | Montbazon, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-a-orleans-2026-en-famille-marches-horaires-et-maneges-apres-noel/ | Marché de Noël d’Orléans 2026 en famille: horaires, lieux et manèges | evenements | Orléans, Loiret, Centre-Val de Loire
- /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | Noël à Nice 2026 en famille: village, spectacles et crèche | evenements | Nice, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | Noël à Toulouse 2026 en famille: marchés, Père Noël et patinoire | evenements | Toulouse, Haute-Garonne, Occitanie
- /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | Thoiry Lumières Sauvages 2026-2027: dates, billets et visite en famille | evenements | Thoiry, Yvelines, Île-de-France
- /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | Noël à Nantes 2026: marché de Noël et Voyage en hiver en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire

### Historique Radar lié

- opportunity | /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | 2026-10-14T13:49:08.708Z
- opportunity | /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | 2026-10-18T19:49:09.191Z
- opportunity | /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | 2026-10-23T12:33:36.649Z
- opportunity | /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | 2026-10-12T08:10:30.674Z
- opportunity | /articles/evenements/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/ | 2026-10-25T17:34:53.718Z
- opportunity | /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | 2026-10-14T07:31:28.976Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | 2026-10-13T09:50:29.435Z
- opportunity | /articles/sorties/musee-de-l-air-et-de-l-espace-a-la-toussaint-2026-quelle-activite-choisir-selon-l-age/ | 2026-10-05T20:22:10.692Z
- opportunity | /articles/evenements/noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges/ | 2026-10-25T15:16:03.590Z
- opportunity | /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | 2026-10-24T15:27:41.430Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
