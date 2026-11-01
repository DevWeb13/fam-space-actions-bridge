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
title: "Noël 2026 à Paris La Défense en famille : marché gratuit ou patinoire ?"
subtitle: Dates des deux espaces, animations avec les enfants et budget réel pour patiner
summary: Du marché de Noël gratuit aux séances de patinage dès 3 ans, choisissez votre jour à La Défense selon les animations, les horaires et le budget de la famille.
category: evenements
location:
  city: Puteaux
  department: Hauts-de-Seine
  region: Île-de-France
keywords:
  - marché de Noël Paris La Défense 2026
  - patinoire La Défense tarifs enfants
  - Noël La Défense animations famille
sources:
  - title: Organisateur - marché, Le Sommet, patinoire, tarifs et règlement
    url: https://xmasparisladefense.com/app-les-espaces/
  - title: Organisateur - dates, horaires, accès et FAQ
    url: https://xmasparisladefense.com/app-infos-pratiques/
  - title: Paris La Défense - programme officiel 2026
    url: https://www.parisladefense.com/fr/programme/agenda/marche-de-noel-2026
  - title: Organisateur - calendrier des parades
    url: https://xmasparisladefense.com/parades-feeriques/
  - title: Organisateur - rencontres avec le Père et la Mère Noël
    url: https://xmasparisladefense.com/pere-mere-noel/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire
  decision: Choisir entre une balade gratuite au marché avec animations et une séance de patinage payante, puis fixer le bon jour et le budget selon l'âge des enfants.
  affiliationPotential: "Aucune billetterie partenaire vérifiée pour la patinoire : conserver sa billetterie officielle en Sources. Pour un séjour, Residhome Puteaux La Défense propose sur Expedia.fr un appartement Executive de 4 personnes (lit double et canapé-lit) ; vérifier prix et disponibilité aux dates retenues : https://www.expedia.fr/Paris-Hotel-Residhome-Puteaux-La-Defense.h36474633.Description-Hotel"
  gsc:
    retrievedAt: 2026-10-31T02:28:22+01:00
    dataThrough: 2026-10-28
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Organisateur - espaces, patinoire, tarifs et règles »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-03
---

À Paris La Défense, une famille peut profiter des chalets et des animations de Noël **sans acheter de billet d'entrée**, ou prévoir une séance payante sur la patinoire. Ce ne sont pas tout à fait les mêmes sorties : le **marché traditionnel ferme le 31 décembre 2026**, tandis que l'espace festif **Le Sommet reste ouvert jusqu'au 3 janvier 2027**. La patinoire, elle, démarre le **13 novembre**, un jour après l'ouverture des deux espaces.

## Marché traditionnel ou Le Sommet : où aller avec les enfants ?

Pour une balade avec de jeunes enfants ou un petit budget, commencez par le **marché traditionnel**, ouvert du **12 novembre au 31 décembre**. On y trouve les chalets d'artisans, des stands de restauration, des manèges et la maison du Père et de la Mère Noël. L'accès au marché est gratuit ; cela ne signifie pas que les manèges, les achats, les repas ou les photos souvenirs le sont. Aucun tarif fiable des manèges n'est annoncé dans les informations officielles consultées : prévoyez une marge plutôt que de promettre une sortie entièrement gratuite.

Pour des enfants qui veulent patiner, direction **Le Sommet**, au pied de la Grande Arche : cet espace accueille la patinoire, un manège et une programmation musicale en soirée. Les deux espaces peuvent se combiner lors d'une même visite, mais si l'objectif est surtout de rencontrer le Père Noël ou de voir une parade, privilégiez le marché traditionnel avant sa fermeture.

## Quels jours choisir pour les parades et le Père Noël ?

