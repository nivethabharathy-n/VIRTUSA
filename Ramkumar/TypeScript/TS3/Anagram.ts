import * as readline from "readline";

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first string: ", (str1) => {

    rl.question("Enter second string: ", (str2) => {

        let a = str1.toLowerCase().split("").sort().join("");
        let b = str2.toLowerCase().split("").sort().join("");

        if (a === b) {
            console.log("Anagram");
        }
        else {
            console.log("Not Anagram");
        }

        rl.close();
    });
});
