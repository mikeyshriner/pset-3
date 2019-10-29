const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const Amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(Amount)) {
    // print your error message here
} else if (Amount < MIN || Amount > MAX) {
    // print your error message here
} else {
    // write your code for making change here
}
