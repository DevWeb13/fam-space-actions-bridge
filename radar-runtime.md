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
title: "Festival des Petits Explorateurs 2026 à Dijon : matin ou après-midi avec les enfants ?"
subtitle: "Le 5 décembre au gymnase Sellenet : ateliers, horaires, entrée et conseils pour une visite adaptée"
summary: "Émotions, activités sensorielles, jeux libres ou ateliers sur l'inclusion : les créneaux à privilégier au Festival des Petits Explorateurs de Dijon, avec les tarifs et les précautions pratiques."
category: evenements
location:
  city: Dijon
  department: Côte-d'Or
  region: Bourgogne-Franche-Comté
keywords:
  - festival petits explorateurs Dijon 2026
  - CAP vers l'inclusion Dijon 5 décembre
  - ateliers enfants Dijon 5 décembre 2026
sources:
  - title: "Ville de Dijon - Festival des Petits Explorateurs : programme et conditions"
    url: https://www.dijon.fr/agenda/le-festival-des-petits-explorateurs-cap-vers-linclusion/
  - title: Dijon Bourgogne Tourisme - Festival des Petits Explorateurs
    url: https://www.destinationdijon.com/agenda/le-festival-des-petits-explorateurs/
  - title: Divia Mobilités - Réseau et itinéraires bus et tram
    url: https://information.divia.fr/sinformer/bus-et-tram/decouvrir-le-reseau/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille
  decision: Choisir à quelle heure venir et quels ateliers privilégier selon les envies, l'âge et les besoins de l'enfant, en connaissant le budget et la règle de sortie définitive.
  affiliationPotential: "Pas de billetterie partenaire vérifiée pour l'entrée. Pour un week-end à Dijon, Aparthotel Adagio Access Dijon République vérifié sur Booking.com (chambres familiales, cuisine et micro-ondes) : https://www.booking.com/hotel/fr/aparthotel-adagio-access-dijon-republique.fr.html ; disponibilité pour le 5 décembre non vérifiée."
  gsc:
    retrievedAt: 2026-10-30T01:28:25+01:00
    dataThrough: 2026-10-27
    signal: seasonal_opportunity
    basis: "Opportunité saisonnière vérifiée via « Ville de Dijon - Festival des Petits Explorateurs : programme détaillé »; aucune page forte GSC n'est requise."
eventEndsAt: 2026-12-05
---

Le **samedi 5 décembre 2026**, le gymnase Sellenet à Dijon accueille la première édition du **Festival des Petits Explorateurs – CAP vers l'inclusion**, de **10 h à 17 h**. Ateliers autour des émotions, découvertes sensorielles, activités sportives adaptées et jeux libres : l'intérêt est de pouvoir choisir des expériences selon les envies et le rythme de son enfant, plutôt que de chercher à tout faire.

## Venir le matin ou l'après-midi ?

**Le matin** convient particulièrement aux familles attirées par les expériences sensorielles et les activités à partager avec un jeune enfant. L'atelier parents-enfants autour des émotions « S'apaiser ensemble » est proposé de **10 h à 10 h 45** puis de **11 h à 11 h 45**. L'histoire sonore en duo a lieu de **10 h 30 à 11 h 30** ; les bouteilles sensorielles commencent à **10 h 30** et les marionnettes à doigts à **11 h 30**. Une activité physique adaptée est également annoncée de **10 h à 12 h**, tandis que la découverte de la nature se prolonge jusqu'à **13 h 30**.

**L'après-midi** est plus intéressant si votre enfant veut découvrir les différences ou repartir avec une création : sensibilisation à l'autisme à **14 h**, à la déficience visuelle et découverte tactile du livre à **15 h**, décoration de Noël à **15 h**. Le spectacle « Tablier à comptines » est prévu à **16 h**. Maquillage et tatouages éphémères sont annoncés de **14 h à 17 h**.

Pour les enfants attirés par les animaux, la médiation « Tous différents, tous lapins » offre trois rendez-vous : **11 h, 13 h et 15 h**, pendant 45 minutes chacun. Des jeux en bois, Kapla, une cabane géante et d'autres activités libres permettent de varier les plaisirs sans enchaîner uniquement des ateliers à horaire fixe.

