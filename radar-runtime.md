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
title: "Noël des Siècles 2026 à Champs-sur-Marne : billets, budget et horaires en famille"
subtitle: Spectacle immersif ou visite classique, créneaux avec enfants et conseils pratiques
summary: Du 20 novembre au 13 décembre 2026, le château de Champs-sur-Marne accueille un parcours théâtral d'environ une heure. Voici les billets à prévoir, les horaires adaptés aux enfants et les précautions avant de réserver.
category: evenements
location:
  city: Champs-sur-Marne
  department: Seine-et-Marne
  region: Île-de-France
keywords:
  - Noël des Siècles 2026 Champs-sur-Marne
  - billets Noël des Siècles enfants
  - spectacle Noël château de Champs-sur-Marne horaires
sources:
  - title: Château de Champs-sur-Marne — Le Noël des Siècles 2026
    url: https://www.chateau-champs-sur-marne.fr/agenda/le-noel-des-siecles
  - title: Polaris — Le Noël des Siècles et questions fréquentes
    url: https://www.lenoeldessiecles.com/pratique-2
  - title: Château de Champs-sur-Marne — Informations pratiques, accès et restrictions
    url: https://www.chateau-champs-sur-marne.fr/visiter/informations-pratiques
  - title: Placeminute — Billetterie officielle du Noël des Siècles 2026
    url: https://www.placeminute.com/event/experience-immersive/polaris-presente-le-noel-des-siecles-au-chateau-de-champs-sur-marne,47980.html
  - title: Seine-et-Marne Vivre en Grand — Noël des Siècles et formule Grand Visiteur
    url: https://www.tourisme-seine-et-marne.fr/agenda/7090297-noel-siecles/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille
  decision: Distinguer le billet du spectacle de la visite ordinaire du château, calculer le budget selon l'âge des enfants et choisir un horaire compatible avec leur rythme sans compter sur les gratuités habituelles.
  affiliationPotential: "Billetterie du spectacle réservée à Placeminute par l'organisateur : aucune offre correspondante confirmée chez GetYourGuide ou Tiqets. Pour les familles qui prolongent le séjour, ibis Marne La Vallée Champs-sur-Marne sur Booking.com (https://www.booking.com/hotel/fr/ibis-marne-la-vallee.fr.html), chambres familiales indiquées ; vérifier capacité, prix et disponibilité aux dates choisies. Le billet Tiqets de visite ordinaire ne donne pas accès au spectacle."
  gsc:
    retrievedAt: 2026-10-26T01:34:33+01:00
    dataThrough: 2026-10-23
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Château de Champs-sur-Marne — Le Noël des Siècles 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-13
---

Au château de Champs-sur-Marne, **Le Noël des Siècles** n'est pas une visite ordinaire décorée pour les fêtes : du **20 novembre au 13 décembre 2026**, les familles suivent des personnages costumés à travers les salles pour découvrir plusieurs époques de Noël. Le parcours théâtral dure **environ une heure**. Le choix le plus important avant de partir est celui du billet : les gratuités habituelles du monument ne s'appliquent pas à ce spectacle.

## Un spectacle à part, dans les pièces du château

L'histoire entraîne les visiteurs du Noël de la reine de France à la Belle Époque et aux Années folles, avec des scènes inspirées notamment de l'univers d'Ernest Hemingway. Les décors, les costumes et les comédiens donnent au parcours une forme de théâtre itinérant : on avance de pièce en pièce au lieu de rester assis dans une salle.

Pour une sortie principalement consacrée aux jardins ou aux collections du château, mieux vaut choisir une **visite classique** à une autre date. Notre guide du [château de Champs-sur-Marne en famille](/articles/bons-plans/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/) explique ses tarifs ordinaires et les restrictions d'accès pendant les événements.

## Vendredi soir, samedi ou dimanche : quel créneau avec des enfants ?

