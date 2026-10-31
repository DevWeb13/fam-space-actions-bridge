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
title: "Luminéales du Thabor 2026 à Rennes : tarifs famille, horaires et poussettes"
subtitle: Quel billet choisir et comment préparer cette balade nocturne avec des enfants ?
summary: "Du 27 novembre 2026 au 3 janvier 2027, les Luminéales transforment le Thabor en parcours lumineux et musical. Prix pour une famille, gratuités, créneaux, poussettes et retour : les points à vérifier avant de réserver."
category: evenements
location:
  city: Rennes
  department: Ille-et-Vilaine
  region: Bretagne
keywords:
  - Luminéales du Thabor Rennes 2026
  - Des Noëls dans le monde Rennes enfants
  - Luminéales Thabor tarif famille
  - parcours lumineux Thabor poussette
sources:
  - title: Les Luminéales du Thabor - informations et billetterie officielles
    url: https://leslumineales.fr/
  - title: Destination Rennes - Les Luminéales du Thabor
    url: https://www.tourisme-rennes.com/sortir/les-lumineales-du-thabor-des-noels-dans-le-monde/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille
  decision: Permettre à une famille de décider si ce parcours nocturne convient à l'âge et à la mobilité de ses enfants, de choisir le billet réellement le moins cher et un créneau praticable, puis de préparer l'aller-retour.
  affiliationPotential: "Billetterie de l'événement uniquement sur le site officiel : aucune offre de billet correspondante identifiée chez Tiqets, GetYourGuide ou Klook. Hébergement pertinent vérifié sur Booking.com : TY AR PARIZ T3 Rennes centre Parc du Thabor, appartement de deux chambres avec cuisine et équipements bébé, https://www.booking.com/hotel/fr/ty-ar-pariz-t3-rennes-centre-parc-du-thabor.html ; prix et disponibilité aux dates choisies non vérifiés."
  gsc:
    retrievedAt: 2026-10-31T02:28:22+01:00
    dataThrough: 2026-10-28
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Les Luminéales du Thabor - site officiel de l'organisateur »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-03
---

Du **27 novembre 2026 au 3 janvier 2027**, le parc du Thabor à Rennes accueille la première édition des **Luminéales**, intitulée « Des Noëls dans le monde ». Ce n'est pas un marché de Noël : il s'agit d'une balade nocturne payante, ponctuée de dix escales lumineuses et musicales autour des traditions de Noël, du Mexique à l'Ukraine en passant notamment par l'Italie et la Colombie.

Pour une famille, le choix dépend surtout du **prix réel des billets**, de l'heure à laquelle les enfants peuvent tenir dehors et de la facilité du retour. La durée annoncée est d'environ **1 h 15**, sans compter le trajet jusqu'au parc.

## Quel billet revient le moins cher en famille ?

