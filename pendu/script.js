// On initialise les variables utiles
var wordList; // avec le format ["mot", "_ _ _"]
const maxEssais = 13;
var nombreEssais = 0;

// Liste de mots
const words = [
    "Ornithorynque",
    "Lunettes",
    "Numerique",
    "Kernel",
    "Paypal",
    "Macdo",
    "Tajine",
    "Couscous",
    "Merguez",
    "Msemen",
    "JiaoZi",
    "Majuscule",
    "Dictionnaire",
    "Arabe",
    "Noir",
    "Pull",
    "Chien",
    "Masque",
    "Pandemie",
    "Ratatouille",
    "Ramadan",
    "NSI",
    "Antigenique",
    "Photogenique",
    "Photophobique",

    "Deconstitutionnaliseraient",
    "Interdepepartementalisation",
    "Hexakosioihexekontahexaphobie",
    "Glycosylphosphatidylethanolamine",
    "Orthochlorobenzalmalonitrile",
    "Dichlorodiphenyltrichloroethane",
    "Aminomethylpyrimidinylhydroxyethylmethythiazolium",
    "Acide desoxyribonucleique",
    "Hippopotomonstrosesquippedaliophobie",
    "Cyclopentanoperhydrophenanthrene",
    "Apopathodiaphulatophobie",
    "Chickenwings"
]



// Fonction pour remplacer une lettre a un index par une autre lettre
function replace(string, index, letter) {
    let newString = "";

    for (let i = 0; i < string.length; i++) {
        if (i == index) {
            newString += letter;
        } else {
            newString += string[i];
        }
    }

    return newString;
}


// Fonction pour mettre un caractere "char" entre chaque lettre
function join(charList, char) {
    let joined = "";

    for (let i = 0; i < charList.length; i++) {
        joined += charList[i];
        joined += char;
    }

    return joined;
}


// Fonction pour enlever chaque occurence d'une lettre d'un mot
function split(word, char) {
    let splittedWord = [];

    for (let i = 0; i < word.length; i++) {
        if (word[i] != char) {
            splittedWord.push(word[i]);
        }
    }

    return splittedWord;
}


// Renvoie si un mot contient une lettre ou non
function contains(word, char = '') {
    for (let i = 0; i < word.length; i++) {
        if (word[i] == char) {
            return true;
        }
    }

    return false;
}



// Initialise et affiche le nombre d'essais au demarrage de la page
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('maxEssais').innerHTML = "Maximum d'essais : " + maxEssais;
    generateWord();
});



// Fonction pour le bouton home
function homeButton() {
    window.location.href = "/";
}


// Fonction pour reset la page (on l'actualise juste)
function resetPage() {
    window.location.href = "/pendu/index.html";
}


// On recupere la liste de mots
function getWordList() {
    let randomIndex = (Math.floor(Math.random() * words.length));

    let word = words[randomIndex];
    let hiddenWord = "";

    for (let i = 0; i < word.length; i++) {
        hiddenWord += "_ ";
    }

    return [word.toLowerCase(), hiddenWord];
}


// On clear l'input (on met vide)
function clearInput() {
    document.getElementById('char').value = "";
}


// On affiche le mot caché
function generateWord() {
    wordList = getWordList();

    document.getElementById('hiddenWord').innerHTML = wordList[1];
}


// On affiche que l'utilisateur a gagné
function userWon() {
    document.getElementById('congratulations').innerHTML = "Vous avez trouvé le mot !";
}


// On affiche que l'utilisateur a perdu
function userLose() {
    document.getElementById('congratulations').innerHTML = "Perdu, le mot était : " + wordList[0];
}


// Fonction pour ajouter une lettre fausse a la liste des lettres fausses
function addWrongChar(char) {
    let charList = document.getElementById('charList');
    charList = split(charList, ' ');

    charList.push(char);

    nombreEssais++;
    document.getElementById('triesNumber').innerHTML = "Nombre d'essais : " + nombreEssais;

    document.getElementById('charList').innerHTML += join(charList, ' ');


    if (nombreEssais >= maxEssais) {
        userLose();
    }
}


// Fonction pour remplacer les lettres cachées par les lettres trouvées
function insertChar(char) {
    let hiddenWord = document.getElementById('hiddenWord').innerHTML;

    hiddenWord = join(split(hiddenWord, ' '), '');

    for (let i = 0; i < wordList[0].length; i++) {
        if (char == wordList[0][i]) {
            hiddenWord = replace(hiddenWord, i, wordList[0][i]);
            wordList[1] = hiddenWord;
        }
    }

    document.getElementById('hiddenWord').innerHTML = join(wordList[1], ' ');

    let motComplet = join(split(document.getElementById('hiddenWord').innerHTML, ' '), '');

    if (motComplet == wordList[0]) {
        userWon();
    }
}


// Fonction du bouton 'Send'
function sendChar() {
    if (document.getElementById('congratulations').innerHTML) {
        clearInput();
        return;
    }


    let userChar = document.getElementById('char').value.toLowerCase();

    if (userChar.length == 0) {
        return;
    } else if (userChar.length != 1) {
        clearInput();
        window.alert("[!] Invalid input [!]");
        return;
    }

    if (contains(wordList[0], userChar)) {
        insertChar(userChar);
    } else {
        addWrongChar(userChar);
    }

    clearInput();
}