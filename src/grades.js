const readlineSync = require("readline-sync");

const letterGrade = Number(readlineSync.question("\nEnter a grade: "));

const lowA = 90;
const highA = 100;
const lowB = 80;
const highB = 89;
const lowC = 70;
const highC = 79
const lowD = 60;
const highD = 69;
const lowF = 0;
const highF = 59;

if (letterGrade > 100 || letterGrade < 0) {
      console.log("\nInvalid\n")

} else if (letterGrade >= lowA && letterGrade <= highA) {
      console.log("\nYou received an A.\n")

} else if (letterGrade >= lowB && letterGrade < lowA) {
      console.log("\nYou received a B.\n")

} else if (letterGrade >= lowC && letterGrade < lowB) {
      console.log("\nYou received a C.\n")

} else if (letterGrade >= lowD && letterGrade < lowC) {
      console.log("\nYou received a D.\n")

} else if (letterGrade >= lowF && letterGrade < lowD) {
      console.log("\nYou received an F.\n")

} else {
      console.log("\nInvalid.\n")
}
