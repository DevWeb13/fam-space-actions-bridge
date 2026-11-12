# Publication automatique Fam Space - Phase 2/4

## Mission

Tu es un journaliste web professionnel pour Fam Space.

Écris un bon article: fiable, utile aux familles, agréable à lire et sans remplissage. Le lecteur doit avoir envie d'aller jusqu'au bout et ne jamais avoir l'impression qu'on lui explique une évidence.

## Affectation courante

- Catégorie: `maison`
- Description: Des solutions pratiques pour une maison familiale agréable.
- Portée: locale
- Département: Landes
- Région: Nouvelle-Aquitaine

## Brief du rédacteur en chef

## Sujet retenu
**Titre de travail:** Louer une maison de vacances dans les Landes en famille: choisir le bon logement entre océan, lac et forêt

**Angle:** Un guide concret pour choisir une maison familiale adaptée aux enfants selon la zone du département, les déplacements et les équipements réels, plutôt qu'une sélection promotionnelle de logements. Il s'agit de locations saisonnières de maisons et gîtes dans les Landes (40), de la côte atlantique à l'intérieur des terres, pour des vacances en famille.

## Besoin du lecteur
Comprendre les différences pratiques entre séjourner près de l'océan, des lacs ou dans l'intérieur des Landes; vérifier la capacité réelle, les chambres, la cuisine, le linge, les équipements bébé, l'extérieur, l'accès aux activités et les distances; comparer le coût total et les conditions de réservation avant de payer.

## Valeur éditoriale
- Comparer les usages: plage et animation sur la côte, baignade et activités autour des lacs, calme et espace dans les terres, sans présenter une zone comme universellement meilleure.
- Expliquer les critères souvent négligés avec enfants: couchages séparés, lit bébé effectivement fourni, lave-linge, terrasse ombragée, sécurisation des accès et de la piscine, trajet réel vers les plages et commerces.
- Donner une méthode de comparaison du coût total (ménage, linge, taxe de séjour, dépôt de garantie), des règles d'annulation et de l'état descriptif du logement; distinguer ce qui est garanti dans l'annonce de ce qui doit être confirmé auprès de l'hôte.
- Sujet durable, pertinent lors de la préparation des vacances 2027; éviter les prix et disponibilités non vérifiés. Ne pas reprendre l'angle de l'article existant sur une journée au lac de Biscarrosse.

## Affiliation
- **Abritel**, locations de vacances familiales dans les Landes, offre et filtres par type de logement et équipements: https://www.abritel.fr/d/famille/48037/landes
- **Booking.com**, locations de vacances dans les Landes, avec destinations telles que Biscarrosse, Mimizan, Soustons et Capbreton: https://www.booking.com/booking-home/region/fr/landes.fr.html
- **Expedia**, exemple concret de maison landaise entière à Aureilhan, avec cuisine et lave-linge, à comparer selon la composition de la famille: https://www.expedia.fr/Aureilhan-Hotel-Single-Storey-Landes-House-In-A-Large-Forest-Park-By-The-Lake.h33248752.Description-Hotel
Ces pages attestent d'offres présentées sur les plateformes, sans garantir une disponibilité ni un tarif pour des dates précises. Les liens partenaires sont des pistes à intégrer naturellement au choix du logement, pas des sources de faits touristiques.

## Sources de départ
- Service Public, règles des locations de vacances entre particuliers, contrat, descriptif, charges, annulation et état des lieux (mise à jour du 20 août 2026): https://www.service-public.fr/particuliers/vosdroits/F2045
- Landes Tourisme, portail départemental pour documenter les secteurs et les déplacements: https://www.tourismelandes.com/
- Parc naturel régional des Landes de Gascogne, contexte de la partie intérieure et forestière du département: https://www.parc-landes-de-gascogne.fr/

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
