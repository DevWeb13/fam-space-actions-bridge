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
title: "Noël à Chartres 2026 : quand voir le marché et les illuminations en famille ?"
subtitle: Les dates à choisir et un parcours court autour de la cathédrale avec les enfants
summary: "Illuminations dès fin novembre, marché du 4 au 24 décembre : les bons créneaux pour profiter de Noël à Chartres sans parcourir toute la ville avec les enfants."
category: evenements
location:
  city: Chartres
  department: Eure-et-Loir
  region: Centre-Val de Loire
keywords:
  - Noël Chartres 2026
  - marché de Noël Chartres 2026
  - illuminations Chartres avec enfants
  - Chartres en lumières fête Noël 2026
sources:
  - title: Les Vitrines de Chartres — Illuminations de Noël 2026
    url: https://www.vitrines-chartres.com/agenda/illuminations-de-noel-2026-371.html
  - title: Les Vitrines de Chartres — Marché de Noël 2026
    url: https://www.vitrines-chartres.com/agenda/marche-de-noel-de-chartres-2025-148.html
  - title: Ville de Chartres — Agenda des animations pour les enfants
    url: https://www.chartres.fr/vacances-a-chartres/enfants
  - title: Chartres en lumières — Présentation et horaires 2026
    url: https://www.chartresenlumieres.com/fr/a-propos/quest-ce-que-chartres-en-lumieres
  - title: Chartres en lumières — Durée du parcours
    url: https://www.chartresenlumieres.com/fr/informations-pratiques/faq/detail/combien-de-temps-faut-il-pour-voir-chartres-en-lumieres
  - title: Chartres en lumières — Venir à Chartres
    url: https://www.chartresenlumieres.com/fr/informations-pratiques/faq/detail/comment-venir-a-chartres
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir
  decision: Savoir quand venir pour voir les illuminations seules ou les associer au marché de Noël, et choisir un parcours réaliste avec des enfants.
  affiliationPotential: "Illuminations et marché gratuits : pas de billet à vendre. Hébergement familial à Chartres sur Booking.com vérifié pour les familles qui restent une nuit ; vérifier les couchages et la proximité gare/cathédrale avant de conseiller une offre précise."
  gsc:
    retrievedAt: 2026-10-30T01:28:25+01:00
    dataThrough: 2026-10-27
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Chartres - Agenda des animations pour les enfants »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-03
---

À Chartres, pas besoin d'attendre l'ouverture du marché de Noël pour voir les illuminations. Les décors lumineux de Noël sont annoncés dès le **27 novembre 2026**, tandis que les chalets ouvrent le **4 décembre**. Avec des enfants, le meilleur choix dépend donc de ce que vous voulez voir : seulement les projections sur les monuments, ou aussi les stands et l'ambiance du marché.

## Quel jour venir selon votre envie ?

