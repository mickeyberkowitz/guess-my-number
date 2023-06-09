'use strict';

function generateSecretNumber() {
    return Math.trunc(Math.random() * 20) + 1;
}

let secretNumber = generateSecretNumber();
let currentScore = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (currentScore > 0) {
        if (!guess) {
            document.querySelector('.message').textContent = 'That is not what I wanted';
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = 'WOOHOO YOU WON! 🎉';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = secretNumber;

            if (currentScore > highScore) {
                highScore = currentScore;
                document.querySelector('.highscore').textContent = highScore;
            }
        } else if (guess > secretNumber) {
            document.querySelector('.message').textContent = 'To high! 📈';
            document.querySelector('.score').textContent = --currentScore;
        } else if (guess < secretNumber) {
            document.querySelector('.message').textContent = 'To low! 📉';
            document.querySelector('.score').textContent = --currentScore;
        }
    }
    if (currentScore === 0) {
        document.querySelector('.message').textContent = 'Game Over';
    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = generateSecretNumber();
    currentScore = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = currentScore;
});
