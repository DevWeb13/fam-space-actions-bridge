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
title: "Aéroport d'Orly avec des enfants: métro 14, Orlyval ou taxi?"
subtitle: Depuis Paris, comparez prix 2026, correspondances et bagages pour choisir le trajet adapté à votre famille.
summary: "Orly en famille: métro 14, RER B et Orlyval ou taxi? Prix 2026, tarifs enfants, poussette, siège auto et itinéraires."
category: voyages
location:
  city: Orly
  department: Val-de-Marne
  region: Île-de-France
keywords:
  - rejoindre aéroport Orly avec enfants
  - métro 14 Orly prix famille 2026
  - Orlyval RER B Antony enfants
  - taxi Paris Orly forfait 2026 famille
  - Orly poussette bagages transports
sources:
  - title: Île-de-France Mobilités - Accéder aux aéroports
    url: https://www.iledefrance-mobilites.fr/acceder-aux-aeroports
  - title: Île-de-France Mobilités - Ligne 14 et Orly
    url: https://www.iledefrance-mobilites.fr/actualites/fermeture-orlybus
  - title: Île-de-France Mobilités - RER B et Orlyval
    url: https://www.iledefrance-mobilites.fr/acceder-aux-aeroports-franciliens-
  - title: Île-de-France Mobilités - Ticket Paris Région Aéroports
    url: https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/ticket-paris-region-aeroports
  - title: Île-de-France Mobilités - Tarifs enfants
    url: https://www.iledefrance-mobilites.fr/titres-et-tarifs/tarifs-reduits/enfants-4-10-ans
  - title: Service-Public - Tarifs taxis 2026
    url: https://www.service-public.gouv.fr/particuliers/actualites/A15396
  - title: DGCCRF - Tarifs réglementés des taxis
    url: https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/taxi-comprendre-les-tarifs-reglementes
  - title: Service-Public - Sièges auto
    url: https://www.service-public.gouv.fr/particuliers/vosdroits/F628
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi
  decision: Choisir pour son propre trajet entre Paris et Orly la solution la plus praticable et son coût pour tous les membres de la famille, sans découvrir sur place une correspondance pénible ou un billet aéroport manquant.
  affiliationPotential: Welcome Pickups propose des transferts familiaux vers Orly avec véhicule adapté et siège enfant sur demande (https://www.welcomepickups.com/paris/airport-transfer-for-families/); vérifier le devis et le comparer sans confusion avec le forfait réglementé des taxis. Booking.com propose des hébergements familiaux à Orly (https://www.booking.com/family/city/fr/orly.fr.html), complément discret seulement pour les familles ayant un départ très matinal ou une arrivée tardive.
  gsc:
    retrievedAt: 2026-10-13T05:39:08.168Z
    dataThrough: 2026-10-10
    signal: strong_page
    sourceUrl: /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/
    basis: "La page « Transports à Paris avec des enfants: quel titre choisir pour payer juste? » conserve 882 impressions sur la semaine récente, avec une position moyenne de 8.769 et 92.1 % de son pic."
---

Pour aller à l'aéroport d'Orly avec des enfants, **la ligne 14 évite le changement d'Antony**, mais un taxi peut revenir moins cher que quatre billets aéroport. Le meilleur choix dépend de votre quartier parisien, de l'âge des enfants et du volume de bagages. Voici les trois options à comparer avant de partir.

## Ligne 14: un trajet direct depuis plusieurs gares parisiennes

La ligne 14 dessert directement le terminus **Aéroport d'Orly**. Elle passe notamment par Saint-Lazare, Châtelet, Gare de Lyon et Bercy. [Île-de-France Mobilités annonce 25 minutes entre Châtelet et Orly](https://www.iledefrance-mobilites.fr/actualites/fermeture-orlybus), sans compter le trajet jusqu'à la station, la marche dans l'aéroport ni les formalités avant le vol.

**Toute la ligne 14 est accessible aux personnes à mobilité réduite.** C'est un avantage avec une poussette, surtout si vous la rejoignez sans autre correspondance. Vérifiez néanmoins les ascenseurs des stations empruntées avant d'y aller. Le métro ne circule pas toute la nuit: pour un départ très matinal ou une arrivée tardive, contrôlez le premier ou le dernier passage du jour.

## RER B et Orlyval: une correspondance à Antony

Si votre logement est proche du **RER B**, vous pouvez descendre à **Antony**, puis prendre la navette automatique **Orlyval** vers les terminaux. [Le trajet Orlyval dure environ six minutes](https://www.iledefrance-mobilites.fr/acceder-aux-aeroports-franciliens-), avec des passages annoncés toutes les cinq à sept minutes en service normal.

La correspondance à Antony reste le principal inconvénient avec enfants et valises. La gare dispose d'une assistance par rampe amovible: signalez-vous au guichet si nécessaire. Orlyval a ses propres horaires; ne présumez pas qu'il fonctionne aussi tard que le métro 14. Si vous devez déjà changer de ligne pour rejoindre le RER B, comparez le trajet porte à porte avec celui par la 14.

## Quel ticket aéroport acheter en 2026?

Le [Ticket Paris Région <> Aéroports](https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/ticket-paris-region-aeroports) coûte **14 € au plein tarif**, **7 € pour les enfants de 4 à moins de 10 ans**; les **moins de 4 ans voyagent gratuitement**. Il couvre la ligne 14 vers Orly et le trajet RER B puis Orlyval. Les correspondances en métro, train et RER sont autorisées pendant deux heures, sans sortir du réseau.

Pour **deux adultes et deux enfants de 4 et 8 ans**, un aller simple revient donc à **42 €**. Si les enfants ont 10 ans ou plus, le total atteint **56 €**. Le ticket Métro-Train-RER ordinaire ne permet pas d'emprunter ces dessertes aéroportuaires.

Le titre s'achète sur **smartphone compatible** ou **passe Navigo Easy**, avec un support par voyageur payant. Attention: un Navigo Easy contenant déjà un ticket Métro-Train-RER ne peut pas recevoir un ticket aéroport. Si vous possédez un **Navigo Semaine toutes zones** valide, la **ligne 14 vers Orly est couverte, mais pas Orlyval**. Vérifiez votre forfait avant d'acheter.

Pour comparer les tickets urbains et les forfaits sur tout le séjour, notre guide [Transports à Paris avec des enfants](/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/) détaille Navigo Jour, Navigo Semaine et Paris Visite.

## Taxi: le prix se calcule pour la voiture

Pour un trajet direct **entre Paris intra-muros et Orly**, les [forfaits taxi 2026](https://www.service-public.gouv.fr/particuliers/actualites/A15396) sont de **36 € depuis ou vers la rive gauche** et **45 € depuis ou vers la rive droite**. Ces montants concernent la voiture entière, pas chaque passager.

Avec les deux adultes et les deux enfants de 4 et 8 ans de notre exemple, le taxi revient donc à **36 ou 45 €**, contre **42 € en métro ou RER**, hors suppléments. La réservation d'un taxi parisien entraîne **4 € de supplément si elle est immédiate**, ou **7 € si elle est faite à l'avance**. Un supplément de **5,50 €** peut s'appliquer à partir du cinquième passager. En revanche, [aucun supplément bagages n'est autorisé pour les taxis parisiens](https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/taxi-comprendre-les-tarifs-reglementes). Hors Paris intra-muros, ces forfaits ne sont pas automatiquement applicables.

Le taxi évite de porter les valises dans les couloirs du métro, mais son temps de parcours dépend de la circulation. **Réservez un siège enfant adapté si vous en avez besoin**: [la réglementation prévoit une exception à l'obligation de siège auto dans les taxis](https://www.service-public.gouv.fr/particuliers/vosdroits/F628), ce qui ne garantit pas qu'un véhicule en dispose spontanément.

Pour organiser à l'avance un transfert avec siège enfant et espace pour la poussette, vous pouvez aussi [demander un devis à Welcome Pickups](https://www.welcomepickups.com/paris/airport-transfer-for-families/). Le service propose des véhicules familiaux et la réservation de sièges adaptés. Comparez son devis final au forfait du taxi réglementé: ce sont deux prestations distinctes.

## Avant de partir avec les enfants

**Près de la ligne 14**, privilégiez le trajet direct si les horaires conviennent. **Près du RER B**, comparez la correspondance à Antony. **Avec plusieurs valises et quatre voyageurs**, vérifiez le prix du taxi: l'écart avec les billets ferrés peut être faible.

Repérez le terminal de votre vol, contrôlez l'état du trafic et les ascenseurs, puis ajoutez une marge pour la marche dans l'aéroport et les contrôles. Les temps annoncés pour le métro ou Orlyval ne sont jamais des durées porte à porte.

Pour un vol très tôt ou une arrivée tardive, [un hébergement familial à Orly](https://www.booking.com/family/city/fr/orly.html) peut éviter un déplacement de nuit depuis Paris. Si vous passez une journée en ville entre deux voyages, notre guide [Consigne à bagages à Paris en famille](/articles/vie-pratique/consigne-a-bagages-a-paris-en-famille-gare-ou-depot-en-ville/) aide à ne pas transporter les valises pendant les visites.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/vie-pratique/consigne-a-marseille-saint-charles-avec-des-enfants-ou-laisser-valises-et-poussette/ | Consigne à Marseille Saint-Charles avec des enfants: où laisser valises et poussette? | vie-pratique | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/ | Transports à Paris avec des enfants: quel titre choisir pour payer juste? | voyages | Paris, Paris, Île-de-France
- /articles/voyages/voyager-train-enfants-ete-2026-conseils/ | Voyager en train avec des enfants à l’été 2026: billets, poussette et organisation | voyages
- /articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/ | Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite | sorties | Paris, Paris, Île-de-France
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/sorties/gouffre-de-padirac-en-famille-tarifs-poussette-et-conseils-pour-la-visite/ | Gouffre de Padirac avec des enfants: à partir de quel âge et tarifs 2026 | sorties | Padirac, Lot, Occitanie
- /articles/vie-pratique/quel-ticket-twisto-choisir-a-caen-avec-des-enfants/ | Quel ticket Twisto choisir à Caen avec des enfants? | vie-pratique | Caen, Calvados, Normandie
- /articles/vie-pratique/vendee-sans-voiture-avec-des-enfants-ou-est-ce-vraiment-pratique/ | Vendée sans voiture avec des enfants: où est-ce vraiment pratique? | vie-pratique | La Roche-sur-Yon, Vendée, Pays de la Loire
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | Monument jeu d'enfant 2026 au château de Vincennes: quel atelier choisir ? | evenements | Vincennes, Val-de-Marne, Île-de-France
- /articles/evenements/exploradome-en-famille-fabriq-expo-tarifs-et-conseils-de-visite/ | Exploradôme en famille: Fabriq’Expo, tarifs et conseils de visite | evenements | Vitry-sur-Seine, Val-de-Marne, Île-de-France
- /articles/voyages/week-end-sans-voiture-a-joinville-le-pont-ou-dormir-et-quoi-faire-sur-les-bords-de-marne/ | Week-end sans voiture à Joinville-le-Pont: où dormir et quoi faire sur les bords de Marne | voyages | Joinville-le-Pont, Val-de-Marne, Île-de-France
- /articles/sorties/chateau-de-vincennes-en-famille-tarifs-parcours-et-conseils-de-visite/ | Château de Vincennes en famille: tarifs, parcours et conseils de visite | sorties | Vincennes, Val-de-Marne, Île-de-France
- /articles/voyages/charlieu-en-famille-abbaye-musees-et-balades-dans-la-loire/ | Charlieu en famille: abbaye, musées et balades dans la Loire | voyages | Charlieu, Loire, Auvergne-Rhône-Alpes
- /articles/voyages/paleosite-de-saint-cesaire-en-famille-combien-de-temps-prevoir-en-2026/ | Paléosite de Saint-Césaire en famille: combien de temps prévoir en 2026? | voyages | Saint-Césaire, Charente-Maritime, Nouvelle-Aquitaine
- /articles/voyages/gouffre-geant-de-cabrespine-en-famille-quelle-visite-choisir-en-2026/ | Gouffre Géant de Cabrespine en famille: quelle visite choisir en 2026? | voyages | Cabrespine, Aude, Occitanie
- /articles/voyages/center-parcs-les-hauts-de-bruyeres-en-famille-quel-cottage-choisir-apres-la-renovation/ | Center Parcs Les Hauts de Bruyères en famille: quel cottage choisir après la rénovation? | voyages | Chaumont-sur-Tharonne, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | Noël 2026 à Disneyland Paris: faut-il un billet 2 parcs pour voir Arendelle? | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/voyages/azay-le-rideau-en-famille-une-journee-entre-chateau-et-troglodytes/ | Azay-le-Rideau en famille: une journée entre château et troglodytes | voyages | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/voyages/week-end-a-etretat-en-famille-organiser-deux-jours-autour-des-falaises/ | Week-end à Étretat en famille: organiser deux jours autour des falaises | voyages | Étretat, Seine-Maritime, Normandie
- /articles/voyages/train-de-la-rhune-avec-des-enfants-billets-duree-et-conseils-en-2026/ | Train de la Rhune avec des enfants: billets, durée et conseils en 2026 | voyages | Sare, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/voyages/week-end-a-dunkerque-en-famille-port-bateaux-et-plage-sans-courir/ | Week-end à Dunkerque en famille: port, bateaux et plage sans courir | voyages | Dunkerque, Nord, Hauts-de-France
- /articles/voyages/sejourner-a-saint-cloud-en-famille-pour-visiter-paris-bon-compromis/ | Séjourner à Saint-Cloud en famille pour visiter Paris: bon compromis? | voyages | Saint-Cloud, Hauts-de-Seine, Île-de-France

### Historique Radar lié

- opportunity | /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | 2026-10-06T19:20:39.093Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | 2026-10-09T18:35:04.031Z
- opportunity | /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | 2026-10-02T21:22:46.733Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
