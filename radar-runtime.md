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
title: "Aéroport CDG en famille: RER B, bus 9517 ou taxi en 2026?"
subtitle: Prix des trajets, correspondances et conseils avec enfants et valises
summary: Pour rejoindre Roissy-CDG avec des enfants, comparez le RER B, le bus 9517 et le taxi selon le terminal, les tarifs et les bagages.
category: voyages
location:
  city: Roissy-en-France
  department: Val-d'Oise
  region: Île-de-France
keywords:
  - aéroport Charles-de-Gaulle avec enfants
  - Roissy CDG RER B bus 9517 taxi famille
  - RoissyBus supprimé alternatives 2026
  - CDG terminaux avec poussette bagages
sources:
  - title: Île-de-France Mobilités - Fin du RoissyBus
    url: https://www.iledefrance-mobilites.fr/actualites/fin-roissy-bus
  - title: Île-de-France Mobilités - Ligne express 9517
    url: https://www.iledefrance-mobilites.fr/actualites/locales/detail/lancement9517
  - title: Île-de-France Mobilités - Horaires 9517 révisés en août 2026
    url: https://www.iledefrance-mobilites.fr/actualites/locales/detail/ligne-express-9517-nouveaux-horaires-rentree
  - title: Île-de-France Mobilités - Ticket aéroport
    url: https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/ticket-paris-region-aeroports
  - title: Île-de-France Mobilités - Ticket Bus-Tram
    url: https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/ticket-bus-tram
  - title: Île-de-France Mobilités - Tarifs enfants
    url: https://www.iledefrance-mobilites.fr/titres-et-tarifs/tarifs-reduits/enfants-4-10-ans
  - title: Transilien - Accès aux terminaux
    url: https://www.transilien.com/fr/page-deplacements/les-aeroports-de-paris
  - title: Service-Public - Taxis 2026
    url: https://www.service-public.gouv.fr/particuliers/actualites/A15396
  - title: Service-Public - Sièges auto
    url: https://www.service-public.gouv.fr/particuliers/vosdroits/F628
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: rejoindre-l-aeroport-paris-cdg-en-famille-rer-b-bus-9517-ou-taxi
  decision: Choisir entre RER B, car express 9517 depuis Saint-Denis Pleyel et taxi selon le point de départ, le terminal du vol, le coût pour toute la famille, les horaires et les contraintes de bagages ou poussette.
  affiliationPotential: Transfert privé familial Welcome Pickups CDG-Paris avec siège enfant à demander avant réservation (https://www.welcomepickups.com/paris/airport-transfer-for-families/), uniquement comme option face au taxi réglementé et aux transports. Pour une nuit avant un vol très matinal, hébergements familiaux autour de Roissy-CDG disponibles sur Booking.com (https://www.booking.com/family/city/fr/roissy-en-france.fr.html), sans prix ni capacité présumés.
  gsc:
    retrievedAt: 2026-10-15T06:53:46.851Z
    dataThrough: 2026-10-12
    signal: strong_page
    sourceUrl: /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/
    basis: "La page « Transports à Paris avec des enfants: quel titre choisir pour payer juste? » conserve 926 impressions sur la semaine récente, avec une position moyenne de 8.733 et 96.7 % de son pic."
reviewAt: 2027-01-01
---

Depuis la suppression du **RoissyBus le 1er mars 2026**, il n'existe plus de liaison directe entre Opéra et l'aéroport Paris-Charles-de-Gaulle. Avec des enfants, le choix se fait entre le **RER B**, le **car express 9517** depuis Saint-Denis Pleyel et le **taxi**. Pour éviter une correspondance inutile avec poussette et valises, commencez par vérifier le terminal indiqué sur votre billet d'avion.

## RER B: pratique si vous êtes près d'une gare

Prenez un RER B en direction d'**Aéroport Charles-de-Gaulle 2-TGV** et non de Mitry-Claye. Deux gares desservent l'aéroport:
- **Aéroport Charles-de-Gaulle 1**, à Roissypôle: pour le terminal 3 à pied ou le terminal 1 par la navette CDGVAL.
- **Aéroport Charles-de-Gaulle 2-TGV**: pour le terminal 2, en vérifiant le hall exact et les éventuelles navettes internes.

Le [CDGVAL](https://www.transilien.com/fr/page-deplacements/les-aeroports-de-paris) relie les principaux terminaux gratuitement. Il fonctionne normalement de 4 h à 1 h avec des passages rapprochés. Ajoutez les couloirs et la marche jusqu'à l'enregistrement à votre temps de trajet.

Le [Ticket Paris Région Aéroports](https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/ticket-paris-region-aeroports) coûte **14 € par adulte** et **7 € pour un enfant de 4 à moins de 10 ans**; les moins de 4 ans voyagent gratuitement. Pour deux adultes et deux enfants de 4 et 8 ans, l'aller simple coûte donc **42 €**, contre **56 €** si les enfants ont au moins 10 ans. Un simple ticket Métro-Train-RER ne suffit pas pour cette liaison. Avant d'acheter, vérifiez votre éventuel forfait; notre guide [Transports à Paris avec des enfants](/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/) compare les solutions pour l'ensemble du séjour.

## Bus 9517: moins cher, mais une correspondance possible

Le [car express 9517](https://www.iledefrance-mobilites.fr/actualites/locales/detail/lancement9517) relie Argenteuil à **Roissypôle**, en passant par **Saint-Denis Pleyel**, accessible notamment par le métro 14. Il possède des compartiments et soutes à bagages. Il ne part **pas d'Opéra** et ne dépose pas devant chaque terminal: depuis Roissypôle, rejoignez le terminal 3 à pied ou les autres terminaux avec le CDGVAL.

Le [Ticket Bus-Tram](https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/ticket-bus-tram) coûte **2,05 € par adulte** et **1,05 € pour les 4 à moins de 10 ans**. L'aller en car revient à **6,20 € pour deux adultes et deux enfants de 4 et 8 ans**, sans compter le métro ou le RER nécessaire pour gagner Saint-Denis Pleyel. Un ticket Bus-Tram ne couvre pas ce premier trajet. Les horaires du 9517 ont changé **le 24 août 2026**: consultez les [horaires actualisés](https://www.iledefrance-mobilites.fr/actualites/locales/detail/ligne-express-9517-nouveaux-horaires-rentree), surtout pour un vol tôt le matin.

Les bus **350** depuis Porte de la Chapelle et **351** depuis Nation desservent également CDG, mais leurs trajets sont plus longs, autour de 60 à 90 minutes selon la ligne et l'arrêt.

## Taxi: un forfait pour toute la voiture

En 2026, le [forfait réglementé](https://www.service-public.gouv.fr/particuliers/actualites/A15396) pour un taxi parisien entre **Paris intra-muros et CDG** est de **56 € depuis ou vers la rive droite**, **65 € depuis ou vers la rive gauche**. Il s'agit du prix pour la voiture, pas par personne. Une réservation immédiate peut ajouter **4 €**, une réservation à l'avance **7 €**; un supplément de **5,50 €** peut s'appliquer à partir du cinquième passager. Ces forfaits ne valent pas automatiquement pour une adresse hors de Paris.

Pour une famille de quatre personnes dont deux enfants de 4 et 8 ans, le taxi rive droite coûte donc **14 € de plus que le RER B**, hors frais éventuels. Cette différence peut être intéressante à payer pour éviter les escaliers, les correspondances et le transport des valises; le taxi reste toutefois soumis à la circulation.

Précisez **les sièges enfants et la place nécessaire pour la poussette** avant de réserver. La [réglementation](https://www.service-public.gouv.fr/particuliers/vosdroits/F628) prévoit une exception pour les sièges auto dans les taxis, sans garantir qu'un siège adapté sera disponible. Vous pouvez aussi [demander un devis de transfert familial à Welcome Pickups](https://www.welcomepickups.com/paris/airport-transfer-for-families/), qui propose des véhicules adaptés et des sièges sur demande. Comparez le prix total avec celui du taxi réglementé.

## Vol matinal: calculez le trajet jusqu'au bon hall

La durée du RER ou du car ne comprend ni le trajet pour rejoindre le départ, ni l'attente, ni le CDGVAL, ni les contrôles de l'aéroport. Vérifiez les horaires du jour et les travaux: les premiers et derniers passages ne couvrent pas tous les vols. [Transilien](https://www.transilien.com/fr/page-deplacements/les-aeroports-de-paris) mentionne aussi les bus nocturnes N140 et N143 depuis le secteur de la gare de l'Est, à contrôler avant de partir.

Si le départ de Paris serait trop matinal, vous pouvez [chercher un hébergement familial près de Roissy-CDG](https://www.booking.com/family/city/fr/roissy-en-france.fr.html). Vérifiez la capacité de la chambre, la navette de l'hôtel, son premier départ et le terminal réellement desservi. Pour les règles des compagnies concernant poussettes, sièges auto et bagages, consultez notre guide [Prendre l'avion avec un bébé](/articles/voyages/prendre-l-avion-avec-un-bebe-poussette-siege-auto-et-bagages-a-verifier-avant-de-reserver/).

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/voyages/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi/ | Rejoindre Orly en famille: métro 14, Orlyval ou taxi en 2026 | voyages | Orly, Val-de-Marne, Île-de-France
- /articles/vie-pratique/consigne-a-marseille-saint-charles-avec-des-enfants-ou-laisser-valises-et-poussette/ | Consigne à Marseille Saint-Charles avec des enfants: où laisser valises et poussette? | vie-pratique | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/voyages/prendre-l-avion-avec-un-bebe-poussette-siege-auto-et-bagages-a-verifier-avant-de-reserver/ | Prendre l'avion avec un bébé: poussette, siège auto et bagages à vérifier avant de réserver | voyages
- /articles/voyages/voyager-train-enfants-ete-2026-conseils/ | Voyager en train avec des enfants à l’été 2026: billets, poussette et organisation | voyages
- /articles/sorties/bambouseraie-avec-de-jeunes-enfants-poussette-ou-balade-aerienne/ | Bambouseraie avec de jeunes enfants: poussette ou balade aérienne? | sorties | Générargues, Gard, Occitanie
- /articles/activites/zoo-de-martinique-en-famille-tarifs-poussette-et-visite-de-l-habitation-latouche/ | Zoo de Martinique en famille: tarifs, poussette et visite de l'Habitation Latouche | activites | Le Carbet, Martinique, Martinique
- /articles/sorties/gouffre-de-padirac-en-famille-tarifs-poussette-et-conseils-pour-la-visite/ | Gouffre de Padirac avec des enfants: à partir de quel âge et tarifs 2026 | sorties | Padirac, Lot, Occitanie
- /articles/sorties/safari-de-peaugres-avec-enfants-quel-billet-choisir-et-comment-organiser-la-journee/ | Safari de Peaugres avec enfants: quel billet choisir et comment organiser la journée | sorties | Peaugres, Ardèche, Auvergne-Rhône-Alpes
- /articles/vie-pratique/transports-scolaires-dans-le-val-d-oise-imagine-r-csb-ou-scol-r-en-2026-2027/ | Transports scolaires dans le Val-d’Oise: Imagine R, CSB ou Scol’R en 2026-2027 ? | vie-pratique | Cergy, Val-d'Oise, Île-de-France
- /articles/activites/sherwood-parc-avec-des-enfants-quel-billet-choisir-avant-de-reserver/ | Sherwood Parc avec des enfants: quel billet choisir avant de réserver? | activites | Viarmes, Val-d'Oise, Île-de-France
- /articles/evenements/festival-du-cirque-du-val-d-oise-2026-en-famille-tarifs-horaires-et-conseils/ | Festival du Cirque du Val d'Oise 2026 en famille: tarifs, horaires et conseils | evenements | Domont, Val-d'Oise, Île-de-France
- /articles/sorties/gardiens-temps-villarceaux-famille-2026/ | Les gardiens du temps à Villarceaux: une dernière visite-jeu le 24 octobre | sorties | Chaussy, Val-d'Oise, Île-de-France
- /articles/voyages/chamrousse-en-famille-quel-secteur-choisir-pour-l-hiver-2026-2027/ | Chamrousse en famille: quel secteur choisir pour l'hiver 2026-2027? | voyages | Chamrousse, Isère, Auvergne-Rhône-Alpes
- /articles/voyages/charlieu-en-famille-abbaye-musees-et-balades-dans-la-loire/ | Charlieu en famille: abbaye, musées et balades dans la Loire | voyages | Charlieu, Loire, Auvergne-Rhône-Alpes
- /articles/voyages/paleosite-de-saint-cesaire-en-famille-combien-de-temps-prevoir-en-2026/ | Paléosite de Saint-Césaire en famille: combien de temps prévoir en 2026? | voyages | Saint-Césaire, Charente-Maritime, Nouvelle-Aquitaine
- /articles/voyages/gouffre-geant-de-cabrespine-en-famille-quelle-visite-choisir-en-2026/ | Gouffre Géant de Cabrespine en famille: quelle visite choisir en 2026? | voyages | Cabrespine, Aude, Occitanie
- /articles/voyages/center-parcs-les-hauts-de-bruyeres-en-famille-quel-cottage-choisir-apres-la-renovation/ | Center Parcs Les Hauts de Bruyères en famille: quel cottage choisir après la rénovation? | voyages | Chaumont-sur-Tharonne, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | Noël 2026 à Disneyland Paris: faut-il un billet 2 parcs pour voir Arendelle? | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/voyages/azay-le-rideau-en-famille-une-journee-entre-chateau-et-troglodytes/ | Azay-le-Rideau en famille: une journée entre château et troglodytes | voyages | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/voyages/week-end-a-etretat-en-famille-organiser-deux-jours-autour-des-falaises/ | Week-end à Étretat en famille: organiser deux jours autour des falaises | voyages | Étretat, Seine-Maritime, Normandie
- /articles/voyages/train-de-la-rhune-avec-des-enfants-billets-duree-et-conseils-en-2026/ | Train de la Rhune avec des enfants: billets, durée et conseils en 2026 | voyages | Sare, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/voyages/week-end-a-dunkerque-en-famille-port-bateaux-et-plage-sans-courir/ | Week-end à Dunkerque en famille: port, bateaux et plage sans courir | voyages | Dunkerque, Nord, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/voyages/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi/ | 2026-10-13T15:33:13.378Z
- opportunity | /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | 2026-10-02T21:22:46.733Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
