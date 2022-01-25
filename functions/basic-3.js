const somar = (...numeros) => {
    let total = 0;
    for(let n of numeros){
        total += n;
    }
    return total;
}

console.log(somar(1,2,3));
console.log(somar(1,2,3,7,8,9));

const potencia = base => exp => Math.pow(base, exp);
console.log(potencia(5)(2));

Array.prototype.ultimo = function(){
    console.log(this[this.length - 1]);
}

Array.prototype.primeiro = function(){
    console.log(this[0]);
}

const numeros = [1, 2, 3, 4, 5, 6];
numeros.ultimo();
numeros.primeiro();