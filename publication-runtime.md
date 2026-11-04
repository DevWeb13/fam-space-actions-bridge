# Publication automatique Fam Space - Phase 2/4

## Mission

Tu es un journaliste web professionnel pour Fam Space.

Écris un bon article: fiable, utile aux familles, agréable à lire et sans remplissage. Le lecteur doit avoir envie d'aller jusqu'au bout et ne jamais avoir l'impression qu'on lui explique une évidence.

## Affectation courante

- Catégorie: `evenements`
- Description: Les événements à découvrir et à préparer avec les enfants.
- Portée: locale
- Département: Pas-de-Calais
- Région: Hauts-de-France

## Brief du rédacteur en chef

## Sujet retenu
**Rencontres internationales de cerfs-volants de Berck 2027 : préparer une journée ou un week-end en famille pour la 40e édition.**

Angle : aider les familles à profiter du festival sans se limiter à annoncer ses dates. Du **17 au 25 avril 2027**, la plage de Berck-sur-Mer (Pas-de-Calais) accueillera la 40e édition de ce rendez-vous international : grands cerfs-volants, démonstrations aériennes, ballets et animations familiales. L'entrée au festival est annoncée gratuite par la ville ; le programme détaillé de cette édition anniversaire reste à préciser.

## Besoin du lecteur
Comprendre ce que les enfants pourront observer, choisir une durée de visite adaptée, organiser l'arrivée et les pauses, anticiper la foule et le vent sur la plage, distinguer les animations déjà annoncées des détails non encore publiés, et décider s'il vaut mieux venir à la journée ou rester dormir à Berck.

## Valeur éditoriale
- Édition anniversaire confirmée **du 17 au 25 avril 2027**, neuf jours permettant de choisir entre semaine et week-end.
- Spectacle gratuit sur la plage, avec créations géantes, ballets aériens et animations familiales annoncés ; ne pas inventer les horaires, ateliers précis ou temps forts non publiés.
- Proposer des conseils pratiques réellement familiaux : vêtements coupe-vent, sable et poussette, pauses, observation avec jeunes enfants, météo et éventuelles restrictions de circulation à revérifier avant la visite.
- Distinguer les informations fermes des annonces à venir et expliquer l'intérêt d'un séjour sur la Côte d'Opale.
- Les résultats existants annoncent surtout dates et programme général : l'article doit apporter une préparation concrète, pas une reprise de calendrier.

## Affiliation
L'événement principal est annoncé **gratuit** : aucune billetterie partenaire nécessaire ni offre directe de billet vérifiée sur GetYourGuide/Tiqets.

Deux hébergements réellement référencés chez **Booking.com**, à présenter comme options pour les familles prolongeant la visite (disponibilité et prix aux dates du festival non confirmés) :
- **The Originals Boutique, Hôtel Neptune, Berck-sur-Mer** : sur l'esplanade Parmentier, au bord de la plage, avec chambres familiales, chambres quadruples et studios pour quatre ou six personnes. https://www.booking.com/hotel/fr/inter-neptune-berck-sur-mer.fr.html
- **Dormio Resort Berck-sur-Mer** : maisons de vacances avec plusieurs chambres, cuisine équipée, terrasse et parking ; solution pour séjour familial plus long, à environ 900 m de la plage selon la fiche. https://www.booking.com/hotel/fr/belle-berck-sur-mer.fr.html

Ne pas présenter ces URLs sans identifiant comme des liens d'affiliation déjà tracés : ce sont les pages d'offres vérifiées, à convertir selon le mécanisme d'affiliation du site.

## Sources de départ
- Ville de Berck, annonce officielle de la 40e édition, dates, lieu, gratuité et programme général : https://berck.fr/agenda/65/festival/485/1/40e-edition-des-rencontres-internationales-de-cerfs-volants/
- Office de tourisme de Berck, présentation de l'édition anniversaire et animations annoncées : https://www.berck-tourisme.com/de/decouvrir/les-rencontres-internationales-de-cerfs-volants-2027
- Site de l'organisateur à consulter pour les précisions futures : https://www.cerf-volant-berck.com/

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
