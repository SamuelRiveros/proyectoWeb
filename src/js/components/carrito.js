import { LitElement, html, css } from "lit";


export class carrito extends LitElement {

    static properties = {
        dataCarrito: {type: Array},
    }

    constructor() {
        super();
        
        this.dataCarrito = []
        
        const carritoData = JSON.parse(localStorage.getItem('carrito')) || [];
        this.dataCarrito = carritoData.map(item => ({
            id: item.id,
            imagen: item.imagen,
            nombre: item.nombre,
            cantidad: item.quantity,
            precio: item.precio,
            subtotal: item.quantity * item.precio
        }));
    
    }

    eliminarCarrito() {
        let carritovar = localStorage.removeItem("carrito")
        console.log(carritovar)
        this.dataCarrito = []
    }

    eliminarindividuo(id) {
        // Filtra el carrito para eliminar el producto con el ID proporcionado
        this.dataCarrito = this.dataCarrito.filter(item => item.id !== id);
        // Actualiza el localStorage
        localStorage.setItem('carrito', JSON.stringify(this.dataCarrito));
        // Fuerza una actualización del componente
        this.requestUpdate();
    }

    addCar(){
        this.dataCarrito = JSON.parse(localStorage.getItem('carrito'))
        console.log("Estos son los datos que estoy trayendo: ", this.dataCarrito)
    }

    // Estudiar esto //
    
    async totalCarrito() {
        let carritovar = await JSON.parse(localStorage.getItem("carrito"))
        let counter = 0
        if (!carritovar || carritovar.length === 0 ) {
            this.shadowRoot.querySelector(".total").textContent = "0";
            return;
        }
        for(let element of carritovar) {
            counter += Number(element.precio) * Number(element.quantity)
            console.log(element)
        };

        this.shadowRoot.querySelector(".total").textContent = `${counter}`
    }




    static styles= css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    
    .carrito {
        display: flex;
        margin-top: 30px;
        background-color: var(--color-grisclaro);
        outline: var(--color-blanco) solid;
        outline-width: 2px;
        width: 100%;
        height: max-content;
        flex-direction: row;
        border-radius: 10px;
        box-shadow: inset 0 0 25px #000;
    }
    
    .carrito img {
        width: 10%;
        max-height: 245px;
        object-fit: contain;
        padding: 3px;
        -webkit-user-drag: none;
    }
    
    .carrito .description {
        width: 100%;
        display: flex;
        gap: 30px;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    
    .carrito .description p {
        font-size: 14px;
        color: var(--color-blanco);
    }
    
    .carrito .principal,.cantidad,.precio,.subtotal {
        text-align: center;
    }
    
    .eliminar{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2em;
    }

    .eliminar:hover {
        cursor: pointer
    }







    .carritopciones {
        align-items: center;
        color: var(--color-blanco);
        display: flex;
        flex-direction: row;
        bottom: 100px;
        width: 850px;
        justify-content: space-between;

    }
    
    .carritopciones .vaciarcarrito {
        box-shadow: black 5px 5px;
        color: var(--color-blanco);
        font-size: 15px;
        border: none;
        background-color: var(--color-gris);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        width: 10em;
        height: 3em;
        transition: all 0.5s;
    }
    
    .vaciarcarrito:hover {
        color: var(--color-negro);
        cursor: pointer;
        background-color: var(--color-blanco);
    }
    
    .carritopciones .totalcarrito {
        box-shadow: black 5px 5px;
        color: var(--color-blanco);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        height: 90px;
        width: 200px;
        color: var(--color-blanco);
        background-color: var(--color-gris);
        flex-direction: column;
    }
    
    .carritopciones .compra {
        display: flex;
        justify-content: center;
        align-items: center;
        width:70%;
        height: 30%;
    }
    .carritopciones .comprar {
        color: var(--color-blanco);
        background-color: var(--color-grisclaro);
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 10px;
        transition: all 0.5s;
    }
    
    .comprar:hover {
        color: var(--color-negro);
        cursor: pointer;
        background-color: var(--color-blanco);
    }

    @media (width<=700px) {

        .selector {
            display: none;
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
    
    
    
    
        .carrito {
            position: relative;
            left: 270px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: var(--color-grisclaro);
            outline: var(--color-blanco) solid;
            outline-width: 2px;
            width: 300px;
    
            border-radius: 10px;
            box-shadow: inset 0 0 25px #000;
        }
    
        .carrito img {
            width: 25%;
            max-height: 245px;
            object-fit: contain;
            padding: 3px;
            -webkit-user-drag: none;
        }
    
        .carrito .description {
    
            width: 80%;
            display: flex;
            gap: 10px;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
    
        .carrito .description .eliminar {
            color: red;
        }
    
        .carrito .description p {
            font-size: 1vh;
            color: var(--color-blanco);
        }
    
        .carrito .principal,.cantidad,.precio,.subtotal {
            text-align: center;
        }
    
        .vaciarcarrito p, .totalcarrito p{
            font-size: 1.5vh;
        }

        .carritopciones {
            align-items: center;
            color: var(--color-blanco);
            display: flex;
            flex-direction: row;
            bottom: 100px;
            width: 850px;
            justify-content: center;
    
        }
        
        .carritopciones .vaciarcarrito {
            box-shadow: black 5px 5px;
            color: var(--color-blanco);
            font-size: 15px;
            border: none;
            background-color: var(--color-gris);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            width: 10em;
            height: 3em;
            transition: all 0.5s;
        }
        
        .vaciarcarrito:hover {
            color: var(--color-negro);
            cursor: pointer;
            background-color: var(--color-blanco);
        }
        
        .carritopciones .totalcarrito {
            box-shadow: black 5px 5px;
            color: var(--color-blanco);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            height: 90px;
            width: 200px;
            color: var(--color-blanco);
            background-color: var(--color-gris);
            flex-direction: column;
        }
        
        .carritopciones .compra {
            display: flex;
            justify-content: center;
            align-items: center;
            width:70%;
            height: 30%;
        }
        .carritopciones .comprar {
            color: var(--color-blanco);
            background-color: var(--color-grisclaro);
            width: 100%;
            height: 100%;
            border: none;
            border-radius: 10px;
            transition: all 0.5s;
        }


    }
    `

    loadComponent(){
        this.resetComponent();
    }

    render(){

    return html`
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>


    ${this.dataCarrito.map(val => html`
        <div class="carrito producto">
            <img src="${val.imagen}">
            <div class="description">
                <div class="principal">
                    <p>Nombre</p>
                    <p class="nombre">${val.nombre}</p>
                </div>
                
                <div class="cantidad">
                    <p>Cantidad</p>
                    <p>${val.cantidad}</p>
                </div>

                <div class="precio">
                    <p>Precio</p>
                    <p>${val.precio}</p>
                </div>

                <div class="subtotal">
                    <p>Subtotal</p>
                    <p>${val.subtotal}</p>
                </div>

                <div class="eliminar" @click="${() => this.eliminarindividuo(val.id)}">
                    <i class='bx bx-x'></i>
                </div>

            </div>
        </div>
    
    
    
    `)}







    



    <div class="carritopciones">
        <button class="vaciarcarrito" @click="${this.eliminarCarrito}">
            <p>Vaciar Carrito</p>
        </button>
        <div class="totalcarrito">
            <p>Total</p>
            <p class="total">
                ${this.totalCarrito()}
            </p>

            <div class="compra">
                <button class="comprar" @click=${this.eliminarCarrito}>
                    <p>Comprar Ahora</p>
            </button>
            </div>  
        </div>
    </div>

        
        `
    }

}

