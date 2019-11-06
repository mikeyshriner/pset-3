const readlineSync = require("readline-sync");

const cardEntered = String(readlineSync.question("\nEnter a playing card: "));

let A = "\nAce"
let K = "\nKing"
let Q = "\nQueen"
let J = "\nJack"
let Tens = "\nTen"
let Nines = "\nNine"
let Eights = "\nEight"
let Sevens = "\nSeven"
let Sixes = "\nSix"
let Fives = "\nFive"
let Fours = "\nFour"
let Threes= "\nThree"
let Twos = "\nTwo"

let S = " of Spades.\n"
let H = " of Hearts.\n"
let D = " of Diamonds.\n"
let C = " of Clubs.\n"

if (cardEntered == "AS" || cardEntered == "as"){
    console.log(A.concat(S) + "")
} else if (cardEntered == "AH" || cardEntered == "ah"){
    console.log(A.concat(H) + "")
} else if (cardEntered == "AD" || cardEntered == "ad"){
    console.log(A.concat(D) + "")
} else if (cardEntered == "AC" || cardEntered == "ac"){
    console.log(A.concat(C) + "")
} else if (cardEntered == "KS" || cardEntered == "ks"){
    console.log(K.concat(S) + "")
} else if (cardEntered == "KH" || cardEntered == "kh"){
    console.log(K.concat(H) + "")
} else if (cardEntered == "KD" || cardEntered == "kd"){
    console.log(K.concat(D) + "")
} else if (cardEntered == "KC" || cardEntered == "kc"){
    console.log(K.concat(C) + "")
} else if (cardEntered == "QS" || cardEntered == "qs"){
    console.log(Q.concat(S) + "")
} else if (cardEntered == "QH" || cardEntered == "qh"){
    console.log(Q.concat(H) + "")
} else if (cardEntered == "QD" || cardEntered == "qd"){
    console.log(Q.concat(D) + "")
} else if (cardEntered == "QC" || cardEntered == "qc"){
    console.log(Q.concat(C) + "")
} else if (cardEntered == "JS" || cardEntered == "js"){
    console.log(J.concat(S) + "")
} else if (cardEntered == "JH" || cardEntered == "jh"){
    console.log(J.concat(H) + "")
} else if (cardEntered == "JD" || cardEntered == "jd"){
    console.log(J.concat(D) + "")
} else if (cardEntered == "JC" || cardEntered == "jc"){
    console.log(J.concat(C) + "")
} else if (cardEntered == "TS" || cardEntered == "ts"){
    console.log(Tens.concat(S) + "")
} else if (cardEntered == "TH" || cardEntered == "th"){
    console.log(Tens.concat(H) + "")
} else if (cardEntered == "TD" || cardEntered == "td"){
    console.log(Tens.concat(D) + "")
} else if (cardEntered == "TC" || cardEntered == "tc"){
    console.log(Tens.concat(C) + "")
} else if (cardEntered == "9S" || cardEntered == "9s"){
    console.log(Nines.concat(S) + "")
} else if (cardEntered == "9H" || cardEntered == "9h"){
    console.log(Nines.concat(H) + "")
} else if (cardEntered == "9D" || cardEntered == "9d"){
    console.log(Nines.concat(D) + "")
} else if (cardEntered == "9C" || cardEntered == "9c"){
    console.log(Nines.concat(C) + "")
} else if (cardEntered == "8S" || cardEntered == "8s"){
    console.log(Eights.concat(S) + "")
} else if (cardEntered == "8H" || cardEntered == "8h"){
    console.log(Eights.concat(H) + "")
} else if (cardEntered == "8D" || cardEntered == "8d"){
    console.log(Eights.concat(D) + "")
} else if (cardEntered == "8C" || cardEntered == "8c"){
    console.log(Eights.concat(C) + "")
} else if (cardEntered == "7S" || cardEntered == "7s"){
    console.log(Sevens.concat(S) + "")
} else if (cardEntered == "7H" || cardEntered == "7h"){
    console.log(Sevens.concat(H) + "")
} else if (cardEntered == "7D" || cardEntered == "7d"){
    console.log(Sevens.concat(D) + "")
} else if (cardEntered == "7C" || cardEntered == "7c"){
    console.log(Sevens.concat(C) + "")
} else if (cardEntered == "6S" || cardEntered == "6s"){
    console.log(Sixes.concat(S) + "")
} else if (cardEntered == "6H" || cardEntered == "6h"){
    console.log(Sixes.concat(H) + "")
} else if (cardEntered == "6D" || cardEntered == "6d"){
    console.log(Sixes.concat(D) + "")
} else if (cardEntered == "6C" || cardEntered == "6c"){
    console.log(Sixes.concat(C) + "")
} else if (cardEntered == "5S" || cardEntered == "5s"){
    console.log(Fives.concat(S) + "")
} else if (cardEntered == "5H" || cardEntered == "5h"){
    console.log(Fives.concat(H) + "")
} else if (cardEntered == "5D" || cardEntered == "5d"){
    console.log(Fives.concat(D) + "")
} else if (cardEntered == "5C" || cardEntered == "5c"){
    console.log(Fives.concat(C) + "")
} else if (cardEntered == "4S" || cardEntered == "4s"){
    console.log(Fours.concat(S) + "")
} else if (cardEntered == "4H" || cardEntered == "4h"){
    console.log(Fours.concat(H) + "")
} else if (cardEntered == "4D" || cardEntered == "4d"){
    console.log(Fours.concat(D) + "")
} else if (cardEntered == "4C" || cardEntered == "4c"){
    console.log(Fours.concat(C) + "")
} else if (cardEntered == "3S" || cardEntered == "3s"){
    console.log(three.concat(S) + "")
} else if (cardEntered == "3H" || cardEntered == "3h"){
    console.log(three.concat(H) + "")
} else if (cardEntered == "3D" || cardEntered == "3d"){
    console.log(three.concat(D) + "")
} else if (cardEntered == "3C" || cardEntered == "3c"){
    console.log(three.concat(C) + "")
} else if (cardEntered == "2S" || cardEntered == "2s"){
    console.log(Twos.concat(S) + "")
} else if (cardEntered == "2H" || cardEntered == "2h"){
    console.log(Twos.concat(H) + "")
} else if (cardEntered == "2D" || cardEntered == "2d"){
    console.log(Twos.concat(D) + "")
} else if (cardEntered == "2C" || cardEntered == "2c"){
    console.log(Twos.concat(C) + "")
} else {
  console.log("\nInvalid\n")
}
