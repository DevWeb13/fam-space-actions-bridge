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
title: "Tous en Sons ! 2026 à Marseille : quels spectacles choisir avec des enfants ?"
subtitle: "Du 1er au 23 décembre : concerts, ciné-concerts, âges conseillés, horaires et billets"
summary: "Les séances tout public du festival Tous en Sons ! 2026 à Marseille, classées selon l'âge des enfants : spectacles gratuits sur réservation, billets payants et choix pratiques pour les familles."
category: evenements
location:
  city: Marseille
  department: Bouches-du-Rhône
  region: Provence-Alpes-Côte d'Azur
keywords:
  - Tous en Sons 2026 Marseille
  - festival musique jeune public Marseille décembre 2026
  - spectacles enfants Marseille décembre
  - concert famille Marseille Tous en Sons
sources:
  - title: Tous en Sons ! - programme officiel 2026 tout public
    url: https://tousensons.fr/programme-tous-en-sons-8-2026-tout-public/
  - title: Tous en Sons ! - Même Pas Peur !
    url: https://tousensons.fr/spectacle/meme-pas-peur/
  - title: Tous en Sons ! - Le Rêve de Sam et autres courts
    url: https://tousensons.fr/spectacle/le-reve-de-sam-et-autres-courts/
  - title: Tous en Sons ! - Cette nuit une chouette m'a dit
    url: https://tousensons.fr/spectacle/cette-nuit-une-chouette-ma-dit/
  - title: Tous en Sons ! - Le Bal des Gourmand·es
    url: https://tousensons.fr/spectacle/le-bal-des-gourmand%C2%B7es/
  - title: Tous en Sons ! - Ronja
    url: https://tousensons.fr/spectacle/ronja/
  - title: Tous en Sons ! - En Apparence
    url: https://tousensons.fr/spectacle/en-apparence/
  - title: Tous en Sons ! - Le Carnaval des animaux
    url: https://tousensons.fr/spectacle/le-carnaval-des-animaux/
  - title: Tous en Sons ! - Pelagos
    url: https://tousensons.fr/spectacle/pelagos/
  - title: Tous en Sons ! - Visite historique de l'Opéra
    url: https://tousensons.fr/spectacle/visite-historique/
  - title: Tous en Sons ! - DAS
    url: https://tousensons.fr/spectacle/das-debit-dabsorption-specifique/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: tous-en-sons-2026-a-marseille-quel-spectacle-choisir-selon-l-age-des-enfants
  decision: Choisir un spectacle tout public réellement adapté à l'âge des enfants et au budget, puis savoir où et comment réserver la bonne séance à Marseille.
  affiliationPotential: "Pas d'offre partenaire vérifiée pour les billets du festival : réservation auprès des salles ou de l'organisateur. Hébergement secondaire vérifié : Staycity Aparthotels Marseille Centre Vieux Port sur Booking.com, avec appartements équipés d'une cuisine, pour les familles venues plusieurs jours ; disponibilité et capacité à vérifier aux dates retenues."
  gsc:
    retrievedAt: 2026-10-31T02:28:22+01:00
    dataThrough: 2026-10-28
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Tous en Sons ! - programme officiel 2026 tout public »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-23
---

Du **1er au 23 décembre 2026**, le festival **Tous en Sons !** propose à Marseille des spectacles musicaux pour les enfants, mais tous ne conviennent pas au même âge. Pour une première sortie dès 3 ans, deux propositions gratuites sur réservation sont particulièrement intéressantes. Les familles avec des enfants plus grands peuvent choisir un conte, un bal, du jazz ou un ciné-concert. Voici les **séances tout public à Marseille**, sans les représentations réservées aux scolaires ni les dates annoncées dans d'autres communes.

## Dès 3 ans : deux spectacles gratuits à réserver

