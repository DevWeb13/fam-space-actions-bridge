# Radar Fam Space - Phase 2/3

## Mission

Radar utilise Google Search Console et la recherche web pour choisir le travail éditorial qui apporte le plus de valeur à Fam Space: améliorer une page réellement perfectible, développer une intention proche d'une page forte, ou publier à temps une opportunité locale/saisonnière. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 2/3

Tu es journaliste web et responsable du parcours lecteur. Le candidat validé de phase 1 est fourni intégralement plus bas. Pour un refresh, l'article source exact est fourni intégralement plus bas.

Un refresh utilise l'ancien article comme référence interne, mais le résultat doit se lire comme un article actuel et autonome. Toute information encore vraie et utile doit rester, notamment prix décisionnels, durées, réservation, âge/taille, accessibilité, accès, contraintes, services bébé/enfants, repas et autres détails pratiques; une information fausse, périmée ou réellement redondante peut être retirée.

Suis le diagnostic éditorial du brief:
- `rank_loss`: réponds mieux aux intentions réellement en recul;
- `coverage_loss`: améliore la couverture utile sans présenter cela comme une perte de ranking;
- `uncertain`: applique uniquement la raison éditoriale indépendante vérifiée;
- opportunity: construis l'article autour de la décision choisie en phase 1. Le titre, le sous-titre et le résumé de phase 1 sont des formulations de travail: réévalue-les à partir de l'article final au lieu de reprendre mécaniquement la formulation de la décision.

Utilise des sources directement responsables. Les faits utilisés sont liés naturellement dans le corps et présents dans `sources`. Aucun H1, tableau Markdown ou section Sources.

Sélectionne l'information au lieu de l'épuiser. Une information importante doit normalement apparaître une seule fois: l'introduction, les sections et la fin ne doivent pas redire la même chose. Une conclusion n'est pas obligatoire si elle ne fait que résumer. La structure doit découler du sujet et il n'existe aucun objectif de longueur; arrête-toi lorsque le sujet est traité complètement, sans remplissage.

Applique directement les règles partenaires ci-dessous.

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


Sélectionne seulement les liens internes réellement utiles et vérifie les routes avant usage. Lorsqu'une autre page Fam Space traite déjà correctement un sous-sujet, donne uniquement le contexte nécessaire puis renvoie vers cette page au lieu de refaire son contenu. Dans le texte public, oriente simplement le lecteur vers cette page sans commenter l'organisation éditoriale entre les articles. Le maillage doit prolonger la lecture et réduire les répétitions entre articles, pas seulement ajouter des liens.

Si du contenu temporaire est ajouté à un evergreen, utilise `reviewAt`; pour un événement pur, utilise `eventEndsAt`.

