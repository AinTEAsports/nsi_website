// Dictionnaire avec la liste des jeux et leur lien
const games = {
    "morpion" : "/morpion/index.html",
    "pendu" : "/pendu/index.html",
    "shifumi" : "/shifumi/index.html"
};


// Fonction pour chopper le nom du jeu choisi
function getGameName() {
    var gameName = document.getElementById('selectInput').value;

    if (gameName == 'Menu Principal') {
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
