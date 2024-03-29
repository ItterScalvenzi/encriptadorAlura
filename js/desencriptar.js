var botonDesencriptar = document.querySelector("#desencriptar");

botonDesencriptar.addEventListener("click", desencriptar);

function desencriptar(){
        
    var texto = document.querySelector(".input-text").value;
    if (texto.length != 0){

        if(!validarMayusculasCaracteres(texto)){
            alert("No se permiten mayusculas ni carecteres especiales");
        } else{
            var txtCifrado = texto.replace(/enter/igm,"e");
            var txtCifrado = txtCifrado.replace(/ober/igm,"o");
            var txtCifrado = txtCifrado.replace(/imes/igm,"i");
            var txtCifrado = txtCifrado.replace(/ai/igm,"a");
            var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

            var munieco = document.querySelector(".contenedor-munieco");
            munieco.classList.add("invisible");
            var contMensaje = document.querySelector(".contenedor-mensaje");
            contMensaje.classList.add("invisible");
            var contIngresar = document.querySelector(".contenedor-ingresar");
            contIngresar.classList.add("invisible");
            var contenedorResultado = document.querySelector(".contenedor-resultado");
            contenedorResultado.style.display = "visibility";
            contenedorResultado.style.display = "inherit";
            var contenedorCopiar = document.querySelector(".contenedor-copiar");
            contenedorCopiar.style.display = "visibility";
            contenedorCopiar.style.display = "inherit";
            var contenido = document.querySelector(".texto-desencriptado");
            contenido.textContent = txtCifrado;
        }
    } else{
        console.log(texto);
        alert("No ha ingresado ningun texto!");
    }
    
}

function validarMayusculasCaracteres(cadena){
    var reg = /[a-z\u00C0-\u017F]/g;
    return reg.test(cadena);
}