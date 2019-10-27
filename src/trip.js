const readlineSync = require("readline-sync");

const Students = parseInt(readlineSync.question("\nStudents: "));
const Teachers = parseFloat(readlineSync.question("Teachers: "));
const Bus_capacity = parseFloat(readlineSync.question("Bus capacity: "));

const Buses_amount = Math.ceil((Students+Teachers)/Bus_capacity);
const Passengers_final_bus = ((Students+Teachers)%Bus_capacity);

console.log("\n" + Buses_amount + " bus(es) is (are) needed, with " + Passengers_final_bus + " passenger(s) on the last bus.");
