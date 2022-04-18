var wordDict;


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
    "Dichlorodiphényltrichloroéthane",
    "Aminomethylpyrimidinylhydroxyéthylmethythiazolium",
    "Hippopotomonstrosesquippedaliophobie",
    "Cyclopentanoperhydrophenanthrene",
    "Apopathodiaphulatophobie",
    "Chickenwings"
]




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
    generateWord();
});



function homeButton() {
    window.location.href = "/";
}


function getWordDict() {
    let randomIndex = (Math.floor(Math.random() * words.length));

    let word = words[randomIndex];
    let hiddenWord = "";

    for (let i = 0; i < word.length; i++) {
        hiddenWord += "_ ";
    }

    return { word: hiddenWord };
}


function clearInput() {
    document.getElementById('char').value = "";
}



function generateWord() {
    wordDict = getWordDict();

    document.getElementById('hiddenWord').innerHTML = Object.values(wordDict)[0];
}



function addWrongChar(char) {
    let charList = document.getElementById('charList');
    charList = split(charList, ' ');

    if (contains(charList, char)) {
        return;
    } else {
        charList.push(char);
    }

    document.getElementById('charList').innerHTML += join(charList, ' ');
}


function insertChar(char) {
    let hiddenWord = document.getElementById('hiddenWord').innerHTML;
    hiddenWord = join(split(hiddenWord, ' '), '');

    for (let i = 0; i < Object.keys(wordDict); i++) {
        console.log(i);
    }
}


function sendChar() {

    let userChar = document.getElementById('char').value.toLowerCase();


    if (userChar.length == 0) {
        return;
    } else if (userChar.length != 1) {
        clearInput();
        window.alert("[!] Invalid input [!]");
        return;
    }

    if (contains(Object.keys(wordDict)[0], userChar)) {
        insertChar(userChar);
    } else {
        addWrongChar(userChar);
    }

    clearInput();
}