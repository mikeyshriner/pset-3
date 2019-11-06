const readlineSync = require("readline-sync");

const theNumber = Number(readlineSync.question("\nEnter a number: "));

if (!Number.isInteger(theNumber)) {
   console.log("\nInvalid.\n")

} else if (theNumber < (Number.MIN_SAFE_INTEGER) || theNumber > Number.MAX_SAFE_INTEGER) {
   console.log("\nInvalid.\n")

} else if (theNumber < 0) {
   console.log("\nNegative.\n")

} else if (theNumber == 0) {
   console.log("\nZero.\n")

} else if (theNumber > 0) {
   console.log("\nPositive.\n")

} else {
   console.log("\nInvalid.\n")
}
