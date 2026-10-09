import * as readline from "readline";

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {

    let n = Number(input);
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }

    console.log("Factorial =", fact);

    rl.close();
});