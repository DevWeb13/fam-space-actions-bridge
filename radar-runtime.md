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
title: "Halloween 2026 au Parc Spirou: billets, nocturnes Naruto et maison hantée"
subtitle: À Monteux, les dates à choisir, la réservation des billets et les animations pour les enfants.
summary: "Halloween au Parc Spirou du 3 octobre au 11 novembre 2026: réservation des billets non datés, nocturnes Naruto, maison hantée et budget familial."
category: evenements
location:
  city: Monteux
  department: Vaucluse
  region: Provence-Alpes-Côte d'Azur
keywords:
  - Halloween Parc Spirou 2026
  - réservation Halloween Parc Spirou billet non daté
  - nocturnes Naruto Parc Spirou
  - Cirque Carnage Parc Spirou 2026
sources:
  - title: Parc Spirou - Halloween 2026
    url: https://www.parc-spirou.com/halloween/
  - title: Parc Spirou - Réservation Halloween
    url: https://www.parc-spirou.com/reservation-halloween/
  - title: Parc Spirou - Calendrier et horaires 2026
    url: https://www.parc-spirou.com/calendrier/
  - title: Parc Spirou - Nocturnes Naruto
    url: https://www.parc-spirou.com/nocturnes-halloween/
  - title: Parc Spirou - Maison hantée Cirque Carnage
    url: https://www.parc-spirou.com/maison-hantee-cirque-carnage/
  - title: Parc Spirou - Animations Halloween
    url: https://www.parc-spirou.com/animations-halloween/
  - title: Parc Spirou - Mascottes Halloween
    url: https://www.parc-spirou.com/mascottes-halloween/
  - title: Parc Spirou - Tarifs 2026
    url: https://www.parc-spirou.com/tarifs/
  - title: Parc Spirou - Hébergement Wave Village
    url: https://www.parc-spirou.com/wave-village/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee
  decision: Choisir une date et un billet qui donnent réellement accès au parc, distinguer les animations accessibles selon l'âge et identifier les suppléments avant de payer.
  affiliationPotential: "Tiqets référence les billets d'entrée du Parc Spirou, sans preuve d'un billet spécial Halloween: vérifier dates, conditions et obligation de réservation du parc. Hébergement pertinent à Monteux référencé sur Booking.com; le Wave Village du parc propose aussi un séjour thématisé. Ne pas confondre nuitée et réservation du billet."
  gsc:
    retrievedAt: 2026-10-12T04:49:15.779Z
    dataThrough: 2026-10-09
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Parc Spirou - Halloween 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-11-11
---

Du **3 octobre au 11 novembre 2026**, le Parc Spirou Provence, à Monteux (Vaucluse), prend les couleurs d'Halloween. Mais toutes les visites ne se ressemblent pas: quatre dates permettent de rester jusqu'à 21h pour un spectacle Naruto, tandis qu'une maison hantée plus intense est proposée pendant les vacances de la Toussaint. Avant de choisir, il faut aussi vérifier **si votre billet impose une réservation de date**.

## Un billet non daté? Réservez votre journée avant le départ

Du **17 octobre au 1er novembre inclus**, les visiteurs munis d'un **billet non daté** doivent réserver leur date sur le [site de réservation Halloween du parc](https://www.parc-spirou.com/reservation-halloween/). Cette règle concerne aussi les billets achetés auprès d'un revendeur, d'un CSE, d'une association ou d'un hébergeur, ainsi que les invitations. Sans réservation, l'accès peut être refusé en cas de forte affluence.

Après l'achat d'un billet non daté, le parc demande d'**attendre deux heures** avant de sélectionner la date. La procédure émet alors un nouveau billet daté, qui remplace l'ancien. Ce choix est définitif: les billets ainsi réservés ne sont ni modifiables ni échangeables.

La démarche supplémentaire n'est **pas nécessaire** si vous avez déjà acheté un billet daté, si vous détenez un pass saison ou Gold, ou si vous séjournez au Wave Village dans le cadre d'un séjour comprenant l'accès au parc. Les enfants de moins de 1 mètre entrent gratuitement sans réservation, comme les femmes enceintes sur présentation d'un justificatif. Les détenteurs d'un bon à échanger en caisse doivent suivre la procédure particulière indiquée sur la même page officielle. En dehors de la période du 17 octobre au 1er novembre, le parc ne demande pas cette réservation Halloween supplémentaire.

