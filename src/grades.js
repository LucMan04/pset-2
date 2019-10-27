const readlineSync = require("readline-sync");

const Hw_weight=0.15
const Qz_weight=0.35
const Ts_weight=0.5
//Homework
const H1= parseFloat(readlineSync.question("\nEnter three homework grades.\n"), 10);
const H2= parseFloat(readlineSync.question(""), 10);
const H3= parseFloat(readlineSync.question(""), 10);

//Quiz
const Q1= parseFloat(readlineSync.question("\nEnter three quiz grades.\n"), 10);
const Q2= parseFloat(readlineSync.question(""), 10);
const Q3= parseFloat(readlineSync.question(""), 10);

//Test
const T1= parseFloat(readlineSync.question("\nEnter three test grades.\n"), 10);
const T2= parseFloat(readlineSync.question(""), 10);
const T3= parseFloat(readlineSync.question(""), 10);

//Final
const Avg_hw = (H1+H2+H3)/3;
const Avg_qz = (Q1+Q2+Q3)/3;
const Avg_ts = (T1+T2+T3)/3;

const Mp_grade=(Avg_hw*Hw_weight+Avg_qz*Qz_weight+Avg_ts*Ts_weight);
const Mp_grade_final=Mp_grade.toFixed(2);
console.log("\nYour marking period grade is "+ Mp_grade_final +"%.");
