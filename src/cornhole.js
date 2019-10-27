const readlineSync = require("readline-sync");

//Define
const Length = 48
const Width = 24
const Hole = 6

//Area of a circle
const Hole_area = Math.pow((Hole/2), 2) * Math.PI

//Final measurement
const Cornhole_area = Length*Width-Hole_area

//Formatting
const Cornhole_area_rounded = Cornhole_area.toFixed(2);
let Cornhole_area_final = Cornhole_area_rounded.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
console.log("\nThe surface area of a standard Cornhole board is " + Cornhole_area_final + " square inch(es).")
