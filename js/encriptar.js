var ingreso = document.querySelector(".input-text");
ingreso.focus();
var botonEncriptar = document.querySelector("#encriptar");

botonEncriptar.addEventListener("click", encriptar);

function encriptar() {
  var texto = document.querySelector(".input-text").value;

  if (texto.length != 0) {
    if (!validarMayusculasCaracteres(texto)) {
      console.log(validarMayusculasCaracteres(texto));
      alert("No se permiten mayusculas ni carecteres especiales");
    }

    var textoResultado = new String();
    for (var i = 0; i < texto.length; i++) {
      caracter = texto[i];
      switch (caracter) {
        case "a":
          textoResultado += "ai";
          break;
        case "e":
          textoResultado += "enter";
          break;
        case "i":
          textoResultado += "imes";
          break;
        case "o":
          textoResultado += "ober";
          break;
        case "u":
          textoResultado += "ufat";
          break;
        default:
          textoResultado += caracter;
          break;
      }
    }
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
    contenido.textContent = textoResultado;
  } else {
    alert("No ha ingresado ningun texto!");
  }

  //funcion para validar que no tenga mayusculas ni caracteres especiales
  function validarMayusculasCaracteres(cadena) {
      var reg = /^[a-z\s]+$/;
      return reg.test(cadena);
  }
}
