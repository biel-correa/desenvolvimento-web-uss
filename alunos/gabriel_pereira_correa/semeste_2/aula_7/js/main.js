function getNome() {
    nome = window.prompt("Qual o seu nome?")
    // document.write(nome == "" ? "Olá amigo!" : "Olá " + nome + "!")
    if (nome == "" || nome == null) {
        document.write("Olá amigo!")
    } else {
        document.write("Olá " + nome + "!")
    }
}