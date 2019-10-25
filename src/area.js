const readlineSync = require("readline-sync");
let Width = readlineSync.question("Width: ")
const Width_mm = Width*25.4
let Length = readlineSync.question("Length: ");
const Length_mm = Length*25.4
let Area = Width_mm*Length_mm
Area = Area.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("A(n)" + Width + "-by-" + Length + "inch sheet of paper has an area of " + Area + " square millimeter(s).");
