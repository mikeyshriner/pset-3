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
  let Amount1 = Amount - Q*Quarter
  let Quarter = Math.floor(Amount/Q)
  let Amount2 = Amount - D*Dime
  let Dime = Math.floor(Amount2/D)
  let Amount3 = Amount2 - N*Nickel
  let Nickel = Math.floor(Amount3/N)
  let Amount4 = Amount3 - P*Penny
  let Penny = Math.floor(Amount4/P)

console.log (Quarter + "quarters, " + Dime + "dimes, " + Nickel + "nickels, " + Penny + "pennies.");
