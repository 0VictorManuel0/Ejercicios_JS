import { LitElement, css, html } from "lit";

export class HostElement extends LitElement{
    static get styles(){
        return css`
            :host{
                display: block;
                background-color: azure;
            }
            :host([hidden]){
                display:none;
            }
            :host(.blue){
                background-color: aliceblue;
                color: blue;
            }
            p{
                font-family: fantasy;
            }
        `;
    }

    render() {
        return html`
            <p>lorem ipsum dolor sit</p>
        `;
    }
}
customElements.define('host-element', HostElement);