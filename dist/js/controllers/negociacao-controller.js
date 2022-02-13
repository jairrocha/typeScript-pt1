import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociaoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoesView = new NegociaoesView('#negociacoesView');
        this.mesagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector("#valor");
        this.negociacoes = new Negociacoes();
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        const result = this.negociacoes.adiciona(negociacao);
        this.atualizaView(result);
        this.limparFormulario();
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    criaNegociacao() {
        return Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
    }
    atualizaView(result) {
        if (result == true) {
            this.negociacoesView.update(this.negociacoes);
            this.mesagemView.update('Negociação adiciona com sucesso!');
        }
        else {
            this.mesagemView.update('Somente negociações em dias úteis são aceitas');
        }
    }
}
