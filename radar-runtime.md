# Radar Fam Space - Phase 2/3

## Mission

Radar surveille en priorité les articles Fam Space qui gagnent rapidement des impressions Google puis les perdent quelques jours plus tard. Il cherche ensuite les autres articles existants à améliorer réellement. Seulement s'il ne trouve aucune amélioration utile, il recherche un événement exceptionnel avec un fort potentiel d'audience et, lorsque c'est naturel, d'affiliation. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 2/3

Tu es journaliste web et responsable du parcours lecteur. Le candidat validé de phase 1 est fourni intégralement plus bas. Pour un refresh, l'article source exact est fourni intégralement plus bas.

Un refresh utilise l'ancien article comme référence interne, mais le résultat doit se lire comme un article actuel et autonome. Toute information encore vraie et utile doit rester, notamment prix décisionnels, durées, réservation, âge/taille, accessibilité, accès, contraintes, services bébé/enfants, repas et autres détails pratiques; une information fausse, périmée ou réellement redondante peut être retirée.

Suis le diagnostic éditorial du brief:
- `rank_loss`: réponds mieux aux intentions réellement en recul;
- `coverage_loss`: améliore la couverture utile sans présenter cela comme une perte de ranking;
- `uncertain`: applique uniquement la raison éditoriale indépendante vérifiée;
- `needs_query_check`: les recherches Google n'ont pas été diagnostiquées; applique uniquement la lacune éditoriale indépendante vérifiée, sans présenter la baisse d'impressions comme une perte de classement;
- opportunity: construis l'article autour de la décision choisie en phase 1. Le titre, le sous-titre et le résumé de phase 1 sont des formulations de travail: réévalue-les à partir de l'article final au lieu de reprendre mécaniquement la formulation de la décision.

Utilise des sources directement responsables. Les sources utilisées figurent dans `sources` et sont liées dans le corps lorsqu'elles ne concurrencent pas une offre partenaire. Aucun H1, tableau Markdown ou section Sources.

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

