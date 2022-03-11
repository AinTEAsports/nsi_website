function ordiChoice() {
    // Je fais une liste avec les elements pierre feuille et ciseau
    // et j'en choisis un au hasard
    var choices = ['pierre', 'feuille', 'ciseau'];
    var randomChoice = choices[Math.floor(Math.random() * choices.length)];

    return randomChoice;
}


function printOrdiChoice() {
    document.getElementById('choice').innerHTML = ordiChoice();
}
