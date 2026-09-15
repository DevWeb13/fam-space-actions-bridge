# Fam Space — politique images et licences pour les réseaux Meta

Date de référence : 15 septembre 2026

## Objet

Ce document est la source de vérité pour les images publiées automatiquement par Fam Space sur Facebook, Instagram et Threads.

Il concerne les publications effectuées via les API Meta et les futurs publishers du dépôt `fam-space-actions-bridge`. Il ne modifie pas les règles éditoriales du site ni les licences des images utilisées dans les articles sur `fam-space.fr`.

Cette politique est volontairement prudente. Elle ne constitue pas un avis juridique. Si les conditions Meta ou Creative Commons changent, cette politique doit être réévaluée avant de modifier les publishers.

## Principe juridique retenu

Les conditions de la Meta Platform prévoient que le contenu fourni à Meta dans le cadre de la plateforme est soumis à une licence accordée à Meta comprenant notamment des droits de reproduction, modification, distribution, création d'œuvres dérivées, transfert et sous-licence.

Creative Commons indique de son côté que ses licences ne permettent pas au réutilisateur de sous-licencier l'œuvre. Sa FAQ donne précisément l'exemple d'une image tierce sous licence Creative Commons partagée sur Facebook : le réutilisateur ne peut pas accorder à Facebook des droits qu'il ne possède pas lui-même.

En conséquence, le fait qu'une image soit exploitable commercialement sous `CC BY` ou `CC BY-SA`, même avec attribution correcte, n'est pas suffisant pour que Fam Space l'envoie automatiquement à Meta.

Références :

- Meta Platform Terms : https://developers.facebook.com/terms/
- Creative Commons FAQ, section sur les conditions des réseaux sociaux : https://creativecommons.org/faq/
- Creative Commons — absence de sous-licence dans les licences CC : https://creativecommons.org/faq/
- CC0 1.0 : https://creativecommons.org/publicdomain/zero/1.0/
- Public Domain Mark 1.0 : https://creativecommons.org/publicdomain/mark/1.0/

## Politique commune d'éligibilité

Une image n'est éligible à une publication automatique Meta que si Fam Space peut raisonnablement démontrer qu'il dispose des droits nécessaires pour la transmettre à Meta dans les conditions imposées par la plateforme.

### Autorisé

1. **Image dont Fam Space détient les droits nécessaires**
   - création Fam Space ;
   - création commandée ou cédée à Fam Space avec des droits suffisants ;
   - aucune restriction contractuelle incompatible avec Meta.

2. **CC0 1.0**
   - provenance vérifiable ;
   - aucune restriction tierce connue qui empêcherait l'utilisation ;
   - les droits à l'image, marques, vie privée ou autres droits distincts du copyright restent à contrôler lorsque le sujet l'exige.

3. **Domaine public / Public Domain Mark fiable**
   - statut vérifiable auprès de la source ;
   - aucune restriction de copyright connue incompatible avec l'utilisation ;
   - les autres droits éventuels restent à contrôler ;
   - lorsque l'auteur est connu, Fam Space conserve le crédit/source dans la mesure du possible, notamment par prudence vis-à-vis des droits moraux.

4. **Autorisation explicite du titulaire des droits**
   - l'autorisation doit couvrir la publication sur les produits Meta et être suffisamment large pour ne pas entrer en conflit avec les licences exigées par Meta ;
   - toute obligation d'attribution ou autre condition prévue par cette autorisation doit être respectée.

### Refusé pour l'automatisation Meta

Les catégories suivantes sont considérées non éligibles pour Facebook, Instagram et Threads lorsqu'elles proviennent d'un tiers :

- `CC BY`, toutes versions ;
- `CC BY-SA`, toutes versions ;
- `CC BY-NC`, `CC BY-NC-SA` ;
- `CC BY-ND`, `CC BY-NC-ND` ;
- toute autre licence Creative Commons tierce qui ne transfère pas à Fam Space les droits nécessaires pour satisfaire les conditions Meta ;
- `All Rights Reserved` sans autorisation explicite ;
- licence inconnue, ambiguë ou absente ;
- provenance insuffisante ou contradictoire ;
- image dont les droits nécessaires ne peuvent pas être raisonnablement vérifiés.

