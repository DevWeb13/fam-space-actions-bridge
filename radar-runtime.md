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
title: "Ateliers textiles au musée Bourdelle : styliste ou broderie avec les enfants ?"
subtitle: Dès 4 ou 7 ans, comparez les créations, les séances de novembre et décembre 2026 et le vrai budget familial.
summary: "Au musée Bourdelle à Paris, Styliste en herbe et Broderie simultanée proposent deux créations très différentes. Âges, horaires, billets d'atelier et d'exposition : les points à vérifier avant de réserver."
category: activites
location:
  city: Paris
  department: Paris
  region: Île-de-France
keywords:
  - atelier textile famille musée Bourdelle 2026
  - Styliste en herbe Broderie simultanée Paris
sources:
  - title: Musée Bourdelle — Styliste en herbe
    url: https://www.bourdelle.paris.fr/visiter/preparer-sa-visite/agenda/styliste-en-herbe-atelier-textile-en-famille-autour-de-lexposition-letoffe-de-lartiste
  - title: Musée Bourdelle — Broderie simultanée
    url: https://bourdelle.paris.fr/visiter/preparer-sa-visite/agenda/broderie-simultanee-atelier-textile-en-famille-autour-de-lexposition-letoffe-de-lartiste
  - title: Ville de Paris — Styliste en herbe
    url: https://www.paris.fr/evenements/styliste-en-herbe-atelier-textile-en-famille-autour-de-l-exposition-l-etoffe-de-l-artiste-125419
  - title: Ville de Paris — Broderie simultanée
    url: https://www.paris.fr/evenements/broderie-simultanee-atelier-textile-en-famille-autour-de-l-exposition-l-etoffe-de-l-artiste-125421
  - title: Musée Bourdelle — Informations pratiques et tarifs
    url: https://bourdelle.paris.fr/visiter/preparer-sa-visite/informations-pratiques
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: ateliers-textiles-au-musee-bourdelle-a-paris-styliste-ou-broderie-en-famille-en-2026
  decision: Choisir l'atelier réellement adapté à l'âge et aux envies de l'enfant, calculer le prix de la sortie et réserver le bon créneau sans confondre billet d'atelier et billet d'exposition.
  affiliationPotential: Réservation des ateliers uniquement sur la billetterie officielle Paris Musées; hébergement Booking à Paris 15e à vérifier uniquement pour les familles en séjour, sans prétendre à une offre vérifiée.
  gsc:
    retrievedAt: 2026-11-03T01:32:28+01:00
    dataThrough: 2026-10-31
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Paris - Styliste en herbe au musée Bourdelle »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-30
---

Au musée Bourdelle, dans le 15e arrondissement de Paris, l'exposition « L'étoffe de l'artiste » inspire deux ateliers à faire avec un enfant. **Styliste en herbe**, dès 4 ans, invite à composer une tenue à partir de tissus. **Broderie simultanée**, dès 7 ans, permet de créer un petit tableau textile avec la technique du *punch needle*. Le bon choix dépend surtout de l'âge, de l'envie de manipuler des matières et du temps que l'enfant peut consacrer à sa création.

## Quel atelier choisir selon l'âge et l'activité ?

### Styliste en herbe : imaginer une tenue dès 4 ans

Après une découverte de silhouettes d'artistes dans l'exposition, adultes et enfants assemblent des échantillons textiles sur une silhouette en carton. C'est le choix le plus accessible pour un enfant de **4 à 6 ans**, ou pour un plus grand qui aime inventer des vêtements, associer couleurs et matières. La séance dure **1 h 30**.

### Broderie simultanée : créer un tableau dès 7 ans

Inspiré des recherches de motifs et de tissus de Sonia Delaunay, cet atelier initie à la broderie *punch needle* pour réaliser un petit tableau. Il s'adresse aux enfants **à partir de 7 ans** et dure **2 heures**. Il convient davantage à ceux qui souhaitent découvrir une technique textile et prendre le temps de travailler un motif.

À 7 ans ou plus, les deux sont possibles : préférez Styliste pour l'imagination autour du vêtement, Broderie pour l'expérimentation d'un geste artisanal. Ce sont des ateliers **en famille**, pas des séances où l'on dépose simplement son enfant.

## Les prochaines dates et les horaires en 2026

