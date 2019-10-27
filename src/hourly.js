const readlineSync = require("readline-sync");

const Hourly_wage = parseFloat(readlineSync.question("\nHourly Wage: "));
const M = parseFloat(readlineSync.question("\nMonday: "));
const T = parseFloat(readlineSync.question("Tuesday: "));
const W = parseFloat(readlineSync.question("Wednesday: "));
const Th = parseFloat(readlineSync.question("Thursday: "));
const F = parseFloat(readlineSync.question("Friday: "));
const Sa = parseFloat(readlineSync.question("Saturday: "));
const Su = parseFloat(readlineSync.question("Sunday: "));


const Week_wage = (M+T+W+Th+F+Sa+Su)*Hourly_wage
const Week_wage_rounded = Week_wage.toFixed(2);
const Week_wage_final = Week_wage_rounded.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

console.log("\nYou'll make $" + Week_wage_final + " this week.")
