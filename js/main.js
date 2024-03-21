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