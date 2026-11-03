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
title: "Disney à Strasbourg au 5e Lieu : quelle visite de Noël choisir en décembre 2026 ?"
subtitle: "Une visite guidée sur l'imaginaire Disney les 5 et 12 décembre, dès 10 ans : billets, durée et accès"
summary: Au 5e Lieu, deux visites de 1 h 30 explorent les liens entre Strasbourg et l'imaginaire Disney. Dates, tarif de 5 €, âge minimum et réservation officielle pour choisir sans confondre cette sortie avec un spectacle de personnages.
category: activites
location:
  city: Strasbourg
  department: Bas-Rhin
  region: Grand Est
keywords:
  - Magie de Noël Disney Strasbourg 2026
  - 5e Lieu visite Disney 5 décembre 2026
sources:
  - title: "5e Lieu – Magie de Noël : W. Disney à Strasbourg"
    url: https://5elieu.strasbourg.eu/agenda/magie-de-noel-w-disney-a-strasbourg/
  - title: Noël à Strasbourg – fiche de la visite Disney
    url: https://noel.strasbourg.eu/event/-/entity/id/602555328/magie-de-noel-w-disney-a-strasbourg
  - title: Billetterie officielle du 5e Lieu
    url: https://billetterie-5elieu.strasbourg.eu/0477/fListeManifs.aspx?idstructure=0477
  - title: 5e Lieu – contact et accès
    url: https://5elieu.strasbourg.eu/contact/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-2026-au-5e-lieu-a-strasbourg-la-visite-disney-vaut-elle-le-detour-avec-des-enfants
  decision: Savoir si cette visite culturelle sur l'imaginaire Disney convient à un enfant d'au moins 10 ans, puis choisir et réserver l'une des deux séances sans la confondre avec une animation Disney ou le marché de Noël.
  affiliationPotential: "Billetterie officielle à 5 € : aucune offre partenaire de visite équivalente vérifiée. Hébergement à proximité du centre historique à rechercher sur Booking uniquement si une offre familiale précise est vérifiée."
  gsc:
    retrievedAt: 2026-11-03T01:32:28+01:00
    dataThrough: 2026-10-31
    signal: seasonal_opportunity
    basis: "Opportunité saisonnière vérifiée via « 5e Lieu - Magie de Noël : W. Disney à Strasbourg »; aucune page forte GSC n'est requise."
eventEndsAt: 2026-12-12
---

Envie d'une sortie Disney à Strasbourg pour Noël ? Les samedis **5 et 12 décembre 2026**, le **5e Lieu** propose « Magie de Noël : W. Disney à Strasbourg », une visite guidée de **10 h à 11 h 30**, accessible **dès 10 ans**, au tarif annoncé de **5 €**. Son intérêt n'est pas de rencontrer des personnages Disney : la visite raconte comment Strasbourg a inspiré des dessins et un imaginaire fantastique. C'est donc une sortie culturelle à choisir pour un enfant curieux d'histoires, d'illustrations et de patrimoine, plutôt qu'un spectacle ou une animation de marché de Noël.

## Quelle séance réserver, et pour quel âge ?

Les deux séances annoncées ont le même créneau : **samedi 5 décembre** ou **samedi 12 décembre**, de **10 h à 11 h 30**. La durée prévue est donc de **1 h 30**. L'âge minimum affiché est **10 ans** ; pour un enfant plus jeune, mieux vaut choisir une autre activité plutôt que de compter sur une exception non annoncée. Les enfants participant aux Rendez-Vous du 5e Lieu doivent être accompagnés d'un adulte.

