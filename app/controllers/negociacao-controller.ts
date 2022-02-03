import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";

export class NegociacaoController{
    private inputData:HTMLInputElement;
    private inputQuantidade:HTMLInputElement;
    private inputValor:HTMLInputElement;
    private negociacoes: Negociacoes;

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector("#valor");
        this.negociacoes = new Negociacoes();
    }

    adiciona(): void{
        
        
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();


    }

    limparFormulario():void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();

    }

    criaNegociacao() : Negociacao {

        const exp = /-/g; //Expressao regular (todos os hífens)
        const data = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(data, quantidade, valor);
    }

    
}