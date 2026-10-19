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
title: "Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire"
subtitle: Les bonnes dates pour les enfants, de la place René Goblet à l'Hôtel de Ville, avec les dépenses à prévoir.
summary: "Du 20 novembre au 30 décembre 2026, préparez une visite familiale du marché de Noël d'Amiens: chalets, village du Père Noël, patinoire, parades, Chroma et accès."
category: evenements
location:
  city: Amiens
  department: Somme
  region: Hauts-de-France
keywords:
  - marché de Noël Amiens 2026 famille
  - marché de Noël Amiens enfants
  - village Père Noël Amiens 2026
  - patinoire Amiens Noël 2026
sources:
  - title: Ville d'Amiens - marché de Noël 2026, animations et horaires
    url: https://www.amiens.fr/Liens-utiles/Marche-de-Noel
  - title: Amiens Métropole - édition 2026
    url: https://www.amiens.fr/Les-evenements/Marche-de-Noel-2026
  - title: Organisateur - marché de Noël d'Amiens 2026
    url: https://fr.marchedenoel.fr/
  - title: Organisateur - train, parking et bus
    url: https://fr.marchedenoel.fr/pages/se-rendre-au-marche-de-noel-d-amiens.html
  - title: Amiens Métropole - Chroma, l'expérience monumentale 2026
    url: https://www.amiens.fr/Les-evenements/Chroma-l-experience-monumentale2
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades
  decision: Choisir les lieux et les dates en fonction de l'âge des enfants, de leurs envies et des horaires réellement annoncés, puis décider du budget et d'une visite à la journée ou avec nuit sur place.
  affiliationPotential: "Entrée libre au marché; ne pas forcer de billetterie pour le village du Père Noël ou la patinoire sans prestation partenaire exacte. Hébergement pertinent vérifié sur Booking.com: ibis Styles Amiens Centre, 10 rue Lamartine, à 300 m de la gare, chambres familiales, à distance de marche du marché. Vérifier couchages, dates, tarifs et conditions."
  gsc:
    retrievedAt: 2026-10-19T04:30:00.000Z
    dataThrough: 2026-10-16
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville d'Amiens - Marché de Noël 2026 et programme détaillé »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-30
---

Le **marché de Noël d'Amiens 2026** se tient **du 20 novembre au 30 décembre** entre la place René Goblet et l'Hôtel de Ville. Ses **plus de 100 chalets** sont accessibles gratuitement. Pour une sortie avec des enfants, la vraie question est de choisir entre les animations de journée, la rencontre avec le Père Noël, la patinoire et les spectacles du soir: ils n'ont pas tous les mêmes dates ni les mêmes horaires.

## Quel jour venir au marché de Noël d'Amiens?

