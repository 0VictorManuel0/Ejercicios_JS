export default class ConsultaComponent extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback() {
        this.render();
        this.formList();
    }

    render() {
        this.shadowRoot.innerHTML=
                    `
                        <div id="form"></div>
                    `;
    }

    formList(){
        let arraysLoca=[];
        fetch('https://api.datos.gob.mx/v1/calidadAire').then(response=>{
            let form = document.querySelector('vistas-component').shadowRoot.querySelector('consulta-component').shadowRoot.getElementById('form');
            if (response.ok) {
                response.json().then(data=>{
                    console.log(data);
                    let results = data.results;
                    arraysLoca.push(results);
                    
                });
            }
        });
    }
}