// 1. Crie uma função `saudacao` que retorna outra função com um nome como argumento e imprime: "Olá, [nome]!".
// 2. Construa uma função chamada `multiplicador(x)` que retorna outra função. Esta deve multiplicar o valor recebido por `x`.

function saudacao() {
  return function(nome) {
    console.log(`Olá, ${nome}!`);
  }
}

const exibirSaudacao = saudacao();
exibirSaudacao("Larissa");

function multiplicador(x) {
  return function(valor) {
    return valor * x;
  }
}

const dobro = multiplicador(2);
console.log("O dobro de 8 é igual a " + dobro(8));

const triplo = multiplicador(3);
console.log("O triplo de 4 é igual a " + triplo(4));