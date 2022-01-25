function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if(Math.random() < chanceErro){
                reject('Ocorreu um erro');
            } else {
                resolve(valor);
            }
       } catch(e){
            reject(e);
       }
    })
}

funcionarOuNao('Testando...', 0.9)
    .then(v => `Valor: ${valor}`)
    .then(
        v => console.log(v),
        //err => console.log(`Erro esp.: ${err}`)
    )
    .catch(err => console.log(`${err}`))
    .then(()=> console.log('Fim'))