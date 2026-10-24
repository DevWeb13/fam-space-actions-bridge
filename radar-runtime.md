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
title: "Noël Gaulois 2026 au Parc Astérix : quel billet choisir en famille ?"
subtitle: "Du 19 décembre au 3 janvier : prix réels, glissades, spectacles et conseils pour une journée d'hiver"
summary: "Billet Malin à 49 €, Noël à 57 € ou Liberté Flex : comparez les conditions et préparez une journée au Parc Astérix avec des enfants, sans manquer les animations hivernales."
category: evenements
location:
  city: Plailly
  department: Oise
  region: Hauts-de-France
keywords:
  - Noël Gaulois 2026 Parc Astérix
  - billet Noël Parc Astérix 2026
  - billet Malin Liberté Flex Parc Astérix
  - Parc Astérix Noël avec enfants
sources:
  - title: Parc Astérix — Noël Gaulois 2026, programme et billets
    url: https://www.parcasterix.fr/evenements/noel-gaulois
  - title: Parc Astérix — Horaires de Noël Gaulois 2026
    url: https://www.parcasterix.fr/faq?question=quels-sont-les-horaires-d-ouverture-du-parc-a-noel-gaulois
  - title: Parc Astérix — Tarifs au guichet et parking 2026
    url: https://www.parcasterix.fr/tarifs-au-guichet
  - title: Parc Astérix — La Glissade d'Obélix
    url: https://www.parcasterix.fr/attractions/famille/glissade-dobelix
  - title: Parc Astérix — Patinoire Viking
    url: https://www.parcasterix.fr/attractions/famille/patinoire-viking
  - title: Parc Astérix — Quel Cirque !
    url: https://www.parcasterix.fr/spectacles/quel-cirque
  - title: Parc Astérix — Chantons Noël
    url: https://www.parcasterix.fr/spectacles/chantons-noel
  - title: Oise Tourisme — Noël Gaulois 2026
    url: https://www.oisetourisme.com/agenda/noel-gaulois-au-parc-asterix/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille
  decision: Choisir le billet adapté à une date fixe ou flexible et préparer une vraie journée de Noël au parc selon l'âge et la taille des enfants, sans confondre cette expérience payante avec un marché de Noël gratuit.
  affiliationPotential: "Billet d'entrée générique repéré sur Tiqets, mais éligibilité au Noël Gaulois 2026 non confirmée : ne pas le proposer sans vérification. Chambre familiale repérée au B&B HOTEL Saint-Witz Roissy sur Booking.com pour les familles dormant près du parc ; disponibilité et prix en décembre non vérifiés."
  gsc:
    retrievedAt: 2026-10-24T02:34:28+02:00
    dataThrough: 2026-10-21
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Parc Astérix — Noël Gaulois 2026, programme et billets »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-03T20:00:00+01:00
---

Du **19 décembre 2026 au 3 janvier 2027**, le Parc Astérix, à Plailly dans l'Oise, se transforme pour Noël Gaulois. On y vient pour les attractions, mais aussi pour patiner, glisser, rencontrer les personnages et voir des spectacles de Noël. Ce n'est pas un marché de Noël en accès libre : **l'entrée au parc est payante**, même si les animations de Noël annoncées sont comprises dans le billet.

Le vrai choix avant de partir porte sur la date : certaine, encore à décider ou susceptible de changer. C'est ce qui détermine le billet le plus intéressant.

## Billet Malin, Noël ou Liberté Flex : lequel prendre ?

**Le Billet Malin à 49 €** est le moins cher des trois, au même prix pour un adulte et un enfant de 3 ans ou plus. Il impose de choisir une date parmi un nombre limité de jours et de places. Il est non remboursable, non échangeable et proposé jusqu'à la veille de la visite. C'est le premier tarif à vérifier si votre journée est fixée ; **ne présumez pas qu'il sera disponible à 49 € pour votre date de Noël**.

**Le Billet Noël 2026 à 57 €** est non daté : vous choisissez votre jour de venue entre le 19 décembre et le 3 janvier. Le tarif est identique pour adultes et enfants de 3 ans ou plus. Il n'est ni remboursable ni échangeable. Il convient à une famille qui sait qu'elle viendra pendant les vacances, mais veut décider du jour en fonction de la météo ou de son organisation. Attention : non daté ne veut pas dire utilisable hors de cette période.

**Le Billet Liberté Flex** coûte **68 € à partir de 12 ans** et **59 € de 3 à 11 ans**. Vous choisissez une date lors de l'achat, mais pouvez la modifier jusqu'à **une heure avant l'ouverture** du parc, sous réserve de places disponibles à la nouvelle date. Si la date est dépassée sans utilisation, le billet est perdu. C'est la formule à envisager si un changement de programme est plausible ; elle n'offre pas une annulation gratuite.

