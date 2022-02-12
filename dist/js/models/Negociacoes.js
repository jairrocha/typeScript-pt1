import { EDiaDaSemama } from "../enums/EdiaDaSemana.js";
export class Negociacoes {
    constructor() {
        //private negociacoes : Array<Negociacao> = []; //outra forma de fazer
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        if (this.IsWorkDay(negociacao.data)) {
            this.negociacoes.push(negociacao);
            return true;
        }
        return false;
    }
    IsWorkDay(data) {
        return data.getDay() != EDiaDaSemama.DOMINGO && data.getDay() != EDiaDaSemama.SABADO;
    }
    //Use p ReadonlyArray<T> para retorna uma lista somente leitura
    //caso contrário será possivel acessar a ref. do array privado 'necociacoes'
    //o que não é legal, já que quebra o encapsulamento.
    //lista():ReadonlyArray<Negociacao>{ //outra forma de fazer
    lista() {
        return this.negociacoes;
    }
}
