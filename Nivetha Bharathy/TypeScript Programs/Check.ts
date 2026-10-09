import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input: string) => {
    try {
        const number = Number(input);

        if (input.trim() === "" || isNaN(number)) {
            throw new Error("Invalid input. Please enter a number.");
        }

        console.log("Valid number:", number);
    } catch (error) {
        console.log("Error:", (error as Error).message);
    } finally {
        console.log("Program execution completed.");
        rl.close();
    }
});