L'entrée est **gratuite avant 3 ans** pour les trois formules. Les tarifs affichés peuvent évoluer : comparez toujours les conditions et les dates réellement proposées au moment de payer. La page officielle comporte une date limite d'achat manifestement incohérente pour le billet Noël ; mieux vaut se fier au calendrier de réservation effectif plutôt qu'à cette mention.

Pour **deux adultes et deux enfants de 3 à 11 ans**, les entrées représentent **196 € en Malin**, **228 € en Noël** ou **254 € en Flex**, si les billets correspondants sont disponibles. En voiture, ajoutez le **parking affiché à 25 € par jour** dans les tarifs 2026 du parc, puis les repas et achats éventuels. Les jeux d'adresse ne sont pas compris dans l'entrée.

## Que privilégier avec des enfants ?

La **Patinoire Viking** est annoncée pour toute la famille. Le prêt des patins est gratuit et le parc conseille de porter des gants. La **Glissade d'Obélix** propose une descente en bouée : le parc indique **1,20 m minimum pour y accéder seul**. Pour un enfant plus petit, vérifiez les conditions d'accompagnement affichées sur place avant de lui promettre cette activité.

Les **Jardins merveilleux du Père Noël** offrent une promenade dans des décors lumineux, du bois enchanté au village du Père Noël, dans l'environnement de Romus et Rapidus. Avec de jeunes enfants ou des enfants qui ne souhaitent pas faire de grandes attractions, les jardins, les rencontres avec les personnages et le défilé gaulois de Noël peuvent constituer le fil conducteur de la visite.

Trois spectacles permettent aussi de construire la journée sans courir d'une attraction à l'autre :

- **Quel Cirque !**, 20 minutes d'acrobaties, se regarde **assis et à l'intérieur**.
- **Chantons Noël**, 30 minutes de chants, se déroule **à l'intérieur, debout**.
- **Qui veut la peau du Père Noël ?**, 25 minutes, est un **spectacle sur glace en extérieur, avec places assises**.

Le marché de Noël fait partie des animations proposées *dans* le parc ; il ne remplace pas un marché municipal gratuit. Les horaires précis des séances et du défilé sont à consulter pour le jour choisi. Par temps froid, privilégiez un spectacle intérieur comme pause, sans supposer que toutes les attractions habituelles seront ouvertes : certaines peuvent être fermées ou adaptées aux conditions météorologiques.

## Une journée réaliste, sans manquer les illuminations

Le parc annonce une ouverture de **11 h à 20 h** pendant Noël Gaulois, sauf les **24 et 31 décembre (11 h à 19 h)**. Une arrivée proche de l'ouverture laisse le temps de faire quelques attractions choisies le matin, de déjeuner sans précipitation, puis de réserver l'après-midi aux activités hivernales et à un ou deux spectacles. Gardez la fin de journée pour les décors illuminés et les animations dont les horaires le permettent.

Avant de partir, mesurez les enfants si certaines attractions sont essentielles pour eux et prévoyez vêtements chauds, gants et chaussures adaptées à une journée mêlant extérieur et intérieur. Les restrictions de taille varient selon les attractions ; un billet d'entrée ne garantit pas l'accès à chacune. Vérifiez aussi les conditions d'accessibilité des activités souhaitées, notamment celles qui demandent de quitter un fauteuil roulant.

Pour le trajet, la navette, les attractions par taille et le choix entre une ou deux journées, le guide [Parc Astérix en famille : hôtel, durée et budget](/articles/voyages/parc-asterix-en-famille-en-2026-une-ou-deux-journees-quel-hotel-et-quel-budget-prevoir/) détaille les points utiles sans confondre la visite classique avec le programme de Noël.

## Dormir près du parc pour éviter le retour tardif

