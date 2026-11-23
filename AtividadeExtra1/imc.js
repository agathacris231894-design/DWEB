const inputAltura = document.getElementById("altura");
const inputPeso = document.getElementById("peso");
const btnCalcular = document.getElementById("btnCalcular");
const divResultado = document.getElementById("resultado");

function classificarIMC(imc) {
  if (imc < 18.5) {
    return { classificacao: "Magreza", grau: 0, css: "magreza" };
  } else if (imc < 25) {
    return { classificacao: "Normal", grau: 0, css: "normal" };
  } else if (imc < 30) {
    return { classificacao: "Sobrepeso", grau: 1, css: "sobrepeso" };
  } else if (imc < 40) {
    return { classificacao: "Obesidade", grau: 2, css: "obesidade" };
  } else {
    return { classificacao: "Obesidade grave", grau: 3, css: "grave" };
  }
}

function mostrarResultado(html, classeCss) {
  divResultado.className = "resultado visivel " + classeCss;
  divResultado.innerHTML = html;
}

function calcularIMC() {
  const altura = parseFloat(inputAltura.value.replace(",", "."));
  const peso = parseFloat(inputPeso.value.replace(",", "."));

  if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
    mostrarResultado("Informe valores válidos para altura e peso.", "erro");
    return;
  }

  const imc = peso / (altura * altura);
  const resultado = classificarIMC(imc);

  mostrarResultado(
    `<strong>Seu IMC é ${imc.toFixed(1).replace(".", ",")}</strong><br>` +
    `Classificação: ${resultado.classificacao}<br>` +
    `Obesidade (grau): ${resultado.grau}`,
    resultado.css
  );
}

btnCalcular.addEventListener("click", calcularIMC);

// Permite calcular apertando Enter
[inputAltura, inputPeso].forEach(function (input) {
  input.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
      calcularIMC();
    }
  });
});