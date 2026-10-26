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
title: "Odyssée Lumineuse 2026-2027 à Paris : billets, dates et visite en famille"
subtitle: Billet daté ou Open, budget pour quatre, soirées fermées et parcours avec poussette au Parc Floral
summary: Du 14 novembre 2026 au 24 janvier 2027, l'Odyssée Lumineuse revient au Parc Floral de Paris. Comparez les billets datés et Open, repérez les jours de fermeture et préparez une balade nocturne adaptée aux enfants.
category: evenements
location:
  city: Paris
  department: Paris
  region: Île-de-France
keywords:
  - Odyssée Lumineuse Paris 2026 2027
  - Parc Floral illuminations enfants
  - billets Odyssée Lumineuse daté Open
  - Odyssée Lumineuse jours fermeture
sources:
  - title: "L'Odyssée Lumineuse — Paris : programme, horaires, jours fermés, tarifs et FAQ 2026-2027"
    url: https://odysseelumineuse.fr/paris
  - title: Paris je t'aime — L'Odyssée Lumineuse au Parc Floral
    url: https://parisjetaime.com/eng/event/l-odyssee-lumineuse-parc-floral-paris-e661
  - title: "Ville de Paris — Parc Floral : accès, horaires et accessibilité"
    url: https://www.paris.fr/lieux/parc-floral-de-paris-1
  - title: "Ville de Paris — Jardin botanique : gratuité du Parc Floral d'octobre à mars"
    url: https://www.paris.fr/pages/le-jardin-botanique-de-paris-3539/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille
  decision: Choisir entre un billet daté et un billet Open selon la flexibilité nécessaire, calculer le coût réel pour la famille et sélectionner une soirée ouverte permettant de voir les animations sans coucher les jeunes enfants trop tard.
  affiliationPotential: "Billetterie principale : aucune offre précise confirmée chez GetYourGuide, Tiqets ou Klook après recherche ciblée. Pour les familles en séjour, Abritel propose l'Appartement face au bois de Vincennes (2 chambres, 4 personnes, Parc Floral annoncé à 11 min à pied) : https://www.abritel.fr/location-vacances/p2347593 ; prix et disponibilité aux dates de visite non vérifiés."
  gsc:
    retrievedAt: 2026-10-26T01:34:33+01:00
    dataThrough: 2026-10-23
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Organisateur — Odyssée Lumineuse Paris, programme, tarifs et fermetures 2026-2027 »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-24
---

Du **14 novembre 2026 au 24 janvier 2027**, le Parc Floral de Paris accueille de nouveau l'Odyssée Lumineuse : une promenade nocturne payante parmi les lanternes, les aurores boréales mises en scène et, cette année, la **Féerie des Fontaines Lumineuses** sur le lac. Avec des enfants, deux décisions comptent davantage que la quantité d'installations : choisir un soir réellement ouvert et savoir si la souplesse d'un billet non daté vaut 5 € de plus par personne.

## Billet daté ou Open : combien coûte la sortie ?

Le billet **« enchanteur » daté** est prévu pour un jour fixe : **13 € par adulte** et **11 € par enfant de 3 à 12 ans**. Les moins de 3 ans sont annoncés gratuits. Le billet **Open**, non daté, coûte **18 € par adulte** et **16 € par enfant de 3 à 12 ans**. L'indication commerciale « à partir de 10 € » ne correspond donc pas au prix adulte ordinaire.

Pour **deux adultes et deux enfants de 3 à 12 ans**, comptez **48 € en billets datés** ou **68 € en billets Open**, soit **20 € d'écart**, hors transport, restauration et éventuels frais de billetterie. Un couple avec un enfant de 5 ans paie 37 € en daté, hors autres dépenses.

**Le daté est le meilleur choix** si votre soirée est arrêtée et que les enfants peuvent sortir ce jour-là. L'Open peut se justifier si vous hésitez encore entre plusieurs dates de la saison, notamment à cause de la météo ou d'un emploi du temps familial incertain. Il ne transforme toutefois pas les jours de fermeture en jours visitables.

Point important : selon la FAQ de l'organisateur, les billets **ne sont ni annulables ni échangeables** ; la revente est évoquée comme possibilité. Le parcours est annoncé accessible même sous la pluie, mais cela ne garantit pas le confort d'un jeune enfant par mauvais temps. Avant d'acheter, contrôlez les conditions affichées pour le billet choisi.

Des tarifs particuliers existent : **10 € sur place avec justificatif** pour les demandeurs d'emploi et les étudiants, selon la FAQ. Les titulaires d'une **CMI ou d'une carte d'invalidité** bénéficient d'une entrée gratuite à retirer sur place sous conditions ; l'accompagnant paie le tarif normal. Un accès prioritaire éventuel ne signifie pas, à lui seul, une gratuité.

