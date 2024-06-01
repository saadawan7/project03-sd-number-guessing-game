#! /usr/bin/env node
import inquirer from "inquirer";
let isrunning = true;
while (isrunning) {
    let game = await inquirer.prompt([{
            name: "game",
            type: "list",
            message: "Select What Do You Want To Do",
            choices: ["Start Game", "Quit Game"]
        }]);
    if (game.game === "Start Game") {
        const Computerguessednumber = Math.floor(Math.random() * 5 + 1);
        const userguessed = await inquirer.prompt([
            {
                name: "UserGuessedNumber",
                type: "number",
                message: "Guess The Number Between 1 and 5"
            }
        ]);
        if (userguessed.UserGuessedNumber == Computerguessednumber) {
            console.log("Congrats The Number You Guess Was Correct");
        }
        else {
            console.log("You Have Guessed Wrong Number");
        }
    }
    else if (game.game === "Quit Game") {
        isrunning = false;
    }
}
