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
title: "Bédéciné 2026 à Illzach en famille : ateliers, spectacles et billets"
subtitle: Les 14 et 15 novembre, des activités dès 1 an et des spectacles dès 2 ans
summary: "Bédéciné 2026 se tient à Illzach les 14 et 15 novembre : ateliers par âge, spectacles gratuits sur billet à retirer, pass famille et accès."
category: evenements
location:
  city: Illzach
  department: Haut-Rhin
  region: Grand Est
keywords:
  - Bédéciné 2026 Illzach famille
  - Bédéciné 2026 ateliers enfants
  - Bédéciné Illzach billets pass famille
  - festival BD Illzach spectacles enfants
sources:
  - title: Espace 110 - Programme Bédéciné 2026
    url: https://www.espace110.org/saison-culturelle/bedecine/programme-bedecine
  - title: Espace 110 - Ateliers Bédéciné 2026
    url: https://www.espace110.org/saison-culturelle/bedecine/programme-bedecine/les-ateliers
  - title: Espace 110 - Bédéciné en pratique, tarifs et accès
    url: https://www.espace110.org/saison-culturelle/bedecine/bedecine-en-pratique
  - title: Mulhouse Alsace Agglomération - Festival Bédéciné 2026
    url: https://mag.mulhouse-alsace.fr/evenement/festival-bedecine-2026-a-illzach/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age
  decision: Permettre aux parents de choisir les spectacles et ateliers réellement accessibles à chaque âge, de prévoir les places limitées sans confondre entrée payante et activités gratuites, puis de choisir entre billet journée et pass famille ou deux jours.
  affiliationPotential: "Aucun billet partenaire identifié pour l'entrée au festival sur Tiqets, GetYourGuide ou Klook ; billetterie propre à l'Espace 110. Hébergement secondaire pertinent pour les familles de passage : B&B HOTEL Mulhouse Ile Napoléon à Illzach, référencé sur Booking.com (https://www.booking.com/hotel/fr/b-amp-b-mulhouse-ile-napoleon.fr.html), avec notamment une chambre triple ; vérifier capacité, trajets vers l'Espace 110, prix et disponibilité aux dates du 14-15 novembre."
  gsc:
    retrievedAt: 2026-10-23T08:27:47+02:00
    dataThrough: 2026-10-20
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Espace 110 - Programme Bédéciné 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-11-15T18:00:00+01:00
---

Les **samedi 14 et dimanche 15 novembre 2026**, le festival de bande dessinée **Bédéciné** accueille les familles à l’**Espace 110 d’Illzach**, près de Mulhouse, **de 10 h à 18 h**. Rencontres avec les auteurs, spectacles, projections et ateliers permettent de découvrir la BD autrement qu’en feuilletant des albums. Pour les parents, les deux points à anticiper sont **l’âge requis pour chaque activité** et **les places limitées**, même lorsque l’animation est comprise dans le billet d’entrée.

## Quels ateliers choisir selon l’âge de votre enfant ?

Les ateliers encadrés sont **gratuits une fois entré au festival**, mais leurs places sont limitées. L’organisateur demande de **se présenter devant la salle dix minutes avant le début** ; cela ne garantit pas une place si la jauge est déjà atteinte.

- **De 1 à 4 ans, avec un parent :** *Mon décor paysage en accordéon*, fabrication d’un petit livre plié, **samedi et dimanche à 11 h**, bibliothèque, **1 h**. Les moins de 3 ans entrent gratuitement au festival.
- **De 4 à 8 ans :** *Dessine ton chat !*, atelier libre de découpage et de dessin, **les deux jours de 10 h à 12 h et de 14 h à 18 h**, salle Couture. Les plus jeunes sont accompagnés d’un parent.
- **De 5 à 8 ans :** *Pop’ paysage*, création d’un paysage en relief, **samedi et dimanche à 15 h**, bibliothèque, **1 h**.
- **De 8 à 12 ans :** *Ma BD dans l’espace !*, création d’histoires animées sur papier, **les deux jours à 10 h 30**, salle Rencontre, **1 h 30** ; ou *Pop’ livre animé*, **à 13 h et 17 h**, bibliothèque, **1 h**.
- **De 8 à 12 ans, amateurs de manga :** *Manga Kids !*, **samedi à 16 h 30** et **dimanche à 10 h 45 ou 16 h 30**, salle Annexe, **1 h**.
- **De 12 à 16 ans :** *Manga Teens !*, initiation au dessin manga, **les deux jours à 14 h 30**, salle Annexe, **1 h**.

Une démonstration sur **le métier de coloriste** est également annoncée **samedi et dimanche à 13 h 30**, salle Formation musicale, pour **tout public** : environ **1 h**, suivie d’un échange. Pour un enfant qui veut surtout dessiner sans contrainte de créneau, l’atelier libre *Dessine ton chat !* offre davantage de souplesse qu’un atelier d’une heure à jauge limitée.