## Quelles soirées sont ouvertes entre novembre et janvier ?

L'événement se tient du 14 novembre au 24 janvier, **mais pas tous les soirs**. L'organisateur publie ces fermetures exceptionnelles pour l'édition parisienne :

- **Novembre 2026 :** 16, 17, 18, 19, 23, 24, 25 et 30.
- **Décembre 2026 :** 1, 2, 7, 8, 9, 14, 15 et 16.
- **Janvier 2027 :** 4, 5, 6, 7, 11, 12, 13, 14, 18, 19, 20 et 21.

Pour une première visite avec de jeunes enfants, **le samedi 14 ou le dimanche 15 novembre** constituent des dates d'ouverture annoncées, avec une entrée dès 17 h 30 ; vérifiez toutefois le calendrier de vente et les places avant de vous organiser. Pendant les vacances de Noël, ne supposez pas que tous les jours sont ouverts : les fermetures de décembre restent à respecter.

L'ouverture est annoncée de **17 h 30 à 22 h**, avec **dernière entrée à 21 h 30**. L'organisateur estime l'expérience complète à **environ 1 h 30**. Une arrivée proche de l'ouverture est plus raisonnable pour des enfants qui se couchent tôt qu'une entrée en fin de soirée.

## Fontaines, aurores et ombres chinoises : que voit-on ?

Le billet inclut le parcours lumineux, les **aurores boréales artificielles** visibles en continu, les **fontaines lumineuses** et le spectacle d'ombres chinoises des **Black Fingers**. Il ne s'agit pas d'une observation d'aurores naturelles.

Les représentations d'ombres sont annoncées à **18 h 40, 19 h 35 et 20 h 30**. Pour voir la première sans finir trop tard, entrez suffisamment tôt et gardez une marge pour marcher jusqu'à l'espace du spectacle. Si l'enfant préfère avancer à son rythme, les installations lumineuses permettent de profiter de la sortie sans chercher à assister aux trois séances.

La durée d'1 h 30 reste indicative : avec une poussette, des pauses ou une foule importante, prévoyez un peu plus de souplesse. Un manteau chaud et des chaussures adaptées à une promenade extérieure sont utiles en novembre, décembre et janvier.

## Poussette, toilettes, repas : les détails utiles

L'organisateur annonce un **parcours accessible aux poussettes et fauteuils roulants**. La Ville de Paris précise néanmoins que certaines zones du Parc Floral peuvent être plus difficiles d'accès : si vous avez besoin d'un cheminement sans obstacle, renseignez-vous sur l'itinéraire exact de l'événement avant de partir.

Des **toilettes publiques** sont annoncées accessibles aux visiteurs. Un stand de **petite restauration** est prévu, avec notamment hot-dogs, frites et churros ; son offre et ses prix peuvent évoluer. La **sortie est définitive** : mieux vaut prévoir les besoins des enfants avant d'entrer, car un aller-retour à l'extérieur n'est pas prévu avec le même billet.

Les billets peuvent être présentés sur **téléphone avec un QR code**. La page de l'organisateur n'est pas entièrement cohérente sur l'heure d'ouverture de la caisse sur place (17 h 30 dans la FAQ, 18 h dans le bloc pratique) : pour éviter cette incertitude, la réservation préalable est préférable si vous payez votre entrée.

## Comment rejoindre le Parc Floral sans se tromper d'entrée ?

L'entrée de l'Odyssée Lumineuse se fait par la **porte principale, côté Château de Vincennes**, au Parc Floral (route de la Pyramide, Paris 12e). Le **métro 1, station Château de Vincennes**, se trouve à environ **15 minutes à pied** selon l'organisateur ; les bus **46 et 112**, arrêt Parc Floral, sont également indiqués. La Ville de Paris mentionne aussi le **RER A, gare de Vincennes**.

Pour choisir les titres de métro ou de bus adaptés à votre famille, consultez notre guide [Transports à Paris avec des enfants : quel titre choisir pour payer juste ?](/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/).

Attention à une confusion fréquente : **la promenade diurne au Parc Floral est gratuite d'octobre à mars**, selon la Ville de Paris, mais **cela ne donne pas accès à l'Odyssée Lumineuse**, événement nocturne distinct avec son propre billet. Les horaires habituels du jardin, qui ferme à 17 h en hiver, ne sont pas ceux de l'événement.

Si vous passez aussi une journée dans le secteur, la page [Vincennes en famille](/destinations/ile-de-france/val-de-marne/vincennes/) permet de préparer une autre visite sans confondre le château et le parcours lumineux.

## Prolonger la sortie par une nuit près de Vincennes

