var teclado = require("prompt-sync")();
var fahrenheit = parseFloat(teclado("Digite a temperatura em fahrenheit"));
var celcius = (fahrenheit * (9 / 5) - 32);
console.log("O valor da convers\u00E3p \u00E9: " + celcius);
