import { LitElement, css, html } from "lit";

export class MyElement extends LitElement{
    static get styles(){
        return css`
            :host{
                display:block;
                border: 1px solid gray;
                padding: 16px;
                max-width: 800px;
            }
        `;
    }

    static get properties() {
        return {
            name: { type: String },
            count: {type: Number}
        };
    }

    constructor(){
        super();
        this.name='World';
        this.count=0;
    }

    render() {
        return html`
            <h1>Hello, ${this.name}</h1>
            <button @click=${this._onClick} part="button">
                Click count: ${this.count}
            </button>
            <slot></slot>
        `;
    }

    _onClick(){
        this.count++;
    }
}
customElements.define('my-element', MyElement);