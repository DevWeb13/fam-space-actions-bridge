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
title: "Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille"
subtitle: Choisir entre la promenade lumineuse seule et le billet combiné avec les parcs animaliers jusqu'au 30 novembre
summary: "Safari de Lumières à Lumigny du 15 octobre 2026 au 3 janvier 2027: tarifs enfants, billet combiné, jours d'ouverture, dernière entrée et conseils pour les familles."
category: evenements
location:
  city: Lumigny-Nesles-Ormeaux
  department: Seine-et-Marne
  region: Île-de-France
keywords:
  - Lumigny Safari de Lumières 2026 2027
  - Safari de Lumières Lumigny tarifs famille
  - Lumigny Safari de Lumières billet combiné
sources:
  - title: Lumigny Safari Reserve - Safari de Lumières, programme, billets et tarifs
    url: https://lumigny-safari-reserve.com/evenements/lumigny-safari-de-lumieres/
  - title: VisitParisRegion - Lumigny Safari de Lumières, calendrier et accessibilité
    url: https://www.visitparisregion.com/fr/lumigny-safari-de-lumieres
  - title: Lumigny Safari Reserve - Horaires des deux parcs animaliers
    url: https://lumigny-safari-reserve.com/horaires-et-tarifs/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille
  decision: Choisir en connaissance de cause entre la promenade lumineuse seule et la journée dans les deux parcs prolongée par le parcours nocturne, calculer le budget familial selon l'âge des enfants, puis réserver une soirée effectivement ouverte sans espérer voir des animaux vivants la nuit.
  affiliationPotential: "L'organisateur vend les billets sur sa billetterie Qweekle; aucun billet équivalent identifié chez GetYourGuide, Tiqets ou Klook. Garder la billetterie officielle dans les Sources et ne pas mettre de lien d'achat officiel dans le corps. Hébergement secondaire vérifié: Le Royaume des Lions, La Fortelle à Rigny, est répertorié sur Booking.com (chambres familiales, parking privé gratuit, restauration sur place): https://www.booking.com/hotel/fr/le-royaume-des-lions-lumigny-nesles-ormeaux.fr.html ; vérifier les tarifs et disponibilités par date, ne rien garantir."
  gsc:
    retrievedAt: 2026-10-16T04:49:29.006Z
    dataThrough: 2026-10-13
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Lumigny Safari Reserve - Programme officiel Safari de Lumières »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-03
affiliate:
  enabled: true
  type: travel
  destination: Lumigny-Nesles-Ormeaux
---

Du **15 octobre 2026 au 3 janvier 2027**, le **Lumigny Safari Reserve**, en Seine-et-Marne, propose pour ses 20 ans un parcours nocturne de lanternes géantes: le **Lumigny Safari de Lumières**. La promenade est familiale et dure environ **une heure**. Mais attention au billet choisi: **voir les illuminations le soir ne permet pas de voir les animaux vivants**. Pour associer les deux parcs animaliers à la soirée, il faut une formule combinée, proposée **uniquement jusqu'au 30 novembre**.

## Lumières seules ou deux parcs et Lumières: quel billet prendre?

Deux formules sont annoncées par l'organisateur.

**Le billet Safari de Lumières seul** donne accès au parcours de lanternes en soirée. Il coûte **16,90 € à partir de 11 ans**, **14,90 € de 3 à 10 ans** et est **gratuit pour les moins de 3 ans**. Pour deux adultes et deux enfants de 3 à 10 ans, le total est donc de **63,60 €**, sans repas.

**Le billet combiné « deux parcs + Lumières »** permet de visiter **Lumigny Safari Reserve et Terre de Singes en journée**, puis de revenir sur le parcours lumineux à partir de 18 h. Il coûte **39 € à partir de 11 ans** et **29 € de 3 à 10 ans**: soit **136 €** pour la même famille de quatre personnes. L'organisateur ne précise pas explicitement sur la page événement la gratuité des moins de 3 ans pour cette formule: vérifiez-la au moment de réserver.

Le combiné est proposé **jusqu'au 30 novembre 2026 inclus**. **À partir du 1er décembre**, les parcs zoologiques entrent en fermeture hivernale et **seul le parcours nocturne reste accessible**, selon son calendrier. Les tarifs ordinaires des parcs en journée ne doivent donc pas être confondus avec ceux de cette soirée.

La **réservation en ligne est obligatoire** pour le Safari de Lumières, avec des **billets datés**. Le parcours nocturne n'est **pas compris dans le pass annuel** du parc. Consultez les conditions et le prix final de votre date avant le paiement, particulièrement pour un week-end ou une soirée de vacances scolaires.

