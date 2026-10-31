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
title: "Disneyland Paris en RER A avec des enfants : trajet et billets 2026"
subtitle: Le bon train vers Marne-la-Vallée–Chessy, les tarifs selon l'âge et les précautions pour rentrer après les parcs
summary: Depuis Paris, le RER A rejoint directement les portes de Disneyland Paris. Voici le sens à prendre, le coût des tickets pour toute la famille et les vérifications utiles avec une poussette ou pour un retour tardif.
category: voyages
location:
  city: Chessy
  department: Seine-et-Marne
  region: Île-de-France
keywords:
  - RER A Disneyland Paris enfants
  - ticket RER Paris Disneyland 2026
  - Marne-la-Vallée Chessy en famille
sources:
  - title: Disneyland Paris — Comment venir aux parcs
    url: https://www.disneylandparis.com/fr-fr/services-visiteurs/comment-venir-a-disneyland-paris
  - title: Île-de-France Mobilités — Tarifs des transports 2026
    url: https://www.iledefrance-mobilites.fr/tarifs-titre-de-transport-en-commun-2026
  - title: Île-de-France Mobilités — Ticket Métro-Train-RER et correspondances
    url: https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/ticket-metro-train-rer
  - title: Île-de-France Mobilités — Réduction enfants de 4 à moins de 10 ans
    url: https://www.iledefrance-mobilites.fr/titres-et-tarifs/tarifs-reduits/enfants-4-10-ans
  - title: Île-de-France Mobilités — Gratuité avant 4 ans
    url: https://www.iledefrance-mobilites.fr/gratuite-pour-les-enfants-de-moins-de-4-ans
  - title: Île-de-France Mobilités — Voyager en famille avec Navigo Easy
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/passe-navigo-easy/voyage-groupe-famille
  - title: RATP — Vérifier les ascenseurs avant le trajet
    url: https://www.ratp.fr/aide-contact/questions/preparer-mon-trajet/information-trafic/etat-ascenseurs
  - title: RATP — Information trafic RER A
    url: https://www.ratp.fr/infos-trafic/rer/a
  - title: Disneyland Paris — Staycity Aparthotels et ses services
    url: https://www.disneylandparis.com/fr-be/hotels/staycity-aparthotels
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026
  decision: Savoir si le RER A convient à sa famille pour rejoindre Disneyland depuis Paris, quel titre acheter pour chaque âge et comment sécuriser le retour.
  affiliationPotential: "Billet d'entrée Disneyland Paris vérifié sur Booking.com : https://www.booking.com/attractions/fr/prjyfitkuhfz-one-day-admission-to-disneylandr-paris.fr.html ; pour prolonger en séjour, Staycity Aparthotels near Disneyland Paris avec cuisine et navette gratuite vérifié sur Booking.com : https://www.booking.com/hotel/fr/staycity-aparthotels-paris-marne-la-vallee.fr.html ; prix et disponibilités selon les dates."
  gsc:
    retrievedAt: 2026-10-31T02:28:22+01:00
    dataThrough: 2026-10-28
    signal: strong_page
    sourceUrl: /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/
    basis: "La page « Transports à Paris avec des enfants: quel titre choisir pour payer juste? » conserve 3127 impressions sur la semaine récente, avec une position moyenne de 8.693 et 143.4 % de son pic."
---

Pour rejoindre Disneyland Paris depuis Paris avec des enfants, le **RER A direction Marne-la-Vallée–Chessy** est souvent la solution la plus simple : il vous dépose à son terminus, juste devant les parcs, sans navette supplémentaire. Disneyland Paris annonce environ **35 minutes depuis Nation**. Le point à préparer n'est donc pas seulement l'aller, mais aussi le bon titre de transport pour chaque enfant et le dernier trajet du soir.

## Quel RER prendre et où descendre ?

À Paris, le RER A passe notamment par Charles-de-Gaulle–Étoile, Auber, Châtelet–Les Halles, Gare de Lyon et Nation. Selon votre point de départ, vous pouvez rejoindre l'une de ces gares à pied ou par une correspondance en métro.

**Vérifiez la destination affichée sur le train : Marne-la-Vallée–Chessy.** Tous les RER A ne vont pas à Disneyland ; certains desservent notamment la branche de Boissy-Saint-Léger. Restez dans le train jusqu'au terminus Marne-la-Vallée–Chessy, puis suivez les indications vers les parcs. Le temps total dépend de votre gare de départ et des éventuelles correspondances : les 35 minutes annoncées par [Disneyland Paris](https://www.disneylandparis.com/fr-fr/services-visiteurs/comment-venir-a-disneyland-paris) concernent **Nation**, pas n'importe quelle adresse parisienne.

## Combien coûte le trajet en famille en 2026 ?

