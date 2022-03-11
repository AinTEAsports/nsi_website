const games = {
    "morpion" : "/morpion/index.html",
    "pendu" : "/pendu/index.html",
    "shifumi" : "/shifumi/index.html"
};


function printChoice() {
    var choice = document.getElementById('selectInput').value;

    if (choice == 'Menu Principal') {
        return;
    }

    document.getElementById('textInput').innerHTML = choice;
}


function getGameName() {
    var gameName = document.getElementById('selectInput').value;

    if (gameName == 'Menu Principal') {
        return null;
    }

    return gameName.toLowerCase();
}


function gameRedirect() {
    var gameName = getGameName();
    
    if (gameName == null) {
        window.alert("[!] You need to select a game [!]");
        return;
    }

    var gameLink = games[gameName];
    window.location.href = gameLink;
}
