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
title: "Ville de Noël d’Arras 2026 en famille : quand venir et quel budget prévoir ?"
subtitle: "Horaires, grande roue, patinoire et accès : organiser une visite sans mauvaise surprise"
summary: Du 27 novembre au 27 décembre 2026, choisissez le bon créneau pour découvrir la Ville de Noël d’Arras avec les enfants, entre balade gratuite, attractions et accès au centre-ville.
category: evenements
location:
  city: Arras
  department: Pas-de-Calais
  region: Hauts-de-France
keywords:
  - Ville de Noël Arras 2026
  - marché de Noël Arras en famille
  - grande roue patinoire Arras Noël
sources:
  - title: Ville d’Arras — Ville de Noël 2026
    url: https://www.arras.fr/ville-de-noel
  - title: Arras Pays d’Artois Tourisme — Ville de Noël 2026, dates et horaires
    url: https://www.arraspaysdartois.com/agenda/ville-de-noel/
  - title: Ville d’Arras — Lieux emblématiques de la Ville de Noël
    url: https://arras.fr/page/lieux-emblematiques
  - title: Artis — Infos trafic et déviations pendant la Ville de Noël 2026
    url: https://plan.bus-artis.fr/fr/traffic-infos
  - title: Artis — Navettes gratuites Ma Citadine
    url: https://www.bus-artis.fr/bus/ma-citadine/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires
  decision: Choisir le moment et la durée de visite adaptés à l'âge des enfants, savoir quelles attractions privilégier et distinguer la promenade gratuite des activités payantes, sans se tromper d'horaires.
  affiliationPotential: "Marché en accès libre : aucune billetterie partenaire pertinente pour l'entrée. Pour une nuit sur place, Mercure Arras Centre Gare vérifié sur Booking.com : chambres familiales et lit bébé gratuit sur demande, sans prix ni disponibilité garantis aux dates de Noël."
  gsc:
    retrievedAt: 2026-10-29T02:27:59+01:00
    dataThrough: 2026-10-26
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville d'Arras — Ville de Noël 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-27T21:00:00+01:00
---

La **Ville de Noël d’Arras revient du 27 novembre au 27 décembre 2026** autour de la Grand’Place et des places du centre historique. Avec des enfants, nul besoin de prévoir toutes les attractions : une promenade entre les chalets et les illuminations suffit déjà pour profiter de l’ambiance. Le choix du créneau et le budget des activités font surtout la différence.

## À quelle heure venir avec les enfants ?

