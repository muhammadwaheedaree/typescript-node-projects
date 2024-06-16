#! /usr/bin/env node

import inquirer from "inquirer";

const result = await inquirer.prompt([

{ message: "Enter first number", type: "number", name: "firstNumber" },

{ message: "Enter second number", type: "number", name: "secondNumber" },
{
Message: "Select one of the operators to perform action operation",
type: "list",
name: "operator",
choices: ["+", "-", "*", "/"],
},
]);


 if (result.operator === "+") {
 console.log(result.firstNumber + result.secondNumber)
 }
 else if (result.operator === "-")  {

   console.log(result.firstNumber - result.secondNumber);
 } 
 else if (result.operator === "*") {
   console.log(result.firstNumber * result.secondNumber);
 } 
 else if (result.operator === "/") {
   
 console.log(result.firstNumber / result.secondNumber);}
 
 else { console.log("Please select a valid operator")}

