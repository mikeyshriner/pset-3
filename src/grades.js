const readlineSync = require("readline-sync");

const Grade = Number(readlineSync.question("\nEnter a grade: "));

const MIN = 0;
const MAX = 100;

if (Number.isNaN(Amount)) {
    console.log ("Invalid")
} else if (Grade < MIN || Grade > MAX) {
    console.log ("Invalid")



if (100 >= Grade >= 90) {
    console.log("\nYou recieved an A.")
} else if (90 > Grade >= 80) {
    console.log("\nYou recieved a B.")
} else if (80 > Grade >= 70 ) {
    console.log("\nYou Recieved a C")
} else if (70 > Grade >= 60 ) {
    console.log("\nYou Recieved a D")
} else if (60 > Grade >= 0 ) {
    console.log("\nYou Recieved a F")
}
