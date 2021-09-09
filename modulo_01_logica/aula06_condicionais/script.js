altura = 1.60 // em m
peso = 68 // em kg

imc = peso / (altura * altura)

if (imc < 18.5) {
    classificacao = "Magreza grau I"

} else if (imc < 25) {
    classificacao = "Adequado"

} else if (imc < 30) {
    classificacao = "Sobrepeso"
    grau = 1

} else if (imc < 40) {
    classificacao = "Obesidade grau I"
    grau = 2

} else {
    classificacao = "Obesidade grave"
    grau = 3
}

console.log("Seu IMC é", imc)
console.log("Você é considerado com", classificacao)

if (grau > 0) {
    console.log("Cuidado! Você está acima do peso recomendado pela OMS.")

    if (grau == 3) {
        console.log("É importante procurar um médico para avaliar sua saúde.")
    }
}