- **Du 27 novembre au 3 décembre :** pour les lumières sans marché. [Les Vitrines de Chartres annoncent les illuminations de Noël du 27 novembre au 3 janvier](https://www.vitrines-chartres.com/agenda/illuminations-de-noel-2026-371.html). La [Ville de Chartres inscrit « Chartres en lumières fête Noël » du 29 novembre au 3 janvier](https://www.chartres.fr/vacances-a-chartres/enfants) : ce sont deux dates de lancement annoncées pour des programmations de Noël, à ne pas confondre avec la saison générale de Chartres en lumières, commencée en avril.
- **Du 4 au 23 décembre :** pour associer marché et projections le même jour. Le vendredi 4 marque l'ouverture du marché ; le samedi 5, une première animation déambulatoire est annoncée, mais son horaire précis reste à vérifier.
- **Le jeudi 24 décembre :** marché ouvert seulement de **10 h à 16 h**. Les projections se regardent à la nuit tombée : ce n'est donc pas le créneau le plus simple pour enchaîner immédiatement les deux avec de jeunes enfants.
- **Du 25 décembre au 3 janvier 2027 :** les illuminations continuent, mais le marché est terminé.

Si vous venez spécialement pour les deux, privilégiez un après-midi suivi d'un début de soirée **entre le 4 et le 23 décembre**. Pour une promenade plus calme et plus courte, les projections seules suffisent.

## Marché de Noël : horaires, entrée et emplacement

L'[association Les Vitrines de Chartres](https://www.vitrines-chartres.com/agenda/marche-de-noel-de-chartres-2025-148.html) confirme le marché du **4 au 24 décembre 2026**, avec une **entrée gratuite** :

- **Dimanche à jeudi :** 12 h–19 h.
- **Vendredi :** 12 h–20 h.
- **Samedi :** 10 h–20 h.
- **Jeudi 24 décembre :** 10 h–16 h.

L'organisateur a écrit « mercredi 24 décembre » sur sa page, mais **le 24 décembre 2026 tombe un jeudi** : c'est bien l'horaire spécial du 24 qu'il faut retenir. Il annonce également un **changement d'emplacement** pour cette édition, sans donner encore de nouvelle adresse sur sa page officielle. Vérifiez le lieu exact avant de prévoir votre trajet, surtout avec une poussette. Les chalets annoncés mêlent gourmandises et idées de cadeaux ; les achats et consommations restent payants.

## Une petite promenade lumineuse plutôt que le circuit complet

Les projections de [Chartres en lumières](https://www.chartresenlumieres.com/fr/a-propos/quest-ce-que-chartres-en-lumieres) sont **gratuites**, visibles chaque soir à partir de la tombée de la nuit. L'organisateur indique une fin vers **23 h à partir du 25 octobre** pour la saison 2026 ; vérifiez le calendrier du soir choisi avant le départ. Les scénographies tournent en boucle : il n'est pas nécessaire d'arriver à une heure de séance précise.

Pour une sortie avec de jeunes enfants, commencez par les **portails illuminés de la cathédrale**, puis, si tout le monde a encore envie de marcher, regardez la **façade du musée des Beaux-Arts** à proximité. Vous pouvez ensuite revenir vers le centre et la gare plutôt que de descendre jusqu'aux ponts et lavoirs de la basse-ville. C'est une suggestion de parcours court, pas un itinéraire officiel balisé.

Le [parcours complet représente 5 à 7 km](https://www.chartresenlumieres.com/fr/informations-pratiques/faq/detail/combien-de-temps-faut-il-pour-voir-chartres-en-lumieres). Au portail royal, les deux scénographies durent environ **30 minutes au total** ; ailleurs, les séquences animées sont généralement plus courtes, autour de 3 à 5 minutes. Vous pouvez donc prévoir une pause devant la cathédrale et décider sur place de prolonger ou non la balade.

## Avec une poussette ou un bébé : les détails qui changent la soirée

Les rues du centre ancien peuvent être pavées ou en pente : avec une poussette, mieux vaut rester sur un secteur réduit autour de la cathédrale et renoncer à la basse-ville si le sol est humide. Prévoyez vêtements chauds, protection contre la pluie et un retour possible dès que les enfants fatiguent. Une boisson ou un repas pris avant les projections évite d'attendre trop tard dans le froid.

Ne comptez pas sans vérification sur une table à langer, un micro-ondes ou un espace de repas bébé au marché : ces services ne sont pas confirmés par les informations publiées. Si vous avez besoin de réchauffer un repas ou de changer un nourrisson, anticipez un arrêt dans un lieu adapté.

## Venir en train, rentrer ou rester une nuit

D'après les [informations d'accès de Chartres en lumières](https://www.chartresenlumieres.com/fr/informations-pratiques/faq/detail/comment-venir-a-chartres), la gare de Chartres est à environ **5 minutes à pied du centre-ville** ; des trains relient notamment Paris-Montparnasse à Chartres. Vérifiez surtout **l'heure du dernier train retour**, après la tombée de la nuit. En voiture, consultez les parkings et les éventuelles restrictions du centre avant de partir, sans supposer que le marché se tiendra à son ancien emplacement.

Pour les familles qui souhaitent dormir sur place, le [Campanile PRIME – Chartres Centre Gare Cathédrale sur Booking.com](https://www.booking.com/hotel/fr/inter-chatelet.fr.html) est une option près de la gare et du centre historique. L'établissement propose des chambres adaptées à certains séjours en famille, mais vérifiez la **capacité exacte selon le nombre et l'âge des enfants**, la possibilité de lit bébé, les tarifs et les conditions pour vos dates de décembre.

Le **budget d'entrée est de 0 €** pour le marché et les illuminations ; prévoyez séparément transport, gourmandises, achats et éventuellement hébergement. Avant de partir, contrôlez les annonces des organisateurs, en particulier le nouvel emplacement du marché et les horaires du soir choisi.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/cuisine/apres-une-cueillette-en-eure-et-loir-5-recettes-faciles-a-faire-avec-les-enfants/ | Après une cueillette en Eure-et-Loir: 5 recettes faciles à faire avec les enfants | cuisine | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/vie-pratique/accueil-periscolaire-a-chartres-forfait-ou-carte-occasionnelle-en-2026-2027/ | Accueil périscolaire à Chartres: forfait ou carte occasionnelle en 2026-2027 ? | vie-pratique | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/maison/recycleries-autour-de-chartres-ou-donner-et-acheter-d-occasion/ | Recycleries autour de Chartres: où donner et acheter d'occasion ? | maison | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/lumieres-de-noel-a-montbeliard-2026-quel-jour-venir-avec-des-enfants/ | Lumières de Noël à Montbéliard 2026: quel jour venir avec des enfants? | evenements | Montbéliard, Doubs, Bourgogne-Franche-Comté
- /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | Noël à Fontevraud 2026: patinoire, marché, dates et tarifs en famille | evenements | Fontevraud-l'Abbaye, Maine-et-Loire, Pays de la Loire
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/activites/chateau-de-maintenon-avec-de-jeunes-enfants-ce-qu-il-faut-prevoir/ | Château de Maintenon avec de jeunes enfants: ce qu'il faut prévoir | activites | Maintenon, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | Festival des Petits Explorateurs 2026 à Dijon: ateliers, horaires et tarifs | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille/ | Flottins d’Évian 2026: un village de Noël en bois flotté à découvrir en famille | evenements | Évian-les-Bains, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | Festival BD Colomiers 2026 en famille: programme, tarifs et accès | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | Ville de Noël d’Arras 2026 en famille: horaires, attractions et budget | evenements | Arras, Pas-de-Calais, Hauts-de-France
- /articles/evenements/noel-d-autrefois-2026-au-musee-de-plein-air-quel-jour-venir-en-famille/ | Noël d’autrefois 2026 à Villeneuve-d’Ascq: dates, ateliers et accès en famille | evenements | Villeneuve-d'Ascq, Nord, Hauts-de-France
- /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | Marché de Noël 100 % Côte-d’Or à Dijon 2026: horaires, spectacles et Père Noël | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/festival-du-cerf-volant-2027-a-chatelaillon-plage-le-guide-des-familles/ | Festival du cerf-volant 2027 à Châtelaillon-Plage: le guide des familles | evenements | Châtelaillon-Plage, Charente-Maritime, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Clermont-Ferrand 2026 en famille: horaires, animations et accès | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-montpellier-2026-en-famille-dates-fermetures-et-attractions/ | Marché de Noël de Montpellier 2026 en famille: horaires, jours fermés et manèges | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | Noël des Alpes 2026 à Annecy en famille: marché, patinoire et illuminations | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | Marchés de Noël de Tours 2026 en famille: lieux, dates et budget | evenements | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël de Saint-Étienne 2026 en famille: dates, horaires et accès | evenements | Saint-Étienne, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/la-seine-musicale-en-famille-en-2027-quels-concerts-et-ateliers-selon-l-age/ | La Seine Musicale en famille en 2027: quels concerts et ateliers selon l'âge ? | evenements | Boulogne-Billancourt, Hauts-de-Seine, Île-de-France

### Historique Radar lié

- opportunity | /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | 2026-10-29T23:28:55.064Z
- opportunity | /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | 2026-10-30T03:27:02.483Z
- opportunity | /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | 2026-10-29T14:26:32.277Z
- opportunity | /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/ | 2026-10-29T11:32:05.289Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/marche-de-noel-de-montpellier-2026-en-famille-dates-fermetures-et-attractions/ | 2026-10-29T08:29:37.767Z
- opportunity | /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T18:37:09.008Z
- opportunity | /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | 2026-10-28T21:29:26.054Z
- opportunity | /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | 2026-10-28T01:34:03.741Z
- opportunity | /articles/evenements/noel-d-autrefois-2026-au-musee-de-plein-air-quel-jour-venir-en-famille/ | 2026-10-29T17:29:29.382Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
