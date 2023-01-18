const displayValorAnterior = document.getElementById('displayValorAnterior');
const displayValorActual = document.getElementById('displayValorActual')

const botonNumero = document.querySelectorAll(".numeros");
const botonOperador = document.querySelectorAll(".operadores");
const botonClear = document.querySelector(".clear");
const botonIgual = document.querySelectorAll(".igual");
const borrar = document.querySelector(".borrar");


this.display = new Display (displayValorAnterior, displayValorActual);

botonNumero.forEach(boton => {
    boton.addEventListener('click', () => {
        display.agregarNumero(boton.innerHTML);
    })
})

borrar.addEventListener('click', () => {
    display.borrar();
})

botonClear.addEventListener('click', () => {
    display.borrarTodo();
})

botonOperador.forEach(boton => {
    boton.addEventListener('click', () => {
        display.computar(boton.value)
    })
})

