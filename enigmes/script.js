// Dictionnaire ou les enigmes/reponses sont
const enigmes = {
    "Qu'est ce qui peut tourner et pleurer ?": "Un robinet",
    "J'ai 4 pattes le matin, 2 pattes le midi et 3 pattes le soir, qui suis-je ?": "L'Homme",
    "J'ai un dos et 4 pieds pourtant je ne peux pas marcher, qui suis-je ?": "Une chaise",
    "Je ne fais pas de bruit pour vous reveiller, pourtant je vous reveille, qui suis-je ?": "Le soleil",
    "Quand je suis frais je suis chaud, qui suis-je ?": "Le pain",
    "Quand je suis content je me lève, mais je suis plus petit que le reste, qui suis-je ?": "Le pouce",
    "J'ai un pied mais pas de chaussure, j'ai un chapeau mais pas de tête, qui suis-je ?": "Un champignon",
    "Plus je suis present et moins je pese, qui suis-je ?": "Le vide",
    "Je suis meilleur que Dieu, pire que le diable, les pauvres l'ont, les riches en ont besoin, si tu me mange tu meurt, qui suis-je ?": "Rien"
};

// Index de l'enigme actuelle
var index;


// Fonction pour lancer la generation de l'enigme dès que la page est lancée
document.addEventListener('DOMContentLoaded', function() {
    generateEnigme();
});


// On recupere un nombre aleatoire
function randomChoice() {
    var randomIndex = (Math.floor(Math.random() * Object.keys(enigmes).length));

    return randomIndex;
}


// On choisit une enigme aleatoire (avec un index aleatoire)
function generateEnigme() {
    // Je reinitialise le texte de bonne ou mauvaise reponse
    document.getElementById('goodfalsereponse').innerHTML = "";

    // Je reinitialise le nombre d'erreurs de la precedente enigme
    document.getElementById('triesNumber').innerHTML = 0;

    // Je choisis un nombre random
    index = randomChoice();

    var enigmeList = Object.keys(enigmes);
    var reponseList = Object.values(enigmes);

    var enigme = enigmeList[index];
    var reponse = reponseList[index];

    // Je reinitialise le contenu de l'input
    document.getElementById('userResponse').value = "";

    // Et celui de la reponse
    document.getElementById('reponse').innerHTML = "";

    document.getElementById('enigme').innerHTML = enigme;
}


// On envoie la reponse entree, et on affiche du texte en fonction de si c'est juste ou faux
function sendAnswer() {
    let enigmeAffichee = document.getElementById('enigme').innerHTML;
    let userReponse = document.getElementById('userResponse').value;

    let reponseList = Object.values(enigmes);


    if (userReponse == "") {
        return;
    }


    if (userReponse.toLowerCase() == reponseList[index].toLowerCase()) {
        document.getElementById('goodfalsereponse').innerHTML = "Bonne reponse !"
    } else {
        document.getElementById('goodfalsereponse').innerHTML = "Mauvaise reponse !"

        let essaisNumber = document.getElementById('triesNumber').innerHTML;
        essaisNumber++;
        document.getElementById('triesNumber').innerHTML = essaisNumber;
    }
}


// Fonction pour afficher la reponse
function showAnswer() {
    let enigme = document.getElementById('enigme').innerHTML;
    let reponse = enigmes[enigme];


    document.getElementById('reponse').innerHTML = reponse;
}


// Fonction pour retourner au bouton home
function homeButton() {
    window.location.href = "/";
}