Le **ticket Métro-Train-RER** est valable de Paris jusqu'à Chessy, sans supplément de zone. D'après les [tarifs officiels 2026 d'Île-de-France Mobilités](https://www.iledefrance-mobilites.fr/tarifs-titre-de-transport-en-commun-2026) :

- **À partir de 10 ans et pour les adultes : 2,55 € par trajet**, soit 5,10 € aller-retour.
- **De 4 ans à moins de 10 ans : 1,30 € par trajet**, soit 2,60 € aller-retour, avec le [tarif enfant](https://www.iledefrance-mobilites.fr/titres-et-tarifs/tarifs-reduits/enfants-4-10-ans).
- **Avant 4 ans : gratuit**, sans ticket, avec un justificatif d'âge à pouvoir présenter selon les [conditions de gratuité](https://www.iledefrance-mobilites.fr/gratuite-pour-les-enfants-de-moins-de-4-ans).

Exemple : pour **deux adultes et deux enfants de 6 et 8 ans**, comptez **15,40 € aller-retour** en tickets à l'unité pour les quatre personnes, hors autres déplacements. Si vous prévoyez beaucoup de trajets dans Paris le même jour, comparez avec un forfait avant d'acheter. Notre guide [Transports à Paris avec des enfants : quel titre choisir pour payer juste ?](https://www.fam-space.fr/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/) détaille ce calcul.

## Acheter et valider les tickets sans se tromper

Les tickets peuvent être chargés sur un **passe Navigo Easy** ou sur un smartphone compatible. Chaque voyageur payant doit disposer de son propre titre : un seul passe Navigo Easy ne peut pas faire passer toute la famille. Sur iPhone, l'application Cartes permet toutefois de créer plusieurs cartes de transport distinctes dans un même téléphone, à valider séparément. Île-de-France Mobilités explique les [options pour les familles](https://www.iledefrance-mobilites.fr/aide-et-contacts/passe-navigo-easy/voyage-groupe-famille).

Un ticket Métro-Train-RER couvre les correspondances **métro, train et RER pendant deux heures après la première validation**, tant que vous ne sortez pas du réseau. Il ne couvre **ni les bus ni les tramways** : si votre trajet vers la gare commence par un bus, prévoyez le titre adapté. Les [conditions du ticket](https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/ticket-metro-train-rer) précisent également qu'il faut un nouveau trajet payant pour repartir de Disneyland vers Paris. Achetez ou préparez vos titres de retour avant la fatigue du soir.

## Avec une poussette ou un bébé : ce qui change

Le trajet en RER évite de devoir emprunter une navette entre la gare de Chessy et les entrées des parcs. En revanche, **l'accès aux quais et les correspondances parisiennes ne sont pas toujours simples avec une poussette**. Avant de choisir une gare, vérifiez les ascenseurs au départ, à l'arrivée et à chaque correspondance sur le [service indiqué par la RATP](https://www.ratp.fr/aide-contact/questions/preparer-mon-trajet/information-trafic/etat-ascenseurs). Ne supposez pas qu'un trajet avec peu de changements est automatiquement sans escalier.

Pour un enfant de moins de 4 ans en poussette, Île-de-France Mobilités indique qu'il est possible de demander l'ouverture des portes latérales aux portiques. Gardez de quoi occuper les enfants et une petite collation accessible ; une poussette pliable peut faciliter les passages chargés, mais il faut prévoir la possibilité de la porter si un équipement est hors service.

## Le retour après le spectacle nocturne

C'est le moment où une journée simple peut se compliquer. Avant de rester jusqu'au spectacle final, consultez les **horaires du dernier RER A vers Paris**, les éventuels travaux et l'état du trafic **pour votre date précise** sur la [page RER A de la RATP](https://www.ratp.fr/infos-trafic/rer/a). Un horaire habituel ne garantit pas la circulation un soir de travaux. Vérifiez aussi la dernière correspondance si votre hôtel n'est pas sur le RER A.

Si les enfants sont petits ou si vous devez traverser Paris après l'arrivée du train, choisissez votre heure de départ du parc en conservant une marge. En cas d'interruption annoncée, comparez l'itinéraire de remplacement avant de décider de rester jusqu'à la fermeture. Pour préparer un parcours plus facile avec une poussette dans la capitale, consultez aussi [Paris avec une poussette : métro, RER, bus ou tram ?](https://www.fam-space.fr/articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/).

## Billet d'entrée et nuit sur place : deux décisions distinctes

**Le ticket de RER ne comprend pas l'entrée à Disneyland Paris.** Pour préparer la visite, vous pouvez consulter les [billets Disneyland Paris proposés sur Booking.com](https://www.booking.com/attractions/fr/prjyfitkuhfz-one-day-admission-to-disneylandr-paris.fr.html) et sélectionner les dates, le nombre de parcs et les âges avant de comparer les conditions. Le transport jusqu'aux parcs n'est pas inclus dans cette offre.

Si un retour tardif en RER paraît trop fatigant, [Staycity Aparthotels near Disneyland Paris sur Booking.com](https://www.booking.com/hotel/fr/staycity-aparthotels-paris-marne-la-vallee.fr.html) propose des logements avec cuisine et une navette gratuite vers les parcs ; vérifiez les horaires de la navette, la capacité du logement et les disponibilités aux dates choisies. L'établissement se trouve à Bailly-Romainvilliers, **pas à la sortie immédiate de la gare RER**. Pour décider si une nuit vaut la dépense, notre guide [Disneyland Paris en famille en 2026 : combien de jours, quel hôtel et quel budget prévoir ?](https://www.fam-space.fr/articles/voyages/disneyland-paris-en-famille-en-2026-combien-de-jours-quel-hotel-et-quel-budget-prevoir/) traite le séjour complet.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/voyages/halloween-2026-a-disneyland-paris-en-famille-billets-hotel-et-duree-du-sejour/ | Halloween 2026 à Disneyland Paris en famille: billets, hôtel et durée du séjour | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/voyages/disneyland-paris-en-famille-en-2026-combien-de-jours-quel-hotel-et-quel-budget-prevoir/ | Disneyland Paris en famille en 2026: combien de jours, quel hôtel et quel budget prévoir | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | Noël 2026 à Disneyland Paris: faut-il un billet 2 parcs pour voir Arendelle? | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/evenements/la-legende-des-chevaliers-a-provins-en-famille-tarifs-horaires-et-conseils-2026/ | La Légende des Chevaliers à Provins en famille: tarifs, horaires et conseils 2026 | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | Noël des Siècles 2026 à Champs-sur-Marne: billets, budget et horaires en famille | evenements | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/cuisine/visiter-une-cave-d-affinage-de-brie-a-jouarre-ce-qu-il-faut-savoir-avec-des-enfants/ | Visiter une cave d'affinage de brie à Jouarre: ce qu'il faut savoir avec des enfants | cuisine | Jouarre, Seine-et-Marne, Île-de-France
- /articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/ | Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite | sorties | Paris, Paris, Île-de-France
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/evenements/marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants/ | Marie-Antoinette à Fontainebleau 2026-2027: exposition, visites et tarifs en famille | evenements | Fontainebleau, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | Noël à Provins 2026: marché médiéval, animations et visites en famille | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | Grand Noël 2026 à Vaux-le-Vicomte en famille: billets, offre enfant et animations | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/bons-plans/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/ | Château de Champs-sur-Marne en famille: gratuités, tarifs et dates à éviter | bons-plans | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/parentalite/laep-en-seine-et-marne-ou-aller-et-comment-se-passe-une-premiere-visite/ | LAEP en Seine-et-Marne: où aller et comment se passe une première visite? | parentalite | Meaux, Seine-et-Marne, Île-de-France
- /articles/maison/couches-lavables-dans-le-nord-de-la-seine-et-marne-acheter-louer-ou-choisir-l-occasion/ | Couches lavables dans le nord de la Seine-et-Marne: acheter, louer ou choisir l'occasion? | maison | Monthyon, Seine-et-Marne, Île-de-France
- /articles/vie-pratique/scol-r-ou-imagine-r-en-seine-et-marne-quel-titre-choisir-pour-la-rentree-2026/ | Scol'R ou imagine R en Seine-et-Marne: quel titre choisir pour la rentrée 2026? | vie-pratique | Melun, Seine-et-Marne, Île-de-France
- /articles/activites/parrot-world-en-famille-tarifs-2026-duree-et-conseils-pour-la-visite/ | Parrot World en famille: tarifs 2026, durée et conseils pour la visite | activites | Crécy-la-Chapelle, Seine-et-Marne, Île-de-France
- /articles/voyages/week-end-dans-les-pierres-dorees-en-famille-oingt-jarnioux-et-balades/ | Week-end dans les Pierres Dorées en famille: Oingt, Jarnioux et balades | voyages | Rhône, Auvergne-Rhône-Alpes
- /articles/voyages/super-besse-en-famille-premiers-skis-et-activites-sans-ski-en-hiver-2026-2027/ | Super-Besse en famille: premiers skis et activités sans ski en hiver 2026-2027 | voyages | Besse-et-Saint-Anastaise, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/ | Paris avec une poussette: métro, RER, bus ou tram, que choisir ? | voyages | Paris, Paris, Île-de-France
- /articles/voyages/aubrac-lozerien-en-famille-deux-jours-entre-nasbinals-lacs-et-cascade-du-deroc/ | Aubrac lozérien en famille: deux jours entre Nasbinals, lacs et cascade du Déroc | voyages | Nasbinals, Lozère, Occitanie

### Historique Radar lié

- opportunity | /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | 2026-10-20T22:29:05.422Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- opportunity | /articles/evenements/marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants/ | 2026-10-27T18:27:41.322Z
- opportunity | /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | 2026-10-06T19:20:39.093Z
- opportunity | /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | 2026-10-02T21:22:46.733Z
- opportunity | /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | 2026-10-24T03:31:56.628Z
- opportunity | /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | 2026-10-26T18:32:56.730Z
- opportunity | /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/ | 2026-10-28T12:27:07.569Z
- opportunity | /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | 2026-10-11T11:27:54.175Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
