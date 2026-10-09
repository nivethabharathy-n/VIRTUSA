import * as readline from "readline";

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", (str) => {

    let vowels = 0;
    let consonants = 0;

    for (let ch of str.toLowerCase()) {

        if ("aeiou".includes(ch)) {
            vowels++;
        }
        else if (ch >= 'a' && ch <= 'z') {
            consonants++;
        }
    }

    console.log("Vowels =", vowels);
    console.log("Consonants =", consonants);

    rl.close();
});