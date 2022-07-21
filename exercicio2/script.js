numero1 = +prompt("Digite um numero")
numero2 = +prompt("Digite outro numero")

console.log("O primeiro numero é maior que segundo?", numero1 > numero2 )
console.log("O primeiro numero é igual ao segundo?", numero1 === numero2 )
console.log("O primeiro numero é divisível pelo segundo?", (numero1 % numero2) == 0 )
console.log("O segundo numero é divisível pelo primeiro?", (numero1 % numero2) == 0)
console.log("O primeiro numero não é divisivel pelo segundo?", (numero1 % numero2) !== 0 )
console.log("O segundo numero não é divisível pelo primeiro?", (numero2 % numero1) !== 0 )