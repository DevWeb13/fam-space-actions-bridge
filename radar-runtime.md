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
title: "Noël à Caen 2026 en famille : marché de Noël ou visite guidée illuminée ?"
subtitle: Chalets du 28 novembre au 29 décembre ; visites commentées les 9 et 16 décembre sur réservation
summary: "Marché à parcourir librement ou visite guidée d'1 h 30 dans Caen illuminé : dates, tarifs, réservation et conseils pratiques pour choisir avec des enfants."
category: evenements
location:
  city: Caen
  department: Calvados
  region: Normandie
keywords:
  - marché de Noël Caen 2026
  - Noël Caen en famille
  - visite illuminations Caen décembre 2026
sources:
  - title: Caen Événements - Marché de Noël 2026
    url: https://www.caen-evenements.com/evenements/marche-de-noel-2026/
  - title: Caen la mer Tourisme - Dans la ville illuminée, RDV Découverte
    url: https://www.caenlamer-tourisme.fr/agenda-evenements/dans-la-ville-illuminee-en-partenariat-avec-caen-evenements-rdv-decouverte/
  - title: Hôtel Astrid - Chambres et tarifs
    url: https://www.hotelastrid.fr/fr/nos-chambres-et-tarifs
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations
  decision: Savoir si une promenade au marché suffit ou si la visite guidée du 9 ou du 16 décembre mérite une réservation pour sa famille.
  affiliationPotential: Aucune billetterie partenaire pertinente pour la visite guidée ; hébergement Booking.com utile pour un week-end, par exemple Hôtel Astrid Caen Centre (chambres familiales vérifiées).
  gsc:
    retrievedAt: 2026-10-30T01:28:25+01:00
    dataThrough: 2026-10-27
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Caen Événements - Marché de Noël 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-29
---

À Caen, Noël 2026 se découvre de deux façons : **se promener à son rythme entre les chalets du marché**, du 28 novembre au 29 décembre, ou **réserver une visite commentée de la ville illuminée**, les mercredis 9 et 16 décembre. Avec de jeunes enfants, la première formule permet de repartir dès que la fatigue arrive. La seconde convient mieux à ceux qui aiment écouter des histoires sur la ville et peuvent suivre une visite de **1 h 30 en soirée**.

## Marché de Noël : une promenade à organiser librement

