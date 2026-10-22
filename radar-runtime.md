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
title: "Salon du Cheval de Paris 2026 en famille: animations, jumping et billets"
subtitle: "Du 4 au 6 décembre à la Porte de Versailles: ce que comprend l'entrée et quand prévoir un billet distinct"
summary: "Ateliers pour enfants, jumping international et Nuits du Cheval: dates, tarifs annoncés, horaires et accès au Salon du Cheval de Paris 2026 en famille."
category: evenements
location:
  city: Paris
  department: Paris
  region: Île-de-France
keywords:
  - salon du cheval Paris 2026 enfants
  - salon du cheval Paris 2026 famille
  - salon du cheval de Paris tarifs 2026
  - nuits du cheval 2026 billets
  - jumping salon du cheval Paris 2026
sources:
  - title: Salon du Cheval de Paris - Enfants et familles 2026
    url: https://www.salon-cheval.fr/enfants
  - title: Salon du Cheval de Paris - Quel billet choisir en 2026?
    url: https://www.salon-cheval.fr/article/salon-du-cheval-de-paris-2026-quel-billet-choisir-pour-votre-visite
  - title: Salon du Cheval de Paris - Informations pratiques et FAQ 2026
    url: https://www.salon-cheval.fr/infos-pratiques
  - title: Salon du Cheval de Paris - Programme 2026
    url: https://www.salon-cheval.fr/programme
  - title: Salon du Cheval de Paris - Compétitions
    url: https://www.salon-cheval.fr/competitions
  - title: Salon du Cheval de Paris - La Nuit du Cheval
    url: https://www.salon-cheval.fr/la-nuit-du-cheval
  - title: Salon du Cheval de Paris - La Nuit du Complet
    url: https://www.salon-cheval.fr/la-nuit-du-complet-by-forestier
  - title: Paris je t'aime - Salon du Cheval de Paris
    url: https://parisjetaime.com/evenement/salon-du-cheval-de-paris-e053
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle
  decision: Permettre aux parents de choisir une visite de journée, un créneau de jumping ou les Nuits du Cheval selon l'âge des enfants, les activités effectivement confirmées, le budget total et les horaires, sans supposer qu'un billet salon donne accès à tous les spectacles.
  affiliationPotential: Billetterie principale sur le site de l'organisateur; vérifier si GetYourGuide, Tiqets ou Klook proposent une offre strictement équivalente avant tout lien partenaire. Pour un week-end à Paris, examiner un ou deux hébergements familiaux réservables via Booking.com près de Porte de Versailles, sans promettre prix ou disponibilité.
  gsc:
    retrievedAt: 2026-10-21T05:02:00.000Z
    dataThrough: 2026-10-18
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Salon du Cheval de Paris - site officiel 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-06
---

Le **Salon du Cheval de Paris** revient du **vendredi 4 au dimanche 6 décembre 2026** à Paris Expo Porte de Versailles. Avec des enfants, on peut découvrir les chevaux et les métiers équestres, participer à des ateliers et voir des démonstrations. Mais **un billet d'entrée au Salon ne donne pas accès à toutes les épreuves de jumping ni aux spectacles du soir**: la formule dépend de ce que votre famille souhaite voir.

## Des ateliers et animations à découvrir en journée

Pour les enfants qui aiment approcher l'univers du cheval sans assister à une longue compétition, l'organisateur annonce en 2026 des ateliers consacrés au **pansage**, à la **nutrition**, au **bien-être**, à la théorie et aux **quiz**. Des animations quotidiennes présentent aussi plusieurs disciplines: **Equifun, équitation en amazone, cross shetland, western, hunter, pony games et travail à pied**.