Côté prix, les [tarifs 2026 sur place](https://www.parc-spirou.com/tarifs/) sont de **41 € à partir de 11 ans** et **36 € avant 11 ans**, avec entrée gratuite pour les enfants de moins de 1 mètre. Les tarifs en ligne dépendent de l'offre choisie. [Tiqets présente également des billets pour le Parc Spirou](https://www.tiqets.com/fr/billets-parc-spirou-provence-l149738/): comparez le prix et les conditions exactes de votre billet, surtout s'il est non daté. Une offre d'entrée classique ne doit pas être confondue avec un supplément pour une animation spéciale. Les tarifs réduits sont proposés en caisse, sous conditions et sur présentation des justificatifs originaux.

## Quelles dates choisir pour les nocturnes Naruto?

Les **17, 24, 30 et 31 octobre 2026**, le parc ouvre de **10h à 21h** et programme un spectacle spécial à **Naruto – Konoha Land**, avec lasers, flammes, musique et effets lumineux. Pour une famille qui veut profiter d'Halloween jusqu'au soir, ce sont les quatre dates à privilégier. Le [programme des nocturnes](https://www.parc-spirou.com/nocturnes-halloween/) précise toutefois que l'horaire du spectacle peut changer et que celui-ci peut être modifié ou annulé pour des raisons météo, de sécurité ou d'autorisations administratives.

Les autres journées ouvertes de la Toussaint sont généralement annoncées de **10h à 18h**, avec une éventuelle fermeture à **19h décidée le jour même**. La période d'Halloween se prolonge ensuite les **7, 8 et 11 novembre**, mais le parc est fermé les autres jours entre le 2 et le 10 novembre. Vérifiez le [calendrier officiel](https://www.parc-spirou.com/calendrier/) pour votre date: « Halloween jusqu'au 11 novembre » ne signifie pas ouverture quotidienne.

## Avec de jeunes enfants: personnages, mascottes et maquillage

Les journées d'Halloween ne reposent pas uniquement sur les frissons. Le parc annonce des décors thématiques, des rencontres avec les mascottes Spirou et ses amis en version Halloween, et des personnages qui déambulent dans les allées, notamment une sorcière chanteuse et un trio de vampires décalés. Pour connaître leurs lieux et horaires de rencontre, le parc renvoie à **son application le jour de la visite**.

L'[atelier maquillage](https://www.parc-spirou.com/animations-halloween/) permet aux enfants de prendre l'apparence d'une sorcière ou d'un petit monstre, mais **il n'est pas inclus dans le billet d'entrée**. Vérifiez le supplément applicable avant de le promettre aux enfants. Si les vôtres craignent les personnages inquiétants, privilégiez les rencontres avec les mascottes et les décors de jour plutôt que de miser toute la visite sur les expériences les plus sombres.

Pour savoir quelles attractions seront réellement accessibles selon la taille de chaque enfant, retrouvez notre [guide du Parc Spirou avec de jeunes enfants](/articles/sorties/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets/). Il détaille aussi les poussettes, les repas et l'accès au parc.

## Cirque Carnage: une expérience à part, déconseillée avant 12 ans

Du **23 octobre au 1er novembre**, la maison hantée **Cirque Carnage** installe son univers de clowns inquiétants, couloirs sombres et apparitions surprises. Le [parc la déconseille aux moins de 12 ans](https://www.parc-spirou.com/maison-hantee-cirque-carnage/) et précise que **l'activité n'est pas comprise dans le billet d'entrée**. Ce n'est donc pas une animation à prévoir automatiquement pour toute une fratrie.

Un créneau distinct doit être réservé lorsque la billetterie le permet. La page officielle annonçait l'ouverture de cette réservation sans afficher un prix confirmé: consultez-la avant d'acheter et prévoyez un supplément dont le montant sera celui indiqué à la réservation.

## Rester dormir après une nocturne

Si la fin de soirée à 21h rend le trajet de retour trop long, le [Wave Village](https://www.parc-spirou.com/wave-village/), situé entre le Parc Spirou et Wave Island, propose des mobil-homes et des formules associant hébergement et entrée au parc; l'espace est lui aussi décoré pour Halloween. Vérifiez les dates, la composition réelle du séjour et les conditions avant de réserver.

Pour une autre formule, l'[appartement Harmonie à Monteux sur Booking.com](https://www.booking.com/hotel/fr/harmonie-monteux.fr.html) est présenté comme adapté à une petite famille, avec cuisine équipée et canapé convertible. Comparez la capacité, le trajet depuis le parc et les conditions d'annulation pour votre nuit. Une réservation d'hébergement seule ne vaut pas réservation d'une journée au Parc Spirou.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/parc-spirou-avec-de-jeunes-enfants-regardez-la-taille-avant-d-acheter-les-billets/ | Parc Spirou avec de jeunes enfants: regardez la taille avant d'acheter les billets | sorties | Monteux, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/halloween-a-avignon-une-visite-familiale-pour-decouvrir-l-archeologie-funeraire/ | Halloween à Avignon: un atelier familial pour découvrir l'archéologie funéraire | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/activites/parc-zoo-du-reynou-avec-des-enfants-billet-date-poussette-ou-journee-complete/ | Parc Zoo du Reynou avec des enfants: billet daté, poussette ou journée complète? | activites | Le Vigen, Haute-Vienne, Nouvelle-Aquitaine
- /articles/voyages/peur-sur-le-parc-2026-en-famille-journee-nocturne-billets-et-hebergement/ | Peur sur le Parc 2026 en famille: journée, nocturne, billets et hébergement | voyages | Plailly, Oise, Hauts-de-France
- /articles/cuisine/maison-de-la-salers-visite-degustation-et-budget-avec-des-enfants/ | Maison de la Salers: visite, dégustation et budget avec des enfants | cuisine | Saint-Bonnet-de-Salers, Cantal, Auvergne-Rhône-Alpes
- /articles/evenements/halloween-au-chateau-de-villersexel-2026-en-famille-quelle-experience-choisir/ | Halloween au Château de Villersexel 2026 en famille: quelle expérience choisir? | evenements | Villersexel, Haute-Saône, Bourgogne-Franche-Comté
- /articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/ | Noël à Trévarez 2026 en famille: dates, horaires et réservation | evenements | Saint-Goazec, Finistère, Bretagne
- /articles/activites/grottes-de-thouzon-avec-des-enfants-preparer-la-visite-sous-terre/ | Grottes de Thouzon avec des enfants: préparer la visite sous terre | activites | Le Thor, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/voyages/orange-avec-des-enfants-ou-dormir-pour-tout-faire-a-pied/ | Orange avec des enfants: où dormir pour tout faire à pied | voyages | Orange, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/avignonnais-palais-des-papes-et-pont-gratuits-le-week-end/ | Avignonnais: Palais des Papes et Pont gratuits le week-end | bons-plans | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/parentalite/premier-week-end-a-avignon-avec-un-bebe-ou-dormir-et-quoi-prevoir/ | Avignon avec un bébé: poussette, Palais des Papes et où dormir | parentalite | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/sorties/palais-roure-avignon-famille-2026/ | Palais du Roure à Avignon en famille: retour sur les rendez-vous gratuits d'août 2026 | sorties | Avignon, Vaucluse, Provence-Alpes-Côte d'Azur
- /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | Halloween 2026 à la Tour de l'Horloge de Guînes: visites, contes et nocturne | evenements | Guînes, Pas-de-Calais, Hauts-de-France
- /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | Famille en fête 2026 en Gironde: ateliers gratuits pour les 0-6 ans | evenements | Saint-Loubès, Gironde, Nouvelle-Aquitaine
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | Monument Jeu d'enfant 2026 à Azay-le-Rideau: animaux cachés et contes en famille | evenements | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | Nuit des Châteaux 2026 à Tanlay: visites aux bougies les 16 et 17 octobre | evenements | Tanlay, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | Monument jeu d’enfant à Aigues-Mortes: mini-sacre et escape game les 17 et 18 octobre 2026 | evenements | Aigues-Mortes, Gard, Occitanie
- /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | Festival Lumière 2026: Laurel & Hardy en famille le 17 octobre à Lyon | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | Monument Jeu d’Enfant au château d’Angers: dragons et ateliers le 17 octobre 2026 | evenements | Angers, Maine-et-Loire, Pays de la Loire

### Historique Radar lié

- opportunity | /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | 2026-10-12T08:10:30.674Z
- opportunity | /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | 2026-10-10T15:40:28.185Z
- opportunity | /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | 2026-10-12T10:40:26.563Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | 2026-10-10T17:38:43.806Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | 2026-10-11T16:33:21.125Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | 2026-10-10T08:38:56.921Z
- opportunity | /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | 2026-10-11T09:17:01.561Z
- opportunity | /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | 2026-10-11T11:27:54.175Z
- opportunity | /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | 2026-10-11T19:35:57.703Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
