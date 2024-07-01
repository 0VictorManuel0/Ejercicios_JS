import { LitElement, css, html } from "lit";

export class LoginApp extends LitElement{
    
    static properties = {
        userName:{ type: String},
        userPass:{ type: String},
    }

    static styles = css`
        :host{
            display: flex;
            width: 90%;
            height: 90vh;
            justify-content: center;
            align-items:center;
        }
        .login-conteiner{
            background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../media/img/fondologin.png');        
            background-repeat: no-repeat;
            background-size: cover;
            width: 80%;
            height: 80vh;
            display: flex;
            justify-content: center;
            align-items: center;
            .items{
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-direction: column;
                height: 50%;
                .icon{
                    width: 3.125rem;
                    height: 3.125rem;
                    background-image:url('../media/icons/user-icon-login.png');
                    background-repeat: no-repeat;
                    background-size: cover;
                }
                input{
                    width: 70%;
                    height: 10%;
                }
                button{
                    width: 40%;
                    height: 10%;
                }
            }
        }
    `;

    constructor(){
        super();
        this.listUser='{}'
        this.userName='';
        this.userPass='';
    }

    render() {
        return html`
            <section class="login-conteiner">
                <div class="items">
                    <span class="icon"></span>
                    <input id="userName" type="text" autocomplete="off" placeholder="Usuario">
                    <input id="userPass" type="password" placeholder="Contraseña" value='${this.userPass}'>
                    <button @click=${this.searchUser}>Entrar</button>
                </div>
            </section>
        `;
    }

    searchUser(){  
        this.userName=this.shadowRoot.getElementById('userName').value;
        this.userPass=this.shadowRoot.getElementById('userPass').value;
        console.log(this.userName, this.userPass);
    }
}
customElements.define('login-app', LoginApp);