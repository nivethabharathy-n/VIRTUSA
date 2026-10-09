"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a string: ", function (str) {
    var vowels = 0;
    var consonants = 0;
    for (var _i = 0, _a = str.toLowerCase(); _i < _a.length; _i++) {
        var ch = _a[_i];
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