## Quels jours venir et jusqu'à quelle heure?

Les illuminations sont annoncées **de 18 h à 22 h**, avec **dernière entrée à 20 h 30**. Elles ne sont pas ouvertes chaque soir de toute la saison:

- **Du 15 octobre au 1er novembre 2026:** tous les jours.
- **Du 2 novembre au 18 décembre:** les **jeudis, vendredis, samedis et dimanches** hors vacances scolaires; ouverture tous les soirs pendant les périodes de vacances concernées.
- **Du 19 décembre 2026 au 3 janvier 2027:** tous les jours, **sauf les 24, 25 et 31 décembre et le 1er janvier**.

Ce calendrier est celui publié par **VisitParisRegion**. Vérifiez qu'un créneau est réellement proposé à la date choisie sur la billetterie avant de vous déplacer.

Si vous prenez le combiné avant décembre, organisez d'abord la journée avec les animaux: les deux parcs ferment à **17 h** sur cette période, et **Terre de Singes ouvre à 13 h 30**. Les illuminations commencent ensuite à **18 h**. Pour une visite uniquement nocturne, inutile de venir dès l'après-midi.

## À quoi ressemble la promenade avec des enfants?

Le parcours comprend **trois univers**: les **fonds marins**, avec poissons, méduses et créatures océaniques; les **animaux du monde**, représentés par de grandes lanternes colorées; puis un univers **fantastique**, avec notamment dragons et phénix. Les scènes sont accompagnées d'ambiances sonores et se découvrent **librement, à son rythme**.

Il s'agit de décors lumineux et non d'un safari d'animaux vivants. Pendant la soirée, **les circuits zoologiques et les espaces où vivent les animaux sont fermés au public**. L'organisateur indique que les installations lumineuses ont été séparées des circuits animaliers pour préserver la tranquillité des animaux.

La promenade est présentée comme adaptée aux **jeunes enfants**. Comptez environ **une heure**, éventuellement davantage si vous faites plusieurs arrêts devant les lanternes. Le parcours étant en extérieur à l'automne et en hiver, prévoyez des vêtements chauds et des chaussures adaptées. VisitParisRegion mentionne des **aménagements pour les personnes à mobilité réduite et un accès en fauteuil roulant en autonomie**, mais ne détaille pas chaque portion du chemin ni les contraintes pour les poussettes. Pour une question particulière d'accessibilité, mieux vaut interroger le parc avant d'acheter.

## Parking, repas et accès à Lumigny

Le Lumigny Safari Reserve se trouve à **La Fortelle, 77540 Lumigny-Nesles-Ormeaux**, en Seine-et-Marne. Le **parking est gratuit** et reste accessible pendant les soirées. Le **snack, le restaurant et la boutique** sont également ouverts. L'organisateur annonce une offre de restauration hivernale, notamment des gaufres et un burger raclette; aucun repas n'est compris automatiquement dans les prix des billets indiqués plus haut.

Pour vérifier l'accueil d'une poussette, un besoin de mobilité ou tout changement de programme, le parc est joignable au **01 64 51 33 33**.

## Dormir près du parc après une soirée de lumières

