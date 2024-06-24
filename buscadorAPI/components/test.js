export default class ConsultaComponent extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
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
                                display: flex;
                            }
                            table{
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
                                <input id="name" type:"text">
                                <button id="search">Search</button>
                                <button>Clear</button>
                            </div>
                            <div class="header-tbl">
                                <span>ID</span>
                                <span>NAME</span>
                                <span>LOCATION</span>
                            </div>
                            <div id="form">
                                
                            </div>
                            <div id="modal">

                            </div>
                        </div>
                    `;
    }

    formList(){
        fetch('https://api.datos.gob.mx/v1/calidadAire').then(response=>{
            let contentApi = this.shadowRoot.getElementById('form');
            let table = document.createElement('table');
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
                            table.appendChild(tr);
                            contentApi.appendChild(table);
                        });
                        
                    });
                    let btnSearch = this.shadowRoot.getElementById('search');
                    let modal = this.shadowRoot.getElementById('modal');
                    btnSearch.addEventListener('click', ()=>{
                        let nameSearch = this.shadowRoot.getElementById('name');
                        console.log(nameSearch.value);
                        this.results.map(element=>{
                            element.stations.map(station=>{
                                if (station.name===nameSearch.value) {
                                    console.log('existen');
                                }else{
                                    console.log('no hay no existe');
                                }
                            });
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