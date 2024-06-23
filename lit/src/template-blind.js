import { LitElement, html } from "lit";

export class TemplateBlind extends LitElement{

    static properties = {
            prop1: { type: String },
            prop2: { type: String },
            prop3: { type: Boolean },
            prop4: { type: String },
            activo: { type: Boolean}
    }

    constructor (){
        super();
        this.prop1='text binding';
        this.prop2='mydiv';
        this.prop3=true;
        this.prop4='pie';
        this.activo=true;
    }

    render() {
        return html`
            <!--  text binding -->
            <div>${this.prop1}</div>

            <!-- attribute binding -->
            <div id="${this.prop2}">attribute binding</div>

            <!-- boolean attribute binding -->
            <div>
                Boolean attribute binding
                <input type="text" ?disabled="${this.prop3}">
            </div>

            <!-- property binding -->
            <div>
                property binding
                <input type="text" .value="${this.prop4}">
            </div>

            <!-- event handler binding -->
            <div>
                event handler binding
                <button @click="${this.clickHandler}">click</button>
            </div>

            <!-- event check binding -->
            <div>
                <p><input type="checkbox" ?checked="${this.activo}" @change="${this.doChange}">checked?</p>
            </div>
        `;
    }


    clickHandler(e){
        console.log(e.target);
    }
    doChange(ev){ 
        console.log(this.activo = ev.target.checked); 
    }
}
customElements.define('template-binding', TemplateBlind);