"use strict";

const amountToPay = 454;

const numberOf50s = Math.ceil(amountToPay / 50);

const change = (numberOf50s * 50) - amountToPay;

console.log(`Te betalen bedrag is ${amountToPay}.`)
console.log(`Je hebt ${numberOf50s} briefjes van 50 nodig`);
console.log(`Je wisselgeld is dan ${change} euro.`)