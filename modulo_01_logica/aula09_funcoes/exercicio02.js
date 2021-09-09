/*Lembra dos exercícios que propusemos na Aula 05 - Variáveis? Com base neles, faça o seguinte:
Crie uma função para cada algoritmo proposto lá, exceto o número 6;
Todas as funções devem retornar o valor final;
Procure dar nomes que façam sentido às funções. Ex.: a função para o item 4 poderia se chamar mediaAritmetica ou calcularMediaAritmetica;
Procure utilizar comentários para documentar cada método;
Na função da média aritmética, evite colocar todos os itens como argumentos do método, pois isso limitaria sua utilização a um número 
fixo de elementos. Tente implementar uma lógica para receber um array e calcular a média em cima dele, tornando a função mais reaproveitável em diferentes situações.
*/

// Verifica se os nomes são iguais 
function mesmoNome(nomeDoFulano, nomeDoBeltrano){
    resposta = (nomeDoFulano == nomeDoBeltrano)
    console.log(resposta)    
}

mesmoNome("João", "José")
mesmoNome("Maria", "Maria")


// Verifica a maioridade
function maiorDeIdade(idade){
    return idade >= 18 
}
console.log(maiorDeIdade(17))


// Realiza o cálculo do valor do boleto com juros (10%)
function boletoComJuros(valorDoBoleto){
    return valorDoBoleto * 1.1
}
console.log(boletoComJuros(100.99))


// Cálculo da média aritmética do array
function mediaDeArray(array){
    soma = 0 

    for(i =0; i < array.length; i++){
        soma += array[i]
    }

    return soma / array.length
}
console.log(mediaDeArray([5,5,5]))

// Cálculo da margem bruta da empresa com base na receita líquida de vendas e no custo dos produtos vendidos
function margemBruta(receitaLiquida, custoProdutos){
    lucroBruto = receitaLiquida - custoProdutos 
    return (lucroBruto % receitaLiquida) * 100
}
console.log(margemBruta(863.52,352.87))


