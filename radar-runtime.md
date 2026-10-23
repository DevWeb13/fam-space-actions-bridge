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
title: "Foire aux santons de Marseille 2026 : dates, inauguration et animations en famille"
subtitle: Entrée gratuite sur le quai du Port du 14 novembre au 3 janvier, avec une inauguration le dimanche 15 novembre
summary: La 224e Foire aux santons de Marseille ouvre du 14 novembre 2026 au 3 janvier 2027 sur le Vieux-Port. Horaires, inauguration, ateliers annoncés et visite avec des enfants.
category: evenements
location:
  city: Marseille
  department: Bouches-du-Rhône
  region: Provence-Alpes-Côte d'Azur
keywords:
  - foire aux santons Marseille 2026 enfants
  - foire aux santons Marseille horaires entrée gratuite
  - inauguration foire santons Marseille 15 novembre
  - atelier santon enfants Marseille 2026
sources:
  - title: Foire aux Santons de Marseille - Dates, horaires, inauguration et exposants
    url: https://foire-aux-santons-de-marseille.fr/
  - title: Foire aux Santons de Marseille - Animations annoncées
    url: https://foire-aux-santons-de-marseille.fr/les-animations/
  - title: Office de tourisme de Marseille - 224e Foire aux santons 2026
    url: https://www.marseille-tourisme.com/en/vivez-marseille/events-in-marseille/224e-foire-aux-santons-et-aux-creches-de-marseille-marseille-2eme-en-6851848/
  - title: Office de tourisme de Marseille - Foire aux santons et accès
    url: https://www.marseille-tourisme.com/vivez-marseille-blog/le-blog-marseille-a-la-carte/foire-aux-santons-et-santonniers-a-marseille/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir
  decision: Permettre aux familles de décider si elles viennent à l'inauguration du dimanche 15 novembre ou un autre jour, de préparer une visite gratuite au quai du Port et de savoir quelles animations enfants sont réellement confirmées avant de se déplacer.
  affiliationPotential: "La foire est en accès libre : aucun billet partenaire à proposer pour l'entrée. Pour une famille de passage, Staycity Aparthotels Marseille Centre Vieux Port est référencé sur Booking.com (https://www.booking.com/hotel/fr/staycity-aparthotels-centre-vieux-port.fr.html), avec kitchenette et logements familiaux à environ 550 m du port ; vérifier capacité selon les âges, prix et disponibilité aux dates du séjour."
  gsc:
    retrievedAt: 2026-10-23T08:27:47+02:00
    dataThrough: 2026-10-20
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Foire aux Santons de Marseille - Organisateur, dates et inauguration 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-03T19:00:00+01:00
---

La **224e Foire aux santons de Marseille** se tiendra **du samedi 14 novembre 2026 au dimanche 3 janvier 2027**, sur le **quai du Port, au Vieux-Port**. L'entrée est **gratuite** : on peut simplement venir admirer les figurines et les crèches provençales, sans rien acheter. Pour une sortie avec des enfants, deux options se distinguent : assister à l'inauguration folklorique du **dimanche 15 novembre** ou privilégier une promenade plus libre un autre jour.

## Inauguration du 15 novembre ou visite ordinaire ?

**Le samedi 14 novembre**, les stands ouvrent dès **10 h**. C'est le premier jour pour découvrir les santons, sans le cérémonial du lendemain.

**Le dimanche 15 novembre**, l'organisateur annonce une inauguration en plusieurs temps :
- **10 h 30** : messe des santonniers en provençal à l'église **Saint-Ferréol-les-Augustins**.
- **Vers midi** : coupure symbolique du ruban à l'entrée de la foire.
- **Ensuite** : visite des stands par les élus, accompagnée de **groupes folkloriques**.

Cette journée convient aux familles qui souhaitent voir les traditions provençales en musique. Si les enfants veulent surtout observer les santons tranquillement, une visite un autre jour laisse davantage de liberté pour parcourir les chalets à leur rythme.

## Que voir et faire avec des enfants ?

