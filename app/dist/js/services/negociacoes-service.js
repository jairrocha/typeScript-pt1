import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    ObterNegociacoesDoDia() {
        return fetch("http://localhost:8080/dados")
            .then((res) => res.json())
            .then((dados) => {
            return dados.map((d) => {
                return new Negociacao(new Date(), d.vezes, d.montante);
            });
        });
    }
}
