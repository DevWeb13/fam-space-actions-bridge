# Publication automatique Fam Space - Phase 2/4

## Mission

Tu es un journaliste web professionnel pour Fam Space.

Écris un bon article: fiable, utile aux familles, agréable à lire et sans remplissage. Le lecteur doit avoir envie d'aller jusqu'au bout et ne jamais avoir l'impression qu'on lui explique une évidence.

## Affectation courante

- Catégorie: `maison`
- Description: Des solutions pratiques pour une maison familiale agréable.
- Portée: locale
- Département: Doubs
- Région: Bourgogne-Franche-Comté

## Brief du rédacteur en chef

## Sujet retenu
**Titre de travail :** Maison familiale dans le Doubs : à qui demander conseil avant d'aménager ou de rénover ?

**Angle :** Un guide de décision concret pour les familles du Doubs qui veulent adapter leur logement à leur vie quotidienne : redistribuer les pièces, gagner une chambre, améliorer le confort thermique, aménager un jardin ou préparer des travaux. La Maison de l'habitat du Doubs rassemble notamment les compétences de l'ADIL et du CAUE et propose des conseils gratuits et neutres ; les interlocuteurs en rénovation énergétique varient selon le territoire.

## Besoin du lecteur
Identifier le bon interlocuteur selon son projet, distinguer un conseil d'architecture, un conseil énergie et une information sur le logement, préparer utilement son rendez-vous (plans, photos, contraintes du logement, besoins des enfants, budget indicatif), comprendre les limites du conseil gratuit et trouver une permanence accessible dans le Doubs.

## Valeur éditoriale
- Partir de situations familiales concrètes : réorganiser une chambre partagée, envisager des combles habitables, réduire l'inconfort d'hiver ou d'été, sécuriser les circulations, repenser les espaces extérieurs.
- Expliquer ce que peut apporter le CAUE (aménagement, architecture, paysage) et l'ADIL (information logement, accompagnement énergie sur une partie du département), sans les confondre avec une entreprise de travaux ni promettre une étude complète ou des aides.
- Montrer les différences territoriales : pour la rénovation énergétique, Pays de Montbéliard Agglomération et Loue-Lison ont leur plateforme dédiée ; permanences Maison de l'habitat sur rendez-vous ailleurs et possibilités de rendez-vous téléphonique ou visio.
- Donner une petite méthode pour formuler son besoin et préparer un premier échange ; traiter la maison comme un lieu de vie familial plutôt que publier un catalogue d'aides.
- Sujet durable, distinct des articles récents sur les sorties, Noël et les transports. Les sites officiels présentent les services séparément ; l'intérêt éditorial est de guider un parent dans son choix selon son problème.

## Affiliation
**Aucune offre partenaire pertinente retenue.** Vérifications ciblées des offres Booking.com (appartements à Besançon), Abritel (maisons de vacances dans le Doubs), et des visites/ateliers GetYourGuide : ces produits concernent le tourisme, pas l'amélioration de la résidence familiale. Aucun hébergement, billet ou location à introduire artificiellement. Les partenaires voyage ne vendent pas le service local gratuit présenté ici.

## Sources de départ
- Maison de l'habitat du Doubs, présentation et services : https://www.maisonhabitatdoubs.fr/
- Maison de l'habitat, particuliers et types de conseils : https://www.maisonhabitatdoubs.fr/particuliers/
- Maison de l'habitat, permanences et exceptions territoriales : https://www.maisonhabitatdoubs.fr/nos-permanences-decentralisees/
- Maison de l'habitat, conseil en architecture et aménagement : https://www.maisonhabitatdoubs.fr/conseil-en-architecture-urbanisme-paysage/
- Maison de l'habitat, ADIL et couverture du conseil énergie : https://www.maisonhabitatdoubs.fr/adil-du-doubs/
- Communauté de communes Loue-Lison, modalités locales de permanence : https://cclouelison.fr/fr/rb/1947090/la-maison-de-lhabitat-du-doubs

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
