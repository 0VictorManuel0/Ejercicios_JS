import LoginComponent from "./login.js";
import ConsultaComponent from "./consulta.js";

export default class VistasComponents extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
            this.shadowRoot.innerHTML=
            `
                <style>
                    .login-comp{
                        display:none;
                    }
                    .consulta-comp{
                        display:none;
                    }
                    .hidden{
                        display:flex;
                    }
                </style>
                <div id="login-c" class="login-comp hidden">
                    <login-component></login-component>
                </div>
                <div id="consulta-c" class="consulta-comp">
                    <consulta-component></consulta-component>
                </div>
            `;
    }
}
customElements.define('login-component', LoginComponent);
customElements.define('consulta-component', ConsultaComponent);