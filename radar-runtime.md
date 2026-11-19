# Radar Fam Space - Phase 3/3

## Mission

Radar surveille en priorité les articles Fam Space qui gagnent rapidement des impressions Google puis les perdent quelques jours plus tard. Il cherche ensuite les autres articles existants à améliorer réellement. Seulement s'il ne trouve aucune amélioration utile, il recherche un événement exceptionnel avec un fort potentiel d'audience et, lorsque c'est naturel, d'affiliation. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

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

Soumets le résultat final avec `action: advance`, uniquement les métadonnées éditoriales réellement corrigées, le corps complet et un bloc `radarReview`. Ne recopie pas les métadonnées inchangées: la plomberie les conserve et normalise la syntaxe avant traitement. Le bloc `radarReview` contient:
- `summary`: contrôles et corrections réellement effectués;
- `sources`: URLs factuelles revérifiées;
- pour un refresh, `regressionCheck`: résultat concret de la comparaison ancien/nouveau. Une seule correction factuelle vérifiée peut suffire.

**Ne recopie aucun autre champ Radar, aucune branche et aucun SHA.** Le workflow construit et contrôle d'abord l'article final avec le validateur réel. Il ne crée le commit de phase 3 que si ce précontrôle réussit, puis lance le processeur final.

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
title: "Rennes avec des enfants: transports gratuits avant 12 ans, comment ça marche?"
subtitle: De 5 à 11 ans, la carte KorriGo est indispensable pour voyager gratuitement; sans carte, un enfant de passage doit payer son titre.
summary: "Carte KorriGo gratuite pour les 5-11 ans, ticket rechargeable pour les visiteurs, tarifs STAR et Pass Pluriel: préparer les trajets en famille à Rennes."
slug: rennes-avec-des-enfants-les-transports-sont-gratuits-avant-12-ans-mais-pas-sans-carte
status: published
publishedAt: 2026-09-07T00:02:33+02:00
updatedAt: 2026-09-07T16:01:50+02:00
category: vie-pratique
readingTime: 4
location:
  city: Rennes
  department: Ille-et-Vilaine
  region: Bretagne
topic:
  key: vie-pratique|rennes|rennes-avec-des-enfants-les-transports-sont-gratuits-avant-12-ans-mais-pas-sans-carte|2026
  keywords:
    - Rennes transports enfants gratuits
    - STAR Rennes moins de 12 ans
image:
  src: /images/articles/2026/09/rennes-avec-des-enfants-les-transports-sont-gratuits-avant-12-ans-mais-pas-sans-carte.webp
  alt: Rame du métro de Rennes au terminus de La Poterie
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/vie-pratique/(2026)/(09)/rennes-avec-des-enfants-les-transports-sont-gratuits-avant-12-ans-mais-pas-sans-carte/index.md
  targetSha: fafcdc7f1128855e3c7ccb57942e1b5142207a3a
  targetUrl: /articles/vie-pratique/rennes-avec-des-enfants-les-transports-sont-gratuits-avant-12-ans-mais-pas-sans-carte/
  decision: Préparer les titres de chaque enfant et choisir le moyen de paiement le moins cher pour une visite familiale à Rennes, sans rester bloqué aux portillons.
  affiliationPotential: "Aucune affiliation naturelle: information sur les transports publics, sans réservation touristique indispensable."
  gsc:
    retrievedAt: 2026-11-19T01:30:40+01:00
    dataThrough: 2026-11-16
    signal: needs_query_check
    basis: Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer.
    peakStart: 2026-10-25
    peakEnd: 2026-10-31
    recentStart: 2026-11-10
    recentEnd: 2026-11-16
    peakImpressions: 105
    recentImpressions: 27
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Rennes transports enfants gratuits
      - STAR Rennes moins de 12 ans
---

