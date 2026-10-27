
function jogar(escolhaJogador) {

    let escolha = ["pedra", "papel", "tesoura"];

    let numero = Math.floor(Math.random() * escolha.length);

    let escolhaComputador = escolha[numero];

    if (escolhaJogador == "pedra" && escolhaComputador == "pedra") {
        alert("Foi um empate! O computador escolheu " + escolhaComputador + ".");

    } else if (escolhaJogador == "pedra" && escolhaComputador == "papel") {
        alert("Você perdeu, tente novamente. O computador escolheu " + escolhaComputador + ".");

    } else if (escolhaJogador == "pedra" && escolhaComputador == "tesoura") {
        alert("Parabéns! Você ganhou! O computador escolheu " + escolhaComputador + ".");

    } else if (escolhaJogador == "papel" && escolhaComputador == "papel") {
        alert("Foi um empate! O computador escolheu " + escolhaComputador + ".");

    } else if (escolhaJogador == "papel" && escolhaComputador == "pedra") {
        alert("Parabéns! Você ganhou! O computador escolheu " + escolhaComputador + ".");

    } else if (escolhaJogador == "papel" && escolhaComputador == "tesoura") {
        alert("Você perdeu, tente novamente! O computador escolheu " + escolhaComputador + ".");

    } else if (escolhaJogador == "tesoura" && escolhaComputador == "tesoura") {
        alert("Foi um empate! O computador escolheu " + escolhaComputador + ".");

    } else if (escolhaJogador == "tesoura" && escolhaComputador == "pedra") {
        alert("Você perdeu, tente novamente! O computador escolheu " + escolhaComputador + ".");

    } else {
        alert("Parabéns! Você ganhou! O computador escolheu " + escolhaComputador + ".");
    }

}