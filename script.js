'use strict';
// console.log(document.querySelector('.message').textContent);
// const number = document.querySelector('.number').textContent;
// const score = document.querySelector('.score').textContent;
// console.log(number, score);
let sNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(sNumber);
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    // when there is no input
    if (!guess) {
        document.querySelector('.message').textContent =
            'type a number from 1 to 20';
        document.querySelector('body').style.backgroundColor = 'white';
        // when the player wins
    } else if (guess === sNumber) {
        document.querySelector('.number').textContent = sNumber;
        document.querySelector('.message').textContent = 'correct Number !';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';

        // when the guess is to high
    } else if (guess > sNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'too high';
            document.querySelector('body').style.backgroundColor = 'red';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'try again';
            document.querySelector('.score').textContent = 0;
        }

        // when the guess is to low
    } else if (guess < sNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'too low';
            document.querySelector('body').style.backgroundColor = 'blue';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'try again';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    sNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    // console.log(sNumber);
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});