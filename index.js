import inquirer from "inquirer";
import chalk from "chalk";
// classes player & Opponent
class player {
    name;
    fuel = 100;
    constructor(name) {
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
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
// player name & select opponent
let player1 = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Enter your Name:"
});
let Opponent1 = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select Your Opponent",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
//Gather Data
let p1 = new player(player1.name);
let o1 = new Opponent(Opponent1.select);
do {
    // skeleton
    if (Opponent1.select == "Skeleton") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink portion", "Run for your life..."]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Losse,Better Luck newxt Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You  Win"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your
        fuel is ${p1.fuel}`));
        }
        if (ask.option == "Run for your life...") {
            console.log(chalk.red.bold.italic("You loose, Better Luck Next Time"));
            process.exit();
        }
    }
    // assassin
    if (Opponent1.select == "Assassin") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink portion", "Run for your life..."]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Losse,Better Luck newxt Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You  Win"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your
         fuel is ${p1.fuel}`));
        }
        if (ask.option == "Run for your life...") {
            console.log(chalk.red.bold.italic("You loose, Better Luck Next Time"));
            process.exit();
        }
    }
    // zombie
    if (Opponent1.select == "Zombie") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink portion", "Run for your life..."]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Losse,Better Luck newxt Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You  Win"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your
         fuel is ${p1.fuel}`));
        }
        if (ask.option == "Run for your life...") {
            console.log(chalk.red.bold.italic("You loose, Better Luck Next Time"));
            process.exit();
        }
    }
} while (true);