Ces créneaux viennent du [programme publié par la Ville de Dijon](https://www.dijon.fr/agenda/le-festival-des-petits-explorateurs-cap-vers-linclusion/). Les capacités d'accueil et les éventuelles inscriptions à certains ateliers ne sont pas précisées : pour une activité indispensable à votre enfant, vérifiez les modalités auprès de l'organisation avant le déplacement.

## Quel budget prévoir ?

L'entrée annoncée est de **5 € par enfant à partir de 2 ans** : comptez donc **10 € pour deux enfants** ou **15 € pour trois enfants** concernés par ce tarif. Le prix applicable aux adultes accompagnants et les conditions exactes pour les moins de 2 ans ne sont pas indiqués dans le programme consulté ; ne les supposez pas gratuits sans confirmation.

Une restauration et une buvette sont prévues, sans tarifs publiés. L'atelier photo de Noël constitue une dépense supplémentaire : **10 € les 3 photos, 15 € les 5 ou 20 € les 10**. Pour maîtriser le budget, choisissez à l'avance si vous souhaitez ces photos et prévoyez une marge pour manger sur place.

**Attention : toute sortie est définitive.** Si vous souhaitez déjeuner à l'extérieur, vous ne pourrez pas compter sur un retour dans le festival. Pour une journée complète, organisez donc le repas en tenant compte de cette règle.

## Inclusion, poussette et besoins des tout-petits

Le festival met l'inclusion au centre de sa programmation, notamment avec des ateliers de sensibilisation au handicap et des activités adaptées. Cela ne confirme toutefois pas, à lui seul, l'accessibilité de tous les espaces du gymnase ou de chaque atelier. Pour un fauteuil roulant, des besoins sensoriels particuliers ou une assistance spécifique, mieux vaut demander à l'organisation les conditions concrètes d'accueil et la possibilité d'aménagements.

Avec une poussette ou un bébé, vérifiez également la place disponible pour circuler, la présence d'une table à langer, les sanitaires accessibles et la possibilité de réchauffer un repas : ces équipements ne sont pas détaillés dans l'annonce. Le festival propose de quoi se restaurer, mais ne garantit pas de micro-ondes ni de repas adaptés aux nourrissons. Emportez le nécessaire pour les changes et les collations, sans présumer qu'un équipement bébé sera disponible.

## Où se trouve le festival et comment venir ?

Le rendez-vous a lieu au **gymnase Sellenet, 203 rue d'Auxonne, 21000 Dijon**. Pour venir en bus ou en tram, consultez le [calculateur d'itinéraires et les informations du réseau Divia Mobilités](https://information.divia.fr/sinformer/bus-et-tram/decouvrir-le-reseau/) en renseignant cette adresse : aucune ligne ni arrêt précis n'a été confirmé pour l'entrée du gymnase. Si vous venez en voiture, prévoyez du temps pour trouver un stationnement, car le programme ne garantit pas de parking réservé aux visiteurs.

## Prolonger la sortie en week-end à Dijon

Pour une famille qui vient de plus loin, l'[Aparthotel Adagio Access Dijon République sur Booking.com](https://www.booking.com/hotel/fr/aparthotel-adagio-access-dijon-republique.fr.html) propose des studios et appartements avec **cuisine équipée, réfrigérateur et micro-ondes**, utiles pour les repas des enfants. Des logements familiaux et des lits bébé gratuits sur demande sont indiqués, sous réserve de disponibilité ; vérifiez la capacité du logement et les conditions pour vos dates. Aucun prix ni disponibilité pour la nuit du 5 décembre n'est confirmé ici.

Si vous restez à Dijon le lendemain, la [Fabrique de pain d'épices Mulot & Petitjean](https://www.fam-space.fr/articles/cuisine/fabrique-de-pain-d-epices-a-dijon-faut-il-reserver-et-combien-prevoir-avec-des-enfants/) est une autre idée de découverte familiale. Consultez toutefois ses jours d'ouverture avant de l'intégrer au programme : sa visite habituelle n'est pas annoncée le dimanche.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | Foire de Dijon 2026 avec les enfants: gratuités, ateliers et Ferme Côte-d'Or | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/cuisine/fabrique-de-pain-d-epices-a-dijon-faut-il-reserver-et-combien-prevoir-avec-des-enfants/ | Fabrique de pain d'épices à Dijon: faut-il réserver et combien prévoir avec des enfants? | cuisine | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/parentalite/cercles-de-parents-en-cote-d-or-trois-seances-gratuites-pour-echanger-pendant-les-premieres-annees/ | Cercles de Parents en Côte-d'Or: trois séances gratuites pour échanger pendant les premières années | parentalite | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/ | Fête foraine de Dijon 2026: dates, horaires et budget avec les enfants | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/ | Lire en Poche 2026 à Gradignan avec des enfants: organiser une journée sans perdre les ateliers | evenements | Gradignan, Gironde, Nouvelle-Aquitaine
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/parentalite/l-ilot-des-familles-a-tarbes-quels-ateliers-pour-les-parents-d-enfants-de-0-a-6-ans/ | L'îlot des Familles à Tarbes: quels ateliers pour les parents d'enfants de 0 à 6 ans? | parentalite | Tarbes, Hautes-Pyrénées, Occitanie
- /articles/parentalite/petite-section-peut-on-alleger-les-apres-midis-a-l-ecole-maternelle/ | Petite section: peut-on alléger les après-midis à l'école maternelle? | parentalite
- /articles/bons-plans/vacaf-2026-en-cote-d-or-jusqu-a-80-du-sejour-pris-en-charge/ | VACAF 2026 en Côte-d'Or: jusqu'à 80 % du séjour pris en charge | bons-plans | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/maison/canape-matelas-ou-electromenager-a-dijon-donner-faire-enlever-ou-aller-en-dechetterie/ | Canapé, matelas ou électroménager à Dijon: donner, faire enlever ou aller en déchetterie ? | maison | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/vie-pratique/frais-scolaires-en-cote-d-or-quelles-aides-demander-au-departement/ | Frais scolaires en Côte-d'Or: quelles aides demander au Département? | vie-pratique | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/activites/parc-de-l-auxois-avec-des-enfants-comment-combiner-animaux-maneges-et-piscine/ | Parc de l'Auxois avec des enfants: comment combiner animaux, manèges et piscine | activites | Arnay-sous-Vitteaux, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/sorties/cite-des-climats-a-beaune-en-famille-tarifs-parcours-enfants-et-billets/ | Cité des Climats à Beaune en famille: tarifs, parcours enfants et billets | sorties | Beaune, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Clermont-Ferrand 2026 en famille: horaires, animations et accès | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-montpellier-2026-en-famille-dates-fermetures-et-attractions/ | Marché de Noël de Montpellier 2026 en famille: horaires, jours fermés et manèges | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | Noël des Alpes 2026 à Annecy en famille: marché, patinoire et illuminations | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | Marchés de Noël de Tours 2026 en famille: lieux, dates et budget | evenements | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël de Saint-Étienne 2026 en famille: dates, horaires et accès | evenements | Saint-Étienne, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/la-seine-musicale-en-famille-en-2027-quels-concerts-et-ateliers-selon-l-age/ | La Seine Musicale en famille en 2027: quels concerts et ateliers selon l'âge ? | evenements | Boulogne-Billancourt, Hauts-de-Seine, Île-de-France
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires et accès | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir/ | Festival des Jeux de Cannes 2027 en famille: billets, âges et visite | evenements | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur

### Historique Radar lié

- opportunity | /articles/evenements/festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir/ | 2026-10-28T09:26:08.391Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- opportunity | /articles/evenements/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/ | 2026-10-25T17:34:53.718Z
- opportunity | /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | 2026-10-21T16:31:41.000Z
- refresh | /articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/ | 2026-10-06T12:23:52.449Z
- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- opportunity | /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/ | 2026-10-29T11:32:05.289Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/marche-de-noel-de-montpellier-2026-en-famille-dates-fermetures-et-attractions/ | 2026-10-29T08:29:37.767Z
- opportunity | /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T18:37:09.008Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
