const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;


const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

const Q = 0.25
const D = 0.1
const N = 0.05
const P = 0.01



if (Number.isNaN(amount)) {
    console.log("Invalid");
} else if (amount < MIN || amount > MAX) {
    console.log("Invalid");
} else {

    let Quarters = Math.floor(amount/Q);
    let amount1 = amount % Q;
    let Dimes = Math.floor(amount1/D);
    let amount2 = amount1 % D;
    let Nickels = Math.floor(amount2/N);
    let amount3 = amount2 % N;
    let Pennies = Math.ceil(amount3/P);

    console.log("\n" + Quarters + " quarters, " + Dimes + " dimes, " + Nickels + " nickels, and " + Pennies + " pennies.\n" );
}
