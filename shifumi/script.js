// On initialise les variables de score, de nombre de parties jouées et d'egalités
var userScore = 0;
var ordiScore = 0;

var playedParties = 0;
var tiesNumber = 0;


// Fonction pour generer un choix aleatoire de l'ordi
function ordiRandomChoice() {
    // Je fais une liste avec les elements pierre feuille et ciseau
    // et j'en choisis un au hasard
    var choices = ["Pierre", "Feuille", "Ciseau"];
    var randomChoice = choices[Math.floor(Math.random() * choices.length)];

    return randomChoice;
}


// Fonction pour afficher le score, verifier si y'a egalité ou qui a gagné
function adjustScore() {
    // ON recupere les choix de l'ordi et du joueur
    var userChoice = document.getElementById('userChoice').value;
    var ordiChoice = document.getElementById('ordiChoice').innerHTML;

    // On ajuste le score en fonction des choix
    if ((ordiChoice == "Pierre" && userChoice == "Feuille") || (ordiChoice == "Feuille" && userChoice == "Ciseau") || (ordiChoice == "Ciseau" && userChoice == "Pierre")) {
        document.getElementById('winner').innerHTML = "User won !";
        userScore++;
    } else if ((ordiChoice === "Pierre" && userChoice == "Ciseau") || (ordiChoice == "Feuille" && userChoice == "Pierre") || (ordiChoice == "Ciseau" && userChoice == "Feuille")) {
        document.getElementById('winner').innerHTML = "Ordi won !";
        ordiScore++;
    } else if ((ordiChoice == userChoice)) {
        document.getElementById('winner').innerHTML = "Tie !";

        tiesNumber++;
        document.getElementById('tiesNumber').innerHTML = "Egalités : " + tiesNumber;
    }

    // On augmente le nombre de parties jouées
    playedParties++;

    // On met le tout dans la page
    document.getElementById('playedParties').innerHTML = "Parties jouées : " + playedParties;

    var score = userScore + " - " + ordiScore
    document.getElementById('score').innerHTML = score;
}


function userPlayed() {
    var userChoice = document.getElementById('userChoice').value;
    var ordiChoice = ordiRandomChoice();

    document.getElementById('userChoiceText').innerHTML = userChoice;
    document.getElementById('ordiChoice').innerHTML = ordiChoice;

    adjustScore();
}


// Fonction quand on appuie sur le bouton reset, on remet tout a 0
function reset() {
    userScore = 0;
    ordiScore = 0;

    playedParties = 0;
    tiesNumber = 0;

    var score = userScore + " - " + ordiScore
    document.getElementById('score').innerHTML = score;

    document.getElementById('winner').innerHTML = "";
    document.getElementById('userChoiceText').innerHTML = "";
    document.getElementById('ordiChoice').innerHTML = "";

    document.getElementById('playedParties').innerHTML = "Parties jouées : 0";
    document.getElementById('tiesNumber').innerHTML = "Egalités : 0";
}


// Fonction du bouton home
function homeButton() {
    window.location.href = "/";
}