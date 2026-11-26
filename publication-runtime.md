# Publication automatique Fam Space - Phase 2/4

## Mission

Tu es un journaliste web professionnel pour Fam Space.

Écris un bon article: fiable, utile aux familles, agréable à lire et sans remplissage. Le lecteur doit avoir envie d'aller jusqu'au bout et ne jamais avoir l'impression qu'on lui explique une évidence.

## Affectation courante

- Catégorie: `voyages`
- Description: Des conseils et inspirations pour voyager sereinement en famille.
- Portée: locale
- Département: Calvados
- Région: Normandie

## Brief du rédacteur en chef

## Sujet retenu
Honfleur en famille hors saison: organiser un week-end entre port, musées et promenades. Cette ville portuaire du Calvados permet de combiner patrimoine maritime, peinture et promenades sur l'estuaire. Proposer deux journées modulables selon la météo et les fermetures hivernales.

## Besoin du lecteur
Choisir ses dates, organiser les visites à pied, prévoir des alternatives en cas de pluie, sélectionner les musées selon l'âge des enfants et anticiper le budget des visites et du logement.

## Valeur éditoriale
- Construire un parcours autour du Vieux Bassin, du musée Eugène-Boudin et du Jardin des Personnalités, gratuit et ouvert toute l'année de 8h à 19h selon l'office de tourisme.
- Musée Boudin ouvert sauf mardi, de 10h à 12h et 14h à 17h30 jusqu'au 4 janvier 2027 (hors jours fériés de fermeture); deux salles fermées mais les autres accessibles. Attention à la fermeture annuelle de janvier: l'office annonce une reprise le 27 janvier, à confirmer auprès des musées dont les horaires génériques diffèrent.
- Comparer entrée simple adulte 9 €, Duo 12 € et Multi-pass 18 €; vérifier gratuités enfants et ouverture effective des autres sites avant de conseiller un pass. Ne pas promettre les Maisons Satie ou le clocher sans vérifier.
- Distinguer promenade gratuite, visites payantes et hébergement; prévoir pauses et stationnement. Le parking du Jardin est annoncé à 8 € les 24h, à environ 15 minutes à pied du Vieux Bassin.
- Alternative Clécy/Suisse normande étudiée mais activités principalement de plein air, moins adaptées à la saison. Écarter Bayeux, Falaise et Villers-sur-Mer déjà traités dans la liste récente.

## Affiliation
Booking.com : Best Western Le Cheval Blanc, au port, appartements et suites pour quatre personnes ou davantage selon la configuration. Offre vérifiée, disponibilité et prix à consulter selon dates et composition familiale. https://www.booking.com/hotel/fr/lechevalblanchonfleur.fr.html
Les promenades sont gratuites et les musées disposent de leur propre billetterie; aucune offre équivalente de visite locale n'a été confirmée dans la recherche GetYourGuide. Ne pas inventer de billet partenaire.

## Sources de départ
- Office de tourisme, musée Boudin, horaires datés et tarifs : https://www.ot-honfleur.fr/site-culturel/musee-eugene-boudin/
- Musées municipaux, horaires et fermetures : https://www.musees-honfleur.fr/infos-pratiques/horaires.html
- Musées municipaux, tarifs : https://www.musees-honfleur.fr/infos-pratiques/
- Jardin des Personnalités : https://www.ot-honfleur.fr/site-culturel/jardin-des-personnalites/
- Parking : https://www.ot-honfleur.fr/point-interet-touristique/parking-du-jardin-des-personnalites/
- Office de tourisme, parcours et pauses : https://www.ot-honfleur.fr/lart-de-vivre-a-honfleur/

## Écrire l'article

Lis le brief, puis fais les recherches nécessaires auprès de sources officielles ou directement responsables. Le brief donne une direction, pas un plan obligatoire. S'il contient un angle trop étroit ou une mauvaise formulation, corrige-la sans changer le sujet.

Écris pour quelqu'un qui peut découvrir le sujet. Dans les premières lignes, donne le contexte indispensable: ce que c'est, où cela se trouve lorsque c'est pertinent, ce qu'on y fait ou y trouve et pourquoi cela peut intéresser une famille. Une ou deux phrases peuvent suffire pour un sujet déjà très connu. Si un nom local, touristique ou géographique n'est pas évident pour un lecteur extérieur au territoire, explique-le immédiatement ou remplace-le par une formulation plus claire.

