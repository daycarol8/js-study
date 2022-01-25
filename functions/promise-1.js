let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel']);
});

// p
//     .then(valor => valor[0])
//     .then(primeiro => primeiro[0])
//     .then(letra => letra.toLowerCase())
//     .then(letraMinuscula => console.log(letraMinuscula))

function primeiroElemento(array){
    return array[0]
}
function primeiraLetra(string){
    return string[0]
}
const letraMinuscula = letra => letra.toLowerCase()

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)