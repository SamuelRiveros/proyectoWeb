import { LitElement, html, css } from "lit";

import { abrigos , camisetas, pantalones, carrito } from "../modules/consultas";



export class productos extends LitElement {

    static properties = {
        dataAbrigos: { type: Array },
        dataCamisetas: { type: Array },
        dataPantalones: { type: Array },
        cantidadEnCarrito: { type: Number }
    }

    constructor() {
        super()
        this.dataAbrigos = [];
        this.dataCamisetas = [];
        this.dataPantalones = [];
        this.cantidadEnCarrito = 0;
    }

    async abrigosDesign(){
        this.dataAbrigos = await abrigos();
    }

    async camisetasDesign(){
        this.dataCamisetas = await camisetas();
    }

    async pantalonesDesign(){
        this.dataPantalones = await pantalones();
    }

    async firstUpdated(){
        await Promise.all([
            this.abrigosDesign(),
            this.camisetasDesign(),
            this.pantalonesDesign()
        ]);
    }

    agregarAlCarrito() {
        this.cantidadEnCarrito++;
        const cantidadCarritoElement = document.querySelector('.cantidadcarrito');
        if (cantidadCarritoElement) {
            cantidadCarritoElement.textContent = this.cantidadEnCarrito;
        } else {
            console.error("No se encontró el elemento '.cantidadcarrito'");
        }

        
    }

    //



    // ------ carrito ------ //



    // --------------------- //





    static styles= css`

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    
    .card {
        background-color: var(--color-grisclaro);
        outline: var(--color-blanco) solid;
        outline-width: 2px;
        width: 250px;
        height: max-content;
    
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        border-radius: 10px;
        box-shadow: inset 0 0 25px #000;
    }
    
    .card .description {
        background-color: var(--color-gris);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        height: 90px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        padding: 1em;
        align-items: center;
    }
    
    .card .description p {
        font-size: 14px;
        color: var(--color-blanco);
    }
    
    
    .card img {
        max-height: 245px;
        object-fit: contain;
        padding: 5px;
        -webkit-user-drag: none;
    }

    .agregar {
        border: none;
        border-radius: 10px;
        height: 30px;
        width: 100px;
        transition: all 0.3s;
    }
    
    .agregar:hover {
        cursor: pointer;
        color: var(--color-blanco);
        background-color: var(--color-grisclaro);
        box-shadow: 0 0 20px #000;
        transition: 0.3s;
    }
    `
    render(){
        return html`
        ${this.dataAbrigos.map(val => html`
            <div class="card abrigos">
                <img src="${val.imagen}">
                <div class="description">
                    <div class="principal">
                        <p>${val.nombre}</p>
                        <p>${val.precio}</p>
                    </div>
                    <button class="agregar" @click="${this.agregarAlCarrito}">Agregar</button>
                </div>
            </div>

        `)}

        ${this.dataCamisetas.map(val => html`
            <div class="card camisetas">
                <img src="${val.imagen}">
                <div class="description">
                    <div class="principal">
                        <p>${val.nombre}</p>
                        <p>${val.precio}</p>
                    </div>
                    <button class="agregar" @click="${this.agregarAlCarrito}">Agregar</button>
                </div>
            </div>

        `)}

        ${this.dataPantalones.map(val => html`
            <div class="card pantalones">
                <img src="${val.imagen}">
                <div class="description">
                    <div class="principal">
                        <p>${val.nombre}</p>
                        <p>${val.precio}</p>
                    </div>
                    <button class="agregar" @click="${this.agregarAlCarrito}">Agregar</button>
                </div>
            </div>

        `)}




        `
    }

}