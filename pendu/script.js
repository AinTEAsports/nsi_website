var wordDict;
const maxEssais = 13;
var nombreEssais = 0;

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
    "Hippopotomonstrosesquippedaliophobie",
    "Cyclopentanoperhydrophenanthrene",
    "Apopathodiaphulatophobie",
    "Chickenwings"
]



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


function join(charList, char) {
    let joined = "";

    for (let i = 0; i < charList.length; i++) {
        joined += charList[i];
        joined += char;
    }

    return joined;
}


function split(word, char) {
    let splittedWord = [];

    for (let i = 0; i < word.length; i++) {
        if (word[i] != char) {
            splittedWord.push(word[i]);
        }
    }

    return splittedWord;
}


function contains(word, char = '') {
    for (let i = 0; i < word.length; i++) {
        if (word[i] == char) {
            return true;
        }
    }

    return false;
}




document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('maxEssais').innerHTML = "Maximum d'essais : " + maxEssais;
    generateWord();
});



function homeButton() {
    window.location.href = "/";
}

function resetPage() {
    window.location.href = "/pendu/index.html";
}


function getWordDict() {
    let randomIndex = (Math.floor(Math.random() * words.length));

    let word = words[randomIndex];
    let hiddenWord = "";

    for (let i = 0; i < word.length; i++) {
        hiddenWord += "_ ";
    }

    return [word.toLowerCase(), hiddenWord];
}


function clearInput() {
    document.getElementById('char').value = "";
}



function generateWord() {
    wordDict = getWordDict();

    document.getElementById('hiddenWord').innerHTML = wordDict[1];

    console.log(wordDict[0]);
}



function userWon() {
    document.getElementById('congratulations').innerHTML = "Vous avez trouvé le mot !";
}


function userLoose() {
    document.getElementById('congratulations').innerHTML = "Perdu, le mot était : " + wordDict[0];
}



function addWrongChar(char) {
    let charList = document.getElementById('charList');
    charList = split(charList, ' ');

    charList.push(char);

    nombreEssais++;
    document.getElementById('triesNumber').innerHTML = "Nombre d'essais : " + nombreEssais;

    document.getElementById('charList').innerHTML += join(charList, ' ');


    if (nombreEssais >= maxEssais) {
        userLoose();
    }
}


function insertChar(char) {
    let hiddenWord = document.getElementById('hiddenWord').innerHTML;

    hiddenWord = join(split(hiddenWord, ' '), '');

    for (let i = 0; i < wordDict[0].length; i++) {
        if (char == wordDict[0][i]) {
            hiddenWord = replace(hiddenWord, i, wordDict[0][i]);
            wordDict[1] = hiddenWord;
        }
    }

    document.getElementById('hiddenWord').innerHTML = join(wordDict[1], ' ');

    let motComplet = join(split(document.getElementById('hiddenWord').innerHTML, ' '), '');

    if (motComplet == wordDict[0]) {
        userWon();
    }
}


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

    if (contains(wordDict[0].toLowerCase(), userChar)) {
        insertChar(userChar);
    } else {
        addWrongChar(userChar);
    }

    clearInput();
}