**Styliste en herbe** : les dimanches **22 et 29 novembre, 6, 20 et 27 décembre**, de **14 h 30 à 16 h** ; les mardis **22 et 29 décembre**, de **10 h 30 à 12 h**.

**Broderie simultanée** : les dimanches **22 et 29 novembre, 6, 20 et 27 décembre**, de **16 h à 18 h** ; les mercredis **23 et 30 décembre**, de **10 h 30 à 12 h 30**.

Ces créneaux sont ceux annoncés par le musée pour la fin de l'année 2026. Ils ne garantissent pas qu'il reste des places. Le calendrier officiel présente également des séances en janvier 2027 : si décembre est complet, consultez les nouvelles dates avant de renoncer.

## Quel budget prévoir pour une famille ?

Pour **chacun des deux ateliers**, le musée indique **10 € par adulte** et **8 € par enfant**. Chaque participant doit réserver sa propre place. Il faut également tenir compte du **billet d'exposition de l'adulte** : l'accès à l'exposition temporaire coûte normalement **12 €**, ou **10 € au tarif réduit**, tandis que l'enfant de moins de 18 ans y entre gratuitement.

Ainsi, pour un adulte et un enfant, comptez **18 € d'atelier**, soit **30 € au total** si l'adulte paie l'exposition au tarif plein. Pour deux adultes et deux enfants : **36 € d'atelier**, soit **60 €** avec deux billets d'exposition adultes au plein tarif. Ces exemples ne tiennent pas compte d'éventuelles gratuités ou réductions de l'exposition pour les adultes : vérifiez vos justificatifs et le panier de réservation avant paiement.

