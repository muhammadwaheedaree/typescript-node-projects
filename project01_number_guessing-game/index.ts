#! /usr/bin/env  node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random()*5+1);

const answers=await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"Please guess a number between 5-1:",
    },
]);
if(answers.userGuessedNumber===randomNumber){
console.log("Congradulation! you guessed the right number.");
}else{
    console.log("Fail! you guess the wrong number");
};

