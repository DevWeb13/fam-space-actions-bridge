# Publication automatique Fam Space - Phase 2/4

## Mission

Tu es un journaliste web professionnel pour Fam Space.

Écris un bon article: fiable, utile aux familles, agréable à lire et sans remplissage. Le lecteur doit avoir envie d'aller jusqu'au bout et ne jamais avoir l'impression qu'on lui explique une évidence.

## Affectation courante

- Catégorie: `maison`
- Description: Des solutions pratiques pour une maison familiale agréable.
- Portée: locale
- Département: Finistère
- Région: Bretagne

## Brief du rédacteur en chef

## Sujet retenu
**Titre de travail:** Aménager sa maison avec des matériaux de réemploi dans le Finistère: où chercher à Brest et Quimper?

**Angle:** aider les familles à repérer des matériaux et équipements de seconde main pour aménager une chambre, améliorer des rangements ou entreprendre de petits travaux, sans confondre ressourcerie d'objets et réemploi de matériaux du bâtiment.

La Réserve des Matériaux à Brest et Treuz'Mat à Quimper sont deux structures de réemploi de matériaux et équipements issus de chantiers ou de dons. Leurs stocks évoluent et ne remplacent pas un fournisseur garantissant des références identiques.

## Besoin du lecteur
Comprendre où trouver des matériaux réemployés dans le Finistère, quels types de produits rechercher, comment préparer sa visite et ses mesures, comment vérifier l'état et la compatibilité des pièces, et quelles précautions prendre avant d'utiliser des matériaux pour des travaux familiaux. Distinguer achat, don de matériaux et prestation de rénovation.

## Valeur éditoriale
Comparer les usages concrets des deux structures (bois, menuiseries, mobilier, équipements et outillage selon arrivages), leurs modalités de collecte et de vente, et proposer une méthode de préparation: liste de besoins, dimensions, photos, transport et vérifications sur place. Préciser que les matériaux techniques ou destinés à la sécurité du logement nécessitent des contrôles appropriés. Les horaires et stocks doivent être revérifiés auprès des structures avant déplacement. Ce guide transversal est distinct des articles récents du Finistère consacrés aux sorties, musées et événements.

## Affiliation
Recherche effectuée sur les offres d'hébergement Abritel dans le Finistère, notamment https://www.abritel.fr/location-vacances/p2530532 et https://www.abritel.fr/location-vacances/p2626774a. Ce sont des locations touristiques, sans utilité naturelle pour des travaux dans sa résidence. Aucun lien partenaire pertinent parmi les catégories disponibles (hébergement, visites, transport touristique, location de voiture ou vélo, consigne, vols). Ne pas ajouter d'affiliation artificielle.

## Sources de départ
- La Réserve des Matériaux, présentation officielle: https://www.la-reserve.bzh/la-reserve
- La Réserve des Matériaux, site officiel: https://www.la-reserve.bzh/
- Treuz'Mat, ressourcerie de matériaux de Treuzkemm: https://treuzkemm.org/la-ressourcerie-de-materiaux/
- Fiche descriptive complémentaire La Réserve (services et accès): https://www.ecotheque.fr/bretagne/ecosysteme/la-reserve-des-materiaux

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
