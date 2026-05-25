// 1. Crie um programa que verifique se uma pessoa pode votar (idade >= 16).
const idade = 16 

if(idade>=16){
    let resultado = console.log(`Você pode votar!`)
}
else{
    let resultado = console.log(`Você ainda não pode votar.`)
}

// 2. Use switch para exibir uma mensagem diferente para cada dia da semana

let dia = 1

switch (dia){
    case(1): console.log("Domingo"); break;
    case(2): console.log("Segunda-feira"); break;
    case(3): console.log("Terca-feira"); break;
    case(4): console.log("Quarta-feira"); break;
    case(5): console.log("Quinta-feira"); break;
    case(6): console.log("Sexta-feira"); break;
    case(7): console.log("Sabado-feira"); break;
    default: console.log("Dia legal")
}