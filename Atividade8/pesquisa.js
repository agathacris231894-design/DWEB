let quantidade = 0;

let somaIdades = 0;
let maiorIdade = 0;
let menorIdade = 0;

let pessimo = 0;
let otimoBom = 0;

let mulheres = 0;
let homens = 0;
let outros = 0;


// Botão Enviar
document.getElementById("enviar").addEventListener("click", function() {

    let idade = Number(document.getElementById("idade").value);

    let sexo = document.querySelector('input[name="sexo"]:checked');

    let opiniao = document.querySelector('input[name="opiniao"]:checked');


    // Verifica se os campos foram preenchidos
    if (idade <= 0 || !sexo || !opiniao) {
        alert("Preencha todos os campos!");
        return;
    }


    // Verifica se já foram registradas 3 respostas
    if (quantidade >= 3) {
        alert("A pesquisa já atingiu o limite de 3 pessoas!");
        return;
    }


    quantidade++;


    // Soma das idades
    somaIdades += idade;


    // Verifica a maior idade
    if (quantidade == 1 || idade > maiorIdade) {
        maiorIdade = idade;
    }


    // Verifica a menor idade
    if (quantidade == 1 || idade < menorIdade) {
        menorIdade = idade;
    }


    // Conta as opiniões
    if (Number(opiniao.value) == 1) {
        pessimo++;
    }


    // Ótimo = 4 e Bom = 3
    if (Number(opiniao.value) == 4 || Number(opiniao.value) == 3) {
        otimoBom++;
    }


    // Conta os participantes por sexo
    if (sexo.value == "Feminino") {
        mulheres++;
    } else if (sexo.value == "Masculino") {
        homens++;
    } else if (sexo.value == "Outros") {
        outros++;
    }


    // Atualiza o contador de respostas
    document.getElementById("contador").innerHTML =
        "Respostas registradas: " + quantidade + " de 3";

    alert("Resposta registrada com sucesso!");


    // Limpa os campos para a próxima pessoa
    document.getElementById("formulario").reset();

});


// Botão Finalizar Pesquisa
document.getElementById("finalizar").addEventListener("click", function() {

    // Verifica se todas as 3 respostas foram registradas
    if (quantidade < 3) {
        alert("Ainda faltam " + (3 - quantidade) + " respostas!");
        return;
    }


    // Cálculos finais
    let mediaIdade = somaIdades / quantidade;

    let porcentagemOtimoBom = (otimoBom / quantidade) * 100;


    // Exibe os resultados no HTML
    document.getElementById("resultados").innerHTML = `
        <h1>RESULTADOS DA PESQUISA DE OPINIÃO</h1>

        <p>Média das idades: ${mediaIdade.toFixed(0)}</p>

        <p>Maior idade: ${maiorIdade}</p>

        <p>Menor idade: ${menorIdade}</p>

        <p>Quantidade de pessoas que responderam péssimo: ${pessimo}</p>

        <p>Porcentagem de ótimo e bom: ${porcentagemOtimoBom.toFixed(2)}%</p>

        <h3>Participantes por sexo:</h3>

        <p>Mulheres: ${mulheres}</p>

        <p>Homens: ${homens}</p>

        <p>Outros: ${outros}</p>
    `;
});