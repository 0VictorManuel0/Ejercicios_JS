import {css} from "lit";
import { SuperElemento } from "./super-elemento";

export class HerenciaElemento extends SuperElemento{
    
    static get styles(){
        return [
            super.styles,
            css`button{color:red;}`
        ];
    }
}
customElements.define('herencia-element', HerenciaElemento);