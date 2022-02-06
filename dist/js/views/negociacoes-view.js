import { View } from "./View.js";
export class NegociaoesView extends View {
    /*Override*/
    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                    <tbody>
                        ${model.lista().map(negociacao => {
            return `
                                <tr>
                                    <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
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
}