Si vous venez de loin avec des enfants, **[Le Royaume des Lions à Rigny](https://www.booking.com/hotel/fr/le-royaume-des-lions-lumigny-nesles-ormeaux.fr.html)** est une option à examiner pour éviter un long retour après la promenade. L'établissement, situé dans le secteur de La Fortelle, propose des **chambres familiales**, un **parking privé gratuit** et un **restaurant**. Vérifiez la distance réelle pour votre trajet, la capacité de la chambre, les conditions d'annulation et les disponibilités à la date souhaitée: aucun tarif ni hébergement n'est garanti pour les soirées du Safari de Lumières.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | Halloween 2026 au Safari de Peaugres: animations, tarifs et Festival Lumières Sauvages | evenements | Peaugres, Ardèche, Auvergne-Rhône-Alpes
- /articles/activites/wow-safari-thoiry-en-famille-tarifs-duree-et-conseils-pour-organiser-la-visite/ | Wow Safari Thoiry en famille: tarifs 2026, billets et durée | activites | Thoiry, Yvelines, Île-de-France
- /articles/sorties/safari-de-peaugres-avec-enfants-quel-billet-choisir-et-comment-organiser-la-journee/ | Safari de Peaugres avec enfants: quel billet choisir et comment organiser la journée | sorties | Peaugres, Ardèche, Auvergne-Rhône-Alpes
- /articles/evenements/lumieres-de-noel-a-montbeliard-2026-quel-jour-venir-avec-des-enfants/ | Lumières de Noël à Montbéliard 2026: quel jour venir avec des enfants? | evenements | Montbéliard, Doubs, Bourgogne-Franche-Comté
- /articles/sorties/le-grau-du-roi-en-famille-3-activites-a-reserver-en-2026/ | Le Grau-du-Roi en famille: 3 activités à réserver en 2026 | sorties | Le Grau-du-Roi, Gard, Occitanie
- /articles/sorties/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/ | Planète Préhistorique à Bordeaux avec des enfants: âge, durée et tarifs | sorties | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/activites/atelier-des-lumieres-avec-un-enfant-quel-programme-choisir-et-peut-on-venir-avec-une-poussette/ | Atelier des Lumières avec un enfant: quel programme choisir et peut-on venir avec une poussette ? | activites | Paris, Paris, Île-de-France
- /articles/evenements/coeur-de-ville-en-lumieres-2026-avec-des-enfants-comment-preparer-la-soiree-sans-voiture/ | Cœur de Ville en Lumières 2026 avec des enfants: comment préparer la soirée sans voiture? | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | Noël 2026 à Disneyland Paris: faut-il un billet 2 parcs pour voir Arendelle? | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/parentalite/laep-en-seine-et-marne-ou-aller-et-comment-se-passe-une-premiere-visite/ | LAEP en Seine-et-Marne: où aller et comment se passe une première visite? | parentalite | Meaux, Seine-et-Marne, Île-de-France
- /articles/cuisine/visiter-une-cave-d-affinage-de-brie-a-jouarre-ce-qu-il-faut-savoir-avec-des-enfants/ | Visiter une cave d'affinage de brie à Jouarre: ce qu'il faut savoir avec des enfants | cuisine | Jouarre, Seine-et-Marne, Île-de-France
- /articles/maison/couches-lavables-dans-le-nord-de-la-seine-et-marne-acheter-louer-ou-choisir-l-occasion/ | Couches lavables dans le nord de la Seine-et-Marne: acheter, louer ou choisir l'occasion? | maison | Monthyon, Seine-et-Marne, Île-de-France
- /articles/vie-pratique/scol-r-ou-imagine-r-en-seine-et-marne-quel-titre-choisir-pour-la-rentree-2026/ | Scol'R ou imagine R en Seine-et-Marne: quel titre choisir pour la rentrée 2026? | vie-pratique | Melun, Seine-et-Marne, Île-de-France
- /articles/activites/parrot-world-en-famille-tarifs-2026-duree-et-conseils-pour-la-visite/ | Parrot World en famille: tarifs 2026, durée et conseils pour la visite | activites | Crécy-la-Chapelle, Seine-et-Marne, Île-de-France
- /articles/evenements/la-legende-des-chevaliers-a-provins-en-famille-tarifs-horaires-et-conseils-2026/ | La Légende des Chevaliers à Provins en famille: tarifs, horaires et conseils 2026 | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/voyages/halloween-2026-a-disneyland-paris-en-famille-billets-hotel-et-duree-du-sejour/ | Halloween 2026 à Disneyland Paris en famille: billets, hôtel et durée du séjour | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/voyages/disneyland-paris-en-famille-en-2026-combien-de-jours-quel-hotel-et-quel-budget-prevoir/ | Disneyland Paris en famille en 2026: combien de jours, quel hôtel et quel budget prévoir | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | Automnales d'Harcourt 2026: animations, visites et tarifs en famille | evenements | Harcourt, Eure, Normandie
- /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | Toussaint 2026 au musée des Confluences: cinq rendez-vous pour les enfants | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/toussaint-2026-au-seaquarium-du-grau-du-roi-quel-jeu-choisir/ | Toussaint 2026 au Seaquarium: dates des jeux, âges et billets en famille | evenements | Le Grau-du-Roi, Gard, Occitanie
- /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France

### Historique Radar lié

- opportunity | /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | 2026-10-16T06:56:21.314Z
- opportunity | /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | 2026-10-13T05:01:12.150Z
- opportunity | /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | 2026-10-02T21:22:46.733Z
- opportunity | /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | 2026-10-15T05:30:56.094Z
- opportunity | /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | 2026-10-11T11:27:54.175Z
- opportunity | /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | 2026-10-15T17:42:32.693Z
- opportunity | /articles/evenements/toussaint-2026-au-seaquarium-du-grau-du-roi-quel-jeu-choisir/ | 2026-10-15T12:38:21.556Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
