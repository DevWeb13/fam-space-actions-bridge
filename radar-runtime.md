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
title: "Noël 2026 au château de Chantilly : quels billets pour Le Noël oublié en famille ?"
subtitle: Spectacle équestre, visite du domaine, séances et budget selon l'âge des enfants
summary: Du 28 novembre 2026 au 3 janvier 2027, Le Noël oublié se joue aux Grandes Écuries de Chantilly. Voici comment choisir entre spectacle seul et billet combiné, repérer les séances et préparer une visite avec enfants.
category: evenements
location:
  city: Chantilly
  department: Oise
  region: Hauts-de-France
keywords:
  - Noël château de Chantilly 2026
  - Le Noël oublié spectacle équestre
  - billet spectacle Noël Chantilly famille
  - Grandes Écuries Chantilly Noël horaires
sources:
  - title: Château de Chantilly — Le Noël oublié, dates, séances et tarifs 2026-2027
    url: https://chateaudechantilly.fr/evenement/spectacle-de-noel-le-noel-oublie/
  - title: Château de Chantilly — Noël au château, formules et animations
    url: https://chateaudechantilly.fr/noel-au-chateau/
  - title: Château de Chantilly — billets et tarifs, gratuité des moins de 3 ans
    url: https://chateaudechantilly.fr/billets-et-tarifs/
  - title: Château de Chantilly — accès, train, bus et stationnement
    url: https://chateaudechantilly.fr/acces/
  - title: Château de Chantilly — foire aux questions, familles et spectacles
    url: https://chateaudechantilly.fr/foire-aux-questions/
  - title: Château de Chantilly — visiteurs en situation de handicap
    url: https://chateaudechantilly.fr/visiteurs-en-situation-de-handicap/
  - title: Château de Chantilly — conditions générales de vente
    url: https://chateaudechantilly.fr/conditions-generales-de-vente/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine
  decision: Choisir entre le spectacle équestre seul et le billet combiné avec le château, calculer le budget réel selon l'âge des enfants et réserver une séance compatible avec le programme familial.
  affiliationPotential: "Aucune billetterie partenaire confirmée pour le spectacle Le Noël oublié : les billets Château de Chantilly sur Tiqets couvrent la visite ordinaire, pas ce spectacle, et ne doivent pas être présentés comme équivalents. Hébergement vérifié pour une famille prolongeant la sortie : Best Western Plus Hotel Du Parc Chantilly sur Booking.com, chambres familiales, https://www.booking.com/hotel/fr/du-parc-chantilly.fr.html ; prix et disponibilités aux dates du spectacle non vérifiés."
  gsc:
    retrievedAt: 2026-10-26T01:34:33+01:00
    dataThrough: 2026-10-23
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Château de Chantilly — Noël au château 2026, formules et tarifs »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-03
---

Du **28 novembre 2026 au 3 janvier 2027**, le château de Chantilly accueille **Le Noël oublié**, un spectacle équestre d'une heure joué sous le dôme des Grandes Écuries. Chevaux, costumes et effets visuels accompagnent l'histoire de Vérité, un enfant parti retrouver la mémoire de Noël sur une île frappée par un enchantement.

Pour une famille, la décision principale se prend avant le départ : assister au spectacle et visiter les Grandes Écuries, ou consacrer aussi du temps au château et au parc. Ces deux programmes ne donnent pas accès aux mêmes espaces et n'ont pas le même prix.

## Spectacle seul ou château et spectacle : quelle formule choisir ?

Le **billet Spectacle de Noël** coûte **24 € pour un adulte de plus de 25 ans** et **19 € au tarif réduit de 3 à 25 ans**. Il comprend la représentation, les Grandes Écuries et le musée vivant du Cheval. C'est le choix le plus simple si les enfants viennent surtout pour les chevaux ou si vous disposez de quelques heures.

Le **billet 1 Jour + Spectacle de Noël** coûte **32 € par adulte** et **26 € de 3 à 25 ans**. Il ajoute la visite du château et du parc. Il convient mieux aux familles qui arrivent suffisamment tôt pour profiter du domaine avant la séance, sans devoir courir entre les bâtiments.

Pour **deux adultes de plus de 25 ans et deux enfants de 3 à 25 ans**, comptez **86 € pour le spectacle seul**, contre **116 € pour la formule combinée**, soit **30 € de différence** pour les quatre personnes, hors éventuels frais de réservation et dépenses sur place. Les moins de 3 ans peuvent assister gratuitement au spectacle **sur les genoux d'un adulte**, sans siège individuel ; si vous avez besoin d'une place distincte, vérifiez les modalités auprès du château.

Attention au **billet Famille classique à 55 €** pour deux adultes et deux ou trois enfants de 7 à 17 ans : il permet de visiter le domaine, **mais n'inclut pas Le Noël oublié**. Une entrée ordinaire ou une animation équestre habituelle ne remplace pas le billet du spectacle spécial. Les tarifs et les espaces inclus sont détaillés dans les [informations de Noël du château](https://chateaudechantilly.fr/noel-au-chateau/).

