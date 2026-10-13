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
title: "Fête de l'Automne 2026 à Terra Botanica: quel billet choisir en famille?"
subtitle: À Angers, du 17 octobre au 1er novembre, les Citrouillard animent les journées; Terra Nocta demande un billet et un créneau distincts.
summary: "Fête de l'Automne 2026 à Terra Botanica: animations Citrouillard, dates et horaires de Terra Nocta, prix des billets jour, nuit et couplés, conseils avec enfants."
category: evenements
location:
  city: Angers
  department: Maine-et-Loire
  region: Pays de la Loire
keywords:
  - Fête de l'Automne Terra Botanica 2026
  - Terra Botanica Toussaint 2026 enfants
  - Terra Nocta octobre 2026 Angers
  - billet couplé Terra Botanica Terra Nocta
  - animations Citrouillard Halloween Angers
sources:
  - title: Terra Botanica - Fête de l'Automne, animations et dates 2026
    url: https://www.terrabotanica.fr/fete-de-lautomne/
  - title: Terra Botanica - Tarifs officiels des billets 2026
    url: https://www.terrabotanica.fr/tarifs-du-parc/
  - title: Terra Botanica - Calendrier d'ouverture et premiers départs Terra Nocta
    url: https://www.terrabotanica.fr/dates-horaires/
  - title: Terra Botanica - Réserver Terra Nocta
    url: https://www.terrabotanica.fr/tn-reservation/
  - title: Terra Botanica - FAQ, durée, âge et services familiaux
    url: https://www.terrabotanica.fr/faq/
  - title: Terra Botanica - Venir au parc et pique-niquer
    url: https://www.terrabotanica.fr/acces/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille
  decision: "Choisir une date et le billet réellement adaptés à ses enfants: animations d'automne de jour, Terra Nocta seul ou formule couplée, en tenant compte des horaires tardifs, de la durée, des dates sans nocturne et du budget familial."
  affiliationPotential: "Tiqets propose un billet d'entrée simple Terra Botanica (https://www.tiqets.com/fr/activites-attractions-angers-c67158/billets-pour-terra-botanica-p984974/), mais ne garantit pas Terra Nocta: vérifier prix, date et couverture exacte de la Fête de l'Automne avant de l'utiliser. Pour la nocturne et le billet couplé, prioriser la billetterie officielle du parc et ne pas opposer inutilement offres officielles et affiliées. Booking.com propose des hébergements familiaux à Angers (https://www.booking.com/family/city/fr/angers.fr.html) pour les visiteurs qui prolongent en week-end; garder ce complément discret et utile."
  gsc:
    retrievedAt: 2026-10-13T05:39:08.168Z
    dataThrough: 2026-10-10
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Terra Botanica - Fête de l'Automne 2026, programme et dates »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-11-01T23:59:00+01:00
---

La Fête de l'Automne transforme Terra Botanica, à Angers, en terrain de jeu peuplé de citrouilles, de personnages et d'énigmes. Pour les familles qui prévoient une sortie pendant les vacances de la Toussaint 2026, le choix décisif concerne le billet: **une entrée pour les animations de jour ne donne pas accès à Terra Nocta**, le parcours son et lumière du soir. Voici comment choisir sa date et son programme sans réserver la mauvaise formule.

## Citrouillard et animations d'automne: que voit-on de jour?

