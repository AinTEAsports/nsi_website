var userScore = 0;
var ordiScore = 0;


function ordiRandomChoice() {
    // Je fais une liste avec les elements pierre feuille et ciseau
    // et j'en choisis un au hasard
    var choices = ['Pierre', 'Feuille', 'Ciseau'];
    var randomChoice = choices[Math.floor(Math.random() * choices.length)];

    return randomChoice;
}


function adjustScore() {
    var userChoice = document.getElementById('userChoice').value;
    var ordiChoice = document.getElementById('ordiChoice');

    console.log(userChoice);
    console.log(ordiChoice);

    if ((ordiChoice === "Pierre" && userChoice === "Ciseau") || (ordiChoice === "Feuille" && userChoice === "Ciseau") || (ordiChoice === "Ciseau" && userChoice === "Pierre")) {
        document.getElementById('winner').innerHTML = "User won !";
    } else if ((ordiChoice === "Pierre" && userChoice === "Ciseau") || (ordiChoice === "Feuille" && userChoice === "Pierre") || (ordiChoice === "Ciseau" && userChoice === "Feuille")) {
        document.getElementById('winner').innerHTML = "Ordi won !";
    } else if ((ordiChoice === userChoice)) {
        document.getElementById('winner').innerHTML = "Tie !";
    } else {
        document.getElementById('winner').innerHTML = "!!! PROBLEM !!!";
    }
}


function userPlayed() {
    var userChoice = document.getElementById('userChoice').value;
    var ordiChoice = ordiRandomChoice();

    document.getElementById('userChoiceText').innerHTML = userChoice;
    document.getElementById('ordiChoice').innerHTML = ordiChoice;

    adjustScore();
}


function homeButton() {
    window.location.href = "/";
}
