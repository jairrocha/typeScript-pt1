import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";

export abstract class View<T>{
    
    private elemento:HTMLElement;


    constructor(seletor:string){
        this.elemento = document.querySelector(seletor);
    }

    /*Obriga a qem herda implementar o métdo abstrato*/
    protected  abstract template(model:T):string;

    public update(model : T):void{
        this.elemento.innerHTML = this.template(model);
    }

}