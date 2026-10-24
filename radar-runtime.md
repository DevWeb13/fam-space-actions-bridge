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
title: "Thoiry Lumières Sauvages 2026-2027 : soirée seule ou safari et illuminations ?"
subtitle: "Pachamama en famille : billets, budgets, dates et conseils pour le parcours nocturne"
summary: Billet soirée ou journée complète à Thoiry ? Comparez les tarifs 2026, les budgets familiaux et les horaires du festival Pachamama avant de réserver.
category: evenements
location:
  city: Thoiry
  department: Yvelines
  region: Île-de-France
keywords:
  - Thoiry Lumières Sauvages 2026 2027
  - Thoiry Pachamama tarifs enfants
  - billet soirée ou journée Thoiry
sources:
  - title: Wow Safari Thoiry - Thoiry Lumières Sauvages 2026-2027
    url: https://www.thoiry.net/thoiry-lumieres-sauvages/
  - title: Wow Safari Thoiry - Tarifs
    url: https://www.thoiry.net/tarifs/
  - title: Wow Safari Thoiry - Calendrier et horaires
    url: https://www.thoiry.net/calendrier-et-horaires/
  - title: Wow Safari Thoiry - Informations pratiques
    url: https://www.thoiry.net/informations-pratiques/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille
  decision: Choisir entre une soirée d'illuminations seule et une journée safari-zoo prolongée par le festival, selon les enfants, le budget, les dates ouvertes et la marche nocturne.
  affiliationPotential: Klook présente un billet Safari Thoiry incluant Lumières Sauvages en hiver, mais dates 2026-2027 et conditions à confirmer avant toute recommandation. Tiqets propose le safari sans preuve claire d'accès au festival. Thoiry Etoile Lodge, chambres familiales à Thoiry, est présent sur Booking.com ; vérifier les disponibilités.
  gsc:
    retrievedAt: 2026-10-24T02:34:28+02:00
    dataThrough: 2026-10-21
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Wow Safari Thoiry - Thoiry Lumières Sauvages 2026-2027 »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-03-07
---

Du **17 octobre 2026 au 7 mars 2027**, le festival **Thoiry Lumières Sauvages** revient dans les Yvelines avec sa neuvième édition, *Sur les traces de Pachamama*. Cette balade nocturne en plein air réunit plus de 3 000 sculptures lumineuses sur près de 3 km. Deux façons d'en profiter en famille : venir uniquement pour les lumières ou passer la journée au safari et au zoo avant de prolonger la visite le soir. **Le festival n'ouvre pas chaque jour de cette période.**

## Soirée seule ou journée complète : quel billet choisir ?

**Pour les illuminations uniquement**, le billet soirée suffit : **23 € par adulte** (à partir de 11 ans) et **19 € par enfant de 3 à 10 ans**. Du **19 décembre 2026 au 2 janvier 2027**, le tarif adulte passe à **25 €** ; le tarif enfant reste à 19 €. Les moins de 3 ans entrent gratuitement, sur justificatif. Ce billet ne donne pas accès au safari ni à la visite du zoo en journée.

**Pour voir aussi les animaux**, les billets journée du Wow Safari Thoiry comprennent les Lumières Sauvages **à condition que le festival soit ouvert le même jour**. Les tarifs web affichés pour 2026 sont les suivants :

- **Billet Liberté** : 34 € à partir de 11 ans, 25 € de 3 à 10 ans. Valable les jours d'ouverture **jusqu'au 31 décembre 2026**, sans réservation de date ; non remboursable, non échangeable et non modifiable. Il ne garantit pas l'entrée en cas de forte affluence.
- **Billet Futé** : 30 € à partir de 11 ans, 21 € de 3 à 10 ans. Achat en ligne **au moins sept jours avant** ; utilisable pour **une seule visite**, le jour choisi ou le lendemain si le parc ouvre. Non remboursable, non échangeable et non modifiable.
- **Pack Famille** : 118 € pour **deux adultes et trois enfants de 3 à 10 ans**. Billet daté, à acheter en ligne au moins la veille, valable uniquement le jour choisi. Ce pack n'est pas un tarif pour deux adultes et deux enfants.

Ces conditions et montants concernent les offres affichées en 2026 : **ne présumez pas qu'ils restent valables en janvier, février ou mars 2027**. Le Pass Annuel comprend également le festival les soirs où il se tient.

**Notre repère pour choisir :** si les enfants veulent surtout découvrir les sculptures, la soirée seule coûte moins cher et évite une longue journée. Si le safari et le zoo font déjà partie du programme, le billet journée permet de rester pour les lumières sans acheter une seconde entrée, mais demande davantage d'endurance.

Pour comparer une offre de journée auprès d'un revendeur, [le billet Safari Thoiry proposé sur Klook](https://www.klook.com/en-GB/activity/139228-safari-thoiry-ticket-in-france/) mentionne l'accès aux Lumières Sauvages en hiver. **La disponibilité aux dates 2026-2027 et l'accès effectif au festival le soir choisi doivent être confirmés dans les conditions du billet avant paiement** : cette offre n'est pas un billet soirée garanti.

