import { LitElement, html, css } from "lit";

import { abrigos , camisetas, pantalones } from "../modules/consultas";

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
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        // Buscar si el producto ya está en el carrito
        const existingProductIndex = carrito.findIndex(item => item.id === producto.id);
    
        // Si el producto ya está en el carrito, incrementar su cantidad
        if (existingProductIndex !== -1) {
            carrito[existingProductIndex].quantity++;
        } else {
            // Si el producto no está en el carrito, añadirlo
            carrito.push({
                id: producto.id,
                nombre: producto.nombre,
                imagen: producto.imagen,
                precio: producto.precio,
                quantity: 1,  // Inicialmente la cantidad es 1
            });
        }
    
        // Almacenar el carrito actualizado en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito)); 
        //localStorage.getItem('carrito')
        //localStorage.removeItem("carrito")
        console.log(carrito)
        
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