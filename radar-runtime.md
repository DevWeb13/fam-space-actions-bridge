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
title: "Noël à Cheverny 2026 : visite du château ou mapping du soir en famille ?"
subtitle: "Billets, horaires et jeu de piste : comment choisir sans manquer les illuminations"
summary: "Du 28 novembre 2026 au 10 janvier 2027, Cheverny se pare de décors de Noël. Visite complète ou billet mapping seul : comparez les tarifs, les horaires encore provisoires et les contraintes de retour."
category: evenements
location:
  city: Cheverny
  department: Loir-et-Cher
  region: Centre-Val de Loire
keywords:
  - Noël château de Cheverny 2026
  - Cheverny mapping Noël billet
  - Cheverny jeu de piste Noël enfants
sources:
  - title: Château de Cheverny - Noël 2026 au château
    url: https://www.chateau-cheverny.fr/evenements/noel-chateau
  - title: Château de Cheverny - Tarifs et horaires
    url: https://www.chateau-cheverny.fr/informations-pratiques/tarifs
  - title: Château de Cheverny - Comment venir
    url: https://www.chateau-cheverny.fr/informations-pratiques/comment-venir
  - title: Château de Cheverny - Préparer sa visite
    url: https://www.chateau-cheverny.fr/informations-pratiques/preparer-sa-visite.html
  - title: Rémi - Ligne 4 renforcée à la rentrée 2026
    url: https://www.remi-centrevaldeloire.fr/s-evader/loir-et-cher-41-nouveautes-rentree-2026
  - title: Booking.com - Relais des Trois Châteaux à Cour-Cheverny
    url: https://www.booking.com/hotel/fr/relais-des-trois-chac-teaux.fr.html
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille
  decision: Choisir entre une visite complète en journée prolongée jusqu'aux illuminations et une entrée tardive pour le mapping seul, selon l'âge des enfants, le budget et le transport retour.
  affiliationPotential: "Billets du château vendus uniquement sur place selon l'organisateur : ne pas promettre de réservation partenaire pour le mapping. Hébergements à Cheverny et Cour-Cheverny réellement proposés sur Booking.com pour une famille qui reste dormir après les illuminations."
  gsc:
    retrievedAt: 2026-10-23T08:27:47+02:00
    dataThrough: 2026-10-20
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Château de Cheverny - Noël 2026 au château »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-10T18:45:00+01:00
---

Du **28 novembre 2026 au 10 janvier 2027**, le château de Cheverny, dans le Loir-et-Cher, annonce des décors de Noël dans ses salles et ses jardins, ainsi qu'une projection lumineuse sur sa façade. Pour une famille, deux sorties différentes sont possibles : découvrir le château avant la nuit et rester pour les lumières, ou arriver tard pour le **mapping uniquement**. Le choix dépend surtout de l'âge des enfants, du budget et du moyen de rentrer après 18 h.

