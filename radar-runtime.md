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
title: "Planète Préhistorique à Bordeaux : dates, durée et tarifs en famille"
subtitle: Aux Bassins des Lumières, vérifiez le jour de projection des dinosaures et les conditions du billet avant de réserver
summary: "Planète Préhistorique à Bordeaux : l'exposition de dinosaures n'est pas programmée chaque jour. Durée de 1 h à 1 h 30, billets, âge conseillé et visite avec enfants."
slug: planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs
status: published
publishedAt: 2026-09-27T14:41:35+02:00
updatedAt: 2026-09-27T14:46:06+02:00
category: sorties
readingTime: 5
location:
  city: Bordeaux
  department: Gironde
  region: Nouvelle-Aquitaine
topic:
  key: sorties|bordeaux|planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs|2026
  keywords:
    - Planète Préhistorique Bordeaux enfants
    - Bassins des Lumières dinosaures
image:
  src: /images/articles/2026/09/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs.webp
  alt: Intérieur de la base sous-marine de Bordeaux
sources:
  - title: "Bassins des Lumières - Planète Préhistorique : Dinosaures"
    url: https://www.bassins-lumieres.com/fr/programmation/planete-prehistorique-dinosaures
  - title: Bassins des Lumières - Horaires et expositions programmées
    url: https://www.bassins-lumieres.com/fr/visiter/informations-pratiques/horaires
  - title: Bassins des Lumières - Tarifs officiels
    url: https://www.bassins-lumieres.com/fr/faq/fr/quels-sont-les-tarifs
  - title: Bassins des Lumières - Échange et remboursement des billets
    url: https://www.bassins-lumieres.com/fr/faq/1-ticket-office/mes-billets-peuvent-ils-etre-echanges-modifies-ou-rembourses
  - title: Bassins des Lumières - Âge recommandé et volume sonore
    url: https://www.bassins-lumieres.com/fr/faq/3-votre-visite/les-bassins-des-lumieres-sont-ils-accessibles-a-tout-age
  - title: Bassins des Lumières - Casques anti-bruit
    url: https://www.bassins-lumieres.com/faq/fr/3-votre-visite/est-ce-que-vous-pretez-des-casques-anti-bruit
  - title: Bassins des Lumières - Sensibilités à la lumière et vertige
    url: https://www.bassins-lumieres.com/faq/fr/3-votre-visite/les-expositions-sont-elles-convenables-pour-les-personnes-souffrant-depilepsie-etou-de-vertige
  - title: Bassins des Lumières - Accès et stationnement
    url: https://www.bassins-lumieres.com/fr/visiter/informations-pratiques/acces
  - title: Bassins des Lumières - Table à langer
    url: https://www.bassins-lumieres.com/fr/faq/4-accessibilite/y-a-t-il-une-table-a-langer-a-linterieur
  - title: Bassins des Lumières - Température intérieure
    url: https://www.bassins-lumieres.com/fr/faq/3-votre-visite/quelle-est-la-temperature-a-linterieur-des-bassins-des-lumieres
  - title: Bassins des Lumières - Arrivée en avance ou en retard
    url: https://www.bassins-lumieres.com/fr/faq/3-votre-visite/ja-une-reservation-pour-un-horaire-mais-je-serais-en-retard-ou-en-avance
  - title: Claudine Colin Communication - Dates de Planète Préhistorique
    url: https://www.claudinecolin.com/fr/3216-planete-prehistorique-dinosaures-l-experience-immersive