**Même Pas Peur !**, mardi **8 décembre à 18h30**, à l'**espace musical Hypérion**, est un spectacle de chansons sur les petites peurs de l'enfance. La représentation dure **40 minutes**, précédées d'un goûter : un format court, mais à un horaire de début de soirée. **Entrée libre sur réservation**, y compris pour cette séance gratuite. [Voir la fiche et réserver auprès de l'organisateur](https://tousensons.fr/spectacle/meme-pas-peur/). Attention : la séance du 2 décembre indiquée sur cette même fiche se déroule à **Lourmarin**, pas à Marseille.

**Le Rêve de Sam et autres courts**, mercredi **23 décembre à 10h ou 14h30**, au **théâtre du HangArt**, réunit quatre courts métrages accompagnés en direct par les musiciens de l'Ensemble Télémaque. Le ciné-concert dure **41 minutes** : c'est le choix le plus simple pour une sortie matinale avec un jeune enfant. **Entrée libre sur réservation** ; la fiche officielle indique **hangart@marseille.fr** pour la billetterie. [Consulter les deux séances](https://tousensons.fr/spectacle/le-reve-de-sam-et-autres-courts/).

Gratuit ne signifie donc pas accès sans démarche : il faut réserver et vérifier les places encore proposées avant de se déplacer.

## De 4 à 6 ans : conte, danse ou grand concert

**Cette nuit une chouette m'a dit…**, dès **4 ans**, se tient le **jeudi 17 décembre à 18h30** à la **Cité de la Musique**. Pendant **50 minutes**, Morgane Le Cuff mêle conte, chant, harpe, percussions et langue gallèse. **Tarif annoncé : 5 €**. [Choisir la séance et accéder à la billetterie](https://tousensons.fr/spectacle/cette-nuit-une-chouette-ma-dit/).

**Le Bal des Gourmand·es**, dès **5 ans**, est proposé le **mercredi 16 décembre à 15h** au **Forum du Mucem**. Élodie Rama invite les familles à danser sur un set électro de **1h30** : mieux adapté aux enfants qui aiment bouger qu'à ceux qui préfèrent rester assis. **Tarifs annoncés : 6 ou 8 €**. Au **31 octobre 2026**, les modalités de réservation sont encore en cours de finalisation : ne considérez pas la séance comme réservable avant confirmation. [Suivre les informations officielles du bal](https://tousensons.fr/spectacle/le-bal-des-gourmand%C2%B7es/). Pour visiter le musée à un autre moment, consultez aussi notre guide du [Mucem en famille](/articles/sorties/mucem-en-famille-billets-gratuites-et-conseils-pour-la-visite/) : le billet du spectacle ne doit pas être confondu avec l'entrée aux expositions.

**Ronja**, dès **6 ans**, raconte en musique l'aventure de deux enfants dans une forêt suédoise, portée par Vincent Peirani et de nombreux artistes sur scène. Rendez-vous **vendredi 4 décembre à 20h** au **Cepac Le Silo** ; durée **1 heure**, billets **de 12 à 32 €**. C'est une option pour les enfants déjà à l'aise avec un concert qui se termine en soirée. [Voir les tarifs et la billetterie](https://tousensons.fr/spectacle/ronja/).

## Dès 7 ou 8 ans : choisir selon la curiosité de l'enfant

**En Apparence**, dès **7 ans**, joue le **samedi 12 décembre à 15h et 19h** au **Théâtre Massalia**. Ce concert pop visuel de **1 heure** parle de l'image de soi, des costumes et du regard des autres. **7 ou 10 €** ; la séance de **15h** évite un retour tardif. [Comparer les deux horaires](https://tousensons.fr/spectacle/en-apparence/).

**Le Carnaval des animaux**, dès **8 ans**, a lieu le **mardi 1er décembre à 19h** à **La Criée, salle Déméter**. Pendant **1 heure**, des musiciens de l'Orchestre philharmonique de Marseille font découvrir les instruments à travers l'œuvre de Saint-Saëns. **6 à 26 €**. L'organisateur signale des **dernières places** : vérifiez la billetterie sans supposer qu'il en reste au moment de votre lecture. [Consulter la séance](https://tousensons.fr/spectacle/le-carnaval-des-animaux/).

Pour un enfant de **8 ans ou plus** attiré par la mer et l'environnement, **Pelagos** est un ciné-concert de **1h15**, le **mercredi 9 décembre à 14h40** à l'**espace culturel Busserine**. **Entrée libre sur réservation**. [Voir Pelagos](https://tousensons.fr/spectacle/pelagos/).

Deux autres rendez-vous s'adressent davantage aux plus grands : la **visite historique de l'Opéra**, dès **8 ans**, le **3 décembre à 14h30** (**1h30**, entrée libre sur réservation), et **DAS**, dès **10 ans**, le **13 décembre à 15h30** au **PIC Télémaque** (**50 minutes**, tarifs **5, 8 ou 12 €**), pour entendre des objets et des ondes électromagnétiques transformés en musique. [Visite de l'Opéra](https://tousensons.fr/spectacle/visite-historique/) ; [DAS](https://tousensons.fr/spectacle/das-debit-dabsorption-specifique/).

## Réserver la bonne séance et préparer la sortie

Commencez par **l'âge minimum annoncé**, puis regardez **la durée et l'heure de fin**. Un enfant de 3 ans peut apprécier 40 minutes de chansons, alors qu'un concert à 20h ou un bal de 1h30 demandera davantage d'endurance. Les tarifs à plusieurs montants correspondent à différentes catégories : vérifiez **le tarif applicable à chaque adulte et enfant** dans la billetterie, plutôt que de multiplier automatiquement le prix le plus bas par le nombre de personnes.

Pour réserver, ouvrez la fiche du spectacle concerné depuis le [programme officiel tout public](https://tousensons.fr/programme-tous-en-sons-8-2026-tout-public/). Certaines fiches renvoient vers la billetterie de la salle, d'autres vers une réservation dédiée. Les représentations **scolaires** et les dates de **Lourmarin, Pertuis, Venelles ou La Tour-d'Aigues** ne sont pas interchangeables avec les séances marseillaises. Avant de partir, contrôlez la confirmation, l'adresse de la salle et les éventuels changements d'horaires.

Avec une poussette ou un bébé, renseignez-vous directement auprès de la salle sur l'accès, le stationnement de la poussette, les sanitaires et les possibilités de change : ces équipements ne sont pas confirmés pour l'ensemble des lieux du festival. Pour un spectacle à 18h30, 19h ou 20h, anticipez aussi le repas et le trajet retour.

## Si vous venez passer quelques jours à Marseille

Pour une famille qui combine le festival avec un court séjour, le [Staycity Aparthotels Marseille Centre Vieux Port sur Booking.com](https://www.booking.com/hotel/fr/staycity-aparthotels-centre-vieux-port.fr.html) propose des studios et appartements avec kitchenette ; certaines catégories accueillent plusieurs personnes. Vérifiez **la capacité exacte, le prix et la disponibilité** aux dates de votre spectacle, sans supposer qu'une chambre familiale est encore libre.

Vous pouvez compléter votre sortie avec notre [itinéraire de trois jours à Marseille autour du Vieux-Port](/articles/voyages/marseille-en-famille-pendant-3-jours-itineraire-simple-autour-du-vieux-port/), plutôt que de multiplier les trajets le jour du concert.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | Fête de la mer 2026 à Marseille avec des enfants: quelle escale choisir? | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/activites/preau-des-accoules-a-marseille-faut-il-reserver-avant-de-venir-avec-des-enfants/ | Préau des Accoules à Marseille: faut-il réserver avant de venir avec des enfants? | activites | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/sorties/escale-borely-avec-des-enfants-du-david-au-bowl-a-pied/ | Escale Borély avec des enfants: du David au Bowl à pied | sorties | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/vie-pratique/consigne-a-marseille-saint-charles-avec-des-enfants-ou-laisser-valises-et-poussette/ | Consigne à Marseille Saint-Charles avec des enfants: où laisser valises et poussette? | vie-pratique | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/herofestival-marseille-2026-en-famille-billets-gratuite-enfants-et-conseils/ | HeroFestival Marseille 2026 en famille: billets, gratuité enfants et conseils | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/sorties/mucem-en-famille-billets-gratuites-et-conseils-pour-la-visite/ | Mucem Marseille en famille: tarifs 2026, billets et gratuités | sorties | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | Festival Enfantillages 2026 à Valbonne: spectacles gratuits et cinéma en famille | evenements | Valbonne, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/maison/dechets-tri-mobile-a-marseille-quoi-apporter-sans-aller-a-la-decheterie/ | Déchets’tri mobile à Marseille: quoi apporter sans aller à la déchèterie? | maison | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | Foire aux santons de Marseille 2026: dates, inauguration et visite en famille | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/mucem-a-la-toussaint-2026-quelle-activite-en-ribambelle-choisir-selon-l-age/ | Mucem à la Toussaint 2026: le programme En Ribambelle avec des enfants | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/sorties/cosquer-mediterranee-avec-des-enfants-age-poussette-tarifs/ | Cosquer Méditerranée avec des enfants: que peut-on visiter selon leur âge? | sorties | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/voyages/marseille-en-famille-pendant-3-jours-itineraire-simple-autour-du-vieux-port/ | Marseille en famille pendant 3 jours: itinéraire simple autour du Vieux-Port | voyages | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/ete-marseillais-2026-en-famille/ | Que faire avec les enfants pendant l’Été Marseillais 2026 ? | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/saint-remy-de-provence-en-famille-glanum-musees-et-entrees-gratuites/ | Saint-Rémy-de-Provence en famille: Glanum, musées et entrées gratuites | bons-plans | Saint-Rémy-de-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/sorties/carrieres-des-lumieres-avec-des-enfants-choisir-son-spectacle-et-preparer-la-visite/ | Carrières des Lumières avec des enfants: choisir son spectacle et préparer la visite | sorties | Les Baux-de-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges/ | Noël à Aix-en-Provence 2026 en famille: marchés, santons et manèges | evenements | Aix-en-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/bons-plans/arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir/ | Arles en famille à petit budget: quelles visites et quel pass choisir? | bons-plans | Arles, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/parentalite/maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles/ | Maison des Parents aux Pennes-Mirabeau: ateliers gratuits et accueil des familles | parentalite | Les Pennes-Mirabeau, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | Noël à Caen 2026 en famille: marché de Noël et visite illuminée | evenements | Caen, Calvados, Normandie
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | Noël à Bayeux 2026 en famille: marché et Galopades | evenements | Bayeux, Calvados, Normandie
- /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël | evenements | Angers, Maine-et-Loire, Pays de la Loire

### Historique Radar lié

- opportunity | /articles/sorties/cosquer-mediterranee-avec-des-enfants-age-poussette-tarifs/ | 2026-10-03T11:22:17.769Z
- opportunity | /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | 2026-10-26T03:35:31.605Z
- opportunity | /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | 2026-10-06T16:58:51.946Z
- opportunity | /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | 2026-10-23T15:29:55.218Z
- opportunity | /articles/evenements/mucem-a-la-toussaint-2026-quelle-activite-en-ribambelle-choisir-selon-l-age/ | 2026-10-04T10:54:39.216Z
- opportunity | /articles/evenements/noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges/ | 2026-10-25T15:16:03.590Z
- opportunity | /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | 2026-10-30T15:36:05.374Z
- opportunity | /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | 2026-10-30T21:26:32.584Z
- opportunity | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-10-30T18:26:56.039Z
- opportunity | /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | 2026-10-30T12:36:12.349Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
