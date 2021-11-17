$(window).on('load', function() {
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;
    var day = new Date().getDay();
    var hour = new Date().getHours();
    var minute = new Date().getMinutes();
    var message = ''

    if (hour > 22) {
        message = `<p>${day}/${month}/${year} - Fim do Expediente. Te esperamos amanhã novamente</p>`;
    } else if (hour > 19) {
        message = `<p>${day}/${month}/${year} - Quer pedir seu lanche em casa? Já estamos aceitando pedidos.</p>`;
    } else if (hour > 12 && minute > 30) {
        message = `<p>${day}/${month}/${year} - Loja Aberta - Venha e faça agora mesmo o seu pedido - Promoção do dia: Hambúrguer Simples + Coca Cola Lata – R$ 10,99</p>`;
    } else if (hour > 11) {
        message = `<p>${day}/${month}/${year} - Loja Aberta - Venha e faça agora mesmo o seu pedido</p>`;
    }

    $('#horario').html(message);
});