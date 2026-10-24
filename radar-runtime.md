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
title: "Noël au château d'Amboise 2026 : visite, nocturnes et tarifs en famille"
subtitle: "Parcours des animaux, soirée du 11 décembre ou chandelles les 26 et 29 décembre : choisissez la bonne formule."
summary: "Du 28 novembre 2026 au 3 janvier 2027, le château royal d'Amboise fête Noël avec un parcours décoré et deux types de soirées. Tarifs, horaires, réservation et accès : ce qui change vraiment avec des enfants."
category: evenements
location:
  city: Amboise
  department: Indre-et-Loire
  region: Centre-Val de Loire
keywords:
  - Noël château royal Amboise 2026
  - Noël royal des animaux Amboise
  - nocturne chandelles Amboise décembre 2026
  - château Amboise Noël tarifs enfants
sources:
  - title: Château royal d'Amboise - Noël au Pays des Châteaux 2026
    url: https://www.chateau-amboise.com/noel-au-pays-des-chateaux/
  - title: Château royal d'Amboise - Soirée prolongée du 11 décembre 2026
    url: https://www.chateau-amboise.com/nocturne-de-noel-au-pays-des-chateaux/
  - title: Château royal d'Amboise - Balades nocturnes aux chandelles spéciale Noël
    url: https://www.chateau-amboise.com/balades-nocturnes-aux-chandelles-speciale-noel/
  - title: Château royal d'Amboise - Visite guidée Le Noël royal des animaux
    url: https://www.chateau-amboise.com/visite-guidee-le-noel-royal-des-animaux/
  - title: Château royal d'Amboise - Tarifs 2026
    url: https://www.chateau-amboise.com/tarifs/
  - title: Château royal d'Amboise - Horaires
    url: https://www.chateau-amboise.com/horaires/
  - title: Château royal d'Amboise - Accès et accessibilité
    url: https://www.chateau-amboise.com/acces-au-chateau-royal-damboise/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles
  decision: Choisir la visite décorée en journée, la prolongation du 11 décembre ou une nocturne aux chandelles des 26 et 29 décembre selon l'âge des enfants, le budget, l'accessibilité et les réservations nécessaires.
  affiliationPotential: Billet d'entrée de jour au château royal d'Amboise vérifié sur Tiqets (également présent sur GetYourGuide), sans présumer qu'il donne accès aux nocturnes spéciales ; pour un séjour, suites familiales du Clos d'Amboise vérifiées sur Booking.com, sous réserve de disponibilité aux dates choisies.
  gsc:
    retrievedAt: 2026-10-24T02:34:28+02:00
    dataThrough: 2026-10-21
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Château royal d'Amboise - Noël au Pays des Châteaux 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-03T17:45:00+01:00
---

Au château royal d'Amboise, **« Le Noël royal des animaux »** se découvre du **28 novembre 2026 au 3 janvier 2027**, sauf les **25 décembre et 1er janvier**, jours de fermeture. Les animaux de la cour imaginaire ont investi les décors du logis royal : oiseaux, cerfs, fauves et petits rongeurs composent une visite de Noël pensée pour les familles. Mais une visite classique, l'ouverture tardive du 11 décembre et les deux soirées aux chandelles ne donnent pas droit à la même expérience.

## Quel créneau choisir avec des enfants ?

- **Pour découvrir les décors à son rythme :** prenez une entrée ordinaire de jour. Le parcours de Noël est inclus, sans supplément spécifique.
- **Pour voir le château décoré à la nuit tombée sans payer une soirée spéciale :** venez le **vendredi 11 décembre**. Le parcours reste celui de la journée, **sans chandelles**, et le tarif habituel s'applique.
- **Pour les salles éclairées à la bougie :** choisissez le **26 ou le 29 décembre**, avec **un billet nocturne distinct et une réservation obligatoire**. Le parc n'est alors pas ouvert.

La journée convient davantage aux familles avec de jeunes enfants qui veulent garder de la souplesse. Les chandelles offrent une ambiance différente, mais imposent une heure d'arrivée précise et une sortie tardive.

## Visite de jour : prix, horaires et parcours de Noël

En 2026, l'entrée ordinaire coûte **17,30 € par adulte**, **11 € de 7 à 18 ans** et reste **gratuite avant 7 ans**. Pour deux adultes et deux enfants payants, comptez donc **56,60 €** au tarif public, avant réductions éventuelles. Le billet comprend aussi l'HistoPad du château. Une réduction de 2 € par enfant payant est annoncée pour les familles nombreuses, sous conditions.

Le château affiche généralement une billetterie ouverte jusqu'à **17 h** sur la période de Noël, avec une **pause de 12 h 30 à 14 h** sur une partie de novembre et de décembre ; à l'approche des fêtes, l'ouverture devient continue. Le domaine ferme normalement **45 minutes après la billetterie**. Consultez les [horaires officiels selon votre date](https://www.chateau-amboise.com/horaires/) : arriver à 16 h 30 laisse peu de temps pour profiter des salles et des décors.

