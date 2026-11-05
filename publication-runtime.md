# Publication automatique Fam Space - Phase 2/4

## Mission

Tu es un journaliste web professionnel pour Fam Space.

Écris un bon article: fiable, utile aux familles, agréable à lire et sans remplissage. Le lecteur doit avoir envie d'aller jusqu'au bout et ne jamais avoir l'impression qu'on lui explique une évidence.

## Affectation courante

- Catégorie: `maison`
- Description: Des solutions pratiques pour une maison familiale agréable.
- Portée: locale
- Département: Haut-Rhin
- Région: Grand Est

## Brief du rédacteur en chef

## Sujet retenu
**Sujet :** condensation, humidité et moisissures dans les logements familiaux du Haut-Rhin, à l'approche de l'hiver.

**Titre de travail :** « Humidité dans la maison en hiver dans le Haut-Rhin : les bons gestes et les aides près de chez soi ».

**Angle :** distinguer la condensation ordinaire des signes qui réclament une recherche de cause, puis orienter concrètement les familles vers les interlocuteurs du département. Le sujet concerne les logements occupés par les familles, notamment à Colmar, Mulhouse et ailleurs dans le Haut-Rhin, et non une visite touristique.

## Besoin du lecteur
Comprendre pourquoi les vitres ruissellent ou des taches apparaissent en hiver ; savoir aérer et ventiler sans condamner le chauffage, limiter l'humidité produite par la cuisine, les douches et le linge, repérer les situations où les gestes quotidiens ne suffisent plus et trouver un conseil local gratuit avant d'engager des travaux. Distinguer les démarches possibles pour locataires et propriétaires sans donner de conseil juridique personnalisé.

## Valeur éditoriale
- Expliquer les différences entre condensation, défaut de ventilation, infiltration et pont thermique, sans prétendre diagnostiquer un logement à distance.
- Donner une routine familiale praticable : aération brève, ventilation non obstruée, vigilance après les activités humides ; l'ADEME préconise notamment 5 à 10 minutes d'ouverture quotidienne des fenêtres.
- Éviter la fausse solution consistant à simplement masquer ou nettoyer les taches sans traiter leur cause.
- Apporter une vraie dimension départementale : ADIL 68 à Colmar et Mulhouse, et orientation France Rénov' pour les questions de travaux et de rénovation.
- Sujet durable, particulièrement opportun à l'entrée de la saison de chauffage ; différent des articles récents consacrés aux sorties, musées et marchés de Noël.

## Affiliation
**Aucune offre partenaire pertinente retenue après vérification.** Recherche d'offres Booking.com et Expedia.fr d'hébergements familiaux dans le Haut-Rhin, et d'activités sur GetYourGuide et Tiqets : des hébergements existent, notamment https://www.booking.com/hotel/fr/appart-city-mulhouse.en-gb.html et https://www.expedia.fr/Destinations-En-Haut-Rhin.d6050967.Destinations-location-vacances, mais ils ne répondent pas au besoin de traiter l'humidité de son logement habituel. Aucune prestation pertinente de diagnostic, ventilation ou amélioration du logement n'a été vérifiée parmi les partenaires autorisés. Ne pas introduire de lien touristique artificiel.

## Sources de départ
- ADEME, aération quotidienne et ventilation : https://agirpourlatransition.ademe.fr/particuliers/proteger-sante/eviter-polluants/aeration-quotidienne-logement
- Ministère chargé de la Santé, qualité de l'air intérieur, humidité et moisissures : https://sante.gouv.fr/sante-et-environnement/batiments/article/qualite-de-l-air-interieur-comment-agir-recommandations
- ADIL du Haut-Rhin, contacts à Colmar et Mulhouse et accompagnement logement : https://www.anil.org/adil-68
- France Rénov', service public de conseil en rénovation : https://france-renov.gouv.fr/
- Recherche de l'Espace Conseil France Rénov' local : https://france-renov.gouv.fr/preparer-projet/trouver-conseiller/recherche

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
