var enigmes = {
    "Qu'est ce qui peut tourner et pleurer ?" : "Un robinet",
    "J'ai 4 pattes le matin, 2 pattes le midi et 3 pattes le soir, qui suis-je ?" : "L'Homme",
    "J'ai un dos et 4 pieds pourtant je ne peux pas marcher, qui suis-je ?" : "Une chaise",
    "Je ne fais pas de bruit pour vous reveiller, pourtant je vous reveille, qui suis-je ?" : "Le soleil",
    "Quand je suis frais je suis chaud, qui suis-je ?" : "Le pain",
    "Quand je suis content je me lève, mais je suis plus petit que le reste, qui suis-je ?" : "Le pouce",
    "J'ai un pied mais pas de chaussure, j'ai un chapeau mais pas de tête, qui suis-je ?" : "Un champignon",
    "Plus je suis present et moins je pese, qui suis-je ?" : "Le vide",
};


function ordiRandomChoice() {
    // Je fais une liste avec les elements pierre feuille et ciseau
    // et j'en choisis un au hasard
    var questionList = Object.values(enigmes);
    var randomIndex = (Math.floor(Math.random() * questionList.length));

    return questionList[randomIndex], randomIndex;
}


function generateEnigme() {
    var enigme, index = ordiRandomChoice();
    document.getElementById('enigme').innerHTML = enigme;
}


function sendAnswer() {
    
}


function homeButton() {
    window.location.href = "/";
}
