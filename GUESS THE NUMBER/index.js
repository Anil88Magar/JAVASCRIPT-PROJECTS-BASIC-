// JavaScript code in guess.js

// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Keep track of the number of guesses
let attempts = 0;

// Get references to HTML elements
const guessField = document.querySelector('#guessField');
const submitGuessButton = document.querySelector('#submitGuess');
const resultDisplay = document.querySelector('#result');
const attemptsDisplay = document.querySelector('#attempts');
const restartGameButton = document.querySelector('#restartGame');

// Function to validate the guess
function validateGuess() {
    const userGuess = parseInt(guessField.value);
    attempts++;

    if (isNaN(userGuess)) {
        resultDisplay.textContent = "Please enter a valid number!";
        return;
    }

    if (userGuess < 1 || userGuess > 100) {
        resultDisplay.textContent = "Your guess should be between 1 and 100!";
        return;
    }

    if (userGuess === randomNumber) {
        resultDisplay.textContent = `Congratulations! You guessed the correct number (${randomNumber}) in ${attempts} attempts!`;
        gameOver();
    } else if (userGuess < randomNumber) {
        resultDisplay.textContent = "Too low! Try again.";
    } else {
        resultDisplay.textContent = "Too high! Try again.";
    }

    attemptsDisplay.textContent = `Number of attempts: ${attempts}`;
}

// Function to end the game
function gameOver() {
    guessField.disabled = true;
    submitGuessButton.disabled = true;
    restartGameButton.style.display = 'block';
}

// Function to restart the game
function restartGame() {
    attempts = 0;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    resultDisplay.textContent = '';
    attemptsDisplay.textContent = '';
    guessField.value = '';
    guessField.disabled = false;
    submitGuessButton.disabled = false;
    restartGameButton.style.display = 'none';
}

// Add event listeners
submitGuessButton.addEventListener('click', (e) => {
    e.preventDefault();
    validateGuess();
});

restartGameButton.addEventListener('click', restartGame);
