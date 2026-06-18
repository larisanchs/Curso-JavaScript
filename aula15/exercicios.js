// 1. Use `setTimeout` para exibir "Olá, mundo!" após 1,5 segundos.

setTimeout(() => {
    console.log("Olá, mundo!");
}, 1500);

// 2. Crie um contador que exibe um número a cada segundo até 10 e depois para.

var contador = 0;
const intervalo = setInterval(() => {
    console.log("Contador: ", contador);
    if (contador === 10) {
       clearInterval(intervalo); 
    } 
    contador++;
}, 1000);

// 3. Faça uma função que, ao ser chamada, inicie um `setInterval` e outra que pare esse intervalo.

function ligar() {
  alarme = setInterval(() => {
    console.log("BIP! BIP!");
  }, 2000);
  
  console.log("Alarme ligado!");
}

function desligar() {
  clearInterval(alarme);
  console.log("Alarme desligado!");
}

ligar();
setTimeout(desligar, 7000);

// 4. (Desafio) Implemente um cronômetro com `setInterval`, mostrando minutos e segundos.

var minutos = 0;
var segundos = 0;

setInterval(() => {
  segundos++;

  if (segundos === 60) {
    minutos++;
    segundos = 0;
  }

  console.log("Minutos:", minutos, "Segundos:", segundos);

}, 1000);