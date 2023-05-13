var fruta1 = prompt("Digite o nome da primeira fruta (Com espaço em branco):");
var fruta2 = prompt("Digite o nome da segunda fruta (Com letra maiúscula no início):");
var fruta3 = prompt("Digite o nome da terceira fruta (Com letra maiúscula no início):");
var fruta4 = prompt("Digite o nome da quarta fruta (Com letra maiúscula no início):");
var fruta5 = prompt("Digite o nome da quinta fruta (Com letra maiúscula no início):");

var length1 = console.log(fruta1.length)
var length1 = console.log(fruta2.length)
var length1 = console.log(fruta3.length)
var length1 = console.log(fruta4.length)
var length1 = console.log(fruta5.length)

var substring1 = fruta1.substring(0, 3);
var substring2 = fruta2.substring(0, 3);
var substring3 = fruta3.substring(0, 3);
var substring4 = fruta4.substring(0, 3);
var substring5 = fruta5.substring(0, 3);

// Limpar caracter em branco do início (trim)
var trimmed1 = fruta1.trim();
var trimmed2 = fruta2.trim();
var trimmed3 = fruta3.trim();
var trimmed4 = fruta4.trim();
var trimmed5 = fruta5.trim();

// Após receber as strings sobrepor o conteúdo em caixa baixa (toLowerCase)
var lowerCase1 = trimmed1.toLowerCase();
var lowerCase2 = trimmed2.toLowerCase();
var lowerCase3 = trimmed3.toLowerCase();
var lowerCase4 = trimmed4.toLowerCase();
var lowerCase5 = trimmed5.toLowerCase();

// Exibir a listagem de frutas recebidas em Template String
var listaFrutas = `${lowerCase1}, ${lowerCase2}, ${lowerCase3}, ${lowerCase4}, ${lowerCase5}`;
console.log(listaFrutas);