//Função que retorna outra função
function finalPrice(tax){
    return function(price){
        return price * (1 + tax);
    }
}

console.log(finalPrice(0.0875)(25.1))