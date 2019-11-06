const readlineSync = require("readline-sync");

const theMonth = String(readlineSync.question("\nEnter a month: "));

if (theMonth == "January" || theMonth == "january" || theMonth == "Jan" || theMonth == "jan") {
      console.log("\n31 days.\n")

} else if (theMonth == "February" || theMonth == "february" || theMonth == "Feb" || theMonth == "feb") {
      console.log("\n28 or 29 days.\n")

} else if (theMonth == "March" || theMonth == "march" || theMonth == "Mar" || theMonth == "mar") {
      console.log("\n31 days.\n")

} else if (theMonth == "April" || theMonth == "april" || theMonth == "Apr" || theMonth == "apr") {
      console.log("\n30 days.\n")

} else if (theMonth == "May" || theMonth == "may") {
      console.log("\n31 days.\n")

} else if (theMonth == "June" || theMonth == "june" || theMonth == "Jun" || theMonth == "jun") {
      console.log("\n30 days.\n")

} else if (theMonth == "July" || theMonth == "july" || theMonth == "Jul" || theMonth == "jul") {
      console.log("\n31 days.\n")

} else if (theMonth == "August" || theMonth == "august" || theMonth == "Aug" || theMonth == "aug") {
      console.log("\n31 days.\n")

} else if (theMonth == "September" || theMonth == "september" || theMonth == "Sep" || theMonth == "sep") {
      console.log("\n30 days.\n")

} else if (theMonth == "October" || theMonth == "october" || theMonth == "Oct" || theMonth == "oct") {
      console.log("\n31 days.\n")

} else if (theMonth == "November" || theMonth == "november" || theMonth == "Nov" || theMonth == "nov") {
      console.log("\n30 days.\n")

} else if (theMonth == "December" || theMonth == "december" || theMonth == "Dec" || theMonth == "dec") {
      console.log("\n31 days.\n")

} else {
      console.log("\nInvalid.\n")
}
