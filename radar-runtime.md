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
- contrôle que la logique d'affiliation de ces règles partenaires fournies dans ce runtime a bien été appliquée, que les offres retenues sont encore pertinentes et que leur intégration se lit naturellement; pour une sortie, une activité, une visite, un événement ou un voyage sans affiliation, vérifie qu'aucune piste normale n'a été oubliée;
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
title: "Toussaint 2026 au Seaquarium: dates des jeux, âges et billets en famille"
subtitle: Du 17 octobre au 1er novembre, atelier Squelette en fête, enquête libre et HalloKids au Grau-du-Roi
summary: "Toussaint 2026 au Seaquarium: quelles animations choisir selon l'âge, quand venir pour HalloKids et combien coûtent les billets pour toute la famille."
category: evenements
location:
  city: Le Grau-du-Roi
  department: Gard
  region: Occitanie
keywords:
  - Seaquarium Toussaint 2026
  - HalloKids Seaquarium 2026
  - Halloween Grau-du-Roi enfants
sources:
  - title: Seaquarium Institut Marin - Programme Toussaint du 17 octobre au 1er novembre 2026
    url: https://www.seaquarium.fr/wwp-actu/vacances-de-toussaint-au-seaquarium-institut-marin/
  - title: Seaquarium Institut Marin - Horaires, accès, accessibilité et tarifs
    url: https://www.seaquarium.fr/fr/infos-pratiques/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: toussaint-2026-au-seaquarium-du-grau-du-roi-quel-jeu-choisir
  decision: Choisir une date permettant à ses enfants de participer à l'animation souhaitée et acheter la formule d'entrée adaptée au budget familial.
  affiliationPotential: "Entrée Seaquarium disponible chez Tiqets: https://www.tiqets.com/fr/activites-attractions-le-grau-du-roi-c96737/billets-pour-seaquarium-coupe-file-p978903/ ; comparer au forfait famille officiel. Chambres familiales à l'hôtel Le Maray sur Booking.com: https://www.booking.com/hotel/fr/le-maray.fr.html ; vérifier les dates."
  gsc:
    retrievedAt: 2026-10-15T06:53:46.851Z
    dataThrough: 2026-10-12
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Seaquarium - Programme Toussaint 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-11-01
---

Du **17 octobre au 1er novembre 2026**, le Seaquarium Institut Marin du Grau-du-Roi propose trois animations de Toussaint à faire en famille. Le choix dépend surtout de l'âge des enfants et de la date: **HalloKids n'a lieu que les 27, 28 et 29 octobre**, tandis que l'enquête en autonomie s'arrête précisément ces trois jours-là. Les activités sont comprises dans le billet de visite.

## Quel jeu choisir selon l'âge et le jour?

