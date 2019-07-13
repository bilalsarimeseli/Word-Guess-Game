//GLOBAL VARIABLES
//CREATE AN ARRAY OF WORDS

var words = ['momentum', 'moment', 'torque', 'pressure', 'quark', 'spectrum', 'refraction', 'velocity', 'position', 'vector', 'pascal', 'joule', 'newton', 'watt', 'ampere', 'wave', 'induction', 'resistance', 'acceleration', 'scalar', 'force']


//CHOOSES WORDS RANDOMLY

let randNum = Math.floor(Math.random() * words.length);
let chosenWord = words[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];
let attemptsLeft = 15;
let wins = 0;
let looses = 0;
console.log(chosenWord);


//DOM MANIPULATION
let docUnderScore = document.getElementsByClassName('underScore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');
let docAttemptsLeft = document.getElementsByClassName('attemptsLeft');
let docAttempts = document.getElementById('attempts');

docAttempts.innerHTML = attemptsLeft;
//MAIN VARIABLES


//CREATES UNDERSCORES BASED ON WORD LENGTH

let generateUnderscore = () => {
    for (let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}
console.log(generateUnderscore());

//GETS USER`s GUESS

document.addEventListener('keypress', function (event) {
    document.getElementById("alerts").innerHTML = ""
    // console.log(event);

    console.log(event.keyCode);
    console.log(underScore)
    attemptsLeft--;

    docAttempts.innerHTML = attemptsLeft;

    if (attemptsLeft < 0) {
        looses++
        document.getElementById("alerts").innerHTML = "you lost"

        reset()

    }
    else {

        let keyword = String.fromCharCode(event.keyCode);
        //IF USER`s GUESS IS RIGHT

        if (chosenWord.indexOf(keyword) > -1) {
            //add to right words array



            rightWord.push(keyword);

            //replace underscore with the right letter

            underScore[chosenWord.indexOf(keyword)] = keyword;

            docUnderScore[0].innerHTML = underScore.join(' ');
            docRightGuess[0].innerHTML = rightWord;

            //checks to see if user word matches the guesses

            if (underScore.join('') == chosenWord) {
                wins++
                alert('You Win');
                document.getElementById("alerts").innerHTML = "you win"
                reset()
            }
        } else {
            wrongWord.push(keyword);
            docWrongGuess[0].innerHTML = wrongWord;
        }

    };
})


function reset() {
    console.log("reset")
    console.log(wins, looses)
    randNum = Math.floor(Math.random() * words.length);
    chosenWord = words[randNum];
    underScore = [];
    rightWord = [];
    wrongWord = [];
    attemptsLeft = 15;
    docAttempts.innerHTML = attemptsLeft;

    underscore = generateUnderscore()
    console.log("underscore: ", underScore)
    docUnderScore[0].innerHTML = underScore.join(' ');

    docWrongGuess[0].innerHTML = ""
    docRightGuess[0].innerHTML = "";


}