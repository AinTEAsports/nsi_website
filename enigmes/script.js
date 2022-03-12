var enigmes = {
    "Qu'est-ce qui est jaune et qui attend ?" : "Jonathan",
};


function ordiRandomChoice() {
    // Je fais une liste avec les elements pierre feuille et ciseau
    // et j'en choisis un au hasard
    var choices = ['Pierre', 'Feuille', 'Ciseau'];
    var randomChoice = choices[Math.floor(Math.random() * choices.length)];

    return randomChoice;
}

function generateEnigme() {
    var choices = enigmes.keys;
    console.log(choices);
}


function sendAnswer() {

}

function homeButton() {
    window.location.href = "/";
}
