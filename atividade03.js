var teclado = require("prompt-sync")();
var celsius = parseFloat(teclado("Digite a temperatura em \u00B0C"));
var fahrenheit = (celsius * (9 / 5)) + 32;
console.log("O valor da convers\u00E3o \u00E9: " + fahrenheit);
