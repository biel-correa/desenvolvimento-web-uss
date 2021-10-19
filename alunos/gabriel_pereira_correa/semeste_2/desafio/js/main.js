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

        console.log(escolha, escolhaBot)
    
        if (escolha == 'papel' && escolhaBot == 'pedra') {
            $('#message').html("Venceu")
        } else if (escolha == 'tesoura' && escolhaBot == 'papel') {
            $('#message').html("Venceu")
        } else if (escolha == 'pedra' && escolhaBot == 'tesoura') {
            $('#message').html("Venceu")
        } else if(escolha == escolhaBot) {
            $('#message').html("Empate")
        } else {
            $('#message').html("Perdeu")
        }
    }
})