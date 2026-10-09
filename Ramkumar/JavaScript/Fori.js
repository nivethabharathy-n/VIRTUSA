const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(input) {

    let num = Number(input);

    if (Number.isInteger(num)) {
        console.log("Integer");
    } else {
        console.log("Floating-point");
    }

    rl.close();
})