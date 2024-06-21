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
        let results=[];
        fetch('https://api.datos.gob.mx/v1/calidadAire').then(response=>{
            let form = document.querySelector('vistas-component').shadowRoot.querySelector('consulta-component').shadowRoot.getElementById('form');
            if (response.ok) {
                response.json().then(data=>{
                    results = data.results;
                    results.map((element)=>{
                        let latitud = element.stations[0].location.lat;
                        let longitud = element.stations[0].location.lon;
                        let idLocation = element.stations[0].id;
                        let nameLocation = element.stations[0].name;
                        
                        
                    });
                });
            }
        });
    }
}