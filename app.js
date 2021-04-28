/* eslint-disable eqeqeq */
'use strict';

let userName = prompt('What is your name?');
alert('Welcome' +' '+ userName);
document.write('Welcome' +' '+ userName);

let score=0;

//Question1
let question1 = prompt('am I from Jordan?');

function q1(uAnswer)
{
  switch (uAnswer.toUpperCase()) {
  case 'YES':
  case 'Y':
    alert('You Are Rock');
    score++;
    break;
  case 'NO':
  case 'N':
    alert('You lost a point');
    score--;
    break;
  }
}
q1(question1);
console.log(score);

// // // //Question2


let question2 = prompt('Am I working currently?');

function q2(uAnswer2) {
  switch (uAnswer2.toLocaleLowerCase()) {
  case 'yes':
  case 'y':
    alert('A wrong answer, I still have no Job :(!');
    break;

  case 'no':
  case 'n':
    alert('correct unfortunatelly! :D');
    score++;
    break;
  }
}
q2(question2);
console.log(score);


// // // //Question3


let question3 = prompt('Is My Favorite color Violet?');

function q3(uAnswer3){
  switch (uAnswer3.toLocaleLowerCase()) {
  case 'yes':
  case 'y':
    alert('Correct, I am in love with this color!');
    score++;
    break;

  case 'no':
  case 'n':
    alert('wrong answer, Violet is my favorite!');
    break;
  }
}
q3(question3);
console.log(score);


// // //Question4

let question4 = prompt('Is my age seems to be more than 25?');
function q4(uAnswer4)
{
  switch (uAnswer4.toLocaleLowerCase()) {
  case 'yes':
  case 'y':
    alert('NO! Still 23, Young enough Ha?');
    break;

  case 'no':
  case 'n':
    alert('Exactly, I am 23');
    score++;
    break;
  }
}
q4(question4);
console.log(score);

// //Question5

let question5 = prompt('is it correct that my favorite hobby is Drawing?');

function q5(uAnswer5){
  switch (uAnswer5.toLocaleLowerCase()) {
  case 'yes':
  case 'y':
    alert('Definetly wrong, I know nothing about it');
    break;

  case 'no':
  case 'n':
    alert('Correct, My first I admire Reading the most!');
    score++;
    break;
  }
}
q5(question5);
console.log(score);

// Qus

let userInput = Number(prompt('Please guess my number?'));
let xCounter = 0;

function guess(userNumber){
  for (let i = 0; i < 4; i++) {
    if (userInput > 3) {
      alert('Your guess is wrong and it is too high ');
      userNumber = prompt('Guess again! , the number between 0 - 10');
      xCounter++;
    } else if (userNumber < 3) {
      alert('Yoru guess is wrong and it is too low ');
      userNumber = prompt('Guess again! , the number between 0 - 10');
      xCounter++;
    } else {
      alert('Correct ' + userNumber + ' is my favorite number');
      score++;
      break;
    }
  }
  if (xCounter == 4) {
    alert('The number is 3');
  }
}
guess(userInput);
console.log(score);
//  // qus
// //Question7

let favFruit = ['APPLE', 'BANANA', 'MANGO', 'STRAWBERRY', 'ORANGE', 'GRAPES'];
let userAnswer = prompt('what is my favorite fruit?');
userAnswer = userAnswer.toUpperCase();
let counter = 0;

function fruit(uFruit){
  for (let i = 0; i < 6; i++) {
    if (uFruit === favFruit[0] || uFruit === favFruit[1] || uFruit === favFruit[2] || uFruit === favFruit[3] || uFruit === favFruit[4] || uFruit === favFruit[5]) {
      alert('correct!');
      //   score++;
      break;
    } else {
      alert('sorry, wrong answer, try again');
      userAnswer =prompt('what is my favorite fruit?');
      counter++;
    //   alert('My favorite fruits are: apple, banana, mango, strwaberry, orange');
    }
    if (counter == 6) {
      alert('Sorry you guess 6 wrong asnwers \nAPPLE, BANANA, MANGO, STRAWBERRY, ORANGE, GRAPES');
    }
  }
}
fruit(userAnswer);
console.log(score);

alert('Welcome ' + userName + ' You did Great!');
alert('Yor Score is ' + score);
