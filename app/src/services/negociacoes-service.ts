import { NegociacoesDoDia } from "../Interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService{
    public ObterNegociacoesDoDia(): Promise<Negociacao[]>{
        
        return fetch("http://localhost:8080/dados")
        .then((res) => res.json())
        .then((dados: Array<NegociacoesDoDia>) => {
          return dados.map((d) => {
            return new Negociacao(new Date(), d.vezes, d.montante);
          });
        })
    }
}