Selon [la Ville d'Amiens](https://www.amiens.fr/Liens-utiles/Marche-de-Noel) et l'organisateur, les chalets ouvrent:

- **Lundi à jeudi et dimanche:** de 11h à 19h30.
- **Vendredi et samedi:** de 11h à 21h.
- **Jeudi 24 décembre:** fermeture à 17h.
- **Vendredi 25 décembre:** marché fermé.
- **Mercredi 30 décembre:** fermeture à 17h, précisée par l'organisateur.

Le **lancement des illuminations** est prévu le **samedi 21 novembre à partir de 17h30**, dans la cour de l'Hôtel de Ville. Si vous venez pour les décorations illuminées ou une parade, choisissez le jour correspondant; pour une promenade plus calme avec une poussette, le début d'après-midi en semaine est généralement plus souple qu'un samedi soir.

## Trois haltes adaptées aux enfants

**Le village du Père Noël, dans la cour de l'Hôtel de Ville**, accueille les familles **du 21 novembre au 24 décembre**. Les enfants peuvent y rencontrer le Père Noël et déposer leur lettre. En période scolaire, il est ouvert **de 16h à 19h les lundis, mardis, jeudis et vendredis**, et **de 11h à 13h30 puis de 14h30 à 19h les mercredis, samedis et dimanches**. Pendant les vacances de Noël, cette dernière plage horaire s'applique tous les jours d'ouverture, avec une fermeture à 17h le 24 décembre. La pause de 13h30 à 14h30 est donc à intégrer au parcours.

**La patinoire du square Saint-Denis, place René Goblet**, est annoncée **du 21 novembre au 30 décembre**. Avant les vacances, elle ouvre **de 16h30 à 19h30 les lundis, mardis, jeudis et vendredis**, et **de 11h à 19h30 les mercredis, samedis et dimanches**. À compter du **19 décembre**, la plage annoncée est **11h-19h30**, avec fermeture à 17h le 24 décembre. **Les gants sont recommandés**. La Ville ne précise pas encore de prix d'entrée ou de location de patins dans cette programmation: ne partez pas du principe que l'activité est gratuite comme les chalets. Le **12 décembre à partir de 15h**, les Gothiques d'Amiens doivent y proposer une rencontre avec leurs équipes.

**La Promenade des Sorciers, place Gambetta**, s'installe **du 21 novembre au 30 décembre** avec un décor de train magique, de forêt et d'école de sorcellerie. Particularité essentielle: **l'accès est interdit la nuit**. Prévoyez cette visite **de jour**, et non après le spectacle d'illuminations. Ces trois lieux permettent de construire une sortie à la carte plutôt que de traverser tous les chalets.

## Parades, cathédrale: les dates à ne pas manquer

Si les enfants aiment les spectacles de rue, quatre **parades** sont programmées dans le centre-ville:

- **Mercredi 25 novembre, à partir de 16h:** les Gnomikys.
- **Vendredi 4 décembre, à partir de 18h:** Légendaires, avec renards blancs et créatures lumineuses.
- **Vendredi 11 décembre, à partir de 18h:** Revue de Rue.
- **Vendredi 18 décembre, à partir de 18h:** Le Bal, une déambulation inspirée de la Belle Époque.

Pour un temps fort en soirée, [**Chroma à la cathédrale Notre-Dame d'Amiens**](https://www.amiens.fr/Les-evenements/Chroma-l-experience-monumentale2) est annoncé **du 27 novembre au 27 décembre**, tous les soirs à partir de **19h** sur le parvis. La Métropole indique une **durée d'environ 50 minutes**. Attention, une autre partie de la page municipale sur le marché mentionne encore des dates différentes et un ancien tableau de spectacle: pour 2026, retenez le calendrier de la fiche Chroma dédiée, à recontrôler avant de partir.

Avec un jeune enfant, mieux vaut choisir **soit la parade, soit Chroma** plutôt que de multiplier les attentes à l'extérieur. Après le 24 décembre, le village du Père Noël est terminé; après le 27, Chroma ne fait plus partie du programme annoncé, même si les chalets continuent jusqu'au 30.

## Un parcours simple depuis la gare

Pour une **visite courte**, partez des premiers chalets proches de la gare, rejoignez le **square Saint-Denis et la place René Goblet**, puis avancez selon l'énergie des enfants vers la **place Gambetta** et la **cour de l'Hôtel de Ville**. Ce parcours permet de choisir la patinoire ou la Promenade des Sorciers en journée et de finir au village du Père Noël avant le 24 décembre, sans chercher à couvrir les quelque **2 km d'allées** du marché.

Pour une **visite avec illuminations**, gardez les chalets en début de sortie, puis rejoignez la cathédrale pour Chroma à 19h entre le 27 novembre et le 27 décembre. Le quartier de la cathédrale est une étape supplémentaire: prévoyez une pause et de quoi tenir au chaud pendant le spectacle. Le parcours du marché est indiqué comme accessible aux personnes à mobilité réduite par l'organisateur.

L'application gratuite du marché est annoncée avec **plan des chalets, toilettes, parkings et programme du jour**. La Ville recommande aussi l'application « ICI TOILETTES » pour repérer les sanitaires accessibles chez des commerçants partenaires.

## Quel budget prévoir pour la sortie?

**La promenade parmi les chalets est gratuite**. Le budget vient des achats, des consommations et des attractions payantes éventuellement choisies. Comme aucun tarif 2026 fiable de la patinoire n'est indiqué sur la page municipale consultée, vérifiez son prix et les conditions de location de patins avant de compter cette activité dans une sortie à petit budget.

Autre possibilité pour des enfants qui veulent découvrir la ville assis: **le Jules Verne Express**, train touristique au départ du parvis de la cathédrale, est affiché par la Ville à **10 € par adulte et 6 € par enfant**, gratuit pour les moins de 4 ans. La page municipale juxtapose des visuels de 2025 et les informations de Noël 2026: confirmez la période de circulation et ces tarifs avant de compter sur ce trajet.

## Train, voiture et bus: comment venir?

**En train**, la gare d'Amiens se trouve à quelques minutes à pied des premiers chalets, via la rue de Noyon: c'est le plus simple pour un séjour sans voiture.

**En voiture**, la Ville annonce **quatre parkings-relais gratuits** aux entrées d'Amiens, desservis par les lignes Némo **N1 (Grand A), N2 (IUT), N3 (Shopping Promenade) et N4 (Pôle Licorne)**. Le réseau Ametis est **gratuit le samedi**. Les autres jours, la Ville indique **1,65 € le ticket à l'unité**, **5,15 € le titre 24h individuel** et **7,60 € le titre 24h pour un groupe de deux à cinq personnes**. Avec plusieurs enfants, ce dernier titre peut éviter de multiplier les tickets, sous réserve des règles de validité au moment du départ.

Des parkings souterrains payants existent aussi dans le centre. Vérifiez votre arrêt de bus et le retour avant de laisser la voiture en périphérie; les horaires des chalets ne correspondent pas nécessairement à ceux des transports.

## Faut-il passer une nuit à Amiens?

Une journée suffit pour les chalets, le Père Noël et une autre animation. Une nuit devient pertinente si vous venez de loin ou souhaitez combiner une promenade en journée et Chroma à **19h** sans reprendre immédiatement la route.

Près de la gare, l'[**ibis Styles Amiens Centre sur Booking.com**](https://www.booking.com/hotel/fr/ibis-styles-amiens-centre.fr.html) se trouve **10 rue Lamartine**, à environ **300 m de la gare**. L'hôtel propose des **chambres familiales**; vérifiez la configuration exacte des lits pour vos enfants, le tarif et les disponibilités aux dates choisies. Sa fiche annonce également un **dépôt de garantie remboursable de 100 € à l'arrivée**: vérifiez cette condition pour votre réservation avant de prévoir votre budget.

Pour une autre sortie de fêtes dans le département, notre guide du [**Train de Noël de la Haute Somme 2026 en famille**](/articles/evenements/train-de-noel-de-la-haute-somme-2026-en-famille-dates-tarifs-et-reservation/) présente une excursion différente, hors d'Amiens, avec sa propre organisation et ses réservations.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/ | Marché de Noël de Lille 2026 en famille: village, Grande Roue et infos pratiques | evenements | Lille, Nord, Hauts-de-France
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/sorties/ete-amiens-parc-saint-pierre-2026-famille/ | Un été à Amiens 2026 au parc Saint-Pierre: activités gratuites en famille | sorties | Amiens, Somme, Hauts-de-France
- /articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/ | Noël à Trévarez 2026 en famille: dates, horaires et réservation | evenements | Saint-Goazec, Finistère, Bretagne
- /articles/evenements/marche-de-noel-de-cusset-2026-en-famille-quel-jour-choisir/ | Marché de Noël de Cusset 2026 en famille: quel jour choisir? | evenements | Cusset, Allier, Auvergne-Rhône-Alpes
- /articles/evenements/rouen-givree-2026-en-famille-marche-de-noel-et-refuge-givre/ | Rouen Givrée 2026 en famille: marché de Noël et Refuge Givré | evenements | Rouen, Seine-Maritime, Normandie
- /articles/evenements/lumieres-de-noel-a-montbeliard-2026-quel-jour-venir-avec-des-enfants/ | Lumières de Noël à Montbéliard 2026: quel jour venir avec des enfants? | evenements | Montbéliard, Doubs, Bourgogne-Franche-Comté
- /articles/sorties/parc-du-marquenterre-en-famille-en-automne-et-hiver-2026-bien-preparer-la-visite/ | Parc du Marquenterre en famille en automne et hiver 2026: bien préparer la visite | sorties | Saint-Quentin-en-Tourmont, Somme, Hauts-de-France
- /articles/activites/samara-avec-des-enfants-faut-il-prevoir-la-journee-complete/ | Samara avec des enfants: faut-il prévoir la journée complète? | activites | La Chaussée-Tirancourt, Somme, Hauts-de-France
- /articles/evenements/train-de-noel-de-la-haute-somme-2026-en-famille-dates-tarifs-et-reservation/ | Train de Noël de la Haute Somme 2026 en famille: dates, tarifs et réservation | evenements | La Neuville-les-Bray, Somme, Hauts-de-France
- /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | bd BOUM 2026 à Blois en famille: ateliers, expositions et cinéma | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | Foire du livre de Brive 2026 en famille: dates, auteurs jeunesse et conseils de visite | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine
- /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | Halloween 2026 à la Mer de Sable: spectacles, frissons et billets en famille | evenements | Ermenonville, Oise, Hauts-de-France
- /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | Toussaint 2026 à Nausicaá: ateliers en journée et nocturne d’Halloween | evenements | Boulogne-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | Métamorphoses 2026 au quai Branly: séances gratuites et films par âge | evenements | Paris, Paris, Île-de-France
- /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | Festival du Film pour Enfants 2026 en Isère: séances, ateliers et tarifs | evenements | Vizille, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | Festi'Mômes 2026 à Nantes: séances, spectacles et tarifs en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | Automnales d'Harcourt 2026: animations, visites et tarifs en famille | evenements | Harcourt, Eure, Normandie
- /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | Toussaint 2026 au musée des Confluences: cinq rendez-vous pour les enfants | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/toussaint-2026-au-seaquarium-du-grau-du-roi-quel-jeu-choisir/ | Toussaint 2026 au Seaquarium: dates des jeux, âges et billets en famille | evenements | Le Grau-du-Roi, Gard, Occitanie

### Historique Radar lié

- opportunity | /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | 2026-10-16T06:56:21.314Z
- opportunity | /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | 2026-10-18T19:49:09.191Z
- opportunity | /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | 2026-10-17T11:48:00.184Z
- opportunity | /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | 2026-10-17T15:41:33.883Z
- opportunity | /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | 2026-10-18T16:46:58.413Z
- opportunity | /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | 2026-10-18T12:12:00.071Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | 2026-10-18T04:19:39.869Z
- opportunity | /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | 2026-10-18T08:44:05.495Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
