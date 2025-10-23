"use strict";

let startMoney = 10000,
    rentevoet = 0.02,
    currentMoney = startMoney + startMoney * rentevoet,
    aantalJaar = 7;

for(let i = 1 ; i < aantalJaar ; ++i)
{
    currentMoney += currentMoney*rentevoet;
}

console.log(`Na ${aantalJaar} jaar stijgt je bezit van ${startMoney}euro naar ${currentMoney.toFixed(2)}euro.`)