## Quelles dates et quelle séance avec des enfants ?

Le spectacle est annoncé **à 14 h 30 sur les dates programmées** et **à 16 h 30 certains jours seulement**. Il n'a donc pas lieu tous les jours de la période, et toutes les journées n'offrent pas deux représentations.

Les séances de **16 h 30** sont annoncées les **28 et 29 novembre**, les **5, 6, 12, 13, 19, 20, 21, 22, 23, 26, 27, 28, 29 et 30 décembre**, puis le **2 janvier**. Le **3 janvier**, seule la séance de 14 h 30 figure au programme publié. Pour les autres dates, vérifiez la séance de 14 h 30 dans le [calendrier officiel du spectacle](https://chateaudechantilly.fr/evenement/spectacle-de-noel-le-noel-oublie/) avant de réserver.

Avec de jeunes enfants, **14 h 30** laisse une marge confortable pour rentrer avant la soirée. **16 h 30** permet davantage de visites dans la journée, mais la représentation se termine vers 17 h 30, avant le trajet du retour. Le château conseille de se présenter **30 minutes à l'avance** ; ses conditions de vente indiquent que les portes ferment au lever du rideau et qu'un retard ne donne pas droit à un échange ou à un remboursement.

La décoration de Noël du domaine commence **dès le 15 novembre**, mais cette date n'est pas celle du début du spectacle. Autre différence : le **coin gourmand saisonnier dans le parc** est annoncé **du 20 décembre au 4 janvier, de 10 h à 18 h**. Il ne faut donc pas compter dessus pour une séance fin novembre ou début décembre.

## Poussette, accessibilité et confort pendant la représentation

Les **poussettes sont admises dans les Grandes Écuries**, selon la FAQ du domaine, mais **aucune poussette n'est prêtée**. Cette règle ne garantit pas qu'une poussette puisse rester auprès des sièges sous le dôme : demandez où la déposer avant la séance. Un porte-bébé souple sans armature est également autorisé dans le château et les écuries.

Les spectacles se déroulent en configuration assise. Pour éviter de gêner les chevaux, **photos et vidéos sont interdites pendant la représentation**, même sans flash. Prévoyez une heure assise, avec des effets visuels et une ambiance théâtrale : si votre enfant supporte mal le bruit ou l'obscurité, renseignez-vous sur la mise en scène avant de choisir la séance.

Le dôme dispose de **12 places réservées aux personnes en situation de handicap**. Le château recommande de les réserver au **03 44 27 31 51** ou à **publics@chateaudechantilly.fr**. Pour les billets comprenant un spectacle, **la personne concernée et un accompagnant bénéficient chacun d'un tarif réduit**, sur justificatif ; la gratuité applicable à la visite ordinaire ne s'étend pas automatiquement au spectacle. Les pavés des Grandes Écuries et les chemins irréguliers du parc peuvent compliquer la circulation en fauteuil. Consultez les [informations d'accessibilité du domaine](https://chateaudechantilly.fr/visiteurs-en-situation-de-handicap/) pour préparer le parcours.

Avec un bébé, des **matelas à langer** sont disponibles dans les toilettes du château et des Grandes Écuries. Pour réchauffer un biberon ou un petit pot, le domaine invite à s'adresser à ses restaurants. Si vous choisissez le billet combiné, prévoyez une pause repas plutôt que d'enchaîner la visite du parc et le spectacle sans interruption.

## Venir à Chantilly et organiser le retour

Depuis **Paris-Gare du Nord**, le **TER rejoint Chantilly-Gouvieux en environ 25 minutes** ; le **RER D** prend environ **45 minutes**. **Le passe Navigo ne couvre pas le trajet jusqu'à Chantilly** : vérifiez le titre nécessaire et surtout l'horaire du train retour, particulièrement après la séance de 16 h 30.

Depuis la gare, comptez **environ 20 minutes à pied** jusqu'au domaine. Des bus et navettes gratuits sont annoncés, notamment la desserte urbaine DUC, le bus 645 et une navette touristique les week-ends et jours fériés ; leurs horaires doivent être vérifiés pour la date choisie. En voiture, le **parking P1 est payant, annoncé à 5 € pour une voiture**. Le [guide d'accès du château](https://chateaudechantilly.fr/acces/) détaille les options de transport.

Si vous prolongez la sortie, la page [Chantilly en famille](https://www.fam-space.fr/destinations/hauts-de-france/oise/chantilly/) permet de repérer d'autres idées dans la ville. Avec des enfants d'environ 8 ans ou plus qui aiment cuisiner, un [atelier de crème Chantilly](https://www.fam-space.fr/articles/cuisine/atelier-de-creme-chantilly-avec-des-enfants-a-partir-de-quel-age-et-comment-reserver/) peut constituer une activité distincte, sur réservation, sans rapport avec le spectacle des Grandes Écuries.

Pour les familles qui préfèrent dormir à Chantilly après leur visite, le **[Best Western Plus Hotel Du Parc Chantilly sur Booking.com](https://www.booking.com/hotel/fr/du-parc-chantilly.fr.html)** propose notamment des configurations de chambres pouvant accueillir jusqu'à quatre personnes. Indiquez les âges des enfants et les dates exactes pour vérifier la capacité, les conditions et le prix réel ; aucune disponibilité pour les jours du spectacle n'est garantie.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/cuisine/atelier-de-creme-chantilly-avec-des-enfants-a-partir-de-quel-age-et-comment-reserver/ | Atelier de crème Chantilly avec des enfants: à partir de quel âge et comment réserver | cuisine | Chantilly, Oise, Hauts-de-France
- /articles/sorties/chateau-de-compiegne-en-famille-que-visiter-et-comment-organiser-la-journee/ | Château de Compiègne en famille: que visiter et comment organiser la journée? | sorties | Compiègne, Oise, Hauts-de-France
- /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | Noël à Chenonceau 2026: décors, nocturnes et tarifs en famille | evenements | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/ | Noël à Trévarez 2026 en famille: dates, horaires et réservation | evenements | Saint-Goazec, Finistère, Bretagne
- /articles/activites/chateau-de-bouges-en-famille-jardins-livret-jeu-et-ecuries/ | Château de Bouges en famille: jardins, livret-jeu et écuries | activites | Bouges-le-Château, Indre, Centre-Val de Loire
- /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | Noël au château de Cheverny 2026: billets, mapping et visite en famille | evenements | Cheverny, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | Halloween 2026 à la Mer de Sable: spectacles, frissons et billets en famille | evenements | Ermenonville, Oise, Hauts-de-France
- /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | Rétro Game Festival 2026 à Beauvais: programme, billets famille et animations enfants | evenements | Beauvais, Oise, Hauts-de-France
- /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | Noël Gaulois 2026 au Parc Astérix: billets, glissades et spectacles en famille | evenements | Plailly, Oise, Hauts-de-France
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/bons-plans/pass-sports-citoyen-dans-l-oise-15-a-cumuler-avec-le-pass-sport-en-2026/ | Pass Sports Citoyen dans l'Oise: 15 € à cumuler avec le pass Sport en 2026 | bons-plans | Beauvais, Oise, Hauts-de-France
- /articles/parentalite/ateliers-parents-malins-dans-l-oise-quels-rendez-vous-gratuits-choisir-avant-fin-2026/ | Ateliers Parents Malins dans l'Oise: quels rendez-vous gratuits choisir avant fin 2026 ? | parentalite | Plusieurs communes, Oise, Hauts-de-France
- /articles/maison/meubles-et-encombrants-a-compiegne-recyclerie-dechetterie-ou-collecte-a-domicile/ | Meubles et encombrants à Compiègne: recyclerie, déchetterie ou collecte à domicile? | maison | Compiègne, Oise, Hauts-de-France
- /articles/vie-pratique/location-de-voiture-a-beauvais-avec-des-enfants-les-verifications-utiles-avant-de-reserver/ | Location de voiture à Beauvais avec des enfants: les vérifications utiles avant de réserver | vie-pratique | Beauvais, Oise, Hauts-de-France
- /articles/voyages/peur-sur-le-parc-2026-en-famille-journee-nocturne-billets-et-hebergement/ | Peur sur le Parc 2026 en famille: journée, nocturne, billets et hébergement | voyages | Plailly, Oise, Hauts-de-France
- /articles/voyages/parc-asterix-en-famille-en-2026-une-ou-deux-journees-quel-hotel-et-quel-budget-prevoir/ | Parc Astérix en famille en 2026: une ou deux journées, quel hôtel et quel budget prévoir | voyages | Plailly, Oise, Hauts-de-France
- /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | Odyssée Lumineuse 2026-2027 à Paris: billets, dates et visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | Festival Playground 2026: spectacles de danse en famille, dates et tarifs | evenements | Bagnolet, Seine-Saint-Denis, Île-de-France
- /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | Festival Enfantillages 2026 à Valbonne: spectacles gratuits et cinéma en famille | evenements | Valbonne, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | Festival MARMOE 2026 à Montreuil: spectacles, ateliers et tarifs en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/halloween-2026-au-zoo-de-la-fleche-entree-offerte-aux-enfants-deguises/ | Halloween 2026 au Zoo de La Flèche: tarifs, jeux et entrée offerte aux enfants déguisés | evenements | La Flèche, Sarthe, Pays de la Loire

### Historique Radar lié

- opportunity | /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | 2026-10-26T03:35:31.605Z
- opportunity | /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | 2026-10-25T23:35:17.860Z
- opportunity | /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | 2026-10-26T06:30:10.217Z
- opportunity | /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | 2026-10-18T12:12:00.071Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- opportunity | /articles/evenements/halloween-2026-au-zoo-de-la-fleche-entree-offerte-aux-enfants-deguises/ | 2026-10-25T20:27:07.814Z
- opportunity | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-10-24T12:31:27.784Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | 2026-10-23T19:58:30.214Z
- opportunity | /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | 2026-10-24T09:33:57.174Z
- opportunity | /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | 2026-10-26T15:30:14.299Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
