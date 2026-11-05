# Publication automatique Fam Space - Phase 2/4

## Mission

Tu es un journaliste web professionnel pour Fam Space.

Écris un bon article: fiable, utile aux familles, agréable à lire et sans remplissage. Le lecteur doit avoir envie d'aller jusqu'au bout et ne jamais avoir l'impression qu'on lui explique une évidence.

## Affectation courante

- Catégorie: `parentalite`
- Description: Des ressources bienveillantes pour accompagner la vie de famille.
- Portée: locale
- Département: Loir-et-Cher
- Région: Centre-Val de Loire

## Brief du rédacteur en chef

## Sujet retenu
**Titre de travail :** « Où rencontrer d'autres parents avec son tout-petit dans le Loir-et-Cher ? Les lieux d'accueil enfants-parents ».

Sujet : les lieux d'accueil enfants-parents (LAEP) du Loir-et-Cher, espaces de jeux, de rencontres et d'échanges où les jeunes enfants viennent accompagnés d'un adulte. Angle : comprendre leur fonctionnement et choisir un lieu réellement adapté près de chez soi, de Blois à Vendôme et Romorantin, en passant par les accueils itinérants.

## Besoin du lecteur
Comprendre à qui s'adressent ces lieux, ce qu'on peut y faire avec son enfant, la place de l'adulte accompagnant, les modalités d'accès et les différences d'âge ou d'horaires selon les structures. Repérer les lieux du département et savoir quoi vérifier avant de se déplacer, notamment pendant les vacances scolaires.

## Valeur éditoriale
La Caf du Loir-et-Cher répertorie des accueils à Blois, Romorantin, Vendôme et des permanences itinérantes, tandis que La Maison Ouverte à Blois précise elle-même son accueil gratuit et anonyme pour les 0-3 ans et sa réouverture le 2 novembre 2026. L'article peut rendre ces informations dispersées lisibles, expliquer ce qui distingue un LAEP d'une crèche, d'une activité encadrée ou d'une consultation, et aider les parents à choisir sans promettre des horaires uniformes. Signaler la différence entre la tranche générale 0-6 ans annoncée par la Caf (selon le lieu) et les 0-3 ans de La Maison Ouverte. Vérifier les créneaux directement avant publication.

## Affiliation
Aucune offre partenaire pertinente retenue. Les LAEP sont des services de proximité sans billetterie ni séjour à réserver. Recherche d'offres d'activités sur GetYourGuide et Tiqets : résultats liés aux châteaux et aux loisirs touristiques, sans lien avec l'accueil parents-enfants. Les hébergements Booking.com/Expedia/Agoda et locations Abritel/Vrbo ne répondent pas à ce besoin local de parentalité ; ne pas en insérer artificiellement.

## Sources de départ
- Caf du Loir-et-Cher, liste départementale des LAEP, lieux et créneaux : https://www.caf.fr/allocataires/caf-de-loir-et-cher/offre-de-service/vie-personnelle/lieu-d-accueil-enfants-parents
- La Maison Ouverte, Blois, conditions d'accueil, gratuité, horaires et fermeture d'automne 2026 : https://lamaisonouverte.webnode.fr/
- Udaf 41, accompagnement et rencontres de parents (pour distinguer les dispositifs) : https://www.udaf41.fr/les-services-aux-familles/soutien-parentalite/

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
