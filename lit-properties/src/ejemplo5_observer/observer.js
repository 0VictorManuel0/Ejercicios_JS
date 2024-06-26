import { LitElement, html } from "lit";

export class Observer extends LitElement{
    
    static properties={
        myProp: {attribute: true},
        theProp: {attribute: false},
        otherProp: {attribute: 'other-prop'}
    }

    constructor(){
        super();
        this.myProp='myProp';
        this.theProp='theProp';
        this.otherProp='otherProp';
    }

    attributeChangedCallback(name, oldVal, newVal){
        console.log('attrinbute changed', name, newVal);
        super.attributeChangedCallback(name, oldVal, newVal);
    }

    render() {
        return html`
            <p>myProp: ${this.myProp}</p>
            <p>theProp: ${this.theProp}</p>
            <p>otherProp: ${this.otherProp}</p>

            <button @click="${this.changedAttributes}">changed attributes</button>
        `;
    }

    changedAttributes(){
        let randomString = Math.floor(Math.random()*100).toString();
        this.setAttribute('myprop', 'myprop' + randomString);
        this.setAttribute('theprop', 'theprop' + randomString);
        this.setAttribute('other-prop', 'other-prop' + randomString);
        this.requestUpdate(); 
    }

    updated(changedProperties){
        changedProperties.forEach((oldVal, propName) => {
            console.log(`${propName} changed. olValue: ${oldVal}`);
        });
    }
}
customElements.define('observer-element', Observer);