Le parcours thématique est bien **inclus dans l'entrée ordinaire**, comme le confirme le [programme de Noël du château](https://www.chateau-amboise.com/noel-au-pays-des-chateaux/). Si vous réservez auprès d'un revendeur, vérifiez que le billet proposé est utilisable à la date choisie : les offres générales consultées ne confirment pas explicitement l'accès au parcours pour les dates de Noël 2026.

## Le 11 décembre : une soirée plus longue, pas une visite aux chandelles

Le **vendredi 11 décembre 2026**, la **billetterie ferme à 19 h** et le **château à 20 h**. Il n'y a **pas de réservation nécessaire** pour cette prolongation et le billet ordinaire suffit. En revanche, le château précise qu'aucune installation de chandelles ou de bougies n'est prévue ce soir-là : il s'agit de parcourir les décors habituels plus tard, et non de vivre la soirée spéciale de fin décembre.

C'est un bon compromis si les enfants veulent voir l'ambiance de Noël à la nuit tombée sans réserver de créneau. Prévoyez toutefois vêtements chauds et dîner après la visite, ou avant d'entrer.

## Les 26 et 29 décembre : une réservation spécifique pour les chandelles

Ces deux soirées transforment l'atmosphère des **salles du logis royal** avec des centaines de bougies. Les entrées sont réparties à **18 h 30, 19 h, 19 h 30 et 20 h**. On ne peut accéder au château **qu'au créneau sélectionné lors de la réservation**.

Les tarifs annoncés sont **16,50 € par adulte**, **13,50 € par étudiant**, **11,50 € par enfant** et **7,50 € par abonné**. Le château ne précise pas sur cette page la tranche d'âge du tarif enfant ni les éventuelles conditions pour les moins de 7 ans : vérifiez-les avant de payer. **La gratuité des moins de 7 ans valable en journée ne doit pas être supposée pour cette formule.** De même, n'utilisez pas un billet ordinaire de jour en pensant qu'il ouvre l'accès à cette soirée.

