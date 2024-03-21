let btnCamisas = document.getElementById("btnCamisetas")
let btnabrigos = document.getElementById("btnAbrigos")
let btnpantalones = document.getElementById("btnPantalones")
let btnproductos = document.getElementById("btnProductos")
let btncarrito = document.getElementById("btnCarrito")

btnCamisas.addEventListener("click", event => {
    const pantalonesElements = document.querySelectorAll(".pantalones , .abrigos");
    const ver = document.querySelectorAll(".camisetas")

    pantalonesElements.forEach(element => {
        element.style.display = "none";
    });

    ver.forEach(element => {
        element.style.display = "flex";
    });

    document.querySelector(".titulomain").innerHTML = 'Camisas'

    btnCamisas.style.color = "white";
    btnabrigos.style.color = "none";
    btnpantalones.style.color = "none";
    btnproductos.style.color = "none";
});

btnabrigos.addEventListener("click", event => {
    const pantalonesElements = document.querySelectorAll(".camisetas , .pantalones");
    const ver = document.querySelectorAll(".abrigos")
    pantalonesElements.forEach(elementos => {
        elementos.style.display = "none";
    });

    ver.forEach(element => {
        element.style.display = "flex";
    });

    document.querySelector(".titulomain").innerHTML = 'Abrigos'

    btnCamisas.style.color = "none";
    btnabrigos.style.color = "white";
    btnpantalones.style.color = "none";
    btnproductos.style.color = "none";
});

btnpantalones.addEventListener("click", event => {
    const pantalonesElements = document.querySelectorAll(".camisetas , .abrigos");
    const ver = document.querySelectorAll(".pantalones")

    pantalonesElements.forEach(element => {
        element.style.display = "none";
    });
    ver.forEach(element => {
        element.style.display = "flex";
    });

    document.querySelector(".titulomain").innerHTML = 'Pantalones'

    btnCamisas.style.color = "none";
    btnabrigos.style.color = "none";
    btnpantalones.style.color = "white";
    btnproductos.style.color = "none";
});

btnproductos.addEventListener("click", event => {;
    const ver = document.querySelectorAll(".pantalones, .abrigos, .camisetas")

    ver.forEach(element => {
        element.style.display = "flex";
    });

    document.querySelector(".titulomain").innerHTML = 'Productos'

    btnCamisas.style.color = "none";
    btnabrigos.style.color = "none";
    btnpantalones.style.color = "none";
    btnproductos.style.color = "white";
});