Soumets le résultat via `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées, puis le corps complet. **Ne recopie pas les métadonnées inchangées, aucun bloc `radar`, aucune branche et aucun SHA.** La plomberie mécanique conserve le reste, normalise la syntaxe de la requête et préserve le diagnostic GSC, la cible, le slug et les champs protégés.

## Candidat validé de la phase précédente

---
title: "Maisons des 1000 premiers jours à Paris: deux adresses pour les parents et les bébés"
subtitle: Accueil gratuit, ateliers et rencontres dans les 18e et 20e arrondissements
summary: Deux lieux gratuits à Paris pour rencontrer d'autres parents, participer à des ateliers avec bébé et obtenir des informations. Adresses, horaires et accès.
slug: maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes
status: published
publishedAt: 2026-11-09T06:06:02+01:00
updatedAt: null
category: parentalite
readingTime: 4
location:
  city: Paris
  department: Paris
  region: Île-de-France
topic:
  key: parentalite|paris|maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes|2026
  keywords:
    - Maisons des 1000 premiers jours Paris
    - activités gratuites bébé Paris
    - soutien parentalité Paris
image:
  src: /images/articles/2026/11/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes.webp
  alt: Passage des Tourelles dans le 20e arrondissement de Paris, où se trouve l'une des Maisons des 1000 premiers jours
sources:
  - title: Ville de Paris - Deux Maisons des 1000 premiers jours
    url: https://www.paris.fr/pages/deux-maisons-des-1000-premiers-jours-ouvrent-leurs-portes-a-paris-32106
  - title: Ville de Paris - Maison des 1000 premiers jours du 18e
    url: https://www.paris.fr/lieux/maison-des-1000-premiers-jours-du-18eme-arrondissement-20653
  - title: Ville de Paris - Maison des 1000 premiers jours du 20e
    url: https://www.paris.fr/lieux/maison-des-1000-premiers-jours-du-20eme-arrondissement-20652
  - title: CAF de Paris - Les lieux d'accueil enfants-parents
    url: https://www.caf.fr/allocataires/caf-de-paris/offre-de-service/vie-personnelle/les-lieux-d-accueil-enfants-parents
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/parentalite/(2026)/(11)/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes/index.md
  targetSha: 20bb1aa124160026c4432c9f9d17d8794fa143f2
  targetUrl: /articles/parentalite/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes/
  decision: Choisir entre les Maisons des 18e et 20e selon l'âge de l'enfant, les créneaux d'accueil libre et les ateliers réellement accessibles, puis savoir quand et comment s'inscrire.
  affiliationPotential: "Aucune affiliation naturelle: accueil et ateliers municipaux gratuits, sans logique de réservation commerciale ni d'hébergement."
  gsc:
    retrievedAt: 2026-11-18T00:34:26+01:00
    dataThrough: 2026-11-15
    signal: coverage_loss
    basis: "Visibilité récente : 64 impressions sur trois jours, puis 13 sur les trois derniers jours consolidés; cause non établie. Baisse d'exposition sur les requêtes visibles (ratio 0.25), sans recul de classement comparable établi."
    peakStart: 2026-11-10
    peakEnd: 2026-11-12
    recentStart: 2026-11-13
    recentEnd: 2026-11-15
    peakImpressions: 64
    recentImpressions: 13
    commonQueries: 1
    positionDelta: 1
    impressionRatio: 0.25
    focusQueries:
      - maison des 1000 premiers jours paris 20
      - maison des 1000 premiers jours paris
      - la maison des 1000 premiers jours paris
      - maison des 1000 premiers jours paris 18
---

## Mission retenue
Actualiser le guide des deux Maisons des 1000 premiers jours de Paris (18e, 20e), lieux municipaux gratuits pour futurs parents et familles de tout-petits.

## Pourquoi cette mission
Premier signal de baisse rapide du snapshot GSC: exposition en recul sur les recherches « maison des 1000 premiers jours paris », notamment 18e et 20e, sans preuve d'une perte de classement. Lacune éditoriale indépendante: l'article présente les ateliers seulement de manière générique alors que des séances datées, avec des modalités d'inscription différentes, sont confirmées par la Ville.

## Décision du lecteur
Savoir quelle Maison convient à sa famille, si une venue libre suffit ou si un atelier précis exige une réservation, et éviter un déplacement inutile.

## Faits à traiter
- Conserver adresses, horaires d'accueil, contacts, limites d'âge, accessibilité, tables à langer, fermetures et distinction accueil libre/atelier; revérifier les fiches officielles.
- 18e: atelier santé environnement les 24 novembre et 22 décembre, 10 h-12 h, gratuit sur inscription; gestes qui sauvent les 26 novembre et 17 décembre, 10 h-12 h, inscription obligatoire auprès de la Maison.
- 18e: ateliers créatifs parent-enfant les mercredis jusqu'au 16 décembre, 15 h 45-17 h 15, dès 6 mois, inscription par courriel et accès libre possible le jour même; distinguer ces conditions des ateliers sur réservation obligatoire.
- 20e: atelier santé environnement les 19 novembre et 17 décembre, 17 h 30-19 h 30, sur inscription; vérifier l'accueil hors horaires habituels. Le programme mensuel change: orienter vers la fiche officielle plutôt que promettre une place.
- Ne pas transformer le guide permanent en agenda exhaustif; conserver les deux photos, crédits et licences, ainsi que l'orientation vers les LAEP pour les enfants plus grands.

## Sources de départ
- https://www.paris.fr/lieux/maison-des-1000-premiers-jours-du-18eme-arrondissement-20653
- https://www.paris.fr/lieux/maison-des-1000-premiers-jours-du-20eme-arrondissement-20652
- https://www.paris.fr/evenements/mon-premier-atelier-sante-environnement-a-la-maison-des-1000-premiers-jours-du-18eme-116240
- https://www.paris.fr/evenements/gestes-qui-sauvent-maison-des-1000-premiers-jours-du-18eme-106067
- https://www.paris.fr/evenements/ateliers-creatifs-parents-enfants-maison-des-1000-jours-18eme-109749
- https://www.paris.fr/pages/protegez-la-sante-de-votre-bebe-des-la-grossesse-avec-mon-premier-atelier-sante-31255

## Affiliation
Aucune: il s'agit de services gratuits de proximité.

## Continuations internes
- Garder le comparatif des deux adresses au cœur du guide, sans créer deux articles concurrents.
- Conserver le relais vers les LAEP parisiens pour les 3-5 ans, sans développer un annuaire parallèle.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/parentalite/(2026)/(11)/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes/index.md

---
title: "Maisons des 1000 premiers jours à Paris: deux adresses pour les parents et les bébés"
subtitle: Accueil gratuit, ateliers et rencontres dans les 18e et 20e arrondissements
summary: Deux lieux gratuits à Paris pour rencontrer d'autres parents, participer à des ateliers avec bébé et obtenir des informations. Adresses, horaires et accès.
slug: maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes
status: published
publishedAt: 2026-11-09T06:06:02+01:00
updatedAt: null
category: parentalite
readingTime: 4
location:
  city: Paris
  department: Paris
  region: Île-de-France
topic:
  key: parentalite|paris|maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes|2026
  keywords:
    - Maisons des 1000 premiers jours Paris
    - activités gratuites bébé Paris
    - soutien parentalité Paris
image:
  src: "/images/articles/2026/11/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes.webp"
  alt: "Passage des Tourelles dans le 20e arrondissement de Paris, où se trouve l'une des Maisons des 1000 premiers jours"
sources:
  - title: Ville de Paris - Deux Maisons des 1000 premiers jours
    url: https://www.paris.fr/pages/deux-maisons-des-1000-premiers-jours-ouvrent-leurs-portes-a-paris-32106
  - title: Ville de Paris - Maison des 1000 premiers jours du 18e
    url: https://www.paris.fr/lieux/maison-des-1000-premiers-jours-du-18eme-arrondissement-20653
  - title: Ville de Paris - Maison des 1000 premiers jours du 20e
    url: https://www.paris.fr/lieux/maison-des-1000-premiers-jours-du-20eme-arrondissement-20652
  - title: CAF de Paris - Les lieux d'accueil enfants-parents
    url: https://www.caf.fr/allocataires/caf-de-paris/offre-de-service/vie-personnelle/les-lieux-d-accueil-enfants-parents
---
<!-- article-image-credit -->
*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Passage_Tourelles_-_Paris_XX_(FR75)_-_2021-06-10_-_1.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Paris, deux **Maisons des 1000 premiers jours** accueillent gratuitement les futurs parents et les familles de jeunes enfants, dans les 18e et 20e arrondissements. On peut y rencontrer d'autres parents, participer à un atelier avec son bébé ou simplement trouver un espace pour échanger et se renseigner sur la petite enfance.

Ces lieux municipaux s'adressent aussi aux proches et aux personnes qui accompagnent les familles, comme l'explique la [Ville de Paris](https://www.paris.fr/pages/deux-maisons-des-1000-premiers-jours-ouvrent-leurs-portes-a-paris-32106). Ce ne sont ni des crèches où confier son enfant ni des cabinets de consultation médicale.

## Que peut-on faire dans ces Maisons ?

L'accueil permet de discuter avec d'autres familles, de jouer avec son enfant et de trouver des informations sur la grossesse, le sommeil, l'éveil ou les modes de garde. Des ateliers et rencontres sont également proposés selon le programme: comptines, éveil artistique, gestes utiles avec un bébé ou échanges avec des professionnels.

**L'accueil libre est différent des ateliers programmés.** Pour venir sans activité particulière, consultez les horaires d'accueil. Pour participer à un atelier, vérifiez au préalable l'âge concerné, les places disponibles et les modalités d'inscription.

## Dans le 18e: la Maison de la rue Cavé

<!-- article-image-body:01 -->

![Vue de la rue Cavé dans le 18e arrondissement de Paris, sans montrer la Maison](/images/articles/2026/11/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes-body-01.webp)

*Photo: [Mbzt](https://commons.wikimedia.org/wiki/File:P1330182_Paris_XVIII_rue_Cave_rwk.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

La [Maison des 1000 premiers jours du 18e](https://www.paris.fr/lieux/maison-des-1000-premiers-jours-du-18eme-arrondissement-20653) se situe **16 rue Cavé**, au rez-de-chaussée du Pôle santé Goutte d'Or, près des métros La Chapelle et Barbès.

**Accueil libre:** mardi, mercredi et jeudi, de **9 h 30 à 12 h 30** et de **14 h à 17 h 30**. Les autres jours, l'accès dépend des activités programmées.

Le lieu propose notamment des groupes de parole pour futurs parents, des comptines et des ateliers de prévention. La fiche municipale confirme la présence de toilettes, d'une **table à langer** et d'un accès pour les personnes à mobilité réduite.

**Contact:** 01 53 41 18 99.

**Fermetures annoncées:** jeudi 19 novembre 2026, pas d'accueil le matin et ouverture de 14 h à 17 h; fermeture du 25 décembre 2026 au 1er janvier 2027 inclus. Vérifiez la fiche avant votre visite.

## Dans le 20e: la Maison du passage des Tourelles

La [Maison des 1000 premiers jours du 20e](https://www.paris.fr/lieux/maison-des-1000-premiers-jours-du-20eme-arrondissement-20652) accueille les familles au **9 passage des Tourelles**, près du métro Porte des Lilas.

**Horaires affichés:**
- Lundi: 14 h à 17 h 30.
- Mardi, mercredi et jeudi: 9 h 30 à 12 h 30 et 14 h à 17 h 30.
- Vendredi: 9 h 30 à 12 h 30.
- Samedi et dimanche: fermé.

Les activités peuvent comprendre des comptines, de la peinture parent-bébé et des rencontres thématiques. Sur place, la Ville indique un fauteuil d'allaitement, des toilettes pour adultes et enfants, une **table à langer** et un accès pour les personnes à mobilité réduite.

**Contact:** 01 84 82 19 02 ou maison1000jours20@paris.fr.

**Fermeture annoncée:** du 28 décembre 2026 au 1er janvier 2027 inclus. Le programme mensuel est consultable sur la fiche de la Maison.

## Quelle Maison choisir ?

La proximité reste le critère le plus simple. La Maison du 18e accueille librement les familles du mardi au jeudi. Celle du 20e propose également le lundi après-midi et le vendredi matin.

Pour l'âge des enfants, la fiche du 18e mentionne principalement les **0 à 2 ans**, tandis que celle du 20e parle des enfants de **moins de deux à trois ans**. Si votre enfant approche de cette limite, contactez directement l'équipe avant de venir.

Les deux lieux disposent d'une table à langer et sont indiqués accessibles aux personnes à mobilité réduite. En revanche, les fiches ne précisent pas toutes les conditions de circulation ou de stationnement des poussettes: contactez la Maison si vous avez un besoin particulier.

## Et pour les enfants plus grands ?

La [CAF de Paris recense 34 lieux d'accueil enfants-parents (LAEP)](https://www.caf.fr/allocataires/caf-de-paris/offre-de-service/vie-personnelle/les-lieux-d-accueil-enfants-parents). Ces espaces de jeu et de rencontre sont gratuits, sans inscription, et accueillent les enfants de moins de 6 ans accompagnés d'un adulte.

Pour un enfant de 3 à 5 ans, un LAEP peut donc être plus adapté. La CAF publie les adresses et les coordonnées des structures parisiennes; leurs jours et horaires varient selon le lieu.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans/ | Écoute, je danse ! à Paris le 5 décembre 2026: spectacle gratuit dès 6 mois | evenements | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | Vacances de la Toussaint 2026 à la Cité des sciences: les ateliers numériques gratuits avec des enfants | sorties | Paris, Paris, Île-de-France
- /articles/sorties/cite-des-sciences-en-famille-tarifs-cite-des-enfants-et-conseils-de-visite/ | Cité des sciences en famille: tarifs, Cité des enfants et conseils de visite | sorties | Paris, Paris, Île-de-France
- /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | Lecture d'hiver gratuite à Paris le 12 décembre 2026: deux séances pour les 1-3 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/evenements/planete-ocean-a-paris-preparer-la-visite-en-famille/ | Planète Océan à Paris: préparer la visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/salon-du-chocolat-paris-2026-avec-des-enfants-quel-billet-choisir-et-quels-ateliers-reserver/ | Salon du Chocolat Paris 2026 avec des enfants: quel billet choisir et quels ateliers réserver | evenements | Paris, Paris, Île-de-France
- /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | Atelier couture gratuit à Paris le 28 novembre 2026: dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/vie-pratique/changer-de-gare-a-paris-avec-des-enfants-preparer-sa-correspondance/ | Changer de gare à Paris avec des enfants: préparer sa correspondance | vie-pratique | Paris, Paris, Île-de-France
- /articles/parentalite/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes/ | Maisons des 1000 premiers jours à Paris: deux adresses pour les parents et les bébés | parentalite | Paris, Paris, Île-de-France
- /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | Atelier bâton de pluie gratuit à Paris le 18 novembre 2026: dès 6 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/spectacle-de-noel-gratuit-a-paris-le-5-decembre-2026-p-tit-loup-et-la-magie-en-famille/ | Spectacle de Noël gratuit à Paris le 5 décembre 2026: Mon p'tit loup magique | evenements | Paris, Paris, Île-de-France
- /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | Bricolages de Noël gratuits à Paris le 19 décembre 2026: un atelier dès 4 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-deco-de-noel-gratuit-a-paris-le-28-novembre-2026-creer-en-recup-art-des-8-ans/ | Atelier déco de Noël gratuit à Paris le 28 novembre 2026: bricolage dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/sorties/soiree-jeux-gratuite-a-paris-le-21-novembre-2026-jeux-video-et-jeux-de-societe-en-famille/ | Soirée jeux gratuite à Paris le 21 novembre 2026: jeux vidéo et jeux de société en famille | sorties | Paris, Paris, Île-de-France
- /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | Atelier Calder à Paris le 14 novembre 2026: fabriquer un mobile dès 5 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | Contes gratuits à Paris le 14 novembre 2026: trois rendez-vous en famille | evenements | Paris, Paris, Île-de-France
- /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | Atelier Pokémon et biodiversité à Paris le 28 novembre 2026: dessin dès 10 ans | activites | Paris, Paris, Île-de-France
- /articles/parentalite/laep-dans-le-tarn-ou-aller-avec-son-enfant/ | LAEP dans le Tarn: où aller avec son enfant ? | parentalite | Tarn, Occitanie
- /articles/parentalite/lieux-d-accueil-enfants-parents-dans-le-var-ou-aller-avec-son-enfant/ | Lieux d'accueil enfants-parents dans le Var: où aller avec son enfant ? | parentalite | Var, Provence-Alpes-Côte d’Azur
- /articles/parentalite/cafes-parents-enfants-dans-le-finistere-deux-adresses-pour-jouer-et-faire-une-pause/ | Cafés parents-enfants dans le Finistère: deux adresses pour jouer et faire une pause | parentalite | Finistère, Bretagne
- /articles/parentalite/parents-en-deux-sevres-ou-trouver-une-ecoute-et-un-accompagnement/ | Parents en Deux-Sèvres: où trouver une écoute et un accompagnement ? | parentalite | Deux-Sèvres, Nouvelle-Aquitaine

### Historique Radar lié

- opportunity | /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | 2026-11-05T16:36:05.180Z
- opportunity | /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | 2026-11-05T04:36:26.347Z
- opportunity | /articles/activites/atelier-deco-de-noel-gratuit-a-paris-le-28-novembre-2026-creer-en-recup-art-des-8-ans/ | 2026-11-05T23:35:44.031Z
- opportunity | /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | 2026-11-06T12:30:50.449Z
- opportunity | /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | 2026-11-06T03:27:40.597Z
- opportunity | /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | 2026-11-05T13:27:24.356Z
- opportunity | /articles/evenements/ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans/ | 2026-11-04T21:32:12.180Z
- opportunity | /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | 2026-11-06T09:33:42.136Z
- opportunity | /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | 2026-10-06T19:20:39.093Z
- opportunity | /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | 2026-11-05T10:32:54.471Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