La foire, créée à Marseille en **1803**, rassemble **21 santonniers selon l'organisateur**. Les enfants peuvent repérer les personnages de la crèche, les animaux, les métiers traditionnels ou les décors miniatures. Les stands mettent en valeur le travail des artisans ; le label **« Fabrication Provence »**, lorsqu'il est affiché, correspond à un engagement de fabrication en Provence.

La [page des animations de l'organisateur](https://foire-aux-santons-de-marseille.fr/les-animations/) présente également :
- un **atelier du santon** où les enfants peuvent fabriquer une figurine à emporter, avec des séances annoncées **le mercredi à 11 h, 14 h 30 et 16 h** ;
- des **groupes de musique et de danse folklorique** les mercredis et week-ends ;
- un espace **« Poste du Père Noël »** pour rédiger une lettre.

**Attention : cette page d'animations ne précise pas explicitement que tous ces créneaux s'appliquent à l'édition 2026.** Les âges admis, le tarif éventuel, les inscriptions et les places disponibles pour l'atelier ne sont pas détaillés. Si la fabrication d'un santon est la raison principale de votre venue, demandez confirmation à l'organisateur avant de promettre l'activité aux enfants. Les stands et l'accès gratuit à la foire, eux, sont bien annoncés pour 2026-2027.

## Horaires, adresse et accès

La foire est installée **quai du Port, sur le Vieux-Port de Marseille**. Elle ouvre :
- **du dimanche au jeudi : de 10 h à 19 h** ;
- **les vendredis et samedis : de 10 h à 20 h**.

Pour arriver en transports en commun, prenez le **métro M1, arrêt Vieux-Port**. L'[Office de tourisme de Marseille](https://www.marseille-tourisme.com/en/vivez-marseille/events-in-marseille/224e-foire-aux-santons-et-aux-creches-de-marseille-marseille-2eme-en-6851848/) classe la manifestation comme **accessible aux personnes en situation de handicap** et signale une station de métro à proximité. En poussette, le parcours se fait dans un espace de foire extérieur : prévoyez simplement de circuler entre les stands et d'adapter la visite à l'affluence, surtout le jour de l'inauguration. Les conditions précises de circulation et les éventuels équipements pour bébés ne sont pas détaillés.

**Le budget peut rester à zéro euro pour l'entrée.** Les santons, accessoires, gourmandises et éventuelles activités payantes sont des dépenses facultatives, dont les prix dépendent des exposants. Aucune réservation n'est nécessaire pour accéder librement à la foire.

## Prolonger la sortie autour du Vieux-Port

Si vous venez passer plusieurs jours à Marseille, notre [itinéraire de trois jours en famille autour du Vieux-Port](/articles/voyages/marseille-en-famille-pendant-3-jours-itineraire-simple-autour-du-vieux-port/) propose d'autres visites à proximité, sans devoir organiser tout le séjour autour de la foire.

Pour dormir au centre-ville, le [Staycity Aparthotels Marseille Centre Vieux Port sur Booking.com](https://www.booking.com/hotel/fr/staycity-aparthotels-centre-vieux-port.fr.html) propose des studios et appartements avec **kitchenette**, à environ **550 m du port**. Les configurations varient selon les logements : vérifiez la capacité autorisée pour les adultes et les enfants, ainsi que le prix total, les disponibilités et les conditions d'annulation aux dates du séjour.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | Fête de la mer 2026 à Marseille avec des enfants: quelle escale choisir? | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | Foire du livre de Brive 2026 en famille: dates, auteurs jeunesse et conseils de visite | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine
- /articles/evenements/herofestival-marseille-2026-en-famille-billets-gratuite-enfants-et-conseils/ | HeroFestival Marseille 2026 en famille: billets, gratuité enfants et conseils | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/sorties/mucem-en-famille-billets-gratuites-et-conseils-pour-la-visite/ | Mucem Marseille en famille: tarifs 2026, billets et gratuités | sorties | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/maison/dechets-tri-mobile-a-marseille-quoi-apporter-sans-aller-a-la-decheterie/ | Déchets’tri mobile à Marseille: quoi apporter sans aller à la déchèterie? | maison | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/activites/preau-des-accoules-a-marseille-faut-il-reserver-avant-de-venir-avec-des-enfants/ | Préau des Accoules à Marseille: faut-il réserver avant de venir avec des enfants? | activites | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/sorties/escale-borely-avec-des-enfants-du-david-au-bowl-a-pied/ | Escale Borély avec des enfants: du David au Bowl à pied | sorties | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/vie-pratique/consigne-a-marseille-saint-charles-avec-des-enfants-ou-laisser-valises-et-poussette/ | Consigne à Marseille Saint-Charles avec des enfants: où laisser valises et poussette? | vie-pratique | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/mucem-a-la-toussaint-2026-quelle-activite-en-ribambelle-choisir-selon-l-age/ | Mucem à la Toussaint 2026: le programme En Ribambelle avec des enfants | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/sorties/cosquer-mediterranee-avec-des-enfants-age-poussette-tarifs/ | Cosquer Méditerranée avec des enfants: que peut-on visiter selon leur âge? | sorties | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/voyages/marseille-en-famille-pendant-3-jours-itineraire-simple-autour-du-vieux-port/ | Marseille en famille pendant 3 jours: itinéraire simple autour du Vieux-Port | voyages | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/ete-marseillais-2026-en-famille/ | Que faire avec les enfants pendant l’Été Marseillais 2026 ? | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/parentalite/maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles/ | Maison des Parents aux Pennes-Mirabeau: ateliers gratuits et accueil des familles | parentalite | Les Pennes-Mirabeau, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/cuisine/food-tour-a-aix-en-provence-avec-des-enfants-lequel-choisir-en-2026/ | Food tour à Aix-en-Provence avec des enfants: lequel choisir en 2026? | cuisine | Aix-en-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/concert-routes-provence-cassis-2026/ | Concert gratuit à Cassis le 13 août 2026 | evenements | Cassis, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/sorties/musee-calisson-aix-visite-enfants-2026/ | Musée du Calisson à Aix-en-Provence: une enquête gourmande pour les enfants en 2026 | sorties | Aix-en-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | Bédéciné 2026 à Illzach en famille: ateliers, spectacles et billets | evenements | Illzach, Haut-Rhin, Grand Est
- /articles/evenements/automne-des-gones-2026-a-lyon-quels-ateliers-gratuits-choisir-avec-les-enfants/ | Automne des gones 2026 à Lyon: ateliers et sorties gratuites en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | Créations & savoir-faire 2026 à Paris en famille: billets, ateliers et dates | evenements | Paris, Paris, Île-de-France
- /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | MonstroZoo 2026-2027 à Beauval: parcours inclus, visite guidée et tarifs | evenements | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | Halloween 2026 à Mini World Lyon: la Chasse aux 31 Méchants en famille | evenements | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | Luminescences 2026-2027 au zoo d'Amnéville: billets, tarifs et visite en famille | evenements | Amnéville, Moselle, Grand Est

### Historique Radar lié

- opportunity | /articles/evenements/automne-des-gones-2026-a-lyon-quels-ateliers-gratuits-choisir-avec-les-enfants/ | 2026-10-23T09:31:27.871Z
- opportunity | /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | 2026-10-23T12:33:36.649Z
- opportunity | /articles/sorties/cosquer-mediterranee-avec-des-enfants-age-poussette-tarifs/ | 2026-10-03T11:22:17.769Z
- opportunity | /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | 2026-10-23T06:21:12.326Z
- opportunity | /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | 2026-10-06T16:58:51.946Z
- opportunity | /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | 2026-10-18T16:46:58.413Z
- opportunity | /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | 2026-10-22T12:58:21.691Z
- opportunity | /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | 2026-10-22T09:37:18.560Z
- opportunity | /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | 2026-10-22T15:49:20.816Z
- opportunity | /articles/evenements/mucem-a-la-toussaint-2026-quelle-activite-en-ribambelle-choisir-selon-l-age/ | 2026-10-04T10:54:39.216Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
