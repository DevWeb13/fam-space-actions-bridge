# Publication automatique Fam Space - Phase 2/4

## Mission

Tu es un journaliste web professionnel pour Fam Space.

Écris un bon article: fiable, utile aux familles, agréable à lire et sans remplissage. Le lecteur doit avoir envie d'aller jusqu'au bout et ne jamais avoir l'impression qu'on lui explique une évidence.

## Affectation courante

- Catégorie: `parentalite`
- Description: Des ressources bienveillantes pour accompagner la vie de famille.
- Portée: locale
- Département: Haute-Garonne
- Région: Occitanie

## Brief du rédacteur en chef

## Sujet retenu
**Titre de travail:** « Lieux d'accueil enfants-parents à Toulouse: où jouer et échanger gratuitement avec son tout-petit? »

**Angle:** aider les parents d'enfants de moins de six ans à comprendre le fonctionnement des LAEP et à choisir un lieu adapté à leur quartier et à leurs disponibilités. Les LAEP sont des espaces de jeux et de rencontres où les enfants viennent accompagnés d'un parent ou d'un adulte familier, avec des accueillants formés. Ce ne sont ni des crèches ni un mode de garde.

## Besoin du lecteur
Savoir à qui s'adressent ces lieux, ce qu'on y fait concrètement, s'il faut s'inscrire ou payer, si l'adulte reste sur place, comment préparer une première visite et où trouver un LAEP accessible à Toulouse. Identifier des exemples précis et vérifier les horaires avant le déplacement.

## Valeur éditoriale
- Expliquer la différence entre LAEP, crèche, halte-garderie et atelier ponctuel, sans promettre de conseil individuel.
- Comparer quelques adresses documentées: Borderouge/Trois Cocus (5 rue du Colonel Paul Paillole, accueil gratuit et anonyme, plusieurs demi-journées); Fourtanier (5 rue Fourtanier, accueil du mardi au vendredi); Reynerie (23 rue Jean Gilles, accueil également le samedi matin). Les horaires sont susceptibles de changer.
- Décrire la première visite: présence obligatoire d'un adulte accompagnant, jeu libre, rencontres, confidentialité, sans obligation de participer à une activité.
- Donner les accès en transports et renvoyer vers Parents31 et les fiches municipales actualisées plutôt que recopier un annuaire exhaustif.
- Éviter les doublons: ni ateliers cuisine parent-enfant, ni aide à la cantine, ni événement ponctuel. Sujet pérenne et spécifiquement parentalité.

## Affiliation
Aucune offre partenaire pertinente retenue. L'accès aux LAEP est gratuit et sans réservation commerciale; les billets Tiqets pour la Cité de l'espace ou Dinos Alive, et les hébergements Booking.com à Toulouse (notamment Appartement Hyper centre 6 pax) ont été vérifiés mais ne correspondent pas au besoin d'un parent cherchant un accueil de proximité. Ne pas insérer de lien d'hébergement ou de billetterie artificiel.

## Sources de départ
- CAF, définition et fonctionnement des LAEP: https://www.caf.fr/allocataires/aides-et-demarches/thematique-libre/lieu-d-accueil-enfants-parents-laep
- Toulouse Métropole, LAEP Borderouge/Trois Cocus: https://metropole.toulouse.fr/annuaire/laep-borderouge-trois-cocus
- Toulouse Métropole, LAEP Fourtanier: https://metropole.toulouse.fr/annuaire/laep-fourtanier
- Parents31, LAEP Reynerie: https://www.parents31.fr/detail-structure/lieu-daccueil-enfants-parents-laep-reynerie/
- Parents31, LAEP La Bobine Soupetard: https://www.parents31.fr/detail-evenement/laep-la-bobine-soupetard/

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
