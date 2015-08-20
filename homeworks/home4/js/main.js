var word = [ "е", "л", "к", "а" ];
var userWord = [];
var wordWas = [""];
var reward = 0;
var error = 0;
var lost = 6;
var game = {
    initialize: function() {
        createArray(userWord);
        var result = prompt('Буква?');
        game.guessLetter(result);
    }

};

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function setToZero() {
    userWord = [];
    wordWas = [""];
    reward = 0;
}

game.guessLetter = function(letter){
    var repeated = false;
    emptyValue = true;
    for (var k = 0; k < wordWas.length; k++) {
        if(letter == wordWas[k]){
            repeated = true;
        }
    }
    if(!repeated){
        guessing = false;
        word.forEach(function(val, i) {
            if(letter === val){
                userWord[i] = val;
                reward += getRandom(1, 21);
                alert("Ты угадал букву, на твоем счету " + reward);
                emptyValue = false;
                guessing = true;
                for (var j = 0; j < userWord.length; j++) {
                    if (userWord[j] == ""){
                        emptyValue = true;
                    }
                }
            }
        });
        if (!guessing){
            error++;
            alert("Ты не угадал букву");
        }
    } else {
        error++;
        alert("Ты уже вводил эту букву");
    }
    if (!emptyValue){
        alert(userWord.join(""))
        setToZero();
        alert("Ура, ты угадал слово");
    } else {
        wordWas.push(letter);
    }
    if (error == lost){
        alert("Ты проиграл ((");
        setToZero();
    }
    if((emptyValue) && (error != lost)){
        game.initialize();
    }
}

function createArray(ar){
    if(ar.length == 0){
        var lengthArray = word.length;
        for (var i = 0; i < word.length; i++) {
            ar.push("");
        }
    }
}

//copy object
var apple = {
    name:"apple",
    quantity: 8,
    sort: "Antonovka"
};
function copyArray(o){
    var objectCopy = {};
    for (var k in o) {
        objectCopy[k] = o[k];
    }
}

var o1 = { a: 1, b: 2 };
var o2 = copy(o1);
function copy(o) {
  var copy = Object.create(Object.getPrototypeOf(o));
  var propNames = Object.getOwnPropertyNames(o);
  propNames.forEach(function(name) {
    var desc = Object.getOwnPropertyDescriptor(o, name);
    Object.defineProperty(copy, name, desc);
  });
  return copy;
}

window.onload = function(){
    var o2 = copy(o1);
    copyArray(apple);
    game.initialize();
}
