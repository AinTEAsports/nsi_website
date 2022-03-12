var userScore = 0;
var ordiScore = 0;


function ordiRandomChoice() {
    // Je fais une liste avec les elements pierre feuille et ciseau
    // et j'en choisis un au hasard
    var choices = ['Pierre', 'Feuille', 'Ciseau'];
    var randomChoice = choices[Math.floor(Math.random() * choices.length)];

    return randomChoice;
}


function userPlayed() {
    var userChoice = document.getElementById('userChoice').value;
    var ordiChoice = ordiRandomChoice();

    document.getElementById('userChoiceText').innerHTML = userChoice;
    document.getElementById('ordiChoice').innerHTML = ordiChoice;
}


function homeButton() {
    window.location.href = "/";
}
