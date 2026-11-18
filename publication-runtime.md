# Publication automatique Fam Space - Phase 2/4

## Mission

Tu es un journaliste web professionnel pour Fam Space.

Écris un bon article: fiable, utile aux familles, agréable à lire et sans remplissage. Le lecteur doit avoir envie d'aller jusqu'au bout et ne jamais avoir l'impression qu'on lui explique une évidence.

## Affectation courante

- Catégorie: `vie-pratique`
- Description: Des repères concrets pour faciliter le quotidien des familles.
- Portée: locale
- Département: Charente
- Région: Nouvelle-Aquitaine

## Brief du rédacteur en chef

## Sujet retenu
**Titre de travail :** « Démarches administratives en Charente : où trouver une aide gratuite près de chez soi, même en zone rurale ? »

Guide pratique des maisons France services et de leurs permanences itinérantes en Charente (16). Le département annonce, au 1er septembre 2026, 38 structures labellisées, dont deux bus itinérants : des conseillers aident les habitants à accomplir des démarches du quotidien et à utiliser les services numériques.

## Besoin du lecteur
Identifier le bon accueil selon sa commune et sa démarche familiale (CAF, Assurance maladie, France Titres, impôts, retraite, France Travail, etc.), comprendre ce que les conseillers peuvent faire ou non, trouver une permanence mobile, vérifier les horaires et préparer les documents avant de se déplacer.

## Valeur éditoriale
- Expliquer la différence entre un guichet France services, une permanence de bus et le service administratif qui prend la décision finale : accompagnement et orientation ne signifient pas attribution automatique d'un droit.
- Montrer concrètement le maillage rural, notamment le bus départemental annoncé à Nersac, Brillac, Alloue, Brigueuil, Touvérac, Condéon et Vouzan, avec avertissement de revérifier les passages.
- Proposer une méthode de choix : annuaire officiel par commune, vérification du rendez-vous, documents à préparer et distinction entre accès libre et accompagnement sur rendez-vous.
- Donner des exemples de situations familiales (dossier CAF, changement d'adresse, papiers d'identité, accès aux services numériques), sans prétendre remplacer les organismes compétents.
- Éviter de reproduire les 38 fiches : privilégier les outils de recherche, des exemples représentatifs et des conseils concrets, durables.

## Affiliation
**Aucune offre partenaire pertinente retenue après examen des catégories disponibles.** Il s'agit d'un accompagnement administratif de proximité, sans achat, réservation, séjour ou déplacement touristique justifiant une offre Booking, Expedia, Abritel, GetYourGuide, Tiqets, location de véhicule ou autre partenaire. Ne pas ajouter d'hébergement ni de prestation artificielle.

## Sources de départ
- Préfecture de la Charente, état du réseau au 1er septembre 2026 (38 structures, dont deux bus) : https://www.charente.gouv.fr/Actions-de-l-Etat/Amenagement-du-territoire-batiment-durable-accessibilite/Maisons-France-Services/Maisons-France-Services
- Annuaire national, recherche par commune et horaires actualisés : https://www.france-services.gouv.fr/recherche
- Fiche officielle du bus France services d'accès aux droits de Charente, communes desservies et contact : https://www.france-services.gouv.fr/le-reseau/bus-france-services-dacces-aux-droits-charente
- France services d'Angoulême Ma Campagne, exemple d'accueil fixe : https://www.france-services.gouv.fr/le-reseau/france-services-dangouleme-ma-campagne
- France services Val de Charente à Ruffec, distinction accueil libre et rendez-vous : https://www.france-services.gouv.fr/le-reseau/france-services-val-de-charente
- Annuaire Service-Public, France services Angoulême Basseau : https://lannuaire.service-public.gouv.fr/nouvelle-aquitaine/charente/c03c61c5-71af-4fe2-a9da-8aaa74a65bdb

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
