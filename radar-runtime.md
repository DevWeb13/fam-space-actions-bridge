# Radar Fam Space - Phase 2/3

## Mission

Radar utilise Google Search Console et la recherche web pour choisir le travail éditorial qui apporte le plus de valeur à Fam Space: améliorer une page réellement perfectible, développer une intention proche d'une page forte, ou publier à temps une opportunité locale/saisonnière. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 2/3

Tu es journaliste web et responsable du parcours lecteur. Le candidat validé de phase 1 est fourni intégralement plus bas. Pour un refresh, l'article source exact est fourni intégralement plus bas.

Un refresh utilise l'ancien article comme référence interne, mais le résultat doit se lire comme un article actuel et autonome. Toute information encore vraie et utile doit rester, notamment prix décisionnels, durées, réservation, âge/taille, accessibilité, accès, contraintes, services bébé/enfants, repas et autres détails pratiques; une information fausse, périmée ou réellement redondante peut être retirée.

Suis le diagnostic éditorial du brief:
- `rank_loss`: réponds mieux aux intentions réellement en recul;
- `coverage_loss`: améliore la couverture utile sans présenter cela comme une perte de ranking;
- `uncertain`: applique uniquement la raison éditoriale indépendante vérifiée;
- opportunity: construis l'article autour de la décision choisie en phase 1. Le titre, le sous-titre et le résumé de phase 1 sont des formulations de travail: réévalue-les à partir de l'article final au lieu de reprendre mécaniquement la formulation de la décision.

Utilise des sources directement responsables. Les sources utilisées figurent dans `sources` et sont liées dans le corps lorsqu'elles ne concurrencent pas une offre partenaire. Aucun H1, tableau Markdown ou section Sources.

Sélectionne l'information au lieu de l'épuiser. Une information importante doit normalement apparaître une seule fois: l'introduction, les sections et la fin ne doivent pas redire la même chose. Une conclusion n'est pas obligatoire si elle ne fait que résumer. La structure doit découler du sujet et il n'existe aucun objectif de longueur; arrête-toi lorsque le sujet est traité complètement, sans remplissage.

Applique directement les règles partenaires ci-dessous.

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


Sélectionne seulement les liens internes réellement utiles et vérifie les routes avant usage. Lorsqu'une autre page Fam Space traite déjà correctement un sous-sujet, donne uniquement le contexte nécessaire puis renvoie vers cette page au lieu de refaire son contenu. Dans le texte public, oriente simplement le lecteur vers cette page sans commenter l'organisation éditoriale entre les articles. Le maillage doit prolonger la lecture et réduire les répétitions entre articles, pas seulement ajouter des liens.

Si du contenu temporaire est ajouté à un evergreen, utilise `reviewAt`; pour un événement pur, utilise `eventEndsAt`.

