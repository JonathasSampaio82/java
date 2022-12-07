// 7/8. [] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. João e João, imprime true. João e Maria, imprime false.

// ARRAY

const nameOne = ["João", "Maria", "João"]


console.log(nameOne[0] == nameOne[1])
console.log(nameOne[0] == nameOne[2])


// const compare = nameOne[0] === nameOne[1]


const compare = nameOne[0] !== nameOne[1]  // pergunta se é diferente

console.log(compare)

