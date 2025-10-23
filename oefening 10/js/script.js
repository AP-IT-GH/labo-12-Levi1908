"use strict";

let text = "De winnende lottonummers van deze week: 05,09,13,18,27,44. Proficiat aan alle deelnemers.";

let startIndex = text.indexOf(":") + 2,
    endIndex = text.indexOf(".");
let lottonumbers = text.substring(startIndex,endIndex);
console.log(`${startIndex} | ${endIndex}`)

console.log(`${lottonumbers.replaceAll(",","|")}`);