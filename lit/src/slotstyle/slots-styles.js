import { LitElement, html, css } from "lit-element";

export class SlotElement extends LitElement{

    static styles=css`
        ::slotted(*) {font-family: Roboto;}
        ::slotted(p) {color: blue;}
        div ::slotted(*) {color:red;}
        
    `;

    render() {
        return html`
            <slot></slot>
            <div><slot name="hi"></slot></div>
        `;
    }
}
customElements.define('slots-element', SlotElement);