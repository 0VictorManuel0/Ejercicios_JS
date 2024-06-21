export default class ConsultaComponent extends HTMLElement{
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
            <h3>ciao</h3>
        `;
    }
}