**Attention avant de fixer une date :** la [page officielle de Noël à Cheverny](https://www.chateau-cheverny.fr/evenements/noel-chateau) présente bien l'édition 2026-2027, mais précise encore que certains horaires et éléments du programme proviennent de 2025. Les créneaux ci-dessous sont donc **annoncés, pas définitivement confirmés pour 2026**.

## Visiter le château puis voir les illuminations : pour qui ?

C'est le meilleur choix si les enfants aiment explorer les pièces décorées et se promener parmi les sapins, les lutins et les décors géants. Le château annonce notamment une scénographie gourmande dans la salle à manger et une grande table de fête illuminée à l'extérieur. La visite **château et jardins** prend habituellement **1 h 30 à 1 h 45** : mieux vaut prévoir une arrivée en milieu d'après-midi plutôt que juste avant la fermeture des accès.

Le billet classique comprend les illuminations, sans supplément annoncé. La projection transforme la façade en table de fête animée. La page de Noël évoque des lumières entre **17 h 30 et 18 h 45**, puis un démarrage du mapping **vers 17 h 45**. Elle indique une **dernière entrée pour la visite à 17 h**, repoussée à **17 h 30 pendant les vacances scolaires**, et une fermeture du domaine à **18 h 45**. Ces horaires spéciaux priment dans l'organisation de la soirée sur les horaires d'hiver généraux affichés ailleurs sur le site, mais restent à reconfirmer pour cette édition.

## Mapping seul : une sortie plus courte et moins chère

Si les enfants sont petits, connaissent déjà le château ou préfèrent les lumières à une longue visite, le billet **mapping seul** évite de payer la visite intérieure. Le château annonce un accès spécifique **de 16 h 45 à 17 h 45**, pour profiter des illuminations avant la fermeture. Ce billet ne doit pas être confondu avec l'entrée château et jardins : il est destiné à la soirée lumineuse, pas à la découverte des salles.

Les billets sont **vendus uniquement sur place, sans réservation en ligne**. Ne prévoyez donc pas de créneau préacheté auprès d'une plateforme de visites. Et n'arrivez pas à 17 h 45 pile : c'est l'heure de fin d'accès annoncée pour le mapping, pas une heure de rendez-vous garantie.

## Quel budget prévoir pour les billets ?

D'après les [tarifs publiés par le château](https://www.chateau-cheverny.fr/informations-pratiques/tarifs) et sa page de Noël :

- **Château et jardins, illuminations comprises :** **15,50 € par adulte**, **11,50 € au tarif réduit**, **gratuit pour les moins de 7 ans**.
- **Mapping seul :** **9,50 € au tarif normal** et **8 € au tarif réduit**, sous réserve de confirmation pour 2026.

Pour deux adultes au plein tarif, le total passe donc de **31 €** pour la visite complète à **19 €** pour le mapping seul, soit **12 € d'écart**. Le tarif réduit de la visite classique concerne notamment les enfants de **7 à 14 ans**, les lycéens et certains adultes sur justificatif. En revanche, la page de Noël ne détaille pas explicitement la gratuité des moins de 7 ans pour le **billet mapping seul** : faites confirmer ce point à la caisse avant de calculer le budget de toute la famille.

## Jeu de piste, Père Noël et pause au chaud : ce qui reste à confirmer

La page saisonnière décrit un **jeu de piste gratuit pour les 7-14 ans**, avec sept ingrédients à retrouver dans le château. Mais elle mentionne des dates allant du **1er décembre au 11 janvier**, alors que l'événement 2026-2027 s'achève le **10 janvier** : cette incohérence, associée à l'avertissement sur l'édition 2025, empêche de garantir les jours exacts du jeu pour 2026. Il est préférable de vérifier le programme actualisé si cette activité motive la visite.

Une rencontre avec le Père et la Mère Noël est également évoquée, **sans date annoncée**. N'organisez pas la sortie autour de leur présence tant que le château n'a pas publié de créneau précis.

Pour se réchauffer, la page mentionne une offre de boissons et de gourmandises pendant les vacances scolaires, ainsi qu'une restauration à l'Orangerie. Les jours et horaires d'ouverture de ces points de vente doivent être vérifiés avant de compter dessus pour le dîner.

## Venir avec des enfants, surtout après la tombée de la nuit

Le château se situe **avenue du Château, 41700 Cheverny**. Il dispose de **trois parkings gratuits**, dont le P1 près de l'entrée. Pensez aux vêtements chauds et à des chaussures adaptées aux allées extérieures : l'intérêt de la sortie du soir se joue dehors.

Avec un bébé, les **poussettes sont utilisables dans les jardins, mais pas à l'intérieur du château** ; elles sont laissées à l'entrée des salles. Des **tables à langer** sont indiquées aux toilettes du parking P1 et de l'Orangerie. L'accès intérieur comporte un perron qui complique la visite en fauteuil roulant : les familles concernées ont intérêt à demander directement les possibilités d'accès avant de venir.

**Sans voiture, le retour est le vrai point bloquant.** Depuis la rentrée 2026, la ligne **Rémi 4** dessert Cheverny toute l'année. Toutefois, [Rémi annonce un passage de retour à l'arrêt « l'Orme » vers 16 h 40](https://www.remi-centrevaldeloire.fr/s-evader/loir-et-cher-41-nouveautes-rentree-2026), donc **avant** la projection du soir. Ce car ne permet pas de rester jusqu'au mapping puis de rentrer à Blois. Vérifiez les horaires du jour et prévoyez un autre retour fiable si vous souhaitez voir les illuminations. Pour organiser le reste du séjour, notre [guide de Blois sans voiture avec Chambord et Cheverny](/articles/voyages/blois-sans-voiture-en-2026-3-jours-pour-chambord-cheverny-et-le-centre-ville/) détaille les trajets et les étapes.

## Dormir près du château après les illuminations

Pour éviter un retour tardif, le **[Relais des Trois Châteaux à Cour-Cheverny sur Booking.com](https://www.booking.com/hotel/fr/relais-des-trois-chac-teaux.fr.html)** est une option à regarder : l'établissement se situe à environ **800 m du château** et présente des **chambres familiales**. Vérifiez la configuration exacte des lits, l'âge des enfants, les horaires d'arrivée et les conditions de réservation pour vos dates ; aucun tarif ni disponibilité de Noël n'est garanti ici.

Si vous hésitez encore entre deux châteaux pour les fêtes, notre article sur [Noël à Chambord 2026 avec des enfants](/articles/evenements/noel-a-chambord-2026-avec-des-enfants-quand-venir-et-que-prevoir/) détaille un programme différent, davantage axé sur les animations de décembre.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/petit-archeologue-puilaurens-famille-2026/ | Le petit archéologue à Puilaurens: un jeu de piste en famille | sorties | Puilaurens, Aude, Occitanie
- /articles/sorties/chateau-de-chambord-en-famille-tarifs-2026-activites-et-conseils-de-visite/ | Château de Chambord en famille: tarifs 2026, activités et conseils de visite | sorties | Chambord, Loir-et-Cher, Centre-Val de Loire
- /articles/activites/chateau-de-bouges-en-famille-jardins-livret-jeu-et-ecuries/ | Château de Bouges en famille: jardins, livret-jeu et écuries | activites | Bouges-le-Château, Indre, Centre-Val de Loire
- /articles/evenements/noel-2026-au-chateau-de-grignan-dates-tarifs-et-visite-en-famille/ | Noël 2026 au château de Grignan: dates, tarifs et visite en famille | evenements | Grignan, Drôme, Auvergne-Rhône-Alpes
- /articles/sorties/halloween-2026-a-france-miniature-en-famille/ | Halloween 2026 à France Miniature avec des enfants: billets et visite | sorties | Élancourt, Yvelines, Île-de-France
- /articles/voyages/blois-sans-voiture-en-2026-3-jours-pour-chambord-cheverny-et-le-centre-ville/ | Blois sans voiture en 2026: 3 jours pour Chambord, Cheverny et le centre-ville | voyages | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | Halloween 2026 au château de Couches: atelier citrouille et jeu Mystères & Sortilèges | evenements | Couches, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | Monument jeu d'enfant 2026 au château de Vincennes: quel atelier choisir ? | evenements | Vincennes, Val-de-Marne, Île-de-France
- /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | MonstroZoo 2026-2027 à Beauval: parcours inclus, visite guidée et tarifs | evenements | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | bd BOUM 2026 à Blois en famille: ateliers, expositions et cinéma | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/center-parcs-les-hauts-de-bruyeres-en-famille-quel-cottage-choisir-apres-la-renovation/ | Center Parcs Les Hauts de Bruyères en famille: quel cottage choisir après la rénovation? | voyages | Chaumont-sur-Tharonne, Loir-et-Cher, Centre-Val de Loire
- /articles/vie-pratique/transport-scolaire-remi-41-que-faire-apres-la-rentree/ | Transport scolaire Rémi 41: que faire après la rentrée ? | vie-pratique | Romorantin-Lanthenay, Loir-et-Cher, Centre-Val de Loire
- /articles/activites/balade-en-bateau-a-saint-dye-sur-loire-journee-pique-nique-ou-crepuscule/ | Balade en bateau à Saint-Dyé-sur-Loire: journée, pique-nique ou crépuscule ? | activites | Saint-Dyé-sur-Loire, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/noel-a-chambord-2026-avec-des-enfants-quand-venir-et-que-prevoir/ | Noël à Chambord 2026 avec des enfants: quand venir et que prévoir | evenements | Chambord, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/beauval-a-la-toussaint-2026-billets-duree-de-visite-et-hebergement/ | Beauval à la Toussaint 2026: billets, durée de visite et hébergement | voyages | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/zooparc-de-beauval-en-famille-en-2026-un-ou-deux-jours-quel-hotel-et-quel-budget-prevoir/ | ZooParc de Beauval: billets, 1 ou 2 jours, hôtel et budget 2026 | voyages | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | Bédéciné 2026 à Illzach en famille: ateliers, spectacles et billets | evenements | Illzach, Haut-Rhin, Grand Est
- /articles/evenements/automne-des-gones-2026-a-lyon-quels-ateliers-gratuits-choisir-avec-les-enfants/ | Automne des gones 2026 à Lyon: ateliers et sorties gratuites en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | Créations & savoir-faire 2026 à Paris en famille: billets, ateliers et dates | evenements | Paris, Paris, Île-de-France
- /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | Halloween 2026 à Mini World Lyon: la Chasse aux 31 Méchants en famille | evenements | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | Luminescences 2026-2027 au zoo d'Amnéville: billets, tarifs et visite en famille | evenements | Amnéville, Moselle, Grand Est
- /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | Salon du Cheval de Paris 2026 en famille: animations, jumping et billets | evenements | Paris, Paris, Île-de-France

### Historique Radar lié

- opportunity | /articles/evenements/automne-des-gones-2026-a-lyon-quels-ateliers-gratuits-choisir-avec-les-enfants/ | 2026-10-23T09:31:27.871Z
- opportunity | /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | 2026-10-18T19:49:09.191Z
- opportunity | /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | 2026-10-23T12:33:36.649Z
- opportunity | /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | 2026-10-23T06:21:12.326Z
- opportunity | /articles/sorties/halloween-2026-a-france-miniature-en-famille/ | 2026-10-08T18:25:52.752Z
- opportunity | /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | 2026-10-22T12:58:21.691Z
- opportunity | /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | 2026-10-12T14:00:32.202Z
- opportunity | /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | 2026-10-22T09:37:18.560Z
- opportunity | /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | 2026-10-22T15:49:20.816Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | 2026-10-09T18:35:04.031Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
