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
title: "Luminescences 2026-2027 au zoo d'Amnéville : billets, tarifs et visite en famille"
subtitle: "Du 17 octobre au 27 mars : parcours lumineux, horaires, poussettes et formule zoo"
summary: À Amnéville, Luminescences propose 1,5 km de lanternes à découvrir le soir. Prix, gratuité des moins de 3 ans, accès, horaires et choix entre soirée seule et billet zoo.
category: evenements
location:
  city: Amnéville
  department: Moselle
  region: Grand Est
keywords:
  - Luminescences Amnéville 2026 2027
  - festival lanternes zoo Amnéville enfants
  - Luminescences Amnéville tarifs
  - zoo Amnéville lanternes poussette
sources:
  - title: Zoo d'Amnéville - Festival Luminescences et conditions de visite
    url: https://zoo-amneville.com/festival-luminescences/
  - title: Zoo d'Amnéville - Horaires et animations
    url: https://zoo-amneville.com/horaires/
  - title: Zoo d'Amnéville - Tarifs et catégories d'âge
    url: https://zoo-amneville.com/tarifs/
  - title: Zoo d'Amnéville - Accès et transports
    url: https://zoo-amneville.com/acces/
  - title: Moselle Tourisme - Luminescences 2026-2027
    url: https://www.mosl.fr/fr/decouvrir-la-moselle/betes-et-sorcieres/f1368003428_festival-luminescences-le-monde-est-une-fete-amneville-les-thermes
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes
  decision: Choisir entre une soirée de lanternes et une journée au zoo suivie de Luminescences selon le budget familial, les horaires, l'âge et les contraintes d'accessibilité.
  affiliationPotential: "Klook propose un billet Zoo d'Amnéville 1 jour incluant explicitement Luminescences: https://www.klook.com/fr/activity/106081-amneville-zoo-fast-track-ticket/ . Pas de billet partenaire confirmé pour la soirée seule. Booking.com propose B&B HOTEL Amneville-les-Thermes avec chambres familiales: https://www.booking.com/hotel/fr/roi-soleil-amneville-les-thermes.fr.html ."
  gsc:
    retrievedAt: 2026-10-22T08:53:00+02:00
    dataThrough: 2026-10-19
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Zoo d'Amnéville - Festival Luminescences »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-03-27
---

Du **17 octobre 2026 au 27 mars 2027**, le festival **Luminescences** transforme une partie du **zoo d'Amnéville**, en Moselle, en promenade de lanternes. Cette cinquième édition, intitulée **« Le monde est une fête »**, présente **12 univers lumineux** et plus de **12 000 installations** sur **1,5 km de parcours extérieur**. Comptez environ **1 h 30** pour la visite.

On peut venir **uniquement le soir pour les lanternes** ou passer **la journée au zoo avant de rejoindre le festival**. Le choix change le budget et l'organisation avec les enfants.

## Soirée Luminescences ou journée au zoo : quel billet prendre ?

Le **billet Luminescences seul** convient si vous souhaitez seulement parcourir les illuminations à la nuit tombée. Les tarifs annoncés pour cette visite sont de **22 € par adulte** et **20 € par enfant de 3 à 11 ans** ; l'entrée est **gratuite avant 3 ans**. À titre de repère, deux adultes et deux enfants de 3 à 11 ans représentent **84 €**, hors dépenses sur place.

La formule **zoo + Luminescences**, annoncée **à partir de 29,50 €**, permet de découvrir les animaux pendant la journée puis de rester pour les lanternes. Ce prix d'appel ne correspond pas nécessairement au tarif de chaque membre de la famille : vérifiez les catégories d'âge et le total du panier. Au zoo, le tarif adulte s'applique **dès 12 ans**.

