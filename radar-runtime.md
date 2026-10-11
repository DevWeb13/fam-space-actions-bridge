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
- contrôle que la logique d'affiliation de ces règles partenaires fournies dans ce runtime a bien été appliquée, que les offres retenues sont encore pertinentes et que leur intégration se lit naturellement; pour une sortie, une activité, une visite, un événement ou un voyage sans affiliation, vérifie qu'aucune piste normale n'a été oubliée;
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
title: "Monument Jeu d'enfant 2026 à Azay-le-Rideau: animaux cachés et contes en famille"
subtitle: Les 17 et 18 octobre, une enquête et un atelier dès 5 ans; des contes dès 3 ans le samedi
summary: Au château d'Azay-le-Rideau, Monument Jeu d'enfant propose les 17 et 18 octobre une chasse aux animaux de Karen Knorr et un atelier créatif, avec des contes le samedi. Horaires, tarifs et informations familiales.
category: evenements
location:
  city: Azay-le-Rideau
  department: Indre-et-Loire
  region: Centre-Val de Loire
keywords:
  - Monument Jeu d'enfant Azay-le-Rideau 2026
  - château Azay-le-Rideau 17 18 octobre animaux cachés
  - atelier animaux Karen Knorr enfants 5 ans
  - contes Azay-le-Rideau 17 octobre dès 3 ans
sources:
  - title: Château d'Azay-le-Rideau — Monument Jeu d'enfant 2026
    url: https://www.azay-le-rideau.fr/agenda/agenda-2026/monument-jeu-d-enfant
    accessedAt: 2026-10-11
  - title: Château d'Azay-le-Rideau — Informations pratiques et tarifs
    url: https://www.azay-le-rideau.fr/visiter/informations-pratiques
    accessedAt: 2026-10-11
  - title: Château d'Azay-le-Rideau — FAQ billetterie et accès
    url: https://www.azay-le-rideau.fr/visiter/faq-toutes-les-reponses-a-vos-questions
    accessedAt: 2026-10-11
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes
  decision: Choisir entre contes dès 3 ans le samedi et enquête/atelier dès 5 ans les deux jours, connaître les horaires réellement proposés, les conditions d'entrée et la préparation pratique avant de venir en famille.
  affiliationPotential: "Entrée à 13 € pour un adulte en octobre, gratuité enfants; billet d'entrée officiel du château (https://tickets.monuments-nationaux.fr/fr-FR/familles?site=2129766360470401831) comme action principale. Aucun billet partenaire exact vérifié pour les animations Monument Jeu d'enfant: ne pas opposer une offre Tiqets de visite ordinaire à une réservation d'atelier non confirmée. Hébergement de week-end précis vérifié sur Booking.com: Le grand nid charmant, Azay-le-Rideau, appartement de deux chambres avec cuisine, environ cinq minutes à pied du château (https://www.booking.com/hotel/fr/le-grand-nid-charmant.html); vérifier disponibilité et prix aux dates choisies."
  gsc:
    retrievedAt: 2026-10-11T05:37:00.000Z
    dataThrough: 2026-10-08
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Château d'Azay-le-Rideau — Monument Jeu d'enfant 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-10-18
---

Les **samedi 17 et dimanche 18 octobre 2026**, le château d'Azay-le-Rideau, en Touraine, accueille **Monument Jeu d'enfant**. Au programme: une enquête dans le château pour retrouver des animaux cachés dans les photographies de Karen Knorr, suivie d'un atelier créatif **dès 5 ans**. Le samedi, une lecture de contes autour des animaux s'ajoute à la visite **dès 3 ans**.

Les deux activités ne s'adressent pas exactement aux mêmes âges, et les contes ne sont annoncés que le samedi. Voici comment choisir la journée et préparer la visite.

## L'enquête et l'atelier animaux: samedi et dimanche dès 5 ans

