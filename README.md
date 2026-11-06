# AR Drawing Free

Application web gratuite et indépendante pour apprendre à dessiner à partir d'un modèle.

## État actuel — version de travail
- Interface d'accueil, caméra AR, dessin libre et leçons de base.
- Import d'une image depuis le téléphone.
- Superposition réglable : opacité, zoom, déplacement horizontal/vertical et rotation.
- Caméra arrière via l'autorisation du navigateur.
- Commande de lampe intégrée, mais elle ne fonctionne que si le téléphone ET le navigateur exposent la fonction torche.
- Dessin libre avec couleur, épaisseur, gomme, annulation (jusqu'à 50 étapes) et export PNG.
- Base PWA : manifeste, icônes iPhone/Android et cache hors ligne.

## Publier avec GitHub Pages
Le site n'est pas considéré comme publié tant que GitHub Pages n'a pas été activé.

1. Ouvre **Settings** dans ce dépôt.
2. Ouvre **Pages**.
3. Dans **Build and deployment**, choisis **Deploy from a branch**.
4. Choisis la branche **main** et le dossier **/(root)**.
5. Appuie sur **Save**, puis attends que GitHub affiche l'adresse du site.

GitHub Pages fournit HTTPS, nécessaire pour demander l'accès à la caméra.

## Installer sur iPhone
Après la publication et l'ouverture du site dans **Safari** :
1. Appuie sur le bouton **Partager**.
2. Choisis **Sur l'écran d'accueil** / **Add to Home Screen**.
3. Si l'option **Ouvrir comme app web** apparaît, active-la.
4. Appuie sur **Ajouter**.

L'installation ne peut pas être faite depuis l'aperçu GitHub du dépôt : il faut d'abord ouvrir le site publié.

## Limites à connaître
- La caméra ne peut pas être vérifiée ici sur le téléphone réel : elle dépend d'iOS, de Safari, de HTTPS et des autorisations.
- La lampe peut être indisponible sur Safari/iPhone même si le bouton apparaît.
- Le cache hors ligne sera installé après la première visite réussie du site publié.
- La bibliothèque de modèles libres de droits, les tutoriels interactifs et la sauvegarde durable des projets restent à développer.

Projet indépendant d'apprentissage du dessin.