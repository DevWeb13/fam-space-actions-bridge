# Radar Fam Space - Phase 3/3

## Mission

Radar surveille en priorité les articles Fam Space qui gagnent rapidement des impressions Google puis les perdent quelques jours plus tard. Il cherche ensuite les autres articles existants à améliorer réellement. Seulement s'il ne trouve aucune amélioration utile, il recherche un événement exceptionnel avec un fort potentiel d'audience et, lorsque c'est naturel, d'affiliation. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

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

Soumets le résultat final avec `action: advance`, uniquement les métadonnées éditoriales réellement corrigées, le corps complet et un bloc `radarReview`. Ne recopie pas les métadonnées inchangées: la plomberie les conserve et normalise la syntaxe avant traitement. Le bloc `radarReview` contient:
- `summary`: contrôles et corrections réellement effectués;
- `sources`: URLs factuelles revérifiées;
- pour un refresh, `regressionCheck`: résultat concret de la comparaison ancien/nouveau. Une seule correction factuelle vérifiée peut suffire.

**Ne recopie aucun autre champ Radar, aucune branche et aucun SHA.** Le workflow construit et contrôle d'abord l'article final avec le validateur réel. Il ne crée le commit de phase 3 que si ce précontrôle réussit, puis lance le processeur final.

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
title: "Ateliers pâtisserie en Essonne: où cuisiner avec ses enfants?"
subtitle: Atelier gratuit, cours en duo, animation de groupe ou anniversaire à Orsay, Yerres et Grigny.
summary: "Quatre façons de cuisiner en famille en Essonne: atelier gratuit à Orsay, duo à Yerres, groupe ou anniversaire à Grigny, avec tarifs et réservations."
slug: ateliers-patisserie-en-essonne-ou-cuisiner-avec-ses-enfants
status: published
publishedAt: 2026-11-12T10:04:02+01:00
updatedAt: null
category: cuisine
readingTime: 4
location:
  city: ""
  department: Essonne
  region: Île-de-France
topic:
  key: cuisine|essonne|ateliers-patisserie-en-essonne-ou-cuisiner-avec-ses-enfants|2026
  keywords:
    - atelier pâtisserie enfant Essonne
    - atelier cuisine parent enfant Essonne
    - pâtisserie famille Orsay Yerres
image:
  src: /images/articles/2026/11/ateliers-patisserie-en-essonne-ou-cuisiner-avec-ses-enfants.webp
  alt: Façade de la mairie d'Orsay en Essonne, ville où se tiennent des ateliers de pâtisserie familiaux
sources:
  - title: MJC-CS Jacques Tati - Atelier pâtisserie
    url: https://www.mjctati.fr/atelier-patisserie/
  - title: MJC-CS Jacques Tati - Informations pratiques
    url: https://www.mjctati.fr/qui-sommes-nous/
  - title: Entremets & Merveilles - Ateliers
    url: https://entremetsetmerveilles.fr/ateliers/
  - title: Entremets & Merveilles - Contact
    url: https://entremetsetmerveilles.fr/contact/
  - title: Ferme Saint-Lazare - Informations pratiques
    url: https://lafermesaintlazare.etudesetchantiers.org/infos-pratiques/
  - title: Ferme Saint-Lazare - Anniversaires
    url: https://lafermesaintlazare.etudesetchantiers.org/964-2/
affiliate:
  enabled: true
  type: travel
  destination: Essonne
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/cuisine/(2026)/(11)/ateliers-patisserie-en-essonne-ou-cuisiner-avec-ses-enfants/index.md
  targetSha: 877dc9a96f34980dd10c229e32781adec0db3ea3
  targetUrl: /articles/cuisine/ateliers-patisserie-en-essonne-ou-cuisiner-avec-ses-enfants/
  decision: Choisir une formule réellement accessible à sa famille selon le budget, le format individuel ou collectif et les modalités de réservation.
  affiliationPotential: Conserver l'hébergement existant autour d'Orsay pour un séjour plus large; aucune réservation des ateliers cités confirmée chez les partenaires.
  gsc:
    retrievedAt: 2026-11-26T07:29:00+01:00
    dataThrough: 2026-11-23
    signal: uncertain
    basis: "Visibilité récente : 30 impressions sur trois jours, puis 3 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-18
    peakEnd: 2026-11-20
    recentStart: 2026-11-21
    recentEnd: 2026-11-23
    peakImpressions: 30
    recentImpressions: 3
    commonQueries: 0
    positionDelta: null
    impressionRatio: null
    focusQueries: []
