export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        let dt = new Date(this._data);
        return dt;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static Factory(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ","));
        const quantidade = Number.parseInt(quantidadeString);
        const valor = Number.parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }
    ehIgual(negociacao) {
        return this._data.getDate() === negociacao._data.getDate()
            && this.quantidade === negociacao.quantidade
            && this.valor === negociacao.valor;
    }
}
