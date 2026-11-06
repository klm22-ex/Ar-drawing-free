# AR Drawing Free

Application web gratuite et indépendante pour apprendre à dessiner à partir d'un modèle.

## Fonctions présentes dans cette version de travail
- Accueil, caméra AR, bibliothèque de modèles, dessin libre et leçon guidée.
- Import d'une image depuis le téléphone.
- Superposition réglable : opacité, zoom, déplacement horizontal/vertical et rotation.
- Caméra arrière via l'autorisation du navigateur.
- Commande de lampe : elle ne fonctionne que si le téléphone et le navigateur exposent la fonction torche.
- Dessin libre avec couleur, épaisseur, gomme, annulation (jusqu'à 50 étapes) et export PNG.
- Six modèles SVG originaux créés pour ce projet : maison, chat, fleur, papillon, poisson et arbre.
- Leçon interactive en quatre étapes pour dessiner une maison.
- Base PWA : manifeste, icônes et cache hors ligne.

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

## Limites et tests à faire sur iPhone
- Le code JavaScript et le manifeste sont vérifiés, mais la caméra n'a pas encore été testée sur l'appareil réel.
- La lampe peut être indisponible sur Safari/iPhone même si le bouton apparaît.
- Le cache hors ligne s'installe après la première visite réussie du site publié.
- L'export PNG doit être testé dans Safari iOS : le navigateur peut présenter le fichier ou proposer le partage selon sa version.

Projet indépendant d'apprentissage du dessin.