**Attention à ne pas confondre** la place à l'atelier et l'entrée à l'exposition. La réservation de l'atelier est obligatoire et les deux activités disposent de leur propre sélection de séances sur la billetterie de Paris Musées. Retrouvez les accès de réservation sur les fiches officielles [Styliste en herbe](https://www.paris.fr/evenements/styliste-en-herbe-atelier-textile-en-famille-autour-de-l-exposition-l-etoffe-de-l-artiste-125419) et [Broderie simultanée](https://www.paris.fr/evenements/broderie-simultanee-atelier-textile-en-famille-autour-de-l-exposition-l-etoffe-de-l-artiste-125421).

## Préparer la visite avec des enfants

Le **musée Bourdelle**, au **18 rue Antoine-Bourdelle, Paris 15e**, est accessible notamment par les stations **Montparnasse–Bienvenüe** (lignes 4, 6, 12 et 13) et **Falguière** (ligne 12). Il ouvre habituellement du mardi au dimanche de 10 h à 18 h. Des travaux à l'accueil peuvent imposer un accès temporaire par le **16 rue Antoine-Bourdelle**, au portail vert : vérifiez cette indication avant de partir.

Le musée annonce un accès **PMR**, des **toilettes accessibles**, une **table à langer**, ainsi que le **prêt de poussettes et de porte-bébés**. Il ne précise pas dans ces informations si une poussette personnelle peut entrer dans chaque salle d'atelier : contactez l'accueil si vous venez avec un bébé. Le **café-restaurant Le Rhodia** est annoncé ouvert de 10 h à 17 h 30 du mardi au dimanche ; pour une séance de broderie se terminant à 18 h, mieux vaut donc prévoir le goûter avant. Les **valises et gros bagages ne sont pas acceptés**, même au vestiaire, en raison des mesures de sécurité.

Pour un séjour à Paris, le secteur **Montparnasse** permet de rejoindre facilement le musée. Comparez les hébergements adaptés à votre composition familiale sur [Booking.com à Paris](https://www.booking.com/city/fr/paris.fr.html), en vérifiant les chambres familiales, les conditions d'annulation et la distance réelle jusqu'au musée. Aucun tarif ni disponibilité d'hôtel n'est garanti ici.

Si vous venez avec une poussette et souhaitez préparer le reste de vos déplacements, consultez aussi notre guide [Paris avec une poussette : métro, RER, bus ou tram ?](/articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/).

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | Vacances de la Toussaint 2026 à la Cité des sciences: les ateliers numériques gratuits avec des enfants | sorties | Paris, Paris, Île-de-France
- /articles/cuisine/ateliers-cuisine-parent-enfant-a-paris-lesquels-choisir-selon-l-age-et-le-budget/ | Ateliers cuisine parent-enfant à Paris: lesquels choisir selon l’âge et le budget ? | cuisine | Paris, Paris, Île-de-France
- /articles/evenements/planete-ocean-a-paris-preparer-la-visite-en-famille/ | Planète Océan à Paris: préparer la visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/salon-du-chocolat-paris-2026-avec-des-enfants-quel-billet-choisir-et-quels-ateliers-reserver/ | Salon du Chocolat Paris 2026 avec des enfants: quel billet choisir et quels ateliers réserver | evenements | Paris, Paris, Île-de-France
- /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | Créations & savoir-faire 2026 à Paris en famille: billets, ateliers et dates | evenements | Paris, Paris, Île-de-France
- /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | Métamorphoses 2026 au quai Branly: séances gratuites et films par âge | evenements | Paris, Paris, Île-de-France
- /articles/activites/atelier-des-lumieres-avec-un-enfant-quel-programme-choisir-et-peut-on-venir-avec-une-poussette/ | Atelier des Lumières avec un enfant: quel programme choisir et peut-on venir avec une poussette ? | activites | Paris, Paris, Île-de-France
- /articles/activites/ateliers-matisse-nice-famille-aout-2026/ | Ateliers Matisse à Nice: sept matinées créatives pour les 4 à 7 ans en août | activites | Nice, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/ | Paris avec une poussette: métro, RER, bus ou tram, que choisir ? | voyages | Paris, Paris, Île-de-France
- /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | Féeries de Noël 2026 à Paris: parcours lumineux, billets et patinoire en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | Odyssée Lumineuse 2026-2027 à Paris: billets, dates et visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/bons-plans/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/ | Navigo Liberté+ en famille: tarifs enfants et choix du passe en 2026 | bons-plans | Paris, Paris, Île-de-France
- /articles/sorties/l-aquarium-tropical-de-la-porte-doree-en-famille/ | L’Aquarium tropical de la Porte Dorée en famille | sorties | Paris, Paris, Île-de-France
- /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | Salon du Cheval de Paris 2026 en famille: animations, jumping et billets | evenements | Paris, Paris, Île-de-France
- /articles/maison/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager/ | À Paris, où donner ou déposer meubles, jouets et électroménager ? | maison | Paris, Paris, Île-de-France
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | Día de los Muertos 2026 au Jardin d’Acclimatation: programme, billets et tailles | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-au-musee-carnavalet-quelle-activite-choisir-selon-l-age/ | Vacances de la Toussaint 2026 au musée Carnavalet: activités en famille dès 4 ans | sorties | Paris, Paris, Île-de-France
- /articles/activites/grottes-de-sare-en-famille-visite-tarifs-et-conseils-pratiques/ | Grottes de Sare en famille: visite, tarifs et conseils pratiques | activites | Sare, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/activites/noel-2026-au-5e-lieu-a-strasbourg-la-visite-disney-vaut-elle-le-detour-avec-des-enfants/ | Visite Disney à Strasbourg au 5e Lieu: dates et billets de Noël 2026 | activites | Strasbourg, Bas-Rhin, Grand Est
- /articles/activites/monastere-royal-de-brou-en-famille-jeux-cloitres-et-tarifs/ | Monastère royal de Brou en famille: jeux, cloîtres et tarifs | activites | Bourg-en-Bresse, Ain, Auvergne-Rhône-Alpes
- /articles/activites/planetarium-de-belfort-en-famille-etoiles-meteorites-et-infos-pratiques/ | Planétarium de Belfort en famille: étoiles, météorites et infos pratiques | activites | Belfort, Territoire de Belfort, Bourgogne-Franche-Comté

### Historique Radar lié

- opportunity | /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | 2026-10-23T06:21:12.326Z
- opportunity | /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | 2026-10-08T14:56:52.034Z
- opportunity | /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | 2026-10-27T13:28:21.076Z
- opportunity | /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | 2026-10-18T04:19:39.869Z
- opportunity | /articles/bons-plans/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/ | 2026-10-25T10:33:30.080Z
- opportunity | /articles/activites/noel-2026-au-5e-lieu-a-strasbourg-la-visite-disney-vaut-elle-le-detour-avec-des-enfants/ | 2026-11-03T09:41:24.597Z
- opportunity | /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | 2026-10-09T14:37:47.734Z
- opportunity | /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | 2026-10-26T15:30:14.299Z
- opportunity | /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/ | 2026-10-28T12:27:07.569Z
- opportunity | /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | 2026-10-22T04:59:04.773Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
