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
title: "Halloween 2026 au Zoo de La Flèche : l'entrée offerte est pour une prochaine visite"
subtitle: Jusqu'au 1er novembre, billets à prévoir, déguisements et activités pour les enfants
summary: Au Zoo de La Flèche, Halloween 2026 se déroule du 17 octobre au 1er novembre. Découvrez ce que gagne réellement un enfant déguisé, le prix de la visite et les jeux proposés.
category: evenements
location:
  city: La Flèche
  department: Sarthe
  region: Pays de la Loire
keywords:
  - Halloween Zoo de La Flèche 2026
  - Zoo de La Flèche enfant déguisé entrée offerte
  - Zoo de La Flèche jeu de piste Baludik Halloween
sources:
  - title: Zoo de La Flèche — Halloween du 17 octobre au 1er novembre 2026
    url: https://www.zoo-la-fleche.com/news-detail/halloween-sinvite-au-zoo-de-la-fleche-pendant-les-vacances-de-la-toussaint
  - title: Zoo de La Flèche — Billets et tarifs 2026
    url: https://www.zoo-la-fleche.com/preparez-votre-visite/billets-et-horaires
  - title: Zoo de La Flèche — Règlement du jeu-concours Halloween 2026
    url: https://www.zoo-la-fleche.com/le-parc/reglement-jeu-concours
  - title: Zoo de La Flèche — Règlement détaillé du jeu-concours Halloween 2026 (PDF)
    url: https://www.zoo-la-fleche.com/fileadmin/user_upload/zoo_de_la_fleche/Docs_pro/R%C3%A8glements/Reglement-Jeu-concours-Halloween-2026.pdf
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: halloween-2026-au-zoo-de-la-fleche-entree-offerte-aux-enfants-deguises
  decision: Savoir si venir avant le 1er novembre vaut le déplacement, ce que reçoit réellement un enfant déguisé et quelles activités Halloween sont incluses sans confondre billet d'entrée et bon de retour.
  affiliationPotential: "Pas d'offre de billet Zoo de La Flèche vérifiée chez GetYourGuide, Tiqets ou Klook. Pour un séjour, hébergement familial 2 chambres, 4 à 6 voyageurs en centre-ville à 5 min du zoo, offre identifiée sur Booking.com : https://www.booking.com/hotel/fr/2-chambres-4-a-6-voyageurs-en-centre-ville-a-5-mins-du-zoo.fr.html ; disponibilité et prix à contrôler."
  gsc:
    retrievedAt: 2026-10-25T02:31:31+02:00
    dataThrough: 2026-10-22
    signal: strong_page
    sourceUrl: /articles/sorties/zoo-de-la-fleche-en-famille-tarifs-2026-duree-et-conseils-de-visite/
    basis: "La page « Zoo de La Flèche en famille: tarifs 2026, durée et conseils de visite » conserve 55 impressions sur la semaine récente, avec une position moyenne de 8.673 et 103.8 % de son pic."
eventEndsAt: 2026-11-01
---

Au Zoo de La Flèche, les enfants déguisés ont bien droit à une entrée offerte pendant Halloween 2026, **mais pas pour la visite du jour**. L'avantage annoncé concerne **une prochaine visite**, à effectuer au plus tard le 31 décembre 2027. Voilà la distinction à connaître avant de prévoir une sortie pendant les vacances de la Toussaint.

## Enfant déguisé : qui reçoit l'entrée offerte ?

Du **17 octobre au 1er novembre 2026**, le zoo annonce qu'un enfant **de 3 à 11 ans** venu déguisé repart avec une entrée offerte pour revenir au parc. Le déguisement ne dispense donc pas d'acheter le billet nécessaire pour entrer lors de la journée Halloween. L'offre peut être intéressante si vous habitez à proximité ou comptez revenir en Sarthe d'ici fin 2027 ; elle l'est moins si vous ne prévoyez qu'un seul passage.