Pour cette formule, [Klook propose un billet d'une journée au zoo d'Amnéville avec accès à Luminescences](https://www.klook.com/fr/activity/106081-amneville-zoo-fast-track-ticket/). L'offre mentionne aussi les spectacles animaliers du zoo : sélectionnez votre **date**, vérifiez le **prix par âge** et les conditions propres au billet avant de payer. Aucun billet partenaire équivalent n'a été confirmé pour le **parcours lumineux seul**.

**Attention si vous combinez les deux visites : toute sortie du zoo est définitive.** Après la journée auprès des animaux, il faut rester dans l'enceinte du parc et rejoindre le départ de Luminescences **près de la boutique**, sans ressortir pour aller dîner ou récupérer des affaires dans la voiture.

## À quelle heure venir avec les enfants ?

Le festival se visite **à la tombée de la nuit**, mais les horaires d'ouverture et les jours accessibles peuvent varier selon la date. Le zoo annonce une **dernière entrée à Luminescences à 20 h**. Son calendrier journalier distingue les horaires du parc animalier de ceux du festival : contrôlez **les deux plages horaires** si vous prenez la formule combinée, et ne vous fiez pas à une heure d'ouverture unique pour toute la saison.

Une arrivée dès l'ouverture du créneau lumineux permet de faire les **1,5 km** sans terminer trop tard avec de jeunes enfants. Si vous passez aussi la journée au zoo, prévoyez une pause avant la promenade du soir : la visite peut devenir longue pour les plus petits.

## Poussette, fauteuil roulant : les limites du parcours

Le parcours est **entièrement en extérieur** et emprunte notamment des **chemins forestiers compactés**, avec des **sols naturels et des dénivelés**. Le zoo indique que **poussettes et fauteuils roulants peuvent accéder au parcours**, mais que la progression peut être **difficile**. Il demande la présence d'un **accompagnateur en bonne condition physique** pour garantir de bonnes conditions de visite. L'accessibilité annoncée ne signifie donc pas un itinéraire entièrement plat.

Prévoyez des chaussures adaptées et des vêtements chauds ou imperméables selon la météo. Pour un tout-petit, anticipez le temps de marche et les éventuels passages plus exigeants pour pousser la poussette.

Un **tarif pour les personnes en situation de handicap** existe, sur présentation d'un justificatif, **uniquement aux caisses**. Le zoo signale des **toilettes sur le parcours** et le **restaurant Jungle ouvert pendant le festival** avec une offre de restauration rapide. Les **chiens ne sont pas admis**, sauf les chiens guides d'aveugle.

## Accès au zoo d'Amnéville et nuit sur place

Le festival se tient au **1, rue du Tigre, 57360 Amnéville**. En voiture depuis Metz, le zoo indique l'**A31, sortie 37 Mondelange** ; le **parking public reste accessible pendant Luminescences**. Sans voiture, les gares de **Hagondange (TER)** ou de **Metz (TER/TGV)** permettent d'approcher la destination, puis de terminer en **bus ou taxi**. Le zoo mentionne notamment la **ligne 77 Rombas–Metz** : vérifiez les horaires de retour avant de choisir un créneau nocturne.

Pour éviter de reprendre la route après la promenade, le [B&B HOTEL Amneville-les-Thermes](https://www.booking.com/hotel/fr/roi-soleil-amneville-les-thermes.fr.html), situé dans le secteur de loisirs d'Amnéville, propose des **chambres familiales** et un **parking gratuit**. Renseignez le nombre et l'âge des enfants pour vérifier la capacité et le prix final ; les disponibilités ne sont pas garanties. Si vous prévoyez d'arriver tard, vérifiez aussi les modalités d'accès à l'hôtel.

Pour une autre promenade de lanternes en Moselle, notre article sur [Noël à Metz 2026 et le Sentier des Lanternes](/articles/evenements/noel-a-metz-2026-en-famille-marches-et-sentier-des-lanternes/) présente une sortie différente, en centre-ville.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/zoo-de-martinique-en-famille-tarifs-poussette-et-visite-de-l-habitation-latouche/ | Zoo de Martinique en famille: tarifs, poussette et visite de l'Habitation Latouche | activites | Le Carbet, Martinique, Martinique
- /articles/evenements/noel-a-metz-2026-en-famille-marches-et-sentier-des-lanternes/ | Noël à Metz 2026 en famille: marchés et Sentier des Lanternes | evenements | Metz, Moselle, Grand Est
- /articles/activites/parc-zoo-du-reynou-avec-des-enfants-billet-date-poussette-ou-journee-complete/ | Parc Zoo du Reynou avec des enfants: billet daté, poussette ou journée complète? | activites | Le Vigen, Haute-Vienne, Nouvelle-Aquitaine
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/sorties/bambouseraie-avec-de-jeunes-enfants-poussette-ou-balade-aerienne/ | Bambouseraie avec de jeunes enfants: poussette ou balade aérienne? | sorties | Générargues, Gard, Occitanie
- /articles/evenements/hop-hop-hop-festival-2026-en-famille-quel-jour-choisir/ | Hop Hop Hop Festival 2026 en famille: quel jour choisir? | evenements | Saint-Cirgues, Lot, Occitanie
- /articles/sorties/gouffre-de-padirac-en-famille-tarifs-poussette-et-conseils-pour-la-visite/ | Gouffre de Padirac avec des enfants: à partir de quel âge et tarifs 2026 | sorties | Padirac, Lot, Occitanie
- /articles/sorties/safari-de-peaugres-avec-enfants-quel-billet-choisir-et-comment-organiser-la-journee/ | Safari de Peaugres avec enfants: quel billet choisir et comment organiser la journée | sorties | Peaugres, Ardèche, Auvergne-Rhône-Alpes
- /articles/voyages/dormir-au-parc-sainte-croix-avec-des-enfants-lodge-repas-et-acces-au-parc/ | Dormir au Parc Sainte-Croix avec des enfants: lodge, repas et accès au parc | voyages | Rhodes, Moselle, Grand Est
- /articles/sorties/chateau-de-sierck-en-famille-tarifs-2026-jeux-et-conseils-de-visite/ | Château de Sierck en famille: tarifs 2026, jeux et conseils de visite | sorties | Sierck-les-Bains, Moselle, Grand Est
- /articles/activites/animation-estivale-metz-2026-enfants/ | Animation estivale Metz 2026: inscription et activités gratuites | activites | Metz, Moselle, Grand Est
- /articles/sorties/musee-cour-or-metz-ateliers-famille-ete-2026/ | Musée de La Cour d’Or à Metz en famille: prochains ateliers en septembre 2026 | sorties | Metz, Moselle, Grand Est
- /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | Salon du Cheval de Paris 2026 en famille: animations, jumping et billets | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne
- /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | Foire de Dijon 2026 avec les enfants: gratuités, ateliers et Ferme Côte-d'Or | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | Foire de Grenoble 2026 en famille: jours gratuits, programme et tarifs | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | Equita Lyon 2026 avec des enfants: billets, Village Enfants et spectacles | evenements | Chassieu, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | Grand Noël 2026 à Vaux-le-Vicomte en famille: billets, offre enfant et animations | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | ALFest 2026 à Annecy en famille: horaires, jeux et braderie | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | Festival du Livre de Colmar 2026 en famille: dates, horaires et animations jeunesse | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté

### Historique Radar lié

- opportunity | /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | 2026-10-20T15:29:27.541Z
- opportunity | /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | 2026-10-21T10:43:46.144Z
- opportunity | /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | 2026-10-20T08:52:25.825Z
- opportunity | /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | 2026-10-21T16:31:41.000Z
- opportunity | /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | 2026-10-21T13:33:34.395Z
- opportunity | /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | 2026-10-20T22:29:05.422Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z
- opportunity | /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | 2026-10-09T14:37:47.734Z
- opportunity | /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | 2026-10-22T04:59:04.773Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
