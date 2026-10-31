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
title: "Château de Fontainebleau depuis Paris en famille : train R, bus 3401 et prix du trajet"
subtitle: Quelle correspondance prendre à Fontainebleau-Avon, quels tickets acheter et comment préparer le retour avec des enfants ?
summary: Depuis Paris Gare de Lyon, rejoignez le château de Fontainebleau par le train R puis le bus 3401. Trajet, tarifs 2026, budget familial, Navigo Liberté+, poussette et retour.
category: voyages
location:
  city: Fontainebleau
  department: Seine-et-Marne
  region: Île-de-France
keywords:
  - Paris Fontainebleau château train R bus 3401 enfants
  - Fontainebleau-Avon Gare de Lyon billets train bus
  - Fontainebleau château sans voiture budget famille poussette
sources:
  - title: Château de Fontainebleau - Informations pratiques et accès
    url: https://www.chateaudefontainebleau.fr/preparez-votre-visite/horaires-et-tarifs/
  - title: Île-de-France Mobilités - Tarifs des transports en 2026
    url: https://www.iledefrance-mobilites.fr/tarifs-titre-de-transport-en-commun-2026
  - title: Île-de-France Mobilités - Correspondances des tickets Métro-Train-RER et Bus-Tram
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/titres-unitaires-tarifs-reduits/correspondances-tickets-metro-train-rer-et-bus-tram
  - title: Île-de-France Mobilités - Navigo Liberté+ et correspondances
    url: https://www.iledefrance-mobilites.fr/correspondances-navigo-liberte-plus
  - title: Île-de-France Mobilités - Tarif réduit des enfants de 4 à moins de 10 ans
    url: https://www.iledefrance-mobilites.fr/titres-et-tarifs/tarifs-reduits/enfants-4-10-ans
  - title: SNCF Transilien - Ligne R, horaires et accessibilité
    url: https://www.transilien.com/fr/page-lignes/ligne-r
  - title: SNCF Transilien - Travaux du second semestre 2026 sur la ligne R
    url: https://maligner.transilien.com/2026/06/04/2e-semestre-de-travaux-2026/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: chateau-de-fontainebleau-depuis-paris-en-famille-train-r-bus-3401-et-budget
  decision: Permettre à une famille de choisir ses titres, de prévoir le changement train-bus, le budget et le retour avant de décider de visiter Fontainebleau sans voiture.
  affiliationPotential: "Billet d'entrée simple du château vérifié sur Tiqets : https://www.tiqets.com/fr/activites-attractions-fontainebleau-c66966/billets-pour-chateau-de-fontainebleau-billet-coupe-file-p974548/ ; comparer avec l'entrée officielle et la gratuité des moins de 18 ans. Pour un week-end, Grand T3-Cœur de Fontainebleau-300 m du château, deux chambres et cuisine, jusqu'à quatre personnes, vérifié sur Booking.com : https://www.booking.com/hotel/fr/f3-coeur-de-fontainebleau.fr.html ; prix, dépôt de garantie et disponibilité à vérifier aux dates choisies."
  gsc:
    retrievedAt: 2026-10-31T02:28:22+01:00
    dataThrough: 2026-10-28
    signal: strong_page
    sourceUrl: /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/
    basis: "La page « Transports à Paris avec des enfants: quel titre choisir pour payer juste? » conserve 3127 impressions sur la semaine récente, avec une position moyenne de 8.693 et 143.4 % de son pic."
---

Visiter le château de Fontainebleau sans voiture depuis Paris est possible avec un seul changement : **train R de Paris Gare de Lyon à Fontainebleau-Avon, puis bus 3401 jusqu'à l'arrêt Château**. Le point à anticiper en famille n'est pas seulement le train : le bus exige un titre distinct avec des tickets classiques, et les travaux ferroviaires peuvent modifier le retour.

## Quel train et quel bus prendre ?