Pour les familles venues de loin qui souhaitent éviter un long retour après la visite, l'[Appartement face au bois de Vincennes sur Abritel](https://www.abritel.fr/location-vacances/p2347593) annonce **deux chambres et quatre couchages**, avec le Parc Floral à **environ 11 minutes à pied** selon la fiche d'hébergement. Vérifiez la configuration des lits, le trajet jusqu'à l'entrée nocturne, le prix total et la disponibilité à vos dates : aucune nuit ni aucun tarif n'est garanti à l'avance.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | Créations & savoir-faire 2026 à Paris en famille: billets, ateliers et dates | evenements | Paris, Paris, Île-de-France
- /articles/bons-plans/la-roche-jagu-en-famille-a-l-automne-hiver-2026-parc-gratuit-tarifs-et-jours-d-ouverture/ | La Roche-Jagu en famille à l'automne-hiver 2026: parc gratuit, tarifs et jours d'ouverture | bons-plans | Ploëzal, Côtes-d'Armor, Bretagne
- /articles/activites/parc-zoo-du-reynou-avec-des-enfants-billet-date-poussette-ou-journee-complete/ | Parc Zoo du Reynou avec des enfants: billet daté, poussette ou journée complète? | activites | Le Vigen, Haute-Vienne, Nouvelle-Aquitaine
- /articles/voyages/disneyland-paris-en-famille-en-2026-combien-de-jours-quel-hotel-et-quel-budget-prevoir/ | Disneyland Paris en famille en 2026: combien de jours, quel hôtel et quel budget prévoir | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/bons-plans/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/ | Château de Champs-sur-Marne en famille: gratuités, tarifs et dates à éviter | bons-plans | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | Halloween 2026 au Parc Spirou: billets, nocturnes Naruto et maison hantée | evenements | Monteux, Vaucluse, Provence-Alpes-Côte d'Azur
- /articles/evenements/festival-ete-continue-carquefou-2026-famille/ | Festival L’Été Continue 2026 à Carquefou: six jours gratuits en famille | evenements | Carquefou, Loire-Atlantique, Pays de la Loire
- /articles/bons-plans/allocation-rentree-scolaire-2026-montants-demarches/ | Allocation de rentrée scolaire 2026: montants, dates et démarches | bons-plans
- /articles/bons-plans/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/ | Navigo Liberté+ en famille: tarifs enfants et choix du passe en 2026 | bons-plans | Paris, Paris, Île-de-France
- /articles/sorties/l-aquarium-tropical-de-la-porte-doree-en-famille/ | L’Aquarium tropical de la Porte Dorée en famille | sorties | Paris, Paris, Île-de-France
- /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | Salon du Cheval de Paris 2026 en famille: animations, jumping et billets | evenements | Paris, Paris, Île-de-France
- /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | Métamorphoses 2026 au quai Branly: séances gratuites et films par âge | evenements | Paris, Paris, Île-de-France
- /articles/maison/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager/ | À Paris, où donner ou déposer meubles, jouets et électroménager ? | maison | Paris, Paris, Île-de-France
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | Día de los Muertos 2026 au Jardin d’Acclimatation: programme, billets et tailles | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-au-musee-carnavalet-quelle-activite-choisir-selon-l-age/ | Vacances de la Toussaint 2026 au musée Carnavalet: activités en famille dès 4 ans | sorties | Paris, Paris, Île-de-France
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | Vacances de la Toussaint 2026 à la Cité des sciences: les ateliers numériques gratuits avec des enfants | sorties | Paris, Paris, Île-de-France
- /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | Festival Playground 2026: spectacles de danse en famille, dates et tarifs | evenements | Bagnolet, Seine-Saint-Denis, Île-de-France
- /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | Festival Enfantillages 2026 à Valbonne: spectacles gratuits et cinéma en famille | evenements | Valbonne, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | Festival MARMOE 2026 à Montreuil: spectacles, ateliers et tarifs en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/halloween-2026-au-zoo-de-la-fleche-entree-offerte-aux-enfants-deguises/ | Halloween 2026 au Zoo de La Flèche: tarifs, jeux et entrée offerte aux enfants déguisés | evenements | La Flèche, Sarthe, Pays de la Loire

### Historique Radar lié

- opportunity | /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | 2026-10-23T06:21:12.326Z
- opportunity | /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | 2026-10-08T14:56:52.034Z
- opportunity | /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | 2026-10-26T03:35:31.605Z
- opportunity | /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | 2026-10-25T23:35:17.860Z
- opportunity | /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | 2026-10-26T06:30:10.217Z
- opportunity | /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | 2026-10-12T17:34:53.933Z
- opportunity | /articles/evenements/halloween-2026-au-zoo-de-la-fleche-entree-offerte-aux-enfants-deguises/ | 2026-10-25T20:27:07.814Z
- opportunity | /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | 2026-10-18T04:19:39.869Z
- opportunity | /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | 2026-10-06T19:20:39.093Z
- opportunity | /articles/bons-plans/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/ | 2026-10-25T10:33:30.080Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
