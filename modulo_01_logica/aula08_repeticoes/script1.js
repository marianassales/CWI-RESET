// while * cuidar looping infinito, precisa de um break

num = 1

//while(num <=10){           // {} bloco de instruções (para while ter mais de uma instrução)
//console.log(num++)        // ++num imprimiria 11
//}

do{                         // primeiro imprime, depois verifica
    console.log(num++)
}while(num<=10)


for(num = 1; num<=10; num++){  // (condição inicial; condição a ser satisfeita; variação)
    console.log(num)
}