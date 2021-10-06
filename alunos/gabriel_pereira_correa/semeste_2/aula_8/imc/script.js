function calcImc() {
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let imc = peso / altura ** 2
    let imcFormatado = imc.toFixed(2)
    
    document.getElementById('displayImc').innerHTML = "Seu IMC é: " + imcFormatado

    let mensagem = document.getElementById('mensagem')

    if (imc < 18.5) {
        mensagem.innerHTML = "Abaixo do peso"
    } else if (imc >= 18.5 && imc <= 24.9) {
        mensagem.innerHTML = "Peso normal"
    } else if (imc >= 25 && imc <= 29.9) {
        mensagem.innerHTML = "Sobrepeso"
    } else if (imc >= 30 && imc <= 34.9) {
        mensagem.innerHTML = "Obesidade grau 1"
    } else if (imc >= 35 && imc <= 39.9) {
        mensagem.innerHTML = "Obesidade grau 2"
    } else if (imc > 40) {
        mensagem.innerHTML = "Obesidade grau 3"
    }
}