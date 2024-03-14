var teclado = require("prompt-sync")();
var idade = 0;
var salario = 0;
var totPessoasNaCondicao = 0;
var pessoasContabilizadas = 1;
while (pessoasContabilizadas <= 4) {
    idade = parseInt(teclado("Digite a idade do funcion\u00E1rio ".concat(pessoasContabilizadas)));
    salario = parseFloat(teclado("Digite o sal\u00E1rio do funcion\u00E1rio".concat(pessoasContabilizadas)));
    console.log("");
    if (idade < 30 && salario > 3000) {
        totPessoasNaCondicao++;
        pessoasContabilizadas++;
    }
    else {
        pessoasContabilizadas++;
    }
}
console.log("Vai se fude ".concat(totPessoasNaCondicao));
