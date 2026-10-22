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
title: "MonstroZoo 2026-2027 à Beauval en famille : enquête libre ou visite guidée ?"
subtitle: "Carnet d'enquête inclus dans l'entrée, mission payante dès 6 ans : comment choisir jusqu'au 8 mars 2027"
summary: "MonstroZoo à Beauval du 17 octobre 2026 au 8 mars 2027 : parcours libre gratuit avec billet du zoo ou visite guidée dès 6 ans à 12 ou 14 € en supplément."
category: evenements
location:
  city: Saint-Aignan
  department: Loir-et-Cher
  region: Centre-Val de Loire
keywords:
  - MonstroZoo Beauval 2026 2027
  - MonstroZoo visite guidée enfants
  - MonstroZoo carnet enquête gratuit
  - MonstroZoo tarifs durée réservation
sources:
  - title: ZooParc de Beauval - Découvrez MonstroZoo 2026-2027
    url: https://www.zoobeauval.com/spectacles-et-activites/decouvrir-monstrozoo
  - title: ZooParc de Beauval - Visite guidée MonstroZoo et conditions de réservation
    url: https://reservations.zoobeauval.com/visite-guidee-monstrozoo
  - title: ZooParc de Beauval - Prix des activités et visites guidées
    url: https://www.zoobeauval.com/billetterie/activites
  - title: ZooParc de Beauval - Horaires du jour
    url: https://www.zoobeauval.com/preparez-votre-visite/horaires
  - title: ZooParc de Beauval - MonstroZoo à la Toussaint et Halloween 2026
    url: https://actus.zoobeauval.com/toussaint-monstrozoo-beauval-2026/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille
  decision: Permettre aux familles de choisir entre le jeu de piste gratuit inclus dans l'entrée du zoo et la visite guidée MonstroZoo payante, selon l'âge des enfants (dès 6 ans pour la visite), le budget, la durée de 1 h 30 et les places disponibles, sans confondre réservation de l'activité et billet d'accès au parc.
  affiliationPotential: L'entrée ordinaire du ZooParc est proposée sur Tiqets (https://www.tiqets.com/fr/activites-attractions-saint-aignan-c178194/billets-pour-zooparc-de-beauval-billet-d-entree-p974727/) et inclut le parcours MonstroZoo en autonomie; le supplément de visite guidée n'est pas inclus et aucune offre affiliée spécifique équivalente n'a été confirmée. Pour une famille restant sur place, Les Pagodes de Beauval sur Booking.com (https://www.booking.com/hotel/fr/les-pagodes-de-beauval-st-aignan.fr.html) proposent notamment des chambres familiales, sans disponibilité ni prix garantis.
  gsc:
    retrievedAt: 2026-10-22T08:53:00+02:00
    dataThrough: 2026-10-19
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « ZooParc de Beauval - Découvrez MonstroZoo 2026-2027 »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-03-08
---

Du **17 octobre 2026 au 8 mars 2027**, **MonstroZoo** installe six créatures fantastiques et leurs familles dans plusieurs territoires du **ZooParc de Beauval**, à Saint-Aignan. Leurs noms : **Bloop, Pyrak, Vrix, Grundo, Böm et Octavia**. Les visiteurs suivent des indices, observent des sculptures géantes et découvrent des jeux interactifs au milieu des animaux.

Pour participer, deux possibilités très différentes : **mener l'enquête librement sans supplément au billet du zoo**, ou **réserver une visite guidée de 1 h 30, payante et présentée dès 6 ans**. Le choix dépend surtout de l'âge des enfants et de leur envie de suivre une mission en groupe.

## L'enquête libre : le carnet est gratuit avec l'entrée

À l'arrivée, récupérez le **carnet d'enquête MonstroZoo**, remis gratuitement. Il sert à retrouver les six monstres et leurs familles, à résoudre des énigmes et à participer aux jeux proposés dans les différentes zones. Le parcours traverse notamment des secteurs proches du **Dôme Équatorial**, de la **Terre des Lions** et de l'espace des **singes dorés**.

Cette expérience est **comprise dans l'entrée ordinaire du ZooParc** : le carnet et le parcours n'exigent ni billet supplémentaire ni réservation d'une visite guidée. En revanche, **l'accès au zoo reste payant** selon les conditions habituelles.

C'est la formule la plus souple avec de jeunes enfants : chacun avance à son rythme, fait une pause devant les animaux ou abandonne une énigme sans contrainte d'horaire. L'enquête libre n'a pas de limite d'âge spécifique publiée.

