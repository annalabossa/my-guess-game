let numberToGuess = Math.floor(Math.random() * 10) + 1;

function guessNumber() {
    const userGuess = document.getElementById('guess').value;
    const resultElement = document.getElementById('result');
    
    if (userGuess == numberToGuess) {
        resultElement.innerText = `Congratulations! You guessed the number ${numberToGuess}.`;
    } else if (userGuess < numberToGuess) {
        resultElement.innerText = 'Too low! Try again.';
    } else if (userGuess > numberToGuess) {
        resultElement.innerText = 'Too high! Try again.';
    } else {
        resultElement.innerText = 'Please enter a valid number.';
    }
}
