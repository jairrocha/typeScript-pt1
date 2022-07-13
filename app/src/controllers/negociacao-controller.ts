import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/Inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { Dia } from "../enums/dia.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  @domInjector("#data")
  private inputData: HTMLInputElement;
  @domInjector("#quantidade")
  private inputQuantidade: HTMLInputElement;
  @domInjector("#valor")
  private inputValor: HTMLInputElement;
  private negociacoes: Negociacoes;
  private negociacoesView: NegociacoesView;
  private mensagemView: MensagemView;
  private negociacoesService = new NegociacoesService();

  constructor() {
    // this.inputData = document.querySelector("#data");
    // this.inputQuantidade = document.querySelector("#quantidade");
    // this.inputValor = document.querySelector("#valor");
    this.negociacoes = new Negociacoes();
    this.negociacoesView = new NegociacoesView("#negociacoesView");
    this.mensagemView = new MensagemView("#mensagemView");
    this.negociacoesView.update(this.negociacoes);
  }

  @inspect()
  @logarTempoDeExecucao()
  public adiciona(): void {
    const negociacao = Negociacao.Factory(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );

    if (this.ehDiaUtil(negociacao.data)) {
      this.negociacoes.adiciona(negociacao);
    } else {
      this.mensagemView.update(
        "Somente negociações em dias úteis serão aceitas."
      );
      return;
    }

    this.UpdateView();
    this.limparForm();
  }

  private UpdateView() {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update("Negociação adicionada com sucesso!");
  }

  public importarDados(): void {
    this.negociacoesService
      .ObterNegociacoesDoDia()
      .then((n) =>
        n.filter((f) => {
          return !this.negociacoes
            .lista()
            .some((itemLista) => itemLista.ehIgual(f));
        })
      )
      .then((negociacoesDeHoje) => {
        for (let negociacao of negociacoesDeHoje) {
          this.negociacoes.adiciona(negociacao);
        }
        this.negociacoesView.update(this.negociacoes);
      });
  }

  private limparForm(): void {
    this.inputQuantidade.value = "1";
    this.inputData.value = "";
    this.inputValor.value = "0";
    this.inputData.focus();
  }

  private ehDiaUtil(data: Date): boolean {
    return data.getDay() != Dia.DOMINGO && data.getDay() != Dia.SABADO;
  }
}