Pour l'entrée générale, [Tiqets propose un billet pour le ZooParc de Beauval](https://www.tiqets.com/fr/activites-attractions-saint-aignan-c178194/billets-pour-zooparc-de-beauval-billet-d-entree-p974727/). Cette offre permet l'accès au parc et donc au parcours MonstroZoo libre, **pas à la visite guidée payante**. Vérifiez les dates, les catégories d'âge et le prix final avant l'achat ; la fiche Tiqets indique que le billet n'est ni remboursable ni reprogrammable.

## La visite guidée « Sur la piste des monstres » : dès 6 ans

Pour les enfants qui aiment les jeux de rôle et les enquêtes collectives, un animateur accompagne un groupe de **15 participants maximum** pendant **1 h 30**. Cette mission approfondit l'univers des monstres et les indices à recueillir.

La visite guidée est présentée **dès 6 ans**. La billetterie officielle précise qu'elle est **déconseillée aux moins de 6 ans**, sans formuler cela comme une interdiction générale. **Tout mineur doit être accompagné d'un adulte**.

Les suppléments affichés pour l'activité sont :

- **12 € pour un enfant de 6 à 10 ans** ;
- **14 € pour un participant à partir de 11 ans**, adultes compris.

Pour **un adulte et un enfant de 6 à 10 ans**, la visite guidée ajoute donc **26 €** ; pour **deux adultes et deux enfants de 6 à 10 ans**, **52 €**, **en plus des entrées au ZooParc**. Un ZooPass valide peut déjà couvrir l'entrée au parc, mais pas automatiquement ce supplément.

**La réservation de la visite guidée est obligatoire.** Elle reste possible le jour même si des places sont disponibles, ce qui ne garantit pas d'en trouver. L'activité est annoncée **non remboursable**. La fiche précise un **rendez-vous à 17 h 30 au Campement d'Alva**, kiosque **Grand Koudou**, près du Dôme Équatorial. Les sessions sont annoncées chaque jour pendant les vacances scolaires et le samedi hors vacances : contrôlez la date et le créneau réellement disponibles avant de réserver.

## Ambiance, nuit tombante et rendez-vous d'Halloween

MonstroZoo utilise de **grandes silhouettes, des effets sonores, de la lumière et des projections**. Les créatures sont présentées comme attachantes, mais un enfant sensible aux sons soudains ou aux décors imposants peut préférer la visite libre, avec la possibilité de contourner une installation.

La promenade peut changer d'ambiance **à la tombée du jour**, lorsque les éclairages deviennent plus visibles. Cela **ne signifie pas que le ZooParc propose une nocturne indépendante** : MonstroZoo reste accessible pendant les **horaires d'ouverture du parc**, variables au fil de la saison. Vérifiez l'heure du dernier accès et les horaires des territoires pour votre journée, particulièrement si la visite guidée commence en fin d'après-midi.

Pendant les vacances de la Toussaint, Beauval annonce des rencontres avec les mascottes **Böm et Bloop**, ainsi qu'avec les mascottes panda et singe doré. Ces rencontres sont ensuite programmées les **mercredis et week-ends hors vacances**, selon les annonces du parc : elles ne sont pas promises quotidiennement jusqu'en mars.

Le **31 octobre uniquement**, les **enfants déguisés** peuvent demander un sachet de bonbons HARIBO dans les boutiques participantes **pendant leurs horaires d'ouverture**. Il ne faut pas confondre cette animation ponctuelle avec les activités proposées pendant toute la période MonstroZoo.

## Organiser la visite sans dédoubler le programme du zoo

Si vous venez surtout découvrir MonstroZoo avec de jeunes enfants, le **parcours libre** permet de combiner les monstres et les animaux sans imposer une mission de 90 minutes à toute la famille. Avec des enfants de **6 ans ou plus** très motivés par l'enquête, comparez l'intérêt du guide au supplément total, et réservez d'abord le créneau disponible avant de fixer le reste de la journée.

Pour les **billets habituels du ZooParc**, les vacances scolaires et le choix entre une ou deux journées, notre guide [Beauval à la Toussaint 2026 en famille](/articles/voyages/beauval-a-la-toussaint-2026-billets-duree-de-visite-et-hebergement/) rassemble les repères de séjour. Les questions de **poussette, de budget et de déplacements** sont aussi détaillées dans [ZooParc de Beauval : billets, une ou deux journées et hôtel](/articles/voyages/zooparc-de-beauval-en-famille-en-2026-un-ou-deux-jours-quel-hotel-et-quel-budget-prevoir/).

