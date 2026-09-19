# Fam Space — politique images et publications sociales

Date de référence : 19 septembre 2026

## Objet

Ce document est la source de vérité pour l'éligibilité des images et la publication automatique des articles Fam Space sur Pinterest, Facebook, Instagram et Threads.

Le flux `https://www.fam-space.fr/pinterest-v2.xml` est la source opérationnelle unique d'éligibilité sociale.

Règle simple :

- article présent dans `pinterest-v2.xml` : il peut être publié automatiquement sur les réseaux avec sa hero ;
- article absent du flux : il ne doit pas être publié automatiquement sur Facebook, Instagram ou Threads.

Les publishers restent séparés et conservent leurs propres fichiers d'état, mais ils ne doivent pas maintenir chacun une liste indépendante de licences autorisées.

## Principe de droits retenu

Une image n'est éligible au flux social que si Fam Space peut raisonnablement démontrer qu'il dispose des droits nécessaires pour l'utiliser sur les plateformes concernées.

Cette politique est volontairement prudente. Elle ne constitue pas un avis juridique.

Références :

- Meta Platform Terms : https://developers.facebook.com/terms/
- Creative Commons FAQ : https://creativecommons.org/faq/
- CC0 1.0 : https://creativecommons.org/publicdomain/zero/1.0/
- Public Domain Mark 1.0 : https://creativecommons.org/publicdomain/mark/1.0/

## Images autorisées dans le flux

### 1. Images dont Fam Space détient les droits

Une image créée par Fam Space ou par son auteur pour Fam Space n'a pas besoin de recevoir une fausse licence Creative Commons.

Sa provenance doit être déclarée explicitement avec au minimum :

- `role: "hero"` ;
- `provider: "fam-space"` ;
- `rightsStatus: "owned"` ;
- un `creator` non vide ;
- le fichier hero réellement utilisé par l'article dans `output.path`.

Aucune valeur `CC0`, `Public Domain` ou autre licence tierce ne doit être inventée pour une image appartenant à Fam Space.

### 2. CC0

Les images tierces sous CC0 sont admises lorsque leur provenance est vérifiable et que le fichier publié correspond à la provenance enregistrée.

### 3. Domaine public / Public Domain Mark

Les images tierces identifiées de manière fiable comme domaine public ou Public Domain Mark sont admises lorsque leur provenance est vérifiable.

## Images tierces non admises actuellement

Les images tierces suivantes ne sont pas intégrées au flux social automatique :

- `CC BY` ;
- `CC BY-SA` ;
- `CC BY-NC`, `CC BY-NC-SA` ;
- `CC BY-ND`, `CC BY-NC-ND` ;
- `All Rights Reserved` sans droits détenus par Fam Space ;
- licence inconnue, ambiguë ou absente ;
- provenance insuffisante ou contradictoire.

Ajouter un crédit ne suffit pas à rendre automatiquement une image tierce éligible au flux.

## Provenance et rôle du flux Pinterest

Le fichier `src/lib/seo/pinterest-feed-v2.ts` du dépôt Fam Space décide si une hero entre dans `pinterest-v2.xml`.

Pour les images externes issues du pipeline actuel, Wikimedia Commons reste la provenance utilisée par défaut.

Pour les images appartenant à Fam Space, la provenance `provider: "fam-space"` avec `rightsStatus: "owned"` est utilisée.

Une fois une image admise dans le flux, Facebook, Instagram et Threads ne doivent pas refaire une seconde décision juridique indépendante. Ils peuvent consulter le fichier de provenance uniquement pour retrouver la source JPEG correspondant à la hero WebP présente dans le flux.

## Comportement commun des réseaux

### Facebook

Facebook publie uniquement les articles présents dans `pinterest-v2.xml`.

- article présent : publication avec la vraie hero correspondante ;
- article absent : aucune publication ;
- aucun placeholder générique ;
- aucun fallback après délai.

### Instagram

Instagram publie uniquement les articles présents dans `pinterest-v2.xml`, avec leur image.

Un article absent du flux reste non publié.

### Threads

Threads publie uniquement les articles présents dans `pinterest-v2.xml`, avec leur image.

La précédente règle prévoyant un post texte + lien sans image est abandonnée et ne doit plus être appliquée.

## Fichiers d'état

Les états restent séparés :

- `facebook-state.json` ;
- `instagram-state.json` ;
- `threads-state.json`.

La présence d'un article dans un ancien fichier d'état ne le rend pas éligible : l'éligibilité vient du flux `pinterest-v2.xml`.

## Règle de sécurité

En cas de doute sur les droits ou la provenance d'une hero, elle ne doit pas entrer dans `pinterest-v2.xml`.

Comme les publishers sociaux reposent sur ce flux, l'article concerné ne sera alors publié automatiquement sur aucun des trois réseaux Meta.

## Existant

Cette règle s'applique aux publications futures.

Les anciens posts Facebook déjà publiés avec un placeholder ou selon une logique précédente ne sont pas supprimés ni modifiés automatiquement.
