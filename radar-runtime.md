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
title: "Noël 2026 à Brest en famille : quand voir le marché et les projections ?"
subtitle: Horaires des chalets, dates des illuminations et deux samedis de transports gratuits pour choisir sa sortie
summary: Le marché de Noël de Brest ouvre du 27 novembre au 27 décembre 2026, mais les projections monumentales commencent seulement le 17 décembre. Voici les dates et horaires utiles pour une sortie avec les enfants.
category: evenements
location:
  city: Brest
  department: Finistère
  region: Bretagne
keywords:
  - Noël Brest 2026
  - marché de Noël Brest 2026
  - projections monumentales Brest décembre 2026
sources:
  - title: "Brest métropole - Appel à candidatures Marché de Noël 2026 : calendrier et horaires"
    url: https://brest.fr/appel-candidatures-marche-de-noel-2026
  - title: "Brest métropole - Des projets pour dynamiser le commerce : animations de Noël 2026"
    url: https://brest.fr/actualites/des-projets-pour-dynamiser-le-commerce
  - title: Bibus - Zoom sur la place de la Liberté et ses stations
    url: https://www.bibus.fr/bibus-et-vous/actualites/les-evenements-du-reseau/zoom-sur-la-place-de-la-liberte
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier
  decision: Choisir une date selon que la famille veut voir le marché seul, les projections lumineuses à partir du 17 décembre, ou profiter des transports gratuits les 12 et 19 décembre, puis organiser une sortie simple avec les enfants.
  affiliationPotential: "Hôtel Oceania Brest (82 rue de Siam), chambres familiales et lit bébé gratuit sur demande vérifiés sur Booking.com : https://www.booking.com/hotel/fr/hotel-oceania-brest-centre.fr.html ; option pour un séjour au centre, sans prix ni disponibilité présumés. Pas de billet partenaire vérifié pour le marché."
  gsc:
    retrievedAt: 2026-10-30T01:28:25+01:00
    dataThrough: 2026-10-27
    signal: seasonal_opportunity
    basis: "Opportunité saisonnière vérifiée via « Brest métropole - Marché de Noël 2026 : dates, horaires et manèges »; aucune page forte GSC n'est requise."
eventEndsAt: 2026-12-27
---

À Brest, **le marché de Noël et les projections lumineuses ne commencent pas à la même date**. Les chalets et manèges anciens sont annoncés place de la Liberté du **27 novembre au 27 décembre 2026**. Pour voir aussi les images monumentales sur les bâtiments du centre, il faut attendre le **17 décembre**. Le choix du jour change donc vraiment le programme d'une famille.

## Quel jour choisir avec les enfants ?

- **Du 27 novembre au 11 décembre :** privilégiez les chalets, les manèges anciens et une promenade dans le centre. Les projections monumentales ne sont pas encore programmées.
- **Samedi 12 décembre :** une date intéressante pour profiter du marché avec les **transports en commun annoncés gratuits**, mais toujours sans les projections monumentales.
- **Du 17 au 27 décembre :** c'est la période à viser pour associer marché et projections sur l'Hôtel de ville (côté rue Frézier) et l'église Saint-Louis. Le parcours artistique annoncé autour de l'ancien Printemps et la scénographie des Ateliers des Capucins peuvent compléter la sortie, selon leur programme définitif.
- **Samedi 19 décembre :** le meilleur compromis annoncé à ce stade : marché, période des projections et **deuxième samedi de transports gratuits**. La gratuité n'est pas annoncée pour les autres jours, notamment le samedi 26.

