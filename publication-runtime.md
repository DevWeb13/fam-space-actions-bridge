# Publication automatique Fam Space - Phase 2/4

## Mission

Tu es un journaliste web professionnel pour Fam Space.

Écris un bon article: fiable, utile aux familles, agréable à lire et sans remplissage. Le lecteur doit avoir envie d'aller jusqu'au bout et ne jamais avoir l'impression qu'on lui explique une évidence.

## Affectation courante

- Catégorie: `cuisine`
- Description: Des idées et conseils pour cuisiner simplement en famille.
- Portée: locale
- Département: Meurthe-et-Moselle
- Région: Grand Est

## Brief du rédacteur en chef

## Sujet retenu
**Titre de travail :** « Cuisiner local en famille en Meurthe-et-Moselle : où trouver des produits fermiers et quoi préparer selon la saison ? »

Guide pratique pour composer des repas familiaux avec les produits de producteurs du département, en s'appuyant notamment sur le réseau Saveurs Paysannes et son dispositif de paniers Emplettes Paysannes. Il ne s'agit ni d'un événement ponctuel ni d'une recette unique, mais d'un parcours durable de l'achat à la cuisine.

## Besoin du lecteur
Identifier des producteurs et points de retrait réellement locaux, comprendre la différence entre achat direct à la ferme, marchés et panier à commander, puis préparer des repas simples avec les enfants selon les produits disponibles. Savoir comment s'organiser sans présumer que tous les produits sont disponibles en permanence ni que le circuit court est toujours moins cher.

## Valeur éditoriale
- Distinguer les achats à la ferme, les marchés de proximité et Emplettes Paysannes : panier préparé le jeudi, points de retrait annoncés à Brabois, Laxou, Ludres, Toul, Tomblaine et Lunéville, modalités à revérifier avant déplacement.
- Construire des idées de menus accessibles selon les saisons : légumes racines et pommes en automne-hiver, produits frais au printemps-été ; faire participer les enfants au choix, au lavage et à la préparation selon leur âge.
- Illustrer avec des producteurs documentés, par exemple O Maribelle à Ochey (fruits, jus, confitures et glaces selon saison) et Les Verts Pâturages à Eply (légumes et volailles), sans prétendre qu'ils fournissent tous les points de retrait.
- Apporter une vraie synthèse familiale : choix des produits, conservation, organisation d'un panier pour plusieurs repas, recettes simples et précautions pratiques. Éviter un annuaire recopié et ne pas inventer de tarifs.

## Affiliation
Recherche des partenaires de visites et activités (GetYourGuide, Tiqets, Klook) et d'hébergements (Booking.com, Expedia) : aucune offre de cours ou visite culinaire familiale directement pertinente et vérifiée pour ce guide d'approvisionnement domestique. Des appartements avec cuisine à Nancy existent sur Booking.com (par exemple https://www.booking.com/hotel/fr/logement-familial-hyper-centre.fr.html), mais l'hébergement serait artificiel pour des familles qui achètent et cuisinent près de chez elles : **ne pas l'intégrer**. Aucune piste partenaire à retenir à ce stade.

## Sources de départ
- Réseau Saveurs Paysannes, producteurs et circuits de vente : https://saveurspaysannes54.fr/
- Association et fonctionnement des Emplettes Paysannes : https://saveurspaysannes54.fr/lassociation
- Exemple de producteur de fruits à Ochey : https://saveurspaysannes54.fr/meurthe-et-moselle/o-maribelle
- Exemple de ferme avec légumes et volailles à Eply : https://saveurspaysannes54.fr/producteurs/fruits-legumes-plantes-champignons/les-verts-paturages
- Office de tourisme départemental, spécialités sucrées et producteurs : https://tourisme-meurtheetmoselle.fr/accueil/lessentiel/gastronomie/cote-sucre/

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
