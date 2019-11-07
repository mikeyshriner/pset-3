const readlineSync = require("readline-sync");

const Integer = Number(readlineSync.question("\nEnter an integer: "));

if (!Number.isInteger(Integer)) {
   console.log("\nInvalid.\n")

} else if (Integer < Number.MIN_SAFE_INTEGER || Integer > Number.MAX_SAFE_INTEGER) {
   console.log("\nInvalid.\n")

} else if (Integer % 2 == 0) {
   console.log("\nEven.\n") 

} else if (Integer % 2 == 1 || Integer % 2 == (-1)) {
   console.log("\nOdd.\n")

} else {
   console.log("\nInvalid.\n")
}