[Caen Événements](https://www.caen-evenements.com/evenements/marche-de-noel-2026/) annonce **une cinquantaine de chalets répartis dans le centre-ville**, avec des artisans, des créateurs, des décorations, des bijoux, des jeux pour enfants, des produits du terroir et des stands alimentaires.

Vous pouvez simplement flâner et regarder les vitrines, puis choisir une gourmandise ou un cadeau selon votre budget. Contrairement à la visite commentée, cette promenade ne demande pas de réserver une séance. Avec un enfant en bas âge, prévoyez plutôt un petit tour et une pause qu'un programme chargé.

**Attention aux horaires :** la page 2026 de l'organisateur confirme les dates mais ne donne pas encore les heures d'ouverture quotidiennes ni le détail des animations. Les horaires, emplacements précis des chalets et rendez-vous avec le Père Noël vus dans les programmes antérieurs ne doivent pas être considérés comme confirmés pour 2026. Vérifiez ces éléments avant de fixer votre heure d'arrivée, notamment autour des 24 et 25 décembre.

## Visite « Dans la ville illuminée » : pour qui et à quel prix ?

L'Office de tourisme de Caen la mer propose une découverte commentée du patrimoine éclairé, entre places, églises, abbayes et hôtels particuliers. Elle **se termine au marché de Noël avec une boisson chaude offerte**. Il s'agit d'une visite culturelle guidée, pas d'une entrée payante au marché.

Les deux séances annoncées sont les **mercredis 9 et 16 décembre 2026, de 17 h à 18 h 30**. Les tarifs publiés sont de **8 € au plein tarif**, **6 € au tarif réduit** (notamment scolaires, étudiants, demandeurs d'emploi et personnes en situation de handicap), et **gratuit pour les moins de 10 ans**. Par exemple, deux adultes au plein tarif accompagnés de deux enfants de moins de 10 ans paient 16 € au total.

**Réservation et paiement à l'avance obligatoires** : les places sont limitées et aucune billetterie n'est prévue sur place le jour de la visite. Les modalités figurent sur la fiche de Caen la mer Tourisme indiquée dans les références de l'article. Vérifiez la disponibilité de la date choisie, ainsi que le point de rendez-vous communiqué lors de la réservation.

## Quelle formule choisir avec un bébé ou des enfants ?

Pour un bébé en poussette ou un enfant qui ne tient pas longtemps dehors, le **marché seul** est généralement le choix le plus souple : vous pouvez raccourcir la balade, vous arrêter pour un goûter et rentrer sans contrainte d'horaire. Anticipez le froid, l'affluence en soirée et les déplacements entre chalets. Aucun espace de change, micro-ondes ou service spécifique pour les repas de bébé n'est confirmé dans les informations 2026 consultées ; emportez le nécessaire.

La **visite guidée** est plus adaptée à un enfant curieux du patrimoine, capable de marcher ou de rester attentif pendant 90 minutes. Elle se déroule à la tombée de la nuit : prévoyez des vêtements chauds et demandez à l'organisateur si le parcours convient à votre poussette ou aux besoins de mobilité de votre famille. La gratuité des moins de 10 ans ne signifie pas que la visite soit spécialement conçue pour les tout-petits.

## Rejoindre le centre et rentrer après la sortie

Les chalets sont annoncés **dans le centre-ville de Caen**. Si vous venez en train ou comptez prendre le bus ou le tram, repérez votre arrêt et surtout le trajet du retour, particulièrement après la visite de 18 h 30. Pour choisir entre ticket Famille, titres à durée limitée et parking relais, consultez notre guide [Quel ticket Twisto choisir à Caen avec des enfants ?](https://www.fam-space.fr/articles/vie-pratique/quel-ticket-twisto-choisir-a-caen-avec-des-enfants/). Vérifiez les horaires de circulation à votre date, car les services peuvent changer pendant les fêtes.

## Prolonger la soirée par une nuit à Caen

Si vous venez de plus loin, l'[Hôtel Astrid Caen Centre sur Booking.com](https://www.booking.com/hotel/fr/astrid.fr.html) est une option à comparer pour rester près du centre. L'établissement indique proposer une **chambre familiale avec deux lits doubles pour trois ou quatre personnes**. Vérifiez les couchages adaptés à vos enfants, les conditions d'annulation, l'accessibilité et le prix réel à vos dates avant de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | Noël à Bayeux 2026 en famille: marché et Galopades | evenements | Bayeux, Calvados, Normandie
- /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | Noël à Nantes 2026: marché de Noël et Voyage en hiver en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | Noël 2026 à Brest en famille: marché, projections et horaires | evenements | Brest, Finistère, Bretagne
- /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | Noël à Fontevraud 2026: patinoire, marché, dates et tarifs en famille | evenements | Fontevraud-l'Abbaye, Maine-et-Loire, Pays de la Loire
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | Noël des Alpes 2026 à Annecy en famille: marché, patinoire et illuminations | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-a-caen-4-lieux-pour-venir-avec-un-enfant-sans-inscription/ | LAEP à Caen: 4 lieux pour venir avec un enfant sans inscription | parentalite | Caen, Calvados, Normandie
- /articles/cuisine/ateliers-cuisine-a-caen-avec-des-enfants-quelle-formule-choisir/ | Bien Dans Son Assiette à Caen: quel atelier cuisine choisir avec un enfant ? | cuisine | Caen, Calvados, Normandie
- /articles/maison/decheteries-de-caen-la-mer-qr-code-ou-plaque-obligatoires-depuis-septembre-2026/ | Déchèteries de Caen la mer: QR code ou plaque obligatoires depuis septembre 2026 | maison | Caen, Calvados, Normandie
- /articles/vie-pratique/quel-ticket-twisto-choisir-a-caen-avec-des-enfants/ | Quel ticket Twisto choisir à Caen avec des enfants? | vie-pratique | Caen, Calvados, Normandie
- /articles/evenements/equidays-2026-en-famille-dans-le-calvados-villages-gratuits-parade-et-animations/ | Équidays 2026 en famille dans le Calvados: villages gratuits, parade et animations | evenements | Caen, Calvados, Normandie
- /articles/bons-plans/cinema-famille-gratuit-au-memorial-de-caen-pendant-l-ete-2026/ | Cinéma famille gratuit au Mémorial de Caen pendant l'été 2026 | bons-plans | Caen, Calvados, Normandie
- /articles/vie-pratique/ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee/ | Ferry Ouistreham-Portsmouth en famille: préparer le départ et la traversée | vie-pratique | Ouistreham, Calvados, Normandie
- /articles/activites/festyland-avec-de-jeunes-enfants-quelles-attractions-selon-leur-taille/ | Festyland avec de jeunes enfants: quelles attractions selon leur taille? | activites | Carpiquet, Calvados, Normandie
- /articles/voyages/bayeux-en-famille-1-ou-2-jours-et-quel-budget-prevoir/ | Bayeux en famille: 1 ou 2 jours et quel budget prévoir | voyages | Bayeux, Calvados, Normandie
- /articles/sorties/conde-cote-plage-2026-famille/ | Condé Côté Plage 2026 en Normandie: activités gratuites en famille jusqu’au 23 août | sorties | Condé-en-Normandie, Calvados, Normandie
- /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | Lumières de Laval 2026 en famille: marchés, grande roue et croisière | evenements | Laval, Mayenne, Pays de la Loire
- /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | Festival des Petits Explorateurs 2026 à Dijon: ateliers, horaires et tarifs | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille/ | Flottins d’Évian 2026: un village de Noël en bois flotté à découvrir en famille | evenements | Évian-les-Bains, Haute-Savoie, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | 2026-10-30T03:27:02.483Z
- opportunity | /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | 2026-10-30T09:27:15.122Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | 2026-10-30T06:28:26.726Z
- opportunity | /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | 2026-10-30T15:36:05.374Z
- opportunity | /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | 2026-10-28T01:34:03.741Z
- opportunity | /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | 2026-10-24T15:27:41.430Z
- opportunity | /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | 2026-10-29T05:28:53.475Z
- opportunity | /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | 2026-10-30T12:36:12.349Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
