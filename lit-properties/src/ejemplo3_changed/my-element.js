import { LitElement, css, html } from "lit";

export class MyElement extends LitElement{
    static styles = css`
    :host{
        display: flex;
        flex-direction: column;
        border: 1px dotted blueviolet;
    }
    `;

    static properties={ // Declaracion de propiedades
        prop1: {type: String, Reflect: true},
        prop2: {type: Number, Reflect: true},
        prop3: {type: Boolean, Reflect: true},
        prop4: {type: Array, Reflect: true},
        prop5: {type: Object, Reflect: true}
    }

    constructor(){//Inicializacion de propiedades
        super();
        this.prop1 = '';
        this.prop2 = 0;
        this.prop3 = false;
        this.prop4 = [];
        this.prop5 = { };
    }

    render() {//inclusion al template
        return html`
            <p>prop1: ${this.prop1}</p>
            <p>prop2: ${this.prop2}</p>
            <p>prop3: ${this.prop3}</p>

            <p>prop4: ${this.prop4.map((item, index)=>
                html`<span>[${index}:${item}&nbsp;]</span>`)}
            </p>
            <p>prop5:
                ${Object.keys(this.prop5).map(item=>
                    html`<span>${item}: ${this.prop5[item]}&nbsp;</span>`
                )}
            </p>
            <button @click=${this.changeProperties}>Change properties</button>
            <button @click=${this.changeAttributes}>Change attibutes</button>
        `;
    }

    changeAttributes(){
        let randy = Math.floor(Math.random()*10);
        let myBool = this.getAttribute('prop3');
        
        this.setAttribute('prop1', randy.toString());
        this.setAttribute('prop2', randy.toString());
        this.setAttribute('prop3', myBool?'':null);
        this.setAttribute('prop4', JSON.stringify([...this.prop4, randy]));
        this.setAttribute('prop5', JSON.stringify(Object.assign({}, this.prop5, {[randy]:randy})));
        this.requestUpdate();
    }

    changeProperties(){
        let randy = Math.floor(Math.random()*10);
        let myBool = this.getAttribute('prop3');

        this.prop1 = randy.toString();
        this.prop2 = randy;
        this.prop3 = !myBool;
        this.prop4 = [...this.prop4, randy];
        this.prop5 = Object.assign({}, this.prop5, {[randy]: randy});
    }

    // attributeChangedCallback(name, oldValue, newValue){
    //     console.log(`attribute change: ${name}, ${newValue}`);
    //     super.attributeChangedCallback(name, oldValue, newValue);
    // }

    // update(changedProperties){
    //     changedProperties.forEach((oldValue, propName)=>{
    //         console.log(`${propName} changed, olvalue: ${oldValue}`);
    //     })
    // }
}
customElements.define('my-element', MyElement);