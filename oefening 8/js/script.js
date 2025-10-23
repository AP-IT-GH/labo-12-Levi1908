"use strict";

let huidigUur = 14, extraUren = 33;

console.log(`Het is nu ${huidigUur} uur.`)

huidigUur = (huidigUur + extraUren) % 24;

console.log(`over ${extraUren} uur is het ${huidigUur} uur.`)
