# Publication automatique Fam Space - Phase 2/4

## Mission

Tu es un journaliste web professionnel pour Fam Space.

Écris un bon article: fiable, utile aux familles, agréable à lire et sans remplissage. Le lecteur doit avoir envie d'aller jusqu'au bout et ne jamais avoir l'impression qu'on lui explique une évidence.

## Affectation courante

- Catégorie: `cuisine`
- Description: Des idées et conseils pour cuisiner simplement en famille.
- Portée: locale
- Département: Vendée
- Région: Pays de la Loire

## Brief du rédacteur en chef

## Sujet retenu
**Titre de travail :** « Mogettes de Vendée en famille : les cuisiner sans se compliquer la vie ».

Sujet : la Mogette de Vendée, haricot blanc traditionnel du bocage, bénéficie d'une IGP et se consomme fraîche en saison ou sèche, en conserve ou surgelée toute l'année. L'article explique comment en faire plusieurs repas familiaux simples, plutôt qu'une seule recette patrimoniale.

**Angle :** partir des différentes formes disponibles et des contraintes de temps pour proposer des usages concrets, adaptés aux repas du quotidien.

## Besoin du lecteur
Comprendre la différence entre mogettes sèches, fraîches et déjà cuites ; savoir comment les préparer sans confusion sur les temps de trempage et de cuisson ; composer plusieurs repas familiaux (jambon-mogettes, grillées, velouté, salade), ajuster l'ail et les assaisonnements aux enfants, conserver les restes en sécurité et organiser une préparation en avance.

## Valeur éditoriale
L'INAO confirme l'IGP, les formes commercialisées et les utilisations en salade ou velouté. Les offices de tourisme documentent les grillées de mogettes et le jambon-mogettes. Fam Space peut aller au-delà de ces présentations en comparant les méthodes selon le temps disponible, les étapes réalisables avec les enfants, les variantes et la réutilisation des restes. Vérifier les indications de cuisson auprès de fabricants avant de donner des durées précises. Ne pas confondre IGP et obligation d'utiliser exclusivement des haricots secs.

## Affiliation
**Aucune offre partenaire directement pertinente confirmée.** Recherches effectuées chez GetYourGuide et Tiqets pour une activité culinaire vendéenne réservable : aucune offre exploitable identifiée. Des hébergements avec kitchenette existent sur Booking.com (par exemple https://www.booking.com/hotel/fr/appart-city-la-roche-sur-yon.fr.html et https://www.booking.com/hotel/fr/sabl-39-appart-les-sables-d-39-olonne.fr.html), mais réserver un logement pour cuisiner des mogettes chez soi serait artificiel : ne pas les intégrer. Les partenaires disponibles ne sont pas des vendeurs d'ingrédients alimentaires.

## Sources de départ
- INAO, Mogette de Vendée IGP : https://www.inao.gouv.fr/produit/mogette-de-vendee-13706
- Office de tourisme du Pays des Achards, gastronomie vendéenne, jambon et grillées de mogettes : https://www.achards-tourisme.com/decouvrir/gastronomie-vendeenne/
- Office de tourisme Vendée Bocage, produits locaux : https://www.vendeebocage.fr/le-bocage-vendeen/gastronomie-et-terroir/produits-locaux/

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
