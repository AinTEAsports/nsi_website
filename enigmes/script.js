var enigmes = {
    "Qu'est ce qui peut tourner et pleurer ?" : "Un robinet",
    "J'ai 4 pattes le matin, 2 pattes le midi et 3 pattes le soir, qui suis-je ?" : "L'Homme",
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
