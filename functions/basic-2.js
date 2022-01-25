function bomDia(){
    console.log('Bom dia')
}

const boaTarde = function () {
    console.log('Boa Tarde')
}

function executeRandom(fn){
    if(typeof fn === 'function'){
        fn();
    }
}

executeRandom(3);
executeRandom(bomDia);
executeRandom(boaTarde);

//2 -> Retornar uma função

function potencia(base){
    return function(exp){
        return Math.pow(base, exp);
    }
}

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(2));