
/* 9. object 
 Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
  Porém, os dois nomes devem estar em dois objetos separados.
*/

const personOne = {
    nome: "Jonathas",
    age: 40,
    sex: "male",
    heigth: 1.75,
    address: "Rua Espirito Santo",
    namber:280
    
}

const personTwo = { 
    nome: "João",
    age: 42,
    sex: "male",
    heigth: 1.78,
    address: "Rua Santos",
    namber:200
}

const personTree = {
    nome: "Rogério",
    age: 40,
    sex: "male",
    heigth: 1.70,
    address: "Rua Osasco",
    namber: 100
}

const personFour = {
    nome: "Evangelista",
    age: 36,
    sex: "male",
    heigth: 1.75,
    address: "Rua Praia Grande",
    namber:300
}
const personFive = {
    nome: "Damsio",
    age: 50,
    sex: "male",
    heigth: 1.68,
    address: "Rua Pariquera",
    namber:200
}

console.log (personOne.age === personTree.age)