Le [programme officiel du château](https://www.azay-le-rideau.fr/agenda/agenda-2026/monument-jeu-d-enfant) invite les familles à chercher, à l'aide d'un **livret-jeu remis à l'arrivée**, les animaux qui apparaissent dans les photographies de **Karen Knorr** exposées au premier étage.

Cette première partie se parcourt **en autonomie**. Ensuite, dans une salle pédagogique, les enfants imaginent leur propre animal, réel ou fantastique, avec l'aide des médiatrices du château.

L'activité est annoncée **les 17 et 18 octobre**, jusqu'à **16 h 30**, mais **le site officiel se contredit sur l'heure de début**: son encadré pratique indique **14 h**, tandis que la présentation détaillée mentionne **14 h 30**. Le dernier accès annoncé pour cet événement est à **16 h**. Pour arriver au bon moment de l'atelier, il faut demander confirmation au château au **02 47 45 42 04**, surtout si vous avez prévu de venir spécialement pour cette animation.

## Les contes: samedi seulement dès 3 ans

Le **samedi 17 octobre, de 14 h 30 à 15 h 30**, Hélène, libraire à Azay-le-Rideau, raconte des histoires dans lesquelles les animaux occupent une place importante. Le château indique que l'on peut **rejoindre la lecture en cours**.

C'est l'animation à privilégier pour un enfant de **3 ou 4 ans** qui n'a pas encore l'âge requis pour l'enquête-atelier. Avec un enfant de **5 ans ou plus**, le samedi permet d'envisager les deux propositions, sans garantie de pouvoir suivre l'intégralité de l'atelier et des contes qui se déroulent sur des horaires proches.

Le **dimanche 18 octobre**, aucune lecture de contes n'est annoncée: l'enquête et l'atelier restent au programme.

## Quel prix prévoir? Faut-il réserver?

Le château affiche **13 € par adulte** pour l'événement et la gratuité pour les **moins de 26 ans**. Pour préparer le budget familial, la [page des tarifs](https://www.azay-le-rideau.fr/visiter/informations-pratiques) confirme une entrée ordinaire gratuite pour tous les **moins de 18 ans**. En revanche, la gratuité des **18-25 ans** dépend normalement de conditions de nationalité ou de résidence; demandez confirmation si un jeune adulte vous accompagne, car l'annonce de l'événement est moins précise.

Pour deux adultes au plein tarif et deux enfants de moins de 18 ans, le **budget d'entrée est donc de 26 €**.

La page de l'événement ne mentionne **ni supplément spécifique pour l'atelier ni réservation obligatoire à un créneau**. N'en déduisez pas pour autant qu'une place à l'atelier est garantie: renseignez-vous auprès du monument sur les modalités de participation. Le [billet d'entrée du château](https://tickets.monuments-nationaux.fr/fr-FR/familles?site=2129766360470401831) peut être acheté à l'avance; la [FAQ officielle](https://www.azay-le-rideau.fr/visiter/faq-toutes-les-reponses-a-vos-questions) précise qu'une visite individuelle peut également être payée sur place.

## Poussette, goûter et accès: les détails utiles

En octobre, le monument est ouvert **de 10 h à 17 h 15**, mais pour participer à Monument Jeu d'enfant, retenez bien la **limite spécifique de 16 h** indiquée sur la page de l'événement.

Les **poussettes sont autorisées dans le parc, mais pas à l'intérieur du château**. Elles doivent être laissées dans un espace **non surveillé** près de l'escalier d'honneur. Avec un bébé, un porte-bébé sera donc plus pratique pour les salles et l'enquête à l'étage. Une **table à langer** et un **chauffe-biberon** sont disponibles sur place. Pour les visiteurs ayant des difficultés de mobilité, vérifiez directement quelles parties du parcours de l'événement leur sont accessibles: le monument n'est que partiellement accessible.

Le **pique-nique est interdit dans l'enceinte**; la cour avant la billetterie permet en revanche de manger son repas apporté. Le salon de thé « Le Lavoir » n'est normalement ouvert que de Pâques à fin septembre: ne comptez donc pas sur son ouverture pour ce week-end d'octobre.

Le château se situe au **19 rue Balzac, 37190 Azay-le-Rideau**. À proximité, le **parking du Château est payant**, avec environ **5 à 10 minutes de marche** jusqu'à l'entrée; des places gratuites plus éloignées existent dans le village. En train, la gare d'**Azay-le-Rideau**, sur la ligne Tours-Chinon, se trouve à **2,1 km à pied** du monument.

## Prolonger la visite dans la région

Pour un week-end, [Le grand nid charmant à Azay-le-Rideau](https://www.booking.com/hotel/fr/le-grand-nid-charmant.fr.html) est un appartement entier avec **deux chambres et une cuisine**, annoncé à environ **500 m du château**. Les disponibilités et les tarifs pour le week-end du 17 octobre restent à vérifier.

Si vous voulez compléter la journée avec le parc et une visite des habitations troglodytiques voisines, notre guide [Azay-le-Rideau en famille: une journée entre château et troglodytes](https://www.fam-space.fr/articles/voyages/azay-le-rideau-en-famille-une-journee-entre-chateau-et-troglodytes/) détaille cet itinéraire et les horaires des Goupillières.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/voyages/azay-le-rideau-en-famille-une-journee-entre-chateau-et-troglodytes/ | Azay-le-Rideau en famille: une journée entre château et troglodytes | voyages | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | Monument jeu d'enfant 2026 au château de Vincennes: quel atelier choisir ? | evenements | Vincennes, Val-de-Marne, Île-de-France
- /articles/sorties/chateau-de-chenonceau-en-famille-billets-duree-et-conseils-avec-des-enfants/ | Château de Chenonceau en famille: billets, durée et conseils avec des enfants | sorties | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/monument-jeu-d-enfant-2026-comment-choisir-une-visite-adaptee-a-l-age-des-enfants/ | Monument jeu d'enfant 2026: comment choisir une visite adaptée à l'âge des enfants | evenements
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | Monument Jeu d’Enfant au château d’Angers: dragons et ateliers le 17 octobre 2026 | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/sorties/camp-batisseurs-chinon-famille-2026/ | Camp des bâtisseurs à Chinon: une immersion médiévale en famille jusqu’au 28 août | sorties | Chinon, Indre-et-Loire, Centre-Val de Loire
- /articles/sorties/vacances-de-la-toussaint-2026-au-musee-carnavalet-quelle-activite-choisir-selon-l-age/ | Vacances de la Toussaint 2026 au musée Carnavalet: activités en famille dès 4 ans | sorties | Paris, Paris, Île-de-France
- /articles/sorties/villandry-en-famille-jardins-seuls-ou-chateau-et-jardins/ | Villandry en famille: jardins seuls ou château et jardins ? | sorties | Villandry, Indre-et-Loire, Centre-Val de Loire
- /articles/bons-plans/amboise-city-pass-2026-quand-devient-il-vraiment-rentable/ | Amboise City Pass 2026: quand devient-il vraiment rentable? | bons-plans | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/parentalite/laep-en-indre-et-loire-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP en Indre-et-Loire: où aller avec un enfant de moins de 6 ans | parentalite | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/cuisine/marche-d-amboise-composer-un-pique-nique-tourangeau-avec-des-enfants/ | Marché d'Amboise: composer un pique-nique tourangeau avec des enfants | cuisine | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/maison/maison-de-vacances-a-amboise-avec-des-enfants-7-criteres-pour-bien-choisir/ | Maison de vacances à Amboise avec des enfants: 7 critères pour bien choisir | maison | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/vie-pratique/transport-scolaire-remi-en-indre-et-loire-que-faire-apres-la-date-limite-2026/ | Transport scolaire Rémi en Indre-et-Loire: que faire après la date limite 2026 | vie-pratique | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | Nuit des Châteaux 2026 à Tanlay: visites aux bougies les 16 et 17 octobre | evenements | Tanlay, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | Monument jeu d’enfant à Aigues-Mortes: mini-sacre et escape game les 17 et 18 octobre 2026 | evenements | Aigues-Mortes, Gard, Occitanie
- /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | Festival Lumière 2026 avec des enfants: Chaplin, Laurel & Hardy et les bons billets | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-au-chateau-de-grignan-dates-tarifs-et-visite-en-famille/ | Noël 2026 au château de Grignan: dates, tarifs et visite en famille | evenements | Grignan, Drôme, Auvergne-Rhône-Alpes
- /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | Día de los Muertos 2026 au Jardin d’Acclimatation: programme, billets et tailles | evenements | Paris, Paris, Île-de-France
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | Fête de la mer 2026 à Marseille avec des enfants: quelle escale choisir? | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/ | Marché de Noël de Lille 2026 en famille: village, Grande Roue et infos pratiques | evenements | Lille, Nord, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | 2026-10-08T14:56:52.034Z
- opportunity | /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | 2026-10-10T15:40:28.185Z
- opportunity | /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | 2026-10-06T16:58:51.946Z
- opportunity | /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | 2026-10-06T19:20:39.093Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | 2026-10-10T17:38:43.806Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | 2026-10-10T08:38:56.921Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | 2026-10-09T18:35:04.031Z
- opportunity | /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | 2026-10-11T09:17:01.561Z
- opportunity | /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | 2026-10-09T14:37:47.734Z
- opportunity | /articles/sorties/vacances-de-la-toussaint-2026-au-musee-carnavalet-quelle-activite-choisir-selon-l-age/ | 2026-10-07T12:23:23.783Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
