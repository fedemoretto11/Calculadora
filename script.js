const botonNumero = document.querySelectorAll(".numeros");
const botonOperador = document.querySelectorAll(".operadores");
const botonClear = document.querySelectorAll(".clear");
const botonIgual = document.querySelectorAll(".igual");
const displayValorAnterior = document.querySelector(".valor-anterior");
const displayValorActual = document.querySelector(".valor-actual");
const borrar = document.querySelector(".borrar");


displayValorActual.innerHTML = '';

        botonNumero.forEach(boton => {
                boton.addEventListener('click', () => {
                    displayValorActual.innerHTML = displayValorActual.innerHTML + boton.innerHTML;
                })
        })

        
    botonOperador.forEach(boton => {
        boton.addEventListener('click', () => {
            console.log(boton.innerHTML);
            // displayValorAnterior.innerHTML = displayValorActual.innerHTML + boton.innerHTML;
            // displayValorActual.innerHTML = '';
            displayValorActual.innerHTML += boton.innerHTML;
        })
    })
   

        

    botonClear.forEach(boton => {
        boton.addEventListener('click', () => {
            console.log(boton.innerHTML);
            displayValorActual.innerHTML = '';
            displayValorAnterior.innerHTML = ''
        })
    })

    botonIgual.forEach(boton => {
        boton.addEventListener('click', () => {
            console.log(boton.innerHTML);
            displayValorActual.innerHTML = eval(displayValorActual.innerHTML);
        })
    })

    borrar.addEventListener('click', () => {
        displayValorActual.innerHTML = displayValorActual.innerHTML.slice(0,-1)
    })

