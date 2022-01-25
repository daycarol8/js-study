const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20}
];

const getNome = item => item.nome;
const qtdeMaiorQueZero = item => item.qtde > 0;
// const qtdeMaiorIgualAZero = item => item.qtde >= 0;
// const qtdeMuitoGrande = item => item.qtde >= 1000;

const nomeItemsValidos = carrinho
    .filter(qtdeMaiorQueZero)
    .map(getNome);
//console.log(nomeItemsValidos);

Array.prototype.meuFiltro = function(fn) {
    const filtred = [];
    for(let i = 0; i < this.length; i++){
        fn(this[i], i, this) ? filtred.push(this[i]) : null;
    }
    return filtred;
}

console.log(carrinho.meuFiltro(qtdeMaiorQueZero));