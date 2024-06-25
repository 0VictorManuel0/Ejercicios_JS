import { LitElement, css, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

export class DinamicStyles extends LitElement{
    
    static properties={
        classes: {type: Object},
        styles: {type: Object}
    }
    static styles= css`
        .mydiv{background-color: blue;}
        .someclass{border: 1px solid red;}
    `;

    constructor(){
        super();
        this.classes={mydiv: true, someclass: true};
        this.styles={color:'green', fontFamily:"Roboto"};
    }

    render() {
        return html`
            <div class=${classMap(this.classes)} style=${styleMap(this.styles)}>
                Some Content
            </div>
        `;
    }
}
customElements.define('dinamic-styles', DinamicStyles);