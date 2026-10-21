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
title: "Foire de Dijon 2026 en famille: dates, ateliers, animaux et gratuités"
subtitle: Du 31 octobre au 11 novembre, quelle journée choisir selon l'âge des enfants et le budget?
summary: "Préparer la Foire internationale et gastronomique de Dijon 2026 avec des enfants: ateliers, Ferme Côte-d'Or, entrée gratuite le soir et accès en tram."
category: evenements
location:
  city: Dijon
  department: Côte-d'Or
  region: Bourgogne-Franche-Comté
keywords:
  - foire de Dijon 2026 en famille
  - foire gastronomique Dijon enfants
  - ferme Côte-d'Or Dijon novembre 2026
  - foire Dijon entrée gratuite après 18h
sources:
  - title: Foire internationale et gastronomique de Dijon - informations pratiques et tarifs 2026
    url: https://foirededijon.com/infos-pratiques
  - title: Foire de Dijon - programme daté des animations 2026
    url: https://foirededijon.com/animations
  - title: Département de la Côte-d'Or - Tous à la Ferme Côte-d'Or
    url: https://www.cotedor.fr/agenda/tous-la-ferme-cote-dor
  - title: Foire de Dijon - collectivités et Ferme Côte-d'Or
    url: https://foirededijon.com/decouvrir/les-collectivites-a-la-foire
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites
  decision: Choisir le jour le plus intéressant et le moins cher pour les enfants selon les vrais créneaux d'ateliers, la présence des animaux et les horaires d'entrée gratuite, sans confondre entrée libre et animations.
  affiliationPotential: Billetterie proposée par l'organisateur, aucune offre d'entrée partenaire équivalente vérifiée. Pour un séjour, Booking.com référence l'Hotel ibis Dijon Centre Clemenceau (chambres familiales à proximité du parc des expositions) et le Campanile Dijon Centre Clemenceau (chambres familiales près du tram Poincaré); confirmer composition, prix et disponibilité aux dates retenues.
  gsc:
    retrievedAt: 2026-10-21T05:02:00.000Z
    dataThrough: 2026-10-18
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Foire internationale et gastronomique de Dijon - informations pratiques et tarifs 2026 »; aucune page forte GSC n'est requise.
---

## Mission retenue
Préparer une journée à la Foire internationale et gastronomique de Dijon, du 31 octobre au 11 novembre 2026 au Parc des expositions et congrès: au-delà des stands et de la restauration, suivre les animations datées pour les enfants et choisir une entrée adaptée au budget.

## Pourquoi cette mission
Opportunité familiale et locale prochaine, documentée sur le programme officiel, sans article exact dans les 730 entrées du catalogue ni doublon dans l'historique Radar. Les chevauchements remontés par probableDuplicates sont génériques et concernent d'autres lieux et manifestations. Le refresh GSC prioritaire Carte OKAY Savoie a été repris le 6 octobre, contient toujours les dates, montants et procédures nécessaires et sa baisse d'impressions a un diagnostic « uncertain » sans amélioration indépendante avérée. L'expansion de la page forte Transports à Paris recouperait déjà ses guides Orly et CDG.

## Décision du lecteur
Sélectionner la date et l'heure où les activités convenant à ses enfants sont réellement proposées, comparer le prix pour sa famille et savoir comment se rendre à la foire sans mauvaise surprise.

## Faits à traiter
- Entrée gratuite avant 12 ans; billet standard 7 €, réduit 6 € sous conditions, club gratuit « Copains de la Foire » donnant accès à 5 € par personne et par entrée, forfait 12 jours 30 € (25 € au club). Gratuité pour tous à partir de 18h les 1, 2, 3, 4, 8, 9 et 11 novembre, qui sont sans nocturne. Pas de réadmission après sortie.
- Nocturnes les 31 octobre, 5, 6, 7 et 10 novembre: entrée jusqu'à 22h, sortie du hall gastronomie à 23h30 et fermeture du hall 2 à 21h. Les autres jours entrée jusqu'à 20h, hall 1 jusqu'à 21h30 et hall 2 jusqu'à 20h. Une arrivée après 18h laisse peu de temps pour les activités du hall 2.
- Ateliers du 31 octobre: maquillage, sculpture de citrouilles, atelier cuisine parent-enfant, concours de déguisements et boum d'Halloween à 19h. Les activités et leurs conditions changent selon le jour: programme horaire, inscriptions et gratuité individuelle à confirmer; ne pas faire croire que tous les ateliers sont gratuits.
- Ferme Côte-d'Or: le Département responsable annonce 5 au 8 novembre, 10h-19h du jeudi au samedi, 10h-17h dimanche, accessible sans supplément avec l'entrée foire; grand défilé des animaux dimanche 8 dès 15h30. Une page de l'organisateur de la foire indique « 5 au 9 novembre »: mentionner la divergence et privilégier la vérification auprès du Département avant une visite le 9.
- Tram T1 arrêts Auditorium ou Poincaré, environ 3 min à pied de l'entrée Poincaré; accès également par les entrées Grands Ducs d'Occident et Chambertin (celle-ci réservée aux e-billets et invitations). Pass Foire + Divia à 7 €, supplément de 0,30 € si absence de support; comparer au besoin réel du groupe.

