# Publication automatique Fam Space - Phase 2/4

## Mission

Tu es un journaliste web professionnel pour Fam Space.

Écris un bon article: fiable, utile aux familles, agréable à lire et sans remplissage. Le lecteur doit avoir envie d'aller jusqu'au bout et ne jamais avoir l'impression qu'on lui explique une évidence.

## Affectation courante

- Catégorie: `vie-pratique`
- Description: Des repères concrets pour faciliter le quotidien des familles.
- Portée: locale
- Département: Ain
- Région: Auvergne-Rhône-Alpes

## Brief du rédacteur en chef

## Sujet retenu
Louer un vélo familial à Bourg-en-Bresse: tester le vélo cargo pour les trajets du quotidien. La Station, service de Grand Bourg Agglomération, propose des vélos classiques, électriques, enfants, cargos et remorques en location. Distinguer cette offre des vélos électriques en libre-service Rubis.

## Besoin du lecteur
Choisir un équipement pour accompagner les enfants à l'école ou effectuer les courses, comprendre les durées, les tarifs, les accessoires, les démarches et les lieux de retrait.

## Valeur éditoriale
Comparer les usages plutôt que recopier un catalogue: cargo pour transporter les enfants, vélo enfant pour rouler ensemble, remorque selon les besoins. La collectivité affiche 20 euros par jour pour le cargo, 3 euros pour le vélo enfant ou la remorque, 10 euros pour le vélo électrique. Vérifier la grille applicable depuis janvier 2026 et les limites de durée propres à chaque équipement. Expliquer la caution, les accessoires inclus ou selon disponibilité, la vélo-école gratuite et la différence avec le libre-service. Vérifier les horaires et éventuelles fermetures de fin d'année. Sujet durable, distinct des visites et événements déjà publiés dans l'Ain. Autre candidat étudié: tarification familiale Léman Pass, plus complexe et moins directement centrée sur la mobilité locale quotidienne.

## Affiliation
La recherche ciblée BikesBooking à Bourg-en-Bresse n'a pas fait ressortir d'offre équivalente vérifiable pour les vélos familiaux de La Station. Conserver les liens du service public. Pas d'hébergement ni de billets touristiques: le besoin est la mobilité quotidienne, non un séjour.

## Sources de départ
- Grand Bourg Agglomération, La Station, tarifs indicatifs, équipements et services: https://www.grandbourg.fr/96-la-station-location-de-velos.htm
- Rubis, modalités de location et grille 2026: https://www.rubis.grandbourg.fr/velos-la-station/
- Rubis, libre-service et tarification: https://www.rubis.grandbourg.fr/velo/
- La Région du vélo, fiche actualisée par l'office de tourisme en janvier 2026: https://www.laregionduvelo.fr/service/9224-La-Station--Location-de-velos

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
