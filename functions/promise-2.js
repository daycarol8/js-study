// setTimeout(function(){
//     console.log('teste')

//     setTimeout(function(){
//         console.log('exec')
//     }, 2000)
// }, 2000)

function esperarPor(tempo = 2000){
    return new Promise(function(resolve) {
        setTimeout(function(){
            console.log('executando promise...')
            resolve();
        }, tempo)
    })
}

esperarPor(3000)
    .then(() => esperarPor())
    .then(esperarPor)