Les **déambulations féériques** sont programmées les **mercredis à partir de 17 h 30** et les **dimanches à partir de 14 h 30**, avec des thèmes différents selon les dates. Par exemple, les mascottes sont annoncées le 15 novembre et les personnages de la Reine des Neiges le 29 novembre. Les horaires peuvent changer avec la météo : consultez le [calendrier des parades de l'organisateur](https://xmasparisladefense.com/parades-feeriques/) pour votre jour de visite.

Le **Père Noël est annoncé du 13 novembre au 24 décembre**, près du manège sapin. Il est notamment présent le mercredi de **14 h 30 à 20 h**, le samedi de **14 h à 22 h 30** et le dimanche de **14 h à 21 h**. La Mère Noël le rejoint les mercredis et les week-ends. Le **24 décembre**, la rencontre est prévue de **14 h à 17 h 30**. Les **photos souvenirs sont payantes**, sans prix public confirmé : consultez les [créneaux officiels du Père et de la Mère Noël](https://xmasparisladefense.com/pere-mere-noel/) avant de vous déplacer.

La FAQ de l'organisateur présente les animations comme gratuites, mais des prestations particulières peuvent être payantes : ne confondez pas accès aux animations, photos, manèges et maquillage. Pour ce dernier, les indications consultées ne permettent pas de garantir un tarif unique.

## Patinoire : quel âge et combien coûte une séance en famille ?

La patinoire ouvre du **13 novembre 2026 au 3 janvier 2027**, **dès 3 ans**. Un enfant de **moins de 7 ans doit être accompagné sur la glace par un adulte responsable**, dont l'entrée est payante au plein tarif. Les **gants sont obligatoires** pour tous ; une paire coûte **4 €** sur place si vous n'en avez pas. La location des patins coûte **2,50 € par personne**.

Les billets varient selon l'affluence :
- **Faible affluence** : **6 € de 3 à 12 ans inclus**, **10 € dès 13 ans**.
- **Forte affluence** : **10 € de 3 à 12 ans inclus**, **12,50 € dès 13 ans**.

La forte affluence comprend notamment les **week-ends, les vacances scolaires, le mercredi après-midi** et les jeudis et vendredis après 17 h. Les tarifs réduits annoncés pour le « mercredi matin » sont peu exploitables puisque l'ouverture habituelle de la patinoire est à **14 h du lundi au mercredi** : ne comptez pas dessus sans confirmation.

**Exemple concret : deux adultes et deux enfants de 6 et 10 ans**, tous sur la glace, avec leurs propres patins et leurs gants : **32 € en faible affluence** ou **45 € en forte affluence**. Si les quatre louent des patins, le total passe à **42 € ou 55 €**, hors achat éventuel de gants. Avec des enfants qui ne patinent pas, le budget change : ne payez pas une entrée pour toute la famille par automatisme.

Les séances sont en principe sans limite de durée, mais peuvent être **ramenées à 30 minutes** lorsqu'il y a beaucoup de monde. Pour une première expérience avec un petit de 3 à 6 ans, cette contrainte et l'accompagnement obligatoire comptent autant que le tarif. La réservation et les conditions à jour sont à vérifier auprès de l'organisateur avant de partir.

## Horaires : attention aux jours fériés et aux deux espaces

Le **marché traditionnel** ouvre normalement du lundi au jeudi de **11 h à 21 h**, le vendredi de **11 h à 23 h**, le samedi de **10 h à 23 h** et le dimanche de **11 h à 21 h 30**. **Le Sommet** suit ces horaires, sauf le jeudi où sa fermeture habituelle est annoncée à **22 h**.

La **patinoire** ouvre habituellement **de 14 h à 21 h du lundi au mercredi**, **de 11 h à 22 h le jeudi**, **de 11 h à 23 h le vendredi**, **de 10 h à 23 h le samedi** et **de 11 h à 21 h 30 le dimanche**.

Les horaires exceptionnels annoncés sont **11 h–18 h les 24 et 31 décembre**, puis **15 h–23 h les 25 décembre et 1er janvier**. Le marché traditionnel ayant terminé sa saison le 31 décembre, **le 1er janvier concerne Le Sommet et la patinoire**, pas les chalets traditionnels. Vérifiez les mises à jour et les éventuelles adaptations de dernière minute avant le départ.

## Accès, poussette et pause repas : ce qu'il faut anticiper

Rendez-vous sur le **parvis de La Défense à Puteaux**, à la station **La Défense–Grande Arche** : métro **1**, RER **A et E**, tram **T2** ou Transilien **L et U**. Pour savoir quels billets acheter selon l'âge des enfants et le nombre de trajets, utilisez notre [guide des transports à Paris en famille](/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/).

L'organisateur indique que **les allées principales sont adaptées aux fauteuils roulants**, avec des accès repérés sur le plan. Une poussette peut être pratique sur le parvis, mais l'affluence des chalets et les correspondances souterraines peuvent compliquer la circulation. Pour éviter les escaliers avec une poussette, consultez notre [guide du métro, RER, bus et tram avec bébé à Paris](/articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/). La présence et l'emplacement précis de **toilettes, table à langer ou espace bébé** n'ont pas été confirmés dans les sources consultées : repérez-les sur le plan officiel ou renseignez-vous auprès de l'organisateur avant de venir avec un nourrisson.

Les chalets et restaurants proposent de quoi manger sur place, notamment des spécialités régionales. Pour les repas des plus petits, ne comptez pas sur un micro-ondes ou un service de réchauffage sans confirmation. Si vous venez en fin de journée, prévoyez le retour en transports en tenant compte de la foule.

## Et si vous restez dormir près de La Défense ?

Pour transformer la visite en week-end, le [Residhome Puteaux La Défense sur Expedia.fr](https://www.expedia.fr/Paris-Hotel-Residhome-Puteaux-La-Defense.h36474633.Description-Hotel) propose notamment un **appartement Executive annoncé pour quatre personnes**, avec **un lit double et un canapé-lit double**, ainsi qu'un coin cuisine dans la résidence. Sélectionnez bien cette catégorie : les studios ordinaires affichés ne sont prévus que pour deux personnes. Vérifiez les dates, le tarif total, la capacité réelle et les équipements pour bébé avant de réserver.

Si vous cherchez une autre activité à proximité pendant le séjour, notre guide de la [Cité de l'Histoire à Puteaux](/articles/sorties/cite-de-l-histoire-a-puteaux-est-ce-une-bonne-sortie-avec-des-enfants/) aide à décider si cette visite intérieure convient à l'âge des enfants.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | Noël à Provins 2026: marché médiéval, animations et visites en famille | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/noel-a-limoges-2026-en-famille-marche-animations-et-idees-pour-un-week-end/ | Noël à Limoges 2026 en famille: marché, animations et idées pour un week-end | evenements | Limoges, Haute-Vienne, Nouvelle-Aquitaine
- /articles/sorties/cite-de-l-histoire-a-puteaux-est-ce-une-bonne-sortie-avec-des-enfants/ | Cité de l'Histoire à Puteaux: est-ce une bonne sortie avec des enfants? | sorties | Puteaux, Hauts-de-Seine, Île-de-France
- /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | Marché de Noël de Mulhouse 2026 en famille: horaires, étoffe et animations | evenements | Mulhouse, Haut-Rhin, Grand Est
- /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | Noël à Toulouse 2026 en famille: marchés, Père Noël et patinoire | evenements | Toulouse, Haute-Garonne, Occitanie
- /articles/evenements/la-seine-musicale-en-famille-en-2027-quels-concerts-et-ateliers-selon-l-age/ | La Seine Musicale en famille en 2027: quels concerts et ateliers selon l'âge ? | evenements | Boulogne-Billancourt, Hauts-de-Seine, Île-de-France
- /articles/voyages/sejourner-a-saint-cloud-en-famille-pour-visiter-paris-bon-compromis/ | Séjourner à Saint-Cloud en famille pour visiter Paris: bon compromis? | voyages | Saint-Cloud, Hauts-de-Seine, Île-de-France
- /articles/bons-plans/musees-des-hauts-de-seine-en-famille-les-bons-plans-pour-payer-moins/ | Musées des Hauts-de-Seine en famille: les bons plans pour payer moins | bons-plans | Boulogne-Billancourt, Hauts-de-Seine, Île-de-France
- /articles/evenements/tous-en-sons-2026-a-marseille-quel-spectacle-choisir-selon-l-age-des-enfants/ | Tous en Sons ! 2026 à Marseille: spectacles enfants, âges et tarifs | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | Noël 2026 à Toulon en famille: marché, patinoire et horaires | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | Noël à Caen 2026 en famille: marché de Noël et visite illuminée | evenements | Caen, Calvados, Normandie
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | Noël à Bayeux 2026 en famille: marché et Galopades | evenements | Bayeux, Calvados, Normandie
- /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | Lumières de Laval 2026 en famille: marchés, grande roue et croisière | evenements | Laval, Mayenne, Pays de la Loire
- /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | Noël 2026 à Brest en famille: marché, projections et horaires | evenements | Brest, Finistère, Bretagne
- /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | Festival des Petits Explorateurs 2026 à Dijon: ateliers, horaires et tarifs | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille/ | Flottins d’Évian 2026: un village de Noël en bois flotté à découvrir en famille | evenements | Évian-les-Bains, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | Festival BD Colomiers 2026 en famille: programme, tarifs et accès | evenements | Colomiers, Haute-Garonne, Occitanie

### Historique Radar lié

- opportunity | /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | 2026-10-29T23:28:55.064Z
- opportunity | /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | 2026-10-30T03:27:02.483Z
- opportunity | /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | 2026-10-30T09:27:15.122Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z
- opportunity | /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | 2026-10-19T09:37:22.517Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z
- opportunity | /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | 2026-10-30T06:28:26.726Z
- opportunity | /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | 2026-10-31T10:28:17.432Z
- opportunity | /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | 2026-10-30T15:36:05.374Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