## Quel budget prévoir pour une famille ?

Pour **deux adultes et deux enfants de 3 à 10 ans**, hors transport et repas :

- **Soirée seule : 84 €**, ou **88 €** du 19 décembre au 2 janvier.
- **Journée + illuminations avec billets Futé : 102 €**, si l'achat anticipé et le calendrier le permettent.
- **Journée + illuminations avec billets Liberté : 118 €**.

L'écart entre la soirée et la journée Futé est donc de **18 €** en tarif soirée habituel, mais de **14 €** pendant la période de Noël. À partir de **11 ans**, un enfant paie le tarif adulte : recalculez votre total selon les âges exacts. Pour deux adultes et **trois** enfants de 3 à 10 ans, le Pack Famille à 118 € mérite d'être comparé aux cinq billets Futé, soit 123 €.

Pour le safari en voiture, les aires de jeux, le camion brousse et l'organisation d'une journée complète, consultez notre [guide Wow Safari Thoiry en famille](/articles/activites/wow-safari-thoiry-en-famille-tarifs-duree-et-conseils-pour-organiser-la-visite/).

## Dates et horaires : vérifier avant de partir

Le festival se tient **du 17 octobre 2026 au 7 mars 2027, seulement les soirs programmés**. Les horaires varient : généralement **17 h à 21 h**, avec **dernière entrée à 20 h** ; certains soirs, la fermeture est à **20 h** (dernière entrée à 19 h), et en début de saison l'ouverture peut être à **18 h**. Comptez **environ 1 h 30** pour parcourir les illuminations sans vous presser.

**Attention à la fermeture exceptionnelle du samedi 24 octobre 2026 :** à la suite de rafales de vent, le parc a annoncé la fermeture **du festival ce soir-là uniquement** pour réparer certaines installations. **Le safari et le parc à pied restent ouverts ce 24 octobre.** Ce signalement est daté et ne signifie pas que les autres soirées sont annulées.

