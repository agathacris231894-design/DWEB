const inputNumero = document.getElementById("numero");
const btnGerar = document.getElementById("btnGerar");
const preResultado = document.getElementById("resultado");

// Função declarada: recebe um número e devolve a tabuada em string
function gerarTabuada(numero) {
  let tabuada = "";

  for (let i = 1; i <= 10; i++) {
    tabuada += `${numero} x ${i} = ${numero * i}\n`;
  }

  return tabuada;
}

function mostrar(texto, classeExtra) {
  preResultado.className = "resultado visivel " + classeExtra;
  preResultado.textContent = texto;
}

function tratarClique() {
  const numero = Number(inputNumero.value);

  if (inputNumero.value === "" || !Number.isInteger(numero) || numero < 1 || numero > 10) {
    mostrar("Informe um número inteiro entre 1 e 10.", "erro");
    return;
  }

  mostrar(gerarTabuada(numero), "");
}

btnGerar.addEventListener("click", tratarClique);

inputNumero.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    tratarClique();
  }
});