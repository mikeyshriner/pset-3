const readlineSync = require("readline-sync");

const theYear = Number(readlineSync.question("\nEnter a year: "));

if (!Number.isInteger(theYear)) {
   console.log("\nInvalid.\n")

} else if (theYear < 0 || theYear > Number.MAX_SAFE_INTEGER) {
   console.log("\nInvalid.\n")

} else if (theYear % 4 == 0) {
   console.log("\n" + theYear + " is a leap year.\n")

} else if (theYear % 4 != 0) {
   console.log("\n" + theYear + " is not a leap year.\n")

} else {
   console.log("\nInvalid.\n")
}
