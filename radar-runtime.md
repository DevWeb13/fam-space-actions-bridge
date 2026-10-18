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
title: "Toussaint 2026 à Nausicaá: ateliers en journée et nocturne d’Halloween"
subtitle: "Du 17 octobre au 1er novembre à Boulogne-sur-Mer: horaires des activités, offre famille et billets du 31 octobre"
summary: "À Nausicaá, les ateliers de Toussaint sont inclus dans la visite classique, mais Halloween se réserve séparément: dates, prix et horaires pour les familles."
category: evenements
location:
  city: Boulogne-sur-Mer
  department: Pas-de-Calais
  region: Hauts-de-France
keywords:
  - Nausicaá Toussaint 2026
  - animations Nausicaá enfants octobre 2026
  - soirée Halloween Nausicaá 31 octobre
  - offre famille Nausicaá Toussaint
sources:
  - title: Nausicaá - Programme des vacances de la Toussaint 2026
    url: https://www.nausicaa.fr/fr/ma-visite/vos-vacances-de-la-toussaint-nausicaa
  - title: Nausicaá - Soirée nocturne théâtralisée du 31 octobre 2026
    url: https://www.nausicaa.fr/fr/ma-visite/conferences-et-evenements/soiree-nocturne-theatralisee
  - title: Nausicaá - Offre famille et conditions
    url: https://www.nausicaa.fr/fr/les-offres-speciales
  - title: Nausicaá - Tarifs des billets classiques
    url: https://www.nausicaa.fr/fr/ma-visite/tarifs
  - title: Nausicaá - Événements et billetterie de la nocturne
    url: https://www.nausicaa.fr/fr/billetterie/evenements
  - title: Nausicaá - Communiqué sur la Toussaint 2026
    url: https://www.nausicaa.fr/fr/espace-presse/vacances-de-la-toussaint-nausicaa-invite-les-familles-entre-decouvertes-creativite-et-frissons
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween
  decision: Choisir la date et la formule adaptées à sa famille entre une visite de jour avec animations incluses et la nocturne distincte du 31 octobre, puis réserver les billets adéquats au meilleur tarif réellement accessible.
  affiliationPotential: "Billet classique de jour Nausicaá vérifié chez Tiqets: https://www.tiqets.com/fr/activites-attractions-boulogne-sur-mer-c67098/billets-pour-aquarium-nausicaa-billet-coupe-file-p979494/ ; vérifier le prix face à la réduction familiale web Nausicaá de 15 % sur au moins quatre billets dont un adulte. Ne jamais présenter ce billet Tiqets comme une entrée à la nocturne Halloween: aucune offre partenaire équivalente vérifiée pour la soirée spéciale. Pour un séjour à Boulogne-sur-Mer, Opal'Inn à environ quatre minutes à pied de Nausicaá, chambres familiales sur Booking.com: https://www.booking.com/hotel/fr/de-la-plage-boulogne-s-mer.fr.html ; vérifier disponibilité et capacité avant toute recommandation."
  gsc:
    retrievedAt: 2026-10-18T05:46:43.422Z
    dataThrough: 2026-10-15
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Nausicaá - Programme de la Toussaint 2026 et soirée du 31 octobre »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-11-01
---

Pendant les vacances de la Toussaint, du **17 octobre au 1er novembre 2026**, Nausicaá propose à Boulogne-sur-Mer des ateliers créatifs, des contes et des jeux autour du monde marin. Ces rendez-vous sont **inclus dans la visite habituelle**. Le **samedi 31 octobre**, en revanche, la visite théâtralisée d'Halloween est une **soirée distincte, de 20 h à 23 h, avec son propre billet**. C'est la différence à connaître avant de réserver.

## Quelle journée choisir pour profiter des animations?

Les activités de la programmation de Toussaint ne sont pas toutes proposées aux mêmes dates.

- **Tous les jours du 17 octobre au 1er novembre, de 14 h à 17 h**: atelier créatif à la **Blue Academy** pour fabriquer un chapeau inspiré de la baudroie, le poisson des profondeurs. Le programme annonce un **accès libre** à l'atelier pendant ces horaires, dans le cadre de la visite.
- **Mercredi 21 et mercredi 28 octobre à 14 h 30**: *Contes de Léon et Augustine* à la **Médiathèque de l'Océan**, avec lectures, activités autour des histoires, dédicace et goûter. Le programme indique le contact **documentation@nausicaa.fr**; renseignez-vous sur les modalités de participation avant de compter sur une place.
- **Mercredi 28 et vendredi 30 octobre, de 11 h à 16 h 30**: maquillage sur le thème de l'Océan proposé par les élèves du lycée Saint-Pierre de Calais. Ces deux dates sont les plus riches pour une famille qui souhaite combiner plusieurs animations.
- **Samedis et dimanches des vacances à 15 h 30**: jeux de société en famille à la Blue Academy.
- **À 16 h, au forum des Rivages et des Hommes**: quiz sur les animaux marins étonnants, dont le requin-lutin. Vérifiez le programme affiché sur place pour le jour de votre visite.