Avant chaque départ, consultez le [calendrier officiel d'ouverture et les annonces du parc](https://www.thoiry.net/calendrier-et-horaires/), y compris si vous possédez déjà un billet journée. Le parc peut modifier les horaires ou les ouvertures selon les conditions météorologiques. Pour combiner safari, zoo et lumières, prévoyez d'arriver le matin : le parc avertit qu'une arrivée **après 14 h** ne permet pas de parcourir intégralement ses deux circuits animaliers.

## Le parcours Pachamama avec des enfants

L'édition 2026-2027 raconte la quête d'un aventurier à travers les océans, le Groenland, la Mongolie, l'Inde et le Pérou, jusqu'à la figure andine de Pachamama, la Terre-Mère. Les décors lumineux et la bande sonore donnent un fil conducteur à la promenade, sans qu'il soit nécessaire de connaître l'histoire à l'avance.

Le circuit est **extérieur**, sur un **chemin forestier non aménagé**. Prévoyez des chaussures adaptées à un sol potentiellement humide, des vêtements chauds, et une poussette à **grandes roues** si un jeune enfant risque de fatiguer. Pour les personnes en fauteuil ou ayant des difficultés à marcher, **contactez le parc avant de réserver** : les indications d'accessibilité publiées ne sont pas suffisamment cohérentes pour garantir que tout le parcours convient à chaque équipement.

L'application gratuite **WOW Animal Explorer** peut déclencher des séquences sonores géolocalisées. Elle est **facultative** : le festival se visite aussi sans téléphone. Si vous l'utilisez, téléchargez le contenu à l'avance ; il fonctionne ensuite hors connexion avec la localisation activée.

Côté pauses, le parc annonce un chalet proposant boissons chaudes, crêpes, gaufres et petite restauration, ainsi que le Café Delicio le soir. Des tables de pique-nique, des espaces abrités et des toilettes sont prévus sur le parcours. Pour les informations pratiques qui peuvent évoluer, consultez la [présentation officielle de cette édition](https://www.thoiry.net/thoiry-lumieres-sauvages/).

## Et si vous restez dormir près de Thoiry ?

Pour éviter de reprendre la route juste après la promenade nocturne, vous pouvez regarder [Thoiry Etoile Lodge, Sure Hotel Collection by Best Western, sur Booking.com](https://www.booking.com/hotel/fr/auberge-du-chac-teau.fr.html), situé dans la commune et proposant des chambres familiales. Indiquez **le nombre et l'âge des enfants** avant de choisir : capacité de la chambre, prix et disponibilité pour votre date ne sont pas garantis.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/wow-safari-thoiry-en-famille-tarifs-duree-et-conseils-pour-organiser-la-visite/ | Wow Safari Thoiry en famille: tarifs 2026, billets et durée | activites | Thoiry, Yvelines, Île-de-France
- /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | Halloween 2026 au Safari de Peaugres: animations, tarifs et Festival Lumières Sauvages | evenements | Peaugres, Ardèche, Auvergne-Rhône-Alpes
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/sorties/safari-de-peaugres-avec-enfants-quel-billet-choisir-et-comment-organiser-la-journee/ | Safari de Peaugres avec enfants: quel billet choisir et comment organiser la journée | sorties | Peaugres, Ardèche, Auvergne-Rhône-Alpes
- /articles/evenements/coeur-de-ville-en-lumieres-2026-avec-des-enfants-comment-preparer-la-soiree-sans-voiture/ | Cœur de Ville en Lumières 2026 avec des enfants: comment préparer la soirée sans voiture? | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | Toussaint 2026 à Nausicaá: ateliers en journée et nocturne d’Halloween | evenements | Boulogne-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/voyages/visiter-guedelon-avec-des-enfants-preparer-la-journee-en-2026/ | Visiter Guédelon avec des enfants: préparer la journée en 2026 | voyages | Treigny-Perreuse-Sainte-Colombe, Yonne, Bourgogne-Franche-Comté
- /articles/activites/cap-decouverte-en-famille-activites-tarifs-et-conseils-pour-organiser-la-journee/ | Cap'Découverte en famille: activités, tarifs et conseils pour organiser la journée | activites | Le Garric, Tarn, Occitanie
- /articles/evenements/vacances-royales-2026-a-versailles-animations-napoleon-dates-et-billets-en-famille/ | Vacances royales 2026 à Versailles: animations Napoléon, dates et billets | evenements | Versailles, Yvelines, Île-de-France
- /articles/sorties/halloween-2026-a-france-miniature-en-famille/ | Halloween 2026 à France Miniature avec des enfants: billets et visite | sorties | Élancourt, Yvelines, Île-de-France
- /articles/bons-plans/pass-destination-yvelines-hauts-de-seine-en-famille-comment-profiter-d-au-moins-15-de-reduction/ | Pass Destination Yvelines-Hauts-de-Seine en famille: comment profiter d'au moins 15% de réduction? | bons-plans | Versailles, Yvelines, Île-de-France
- /articles/parentalite/visiter-le-chateau-de-versailles-avec-un-bebe-poussette-billets-et-parcours/ | Visiter le château de Versailles avec un bébé: poussette, billets et parcours | parentalite | Versailles, Yvelines, Île-de-France
- /articles/cuisine/atelier-cuisine-a-versailles-enfant-seul-ou-duo-parent-enfant-que-choisir/ | Atelier cuisine à Versailles: enfant seul ou duo parent-enfant, que choisir ? | cuisine | Versailles, Yvelines, Île-de-France
- /articles/maison/a-buc-votre-bac-gris-est-compte-ce-que-change-la-tarification-eco-responsable/ | À Buc, votre bac gris est compté: ce que change la tarification éco-responsable | maison | Buc, Yvelines, Île-de-France
- /articles/vie-pratique/imagine-r-dans-les-yvelines-ce-qui-change-pour-les-eleves-boursiers-a-la-rentree-2026/ | Imagine R dans les Yvelines: ce qui change pour les élèves boursiers à la rentrée 2026 | vie-pratique | Versailles, Yvelines, Île-de-France
- /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | Noël à Chenonceau 2026: décors, nocturnes et tarifs en famille | evenements | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | Noël Gaulois 2026 au Parc Astérix: billets, glissades et spectacles en famille | evenements | Plailly, Oise, Hauts-de-France
- /articles/evenements/train-du-pere-noel-a-toucy-2026-horaires-tarifs-et-reservation/ | Train du Père Noël à Toucy 2026: horaires, tarifs et réservation | evenements | Toucy, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | Noël au château d'Amboise 2026: visite, nocturnes et tarifs en famille | evenements | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | Noël à Provins 2026: marché médiéval, animations et visites en famille | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/evenements/chante-nwel-a-ducos-le-28-novembre-2026-une-soiree-de-noel-creole-en-famille/ | Chanté Nwel à Ducos le 28 novembre 2026: une soirée de Noël créole en famille | evenements | Ducos, Martinique, Martinique
- /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | Noël au château de Cheverny 2026: billets, mapping et visite en famille | evenements | Cheverny, Loir-et-Cher, Centre-Val de Loire

### Historique Radar lié

- opportunity | /articles/sorties/halloween-2026-a-france-miniature-en-famille/ | 2026-10-08T18:25:52.752Z
- opportunity | /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | 2026-10-13T05:01:12.150Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- opportunity | /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | 2026-10-18T08:44:05.495Z
- opportunity | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-10-24T12:31:27.784Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | 2026-10-23T19:58:30.214Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | 2026-10-24T06:28:53.730Z
- opportunity | /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | 2026-10-24T03:31:56.628Z
- opportunity | /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | 2026-10-24T09:33:57.174Z
- opportunity | /articles/evenements/vacances-royales-2026-a-versailles-animations-napoleon-dates-et-billets-en-famille/ | 2026-10-14T18:43:15.620Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
