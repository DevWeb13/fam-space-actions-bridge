# Publication automatique Fam Space - Phase 2/4

## Mission

Tu es un journaliste web professionnel pour Fam Space.

Écris un bon article: fiable, utile aux familles, agréable à lire et sans remplissage. Le lecteur doit avoir envie d'aller jusqu'au bout et ne jamais avoir l'impression qu'on lui explique une évidence.

## Affectation courante

- Catégorie: `sorties`
- Description: Des idées de sorties à partager en famille, près de chez vous.
- Portée: locale
- Département: Loire-Atlantique
- Région: Pays de la Loire

## Brief du rédacteur en chef

## Sujet retenu

Océarium du Croisic en famille (Le Croisic, Loire-Atlantique).
Titre de travail : « Océarium du Croisic en famille : requins, manchots et conseils de visite ».
Angle : organiser une sortie selon l’âge des enfants, les animations et la saison.
Cet aquarium permanent propose des bassins thématiques et des animations autour des animaux marins.

## Besoin du lecteur

Comprendre le parcours, choisir le moment de la visite, prévoir le budget, les déplacements, les repas et les besoins des jeunes enfants. Préparer éventuellement un week-end sur la presqu’île.

## Valeur éditoriale

Durée indicative : 1 h 30. Animations annoncées : repas des manchots à 11 h et 16 h ; requins et tortues à 15 h (également 11 h 30 pendant les vacances), sous réserve de modification. Tarifs 2026 : 16,90 € adulte, 13,90 € enfant de 3 à 12 ans, gratuit avant 3 ans. Horaires saisonniers : consulter le calendrier officiel, notamment en novembre et décembre. Informations utiles à intégrer : poussettes prêtées, table à langer, micro-ondes pour repas bébé, accessibilité, parking avec trois heures offertes, pique-nique possible à l’extérieur mais nourriture interdite à l’intérieur. Proposer un déroulé de visite et un budget familial, sans recopier simplement les pages officielles.

## Affiliation

Billetterie : aucune offre directe pour l’Océarium confirmée sur Tiqets, GetYourGuide, Klook ou KKday. Ne pas inventer de billet partenaire.

Hébergement : Booking.com, « Beau T2 Bis dans résidence de standing », appartement familial avec deux chambres et cuisine, à environ trois minutes à pied de l’Océarium. Proposition pertinente uniquement pour un séjour sur place.
URL : https://www.booking.com/hotel/fr/beau-t2-bis-dans-residence-de-standing.html
Prix, disponibilités et attribution des commissions non confirmés.

## Sources de départ

- Présentation officielle : https://www.ocearium-croisic.fr/locearium/a-propos-de-locearium/
- Tarifs 2026 : https://www.ocearium-croisic.fr/preparer-sa-visite/tarifs-et-billetterie/
- Calendrier : https://www.ocearium-croisic.fr/preparer-sa-visite/calendrier-et-horaires/
- Animations : https://www.ocearium-croisic.fr/nos-especes/nos-animations/
- FAQ familiale : https://www.ocearium-croisic.fr/preparer-sa-visite/foire-aux-questions/
- Plan de visite : https://www.ocearium-croisic.fr/nos-especes/plan-visite-ocearium/

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
