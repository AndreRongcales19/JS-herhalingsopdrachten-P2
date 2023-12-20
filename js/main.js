// opdr 1
 
let sum = 0;
let highestBitcoin = 0; 
let lowestBitcoin = 0;
let bitcoins = [40604, 40648, 38275, 30386, 39445, 39121, 38494];
for (let i = 0; i < bitcoins.length; i++) {
    let bitcoin = bitcoins[i];
    sum += bitcoin;
    if (highestBitcoin < bitcoin) {
        highestBitcoin = bitcoin;
        // lowestBitcoin pakt dus de waarde van highestBitcoin om straks laagsteBitcoin te vinden
        lowestBitcoin = highestBitcoin;
    } 
    if (lowestBitcoin > bitcoin) {
        lowestBitcoin = bitcoin;
    }
}
let average = sum / bitcoins.length;
console.log("Gemiddeld is: ", average);
console.log("Hoogste bitcoinwaarde is: ", highestBitcoin);
console.log("Laagste bitcoinwaarde is: ", lowestBitcoin);


console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");
// opdr 2
let totalSalary = 0;
let highestPaid = 0;
let lowestPaid = 0;

let Aptheker = {
    salary: 3450
}
let Automonteur = {
    salary: 2000
}
let Bouwvakker = {
    salary: 1650
}
let Electricien = {
    salary: 2200
}
let Kinderopvang = {
    salary: 1890
}
let Metselaar = {
    salary: 2400
}
let Timmerman = {
    salary: 2300
}

let professions = [
    Aptheker,
    Automonteur,
    Bouwvakker,
    Electricien,
    Kinderopvang,
    Metselaar,
    Timmerman,
]
for (let i = 0; i < professions.length; i++) {
    const profession = professions[i];
    totalSalary += profession.salary;
    if (highestPaid < profession.salary) {
        highestPaid = profession.salary;
        lowestPaid = highestPaid;
    } 
    if (lowestPaid > profession.salary) {
        lowestPaid = profession.salary;
    }
}
// let averageBitcoin = totalSalary / professions.length; 
console.log("Totaal salaris van alle beroepen is: ", totalSalary);
console.log("Het best betaalde beroep/salaris: ", highestPaid);
console.log("Het minst betaalde beroep/salaris: ", lowestPaid);

// console.log("Gemiddelde salaris: " average);

console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");

// opdr 3 



