#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  fuelIncrease() {
    this.fuel = 100;
  }
}
class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}

let player = await inquirer.prompt({
  type: "input",
  name: "name",
  message: "Please Enter your Name:",
});

let opponent = await inquirer.prompt({
  type: "list",
  name: "select",
  message: "Select your opponent",
  choices: ["Skeleton", "Assassin", "Zombie"],
});

let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
  if (opponent.select == "Skeleton") {
    let ask = await inquirer.prompt({
      type: "list",
      name: "option",
      message: "Select your opponent",
      choices: ["Attack", "Drink Portion", "Run for your life..."],
    });
    if (ask.option == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(chalk.red.bold.italic("you loos, better luck next time"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.green.bold.italic("You Win"));
          process.exit();
        }
      }
    }
    if (ask.option == "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.bold.italic.green(
          `you drink health portion your fuel is ${p1.fuel}`
        )
      );
    }
    if (ask.option == "Run for your life...") {
      console.log(chalk.red.bold.italic("you loos, better luck next time"));
      process.exit();
    }
  }

  if (opponent.select == "Assassin") {
    let ask = await inquirer.prompt({
      type: "list",
      name: "option",
      message: "Select your opponent",
      choices: ["Attack", "Drink Portion", "Run for your life..."],
    });
    if (ask.option == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(chalk.red.bold.italic("you loos, better luck next time"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.green.bold.italic("You Win"));
          process.exit();
        }
      }
    }
    if (ask.option == "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.bold.italic.green(
          `you drink health portion your fuel is ${p1.fuel}`
        )
      );
    }
    if (ask.option == "Run for your life...") {
      console.log(chalk.red.bold.italic("you loos, better luck next time"));
      process.exit();
    }
  }

  if (opponent.select == "Zombie") {
    let ask = await inquirer.prompt({
      type: "list",
      name: "option",
      message: "Select your opponent",
      choices: ["Attack", "Drink Portion", "Run for your life..."],
    });
    if (ask.option == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(chalk.red.bold.italic("you loos, better luck next time"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.green.bold.italic("You Win"));
          process.exit();
        }
      }
    }
    if (ask.option == "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.bold.italic.green(
          `you drink health portion your fuel is ${p1.fuel}`
        )
      );
    }
    if (ask.option == "Run for your life...") {
      console.log(chalk.red.bold.italic("you loos, better luck next time"));
      process.exit();
    }
  }
} while (true);