Soumets le résultat via `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet. **Ne recopie aucun bloc `radar` et ne fournis aucune branche ni aucun SHA.** La plomberie mécanique conserve le diagnostic GSC, la cible, le slug et les champs protégés.

## Candidat validé de la phase précédente

---
title: "ALFest 2026 à Annecy en famille: horaires, jeux et braderie"
subtitle: "Festival gratuit les 14 et 15 novembre à la MJC des Romains: quel moment choisir avec les enfants?"
summary: "ALFest 2026 à Annecy: deux journées de jeux de société, figurines, jeux de rôle et braderie, avec les horaires de chaque espace, l'accès et les conditions à connaître en famille."
category: evenements
location:
  city: Annecy
  department: Haute-Savoie
  region: Auvergne-Rhône-Alpes
keywords:
  - ALFest Annecy 2026 famille
  - Annecy Ludique Festival 14 15 novembre 2026
  - ALFest braderie horaires jeux enfants
sources:
  - title: Annecy Ludique - ALFest 2026, programme et informations pratiques
    url: https://www.annecyludique.fr/les-evenements/alfest/
  - title: MJC Forum des Romains - Agenda de la ludothèque
    url: https://www.forumdesromains.org/horaires-et-planning-forumdesromains-annecy-2-2/
  - title: Office de tourisme du lac d'Annecy - Soirée jeux du 14 novembre
    url: https://www.lac-annecy.com/fete-et-manifestation/soiree-jeux-de-societe-annecy-2/
  - title: Léman Express - ALFest 2026
    url: https://www.lemanexpress.com/events/alfest-festival-de-jeux/
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie
  decision: Choisir samedi ou dimanche et les espaces de jeu réellement adaptés aux enfants, en distinguant l'entrée libre, les horaires propres à la braderie et les éventuelles conditions d'accès aux sessions de jeu de rôle.
  affiliationPotential: "Entrée générale gratuite: aucune billetterie principale à proposer. Une séance de jeu de rôle annonce une pré-réservation de 5 € rendus sous forme de bon d'achat à la buvette; ne pas la présenter comme un billet d'entrée au festival. Pour les familles venant de loin, Campanile Annecy Centre - Gare sur Booking.com (https://www.booking.com/hotel/fr/campanile-annecy-centre-gare.fr.html): chambres triples/quadruples affichées, près de la gare et non présenté comme immédiatement adjacent à la MJC. Vérifier capacité selon âge, trajet réel vers le festival, tarifs, disponibilité du 14 au 15 novembre et annulation; aucune disponibilité à ces dates n'a été confirmée."
  gsc:
    retrievedAt: 2026-10-20T02:29:02.000Z
    dataThrough: 2026-10-17
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Annecy Ludique - ALFest 2026, programme et informations pratiques »; aucune page forte GSC n'est requise.
---

## Mission retenue

Préparer une page locale sur **ALFest 2026**, festival de jeux organisé par Annecy Ludique les **14 et 15 novembre** à la **MJC des Romains**, 28 avenue du Parc des Sports, Annecy. L'angle familial porte sur le choix du jour et de l'espace de jeu, et non sur une simple annonce de dates.

## Pourquoi cette mission

Trois possibilités comparées à partir du snapshot GSC du 20 octobre (données jusqu'au 17 octobre):

- **Refresh:** Quai des Bulles à Saint-Malo et Foire de la Barguillère à Foix sont les premiers reculs d'impressions, mais leurs éditions 2026 se sont terminées les 11 octobre; la chute ne prouve pas un défaut SEO. La carte OKAY Savoie est un autre candidat encore valable, mais son article complet, mis à jour le 6 octobre, traite déjà les 80 €, les échéances, la demande, les partenaires, le bonus CAF et le remplacement; aucune amélioration décisive vérifiée ne justifie de le réécrire maintenant.
- **Expansion depuis une page forte:** l'article sur les titres de transport à Paris a une forte exposition, mais les trajets Orly et CDG disposent déjà de deux guides dédiés reliés depuis cette page. Un nouvel article voisin risquerait de répéter des décisions déjà couvertes.
- **Opportunity:** ALFest est annoncé sur le site de l'organisateur avec une programmation exploitable, avant les 14-15 novembre. Le catalogue compact de 719 pages, les proximités thématiques et l'historique Radar ne montrent aucun article sur ce même festival. Les pages sur Annecy traitent plutôt les bus, le spectacle Court Circuit ou la Fête du lac. Les sujets Publication et Destination en cours (Biotropica, Vincennes, Haut-Rhin) ne se chevauchent pas.

## Décision du lecteur

Déterminer si sa famille vient **samedi ou dimanche**, privilégie les **tables de jeux libres**, les **figurines**, le **jeu de rôle** ou la **braderie**, puis préparer une visite sans confondre entrée gratuite et accès garanti à chaque animation.

## Faits à traiter

- **Festival:** samedi **14 novembre de 14h à 1h du matin**, dimanche **15 novembre de 9h à 18h**. Entrée gratuite; accès **par l'arrière du bâtiment**; bus **ligne 5, arrêt MJC des Romains**.
- **Braderie:** horaires spécifiques, **samedi 14h-20h**, **dimanche 10h-16h**; jeux d'occasion proposés par les membres, ne pas la confondre avec le festival entier ni avec une vente de jouets générale.
- **Animations:** jeux de société en libre accès, bénévoles expliquant les règles, figurines, tournois, initiation à la peinture sur figurine en 2026, jeu de rôle. Vérifier âges et plages horaires activité par activité; **aucun âge minimum général pour ALFest n'est établi**.
- **Jeu de rôle:** le site annonce une **pré-réservation payante de 5 €** accompagnée d'un **bon de 5 € pour la buvette**, tout en indiquant des réservations sur place. Signaler cette formulation ambiguë et faire vérifier auprès de l'organisateur les modalités exactes, plutôt que promettre une place ou une inscription en ligne.
- **Soirée ludothèque du samedi:** la MJC annonce parallèlement une soirée **17h-23h**, **gratuite et sans inscription**, accueillant les enfants **à partir de 6 ans**; ne jamais étendre cette limite d'âge au festival entier.
- **Pratique familiale:** buvette et restauration, accès en bus, disponibilité des tables, conditions d'accessibilité et d'accueil des tout-petits à confirmer. Aucune billetterie générale.

## Sources de départ

Site de **l'organisateur Annecy Ludique** pour les deux journées, leurs horaires, leurs espaces et l'entrée; **agenda de la MJC** et **office de tourisme d'Annecy** pour la soirée à partir de 6 ans; **Léman Express** comme confirmation indépendante des dates et activités.

## Affiliation

L'accès au festival est gratuit, donc pas de billet partenaire à promouvoir. Pour un séjour, vérifier le **Campanile Annecy Centre - Gare sur Booking.com**, avec catégories familiales affichées mais tarifs, occupation et disponibilité non confirmés aux dates du festival. N'intégrer qu'un hébergement justifié, en indiquant honnêtement le trajet jusqu'à la MJC.

## Continuations internes

- Pour le détail des tickets et l'organisation des déplacements en ville, orienter vers [Bus à Annecy avec des enfants](/articles/vie-pratique/bus-a-annecy-avec-des-enfants-quel-ticket-choisir-et-comment-eviter-les-galeres/) plutôt que reproduire les tarifs et règles SIBRA.
- Les autres événements d'Annecy (Court Circuit, Fête du lac) n'apportent pas de réponse supplémentaire sur ALFest: ne pas les utiliser comme remplissage.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/court-circuit-2026-a-annecy-en-famille-spectacles-tarifs-et-conseils/ | Court Circuit 2026 à Annecy en famille: spectacles, tarifs et conseils | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/fete-du-lac-annecy-2026-en-famille/ | Fête du lac d’Annecy 2026: préparer la soirée avec des enfants | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/vie-pratique/bus-a-annecy-avec-des-enfants-quel-ticket-choisir-et-comment-eviter-les-galeres/ | Bus à Annecy avec des enfants: quel ticket choisir et comment éviter les galères | vie-pratique | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-cite-en-jeux-2026-a-colomiers-quel-jour-choisir-avec-des-enfants/ | Festival Cité en Jeux 2026 à Colomiers: quel jour choisir avec des enfants | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/evenements/festival-du-cirque-du-val-d-oise-2026-en-famille-tarifs-horaires-et-conseils/ | Festival du Cirque du Val d'Oise 2026 en famille: tarifs, horaires et conseils | evenements | Domont, Val-d'Oise, Île-de-France
- /articles/evenements/festival-au-bonheur-des-momes-2026-en-famille/ | Au Bonheur des Mômes 2026: pass, spectacles et journée au Grand-Bornand | evenements | Le Grand-Bornand, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/maison/renovation-energetique-en-haute-savoie-jusqu-a-3-000-d-aide-departementale/ | Rénovation énergétique en Haute-Savoie: jusqu'à 3 000 € d'aide départementale | maison | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/cuisine/ferme-du-petit-mont-a-bellevaux-en-famille-quelle-formule-choisir/ | Ferme du Petit Mont à Bellevaux en famille: quelle formule choisir ? | cuisine | Bellevaux, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/activites/mer-de-glace-avec-des-enfants-faut-il-descendre-jusqu-a-la-grotte/ | Mer de Glace avec des enfants: faut-il descendre jusqu'à la grotte? | activites | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/voyages/evian-les-bains-en-famille-pendant-3-jours-lac-balades-et-activites-faciles/ | Évian-les-Bains en famille pendant 3 jours: lac, balades et activités faciles | voyages | Évian-les-Bains, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | Fêtes de Saint-Nicolas 2026 à Nancy en famille: défilé, villages et animations | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | Marché de Noël de Mulhouse 2026 en famille: horaires, étoffe et animations | evenements | Mulhouse, Haut-Rhin, Grand Est
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | bd BOUM 2026 à Blois en famille: ateliers, expositions et cinéma | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | Foire du livre de Brive 2026 en famille: dates, auteurs jeunesse et conseils de visite | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine

### Historique Radar lié

- opportunity | /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | 2026-10-18T19:49:09.191Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- opportunity | /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | 2026-10-19T19:48:02.164Z
- opportunity | /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | 2026-10-19T16:47:56.278Z
- opportunity | /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | 2026-10-18T16:46:58.413Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | 2026-10-19T09:37:22.517Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | 2026-10-15T05:30:56.094Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
