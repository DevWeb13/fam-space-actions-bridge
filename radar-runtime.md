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
title: "Cirque de Noël d’Alsace 2026 à Eckbolsheim : quelle séance choisir en famille ?"
subtitle: Dates et horaires, durée réelle, billets et accès au chapiteau près du Zénith de Strasbourg
summary: Du 27 novembre au 13 décembre 2026, le Cirque de Noël d’Alsace propose des séances en journée et en soirée sous chapiteau à Eckbolsheim. Les horaires confirmés, le temps à prévoir sur place et les points à vérifier avec des enfants.
category: evenements
location:
  city: Eckbolsheim
  department: Bas-Rhin
  region: Grand Est
keywords:
  - Cirque de Noël d’Alsace 2026
  - cirque de Noël Strasbourg enfants horaires
  - Cirque de Noël Eckbolsheim billets
  - cirque parking Zénith Strasbourg tram
sources:
  - title: Cirque de Noël d’Alsace — calendrier, durée et ouverture des portes 2026
    url: https://www.cirquedenoelalsace.com/dates-et-horaires
  - title: Cirque de Noël d’Alsace — artistes et programme 2026
    url: https://www.cirquedenoelalsace.com/programme
  - title: Zénith de Strasbourg — Cirque de Noël d’Alsace 2026, lieu et accès
    url: https://www.zenith-strasbourg.fr/evenement/cirque-de-noel-dalsace/
  - title: Zénith de Strasbourg — tram et accès au site
    url: https://www.zenith-strasbourg.fr/infos-pratiques/acces-parking/
  - title: Cirque de Noël d’Alsace — billetterie Weezevent
    url: https://my.weezevent.com/cirque-de-noel-dalsace-strasbourg
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: cirque-de-noel-d-alsace-2026-a-eckbolsheim-quelle-seance-choisir-avec-des-enfants
  decision: Choisir une représentation en journée ou en soirée selon l’âge et le rythme des enfants, prévoir le temps total sur place et le trajet, puis vérifier le tarif et les places pour la séance souhaitée.
  affiliationPotential: "Billets sur la billetterie Weezevent de l’organisateur, sans partenaire billetterie identifié. Pour les familles qui restent une nuit, chambre familiale de quatre personnes du Brit Hotel Le Lodge à environ 1,2 km du Zénith, vérifiée sur Expedia.fr : https://www.expedia.fr/Strasbourg-Hotel-Brit-Hotel-Lodge.h15044191.Description-Hotel ; vérifier prix et disponibilité aux dates du séjour."
  gsc:
    retrievedAt: 2026-11-01T04:25:25+01:00
    dataThrough: 2026-10-29
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Cirque de Noël d’Alsace - dates, horaires et durée 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-13
---

Le **Cirque de Noël d’Alsace** revient du **27 novembre au 13 décembre 2026**, sous un chapiteau installé **sur le parking du Zénith de Strasbourg, à Eckbolsheim**. Il ne se déroule pas dans la salle du Zénith. Avec des enfants, le choix dépend surtout de l'heure de fin : le spectacle dure près de deux heures, sans compter l'arrivée et le trajet.

## Quelle séance choisir selon le rythme des enfants ?

