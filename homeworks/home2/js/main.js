var word = [ "е", "л", "к", "а" ];
var userWord = ["", "", "", ""];
var wordWas = [""];
var reward = 0;
var error = 0;
var lost = 6;

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setToZero() {
    userWord = ["", "", "", ""];
    wordWas = [""];
    reward = 0;
}

function guessLetter(letter){
    var repeated = false;
    for (var k = 0; k < wordWas.length; k++) {
        if(letter == wordWas[k]){
            repeated = true;
        }
    }
    if(repeated == false){
        var guessing = false;
        for (var i = 0; i < word.length; i++) {
            if(letter === word[i]){
                userWord[i] = word[i];
                reward += getRandom(1, 21);
                console.log("Ты угадал букву, на твоем счету " + reward);
                var emptyValue = false;
                var guessing = true;
                for (var j = 0; j < userWord.length; j++) {
                    if (userWord[j] == ""){
                        emptyValue = true;
                    }
                }
            }
        }
        if (guessing == false){
            error++;
            console.log("Ты не угадал букву");
        }
    } else {
        error++;
        console.log("Ты уже вводил эту букву");
    }
    if (error == lost){
        console.log("Ты проиграл ((");
        setToZero();
     }
    if (emptyValue == false){
        console.log(userWord.join(""))
        setToZero();
        console.log("Ура, ты угадал слово");
    } else {
        wordWas.push(letter);
    }
}

window.onload = function(){
    guessLetter("е");
}
