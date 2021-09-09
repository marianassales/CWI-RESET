alunos = ["Enzo", "Valentina", "Joana", "Marcio"]

notas = [ [5.6, 7.2], [9.1, 8.4],[5.8, 4.6], [4.5,8.5]  ]

// Imprimir as notas usando repetição

for(i = 0; i < alunos.length; i++){  // não utiliza <= pq o tamanho de um array é o array - 1, se usar <= ele nao imprimi a ultima posicao
alunoSelecionado = i

nomeDoAluno = alunos[alunoSelecionado]
notasDoAluno = notas[alunoSelecionado]

nota1 = notasDoAluno[0]
nota2 = notasDoAluno[1]

media = ((nota1 + nota2) / 2).toFixed(2)

console.log(nomeDoAluno)
console.log("A primeira nota foi: ", nota1)
console.log("A segunda nota foi: ", nota2)
console.log("A média é: ", media)
}