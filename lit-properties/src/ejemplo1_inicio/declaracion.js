import { LitElement, css, html } from "lit";

export class Declaracion extends LitElement{
    static styles = css`
        :host{
            display: inline-block;
            border: 1px dotted blueviolet;
        }
    `;

    static properties={ // Declaracion de propiedades
        prop1: {type: String},
        prop2: {type: String},
        prop3: {type: String}
    }

    constructor(){//Inicializacion de propiedades
        super();
        this.prop1='Hello World';
    }

    render() {//inclusion al template
        return html`
            <p>prop1: ${this.prop1}</p>
        `;
    }
}
customElements.define('decla-ini-inlcu', Declaracion);