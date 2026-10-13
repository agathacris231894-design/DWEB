let n1 = parseFloat(prompt("Digite o primeiro número: "))
let n2 = parseFloat(prompt("Digite o segundo número: "))

let soma = n1+n2
let sub = n1-n2
let prod = n1*n2
let div = n1/n2
let resto = n1%n2

alert(`A soma desses números é: ${soma.toFixed(2)}`)
alert(`A subtração desses números é: ${sub.toFixed(2)}`)
alert(`O produto desses números é: ${prod.toFixed(2)}`)
alert(`A divisão desses números é: ${div.toFixed(2)}`)
alert(`O resto desses números é: ${resto.toFixed(2)}`)