function gerarNumerosEntre(min, max, numerosProibidos) {
    min > max ? [max, min] = [min, max] : null;

    return new Promise((resolve, reject) => {
        const fator = max - min + 1;
        const random = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(random)){
            reject('Número repetido');
        }else {
            resolve(random);
        }
        
    })
}

async function gerarMegaSena(qtdeNumeros, tentativa = 1) {
    try {
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()){
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
   } catch(e) {
       if(tentativa > 10){
           throw 'Não deu certo'
       } else{
        return gerarMegaSena(qtdeNumeros, tentativa + 2)
       }
   }
}

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log)

// gerarNumerosEntre(1, 5, [1, 2, 4])
//     .then(console.log)
//     .catch(console.log)