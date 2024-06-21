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
            <h2>Inicio de sesion</h2>
            <input id="userName" type="text" placeholder="Usuario">
            <input id="userPass" type="password" placeholder="Contraseña">
            <button id="btnEntrar">Entrar</button>
        `;
    }

    validacion(e){
        let entrarSecion = document.querySelector('vistas-component').shadowRoot.querySelector('login-component').shadowRoot.getElementById('btnEntrar');
        let userName = document.querySelector('vistas-component').shadowRoot.querySelector('login-component').shadowRoot.getElementById('userName');
        let userPass = document.querySelector('vistas-component').shadowRoot.querySelector('login-component').shadowRoot.getElementById('userPass');
        let loginModule = document.querySelector('vistas-component').shadowRoot.getElementById('login-c');
        let consultaModule = document.querySelector('vistas-component').shadowRoot.getElementById('consulta-c');
        console.log(entrarSecion);
        entrarSecion.addEventListener('click', (e)=>{
            console.log(userName.value, userPass.value);
            console.log('click');
            if (userName.value === 'pedro' && userPass.value == '123') {
                console.log('entraste');
                loginModule.classList.remove("hidden");
                consultaModule.classList.add('hidden');
            }else{
                console.log('usuario o contraseña incorrecto');
            }
        });
    }
}