Ces périodes proviennent des [annonces 2026 de Brest métropole](https://brest.fr/actualites/des-projets-pour-dynamiser-le-commerce). Les **heures précises des projections**, leur fréquence et les modalités d'accès aux installations artistiques ne sont pas encore détaillées dans cette annonce : vérifiez le programme définitif avant de prévoir une sortie exclusivement en soirée.

## Horaires du marché de Noël 2026

La Ville annonce environ **35 chalets** sur la place de la Liberté rénovée, avec des produits artisanaux et festifs, des animations et des manèges anciens. Les horaires publiés dans son [calendrier du marché 2026](https://brest.fr/appel-candidatures-marche-de-noel-2026) sont les suivants :

- **Lundi, mardi, jeudi et vendredi :** 12 h à 20 h.
- **Mercredi et dimanche :** 10 h à 20 h.
- **Samedi :** 10 h à 21 h.
- **Du 21 au 27 décembre :** plage particulière annoncée de 10 h à 20 h.

Attention aux journées de fête, notamment le **24 décembre** : vérifiez les éventuels horaires dérogatoires dans le programme final. La page municipale contient également une erreur de jour de semaine à l'ouverture : **le 27 novembre 2026 est un vendredi**, et non un samedi. La période du 27 novembre au 27 décembre est, elle, reprise par les deux annonces officielles.

## Prévoir le budget et une visite sans fatigue

Pour une sortie courte, concentrez-vous sur la place de la Liberté et laissez chaque enfant choisir éventuellement un manège ou une gourmandise. **Aucun tarif 2026 des manèges n'est précisé dans les annonces consultées** : ne prévoyez pas un forfait supposé, et gardez une marge pour les achats sur place. Aucun billet de réservation du marché n'est annoncé par la Ville.

Avec de jeunes enfants, une visite en fin d'après-midi permet de profiter de l'ambiance lumineuse sans forcément prolonger jusqu'à la fermeture. Prévoyez un vêtement coupe-vent, une protection contre la pluie et une pause à l'abri si nécessaire. Les annonces ne confirment pas de table à langer, de micro-ondes pour réchauffer un repas bébé ni de service de prêt de poussette sur le marché : mieux vaut emporter le nécessaire.

## Venir en tramway ou rester une nuit

Le marché se situe **place de la Liberté**, desservie par le tramway A à l'arrêt Liberté ; la ligne B dessert **Liberté Quartz**. Le [plan du pôle d'échanges publié par Bibus](https://www.bibus.fr/bibus-et-vous/actualites/les-evenements-du-reseau/zoom-sur-la-place-de-la-liberte) permet de distinguer les arrêts de tram et de bus. Vérifiez les horaires de retour et les éventuelles perturbations, surtout après les projections.

Si vous venez de plus loin pour les illuminations, l'[Hôtel Oceania Brest, rue de Siam, sur Booking.com](https://www.booking.com/hotel/fr/hotel-oceania-brest-centre.fr.html) est une option centrale proposant des chambres familiales. Demandez confirmation d'un lit bébé pour la chambre et les dates choisies avant de réserver ; ni tarif ni disponibilité ne sont garantis ici.

Pour prolonger le séjour avec un tout-petit, notre [guide de Brest avec un bébé](https://www.fam-space.fr/articles/parentalite/premier-week-end-a-brest-avec-un-bebe-ou-dormir-et-quoi-faire/) détaille le téléphérique, les Capucins, Océanopolis et les déplacements en poussette, sans les confondre avec le programme de Noël.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-cusset-2026-en-famille-quel-jour-choisir/ | Marché de Noël de Cusset 2026 en famille: quel jour choisir? | evenements | Cusset, Allier, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | Noël à Nantes 2026: marché de Noël et Voyage en hiver en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | Noël à Provins 2026: marché médiéval, animations et visites en famille | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/evenements/rouen-givree-2026-en-famille-marche-de-noel-et-refuge-givre/ | Rouen Givrée 2026 en famille: marché de Noël et Refuge Givré | evenements | Rouen, Seine-Maritime, Normandie
- /articles/activites/noel-2026-a-l-ecomusee-d-alsace-en-famille-quand-venir-et-que-prevoir/ | Noël 2026 à l'Écomusée d'Alsace en famille: quand venir et que prévoir? | activites | Ungersheim, Haut-Rhin, Grand Est
- /articles/parentalite/premier-week-end-a-brest-avec-un-bebe-ou-dormir-et-quoi-faire/ | Brest avec un bébé: Océanopolis, téléphérique et séjour sans voiture | parentalite | Brest, Finistère, Bretagne
- /articles/activites/espace-des-sciences-de-morlaix-en-famille-que-decouvrir-a-la-manufacture/ | Espace des sciences de Morlaix en famille: que découvrir à la Manufacture? | activites | Morlaix, Finistère, Bretagne
- /articles/activites/musee-de-pont-aven-en-famille-visites-ludiques-et-ateliers-pour-enfants/ | Musée de Pont-Aven en famille: visites ludiques et ateliers pour enfants | activites | Pont-Aven, Finistère, Bretagne
- /articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/ | Noël à Trévarez 2026 en famille: dates, horaires et réservation | evenements | Saint-Goazec, Finistère, Bretagne
- /articles/voyages/ile-de-batz-avec-des-enfants-dormir-sur-l-ile-ou-rester-a-roscoff/ | Île de Batz avec des enfants: dormir sur l'île ou rester à Roscoff? | voyages | Île-de-Batz, Finistère, Bretagne
- /articles/sorties/chateau-de-kerjean-avec-des-enfants-combien-de-temps-prevoir-et-quel-billet-choisir/ | Château de Kerjean avec des enfants: combien de temps prévoir et quel billet choisir? | sorties | Saint-Vougay, Finistère, Bretagne
- /articles/bons-plans/pass-domaines-et-musees-du-finistere-90-ou-pass-decouverte-lequel-choisir/ | Pass Domaines et Musées du Finistère: 90 € ou Pass Découverte, lequel choisir? | bons-plans | Quimper, Finistère, Bretagne
- /articles/voyages/crozon-morgat-en-famille-ou-dormir-pour-profiter-des-plages-sans-multiplier-les-trajets/ | Crozon-Morgat en famille: où dormir pour profiter des plages sans multiplier les trajets | voyages | Crozon, Finistère, Bretagne
- /articles/evenements/festival-place-aux-momes-roscoff-2026-famille/ | Festival Place aux Mômes 2026 à Roscoff: quatre spectacles gratuits en famille en août | evenements | Roscoff, Finistère, Bretagne
- /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Clermont-Ferrand 2026 en famille: horaires, animations et accès | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-montpellier-2026-en-famille-dates-fermetures-et-attractions/ | Marché de Noël de Montpellier 2026 en famille: horaires, jours fermés et manèges | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | Noël des Alpes 2026 à Annecy en famille: marché, patinoire et illuminations | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | Marchés de Noël de Tours 2026 en famille: lieux, dates et budget | evenements | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël de Saint-Étienne 2026 en famille: dates, horaires et accès | evenements | Saint-Étienne, Loire, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/marche-de-noel-de-clermont-ferrand-2026-en-famille-horaires-animations-et-acces/ | 2026-10-29T11:32:05.289Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/marche-de-noel-de-montpellier-2026-en-famille-dates-fermetures-et-attractions/ | 2026-10-29T08:29:37.767Z
- opportunity | /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T18:37:09.008Z
- opportunity | /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | 2026-10-28T21:29:26.054Z
- opportunity | /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | 2026-10-24T15:27:41.430Z
- opportunity | /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | 2026-10-24T03:31:56.628Z
- opportunity | /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | 2026-10-29T05:28:53.475Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
