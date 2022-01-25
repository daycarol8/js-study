function gerarNumerosEntre(min, max, tempo) {
    min > max ? [max, min] = [min, max] : null;

    return new Promise(resolve => {
        setTimeout(function(){
            const fator = max - min + 1;
            const random = parseInt(Math.random() * fator) + min
            resolve(random);
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500)
    ])
}

console.time('promise')
gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise');
    })