Nausicaá ne publie pas d'âge minimal unique pour l'ensemble de ces activités. Avec un petit enfant, choisissez en fonction de son intérêt pour l'atelier et de sa capacité à suivre une lecture; ne prenez pas les horaires des contes pour un engagement de disponibilité sans confirmation.

## Le 31 octobre: une soirée spéciale, pas une animation gratuite

De **20 h à 23 h**, Nausicaá organise une **visite nocturne théâtralisée**. Des comédiens incarnent notamment un mérou géant, une anguille-loup ou un concombre de mer, au fil d'un parcours libre. Une carte est remise à l'entrée et les déguisements sont encouragés.

L'établissement présente cette soirée comme familiale, sans publier de restriction d'âge particulière. Cela ne garantit pas qu'un jeune enfant appréciera le noir, les personnages costumés ou l'heure tardive. Pour une première sortie avec un enfant sensible à l'ambiance d'Halloween, les ateliers de jour restent une option moins engageante.

Le **billet spécifique du 31 octobre** coûte:

- **23,80 €** à partir de 13 ans;
- **16,90 €** de 3 à 12 ans inclus;
- **0 €** avant 3 ans.

Pour **deux adultes et deux enfants de 3 à 12 ans**, le coût annoncé est donc de **81,40 €**, sans restauration ni éventuelle réduction locale. Les habitants de la Communauté d'Agglomération du Boulonnais (CAB) peuvent se renseigner sur un tarif préférentiel **aux caisses**: ne le confondez pas avec l'offre habituelle des Dimanches Boulonnais.

Un repas facultatif est proposé au **restaurant Le Calypso de 19 h à 20 h**, avant la visite, pour **15,90 € par personne** (pizza thématique, dessert et boisson). La billetterie présente aussi une formule associant la nocturne et le repas; choisissez cette formule uniquement si vous souhaitez réellement dîner sur place.

**Conditions d'annulation à vérifier avant paiement**: la fiche de la soirée prévoit un remboursement de 50 % du 11 au 19 octobre, puis aucun remboursement à compter du **20 octobre 2026**, sauf motif justifié et documenté. Le programme mentionne notamment maladie, hospitalisation et événement grave. Réservez les places de la soirée et, si besoin, le repas en tenant compte de cette règle.

## Quel billet choisir pour la visite classique?

Pour la journée, Nausicaá annonce les tarifs individuels suivants selon la saison: **30 € ou 31,50 € pour un adulte** et **23 € ou 24,50 € pour un enfant de 3 à 12 ans**. L'entrée est gratuite avant 3 ans sur justificatif éventuel. Le tarif réellement applicable dépend de la date sélectionnée.

Du **17 octobre au 1er novembre 2026**, une **offre famille web de 15 %** est annoncée pour l'achat d'**au moins quatre billets dont au moins un billet adulte**. Elle est **non cumulable, non échangeable et non remboursable**. Comparez le total réel dans la billetterie avant de payer, surtout si vous voyagez à trois ou avec un enfant de moins de 3 ans: la condition de quatre billets achetés doit bien être remplie.

