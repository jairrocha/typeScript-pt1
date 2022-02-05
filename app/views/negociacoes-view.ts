import { Negociacoes } from "../models/Negociacoes.js";

export class NegociaoesView{

    private elemento:HTMLElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    template(model: Negociacoes): string{
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

    update(model : Negociacoes):void{
        this.elemento.innerHTML = this.template(model);
    }

}