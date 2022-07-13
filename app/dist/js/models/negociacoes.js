export class Negociacoes {
    constructor() {
        this.negociacoes = new Array();
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    ehIgual(Object) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(Object);
    }
}
