$(document).ready(function() {
    var escolha = ""
    var opcoes = ['pedra', 'papel', 'tesoura']
    var contador = 1

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
        const escolhaBot = opcoes[random];

        switch (escolhaBot) {
            case 'pedra':
                $('#escolha-bot').html("<img src=\"img/pedra.svg\">")
                break;
            case 'papel':
                $('#escolha-bot').html("<img src=\"img/papel.svg\">")
                break;
            case 'tesoura':
                $('#escolha-bot').html("<img src=\"img/tesoura.svg\">")
                break;

            default:
                break;
        }
    
        $('#message').removeClass()
        if (escolha == 'papel' && escolhaBot == 'pedra') {
            $('#message').html("Venceu")
            $('#message').addClass('success')
        } else if (escolha == 'tesoura' && escolhaBot == 'papel') {
            $('#message').html("Venceu")
            $('#message').addClass('success')
        } else if (escolha == 'pedra' && escolhaBot == 'tesoura') {
            $('#message').html("Venceu")
            $('#message').addClass('success')
        } else if(escolha == escolhaBot) {
            $('#message').html("Empate")
            $('#message').addClass('warning')
        } else {
            $('#message').html("Perdeu")
            $('#message').addClass('danger')
        }

        contador ++
        $('#contador').html(contador)
    }
})