affiliate:
  enabled: true
  type: travel
  destination: Bordeaux
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/sorties/(2026)/(09)/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/index.md
  targetSha: 1c4de46cd47f75c51b1fee046bfe85397e88befe
  targetUrl: /articles/sorties/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/
  decision: Permettre à une famille de savoir si l'exposition Planète Préhistorique est effectivement programmée le jour envisagé, de prévoir 1 h à 1 h 30 sur place, et de choisir un billet adapté à sa composition et à ses besoins sans confondre les conditions du billet officiel et celles de Tiqets.
  affiliationPotential: "Conserver et recontrôler le billet Planète Préhistorique sur Tiqets (https://www.tiqets.com/fr/activites-attractions-bordeaux-c67101/billets-pour-bassins-des-lumieres-prehistoric-planet-exposition-a-la-decouverte-des-dinosaures-p1137322/) : offre dédiée, mais non remboursable et non reprogrammable selon la fiche consultée, contrairement à l'option d'échange annoncée par le site officiel sous conditions. Conserver le B&B HOTEL Bordeaux Bassins à flot sur Booking.com (https://www.booking.com/hotel/fr/b-amp-b-bordeaux-bassins-a-flot.fr.html), qui propose des chambres familiales. Aucune disponibilité ni économie garanties."
  gsc:
    retrievedAt: 2026-10-22T08:53:00+02:00
    dataThrough: 2026-10-19
    signal: uncertain
    basis: Baisse non attribuable avec certitude au classement.
    peakStart: 2026-10-01
    peakEnd: 2026-10-07
    recentStart: 2026-10-13
    recentEnd: 2026-10-19
    peakImpressions: 149
    recentImpressions: 26
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - base sous-marine bordeaux tarif
      - space explorer bordeaux
reviewAt: 2026-12-15
---

Depuis le **3 octobre 2026**, **Planète Préhistorique : Dinosaures** plonge les visiteurs dans des projections à 360° aux **Bassins des Lumières de Bordeaux**, à l'intérieur de l'ancienne base sous-marine. Avec des enfants, l'essentiel est de **choisir une date où les dinosaures sont réellement à l'affiche** : d'autres expériences prennent leur place certains jours.

Pour la sortie, prévoyez **environ 1 h à 1 h 30** sur place. Le site recommande cette expérience **à partir de 2 ans**, sans interdire l'accès aux plus petits.

## Dinosaures : quelles dates choisir aux Bassins des Lumières ?

Le lieu est ouvert tout au long de la semaine, mais cela ne signifie pas que l'exposition **Planète Préhistorique** est projetée tous les jours. Son calendrier officiel affiche explicitement des journées **« Dinosaures »** et d'autres consacrées à **Matisse / Frida Kahlo** ou à une autre expérience. Selon la période, notamment en novembre, les programmes alternent.

Avant d'acheter, consultez donc le **calendrier du jour sur la page « Planète Préhistorique : Dinosaures » ou dans la rubrique Horaires des Bassins des Lumières**. Le simple fait que le centre soit ouvert à la date souhaitée ne suffit pas. Vérifiez aussi le nom de l'exposition sur le billet : les offres ne donnent pas nécessairement accès aux autres programmes.

La communication presse consacrée à l'événement annonce une période du **3 octobre 2026 au 3 janvier 2027**. La page officielle de l'exposition n'affiche toutefois pas partout une date de fin ferme : **les créneaux proposés pour votre date restent la référence**.

## Une visite immersive, pas un musée de fossiles

<!-- article-image-body:01 -->

![Projections lumineuses dans les Bassins des Lumières à Bordeaux](/images/articles/2026/09/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs-body-01.webp)

