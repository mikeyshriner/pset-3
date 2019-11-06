const readlineSync = require("readline-sync");

const theInteger = Number(readlineSync.question("\nEnter an integer: "));

if (!Number.isInteger(theInteger)) {
   console.log("\nInvalid.\n")

} else if (theInteger < Number.MIN_SAFE_INTEGER || theInteger > Number.MAX_SAFE_INTEGER) {
   console.log("\nInvalid.\n")

} else if (theInteger % 2 == 0) {
   console.log("\nEven.\n")

} else if (theInteger % 2 == 1 || theInteger % 2 == (-1)) {
   console.log("\nOdd.\n")

} else {
   console.log("\nInvalid.\n")
}
