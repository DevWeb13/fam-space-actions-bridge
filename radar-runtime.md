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
title: "Marché de Noël d’Orléans 2026 en famille : dates, manèges et accès"
subtitle: "Les marchés ferment le 27 décembre, mais les manèges restent jusqu’au 3 janvier : quand venir avec les enfants ?"
summary: Du 27 novembre au 27 décembre 2026, le marché de Noël d’Orléans occupe trois secteurs du centre-ville. Horaires, prolongation des manèges, accès en tram et points encore à confirmer pour organiser une sortie familiale.
category: evenements
location:
  city: Orléans
  department: Loiret
  region: Centre-Val de Loire
keywords:
  - marché de Noël Orléans 2026
  - Noël Orléans enfants
  - manèges Orléans janvier 2027
sources:
  - title: "Ville d’Orléans — Marché de Noël 2026 : dates, lieux et horaires"
    url: https://www.orleans.fr/actualites/detail/marche-de-noel-2026-appel-a-candidature-des-exposants
  - title: TAO — Réseau de transports d’Orléans Métropole
    url: https://tao-mobilites.fr/fr/
  - title: Appart’City — Résidence Orléans, équipements et capacité des appartements
    url: https://www.appartcity.com/en/destinations/france/center-loire-valley/orleans/orleans
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-a-orleans-2026-en-famille-marches-horaires-et-maneges-apres-noel
  decision: Choisir quand et où venir avec des enfants, notamment entre le marché avant le 27 décembre et les seuls manèges prolongés après cette date.
  affiliationPotential: "Hébergement pour un week-end : Appart'City Confort Orléans, appartements avec kitchenette et option familiale vérifiés sur Booking.com ; vérifier capacité et dates avant proposition."
  gsc:
    retrievedAt: 2026-10-25T02:31:31+02:00
    dataThrough: 2026-10-22
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville d'Orléans - Marché de Noël 2026, lieux, dates et horaires »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-03
---

Pour profiter des chalets de Noël à Orléans avec les enfants, prévoyez votre sortie **entre le vendredi 27 novembre et le dimanche 27 décembre 2026**. Les manèges sont annoncés **jusqu’au dimanche 3 janvier 2027**, mais cette prolongation ne signifie pas que les marchés restent ouverts après le 27 décembre. C’est la distinction essentielle pour choisir sa date, surtout si vous venez de loin.

## Marché ou manèges : quel jour choisir ?

- **Pour flâner parmi les exposants et chercher des cadeaux :** venez au plus tard le 27 décembre. Le marché municipal accueille notamment artisans, créateurs et producteurs locaux.
- **Pour une sortie après Noël, du 28 décembre au 3 janvier :** misez uniquement sur les manèges annoncés en prolongation. Ne comptez pas sur les chalets du marché.
- **Avec de jeunes enfants :** un passage en journée, à partir de 11 h, sera souvent plus confortable qu’une nocturne. Si vous recherchez les illuminations, privilégiez la fin d’après-midi en anticipant l'affluence.

