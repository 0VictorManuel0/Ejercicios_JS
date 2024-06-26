import { LitElement, html } from "lit";

export class CustomHasChanged extends LitElement{

    static properties={
        myProp:{type:Number,
            hashChange(newVal, oldVal){
                if (newVal > oldVal) {
                    console.log(`${newVal} > ${oldVal}, hasChanged: true`);
                    return true;
                }else{
                    console.log(`${newVal} > ${oldVal}, hasChanged: false`);
                    return false;
                }
            }
        }
    }

    constructor(){
        super();
        this.myProp = 1;
    }

    render() {
        return html`
            <p>myProp: ${this.myProp}</p>
            <button @click="${this.getNewVal}">get new value</button>
        `;
    }

    updated(){
        console.log('updated');
    }

    getNewVal(){
        let newVal = Math.floor(Math.random()*10);
        this.myProp=newVal;
    }
}
customElements.define('has-changed', CustomHasChanged);