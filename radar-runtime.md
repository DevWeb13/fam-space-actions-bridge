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
title: "Navigo Liberté+ en famille : quel tarif pour un enfant en 2026 ?"
subtitle: "Passe Navigo, téléphone ou tickets Navigo Easy : le bon choix pour payer moins lors de trajets occasionnels en Île-de-France."
summary: Navigo Liberté+ coûte 2,04 € par trajet en métro et 1,02 € pour un enfant éligible sur passe. Découvrez comment souscrire pour un mineur, comparer avec Navigo Easy et repérer les cas où imagine R Junior revient moins cher.
category: bons-plans
location:
  city: Paris
  department: Paris
  region: Île-de-France
keywords:
  - Navigo Liberté+ enfant 2026
  - Navigo Liberté+ tarif réduit sur passe
  - Navigo Liberté+ ou Navigo Easy famille
  - Navigo Liberté+ téléphone enfant
sources:
  - title: "Île-de-France Mobilités — Navigo Liberté+ : tarifs et plafonnement 2026"
    url: https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/liberte-plus
  - title: Île-de-France Mobilités — Souscrire un contrat Liberté+
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/navigo-liberte-plus/comment-souscrire-un-contrat-navigo-liberte-plus
  - title: Île-de-France Mobilités — Souscription en ligne pour un mineur
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/navigo-liberte-plus/souscrire-sur-internet-pour-un-mineur
  - title: Île-de-France Mobilités — Conditions du tarif réduit
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/navigo-liberte-plus/quelles-sont-les-conditions-pour-beneficier-dun-tarif-reduit
  - title: Île-de-France Mobilités — Pas de tarif réduit Liberté+ sur téléphone
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/navigo-liberte-plus-sur-telephone/tarif-reduit-sur-telephone
  - title: Île-de-France Mobilités — Passe Navigo Easy
    url: https://www.iledefrance-mobilites.fr/titres-et-tarifs/supports/passe-navigo-easy
  - title: Île-de-France Mobilités — Tarifs officiels 2026
    url: https://www.iledefrance-mobilites.fr/tarifs-titre-de-transport-en-commun-2026
  - title: Île-de-France Mobilités — Imagine R Junior 2026-2027
    url: https://www.iledefrance-mobilites.fr/actualites/forfait-navigo-imagine-r-souscription-en-ligne
  - title: Île-de-France Mobilités — Conditions d'accès à Liberté+
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/navigo-liberte-plus-sur-telephone/quelles-conditions-navigo-liberte
  - title: Île-de-France Mobilités — Correspondances Liberté+
    url: https://www.iledefrance-mobilites.fr/correspondances-navigo-liberte-plus
  - title: Île-de-France Mobilités — Gratuité des moins de 4 ans
    url: https://www.iledefrance-mobilites.fr/gratuite-pour-les-enfants-de-moins-de-4-ans
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone
  decision: Pour des déplacements familiaux irréguliers en Île-de-France, décider qui doit souscrire Navigo Liberté+, avec quel support pour conserver le tarif enfant, et dans quels cas garder des tickets Navigo Easy ou choisir imagine R Junior.
  affiliationPotential: Aucune offre partenaire naturelle pour cette tarification publique du quotidien; ne pas ajouter d'hôtel ni d'offre touristique hors sujet.
  gsc:
    retrievedAt: 2026-10-25T02:31:31+02:00
    dataThrough: 2026-10-22
    signal: strong_page
    sourceUrl: /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/
    basis: "La page « Transports à Paris avec des enfants: quel titre choisir pour payer juste? » conserve 2281 impressions sur la semaine récente, avec une position moyenne de 8.722 et 197 % de son pic."
---

Pour une famille qui prend le métro ou le bus de temps en temps en Île-de-France, **Navigo Liberté+ permet de payer après les trajets, sans acheter de tickets à l'avance**. En 2026, il est moins cher que les tickets unitaires. Mais le piège concerne les enfants : **le tarif réduit Liberté+ fonctionne sur un passe Navigo personnel, pas sur téléphone**. Et pour un enfant francilien qui se déplace régulièrement, imagine R Junior peut coûter encore moins cher.