Le [calendrier de l'organisateur](https://www.cirquedenoelalsace.com/dates-et-horaires) annonce les représentations suivantes :

- **Vendredis 27 novembre, 4 et 11 décembre :** 19 h 30 uniquement.
- **Samedi 28 novembre et samedi 12 décembre :** 14 h, 17 h et 19 h 30.
- **Samedi 5 décembre :** 14 h, 16 h 30 et 19 h 30.
- **Dimanches 29 novembre, 6 et 13 décembre :** 11 h, 14 h et 16 h 30.
- **Mercredi 9 décembre :** 14 h 30 et 17 h.

Pour des enfants qui fatiguent en soirée, les séances de **11 h, 14 h ou 14 h 30** sont les plus simples à organiser. Celle de 11 h permet de sortir vers 12 h 55, avant le déjeuner. Une séance de **19 h 30** se termine vers **21 h 25** : mieux vaut la réserver aux enfants à l'aise avec une sortie tardive, surtout s'il reste un trajet pour rentrer.

Ces heures de sortie sont indicatives, calculées à partir de la durée annoncée. Elles n'incluent pas le temps pour quitter le chapiteau et rejoindre le tram ou la voiture.

## Combien de temps prévoir et que voit-on sur scène ?

L'organisateur annonce **1 h 40 de spectacle et 15 minutes d'entracte**, soit **1 h 55 au total**. Les portes ouvrent **45 minutes avant** chaque représentation. Il est donc possible de s'installer sans arriver à la dernière minute, mais avec de jeunes enfants, inutile de prolonger excessivement l'attente si ce n'est pas nécessaire.

Le spectacle est **sans animaux**. Le [programme 2026](https://www.cirquedenoelalsace.com/programme) présente notamment la jongleuse Kelly Joo, le duo d'acrobates Paschenko, la spécialiste de la sphère aérienne Nicole Tucci et le clown Tortelini. Le Zénith annonce également un espace gourmand avec des spécialités alsaciennes, mais ne publie pas de tarifs pour les consommations.

## Billets : que vérifier avant de payer ?

La [billetterie de l'organisateur sur Weezevent](https://my.weezevent.com/cirque-de-noel-dalsace-strasbourg) permet d'accéder à la réservation. Avant de valider, sélectionnez **la date et l'heure exactes**, puis vérifiez le prix total, les catégories de places, les éventuels tarifs enfants et les conditions applicables aux tout-petits.

Les tarifs détaillés par âge et par catégorie, les disponibilités séance par séance et un éventuel âge minimum ne sont pas confirmables dans les informations publiques consultables : il serait trompeur de donner un budget précis pour une famille. Pour un bébé ou un enfant très jeune, demandez également si une place ou un billet spécifique est nécessaire.

## Où se trouve le chapiteau et comment y venir ?

L'adresse de référence est **1 allée du Zénith, 67201 Eckbolsheim**, mais l'entrée à chercher est celle du **chapiteau sur le parking**, et non celle de la salle de concerts.

- **En tram :** ligne **A**, arrêt **Parc des Sports**, puis chemin piéton vers le Zénith. Le site du Zénith indique environ **10 minutes de marche** jusqu'à son enceinte ; prévoyez davantage si les enfants marchent lentement et pour repérer le chapiteau.
- **En voiture :** l'annonce du cirque précise qu'un **grand parking gratuit** est disponible. Les sorties peuvent prendre du temps après une séance fréquentée.

Le [plan d'accès officiel du Zénith](https://www.zenith-strasbourg.fr/infos-pratiques/acces-parking/) aide à préparer le trajet. Ses indications sur les portes et les équipements **de la salle** ne doivent toutefois pas être confondues avec celles du chapiteau temporaire.

**Poussette, sanitaires, table à langer et accessibilité :** les pages officielles consultées ne précisent pas si la poussette peut entrer dans le chapiteau, où elle doit être déposée, ni si des toilettes adaptées, une table à langer ou un cheminement accessible sont prévus pour cet événement. Si l'un de ces points est indispensable, contactez l'organisateur avant de réserver plutôt que de compter sur les installations habituelles du Zénith.

## Prolonger la sortie par une nuit à Strasbourg

Pour les familles venant de loin, le **Brit Hotel Le Lodge**, à Strasbourg, propose une **chambre familiale pour quatre personnes** et se trouve à environ **1,2 km du Zénith**. Vous pouvez [consulter la chambre familiale du Brit Hotel Le Lodge sur Expedia.fr](https://www.expedia.fr/Strasbourg-Hotel-Brit-Hotel-Lodge.h15044191.Description-Hotel) en renseignant vos dates et l'âge des enfants. La capacité de quatre personnes est indiquée, mais ni le prix ni la disponibilité aux dates du cirque ne sont garantis sans recherche datée.

Si vous souhaitez aussi découvrir les chalets du centre-ville, notre guide du [marché de Noël de Strasbourg 2026 avec des enfants](/articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/) aide à choisir une promenade adaptée sans transformer la journée du cirque en marathon.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/vie-pratique/parking-relais-a-strasbourg-en-famille-comment-choisir-son-p-r-et-son-forfait/ | Parking-relais à Strasbourg en famille: comment choisir son P+R et son forfait | vie-pratique | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/cirque-de-noel-2026-au-mans-horaires-tarifs-et-seance-a-choisir-avec-des-enfants/ | Cirque de Noël 2026 au Mans: horaires, tarifs et séance à choisir avec des enfants | evenements | Le Mans, Sarthe, Pays de la Loire
- /articles/activites/le-vaisseau-a-strasbourg-quel-billet-choisir-pour-une-sortie-avec-des-enfants/ | Le Vaisseau à Strasbourg: quel billet choisir pour une sortie avec des enfants | activites | Strasbourg, Bas-Rhin, Grand Est
- /articles/bons-plans/pass-strasbourg-et-nord-alsace-en-famille-quand-est-il-vraiment-rentable/ | Pass Strasbourg et Nord Alsace en famille: quand est-il vraiment rentable? | bons-plans | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/course-des-chateaux-d-ottrott-2026-quelles-epreuves-choisir-pour-les-enfants/ | Course des Châteaux d'Ottrott 2026: quelles épreuves choisir pour les enfants? | evenements | Ottrott, Bas-Rhin, Grand Est
- /articles/maison/renover-sa-maison-dans-l-eurometropole-de-strasbourg-aides-et-demarches-2026/ | Rénover sa maison dans l’Eurométropole de Strasbourg: aides et démarches 2026 | maison | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/cuisine/maison-du-pain-a-selestat-decouvrir-la-boulangerie-en-famille/ | Maison du Pain à Sélestat: découvrir la boulangerie en famille | cuisine | Sélestat, Bas-Rhin, Grand Est
- /articles/voyages/wissembourg-sans-voiture-avec-des-enfants-que-faire-a-pied-sur-une-journee/ | Wissembourg sans voiture avec des enfants: que faire à pied sur une journée? | voyages | Wissembourg, Bas-Rhin, Grand Est
- /articles/sorties/chateau-du-haut-koenigsbourg-en-famille-tarifs-2026-et-conseils-de-visite/ | Château du Haut-Koenigsbourg en famille: tarifs 2026 et conseils de visite | sorties | Orschwiller, Bas-Rhin, Grand Est
- /articles/activites/arachnima-strasbourg-famille-2026/ | Arachnima 2026 à Strasbourg: dernier week-end gratuit au square Hasek | activites | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/planete-ocean-a-paris-preparer-la-visite-en-famille/ | Planète Océan à Paris: préparer la visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | Noël 2026 à Paris La Défense en famille: marché, animations et patinoire | evenements | Puteaux, Hauts-de-Seine, Île-de-France
- /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | Noël 2026 à Cannes en famille: marché du centre et Palm Beach | evenements | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | Luminéales du Thabor 2026 à Rennes: tarifs, horaires et visite en famille | evenements | Rennes, Ille-et-Vilaine, Bretagne
- /articles/evenements/tous-en-sons-2026-a-marseille-quel-spectacle-choisir-selon-l-age-des-enfants/ | Tous en Sons ! 2026 à Marseille: spectacles enfants, âges et tarifs | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | Noël 2026 à Toulon en famille: marché, patinoire et horaires | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | Noël à Caen 2026 en famille: marché de Noël et visite illuminée | evenements | Caen, Calvados, Normandie
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | Noël à Bayeux 2026 en famille: marché et Galopades | evenements | Bayeux, Calvados, Normandie
- /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël | evenements | Angers, Maine-et-Loire, Pays de la Loire

### Historique Radar lié

- opportunity | /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | 2026-10-31T19:33:18.323Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | 2026-10-31T22:36:58.800Z
- opportunity | /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | 2026-11-01T01:35:08.448Z
- opportunity | /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | 2026-10-31T10:28:17.432Z
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
