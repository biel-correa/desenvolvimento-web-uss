function calcFrete() {
    let valor = document.getElementById('frete').value
    valor = valor < 100 ? valor * 1.1 : valor
    document.getElementById('valorFrete').innerHTML = "Frete total: R$ " + valor.toFixed(2)
}

function calcPreco() {
    let quantidade = document.getElementById('quantNotebooks').value
    if (quantidade >= 5) {
        var valorFinal = quantidade * 1050
    } else { 
        var valorFinal = quantidade * 1200
    }
    document.getElementById('valorFinal').innerHTML = "Valor final: R$ " + valorFinal
}