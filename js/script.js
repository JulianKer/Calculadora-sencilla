const teclas = document.querySelectorAll(".tecla");
let displayResultado = document.querySelector("#display-resultado");

let resultado = 0;

teclas.forEach(tecla =>{
    tecla.addEventListener("click", ()=>{
        if (displayResultado.textContent == 0) {
            displayResultado.textContent = "";
        }

        if (tecla.textContent == "AC") {
            console.log("apretaste ac")
            resultado = 0;
            displayResultado.innerHTML = resultado;

        }else if (tecla.textContent == "DE") {
            
            displayResultado.textContent = displayResultado.textContent.slice(0,-1);

        }else if (tecla.textContent == "=") {
            realizarOperacion();

        }else{
            displayResultado.textContent += tecla.textContent;
        }

        corroborarQueElCampoNoEsteVacio();
    })
})

function corroborarQueElCampoNoEsteVacio(){
    if (displayResultado.textContent == "") {
        displayResultado.textContent = 0;
    }
}

function realizarOperacion(){
    resultado = displayResultado.textContent.replace("x","*");
    displayResultado.textContent = eval(resultado);
}