## Combien coûte Navigo Liberté+ en 2026 ?

Le contrat est gratuit à la souscription et les trajets sont facturés le mois suivant, sans abonnement mensuel fixe. Les [tarifs officiels Liberté+](https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/liberte-plus), applicables depuis le 1er janvier 2026, sont les suivants :

- **Métro, train et RER** : 2,04 € au plein tarif ; **1,02 € au tarif réduit**.
- **Bus, tramway et câble C1** : 1,64 € au plein tarif ; **0,82 € au tarif réduit**.

À comparer avec les tickets achetés séparément sur Navigo Easy ou téléphone : **2,55 €** (1,30 € réduit) pour un Ticket Métro-Train-RER et **2,05 €** (1,05 € réduit) pour un Ticket Bus-Tram. Liberté+ évite donc de recharger des tickets et réduit le prix de chaque trajet ordinaire.

Les correspondances sont comprises lorsqu'elles respectent les règles du réseau : notamment **1 h 30** après un départ en bus ou tramway et **2 h** après un départ en métro, train ou RER. Une correspondance métro-bus peut ainsi compter pour un seul trajet Liberté+ ; sortir d'une zone contrôlée puis y entrer à nouveau peut en revanche déclencher une nouvelle facturation. Le total quotidien est plafonné au prix du Navigo Jour, soit **12,30 € en 2026**, hors dessertes aéroportuaires spécifiques. Ce plafond ne signifie pas qu'il existe un Navigo Jour enfant à moitié prix.

## Quel support choisir pour un enfant de 4 à moins de 10 ans ?

Pour bénéficier de **1,02 € en métro/RER** ou de **0,82 € en bus/tram**, l'enfant doit avoir son **propre passe Navigo nominatif**, avec un contrat Liberté+ et un justificatif de réduction validé. Le tarif réduit s'applique dès validation du justificatif lors d'une première souscription ; pour un enfant, il prend fin à la fin du mois de son dixième anniversaire. D'autres profils, comme les titulaires de la carte Familles nombreuses, peuvent également être éligibles.

**Ne choisissez pas Liberté+ sur smartphone pour obtenir ce demi-tarif : aucune réduction n'y est applicable**, même si l'enfant y aurait droit sur passe. Et attention aux noms : **Navigo Easy n'est pas le passe Navigo nominatif** qui accueille un contrat Liberté+. Easy sert à charger des tickets à l'unité, y compris des tickets enfant à tarif réduit ; son support coûte 2 € et il peut être prêté, mais chaque voyageur doit avoir son propre support pendant le trajet.

Les **moins de 4 ans** voyagent gratuitement sur les réseaux franciliens, sauf exception comme Filéo, sans titre de transport. Gardez un justificatif d'âge en cas de contrôle.

## Comment souscrire Liberté+ pour son enfant ?

