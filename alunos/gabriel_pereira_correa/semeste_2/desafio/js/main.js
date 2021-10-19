$(document).ready(function() {
    var escolha = ""
    var opcoes = ['pedra', 'papel', 'tesoura']

    $('#escolha-pedra').on('click', function() {
        escolha = 'pedra'
        calcular()
    })
    
    $('#escolha-papel').on('click', function() {
        escolha = 'papel'
        calcular()
    })
    
    $('#escolha-tesoura').on('click', function() {
        escolha = 'tesoura'
        calcular()
    })
    
    function calcular() {
        const random = Math.floor(Math.random() * opcoes.length);
        let escolhaBot = opcoes[random]
    
        if (escolha == 'papel' && escolhaBot == 'pedra') {
            console.log('venceu')
        } else if (escolha == 'tesoura' && escolhaBot == 'papel') {
            console.log('venceu')
        } else if (escolha == 'pedra' && escolhaBot == 'tesoura') {
            console.log('venceu')
        } else {
            console.log('perdeu')
        }
    }
})