Si vous transformez la sortie en week-end, les [Pagodes de Beauval à Saint-Aignan sur Booking.com](https://www.booking.com/hotel/fr/les-pagodes-de-beauval-st-aignan.fr.html) proposent notamment des **chambres familiales**, à proximité du zoo. Vérifiez les couchages selon l'âge de chaque enfant, le prix total, la disponibilité et les conditions d'annulation : aucun tarif ni créneau d'hôtel n'est garanti ici.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/voyages/beauval-a-la-toussaint-2026-billets-duree-de-visite-et-hebergement/ | Beauval à la Toussaint 2026: billets, durée de visite et hébergement | voyages | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/zooparc-de-beauval-en-famille-en-2026-un-ou-deux-jours-quel-hotel-et-quel-budget-prevoir/ | ZooParc de Beauval: billets, 1 ou 2 jours, hôtel et budget 2026 | voyages | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/parentalite/chateau-de-chamerolles-en-famille-visite-libre-ou-guidee-en-2026/ | Château de Chamerolles en famille: visite libre ou guidée en 2026 ? | parentalite | Chilleurs-aux-Bois, Loiret, Centre-Val de Loire
- /articles/sorties/chateau-de-bonaguil-avec-des-enfants-visite-libre-ou-guidee/ | Château de Bonaguil avec des enfants: visite libre ou guidée ? | sorties | Fumel, Lot-et-Garonne, Nouvelle-Aquitaine
- /articles/sorties/tours-de-merle-en-famille-visite-libre-guidee-ou-theatralisee-en-2026/ | Tours de Merle en famille: visite libre, guidée ou théâtralisée en 2026 ? | sorties | Saint-Geniez-ô-Merle, Corrèze, Nouvelle-Aquitaine
- /articles/cuisine/maison-de-la-fourme-d-ambert-visite-libre-ou-guidee-avec-des-enfants/ | Maison de la Fourme d'Ambert: visite libre ou guidée avec des enfants? | cuisine | Ambert, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/ | Noël à Trévarez 2026 en famille: dates, horaires et réservation | evenements | Saint-Goazec, Finistère, Bretagne
- /articles/sorties/beauval-ou-nausicaa-en-famille-quelle-grande-sortie-choisir-en-2026/ | Beauval ou Nausicaá en famille: quelle grande sortie choisir en 2026? | sorties
- /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | bd BOUM 2026 à Blois en famille: ateliers, expositions et cinéma | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/center-parcs-les-hauts-de-bruyeres-en-famille-quel-cottage-choisir-apres-la-renovation/ | Center Parcs Les Hauts de Bruyères en famille: quel cottage choisir après la rénovation? | voyages | Chaumont-sur-Tharonne, Loir-et-Cher, Centre-Val de Loire
- /articles/vie-pratique/transport-scolaire-remi-41-que-faire-apres-la-rentree/ | Transport scolaire Rémi 41: que faire après la rentrée ? | vie-pratique | Romorantin-Lanthenay, Loir-et-Cher, Centre-Val de Loire
- /articles/activites/balade-en-bateau-a-saint-dye-sur-loire-journee-pique-nique-ou-crepuscule/ | Balade en bateau à Saint-Dyé-sur-Loire: journée, pique-nique ou crépuscule ? | activites | Saint-Dyé-sur-Loire, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/noel-a-chambord-2026-avec-des-enfants-quand-venir-et-que-prevoir/ | Noël à Chambord 2026 avec des enfants: quand venir et que prévoir | evenements | Chambord, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/blois-sans-voiture-en-2026-3-jours-pour-chambord-cheverny-et-le-centre-ville/ | Blois sans voiture en 2026: 3 jours pour Chambord, Cheverny et le centre-ville | voyages | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/sorties/chateau-de-chambord-en-famille-tarifs-2026-activites-et-conseils-de-visite/ | Château de Chambord en famille: tarifs 2026, activités et conseils de visite | sorties | Chambord, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | Halloween 2026 à Mini World Lyon: la Chasse aux 31 Méchants en famille | evenements | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | Luminescences 2026-2027 au zoo d'Amnéville: billets, tarifs et visite en famille | evenements | Amnéville, Moselle, Grand Est
- /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | Salon du Cheval de Paris 2026 en famille: animations, jumping et billets | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne
- /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | Foire de Dijon 2026 avec les enfants: gratuités, ateliers et Ferme Côte-d'Or | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | Foire de Grenoble 2026 en famille: jours gratuits, programme et tarifs | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | Equita Lyon 2026 avec des enfants: billets, Village Enfants et spectacles | evenements | Chassieu, Rhône, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | 2026-10-18T19:49:09.191Z
- opportunity | /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | 2026-10-21T10:43:46.144Z
- opportunity | /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | 2026-10-21T16:31:41.000Z
- opportunity | /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | 2026-10-21T13:33:34.395Z
- opportunity | /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | 2026-10-22T12:58:21.691Z
- opportunity | /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | 2026-10-22T09:37:18.560Z
- opportunity | /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | 2026-10-22T04:59:04.773Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
