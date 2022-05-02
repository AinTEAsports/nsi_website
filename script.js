// Dictionnaire avec la liste des jeux et leur lien
const games = {
    "enigmes": "/enigmes/index.html",
    "shifumi": "/shifumi/index.html",
    "pendu": "/pendu/index.html",
};


// Fonction pour recuperer le nom du jeu choisi
function getGameName() {
    // On recupere le nom du jeu
    var gameName = document.getElementById('selectInput').value;

    // Si le jeu a pas été choisi on renvoie 'null'
    if (gameName == 'Choisir un jeu') {
        return null;
    }

    // On retourne le nom du jeu en minuscule
    return gameName.toLowerCase();
}


// Fonction du bouton pour rediriger vers le lien quand le bouton est pressé
function gameRedirect() {
    var gameName = getGameName();

    // Si le jeu existe pas on envoie une alerte
    if (gameName == null) {
        window.alert("[!] Vous devez choisir un jeu [!]");
        return;
    }

    // On recupere le nom du jeu et on redirige vers le lien associé
    var gameLink = games[gameName];
    window.location.href = gameLink;
}


function redirect() {
    window.location.href = "https://www.youtube.com/watch?v=p7YXXieghto";
}