Le **hall 4** accueille une carrière d'animation, un espace de préparation des chevaux du jumping et un pôle Santé où rencontrer notamment vétérinaires, maréchaux-ferrants et autres professionnels. Le **hall 6** complète la visite avec les exposants et les animations du Salon. L'organisateur présente ces activités sur sa [page dédiée aux familles](https://www.salon-cheval.fr/enfants), sans publier pour chacune un âge minimum, un horaire ni une procédure de réservation: consultez le programme de votre journée avant de promettre un atelier précis à un enfant. La présence de poneys et de démonstrations **ne garantit pas une balade à poney**.

## Jumping: quel jour le billet Salon suffit-il?

Le Salon accueille un **jumping international**, mais les conditions d'accès aux tribunes changent selon le créneau:

- **Vendredi 4 décembre:** les épreuves sont accessibles avec le billet Salon, **dans la limite des places disponibles en tribunes**.
- **Samedi 5 et dimanche 6 décembre, le matin:** les **deux premières épreuves** de chaque journée sont également accessibles avec le billet Salon, selon les places libres.
- **Samedi et dimanche après-midi:** les grandes épreuves nécessitent la formule **Accès Salon + Jumping International**, qui comprend une **place assise en tribune à placement libre**.

Ainsi, une famille voulant seulement montrer du saut d'obstacles aux enfants peut privilégier le **vendredi** ou une **matinée du week-end**. Pour assister aux épreuves principales du samedi ou du dimanche après-midi, il faut sélectionner la bonne option lors de l'achat. Ces distinctions sont détaillées dans les [conditions 2026 de l'organisateur](https://www.salon-cheval.fr/competitions). Le jeudi 3 décembre comporte une épreuve **non ouverte au public**: inutile de prévoir cette date pour une visite.

## Deux soirées différentes les 4 et 5 décembre

Les **Nuits du Cheval** ont lieu de **21h à 23h** et se réservent **séparément** du billet Salon ordinaire. Leur billet inclut l'accès aux **halls 4 et 6 à partir de 18h**.

- **Vendredi 4 décembre, Nuit du Cheval:** une soirée de spectacle équestre, avec notamment une épreuve des six barres puis un numéro de travail en liberté de **Jean-François Pignon**, en collaboration avec **Étienne Serclérat**.
- **Samedi 5 décembre, Nuit du Complet by Forestier:** une soirée autour du **concours complet**, présentée comme une expérience sportive et participative. Le billet comprend également l'accès à l'**After Party à partir de 23h**.

Pour un enfant sensible au bruit, à la foule ou à la fatigue, **la visite de jour sera généralement plus facile à organiser**: les spectacles se terminent à 23h, hors trajet de retour. Le choix entre les deux soirées dépend davantage de l'envie de voir un **spectacle artistique** le vendredi ou de découvrir le **sport du concours complet** le samedi.

## Tarifs 2026: combien payer en famille?

Selon la [FAQ officielle 2026](https://www.salon-cheval.fr/infos-pratiques), les **principaux prix indicatifs TTC** sont de **20 € pour le billet Salon classique**, **18 € pour le jumping du samedi**, **23 € pour celui du dimanche** et **80 € pour une Nuit du Cheval**. Ce sont des **repères**, non le calcul garanti d'un panier: les formules combinées, les catégories de places et les réductions éventuelles doivent être vérifiées dans la billetterie avant paiement.

Le **Salon est gratuit pour les moins de 6 ans**, mais **leur billet gratuit se récupère au guichet à l'arrivée**. L'organisateur indique aussi une **réduction familiale appliquée au paiement**, sans montant public uniforme à reprendre. Pour les enfants plus âgés, sélectionnez leur âge exact dans la billetterie. **Ne supposez pas que la gratuité d'entrée s'étend automatiquement aux spectacles du soir.**

Exemple pour **deux adultes et un enfant de moins de 6 ans**, lors d'une simple journée au Salon: le **prix indicatif de base est de 40 €**, avant éventuelle réduction familiale et dépenses de restauration ou de transport. Ajouter une grande épreuve de jumping ou une soirée change la formule; vérifiez son total final avant de réserver. Les billets sont valables pour **une entrée** et l'organisateur recommande de réserver à l'avance car les places sont limitées.

## Horaires, transports et accessibilité

Le rendez-vous se déroule à **Paris Expo Porte de Versailles, pavillons 4 et 6**, **1 place de la Porte de Versailles, 75015 Paris**.

- **Vendredi 4 et samedi 5 décembre:** de **9h à 21h**.
- **Dimanche 6 décembre:** de **9h à 18h**.
- **Spectacles du vendredi et du samedi:** de **21h à 23h**.

L'accès le plus direct est la station **Porte de Versailles**, desservie par le **métro 12** et les **tramways T2 et T3a**. Le **métro 8 (Balard)** et les **bus 80 ou 39** offrent d'autres options. En voiture, les places de stationnement sont annoncées **limitées en raison de travaux**; mieux vaut examiner les transports avant de partir avec les enfants.

Pour les titulaires d'une **carte mobilité inclusion portant la mention « invalidité » ou « priorité »**, l'organisateur prévoit des billets gratuits **Salon et jumping** à retirer sur place. L'accompagnant est gratuit lorsque la carte prévoit la mention **« accompagnant obligatoire »**; dans les autres cas, il doit prendre un billet. **Les Nuits du Cheval restent payantes.** Des accès et parkings adaptés sont indiqués dans la FAQ officielle; pour une poussette ou des besoins spécifiques, préparez l'arrivée selon l'entrée réellement accessible.

## Dormir près de la Porte de Versailles

Pour une visite sur deux jours ou une soirée finissant tard, deux hébergements proposés sur Booking.com peuvent éviter un long trajet de retour avec les enfants. Le [Novotel Paris Porte Versailles](https://www.booking.com/hotel/fr/novotel-paris-pte-versailles.fr.html), annoncé à environ **100 mètres du parc des expositions**, dispose de **chambres familiales**. L'[Eklo Hotels Paris Porte de Versailles, à Vanves](https://www.booking.com/hotel/fr/eklo-paris-porte-de-versailles-vanves.fr.html), à **moins d'un kilomètre du site**, propose aussi des **chambres familiales** et un restaurant. Pour chacun, renseignez **l'âge de chaque enfant**, la **capacité effective de la chambre**, les dates du **4 au 6 décembre** et les conditions d'annulation: ces établissements ne garantissent pas ici de disponibilité ni de tarif particulier.

Pour comparer avec un autre grand événement équestre français, notre guide d'[Equita Lyon 2026 en famille](/articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/) porte sur un rendez-vous différent, à Chassieu près de Lyon.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/salon-du-chocolat-paris-2026-avec-des-enfants-quel-billet-choisir-et-quels-ateliers-reserver/ | Salon du Chocolat Paris 2026 avec des enfants: quel billet choisir et quels ateliers réserver | evenements | Paris, Paris, Île-de-France
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/equidays-2026-en-famille-dans-le-calvados-villages-gratuits-parade-et-animations/ | Équidays 2026 en famille dans le Calvados: villages gratuits, parade et animations | evenements | Caen, Calvados, Normandie
- /articles/evenements/foire-d-automne-de-saint-jean-du-gard-2026-en-famille-animations-et-conseils/ | Foire d'Automne de Saint-Jean-du-Gard 2026 en famille: animations et conseils | evenements | Saint-Jean-du-Gard, Gard, Occitanie
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/noel-a-limoges-2026-en-famille-marche-animations-et-idees-pour-un-week-end/ | Noël à Limoges 2026 en famille: marché, animations et idées pour un week-end | evenements | Limoges, Haute-Vienne, Nouvelle-Aquitaine
- /articles/evenements/braderie-ete-toulon-2026-famille/ | Braderie d’été de Toulon 2026 en famille: animations gratuites et accès au centre-ville | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | Métamorphoses 2026 au quai Branly: séances gratuites et films par âge | evenements | Paris, Paris, Île-de-France
- /articles/maison/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager/ | À Paris, où donner ou déposer meubles, jouets et électroménager ? | maison | Paris, Paris, Île-de-France
- /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | Día de los Muertos 2026 au Jardin d’Acclimatation: programme, billets et tailles | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-au-musee-carnavalet-quelle-activite-choisir-selon-l-age/ | Vacances de la Toussaint 2026 au musée Carnavalet: activités en famille dès 4 ans | sorties | Paris, Paris, Île-de-France
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | Vacances de la Toussaint 2026 à la Cité des sciences: les ateliers numériques gratuits avec des enfants | sorties | Paris, Paris, Île-de-France
- /articles/activites/stages-de-science-a-la-cite-des-sciences-pendant-la-toussaint-2026-lequel-choisir-selon-l-age/ | Stages de science à la Cité des sciences à la Toussaint 2026: durées, âges et tarifs | activites | Paris, Paris, Île-de-France
- /articles/activites/paris-sport-vacances-automne-2026-demi-journee-gratuite-ou-stage-a-la-journee/ | Paris Sport Vacances automne 2026: demi-journée gratuite ou stage à la journée? | activites | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-au-louvre-quelles-activites-choisir-avec-des-enfants/ | Vacances de la Toussaint 2026 au Louvre: le programme famille du 17 octobre au 1er novembre | sorties | Paris, Paris, Île-de-France
- /articles/evenements/fete-des-rues-aux-enfants-2026-a-paris-ou-aller-selon-l-arrondissement/ | Fête des rues aux enfants 2026 à Paris: où aller selon l'arrondissement? | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne
- /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | Foire de Dijon 2026 avec les enfants: gratuités, ateliers et Ferme Côte-d'Or | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | Foire de Grenoble 2026 en famille: jours gratuits, programme et tarifs | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | Equita Lyon 2026 avec des enfants: billets, Village Enfants et spectacles | evenements | Chassieu, Rhône, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | 2026-10-08T14:56:52.034Z
- opportunity | /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | 2026-10-21T10:43:46.144Z
- opportunity | /articles/evenements/fete-des-rues-aux-enfants-2026-a-paris-ou-aller-selon-l-arrondissement/ | 2026-10-03T14:16:09.016Z
- opportunity | /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | 2026-10-21T16:31:41.000Z
- opportunity | /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | 2026-10-21T13:33:34.395Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z
- opportunity | /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | 2026-10-18T04:19:39.869Z
- opportunity | /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | 2026-10-06T19:20:39.093Z
- opportunity | /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | 2026-10-09T14:37:47.734Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
