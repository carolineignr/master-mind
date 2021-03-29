
const prompt = require('prompt-sync')({sigint: true});

let guessesCounter = 0;
let correctGuesses = 0;
let correctPositions = 0;

let foundPattern = false;

let maxGuesses;
let patternLength;

function generatePattern() {
    const patternArr = [];

    for(let i = 0; i < patternLength; i++) {
        let randomNumber = generateNumber();

        while (patternArr.find(num => num === randomNumber)) {
            randomNumber = generateNumber();
        }

        patternArr.push(randomNumber);
    }
}

function valdiatePatternGuess(patternGuess) {
    console.log('validando...')
    return true;
}

function generateNumber() {
    return Math.ceil(Math.random() * (6 - 1) + 1);
}

function handleGuesses() {
    while (foundPattern || maxGuesses > guessesCounter) {
        let patternGuess = prompt('Write your pattern guess, please: ');

       foundPattern = valdiatePatternGuess(patternGuess);
       guessesCounter++;

       if (foundPatter) {

       }
    }
    
    
}

function main() {
    prompt('Hello code maker, welcome to Master Mind game');

    maxGuesses = prompt('Define a max number of guesses, please: ');
    maxGuesses = Number(maxGuesses);

    patternLength = prompt('Define the pattern length, please: ');
    patternLength = Number(patternLength);

    generatePattern();

    handleGuesses();
}

main();




