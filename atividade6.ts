const teclado = require(`prompt-sync`)();

let idade : number = 0;
let salario : number = 0;
let totPessoasNaCondicao : number = 0;
let pessoasContabilizadas : number = 1;


while (pessoasContabilizadas <= 4){

    idade = parseInt(teclado(`Digite a idade do funcionário ${pessoasContabilizadas}`));
    salario = parseFloat(teclado(`Digite o salário do funcionário${pessoasContabilizadas}`))
    console.log(``)

   if (idade < 30 && salario > 3000){
       totPessoasNaCondicao++;
       pessoasContabilizadas++;
   }
   else{
       pessoasContabilizadas++;
   }
}

console.log(`Vai se fude ${totPessoasNaCondicao}`)