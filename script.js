// Dictionnaire avec la liste des jeux et leur lien
const games = {
    "enigmes": "/enigmes/index.html",
    "shifumi": "/shifumi/index.html",
    "pendu": "/pendu/index.html",
    "morpion": "/morpion/index.html",
};


// Fonction pour chopper le nom du jeu choisi
function getGameName() {
    var gameName = document.getElementById('selectInput').value;

    if (gameName == 'Choisir un jeu') {
        return null;
    }

    return gameName.toLowerCase();
}


// Fonction du bouton pour rediriger vers le lien quand le bouton est pressé
function gameRedirect() {
    var gameName = getGameName();

    if (gameName == null) {
        window.alert("[!] You need to select a game [!]");
        return;
    }

    var gameLink = games[gameName];
    window.location.href = gameLink;
}


function rickroll() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}