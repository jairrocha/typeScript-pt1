import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociaoesView } from "../views/negociacoes-view.js";

export class NegociacaoController{
    private inputData:HTMLInputElement;
    private inputQuantidade:HTMLInputElement;
    private inputValor:HTMLInputElement;
    private negociacoes: Negociacoes;
    private negociacoesView = new NegociaoesView('#negociacoesView');
    private mesagemView = new MensagemView('#mensagemView');

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector("#valor");
        this.negociacoes = new Negociacoes();
        this.negociacoesView.update(this.negociacoes);
       
    }
    

    public adiciona(): void{
        
        const negociacao = this.criaNegociacao();
        const result = this.negociacoes.adiciona(negociacao)
        this.atualizaView(result);
        this.limparFormulario();

    }

    private limparFormulario():void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();

    }

    private criaNegociacao() : Negociacao {
      
        return Negociacao.criaDe(
                    this.inputData.value, 
                    this.inputQuantidade.value, 
                    this.inputValor.value);

    }

    private atualizaView(result:Boolean):void{

        if (result == true) {
            this.negociacoesView.update(this.negociacoes);
            this.mesagemView.update('Negociação adiciona com sucesso!');
        }
        else{
            this.mesagemView.update('Somente negociações em dias úteis são aceitas');
        }

    
    }
    
}