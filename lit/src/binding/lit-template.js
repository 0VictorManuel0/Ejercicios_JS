import { LitElement, html } from "lit";

export default class TemplateLit extends LitElement{
    static properties() {
        return {
            title: { type: String },
            counter: { type: Number },

            myString: { type: String },
            myArray: { type: Array },
            myBool: { type: Boolean },
        };
    }

    constructor(){
        super();
        this.title='Hey there';
        this.counter= 5;

        this.myArray=['','','','','',''];
        this.myBool=true;
        this.myString="";
    }

    _increment(){
        this.counter += 1;
        console.log(this.counter);
    }

    render() {
        return html`
            <h2>${this.title} Nr. ${this.counter}!</h2>
            <button @click=${this._increment}>increment</button>
            <hr>
            <p>arrays loop and conditionals</p>
            <p>${this.myString}</p>
            <ul>
                ${this.myArray.map(i=>html`<li>${i}</li>`)}
            </ul>
            ${this.myBool?
                html`<p>render some html if mybool is true</p>`:
                html`<p>render some other html if my bool is false</p>`
            }
        `;
    }


}

customElements.define('lit-template', TemplateLit);
