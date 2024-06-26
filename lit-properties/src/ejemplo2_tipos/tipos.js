import { LitElement, css, html } from "lit";

export class Tipos extends LitElement{
    static styles = css`
    :host{
        display: flex;
        flex-direction: column;
        border: 1px dotted blueviolet;
    }
`;

    static properties={ // Declaracion de propiedades
        prop1: {type: String},
        prop2: {type: Number},
        prop3: {type: Boolean},
        prop4: {type: Array},
        prop5: {type: Object},
    }

    constructor(){//Inicializacion de propiedades
        super();
        this.prop1 = '';
        this.prop2 = 0;
        this.prop3 = false;
        this.prop4 = [];
        this.prop5 = {};
    }

    render() {//inclusion al template
        return html`
            <p>prop1: ${this.prop1}</p>
            <p>prop2: ${this.prop2}</p>
            <p>prop3: ${this.prop3}</p>

            <p>prop4: ${this.prop4.map((item, index)=>
                html`<span>[${index}:${item}&nbsp;]</span>`)}
            </p>
            <p>prop5:
                ${Object.keys(this.prop5).map(item=>
                    html`<span>${item}: ${this.prop5[item]}&nbsp;</span>`
                )}
            </p>

            
        `;
    }
}
customElements.define('tipos-properties', Tipos);