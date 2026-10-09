const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your date of birth (YYYY-MM-DD): ", function(dob) {

    let birthDate = new Date(dob);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    if (
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
         today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    console.log("Age:", age);

    rl.close();
});