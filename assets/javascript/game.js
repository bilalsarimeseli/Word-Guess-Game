//GLOBAL VARIABLES
//CREATE AN ARRAY OF WORDS

var words = ['momentum', 'moment', 'torque', 'pressure', 'quark', 'spectrum', 'refraction', 'velocity', 'position', 'vector', 'pascal', 'joule', 'newton', 'watt', 'ampere', 'wave', 'induction', 'resistance', 'acceleration', 'scalar', 'force']


//CHOOSES WORDS RANDOMLY

let randNum = Math.floor(Math.random() * words.length);
let chosenWord = words[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];
console.log(chosenWord);


//DOM MANIPULATION
let docUnderScore = document.getElementsByClassName('underScore');
let docRightGuess = document.getElementsByClassName('righGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');


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

document.addEventListener('keypress', (event) => {
            let keyword = String.fromCharCode(keyCode);
            //IF USER`s GUESS IS RIGHT

            if (choosenWord.indexOf(keyword) > -1) {
                //add to right words array



                rightWord.push(keyword);

                //replace underscore with the right letter

                underScore[chosenWord.indexOf(keyword)] = keyword;

                docUnderScore[0].innerHTML = underScore.join(' ');
                docRightGuess[0].innerHTML = rightWord;

                //checks to see if user word matches the guesses

                if (underScore.join('') == chosenWord) {

                    alert('You Win');
                }
            } else {
                wrongWord.push(keyword);
                docWrongGuess[0].innerHTML = wrongWord;
            }
        });