À Paris Gare de Lyon, rejoignez les départs Transilien de la **ligne R** et choisissez un train qui dessert bien **Fontainebleau-Avon**. Les trains concernés peuvent afficher notamment Montereau, Montargis ou Laroche-Migennes comme destination : c'est l'arrêt intermédiaire qui compte. Vérifiez le train précis dans les [horaires de la ligne R](https://www.transilien.com/fr/page-lignes/ligne-r), plutôt que de vous fier à sa seule destination.

À Fontainebleau-Avon, sortez vers la gare routière et prenez le **bus 3401 direction Les Lilas**. Descendez à **Château**, près de l'entrée du domaine. Certains anciens guides parlent du bus 1 : il a été renuméroté 3401. Pour revenir, recherchez le bus 3401 dans le sens de la gare de Fontainebleau-Avon, puis un train R vers Paris Gare de Lyon.

Ne comptez pas sur une fréquence fixe : contrôlez l'itinéraire complet, y compris la correspondance, pour votre jour de visite sur [Île-de-France Mobilités](https://www.iledefrance-mobilites.fr/).

## Combien coûte l'aller-retour en 2026 ?

Avec des **tickets à l'unité**, chaque trajet nécessite un ticket Métro-Train-RER pour le train et un ticket Bus-Tram pour le bus. En 2026, les tarifs sont les suivants :

- **Adulte :** 2,55 € de train + 2,05 € de bus, soit **4,60 € l'aller** et **9,20 € l'aller-retour**.
- **Enfant de 4 à moins de 10 ans :** 1,30 € de train + 1,05 € de bus, soit **2,35 € l'aller** et **4,70 € l'aller-retour**.

Pour **deux adultes et deux enfants de 4 à 9 ans**, le transport revient donc à **27,80 € aller-retour**, sans autre déplacement, achat de support ou billet d'entrée au château. Les moins de 4 ans voyagent gratuitement, sous les conditions du réseau. Les enfants à tarif réduit doivent pouvoir justifier de leur âge en cas de contrôle. Ces prix figurent dans les [tarifs officiels 2026](https://www.iledefrance-mobilites.fr/tarifs-titre-de-transport-en-commun-2026).

**Attention à la correspondance :** un ticket Métro-Train-RER ne couvre pas le bus 3401, même si vous le prenez juste après le train. Le ticket Bus-Tram doit être acheté séparément. La [règle officielle des correspondances](https://www.iledefrance-mobilites.fr/aide-et-contacts/titres-unitaires-tarifs-reduits/correspondances-tickets-metro-train-rer-et-bus-tram) confirme cette distinction.

Si chaque voyageur dispose déjà de **Navigo Liberté+**, le changement train-bus peut, lui, être compris dans un seul trajet facturé, à condition de respecter les délais et les validations. Au tarif 2026, cela représente **2,04 € par sens pour un adulte** ou **1,02 € pour un enfant éligible au tarif réduit**. Le même aller-retour familial reviendrait alors à **12,24 €** si les quatre personnes disposent de leur propre contrat adapté et si chaque correspondance est reconnue. Le tarif réduit Liberté+ exige un passe Navigo, pas un téléphone. Vérifiez les [conditions de correspondance Liberté+](https://www.iledefrance-mobilites.fr/correspondances-navigo-liberte-plus) avant de retenir ce calcul.

Un forfait Navigo déjà détenu peut également couvrir le parcours s'il est valable jusqu'en zone 5 et sur le bus. Pour comparer les forfaits, Navigo Jour et les titres à l'unité sans refaire tous les calculs, consultez notre [guide des transports à Paris avec des enfants](https://www.fam-space.fr/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/).

## Retour et poussette : les vérifications qui changent la journée

**Commencez par chercher le retour**, avant de fixer votre heure d'entrée au château. Repérez le bus depuis l'arrêt Château vers Fontainebleau-Avon, puis le train R pour Paris. Gardez une marge pour une attente de bus, la traversée de la gare et un éventuel changement de quai. Le dernier train et les derniers bus dépendent de la date ; il serait trompeur de donner ici une heure valable toute l'année.

La ligne R connaît des **interruptions pour travaux, y compris certains week-ends**, avec parfois des bus de remplacement et des trajets plus longs. Consultez les [travaux annoncés par Transilien](https://maligner.transilien.com/2026/06/04/2e-semestre-de-travaux-2026/) et l'info trafic le jour du départ. Une journée où la ligne est interrompue n'est pas une journée de trajet ordinaire.

Avec une poussette, vérifiez aussi l'**accessibilité des quais et des ascenseurs** à Paris Gare de Lyon et à Fontainebleau-Avon, ainsi que la possibilité de monter dans le bus 3401 avec votre matériel. La ligne R signale des gares accessibles avec assistance, ce qui ne garantit ni un ascenseur opérationnel à l'instant du voyage ni une place disponible pour une poussette dépliée. Notre [guide Paris avec une poussette](https://www.fam-space.fr/articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/) explique comment vérifier les équipements avant de partir.

## À quelle heure arriver au château avec des enfants ?

Le château est **fermé le mardi**, ainsi que les 1er janvier, 1er mai et 25 décembre. D'octobre à mars, les salles ouvrent de **9 h 30 à 17 h**, avec un dernier accès à **16 h 15** ; le château conseille de commencer la visite avant **14 h** pour disposer d'environ deux heures. D'avril à septembre, la fermeture est à 18 h, avec dernier accès à 17 h 15.

Le billet du circuit principal coûte **17 € au plein tarif** et **15 € au tarif réduit** ; l'entrée est **gratuite pour les moins de 18 ans sur justificatif**. Les visites guidées sont une prestation distincte. Pour deux adultes au plein tarif et deux enfants mineurs, comptez donc **34 € d'entrées**, soit **61,80 € avec les transports à l'unité** calculés plus haut, hors repas et options.

Pour un bébé, prévoyez de laisser une poussette volumineuse au vestiaire : elle n'est pas autorisée dans les circuits intérieurs. Le château propose des consignes gratuites, des poussettes cannes et des porte-bébés ventraux selon disponibilité ; une salle d'allaitement avec table à langer se trouve près des toilettes de la cour d'Honneur. Le domaine dispose aussi de solutions de restauration et d'espaces où pique-niquer. Pour choisir entre exposition et visite guidée, notre article sur [Marie-Antoinette à Fontainebleau avec les enfants](https://www.fam-space.fr/articles/evenements/marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants/) détaille les formules.

## Réserver la visite ou prolonger le séjour

Pour l'entrée simple, le [billet du château de Fontainebleau sur Tiqets](https://www.tiqets.com/fr/activites-attractions-fontainebleau-c66966/billets-pour-chateau-de-fontainebleau-billet-coupe-file-p974548/) donne accès aux Grands Appartements et au musée Napoléon Ier, mais **pas aux visites guidées**. Comparez son prix final au tarif officiel et n'achetez pas de billet payant pour un enfant bénéficiant de la gratuité du circuit principal.

Si vous préférez rester une nuit sur place, le [Grand T3 – Cœur de Fontainebleau sur Booking.com](https://www.booking.com/hotel/fr/f3-coeur-de-fontainebleau.fr.html) propose un appartement annoncé pour **quatre personnes**, avec **deux chambres** et **cuisine équipée avec micro-ondes**. L'annonce mentionne un **dépôt de garantie de 300 €** ; elle donne des informations contradictoires sur la possibilité d'obtenir un lit bébé. Vérifiez directement la configuration, le dépôt, les conditions et la disponibilité aux dates choisies, sans vous fier à la distance « 300 m » présente dans le nom du logement.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/fete-saint-louis-fontainebleau-2026-famille/ | Fête de la Saint-Louis 2026 à Fontainebleau: une journée gratuite en famille au Grand Canal | evenements | Fontainebleau, Seine-et-Marne, Île-de-France
- /articles/evenements/marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants/ | Marie-Antoinette à Fontainebleau 2026-2027: exposition, visites et tarifs en famille | evenements | Fontainebleau, Seine-et-Marne, Île-de-France
- /articles/voyages/disneyland-paris-en-famille-en-2026-combien-de-jours-quel-hotel-et-quel-budget-prevoir/ | Disneyland Paris en famille en 2026: combien de jours, quel hôtel et quel budget prévoir | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/voyages/disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026/ | Disneyland Paris en RER A avec des enfants: trajet et tarifs 2026 | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | Noël des Siècles 2026 à Champs-sur-Marne: billets, budget et horaires en famille | evenements | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/vie-pratique/se-deplacer-a-digne-les-bains-en-famille-bus-train-ou-voiture-de-location/ | Se déplacer à Digne-les-Bains en famille: bus, train ou voiture de location? | vie-pratique | Digne-les-Bains, Alpes-de-Haute-Provence, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/ | Château de Champs-sur-Marne en famille: gratuités, tarifs et dates à éviter | bons-plans | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | Noël à Provins 2026: marché médiéval, animations et visites en famille | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | Grand Noël 2026 à Vaux-le-Vicomte en famille: billets, offre enfant et animations | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | Noël 2026 à Disneyland Paris: faut-il un billet 2 parcs pour voir Arendelle? | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/parentalite/laep-en-seine-et-marne-ou-aller-et-comment-se-passe-une-premiere-visite/ | LAEP en Seine-et-Marne: où aller et comment se passe une première visite? | parentalite | Meaux, Seine-et-Marne, Île-de-France
- /articles/cuisine/visiter-une-cave-d-affinage-de-brie-a-jouarre-ce-qu-il-faut-savoir-avec-des-enfants/ | Visiter une cave d'affinage de brie à Jouarre: ce qu'il faut savoir avec des enfants | cuisine | Jouarre, Seine-et-Marne, Île-de-France
- /articles/maison/couches-lavables-dans-le-nord-de-la-seine-et-marne-acheter-louer-ou-choisir-l-occasion/ | Couches lavables dans le nord de la Seine-et-Marne: acheter, louer ou choisir l'occasion? | maison | Monthyon, Seine-et-Marne, Île-de-France
- /articles/vie-pratique/scol-r-ou-imagine-r-en-seine-et-marne-quel-titre-choisir-pour-la-rentree-2026/ | Scol'R ou imagine R en Seine-et-Marne: quel titre choisir pour la rentrée 2026? | vie-pratique | Melun, Seine-et-Marne, Île-de-France
- /articles/activites/parrot-world-en-famille-tarifs-2026-duree-et-conseils-pour-la-visite/ | Parrot World en famille: tarifs 2026, durée et conseils pour la visite | activites | Crécy-la-Chapelle, Seine-et-Marne, Île-de-France
- /articles/evenements/la-legende-des-chevaliers-a-provins-en-famille-tarifs-horaires-et-conseils-2026/ | La Légende des Chevaliers à Provins en famille: tarifs, horaires et conseils 2026 | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/voyages/week-end-dans-les-pierres-dorees-en-famille-oingt-jarnioux-et-balades/ | Week-end dans les Pierres Dorées en famille: Oingt, Jarnioux et balades | voyages | Rhône, Auvergne-Rhône-Alpes
- /articles/voyages/super-besse-en-famille-premiers-skis-et-activites-sans-ski-en-hiver-2026-2027/ | Super-Besse en famille: premiers skis et activités sans ski en hiver 2026-2027 | voyages | Besse-et-Saint-Anastaise, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/ | Paris avec une poussette: métro, RER, bus ou tram, que choisir ? | voyages | Paris, Paris, Île-de-France
- /articles/voyages/aubrac-lozerien-en-famille-deux-jours-entre-nasbinals-lacs-et-cascade-du-deroc/ | Aubrac lozérien en famille: deux jours entre Nasbinals, lacs et cascade du Déroc | voyages | Nasbinals, Lozère, Occitanie

### Historique Radar lié

- opportunity | /articles/voyages/disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026/ | 2026-10-31T04:29:30.633Z
- opportunity | /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | 2026-10-20T22:29:05.422Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- opportunity | /articles/evenements/marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants/ | 2026-10-27T18:27:41.322Z
- opportunity | /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | 2026-10-02T21:22:46.733Z
- opportunity | /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | 2026-10-24T03:31:56.628Z
- opportunity | /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | 2026-10-26T18:32:56.730Z
- opportunity | /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/ | 2026-10-28T12:27:07.569Z
- opportunity | /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | 2026-10-11T11:27:54.175Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
