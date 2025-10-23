let email = "sven.maes@ap.be";

let endIndex = email.indexOf("@");

let naam = email.substring(0,endIndex);

naam = naam.replaceAll("."," ");

console.log(`De eigenaar van ${email} is ${naam.toUpperCase()}.`);