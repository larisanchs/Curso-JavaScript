// 1. Use um laço for para exibir os números de 1 a 10.
for (let i=0; i<=10; i++){
    console.log(i);
}

// 2. Use while para somar números de 1 a 5.
var j = 0
while (j<=5){
    let soma = j+1
    console.log(`A soma de ${j} + 1 é igual a: ${soma}`)
    j++
}

// 3. Crie um do...while que peça uma senha até que seja '1234'.
var senha = 1230
do{
    senha++;
    console.log(senha);
    
} while (senha<1234)