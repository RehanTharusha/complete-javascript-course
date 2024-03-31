'use strict';

// document.querySelector('.guess').value = 23;

// console.log((document.querySelector('.guess').value = 23));

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

console.log(secretNumber);

const message = document.querySelector('.message');

function checkGuess() {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'Please input a number...';
  } else if (guess === secretNumber) {
    message.textContent = 'Correct Number!';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (guess > secretNumber) {
    message.textContent = 'Too High!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    message.textContent = 'Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
}

document.querySelector('.check').addEventListener('click', checkGuess);

document.addEventListener('keypress', function (event) {
  // Check if the pressed key is Enter (keycode 13)
  if (event.key === 'Enter') {
    // Call the checkGuess function
    checkGuess();
  }
});
