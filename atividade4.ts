let teclado = require(`prompt-sync`)();

let fahrenheit : number = parseFloat(teclado(`Digite a temperatura em fahrenheit`))

let celcius : number = (fahrenheit * (9/5) - 32)

console.log(`O valor da conversãp é: ${celcius}`)