---

<!-- article-image-credit -->
*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Mairie_-_Orsay_(FR91)_-_2026-01-17_-_2.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Faire des biscuits avec son enfant, apprendre les gestes de la pâtisserie ou préparer une recette à partir du potager: plusieurs structures en Essonne proposent de cuisiner ensemble. Le bon choix dépend surtout du format recherché. À Orsay, l'atelier familial est gratuit; à Yerres, on pâtisse en duo; à Grigny, la ferme accueille des groupes et peut personnaliser un anniversaire autour de la cuisine.

## Orsay: un atelier pâtisserie familial gratuit

À la **MJC-CS Jacques Tati**, parents et grands-parents, **avec ou sans enfants**, confectionnent une recette sucrée avec la référente famille. La séance est annoncée **gratuite, sur inscription**, à raison d'environ **un mercredi par mois de 10 h 30 à 12 h**. Cookies, biscuits de Noël et galettes figurent parmi les thèmes présentés.

Attention au calendrier: la [page de l'atelier](https://www.mjctati.fr/atelier-patisserie/) affiche des dates et des jours qui ne concordent pas tous avec l'année annoncée. **Ne retenez aucune date sans confirmation de la MJC**. Aucun âge minimum n'est indiqué; demandez si votre enfant peut participer et si des places restent disponibles.

**Inscription:** referente.famille@mjctati.fr. **Téléphone:** 01 69 82 60 00. **Adresse:** 14 bis avenue Saint-Laurent, 91400 Orsay.

## Yerres: un cours de pâtisserie à partager avec son enfant

**Entremets & Merveilles** distingue deux propositions. L'**atelier enfants-parents** est conçu pour pâtisser ensemble et apprendre les premiers gestes. L'**atelier de pâtisserie fine**, notamment autour d'une tarte de saison, vise les personnes qui souhaitent approfondir leurs techniques; ne le considérez pas automatiquement comme adapté aux plus jeunes.

La [présentation des ateliers](https://entremetsetmerveilles.fr/ateliers/) comporte des liens d'inscription, mais les **âges acceptés, tarifs par duo, durées et prochaines disponibilités** ne sont pas suffisamment établis pour être annoncés ici. Demandez ces précisions et la recette prévue avant de vous engager.

**Adresse:** 64 rue Paul-Doumer, 91330 Yerres. **Téléphone:** 06 61 22 75 76, indiqué sur la [page contact](https://entremetsetmerveilles.fr/contact/). Les créneaux de retrait des gâteaux ne sont pas les horaires des cours.

## Grigny: atelier de groupe ou anniversaire à la ferme

La **Ferme pédagogique Saint-Lazare** propose plusieurs expériences bien distinctes.

### Cuisine du jardin pour les groupes

L'animation **« cuisine du jardin »** permet notamment aux écoles, centres de loisirs et autres groupes de relier les aliments à leur culture. D'après les [informations pratiques de la ferme](https://lafermesaintlazare.etudesetchantiers.org/infos-pratiques/), une animation à la demi-journée commence à **150 € pour un groupe de 25 personnes**. Il s'agit d'un tarif de groupe, **pas d'un prix d'inscription individuelle**. L'équipe étudie les demandes de réservation.

### Un anniversaire personnalisable, avec cuisine possible

Autre formule, distincte de l'animation collective: la ferme propose un [anniversaire sur mesure](https://lafermesaintlazare.etudesetchantiers.org/964-2/) sur un **créneau de 3 heures**, **à partir de 15 € par enfant**, selon le nombre de participants. Un **atelier cuisine** peut être prévu sur demande, au même titre que d'autres animations. Il faut donc convenir du contenu avec l'équipe: ni une recette de pâtisserie précise ni un âge minimum ne sont annoncés.

La ferme indique mettre à disposition **bougies, couverts, assiettes, verres et serviettes**. Vérifiez ce qui est inclus pour le goûter et le gâteau d'anniversaire avant de confirmer le devis.

### Visiter la ferme sans réserver un atelier

Une **visite ordinaire** n'est pas un cours de cuisine. Elle coûte **2,50 € par personne**, avec **gratuité pour les moins de 3 ans**. La ferme annonce une ouverture aux familles le **mercredi de 14 h à 16 h 30 en période scolaire**, puis du **lundi au jeudi aux mêmes horaires pendant les vacances**. **La carte bancaire n'est pas acceptée** selon la page pratique: prévoyez un autre moyen de paiement et vérifiez les fermetures particulières avant de venir.

Des **ateliers familiaux gratuits** sont également proposés ponctuellement. Ils ne portent pas systématiquement sur la cuisine; consultez la programmation pour connaître leur thème.

**Adresse:** 21 rue du Port, 91350 Grigny. **Contact animations et anniversaires:** 06 18 62 56 64 ou ferme.pedagogique@etudesetchantiers.org. **Accès:** RER D, gare Grigny-Centre, puis environ **15 minutes à pied**, selon la ferme.

## Les vérifications utiles avant l'inscription

Pour comparer les propositions, vérifiez **le prix pour votre composition familiale**, plutôt qu'un tarif qui ne concernerait qu'un enfant ou tout un groupe. Demandez l'âge accepté, la présence obligatoire ou non d'un adulte, les ingrédients et le matériel fournis, ainsi que les conditions de report ou d'annulation.

Signalez les **allergies alimentaires** en amont. Si les préparations sont à emporter, demandez s'il faut une boîte ou un sac isotherme. Un adulte doit encadrer l'utilisation des couteaux, du four et des préparations chaudes.

Pour prolonger l'activité à la maison, refaire des biscuits simples permet aux enfants de retrouver les gestes appris. Si vous cherchez des formules différentes, en duo ou pour enfant seul, notre guide des [ateliers de pâtisserie en Gironde](https://www.fam-space.fr/articles/cuisine/ateliers-de-patisserie-en-gironde-en-duo-ou-enfant-seul/) donne d'autres exemples.

## Profiter d'un séjour en famille autour d'Orsay

Pour une famille qui visite aussi Orsay et le plateau de Saclay, il est possible de [comparer les hébergements à Orsay](https://www.booking.com/city/fr/orsay.fr.html). Confirmez d'abord la séance de pâtisserie avant de réserver un séjour.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/cuisine/(2026)/(11)/ateliers-patisserie-en-essonne-ou-cuisiner-avec-ses-enfants/index.md

---
title: "Ateliers pâtisserie en Essonne: où cuisiner avec ses enfants?"
subtitle: Trois pistes à Orsay, Yerres et Grigny, pour un atelier en famille ou une activité de groupe.
summary: "Atelier familial gratuit à Orsay, pâtisserie parent-enfant à Yerres ou cuisine du jardin en groupe à Grigny: adresses, tarifs connus et réservations."
slug: ateliers-patisserie-en-essonne-ou-cuisiner-avec-ses-enfants
status: published
publishedAt: 2026-11-12T10:04:02+01:00
updatedAt: null
category: cuisine
readingTime: 4
location:
  city: ""
  department: Essonne
  region: Île-de-France
topic:
  key: cuisine|essonne|ateliers-patisserie-en-essonne-ou-cuisiner-avec-ses-enfants|2026
  keywords:
    - atelier pâtisserie enfant Essonne
    - atelier cuisine parent enfant Essonne
    - pâtisserie famille Orsay Yerres
image:
  src: "/images/articles/2026/11/ateliers-patisserie-en-essonne-ou-cuisiner-avec-ses-enfants.webp"
  alt: "Façade de la mairie d'Orsay en Essonne, ville où se tiennent des ateliers de pâtisserie familiaux"
sources:
  - title: MJC-CS Jacques Tati - Atelier pâtisserie
    url: https://www.mjctati.fr/atelier-patisserie/
  - title: MJC-CS Jacques Tati - Informations pratiques
    url: https://www.mjctati.fr/qui-sommes-nous/
  - title: Entremets & Merveilles - Ateliers
    url: https://entremetsetmerveilles.fr/ateliers/
  - title: Entremets & Merveilles - Contact
    url: https://entremetsetmerveilles.fr/contact/
  - title: Ferme Saint-Lazare - Informations pratiques
    url: https://lafermesaintlazare.etudesetchantiers.org/infos-pratiques/
affiliate:
  enabled: true
  type: travel
  destination: Essonne
---
<!-- article-image-credit -->
*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Mairie_-_Orsay_(FR91)_-_2026-01-17_-_2.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Faire des biscuits avec son enfant, découvrir les gestes d'un pâtissier ou cuisiner les récoltes d'un potager: en Essonne, plusieurs structures proposent de mettre la main à la pâte. Voici trois adresses aux formats différents, avec les informations à vérifier avant de réserver.

## Orsay: un atelier pâtisserie familial gratuit

À la **MJC-CS Jacques Tati**, parents et grands-parents peuvent confectionner une recette sucrée avec leurs enfants, accompagnés par la référente famille. L'atelier est annoncé **gratuit, sur inscription**, généralement un mercredi par mois de **10h30 à 12h**.

La [page de l'atelier pâtisserie](https://www.mjctati.fr/atelier-patisserie/) mentionne notamment des cookies, des biscuits de Noël et des galettes. Elle affiche cependant un calendrier dont certains jours et dates ne concordent pas avec l'année indiquée: **demandez la date du prochain atelier confirmé** avant de vous organiser. Aucun âge minimum n'est précisé.

**Inscription:** referente.famille@mjctati.fr. **Téléphone:** 01 69 82 60 00. **Adresse:** 14 bis avenue Saint-Laurent, 91400 Orsay.

C'est une option intéressante pour une première expérience sans frais d'atelier, sous réserve de confirmer les places et l'âge accepté.

## Yerres: pâtisser en duo parent-enfant

Chez **Entremets & Merveilles**, deux formules sont présentées: un **atelier enfants-parents** pour découvrir la pâtisserie ensemble et un **atelier de pâtisserie fine**, notamment autour d'une tarte de saison, pour approfondir les techniques.

La [présentation des ateliers](https://entremetsetmerveilles.fr/ateliers/) propose une inscription pour chaque formule, mais ne précise pas clairement les **âges, tarifs, durées et prochaines dates**. Vérifiez ces points avant de réserver. Le cours de pâtisserie fine n'est pas nécessairement adapté aux plus jeunes.

**Adresse:** 64 rue Paul-Doumer, 91330 Yerres. **Téléphone:** 06 61 22 75 76, confirmé sur la [page contact](https://entremetsetmerveilles.fr/contact/). Les horaires de retrait des gâteaux ne correspondent pas aux horaires des ateliers.

## Grigny: cuisiner les produits du jardin en groupe

À la **Ferme pédagogique Saint-Lazare**, l'animation **« cuisine du jardin »** s'adresse notamment aux écoles, centres de loisirs et autres groupes. Elle permet de relier la préparation des aliments à leur culture.

Selon les [informations pratiques de la ferme](https://lafermesaintlazare.etudesetchantiers.org/infos-pratiques/), les animations commencent à **150 € la demi-journée pour un groupe de 25 personnes**. Ce montant est un tarif de groupe, pas le prix d'un atelier individuel. La réservation se fait auprès de l'équipe, qui étudie la demande.

La ferme propose aussi des **ateliers familiaux gratuits ponctuels**, mais ils ne sont pas tous consacrés à la cuisine. Leur thème et leur date sont annoncés dans la programmation de la structure.

**Adresse:** 21 rue du Port, 91350 Grigny. **Contact animations:** 06 18 62 56 64 ou ferme.pedagogique@etudesetchantiers.org. **Accès:** gare Grigny-Centre (RER D), puis environ 15 minutes à pied selon la ferme.

## Quel atelier choisir avec ses enfants?

**Pour une première découverte en famille**, l'atelier gratuit d'Orsay est le plus accessible financièrement, à condition qu'une séance soit confirmée.

**Pour apprendre avec un professionnel**, la formule parents-enfants de Yerres est plus directement orientée vers les gestes de pâtisserie. Demandez le tarif par binôme et la recette prévue.

**Pour une classe, une association ou un groupe de familles**, la ferme de Grigny propose une approche collective autour de l'alimentation et du potager.

Avant toute inscription, vérifiez l'âge minimum, la présence obligatoire ou non d'un parent, le prix exact, les ingrédients fournis et la prise en compte des allergies alimentaires. Pour une préparation à emporter, demandez s'il faut prévoir une boîte ou un transport au frais.

## Continuer à pâtisser à la maison

Après l'atelier, une recette simple de biscuits permet de refaire les gestes appris: peser, mélanger et façonner. Un adulte doit gérer le four, les couteaux et les préparations chaudes. Pour découvrir d'autres formules, notamment des ateliers en duo ou réservés aux enfants, consultez notre guide des [ateliers de pâtisserie en Gironde](https://www.fam-space.fr/articles/cuisine/ateliers-de-patisserie-en-gironde-en-duo-ou-enfant-seul/).

## Un séjour en famille autour d'Orsay

Si vous profitez de l'atelier pour visiter le secteur d'Orsay et du plateau de Saclay, vous pouvez [comparer les hébergements à Orsay](https://www.booking.com/city/fr/orsay.fr.html). Confirmez d'abord la tenue de l'atelier avant de réserver votre séjour.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/cuisine/atelier-cuisine-parent-enfant-a-nantes-gratuit-au-breil-ou-cours-prive/ | Ateliers cuisine parent-enfant à Nantes: où cuisiner ensemble? | cuisine | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/cuisine/ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet/ | Ateliers de cuisine parent-enfant à Toulouse: chocolat, pâtisserie ou menu complet ? | cuisine | Toulouse, Haute-Garonne, Occitanie
- /articles/cuisine/ateliers-de-cuisine-pour-enfants-a-montpellier-ou-aller-selon-leur-age/ | Ateliers de cuisine pour enfants à Montpellier: où aller selon leur âge? | cuisine | Montpellier, Hérault, Occitanie
- /articles/cuisine/ateliers-cuisine-parent-enfant-a-paris-lesquels-choisir-selon-l-age-et-le-budget/ | Ateliers cuisine parent-enfant à Paris: lesquels choisir selon l’âge et le budget ? | cuisine | Paris, Paris, Île-de-France
- /articles/cuisine/ateliers-de-patisserie-parent-enfant-en-bretagne-quelle-formule-choisir/ | Ateliers de pâtisserie parent-enfant en Bretagne: quelle formule choisir? | cuisine | Bretagne
- /articles/cuisine/cuisiner-creole-avec-son-enfant-a-saint-francois/ | Cuisiner créole avec son enfant à Saint-François | cuisine | Saint-François, Guadeloupe, Guadeloupe
- /articles/cuisine/ateliers-de-cuisine-en-famille-dans-le-loir-et-cher-chocolat-patisserie-ou-legumes/ | Ateliers de cuisine en famille dans le Loir-et-Cher: chocolat, pâtisserie ou légumes ? | cuisine | Loir-et-Cher, Centre-Val de Loire
- /articles/cuisine/ateliers-de-cuisine-parent-enfant-pres-de-strasbourg-ou-s-inscrire-selon-l-age/ | Ateliers de cuisine parent-enfant près de Strasbourg: où s'inscrire selon l'âge ? | cuisine | Bas-Rhin, Grand Est
- /articles/cuisine/ateliers-patisserie-en-essonne-ou-cuisiner-avec-ses-enfants/ | Ateliers pâtisserie en Essonne: où cuisiner avec ses enfants? | cuisine | Essonne, Île-de-France
- /articles/maison/ressourcerie-de-saclay-meubles-jouets-et-dons-utiles/ | Ressourcerie de Saclay: meubles, jouets et dons utiles | maison | Saclay, Essonne, Île-de-France
- /articles/vie-pratique/cantine-au-college-en-essonne-obtenir-son-tarif-2026-2027-sans-refaire-la-mauvaise-demarche/ | Cantine au collège en Essonne: obtenir son tarif 2026-2027 sans refaire la mauvaise démarche | vie-pratique | Évry-Courcouronnes, Essonne, Île-de-France
- /articles/activites/port-aux-cerises-a-draveil-quelle-activite-choisir-selon-l-age-des-enfants/ | Port aux Cerises à Draveil: quelle activité choisir selon l'âge des enfants? | activites | Draveil, Essonne, Île-de-France
- /articles/evenements/fete-de-la-science-2026-au-c2n-de-palaiseau-une-journee-gratuite-en-famille/ | Fête de la science 2026 au C2N de Palaiseau: une journée gratuite en famille | evenements | Palaiseau, Essonne, Île-de-France
- /articles/cuisine/fougasse-d-aigues-mortes-recette-moelleuse-a-faire-en-famille/ | Fougasse d’Aigues-Mortes: recette moelleuse à faire en famille | cuisine | Aigues-Mortes, Gard, Occitanie
- /articles/cuisine/ficelle-picarde-la-recette-familiale-des-crepes-gratinees-d-amiens/ | Ficelle picarde: la recette familiale des crêpes gratinées d'Amiens | cuisine | Amiens, Somme, Hauts-de-France
- /articles/cuisine/kig-ha-farz-en-famille-recette-et-organisation-d-un-repas-breton/ | Kig ha farz en famille: recette et organisation d'un repas breton | cuisine | Finistère, Bretagne
- /articles/cuisine/ravioles-du-dauphine-trois-repas-simples-en-famille/ | Ravioles du Dauphiné: trois repas simples en famille | cuisine | Auvergne-Rhône-Alpes
- /articles/cuisine/cuisiner-local-en-meurthe-et-moselle-producteurs-paniers-et-idees-de-repas/ | Cuisiner local en Meurthe-et-Moselle: producteurs, paniers et idées de repas | cuisine | Meurthe-et-Moselle, Grand Est
- /articles/cuisine/manger-local-dans-le-val-d-oise-paniers-fermes-et-repas-de-saison/ | Manger local dans le Val-d'Oise: paniers, fermes et repas de saison | cuisine | Val-d'Oise, Île-de-France
- /articles/cuisine/cuisine-creole-en-famille-a-la-reunion-quel-atelier-choisir/ | Cuisine créole en famille à La Réunion: quel atelier choisir ? | cuisine | La Réunion
- /articles/cuisine/roquefort-en-famille-visiter-les-caves-et-le-cuisiner-avec-les-enfants/ | Roquefort en famille: visiter les caves et le cuisiner avec les enfants | cuisine | Roquefort-sur-Soulzon, Aveyron, Occitanie
- /articles/cuisine/petit-epeautre-du-ventoux-quatre-idees-pour-le-cuisiner-en-famille/ | Petit épeautre du Ventoux: quatre idées pour le cuisiner en famille | cuisine | Vaucluse, Provence-Alpes-Côte d’Azur

### Historique Radar lié

- refresh | /articles/cuisine/ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet/ | 2026-11-11T05:36:32.395Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
