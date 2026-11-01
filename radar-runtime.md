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
title: "Noël 2026 à Quimper en famille : village, concert et ateliers gratuits"
subtitle: Quatre rendez-vous à choisir selon la date et l'âge des enfants, avec les précautions utiles pour les inscriptions.
summary: Du village de Noël annoncé du 3 au 31 décembre au concert gratuit du 4 décembre, puis aux deux rendez-vous jeunesse du 16 décembre, voici ce qui est confirmé à Quimper et ce qu'il faut encore vérifier.
category: evenements
location:
  city: Quimper
  department: Finistère
  region: Bretagne
keywords:
  - Noël Quimper 2026 famille
  - village de Noël Quimper 2026
  - animations gratuites Noël Quimper enfants
sources:
  - title: Ville de Quimper - Appel à candidature pour le Village de Noël 2026
    url: https://www.quimper.bzh/1591-autorisation-d-occupation-du-domaine-public.htm
  - title: Conservatoire de Quimper - Concert de Noël des cuivres du 4 décembre
    url: https://conservatoire.quimper.bzh/actualite/51652/857-4-dec.-concert-de-noel-des-cuivres.htm
  - title: Ville de Quimper - Atelier cré'actif spécial Noël du 16 décembre
    url: https://www.quimper.bzh/evenement/52619/151-atelier-cre-actif-special-noel.htm
  - title: Ville de Quimper - Heure du conte du 16 décembre
    url: https://www.quimper.bzh/evenement/52183/151-heure-du-conte.htm
  - title: Acceslibre - Accessibilité de la médiathèque Alain-Gérard
    url: https://acceslibre.beta.gouv.fr/app/29-quimper/a/bibliotheque-mediatheque/erp/mediatheque-alain-gerard/
  - title: Acceslibre - Accessibilité de la médiathèque d'Ergué-Armel
    url: https://acceslibre.beta.gouv.fr/app/29-quimper/a/bibliotheque-mediatheque/erp/mediatheque-dergue-armel/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-2026-a-quimper-en-famille-village-concert-ou-ateliers-gratuits
  decision: Choisir une sortie de Noël à Quimper selon le jour, l'âge des enfants, la gratuité et la nécessité de réserver un atelier, sans confondre village, concert et animations des médiathèques.
  affiliationPotential: "Aucune billetterie partenaire naturelle pour ces rendez-vous gratuits. Pour un séjour en train, Hôtel de la Gare à Quimper : chambre familiale de quatre personnes affichée sur Expedia.fr (https://www.expedia.fr/Quimper-Hotel-Hotel-De-La-Gare.h13415908.Description-Hotel), disponibilité et prix à vérifier aux dates choisies."
  gsc:
    retrievedAt: 2026-11-01T04:25:25+01:00
    dataThrough: 2026-10-29
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Quimper - Village de Noël 2026, place Terre-au-Duc »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-31
---

À Quimper, les sorties de Noël 2026 ne se choisissent pas toutes de la même façon : le village de Noël permet d'envisager une balade en centre-ville pendant décembre, le concert du 4 décembre offre un rendez-vous musical gratuit, et deux animations en médiathèque sont annoncées le mercredi 16 décembre. Pour les plus jeunes, l'âge indiqué sur certaines fiches mérite toutefois une vérification avant de se déplacer.

## Le village de Noël : pour une balade à votre rythme

