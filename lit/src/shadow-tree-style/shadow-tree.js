import { LitElement, css, html } from "lit";

export class ShadowTreeStyle extends LitElement{

    static get styles(){
        return css`
            *{color: red; }
            p{font-family:sans-serif; }
            .myclass {margin:100px; }
            #main {padding:30px; }
            h1{font-size: 4em}
        `;
    }

    render() {
        return html`
            <p>lorem ipsum dolor sit</p>
            <p class="myclass">Parrafo 1</p>
            <p id="main">Parrafo 2</p>
            <h1>T i t u l o</h1>
        `;
    }
}

customElements.define('shadow-tree', ShadowTreeStyle);