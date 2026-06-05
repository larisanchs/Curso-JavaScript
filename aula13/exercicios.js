/* 
Exemplo 1: Função que recebe função
function executar(fn) {
 console.log("Início");
 fn();
 console.log("Fim");
}
executar(() => console.log("Função executada"));

Exemplo 2: Função que retorna outra
function multiplicador(fator) {
 return function(numero) {
 return numero * fator;
 }
}
*/

 // 1. Crie uma função chamada `executarDuasVezes` que recebe uma função como argumento e a executa duas vezes.

function executarDuasVezes(fn){
    fn();
    fn();
}
executarDuasVezes(() => console.log("Função executada!"));

// 2. Construa uma função chamada `criarSaudacao(saudacao)` que retorna outra função que recebe o nome da pessoa.

function criarSaudacao(saudacao) {
    return function(nome){
        console.log(`${saudacao}, ${nome}`);
    }
}

const hello = criarSaudacao("Olá");
hello("Larissa");

// 3. Escreva uma função `calcular` que recebe dois números e uma função de operação (como soma, subtração etc.).

function calcular(numero1, numero2, operacao) {
    return operacao(numero1, numero2);
}

function soma(){
    return a + numebro2;
}

// 4. (Desafio) Implemente uma função `compose(f, g)` que retorna uma nova função onde `f(g(x))` é executado


