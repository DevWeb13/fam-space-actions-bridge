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

Soumets le résultat via `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet. **Ne recopie aucun bloc `radar` et ne fournis aucune branche ni aucun SHA.** La plomberie mécanique conserve le diagnostic GSC, la cible, le slug et les champs protégés.

## Candidat validé de la phase précédente

---
title: "EduConnect pour les parents: activer son compte et retrouver les démarches scolaires"
subtitle: Un seul accès pour les enfants du foyer, l'ENT, le livret scolaire et les services proposés par l'établissement
summary: "Première connexion, enfant absent, numéro non reconnu: les étapes utiles pour accéder à EduConnect et Scolarité Services sans tourner en rond."
slug: educonnect-pour-les-parents-activer-son-compte-et-retrouver-les-demarches-scolaires
status: published
publishedAt: 2026-09-12T20:02:41+02:00
updatedAt: 2026-09-13T13:24:24+02:00
category: parentalite
readingTime: 4
topic:
  key: parentalite|france|educonnect-pour-les-parents-activer-son-compte-et-retrouver-les-demarches-scolaires|2026
  keywords:
    - EduConnect parents
    - Scolarité Services
image:
  src: /images/articles/2026/09/educonnect-pour-les-parents-activer-son-compte-et-retrouver-les-demarches-scolaires.webp
  alt: Enfants utilisant un ordinateur portable, illustration des services numériques liés à la scolarité
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/parentalite/(2026)/(09)/educonnect-pour-les-parents-activer-son-compte-et-retrouver-les-demarches-scolaires/index.md
  targetSha: 23219f53f3d3bbd07e3a9a08c51588e1ae790de5
  targetUrl: /articles/parentalite/educonnect-pour-les-parents-activer-son-compte-et-retrouver-les-demarches-scolaires/
  decision: Activer ou récupérer l'accès parent ÉduConnect avec la bonne méthode, puis rattacher un enfant absent sans créer de comptes inutiles.
  affiliationPotential: "Aucune affiliation naturelle: accès public gratuit, activation et assistance officielles."
  gsc:
    retrievedAt: 2026-10-15T06:53:46.851Z
    dataThrough: 2026-10-12
    signal: uncertain
    basis: Baisse non attribuable au classement; 0 requêtes comparables.
    peakStart: 2026-09-15
    peakEnd: 2026-09-21
    recentStart: 2026-10-06
    recentEnd: 2026-10-12
    peakImpressions: 209
    recentImpressions: 42
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - educonnect parents
      - est ce que educonnect fonctionne
      - educonnect espace parent
      - educonnect parent
      - il me manque un enfant sur educonnect
---

## Mission retenue
Actualiser l'article ÉduConnect pour les parents. Corriger l'affirmation selon laquelle le téléphone portable est indispensable à toute activation: le parcours officiel actuel propose **SMS ou courriel**, à condition que le numéro ou l'adresse aient déjà été communiqués à l'établissement. Expliquer concrètement le rattachement d'un enfant absent.

## Pourquoi cette mission
Le snapshot GSC au 12 octobre classe ÉduConnect parmi les refreshs prioritaires (209 impressions en semaine haute contre 42 récemment, signal **uncertain**, aucune requête comparable: ne pas attribuer cette baisse à une perte de classement). Les recherches «educonnect parent» et «il me manque un enfant sur educonnect» correspondent à deux corrections indépendamment vérifiées. La Carte Tattoo Isère, mieux classée dans le snapshot, couvre déjà les montants et démarches essentiels sans défaut confirmé. Une expansion autour des pages fortes sur les transports parisiens ou Futuroween risquerait de redoubler leurs guides existants; l'opportunité saisonnière Chambord à la Toussaint dispose déjà d'un guide complet sur le château, tandis que la Publication active traite le Musée de la Bière à Stenay. Le refresh ÉduConnect corrige une information pratique erronée, utile toute l'année.

## Décision du lecteur
Identifier la voie d'activation ou de récupération réellement possible avec les coordonnées déjà enregistrées, puis faire apparaître tous ses enfants dans le compte représentant légal.

## Faits à traiter
- **Activation:** la page d'activation officielle actuelle propose «Par SMS» et «Par mail»; l'un des deux contacts doit déjà être connu de l'école ou de l'établissement. L'ancienne page générale du ministère indique encore «numéro indispensable»: signaler le décalage documentaire, sans prétendre que le courriel est toujours possible si non enregistré.
- **Enfant manquant:** l'assistance officielle recommande de demander à l'établissement les identifiants provisoires de l'autre compte, puis dans le compte actif: **«Mon Compte» > «Mes enfants» > «Ajouter des enfants depuis un autre compte»**. Pour une erreur d'état civil ou de coordonnées, demander correction à l'établissement; délai indiqué de 24 à 48 heures pour certaines modifications.
- **Récupération:** identifiant et mot de passe oubliés peuvent être récupérés par SMS ou courriel lorsque les coordonnées du compte le permettent; sinon contacter l'établissement.
- **Anti-régression:** conserver les informations toujours utiles de l'article: un compte responsable pour plusieurs enfants, accès Scolarité Services et FranceConnect, différence avec l'ENT, démarches variables selon établissement et période, «Mes services», assistance en ligne, numéro national **0 809 54 06 06** et horaires **lundi-vendredi 8h-20h, samedi 8h-12h**. Ne pas multiplier les répétitions de ces conseils ni retirer les cas particuliers.
- Le lien de l'article existant vers le portail officiel est une démarche gratuite sans concurrence commerciale.

## Sources de départ
- Activation actuelle, choix SMS/courriel: https://moncompte.educonnect.education.gouv.fr/educt-self-service/activation/nouveauParcoursUtilisateur
- Assistance officielle, enfant absent, téléphone non reconnu, délai de correction: https://assistanceteleservices.education.gouv.fr/
- Récupération identifiant: https://moncompte.educonnect.education.gouv.fr/educt-self-service/oubliLogin/recupererLoginResponsable
- Récupération mot de passe: https://moncompte.educonnect.education.gouv.fr/educt-self-service/oubliMdp/recupererMotDePasseResponsable
- Présentation générale du ministère (texte plus ancien sur le téléphone): https://www.education.gouv.fr/educonnect-un-compte-unique-pour-suivre-et-accompagner-la-scolarite-de-mon-enfant-455196

## Affiliation
Aucune offre partenaire adaptée à cette démarche publique et gratuite; ne pas ajouter d'hébergement ni de liens commerciaux.

## Continuations internes
Aucun article Fam Space voisin ne traite précisément du rattachement ÉduConnect. Préserver les liens officiels utiles et éviter de développer ici les procédures détaillées de bourse, d'inscription ou d'orientation: expliquer où les retrouver dans Scolarité Services.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/parentalite/(2026)/(09)/educonnect-pour-les-parents-activer-son-compte-et-retrouver-les-demarches-scolaires/index.md

---
title: "EduConnect pour les parents: activer son compte et retrouver les démarches scolaires"
subtitle: Un seul accès pour les enfants du foyer, l'ENT, le livret scolaire et les services proposés par l'établissement
summary: "Première connexion, enfant absent, numéro non reconnu: les étapes utiles pour accéder à EduConnect et Scolarité Services sans tourner en rond."
slug: educonnect-pour-les-parents-activer-son-compte-et-retrouver-les-demarches-scolaires
status: published
publishedAt: 2026-09-12T20:02:41+02:00
updatedAt: 2026-09-13T13:24:24+02:00
category: parentalite
readingTime: 4
topic:
  key: parentalite|france|educonnect-pour-les-parents-activer-son-compte-et-retrouver-les-demarches-scolaires|2026
  keywords:
    - EduConnect parents
    - Scolarité Services
image:
  src: "/images/articles/2026/09/educonnect-pour-les-parents-activer-son-compte-et-retrouver-les-demarches-scolaires.webp"
  alt: "Enfants utilisant un ordinateur portable, illustration des services numériques liés à la scolarité"
---
<!-- article-image-credit -->
*Photo: [Wikipresence](https://commons.wikimedia.org/wiki/File:Kids_with_laptop.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Entre l'ENT, le livret scolaire et les démarches administratives, les accès numériques de l'école peuvent vite devenir confus. Pour les familles concernées, EduConnect sert justement de compte unique: un même identifiant permet de retrouver les services associés à tous ses enfants, de l'école au lycée.

Le plus simple est de commencer par le portail officiel [Scolarité Services](https://teleservices.education.gouv.fr/). Les parents peuvent s'y connecter avec leur compte EduConnect ou avec FranceConnect.

## Faut-il créer un compte différent pour chaque enfant?

Non. Un représentant légal utilise un seul compte EduConnect pour l'ensemble de ses enfants rattachés à son dossier. Le ministère précise que ce compte suit la famille tout au long de la scolarité, de l'école au lycée.

Une fois connecté, il peut donner accès, selon l'établissement et la période, à plusieurs services:

- l'ENT de l'établissement;
- le livret scolaire;
- la fiche de renseignements;
- certaines inscriptions en ligne;
- les démarches de bourse;
- les démarches d'orientation;
- d'autres services activés par l'école, le collège ou le lycée.

Tous les établissements ne proposent donc pas exactement les mêmes écrans. Si une démarche attendue n'apparaît pas, cela ne signifie pas forcément que le compte fonctionne mal: certains services ne sont ouverts qu'à certaines périodes ou seulement lorsque l'établissement les a activés.

## Première connexion: le numéro de téléphone est le point à vérifier

Pour activer un compte EduConnect directement, le numéro de téléphone portable communiqué lors de l'inscription de l'enfant ou dans sa fiche de renseignements est indispensable.

Il faut donc utiliser le numéro déjà connu de l'établissement. Si ce numéro a changé, ou s'il n'est pas reconnu, mieux vaut éviter de multiplier les tentatives avec d'autres numéros: l'établissement peut vérifier et corriger les coordonnées enregistrées.

L'autre possibilité est de se connecter avec FranceConnect depuis [Scolarité Services](https://teleservices.education.gouv.fr/). Cela évite d'avoir à mémoriser un identifiant EduConnect supplémentaire lorsque le parent utilise déjà un compte compatible avec FranceConnect.

## Un enfant n'apparaît pas dans le compte: que faire?

Avant de créer un second compte, il faut vérifier le rattachement. Le compte EduConnect est justement prévu pour regrouper les enfants d'un même représentant légal.

Le ministère propose une [assistance dédiée aux démarches en ligne](https://assistanceteleservices.education.gouv.fr/) pour les principaux blocages. Elle traite notamment les cas où le numéro de téléphone n'est pas reconnu ou lorsqu'un enfant n'apparaît pas dans le compte.

Si la date de naissance de l'enfant est refusée, l'assistance indique de contacter l'établissement afin qu'il la rectifie dans son dossier. Après modification, la prise en compte peut demander 24 à 48 heures.

## Où retrouver les démarches scolaires une fois connecté?

Après connexion, le portail Scolarité Services regroupe les services disponibles pour chaque enfant. Le ministère indique que le portail est accessible 7 jours sur 7 et 24 heures sur 24, depuis un ordinateur, un smartphone ou une tablette.

La rubrique « Mes services » permet de voir ce qui est actuellement proposé. Au collège et au lycée, cela peut notamment concerner l'orientation, les inscriptions, les bourses ou la consultation du livret scolaire. À l'école élémentaire, l'offre est plus limitée.

Il faut garder en tête qu'une démarche peut disparaître une fois sa période terminée. Pour une inscription ou une orientation, le calendrier et les modalités restent ceux communiqués par l'établissement.

## EduConnect et ENT: ce n'est pas forcément deux comptes différents

EduConnect est le compte d'authentification national. L'ENT est l'espace numérique utilisé localement par l'établissement ou la collectivité. Selon l'organisation mise en place, EduConnect peut servir à ouvrir l'ENT sans créer un accès parent séparé.

Le bon réflexe est donc de suivre le lien fourni par l'école, le collège ou le lycée lorsqu'il renvoie vers l'ENT, puis de choisir l'accès EduConnect si celui-ci est proposé.

## En cas de blocage, qui contacter?

Pour un problème lié aux informations de l'enfant, au rattachement du dossier ou à une donnée erronée, l'établissement reste l'interlocuteur utile.

Pour un problème de connexion ou de démarche en ligne, l'Éducation nationale met aussi à disposition son [assistance Scolarité Services](https://assistanceteleservices.education.gouv.fr/). Une plateforme téléphonique nationale est annoncée au **0 809 54 06 06**, au prix d'un appel local, du lundi au vendredi de 8h à 20h et le samedi de 8h à 12h, horaires de métropole.

## Les vérifications à faire avant de conclure que le service ne fonctionne pas

Trois contrôles règlent une bonne partie des problèmes courants:

1. vérifier que le parent utilise bien son compte représentant légal et non celui de l'enfant;
2. vérifier que le numéro de téléphone correspond à celui enregistré par l'établissement;
3. regarder dans « Mes services » si la démarche recherchée est réellement ouverte à cette période.

Si l'enfant manque dans le compte ou qu'une information d'état civil est incorrecte, il vaut mieux faire corriger le dossier à la source plutôt que de recréer plusieurs comptes.

Pour retrouver les informations officielles sur le fonctionnement du compte, le ministère détaille [EduConnect pour les parents](https://www.education.gouv.fr/educonnect-un-compte-unique-pour-suivre-et-accompagner-la-scolarite-de-mon-enfant-455196) et [Scolarité Services](https://www.education.gouv.fr/scolarite-services-un-acces-unique-pour-toutes-les-demarches-scolaires-326158).

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/parentalite/futurs-parents-dans-les-ardennes-quelles-demarches-preparer-avec-la-caf/ | Futurs parents dans les Ardennes: quelles démarches préparer avec la Caf? | parentalite | Charleville-Mézières, Ardennes, Grand Est
- /articles/vie-pratique/cantine-et-periscolaire-a-roanne-les-demarches-avant-la-rentree-2026/ | Cantine et périscolaire à Roanne: les démarches avant la rentrée 2026 | vie-pratique | Roanne, Loire, Auvergne-Rhône-Alpes
- /articles/maison/termites-en-corse-du-sud-les-demarches-a-connaitre-pour-une-maison/ | Termites en Corse-du-Sud: les démarches à connaître pour une maison | maison | Ajaccio, Corse-du-Sud, Corse
- /articles/evenements/premiere-rentree-en-6e-a-dole-un-atelier-gratuit-pour-les-familles/ | Première rentrée en 6e à Dole: un atelier gratuit pour les familles | evenements | Dole, Jura, Bourgogne-Franche-Comté
- /articles/parentalite/bulles-girondines-a-villenave-d-ornon-un-espace-pour-les-parents-et-les-jeunes-enfants/ | Bulles Girondines à Villenave-d'Ornon: un espace pour les parents et les jeunes enfants | parentalite | Villenave-d'Ornon, Gironde, Nouvelle-Aquitaine
- /articles/vie-pratique/frais-scolaires-en-cote-d-or-quelles-aides-demander-au-departement/ | Frais scolaires en Côte-d'Or: quelles aides demander au Département? | vie-pratique | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/biblis-en-folie-2026-en-famille/ | Biblis en folie 2026: trois jours pour découvrir la médiathèque avec les enfants | evenements
- /articles/parentalite/l-ilot-des-familles-a-tarbes-quels-ateliers-pour-les-parents-d-enfants-de-0-a-6-ans/ | L'îlot des Familles à Tarbes: quels ateliers pour les parents d'enfants de 0 à 6 ans? | parentalite | Tarbes, Hautes-Pyrénées, Occitanie
- /articles/parentalite/laep-a-bastia-et-en-balagne-deux-lieux-gratuits-pour-les-tout-petits/ | LAEP à Bastia et en Balagne: deux lieux gratuits pour les tout-petits | parentalite | Bastia, Haute-Corse, Corse
- /articles/parentalite/kaz-1000-jours-au-port-ateliers-gratuits-pour-les-futurs-et-jeunes-parents/ | Kaz’1000 jours au Port: ateliers gratuits pour les futurs et jeunes parents | parentalite | Le Port, La Réunion, La Réunion
- /articles/parentalite/laep-dans-le-cantal-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP dans le Cantal: où aller avec un enfant de moins de 6 ans | parentalite | Aurillac, Cantal, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-a-caen-4-lieux-pour-venir-avec-un-enfant-sans-inscription/ | LAEP à Caen: 4 lieux pour venir avec un enfant sans inscription | parentalite | Caen, Calvados, Normandie
- /articles/parentalite/cercles-de-parents-en-cote-d-or-trois-seances-gratuites-pour-echanger-pendant-les-premieres-annees/ | Cercles de Parents en Côte-d'Or: trois séances gratuites pour échanger pendant les premières années | parentalite | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/parentalite/laep-en-seine-et-marne-ou-aller-et-comment-se-passe-une-premiere-visite/ | LAEP en Seine-et-Marne: où aller et comment se passe une première visite? | parentalite | Meaux, Seine-et-Marne, Île-de-France
- /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP à Nantes: où aller avec un enfant de moins de 6 ans? | parentalite | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/parentalite/montchavin-les-coches-avec-un-bebe-garderie-horaires-et-sejour-d-hiver/ | Montchavin-Les Coches avec un bébé: garderie, horaires et séjour d'hiver | parentalite | Montchavin-Les Coches, Savoie, Auvergne-Rhône-Alpes
- /articles/parentalite/maison-des-parents-a-guingamp-quand-y-aller-et-quel-service-choisir/ | Maison des Parents à Guingamp: quand y aller et quel service choisir ? | parentalite | Guingamp, Côtes-d'Armor, Bretagne
- /articles/parentalite/chateau-de-chamerolles-en-famille-visite-libre-ou-guidee-en-2026/ | Château de Chamerolles en famille: visite libre ou guidée en 2026 ? | parentalite | Chilleurs-aux-Bois, Loiret, Centre-Val de Loire
- /articles/parentalite/visiter-le-chateau-de-versailles-avec-un-bebe-poussette-billets-et-parcours/ | Visiter le château de Versailles avec un bébé: poussette, billets et parcours | parentalite | Versailles, Yvelines, Île-de-France
- /articles/parentalite/la-maison-des-petits-pas-a-troyes-un-lieu-pour-souffler-avec-son-jeune-enfant/ | La Maison des Petits Pas à Troyes: un lieu pour souffler avec son jeune enfant | parentalite | Troyes, Aube, Grand Est
- /articles/parentalite/cafe-papote-a-lyon-4e-ou-echanger-gratuitement-avec-d-autres-parents/ | Café Papote à Lyon 4e: où échanger gratuitement avec d'autres parents | parentalite | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/parentalite/creche-a-clermont-ferrand-quand-deposer-la-pre-inscription-et-comment-la-faire/ | Crèche à Clermont-Ferrand: quand déposer la pré-inscription et comment la faire | parentalite | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes

### Historique Radar lié

- Aucun historique lié.

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
