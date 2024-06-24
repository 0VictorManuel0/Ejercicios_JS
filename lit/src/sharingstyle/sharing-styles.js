import { LitElement, css, html } from "lit";
import { buttonStyles } from "./_module-styles";

export class SharingStyles extends LitElement{
    static get styles(){
        return[
            buttonStyles, css`
                :host{
                    display: block;
                    border: 1px solid black;
                }
            `
        ]
    }

    render() {
        return html`
            <button class="blue-button">click</button>
            <button class="blue-button" disabled>no click</button>
        `;
    }
}
customElements.define('sharing-styles', SharingStyles);