const operação1 = 5 > 20 && 5 < 2
const operação2 = 5 === 5 || 5 === '5'
const operação3 = !20 > 50
const operação4 = !(20 > 50)

console.log(operação1)

//false pois as duas operações são falsas

console.log(operação2)

//retornou true pois se trata do operador logico "ou", que retorna false se todas as aperações forem falsas

console.log(operação3)

/*retornou false pois o operador ! só retornará true a um numero se este
numero for igual a 0 */

console.log(operação4)

/*operação4 retornou true pois o operador ! quando aplicado a um booleano
retorna o valor contrário*/
