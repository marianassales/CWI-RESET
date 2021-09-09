//Crie um algoritmo capaz de calcular a média aritmética de um array com qualquer quantidade de elementos numéricos. 
//Para fins de exemplo, o resultado do algoritmo com um array de valores 1, 2, 3, 5, 8, 13, 21, 23, 34, 55 deve ser 16.5. 

array = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55]

soma = 0

for(i=0; i<array.length; i++){
    resultado = soma += array[i]
   }

console.log("Resultado da soma do array é: ",resultado)

media = resultado / array.length

console.log("A média do array é: ",media)

