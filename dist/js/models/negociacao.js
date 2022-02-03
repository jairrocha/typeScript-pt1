export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get data() {
        //Data não é um tipo primitivo, o mesmo possui métodos (ex: '_data.setDate(12)') que 
        //permitem através de sua ref. manipular a data (mesmo sendo readonly, o readonly proteje apenas de 
        //atribuição '_date = 2022-02-01'). Para proteger de acesso indevido, vamos criar 
        //uma cópia e retornar a cópia de '_data'.
        const data = new Date(this._data.getTime());
        return data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
