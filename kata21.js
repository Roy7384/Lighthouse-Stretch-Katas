let prompt = require("prompt-sync")();  //allow code below to use prompt-sync ?

const targetNum = Math.floor(Math.random() * 100);    //generate a random integer from 0 to 100

let answer = undefined;   //varaiable to store input from player
let oldAnswer = []; //array to store all the attempted guesses from player
let guessCount = 0; //varaiable to store guess count

while (answer !== targetNum) {

  guessCount += 1;  //update guess count
  oldAnswer.push(answer); //store answer into oldAnswer
  answer = prompt("Guess a number: ");

  if (oldAnswer.includes(answer)) {
    console.log("Already Guessed");
  } else if (answer - targetNum > 0) {
    console.log("Too High!");
  } else if (answer - targetNum < 0) {
    console.log("Too low");
  } else if (Number(answer) === targetNum) { //default data type from input is string
    console.log("You got it! You took " + guessCount + " attempts!");
  } else if (typeof answer !== 'number') {
    console.log("Not a number! Try again!");
    guessCount -= 1; //remove invalid guess from guess count
  }
}

