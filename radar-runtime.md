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
title: "Noël à Aix-en-Provence 2026 en famille : quand venir pour les manèges et les marchés ?"
subtitle: "Chalets, santons, 13 desserts et animations : les dates à choisir avec les enfants"
summary: Du 8 novembre 2026 au 3 janvier 2027, les rendez-vous de Noël à Aix n'ouvrent pas tous en même temps. Voici les horaires, les jours particuliers et les idées de parcours en famille.
category: evenements
location:
  city: Aix-en-Provence
  department: Bouches-du-Rhône
  region: Provence-Alpes-Côte d'Azur
keywords:
  - Noël Aix-en-Provence 2026 en famille
  - marché de Noël Aix-en-Provence 2026 horaires
  - foire aux santons Aix 2026
  - manèges Noël Aix 2026
  - marché des 13 desserts Aix 2026
sources:
  - title: Office de tourisme d'Aix-en-Provence — Noël 2026, illuminations et mapping
    url: https://www.aixenprovencetourism.com/aix-en-provence-fete-noel/
  - title: Office de tourisme — foires et marchés de Noël 2026
    url: https://www.aixenprovencetourism.com/aix-en-provence-fete-noel/foires-marches-noel-en-provence/
  - title: Office de tourisme — activités et spectacles de Noël pour les enfants
    url: https://www.aixenprovencetourism.com/aix-en-provence-fete-noel/activites-spectacles-noel-enfants/
  - title: Ville d'Aix-en-Provence — manèges de Noël 2026 et horaires des jours fériés
    url: https://aixenprovence.fr/Maneges-47626
  - title: Office de tourisme — parkings et parkings relais à Aix-en-Provence
    url: https://www.aixenprovencetourism.com/acces-transports/parkings/
  - title: Adagio — appartements de l'Aparthotel Aix-en-Provence Centre
    url: https://www.adagio-city.com/fr/hotel-6796-aparthotel-adagio-aix-en-provence-centre/index.shtml
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges
  decision: Permettre à une famille de choisir sa date et son parcours dans Aix selon l'envie de manèges, de traditions provençales ou de gourmandises, en sachant ce qui est ouvert et ce qui coûte éventuellement.
  affiliationPotential: "Hébergement de week-end vérifié : Aparthotel Adagio Aix-en-Provence Centre, appartements équipés de 4 à 6 personnes, présent sur Booking.com ; pas de billet partenaire naturel pour les marchés gratuits."
  gsc:
    retrievedAt: 2026-10-25T02:31:31+02:00
    dataThrough: 2026-10-22
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Office de tourisme d'Aix-en-Provence — programme de Noël 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-03T20:00:00+01:00
affiliate:
  enabled: true
  type: travel
  destination: Aix-en-Provence
---

À Aix-en-Provence, les **manèges de Noël ouvrent dès le 8 novembre 2026**, mais il faut attendre le **13 novembre pour les chalets et la Foire aux Santons**, puis décembre pour certaines animations destinées aux enfants. Choisir la bonne date évite de promettre aux plus jeunes un marché ou un spectacle qui n'a pas encore commencé.

## Quelle période choisir pour une sortie en famille ?

- **Du 8 au 12 novembre :** les manèges sont déjà installés, mais les marchés de Noël n'ont pas encore ouvert.
- **Du 13 au 27 novembre :** on peut combiner manèges, chalets et santons. Les illuminations officielles commencent le **28 novembre**.
- **Du 1er au 24 décembre :** c'est la période la plus riche pour ajouter des jeux, des projections lumineuses ou des rendez-vous gourmands. Le **marché des 13 desserts** se tient uniquement du 17 au 24 décembre.
- **Le 25 décembre :** les chalets et la Foire aux Santons sont fermés. Les manèges ouvrent en revanche de **14 h à 20 h**.
- **Du 26 au 31 décembre :** les deux marchés principaux rouvrent selon leurs horaires annoncés. **Du 1er au 3 janvier 2027**, les manèges restent une option, alors que ces marchés sont terminés.

