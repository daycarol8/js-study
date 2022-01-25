function gerarNumerosEntre(min, max) {
    min > max ? [max, min] = [min, max] : null;

    return new Promise(resolve => {
        const fator = max - min + 1;
        const random = parseInt(Math.random() * fator) + min
        resolve(random);
    })
}

gerarNumerosEntre(1 ,60)
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log)