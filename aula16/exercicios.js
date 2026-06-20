// 1. Crie uma Promise que resolva com uma mensagem após 3 segundos.

const promessa = new Promise((resolve, reject)  => {
    setTimeout(() => resolve("Concluído após 3 segundos!", 3000));
});
promessa.then(res => console.log(res));

// 2. Use `.then()` para mostrar a mensagem no console.
var mensagem = "Olá, mundo!"
minhaPromise.then((mensagem) => {
  console.log(mensagem);
});

// 3. Reescreva o exercício anterior usando `async` e `await`.

function esperarTresSegundos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Sucesso com Async/Await! Passaram-se 3 segundos.");
    }, 3000);
  });
}

async function executarPromessa() {
  console.log("Aguardando...");
  const resultado = await esperarTresSegundos();
  
  console.log(resultado);
}

executarPromessa();


// 4. (Desafio) Crie uma função `carregarDados()` que simula uma requisição assíncrona com delay e trate erro com `try/catch`.