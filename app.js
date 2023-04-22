
function encriptarTexto(texto) {
    texto = texto.toLowerCase();
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    return texto;
  }

  

  function desencriptarTexto(texto) {
    texto = texto.toLowerCase();
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    return texto;
  }



  function botonEncriptar(){
    document.getElementById("title").style.display = "none";
    document.getElementById("subtitle").style.display = "none";
    document.getElementById("ilustracion").style.display = "none";
    document.getElementById("salida-textarea").style.display = "block";
    document.getElementById("btn-copiar").style.display = "block";
    document.getElementById("salida-textarea").value =   encriptarTexto(document.getElementById("entrada-texto").value)

}

function botonDesencriptar(){
    document.getElementById("title").style.display = "none";
    document.getElementById("subtitle").style.display = "none";
    document.getElementById("ilustracion").style.display = "none";
    document.getElementById("salida-textarea").style.display = "block";
    document.getElementById("btn-copiar").style.display = "block";
    document.getElementById("salida-textarea").value =  desencriptarTexto(document.getElementById("entrada-texto").value)

}


function botonCopiar() {
    let texto = document.getElementById("salida-textarea");
  texto.select();
  document.execCommand("copy");




  document.getElementById("copiado").style.display = "block";

  setTimeout(() => {
    document.getElementById("copiado").style.display = "none";
  }, 2000);
    
}



  




 