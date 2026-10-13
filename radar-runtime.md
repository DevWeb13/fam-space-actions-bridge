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
title: "Les Petits Asticots 2026: spectacles, âges et réservations en famille"
subtitle: Du 17 au 23 octobre, dix communes du pays du Mont-Blanc accueillent des spectacles pour les tout-petits et les plus grands.
summary: "Festival Les Petits Asticots 2026 en Haute-Savoie: quel spectacle selon l'âge, où voir les ateliers, combien coûtent les places et quelle billetterie utiliser?"
category: evenements
location:
  city: Chamonix-Mont-Blanc
  department: Haute-Savoie
  region: Auvergne-Rhône-Alpes
keywords:
  - festival Les Petits Asticots 2026
  - spectacles enfants Chamonix Sallanches octobre 2026
  - festival jeune public Pays du Mont-Blanc 2026
  - ateliers enfants Les Petits Asticots
  - billetterie Les Petits Asticots Chamonix Sallanches
sources:
  - title: Les Petits Asticots - Programme officiel des spectacles et âges 2026
    url: https://www.les-petits-asticots.com/programme/
  - title: Les Petits Asticots - Billetteries, tarifs et recommandations
    url: https://www.les-petits-asticots.com/infos-pratiques/
  - title: Les Petits Asticots - Ateliers et salon des auteurs
    url: https://www.les-petits-asticots.com/ateliers/
  - title: Les Petits Asticots - Accès et transports
    url: https://www.les-petits-asticots.com/transports-et-acces/
  - title: Chamonix-Mont-Blanc - Festival Les Petits Asticots 2026
    url: https://www.chamonix.fr/agenda/festival-les-petits-asticots-2026/
  - title: Billetterie officielle Vallée de Chamonix - Programmation 2026
    url: https://billetterie-chamonix.mapado.com/
  - title: Billetterie officielle Cultur(r)al Sallanches
    url: https://billetterie.culturral-sallanches.fr/content
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants
  decision: Trouver une représentation ou un atelier réellement adapté à l'âge des enfants entre le 17 et le 23 octobre, choisir une commune accessible et acheter les billets dans la bonne billetterie avant que les petites jauges soient complètes.
  affiliationPotential: La billetterie principale est celle des organisateurs, distincte pour la Vallée de Chamonix (https://billetterie-chamonix.mapado.com/) et le Pays du Mont-Blanc (https://billetterie.culturral-sallanches.fr/content); pas d'offre partenaire de spectacles correspondante confirmée. Pour une famille passant plusieurs jours dans les deux vallées, hébergements familiaux proposés sur Booking.com à Chamonix (https://www.booking.com/family/city/fr/chamonix-mont-blanc.fr.html) et à Sallanches (https://www.booking.com/family/city/fr/sallanches.fr.html); en retenir une seule suggestion pertinente selon les représentations choisies, sans inventer de disponibilité.
  gsc:
    retrievedAt: 2026-10-13T05:39:08.168Z
    dataThrough: 2026-10-10
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Festival Les Petits Asticots - Programmation officielle 2026, âges et communes »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-10-23T23:59:00+02:00
---

Du **17 au 23 octobre 2026**, le festival jeune public **Les Petits Asticots** propose spectacles et ateliers dans **dix communes du pays du Mont-Blanc**, de Chamonix à Sallanches, en passant notamment par Servoz, Megève et Vallorcine. Pour organiser une sortie avec les enfants, ne vous fiez pas seulement au nom du spectacle: **l'âge conseillé, la commune et la billetterie changent d'une représentation à l'autre**.

## Quels spectacles choisir selon l'âge de votre enfant?

Le [programme officiel 2026](https://www.les-petits-asticots.com/programme/) couvre aussi bien les bébés que les enfants plus grands. Voici quelques repères concrets pour choisir:

- **Avec un bébé ou un enfant de moins de 3 ans:** *Au Fond des Mers*, le **18 octobre à Cordon**, est annoncé dès **6 mois**. *La Toute Petite Boîte de Nuits*, à **Chamonix le 17 octobre**, s'adresse aux **0-3 ans**: ce spectacle musical de 30 minutes, consacré au sommeil, est programmé à 9h30 et 11h. À **Sallanches le 19 octobre**, *Là-haut sur ma montagne* convient aux **1-6 ans**.
- **À partir de 2 ou 3 ans:** *Variations pour un Parapluie* se joue le **17 octobre à Combloux** (dès 2 ans). *Ça a l'air facile*, mélange de cirque et de danse, est proposé le **19 octobre à Servoz** dès 3 ans. *Comment attraper une étoile*, le **21 octobre à Megève**, s'adresse également aux 3 ans et plus.
- **Avec des enfants d'âge scolaire:** *Les intempéries de Sami*, le **20 octobre aux Houches**, est annoncé dès 4 ans; *Versant Vivant*, le **23 octobre à Passy**, dès 6 ans; *Le Petit Prince*, le **21 octobre à Sallanches**, dès 7 ans; et *F.A.I.L (Fonce. Avance. Invincible. Loser)*, le **20 octobre à Saint-Gervais**, dès 8 ans.

Le **22 octobre à Vallorcine**, *Jeu* et *Monte et souris* sont tous deux annoncés à partir de 3 ans. Il est possible de comparer les horaires de ces deux spectacles pour organiser une sortie au même endroit, sans présumer qu'il reste des places pour les deux. Les seuils d'âge indiqués par les organisateurs doivent guider le choix: un spectacle destiné aux 0-3 ans ne vise pas le même public qu'une proposition dès 8 ans.

Pour connaître **l'heure exacte, la salle et les places encore disponibles**, ouvrez la fiche de la représentation choisie dans le [programme du festival](https://www.les-petits-asticots.com/programme/), puis sa billetterie. Plusieurs séances ont lieu dès le matin.

## Ajouter un atelier ou rencontrer des auteurs

Les spectacles ne sont pas les seules activités proposées. La [programmation des ateliers](https://www.les-petits-asticots.com/ateliers/) annonce notamment:

- **Cirque à Servoz:** lundi **19 octobre à 15h**, salle Jean Morel.
- **Ombre et lumière parent-enfant à Megève:** mercredi **21 octobre à 10h15 ou 14h45**, auditorium du Palais des Sports.
- **Construction de marionnettes parent-enfant à Vallorcine:** jeudi **22 octobre à 15h15**, pôle culturel.
- **Danse hip-hop à Vallorcine:** jeudi **22 octobre à 15h15**, à La Ruche.

Ces ateliers sont annoncés à **5 € par participant**. Certains affichent déjà complet sur la billetterie: vérifiez la disponibilité avant d'organiser la journée autour d'un atelier, surtout avec une jauge réduite.

À **Sallanches**, le salon **Les Petits Astic' Auteurs** se tient à la médiathèque les **19 et 20 octobre, de 14h30 à 18h**. Les activités sont proposées avec un nombre limité de places; les réservations se font au **04 50 93 95 49** selon le programme du salon. Il peut compléter une sortie à Sallanches, sans nécessiter de changer de commune.

## Combien coûte l'entrée et où réserver?

Les [informations pratiques du festival](https://www.les-petits-asticots.com/infos-pratiques/) annoncent en général **5 € par personne**, adulte comme enfant, et **8 € pour certains spectacles, notamment des concerts**. Vérifiez le tarif de chaque représentation sur sa fiche avant paiement: le festival ne propose pas un prix unique applicable à toutes les séances.

**Il existe deux billetteries distinctes**, en fonction de la commune du spectacle:

- **Chamonix, Les Houches, Servoz et Vallorcine:** [billetterie culturelle de la Vallée de Chamonix](https://billetterie-chamonix.mapado.com/), renseignements au **04 50 53 75 17**.
- **Passy, Saint-Gervais, Sallanches, Combloux, Megève et Cordon:** [billetterie Cultur(r)al Sallanches](https://billetterie.culturral-sallanches.fr/content), renseignements au **04 50 91 56 46**.

Si vous assistez à un spectacle dans chaque secteur, il peut donc falloir **effectuer deux commandes séparées**. Des ventes sont aussi prévues à l'entrée des salles, mais uniquement **dans la limite des places restantes**. Pour une petite jauge ou un atelier, réserver à l'avance est plus sûr.

Les organisateurs demandent de venir **15 minutes avant le début**, avec **au moins un adulte accompagnant**. Pensez également à tenir compte des billets de toutes les personnes qui assistent à la séance: le prix indiqué est un tarif **par personne**, pas par famille.

## Éviter les trajets inutiles entre les communes

Le festival ne se déroule pas dans un seul lieu. Il rassemble cette année **Chamonix, Les Houches, Servoz, Vallorcine, Passy, Saint-Gervais, Sallanches, Combloux, Megève et Cordon**. Avant de réserver deux séances le même jour, vérifiez leurs **horaires et adresses précises**: deux spectacles organisés dans des communes différentes ne sont pas forcément faciles à enchaîner avec des enfants.

La [page officielle Accès & Transports](https://www.les-petits-asticots.com/transports-et-acces/) oriente vers le train et les bus du secteur. Dans la vallée de Chamonix, elle mentionne notamment les lignes de bus vers **Les Houches et Servoz** et recommande **le train pour Vallorcine**. Les horaires réels et les correspondances doivent être vérifiés pour le jour choisi; une desserte du village ne signifie pas nécessairement un arrêt à côté de la salle.

Pour les familles venant de loin et souhaitant profiter de plusieurs représentations, [comparer les hébergements familiaux à Sallanches](https://www.booking.com/family/city/fr/sallanches.fr.html) peut être utile si la majorité des spectacles choisis se trouve du côté du Pays du Mont-Blanc. Vérifiez la distance jusqu'aux salles et les trajets prévus avant de réserver une nuit.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/festival-au-bonheur-des-momes-2026-en-famille/ | Au Bonheur des Mômes 2026: pass, spectacles et journée au Grand-Bornand | evenements | Le Grand-Bornand, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/court-circuit-2026-a-annecy-en-famille-spectacles-tarifs-et-conseils/ | Court Circuit 2026 à Annecy en famille: spectacles, tarifs et conseils | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/les-expressifs-2026-a-poitiers-trois-jours-de-spectacles-gratuits/ | Les Expressifs 2026 à Poitiers: trois jours de spectacles gratuits | evenements | Poitiers, Vienne, Nouvelle-Aquitaine
- /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | Famille en fête 2026 en Gironde: ateliers gratuits pour les 0-6 ans | evenements | Saint-Loubès, Gironde, Nouvelle-Aquitaine
- /articles/evenements/rue-enfants-montcuq-2026-famille/ | La Rue des Enfants 2026 à Montcuq: deux jours d’arts de rue en famille | evenements | Montcuq-en-Quercy-Blanc, Lot, Occitanie
- /articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/ | Lire en Poche 2026 à Gradignan avec des enfants: organiser une journée sans perdre les ateliers | evenements | Gradignan, Gironde, Nouvelle-Aquitaine
- /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | Vacances de la Toussaint 2026 à la Cité des sciences: les ateliers numériques gratuits avec des enfants | sorties | Paris, Paris, Île-de-France
- /articles/evenements/nancy-jazz-pulsations-2026-en-famille-spectacles-enfants-tarifs-et-conseils/ | Nancy Jazz Pulsations 2026 en famille: spectacles enfants, tarifs et conseils | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/activites/mer-de-glace-avec-des-enfants-faut-il-descendre-jusqu-a-la-grotte/ | Mer de Glace avec des enfants: faut-il descendre jusqu'à la grotte? | activites | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/cuisine/ferme-du-petit-mont-a-bellevaux-en-famille-quelle-formule-choisir/ | Ferme du Petit Mont à Bellevaux en famille: quelle formule choisir ? | cuisine | Bellevaux, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/maison/renovation-energetique-en-haute-savoie-jusqu-a-3-000-d-aide-departementale/ | Rénovation énergétique en Haute-Savoie: jusqu'à 3 000 € d'aide départementale | maison | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/vie-pratique/bus-a-annecy-avec-des-enfants-quel-ticket-choisir-et-comment-eviter-les-galeres/ | Bus à Annecy avec des enfants: quel ticket choisir et comment éviter les galères | vie-pratique | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/voyages/evian-les-bains-en-famille-pendant-3-jours-lac-balades-et-activites-faciles/ | Évian-les-Bains en famille pendant 3 jours: lac, balades et activités faciles | voyages | Évian-les-Bains, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/fete-du-lac-annecy-2026-en-famille/ | Fête du lac d’Annecy 2026: préparer la soirée avec des enfants | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | Monument jeu d'enfant 2026 à Saint-Denis: atelier Dagobert le 17 octobre | evenements | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | Halloween 2026 au Safari de Peaugres: animations, tarifs et Festival Lumières Sauvages | evenements | Peaugres, Ardèche, Auvergne-Rhône-Alpes
- /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | Halloween 2026 au Parc Spirou: billets, nocturnes Naruto et maison hantée | evenements | Monteux, Vaucluse, Provence-Alpes-Côte d'Azur
- /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | Halloween 2026 au château de Couches: atelier citrouille et jeu Mystères & Sortilèges | evenements | Couches, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | Halloween 2026 à la Tour de l'Horloge de Guînes: visites, contes et nocturne | evenements | Guînes, Pas-de-Calais, Hauts-de-France
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | Monument Jeu d'enfant 2026 à Azay-le-Rideau: animaux cachés et contes en famille | evenements | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France

### Historique Radar lié

- opportunity | /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | 2026-10-12T08:10:30.674Z
- opportunity | /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | 2026-10-12T10:40:26.563Z
- opportunity | /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | 2026-10-12T14:00:32.202Z
- opportunity | /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | 2026-10-12T17:34:53.933Z
- opportunity | /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | 2026-10-13T05:01:12.150Z
- refresh | /articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/ | 2026-10-06T12:23:52.449Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | 2026-10-11T16:33:21.125Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | 2026-10-13T09:50:29.435Z
- opportunity | /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | 2026-10-11T11:27:54.175Z
- opportunity | /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | 2026-10-11T19:35:57.703Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
