import { LitElement, css, html } from "lit";

export class InputSample extends LitElement{
    static get styles(){
        return css`
            :host{
                display:block;
                padding:25px;
                color: var(--input-sample-text-color, #000); 
            }
        `;
    }

    static get properties() {
        return {
            miDato: { type: String },
        };
    }

    constructor(){
        super();
        this.miDato='Valor de inicializacion';
    }

    render() {
        return html`
            <p>Soy My Element</p>
            <text-input value=${this.miDato}
                @change="${this.inputCambiado}"></text-input>
            <p>El dato escrito es ${this.miDato}</p>
            <button @click=${this.resetTexto}>Borrar texto</button>
        `;
    }

    inputCambiado(e){
        this.miDato=e.detail;
    }
    
    resetTexto(e){
        this.miDato='';
    }
}