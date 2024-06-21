export default class LoginComponent extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback() {
        this.render();
        this.validacion();
    }
    
    render() {
        this.shadowRoot.innerHTML=
        `
            <style>
                .login-container{
                    display:flex;
                    width:100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                }
                #btnEntrar{
                    border: 0;
                    width: 40%;
                    height: 5vh;
                    background-color: #3498DB;
                    color: white;
                }
                #userName, #userPass{
                    width: 100%;
                    height: 5vh;
                    border: 1px solid #85C1E9;
                }
                .input-label{
                    display:flex;
                    flex-direction:column;
                    width:60%;
                }
            </style>
            <div class="login-container">
                <div class="input-label">
                    <label>Email</label>
                    <input id="userName" type="text">
                </div>
                <div class="input-label">
                    <label>Password</label>
                    <input id="userPass" type="password">
                </div>
                <button id="btnEntrar">Sign</button>
            </div>
        `;
    }

    validacion(e){
        let entrarSecion = this.shadowRoot.getElementById('btnEntrar');
        let userName = this.shadowRoot.getElementById('userName');
        let userPass = this.shadowRoot.getElementById('userPass');
        
        let loginModule = document.querySelector('vistas-component').shadowRoot.getElementById('login-c');
        let consultaModule = document.querySelector('vistas-component').shadowRoot.getElementById('consulta-c');
        entrarSecion.addEventListener('click', (e)=>{
            console.log(userName.value, userPass.value);
            if (userName.value === 'pedro' && userPass.value == '123') {
                loginModule.classList.remove("hidden");
                consultaModule.classList.add('hidden');
            }else{
                console.log('usuario o contraseña incorrecto');
            }
        });
    }
}