## Spectacles et projections : dès 2, 3, 4 ou 5 ans

Les spectacles sont eux aussi **inclus dans le prix d’entrée**, mais un **billet gratuit est à retirer sur place, le jour même, au point « spectacles »**. Le nombre de places est limité : l’entrée au festival ne suffit pas à garantir l’accès à la séance souhaitée.

- **Dès 2 ans :** *L’Amie*, marionnettes et jeux d’ombres, **35 min**, **10 h 20, 11 h 35 ou 12 h 50** les deux jours.
- **Dès 3 ans :** *Le Monde à l’envers*, projection de courts métrages, **45 min**, **13 h ou 15 h 45** les deux jours.
- **Dès 4 ans :** *Okilélé*, théâtre inspiré de Claude Ponti, **40 min**, **11 h 40, 14 h 30 ou 16 h 40** les deux jours.
- **Dès 5 ans :** *Le chant des loups*, théâtre et arts visuels, **40 min**, **14 h 15, 15 h 40 ou 17 h 10** les deux jours.

Les **Hurluberlus**, fanfare déambulatoire, et le manège **Chaudron**, annoncé dès 2 ans, complètent le programme. Les horaires des séances sont identiques le samedi et le dimanche, mais les créneaux de *Manga Kids !* sont plus nombreux le dimanche. Si un spectacle est prioritaire pour votre enfant, commencez par retirer les billets correspondants, puis organisez les ateliers autour de l’horaire obtenu.

## Quel billet est le plus intéressant pour la famille ?

