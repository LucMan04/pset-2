const readlineSync = require("readline-sync");
let Width = readlineSync.question("Width: ")
const Width_cm = Width*2.54
let Length = readlineSync.question("Length: ");
const Length_cm = Length*2.54
let Perimeter = Width_cm+Length_cm+Width_cm+Length_cm
Perimeter = Perimeter.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("A(n)" + Width + "-by-" + Length + "inch sheet of paper has an area of " + Perimeter + " centimeter(s).");
