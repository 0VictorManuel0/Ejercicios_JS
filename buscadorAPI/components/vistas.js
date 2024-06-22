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
                    .vistas-container{
                        width: 100%;
                        height: 100vh;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    .login-comp{
                        border:1px solid #3498DB;
                        display: none;
                        width:70%;
                        height: 50%;
                        align-items: center;
                        login-component{
                            width:100%;
                            height:100%;
                        }
                    }
                    
                    .consulta-comp{
                        border:1px solid #3498DB;
                        display: none;
                        width: 100%;
                        height: 99%;
                        consulta-component{
                            width:100%;
                            height:100%;
                            word-break: break-all;
                        }
                    }
                    .hidden{
                        display:flex;
                    }
                </style>
                <div class="vistas-container">
                    <div id="login-c" class="login-comp">
                        <login-component></login-component>
                    </div>
                    <div id="consulta-c" class="consulta-comp hidden">
                        <consulta-component></consulta-component>
                    </div>
                </div>
            `;
    }
}
customElements.define('login-component', LoginComponent);
customElements.define('consulta-component', ConsultaComponent);