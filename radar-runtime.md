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
title: "Noël 2026 à Cannes en famille : marché du centre ou Palm Beach ?"
subtitle: "Deux villages, deux ambiances : dates, horaires confirmés et conseils avec des enfants"
summary: Du 27 novembre au 3 janvier, Cannes propose un marché de Noël en centre-ville et, à partir du 3 décembre, un village face à la mer au Palm Beach. Voici comment choisir sans confondre leurs horaires ni leurs animations.
category: evenements
location:
  city: Cannes
  department: Alpes-Maritimes
  region: Provence-Alpes-Côte d'Azur
keywords:
  - Noël Cannes 2026 famille
  - marché de Noël Cannes 2026
  - Village de Noël Palm Beach Cannes
sources:
  - title: Ville de Cannes — Marché de Noël 2026, dates et emplacement
    url: https://www.cannes.com/fr/economie/commerce-et-artisanat/evenements-et-appels-a-candidatures.html
  - title: Ville de Cannes — Village de Noël du Palm Beach, dates, horaires et entrée
    url: https://www.cannes.com/fr/agenda/annee-2026/decembre/village-de-noel-au-palm-beach.html
  - title: Palm Beach Cannes — Chalets et animations du Village de Noël
    url: https://palmbeach-cannes.com/fr/venues/christmas-village
  - title: Ville de Cannes — Allées de la Liberté, aménagements et toilettes publiques
    url: https://www.cannes.com/fr/cadre-de-vie/travaux-en-cours/realisations/espace-vert-promenade/allees-de-la-liberte.html
  - title: Ville de Cannes — Réseau de bus et ligne Palm Impérial
    url: https://www.cannes.com/fr/cadre-de-vie/transports/se-deplacer-dans-cannes/prendre-le-bus.html
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach
  decision: Choisir entre les deux marchés de Noël de Cannes selon les dates, les horaires, les animations pour enfants, l'accès et le temps disponible, sans les confondre.
  affiliationPotential: "Séjour familial à Cannes : appartement 4 personnes du Nemea Appart Hotel Cannes Palais vérifié sur Booking.com (https://www.booking.com/hotel/fr/cannes-palais.fr.html), avec kitchenette ; vérifier le prix aux dates choisies, le dépôt de garantie annoncé de 300 € et l'absence de lit bébé. Les marchés ne nécessitent pas de billetterie partenaire."
  gsc:
    retrievedAt: 2026-10-31T02:28:22+01:00
    dataThrough: 2026-10-28
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Cannes — Marché de Noël 2026, lieux et dates »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-03
---

À Cannes, deux rendez-vous de Noël coexistent en 2026 : le marché municipal des Allées de la Liberté, près du Vieux-Port, et le Village de Noël du Palm Beach, à la pointe de la Croisette. **Le centre est le choix le plus simple pour une courte sortie depuis la gare ; le Palm Beach privilégie les chalets et les animations annoncées face à la mer.** Les deux événements ne commencent pas le même jour et n'ont pas les mêmes horaires publiés.

## Le marché du centre : pratique pour une balade sans détour