La [fiche officielle de la visite](https://5elieu.strasbourg.eu/agenda/magie-de-noel-w-disney-a-strasbourg/) confirme les dates, le thème et le prix. Pour acheter, ouvrez la [billetterie officielle du 5e Lieu](https://billetterie-5elieu.strasbourg.eu/0477/fListeManifs.aspx?idstructure=0477), puis sélectionnez « VISITE MAGIE DE NOEL: W. DISNEY A STRASBOURG » et la date souhaitée. **La disponibilité des places n'est pas garantie** : la billetterie fonctionne dans la limite des jauges. La prévente est obligatoire, en ligne ou au guichet de la Boutique Culture ; les billets ne sont normalement ni repris ni échangés, sauf annulation ou report par l'organisateur.

## Où se présenter et comment venir ?

Le rendez-vous est fixé **à l'entrée du 5e Lieu, 5 place du Château, 67000 Strasbourg**, près de la cathédrale. La billetterie demande de se présenter **cinq minutes avant le départ** avec le billet imprimé ou affiché sur téléphone. Pour une séance à 10 h, prévoyez donc d'être sur place avant **9 h 55**, avec une marge si vous traversez le centre animé.

En transports, prenez le **tram A ou D, arrêt Langstross Grand'Rue**. Les bus 10 (Corbeau), 30 (Saint-Guillaume) et 14 ou 24 (Ancienne Douane) figurent également dans les accès officiels. En voiture, les parkings Gutenberg et des Bateliers sont indiqués, mais la circulation au centre pendant Noël peut compliquer l'arrivée : mieux vaut anticiper. Le 5e Lieu annonce une accessibilité pour différents handicaps, dispose du label Tourisme et Handicap et indique un ascenseur pour son exposition permanente ainsi qu'un fauteuil roulant sur demande. Pour les besoins spécifiques de **cette visite guidée**, contactez l'établissement avant de réserver : les aménagements de l'exposition ne garantissent pas à eux seuls toutes les conditions du parcours.

## Compléter la matinée avec Noël à Strasbourg

Après 11 h 30, vous pouvez prolonger la sortie autour de la cathédrale et des chalets, sans multiplier les visites payantes. Pour choisir quelques places adaptées à l'âge des enfants, les pauses et les horaires, consultez notre [guide du marché de Noël de Strasbourg 2026 en famille](https://www.fam-space.fr/articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/). Il détaille aussi les services pratiques pour les bébés et les poussettes. La visite Disney, elle, reste réservée aux enfants d'au moins 10 ans.

Si vous venez de loin et souhaitez rester dormir dans le centre historique, l'[Hôtel Cathédrale sur Booking.com](https://www.booking.com/hotel/fr/cathedrale-strasbourg.fr.html), place de la Cathédrale, propose notamment des chambres triples et signale des chambres familiales. Vérifiez la capacité exacte pour vos enfants, les tarifs et les disponibilités du **4 au 5** ou du **11 au 12 décembre** avant toute réservation : aucune chambre disponible à ces dates n'est garantie ici.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/le-vaisseau-a-strasbourg-quel-billet-choisir-pour-une-sortie-avec-des-enfants/ | Le Vaisseau à Strasbourg: quel billet choisir pour une sortie avec des enfants | activites | Strasbourg, Bas-Rhin, Grand Est
- /articles/vie-pratique/parking-relais-a-strasbourg-en-famille-comment-choisir-son-p-r-et-son-forfait/ | Parking-relais à Strasbourg en famille: comment choisir son P+R et son forfait | vie-pratique | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/bons-plans/pass-strasbourg-et-nord-alsace-en-famille-quand-est-il-vraiment-rentable/ | Pass Strasbourg et Nord Alsace en famille: quand est-il vraiment rentable? | bons-plans | Strasbourg, Bas-Rhin, Grand Est
- /articles/maison/renover-sa-maison-dans-l-eurometropole-de-strasbourg-aides-et-demarches-2026/ | Rénover sa maison dans l’Eurométropole de Strasbourg: aides et démarches 2026 | maison | Strasbourg, Bas-Rhin, Grand Est
- /articles/activites/arachnima-strasbourg-famille-2026/ | Arachnima 2026 à Strasbourg: dernier week-end gratuit au square Hasek | activites | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/cirque-de-noel-d-alsace-2026-a-eckbolsheim-quelle-seance-choisir-avec-des-enfants/ | Cirque de Noël d’Alsace 2026 à Eckbolsheim: dates, horaires et accès en famille | evenements | Eckbolsheim, Bas-Rhin, Grand Est
- /articles/evenements/marche-de-noel-de-cusset-2026-en-famille-quel-jour-choisir/ | Marché de Noël de Cusset 2026 en famille: quel jour choisir? | evenements | Cusset, Allier, Auvergne-Rhône-Alpes
- /articles/evenements/noel-2026-a-selestat-en-famille-marches-ou-parcours-du-sapin/ | Noël 2026 à Sélestat en famille: marchés, sapins et visites gratuites | evenements | Sélestat, Bas-Rhin, Grand Est
- /articles/cuisine/maison-du-pain-a-selestat-decouvrir-la-boulangerie-en-famille/ | Maison du Pain à Sélestat: découvrir la boulangerie en famille | cuisine | Sélestat, Bas-Rhin, Grand Est
- /articles/evenements/course-des-chateaux-d-ottrott-2026-quelles-epreuves-choisir-pour-les-enfants/ | Course des Châteaux d'Ottrott 2026: quelles épreuves choisir pour les enfants? | evenements | Ottrott, Bas-Rhin, Grand Est
- /articles/voyages/wissembourg-sans-voiture-avec-des-enfants-que-faire-a-pied-sur-une-journee/ | Wissembourg sans voiture avec des enfants: que faire à pied sur une journée? | voyages | Wissembourg, Bas-Rhin, Grand Est
- /articles/sorties/chateau-du-haut-koenigsbourg-en-famille-tarifs-2026-et-conseils-de-visite/ | Château du Haut-Koenigsbourg en famille: tarifs 2026 et conseils de visite | sorties | Orschwiller, Bas-Rhin, Grand Est
- /articles/activites/planetarium-de-belfort-en-famille-etoiles-meteorites-et-infos-pratiques/ | Planétarium de Belfort en famille: étoiles, météorites et infos pratiques | activites | Belfort, Territoire de Belfort, Bourgogne-Franche-Comté
- /articles/activites/confiserie-des-hautes-vosges-a-plainfaing-une-visite-gratuite-en-famille/ | Confiserie des Hautes Vosges à Plainfaing: une visite gratuite en famille | activites | Plainfaing, Vosges, Grand Est
- /articles/activites/forum-des-sciences-a-villeneuve-d-ascq-en-famille-que-choisir-selon-l-age/ | Forum des Sciences à Villeneuve-d'Ascq en famille: que choisir selon l'âge ? | activites | Villeneuve-d'Ascq, Nord, Hauts-de-France
- /articles/activites/kayak-transparent-a-trou-d-eau-decouvrir-le-lagon-en-famille/ | Kayak transparent à Trou d’Eau: découvrir le lagon en famille | activites | Saint-Paul, La Réunion, La Réunion
- /articles/activites/quatre-jeux-de-piste-gratuits-en-haute-saone-lequel-choisir-en-famille/ | Quatre jeux de piste gratuits en Haute-Saône: lequel choisir en famille ? | activites | Haute-Saône, Bourgogne-Franche-Comté
- /articles/activites/snowworld-amneville-en-famille-luge-bouees-ou-ski/ | SnowWorld Amnéville en famille: luge, bouées ou ski ? | activites | Amnéville, Moselle, Grand Est
- /articles/activites/visiter-le-nouveau-musee-m24-au-mans-en-famille-billets-parcours-et-circuit/ | Visiter le nouveau musée M24 au Mans en famille: billets, parcours et circuit | activites | Le Mans, Sarthe, Pays de la Loire
- /articles/activites/ateliers-a-musees-a-la-rochelle-en-decembre-2026-quelle-seance-choisir-en-famille/ | Ateliers A'musées à La Rochelle: tissage et mosaïque en décembre 2026 | activites | La Rochelle, Charente-Maritime, Nouvelle-Aquitaine
- /articles/activites/mac-val-en-famille-a-vitry-sur-seine-visites-ateliers-et-conseils-pratiques/ | MAC VAL en famille à Vitry-sur-Seine: visites, ateliers et conseils pratiques | activites | Vitry-sur-Seine, Val-de-Marne, Île-de-France

### Historique Radar lié

- opportunity | /articles/activites/ateliers-a-musees-a-la-rochelle-en-decembre-2026-quelle-seance-choisir-en-famille/ | 2026-10-31T00:36:57.118Z
- opportunity | /articles/evenements/cirque-de-noel-d-alsace-2026-a-eckbolsheim-quelle-seance-choisir-avec-des-enfants/ | 2026-11-01T12:31:31.417Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/noel-2026-a-selestat-en-famille-marches-ou-parcours-du-sapin/ | 2026-11-01T15:30:15.363Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
