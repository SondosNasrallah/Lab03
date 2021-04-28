'use strict'; 

let userName = prompt('What is your name?');
alert('Welcome' +' '+ userName);
document.write('Welcome' +' '+ userName);

let score=0;

//Question1

let question1 = prompt('Am I from Jordan?');
  
switch (question1.toLocaleLowerCase()) {
    case 'yes':
    case 'y':
        alert('Yes, Iam from Jordan');
        score++;
    break; 
         
     case 'no':
     case 'n':
         alert('wrong answer I am from there');
         break;
    
}
console.log(score);



//Question2


  let question2 = prompt('Am I working currently?');
  
  switch (question2.toLocaleLowerCase()) {
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
console.log(score);


//Question3


  let question3 = prompt('Is My Favorite color Violet?');


  switch (question3.toLocaleLowerCase()) {
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
console.log(score);


//Question4

  let question4 = prompt('Is my age seems to be more than 25?');

  switch (question4.toLocaleLowerCase()) {
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
 console.log(score);

//Question5

 let question5 = prompt('is it correct that my favorite hobby is Drwing?');
 
 
 switch (question5.toLocaleLowerCase()) {
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
console.log(score);

//Question6

let nuMber=prompt('guess my lucky number');
console.log(nuMber);

let counter = 0;
if (counter == 4) {
    alert('sorry you run out of attempts, The correct answer is 3!');
}

while (counter < 4 && nuMber !==3) {
    
    if (nuMber < 10) {
       prompt ('you guessed too high', 'try again with a number between 1-10');
        counter++    

    }else if (nuMber > 10) {
        prompt ('you guessed too low', 'try again with a number between 1-10')
        counter++;
    }
}
console.log(score);

//Question7

/*let favFruit =['apple', 'banana', 'mango', 'strwaberry', 'orange'];
let favFruit = prompt('what is my favorite fruit?');
let guess = favFruit.toLocaleLowerCase();

for (var i = 0; i<favFruit.length; i++) {
    if (guess === favFruit[i]) {
        alert ('correct!');
        score++

        i=6;
        break;
    }
}
   if (i == 6) {
       alert ('sorry, wrong answer, try again');
   }
alert ('My favorite fruits are: apple, banana, mango, strwaberry, orange');

console.log(score);*/


alert('Welcome' +' '+ userName + 'You did Great!');