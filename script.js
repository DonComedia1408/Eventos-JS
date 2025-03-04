/*Se crea las variables de los colores de fondos y los tipos de letra*/
const colores = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "gray", "cyan"];
const fuentes = ["Arial", "Verdana", "Tahoma", "Georgia", "Times New Roman", "Courier New", "Lucida Console", "Impact", "Comic Sans MS", "Palatino Linotype"];

/*Evento que ocurre al pulsar el boton de cambiar el color del fondo*/
document.getElementById("boton-fondo").addEventListener("click", () => {
    let index = Math.floor(Math.random() * 10);
    console.log(index);
    document.body.style.backgroundColor = colores[index];
    if (colores[index] === "red") {
        document.getElementById("texto-fondo").textContent = "rojo";
    } else if (colores[index] === "blue") {
        document.getElementById("texto-fondo").textContent = "azul";
    } else if (colores[index] === "green") {
        document.getElementById("texto-fondo").textContent = "verde";
    } else if (colores[index] === "yellow") {
        document.getElementById("texto-fondo").textContent = "amarillo";
    } else if (colores[index] === "purple") {
        document.getElementById("texto-fondo").textContent = "morado";
    } else if (colores[index] === "orange") {
        document.getElementById("texto-fondo").textContent = "naranja";
    } else if (colores[index] === "pink") {
        document.getElementById("texto-fondo").textContent = "rosa";
    } else if (colores[index] === "brown") {
        document.getElementById("texto-fondo").textContent = "marron";
    } else if (colores[index] === "gray") {
        document.getElementById("texto-fondo").textContent = "gris";
    } else if (colores[index] === "cyan") {
        document.getElementById("texto-fondo").textContent = "cian";
    };
});

/*Evento que ocurre al pulsar el boton de cambiar el tipo de letra*/
document.getElementById("boton-letra").addEventListener("click", () => {
    let index = Math.floor(Math.random() * 10);
    document.body.style.fontFamily = fuentes[index];
    document.getElementById("texto-letra").textContent = fuentes[index];
});

/*Evento que ocurre al pulsar el boton de cambiar el numero*/
document.getElementById("boton-numero").addEventListener("click", () => {
    let numero = Math.floor(Math.random() * 10) + 1;
    document.getElementById("texto-numero").textContent = numero;
});

/*Evento que ocurre al pulsar el boton de actualizar el circulo, de forma de que cuando sea pulsado, tome las caracteristicas actuales obetenidas de los otros eventos*/
document.getElementById("boton-circulo").addEventListener("click", () => {
    document.getElementById("circulo").style.backgroundColor = document.body.style.backgroundColor;
    document.getElementById("circulo").style.fontFamily = document.getElementById("texto-letra").textContent;
    document.getElementById("circulo").textContent = document.getElementById("texto-numero").textContent;
})