import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    
    //private negociacoes : Array<Negociacao> = []; //outra forma de fazer
    private negociacoes : Negociacao[] = [];

    adiciona(negociacao : Negociacao):void{
        this.negociacoes.push(negociacao);
    }

    //Use p ReadonlyArray<T> para retorna uma lista somente leitura
    //caso contrário será possivel acessar a ref. do array privado 'necociacoes'
    //o que não é legal, já que quebra o encapsulamento.
    
    //lista():ReadonlyArray<Negociacao>{ //outra forma de fazer
    lista():readonly Negociacao[]{    
        return this.negociacoes; 
    }

}