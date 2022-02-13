export class Negociacao{
    
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor (data: Date, quantidade: number, valor: number){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;

    }

    get data():Date{
        
        //Data não é um tipo primitivo, o mesmo possui métodos (ex: '_data.setDate(12)') que 
        //permitem através de sua ref. manipular a data (mesmo sendo readonly, o readonly proteje apenas de 
        //atribuição '_date = 2022-02-01'). Para proteger de acesso indevido, vamos criar 
        //uma cópia e retornar a cópia de '_data'.

        const data = new Date(this._data.getTime());
        return data;

    }
    get quantidade():number{
        return this._quantidade;
    }
    get valor():number{
        return this._valor;
    }

    get  volume():number{
        return this._quantidade * this._valor;
        
    }
    public static criaDe(dataString:string, quantidadeString:string, valorString:string ):Negociacao{
        
        const exp = /-/g; //Expressao regular (todos os hífens)
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);

        return new Negociacao(data, quantidade, valor);
    }
}