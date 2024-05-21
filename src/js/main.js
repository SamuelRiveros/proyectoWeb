import { productos } from "./components/products.js"
customElements.define("my-productos", productos);

import { carrito } from "./components/carrito.js";
customElements.define("my-carrito", carrito)




let btnCamisas = document.getElementById("btnCamisetas")
let btnabrigos = document.getElementById("btnAbrigos")
let btnpantalones = document.getElementById("btnPantalones")
let btnproductos = document.getElementById("btnProductos")
let btncarrito = document.getElementById("btnCarrito")


window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("btnProductos").click();
});


btnCamisas.addEventListener("click", event => {
    const myproductos = document.querySelector("my-productos");
    const mycarrito = document.querySelector("my-carrito");

    const quitar = myproductos.shadowRoot.querySelectorAll(".pantalones, .abrigos");
    
    const ver = myproductos.shadowRoot.querySelectorAll(".camisetas")

    const quitarcarrito = mycarrito.shadowRoot.querySelectorAll(".carrito , .carritopciones")

    const elementosAQuitar = [...quitar, ...quitarcarrito];

    elementosAQuitar.forEach(element => {
        element.style.display = "none";
    });


    quitar.forEach(element => {
        element.style.display = "none";
    })
    ver.forEach(element => {
        element.style.display = "flex";
    });

    document.querySelector(".titulomain").innerHTML = 'Camisas'

    btnCamisas.style.color = "white";
    btnabrigos.style.color = "black";
    btnpantalones.style.color = "black";
    btnproductos.style.color = "black";
    btncarrito.style.color = "black"
});

btnabrigos.addEventListener("click", event => {
    const myproductos = document.querySelector("my-productos");
    const mycarrito = document.querySelector("my-carrito");

    const quitar = myproductos.shadowRoot.querySelectorAll(".pantalones, .camisetas");
    
    const ver = myproductos.shadowRoot.querySelectorAll(".abrigos")

    const quitarcarrito = mycarrito.shadowRoot.querySelectorAll(".carrito , .carritopciones")

    const elementosAQuitar = [...quitar, ...quitarcarrito];

    elementosAQuitar.forEach(element => {
        element.style.display = "none";
    });


    ver.forEach(element => {
        element.style.display = "flex";
    });

    document.querySelector(".titulomain").innerHTML = 'Abrigos'

    btnCamisas.style.color = "black";
    btnabrigos.style.color = "white";
    btnpantalones.style.color = "black";
    btnproductos.style.color = "black";
    btncarrito.style.color = "black"
});

btnpantalones.addEventListener("click", event => {
    const myproductos = document.querySelector("my-productos");
    const mycarrito = document.querySelector("my-carrito");
    
    const quitar = myproductos.shadowRoot.querySelectorAll(".camisetas , .abrigos");
    const ver = myproductos.shadowRoot.querySelectorAll(".pantalones")
    const quitarcarrito = mycarrito.shadowRoot.querySelectorAll(".carrito , .carritopciones")

    const elementosAQuitar = [...quitar, ...quitarcarrito];

    elementosAQuitar.forEach(element => {
        element.style.display = "none";
    });
    
    ver.forEach(element => {
        element.style.display = "flex";
    });

    document.querySelector(".titulomain").innerHTML = 'Pantalones'

    btnCamisas.style.color = "black";
    btnabrigos.style.color = "black";
    btnpantalones.style.color = "white";
    btnproductos.style.color = "black";
    btncarrito.style.color = "black"
});

btnproductos.addEventListener("click", event => {
    const myproductos = document.querySelector("my-productos");
    const mycarrito = document.querySelector("my-carrito");

    const quitar = mycarrito.shadowRoot.querySelectorAll(".carrito, .carritopciones");
    const ver = myproductos.shadowRoot.querySelectorAll(".pantalones, .abrigos, .camisetas")

    quitar.forEach(element => {
        element.style.display = "none";
    });

    ver.forEach(element => {
        element.style.display = "flex";
    });

    document.querySelector(".titulomain").innerHTML = 'Todos los productos'

    btnCamisas.style.color = "black";
    btnabrigos.style.color = "black";
    btnpantalones.style.color = "black";
    btnproductos.style.color = "white";
    btncarrito.style.color = "black"
});


// CARRITO POR EDITARRRRR RAHH //


btncarrito.addEventListener("click", event=> {
    const myproductos = document.querySelector("my-productos")
    const mycarrito = document.querySelector("my-carrito");

    const quitar = myproductos.shadowRoot.querySelectorAll(".camisetas , .abrigos , .pantalones");
    const ver = mycarrito.shadowRoot.querySelectorAll(".carrito , .carritopciones")

    quitar.forEach(element => {
        element.style.display = "none";
    });
    ver.forEach(element => {
        element.style.display = "flex";
    });

    document.querySelector(".titulomain").innerHTML = '- Carrito -'

    btnCamisas.style.color = "black";
    btnabrigos.style.color = "black";
    btnpantalones.style.color = "black";
    btnproductos.style.color = "black";
    btncarrito.style.color = "white"
})
















/* Funcionalidad del menu desplegable */

function change() {
    var btn = document.getElementById("menucel");
    btn.classList.toggle("visible");
}


function cerrarMenu() {
    var btn = document.getElementById("menucel");
    btn.classList.remove("visible");
}

var enlacesMenu = document.querySelectorAll(".menucel a");
enlacesMenu.forEach(function(enlace) {
    enlace.addEventListener("click", cerrarMenu);
});




document.getElementById("celProductos").addEventListener("click", function() {
    document.getElementById("btnProductos").click();
});

document.getElementById("celAbrigos").addEventListener("click", function() {
    document.getElementById("btnAbrigos").click();
});

document.getElementById("celCamisetas").addEventListener("click", function() {
    document.getElementById("btnCamisetas").click();
});

document.getElementById("celPantalones").addEventListener("click", function() {
    document.getElementById("btnPantalones").click();
});

document.getElementById("celCarrito").addEventListener("click", function() {
    document.getElementById("btnCarrito").click();
});