Le [programme Halloween publié par le zoo](https://www.zoo-la-fleche.com/news-detail/halloween-sinvite-au-zoo-de-la-fleche-pendant-les-vacances-de-la-toussaint) ne détaille pas les modalités de remise du bon ni toutes ses conditions d'utilisation. **Demandez à l'accueil comment récupérer et utiliser cette entrée future avant de quitter le parc** : mieux vaut ne pas présumer qu'elle sera automatiquement envoyée par courriel ou qu'elle fonctionnera pour n'importe quelle date.

## Quel budget prévoir pour la visite Halloween ?

Les billets datés sont affichés **à partir de 19,50 € pour les 3–11 ans** et **26,50 € à partir de 12 ans**. Ces prix sont des minimums : le montant dépend de la date choisie. Pour deux adultes et deux enfants de 3 à 11 ans, le budget d'entrée commence ainsi à **92 €**, hors dépenses supplémentaires. Les moins de 3 ans entrent gratuitement selon la grille habituelle du zoo.

Le parc annonce une ouverture **de 9 h 30 à 17 h 30** pendant cette période. L'accès des visiteurs sans pass annuel s'arrête normalement deux heures avant la fermeture : prévoyez donc d'arriver avant **15 h 30**, idéalement le matin pour profiter des activités.

Pour préparer les aspects permanents de la sortie — poussette, pique-nique, parking, accessibilité et autres formules de billets — consultez notre [guide du Zoo de La Flèche en famille](/articles/sorties/zoo-de-la-fleche-en-famille-tarifs-2026-duree-et-conseils-de-visite/).

## Quels jeux et animations sont prévus jusqu'au 1er novembre ?

Le **jeu de piste Baludik** est annoncé **gratuit pendant Halloween**. Il se pratique sur smartphone, avec des énigmes et des défis à résoudre dans le parc. La billetterie générale affiche pourtant un jeu de piste à **5 € pour quatre personnes** : ce tarif correspond à l'offre habituelle présentée sur le site, tandis que l'actualité Halloween annonce une gratuité pendant l'événement. Si vous souhaitez faire plusieurs parcours, demandez sur place lesquels sont inclus plutôt que de supposer que toutes les offres se cumulent.

Les familles reçoivent également à l'entrée un **livret-jeu Halloween gratuit**. Les décors de citrouilles accompagnent la visite, et le zoo met en avant ses **quatre jeunes guépards**, désormais visibles du public, ainsi que les rendez-vous pédagogiques animaliers. La visibilité des animaux et le programme précis peuvent varier : choisissez vos priorités en arrivant.

## Le concours Halloween : les enfants jouent, un adulte participe

Le livret sert aussi à participer à un tirage au sort. Il faut répondre correctement à la **question n° 6**, puis scanner le **QR code** du livret pour transmettre la réponse et une adresse e-mail. Attention : d'après le [règlement officiel du concours](https://www.zoo-la-fleche.com/le-parc/reglement-jeu-concours), **seules les personnes majeures présentes au parc peuvent participer**, avec **une seule participation par personne**.

Dix lots sont annoncés, notamment une expérience de soigneur d'un jour, un pass annuel duo et des entrées pour revenir. Ce concours est **distinct de l'entrée future offerte aux enfants déguisés** : cette dernière n'est pas un prix à gagner au tirage au sort. Le règlement PDF comporte des dates contradictoires pour le tirage et la notification des gagnants ; ne vous fiez pas à une date précise sans confirmation de l'organisateur.

## Et si la sortie devient un week-end ?

Si vous venez de loin, une nuit sur place peut rendre la visite plus tranquille. À La Flèche, l'hébergement [« 2 chambres, 4 à 6 voyageurs en centre-ville, à 5 minutes du zoo » sur Booking.com](https://www.booking.com/hotel/fr/2-chambres-4-a-6-voyageurs-en-centre-ville-a-5-mins-du-zoo.fr.html) propose notamment une option de studio familial pouvant accueillir jusqu'à six personnes. Vérifiez la configuration réelle des couchages, les disponibilités et le prix pour vos dates avant de réserver.

**À retenir pour décider :** venez avant le **1er novembre 2026** si les décors, le jeu de piste et les activités Halloween vous intéressent. Si votre seul objectif est une entrée gratuite immédiate pour un enfant déguisé, l'offre ne correspond pas à ce que vous cherchez.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/zoo-de-la-fleche-en-famille-tarifs-2026-duree-et-conseils-de-visite/ | Zoo de La Flèche en famille: tarifs 2026, durée et conseils de visite | sorties | La Flèche, Sarthe, Pays de la Loire
- /articles/sorties/halloween-2026-a-france-miniature-en-famille/ | Halloween 2026 à France Miniature avec des enfants: billets et visite | sorties | Élancourt, Yvelines, Île-de-France
- /articles/bons-plans/pass-correzien-comment-profiter-d-une-entree-offerte-a-3/ | Pass Corrézien: comment profiter d'une entrée offerte à 3 | bons-plans | Tulle, Corrèze, Nouvelle-Aquitaine
- /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | Noël au château de Cheverny 2026: billets, mapping et visite en famille | evenements | Cheverny, Loir-et-Cher, Centre-Val de Loire
- /articles/parentalite/zoo-refuge-de-guyane-a-macouria-preparer-une-visite-en-famille/ | Zoo-refuge de Guyane à Macouria: préparer une visite en famille | parentalite | Macouria, Guyane, Guyane
- /articles/sorties/petit-archeologue-puilaurens-famille-2026/ | Le petit archéologue à Puilaurens: un jeu de piste en famille | sorties | Puilaurens, Aude, Occitanie
- /articles/bons-plans/pass-4-musees-a-saint-etienne-est-il-interessant-pour-une-famille/ | Pass 4 musées à Saint-Étienne: est-il intéressant pour une famille? | bons-plans | Saint-Étienne, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | Halloween 2026 au château de Couches: atelier citrouille et jeu Mystères & Sortilèges | evenements | Couches, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/cirque-de-noel-2026-au-mans-horaires-tarifs-et-seance-a-choisir-avec-des-enfants/ | Cirque de Noël 2026 au Mans: horaires, tarifs et séance à choisir avec des enfants | evenements | Le Mans, Sarthe, Pays de la Loire
- /articles/voyages/le-mans-sans-voiture-avec-des-enfants-ou-dormir-et-comment-organiser-un-week-end/ | Le Mans sans voiture avec des enfants: où dormir et comment organiser un week-end | voyages | Le Mans, Sarthe, Pays de la Loire
- /articles/evenements/le-mans-ete-bord-huisne-2026-famille/ | Le Mans l’été au bord de l’Huisne 2026: une sortie gratuite en famille | evenements | Le Mans, Sarthe, Pays de la Loire
- /articles/evenements/noel-au-pays-du-jouet-2026-a-moirans-en-montagne-preparer-sa-sortie-en-famille/ | Noël au Pays du Jouet 2026 à Moirans-en-Montagne: préparer sa sortie en famille | evenements | Moirans-en-Montagne, Jura, Bourgogne-Franche-Comté
- /articles/evenements/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/ | Fête foraine de Dijon 2026: dates, horaires et budget avec les enfants | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges/ | Noël à Aix-en-Provence 2026 en famille: marchés, santons et manèges | evenements | Aix-en-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/village-du-pere-noel-a-montbazon-2026-dates-activites-et-budget-en-famille/ | Village du Père Noël à Montbazon 2026: dates, activités et budget en famille | evenements | Montbazon, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-a-orleans-2026-en-famille-marches-horaires-et-maneges-apres-noel/ | Marché de Noël d’Orléans 2026 en famille: horaires, lieux et manèges | evenements | Orléans, Loiret, Centre-Val de Loire
- /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | Noël à Nice 2026 en famille: village, spectacles et crèche | evenements | Nice, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | Noël à Toulouse 2026 en famille: marchés, Père Noël et patinoire | evenements | Toulouse, Haute-Garonne, Occitanie
- /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | Thoiry Lumières Sauvages 2026-2027: dates, billets et visite en famille | evenements | Thoiry, Yvelines, Île-de-France
- /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | Noël à Nantes 2026: marché de Noël et Voyage en hiver en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | Noël à Chenonceau 2026: décors, nocturnes et tarifs en famille | evenements | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | Noël Gaulois 2026 au Parc Astérix: billets, glissades et spectacles en famille | evenements | Plailly, Oise, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/evenements/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/ | 2026-10-25T17:34:53.718Z
- opportunity | /articles/sorties/halloween-2026-a-france-miniature-en-famille/ | 2026-10-08T18:25:52.752Z
- opportunity | /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | 2026-10-12T14:00:32.202Z
- opportunity | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-10-24T12:31:27.784Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | 2026-10-23T19:58:30.214Z
- opportunity | /articles/evenements/noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges/ | 2026-10-25T15:16:03.590Z
- opportunity | /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | 2026-10-24T15:27:41.430Z
- opportunity | /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | 2026-10-25T04:31:33.540Z
- opportunity | /articles/evenements/noel-a-orleans-2026-en-famille-marches-horaires-et-maneges-apres-noel/ | 2026-10-25T07:29:47.050Z
- opportunity | /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | 2026-10-24T23:34:36.270Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
