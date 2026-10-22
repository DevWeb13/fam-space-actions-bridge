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
title: "Créations & savoir-faire 2026 à Paris avec des enfants : billets et ateliers"
subtitle: "Mercredi ou Journée Famille du dimanche : les bons tarifs et les activités à prévoir"
summary: Au salon Créations & savoir-faire 2026, le billet Duo Famille à 17 € vaut les 18 et 22 novembre. Prix selon l'âge, ateliers payants, animations gratuites et accès.
category: evenements
location:
  city: Paris
  department: Paris
  region: Île-de-France
keywords:
  - Créations et savoir-faire 2026 famille Paris
  - salon Créations savoir-faire billet Duo Famille
  - Journée Famille 22 novembre 2026 Paris
  - ateliers enfants salon loisirs créatifs Porte de Versailles
sources:
  - title: Créations & savoir-faire - Tarifs et conditions des billets 2026
    url: https://www.creations-savoir-faire.com/fr-FR/infos-pratiques/Tarifs
  - title: Créations & savoir-faire - Journée Famille du 22 novembre
    url: https://www.creations-savoir-faire.com/fr-FR/animations-et-ateliers/temps-forts/journee-famille
  - title: Créations & savoir-faire - Programme et filtres des ateliers
    url: https://www.creations-savoir-faire.com/fr-FR/animations-et-ateliers/les-ateliers
  - title: Créations & savoir-faire - Horaires, accès et services
    url: https://www.creations-savoir-faire.com/fr-FR/infos-pratiques/informations-pratiques
  - title: Paris je t'aime - Salon Créations & Savoir-faire 2026
    url: https://parisjetaime.com/evenement/salon-creations-et-savoir-faire-e1752
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir
  decision: Permettre aux familles de choisir le 18 novembre pour le billet Duo ou le 22 pour la Journée Famille, de calculer le coût réel selon l'âge des enfants et de distinguer les animations gratuites des ateliers qui demandent une inscription et un paiement supplémentaires.
  affiliationPotential: "Aucun billet affilié confirmé pour l'entrée à ce salon parmi Tiqets, GetYourGuide et Klook : billetterie de l'organisateur sur Weezevent, sans lien partenaire équivalent identifié. Pour les familles qui restent dormir à Paris, le Novotel Paris Porte Versailles est référencé sur Booking.com (https://www.booking.com/hotel/fr/novotel-paris-pte-versailles.fr.html), à proximité immédiate du parc des expositions, avec des chambres familiales. Capacité, prix, disponibilité et annulation à vérifier par dates."
  gsc:
    retrievedAt: 2026-10-22T08:53:00+02:00
    dataThrough: 2026-10-19
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Créations & savoir-faire - Tarifs 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-11-22T18:00:00+01:00
---

Du **18 au 22 novembre 2026**, le salon **Créations & savoir-faire** fête ses 30 ans à **Paris Expo Porte de Versailles, pavillon 6**. Couture, dessin, broderie, papier, bijoux et décoration : les familles peuvent regarder les démonstrations, rencontrer des créateurs ou participer à un atelier. Mais le **meilleur jour dépend de ce que vos enfants veulent faire**. Le billet Duo à 17 € existe **le mercredi 18 et le dimanche 22**, alors que la **Journée Famille** avec son programme spécial a lieu **uniquement le dimanche 22**.

## Mercredi 18 ou dimanche 22 : quel jour choisir ?

**Le mercredi 18 novembre** convient si vous voulez profiter du tarif Duo Famille sans forcément rechercher les animations particulières du dimanche. Les ateliers et démonstrations du salon restent à choisir selon leur programme et les places disponibles.

