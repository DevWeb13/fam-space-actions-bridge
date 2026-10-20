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
title: "Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations"
subtitle: "Du 25 novembre au 27 décembre: horaires selon les dates, activités pour enfants et accès depuis la gare."
summary: "Préparez le marché de Noël de Reims 2026 avec des enfants: horaires des chalets, petit train, grande roue, spectacle Regalia, tarifs et transports."
category: evenements
location:
  city: Reims
  department: Marne
  region: Grand Est
keywords:
  - marché de Noël Reims 2026 famille
  - marché de Noël Reims enfants horaires
  - marché de Noël Reims 2026 petit train grande roue
sources:
  - title: Ville de Reims - Marché de Noël 2026, horaires et animations
    url: https://www.reims.fr/la-ville-de-reims/festivals-et-evenements/le-marche-de-noel-de-reims
  - title: Ville de Reims - Foire de Noël et des Rois
    url: https://www.reims.fr/la-ville-de-reims/festivals-et-evenements/le-marche-de-noel-de-reims/la-foire-de-noel-et-des-rois
  - title: Ville de Reims - Les parkings et zones de stationnement
    url: https://www.reims.fr/qualite-de-vie-environnement/stationnement-et-deplacements/les-parkings-et-zones-de-stationnement
  - title: Grand Reims Mobilités - Parkings relais
    url: https://grandreims-mobilites.fr/fr/zo2-Parkings-Relais.html
  - title: Novotel Suites Reims Centre - catégories de suites et capacité familiale
    url: https://novotel-suites-reims.com/fr/suites.html
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces
  decision: Choisir un jour et un horaire adaptés aux enfants pour visiter le marché, distinguer les animations de Noël réellement confirmées en 2026 des informations d'anciennes éditions, et prévoir le coût et l'accès d'une sortie à la journée ou avec nuit.
  affiliationPotential: "Le marché est accessible librement: aucune billetterie partenaire pour l'entrée. Pour les familles qui dorment à Reims, Novotel Suites Reims Centre sur Booking.com (https://www.booking.com/hotel/fr/suitenovotel-reims-centre.fr.html) est une offre familiale vérifiée près de la gare, 1 rue Édouard Mignot. L'hôtel annonce des suites de 30 m² dont certaines hébergent jusqu'à 2 adultes et 2 enfants, avec literie modulable. Vérifier la catégorie de suite, les âges et la capacité, les disponibilités, le prix et les conditions de réservation aux dates retenues."
  gsc:
    retrievedAt: 2026-10-19T04:30:00.000Z
    dataThrough: 2026-10-16
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Reims - Le marché de Noël de Reims 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-27
---

Le **marché de Noël de Reims 2026** se tient **du mercredi 25 novembre au dimanche 27 décembre**, sur les **hautes Promenades Jean-Louis Schneiter** et l'**esplanade de la porte de Mars**, à proximité de la gare Reims Centre. Avec ses chalets, un petit train pour les enfants et plusieurs animations réparties dans la ville, il permet une sortie en famille sans obligation de réserver un billet d'entrée.

Pour choisir le bon moment, attention aux horaires: **le marché ferme plus tôt le 24 décembre et reste fermé le 25**. Les attractions situées ailleurs, comme la grande roue et la foire, n'ont pas nécessairement les mêmes dates.

## Quels jours et horaires choisir avec les enfants?

