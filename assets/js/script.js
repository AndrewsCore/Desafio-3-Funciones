// El color por defecto es verde (green)
function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");

// Al hacer clic, se pasa el elemento y el color 'yellow'
ele.addEventListener("click", () => {
    pintar(ele, 'yellow');
});

// Llamada para aplicar el color por defecto (verde)
pintar(ele);