## Sources de départ
Site officiel Foire de Dijon (infos pratiques, calendrier jour par jour), Département de la Côte-d'Or (Ferme et horaires propres), page collectivités de la foire (divergence de dates à arbitrer).

## Affiliation
Aucun billet d'entrée partenaire vérifié. Pour une famille qui reste une nuit, comparer sur Booking.com l'Hotel ibis Dijon Centre Clemenceau (https://www.booking.com/hotel/fr/ibis-dijon-centre-clemenceau.fr.html) et le Campanile Dijon Centre Clemenceau (https://www.booking.com/hotel/fr/campanile-dijon-congra-s-cla-c-menceau.fr.html), proches du parc; capacité familiale, prix et disponibilité à recontrôler.

## Continuations internes
- Si un séjour prévoit une autre visite gourmande, renvoyer au guide Fam Space « Fabrique de pain d'épices à Dijon: faut-il réserver et combien prévoir avec des enfants? », sans répéter ses tarifs, horaires ou déroulement.
- Ne pas réemployer l'article « Foire de Grenoble 2026 en famille »: autre ville et événement distinct.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/parentalite/cercles-de-parents-en-cote-d-or-trois-seances-gratuites-pour-echanger-pendant-les-premieres-annees/ | Cercles de Parents en Côte-d'Or: trois séances gratuites pour échanger pendant les premières années | parentalite | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | Foire du livre de Brive 2026 en famille: dates, auteurs jeunesse et conseils de visite | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine
- /articles/activites/parc-de-l-auxois-avec-des-enfants-comment-combiner-animaux-maneges-et-piscine/ | Parc de l'Auxois avec des enfants: comment combiner animaux, manèges et piscine | activites | Arnay-sous-Vitteaux, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | Festival du Livre de Colmar 2026 en famille: dates, horaires et animations jeunesse | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | Foire de Grenoble 2026 en famille: jours gratuits, programme et tarifs | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/sorties/conde-cote-plage-2026-famille/ | Condé Côté Plage 2026 en Normandie: activités gratuites en famille jusqu’au 23 août | sorties | Condé-en-Normandie, Calvados, Normandie
- /articles/sorties/sortie-ferme-pedagogique-en-famille/ | Ferme pédagogique en famille: comment choisir une visite adaptée aux enfants | sorties
- /articles/bons-plans/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/ | Château de Champs-sur-Marne en famille: gratuités, tarifs et dates à éviter | bons-plans | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/bons-plans/vacaf-2026-en-cote-d-or-jusqu-a-80-du-sejour-pris-en-charge/ | VACAF 2026 en Côte-d'Or: jusqu'à 80 % du séjour pris en charge | bons-plans | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/cuisine/fabrique-de-pain-d-epices-a-dijon-faut-il-reserver-et-combien-prevoir-avec-des-enfants/ | Fabrique de pain d'épices à Dijon: faut-il réserver et combien prévoir avec des enfants? | cuisine | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/maison/canape-matelas-ou-electromenager-a-dijon-donner-faire-enlever-ou-aller-en-dechetterie/ | Canapé, matelas ou électroménager à Dijon: donner, faire enlever ou aller en déchetterie ? | maison | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/vie-pratique/frais-scolaires-en-cote-d-or-quelles-aides-demander-au-departement/ | Frais scolaires en Côte-d'Or: quelles aides demander au Département? | vie-pratique | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/sorties/cite-des-climats-a-beaune-en-famille-tarifs-parcours-enfants-et-billets/ | Cité des Climats à Beaune en famille: tarifs, parcours enfants et billets | sorties | Beaune, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | Equita Lyon 2026 avec des enfants: billets, Village Enfants et spectacles | evenements | Chassieu, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | Grand Noël 2026 à Vaux-le-Vicomte en famille: billets, offre enfant et animations | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | ALFest 2026 à Annecy en famille: horaires, jeux et braderie | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | Fêtes de Saint-Nicolas 2026 à Nancy en famille: défilé, villages et animations | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | 2026-10-20T15:29:27.541Z
- opportunity | /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | 2026-10-21T10:43:46.144Z
- opportunity | /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | 2026-10-20T08:52:25.825Z
- opportunity | /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | 2026-10-19T19:48:02.164Z
- opportunity | /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | 2026-10-19T16:47:56.278Z
- opportunity | /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | 2026-10-21T13:33:34.395Z
- opportunity | /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | 2026-10-18T16:46:58.413Z
- opportunity | /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | 2026-10-20T22:29:05.422Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
