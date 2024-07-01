import { LitElement, html } from "lit";
import "./login/login";

export class MainApp extends LitElement{
    render() {
        return html`
            <login-app></login-app>
        `;
    }
}
customElements.define('main-app', MainApp);