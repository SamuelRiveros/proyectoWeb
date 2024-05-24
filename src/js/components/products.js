import { LitElement, html, css } from "lit";

import { abrigos , camisetas, pantalones } from "../modules/consultas";
import { carrito } from './carrito.js'

export class productos extends LitElement {
    

    static properties = {
        dataAbrigos: { type: Array },
        dataCamisetas: { type: Array },
        dataPantalones: { type: Array },
    }

    constructor() {
        super()
        this.dataAbrigos = [];
        this.dataCamisetas = [];
        this.dataPantalones = [];
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

    agregarAlCarrito(event) {
        const card = event.target.closest('.card');
        const nombre = card.querySelector('.principal p:first-child').textContent;
        const precio = card.querySelector('.principal p:last-child').textContent;
        const imagen = card.querySelector('img').src;
        const id = card.querySelector(".id").textContent
        const producto = {
            nombre: nombre,
            precio: precio,
            imagen: imagen,
            id: id,

        };
        this.exportarACarrito(producto);



        // suma de cantidad en el carrito //
        
        
    }

    exportarACarrito(producto) {
        let dataCarro = JSON.parse(localStorage.getItem('carrito')) || [];
        let instanceCar = new carrito()

        // Buscar si el producto ya está en el carrito
        const existingProductIndex = dataCarro.findIndex(item => item.id === producto.id);
        const carLabel = document.querySelector('#idCantCarrito')
    
        // Si el producto ya está en el carrito, incrementar su cantidad
        if (existingProductIndex !== -1) {
            dataCarro[existingProductIndex].quantity++;
        } else {
            // Si el producto no está en el carrito, añadirlo
            dataCarro.push({
                id: producto.id,
                nombre: producto.nombre,
                imagen: producto.imagen,
                precio: producto.precio,
                quantity: 1,  // Inicialmente la cantidad es 1
            });
        }
    
        // Almacenar el carrito actualizado en localStorage
        localStorage.setItem('carrito', JSON.stringify(dataCarro)); 
        //localStorage.getItem('carrito')
        //localStorage.removeItem("carrito")
        carLabel.innerHTML = dataCarro.length
        console.log("VALOrrrrrr", dataCarro)
        instanceCar.addCar()
        document.querySelector('#errorLoad').innerHTML = ` <my-carrito style="width: 100%; height: 100%;"></my-carrito>`
        
        
    }

    // Diseño //


    static styles= css`

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    
    .card {
        background-color: var(--color-blanco);
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
        border-radius: 10px;
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

    @media (width<=700px) {
    
        .menuopen {
            color: var(--color-blanco);
            background: none;
            display: flex;
            border: none;
            font-size: 3em;
            padding-right: 1vw;
        }
    
        .visible {
            color: var(--color-blanco);
            background-color: #000000b4;
            width: 100%;
            height: 30%;
            top:17vh;
            position: fixed;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1em;
            font-size: 2vh;
        }
        
    
        main {
            display: flex;
            flex-direction: column;
        }
    
        .leftpart {
            height: 5%;
            width: 100vw;
        }
        .leftpart h1 {
            width: 100%;
            display: flex;
            justify-content: center;
            font-size: 30px;
        }
    
        .credits {
            display: flex;
            margin-top: 0em;
        }
    
        .credits p {
            font-size: 15px;
        }
    
        .mainpart {
            outline: none;
            border: var(--color-blanco) solid;
            border-width: 1px;
            width: 100vw;
            height: 87.5vh;
            display: flex;
            margin-top: 3vh;
            padding: 1em;
            gap: 1em;
        }
    
        .mainpart h1 {
            padding: 1vw;
            font-size: 20px;
        }
    
        .cardzone {
            border-radius: 20px;
            padding: 5px;
        }
    
        .card {
            width: 45%;
            max-height: 45%;
        }
    
        .card img {
            object-fit: contain;
            max-height: 160px;
            padding: 0px;
        }
    
        .card .description {
            width: auto;
            height: max-content;
            padding: 0.3em;
        }
    
        .card .description .principal p, .agregar {
            font-size: 10px;
        }
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
                    <p class ="id" style="display: none">${val.id}</p>
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
                    <p class ="id" style="display: none">${val.id}</p>
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
                        <p class ="id" style="display: none">${val.id}</p>
                        <p>${val.precio}</p>
                    </div>
                    <button class="agregar" @click="${this.agregarAlCarrito}">Agregar</button>
                </div>
            </div>

        `)}




        `
    }

}