La Ville prévoit la huitième édition du **village de Noël du jeudi 3 au jeudi 31 décembre 2026**, place Terre-au-Duc. Son [appel à candidature municipal](https://www.quimper.bzh/1591-autorisation-d-occupation-du-domaine-public.htm) porte sur l'exploitation de **15 chalets**. Il confirme le lieu et la période, mais ne constitue pas encore un programme destiné aux visiteurs.

En particulier, les horaires d'ouverture, la liste des commerçants, les éventuelles animations pour enfants et les services sur place ne sont pas détaillés dans cet avis. Ne prévoyez donc pas une rencontre avec le Père Noël ou un atelier au village sans consulter le programme public lorsqu'il sera diffusé. Pour une visite avec un bébé, vérifiez également sur place la présence de sanitaires et d'un espace de change : ils ne sont pas confirmés par cette annonce.

## Vendredi 4 décembre : un concert gratuit pour les amateurs de musique

Le **vendredi 4 décembre à 18 h**, l'ensemble de cuivres du Conservatoire de Quimper se produit **place Terre-au-Duc** pour accompagner les festivités et les illuminations. L'[annonce du Conservatoire](https://conservatoire.quimper.bzh/actualite/51652/857-4-dec.-concert-de-noel-des-cuivres.htm) précise une **entrée libre dans la limite des places disponibles**.

C'est le choix le plus simple pour une famille qui veut profiter d'un moment musical sans acheter de billet. Aucun âge minimum ni durée précise ne sont annoncés : avec de très jeunes enfants, mieux vaut prévoir de pouvoir écourter l'écoute si nécessaire. Le concert étant annoncé sur une place, habillez les enfants pour une sortie en décembre.

## Mercredi 16 décembre : conte le matin ou création l'après-midi ?

**À 11 h 15 : l'Heure du conte**, à la **médiathèque Alain-Gérard**, esplanade Julien-Gracq. La séance est gratuite. Le descriptif municipal vise les **3 à 8 ans**, mais les champs d'âge de la même fiche indiquent **4 à 10 ans**. Pour un enfant de 3 ans ou de 9-10 ans, demandez confirmation à la médiathèque au **02 98 98 86 60**. La [fiche de l'Heure du conte](https://www.quimper.bzh/evenement/52183/151-heure-du-conte.htm) ne précise pas de réservation obligatoire : mieux vaut vérifier les modalités d'accueil et la capacité avant de venir en groupe.

**À 15 h : l'atelier créatif de Noël**, à la **médiathèque d'Ergué-Armel**, **18 rue Roger-Salengro**. Les enfants fabriqueront une décoration de lutin en papier cartonné. L'activité est **gratuite, sur inscription préalable**. Le texte de l'[annonce officielle](https://www.quimper.bzh/evenement/52619/151-atelier-cre-actif-special-noel.htm) dit **à partir de 6 ans**, tandis que le champ d'âge affiche **4 ans minimum**. Retenez 6 ans comme repère prudent et faites confirmer l'admission d'un enfant de 4 ou 5 ans ainsi que la procédure d'inscription au **02 98 98 40 81**.

Ces deux rendez-vous ont lieu dans **des médiathèques différentes** : ne vous présentez pas à Alain-Gérard pour l'atelier de l'après-midi.

## Accès, poussettes et sanitaires

Pour le village et le concert, rendez-vous **place Terre-au-Duc**, en centre-ville. Le conte se tient à Alain-Gérard, tandis que l'atelier nécessite de rejoindre Ergué-Armel : vérifiez le trajet entre les deux si vous souhaitez participer aux deux activités le même jour.

Selon la [fiche Acceslibre d'Alain-Gérard](https://acceslibre.beta.gouv.fr/app/29-quimper/a/bibliotheque-mediatheque/erp/mediatheque-alain-gerard/), l'entrée est de plain-pied, un ascenseur dessert les étages et des **toilettes adaptées** sont présentes. C'est un repère utile avec une poussette, sans garantir pour autant un espace de change bébé. La [fiche Acceslibre d'Ergué-Armel](https://acceslibre.beta.gouv.fr/app/29-quimper/a/bibliotheque-mediatheque/erp/mediatheque-dergue-armel/) indique également une **entrée de plain-pied**, mais ne documente pas suffisamment les sanitaires ni les équipements bébé pour les confirmer.

## Pour passer un week-end à Quimper

Si vous venez en train et restez dormir, l'[Hôtel de la Gare à Quimper sur Expedia.fr](https://www.expedia.fr/Quimper-Hotel-Hotel-De-La-Gare.h13415908.Description-Hotel) propose une **chambre familiale annoncée pour quatre personnes**, avec un lit double et un canapé-lit double, ou deux lits simples et un canapé-lit double selon la configuration. Sa proximité de la gare peut être pratique avec des bagages et des enfants. Sélectionnez vos dates et la composition exacte de la famille pour vérifier le prix et la disponibilité ; aucune chambre n'est garantie à l'avance.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | Noël à Nice 2026 en famille: village, spectacles et crèche | evenements | Nice, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/automne-des-gones-2026-a-lyon-quels-ateliers-gratuits-choisir-avec-les-enfants/ | Automne des gones 2026 à Lyon: ateliers et sorties gratuites en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/activites/musee-de-pont-aven-en-famille-visites-ludiques-et-ateliers-pour-enfants/ | Musée de Pont-Aven en famille: visites ludiques et ateliers pour enfants | activites | Pont-Aven, Finistère, Bretagne
- /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | Marché de Noël 100 % Côte-d’Or à Dijon 2026: horaires, spectacles et Père Noël | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | Noël 2026 à Paris La Défense en famille: marché, animations et patinoire | evenements | Puteaux, Hauts-de-Seine, Île-de-France
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | Noël à Provins 2026: marché médiéval, animations et visites en famille | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/bons-plans/pass-domaines-et-musees-du-finistere-90-ou-pass-decouverte-lequel-choisir/ | Pass Domaines et Musées du Finistère: 90 € ou Pass Découverte, lequel choisir? | bons-plans | Quimper, Finistère, Bretagne
- /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | Noël 2026 à Brest en famille: marché, projections et horaires | evenements | Brest, Finistère, Bretagne
- /articles/vie-pratique/ouessant-avec-des-enfants-sans-voiture-ferry-bagages-et-deplacements/ | Ouessant avec des enfants sans voiture: ferry, bagages et déplacements | vie-pratique | Ouessant, Finistère, Bretagne
- /articles/activites/espace-des-sciences-de-morlaix-en-famille-que-decouvrir-a-la-manufacture/ | Espace des sciences de Morlaix en famille: que découvrir à la Manufacture? | activites | Morlaix, Finistère, Bretagne
- /articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/ | Noël à Trévarez 2026 en famille: dates, horaires et réservation | evenements | Saint-Goazec, Finistère, Bretagne
- /articles/voyages/ile-de-batz-avec-des-enfants-dormir-sur-l-ile-ou-rester-a-roscoff/ | Île de Batz avec des enfants: dormir sur l'île ou rester à Roscoff? | voyages | Île-de-Batz, Finistère, Bretagne
- /articles/sorties/chateau-de-kerjean-avec-des-enfants-combien-de-temps-prevoir-et-quel-billet-choisir/ | Château de Kerjean avec des enfants: combien de temps prévoir et quel billet choisir? | sorties | Saint-Vougay, Finistère, Bretagne
- /articles/parentalite/premier-week-end-a-brest-avec-un-bebe-ou-dormir-et-quoi-faire/ | Brest avec un bébé: Océanopolis, téléphérique et séjour sans voiture | parentalite | Brest, Finistère, Bretagne
- /articles/voyages/crozon-morgat-en-famille-ou-dormir-pour-profiter-des-plages-sans-multiplier-les-trajets/ | Crozon-Morgat en famille: où dormir pour profiter des plages sans multiplier les trajets | voyages | Crozon, Finistère, Bretagne
- /articles/evenements/festival-place-aux-momes-roscoff-2026-famille/ | Festival Place aux Mômes 2026 à Roscoff: quatre spectacles gratuits en famille en août | evenements | Roscoff, Finistère, Bretagne
- /articles/evenements/planete-ocean-a-paris-preparer-la-visite-en-famille/ | Planète Océan à Paris: préparer la visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | Noël 2026 à Cannes en famille: marché du centre et Palm Beach | evenements | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | Luminéales du Thabor 2026 à Rennes: tarifs, horaires et visite en famille | evenements | Rennes, Ille-et-Vilaine, Bretagne
- /articles/evenements/tous-en-sons-2026-a-marseille-quel-spectacle-choisir-selon-l-age-des-enfants/ | Tous en Sons ! 2026 à Marseille: spectacles enfants, âges et tarifs | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur

### Historique Radar lié

- opportunity | /articles/evenements/automne-des-gones-2026-a-lyon-quels-ateliers-gratuits-choisir-avec-les-enfants/ | 2026-10-23T09:31:27.871Z
- opportunity | /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | 2026-10-31T19:33:18.323Z
- opportunity | /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | 2026-10-29T14:26:32.277Z
- opportunity | /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | 2026-10-30T06:28:26.726Z
- opportunity | /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | 2026-10-31T22:36:58.800Z
- opportunity | /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | 2026-11-01T01:35:08.448Z
- opportunity | /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | 2026-10-25T04:31:33.540Z
- opportunity | /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | 2026-10-24T03:31:56.628Z
- opportunity | /articles/evenements/tous-en-sons-2026-a-marseille-quel-spectacle-choisir-selon-l-age-des-enfants/ | 2026-10-31T13:29:50.851Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