Voici les tarifs annoncés par [l'organisateur des Luminéales](https://leslumineales.fr/) pour cette édition :

- **15 €** au plein tarif ;
- **10 €** au tarif réduit, notamment pour les **6-17 ans**, les étudiants, les bénéficiaires du RSA, les demandeurs d'emploi et les personnes à mobilité réduite ;
- **5 €** au tarif **Sortir!**, pour les personnes éligibles ;
- **gratuit pour les moins de 5 ans**, avec un billet gratuit à réserver malgré tout ;
- **10 € par personne avec le pack famille**, proposé à partir de quatre personnes.

Le pack n'est donc pas automatiquement le meilleur choix. **Deux adultes et deux enfants de 6 à 17 ans** paieraient **50 €** en billets individuels (15 + 15 + 10 + 10), contre **40 €** avec le pack famille : une économie de 10 €. À l'inverse, **deux adultes et deux enfants de moins de 5 ans** totalisent **30 €** avec les billets individuels et les deux entrées gratuites : inutile de payer un pack à 40 €. Pour deux adultes et un enfant de 6 à 17 ans, les billets individuels totalisent **40 €**.

**Attention à l'âge de 5 ans exactement :** la grille officielle indique la gratuité *avant* 5 ans et le tarif réduit *de 6 à 17 ans*. Elle ne précise pas clairement le tarif applicable à un enfant qui a déjà 5 ans. Vérifiez ce cas auprès de l'organisateur avant de payer, plutôt que de supposer la gratuité ou la réduction. Vérifiez aussi l'application des tarifs préférentiels dans le panier, surtout si votre famille cumule plusieurs profils éligibles. Des justificatifs sont demandés pour les tarifs réduits et gratuits.

## À quelle heure réserver avec des enfants ?

Le parcours est annoncé **de 19 h à minuit**, avec une **dernière entrée à 22 h 30**. L'accès se fait à l'heure du créneau figurant sur le billet, par **la place Saint-Mélaine**, et non par n'importe quelle entrée du Thabor. Le parc ferme d'abord au public à **18 h 30** : une promenade dans les jardins en fin d'après-midi ne permet pas de rester sur place en attendant le spectacle.

Avec un enfant jeune ou fatigué le soir, un créneau proche de **19 h** est généralement plus raisonnable qu'une entrée tardive : comptez environ 1 h 15 de visite, puis le retour. La billetterie existe aussi sur place à partir de 19 h, mais **un créneau complet en ligne ne peut pas être récupéré au guichet**. Mieux vaut donc réserver à l'avance.

Les billets sont **ni échangeables ni remboursables**. La pluie n'ouvre pas droit à remboursement, sauf annulation par l'organisateur. Regardez la météo avant d'acheter si votre famille supporte mal une longue sortie dehors.

## Poussette, petits enfants et pauses : est-ce praticable ?

**Les poussettes sont autorisées.** Cela ne signifie pas pour autant que tout le parcours soit plat : certains secteurs du parc présentent des **pentes, des dénivelés et du gravier**. Une poussette maniable et de bonnes chaussures seront plus adaptées qu'un équipement difficile à pousser. Pour une personne en fauteuil roulant, l'organisateur recommande un accompagnant et propose de répondre aux questions d'accessibilité à **contact@leslumineales.fr**.

Les **toilettes du parc seront ouvertes**. Un chalet doit proposer boissons chaudes et petite restauration, mais les informations publiées ne garantissent ni table à langer ni possibilité de réchauffer un repas de bébé : mieux vaut prévoir ce dont vous avez besoin. Habillez les enfants pour une balade hivernale en extérieur et gardez la possibilité de faire des pauses.

Les dix escales mêlent chants, projections et installations lumineuses, avec une création musicale du duo Birds on a Wire. L'expérience peut plaire aux enfants qui aiment observer et se promener, mais elle ne se présente pas comme un parc de manèges ou une succession d'ateliers. Pour un tout-petit qui ne tient pas longtemps dehors après 19 h, le coût et l'horaire méritent réflexion.

## Comment venir et surtout rentrer du Thabor ?

L'organisateur indique les **bus C5** (arrêt Thabor), **C2, C3 et 12** (arrêt Fossés), ainsi que le **métro Sainte-Anne** suivi d'une marche. Vérifiez votre **dernier départ** sur [le réseau STAR](https://www.star.fr/) avant de choisir une entrée tardive. Pour la gratuité des enfants et les titres adaptés aux familles, notre guide [des transports à Rennes avec des enfants](https://www.fam-space.fr/articles/vie-pratique/rennes-avec-des-enfants-les-transports-sont-gratuits-avant-12-ans-mais-pas-sans-carte/) détaille notamment le rôle de la carte KorriGo pour les 5-11 ans.

Si vous venez en voiture, le stationnement du centre est limité. Le parking **Kléber**, à environ **600 m**, dispose d'une sortie accessible 24 h/24, mais ses horaires d'entrée varient. Les parcs-relais STAR sont une autre possibilité, à condition de vérifier leur ouverture à l'heure du retour : certains ferment le dimanche et les jours fériés.

## Et pour un week-end à Rennes ?

Si vous prolongez la soirée par un séjour, l'[appartement TY AR PARIZ T3 près du Thabor sur Booking.com](https://www.booking.com/hotel/fr/ty-ar-pariz-t3-rennes-centre-parc-du-thabor.html) peut convenir à une famille souhaitant disposer d'une cuisine. Il comporte deux espaces nuit, mais **l'accès à la seconde chambre passe par la première**, un détail à connaître si les enfants se couchent avant les adultes. Un lit bébé est annoncé sur demande : faites-le confirmer, ainsi que le linge de lit, le prix total et la disponibilité à vos dates.

Cette sortie payante est distincte des illuminations et animations gratuites de Noël à Rennes. Ne présumez pas de leur programme 2026 sans annonce officielle : choisissez les Luminéales pour cette balade immersive précise, et non comme un billet donnant accès à l'ensemble des festivités de la ville.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/balade-a-velo-autour-de-rennes-quel-parcours-choisir-avec-des-enfants/ | Balade à vélo autour de Rennes: quel parcours choisir avec des enfants? | activites | Rennes, Ille-et-Vilaine, Bretagne
- /articles/vie-pratique/rennes-avec-des-enfants-les-transports-sont-gratuits-avant-12-ans-mais-pas-sans-carte/ | Rennes avec des enfants: transports gratuits avant 12 ans, comment ça marche? | vie-pratique | Rennes, Ille-et-Vilaine, Bretagne
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-a-rennes-ou-jouer-gratuitement-avec-son-enfant/ | LAEP à Rennes: où jouer gratuitement avec son enfant? | parentalite | Rennes, Ille-et-Vilaine, Bretagne
- /articles/maison/ecotravo-a-rennes-metropole-qui-peut-obtenir-jusqu-a-15-000-pour-renover-sa-maison/ | écoTravo à Rennes Métropole: qui peut obtenir jusqu'à 15 000 € pour rénover sa maison? | maison | Rennes, Ille-et-Vilaine, Bretagne
- /articles/evenements/parents-delires-rennes-2026-famille/ | Par’ents Délires 4 à Rennes: une fête gratuite pour toute la famille le 26 août 2026 | evenements | Rennes, Ille-et-Vilaine, Bretagne
- /articles/sorties/parc-en-folie-2026-a-rennes-billet-en-ligne-ou-sur-place-quelle-formule-choisir-en-famille/ | Parc en Folie 2026 à Rennes: tarifs, espace 0-3 ans et infos pratiques en famille | sorties | Bruz, Ille-et-Vilaine, Bretagne
- /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | Noël à Chenonceau 2026: décors, nocturnes et tarifs en famille | evenements | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/bons-plans/fougeres-en-famille-a-petit-prix-chateau-coursive-et-balade-gratuite/ | Fougères en famille à petit prix: château, Coursive et balade gratuite | bons-plans | Fougères, Ille-et-Vilaine, Bretagne
- /articles/cuisine/ferme-marine-de-cancale-avec-des-enfants-quelle-visite-choisir-a-la-toussaint-2026/ | Ferme Marine de Cancale avec des enfants: quelle visite choisir à la Toussaint 2026? | cuisine | Cancale, Ille-et-Vilaine, Bretagne
- /articles/evenements/quai-des-bulles-2026-a-saint-malo-en-famille-tarifs-programme-et-conseils/ | Quai des Bulles 2026 à Saint-Malo en famille: tarifs, programme et conseils | evenements | Saint-Malo, Ille-et-Vilaine, Bretagne
- /articles/voyages/dinard-en-famille-pendant-3-jours-plages-balades-et-escapade-a-saint-malo/ | Dinard en famille pendant 3 jours: plages, balades et escapade à Saint-Malo | voyages | Dinard, Ille-et-Vilaine, Bretagne
- /articles/voyages/saint-malo-en-famille-ou-dormir-pour-profiter-de-la-plage-et-d-intra-muros-a-pied/ | Saint-Malo en famille: où dormir pour profiter de la plage et d'Intra-Muros à pied | voyages | Saint-Malo, Ille-et-Vilaine, Bretagne
- /articles/evenements/terra-aletia-saint-malo-famille-2026/ | Terra Aletia 2026 à Saint-Malo: un voyage immersif dans l’univers des corsaires | evenements | Saint-Malo, Ille-et-Vilaine, Bretagne
- /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | Noël à Caen 2026 en famille: marché de Noël et visite illuminée | evenements | Caen, Calvados, Normandie
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | Noël à Bayeux 2026 en famille: marché et Galopades | evenements | Bayeux, Calvados, Normandie
- /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | Lumières de Laval 2026 en famille: marchés, grande roue et croisière | evenements | Laval, Mayenne, Pays de la Loire
- /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | Noël 2026 à Brest en famille: marché, projections et horaires | evenements | Brest, Finistère, Bretagne
- /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | Festival des Petits Explorateurs 2026 à Dijon: ateliers, horaires et tarifs | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille/ | Flottins d’Évian 2026: un village de Noël en bois flotté à découvrir en famille | evenements | Évian-les-Bains, Haute-Savoie, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | 2026-10-30T03:27:02.483Z
- opportunity | /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | 2026-10-19T19:48:02.164Z
- opportunity | /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | 2026-10-30T09:27:15.122Z
- opportunity | /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | 2026-10-30T06:28:26.726Z
- opportunity | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-10-24T12:31:27.784Z
- opportunity | /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | 2026-10-30T15:36:05.374Z
- opportunity | /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | 2026-10-30T21:26:32.584Z
- opportunity | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-10-30T18:26:56.039Z
- opportunity | /articles/sorties/parc-en-folie-2026-a-rennes-billet-en-ligne-ou-sur-place-quelle-formule-choisir-en-famille/ | 2026-10-07T09:18:46.414Z
- opportunity | /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | 2026-10-30T12:36:12.349Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