**Important : ajouter un crédit ne rend pas une image `CC BY` ou `CC BY-SA` éligible à l'automatisation Meta.** Le problème ici n'est pas seulement l'attribution ; il concerne aussi l'étendue des droits que Fam Space doit pouvoir accorder à Meta.

## Provenance minimale exigée

Avant qu'une vraie image soit transmise à Meta, le publisher doit pouvoir vérifier au minimum :

- le rôle de l'image (`hero` pour une publication d'article) ;
- la provenance/provider ;
- le statut ou la licence ;
- la page source ;
- le fichier réellement publié ;
- les informations d'auteur lorsque disponibles ;
- toute obligation d'attribution applicable ;
- l'absence d'une restriction connue incompatible avec la publication Meta.

Pour les images externes importées par le pipeline actuel, **Wikimedia Commons reste la source de provenance acceptée par défaut**. L'existence d'une fiche Wikimedia ne suffit toutefois pas : le statut de licence doit lui-même être éligible selon la présente politique.

Une image ne doit jamais être considérée autorisée uniquement parce que son URL pointe vers Wikimedia Commons, parce qu'elle est déjà utilisée dans un article Fam Space ou parce qu'un ancien state la marque comme publiée.

## Attribution

Pour une image autorisée :

- toute attribution exigée par une autorisation spécifique doit être reproduite dans la publication ;
- pour une image du domaine public ou CC0, un crédit n'est pas automatiquement exigé par ces outils de copyright, mais Fam Space conserve auteur et source lorsque les métadonnées disponibles ou les droits moraux le justifient ;
- une attribution incomplète ou impossible lorsqu'elle est obligatoire rend l'image non éligible.

## Comportement par réseau

La règle de droits est commune. Le comportement de publication reste propre à chaque réseau.

### Facebook

Objectif : publier à terme tous les articles éligibles au calendrier social.

- vraie hero conforme à cette politique : publier la vraie image ;
- vraie hero non conforme : ne jamais envoyer cette image à Facebook ;
- hero absente, non vérifiable ou non conforme : utiliser le placeholder Fam Space détenu par Fam Space, après le délai d'attente prévu par le publisher ;
- si la vraie image nécessite un crédit autorisé par cette politique, inclure le crédit complet.

Le placeholder est donc une solution normale de sécurité juridique pour Facebook, pas un échec de publication.

### Instagram

Instagram étant un réseau centré sur le média visuel, le placeholder générique ne doit pas servir à publier artificiellement des séries d'articles sans vraie image exploitable.

- vraie hero conforme : article publiable ;
- hero absente, non vérifiable ou non conforme : **ne pas publier l'article pour le moment** ;
- conserver l'article en attente et le réévaluer lors d'un passage futur si une hero conforme devient disponible.

### Threads

Threads permet une publication utile sans image.

- vraie hero conforme : publication avec image possible ;
- hero absente, non vérifiable ou non conforme : ne pas transmettre l'image et publier, selon la politique Threads qui sera implémentée ultérieurement, un post texte/lien sans image ;
- pas de placeholder générique par défaut sur Threads.

## Séparation des publishers

Facebook, Instagram et Threads doivent conserver :

- des publishers séparés ;
- des fichiers d'état séparés ;
- des limites de rattrapage séparées ;
- des décisions de publication propres à chaque réseau.

En revanche, **la décision “cette image est-elle juridiquement éligible pour Meta ?” doit reposer sur la présente politique commune**, afin d'éviter trois listes de licences divergentes.

À terme, cette logique pourra être centralisée dans un module de validation partagé par les trois publishers. Cette centralisation de code n'est pas réalisée dans l'étape 1.

## Règle de sécurité

En cas de doute :

**ne pas transmettre la vraie image à Meta.**

- Facebook : placeholder Fam Space ;
- Instagram : attente ;
- Threads : texte/lien sans image.

Aucun publisher ne doit élargir de lui-même la liste des images autorisées.

## Conséquence pour l'existant

Cette politique devient la référence pour l'audit Facebook de l'étape suivante.

Les publications Facebook déjà créées avec une vraie image `CC BY`, `CC BY-SA` ou toute autre image désormais refusée devront être identifiées précisément avant toute suppression. Aucun post existant n'est supprimé par la présente étape.

De même, aucun comportement Facebook, Instagram ou Threads n'est modifié par ce document seul.
