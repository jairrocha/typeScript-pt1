import { Comparavel } from "../Interfaces/Comparavel.js";

export class Negociacao implements Comparavel<Negociacao> {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}


  get data():Date{
    let dt = new Date(this._data)
    return dt
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }

  public static Factory(dataString:string, quantidadeString:string, valorString:string):Negociacao{
    const exp = /-/g;
    const data = new Date(dataString.replace(exp, ","));
    const quantidade = Number.parseInt(quantidadeString);
    const valor = Number.parseFloat(valorString);
    return new Negociacao(data, quantidade, valor);
  }

  public ehIgual(negociacao:Negociacao): boolean{
    return  this._data.getDate() === negociacao._data.getDate()
      && this.quantidade === negociacao.quantidade
      && this.valor === negociacao.valor;
  }



}
