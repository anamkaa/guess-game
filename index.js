const chalk = require('chalk');

console.log(chalk.green.bold  ("WELCOME TO THE GAME\n\n"));

var readlineSync = require("readline-sync");
var userName = readlineSync.question("May I know your name? ");
console.log("\n\nWelcome!! " + chalk.bold(userName) + "\nLet us play the game" + (chalk.green.bold(' DO YOU KNOW ME\n')));

console.log(chalk.bold("\nI will be asking you questions about myself and you have to answer.\nSo let's get started!\n"));
console.log("___________________________________________________\n\n");

var score = 0;
function play(question,answer)
{
  var readlineSync = require("readline-sync");
  var userInput = readlineSync.question(chalk.green(question));
  if (userInput.toUpperCase() === answer.toUpperCase())
  {
    console.log(chalk.green("\nGreat!👍 You are right."));
    score = score + 1;
  }
  else
  {
    console.log(chalk.green("\nSorry🙁  You are wrong."));
  }
  console.log(chalk.red.bold("Your score is " + score ));
}

var questionOne = {
  question: "1. Where do I live ?\n-> ",
  answer: "PATNA"
}

var questionTwo = {
  question: "\n\n2. Am I younger than 25 years of age?\n->  ",
  answer: "YES"
}

var questionThree = {
  question: "\n\n3. Do I like Mountains? \n->",
  answer: "YES"
}

var questionFour = {
  question: "\n\n4. Am I a boy?\n-> ",
  answer: "NO"
}

var questionFive = {
  question: "\n\n5. Do I have a pet?\n-> ",
  answer: "NO"
}

var questionSix = {
  question: "\n\n6. Can I play a ukulele? \n->",
  answer: "YES"
}
 
var setList = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix];

for (var i =0; i<setList.length; i++)
{
  play(setList[i].question,setList[i].answer);
  console.log("_______________________________________________");
}

{console.log(chalk.red.bold("\n\nYour final score is " + score+ "🎉"));}

console.log(chalk.red.bold("Thankyou for playing the game.😊"));

// var highScore = [
//   {
//     PlayerA: 6,
//     PlayerB: 5
//   }
// ];

// console.log("\n\nCheckout the highscores👇:\n");
// console.log(highScore);
// console.log("________________________________________________");

var highScore = [
  {
    name:"Player A",
    score:"6"
  },
  {
    name:"Player B",
    score:"5"
  }
];

function updateScore() {
 console.log("\nCheck Highscores below.\nSend a screenshot if you've made a new highscore");
 for(var i=0; i<highScore.length;i++){
   console.log(highScore[i].name + ": " + highScore[i].score);
 }

 
}

updateScore();
// console.log(highScore);
