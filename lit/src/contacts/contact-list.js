import { LitElement, html } from "lit";
import './e-conect';

export default class ContactList extends LitElement{

    static properties = {
            contacts: { type: Array }
    }

    constructor(){
        super();
        this.contacts=[
            {
                name:'Lucho Godinez',
                email:'user1_some_email@email.com'
            },
            {
                name: 'Hugo Sanchez',
                email: 'user1_some_email@email.com'
            },
            {
                name: 'Jhon Doe',
                email: 'user1_some_email@email.com'
            },
        ];
    }

    render() {
        return html`
            <div>
                ${this.contacts.map(contact =>
                    html`<li><e-conect name="${contact.name}"
                    email="${contact.email}"></e-conect></li>
                    `)}
            </div>
        `;
    }
}
customElements.define('my-contact', ContactList);