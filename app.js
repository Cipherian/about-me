"use strict";

function questions(answer) {

  answer = answer.toLowerCase();
  if(answer === "yes" || answer === "y") {
    return true;
  } else {
    return false;
  }
}

let question1 = prompt("Is my age 31?");
console.log(questions(question1));

let question2 = prompt("Is my favorite coffee light roast?");
console.log(questions(question2));

let question3 = prompt("Is my height in centimeters 198?");
console.log(questions(question3));

let question4 = prompt("Is my favorite smoothie blackberry?");
console.log(questions(question4));

let question5 = prompt("Is my name Daniel?");
console.log(questions(question5));


//let userName = prompt("What is your name?");
// let points = 0;
// {
//   userName = userName.toUpperCase();
//   alert("Hello and welcome "+ userName + "!");
//   points++;
//   console.log(points);
// }

// let askAge = prompt("What is my age?");
// if (askAge == 31) {
//   alert("You guessed my age correctly!");
//   points += 2;
//   console.log(points);
// } else if (askAge > 31 && askAge <= 35) {
//   alert("I'm not that old yet, but you are close.");
//   points += 1;
//   console.log(points);
// } else if (askAge < 31 && askAge >= 25) {
//   alert("I am not that young, but you are close.");
//   points += 1;
//   console.log(points);
// } else {
//   alert("You are not even close.");
// }

// let coffee = prompt("What is my favorite coffee roast? Light, medium or dark?");
// coffee = coffee.toLowerCase();
// switch (coffee) {
//   case "light roast":
//     case "light":
//     alert("That is indeed my favorite roast");
//     points += 2;
//     console.log(points);
//     break;
//   case "medium roast":
//     case "medium":
//     alert("That is an ok coffee roast");
//     points += 1;
//     console.log(points);
//     break;
//   case "dark roast":
//     case "dark":
//     alert("Dark roast is too bitter for me.");
//     break;
//   default:
//     alert(
//       `Sorry, that is not a coffee roast. Please write dark, medium or light roast!`
//     );
// }

// let height = prompt("What is my height in centimeters?");
// if (height == 198) {
//   alert("That is my height! Nice guess.");
//   points += 2;
//   console.log(points);
// } else if (height > 198 && height <= 210) {
//   alert("That is too tall, but you are close.");
//   points += 1;
//   console.log(points);
// } else if (height < 198 && height >= 185) {
//   alert("That is too short, but you are close.");
//   points += 1;
//   console.log(points);
// } else {
//   alert("That is not even close.");
// }

// let smoothie = prompt(
//   "Which berry is my favorite with smoothies? Blackberry, blueberry or strawberry"
// );
// smoothie = smoothie.toLowerCase();
// switch (smoothie) {
//   case "blackberry":
//     alert("That is indeed my favorite berry to use with smoothies");
//     points += 2;
//     console.log(points);
//     break;
//   case "blueberry":
//     alert("I don't care much for blueberries, but they are alright.");
//     points += 1;
//     console.log(points);
//     break;
//   case "strawberry":
//     alert("Strawberries are good, but not my favorite.");
//     points += 1;
//     console.log(points);
//     break;
//   default:
//     alert("That is not one of the berries that I asked about");
//     points += 1;
//     console.log(points);
//     break;
// }

// let numberGuess;
// let counter = 4;
// while (counter > 0) {
//   numberGuess = prompt("What is the number I am thinking between one and 10?");
//   if (numberGuess == 7) {
//     alert ('that is correct')
//     points++;
//     break;
//   } else if (numberGuess > 7) {
//     alert ('That is too high')
//     counter--;
//   } else if (numberGuess < 7) {-
//     alert("That is too low.");
//     counter--;
// }
// }

// const favoriteColors = [
//   "green",
//   "silver",
//   "gold",
//   "black",
//   "blue",
//   "gray",
//   "grey",
//   "red",
// ];
// const badColors = [
//   "purple",
//   "pink",
//   "teal",
//   "orange",
//   "chartreuse",
//   "lime",
//   "neon",
//   "white",
// ];

// let timer = 6;
// let colorAsk;

// while (timer > 0) {
//   colorAsk = prompt("What are the colors that I like?");
//   for (let i = 0; i < favoriteColors.length; i++) {
//     if (colorAsk.toLowerCase() === favoriteColors[i]) {
//       alert("That is one of my favorite colors");
//       points++;
//       timer--;
//     } else if (colorAsk.toLowerCase() === badColors[i]) {
//       alert("That is not one of my favorite colors");
//       timer--;
//     } 
//   }
// }

// alert("You got " + points + "points!");

// let numberGuess = prompt("Guess a random number");
// let intNumberGuess = parseInt(numberGuess);
// let counter = 4;
// let min = 5;
// let max = 12;
// let num = min + Math.floor(Math.random() * (max - min));

// while (counter > 0) {
//   if (intNumberGuess == num) {
//     alert("That is correct.");
//     points++;
//     stop;
//   } else if (intNumberGuess > num) {
//     alert("That is too high please try again");
//     counter--;
//     prompt(numberGuess);
//   } else if (intNumberGuess < num) {
//     alert("That is too low, please try again. ");
//     prompt(numberGuess);
//     counter--;
//   } else if (counter == 1) {
//     alert("The answer is" + num);
//     stop;
//   }
//   console.log(num)
// }

// function agePrompt() {
//   let age = prompt("What is my age");
//   if (age == 31) document.write("You guessed my age correctly!");
//   else if (age > 31 && age <= 35)
//     document.write("I'm not that old yet, but you are close.");
//   else if (age < 31 && age >= 25)
//     document.write("I am not that young, but you are close.");
//   else document.write("You are not even close.");
// }

// function askCoffee() {
//   let coffee = prompt("What is my favorite coffee roast?");
//   coffee = coffee.toLowerCase();
//   switch (coffee) {
//     case "light roast":
//       document.write("That is indeed my favorite roast");
//       break;
//     case "medium roast":
//       document.write("That is an ok coffee roast");
//       break;
//     case "dark roast":
//       document.write("Dark roast is too bitter for me.");
//     default:
//       document.write(
//         `Sorry, that is not a coffee roast. Please write dark, medium or light roast!`
//       );
//   }
// }

// function askHeight() {
//   let height = prompt("What is my height in centimeters?");
//   if (height == 198) {
//     document.write("That is my height! Nice guess.");
//     return;
//   } else if (height > 198 && height <= 210) {
//     document.write("That is too tall, but you are close.");
//     return;
//   } else if (height < 198 && height >= 185) {
//     document.write("That is too short, but you are close.");
//     return;
//   } else {
//     alert("That is way off, please try again.");
//     askHeight();
//   }
// }

// function askSmoothie() {
//   let smoothie = prompt(
//     "Which berry is my favorite with smoothies? Blackberry, blueberry or strawberry"
//   );
//   smoothie = smoothie.toLowerCase();
//   switch (smoothie) {
//     case "blackberry":
//       document.write("That is indeed my favorite berry to use with smoothies");
//       break;
//     case "blueberry":
//       document.write("I don't care much for blueberries.");
//       break;
//     case "strawberry":
//       document.write("Strawberries are good, but not my favorite.");
//       break;
//     default:
//       document.write("That is not one of the berries that I asked about");
//       break;
//   }

// function askName() {
//   let userName = prompt("What is your name?");
//   userName = userName.toUpperCase();
//   document.write("Hello and welcome ", userName + "!");
// }
