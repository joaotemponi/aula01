console.clear();
const teclado = require('prompt-sync')();

let ola: string = teclado(`Digite uma congratulação: `);
let nome: string = teclado(`Digite seu nome: `);
let passaTempo: string = teclado(`Digite um passatempo: `);
let diaAniversario: number = teclado(`Digite o dia do aniversário: `);
let mesAniversario: string = teclado(`Digite o mês do aniversário: `);
let anoAniversario: number = teclado(`Digite o ano do aniversário: `);

console.log(`${ola}`);
console.log(`Meu nome é ${nome}, nascido no dia ${diaAniversario}`);
console.log(`de ${mesAniversario} de ${anoAniversario},`);
console.log(`meu atual passatempo é ${passaTempo}`);