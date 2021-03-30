
const prompt = require('prompt-sync')({ sigint: true });

let guessesCounter = 0;
let correctPositions = 0;
let correctGuesses = [];

let foundPattern = false;

let maxGuesses;
let patternLength = 0;
let patternGuess = [];
const patternArr = [];

function generatePattern() {
    for (let i = 0; i < patternLength; i++) {
        let randomNumber = generateRandomNumber();

        while (patternArr.find(num => num === randomNumber)) {
            randomNumber = generateRandomNumber();
        }

        patternArr.push(randomNumber);
    }
}

function valdiatePatternGuess(patternGuess) {
    for (let i = 0; i < patternLength; i++) {
        for (let j = 0; j < patternLength; j++) {
            if (patternArr[i] === patternGuess[j]) {
                if (!correctGuesses.includes(patternGuess[j])) correctGuesses.push(patternGuess[j]);

                if (i === j) {
                    correctPositions++;
                }
            }
        }
    }
    return correctPositions === patternLength ? true : false;
}

function validateInput(value, func) {
    if (isNaN(value)) {
        console.log('String is not permitted. Please type an integer value.')
        func();
    }

    if (value <= 0) {
        console.log('Please type a value bigger than 0.')
        func();
    }

    if (value > 6) {
        console.log('Please type a value smaller or equal to 6.')
        func();
    }
}

function generateRandomNumber() {
    return Math.floor(Math.random() * (7 - 1) + 1);
}

function getPatternGuess() {
    patternGuess = prompt(`Write your pattern guess with length size \
        equal to ${patternLength}, please: `);;

    patternGuess = patternGuess.split('');
    patternGuess = patternGuess.map(num => Number(num));
}

function getPatternLength() {
    patternLength = prompt('Define the pattern length (cannot be greater than 6), please: ');
    patternLength = Number(patternLength);

    validateInput(patternLength, getPatternLength);
}

function getMaxGuesses() {
    maxGuesses = prompt('Define a max number of guesses (only numbers), please: ');
    maxGuesses = Number(maxGuesses);

    validateInput(maxGuesses, getMaxGuesses);
}

function handleGuesses() {
    while (foundPattern || maxGuesses > guessesCounter) {

        while (patternGuess.length != patternLength) {
            getPatternGuess();
        }

        foundPattern = valdiatePatternGuess(patternGuess);

        guessesCounter++;

        console.log(`Output: ${correctGuesses.length} correct, ${correctPositions} correct position.`)

        correctGuesses = [];
        correctPositions = 0;
        patternGuess = [];

        if (foundPattern) {
            return console.log(`You broke the code in ${guessesCounter} guesses!`);
        }
    }

    return console.log(`You were unable to break the code in ${guessesCounter} guesses.
        Code pattern is: ${patternArr.join('')}.`)
}

(() => {
    console.log('Hello code maker, welcome to Master Mind game');

    getMaxGuesses();

    getPatternLength();

    generatePattern();

    handleGuesses();
})();