Selon [Arras Pays d’Artois Tourisme](https://www.arraspaysdartois.com/agenda/ville-de-noel/), les horaires annoncés pour 2026 sont :

- **Du dimanche au jeudi : 12 h à 21 h.**
- **Vendredi et samedi : 12 h à 22 h 30.**
- **Jeudi 24 décembre : 12 h à 17 h.**
- **Vendredi 25 décembre : fermeture.**

Pour des enfants en bas âge, prévoyez plutôt **une à deux heures en début d’après-midi** : quelques chalets, une pause gourmande et le retour avant la fatigue. Pour voir les lumières, une visite commençant en fin d’après-midi permet de découvrir le centre de jour puis à la tombée de la nuit, sans prolonger jusqu’à la fermeture. Ce sont des propositions de parcours, pas des créneaux d’animations réservés.

## Grande roue, patinoire, Père Noël : que choisir ?

La [Ville d’Arras présente parmi les lieux emblématiques](https://arras.fr/page/lieux-emblematiques) la grande roue, la patinoire, le petit train touristique au départ de la place de la Gare et la maison du Père Noël, place d’Ipswich. Le beffroi illuminé, le sapin et les chalets offrent aussi de quoi se promener sans multiplier les activités.

**Attention : la présence de ces attractions dans la présentation générale ne vaut pas confirmation de leurs horaires, tarifs, conditions d’âge ou dates de fonctionnement pour 2026.** Aucun prix 2026 suffisamment confirmé n’a été trouvé pour les annoncer ici. Avant de promettre à un enfant un tour de grande roue, une séance de patinage ou une rencontre avec le Père Noël, consultez le [programme actualisé de la Ville de Noël](https://www.arras.fr/ville-de-noel).

Pour les plus jeunes, commencez par les chalets et les décors, puis choisissez une seule attraction si elle est ouverte et adaptée. Pour les enfants qui veulent patiner, vérifiez notamment l’âge admis, l’accompagnement nécessaire, les équipements disponibles et le prix avant de vous déplacer.

## Quel budget prévoir ?

**L’accès à la promenade du marché est libre** : on peut venir admirer les décorations sans acheter de billet d’entrée. En revanche, ne confondez pas cet accès avec les tours de manège, la patinoire, les achats dans les chalets ou les consommations. Leurs tarifs 2026 ne sont pas tous confirmés à ce stade.

Pour maîtriser la dépense, fixez avant de partir une enveloppe pour **une activité payante éventuelle et un goûter**, plutôt que de compter sur une formule tout compris qui n’est pas annoncée.

## Venir en train ou en bus : attention aux déviations de Noël

La **gare d’Arras** est un point de départ pratique pour rejoindre à pied les places du centre. Le marché se tient notamment sur la **Grand’Place, 62000 Arras**. Avec de jeunes marcheurs, gardez du temps pour le trajet et les arrêts en chemin.

Le réseau Artis annonce déjà des **déviations du 27 novembre au 27 décembre 2026** : les lignes **9 et 10** ne desserviront notamment pas l’arrêt Grand’Place, et la **Citadine 1** aura également des arrêts déplacés. Consultez les [infos trafic Artis](https://plan.bus-artis.fr/fr/traffic-infos) avant de partir. Les [navettes Ma Citadine](https://www.bus-artis.fr/bus/ma-citadine/) sont gratuites et accessibles aux poussettes, mais leur service habituel fonctionne du lundi au samedi, de 7 h à 20 h, hors jours fériés : elles ne constituent donc pas une solution garantie pour une visite tardive ou dominicale.

Si vous venez en voiture, les restrictions du centre et l’affluence peuvent compliquer l’approche immédiate des places. Choisissez un parking en vérifiant son accès le jour de votre visite plutôt que de compter sur un stationnement au pied des chalets.

## Poussette, bébé et pluie : les détails à anticiper

La promenade se déroule en extérieur, sur plusieurs places et rues du centre. Une poussette peut être utile, mais la foule et les pavés peuvent ralentir le parcours : préférez un circuit court et évitez de chercher à tout voir. Pour un bébé, emportez le nécessaire pour le change et son repas. **La présence d’une table à langer, d’un micro-ondes pour réchauffer un petit pot et de toilettes accessibles sur le parcours n’est pas confirmée** dans les informations 2026 consultées ; ne comptez pas sur ces services sans vérification préalable.

En cas de pluie forte, réduisez la balade ou prévoyez une sortie intérieure distincte : notre [guide de Cité Nature à Arras en famille](https://www.fam-space.fr/articles/sorties/cite-nature-a-arras-en-famille-quelles-expositions-choisir-cet-automne/) détaille les expositions et les conditions de visite. Vérifiez ses horaires avant d’en faire un plan de repli, notamment les jours fériés.

## Rester une nuit à Arras

Pour profiter des illuminations sans reprendre la route le soir, le [Mercure Arras Centre Gare sur Booking.com](https://www.booking.com/hotel/fr/mercure-atria-arras-centre.fr.html), situé face à la gare, propose des chambres familiales et des lits bébé gratuits **sur demande et sous réserve de disponibilité**. Indiquez le nombre et l’âge des enfants pour vérifier la chambre adaptée, le prix total et les conditions d’annulation : aucune disponibilité particulière n’est garantie pour les dates de la Ville de Noël.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | Marchés de Noël de Tours 2026 en famille: lieux, dates et budget | evenements | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/ | Marché de Noël de Lille 2026 en famille: village, Grande Roue et infos pratiques | evenements | Lille, Nord, Hauts-de-France
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/noel-a-chambord-2026-avec-des-enfants-quand-venir-et-que-prevoir/ | Noël à Chambord 2026 avec des enfants: quand venir et que prévoir | evenements | Chambord, Loir-et-Cher, Centre-Val de Loire
- /articles/activites/noel-2026-a-l-ecomusee-d-alsace-en-famille-quand-venir-et-que-prevoir/ | Noël 2026 à l'Écomusée d'Alsace en famille: quand venir et que prévoir? | activites | Ungersheim, Haut-Rhin, Grand Est
- /articles/evenements/lumieres-de-noel-a-montbeliard-2026-quel-jour-venir-avec-des-enfants/ | Lumières de Noël à Montbéliard 2026: quel jour venir avec des enfants? | evenements | Montbéliard, Doubs, Bourgogne-Franche-Comté
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/sorties/cite-nature-a-arras-en-famille-quelles-expositions-choisir-cet-automne/ | Cité Nature à Arras en famille: quelles expositions choisir cet automne? | sorties | Arras, Pas-de-Calais, Hauts-de-France
- /articles/evenements/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/ | Festival de la Sainte-Barbe 2026 à Lens-Liévin: programme en famille du 4 au 6 décembre | evenements | Lens, Pas-de-Calais, Hauts-de-France
- /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | Toussaint 2026 à Nausicaá: ateliers en journée et nocturne d’Halloween | evenements | Boulogne-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/voyages/maison-du-marais-pres-de-saint-omer-bateau-et-expositions-en-famille/ | Maison du Marais près de Saint-Omer: bateau et expositions en famille | voyages | Saint-Martin-lez-Tatinghem, Pas-de-Calais, Hauts-de-France
- /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | Halloween 2026 à la Tour de l'Horloge de Guînes: visites, contes et nocturne | evenements | Guînes, Pas-de-Calais, Hauts-de-France
- /articles/sorties/toussaint-2026-au-louvre-lens-quelle-activite-choisir-selon-l-age/ | Toussaint 2026 au Louvre-Lens: quelle activité choisir selon l'âge? | sorties | Lens, Pas-de-Calais, Hauts-de-France
- /articles/sorties/parc-bagatelle-en-famille-quelles-attractions-selon-la-taille-des-enfants/ | Parc Bagatelle en famille: quelles attractions selon la taille des enfants? | sorties | Merlimont, Pas-de-Calais, Hauts-de-France
- /articles/bons-plans/nausicaa-a-8-pour-les-adultes-et-6-pour-les-enfants-qui-peut-profiter-des-dimanches-boulonnais/ | Nausicaá à 8 € pour les adultes et 6 € pour les enfants: qui peut profiter des Dimanches Boulonnais? | bons-plans | Boulogne-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/parentalite/creche-a-l-abordage-a-etaples-accueil-ponctuel-ou-regulier-que-choisir/ | Crèche À l'abordage à Étaples: accueil ponctuel ou régulier, que choisir ? | parentalite | Étaples-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/cuisine/ratte-du-touquet-eau-vapeur-ou-four-quelle-cuisson-choisir/ | Ratte du Touquet: eau, vapeur ou four, quelle cuisson choisir? | cuisine | Le Touquet-Paris-Plage, Pas-de-Calais, Hauts-de-France
- /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | Noël des Alpes 2026 à Annecy en famille: marché, patinoire et illuminations | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël de Saint-Étienne 2026 en famille: dates, horaires et accès | evenements | Saint-Étienne, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/la-seine-musicale-en-famille-en-2027-quels-concerts-et-ateliers-selon-l-age/ | La Seine Musicale en famille en 2027: quels concerts et ateliers selon l'âge ? | evenements | Boulogne-Billancourt, Hauts-de-Seine, Île-de-France

### Historique Radar lié

- opportunity | /articles/evenements/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/ | 2026-10-27T04:28:31.006Z
- opportunity | /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | 2026-10-12T10:40:26.563Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z
- opportunity | /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T18:37:09.008Z
- opportunity | /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | 2026-10-28T21:29:26.054Z
- opportunity | /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | 2026-10-18T08:44:05.495Z
- opportunity | /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | 2026-10-29T05:28:53.475Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
