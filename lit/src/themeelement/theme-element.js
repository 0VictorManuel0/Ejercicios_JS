import { LitElement, css, html } from "lit";

export class ThemeElement extends LitElement{

    static styles= css`
        :host{
            display:block;
            color: var(--my-element-text-color, black);
            background: var(--my-element-background-color, white);
            font-family: Verdana, Geneva, Tahoma, sans-serif(--my-element-font-family, Roboto);
        }
        :host([hidden]){
            display:none;
        }
    `;

    render() {
        return html`
            <p><div>loremn ipsum dolor sit, amet...</div></p>
        `;
    }
}
customElements.define('theme-element', ThemeElement);