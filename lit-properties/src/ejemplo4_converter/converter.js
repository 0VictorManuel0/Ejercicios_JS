import { LitElement, html } from "lit";

export class Converter extends LitElement{

    static properties={
        myProp:{
            Reflect: true,
            Converter:{
                toAttribute(value){
                    console.log('myProp\'s toAttribute.');
                    console.log('Processing:', value, typeof(value));
                    let retVal = String(value);
                    console.log('Returning', retVal, typeof(retVal));
                    return retVal;
                },
                fromAttribute(value){
                    console.log('myProp\´s fromAttribute');
                    console.log('Processing: ', value, typeof(value));
                    let retVal = Number(value);
                    console.log('Returning: ', value, typeof(value));
                    return retVal;
                }
            }
        },
        theProp: {
            Reflect: true,
            Converter(value){
                console.log('myProp\'s converter.');
                console.log('Processing:', value, typeof(value));
                let retVal = Number(value);
                console.log('Returning', retVal, typeof(retVal));
                return retVal;
            }
        },
    };

    constructor(){
        super();
        this.myProp='myProp';
        this.theProp='theProp';
    }

    attributeChangedCallback(name, oldVal, newVal){
        super.attributeChangedCallback(name, oldVal, newVal);
    }

    render() {
        return html`
            <p>myProp: ${this.myProp} tipo: ${typeof(this.myProp)}</p>
            <p>theProp: ${this.theProp} tipo: ${typeof(this.theProp)}</p>

            <button @click="${this.changedProperties}">changed Properties</button>
            <button @click="${this.changedAttributes}">changed Attributes</button>
        `;
    }

    changedAttributes(){
        let randomString = Math.floor(Math.random()*100).toString();

        this.setAttribute('myprop', 'myprop' + randomString);
        this.setAttribute('theprop', 'theprop' + randomString);
        this.requestUpdate();
    }

    changedProperties(){
        let randomString = Math.floor(Math.random()*100).toString();
        this.myProp='myProp'+randomString;
        this.theProp='theProp'+randomString;
    }
}
customElements.define('converter-prop-attri', Converter);