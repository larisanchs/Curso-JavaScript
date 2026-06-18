// 1. Dado um array de números, use `map` para criar um novo array com o quadrado de cada número.

const numeros = [2, 4, 5, 6];
const quadradoDosNumeros = numeros.map(n => n ** 2);
console.log(quadradoDosNumeros);

/* 2. Use `filter` para extrair os nomes com mais de 5 letras do array:
const nomes = ['João', 'Fernanda', 'Carlos', 'Eva']; */

const nomes = ['João', 'Fernanda', 'Carlos', 'Eva'];
const maiorQue5 = nomes.filter(n => n.length>5);
console.log(maiorQue5);

/* 3. Some todos os elementos de um array de preços com `reduce`:
const precos = [10.5, 22.3, 18.4]; */

const precos = [10.5, 22.3, 18.4];
const somaDosPrecos = precos.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(somaDosPrecos);

/* 4. (Desafio) Dado um array de produtos com nome e preço, use `reduce` para
calcular o valor total da compra:
const carrinho = [
 { nome: 'Camiseta', preco: 29.99 },
 { nome: 'Calça', preco: 89.9 },
 { nome: 'Meias', preco: 9.99 }
]; */

const carrinho = [
 { nome: 'Camiseta', preco: 29.99 },
 { nome: 'Calça', preco: 89.9 },
 { nome: 'Meias', preco: 9.99 }
]; 
const somaDoCarrinho = carrinho.reduce((acumulador, atual) => acumulador + atual.preco, 0);
console.log(somaDoCarrinho);