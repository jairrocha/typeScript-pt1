import { EDiaDaSemama } from "../enums/EdiaDaSemana.js";
export class Negociacoes {
    constructor() {
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
    lista() {
        return this.negociacoes;
    }
}
