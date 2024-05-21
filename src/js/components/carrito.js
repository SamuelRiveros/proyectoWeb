import { LitElement, html, css } from "lit";

export class carrito extends LitElement {
    constructor() {
        super()

    }


    static styles= css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .carritozone {
        flex-wrap: wrap;
        overflow-y: scroll;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        gap: 2em;
        padding: 10px;
    }
    
    .carrito {
        display: flex;
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
        position: absolute;
        align-items: center;
        color: var(--color-blanco);
        display: flex;
        flex-direction: row;
        bottom: 100px;
        width: 850px;
        justify-content: space-between;

    }
    
    .carritopciones .vaciarcarrito {
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
    `
    render(){

    return html`
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    <div class="carrito producto">
        <img src="img/defaultshirt.png">
        <div class="description">
            <div class="principal">
                <p>Nombre</p>
                <p class="nombre">NOMBRE PLACEHOLDER</p>
            </div>
            
            <div class="cantidad">
                <p>Cantidad</p>
                <p>CANTIDAD PLACEHOLDER</p>
            </div>

            <div class="precio">
                <p>Precio</p>
                <p>PRECIO PLACEHOLDER</p>
            </div>

            <div class="subtotal">
                <p>Subtotal</p>
                <p>SUBTOTAL PLACEHOLDER</p>
            </div>

            <div class="eliminar">
                <i class='bx bx-x'></i>
            </div>

        </div>
    </div>







    



    <div class="carritopciones">
        <button class="vaciarcarrito">
            <p>Vaciar Carrito</p>
        </button>
        <div class="totalcarrito">
            <p>Total</p>
            <p class="total">
                $TOTAL PLACEHOLDER
            </p>

            <div class="compra">
                <button class="comprar">
                    <p>Comprar Ahora</p>
            </button>
            </div>  
        </div>
    </div>

        
        `
    }

}

