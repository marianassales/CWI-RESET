// Variaveis -------------------------

let niveis = ["Muito abaixo do peso",
              "Abaixo do peso",
              "Peso normal",
             "Acima do peso",
             "Obesidade grau I",
             "Obesidade grau II",
             "Obesidade grau III"]

let pessoas = ["Igor", "Márcia", "José"]
let massas = [100, 68, 79]
let alturas = [1.81, 1.75, 1.68]

//---------------------------------

// Funcões --------------------------------

function calcularIMC(massa,altura){

    let imc = massa /(altura**2)
    return imc
}

function verificaNivel(imc){

    let nivel = 0     // variavel a ser modificada

    if(imc<17){
        nivel = 0 
    }else if(imc < 18.5){
        nivel = 1
    }else if(imc < 25){
        nivel = 2
    }else if (imc <30){
        nivel = 3
    }else if(imc < 35){
        nivel = 4
    }else if(imc < 40){
        nivel = 5
    }else {
        nivel = 6
    }
    return nivel
    
}
//--------------------------------------

// Execução --------------------------

for(let indice=0; indice < pessoas.length; indice++){


let pessoa = pessoas[indice]
let massa = massas[indice]
let altura = alturas[indice]

let imc = calcularIMC(massa, altura)
let nivel = verificaNivel(imc)

console.log("Nome: "+ pessoa)
console.log("Peso: "+ massa)
console.log("Altura: "+ altura)
console.log("IMC: "+ imc.toFixed(2))
console.log("Nivel: "+ niveis[nivel])
console.log("")
}
