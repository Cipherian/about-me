"use strict";

function askName() {
  let userName = prompt("What is your name?");
  userName = userName.toUpperCase();
  document.write("Hello and welcome ", userName + "!");
}

function agePrompt() {
  let age = prompt("What is my age");
  if (age == 31) document.write("You guessed my age correctly!");
  else if (age > 31 && age <= 35)
    document.write("I'm not that old yet, but you are close.");
  else if (age < 31 && age >= 25)
    document.write("I am not that young, but you are close.");
  else document.write("You are not even close.");
}

function askCoffee() {
  let coffee = prompt("What is my favorite coffee roast?");
  coffee = coffee.toLowerCase();
  switch (coffee) {
    case "light roast":
      document.write("That is indeed my favorite roast");
      break;
    case "medium roast":
      document.write("That is an ok coffee roast");
      break;
    case "dark roast":
      document.write("Dark roast is too bitter for me.");
    default:
      document.write(
        `Sorry, that is not a coffee roast. Please write dark, medium or light roast!`
      );
  }
}

function askHeight() {
  let height = prompt("What is my height in centimeters?");
  if (height == 198) {
    document.write("That is my height! Nice guess.");
    return;
  } else if (height > 198 && height <= 210) {
    document.write("That is too tall, but you are close.");
    return;
  } else if (height < 198 && height >= 185) {
    document.write("That is too short, but you are close.");
    return;
  } else {
    alert("That is way off, please try again.");
    askHeight();
  }
}
function askSmoothie() {
  let smoothie = prompt(
    "Which berry is my favorite with smoothies? Blackberry, blueberry or strawberry"
  );
  smoothie = smoothie.toLowerCase();
  switch (smoothie) {
    case "blackberry":
      document.write("That is indeed my favorite berry to use with smoothies");
      break;
    case "blueberry":
      document.write("I don't care much for blueberries.");
      break;
    case "strawberry":
      document.write("Strawberries are good, but not my favorite.");
      break;
    default:
      document.write("That is not one of the berries that I asked about");
      break;
  }
}
