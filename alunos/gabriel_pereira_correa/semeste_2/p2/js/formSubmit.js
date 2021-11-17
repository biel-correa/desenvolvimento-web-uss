$(window).on('load', function() {
    $('#produto').on('change', function(component) {
        if ($('#quantidade').val() !== '') {
            let preco = component.target.value * parseFloat($('#quantidade').val())
            $('#message').text(preco);
        }
    });
    $('#quantidade').on('change', function(component) {
        if ($('#produto').val() !== '') {
            let preco = component.target.value * parseFloat($('#produto').val())
            $('#message').text(preco);
        }
    });
})

$('form').on('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    $("form :input").each(function(){
        var input = $(this);
        if(input.val() === '' && !input.hasClass('btn-submit')){
            isValid = false;
            $('#' + input.attr('id') + '-error').text('Campo obrigatório');
        }
    });

    if (isValid) {
        alert('Formulário enviado com sucesso!');
    } else {
        alert('Formulário não enviado!');
    }
})