import { LitElement, html, css } from "lit-element";

export class ConfigStyle extends LitElement{

    static styles=css`
        :host{color: var(--themeColor, yellowgreen);}
    `;

    render() {
        return html`
            <section>
                lorem.....
            </section>
        `;
    }
}
customElements.define('config-style', ConfigStyle);