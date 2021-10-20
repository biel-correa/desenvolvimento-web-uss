$(document).ready(function() {
    var escolha = ""
    var opcoes = ['pedra', 'papel', 'tesoura']

    var contador = 0
    $('#contador').html(contador)

    $('#escolha-pedra').on('click', function() {
        escolha = 'pedra'
        $('#escolha-pedra').addClass("active")
        $('#escolha-papel').removeClass("active")
        $('#escolha-tesoura').removeClass("active")
        calcular()
    })
    
    $('#escolha-papel').on('click', function() {
        escolha = 'papel'
        $('#escolha-papel').addClass("active")
        $('#escolha-pedra').removeClass("active")
        $('#escolha-tesoura').removeClass("active")
        calcular()
    })
    
    $('#escolha-tesoura').on('click', function() {
        escolha = 'tesoura'
        $('#escolha-tesoura').addClass("active")
        $('#escolha-pedra').removeClass("active")
        $('#escolha-papel').removeClass("active")
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