import { Comparavel } from "../Interfaces/Comparavel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Comparavel<Negociacoes>{

    private negociacoes: Array<Negociacao> = new Array<Negociacao>();
    
    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
       
    }

    public lista():ReadonlyArray<Negociacao>{
        return this.negociacoes;
    }

    ehIgual(Object: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(Object);
    }

}