*Photo: [\[1\]](https://commons.wikimedia.org/wiki/File:Bassins_des_Lumi%C3%A8res_dans_la_Base_Sous-Marine_(54952344718).jpg) - [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

L'expérience s'inspire de la série documentaire *Prehistoric Planet*. Elle montre notamment des **T. rex, vélociraptors, ptérosaures, mosasaures et Dreadnoughtus** dans des scènes de vie, de chasse et de découverte des mondes préhistoriques. La narration française est assurée par **Gérard Lanvin**, sur des musiques de **Hans Zimmer, Anže Rozman et Kara Talve**.

Les enfants ne viennent pas observer des squelettes dans des vitrines : ils découvrent des dinosaures monumentaux projetés sur les parois et les surfaces de l'ancienne base sous-marine. La durée communiquée par les Bassins est **d'environ 1 h à 1 h 30** ; gardez cette plage en tête pour organiser le reste de la journée, plutôt que de compter sur une heure fixe.

## À partir de quel âge et pour quels enfants ?

Les Bassins des Lumières accueillent les plus petits, mais **recommandent la visite à partir de 2 ans**. La salle est sombre, les images occupent de grandes surfaces et certaines créatures peuvent impressionner. Un enfant passionné de dinosaures n'appréciera pas nécessairement les mêmes effets qu'un autre du même âge.

Selon la FAQ du lieu, le **volume sonore n'excède pas 80 décibels**. Des **casques anti-bruit** sont proposés aux plus petits à l'accueil, **sans réservation et sous réserve de disponibilité**, contre une pièce d'identité.

Les effets lumineux peuvent présenter **des risques pour les personnes épileptiques, photosensibles ou souffrant de vertige**, d'après les avertissements des Bassins. Ce n'est pas une interdiction générale, mais une précaution à prendre en compte avant de réserver si une personne de la famille est concernée.

## Tarifs de Planète Préhistorique : quel billet choisir ?

Les tarifs généraux annoncés par les Bassins des Lumières sont les suivants :

- **16 €** au plein tarif ;
- **9 €** pour les jeunes de **6 à 25 ans inclus** ;
- **43 €** pour le **tarif famille**, correspondant à **deux adultes et deux jeunes de 6 à 25 ans** ;
- **gratuit pour les moins de 6 ans**, avec **réservation du billet gratuit obligatoire** et justificatif susceptible d'être demandé.

Pour deux adultes et deux enfants de plus de 6 ans, vérifiez en priorité le tarif famille plutôt que d'acheter quatre billets individuels. D'autres tarifs réduits ou gratuités existent selon les justificatifs ; le prix dépend donc de la composition réelle du groupe.

[Tiqets propose un billet spécifiquement consacré à Planète Préhistorique aux Bassins des Lumières](https://www.tiqets.com/fr/activites-attractions-bordeaux-c67101/billets-pour-bassins-des-lumieres-prehistoric-planet-exposition-a-la-decouverte-des-dinosaures-p1137322/). La fiche consultée indique que ce billet **n'est ni remboursable ni reprogrammable** et qu'il ne comprend pas l'accès aux autres expositions. Vérifiez son prix final et la date sélectionnée avant de régler.

Une différence importante existe avec la billetterie officielle des Bassins : **certains billets achetés sur leur propre plateforme peuvent être échangés une seule fois, jusqu'à la veille de la visite, pour 2 € par billet**, sans remboursement ordinaire. Cette possibilité **ne doit pas être supposée applicable à un billet Tiqets**. Si la date de votre sortie est incertaine, comparez particulièrement les conditions avant l'achat.

## Créneaux, dernière entrée et arrivée en retard

Les billets sont liés à une date et à un créneau. La FAQ officielle indique une tolérance de **30 minutes avant ou après l'horaire prévu**, **sauf pour le dernier créneau** ; en cas de forte affluence, l'entrée à un horaire différent peut être refusée si les créneaux suivants sont complets.

La **dernière entrée se fait une heure avant la fermeture** du site. Comme la visite peut durer jusqu'à **1 h 30**, mieux vaut ne pas choisir le dernier accès si vous souhaitez découvrir les projections sans précipitation. Les heures de fermeture changent selon les jours et les saisons : contrôlez celles de la date réservée.

## Poussette, table à langer et température intérieure

Les **poussettes sont autorisées** et les Bassins sont **accessibles aux personnes à mobilité réduite**. Le site recommande néanmoins un **porte-bébé** pour circuler plus aisément avec un très jeune enfant.

Une **table à langer** se trouve dans les **toilettes des femmes entre les alvéoles 3 et 4**. La température de l'ancienne base sous-marine suit les saisons : il y fait **frais en hiver**, tandis que l'été peut être chaud et humide, et le bâtiment **n'est pas climatisé**. Pour une visite à l'automne ou en hiver, gardez un vêtement chaud à portée de main.

## Se rendre aux Bassins des Lumières à Bordeaux

<!-- article-image-body:02 -->

![Vue extérieure de la base sous-marine de Bordeaux](/images/articles/2026/09/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs-body-02.webp)

*Photo: [Zairon](https://commons.wikimedia.org/wiki/File:Bordeaux_Base_Sous-Marine_Ext%C3%A9rieure_01.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Le site se situe **impasse Brown de Colstoun, 33300 Bordeaux**, dans le quartier de la base sous-marine. Un **parking sécurisé** peut être réservé pour la durée de l'exposition ; le centre signale que son terrain comporte des zones dégradées. Un **parking municipal gratuit** se trouve également devant le bâtiment, sous réserve de places libres.

En transports en commun, depuis **Quinconces**, prenez le **tram C jusqu'à Ravezies**, puis le **bus 9 vers Base sous-marine** : comptez ensuite environ **500 mètres à pied**. Depuis **Tourny**, le **bus 5 vers Bassins à Flot** laisse environ **700 mètres de marche**. Vérifiez les horaires de circulation avant de partir.

Si vous profitez du déplacement pour une deuxième sortie, la [Cité du Vin en famille](/articles/sorties/cite-du-vin-a-bordeaux-en-famille-tarifs-duree-et-conseils-de-visite/) constitue une visite distincte à organiser dans le même secteur.

## Prolonger la sortie par une nuit à Bordeaux

Pour les familles venant de loin, le [B&B HOTEL Bordeaux Bassins à flot sur Booking.com](https://www.booking.com/hotel/fr/b-amp-b-bordeaux-bassins-a-flot.fr.html) propose notamment des **chambres triples et quadruples**, dans le quartier. Vérifiez les couchages adaptés à l'âge des enfants, la disponibilité, le prix total et les conditions d'annulation pour les dates de votre séjour.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/sorties/(2026)/(09)/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/index.md

---
title: "Planète Préhistorique à Bordeaux avec des enfants: âge, durée et tarifs"
subtitle: Ce que montre l'expérience des Bassins des Lumières et ce qu'il faut prévoir avant de réserver
summary: "Durée, âge conseillé, tarifs, poussette et bruit: les points utiles pour préparer Planète Préhistorique aux Bassins des Lumières."
slug: planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs
status: published
publishedAt: 2026-09-27T14:41:35+02:00
updatedAt: 2026-09-27T14:46:06+02:00
category: sorties
readingTime: 5
location:
  city: Bordeaux
  department: Gironde
  region: Nouvelle-Aquitaine
topic:
  key: sorties|bordeaux|planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs|2026
  keywords:
    - Planète Préhistorique Bordeaux enfants
    - Bassins des Lumières dinosaures
image:
  src: "/images/articles/2026/09/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs.webp"
  alt: "Intérieur de la base sous-marine de Bordeaux"
sources:
  - title: Bassins des Lumières - Prehistoric Planet
    url: https://www.bassins-lumieres.com/en/prehistoric-planet
  - title: Bassins des Lumières - Billetterie Prehistoric Planet
    url: https://www.bassins-lumieres.com/en/tickets/6a451d25c7196d575468026b
  - title: Bassins des Lumières - Quels sont les tarifs ?
    url: https://www.bassins-lumieres.com/faq/fr/2-horaires-et-tarifs/quels-sont-les-tarifs
  - title: Bassins des Lumières - Les Bassins sont-ils accessibles à tout âge ?
    url: https://www.bassins-lumieres.com/faq/fr/3-votre-visite/les-bassins-des-lumieres-sont-ils-accessibles-a-tout-age
  - title: Bassins des Lumières - Casques anti-bruit
    url: https://www.bassins-lumieres.com/faq/fr/3-votre-visite/est-ce-que-vous-pretez-des-casques-anti-bruit
  - title: Bassins des Lumières - Épilepsie, photosensibilité et vertige
    url: https://www.bassins-lumieres.com/faq/fr/3-votre-visite/les-expositions-sont-elles-convenables-pour-les-personnes-souffrant-depilepsie-etou-de-vertige
  - title: Bassins des Lumières - Accès et accessibilité
    url: https://www.bassins-lumieres.com/fr/acces
  - title: Bassins des Lumières - Table à langer
    url: https://www.bassins-lumieres.com/faq/fr/4-accessibilite/y-a-t-il-une-table-a-langer-a-linterieur
  - title: Bassins des Lumières - Température intérieure
    url: https://www.bassins-lumieres.com/faq/fr/3-votre-visite/quelle-est-la-temperature-a-linterieur-des-bassins-des-lumieres
  - title: Bassins des Lumières - Retard ou avance sur un créneau réservé
    url: https://www.bassins-lumieres.com/faq/fr/3-votre-visite/ja-une-reservation-pour-un-horaire-mais-je-serais-en-retard-ou-en-avance
  - title: Claudine Colin Communication - Planète Préhistorique
    url: https://www.claudinecolin.com/fr/3216-planete-prehistorique-dinosaures-l-experience-immersive
affiliate:
  enabled: true
  type: travel
  destination: Bordeaux
---

Planète Préhistorique est une expérience immersive consacrée aux dinosaures, projetée dans l'ancienne base sous-marine qui abrite les Bassins des Lumières à Bordeaux. À partir du 3 octobre 2026, les familles entrent dans un décor à 360° où les animaux apparaissent à taille monumentale sur les parois et autour des bassins.

Le programme est inspiré de l'univers de la série documentaire *Prehistoric Planet*. La [présentation des Bassins des Lumières](https://www.bassins-lumieres.com/en/prehistoric-planet) annonce notamment T. rex, vélociraptors, ptérosaures géants, mosasaures et Dreadnoughtus, avec des scènes de chasse, de vie familiale et de découverte des fossiles. La bande-son reprend des compositions de Hans Zimmer, Anže Rozman et Kara Talve, avec une narration française de Gérard Lanvin.

## Ce que comprend réellement la visite

<!-- article-image-body:01 -->

![Projections lumineuses dans les Bassins des Lumières à Bordeaux](/images/articles/2026/09/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs-body-01.webp)

*Photo: [\[1\]](https://commons.wikimedia.org/wiki/File:Bassins_des_Lumi%C3%A8res_dans_la_Base_Sous-Marine_(54952344718).jpg) - [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Il ne s'agit pas d'un musée de paléontologie avec des squelettes ou des vitrines. L'intérêt repose sur les projections monumentales, le son et l'impression d'être entouré par les paysages et les animaux préhistoriques.

La billetterie officielle indique qu'un billet donne accès à deux expositions et prévoit environ une heure sur place. C'est une durée assez courte pour envisager la sortie avec des enfants sans devoir bloquer une demi-journée.

Pour les dates, il faut regarder la programmation avec un peu d'attention. Les Bassins présentent actuellement l'expérience « à partir du 3 octobre 2026 » sans afficher de date de fin ferme sur leur programmation. La [communication presse de l'opération](https://www.claudinecolin.com/fr/3216-planete-prehistorique-dinosaures-l-experience-immersive) annonce toutefois une présentation jusqu'au 3 janvier 2027. Si vous visez novembre, décembre ou début janvier, vérifiez donc les créneaux réellement ouverts avant de vous déplacer.

## À partir de quel âge y aller avec un enfant?

Les Bassins des Lumières ne fixent pas d'âge minimum général, mais leur [FAQ recommande la visite à partir de 2 ans](https://www.bassins-lumieres.com/faq/fr/3-votre-visite/les-bassins-des-lumieres-sont-ils-accessibles-a-tout-age). Le lieu est sombre et les projections occupent de très grandes surfaces: un jeune enfant peut donc être impressionné même s'il adore les dinosaures.

Le volume sonore annoncé ne dépasse pas 80 décibels. Pour les plus petits ou les enfants sensibles au bruit, des [casques anti-bruit peuvent être demandés à l'accueil](https://www.bassins-lumieres.com/faq/fr/3-votre-visite/est-ce-que-vous-pretez-des-casques-anti-bruit), selon disponibilité, contre une pièce d'identité.

En raison des effets de lumière, les expositions peuvent [présenter des risques pour les personnes épileptiques, photosensibles ou souffrant de vertige](https://www.bassins-lumieres.com/faq/fr/3-votre-visite/les-expositions-sont-elles-convenables-pour-les-personnes-souffrant-depilepsie-etou-de-vertige). C'est un point à prendre en compte avant de réserver si un membre de la famille est concerné.

## Combien coûte la sortie en famille?

Les [tarifs publiés par les Bassins des Lumières](https://www.bassins-lumieres.com/faq/fr/2-horaires-et-tarifs/quels-sont-les-tarifs) sont de 16 € au plein tarif et 9 € pour les 6-25 ans. Le tarif famille coûte 43 € pour deux adultes et deux jeunes de 6 à 25 ans.

L'entrée est gratuite pour les moins de 6 ans, mais un billet gratuit doit être réservé et un justificatif peut être demandé. Pour une famille composée de deux adultes et de deux enfants ou adolescents payants, le forfait famille est donc l'option à regarder en premier.

Les horaires varient selon les jours et les périodes. La dernière entrée se fait une heure avant la fermeture, ce qui compte ici puisque l'expérience elle-même dure environ une heure.

## Poussette, porte-bébé et température: les détails qui comptent

Les [poussettes sont autorisées](https://www.bassins-lumieres.com/fr/acces), mais le site conseille le porte-bébé pour circuler plus facilement. Une [table à langer est disponible](https://www.bassins-lumieres.com/faq/fr/4-accessibilite/y-a-t-il-une-table-a-langer-a-linterieur) dans les toilettes des femmes entre les alvéoles 3 et 4.

Autre particularité de l'ancienne base sous-marine: la température intérieure suit les saisons. Les Bassins préviennent qu'[il fait frais en hiver](https://www.bassins-lumieres.com/faq/fr/3-votre-visite/quelle-est-la-temperature-a-linterieur-des-bassins-des-lumieres) et que le lieu n'est pas climatisé. Pour une visite d'automne ou d'hiver avec des enfants, mieux vaut donc garder une couche chaude plutôt que se fier à la température extérieure.

## Réserver un créneau sans se piéger

Le billet est associé à une date et une heure. Les [Bassins acceptent une arrivée jusqu'à 30 minutes avant ou après le créneau prévu](https://www.bassins-lumieres.com/faq/fr/3-votre-visite/ja-une-reservation-pour-un-horaire-mais-je-serais-en-retard-ou-en-avance), sauf pour le dernier horaire de l'exposition. En période de forte affluence, l'accès peut néanmoins être refusé si les créneaux suivants sont complets.

Réserver à l'avance reste donc le choix le plus simple, surtout pendant les vacances scolaires. Pour acheter l'entrée en ligne, [Tiqets propose actuellement un billet dédié à Planète Préhistorique](https://www.tiqets.com/fr/activites-attractions-bordeaux-c67101/billets-pour-bassins-des-lumieres-prehistoric-planet-exposition-a-la-decouverte-des-dinosaures-p1137322/). L'offre est actuellement indiquée comme non remboursable et non reprogrammable: vérifiez ces conditions au moment du paiement.

Pour éviter une mauvaise surprise, vérifiez aussi l'horaire de fermeture du jour: arriver à la dernière minute réduit directement le temps disponible pour profiter de l'expérience.

## Venir aux Bassins des Lumières avec des enfants

<!-- article-image-body:02 -->

![Vue extérieure de la base sous-marine de Bordeaux](/images/articles/2026/09/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs-body-02.webp)

*Photo: [Zairon](https://commons.wikimedia.org/wiki/File:Bordeaux_Base_Sous-Marine_Ext%C3%A9rieure_01.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Les Bassins des Lumières se trouvent impasse Brown de Colstoun, dans le quartier de la base sous-marine. En voiture, un parking sécurisé peut être réservé en ligne. Un parking municipal gratuit existe également devant le site, mais les [informations d'accès](https://www.bassins-lumieres.com/fr/acces) préviennent que les places y sont rapidement occupées.

Depuis le centre de Bordeaux, les transports en commun permettent aussi d'éviter la recherche d'une place. Depuis Quinconces, le tram C jusqu'à Ravezies puis le bus 9 vers l'arrêt Base sous-marine laisse environ 500 mètres à parcourir à pied. Depuis Tourny, le bus 5 jusqu'à Bassins à Flot laisse environ 700 mètres de marche.

Si vous prévoyez une autre visite pendant votre passage à Bordeaux, notre guide de la [Cité du Vin en famille](/articles/sorties/cite-du-vin-a-bordeaux-en-famille-tarifs-duree-et-conseils-de-visite/) peut compléter le programme sans repartir sur une autre destination.

## Dormir dans le quartier si vous venez de loin

Pour une famille qui transforme la sortie en séjour à Bordeaux, [B&B HOTEL Bordeaux Bassins à flot](https://www.booking.com/hotel/fr/b-amp-b-bordeaux-bassins-a-flot.fr.html) propose des chambres familiales dans le quartier. Les tarifs dépendent fortement des dates: comparez le prix et les conditions pour votre composition familiale avant de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/cite-du-vin-a-bordeaux-en-famille-tarifs-duree-et-conseils-de-visite/ | Cité du Vin à Bordeaux en famille: tarifs, durée et conseils de visite | sorties | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/sorties/visites-famille-art-deco-bordeaux-2026/ | Art déco à Bordeaux: deux visites en famille au MusBA en 2026 | sorties | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/activites/anatomik-park-a-cap-sciences-a-partir-de-quel-age-et-combien-de-temps-prevoir/ | Anatomik Park à Cap Sciences: à partir de quel âge et combien de temps prévoir? | activites | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/maison/composteur-gratuit-a-bordeaux-metropole-que-choisir-selon-son-logement/ | Composteur gratuit à Bordeaux Métropole: que choisir selon son logement? | maison | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/activites/musee-parc-des-dinosaures-de-meze-en-famille-fossiles-visite-et-conseils/ | Musée-Parc des Dinosaures de Mèze en famille: fossiles, visite et conseils | activites | Mèze, Hérault, Occitanie
- /articles/sorties/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/ | Planète Préhistorique à Bordeaux avec des enfants: âge, durée et tarifs | sorties | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | Famille en fête 2026 en Gironde: ateliers gratuits pour les 0-6 ans | evenements | Saint-Loubès, Gironde, Nouvelle-Aquitaine
- /articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/ | Lire en Poche 2026 à Gradignan avec des enfants: organiser une journée sans perdre les ateliers | evenements | Gradignan, Gironde, Nouvelle-Aquitaine
- /articles/voyages/dune-du-pilat-avec-une-poussette-ce-qu-il-faut-prevoir-avant-la-montee/ | Dune du Pilat avec une poussette: ce qu'il faut prévoir avant la montée | voyages | La Teste-de-Buch, Gironde, Nouvelle-Aquitaine
- /articles/parentalite/bulles-girondines-a-villenave-d-ornon-un-espace-pour-les-parents-et-les-jeunes-enfants/ | Bulles Girondines à Villenave-d'Ornon: un espace pour les parents et les jeunes enfants | parentalite | Villenave-d'Ornon, Gironde, Nouvelle-Aquitaine
- /articles/sorties/chateau-fort-de-sedan-en-famille-parcours-tarifs-et-conseils-de-visite/ | Château fort de Sedan en famille: parcours, tarifs et conseils de visite | sorties | Sedan, Ardennes, Grand Est
- /articles/sorties/grotte-chauvet-2-en-famille-des-animaux-peints-a-l-enquete-scientifique/ | Grotte Chauvet 2 en famille: des animaux peints à l’enquête scientifique | sorties | Vallon-Pont-d’Arc, Ardèche, Auvergne-Rhône-Alpes
- /articles/sorties/grottes-de-gargas-en-famille-voir-les-mains-prehistoriques-et-decouvrir-nestploria/ | Grottes de Gargas en famille: voir les mains préhistoriques et découvrir Nestploria | sorties | Aventignan, Hautes-Pyrénées, Occitanie
- /articles/sorties/aquarium-de-lyon-en-famille-nouveautes-ocean-360-tarifs-et-visite/ | Aquarium de Lyon en famille: nouveautés Océan 360°, tarifs et visite | sorties | La Mulatière, Rhône, Auvergne-Rhône-Alpes
- /articles/sorties/puy-de-dome-en-famille-train-randonnee-ou-les-deux/ | Puy de Dôme en famille: train, randonnée ou les deux? | sorties | Orcines, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/sorties/chateau-de-compiegne-en-famille-que-visiter-et-comment-organiser-la-journee/ | Château de Compiègne en famille: que visiter et comment organiser la journée? | sorties | Compiègne, Oise, Hauts-de-France
- /articles/sorties/halloween-2026-a-france-miniature-en-famille/ | Halloween 2026 à France Miniature avec des enfants: billets et visite | sorties | Élancourt, Yvelines, Île-de-France
- /articles/sorties/villa-ephrussi-de-rothschild-en-famille-que-voir-dans-la-villa-et-les-jardins/ | Villa Ephrussi de Rothschild en famille: que voir dans la villa et les jardins? | sorties | Saint-Jean-Cap-Ferrat, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | 2026-10-12T08:10:30.674Z
- opportunity | /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | 2026-10-19T19:48:02.164Z
- opportunity | /articles/sorties/halloween-2026-a-france-miniature-en-famille/ | 2026-10-08T18:25:52.752Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- refresh | /articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/ | 2026-10-06T12:23:52.449Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
