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



function join(word, char) {
    let joinedWord = "";

    for (let i = 0; i < word.length; i++) {
        if (word[i] != char) {
            joinedWord += word[i];
        }
    }

    return joinedWord;
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
        hiddenWord += "_";

        if (i != word.length) {
            hiddenWord += " ";
        }
    }


    return { word: hiddenWord };
}


function clearInput() {
    document.getElementById('char').value = "";
}



function generateWord() {
    let wordDict = getWordDict();

    console.log(wordDict);
    console.log(Object.keys(wordDict)[0]);
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

    console.log(userChar);

    clearInput();
}