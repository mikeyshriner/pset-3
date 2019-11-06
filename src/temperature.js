const readlineSync = require("readline-sync");

const theTemperature = Number(readlineSync.question("\nEnter a temperature: "));
const theScale = String(readlineSync.question("Enter a scale: "))

if (theTemperature < (Number.MIN_SAFE_INTEGER) || theTemperature > Number.MAX_SAFE_INTEGER) {
      console.log("\nInvalid.\n")

} else if (theTemperature <= 32 && (theScale == "F" || theScale == "f")){
      console.log("\nSolid.\n")

} else if ((theTemperature > 32 && theTemperature < 212) && (theScale == "F" || theScale == "f")){
      console.log("\nLiquid.\n")

} else if (theTemperature >= 212 && (theScale == "F" || theScale == "f")){
      console.log("\nGas.\n")

} else if (theTemperature <= 0 && (theScale == "C" || theScale == "c")){
      console.log("\nSolid.\n")

} else if ((theTemperature > 0 && theTemperature < 100) && (theScale == "C" || theScale == "c")){
      console.log("\nLiquid.\n")

} else if (theTemperature >= 100 && (theScale == "C" || theScale == "c")){
      console.log("\nGas.\n")

} else if (theTemperature <= 273 && (theScale == "K" || theScale == "k")){
      console.log("\nSolid.\n")

} else if ((theTemperature > 273 && theTemperature < 373) && (theScale == "K" || theScale == "k")){
      console.log("\nLiquid.\n")

} else if (theTemperature >= 373 && (theScale == "K" || theScale == "k")){
      console.log("\nGas.\n")

} else {
      console.log("\nInvalid.\n")
}