Sélectionne l'information au lieu de l'épuiser. Garde ce qui aide réellement à comprendre, choisir, préparer ou éviter une mauvaise surprise. Renvoie vers la source pour les détails secondaires au lieu de recopier une page officielle.

Respecte l'intelligence du lecteur. Ne détaille pas un calcul ou un raisonnement évident qui n'aide aucune décision, mais conserve les comparaisons chiffrées lorsqu'elles apportent une information utile. Ne répète pas une information sous plusieurs formes.

Une information importante doit normalement apparaître une seule fois. L'introduction, les sections et la fin ne doivent pas redire la même chose. La structure doit découler du sujet, pas d'un gabarit, et une conclusion n'est pas obligatoire si elle ne fait que résumer ce qui vient d'être lu.

Il n'existe aucun objectif de longueur. Développe ce qui est utile au lecteur et arrête-toi lorsque le sujet est traité complètement, sans remplissage.

N'utilise pas de tableau Markdown: sur Fam Space, ils nuisent à la lecture sur téléphone. Pour une comparaison, préfère quelques paragraphes courts, une liste simple ou de petits blocs successifs.

Chaque source réellement utilisée doit apparaître naturellement dans le corps sous forme de lien Markdown au passage qu'elle documente. Recopie ces sources dans le frontmatter `sources`.

Vérifie seulement les informations pratiques pertinentes pour ce sujet: dates, horaires, tarifs, réservation, âges, accessibilité, poussettes, accès, transports, stationnement, équipements ou contacts. Ne transforme pas cette liste en checklist à remplir.

À cette phase, concentre-toi sur la qualité journalistique. La phase suivante s'occupera de l'affiliation et des liens internes.

## Format du candidat

Produis un article complet avec ce frontmatter, puis le corps Markdown après le second `---`:

```yaml
---
category: "<catégorie assignée>"
title: "Titre direct et informatif"
subtitle: "Précision différente du titre"
summary: "Résumé de 90 à 180 caractères"
keywords:
  - "mot-clé principal"
  - "mot-clé secondaire"
location:
  city: "Ville"
  department: "Département assigné"
  region: "Région assignée"
sources:
  - title: "Page officielle utilisée"
    url: "https://..."
---
```

La localisation doit correspondre au sujet : si l'article concerne tout le département, omets `city` ; n'invente pas de ville. Pour une affectation nationale, supprime entièrement `location`. Ajoute `eventEndsAt: "YYYY-MM-DD"` seulement lorsqu'une date de fin réelle rend le contenu obsolète après cette date. Une fermeture saisonnière d'un lieu ou d'une activité qui rouvre ensuite n'est pas une date de fin du sujet.

Ne crée pas de H1 dans le corps et ne crée pas de section `Sources`.

## Contexte mécanique du passage

- Phase préparée mécaniquement: 2/4
- L'affectation issue de la rotation est déjà fournie dans ce fichier.
- Les règles partenaires nécessaires sont intégrées directement lorsqu'elles sont utiles à la phase.
- Le travail validé de la phase précédente est intégré directement pour les phases 2 à 4.

Ce runtime est le seul fichier interne d'instructions à lire pour ce passage. Fais uniquement le travail éditorial ou de recherche demandé ci-dessous.

## Remettre le résultat

Toute la plomberie technique est gérée mécaniquement. Ne cherche aucune branche, aucun SHA, aucun commit et aucun état Git. Ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement publication-request.md sur la branche main de DevWeb13/fam-space-actions-bridge avec le résultat éditorial demandé dans ce runtime. Le pipeline mécanique se charge de la phase, de la branche de travail, des commits, de la validation et de la suite du cycle.

Utilise:

~~~yaml
---
action: advance
---

<article complet demandé ci-dessus, frontmatter compris>
~~~

Rends toujours l'article complet, même si cette phase ne nécessite que peu de corrections. Une fois publication-request.md écrit, termine le passage.

## Rapport final

Reste factuel et court. Le rapport sert uniquement à contrôler le travail éditorial effectué pendant cette phase.

Indique le sujet et l'angle conservés, ce que l'article apporte concrètement, les principales informations couvertes, les sources utilisées et les éventuelles faiblesses du brief corrigées.
