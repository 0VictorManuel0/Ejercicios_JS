export default class ConsultaComponent extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.url = [];
    }

    connectedCallback() {
        this.render();
        this.formList();
        this.scrollInfinite();
    }

    render() {
        this.shadowRoot.innerHTML=
                    `
                        <style>
                            .main-container{
                                display:flex;
                                flex-direction: column;
                                align-items: center;
                                .filter{
                                    width:100%;
                                    height: 8vh;
                                    display: flex;
                                    justify-content: space-around;
                                    align-items: center;
                                    label{
                                        font-size: 3vh;
                                    }
                                    input{
                                        width: 40%;
                                        height: 4vh;
                                    }
                                    button{
                                        width: 15%;
                                        height: 4vh;
                                    }
                                }
                            }
                            .title{
                                background-color: #3498DB;
                                color: white;
                                width:100%;
                            }
                            #form{
                                width: 95%;
                                height: 80vh;
                                border: 1px solid green;
                                overflow: auto;
                            }
                            .table{
                                width: 100%;
                                height: 90vh;
                                table-layout: fixed;
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
                            .header-tbl{
                                width: 100%;
                                display: flex;
                                justify-content: space-around;
                            }
                        </style>
                        <div class="main-container">
                            <div class="title">
                                <h2>view: SamplePage</h2>
                            </div>
                            <div class="filter">
                                <label>Filter: </label>
                                <input id="filter" type:"text">
                                <button id="search">Search</button>
                                <button>Clear</button>
                            </div>
                            <div class="header-tbl">
                                <span>ID</span>
                                <span>NAME</span>
                                <span>LOCATION</span>
                            </div>
                            <div id="form">
                                <table class="table">
                                </table>
                            </div>
                        </div>
                    `;
    }

    formList(){
        url = fetch('https://api.datos.gob.mx/v1/calidadAire').then(response=>{
            let contentApi = this.shadowRoot.querySelector('table');
            if (response.ok) {
                response.json().then(data=>{
                    this.results = data.results;
                    this.results.map((element)=>{
                        element.stations.map(station => {
                            let tr = document.createElement('tr');
                            tr.innerHTML = `    
                                                <td> ${station.id}</td>  
                                                <td> ${station.name}</td>
                                                <td> ${station.location.lat} ${station.location.lon}</td>
                                            `;
                            contentApi.appendChild(tr);
                        });
                    });
                });
            }
        });
    }
    
    scrollInfinite(){
        const div = this.shadowRoot.getElementById('form');
        div.addEventListener("scroll", () => {
            Math.abs(div.scrollHeight - div.clientHeight - div.scrollTop) < 1
        });
    }

}