La [Ville d’Orléans confirme les dates et la prolongation des manèges](https://www.orleans.fr/actualites/detail/marche-de-noel-2026-appel-a-candidature-des-exposants) dans son annonce de l’édition 2026.

## Où se promener dans le centre d’Orléans ?

Trois secteurs sont annoncés pour le marché : **les quais de Loire, la place de Loire et la place de la République**. Ils permettent de construire une promenade dans le centre-ville plutôt que de prévoir plusieurs déplacements en voiture.

Pour une visite avec poussette ou des enfants qui marchent peu, choisissez un point d’arrivée dans le centre et adaptez la longueur de la balade à leur fatigue. La mairie n’a pas encore détaillé la répartition des chalets, des manèges et des éventuelles animations entre ces lieux : impossible, à ce stade, de garantir qu’une attraction précise se trouvera sur une place donnée. N’utilisez pas un plan ou une liste d’animations de Noël 2025 comme programme de 2026.

## Quels sont les horaires du marché de Noël 2026 ?

L’ouverture annoncée est **tous les jours à 11 h** :

- **Du dimanche au jeudi :** fermeture à 20 h.
- **Le vendredi :** fermeture à 21 h.
- **Le samedi :** fermeture à 22 h.

Ces horaires concernent le marché tel qu’annoncé par la mairie. **Les éventuels horaires particuliers des 24 et 25 décembre, ainsi que ceux des manèges après le 27 décembre, ne sont pas encore confirmés** dans cette annonce. Si vous prévoyez de venir à l’une de ces dates, vérifiez le programme municipal actualisé avant de partir.

## Animations, manèges et budget : ce qui reste à confirmer

La programmation détaillée pour les enfants n’est pas encore publiée dans la source municipale 2026 consultée : ni présence du Père Noël, ni ateliers, ni spectacle précis ne doivent être considérés comme acquis. Les **tarifs des manèges** et leurs éventuelles conditions d’âge ou de taille ne sont pas davantage précisés. Aucun billet d’entrée général n’est annoncé pour la promenade dans les espaces du marché, mais prévoyez un budget distinct pour les attractions, les boissons et les achats.

Avec plusieurs enfants, le plus simple est de fixer à l’avance le nombre de tours de manège autorisés, puis de vérifier les prix affichés sur place. Cela évite de construire un budget sur les tarifs de l’édition précédente.

## Comment venir en tram et circuler avec les enfants ?

Le **tram A du réseau TAO** dessert le centre d’Orléans, notamment les stations **République** et **Royale-Châtelet**. Depuis la gare d’Orléans, il permet de rejoindre le centre avant de poursuivre à pied vers les places et les quais. Consultez [TAO](https://tao-mobilites.fr/fr/) le jour de votre sortie pour l’itinéraire, les horaires du retour et les éventuelles perturbations.

Les lieux annoncés sont des espaces publics du centre-ville, mais l’accessibilité exacte des installations temporaires n’est pas encore documentée pour 2026. En poussette ou en fauteuil, tenez compte des pavés éventuels, des files d’attente et de l’affluence ; pour un besoin d’accessibilité particulier, demandez confirmation à la mairie avant le déplacement.

## Et si la météo ne permet pas une longue promenade ?

Pour garder une idée de sortie à l’intérieur, le [MOBE d’Orléans en famille](https://www.fam-space.fr/articles/activites/mobe-d-orleans-en-famille-fossiles-jeux-et-biodiversite/) constitue une alternative autour des fossiles, des jeux et de la biodiversité. Vérifiez ses horaires propres au jour choisi : le musée ne suit pas nécessairement ceux du marché de Noël.

## Rester une nuit à Orléans avec des enfants

Si vous transformez la sortie en week-end, l’**Appart’City Confort Orléans**, au **4 rue de Lahire**, propose notamment un appartement de deux pièces pouvant accueillir **jusqu’à quatre personnes**, avec cuisine équipée. Cette formule peut être pratique pour préparer le petit déjeuner ou un repas simple avec les enfants. Vous pouvez [consulter les logements et les conditions pour votre famille sur Booking.com](https://www.booking.com/hotel/fr/appart-city-orla-c-ans.fr.html) : vérifiez la capacité réellement proposée pour l’âge de chaque enfant, le tarif et les disponibilités à vos dates.

**À retenir avant de réserver votre déplacement :** le marché s’arrête le 27 décembre ; seuls les manèges sont annoncés jusqu’au 3 janvier. Pour une visite les jours fériés ou après Noël, attendez la confirmation des horaires particuliers et du programme définitif.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/mobe-d-orleans-en-famille-fossiles-jeux-et-biodiversite/ | MOBE d’Orléans en famille: fossiles, jeux et biodiversité | activites | Orléans, Loiret, Centre-Val de Loire
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/maison/composteur-gratuit-a-orleans-metropole-comment-en-profiter-en-2026/ | Composteur gratuit à Orléans Métropole: comment en profiter en 2026 | maison | Orléans, Loiret, Centre-Val de Loire
- /articles/sorties/chasse-motifs-loire-orleans-famille-2026/ | Chasse aux motifs de Loire à Orléans: une balade gratuite pour les 6 à 12 ans | sorties | Orléans, Loiret, Centre-Val de Loire
- /articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/ | Noël à Trévarez 2026 en famille: dates, horaires et réservation | evenements | Saint-Goazec, Finistère, Bretagne
- /articles/evenements/marche-de-noel-de-cusset-2026-en-famille-quel-jour-choisir/ | Marché de Noël de Cusset 2026 en famille: quel jour choisir? | evenements | Cusset, Allier, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | Noël à Nantes 2026: marché de Noël et Voyage en hiver en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/maison/maison-de-vacances-dans-le-loiret-en-famille-les-criteres-a-verifier-avant-de-reserver/ | Maison de vacances dans le Loiret en famille: les critères à vérifier avant de réserver | maison | Orléans, Loiret, Centre-Val de Loire
- /articles/parentalite/chateau-de-chamerolles-en-famille-visite-libre-ou-guidee-en-2026/ | Château de Chamerolles en famille: visite libre ou guidée en 2026 ? | parentalite | Chilleurs-aux-Bois, Loiret, Centre-Val de Loire
- /articles/cuisine/cueillir-pommes-et-poires-a-mezieres-lez-clery-ce-qu-il-faut-verifier-avant-de-partir/ | Cueillir pommes et poires à Mézières-lez-Cléry: ce qu'il faut vérifier avant de partir | cuisine | Mézières-lez-Cléry, Loiret, Centre-Val de Loire
- /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | Thoiry Lumières Sauvages 2026-2027: dates, billets et visite en famille | evenements | Thoiry, Yvelines, Île-de-France
- /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | Noël à Chenonceau 2026: décors, nocturnes et tarifs en famille | evenements | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | Noël Gaulois 2026 au Parc Astérix: billets, glissades et spectacles en famille | evenements | Plailly, Oise, Hauts-de-France
- /articles/evenements/train-du-pere-noel-a-toucy-2026-horaires-tarifs-et-reservation/ | Train du Père Noël à Toucy 2026: horaires, tarifs et réservation | evenements | Toucy, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | Noël au château d'Amboise 2026: visite, nocturnes et tarifs en famille | evenements | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | Noël à Provins 2026: marché médiéval, animations et visites en famille | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/evenements/chante-nwel-a-ducos-le-28-novembre-2026-une-soiree-de-noel-creole-en-famille/ | Chanté Nwel à Ducos le 28 novembre 2026: une soirée de Noël créole en famille | evenements | Ducos, Martinique, Martinique
- /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | Noël au château de Cheverny 2026: billets, mapping et visite en famille | evenements | Cheverny, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | Foire aux santons de Marseille 2026: dates, inauguration et visite en famille | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | Bédéciné 2026 à Illzach en famille: ateliers, spectacles et billets | evenements | Illzach, Haut-Rhin, Grand Est
- /articles/evenements/automne-des-gones-2026-a-lyon-quels-ateliers-gratuits-choisir-avec-les-enfants/ | Automne des gones 2026 à Lyon: ateliers et sorties gratuites en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/automne-des-gones-2026-a-lyon-quels-ateliers-gratuits-choisir-avec-les-enfants/ | 2026-10-23T09:31:27.871Z
- opportunity | /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | 2026-10-23T12:33:36.649Z
- opportunity | /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | 2026-10-23T15:29:55.218Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-10-24T12:31:27.784Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | 2026-10-23T19:58:30.214Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | 2026-10-24T06:28:53.730Z
- opportunity | /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | 2026-10-24T15:27:41.430Z
- opportunity | /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | 2026-10-24T03:31:56.628Z
- opportunity | /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | 2026-10-24T09:33:57.174Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