Le [programme général de Noël de l'Office de tourisme](https://www.aixenprovencetourism.com/aix-en-provence-fete-noel/) couvre aussi d'autres manifestations jusqu'au 10 janvier : cela ne signifie pas que les chalets ou les manèges restent ouverts jusque-là.

## Les manèges : horaires, lieux et budget

Du **8 novembre 2026 au 3 janvier 2027**, les manèges se répartissent entre la **place Jeanne-d'Arc**, la **place du Général-de-Gaulle** et le **cours Mirabeau**. La [Ville d'Aix-en-Provence confirme les horaires](https://aixenprovence.fr/Maneges-47626) : **10 h à 20 h** du dimanche au jeudi, **10 h à 21 h 30** les vendredis et samedis. Les **25 décembre et 1er janvier**, l'ouverture est décalée à **14 h**, avec fermeture à **20 h**.

Les tours sont **payants**, mais aucun tarif fiable par attraction n'est communiqué dans le programme consulté. Prévoyez une enveloppe pour les tours et vérifiez sur place les conditions d'âge ou de taille : tous les manèges ne conviennent pas nécessairement aux tout-petits. Une famille peut aussi se promener sans acheter de tour.

## Chalets ou santons : deux visites différentes

Le **marché de Noël du cours Mirabeau** rassemble des chalets d'artisans, des idées de cadeaux et des gourmandises du **13 novembre au 31 décembre**. Il ouvre de **10 h à 20 h**, jusqu'à **21 h 30 les vendredis et samedis**. Attention aux exceptions : **10 h à 19 h les 24 et 31 décembre**, et **fermeture le 25 décembre**.

La **Foire aux Santons**, sur l'**esplanade Cézanne**, se déroule aux mêmes dates, de **10 h à 19 h**, sauf le 25 décembre. C'est le bon choix pour montrer aux enfants les personnages, métiers et décors des crèches provençales. L'inauguration et la bénédiction sont annoncées le **29 novembre à 11 h 30**, avec des animations traditionnelles.

On peut parcourir les stands sans acheter. Le budget dépend surtout des santons, cadeaux et gourmandises choisis. Les dates et horaires de ces deux rendez-vous figurent dans le [programme des foires et marchés de l'Office de tourisme](https://www.aixenprovencetourism.com/aix-en-provence-fete-noel/foires-marches-noel-en-provence/).

Si vous hésitez entre les traditions des deux villes, notre guide de la [Foire aux santons de Marseille 2026](https://www.fam-space.fr/articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/) permet de comparer une autre sortie, sans confondre les lieux ni les dates.

## Les 13 desserts : le rendez-vous gourmand de fin décembre

Du **17 au 24 décembre**, la **place François-Villon** accueille le marché des 13 desserts et des produits du terroir. Les familles peuvent y découvrir pompe à l'huile, calissons, nougats, figues ou miel : une occasion de parler des traditions provençales avec les enfants.

Le marché ouvre normalement de **10 h à 19 h**, avec deux nocturnes jusqu'à **21 h les 18 et 19 décembre**. Il ferme dès **14 h le 24 décembre**. Ne le prévoyez donc pas pour une sortie après Noël.

## Des animations pour les enfants, sans multiplier les dépenses

À partir du **28 novembre**, les illuminations donnent une autre ambiance à une promenade en fin de journée. Sur la **place de l'Hôtel-de-Ville**, le mapping du calendrier de l'Avent est annoncé **du 1er au 24 décembre**, chaque soir à **18 h, 19 h et 20 h** ; chaque projection dure environ **5 minutes**.

Pour une activité en journée, les **grands jeux en bois** s'installent aux **places comtales**, les mercredis, samedis et dimanches de la période du **2 au 23 décembre**, de **14 h à 18 h**. Autre possibilité plus ciblée : l'atelier **« Fabrique ton santon »**, le **mercredi 9 décembre**, de **14 h à 15 h 30**, à l'Oustau de Prouvènço, parc Jourdan. Celui-ci est explicitement annoncé **gratuit, en entrée libre avec inscription sur place le jour même**.

Enfin, la **boîte aux lettres du Père Noël**, au pied du grand sapin de la place de l'Hôtel-de-Ville, attend les courriers des enfants **jusqu'au 17 décembre**. L'Office de tourisme conseille d'inscrire l'adresse de retour au dos de la lettre.

Ces horaires proviennent du [programme officiel des activités pour enfants](https://www.aixenprovencetourism.com/aix-en-provence-fete-noel/activites-spectacles-noel-enfants/). Pour les autres animations, aucun prix ni condition de réservation ne doit être présumé : vérifiez la fiche correspondante avant de vous déplacer. Les animations extérieures peuvent changer selon la météo.

## Organiser la promenade avec une poussette

Pour une première découverte, un parcours simple consiste à partir du **cours Mirabeau**, à rejoindre les manèges du secteur de la Rotonde, puis à poursuivre vers la Foire aux Santons. Avec des enfants plus grands, gardez les projections lumineuses pour la fin de journée plutôt que de les attendre plusieurs heures sur place.

Les lieux sont dans le centre d'Aix, mais l'affluence, les rues pavées et les arrêts devant les chalets peuvent ralentir une poussette. Prévoyez une pause et n'annoncez pas une accessibilité intégrale des stands sans vérification spécifique.

Si vous venez en voiture, les parkings **Rotonde, Mignet ou Méjanes** donnent accès au centre ; les **parkings relais** permettent aussi de terminer le trajet en bus. L'[Office de tourisme détaille les solutions de stationnement](https://www.aixenprovencetourism.com/acces-transports/parkings/). En période de fête, vérifiez les horaires de retour et les éventuelles restrictions de circulation.

## Et pour un week-end à Aix ?

Pour les familles qui viennent de loin, l'[Aparthotel Adagio Aix-en-Provence Centre sur Booking.com](https://www.booking.com/hotel/fr/pierre-vacances-city-centre.fr.html) propose notamment des **appartements équipés pour quatre ou six personnes**, avec cuisine, à proximité de la Rotonde. C'est une solution pratique pour alterner les sorties et les repas au logement ; comparez le prix total, la capacité réelle et les conditions d'annulation pour vos dates.

Pour prolonger le séjour par une visite gourmande distincte des marchés, le [Musée du Calisson à Aix-en-Provence](https://www.fam-space.fr/articles/sorties/musee-calisson-aix-visite-enfants-2026/) fait l'objet d'un guide spécifique, avec les âges et modalités de sa visite-enquête.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/cuisine/food-tour-a-aix-en-provence-avec-des-enfants-lequel-choisir-en-2026/ | Food tour à Aix-en-Provence avec des enfants: lequel choisir en 2026? | cuisine | Aix-en-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/sorties/musee-calisson-aix-visite-enfants-2026/ | Musée du Calisson à Aix-en-Provence: une enquête gourmande pour les enfants en 2026 | sorties | Aix-en-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | Foire aux santons de Marseille 2026: dates, inauguration et visite en famille | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/lumieres-de-noel-a-montbeliard-2026-quel-jour-venir-avec-des-enfants/ | Lumières de Noël à Montbéliard 2026: quel jour venir avec des enfants? | evenements | Montbéliard, Doubs, Bourgogne-Franche-Comté
- /articles/evenements/noel-a-orleans-2026-en-famille-marches-horaires-et-maneges-apres-noel/ | Marché de Noël d’Orléans 2026 en famille: horaires, lieux et manèges | evenements | Orléans, Loiret, Centre-Val de Loire
- /articles/parentalite/maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles/ | Maison des Parents aux Pennes-Mirabeau: ateliers gratuits et accueil des familles | parentalite | Les Pennes-Mirabeau, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/concert-routes-provence-cassis-2026/ | Concert gratuit à Cassis le 13 août 2026 | evenements | Cassis, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/bons-plans/arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir/ | Arles en famille à petit budget: quelles visites et quel pass choisir? | bons-plans | Arles, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | Fête de la mer 2026 à Marseille avec des enfants: quelle escale choisir? | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/mucem-a-la-toussaint-2026-quelle-activite-en-ribambelle-choisir-selon-l-age/ | Mucem à la Toussaint 2026: le programme En Ribambelle avec des enfants | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/sorties/cosquer-mediterranee-avec-des-enfants-age-poussette-tarifs/ | Cosquer Méditerranée avec des enfants: que peut-on visiter selon leur âge? | sorties | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/maison/dechets-tri-mobile-a-marseille-quoi-apporter-sans-aller-a-la-decheterie/ | Déchets’tri mobile à Marseille: quoi apporter sans aller à la déchèterie? | maison | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/sorties/escale-borely-avec-des-enfants-du-david-au-bowl-a-pied/ | Escale Borély avec des enfants: du David au Bowl à pied | sorties | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/vie-pratique/consigne-a-marseille-saint-charles-avec-des-enfants-ou-laisser-valises-et-poussette/ | Consigne à Marseille Saint-Charles avec des enfants: où laisser valises et poussette? | vie-pratique | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/activites/preau-des-accoules-a-marseille-faut-il-reserver-avant-de-venir-avec-des-enfants/ | Préau des Accoules à Marseille: faut-il réserver avant de venir avec des enfants? | activites | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/herofestival-marseille-2026-en-famille-billets-gratuite-enfants-et-conseils/ | HeroFestival Marseille 2026 en famille: billets, gratuité enfants et conseils | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/voyages/marseille-en-famille-pendant-3-jours-itineraire-simple-autour-du-vieux-port/ | Marseille en famille pendant 3 jours: itinéraire simple autour du Vieux-Port | voyages | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | Noël à Nice 2026 en famille: village, spectacles et crèche | evenements | Nice, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | Noël à Toulouse 2026 en famille: marchés, Père Noël et patinoire | evenements | Toulouse, Haute-Garonne, Occitanie
- /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | Thoiry Lumières Sauvages 2026-2027: dates, billets et visite en famille | evenements | Thoiry, Yvelines, Île-de-France
- /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | Noël à Nantes 2026: marché de Noël et Voyage en hiver en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire

### Historique Radar lié

- opportunity | /articles/sorties/cosquer-mediterranee-avec-des-enfants-age-poussette-tarifs/ | 2026-10-03T11:22:17.769Z
- opportunity | /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | 2026-10-06T16:58:51.946Z
- opportunity | /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | 2026-10-23T15:29:55.218Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/mucem-a-la-toussaint-2026-quelle-activite-en-ribambelle-choisir-selon-l-age/ | 2026-10-04T10:54:39.216Z
- opportunity | /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | 2026-10-24T15:27:41.430Z
- opportunity | /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | 2026-10-25T04:31:33.540Z
- opportunity | /articles/evenements/noel-a-orleans-2026-en-famille-marches-horaires-et-maneges-apres-noel/ | 2026-10-25T07:29:47.050Z
- opportunity | /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | 2026-10-24T23:34:36.270Z
- opportunity | /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | 2026-10-24T19:30:32.700Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
