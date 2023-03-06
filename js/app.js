'use strict';

let question1 = prompt("Yes/No: Do I like dogs?").toLowerCase();
if (question1 === 'yes') {
  alert('I do like dogs!');
  // console.log(question1);
} else if (question1 === 'no') {
  alert('Wrong. :( I love dogs! I have two.');
  // console.log(question1);
} else {
  alert('You were suppose to answer y/n');
  // console.log(question1);
}

let question2 = prompt("Yes/No: Do you think I am taller than 5' 6''?").toLowerCase();
if (question2 === 'yes') {
  alert("Close! I am 5' 4''");
  // console.log(question2);
} else if (question2 === 'no') {
  alert("Correct! I am 5' 4''");
  // console.log(question2);
} else {
  alert('You were suppose to answer y/n');
  // console.log(question2);
}

let question3 = prompt("Yes/No: Do I like the outdoors?").toLowerCase();
if (question3 === 'yes') {
  alert('Yeah! I love the outdoors!');
  // console.log(question3);
} else if (question3 === 'no') {
  alert('Wrong. I love the outdoors!');
  // console.log(question3);
} else {
  alert('You were suppose to answer y/n');
  // console.log(question3);
}

let question4 = prompt("Yes/No: Do I like pineapple on my pizza?").toLowerCase();
if (question4 === 'yes') {
  alert('Yes I do!! You were hoping I said no, werent you?');
  // console.log(question4);
} else if (question4 === 'no') {
  alert('Incorrect. Bring me the pineapples!');
  // console.log(question4);
} else {
  alert('You were suppose to answer y/n');
  // console.log(question4);
}

let question5 = prompt("Yes/No: Do I like pina coladas?").toLowerCase();
if (question5 === 'yes') {
  alert('Yes! and getting caught in the rain.');
  // console.log(question5);
} else if (question5 === 'no') {
  alert('Ehhh wrong! They\'re delicious!');
  // console.log(question5);
} else {
  alert('You were suppose to answer y/n');
  // console.log(question5);
}

let userName = prompt('What is your name?').toUpperCase();
console.log(userName);
alert('Hello there, ' + userName + '!' + ' Welcome to my site all about me!');
alert('Enjoy your time here ' + userName + '! Goodbye for now.');