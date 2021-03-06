class Produto {

    constructor(nome, preco, desc = 0.5){
        this.nome =nome
        this.preco = preco
        this.desc = desc
    }

    get precoFinal() {
        return this.preco * (1 - this.desc)
    }
}

const p1 = new Produto('Caneta', 10);
console.log(p1.preco)

const p2 = new Produto('Geladeira', 10000, 0.8)
console.log(p2.nome)

console.log(p2.precoFinal)