Si le trajet est long ou si vous souhaitez prolonger la sortie, le **[B&B HOTEL Saint-Witz Roissy sur Booking.com](https://www.booking.com/hotel/fr/hotel-saint-witz.html)** propose notamment des chambres familiales. Vérifiez la capacité exacte pour votre groupe, les dates de décembre ou janvier, le petit déjeuner et les conditions d'annulation : **aucun prix ni aucune disponibilité pour Noël 2026 n'est garanti ici**. Une chambre réservée séparément n'inclut pas les entrées au parc ; comparez le coût total avant de choisir.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/voyages/parc-asterix-en-famille-en-2026-une-ou-deux-journees-quel-hotel-et-quel-budget-prevoir/ | Parc Astérix en famille en 2026: une ou deux journées, quel hôtel et quel budget prévoir | voyages | Plailly, Oise, Hauts-de-France
- /articles/voyages/peur-sur-le-parc-2026-en-famille-journee-nocturne-billets-et-hebergement/ | Peur sur le Parc 2026 en famille: journée, nocturne, billets et hébergement | voyages | Plailly, Oise, Hauts-de-France
- /articles/evenements/marche-de-noel-de-cusset-2026-en-famille-quel-jour-choisir/ | Marché de Noël de Cusset 2026 en famille: quel jour choisir? | evenements | Cusset, Allier, Auvergne-Rhône-Alpes
- /articles/voyages/lascaux-en-famille-quel-billet-choisir-et-quel-budget-prevoir-en-2026/ | Lascaux en famille: quel billet choisir et quel budget prévoir en 2026 | voyages | Montignac-Lascaux, Dordogne, Nouvelle-Aquitaine
- /articles/activites/le-pal-ou-touroparc-en-famille-quel-parc-choisir-en-2026/ | Le PAL ou Touroparc en famille: quel parc choisir en 2026? | activites
- /articles/parentalite/ateliers-parents-malins-dans-l-oise-quels-rendez-vous-gratuits-choisir-avant-fin-2026/ | Ateliers Parents Malins dans l'Oise: quels rendez-vous gratuits choisir avant fin 2026 ? | parentalite | Plusieurs communes, Oise, Hauts-de-France
- /articles/activites/sherwood-parc-avec-des-enfants-quel-billet-choisir-avant-de-reserver/ | Sherwood Parc avec des enfants: quel billet choisir avant de réserver? | activites | Viarmes, Val-d'Oise, Île-de-France
- /articles/evenements/contes-et-histoires-2026-comment-choisir-un-monument-a-visiter-avec-les-enfants/ | Contes et Histoires 2026: comment choisir un monument à visiter avec les enfants | evenements
- /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | Halloween 2026 à la Mer de Sable: spectacles, frissons et billets en famille | evenements | Ermenonville, Oise, Hauts-de-France
- /articles/sorties/chateau-de-compiegne-en-famille-que-visiter-et-comment-organiser-la-journee/ | Château de Compiègne en famille: que visiter et comment organiser la journée? | sorties | Compiègne, Oise, Hauts-de-France
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/bons-plans/pass-sports-citoyen-dans-l-oise-15-a-cumuler-avec-le-pass-sport-en-2026/ | Pass Sports Citoyen dans l'Oise: 15 € à cumuler avec le pass Sport en 2026 | bons-plans | Beauvais, Oise, Hauts-de-France
- /articles/cuisine/atelier-de-creme-chantilly-avec-des-enfants-a-partir-de-quel-age-et-comment-reserver/ | Atelier de crème Chantilly avec des enfants: à partir de quel âge et comment réserver | cuisine | Chantilly, Oise, Hauts-de-France
- /articles/maison/meubles-et-encombrants-a-compiegne-recyclerie-dechetterie-ou-collecte-a-domicile/ | Meubles et encombrants à Compiègne: recyclerie, déchetterie ou collecte à domicile? | maison | Compiègne, Oise, Hauts-de-France
- /articles/vie-pratique/location-de-voiture-a-beauvais-avec-des-enfants-les-verifications-utiles-avant-de-reserver/ | Location de voiture à Beauvais avec des enfants: les vérifications utiles avant de réserver | vie-pratique | Beauvais, Oise, Hauts-de-France
- /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | Noël au château d'Amboise 2026: visite, nocturnes et tarifs en famille | evenements | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | Noël à Provins 2026: marché médiéval, animations et visites en famille | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/evenements/chante-nwel-a-ducos-le-28-novembre-2026-une-soiree-de-noel-creole-en-famille/ | Chanté Nwel à Ducos le 28 novembre 2026: une soirée de Noël créole en famille | evenements | Ducos, Martinique, Martinique
- /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | Noël au château de Cheverny 2026: billets, mapping et visite en famille | evenements | Cheverny, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | Foire aux santons de Marseille 2026: dates, inauguration et visite en famille | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | Bédéciné 2026 à Illzach en famille: ateliers, spectacles et billets | evenements | Illzach, Haut-Rhin, Grand Est

### Historique Radar lié

- opportunity | /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | 2026-10-23T12:33:36.649Z
- opportunity | /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | 2026-10-23T15:29:55.218Z
- opportunity | /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | 2026-10-18T12:12:00.071Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | 2026-10-23T19:58:30.214Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | 2026-10-24T06:28:53.730Z
- opportunity | /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | 2026-10-24T03:31:56.628Z
- opportunity | /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | 2026-10-11T19:35:57.703Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
