/* 3. Reescreva o seguinte código com let para evitar problemas de hoisting: function exemplo() {
 if (true) {
 var nome = "Ana";
 }
 console.log(nome);
} */

function exemplo() {
    if (true) {
        let nome = "Ana";
        console.log(nome);
    }
}

exemplo();