Pour une visite classique, vous pouvez également consulter le [billet Nausicaá proposé par Tiqets](https://www.tiqets.com/fr/activites-attractions-boulogne-sur-mer-c67098/billets-pour-aquarium-nausicaa-billet-coupe-file-p979494/). Vérifiez son prix final, ses disponibilités et les conditions de remboursement face à l'offre famille. **Ce billet n'est pas un billet pour la nocturne du 31 octobre**: aucune formule partenaire équivalente n'a été identifiée pour cet événement spécial.

## Et pour les habitants du Boulonnais?

Les **Dimanches Boulonnais**, à **8 € par adulte et 6 € par enfant** pour les résidents éligibles, obéissent à un calendrier et à des justificatifs différents. Cette offre n'est **pas proposée pendant les vacances scolaires**: elle ne doit pas être utilisée pour calculer le prix de votre visite de Toussaint. Retrouvez les prochaines dates et les conditions exactes dans notre guide [des Dimanches Boulonnais à Nausicaá](/articles/bons-plans/nausicaa-a-8-pour-les-adultes-et-6-pour-les-enfants-qui-peut-profiter-des-dimanches-boulonnais/).

Si vous cherchez plutôt une comparaison sur le rythme de visite, l'accès en poussette ou la durée d'une sortie au centre marin, notre article [Beauval ou Nausicaá en famille](/articles/sorties/beauval-ou-nausicaa-en-famille-quelle-grande-sortie-choisir-en-2026/) répond à ces questions générales.

## Prévoir une nuit à Boulogne-sur-Mer

Pour les familles venant de loin, notamment si la soirée se termine à **23 h**, l'[hôtel Opal'Inn sur Booking.com](https://www.booking.com/hotel/fr/de-la-plage-boulogne-s-mer.fr.html) est situé près du front de mer, à environ **quatre minutes à pied de Nausicaá**. L'établissement annonce des chambres familiales pouvant accueillir jusqu'à **quatre personnes**. Vérifiez la capacité exacte, les couchages disponibles et les conditions d'annulation aux dates souhaitées avant de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | Halloween 2026 à la Tour de l'Horloge de Guînes: visites, contes et nocturne | evenements | Guînes, Pas-de-Calais, Hauts-de-France
- /articles/bons-plans/nausicaa-a-8-pour-les-adultes-et-6-pour-les-enfants-qui-peut-profiter-des-dimanches-boulonnais/ | Nausicaá à 8 € pour les adultes et 6 € pour les enfants: qui peut profiter des Dimanches Boulonnais? | bons-plans | Boulogne-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/activites/cite-du-chocolat-valrhona-a-la-toussaint-2026-quel-atelier-choisir-selon-l-age/ | Cité du Chocolat Valrhona à la Toussaint 2026: animations et ateliers avec des enfants | activites | Tain-l'Hermitage, Drôme, Auvergne-Rhône-Alpes
- /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | Fête de l'Automne 2026 à Terra Botanica: animations et tarifs | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/sorties/toussaint-2026-au-louvre-lens-quelle-activite-choisir-selon-l-age/ | Toussaint 2026 au Louvre-Lens: quelle activité choisir selon l'âge? | sorties | Lens, Pas-de-Calais, Hauts-de-France
- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | Au Creux de l'Oreille 2026 à Noirlac: spectacles et ateliers en famille du 17 au 22 octobre | evenements | Bruère-Allichamps, Cher, Centre-Val de Loire
- /articles/voyages/maison-du-marais-pres-de-saint-omer-bateau-et-expositions-en-famille/ | Maison du Marais près de Saint-Omer: bateau et expositions en famille | voyages | Saint-Martin-lez-Tatinghem, Pas-de-Calais, Hauts-de-France
- /articles/sorties/parc-bagatelle-en-famille-quelles-attractions-selon-la-taille-des-enfants/ | Parc Bagatelle en famille: quelles attractions selon la taille des enfants? | sorties | Merlimont, Pas-de-Calais, Hauts-de-France
- /articles/parentalite/creche-a-l-abordage-a-etaples-accueil-ponctuel-ou-regulier-que-choisir/ | Crèche À l'abordage à Étaples: accueil ponctuel ou régulier, que choisir ? | parentalite | Étaples-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/cuisine/ratte-du-touquet-eau-vapeur-ou-four-quelle-cuisson-choisir/ | Ratte du Touquet: eau, vapeur ou four, quelle cuisson choisir? | cuisine | Le Touquet-Paris-Plage, Pas-de-Calais, Hauts-de-France
- /articles/maison/lens-lievin-jusqu-a-240-pour-recuperer-l-eau-de-pluie/ | Lens-Liévin: jusqu'à 240 € pour récupérer l'eau de pluie | maison | Lens, Pas-de-Calais, Hauts-de-France
- /articles/vie-pratique/cantine-au-college-dans-le-pas-de-calais-les-tarifs-2026-et-les-reductions-pour-les-boursiers/ | Cantine au collège dans le Pas-de-Calais: les tarifs 2026 et les réductions pour les boursiers | vie-pratique | Hénin-Beaumont, Pas-de-Calais, Hauts-de-France
- /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | Festival du Film pour Enfants 2026 en Isère: séances, ateliers et tarifs | evenements | Vizille, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | Festi'Mômes 2026 à Nantes: séances, spectacles et tarifs en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | Automnales d'Harcourt 2026: animations, visites et tarifs en famille | evenements | Harcourt, Eure, Normandie
- /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | Toussaint 2026 au musée des Confluences: cinq rendez-vous pour les enfants | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/toussaint-2026-au-seaquarium-du-grau-du-roi-quel-jeu-choisir/ | Toussaint 2026 au Seaquarium: dates des jeux, âges et billets en famille | evenements | Le Grau-du-Roi, Gard, Occitanie
- /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/vacances-royales-2026-a-versailles-animations-napoleon-dates-et-billets-en-famille/ | Vacances royales 2026 à Versailles: animations Napoléon, dates et billets | evenements | Versailles, Yvelines, Île-de-France

### Historique Radar lié

- opportunity | /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | 2026-10-14T13:49:08.708Z
- opportunity | /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | 2026-10-16T06:56:21.314Z
- opportunity | /articles/activites/cite-du-chocolat-valrhona-a-la-toussaint-2026-quel-atelier-choisir-selon-l-age/ | 2026-10-05T14:27:51.219Z
- opportunity | /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | 2026-10-17T11:48:00.184Z
- opportunity | /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | 2026-10-17T15:41:33.883Z
- opportunity | /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | 2026-10-13T12:37:05.098Z
- opportunity | /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | 2026-10-12T10:40:26.563Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- opportunity | /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | 2026-10-15T05:30:56.094Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
