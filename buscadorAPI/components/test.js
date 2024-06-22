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
                        <style>
                            #idform{
                                width: 100%;
                                height: 100%;
                                word-break: break-all;
                            }
                            .table{
                                width: 90%;
                                height: 90%;
                                tr{
                                    th{
                                        width: 33%;
                                        border: 1px solid blueviolet;
                                    }
                                    td{
                                        height: 5vh;
                                        border: 1px solid blueviolet;
                                    }
                                }
                            }
                        </style>
                        <div id="form">
                            <table class="table">
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>LOCATION</th>
                                </tr>
                            </table>
                        </div>
                    `;
    }

    formList(){
        let results=[];
        fetch('https://api.datos.gob.mx/v1/calidadAire').then(response=>{
            let contentApi = this.shadowRoot.querySelector('tbody');
            if (response.ok) {
                response.json().then(data=>{
                    results = data.results;
                    results.map((element)=>{
                        element.stations.forEach(station => {
                            let latitud = station.location.lat;
                            let longitud = station.location.lon;
                            let idLocation = station.id;
                            let nameLocation = station.name;
                            let tr = document.createElement('tr');
                            tr.innerHTML = `    
                                                <td> ${idLocation}</td>  
                                                <td> ${nameLocation}</td>
                                                <td> ${latitud} ${longitud}</td>
                                            `;
                            contentApi.appendChild(tr);
                        });
                        
                    });
                });
            }
        });
    }
}