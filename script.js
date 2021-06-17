'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent;

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value);
*/
//const numVal = document.querySelector('.number').textContent;
//console.log(num, numVal);

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
  let guessValue = document.querySelector('.guess').value;
  console.log(guessValue);
  if (!guessValue) {
    message('Please input a number.');
  } else if (guessValue == number) {
    message(`${number} is correct! You win! 🎉`);
    document.querySelector('.number').textContent = number;
    document.querySelector('.check').style.display = 'none';
    document.querySelector('.again').style.display = 'block';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessValue > number) {
    message("I'm thinking of a lower number...");
    score -= 1;
  } else if (guessValue < number) {
    message("I'm thinking of a higher number...");
    score -= 1;
  }
  document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  let number = numGen();
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  message('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.check').style.display = 'block';
  document.querySelector('.again').style.display = 'none';
});
