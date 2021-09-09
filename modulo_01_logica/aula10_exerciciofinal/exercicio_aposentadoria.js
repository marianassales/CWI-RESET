
colaboradores    = ['Rhoger', 'Cléverson', 'Gleysberto', 'Nádio', 'Rosiméri', 'Regislane', 'Agripino', 'Wellison']
idades           = [      69,          66,           58,      61,         60,          64,         59,         55]
temposDeTrabalho = [      31,          29,           30,      26,         25,          24,         26,         29]

function verificarAposentadoria(nome){
    
    coladorador = false
    idade = 0
    tempoDeTrabalho = 0
    
// Se achar o colaborador, pega a idade e o tempo de trabalho no array [i]

    for(i=0; i < colaboradores.length; i++) {
        if(nome == colaboradores[i]){
            coladorador = true
            idade = idades[i]
            tempoDeTrabalho = temposDeTrabalho[i]
    
        }

    }
// Define os requisitos
    
    if(coladorador){
        idadeNecessaria = (idade >= 65)
        tempoDeTrabalhoNecessario = (tempoDeTrabalho >=30)
        idadeETempoNecessario = (idade >=60 && tempoDeTrabalho >=25)

        if(idadeNecessaria || tempoDeTrabalhoNecessario || idadeETempoNecessario){
            console.log("Parabéns, já pode sair de férias eternas :)")

        }else {
            console.log("Infelizmente, ainda falta um tempo :(")

        }

    }else {
        console.log("Colaborador inválido :|")

    }
        
}

verificarAposentadoria('Gleysberto')