L’[Espace 110](https://www.espace110.org/saison-culturelle/bedecine/bedecine-en-pratique) annonce les tarifs suivants :

- **Adulte : 10 €** pour une journée.
- **Enfant de 3 à 15 ans : 8 €** pour une journée.
- **Moins de 3 ans : gratuit**.
- **Pass deux jours adulte : 16 €**.
- **Pass deux jours enfant de 3 à 15 ans : 12 €**.
- **Pass famille : 28 €** pour **deux adultes et deux enfants de 3 à 15 ans**.

Pour **deux adultes et deux enfants de 6 et 10 ans**, quatre entrées individuelles d’une journée coûtent **36 €** : le **pass famille à 28 €** économise **8 €**. Pour **un adulte et un enfant de 2 ans**, une journée revient à **10 €**, puisque le plus jeune entre gratuitement. Pour **un adulte et un enfant de 8 ans** présents les deux jours, les **pass deux jours coûtent ensemble 28 €**, contre **36 €** avec quatre entrées à la journée.

Pour **deux adultes et deux enfants de 3 à 15 ans** présents les deux jours, les pass individuels deux jours totalisent **56 €**. L’organisateur ne précise pas sur sa page pratique que le pass famille couvre deux jours : **ne le considérez pas comme un pass week-end** sans confirmation.

**Attention à la prévente :** la page pratique affiche à la fois un lien de prévente et la mention **« préventes en ligne closes »**, avec un renvoi vers la caisse du festival. Ces indications contradictoires ne permettent pas de garantir un achat en ligne à ce stade. Vérifiez la situation directement auprès de l’Espace 110 avant de vous déplacer, surtout si vous souhaitez éviter la file d’attente.

## Où se trouve Bédéciné et comment venir ?

Le festival se déroule à l’**Espace 110, 1 avenue des Rives de l’Ill, 68110 Illzach**. En bus **Soléa**, les **lignes 9 et 16** desservent l’arrêt **Illzach Mairie**, et la **ligne 12** l’arrêt **Espace 110**. Un **parking surveillé** est indiqué au complexe sportif **Joseph Biechlin** ; un **parking à vélos surveillé** et une consigne pour casques sont également annoncés.

Sur place, un espace de restauration propose notamment **tartes flambées, spécialités vietnamiennes et libanaises, crêpes et pâtisseries**, ainsi que des boissons. Un espace consacré aux **BD d’occasion** réunit des libraires et collectionneurs : ces achats éventuels s’ajoutent au billet d’entrée, contrairement aux ateliers et spectacles inclus.

Si vous arrivez en train ou prévoyez un week-end dans l’agglomération, notre guide [Mulhouse sans voiture avec des enfants : organiser deux jours](/articles/voyages/mulhouse-sans-voiture-avec-des-enfants-comment-organiser-2-jours/) détaille les déplacements et les possibilités de visite autour de Mulhouse.

## Rester dormir dans le secteur d’Illzach

Pour une famille venue de plus loin, le [B&B HOTEL Mulhouse Ile Napoléon sur Booking.com](https://www.booking.com/hotel/fr/b-amp-b-mulhouse-ile-napoleon.fr.html), situé à **Illzach**, propose notamment des **chambres triples** avec lit double et lit simple. Vérifiez la capacité exacte selon l’âge et le nombre d’enfants, le trajet vers l’Espace 110, le prix total et les conditions d’annulation pour les nuits des **14 et 15 novembre** : les disponibilités ne sont pas garanties.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | Au Creux de l'Oreille 2026 à Noirlac: spectacles et ateliers en famille du 17 au 22 octobre | evenements | Bruère-Allichamps, Cher, Centre-Val de Loire
- /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | Equita Lyon 2026 avec des enfants: billets, Village Enfants et spectacles | evenements | Chassieu, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-au-bonheur-des-momes-2026-en-famille/ | Au Bonheur des Mômes 2026: pass, spectacles et journée au Grand-Bornand | evenements | Le Grand-Bornand, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | Festival du Livre de Colmar 2026 en famille: dates, horaires et animations jeunesse | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | Festival du Film pour Enfants 2026 en Isère: séances, ateliers et tarifs | evenements | Vizille, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | bd BOUM 2026 à Blois en famille: ateliers, expositions et cinéma | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/les-expressifs-2026-a-poitiers-trois-jours-de-spectacles-gratuits/ | Les Expressifs 2026 à Poitiers: trois jours de spectacles gratuits | evenements | Poitiers, Vienne, Nouvelle-Aquitaine
- /articles/vie-pratique/colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir/ | Colmar avec des enfants quand il pleut: quel musée choisir ? | vie-pratique | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | Marché de Noël de Mulhouse 2026 en famille: horaires, étoffe et animations | evenements | Mulhouse, Haut-Rhin, Grand Est
- /articles/activites/noel-2026-a-l-ecomusee-d-alsace-en-famille-quand-venir-et-que-prevoir/ | Noël 2026 à l'Écomusée d'Alsace en famille: quand venir et que prévoir? | activites | Ungersheim, Haut-Rhin, Grand Est
- /articles/evenements/repto-terra-expo-a-colmar-faut-il-y-aller-avec-des-enfants/ | Repto Terra Expo à Colmar: faut-il y aller avec des enfants? | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/voyages/mulhouse-sans-voiture-avec-des-enfants-comment-organiser-2-jours/ | Mulhouse sans voiture avec des enfants: comment organiser 2 jours | voyages | Mulhouse, Haut-Rhin, Grand Est
- /articles/sorties/parc-du-petit-prince-faut-il-prevoir-une-journee-entiere-avec-de-jeunes-enfants/ | Parc du Petit Prince: faut-il prévoir une journée entière avec de jeunes enfants? | sorties | Ungersheim, Haut-Rhin, Grand Est
- /articles/voyages/marches-de-noel-de-colmar-avec-des-enfants-en-2026-1-ou-2-jours-et-ou-dormir/ | Marchés de Noël de Colmar avec des enfants en 2026: 1 ou 2 jours et où dormir | voyages | Colmar, Haut-Rhin, Grand Est
- /articles/bons-plans/mulhouse-trois-musees-gratuits-pour-une-journee-culturelle-avec-des-enfants/ | Mulhouse: trois musées gratuits pour une journée culturelle avec des enfants | bons-plans | Mulhouse, Haut-Rhin, Grand Est
- /articles/parentalite/laep-a-colmar-ou-aller-gratuitement-avec-un-enfant-de-0-a-6-ans/ | LAEP à Colmar: où aller gratuitement avec un enfant de 0 à 6 ans | parentalite | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/fanabriques-colmar-2026-famille/ | Fana'Briques 2026 à Colmar: un week-end LEGO en famille | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | Créations & savoir-faire 2026 à Paris en famille: billets, ateliers et dates | evenements | Paris, Paris, Île-de-France
- /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | MonstroZoo 2026-2027 à Beauval: parcours inclus, visite guidée et tarifs | evenements | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | Halloween 2026 à Mini World Lyon: la Chasse aux 31 Méchants en famille | evenements | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | Luminescences 2026-2027 au zoo d'Amnéville: billets, tarifs et visite en famille | evenements | Amnéville, Moselle, Grand Est

### Historique Radar lié

- opportunity | /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | 2026-10-14T13:49:08.708Z
- opportunity | /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | 2026-10-18T19:49:09.191Z
- opportunity | /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | 2026-10-23T06:21:12.326Z
- opportunity | /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | 2026-10-21T10:43:46.144Z
- opportunity | /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | 2026-10-17T15:41:33.883Z
- opportunity | /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | 2026-10-20T08:52:25.825Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- opportunity | /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | 2026-10-22T12:58:21.691Z
- opportunity | /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | 2026-10-22T09:37:18.560Z
- opportunity | /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | 2026-10-19T09:37:22.517Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
