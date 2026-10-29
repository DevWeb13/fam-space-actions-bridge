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
title: "Marché de Noël de Clermont-Ferrand 2026 en famille : horaires, animations et accès"
subtitle: Place de Jaude du 27 novembre au 27 décembre, dates à éviter et conseils avec des enfants
summary: "Quand visiter le marché de Noël de Clermont-Ferrand 2026 avec des enfants : horaires, fermeture du 25 décembre, animations annoncées, gratuité, tramway et besoins des bébés."
category: evenements
location:
  city: Clermont-Ferrand
  department: Puy-de-Dôme
  region: Auvergne-Rhône-Alpes
keywords:
  - marché de Noël Clermont-Ferrand 2026
  - marché de Noël place de Jaude horaires
  - Noël Clermont-Ferrand enfants
  - animations marché de Noël Clermont-Ferrand 2026
sources:
  - title: Marché de Noël de Clermont-Ferrand — accueil et programme annoncé pour 2026
    url: https://www.marche-noel-clermont.com/
  - title: Marché de Noël de Clermont-Ferrand — horaires et fermetures 2026
    url: https://www.marche-noel-clermont.com/les-horaires-douverture-du-marche-de-noel/
  - title: Marché de Noël de Clermont-Ferrand — accès et transports
    url: https://www.marche-noel-clermont.com/comment-venir-au-marche-de-noel-de-clermont-ferrand/
  - title: Marché de Noël de Clermont-Ferrand — FAQ, gratuité et accessibilité
    url: https://www.marche-noel-clermont.com/faq/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces
  decision: Choisir le bon jour et créneau pour profiter du marché et des animations avec des enfants, sans venir un jour fermé ni prévoir des prestations non confirmées.
  affiliationPotential: "Marché et animations en accès gratuit. Hébergement vérifié sur Booking.com : CIT'HÔTEL LE DAV, près de Jaude, chambres familiales et lit bébé sur demande ; vérifier la capacité et la disponibilité aux dates du séjour."
  gsc:
    retrievedAt: 2026-10-29T02:27:59+01:00
    dataThrough: 2026-10-26
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Marché de Noël de Clermont-Ferrand - site de l'organisateur »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-27
---

Le **marché de Noël de Clermont-Ferrand 2026** s'installe **place de Jaude du vendredi 27 novembre au dimanche 27 décembre**. On peut s'y promener gratuitement entre les chalets et profiter des animations annoncées, mais **le marché ferme à 17 h le 24 décembre et n'ouvre pas le 25**. Pour une sortie avec des enfants, le bon choix dépend surtout du jour, de l'animation recherchée et de la facilité d'accès.

## Quels jours et à quelles heures venir ?

L'[organisateur publie les horaires 2026](https://www.marche-noel-clermont.com/les-horaires-douverture-du-marche-de-noel/) suivants :

- **Lundi :** 14 h à 20 h.
- **Mardi, mercredi, jeudi et dimanche :** 10 h 30 à 20 h.
- **Vendredi et samedi :** 10 h 30 à 22 h.
- **Jeudi 24 décembre :** fermeture anticipée à **17 h**.
- **Vendredi 25 décembre :** **fermé toute la journée**.

Une ligne isolée de la page officielle parle aussi d'un « dimanche 27 novembre » : elle ne correspond pas à 2026, puisque le 27 novembre tombe un vendredi. Ne la prenez donc pas pour un horaire exceptionnel de cette édition.

Avec de jeunes enfants, une visite en journée ou en début d'après-midi permet généralement de profiter des chalets sans attendre la soirée. Pour les lumières, choisissez plutôt la fin d'après-midi, en gardant de la marge avant le coucher ou le repas. Comptez **environ une à deux heures** pour une balade et un goûter : c'est un repère pratique, pas une durée imposée par l'organisateur.

## Quelles animations choisir avec les enfants en 2026 ?

