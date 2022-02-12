import { EDiaDaSemama } from "../enums/EdiaDaSemana.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    
    //private negociacoes : Array<Negociacao> = []; //outra forma de fazer
    private negociacoes : Negociacao[] = [];

    public adiciona(negociacao : Negociacao): Boolean
    {
        
        if(this.IsWorkDay(negociacao.data)){
            this.negociacoes.push(negociacao);
            return true;
        }   

        return false;
    }
    
    

   
    private IsWorkDay(data: Date) :Boolean 
    {
        return data.getDay() != EDiaDaSemama.DOMINGO && data.getDay() != EDiaDaSemama.SABADO;

    }

    //Use p ReadonlyArray<T> para retorna uma lista somente leitura
    //caso contrário será possivel acessar a ref. do array privado 'necociacoes'
    //o que não é legal, já que quebra o encapsulamento.
    
    //lista():ReadonlyArray<Negociacao>{ //outra forma de fazer
    public lista():readonly Negociacao[]{    
        return this.negociacoes; 
    }

}