Le [programme officiel de Toussaint 2026](https://www.seaquarium.fr/wwp-actu/vacances-de-toussaint-au-seaquarium-institut-marin/) distingue trois propositions:

- **«Squelette en fête», dès 6 ans:** atelier créatif pour fabriquer un squelette articulé, dans l'espace Requinarium. Du 17 octobre au 1er novembre, de **10h à 12h** puis de **14h à 17h**. Pas d'inscription.
- **Enquête au Seaquarium, dès 7 ans:** jeu scientifique à suivre librement grâce à un livret remis en caisse, de **9h30 à 17h**, pendant les vacances **sauf les 27, 28 et 29 octobre**. Pas d'inscription; chacun avance à son rythme au fil de la visite.
- **«HalloKids», dès 7 ans:** jeu de piste animé par les médiatrices scientifiques, **les 27, 28 et 29 octobre de 13h30 à 16h**. L'activité est sans inscription, mais les **places sont limitées**: la présence pendant le créneau ne garantit pas une place.

Avec un enfant de 6 ans, l'atelier est l'animation annoncée pour son âge; les deux enquêtes demandent au moins 7 ans. Pour un enfant de 7 ans ou plus qui veut absolument participer à HalloKids, il faut retenir l'une de ses trois dates. Si la famille préfère résoudre les indices sans suivre un groupe, l'enquête libre se déroule les autres jours.

Le programme annonce aussi une **médiation postée entre 10h et 17h**: les médiatrices échangent avec les visiteurs à différents endroits du Seaquarium, sans horaire fixe pour chaque rencontre.

## Combien coûte la visite pour une famille?

Les animations de Toussaint ne demandent **pas de supplément au billet d'entrée**. D'après les [tarifs officiels du Seaquarium](https://www.seaquarium.fr/fr/infos-pratiques/):

- **Adulte:** 17,50 €.
- **Enfant de 5 à 15 ans:** 13 €.
- **Moins de 5 ans:** gratuit.
- **Forfait famille de deux adultes et deux enfants:** **55,50 €**, non cumulable avec une autre réduction.

À quatre, avec deux adultes et deux enfants payants, les billets individuels coûteraient **61 €**: le forfait officiel économise donc **5,50 €**. Avec un enfant de moins de 5 ans, ou une composition familiale différente, faites le calcul selon les âges avant de choisir le forfait. Le Seaquarium affiche aussi des tarifs réduits pour certaines situations de handicap, ainsi que pour les étudiants et lycéens.

Vous pouvez également [consulter les billets d'entrée au Seaquarium sur Tiqets](https://www.tiqets.com/fr/activites-attractions-le-grau-du-roi-c96737/billets-pour-seaquarium-coupe-file-p978903/). Vérifiez le total affiché pour **chaque âge et chaque date** avant de payer: cette offre porte sur l'entrée et ne doit pas être supposée plus avantageuse que le forfait famille à 55,50 €. Le programme officiel précise que les activités sont incluses dans la visite, sans billet d'animation séparé.

## Horaires et préparation de la visite

Le Seaquarium est situé **avenue du Palais de la Mer, 30240 Le Grau-du-Roi**. En octobre et en novembre, les [horaires officiels](https://www.seaquarium.fr/fr/infos-pratiques/) sont de **9h30 à 18h30**, avec **fermeture des caisses à 17h30**. Comptez **environ deux heures** pour découvrir l'aquarium, davantage si vous souhaitez participer à une activité.

Pour HalloKids, l'essentiel est d'arriver à temps pour le jeu de l'après-midi, en tenant compte des places limitées, puis de garder du temps pour les bassins. Pour l'enquête en autonomie, vous pouvez organiser votre parcours plus librement, sans dépasser sa fin à 17h.

Le parcours dispose d'**ascenseurs**, utilisables aussi avec une poussette. L'établissement annonce des sanitaires accessibles, un fauteuil roulant prêté à l'accueil sur demande, des places de stationnement PMR près de l'entrée et du matériel sensoriel (notamment casques anti-bruit) disponible à l'accueil. Ces équipements sont détaillés sur la [page d'accessibilité et d'informations pratiques](https://www.seaquarium.fr/fr/infos-pratiques/).

## Prolonger la sortie au Grau-du-Roi

Pour associer la visite à une autre activité en Camargue sans confondre les différents billets, notre guide [Le Grau-du-Roi en famille: trois activités à réserver en 2026](/articles/sorties/le-grau-du-roi-en-famille-3-activites-a-reserver-en-2026/) compare le Seaquarium, une sortie nature et une balade en mer.

Si vous transformez la sortie en séjour, l'[hôtel Le Maray au Grau-du-Roi sur Booking.com](https://www.booking.com/hotel/fr/le-maray.fr.html) propose notamment des **chambres triples et quadruples** près du port de pêche. Il n'est pas situé à l'entrée du Seaquarium: vérifiez le trajet jusqu'à l'aquarium, la capacité adaptée aux enfants, les disponibilités et le prix aux dates de vacances choisies.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/le-grau-du-roi-en-famille-3-activites-a-reserver-en-2026/ | Le Grau-du-Roi en famille: 3 activités à réserver en 2026 | sorties | Le Grau-du-Roi, Gard, Occitanie
- /articles/voyages/futuroween-2026-futuroscope-billet-programme-enfants/ | Futuroween 2026 au Futuroscope: billet, programme et conseils avec des enfants | voyages | Chasseneuil-du-Poitou, Vienne, Nouvelle-Aquitaine
- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/activites/cite-du-chocolat-valrhona-a-la-toussaint-2026-quel-atelier-choisir-selon-l-age/ | Cité du Chocolat Valrhona à la Toussaint 2026: animations et ateliers avec des enfants | activites | Tain-l'Hermitage, Drôme, Auvergne-Rhône-Alpes
- /articles/activites/stages-de-science-a-la-cite-des-sciences-pendant-la-toussaint-2026-lequel-choisir-selon-l-age/ | Stages de science à la Cité des sciences à la Toussaint 2026: durées, âges et tarifs | activites | Paris, Paris, Île-de-France
- /articles/evenements/mucem-a-la-toussaint-2026-quelle-activite-en-ribambelle-choisir-selon-l-age/ | Mucem à la Toussaint 2026: le programme En Ribambelle avec des enfants | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/voyages/vulcania-a-la-toussaint-2026-1-ou-2-jours-billets-et-ou-dormir/ | Vulcania à la Toussaint 2026: 1 ou 2 jours, billets et où dormir | voyages | Saint-Ours-les-Roches, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/bons-plans/musee-fermat-en-famille-jeux-tarifs-et-visite-avec-des-enfants/ | Musée Fermat en famille: jeux, tarifs et visite avec des enfants | bons-plans | Beaumont-de-Lomagne, Tarn-et-Garonne, Occitanie
- /articles/activites/grotte-de-trabuc-en-famille-les-100-000-soldats-tarifs-et-visites/ | Grotte de Trabuc en famille: les 100 000 soldats, tarifs et visites | activites | Mialet, Gard, Occitanie
- /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | Monument jeu d’enfant à Aigues-Mortes: mini-sacre et escape game les 17 et 18 octobre 2026 | evenements | Aigues-Mortes, Gard, Occitanie
- /articles/evenements/foire-d-automne-de-saint-jean-du-gard-2026-en-famille-animations-et-conseils/ | Foire d'Automne de Saint-Jean-du-Gard 2026 en famille: animations et conseils | evenements | Saint-Jean-du-Gard, Gard, Occitanie
- /articles/voyages/ou-dormir-a-aigues-mortes-pour-visiter-a-pied-avec-des-enfants/ | Où dormir à Aigues-Mortes pour visiter à pied avec des enfants? | voyages | Aigues-Mortes, Gard, Occitanie
- /articles/sorties/bambouseraie-avec-de-jeunes-enfants-poussette-ou-balade-aerienne/ | Bambouseraie avec de jeunes enfants: poussette ou balade aérienne? | sorties | Générargues, Gard, Occitanie
- /articles/bons-plans/pont-du-gard-a-petit-budget-comment-visiter-sans-payer-plus-que-necessaire/ | Pont du Gard à petit budget: comment visiter sans payer plus que nécessaire | bons-plans | Vers-Pont-du-Gard, Gard, Occitanie
- /articles/parentalite/premier-week-end-a-nimes-avec-un-bebe-ou-dormir-et-quoi-faire/ | Nîmes avec un bébé: Romanité, Jardins de la Fontaine et où dormir | parentalite | Nîmes, Gard, Occitanie
- /articles/sorties/tous-en-vadrouille-nimes-2026-famille/ | Tous en vadrouille à Nîmes: une visite-jeu en famille jusqu’au 23 août 2026 | sorties | Nîmes, Gard, Occitanie
- /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/vacances-royales-2026-a-versailles-animations-napoleon-dates-et-billets-en-famille/ | Vacances royales 2026 à Versailles: animations Napoléon, dates et billets | evenements | Versailles, Yvelines, Île-de-France
- /articles/evenements/rouen-givree-2026-en-famille-marche-de-noel-et-refuge-givre/ | Rouen Givrée 2026 en famille: marché de Noël et Refuge Givré | evenements | Rouen, Seine-Maritime, Normandie
- /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | Au Creux de l'Oreille 2026 à Noirlac: spectacles et ateliers en famille du 17 au 22 octobre | evenements | Bruère-Allichamps, Cher, Centre-Val de Loire
- /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | Grands Zyeux P'tites Zoreilles 2026: spectacles gratuits avec les tout-petits autour de Béziers | evenements | Béziers, Hérault, Occitanie
- /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | Abracada BOUH 2026 à Montpellier: programme et tarifs au château de Flaugergues | evenements | Montpellier, Hérault, Occitanie

### Historique Radar lié

- opportunity | /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | 2026-10-13T20:41:25.500Z
- opportunity | /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | 2026-10-14T13:49:08.708Z
- opportunity | /articles/activites/cite-du-chocolat-valrhona-a-la-toussaint-2026-quel-atelier-choisir-selon-l-age/ | 2026-10-05T14:27:51.219Z
- opportunity | /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | 2026-10-14T07:31:28.976Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | 2026-10-10T17:38:43.806Z
- opportunity | /articles/evenements/mucem-a-la-toussaint-2026-quelle-activite-en-ribambelle-choisir-selon-l-age/ | 2026-10-04T10:54:39.216Z
- opportunity | /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | 2026-10-15T05:30:56.094Z
- opportunity | /articles/activites/stages-de-science-a-la-cite-des-sciences-pendant-la-toussaint-2026-lequel-choisir-selon-l-age/ | 2026-10-04T05:39:23.036Z
- opportunity | /articles/evenements/vacances-royales-2026-a-versailles-animations-napoleon-dates-et-billets-en-famille/ | 2026-10-14T18:43:15.620Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