Le parent ou représentant légal peut [souscrire pour un mineur](https://www.iledefrance-mobilites.fr/aide-et-contacts/navigo-liberte-plus/souscrire-sur-internet-pour-un-mineur) en ligne depuis son espace Île-de-France Mobilités ou se rendre en agence. Pour la démarche en ligne, préparez **un RIB**, les informations de l'enfant, une **photo** s'il n'a pas déjà de passe et un **justificatif ouvrant droit au tarif réduit**. Le parcours demande de sélectionner « Je souscris pour un mineur ou un majeur sous tutelle » ; il prévoit une adresse e-mail propre au titulaire mineur et des validations électroniques du titulaire et du payeur. En agence, venez avec l'enfant et le RIB : la photo peut être prise sur place et le passe remis directement.

Si vous commandez un nouveau passe à domicile, prévoyez **jusqu'à 21 jours hors week-ends et jours fériés** après validation d'un dossier complet. Avec un passe Navigo valide déjà en main, le contrat peut être chargé **à partir de 48 heures** après la validation de la souscription. Vérifiez que le tarif réduit est bien actif **avant le premier trajet**.

Liberté+ s'adresse aux personnes **résidant ou travaillant en Île-de-France** : ce n'est donc pas automatiquement le bon produit pour une famille venue simplement passer quelques jours à Paris. Le contrat sur téléphone n'est pas accessible aux résidents hors Île-de-France ; un travailleur francilien non résident peut se renseigner sur la souscription sur passe avec justificatif d'employeur.

## Deux exemples de budget pour deux adultes et un enfant de 7 ans

Supposons que les trois voyageurs soient éligibles à Liberté+, que le tarif réduit de l'enfant soit activé et qu'aucun plafond journalier n'intervienne.

**Un aller-retour en métro par personne** (deux trajets chacun) :

- **Liberté+** : 4 trajets adultes × 2,04 € + 2 trajets enfant × 1,02 € = **10,20 €**.
- **Tickets à l'unité** : 4 × 2,55 € + 2 × 1,30 € = **12,80 €**.
- **Économie : 2,60 €** pour cette sortie familiale.

**Un aller-retour en bus ou tramway par personne** :

- **Liberté+** : 4 × 1,64 € + 2 × 0,82 € = **8,20 €**.
- **Tickets à l'unité** : 4 × 2,05 € + 2 × 1,05 € = **10,30 €**.
- **Économie : 2,10 €**.

Ces exemples comptent bien les trajets **de chaque membre de la famille**, et non un tarif unique pour le groupe. Les trajets vers **Orly par la ligne 14** ou **CDG par le RER B** relèvent d'une tarification particulière de **14 €** (7 € réduit) avec Liberté+ : ils ne sont pas inclus dans le plafond quotidien ordinaire.

## Quand préférer Navigo Easy ou imagine R Junior ?

**Navigo Easy** reste pratique si vous n'êtes pas éligible à Liberté+, si vous ne voulez pas ouvrir de contrat avec prélèvement bancaire ou si vous avez besoin de tickets immédiatement. Pour un séjour touristique et les comparaisons avec Navigo Jour, Semaine ou Paris Visite, consultez notre guide [des transports à Paris avec des enfants](/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/).

**Imagine R Junior** mérite un calcul à part pour un enfant **résidant en Île-de-France et âgé de moins de 11 ans au 31 décembre de l'année de souscription**. Le forfait annuel 2026-2027 coûte **25,20 € frais de dossier compris** et permet de voyager en illimité dans le cadre de ses conditions. À titre de repère, **25 trajets de métro à 1,02 € coûtent déjà 25,50 €** avec Liberté+ : si l'enfant remplit les conditions et se déplace même assez modestement tout au long de l'année, le forfait Junior peut devenir plus économique. Vérifiez toutefois son éligibilité et ses dates de validité avant de souscrire.

Pour les adultes qui se déplacent tous les jours, comparez plutôt avec Navigo Mois ou Annuel. **Le bon choix peut être différent pour chaque membre du foyer** : Liberté+ pour un parent occasionnel, imagine R Junior pour l'enfant francilien, et tickets Easy pour un proche en visite.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/ | Transports à Paris avec des enfants: quel titre choisir pour payer juste? | voyages | Paris, Paris, Île-de-France
- /articles/bons-plans/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/ | Château de Champs-sur-Marne en famille: gratuités, tarifs et dates à éviter | bons-plans | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | Noël Gaulois 2026 au Parc Astérix: billets, glissades et spectacles en famille | evenements | Plailly, Oise, Hauts-de-France
- /articles/bons-plans/pic-du-midi-moins-cher-quand-choisir-le-billet-date-plutot-que-le-pass-liberte/ | Pic du Midi moins cher: quand choisir le billet daté plutôt que le Pass Liberté | bons-plans | Bagnères-de-Bigorre, Hautes-Pyrénées, Occitanie
- /articles/bons-plans/musee-de-tautavel-moins-cher-avec-lio-le-bon-plan-a-connaitre/ | Musée de Tautavel moins cher avec liO: le bon plan à connaître | bons-plans | Tautavel, Pyrénées-Orientales, Occitanie
- /articles/parentalite/telephone-portable-lycee-rentree-2026-regles/ | Téléphone portable au lycée en 2026: ce qui change à la rentrée | parentalite
- /articles/sorties/l-aquarium-tropical-de-la-porte-doree-en-famille/ | L’Aquarium tropical de la Porte Dorée en famille | sorties | Paris, Paris, Île-de-France
- /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | Créations & savoir-faire 2026 à Paris en famille: billets, ateliers et dates | evenements | Paris, Paris, Île-de-France
- /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | Salon du Cheval de Paris 2026 en famille: animations, jumping et billets | evenements | Paris, Paris, Île-de-France
- /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | Métamorphoses 2026 au quai Branly: séances gratuites et films par âge | evenements | Paris, Paris, Île-de-France
- /articles/maison/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager/ | À Paris, où donner ou déposer meubles, jouets et électroménager ? | maison | Paris, Paris, Île-de-France
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | Día de los Muertos 2026 au Jardin d’Acclimatation: programme, billets et tailles | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-au-musee-carnavalet-quelle-activite-choisir-selon-l-age/ | Vacances de la Toussaint 2026 au musée Carnavalet: activités en famille dès 4 ans | sorties | Paris, Paris, Île-de-France
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | Vacances de la Toussaint 2026 à la Cité des sciences: les ateliers numériques gratuits avec des enfants | sorties | Paris, Paris, Île-de-France
- /articles/activites/stages-de-science-a-la-cite-des-sciences-pendant-la-toussaint-2026-lequel-choisir-selon-l-age/ | Stages de science à la Cité des sciences à la Toussaint 2026: durées, âges et tarifs | activites | Paris, Paris, Île-de-France
- /articles/activites/paris-sport-vacances-automne-2026-demi-journee-gratuite-ou-stage-a-la-journee/ | Paris Sport Vacances automne 2026: demi-journée gratuite ou stage à la journée? | activites | Paris, Paris, Île-de-France
- /articles/bons-plans/arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir/ | Arles en famille à petit budget: quelles visites et quel pass choisir? | bons-plans | Arles, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/musee-camille-claudel-a-nogent-sur-seine-visite-et-ateliers-avec-les-enfants/ | Musée Camille Claudel à Nogent-sur-Seine: visite et ateliers avec les enfants | bons-plans | Nogent-sur-Seine, Aube, Grand Est
- /articles/bons-plans/musverre-en-famille-gratuites-et-contes-a-sars-poteries/ | MusVerre en famille: gratuités et contes à Sars-Poteries | bons-plans | Sars-Poteries, Nord, Hauts-de-France
- /articles/bons-plans/ski-a-aussois-en-famille-en-2026-2027-forfaits-et-budget/ | Ski à Aussois en famille en 2026-2027: forfaits et budget | bons-plans | Aussois, Savoie, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | 2026-10-23T06:21:12.326Z
- opportunity | /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | 2026-10-08T14:56:52.034Z
- opportunity | /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | 2026-10-18T04:19:39.869Z
- opportunity | /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | 2026-10-06T19:20:39.093Z
- opportunity | /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | 2026-10-24T09:33:57.174Z
- opportunity | /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | 2026-10-09T14:37:47.734Z
- opportunity | /articles/activites/paris-sport-vacances-automne-2026-demi-journee-gratuite-ou-stage-a-la-journee/ | 2026-10-03T20:20:25.508Z
- opportunity | /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/ | 2026-10-22T04:59:04.773Z
- opportunity | /articles/activites/stages-de-science-a-la-cite-des-sciences-pendant-la-toussaint-2026-lequel-choisir-selon-l-age/ | 2026-10-04T05:39:23.036Z
- opportunity | /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | 2026-10-05T11:24:52.310Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
