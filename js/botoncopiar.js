var botonCopiar = document.querySelector(".btn-copiar");
    botonCopiar.addEventListener("click", copiar);
    
    function copiar(){
        var contenido = document.getElementById("textoDesencriptado");
        console.log(contenido);
        contenido.select();
        document.execCommand("copy");
        alert("Copiado!");
      }