Autres différences importantes : **le parc est fermé**, les **animaux ne sont pas admis** et le château signale un **accès difficile en fauteuil roulant**. Pour les modalités et créneaux encore proposés, consultez la [présentation officielle des nocturnes aux chandelles](https://www.chateau-amboise.com/balades-nocturnes-aux-chandelles-speciale-noel/). Si vous venez avec un bébé ou une poussette, renseignez-vous directement sur la circulation dans les salles pendant la soirée avant de réserver.

## Une visite guidée incluse, mais à réserver

Du **19 décembre 2026 au 3 janvier 2027**, sauf les deux jours de fermeture, une visite guidée **« Le Noël royal des animaux »** est annoncée **chaque jour à 11 h 30**, pour **une heure**. Elle présente les traditions de Noël et les animaux associés à la cour. **Elle est comprise dans le billet d'entrée, mais nécessite une réservation.**

Au moment de cette vérification, le château indiquait que **l'ouverture des réservations en ligne était encore à venir**. Ne considérez donc pas la place acquise avec le seul billet d'entrée ; surveillez la [fiche de la visite guidée](https://www.chateau-amboise.com/visite-guidee-le-noel-royal-des-animaux/) si ce rendez-vous compte dans votre programme.

## Venir au château et anticiper l'accessibilité

L'entrée publique se trouve **montée de l'Émir Abd El Kader**, depuis la **place Michel Debré**. La gare d'Amboise est annoncée à environ **10 minutes à pied** de l'entrée ; vérifiez les horaires de retour, particulièrement après une nocturne. Pour la voiture, repérez votre stationnement en centre-ville avant d'arriver. Une **bagagerie payante** se trouve dans la rampe d'accès, avant la billetterie.

En journée, une entrée adaptée existe à la **porte des Lions, rue Augustin Thierry**, mais le château précise qu'elle **n'est pas accessible à pied en fauteuil** : il faut y venir en véhicule et être accompagné pour certaines pentes. Les visiteurs avec poussette, sans situation de handicap, utilisent l'entrée publique principale. Ces dispositions ordinaires ne garantissent pas l'accessibilité des soirées aux chandelles, pour lesquelles l'organisateur signale des difficultés particulières.

## Plusieurs châteaux ou une nuit sur place ?

Si vous prévoyez d'autres monuments, distinguez le **pass « Noël au Pays des Châteaux »** évoqué par l'organisateur des billets propres aux nocturnes : vérifiez précisément les sites et visites inclus avant achat. Le [guide Amboise City Pass 2026](/articles/bons-plans/amboise-city-pass-2026-quand-devient-il-vraiment-rentable/) explique comment comparer un pass et des billets séparés, mais **ce City Pass 2026 s'arrête au 31 octobre** : il ne faut pas le prendre pour un pass valable pendant les fêtes.

Pour éviter un retour long après les chandelles, **Le Clos d'Amboise**, au centre-ville, propose notamment des chambres et suites familiales. Vous pouvez [examiner ses catégories de chambres et les disponibilités sur Booking.com](https://www.booking.com/hotel/fr/le-clos-damboise.fr.html) pour la nuit souhaitée ; aucune disponibilité en décembre n'est garantie. Si vous hésitez entre hôtel et location pour plusieurs jours, le guide [maison de vacances à Amboise avec des enfants](/articles/maison/maison-de-vacances-a-amboise-avec-des-enfants-7-criteres-pour-bien-choisir/) détaille les critères pratiques. Pour une autre expérience de Noël dans la région, le [château de Cheverny et son mapping](/articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/) proposent une sortie différente.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/cuisine/marche-d-amboise-composer-un-pique-nique-tourangeau-avec-des-enfants/ | Marché d'Amboise: composer un pique-nique tourangeau avec des enfants | cuisine | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/maison/maison-de-vacances-a-amboise-avec-des-enfants-7-criteres-pour-bien-choisir/ | Maison de vacances à Amboise avec des enfants: 7 critères pour bien choisir | maison | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/sorties/chateau-de-chenonceau-en-famille-billets-duree-et-conseils-avec-des-enfants/ | Château de Chenonceau en famille: billets, durée et conseils avec des enfants | sorties | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/bons-plans/amboise-city-pass-2026-quand-devient-il-vraiment-rentable/ | Amboise City Pass 2026: quand devient-il vraiment rentable? | bons-plans | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | Monument Jeu d'enfant 2026 à Azay-le-Rideau: animaux cachés et contes en famille | evenements | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/activites/chateau-de-biron-avec-des-enfants-tarifs-et-conseils-pour-la-visite/ | Château de Biron avec des enfants: tarifs et conseils pour la visite | activites | Biron, Dordogne, Nouvelle-Aquitaine
- /articles/sorties/camp-batisseurs-chinon-famille-2026/ | Camp des bâtisseurs à Chinon: une immersion médiévale en famille jusqu’au 28 août | sorties | Chinon, Indre-et-Loire, Centre-Val de Loire
- /articles/voyages/azay-le-rideau-en-famille-une-journee-entre-chateau-et-troglodytes/ | Azay-le-Rideau en famille: une journée entre château et troglodytes | voyages | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/sorties/villandry-en-famille-jardins-seuls-ou-chateau-et-jardins/ | Villandry en famille: jardins seuls ou château et jardins ? | sorties | Villandry, Indre-et-Loire, Centre-Val de Loire
- /articles/parentalite/laep-en-indre-et-loire-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP en Indre-et-Loire: où aller avec un enfant de moins de 6 ans | parentalite | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/vie-pratique/transport-scolaire-remi-en-indre-et-loire-que-faire-apres-la-date-limite-2026/ | Transport scolaire Rémi en Indre-et-Loire: que faire après la date limite 2026 | vie-pratique | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | Noël au château de Cheverny 2026: billets, mapping et visite en famille | evenements | Cheverny, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | Foire aux santons de Marseille 2026: dates, inauguration et visite en famille | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | Bédéciné 2026 à Illzach en famille: ateliers, spectacles et billets | evenements | Illzach, Haut-Rhin, Grand Est
- /articles/evenements/automne-des-gones-2026-a-lyon-quels-ateliers-gratuits-choisir-avec-les-enfants/ | Automne des gones 2026 à Lyon: ateliers et sorties gratuites en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | Créations & savoir-faire 2026 à Paris en famille: billets, ateliers et dates | evenements | Paris, Paris, Île-de-France
- /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | MonstroZoo 2026-2027 à Beauval: parcours inclus, visite guidée et tarifs | evenements | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | Halloween 2026 à Mini World Lyon: la Chasse aux 31 Méchants en famille | evenements | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | Luminescences 2026-2027 au zoo d'Amnéville: billets, tarifs et visite en famille | evenements | Amnéville, Moselle, Grand Est
- /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | Salon du Cheval de Paris 2026 en famille: animations, jumping et billets | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne

### Historique Radar lié

- opportunity | /articles/evenements/automne-des-gones-2026-a-lyon-quels-ateliers-gratuits-choisir-avec-les-enfants/ | 2026-10-23T09:31:27.871Z
- opportunity | /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | 2026-10-23T12:33:36.649Z
- opportunity | /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | 2026-10-23T06:21:12.326Z
- opportunity | /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | 2026-10-23T15:29:55.218Z
- opportunity | /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | 2026-10-22T12:58:21.691Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- opportunity | /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | 2026-10-22T09:37:18.560Z
- opportunity | /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | 2026-10-22T15:49:20.816Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | 2026-10-11T16:33:21.125Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | 2026-10-23T19:58:30.214Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