Sur sa [page d'accueil consacrée à l'édition 2026](https://www.marche-noel-clermont.com/), l'organisateur annonce notamment :

- **Vendredi 27 novembre :** parade de Noël à l'ouverture, sans horaire précis affiché.
- **Mercredi 9 décembre, de 14 h 30 à 17 h 30 :** jeux géants en bois.
- **Mercredi 16 décembre, de 14 h 30 à 17 h 30 :** maquillage pour enfants.
- **Mercredi 23 décembre, de 14 h 30 à 17 h 30 :** nouvelle séance de jeux géants en bois.

Le marché rassemble aussi des chalets d'artisans, de cadeaux et de spécialités gourmandes, autour du sapin et de la grande roue. **L'entrée et les animations du marché sont gratuites**, selon l'organisateur. En revanche, ne considérez pas les tours de grande roue, les consommations ou les achats comme gratuits : leurs tarifs ne sont pas confirmés par cette annonce.

Le site évoque la présence du **Père Noël**, mais sa page détaillant les heures de rencontre est ancienne et ne constitue pas un calendrier confirmé pour 2026. Si la rencontre est le moment le plus attendu par votre enfant, vérifiez les créneaux actualisés avant de partir. De même, le calendrier de certaines pages secondaires conserve des dates d'éditions antérieures : privilégiez les annonces 2026 de l'accueil.

## Venir place de Jaude sans compliquer la sortie

L'[organisateur recommande le tramway A, arrêt Jaude](https://www.marche-noel-clermont.com/comment-venir-au-marche-de-noel-de-clermont-ferrand/). En voiture, il indique les parkings relais **Les Pistes** et **Henri Dunant**, avec une correspondance en tramway, ou les parkings centraux **Cathédrale, Saint-Pierre et Vercingétorix**. Le stationnement automobile est payant ; consultez [T2C](https://www.t2c.fr/) pour l'itinéraire et les éventuelles perturbations du jour.

La [FAQ de l'organisateur](https://www.marche-noel-clermont.com/faq/) précise que le marché est accessible aux personnes à mobilité réduite. Cela ne garantit pas des allées dégagées à toute heure : avec une poussette, privilégiez un créneau moins fréquenté et prévoyez du temps pour circuler entre les chalets.

## Goûter, toilettes et repas de bébé : que prévoir ?

Les stands proposent de quoi manger sur place, notamment des spécialités auvergnates et des gourmandises sucrées. Pour un enfant qui mange à heures fixes, mieux vaut toutefois emporter une petite collation et de l'eau plutôt que dépendre d'une file d'attente.

**Toilettes, table à langer, micro-ondes, chauffe-biberon et espace bébé :** leur disponibilité précise n'est pas confirmée pour l'édition 2026. Prenez un nécessaire de change et prévoyez une solution autonome pour le repas ou le biberon. Un porte-bébé peut être utile en complément de la poussette, surtout si la place est très fréquentée. La visite se déroule dehors : vêtements chauds et protection contre la pluie restent indispensables.

## Dormir près du marché pour prolonger le séjour

Pour une famille qui souhaite rester une nuit à Clermont-Ferrand, le [CIT'HÔTEL LE DAV sur Booking.com](https://www.booking.com/hotel/fr/dav-39-jaude.html), **10 rue des Minimes**, se trouve à environ **120 mètres de la place de Jaude**. Il propose des chambres familiales et des lits bébé sur demande, sous réserve de disponibilité. Vérifiez la capacité réelle de la chambre, les couchages, les conditions d'annulation et le tarif aux dates choisies. L'hôtel est situé dans une rue piétonne, non accessible directement en voiture.

Pour organiser le reste du week-end, le guide [Clermont-Ferrand en famille](/destinations/auvergne-rhone-alpes/puy-de-dome/clermont-ferrand/) aide à choisir les déplacements et les journées. Si vous envisagez une deuxième journée hors du centre, consultez aussi [le puy de Dôme avec des enfants : train ou randonnée ?](/articles/sorties/puy-de-dome-en-famille-train-randonnee-ou-les-deux/), sans supposer que les conditions de montagne seront favorables en décembre.

**Avant le départ**, vérifiez surtout les horaires du Père Noël, le programme des animations et les éventuels changements d'ouverture sur le site de l'organisateur.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/parentalite/creche-a-clermont-ferrand-quand-deposer-la-pre-inscription-et-comment-la-faire/ | Crèche à Clermont-Ferrand: quand déposer la pré-inscription et comment la faire | parentalite | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires et accès | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/maison/encombrants-a-clermont-ferrand-collecte-a-domicile-ou-dechetterie/ | Encombrants à Clermont-Ferrand: collecte à domicile ou déchetterie? | maison | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/maison/radon-a-clermont-ferrand-comment-reduire-l-exposition-dans-son-logement/ | Radon à Clermont-Ferrand: comment réduire l'exposition dans son logement | maison | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/vie-pratique/location-de-voiture-a-clermont-ferrand-avec-des-enfants-quoi-verifier-avant-de-reserver/ | Location de voiture à Clermont-Ferrand avec des enfants: quoi vérifier avant de réserver | vie-pratique | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/sorties/puy-de-dome-en-famille-train-randonnee-ou-les-deux/ | Puy de Dôme en famille: train, randonnée ou les deux? | sorties | Orcines, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/bons-plans/mont-dore-en-famille-telepherique-funiculaire-et-bons-billets-en-2026/ | Mont-Dore en famille fin septembre 2026: funiculaire ouvert, téléphérique fermé | bons-plans | Mont-Dore, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/cuisine/maison-de-la-fourme-d-ambert-visite-libre-ou-guidee-avec-des-enfants/ | Maison de la Fourme d'Ambert: visite libre ou guidée avec des enfants? | cuisine | Ambert, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/voyages/vulcania-a-la-toussaint-2026-1-ou-2-jours-billets-et-ou-dormir/ | Vulcania à la Toussaint 2026: 1 ou 2 jours, billets et où dormir | voyages | Saint-Ours-les-Roches, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/voyages/vulcania-en-famille-en-2026-un-ou-deux-jours-ou-dormir-et-quel-budget-prevoir/ | Vulcania en famille: 1 ou 2 jours, tarifs et hébergements 2026 | voyages | Saint-Ours-les-Roches, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | Noël des Alpes 2026 à Annecy en famille: marché, patinoire et illuminations | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | Marchés de Noël de Tours 2026 en famille: lieux, dates et budget | evenements | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël de Saint-Étienne 2026 en famille: dates, horaires et accès | evenements | Saint-Étienne, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/la-seine-musicale-en-famille-en-2027-quels-concerts-et-ateliers-selon-l-age/ | La Seine Musicale en famille en 2027: quels concerts et ateliers selon l'âge ? | evenements | Boulogne-Billancourt, Hauts-de-Seine, Île-de-France
- /articles/evenements/festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir/ | Festival des Jeux de Cannes 2027 en famille: billets, âges et visite | evenements | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans/ | Foulée Blanche 2027 en famille: courses, âges, tarifs et programme à Autrans | evenements | Autrans-Méaudre en Vercors, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | Noël à Fontevraud 2026: patinoire, marché, dates et tarifs en famille | evenements | Fontevraud-l'Abbaye, Maine-et-Loire, Pays de la Loire
- /articles/evenements/batiment-b-a-saint-denis-decouvrir-le-street-art-en-famille/ | Bâtiment B à Saint-Denis: découvrir le street art en famille | evenements | Saint-Denis, La Réunion, La Réunion

### Historique Radar lié

- opportunity | /articles/evenements/festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir/ | 2026-10-28T09:26:08.391Z
- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z
- opportunity | /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T18:37:09.008Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | 2026-10-28T21:29:26.054Z
- opportunity | /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | 2026-10-28T01:34:03.741Z
- opportunity | /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | 2026-10-29T05:28:53.475Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
