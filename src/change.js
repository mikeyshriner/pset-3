const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const Amount = Number(readlineSync.question("\nEnter a dollar amount: "));

Q = 0.25
D = 0.10

N = 0.5
P = .01

if (Number.isNaN(Amount)) {
    console.log ("Invalid")
} else if (Amount < MIN || Amount > MAX) {
    console.log ("Invalid")
} else {
