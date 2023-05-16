const array1 = ["maça","Kiwi","pera","Tomate"]
console.log(array1)
array1[2]="Melão"

console.log(array1.toString())
console.clear()

var atrasados = ["Matheus","Abraao", "Erick", "Jhonathan"]
console.log (atrasados)

//Mudar o separador com JOIN
console.log (atrasados.join("*"))

//Mostrar a quantidade de conteúdos no array com LENGTH
console.log(atrasados.length)
console.clear()

//Remover elementos do array POP (último conteúdo do array)
var atrasados2 =["Matheus","Abraao", "Erick", "Jhonathan"]
console.log(atrasados2.pop())
console.log(atrasados2) 


//Inserir conteúdos no array com PUSH
let atrasado2min = atrasados.push("Fequer")
console.log(atrasados)

//Remover elemento do início do array com SHIFT
let atrasado3min = atrasados.shift();
console.log(atrasado3min)
console.log(atrasados)

//Inserir elemento no inicio do array com UNSHIFT
let outroAtrasado = atrasados.unshift("Adriely")
console.log(atrasados)

//Deletar posição específica do array com DELETE (vai deixar um espaço em branco)
delete atrasados[2]
console.log(atrasados)


