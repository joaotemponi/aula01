const teclado = require('prompt-sync')();
console.clear();

let numeroUm : number = parseFloat(teclado(`digite o primeiro número`));
let numeroDois : number = parseFloat(teclado(`digite o segundo número`));
let numeroTres : number = parseFloat(teclado(`digite o terceiro número`));
let numeroQuatro : number = parseFloat(teclado(`digite o quarto número`));
let numeroCinco : number = parseFloat(teclado(`digite o quinto número`));
let numeroSeis : number = parseFloat(teclado(`digite o sexto número`));
let numeroSete : number = parseFloat(teclado(`digite o sétimo número`));
let numeroOito : number = parseFloat(teclado(`digite o oitavo número`));
let numeroNove : number = parseFloat(teclado(`digite o nono número`));
let numeroDez : number = parseFloat(teclado(`digite o décimo número`));
let media : number = (numeroUm + numeroDois + numeroTres + numeroQuatro + numeroCinco + numeroSeis + numeroSete + numeroOito + numeroNove + numeroDez) /10;
console.log(`Média é ${media}`);
console.log()