Soumets le résultat via `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet. **Ne recopie aucun bloc `radar` et ne fournis aucune branche ni aucun SHA.** La plomberie mécanique conserve le diagnostic GSC, la cible, le slug et les champs protégés.

## Candidat validé de la phase précédente

---
title: "Salon du livre jeunesse de Montreuil 2026: billet gratuit et visite en famille"
subtitle: "Du 25 au 30 novembre: jours, horaires, accès et activités pour préparer la sortie"
summary: "Salon du livre et de la presse jeunesse 2026 à Montreuil: entrée gratuite avec billet individuel obligatoire, horaires par jour, rencontres et accès en famille."
category: evenements
location:
  city: Montreuil
  department: Seine-Saint-Denis
  region: Île-de-France
keywords:
  - salon du livre jeunesse Montreuil 2026
  - salon livre presse jeunesse 2026 billet gratuit
  - Montreuil salon du livre avec enfants novembre
eventEndsAt: 2026-11-30
sources:
  - title: SLPJ - Salon 2026, calendrier officiel et programmation
    url: https://slpj.fr/salon/
  - title: SLPJ - Billetterie officielle 2026
    url: https://slpj.fr/billetterie/
  - title: Ville de Montreuil - Salon du livre et de la presse jeunesse 2026
    url: https://www.montreuil.fr/slpj
  - title: SLPJ - Accessibilité et accueil des visiteurs
    url: https://slpj.fr/salon/accessibilite/
  - title: SLPJ - Exposition de la 42e édition
    url: https://slpj.fr/salon/exposition/
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille
  decision: Choisir le jour et les horaires adaptés à la visite avec des enfants, réserver un billet gratuit pour chaque membre de la famille et organiser les activités et l'accès à Paris Montreuil Expo sans confondre gratuité et entrée sans billet.
  affiliationPotential: "L'accès principal au Salon est entièrement gratuit et uniquement via sa billetterie officielle, sans offre de billetterie partenaire pertinente. Hébergement secondaire pour les familles venant de loin: ibis Styles Paris Mairie de Montreuil, à Montreuil, proposé sur Booking.com avec chambres familiales (https://www.booking.com/hotel/fr/ibis-styles-mairie-de-montreuil.fr.html); vérifier capacité, trajet, tarifs et disponibilité selon dates. Ne pas créer de concurrence à la billetterie gratuite."
  gsc:
    retrievedAt: 2026-10-14T04:26:13.937Z
    dataThrough: 2026-10-11
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « SLPJ - Salon 2026, calendrier officiel et programmation »; aucune page forte GSC n'est requise.
---

## Mission retenue
Préparer une visite familiale du 42e Salon du livre et de la presse jeunesse en Seine-Saint-Denis, «Aux frontières du réel», du mercredi 25 au lundi 30 novembre 2026 à Paris Montreuil Expo, 128 rue de Paris à Montreuil. L'article aide à choisir son jour et à obtenir les billets gratuits, pas à résumer toute l'actualité de l'édition jeunesse.

## Pourquoi cette mission
Le meilleur refresh GSC, Carte Tattoo Isère, est classé «uncertain»: zéro requête comparable, aucune perte de position démontrée; l'article sur master couvre déjà montant de 60 à 120 €, bonus Caf, partenaires, demande et échéances, sans lacune indépendante prioritaire. Une expansion de la page forte «Transports à Paris avec des enfants» répéterait une comparaison déjà approfondie, avec plusieurs prolongements existants. L'opportunité Montreuil est datée, officiellement confirmée et son billet gratuit est disponible depuis le 5 octobre. Parmi 681 articles du catalogue et l'historique Radar, aucun ne couvre ce Salon; «Partir en Livre 2026» relève d'un autre événement estival. Publication traite Chamrousse, Destination Vincennes et Haut-Rhin: aucun conflit éditorial direct.

## Décision du lecteur
Réserver gratuitement autant de billets que de visiteurs, enfants compris, puis choisir un jour et une plage horaire pour découvrir avec eux livres, rencontres et créations, en tenant compte de l'affluence, de l'accès et des besoins particuliers.

## Faits à traiter
- Dates: 25-30 novembre 2026; 42e édition, thème «Aux frontières du réel». Lieu: Paris Montreuil Expo, 128 rue de Paris, 93100 Montreuil.
- Horaires publiés par la Ville: mercredi 25 et jeudi 26, 9h-18h; vendredi 27, 9h-21h; samedi 28, 9h-20h; dimanche 29, 10h-19h; lundi 30, 9h-18h (journée professionnelle également ouverte à tous les publics). Vérifier toute évolution du programme avant rédaction.
- Entrée 100 % gratuite, mais réservation d'un billet personnel obligatoire pour chaque enfant et adulte, à présenter sur smartphone ou papier. Distinguer la réservation individuelle et les inscriptions spécifiques des groupes scolaires/associatifs.
- Contenu annoncé: rencontres, dédicaces, lectures, expositions, ateliers, bande dessinée et presse jeunesse. Exposition 2026 «À la croisée des images». Ne pas inventer d'âge minimum, de créneaux ou de gratuité séparée pour les ateliers non détaillés; mentionner que la programmation peut évoluer.
- Transports: métro 9 Robespierre à proximité; confronter le trajet aux informations officielles d'accessibilité et éviter d'appliquer sans vérification les horaires «heures creuses» de 2025 figurant encore sur certaines pages. Accueil de personnes en situation de handicap, entrée dédiée et dispositifs sensoriels à préciser avec prudence.
- Choix selon la famille: différencier vendredi nocturne, samedi/dimanche et jours de semaine sans affirmer qu'un créneau sera calme en l'absence de données 2026. Ne pas confondre accès gratuit et achats de livres éventuels.

## Sources de départ
Programme 2026 du SLPJ, billetterie officielle, page de la Ville de Montreuil pour les horaires, pages officielles de l'exposition et de l'accessibilité. Recouper spécifiquement les informations datées de 2025 dans la page accessibilité avant de les attribuer à 2026.

## Affiliation
Aucun billet payant pour l'événement: placer l'accès à la billetterie gratuite officielle au premier plan et éviter toute offre concurrente. Pour un séjour avec nuitée, l'ibis Styles Paris Mairie de Montreuil figure sur Booking.com avec des chambres familiales; c'est une option secondaire, sans prix, disponibilité ni capacité supposés. L'établissement est vers Mairie de Montreuil, pas à l'entrée du Salon: inviter à vérifier le trajet.

## Continuations internes
Un lien contextuel vers «Transports à Paris avec des enfants: quel titre choisir pour payer juste?» (/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/) peut aider les familles venant de Paris, sans répéter le comparatif des tickets. «Partir en Livre 2026» concerne un autre événement déjà passé; ne pas le présenter comme la programmation du Salon.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/partir-en-livre-2026-en-famille/ | Partir en Livre 2026: trouver une animation jeunesse avant le 19 juillet | evenements
- /articles/parentalite/laep-a-colmar-ou-aller-gratuitement-avec-un-enfant-de-0-a-6-ans/ | LAEP à Colmar: où aller gratuitement avec un enfant de 0 à 6 ans | parentalite | Colmar, Haut-Rhin, Grand Est
- /articles/sorties/vacances-de-la-toussaint-2026-au-louvre-quelles-activites-choisir-avec-des-enfants/ | Vacances de la Toussaint 2026 au Louvre: le programme famille du 17 octobre au 1er novembre | sorties | Paris, Paris, Île-de-France
- /articles/bons-plans/la-roche-jagu-en-famille-a-l-automne-hiver-2026-parc-gratuit-tarifs-et-jours-d-ouverture/ | La Roche-Jagu en famille à l'automne-hiver 2026: parc gratuit, tarifs et jours d'ouverture | bons-plans | Ploëzal, Côtes-d'Armor, Bretagne
- /articles/evenements/concert-routes-provence-cassis-2026/ | Concert gratuit à Cassis le 13 août 2026 | evenements | Cassis, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/maison/composteur-gratuit-a-orleans-metropole-comment-en-profiter-en-2026/ | Composteur gratuit à Orléans Métropole: comment en profiter en 2026 | maison | Orléans, Loiret, Centre-Val de Loire
- /articles/voyages/auberge-de-jeunesse-avec-des-enfants-faut-il-reserver-une-chambre-privee/ | Auberge de jeunesse avec des enfants: faut-il réserver une chambre privée? | voyages
- /articles/evenements/coeur-de-ville-en-lumieres-2026-avec-des-enfants-comment-preparer-la-soiree-sans-voiture/ | Cœur de Ville en Lumières 2026 avec des enfants: comment préparer la soirée sans voiture? | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | Monument jeu d'enfant 2026 à Saint-Denis: atelier Dagobert le 17 octobre | evenements | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/sorties/musee-de-l-air-et-de-l-espace-a-la-toussaint-2026-quelle-activite-choisir-selon-l-age/ | Toussaint 2026 au Musée de l'Air et de l'Espace: quelle activité choisir avec un enfant? | sorties | Le Bourget, Seine-Saint-Denis, Île-de-France
- /articles/evenements/ateliers-au-jardin-de-la-pmi-a-bobigny-quelles-dates-choisir-cet-automne/ | Ateliers au jardin de la PMI à Bobigny: quelles dates choisir cet automne? | evenements | Bobigny, Seine-Saint-Denis, Île-de-France
- /articles/voyages/dormir-a-saint-denis-pour-visiter-paris-avec-des-enfants-pleyel-ou-basilique/ | Dormir à Saint-Denis pour visiter Paris avec des enfants: Pleyel ou Basilique? | voyages | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/sorties/musee-de-l-air-et-de-l-espace-du-bourget-en-famille-tarifs-avions-et-activites/ | Musée de l'Air et de l'Espace du Bourget en famille: tarifs, avions et activités | sorties | Le Bourget, Seine-Saint-Denis, Île-de-France
- /articles/evenements/vacances-royales-2026-a-versailles-animations-napoleon-dates-et-billets-en-famille/ | Vacances royales 2026 à Versailles: animations Napoléon, dates et billets | evenements | Versailles, Yvelines, Île-de-France
- /articles/evenements/rouen-givree-2026-en-famille-marche-de-noel-et-refuge-givre/ | Rouen Givrée 2026 en famille: marché de Noël et Refuge Givré | evenements | Rouen, Seine-Maritime, Normandie
- /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | Au Creux de l'Oreille 2026 à Noirlac: spectacles et ateliers en famille du 17 au 22 octobre | evenements | Bruère-Allichamps, Cher, Centre-Val de Loire
- /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | Grands Zyeux P'tites Zoreilles 2026: spectacles gratuits avec les tout-petits autour de Béziers | evenements | Béziers, Hérault, Occitanie
- /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | Abracada BOUH 2026 à Montpellier: programme et tarifs au château de Flaugergues | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | Fête de l'Automne 2026 à Terra Botanica: animations et tarifs | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | Halloween 2026 au Safari de Peaugres: animations, tarifs et Festival Lumières Sauvages | evenements | Peaugres, Ardèche, Auvergne-Rhône-Alpes
- /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | Halloween 2026 au Parc Spirou: billets, nocturnes Naruto et maison hantée | evenements | Monteux, Vaucluse, Provence-Alpes-Côte d'Azur

### Historique Radar lié

- opportunity | /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | 2026-10-13T20:41:25.500Z
- opportunity | /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | 2026-10-14T13:49:08.708Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- opportunity | /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | 2026-10-13T12:37:05.098Z
- opportunity | /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | 2026-10-14T07:31:28.976Z
- opportunity | /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | 2026-10-12T17:34:53.933Z
- opportunity | /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | 2026-10-13T05:01:12.150Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | 2026-10-13T09:50:29.435Z
- opportunity | /articles/sorties/musee-de-l-air-et-de-l-espace-a-la-toussaint-2026-quelle-activite-choisir-selon-l-age/ | 2026-10-05T20:22:10.692Z
- opportunity | /articles/sorties/vacances-de-la-toussaint-2026-au-louvre-quelles-activites-choisir-avec-des-enfants/ | 2026-10-03T17:26:28.881Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
