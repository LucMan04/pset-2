const readlineSync = require("readline-sync");

//Define
const Pre_tax = 0.07
const Fed_income = 0.157
const State_income = 0.0447
const Social_security = 0.062
const Medicare = 0.0145

//Define 2
const Annual_sal = parseFloat(readlineSync.question("\nAnnual salary: "), 10);
const Annual_sal_check = Annual_sal/24
const All_taxes = Fed_income+State_income+Social_security+Medicare

//Final formatting
const Annual_sal_pretax = Annual_sal_check - (Pre_tax*Annual_sal_check)
const Annual_sal_taxes = Annual_sal_pretax - (All_taxes*Annual_sal_pretax)

//Rounded
const Annual_sal_taxes_round = Annual_sal_taxes.toFixed(2);
const Annual_sal_taxes_final = Annual_sal_taxes_round.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
//Final
console.log("\nYour take-home pay each check will be $" + Annual_sal_taxes_final + ".")
