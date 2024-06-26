import { LitElement, html } from "lit";
import "./ejemplo1_inicio/declaracion";
import "./ejemplo2_tipos/tipos";
import "./ejemplo3_changed/my-element";
import "./ejemplo4_converter/converter";
import "./ejemplo5_observer/observer";
import "./ejemplo6_accessors/accessors";
import "./ejemplo8_haschanged/haschange";

export class Main extends LitElement{

    static properties={
        numero:{type: Number}
    }
    
    constructor(){
        super();
    }

    render() {
        return html`
        <h3>Declaracion, Inicializacioon, Inclusion</h3>
        <decla-ini-inlcu></decla-ini-inlcu>
        <h3>tipos</h3>
        <tipos-properties 
            prop1 = "Hello World"
            prop2 = "5"
            prop3
            prop4 = '[1,2,3,4]'
            prop5 = '{"stuff":"hi"}'
        ></tipos-properties>
        <h3>Cambios attributos y propiedades</h3>
        <my-element my-prop="my-prop" someprop="sompeprop"></my-element>
        <h3>Converter</h3>
        <converter-prop-attri my-prop="my-prop" someprop="sompeprop"></converter-prop-attri>
        <h3>Observer</h3>
        <observer-element my-prop="my-prop" someprop="sompeprop"></observer-element>
        <h3>Accessors</h3>
        <accessors-element></accessors-element>
        <h3>CustomHasChanged</h3>
        <has-changed></has-changed>
        `;
    }
}
customElements.define('main-properties', Main);