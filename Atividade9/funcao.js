function funcao1() {
    let maiorNum;

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);

    if (num1 >= num2 && num1 >= num3) {
        maiorNum = num1;
    } 
    else if (num2 >= num1 && num2 >= num3) {
        maiorNum = num2;
    } 
    else {
        maiorNum = num3;
    }

    document.getElementById("resultado1").innerHTML =
        `<p>Maior número: ${maiorNum}</p>`;
}

function funcao2() {
    let maiorNum;
    let menorNum;
    let numMeio;

    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let numero3 = Number(document.getElementById("numero3").value);

    // Verifica se num1 é o maior
    if (numero1 >= numero2 && numero1 >= numero3) {
        maiorNum = numero1;

        if (numero2 >= numero3) {
            numMeio = numero2;
            menorNum = numero3;
        } else {
            numMeio = numero3;
            menorNum = numero2;
        }
    }

    // Verifica se num2 é o maior
    else if (numero2 >= numero1 && numero2 >= numero3) {
        maiorNum = numero2;

        if (numero1 >= numero3) {
            numMeio = numero1;
            menorNum = numero3;
        } else {
            numMeio = numero3;
            menorNum = numero1;
        }
    }

    // Se os outros não são o maior, num3 é
    else {
        maiorNum = numero3;

        if (numero1 >= numero2) {
            numMeio = numero1;
            menorNum = numero2;
        } else {
            numMeio = numero2;
            menorNum = numero1;
        }
    }

    document.getElementById("resultado2").innerHTML = `
        <p>Maior número: ${maiorNum}</p>
        <p>Número do meio: ${numMeio}</p>
        <p>Menor número: ${menorNum}</p>
    `;
}

function funcao3(){
    let palavra = document.getElementById("palavra").value;

    // Transforma a palavra em letras minúsculas
    palavra = palavra.toLowerCase();

    // Separa as letras, inverte e junta novamente
    let palavraInvertida = palavra.split("").reverse().join("");

    if (palavra === palavraInvertida) {
        document.getElementById("resultado3").innerHTML =
            `<p>"${palavra}" é um palíndromo!</p>`;
    } else {
        document.getElementById("resultado3").innerHTML =
            `<p>"${palavra}" não é um palíndromo.</p>`;
    }
}

function funcao4(){

    let palavra1 = document.getElementById("palavra1").value;

    let palavra2 = document.getElementById("palavra2").value;

    // Verifica se alguma palavra está vazia ou é undefined
    if (!palavra1 || !palavra2) {
        document.getElementById("resultado4").innerHTML =
            `<p>Erro! Digite uma palavra.</p>`;
        return;
    }

    // Verifica se a segunda palavra está contida na primeira
    if (palavra1.includes(palavra2)) {
        document.getElementById("resultado4").innerHTML = 
        `<p>Essas palavras formam um subconjunto</p>`;
    } 
    
    else if (palavra2.includes(palavra1)) {
        document.getElementById("resultado4").innerHTML = 
        `<p>Essas palavras formam um subconjunto</p>`;
    } 
    
    else {
        document.getElementById("resultado4").innerHTML = 
        `<p>Essas palavras não são um subconjunto</p>`;
    }
}

function funcao5(){

    let data = document.getElementById("data").value;

    let dias = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];

    let dataRecebida = new Date(data + "T12:00:00");

    let resultado = dias[dataRecebida.getDay()];

    document.getElementById("resultado5").innerHTML =
        `<p>Dia da semana: ${resultado}</p>`;

}