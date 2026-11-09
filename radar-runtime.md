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

Soumets le résultat via `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet. **Ne recopie aucun bloc `radar` et ne fournis aucune branche ni aucun SHA.** La plomberie mécanique conserve le diagnostic GSC, la cible, le slug et les champs protégés.

## Candidat validé de la phase précédente

---
title: "Ludothèques du Grand Nancy: où jouer en famille et emprunter des jeux"
subtitle: Trois adresses à Nancy, Vandœuvre et Villers, avec des conditions d’accueil différentes
summary: "Jeu sur place, tarifs, inscription et prêt: les repères utiles pour découvrir trois ludothèques du Grand Nancy avec ses enfants."
slug: ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux
status: published
publishedAt: 2026-10-31T03:46:28+01:00
updatedAt: null
category: parentalite
readingTime: 5
publicationOrigin: region
location:
  city: ""
  department: Meurthe-et-Moselle
  region: Grand Est
topic:
  key: parentalite|meurthe-et-moselle|ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux|2026
  keywords:
    - ludothèques du Grand Nancy
    - jeux en famille
    - prêt de jeux
image:
  src: /images/articles/2026/10/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux.webp
  alt: Façade de la médiathèque de la Manufacture à Nancy, dans le pôle culturel accueillant la ludothèque Saint-Nicolas
sources:
  - title: Ville de Nancy, ludothèque Saint-Nicolas
    url: https://www.nancy.fr/culture/bibliotheques-mediatheques-de-nancy/ludotheque-saint-nicolas
  - title: Réseau Co-libris, ludothèque
    url: https://www.reseau-colibris.fr/iguana/www.main.cls?surl=ludotheque
  - title: Ville de Nancy, inscription et tarifs des bibliothèques
    url: https://www.nancy.fr/culture/bibliotheques-mediatheques-de-nancy/sinscrire
  - title: Ville de Vandœuvre, ludothèque
    url: https://www.vandoeuvre.fr/fiche-annuaire/ludotheque/
  - title: Ludothèque de Vandœuvre, conditions d’accès et tarifs
    url: https://www.ludotheque.vandoeuvre.net/
  - title: Ville de Vandœuvre, règlement intérieur de la ludothèque
    url: https://www.vandoeuvre.fr/wp-content/uploads/2021/03/reglement-interieur-Ludotheque.pdf
  - title: Ludothèque de Vandœuvre, prêt de jeux
    url: https://www.ludotheque.vandoeuvre.net/pret-de-jeux/
  - title: Ville de Villers-lès-Nancy, présentation de la ludothèque
    url: https://www.villerslesnancy.fr/mon-quotidien/petite-enfance/la-ludotheque-jouer-sepanouir-ensemble
  - title: Ville de Villers-lès-Nancy, règlement intérieur de la ludothèque
    url: https://www.villerslesnancy.fr/fileadmin/user_upload/reglement.pdf
affiliate:
  enabled: true
  type: travel
  destination: Meurthe-et-Moselle
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/parentalite/(2026)/(10)/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/index.md
  targetSha: a06172029bdd27868e2254713a1940920222a94b
  targetUrl: /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/
  decision: Choisir une ludothèque réellement accessible selon le jour, l'âge des enfants, le budget et le souhait d'emprunter, puis pouvoir contacter le lieu avant de se déplacer.
  affiliationPotential: Conserver l'hébergement Booking déjà présent pour un séjour à Nancy; aucune nouvelle affiliation naturelle pour les ludothèques.
  gsc:
    retrievedAt: 2026-11-09T06:27:46+01:00
    dataThrough: 2026-11-07
    signal: uncertain
    basis: "Visibilité récente : 107 impressions sur trois jours, puis 3 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-02
    peakEnd: 2026-11-04
    recentStart: 2026-11-05
    recentEnd: 2026-11-07
    peakImpressions: 107
    recentImpressions: 3
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0.055
    focusQueries:
      - ludothèque nancy
      - ludothèque
      - ludothèque villers les nancy
      - ludotheque
      - ludothèque vandoeuvre les nancy
---

## Mission retenue
Actualiser le guide comparant Saint-Nicolas à Nancy, la ludothèque municipale de Vandœuvre et celle de Villers-lès-Nancy.

## Pourquoi cette mission
Signal GSC de chute rapide, sans preuve de sa cause. Lacune éditoriale indépendante: l'article ne donne aucun contact direct pour confirmer une séance, alors que les organismes publient des coordonnées. La ville de Vandœuvre précise aussi que le vendredi scolaire est réservé aux écoles et partenaires, information absente du guide.

## Décision du lecteur
Savoir où jouer gratuitement ou moyennant une entrée, où emprunter et à quelles conditions, puis vérifier directement l'accueil avant de partir avec des enfants.

## Faits à traiter
- Ajouter les contacts officiels utiles et vérifiés: Saint-Nicolas 03 83 25 55 70, ludotheque@mairie-nancy.fr; Villers 06 49 24 38 14, rpe.villers@villerslesnancy.fr. Vérifier un contact direct fiable pour Vandœuvre avant de l'ajouter.
- À Vandœuvre, expliciter la fermeture au public le vendredi en période scolaire, journée réservée aux écoles et partenaires. Confirmer les modalités hors période scolaire sans les inventer.
- Préserver intégralement les trois adresses, horaires, prix résidents/non-résidents, règles de séance, prêts de 28 et 15 jours, conditions d'inscription, poussettes, chaussettes, fermeture de fin d'année à Villers, lien transport, image et crédit, et hébergement Booking.
- Ne pas attribuer la baisse GSC à une cause SEO non démontrée; ne pas réécrire pour allonger.

## Sources de départ
- https://www.nancy.fr/culture/bibliotheques-mediatheques-de-nancy/ludotheque-saint-nicolas
- https://www.grandnancy.eu/agenda/details-lieu-agenda?place=9
- https://www.vandoeuvre.fr/fiche-annuaire/ludotheque/
- https://www.villerslesnancy.fr/mon-quotidien/petite-enfance/la-ludotheque-jouer-sepanouir-ensemble

## Affiliation
Conserver le lien Booking existant pour les familles en séjour à Nancy. Ne pas ajouter d'offre artificielle pour les services de proximité.

## Continuations internes
- Conserver le renvoi vers le guide des transports à Nancy plutôt que détailler les itinéraires.
- Pour les horaires exceptionnels, renvoyer aux pages des établissements et signaler les changements datés seulement s'ils sont vérifiés.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/parentalite/(2026)/(10)/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/index.md

---
title: "Ludothèques du Grand Nancy: où jouer en famille et emprunter des jeux"
subtitle: Trois adresses à Nancy, Vandœuvre et Villers, avec des conditions d’accueil différentes
summary: "Jeu sur place, tarifs, inscription et prêt: les repères utiles pour découvrir trois ludothèques du Grand Nancy avec ses enfants."
slug: ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux
status: published
publishedAt: 2026-10-31T03:46:28+01:00
updatedAt: null
category: parentalite
readingTime: 5
publicationOrigin: region
location:
  city: ""
  department: Meurthe-et-Moselle
  region: Grand Est
topic:
  key: parentalite|meurthe-et-moselle|ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux|2026
  keywords:
    - ludothèques du Grand Nancy
    - jeux en famille
    - prêt de jeux
image:
  src: "/images/articles/2026/10/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux.webp"
  alt: "Façade de la médiathèque de la Manufacture à Nancy, dans le pôle culturel accueillant la ludothèque Saint-Nicolas"
sources:
  - title: Ville de Nancy, ludothèque Saint-Nicolas
    url: https://www.nancy.fr/culture/bibliotheques-mediatheques-de-nancy/ludotheque-saint-nicolas
  - title: Réseau Co-libris, ludothèque
    url: https://www.reseau-colibris.fr/iguana/www.main.cls?surl=ludotheque
  - title: Ville de Nancy, inscription et tarifs des bibliothèques
    url: https://www.nancy.fr/culture/bibliotheques-mediatheques-de-nancy/sinscrire
  - title: Ville de Vandœuvre, ludothèque
    url: https://www.vandoeuvre.fr/fiche-annuaire/ludotheque/
  - title: Ludothèque de Vandœuvre, conditions d’accès et tarifs
    url: https://www.ludotheque.vandoeuvre.net/
  - title: Ville de Vandœuvre, règlement intérieur de la ludothèque
    url: https://www.vandoeuvre.fr/wp-content/uploads/2021/03/reglement-interieur-Ludotheque.pdf
  - title: Ludothèque de Vandœuvre, prêt de jeux
    url: https://www.ludotheque.vandoeuvre.net/pret-de-jeux/
  - title: Ville de Villers-lès-Nancy, présentation de la ludothèque
    url: https://www.villerslesnancy.fr/mon-quotidien/petite-enfance/la-ludotheque-jouer-sepanouir-ensemble
  - title: Ville de Villers-lès-Nancy, règlement intérieur de la ludothèque
    url: https://www.villerslesnancy.fr/fileadmin/user_upload/reglement.pdf
affiliate:
  enabled: true
  type: travel
  destination: Meurthe-et-Moselle
---
<!-- article-image-credit -->
*Photo: [G.Garitan](https://commons.wikimedia.org/wiki/File:Cour_wresinsky_m%C3%A9diath%C3%A8que_Nancy_1100231.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Découvrir un jeu avec son tout-petit, partager une partie avec les plus grands ou emprunter une boîte pour le week-end: les ludothèques permettent de varier les plaisirs sans multiplier les achats. À Nancy, Vandœuvre-lès-Nancy et Villers-lès-Nancy, en Meurthe-et-Moselle, voici trois adresses pour jouer en famille.

**Le jeu sur place est gratuit à Nancy et à Villers, payant à Vandœuvre. Le prêt est possible à Nancy et à Vandœuvre, mais pas à Villers.** Les conditions d’inscription diffèrent aussi d’un établissement à l’autre.

Pour préparer le trajet, notre guide pour [se déplacer à Nancy en famille](/articles/vie-pratique/se-deplacer-a-nancy-en-famille-gratuites-bus-et-parkings-relais/) détaille les gratuités, les bus avec une poussette et les parkings relais.

## Trois lieux pour jouer sur place

### À Nancy, des espaces pour les tout-petits et les longues parties

La **ludothèque Saint-Nicolas se trouve au pôle culturel de la Manufacture, au 8 rue Baron-Louis**. Les enfants y jouent gratuitement, accompagnés d’un adulte.

On y trouve un espace de jeu libre pour les découvertes sensorielles et la motricité des tout-petits, des tables de jeux de société et une salle à réserver pour les parties de plus de 45 minutes. La [page municipale de Saint-Nicolas](https://www.nancy.fr/culture/bibliotheques-mediatheques-de-nancy/ludotheque-saint-nicolas) permet d’accéder à cette réservation.

Les horaires habituels sont du mardi au samedi, de **11 h à 18 h**, hors jours fériés. Pour novembre 2026, le [réseau Co-libris](https://www.reseau-colibris.fr/iguana/www.main.cls?surl=ludotheque) signale une fermeture le 11 novembre et une ouverture à 13 h les 12 et 19 novembre.

### À Vandœuvre, une entrée à la séance ou une adhésion familiale

La ludothèque municipale accueille les enfants de tous âges au **1 rue Gabriel-Péri, place du Marché**, avec un accompagnateur majeur.

Les [tarifs affichés par la Ville de Vandœuvre](https://www.vandoeuvre.fr/fiche-annuaire/ludotheque/) dépendent du domicile:

- Famille domiciliée à Vandœuvre: **16,85 € par an**, ou **2,05 € par personne** pour une séance.
- Famille domiciliée ailleurs: **69,70 € par an**, ou **7,05 € par personne** pour une séance.

À la séance, chaque enfant et chaque adulte paient leur entrée. L’adhésion annuelle couvre les parents et leurs enfants. Une adhésion grands-parents et petits-enfants est également prévue, mais elle n’inclut pas les parents, selon le [règlement intérieur](https://www.vandoeuvre.fr/wp-content/uploads/2021/03/reglement-interieur-Ludotheque.pdf).

Pour l’adhésion, le [site de la ludothèque](https://www.ludotheque.vandoeuvre.net/) demande une pièce d’identité, le livret de famille et un justificatif de domicile de moins de trois mois. Les tarifs sont révisables chaque année.

Prévoyez environ une heure trente sur place. La Ville et le site de la ludothèque annoncent une séance par semaine, tandis que le règlement prévoit une à deux visites selon l’affluence. Faites confirmer cette possibilité par l’équipe avant de prévoir un second passage dans la semaine.

L’accueil du public a lieu:

- Les mardis et jeudis, de **9 h à 12 h et de 16 h à 18 h**.
- Les mercredis et samedis, de **9 h à 12 h et de 14 h à 18 h**.

Le règlement interdit les nouvelles entrées dans les espaces de jeu pendant les 30 minutes précédant la fermeture. On se déchausse sur place, avec la possibilité d’apporter des chaussons. L’établissement ferme les jours fériés et une semaine entre Noël et le Nouvel An, aux dates communiquées par la Ville.

### À Villers, un accueil gratuit, sans prêt de jeux

Au **centre socioculturel Olivier Airaud, 16 boulevard du Docteur-Cattenoz**, la ludothèque propose des jeux d’éveil, de construction, d’imitation et de société. L’accès et le jeu sur place sont gratuits.

Les horaires publiés par la [Ville de Villers-lès-Nancy](https://www.villerslesnancy.fr/mon-quotidien/petite-enfance/la-ludotheque-jouer-sepanouir-ensemble) sont:

- Le mercredi, de **9 h à 12 h 15 et de 14 h à 18 h**.
- Le samedi, de **9 h à 12 h 15 et de 13 h 30 à 16 h**.

Une **fermeture est annoncée du 19 décembre 2026 au 3 janvier 2027**. Pour les vacances scolaires, vérifiez les éventuelles adaptations sur la page municipale.

Le [règlement intérieur](https://www.villerslesnancy.fr/fileadmin/user_upload/reglement.pdf) prévoit une fiche familiale à remplir dès la première visite et la présence d’un adulte durant toute la séance pour les moins de 11 ans. **Les chaussettes sont obligatoires**, car on se déchausse. Les poussettes restent dans l’entrée du centre. Les jeux ne peuvent pas être empruntés.

## Emprunter des jeux à Nancy ou à Vandœuvre

### À Saint-Nicolas, un jeu pour 28 jours

Une carte des Bibliothèques de Nancy ou d’une médiathèque Co-libris permet d’emprunter **un jeu pour 28 jours**, avec retrait et retour uniquement à Saint-Nicolas. Cet accès avec la carte Co-libris ne s’étend pas automatiquement aux autres ludothèques, qui conservent leurs propres conditions, comme le précise le [réseau](https://www.reseau-colibris.fr/iguana/www.main.cls?surl=ludotheque).

Si vous devez vous inscrire aux Bibliothèques de Nancy, prévoyez une pièce d’identité et, pour un mineur, une autorisation parentale. L’abonnement annuel est gratuit pour les Nancéiens, les moins de 26 ans, les étudiants et les bénéficiaires des minima sociaux, sur justificatif. Les autres adultes résidant hors Nancy paient **24 € par an**, selon les [modalités municipales d’inscription](https://www.nancy.fr/culture/bibliotheques-mediatheques-de-nancy/sinscrire).

### À Vandœuvre, un prêt réservé aux adhérents

Le prêt dure **15 jours maximum** et nécessite la signature d’une convention. L’équipe vérifie les boîtes avant le départ, puis en votre présence au retour: prévoyez du temps pour la restitution.

Vous devez également contrôler le contenu chez vous avant de rapporter les jeux et signaler toute pièce manquante. En cas de perte ou de détérioration, un remplacement à l’identique ou un remboursement peut être demandé. La [page consacrée au prêt](https://www.ludotheque.vandoeuvre.net/pret-de-jeux/) détaille ces conditions. Apportez votre carte d’adhésion valide et un sac.

## Trouver un jeu qui convient à toute la famille

Pour demander conseil, décrivez une situation concrète: une partie à trois sans lecture, un jeu court avec une petite sœur, ou une boîte à essayer avant un achat. Cela aide l’équipe à vous orienter au-delà de l’âge indiqué sur l’emballage.

À Vandœuvre, le règlement précise que les ludothécaires expliquent les règles et guident les joueurs, tandis que l’adulte accompagnateur reste responsable des enfants et participe au jeu. Prévoyez donc une séance à partager avec eux.

## Si vous passez le week-end à Nancy

Une séance du samedi peut trouver sa place entre deux visites en ville. Pour un séjour avec des enfants, vous pouvez [réserver un appartement avec cuisine à l’Adagio Access Nancy Centre](https://www.booking.com/hotel/fr/adagio-access-nancy-centre.fr.html). L’établissement propose notamment des appartements pour quatre personnes, pratiques pour préparer un repas sur place. Indiquez le nombre d’enfants et leurs âges pour vérifier le logement disponible et les conditions à vos dates.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/vie-pratique/ludotheques-dans-le-gers-ou-jouer-et-emprunter-des-jeux-en-famille/ | Ludothèques dans le Gers: où jouer et emprunter des jeux en famille | vie-pratique | Auch, Gers, Occitanie
- /articles/parentalite/ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille/ | Ludothèque du Choletais: jouer sur place et emprunter en famille | parentalite | Cholet, Maine-et-Loire, Pays de la Loire
- /articles/vie-pratique/ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison/ | Ludothèques autour de Dinan: emprunter des jeux pour la maison | vie-pratique | Côtes-d'Armor, Bretagne
- /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | Fêtes de Saint-Nicolas 2026 à Nancy en famille: défilé, villages et animations | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/vie-pratique/emprunter-des-jeux-a-tours-mirabeau-ou-la-maison-des-jeux/ | Emprunter des jeux à Tours: Mirabeau ou la Maison des Jeux? | vie-pratique | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/maison/emprunter-un-broyeur-a-grand-chambery-electrique-ou-thermique-que-choisir/ | Emprunter un broyeur à Grand Chambéry: électrique ou thermique, que choisir? | maison | Chambéry, Savoie, Auvergne-Rhône-Alpes
- /articles/bons-plans/musee-fermat-en-famille-jeux-tarifs-et-visite-avec-des-enfants/ | Musée Fermat en famille: jeux, tarifs et visite avec des enfants | bons-plans | Beaumont-de-Lomagne, Tarn-et-Garonne, Occitanie
- /articles/evenements/festival-cite-en-jeux-2026-a-colomiers-quel-jour-choisir-avec-des-enfants/ | Festival Cité en Jeux 2026 à Colomiers: quel jour choisir avec des enfants | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/evenements/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/ | Saint-Nicolas-de-Port 2026 en famille: village, défilé et procession | evenements | Saint-Nicolas-de-Port, Meurthe-et-Moselle, Grand Est
- /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | Ludothèques du Grand Nancy: où jouer en famille et emprunter des jeux | parentalite | Meurthe-et-Moselle, Grand Est
- /articles/maison/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/ | Meubles d'occasion en Meurthe-et-Moselle: où acheter, donner et réparer ? | maison | Meurthe-et-Moselle, Grand Est
- /articles/vie-pratique/se-deplacer-a-nancy-en-famille-gratuites-bus-et-parkings-relais/ | Se déplacer à Nancy en famille: gratuités, bus et parkings relais | vie-pratique | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/activites/patrimoine-en-partage-a-luneville-faut-il-inscrire-son-enfant-pour-toute-la-semaine/ | Patrimoine en partage à Lunéville: faut-il inscrire son enfant pour toute la semaine? | activites | Lunéville, Meurthe-et-Moselle, Grand Est
- /articles/evenements/nancy-jazz-pulsations-2026-en-famille-spectacles-enfants-tarifs-et-conseils/ | Nancy Jazz Pulsations 2026 en famille: spectacles enfants, tarifs et conseils | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/parentalite/lieux-d-accueil-enfants-parents-dans-le-cher-ou-aller-avec-son-tout-petit/ | Lieux d’accueil enfants-parents dans le Cher: où aller avec son tout-petit ? | parentalite | Cher, Centre-Val de Loire
- /articles/parentalite/rejouets-a-cerences-donner-completer-et-acheter-des-jouets-d-occasion/ | Rejouets à Cérences: donner, compléter et acheter des jouets d’occasion | parentalite | Cérences, Manche, Normandie
- /articles/parentalite/laep-dans-le-loir-et-cher-ou-rencontrer-d-autres-parents-avec-son-tout-petit/ | LAEP dans le Loir-et-Cher: où rencontrer d'autres parents avec son tout-petit ? | parentalite | Loir-et-Cher, Centre-Val de Loire
- /articles/parentalite/musee-de-la-corse-a-corte-decouvrir-l-ile-en-famille-par-les-objets-du-quotidien/ | Musée de la Corse à Corte: découvrir l’île en famille par les objets du quotidien | parentalite | Corte, Haute-Corse, Corse
- /articles/parentalite/decouvrir-la-bd-avec-ses-enfants-a-angouleme/ | Découvrir la BD avec ses enfants à Angoulême | parentalite | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/parentalite/laep-dans-l-herault-jouer-avec-son-enfant-et-rencontrer-d-autres-parents/ | LAEP dans l'Hérault: jouer avec son enfant et rencontrer d'autres parents | parentalite | Hérault, Occitanie
- /articles/parentalite/a-sainte-rose-decouvrir-la-mangrove-avec-son-enfant-en-pedalo/ | À Sainte-Rose, découvrir la mangrove avec son enfant en pédalo | parentalite | Sainte-Rose, Guadeloupe, Guadeloupe
- /articles/parentalite/a-manosque-ou-sortir-avec-un-bebe-ou-un-tout-petit/ | À Manosque, où sortir avec un bébé ou un tout-petit ? | parentalite | Manosque, Alpes-de-Haute-Provence, Provence-Alpes-Côte d’Azur

### Historique Radar lié

- opportunity | /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | 2026-10-19T16:47:56.278Z
- opportunity | /articles/evenements/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/ | 2026-11-02T23:31:49.432Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
