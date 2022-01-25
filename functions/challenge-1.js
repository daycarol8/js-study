// somar(3)(4)(5)
function somar(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

const somarAB = somar(3)(4);
console.log(somarAB(4));
//fn -> 3 * 7
//fn -> 3 + 7
//fn -> 3 - 7
//calcular(3)(7)(fn)
function sum(n1,n2){
    return n1 + n2;
}
function minus(n1,n2){
    return n1 - n2;
}
function divide(n1,n2){
    return n1 / n2;
}
function multiply(n1,n2){
    return n1 * n2;
}

function calculator(n1){
    return function(n2){
        return function(fn){
            return fn(n1,n2);
        }
    }
}

console.log(calculator(10)(5)(divide))

