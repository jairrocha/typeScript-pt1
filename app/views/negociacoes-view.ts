import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { View } from "./View.js";

export class NegociaoesView extends View<Negociacoes>{

    /*Override*/
    protected template(model: Negociacoes): string{
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                    <tbody>
                        ${
                            model.lista().map(negociacao => {
                            return `
                                <tr>
                                    <td>${this.formatar(negociacao.data)}</td>
                                    <td>${negociacao.quantidade}</td>
                                    <td>${negociacao.valor}</td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </thread>
            </table>
        
        `;
     
    }

    private formatar(data:Date): string{
        return new Intl.DateTimeFormat()
            .format(data);
    }

}