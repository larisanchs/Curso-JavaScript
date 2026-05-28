// 1. Crie um array com 3 cores e adicione uma nova cor.
let cores = ["azul", "amarelo", "verde"]
cores.push("vermelho")

// 2. Remova o primeiro item do array usando shift.
cores.shift()
console.log(cores)

// Métodos
let frutas = ["Maçã", "Banana"]
frutas.push("Mamão") // ["Maçã", "Banana", "Mamão"]
frutas.unshift("Manga") // ["Manga", "Maçã", "Banana"]
frutas.pop() // Remove mamão, retorna mamão
frutas.shift() // Remove manga, retorna manga

console.log(frutas.length) // 2
console.log(frutas.indexOf("Banana")) // 1

