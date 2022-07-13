import { escape } from "../decorators/escape.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {
  
    @escape
    protected template(model: Negociacoes): string {
    return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model
                  .lista()
                  .map((n) => {
                    return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                        </tr>
                    `;
                  })
                  .join("")}
            </tbody>
        </table>
        `;
  }


}