La [Ville de Reims publie deux grilles d'ouverture pour l'édition 2026](https://www.reims.fr/la-ville-de-reims/festivals-et-evenements/le-marche-de-noel-de-reims).

**Du 25 novembre au 20 décembre:**

- **Lundi:** 14h à 20h.
- **Mardi, mercredi et jeudi:** 11h30 à 21h.
- **Vendredi:** 11h30 à 22h.
- **Samedi:** 10h à 22h.
- **Dimanche:** 10h à 20h.

**Du 21 au 27 décembre:**

- **Lundi 21 décembre:** 11h à 20h.
- **Mardi 22 et mercredi 23 décembre:** 11h à 21h.
- **Jeudi 24 décembre:** 11h à 18h.
- **Vendredi 25 décembre:** **fermé**.
- **Samedi 26 décembre:** 10h à 22h.
- **Dimanche 27 décembre:** 10h à 18h, **dernier jour du marché**.

Avec des petits enfants, un passage en matinée le samedi ou le dimanche permet de visiter les chalets avant une éventuelle soirée consacrée aux lumières. En semaine, le **lundi n'ouvre qu'à 14h jusqu'au 20 décembre**: ne prévoyez pas une sortie sur le temps de midi ce jour-là. Pour voir les illuminations sans rester tard, choisissez plutôt une fin d'après-midi, en gardant à l'esprit que l'affluence peut ralentir la promenade.

## Où sont les chalets et que faire avec les enfants?

Le marché s'installe sur les **hautes Promenades**, dans le prolongement de la **porte de Mars**. La Ville annonce **environ 150 chalets** mêlant gourmandises, artisanat et idées de cadeaux, ainsi qu'un **village des artisans**, une **Boutique #rémoise**, un **petit train pour les enfants** et un **Village des Oursons**.

Ces attractions ne doivent pas être confondues avec les manèges de la foire, situés dans un autre quartier. Les **horaires, conditions d'âge, réservations éventuelles et tarifs propres au petit train et au Village des Oursons ne sont pas tous détaillés pour 2026**: vérifiez les informations actualisées avant de promettre un tour à un enfant.

Si vous ne souhaitez faire qu'une courte sortie, restez sur les Promenades et la porte de Mars. Pour combiner chalets et attractions situées ailleurs, comptez des déplacements supplémentaires plutôt que de présenter tous les rendez-vous comme un seul village compact.

## Grande roue et Regalia: deux expériences différentes

La **grande roue** se trouve **place Drouet-d'Erlon**, et non à l'intérieur du marché des Promenades. La programmation municipale l'annonce **du 14 novembre 2026 au 10 janvier 2027**, de **10h à 22h**, avec un tarif affiché de **8 € pour un adulte et 6 € pour un enfant**. Cette attraction est donc **payante** et fonctionne sur une période plus longue que le marché. Revérifiez le tarif, les éventuelles conditions d'âge et la disponibilité au moment de votre visite.

Autre possibilité pour prolonger la sortie: **Regalia**, le spectacle son et lumière projeté sur la façade de la **cathédrale de Reims**. La [Ville annonce](https://www.reims.fr/la-ville-de-reims/festivals-et-evenements/le-marche-de-noel-de-reims) une projection **gratuite**, **à 20h les vendredis et samedis**, jusqu'au **3 janvier 2027**, **sauf le samedi 12 décembre**. Le spectacle dure environ **dix minutes**. Si les enfants ne peuvent pas attendre 20h, privilégiez les chalets ou la grande roue en journée plutôt que de construire toute la sortie autour de cette projection.

## La foire de Noël et des Rois n'est pas sur les Promenades

La [foire de Noël et des Rois](https://www.reims.fr/la-ville-de-reims/festivals-et-evenements/le-marche-de-noel-de-reims/la-foire-de-noel-et-des-rois) est une **fête foraine distincte**, **chaussée Bocquaine**, près du stade Delaune. Sa page municipale indique une édition **du 5 décembre 2026 au 3 janvier 2027**.

Les manèges s'adressent à des publics différents et les prix ne sont pas ceux des chalets ni ceux de la grande roue. En octobre, les informations 2026 sur les horaires précis, l'âge requis pour chaque manège et les conditions d'accès ne sont pas toutes disponibles. Consultez la page de la foire avant de prévoir un déplacement depuis le marché: sa localisation ne permet pas d'assimiler les deux espaces à une même promenade à pied avec un tout-petit.

## Quel budget prévoir pour une famille?

**L'entrée au marché et la promenade entre les chalets sont libres.** Vous payez seulement ce que vous choisissez: nourriture, cadeaux, grande roue ou autres manèges. **Regalia est annoncé gratuit**, mais le tour de grande roue est tarifé séparément; pour une famille de deux adultes et deux enfants au tarif annoncé, cela représente **28 €** avant les autres dépenses.

Pour garder le budget maîtrisé, choisissez à l'avance **une activité payante éventuelle**, plutôt que de compter sur la gratuité de toutes les animations. Ne prenez pas les tarifs de petits trains ou de manèges vus dans un ancien programme pour des tarifs 2026.

## Venir en train ou se garer sans voiture au centre

Pour une famille venant en train, la **gare Reims Centre** est très pratique: elle débouche près des Promenades où sont installés les chalets. Il n'est généralement pas nécessaire de prendre un autre transport pour découvrir le marché lui-même. Avec une poussette, vérifiez toutefois l'entrée et le cheminement retenus: l'accessibilité et l'affluence peuvent varier selon les espaces.

Si vous venez en voiture, les **quatre parkings-relais** du réseau Grand Reims Mobilités constituent une alternative au stationnement dans le centre: **Thillois, Neufchâtel, Hôpital Debré et Belges**. Selon la [Ville de Reims](https://www.reims.fr/qualite-de-vie-environnement/stationnement-et-deplacements/les-parkings-et-zones-de-stationnement), le stationnement y est **gratuit sur présentation d'un titre Grand Reims Mobilités**; le [réseau précise leurs modalités d'accès](https://grandreims-mobilites.fr/fr/zo2-Parkings-Relais.html). Le trajet en bus ou en tram nécessite un titre valide. Vérifiez les dessertes et les horaires de retour, surtout si vous souhaitez rester pour Regalia.

Les parkings du centre-ville sont soumis à leurs propres conditions tarifaires. N'utilisez pas sans confirmation un plan de navettes gratuites ou des modalités de stationnement publiés pour un Noël antérieur: les dispositifs événementiels peuvent changer.

## Dormir sur place pour prolonger le séjour

Si vous venez de loin ou souhaitez voir les illuminations le soir sans reprendre le train immédiatement, le [**Novotel Suites Reims Centre sur Booking.com**](https://www.booking.com/hotel/fr/suitenovotel-reims-centre.fr.html), au **1 rue Édouard Mignot**, est proche de la gare Reims Centre.

L'hôtel propose des **suites de 30 m²**, dont des **suites Supérieure ou Exécutive annoncées pour deux adultes et deux enfants**, avec un espace nuit et un espace séjour. C'est une option pratique pour une famille souhaitant dormir près de la gare. Vérifiez au moment de réserver **l'âge des enfants, le nombre exact de couchages, les éventuels lits bébé, le tarif final, les disponibilités et l'annulation** aux dates de votre choix: toutes les catégories ne sont pas prévues pour quatre personnes.

Pour compléter un séjour avec une sortie couverte en journée, vous pouvez consulter notre guide du [**Musée Automobile Reims-Champagne en famille**](/articles/activites/musee-automobile-reims-champagne-en-famille-que-voir-et-comment-preparer-sa-visite/), sans le confondre avec les animations du marché.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/ | Marché de Noël de Lille 2026 en famille: village, Grande Roue et infos pratiques | evenements | Lille, Nord, Hauts-de-France
- /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | Marché de Noël de Mulhouse 2026 en famille: horaires, étoffe et animations | evenements | Mulhouse, Haut-Rhin, Grand Est
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/noel-a-limoges-2026-en-famille-marche-animations-et-idees-pour-un-week-end/ | Noël à Limoges 2026 en famille: marché, animations et idées pour un week-end | evenements | Limoges, Haute-Vienne, Nouvelle-Aquitaine
- /articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/ | Noël à Trévarez 2026 en famille: dates, horaires et réservation | evenements | Saint-Goazec, Finistère, Bretagne
- /articles/evenements/marche-de-noel-de-cusset-2026-en-famille-quel-jour-choisir/ | Marché de Noël de Cusset 2026 en famille: quel jour choisir? | evenements | Cusset, Allier, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/activites/musee-automobile-reims-champagne-en-famille-que-voir-et-comment-preparer-sa-visite/ | Musée Automobile Reims-Champagne en famille: que voir et comment préparer sa visite? | activites | Reims, Marne, Grand Est
- /articles/evenements/habits-de-lumiere-a-epernay-avec-des-enfants-quel-jour-choisir-en-2026/ | Habits de Lumière à Épernay avec des enfants: quel jour choisir en 2026? | evenements | Épernay, Marne, Grand Est
- /articles/voyages/hautvillers-avec-des-enfants-village-ou-foret-quel-parcours-choisir/ | Hautvillers avec des enfants: village ou forêt, quel parcours choisir? | voyages | Hautvillers, Marne, Grand Est
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | Fêtes de Saint-Nicolas 2026 à Nancy en famille: défilé, villages et animations | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | bd BOUM 2026 à Blois en famille: ateliers, expositions et cinéma | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | Foire du livre de Brive 2026 en famille: dates, auteurs jeunesse et conseils de visite | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine
- /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | Halloween 2026 à la Mer de Sable: spectacles, frissons et billets en famille | evenements | Ermenonville, Oise, Hauts-de-France
- /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | Toussaint 2026 à Nausicaá: ateliers en journée et nocturne d’Halloween | evenements | Boulogne-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | Métamorphoses 2026 au quai Branly: séances gratuites et films par âge | evenements | Paris, Paris, Île-de-France
- /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | Festival du Film pour Enfants 2026 en Isère: séances, ateliers et tarifs | evenements | Vizille, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | Festi'Mômes 2026 à Nantes: séances, spectacles et tarifs en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | Automnales d'Harcourt 2026: animations, visites et tarifs en famille | evenements | Harcourt, Eure, Normandie

### Historique Radar lié

- opportunity | /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | 2026-10-16T06:56:21.314Z
- opportunity | /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | 2026-10-18T19:49:09.191Z
- opportunity | /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | 2026-10-17T11:48:00.184Z
- opportunity | /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | 2026-10-17T15:41:33.883Z
- opportunity | /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | 2026-10-19T19:48:02.164Z
- opportunity | /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | 2026-10-19T16:47:56.278Z
- opportunity | /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | 2026-10-18T16:46:58.413Z
- opportunity | /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | 2026-10-18T12:12:00.071Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