D'après le [programme de la Fête de l'Automne publié par Terra Botanica](https://www.terrabotanica.fr/fete-de-lautomne/), les Citrouillard ont pris possession du parc. Au fil des allées, les enfants peuvent aider le détective à chercher une courge géante, repérer des fantômes cachés dans les bois ou résoudre l'énigme du bonbon préféré d'un Citrouillard gourmand.

Autour de ces jeux, le parc annonce notamment du slime végétal, de la peinture sur masque, des tatouages éphémères et une dégustation de thé aux chrysanthèmes. Courges, chrysanthèmes, squelettes et toiles d'araignée composent le décor. Ce n'est donc pas uniquement une visite des jardins avec quelques citrouilles posées à l'entrée: il y a aussi des activités à chercher et à faire avec les enfants. Leur programmation précise peut varier; consultez le programme proposé par le parc pour votre date.

La fête se poursuit **du samedi 17 octobre au dimanche 1er novembre 2026**, après les deux premiers week-ends d'octobre. Pendant la fête, le parc ouvre **de 10h à 18h**, selon son [calendrier officiel](https://www.terrabotanica.fr/dates-horaires/). Le parc conseille de prévoir au moins une journée pour une visite complète: mieux vaut choisir quelques attractions et animations prioritaires plutôt que vouloir tout faire avec de jeunes enfants.

## Terra Nocta: à quelles dates et jusqu'à quelle heure?

Terra Nocta n'est pas une animation d'Halloween comprise dans la journée. C'est une promenade immersive au cœur de l'Arbre-Monde, ponctuée de sons, de lumières et de scènes dans l'obscurité. **Elle se réserve séparément**, ou avec un billet couplé.

Pour la période encore à venir, des séances sont annoncées **du 17 au 31 octobre 2026**. **Il n'y a pas de Terra Nocta le dimanche 1er novembre**, bien que ce soit le dernier jour de la Fête de l'Automne. Le [calendrier du parc](https://www.terrabotanica.fr/dates-horaires/) annonce un premier départ à 20h10 les 17 et 18 octobre, à 20h du 19 au 24, puis à 19h30 du 25 au 31. Les départs se succèdent ensuite toutes les 15 minutes; c'est **l'heure inscrite sur votre réservation** qui fait foi.

La [FAQ officielle](https://www.terrabotanica.fr/faq/) recommande de compter **au moins 1h30 pour la déambulation**. Même si la présentation du spectacle évoque ailleurs une heure environ, prévoir 1h30 est plus prudent pour organiser le retour et le coucher des enfants. Le parc recommande cette expérience **à partir de 6 ans**: les passages sombres et les effets visuels peuvent impressionner les plus sensibles. Le parcours est annoncé accessible aux personnes en situation de handicap, avec des effets sonores et lumineux à prendre en compte.

Les détenteurs d'un billet Terra Nocta seul peuvent accéder, à partir de **18h en octobre**, à une partie du parc et à certains services avant leur séance. Cela ne remplace pas une journée de visite. La [réservation d'un créneau sur la billetterie Terra Nocta](https://www.terrabotanica.fr/tn-reservation/) est vivement conseillée, car le nombre de visiteurs est limité par départ.

## Billet de jour, Terra Nocta ou couplé: combien ça coûte?

Les [tarifs 2026 affichés par Terra Botanica](https://www.terrabotanica.fr/tarifs-du-parc/) distinguent les adultes et les enfants de 3 à 17 ans. L'entrée est gratuite pour les 0-2 ans.

Pour une **réservation datée au moins sept jours avant la visite**:
- **Journée seule:** 21 € par adulte, 17,50 € par enfant.
- **Terra Nocta seul:** 12 € par adulte, 10 € par enfant.
- **Billet couplé journée + Terra Nocta:** 30 € par adulte, 24,50 € par enfant.

Pour une **réservation datée six jours ou moins avant la visite**, jusqu'à la veille:
- **Journée seule:** 22 € par adulte, 18 € par enfant.
- **Terra Nocta seul:** 13 € par adulte, 10,50 € par enfant.
- **Billet couplé:** 33 € par adulte, 26,50 € par enfant.

**Achat sur place le jour même:** la journée coûte 25 € par adulte et 19 € par enfant; Terra Nocta, 14 € et 11 €; le couplé, 38 € et 29 €. La disponibilité des séances nocturnes n'est alors pas garantie. Le parc propose aussi des billets saison non datés, mais un billet Terra Nocta non daté nécessite tout de même de sélectionner une séance.

Pour **deux adultes et deux enfants de 3 à 17 ans**, réservant au moins sept jours à l'avance, comptez **77 € pour la journée**, **44 € pour la nocturne seule** ou **109 € pour le couplé**. Acheter séparément jour et nuit reviendrait à 121 €: le couplé économise donc 12 € pour cette famille, à condition que tous aient envie de rester jusqu'au soir.

**Quel billet choisir?** Avec un enfant fatigué en fin de journée ou sensible à l'obscurité, privilégiez la journée. Si vous connaissez déjà le parc et souhaitez surtout voir les lumières, choisissez Terra Nocta seul. Le couplé a du sens si vos enfants peuvent profiter d'une longue visite puis rester éveillés pour le parcours nocturne; prévoyez une vraie pause entre les deux.

Pour une **entrée à la journée uniquement**, [Tiqets propose également des billets Terra Botanica](https://www.tiqets.com/fr/activites-attractions-angers-c67158/billets-pour-terra-botanica-p984974/): contrôlez la date, le prix et ce que comprend l'offre avant de réserver. Pour **Terra Nocta et les billets couplés**, utilisez la [billetterie officielle du parc](https://www.terrabotanica.fr/tn-reservation/) afin de sélectionner la formule et l'horaire appropriés. Ne supposez jamais qu'une entrée simple inclut le spectacle.

## Préparer la visite avec les enfants

Terra Botanica se trouve route d'Épinard, au nord d'Angers. Pour venir sans voiture, le [parc recommande le tramway A, arrêt Terra Botanica](https://www.terrabotanica.fr/acces/). Autre possibilité: bus 5, arrêt Auriol, puis environ 15 minutes à pied. Le parking voitures est gratuit, mais il ferme en dehors des horaires d'ouverture: si vous restez pour Terra Nocta, vérifiez les modalités de stationnement et de sortie adaptées à votre séance.

Le pique-nique se prend **à l'extérieur du parc**: un tampon permet de sortir et de revenir. Des points de restauration existent aussi dans le parc et certains restent accessibles avant Terra Nocta. Pour les tout-petits, la [FAQ du parc](https://www.terrabotanica.fr/faq/) indique des tables à langer dans la plupart des sanitaires et une location de poussette à 7 €. Pour les personnes à mobilité réduite, des fauteuils roulants manuels peuvent être loués; le parc recommande un accompagnement compte tenu des distances à parcourir.

En cas de pluie, certaines attractions et zones couvertes permettent d'adapter la journée. Terra Nocta n'est pas automatiquement annulé s'il pleut, mais le parc peut interrompre des séances si les conditions compromettent la sécurité. Prévoyez des vêtements adaptés à la météo et une marge pour le retour.

Si vous venez de loin, passer la nuit à Angers peut éviter un trajet après une séance tardive. Vous pouvez [chercher un hébergement adapté aux familles à Angers](https://www.booking.com/family/city/fr/angers.fr.html) plutôt que d'imposer à de jeunes enfants la route juste après le spectacle.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | Monument Jeu d’Enfant au château d’Angers: dragons et ateliers le 17 octobre 2026 | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/maison/composteur-gratuit-a-angers-loire-metropole-qui-peut-le-demander/ | Composteur gratuit à Angers Loire Métropole: qui peut le demander? | maison | Angers, Maine-et-Loire, Pays de la Loire
- /articles/vie-pratique/garde-d-enfants-sur-horaires-atypiques-a-angers-qui-peut-demander-l-aide-du-ccas/ | Garde d'enfants sur horaires atypiques à Angers: qui peut demander l'aide du CCAS? | vie-pratique | Angers, Maine-et-Loire, Pays de la Loire
- /articles/sorties/chasse-tresor-galerie-david-angers-2026/ | Chasse au trésor à Angers: les 4 à 6 ans enquêtent à la Galerie David | sorties | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | Fête de la mer 2026 à Marseille avec des enfants: quelle escale choisir? | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/fete-de-la-chataigne-a-collobrieres-quel-dimanche-choisir-avec-des-enfants/ | Fête de la Châtaigne à Collobrières: quel dimanche choisir avec des enfants? | evenements | Collobrières, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/fete-de-la-science-2026-en-famille/ | Fête de la science 2026: choisir une expérience adaptée à l’âge des enfants | evenements
- /articles/sorties/toussaint-2026-au-louvre-lens-quelle-activite-choisir-selon-l-age/ | Toussaint 2026 au Louvre-Lens: quelle activité choisir selon l'âge? | sorties | Lens, Pas-de-Calais, Hauts-de-France
- /articles/cuisine/ou-manger-des-fouees-en-famille-autour-de-saumur/ | Où manger des fouées en famille autour de Saumur ? | cuisine | Saumur, Maine-et-Loire, Pays de la Loire
- /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | Monument jeu d'enfant 2026 à Saint-Denis: atelier Dagobert le 17 octobre | evenements | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | Halloween 2026 au Safari de Peaugres: animations, tarifs et Festival Lumières Sauvages | evenements | Peaugres, Ardèche, Auvergne-Rhône-Alpes
- /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | Halloween 2026 au Parc Spirou: billets, nocturnes Naruto et maison hantée | evenements | Monteux, Vaucluse, Provence-Alpes-Côte d'Azur
- /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | Halloween 2026 au château de Couches: atelier citrouille et jeu Mystères & Sortilèges | evenements | Couches, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | Halloween 2026 à la Tour de l'Horloge de Guînes: visites, contes et nocturne | evenements | Guînes, Pas-de-Calais, Hauts-de-France
- /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | Famille en fête 2026 en Gironde: ateliers gratuits pour les 0-6 ans | evenements | Saint-Loubès, Gironde, Nouvelle-Aquitaine
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | Monument Jeu d'enfant 2026 à Azay-le-Rideau: animaux cachés et contes en famille | evenements | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | Nuit des Châteaux 2026 à Tanlay: visites aux bougies les 16 et 17 octobre | evenements | Tanlay, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | Monument jeu d’enfant à Aigues-Mortes: mini-sacre et escape game les 17 et 18 octobre 2026 | evenements | Aigues-Mortes, Gard, Occitanie
- /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | Festival Lumière 2026: Laurel & Hardy en famille le 17 octobre à Lyon | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | Monument jeu d'enfant 2026 au château de Vincennes: quel atelier choisir ? | evenements | Vincennes, Val-de-Marne, Île-de-France

### Historique Radar lié

- opportunity | /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | 2026-10-12T08:10:30.674Z
- opportunity | /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | 2026-10-10T15:40:28.185Z
- refresh | /articles/evenements/fete-de-la-chataigne-a-collobrieres-quel-dimanche-choisir-avec-des-enfants/ | 2026-10-08T10:21:36.677Z
- opportunity | /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | 2026-10-06T16:58:51.946Z
- opportunity | /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | 2026-10-12T10:40:26.563Z
- opportunity | /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | 2026-10-12T14:00:32.202Z
- opportunity | /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | 2026-10-12T17:34:53.933Z
- opportunity | /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | 2026-10-13T05:01:12.150Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | 2026-10-10T17:38:43.806Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | 2026-10-11T16:33:21.125Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
