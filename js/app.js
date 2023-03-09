'use strict';

// CLASS 2

let score = 0;

function dogs() {
  let question1 = prompt("Yes/No: Do I like dogs?").toLowerCase();
  if (question1 === 'yes') {
    alert('I do like dogs!');
    score++;
    // console.log(question1);
  } else if (question1 === 'no') {
    alert('Wrong. :( I love dogs! I have two.');
    // console.log(question1);
  } else {
    alert('You were suppose to answer y/n');
    // console.log(question1);
  }
}

function height() {
  let question2 = prompt("Yes/No: Do you think I am taller than 5' 6''?").toLowerCase();
  if (question2 === 'yes') {
    alert("Close! I am 5' 4''");
    // console.log(question2);
  } else if (question2 === 'no') {
    alert("Correct! I am 5' 4''");
    score++;
    // console.log(question2);
  } else {
    alert('You were suppose to answer y/n');
    // console.log(question2);
  }
}

function outdoors() {
  let question3 = prompt('Yes/No: Do I like the outdoors?').toLowerCase();
  if (question3 === 'yes') {
    alert('Yeah! I love the outdoors!');
    score++;
    // console.log(question3);
  } else if (question3 === 'no') {
    alert('Wrong. I love the outdoors!');
    // console.log(question3);
  } else {
    alert('You were suppose to answer y/n');
    // console.log(question3);
  }
}


function pizza() {
  let question4 = prompt("Yes/No: Do I like pineapple on my pizza?").toLowerCase();
  if (question4 === 'yes') {
    alert('Yes I do!! You were hoping I said no, werent you?');
    score++;
    // console.log(question4);
  } else if (question4 === 'no') {
    alert('Incorrect. Bring me the pineapples!');
    // console.log(question4);
  } else {
    alert('You were suppose to answer y/n');
    // console.log(question4);
  }
}

function pinaColadas() {
  let question5 = prompt("Yes/No: Do I like pina coladas?").toLowerCase();
  if (question5 === 'yes') {
    alert('Yes! and getting caught in the rain.');
    score++;
    // console.log(question5);
  } else if (question5 === 'no') {
    alert('Ehhh wrong! They\'re delicious!');
    // console.log(question5);
  } else {
    alert('You were suppose to answer y/n');
    // console.log(question5);
  }
}

function whatIsYourName () {
  let userName = prompt('What is your name?').toUpperCase();
  console.log(userName);
  alert('Hello there, ' + userName + '!' + ' Welcome to my site all about me!');
  alert('Enjoy your time here ' + userName + '! Goodbye for now.');
}

// // Question 6 Below
function game() {
  let answerQ6 = '7';
  let attemptsQ6 = 0;

  while (attemptsQ6 < 4) {
    let userGuessQ6 = prompt('Guess the number between 0-10');
    attemptsQ6++;

    if (userGuessQ6 === answerQ6) {
      alert('Correct! Lucky guess!');
      score++;
      break;

    } else if (userGuessQ6 < answerQ6) {
      alert('Too Low!');

    } else if (userGuessQ6 > answerQ6) {
      alert('Too high!');

    }

    if (attemptsQ6 === 0) {
      alert('You have 4 more attempts!!');
    } else if (attemptsQ6 === 1) {
      alert('You have 3 more attempts!!');
    } else if (attemptsQ6 === 2) {
      alert('You have 2 more attempts!!');
    } else if (attemptsQ6 === 3) {
      alert('This is your last attempt!');
    }

  }

  alert('The Answer is: 7. Refresh the page to play again');
}

// Question 7
function favoriteColor() {
  let answerQ7 = ['red', 'blue', 'green'];
  let attemptsQ7 = 0;

  while (attemptsQ7 < 6) {
    let userGuessQ7 = prompt('What is my favorite color? 💡Hint: There are three possibilities!');
    attemptsQ7++;

    if (userGuessQ7 === answerQ7[0]) {
      alert('Red is one of my favorite colors!');
      score++;
      break;

    } else if (userGuessQ7 === answerQ7[1]) {
      alert('Blue is one of my favorite colors!');
      score++;
      break;

    } else if (userGuessQ7 === answerQ7[2]) {
      alert('Green is one of my favorite colors!');
      score++;
      break;

    } else if (userGuessQ7 === '') {
      alert('You have to pick a color!');

    } else if (userGuessQ7 !== '') {
      alert('Wrong. Try again.');

    }

  }

  alert('Possible correct answers: Red, blue, green');


  // Declare 'score' variable at the top of page before question 1
  // score++; at all correct answers
  // while loop at the bottom of last question

  while (score <= 7) {
    score = alert('You got ' + score + ' questions correct!');
  }
}

dogs();
height();
outdoors();
pizza();
pinaColadas();
whatIsYourName();
game();
favoriteColor();
