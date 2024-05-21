import { LitElement, html, css } from "lit";

export class productos extends LitElement {
    constructor() {
        super()

    }


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
        <div class="card camisetas">
            <img src="img/defaultshirt.png">
            <div class="description">
                <div class="principal">
                    <p>CAMISETASSS</p>
                    <p class="costoCard">$15.000</p>
                </div>
                <button class="agregar">Agregar</button>
            </div>
        </div>


        <div class="card pantalones">
            <img src="img/defaultshirt.png">
            <div class="description">
                <div class="principal">
                    <p>PANTALONESRAHHSDHASD</p>
                    <p class="costoCard">$15.000</p>
                </div>
                <button class="agregar">Agregar</button>
            </div>
        </div>

        <div class="card abrigos">
            <img src="img/defaultshirt.png">
            <div class="description">
                <div class="principal">
                    <p>ABRIGOOOSS</p>
                    <p class="costoCard">$15.000</p>
                </div>
                <button class="agregar">Agregar</button>
            </div>
        </div>

        
        `
    }

}

