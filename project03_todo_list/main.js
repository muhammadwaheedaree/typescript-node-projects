#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let running = true;
async function main() {
    while (running) {
        const { action } = await inquirer.prompt([
            {
                type: "list",
                name: "action",
                message: "What would you like to do?",
                choices: ["Add Todo", "List Todos", "Update Todo", "Delete Todo", "Exit"],
            },
        ]);
        switch (action) {
            case "Add Todo":
                await addTodo();
                break;
            case "List Todos":
                listTodos();
                break;
            case "Update Todo":
                await updateTodo();
                break;
            case "Delete Todo":
                await deleteTodo();
                break;
            case "Exit":
                running = false;
                break;
        }
    }
}
async function addTodo() {
    const { text } = await inquirer.prompt([
        {
            type: "input",
            name: "text",
            message: "Enter your todo:",
        },
    ]);
    todos.push({ text });
    console.log(`${text} added to your todos!`);
}
function listTodos() {
    if (todos.length === 0) {
        console.log("You don't have any todos yet.");
        return;
    }
    console.log("\nYour Todos:");
    for (let i = 0; i < todos.length; i++) {
        const { text } = todos[i];
        console.log(`${i + 1}. ${text}`);
    }
}
async function updateTodo() {
    if (todos.length === 0) {
        console.log("You don't have any todos to update.");
        return;
    }
    listTodos();
    const { index } = await inquirer.prompt([
        {
            type: "number",
            name: "index",
            message: "Enter the index of the todo to update:",
            validate: (value) => {
                if (isNaN(value) || value < 1 || value > todos.length) {
                    return "Invalid index. Please enter a valid number between 1 and " + todos.length;
                }
                return true;
            },
        },
    ]);
    const { newText } = await inquirer.prompt([
        {
            type: "input",
            name: "newText",
            message: "Enter the new text for the todo:",
        },
    ]);
    todos[index - 1].text = newText;
    console.log(`Todo #${index} text updated to: ${newText}`);
}
async function deleteTodo() {
    if (todos.length === 0) {
        console.log("You don't have any todos to delete.");
        return;
    }
    listTodos();
    const { index } = await inquirer.prompt([
        {
            type: "number",
            name: "index",
            message: "Enter the index of the todo to delete:",
            validate: (value) => {
                if (isNaN(value) || value < 1 || value > todos.length) {
                    return "Invalid index. Please enter a valid number between 1 and " + todos.length;
                }
                return true;
            },
        },
    ]);
    todos.splice(index - 1, 1); // Remove the todo at the specified index
    console.log(`Todo #${index} deleted successfully!`);
}
main();