La [Ville de Cannes](https://www.cannes.com/fr/economie/commerce-et-artisanat/evenements-et-appels-a-candidatures.html) annonce son **marché de Noël du vendredi 27 novembre 2026 au dimanche 3 janvier 2027**, sur les Allées de la Liberté et le cours Félix-Faure. C'est le secteur à privilégier si vous arrivez en train, souhaitez rester près du Palais des Festivals ou prévoyez une promenade assez courte avec de jeunes enfants.

Les Allées rénovées forment une promenade piétonne avec des espaces élargis et des toilettes publiques, selon la [présentation municipale des aménagements](https://www.cannes.com/fr/cadre-de-vie/travaux-en-cours/realisations/espace-vert-promenade/allees-de-la-liberte.html). Les cheminements sont donc intéressants avec une poussette, même s'il faudra composer avec l'affluence et les installations temporaires du marché.

**Attention au programme 2026 :** au 31 octobre, la page municipale confirme les dates et les lieux, mais pas les horaires quotidiens, ni une éventuelle patinoire, ni les prix des attractions. La promenade se trouve dans l'espace public ; aucune billetterie générale n'est annoncée, ce qui ne signifie pas que les achats ou animations seront gratuits. Ne planifiez pas une activité précise en reprenant le programme de Noël 2025.

## Le Palm Beach : chalets et animations en bord de mer

Le **Village de Noël du Palm Beach**, place Franklin-Roosevelt, ouvre du **jeudi 3 décembre 2026 au dimanche 3 janvier 2027**. La [fiche de la Ville](https://www.cannes.com/fr/agenda/annee-2026/decembre/village-de-noel-au-palm-beach.html) donne des horaires précis :

- **Du 3 au 16 décembre :** 15 h à 22 h, fermé les lundis et mardis.
- **Du 17 décembre au 3 janvier :** 15 h à 22 h, tous les jours.

**L'entrée est libre.** L'[organisateur](https://palmbeach-cannes.com/fr/venues/christmas-village) annonce des chalets d'artisanat, des gourmandises, des concerts, des spectacles et des activités pour enfants. Il ne publie toutefois pas, sur cette présentation, les créneaux, âges minimums ou tarifs de chaque animation. Pour voir un spectacle plutôt que simplement flâner, vérifiez son programme détaillé avant de vous déplacer. L'entrée libre ne garantit pas la gratuité des consommations ou activités.

Avec des enfants qui aiment les décors lumineux et les pauses gourmandes, ce village peut être une bonne sortie de fin d'après-midi. Pour les plus petits, choisissez un passage assez tôt : le site est en bord de mer, où le vent et la fraîcheur peuvent raccourcir la visite.

## Quel marché choisir selon votre journée ?

**Avant le 3 décembre**, seul le marché du centre est annoncé ouvert. **Un lundi ou mardi entre le 3 et le 16 décembre**, le Palm Beach est fermé : privilégiez le centre, après vérification de ses horaires. À partir du 17 décembre, les deux rendez-vous peuvent entrer dans le programme d'une même journée, mais ils sont éloignés : inutile de les enchaîner si les enfants sont déjà fatigués.

Si vous venez avec une poussette, le centre bénéficie d'aménagements piétons et de toilettes publiques identifiés. Pour le Palm Beach, l'accessibilité précise des chalets, la présence de sanitaires ouverts au public et d'un espace bébé ne sont pas confirmées dans les annonces consultées : demandez ces informations à l'organisateur si elles conditionnent votre sortie.

## Accès depuis la gare et retour le soir

Depuis la **gare SNCF de Cannes**, le marché du centre se rejoint à pied en direction du Palais des Festivals, des Allées de la Liberté et de l'hôtel de ville. C'est la solution la plus directe sans voiture.

Pour le Palm Beach, il faut poursuivre vers l'extrémité est de la Croisette. La [Ville de Cannes](https://www.cannes.com/fr/cadre-de-vie/transports/se-deplacer-dans-cannes/prendre-le-bus.html) présente la ligne **Palm Impérial (8)** entre le quai Laubeuf et le Palm Beach par la Croisette ; elle ne part pas directement du quai de la gare. Repérez un arrêt adapté près du centre et consultez les horaires du jour sur Palm Bus. **Ne comptez pas sur cette ligne pour rentrer à 22 h** sans vérifier une solution de retour : les horaires publiés par la Ville pour Palm Impérial se terminent plus tôt. Les navettes estivales gratuites ne constituent pas non plus une solution hivernale confirmée.

Les deux marchés se visitent en extérieur. En cas de forte pluie ou de vent, vérifiez le maintien des animations le jour même et prévoyez un programme de repli, surtout avec de jeunes enfants.

## Dormir à Cannes pour profiter des fêtes

Pour un week-end, le [Nemea Appart Hotel Cannes Palais sur Booking.com](https://www.booking.com/hotel/fr/cannes-palais.fr.html) propose notamment des appartements avec une chambre, un canapé-lit et une kitchenette, annoncés pour **jusqu'à quatre personnes** selon la catégorie réservée. Sa situation dans Cannes centre convient davantage au marché des Allées qu'à une sortie à pied jusqu'au Palm Beach. La fiche de réservation mentionne **une caution remboursable de 300 €** et **l'absence de lits bébé et de lits d'appoint** : vérifiez ces conditions, la composition exacte des couchages, les frais et les disponibilités à vos dates avant de réserver.

Si vous passez plusieurs jours sur la Côte d'Azur, comparez aussi les rendez-vous dans notre [guide de Noël à Nice 2026 en famille](https://www.fam-space.fr/articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/). Pour une autre journée depuis Cannes, notre [guide des îles de Lérins en famille](https://www.fam-space.fr/articles/voyages/iles-de-lerins-en-famille-quelle-ile-choisir-et-comment-organiser-la-traversee/) aide à choisir une île ; en hiver, vérifiez particulièrement les traversées et la météo.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/ | Marché de Noël de Lille 2026 en famille: village, Grande Roue et infos pratiques | evenements | Lille, Nord, Hauts-de-France
- /articles/evenements/festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir/ | Festival des Jeux de Cannes 2027 en famille: billets, âges et visite | evenements | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/voyages/iles-de-lerins-en-famille-quelle-ile-choisir-et-comment-organiser-la-traversee/ | Îles de Lérins en famille: quelle île choisir et comment organiser la traversée ? | voyages | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | Noël à Nice 2026 en famille: village, spectacles et crèche | evenements | Nice, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | Noël à Bayeux 2026 en famille: marché et Galopades | evenements | Bayeux, Calvados, Normandie
- /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | Noël 2026 à Toulon en famille: marché, patinoire et horaires | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | Festival Enfantillages 2026 à Valbonne: spectacles gratuits et cinéma en famille | evenements | Valbonne, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/sorties/villa-ephrussi-de-rothschild-en-famille-que-voir-dans-la-villa-et-les-jardins/ | Villa Ephrussi de Rothschild en famille: que voir dans la villa et les jardins? | sorties | Saint-Jean-Cap-Ferrat, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/musee-national-du-sport-a-nice-en-famille-combien-coute-vraiment-la-visite/ | Musée National du Sport à Nice en famille: que voir et préparer la visite | bons-plans | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/parentalite/maison-des-1-000-premiers-jours-a-grasse-peut-on-venir-sans-rendez-vous/ | Maison des 1 000 premiers jours à Grasse: peut-on venir sans rendez-vous? | parentalite | Grasse, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/cuisine/atelier-de-cuisine-nicoise-a-nice-faut-il-reserver-avec-des-enfants/ | Atelier de cuisine niçoise à Nice: faut-il réserver avec des enfants? | cuisine | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/maison/renovation-energetique-dans-les-alpes-maritimes-jusqu-a-25-400-d-aide/ | Rénovation énergétique dans les Alpes-Maritimes: jusqu'à 25 400 € d'aide | maison | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/vie-pratique/location-de-voiture-a-nice-avec-des-enfants-ce-qu-il-faut-verifier-avant-de-reserver/ | Location de voiture à Nice avec des enfants: ce qu'il faut vérifier avant de réserver | vie-pratique | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/voyages/menton-en-famille-ou-dormir-selon-votre-programme/ | Menton en famille: où dormir selon votre programme | voyages | Menton, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/activites/ateliers-matisse-nice-famille-aout-2026/ | Ateliers Matisse à Nice: sept matinées créatives pour les 4 à 7 ans en août | activites | Nice, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | Noël à Caen 2026 en famille: marché de Noël et visite illuminée | evenements | Caen, Calvados, Normandie
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | Lumières de Laval 2026 en famille: marchés, grande roue et croisière | evenements | Laval, Mayenne, Pays de la Loire
- /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | Noël 2026 à Brest en famille: marché, projections et horaires | evenements | Brest, Finistère, Bretagne

### Historique Radar lié

- opportunity | /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | 2026-10-26T03:35:31.605Z
- opportunity | /articles/evenements/festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir/ | 2026-10-28T09:26:08.391Z
- opportunity | /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | 2026-10-30T09:27:15.122Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | 2026-10-30T06:28:26.726Z
- opportunity | /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | 2026-10-31T10:28:17.432Z
- opportunity | /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | 2026-10-30T15:36:05.374Z
- opportunity | /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | 2026-10-30T21:26:32.584Z
- opportunity | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-10-30T18:26:56.039Z
- opportunity | /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | 2026-10-25T04:31:33.540Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
