import { LitElement, html } from "lit";

export default class Econect extends LitElement{
    static properties = {
            name: { type: String },
            email: { type: String },
            verMas: { type: Boolean }
    }

    constructor(){
        super();
        this.verMas=false;
    }

    render() {
        return html`
            <style>
                div{
                    border: 1px solid #ddd;
                    padding: 10px;
                    border-radius: 5px;
                    display: inline-block;
                }
                h1{
                    font-size: 1.2em;
                    font-weight: normal;
                }
            </style>
            <div>
                <h1>${this.name}</h1>
                <p><a href="#" @click="${this.toggle}">Ver más</a></p>
                ${this.verMas?
                    html`Email: ${this.email}`:
                    ``
                }
            </div>
        `;
    }

    toggle(e){
        e.preventDefault();
        this.verMas= !this.verMas;
    }
}
customElements.define('e-conect', Econect);