$(window).on('load', function() {
    var time = new Date().getHours();
    if (time < 12) {
        $('#greetings').text('Bom dia!');
    } else if (time < 18) {
        $('#greetings').text('Boa tarde!');
    } else {
        $('#greetings').text('Boa noite!');
    }
});