function exercicio1() {
    var numero = document.getElementById("1-input").value
    document.getElementById("1-result").innerHTML = `O número digitado foi "${numero}""`
}

function exercicio2() {
    var metros = document.getElementById("2-input").value
    var centimetros = metros * 100
    document.getElementById("2-result").innerHTML = `${metros} metros são ${centimetros} centímetros`
}

function exercicio3() {
    var centimetros = document.getElementById("3-input").value
    var polegadas = centimetros / 2.54
    document.getElementById("3-result").innerHTML = `${centimetros} centímetros são ${polegadas} polegadas`
}

function exercicio4() {
    var raio = document.getElementById("4-input").value
    var area = Math.PI * Math.pow(raio, 2)
    document.getElementById("4-result").innerHTML = `A área do círculo é ${area}`
}

function exercicio5() {
    var fahrenheit =  document.getElementById("5-input").value
    var celcius = (fahrenheit - 32) * 5 / 9
    document.getElementById("5-result").innerHTML = `${fahrenheit} fahrenheit são ${celcius} celcius`
}

function exercicio6() {
    var nota1 = parseFloat(document.getElementById("6-nota1").value)
    var nota2 = parseFloat(document.getElementById("6-nota2").value)
    var nota3 = parseFloat(document.getElementById("6-nota3").value)
    var nota4 = parseFloat(document.getElementById("6-nota4").value)
    var media = (nota1 + nota2 + nota3 + nota4) / 4
    document.getElementById("6-result").innerHTML = `A média das notas é ${media}`
}

function exercicio7() {
    var celcius = document.getElementById("7-input").value
    var fahrenheit = celcius * 9 / 5 + 32;
    document.getElementById("7-result").innerHTML = `${celcius} celcius são ${fahrenheit} fahrenheit`
}

function exercicio8() {
    var gasolina = parseFloat(document.getElementById("8-input-gasolina").value);
    var alcool = parseFloat(document.getElementById("8-input-alcool").value);
    
    if (alcool <= (gasolina * 0.7)) {
        document.getElementById("8-result").innerHTML = 'Alcool vale mais a pena'
    } else {
        document.getElementById("8-result").innerHTML = 'Gasolina vale mais a pena'
    }
}
