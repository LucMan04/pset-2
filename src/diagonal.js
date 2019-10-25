const readlineSync = require("readline-sync");
let Width = readlineSync.question("Width: ")
let Length = readlineSync.question("Length: ");
let Diagonone = (Width*Width) + (Length*Length)
let Diagonal = Math.sqrt(Diagonone)
Diagonal = Diagonal.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("A(n) " + Width + "-by-" + Length + " inch sheet of paper has a diagonal of " + Diagonal + " inch(es).");
