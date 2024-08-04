#! /usr/bin/env node
import inquirer from "inquirer";
const questions = [
    {
        question: "Which of the following is a valid TypeScript type assertion syntax?",
        choices: [
            "value as string",
            "(string)value",
            "value::string",
            "string(value)",
        ],
        correctAnswer: "value as string",
    },
    {
        question: "What is the purpose of the 'never' type in TypeScript?",
        choices: [
            "It represents values that are never observed.",
            "It represents the absence of a value.",
            "It is used for values that can be of any type.",
            "It represents values that are always observed.",
        ],
        correctAnswer: "It represents values that are never observed.",
    },
    {
        question: "Which keyword is used to define a type alias in TypeScript?",
        choices: ["type", "alias", "interface", "class"],
        correctAnswer: "type",
    },
    {
        question: "How do you declare a tuple in TypeScript?",
        choices: [
            "[string, number]",
            "(string, number)",
            "{string, number}",
            "<string, number>",
        ],
        correctAnswer: "[string, number]",
    },
    {
        question: "What is the purpose of 'declare' keyword in TypeScript?",
        choices: [
            "To declare variables that exist in the global scope.",
            "To tell TypeScript that a variable or function exists elsewhere.",
            "To define a class or interface.",
            "To initialize a variable with a default value.",
        ],
        correctAnswer: "To tell TypeScript that a variable or function exists elsewhere.",
    },
];
let score = 0;
async function askQuestions() {
    for (const q of questions) {
        const answer = await inquirer.prompt([
            {
                type: "list",
                name: "userAnswer",
                message: q.question,
                choices: q.choices,
            },
        ]);
        if (answer.userAnswer === q.correctAnswer) {
            console.log("Correct!");
            score++;
        }
        else {
            console.log(`Incorrect. The correct answer is "${q.correctAnswer}".`);
        }
    }
    console.log(`\nYour total score is ${score} out of ${questions.length}.`);
}
askQuestions();
