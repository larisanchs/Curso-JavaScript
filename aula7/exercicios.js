// 1. Crie um objeto chamado aluno com propriedades nome, idade e curso. 
    var aluno = {
        nome: "Larissa",
        idade: 16,
        curso: "Desenvolvimento de Sistemas",
    };

// 2. Altere o curso do aluno e exiba o objeto atualizado. 
aluno.curso = "Administração";
console.log(`O curso de ${aluno.nome} é ${aluno.curso}.`);

// 3. Adicione uma nova propriedade chamada 'matriculado' com valor booleano.
aluno.matriculado = true;