<!-- article-image-credit -->
*Photo: [Pline](https://commons.wikimedia.org/wiki/File:Rame_VAL208_P1040082.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À [Rennes](/destinations/bretagne/ille-et-vilaine/rennes/), les bus et métros STAR sont gratuits pour les enfants de moins de 12 ans. Mais à partir de 5 ans, cette gratuité suppose une **carte KorriGo Services personnelle, avec un titre gratuit chargé, à valider à chaque trajet**. Sans cette carte, un enfant de passage peut voyager avec un titre payant.

Avant une sortie familiale, vérifiez donc l'âge de chaque enfant, puis comparez les titres des adultes selon le nombre de déplacements et le jour choisi.

## De 0 à 4 ans: aucun titre à préparer

Les enfants de moins de 5 ans voyagent gratuitement sans carte KorriGo et sans titre de transport. Vous pouvez directement prendre le bus ou le métro avec eux.

## De 5 à 11 ans: obtenir la carte KorriGo gratuite

<!-- article-image-body:01 -->

![Carte KorriGo utilisée dans les transports publics en Bretagne](/images/articles/2026/09/rennes-avec-des-enfants-les-transports-sont-gratuits-avant-12-ans-mais-pas-sans-carte-body-01.webp)

*Photo: [Ssx`z](https://commons.wikimedia.org/wiki/File:Korrigo_card.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

STAR a détaillé la démarche le 23 octobre 2026 dans son [guide de commande de la carte KorriGo enfant](https://www.star.fr/actualites/commandez-la-carte-korrigo-de-votre-enfant):

1. Rendez-vous sur **STAR.fr, rubrique Compte / e-boutique**, avec une pièce d'identité attestant l'âge de l'enfant.
2. Commandez sa carte KorriGo Services gratuite: un **titre gratuit** est chargé sur la carte.
3. Faites **valider la carte à chaque trajet**, y compris dans le métro pour franchir les portillons.

Vous préférez une démarche sur place? Les agences STAR et l'Espace KorriGo peuvent créer la carte. Anticipez cette formalité avant le jour de visite plutôt que de découvrir l'obligation devant les portillons.

## En visite sans KorriGo: quel billet acheter pour l'enfant?

Pour un enfant de 5 à 11 ans sans carte KorriGo, STAR impose un **titre payant**: voyage ou pass chargé sur un **ticket rechargeable**. Ce support coûte **0,10 € au premier achat** et peut ensuite être réutilisé. Il est vendu notamment aux distributeurs du métro, dans les commerces agréés et auprès des agents de conduite pour les titres disponibles à bord. À la gare de Rennes, l'Espace KorriGo et les distributeurs de la station Gares permettent aussi de s'équiper.

Le titre **1 voyage coûte 1,70 €** et donne droit à une heure de déplacements, correspondances comprises. Pour un programme plus chargé, comparez avec les pass. Les modalités de vente et de validation sont précisées par [STAR pour les visiteurs de passage](https://www.star.fr/star-et-moi/visiteur-touriste-de-passage/decouvrir-rennes).

## Pour les adultes: ticket à l'heure ou Pass 1 jour?

Le paiement sans contact par carte bancaire coûte **1,70 € pour une heure**, avec correspondances. Pour une visite compacte et peu de trajets distincts, deux validations séparées d'une heure reviennent à 3,40 € par adulte.

Le [Pass 1 jour STAR](https://www.star.fr/titres-et-tarifs/trouver-mon-tarif/pass-journee/pass-1-jour) coûte **4,70 € par personne** et permet des déplacements illimités en bus et métro pendant **24 heures à partir de la première validation**, avec accès aux parcs-relais selon leurs conditions. Il peut être chargé sur une carte KorriGo ou un ticket rechargeable. Il devient intéressant si vous multipliez les déplacements, notamment à partir de trois périodes de voyage payantes.

## Samedi, dimanche ou jour férié: comparez le Pass Pluriel

Le [Pass Pluriel STAR](https://www.star.fr/titres-et-tarifs/trouver-mon-tarif/pass-pluriel) coûte **5 € pour un groupe de 2 à 5 personnes**. Il est valable les samedis, dimanches et jours fériés, sur bus, métro et parcs-relais, **du premier trajet jusqu'à la fin du service ce même jour**: contrairement au Pass 1 jour, il ne dure pas 24 heures glissantes.

Il doit être chargé sur un **ticket rechargeable à 0,10 €**, disponible dans les agences STAR, chez les commerçants agréés et aux distributeurs du métro. Pour deux adultes, il peut être plus avantageux que deux pass individuels. Les enfants qui voyagent avec leur propre carte gratuite n'ont pas besoin d'un billet payant supplémentaire.

## Venir en voiture: utiliser un parc-relais

Rennes Métropole dispose de huit parcs-relais reliés au réseau STAR. Ils permettent de rejoindre le centre en bus ou en métro plutôt que de chercher un stationnement avec les enfants.

Le stationnement suppose d'utiliser réellement le réseau: votre titre doit avoir été validé dans une station différente de celle du parc-relais et sert à la sortie. Ces parkings ne sont pas prévus pour laisser une voiture la nuit. Certains ferment le dimanche; consultez les [horaires et conditions des parcs-relais STAR](https://www.star.fr/reseau-star/parc-relais/fonctionnement).

Si vous avez payé votre trajet par carte bancaire, STAR indique que la même carte validée dans l'heure peut être présentée à la borne de sortie.

Pour prolonger la journée sans voiture, découvrez également nos [balades à vélo autour de Rennes](/articles/activites/balade-a-velo-autour-de-rennes-quel-parcours-choisir-avec-des-enfants/), avec plusieurs parcours adaptés aux familles.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/vie-pratique/(2026)/(09)/rennes-avec-des-enfants-les-transports-sont-gratuits-avant-12-ans-mais-pas-sans-carte/index.md

---
title: "Rennes avec des enfants: transports gratuits avant 12 ans, comment ça marche?"
subtitle: Pour les 5-11 ans, la gratuité passe par une carte KorriGo; un enfant de passage sans carte peut quand même voyager avec un titre payant sur ticket rechargeable.
summary: "Métro et bus STAR avec des enfants: gratuité avant 12 ans, carte KorriGo, solution pour les visiteurs, Pass Pluriel et parc-relais."
slug: rennes-avec-des-enfants-les-transports-sont-gratuits-avant-12-ans-mais-pas-sans-carte
status: published
publishedAt: 2026-09-07T00:02:33+02:00
updatedAt: 2026-09-07T16:01:50+02:00
category: vie-pratique
readingTime: 4
location:
  city: Rennes
  department: Ille-et-Vilaine
  region: Bretagne
topic:
  key: vie-pratique|rennes|rennes-avec-des-enfants-les-transports-sont-gratuits-avant-12-ans-mais-pas-sans-carte|2026
  keywords:
    - Rennes transports enfants gratuits
    - STAR Rennes moins de 12 ans
image:
  src: "/images/articles/2026/09/rennes-avec-des-enfants-les-transports-sont-gratuits-avant-12-ans-mais-pas-sans-carte.webp"
  alt: "Rame du métro de Rennes au terminus de La Poterie"
---
<!-- article-image-credit -->
*Photo: [Pline](https://commons.wikimedia.org/wiki/File:Rame_VAL208_P1040082.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À [Rennes](/destinations/bretagne/ille-et-vilaine/rennes/), une famille peut réduire fortement son budget de déplacement: les bus et métros STAR sont gratuits pour les enfants de moins de 12 ans. Le détail à anticiper concerne surtout les 5-11 ans: pour bénéficier de cette gratuité, l'enfant doit avoir sa propre carte KorriGo Services et la valider.

Si votre enfant est simplement de passage et n'a pas de carte KorriGo, il peut quand même voyager, mais il lui faut alors un titre payant chargé sur un ticket rechargeable.

La bonne préparation dépend donc moins du nombre d'enfants que de leur âge, du nombre de trajets payants des adultes et du jour de visite.

## Avant 5 ans: gratuit et sans carte KorriGo

STAR indique que les transports bus et métro sont gratuits avant 12 ans. Pour les enfants de moins de 5 ans, aucune carte KorriGo n'est nécessaire.

Avec un tout-petit, vous n'avez donc pas de titre spécifique à acheter ou à préparer pour lui avant de prendre le réseau.

## De 5 à 11 ans: KorriGo pour voyager gratuitement

<!-- article-image-body:01 -->

![Carte KorriGo utilisée dans les transports publics en Bretagne](/images/articles/2026/09/rennes-avec-des-enfants-les-transports-sont-gratuits-avant-12-ans-mais-pas-sans-carte-body-01.webp)

*Photo: [Ssx`z](https://commons.wikimedia.org/wiki/File:Korrigo_card.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

C'est le point à anticiper si vous venez avec un enfant scolarisé. STAR indique que la carte KorriGo Services et la validation sont obligatoires pour les voyageurs à partir de 5 ans qui utilisent la gratuité des moins de 12 ans.

La carte est offerte. Vous pouvez la commander ou la faire créer selon les modalités indiquées par STAR. Si votre visite est prévue à une date précise, consultez la page [STAR consacrée aux moins de 12 ans](https://www.star.fr/titres-et-tarifs/trouver-mon-tarif/gratuite-5-11-ans) suffisamment tôt pour préparer la carte des 5-11 ans.

Pour un enfant simplement de passage qui n'a pas de carte KorriGo Services, STAR prévoit toutefois une solution: il doit utiliser un titre de transport payant, par exemple un voyage ou un pass chargé sur un ticket rechargeable. L'absence de carte ne bloque donc pas le voyage, mais elle empêche de profiter directement de la gratuité des 5-11 ans.

## Pour les adultes: ne prenez pas automatiquement un Pass 1 jour

Le Pass 1 jour coûte actuellement 4,70 € par personne et donne un accès illimité pendant 24 heures à compter de la première validation. Il inclut bus, métro et parcs-relais.

Mais pour une famille qui fait seulement un aller-retour compact dans une fenêtre d'une heure à chaque fois, payer un pass journée n'est pas toujours le meilleur choix. STAR permet aussi la validation directe par carte bancaire à 1,70 € pour une heure de déplacements, correspondances comprises.

Le bon calcul est donc simple:

- peu de déplacements séparés dans la journée: comparez avec le paiement à 1,70 € par heure et par adulte;
- plusieurs trajets répartis sur la journée: le [Pass 1 jour STAR](https://www.star.fr/titres-et-tarifs/trouver-mon-tarif/pass-journee/pass-1-jour) devient plus facile à rentabiliser;
- samedi, dimanche ou jour férié: regardez d'abord le Pass Pluriel.

## Le week-end, le Pass Pluriel peut changer le budget

Le Pass Pluriel coûte 5 € et permet à un groupe de 2 à 5 personnes de voyager toute la journée sur le réseau STAR. Il est valable uniquement les samedis, dimanches et jours fériés et doit être chargé sur un ticket rechargeable.

Pour deux adultes qui prévoient plusieurs déplacements dans la journée, le calcul mérite d'être fait avant d'acheter deux Pass 1 jour à 4,70 € chacun. Les enfants de moins de 12 ans restent, eux, concernés par leur propre régime de gratuité.

Les conditions et points de vente sont détaillés sur la page officielle du [Pass Pluriel STAR](https://www.star.fr/titres-et-tarifs/trouver-mon-tarif/pass-pluriel).

## Venir en voiture sans entrer dans le centre: pensez au parc-relais

Rennes Métropole dispose de huit parcs-relais reliés au réseau STAR. C'est souvent plus simple avec des enfants que de chercher une place dans le centre puis de marcher longtemps jusqu'à votre première étape.

Le fonctionnement impose toutefois de voyager réellement sur le réseau: votre titre doit être validé dans une station différente de celle du parc-relais, et il sert à la sortie. Les parcs-relais ne sont pas des parkings pour laisser une voiture la nuit.

Les horaires varient selon le parc et le jour, avec notamment des fermetures le dimanche pour certains sites. Vérifiez donc le [fonctionnement et les horaires des parcs-relais STAR](https://www.star.fr/reseau-star/parc-relais/fonctionnement) avant de choisir celui qui convient à votre trajet.

Si vous payez vos trajets par carte bancaire, STAR précise que cette même carte, validée dans l'heure, peut être présentée à la borne pour sortir du parc-relais.

## Quel choix pour une famille qui visite Rennes une journée?

Avec des enfants de moins de 5 ans, vous n'avez rien à préparer pour leurs trajets. Entre 5 et 11 ans, préparez leur carte KorriGo si vous voulez bénéficier de la gratuité. Si vous êtes seulement de passage sans carte, prévoyez plutôt un titre payant sur ticket rechargeable pour l'enfant concerné.

Pour les adultes, choisissez ensuite selon votre programme plutôt que par réflexe. Une journée avec beaucoup d'allers-retours peut justifier un pass illimité. Une visite très compacte peut coûter moins cher avec des validations ponctuelles. Le week-end ou un jour férié, le Pass Pluriel mérite d'être comparé avant toute autre formule.

Enfin, si vous arrivez en voiture, un parc-relais permet de basculer rapidement vers le métro ou le bus et d'éviter une partie du stationnement en centre-ville. Pour compléter une journée sans voiture, notre guide des [balades à vélo autour de Rennes](/articles/activites/balade-a-velo-autour-de-rennes-quel-parcours-choisir-avec-des-enfants/) compare aussi plusieurs parcours adaptés aux enfants.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/balade-a-velo-autour-de-rennes-quel-parcours-choisir-avec-des-enfants/ | Balade à vélo autour de Rennes: quel parcours choisir avec des enfants? | activites | Rennes, Ille-et-Vilaine, Bretagne
- /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | Luminéales du Thabor 2026 à Rennes: tarifs, horaires et visite en famille | evenements | Rennes, Ille-et-Vilaine, Bretagne
- /articles/sorties/espace-des-sciences-a-rennes-avec-des-enfants-expositions-experiences-et-planetarium/ | Espace des sciences à Rennes avec des enfants: expositions, expériences et planétarium | sorties | Rennes, Ille-et-Vilaine, Bretagne
- /articles/sorties/parc-en-folie-2026-a-rennes-billet-en-ligne-ou-sur-place-quelle-formule-choisir-en-famille/ | Parc en Folie 2026 à Rennes: tarifs, espace 0-3 ans et infos pratiques en famille | sorties | Bruz, Ille-et-Vilaine, Bretagne
- /articles/parentalite/laep-a-rennes-ou-jouer-gratuitement-avec-son-enfant/ | LAEP à Rennes: où jouer gratuitement avec son enfant? | parentalite | Rennes, Ille-et-Vilaine, Bretagne
- /articles/maison/ecotravo-a-rennes-metropole-qui-peut-obtenir-jusqu-a-15-000-pour-renover-sa-maison/ | écoTravo à Rennes Métropole: qui peut obtenir jusqu'à 15 000 € pour rénover sa maison? | maison | Rennes, Ille-et-Vilaine, Bretagne
- /articles/vie-pratique/transports-gratuits-a-lille-comment-obtenir-le-titre-moins-de-18-ans/ | Transports gratuits à Lille: comment obtenir le titre moins de 18 ans ? | vie-pratique | Nord, Hauts-de-France
- /articles/evenements/parents-delires-rennes-2026-famille/ | Par’ents Délires 4 à Rennes: une fête gratuite pour toute la famille le 26 août 2026 | evenements | Rennes, Ille-et-Vilaine, Bretagne
- /articles/vie-pratique/rennes-avec-des-enfants-les-transports-sont-gratuits-avant-12-ans-mais-pas-sans-carte/ | Rennes avec des enfants: transports gratuits avant 12 ans, comment ça marche? | vie-pratique | Rennes, Ille-et-Vilaine, Bretagne
- /articles/bons-plans/fougeres-en-famille-a-petit-prix-chateau-coursive-et-balade-gratuite/ | Fougères en famille à petit prix: château, Coursive et balade gratuite | bons-plans | Fougères, Ille-et-Vilaine, Bretagne
- /articles/cuisine/ferme-marine-de-cancale-avec-des-enfants-quelle-visite-choisir-a-la-toussaint-2026/ | Ferme Marine de Cancale avec des enfants: quelle visite choisir à la Toussaint 2026? | cuisine | Cancale, Ille-et-Vilaine, Bretagne
- /articles/evenements/quai-des-bulles-2026-a-saint-malo-en-famille-tarifs-programme-et-conseils/ | Quai des Bulles 2026 à Saint-Malo en famille: tarifs, programme et conseils | evenements | Saint-Malo, Ille-et-Vilaine, Bretagne
- /articles/voyages/dinard-en-famille-pendant-3-jours-plages-balades-et-escapade-a-saint-malo/ | Dinard en famille pendant 3 jours: plages, balades et escapade à Saint-Malo | voyages | Dinard, Ille-et-Vilaine, Bretagne
- /articles/voyages/saint-malo-en-famille-ou-dormir-pour-profiter-de-la-plage-et-d-intra-muros-a-pied/ | Saint-Malo en famille: où dormir pour profiter de la plage et d'Intra-Muros à pied | voyages | Saint-Malo, Ille-et-Vilaine, Bretagne
- /articles/evenements/terra-aletia-saint-malo-famille-2026/ | Terra Aletia 2026 à Saint-Malo: un voyage immersif dans l’univers des corsaires | evenements | Saint-Malo, Ille-et-Vilaine, Bretagne
- /articles/vie-pratique/france-services-en-charente-ou-obtenir-de-l-aide-pour-ses-demarches-administratives/ | France services en Charente: où obtenir de l'aide pour ses démarches administratives ? | vie-pratique | Charente, Nouvelle-Aquitaine
- /articles/vie-pratique/montlouis-sur-loire-emprunter-jeux-liseuses-et-objets-a-la-mediatheque/ | Montlouis-sur-Loire: emprunter jeux, liseuses et objets à la médiathèque | vie-pratique | Montlouis-sur-Loire, Indre-et-Loire, Centre-Val de Loire
- /articles/vie-pratique/aeroport-de-lille-avec-des-enfants-preparer-le-depart-jusqu-a-l-embarquement/ | Aéroport de Lille avec des enfants: préparer le départ jusqu’à l’embarquement | vie-pratique | Lesquin, Nord, Hauts-de-France
- /articles/vie-pratique/ludotheque-ricochet-a-sainte-sigolene-jouer-et-emprunter-en-famille/ | Ludothèque Ricochet à Sainte-Sigolène: jouer et emprunter en famille | vie-pratique | Sainte-Sigolène, Haute-Loire, Auvergne-Rhône-Alpes
- /articles/vie-pratique/cabanes-des-1-000-premiers-jours-en-seine-saint-denis-ou-aller-avec-son-enfant/ | Cabanes des 1 000 premiers jours en Seine-Saint-Denis: où aller avec son enfant ? | vie-pratique | Seine-Saint-Denis, Île-de-France
- /articles/vie-pratique/transport-scolaire-dans-l-eure-nomad-epn-ou-semo-quel-reseau-choisir/ | Transport scolaire dans l'Eure: NOMAD, EPN ou SEMO, quel réseau choisir ? | vie-pratique | Eure, Normandie
- /articles/vie-pratique/transport-scolaire-dans-les-pyrenees-atlantiques-txik-txak-ou-region-en-2026-2027/ | Transport scolaire dans les Pyrénées-Atlantiques: TXIK TXAK ou Région en 2026-2027? | vie-pratique | Pyrénées-Atlantiques, Nouvelle-Aquitaine

### Historique Radar lié

- refresh | /articles/parentalite/laep-a-rennes-ou-jouer-gratuitement-avec-son-enfant/ | 2026-11-09T04:33:48.646Z
- opportunity | /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | 2026-10-31T19:33:18.323Z
- refresh | /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | 2026-11-16T15:57:24.274Z
- opportunity | /articles/sorties/parc-en-folie-2026-a-rennes-billet-en-ligne-ou-sur-place-quelle-formule-choisir-en-famille/ | 2026-10-07T09:18:46.414Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
