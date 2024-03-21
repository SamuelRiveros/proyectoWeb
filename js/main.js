let btnCamisas = document.getElementById("btnCamisetas")
let btnabrigos = document.getElementById("btnAbrigos")
let btnpantalones = document.getElementById("btnPantalones")
let btnproductos = document.getElementById("btnProductos")
let btncarrito = document.getElementById("btnCarrito")


window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("btnProductos").click();
});


btnCamisas.addEventListener("click", event => {
    const quitar = document.querySelectorAll(".pantalones , .abrigos , .carrito , .carritopciones");
    const ver = document.querySelectorAll(".camisetas")

    quitar.forEach(element => {
        element.style.display = "none";
    });

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
    const quitar = document.querySelectorAll(".camisetas , .pantalones , .carrito , .carritopciones");
    const ver = document.querySelectorAll(".abrigos")
    quitar.forEach(elementos => {
        elementos.style.display = "none";
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
    const quitar = document.querySelectorAll(".camisetas , .abrigos , .carrito , .carritopciones");
    const ver = document.querySelectorAll(".pantalones")

    quitar.forEach(element => {
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
    const quitar = document.querySelectorAll(".carrito , .carritopciones");
    const ver = document.querySelectorAll(".pantalones, .abrigos, .camisetas")

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

btncarrito.addEventListener("click", event=> {
    const quitar = document.querySelectorAll(".camisetas , .abrigos , .pantalones");
    const ver = document.querySelectorAll(".carrito , .carritopciones")

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