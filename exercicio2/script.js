const numero1 = +prompt("Digite um numero")
const numero2 = +prompt("Digite outro numero")

//+prompt para enviar a resposta como number

console.log('O primeiro numero é', numero1)
console.log('O segundo numero é', numero2)

//imprimi os numeros no console para facilitar o entendimento

console.log("O primeiro numero é maior que segundo?", numero1 > numero2) 

//retorna true se o primeiro for maior que o segundo, retorna false se o primeiro for menor que o segundo

console.log("O primeiro numero é igual ao segundo?", numero1 === numero2)

//retorna true se os numeros forem iguais, retorna false se os numeros forem diferentes

console.log("O primeiro numero é divisível pelo segundo?", numero1 % numero2 === 0)

//retorna true se o resto da divisão for igual a 0, retorna false se o resto for diferente de 0

console.log("O segundo numero é divisível pelo primeiro?", numero1 % numero2 === 0)

//retorna true se o resto da divisão for igual a 0, retorna false se o resto for diferente de 0