'use strict';
//.querySelector method returns the first element that is a descendant of node that matches selectors
// console.log(document.querySelector('.message').textContent);

// //setting the content
// document.querySelector('.message').textContent = 'guess the correct number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// //input box
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 76;

let score = 20; //state element
let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 100) + 1;

//lets display the number behind the question marks
//document.querySelector('.number').textContent = secretNumber;

//even listener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when there is no input
  if (guess === 0) {
    document.querySelector('.message').textContent = 'enter any number';
  }
  //when player guess the correct number
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You can have a fun';

    // when we want to mauplate the css.
    document.querySelector('body').style.backgroundColor = '#60b347';
    //increse the witdth of the question box.
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when player guess is higher than then the number
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess is high 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else
      document.querySelector('.score').textContent = 'Better Try Next Time';
  }
  //when player guess is lower than then the number
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess is short 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else
      document.querySelector('.score').textContent = 'Better Try Next Time';
  }
});

//coding challenge 1
/* Implement a game rest functionality, so that the palyer can 
make a new guess! Here is how:

1. Select the element with 'again' class and attach a click event
handler.
2. In the handler function, restore insitial value of the score
and secret and a secretNumber variables.
3. Restore the initial conditions of the message,number,score
and guess input field.
4. Also restore the original background color (#222) and box width
(15 rem) */

//solution
//event handler for again class
document.querySelector('.again').addEventListener('click', function () {
  //so when ever any-one will click again button below things will
  //happens as mention under the function
  score = 20;
  document.querySelector('.score').textContent = score;
  //random number should reset
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  document.querySelector('.number').textContent = '?';
  //changing the message
  document.querySelector('.message').textContent = 'Start guessing...';
  //resetting the background to black again
  document.querySelector('body').style.backgroundColor = '#222';
  //changing the witdth of the question box with original
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
