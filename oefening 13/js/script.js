let text = "Dit is een test. Deze tekst kan langer of kleiner worden";

let textLength = text.length;
let whitespace = 2;

console.log(`\n/${"-".repeat(textLength + whitespace*2) + "\\"}\n|${" ".repeat(whitespace) + text + " ".repeat(whitespace)}|\n\\${"-".repeat(textLength + whitespace * 2)}/`);