**Le dimanche 22 novembre**, la [Journée Famille](https://www.creations-savoir-faire.com/fr-FR/animations-et-ateliers/temps-forts/journee-famille) transforme notamment l'Allée Centrale en espace de découverte : **animations gratuites, ateliers éphémères et activités à partager** entre enfants et adultes. C'est le choix le plus naturel pour une première visite centrée sur les enfants. L'accès aux animations annoncées pour cette journée est inclus dans le billet, **mais cela ne rend pas gratuits tous les ateliers à réservation du salon**.

Les autres jours restent possibles : **jeudi 19** propose même une **nocturne de 17 h à 21 h**, plus adaptée à un grand enfant qui peut profiter d'une sortie en soirée. La nocturne ne bénéficie pas du tarif Duo Famille.

## Combien coûte l'entrée avec des enfants ?

Les tarifs publiés pour l'édition 2026 sont :

- **Adulte : 15 € en prévente**, ou **18,50 € à la caisse**.
- **Enfant de 6 à 12 ans : 9 €**.
- **Jeune de 13 à 24 ans : 11 €**.
- **Moins de 6 ans : entrée gratuite**.
- **Duo Famille : 17 € pour un adulte et un enfant ou jeune de moins de 18 ans**, exclusivement **mercredi 18 et dimanche 22 novembre**.
- **Nocturne du jeudi 19 : 11 €**, pour entrer de 17 h à 21 h. Un billet journée du jeudi permet aussi de rester pour la nocturne.

Le calcul change réellement le choix du billet. **Un adulte et un enfant de 8 ans** paieraient **24 €** en billets individuels prévente, contre **17 €** en Duo le mercredi ou le dimanche. **Deux adultes et deux enfants de 6 à 12 ans** peuvent prendre **deux Duos à 34 €**, au lieu de **48 €** avec deux billets adultes en prévente et deux billets enfants. En revanche, pour **un adulte et un enfant de moins de 6 ans**, le billet adulte à **15 €** et la gratuité de l'enfant sont plus avantageux qu'un Duo à 17 €.

Le Duo ne couvre pas un jeune de **18 à 24 ans**, même si son entrée individuelle reste au tarif jeune. Une personne en situation de handicap et son accompagnant peuvent bénéficier, sous les conditions indiquées par l'organisateur, d'un **tarif de 13 € chacun en caisse**, sur présentation de la carte demandée.

**Ces prix concernent l'entrée au salon, pas automatiquement les ateliers réservés séparément.** Le billet donne accès à une journée ; il ne vaut pas pour les cinq jours.

## Ateliers enfants : ce qui est inclus et ce qui se réserve

Le salon annonce des **démonstrations gratuites** sur ses espaces **ID•FIL, ID•DÉCO, ID•FOOD et ID•FAMILY**, ainsi que des animations sur les stands. Elles permettent de découvrir des techniques sans devoir inscrire chaque enfant à une activité payante.

Pour fabriquer un objet pendant un créneau précis, utilisez plutôt le [programme des ateliers 2026](https://www.creations-savoir-faire.com/fr-FR/animations-et-ateliers/les-ateliers). Il permet de distinguer les activités **« Enfants »**, **« Atelier 4 mains - Parent/Enfant »** et **« Tout public »**. Les ateliers peuvent avoir **un prix supplémentaire**, un âge minimum, une durée, un niveau et une jauge propres. Plusieurs créneaux affichent déjà complet : ne promettez pas une place avant d'avoir vérifié la fiche correspondante.

Pour préparer la sortie, choisissez **un seul atelier prioritaire**, vérifiez qu'il accepte l'âge de votre enfant et réservez-le si nécessaire ; gardez le reste du temps pour les démonstrations et les stands. Un atelier « parent-enfant » n'implique pas nécessairement que l'adulte accompagne gratuitement : consultez le prix et les conditions de la fiche avant de payer.

## Quel budget prévoir pour une demi-journée créative ?

Le prix d'entrée est prévisible ; les dépenses supplémentaires le sont moins. Pour **un adulte et un enfant de 8 ans le dimanche**, comptez **17 € d'entrée à deux** si le Duo est disponible. Avec **un atelier facturé 20 €** en plus, le budget passe à **37 €**, hors transport, repas et achats sur les stands. **Les 20 € sont un exemple de calcul, pas un tarif garanti pour un atelier donné** : certains coûtent davantage, d'autres animations sont gratuites.

Une famille qui veut surtout regarder, s'inspirer et tester des animations peut donc se limiter au billet d'entrée et à ses frais de déplacement ou de repas. Avec des enfants, fixez aussi une petite enveloppe avant de traverser les stands de fournitures, kits et créations.

## Horaires, accès et services à Porte de Versailles

Le salon se tient au **pavillon 6, 1 place de la Porte de Versailles, 75015 Paris**. Il ouvre **de 9 h 30 à 18 h 30** les mercredi 18, vendredi 20 et samedi 21 ; **de 9 h 30 à 21 h** le jeudi 19 ; et **de 9 h 30 à 18 h** le dimanche 22.

En transports, l'arrêt **Porte de Versailles** est desservi par le **métro 12**, les **tramways T2 et T3a** et les **bus 39 et 80**. Pour choisir les titres adaptés à l'âge des enfants et au reste de votre séjour, consultez notre guide [des transports à Paris en famille](/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/).

Sur place, l'organisateur annonce **quatre restaurants, des points de restauration à emporter et trois espaces de pique-nique** : apporter une collation peut limiter les dépenses. Le **vestiaire coûte 3 € par article**, **4 € par sac** et **5 € par valise**. Les halls de Paris Expo sont **de plain-pied** et équipés pour l'accès des personnes à mobilité réduite. Aucune prestation spécifique de garde d'enfants ou d'équipement bébé n'est garantie dans les informations consultées.

## Si vous venez de loin : dormir près du salon

Pour une visite intégrée à un week-end parisien, le [Novotel Paris Porte de Versailles sur Booking.com](https://www.booking.com/hotel/fr/novotel-paris-pte-versailles.fr.html) se situe près du parc des expositions. Des catégories avec **lit double et canapé-lit** figurent dans son offre ; vérifiez cependant **la capacité réellement autorisée pour le nombre et l'âge de vos enfants**, ainsi que le prix total, les disponibilités et l'annulation pour vos dates, avant de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/salon-du-chocolat-paris-2026-avec-des-enfants-quel-billet-choisir-et-quels-ateliers-reserver/ | Salon du Chocolat Paris 2026 avec des enfants: quel billet choisir et quels ateliers réserver | evenements | Paris, Paris, Île-de-France
- /articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/ | Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite | sorties | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | Vacances de la Toussaint 2026 à la Cité des sciences: les ateliers numériques gratuits avec des enfants | sorties | Paris, Paris, Île-de-France
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | Salon du Cheval de Paris 2026 en famille: animations, jumping et billets | evenements | Paris, Paris, Île-de-France
- /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/ | Transports à Paris avec des enfants: quel titre choisir pour payer juste? | voyages | Paris, Paris, Île-de-France
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/paris-plages-2026-en-famille/ | Paris Plages 2026: où se baigner et jouer avec des enfants | evenements | Paris, Paris, Île-de-France
- /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | Métamorphoses 2026 au quai Branly: séances gratuites et films par âge | evenements | Paris, Paris, Île-de-France
- /articles/maison/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager/ | À Paris, où donner ou déposer meubles, jouets et électroménager ? | maison | Paris, Paris, Île-de-France
- /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | Día de los Muertos 2026 au Jardin d’Acclimatation: programme, billets et tailles | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-au-musee-carnavalet-quelle-activite-choisir-selon-l-age/ | Vacances de la Toussaint 2026 au musée Carnavalet: activités en famille dès 4 ans | sorties | Paris, Paris, Île-de-France
- /articles/activites/stages-de-science-a-la-cite-des-sciences-pendant-la-toussaint-2026-lequel-choisir-selon-l-age/ | Stages de science à la Cité des sciences à la Toussaint 2026: durées, âges et tarifs | activites | Paris, Paris, Île-de-France
- /articles/activites/paris-sport-vacances-automne-2026-demi-journee-gratuite-ou-stage-a-la-journee/ | Paris Sport Vacances automne 2026: demi-journée gratuite ou stage à la journée? | activites | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-au-louvre-quelles-activites-choisir-avec-des-enfants/ | Vacances de la Toussaint 2026 au Louvre: le programme famille du 17 octobre au 1er novembre | sorties | Paris, Paris, Île-de-France
- /articles/evenements/fete-des-rues-aux-enfants-2026-a-paris-ou-aller-selon-l-arrondissement/ | Fête des rues aux enfants 2026 à Paris: où aller selon l'arrondissement? | evenements | Paris, Paris, Île-de-France
- /articles/evenements/mon-premier-festival-2026-paris-film-age/ | Mon Premier Festival 2026 à Paris: quel film choisir selon l'âge? | evenements | Paris, Paris, Île-de-France
- /articles/vie-pratique/consigne-a-bagages-a-paris-en-famille-gare-ou-depot-en-ville/ | Consigne à bagages à Paris en famille: gare ou dépôt en ville? | vie-pratique | Paris, Paris, Île-de-France
- /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | MonstroZoo 2026-2027 à Beauval: parcours inclus, visite guidée et tarifs | evenements | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | Halloween 2026 à Mini World Lyon: la Chasse aux 31 Méchants en famille | evenements | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | Luminescences 2026-2027 au zoo d'Amnéville: billets, tarifs et visite en famille | evenements | Amnéville, Moselle, Grand Est
- /articles/evenements/noel-2026-a-rochefort-en-terre-avec-des-enfants-village-et-illuminations/ | Noël 2026 à Rochefort-en-Terre avec des enfants: village et illuminations | evenements | Rochefort-en-Terre, Morbihan, Bretagne

### Historique Radar lié

- opportunity | /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | 2026-10-08T14:56:52.034Z
- opportunity | /articles/evenements/fete-des-rues-aux-enfants-2026-a-paris-ou-aller-selon-l-arrondissement/ | 2026-10-03T14:16:09.016Z
- opportunity | /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | 2026-10-22T12:58:21.691Z
- opportunity | /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | 2026-10-22T09:37:18.560Z
- opportunity | /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | 2026-10-18T04:19:39.869Z
- opportunity | /articles/evenements/mon-premier-festival-2026-paris-film-age/ | 2026-10-03T06:21:55.257Z
- opportunity | /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | 2026-10-06T19:20:39.093Z
- opportunity | /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | 2026-10-22T15:49:20.816Z
- opportunity | /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | 2026-10-09T14:37:47.734Z
- opportunity | /articles/activites/paris-sport-vacances-automne-2026-demi-journee-gratuite-ou-stage-a-la-journee/ | 2026-10-03T20:20:25.508Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
