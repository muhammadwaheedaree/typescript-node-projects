#! /usr/bin/env node
import inquirer from 'inquirer';
const currency: any = {
    USD: 1,   //base currency    
    PKR: 277,
    INR: 83,
    EUR: 0.92,
    AED : 3.67
};

let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "PKR", "INR","EUR","AED"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "PKR", "INR","EUR","AED"],
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    },
])
let userFromCurrency = user_answer.from
let userToCurrency = user_answer.to
let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / fromAmount
let convertedAmount =baseAmount*toAmount
console.log(convertedAmount);