Le [château annonce le spectacle](https://www.chateau-champs-sur-marne.fr/agenda/le-noel-des-siecles) sur quatre week-ends : **20-22 et 27-29 novembre, puis 4-6 et 11-13 décembre 2026**. Les plages horaires publiées sont :

- **Vendredi :** de 18 h 30 à 21 h 30. Pratique après l'école pour les enfants qui supportent une sortie en soirée, mais le retour peut être tardif.
- **Samedi :** de 10 h à 21 h 30. C'est le jour offrant le plus de latitude : un départ en matinée ou en début d'après-midi convient mieux aux jeunes enfants.
- **Dimanche :** de 10 h à 20 h. Une séance en journée permet de conserver une soirée plus calme avant l'école.

Ces horaires correspondent aux **plages annoncées**, pas à la disponibilité garantie de chaque départ. La [FAQ de l'organisateur](https://www.lenoeldessiecles.com/pratique-2) indique des départs toutes les dix minutes et accepte les visiteurs en retard, mais il reste préférable de respecter l'horaire réservé. Consultez les créneaux réellement proposés avant de fixer le trajet.

**Attention au dimanche 6 décembre :** même s'il s'agit normalement d'un premier dimanche du mois avec entrée gratuite pour la visite patrimoniale, le domaine est réservé aux spectateurs munis du billet spécial pendant les représentations.

## Combien coûte la sortie pour une famille ?

Le tarif affiché par le château commence à **21,99 € par adulte** et **13,99 € par enfant de 4 à 15 ans**. Pour **deux adultes et deux enfants de cette tranche d'âge**, le budget minimal est donc de **71,96 €**, avant d'éventuels frais de réservation, transports et restauration. Il s'agit d'un prix *à partir de* : le montant exact dépend des billets disponibles lors de l'achat.

Le tarif enfant annoncé s'arrête à **15 ans**. Pour un adolescent de **16 ou 17 ans**, ou un enfant de **moins de 4 ans**, ne déduisez pas une gratuité des règles de la visite classique : vérifiez la catégorie proposée par la billetterie ou demandez confirmation à l'organisateur avant de payer.

L'office de tourisme mentionne également un **parcours « Grand Visiteur » à 4 € supplémentaires**, comprenant quinze minutes de spectacle de plus et une boisson. Vérifiez sa présence et ses conditions pour votre séance si cette formule vous intéresse.

La billetterie du spectacle est distincte de celle du château. L'organisateur indique que l'achat sur place est possible **uniquement dans la limite des places restantes** : pour une date précise, réserver à l'avance évite de compter sur une disponibilité incertaine.

## Poussette, accessibilité et repas : ce qu'il faut anticiper

Les **poussettes sont interdites à l'intérieur du château**, y compris si vous venez avec un tout-petit. Le monument propose habituellement un prêt de porte-bébé à sa billetterie, mais sa disponibilité pendant les représentations n'est pas confirmée : mieux vaut venir équipé. Le château signale aussi une table à langer, des casques antibruit et un ascenseur pour ses visites ordinaires ; demandez directement à l'organisateur lesquels sont accessibles pendant la mise en scène, notamment en cas de handicap ou de sensibilité au bruit.

Une **restauration légère** est annoncée à la fin du parcours. Elle peut dépanner pour une collation, sans remplacer nécessairement un repas complet avec les enfants.

Le château se trouve **31 rue de Paris, 77420 Champs-sur-Marne**. En transports, prenez le **RER A jusqu'à Noisiel**, puis comptez environ **20 minutes de marche (1,8 km)** ; le bus **220**, arrêt « Mairie », réduit la marche finale à environ 250 mètres. En voiture, le château indique un **parking gratuit de 54 places** en face du domaine, ouvert pendant les représentations selon l'organisateur. Vérifiez les horaires de retour des transports si vous choisissez une séance tardive.

## Prolonger la sortie sur deux jours

Pour une famille qui vient de loin et souhaite dormir dans le secteur, l'[ibis Marne La Vallée Champs-sur-Marne sur Booking.com](https://www.booking.com/hotel/fr/ibis-marne-la-vallee.fr.html) propose des chambres familiales. Indiquez l'âge des enfants et vérifiez la capacité réelle de la chambre, le tarif et les disponibilités à vos dates : aucun prix de séjour n'est garanti ici.

Si vous prévoyez une deuxième activité, explorez aussi les [idées de sorties en Seine-et-Marne](/destinations/ile-de-france/seine-et-marne/) pour organiser la journée suivante sans confondre le spectacle avec une visite libre du château.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/bons-plans/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/ | Château de Champs-sur-Marne en famille: gratuités, tarifs et dates à éviter | bons-plans | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/la-legende-des-chevaliers-a-provins-en-famille-tarifs-horaires-et-conseils-2026/ | La Légende des Chevaliers à Provins en famille: tarifs, horaires et conseils 2026 | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/cuisine/visiter-une-cave-d-affinage-de-brie-a-jouarre-ce-qu-il-faut-savoir-avec-des-enfants/ | Visiter une cave d'affinage de brie à Jouarre: ce qu'il faut savoir avec des enfants | cuisine | Jouarre, Seine-et-Marne, Île-de-France
- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/evenements/fete-saint-louis-fontainebleau-2026-famille/ | Fête de la Saint-Louis 2026 à Fontainebleau: une journée gratuite en famille au Grand Canal | evenements | Fontainebleau, Seine-et-Marne, Île-de-France
- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | Noël à Provins 2026: marché médiéval, animations et visites en famille | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | Grand Noël 2026 à Vaux-le-Vicomte en famille: billets, offre enfant et animations | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | Noël 2026 à Disneyland Paris: faut-il un billet 2 parcs pour voir Arendelle? | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/parentalite/laep-en-seine-et-marne-ou-aller-et-comment-se-passe-une-premiere-visite/ | LAEP en Seine-et-Marne: où aller et comment se passe une première visite? | parentalite | Meaux, Seine-et-Marne, Île-de-France
- /articles/maison/couches-lavables-dans-le-nord-de-la-seine-et-marne-acheter-louer-ou-choisir-l-occasion/ | Couches lavables dans le nord de la Seine-et-Marne: acheter, louer ou choisir l'occasion? | maison | Monthyon, Seine-et-Marne, Île-de-France
- /articles/vie-pratique/scol-r-ou-imagine-r-en-seine-et-marne-quel-titre-choisir-pour-la-rentree-2026/ | Scol'R ou imagine R en Seine-et-Marne: quel titre choisir pour la rentrée 2026? | vie-pratique | Melun, Seine-et-Marne, Île-de-France
- /articles/activites/parrot-world-en-famille-tarifs-2026-duree-et-conseils-pour-la-visite/ | Parrot World en famille: tarifs 2026, durée et conseils pour la visite | activites | Crécy-la-Chapelle, Seine-et-Marne, Île-de-France
- /articles/voyages/halloween-2026-a-disneyland-paris-en-famille-billets-hotel-et-duree-du-sejour/ | Halloween 2026 à Disneyland Paris en famille: billets, hôtel et durée du séjour | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/voyages/disneyland-paris-en-famille-en-2026-combien-de-jours-quel-hotel-et-quel-budget-prevoir/ | Disneyland Paris en famille en 2026: combien de jours, quel hôtel et quel budget prévoir | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | Odyssée Lumineuse 2026-2027 à Paris: billets, dates et visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | Rétro Game Festival 2026 à Beauvais: programme, billets famille et animations enfants | evenements | Beauvais, Oise, Hauts-de-France
- /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | Festival Playground 2026: spectacles de danse en famille, dates et tarifs | evenements | Bagnolet, Seine-Saint-Denis, Île-de-France
- /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | Festival Enfantillages 2026 à Valbonne: spectacles gratuits et cinéma en famille | evenements | Valbonne, Alpes-Maritimes, Provence-Alpes-Côte d'Azur

### Historique Radar lié

- opportunity | /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | 2026-10-26T03:35:31.605Z
- opportunity | /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | 2026-10-26T06:30:10.217Z
- opportunity | /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | 2026-10-20T22:29:05.422Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | 2026-10-02T21:22:46.733Z
- opportunity | /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | 2026-10-24T03:31:56.628Z
- opportunity | /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | 2026-10-26T15:30:14.299Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
