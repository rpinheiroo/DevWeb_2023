//Array Unidimensional
var arrayUnidimensional = ["HTML",1993,"CSS",1996,"Bootstrap",2011,"JS",1995,"React",2013,"Java",1995]

console.log(arrayUnidimensional) //Retorna todo o array

console.log(arrayUnidimensional.length) //Retorna o tamanho do array

console.log(arrayUnidimensional[6]) //Retorna apenas a informação JS

console.log(arrayUnidimensional.toString())
console.log(typeof arrayUnidimensional) // Transformar o array em string

console.log(arrayUnidimensional.join("/"))
console.log(arrayUnidimensional) // Troca o separador de "," para "/"

var insereIos = arrayUnidimensional.unshift("IOS")
console.log(arrayUnidimensional) // Insere a informação IOS 

//Array Bidimensional
var arrayBidimensional = [
    ["HTML",1993,"CSS",1996,],
    ["Bootstrap",2011,"JS",1995],
    ["React",2013,"Java",1995]
];

console.log(arrayBidimensional) //Retorna todo o array

console.log(arrayBidimensional.length) //Retorna o tamanho do array

console.log(arrayBidimensional[2][1]) // Retorna apenas o valor "2013"

arrayBidimensional [1][2] = "Javascript"
console.log(arrayBidimensional) //Substituir um valor da array

delete arrayBidimensional[2][2]
console.log(arrayBidimensional) //Deletar o valor "JAVA"

var inserirValor = arrayBidimensional.push("Pipoca")
console.log(arrayBidimensional) //Inserir valor "Pipoca no final"


