export class Negociacoes {
    constructor() {
        //private negociacoes : Array<Negociacao> = []; //outra forma de fazer
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //Use p ReadonlyArray<T> para retorna uma lista somente leitura
    //caso contrário será possivel acessar a ref. do array privado 'necociacoes'
    //o que não é legal, já que quebra o encapsulamento.
    //lista():ReadonlyArray<Negociacao>{ //outra forma de fazer
    lista() {
        return this.negociacoes;
    }
}
