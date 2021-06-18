'use strict';

function message(alert) {
  document.querySelector('.message').textContent = alert;
}

function numGen() {
  return Math.floor(Math.random() * 20 + 1);
}
let number = numGen();
console.log(number);

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guessValue = Number(document.querySelector('.guess').value);
  console.log(guessValue);
  if (!guessValue) {
    message('Please input a number.');
  } else if (guessValue === number) {
    message(`${number} is correct! You win! 🎉`);
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = number;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.check').style.display = 'none';
    document.querySelector('.again').style.display = 'block';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessValue !== number) {
    if (score > 1) {
      guessValue > number
        ? message("I'm thinking of a lower number...")
        : message("I'm thinking of a higher number...");
      score--;
    } else {
      message('You lost!');
      score--;
      document.querySelector('.check').style.display = 'none';
      document.querySelector('.again').style.display = 'block';
    }
  }
  document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  number = numGen();
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  message('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.check').style.display = 'block';
  document.querySelector('.again').style.display = 'none';
  document.querySelector('body').style.backgroundColor = '#222';
  console.log(number);
});
