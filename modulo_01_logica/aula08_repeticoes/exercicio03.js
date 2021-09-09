//Considerando a lista dos 60 nomes mais comuns no Brasil nos últimos 10 anos, crie um algoritmo para verificar se seu nome está lá. 
//Se sim, exiba a mensagem: É, nome comum :P. Se não, exiba a mensagem: Diferentão, hein? XD.

listaNomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", 
"Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", 
"Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", 
"Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", 
"Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", 
"Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]

nome = "Mariana"
nomeComum = false

for(i=0; i < listaNomesComuns.length; i++){
    if(nome == listaNomesComuns[i]){
        nomeComum = true
    break
    }
}
    if(nomeComum){
        console.log("É, nome comum :P")
    }
    else
    console.log("Diferentão, hein? XD")


