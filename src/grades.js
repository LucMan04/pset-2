const readlineSync = require("readline-sync");

const Hw_weight=0.15;
const Qz_weight=0.35;
const Ts_weight=0.5;
const Assign=3;
//Homework
const H1= readlineSync.question("Enter three homework grades."\n);
const H2= readlineSync.question(" ");
const H3= readlineSync.question(" ");

let FinalHw= ((H1 + H2 + H3) / Assign)*Hw_weight
//Quiz
const Q1= readlineSync.question("Enter three quiz grades."\n);
const Q2= readlineSync.question(" ");
const Q3= readlineSync.question(" ");

let FinalQz= ((Q1 + Q2 + Q3) / Assign)*Qz_weight;
//Test
const T1= readlineSync.question("Enter three test grades."\n);
const T2= readlineSync.question(" ");
const T3= readlineSync.question(" ");

let FinalTs= ((T1 + T2 + T3) / Assign)*Ts_weight;
//Final
let Mp_grade=(FinalHw+FinalQz+FinalTs);
Mp_grade=Math.round(100*Mp_Grade)/(100);
