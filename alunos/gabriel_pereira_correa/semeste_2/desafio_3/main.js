function calcSalario() {
    var salario = parseFloat(document.getElementById("salario").value);
    if (salario <= 280) {
        var novoSalario = salario + (salario * 0.2);
    } else if (salario > 280 && salario <= 700) {
        var novoSalario = salario + (salario * 0.15);
    } else if (salario > 700 && salario <= 1500) {
        var novoSalario = salario + (salario * 0.1);
    } else if (salario > 1500) {
        var novoSalario = salario + (salario * 0.05);
    }

    var diferenca = (novoSalario - salario) / salario * 100;
    document.getElementById("message").innerHTML = `Salário antes: ${salario} <br/>Percentual: ${diferenca}% <br/>Valor do aumento: ${novoSalario - salario} <br/>Novo salário: ${novoSalario}`
}