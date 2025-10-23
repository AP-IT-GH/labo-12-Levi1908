let naamPersoon1 = "Mounir", naamPersoon2 = "Babs",
gewichtPersoon1 = 82, gewichtPersoon2 = 75,
lengtePersoon1 = 1.82, lengtePersoon2 = 1.75;

let bmiPersoon1 = gewichtPersoon1 / (lengtePersoon1 ** 2);
let bmiPersoon2 = gewichtPersoon2 / (lengtePersoon2 ** 2);
    
console.log(`${naamPersoon1} heeft een BMI van: ${bmiPersoon1.toFixed(0)}`);
console.log(`${naamPersoon2} heeft een BMI van: ${bmiPersoon2.toFixed(0)}`);